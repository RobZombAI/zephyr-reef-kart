import * as THREE from 'three';

export const RetroShader = {
  name: 'RetroShader',
  uniforms: {
    tDiffuse: { value: null },
    uResolution: { value: new THREE.Vector2(window.innerWidth, window.innerHeight) },
    uTime: { value: 0.0 },
    uPosterizeLevels: { value: 18.0 },
    uDitherStrength: { value: 0.045 },
    uTiltShiftFocus: { value: 0.50 },
    uTiltShiftRange: { value: 0.35 },
    uTiltShiftBlur: { value: 0.0018 },
    uVignetteDarkness: { value: 0.50 },
    uVignetteOffset: { value: 1.15 },
    uAberrationStrength: { value: 0.0012 },
    uEnabled: { value: 1.0 }
  },
  vertexShader: /* glsl */ `
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,
  fragmentShader: /* glsl */ `
    uniform sampler2D tDiffuse;
    uniform vec2 uResolution;
    uniform float uTime;
    uniform float uPosterizeLevels;
    uniform float uDitherStrength;
    uniform float uTiltShiftFocus;
    uniform float uTiltShiftRange;
    uniform float uTiltShiftBlur;
    uniform float uVignetteDarkness;
    uniform float uVignetteOffset;
    uniform float uAberrationStrength;
    uniform float uEnabled;

    varying vec2 vUv;

    // 8x8 Bayer Dithering Matrix for organic, fine-grained retro shading
    float bayer8(vec2 coord) {
      const mat4 bayer4_0 = mat4(
         0.0/64.0, 32.0/64.0,  8.0/64.0, 40.0/64.0,
        48.0/64.0, 16.0/64.0, 56.0/64.0, 24.0/64.0,
         2.0/64.0, 34.0/64.0, 10.0/64.0, 42.0/64.0,
        50.0/64.0, 18.0/64.0, 58.0/64.0, 26.0/64.0
      );
      const mat4 bayer4_1 = mat4(
        12.0/64.0, 44.0/64.0,  4.0/64.0, 36.0/64.0,
        60.0/64.0, 28.0/64.0, 52.0/64.0, 20.0/64.0,
        14.0/64.0, 46.0/64.0,  6.0/64.0, 38.0/64.0,
        62.0/64.0, 30.0/64.0, 54.0/64.0, 22.0/64.0
      );
      const mat4 bayer4_2 = mat4(
         3.0/64.0, 35.0/64.0, 11.0/64.0, 43.0/64.0,
        51.0/64.0, 19.0/64.0, 59.0/64.0, 27.0/64.0,
         1.0/64.0, 33.0/64.0,  9.0/64.0, 41.0/64.0,
        49.0/64.0, 17.0/64.0, 57.0/64.0, 25.0/64.0
      );
      const mat4 bayer4_3 = mat4(
        15.0/64.0, 47.0/64.0,  7.0/64.0, 39.0/64.0,
        63.0/64.0, 31.0/64.0, 55.0/64.0, 23.0/64.0,
        13.0/64.0, 45.0/64.0,  5.0/64.0, 37.0/64.0,
        61.0/64.0, 29.0/64.0, 53.0/64.0, 21.0/64.0
      );

      int x = int(mod(coord.x, 8.0));
      int y = int(mod(coord.y, 8.0));

      if (x < 4 && y < 4) return bayer4_0[y][x] - 0.5;
      if (x >= 4 && y < 4) return bayer4_1[y][x - 4] - 0.5;
      if (x < 4 && y >= 4) return bayer4_2[y - 4][x] - 0.5;
      return bayer4_3[y - 4][x - 4] - 0.5;
    }

    void main() {
      vec2 uv = vUv;

      if (uEnabled < 0.5) {
        gl_FragColor = texture2D(tDiffuse, uv);
        return;
      }

      // 1. Tilt-Shift Depth of Field Blur
      float distFromFocus = abs(uv.y - uTiltShiftFocus);
      float blurFactor = smoothstep(uTiltShiftRange * 0.5, uTiltShiftRange * 1.5, distFromFocus);
      vec2 blurOffset = vec2(0.0, uTiltShiftBlur * blurFactor);

      // 2. Subtle Chromatic Aberration
      vec2 caDist = (uv - 0.5) * uAberrationStrength;

      vec3 col = vec3(0.0);
      col.r += texture2D(tDiffuse, uv - blurOffset * 1.5 - caDist).r * 0.2;
      col.g += texture2D(tDiffuse, uv - blurOffset * 1.5).g * 0.2;
      col.b += texture2D(tDiffuse, uv - blurOffset * 1.5 + caDist).b * 0.2;

      col.r += texture2D(tDiffuse, uv - caDist).r * 0.6;
      col.g += texture2D(tDiffuse, uv).g * 0.6;
      col.b += texture2D(tDiffuse, uv + caDist).b * 0.6;

      col.r += texture2D(tDiffuse, uv + blurOffset * 1.5 - caDist).r * 0.2;
      col.g += texture2D(tDiffuse, uv + blurOffset * 1.5).g * 0.2;
      col.b += texture2D(tDiffuse, uv + blurOffset * 1.5 + caDist).b * 0.2;

      // 3. Fine Bayer Matrix Dithering
      float dither = bayer8(gl_FragCoord.xy) * uDitherStrength;
      col += vec3(dither);

      // 4. Posterization / Banding Steps
      float levels = max(4.0, uPosterizeLevels);
      col = floor(col * levels + 0.5) / levels;

      // 5. Vignette
      vec2 vCoord = (uv - 0.5) * vec2(uResolution.x / uResolution.y, 1.0);
      float vDist = length(vCoord);
      float vignette = smoothstep(uVignetteOffset, uVignetteOffset - 0.45, vDist * uVignetteDarkness);
      col *= mix(0.82, 1.0, vignette);

      col = clamp(col, 0.0, 1.0);
      gl_FragColor = vec4(col, 1.0);
    }
  `
};
