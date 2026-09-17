import puppeteer from 'puppeteer';

async function main() {
  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1280, height: 720 });

  page.on('console', msg => console.log('BROWSER:', msg.text()));

  console.log('Navigating to http://localhost:8080/dist/index.html ...');
  await page.goto('http://localhost:8080/dist/index.html', { waitUntil: 'networkidle0' });

  // Start race
  await page.evaluate(() => {
    document.getElementById('btn-start-race')?.click();
  });

  // Wait 4 seconds for countdown to complete
  await new Promise(r => setTimeout(r, 4200));

  // Run oil slick test in game context
  const testResults = await page.evaluate(async () => {
    const game = window.game;
    const player = game.playerController;
    const initialU = player.u;

    // Simulate kart entering oil slick at 30 m/s
    player.speed = 30.0;
    player.input.accel = true;

    // Trigger spin
    player.triggerSpin(0.75);

    const logs = [];
    let anyBackwardMovement = false;
    let anyWrongWay = false;

    // Monitor across 24 intervals (1.2s total)
    for (let i = 0; i < 24; i++) {
      await new Promise(res => setTimeout(res, 50));

      const proj = game.track.projectPoint(player.position);
      const tangent = proj.tangent;
      const velDotTangent = player.velocity.dot(tangent);

      if (velDotTangent < -0.1) {
        anyBackwardMovement = true;
      }
      if (player.wrongWay) {
        anyWrongWay = true;
      }

      logs.push({
        t: +(i * 0.05).toFixed(2),
        spinTimer: +player.spinTimer.toFixed(2),
        u: +player.u.toFixed(4),
        speed: +player.speed.toFixed(2),
        yaw: +player.yaw.toFixed(2),
        velDotTangent: +velDotTangent.toFixed(2),
        wrongWay: player.wrongWay
      });
    }

    const finalU = player.u;
    const forwardProgress = finalU > initialU;

    return {
      initialU,
      finalU,
      forwardProgress,
      anyBackwardMovement,
      anyWrongWay,
      slickCooldown: +player.slickCooldown.toFixed(2),
      samples: logs.filter((_, idx) => idx % 4 === 0)
    };
  });

  console.log('OIL SLICK TEST RESULTS:\n', JSON.stringify(testResults, null, 2));

  await browser.close();

  if (!testResults.forwardProgress) {
    throw new Error('FAILED: Kart did not make forward progress during/after spinout!');
  }
  if (testResults.anyBackwardMovement) {
    throw new Error('FAILED: Kart moved backwards during spinout!');
  }
  if (testResults.anyWrongWay) {
    throw new Error('FAILED: Kart triggered wrong-way alarm!');
  }

  console.log('✅ TEST PASSED: Kart performs spin-out, slows down, and continues moving forward with zero backwards loop!');
}

main().catch(err => {
  console.error('Fatal error:', err);
  process.exit(1);
});

