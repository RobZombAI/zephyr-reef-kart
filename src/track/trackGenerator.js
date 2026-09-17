import * as THREE from 'three';

export class AugustaTrack {
  constructor(trackDef, config) {
    this.trackDef = trackDef;
    this.waypoints = trackDef.waypoints;
    this.config = config;
    this.width = config.trackWidth || 16.0;
    this.theme = trackDef.theme || 'refinery';

    // Build closed centripetal Catmull-Rom spline
    this.curve = new THREE.CatmullRomCurve3(this.waypoints, true, 'centripetal', 0.5);
    this.totalLength = this.curve.getLength();

    this.group = new THREE.Group();
    this.segments = 360;

    // Track path samples for fast collision and projection
    this.pathSamples = [];
    this.nitroPads = [];
    this.oilSlicks = [];
    this.smogZones = [];
    this.oxygenPickups = [];
    this.itemBoxes = [];
    this.animatedObjects = [];
    this.gantryLights = {};
    this.activeMissiles = [];
    this.activeShockwaves = [];
    this.activeSparks = [];
    this.activeConfetti = [];
    this.droppedOilSlicks = [];

    this.buildTrackGeometry();
    this.buildGuardrails();
    this.buildStartGantry();
    this.buildInteractiveElements();
    this.buildThemeScenery();
  }

  buildTrackGeometry() {
    const points = [];
    const uvs = [];
    const indices = [];

    const numSegs = this.segments;
    const halfW = this.width / 2;

    for (let i = 0; i <= numSegs; i++) {
      const u = i / numSegs;
      const pt = this.curve.getPointAt(u % 1.0);
      const tangent = this.curve.getTangentAt(u % 1.0).normalize();
      
      let up = new THREE.Vector3(0, 1, 0);
      const curvature = tangent.x * 0.35;
      up.x -= curvature;
      up.normalize();

      const normal = new THREE.Vector3().crossVectors(tangent, up).normalize();

      const leftPt = new THREE.Vector3().copy(pt).addScaledVector(normal, -halfW);
      const rightPt = new THREE.Vector3().copy(pt).addScaledVector(normal, halfW);

      points.push(leftPt.x, leftPt.y, leftPt.z);
      points.push(rightPt.x, rightPt.y, rightPt.z);

      const repeatV = u * (this.totalLength / 12.0);
      uvs.push(0, repeatV);
      uvs.push(1, repeatV);

      this.pathSamples.push({
        u,
        position: pt,
        tangent,
        normal,
        left: leftPt,
        right: rightPt
      });
    }

    for (let i = 0; i < numSegs; i++) {
      const row1 = i * 2;
      const row2 = (i + 1) * 2;
      indices.push(row1, row1 + 1, row2);
      indices.push(row1 + 1, row2 + 1, row2);
    }

    const roadGeom = new THREE.BufferGeometry();
    roadGeom.setAttribute('position', new THREE.Float32BufferAttribute(points, 3));
    roadGeom.setAttribute('uv', new THREE.Float32BufferAttribute(uvs, 2));
    roadGeom.setIndex(indices);
    roadGeom.computeVertexNormals();

    // Procedural asphalt canvas texture
    const canvas = document.createElement('canvas');
    canvas.width = 512;
    canvas.height = 1024;
    const ctx = canvas.getContext('2d');

    ctx.fillStyle = this.trackDef.asphaltColor || '#22252a';
    ctx.fillRect(0, 0, 512, 1024);

    for (let i = 0; i < 3500; i++) {
      const x = Math.random() * 512;
      const y = Math.random() * 1024;
      const shade = Math.floor(22 + Math.random() * 22);
      ctx.fillStyle = `rgb(${shade},${shade},${shade})`;
      ctx.fillRect(x, y, 2, 2);
    }

    // Outer edge lines (curb warning lines)
    ctx.fillStyle = '#ff3333';
    for (let y = 0; y < 1024; y += 64) {
      ctx.fillRect(10, y, 16, 32);
      ctx.fillRect(512 - 26, y, 16, 32);
    }
    ctx.fillStyle = '#ffffff';
    for (let y = 32; y < 1024; y += 64) {
      ctx.fillRect(10, y, 16, 32);
      ctx.fillRect(512 - 26, y, 16, 32);
    }

    // Dashed centerline
    ctx.fillStyle = '#ffcf33';
    for (let y = 0; y < 1024; y += 96) {
      ctx.fillRect(251, y + 16, 10, 56);
    }

    const roadTexture = new THREE.CanvasTexture(canvas);
    roadTexture.wrapS = THREE.RepeatWrapping;
    roadTexture.wrapT = THREE.RepeatWrapping;

    const roadMat = new THREE.MeshStandardMaterial({
      map: roadTexture,
      roughness: 0.85,
      metalness: 0.1
    });

    const roadMesh = new THREE.Mesh(roadGeom, roadMat);
    roadMesh.receiveShadow = true;
    this.group.add(roadMesh);
  }

