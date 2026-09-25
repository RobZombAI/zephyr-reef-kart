import puppeteer from 'puppeteer';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const artifactsDir = path.join(path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..'), 'build', 'artifacts');
fs.mkdirSync(artifactsDir, { recursive: true });

async function main() {
  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--use-gl=angle', '--use-angle=metal']
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1920, height: 1080 });

  const errors = [];
  page.on('console', msg => {
    if (msg.type() === 'error') {
      errors.push(msg.text());
      console.error('PAGE ERROR:', msg.text());
    } else {
      console.log('PAGE LOG:', msg.text());
    }
  });

  page.on('pageerror', err => {
    errors.push(err.toString());
    console.error('UNCAUGHT PAGE ERROR:', err);
  });

  console.log('Navigating to http://localhost:3000/...');
  await page.goto('http://localhost:3000/', { waitUntil: 'networkidle0' });

  // Click start button
  console.log('Clicking Enter Shrine Garden button...');
  await page.click('#start-btn');

  // Wait 1.5s for initial fade and render
  await new Promise(r => setTimeout(r, 1500));
  await page.screenshot({ path: path.join(artifactsDir, 'test_0s.png') });
  console.log('Saved test_0s.png');

  // Seek timeline to 0.2 (12s)
  await page.evaluate(() => {
    window.app.cameraController.seek(0.2);
    window.app.composer.render();
  });
  await new Promise(r => setTimeout(r, 500));
  await page.screenshot({ path: path.join(artifactsDir, 'test_12s.png') });
  console.log('Saved test_12s.png');

  // Seek timeline to 0.5 (30s)
  await page.evaluate(() => {
    window.app.cameraController.seek(0.5);
    window.app.composer.render();
  });
  await new Promise(r => setTimeout(r, 500));
  await page.screenshot({ path: path.join(artifactsDir, 'test_30s.png') });
  console.log('Saved test_30s.png');

  // Seek timeline to 0.67 (40s)
  await page.evaluate(() => {
    window.app.cameraController.seek(0.67);
    window.app.composer.render();
  });
  await new Promise(r => setTimeout(r, 500));
  await page.screenshot({ path: path.join(artifactsDir, 'test_40s.png') });
  console.log('Saved test_40s.png');

  // Seek timeline to 0.95 (57s)
  await page.evaluate(() => {
    window.app.cameraController.seek(0.95);
    window.app.composer.render();
  });
  await new Promise(r => setTimeout(r, 500));
  await page.screenshot({ path: path.join(artifactsDir, 'test_57s.png') });
  console.log('Saved test_57s.png');

  // Click on the pond to test ripples
  console.log('Clicking on canvas to test interactive ripples...');
  await page.mouse.click(800, 600);
  await new Promise(r => setTimeout(r, 600));
  await page.screenshot({ path: path.join(artifactsDir, 'test_ripple.png') });
  console.log('Saved test_ripple.png');

  await browser.close();

  if (errors.length > 0) {
    console.error(`Encountered ${errors.length} errors:`, errors);
    process.exit(1);
  } else {
    console.log('SUCCESS! No errors.');
  }
}

main().catch(err => {
  console.error('Fatal error:', err);
  process.exit(1);
});
