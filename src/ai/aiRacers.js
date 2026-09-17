import * as THREE from 'three';
import { KartController } from '../physics/kartController.js';
import { createKartMesh } from '../karts/kartModels.js';

export class AIRacersManager {
  constructor(opponentsConfigs, track, scene) {
    this.track = track;
    this.scene = scene;
    this.racers = [];

    opponentsConfigs.forEach((cfg, idx) => {
      const controller = new KartController(cfg, track, false);
      const meshData = createKartMesh(cfg);
      scene.add(meshData.root);

      // Starting grid positions (staggered behind/alongside start line)
      const startU = (1.0 - (idx + 1) * 0.018) % 1.0;
      const startLateral = (idx % 2 === 0 ? 1 : -1) * 3.5;
      
      const pt = track.getPointAt(startU);
      const normal = track.getTangentAt(startU).cross(new THREE.Vector3(0, 1, 0)).normalize();
      controller.position.copy(pt).addScaledVector(normal, startLateral).add(new THREE.Vector3(0, 0.4, 0));
      controller.yaw = Math.atan2(track.getTangentAt(startU).x, track.getTangentAt(startU).z);
      controller.u = startU;

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
        itemCooldown: 1.5 + Math.random() * 2.0
      });
    });
  }

  update(dt, playerController) {
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
      const targetPt = this.track.getPointAt(targetU);
      const tangent = this.track.getTangentAt(targetU).normalize();
      const normal = tangent.clone().cross(new THREE.Vector3(0, 1, 0)).normalize();

      // Dynamic Overtake & Kart Avoidance (Item 12)
      let dynamicOffset = r.preferredLateral;
      if (c.allKarts) {
        for (const other of c.allKarts) {
          if (other === c) continue;
          const dist = c.position.distanceTo(other.position);
          if (dist < 8.0 && dist > 0.1) {
            // If another kart is directly ahead in our path, nudge to opposite side
            const toOther = other.position.clone().sub(c.position);
            const forward = new THREE.Vector3(Math.sin(c.yaw), 0, Math.cos(c.yaw));
            if (toOther.dot(forward) > 0.5) {
              const otherLateral = other.position.clone().sub(targetPt).dot(normal);
              if (Math.abs(r.preferredLateral - otherLateral) < 2.5) {
                dynamicOffset = otherLateral > 0 ? -3.8 : 3.8;
              }
            }
          }
        }
      }

      // Desired point with lateral offset
      const targetPos = targetPt.clone().addScaledVector(normal, dynamicOffset);

      // Vector to target
      const toTarget = new THREE.Vector3().subVectors(targetPos, c.position);
      const forward = new THREE.Vector3(Math.sin(c.yaw), 0, Math.cos(c.yaw));
      const right = new THREE.Vector3(forward.z, 0, -forward.x);

      const forwardDot = toTarget.dot(forward);
      const rightDot = toTarget.dot(right);
      const steerErr = Math.atan2(rightDot, forwardDot);

      // AI Steering
      c.input.left = steerErr < -0.06;
      c.input.right = steerErr > 0.06;

      // Drift on sharp corners
      if (Math.abs(steerErr) > 0.35 && c.speed > 16.0) {
        c.input.drift = true;
      } else if (Math.abs(steerErr) < 0.15) {
        c.input.drift = false;
      }

      // Rubber-banding vs player
      let targetSpeedFactor = r.aggression;
      if (playerController) {
        const distDiff = playerController.totalProgress - c.totalProgress;
        if (distDiff > 0.14) {
          // AI is far behind -> catch up!
          targetSpeedFactor *= 1.25;
        } else if (distDiff < -0.15) {
          // AI is far ahead -> ease up slightly
          targetSpeedFactor *= 0.88;
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
            // Shield in smog or traffic
            if (c.smogLevel > 40 || Math.random() < 0.3) shouldFire = true;
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
      r.meshData.root.rotation.order = 'YXZ';
      r.meshData.root.rotation.set(c.pitch, c.yaw + c.driftAngle, c.roll);
      r.meshData.update(c.speed, dt, c.steerAngle, c.boostTimer > 0, c.shieldTimer > 0);
    });
  }
}