  buildGuardrails() {
    const numSegs = this.segments;
    const railPointsLeftTop = [];
    const railPointsLeftBot = [];
    const railPointsRightTop = [];
    const railPointsRightBot = [];

    const postGroup = new THREE.Group();
    const postGeom = new THREE.CylinderGeometry(0.12, 0.12, 1.4, 8);
    const postMat = new THREE.MeshStandardMaterial({ color: 0x334155, metalness: 0.8, roughness: 0.3 });

    for (let i = 0; i <= numSegs; i++) {
      const sample = this.pathSamples[i];
      
      const pLTop = sample.left.clone().add(new THREE.Vector3(0, 0.85, 0));
      const pLBot = sample.left.clone().add(new THREE.Vector3(0, 0.38, 0));
      const pRTop = sample.right.clone().add(new THREE.Vector3(0, 0.85, 0));
      const pRBot = sample.right.clone().add(new THREE.Vector3(0, 0.38, 0));

      railPointsLeftTop.push(pLTop);
      railPointsLeftBot.push(pLBot);
      railPointsRightTop.push(pRTop);
      railPointsRightBot.push(pRBot);

      // Add vertical posts every 4 segments
      if (i % 4 === 0 && i < numSegs) {
        const postL = new THREE.Mesh(postGeom, postMat);
        postL.position.copy(sample.left).add(new THREE.Vector3(0, 0.65, 0));
        postGroup.add(postL);

        const postR = new THREE.Mesh(postGeom, postMat);
        postR.position.copy(sample.right).add(new THREE.Vector3(0, 0.65, 0));
        postGroup.add(postR);
      }
    }

    this.group.add(postGroup);

    const railMat = new THREE.MeshStandardMaterial({
      color: 0x94a3b8,
      metalness: 0.85,
      roughness: 0.25
    });

    const addRailTube = (pts) => {
      const curve = new THREE.CatmullRomCurve3(pts, true);
      const geom = new THREE.TubeGeometry(curve, numSegs, 0.18, 8, true);
      const mesh = new THREE.Mesh(geom, railMat);
      mesh.castShadow = true;
      this.group.add(mesh);
    };

    // Double beam on both sides: 100% continuous perimeter barrier
    addRailTube(railPointsLeftTop);
    addRailTube(railPointsLeftBot);
    addRailTube(railPointsRightTop);
    addRailTube(railPointsRightBot);
  }

  buildStartGantry() {
    const startSample = this.pathSamples[0];
    const pos = startSample.position;
    const tangent = startSample.tangent;

    const gantryGroup = new THREE.Group();
    gantryGroup.position.copy(pos);
    gantryGroup.rotation.y = Math.atan2(tangent.x, tangent.z);

    const steelMat = new THREE.MeshStandardMaterial({ color: 0x1e293b, metalness: 0.8, roughness: 0.3 });
    const redMat = new THREE.MeshStandardMaterial({ color: 0xd92626, metalness: 0.4, roughness: 0.4 });
    const goldMat = new THREE.MeshStandardMaterial({ color: 0xffb703, metalness: 0.7, roughness: 0.2 });

    const postHeight = 10.0;
    const postDist = this.width / 2 + 2.5;
    const postGeom = new THREE.BoxGeometry(1.2, postHeight, 1.2);

    const postL = new THREE.Mesh(postGeom, steelMat);
    postL.position.set(-postDist, postHeight / 2, 0);
    gantryGroup.add(postL);

    const postR = new THREE.Mesh(postGeom, steelMat);
    postR.position.set(postDist, postHeight / 2, 0);
    gantryGroup.add(postR);

    const truss = new THREE.Mesh(new THREE.BoxGeometry(postDist * 2 + 2.5, 2.5, 1.5), redMat);
    truss.position.set(0, postHeight - 0.2, 0);
    gantryGroup.add(truss);

    // Banner Text
    const canvas = document.createElement('canvas');
    canvas.width = 1024;
    canvas.height = 256;
    const ctx = canvas.getContext('2d');
    ctx.fillStyle = '#0f172a';
    ctx.fillRect(0, 0, 1024, 256);
    ctx.fillStyle = '#ffd700';
    ctx.font = 'bold 72px Impact, sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('🏁 ' + this.trackDef.name.toUpperCase() + ' 🏁', 512, 110);
    ctx.fillStyle = '#38bdf8';
    ctx.font = 'bold 42px sans-serif';
    ctx.fillText(this.trackDef.subtitle.toUpperCase(), 512, 190);

    const bannerTex = new THREE.CanvasTexture(canvas);
    const bannerMat = new THREE.MeshBasicMaterial({ map: bannerTex });
    const bannerMesh = new THREE.Mesh(new THREE.PlaneGeometry(postDist * 1.8, 2.2), bannerMat);
    bannerMesh.position.set(0, postHeight - 0.2, 0.8);
    gantryGroup.add(bannerMesh);

    // Start Traffic Light System (Item 31)
    const lightHousing = new THREE.Mesh(new THREE.BoxGeometry(7.2, 1.4, 0.6), steelMat);
    lightHousing.position.set(0, postHeight - 1.8, 0.85);
    gantryGroup.add(lightHousing);

    const lightGeom = new THREE.SphereGeometry(0.44, 16, 16);
    const redMatOff = new THREE.MeshStandardMaterial({ color: 0x330000, roughness: 0.8 });
    const greenMatOff = new THREE.MeshStandardMaterial({ color: 0x003311, roughness: 0.8 });

    const l1 = new THREE.Mesh(lightGeom, redMatOff.clone());
    l1.position.set(-2.4, postHeight - 1.8, 1.15);
    gantryGroup.add(l1);

    const l2 = new THREE.Mesh(lightGeom, redMatOff.clone());
    l2.position.set(-0.8, postHeight - 1.8, 1.15);
    gantryGroup.add(l2);

    const l3 = new THREE.Mesh(lightGeom, redMatOff.clone());
    l3.position.set(0.8, postHeight - 1.8, 1.15);
    gantryGroup.add(l3);

    const lGo = new THREE.Mesh(lightGeom, greenMatOff.clone());
    lGo.position.set(2.4, postHeight - 1.8, 1.15);
    gantryGroup.add(lGo);

    this.gantryLights = { l1, l2, l3, lGo };

    this.group.add(gantryGroup);
  }

