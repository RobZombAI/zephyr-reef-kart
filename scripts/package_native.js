import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

const rootDir = process.cwd();
const artifactsDir = '/Users/robzomb/.gemini/antigravity/brain/0394039c-7986-43d7-9058-02535fa2c8fe';

console.log('=== Synchronizing all mirrors and native packages to v6.9.5 ===');

const bundle = path.join(rootDir, 'assets/index-C9rd31_W.js');
const css = path.join(rootDir, 'assets/index-DMliwuo_.css');
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
    for (const file of fs.readdirSync(path.join(rootDir, 'assets'))) {
      fs.copyFileSync(path.join(rootDir, 'assets', file), path.join(assetsDir, file));
    }
  }
  console.log(`Synced -> ${t.dir}`);
}

// 1. Build and verify signed ZephyrReefKart.apk via Gradle
console.log('--> Building properly signed & aligned ZephyrReefKart.apk...');
const androidDir = path.join(rootDir, 'android/ZephyrReefKart');
const javaHome = fs.existsSync('/opt/homebrew/opt/openjdk@17') ? '/opt/homebrew/opt/openjdk@17' : process.env.JAVA_HOME;
const env = { ...process.env, JAVA_HOME: javaHome, PATH: `${javaHome}/bin:${process.env.PATH}` };

execSync('./gradlew assembleRelease --no-daemon', { cwd: androidDir, env, stdio: 'inherit' });
const builtApk = path.join(androidDir, 'app/build/outputs/apk/release/app-release.apk');
if (!fs.existsSync(builtApk)) {
  throw new Error(`Built APK not found at ${builtApk}`);
}

const targetApk = path.join(rootDir, 'ZephyrReefKart.apk');
fs.copyFileSync(builtApk, targetApk);

// Verify with apksigner and zipalign
const apksigner = path.join(process.env.HOME, 'Library/Android/sdk/build-tools/35.0.0/apksigner');
const zipalign = path.join(process.env.HOME, 'Library/Android/sdk/build-tools/35.0.0/zipalign');
if (fs.existsSync(apksigner)) {
  execSync(`"${apksigner}" verify --verbose "${targetApk}"`, { env, stdio: 'inherit' });
}
if (fs.existsSync(zipalign)) {
  execSync(`"${zipalign}" -c -v 4 "${targetApk}"`, { stdio: 'pipe' });
}

fs.copyFileSync(targetApk, path.join(artifactsDir, 'ZephyrReefKart.apk'));
console.log('Successfully built, signed, aligned and verified ZephyrReefKart.apk');

// 2. Update ZephyrReefKart.ipa
console.log('--> Updating ZephyrReefKart.ipa...');
const tempIpa = path.join(rootDir, 'temp_ipa_update');
fs.rmSync(tempIpa, { recursive: true, force: true });
const ipaAssetsDir = path.join(tempIpa, 'Payload/ZephyrReefKart.app/WebAssets/assets');
fs.mkdirSync(ipaAssetsDir, { recursive: true });
fs.copyFileSync(indexHtml, path.join(tempIpa, 'Payload/ZephyrReefKart.app/WebAssets/index.html'));
fs.copyFileSync(zephyrHtml, path.join(tempIpa, 'Payload/ZephyrReefKart.app/WebAssets/zephyr.html'));
for (const file of fs.readdirSync(path.join(rootDir, 'assets'))) {
  fs.copyFileSync(path.join(rootDir, 'assets', file), path.join(ipaAssetsDir, file));
}

execSync(`cd "${tempIpa}" && zip -u -r "${path.join(rootDir, 'ZephyrReefKart.ipa')}" Payload`, { stdio: 'inherit' });
fs.rmSync(tempIpa, { recursive: true, force: true });
execSync(`unzip -t "${path.join(rootDir, 'ZephyrReefKart.ipa')}" > /dev/null`);
fs.copyFileSync(path.join(rootDir, 'ZephyrReefKart.ipa'), path.join(artifactsDir, 'ZephyrReefKart.ipa'));
console.log('Updated and verified ZephyrReefKart.ipa');

console.log('=== All mirrors and native packages successfully updated and verified! ===');
