import * as THREE from 'three';

// -------------------------------------------------------------
// Shared materials (module level): identical across every kart, created once
// and reused by ALL instances. Never disposed by the per-kart dispose().
// -------------------------------------------------------------
const tireMat = new THREE.MeshStandardMaterial({ color: 0x16181d, roughness: 0.85 });
const rimMat = new THREE.MeshStandardMaterial({ color: 0xd8e2dc, metalness: 0.85, roughness: 0.2 });
const chromeMat = new THREE.MeshStandardMaterial({ color: 0xffffff, metalness: 0.95, roughness: 0.1 });
const glassMat = new THREE.MeshStandardMaterial({ color: 0x88ccff, transparent: true, opacity: 0.65, roughness: 0.1, side: THREE.DoubleSide });
const headTuriMat = new THREE.MeshStandardMaterial({ color: 0xe0a98b });
const coppolaMat = new THREE.MeshStandardMaterial({ color: 0x222222 });
const sirenBlueMat = new THREE.MeshBasicMaterial({ color: 0x0055ff });
const sirenRedMat = new THREE.MeshBasicMaterial({ color: 0xff0022 });
const neonMat = new THREE.MeshBasicMaterial({ color: 0x00ffcc });
const subBoxMat = new THREE.MeshStandardMaterial({ color: 0x111111 });
const orangeMat = new THREE.MeshStandardMaterial({ color: 0xff6600 });
const exhaustMat = new THREE.MeshStandardMaterial({ color: 0x33ff00 });
const hazmatMat = new THREE.MeshStandardMaterial({ color: 0xffea00 });
const visorMat = new THREE.MeshBasicMaterial({ color: 0x00ff88 });
const basketMat = new THREE.MeshStandardMaterial({ color: 0xcccccc, wireframe: true });
const headTrapMat = new THREE.MeshStandardMaterial({ color: 0xd29b76 });
const headZiaMat = new THREE.MeshStandardMaterial({ color: 0xeec1a6 });
const hairBunMat = new THREE.MeshStandardMaterial({ color: 0xdddddd });
const wingMat = new THREE.MeshStandardMaterial({ color: 0x0a2244, metalness: 0.9, roughness: 0.1 });
const headEcoMat = new THREE.MeshStandardMaterial({ color: 0xf0c5aa });
const flameMat = new THREE.MeshBasicMaterial({
  color: 0x00f5ff,
  transparent: true,
  opacity: 0.9
});

// Body / accent colors depend on the racer config: cached per color so karts
// with the same palette share one material instead of duplicating it.
const colorMaterialCache = new Map();
function sharedColorMaterial(key, factory) {
  if (!colorMaterialCache.has(key)) colorMaterialCache.set(key, factory());
  return colorMaterialCache.get(key);
}

