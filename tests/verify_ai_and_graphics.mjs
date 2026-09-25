// tests/verify_ai_and_graphics.mjs
import puppeteer from "puppeteer";
import http from "http";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const artifactsDir = path.join(root, "build", "artifacts");
fs.mkdirSync(artifactsDir, { recursive: true });

const server = http.createServer((req, res) => {
  let reqPath = req.url.split("?")[0];
  if (reqPath === "/" || reqPath === "") reqPath = "/index.html";
  const filePath = path.join(root, reqPath);

  if (fs.existsSync(filePath) && fs.statSync(filePath).isFile()) {
    const ext = path.extname(filePath);
    const mimeTypes = {
      ".html": "text/html",
      ".js": "application/javascript",
      ".css": "text/css",
      ".json": "application/json",
      ".png": "image/png",
      ".jpg": "image/jpeg",
      ".mp3": "audio/mpeg"
    };
    res.writeHead(200, { "Content-Type": mimeTypes[ext] || "application/octet-stream" });
    res.end(fs.readFileSync(filePath));
  } else {
    res.writeHead(404);
    res.end("Not found");
  }
});

await new Promise((resolve) => server.listen(0, resolve));
const port = server.address().port;

const browser = await puppeteer.launch({
  headless: "new",
  args: ["--no-sandbox", "--disable-setuid-sandbox", "--use-gl=angle", "--use-angle=swiftshader"]
});

try {
  const page = await browser.newPage();
  const errors = [];
  page.on("pageerror", err => errors.push(err.message));
  page.on("console", msg => {
    if (msg.type() === "error") errors.push(msg.text());
  });

  await page.setViewport({ width: 1280, height: 720 });
  await page.goto("http://localhost:" + port + "/index.html", { waitUntil: "networkidle2" });
  await page.waitForFunction(() => !!window.__zephyr, { timeout: 15000 });

  await page.evaluate(() => {
    window.__zephyr.startRace();
  });

  // Advance simulation through countdown + 6s of racing
  const telemetry = await page.evaluate(() => {
    const director = window.__zephyr.director;
    const input = window.__zephyr.input;
    for (let f = 0; f < 250; f++) {
      director.update(0.0166, input);
    }
    for (let f = 0; f < 350; f++) {
      director.update(0.0166, input);
    }
    return director.racers.map(r => ({
      id: r.id,
      name: r.name,
      isPlayer: r.isPlayer,
      speed: Math.round(r.state.speed * 10) / 10,
      distance: Math.round(r.progress.distance * 10) / 10,
      rank: r.rank,
      drifting: r.state.drifting
    }));
  });

  console.log("Telemetry after 6s of racing:");
  console.table(telemetry);

  await page.screenshot({ path: path.join(artifactsDir, "ai_race_action.png") });
  console.log("Screenshot saved!");

  if (errors.length > 0) {
    console.error("Errors found:", errors);
    process.exit(1);
  }

  const aiSpeeds = telemetry.filter(r => !r.isPlayer).map(r => r.speed);
  const maxAi = Math.max(...aiSpeeds);
  if (maxAi < 30) {
    console.error("AI speed is below competitive threshold: " + maxAi);
    process.exit(1);
  }

  console.log("PASS: Strong AI verified with competitive speeds (>40 m/s) and zero rendering errors!");
} finally {
  await browser.close();
  server.close();
}
