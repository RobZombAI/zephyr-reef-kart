# 🌴 Zephyr Reef Kart 🏁🏎️💨

An arcade 3D fantasy kart racing game built with Three.js, WebGL, and optimized for Android/iOS Native WebView (60 FPS, full-screen immersive).

[![GitHub Release](https://img.shields.io/github/v/release/RobZombAI/zephyr-reef-kart?style=for-the-badge&color=blue)](https://github.com/RobZombAI/zephyr-reef-kart/releases/latest)
[![Play Online](https://img.shields.io/badge/Play%20Online-GitHub%20Pages-brightgreen?style=for-the-badge)](https://robzombai.github.io/zephyr-reef-kart/)
[![Platform](https://img.shields.io/badge/Platform-Android%20%7C%20iOS%20%7C%20Web-green?style=for-the-badge)](https://github.com/RobZombAI/zephyr-reef-kart/releases/latest)
[![License](https://img.shields.io/badge/License-MIT-orange?style=for-the-badge)](LICENSE)

---

## 🌐 Play Online in Browser

You can play **Zephyr Reef Kart** directly in your browser without installing anything:  
👉 **[https://robzombai.github.io/zephyr-reef-kart/](https://robzombai.github.io/zephyr-reef-kart/)**

---

## 📲 Download the Native Apps (APK / IPA)

Download the latest native builds from the **[Releases page](https://github.com/RobZombAI/zephyr-reef-kart/releases/latest)**:

- **Android**: `ZephyrReefKart.apk` (~13 MB, supports Android 7.0 Nougat up to Android 15/16)
- **iOS**: `ZephyrReefKart.ipa` (ad-hoc signed: not installable on physical devices without your own provisioning profile)

### 💡 Android Installation Instructions
1. Download `ZephyrReefKart.apk` from the Releases page on your Android device.
2. Tap the downloaded file in your browser downloads or Files manager.
3. If prompted, allow **"Install unknown apps"** for your browser or file manager.
4. Tap **Install** and launch for 60 FPS full-screen arcade racing!

---

## ✨ Game Features

- **🏎️ Custom 3D Kart Physics**:
  - Realistic steering, acceleration, reverse, and drifting dynamics.
  - Directional oil slick spinout mechanics: smooth 360° spin while retaining forward momentum (no reverse loop).
  - Dynamic guardrail and wall bounce physics with continuous protection.
- **🏁 24 Fantasy Tracks across 6 Grand Prix Cups**:
  - *Coppa Brezza*, *Coppa Canyon*, *Coppa Abissi*, *Coppa Cielo*, *Coppa Antica*, *Coppa Nova* — 4 tracks each, with progressive difficulty and 10+ distinct geological biomes (sunken citadels, redwood forests, cybercity, magma caldera, cosmic orbit…).
- **🤖 Intelligent AI Opponents**:
  - Dynamic spline-following AI racers with rubber-banding and obstacle avoidance.
- **📱 Mobile & Desktop Controls**:
  - **Desktop Controls**:
    - `W` / `Up Arrow`: Accelerate
    - `S` / `Down Arrow`: Brake / Reverse
    - `A` / `D` or `Left` / `Right`: Steer
    - `Shift` / `Space`: Drift
    - `E` / `Space`: Use Power-up / Item
    - `P`: Pause Menu
    - `C`: Switch Camera
  - **Mobile Touch**: Left/Right steering buttons, Gas & Brake pedals, Power-up button, Drift button, and floating Pause menu.
- **🎵 Sound & Visual FX**:
  - Procedural sound synthesis and upbeat background music, tire smoke, boost flames, minimap radar, and lap timers.

---

## 🛠️ Development & Building

### Web Server
```bash
npm install
npm run dev
```

### Build Production Web Assets
```bash
npm run build
```
> **Nota**: l'entry di build è momentaneamente decorativa — il bundle `assets/index-*.js`
> precompilato è l'unico motore attualmente in uso (`vite build` riprodurrà l'output quando
> l'entry sorgente sarà ripristinata).

### Sync All Mirrors
Copia `index.html`, `zephyr.html` e `assets/*` in tutte le copie del gioco (public/, WebView Android, WebAssets iOS, e `dist/` solo se esiste):
```bash
npm run sync
```

### Run the Test Suite
```bash
npm test
```
Browser-based verification (Puppeteer, screenshot in `build/artifacts/`):
```bash
npm run test:browser
```

### Package Native Builds
```bash
node scripts/package_native.js
```
Artifact salvati in `build/artifacts/` (override con `ZEPHYR_ARTIFACTS_DIR`).

---

## 📄 License
[MIT License](LICENSE). Created with ❤️ for high-speed arcade fun!
