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
console.log(`Test server running at http://localhost:${port}`);

const browser = await puppeteer.launch({
  headless: 'new',
  args: ['--no-sandbox', '--disable-setuid-sandbox', '--use-gl=angle', '--use-angle=swiftshader']
});

const tracksToVerify = [
  { index: 0, name: 'Sunken Atlantis Citadel', file: 'test_level0_atlantis.png' },
  { index: 1, name: 'Zephyr Terminal Runway', file: 'test_level1_airport.png' },
  { index: 2, name: 'Ancient Redwood Forest', file: 'test_level2_forest.png' },
  { index: 3, name: 'Apex Big-Air Stadium', file: 'test_level3_stadium.png' },
  { index: 4, name: 'Redrock Canyon & Mines', file: 'test_level4_canyon.png' },
  { index: 5, name: 'Glacier Frostbite Peaks', file: 'test_level5_glacier.png' },
  { index: 6, name: 'Neo Zephyr Cybercity', file: 'test_level6_cybercity.png' },
  { index: 7, name: 'Magma Caldera', file: 'test_level7_magma.png' },
  { index: 8, name: 'Nether Inferno Abyss', file: 'test_level8_inferno.png' },
  { index: 9, name: 'Cosmic Rainbow Orbit', file: 'test_level9_cosmic.png' }
];

try {
  // Modal verification
  const modalPage = await browser.newPage();
  await modalPage.setViewport({ width: 1280, height: 720 });
  await modalPage.goto(`http://localhost:${port}/index.html`, { waitUntil: 'networkidle2' });
  await modalPage.waitForFunction(() => !!window.__zephyr, { timeout: 15000 });

  await modalPage.evaluate(() => {
    const modal = document.getElementById('z-track-modal');
    if (modal) modal.classList.remove('hidden');
  });
  await new Promise(r => setTimeout(r, 600));
  await modalPage.screenshot({ path: path.join(artifactsDir, 'test_10_levels_modal.png') });
  console.log('Captured test_10_levels_modal.png');
  await modalPage.close();

  // Test all 10 tracks
  for (const trk of tracksToVerify) {
    const page = await browser.newPage();
    const errors = [];
    page.on('pageerror', err => errors.push(err.message));
    await page.setViewport({ width: 1280, height: 720 });
    await page.evaluateOnNewDocument((idx) => {
      localStorage.setItem('zephyr_track', String(idx));
    }, trk.index);

    await page.goto(`http://localhost:${port}/index.html`, { waitUntil: 'networkidle2' });
    await page.waitForFunction(() => !!window.__zephyr, { timeout: 15000 });
    await page.evaluate(() => window.__zephyr.startRace());
    await new Promise(r => setTimeout(r, 1500));

    const curTrackName = await page.evaluate(() => {
      const idx = window.__CURRENT_TRACK_INDEX;
      return window.__ZEPHYR_TRACKS?.[idx]?.name || 'Unknown';
    });
    console.log(`Verified Track ${trk.index} in browser: "${curTrackName}", Page Errors: ${errors.length}`);
    if (errors.length > 0) {
      console.error(`Errors on track ${trk.index}:`, errors);
      throw new Error(`Track ${trk.index} produced errors: ${errors.join(', ')}`);
    }

    await page.screenshot({ path: path.join(artifactsDir, trk.file) });
    console.log(`Captured ${trk.file}`);
    await page.close();
  }

  console.log('ALL 10 LEVELS VERIFIED IN BROWSER WITH ZERO ERRORS!');
} finally {
  await browser.close();
  server.close();
}
