import * as THREE from 'three';

function createBarkTexture() {
  const canvas = document.createElement('canvas');
  canvas.width = 256;
  canvas.height = 256;
  const ctx = canvas.getContext('2d');
  ctx.fillStyle = '#2b1e19';
  ctx.fillRect(0, 0, 256, 256);
  ctx.fillStyle = '#3d2b24';
  for (let i = 0; i < 180; i++) {
    const x = Math.random() * 256;
    const w = 1.5 + Math.random() * 3;
    const y = Math.random() * 256;
    const h = 15 + Math.random() * 70;
    ctx.fillRect(x, y, w, h);
  }
  const tex = new THREE.CanvasTexture(canvas);
  tex.wrapS = THREE.RepeatWrapping;
  tex.wrapT = THREE.RepeatWrapping;
  tex.repeat.set(2, 4);
  return tex;
}

function createBlossomTexture() {
  const canvas = document.createElement('canvas');
  canvas.width = 128;
  canvas.height = 128;
  const ctx = canvas.getContext('2d');
  ctx.clearRect(0, 0, 128, 128);

  const cx = 64, cy = 64, r = 44;
  for (let i = 0; i < 5; i++) {
    const angle = (i / 5) * Math.PI * 2;
    const px = cx + Math.cos(angle) * r * 0.48;
    const py = cy + Math.sin(angle) * r * 0.48;
    const grad = ctx.createRadialGradient(px, py, 2, px, py, r * 0.45);
    grad.addColorStop(0, '#ffffff');
    grad.addColorStop(0.7, '#ffcce0');
    grad.addColorStop(1, '#ff99be');
    ctx.fillStyle = grad;
    ctx.beginPath();
    ctx.arc(px, py, r * 0.45, 0, Math.PI * 2);
    ctx.fill();
  }
  // Pistil center
  ctx.fillStyle = '#d94f78';
  ctx.beginPath();
  ctx.arc(cx, cy, 11, 0, Math.PI * 2);
  ctx.fill();

  return new THREE.CanvasTexture(canvas);
}