  buildInteractiveElements() {
    // 1. Nitro Booster Pads
    const nitroPositionsU = [0.08, 0.28, 0.52, 0.78];
    const padCanvas = document.createElement('canvas');
    padCanvas.width = 256;
    padCanvas.height = 256;
    const pCtx = padCanvas.getContext('2d');
    pCtx.fillStyle = '#e11d48';
    pCtx.fillRect(0, 0, 256, 256);
    pCtx.fillStyle = '#f43f5e';
    for (let y = 0; y < 256; y += 32) {
      pCtx.fillRect(0, y, 256, 16);
    }
    pCtx.fillStyle = '#ffffff';
    pCtx.beginPath();
    pCtx.moveTo(128, 30);
    pCtx.lineTo(220, 180);
    pCtx.lineTo(160, 180);
    pCtx.lineTo(160, 230);
    pCtx.lineTo(96, 230);
    pCtx.lineTo(96, 180);
    pCtx.lineTo(36, 180);
    pCtx.closePath();
    pCtx.fill();

    const padTex = new THREE.CanvasTexture(padCanvas);
    const padMat = new THREE.MeshStandardMaterial({
      map: padTex,
      emissive: 0xf43f5e,
      emissiveIntensity: 0.65,
      roughness: 0.3
    });

    nitroPositionsU.forEach(u => {
      const pt = this.curve.getPointAt(u);
      const tangent = this.curve.getTangentAt(u).normalize();
      const padMesh = new THREE.Mesh(new THREE.PlaneGeometry(this.width * 0.75, 5.5), padMat);
      padMesh.rotation.x = -Math.PI / 2;
      padMesh.rotation.z = -Math.atan2(tangent.x, tangent.z);
      padMesh.position.copy(pt).add(new THREE.Vector3(0, 0.08, 0));
      this.group.add(padMesh);

      this.nitroPads.push({
        position: pt.clone(),
        radius: 4.8
      });
    });

    // 2. Oil Slicks (Hazard)
    const oilPositionsU = [0.18, 0.38, 0.68, 0.88];
    const slickCanvas = document.createElement('canvas');
    slickCanvas.width = 128;
    slickCanvas.height = 128;
    const sCtx = slickCanvas.getContext('2d');
    const grad = sCtx.createRadialGradient(64, 64, 10, 64, 64, 60);
    grad.addColorStop(0, 'rgba(10, 10, 12, 0.95)');
    grad.addColorStop(0.6, 'rgba(30, 20, 40, 0.85)');
    grad.addColorStop(1, 'rgba(0, 0, 0, 0)');
    sCtx.fillStyle = grad;
    sCtx.fillRect(0, 0, 128, 128);

    const slickTex = new THREE.CanvasTexture(slickCanvas);
    const slickMat = new THREE.MeshBasicMaterial({
      map: slickTex,
      transparent: true,
      depthWrite: false
    });

    oilPositionsU.forEach((u, idx) => {
      const pt = this.curve.getPointAt(u);
      const tangent = this.curve.getTangentAt(u).normalize();
      const normal = new THREE.Vector3(-tangent.z, 0, tangent.x);
      const offset = ((idx % 2 === 0) ? -1 : 1) * (this.width * 0.22);
      const slickPos = pt.clone().addScaledVector(normal, offset);

      const slickMesh = new THREE.Mesh(new THREE.PlaneGeometry(4.5, 4.5), slickMat);
      slickMesh.rotation.x = -Math.PI / 2;
      slickMesh.position.copy(slickPos).add(new THREE.Vector3(0, 0.06, 0));
      this.group.add(slickMesh);

      this.oilSlicks.push({
        position: slickPos,
        radius: 2.8
      });
    });

    // 3. Mystery Item Boxes (? Boxes)
    const boxLocationsU = [0.12, 0.35, 0.60, 0.84];
    const boxGeom = new THREE.BoxGeometry(1.6, 1.6, 1.6);
    
    // Canvas texture with bold "?"
    const qCanvas = document.createElement('canvas');
    qCanvas.width = 128;
    qCanvas.height = 128;
    const qCtx = qCanvas.getContext('2d');
    qCtx.fillStyle = '#f59e0b';
    qCtx.fillRect(0, 0, 128, 128);
    qCtx.fillStyle = '#ffffff';
    qCtx.font = 'bold 96px sans-serif';
    qCtx.textAlign = 'center';
    qCtx.textBaseline = 'middle';
    qCtx.fillText('?', 64, 68);

    const qTex = new THREE.CanvasTexture(qCanvas);
    const boxMat = new THREE.MeshStandardMaterial({
      map: qTex,
      color: 0xffffff,
      emissive: 0xf59e0b,
      emissiveIntensity: 0.6,
      metalness: 0.3,
      roughness: 0.2
    });

    const haloGeom = new THREE.RingGeometry(1.2, 1.6, 16);
    const haloMat = new THREE.MeshBasicMaterial({
      color: 0xfacc15,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.65
    });

    boxLocationsU.forEach(u => {
      const pt = this.curve.getPointAt(u);
      const tangent = this.curve.getTangentAt(u).normalize();
      const normal = new THREE.Vector3(-tangent.z, 0, tangent.x);

      // Row of 3 boxes across the track width
      [-0.32, 0.0, 0.32].forEach(laneOffset => {
        const boxPos = pt.clone().addScaledVector(normal, laneOffset * this.width).add(new THREE.Vector3(0, 1.2, 0));
        
        const boxMesh = new THREE.Mesh(boxGeom, boxMat);
        boxMesh.position.copy(boxPos);
        boxMesh.castShadow = true;

        const haloMesh = new THREE.Mesh(haloGeom, haloMat);
        haloMesh.rotation.x = Math.PI / 2;
        haloMesh.position.set(0, -0.65, 0);
        boxMesh.add(haloMesh);

        this.group.add(boxMesh);

        this.itemBoxes.push({
          mesh: boxMesh,
          basePos: boxPos.clone(),
          active: true,
          respawnTimer: 0,
          radius: 2.2
        });
      });
    });

    // 4. Toxic Smog Zones (active primarily on refinery and city tracks)
    this.smogZones = [
      { centerU: 0.22, range: 0.08, name: "Polo Petrolchimico Raffineria" },
      { centerU: 0.32, range: 0.06, name: "Ciminiere & Torce Fiammeggianti" },
      { centerU: 0.58, range: 0.07, name: "Nube Elettorale di Propaganda" }
    ];
  }

