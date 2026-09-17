import puppeteer from 'puppeteer';

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

  // 1. Title Screen
  await new Promise(r => setTimeout(r, 2000));
  await page.screenshot({ path: '/Users/robzomb/.gemini/antigravity/brain/0394039c-7986-43d7-9058-02535fa2c8fe/scratch/augusta_1_title.png' });
  console.log('Saved augusta_1_title.png');

  // 2. Click "Scegli Pilota"
  console.log('Clicking Scegli Pilota...');
  await page.click('#btn-choose-racer');
  await new Promise(r => setTimeout(r, 800));

  // Click second racer card (L'Assessore) then fourth card (Il Chimico)
  const cards = await page.$$('.racer-card');
  if (cards.length > 2) {
    await cards[1].click(); // L'Assessore
    await new Promise(r => setTimeout(r, 400));
  }
  if (cards.length > 0) {
    await cards[0].click(); // Back to Turi 'u Furastero (Ape 50cc)
    await new Promise(r => setTimeout(r, 400));
  }

  await page.screenshot({ path: '/Users/robzomb/.gemini/antigravity/brain/0394039c-7986-43d7-9058-02535fa2c8fe/scratch/augusta_2_select.png' });
  console.log('Saved augusta_2_select.png');

  // 3. Confirm and start race countdown
  console.log('Confirming racer and starting countdown...');
  await page.click('#btn-confirm-racer');

  await new Promise(r => setTimeout(r, 1200));
  await page.screenshot({ path: '/Users/robzomb/.gemini/antigravity/brain/0394039c-7986-43d7-9058-02535fa2c8fe/scratch/augusta_3_grid.png' });
  console.log('Saved augusta_3_grid.png');

  // Wait for countdown to finish (3, 2, 1, VIA!)
  console.log('Waiting for VIA!...');
  await new Promise(r => setTimeout(r, 2800));

  // 4. Drive kart! Hold KeyW for 4.5 seconds
  console.log('Accelerating forward...');
  await page.keyboard.down('KeyW');
  await new Promise(r => setTimeout(r, 3500));

  // Screenshot in refinery straightaway at speed
  await page.screenshot({ path: '/Users/robzomb/.gemini/antigravity/brain/0394039c-7986-43d7-9058-02535fa2c8fe/scratch/augusta_4_refinery.png' });
  console.log('Saved augusta_4_refinery.png');

  // 5. Drift right into refinery chicane and concert zone
  console.log('Drifting right...');
  await page.keyboard.down('KeyD');
  await page.keyboard.down('ShiftLeft');
  await new Promise(r => setTimeout(r, 3000));

  await page.screenshot({ path: '/Users/robzomb/.gemini/antigravity/brain/0394039c-7986-43d7-9058-02535fa2c8fe/scratch/augusta_5_drift.png' });
  console.log('Saved augusta_5_drift.png');

  await page.keyboard.up('ShiftLeft');
  await page.keyboard.up('KeyD');
  await page.keyboard.up('KeyW');

  await browser.close();

  if (errors.length > 0) {
    console.error(`Encountered ${errors.length} errors:`, errors);
    process.exit(1);
  } else {
    console.log('SUCCESS! Augusta Grand Prix tests passed with zero errors.');
  }
}

main().catch(err => {
  console.error('Fatal test error:', err);
  process.exit(1);
});
