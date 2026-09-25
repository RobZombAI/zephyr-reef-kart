import puppeteer from 'puppeteer';
import http from 'http';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const rootDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const artifactsDir = path.join(rootDir, 'build', 'artifacts');
fs.mkdirSync(artifactsDir, { recursive: true });

const server = http.createServer((req, res) => {
  let reqUrl = req.url.split('?')[0];
  if (reqUrl === '/') reqUrl = '/index.html';
  const filePath = path.join(rootDir, reqUrl);
  if (!fs.existsSync(filePath) || fs.statSync(filePath).isDirectory()) {
    res.writeHead(404);
    res.end('Not found');
    return;
  }
  const ext = path.extname(filePath);
  const mimeTypes = {
    '.html': 'text/html',
    '.js': 'application/javascript',
    '.css': 'text/css',
    '.json': 'application/json',
    '.png': 'image/png'
  };
  res.writeHead(200, { 'Content-Type': mimeTypes[ext] || 'application/octet-stream' });
  fs.createReadStream(filePath).pipe(res);
});

const PORT = 8124;

server.listen(PORT, async () => {
  console.log(`Local test server running on port ${PORT}`);
  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--use-gl=angle', '--use-angle=swiftshader']
  });

  try {
    const page = await browser.newPage();
    await page.setViewport({ width: 1280, height: 720, deviceScaleFactor: 1 });
    await page.goto(`http://localhost:${PORT}/index.html`, { waitUntil: 'networkidle2' });
    await page.waitForFunction(() => !!window.__zephyr, { timeout: 20000 });

    // 1. Character Select Hero Showcase
    console.log("Navigating to Character Select...");
    await page.evaluate(() => {
      window.__zephyr.setMode("select");
      window.__zephyr.selectKart("nix");
    });
    await new Promise(r => setTimeout(r, 2200));
    await page.screenshot({ path: path.join(artifactsDir, "hero_character_select.png") });
    console.log("Saved hero_character_select.png");

    // Also showcase Princess Aurelia
    await page.evaluate(() => {
      window.__zephyr.selectKart("princess");
    });
    await new Promise(r => setTimeout(r, 1200));
    await page.screenshot({ path: path.join(artifactsDir, "hero_character_princess.png") });
    console.log("Saved hero_character_princess.png");

    // Also showcase Captain Blackbeard
    await page.evaluate(() => {
      window.__zephyr.selectKart("pirate");
    });
    await new Promise(r => setTimeout(r, 1200));
    await page.screenshot({ path: path.join(artifactsDir, "hero_character_pirate.png") });
    console.log("Saved hero_character_pirate.png");

    // Switch back to Nix for racing
    await page.evaluate(() => {
      window.__zephyr.selectKart("nix");
    });
    await new Promise(r => setTimeout(r, 500));

    // 2. Start Race & High Speed Straight Chase
    console.log("Starting race...");
    await page.evaluate(() => {
      window.__zephyr.startRace();
      const director = window.__zephyr.director;
      director.countdown = 0;
      director.phase = "racing";
      for (const r of director.racers) r.frozen = false;
      window.__zephyr.input.held.add("accel");
    });
    // Wait 2.2 seconds of real-time 60fps simulation
    await new Promise(r => setTimeout(r, 2200));
    await page.screenshot({ path: path.join(artifactsDir, "hero_race_chase.png") });
    console.log("Saved hero_race_chase.png");

    // 3. High Speed Drift Cornering (showcase sway, roll, steering, smoke)
    console.log("Simulating drift cornering...");
    await page.evaluate(() => {
      window.__zephyr.input.held.add("right");
      window.__zephyr.input.held.add("drift");
    });
    await new Promise(r => setTimeout(r, 1600));
    await page.screenshot({ path: path.join(artifactsDir, "hero_drift_motion.png") });
    console.log("Saved hero_drift_motion.png");

    console.log("All screenshots captured successfully!");
  } catch (err) {
    console.error("Screenshot error:", err);
  } finally {
    await browser.close();
    server.close();
  }
});