  buildThemeScenery() {
    switch (this.theme) {
      case 'lighthouse':
        this.buildLighthouseScenery();
        break;
      case 'trapcity':
        this.buildTrapCityScenery();
        break;
      case 'saline':
        this.buildSalineScenery();
        break;
      case 'refinery':
      default:
        this.buildRefineryScenery();
        break;
    }
  }

  buildRefineryScenery() {
    const chimneyMat = new THREE.MeshStandardMaterial({ color: 0x475569, metalness: 0.8, roughness: 0.4 });
    const redStripeMat = new THREE.MeshStandardMaterial({ color: 0xdc2626, roughness: 0.5 });
    const tankMat = new THREE.MeshStandardMaterial({ color: 0x94a3b8, metalness: 0.7, roughness: 0.3 });
    const flameMat = new THREE.MeshBasicMaterial({ color: 0xff6600 });

    const chimneyPositions = [
      new THREE.Vector3(120, 0, 160),
      new THREE.Vector3(180, 0, 170),
      new THREE.Vector3(260, 0, 180),
      new THREE.Vector3(210, 0, 270),
      new THREE.Vector3(140, 0, 290),
      new THREE.Vector3(80, 0, 240)
    ];

    chimneyPositions.forEach((pos, idx) => {
      const height = 45 + (idx % 3) * 15;
      const stack = new THREE.Group();
      stack.position.copy(pos);

      const trunk = new THREE.Mesh(new THREE.CylinderGeometry(2.2, 3.8, height, 16), chimneyMat);
      trunk.position.y = height / 2;
      stack.add(trunk);

      const ring = new THREE.Mesh(new THREE.CylinderGeometry(2.35, 2.55, 6.0, 16), redStripeMat);
      ring.position.y = height * 0.75;
      stack.add(ring);

      const flame = new THREE.Mesh(new THREE.ConeGeometry(2.0, 8.0, 8), flameMat);
      flame.position.y = height + 4.0;
      stack.add(flame);
      this.animatedObjects.push({ mesh: flame, type: 'flame' });

      this.group.add(stack);
    });

    // Spherical Gas Tanks
    const tankPositions = [
      new THREE.Vector3(150, 8, 200),
      new THREE.Vector3(200, 10, 220),
      new THREE.Vector3(240, 9, 210)
    ];
    tankPositions.forEach(pos => {
      const tank = new THREE.Mesh(new THREE.SphereGeometry(9, 24, 24), tankMat);
      tank.position.copy(pos);
      this.group.add(tank);
    });
  }

