import * as THREE from 'three';

export function createPetalSystem(config) {
  const count = config.petals.count || 1400;

  // Petal geometry: small curved oval petal
  const petalShape = new THREE.Shape();
  petalShape.moveTo(0, -0.06);
  petalShape.quadraticCurveTo(0.04, 0, 0.03, 0.08);
  petalShape.quadraticCurveTo(0, 0.12, -0.03, 0.08);
  petalShape.quadraticCurveTo(-0.04, 0, 0, -0.06);

  const petalGeom = new THREE.ShapeGeometry(petalShape, 4);

  // Instanced geometry
  const instancedGeom = new THREE.InstancedBufferGeometry();
  instancedGeom.index = petalGeom.index;
  instancedGeom.attributes.position = petalGeom.attributes.position;
  instancedGeom.attributes.uv = petalGeom.attributes.uv;

  const positions = new Float32Array(count * 3);
  const rotations = new Float32Array(count * 3);
  const scales = new Float32Array(count);
  const velocities = [];
  const rotVelocities = [];

  const areaX = 32;
  const areaY = 14;
  const areaZ = 32;

  for (let i = 0; i < count; i++) {
    positions[i * 3 + 0] = (Math.random() - 0.5) * areaX;
    positions[i * 3 + 1] = Math.random() * areaY;
    positions[i * 3 + 2] = (Math.random() - 0.5) * areaZ;

    rotations[i * 3 + 0] = Math.random() * Math.PI * 2;
    rotations[i * 3 + 1] = Math.random() * Math.PI * 2;
    rotations[i * 3 + 2] = Math.random() * Math.PI * 2;

    scales[i] = 0.6 + Math.random() * 0.7;

    velocities.push({
      x: -0.35 + (Math.random() - 0.5) * 0.2,
      y: -0.45 - Math.random() * 0.45,
      z: -0.25 + (Math.random() - 0.5) * 0.2,
      swayPhase: Math.random() * Math.PI * 2,
      swaySpeed: 1.5 + Math.random() * 2.0
    });

    rotVelocities.push({
      x: (Math.random() - 0.5) * 3.0,
      y: (Math.random() - 0.5) * 3.0,
      z: (Math.random() - 0.5) * 3.0
    });
  }

  const posAttr = new THREE.InstancedBufferAttribute(positions, 3);
  const rotAttr = new THREE.InstancedBufferAttribute(rotations, 3);
  const scaleAttr = new THREE.InstancedBufferAttribute(scales, 1);

  instancedGeom.setAttribute('instancePosition', posAttr);
  instancedGeom.setAttribute('instanceRotation', rotAttr);
  instancedGeom.setAttribute('instanceScale', scaleAttr);

  const material = new THREE.ShaderMaterial({
    uniforms: {
      uTime: { value: 0.0 },
      uColor1: { value: new THREE.Color('#ffc8dd') },
      uColor2: { value: new THREE.Color('#ffffff') },
      uSunDir: { value: new THREE.Vector3(-0.6, 0.4, -0.7).normalize() }
    },
    vertexShader: /* glsl */ `
      attribute vec3 instancePosition;
      attribute vec3 instanceRotation;
      attribute float instanceScale;

      uniform float uTime;
      varying vec2 vUv;
      varying float vRand;

      // Rotation matrix helper
      mat4 rotationMatrix(vec3 axis, float angle) {
        axis = normalize(axis);
        float s = sin(angle);
        float c = cos(angle);
        float oc = 1.0 - c;
        return mat4(
          oc * axis.x * axis.x + c,           oc * axis.x * axis.y - axis.z * s,  oc * axis.z * axis.x + axis.y * s,  0.0,
          oc * axis.x * axis.y + axis.z * s,  oc * axis.y * axis.y + c,           oc * axis.y * axis.z - axis.x * s,  0.0,
          oc * axis.z * axis.x - axis.y * s,  oc * axis.y * axis.z + axis.x * s,  oc * axis.z * axis.z + c,           0.0,
          0.0,                                0.0,                                0.0,                                1.0
        );
      }

      void main() {
        vUv = uv;
        vRand = fract(instancePosition.x * 12.9898 + instancePosition.z * 78.233);

        vec3 pos = position * instanceScale;

        // Apply instance rotation
        mat4 rotX = rotationMatrix(vec3(1.0, 0.0, 0.0), instanceRotation.x);
        mat4 rotY = rotationMatrix(vec3(0.0, 1.0, 0.0), instanceRotation.y);
        mat4 rotZ = rotationMatrix(vec3(0.0, 0.0, 1.0), instanceRotation.z);
        pos = (rotZ * rotY * rotX * vec4(pos, 1.0)).xyz;

        vec3 worldPos = pos + instancePosition;
        gl_Position = projectionMatrix * viewMatrix * vec4(worldPos, 1.0);
      }
    `,
    fragmentShader: /* glsl */ `
      uniform vec3 uColor1;
      uniform vec3 uColor2;
      varying vec2 vUv;
      varying float vRand;

      void main() {
        vec3 col = mix(uColor1, uColor2, vRand * 0.4 + vUv.y * 0.3);
        // Soft petal edges
        float edge = smoothstep(0.0, 0.15, vUv.y) * smoothstep(1.0, 0.85, vUv.y);
        gl_FragColor = vec4(col, 0.92);
      }
    `,
    side: THREE.DoubleSide,
    transparent: true,
    depthWrite: false
  });

  const mesh = new THREE.Mesh(instancedGeom, material);

  function update(delta, time, onPetalHitWater) {
    material.uniforms.uTime.value = time;
    const pos = posAttr.array;
    const rot = rotAttr.array;

    for (let i = 0; i < count; i++) {
      const v = velocities[i];
      const rv = rotVelocities[i];

      // Fluttering sway
      const sway = Math.sin(time * v.swaySpeed + v.swayPhase);
      pos[i * 3 + 0] += (v.x + sway * 0.25) * delta;
      pos[i * 3 + 1] += v.y * delta;
      pos[i * 3 + 2] += (v.z + sway * 0.15) * delta;

      rot[i * 3 + 0] += rv.x * delta;
      rot[i * 3 + 1] += rv.y * delta;
      rot[i * 3 + 2] += rv.z * delta;

      // Check if petal hits pond water level (y ~ 0.0)
      const px = pos[i * 3 + 0];
      const py = pos[i * 3 + 1];
      const pz = pos[i * 3 + 2];

      const pDist = Math.hypot((px - (-2.5)) / 1.15, (pz - (-4.0)) / 0.9);
      if (py <= 0.0 && pDist < 7.2) {
        // Trigger ripple on water occasionally!
        if (Math.random() < 0.08 && onPetalHitWater) {
          onPetalHitWater(px, pz);
        }
      }

      // Respawn at top
      if (pos[i * 3 + 1] < -0.2 || Math.abs(pos[i * 3 + 0]) > areaX / 2 || Math.abs(pos[i * 3 + 2]) > areaZ / 2) {
        pos[i * 3 + 0] = (Math.random() - 0.5) * areaX;
        pos[i * 3 + 1] = areaY - Math.random() * 2.0;
        pos[i * 3 + 2] = (Math.random() - 0.5) * areaZ;
      }
    }

    posAttr.needsUpdate = true;
    rotAttr.needsUpdate = true;
  }

  return { mesh, update };
}
