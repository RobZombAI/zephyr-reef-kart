import * as THREE from 'three';

export function createTsukubai() {
  const group = new THREE.Group();

  const stoneMat = new THREE.MeshStandardMaterial({
    color: 0x5a5852,
    roughness: 0.95,
    metalness: 0.05
  });

  const waterMat = new THREE.MeshStandardMaterial({
    color: 0x1a262e,
    roughness: 0.1,
    metalness: 0.8
  });

  const bambooMat = new THREE.MeshStandardMaterial({
    color: 0x8a7e52,
    roughness: 0.6,
    metalness: 0.1
  });

  // 1. Carved natural stone basin (hollowed cylinder with noise)
  const basinGeom = new THREE.CylinderGeometry(0.55, 0.48, 0.55, 16);
  // Deform vertices for natural rock surface
  const pos = basinGeom.attributes.position;
  for (let i = 0; i < pos.count; i++) {
    const x = pos.getX(i);
    const y = pos.getY(i);
    const z = pos.getZ(i);
    const bump = (Math.sin(x * 6.0) + Math.cos(z * 6.0)) * 0.04;
    pos.setXYZ(i, x + bump, y, z + bump);
  }
  basinGeom.computeVertexNormals();

  const basin = new THREE.Mesh(basinGeom, stoneMat);
  basin.position.y = 0.28;
  basin.castShadow = true;
  basin.receiveShadow = true;
  group.add(basin);

  // 2. Hollow Water Surface inside
  const waterSurface = new THREE.Mesh(
    new THREE.CylinderGeometry(0.42, 0.42, 0.05, 16),
    waterMat
  );
  waterSurface.position.y = 0.50;
  group.add(waterSurface);

  // 3. Bamboo Spout (Kakehi)
  const spoutGroup = new THREE.Group();
  const vertBamboo = new THREE.Mesh(
    new THREE.CylinderGeometry(0.04, 0.04, 0.75, 8),
    bambooMat
  );
  vertBamboo.position.set(-0.55, 0.38, -0.2);
  spoutGroup.add(vertBamboo);

  const horizBamboo = new THREE.Mesh(
    new THREE.CylinderGeometry(0.035, 0.035, 0.5, 8),
    bambooMat
  );
  horizBamboo.rotation.z = Math.PI / 2;
  horizBamboo.position.set(-0.35, 0.68, -0.2);
  spoutGroup.add(horizBamboo);

  group.add(spoutGroup);

  // 4. Bamboo Ladle (Hishaku) resting on top rim
  const hishakuGroup = new THREE.Group();
  const cup = new THREE.Mesh(
    new THREE.CylinderGeometry(0.065, 0.06, 0.07, 10),
    bambooMat
  );
  cup.position.set(0.2, 0.58, 0.1);
  hishakuGroup.add(cup);

  const handle = new THREE.Mesh(
    new THREE.CylinderGeometry(0.012, 0.012, 0.65, 6),
    bambooMat
  );
  handle.rotation.z = Math.PI / 2.3;
  handle.rotation.y = 0.4;
  handle.position.set(0.0, 0.58, 0.1);
  hishakuGroup.add(handle);

  group.add(hishakuGroup);

  return group;
}