  buildLighthouseScenery() {
    // Grand Faro di Capo Santa Croce
    const faroGroup = new THREE.Group();
    faroGroup.position.set(330, 0, 80);

    const whiteMat = new THREE.MeshStandardMaterial({ color: 0xf8fafc, roughness: 0.4 });
    const redMat = new THREE.MeshStandardMaterial({ color: 0xdc2626, roughness: 0.4 });
    const glassMat = new THREE.MeshStandardMaterial({ color: 0x38bdf8, emissive: 0xfef08a, emissiveIntensity: 0.8 });

    const base = new THREE.Mesh(new THREE.CylinderGeometry(5.0, 7.5, 42, 18), whiteMat);
    base.position.y = 21;
    faroGroup.add(base);

    // Red stripes
    [10, 22, 34].forEach(y => {
      const stripe = new THREE.Mesh(new THREE.CylinderGeometry(5.2, 5.6, 6, 18), redMat);
      stripe.position.y = y;
      faroGroup.add(stripe);
    });

    // Lantern room & Rotating Beacon Beam
    const lantern = new THREE.Mesh(new THREE.CylinderGeometry(4.5, 4.5, 7, 16), glassMat);
    lantern.position.y = 44;
    faroGroup.add(lantern);

    const beamGeom = new THREE.ConeGeometry(12, 180, 16);
    beamGeom.rotateX(Math.PI / 2);
    beamGeom.translate(0, 0, 90);
    const beamMat = new THREE.MeshBasicMaterial({
      color: 0xfffbeb,
      transparent: true,
      opacity: 0.35,
      side: THREE.DoubleSide
    });
    const beamMesh = new THREE.Mesh(beamGeom, beamMat);
    beamMesh.position.y = 44;
    faroGroup.add(beamMesh);
    this.animatedObjects.push({ mesh: beamMesh, type: 'beacon' });

    this.group.add(faroGroup);

    // Coastal Cliffs
    const rockMat = new THREE.MeshStandardMaterial({ color: 0x78716c, roughness: 0.9 });
    for (let i = 0; i < 18; i++) {
      const angle = (i / 18) * Math.PI * 2;
      const dist = 240 + Math.sin(i * 3) * 60;
      const rock = new THREE.Mesh(new THREE.DodecahedronGeometry(12 + Math.random() * 8), rockMat);
      rock.position.set(Math.cos(angle) * dist, 4, Math.sin(angle) * dist);
      this.group.add(rock);
    }
  }

  buildTrapCityScenery() {
    // Concert Stage
    const stageGroup = new THREE.Group();
    stageGroup.position.set(120, 0, 100);

    const trussMat = new THREE.MeshStandardMaterial({ color: 0x0f172a, metalness: 0.8 });
    const screenMat = new THREE.MeshBasicMaterial({ color: 0xff007f });

    const roof = new THREE.Mesh(new THREE.BoxGeometry(32, 2.5, 20), trussMat);
    roof.position.y = 16;
    stageGroup.add(roof);

    const screen = new THREE.Mesh(new THREE.PlaneGeometry(28, 12), screenMat);
    screen.position.set(0, 9, -9.5);
    stageGroup.add(screen);

    // Subwoofers
    const subMat = new THREE.MeshStandardMaterial({ color: 0x111827, roughness: 0.6 });
    const coneMat = new THREE.MeshStandardMaterial({ color: 0x06b6d4, emissive: 0x06b6d4, emissiveIntensity: 0.5 });

    [-12, -7, 7, 12].forEach(x => {
      const stack = new THREE.Mesh(new THREE.BoxGeometry(4, 10, 4), subMat);
      stack.position.set(x, 5, -8);
      stageGroup.add(stack);

      const cone = new THREE.Mesh(new THREE.CylinderGeometry(1.4, 1.4, 0.4, 16), coneMat);
      cone.rotation.x = Math.PI / 2;
      cone.position.set(x, 5, -5.8);
      stageGroup.add(cone);
      this.animatedObjects.push({ mesh: cone, type: 'subwoofer' });
    });

    this.group.add(stageGroup);

    // Satirical Political Billboards
    const slogans = [
      "VOTA ANTONIO:\nMENO SMOG NEL 2099!",
      "PARTITO DELLA FIACCOLA:\nPIÙ CIMINIERE PIÙ CALORE!",
      "ASFALTIAMO IL GOLFO:\nMAI PIÙ PESCI, SOLO BITUME!",
      "CI PENSO IO!\n(DOPO IL TERZO MANDATO)"
    ];

    slogans.forEach((slogan, idx) => {
      const bCanvas = document.createElement('canvas');
      bCanvas.width = 512;
      bCanvas.height = 256;
      const bCtx = bCanvas.getContext('2d');
      bCtx.fillStyle = '#fef08a';
      bCtx.fillRect(0, 0, 512, 256);
      bCtx.fillStyle = '#b91c1c';
      bCtx.font = 'bold 36px Impact, sans-serif';
      bCtx.textAlign = 'center';
      const lines = slogan.split('\n');
      bCtx.fillText(lines[0], 256, 90);
      bCtx.fillStyle = '#1e3a8a';
      bCtx.font = 'bold 28px sans-serif';
      bCtx.fillText(lines[1], 256, 170);

      const bTex = new THREE.CanvasTexture(bCanvas);
      const bMat = new THREE.MeshBasicMaterial({ map: bTex });
      const board = new THREE.Mesh(new THREE.PlaneGeometry(16, 8), bMat);
      
      const angle = (idx / slogans.length) * Math.PI * 2;
      board.position.set(Math.cos(angle) * 140, 8, Math.sin(angle) * 140);
      board.rotation.y = -angle + Math.PI / 2;
      this.group.add(board);
    });
  }

