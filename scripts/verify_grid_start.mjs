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

server.listen(8091, async () => {
  console.log('HTTP Server listening on 8091');
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

    await page.goto('http://localhost:8091/index.html', { waitUntil: 'networkidle2' });

    // Start singleplayer race
    const startData = await page.evaluate(async () => {
      document.getElementById('z-modal-close')?.click();
      document.getElementById('z-track-modal')?.classList.add('hidden');
      if (window.__zephyr) {
        window.__zephyr.loadTrack(0);
        window.__zephyr.startRace();
      }
      await new Promise(r => setTimeout(r, 600));

      const dir = window.__zephyr?.director;
      if (!dir) return { error: 'No director' };

      const racers = dir.racers.map(r => ({
        id: r.id,
        name: r.name,
        isPlayer: r.isPlayer,
        kind: r.kind,
        rank: r.rank,
        pos: { x: Number(r.pos.x.toFixed(1)), y: Number(r.pos.y.toFixed(1)), z: Number(r.pos.z.toFixed(1)) },
        distance: Number(r.progress.distance.toFixed(2))
      }));

      const hudRankEl = document.querySelector('[data-role="rank"]');
      const hudStandingsEl = document.querySelector('[data-role="standings"]');

      return {
        phase: dir.phase,
        countdown: dir.countdown,
        playerRank: dir.player?.rank,
        totalRacers: dir.racers.length,
        hudRankText: hudRankEl ? hudRankEl.textContent.trim() : null,
        hudRankHtml: hudRankEl ? hudRankEl.innerHTML.trim() : null,
        hudStandingsText: hudStandingsEl ? hudStandingsEl.innerText.trim() : null,
        racers
      };
    });

    console.log('Grid Start Test Result:', JSON.stringify(startData, null, 2));

    // Capture screenshot of race start with rivals ahead and HUD rank 6/6
    await new Promise(r => setTimeout(r, 800));
    const screenshotPath = path.join(ARTIFACT_DIR, 'race_grid_last_place.png');
    await page.screenshot({ path: screenshotPath });
    console.log(`Saved screenshot: ${screenshotPath}`);

    // Now test overtaking progression with live engine updates
    const overtakeResult = await page.evaluate(async () => {
      const dir = window.__zephyr?.director;
      const zephyr = window.__zephyr;
      if (!dir || !zephyr) return { error: 'No director' };

      // Force countdown to finish and start racing
      dir.countdown = 0;
      dir.phase = 'racing';

      const ranksTimeline = [];
      ranksTimeline.push({ time: 0, rank: dir.player.rank });

      // Simulate player boosting ahead through the field
      for (let step = 1; step <= 5; step++) {
        dir.player.progress.distance += 7.5;
        dir.player.state.pos.z += 7.5;
        dir.computeStandings();
        // Update HUD
        const hudData = dir.hud();
        zephyr.ui.update(hudData);

        const elRank = document.querySelector('[data-role="rank"]');
        ranksTimeline.push({
          step,
          playerDistance: Number(dir.player.progress.distance.toFixed(1)),
          playerRank: dir.player.rank,
          hudRank: elRank ? elRank.textContent.trim() : null
        });
      }

      return {
        ranksTimeline,
        finalPlayerRank: dir.player.rank,
        finalStandings: dir.racers.map(r => ({ name: r.name, isPlayer: r.isPlayer, rank: r.rank, dist: Number(r.progress.distance.toFixed(1)) }))
      };
    });

    console.log('Live Overtaking HUD Result:', JSON.stringify(overtakeResult, null, 2));

    await page.screenshot({ path: path.join(ARTIFACT_DIR, 'race_overtaking_lead.png') });
    console.log('Saved live overtaking screenshot!');

  } catch (err) {
    console.error('Test error:', err);
  } finally {
    if (browser) await browser.close();
    server.close();
  }
});
