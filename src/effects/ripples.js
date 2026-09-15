import * as THREE from 'three';

export class RippleManager {
  constructor(waterMaterial, soundManager) {
    this.waterMaterial = waterMaterial;
    this.soundManager = soundManager;
    this.maxRipples = 16;
    this.ripples = [];
    this.lastRandomRippleTime = 0;
  }

  addRipple(x, z, maxRadius = 5.0) {
    const now = performance.now() / 1000;

    // Prevent too many simultaneous ripples too close together
    for (const r of this.ripples) {
      if (Math.hypot(r.x - x, r.y - z) < 0.8 && (now - r.startTime) < 0.6) {
        return;
      }
    }

    if (this.ripples.length >= this.maxRipples) {
      this.ripples.shift();
    }

    this.ripples.push({
      x,
      y: z,
      startTime: now,
      maxRadius
    });

    if (this.soundManager && typeof this.soundManager.playWaterDrop === 'function') {
      this.soundManager.playWaterDrop();
    }
  }

  update(time) {
    const now = time;

    // Filter active ripples
    this.ripples = this.ripples.filter(r => (now - r.startTime) < 4.5);

    // Random gentle natural drops into the pond every 2-4 seconds
    if (now - this.lastRandomRippleTime > (2.2 + Math.random() * 2.0)) {
      this.lastRandomRippleTime = now;
      // Pick random spot in pond
      const angle = Math.random() * Math.PI * 2;
      const rad = Math.random() * 4.5;
      const rx = -2.5 + Math.cos(angle) * rad;
      const rz = -4.0 + Math.sin(angle) * (rad * 0.8);
      this.addRipple(rx, rz, 4.5);
    }

    // Update uniforms
    if (this.waterMaterial && this.waterMaterial.uniforms) {
      const uRipples = this.waterMaterial.uniforms.uRipples.value;
      for (let i = 0; i < this.maxRipples; i++) {
        if (i < this.ripples.length) {
          const r = this.ripples[i];
          uRipples[i].set(r.x, r.y, r.startTime, r.maxRadius);
        } else {
          uRipples[i].set(0, 0, -1000, 0);
        }
      }
      this.waterMaterial.uniforms.uRippleCount.value = this.ripples.length;
    }
  }
}
