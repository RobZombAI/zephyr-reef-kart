import * as THREE from 'three';
import { GAME_CONFIG, POWERUPS } from '../config/augustaConfig.js';

export class KartController {
  constructor(racerConfig, track, isPlayer = false, allKarts = []) {
    this.racer = racerConfig;
    this.track = track;
    this.isPlayer = isPlayer;
    this.allKarts = allKarts;

    this.position = new THREE.Vector3();
    this.velocity = new THREE.Vector3();
    this.forward = new THREE.Vector3(0, 0, 1);
    this.yaw = 0;
    this.pitch = 0;
    this.roll = 0;
    this.steerAngle = 0;

    this.speed = 0;
    this.maxSpeed = (GAME_CONFIG.maxNormalSpeed / 3.6) * racerConfig.stats.speed;
    this.accelRate = GAME_CONFIG.accelRate * racerConfig.stats.accel;
    this.brakeRate = GAME_CONFIG.brakeRate;
    this.handling = GAME_CONFIG.steerSpeed * racerConfig.stats.handling;

    // Drifting state
    this.isDrifting = false;
    this.driftDir = 0;
    this.driftTimer = 0;
    this.driftLevel = 0;
    this.driftAngle = 0;

    // Boost & Hazard states
    this.boostTimer = 0;
    this.boostMultiplier = 1.0;
    this.spinTimer = 0;
    this.spinDuration = 0.75;
    this.spinStartYaw = 0;
    this.slickCooldown = 0;
    this.smogLevel = 0;
    this.shieldTimer = 0;

    // Item System
    this.currentItem = null;
    this.itemRollingTimer = 0;
    this.wallHit = false;

    // Race Progress & Sector Splits
    this.u = 0;
    this.lap = 1;
    this.totalProgress = 0;
    this.finished = false;
    this.finishTime = 0;
    this.rank = 1;
    this.wrongWay = false;

    this.sector = 0; // 0, 1, 2
    this.sectorTimes = [0, 0, 0];
    this.lapStartTime = 0;

    // Input state
    this.input = {
      accel: false,
      brake: false,
      left: false,
      right: false,
      drift: false,
      item: false,
      lookBack: false
    };

    // Callbacks for events
    this.onItemUse = null;
    this.onItemPickup = null;
    this.onWallHit = null;
    this.onKartBump = null;
    this.onSectorSplit = null;
    this.onFinalLap = null;
    this.onSpin = null;
  }

  resetToTrack(u, laneOffset = 0) {
    this.u = u;
    const pt = this.track.getPointAt(u);
    const tangent = this.track.getTangentAt(u).normalize();
    const normal = new THREE.Vector3(-tangent.z, 0, tangent.x);

    this.position.copy(pt).addScaledVector(normal, laneOffset).add(new THREE.Vector3(0, 0.35, 0));
    this.yaw = Math.atan2(tangent.x, tangent.z);
    this.pitch = 0;
    this.roll = 0;
    this.steerAngle = 0;
    this.speed = 0;
    this.velocity.set(0, 0, 0);
    this.isDrifting = false;
    this.driftTimer = 0;
    this.driftLevel = 0;
    this.spinTimer = 0;
    this.spinDuration = 0.75;
    this.spinStartYaw = 0;
    this.slickCooldown = 0;
    this.boostTimer = 0;
    this.shieldTimer = 0;
    this.currentItem = null;
    this.itemRollingTimer = 0;
    this.sector = 0;
    this.sectorTimes = [0, 0, 0];
  }

  triggerSpin(duration = 0.75) {
    if (this.shieldTimer > 0) return; // protected by invincible shield
    if (this.spinTimer > 0) return; // already in spin sequence

    this.spinDuration = Math.max(0.45, duration);
    this.spinTimer = this.spinDuration;
    this.slickCooldown = 2.5; // Immunity for 2.5s against re-triggering slicks while driving through
    this.isDrifting = false;
    this.driftTimer = 0;
    this.driftLevel = 0;
    this.driftAngle = 0;

    // Record starting heading for smooth blend
    this.spinStartYaw = this.yaw;

    // Decelerate but preserve positive forward momentum! Never negative, never 0.
    this.speed = Math.max(12.0, this.speed * 0.58);

    if (this.onSpin) {
      this.onSpin();
    }
  }

