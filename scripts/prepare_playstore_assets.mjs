import fs from 'node:fs';
import path from 'node:path';
import puppeteer from 'puppeteer';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const REPO_ROOT = path.resolve(__dirname, '..');
const ASSETS_DIR = path.join(REPO_ROOT, 'playstore_assets');
const BRAIN_DIR = '/Users/robzomb/.gemini/antigravity/brain/0394039c-7986-43d7-9058-02535fa2c8fe';

if (!fs.existsSync(ASSETS_DIR)) {
  fs.mkdirSync(ASSETS_DIR, { recursive: true });
}

console.log('=== Generazione e Preparazione Asset Grafici Google Play Store ===');

// 1. Icona 512x512
const srcIcon = path.join(REPO_ROOT, 'assets/icon-512.png');
const dstIcon = path.join(ASSETS_DIR, 'icon_512.png');
if (fs.existsSync(srcIcon)) {
  fs.copyFileSync(srcIcon, dstIcon);
  console.log('✓ Icona 512x512 pronta in:', dstIcon);
}

// 2. Screenshot di Gioco (1920x1080 o Landscape ad alta risoluzione)
const screenshotMap = [
  { src: 'race_grid_last_place.png', dst: 'screenshot_1_starting_grid.png', label: '1. Partenza in Griglia (6/6)' },
  { src: 'world_cosmic_warpway.png', dst: 'screenshot_2_cosmic_warpway.png', label: '2. Mondo Cosmic Warpway' },
  { src: 'world_magma_caldera.png', dst: 'screenshot_3_magma_caldera.png', label: '3. Mondo Caldera Magmatica' },
  { src: 'world_glacier_peaks.png', dst: 'screenshot_4_glacier_peaks.png', label: '4. Mondo Vette Ghiacciate' },
  { src: 'race_overtaking_lead.png', dst: 'screenshot_5_overtake_victory.png', label: '5. Sorpasso e Vittoria (1/6)' },
  { src: 'track_selector_traits.png', dst: 'screenshot_6_track_selection.png', label: '6. Selettore Tracciati & Caratteristiche' }
];

for (const item of screenshotMap) {
  const srcPath = path.join(BRAIN_DIR, item.src);
  const dstPath = path.join(ASSETS_DIR, item.dst);
  if (fs.existsSync(srcPath)) {
    fs.copyFileSync(srcPath, dstPath);
    console.log(`✓ ${item.label} copiato in:`, dstPath);
  } else {
    console.warn(`! File non trovato: ${srcPath}`);
  }
}

// 3. Feature Graphic 1024x500 tramite Puppeteer (standard Google Play obbligatorio)
async function generateFeatureGraphic() {
  console.log('--> Rendering Feature Graphic 1024x500 con Puppeteer...');
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-gpu']
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1024, height: 500, deviceScaleFactor: 1 });

  // Leggi immagine di sfondo per il banner se presente
  let bgBase64 = '';
  const cosmicImgPath = path.join(BRAIN_DIR, 'world_cosmic_warpway.png');
  if (fs.existsSync(cosmicImgPath)) {
    bgBase64 = 'data:image/png;base64,' + fs.readFileSync(cosmicImgPath).toString('base64');
  }

  const html = `
  <!DOCTYPE html>
  <html>
  <head>
    <meta charset="utf-8">
    <style>
      * { box-sizing: border-box; margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif; }
      body {
        width: 1024px;
        height: 500px;
        position: relative;
        background: radial-gradient(circle at 70% 50%, #1e1040 0%, #080c18 80%, #03060c 100%);
        overflow: hidden;
        display: flex;
        align-items: center;
        color: #ffffff;
      }
      .bg-layer {
        position: absolute;
        top: 0; left: 0; width: 100%; height: 100%;
        background-image: ${bgBase64 ? `url('${bgBase64}')` : 'none'};
        background-size: cover;
        background-position: center;
        opacity: 0.42;
        filter: brightness(0.8) contrast(1.15) saturate(1.2);
      }
      .overlay-gradient {
        position: absolute;
        top: 0; left: 0; width: 100%; height: 100%;
        background: linear-gradient(90deg, rgba(5,9,18,0.95) 0%, rgba(5,9,18,0.75) 45%, rgba(5,9,18,0.2) 100%);
      }
      .content {
        position: relative;
        z-index: 10;
        padding-left: 56px;
        max-width: 640px;
      }
      .tagline {
        display: inline-flex;
        align-items: center;
        gap: 8px;
        background: rgba(118, 255, 240, 0.18);
        border: 1px solid rgba(118, 255, 240, 0.5);
        color: #76fff0;
        font-size: 13px;
        font-weight: 800;
        letter-spacing: 2px;
        text-transform: uppercase;
        padding: 6px 14px;
        border-radius: 999px;
        margin-bottom: 16px;
        backdrop-filter: blur(8px);
      }
      h1 {
        font-size: 54px;
        font-weight: 900;
        line-height: 1.05;
        letter-spacing: -1px;
        background: linear-gradient(135deg, #ffffff 0%, #a5f3fc 45%, #38bdf8 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        text-shadow: 0 4px 20px rgba(56, 189, 248, 0.35);
        margin-bottom: 10px;
      }
      h2 {
        font-size: 24px;
        font-weight: 800;
        color: #ffc857;
        letter-spacing: 3px;
        text-transform: uppercase;
        margin-bottom: 22px;
        text-shadow: 0 2px 10px rgba(255, 200, 87, 0.4);
      }
      .features {
        display: flex;
        gap: 12px;
        flex-wrap: wrap;
      }
      .pill {
        background: rgba(15, 23, 42, 0.85);
        border: 1px solid rgba(255, 255, 255, 0.2);
        padding: 8px 16px;
        border-radius: 10px;
        font-size: 13px;
        font-weight: 700;
        color: #e2e8f0;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.4);
      }
      .pill span {
        color: #76fff0;
        font-weight: 800;
      }
      .badge-120 {
        position: absolute;
        top: 36px;
        right: 48px;
        background: linear-gradient(135deg, #ffc857 0%, #ff8c00 100%);
        color: #070d18;
        font-weight: 900;
        font-size: 15px;
        padding: 10px 18px;
        border-radius: 12px;
        box-shadow: 0 8px 24px rgba(255, 140, 0, 0.45);
        transform: rotate(3deg);
        z-index: 20;
      }
    </style>
  </head>
  <body>
    <div class="bg-layer"></div>
    <div class="overlay-gradient"></div>
    <div class="badge-120">⚡ 120 FPS ULTRA-FLUID</div>
    <div class="content">
      <div class="tagline">🏎️ NEXT-GEN 3D ARCADE KART RACER</div>
      <h1>ZEPHYR REEF</h1>
      <h2>3D KART RACING</h2>
      <div class="features">
        <div class="pill"><span>24</span> Tracciati Unici</div>
        <div class="pill"><span>8</span> Piloti & Kart</div>
        <div class="pill"><span>🌐</span> Multiplayer Live</div>
        <div class="pill"><span>🏆</span> Partenza Ultimo Posto</div>
      </div>
    </div>
  </body>
  </html>
  `;

  await page.setContent(html, { waitUntil: 'networkidle0' });
  const featureGraphicPath = path.join(ASSETS_DIR, 'feature_graphic_1024x500.png');
  await page.screenshot({ path: featureGraphicPath, type: 'png' });
  await browser.close();

  console.log('✓ Feature Graphic 1024x500 generata con successo in:', featureGraphicPath);
}

await generateFeatureGraphic();
console.log('=== Tutti gli asset grafici per Google Play Store sono pronti in playstore_assets/ ===');
