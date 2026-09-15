import * as THREE from 'three';

export function createToriiGate() {
  const group = new THREE.Group();

  const vermilionMat = new THREE.MeshStandardMaterial({
    color: 0xa82b20,
    roughness: 0.55,
    metalness: 0.1
  });

  const blackWoodMat = new THREE.MeshStandardMaterial({
    color: 0x1a1616,
    roughness: 0.6,
    metalness: 0.15
  });

  const stoneMat = new THREE.MeshStandardMaterial({
    color: 0x5a5752,
    roughness: 0.85,
    metalness: 0.05
  });

  const goldMat = new THREE.MeshStandardMaterial({
    color: 0xd4af37,
    roughness: 0.35,
    metalness: 0.8
  });

  const pillarSpacing = 3.8;
  const pillarHeight = 3.5;
  const pillarRadius = 0.20;

  // 1. Stone Base Sleeves (Kamebara)
  const baseGeom = new THREE.CylinderGeometry(pillarRadius * 1.5, pillarRadius * 1.7, 0.38, 16);
  const leftBase = new THREE.Mesh(baseGeom, stoneMat);
  leftBase.position.set(-pillarSpacing / 2, 0.19, 0);
  leftBase.castShadow = true;
  leftBase.receiveShadow = true;
  group.add(leftBase);

  const rightBase = leftBase.clone();
  rightBase.position.set(pillarSpacing / 2, 0.19, 0);
  group.add(rightBase);

  // 2. Upright Pillars (Hashira) with slight inward tilt
  const pillarGeom = new THREE.CylinderGeometry(pillarRadius * 0.9, pillarRadius, pillarHeight, 20);
  
  const leftPillar = new THREE.Mesh(pillarGeom, vermilionMat);
  leftPillar.position.set(-pillarSpacing / 2 + 0.06, pillarHeight / 2 + 0.3, 0);
  leftPillar.rotation.z = -0.032;
  leftPillar.castShadow = true;
  leftPillar.receiveShadow = true;
  group.add(leftPillar);

  const rightPillar = new THREE.Mesh(pillarGeom, vermilionMat);
  rightPillar.position.set(pillarSpacing / 2 - 0.06, pillarHeight / 2 + 0.3, 0);
  rightPillar.rotation.z = 0.032;
  rightPillar.castShadow = true;
  rightPillar.receiveShadow = true;
  group.add(rightPillar);

  // 3. Lower Tie-Beam (Nuki)
  const nukiWidth = pillarSpacing + 1.1;
  const nukiGeom = new THREE.BoxGeometry(nukiWidth, 0.22, 0.20);
  const nuki = new THREE.Mesh(nukiGeom, vermilionMat);
  nuki.position.set(0, pillarHeight * 0.76, 0);
  nuki.castShadow = true;
  nuki.receiveShadow = true;
  group.add(nuki);

  const wedgeGeom = new THREE.BoxGeometry(0.08, 0.28, 0.24);
  const leftWedge = new THREE.Mesh(wedgeGeom, blackWoodMat);
  leftWedge.position.set(-pillarSpacing / 2 - 0.28, pillarHeight * 0.76, 0);
  group.add(leftWedge);

  const rightWedge = leftWedge.clone();
  rightWedge.position.set(pillarSpacing / 2 + 0.28, pillarHeight * 0.76, 0);
  group.add(rightWedge);

  // 4. Second Horizontal Beam (Shimaki)
  const shimakiWidth = pillarSpacing + 1.6;
  const shimakiGeom = new THREE.BoxGeometry(shimakiWidth, 0.24, 0.32);
  const shimaki = new THREE.Mesh(shimakiGeom, vermilionMat);
  shimaki.position.set(0, pillarHeight + 0.25, 0);
  shimaki.castShadow = true;
  shimaki.receiveShadow = true;
  group.add(shimaki);

  // 5. Top Curved Beam (Kasagi) with upward flared ends
  const kasagiWidth = pillarSpacing + 2.2;
  const kasagiShape = new THREE.Shape();
  const hw = kasagiWidth / 2;
  const h = 0.34;
  const curveUp = 0.20;

  kasagiShape.moveTo(-hw, 0);
  kasagiShape.quadraticCurveTo(0, -0.04, hw, 0);
  kasagiShape.lineTo(hw + 0.14, h + curveUp);
  kasagiShape.quadraticCurveTo(0, h, -(hw + 0.14), h + curveUp);
  kasagiShape.closePath();

  const extrudeSettings = {
    depth: 0.40,
    bevelEnabled: true,
    bevelSegments: 2,
    steps: 1,
    bevelSize: 0.03,
    bevelThickness: 0.03
  };

  const kasagiGeom = new THREE.ExtrudeGeometry(kasagiShape, extrudeSettings);
  kasagiGeom.center();
  const kasagi = new THREE.Mesh(kasagiGeom, vermilionMat);
  kasagi.position.set(0, pillarHeight + 0.48, 0);
  kasagi.castShadow = true;
  kasagi.receiveShadow = true;
  group.add(kasagi);

  // Black copper cap covering top of kasagi (kasagi-yane)
  const capShape = new THREE.Shape();
  capShape.moveTo(-hw - 0.04, 0);
  capShape.quadraticCurveTo(0, -0.03, hw + 0.04, 0);
  capShape.lineTo(hw + 0.16, 0.10 + curveUp);
  capShape.quadraticCurveTo(0, 0.10, -(hw + 0.16), 0.10 + curveUp);
  capShape.closePath();

  const capGeom = new THREE.ExtrudeGeometry(capShape, {
    depth: 0.44,
    bevelEnabled: false
  });
  capGeom.center();
  const kasagiCap = new THREE.Mesh(capGeom, blackWoodMat);
  kasagiCap.position.set(0, pillarHeight + 0.62, 0);
  kasagiCap.castShadow = true;
  group.add(kasagiCap);

  // 6. Central Plaque (Gakuzuka)
  const gakuzukaGeom = new THREE.BoxGeometry(0.20, 0.65, 0.18);
  const gakuzuka = new THREE.Mesh(gakuzukaGeom, vermilionMat);
  gakuzuka.position.set(0, pillarHeight * 0.76 + 0.40, 0);
  group.add(gakuzuka);

  const plaqueBoard = new THREE.Mesh(
    new THREE.BoxGeometry(0.55, 0.72, 0.05),
    blackWoodMat
  );
  plaqueBoard.position.set(0, pillarHeight * 0.76 + 0.40, 0.12);
  group.add(plaqueBoard);

  const plaqueGoldBorder = new THREE.Mesh(
    new THREE.BoxGeometry(0.46, 0.63, 0.06),
    goldMat
  );
  plaqueGoldBorder.position.set(0, pillarHeight * 0.76 + 0.40, 0.122);
  group.add(plaqueGoldBorder);

  return group;
}
