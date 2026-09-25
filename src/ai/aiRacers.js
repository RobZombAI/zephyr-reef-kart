import * as THREE from 'three';
import { KartController } from '../physics/kartController.js';
import { createKartMesh } from '../karts/kartModels.js';

// Reusable scratch vectors: the per-frame update loop must not allocate
const _targetPt = new THREE.Vector3();
const _tangent = new THREE.Vector3();
const _normal = new THREE.Vector3();
const _forward = new THREE.Vector3();
const _right = new THREE.Vector3();
const _toOther = new THREE.Vector3();
const _toTarget = new THREE.Vector3();
const _targetPos = new THREE.Vector3();
const _up = new THREE.Vector3(0, 1, 0);

export class AIRacersManager {
  constructor(opponentsConfigs, track, scene) {
    this.track = track;
    this.scene = scene;
    this.racers = [];

    opponentsConfigs.forEach((cfg, idx) => {
      const controller = new KartController(cfg, track, false);
      const meshData = createKartMesh(cfg);
      scene.add(meshData.root);
      // Set once here instead of every frame in update()
      meshData.root.rotation.order = 'YXZ';

      // Starting grid positions (staggered behind/alongside start line)
      const startU = (1.0 - (idx + 1) * 0.018) % 1.0;
      const startLateral = (idx % 2 === 0 ? 1 : -1) * 3.5;

      const pt = track.getPointAt(startU);
      const normal = track.getTangentAt(startU).cross(new THREE.Vector3(0, 1, 0)).normalize();
      controller.position.copy(pt).addScaledVector(normal, startLateral).add(new THREE.Vector3(0, 0.4, 0));
      controller.yaw = Math.atan2(track.getTangentAt(startU).x, track.getTangentAt(startU).z);
      controller.u = startU;
      controller.sector = Math.floor(startU * 3) % 3;

      // Karts spawning behind the finish line (u > 0.5) start on lap 0: their first
      // forward crossing brings them to lap 1 with a coherent totalProgress. All
      // three sectors are seeded as already visited so that first crossing counts.
      if (startU > 0.5) {
        controller.lap = 0;
        controller.visitedSectors = new Set([0, 1, 2]);
      }

      // Personalized AI driving style
      const aggression = 0.88 + Math.random() * 0.28;
      const preferredLateral = (Math.random() - 0.5) * 5.0;

      this.racers.push({
        config: cfg,
        controller,
        meshData,
        aggression,
        preferredLateral,
        steerSmooth: 0,
        baseMaxSpeed: controller.maxSpeed,
        itemCooldown: 1.5 + Math.random() * 2.0
      });
    });

    // Shared kart list: every controller sees all the others, so kart-kart
    // collisions and the anti-collision block actually work.
    this.allKarts = this.racers.map(r => r.controller);
    this.racers.forEach(r => { r.controller.allKarts = this.allKarts; });
  }