  buildSalineScenery() {
    // Salt Ponds (Pink Water Flats)
    const saltMat = new THREE.MeshStandardMaterial({
      color: 0xf472b6,
      roughness: 0.1,
      metalness: 0.1,
      transparent: true,
      opacity: 0.85
    });

    [-120, 0, 120].forEach(x => {
      [-120, 0, 120].forEach(z => {
        const pond = new THREE.Mesh(new THREE.PlaneGeometry(75, 75), saltMat);
        pond.rotation.x = -Math.PI / 2;
        pond.position.set(x, 0.1, z);
        this.group.add(pond);
      });
    });

    // Flamingos (Stylized low-poly)
    const flamingoMat = new THREE.MeshBasicMaterial({ color: 0xf43f5e });
    for (let i = 0; i < 24; i++) {
      const fGroup = new THREE.Group();
      fGroup.position.set(-80 + Math.random() * 160, 0.5, -80 + Math.random() * 160);
      const body = new THREE.Mesh(new THREE.SphereGeometry(0.7, 8, 8), flamingoMat);
      body.position.y = 2.2;
      fGroup.add(body);
      const neck = new THREE.Mesh(new THREE.CylinderGeometry(0.1, 0.1, 1.8), flamingoMat);
      neck.position.set(0.4, 3.0, 0);
      fGroup.add(neck);
      this.group.add(fGroup);
    }
  }

  setGantryLight(state) {
    if (!this.gantryLights || !this.gantryLights.l1) return;
    const { l1, l2, l3, lGo } = this.gantryLights;
    const redOn = { emissive: new THREE.Color(0xff1122), emissiveIntensity: 3.2, color: new THREE.Color(0xff3344) };
    const redOff = { emissive: new THREE.Color(0x000000), emissiveIntensity: 0.0, color: new THREE.Color(0x330000) };
    const greenOn = { emissive: new THREE.Color(0x00ff66), emissiveIntensity: 3.5, color: new THREE.Color(0x22ff77) };
    const greenOff = { emissive: new THREE.Color(0x000000), emissiveIntensity: 0.0, color: new THREE.Color(0x003311) };

    const apply = (mesh, conf) => {
      mesh.material.emissive.copy(conf.emissive);
      mesh.material.emissiveIntensity = conf.emissiveIntensity;
      mesh.material.color.copy(conf.color);
    };

    if (state === '3') {
      apply(l1, redOn); apply(l2, redOff); apply(l3, redOff); apply(lGo, greenOff);
    } else if (state === '2') {
      apply(l1, redOn); apply(l2, redOn); apply(l3, redOff); apply(lGo, greenOff);
    } else if (state === '1') {
      apply(l1, redOn); apply(l2, redOn); apply(l3, redOn); apply(lGo, greenOff);
    } else if (state === 'go') {
      apply(l1, redOff); apply(l2, redOff); apply(l3, redOff); apply(lGo, greenOn);
    } else {
      apply(l1, redOff); apply(l2, redOff); apply(l3, redOff); apply(lGo, greenOff);
    }
  }

