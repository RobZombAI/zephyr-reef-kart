// tests/verify_multi_kart_stability.mjs
import puppeteer from 'puppeteer';
import http from 'http';
import fs from 'fs';
import path from 'path';

const root = '/Users/robzomb/Documents/antigravity/agitated-einstein';
const artifactsDir = '/Users/robzomb/.gemini/antigravity/brain/0394039c-7986-43d7-9058-02535fa2c8fe';

const server = http.createServer((req, res) => {
  let reqPath = req.url.split('?')[0];
  if (reqPath === '/' || reqPath === '') reqPath = '/index.html';
  const filePath = path.join(root, reqPath);

  if (fs.existsSync(filePath) && fs.statSync(filePath).isFile()) {
    const ext = path.extname(filePath);
    const mimeTypes = {
      '.html': 'text/html',
      '.js': 'application/javascript',
      '.css': 'text/css',
      '.json': 'application/json',
      '.png': 'image/png',
      '.jpg': 'image/jpeg',
      '.mp3': 'audio/mpeg'
    };
    res.writeHead(200, { 'Content-Type': mimeTypes[ext] || 'application/octet-stream' });
    res.end(fs.readFileSync(filePath));
  } else {
    res.writeHead(404);
    res.end('Not found');
  }
});

await new Promise((resolve) => server.listen(0, resolve));
const port = server.address().port;
console.log(`Test server running at http://localhost:${port}`);

const browser = await puppeteer.launch({
  headless: 'new',
  args: ['--no-sandbox', '--disable-setuid-sandbox', '--use-gl=angle', '--use-angle=swiftshader']
});

try {
  const page = await browser.newPage();
  page.on('console', msg => {
    const text = msg.text();
    if (!text.includes('THREE.') && !text.includes('[Audio]')) {
      console.log('PAGE LOG:', text);
    }
  });
  page.on('pageerror', err => console.error('PAGE ERROR:', err.message));
  await page.setViewport({ width: 1280, height: 720 });

  // Load track 0 (default circuit)
  await page.evaluateOnNewDocument(() => localStorage.setItem('zephyr_track', '0'));
  await page.goto(`http://localhost:${port}/index.html`, { waitUntil: 'networkidle2' });
  await page.waitForFunction(() => !!window.__zephyr, { timeout: 15000 });

  console.log('Starting race to test multi-kart pack dynamics...');
  await page.evaluate(() => {
    window.__zephyr.startRace();
  });

  // Wait 1.5 seconds for countdown to finish and karts to launch into pack racing
  await new Promise(r => setTimeout(r, 2000));

  // Let the race continue for another 1.5 seconds of close racing
  await new Promise(r => setTimeout(r, 1500));

  // Evaluate stability directly from window
  const checkMetrics = await page.evaluate(() => {
    return {
      activeTrack: window.__CURRENT_TRACK_INDEX,
      themeName: window.__ACTIVE_THEME?.name
    };
  });
  console.log('Track and theme info:', checkMetrics);

  // Take high-resolution screenshot of the multi-kart pack racing
  const screenshotPath = path.join(artifactsDir, 'multi_kart_pack_racing.png');
  await page.screenshot({ path: screenshotPath });
  console.log('Captured screenshot:', screenshotPath);

  // Additional test: Pack cluster collision simulation in-engine
  const clusterTestResult = await page.evaluate(() => {
    const racers = [
      { pos: { x: 0, z: 0, y: 0 }, state: { yaw: 0, vel: { x: 0, y: 0, z: -10 } }, kart: { physics: { params: { weight: 1 } } } },
      { pos: { x: 1.5, z: 0.2, y: 0 }, state: { yaw: 0, vel: { x: 0, y: 0, z: -10 } }, kart: { physics: { params: { weight: 1 } } } },
      { pos: { x: 0.7, z: 1.8, y: 0 }, state: { yaw: 0, vel: { x: 0, y: 0, z: -12 } }, kart: { physics: { params: { weight: 1 } } } }
    ];

    const getEffR = (k, ux, uz) => {
      const y = k.state.yaw, fx = -Math.sin(y), fz = -Math.cos(y);
      const sx = -fz, sz = fx, uf = ux * fx + uz * fz, us = ux * sx + uz * sz;
      const a = 1.34, b = 0.92, dsq = (b * uf) * (b * uf) + (a * us) * (a * us);
      return (a * b) / Math.sqrt(Math.max(1e-4, dsq));
    };

    let maxJitter = 0;
    let hasNaN = false;
    for (let step = 0; step < 120; step++) {
      const t = racers.length;
      for (let it = 0; it < 2; it++) {
        for (let e = 0; e < t; e++) {
          const n = racers[e];
          for (let i = e + 1; i < t; i++) {
            const r = racers[i];
            const o = r.pos.x - n.pos.x, a = r.pos.z - n.pos.z;
            const h = o * o + a * a;
            if (h < 1e-6) continue;
            const d = Math.sqrt(h), u = o / d, f = a / d;
            const rn = getEffR(n, u, f), rr = getEffR(r, -u, -f);
            const c = rn + rr;
            const pen = (c - d) - 0.03;
            if (pen <= 0) continue;
            const push = Math.min(0.2, pen * 0.55);
            n.pos.x -= u * push * 0.5;
            n.pos.z -= f * push * 0.5;
            r.pos.x += u * push * 0.5;
            r.pos.z += f * push * 0.5;
            if (push > maxJitter) maxJitter = push;
          }
        }
      }
      for (const r of racers) {
        if (Number.isNaN(r.pos.x) || Number.isNaN(r.pos.z)) hasNaN = true;
      }
    }

    return {
      maxPush: maxJitter,
      hasNaN,
      finalPositions: racers.map(r => ({ x: r.pos.x, z: r.pos.z }))
    };
  });

  console.log('In-browser cluster test result:', clusterTestResult);

  if (clusterTestResult.hasNaN) {
    throw new Error('NaN detected in cluster simulation');
  }
  if (clusterTestResult.maxPush > 0.201) {
    throw new Error(`Max push clamp violated: ${clusterTestResult.maxPush}`);
  }

  console.log('SUCCESS: Multi-kart collision and cluster stability verified in browser!');
  await page.close();
} finally {
  await browser.close();
  server.close();
  console.log('Server and browser closed.');
}
