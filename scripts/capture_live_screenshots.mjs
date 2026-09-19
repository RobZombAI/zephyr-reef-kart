import puppeteer from "puppeteer";
import path from "path";

const artifactsDir = "/Users/robzomb/.gemini/antigravity/brain/0394039c-7986-43d7-9058-02535fa2c8fe";

async function run() {
  console.log("Launching Puppeteer for live verification of https://robzombai.github.io/zephyr-reef-kart/?v=zephyr-6.9.0 ...");
  const browser = await puppeteer.launch({
    headless: "new",
    args: ["--no-sandbox", "--disable-setuid-sandbox", "--use-gl=angle", "--use-angle=swiftshader"]
  });

  try {
    // 1. Mobile iPhone Viewport
    console.log("Testing iPhone landscape viewport (844x390)...");
    const pageMob = await browser.newPage();
    await pageMob.setViewport({ width: 844, height: 390, isMobile: true, hasTouch: true });
    await pageMob.goto("https://robzombai.github.io/zephyr-reef-kart/?v=zephyr-6.9.0&t=" + Date.now(), { waitUntil: "networkidle2", timeout: 35000 });
    await pageMob.waitForFunction(() => !!window.__zephyr, { timeout: 25000 });
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
    await pageDesk.goto("https://robzombai.github.io/zephyr-reef-kart/?v=zephyr-6.9.0&t=" + Date.now(), { waitUntil: "networkidle2", timeout: 35000 });
    await pageDesk.waitForFunction(() => !!window.__zephyr, { timeout: 25000 });
    await new Promise(r => setTimeout(r, 2000));
    await pageDesk.screenshot({ path: path.join(artifactsDir, "live_github_desktop_title.png") });
    console.log("Saved live_github_desktop_title.png");

    await pageDesk.evaluate(() => window.__zephyr.startRace());
    await new Promise(r => setTimeout(r, 2500));
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