  dropOilSlick(pos, radius = 3.5) {
    if (!this.slickMat) {
      const canvas = document.createElement('canvas');
      canvas.width = 128; canvas.height = 128;
      const ctx = canvas.getContext('2d');
      const g = ctx.createRadialGradient(64, 64, 10, 64, 64, 60);
      g.addColorStop(0, 'rgba(12, 10, 15, 0.95)');
      g.addColorStop(0.6, 'rgba(40, 20, 50, 0.85)');
      g.addColorStop(1, 'rgba(0, 0, 0, 0)');
      ctx.fillStyle = g; ctx.fillRect(0, 0, 128, 128);
      this.slickMat = new THREE.MeshBasicMaterial({
        map: new THREE.CanvasTexture(canvas),
        transparent: true,
        depthWrite: false
      });
    }

    const mesh = new THREE.Mesh(new THREE.PlaneGeometry(radius * 1.8, radius * 1.8), this.slickMat);
    mesh.rotation.x = -Math.PI / 2;
    mesh.position.copy(pos).add(new THREE.Vector3(0, 0.08, 0));
    this.group.add(mesh);

    const slickObj = {
      mesh,
      position: pos.clone(),
      radius,
      life: 45.0
    };
    this.oilSlicks.push(slickObj);
    this.droppedOilSlicks.push(slickObj);
  }

  fireMissile(startPos, forward, target = null) {
    const missileGroup = new THREE.Group();
    missileGroup.position.copy(startPos).add(new THREE.Vector3(0, 0.6, 0));

    const bodyMat = new THREE.MeshStandardMaterial({ color: 0x2e7d32, roughness: 0.5, metalness: 0.2 });
    const body = new THREE.Mesh(new THREE.SphereGeometry(0.35, 12, 12), bodyMat);
    body.scale.set(0.7, 0.7, 1.4);
    missileGroup.add(body);

    const tipMat = new THREE.MeshStandardMaterial({ color: 0xff6f00, emissive: 0xff3d00, emissiveIntensity: 1.2 });
    const tip = new THREE.Mesh(new THREE.ConeGeometry(0.18, 0.4, 8), tipMat);
    tip.rotation.x = Math.PI / 2;
    tip.position.set(0, 0, 0.45);
    missileGroup.add(tip);

    this.group.add(missileGroup);
    this.activeMissiles.push({
      mesh: missileGroup,
      position: missileGroup.position,
      forward: forward.clone().normalize(),
      target,
      speed: 48.0,
      life: 5.0
    });
  }

  triggerShockwave(pos) {
    const ringMat = new THREE.MeshStandardMaterial({
      color: 0x00f7ff,
      emissive: 0x00f7ff,
      emissiveIntensity: 1.8,
      transparent: true,
      opacity: 0.85,
      wireframe: true
    });
    const ring = new THREE.Mesh(new THREE.TorusGeometry(1.2, 0.35, 8, 24), ringMat);
    ring.rotation.x = Math.PI / 2;
    ring.position.copy(pos).add(new THREE.Vector3(0, 0.3, 0));
    this.group.add(ring);

    this.activeShockwaves.push({
      mesh: ring,
      material: ringMat,
      scale: 1.0,
      life: 0.65,
      maxLife: 0.65
    });
  }

  spawnSparks(pos, count = 16) {
    const sparkMat = new THREE.MeshBasicMaterial({ color: 0xffb703 });
    const geom = new THREE.BoxGeometry(0.1, 0.1, 0.1);
    for (let i = 0; i < count; i++) {
      const spark = new THREE.Mesh(geom, sparkMat);
      spark.position.copy(pos).add(new THREE.Vector3((Math.random() - 0.5) * 0.4, 0.3 + Math.random() * 0.4, (Math.random() - 0.5) * 0.4));
      this.group.add(spark);
      this.activeSparks.push({
        mesh: spark,
        vel: new THREE.Vector3(
          (Math.random() - 0.5) * 12.0,
          Math.random() * 8.0 + 3.0,
          (Math.random() - 0.5) * 12.0
        ),
        life: 0.45
      });
    }
  }

  spawnConfetti() {
    const colors = [0xff0055, 0x00f7ff, 0xffd700, 0x00ff66, 0x9900ff, 0xff8800];
    const geom = new THREE.PlaneGeometry(0.28, 0.28);
    const startSample = this.pathSamples[0];
    for (let i = 0; i < 180; i++) {
      const col = colors[Math.floor(Math.random() * colors.length)];
      const mat = new THREE.MeshBasicMaterial({ color: col, side: THREE.DoubleSide });
      const conf = new THREE.Mesh(geom, mat);
      conf.position.copy(startSample.position).add(new THREE.Vector3(
        (Math.random() - 0.5) * this.width,
        8.0 + Math.random() * 6.0,
        (Math.random() - 0.5) * 15.0
      ));
      this.group.add(conf);
      this.activeConfetti.push({
        mesh: conf,
        vel: new THREE.Vector3(
          (Math.random() - 0.5) * 4.0,
          -(1.5 + Math.random() * 3.0),
          (Math.random() - 0.5) * 4.0
        ),
        rotVel: new THREE.Vector3(Math.random() * 6, Math.random() * 6, Math.random() * 6),
        life: 6.0
      });
    }
  }

