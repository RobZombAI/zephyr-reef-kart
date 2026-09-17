import * as THREE from 'three';
import { RACERS, TRACKS, GAME_CONFIG } from './config/augustaConfig.js';
import { AugustaTrack } from './track/trackGenerator.js';
import { createAugustaScenery } from './scenery/augustaScenery.js';
import { createKartMesh } from './karts/kartModels.js';
import { KartController } from './physics/kartController.js';
import { AIRacersManager } from './ai/aiRacers.js';
import { AugustaSoundManager } from './audio/augustaAudio.js';
import { AugustaMinimap } from './ui/minimap.js';
import { AugustaUI } from './ui/augustaUI.js';

class AugustaGame {
  constructor() {
    this.canvas = document.getElementById('gl');
    this.minimapCanvas = document.getElementById('minimap-canvas');

    // 1. Scene, Camera, Renderer
    this.scene = new THREE.Scene();
    this.currentTrackDef = TRACKS[0];

    this.camera = new THREE.PerspectiveCamera(65, window.innerWidth / window.innerHeight, 0.2, 1400);
    this.camera.position.set(0, 8, -18);

    this.renderer = new THREE.WebGLRenderer({
      canvas: this.canvas,
      antialias: true,
      powerPreference: 'high-performance'
    });
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMap.type = THREE.PCFShadowMap;
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
    this.renderer.toneMappingExposure = 1.15;

    // 2. Lighting & Atmosphere
    this.sunLight = null;
    this.hemiLight = null;
    this.ambientLight = null;
    this.initLighting();

    // 3. Audio & Sound Manager
    this.soundManager = new AugustaSoundManager();

    // 4. Track & Scenery
    this.track = new AugustaTrack(this.currentTrackDef, GAME_CONFIG);
    this.scene.add(this.track.group);

    this.scenery = createAugustaScenery(this.track);
    this.scene.add(this.scenery.group);

    // 5. Game State
    this.state = 'title';
    this.raceTime = 0;
    this.countdownTimer = 0;
    this.cameraTrauma = 0;

    // 6. Player Racer & Opponents
    this.playerRacerConfig = RACERS[0];
    this.playerController = null;
    this.playerMeshData = null;
    this.allKartControllers = [];

    this.aiManager = null;

    // 7. Minimap & UI
    this.minimap = new AugustaMinimap(this.minimapCanvas, this.track);
    this.ui = new AugustaUI(this);

    // Setup initial racers
    this.setupRacers();

    // Input handlers
    this.initInput();

    // Resize handler
    window.addEventListener('resize', () => this.onResize());

    // Loop
    this.lastTime = performance.now();
    this.animate = this.animate.bind(this);
    requestAnimationFrame(this.animate);
  }

  initLighting() {
    const t = this.currentTrackDef;
    this.scene.background = new THREE.Color(t.skyColor || 0x141820);
    this.scene.fog = new THREE.FogExp2(t.fogColor || 0x222a33, 0.0022);

    if (!this.sunLight) {
      this.sunLight = new THREE.DirectionalLight(t.dirLightColor || 0xffeedd, 2.2);
      this.sunLight.position.set(120, 90, 80);
      this.sunLight.castShadow = true;
      this.sunLight.shadow.mapSize.width = 2048;
      this.sunLight.shadow.mapSize.height = 2048;
      this.sunLight.shadow.camera.near = 10;
      this.sunLight.shadow.camera.far = 400;
      const d = 140;
      this.sunLight.shadow.camera.left = -d;
      this.sunLight.shadow.camera.right = d;
      this.sunLight.shadow.camera.top = d;
      this.sunLight.shadow.camera.bottom = -d;
      this.scene.add(this.sunLight);

      this.hemiLight = new THREE.HemisphereLight(0x76b5d9, 0x443322, 1.1);
      this.scene.add(this.hemiLight);

      this.ambientLight = new THREE.AmbientLight(t.ambientColor || 0x334155, 0.65);
      this.scene.add(this.ambientLight);
    } else {
      this.sunLight.color.setHex(t.dirLightColor || 0xffeedd);
      this.ambientLight.color.setHex(t.ambientColor || 0x334155);
    }
  }

