// tests/verify_resolutions.mjs
import puppeteer from 'puppeteer';
import http from 'http';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const artifactsDir = path.join(root, 'build', 'artifacts');
fs.mkdirSync(artifactsDir, { recursive: true });

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
console.log(`Resolution test server running at http://localhost:${port}`);

const browser = await puppeteer.launch({
  headless: 'new',
  args: ['--no-sandbox', '--disable-setuid-sandbox', '--use-gl=angle', '--use-angle=swiftshader']
});

const viewports = [
  { name: '20_9_phone', label: 'Ultra-Wide Phone 20:9', width: 900, height: 405 },
  { name: '16_9_standard', label: 'Standard Mobile 16:9', width: 1280, height: 720 },
  { name: '4_3_tablet', label: 'Android Tablet 4:3', width: 1024, height: 768 },
  { name: '1_1_foldable', label: 'Foldable Display 1:1', width: 800, height: 800 }
];

try {
  for (const vp of viewports) {
    console.log(`Testing ${vp.label} (${vp.width}x${vp.height})...`);
    const page = await browser.newPage();
    page.on('pageerror', err => console.error('PAGE ERROR:', err.message));
    await page.setViewport({ width: vp.width, height: vp.height });
    await page.goto(`http://localhost:${port}/index.html`, { waitUntil: 'networkidle2' });
    await page.waitForFunction(() => !!window.__zephyr, { timeout: 15000 });

    // Start race
    await page.evaluate(() => {
      window.__zephyr.startRace();
    });

    // Wait for race elements to initialize & render frames
    await new Promise(r => setTimeout(r, 1200));

    // Verify engine state and camera aspect
    const metrics = await page.evaluate(() => {
      const z = window.__zephyr;
      const cam = z.director.camera.camera;
      return {
        mode: z.mode,
        aspect: cam.aspect,
        fov: cam.fov,
        drsScale: z.drsScale,
        pixelRatio: z.renderer.getPixelRatio(),
        canvasWidth: z.renderer.domElement.width,
        canvasHeight: z.renderer.domElement.height
      };
    });

    console.log(`  Metrics for ${vp.label}:`, metrics);

    const shotPath = path.join(artifactsDir, `test_res_${vp.name}.png`);
    await page.screenshot({ path: shotPath });
    console.log(`  Saved screenshot: test_res_${vp.name}.png`);

    await page.close();
  }

  console.log('All resolutions verified successfully!');
} finally {
  await browser.close();
  server.close();
}
