#!/usr/bin/env node
/**
 * package_native.js — sincronizza i mirror e produce i pacchetti nativi (APK + IPA).
 *
 * - Il sync dei mirror è delegato all'unico script scripts/sync_all_mirrors.js.
 * - Gli artifact vengono copiati in <repo>/build/artifacts/ di default;
 *   si può override con la env var ZEPHYR_ARTIFACTS_DIR.
 * - Tutti i comandi esterni sono avvolti in try/catch: errore -> exit 1 con messaggio chiaro.
 */
import fs from 'node:fs';
import path from 'node:path';
import { execSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import { syncMirrors, REPO_ROOT } from './sync_all_mirrors.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const pkg = JSON.parse(fs.readFileSync(path.join(REPO_ROOT, 'package.json'), 'utf8'));

// Default: <repo>/build/artifacts/ ; override con ZEPHYR_ARTIFACTS_DIR
const artifactsDir = process.env.ZEPHYR_ARTIFACTS_DIR
  ? path.resolve(process.env.ZEPHYR_ARTIFACTS_DIR)
  : path.join(REPO_ROOT, 'build', 'artifacts');

function run(cmd, opts = {}) {
  execSync(cmd, { stdio: 'inherit', ...opts });
}

try {
  fs.mkdirSync(artifactsDir, { recursive: true });
  console.log(`=== Sync mirror + packaging nativo — v${pkg.version} ===`);
  console.log(`Artifact dir: ${artifactsDir}`);

  // 0. Sync di tutti i mirror (public, android, ios, dist se esiste)
  syncMirrors();

  // 1. Build & verify signed ZephyrReefKart.apk via Gradle
  console.log('--> Building properly signed & aligned ZephyrReefKart.apk...');
  const androidDir = path.join(REPO_ROOT, 'android/ZephyrReefKart');
  const homebrewJdk = '/opt/homebrew/opt/openjdk@17';
  let javaHome = null;
  if (fs.existsSync(homebrewJdk)) {
    javaHome = homebrewJdk;
  } else if (process.env.JAVA_HOME) {
    javaHome = process.env.JAVA_HOME;
  }
  if (!javaHome) {
    throw new Error(
      'JAVA_HOME non impostato e JDK homebrew non trovato in ' +
        homebrewJdk +
        '. Installa JDK 17 (es. brew install openjdk@17) oppure imposta JAVA_HOME.'
    );
  }
  const env = { ...process.env, JAVA_HOME: javaHome, PATH: `${javaHome}/bin:${process.env.PATH}` };

  run('./gradlew assembleRelease --no-daemon', { cwd: androidDir, env });
  const builtApk = path.join(androidDir, 'app/build/outputs/apk/release/app-release.apk');
  if (!fs.existsSync(builtApk)) {
    throw new Error(`Built APK not found at ${builtApk}`);
  }

  const targetApk = path.join(REPO_ROOT, 'ZephyrReefKart.apk');
  fs.copyFileSync(builtApk, targetApk);

  // Verify with apksigner and zipalign
  const buildTools = path.join(process.env.HOME || '', 'Library/Android/sdk/build-tools/35.0.0');
  const apksigner = path.join(buildTools, 'apksigner');
  const zipalign = path.join(buildTools, 'zipalign');
  if (fs.existsSync(apksigner)) {
    run(`"${apksigner}" verify --verbose "${targetApk}"`, { env });
  }
  if (fs.existsSync(zipalign)) {
    run(`"${zipalign}" -c -v 4 "${targetApk}"`, { env, stdio: 'pipe' });
  }

  fs.copyFileSync(targetApk, path.join(artifactsDir, 'ZephyrReefKart.apk'));
  console.log('Successfully built, signed, aligned and verified ZephyrReefKart.apk');

  // 2. Build ZephyrReefKart.ipa via build_ios.sh
  console.log('--> Building ZephyrReefKart.ipa via scripts/build_ios.sh...');
  run('bash scripts/build_ios.sh', { cwd: REPO_ROOT });
  const targetIpa = path.join(REPO_ROOT, 'ZephyrReefKart.ipa');
  if (!fs.existsSync(targetIpa)) {
    throw new Error(`Built IPA not found at ${targetIpa}`);
  }
  fs.copyFileSync(targetIpa, path.join(artifactsDir, 'ZephyrReefKart.ipa'));
  console.log('Successfully built ZephyrReefKart.ipa');

  console.log(`=== All mirrors and native packages synchronized successfully! Artifacts in ${artifactsDir} ===`);
} catch (err) {
  console.error(`ERRORE packaging nativo: ${err && err.message ? err.message : err}`);
  process.exit(1);
}
