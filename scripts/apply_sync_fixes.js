#!/usr/bin/env node
// Applica le patch di sincronizzazione multiplayer e framerate al bundle del motore:
//   1. Cap render uniforme a ~60fps (accumulator pacing) su display a refresh alto
//   2. Guest: non calcola i comandi delle AI (host-authoritative)
//   3. Guest: non integra la fisica delle AI (la posizione arriva dall'host via updateRemoteRacers)
//   4. Pool item CTR-style + rimozione sistemica del Quantum Glitch
// Idempotente: se una patch e' gia' presente, la salta. Fallisce (exit 1) se un anchor
// manca o non e' unico: in quel caso NON scrive nulla.

import { readFileSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const BUNDLE = join(ROOT, 'assets', 'index-C9rd31_W.js');

// Espressione modalita' condivisa: il loop principale appartiene a una classe
// diversa dal motore, quindi this.mode non sempre esiste: usa il globale.
const MODE_EXPR = '((window.__zephyr?window.__zephyr.mode:this.mode)==="race"||(window.__zephyr?window.__zephyr.mode:this.mode)==="results")';
const INTERVAL_EXPR = '(' + MODE_EXPR + '?16.667:33.4)';

// Patch di tipo 'replace': [nome, find, replace, optional?]
// Patch di tipo 'removeBetween': { name, from, to, optional? } — escide da from (incluso) a to (escluso)
const PATCHES = [
  {
    name: 'Guest: AI senza comandi locali',
    find: 'aiDrivers[o.id];a&&(a.rubberBand=this.rubberBandFor(o)',
    replace: 'aiDrivers[o.id];a&&!window.__multiplayerManager?.isGuestSim?.()&&(a.rubberBand=this.rubberBandFor(o)'
  },
  {
    name: 'Guest: AI senza step fisico locale',
    find: 'o.step(t,this.adapter);',
    replace: 'if(!(window.__multiplayerManager?.isGuestSim?.()&&o.kind==="ai"))o.step(t,this.adapter);'
  },
  {
    name: 'No auto-pausa durante COUNTDOWN (visibilitychange)',
    find: 'if(document.hidden){if(window.__multiplayerManager&&window.__multiplayerManager.state==="RACING")return;this.onBlur();',
    replace: 'if(document.hidden){if(window.__multiplayerManager&&(window.__multiplayerManager.state==="RACING"||window.__multiplayerManager.state==="COUNTDOWN"))return;this.onBlur();'
  },
  {
    name: 'No auto-pausa durante COUNTDOWN (onBlur)',
    find: 'onBlur(){if(window.__multiplayerManager&&window.__multiplayerManager.state==="RACING")return;this.mode==="race"',
    replace: 'onBlur(){if(window.__multiplayerManager&&(window.__multiplayerManager.state==="RACING"||window.__multiplayerManager.state==="COUNTDOWN"))return;this.mode==="race"'
  },
  {
    name: 'Camera chase alzata (+0.65) per vedere piu\u2019 pista',
    find: 'Ie.set(t.pos.x-us.x*(c+boostPush)+rightX*sway,t.pos.y+h,t.pos.z-us.z*(c+boostPush)+rightZ*sway)',
    replace: 'Ie.set(t.pos.x-us.x*(c+boostPush)+rightX*sway,t.pos.y+h+0.65,t.pos.z-us.z*(c+boostPush)+rightZ*sway)'
  },
  {
    name: 'Pool item: 6 item CTR-style (glitch rimosso)',
    find: 'lc=["turbo","triple_turbo","drone","mine","matrix","glitch","vortex"];function dv(s,t,e){const n=$t(t<=1?0:(s-1)/(t-1)),i={turbo:3+n*8,triple_turbo:1+n*4,drone:3+n*3,mine:Math.max(2,4-n*2),vortex:1+n*9,matrix:.6+n*2.4,glitch:.6+n*2.4};',
    replace: 'lc=["turbo","triple_turbo","drone","mine","matrix","vortex"];function dv(s,t,e){const n=$t(t<=1?0:(s-1)/(t-1)),i={turbo:3+n*8,triple_turbo:1+n*4,drone:3+n*3,mine:Math.max(2,4-n*2),vortex:1+n*9,matrix:.6+n*2.4};',
    // compatibile anche col bundle originale a 8 item
    altFind: 'lc=["bolt","mine","turbo","blast","shield","vortex","horn","triple_shield"];function dv(s,t,e){const n=$t(t<=1?0:(s-1)/(t-1)),i={bolt:Math.max(1,10-n*4),mine:Math.max(1,12-n*7),turbo:3+n*8,blast:1+n*7,shield:Math.max(1,9-n*6),vortex:1+n*9,horn:2+n*6,triple_shield:Math.max(1,8-n*6)};'
  },
  {
    name: 'Anisotropy 16x: texture della pista nitide in prospettiva',
    find: 'antialias:!0,anisotropy:8}',
    replace: 'antialias:!0,anisotropy:16}'
  },
  {
    name: 'Quantum Glitch: rimozione sistemica del case in useItem',
    type: 'removeBetween',
    from: 'case "glitch":',
    to: 'case "shield":'
  },

  {
    name: 'Mina: knockback piu\u2019 contenuto (il kart resta inquadrato durante il volo)',
    find: 'i.kart.physics.knockback(kx*7,kz*7,11,7.5)',
    replace: 'i.kart.physics.knockback(kx*6,kz*6,9,5.5)'
  },


  {
    name: 'Accumulatore pacing: niente drift negativo (stabilita\u2019 su 90/120Hz)',
    find: 'this._capAcc=Math.min(this._capAcc-(((window.__zephyr?window.__zephyr.mode:this.mode)==="race"||(window.__zephyr?window.__zephyr.mode:this.mode)==="results")?16.667:33.4),66.8);',
    replace: 'this._capAcc=Math.max(0,Math.min(this._capAcc-(((window.__zephyr?window.__zephyr.mode:this.mode)==="race"||(window.__zephyr?window.__zephyr.mode:this.mode)==="results")?16.667:33.4),66.8));'
  },
  {
    name: 'Curb rumble: solo sul bordo vero (0.965), piu\u2019 raro e piu\u2019 corto — niente vibrazione continua',
    find: 'if(i.grounded&&Math.abs(i.lateral01)>0.88&&i.onRoad&&Math.abs(i.speed)>6){',
    replace: 'if(i.grounded&&Math.abs(i.lateral01)>0.965&&i.onRoad&&Math.abs(i.speed)>6){',
    find2: 'this._curbTick=0.14;',
    replace2: 'this._curbTick=0.24;',
    find3: 'window.navigator?.vibrate?.(18);',
    replace3: 'window.navigator?.vibrate?.(10);'
  },
  {
    name: 'HitShake: oscillazione chassis fluida senza jitter casuale di posizione a 60Hz',
    find: 'this.hitShake=this.hitShake>0.001?this.hitShake*Math.exp(-8*e):0;if(this.hitShake>0.01){a.position.x+=(Math.random()-.5)*this.hitShake*.35;a.position.z+=(Math.random()-.5)*this.hitShake*.35;}',
    replace: 'this.hitShake=this.hitShake>0.001?this.hitShake*Math.exp(-8*e):0;if(this.hitShake>0.01&&o.chassis){o.chassis.rotation.z+=Math.sin(performance.now()*.035)*this.hitShake*.04;}'
  },
];

function countOccurrences(hay, needle) {
  let n = 0, i = 0;
  while ((i = hay.indexOf(needle, i)) !== -1) { n++; i += needle.length; }
  return n;
}

let src = readFileSync(BUNDLE, 'utf8');
let applied = 0;

for (const P of PATCHES) {
  if (P.type === 'removeBetween') {
    const i1 = src.indexOf(P.from);
    if (i1 === -1) { console.log(`SKIP (gia\u2019 rimosso): ${P.name}`); continue; }
    const i2 = src.indexOf(P.to, i1 + P.from.length);
    if (i2 === -1) { console.error(`ERRORE: delimitatore "${P.to}" non trovato per "${P.name}".`); process.exit(1); }
    if (countOccurrences(src, P.from) !== 1) { console.error(`ERRORE: anchor "${P.from}" non unico per "${P.name}".`); process.exit(1); }
    src = src.slice(0, i1) + src.slice(i2);
    applied++;
    console.log(`OK (rimosso blocco): ${P.name}`);
    continue;
  }
  const find = P.altFind && !src.includes(P.find) && src.includes(P.altFind) ? P.altFind : P.find;
  const extrasApplied = (!P.find2 || src.includes(P.replace2)) && (!P.find3 || src.includes(P.replace3));
  if (P.replace && src.includes(P.replace) && extrasApplied) { console.log(`SKIP (gia' applicata): ${P.name}`); continue; }
  if (P.type === 'pacingTimegate') {
    const segStart = src.indexOf('this._capAcc=(this._capAcc||16.7)');
    const segEnd = src.indexOf('const rawDt=', segStart);
    if (segStart === -1 || segEnd === -1) {
      if (src.includes('this._capLast')) { console.log(`SKIP (gia' applicata): ${P.name}`); continue; }
      console.error(`ERRORE: segmento pacing non trovato.`); process.exit(1);
    }
    const seg = src.slice(segStart, segEnd);
    if (seg.includes('this._capLast')) { console.log(`SKIP (gia' applicata): ${P.name}`); continue; }
    if (!/_capAcc<.*_capAcc=Math\.min/.test(seg)) { console.error(`ERRORE: pattern pacing non riconosciuto.`); process.exit(1); }
    const G = '(window.__zephyr?window.__zephyr.mode:this.mode)';
    const gate = 'if(t-(this._capLast||-1e9)<' + '((' + G + '==="race"||' + G + '==="results")?16.667:33.4))return;this._capLast=t;const rawDt=';
    src = src.slice(0, segStart) + gate + src.slice(segEnd);
    applied++;
    console.log(`OK: ${P.name}`);
    continue;
  }
  const n = countOccurrences(src, find);
  if (n !== 1) {
    if (P.optional && n === 0 && !src.includes(P.replace)) { console.log(`SKIP (anchor gia' assente, stato ok): ${P.name}`); continue; }
    console.error(`ERRORE: anchor per "${P.name}" trovato ${n} volte (atteso 1). Nessuna modifica scritta.`);
    process.exit(1);
  }
  src = src.replace(find, P.replace);
  applied++;
  for (const [f2, r2] of [['find2', 'replace2'], ['find3', 'replace3']]) {
    if (P[f2]) {
      const n2 = countOccurrences(src, P[f2]);
      if (n2 !== 1) { console.error(`ERRORE: ${f2} per "${P.name}" trovato ${n2} volte.`); process.exit(1); }
      src = src.replace(P[f2], P[r2]);
      applied++;
    }
  }
  console.log(`OK: ${P.name}`);
}

if (applied > 0) {
  try { new Function(src); } catch (e) { console.error('ERRORE: il bundle generato non e\u2019 sintatticamente valido: ' + e.message); process.exit(1); }
  writeFileSync(BUNDLE, src);
  console.log(`Scritte ${applied} patch su ${BUNDLE}`);
} else {
  console.log('Nessuna patch da scrivere.');
}