  selectTrack(trackDef) {
    this.currentTrackDef = trackDef;
    
    // Remove old track & scenery
    if (this.track) this.scene.remove(this.track.group);
    if (this.scenery) this.scene.remove(this.scenery.group);

    // Build new track & scenery
    this.track = new AugustaTrack(this.currentTrackDef, GAME_CONFIG);
    this.scene.add(this.track.group);

    this.scenery = createAugustaScenery(this.track);
    this.scene.add(this.scenery.group);

    // Update lighting & fog
    this.initLighting();

    // Rebuild minimap
    this.minimap = new AugustaMinimap(this.minimapCanvas, this.track);

    // Re-setup racers on new track
    this.setupRacers();
  }

  setupRacers() {
    // Clear old meshes
    if (this.playerMeshData) {
      this.scene.remove(this.playerMeshData.root);
    }
    if (this.aiManager) {
      this.aiManager.racers.forEach(r => this.scene.remove(r.meshData.root));
    }

    this.allKartControllers = [];

    // 1. Player Setup
    this.playerController = new KartController(this.playerRacerConfig, this.track, true, this.allKartControllers);
    this.playerMeshData = createKartMesh(this.playerRacerConfig);
    this.scene.add(this.playerMeshData.root);
    this.allKartControllers.push(this.playerController);

    // Grid positions
    // Event Hooks for SFX, Haptics and Visuals
    this.playerController.onWallHit = () => {
      this.soundManager.playWallHit(0.85);
      this.track.spawnSparks(this.playerController.position);
      this.addTrauma(0.35);
    };
    this.playerController.onKartBump = () => {
      this.soundManager.playWallHit(0.4);
      this.addTrauma(0.2);
    };
    this.playerController.onItemPickup = (item) => {
      this.soundManager.playItemPickup();
    };
    this.playerController.onItemUse = (item) => {
      this.soundManager.playPowerup(item.id);
      this.addTrauma(0.25);
    };
    this.playerController.onFinalLap = () => {
      this.ui.showFinalLapBanner();
      this.soundManager.playLapSound(3, true);
    };
    this.playerController.onSectorSplit = (sector) => {
      this.ui.showSectorSplit(sector, (Math.random() * 0.4 - 0.2));
    };
    this.playerController.onSpin = () => {
      this.soundManager.playSpin();
      this.addTrauma(0.5);
      if (window.AndroidHaptics && window.AndroidHaptics.vibrate) {
        try { window.AndroidHaptics.vibrate(40); } catch (e) {}
      } else if (window.navigator && window.navigator.vibrate) {
        try { window.navigator.vibrate(40); } catch (e) {}
      }
    };

    this.playerController.resetToTrack(0.015, -2.4);
    this.playerMeshData.root.position.copy(this.playerController.position);

    // 2. AI Opponents Setup
    const aiConfigs = RACERS.filter(r => r.id !== this.playerRacerConfig.id);
    this.aiManager = new AIRacersManager(aiConfigs, this.track, this.scene);
    this.aiManager.racers.forEach((r, idx) => {
      const uOffset = 0.022 + idx * 0.014;
      const lane = (idx % 2 === 0 ? 1 : -1) * 2.8;
      r.controller.allKarts = this.allKartControllers;
      r.controller.resetToTrack(uOffset, lane);
      r.meshData.root.position.copy(r.controller.position);
      this.allKartControllers.push(r.controller);
    });
  }

  addTrauma(amount) {
    this.cameraTrauma = Math.min(1.0, this.cameraTrauma + amount);
  }

  setPlayerRacer(racerConfig) {
    this.playerRacerConfig = racerConfig;
    this.setupRacers();
  }

  startCountdown() {
    this.state = 'countdown';
    this.countdownTimer = 3.4;
    this.raceTime = 0;
    this.ui.showScreen('hud');
    this.soundManager.startBackgroundMusic();
    this.soundManager.playCountdown(3);

    // Event Hooks for SFX, Haptics and Visuals
    this.playerController.onWallHit = () => {
      this.soundManager.playWallHit(0.85);
      this.track.spawnSparks(this.playerController.position);
      this.addTrauma(0.35);
    };
    this.playerController.onKartBump = () => {
      this.soundManager.playWallHit(0.4);
      this.addTrauma(0.2);
    };
    this.playerController.onItemPickup = (item) => {
      this.soundManager.playItemPickup();
    };
    this.playerController.onItemUse = (item) => {
      this.soundManager.playPowerup(item.id);
      this.addTrauma(0.25);
    };
    this.playerController.onFinalLap = () => {
      this.ui.showFinalLapBanner();
      this.soundManager.playLapSound(3, true);
    };
    this.playerController.onSectorSplit = (sector) => {
      this.ui.showSectorSplit(sector, (Math.random() * 0.4 - 0.2));
    };
    this.playerController.onSpin = () => {
      this.soundManager.playSpin();
      this.addTrauma(0.5);
      if (window.AndroidHaptics && window.AndroidHaptics.vibrate) {
        try { window.AndroidHaptics.vibrate(40); } catch (e) {}
      } else if (window.navigator && window.navigator.vibrate) {
        try { window.navigator.vibrate(40); } catch (e) {}
      }
    };

    this.playerController.resetToTrack(0.015, -2.4);
    this.aiManager.racers.forEach((r, idx) => {
      const uOffset = 0.022 + idx * 0.014;
      const lane = (idx % 2 === 0 ? 1 : -1) * 2.8;
      r.controller.resetToTrack(uOffset, lane);
    });
  }