  collectItem(itemKey) {
    this.currentItem = POWERUPS[itemKey] || POWERUPS.granita;
    this.itemRollingTimer = 0.65; // item roulette cycle duration
    if (this.onItemPickup) this.onItemPickup(this.currentItem);
  }

  useCurrentItem() {
    if (!this.currentItem || this.itemRollingTimer > 0) return;
    const item = this.currentItem;
    this.currentItem = null;

    if (item.id === 'granita') {
      // Super Nitro boost
      this.boostTimer = item.duration;
      this.boostMultiplier = item.speedBoost;
      this.speed = (GAME_CONFIG.nitroSpeed / 3.6) * 1.12;
    } else if (item.id === 'greggio') {
      // Drop oil slick trap behind
      const dropPos = this.position.clone().addScaledVector(this.forward, -4.5);
      this.track.dropOilSlick(dropPos, 3.8);
    } else if (item.id === 'trap') {
      // Area blast: trigger expanding 3D shockwave ring and spin nearby racers
      this.track.triggerShockwave(this.position.clone());
      if (this.allKarts) {
        for (const other of this.allKarts) {
          if (other !== this && other.position.distanceTo(this.position) < item.blastRadius) {
            if (other.shieldTimer <= 0) {
              if (other.triggerSpin) {
                other.triggerSpin(1.1);
              } else {
                other.spinTimer = 1.1;
              }
            }
          }
        }
      }
    } else if (item.id === 'politica') {
      // Invincible Golden Shield
      this.shieldTimer = item.duration;
      this.smogLevel = 0;
    } else if (item.id === 'fico') {
      // Homing prickly pear missile
      let target = null;
      let minGap = Infinity;
      if (this.allKarts) {
        for (const other of this.allKarts) {
          if (other !== this && other.totalProgress > this.totalProgress) {
            const gap = other.totalProgress - this.totalProgress;
            if (gap < minGap) {
              minGap = gap;
              target = other;
            }
          }
        }
      }
      this.track.fireMissile(this.position.clone(), this.forward.clone(), target);
      if (!target) {
        // Boost if already in 1st position
        this.boostTimer = 2.2;
        this.boostMultiplier = 1.25;
      }
    }

    if (this.onItemUse) this.onItemUse(item);
  }

