import * as THREE from 'three';

export const GrassShader = {
  uniforms: {
    uTime: { value: 0.0 },
    uBaseColor: { value: new THREE.Color('#192615') },
    uTipColor: { value: new THREE.Color('#4d6934') },
    uSunDirection: { value: new THREE.Vector3(-0.6, 0.4, -0.7).normalize() },
    uSunColor: { value: new THREE.Color('#f0a070') },
    uWindStrength: { value: 0.25 }
  },
  vertexShader: /* glsl */ `
    uniform float uTime;
    uniform float uWindStrength;

    attribute vec3 offset;
    attribute float scale;
    attribute float rotation;

    varying vec2 vUv;
    varying vec3 vWorldPosition;
    varying float vHeight;

    void main() {
      vUv = uv;
      vHeight = uv.y;

      vec3 pos = position * scale;

      // Rotate around Y axis
      float s = sin(rotation);
      float c = cos(rotation);
      vec3 rotated = vec3(
        pos.x * c - pos.z * s,
        pos.y,
        pos.x * s + pos.z * c
      );

      // Wind animation - displacement increases with blade height
      vec3 worldPos = rotated + offset;
      float windWave = sin(uTime * 2.2 + worldPos.x * 0.8 + worldPos.z * 0.6);
      float gust = sin(uTime * 0.9 + worldPos.x * 0.3) * 0.5 + 0.5;
      float sway = windWave * (0.15 + gust * 0.25) * uWindStrength * uv.y * uv.y;

      worldPos.x += sway * 0.8;
      worldPos.z += sway * 0.5;

      vWorldPosition = worldPos;
      gl_Position = projectionMatrix * viewMatrix * vec4(worldPos, 1.0);
    }
  `,
  fragmentShader: /* glsl */ `
    uniform vec3 uBaseColor;
    uniform vec3 uTipColor;
    uniform vec3 uSunDirection;
    uniform vec3 uSunColor;

    varying vec2 vUv;
    varying vec3 vWorldPosition;
    varying float vHeight;

    void main() {
      // Gradient from dark root to sunlit tip
      vec3 col = mix(uBaseColor, uTipColor, vHeight);

      // Warm rim lighting from sunset
      float rim = smoothstep(0.7, 1.0, vHeight) * 0.35;
      col += uSunColor * rim;

      gl_FragColor = vec4(col, 1.0);
    }
  `
};
