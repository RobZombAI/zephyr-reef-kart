import * as THREE from 'three';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js';
import { ShaderPass } from 'three/examples/jsm/postprocessing/ShaderPass.js';

import { CONFIG } from './config.js';
import { RetroShader } from './shaders/retroShader.js';
import { createSkyDome } from './scene/sky.js';
import { createToriiGate } from './scene/torii.js';
import { createSakuraTree } from './scene/sakura.js';
import { createStoneLantern } from './scene/lantern.js';
import { createTsukubai } from './scene/tsukubai.js';
import { createShrinePavilion } from './scene/shrine.js';
import { createGarden } from './scene/garden.js';
import { createPetalSystem } from './effects/petals.js';
import { createFireflies } from './effects/fireflies.js';
import { RippleManager } from './effects/ripples.js';
import { CameraController } from './camera/cinematicPath.js';
import { SoundManager } from './audio/soundManager.js';
import { setupUI } from './ui/controls.js';

class App {
  constructor() {
    this.container = document.getElementById('canvas-container');
    this.currentPresetKey = 'twilight';
    this.currentPreset = CONFIG.presets.twilight;

    this.lastTime = performance.now();
    this.soundManager = new SoundManager();

    this.initRenderer();
    this.initScene();
    this.initCamera();
    this.initPostProcessing();
    this.initGardenScene();
    this.initInteractions();

    this.ui = setupUI(this);

    window.addEventListener('resize', () => this.onResize());
    this.animate = this.animate.bind(this);
    requestAnimationFrame(this.animate);
  }

  initRenderer() {
    this.renderer = new THREE.WebGLRenderer({
      antialias: true,
      powerPreference: 'high-performance'
    });
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
    this.renderer.toneMappingExposure = 1.15;
    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMap.type = THREE.PCFShadowMap;

    this.container.appendChild(this.renderer.domElement);
  }

  initScene() {
    this.scene = new THREE.Scene();
    this.scene.fog = new THREE.Fog(
      this.currentPreset.sky.fogColor,
      this.currentPreset.sky.fogNear,
      this.currentPreset.sky.fogFar
    );

    // Sky dome (fog: false ensures sky is always visible and radiant)
    this.sky = createSkyDome(this.currentPreset);
    this.scene.add(this.sky.mesh);

    // Ambient light
    this.ambientLight = new THREE.AmbientLight(
      this.currentPreset.lights.ambient.color,
      this.currentPreset.lights.ambient.intensity
    );
    this.scene.add(this.ambientLight);

    // Hemisphere light for natural sky-to-ground bounce
    this.hemiLight = new THREE.HemisphereLight(
      this.currentPreset.lights.hemi.skyColor,
      this.currentPreset.lights.hemi.groundColor,
      this.currentPreset.lights.hemi.intensity
    );
    this.scene.add(this.hemiLight);

    // Main directional sunlight
    this.sunLight = new THREE.DirectionalLight(
      this.currentPreset.lights.sun.color,
      this.currentPreset.lights.sun.intensity
    );
    const sunPos = this.currentPreset.lights.sun.position;
    this.sunLight.position.set(sunPos[0], sunPos[1], sunPos[2]);
    this.sunLight.castShadow = true;
    this.sunLight.shadow.mapSize.width = 2048;
    this.sunLight.shadow.mapSize.height = 2048;
    this.sunLight.shadow.camera.near = 0.5;
    this.sunLight.shadow.camera.far = 140;
    this.sunLight.shadow.camera.left = -30;
    this.sunLight.shadow.camera.right = 30;
    this.sunLight.shadow.camera.top = 30;
    this.sunLight.shadow.camera.bottom = -30;
    this.sunLight.shadow.bias = -0.0005;
    this.scene.add(this.sunLight);
  }

  initCamera() {
    this.camera = new THREE.PerspectiveCamera(
      48,
      window.innerWidth / window.innerHeight,
      0.1,
      250
    );

    this.cameraController = new CameraController(
      this.camera,
      this.renderer.domElement,
      CONFIG
    );
    this.cameraController.updateCameraSpline();
  }

