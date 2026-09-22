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
