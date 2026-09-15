import * as THREE from 'three';

export const CONFIG = {
  presets: {
    twilight: {
      name: 'Twilight (Original)',
      sky: {
        zenith: '#58394b',
        upper: '#724852',
        mid: '#8f5c5b',
        horizon: '#a67267',
        glow: '#b58273',
        fogColor: '#430e06',
        fogNear: 60,
        fogFar: 180
      },
      lights: {
        ambient: { color: '#8f5c5b', intensity: 1.6 },
        sun: { color: '#ffd6b0', intensity: 1.5, position: [-35, 14, -45] },
        hemi: { skyColor: '#91605b', groundColor: '#3a0a06', intensity: 1.2 },
        lanterns: { color: '#ffaa44', intensity: 3.8, distance: 20 }
      },
      water: {
        baseColor: '#2b120b',
        reflectionPeach: '#a67267',
        reflectionMauve: '#58394b'
      }
    },
    night: {
      name: 'Midnight Moon',
      sky: {
        zenith: '#0e1220',
        upper: '#181e35',
        mid: '#232c4d',
        horizon: '#36446e',
        glow: '#5a6ea8',
        fogColor: '#121626',
        fogNear: 40,
        fogFar: 140
      },
      lights: {
        ambient: { color: '#2b365e', intensity: 1.0 },
        sun: { color: '#9ec2ff', intensity: 1.2, position: [30, 25, -40] },
        hemi: { skyColor: '#384d7a', groundColor: '#0e141a', intensity: 0.8 },
        lanterns: { color: '#ffa842', intensity: 4.8, distance: 22 }
      },
      water: {
        baseColor: '#0c101a',
        reflectionPeach: '#8cb1e3',
        reflectionMauve: '#2a3b5c'
      }
    },
    sunset: {
      name: 'Golden Sunset',
      sky: {
        zenith: '#3e2448',
        upper: '#7a313b',
        mid: '#c04a32',
        horizon: '#ea782c',
        glow: '#ffd873',
        fogColor: '#782d23',
        fogNear: 50,
        fogFar: 150
      },
      lights: {
        ambient: { color: '#854238', intensity: 1.8 },
        sun: { color: '#ffa652', intensity: 2.2, position: [-40, 10, -50] },
        hemi: { skyColor: '#f2833a', groundColor: '#382218', intensity: 1.2 },
        lanterns: { color: '#ffa033', intensity: 3.0, distance: 18 }
      },
      water: {
        baseColor: '#281a1e',
        reflectionPeach: '#ffad6b',
        reflectionMauve: '#a34242'
      }
    },
    dawn: {
      name: 'Misty Dawn',
      sky: {
        zenith: '#3a445c',
        upper: '#5e6884',
        mid: '#8f8897',
        horizon: '#caa9a4',
        glow: '#f5e4d3',
        fogColor: '#6f6c7a',
        fogNear: 35,
        fogFar: 130
      },
      lights: {
        ambient: { color: '#68708c', intensity: 1.4 },
        sun: { color: '#ffe0c2', intensity: 1.4, position: [40, 12, -45] },
        hemi: { skyColor: '#cfb5b0', groundColor: '#252d27', intensity: 0.9 },
        lanterns: { color: '#ffaa44', intensity: 2.5, distance: 16 }
      },
      water: {
        baseColor: '#202832',
        reflectionPeach: '#e8d2c8',
        reflectionMauve: '#6b6a78'
      }
    }
  },

  postprocessing: {
    enabled: true,
    posterizeLevels: 16,
    ditherStrength: 0.04,
    tiltShiftFocus: 0.50,
    tiltShiftRange: 0.35,
    tiltShiftBlur: 0.0018,
    bloomStrength: 0.60,
    bloomRadius: 0.45,
    bloomThreshold: 0.70,
    vignetteDarkness: 0.45,
    vignetteOffset: 1.15
  },

  petals: {
    count: 1400,
    windSpeed: 1.2,
    gustIntensity: 0.8,
    swayFrequency: 2.4,
    fallSpeed: 0.7
  },

  fireflies: {
    count: 120,
    size: 2.8,
    speed: 0.5
  },

  // Exact 60s Cinematic flight spline matching Loktar's video
  flightPath: [
    // 0s: Frame 001 - Elevated entrance view framing pond on left, Torii and path on right
    {
      time: 0.0,
      pos: new THREE.Vector3(1.2, 3.2, 16.2),
      target: new THREE.Vector3(-0.5, 1.2, -3.0)
    },
    // 10s: Frame 002/003 - Passing under Torii gate, close to first lantern
    {
      time: 0.16,
      pos: new THREE.Vector3(2.6, 2.0, 9.8),
      target: new THREE.Vector3(-1.8, 1.6, -4.5)
    },
    // 20s: Frame 004/005 - Tracking along curved stone path, viewing water ripples
    {
      time: 0.33,
      pos: new THREE.Vector3(2.0, 1.7, 5.0),
      target: new THREE.Vector3(-2.8, 1.4, -5.5)
    },
    // 30s: Frame 006/007 - Approaching stone basin (Tsukubai) and second lantern
    {
      time: 0.50,
      pos: new THREE.Vector3(1.6, 1.5, 0.2),
      target: new THREE.Vector3(-0.8, 1.5, -9.5)
    },
    // 40s: Frame 022 - Swooping right under/past the curved shrine roof eaves
    {
      time: 0.67,
      pos: new THREE.Vector3(0.8, 2.8, -6.0),
      target: new THREE.Vector3(-3.5, 2.0, -8.0)
    },
    // 50s: Frame 026 - Sweeping across the pond framed by sakura branches
    {
      time: 0.83,
      pos: new THREE.Vector3(-2.8, 3.4, -2.5),
      target: new THREE.Vector3(0.0, 1.2, -4.0)
    },
    // 60s: Frame 030 - High-angle panoramic overview of the illuminated garden
    {
      time: 1.0,
      pos: new THREE.Vector3(0.5, 5.2, 8.0),
      target: new THREE.Vector3(-1.5, 0.6, -4.5)
    }
  ]
};