  resetRace() {
    this.state = 'title';
    this.raceTime = 0;
    this.soundManager.stopEngine();
    this.setupRacers();
  }

  initInput() {
    window.addEventListener('keydown', (e) => {
      if (!this.playerController) return;
      const key = e.code;
      if (key === 'KeyW' || key === 'ArrowUp') this.playerController.input.accel = true;
      if (key === 'KeyS' || key === 'ArrowDown') this.playerController.input.brake = true;
      if (key === 'KeyA' || key === 'ArrowLeft') this.playerController.input.left = true;
      if (key === 'KeyD' || key === 'ArrowRight') this.playerController.input.right = true;
      if (key === 'ShiftLeft' || key === 'ShiftRight') this.playerController.input.drift = true;
      if (key === 'Space' || key === 'KeyE') {
        this.playerController.input.item = true;
        this.playerController.useCurrentItem();
      }
      if (key === 'KeyQ') this.playerController.input.lookBack = true;
      if (key === 'KeyR') {
        this.playerController.resetToTrack(this.playerController.u);
      }
    });

    window.addEventListener('keyup', (e) => {
      if (!this.playerController) return;
      const key = e.code;
      if (key === 'KeyW' || key === 'ArrowUp') this.playerController.input.accel = false;
      if (key === 'KeyS' || key === 'ArrowDown') this.playerController.input.brake = false;
      if (key === 'KeyA' || key === 'ArrowLeft') this.playerController.input.left = false;
      if (key === 'KeyD' || key === 'ArrowRight') this.playerController.input.right = false;
      if (key === 'ShiftLeft' || key === 'ShiftRight') this.playerController.input.drift = false;
      if (key === 'Space' || key === 'KeyE') this.playerController.input.item = false;
      if (key === 'KeyQ') this.playerController.input.lookBack = false;
    });
  }

  onResize() {
    const w = window.innerWidth;
    const h = window.innerHeight;
    this.camera.aspect = w / h;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(w, h);
  }

  updateCamera(dt) {
    if (this.state === 'title' || this.state === 'select') {
      const time = performance.now() * 0.0003;
      const r = 28;
      this.camera.position.set(Math.sin(time) * r, 12, Math.cos(time) * r);
      this.camera.lookAt(0, 4, 30);
      return;
    }

    // Racing Dynamic Chase Camera
    const player = this.playerController;
    const forward = player.forward;
    const lookBack = player.input.lookBack ? -1 : 1;

    const speedRatio = Math.abs(player.speed) / (GAME_CONFIG.nitroSpeed / 3.6);
    const targetDist = (7.5 + speedRatio * 3.5) * lookBack;
    const targetHeight = 3.2 + speedRatio * 0.8;

    const idealCamPos = player.position.clone()
      .addScaledVector(forward, -targetDist)
      .add(new THREE.Vector3(0, targetHeight, 0));

    this.camera.position.lerp(idealCamPos, dt * 9.0);

    if (this.cameraTrauma > 0) {
      this.cameraTrauma = Math.max(0, this.cameraTrauma - dt * 2.0);
      const shake = this.cameraTrauma * this.cameraTrauma * 0.9;
      this.camera.position.x += (Math.random() - 0.5) * shake;
      this.camera.position.y += (Math.random() - 0.5) * shake * 0.6;
      this.camera.position.z += (Math.random() - 0.5) * shake;
    }

    const targetFov = 65 + speedRatio * 18;
    this.camera.fov = THREE.MathUtils.lerp(this.camera.fov, targetFov, dt * 6.0);
    this.camera.updateProjectionMatrix();

    const lookTarget = player.position.clone().add(new THREE.Vector3(0, 1.3, 0)).addScaledVector(forward, 6.0 * lookBack);
    this.camera.lookAt(lookTarget);
  }

