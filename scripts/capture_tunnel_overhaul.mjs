import puppeteer from 'puppeteer';
import http from 'http';
import fs from 'fs';
import path from 'path';

const rootDir = process.cwd();
const artifactsDir = "/Users/robzomb/.gemini/antigravity/brain/0394039c-7986-43d7-9058-02535fa2c8fe";

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

const PORT = 8139;

server.listen(PORT, async () => {
  console.log(`Test server running on port ${PORT}`);
  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--use-gl=angle', '--use-angle=swiftshader']
  });

  try {
    const page = await browser.newPage();
    await page.setViewport({ width: 1280, height: 720, deviceScaleFactor: 1 });
    await page.goto(`http://localhost:${PORT}/index.html`, { waitUntil: 'networkidle2' });
    await page.waitForFunction(() => !!window.__zephyr, { timeout: 20000 });

    // Track 0 Tunnel Overhaul
    console.log("Loading Track 0 and starting race...");
    await page.evaluate(() => {
      window.__zephyr.loadTrack(0);
      window.__zephyr.startRace();
    });
    await new Promise(r => setTimeout(r, 1200));

    console.log("Teleporting inside Track 0 tunnel...");
    await page.evaluate(() => {
      const z = window.__zephyr;
      const samples = z.world.spline.samples;
      const tunnels = samples.filter(s => s.kind === 2 || s.kind === 'tunnel' || s.kind === 3);
      // Fallback or find middle tunnel sample
      let targetU = 0.55;
      if (tunnels.length > 0) {
        targetU = tunnels[Math.floor(tunnels.length * 0.45)].u;
      }
      z.debugTeleport(targetU);
      // Give initial forward speed
      z.director.player.kart.physics.state.speed = 28;
    });
    await new Promise(r => setTimeout(r, 1500));
    await page.screenshot({ path: path.join(artifactsDir, "tunnel_overhauled_track0.png") });
    console.log("Captured tunnel_overhauled_track0.png");

    // Track 11 Tunnel Overhaul
    console.log("Loading Track 11 and starting race...");
    await page.evaluate(() => {
      // Allow loading locked tracks for debugging
      localStorage.setItem("zephyr_max_unlocked_track", "24");
      window.__zephyr.loadTrack(11);
      window.__zephyr.startRace();
    });
    await new Promise(r => setTimeout(r, 1200));

    console.log("Teleporting inside Track 11 tunnel...");
    await page.evaluate(() => {
      const z = window.__zephyr;
      const samples = z.world.spline.samples;
      const tunnels = samples.filter(s => s.kind === 2 || s.kind === 'tunnel' || s.kind === 3);
      let targetU = 0.55;
      if (tunnels.length > 0) {
        targetU = tunnels[Math.floor(tunnels.length * 0.45)].u;
      }
      z.debugTeleport(targetU);
      z.director.player.kart.physics.state.speed = 28;
    });
    await new Promise(r => setTimeout(r, 1500));
    await page.screenshot({ path: path.join(artifactsDir, "tunnel_overhauled_track11.png") });
    console.log("Captured tunnel_overhauled_track11.png");

  } catch (err) {
    console.error("Error during capture:", err);
  } finally {
    await browser.close();
    server.close();
    process.exit(0);
  }
});
