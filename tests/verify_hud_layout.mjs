// tests/verify_hud_layout.mjs
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
console.log(`HUD Test server running at http://localhost:${port}`);

const browser = await puppeteer.launch({
  headless: 'new',
  args: ['--no-sandbox', '--disable-setuid-sandbox', '--use-gl=angle', '--use-angle=swiftshader']
});

function doRectanglesOverlap(r1, r2) {
  if (!r1 || !r2) return false;
  return !(r1.right <= r2.left || 
           r1.left >= r2.right || 
           r1.bottom <= r2.top || 
           r1.top >= r2.bottom);
}

try {
  // Test 1: Mobile Landscape (844 x 390)
  const pageMob = await browser.newPage();
  await pageMob.setViewport({ width: 844, height: 390, hasTouch: true, isMobile: true });
  await pageMob.goto(`http://localhost:${port}/index.html`, { waitUntil: 'networkidle2' });
  await pageMob.waitForFunction(() => !!window.__zephyr, { timeout: 15000 });
  await pageMob.evaluate(() => window.__zephyr.startRace());
  await new Promise(r => setTimeout(r, 1500));

  const mobRects = await pageMob.evaluate(() => {
    const getRect = (sel) => {
      const el = document.querySelector(sel);
      if (!el) return null;
      const r = el.getBoundingClientRect();
      return { left: r.left, right: r.right, top: r.top, bottom: r.bottom, width: r.width, height: r.height };
    };
    return {
      minimap: getRect('.hud__minimap'),
      speed: getRect('.hud__speed'),
      coins: getRect('.hud__coins'),
      steerLeft: getRect('#z-btn-left'),
      steerRight: getRect('#z-btn-right'),
      retro: getRect('#z-btn-retro'),
      drift: getRect('#z-btn-drift'),
      item: getRect('#z-btn-item'),
      gas: getRect('#z-btn-gas'),
      brake: getRect('#z-btn-brake')
    };
  });

  console.log('Mobile Geometry:');
  console.log('  Minimap:', mobRects.minimap);
  console.log('  POTERE Item:', mobRects.item);
  console.log('  DRIFT:', mobRects.drift);
  console.log('  GAS:', mobRects.gas);
  console.log('  Speedometer:', mobRects.speed);
  console.log('  Coins:', mobRects.coins);
  console.log('  Steer Left:', mobRects.steerLeft);
  console.log('  Steer Right:', mobRects.steerRight);

  // Overlap verification for Mobile
  const rightButtons = [mobRects.retro, mobRects.drift, mobRects.item, mobRects.gas, mobRects.brake].filter(Boolean);
  for (const btn of rightButtons) {
    if (doRectanglesOverlap(mobRects.minimap, btn)) {
      throw new Error(`Mobile Minimap overlaps with touch button: ${JSON.stringify(btn)}`);
    }
  }

  const leftButtons = [mobRects.steerLeft, mobRects.steerRight].filter(Boolean);
  for (const btn of leftButtons) {
    if (doRectanglesOverlap(mobRects.speed, btn)) {
      throw new Error(`Mobile Speedometer overlaps with steering button: ${JSON.stringify(btn)}`);
    }
  }

  if (doRectanglesOverlap(mobRects.speed, mobRects.coins)) {
    throw new Error('Mobile Speedometer overlaps with Coins counter');
  }

  console.log('PASS: Mobile Minimap & Speedometer have 0 overlap with any buttons!');
  await pageMob.screenshot({ path: path.join(artifactsDir, 'test_hud_no_overlap_mobile.png') });
  console.log('Captured test_hud_no_overlap_mobile.png');
  await pageMob.close();

  // Test 2: Desktop Landscape (1280 x 720)
  const pageDesk = await browser.newPage();
  await pageDesk.setViewport({ width: 1280, height: 720 });
  await pageDesk.goto(`http://localhost:${port}/index.html`, { waitUntil: 'networkidle2' });
  await pageDesk.waitForFunction(() => !!window.__zephyr, { timeout: 15000 });
  await pageDesk.evaluate(() => window.__zephyr.startRace());
  await new Promise(r => setTimeout(r, 1500));

  const deskRects = await pageDesk.evaluate(() => {
    const getRect = (sel) => {
      const el = document.querySelector(sel);
      if (!el) return null;
      const r = el.getBoundingClientRect();
      return { left: r.left, right: r.right, top: r.top, bottom: r.bottom, width: r.width, height: r.height };
    };
    return {
      minimap: getRect('.hud__minimap'),
      speed: getRect('.hud__speed'),
      coins: getRect('.hud__coins'),
      steerLeft: getRect('#z-btn-left'),
      steerRight: getRect('#z-btn-right'),
      retro: getRect('#z-btn-retro'),
      drift: getRect('#z-btn-drift'),
      item: getRect('#z-btn-item'),
      gas: getRect('#z-btn-gas'),
      brake: getRect('#z-btn-brake')
    };
  });

  console.log('Desktop Geometry:');
  console.log('  Minimap:', deskRects.minimap);
  console.log('  Speedometer:', deskRects.speed);
  console.log('  Coins:', deskRects.coins);

  const deskRightButtons = [deskRects.retro, deskRects.drift, deskRects.item, deskRects.gas, deskRects.brake].filter(Boolean);
  for (const btn of deskRightButtons) {
    if (doRectanglesOverlap(deskRects.minimap, btn)) {
      throw new Error(`Desktop Minimap overlaps with touch button: ${JSON.stringify(btn)}`);
    }
  }

  const deskLeftButtons = [deskRects.steerLeft, deskRects.steerRight].filter(Boolean);
  for (const btn of deskLeftButtons) {
    if (doRectanglesOverlap(deskRects.speed, btn)) {
      throw new Error(`Desktop Speedometer overlaps with steering button: ${JSON.stringify(btn)}`);
    }
  }

  if (doRectanglesOverlap(deskRects.speed, deskRects.coins)) {
    throw new Error('Desktop Speedometer overlaps with Coins counter');
  }

  console.log('PASS: Desktop Minimap & Speedometer have 0 overlap with any buttons!');
  await pageDesk.screenshot({ path: path.join(artifactsDir, 'test_hud_no_overlap_desktop.png') });
  console.log('Captured test_hud_no_overlap_desktop.png');
  await pageDesk.close();

} finally {
  await browser.close();
  server.close();
  console.log('Verification completed.');
}
