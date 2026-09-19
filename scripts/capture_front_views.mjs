import http from "http";
import fs from "fs";
import path from "path";
import puppeteer from "puppeteer";

const rootDir = process.cwd();
const artifactsDir = "/Users/robzomb/.gemini/antigravity/brain/0394039c-7986-43d7-9058-02535fa2c8fe";

const mimeTypes = {
  ".html": "text/html",
  ".js": "application/javascript",
  ".css": "text/css",
  ".json": "application/json",
  ".png": "image/png"
};

const server = http.createServer((req, res) => {
  let reqUrl = req.url.split("?")[0];
  if (reqUrl === "/") reqUrl = "/index.html";
  const filePath = path.join(rootDir, reqUrl);
  if (!fs.existsSync(filePath) || fs.statSync(filePath).isDirectory()) {
    res.writeHead(404);
    res.end("Not found");
    return;
  }
  const ext = path.extname(filePath);
  res.writeHead(200, { "Content-Type": mimeTypes[ext] || "application/octet-stream" });
  fs.createReadStream(filePath).pipe(res);
});

server.listen(8091, async () => {
  console.log("Server running at http://localhost:8091");
  const browser = await puppeteer.launch({
    headless: "new",
    args: ["--no-sandbox", "--disable-setuid-sandbox", "--use-gl=angle", "--use-angle=swiftshader"]
  });

  try {
    const page = await browser.newPage();
    await page.setViewport({ width: 1280, height: 720 });
    await page.goto("http://localhost:8091/index.html", { waitUntil: "networkidle2" });
    await page.waitForFunction(() => !!window.__zephyr, { timeout: 20000 });

    // Open select screen
    await page.evaluate(() => {
      const kartBtn = Array.from(document.querySelectorAll("button")).find(b => b.textContent.includes("KART") || b.textContent.includes("RACER") || b.textContent.includes("START"));
      if (kartBtn) kartBtn.click();
    });
    await new Promise(r => setTimeout(r, 1200));

    // 1. Select Princess
    await page.evaluate(() => {
      const pCard = Array.from(document.querySelectorAll(".card")).find(c => c.textContent.includes("Aurelia") || c.textContent.includes("Principessa"));
      if (pCard) pCard.click();
    });
    await new Promise(r => setTimeout(r, 1000));
    await page.evaluate(() => {
      window.__zephyr.startRace();
    });
    await new Promise(r => setTimeout(r, 2000));
    // Press KeyQ (look back) to view front of racer
    await page.keyboard.down("KeyQ");
    await new Promise(r => setTimeout(r, 1000));
    await page.screenshot({ path: path.join(artifactsDir, "front_view_princess.png") });
    console.log("Captured front_view_princess.png");
    await page.keyboard.up("KeyQ");

    // Return to select screen
    await page.evaluate(() => {
      window.__zephyr.ui.setScreen("select");
      window.__zephyr.state = "SELECT";
    });
    await new Promise(r => setTimeout(r, 1000));

    // 2. Select Pirate
    await page.evaluate(() => {
      const bCard = Array.from(document.querySelectorAll(".card")).find(c => c.textContent.includes("Barbanera") || c.textContent.includes("Capitan"));
      if (bCard) bCard.click();
    });
    await new Promise(r => setTimeout(r, 1000));
    await page.evaluate(() => {
      window.__zephyr.startRace();
    });
    await new Promise(r => setTimeout(r, 2000));
    await page.keyboard.down("KeyQ");
    await new Promise(r => setTimeout(r, 1000));
    await page.screenshot({ path: path.join(artifactsDir, "front_view_pirate.png") });
    console.log("Captured front_view_pirate.png");
    await page.keyboard.up("KeyQ");

  } catch(e) {
    console.error(e);
  } finally {
    await browser.close();
    server.close();
    process.exit(0);
  }
});