  update(dt) {
    if (this.itemRollingTimer > 0) {
      this.itemRollingTimer -= dt;
    }

    if (this.shieldTimer > 0) {
      this.shieldTimer -= dt;
    }

    if (this.slickCooldown > 0) {
      this.slickCooldown -= dt;
    }

    if (this.finished) {
      this.speed = Math.max(0, this.speed - 25 * dt);
    }

    // Item trigger
    if (this.input.item && this.currentItem && this.itemRollingTimer <= 0) {
      this.useCurrentItem();
      this.input.item = false;
    }

    // 1. Handle Spinout (Oil slick / hazard hit) - Testacoda fluido che continua in avanti
    if (this.spinTimer > 0) {
      this.spinTimer -= dt;
      const progress = Math.min(1.0, Math.max(0.0, 1.0 - (this.spinTimer / this.spinDuration)));

      // Calcola tangente e orientamento in avanti del tracciato
      const proj = this.track.projectPoint(this.position);
      const trackForwardYaw = Math.atan2(proj.tangent.x, proj.tangent.z);

      // Rotazione testacoda fluida (un giro completo a 360° = 2 * PI)
      const easeProgress = progress < 0.5
        ? 4.0 * progress * progress * progress
        : 1.0 - Math.pow(-2.0 * progress + 2.0, 3) / 2.0;

      const spinOffset = easeProgress * Math.PI * 2.0;

      // Differenza angolare normalizzata a [-PI, PI] tra inizio testacoda e direzione pista
      let angleDiff = (this.spinStartYaw - trackForwardYaw) % (Math.PI * 2);
      if (angleDiff > Math.PI) angleDiff -= Math.PI * 2;
      if (angleDiff < -Math.PI) angleDiff += Math.PI * 2;

      // La rotazione fonde la direzione iniziale con quella ideale della pista + il giro a 360°
      this.yaw = trackForwardYaw + (1.0 - progress) * angleDiff + spinOffset;
      this.driftAngle = 0;

      // Moto fisico: il kart viaggia RIGOROSAMENTE IN AVANTI lungo la tangente della pista!
      // Rallenta dolcemente (fino a min ~11.5 m/s ~ 41 km/h) ma NON si ferma e NON torna MAI indietro!
      this.speed = Math.max(11.5, this.speed - 16.0 * dt);
      this.forward.copy(proj.tangent).normalize();
      this.velocity.copy(this.forward).multiplyScalar(this.speed);
      this.position.addScaledVector(this.velocity, dt);

      // Al termine del testacoda: allineamento perfetto con la direzione della pista
      if (this.spinTimer <= 0) {
        this.spinTimer = 0;
        this.yaw = trackForwardYaw;
        this.forward.set(Math.sin(this.yaw), 0, Math.cos(this.yaw)).normalize();
        this.velocity.copy(this.forward).multiplyScalar(this.speed);
      }

      this.updateTrackProgress(dt);
      return;
    }

    // 2. Handle Boost & Smog
    let currentMaxSpeed = this.maxSpeed;
    if (this.boostTimer > 0) {
      this.boostTimer -= dt;
      currentMaxSpeed = (GAME_CONFIG.nitroSpeed / 3.6) * this.boostMultiplier;
    }

    if (this.smogLevel > 65 && this.shieldTimer <= 0) {
      currentMaxSpeed *= GAME_CONFIG.smogSlowdown;
    }

    // 3. Acceleration & Braking
    if (this.input.accel) {
      if (this.speed < currentMaxSpeed) {
        this.speed = Math.min(currentMaxSpeed, this.speed + this.accelRate * dt);
      } else {
        this.speed = Math.max(currentMaxSpeed, this.speed - 15.0 * dt);
      }
    } else if (this.input.brake) {
      if (this.speed > 0) {
        this.speed = Math.max(0, this.speed - this.brakeRate * dt);
      } else {
        this.speed = Math.max(-14.0, this.speed - 18.0 * dt);
      }
    } else {
      if (this.speed > 0) {
        this.speed = Math.max(0, this.speed - 12.0 * dt);
      } else {
        this.speed = Math.min(0, this.speed + 12.0 * dt);
      }
    }

    // 4. Steering & Front Wheel Angle
    let steerDir = 0;
    if (this.input.left) steerDir -= 1;
    if (this.input.right) steerDir += 1;

    this.steerAngle = THREE.MathUtils.lerp(this.steerAngle, steerDir, dt * 12.0);

    if (this.input.drift && !this.isDrifting && steerDir !== 0 && this.speed > 10.0) {
      this.isDrifting = true;
      this.driftDir = steerDir;
      this.driftTimer = 0;
      this.driftLevel = 0;
    }

    if (this.isDrifting) {
      if (!this.input.drift || this.speed < 8.0) {
        this.releaseMiniTurbo();
        this.isDrifting = false;
        this.driftTimer = 0;
        this.driftLevel = 0;
        this.driftAngle = 0;
      } else {
        this.driftTimer += dt;
        if (this.driftTimer > 2.8) {
          this.driftLevel = 3;
        } else if (this.driftTimer > 1.6) {
          this.driftLevel = 2;
        } else if (this.driftTimer > 0.7) {
          this.driftLevel = 1;
        }

        const turnRate = this.handling * (0.85 + (steerDir === this.driftDir ? 0.35 : -0.25));
        this.yaw += this.driftDir * turnRate * dt;
        this.driftAngle = THREE.MathUtils.lerp(this.driftAngle, this.driftDir * 0.38, dt * 8);
      }
    } else {
      if (Math.abs(this.speed) > 1.0) {
        const speedFactor = THREE.MathUtils.clamp(Math.abs(this.speed) / (this.maxSpeed * 0.5), 0.35, 1.0);
        this.yaw += steerDir * this.handling * speedFactor * dt * (this.speed >= 0 ? 1 : -1);
      }
      this.driftAngle = THREE.MathUtils.lerp(this.driftAngle, 0, dt * 10);
    }

    // 5. Position integration
    this.forward.set(Math.sin(this.yaw), 0, Math.cos(this.yaw)).normalize();
    this.velocity.copy(this.forward).multiplyScalar(this.speed);
    this.position.addScaledVector(this.velocity, dt);

    // 6. Kart-to-Kart 2D Circle Collision (Item 11)
    this.checkKartCollisions();

    // 7. Track collision, guardrail bounce, pitch/roll & progress (Items 13, 14, 36)
    this.updateTrackProgress(dt);
    this.checkHazardsAndPickups(dt);
  }

