import fs from 'fs';

const bundlePath = 'assets/index-C9rd31_W.js';
let src = fs.readFileSync(bundlePath, 'utf8');

// 1. Grip & Boost modifier
const gripTarget = 'let G=(o.drifting?r.driftGrip:r.grip)*i;(o.boostTime>0||o.padBoostTime>0)&&(G=Math.max(G,r.boostGrip)),o.grounded?(o.onRoad||(o.boostTime>0||o.padBoostTime>0)?G:G*.72):G*=.08,x*=Math.exp(-G*t);const H=o.boostTime>0||o.padBoostTime>0,z=(r.maxSpeed+(H?o.boostPower:0))*(o.onRoad||H?1:0.58);';
const gripReplacement = 'let G=(o.drifting?r.driftGrip:r.grip)*i;if(window.__CURRENT_TRACK_INDEX===5&&o.drifting)G*=.82;(o.boostTime>0||o.padBoostTime>0)&&(G=Math.max(G,r.boostGrip)),o.grounded?(o.onRoad||(o.boostTime>0||o.padBoostTime>0)?G:G*.72):G*=.08,x*=Math.exp(-G*t);const H=o.boostTime>0||o.padBoostTime>0;let z=(r.maxSpeed+(H?o.boostPower:0))*(o.onRoad||H?1:0.58);if((window.__CURRENT_TRACK_INDEX===7||window.__CURRENT_TRACK_INDEX===8||window.__CURRENT_TRACK_INDEX===20)&&o.padBoostTime>0)z*=1.06;';

if (!src.includes(gripTarget)) {
  console.error("Grip target not found!");
  process.exit(1);
}
src = src.replace(gripTarget, gripReplacement);

// 2. Wind buffeting in integrate
const integrateTarget = 'integrate(t,e,n,i,r,o,a){const l=this.state,c=l.pos.x,h=l.pos.z;l.speed=e,l.slip=Math.abs(n),l.vel.set(i*e+o*n,l.vy,r*e+a*n),l.pos.x+=l.vel.x*t,l.pos.z+=l.vel.z*t;';
const integrateReplacement = 'integrate(t,e,n,i,r,o,a){const l=this.state,c=l.pos.x,h=l.pos.z;l.speed=e,l.slip=Math.abs(n),l.vel.set(i*e+o*n,l.vy,r*e+a*n),l.pos.x+=l.vel.x*t,l.pos.z+=l.vel.z*t;if((window.__CURRENT_TRACK_INDEX===13||window.__CURRENT_TRACK_INDEX===14||window.__CURRENT_TRACK_INDEX===15)&&!l.grounded){l.pos.x+=Math.sin(t*2.5+l.trackS*.05)*1.8*t;}';

if (!src.includes(integrateTarget)) {
  console.error("Integrate target not found!");
  process.exit(1);
}
src = src.replace(integrateTarget, integrateReplacement);

fs.writeFileSync(bundlePath, src, 'utf8');
console.log('Successfully updated physics modifiers in ' + bundlePath);
