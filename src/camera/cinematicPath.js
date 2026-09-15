import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

export class CameraController {
  constructor(camera, domElement, config) {
    this.camera = camera;
    this.domElement = domElement;
    this.config = config;

    this.mode = 'cinematic'; // 'cinematic' | 'orbit'
    this.duration = 60.0;     // 60 seconds matching the video exactly
    this.currentTime = 0.0;
    this.isPlaying = true;
    this.playbackSpeed = 1.0;

    // Build CatmullRom splines from flightPath waypoints
    const points = config.flightPath.map(wp => wp.pos);
    const targets = config.flightPath.map(wp => wp.target);

    this.posCurve = new THREE.CatmullRomCurve3(points, false, 'centripetal', 0.5);
    this.targetCurve = new THREE.CatmullRomCurve3(targets, false, 'centripetal', 0.5);

    // Orbit controls for free explore mode
    this.orbitControls = new OrbitControls(this.camera, this.domElement);
    this.orbitControls.enableDamping = true;
    this.orbitControls.dampingFactor = 0.05;
    this.orbitControls.maxPolarAngle = Math.PI / 2 - 0.02; // Don't go below ground
    this.orbitControls.minDistance = 2.0;
    this.orbitControls.maxDistance = 45.0;
    this.orbitControls.target.set(-1.5, 1.5, -4.0);
    this.orbitControls.enabled = false;

    // Temporary vectors
    this._tempPos = new THREE.Vector3();
    this._tempTarget = new THREE.Vector3();

    // Callbacks
    this.onTimeUpdate = null;
  }

  setMode(mode) {
    this.mode = mode;
    if (mode === 'orbit') {
      this.orbitControls.enabled = true;
      // Initialize orbit target from current camera look vector
      const forward = new THREE.Vector3(0, 0, -1).applyQuaternion(this.camera.quaternion);
      this.orbitControls.target.copy(this.camera.position).addScaledVector(forward, 8.0);
      this.orbitControls.update();
    } else {
      this.orbitControls.enabled = false;
    }
  }

  seek(normalizedTime) {
    this.currentTime = THREE.MathUtils.clamp(normalizedTime, 0.0, 1.0) * this.duration;
    this.updateCameraSpline();
  }

  play() {
    this.isPlaying = true;
  }

  pause() {
    this.isPlaying = false;
  }

  togglePlay() {
    this.isPlaying = !this.isPlaying;
    return this.isPlaying;
  }

  updateCameraSpline() {
    const t = (this.currentTime % this.duration) / this.duration;
    this.posCurve.getPoint(t, this._tempPos);
    this.targetCurve.getPoint(t, this._tempTarget);

    this.camera.position.copy(this._tempPos);
    this.camera.lookAt(this._tempTarget);
  }

  update(delta) {
    if (this.mode === 'cinematic') {
      if (this.isPlaying) {
        this.currentTime += delta * this.playbackSpeed;
        if (this.currentTime >= this.duration) {
          this.currentTime = this.currentTime % this.duration;
        }
      }
      this.updateCameraSpline();

      if (this.onTimeUpdate) {
        this.onTimeUpdate(this.currentTime / this.duration, this.currentTime);
      }
    } else if (this.mode === 'orbit') {
      this.orbitControls.update();
    }
  }
}
