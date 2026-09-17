# 🏁 Zephyr Reef Kart & Augusta Grand Prix 🏎️💨

An arcade 3D kart racing game powered by Three.js, WebGL, and Apache Cordova / Android Native WebView.

[![GitHub Release](https://img.shields.io/github/v/release/RobZombAI/zephyr-reef-kart?style=for-the-badge&color=blue)](https://github.com/RobZombAI/zephyr-reef-kart/releases/latest)
[![Platform](https://img.shields.io/badge/Platform-Android%20%7C%20Web-green?style=for-the-badge)](https://github.com/RobZombAI/zephyr-reef-kart/releases/latest)
[![License](https://img.shields.io/badge/License-MIT-orange?style=for-the-badge)](LICENSE)

---

## 📲 Direct APK Downloads (Android)

Download and install directly on your Android phone or tablet (supports Android 7.0 Nougat up to Android 15 & 16):

| Game Edition | File | Size | Direct Download |
|---|---|---|---|
| **🌴 Zephyr Reef Kart** | `ZephyrReefKart.apk` | ~13 MB | [📥 **Download ZephyrReefKart.apk**](https://github.com/RobZombAI/zephyr-reef-kart/releases/download/v5.0.0/ZephyrReefKart.apk) |
| **🏎️ Augusta Grand Prix** | `AugustaKart.apk` | ~13.3 MB | [📥 **Download AugustaKart.apk**](https://github.com/RobZombAI/zephyr-reef-kart/releases/download/v5.0.0/AugustaKart.apk) |

> 💡 **Installation Tip**: After downloading the APK on your Android device:
> 1. Open the `.apk` from your browser downloads or Files app.
> 2. If prompted, allow **"Install unknown apps"** for your browser or file manager.
> 3. Tap **Install** and enjoy 60 FPS full-screen racing!

---

## ✨ Features

- **🏎️ Custom 3D Kart Physics**:
  - Realistic steering, acceleration, reverse, and drifting dynamics.
  - Directional oil slick spinout mechanics (smooth 360° spin while retaining forward inertia).
  - Dynamic guardrail and wall bounce physics with velocity damping.
- **🏁 5 Unique Tracks**:
  - *Sunny Beach*, *Sunset Coast*, *Neon City*, *Volcano Pass*, and *Deep Ocean*.
- **🤖 Intelligent AI Opponents**:
  - Dynamic spline-following AI racers with rubber-banding and obstacle avoidance.
- **📱 Mobile & Desktop Controls**:
  - **Desktop**: Arrow keys / WASD to Steer, Accelerate, Brake/Reverse. Space for Drift. `P` for Pause, `C` to switch camera.
  - **Mobile Touch**: Left/Right steering pads, Gas & Brake pedals, Drift button, and floating Pause menu.
- **🎵 Sound & Visual FX**:
  - Synthesized Web Audio engine, tire smoke particles, boost flames, minimap radar, and lap timers.

---

## 🛠️ Development & Building

### Prerequisites
- Node.js 18+
- Android SDK (API 34/35) & Java 17+ (for building APKs)

### Web Dev Server
```bash
npm install
npm run dev
```

### Build Production Web Assets
```bash
npm run build
```

---

## 📄 License
MIT License. Created with ❤️ for high-speed arcade fun!
