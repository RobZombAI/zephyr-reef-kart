#!/usr/bin/env node
// Applica le patch di sincronizzazione multiplayer e framerate al bundle del motore:
//   1. Cap render uniforme a ~60fps (accumulator pacing) su display a refresh alto
//   2. Guest: non calcola i comandi delle AI (host-authoritative)
//   3. Guest: non integra la fisica delle AI (la posizione arriva dall'host via updateRemoteRacers)
// Idempotente: se una patch e' gia' presente, la salta. Fallisce (exit 1) se un anchor
// manca o non e' unico: in quel caso NON scrive nulla.

import { readFileSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const BUNDLE = join(ROOT, 'assets', 'index-C9rd31_W.js');

// [nome, find, replace]
const PATCHES = [
  [
    'Cap render 60fps (accumulator pacing)',
    'const rawDt=Math.min(.05,Math.max(5e-4,(t-(this.lastTime||t))/1e3));this.lastTime=t;',
    'this._capAcc=(this._capAcc||16.7)+(t-(this._capT||t));this._capT=t;' +
      'if(this._capAcc<15.5)return;' +
      'this._capAcc=Math.min(this._capAcc-16.667,33.4);' +
      'const rawDt=Math.min(.05,Math.max(5e-4,(t-(this.lastTime||t))/1e3));this.lastTime=t;'
  ],
  [
    'Guest: AI senza comandi locali',
    'aiDrivers[o.id];a&&(a.rubberBand=this.rubberBandFor(o)',
    'aiDrivers[o.id];a&&!window.__multiplayerManager?.isGuestSim?.()&&(a.rubberBand=this.rubberBandFor(o)'
  ],
  [
    'Guest: AI senza step fisico locale',
    'o.step(t,this.adapter);',
    'if(!(window.__multiplayerManager?.isGuestSim?.()&&o.kind==="ai"))o.step(t,this.adapter);'
  ],
  [
    'No auto-pausa durante COUNTDOWN (visibilitychange)',
    'if(document.hidden){if(window.__multiplayerManager&&window.__multiplayerManager.state==="RACING")return;this.onBlur();',
    'if(document.hidden){if(window.__multiplayerManager&&(window.__multiplayerManager.state==="RACING"||window.__multiplayerManager.state==="COUNTDOWN"))return;this.onBlur();'
  ],
  [
    'No auto-pausa durante COUNTDOWN (onBlur)',
    'onBlur(){if(window.__multiplayerManager&&window.__multiplayerManager.state==="RACING")return;this.mode==="race"',
    'onBlur(){if(window.__multiplayerManager&&(window.__multiplayerManager.state==="RACING"||window.__multiplayerManager.state==="COUNTDOWN"))return;this.mode==="race"'
  ],
  [
    'Camera chase alzata (+0.65) per vedere piu\u2019 pista',
    'Ie.set(t.pos.x-us.x*(c+boostPush)+rightX*sway,t.pos.y+h,t.pos.z-us.z*(c+boostPush)+rightZ*sway)',
    'Ie.set(t.pos.x-us.x*(c+boostPush)+rightX*sway,t.pos.y+h+0.65,t.pos.z-us.z*(c+boostPush)+rightZ*sway)'
  ],
  [
    'Pool item CTR-style (7 item: turbo, triple_turbo, drone, mine, matrix, glitch, vortex)',
    'lc=["bolt","mine","turbo","blast","shield","vortex","horn","triple_shield"];function dv(s,t,e){const n=$t(t<=1?0:(s-1)/(t-1)),i={bolt:Math.max(1,10-n*4),mine:Math.max(1,12-n*7),turbo:3+n*8,blast:1+n*7,shield:Math.max(1,9-n*6),vortex:1+n*9,horn:2+n*6,triple_shield:Math.max(1,8-n*6)};let r=0;for(const a of lc)r+=i[a]||1;let o=e()*r;for(const a of lc)if(o-=(i[a]||1),o<=0)return a;return"bolt"}',
    'lc=["turbo","triple_turbo","drone","mine","matrix","glitch","vortex"];function dv(s,t,e){const n=$t(t<=1?0:(s-1)/(t-1)),i={turbo:3+n*8,triple_turbo:1+n*4,drone:3+n*3,mine:Math.max(2,4-n*2),vortex:1+n*9,matrix:.6+n*2.4,glitch:.6+n*2.4};let r=0;for(const a of lc)r+=i[a]||1;let o=e()*r;for(const a of lc)if(o-=(i[a]||1),o<=0)return a;return"turbo"}'
  ],
  [
    'Glitch: shrink piu\u2019 leggero sul giocatore (resta visibile, niente "personaggio sparito")',
    'r.kart?.object?.scale?.setScalar?.(0.55);',
    'r.kart?.object?.scale?.setScalar?.(r.isPlayer?0.78:0.55);'
  ],
  [
    'Mina: knockback piu\u2019 contenuto (il kart resta inquadrato durante il volo)',
    'i.kart.physics.knockback(kx*7,kz*7,11,7.5)',
    'i.kart.physics.knockback(kx*6,kz*6,9,5.5)'
  ]
];

function countOccurrences(hay, needle) {
  let n = 0, i = 0;
  while ((i = hay.indexOf(needle, i)) !== -1) { n++; i += needle.length; }
  return n;
}

let src = readFileSync(BUNDLE, 'utf8');
let applied = 0;

for (const [name, find, replace] of PATCHES) {
  if (src.includes(replace)) {
    console.log(`SKIP (gia' applicata): ${name}`);
    continue;
  }
  const n = countOccurrences(src, find);
  if (n !== 1) {
    console.error(`ERRORE: anchor per "${name}" trovato ${n} volte (atteso 1). Nessuna modifica scritta.`);
    process.exit(1);
  }
  src = src.replace(find, replace);
  applied++;
  console.log(`OK: ${name}`);
}

if (applied > 0) {
  writeFileSync(BUNDLE, src);
  console.log(`Scritte ${applied} patch su ${BUNDLE}`);
} else {
  console.log('Nessuna patch da scrivere.');
}
