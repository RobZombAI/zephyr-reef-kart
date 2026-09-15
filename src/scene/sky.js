import * as THREE from 'three';

export function createSkyDome(preset) {
  const geometry = new THREE.SphereGeometry(180, 48, 32);

  const material = new THREE.ShaderMaterial({
    uniforms: {
      uZenith: { value: new THREE.Color(preset.sky.zenith) },
      uUpper: { value: new THREE.Color(preset.sky.upper) },
      uMid: { value: new THREE.Color(preset.sky.mid) },
      uHorizon: { value: new THREE.Color(preset.sky.horizon) },
      uGlow: { value: new THREE.Color(preset.sky.glow) },
      uRidge: { value: new THREE.Color('#430e06') }
    },
    vertexShader: /* glsl */ `
      varying vec3 vWorldPosition;
      void main() {
        vec4 worldPos = modelMatrix * vec4(position, 1.0);
        vWorldPosition = worldPos.xyz;
        gl_Position = projectionMatrix * viewMatrix * worldPos;
      }
    `,
    fragmentShader: /* glsl */ `
      uniform vec3 uZenith;
      uniform vec3 uUpper;
      uniform vec3 uMid;
      uniform vec3 uHorizon;
      uniform vec3 uGlow;
      uniform vec3 uRidge;

      varying vec3 vWorldPosition;

      void main() {
        vec3 dir = normalize(vWorldPosition);
        float y = dir.y;

        // Banded concentric twilight sky gradient matching Loktar's video exactly
        vec3 skyColor;
        if (y > 0.45) {
          skyColor = mix(uUpper, uZenith, smoothstep(0.45, 0.85, y));
        } else if (y > 0.22) {
          skyColor = mix(uMid, uUpper, smoothstep(0.22, 0.45, y));
        } else if (y > 0.04) {
          skyColor = mix(uHorizon, uMid, smoothstep(0.04, 0.22, y));
        } else if (y > -0.06) {
          skyColor = mix(uGlow, uHorizon, smoothstep(-0.06, 0.04, y));
        } else {
          skyColor = mix(uRidge, uGlow, smoothstep(-0.25, -0.06, y));
        }

        // Horizon mountain silhouette matching frame 001/002
        float angle = atan(dir.z, dir.x);
        float mountainH = sin(angle * 3.5) * 0.025 + cos(angle * 7.0) * 0.015 + 0.035;
        if (y < mountainH && y > -0.06) {
          float mFactor = smoothstep(mountainH, mountainH - 0.012, y);
          skyColor = mix(skyColor, uRidge, mFactor * 0.95);
        }

        gl_FragColor = vec4(skyColor, 1.0);
      }
    `,
    side: THREE.BackSide,
    depthWrite: false,
    fog: false
  });

  const mesh = new THREE.Mesh(geometry, material);
  return { mesh, material };
}
