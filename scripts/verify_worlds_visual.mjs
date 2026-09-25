import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import puppeteer from 'puppeteer';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const REPO_ROOT = path.resolve(__dirname, '..');
const ARTIFACT_DIR = '/Users/robzomb/.gemini/antigravity/brain/0394039c-7986-43d7-9058-02535fa2c8fe';

const MIME = {
  '.html': 'text/html',
  '.js': 'application/javascript',
  '.mjs': 'application/javascript',
  '.css': 'text/css',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.svg': 'image/svg+xml',
  '.json': 'application/json',
  '.wasm': 'application/wasm'
};

const server = http.createServer((req, res) => {
  let reqPath = req.url.split('?')[0];
  if (reqPath === '/') reqPath = '/index.html';
  const filePath = path.join(REPO_ROOT, reqPath);
  if (!fs.existsSync(filePath) || fs.statSync(filePath).isDirectory()) {
    res.writeHead(404);
    res.end('Not found');
    return;
  }
  const ext = path.extname(filePath);
  res.writeHead(200, { 'Content-Type': MIME[ext] || 'application/octet-stream' });
  fs.createReadStream(filePath).pipe(res);
});

server.listen(8089, async () => {
  console.log('HTTP Server listening on 8089');
  let browser;
  try {
    browser = await puppeteer.launch({
      headless: 'new',
      args: [
        '--no-sandbox',
        '--disable-setuid-sandbox',
        '--enable-webgl',
        '--ignore-gpu-blocklist',
        '--enable-gpu-rasterization'
      ]
    });

    const page = await browser.newPage();
    await page.setViewport({ width: 1280, height: 720, deviceScaleFactor: 2 });

    // 1. Capture Track Selector with Trait Badges
    await page.goto('http://localhost:8089/index.html', { waitUntil: 'networkidle2' });
    await page.evaluate(() => {
      localStorage.setItem('zephyr_max_unlocked_track', '23'); // unlock all tracks for modal inspection
      const trackBtn = document.getElementById('z-btn-track');
      if (trackBtn) trackBtn.click();
    });
    await new Promise(r => setTimeout(r, 600));

    const modalPath = path.join(ARTIFACT_DIR, 'track_selector_traits.png');
    await page.screenshot({ path: modalPath });
    console.log(`Saved: ${modalPath}`);

    // Helper to start race on track and capture
    async function captureWorld(trackIdx, outName, delay = 2200) {
      await page.evaluate((idx) => {
        document.getElementById('z-modal-close')?.click();
        document.getElementById('z-track-modal')?.classList.add('hidden');
        localStorage.setItem('zephyr_track', String(idx));
        localStorage.setItem('zephyr_max_unlocked_track', '23');
        if (window.__zephyr) {
          window.__zephyr.loadTrack(idx);
          window.__zephyr.startRace();
          if (typeof window.__showWorldBanner === 'function') {
            window.__showWorldBanner(idx);
          }
        }
      }, trackIdx);

      await new Promise(r => setTimeout(r, delay));
      const outPath = path.join(ARTIFACT_DIR, outName);
      await page.screenshot({ path: outPath });
      console.log(`Saved: ${outPath}`);
    }

    // 2. Magma Caldera (Track 7)
    await captureWorld(7, 'world_magma_caldera.png', 2400);

    // 3. Glacier Frostbite Peaks (Track 5)
    await captureWorld(5, 'world_glacier_peaks.png', 2400);

    // 4. Cosmic Warpway (Track 21)
    await captureWorld(21, 'world_cosmic_warpway.png', 2400);

    console.log('All visual verifications captured successfully!');
  } catch (err) {
    console.error('Error during visual verification:', err);
  } finally {
    if (browser) await browser.close();
    server.close();
  }
});
