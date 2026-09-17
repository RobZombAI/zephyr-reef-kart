import * as THREE from 'three';

export function createAugustaScenery(track) {
  const group = new THREE.Group();

  // Materials
  const steelMat = new THREE.MeshStandardMaterial({ color: 0x4a5568, metalness: 0.8, roughness: 0.3 });
  const rustyMat = new THREE.MeshStandardMaterial({ color: 0x8c4629, metalness: 0.5, roughness: 0.7 });
  const concreteMat = new THREE.MeshStandardMaterial({ color: 0x718096, roughness: 0.9 });
  const whiteMat = new THREE.MeshStandardMaterial({ color: 0xf7fafc, roughness: 0.4 });
  const redMat = new THREE.MeshStandardMaterial({ color: 0xe53e3e, roughness: 0.5 });
  const stageBlackMat = new THREE.MeshStandardMaterial({ color: 0x111116, metalness: 0.8, roughness: 0.2 });

  // 1. Sky Dome with Mediterranean Sunset / Industrial Smog gradient
  const skyCanvas = document.createElement('canvas');
  skyCanvas.width = 128;
  skyCanvas.height = 512;
  const sctx = skyCanvas.getContext('2d');
  const skyGrad = sctx.createLinearGradient(0, 0, 0, 512);
  skyGrad.addColorStop(0.0, '#102844'); // Zenith deep twilight blue
  skyGrad.addColorStop(0.35, '#254a68'); // Mid sky
  skyGrad.addColorStop(0.60, '#9e4635'); // Sunset orange / smog haze
  skyGrad.addColorStop(0.82, '#e67536'); // Golden horizon glow
  skyGrad.addColorStop(1.0, '#2d1810'); // Ground / sea line
  sctx.fillStyle = skyGrad;
  sctx.fillRect(0, 0, 128, 512);

  const skyTex = new THREE.CanvasTexture(skyCanvas);
  const skyGeom = new THREE.SphereGeometry(700, 32, 24);
  const skyMat = new THREE.MeshBasicMaterial({
    map: skyTex,
    side: THREE.BackSide,
    fog: false
  });
  const skyDome = new THREE.Mesh(skyGeom, skyMat);
  group.add(skyDome);

  // 2. Terrain Ground
  const terrainGeom = new THREE.PlaneGeometry(900, 900, 32, 32);
  terrainGeom.rotateX(-Math.PI / 2);
  const terrainMat = new THREE.MeshStandardMaterial({
    color: 0x2e3b2e, // Mediterranean scrub
    roughness: 0.95
  });
  const terrain = new THREE.Mesh(terrainGeom, terrainMat);
  terrain.position.y = -0.2;
  terrain.receiveShadow = true;
  group.add(terrain);

  // Sea water plane for Augusta Bay / Porto
  const seaGeom = new THREE.PlaneGeometry(700, 600);
  seaGeom.rotateX(-Math.PI / 2);
  const seaMat = new THREE.MeshStandardMaterial({
    color: 0x124255,
    roughness: 0.25,
    metalness: 0.65
  });
  const sea = new THREE.Mesh(seaGeom, seaMat);
  sea.position.set(-180, -0.6, 50);
  group.add(sea);

  // -------------------------------------------------------------
  // 3. POLO PETROLCHIMICO: Ciminiere, Torce con fiamme, Serbatoi
  // -------------------------------------------------------------
  const refineryGroup = new THREE.Group();
  const flameLights = [];
  const flameMeshes = [];
  const smokePuffs = [];

  const chimneyPositions = [
    { x: 130, z: 270, h: 52, r: 2.4, hasFlare: true },
    { x: 160, z: 290, h: 68, r: 2.8, hasFlare: true },
    { x: 195, z: 260, h: 46, r: 2.0, hasFlare: false },
    { x: 250, z: 220, h: 58, r: 2.6, hasFlare: true },
    { x: 280, z: 180, h: 42, r: 2.2, hasFlare: false },
    { x: 260, z: 120, h: 48, r: 2.4, hasFlare: true }
  ];

  const puffGeom = new THREE.DodecahedronGeometry(2.8, 1);
  const smokeMat = new THREE.MeshStandardMaterial({
    color: 0x1e2226,
    transparent: true,
    opacity: 0.65,
    roughness: 0.9
  });

  chimneyPositions.forEach((c, idx) => {
    const chimney = new THREE.Mesh(
      new THREE.CylinderGeometry(c.r * 0.75, c.r, c.h, 16),
      c.hasFlare ? redMat : concreteMat
    );
    chimney.position.set(c.x, c.h / 2, c.z);
    chimney.castShadow = true;
    refineryGroup.add(chimney);

    // Hazard stripes on top
    const ringGeom = new THREE.TorusGeometry(c.r * 0.85, 0.3, 8, 16);
    ringGeom.rotateX(Math.PI / 2);
    const ring = new THREE.Mesh(ringGeom, whiteMat);
    ring.position.set(c.x, c.h - 1.5, c.z);
    refineryGroup.add(ring);

    // Flare stack torch
    if (c.hasFlare) {
      const flameGeom = new THREE.ConeGeometry(c.r * 1.4, 8.5, 12);
      const flameMat = new THREE.MeshBasicMaterial({
        color: 0xff6600,
        transparent: true,
        opacity: 0.95
      });
      const flame = new THREE.Mesh(flameGeom, flameMat);
      flame.position.set(c.x, c.h + 4.0, c.z);
      refineryGroup.add(flame);
      flameMeshes.push(flame);

      const light = new THREE.PointLight(0xff5500, 5.0, 90, 1.4);
      light.position.set(c.x, c.h + 5.0, c.z);
      refineryGroup.add(light);
      flameLights.push(light);
    }

    // Smoke puffs rising from chimney
    for (let p = 0; p < 4; p++) {
      const puff = new THREE.Mesh(puffGeom, smokeMat);
      puff.position.set(c.x, c.h + 3 + p * 8, c.z);
      puff.scale.setScalar(1.0 + p * 0.7);
      refineryGroup.add(puff);
      smokePuffs.push({
        mesh: puff,
        baseX: c.x,
        baseZ: c.z,
        baseY: c.h,
        offset: p * 2.0 + idx
      });
    }
  });

  // Spherical Gas Storage Tanks (Gasometri)
  const sphereTankGeom = new THREE.SphereGeometry(10.0, 16, 16);
  const tankPositions = [
    { x: 190, z: 170 },
    { x: 215, z: 155 },
    { x: 275, z: 80 },
    { x: 220, z: 85 }
  ];
  tankPositions.forEach(tp => {
    const sphere = new THREE.Mesh(sphereTankGeom, whiteMat);
    sphere.position.set(tp.x, 10.0, tp.z);
    sphere.castShadow = true;
    refineryGroup.add(sphere);

    // Legs
    const legGeom = new THREE.CylinderGeometry(0.38, 0.38, 10.0, 8);
    for (let a = 0; a < Math.PI * 2; a += Math.PI / 3) {
      const leg = new THREE.Mesh(legGeom, steelMat);
      leg.position.set(tp.x + Math.cos(a) * 8.5, 5.0, tp.z + Math.sin(a) * 8.5);
      refineryGroup.add(leg);
    }
  });

  // Industrial pipelines
  const pipeCurve = new THREE.CatmullRomCurve3([
    new THREE.Vector3(100, 10, 210),
    new THREE.Vector3(140, 10, 230),
    new THREE.Vector3(190, 11, 220),
    new THREE.Vector3(230, 10, 180)
  ]);
  const pipeMesh = new THREE.Mesh(new THREE.TubeGeometry(pipeCurve, 32, 1.4, 12, false), rustyMat);
  refineryGroup.add(pipeMesh);

  group.add(refineryGroup);

  // -------------------------------------------------------------
  // 4. PIAZZA DEL CONCERTO TRAP & MEGA-SUBWOOFER
  // -------------------------------------------------------------
  const concertGroup = new THREE.Group();
  concertGroup.position.set(130, 0, -130);
  concertGroup.rotation.y = -0.45;

  // Concert stage truss
  const stageFloor = new THREE.Mesh(new THREE.BoxGeometry(40, 2.5, 26), stageBlackMat);
  stageFloor.position.y = 1.25;
  concertGroup.add(stageFloor);

  const roof = new THREE.Mesh(new THREE.BoxGeometry(42, 1.5, 28), stageBlackMat);
  roof.position.y = 16;
  concertGroup.add(roof);

  // Giant LED Screen
  const ledCanvas = document.createElement('canvas');
  ledCanvas.width = 512;
  ledCanvas.height = 256;
  const lctx = ledCanvas.getContext('2d');
  lctx.fillStyle = '#050014';
  lctx.fillRect(0, 0, 512, 256);
  lctx.fillStyle = '#ff00aa';
  lctx.font = 'bold 52px "Trebuchet MS", sans-serif';
  lctx.textAlign = 'center';
  lctx.fillText('AUGUSTA TRAP FEST', 256, 95);
  lctx.fillStyle = '#00ffcc';
  lctx.font = 'bold 36px "Trebuchet MS", sans-serif';
  lctx.fillText('10.000 WATT NO-STOP', 256, 165);

  const ledTex = new THREE.CanvasTexture(ledCanvas);
  const ledMesh = new THREE.Mesh(new THREE.PlaneGeometry(34, 12), new THREE.MeshBasicMaterial({ map: ledTex }));
  ledMesh.position.set(0, 9.0, -12.5);
  concertGroup.add(ledMesh);

  // Massive Subwoofers on sides
  const subMat = new THREE.MeshStandardMaterial({ color: 0x1a1a1a, roughness: 0.5 });
  const coneMat = new THREE.MeshStandardMaterial({ color: 0x333344, roughness: 0.3, metalness: 0.7 });
  const subCones = [];

  [-16, 16].forEach(x => {
    const subStack = new THREE.Mesh(new THREE.BoxGeometry(6.0, 10.0, 4.5), subMat);
    subStack.position.set(x, 5.0, -4);
    concertGroup.add(subStack);

    for (let dy = 2; dy <= 8; dy += 2.6) {
      const cone = new THREE.Mesh(new THREE.CylinderGeometry(1.1, 0.45, 0.4, 16), coneMat);
      cone.rotateX(Math.PI / 2);
      cone.position.set(x, dy, -1.7);
      concertGroup.add(cone);
      subCones.push(cone);
    }
  });

  // Stage Spotlight beams
  const laserGroup = new THREE.Group();
  const colors = [0x00ffcc, 0xff00aa, 0xffe600, 0x00f7ff];
  for (let i = -3; i <= 3; i += 2) {
    const lMat = new THREE.MeshBasicMaterial({
      color: colors[(i + 3) % colors.length],
      transparent: true,
      opacity: 0.65,
      side: THREE.DoubleSide
    });
    const beam = new THREE.Mesh(new THREE.ConeGeometry(2.0, 50, 12, 1, true), lMat);
    beam.position.set(i * 4.5, 16, -4);
    beam.rotation.x = Math.PI / 4 + i * 0.1;
    beam.rotation.z = i * 0.15;
    laserGroup.add(beam);
  }
  concertGroup.add(laserGroup);

  // Beat-pulsing neon bars (Item 28)
  const neonBars = [];
  const neonColors = [0x00f7ff, 0xff00bb, 0x00ff88, 0xffd700];
  [-18, 18].forEach((x, cIdx) => {
    for (let y = 3; y <= 15; y += 3) {
      const barMat = new THREE.MeshStandardMaterial({
        color: neonColors[(cIdx + y) % neonColors.length],
        emissive: neonColors[(cIdx + y) % neonColors.length],
        emissiveIntensity: 2.0,
        roughness: 0.1
      });
      const bar = new THREE.Mesh(new THREE.BoxGeometry(0.3, 2.2, 0.3), barMat);
      bar.position.set(x, y, 4);
      concertGroup.add(bar);
      neonBars.push(bar);
    }
  });

  group.add(concertGroup);

  // -------------------------------------------------------------
  // 5. VIALE DELLA PROPAGANDA DEI POLITICI (Mega Cartelloni)
  // -------------------------------------------------------------
  const billboards = [
    { u: 0.48, side: 1, title: "VOTA ANTONIO!", sub: "PROMETTO MENO SMOG NEL 2099", color: '#0d47a1', bg: '#ffffff' },
    { u: 0.52, side: -1, title: "PARTITO DELLA FIACCOLA", sub: "PIÙ CIMINIERE, PIÙ CALORE!", color: '#b71c1c', bg: '#fff9c4' },
    { u: 0.56, side: 1, title: "ASFALTIAMO IL GOLFO", sub: "MAI PIÙ PESCI, SOLO BITUME!", color: '#1b5e20', bg: '#e8f5e9' },
    { u: 0.60, side: -1, title: "CI PENSO IO!", sub: "(DOPO IL TERZO MANDATO)", color: '#4a148c', bg: '#f3e5f5' }
  ];

  billboards.forEach(b => {
    const pt = track.curve.getPointAt(b.u);
    const tangent = track.curve.getTangentAt(b.u).normalize();
    const normal = new THREE.Vector3().crossVectors(tangent, new THREE.Vector3(0, 1, 0)).normalize();
    const boardPos = pt.clone().addScaledVector(normal, b.side * (track.width / 2 + 7.5));

    const boardGroup = new THREE.Group();
    boardGroup.position.copy(boardPos);
    boardGroup.rotation.y = Math.atan2(tangent.x, tangent.z) + (b.side > 0 ? -0.3 : 0.3);

    const p1 = new THREE.Mesh(new THREE.CylinderGeometry(0.35, 0.35, 13, 8), steelMat);
    p1.position.set(-6.5, 6.5, 0);
    boardGroup.add(p1);
    const p2 = p1.clone();
    p2.position.set(6.5, 6.5, 0);
    boardGroup.add(p2);

    const bCanvas = document.createElement('canvas');
    bCanvas.width = 512;
    bCanvas.height = 256;
    const bctx = bCanvas.getContext('2d');
    bctx.fillStyle = b.bg;
    bctx.fillRect(0, 0, 512, 256);
    bctx.strokeStyle = b.color;
    bctx.lineWidth = 14;
    bctx.strokeRect(7, 7, 498, 242);

    bctx.fillStyle = b.color;
    bctx.font = '900 52px "Trebuchet MS", sans-serif';
    bctx.textAlign = 'center';
    bctx.fillText(b.title, 256, 95);

    bctx.fillStyle = '#222222';
    bctx.font = 'bold 30px "Trebuchet MS", sans-serif';
    bctx.fillText(b.sub, 256, 160);

    bctx.fillStyle = '#e53935';
    bctx.font = 'bold 22px monospace';
    bctx.fillText('★ ELEZIONI AUGUSTA 2026 ★', 256, 215);

    const bMesh = new THREE.Mesh(
      new THREE.PlaneGeometry(15, 7.5),
      new THREE.MeshStandardMaterial({ map: new THREE.CanvasTexture(bCanvas), roughness: 0.4 })
    );
    bMesh.position.set(0, 10.0, 0);
    boardGroup.add(bMesh);

    group.add(boardGroup);
  });

  // -------------------------------------------------------------
  // 6. TRACK STREETLIGHTS
  // -------------------------------------------------------------
  const lampGlowMat = new THREE.MeshBasicMaterial({ color: 0xffe082 });
  for (let u = 0.02; u < 0.98; u += 0.035) {
    const pt = track.getPointAt(u);
    const tangent = track.getTangentAt(u).normalize();
    const normal = new THREE.Vector3().crossVectors(tangent, new THREE.Vector3(0, 1, 0)).normalize();
    [-1, 1].forEach(side => {
      const polePos = pt.clone().addScaledVector(normal, side * (track.width / 2 + 2.0));
      const pole = new THREE.Mesh(new THREE.CylinderGeometry(0.12, 0.16, 7.5, 6), steelMat);
      pole.position.copy(polePos).add(new THREE.Vector3(0, 3.75, 0));
      group.add(pole);

      const lamp = new THREE.Mesh(new THREE.BoxGeometry(0.5, 0.25, 0.8), lampGlowMat);
      lamp.position.copy(polePos).add(new THREE.Vector3(0, 7.5, 0));
      group.add(lamp);
    });
  }

  // -------------------------------------------------------------
  // 7. SICILIAN CACTI (Fichi d'India) & VEGETATION
  // -------------------------------------------------------------
  const cactusMat = new THREE.MeshStandardMaterial({ color: 0x2e7d32, roughness: 0.8 });
  const figMat = new THREE.MeshStandardMaterial({ color: 0xe65100, roughness: 0.7 });
  for (let i = 0; i < 35; i++) {
    const u = Math.random();
    const pt = track.getPointAt(u);
    const normal = track.getTangentAt(u).cross(new THREE.Vector3(0, 1, 0)).normalize();
    const side = Math.random() > 0.5 ? 1 : -1;
    const cPos = pt.clone().addScaledVector(normal, side * (track.width / 2 + 5.0 + Math.random() * 20));
    cPos.y = 0;

    const cactusGroup = new THREE.Group();
    cactusGroup.position.copy(cPos);

    const p1 = new THREE.Mesh(new THREE.SphereGeometry(0.9, 8, 8), cactusMat);
    p1.scale.set(1.0, 1.4, 0.25);
    p1.position.y = 1.1;
    cactusGroup.add(p1);

    const p2 = p1.clone();
    p2.position.set(0.6, 2.2, 0);
    p2.rotation.z = 0.35;
    cactusGroup.add(p2);

    const p3 = p1.clone();
    p3.position.set(-0.6, 2.1, 0);
    p3.rotation.z = -0.4;
    cactusGroup.add(p3);

    const fig = new THREE.Mesh(new THREE.SphereGeometry(0.18, 6, 6), figMat);
    fig.position.set(0.6, 3.2, 0);
    cactusGroup.add(fig);

    group.add(cactusGroup);
  }

  // -------------------------------------------------------------
  // 8. CAPO SANTA CROCE: Il Faro della Salvezza
  // -------------------------------------------------------------
  const lighthouseGroup = new THREE.Group();
  lighthouseGroup.position.set(-80, 0, 160);

  const hill = new THREE.Mesh(new THREE.CylinderGeometry(18, 25, 8, 24), concreteMat);
  hill.position.y = 4;
  lighthouseGroup.add(hill);

  const lhHeight = 34;
  const lhTower = new THREE.Mesh(new THREE.CylinderGeometry(2.4, 3.8, lhHeight, 16), whiteMat);
  lhTower.position.y = 8 + lhHeight / 2;
  lighthouseGroup.add(lhTower);

  for (let y = 14; y < 36; y += 8) {
    const stripe = new THREE.Mesh(new THREE.CylinderGeometry(3.3 - y * 0.03, 3.4 - y * 0.03, 3.2, 16), redMat);
    stripe.position.y = 8 + y;
    lighthouseGroup.add(stripe);
  }

  const lanternRoom = new THREE.Mesh(new THREE.CylinderGeometry(2.6, 2.6, 4, 12), steelMat);
  lanternRoom.position.y = 8 + lhHeight + 2;
  lighthouseGroup.add(lanternRoom);

  const lhLight = new THREE.SpotLight(0x00f7ff, 8.0, 180, Math.PI / 6, 0.2);
  lhLight.position.set(0, 8 + lhHeight + 2, 0);
  lighthouseGroup.add(lhLight);

  const lhLightTarget = new THREE.Object3D();
  lhLightTarget.position.set(50, 8 + lhHeight, 0);
  lighthouseGroup.add(lhLightTarget);
  lhLight.target = lhLightTarget;

  group.add(lighthouseGroup);

  // -------------------------------------------------------------
  // 9. SALINE DI AUGUSTA: Fenicotteri Rosa (Item 29)
  // -------------------------------------------------------------
  const flamingoGroup = new THREE.Group();
  const flamingoMat = new THREE.MeshStandardMaterial({ color: 0xff85a1, roughness: 0.6 });
  const beakMat = new THREE.MeshStandardMaterial({ color: 0x111111, roughness: 0.4 });
  const legMat = new THREE.MeshStandardMaterial({ color: 0xffb3c6, roughness: 0.8 });

  const flamingos = [];
  for (let i = 0; i < 14; i++) {
    const fGroup = new THREE.Group();
    const body = new THREE.Mesh(new THREE.SphereGeometry(0.65, 8, 8), flamingoMat);
    body.scale.set(0.8, 1.0, 1.35);
    body.position.y = 1.9;
    fGroup.add(body);

    [-0.18, 0.18].forEach(x => {
      const leg = new THREE.Mesh(new THREE.CylinderGeometry(0.04, 0.04, 1.9, 6), legMat);
      leg.position.set(x, 0.95, 0);
      fGroup.add(leg);
    });

    const neckPivot = new THREE.Group();
    neckPivot.position.set(0, 2.1, 0.65);
    const neck = new THREE.Mesh(new THREE.CylinderGeometry(0.1, 0.14, 1.3, 6), flamingoMat);
    neck.position.set(0, 0.55, 0.2);
    neck.rotation.x = -0.3;
    neckPivot.add(neck);

    const head = new THREE.Mesh(new THREE.SphereGeometry(0.22, 6, 6), flamingoMat);
    head.position.set(0, 1.25, 0.4);
    neckPivot.add(head);

    const beak = new THREE.Mesh(new THREE.ConeGeometry(0.07, 0.35, 6), beakMat);
    beak.rotation.x = Math.PI / 2 + 0.35;
    beak.position.set(0, 1.2, 0.62);
    neckPivot.add(beak);

    fGroup.add(neckPivot);

    const angle = (i / 14) * Math.PI * 2;
    const rad = 30 + Math.random() * 25;
    fGroup.position.set(-160 + Math.cos(angle) * rad, 0, 45 + Math.sin(angle) * rad);
    fGroup.rotation.y = Math.random() * Math.PI * 2;
    flamingoGroup.add(fGroup);
    flamingos.push({ fGroup, neckPivot, phase: Math.random() * 10 });
  }
  group.add(flamingoGroup);

  // Return container and animation hooks
  return {
    group,
    update: (time) => {
      // 1. Flicker refinery torch flames
      flameMeshes.forEach((flame, idx) => {
        const scale = 1.0 + Math.sin(time * 12 + idx) * 0.22 + Math.cos(time * 18 + idx) * 0.15;
        flame.scale.set(scale, 1.0 + Math.sin(time * 15) * 0.3, scale);
      });
      flameLights.forEach((light, idx) => {
        light.intensity = 4.0 + Math.sin(time * 20 + idx * 2) * 1.8;
      });

      // 2. Animate smoke puffs rising
      smokePuffs.forEach(p => {
        const t = time * 2.0 + p.offset;
        const progress = (t % 8.0) / 8.0;
        p.mesh.position.y = p.baseY + 4 + progress * 32;
        p.mesh.position.x = p.baseX + Math.sin(t * 0.8) * (2 + progress * 6);
        p.mesh.position.z = p.baseZ + Math.cos(t * 0.8) * (2 + progress * 6);
        p.mesh.scale.setScalar(1.0 + progress * 2.5);
      });

      // 3. Pulse subwoofer cones with simulated bass beat
      const bassBeat = Math.max(0, Math.sin(time * 8.5));
      subCones.forEach(cone => {
        cone.position.z = -1.7 + bassBeat * 0.35;
      });

      // 4. Rotate concert laser beams
      laserGroup.rotation.y = Math.sin(time * 1.8) * 0.45;

      // 6. Pulse neon bars in Trap City (Item 28)
      const neonPulse = 0.5 + Math.sin(time * 12.0) * 0.5;
      neonBars.forEach(bar => {
        bar.material.emissiveIntensity = 1.2 + neonPulse * 2.8;
      });

      // 7. Animate flamingos dipping beaks (Item 29)
      flamingos.forEach(f => {
        const dip = Math.sin(time * 2.2 + f.phase);
        f.neckPivot.rotation.x = dip > 0 ? dip * 0.65 : 0;
      });

      // 5. Rotate Capo Santa Croce lighthouse beam
      lhLightTarget.position.x = Math.cos(time * 1.5) * 80;
      lhLightTarget.position.z = Math.sin(time * 1.5) * 80;
    }
  };
}
