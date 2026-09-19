import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

const rootDir = process.cwd();
const artifactsDir = '/Users/robzomb/.gemini/antigravity/brain/0394039c-7986-43d7-9058-02535fa2c8fe';

console.log('=== Synchronizing all mirrors and native packages to v6.9.4 ===');

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
console.log('--> Updating ZephyrReefKart.apk...');
const androidAssetsDir = path.join(rootDir, 'android/ZephyrReefKart/app/src/main');
execSync(`cd "${androidAssetsDir}" && zip -u "${path.join(rootDir, 'ZephyrReefKart.apk')}" assets/index.html assets/zephyr.html assets/assets/index-C9rd31_W.js`, { stdio: 'inherit' });
execSync(`unzip -t "${path.join(rootDir, 'ZephyrReefKart.apk')}" > /dev/null`);
fs.copyFileSync(path.join(rootDir, 'ZephyrReefKart.apk'), path.join(artifactsDir, 'ZephyrReefKart.apk'));
console.log('Updated and verified ZephyrReefKart.apk');

// 2. Update ZephyrReefKart.ipa
console.log('--> Updating ZephyrReefKart.ipa...');
const tempIpa = path.join(rootDir, 'temp_ipa_update');
fs.rmSync(tempIpa, { recursive: true, force: true });
const ipaAssetsDir = path.join(tempIpa, 'Payload/ZephyrReefKart.app/WebAssets/assets');
fs.mkdirSync(ipaAssetsDir, { recursive: true });
fs.copyFileSync(indexHtml, path.join(tempIpa, 'Payload/ZephyrReefKart.app/WebAssets/index.html'));
fs.copyFileSync(zephyrHtml, path.join(tempIpa, 'Payload/ZephyrReefKart.app/WebAssets/zephyr.html'));
fs.copyFileSync(bundle, path.join(ipaAssetsDir, 'index-C9rd31_W.js'));

execSync(`cd "${tempIpa}" && zip -u "${path.join(rootDir, 'ZephyrReefKart.ipa')}" Payload/ZephyrReefKart.app/WebAssets/index.html Payload/ZephyrReefKart.app/WebAssets/zephyr.html Payload/ZephyrReefKart.app/WebAssets/assets/index-C9rd31_W.js`, { stdio: 'inherit' });
fs.rmSync(tempIpa, { recursive: true, force: true });
execSync(`unzip -t "${path.join(rootDir, 'ZephyrReefKart.ipa')}" > /dev/null`);
fs.copyFileSync(path.join(rootDir, 'ZephyrReefKart.ipa'), path.join(artifactsDir, 'ZephyrReefKart.ipa'));
console.log('Updated and verified ZephyrReefKart.ipa');

console.log('=== All mirrors and native packages successfully updated and verified! ===');
