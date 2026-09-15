import * as THREE from 'three';

export function createStoneLantern({ lightColor = 0xff9c38, lightIntensity = 2.8, distance = 16 } = {}) {
  const group = new THREE.Group();

  const graniteMat = new THREE.MeshStandardMaterial({
    color: 0x54524e,
    roughness: 0.9,
    metalness: 0.05
  });

  const mossMat = new THREE.MeshStandardMaterial({
    color: 0x3d4f2e,
    roughness: 0.95,
    metalness: 0.0
  });

  const fireMat = new THREE.MeshBasicMaterial({
    color: 0xffe099
  });

  // 1. Base (Kiso) - Six-sided or stepped square base
  const base1 = new THREE.Mesh(new THREE.CylinderGeometry(0.55, 0.65, 0.22, 6), graniteMat);
  base1.position.y = 0.11;
  base1.castShadow = true;
  base1.receiveShadow = true;
  group.add(base1);

  const base2 = new THREE.Mesh(new THREE.CylinderGeometry(0.42, 0.50, 0.18, 6), graniteMat);
  base2.position.y = 0.31;
  base2.castShadow = true;
  group.add(base2);

  // 2. Shaft (Sao) - Carved stone column
  const shaft = new THREE.Mesh(new THREE.CylinderGeometry(0.24, 0.28, 0.9, 6), graniteMat);
  shaft.position.y = 0.85;
  shaft.castShadow = true;
  shaft.receiveShadow = true;
  group.add(shaft);

  // Decorative ring on shaft
  const ring = new THREE.Mesh(new THREE.TorusGeometry(0.26, 0.04, 6, 6), graniteMat);
  ring.rotation.x = Math.PI / 2;
  ring.position.y = 0.85;
  group.add(ring);

  // 3. Middle Platform (Chūdai)
  const chudai = new THREE.Mesh(new THREE.CylinderGeometry(0.65, 0.32, 0.25, 6), graniteMat);
  chudai.position.y = 1.42;
  chudai.castShadow = true;
  chudai.receiveShadow = true;
  group.add(chudai);

  // 4. Light Chamber (Hibukuro) - Six pillars with open lattice
  const hibukuroGroup = new THREE.Group();
  hibukuroGroup.position.y = 1.55;

  const hibukuroFloor = new THREE.Mesh(new THREE.CylinderGeometry(0.52, 0.52, 0.08, 6), graniteMat);
  hibukuroFloor.position.y = 0.04;
  hibukuroGroup.add(hibukuroFloor);

  // 6 Corner Posts
  const postRadius = 0.42;
  for (let i = 0; i < 6; i++) {
    const angle = (i / 6) * Math.PI * 2;
    const post = new THREE.Mesh(new THREE.BoxGeometry(0.08, 0.45, 0.08), graniteMat);
    post.position.set(Math.cos(angle) * postRadius, 0.27, Math.sin(angle) * postRadius);
    post.rotation.y = -angle;
    hibukuroGroup.add(post);
  }

  // Glowing flame interior
  const flameMesh = new THREE.Mesh(
    new THREE.DodecahedronGeometry(0.12, 1),
    fireMat
  );
  flameMesh.position.set(0, 0.26, 0);
  hibukuroGroup.add(flameMesh);

  // Point light for illumination
  const light = new THREE.PointLight(lightColor, lightIntensity, distance, 1.8);
  light.position.set(0, 0.28, 0);
  light.castShadow = true;
  light.shadow.bias = -0.002;
  hibukuroGroup.add(light);

  group.add(hibukuroGroup);

  // 5. Roof (Kasa) - Sweeping hexagonal roof with upturned corners (warabite)
  const kasaGeom = new THREE.CylinderGeometry(0.20, 0.85, 0.32, 6);
  const kasa = new THREE.Mesh(kasaGeom, graniteMat);
  kasa.position.y = 2.18;
  kasa.castShadow = true;
  kasa.receiveShadow = true;
  group.add(kasa);

  // Moss patch on roof
  const mossPatch = new THREE.Mesh(new THREE.CylinderGeometry(0.18, 0.55, 0.05, 6), mossMat);
  mossPatch.position.y = 2.26;
  group.add(mossPatch);

  // 6. Top Finial Jewel (Hōju / Kurin)
  const hojuBase = new THREE.Mesh(new THREE.CylinderGeometry(0.16, 0.22, 0.12, 6), graniteMat);
  hojuBase.position.y = 2.40;
  group.add(hojuBase);

  const jewel = new THREE.Mesh(new THREE.SphereGeometry(0.14, 8, 8), graniteMat);
  jewel.scale.set(1, 1.35, 1);
  jewel.position.y = 2.56;
  group.add(jewel);

  // Animation hook for subtle flickering
  group.userData = {
    light,
    flameMesh,
    baseIntensity: lightIntensity,
    update: (time) => {
      const flicker = (Math.sin(time * 12.0) * 0.5 + Math.sin(time * 23.0) * 0.3 + (Math.random() - 0.5) * 0.2) * 0.25;
      light.intensity = group.userData.baseIntensity * (1.0 + flicker);
      const s = 1.0 + flicker * 0.3;
      flameMesh.scale.set(s, s * 1.2, s);
    }
  };

  return group;
}