  initPostProcessing() {
    const width = window.innerWidth;
    const height = window.innerHeight;

    this.composer = new EffectComposer(this.renderer);

    const renderPass = new RenderPass(this.scene, this.camera);
    this.composer.addPass(renderPass);

    // Atmospheric bloom for lantern fire and horizon
    this.bloomPass = new UnrealBloomPass(
      new THREE.Vector2(width, height),
      CONFIG.postprocessing.bloomStrength,
      CONFIG.postprocessing.bloomRadius,
      CONFIG.postprocessing.bloomThreshold
    );
    this.composer.addPass(this.bloomPass);

    // Custom Retro Dither & Posterization shader pass
    this.retroPass = new ShaderPass(RetroShader);
    this.retroPass.uniforms.uResolution.value.set(width, height);
    this.retroPass.uniforms.uPosterizeLevels.value = CONFIG.postprocessing.posterizeLevels;
    this.retroPass.uniforms.uDitherStrength.value = CONFIG.postprocessing.ditherStrength;
    this.retroPass.uniforms.uTiltShiftFocus.value = CONFIG.postprocessing.tiltShiftFocus;
    this.retroPass.uniforms.uTiltShiftRange.value = CONFIG.postprocessing.tiltShiftRange;
    this.retroPass.uniforms.uTiltShiftBlur.value = CONFIG.postprocessing.tiltShiftBlur;
    this.retroPass.uniforms.uVignetteDarkness.value = CONFIG.postprocessing.vignetteDarkness;
    this.retroPass.uniforms.uVignetteOffset.value = CONFIG.postprocessing.vignetteOffset;
    this.retroPass.uniforms.uEnabled.value = CONFIG.postprocessing.enabled ? 1.0 : 0.0;

    this.composer.addPass(this.retroPass);
  }

  initGardenScene() {
    // 1. Garden terrain, pond, stepping stones, grass
    this.garden = createGarden(CONFIG);
    this.scene.add(this.garden.group);

    // Ripple manager for pond water
    this.rippleManager = new RippleManager(this.garden.waterMaterial, this.soundManager);

    // 2. Torii Gate at garden entrance - framing right side of entry view
    this.torii = createToriiGate();
    this.torii.position.set(4.8, 0.05, 11.0);
    this.torii.rotation.y = -0.15;
    this.scene.add(this.torii);

    // 3. Cherry Blossom Trees
    // Primary iconic sakura tree on pond left bank, leaning over water
    this.sakuraPrimary = createSakuraTree({ scale: 1.25 });
    this.sakuraPrimary.position.set(-5.0, 0.05, -2.8);
    this.sakuraPrimary.rotation.y = 0.55;
    this.scene.add(this.sakuraPrimary);

    // Secondary sakura tree across the pond
    this.sakuraSecondary = createSakuraTree({ scale: 0.95 });
    this.sakuraSecondary.position.set(1.6, 0.35, -11.5);
    this.sakuraSecondary.rotation.y = -1.1;
    this.scene.add(this.sakuraSecondary);

    // Distant background sakura tree
    this.sakuraDistant = createSakuraTree({ scale: 0.8 });
    this.sakuraDistant.position.set(-7.8, 0.7, -13.0);
    this.sakuraDistant.rotation.y = 2.0;
    this.scene.add(this.sakuraDistant);

    // 4. Japanese Stone Lanterns (Tōrō) with flickering warm lights
    this.lanterns = [];

    // Lantern 1: Entrance beside Torii gate on the right (matches frame 001!)
    const lantern1 = createStoneLantern({
      lightColor: this.currentPreset.lights.lanterns.color,
      lightIntensity: this.currentPreset.lights.lanterns.intensity,
      distance: this.currentPreset.lights.lanterns.distance
    });
    lantern1.position.set(6.8, 0.05, 10.5);
    lantern1.rotation.y = 0.35;
    this.scene.add(lantern1);
    this.lanterns.push(lantern1);

    // Lantern 2: Beside the pond path
    const lantern2 = createStoneLantern({
      lightColor: this.currentPreset.lights.lanterns.color,
      lightIntensity: this.currentPreset.lights.lanterns.intensity,
      distance: this.currentPreset.lights.lanterns.distance
    });
    lantern2.position.set(2.8, 0.05, -0.6);
    lantern2.rotation.y = -0.35;
    this.scene.add(lantern2);
    this.lanterns.push(lantern2);

    // Lantern 3: Near the shrine entrance steps
    const lantern3 = createStoneLantern({
      lightColor: this.currentPreset.lights.lanterns.color,
      lightIntensity: this.currentPreset.lights.lanterns.intensity,
      distance: this.currentPreset.lights.lanterns.distance
    });
    lantern3.position.set(-1.2, 0.45, -13.0);
    lantern3.rotation.y = 1.1;
    this.scene.add(lantern3);
    this.lanterns.push(lantern3);

    // Water shader lantern light pos
    this.garden.waterMaterial.uniforms.uLanternLightPos.value.copy(lantern2.position).add(new THREE.Vector3(0, 1.8, 0));

    // 5. Tsukubai (Stone Water Basin)
    this.tsukubai = createTsukubai();
    this.tsukubai.position.set(1.4, 0.05, 1.4);
    this.tsukubai.rotation.y = 0.8;
    this.scene.add(this.tsukubai);

    // 6. Shrine Pavilion on the Hill
    this.shrine = createShrinePavilion();
    this.shrine.position.set(1.8, 0.95, -19.5);
    this.shrine.rotation.y = 0.25;
    this.scene.add(this.shrine);

    // 7. Sakura Petals Simulation
    this.petals = createPetalSystem(CONFIG);
    this.scene.add(this.petals.mesh);

    // 8. Fireflies Simulation
    this.fireflies = createFireflies(CONFIG);
    this.scene.add(this.fireflies.points);
  }

