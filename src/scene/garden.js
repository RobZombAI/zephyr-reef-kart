import * as THREE from 'three';
import { WaterShader } from '../shaders/waterShader.js';
import { GrassShader } from '../shaders/grassShader.js';

export function createGarden(config) {
  const group = new THREE.Group();

  // 1. Terrain Material & Geometry
  const terrainMat = new THREE.MeshStandardMaterial({
    color: 0x222a1c,
    roughness: 0.95,
    metalness: 0.05
  });

  const terrainWidth = 60;
  const terrainDepth = 60;
  const terrainGeom = new THREE.PlaneGeometry(terrainWidth, terrainDepth, 90, 90);
  terrainGeom.rotateX(-Math.PI / 2);

  const posAttr = terrainGeom.attributes.position;
  for (let i = 0; i < posAttr.count; i++) {
    const x = posAttr.getX(i);
    const z = posAttr.getZ(i);

    let y = 0.0;

    // Pond depression
    const pDist = Math.hypot((x - (-2.5)) / 1.15, (z - (-4.0)) / 0.9);
    if (pDist < 8.0) {
      const pondDepth = Math.cos((pDist / 8.0) * Math.PI) * 0.5 + 0.5;
      y -= pondDepth * 0.95;
    }

    // Shrine hill in background
    const hillDist = Math.hypot(x - 1.8, z - (-19.5));
    if (hillDist < 14.0) {
      y += Math.cos((hillDist / 14.0) * Math.PI * 0.5) * 1.8;
    }

    // Gentle perimeter berms
    const edgeDist = Math.hypot(x, z);
    if (edgeDist > 16.0) {
      y += (edgeDist - 16.0) * 0.12;
    }

    // Micro noise
    y += (Math.sin(x * 0.8) + Math.cos(z * 0.7)) * 0.08;

    posAttr.setY(i, y);
  }
  terrainGeom.computeVertexNormals();

  const terrain = new THREE.Mesh(terrainGeom, terrainMat);
  terrain.receiveShadow = true;
  group.add(terrain);

  // 2. The Pond & Dynamic Water Mesh
  const pondRadiusX = 7.8;
  const pondRadiusZ = 6.6;
  const waterGeom = new THREE.CircleGeometry(1.0, 64);
  waterGeom.rotateX(-Math.PI / 2);
  waterGeom.scale(pondRadiusX, 1.0, pondRadiusZ);

  const waterMaterial = new THREE.ShaderMaterial({
    uniforms: THREE.UniformsUtils.clone(WaterShader.uniforms),
    vertexShader: WaterShader.vertexShader,
    fragmentShader: WaterShader.fragmentShader,
    transparent: true,
    depthWrite: false
  });

  const waterMesh = new THREE.Mesh(waterGeom, waterMaterial);
  waterMesh.position.set(-2.5, -0.05, -4.0);
  group.add(waterMesh);

  // Smooth river stones / pebbles lining the pond edge
  const pebbleMat = new THREE.MeshStandardMaterial({
    color: 0x4a4742,
    roughness: 0.85
  });
  const pebbleGroup = new THREE.Group();
  const pebbleCount = 45;
  for (let i = 0; i < pebbleCount; i++) {
    const angle = (i / pebbleCount) * Math.PI * 2;
    const px = -2.5 + Math.cos(angle) * (pondRadiusX * 0.98) + (Math.random() - 0.5) * 0.4;
    const pz = -4.0 + Math.sin(angle) * (pondRadiusZ * 0.98) + (Math.random() - 0.5) * 0.4;
    const pebble = new THREE.Mesh(
      new THREE.DodecahedronGeometry(0.22 + Math.random() * 0.18, 1),
      pebbleMat
    );
    pebble.scale.set(1.2, 0.6, 1.0);
    pebble.position.set(px, 0.02, pz);
    pebble.rotation.set(Math.random(), Math.random(), Math.random());
    pebble.receiveShadow = true;
    pebbleGroup.add(pebble);
  }
  group.add(pebbleGroup);

  // 3. Stepping Stone Path (Tobi-ishi)
  const stoneMat = new THREE.MeshStandardMaterial({
    color: 0x8a847b,
    roughness: 0.82,
    metalness: 0.05
  });

  const pathPoints = [
    new THREE.Vector3(4.5, 0.06, 14.5),
    new THREE.Vector3(4.2, 0.06, 12.8),
    new THREE.Vector3(3.9, 0.06, 11.0),
    new THREE.Vector3(3.6, 0.06, 9.2),
    new THREE.Vector3(3.4, 0.06, 7.4),
    new THREE.Vector3(3.1, 0.06, 5.6),
    new THREE.Vector3(2.8, 0.06, 3.8),
    new THREE.Vector3(2.5, 0.06, 2.0),
    new THREE.Vector3(2.2, 0.06, 0.2),
    new THREE.Vector3(1.9, 0.06, -1.6),
    new THREE.Vector3(1.6, 0.06, -3.4),
    new THREE.Vector3(1.3, 0.06, -5.2),
    new THREE.Vector3(1.0, 0.08, -7.0),
    new THREE.Vector3(0.7, 0.12, -8.8),
    new THREE.Vector3(0.4, 0.20, -10.6),
    new THREE.Vector3(0.1, 0.35, -12.4),
    new THREE.Vector3(-0.2, 0.55, -14.2)
  ];

  const stoneGroup = new THREE.Group();
  pathPoints.forEach((pt, idx) => {
    const rx = 0.58 + (idx % 3) * 0.07;
    const rz = 0.48 + ((idx + 1) % 3) * 0.06;
    const stoneGeom = new THREE.CylinderGeometry(rx, rx * 1.08, 0.14, 14);
    const pos = stoneGeom.attributes.position;
    for (let i = 0; i < pos.count; i++) {
      const sx = pos.getX(i);
      const sy = pos.getY(i);
      const sz = pos.getZ(i);
      const deform = (Math.sin(sx * 8.0) * Math.cos(sz * 8.0)) * 0.04;
      pos.setXYZ(i, sx + deform, sy, sz + deform);
    }
    stoneGeom.computeVertexNormals();

    const stone = new THREE.Mesh(stoneGeom, stoneMat);
    stone.position.copy(pt);
    stone.rotation.y = (idx * 1.3) % (Math.PI * 2);
    stone.scale.set(1.0, 1.0, rz / rx);
    stone.castShadow = true;
    stone.receiveShadow = true;
    stoneGroup.add(stone);
  });
  group.add(stoneGroup);

  // 4. Floating Water Lilies / Lotus Pads
  const lilyPadMat = new THREE.MeshStandardMaterial({
    color: 0x244a25,
    roughness: 0.6,
    metalness: 0.1,
    side: THREE.DoubleSide
  });

  const flowerMat = new THREE.MeshStandardMaterial({
    color: 0xfff0f5,
    roughness: 0.4,
    emissive: 0xffb7c5,
    emissiveIntensity: 0.3
  });

  const lilyGroup = new THREE.Group();
  const padShape = new THREE.Shape();
  padShape.absarc(0, 0, 0.38, 0.25, Math.PI * 2 - 0.25, false);
  padShape.lineTo(0, 0);
  const padGeom = new THREE.ShapeGeometry(padShape);
  padGeom.rotateX(-Math.PI / 2);

  const lilyPositions = [
    [-1.5, -2.5], [-3.2, -3.0], [-1.0, -4.5], [-4.0, -5.2],
    [-2.2, -6.0], [-5.2, -3.8], [-0.5, -3.2], [-3.8, -2.0],
    [-2.0, -5.0], [-4.5, -4.5], [-1.2, -5.5], [-3.5, -6.2]
  ];

  lilyPositions.forEach(([lx, lz], idx) => {
    const pad = new THREE.Mesh(padGeom, lilyPadMat);
    pad.position.set(lx, -0.03, lz);
    pad.rotation.y = idx * 1.7;
    const s = 0.7 + (idx % 4) * 0.15;
    pad.scale.set(s, s, s);
    lilyGroup.add(pad);

    if (idx % 3 === 0) {
      const flower = new THREE.Group();
      for (let p = 0; p < 8; p++) {
        const petal = new THREE.Mesh(
          new THREE.ConeGeometry(0.045, 0.14, 4),
          flowerMat
        );
        petal.rotation.z = Math.PI / 3.5;
        petal.rotation.y = (p / 8) * Math.PI * 2;
        flower.add(petal);
      }
      flower.position.set(lx, 0.01, lz);
      lilyGroup.add(flower);
    }
  });
  group.add(lilyGroup);

  // 5. Instanced Tapered Grass Blades
  // High quality tapered blade geometry (5 vertices)
  const bladeGeom = new THREE.BufferGeometry();
  const w = 0.045;
  const h = 0.42;
  const vertices = new Float32Array([
    -w/2, 0, 0,
     w/2, 0, 0,
    -w/3, h*0.5, 0,
     w/3, h*0.5, 0,
     0,   h,     0
  ]);
  const uvs = new Float32Array([
    0, 0,
    1, 0,
    0, 0.5,
    1, 0.5,
    0.5, 1.0
  ]);
  const indices = [
    0, 1, 2,
    1, 3, 2,
    2, 3, 4
  ];
  bladeGeom.setAttribute('position', new THREE.BufferAttribute(vertices, 3));
  bladeGeom.setAttribute('uv', new THREE.BufferAttribute(uvs, 2));
  bladeGeom.setIndex(indices);
  bladeGeom.computeVertexNormals();

  const grassCount = 11000;
  const instancedGrassGeom = new THREE.InstancedBufferGeometry();
  instancedGrassGeom.index = bladeGeom.index;
  instancedGrassGeom.attributes.position = bladeGeom.attributes.position;
  instancedGrassGeom.attributes.uv = bladeGeom.attributes.uv;
  instancedGrassGeom.attributes.normal = bladeGeom.attributes.normal;

  const offsets = [];
  const scales = [];
  const rotations = [];

  for (let i = 0; i < grassCount; i++) {
    const gx = (Math.random() - 0.5) * 36;
    const gz = (Math.random() - 0.5) * 36;

    const pDist = Math.hypot((gx - (-2.5)) / 1.15, (gz - (-4.0)) / 0.9);
    if (pDist < 7.2) continue;

    let onStone = false;
    for (const pt of pathPoints) {
      if (Math.hypot(gx - pt.x, gz - pt.z) < 0.62) {
        onStone = true;
        break;
      }
    }
    if (onStone) continue;

    let gy = 0.0;
    if (pDist < 8.0) {
      const pondDepth = Math.cos((pDist / 8.0) * Math.PI) * 0.5 + 0.5;
      gy -= pondDepth * 0.95;
    }
    const hillDist = Math.hypot(gx - 1.8, gz - (-19.5));
    if (hillDist < 14.0) {
      gy += Math.cos((hillDist / 14.0) * Math.PI * 0.5) * 1.8;
    }
    gy += (Math.sin(gx * 0.8) + Math.cos(gz * 0.7)) * 0.08;

    offsets.push(gx, gy, gz);
    scales.push(0.65 + Math.random() * 0.65);
    rotations.push(Math.random() * Math.PI * 2);
  }

  instancedGrassGeom.setAttribute('offset', new THREE.InstancedBufferAttribute(new Float32Array(offsets), 3));
  instancedGrassGeom.setAttribute('scale', new THREE.InstancedBufferAttribute(new Float32Array(scales), 1));
  instancedGrassGeom.setAttribute('rotation', new THREE.InstancedBufferAttribute(new Float32Array(rotations), 1));

  const grassMaterial = new THREE.ShaderMaterial({
    uniforms: THREE.UniformsUtils.clone(GrassShader.uniforms),
    vertexShader: GrassShader.vertexShader,
    fragmentShader: GrassShader.fragmentShader,
    side: THREE.DoubleSide
  });

  const grassMesh = new THREE.Mesh(instancedGrassGeom, grassMaterial);
  group.add(grassMesh);

  return {
    group,
    waterMesh,
    waterMaterial,
    grassMaterial,
    pondCenter: new THREE.Vector3(-2.5, 0, -4.0),
    pondRadiusX,
    pondRadiusZ
  };
}