  update(dt) {
    // 1. Rotate & float mystery item boxes
    for (const box of this.itemBoxes) {
      if (box.active) {
        box.mesh.rotation.y += dt * 2.2;
        box.mesh.position.y = box.basePos.y + Math.sin(Date.now() * 0.0035 + box.basePos.x) * 0.25;
      } else {
        box.respawnTimer -= dt;
        if (box.respawnTimer <= 0) {
          box.active = true;
          box.mesh.visible = true;
        }
      }
    }

    // 3. Update dropped oil slicks
    for (let i = this.droppedOilSlicks.length - 1; i >= 0; i--) {
      const slick = this.droppedOilSlicks[i];
      slick.life -= dt;
      if (slick.life <= 0) {
        this.group.remove(slick.mesh);
        this.droppedOilSlicks.splice(i, 1);
        const idx = this.oilSlicks.indexOf(slick);
        if (idx !== -1) this.oilSlicks.splice(idx, 1);
      }
    }

    // 4. Update missiles
    for (let i = this.activeMissiles.length - 1; i >= 0; i--) {
      const m = this.activeMissiles[i];
      m.life -= dt;
      if (m.target) {
        const toTarget = new THREE.Vector3().subVectors(m.target.position, m.position).normalize();
        m.forward.lerp(toTarget, dt * 6.0);
        if (m.position.distanceTo(m.target.position) < 2.5) {
          if (m.target.shieldTimer <= 0) {
            if (m.target.triggerSpin) {
              m.target.triggerSpin(1.1);
            } else {
              m.target.spinTimer = 1.1;
              m.target.speed *= 0.5;
            }
          }
          this.triggerShockwave(m.position.clone());
          m.life = 0;
        }
      }
      m.position.addScaledVector(m.forward, m.speed * dt);
      m.mesh.rotation.y = Math.atan2(m.forward.x, m.forward.z);
      if (m.life <= 0) {
        this.group.remove(m.mesh);
        this.activeMissiles.splice(i, 1);
      }
    }

    // 5. Update shockwaves
    for (let i = this.activeShockwaves.length - 1; i >= 0; i--) {
      const sw = this.activeShockwaves[i];
      sw.life -= dt;
      const progress = 1.0 - (sw.life / sw.maxLife);
      const scale = 1.0 + progress * 14.0;
      sw.mesh.scale.set(scale, scale, 1.0);
      sw.material.opacity = Math.max(0, 1.0 - progress);
      if (sw.life <= 0) {
        this.group.remove(sw.mesh);
        this.activeShockwaves.splice(i, 1);
      }
    }

    // 6. Update sparks
    for (let i = this.activeSparks.length - 1; i >= 0; i--) {
      const s = this.activeSparks[i];
      s.life -= dt;
      s.vel.y -= 25.0 * dt;
      s.mesh.position.addScaledVector(s.vel, dt);
      if (s.life <= 0) {
        this.group.remove(s.mesh);
        this.activeSparks.splice(i, 1);
      }
    }

    // 7. Update confetti
    for (let i = this.activeConfetti.length - 1; i >= 0; i--) {
      const c = this.activeConfetti[i];
      c.life -= dt;
      c.mesh.position.addScaledVector(c.vel, dt);
      c.mesh.rotation.x += c.rotVel.x * dt;
      c.mesh.rotation.y += c.rotVel.y * dt;
      c.mesh.rotation.z += c.rotVel.z * dt;
      if (c.life <= 0 || c.mesh.position.y < 0) {
        this.group.remove(c.mesh);
        this.activeConfetti.splice(i, 1);
      }
    }

    // 2. Animate scenery objects
    for (const obj of this.animatedObjects) {
      if (obj.type === 'beacon') {
        obj.mesh.rotation.y += dt * 1.5;
      } else if (obj.type === 'flame') {
        const s = 1.0 + Math.sin(Date.now() * 0.01 + obj.mesh.position.x) * 0.2;
        obj.mesh.scale.set(s, s * 1.2, s);
      } else if (obj.type === 'subwoofer') {
        const s = 1.0 + Math.sin(Date.now() * 0.02) * 0.15;
        obj.mesh.scale.set(s, 1.0, s);
      }
    }
  }

  projectPoint(pos) {
    let closestDistSq = Infinity;
    let closestIndex = 0;

    for (let i = 0; i < this.pathSamples.length; i++) {
      const dSq = pos.distanceToSquared(this.pathSamples[i].position);
      if (dSq < closestDistSq) {
        closestDistSq = dSq;
        closestIndex = i;
      }
    }

    const sample = this.pathSamples[closestIndex];
    const diff = new THREE.Vector3().subVectors(pos, sample.position);
    const lateral = diff.dot(sample.normal);

    return {
      u: sample.u,
      distanceToCenter: lateral,
      nearestPos: sample.position,
      tangent: sample.tangent,
      normal: sample.normal,
      distSq: closestDistSq
    };
  }

  getPointAt(u) {
    return this.curve.getPointAt(((u % 1.0) + 1.0) % 1.0);
  }

  getTangentAt(u) {
    return this.curve.getTangentAt(((u % 1.0) + 1.0) % 1.0);
  }
}