  checkKartCollisions() {
    if (!this.allKarts || this.allKarts.length <= 1) return;
    const minDist = 2.8; // combined kart collision diameter
    for (const other of this.allKarts) {
      if (other === this) continue;
      const dx = this.position.x - other.position.x;
      const dz = this.position.z - other.position.z;
      const distSq = dx * dx + dz * dz;

      if (distSq < minDist * minDist && distSq > 0.0001) {
        const dist = Math.sqrt(distSq);
        const overlap = (minDist - dist) * 0.5;
        const nx = dx / dist;
        const nz = dz / dist;

        // Push positions apart
        this.position.x += nx * overlap;
        this.position.z += nz * overlap;
        other.position.x -= nx * overlap;
        other.position.z -= nz * overlap;

        // Impulse momentum transfer
        const relSpeed = (this.speed - other.speed) * 0.35;
        this.speed -= relSpeed * 0.5;
        other.speed += relSpeed * 0.5;

        if (this.isPlayer && this.onKartBump) {
          this.onKartBump();
        }
      }
    }
  }

  releaseMiniTurbo() {
    if (this.driftLevel === 3) {
      this.boostTimer = 2.5;
      this.boostMultiplier = 1.35;
      this.speed = Math.min(this.speed + 18.0, GAME_CONFIG.nitroSpeed / 3.6);
    } else if (this.driftLevel === 2) {
      this.boostTimer = 1.8;
      this.boostMultiplier = 1.25;
      this.speed = Math.min(this.speed + 13.0, GAME_CONFIG.nitroSpeed / 3.6);
    } else if (this.driftLevel === 1) {
      this.boostTimer = 1.0;
      this.boostMultiplier = 1.15;
      this.speed = Math.min(this.speed + 8.0, GAME_CONFIG.nitroSpeed / 3.6);
    }
  }

