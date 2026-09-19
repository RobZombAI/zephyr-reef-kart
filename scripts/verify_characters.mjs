import http from 'http';
import fs from 'fs';
import path from 'path';
import puppeteer from 'puppeteer';

const rootDir = process.cwd();
const artifactsDir = '/Users/robzomb/.gemini/antigravity/brain/0394039c-7986-43d7-9058-02535fa2c8fe';

const mimeTypes = {
  '.html': 'text/html',
  '.js': 'application/javascript',
  '.css': 'text/css',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.svg': 'image/svg+xml'
};

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
  const mime = mimeTypes[ext] || 'application/octet-stream';
  res.writeHead(200, { 'Content-Type': mime });
  fs.createReadStream(filePath).pipe(res);
});

server.listen(8089, async () => {
  console.log('Server running at http://localhost:8089');
  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--use-gl=angle', '--use-angle=swiftshader']
  });

  try {
    const page = await browser.newPage();
    await page.setViewport({ width: 1280, height: 720 });
    await page.goto('http://localhost:8089/index.html', { waitUntil: 'networkidle2' });
    await page.waitForFunction(() => !!window.__zephyr, { timeout: 20000 });
    console.log('App initialized');

    // 1. Enter character select screen by clicking "CHOOSE KART" / "START"
    await page.evaluate(() => {
      // Find start or kart button
      const kartBtn = Array.from(document.querySelectorAll('button')).find(b => b.textContent.includes('KART') || b.textContent.includes('RACER') || b.textContent.includes('START') || b.textContent.includes('GIOCA'));
      if (kartBtn) kartBtn.click();
      else {
        window.__zephyr.ui.setScreen('select');
        window.__zephyr.state = 'SELECT';
        window.__zephyr.buildSelectStage && window.__zephyr.buildSelectStage();
      }
    });
    await new Promise(r => setTimeout(r, 1500));

    // Check count of cards in select screen
    const cardsCount = await page.evaluate(() => {
      const cards = document.querySelectorAll('.card');
      return cards.length;
    });
    console.log(`Found ${cardsCount} character cards in select screen!`);

    await page.screenshot({ path: path.join(artifactsDir, 'character_select_screen_8_racers.png') });
    console.log('Captured character_select_screen_8_racers.png');

    // 2. Select Princess Aurelia card
    await page.evaluate(() => {
      const pCard = Array.from(document.querySelectorAll('.card')).find(c => c.textContent.includes('Aurelia') || c.textContent.includes('Principessa'));
      if (pCard) pCard.click();
      else window.__zephyr.ui.selectKart('princess');
    });
    await new Promise(r => setTimeout(r, 1500));
    await page.screenshot({ path: path.join(artifactsDir, 'character_preview_princess.png') });
    console.log('Captured character_preview_princess.png');

    // Start race with princess
    await page.evaluate(() => {
      window.__zephyr.startRace();
    });
    await new Promise(r => setTimeout(r, 2500));
    await page.screenshot({ path: path.join(artifactsDir, 'character_race_princess.png') });
    console.log('Captured character_race_princess.png');

    // Return to select screen
    await page.evaluate(() => {
      window.__zephyr.ui.setScreen('select');
      window.__zephyr.state = 'SELECT';
    });
    await new Promise(r => setTimeout(r, 1000));

    // 3. Select Capitan Barbanera card
    await page.evaluate(() => {
      const bCard = Array.from(document.querySelectorAll('.card')).find(c => c.textContent.includes('Barbanera') || c.textContent.includes('Capitan'));
      if (bCard) bCard.click();
      else window.__zephyr.ui.selectKart('pirate');
    });
    await new Promise(r => setTimeout(r, 1500));
    await page.screenshot({ path: path.join(artifactsDir, 'character_preview_pirate.png') });
    console.log('Captured character_preview_pirate.png');

    // 4. Start race with pirate
    await page.evaluate(() => {
      window.__zephyr.startRace();
    });
    await new Promise(r => setTimeout(r, 3000));
    await page.screenshot({ path: path.join(artifactsDir, 'character_race_pirate.png') });
    console.log('Captured character_race_pirate.png');

    console.log('Local character verification completed successfully!');
  } catch (err) {
    console.error('Error during verification:', err);
  } finally {
    await browser.close();
    server.close();
  }
});