  initInteractions() {
    this.raycaster = new THREE.Raycaster();
    this.mouse = new THREE.Vector2();

    const onPointerDown = (event) => {
      if (!this.soundManager.hasUserInteracted) {
        this.soundManager.play();
      }

      this.mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
      this.mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

      this.raycaster.setFromCamera(this.mouse, this.camera);
      const intersects = this.raycaster.intersectObject(this.garden.waterMesh);

      if (intersects.length > 0) {
        const pt = intersects[0].point;
        this.rippleManager.addRipple(pt.x, pt.z, 5.5);
      }
    };

    window.addEventListener('pointerdown', onPointerDown);
  }

  setPreset(presetKey) {
    const p = CONFIG.presets[presetKey];
    if (!p) return;
    this.currentPresetKey = presetKey;
    this.currentPreset = p;

    // Update sky
    this.sky.material.uniforms.uZenith.value.set(p.sky.zenith);
    this.sky.material.uniforms.uUpper.value.set(p.sky.upper);
    this.sky.material.uniforms.uMid.value.set(p.sky.mid);
    this.sky.material.uniforms.uHorizon.value.set(p.sky.horizon);
    this.sky.material.uniforms.uGlow.value.set(p.sky.glow);
    this.sky.material.uniforms.uSunPos.value.copy(p.lights.sun.position).normalize();

    // Fog
    this.scene.fog.color.set(p.sky.fogColor);
    this.scene.fog.near = p.sky.fogNear;
    this.scene.fog.far = p.sky.fogFar;

    // Lights
    this.ambientLight.color.set(p.lights.ambient.color);
    this.ambientLight.intensity = p.lights.ambient.intensity;

    this.hemiLight.color.set(p.lights.hemi.skyColor);
    this.hemiLight.groundColor.set(p.lights.hemi.groundColor);
    this.hemiLight.intensity = p.lights.hemi.intensity;

    this.sunLight.color.set(p.lights.sun.color);
    this.sunLight.intensity = p.lights.sun.intensity;
    this.sunLight.position.set(...p.lights.sun.position);

    // Water
    this.garden.waterMaterial.uniforms.uBaseColor.value.set(p.water.baseColor);
    this.garden.waterMaterial.uniforms.uReflectPeach.value.set(p.water.reflectionPeach);
    this.garden.waterMaterial.uniforms.uReflectMauve.value.set(p.water.reflectionMauve);
    this.garden.waterMaterial.uniforms.uSunDirection.value.copy(this.sunLight.position).normalize();

    // Lanterns
    for (const l of this.lanterns) {
      l.userData.baseIntensity = p.lights.lanterns.intensity;
      l.userData.light.color.set(p.lights.lanterns.color);
    }
  }

  onResize() {
    const w = window.innerWidth;
    const h = window.innerHeight;

    this.camera.aspect = w / h;
    this.camera.updateProjectionMatrix();

    this.renderer.setSize(w, h);
    this.composer.setSize(w, h);

    if (this.retroPass) {
      this.retroPass.uniforms.uResolution.value.set(w, h);
    }
    if (this.bloomPass) {
      this.bloomPass.resolution.set(w, h);
    }
  }

  animate() {
    requestAnimationFrame(this.animate);

    const now = performance.now();
    const delta = Math.min((now - this.lastTime) / 1000, 0.1);
    this.lastTime = now;
    const time = now / 1000;

    // 1. Update camera flythrough
    this.cameraController.update(delta);

    // Keep sky dome centered on camera
    if (this.sky && this.sky.mesh) {
      this.sky.mesh.position.copy(this.camera.position);
    }

    // 2. Sync BGM
    if (this.cameraController.mode === 'cinematic' && this.soundManager.bgmAudio && !this.soundManager.bgmAudio.paused) {
      const targetTime = this.cameraController.currentTime;
      if (Math.abs(this.soundManager.bgmAudio.currentTime - targetTime) > 1.2) {
        this.soundManager.seek(targetTime);
      }
    }

    // 3. Update shaders
    if (this.garden.waterMaterial) {
      this.garden.waterMaterial.uniforms.uTime.value = time;
    }
    if (this.garden.grassMaterial) {
      this.garden.grassMaterial.uniforms.uTime.value = time;
    }
    if (this.retroPass) {
      this.retroPass.uniforms.uTime.value = time;
    }

    // 4. Update ripples
    this.rippleManager.update(time);

    // 5. Update petals & trigger water ripples when landing
    this.petals.update(delta, time, (px, pz) => {
      this.rippleManager.addRipple(px, pz, 4.0);
    });

    // 6. Update fireflies
    this.fireflies.update(time);

    // 7. Update lanterns flicker
    for (const l of this.lanterns) {
      if (l.userData.update) {
        l.userData.update(time);
      }
    }

    // 8. Render composer
    this.composer.render();
  }
}

window.addEventListener('DOMContentLoaded', () => {
  window.app = new App();
});
