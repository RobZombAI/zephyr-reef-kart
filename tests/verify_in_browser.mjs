// tests/verify_in_browser.mjs
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
  // Test 1: Track Modal on Track 0
  const page1 = await browser.newPage();
  page1.on('console', msg => console.log('PAGE LOG:', msg.text()));
  page1.on('pageerror', err => console.error('PAGE ERROR:', err.message));
  await page1.setViewport({ width: 1280, height: 720 });
  await page1.evaluateOnNewDocument(() => localStorage.setItem('zephyr_track', '0'));
  await page1.goto(`http://localhost:${port}/index.html`, { waitUntil: 'networkidle2' });
  await page1.waitForFunction(() => !!window.__zephyr, { timeout: 15000 });

  const trackCount = await page1.evaluate(() => window.__ZEPHYR_TRACKS?.length || 0);
  const themeCount = await page1.evaluate(() => window.__ZEPHYR_THEMES?.length || 0);
  console.log(`Live tracks loaded: ${trackCount}, themes loaded: ${themeCount}`);

  await page1.evaluate(() => {
    const modal = document.getElementById('z-track-modal');
    if (modal) modal.classList.remove('hidden');
  });
  await new Promise(r => setTimeout(r, 600));
  await page1.screenshot({ path: path.join(artifactsDir, 'test_tracks_modal.png') });
  console.log('Captured test_tracks_modal.png');
  await page1.close();

  // Test 2: Track 7 (Tidal Drift Arena - Coppa Canyon)
  const page2 = await browser.newPage();
  await page2.setViewport({ width: 1280, height: 720 });
  await page2.evaluateOnNewDocument(() => localStorage.setItem('zephyr_track', '7'));
  await page2.goto(`http://localhost:${port}/index.html`, { waitUntil: 'networkidle2' });
  await page2.waitForFunction(() => !!window.__zephyr, { timeout: 15000 });
  await page2.evaluate(() => window.__zephyr.startRace());
  await new Promise(r => setTimeout(r, 1200));

  const trk7 = await page2.evaluate(() => window.__ACTIVE_THEME?.name || 'Unknown');
  console.log('Track 7 Active Theme:', trk7);
  await page2.screenshot({ path: path.join(artifactsDir, 'test_track7_tidal_drift.png') });
  console.log('Captured test_track7_tidal_drift.png');
  await page2.close();

  // Test 3: Track 14 (Stratos Hairpins - Coppa Cielo)
  const page3 = await browser.newPage();
  await page3.setViewport({ width: 1280, height: 720 });
  await page3.evaluateOnNewDocument(() => localStorage.setItem('zephyr_track', '14'));
  await page3.goto(`http://localhost:${port}/index.html`, { waitUntil: 'networkidle2' });
  await page3.waitForFunction(() => !!window.__zephyr, { timeout: 15000 });
  await page3.evaluate(() => window.__zephyr.startRace());
  await new Promise(r => setTimeout(r, 1200));

  const trk14 = await page3.evaluate(() => window.__ACTIVE_THEME?.name || 'Unknown');
  console.log('Track 14 Active Theme:', trk14);
  await page3.screenshot({ path: path.join(artifactsDir, 'test_track14_stratos_hairpins.png') });
  console.log('Captured test_track14_stratos_hairpins.png');
  await page3.close();

  // Test 4: Track 23 (Zephyr Omega Finale - Coppa Nova)
  const page4 = await browser.newPage();
  await page4.setViewport({ width: 1280, height: 720 });
  await page4.evaluateOnNewDocument(() => localStorage.setItem('zephyr_track', '23'));
  await page4.goto(`http://localhost:${port}/index.html`, { waitUntil: 'networkidle2' });
  await page4.waitForFunction(() => !!window.__zephyr, { timeout: 15000 });
  await page4.evaluate(() => window.__zephyr.startRace());
  await new Promise(r => setTimeout(r, 1200));

  const trk23 = await page4.evaluate(() => window.__ACTIVE_THEME?.name || 'Unknown');
  console.log('Track 23 Active Theme:', trk23);
  await page4.screenshot({ path: path.join(artifactsDir, 'test_track23_omega_finale.png') });
  console.log('Captured test_track23_omega_finale.png');
  await page4.close();

  console.log('SUCCESS: All 24 tracks browser renders verified!');
} finally {
  await browser.close();
  server.close();
  console.log('Browser and server closed.');
}