  update(dt, playerController) {
    // Link the player into the shared kart list once (collisions + avoidance)
    if (playerController && !this.allKarts.includes(playerController)) {
      this.allKarts.push(playerController);
    }

    this.racers.forEach(r => {
      const c = r.controller;
      if (c.finished) {
        c.input.accel = false;
        c.input.brake = true;
        c.update(dt);
        r.meshData.root.position.copy(c.position);
        r.meshData.root.rotation.set(c.pitch, c.yaw, c.roll);
        r.meshData.update(c.speed, dt, 0, false, false);
        return;
      }

      // Target waypoint along track
      const lookAhead = 0.035;
      const targetU = (c.u + lookAhead) % 1.0;
      _targetPt.copy(this.track.getPointAt(targetU));
      _tangent.copy(this.track.getTangentAt(targetU)).normalize();
      _normal.copy(_tangent).cross(_up).normalize();

      // Dynamic Overtake & Kart Avoidance (Item 12)
      let dynamicOffset = r.preferredLateral;
      _forward.set(Math.sin(c.yaw), 0, Math.cos(c.yaw));
      if (c.allKarts) {
        for (const other of c.allKarts) {
          if (other === c) continue;
          _toOther.copy(other.position).sub(c.position);
          const dist = _toOther.length();
          // If another kart is directly ahead in our path (normalized forward dot
          // > 0.5), nudge to the opposite side
          if (dist > 0.001 && dist < 8.0 && _toOther.divideScalar(dist).dot(_forward) > 0.5) {
            const otherLateral = _toOther.copy(other.position).sub(_targetPt).dot(_normal);
            if (Math.abs(r.preferredLateral - otherLateral) < 2.5) {
              dynamicOffset = otherLateral > 0 ? -3.8 : 3.8;
            }
          }
        }
      }

      // Desired point with lateral offset
      _targetPos.copy(_targetPt).addScaledVector(_normal, dynamicOffset);

      // Vector to target
      _toTarget.copy(_targetPos).sub(c.position);
      _right.set(_forward.z, 0, -_forward.x);

      const forwardDot = _toTarget.dot(_forward);
      const rightDot = _toTarget.dot(_right);
      const steerErr = Math.atan2(rightDot, forwardDot);

      // AI Steering (smoothed): steerSmooth ramps toward the steering error instead
      // of binary left/right flicks, then the deadzone applies to the smoothed value.
      const steerInput = THREE.MathUtils.clamp(steerErr, -1, 1);
      r.steerSmooth += (steerInput - r.steerSmooth) * Math.min(1, dt * 8);
      c.input.left = r.steerSmooth < -0.06;
      c.input.right = r.steerSmooth > 0.06;

      // Drift on sharp corners
      if (Math.abs(steerErr) > 0.35 && c.speed > 16.0) {
        c.input.drift = true;
      } else if (Math.abs(steerErr) < 0.15) {
        c.input.drift = false;
      }

      // Rubber-banding vs player: adjust the controller's own maxSpeed cap. Raising
      // only targetSpeedFactor was a no-op, because update() clamps the speed to
      // maxSpeed every frame.
      let targetSpeedFactor = r.aggression;
      if (playerController) {
        const distDiff = playerController.totalProgress - c.totalProgress;
        if (distDiff > 0.14) {
          // AI is far behind -> catch up above the normal clamp
          c.maxSpeed = r.baseMaxSpeed * 1.15;
        } else if (distDiff < -0.15) {
          // AI is far ahead -> ease up
          c.maxSpeed = r.baseMaxSpeed * 0.9;
        } else {
          c.maxSpeed = r.baseMaxSpeed;
        }
      }

      // Acceleration / Braking
      if (Math.abs(steerErr) > 0.65 && c.speed > 22.0) {
        c.input.accel = false;
        c.input.brake = true;
      } else {
        c.input.accel = c.speed < c.maxSpeed * targetSpeedFactor;
        c.input.brake = false;
      }

      // AI Item Trigger Decision Logic
      if (c.currentItem && c.itemRollingTimer <= 0) {
        r.itemCooldown -= dt;
        if (r.itemCooldown <= 0) {
          let shouldFire = false;
          const id = c.currentItem.id;
          if (id === 'granita') {
            // Boost on straightaways
            if (Math.abs(steerErr) < 0.2) shouldFire = true;
          } else if (id === 'greggio') {
            // Drop oil if someone is trailing
            if (playerController && c.position.distanceTo(playerController.position) < 14.0 && playerController.totalProgress < c.totalProgress) {
              shouldFire = true;
            }
          } else if (id === 'trap') {
            // Trigger blast if opponent nearby
            if (playerController && c.position.distanceTo(playerController.position) < 12.0) {
              shouldFire = true;
            }
          } else if (id === 'fico') {
            // Missile if not in 1st
            shouldFire = true;
          } else if (id === 'politica') {
            // Shield in smog or traffic (65 = the kartController smog penalty threshold)
            if (c.smogLevel > 65 || Math.random() < 0.3) shouldFire = true;
          }

          if (shouldFire) {
            c.useCurrentItem();
            r.itemCooldown = 3.0 + Math.random() * 3.0;
          }
        }
      }

      c.update(dt);

      // Update 3D mesh & orientation
      r.meshData.root.position.copy(c.position);
      r.meshData.root.rotation.set(c.pitch, c.yaw + c.driftAngle, c.roll);
      r.meshData.update(c.speed, dt, c.steerAngle, c.boostTimer > 0, c.shieldTimer > 0);
    });
  }
}