  computeStandings() {
    const list = [
      { isPlayer: true, racer: this.playerRacerConfig, totalProgress: this.playerController.totalProgress, controller: this.playerController }
    ];

    if (this.aiManager) {
      this.aiManager.racers.forEach(r => {
        list.push({
          isPlayer: false,
          racer: r.config,
          totalProgress: r.controller.totalProgress,
          controller: r.controller
        });
      });
    }

    list.sort((a, b) => b.totalProgress - a.totalProgress);

    list.forEach((item, idx) => {
      item.controller.rank = idx + 1;
    });

    return list;
  }

  animate() {
    requestAnimationFrame(this.animate);

    const now = performance.now();
    const dt = Math.min(0.08, (now - this.lastTime) / 1000);
    this.lastTime = now;

    // 1. Scenery & Track update (flames, lasers, subwoofers, mystery boxes)
    this.scenery.update(now * 0.001);
    this.track.update(dt);

    // 2. State Machine
    if (this.state === 'countdown') {
      this.countdownTimer -= dt;
      if (this.countdownTimer > 2.2) {
        this.ui.showCountdown('3');
        this.track.setGantryLight('3');
      } else if (this.countdownTimer > 1.2) {
        this.ui.showCountdown('2');
        this.track.setGantryLight('2');
      } else if (this.countdownTimer > 0.2) {
        this.ui.showCountdown('1');
        this.track.setGantryLight('1');
      } else {
        this.ui.showCountdown("VIA! FUGA DALL'INQUINAMENTO!", true);
        this.track.setGantryLight('go');
        this.soundManager.playCountdown(0);
        this.state = 'racing';
      }
    } else if (this.state === 'racing') {
      if (this.ui.isPaused) {
        this.renderer.render(this.scene, this.camera);
        return;
      }

      this.raceTime += dt;

      // Update player
      this.playerController.update(dt);
      this.playerMeshData.root.position.copy(this.playerController.position);
      this.playerMeshData.root.rotation.order = 'YXZ';
      this.playerMeshData.root.rotation.set(
        this.playerController.pitch,
        this.playerController.yaw + this.playerController.driftAngle,
        this.playerController.roll
      );
      this.playerMeshData.update(
        this.playerController.speed,
        dt,
        this.playerController.steerAngle,
        this.playerController.boostTimer > 0,
        this.playerController.shieldTimer > 0
      );

      // Update AI
      this.aiManager.update(dt, this.playerController);

      // Sound update
      this.soundManager.updateEngine(
        this.playerController.speed,
        this.playerController.input.accel,
        this.playerController.isDrifting,
        this.playerController.driftLevel
      );

      // Standings
      const standings = this.computeStandings();

      // HUD update
      this.ui.updateHUD(this.playerController, this.raceTime, standings);

      // Check win condition
      if (this.playerController.finished && this.state !== 'finished') {
        this.state = 'finished';
        this.track.spawnConfetti();
        this.soundManager.playVictoryFanfare();

        const m = Math.floor(this.raceTime / 60);
        const s = Math.floor(this.raceTime % 60);
        const ms = Math.floor((this.raceTime * 1000) % 1000);
        const finalTimeStr = `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}.${String(ms).padStart(3, '0')}`;
        const bestLapSec = (this.raceTime / 3) * 0.94;
        const bm = Math.floor(bestLapSec / 60);
        const bs = Math.floor(bestLapSec % 60);
        const bms = Math.floor((bestLapSec * 1000) % 1000);
        const bestLapStr = `${String(bm).padStart(2, '0')}:${String(bs).padStart(2, '0')}.${String(bms).padStart(3, '0')}`;

        const formattedResults = standings.map(st => ({
          isPlayer: st.isPlayer,
          racer: st.racer,
          timeStr: finalTimeStr
        }));
        this.ui.showResults(formattedResults, finalTimeStr, bestLapStr);
      }
    }

    // 3. Minimap update
    if (this.state === 'racing' || this.state === 'countdown') {
      this.minimap.render(this.playerController, this.aiManager);
    }

    // 4. Camera Update & Render
    this.updateCamera(dt);
    this.renderer.render(this.scene, this.camera);
  }
}

// Boot application
window.addEventListener('DOMContentLoaded', () => {
  window.game = new AugustaGame();
});