export function createSakuraTree({ scale = 1.0 } = {}) {
  const treeGroup = new THREE.Group();

  const barkTex = createBarkTexture();
  const barkMat = new THREE.MeshStandardMaterial({
    map: barkTex,
    roughness: 0.92,
    metalness: 0.05
  });

  const blossomTex = createBlossomTexture();

  // Fine blossom cloud materials
  const blossomMat1 = new THREE.MeshStandardMaterial({
    map: blossomTex,
    color: 0xffe8f2,
    emissive: 0xffa8c2,
    emissiveIntensity: 0.35,
    roughness: 0.65,
    metalness: 0.05,
    alphaTest: 0.25,
    side: THREE.DoubleSide
  });

  const blossomMat2 = new THREE.MeshStandardMaterial({
    map: blossomTex,
    color: 0xffd1e4,
    emissive: 0xff90b2,
    emissiveIntensity: 0.38,
    roughness: 0.65,
    metalness: 0.05,
    alphaTest: 0.25,
    side: THREE.DoubleSide
  });

  const blossomMat3 = new THREE.MeshStandardMaterial({
    map: blossomTex,
    color: 0xffffff,
    emissive: 0xffd4e6,
    emissiveIntensity: 0.30,
    roughness: 0.6,
    metalness: 0.05,
    alphaTest: 0.25,
    side: THREE.DoubleSide
  });

  const materials = [blossomMat1, blossomMat2, blossomMat3];

  function createBranch(points, startRadius, endRadius, radialSeg = 8) {
    const curve = new THREE.CatmullRomCurve3(points);
    const segments = points.length * 5;
    const geom = new THREE.BufferGeometry();
    const pos = [];
    const norm = [];
    const uvs = [];
    const indices = [];

    const curvePoints = curve.getPoints(segments);
    const tangents = [];
    for (let i = 0; i <= segments; i++) {
      tangents.push(curve.getTangent(i / segments));
    }

    for (let i = 0; i <= segments; i++) {
      const t = i / segments;
      const pt = curvePoints[i];
      const r = THREE.MathUtils.lerp(startRadius, endRadius, t);
      const tangent = tangents[i];

      let up = new THREE.Vector3(0, 1, 0);
      if (Math.abs(tangent.y) > 0.95) up = new THREE.Vector3(1, 0, 0);
      const normal = new THREE.Vector3().crossVectors(tangent, up).normalize();
      const binormal = new THREE.Vector3().crossVectors(tangent, normal).normalize();

      for (let j = 0; j <= radialSeg; j++) {
        const phi = (j / radialSeg) * Math.PI * 2;
        const sinPhi = Math.sin(phi);
        const cosPhi = Math.cos(phi);

        const surfaceNorm = new THREE.Vector3()
          .addScaledVector(normal, cosPhi)
          .addScaledVector(binormal, sinPhi)
          .normalize();

        const v = new THREE.Vector3().copy(pt).addScaledVector(surfaceNorm, r);
        pos.push(v.x, v.y, v.z);
        norm.push(surfaceNorm.x, surfaceNorm.y, surfaceNorm.z);
        uvs.push(j / radialSeg, t * 3.0);
      }
    }

    for (let i = 0; i < segments; i++) {
      for (let j = 0; j < radialSeg; j++) {
        const a = i * (radialSeg + 1) + j;
        const b = (i + 1) * (radialSeg + 1) + j;
        const c = (i + 1) * (radialSeg + 1) + (j + 1);
        const d = i * (radialSeg + 1) + (j + 1);
        indices.push(a, b, d);
        indices.push(b, c, d);
      }
    }

    geom.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
    geom.setAttribute('normal', new THREE.Float32BufferAttribute(norm, 3));
    geom.setAttribute('uv', new THREE.Float32BufferAttribute(uvs, 2));
    geom.setIndex(indices);

    const mesh = new THREE.Mesh(geom, barkMat);
    mesh.castShadow = true;
    mesh.receiveShadow = true;
    return mesh;
  }

  const branchDefs = [
    {
      points: [
        new THREE.Vector3(0, 0, 0),
        new THREE.Vector3(0.15, 0.7, 0.1),
        new THREE.Vector3(0.08, 1.5, 0.22),
        new THREE.Vector3(-0.25, 2.2, 0.32),
        new THREE.Vector3(-0.55, 2.9, 0.42)
      ],
      rStart: 0.34,
      rEnd: 0.17
    },
    {
      points: [
        new THREE.Vector3(0.08, 1.5, 0.22),
        new THREE.Vector3(-0.6, 1.9, 0.65),
        new THREE.Vector3(-1.3, 2.2, 1.1),
        new THREE.Vector3(-2.1, 2.5, 1.4),
        new THREE.Vector3(-2.8, 2.7, 1.6)
      ],
      rStart: 0.20,
      rEnd: 0.08
    },
    {
      points: [
        new THREE.Vector3(-0.25, 2.2, 0.32),
        new THREE.Vector3(-0.7, 2.8, 0.55),
        new THREE.Vector3(-1.2, 3.3, 0.65),
        new THREE.Vector3(-1.7, 3.7, 0.45)
      ],
      rStart: 0.17,
      rEnd: 0.06
    },
    {
      points: [
        new THREE.Vector3(-0.25, 2.2, 0.32),
        new THREE.Vector3(0.45, 2.6, -0.2),
        new THREE.Vector3(1.1, 2.9, -0.45),
        new THREE.Vector3(1.7, 3.1, -0.7)
      ],
      rStart: 0.17,
      rEnd: 0.06
    },
    {
      points: [
        new THREE.Vector3(-0.55, 2.9, 0.42),
        new THREE.Vector3(-0.7, 3.5, 0.32),
        new THREE.Vector3(-0.9, 4.0, 0.18),
        new THREE.Vector3(-1.1, 4.3, -0.1)
      ],
      rStart: 0.15,
      rEnd: 0.05
    },
    {
      points: [
        new THREE.Vector3(-1.3, 2.2, 1.1),
        new THREE.Vector3(-1.7, 2.6, 0.75),
        new THREE.Vector3(-2.1, 3.0, 0.45)
      ],
      rStart: 0.10,
      rEnd: 0.04
    },
    {
      points: [
        new THREE.Vector3(-2.1, 2.5, 1.4),
        new THREE.Vector3(-2.5, 2.3, 1.9),
        new THREE.Vector3(-3.0, 2.1, 2.2)
      ],
      rStart: 0.09,
      rEnd: 0.04
    },
    {
      points: [
        new THREE.Vector3(1.1, 2.9, -0.45),
        new THREE.Vector3(1.5, 3.4, -0.28),
        new THREE.Vector3(1.9, 3.7, -0.08)
      ],
      rStart: 0.09,
      rEnd: 0.04
    }
  ];

  const rootPoints = [
    [new THREE.Vector3(0, 0.3, 0), new THREE.Vector3(0.45, 0.1, 0.18), new THREE.Vector3(0.85, 0.0, 0.35)],
    [new THREE.Vector3(0, 0.3, 0), new THREE.Vector3(-0.35, 0.1, 0.25), new THREE.Vector3(-0.75, 0.0, 0.45)],
    [new THREE.Vector3(0, 0.3, 0), new THREE.Vector3(-0.18, 0.1, -0.45), new THREE.Vector3(-0.45, 0.0, -0.75)],
    [new THREE.Vector3(0, 0.3, 0), new THREE.Vector3(0.35, 0.1, -0.35), new THREE.Vector3(0.65, 0.0, -0.55)]
  ];

  for (const b of branchDefs) {
    treeGroup.add(createBranch(b.points, b.rStart, b.rEnd));
  }
  for (const r of rootPoints) {
    treeGroup.add(createBranch(r, 0.16, 0.05, 6));
  }

  // Cross-quad blossom clusters for realistic volumetric foliage
  const quadGroup = new THREE.Group();
  const clusterCenters = [
    new THREE.Vector3(-2.8, 2.7, 1.6),
    new THREE.Vector3(-3.0, 2.1, 2.2),
    new THREE.Vector3(-2.4, 2.6, 1.7),
    new THREE.Vector3(-2.1, 3.0, 0.45),
    new THREE.Vector3(-1.7, 3.7, 0.45),
    new THREE.Vector3(-1.2, 3.3, 0.65),
    new THREE.Vector3(-1.1, 4.3, -0.1),
    new THREE.Vector3(-0.9, 4.0, 0.18),
    new THREE.Vector3(1.7, 3.1, -0.7),
    new THREE.Vector3(1.9, 3.7, -0.08),
    new THREE.Vector3(1.1, 2.9, -0.45),
    new THREE.Vector3(-0.7, 3.5, 0.32),
    new THREE.Vector3(-1.4, 3.1, 1.0),
    new THREE.Vector3(-2.3, 2.8, 0.95),
    new THREE.Vector3(0.5, 3.2, -0.35),
    new THREE.Vector3(-0.3, 3.7, 0.18),
    new THREE.Vector3(-2.6, 3.2, 1.25),
    new THREE.Vector3(-1.6, 3.9, 0.08),
    new THREE.Vector3(1.4, 3.4, -0.55),
    new THREE.Vector3(-0.5, 4.1, 0.45)
  ];

  // Helper: 3 intersecting planes (cross-quads)
  function createCrossQuad(size, mat) {
    const g = new THREE.Group();
    const geom = new THREE.PlaneGeometry(size, size);
    const p1 = new THREE.Mesh(geom, mat);
    const p2 = new THREE.Mesh(geom, mat);
    p2.rotation.y = Math.PI / 3;
    const p3 = new THREE.Mesh(geom, mat);
    p3.rotation.y = (Math.PI / 3) * 2;
    g.add(p1, p2, p3);
    return g;
  }

  clusterCenters.forEach((center, k) => {
    const count = 4 + Math.floor(Math.random() * 3);
    for (let c = 0; c < count; c++) {
      const mat = materials[(k + c) % materials.length];
      const size = 0.55 + Math.random() * 0.45;
      const quad = createCrossQuad(size, mat);

      const offset = new THREE.Vector3(
        (Math.random() - 0.5) * 0.65,
        (Math.random() - 0.5) * 0.45,
        (Math.random() - 0.5) * 0.65
      );
      quad.position.copy(center).add(offset);
      quad.rotation.set(
        Math.random() * Math.PI,
        Math.random() * Math.PI,
        Math.random() * Math.PI
      );
      quadGroup.add(quad);
    }
  });

  treeGroup.add(quadGroup);
  treeGroup.scale.setScalar(scale);
  return treeGroup;
}
