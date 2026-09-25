#!/usr/bin/env node
/**
 * sync_all_mirrors.js — UNICO script di sincronizzazione dei mirror del gioco.
 *
 * Copia i file sorgente (index.html, zephyr.html, assets/*) in tutte le copie
 * del gioco presenti nel repo:
 *
 *   - public/                                                        (mirror web/vite)
 *   - android/ZephyrReefKart/app/src/main/assets/                    (WebView Android)
 *   - ios/ZephyrReefKart/ZephyrReefKart/Resources/WebAssets/         (WebView iOS)
 *   - dist/          SOLO se esiste già: è output di `vite build`, non si crea a mano.
 *
 * I percorsi sono relativi alla root del repo (derivati da import.meta.url),
 * quindi lo script funziona da qualsiasi directory di lavoro.
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
export const REPO_ROOT = path.resolve(__dirname, '..');

const pkg = JSON.parse(fs.readFileSync(path.join(REPO_ROOT, 'package.json'), 'utf8'));

/** Mirror reali trovati nel repo (html + assets/). */
const MIRRORS = [
  'public',
  'android/ZephyrReefKart/app/src/main/assets',
  'ios/ZephyrReefKart/ZephyrReefKart/Resources/WebAssets'
];

/** dist/ è output di build: sincronizzato solo se la directory esiste già. */
const DIST_DIR = 'dist';

/** Esegue la copia di index.html, zephyr.html e assets/* verso tutti i mirror. Restituisce l'elenco dei file copiati. */
export function syncMirrors({ logger = console } = {}) {
  const sourceAssets = path.join(REPO_ROOT, 'assets');
  const assetFiles = fs
    .readdirSync(sourceAssets)
    .filter((f) => fs.statSync(path.join(sourceAssets, f)).isFile());

  const targets = [...MIRRORS];
  if (fs.existsSync(path.join(REPO_ROOT, DIST_DIR))) {
    targets.push(DIST_DIR); // build output: aggiornato solo se già presente
  }

  const copied = [];
  for (const rel of targets) {
    const dir = path.join(REPO_ROOT, rel);
    fs.mkdirSync(dir, { recursive: true });

    for (const f of ['index.html', 'zephyr.html']) {
      const dest = path.join(dir, f);
      fs.copyFileSync(path.join(REPO_ROOT, f), dest);
      copied.push(dest);
    }

    const assetsDir = path.join(dir, 'assets');
    fs.mkdirSync(assetsDir, { recursive: true });
    for (const f of assetFiles) {
      const dest = path.join(assetsDir, f);
      fs.copyFileSync(path.join(sourceAssets, f), dest);
      copied.push(dest);
    }

    logger.log(`Synced -> ${dir}`);
  }
  return copied;
}

const isMain =
  process.argv[1] && import.meta.url === pathToFileURL(path.resolve(process.argv[1])).href;

if (isMain) {
  console.log(`=== Sincronizzazione mirror Zephyr Reef Kart — v${pkg.version} ===`);
  try {
    const copied = syncMirrors();
    console.log(`Copiati ${copied.length} file su ${MIRRORS.length} mirror (dist/ solo se esiste).`);
    console.log('=== Sync completato ===');
  } catch (err) {
    console.error(`ERRORE durante il sync dei mirror: ${err && err.message ? err.message : err}`);
    process.exit(1);
  }
}
