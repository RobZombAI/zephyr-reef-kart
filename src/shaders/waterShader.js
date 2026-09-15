import * as THREE from 'three';

export const WaterShader = {
  uniforms: {
    uTime: { value: 0.0 },
    uBaseColor: { value: new THREE.Color('#161f28') },
    uReflectPeach: { value: new THREE.Color('#f5c69e') },
    uReflectMauve: { value: new THREE.Color('#7a3c52') },
    uLanternLightColor: { value: new THREE.Color('#ffaa44') },
    uLanternLightPos: { value: new THREE.Vector3(5.0, 1.8, 4.0) },
    uSunDirection: { value: new THREE.Vector3(-0.7, 0.25, -0.65).normalize() },
    uRipples: { value: new Array(16).fill(0).map(() => new THREE.Vector4(0, 0, -1000, 0)) },
    uRippleCount: { value: 0 }
  },
  vertexShader: /* glsl */ `
    uniform float uTime;
    uniform vec4 uRipples[16];
    uniform int uRippleCount;

    varying vec2 vUv;
    varying vec3 vWorldPosition;
    varying vec3 vNormal;

    void main() {
      vUv = uv;
      vec3 pos = position;

      float totalDisp = 0.0;
      vec2 worldXZ = (modelMatrix * vec4(pos, 1.0)).xz;

      // Ripple wave displacements
      for(int i = 0; i < 16; i++) {
        if(i >= uRippleCount) break;
        vec4 rip = uRipples[i];
        float elapsed = uTime - rip.z;
        if(elapsed > 0.0 && elapsed < 4.8) {
          float dist = distance(worldXZ, rip.xy);
          float waveSpeed = 2.2;
          float waveFront = elapsed * waveSpeed;
          float d = dist - waveFront;

          if(abs(d) < 1.0) {
            float decay = exp(-elapsed * 0.85) * smoothstep(rip.w, 0.0, dist);
            float wave = sin(d * 16.0) * decay * 0.04;
            totalDisp += wave;
          }
        }
      }

      pos.y += totalDisp;

      vec4 worldPos = modelMatrix * vec4(pos, 1.0);
      vWorldPosition = worldPos.xyz;

      vec3 norm = vec3(0.0, 1.0, 0.0);
      norm.x -= cos(worldXZ.x * 6.0 + uTime) * totalDisp * 3.5;
      norm.z -= sin(worldXZ.y * 6.0 + uTime) * totalDisp * 3.5;
      vNormal = normalize((modelMatrix * vec4(norm, 0.0)).xyz);

      gl_Position = projectionMatrix * viewMatrix * worldPos;
    }
  `,
  fragmentShader: /* glsl */ `
    uniform float uTime;
    uniform vec3 uBaseColor;
    uniform vec3 uReflectPeach;
    uniform vec3 uReflectMauve;
    uniform vec3 uLanternLightColor;
    uniform vec3 uLanternLightPos;
    uniform vec3 uSunDirection;
    uniform vec4 uRipples[16];
    uniform int uRippleCount;

    varying vec2 vUv;
    varying vec3 vWorldPosition;
    varying vec3 vNormal;

    void main() {
      vec3 viewDir = normalize(cameraPosition - vWorldPosition);
      vec3 normal = normalize(vNormal);

      // Fresnel reflection factor
      float fresnel = pow(1.0 - max(dot(viewDir, normal), 0.0), 2.5);
      fresnel = clamp(fresnel, 0.35, 0.98);

      // Gradient sky reflection across the pond surface matching frame 001/002!
      // In frame 001, left/far side reflects warm peach/cream, right side reflects mauve/twilight
      float reflectGrad = clamp((vWorldPosition.x + 8.0) / 10.0 + (vWorldPosition.z + 4.0) * 0.06, 0.0, 1.0);
      vec3 skyReflect = mix(uReflectPeach * 1.15, uReflectMauve * 0.85, reflectGrad);

      // Specular highlight from sunset sun
      vec3 halfVec = normalize(viewDir + uSunDirection);
      float spec = pow(max(dot(normal, halfVec), 0.0), 24.0);
      skyReflect += vec3(1.0, 0.92, 0.8) * spec * 1.2;

      // Lantern light reflection
      vec3 lanternDir = normalize(uLanternLightPos - vWorldPosition);
      float lanternDist = length(uLanternLightPos - vWorldPosition);
      float lanternAtten = 1.0 / (1.0 + 0.12 * lanternDist * lanternDist);
      vec3 lanternHalf = normalize(viewDir + lanternDir);
      float lanternSpec = pow(max(dot(normal, lanternHalf), 0.0), 18.0);
      vec3 lanternReflect = uLanternLightColor * (lanternSpec * 2.2 + 0.3) * lanternAtten;

      // Sharp, luminous circular ripple edge rings visible in video!
      float rippleRingGlow = 0.0;
      vec2 worldXZ = vWorldPosition.xz;
      for(int i = 0; i < 16; i++) {
        if(i >= uRippleCount) break;
        vec4 rip = uRipples[i];
        float elapsed = uTime - rip.z;
        if(elapsed > 0.0 && elapsed < 4.8) {
          float dist = distance(worldXZ, rip.xy);
          float waveSpeed = 2.2;
          float waveFront = elapsed * waveSpeed;
          float d = abs(dist - waveFront);
          float ringAlpha = smoothstep(0.09, 0.0, d) * exp(-elapsed * 0.75);
          rippleRingGlow += ringAlpha * 0.75;
        }
      }

      vec3 waterCol = mix(uBaseColor, skyReflect + lanternReflect, fresnel);
      waterCol += vec3(1.0, 0.9, 0.8) * rippleRingGlow;

      // Edge fade
      float edgeDist = length(vUv - 0.5) * 2.0;
      float rimFade = smoothstep(0.99, 0.90, edgeDist);

      gl_FragColor = vec4(waterCol, rimFade * 0.96);
    }
  `
};
