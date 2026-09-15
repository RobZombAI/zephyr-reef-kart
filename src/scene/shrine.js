import * as THREE from 'three';

export function createShrinePavilion() {
  const group = new THREE.Group();

  const darkWoodMat = new THREE.MeshStandardMaterial({
    color: 0x241a15,
    roughness: 0.7,
    metalness: 0.1
  });

  const vermilionMat = new THREE.MeshStandardMaterial({
    color: 0x8a231b,
    roughness: 0.6,
    metalness: 0.1
  });

  // Greenish-copper patina / dark kawara tile material as visible in frame 022!
  const tileMat = new THREE.MeshStandardMaterial({
    color: 0x42584e,
    roughness: 0.65,
    metalness: 0.2
  });

  const shojiMat = new THREE.MeshStandardMaterial({
    color: 0xffeedd,
    emissive: 0xffaa44,
    emissiveIntensity: 0.45,
    roughness: 0.9
  });

  const stonePlinthMat = new THREE.MeshStandardMaterial({
    color: 0x484643,
    roughness: 0.9
  });

  const width = 6.0;
  const depth = 4.8;
  const height = 3.6;

  // 1. Raised Stone & Wood Foundation
  const stoneBase = new THREE.Mesh(
    new THREE.BoxGeometry(width + 0.8, 0.5, depth + 0.8),
    stonePlinthMat
  );
  stoneBase.position.y = 0.25;
  stoneBase.castShadow = true;
  stoneBase.receiveShadow = true;
  group.add(stoneBase);

  // Wooden deck platform (Engawa)
  const deck = new THREE.Mesh(
    new THREE.BoxGeometry(width + 0.4, 0.15, depth + 0.4),
    darkWoodMat
  );
  deck.position.y = 0.575;
  deck.castShadow = true;
  deck.receiveShadow = true;
  group.add(deck);

  // Steps in front
  for (let s = 0; s < 3; s++) {
    const step = new THREE.Mesh(
      new THREE.BoxGeometry(2.2, 0.12, 0.45),
      stonePlinthMat
    );
    step.position.set(0, 0.45 - s * 0.12, depth / 2 + 0.35 + s * 0.4);
    step.receiveShadow = true;
    group.add(step);
  }

  // 2. Pillars (Columns)
  const pillarRadius = 0.14;
  const pillarH = height;
  const pillarGeom = new THREE.CylinderGeometry(pillarRadius, pillarRadius, pillarH, 12);

  const colPositions = [
    [-width / 2, depth / 2],
    [0, depth / 2],
    [width / 2, depth / 2],
    [-width / 2, -depth / 2],
    [0, -depth / 2],
    [width / 2, -depth / 2],
    [-width / 2, 0],
    [width / 2, 0]
  ];

  for (const [cx, cz] of colPositions) {
    const pillar = new THREE.Mesh(pillarGeom, vermilionMat);
    pillar.position.set(cx, pillarH / 2 + 0.65, cz);
    pillar.castShadow = true;
    group.add(pillar);

    // Stone base for column
    const colBase = new THREE.Mesh(
      new THREE.CylinderGeometry(pillarRadius * 1.4, pillarRadius * 1.6, 0.1, 10),
      stonePlinthMat
    );
    colBase.position.set(cx, 0.7, cz);
    group.add(colBase);
  }

  // 3. Walls & Shoji Screen Lattice
  const wallMat = darkWoodMat;
  // Back wall
  const backWall = new THREE.Mesh(new THREE.BoxGeometry(width - 0.2, pillarH - 0.2, 0.1), wallMat);
  backWall.position.set(0, pillarH / 2 + 0.65, -depth / 2 + 0.05);
  group.add(backWall);

  // Side walls with Shoji screens
  for (const sx of [-1, 1]) {
    const sideWall = new THREE.Mesh(new THREE.BoxGeometry(0.1, pillarH - 0.2, depth - 0.2), wallMat);
    sideWall.position.set(sx * (width / 2 - 0.05), pillarH / 2 + 0.65, 0);
    group.add(sideWall);

    // Shoji screen insert
    const shoji = new THREE.Mesh(new THREE.PlaneGeometry(depth * 0.65, pillarH * 0.65), shojiMat);
    shoji.position.set(sx * (width / 2 - 0.04), pillarH / 2 + 0.65, 0);
    shoji.rotation.y = sx * Math.PI / 2;
    group.add(shoji);
  }

  // Front center open, sides have Shoji panels
  for (const fx of [-width / 3.2, width / 3.2]) {
    const frontShoji = new THREE.Mesh(new THREE.PlaneGeometry(width * 0.32, pillarH * 0.65), shojiMat);
    frontShoji.position.set(fx, pillarH / 2 + 0.65, depth / 2 - 0.05);
    group.add(frontShoji);
  }

  // Interior warm shrine light
  const interiorLight = new THREE.PointLight(0xffaa44, 2.0, 10);
  interiorLight.position.set(0, 2.2, 0);
  group.add(interiorLight);

  // 4. Exposed Rafters / Beams (Taruki) under eaves
  const rafterWidth = width + 2.2;
  const rafterDepth = depth + 2.2;
  const rafterCount = 18;
  for (let r = 0; r < rafterCount; r++) {
    const t = (r / (rafterCount - 1)) * 2 - 1;
    const rafterX = new THREE.Mesh(new THREE.BoxGeometry(rafterWidth, 0.06, 0.08), darkWoodMat);
    rafterX.position.set(0, pillarH + 0.68, t * (depth / 2 + 0.8));
    group.add(rafterX);
  }

  // 5. Authentic Curved Japanese Tiled Roof (Irimoya-style)
  // Replicating the distinct curved silhouette and ridges seen in frame 022!
  const roofGroup = new THREE.Group();
  roofGroup.position.set(0, pillarH + 0.85, 0);

  // Curved roof surface using shape extrusion
  const roofOverhangX = 1.6;
  const roofOverhangZ = 1.5;
  const rw = width / 2 + roofOverhangX;
  const rd = depth / 2 + roofOverhangZ;

  // Multi-tier hip & gable roof
  // Main hipped slope with upturned eaves
  const roofShape = new THREE.Shape();
  roofShape.moveTo(-rw, 0);
  roofShape.quadraticCurveTo(-rw * 0.4, 0.4, 0, 1.8);
  roofShape.quadraticCurveTo(rw * 0.4, 0.4, rw, 0);
  roofShape.lineTo(rw - 0.1, -0.2);
  roofShape.quadraticCurveTo(rw * 0.4, 0.2, 0, 1.6);
  roofShape.quadraticCurveTo(-rw * 0.4, 0.2, -(rw - 0.1), -0.2);
  roofShape.closePath();

  const roofExtrude = new THREE.ExtrudeGeometry(roofShape, {
    depth: rd * 2,
    bevelEnabled: false
  });
  roofExtrude.center();
  const roofMesh = new THREE.Mesh(roofExtrude, tileMat);
  roofMesh.position.y = 0.55;
  roofMesh.castShadow = true;
  roofMesh.receiveShadow = true;
  roofGroup.add(roofMesh);

  // Roof ridge beam (Mune) along top
  const ridgeBeam = new THREE.Mesh(
    new THREE.BoxGeometry(0.35, 0.35, rd * 2 + 0.4),
    darkWoodMat
  );
  ridgeBeam.position.set(0, 1.7, 0);
  ridgeBeam.castShadow = true;
  roofGroup.add(ridgeBeam);

  // Ornamental ridge ends (Onigawara)
  for (const rz of [-1, 1]) {
    const onigawara = new THREE.Mesh(
      new THREE.BoxGeometry(0.5, 0.6, 0.2),
      tileMat
    );
    onigawara.position.set(0, 1.8, rz * (rd + 0.1));
    roofGroup.add(onigawara);
  }

  // Tiled roof ridges (Kawara tile rows) across the surface
  const ridgeLines = 14;
  for (let i = 0; i < ridgeLines; i++) {
    const tz = ((i / (ridgeLines - 1)) * 2 - 1) * (rd - 0.2);
    const tileRib = new THREE.Mesh(
      new THREE.BoxGeometry(rw * 1.95, 0.04, 0.08),
      tileMat
    );
    tileRib.position.set(0, 0.65, tz);
    roofGroup.add(tileRib);
  }

  group.add(roofGroup);

  return group;
}