export function createKartMesh(racerConfig) {
  const root = new THREE.Group();
  const wheels = [];
  const frontPivots = [];
  const allSpinners = [];

  const bodyMat = sharedColorMaterial(`body:${racerConfig.kartColor}`, () => new THREE.MeshStandardMaterial({
    color: racerConfig.kartColor,
    metalness: 0.4,
    roughness: 0.35
  }));
  const accentMat = sharedColorMaterial(`accent:${racerConfig.accentColor}`, () => new THREE.MeshStandardMaterial({
    color: racerConfig.accentColor,
    metalness: 0.5,
    roughness: 0.25
  }));

  // Helper to create wheel with steering pivot and rotation spinner
  function makeWheel(radius, width, isFront = false) {
    const pivot = new THREE.Group();
    const spinner = new THREE.Group();

    const tire = new THREE.Mesh(new THREE.CylinderGeometry(radius, radius, width, 16), tireMat);
    tire.rotateZ(Math.PI / 2);
    tire.castShadow = true;
    spinner.add(tire);

    const rim = new THREE.Mesh(new THREE.CylinderGeometry(radius * 0.65, radius * 0.65, width + 0.02, 12), rimMat);
    rim.rotateZ(Math.PI / 2);
    spinner.add(rim);

    pivot.add(spinner);
    wheels.push(spinner);
    allSpinners.push({ spinner, radius });

    if (isFront) {
      frontPivots.push(pivot);
    }
    return pivot;
  }

  // -------------------------------------------------------------
  // KART DESIGNS BY RACER ID
  // -------------------------------------------------------------
  if (racerConfig.id === 'turi') {
    // 1. APE PIAGGIO 50cc RACING (3-Wheeler)
    const cabin = new THREE.Mesh(new THREE.BoxGeometry(1.5, 1.4, 1.4), bodyMat);
    cabin.position.set(0, 1.0, 0.4);
    cabin.castShadow = true;
    root.add(cabin);

    const windshield = new THREE.Mesh(new THREE.PlaneGeometry(1.2, 0.7), glassMat);
    windshield.position.set(0, 1.2, 1.11);
    root.add(windshield);

    const headlight = new THREE.Mesh(new THREE.SphereGeometry(0.18, 12, 8), accentMat);
    headlight.position.set(0, 0.65, 1.12);
    root.add(headlight);

    const bed = new THREE.Mesh(new THREE.BoxGeometry(1.8, 0.5, 1.8), accentMat);
    bed.position.set(0, 0.55, -1.0);
    bed.castShadow = true;
    root.add(bed);

    [-0.5, 0.5].forEach(x => {
      const pipe = new THREE.Mesh(new THREE.CylinderGeometry(0.08, 0.08, 1.1, 8), chromeMat);
      pipe.rotateX(Math.PI / 2.5);
      pipe.position.set(x, 0.7, -1.9);
      root.add(pipe);
    });

    const wFront = makeWheel(0.36, 0.28, true);
    wFront.position.set(0, 0.36, 1.1);
    root.add(wFront);

    const wRearL = makeWheel(0.42, 0.36, false);
    wRearL.position.set(-1.05, 0.42, -1.0);
    root.add(wRearL);
    const wRearR = makeWheel(0.42, 0.36, false);
    wRearR.position.set(1.05, 0.42, -1.0);
    root.add(wRearR);

    const driverHead = new THREE.Mesh(new THREE.SphereGeometry(0.3, 12, 12), headTuriMat);
    driverHead.position.set(0, 1.4, 0.3);
    root.add(driverHead);

    const coppola = new THREE.Mesh(new THREE.CylinderGeometry(0.42, 0.35, 0.15, 12), coppolaMat);
    coppola.position.set(0, 1.62, 0.3);
    coppola.rotation.x = 0.1;
    root.add(coppola);

  } else if (racerConfig.id === 'politico') {
    // 2. SUV BLU MINISTERIALE
    const body = new THREE.Mesh(new THREE.BoxGeometry(2.1, 1.1, 3.4), bodyMat);
    body.position.set(0, 0.85, 0);
    body.castShadow = true;
    root.add(body);

    const roof = new THREE.Mesh(new THREE.BoxGeometry(1.8, 0.8, 1.9), bodyMat);
    roof.position.set(0, 1.6, -0.2);
    root.add(roof);

    const winFront = new THREE.Mesh(new THREE.PlaneGeometry(1.6, 0.6), glassMat);
    winFront.position.set(0, 1.6, 0.76);
    root.add(winFront);

    const sirenL = new THREE.Mesh(new THREE.CylinderGeometry(0.14, 0.14, 0.2, 8), sirenBlueMat);
    sirenL.position.set(-0.5, 2.1, -0.2);
    root.add(sirenL);
    const sirenR = new THREE.Mesh(new THREE.CylinderGeometry(0.14, 0.14, 0.2, 8), sirenRedMat);
    sirenR.position.set(0.5, 2.1, -0.2);
    root.add(sirenR);

    [-1.15, 1.15].forEach(x => {
      const wFront = makeWheel(0.46, 0.38, true);
      wFront.position.set(x, 0.46, 1.1);
      root.add(wFront);

      const wRear = makeWheel(0.46, 0.38, false);
      wRear.position.set(x, 0.46, -1.1);
      root.add(wRear);
    });

  } else if (racerConfig.id === 'trapstar') {
    // 3. SOUNDSYSTEM 10.000W (Lowrider with Subwoofers)
    const body = new THREE.Mesh(new THREE.BoxGeometry(2.0, 0.6, 3.2), bodyMat);
    body.position.set(0, 0.55, 0);
    body.castShadow = true;
    root.add(body);

    const neon = new THREE.Mesh(new THREE.BoxGeometry(1.8, 0.05, 2.8), neonMat);
    neon.position.set(0, 0.18, 0);
    root.add(neon);

    const subBox = new THREE.Mesh(new THREE.BoxGeometry(1.7, 1.3, 1.1), subBoxMat);
    subBox.position.set(0, 1.25, -0.85);
    root.add(subBox);

    [-0.45, 0.45].forEach(x => {
      const cone = new THREE.Mesh(new THREE.CylinderGeometry(0.35, 0.15, 0.1, 16), accentMat);
      cone.rotateX(Math.PI / 2);
      cone.position.set(x, 1.3, -0.3);
      root.add(cone);
    });

    [-1.1, 1.1].forEach(x => {
      const wFront = makeWheel(0.40, 0.35, true);
      wFront.position.set(x, 0.40, 1.0);
      root.add(wFront);

      const wRear = makeWheel(0.40, 0.35, false);
      wRear.position.set(x, 0.40, -1.0);
      root.add(wRear);
    });

    const driverHead = new THREE.Mesh(new THREE.SphereGeometry(0.3, 12, 12), headTrapMat);
    driverHead.position.set(0, 1.15, 0.3);
    root.add(driverHead);

    const headphones = new THREE.Mesh(new THREE.TorusGeometry(0.32, 0.08, 8, 16), accentMat);
    headphones.rotateY(Math.PI / 2);
    headphones.position.set(0, 1.15, 0.3);
    root.add(headphones);

  } else if (racerConfig.id === 'chimico') {
    // 4. FUSTO TOSSICO TURBO (Chemical Barrel Kart)
    const barrel = new THREE.Mesh(new THREE.CylinderGeometry(0.85, 0.85, 2.4, 16), bodyMat);
    barrel.rotateX(Math.PI / 2);
    barrel.position.set(0, 0.95, -0.1);
    barrel.castShadow = true;
    root.add(barrel);

    [-0.6, 0.6].forEach(z => {
      const ring = new THREE.Mesh(new THREE.CylinderGeometry(0.88, 0.88, 0.25, 16), accentMat);
      ring.rotateX(Math.PI / 2);
      ring.position.set(0, 0.95, z);
      root.add(ring);
    });

    const exhaust = new THREE.Mesh(new THREE.CylinderGeometry(0.18, 0.18, 1.2, 8), exhaustMat);
    exhaust.position.set(0, 1.8, -0.9);
    root.add(exhaust);

    [-1.2, 1.2].forEach(x => {
      const wFront = makeWheel(0.50, 0.44, true);
      wFront.position.set(x, 0.50, 0.9);
      root.add(wFront);

      const wRear = makeWheel(0.50, 0.44, false);
      wRear.position.set(x, 0.50, -0.9);
      root.add(wRear);
    });

    const hazmat = new THREE.Mesh(new THREE.SphereGeometry(0.35, 12, 12), hazmatMat);
    hazmat.position.set(0, 1.45, 0.4);
    root.add(hazmat);

    const visor = new THREE.Mesh(new THREE.SphereGeometry(0.2, 12, 8), visorMat);
    visor.position.set(0, 1.45, 0.65);
    root.add(visor);

  } else if (racerConfig.id === 'zia') {
    // 5. TURBO SPESA V8 (Shopping Cart Kart)
    const chassis = new THREE.Mesh(new THREE.BoxGeometry(1.8, 0.35, 2.4), chromeMat);
    chassis.position.set(0, 0.45, 0);
    root.add(chassis);

    const basket = new THREE.Mesh(new THREE.BoxGeometry(1.5, 1.1, 1.7), basketMat);
    basket.position.set(0, 1.1, 0.2);
    root.add(basket);

    // Deterministic orange placement: fixed 2x4 grid inside the basket
    // (no Math.random(): every "zia" kart loads its oranges identically).
    for (let i = 0; i < 8; i++) {
      const col = i % 4;
      const row = Math.floor(i / 4);
      const orange = new THREE.Mesh(new THREE.SphereGeometry(0.14, 8, 8), orangeMat);
      orange.position.set(-0.45 + col * 0.3, 0.82 + row * 0.16, -0.02 + row * 0.44);
      root.add(orange);
    }

    [-0.5, 0.5].forEach(x => {
      const rocket = new THREE.Mesh(new THREE.CylinderGeometry(0.25, 0.35, 1.2, 12), accentMat);
      rocket.rotateX(Math.PI / 2);
      rocket.position.set(x, 0.8, -1.2);
      root.add(rocket);
    });

    [-1.05, 1.05].forEach(x => {
      const wFront = makeWheel(0.38, 0.32, true);
      wFront.position.set(x, 0.38, 0.9);
      root.add(wFront);

      const wRear = makeWheel(0.38, 0.32, false);
      wRear.position.set(x, 0.38, -0.9);
      root.add(wRear);
    });

    const head = new THREE.Mesh(new THREE.SphereGeometry(0.28, 12, 12), headZiaMat);
    head.position.set(0, 1.5, -0.2);
    root.add(head);

    const hairBun = new THREE.Mesh(new THREE.SphereGeometry(0.16, 8, 8), hairBunMat);
    hairBun.position.set(0, 1.75, -0.32);
    root.add(hairBun);

  } else {
    // 6. E-BIKE SOLARE (Greta l'Eco-Guerriera)
    const frame = new THREE.Mesh(new THREE.BoxGeometry(1.2, 0.4, 2.6), bodyMat);
    frame.position.set(0, 0.55, 0);
    root.add(frame);

    [-1.1, 1.1].forEach(x => {
      const wing = new THREE.Mesh(new THREE.BoxGeometry(0.9, 0.08, 1.4), wingMat);
      wing.position.set(x, 0.85, -0.3);
      root.add(wing);
    });

    const wFront = makeWheel(0.44, 0.22, true);
    wFront.position.set(0, 0.44, 1.2);
    root.add(wFront);

    [-0.95, 0.95].forEach(x => {
      const wRear = makeWheel(0.44, 0.28, false);
      wRear.position.set(x, 0.44, -1.0);
      root.add(wRear);
    });

    const ecoHead = new THREE.Mesh(new THREE.SphereGeometry(0.28, 12, 12), headEcoMat);
    ecoHead.position.set(0, 1.3, 0.1);
    root.add(ecoHead);

    const helmet = new THREE.Mesh(new THREE.SphereGeometry(0.32, 12, 12), accentMat);
    helmet.position.set(0, 1.4, 0.1);
    root.add(helmet);
  }

  // -------------------------------------------------------------
  // VISUAL SHIELD & NITRO EXHAUST FLAMES
  // -------------------------------------------------------------
  // Rear bumper from the kart's bounding box (computed BEFORE the shield bubble is
  // added, otherwise the shield radius would inflate the box): flames trail the tail.
  const rearZ = new THREE.Box3().setFromObject(root).min.z;

  // Per-instance material: update() animates its opacity for THIS kart only
  const shieldMat = new THREE.MeshStandardMaterial({
    color: 0xffe066,
    emissive: 0xffaa00,
    emissiveIntensity: 0.85,
    transparent: true,
    opacity: 0.42,
    roughness: 0.1,
    metalness: 0.8,
    wireframe: true
  });
  const shieldMesh = new THREE.Mesh(new THREE.IcosahedronGeometry(2.3, 2), shieldMat);
  shieldMesh.position.set(0, 0.8, 0);
  shieldMesh.visible = false;
  root.add(shieldMesh);

  const flames = [];
  [-0.45, 0.45].forEach(x => {
    const flame = new THREE.Mesh(new THREE.ConeGeometry(0.22, 1.3, 8), flameMat);
    flame.rotation.x = -Math.PI / 2;
    flame.position.set(x, 0.45, rearZ - 0.45);
    flame.scale.set(0.001, 0.001, 0.001);
    flame.visible = false;
    root.add(flame);
    flames.push(flame);
  });

  return {
    root,
    wheels,
    frontPivots,
    shieldMesh,
    flames,
    dispose: () => {
      // Free the per-kart GPU resources: every geometry of this kart plus the
      // per-instance shield material. Module-level shared materials (tire, glass,
      // flames, ...) and the per-color cache are intentionally NOT disposed.
      root.traverse((obj) => {
        if (obj.isMesh && obj.geometry) obj.geometry.dispose();
      });
      shieldMat.dispose();
    },
    update: (speed, dt, steerAngle = 0, isBoosting = false, isShielded = false) => {
      // 1. Wheel spin proportional to linear speed & radius
      allSpinners.forEach(({ spinner, radius }) => {
        spinner.rotation.x += (speed / (radius || 0.4)) * dt;
      });

      // 2. Front wheel steering (alpha clamped so huge frames cannot overshoot)
      frontPivots.forEach(p => {
        p.rotation.y = THREE.MathUtils.lerp(p.rotation.y, steerAngle * 0.55, Math.min(1, dt * 14.0));
      });

      // 3. Shield pulsation
      if (shieldMesh) {
        shieldMesh.visible = isShielded;
        if (isShielded) {
          const t = performance.now() * 0.006;
          shieldMesh.rotation.y += dt * 3.0;
          shieldMesh.rotation.x += dt * 1.5;
          const s = 1.0 + Math.sin(t) * 0.08;
          shieldMesh.scale.set(s, s, s);
          shieldMat.opacity = 0.35 + Math.sin(t * 1.5) * 0.15;
        }
      }

      // 4. Nitro / Mini-turbo exhaust flames
      flames.forEach(flame => {
        if (isBoosting) {
          flame.visible = true;
          const jitter = 0.85 + Math.random() * 0.35;
          flame.scale.set(1.0, jitter * 1.5, 1.0);
        } else {
          flame.visible = false;
          flame.scale.set(0.001, 0.001, 0.001);
        }
      });
    },
    updateWheels: (speed, dt) => {
      allSpinners.forEach(({ spinner, radius }) => {
        spinner.rotation.x += (speed / (radius || 0.4)) * dt;
      });
    }
  };
}
