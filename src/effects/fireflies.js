import * as THREE from 'three';

export function createFireflies(config) {
  const count = config.fireflies.count || 120;
  const geometry = new THREE.BufferGeometry();
  const positions = new Float32Array(count * 3);
  const phases = new Float32Array(count);
  const speeds = new Float32Array(count);

  for (let i = 0; i < count; i++) {
    positions[i * 3 + 0] = (Math.random() - 0.5) * 28;
    positions[i * 3 + 1] = 0.4 + Math.random() * 2.8;
    positions[i * 3 + 2] = (Math.random() - 0.5) * 28;

    phases[i] = Math.random() * Math.PI * 2;
    speeds[i] = 0.8 + Math.random() * 1.5;
  }

  geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  geometry.setAttribute('phase', new THREE.BufferAttribute(phases, 1));
  geometry.setAttribute('speed', new THREE.BufferAttribute(speeds, 1));

  // Point shader with pulsing glow
  const material = new THREE.ShaderMaterial({
    uniforms: {
      uTime: { value: 0.0 },
      uColor: { value: new THREE.Color('#ffe680') }
    },
    vertexShader: /* glsl */ `
      uniform float uTime;
      attribute float phase;
      attribute float speed;
      varying float vAlpha;

      void main() {
        vec3 pos = position;

        // Hover motion
        pos.x += sin(uTime * speed + phase) * 0.45;
        pos.y += sin(uTime * speed * 1.3 + phase * 2.0) * 0.25;
        pos.z += cos(uTime * speed * 0.9 + phase) * 0.45;

        // Pulsing glow
        float pulse = sin(uTime * speed * 2.5 + phase) * 0.5 + 0.5;
        vAlpha = pulse * 0.85 + 0.15;

        vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
        gl_PointSize = (18.0 / -mvPosition.z) * (0.8 + pulse * 0.5);
        gl_Position = projectionMatrix * mvPosition;
      }
    `,
    fragmentShader: /* glsl */ `
      uniform vec3 uColor;
      varying float vAlpha;

      void main() {
        // Circular soft particle
        vec2 coord = gl_PointCoord - vec2(0.5);
        float dist = length(coord);
        if (dist > 0.5) discard;

        float glow = smoothstep(0.5, 0.0, dist);
        gl_FragColor = vec4(uColor, glow * vAlpha);
      }
    `,
    transparent: true,
    blending: THREE.AdditiveBlending,
    depthWrite: false
  });

  const points = new THREE.Points(geometry, material);

  function update(time) {
    material.uniforms.uTime.value = time;
  }

  return { points, update };
}
