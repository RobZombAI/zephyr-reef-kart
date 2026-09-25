import puppeteer from "puppeteer";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const artifactsDir = path.join(path.resolve(path.dirname(fileURLToPath(import.meta.url)), ".."), "build", "artifacts");
fs.mkdirSync(artifactsDir, { recursive: true });

async function run() {
  console.log("Launching Puppeteer for live verification of https://robzombai.github.io/zephyr-reef-kart/?v=zephyr-6.9.5 ...");
  const browser = await puppeteer.launch({
    headless: "new",
    args: ["--no-sandbox", "--disable-setuid-sandbox", "--use-gl=angle", "--use-angle=swiftshader"]
  });

  try {
    // 1. Mobile iPhone Viewport
    console.log("Testing iPhone landscape viewport (844x390)...");
    const pageMob = await browser.newPage();
    await pageMob.setViewport({ width: 844, height: 390, isMobile: true, hasTouch: true });
    await pageMob.goto("https://robzombai.github.io/zephyr-reef-kart/?v=zephyr-6.9.5&t=" + Date.now(), { waitUntil: "networkidle2", timeout: 45000 });
    await pageMob.waitForFunction(() => !!window.__zephyr, { timeout: 35000 });
    const mobQuality = await pageMob.evaluate(() => window.__zephyr.quality.level);
    console.log("Mobile active quality profile:", mobQuality);
    await new Promise(r => setTimeout(r, 2000));
    await pageMob.screenshot({ path: path.join(artifactsDir, "live_github_iphone_title.png") });
    console.log("Saved live_github_iphone_title.png");

    await pageMob.evaluate(() => window.__zephyr.startRace());
    await new Promise(r => setTimeout(r, 2500));
    await pageMob.screenshot({ path: path.join(artifactsDir, "live_github_iphone_race.png") });
    console.log("Saved live_github_iphone_race.png");
    await pageMob.close();

    // 2. Desktop Viewport
    console.log("Testing Desktop viewport (1280x720)...");
    const pageDesk = await browser.newPage();
    await pageDesk.setViewport({ width: 1280, height: 720, isMobile: false, hasTouch: false });
    await pageDesk.goto("https://robzombai.github.io/zephyr-reef-kart/?v=zephyr-6.9.5&t=" + Date.now(), { waitUntil: "networkidle2", timeout: 45000 });
    await pageDesk.waitForFunction(() => !!window.__zephyr, { timeout: 35000 });
    const deskQuality = await pageDesk.evaluate(() => window.__zephyr.quality.level);
    console.log("Desktop active quality profile:", deskQuality);
    await new Promise(r => setTimeout(r, 2000));
    await pageDesk.screenshot({ path: path.join(artifactsDir, "live_github_desktop_title.png") });
    console.log("Saved live_github_desktop_title.png");

    // Open character select to verify 8 racers live
    await pageDesk.evaluate(() => {
      window.__zephyr.ui.setScreen('select');
      window.__zephyr.state = 'SELECT';
    });
    await new Promise(r => setTimeout(r, 1500));
    await pageDesk.screenshot({ path: path.join(artifactsDir, "live_github_character_select.png") });
    console.log("Saved live_github_character_select.png");

    // Open track selector modal to verify progression UI
    await pageDesk.evaluate(() => {
      window.__zephyr.ui.setScreen('title');
      window.__zephyr.state = 'TITLE';
      const btn = document.getElementById("z-btn-track");
      if (btn) btn.click();
    });
    await new Promise(r => setTimeout(r, 1000));
    await pageDesk.screenshot({ path: path.join(artifactsDir, "live_github_track_modal.png") });
    console.log("Saved live_github_track_modal.png");

    // Close modal and start race
    await pageDesk.evaluate(() => {
      const closeBtn = document.getElementById("z-modal-close");
      if (closeBtn) closeBtn.click();
    });
    await new Promise(r => setTimeout(r, 500));

    await pageDesk.evaluate(() => window.__zephyr.startRace());
    await new Promise(r => setTimeout(r, 2500));
    // Simulate throttle and boost to test high speed visual clarity
    const speedlinesInfo = await pageDesk.evaluate(() => {
      const director = window.__zephyr.director;
      const input = window.__zephyr.input;
      if (input && input.held) {
        input.held.add('accel');
      }
      for (let f = 0; f < 180; f++) {
        director.update(0.0166, input);
      }
      const player = director.player;
      const el = document.querySelector('.speedlines');
      return {
        playerSpeed: player?.state?.speed || 0,
        speedlinesDisplay: el ? window.getComputedStyle(el).display : 'none',
        speedlinesOpacity: el ? window.getComputedStyle(el).opacity : '0'
      };
    });
    console.log("Desktop high speed check:", speedlinesInfo);
    await pageDesk.screenshot({ path: path.join(artifactsDir, "live_github_desktop_race.png") });
    console.log("Saved live_github_desktop_race.png");
    await pageDesk.close();

    console.log("SUCCESS: Captured all live CDN verification screenshots!");
  } finally {
    await browser.close();
  }
}

run().catch(err => {
  console.error("Puppeteer run failed:", err);
  process.exit(1);
});