  updateTrackProgress(dt) {
    const proj = this.track.projectPoint(this.position);
    this.wallHit = false;

    // GUARDRAIL COLLISION & ELASTIC BOUNCE (Zero Chance of Falling Out)
    const maxLateral = (this.track.width / 2) - 0.9;
    const curbStart = (this.track.width / 2) - 2.2;
    const lateralDist = proj.distanceToCenter;

    // Off-track curb / grass rolling resistance (Item 13)
    if (Math.abs(lateralDist) > curbStart && Math.abs(lateralDist) <= maxLateral) {
      this.speed = Math.max(0, this.speed - 9.0 * dt);
    }

    if (Math.abs(lateralDist) > maxLateral) {
      const sign = Math.sign(lateralDist);
      this.position.copy(proj.nearestPos).addScaledVector(proj.normal, sign * maxLateral);

      const dotNormal = this.forward.dot(proj.normal);
      if (dotNormal * sign > 0) {
        const targetYaw = Math.atan2(proj.tangent.x, proj.tangent.z);
        this.yaw = THREE.MathUtils.lerp(this.yaw, targetYaw, 0.25);
        this.speed = Math.max(12.0, this.speed * 0.94);
      }

      this.wallHit = true;
      if (this.onWallHit) this.onWallHit();
    }

    // Surface Y and 3D Pitch / Roll orientation (Item 14)
    const surfaceY = proj.nearestPos.y + 0.35;
    this.position.y = THREE.MathUtils.lerp(this.position.y, surfaceY, 0.3);
    if (this.position.y < surfaceY - 0.1) {
      this.position.y = surfaceY;
    }

    const horizLen = Math.sqrt(proj.tangent.x * proj.tangent.x + proj.tangent.z * proj.tangent.z);
    const targetPitch = -Math.atan2(proj.tangent.y, Math.max(0.001, horizLen));
    this.pitch = THREE.MathUtils.lerp(this.pitch, targetPitch, dt * 8.0);

    const targetRoll = Math.atan2(proj.normal.y, 1.0) * 0.4;
    this.roll = THREE.MathUtils.lerp(this.roll, targetRoll, dt * 8.0);

    // Check wrong way
    const dot = this.forward.dot(proj.tangent);
    this.wrongWay = dot < -0.3;

    // Lap progress & Sector Splits (Item 36)
    const oldU = this.u;
    this.u = proj.u;

    // Sector split detection
    const currentSector = Math.floor(this.u * 3);
    if (currentSector !== this.sector) {
      this.sector = currentSector;
      if (this.onSectorSplit) {
        this.onSectorSplit(this.sector);
      }
    }

    if (oldU > 0.85 && this.u < 0.15) {
      this.lap += 1;
      if (this.lap === 3 && this.onFinalLap) {
        this.onFinalLap();
      }
      if (this.lap > GAME_CONFIG.totalLaps) {
        this.finished = true;
      }
    } else if (oldU < 0.15 && this.u > 0.85) {
      this.lap = Math.max(1, this.lap - 1);
    }

    this.totalProgress = (this.lap - 1) + this.u;
  }

  checkHazardsAndPickups(dt) {
    // 1. Check Mystery Item Boxes
    if (this.track.itemBoxes) {
      for (const box of this.track.itemBoxes) {
        if (box.active && this.position.distanceTo(box.mesh.position) < box.radius) {
          box.active = false;
          box.mesh.visible = false;
          box.respawnTimer = 4.0;

          if (!this.currentItem) {
            const keys = Object.keys(POWERUPS);
            const randomKey = keys[Math.floor(Math.random() * keys.length)];
            this.collectItem(randomKey);
          }
          break;
        }
      }
    }

    // 2. Check Nitro Pads
    for (const pad of this.track.nitroPads) {
      if (this.position.distanceTo(pad.position) < pad.radius) {
        this.boostTimer = 2.2;
        this.boostMultiplier = 1.35;
        this.speed = GAME_CONFIG.nitroSpeed / 3.6;
        break;
      }
    }

    // 3. Check Oil Slicks (unless shielded or in immunity cooldown)
    if (this.spinTimer <= 0 && this.shieldTimer <= 0 && this.slickCooldown <= 0) {
      for (const slick of this.track.oilSlicks) {
        if (this.position.distanceTo(slick.position) < slick.radius) {
          this.triggerSpin(GAME_CONFIG.oilSpinDuration || 0.75);
          // Se si tratta di greggio lanciato in gara, consuma la chiazza
          if (slick.life !== undefined) {
            slick.life = 0;
          }
          break;
        }
      }
    }

    // 4. Update Smog Index
    if (this.shieldTimer > 0) {
      this.smogLevel = Math.max(0, this.smogLevel - 40 * dt);
    } else {
      let inSmog = false;
      for (const zone of this.track.smogZones) {
        const dist = Math.abs(this.u - zone.centerU);
        if (dist < zone.range || dist > 1.0 - zone.range) {
          inSmog = true;
          break;
        }
      }

      if (inSmog) {
        this.smogLevel = Math.min(100, this.smogLevel + 28 * dt);
      } else {
        this.smogLevel = Math.max(0, this.smogLevel - 18 * dt);
      }
    }
  }
}
