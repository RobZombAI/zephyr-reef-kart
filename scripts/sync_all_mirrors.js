import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

const rootDir = process.cwd();
const artifactsDir = '/Users/robzomb/.gemini/antigravity/brain/0394039c-7986-43d7-9058-02535fa2c8fe';

console.log('=== Synchronizing all mirrors to v6.7.0 ===');

const bundle = path.join(rootDir, 'assets/index-C9rd31_W.js');
const indexHtml = path.join(rootDir, 'index.html');
const zephyrHtml = path.join(rootDir, 'zephyr.html');

const targets = [
  { dir: path.join(rootDir, 'dist'), hasAssets: true },
  { dir: path.join(rootDir, 'public'), hasAssets: true },
  { dir: path.join(rootDir, 'android/ZephyrReefKart/app/src/main/assets'), hasAssets: true },
  { dir: path.join(rootDir, 'ios/ZephyrReefKart/ZephyrReefKart/Resources/WebAssets'), hasAssets: true }
];

for (const t of targets) {
  fs.mkdirSync(t.dir, { recursive: true });
  fs.copyFileSync(indexHtml, path.join(t.dir, 'index.html'));
  fs.copyFileSync(zephyrHtml, path.join(t.dir, 'zephyr.html'));
  if (t.hasAssets) {
    const assetsDir = path.join(t.dir, 'assets');
    fs.mkdirSync(assetsDir, { recursive: true });
    fs.copyFileSync(bundle, path.join(assetsDir, 'index-C9rd31_W.js'));
  }
  console.log(`Synced -> ${t.dir}`);
}

// 1. Update ZephyrReefKart.apk
console.log('--> Updating ZephyrReefKart.apk with fresh assets...');
const androidAssetsDir = path.join(rootDir, 'android/ZephyrReefKart/app/src/main');
execSync(`cd "${androidAssetsDir}" && zip -u "${path.join(rootDir, 'ZephyrReefKart.apk')}" assets/index.html assets/zephyr.html assets/assets/index-C9rd31_W.js`, { stdio: 'inherit' });
fs.copyFileSync(path.join(rootDir, 'ZephyrReefKart.apk'), path.join(artifactsDir, 'ZephyrReefKart.apk'));
console.log('Updated and copied ZephyrReefKart.apk');

// 2. Build iOS IPA via build_ios.sh
console.log('--> Building iOS IPA via scripts/build_ios.sh...');
execSync('bash scripts/build_ios.sh', { stdio: 'inherit' });
fs.copyFileSync(path.join(rootDir, 'ZephyrReefKart.ipa'), path.join(artifactsDir, 'ZephyrReefKart.ipa'));
console.log('Updated and copied ZephyrReefKart.ipa');

console.log('=== All mirrors and native packages synchronized successfully! ===');
