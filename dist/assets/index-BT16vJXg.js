(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=Object.defineProperty,t=(t,n,r)=>n in t?e(t,n,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[n]=r,n=(e,n,r)=>t(e,typeof n==`symbol`?n:n+``,r);(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var r=`169`,i=0,a=1,o=2,s=1,c=2,l=3,u=0,d=1,f=2,p=0,m=1,h=2,g=3,_=4,v=5,y=100,b=101,x=102,S=103,C=104,w=200,T=201,E=202,D=203,O=204,k=205,A=206,j=207,ee=208,te=209,ne=210,re=211,M=212,ie=213,ae=214,oe=0,se=1,ce=2,le=3,N=4,ue=5,de=6,fe=7,pe=0,me=1,he=2,ge=0,_e=1,ve=2,P=3,ye=4,F=5,I=6,L=7,be=300,R=301,z=302,xe=303,Se=304,B=306,Ce=1e3,we=1001,Te=1002,Ee=1003,De=1004,Oe=1005,ke=1006,Ae=1007,je=1008,Me=1009,Ne=1010,Pe=1011,Fe=1012,Ie=1013,Le=1014,Re=1015,ze=1016,Be=1017,Ve=1018,He=1020,Ue=35902,We=1021,Ge=1022,Ke=1023,qe=1024,Je=1025,Ye=1026,Xe=1027,Ze=1028,Qe=1029,$e=1030,et=1031,tt=1033,nt=33776,rt=33777,it=33778,at=33779,ot=35840,st=35841,ct=35842,lt=35843,ut=36196,dt=37492,ft=37496,pt=37808,mt=37809,ht=37810,gt=37811,_t=37812,vt=37813,yt=37814,bt=37815,xt=37816,St=37817,Ct=37818,wt=37819,Tt=37820,Et=37821,Dt=36492,Ot=36494,kt=36495,At=36283,jt=36284,Mt=36285,Nt=36286,Pt=3200,Ft=3201,It=0,Lt=1,Rt=``,zt=`srgb`,Bt=`srgb-linear`,Vt=`display-p3`,Ht=`display-p3-linear`,Ut=`linear`,Wt=`srgb`,Gt=`rec709`,Kt=`p3`,qt=7680,Jt=519,Yt=512,Xt=513,Zt=514,Qt=515,$t=516,en=517,tn=518,nn=519,rn=35044,an=`300 es`,on=2e3,sn=2001,cn=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let n=this._listeners[e];if(n!==void 0){let e=n.indexOf(t);e!==-1&&n.splice(e,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let t=this._listeners[e.type];if(t!==void 0){e.target=this;let n=t.slice(0);for(let t=0,r=n.length;t<r;t++)n[t].call(this,e);e.target=null}}},ln=`00.01.02.03.04.05.06.07.08.09.0a.0b.0c.0d.0e.0f.10.11.12.13.14.15.16.17.18.19.1a.1b.1c.1d.1e.1f.20.21.22.23.24.25.26.27.28.29.2a.2b.2c.2d.2e.2f.30.31.32.33.34.35.36.37.38.39.3a.3b.3c.3d.3e.3f.40.41.42.43.44.45.46.47.48.49.4a.4b.4c.4d.4e.4f.50.51.52.53.54.55.56.57.58.59.5a.5b.5c.5d.5e.5f.60.61.62.63.64.65.66.67.68.69.6a.6b.6c.6d.6e.6f.70.71.72.73.74.75.76.77.78.79.7a.7b.7c.7d.7e.7f.80.81.82.83.84.85.86.87.88.89.8a.8b.8c.8d.8e.8f.90.91.92.93.94.95.96.97.98.99.9a.9b.9c.9d.9e.9f.a0.a1.a2.a3.a4.a5.a6.a7.a8.a9.aa.ab.ac.ad.ae.af.b0.b1.b2.b3.b4.b5.b6.b7.b8.b9.ba.bb.bc.bd.be.bf.c0.c1.c2.c3.c4.c5.c6.c7.c8.c9.ca.cb.cc.cd.ce.cf.d0.d1.d2.d3.d4.d5.d6.d7.d8.d9.da.db.dc.dd.de.df.e0.e1.e2.e3.e4.e5.e6.e7.e8.e9.ea.eb.ec.ed.ee.ef.f0.f1.f2.f3.f4.f5.f6.f7.f8.f9.fa.fb.fc.fd.fe.ff`.split(`.`),un=Math.PI/180,dn=180/Math.PI;function fn(){let e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(ln[e&255]+ln[e>>8&255]+ln[e>>16&255]+ln[e>>24&255]+`-`+ln[t&255]+ln[t>>8&255]+`-`+ln[t>>16&15|64]+ln[t>>24&255]+`-`+ln[n&63|128]+ln[n>>8&255]+`-`+ln[n>>16&255]+ln[n>>24&255]+ln[r&255]+ln[r>>8&255]+ln[r>>16&255]+ln[r>>24&255]).toLowerCase()}function pn(e,t,n){return Math.max(t,Math.min(n,e))}function mn(e,t){return(e%t+t)%t}function hn(e,t,n){return(1-n)*e+n*t}function gn(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return e/4294967295;case Uint16Array:return e/65535;case Uint8Array:return e/255;case Int32Array:return Math.max(e/2147483647,-1);case Int16Array:return Math.max(e/32767,-1);case Int8Array:return Math.max(e/127,-1);default:throw Error(`Invalid component type.`)}}function _n(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return Math.round(e*4294967295);case Uint16Array:return Math.round(e*65535);case Uint8Array:return Math.round(e*255);case Int32Array:return Math.round(e*2147483647);case Int16Array:return Math.round(e*32767);case Int8Array:return Math.round(e*127);default:throw Error(`Invalid component type.`)}}var V=class e{constructor(t=0,n=0){e.prototype.isVector2=!0,this.x=t,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw Error(`index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw Error(`index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(pn(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),r=Math.sin(t),i=this.x-e.x,a=this.y-e.y;return this.x=i*n-a*r+e.x,this.y=i*r+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},H=class e{constructor(t,n,r,i,a,o,s,c,l){e.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,n,r,i,a,o,s,c,l)}set(e,t,n,r,i,a,o,s,c){let l=this.elements;return l[0]=e,l[1]=r,l[2]=o,l[3]=t,l[4]=i,l[5]=s,l[6]=n,l[7]=a,l[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,i=this.elements,a=n[0],o=n[3],s=n[6],c=n[1],l=n[4],u=n[7],d=n[2],f=n[5],p=n[8],m=r[0],h=r[3],g=r[6],_=r[1],v=r[4],y=r[7],b=r[2],x=r[5],S=r[8];return i[0]=a*m+o*_+s*b,i[3]=a*h+o*v+s*x,i[6]=a*g+o*y+s*S,i[1]=c*m+l*_+u*b,i[4]=c*h+l*v+u*x,i[7]=c*g+l*y+u*S,i[2]=d*m+f*_+p*b,i[5]=d*h+f*v+p*x,i[8]=d*g+f*y+p*S,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8];return t*a*l-t*o*c-n*i*l+n*o*s+r*i*c-r*a*s}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8],u=l*a-o*c,d=o*s-l*i,f=c*i-a*s,p=t*u+n*d+r*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let m=1/p;return e[0]=u*m,e[1]=(r*c-l*n)*m,e[2]=(o*n-r*a)*m,e[3]=d*m,e[4]=(l*t-r*s)*m,e[5]=(r*i-o*t)*m,e[6]=f*m,e[7]=(n*s-c*t)*m,e[8]=(a*t-n*i)*m,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,i,a,o){let s=Math.cos(i),c=Math.sin(i);return this.set(n*s,n*c,-n*(s*a+c*o)+a+e,-r*c,r*s,-r*(-c*a+s*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(vn.makeScale(e,t)),this}rotate(e){return this.premultiply(vn.makeRotation(-e)),this}translate(e,t){return this.premultiply(vn.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let e=0;e<9;e++)if(t[e]!==n[e])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},vn=new H;function yn(e){for(let t=e.length-1;t>=0;--t)if(e[t]>=65535)return!0;return!1}function bn(e){return document.createElementNS(`http://www.w3.org/1999/xhtml`,e)}function xn(){let e=bn(`canvas`);return e.style.display=`block`,e}var Sn={};function Cn(e){e in Sn||(Sn[e]=!0,console.warn(e))}function wn(e,t,n){return new Promise(function(r,i){function a(){switch(e.clientWaitSync(t,e.SYNC_FLUSH_COMMANDS_BIT,0)){case e.WAIT_FAILED:i();break;case e.TIMEOUT_EXPIRED:setTimeout(a,n);break;default:r()}}setTimeout(a,n)})}function Tn(e){let t=e.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function En(e){let t=e.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}var Dn=new H().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),On=new H().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),kn={[Bt]:{transfer:Ut,primaries:Gt,luminanceCoefficients:[.2126,.7152,.0722],toReference:e=>e,fromReference:e=>e},[zt]:{transfer:Wt,primaries:Gt,luminanceCoefficients:[.2126,.7152,.0722],toReference:e=>e.convertSRGBToLinear(),fromReference:e=>e.convertLinearToSRGB()},[Ht]:{transfer:Ut,primaries:Kt,luminanceCoefficients:[.2289,.6917,.0793],toReference:e=>e.applyMatrix3(On),fromReference:e=>e.applyMatrix3(Dn)},[Vt]:{transfer:Wt,primaries:Kt,luminanceCoefficients:[.2289,.6917,.0793],toReference:e=>e.convertSRGBToLinear().applyMatrix3(On),fromReference:e=>e.applyMatrix3(Dn).convertLinearToSRGB()}},An=new Set([Bt,Ht]),U={enabled:!0,_workingColorSpace:Bt,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(e){if(!An.has(e))throw Error(`Unsupported working color space, "${e}".`);this._workingColorSpace=e},convert:function(e,t,n){if(this.enabled===!1||t===n||!t||!n)return e;let r=kn[t].toReference,i=kn[n].fromReference;return i(r(e))},fromWorkingColorSpace:function(e,t){return this.convert(e,this._workingColorSpace,t)},toWorkingColorSpace:function(e,t){return this.convert(e,t,this._workingColorSpace)},getPrimaries:function(e){return kn[e].primaries},getTransfer:function(e){return e===Rt?Ut:kn[e].transfer},getLuminanceCoefficients:function(e,t=this._workingColorSpace){return e.fromArray(kn[t].luminanceCoefficients)}};function jn(e){return e<.04045?e*.0773993808:(e*.9478672986+.0521327014)**2.4}function Mn(e){return e<.0031308?e*12.92:1.055*e**.41666-.055}var Nn,Pn=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>`u`)return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Nn===void 0&&(Nn=bn(`canvas`)),Nn.width=e.width,Nn.height=e.height;let n=Nn.getContext(`2d`);e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Nn}return t.width>2048||t.height>2048?(console.warn(`THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons`,e),t.toDataURL(`image/jpeg`,.6)):t.toDataURL(`image/png`)}static sRGBToLinear(e){if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap){let t=bn(`canvas`);t.width=e.width,t.height=e.height;let n=t.getContext(`2d`);n.drawImage(e,0,0,e.width,e.height);let r=n.getImageData(0,0,e.width,e.height),i=r.data;for(let e=0;e<i.length;e++)i[e]=jn(i[e]/255)*255;return n.putImageData(r,0,0),t}if(e.data){let t=e.data.slice(0);for(let e=0;e<t.length;e++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[e]=Math.floor(jn(t[e]/255)*255):t[e]=jn(t[e]);return{data:t,width:e.width,height:e.height}}return console.warn(`THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied.`),e}},Fn=0,In=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Fn++}),this.uuid=fn(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e==`string`;if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:``},r=this.data;if(r!==null){let e;if(Array.isArray(r)){e=[];for(let t=0,n=r.length;t<n;t++)r[t].isDataTexture?e.push(Ln(r[t].image)):e.push(Ln(r[t]))}else e=Ln(r);n.url=e}return t||(e.images[this.uuid]=n),n}};function Ln(e){return typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap?Pn.getDataURL(e):e.data?{data:Array.from(e.data),width:e.width,height:e.height,type:e.data.constructor.name}:(console.warn(`THREE.Texture: Unable to serialize Texture.`),{})}var Rn=0,zn=class e extends cn{constructor(t=e.DEFAULT_IMAGE,n=e.DEFAULT_MAPPING,r=we,i=we,a=ke,o=je,s=Ke,c=Me,l=e.DEFAULT_ANISOTROPY,u=Rt){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Rn++}),this.uuid=fn(),this.name=``,this.source=new In(t),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=r,this.wrapT=i,this.magFilter=a,this.minFilter=o,this.anisotropy=l,this.format=s,this.internalFormat=null,this.type=c,this.offset=new V(0,0),this.repeat=new V(1,1),this.center=new V(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new H,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e==`string`;if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.6,type:`Texture`,generator:`Texture.toJSON`},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:`dispose`})}transformUv(e){if(this.mapping!==be)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ce:e.x-=Math.floor(e.x);break;case we:e.x=e.x<0?0:1;break;case Te:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x-=Math.floor(e.x)}if(e.y<0||e.y>1)switch(this.wrapT){case Ce:e.y-=Math.floor(e.y);break;case we:e.y=e.y<0?0:1;break;case Te:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y-=Math.floor(e.y)}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};zn.DEFAULT_IMAGE=null,zn.DEFAULT_MAPPING=be,zn.DEFAULT_ANISOTROPY=1;var Bn=class e{constructor(t=0,n=0,r=0,i=1){e.prototype.isVector4=!0,this.x=t,this.y=n,this.z=r,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw Error(`index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw Error(`index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w===void 0?1:e.w,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,i=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r+a[12]*i,this.y=a[1]*t+a[5]*n+a[9]*r+a[13]*i,this.z=a[2]*t+a[6]*n+a[10]*r+a[14]*i,this.w=a[3]*t+a[7]*n+a[11]*r+a[15]*i,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,i,a=e.elements,o=a[0],s=a[4],c=a[8],l=a[1],u=a[5],d=a[9],f=a[2],p=a[6],m=a[10];if(Math.abs(s-l)<.01&&Math.abs(c-f)<.01&&Math.abs(d-p)<.01){if(Math.abs(s+l)<.1&&Math.abs(c+f)<.1&&Math.abs(d+p)<.1&&Math.abs(o+u+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let e=(o+1)/2,a=(u+1)/2,h=(m+1)/2,g=(s+l)/4,_=(c+f)/4,v=(d+p)/4;return e>a&&e>h?e<.01?(n=0,r=.707106781,i=.707106781):(n=Math.sqrt(e),r=g/n,i=_/n):a>h?a<.01?(n=.707106781,r=0,i=.707106781):(r=Math.sqrt(a),n=g/r,i=v/r):h<.01?(n=.707106781,r=.707106781,i=0):(i=Math.sqrt(h),n=_/i,r=v/i),this.set(n,r,i,t),this}let h=Math.sqrt((p-d)*(p-d)+(c-f)*(c-f)+(l-s)*(l-s));return Math.abs(h)<.001&&(h=1),this.x=(p-d)/h,this.y=(c-f)/h,this.z=(l-s)/h,this.w=Math.acos((o+u+m-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Vn=class extends cn{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Bn(0,0,e,t),this.scissorTest=!1,this.viewport=new Bn(0,0,e,t);let r={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ke,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let i=new zn(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);i.flipY=!1,i.generateMipmaps=n.generateMipmaps,i.internalFormat=n.internalFormat,this.textures=[];let a=n.count;for(let e=0;e<a;e++)this.textures[e]=i.clone(),this.textures[e].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,i=this.textures.length;r<i;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++)this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new In(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:`dispose`})}},Hn=class extends Vn{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Un=class extends zn{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Ee,this.minFilter=Ee,this.wrapR=we,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}},Wn=class extends zn{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Ee,this.minFilter=Ee,this.wrapR=we,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Gn=class{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,i,a,o){let s=n[r+0],c=n[r+1],l=n[r+2],u=n[r+3],d=i[a+0],f=i[a+1],p=i[a+2],m=i[a+3];if(o===0){e[t+0]=s,e[t+1]=c,e[t+2]=l,e[t+3]=u;return}if(o===1){e[t+0]=d,e[t+1]=f,e[t+2]=p,e[t+3]=m;return}if(u!==m||s!==d||c!==f||l!==p){let e=1-o,t=s*d+c*f+l*p+u*m,n=t>=0?1:-1,r=1-t*t;if(r>2**-52){let i=Math.sqrt(r),a=Math.atan2(i,t*n);e=Math.sin(e*a)/i,o=Math.sin(o*a)/i}let i=o*n;if(s=s*e+d*i,c=c*e+f*i,l=l*e+p*i,u=u*e+m*i,e===1-o){let e=1/Math.sqrt(s*s+c*c+l*l+u*u);s*=e,c*=e,l*=e,u*=e}}e[t]=s,e[t+1]=c,e[t+2]=l,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,r,i,a){let o=n[r],s=n[r+1],c=n[r+2],l=n[r+3],u=i[a],d=i[a+1],f=i[a+2],p=i[a+3];return e[t]=o*p+l*u+s*f-c*d,e[t+1]=s*p+l*d+c*u-o*f,e[t+2]=c*p+l*f+o*d-s*u,e[t+3]=l*p-o*u-s*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,r=e._y,i=e._z,a=e._order,o=Math.cos,s=Math.sin,c=o(n/2),l=o(r/2),u=o(i/2),d=s(n/2),f=s(r/2),p=s(i/2);switch(a){case`XYZ`:this._x=d*l*u+c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u-d*f*p;break;case`YXZ`:this._x=d*l*u+c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u+d*f*p;break;case`ZXY`:this._x=d*l*u-c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u-d*f*p;break;case`ZYX`:this._x=d*l*u-c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u+d*f*p;break;case`YZX`:this._x=d*l*u+c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u-d*f*p;break;case`XZY`:this._x=d*l*u-c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u+d*f*p;break;default:console.warn(`THREE.Quaternion: .setFromEuler() encountered an unknown order: `+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],r=t[4],i=t[8],a=t[1],o=t[5],s=t[9],c=t[2],l=t[6],u=t[10],d=n+o+u;if(d>0){let e=.5/Math.sqrt(d+1);this._w=.25/e,this._x=(l-s)*e,this._y=(i-c)*e,this._z=(a-r)*e}else if(n>o&&n>u){let e=2*Math.sqrt(1+n-o-u);this._w=(l-s)/e,this._x=.25*e,this._y=(r+a)/e,this._z=(i+c)/e}else if(o>u){let e=2*Math.sqrt(1+o-n-u);this._w=(i-c)/e,this._x=(r+a)/e,this._y=.25*e,this._z=(s+l)/e}else{let e=2*Math.sqrt(1+u-n-o);this._w=(a-r)/e,this._x=(i+c)/e,this._y=(s+l)/e,this._z=.25*e}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<2**-52?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(pn(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x*=e,this._y*=e,this._z*=e,this._w*=e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,r=e._y,i=e._z,a=e._w,o=t._x,s=t._y,c=t._z,l=t._w;return this._x=n*l+a*o+r*c-i*s,this._y=r*l+a*s+i*o-n*c,this._z=i*l+a*c+n*s-r*o,this._w=a*l-n*o-r*s-i*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,r=this._y,i=this._z,a=this._w,o=a*e._w+n*e._x+r*e._y+i*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=r,this._z=i,this;let s=1-o*o;if(s<=2**-52){let e=1-t;return this._w=e*a+t*this._w,this._x=e*n+t*this._x,this._y=e*r+t*this._y,this._z=e*i+t*this._z,this.normalize(),this}let c=Math.sqrt(s),l=Math.atan2(c,o),u=Math.sin((1-t)*l)/c,d=Math.sin(t*l)/c;return this._w=a*u+this._w*d,this._x=n*u+this._x*d,this._y=r*u+this._y*d,this._z=i*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),i=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),i*Math.sin(t),i*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},W=class e{constructor(t=0,n=0,r=0){e.prototype.isVector3=!0,this.x=t,this.y=n,this.z=r}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw Error(`index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw Error(`index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(qn.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(qn.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,r=this.z,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6]*r,this.y=i[1]*t+i[4]*n+i[7]*r,this.z=i[2]*t+i[5]*n+i[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,i=e.elements,a=1/(i[3]*t+i[7]*n+i[11]*r+i[15]);return this.x=(i[0]*t+i[4]*n+i[8]*r+i[12])*a,this.y=(i[1]*t+i[5]*n+i[9]*r+i[13])*a,this.z=(i[2]*t+i[6]*n+i[10]*r+i[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,r=this.z,i=e.x,a=e.y,o=e.z,s=e.w,c=2*(a*r-o*n),l=2*(o*t-i*r),u=2*(i*n-a*t);return this.x=t+s*c+a*u-o*l,this.y=n+s*l+o*c-i*u,this.z=r+s*u+i*l-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,r=this.z,i=e.elements;return this.x=i[0]*t+i[4]*n+i[8]*r,this.y=i[1]*t+i[5]*n+i[9]*r,this.z=i[2]*t+i[6]*n+i[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,r=e.y,i=e.z,a=t.x,o=t.y,s=t.z;return this.x=r*s-i*o,this.y=i*a-n*s,this.z=n*o-r*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Kn.copy(this).projectOnVector(e),this.sub(Kn)}reflect(e){return this.sub(Kn.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(pn(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Kn=new W,qn=new Gn,Jn=class{constructor(e=new W(1/0,1/0,1/0),t=new W(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Xn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Xn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Xn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute(`position`);if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let t=0,n=r.count;t<n;t++)e.isMesh===!0?e.getVertexPosition(t,Xn):Xn.fromBufferAttribute(r,t),Xn.applyMatrix4(e.matrixWorld),this.expandByPoint(Xn);else e.boundingBox===void 0?(n.boundingBox===null&&n.computeBoundingBox(),Zn.copy(n.boundingBox)):(e.boundingBox===null&&e.computeBoundingBox(),Zn.copy(e.boundingBox)),Zn.applyMatrix4(e.matrixWorld),this.union(Zn)}let r=e.children;for(let e=0,n=r.length;e<n;e++)this.expandByObject(r[e],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Xn),Xn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ir),ar.subVectors(this.max,ir),Qn.subVectors(e.a,ir),$n.subVectors(e.b,ir),er.subVectors(e.c,ir),tr.subVectors($n,Qn),nr.subVectors(er,$n),rr.subVectors(Qn,er);let t=[0,-tr.z,tr.y,0,-nr.z,nr.y,0,-rr.z,rr.y,tr.z,0,-tr.x,nr.z,0,-nr.x,rr.z,0,-rr.x,-tr.y,tr.x,0,-nr.y,nr.x,0,-rr.y,rr.x,0];return!cr(t,Qn,$n,er,ar)||(t=[1,0,0,0,1,0,0,0,1],!cr(t,Qn,$n,er,ar))?!1:(or.crossVectors(tr,nr),t=[or.x,or.y,or.z],cr(t,Qn,$n,er,ar))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Xn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Xn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Yn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Yn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Yn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Yn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Yn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Yn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Yn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Yn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Yn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},Yn=[new W,new W,new W,new W,new W,new W,new W,new W],Xn=new W,Zn=new Jn,Qn=new W,$n=new W,er=new W,tr=new W,nr=new W,rr=new W,ir=new W,ar=new W,or=new W,sr=new W;function cr(e,t,n,r,i){for(let a=0,o=e.length-3;a<=o;a+=3){sr.fromArray(e,a);let o=i.x*Math.abs(sr.x)+i.y*Math.abs(sr.y)+i.z*Math.abs(sr.z),s=t.dot(sr),c=n.dot(sr),l=r.dot(sr);if(Math.max(-Math.max(s,c,l),Math.min(s,c,l))>o)return!1}return!0}var lr=new Jn,ur=new W,dr=new W,fr=class{constructor(e=new W,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t===void 0?lr.setFromPoints(e).getCenter(n):n.copy(t);let r=0;for(let t=0,i=e.length;t<i;t++)r=Math.max(r,n.distanceToSquared(e[t]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius*=e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ur.subVectors(e,this.center);let t=ur.lengthSq();if(t>this.radius*this.radius){let e=Math.sqrt(t),n=(e-this.radius)*.5;this.center.addScaledVector(ur,n/e),this.radius+=n}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(dr.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ur.copy(e.center).add(dr)),this.expandByPoint(ur.copy(e.center).sub(dr))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},pr=new W,mr=new W,hr=new W,gr=new W,_r=new W,vr=new W,yr=new W,br=class{constructor(e=new W,t=new W(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,pr)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=pr.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(pr.copy(this.origin).addScaledVector(this.direction,t),pr.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){mr.copy(e).add(t).multiplyScalar(.5),hr.copy(t).sub(e).normalize(),gr.copy(this.origin).sub(mr);let i=e.distanceTo(t)*.5,a=-this.direction.dot(hr),o=gr.dot(this.direction),s=-gr.dot(hr),c=gr.lengthSq(),l=Math.abs(1-a*a),u,d,f,p;if(l>0){if(u=a*s-o,d=a*o-s,p=i*l,u>=0){if(d>=-p){if(d<=p){let e=1/l;u*=e,d*=e,f=u*(u+a*d+2*o)+d*(a*u+d+2*s)+c}else d=i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c}else d=-i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c}else d<=-p?(u=Math.max(0,-(-a*i+o)),d=u>0?-i:Math.min(Math.max(-i,-s),i),f=-u*u+d*(d+2*s)+c):d<=p?(u=0,d=Math.min(Math.max(-i,-s),i),f=d*(d+2*s)+c):(u=Math.max(0,-(a*i+o)),d=u>0?i:Math.min(Math.max(-i,-s),i),f=-u*u+d*(d+2*s)+c)}else d=a>0?-i:i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),r&&r.copy(mr).addScaledVector(hr,d),f}intersectSphere(e,t){pr.subVectors(e.center,this.origin);let n=pr.dot(this.direction),r=pr.dot(pr)-n*n,i=e.radius*e.radius;if(r>i)return null;let a=Math.sqrt(i-r),o=n-a,s=n+a;return s<0?null:o<0?this.at(s,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,i,a,o,s,c=1/this.direction.x,l=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),l>=0?(i=(e.min.y-d.y)*l,a=(e.max.y-d.y)*l):(i=(e.max.y-d.y)*l,a=(e.min.y-d.y)*l),n>a||i>r||((i>n||isNaN(n))&&(n=i),(a<r||isNaN(r))&&(r=a),u>=0?(o=(e.min.z-d.z)*u,s=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,s=(e.min.z-d.z)*u),n>s||o>r)||((o>n||n!==n)&&(n=o),(s<r||r!==r)&&(r=s),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,pr)!==null}intersectTriangle(e,t,n,r,i){_r.subVectors(t,e),vr.subVectors(n,e),yr.crossVectors(_r,vr);let a=this.direction.dot(yr),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;gr.subVectors(this.origin,e);let s=o*this.direction.dot(vr.crossVectors(gr,vr));if(s<0)return null;let c=o*this.direction.dot(_r.cross(gr));if(c<0||s+c>a)return null;let l=-o*gr.dot(yr);return l<0?null:this.at(l/a,i)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},xr=class e{constructor(t,n,r,i,a,o,s,c,l,u,d,f,p,m,h,g){e.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,n,r,i,a,o,s,c,l,u,d,f,p,m,h,g)}set(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h){let g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=r,g[1]=i,g[5]=a,g[9]=o,g[13]=s,g[2]=c,g[6]=l,g[10]=u,g[14]=d,g[3]=f,g[7]=p,g[11]=m,g[15]=h,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new e().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,r=1/Sr.setFromMatrixColumn(e,0).length(),i=1/Sr.setFromMatrixColumn(e,1).length(),a=1/Sr.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*i,t[5]=n[5]*i,t[6]=n[6]*i,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,r=e.y,i=e.z,a=Math.cos(n),o=Math.sin(n),s=Math.cos(r),c=Math.sin(r),l=Math.cos(i),u=Math.sin(i);if(e.order===`XYZ`){let e=a*l,n=a*u,r=o*l,i=o*u;t[0]=s*l,t[4]=-s*u,t[8]=c,t[1]=n+r*c,t[5]=e-i*c,t[9]=-o*s,t[2]=i-e*c,t[6]=r+n*c,t[10]=a*s}else if(e.order===`YXZ`){let e=s*l,n=s*u,r=c*l,i=c*u;t[0]=e+i*o,t[4]=r*o-n,t[8]=a*c,t[1]=a*u,t[5]=a*l,t[9]=-o,t[2]=n*o-r,t[6]=i+e*o,t[10]=a*s}else if(e.order===`ZXY`){let e=s*l,n=s*u,r=c*l,i=c*u;t[0]=e-i*o,t[4]=-a*u,t[8]=r+n*o,t[1]=n+r*o,t[5]=a*l,t[9]=i-e*o,t[2]=-a*c,t[6]=o,t[10]=a*s}else if(e.order===`ZYX`){let e=a*l,n=a*u,r=o*l,i=o*u;t[0]=s*l,t[4]=r*c-n,t[8]=e*c+i,t[1]=s*u,t[5]=i*c+e,t[9]=n*c-r,t[2]=-c,t[6]=o*s,t[10]=a*s}else if(e.order===`YZX`){let e=a*s,n=a*c,r=o*s,i=o*c;t[0]=s*l,t[4]=i-e*u,t[8]=r*u+n,t[1]=u,t[5]=a*l,t[9]=-o*l,t[2]=-c*l,t[6]=n*u+r,t[10]=e-i*u}else if(e.order===`XZY`){let e=a*s,n=a*c,r=o*s,i=o*c;t[0]=s*l,t[4]=-u,t[8]=c*l,t[1]=e*u+i,t[5]=a*l,t[9]=n*u-r,t[2]=r*u-n,t[6]=o*l,t[10]=i*u+e}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(wr,e,Tr)}lookAt(e,t,n){let r=this.elements;return Or.subVectors(e,t),Or.lengthSq()===0&&(Or.z=1),Or.normalize(),Er.crossVectors(n,Or),Er.lengthSq()===0&&(Math.abs(n.z)===1?Or.x+=1e-4:Or.z+=1e-4,Or.normalize(),Er.crossVectors(n,Or)),Er.normalize(),Dr.crossVectors(Or,Er),r[0]=Er.x,r[4]=Dr.x,r[8]=Or.x,r[1]=Er.y,r[5]=Dr.y,r[9]=Or.y,r[2]=Er.z,r[6]=Dr.z,r[10]=Or.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,i=this.elements,a=n[0],o=n[4],s=n[8],c=n[12],l=n[1],u=n[5],d=n[9],f=n[13],p=n[2],m=n[6],h=n[10],g=n[14],_=n[3],v=n[7],y=n[11],b=n[15],x=r[0],S=r[4],C=r[8],w=r[12],T=r[1],E=r[5],D=r[9],O=r[13],k=r[2],A=r[6],j=r[10],ee=r[14],te=r[3],ne=r[7],re=r[11],M=r[15];return i[0]=a*x+o*T+s*k+c*te,i[4]=a*S+o*E+s*A+c*ne,i[8]=a*C+o*D+s*j+c*re,i[12]=a*w+o*O+s*ee+c*M,i[1]=l*x+u*T+d*k+f*te,i[5]=l*S+u*E+d*A+f*ne,i[9]=l*C+u*D+d*j+f*re,i[13]=l*w+u*O+d*ee+f*M,i[2]=p*x+m*T+h*k+g*te,i[6]=p*S+m*E+h*A+g*ne,i[10]=p*C+m*D+h*j+g*re,i[14]=p*w+m*O+h*ee+g*M,i[3]=_*x+v*T+y*k+b*te,i[7]=_*S+v*E+y*A+b*ne,i[11]=_*C+v*D+y*j+b*re,i[15]=_*w+v*O+y*ee+b*M,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],r=e[8],i=e[12],a=e[1],o=e[5],s=e[9],c=e[13],l=e[2],u=e[6],d=e[10],f=e[14],p=e[3],m=e[7],h=e[11],g=e[15];return p*(+i*s*u-r*c*u-i*o*d+n*c*d+r*o*f-n*s*f)+m*(+t*s*f-t*c*d+i*a*d-r*a*f+r*c*l-i*s*l)+h*(+t*c*u-t*o*f-i*a*u+n*a*f+i*o*l-n*c*l)+g*(-r*o*l-t*s*u+t*o*d+r*a*u-n*a*d+n*s*l)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8],u=e[9],d=e[10],f=e[11],p=e[12],m=e[13],h=e[14],g=e[15],_=u*h*c-m*d*c+m*s*f-o*h*f-u*s*g+o*d*g,v=p*d*c-l*h*c-p*s*f+a*h*f+l*s*g-a*d*g,y=l*m*c-p*u*c+p*o*f-a*m*f-l*o*g+a*u*g,b=p*u*s-l*m*s-p*o*d+a*m*d+l*o*h-a*u*h,x=t*_+n*v+r*y+i*b;if(x===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let S=1/x;return e[0]=_*S,e[1]=(m*d*i-u*h*i-m*r*f+n*h*f+u*r*g-n*d*g)*S,e[2]=(o*h*i-m*s*i+m*r*c-n*h*c-o*r*g+n*s*g)*S,e[3]=(u*s*i-o*d*i-u*r*c+n*d*c+o*r*f-n*s*f)*S,e[4]=v*S,e[5]=(l*h*i-p*d*i+p*r*f-t*h*f-l*r*g+t*d*g)*S,e[6]=(p*s*i-a*h*i-p*r*c+t*h*c+a*r*g-t*s*g)*S,e[7]=(a*d*i-l*s*i+l*r*c-t*d*c-a*r*f+t*s*f)*S,e[8]=y*S,e[9]=(p*u*i-l*m*i-p*n*f+t*m*f+l*n*g-t*u*g)*S,e[10]=(a*m*i-p*o*i+p*n*c-t*m*c-a*n*g+t*o*g)*S,e[11]=(l*o*i-a*u*i-l*n*c+t*u*c+a*n*f-t*o*f)*S,e[12]=b*S,e[13]=(l*m*r-p*u*r+p*n*d-t*m*d-l*n*h+t*u*h)*S,e[14]=(p*o*r-a*m*r-p*n*s+t*m*s+a*n*h-t*o*h)*S,e[15]=(a*u*r-l*o*r+l*n*s-t*u*s-a*n*d+t*o*d)*S,this}scale(e){let t=this.elements,n=e.x,r=e.y,i=e.z;return t[0]*=n,t[4]*=r,t[8]*=i,t[1]*=n,t[5]*=r,t[9]*=i,t[2]*=n,t[6]*=r,t[10]*=i,t[3]*=n,t[7]*=r,t[11]*=i,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),r=Math.sin(t),i=1-n,a=e.x,o=e.y,s=e.z,c=i*a,l=i*o;return this.set(c*a+n,c*o-r*s,c*s+r*o,0,c*o+r*s,l*o+n,l*s-r*a,0,c*s-r*o,l*s+r*a,i*s*s+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,i,a){return this.set(1,n,i,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){let r=this.elements,i=t._x,a=t._y,o=t._z,s=t._w,c=i+i,l=a+a,u=o+o,d=i*c,f=i*l,p=i*u,m=a*l,h=a*u,g=o*u,_=s*c,v=s*l,y=s*u,b=n.x,x=n.y,S=n.z;return r[0]=(1-(m+g))*b,r[1]=(f+y)*b,r[2]=(p-v)*b,r[3]=0,r[4]=(f-y)*x,r[5]=(1-(d+g))*x,r[6]=(h+_)*x,r[7]=0,r[8]=(p+v)*S,r[9]=(h-_)*S,r[10]=(1-(d+m))*S,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){let r=this.elements,i=Sr.set(r[0],r[1],r[2]).length(),a=Sr.set(r[4],r[5],r[6]).length(),o=Sr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(i=-i),e.x=r[12],e.y=r[13],e.z=r[14],Cr.copy(this);let s=1/i,c=1/a,l=1/o;return Cr.elements[0]*=s,Cr.elements[1]*=s,Cr.elements[2]*=s,Cr.elements[4]*=c,Cr.elements[5]*=c,Cr.elements[6]*=c,Cr.elements[8]*=l,Cr.elements[9]*=l,Cr.elements[10]*=l,t.setFromRotationMatrix(Cr),n.x=i,n.y=a,n.z=o,this}makePerspective(e,t,n,r,i,a,o=on){let s=this.elements,c=2*i/(t-e),l=2*i/(n-r),u=(t+e)/(t-e),d=(n+r)/(n-r),f,p;if(o===on)f=-(a+i)/(a-i),p=-2*a*i/(a-i);else if(o===sn)f=-a/(a-i),p=-a*i/(a-i);else throw Error(`THREE.Matrix4.makePerspective(): Invalid coordinate system: `+o);return s[0]=c,s[4]=0,s[8]=u,s[12]=0,s[1]=0,s[5]=l,s[9]=d,s[13]=0,s[2]=0,s[6]=0,s[10]=f,s[14]=p,s[3]=0,s[7]=0,s[11]=-1,s[15]=0,this}makeOrthographic(e,t,n,r,i,a,o=on){let s=this.elements,c=1/(t-e),l=1/(n-r),u=1/(a-i),d=(t+e)*c,f=(n+r)*l,p,m;if(o===on)p=(a+i)*u,m=-2*u;else if(o===sn)p=i*u,m=-1*u;else throw Error(`THREE.Matrix4.makeOrthographic(): Invalid coordinate system: `+o);return s[0]=2*c,s[4]=0,s[8]=0,s[12]=-d,s[1]=0,s[5]=2*l,s[9]=0,s[13]=-f,s[2]=0,s[6]=0,s[10]=m,s[14]=-p,s[3]=0,s[7]=0,s[11]=0,s[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let e=0;e<16;e++)if(t[e]!==n[e])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},Sr=new W,Cr=new xr,wr=new W(0,0,0),Tr=new W(1,1,1),Er=new W,Dr=new W,Or=new W,kr=new xr,Ar=new Gn,jr=class e{constructor(t=0,n=0,r=0,i=e.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=r,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let r=e.elements,i=r[0],a=r[4],o=r[8],s=r[1],c=r[5],l=r[9],u=r[2],d=r[6],f=r[10];switch(t){case`XYZ`:this._y=Math.asin(pn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-l,f),this._z=Math.atan2(-a,i)):(this._x=Math.atan2(d,c),this._z=0);break;case`YXZ`:this._x=Math.asin(-pn(l,-1,1)),Math.abs(l)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(s,c)):(this._y=Math.atan2(-u,i),this._z=0);break;case`ZXY`:this._x=Math.asin(pn(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(s,i));break;case`ZYX`:this._y=Math.asin(-pn(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(s,i)):(this._x=0,this._z=Math.atan2(-a,c));break;case`YZX`:this._z=Math.asin(pn(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(-l,c),this._y=Math.atan2(-u,i)):(this._x=0,this._y=Math.atan2(o,f));break;case`XZY`:this._z=Math.asin(-pn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,i)):(this._x=Math.atan2(-l,f),this._y=0);break;default:console.warn(`THREE.Euler: .setFromRotationMatrix() encountered an unknown order: `+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return kr.makeRotationFromQuaternion(e),this.setFromRotationMatrix(kr,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Ar.setFromEuler(this),this.setFromQuaternion(Ar,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};jr.DEFAULT_ORDER=`XYZ`;var Mr=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return!!(this.mask&(1<<e|0))}},Nr=0,Pr=new W,Fr=new Gn,Ir=new xr,Lr=new W,Rr=new W,zr=new W,Br=new Gn,Vr=new W(1,0,0),Hr=new W(0,1,0),Ur=new W(0,0,1),Wr={type:`added`},Gr={type:`removed`},Kr={type:`childadded`,child:null},qr={type:`childremoved`,child:null},Jr=class e extends cn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Nr++}),this.uuid=fn(),this.name=``,this.type=`Object3D`,this.parent=null,this.children=[],this.up=e.DEFAULT_UP.clone();let t=new W,n=new jr,r=new Gn,i=new W(1,1,1);function a(){r.setFromEuler(n,!1)}function o(){n.setFromQuaternion(r,void 0,!1)}n._onChange(a),r._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new xr},normalMatrix:{value:new H}}),this.matrix=new xr,this.matrixWorld=new xr,this.matrixAutoUpdate=e.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=e.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Mr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Fr.setFromAxisAngle(e,t),this.quaternion.multiply(Fr),this}rotateOnWorldAxis(e,t){return Fr.setFromAxisAngle(e,t),this.quaternion.premultiply(Fr),this}rotateX(e){return this.rotateOnAxis(Vr,e)}rotateY(e){return this.rotateOnAxis(Hr,e)}rotateZ(e){return this.rotateOnAxis(Ur,e)}translateOnAxis(e,t){return Pr.copy(e).applyQuaternion(this.quaternion),this.position.add(Pr.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Vr,e)}translateY(e){return this.translateOnAxis(Hr,e)}translateZ(e){return this.translateOnAxis(Ur,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ir.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Lr.copy(e):Lr.set(e,t,n);let r=this.parent;this.updateWorldMatrix(!0,!1),Rr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ir.lookAt(Rr,Lr,this.up):Ir.lookAt(Lr,Rr,this.up),this.quaternion.setFromRotationMatrix(Ir),r&&(Ir.extractRotation(r.matrixWorld),Fr.setFromRotationMatrix(Ir),this.quaternion.premultiply(Fr.invert()))}add(e){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return e===this?(console.error(`THREE.Object3D.add: object can't be added as a child of itself.`,e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Wr),Kr.child=e,this.dispatchEvent(Kr),Kr.child=null):console.error(`THREE.Object3D.add: object not an instance of THREE.Object3D.`,e),this)}remove(e){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.remove(arguments[e]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Gr),qr.child=e,this.dispatchEvent(qr),qr.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ir.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ir.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ir),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Wr),Kr.child=e,this.dispatchEvent(Kr),Kr.child=null,this}getObjectById(e){return this.getObjectByProperty(`id`,e)}getObjectByName(e){return this.getObjectByProperty(`name`,e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){let r=this.children[n].getObjectByProperty(e,t);if(r!==void 0)return r}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let r=this.children;for(let i=0,a=r.length;i<a;i++)r[i].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Rr,e,zr),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Rr,Br,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let e=this.children;for(let t=0,n=e.length;t<n;t++)e[t].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e==`string`,n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:`Object`,generator:`Object3D.toJSON`});let r={};r.uuid=this.uuid,r.type=this.type,this.name!==``&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type=`InstancedMesh`,r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type=`BatchedMesh`,r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(e=>({boxInitialized:e.boxInitialized,boxMin:e.box.min.toArray(),boxMax:e.box.max.toArray(),sphereInitialized:e.sphereInitialized,sphereRadius:e.sphere.radius,sphereCenter:e.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function i(t,n){return t[n.uuid]===void 0&&(t[n.uuid]=n.toJSON(e)),n.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=i(e.geometries,this.geometry);let t=this.geometry.parameters;if(t!==void 0&&t.shapes!==void 0){let n=t.shapes;if(Array.isArray(n))for(let t=0,r=n.length;t<r;t++){let r=n[t];i(e.shapes,r)}else i(e.shapes,n)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(i(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0){if(Array.isArray(this.material)){let t=[];for(let n=0,r=this.material.length;n<r;n++)t.push(i(e.materials,this.material[n]));r.material=t}else r.material=i(e.materials,this.material)}if(this.children.length>0){r.children=[];for(let t=0;t<this.children.length;t++)r.children.push(this.children[t].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let t=0;t<this.animations.length;t++){let n=this.animations[t];r.animations.push(i(e.animations,n))}}if(t){let t=a(e.geometries),r=a(e.materials),i=a(e.textures),o=a(e.images),s=a(e.shapes),c=a(e.skeletons),l=a(e.animations),u=a(e.nodes);t.length>0&&(n.geometries=t),r.length>0&&(n.materials=r),i.length>0&&(n.textures=i),o.length>0&&(n.images=o),s.length>0&&(n.shapes=s),c.length>0&&(n.skeletons=c),l.length>0&&(n.animations=l),u.length>0&&(n.nodes=u)}return n.object=r,n;function a(e){let t=[];for(let n in e){let r=e[n];delete r.metadata,t.push(r)}return t}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let t=0;t<e.children.length;t++){let n=e.children[t];this.add(n.clone())}return this}};Jr.DEFAULT_UP=new W(0,1,0),Jr.DEFAULT_MATRIX_AUTO_UPDATE=!0,Jr.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Yr=new W,Xr=new W,Zr=new W,Qr=new W,$r=new W,ei=new W,ti=new W,ni=new W,ri=new W,ii=new W,ai=new Bn,oi=new Bn,si=new Bn,ci=class e{constructor(e=new W,t=new W,n=new W){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),Yr.subVectors(e,t),r.cross(Yr);let i=r.lengthSq();return i>0?r.multiplyScalar(1/Math.sqrt(i)):r.set(0,0,0)}static getBarycoord(e,t,n,r,i){Yr.subVectors(r,t),Xr.subVectors(n,t),Zr.subVectors(e,t);let a=Yr.dot(Yr),o=Yr.dot(Xr),s=Yr.dot(Zr),c=Xr.dot(Xr),l=Xr.dot(Zr),u=a*c-o*o;if(u===0)return i.set(0,0,0),null;let d=1/u,f=(c*s-o*l)*d,p=(a*l-o*s)*d;return i.set(1-f-p,p,f)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,Qr)!==null&&Qr.x>=0&&Qr.y>=0&&Qr.x+Qr.y<=1}static getInterpolation(e,t,n,r,i,a,o,s){return this.getBarycoord(e,t,n,r,Qr)===null?(s.x=0,s.y=0,`z`in s&&(s.z=0),`w`in s&&(s.w=0),null):(s.setScalar(0),s.addScaledVector(i,Qr.x),s.addScaledVector(a,Qr.y),s.addScaledVector(o,Qr.z),s)}static getInterpolatedAttribute(e,t,n,r,i,a){return ai.setScalar(0),oi.setScalar(0),si.setScalar(0),ai.fromBufferAttribute(e,t),oi.fromBufferAttribute(e,n),si.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(ai,i.x),a.addScaledVector(oi,i.y),a.addScaledVector(si,i.z),a}static isFrontFacing(e,t,n,r){return Yr.subVectors(n,t),Xr.subVectors(e,t),Yr.cross(Xr).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Yr.subVectors(this.c,this.b),Xr.subVectors(this.a,this.b),Yr.cross(Xr).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return e.getNormal(this.a,this.b,this.c,t)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,n){return e.getBarycoord(t,this.a,this.b,this.c,n)}getInterpolation(t,n,r,i,a){return e.getInterpolation(t,this.a,this.b,this.c,n,r,i,a)}containsPoint(t){return e.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return e.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,r=this.b,i=this.c,a,o;$r.subVectors(r,n),ei.subVectors(i,n),ni.subVectors(e,n);let s=$r.dot(ni),c=ei.dot(ni);if(s<=0&&c<=0)return t.copy(n);ri.subVectors(e,r);let l=$r.dot(ri),u=ei.dot(ri);if(l>=0&&u<=l)return t.copy(r);let d=s*u-l*c;if(d<=0&&s>=0&&l<=0)return a=s/(s-l),t.copy(n).addScaledVector($r,a);ii.subVectors(e,i);let f=$r.dot(ii),p=ei.dot(ii);if(p>=0&&f<=p)return t.copy(i);let m=f*c-s*p;if(m<=0&&c>=0&&p<=0)return o=c/(c-p),t.copy(n).addScaledVector(ei,o);let h=l*p-f*u;if(h<=0&&u-l>=0&&f-p>=0)return ti.subVectors(i,r),o=(u-l)/(u-l+(f-p)),t.copy(r).addScaledVector(ti,o);let g=1/(h+m+d);return a=m*g,o=d*g,t.copy(n).addScaledVector($r,a).addScaledVector(ei,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},li={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ui={h:0,s:0,l:0},di={h:0,s:0,l:0};function fi(e,t,n){return n<0&&(n+=1),n>1&&--n,n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*6*(2/3-n):e}var G=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let t=e;t&&t.isColor?this.copy(t):typeof t==`number`?this.setHex(t):typeof t==`string`&&this.setStyle(t)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=zt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,U.toWorkingColorSpace(this,t),this}setRGB(e,t,n,r=U.workingColorSpace){return this.r=e,this.g=t,this.b=n,U.toWorkingColorSpace(this,r),this}setHSL(e,t,n,r=U.workingColorSpace){if(e=mn(e,1),t=pn(t,0,1),n=pn(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,i=2*n-r;this.r=fi(i,r,e+1/3),this.g=fi(i,r,e),this.b=fi(i,r,e-1/3)}return U.toWorkingColorSpace(this,r),this}setStyle(e,t=zt){function n(t){t!==void 0&&parseFloat(t)<1&&console.warn(`THREE.Color: Alpha component of `+e+` will be ignored.`)}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let i,a=r[1],o=r[2];switch(a){case`rgb`:case`rgba`:if(i=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setRGB(Math.min(255,parseInt(i[1],10))/255,Math.min(255,parseInt(i[2],10))/255,Math.min(255,parseInt(i[3],10))/255,t);if(i=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setRGB(Math.min(100,parseInt(i[1],10))/100,Math.min(100,parseInt(i[2],10))/100,Math.min(100,parseInt(i[3],10))/100,t);break;case`hsl`:case`hsla`:if(i=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setHSL(parseFloat(i[1])/360,parseFloat(i[2])/100,parseFloat(i[3])/100,t);break;default:console.warn(`THREE.Color: Unknown color model `+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let n=r[1],i=n.length;if(i===3)return this.setRGB(parseInt(n.charAt(0),16)/15,parseInt(n.charAt(1),16)/15,parseInt(n.charAt(2),16)/15,t);if(i===6)return this.setHex(parseInt(n,16),t);console.warn(`THREE.Color: Invalid hex color `+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=zt){let n=li[e.toLowerCase()];return n===void 0?console.warn(`THREE.Color: Unknown color `+e):this.setHex(n,t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=jn(e.r),this.g=jn(e.g),this.b=jn(e.b),this}copyLinearToSRGB(e){return this.r=Mn(e.r),this.g=Mn(e.g),this.b=Mn(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=zt){return U.fromWorkingColorSpace(pi.copy(this),e),Math.round(pn(pi.r*255,0,255))*65536+Math.round(pn(pi.g*255,0,255))*256+Math.round(pn(pi.b*255,0,255))}getHexString(e=zt){return(`000000`+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=U.workingColorSpace){U.fromWorkingColorSpace(pi.copy(this),t);let n=pi.r,r=pi.g,i=pi.b,a=Math.max(n,r,i),o=Math.min(n,r,i),s,c,l=(o+a)/2;if(o===a)s=0,c=0;else{let e=a-o;switch(c=l<=.5?e/(a+o):e/(2-a-o),a){case n:s=(r-i)/e+(r<i?6:0);break;case r:s=(i-n)/e+2;break;case i:s=(n-r)/e+4}s/=6}return e.h=s,e.s=c,e.l=l,e}getRGB(e,t=U.workingColorSpace){return U.fromWorkingColorSpace(pi.copy(this),t),e.r=pi.r,e.g=pi.g,e.b=pi.b,e}getStyle(e=zt){U.fromWorkingColorSpace(pi.copy(this),e);let t=pi.r,n=pi.g,r=pi.b;return e===zt?`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`:`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`}offsetHSL(e,t,n){return this.getHSL(ui),this.setHSL(ui.h+e,ui.s+t,ui.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(ui),e.getHSL(di);let n=hn(ui.h,di.h,t),r=hn(ui.s,di.s,t),i=hn(ui.l,di.l,t);return this.setHSL(n,r,i),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,r=this.b,i=e.elements;return this.r=i[0]*t+i[3]*n+i[6]*r,this.g=i[1]*t+i[4]*n+i[7]*r,this.b=i[2]*t+i[5]*n+i[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},pi=new G;G.NAMES=li;var mi=0,hi=class extends cn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:mi++}),this.uuid=fn(),this.name=``,this.type=`Material`,this.blending=m,this.side=u,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=O,this.blendDst=k,this.blendEquation=y,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new G(0,0,0),this.blendAlpha=0,this.depthFunc=le,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Jt,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=qt,this.stencilZFail=qt,this.stencilZPass=qt,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e==`string`;t&&(e={textures:{},images:{}});let n={metadata:{version:4.6,type:`Material`,generator:`Material.toJSON`}};n.uuid=this.uuid,n.type=this.type,this.name!==``&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==m&&(n.blending=this.blending),this.side!==u&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==O&&(n.blendSrc=this.blendSrc),this.blendDst!==k&&(n.blendDst=this.blendDst),this.blendEquation!==y&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==le&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Jt&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==qt&&(n.stencilFail=this.stencilFail),this.stencilZFail!==qt&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==qt&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==`round`&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==`round`&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(e){let t=[];for(let n in e){let r=e[n];delete r.metadata,t.push(r)}return t}if(t){let t=r(e.textures),i=r(e.images);t.length>0&&(n.textures=t),i.length>0&&(n.images=i)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let e=t.length;n=Array(e);for(let r=0;r!==e;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:`dispose`})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn(`Material: onBuild() has been removed.`)}},gi=class extends hi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type=`MeshBasicMaterial`,this.color=new G(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new jr,this.combine=pe,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},_i=new W,vi=new V,yi=class{constructor(e,t,n=!1){if(Array.isArray(e))throw TypeError(`THREE.BufferAttribute: array should be a Typed Array.`);this.isBufferAttribute=!0,this.name=``,this.array=e,this.itemSize=t,this.count=e===void 0?0:e.length/t,this.normalized=n,this.usage=rn,this.updateRanges=[],this.gpuType=Re,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,i=this.itemSize;r<i;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)vi.fromBufferAttribute(this,t),vi.applyMatrix3(e),this.setXY(t,vi.x,vi.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)_i.fromBufferAttribute(this,t),_i.applyMatrix3(e),this.setXYZ(t,_i.x,_i.y,_i.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)_i.fromBufferAttribute(this,t),_i.applyMatrix4(e),this.setXYZ(t,_i.x,_i.y,_i.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)_i.fromBufferAttribute(this,t),_i.applyNormalMatrix(e),this.setXYZ(t,_i.x,_i.y,_i.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)_i.fromBufferAttribute(this,t),_i.transformDirection(e),this.setXYZ(t,_i.x,_i.y,_i.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=gn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=_n(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=gn(t,this.array)),t}setX(e,t){return this.normalized&&(t=_n(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=gn(t,this.array)),t}setY(e,t){return this.normalized&&(t=_n(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=gn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=_n(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=gn(t,this.array)),t}setW(e,t){return this.normalized&&(t=_n(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=_n(t,this.array),n=_n(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=_n(t,this.array),n=_n(n,this.array),r=_n(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,i){return e*=this.itemSize,this.normalized&&(t=_n(t,this.array),n=_n(n,this.array),r=_n(r,this.array),i=_n(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=i,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==``&&(e.name=this.name),this.usage!==rn&&(e.usage=this.usage),e}},bi=class extends yi{constructor(e,t,n){super(new Uint16Array(e),t,n)}},xi=class extends yi{constructor(e,t,n){super(new Uint32Array(e),t,n)}},K=class extends yi{constructor(e,t,n){super(new Float32Array(e),t,n)}},Si=0,Ci=new xr,wi=new Jr,Ti=new W,Ei=new Jn,Di=new Jn,Oi=new W,ki=class e extends cn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Si++}),this.uuid=fn(),this.name=``,this.type=`BufferGeometry`,this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return this.index=Array.isArray(e)?new(yn(e)?xi:bi)(e,1):e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let t=new H().getNormalMatrix(e);n.applyNormalMatrix(t),n.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Ci.makeRotationFromQuaternion(e),this.applyMatrix4(Ci),this}rotateX(e){return Ci.makeRotationX(e),this.applyMatrix4(Ci),this}rotateY(e){return Ci.makeRotationY(e),this.applyMatrix4(Ci),this}rotateZ(e){return Ci.makeRotationZ(e),this.applyMatrix4(Ci),this}translate(e,t,n){return Ci.makeTranslation(e,t,n),this.applyMatrix4(Ci),this}scale(e,t,n){return Ci.makeScale(e,t,n),this.applyMatrix4(Ci),this}lookAt(e){return wi.lookAt(e),wi.updateMatrix(),this.applyMatrix4(wi.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ti).negate(),this.translate(Ti.x,Ti.y,Ti.z),this}setFromPoints(e){let t=[];for(let n=0,r=e.length;n<r;n++){let r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute(`position`,new K(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Jn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error(`THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.`,this),this.boundingBox.set(new W(-1/0,-1/0,-1/0),new W(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let e=0,n=t.length;e<n;e++){let n=t[e];Ei.setFromBufferAttribute(n),this.morphTargetsRelative?(Oi.addVectors(this.boundingBox.min,Ei.min),this.boundingBox.expandByPoint(Oi),Oi.addVectors(this.boundingBox.max,Ei.max),this.boundingBox.expandByPoint(Oi)):(this.boundingBox.expandByPoint(Ei.min),this.boundingBox.expandByPoint(Ei.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error(`THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.`,this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new fr);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error(`THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.`,this),this.boundingSphere.set(new W,1/0);return}if(e){let n=this.boundingSphere.center;if(Ei.setFromBufferAttribute(e),t)for(let e=0,n=t.length;e<n;e++){let n=t[e];Di.setFromBufferAttribute(n),this.morphTargetsRelative?(Oi.addVectors(Ei.min,Di.min),Ei.expandByPoint(Oi),Oi.addVectors(Ei.max,Di.max),Ei.expandByPoint(Oi)):(Ei.expandByPoint(Di.min),Ei.expandByPoint(Di.max))}Ei.getCenter(n);let r=0;for(let t=0,i=e.count;t<i;t++)Oi.fromBufferAttribute(e,t),r=Math.max(r,n.distanceToSquared(Oi));if(t)for(let i=0,a=t.length;i<a;i++){let a=t[i],o=this.morphTargetsRelative;for(let t=0,i=a.count;t<i;t++)Oi.fromBufferAttribute(a,t),o&&(Ti.fromBufferAttribute(e,t),Oi.add(Ti)),r=Math.max(r,n.distanceToSquared(Oi))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error(`THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.`,this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error(`THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)`);return}let n=t.position,r=t.normal,i=t.uv;this.hasAttribute(`tangent`)===!1&&this.setAttribute(`tangent`,new yi(new Float32Array(4*n.count),4));let a=this.getAttribute(`tangent`),o=[],s=[];for(let e=0;e<n.count;e++)o[e]=new W,s[e]=new W;let c=new W,l=new W,u=new W,d=new V,f=new V,p=new V,m=new W,h=new W;function g(e,t,r){c.fromBufferAttribute(n,e),l.fromBufferAttribute(n,t),u.fromBufferAttribute(n,r),d.fromBufferAttribute(i,e),f.fromBufferAttribute(i,t),p.fromBufferAttribute(i,r),l.sub(c),u.sub(c),f.sub(d),p.sub(d);let a=1/(f.x*p.y-p.x*f.y);isFinite(a)&&(m.copy(l).multiplyScalar(p.y).addScaledVector(u,-f.y).multiplyScalar(a),h.copy(u).multiplyScalar(f.x).addScaledVector(l,-p.x).multiplyScalar(a),o[e].add(m),o[t].add(m),o[r].add(m),s[e].add(h),s[t].add(h),s[r].add(h))}let _=this.groups;_.length===0&&(_=[{start:0,count:e.count}]);for(let t=0,n=_.length;t<n;++t){let n=_[t],r=n.start,i=n.count;for(let t=r,n=r+i;t<n;t+=3)g(e.getX(t+0),e.getX(t+1),e.getX(t+2))}let v=new W,y=new W,b=new W,x=new W;function S(e){b.fromBufferAttribute(r,e),x.copy(b);let t=o[e];v.copy(t),v.sub(b.multiplyScalar(b.dot(t))).normalize(),y.crossVectors(x,t);let n=y.dot(s[e])<0?-1:1;a.setXYZW(e,v.x,v.y,v.z,n)}for(let t=0,n=_.length;t<n;++t){let n=_[t],r=n.start,i=n.count;for(let t=r,n=r+i;t<n;t+=3)S(e.getX(t+0)),S(e.getX(t+1)),S(e.getX(t+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute(`position`);if(t!==void 0){let n=this.getAttribute(`normal`);if(n===void 0)n=new yi(new Float32Array(t.count*3),3),this.setAttribute(`normal`,n);else for(let e=0,t=n.count;e<t;e++)n.setXYZ(e,0,0,0);let r=new W,i=new W,a=new W,o=new W,s=new W,c=new W,l=new W,u=new W;if(e)for(let d=0,f=e.count;d<f;d+=3){let f=e.getX(d+0),p=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(t,f),i.fromBufferAttribute(t,p),a.fromBufferAttribute(t,m),l.subVectors(a,i),u.subVectors(r,i),l.cross(u),o.fromBufferAttribute(n,f),s.fromBufferAttribute(n,p),c.fromBufferAttribute(n,m),o.add(l),s.add(l),c.add(l),n.setXYZ(f,o.x,o.y,o.z),n.setXYZ(p,s.x,s.y,s.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let e=0,o=t.count;e<o;e+=3)r.fromBufferAttribute(t,e+0),i.fromBufferAttribute(t,e+1),a.fromBufferAttribute(t,e+2),l.subVectors(a,i),u.subVectors(r,i),l.cross(u),n.setXYZ(e+0,l.x,l.y,l.z),n.setXYZ(e+1,l.x,l.y,l.z),n.setXYZ(e+2,l.x,l.y,l.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Oi.fromBufferAttribute(e,t),Oi.normalize(),e.setXYZ(t,Oi.x,Oi.y,Oi.z)}toNonIndexed(){function t(e,t){let n=e.array,r=e.itemSize,i=e.normalized,a=new n.constructor(t.length*r),o=0,s=0;for(let i=0,c=t.length;i<c;i++){o=e.isInterleavedBufferAttribute?t[i]*e.data.stride+e.offset:t[i]*r;for(let e=0;e<r;e++)a[s++]=n[o++]}return new yi(a,r,i)}if(this.index===null)return console.warn(`THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed.`),this;let n=new e,r=this.index.array,i=this.attributes;for(let e in i){let a=i[e],o=t(a,r);n.setAttribute(e,o)}let a=this.morphAttributes;for(let e in a){let i=[],o=a[e];for(let e=0,n=o.length;e<n;e++){let n=o[e],a=t(n,r);i.push(a)}n.morphAttributes[e]=i}n.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let e=0,t=o.length;e<t;e++){let t=o[e];n.addGroup(t.start,t.count,t.materialIndex)}return n}toJSON(){let e={metadata:{version:4.6,type:`BufferGeometry`,generator:`BufferGeometry.toJSON`}};if(e.uuid=this.uuid,e.type=this.type,this.name!==``&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let t=this.parameters;for(let n in t)t[n]!==void 0&&(e[n]=t[n]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let t in n){let r=n[t];e.data.attributes[t]=r.toJSON(e.data)}let r={},i=!1;for(let t in this.morphAttributes){let n=this.morphAttributes[t],a=[];for(let t=0,r=n.length;t<r;t++){let r=n[t];a.push(r.toJSON(e.data))}a.length>0&&(r[t]=a,i=!0)}i&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone(t));let r=e.attributes;for(let e in r){let n=r[e];this.setAttribute(e,n.clone(t))}let i=e.morphAttributes;for(let e in i){let n=[],r=i[e];for(let e=0,i=r.length;e<i;e++)n.push(r[e].clone(t));this.morphAttributes[e]=n}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let e=0,t=a.length;e<t;e++){let t=a[e];this.addGroup(t.start,t.count,t.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let s=e.boundingSphere;return s!==null&&(this.boundingSphere=s.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:`dispose`})}},Ai=new xr,ji=new br,Mi=new fr,Ni=new W,Pi=new W,Fi=new W,Ii=new W,Li=new W,Ri=new W,zi=new W,Bi=new W,q=class extends Jr{constructor(e=new ki,t=new gi){super(),this.isMesh=!0,this.type=`Mesh`,this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=n.length;e<t;e++){let t=n[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[t]=e}}}}getVertexPosition(e,t){let n=this.geometry,r=n.attributes.position,i=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(r,e);let o=this.morphTargetInfluences;if(i&&o){Ri.set(0,0,0);for(let n=0,r=i.length;n<r;n++){let r=o[n],s=i[n];r!==0&&(Li.fromBufferAttribute(s,e),a?Ri.addScaledVector(Li,r):Ri.addScaledVector(Li.sub(t),r))}t.add(Ri)}return t}raycast(e,t){let n=this.geometry,r=this.material,i=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Mi.copy(n.boundingSphere),Mi.applyMatrix4(i),ji.copy(e.ray).recast(e.near),!(Mi.containsPoint(ji.origin)===!1&&(ji.intersectSphere(Mi,Ni)===null||ji.origin.distanceToSquared(Ni)>(e.far-e.near)**2))&&(Ai.copy(i).invert(),ji.copy(e.ray).applyMatrix4(Ai),(n.boundingBox===null||ji.intersectsBox(n.boundingBox)!==!1)&&this._computeIntersections(e,t,ji)))}_computeIntersections(e,t,n){let r,i=this.geometry,a=this.material,o=i.index,s=i.attributes.position,c=i.attributes.uv,l=i.attributes.uv1,u=i.attributes.normal,d=i.groups,f=i.drawRange;if(o!==null){if(Array.isArray(a))for(let i=0,s=d.length;i<s;i++){let s=d[i],p=a[s.materialIndex],m=Math.max(s.start,f.start),h=Math.min(o.count,Math.min(s.start+s.count,f.start+f.count));for(let i=m,a=h;i<a;i+=3){let a=o.getX(i),d=o.getX(i+1),f=o.getX(i+2);r=Hi(this,p,e,n,c,l,u,a,d,f),r&&(r.faceIndex=Math.floor(i/3),r.face.materialIndex=s.materialIndex,t.push(r))}}else{let i=Math.max(0,f.start),s=Math.min(o.count,f.start+f.count);for(let d=i,f=s;d<f;d+=3){let i=o.getX(d),s=o.getX(d+1),f=o.getX(d+2);r=Hi(this,a,e,n,c,l,u,i,s,f),r&&(r.faceIndex=Math.floor(d/3),t.push(r))}}}else if(s!==void 0){if(Array.isArray(a))for(let i=0,o=d.length;i<o;i++){let o=d[i],p=a[o.materialIndex],m=Math.max(o.start,f.start),h=Math.min(s.count,Math.min(o.start+o.count,f.start+f.count));for(let i=m,a=h;i<a;i+=3){let a=i,s=i+1,d=i+2;r=Hi(this,p,e,n,c,l,u,a,s,d),r&&(r.faceIndex=Math.floor(i/3),r.face.materialIndex=o.materialIndex,t.push(r))}}else{let i=Math.max(0,f.start),o=Math.min(s.count,f.start+f.count);for(let s=i,d=o;s<d;s+=3){let i=s,o=s+1,d=s+2;r=Hi(this,a,e,n,c,l,u,i,o,d),r&&(r.faceIndex=Math.floor(s/3),t.push(r))}}}}};function Vi(e,t,n,r,i,a,o,s){let c;if(c=t.side===d?r.intersectTriangle(o,a,i,!0,s):r.intersectTriangle(i,a,o,t.side===u,s),c===null)return null;Bi.copy(s),Bi.applyMatrix4(e.matrixWorld);let l=n.ray.origin.distanceTo(Bi);return l<n.near||l>n.far?null:{distance:l,point:Bi.clone(),object:e}}function Hi(e,t,n,r,i,a,o,s,c,l){e.getVertexPosition(s,Pi),e.getVertexPosition(c,Fi),e.getVertexPosition(l,Ii);let u=Vi(e,t,n,r,Pi,Fi,Ii,zi);if(u){let e=new W;ci.getBarycoord(zi,Pi,Fi,Ii,e),i&&(u.uv=ci.getInterpolatedAttribute(i,s,c,l,e,new V)),a&&(u.uv1=ci.getInterpolatedAttribute(a,s,c,l,e,new V)),o&&(u.normal=ci.getInterpolatedAttribute(o,s,c,l,e,new W),u.normal.dot(r.direction)>0&&u.normal.multiplyScalar(-1));let t={a:s,b:c,c:l,normal:new W,materialIndex:0};ci.getNormal(Pi,Fi,Ii,t.normal),u.face=t,u.barycoord=e}return u}var Ui=class e extends ki{constructor(e=1,t=1,n=1,r=1,i=1,a=1){super(),this.type=`BoxGeometry`,this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:i,depthSegments:a};let o=this;r=Math.floor(r),i=Math.floor(i),a=Math.floor(a);let s=[],c=[],l=[],u=[],d=0,f=0;p(`z`,`y`,`x`,-1,-1,n,t,e,a,i,0),p(`z`,`y`,`x`,1,-1,n,t,-e,a,i,1),p(`x`,`z`,`y`,1,1,e,n,t,r,a,2),p(`x`,`z`,`y`,1,-1,e,n,-t,r,a,3),p(`x`,`y`,`z`,1,-1,e,t,n,r,i,4),p(`x`,`y`,`z`,-1,-1,e,t,-n,r,i,5),this.setIndex(s),this.setAttribute(`position`,new K(c,3)),this.setAttribute(`normal`,new K(l,3)),this.setAttribute(`uv`,new K(u,2));function p(e,t,n,r,i,a,p,m,h,g,_){let v=a/h,y=p/g,b=a/2,x=p/2,S=m/2,C=h+1,w=g+1,T=0,E=0,D=new W;for(let a=0;a<w;a++){let o=a*y-x;for(let s=0;s<C;s++)D[e]=(s*v-b)*r,D[t]=o*i,D[n]=S,c.push(D.x,D.y,D.z),D[e]=0,D[t]=0,D[n]=m>0?1:-1,l.push(D.x,D.y,D.z),u.push(s/h),u.push(1-a/g),T+=1}for(let e=0;e<g;e++)for(let t=0;t<h;t++){let n=d+t+C*e,r=d+t+C*(e+1),i=d+(t+1)+C*(e+1),a=d+(t+1)+C*e;s.push(n,r,a),s.push(r,i,a),E+=6}o.addGroup(f,E,_),f+=E,d+=T}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function Wi(e){let t={};for(let n in e){t[n]={};for(let r in e[n]){let i=e[n][r];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn(`UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms().`),t[n][r]=null):t[n][r]=i.clone():Array.isArray(i)?t[n][r]=i.slice():t[n][r]=i}}return t}function Gi(e){let t={};for(let n=0;n<e.length;n++){let r=Wi(e[n]);for(let e in r)t[e]=r[e]}return t}function Ki(e){let t=[];for(let n=0;n<e.length;n++)t.push(e[n].clone());return t}function qi(e){let t=e.getRenderTarget();return t===null?e.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:U.workingColorSpace}var Ji={clone:Wi,merge:Gi},Yi=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Xi=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Zi=class extends hi{constructor(e){super(),this.isShaderMaterial=!0,this.type=`ShaderMaterial`,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Yi,this.fragmentShader=Xi,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Wi(e.uniforms),this.uniformsGroups=Ki(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let n in this.uniforms){let r=this.uniforms[n].value;r&&r.isTexture?t.uniforms[n]={type:`t`,value:r.toJSON(e).uuid}:r&&r.isColor?t.uniforms[n]={type:`c`,value:r.getHex()}:r&&r.isVector2?t.uniforms[n]={type:`v2`,value:r.toArray()}:r&&r.isVector3?t.uniforms[n]={type:`v3`,value:r.toArray()}:r&&r.isVector4?t.uniforms[n]={type:`v4`,value:r.toArray()}:r&&r.isMatrix3?t.uniforms[n]={type:`m3`,value:r.toArray()}:r&&r.isMatrix4?t.uniforms[n]={type:`m4`,value:r.toArray()}:t.uniforms[n]={value:r}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let e in this.extensions)this.extensions[e]===!0&&(n[e]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},Qi=class extends Jr{constructor(){super(),this.isCamera=!0,this.type=`Camera`,this.matrixWorldInverse=new xr,this.projectionMatrix=new xr,this.projectionMatrixInverse=new xr,this.coordinateSystem=on}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},$i=new W,ea=new V,ta=new V,na=class extends Qi{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type=`PerspectiveCamera`,this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=dn*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(un*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return dn*2*Math.atan(Math.tan(un*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){$i.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set($i.x,$i.y).multiplyScalar(-e/$i.z),$i.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set($i.x,$i.y).multiplyScalar(-e/$i.z)}getViewSize(e,t){return this.getViewBounds(e,ea,ta),t.subVectors(ta,ea)}setViewOffset(e,t,n,r,i,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(un*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,i=-.5*r,a=this.view;if(this.view!==null&&this.view.enabled){let e=a.fullWidth,o=a.fullHeight;i+=a.offsetX*r/e,t-=a.offsetY*n/o,r*=a.width/e,n*=a.height/o}let o=this.filmOffset;o!==0&&(i+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(i,i+r,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},ra=-90,ia=1,aa=class extends Jr{constructor(e,t,n){super(),this.type=`CubeCamera`,this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new na(ra,ia,e,t);r.layers=this.layers,this.add(r);let i=new na(ra,ia,e,t);i.layers=this.layers,this.add(i);let a=new na(ra,ia,e,t);a.layers=this.layers,this.add(a);let o=new na(ra,ia,e,t);o.layers=this.layers,this.add(o);let s=new na(ra,ia,e,t);s.layers=this.layers,this.add(s);let c=new na(ra,ia,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,r,i,a,o,s]=t;for(let e of t)this.remove(e);if(e===on)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),i.up.set(0,0,-1),i.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),s.up.set(0,1,0),s.lookAt(0,0,-1);else if(e===sn)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),i.up.set(0,0,1),i.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),s.up.set(0,-1,0),s.lookAt(0,0,-1);else throw Error(`THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: `+e);for(let e of t)this.add(e),e.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[i,a,o,s,c,l]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;let m=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,r),e.render(t,i),e.setRenderTarget(n,1,r),e.render(t,a),e.setRenderTarget(n,2,r),e.render(t,o),e.setRenderTarget(n,3,r),e.render(t,s),e.setRenderTarget(n,4,r),e.render(t,c),n.texture.generateMipmaps=m,e.setRenderTarget(n,5,r),e.render(t,l),e.setRenderTarget(u,d,f),e.xr.enabled=p,n.texture.needsPMREMUpdate=!0}},oa=class extends zn{constructor(e,t,n,r,i,a,o,s,c,l){e=e===void 0?[]:e,t=t===void 0?R:t,super(e,t,n,r,i,a,o,s,c,l),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},sa=class extends Hn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new oa(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0&&t.generateMipmaps,this.texture.minFilter=t.minFilter===void 0?ke:t.minFilter}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Ui(5,5,5),i=new Zi({name:`CubemapFromEquirect`,uniforms:Wi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:d,blending:p});i.uniforms.tEquirect.value=t;let a=new q(r,i),o=t.minFilter;return t.minFilter===je&&(t.minFilter=ke),new aa(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,r){let i=e.getRenderTarget();for(let i=0;i<6;i++)e.setRenderTarget(this,i),e.clear(t,n,r);e.setRenderTarget(i)}},ca=new W,la=new W,ua=new H,da=class{constructor(e=new W(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let r=ca.subVectors(n,t).cross(la.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(ca),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let i=-(e.start.dot(this.normal)+this.constant)/r;return i<0||i>1?null:t.copy(e.start).addScaledVector(n,i)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||ua.getNormalMatrix(e),r=this.coplanarPoint(ca).applyMatrix4(e),i=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(i),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},fa=new fr,pa=new W,ma=class{constructor(e=new da,t=new da,n=new da,r=new da,i=new da,a=new da){this.planes=[e,t,n,r,i,a]}set(e,t,n,r,i,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(r),o[4].copy(i),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=on){let n=this.planes,r=e.elements,i=r[0],a=r[1],o=r[2],s=r[3],c=r[4],l=r[5],u=r[6],d=r[7],f=r[8],p=r[9],m=r[10],h=r[11],g=r[12],_=r[13],v=r[14],y=r[15];if(n[0].setComponents(s-i,d-c,h-f,y-g).normalize(),n[1].setComponents(s+i,d+c,h+f,y+g).normalize(),n[2].setComponents(s+a,d+l,h+p,y+_).normalize(),n[3].setComponents(s-a,d-l,h-p,y-_).normalize(),n[4].setComponents(s-o,d-u,h-m,y-v).normalize(),t===on)n[5].setComponents(s+o,d+u,h+m,y+v).normalize();else if(t===sn)n[5].setComponents(o,u,m,v).normalize();else throw Error(`THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: `+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),fa.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),fa.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(fa)}intersectsSprite(e){return fa.center.set(0,0,0),fa.radius=.7071067811865476,fa.applyMatrix4(e.matrixWorld),this.intersectsSphere(fa)}intersectsSphere(e){let t=this.planes,n=e.center,r=-e.radius;for(let e=0;e<6;e++)if(t[e].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let r=t[n];if(pa.x=r.normal.x>0?e.max.x:e.min.x,pa.y=r.normal.y>0?e.max.y:e.min.y,pa.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(pa)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function ha(){let e=null,t=!1,n=null,r=null;function i(t,a){n(t,a),r=e.requestAnimationFrame(i)}return{start:function(){t!==!0&&n!==null&&(r=e.requestAnimationFrame(i),t=!0)},stop:function(){e.cancelAnimationFrame(r),t=!1},setAnimationLoop:function(e){n=e},setContext:function(t){e=t}}}function ga(e){let t=new WeakMap;function n(t,n){let r=t.array,i=t.usage,a=r.byteLength,o=e.createBuffer();e.bindBuffer(n,o),e.bufferData(n,r,i),t.onUploadCallback();let s;if(r instanceof Float32Array)s=e.FLOAT;else if(r instanceof Uint16Array)s=t.isFloat16BufferAttribute?e.HALF_FLOAT:e.UNSIGNED_SHORT;else if(r instanceof Int16Array)s=e.SHORT;else if(r instanceof Uint32Array)s=e.UNSIGNED_INT;else if(r instanceof Int32Array)s=e.INT;else if(r instanceof Int8Array)s=e.BYTE;else if(r instanceof Uint8Array)s=e.UNSIGNED_BYTE;else if(r instanceof Uint8ClampedArray)s=e.UNSIGNED_BYTE;else throw Error(`THREE.WebGLAttributes: Unsupported buffer data format: `+r);return{buffer:o,type:s,bytesPerElement:r.BYTES_PER_ELEMENT,version:t.version,size:a}}function r(t,n,r){let i=n.array,a=n.updateRanges;if(e.bindBuffer(r,t),a.length===0)e.bufferSubData(r,0,i);else{a.sort((e,t)=>e.start-t.start);let t=0;for(let e=1;e<a.length;e++){let n=a[t],r=a[e];r.start<=n.start+n.count+1?n.count=Math.max(n.count,r.start+r.count-n.start):(++t,a[t]=r)}a.length=t+1;for(let t=0,n=a.length;t<n;t++){let n=a[t];e.bufferSubData(r,n.start*i.BYTES_PER_ELEMENT,i,n.start,n.count)}n.clearUpdateRanges()}n.onUploadCallback()}function i(e){return e.isInterleavedBufferAttribute&&(e=e.data),t.get(e)}function a(n){n.isInterleavedBufferAttribute&&(n=n.data);let r=t.get(n);r&&(e.deleteBuffer(r.buffer),t.delete(n))}function o(e,i){if(e.isInterleavedBufferAttribute&&(e=e.data),e.isGLBufferAttribute){let n=t.get(e);(!n||n.version<e.version)&&t.set(e,{buffer:e.buffer,type:e.type,bytesPerElement:e.elementSize,version:e.version});return}let a=t.get(e);if(a===void 0)t.set(e,n(e,i));else if(a.version<e.version){if(a.size!==e.array.byteLength)throw Error(`THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.`);r(a.buffer,e,i),a.version=e.version}}return{get:i,remove:a,update:o}}var _a=class e extends ki{constructor(e=1,t=1,n=1,r=1){super(),this.type=`PlaneGeometry`,this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};let i=e/2,a=t/2,o=Math.floor(n),s=Math.floor(r),c=o+1,l=s+1,u=e/o,d=t/s,f=[],p=[],m=[],h=[];for(let e=0;e<l;e++){let t=e*d-a;for(let n=0;n<c;n++){let r=n*u-i;p.push(r,-t,0),m.push(0,0,1),h.push(n/o),h.push(1-e/s)}}for(let e=0;e<s;e++)for(let t=0;t<o;t++){let n=t+c*e,r=t+c*(e+1),i=t+1+c*(e+1),a=t+1+c*e;f.push(n,r,a),f.push(r,i,a)}this.setIndex(f),this.setAttribute(`position`,new K(p,3)),this.setAttribute(`normal`,new K(m,3)),this.setAttribute(`uv`,new K(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.widthSegments,t.heightSegments)}},J={alphahash_fragment:`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,alphahash_pars_fragment:`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,alphamap_fragment:`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,alphamap_pars_fragment:`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,alphatest_fragment:`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,alphatest_pars_fragment:`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,aomap_fragment:`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,aomap_pars_fragment:`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,batching_pars_vertex:`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,batching_vertex:`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,begin_vertex:`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,beginnormal_vertex:`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bsdfs:`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,iridescence_fragment:`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,bumpmap_pars_fragment:`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,clipping_planes_fragment:`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,clipping_planes_pars_fragment:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,clipping_planes_pars_vertex:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,clipping_planes_vertex:`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,color_fragment:`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,color_pars_fragment:`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,color_pars_vertex:`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,color_vertex:`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,common:`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,cube_uv_reflection_fragment:`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,defaultnormal_vertex:`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,displacementmap_pars_vertex:`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,displacementmap_vertex:`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,emissivemap_fragment:`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,emissivemap_pars_fragment:`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,colorspace_fragment:`gl_FragColor = linearToOutputTexel( gl_FragColor );`,colorspace_pars_fragment:`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,envmap_fragment:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,envmap_common_pars_fragment:`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,envmap_pars_fragment:`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,envmap_pars_vertex:`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,envmap_physical_pars_fragment:`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,envmap_vertex:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,fog_vertex:`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fog_pars_vertex:`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,fog_fragment:`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fog_pars_fragment:`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gradientmap_pars_fragment:`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,lightmap_pars_fragment:`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,lights_lambert_fragment:`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,lights_lambert_pars_fragment:`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,lights_pars_begin:`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,lights_toon_fragment:`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,lights_toon_pars_fragment:`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,lights_phong_fragment:`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,lights_phong_pars_fragment:`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,lights_physical_fragment:`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,lights_physical_pars_fragment:`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,lights_fragment_begin:`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,lights_fragment_maps:`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,lights_fragment_end:`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,logdepthbuf_fragment:`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,logdepthbuf_pars_fragment:`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_pars_vertex:`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_vertex:`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,map_fragment:`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,map_pars_fragment:`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,map_particle_fragment:`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,map_particle_pars_fragment:`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,metalnessmap_fragment:`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,metalnessmap_pars_fragment:`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,morphinstance_vertex:`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,morphcolor_vertex:`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,morphnormal_vertex:`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,morphtarget_pars_vertex:`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,morphtarget_vertex:`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,normal_fragment_begin:`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,normal_fragment_maps:`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,normal_pars_fragment:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_pars_vertex:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_vertex:`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,normalmap_pars_fragment:`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,clearcoat_normal_fragment_begin:`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,clearcoat_normal_fragment_maps:`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,clearcoat_pars_fragment:`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,iridescence_pars_fragment:`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,opaque_fragment:`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,packing:`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,premultiplied_alpha_fragment:`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,project_vertex:`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,dithering_fragment:`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,dithering_pars_fragment:`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,roughnessmap_fragment:`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,roughnessmap_pars_fragment:`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,shadowmap_pars_fragment:`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,shadowmap_pars_vertex:`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,shadowmap_vertex:`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,shadowmask_pars_fragment:`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,skinbase_vertex:`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,skinning_pars_vertex:`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,skinning_vertex:`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,skinnormal_vertex:`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,specularmap_fragment:`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,specularmap_pars_fragment:`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,tonemapping_fragment:`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tonemapping_pars_fragment:`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,transmission_fragment:`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,transmission_pars_fragment:`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,uv_pars_fragment:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uv_pars_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uv_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,worldpos_vertex:`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,background_vert:`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,background_frag:`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,backgroundCube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,backgroundCube_frag:`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cube_frag:`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,depth_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,depth_frag:`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,distanceRGBA_vert:`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,distanceRGBA_frag:`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,equirect_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,equirect_frag:`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,linedashed_vert:`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,linedashed_frag:`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,meshbasic_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,meshbasic_frag:`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshlambert_vert:`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshlambert_frag:`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshmatcap_vert:`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,meshmatcap_frag:`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshnormal_vert:`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,meshnormal_frag:`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,meshphong_vert:`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshphong_frag:`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshphysical_vert:`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,meshphysical_frag:`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshtoon_vert:`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshtoon_frag:`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,points_vert:`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,points_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,shadow_vert:`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,shadow_frag:`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,sprite_vert:`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,sprite_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`},Y={common:{diffuse:{value:new G(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new H},alphaMap:{value:null},alphaMapTransform:{value:new H},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new H}},envmap:{envMap:{value:null},envMapRotation:{value:new H},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new H}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new H}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new H},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new H},normalScale:{value:new V(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new H},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new H}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new H}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new H}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new G(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new G(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new H},alphaTest:{value:0},uvTransform:{value:new H}},sprite:{diffuse:{value:new G(16777215)},opacity:{value:1},center:{value:new V(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new H},alphaMap:{value:null},alphaMapTransform:{value:new H},alphaTest:{value:0}}},va={basic:{uniforms:Gi([Y.common,Y.specularmap,Y.envmap,Y.aomap,Y.lightmap,Y.fog]),vertexShader:J.meshbasic_vert,fragmentShader:J.meshbasic_frag},lambert:{uniforms:Gi([Y.common,Y.specularmap,Y.envmap,Y.aomap,Y.lightmap,Y.emissivemap,Y.bumpmap,Y.normalmap,Y.displacementmap,Y.fog,Y.lights,{emissive:{value:new G(0)}}]),vertexShader:J.meshlambert_vert,fragmentShader:J.meshlambert_frag},phong:{uniforms:Gi([Y.common,Y.specularmap,Y.envmap,Y.aomap,Y.lightmap,Y.emissivemap,Y.bumpmap,Y.normalmap,Y.displacementmap,Y.fog,Y.lights,{emissive:{value:new G(0)},specular:{value:new G(1118481)},shininess:{value:30}}]),vertexShader:J.meshphong_vert,fragmentShader:J.meshphong_frag},standard:{uniforms:Gi([Y.common,Y.envmap,Y.aomap,Y.lightmap,Y.emissivemap,Y.bumpmap,Y.normalmap,Y.displacementmap,Y.roughnessmap,Y.metalnessmap,Y.fog,Y.lights,{emissive:{value:new G(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:J.meshphysical_vert,fragmentShader:J.meshphysical_frag},toon:{uniforms:Gi([Y.common,Y.aomap,Y.lightmap,Y.emissivemap,Y.bumpmap,Y.normalmap,Y.displacementmap,Y.gradientmap,Y.fog,Y.lights,{emissive:{value:new G(0)}}]),vertexShader:J.meshtoon_vert,fragmentShader:J.meshtoon_frag},matcap:{uniforms:Gi([Y.common,Y.bumpmap,Y.normalmap,Y.displacementmap,Y.fog,{matcap:{value:null}}]),vertexShader:J.meshmatcap_vert,fragmentShader:J.meshmatcap_frag},points:{uniforms:Gi([Y.points,Y.fog]),vertexShader:J.points_vert,fragmentShader:J.points_frag},dashed:{uniforms:Gi([Y.common,Y.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:J.linedashed_vert,fragmentShader:J.linedashed_frag},depth:{uniforms:Gi([Y.common,Y.displacementmap]),vertexShader:J.depth_vert,fragmentShader:J.depth_frag},normal:{uniforms:Gi([Y.common,Y.bumpmap,Y.normalmap,Y.displacementmap,{opacity:{value:1}}]),vertexShader:J.meshnormal_vert,fragmentShader:J.meshnormal_frag},sprite:{uniforms:Gi([Y.sprite,Y.fog]),vertexShader:J.sprite_vert,fragmentShader:J.sprite_frag},background:{uniforms:{uvTransform:{value:new H},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:J.background_vert,fragmentShader:J.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new H}},vertexShader:J.backgroundCube_vert,fragmentShader:J.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:J.cube_vert,fragmentShader:J.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:J.equirect_vert,fragmentShader:J.equirect_frag},distanceRGBA:{uniforms:Gi([Y.common,Y.displacementmap,{referencePosition:{value:new W},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:J.distanceRGBA_vert,fragmentShader:J.distanceRGBA_frag},shadow:{uniforms:Gi([Y.lights,Y.fog,{color:{value:new G(0)},opacity:{value:1}}]),vertexShader:J.shadow_vert,fragmentShader:J.shadow_frag}};va.physical={uniforms:Gi([va.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new H},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new H},clearcoatNormalScale:{value:new V(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new H},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new H},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new H},sheen:{value:0},sheenColor:{value:new G(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new H},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new H},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new H},transmissionSamplerSize:{value:new V},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new H},attenuationDistance:{value:0},attenuationColor:{value:new G(0)},specularColor:{value:new G(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new H},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new H},anisotropyVector:{value:new V},anisotropyMap:{value:null},anisotropyMapTransform:{value:new H}}]),vertexShader:J.meshphysical_vert,fragmentShader:J.meshphysical_frag};var ya={r:0,b:0,g:0},ba=new jr,xa=new xr;function Sa(e,t,n,r,i,a,o){let s=new G(0),c=a===!0?0:1,l,f,p=null,m=0,h=null;function g(e){let r=e.isScene===!0?e.background:null;return r&&r.isTexture&&(r=(e.backgroundBlurriness>0?n:t).get(r)),r}function _(t){let n=!1,i=g(t);i===null?y(s,c):i&&i.isColor&&(y(i,1),n=!0);let a=e.xr.getEnvironmentBlendMode();a===`additive`?r.buffers.color.setClear(0,0,0,1,o):a===`alpha-blend`&&r.buffers.color.setClear(0,0,0,0,o),(e.autoClear||n)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function v(t,n){let r=g(n);r&&(r.isCubeTexture||r.mapping===B)?(f===void 0&&(f=new q(new Ui(1,1,1),new Zi({name:`BackgroundCubeMaterial`,uniforms:Wi(va.backgroundCube.uniforms),vertexShader:va.backgroundCube.vertexShader,fragmentShader:va.backgroundCube.fragmentShader,side:d,depthTest:!1,depthWrite:!1,fog:!1})),f.geometry.deleteAttribute(`normal`),f.geometry.deleteAttribute(`uv`),f.onBeforeRender=function(e,t,n){this.matrixWorld.copyPosition(n.matrixWorld)},Object.defineProperty(f.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(f)),ba.copy(n.backgroundRotation),ba.x*=-1,ba.y*=-1,ba.z*=-1,r.isCubeTexture&&r.isRenderTargetTexture===!1&&(ba.y*=-1,ba.z*=-1),f.material.uniforms.envMap.value=r,f.material.uniforms.flipEnvMap.value=r.isCubeTexture&&r.isRenderTargetTexture===!1?-1:1,f.material.uniforms.backgroundBlurriness.value=n.backgroundBlurriness,f.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,f.material.uniforms.backgroundRotation.value.setFromMatrix4(xa.makeRotationFromEuler(ba)),f.material.toneMapped=U.getTransfer(r.colorSpace)!==Wt,(p!==r||m!==r.version||h!==e.toneMapping)&&(f.material.needsUpdate=!0,p=r,m=r.version,h=e.toneMapping),f.layers.enableAll(),t.unshift(f,f.geometry,f.material,0,0,null)):r&&r.isTexture&&(l===void 0&&(l=new q(new _a(2,2),new Zi({name:`BackgroundMaterial`,uniforms:Wi(va.background.uniforms),vertexShader:va.background.vertexShader,fragmentShader:va.background.fragmentShader,side:u,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute(`normal`),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=r,l.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,l.material.toneMapped=U.getTransfer(r.colorSpace)!==Wt,r.matrixAutoUpdate===!0&&r.updateMatrix(),l.material.uniforms.uvTransform.value.copy(r.matrix),(p!==r||m!==r.version||h!==e.toneMapping)&&(l.material.needsUpdate=!0,p=r,m=r.version,h=e.toneMapping),l.layers.enableAll(),t.unshift(l,l.geometry,l.material,0,0,null))}function y(t,n){t.getRGB(ya,qi(e)),r.buffers.color.setClear(ya.r,ya.g,ya.b,n,o)}return{getClearColor:function(){return s},setClearColor:function(e,t=1){s.set(e),c=t,y(s,c)},getClearAlpha:function(){return c},setClearAlpha:function(e){c=e,y(s,c)},render:_,addToRenderList:v}}function Ca(e,t){let n=e.getParameter(e.MAX_VERTEX_ATTRIBS),r={},i=f(null),a=i,o=!1;function s(n,r,i,s,c){let u=!1,f=d(s,i,r);a!==f&&(a=f,l(a.object)),u=p(n,s,i,c),u&&m(n,s,i,c),c!==null&&t.update(c,e.ELEMENT_ARRAY_BUFFER),(u||o)&&(o=!1,b(n,r,i,s),c!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t.get(c).buffer))}function c(){return e.createVertexArray()}function l(t){return e.bindVertexArray(t)}function u(t){return e.deleteVertexArray(t)}function d(e,t,n){let i=n.wireframe===!0,a=r[e.id];a===void 0&&(a={},r[e.id]=a);let o=a[t.id];o===void 0&&(o={},a[t.id]=o);let s=o[i];return s===void 0&&(s=f(c()),o[i]=s),s}function f(e){let t=[],r=[],i=[];for(let e=0;e<n;e++)t[e]=0,r[e]=0,i[e]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:t,enabledAttributes:r,attributeDivisors:i,object:e,attributes:{},index:null}}function p(e,t,n,r){let i=a.attributes,o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=i[t],r=o[t];if(r===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(r=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(r=e.instanceColor)),n===void 0||n.attribute!==r||r&&n.data!==r.data)return!0;s++}return a.attributesNum!==s||a.index!==r}function m(e,t,n,r){let i={},o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=o[t];n===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(n=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(n=e.instanceColor));let r={};r.attribute=n,n&&n.data&&(r.data=n.data),i[t]=r,s++}a.attributes=i,a.attributesNum=s,a.index=r}function h(){let e=a.newAttributes;for(let t=0,n=e.length;t<n;t++)e[t]=0}function g(e){_(e,0)}function _(t,n){let r=a.newAttributes,i=a.enabledAttributes,o=a.attributeDivisors;r[t]=1,i[t]===0&&(e.enableVertexAttribArray(t),i[t]=1),o[t]!==n&&(e.vertexAttribDivisor(t,n),o[t]=n)}function v(){let t=a.newAttributes,n=a.enabledAttributes;for(let r=0,i=n.length;r<i;r++)n[r]!==t[r]&&(e.disableVertexAttribArray(r),n[r]=0)}function y(t,n,r,i,a,o,s){s===!0?e.vertexAttribIPointer(t,n,r,a,o):e.vertexAttribPointer(t,n,r,i,a,o)}function b(n,r,i,a){h();let o=a.attributes,s=i.getAttributes(),c=r.defaultAttributeValues;for(let r in s){let i=s[r];if(i.location>=0){let s=o[r];if(s===void 0&&(r===`instanceMatrix`&&n.instanceMatrix&&(s=n.instanceMatrix),r===`instanceColor`&&n.instanceColor&&(s=n.instanceColor)),s!==void 0){let r=s.normalized,o=s.itemSize,c=t.get(s);if(c===void 0)continue;let l=c.buffer,u=c.type,d=c.bytesPerElement,f=u===e.INT||u===e.UNSIGNED_INT||s.gpuType===Ie;if(s.isInterleavedBufferAttribute){let t=s.data,c=t.stride,p=s.offset;if(t.isInstancedInterleavedBuffer){for(let e=0;e<i.locationSize;e++)_(i.location+e,t.meshPerAttribute);n.isInstancedMesh!==!0&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=t.meshPerAttribute*t.count)}else for(let e=0;e<i.locationSize;e++)g(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)y(i.location+e,o/i.locationSize,u,r,c*d,(p+o/i.locationSize*e)*d,f)}else{if(s.isInstancedBufferAttribute){for(let e=0;e<i.locationSize;e++)_(i.location+e,s.meshPerAttribute);n.isInstancedMesh!==!0&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=s.meshPerAttribute*s.count)}else for(let e=0;e<i.locationSize;e++)g(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)y(i.location+e,o/i.locationSize,u,r,o*d,o/i.locationSize*e*d,f)}}else if(c!==void 0){let t=c[r];if(t!==void 0)switch(t.length){case 2:e.vertexAttrib2fv(i.location,t);break;case 3:e.vertexAttrib3fv(i.location,t);break;case 4:e.vertexAttrib4fv(i.location,t);break;default:e.vertexAttrib1fv(i.location,t)}}}}v()}function x(){w();for(let e in r){let t=r[e];for(let e in t){let n=t[e];for(let e in n)u(n[e].object),delete n[e];delete t[e]}delete r[e]}}function S(e){if(r[e.id]===void 0)return;let t=r[e.id];for(let e in t){let n=t[e];for(let e in n)u(n[e].object),delete n[e];delete t[e]}delete r[e.id]}function C(e){for(let t in r){let n=r[t];if(n[e.id]===void 0)continue;let i=n[e.id];for(let e in i)u(i[e].object),delete i[e];delete n[e.id]}}function w(){T(),o=!0,a!==i&&(a=i,l(a.object))}function T(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:s,reset:w,resetDefaultState:T,dispose:x,releaseStatesOfGeometry:S,releaseStatesOfProgram:C,initAttributes:h,enableAttribute:g,disableUnusedAttributes:v}}function wa(e,t,n){let r;function i(e){r=e}function a(t,i){e.drawArrays(r,t,i),n.update(i,r,1)}function o(t,i,a){a!==0&&(e.drawArraysInstanced(r,t,i,a),n.update(i,r,a))}function s(e,i,a){if(a===0)return;t.get(`WEBGL_multi_draw`).multiDrawArraysWEBGL(r,e,0,i,0,a);let o=0;for(let e=0;e<a;e++)o+=i[e];n.update(o,r,1)}function c(e,i,a,s){if(a===0)return;let c=t.get(`WEBGL_multi_draw`);if(c===null)for(let t=0;t<e.length;t++)o(e[t],i[t],s[t]);else{c.multiDrawArraysInstancedWEBGL(r,e,0,i,0,s,0,a);let t=0;for(let e=0;e<a;e++)t+=i[e];for(let e=0;e<s.length;e++)n.update(t,r,s[e])}}this.setMode=i,this.render=a,this.renderInstances=o,this.renderMultiDraw=s,this.renderMultiDrawInstances=c}function Ta(e,t,n,r){let i;function a(){if(i!==void 0)return i;if(t.has(`EXT_texture_filter_anisotropic`)===!0){let n=t.get(`EXT_texture_filter_anisotropic`);i=e.getParameter(n.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(t){return t===Ke||r.convert(t)===e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT)}function s(n){let i=n===ze&&(t.has(`EXT_color_buffer_half_float`)||t.has(`EXT_color_buffer_float`));return!(n!==Me&&r.convert(n)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE)&&n!==Re&&!i)}function c(t){if(t===`highp`){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return`highp`;t=`mediump`}return t===`mediump`&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?`mediump`:`lowp`}let l=n.precision===void 0?`highp`:n.precision,u=c(l);u!==l&&(console.warn(`THREE.WebGLRenderer:`,l,`not supported, using`,u,`instead.`),l=u);let d=n.logarithmicDepthBuffer===!0,f=n.reverseDepthBuffer===!0&&t.has(`EXT_clip_control`);if(f===!0){let e=t.get(`EXT_clip_control`);e.clipControlEXT(e.LOWER_LEFT_EXT,e.ZERO_TO_ONE_EXT)}let p=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),m=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),h=e.getParameter(e.MAX_TEXTURE_SIZE),g=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),_=e.getParameter(e.MAX_VERTEX_ATTRIBS),v=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),y=e.getParameter(e.MAX_VARYING_VECTORS),b=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),x=m>0,S=e.getParameter(e.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:s,precision:l,logarithmicDepthBuffer:d,reverseDepthBuffer:f,maxTextures:p,maxVertexTextures:m,maxTextureSize:h,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:v,maxVaryings:y,maxFragmentUniforms:b,vertexTextures:x,maxSamples:S}}function Ea(e){let t=this,n=null,r=0,i=!1,a=!1,o=new da,s=new H,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(e,t){let n=e.length!==0||t||r!==0||i;return i=t,r=e.length,n},this.beginShadows=function(){a=!0,u(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(e,t){n=u(e,t,0)},this.setState=function(t,o,s){let d=t.clippingPlanes,f=t.clipIntersection,p=t.clipShadows,m=e.get(t);if(!i||d===null||d.length===0||a&&!p)a?u(null):l();else{let e=a?0:r,t=e*4,i=m.clippingState||null;c.value=i,i=u(d,o,t,s);for(let e=0;e!==t;++e)i[e]=n[e];m.clippingState=i,this.numIntersection=f?this.numPlanes:0,this.numPlanes+=e}};function l(){c.value!==n&&(c.value=n,c.needsUpdate=r>0),t.numPlanes=r,t.numIntersection=0}function u(e,n,r,i){let a=e===null?0:e.length,l=null;if(a!==0){if(l=c.value,i!==!0||l===null){let t=r+a*4,i=n.matrixWorldInverse;s.getNormalMatrix(i),(l===null||l.length<t)&&(l=new Float32Array(t));for(let t=0,n=r;t!==a;++t,n+=4)o.copy(e[t]).applyMatrix4(i,s),o.normal.toArray(l,n),l[n+3]=o.constant}c.value=l,c.needsUpdate=!0}return t.numPlanes=a,t.numIntersection=0,l}}function Da(e){let t=new WeakMap;function n(e,t){return t===xe?e.mapping=R:t===Se&&(e.mapping=z),e}function r(r){if(r&&r.isTexture){let a=r.mapping;if(a===xe||a===Se){if(t.has(r)){let e=t.get(r).texture;return n(e,r.mapping)}{let a=r.image;if(a&&a.height>0){let o=new sa(a.height);return o.fromEquirectangularTexture(e,r),t.set(r,o),r.addEventListener(`dispose`,i),n(o.texture,r.mapping)}return null}}}return r}function i(e){let n=e.target;n.removeEventListener(`dispose`,i);let r=t.get(n);r!==void 0&&(t.delete(n),r.dispose())}function a(){t=new WeakMap}return{get:r,dispose:a}}var Oa=class extends Qi{constructor(e=-1,t=1,n=1,r=-1,i=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type=`OrthographicCamera`,this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=i,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,i,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2,i=n-e,a=n+e,o=r+t,s=r-t;if(this.view!==null&&this.view.enabled){let e=(this.right-this.left)/this.view.fullWidth/this.zoom,t=(this.top-this.bottom)/this.view.fullHeight/this.zoom;i+=e*this.view.offsetX,a=i+e*this.view.width,o-=t*this.view.offsetY,s=o-t*this.view.height}this.projectionMatrix.makeOrthographic(i,a,o,s,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},ka=4,Aa=[.125,.215,.35,.446,.526,.582],ja=20,Ma=new Oa,Na=new G,Pa=null,Fa=0,Ia=0,La=!1,Ra=(1+Math.sqrt(5))/2,za=1/Ra,Ba=[new W(-Ra,za,0),new W(Ra,za,0),new W(-za,0,Ra),new W(za,0,Ra),new W(0,Ra,-za),new W(0,Ra,za),new W(-1,1,-1),new W(1,1,-1),new W(-1,1,1),new W(1,1,1)],Va=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,r=100){Pa=this._renderer.getRenderTarget(),Fa=this._renderer.getActiveCubeFace(),Ia=this._renderer.getActiveMipmapLevel(),La=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let i=this._allocateTargets();return i.depthBuffer=!0,this._sceneToCubeUV(e,n,r,i),t>0&&this._blur(i,0,0,t),this._applyPMREM(i),this._cleanup(i),i}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=qa(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ka(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=2**this._lodMax}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Pa,Fa,Ia),this._renderer.xr.enabled=La,e.scissorTest=!1,Wa(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===R||e.mapping===z?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Pa=this._renderer.getRenderTarget(),Fa=this._renderer.getActiveCubeFace(),Ia=this._renderer.getActiveMipmapLevel(),La=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:ke,minFilter:ke,generateMipmaps:!1,type:ze,format:Ke,colorSpace:Bt,depthBuffer:!1},r=Ua(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ua(e,t,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Ha(r)),this._blurMaterial=Ga(r,e,t)}return r}_compileMaterial(e){let t=new q(this._lodPlanes[0],e);this._renderer.compile(t,Ma)}_sceneToCubeUV(e,t,n,r){let i=new na(90,1,t,n),a=[1,-1,1,1,1,1],o=[1,1,1,-1,-1,-1],s=this._renderer,c=s.autoClear,l=s.toneMapping;s.getClearColor(Na),s.toneMapping=ge,s.autoClear=!1;let u=new gi({name:`PMREM.Background`,side:d,depthWrite:!1,depthTest:!1}),f=new q(new Ui,u),p=!1,m=e.background;m?m.isColor&&(u.color.copy(m),e.background=null,p=!0):(u.color.copy(Na),p=!0);for(let t=0;t<6;t++){let n=t%3;n===0?(i.up.set(0,a[t],0),i.lookAt(o[t],0,0)):n===1?(i.up.set(0,0,a[t]),i.lookAt(0,o[t],0)):(i.up.set(0,a[t],0),i.lookAt(0,0,o[t]));let c=this._cubeSize;Wa(r,n*c,t>2?c:0,c,c),s.setRenderTarget(r),p&&s.render(f,i),s.render(e,i)}f.geometry.dispose(),f.material.dispose(),s.toneMapping=l,s.autoClear=c,e.background=m}_textureToCubeUV(e,t){let n=this._renderer,r=e.mapping===R||e.mapping===z;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=qa()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ka());let i=r?this._cubemapMaterial:this._equirectMaterial,a=new q(this._lodPlanes[0],i),o=i.uniforms;o.envMap.value=e;let s=this._cubeSize;Wa(t,0,0,3*s,2*s),n.setRenderTarget(t),n.render(a,Ma)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let r=this._lodPlanes.length;for(let t=1;t<r;t++){let n=Math.sqrt(this._sigmas[t]*this._sigmas[t]-this._sigmas[t-1]*this._sigmas[t-1]),i=Ba[(r-t-1)%Ba.length];this._blur(e,t-1,t,n,i)}t.autoClear=n}_blur(e,t,n,r,i){let a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,r,`latitudinal`,i),this._halfBlur(a,e,n,n,r,`longitudinal`,i)}_halfBlur(e,t,n,r,i,a,o){let s=this._renderer,c=this._blurMaterial;a!==`latitudinal`&&a!==`longitudinal`&&console.error(`blur direction must be either latitudinal or longitudinal!`);let l=new q(this._lodPlanes[r],c),u=c.uniforms,d=this._sizeLods[n]-1,f=isFinite(i)?Math.PI/(2*d):2*Math.PI/39,p=i/f,m=isFinite(i)?1+Math.floor(3*p):ja;m>ja&&console.warn(`sigmaRadians, ${i}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${ja}`);let h=[],g=0;for(let e=0;e<ja;++e){let t=e/p,n=Math.exp(-t*t/2);h.push(n),e===0?g+=n:e<m&&(g+=2*n)}for(let e=0;e<h.length;e++)h[e]=h[e]/g;u.envMap.value=e.texture,u.samples.value=m,u.weights.value=h,u.latitudinal.value=a===`latitudinal`,o&&(u.poleAxis.value=o);let{_lodMax:_}=this;u.dTheta.value=f,u.mipInt.value=_-n;let v=this._sizeLods[r];Wa(t,3*v*(r>_-ka?r-_+ka:0),4*(this._cubeSize-v),3*v,2*v),s.setRenderTarget(t),s.render(l,Ma)}};function Ha(e){let t=[],n=[],r=[],i=e,a=e-ka+1+Aa.length;for(let o=0;o<a;o++){let a=2**i;n.push(a);let s=1/a;o>e-ka?s=Aa[o-e+ka-1]:o===0&&(s=0),r.push(s);let c=1/(a-2),l=-c,u=1+c,d=[l,l,u,l,u,u,l,l,u,u,l,u],f=new Float32Array(108),p=new Float32Array(72),m=new Float32Array(36);for(let e=0;e<6;e++){let t=e%3*2/3-1,n=e>2?0:-1,r=[t,n,0,t+2/3,n,0,t+2/3,n+1,0,t,n,0,t+2/3,n+1,0,t,n+1,0];f.set(r,18*e),p.set(d,12*e);let i=[e,e,e,e,e,e];m.set(i,6*e)}let h=new ki;h.setAttribute(`position`,new yi(f,3)),h.setAttribute(`uv`,new yi(p,2)),h.setAttribute(`faceIndex`,new yi(m,1)),t.push(h),i>ka&&i--}return{lodPlanes:t,sizeLods:n,sigmas:r}}function Ua(e,t,n){let r=new Hn(e,t,n);return r.texture.mapping=B,r.texture.name=`PMREM.cubeUv`,r.scissorTest=!0,r}function Wa(e,t,n,r,i){e.viewport.set(t,n,r,i),e.scissor.set(t,n,r,i)}function Ga(e,t,n){let r=new Float32Array(ja),i=new W(0,1,0);return new Zi({name:`SphericalGaussianBlur`,defines:{n:ja,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Ja(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:p,depthTest:!1,depthWrite:!1})}function Ka(){return new Zi({name:`EquirectangularToCubeUV`,uniforms:{envMap:{value:null}},vertexShader:Ja(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:p,depthTest:!1,depthWrite:!1})}function qa(){return new Zi({name:`CubemapToCubeUV`,uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ja(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:p,depthTest:!1,depthWrite:!1})}function Ja(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Ya(e){let t=new WeakMap,n=null;function r(r){if(r&&r.isTexture){let o=r.mapping,s=o===xe||o===Se,c=o===R||o===z;if(s||c){let o=t.get(r),l=o===void 0?0:o.texture.pmremVersion;if(r.isRenderTargetTexture&&r.pmremVersion!==l)return n===null&&(n=new Va(e)),o=s?n.fromEquirectangular(r,o):n.fromCubemap(r,o),o.texture.pmremVersion=r.pmremVersion,t.set(r,o),o.texture;if(o!==void 0)return o.texture;{let l=r.image;return s&&l&&l.height>0||c&&l&&i(l)?(n===null&&(n=new Va(e)),o=s?n.fromEquirectangular(r):n.fromCubemap(r),o.texture.pmremVersion=r.pmremVersion,t.set(r,o),r.addEventListener(`dispose`,a),o.texture):null}}}return r}function i(e){let t=0;for(let n=0;n<6;n++)e[n]!==void 0&&t++;return t===6}function a(e){let n=e.target;n.removeEventListener(`dispose`,a);let r=t.get(n);r!==void 0&&(t.delete(n),r.dispose())}function o(){t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:r,dispose:o}}function Xa(e){let t={};function n(n){if(t[n]!==void 0)return t[n];let r;switch(n){case`WEBGL_depth_texture`:r=e.getExtension(`WEBGL_depth_texture`)||e.getExtension(`MOZ_WEBGL_depth_texture`)||e.getExtension(`WEBKIT_WEBGL_depth_texture`);break;case`EXT_texture_filter_anisotropic`:r=e.getExtension(`EXT_texture_filter_anisotropic`)||e.getExtension(`MOZ_EXT_texture_filter_anisotropic`)||e.getExtension(`WEBKIT_EXT_texture_filter_anisotropic`);break;case`WEBGL_compressed_texture_s3tc`:r=e.getExtension(`WEBGL_compressed_texture_s3tc`)||e.getExtension(`MOZ_WEBGL_compressed_texture_s3tc`)||e.getExtension(`WEBKIT_WEBGL_compressed_texture_s3tc`);break;case`WEBGL_compressed_texture_pvrtc`:r=e.getExtension(`WEBGL_compressed_texture_pvrtc`)||e.getExtension(`WEBKIT_WEBGL_compressed_texture_pvrtc`);break;default:r=e.getExtension(n)}return t[n]=r,r}return{has:function(e){return n(e)!==null},init:function(){n(`EXT_color_buffer_float`),n(`WEBGL_clip_cull_distance`),n(`OES_texture_float_linear`),n(`EXT_color_buffer_half_float`),n(`WEBGL_multisampled_render_to_texture`),n(`WEBGL_render_shared_exponent`)},get:function(e){let t=n(e);return t===null&&Cn(`THREE.WebGLRenderer: `+e+` extension not supported.`),t}}}function Za(e,t,n,r){let i={},a=new WeakMap;function o(e){let s=e.target;s.index!==null&&t.remove(s.index);for(let e in s.attributes)t.remove(s.attributes[e]);for(let e in s.morphAttributes){let n=s.morphAttributes[e];for(let e=0,r=n.length;e<r;e++)t.remove(n[e])}s.removeEventListener(`dispose`,o),delete i[s.id];let c=a.get(s);c&&(t.remove(c),a.delete(s)),r.releaseStatesOfGeometry(s),s.isInstancedBufferGeometry===!0&&delete s._maxInstanceCount,n.memory.geometries--}function s(e,t){return i[t.id]===!0||(t.addEventListener(`dispose`,o),i[t.id]=!0,n.memory.geometries++),t}function c(n){let r=n.attributes;for(let n in r)t.update(r[n],e.ARRAY_BUFFER);let i=n.morphAttributes;for(let n in i){let r=i[n];for(let n=0,i=r.length;n<i;n++)t.update(r[n],e.ARRAY_BUFFER)}}function l(e){let n=[],r=e.index,i=e.attributes.position,o=0;if(r!==null){let e=r.array;o=r.version;for(let t=0,r=e.length;t<r;t+=3){let r=e[t+0],i=e[t+1],a=e[t+2];n.push(r,i,i,a,a,r)}}else if(i!==void 0){let e=i.array;o=i.version;for(let t=0,r=e.length/3-1;t<r;t+=3){let e=t+0,r=t+1,i=t+2;n.push(e,r,r,i,i,e)}}else return;let s=new(yn(n)?xi:bi)(n,1);s.version=o;let c=a.get(e);c&&t.remove(c),a.set(e,s)}function u(e){let t=a.get(e);if(t){let n=e.index;n!==null&&t.version<n.version&&l(e)}else l(e);return a.get(e)}return{get:s,update:c,getWireframeAttribute:u}}function Qa(e,t,n){let r;function i(e){r=e}let a,o;function s(e){a=e.type,o=e.bytesPerElement}function c(t,i){e.drawElements(r,i,a,t*o),n.update(i,r,1)}function l(t,i,s){s!==0&&(e.drawElementsInstanced(r,i,a,t*o,s),n.update(i,r,s))}function u(e,i,o){if(o===0)return;t.get(`WEBGL_multi_draw`).multiDrawElementsWEBGL(r,i,0,a,e,0,o);let s=0;for(let e=0;e<o;e++)s+=i[e];n.update(s,r,1)}function d(e,i,s,c){if(s===0)return;let u=t.get(`WEBGL_multi_draw`);if(u===null)for(let t=0;t<e.length;t++)l(e[t]/o,i[t],c[t]);else{u.multiDrawElementsInstancedWEBGL(r,i,0,a,e,0,c,0,s);let t=0;for(let e=0;e<s;e++)t+=i[e];for(let e=0;e<c.length;e++)n.update(t,r,c[e])}}this.setMode=i,this.setIndex=s,this.render=c,this.renderInstances=l,this.renderMultiDraw=u,this.renderMultiDrawInstances=d}function $a(e){let t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function r(t,r,i){switch(n.calls++,r){case e.TRIANGLES:n.triangles+=t/3*i;break;case e.LINES:n.lines+=t/2*i;break;case e.LINE_STRIP:n.lines+=i*(t-1);break;case e.LINE_LOOP:n.lines+=i*t;break;case e.POINTS:n.points+=i*t;break;default:console.error(`THREE.WebGLInfo: Unknown draw mode:`,r)}}function i(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:i,update:r}}function eo(e,t,n){let r=new WeakMap,i=new Bn;function a(a,o,s){let c=a.morphTargetInfluences,l=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=l===void 0?0:l.length,d=r.get(o);if(d===void 0||d.count!==u){let e=function(){_.dispose(),r.delete(o),o.removeEventListener(`dispose`,e)};d!==void 0&&d.texture.dispose();let n=o.morphAttributes.position!==void 0,a=o.morphAttributes.normal!==void 0,s=o.morphAttributes.color!==void 0,c=o.morphAttributes.position||[],l=o.morphAttributes.normal||[],f=o.morphAttributes.color||[],p=0;n===!0&&(p=1),a===!0&&(p=2),s===!0&&(p=3);let m=o.attributes.position.count*p,h=1;m>t.maxTextureSize&&(h=Math.ceil(m/t.maxTextureSize),m=t.maxTextureSize);let g=new Float32Array(m*h*4*u),_=new Un(g,m,h,u);_.type=Re,_.needsUpdate=!0;let v=p*4;for(let e=0;e<u;e++){let t=c[e],r=l[e],o=f[e],u=m*h*4*e;for(let e=0;e<t.count;e++){let c=e*v;n===!0&&(i.fromBufferAttribute(t,e),g[u+c+0]=i.x,g[u+c+1]=i.y,g[u+c+2]=i.z,g[u+c+3]=0),a===!0&&(i.fromBufferAttribute(r,e),g[u+c+4]=i.x,g[u+c+5]=i.y,g[u+c+6]=i.z,g[u+c+7]=0),s===!0&&(i.fromBufferAttribute(o,e),g[u+c+8]=i.x,g[u+c+9]=i.y,g[u+c+10]=i.z,g[u+c+11]=o.itemSize===4?i.w:1)}}d={count:u,texture:_,size:new V(m,h)},r.set(o,d),o.addEventListener(`dispose`,e)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)s.getUniforms().setValue(e,`morphTexture`,a.morphTexture,n);else{let t=0;for(let e=0;e<c.length;e++)t+=c[e];let n=o.morphTargetsRelative?1:1-t;s.getUniforms().setValue(e,`morphTargetBaseInfluence`,n),s.getUniforms().setValue(e,`morphTargetInfluences`,c)}s.getUniforms().setValue(e,`morphTargetsTexture`,d.texture,n),s.getUniforms().setValue(e,`morphTargetsTextureSize`,d.size)}return{update:a}}function to(e,t,n,r){let i=new WeakMap;function a(a){let o=r.render.frame,c=a.geometry,l=t.get(a,c);if(i.get(l)!==o&&(t.update(l),i.set(l,o)),a.isInstancedMesh&&(a.hasEventListener(`dispose`,s)===!1&&a.addEventListener(`dispose`,s),i.get(a)!==o&&(n.update(a.instanceMatrix,e.ARRAY_BUFFER),a.instanceColor!==null&&n.update(a.instanceColor,e.ARRAY_BUFFER),i.set(a,o))),a.isSkinnedMesh){let e=a.skeleton;i.get(e)!==o&&(e.update(),i.set(e,o))}return l}function o(){i=new WeakMap}function s(e){let t=e.target;t.removeEventListener(`dispose`,s),n.remove(t.instanceMatrix),t.instanceColor!==null&&n.remove(t.instanceColor)}return{update:a,dispose:o}}var no=class extends zn{constructor(e,t,n,r,i,a,o,s,c,l=Ye){if(l!==Ye&&l!==Xe)throw Error(`DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat`);n===void 0&&l===Ye&&(n=Le),n===void 0&&l===Xe&&(n=He),super(null,r,i,a,o,s,l,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o===void 0?Ee:o,this.minFilter=s===void 0?Ee:s,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},ro=new zn,io=new no(1,1),ao=new Un,oo=new Wn,so=new oa,co=[],lo=[],uo=new Float32Array(16),fo=new Float32Array(9),po=new Float32Array(4);function mo(e,t,n){let r=e[0];if(r<=0||r>0)return e;let i=t*n,a=co[i];if(a===void 0&&(a=new Float32Array(i),co[i]=a),t!==0){r.toArray(a,0);for(let r=1,i=0;r!==t;++r)i+=n,e[r].toArray(a,i)}return a}function ho(e,t){if(e.length!==t.length)return!1;for(let n=0,r=e.length;n<r;n++)if(e[n]!==t[n])return!1;return!0}function go(e,t){for(let n=0,r=t.length;n<r;n++)e[n]=t[n]}function _o(e,t){let n=lo[t];n===void 0&&(n=new Int32Array(t),lo[t]=n);for(let r=0;r!==t;++r)n[r]=e.allocateTextureUnit();return n}function vo(e,t){let n=this.cache;n[0]!==t&&(e.uniform1f(this.addr,t),n[0]=t)}function yo(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(ho(n,t))return;e.uniform2fv(this.addr,t),go(n,t)}}function bo(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(e.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(ho(n,t))return;e.uniform3fv(this.addr,t),go(n,t)}}function xo(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(ho(n,t))return;e.uniform4fv(this.addr,t),go(n,t)}}function So(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(ho(n,t))return;e.uniformMatrix2fv(this.addr,!1,t),go(n,t)}else{if(ho(n,r))return;po.set(r),e.uniformMatrix2fv(this.addr,!1,po),go(n,r)}}function Co(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(ho(n,t))return;e.uniformMatrix3fv(this.addr,!1,t),go(n,t)}else{if(ho(n,r))return;fo.set(r),e.uniformMatrix3fv(this.addr,!1,fo),go(n,r)}}function wo(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(ho(n,t))return;e.uniformMatrix4fv(this.addr,!1,t),go(n,t)}else{if(ho(n,r))return;uo.set(r),e.uniformMatrix4fv(this.addr,!1,uo),go(n,r)}}function To(e,t){let n=this.cache;n[0]!==t&&(e.uniform1i(this.addr,t),n[0]=t)}function Eo(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(ho(n,t))return;e.uniform2iv(this.addr,t),go(n,t)}}function Do(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(ho(n,t))return;e.uniform3iv(this.addr,t),go(n,t)}}function Oo(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(ho(n,t))return;e.uniform4iv(this.addr,t),go(n,t)}}function ko(e,t){let n=this.cache;n[0]!==t&&(e.uniform1ui(this.addr,t),n[0]=t)}function Ao(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(ho(n,t))return;e.uniform2uiv(this.addr,t),go(n,t)}}function jo(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(ho(n,t))return;e.uniform3uiv(this.addr,t),go(n,t)}}function Mo(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(ho(n,t))return;e.uniform4uiv(this.addr,t),go(n,t)}}function No(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i);let a;this.type===e.SAMPLER_2D_SHADOW?(io.compareFunction=Qt,a=io):a=ro,n.setTexture2D(t||a,i)}function Po(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture3D(t||oo,i)}function Fo(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTextureCube(t||so,i)}function Io(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture2DArray(t||ao,i)}function Lo(e){switch(e){case 5126:return vo;case 35664:return yo;case 35665:return bo;case 35666:return xo;case 35674:return So;case 35675:return Co;case 35676:return wo;case 5124:case 35670:return To;case 35667:case 35671:return Eo;case 35668:case 35672:return Do;case 35669:case 35673:return Oo;case 5125:return ko;case 36294:return Ao;case 36295:return jo;case 36296:return Mo;case 35678:case 36198:case 36298:case 36306:case 35682:return No;case 35679:case 36299:case 36307:return Po;case 35680:case 36300:case 36308:case 36293:return Fo;case 36289:case 36303:case 36311:case 36292:return Io}}function Ro(e,t){e.uniform1fv(this.addr,t)}function zo(e,t){let n=mo(t,this.size,2);e.uniform2fv(this.addr,n)}function Bo(e,t){let n=mo(t,this.size,3);e.uniform3fv(this.addr,n)}function Vo(e,t){let n=mo(t,this.size,4);e.uniform4fv(this.addr,n)}function Ho(e,t){let n=mo(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,n)}function Uo(e,t){let n=mo(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,n)}function Wo(e,t){let n=mo(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,n)}function Go(e,t){e.uniform1iv(this.addr,t)}function Ko(e,t){e.uniform2iv(this.addr,t)}function qo(e,t){e.uniform3iv(this.addr,t)}function Jo(e,t){e.uniform4iv(this.addr,t)}function Yo(e,t){e.uniform1uiv(this.addr,t)}function Xo(e,t){e.uniform2uiv(this.addr,t)}function Zo(e,t){e.uniform3uiv(this.addr,t)}function Qo(e,t){e.uniform4uiv(this.addr,t)}function $o(e,t,n){let r=this.cache,i=t.length,a=_o(n,i);ho(r,a)||(e.uniform1iv(this.addr,a),go(r,a));for(let e=0;e!==i;++e)n.setTexture2D(t[e]||ro,a[e])}function es(e,t,n){let r=this.cache,i=t.length,a=_o(n,i);ho(r,a)||(e.uniform1iv(this.addr,a),go(r,a));for(let e=0;e!==i;++e)n.setTexture3D(t[e]||oo,a[e])}function ts(e,t,n){let r=this.cache,i=t.length,a=_o(n,i);ho(r,a)||(e.uniform1iv(this.addr,a),go(r,a));for(let e=0;e!==i;++e)n.setTextureCube(t[e]||so,a[e])}function ns(e,t,n){let r=this.cache,i=t.length,a=_o(n,i);ho(r,a)||(e.uniform1iv(this.addr,a),go(r,a));for(let e=0;e!==i;++e)n.setTexture2DArray(t[e]||ao,a[e])}function rs(e){switch(e){case 5126:return Ro;case 35664:return zo;case 35665:return Bo;case 35666:return Vo;case 35674:return Ho;case 35675:return Uo;case 35676:return Wo;case 5124:case 35670:return Go;case 35667:case 35671:return Ko;case 35668:case 35672:return qo;case 35669:case 35673:return Jo;case 5125:return Yo;case 36294:return Xo;case 36295:return Zo;case 36296:return Qo;case 35678:case 36198:case 36298:case 36306:case 35682:return $o;case 35679:case 36299:case 36307:return es;case 35680:case 36300:case 36308:case 36293:return ts;case 36289:case 36303:case 36311:case 36292:return ns}}var is=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Lo(t.type)}},as=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=rs(t.type)}},os=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let r=this.seq;for(let i=0,a=r.length;i!==a;++i){let a=r[i];a.setValue(e,t[a.id],n)}}},ss=/(\w+)(\])?(\[|\.)?/g;function cs(e,t){e.seq.push(t),e.map[t.id]=t}function ls(e,t,n){let r=e.name,i=r.length;for(ss.lastIndex=0;;){let a=ss.exec(r),o=ss.lastIndex,s=a[1],c=a[2]===`]`,l=a[3];if(c&&(s|=0),l===void 0||l===`[`&&o+2===i){cs(n,l===void 0?new is(s,e,t):new as(s,e,t));break}{let e=n.map[s];e===void 0&&(e=new os(s),cs(n,e)),n=e}}}var us=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){let n=e.getActiveUniform(t,r);ls(n,e.getUniformLocation(t,n.name),this)}}setValue(e,t,n,r){let i=this.map[t];i!==void 0&&i.setValue(e,n,r)}setOptional(e,t,n){let r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let i=0,a=t.length;i!==a;++i){let a=t[i],o=n[a.id];o.needsUpdate!==!1&&a.setValue(e,o.value,r)}}static seqWithValue(e,t){let n=[];for(let r=0,i=e.length;r!==i;++r){let i=e[r];i.id in t&&n.push(i)}return n}};function ds(e,t,n){let r=e.createShader(t);return e.shaderSource(r,n),e.compileShader(r),r}var fs=37297,ps=0;function ms(e,t){let n=e.split(`
`),r=[],i=Math.max(t-6,0),a=Math.min(t+6,n.length);for(let e=i;e<a;e++){let i=e+1;r.push(`${i===t?`>`:` `} ${i}: ${n[e]}`)}return r.join(`
`)}function hs(e){let t=U.getPrimaries(U.workingColorSpace),n=U.getPrimaries(e),r;switch(t===n?r=``:t===Kt&&n===Gt?r=`LinearDisplayP3ToLinearSRGB`:t===Gt&&n===Kt&&(r=`LinearSRGBToLinearDisplayP3`),e){case Bt:case Ht:return[r,`LinearTransferOETF`];case zt:case Vt:return[r,`sRGBTransferOETF`];default:return console.warn(`THREE.WebGLProgram: Unsupported color space:`,e),[r,`LinearTransferOETF`]}}function gs(e,t,n){let r=e.getShaderParameter(t,e.COMPILE_STATUS),i=e.getShaderInfoLog(t).trim();if(r&&i===``)return``;let a=/ERROR: 0:(\d+)/.exec(i);if(a){let r=parseInt(a[1]);return n.toUpperCase()+`

`+i+`

`+ms(e.getShaderSource(t),r)}return i}function _s(e,t){let n=hs(t);return`vec4 ${e}( vec4 value ) { return ${n[0]}( ${n[1]}( value ) ); }`}function vs(e,t){let n;switch(t){case _e:n=`Linear`;break;case ve:n=`Reinhard`;break;case P:n=`Cineon`;break;case ye:n=`ACESFilmic`;break;case I:n=`AgX`;break;case L:n=`Neutral`;break;case F:n=`Custom`;break;default:console.warn(`THREE.WebGLProgram: Unsupported toneMapping:`,t),n=`Linear`}return`vec3 `+e+`( vec3 color ) { return `+n+`ToneMapping( color ); }`}var ys=new W;function bs(){return U.getLuminanceCoefficients(ys),[`float luminance( const in vec3 rgb ) {`,`	const vec3 weights = vec3( ${ys.x.toFixed(4)}, ${ys.y.toFixed(4)}, ${ys.z.toFixed(4)} );`,`	return dot( weights, rgb );`,`}`].join(`
`)}function xs(e){return[e.extensionClipCullDistance?`#extension GL_ANGLE_clip_cull_distance : require`:``,e.extensionMultiDraw?`#extension GL_ANGLE_multi_draw : require`:``].filter(ws).join(`
`)}function Ss(e){let t=[];for(let n in e){let r=e[n];r!==!1&&t.push(`#define `+n+` `+r)}return t.join(`
`)}function Cs(e,t){let n={},r=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let i=0;i<r;i++){let r=e.getActiveAttrib(t,i),a=r.name,o=1;r.type===e.FLOAT_MAT2&&(o=2),r.type===e.FLOAT_MAT3&&(o=3),r.type===e.FLOAT_MAT4&&(o=4),n[a]={type:r.type,location:e.getAttribLocation(t,a),locationSize:o}}return n}function ws(e){return e!==``}function Ts(e,t){let n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Es(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Ds=/^[ \t]*#include +<([\w\d./]+)>/gm;function Os(e){return e.replace(Ds,As)}var ks=new Map;function As(e,t){let n=J[t];if(n===void 0){let e=ks.get(t);if(e!==void 0)n=J[e],console.warn(`THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.`,t,e);else throw Error(`Can not resolve #include <`+t+`>`)}return Os(n)}var js=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ms(e){return e.replace(js,Ns)}function Ns(e,t,n,r){let i=``;for(let e=parseInt(t);e<parseInt(n);e++)i+=r.replace(/\[\s*i\s*\]/g,`[ `+e+` ]`).replace(/UNROLLED_LOOP_INDEX/g,e);return i}function Ps(e){let t=`precision ${e.precision} float;
	precision ${e.precision} int;
	precision ${e.precision} sampler2D;
	precision ${e.precision} samplerCube;
	precision ${e.precision} sampler3D;
	precision ${e.precision} sampler2DArray;
	precision ${e.precision} sampler2DShadow;
	precision ${e.precision} samplerCubeShadow;
	precision ${e.precision} sampler2DArrayShadow;
	precision ${e.precision} isampler2D;
	precision ${e.precision} isampler3D;
	precision ${e.precision} isamplerCube;
	precision ${e.precision} isampler2DArray;
	precision ${e.precision} usampler2D;
	precision ${e.precision} usampler3D;
	precision ${e.precision} usamplerCube;
	precision ${e.precision} usampler2DArray;
	`;return e.precision===`highp`?t+=`
#define HIGH_PRECISION`:e.precision===`mediump`?t+=`
#define MEDIUM_PRECISION`:e.precision===`lowp`&&(t+=`
#define LOW_PRECISION`),t}function Fs(e){let t=`SHADOWMAP_TYPE_BASIC`;return e.shadowMapType===s?t=`SHADOWMAP_TYPE_PCF`:e.shadowMapType===c?t=`SHADOWMAP_TYPE_PCF_SOFT`:e.shadowMapType===l&&(t=`SHADOWMAP_TYPE_VSM`),t}function Is(e){let t=`ENVMAP_TYPE_CUBE`;if(e.envMap)switch(e.envMapMode){case R:case z:t=`ENVMAP_TYPE_CUBE`;break;case B:t=`ENVMAP_TYPE_CUBE_UV`}return t}function Ls(e){let t=`ENVMAP_MODE_REFLECTION`;if(e.envMap)switch(e.envMapMode){case z:t=`ENVMAP_MODE_REFRACTION`}return t}function Rs(e){let t=`ENVMAP_BLENDING_NONE`;if(e.envMap)switch(e.combine){case pe:t=`ENVMAP_BLENDING_MULTIPLY`;break;case me:t=`ENVMAP_BLENDING_MIX`;break;case he:t=`ENVMAP_BLENDING_ADD`}return t}function zs(e){let t=e.envMapCubeUVHeight;if(t===null)return null;let n=Math.log2(t)-2,r=1/t;return{texelWidth:1/(3*Math.max(2**n,112)),texelHeight:r,maxMip:n}}function Bs(e,t,n,r){let i=e.getContext(),a=n.defines,o=n.vertexShader,s=n.fragmentShader,c=Fs(n),l=Is(n),u=Ls(n),d=Rs(n),f=zs(n),p=xs(n),m=Ss(a),h=i.createProgram(),g,_,v=n.glslVersion?`#version `+n.glslVersion+`
`:``;n.isRawShaderMaterial?(g=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m].filter(ws).join(`
`),g.length>0&&(g+=`
`),_=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m].filter(ws).join(`
`),_.length>0&&(_+=`
`)):(g=[Ps(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m,n.extensionClipCullDistance?`#define USE_CLIP_DISTANCE`:``,n.batching?`#define USE_BATCHING`:``,n.batchingColor?`#define USE_BATCHING_COLOR`:``,n.instancing?`#define USE_INSTANCING`:``,n.instancingColor?`#define USE_INSTANCING_COLOR`:``,n.instancingMorph?`#define USE_INSTANCING_MORPH`:``,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.map?`#define USE_MAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+u:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.displacementMap?`#define USE_DISPLACEMENTMAP`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.mapUv?`#define MAP_UV `+n.mapUv:``,n.alphaMapUv?`#define ALPHAMAP_UV `+n.alphaMapUv:``,n.lightMapUv?`#define LIGHTMAP_UV `+n.lightMapUv:``,n.aoMapUv?`#define AOMAP_UV `+n.aoMapUv:``,n.emissiveMapUv?`#define EMISSIVEMAP_UV `+n.emissiveMapUv:``,n.bumpMapUv?`#define BUMPMAP_UV `+n.bumpMapUv:``,n.normalMapUv?`#define NORMALMAP_UV `+n.normalMapUv:``,n.displacementMapUv?`#define DISPLACEMENTMAP_UV `+n.displacementMapUv:``,n.metalnessMapUv?`#define METALNESSMAP_UV `+n.metalnessMapUv:``,n.roughnessMapUv?`#define ROUGHNESSMAP_UV `+n.roughnessMapUv:``,n.anisotropyMapUv?`#define ANISOTROPYMAP_UV `+n.anisotropyMapUv:``,n.clearcoatMapUv?`#define CLEARCOATMAP_UV `+n.clearcoatMapUv:``,n.clearcoatNormalMapUv?`#define CLEARCOAT_NORMALMAP_UV `+n.clearcoatNormalMapUv:``,n.clearcoatRoughnessMapUv?`#define CLEARCOAT_ROUGHNESSMAP_UV `+n.clearcoatRoughnessMapUv:``,n.iridescenceMapUv?`#define IRIDESCENCEMAP_UV `+n.iridescenceMapUv:``,n.iridescenceThicknessMapUv?`#define IRIDESCENCE_THICKNESSMAP_UV `+n.iridescenceThicknessMapUv:``,n.sheenColorMapUv?`#define SHEEN_COLORMAP_UV `+n.sheenColorMapUv:``,n.sheenRoughnessMapUv?`#define SHEEN_ROUGHNESSMAP_UV `+n.sheenRoughnessMapUv:``,n.specularMapUv?`#define SPECULARMAP_UV `+n.specularMapUv:``,n.specularColorMapUv?`#define SPECULAR_COLORMAP_UV `+n.specularColorMapUv:``,n.specularIntensityMapUv?`#define SPECULAR_INTENSITYMAP_UV `+n.specularIntensityMapUv:``,n.transmissionMapUv?`#define TRANSMISSIONMAP_UV `+n.transmissionMapUv:``,n.thicknessMapUv?`#define THICKNESSMAP_UV `+n.thicknessMapUv:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexColors?`#define USE_COLOR`:``,n.vertexAlphas?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.flatShading?`#define FLAT_SHADED`:``,n.skinning?`#define USE_SKINNING`:``,n.morphTargets?`#define USE_MORPHTARGETS`:``,n.morphNormals&&n.flatShading===!1?`#define USE_MORPHNORMALS`:``,n.morphColors?`#define USE_MORPHCOLORS`:``,n.morphTargetsCount>0?`#define MORPHTARGETS_TEXTURE_STRIDE `+n.morphTextureStride:``,n.morphTargetsCount>0?`#define MORPHTARGETS_COUNT `+n.morphTargetsCount:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.sizeAttenuation?`#define USE_SIZEATTENUATION`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.logarithmicDepthBuffer?`#define USE_LOGDEPTHBUF`:``,n.reverseDepthBuffer?`#define USE_REVERSEDEPTHBUF`:``,`uniform mat4 modelMatrix;`,`uniform mat4 modelViewMatrix;`,`uniform mat4 projectionMatrix;`,`uniform mat4 viewMatrix;`,`uniform mat3 normalMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,`#ifdef USE_INSTANCING`,`	attribute mat4 instanceMatrix;`,`#endif`,`#ifdef USE_INSTANCING_COLOR`,`	attribute vec3 instanceColor;`,`#endif`,`#ifdef USE_INSTANCING_MORPH`,`	uniform sampler2D morphTexture;`,`#endif`,`attribute vec3 position;`,`attribute vec3 normal;`,`attribute vec2 uv;`,`#ifdef USE_UV1`,`	attribute vec2 uv1;`,`#endif`,`#ifdef USE_UV2`,`	attribute vec2 uv2;`,`#endif`,`#ifdef USE_UV3`,`	attribute vec2 uv3;`,`#endif`,`#ifdef USE_TANGENT`,`	attribute vec4 tangent;`,`#endif`,`#if defined( USE_COLOR_ALPHA )`,`	attribute vec4 color;`,`#elif defined( USE_COLOR )`,`	attribute vec3 color;`,`#endif`,`#ifdef USE_SKINNING`,`	attribute vec4 skinIndex;`,`	attribute vec4 skinWeight;`,`#endif`,`
`].filter(ws).join(`
`),_=[Ps(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.alphaToCoverage?`#define ALPHA_TO_COVERAGE`:``,n.map?`#define USE_MAP`:``,n.matcap?`#define USE_MATCAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+l:``,n.envMap?`#define `+u:``,n.envMap?`#define `+d:``,f?`#define CUBEUV_TEXEL_WIDTH `+f.texelWidth:``,f?`#define CUBEUV_TEXEL_HEIGHT `+f.texelHeight:``,f?`#define CUBEUV_MAX_MIP `+f.maxMip+`.0`:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoat?`#define USE_CLEARCOAT`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.dispersion?`#define USE_DISPERSION`:``,n.iridescence?`#define USE_IRIDESCENCE`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaTest?`#define USE_ALPHATEST`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.sheen?`#define USE_SHEEN`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexColors||n.instancingColor||n.batchingColor?`#define USE_COLOR`:``,n.vertexAlphas?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.gradientMap?`#define USE_GRADIENTMAP`:``,n.flatShading?`#define FLAT_SHADED`:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.premultipliedAlpha?`#define PREMULTIPLIED_ALPHA`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.decodeVideoTexture?`#define DECODE_VIDEO_TEXTURE`:``,n.logarithmicDepthBuffer?`#define USE_LOGDEPTHBUF`:``,n.reverseDepthBuffer?`#define USE_REVERSEDEPTHBUF`:``,`uniform mat4 viewMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,n.toneMapping===ge?``:`#define TONE_MAPPING`,n.toneMapping===ge?``:J.tonemapping_pars_fragment,n.toneMapping===ge?``:vs(`toneMapping`,n.toneMapping),n.dithering?`#define DITHERING`:``,n.opaque?`#define OPAQUE`:``,J.colorspace_pars_fragment,_s(`linearToOutputTexel`,n.outputColorSpace),bs(),n.useDepthPacking?`#define DEPTH_PACKING `+n.depthPacking:``,`
`].filter(ws).join(`
`)),o=Os(o),o=Ts(o,n),o=Es(o,n),s=Os(s),s=Ts(s,n),s=Es(s,n),o=Ms(o),s=Ms(s),n.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,g=[p,`#define attribute in`,`#define varying out`,`#define texture2D texture`].join(`
`)+`
`+g,_=[`#define varying in`,n.glslVersion===an?``:`layout(location = 0) out highp vec4 pc_fragColor;`,n.glslVersion===an?``:`#define gl_FragColor pc_fragColor`,`#define gl_FragDepthEXT gl_FragDepth`,`#define texture2D texture`,`#define textureCube texture`,`#define texture2DProj textureProj`,`#define texture2DLodEXT textureLod`,`#define texture2DProjLodEXT textureProjLod`,`#define textureCubeLodEXT textureLod`,`#define texture2DGradEXT textureGrad`,`#define texture2DProjGradEXT textureProjGrad`,`#define textureCubeGradEXT textureGrad`].join(`
`)+`
`+_);let y=v+g+o,b=v+_+s,x=ds(i,i.VERTEX_SHADER,y),S=ds(i,i.FRAGMENT_SHADER,b);i.attachShader(h,x),i.attachShader(h,S),n.index0AttributeName===void 0?n.morphTargets===!0&&i.bindAttribLocation(h,0,`position`):i.bindAttribLocation(h,0,n.index0AttributeName),i.linkProgram(h);function C(t){if(e.debug.checkShaderErrors){let n=i.getProgramInfoLog(h).trim(),r=i.getShaderInfoLog(x).trim(),a=i.getShaderInfoLog(S).trim(),o=!0,s=!0;if(i.getProgramParameter(h,i.LINK_STATUS)===!1){if(o=!1,typeof e.debug.onShaderError==`function`)e.debug.onShaderError(i,h,x,S);else{let e=gs(i,x,`vertex`),r=gs(i,S,`fragment`);console.error(`THREE.WebGLProgram: Shader Error `+i.getError()+` - VALIDATE_STATUS `+i.getProgramParameter(h,i.VALIDATE_STATUS)+`

Material Name: `+t.name+`
Material Type: `+t.type+`

Program Info Log: `+n+`
`+e+`
`+r)}}else n===``?(r===``||a===``)&&(s=!1):console.warn(`THREE.WebGLProgram: Program Info Log:`,n);s&&(t.diagnostics={runnable:o,programLog:n,vertexShader:{log:r,prefix:g},fragmentShader:{log:a,prefix:_}})}i.deleteShader(x),i.deleteShader(S),w=new us(i,h),T=Cs(i,h)}let w;this.getUniforms=function(){return w===void 0&&C(this),w};let T;this.getAttributes=function(){return T===void 0&&C(this),T};let E=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return E===!1&&(E=i.getProgramParameter(h,fs)),E},this.destroy=function(){r.releaseStatesOfProgram(this),i.deleteProgram(h),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=ps++,this.cacheKey=t,this.usedTimes=1,this.program=h,this.vertexShader=x,this.fragmentShader=S,this}var Vs=0,Hs=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),i=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(i)===!1&&(a.add(i),i.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let e of t)e.usedTimes--,e.usedTimes===0&&this.shaderCache.delete(e.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Us(e),t.set(e,n)),n}},Us=class{constructor(e){this.id=Vs++,this.code=e,this.usedTimes=0}};function Ws(e,t,n,r,i,a,o){let s=new Mr,c=new Hs,l=new Set,u=[],p=i.logarithmicDepthBuffer,h=i.reverseDepthBuffer,g=i.vertexTextures,_=i.precision,v={MeshDepthMaterial:`depth`,MeshDistanceMaterial:`distanceRGBA`,MeshNormalMaterial:`normal`,MeshBasicMaterial:`basic`,MeshLambertMaterial:`lambert`,MeshPhongMaterial:`phong`,MeshToonMaterial:`toon`,MeshStandardMaterial:`physical`,MeshPhysicalMaterial:`physical`,MeshMatcapMaterial:`matcap`,LineBasicMaterial:`basic`,LineDashedMaterial:`dashed`,PointsMaterial:`points`,ShadowMaterial:`shadow`,SpriteMaterial:`sprite`};function y(e){return l.add(e),e===0?`uv`:`uv${e}`}function b(a,s,u,b,x){let S=b.fog,C=x.geometry,w=a.isMeshStandardMaterial?b.environment:null,T=(a.isMeshStandardMaterial?n:t).get(a.envMap||w),E=T&&T.mapping===B?T.image.height:null,D=v[a.type];a.precision!==null&&(_=i.getMaxPrecision(a.precision),_!==a.precision&&console.warn(`THREE.WebGLProgram.getParameters:`,a.precision,`not supported, using`,_,`instead.`));let O=C.morphAttributes.position||C.morphAttributes.normal||C.morphAttributes.color,k=O===void 0?0:O.length,A=0;C.morphAttributes.position!==void 0&&(A=1),C.morphAttributes.normal!==void 0&&(A=2),C.morphAttributes.color!==void 0&&(A=3);let j,ee,te,ne;if(D){let e=va[D];j=e.vertexShader,ee=e.fragmentShader}else j=a.vertexShader,ee=a.fragmentShader,c.update(a),te=c.getVertexShaderID(a),ne=c.getFragmentShaderID(a);let re=e.getRenderTarget(),M=x.isInstancedMesh===!0,ie=x.isBatchedMesh===!0,ae=!!a.map,oe=!!a.matcap,se=!!T,ce=!!a.aoMap,le=!!a.lightMap,N=!!a.bumpMap,ue=!!a.normalMap,de=!!a.displacementMap,fe=!!a.emissiveMap,pe=!!a.metalnessMap,me=!!a.roughnessMap,he=a.anisotropy>0,_e=a.clearcoat>0,ve=a.dispersion>0,P=a.iridescence>0,ye=a.sheen>0,F=a.transmission>0,I=he&&!!a.anisotropyMap,L=_e&&!!a.clearcoatMap,be=_e&&!!a.clearcoatNormalMap,R=_e&&!!a.clearcoatRoughnessMap,z=P&&!!a.iridescenceMap,xe=P&&!!a.iridescenceThicknessMap,Se=ye&&!!a.sheenColorMap,Ce=ye&&!!a.sheenRoughnessMap,we=!!a.specularMap,Te=!!a.specularColorMap,Ee=!!a.specularIntensityMap,De=F&&!!a.transmissionMap,Oe=F&&!!a.thicknessMap,ke=!!a.gradientMap,Ae=!!a.alphaMap,je=a.alphaTest>0,Me=!!a.alphaHash,Ne=!!a.extensions,Pe=ge;a.toneMapped&&(re===null||re.isXRRenderTarget===!0)&&(Pe=e.toneMapping);let Fe={shaderID:D,shaderType:a.type,shaderName:a.name,vertexShader:j,fragmentShader:ee,defines:a.defines,customVertexShaderID:te,customFragmentShaderID:ne,isRawShaderMaterial:a.isRawShaderMaterial===!0,glslVersion:a.glslVersion,precision:_,batching:ie,batchingColor:ie&&x._colorsTexture!==null,instancing:M,instancingColor:M&&x.instanceColor!==null,instancingMorph:M&&x.morphTexture!==null,supportsVertexTextures:g,outputColorSpace:re===null?e.outputColorSpace:re.isXRRenderTarget===!0?re.texture.colorSpace:Bt,alphaToCoverage:!!a.alphaToCoverage,map:ae,matcap:oe,envMap:se,envMapMode:se&&T.mapping,envMapCubeUVHeight:E,aoMap:ce,lightMap:le,bumpMap:N,normalMap:ue,displacementMap:g&&de,emissiveMap:fe,normalMapObjectSpace:ue&&a.normalMapType===Lt,normalMapTangentSpace:ue&&a.normalMapType===It,metalnessMap:pe,roughnessMap:me,anisotropy:he,anisotropyMap:I,clearcoat:_e,clearcoatMap:L,clearcoatNormalMap:be,clearcoatRoughnessMap:R,dispersion:ve,iridescence:P,iridescenceMap:z,iridescenceThicknessMap:xe,sheen:ye,sheenColorMap:Se,sheenRoughnessMap:Ce,specularMap:we,specularColorMap:Te,specularIntensityMap:Ee,transmission:F,transmissionMap:De,thicknessMap:Oe,gradientMap:ke,opaque:a.transparent===!1&&a.blending===m&&a.alphaToCoverage===!1,alphaMap:Ae,alphaTest:je,alphaHash:Me,combine:a.combine,mapUv:ae&&y(a.map.channel),aoMapUv:ce&&y(a.aoMap.channel),lightMapUv:le&&y(a.lightMap.channel),bumpMapUv:N&&y(a.bumpMap.channel),normalMapUv:ue&&y(a.normalMap.channel),displacementMapUv:de&&y(a.displacementMap.channel),emissiveMapUv:fe&&y(a.emissiveMap.channel),metalnessMapUv:pe&&y(a.metalnessMap.channel),roughnessMapUv:me&&y(a.roughnessMap.channel),anisotropyMapUv:I&&y(a.anisotropyMap.channel),clearcoatMapUv:L&&y(a.clearcoatMap.channel),clearcoatNormalMapUv:be&&y(a.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:R&&y(a.clearcoatRoughnessMap.channel),iridescenceMapUv:z&&y(a.iridescenceMap.channel),iridescenceThicknessMapUv:xe&&y(a.iridescenceThicknessMap.channel),sheenColorMapUv:Se&&y(a.sheenColorMap.channel),sheenRoughnessMapUv:Ce&&y(a.sheenRoughnessMap.channel),specularMapUv:we&&y(a.specularMap.channel),specularColorMapUv:Te&&y(a.specularColorMap.channel),specularIntensityMapUv:Ee&&y(a.specularIntensityMap.channel),transmissionMapUv:De&&y(a.transmissionMap.channel),thicknessMapUv:Oe&&y(a.thicknessMap.channel),alphaMapUv:Ae&&y(a.alphaMap.channel),vertexTangents:!!C.attributes.tangent&&(ue||he),vertexColors:a.vertexColors,vertexAlphas:a.vertexColors===!0&&!!C.attributes.color&&C.attributes.color.itemSize===4,pointsUvs:x.isPoints===!0&&!!C.attributes.uv&&(ae||Ae),fog:!!S,useFog:a.fog===!0,fogExp2:!!S&&S.isFogExp2,flatShading:a.flatShading===!0,sizeAttenuation:a.sizeAttenuation===!0,logarithmicDepthBuffer:p,reverseDepthBuffer:h,skinning:x.isSkinnedMesh===!0,morphTargets:C.morphAttributes.position!==void 0,morphNormals:C.morphAttributes.normal!==void 0,morphColors:C.morphAttributes.color!==void 0,morphTargetsCount:k,morphTextureStride:A,numDirLights:s.directional.length,numPointLights:s.point.length,numSpotLights:s.spot.length,numSpotLightMaps:s.spotLightMap.length,numRectAreaLights:s.rectArea.length,numHemiLights:s.hemi.length,numDirLightShadows:s.directionalShadowMap.length,numPointLightShadows:s.pointShadowMap.length,numSpotLightShadows:s.spotShadowMap.length,numSpotLightShadowsWithMaps:s.numSpotLightShadowsWithMaps,numLightProbes:s.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:a.dithering,shadowMapEnabled:e.shadowMap.enabled&&u.length>0,shadowMapType:e.shadowMap.type,toneMapping:Pe,decodeVideoTexture:ae&&a.map.isVideoTexture===!0&&U.getTransfer(a.map.colorSpace)===Wt,premultipliedAlpha:a.premultipliedAlpha,doubleSided:a.side===f,flipSided:a.side===d,useDepthPacking:a.depthPacking>=0,depthPacking:a.depthPacking||0,index0AttributeName:a.index0AttributeName,extensionClipCullDistance:Ne&&a.extensions.clipCullDistance===!0&&r.has(`WEBGL_clip_cull_distance`),extensionMultiDraw:(Ne&&a.extensions.multiDraw===!0||ie)&&r.has(`WEBGL_multi_draw`),rendererExtensionParallelShaderCompile:r.has(`KHR_parallel_shader_compile`),customProgramCacheKey:a.customProgramCacheKey()};return Fe.vertexUv1s=l.has(1),Fe.vertexUv2s=l.has(2),Fe.vertexUv3s=l.has(3),l.clear(),Fe}function x(t){let n=[];if(t.shaderID?n.push(t.shaderID):(n.push(t.customVertexShaderID),n.push(t.customFragmentShaderID)),t.defines!==void 0)for(let e in t.defines)n.push(e),n.push(t.defines[e]);return t.isRawShaderMaterial===!1&&(S(n,t),C(n,t),n.push(e.outputColorSpace)),n.push(t.customProgramCacheKey),n.join()}function S(e,t){e.push(t.precision),e.push(t.outputColorSpace),e.push(t.envMapMode),e.push(t.envMapCubeUVHeight),e.push(t.mapUv),e.push(t.alphaMapUv),e.push(t.lightMapUv),e.push(t.aoMapUv),e.push(t.bumpMapUv),e.push(t.normalMapUv),e.push(t.displacementMapUv),e.push(t.emissiveMapUv),e.push(t.metalnessMapUv),e.push(t.roughnessMapUv),e.push(t.anisotropyMapUv),e.push(t.clearcoatMapUv),e.push(t.clearcoatNormalMapUv),e.push(t.clearcoatRoughnessMapUv),e.push(t.iridescenceMapUv),e.push(t.iridescenceThicknessMapUv),e.push(t.sheenColorMapUv),e.push(t.sheenRoughnessMapUv),e.push(t.specularMapUv),e.push(t.specularColorMapUv),e.push(t.specularIntensityMapUv),e.push(t.transmissionMapUv),e.push(t.thicknessMapUv),e.push(t.combine),e.push(t.fogExp2),e.push(t.sizeAttenuation),e.push(t.morphTargetsCount),e.push(t.morphAttributeCount),e.push(t.numDirLights),e.push(t.numPointLights),e.push(t.numSpotLights),e.push(t.numSpotLightMaps),e.push(t.numHemiLights),e.push(t.numRectAreaLights),e.push(t.numDirLightShadows),e.push(t.numPointLightShadows),e.push(t.numSpotLightShadows),e.push(t.numSpotLightShadowsWithMaps),e.push(t.numLightProbes),e.push(t.shadowMapType),e.push(t.toneMapping),e.push(t.numClippingPlanes),e.push(t.numClipIntersection),e.push(t.depthPacking)}function C(e,t){s.disableAll(),t.supportsVertexTextures&&s.enable(0),t.instancing&&s.enable(1),t.instancingColor&&s.enable(2),t.instancingMorph&&s.enable(3),t.matcap&&s.enable(4),t.envMap&&s.enable(5),t.normalMapObjectSpace&&s.enable(6),t.normalMapTangentSpace&&s.enable(7),t.clearcoat&&s.enable(8),t.iridescence&&s.enable(9),t.alphaTest&&s.enable(10),t.vertexColors&&s.enable(11),t.vertexAlphas&&s.enable(12),t.vertexUv1s&&s.enable(13),t.vertexUv2s&&s.enable(14),t.vertexUv3s&&s.enable(15),t.vertexTangents&&s.enable(16),t.anisotropy&&s.enable(17),t.alphaHash&&s.enable(18),t.batching&&s.enable(19),t.dispersion&&s.enable(20),t.batchingColor&&s.enable(21),e.push(s.mask),s.disableAll(),t.fog&&s.enable(0),t.useFog&&s.enable(1),t.flatShading&&s.enable(2),t.logarithmicDepthBuffer&&s.enable(3),t.reverseDepthBuffer&&s.enable(4),t.skinning&&s.enable(5),t.morphTargets&&s.enable(6),t.morphNormals&&s.enable(7),t.morphColors&&s.enable(8),t.premultipliedAlpha&&s.enable(9),t.shadowMapEnabled&&s.enable(10),t.doubleSided&&s.enable(11),t.flipSided&&s.enable(12),t.useDepthPacking&&s.enable(13),t.dithering&&s.enable(14),t.transmission&&s.enable(15),t.sheen&&s.enable(16),t.opaque&&s.enable(17),t.pointsUvs&&s.enable(18),t.decodeVideoTexture&&s.enable(19),t.alphaToCoverage&&s.enable(20),e.push(s.mask)}function w(e){let t=v[e.type],n;if(t){let e=va[t];n=Ji.clone(e.uniforms)}else n=e.uniforms;return n}function T(t,n){let r;for(let e=0,t=u.length;e<t;e++){let t=u[e];if(t.cacheKey===n){r=t,++r.usedTimes;break}}return r===void 0&&(r=new Bs(e,n,t,a),u.push(r)),r}function E(e){if(--e.usedTimes===0){let t=u.indexOf(e);u[t]=u[u.length-1],u.pop(),e.destroy()}}function D(e){c.remove(e)}function O(){c.dispose()}return{getParameters:b,getProgramCacheKey:x,getUniforms:w,acquireProgram:T,releaseProgram:E,releaseShaderCache:D,programs:u,dispose:O}}function Gs(){let e=new WeakMap;function t(t){return e.has(t)}function n(t){let n=e.get(t);return n===void 0&&(n={},e.set(t,n)),n}function r(t){e.delete(t)}function i(t,n,r){e.get(t)[n]=r}function a(){e=new WeakMap}return{has:t,get:n,remove:r,update:i,dispose:a}}function Ks(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.material.id===t.material.id?e.z===t.z?e.id-t.id:e.z-t.z:e.material.id-t.material.id:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function qs(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.z===t.z?e.id-t.id:t.z-e.z:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function Js(){let e=[],t=0,n=[],r=[],i=[];function a(){t=0,n.length=0,r.length=0,i.length=0}function o(n,r,i,a,o,s){let c=e[t];return c===void 0?(c={id:n.id,object:n,geometry:r,material:i,groupOrder:a,renderOrder:n.renderOrder,z:o,group:s},e[t]=c):(c.id=n.id,c.object=n,c.geometry=r,c.material=i,c.groupOrder=a,c.renderOrder=n.renderOrder,c.z=o,c.group=s),t++,c}function s(e,t,a,s,c,l){let u=o(e,t,a,s,c,l);a.transmission>0?r.push(u):a.transparent===!0?i.push(u):n.push(u)}function c(e,t,a,s,c,l){let u=o(e,t,a,s,c,l);a.transmission>0?r.unshift(u):a.transparent===!0?i.unshift(u):n.unshift(u)}function l(e,t){n.length>1&&n.sort(e||Ks),r.length>1&&r.sort(t||qs),i.length>1&&i.sort(t||qs)}function u(){for(let n=t,r=e.length;n<r;n++){let t=e[n];if(t.id===null)break;t.id=null,t.object=null,t.geometry=null,t.material=null,t.group=null}}return{opaque:n,transmissive:r,transparent:i,init:a,push:s,unshift:c,finish:u,sort:l}}function Ys(){let e=new WeakMap;function t(t,n){let r=e.get(t),i;return r===void 0?(i=new Js,e.set(t,[i])):n>=r.length?(i=new Js,r.push(i)):i=r[n],i}function n(){e=new WeakMap}return{get:t,dispose:n}}function Xs(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`DirectionalLight`:n={direction:new W,color:new G};break;case`SpotLight`:n={position:new W,direction:new W,color:new G,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case`PointLight`:n={position:new W,color:new G,distance:0,decay:0};break;case`HemisphereLight`:n={direction:new W,skyColor:new G,groundColor:new G};break;case`RectAreaLight`:n={color:new G,position:new W,halfWidth:new W,halfHeight:new W}}return e[t.id]=n,n}}}function Zs(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`DirectionalLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new V};break;case`SpotLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new V};break;case`PointLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new V,shadowCameraNear:1,shadowCameraFar:1e3}}return e[t.id]=n,n}}}var Qs=0;function $s(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+ +!!t.map-!!e.map}function ec(e){let t=new Xs,n=Zs(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let e=0;e<9;e++)r.probe.push(new W);let i=new W,a=new xr,o=new xr;function s(i){let a=0,o=0,s=0;for(let e=0;e<9;e++)r.probe[e].set(0,0,0);let c=0,l=0,u=0,d=0,f=0,p=0,m=0,h=0,g=0,_=0,v=0;i.sort($s);for(let e=0,y=i.length;e<y;e++){let y=i[e],b=y.color,x=y.intensity,S=y.distance,C=y.shadow&&y.shadow.map?y.shadow.map.texture:null;if(y.isAmbientLight)a+=b.r*x,o+=b.g*x,s+=b.b*x;else if(y.isLightProbe){for(let e=0;e<9;e++)r.probe[e].addScaledVector(y.sh.coefficients[e],x);v++}else if(y.isDirectionalLight){let e=t.get(y);if(e.color.copy(y.color).multiplyScalar(y.intensity),y.castShadow){let e=y.shadow,t=n.get(y);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,r.directionalShadow[c]=t,r.directionalShadowMap[c]=C,r.directionalShadowMatrix[c]=y.shadow.matrix,p++}r.directional[c]=e,c++}else if(y.isSpotLight){let e=t.get(y);e.position.setFromMatrixPosition(y.matrixWorld),e.color.copy(b).multiplyScalar(x),e.distance=S,e.coneCos=Math.cos(y.angle),e.penumbraCos=Math.cos(y.angle*(1-y.penumbra)),e.decay=y.decay,r.spot[u]=e;let i=y.shadow;if(y.map&&(r.spotLightMap[g]=y.map,g++,i.updateMatrices(y),y.castShadow&&_++),r.spotLightMatrix[u]=i.matrix,y.castShadow){let e=n.get(y);e.shadowIntensity=i.intensity,e.shadowBias=i.bias,e.shadowNormalBias=i.normalBias,e.shadowRadius=i.radius,e.shadowMapSize=i.mapSize,r.spotShadow[u]=e,r.spotShadowMap[u]=C,h++}u++}else if(y.isRectAreaLight){let e=t.get(y);e.color.copy(b).multiplyScalar(x),e.halfWidth.set(y.width*.5,0,0),e.halfHeight.set(0,y.height*.5,0),r.rectArea[d]=e,d++}else if(y.isPointLight){let e=t.get(y);if(e.color.copy(y.color).multiplyScalar(y.intensity),e.distance=y.distance,e.decay=y.decay,y.castShadow){let e=y.shadow,t=n.get(y);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,t.shadowCameraNear=e.camera.near,t.shadowCameraFar=e.camera.far,r.pointShadow[l]=t,r.pointShadowMap[l]=C,r.pointShadowMatrix[l]=y.shadow.matrix,m++}r.point[l]=e,l++}else if(y.isHemisphereLight){let e=t.get(y);e.skyColor.copy(y.color).multiplyScalar(x),e.groundColor.copy(y.groundColor).multiplyScalar(x),r.hemi[f]=e,f++}}d>0&&(e.has(`OES_texture_float_linear`)===!0?(r.rectAreaLTC1=Y.LTC_FLOAT_1,r.rectAreaLTC2=Y.LTC_FLOAT_2):(r.rectAreaLTC1=Y.LTC_HALF_1,r.rectAreaLTC2=Y.LTC_HALF_2)),r.ambient[0]=a,r.ambient[1]=o,r.ambient[2]=s;let y=r.hash;(y.directionalLength!==c||y.pointLength!==l||y.spotLength!==u||y.rectAreaLength!==d||y.hemiLength!==f||y.numDirectionalShadows!==p||y.numPointShadows!==m||y.numSpotShadows!==h||y.numSpotMaps!==g||y.numLightProbes!==v)&&(r.directional.length=c,r.spot.length=u,r.rectArea.length=d,r.point.length=l,r.hemi.length=f,r.directionalShadow.length=p,r.directionalShadowMap.length=p,r.pointShadow.length=m,r.pointShadowMap.length=m,r.spotShadow.length=h,r.spotShadowMap.length=h,r.directionalShadowMatrix.length=p,r.pointShadowMatrix.length=m,r.spotLightMatrix.length=h+g-_,r.spotLightMap.length=g,r.numSpotLightShadowsWithMaps=_,r.numLightProbes=v,y.directionalLength=c,y.pointLength=l,y.spotLength=u,y.rectAreaLength=d,y.hemiLength=f,y.numDirectionalShadows=p,y.numPointShadows=m,y.numSpotShadows=h,y.numSpotMaps=g,y.numLightProbes=v,r.version=Qs++)}function c(e,t){let n=0,s=0,c=0,l=0,u=0,d=t.matrixWorldInverse;for(let t=0,f=e.length;t<f;t++){let f=e[t];if(f.isDirectionalLight){let e=r.directional[n];e.direction.setFromMatrixPosition(f.matrixWorld),i.setFromMatrixPosition(f.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(d),n++}else if(f.isSpotLight){let e=r.spot[c];e.position.setFromMatrixPosition(f.matrixWorld),e.position.applyMatrix4(d),e.direction.setFromMatrixPosition(f.matrixWorld),i.setFromMatrixPosition(f.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(d),c++}else if(f.isRectAreaLight){let e=r.rectArea[l];e.position.setFromMatrixPosition(f.matrixWorld),e.position.applyMatrix4(d),o.identity(),a.copy(f.matrixWorld),a.premultiply(d),o.extractRotation(a),e.halfWidth.set(f.width*.5,0,0),e.halfHeight.set(0,f.height*.5,0),e.halfWidth.applyMatrix4(o),e.halfHeight.applyMatrix4(o),l++}else if(f.isPointLight){let e=r.point[s];e.position.setFromMatrixPosition(f.matrixWorld),e.position.applyMatrix4(d),s++}else if(f.isHemisphereLight){let e=r.hemi[u];e.direction.setFromMatrixPosition(f.matrixWorld),e.direction.transformDirection(d),u++}}}return{setup:s,setupView:c,state:r}}function tc(e){let t=new ec(e),n=[],r=[];function i(e){l.camera=e,n.length=0,r.length=0}function a(e){n.push(e)}function o(e){r.push(e)}function s(){t.setup(n)}function c(e){t.setupView(n,e)}let l={lightsArray:n,shadowsArray:r,camera:null,lights:t,transmissionRenderTarget:{}};return{init:i,state:l,setupLights:s,setupLightsView:c,pushLight:a,pushShadow:o}}function nc(e){let t=new WeakMap;function n(n,r=0){let i=t.get(n),a;return i===void 0?(a=new tc(e),t.set(n,[a])):r>=i.length?(a=new tc(e),i.push(a)):a=i[r],a}function r(){t=new WeakMap}return{get:n,dispose:r}}var rc=class extends hi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type=`MeshDepthMaterial`,this.depthPacking=Pt,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},ic=class extends hi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type=`MeshDistanceMaterial`,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},ac=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,oc=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function sc(e,t,n){let r=new ma,i=new V,a=new V,o=new Bn,c=new rc({depthPacking:Ft}),m=new ic,h={},g=n.maxTextureSize,_={[u]:d,[d]:u,[f]:f},v=new Zi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new V},radius:{value:4}},vertexShader:ac,fragmentShader:oc}),y=v.clone();y.defines.HORIZONTAL_PASS=1;let b=new ki;b.setAttribute(`position`,new yi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new q(b,v),S=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=s;let C=this.type;this.render=function(t,n,s){if(S.enabled===!1||S.autoUpdate===!1&&S.needsUpdate===!1||t.length===0)return;let c=e.getRenderTarget(),u=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),f=e.state;f.setBlending(p),f.buffers.color.setClear(1,1,1,1),f.buffers.depth.setTest(!0),f.setScissorTest(!1);let m=C!==l&&this.type===l,h=C===l&&this.type!==l;for(let c=0,u=t.length;c<u;c++){let u=t[c],d=u.shadow;if(d===void 0){console.warn(`THREE.WebGLShadowMap:`,u,`has no shadow.`);continue}if(d.autoUpdate===!1&&d.needsUpdate===!1)continue;i.copy(d.mapSize);let p=d.getFrameExtents();if(i.multiply(p),a.copy(d.mapSize),(i.x>g||i.y>g)&&(i.x>g&&(a.x=Math.floor(g/p.x),i.x=a.x*p.x,d.mapSize.x=a.x),i.y>g&&(a.y=Math.floor(g/p.y),i.y=a.y*p.y,d.mapSize.y=a.y)),d.map===null||m===!0||h===!0){let e=this.type===l?{}:{minFilter:Ee,magFilter:Ee};d.map!==null&&d.map.dispose(),d.map=new Hn(i.x,i.y,e),d.map.texture.name=u.name+`.shadowMap`,d.camera.updateProjectionMatrix()}e.setRenderTarget(d.map),e.clear();let _=d.getViewportCount();for(let e=0;e<_;e++){let t=d.getViewport(e);o.set(a.x*t.x,a.y*t.y,a.x*t.z,a.y*t.w),f.viewport(o),d.updateMatrices(u,e),r=d.getFrustum(),E(n,s,d.camera,u,this.type)}d.isPointLightShadow!==!0&&this.type===l&&w(d,s),d.needsUpdate=!1}C=this.type,S.needsUpdate=!1,e.setRenderTarget(c,u,d)};function w(n,r){let a=t.update(x);v.defines.VSM_SAMPLES!==n.blurSamples&&(v.defines.VSM_SAMPLES=n.blurSamples,y.defines.VSM_SAMPLES=n.blurSamples,v.needsUpdate=!0,y.needsUpdate=!0),n.mapPass===null&&(n.mapPass=new Hn(i.x,i.y)),v.uniforms.shadow_pass.value=n.map.texture,v.uniforms.resolution.value=n.mapSize,v.uniforms.radius.value=n.radius,e.setRenderTarget(n.mapPass),e.clear(),e.renderBufferDirect(r,null,a,v,x,null),y.uniforms.shadow_pass.value=n.mapPass.texture,y.uniforms.resolution.value=n.mapSize,y.uniforms.radius.value=n.radius,e.setRenderTarget(n.map),e.clear(),e.renderBufferDirect(r,null,a,y,x,null)}function T(t,n,r,i){let a=null,o=r.isPointLight===!0?t.customDistanceMaterial:t.customDepthMaterial;if(o!==void 0)a=o;else if(a=r.isPointLight===!0?m:c,e.localClippingEnabled&&n.clipShadows===!0&&Array.isArray(n.clippingPlanes)&&n.clippingPlanes.length!==0||n.displacementMap&&n.displacementScale!==0||n.alphaMap&&n.alphaTest>0||n.map&&n.alphaTest>0){let e=a.uuid,t=n.uuid,r=h[e];r===void 0&&(r={},h[e]=r);let i=r[t];i===void 0&&(i=a.clone(),r[t]=i,n.addEventListener(`dispose`,D)),a=i}if(a.visible=n.visible,a.wireframe=n.wireframe,i===l?a.side=n.shadowSide===null?n.side:n.shadowSide:a.side=n.shadowSide===null?_[n.side]:n.shadowSide,a.alphaMap=n.alphaMap,a.alphaTest=n.alphaTest,a.map=n.map,a.clipShadows=n.clipShadows,a.clippingPlanes=n.clippingPlanes,a.clipIntersection=n.clipIntersection,a.displacementMap=n.displacementMap,a.displacementScale=n.displacementScale,a.displacementBias=n.displacementBias,a.wireframeLinewidth=n.wireframeLinewidth,a.linewidth=n.linewidth,r.isPointLight===!0&&a.isMeshDistanceMaterial===!0){let t=e.properties.get(a);t.light=r}return a}function E(n,i,a,o,s){if(n.visible===!1)return;if(n.layers.test(i.layers)&&(n.isMesh||n.isLine||n.isPoints)&&(n.castShadow||n.receiveShadow&&s===l)&&(!n.frustumCulled||r.intersectsObject(n))){n.modelViewMatrix.multiplyMatrices(a.matrixWorldInverse,n.matrixWorld);let r=t.update(n),c=n.material;if(Array.isArray(c)){let t=r.groups;for(let l=0,u=t.length;l<u;l++){let u=t[l],d=c[u.materialIndex];if(d&&d.visible){let t=T(n,d,o,s);n.onBeforeShadow(e,n,i,a,r,t,u),e.renderBufferDirect(a,null,r,t,n,u),n.onAfterShadow(e,n,i,a,r,t,u)}}}else if(c.visible){let t=T(n,c,o,s);n.onBeforeShadow(e,n,i,a,r,t,null),e.renderBufferDirect(a,null,r,t,n,null),n.onAfterShadow(e,n,i,a,r,t,null)}}let c=n.children;for(let e=0,t=c.length;e<t;e++)E(c[e],i,a,o,s)}function D(e){e.target.removeEventListener(`dispose`,D);for(let t in h){let n=h[t],r=e.target.uuid;r in n&&(n[r].dispose(),delete n[r])}}}var cc={[oe]:se,[ce]:de,[N]:fe,[le]:ue,[se]:oe,[de]:ce,[fe]:N,[ue]:le};function lc(e){function t(){let t=!1,n=new Bn,r=null,i=new Bn(0,0,0,0);return{setMask:function(n){r!==n&&!t&&(e.colorMask(n,n,n,n),r=n)},setLocked:function(e){t=e},setClear:function(t,r,a,o,s){s===!0&&(t*=o,r*=o,a*=o),n.set(t,r,a,o),i.equals(n)===!1&&(e.clearColor(t,r,a,o),i.copy(n))},reset:function(){t=!1,r=null,i.set(-1,0,0,0)}}}function n(){let t=!1,n=!1,r=null,i=null,a=null;return{setReversed:function(e){n=e},setTest:function(t){t?Be(e.DEPTH_TEST):Ve(e.DEPTH_TEST)},setMask:function(n){r!==n&&!t&&(e.depthMask(n),r=n)},setFunc:function(t){if(n&&(t=cc[t]),i!==t){switch(t){case oe:e.depthFunc(e.NEVER);break;case se:e.depthFunc(e.ALWAYS);break;case ce:e.depthFunc(e.LESS);break;case le:e.depthFunc(e.LEQUAL);break;case N:e.depthFunc(e.EQUAL);break;case ue:e.depthFunc(e.GEQUAL);break;case de:e.depthFunc(e.GREATER);break;case fe:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}i=t}},setLocked:function(e){t=e},setClear:function(t){a!==t&&(e.clearDepth(t),a=t)},reset:function(){t=!1,r=null,i=null,a=null}}}function r(){let t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null;return{setTest:function(n){t||(n?Be(e.STENCIL_TEST):Ve(e.STENCIL_TEST))},setMask:function(r){n!==r&&!t&&(e.stencilMask(r),n=r)},setFunc:function(t,n,o){(r!==t||i!==n||a!==o)&&(e.stencilFunc(t,n,o),r=t,i=n,a=o)},setOp:function(t,n,r){(o!==t||s!==n||c!==r)&&(e.stencilOp(t,n,r),o=t,s=n,c=r)},setLocked:function(e){t=e},setClear:function(t){l!==t&&(e.clearStencil(t),l=t)},reset:function(){t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null}}}let s=new t,c=new n,l=new r,u=new WeakMap,pe=new WeakMap,me={},he={},ge=new WeakMap,_e=[],ve=null,P=!1,ye=null,F=null,I=null,L=null,be=null,R=null,z=null,xe=new G(0,0,0),Se=0,B=!1,Ce=null,we=null,Te=null,Ee=null,De=null,Oe=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS),ke=!1,Ae=0,je=e.getParameter(e.VERSION);je.indexOf(`WebGL`)===-1?je.indexOf(`OpenGL ES`)!==-1&&(Ae=parseFloat(/^OpenGL ES (\d)/.exec(je)[1]),ke=Ae>=2):(Ae=parseFloat(/^WebGL (\d)/.exec(je)[1]),ke=Ae>=1);let Me=null,Ne={},Pe=e.getParameter(e.SCISSOR_BOX),Fe=e.getParameter(e.VIEWPORT),Ie=new Bn().fromArray(Pe),Le=new Bn().fromArray(Fe);function Re(t,n,r,i){let a=new Uint8Array(4),o=e.createTexture();e.bindTexture(t,o),e.texParameteri(t,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(t,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let o=0;o<r;o++)t===e.TEXTURE_3D||t===e.TEXTURE_2D_ARRAY?e.texImage3D(n,0,e.RGBA,1,1,i,0,e.RGBA,e.UNSIGNED_BYTE,a):e.texImage2D(n+o,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,a);return o}let ze={};ze[e.TEXTURE_2D]=Re(e.TEXTURE_2D,e.TEXTURE_2D,1),ze[e.TEXTURE_CUBE_MAP]=Re(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),ze[e.TEXTURE_2D_ARRAY]=Re(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),ze[e.TEXTURE_3D]=Re(e.TEXTURE_3D,e.TEXTURE_3D,1,1),s.setClear(0,0,0,1),c.setClear(1),l.setClear(0),Be(e.DEPTH_TEST),c.setFunc(le),Ye(!1),Xe(a),Be(e.CULL_FACE),qe(p);function Be(t){me[t]!==!0&&(e.enable(t),me[t]=!0)}function Ve(t){me[t]!==!1&&(e.disable(t),me[t]=!1)}function He(t,n){return he[t]!==n&&(e.bindFramebuffer(t,n),he[t]=n,t===e.DRAW_FRAMEBUFFER&&(he[e.FRAMEBUFFER]=n),t===e.FRAMEBUFFER&&(he[e.DRAW_FRAMEBUFFER]=n),!0)}function Ue(t,n){let r=_e,i=!1;if(t){r=ge.get(n),r===void 0&&(r=[],ge.set(n,r));let a=t.textures;if(r.length!==a.length||r[0]!==e.COLOR_ATTACHMENT0){for(let t=0,n=a.length;t<n;t++)r[t]=e.COLOR_ATTACHMENT0+t;r.length=a.length,i=!0}}else r[0]!==e.BACK&&(r[0]=e.BACK,i=!0);i&&e.drawBuffers(r)}function We(t){return ve!==t&&(e.useProgram(t),ve=t,!0)}let Ge={[y]:e.FUNC_ADD,[b]:e.FUNC_SUBTRACT,[x]:e.FUNC_REVERSE_SUBTRACT};Ge[S]=e.MIN,Ge[C]=e.MAX;let Ke={[w]:e.ZERO,[T]:e.ONE,[E]:e.SRC_COLOR,[O]:e.SRC_ALPHA,[ne]:e.SRC_ALPHA_SATURATE,[ee]:e.DST_COLOR,[A]:e.DST_ALPHA,[D]:e.ONE_MINUS_SRC_COLOR,[k]:e.ONE_MINUS_SRC_ALPHA,[te]:e.ONE_MINUS_DST_COLOR,[j]:e.ONE_MINUS_DST_ALPHA,[re]:e.CONSTANT_COLOR,[M]:e.ONE_MINUS_CONSTANT_COLOR,[ie]:e.CONSTANT_ALPHA,[ae]:e.ONE_MINUS_CONSTANT_ALPHA};function qe(t,n,r,i,a,o,s,c,l,u){if(t===p){P===!0&&(Ve(e.BLEND),P=!1);return}if(P===!1&&(Be(e.BLEND),P=!0),t!==v){if(t!==ye||u!==B){if((F!==y||be!==y)&&(e.blendEquation(e.FUNC_ADD),F=y,be=y),u)switch(t){case m:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case h:e.blendFunc(e.ONE,e.ONE);break;case g:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case _:e.blendFuncSeparate(e.ZERO,e.SRC_COLOR,e.ZERO,e.SRC_ALPHA);break;default:console.error(`THREE.WebGLState: Invalid blending: `,t)}else switch(t){case m:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case h:e.blendFunc(e.SRC_ALPHA,e.ONE);break;case g:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case _:e.blendFunc(e.ZERO,e.SRC_COLOR);break;default:console.error(`THREE.WebGLState: Invalid blending: `,t)}I=null,L=null,R=null,z=null,xe.set(0,0,0),Se=0,ye=t,B=u}return}a||=n,o||=r,s||=i,(n!==F||a!==be)&&(e.blendEquationSeparate(Ge[n],Ge[a]),F=n,be=a),(r!==I||i!==L||o!==R||s!==z)&&(e.blendFuncSeparate(Ke[r],Ke[i],Ke[o],Ke[s]),I=r,L=i,R=o,z=s),(c.equals(xe)===!1||l!==Se)&&(e.blendColor(c.r,c.g,c.b,l),xe.copy(c),Se=l),ye=t,B=!1}function Je(t,n){t.side===f?Ve(e.CULL_FACE):Be(e.CULL_FACE);let r=t.side===d;n&&(r=!r),Ye(r),t.blending===m&&t.transparent===!1?qe(p):qe(t.blending,t.blendEquation,t.blendSrc,t.blendDst,t.blendEquationAlpha,t.blendSrcAlpha,t.blendDstAlpha,t.blendColor,t.blendAlpha,t.premultipliedAlpha),c.setFunc(t.depthFunc),c.setTest(t.depthTest),c.setMask(t.depthWrite),s.setMask(t.colorWrite);let i=t.stencilWrite;l.setTest(i),i&&(l.setMask(t.stencilWriteMask),l.setFunc(t.stencilFunc,t.stencilRef,t.stencilFuncMask),l.setOp(t.stencilFail,t.stencilZFail,t.stencilZPass)),Qe(t.polygonOffset,t.polygonOffsetFactor,t.polygonOffsetUnits),t.alphaToCoverage===!0?Be(e.SAMPLE_ALPHA_TO_COVERAGE):Ve(e.SAMPLE_ALPHA_TO_COVERAGE)}function Ye(t){Ce!==t&&(t?e.frontFace(e.CW):e.frontFace(e.CCW),Ce=t)}function Xe(t){t===i?Ve(e.CULL_FACE):(Be(e.CULL_FACE),t!==we&&(t===a?e.cullFace(e.BACK):t===o?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))),we=t}function Ze(t){t!==Te&&(ke&&e.lineWidth(t),Te=t)}function Qe(t,n,r){t?(Be(e.POLYGON_OFFSET_FILL),(Ee!==n||De!==r)&&(e.polygonOffset(n,r),Ee=n,De=r)):Ve(e.POLYGON_OFFSET_FILL)}function $e(t){t?Be(e.SCISSOR_TEST):Ve(e.SCISSOR_TEST)}function et(t){t===void 0&&(t=e.TEXTURE0+Oe-1),Me!==t&&(e.activeTexture(t),Me=t)}function tt(t,n,r){r===void 0&&(r=Me===null?e.TEXTURE0+Oe-1:Me);let i=Ne[r];i===void 0&&(i={type:void 0,texture:void 0},Ne[r]=i),(i.type!==t||i.texture!==n)&&(Me!==r&&(e.activeTexture(r),Me=r),e.bindTexture(t,n||ze[t]),i.type=t,i.texture=n)}function nt(){let t=Ne[Me];t!==void 0&&t.type!==void 0&&(e.bindTexture(t.type,null),t.type=void 0,t.texture=void 0)}function rt(){try{e.compressedTexImage2D.apply(e,arguments)}catch(e){console.error(`THREE.WebGLState:`,e)}}function it(){try{e.compressedTexImage3D.apply(e,arguments)}catch(e){console.error(`THREE.WebGLState:`,e)}}function at(){try{e.texSubImage2D.apply(e,arguments)}catch(e){console.error(`THREE.WebGLState:`,e)}}function ot(){try{e.texSubImage3D.apply(e,arguments)}catch(e){console.error(`THREE.WebGLState:`,e)}}function st(){try{e.compressedTexSubImage2D.apply(e,arguments)}catch(e){console.error(`THREE.WebGLState:`,e)}}function ct(){try{e.compressedTexSubImage3D.apply(e,arguments)}catch(e){console.error(`THREE.WebGLState:`,e)}}function lt(){try{e.texStorage2D.apply(e,arguments)}catch(e){console.error(`THREE.WebGLState:`,e)}}function ut(){try{e.texStorage3D.apply(e,arguments)}catch(e){console.error(`THREE.WebGLState:`,e)}}function dt(){try{e.texImage2D.apply(e,arguments)}catch(e){console.error(`THREE.WebGLState:`,e)}}function ft(){try{e.texImage3D.apply(e,arguments)}catch(e){console.error(`THREE.WebGLState:`,e)}}function pt(t){Ie.equals(t)===!1&&(e.scissor(t.x,t.y,t.z,t.w),Ie.copy(t))}function mt(t){Le.equals(t)===!1&&(e.viewport(t.x,t.y,t.z,t.w),Le.copy(t))}function ht(t,n){let r=pe.get(n);r===void 0&&(r=new WeakMap,pe.set(n,r));let i=r.get(t);i===void 0&&(i=e.getUniformBlockIndex(n,t.name),r.set(t,i))}function gt(t,n){let r=pe.get(n).get(t);u.get(n)!==r&&(e.uniformBlockBinding(n,r,t.__bindingPointIndex),u.set(n,r))}function _t(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),me={},Me=null,Ne={},he={},ge=new WeakMap,_e=[],ve=null,P=!1,ye=null,F=null,I=null,L=null,be=null,R=null,z=null,xe=new G(0,0,0),Se=0,B=!1,Ce=null,we=null,Te=null,Ee=null,De=null,Ie.set(0,0,e.canvas.width,e.canvas.height),Le.set(0,0,e.canvas.width,e.canvas.height),s.reset(),c.reset(),l.reset()}return{buffers:{color:s,depth:c,stencil:l},enable:Be,disable:Ve,bindFramebuffer:He,drawBuffers:Ue,useProgram:We,setBlending:qe,setMaterial:Je,setFlipSided:Ye,setCullFace:Xe,setLineWidth:Ze,setPolygonOffset:Qe,setScissorTest:$e,activeTexture:et,bindTexture:tt,unbindTexture:nt,compressedTexImage2D:rt,compressedTexImage3D:it,texImage2D:dt,texImage3D:ft,updateUBOMapping:ht,uniformBlockBinding:gt,texStorage2D:lt,texStorage3D:ut,texSubImage2D:at,texSubImage3D:ot,compressedTexSubImage2D:st,compressedTexSubImage3D:ct,scissor:pt,viewport:mt,reset:_t}}function uc(e,t,n,r){let i=dc(r);switch(n){case We:return e*t;case qe:return e*t;case Je:return e*t*2;case Ze:return e*t/i.components*i.byteLength;case Qe:return e*t/i.components*i.byteLength;case $e:return e*t*2/i.components*i.byteLength;case et:return e*t*2/i.components*i.byteLength;case Ge:return e*t*3/i.components*i.byteLength;case Ke:return e*t*4/i.components*i.byteLength;case tt:return e*t*4/i.components*i.byteLength;case nt:case rt:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case it:case at:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case st:case lt:return Math.max(e,16)*Math.max(t,8)/4;case ot:case ct:return Math.max(e,8)*Math.max(t,8)/2;case ut:case dt:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case ft:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case pt:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case mt:return Math.floor((e+4)/5)*Math.floor((t+3)/4)*16;case ht:return Math.floor((e+4)/5)*Math.floor((t+4)/5)*16;case gt:return Math.floor((e+5)/6)*Math.floor((t+4)/5)*16;case _t:return Math.floor((e+5)/6)*Math.floor((t+5)/6)*16;case vt:return Math.floor((e+7)/8)*Math.floor((t+4)/5)*16;case yt:return Math.floor((e+7)/8)*Math.floor((t+5)/6)*16;case bt:return Math.floor((e+7)/8)*Math.floor((t+7)/8)*16;case xt:return Math.floor((e+9)/10)*Math.floor((t+4)/5)*16;case St:return Math.floor((e+9)/10)*Math.floor((t+5)/6)*16;case Ct:return Math.floor((e+9)/10)*Math.floor((t+7)/8)*16;case wt:return Math.floor((e+9)/10)*Math.floor((t+9)/10)*16;case Tt:return Math.floor((e+11)/12)*Math.floor((t+9)/10)*16;case Et:return Math.floor((e+11)/12)*Math.floor((t+11)/12)*16;case Dt:case Ot:case kt:return Math.ceil(e/4)*Math.ceil(t/4)*16;case At:case jt:return Math.ceil(e/4)*Math.ceil(t/4)*8;case Mt:case Nt:return Math.ceil(e/4)*Math.ceil(t/4)*16}throw Error(`Unable to determine texture byte length for ${n} format.`)}function dc(e){switch(e){case Me:case Ne:return{byteLength:1,components:1};case Fe:case Pe:case ze:return{byteLength:2,components:1};case Be:case Ve:return{byteLength:2,components:4};case Le:case Ie:case Re:return{byteLength:4,components:1};case Ue:return{byteLength:4,components:3}}throw Error(`Unknown texture type ${e}.`)}function fc(e,t,n,r,i,a,o){let s=t.has(`WEBGL_multisampled_render_to_texture`)?t.get(`WEBGL_multisampled_render_to_texture`):null,c=typeof navigator>`u`?!1:/OculusBrowser/g.test(navigator.userAgent),l=new V,u=new WeakMap,d,f=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<`u`&&new OffscreenCanvas(1,1).getContext(`2d`)!==null}catch{}function m(e,t){return p?new OffscreenCanvas(e,t):bn(`canvas`)}function h(e,t,n){let r=1,i=F(e);if((i.width>n||i.height>n)&&(r=n/Math.max(i.width,i.height)),r<1){if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap||typeof VideoFrame<`u`&&e instanceof VideoFrame){let n=Math.floor(r*i.width),a=Math.floor(r*i.height);d===void 0&&(d=m(n,a));let o=t?m(n,a):d;return o.width=n,o.height=a,o.getContext(`2d`).drawImage(e,0,0,n,a),console.warn(`THREE.WebGLRenderer: Texture has been resized from (`+i.width+`x`+i.height+`) to (`+n+`x`+a+`).`),o}return`data`in e&&console.warn(`THREE.WebGLRenderer: Image in DataTexture is too big (`+i.width+`x`+i.height+`).`),e}return e}function g(e){return e.generateMipmaps&&e.minFilter!==Ee&&e.minFilter!==ke}function _(t){e.generateMipmap(t)}function v(n,r,i,a,o=!1){if(n!==null){if(e[n]!==void 0)return e[n];console.warn(`THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '`+n+`'`)}let s=r;if(r===e.RED&&(i===e.FLOAT&&(s=e.R32F),i===e.HALF_FLOAT&&(s=e.R16F),i===e.UNSIGNED_BYTE&&(s=e.R8)),r===e.RED_INTEGER&&(i===e.UNSIGNED_BYTE&&(s=e.R8UI),i===e.UNSIGNED_SHORT&&(s=e.R16UI),i===e.UNSIGNED_INT&&(s=e.R32UI),i===e.BYTE&&(s=e.R8I),i===e.SHORT&&(s=e.R16I),i===e.INT&&(s=e.R32I)),r===e.RG&&(i===e.FLOAT&&(s=e.RG32F),i===e.HALF_FLOAT&&(s=e.RG16F),i===e.UNSIGNED_BYTE&&(s=e.RG8)),r===e.RG_INTEGER&&(i===e.UNSIGNED_BYTE&&(s=e.RG8UI),i===e.UNSIGNED_SHORT&&(s=e.RG16UI),i===e.UNSIGNED_INT&&(s=e.RG32UI),i===e.BYTE&&(s=e.RG8I),i===e.SHORT&&(s=e.RG16I),i===e.INT&&(s=e.RG32I)),r===e.RGB_INTEGER&&(i===e.UNSIGNED_BYTE&&(s=e.RGB8UI),i===e.UNSIGNED_SHORT&&(s=e.RGB16UI),i===e.UNSIGNED_INT&&(s=e.RGB32UI),i===e.BYTE&&(s=e.RGB8I),i===e.SHORT&&(s=e.RGB16I),i===e.INT&&(s=e.RGB32I)),r===e.RGBA_INTEGER&&(i===e.UNSIGNED_BYTE&&(s=e.RGBA8UI),i===e.UNSIGNED_SHORT&&(s=e.RGBA16UI),i===e.UNSIGNED_INT&&(s=e.RGBA32UI),i===e.BYTE&&(s=e.RGBA8I),i===e.SHORT&&(s=e.RGBA16I),i===e.INT&&(s=e.RGBA32I)),r===e.RGB&&i===e.UNSIGNED_INT_5_9_9_9_REV&&(s=e.RGB9_E5),r===e.RGBA){let t=o?Ut:U.getTransfer(a);i===e.FLOAT&&(s=e.RGBA32F),i===e.HALF_FLOAT&&(s=e.RGBA16F),i===e.UNSIGNED_BYTE&&(s=t===Wt?e.SRGB8_ALPHA8:e.RGBA8),i===e.UNSIGNED_SHORT_4_4_4_4&&(s=e.RGBA4),i===e.UNSIGNED_SHORT_5_5_5_1&&(s=e.RGB5_A1)}return(s===e.R16F||s===e.R32F||s===e.RG16F||s===e.RG32F||s===e.RGBA16F||s===e.RGBA32F)&&t.get(`EXT_color_buffer_float`),s}function y(t,n){let r;return t?n===null||n===Le||n===He?r=e.DEPTH24_STENCIL8:n===Re?r=e.DEPTH32F_STENCIL8:n===Fe&&(r=e.DEPTH24_STENCIL8,console.warn(`DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.`)):n===null||n===Le||n===He?r=e.DEPTH_COMPONENT24:n===Re?r=e.DEPTH_COMPONENT32F:n===Fe&&(r=e.DEPTH_COMPONENT16),r}function b(e,t){return g(e)===!0||e.isFramebufferTexture&&e.minFilter!==Ee&&e.minFilter!==ke?Math.log2(Math.max(t.width,t.height))+1:e.mipmaps!==void 0&&e.mipmaps.length>0?e.mipmaps.length:e.isCompressedTexture&&Array.isArray(e.image)?t.mipmaps.length:1}function x(e){let t=e.target;t.removeEventListener(`dispose`,x),C(t),t.isVideoTexture&&u.delete(t)}function S(e){let t=e.target;t.removeEventListener(`dispose`,S),T(t)}function C(e){let t=r.get(e);if(t.__webglInit===void 0)return;let n=e.source,i=f.get(n);if(i){let r=i[t.__cacheKey];r.usedTimes--,r.usedTimes===0&&w(e),Object.keys(i).length===0&&f.delete(n)}r.remove(e)}function w(t){let n=r.get(t);e.deleteTexture(n.__webglTexture);let i=t.source,a=f.get(i);delete a[n.__cacheKey],o.memory.textures--}function T(t){let n=r.get(t);if(t.depthTexture&&t.depthTexture.dispose(),t.isWebGLCubeRenderTarget)for(let t=0;t<6;t++){if(Array.isArray(n.__webglFramebuffer[t]))for(let r=0;r<n.__webglFramebuffer[t].length;r++)e.deleteFramebuffer(n.__webglFramebuffer[t][r]);else e.deleteFramebuffer(n.__webglFramebuffer[t]);n.__webglDepthbuffer&&e.deleteRenderbuffer(n.__webglDepthbuffer[t])}else{if(Array.isArray(n.__webglFramebuffer))for(let t=0;t<n.__webglFramebuffer.length;t++)e.deleteFramebuffer(n.__webglFramebuffer[t]);else e.deleteFramebuffer(n.__webglFramebuffer);if(n.__webglDepthbuffer&&e.deleteRenderbuffer(n.__webglDepthbuffer),n.__webglMultisampledFramebuffer&&e.deleteFramebuffer(n.__webglMultisampledFramebuffer),n.__webglColorRenderbuffer)for(let t=0;t<n.__webglColorRenderbuffer.length;t++)n.__webglColorRenderbuffer[t]&&e.deleteRenderbuffer(n.__webglColorRenderbuffer[t]);n.__webglDepthRenderbuffer&&e.deleteRenderbuffer(n.__webglDepthRenderbuffer)}let i=t.textures;for(let t=0,n=i.length;t<n;t++){let n=r.get(i[t]);n.__webglTexture&&(e.deleteTexture(n.__webglTexture),o.memory.textures--),r.remove(i[t])}r.remove(t)}let E=0;function D(){E=0}function O(){let e=E;return e>=i.maxTextures&&console.warn(`THREE.WebGLTextures: Trying to use `+e+` texture units while this GPU supports only `+i.maxTextures),E+=1,e}function k(e){let t=[];return t.push(e.wrapS),t.push(e.wrapT),t.push(e.wrapR||0),t.push(e.magFilter),t.push(e.minFilter),t.push(e.anisotropy),t.push(e.internalFormat),t.push(e.format),t.push(e.type),t.push(e.generateMipmaps),t.push(e.premultiplyAlpha),t.push(e.flipY),t.push(e.unpackAlignment),t.push(e.colorSpace),t.join()}function A(t,i){let a=r.get(t);if(t.isVideoTexture&&P(t),t.isRenderTargetTexture===!1&&t.version>0&&a.__version!==t.version){let e=t.image;if(e===null)console.warn(`THREE.WebGLRenderer: Texture marked for update but no image data found.`);else if(e.complete===!1)console.warn(`THREE.WebGLRenderer: Texture marked for update but image is incomplete`);else{oe(a,t,i);return}}n.bindTexture(e.TEXTURE_2D,a.__webglTexture,e.TEXTURE0+i)}function j(t,i){let a=r.get(t);if(t.version>0&&a.__version!==t.version){oe(a,t,i);return}n.bindTexture(e.TEXTURE_2D_ARRAY,a.__webglTexture,e.TEXTURE0+i)}function ee(t,i){let a=r.get(t);if(t.version>0&&a.__version!==t.version){oe(a,t,i);return}n.bindTexture(e.TEXTURE_3D,a.__webglTexture,e.TEXTURE0+i)}function te(t,i){let a=r.get(t);if(t.version>0&&a.__version!==t.version){se(a,t,i);return}n.bindTexture(e.TEXTURE_CUBE_MAP,a.__webglTexture,e.TEXTURE0+i)}let ne={[Ce]:e.REPEAT,[we]:e.CLAMP_TO_EDGE,[Te]:e.MIRRORED_REPEAT},re={[Ee]:e.NEAREST,[De]:e.NEAREST_MIPMAP_NEAREST,[Oe]:e.NEAREST_MIPMAP_LINEAR,[ke]:e.LINEAR,[Ae]:e.LINEAR_MIPMAP_NEAREST,[je]:e.LINEAR_MIPMAP_LINEAR},M={[Yt]:e.NEVER,[nn]:e.ALWAYS,[Xt]:e.LESS,[Qt]:e.LEQUAL,[Zt]:e.EQUAL,[tn]:e.GEQUAL,[$t]:e.GREATER,[en]:e.NOTEQUAL};function ie(n,a){if(a.type===Re&&t.has(`OES_texture_float_linear`)===!1&&(a.magFilter===ke||a.magFilter===Ae||a.magFilter===Oe||a.magFilter===je||a.minFilter===ke||a.minFilter===Ae||a.minFilter===Oe||a.minFilter===je)&&console.warn(`THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device.`),e.texParameteri(n,e.TEXTURE_WRAP_S,ne[a.wrapS]),e.texParameteri(n,e.TEXTURE_WRAP_T,ne[a.wrapT]),(n===e.TEXTURE_3D||n===e.TEXTURE_2D_ARRAY)&&e.texParameteri(n,e.TEXTURE_WRAP_R,ne[a.wrapR]),e.texParameteri(n,e.TEXTURE_MAG_FILTER,re[a.magFilter]),e.texParameteri(n,e.TEXTURE_MIN_FILTER,re[a.minFilter]),a.compareFunction&&(e.texParameteri(n,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(n,e.TEXTURE_COMPARE_FUNC,M[a.compareFunction])),t.has(`EXT_texture_filter_anisotropic`)===!0){if(a.magFilter===Ee||a.minFilter!==Oe&&a.minFilter!==je||a.type===Re&&t.has(`OES_texture_float_linear`)===!1)return;if(a.anisotropy>1||r.get(a).__currentAnisotropy){let o=t.get(`EXT_texture_filter_anisotropic`);e.texParameterf(n,o.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(a.anisotropy,i.getMaxAnisotropy())),r.get(a).__currentAnisotropy=a.anisotropy}}}function ae(t,n){let r=!1;t.__webglInit===void 0&&(t.__webglInit=!0,n.addEventListener(`dispose`,x));let i=n.source,a=f.get(i);a===void 0&&(a={},f.set(i,a));let s=k(n);if(s!==t.__cacheKey){a[s]===void 0&&(a[s]={texture:e.createTexture(),usedTimes:0},o.memory.textures++,r=!0),a[s].usedTimes++;let i=a[t.__cacheKey];i!==void 0&&(a[t.__cacheKey].usedTimes--,i.usedTimes===0&&w(n)),t.__cacheKey=s,t.__webglTexture=a[s].texture}return r}function oe(t,o,s){let c=e.TEXTURE_2D;(o.isDataArrayTexture||o.isCompressedArrayTexture)&&(c=e.TEXTURE_2D_ARRAY),o.isData3DTexture&&(c=e.TEXTURE_3D);let l=ae(t,o),u=o.source;n.bindTexture(c,t.__webglTexture,e.TEXTURE0+s);let d=r.get(u);if(u.version!==d.__version||l===!0){n.activeTexture(e.TEXTURE0+s);let t=U.getPrimaries(U.workingColorSpace),r=o.colorSpace===Rt?null:U.getPrimaries(o.colorSpace),f=o.colorSpace===Rt||t===r?e.NONE:e.BROWSER_DEFAULT_WEBGL;e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,o.flipY),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,o.premultiplyAlpha),e.pixelStorei(e.UNPACK_ALIGNMENT,o.unpackAlignment),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,f);let p=h(o.image,!1,i.maxTextureSize);p=ye(o,p);let m=a.convert(o.format,o.colorSpace),x=a.convert(o.type),S=v(o.internalFormat,m,x,o.colorSpace,o.isVideoTexture);ie(c,o);let C,w=o.mipmaps,T=o.isVideoTexture!==!0,E=d.__version===void 0||l===!0,D=u.dataReady,O=b(o,p);if(o.isDepthTexture)S=y(o.format===Xe,o.type),E&&(T?n.texStorage2D(e.TEXTURE_2D,1,S,p.width,p.height):n.texImage2D(e.TEXTURE_2D,0,S,p.width,p.height,0,m,x,null));else if(o.isDataTexture){if(w.length>0){T&&E&&n.texStorage2D(e.TEXTURE_2D,O,S,w[0].width,w[0].height);for(let t=0,r=w.length;t<r;t++)C=w[t],T?D&&n.texSubImage2D(e.TEXTURE_2D,t,0,0,C.width,C.height,m,x,C.data):n.texImage2D(e.TEXTURE_2D,t,S,C.width,C.height,0,m,x,C.data);o.generateMipmaps=!1}else T?(E&&n.texStorage2D(e.TEXTURE_2D,O,S,p.width,p.height),D&&n.texSubImage2D(e.TEXTURE_2D,0,0,0,p.width,p.height,m,x,p.data)):n.texImage2D(e.TEXTURE_2D,0,S,p.width,p.height,0,m,x,p.data)}else if(o.isCompressedTexture){if(o.isCompressedArrayTexture){T&&E&&n.texStorage3D(e.TEXTURE_2D_ARRAY,O,S,w[0].width,w[0].height,p.depth);for(let t=0,r=w.length;t<r;t++)if(C=w[t],o.format!==Ke){if(m!==null){if(T){if(D){if(o.layerUpdates.size>0){let r=uc(C.width,C.height,o.format,o.type);for(let i of o.layerUpdates){let a=C.data.subarray(i*r/C.data.BYTES_PER_ELEMENT,(i+1)*r/C.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,t,0,0,i,C.width,C.height,1,m,a,0,0)}o.clearLayerUpdates()}else n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,t,0,0,0,C.width,C.height,p.depth,m,C.data,0,0)}}else n.compressedTexImage3D(e.TEXTURE_2D_ARRAY,t,S,C.width,C.height,p.depth,0,C.data,0,0)}else console.warn(`THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`)}else T?D&&n.texSubImage3D(e.TEXTURE_2D_ARRAY,t,0,0,0,C.width,C.height,p.depth,m,x,C.data):n.texImage3D(e.TEXTURE_2D_ARRAY,t,S,C.width,C.height,p.depth,0,m,x,C.data)}else{T&&E&&n.texStorage2D(e.TEXTURE_2D,O,S,w[0].width,w[0].height);for(let t=0,r=w.length;t<r;t++)C=w[t],o.format===Ke?T?D&&n.texSubImage2D(e.TEXTURE_2D,t,0,0,C.width,C.height,m,x,C.data):n.texImage2D(e.TEXTURE_2D,t,S,C.width,C.height,0,m,x,C.data):m===null?console.warn(`THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`):T?D&&n.compressedTexSubImage2D(e.TEXTURE_2D,t,0,0,C.width,C.height,m,C.data):n.compressedTexImage2D(e.TEXTURE_2D,t,S,C.width,C.height,0,C.data)}}else if(o.isDataArrayTexture){if(T){if(E&&n.texStorage3D(e.TEXTURE_2D_ARRAY,O,S,p.width,p.height,p.depth),D){if(o.layerUpdates.size>0){let t=uc(p.width,p.height,o.format,o.type);for(let r of o.layerUpdates){let i=p.data.subarray(r*t/p.data.BYTES_PER_ELEMENT,(r+1)*t/p.data.BYTES_PER_ELEMENT);n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,r,p.width,p.height,1,m,x,i)}o.clearLayerUpdates()}else n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,p.width,p.height,p.depth,m,x,p.data)}}else n.texImage3D(e.TEXTURE_2D_ARRAY,0,S,p.width,p.height,p.depth,0,m,x,p.data)}else if(o.isData3DTexture)T?(E&&n.texStorage3D(e.TEXTURE_3D,O,S,p.width,p.height,p.depth),D&&n.texSubImage3D(e.TEXTURE_3D,0,0,0,0,p.width,p.height,p.depth,m,x,p.data)):n.texImage3D(e.TEXTURE_3D,0,S,p.width,p.height,p.depth,0,m,x,p.data);else if(o.isFramebufferTexture){if(E){if(T)n.texStorage2D(e.TEXTURE_2D,O,S,p.width,p.height);else{let t=p.width,r=p.height;for(let i=0;i<O;i++)n.texImage2D(e.TEXTURE_2D,i,S,t,r,0,m,x,null),t>>=1,r>>=1}}}else if(w.length>0){if(T&&E){let t=F(w[0]);n.texStorage2D(e.TEXTURE_2D,O,S,t.width,t.height)}for(let t=0,r=w.length;t<r;t++)C=w[t],T?D&&n.texSubImage2D(e.TEXTURE_2D,t,0,0,m,x,C):n.texImage2D(e.TEXTURE_2D,t,S,m,x,C);o.generateMipmaps=!1}else if(T){if(E){let t=F(p);n.texStorage2D(e.TEXTURE_2D,O,S,t.width,t.height)}D&&n.texSubImage2D(e.TEXTURE_2D,0,0,0,m,x,p)}else n.texImage2D(e.TEXTURE_2D,0,S,m,x,p);g(o)&&_(c),d.__version=u.version,o.onUpdate&&o.onUpdate(o)}t.__version=o.version}function se(t,o,s){if(o.image.length!==6)return;let c=ae(t,o),l=o.source;n.bindTexture(e.TEXTURE_CUBE_MAP,t.__webglTexture,e.TEXTURE0+s);let u=r.get(l);if(l.version!==u.__version||c===!0){n.activeTexture(e.TEXTURE0+s);let t=U.getPrimaries(U.workingColorSpace),r=o.colorSpace===Rt?null:U.getPrimaries(o.colorSpace),d=o.colorSpace===Rt||t===r?e.NONE:e.BROWSER_DEFAULT_WEBGL;e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,o.flipY),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,o.premultiplyAlpha),e.pixelStorei(e.UNPACK_ALIGNMENT,o.unpackAlignment),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,d);let f=o.isCompressedTexture||o.image[0].isCompressedTexture,p=o.image[0]&&o.image[0].isDataTexture,m=[];for(let e=0;e<6;e++)!f&&!p?m[e]=h(o.image[e],!0,i.maxCubemapSize):m[e]=p?o.image[e].image:o.image[e],m[e]=ye(o,m[e]);let y=m[0],x=a.convert(o.format,o.colorSpace),S=a.convert(o.type),C=v(o.internalFormat,x,S,o.colorSpace),w=o.isVideoTexture!==!0,T=u.__version===void 0||c===!0,E=l.dataReady,D=b(o,y);ie(e.TEXTURE_CUBE_MAP,o);let O;if(f){w&&T&&n.texStorage2D(e.TEXTURE_CUBE_MAP,D,C,y.width,y.height);for(let t=0;t<6;t++){O=m[t].mipmaps;for(let r=0;r<O.length;r++){let i=O[r];o.format===Ke?w?E&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,0,0,i.width,i.height,x,S,i.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,C,i.width,i.height,0,x,S,i.data):x===null?console.warn(`THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()`):w?E&&n.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,0,0,i.width,i.height,x,i.data):n.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,C,i.width,i.height,0,i.data)}}}else{if(O=o.mipmaps,w&&T){O.length>0&&D++;let t=F(m[0]);n.texStorage2D(e.TEXTURE_CUBE_MAP,D,C,t.width,t.height)}for(let t=0;t<6;t++)if(p){w?E&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,0,0,m[t].width,m[t].height,x,S,m[t].data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,C,m[t].width,m[t].height,0,x,S,m[t].data);for(let r=0;r<O.length;r++){let i=O[r].image[t].image;w?E&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,0,0,i.width,i.height,x,S,i.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,C,i.width,i.height,0,x,S,i.data)}}else{w?E&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,0,0,x,S,m[t]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,C,x,S,m[t]);for(let r=0;r<O.length;r++){let i=O[r];w?E&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,0,0,x,S,i.image[t]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,C,x,S,i.image[t])}}}g(o)&&_(e.TEXTURE_CUBE_MAP),u.__version=l.version,o.onUpdate&&o.onUpdate(o)}t.__version=o.version}function ce(t,i,o,c,l,u){let d=a.convert(o.format,o.colorSpace),f=a.convert(o.type),p=v(o.internalFormat,d,f,o.colorSpace);if(!r.get(i).__hasExternalTextures){let t=Math.max(1,i.width>>u),r=Math.max(1,i.height>>u);l===e.TEXTURE_3D||l===e.TEXTURE_2D_ARRAY?n.texImage3D(l,u,p,t,r,i.depth,0,d,f,null):n.texImage2D(l,u,p,t,r,0,d,f,null)}n.bindFramebuffer(e.FRAMEBUFFER,t),ve(i)?s.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,c,l,r.get(o).__webglTexture,0,_e(i)):(l===e.TEXTURE_2D||l>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&l<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&e.framebufferTexture2D(e.FRAMEBUFFER,c,l,r.get(o).__webglTexture,u),n.bindFramebuffer(e.FRAMEBUFFER,null)}function le(t,n,r){if(e.bindRenderbuffer(e.RENDERBUFFER,t),n.depthBuffer){let i=n.depthTexture,a=i&&i.isDepthTexture?i.type:null,o=y(n.stencilBuffer,a),c=n.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,l=_e(n);ve(n)?s.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,l,o,n.width,n.height):r?e.renderbufferStorageMultisample(e.RENDERBUFFER,l,o,n.width,n.height):e.renderbufferStorage(e.RENDERBUFFER,o,n.width,n.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,c,e.RENDERBUFFER,t)}else{let t=n.textures;for(let i=0;i<t.length;i++){let o=t[i],c=a.convert(o.format,o.colorSpace),l=a.convert(o.type),u=v(o.internalFormat,c,l,o.colorSpace),d=_e(n);r&&ve(n)===!1?e.renderbufferStorageMultisample(e.RENDERBUFFER,d,u,n.width,n.height):ve(n)?s.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,d,u,n.width,n.height):e.renderbufferStorage(e.RENDERBUFFER,u,n.width,n.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function N(t,i){if(i&&i.isWebGLCubeRenderTarget)throw Error(`Depth Texture with cube render targets is not supported`);if(n.bindFramebuffer(e.FRAMEBUFFER,t),!(i.depthTexture&&i.depthTexture.isDepthTexture))throw Error(`renderTarget.depthTexture must be an instance of THREE.DepthTexture`);(!r.get(i.depthTexture).__webglTexture||i.depthTexture.image.width!==i.width||i.depthTexture.image.height!==i.height)&&(i.depthTexture.image.width=i.width,i.depthTexture.image.height=i.height,i.depthTexture.needsUpdate=!0),A(i.depthTexture,0);let a=r.get(i.depthTexture).__webglTexture,o=_e(i);if(i.depthTexture.format===Ye)ve(i)?s.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,e.DEPTH_ATTACHMENT,e.TEXTURE_2D,a,0,o):e.framebufferTexture2D(e.FRAMEBUFFER,e.DEPTH_ATTACHMENT,e.TEXTURE_2D,a,0);else if(i.depthTexture.format===Xe)ve(i)?s.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,e.DEPTH_STENCIL_ATTACHMENT,e.TEXTURE_2D,a,0,o):e.framebufferTexture2D(e.FRAMEBUFFER,e.DEPTH_STENCIL_ATTACHMENT,e.TEXTURE_2D,a,0);else throw Error(`Unknown depthTexture format`)}function ue(t){let i=r.get(t),a=t.isWebGLCubeRenderTarget===!0;if(i.__boundDepthTexture!==t.depthTexture){let e=t.depthTexture;if(i.__depthDisposeCallback&&i.__depthDisposeCallback(),e){let t=()=>{delete i.__boundDepthTexture,delete i.__depthDisposeCallback,e.removeEventListener(`dispose`,t)};e.addEventListener(`dispose`,t),i.__depthDisposeCallback=t}i.__boundDepthTexture=e}if(t.depthTexture&&!i.__autoAllocateDepthBuffer){if(a)throw Error(`target.depthTexture not supported in Cube render targets`);N(i.__webglFramebuffer,t)}else if(a){i.__webglDepthbuffer=[];for(let r=0;r<6;r++)if(n.bindFramebuffer(e.FRAMEBUFFER,i.__webglFramebuffer[r]),i.__webglDepthbuffer[r]===void 0)i.__webglDepthbuffer[r]=e.createRenderbuffer(),le(i.__webglDepthbuffer[r],t,!1);else{let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,a=i.__webglDepthbuffer[r];e.bindRenderbuffer(e.RENDERBUFFER,a),e.framebufferRenderbuffer(e.FRAMEBUFFER,n,e.RENDERBUFFER,a)}}else if(n.bindFramebuffer(e.FRAMEBUFFER,i.__webglFramebuffer),i.__webglDepthbuffer===void 0)i.__webglDepthbuffer=e.createRenderbuffer(),le(i.__webglDepthbuffer,t,!1);else{let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,r=i.__webglDepthbuffer;e.bindRenderbuffer(e.RENDERBUFFER,r),e.framebufferRenderbuffer(e.FRAMEBUFFER,n,e.RENDERBUFFER,r)}n.bindFramebuffer(e.FRAMEBUFFER,null)}function de(t,n,i){let a=r.get(t);n!==void 0&&ce(a.__webglFramebuffer,t,t.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0),i!==void 0&&ue(t)}function fe(t){let i=t.texture,s=r.get(t),c=r.get(i);t.addEventListener(`dispose`,S);let l=t.textures,u=t.isWebGLCubeRenderTarget===!0,d=l.length>1;if(d||(c.__webglTexture===void 0&&(c.__webglTexture=e.createTexture()),c.__version=i.version,o.memory.textures++),u){s.__webglFramebuffer=[];for(let t=0;t<6;t++)if(i.mipmaps&&i.mipmaps.length>0){s.__webglFramebuffer[t]=[];for(let n=0;n<i.mipmaps.length;n++)s.__webglFramebuffer[t][n]=e.createFramebuffer()}else s.__webglFramebuffer[t]=e.createFramebuffer()}else{if(i.mipmaps&&i.mipmaps.length>0){s.__webglFramebuffer=[];for(let t=0;t<i.mipmaps.length;t++)s.__webglFramebuffer[t]=e.createFramebuffer()}else s.__webglFramebuffer=e.createFramebuffer();if(d)for(let t=0,n=l.length;t<n;t++){let n=r.get(l[t]);n.__webglTexture===void 0&&(n.__webglTexture=e.createTexture(),o.memory.textures++)}if(t.samples>0&&ve(t)===!1){s.__webglMultisampledFramebuffer=e.createFramebuffer(),s.__webglColorRenderbuffer=[],n.bindFramebuffer(e.FRAMEBUFFER,s.__webglMultisampledFramebuffer);for(let n=0;n<l.length;n++){let r=l[n];s.__webglColorRenderbuffer[n]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,s.__webglColorRenderbuffer[n]);let i=a.convert(r.format,r.colorSpace),o=a.convert(r.type),c=v(r.internalFormat,i,o,r.colorSpace,t.isXRRenderTarget===!0),u=_e(t);e.renderbufferStorageMultisample(e.RENDERBUFFER,u,c,t.width,t.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+n,e.RENDERBUFFER,s.__webglColorRenderbuffer[n])}e.bindRenderbuffer(e.RENDERBUFFER,null),t.depthBuffer&&(s.__webglDepthRenderbuffer=e.createRenderbuffer(),le(s.__webglDepthRenderbuffer,t,!0)),n.bindFramebuffer(e.FRAMEBUFFER,null)}}if(u){n.bindTexture(e.TEXTURE_CUBE_MAP,c.__webglTexture),ie(e.TEXTURE_CUBE_MAP,i);for(let n=0;n<6;n++)if(i.mipmaps&&i.mipmaps.length>0)for(let r=0;r<i.mipmaps.length;r++)ce(s.__webglFramebuffer[n][r],t,i,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+n,r);else ce(s.__webglFramebuffer[n],t,i,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+n,0);g(i)&&_(e.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(d){for(let i=0,a=l.length;i<a;i++){let a=l[i],o=r.get(a);n.bindTexture(e.TEXTURE_2D,o.__webglTexture),ie(e.TEXTURE_2D,a),ce(s.__webglFramebuffer,t,a,e.COLOR_ATTACHMENT0+i,e.TEXTURE_2D,0),g(a)&&_(e.TEXTURE_2D)}n.unbindTexture()}else{let r=e.TEXTURE_2D;if((t.isWebGL3DRenderTarget||t.isWebGLArrayRenderTarget)&&(r=t.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(r,c.__webglTexture),ie(r,i),i.mipmaps&&i.mipmaps.length>0)for(let n=0;n<i.mipmaps.length;n++)ce(s.__webglFramebuffer[n],t,i,e.COLOR_ATTACHMENT0,r,n);else ce(s.__webglFramebuffer,t,i,e.COLOR_ATTACHMENT0,r,0);g(i)&&_(r),n.unbindTexture()}t.depthBuffer&&ue(t)}function pe(t){let i=t.textures;for(let a=0,o=i.length;a<o;a++){let o=i[a];if(g(o)){let i=t.isWebGLCubeRenderTarget?e.TEXTURE_CUBE_MAP:e.TEXTURE_2D,a=r.get(o).__webglTexture;n.bindTexture(i,a),_(i),n.unbindTexture()}}}let me=[],he=[];function ge(t){if(t.samples>0){if(ve(t)===!1){let i=t.textures,a=t.width,o=t.height,s=e.COLOR_BUFFER_BIT,l=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,u=r.get(t),d=i.length>1;if(d)for(let t=0;t<i.length;t++)n.bindFramebuffer(e.FRAMEBUFFER,u.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.RENDERBUFFER,null),n.bindFramebuffer(e.FRAMEBUFFER,u.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.TEXTURE_2D,null,0);n.bindFramebuffer(e.READ_FRAMEBUFFER,u.__webglMultisampledFramebuffer),n.bindFramebuffer(e.DRAW_FRAMEBUFFER,u.__webglFramebuffer);for(let n=0;n<i.length;n++){if(t.resolveDepthBuffer&&(t.depthBuffer&&(s|=e.DEPTH_BUFFER_BIT),t.stencilBuffer&&t.resolveStencilBuffer&&(s|=e.STENCIL_BUFFER_BIT)),d){e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,u.__webglColorRenderbuffer[n]);let t=r.get(i[n]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,t,0)}e.blitFramebuffer(0,0,a,o,0,0,a,o,s,e.NEAREST),c===!0&&(me.length=0,he.length=0,me.push(e.COLOR_ATTACHMENT0+n),t.depthBuffer&&t.resolveDepthBuffer===!1&&(me.push(l),he.push(l),e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,he)),e.invalidateFramebuffer(e.READ_FRAMEBUFFER,me))}if(n.bindFramebuffer(e.READ_FRAMEBUFFER,null),n.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),d)for(let t=0;t<i.length;t++){n.bindFramebuffer(e.FRAMEBUFFER,u.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.RENDERBUFFER,u.__webglColorRenderbuffer[t]);let a=r.get(i[t]).__webglTexture;n.bindFramebuffer(e.FRAMEBUFFER,u.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.TEXTURE_2D,a,0)}n.bindFramebuffer(e.DRAW_FRAMEBUFFER,u.__webglMultisampledFramebuffer)}else if(t.depthBuffer&&t.resolveDepthBuffer===!1&&c){let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[n])}}}function _e(e){return Math.min(i.maxSamples,e.samples)}function ve(e){let n=r.get(e);return e.samples>0&&t.has(`WEBGL_multisampled_render_to_texture`)===!0&&n.__useRenderToTexture!==!1}function P(e){let t=o.render.frame;u.get(e)!==t&&(u.set(e,t),e.update())}function ye(e,t){let n=e.colorSpace,r=e.format,i=e.type;return e.isCompressedTexture===!0||e.isVideoTexture===!0||n!==Bt&&n!==Rt&&(U.getTransfer(n)===Wt?(r!==Ke||i!==Me)&&console.warn(`THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.`):console.error(`THREE.WebGLTextures: Unsupported texture color space:`,n)),t}function F(e){return typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement?(l.width=e.naturalWidth||e.width,l.height=e.naturalHeight||e.height):typeof VideoFrame<`u`&&e instanceof VideoFrame?(l.width=e.displayWidth,l.height=e.displayHeight):(l.width=e.width,l.height=e.height),l}this.allocateTextureUnit=O,this.resetTextureUnits=D,this.setTexture2D=A,this.setTexture2DArray=j,this.setTexture3D=ee,this.setTextureCube=te,this.rebindTextures=de,this.setupRenderTarget=fe,this.updateRenderTargetMipmap=pe,this.updateMultisampleRenderTarget=ge,this.setupDepthRenderbuffer=ue,this.setupFrameBufferTexture=ce,this.useMultisampledRTT=ve}function pc(e,t){function n(n,r=Rt){let i,a=U.getTransfer(r);if(n===Me)return e.UNSIGNED_BYTE;if(n===Be)return e.UNSIGNED_SHORT_4_4_4_4;if(n===Ve)return e.UNSIGNED_SHORT_5_5_5_1;if(n===Ue)return e.UNSIGNED_INT_5_9_9_9_REV;if(n===Ne)return e.BYTE;if(n===Pe)return e.SHORT;if(n===Fe)return e.UNSIGNED_SHORT;if(n===Ie)return e.INT;if(n===Le)return e.UNSIGNED_INT;if(n===Re)return e.FLOAT;if(n===ze)return e.HALF_FLOAT;if(n===We)return e.ALPHA;if(n===Ge)return e.RGB;if(n===Ke)return e.RGBA;if(n===qe)return e.LUMINANCE;if(n===Je)return e.LUMINANCE_ALPHA;if(n===Ye)return e.DEPTH_COMPONENT;if(n===Xe)return e.DEPTH_STENCIL;if(n===Ze)return e.RED;if(n===Qe)return e.RED_INTEGER;if(n===$e)return e.RG;if(n===et)return e.RG_INTEGER;if(n===tt)return e.RGBA_INTEGER;if(n===nt||n===rt||n===it||n===at){if(a===Wt){if(i=t.get(`WEBGL_compressed_texture_s3tc_srgb`),i!==null){if(n===nt)return i.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===rt)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===it)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===at)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null}else if(i=t.get(`WEBGL_compressed_texture_s3tc`),i!==null){if(n===nt)return i.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===rt)return i.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===it)return i.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===at)return i.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null}if(n===ot||n===st||n===ct||n===lt){if(i=t.get(`WEBGL_compressed_texture_pvrtc`),i!==null){if(n===ot)return i.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===st)return i.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===ct)return i.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===lt)return i.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null}if(n===ut||n===dt||n===ft){if(i=t.get(`WEBGL_compressed_texture_etc`),i!==null){if(n===ut||n===dt)return a===Wt?i.COMPRESSED_SRGB8_ETC2:i.COMPRESSED_RGB8_ETC2;if(n===ft)return a===Wt?i.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:i.COMPRESSED_RGBA8_ETC2_EAC}else return null}if(n===pt||n===mt||n===ht||n===gt||n===_t||n===vt||n===yt||n===bt||n===xt||n===St||n===Ct||n===wt||n===Tt||n===Et){if(i=t.get(`WEBGL_compressed_texture_astc`),i!==null){if(n===pt)return a===Wt?i.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:i.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===mt)return a===Wt?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:i.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===ht)return a===Wt?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:i.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===gt)return a===Wt?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:i.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===_t)return a===Wt?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:i.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===vt)return a===Wt?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:i.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===yt)return a===Wt?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:i.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===bt)return a===Wt?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:i.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===xt)return a===Wt?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:i.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===St)return a===Wt?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:i.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Ct)return a===Wt?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:i.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===wt)return a===Wt?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:i.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Tt)return a===Wt?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:i.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Et)return a===Wt?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:i.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null}if(n===Dt||n===Ot||n===kt){if(i=t.get(`EXT_texture_compression_bptc`),i!==null){if(n===Dt)return a===Wt?i.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:i.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Ot)return i.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===kt)return i.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null}if(n===At||n===jt||n===Mt||n===Nt){if(i=t.get(`EXT_texture_compression_rgtc`),i!==null){if(n===Dt)return i.COMPRESSED_RED_RGTC1_EXT;if(n===jt)return i.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Mt)return i.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Nt)return i.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null}return n===He?e.UNSIGNED_INT_24_8:e[n]===void 0?null:e[n]}return{convert:n}}var mc=class extends na{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},hc=class extends Jr{constructor(){super(),this.isGroup=!0,this.type=`Group`}},gc={type:`move`},_c=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new hc,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new hc,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new W,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new W),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new hc,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new W,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new W),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:`connected`,data:e}),this}disconnect(e){return this.dispatchEvent({type:`disconnected`,data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,i=null,a=null,o=this._targetRay,s=this._grip,c=this._hand;if(e&&t.session.visibilityState!==`visible-blurred`){if(c&&e.hand){a=!0;for(let r of e.hand.values()){let e=t.getJointPose(r,n),i=this._getHandJoint(c,r);e!==null&&(i.matrix.fromArray(e.transform.matrix),i.matrix.decompose(i.position,i.rotation,i.scale),i.matrixWorldNeedsUpdate=!0,i.jointRadius=e.radius),i.visible=e!==null}let r=c.joints[`index-finger-tip`],i=c.joints[`thumb-tip`],o=r.position.distanceTo(i.position);c.inputState.pinching&&o>.025?(c.inputState.pinching=!1,this.dispatchEvent({type:`pinchend`,handedness:e.handedness,target:this})):!c.inputState.pinching&&o<=.015&&(c.inputState.pinching=!0,this.dispatchEvent({type:`pinchstart`,handedness:e.handedness,target:this}))}else s!==null&&e.gripSpace&&(i=t.getPose(e.gripSpace,n),i!==null&&(s.matrix.fromArray(i.transform.matrix),s.matrix.decompose(s.position,s.rotation,s.scale),s.matrixWorldNeedsUpdate=!0,i.linearVelocity?(s.hasLinearVelocity=!0,s.linearVelocity.copy(i.linearVelocity)):s.hasLinearVelocity=!1,i.angularVelocity?(s.hasAngularVelocity=!0,s.angularVelocity.copy(i.angularVelocity)):s.hasAngularVelocity=!1));o!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&i!==null&&(r=i),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(gc)))}return o!==null&&(o.visible=r!==null),s!==null&&(s.visible=i!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new hc;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},vc=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,yc=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,bc=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){let r=new zn,i=e.properties.get(r);i.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new Zi({vertexShader:vc,fragmentShader:yc,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new q(new _a(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},xc=class extends cn{constructor(e,t){super();let n=this,r=null,i=1,a=null,o=`local-floor`,s=1,c=null,l=null,u=null,d=null,f=null,p=null,m=new bc,h=t.getContextAttributes(),g=null,_=null,v=[],y=[],b=new V,x=null,S=new na;S.layers.enable(1),S.viewport=new Bn;let C=new na;C.layers.enable(2),C.viewport=new Bn;let w=[S,C],T=new mc;T.layers.enable(1),T.layers.enable(2);let E=null,D=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(e){let t=v[e];return t===void 0&&(t=new _c,v[e]=t),t.getTargetRaySpace()},this.getControllerGrip=function(e){let t=v[e];return t===void 0&&(t=new _c,v[e]=t),t.getGripSpace()},this.getHand=function(e){let t=v[e];return t===void 0&&(t=new _c,v[e]=t),t.getHandSpace()};function O(e){let t=y.indexOf(e.inputSource);if(t===-1)return;let n=v[t];n!==void 0&&(n.update(e.inputSource,e.frame,c||a),n.dispatchEvent({type:e.type,data:e.inputSource}))}function k(){r.removeEventListener(`select`,O),r.removeEventListener(`selectstart`,O),r.removeEventListener(`selectend`,O),r.removeEventListener(`squeeze`,O),r.removeEventListener(`squeezestart`,O),r.removeEventListener(`squeezeend`,O),r.removeEventListener(`end`,k),r.removeEventListener(`inputsourceschange`,A);for(let e=0;e<v.length;e++){let t=y[e];t!==null&&(y[e]=null,v[e].disconnect(t))}E=null,D=null,m.reset(),e.setRenderTarget(g),f=null,d=null,u=null,r=null,_=null,ae.stop(),n.isPresenting=!1,e.setPixelRatio(x),e.setSize(b.width,b.height,!1),n.dispatchEvent({type:`sessionend`})}this.setFramebufferScaleFactor=function(e){i=e,n.isPresenting===!0&&console.warn(`THREE.WebXRManager: Cannot change framebuffer scale while presenting.`)},this.setReferenceSpaceType=function(e){o=e,n.isPresenting===!0&&console.warn(`THREE.WebXRManager: Cannot change reference space type while presenting.`)},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(e){c=e},this.getBaseLayer=function(){return d===null?f:d},this.getBinding=function(){return u},this.getFrame=function(){return p},this.getSession=function(){return r},this.setSession=async function(l){if(r=l,r!==null){if(g=e.getRenderTarget(),r.addEventListener(`select`,O),r.addEventListener(`selectstart`,O),r.addEventListener(`selectend`,O),r.addEventListener(`squeeze`,O),r.addEventListener(`squeezestart`,O),r.addEventListener(`squeezeend`,O),r.addEventListener(`end`,k),r.addEventListener(`inputsourceschange`,A),h.xrCompatible!==!0&&await t.makeXRCompatible(),x=e.getPixelRatio(),e.getSize(b),r.renderState.layers===void 0){let n={antialias:h.antialias,alpha:!0,depth:h.depth,stencil:h.stencil,framebufferScaleFactor:i};f=new XRWebGLLayer(r,t,n),r.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),_=new Hn(f.framebufferWidth,f.framebufferHeight,{format:Ke,type:Me,colorSpace:e.outputColorSpace,stencilBuffer:h.stencil})}else{let n=null,a=null,o=null;h.depth&&(o=h.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,n=h.stencil?Xe:Ye,a=h.stencil?He:Le);let s={colorFormat:t.RGBA8,depthFormat:o,scaleFactor:i};u=new XRWebGLBinding(r,t),d=u.createProjectionLayer(s),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),_=new Hn(d.textureWidth,d.textureHeight,{format:Ke,type:Me,depthTexture:new no(d.textureWidth,d.textureHeight,a,void 0,void 0,void 0,void 0,void 0,void 0,n),stencilBuffer:h.stencil,colorSpace:e.outputColorSpace,samples:h.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(s),c=null,a=await r.requestReferenceSpace(o),ae.setContext(r),ae.start(),n.isPresenting=!0,n.dispatchEvent({type:`sessionstart`})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function A(e){for(let t=0;t<e.removed.length;t++){let n=e.removed[t],r=y.indexOf(n);r>=0&&(y[r]=null,v[r].disconnect(n))}for(let t=0;t<e.added.length;t++){let n=e.added[t],r=y.indexOf(n);if(r===-1){for(let e=0;e<v.length;e++)if(e>=y.length){y.push(n),r=e;break}else if(y[e]===null){y[e]=n,r=e;break}if(r===-1)break}let i=v[r];i&&i.connect(n)}}let j=new W,ee=new W;function te(e,t,n){j.setFromMatrixPosition(t.matrixWorld),ee.setFromMatrixPosition(n.matrixWorld);let r=j.distanceTo(ee),i=t.projectionMatrix.elements,a=n.projectionMatrix.elements,o=i[14]/(i[10]-1),s=i[14]/(i[10]+1),c=(i[9]+1)/i[5],l=(i[9]-1)/i[5],u=(i[8]-1)/i[0],d=(a[8]+1)/a[0],f=o*u,p=o*d,m=r/(-u+d),h=m*-u;if(t.matrixWorld.decompose(e.position,e.quaternion,e.scale),e.translateX(h),e.translateZ(m),e.matrixWorld.compose(e.position,e.quaternion,e.scale),e.matrixWorldInverse.copy(e.matrixWorld).invert(),i[10]===-1)e.projectionMatrix.copy(t.projectionMatrix),e.projectionMatrixInverse.copy(t.projectionMatrixInverse);else{let t=o+m,n=s+m,i=f-h,a=p+(r-h),u=c*s/n*t,d=l*s/n*t;e.projectionMatrix.makePerspective(i,a,u,d,t,n),e.projectionMatrixInverse.copy(e.projectionMatrix).invert()}}function ne(e,t){t===null?e.matrixWorld.copy(e.matrix):e.matrixWorld.multiplyMatrices(t.matrixWorld,e.matrix),e.matrixWorldInverse.copy(e.matrixWorld).invert()}this.updateCamera=function(e){if(r===null)return;let t=e.near,n=e.far;m.texture!==null&&(m.depthNear>0&&(t=m.depthNear),m.depthFar>0&&(n=m.depthFar)),T.near=C.near=S.near=t,T.far=C.far=S.far=n,(E!==T.near||D!==T.far)&&(r.updateRenderState({depthNear:T.near,depthFar:T.far}),E=T.near,D=T.far);let i=e.parent,a=T.cameras;ne(T,i);for(let e=0;e<a.length;e++)ne(a[e],i);a.length===2?te(T,S,C):T.projectionMatrix.copy(S.projectionMatrix),re(e,T,i)};function re(e,t,n){n===null?e.matrix.copy(t.matrixWorld):(e.matrix.copy(n.matrixWorld),e.matrix.invert(),e.matrix.multiply(t.matrixWorld)),e.matrix.decompose(e.position,e.quaternion,e.scale),e.updateMatrixWorld(!0),e.projectionMatrix.copy(t.projectionMatrix),e.projectionMatrixInverse.copy(t.projectionMatrixInverse),e.isPerspectiveCamera&&(e.fov=dn*2*Math.atan(1/e.projectionMatrix.elements[5]),e.zoom=1)}this.getCamera=function(){return T},this.getFoveation=function(){if(d!==null||f!==null)return s},this.setFoveation=function(e){s=e,d!==null&&(d.fixedFoveation=e),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=e)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(T)};let M=null;function ie(t,i){if(l=i.getViewerPose(c||a),p=i,l!==null){let t=l.views;f!==null&&(e.setRenderTargetFramebuffer(_,f.framebuffer),e.setRenderTarget(_));let n=!1;t.length!==T.cameras.length&&(T.cameras.length=0,n=!0);for(let r=0;r<t.length;r++){let i=t[r],a=null;if(f!==null)a=f.getViewport(i);else{let t=u.getViewSubImage(d,i);a=t.viewport,r===0&&(e.setRenderTargetTextures(_,t.colorTexture,d.ignoreDepthValues?void 0:t.depthStencilTexture),e.setRenderTarget(_))}let o=w[r];o===void 0&&(o=new na,o.layers.enable(r),o.viewport=new Bn,w[r]=o),o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.projectionMatrix.fromArray(i.projectionMatrix),o.projectionMatrixInverse.copy(o.projectionMatrix).invert(),o.viewport.set(a.x,a.y,a.width,a.height),r===0&&(T.matrix.copy(o.matrix),T.matrix.decompose(T.position,T.quaternion,T.scale)),n===!0&&T.cameras.push(o)}let i=r.enabledFeatures;if(i&&i.includes(`depth-sensing`)){let n=u.getDepthInformation(t[0]);n&&n.isValid&&n.texture&&m.init(e,n,r.renderState)}}for(let e=0;e<v.length;e++){let t=y[e],n=v[e];t!==null&&n!==void 0&&n.update(t,i,c||a)}M&&M(t,i),i.detectedPlanes&&n.dispatchEvent({type:`planesdetected`,data:i}),p=null}let ae=new ha;ae.setAnimationLoop(ie),this.setAnimationLoop=function(e){M=e},this.dispose=function(){}}},Sc=new jr,Cc=new xr;function wc(e,t){function n(e,t){e.matrixAutoUpdate===!0&&e.updateMatrix(),t.value.copy(e.matrix)}function r(t,n){n.color.getRGB(t.fogColor.value,qi(e)),n.isFog?(t.fogNear.value=n.near,t.fogFar.value=n.far):n.isFogExp2&&(t.fogDensity.value=n.density)}function i(e,t,n,r,i){t.isMeshBasicMaterial||t.isMeshLambertMaterial?a(e,t):t.isMeshToonMaterial?(a(e,t),f(e,t)):t.isMeshPhongMaterial?(a(e,t),u(e,t)):t.isMeshStandardMaterial?(a(e,t),p(e,t),t.isMeshPhysicalMaterial&&m(e,t,i)):t.isMeshMatcapMaterial?(a(e,t),h(e,t)):t.isMeshDepthMaterial?a(e,t):t.isMeshDistanceMaterial?(a(e,t),g(e,t)):t.isMeshNormalMaterial?a(e,t):t.isLineBasicMaterial?(o(e,t),t.isLineDashedMaterial&&s(e,t)):t.isPointsMaterial?c(e,t,n,r):t.isSpriteMaterial?l(e,t):t.isShadowMaterial?(e.color.value.copy(t.color),e.opacity.value=t.opacity):t.isShaderMaterial&&(t.uniformsNeedUpdate=!1)}function a(e,r){e.opacity.value=r.opacity,r.color&&e.diffuse.value.copy(r.color),r.emissive&&e.emissive.value.copy(r.emissive).multiplyScalar(r.emissiveIntensity),r.map&&(e.map.value=r.map,n(r.map,e.mapTransform)),r.alphaMap&&(e.alphaMap.value=r.alphaMap,n(r.alphaMap,e.alphaMapTransform)),r.bumpMap&&(e.bumpMap.value=r.bumpMap,n(r.bumpMap,e.bumpMapTransform),e.bumpScale.value=r.bumpScale,r.side===d&&(e.bumpScale.value*=-1)),r.normalMap&&(e.normalMap.value=r.normalMap,n(r.normalMap,e.normalMapTransform),e.normalScale.value.copy(r.normalScale),r.side===d&&e.normalScale.value.negate()),r.displacementMap&&(e.displacementMap.value=r.displacementMap,n(r.displacementMap,e.displacementMapTransform),e.displacementScale.value=r.displacementScale,e.displacementBias.value=r.displacementBias),r.emissiveMap&&(e.emissiveMap.value=r.emissiveMap,n(r.emissiveMap,e.emissiveMapTransform)),r.specularMap&&(e.specularMap.value=r.specularMap,n(r.specularMap,e.specularMapTransform)),r.alphaTest>0&&(e.alphaTest.value=r.alphaTest);let i=t.get(r),a=i.envMap,o=i.envMapRotation;a&&(e.envMap.value=a,Sc.copy(o),Sc.x*=-1,Sc.y*=-1,Sc.z*=-1,a.isCubeTexture&&a.isRenderTargetTexture===!1&&(Sc.y*=-1,Sc.z*=-1),e.envMapRotation.value.setFromMatrix4(Cc.makeRotationFromEuler(Sc)),e.flipEnvMap.value=a.isCubeTexture&&a.isRenderTargetTexture===!1?-1:1,e.reflectivity.value=r.reflectivity,e.ior.value=r.ior,e.refractionRatio.value=r.refractionRatio),r.lightMap&&(e.lightMap.value=r.lightMap,e.lightMapIntensity.value=r.lightMapIntensity,n(r.lightMap,e.lightMapTransform)),r.aoMap&&(e.aoMap.value=r.aoMap,e.aoMapIntensity.value=r.aoMapIntensity,n(r.aoMap,e.aoMapTransform))}function o(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform))}function s(e,t){e.dashSize.value=t.dashSize,e.totalSize.value=t.dashSize+t.gapSize,e.scale.value=t.scale}function c(e,t,r,i){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.size.value=t.size*r,e.scale.value=i*.5,t.map&&(e.map.value=t.map,n(t.map,e.uvTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function l(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.rotation.value=t.rotation,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function u(e,t){e.specular.value.copy(t.specular),e.shininess.value=Math.max(t.shininess,1e-4)}function f(e,t){t.gradientMap&&(e.gradientMap.value=t.gradientMap)}function p(e,t){e.metalness.value=t.metalness,t.metalnessMap&&(e.metalnessMap.value=t.metalnessMap,n(t.metalnessMap,e.metalnessMapTransform)),e.roughness.value=t.roughness,t.roughnessMap&&(e.roughnessMap.value=t.roughnessMap,n(t.roughnessMap,e.roughnessMapTransform)),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)}function m(e,t,r){e.ior.value=t.ior,t.sheen>0&&(e.sheenColor.value.copy(t.sheenColor).multiplyScalar(t.sheen),e.sheenRoughness.value=t.sheenRoughness,t.sheenColorMap&&(e.sheenColorMap.value=t.sheenColorMap,n(t.sheenColorMap,e.sheenColorMapTransform)),t.sheenRoughnessMap&&(e.sheenRoughnessMap.value=t.sheenRoughnessMap,n(t.sheenRoughnessMap,e.sheenRoughnessMapTransform))),t.clearcoat>0&&(e.clearcoat.value=t.clearcoat,e.clearcoatRoughness.value=t.clearcoatRoughness,t.clearcoatMap&&(e.clearcoatMap.value=t.clearcoatMap,n(t.clearcoatMap,e.clearcoatMapTransform)),t.clearcoatRoughnessMap&&(e.clearcoatRoughnessMap.value=t.clearcoatRoughnessMap,n(t.clearcoatRoughnessMap,e.clearcoatRoughnessMapTransform)),t.clearcoatNormalMap&&(e.clearcoatNormalMap.value=t.clearcoatNormalMap,n(t.clearcoatNormalMap,e.clearcoatNormalMapTransform),e.clearcoatNormalScale.value.copy(t.clearcoatNormalScale),t.side===d&&e.clearcoatNormalScale.value.negate())),t.dispersion>0&&(e.dispersion.value=t.dispersion),t.iridescence>0&&(e.iridescence.value=t.iridescence,e.iridescenceIOR.value=t.iridescenceIOR,e.iridescenceThicknessMinimum.value=t.iridescenceThicknessRange[0],e.iridescenceThicknessMaximum.value=t.iridescenceThicknessRange[1],t.iridescenceMap&&(e.iridescenceMap.value=t.iridescenceMap,n(t.iridescenceMap,e.iridescenceMapTransform)),t.iridescenceThicknessMap&&(e.iridescenceThicknessMap.value=t.iridescenceThicknessMap,n(t.iridescenceThicknessMap,e.iridescenceThicknessMapTransform))),t.transmission>0&&(e.transmission.value=t.transmission,e.transmissionSamplerMap.value=r.texture,e.transmissionSamplerSize.value.set(r.width,r.height),t.transmissionMap&&(e.transmissionMap.value=t.transmissionMap,n(t.transmissionMap,e.transmissionMapTransform)),e.thickness.value=t.thickness,t.thicknessMap&&(e.thicknessMap.value=t.thicknessMap,n(t.thicknessMap,e.thicknessMapTransform)),e.attenuationDistance.value=t.attenuationDistance,e.attenuationColor.value.copy(t.attenuationColor)),t.anisotropy>0&&(e.anisotropyVector.value.set(t.anisotropy*Math.cos(t.anisotropyRotation),t.anisotropy*Math.sin(t.anisotropyRotation)),t.anisotropyMap&&(e.anisotropyMap.value=t.anisotropyMap,n(t.anisotropyMap,e.anisotropyMapTransform))),e.specularIntensity.value=t.specularIntensity,e.specularColor.value.copy(t.specularColor),t.specularColorMap&&(e.specularColorMap.value=t.specularColorMap,n(t.specularColorMap,e.specularColorMapTransform)),t.specularIntensityMap&&(e.specularIntensityMap.value=t.specularIntensityMap,n(t.specularIntensityMap,e.specularIntensityMapTransform))}function h(e,t){t.matcap&&(e.matcap.value=t.matcap)}function g(e,n){let r=t.get(n).light;e.referencePosition.value.setFromMatrixPosition(r.matrixWorld),e.nearDistance.value=r.shadow.camera.near,e.farDistance.value=r.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:i}}function Tc(e,t,n,r){let i={},a={},o=[],s=e.getParameter(e.MAX_UNIFORM_BUFFER_BINDINGS);function c(e,t){let n=t.program;r.uniformBlockBinding(e,n)}function l(e,n){let o=i[e.id];o===void 0&&(m(e),o=u(e),i[e.id]=o,e.addEventListener(`dispose`,g));let s=n.program;r.updateUBOMapping(e,s);let c=t.render.frame;a[e.id]!==c&&(f(e),a[e.id]=c)}function u(t){let n=d();t.__bindingPointIndex=n;let r=e.createBuffer(),i=t.__size,a=t.usage;return e.bindBuffer(e.UNIFORM_BUFFER,r),e.bufferData(e.UNIFORM_BUFFER,i,a),e.bindBuffer(e.UNIFORM_BUFFER,null),e.bindBufferBase(e.UNIFORM_BUFFER,n,r),r}function d(){for(let e=0;e<s;e++)if(o.indexOf(e)===-1)return o.push(e),e;return console.error(`THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached.`),0}function f(t){let n=i[t.id],r=t.uniforms,a=t.__cache;e.bindBuffer(e.UNIFORM_BUFFER,n);for(let t=0,n=r.length;t<n;t++){let n=Array.isArray(r[t])?r[t]:[r[t]];for(let r=0,i=n.length;r<i;r++){let i=n[r];if(p(i,t,r,a)===!0){let t=i.__offset,n=Array.isArray(i.value)?i.value:[i.value],r=0;for(let a=0;a<n.length;a++){let o=n[a],s=h(o);typeof o==`number`||typeof o==`boolean`?(i.__data[0]=o,e.bufferSubData(e.UNIFORM_BUFFER,t+r,i.__data)):o.isMatrix3?(i.__data[0]=o.elements[0],i.__data[1]=o.elements[1],i.__data[2]=o.elements[2],i.__data[3]=0,i.__data[4]=o.elements[3],i.__data[5]=o.elements[4],i.__data[6]=o.elements[5],i.__data[7]=0,i.__data[8]=o.elements[6],i.__data[9]=o.elements[7],i.__data[10]=o.elements[8],i.__data[11]=0):(o.toArray(i.__data,r),r+=s.storage/Float32Array.BYTES_PER_ELEMENT)}e.bufferSubData(e.UNIFORM_BUFFER,t,i.__data)}}}e.bindBuffer(e.UNIFORM_BUFFER,null)}function p(e,t,n,r){let i=e.value,a=t+`_`+n;if(r[a]===void 0)return r[a]=typeof i==`number`||typeof i==`boolean`?i:i.clone(),!0;{let e=r[a];if(typeof i==`number`||typeof i==`boolean`){if(e!==i)return r[a]=i,!0}else if(e.equals(i)===!1)return e.copy(i),!0}return!1}function m(e){let t=e.uniforms,n=0;for(let e=0,r=t.length;e<r;e++){let r=Array.isArray(t[e])?t[e]:[t[e]];for(let e=0,t=r.length;e<t;e++){let t=r[e],i=Array.isArray(t.value)?t.value:[t.value];for(let e=0,r=i.length;e<r;e++){let r=i[e],a=h(r),o=n%16,s=o%a.boundary,c=o+s;n+=s,c!==0&&16-c<a.storage&&(n+=16-c),t.__data=new Float32Array(a.storage/Float32Array.BYTES_PER_ELEMENT),t.__offset=n,n+=a.storage}}}let r=n%16;return r>0&&(n+=16-r),e.__size=n,e.__cache={},this}function h(e){let t={boundary:0,storage:0};return typeof e==`number`||typeof e==`boolean`?(t.boundary=4,t.storage=4):e.isVector2?(t.boundary=8,t.storage=8):e.isVector3||e.isColor?(t.boundary=16,t.storage=12):e.isVector4?(t.boundary=16,t.storage=16):e.isMatrix3?(t.boundary=48,t.storage=48):e.isMatrix4?(t.boundary=64,t.storage=64):e.isTexture?console.warn(`THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group.`):console.warn(`THREE.WebGLRenderer: Unsupported uniform value type.`,e),t}function g(t){let n=t.target;n.removeEventListener(`dispose`,g);let r=o.indexOf(n.__bindingPointIndex);o.splice(r,1),e.deleteBuffer(i[n.id]),delete i[n.id],delete a[n.id]}function _(){for(let t in i)e.deleteBuffer(i[t]);o=[],i={},a={}}return{bind:c,update:l,dispose:_}}var Ec=class{constructor(e={}){let{canvas:t=xn(),context:n=null,depth:i=!0,stencil:a=!1,alpha:o=!1,antialias:s=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:p=`default`,failIfMajorPerformanceCaveat:m=!1}=e;this.isWebGLRenderer=!0;let h;if(n!==null){if(typeof WebGLRenderingContext<`u`&&n instanceof WebGLRenderingContext)throw Error(`THREE.WebGLRenderer: WebGL 1 is not supported since r163.`);h=n.getContextAttributes().alpha}else h=o;let g=new Uint32Array(4),_=new Int32Array(4),v=null,y=null,b=[],x=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=zt,this.toneMapping=ge,this.toneMappingExposure=1;let S=this,C=!1,w=0,T=0,E=null,D=-1,O=null,k=new Bn,A=new Bn,j=null,ee=new G(0),te=0,ne=t.width,re=t.height,M=1,ie=null,ae=null,oe=new Bn(0,0,ne,re),se=new Bn(0,0,ne,re),ce=!1,le=new ma,N=!1,ue=!1,de=new xr,fe=new xr,pe=new W,me=new Bn,he={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},_e=!1;function ve(){return E===null?M:1}let P=n;function ye(e,n){return t.getContext(e,n)}try{let e={alpha:!0,depth:i,stencil:a,antialias:s,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:p,failIfMajorPerformanceCaveat:m};if(`setAttribute`in t&&t.setAttribute(`data-engine`,`three.js r${r}`),t.addEventListener(`webglcontextlost`,Je,!1),t.addEventListener(`webglcontextrestored`,Ye,!1),t.addEventListener(`webglcontextcreationerror`,Xe,!1),P===null){let t=`webgl2`;if(P=ye(t,e),P===null)throw ye(t)?Error(`Error creating WebGL context with your selected attributes.`):Error(`Error creating WebGL context.`)}}catch(e){throw console.error(`THREE.WebGLRenderer: `+e.message),e}let F,I,L,be,R,z,xe,Se,B,Ce,we,Te,Ee,De,Oe,ke,Ae,Ne,Pe,Ie,Re,Ue,We,Ge;function Ke(){F=new Xa(P),F.init(),Ue=new pc(P,F),I=new Ta(P,F,e,Ue),L=new lc(P),I.reverseDepthBuffer&&L.buffers.depth.setReversed(!0),be=new $a(P),R=new Gs,z=new fc(P,F,L,R,I,Ue,be),xe=new Da(S),Se=new Ya(S),B=new ga(P),We=new Ca(P,B),Ce=new Za(P,B,be,We),we=new to(P,Ce,B,be),Pe=new eo(P,I,z),ke=new Ea(R),Te=new Ws(S,xe,Se,F,I,We,ke),Ee=new wc(S,R),De=new Ys,Oe=new nc(F),Ne=new Sa(S,xe,Se,L,we,h,c),Ae=new sc(S,we,I),Ge=new Tc(P,be,I,L),Ie=new wa(P,F,be),Re=new Qa(P,F,be),be.programs=Te.programs,S.capabilities=I,S.extensions=F,S.properties=R,S.renderLists=De,S.shadowMap=Ae,S.state=L,S.info=be}Ke();let qe=new xc(S,P);this.xr=qe,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){let e=F.get(`WEBGL_lose_context`);e&&e.loseContext()},this.forceContextRestore=function(){let e=F.get(`WEBGL_lose_context`);e&&e.restoreContext()},this.getPixelRatio=function(){return M},this.setPixelRatio=function(e){e!==void 0&&(M=e,this.setSize(ne,re,!1))},this.getSize=function(e){return e.set(ne,re)},this.setSize=function(e,n,r=!0){if(qe.isPresenting){console.warn(`THREE.WebGLRenderer: Can't change size while VR device is presenting.`);return}ne=e,re=n,t.width=Math.floor(e*M),t.height=Math.floor(n*M),r===!0&&(t.style.width=e+`px`,t.style.height=n+`px`),this.setViewport(0,0,e,n)},this.getDrawingBufferSize=function(e){return e.set(ne*M,re*M).floor()},this.setDrawingBufferSize=function(e,n,r){ne=e,re=n,M=r,t.width=Math.floor(e*r),t.height=Math.floor(n*r),this.setViewport(0,0,e,n)},this.getCurrentViewport=function(e){return e.copy(k)},this.getViewport=function(e){return e.copy(oe)},this.setViewport=function(e,t,n,r){e.isVector4?oe.set(e.x,e.y,e.z,e.w):oe.set(e,t,n,r),L.viewport(k.copy(oe).multiplyScalar(M).round())},this.getScissor=function(e){return e.copy(se)},this.setScissor=function(e,t,n,r){e.isVector4?se.set(e.x,e.y,e.z,e.w):se.set(e,t,n,r),L.scissor(A.copy(se).multiplyScalar(M).round())},this.getScissorTest=function(){return ce},this.setScissorTest=function(e){L.setScissorTest(ce=e)},this.setOpaqueSort=function(e){ie=e},this.setTransparentSort=function(e){ae=e},this.getClearColor=function(e){return e.copy(Ne.getClearColor())},this.setClearColor=function(){Ne.setClearColor.apply(Ne,arguments)},this.getClearAlpha=function(){return Ne.getClearAlpha()},this.setClearAlpha=function(){Ne.setClearAlpha.apply(Ne,arguments)},this.clear=function(e=!0,t=!0,n=!0){let r=0;if(e){let e=!1;if(E!==null){let t=E.texture.format;e=t===tt||t===et||t===Qe}if(e){let e=E.texture.type,t=e===Me||e===Le||e===Fe||e===He||e===Be||e===Ve,n=Ne.getClearColor(),r=Ne.getClearAlpha(),i=n.r,a=n.g,o=n.b;t?(g[0]=i,g[1]=a,g[2]=o,g[3]=r,P.clearBufferuiv(P.COLOR,0,g)):(_[0]=i,_[1]=a,_[2]=o,_[3]=r,P.clearBufferiv(P.COLOR,0,_))}else r|=P.COLOR_BUFFER_BIT}t&&(r|=P.DEPTH_BUFFER_BIT,P.clearDepth(+!this.capabilities.reverseDepthBuffer)),n&&(r|=P.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),P.clear(r)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener(`webglcontextlost`,Je,!1),t.removeEventListener(`webglcontextrestored`,Ye,!1),t.removeEventListener(`webglcontextcreationerror`,Xe,!1),De.dispose(),Oe.dispose(),R.dispose(),xe.dispose(),Se.dispose(),we.dispose(),We.dispose(),Ge.dispose(),Te.dispose(),qe.dispose(),qe.removeEventListener(`sessionstart`,ot),qe.removeEventListener(`sessionend`,st),ct.stop()};function Je(e){e.preventDefault(),console.log(`THREE.WebGLRenderer: Context Lost.`),C=!0}function Ye(){console.log(`THREE.WebGLRenderer: Context Restored.`),C=!1;let e=be.autoReset,t=Ae.enabled,n=Ae.autoUpdate,r=Ae.needsUpdate,i=Ae.type;Ke(),be.autoReset=e,Ae.enabled=t,Ae.autoUpdate=n,Ae.needsUpdate=r,Ae.type=i}function Xe(e){console.error(`THREE.WebGLRenderer: A WebGL context could not be created. Reason: `,e.statusMessage)}function Ze(e){let t=e.target;t.removeEventListener(`dispose`,Ze),$e(t)}function $e(e){nt(e),R.remove(e)}function nt(e){let t=R.get(e).programs;t!==void 0&&(t.forEach(function(e){Te.releaseProgram(e)}),e.isShaderMaterial&&Te.releaseShaderCache(e))}this.renderBufferDirect=function(e,t,n,r,i,a){t===null&&(t=he);let o=i.isMesh&&i.matrixWorld.determinant()<0,s=_t(e,t,n,r,i);L.setMaterial(r,o);let c=n.index,l=1;if(r.wireframe===!0){if(c=Ce.getWireframeAttribute(n),c===void 0)return;l=2}let u=n.drawRange,d=n.attributes.position,f=u.start*l,p=(u.start+u.count)*l;a!==null&&(f=Math.max(f,a.start*l),p=Math.min(p,(a.start+a.count)*l)),c===null?d!=null&&(f=Math.max(f,0),p=Math.min(p,d.count)):(f=Math.max(f,0),p=Math.min(p,c.count));let m=p-f;if(m<0||m===1/0)return;We.setup(i,r,s,n,c);let h,g=Ie;if(c!==null&&(h=B.get(c),g=Re,g.setIndex(h)),i.isMesh)r.wireframe===!0?(L.setLineWidth(r.wireframeLinewidth*ve()),g.setMode(P.LINES)):g.setMode(P.TRIANGLES);else if(i.isLine){let e=r.linewidth;e===void 0&&(e=1),L.setLineWidth(e*ve()),i.isLineSegments?g.setMode(P.LINES):i.isLineLoop?g.setMode(P.LINE_LOOP):g.setMode(P.LINE_STRIP)}else i.isPoints?g.setMode(P.POINTS):i.isSprite&&g.setMode(P.TRIANGLES);if(i.isBatchedMesh){if(i._multiDrawInstances!==null)g.renderMultiDrawInstances(i._multiDrawStarts,i._multiDrawCounts,i._multiDrawCount,i._multiDrawInstances);else if(F.get(`WEBGL_multi_draw`))g.renderMultiDraw(i._multiDrawStarts,i._multiDrawCounts,i._multiDrawCount);else{let e=i._multiDrawStarts,t=i._multiDrawCounts,n=i._multiDrawCount,a=c?B.get(c).bytesPerElement:1,o=R.get(r).currentProgram.getUniforms();for(let r=0;r<n;r++)o.setValue(P,`_gl_DrawID`,r),g.render(e[r]/a,t[r])}}else if(i.isInstancedMesh)g.renderInstances(f,m,i.count);else if(n.isInstancedBufferGeometry){let e=n._maxInstanceCount===void 0?1/0:n._maxInstanceCount,t=Math.min(n.instanceCount,e);g.renderInstances(f,m,t)}else g.render(f,m)};function rt(e,t,n){e.transparent===!0&&e.side===f&&e.forceSinglePass===!1?(e.side=d,e.needsUpdate=!0,mt(e,t,n),e.side=u,e.needsUpdate=!0,mt(e,t,n),e.side=f):mt(e,t,n)}this.compile=function(e,t,n=null){n===null&&(n=e),y=Oe.get(n),y.init(t),x.push(y),n.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(y.pushLight(e),e.castShadow&&y.pushShadow(e))}),e!==n&&e.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(y.pushLight(e),e.castShadow&&y.pushShadow(e))}),y.setupLights();let r=new Set;return e.traverse(function(e){if(!(e.isMesh||e.isPoints||e.isLine||e.isSprite))return;let t=e.material;if(t){if(Array.isArray(t))for(let i=0;i<t.length;i++){let a=t[i];rt(a,n,e),r.add(a)}else rt(t,n,e),r.add(t)}}),x.pop(),y=null,r},this.compileAsync=function(e,t,n=null){let r=this.compile(e,t,n);return new Promise(t=>{function n(){if(r.forEach(function(e){R.get(e).currentProgram.isReady()&&r.delete(e)}),r.size===0){t(e);return}setTimeout(n,10)}F.get(`KHR_parallel_shader_compile`)===null?setTimeout(n,10):n()})};let it=null;function at(e){it&&it(e)}function ot(){ct.stop()}function st(){ct.start()}let ct=new ha;ct.setAnimationLoop(at),typeof self<`u`&&ct.setContext(self),this.setAnimationLoop=function(e){it=e,qe.setAnimationLoop(e),e===null?ct.stop():ct.start()},qe.addEventListener(`sessionstart`,ot),qe.addEventListener(`sessionend`,st),this.render=function(e,t){if(t!==void 0&&t.isCamera!==!0){console.error(`THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.`);return}if(C===!0)return;if(e.matrixWorldAutoUpdate===!0&&e.updateMatrixWorld(),t.parent===null&&t.matrixWorldAutoUpdate===!0&&t.updateMatrixWorld(),qe.enabled===!0&&qe.isPresenting===!0&&(qe.cameraAutoUpdate===!0&&qe.updateCamera(t),t=qe.getCamera()),e.isScene===!0&&e.onBeforeRender(S,e,t,E),y=Oe.get(e,x.length),y.init(t),x.push(y),fe.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),le.setFromProjectionMatrix(fe),ue=this.localClippingEnabled,N=ke.init(this.clippingPlanes,ue),v=De.get(e,b.length),v.init(),b.push(v),qe.enabled===!0&&qe.isPresenting===!0){let e=S.xr.getDepthSensingMesh();e!==null&&lt(e,t,-1/0,S.sortObjects)}lt(e,t,0,S.sortObjects),v.finish(),S.sortObjects===!0&&v.sort(ie,ae),_e=qe.enabled===!1||qe.isPresenting===!1||qe.hasDepthSensing()===!1,_e&&Ne.addToRenderList(v,e),this.info.render.frame++,N===!0&&ke.beginShadows();let n=y.state.shadowsArray;Ae.render(n,e,t),N===!0&&ke.endShadows(),this.info.autoReset===!0&&this.info.reset();let r=v.opaque,i=v.transmissive;if(y.setupLights(),t.isArrayCamera){let n=t.cameras;if(i.length>0)for(let t=0,a=n.length;t<a;t++){let a=n[t];dt(r,i,e,a)}_e&&Ne.render(e);for(let t=0,r=n.length;t<r;t++){let r=n[t];ut(v,e,r,r.viewport)}}else i.length>0&&dt(r,i,e,t),_e&&Ne.render(e),ut(v,e,t);E!==null&&(z.updateMultisampleRenderTarget(E),z.updateRenderTargetMipmap(E)),e.isScene===!0&&e.onAfterRender(S,e,t),We.resetDefaultState(),D=-1,O=null,x.pop(),x.length>0?(y=x[x.length-1],N===!0&&ke.setGlobalState(S.clippingPlanes,y.state.camera)):y=null,b.pop(),v=b.length>0?b[b.length-1]:null};function lt(e,t,n,r){if(e.visible===!1)return;if(e.layers.test(t.layers)){if(e.isGroup)n=e.renderOrder;else if(e.isLOD)e.autoUpdate===!0&&e.update(t);else if(e.isLight)y.pushLight(e),e.castShadow&&y.pushShadow(e);else if(e.isSprite){if(!e.frustumCulled||le.intersectsSprite(e)){r&&me.setFromMatrixPosition(e.matrixWorld).applyMatrix4(fe);let t=we.update(e),i=e.material;i.visible&&v.push(e,t,i,n,me.z,null)}}else if((e.isMesh||e.isLine||e.isPoints)&&(!e.frustumCulled||le.intersectsObject(e))){let t=we.update(e),i=e.material;if(r&&(e.boundingSphere===void 0?(t.boundingSphere===null&&t.computeBoundingSphere(),me.copy(t.boundingSphere.center)):(e.boundingSphere===null&&e.computeBoundingSphere(),me.copy(e.boundingSphere.center)),me.applyMatrix4(e.matrixWorld).applyMatrix4(fe)),Array.isArray(i)){let r=t.groups;for(let a=0,o=r.length;a<o;a++){let o=r[a],s=i[o.materialIndex];s&&s.visible&&v.push(e,t,s,n,me.z,o)}}else i.visible&&v.push(e,t,i,n,me.z,null)}}let i=e.children;for(let e=0,a=i.length;e<a;e++)lt(i[e],t,n,r)}function ut(e,t,n,r){let i=e.opaque,a=e.transmissive,o=e.transparent;y.setupLightsView(n),N===!0&&ke.setGlobalState(S.clippingPlanes,n),r&&L.viewport(k.copy(r)),i.length>0&&ft(i,t,n),a.length>0&&ft(a,t,n),o.length>0&&ft(o,t,n),L.buffers.depth.setTest(!0),L.buffers.depth.setMask(!0),L.buffers.color.setMask(!0),L.setPolygonOffset(!1)}function dt(e,t,n,r){if((n.isScene===!0?n.overrideMaterial:null)!==null)return;y.state.transmissionRenderTarget[r.id]===void 0&&(y.state.transmissionRenderTarget[r.id]=new Hn(1,1,{generateMipmaps:!0,type:F.has(`EXT_color_buffer_half_float`)||F.has(`EXT_color_buffer_float`)?ze:Me,minFilter:je,samples:4,stencilBuffer:a,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:U.workingColorSpace}));let i=y.state.transmissionRenderTarget[r.id],o=r.viewport||k;i.setSize(o.z,o.w);let s=S.getRenderTarget();S.setRenderTarget(i),S.getClearColor(ee),te=S.getClearAlpha(),te<1&&S.setClearColor(16777215,.5),S.clear(),_e&&Ne.render(n);let c=S.toneMapping;S.toneMapping=ge;let l=r.viewport;if(r.viewport!==void 0&&(r.viewport=void 0),y.setupLightsView(r),N===!0&&ke.setGlobalState(S.clippingPlanes,r),ft(e,n,r),z.updateMultisampleRenderTarget(i),z.updateRenderTargetMipmap(i),F.has(`WEBGL_multisampled_render_to_texture`)===!1){let e=!1;for(let i=0,a=t.length;i<a;i++){let a=t[i],o=a.object,s=a.geometry,c=a.material,l=a.group;if(c.side===f&&o.layers.test(r.layers)){let t=c.side;c.side=d,c.needsUpdate=!0,pt(o,n,r,s,c,l),c.side=t,c.needsUpdate=!0,e=!0}}e===!0&&(z.updateMultisampleRenderTarget(i),z.updateRenderTargetMipmap(i))}S.setRenderTarget(s),S.setClearColor(ee,te),l!==void 0&&(r.viewport=l),S.toneMapping=c}function ft(e,t,n){let r=t.isScene===!0?t.overrideMaterial:null;for(let i=0,a=e.length;i<a;i++){let a=e[i],o=a.object,s=a.geometry,c=r===null?a.material:r,l=a.group;o.layers.test(n.layers)&&pt(o,t,n,s,c,l)}}function pt(e,t,n,r,i,a){e.onBeforeRender(S,t,n,r,i,a),e.modelViewMatrix.multiplyMatrices(n.matrixWorldInverse,e.matrixWorld),e.normalMatrix.getNormalMatrix(e.modelViewMatrix),i.onBeforeRender(S,t,n,r,e,a),i.transparent===!0&&i.side===f&&i.forceSinglePass===!1?(i.side=d,i.needsUpdate=!0,S.renderBufferDirect(n,t,r,i,e,a),i.side=u,i.needsUpdate=!0,S.renderBufferDirect(n,t,r,i,e,a),i.side=f):S.renderBufferDirect(n,t,r,i,e,a),e.onAfterRender(S,t,n,r,i,a)}function mt(e,t,n){t.isScene!==!0&&(t=he);let r=R.get(e),i=y.state.lights,a=y.state.shadowsArray,o=i.state.version,s=Te.getParameters(e,i.state,a,t,n),c=Te.getProgramCacheKey(s),l=r.programs;r.environment=e.isMeshStandardMaterial?t.environment:null,r.fog=t.fog,r.envMap=(e.isMeshStandardMaterial?Se:xe).get(e.envMap||r.environment),r.envMapRotation=r.environment!==null&&e.envMap===null?t.environmentRotation:e.envMapRotation,l===void 0&&(e.addEventListener(`dispose`,Ze),l=new Map,r.programs=l);let u=l.get(c);if(u!==void 0){if(r.currentProgram===u&&r.lightsStateVersion===o)return gt(e,s),u}else s.uniforms=Te.getUniforms(e),e.onBeforeCompile(s,S),u=Te.acquireProgram(s,c),l.set(c,u),r.uniforms=s.uniforms;let d=r.uniforms;return(!e.isShaderMaterial&&!e.isRawShaderMaterial||e.clipping===!0)&&(d.clippingPlanes=ke.uniform),gt(e,s),r.needsLights=yt(e),r.lightsStateVersion=o,r.needsLights&&(d.ambientLightColor.value=i.state.ambient,d.lightProbe.value=i.state.probe,d.directionalLights.value=i.state.directional,d.directionalLightShadows.value=i.state.directionalShadow,d.spotLights.value=i.state.spot,d.spotLightShadows.value=i.state.spotShadow,d.rectAreaLights.value=i.state.rectArea,d.ltc_1.value=i.state.rectAreaLTC1,d.ltc_2.value=i.state.rectAreaLTC2,d.pointLights.value=i.state.point,d.pointLightShadows.value=i.state.pointShadow,d.hemisphereLights.value=i.state.hemi,d.directionalShadowMap.value=i.state.directionalShadowMap,d.directionalShadowMatrix.value=i.state.directionalShadowMatrix,d.spotShadowMap.value=i.state.spotShadowMap,d.spotLightMatrix.value=i.state.spotLightMatrix,d.spotLightMap.value=i.state.spotLightMap,d.pointShadowMap.value=i.state.pointShadowMap,d.pointShadowMatrix.value=i.state.pointShadowMatrix),r.currentProgram=u,r.uniformsList=null,u}function ht(e){if(e.uniformsList===null){let t=e.currentProgram.getUniforms();e.uniformsList=us.seqWithValue(t.seq,e.uniforms)}return e.uniformsList}function gt(e,t){let n=R.get(e);n.outputColorSpace=t.outputColorSpace,n.batching=t.batching,n.batchingColor=t.batchingColor,n.instancing=t.instancing,n.instancingColor=t.instancingColor,n.instancingMorph=t.instancingMorph,n.skinning=t.skinning,n.morphTargets=t.morphTargets,n.morphNormals=t.morphNormals,n.morphColors=t.morphColors,n.morphTargetsCount=t.morphTargetsCount,n.numClippingPlanes=t.numClippingPlanes,n.numIntersection=t.numClipIntersection,n.vertexAlphas=t.vertexAlphas,n.vertexTangents=t.vertexTangents,n.toneMapping=t.toneMapping}function _t(e,t,n,r,i){t.isScene!==!0&&(t=he),z.resetTextureUnits();let a=t.fog,o=r.isMeshStandardMaterial?t.environment:null,s=E===null?S.outputColorSpace:E.isXRRenderTarget===!0?E.texture.colorSpace:Bt,c=(r.isMeshStandardMaterial?Se:xe).get(r.envMap||o),l=r.vertexColors===!0&&!!n.attributes.color&&n.attributes.color.itemSize===4,u=!!n.attributes.tangent&&(!!r.normalMap||r.anisotropy>0),d=!!n.morphAttributes.position,f=!!n.morphAttributes.normal,p=!!n.morphAttributes.color,m=ge;r.toneMapped&&(E===null||E.isXRRenderTarget===!0)&&(m=S.toneMapping);let h=n.morphAttributes.position||n.morphAttributes.normal||n.morphAttributes.color,g=h===void 0?0:h.length,_=R.get(r),v=y.state.lights;if(N===!0&&(ue===!0||e!==O)){let t=e===O&&r.id===D;ke.setState(r,e,t)}let b=!1;r.version===_.__version?(_.needsLights&&_.lightsStateVersion!==v.state.version||_.outputColorSpace!==s||i.isBatchedMesh&&_.batching===!1||!i.isBatchedMesh&&_.batching===!0||i.isBatchedMesh&&_.batchingColor===!0&&i.colorTexture===null||i.isBatchedMesh&&_.batchingColor===!1&&i.colorTexture!==null||i.isInstancedMesh&&_.instancing===!1||!i.isInstancedMesh&&_.instancing===!0||i.isSkinnedMesh&&_.skinning===!1||!i.isSkinnedMesh&&_.skinning===!0||i.isInstancedMesh&&_.instancingColor===!0&&i.instanceColor===null||i.isInstancedMesh&&_.instancingColor===!1&&i.instanceColor!==null||i.isInstancedMesh&&_.instancingMorph===!0&&i.morphTexture===null||i.isInstancedMesh&&_.instancingMorph===!1&&i.morphTexture!==null||_.envMap!==c||r.fog===!0&&_.fog!==a||_.numClippingPlanes!==void 0&&(_.numClippingPlanes!==ke.numPlanes||_.numIntersection!==ke.numIntersection)||_.vertexAlphas!==l||_.vertexTangents!==u||_.morphTargets!==d||_.morphNormals!==f||_.morphColors!==p||_.toneMapping!==m||_.morphTargetsCount!==g)&&(b=!0):(b=!0,_.__version=r.version);let x=_.currentProgram;b===!0&&(x=mt(r,t,i));let C=!1,w=!1,T=!1,k=x.getUniforms(),A=_.uniforms;if(L.useProgram(x.program)&&(C=!0,w=!0,T=!0),r.id!==D&&(D=r.id,w=!0),C||O!==e){I.reverseDepthBuffer?(de.copy(e.projectionMatrix),Tn(de),En(de),k.setValue(P,`projectionMatrix`,de)):k.setValue(P,`projectionMatrix`,e.projectionMatrix),k.setValue(P,`viewMatrix`,e.matrixWorldInverse);let t=k.map.cameraPosition;t!==void 0&&t.setValue(P,pe.setFromMatrixPosition(e.matrixWorld)),I.logarithmicDepthBuffer&&k.setValue(P,`logDepthBufFC`,2/(Math.log(e.far+1)/Math.LN2)),(r.isMeshPhongMaterial||r.isMeshToonMaterial||r.isMeshLambertMaterial||r.isMeshBasicMaterial||r.isMeshStandardMaterial||r.isShaderMaterial)&&k.setValue(P,`isOrthographic`,e.isOrthographicCamera===!0),O!==e&&(O=e,w=!0,T=!0)}if(i.isSkinnedMesh){k.setOptional(P,i,`bindMatrix`),k.setOptional(P,i,`bindMatrixInverse`);let e=i.skeleton;e&&(e.boneTexture===null&&e.computeBoneTexture(),k.setValue(P,`boneTexture`,e.boneTexture,z))}i.isBatchedMesh&&(k.setOptional(P,i,`batchingTexture`),k.setValue(P,`batchingTexture`,i._matricesTexture,z),k.setOptional(P,i,`batchingIdTexture`),k.setValue(P,`batchingIdTexture`,i._indirectTexture,z),k.setOptional(P,i,`batchingColorTexture`),i._colorsTexture!==null&&k.setValue(P,`batchingColorTexture`,i._colorsTexture,z));let j=n.morphAttributes;if((j.position!==void 0||j.normal!==void 0||j.color!==void 0)&&Pe.update(i,n,x),(w||_.receiveShadow!==i.receiveShadow)&&(_.receiveShadow=i.receiveShadow,k.setValue(P,`receiveShadow`,i.receiveShadow)),r.isMeshGouraudMaterial&&r.envMap!==null&&(A.envMap.value=c,A.flipEnvMap.value=c.isCubeTexture&&c.isRenderTargetTexture===!1?-1:1),r.isMeshStandardMaterial&&r.envMap===null&&t.environment!==null&&(A.envMapIntensity.value=t.environmentIntensity),w&&(k.setValue(P,`toneMappingExposure`,S.toneMappingExposure),_.needsLights&&vt(A,T),a&&r.fog===!0&&Ee.refreshFogUniforms(A,a),Ee.refreshMaterialUniforms(A,r,M,re,y.state.transmissionRenderTarget[e.id]),us.upload(P,ht(_),A,z)),r.isShaderMaterial&&r.uniformsNeedUpdate===!0&&(us.upload(P,ht(_),A,z),r.uniformsNeedUpdate=!1),r.isSpriteMaterial&&k.setValue(P,`center`,i.center),k.setValue(P,`modelViewMatrix`,i.modelViewMatrix),k.setValue(P,`normalMatrix`,i.normalMatrix),k.setValue(P,`modelMatrix`,i.matrixWorld),r.isShaderMaterial||r.isRawShaderMaterial){let e=r.uniformsGroups;for(let t=0,n=e.length;t<n;t++){let n=e[t];Ge.update(n,x),Ge.bind(n,x)}}return x}function vt(e,t){e.ambientLightColor.needsUpdate=t,e.lightProbe.needsUpdate=t,e.directionalLights.needsUpdate=t,e.directionalLightShadows.needsUpdate=t,e.pointLights.needsUpdate=t,e.pointLightShadows.needsUpdate=t,e.spotLights.needsUpdate=t,e.spotLightShadows.needsUpdate=t,e.rectAreaLights.needsUpdate=t,e.hemisphereLights.needsUpdate=t}function yt(e){return e.isMeshLambertMaterial||e.isMeshToonMaterial||e.isMeshPhongMaterial||e.isMeshStandardMaterial||e.isShadowMaterial||e.isShaderMaterial&&e.lights===!0}this.getActiveCubeFace=function(){return w},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return E},this.setRenderTargetTextures=function(e,t,n){R.get(e.texture).__webglTexture=t,R.get(e.depthTexture).__webglTexture=n;let r=R.get(e);r.__hasExternalTextures=!0,r.__autoAllocateDepthBuffer=n===void 0,r.__autoAllocateDepthBuffer||F.has(`WEBGL_multisampled_render_to_texture`)===!0&&(console.warn(`THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided`),r.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(e,t){let n=R.get(e);n.__webglFramebuffer=t,n.__useDefaultFramebuffer=t===void 0},this.setRenderTarget=function(e,t=0,n=0){E=e,w=t,T=n;let r=!0,i=null,a=!1,o=!1;if(e){let s=R.get(e);if(s.__useDefaultFramebuffer!==void 0)L.bindFramebuffer(P.FRAMEBUFFER,null),r=!1;else if(s.__webglFramebuffer===void 0)z.setupRenderTarget(e);else if(s.__hasExternalTextures)z.rebindTextures(e,R.get(e.texture).__webglTexture,R.get(e.depthTexture).__webglTexture);else if(e.depthBuffer){let t=e.depthTexture;if(s.__boundDepthTexture!==t){if(t!==null&&R.has(t)&&(e.width!==t.image.width||e.height!==t.image.height))throw Error(`WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.`);z.setupDepthRenderbuffer(e)}}let c=e.texture;(c.isData3DTexture||c.isDataArrayTexture||c.isCompressedArrayTexture)&&(o=!0);let l=R.get(e).__webglFramebuffer;e.isWebGLCubeRenderTarget?(i=Array.isArray(l[t])?l[t][n]:l[t],a=!0):i=e.samples>0&&z.useMultisampledRTT(e)===!1?R.get(e).__webglMultisampledFramebuffer:Array.isArray(l)?l[n]:l,k.copy(e.viewport),A.copy(e.scissor),j=e.scissorTest}else k.copy(oe).multiplyScalar(M).floor(),A.copy(se).multiplyScalar(M).floor(),j=ce;if(L.bindFramebuffer(P.FRAMEBUFFER,i)&&r&&L.drawBuffers(e,i),L.viewport(k),L.scissor(A),L.setScissorTest(j),a){let r=R.get(e.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_CUBE_MAP_POSITIVE_X+t,r.__webglTexture,n)}else if(o){let r=R.get(e.texture),i=t||0;P.framebufferTextureLayer(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,r.__webglTexture,n||0,i)}D=-1},this.readRenderTargetPixels=function(e,t,n,r,i,a,o){if(!(e&&e.isWebGLRenderTarget)){console.error(`THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);return}let s=R.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(s=s[o]),s){L.bindFramebuffer(P.FRAMEBUFFER,s);try{let o=e.texture,s=o.format,c=o.type;if(!I.textureFormatReadable(s)){console.error(`THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.`);return}if(!I.textureTypeReadable(c)){console.error(`THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.`);return}t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i&&P.readPixels(t,n,r,i,Ue.convert(s),Ue.convert(c),a)}finally{let e=E===null?null:R.get(E).__webglFramebuffer;L.bindFramebuffer(P.FRAMEBUFFER,e)}}},this.readRenderTargetPixelsAsync=async function(e,t,n,r,i,a,o){if(!(e&&e.isWebGLRenderTarget))throw Error(`THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);let s=R.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(s=s[o]),s){let o=e.texture,c=o.format,l=o.type;if(!I.textureFormatReadable(c))throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.`);if(!I.textureTypeReadable(l))throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.`);if(t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i){L.bindFramebuffer(P.FRAMEBUFFER,s);let e=P.createBuffer();P.bindBuffer(P.PIXEL_PACK_BUFFER,e),P.bufferData(P.PIXEL_PACK_BUFFER,a.byteLength,P.STREAM_READ),P.readPixels(t,n,r,i,Ue.convert(c),Ue.convert(l),0);let o=E===null?null:R.get(E).__webglFramebuffer;L.bindFramebuffer(P.FRAMEBUFFER,o);let u=P.fenceSync(P.SYNC_GPU_COMMANDS_COMPLETE,0);return P.flush(),await wn(P,u,4),P.bindBuffer(P.PIXEL_PACK_BUFFER,e),P.getBufferSubData(P.PIXEL_PACK_BUFFER,0,a),P.deleteBuffer(e),P.deleteSync(u),a}throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.`)}},this.copyFramebufferToTexture=function(e,t=null,n=0){e.isTexture!==!0&&(Cn(`WebGLRenderer: copyFramebufferToTexture function signature has changed.`),t=arguments[0]||null,e=arguments[1]);let r=2**-n,i=Math.floor(e.image.width*r),a=Math.floor(e.image.height*r),o=t===null?0:t.x,s=t===null?0:t.y;z.setTexture2D(e,0),P.copyTexSubImage2D(P.TEXTURE_2D,n,0,0,o,s,i,a),L.unbindTexture()},this.copyTextureToTexture=function(e,t,n=null,r=null,i=0){e.isTexture!==!0&&(Cn(`WebGLRenderer: copyTextureToTexture function signature has changed.`),r=arguments[0]||null,e=arguments[1],t=arguments[2],i=arguments[3]||0,n=null);let a,o,s,c,l,u;n===null?(a=e.image.width,o=e.image.height,s=0,c=0):(a=n.max.x-n.min.x,o=n.max.y-n.min.y,s=n.min.x,c=n.min.y),r===null?(l=0,u=0):(l=r.x,u=r.y);let d=Ue.convert(t.format),f=Ue.convert(t.type);z.setTexture2D(t,0),P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,t.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,t.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,t.unpackAlignment);let p=P.getParameter(P.UNPACK_ROW_LENGTH),m=P.getParameter(P.UNPACK_IMAGE_HEIGHT),h=P.getParameter(P.UNPACK_SKIP_PIXELS),g=P.getParameter(P.UNPACK_SKIP_ROWS),_=P.getParameter(P.UNPACK_SKIP_IMAGES),v=e.isCompressedTexture?e.mipmaps[i]:e.image;P.pixelStorei(P.UNPACK_ROW_LENGTH,v.width),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,v.height),P.pixelStorei(P.UNPACK_SKIP_PIXELS,s),P.pixelStorei(P.UNPACK_SKIP_ROWS,c),e.isDataTexture?P.texSubImage2D(P.TEXTURE_2D,i,l,u,a,o,d,f,v.data):e.isCompressedTexture?P.compressedTexSubImage2D(P.TEXTURE_2D,i,l,u,v.width,v.height,d,v.data):P.texSubImage2D(P.TEXTURE_2D,i,l,u,a,o,d,f,v),P.pixelStorei(P.UNPACK_ROW_LENGTH,p),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,m),P.pixelStorei(P.UNPACK_SKIP_PIXELS,h),P.pixelStorei(P.UNPACK_SKIP_ROWS,g),P.pixelStorei(P.UNPACK_SKIP_IMAGES,_),i===0&&t.generateMipmaps&&P.generateMipmap(P.TEXTURE_2D),L.unbindTexture()},this.copyTextureToTexture3D=function(e,t,n=null,r=null,i=0){e.isTexture!==!0&&(Cn(`WebGLRenderer: copyTextureToTexture3D function signature has changed.`),n=arguments[0]||null,r=arguments[1]||null,e=arguments[2],t=arguments[3],i=arguments[4]||0);let a,o,s,c,l,u,d,f,p,m=e.isCompressedTexture?e.mipmaps[i]:e.image;n===null?(a=m.width,o=m.height,s=m.depth,c=0,l=0,u=0):(a=n.max.x-n.min.x,o=n.max.y-n.min.y,s=n.max.z-n.min.z,c=n.min.x,l=n.min.y,u=n.min.z),r===null?(d=0,f=0,p=0):(d=r.x,f=r.y,p=r.z);let h=Ue.convert(t.format),g=Ue.convert(t.type),_;if(t.isData3DTexture)z.setTexture3D(t,0),_=P.TEXTURE_3D;else if(t.isDataArrayTexture||t.isCompressedArrayTexture)z.setTexture2DArray(t,0),_=P.TEXTURE_2D_ARRAY;else{console.warn(`THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.`);return}P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,t.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,t.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,t.unpackAlignment);let v=P.getParameter(P.UNPACK_ROW_LENGTH),y=P.getParameter(P.UNPACK_IMAGE_HEIGHT),b=P.getParameter(P.UNPACK_SKIP_PIXELS),x=P.getParameter(P.UNPACK_SKIP_ROWS),S=P.getParameter(P.UNPACK_SKIP_IMAGES);P.pixelStorei(P.UNPACK_ROW_LENGTH,m.width),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,m.height),P.pixelStorei(P.UNPACK_SKIP_PIXELS,c),P.pixelStorei(P.UNPACK_SKIP_ROWS,l),P.pixelStorei(P.UNPACK_SKIP_IMAGES,u),e.isDataTexture||e.isData3DTexture?P.texSubImage3D(_,i,d,f,p,a,o,s,h,g,m.data):t.isCompressedArrayTexture?P.compressedTexSubImage3D(_,i,d,f,p,a,o,s,h,m.data):P.texSubImage3D(_,i,d,f,p,a,o,s,h,g,m),P.pixelStorei(P.UNPACK_ROW_LENGTH,v),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,y),P.pixelStorei(P.UNPACK_SKIP_PIXELS,b),P.pixelStorei(P.UNPACK_SKIP_ROWS,x),P.pixelStorei(P.UNPACK_SKIP_IMAGES,S),i===0&&t.generateMipmaps&&P.generateMipmap(_),L.unbindTexture()},this.initRenderTarget=function(e){R.get(e).__webglFramebuffer===void 0&&z.setupRenderTarget(e)},this.initTexture=function(e){e.isCubeTexture?z.setTextureCube(e,0):e.isData3DTexture?z.setTexture3D(e,0):e.isDataArrayTexture||e.isCompressedArrayTexture?z.setTexture2DArray(e,0):z.setTexture2D(e,0),L.unbindTexture()},this.resetState=function(){w=0,T=0,E=null,L.reset(),We.reset()},typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}get coordinateSystem(){return on}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=e===Vt?`display-p3`:`srgb`,t.unpackColorSpace=U.workingColorSpace===Ht?`display-p3`:`srgb`}},Dc=class e{constructor(e,t=25e-5){this.isFogExp2=!0,this.name=``,this.color=new G(e),this.density=t}clone(){return new e(this.color,this.density)}toJSON(){return{type:`FogExp2`,name:this.name,color:this.color.getHex(),density:this.density}}},Oc=class extends Jr{constructor(){super(),this.isScene=!0,this.type=`Scene`,this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new jr,this.environmentIntensity=1,this.environmentRotation=new jr,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},kc=class extends zn{constructor(e=null,t=1,n=1,r,i,a,o,s,c=Ee,l=Ee,u,d){super(null,a,o,s,c,l,r,i,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Ac=class extends yi{constructor(e,t,n,r=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},jc=new xr,Mc=new xr,Nc=[],Pc=new Jn,Fc=new xr,Ic=new q,Lc=new fr,Rc=class extends q{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Ac(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let e=0;e<n;e++)this.setMatrixAt(e,Fc)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Jn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,jc),Pc.copy(e.boundingBox).applyMatrix4(jc),this.boundingBox.union(Pc)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new fr),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,jc),Lc.copy(e.boundingSphere).applyMatrix4(jc),this.boundingSphere.union(Lc)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,r=this.morphTexture.source.data.data,i=e*(n.length+1)+1;for(let e=0;e<n.length;e++)n[e]=r[i+e]}raycast(e,t){let n=this.matrixWorld,r=this.count;if(Ic.geometry=this.geometry,Ic.material=this.material,Ic.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Lc.copy(this.boundingSphere),Lc.applyMatrix4(n),e.ray.intersectsSphere(Lc)!==!1))for(let i=0;i<r;i++){this.getMatrixAt(i,jc),Mc.multiplyMatrices(n,jc),Ic.matrixWorld=Mc,Ic.raycast(e,Nc);for(let e=0,n=Nc.length;e<n;e++){let n=Nc[e];n.instanceId=i,n.object=this,t.push(n)}Nc.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Ac(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){let n=t.morphTargetInfluences,r=n.length+1;this.morphTexture===null&&(this.morphTexture=new kc(new Float32Array(r*this.count),r,this.count,Ze,Re));let i=this.morphTexture.source.data.data,a=0;for(let e=0;e<n.length;e++)a+=n[e];let o=this.geometry.morphTargetsRelative?1:1-a,s=r*e;i[s]=o,i.set(n,s+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:`dispose`}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}},zc=class extends hi{constructor(e){super(),this.isPointsMaterial=!0,this.type=`PointsMaterial`,this.color=new G(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Bc=new xr,Vc=new br,Hc=new fr,Uc=new W,Wc=class extends Jr{constructor(e=new ki,t=new zc){super(),this.isPoints=!0,this.type=`Points`,this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let n=this.geometry,r=this.matrixWorld,i=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Hc.copy(n.boundingSphere),Hc.applyMatrix4(r),Hc.radius+=i,e.ray.intersectsSphere(Hc)===!1)return;Bc.copy(r).invert(),Vc.copy(e.ray).applyMatrix4(Bc);let o=i/((this.scale.x+this.scale.y+this.scale.z)/3),s=o*o,c=n.index,l=n.attributes.position;if(c!==null){let n=Math.max(0,a.start),i=Math.min(c.count,a.start+a.count);for(let a=n,o=i;a<o;a++){let n=c.getX(a);Uc.fromBufferAttribute(l,n),Gc(Uc,n,s,r,e,t,this)}}else{let n=Math.max(0,a.start),i=Math.min(l.count,a.start+a.count);for(let a=n,o=i;a<o;a++)Uc.fromBufferAttribute(l,a),Gc(Uc,a,s,r,e,t,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=n.length;e<t;e++){let t=n[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[t]=e}}}}};function Gc(e,t,n,r,i,a,o){let s=Vc.distanceSqToPoint(e);if(s<n){let n=new W;Vc.closestPointToPoint(e,n),n.applyMatrix4(r);let c=i.ray.origin.distanceTo(n);if(c<i.near||c>i.far)return;a.push({distance:c,distanceToRay:Math.sqrt(s),point:n,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}var Kc=class extends zn{constructor(e,t,n,r,i,a,o,s,c){super(e,t,n,r,i,a,o,s,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},qc=class{constructor(){this.type=`Curve`,this.arcLengthDivisions=200}getPoint(){return console.warn(`THREE.Curve: .getPoint() not implemented.`),null}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,r=this.getPoint(0),i=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),i+=n.distanceTo(r),t.push(i),r=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){let n=this.getLengths(),r=0,i=n.length,a;a=t||e*n[i-1];let o=0,s=i-1,c;for(;o<=s;)if(r=Math.floor(o+(s-o)/2),c=n[r]-a,c<0)o=r+1;else if(c>0)s=r-1;else{s=r;break}if(r=s,n[r]===a)return r/(i-1);let l=n[r],u=n[r+1]-l,d=(a-l)/u;return(r+d)/(i-1)}getTangent(e,t){let n=e-1e-4,r=e+1e-4;n<0&&(n=0),r>1&&(r=1);let i=this.getPoint(n),a=this.getPoint(r),o=t||(i.isVector2?new V:new W);return o.copy(a).sub(i).normalize(),o}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){let n=new W,r=[],i=[],a=[],o=new W,s=new xr;for(let t=0;t<=e;t++){let n=t/e;r[t]=this.getTangentAt(n,new W)}i[0]=new W,a[0]=new W;let c=Number.MAX_VALUE,l=Math.abs(r[0].x),u=Math.abs(r[0].y),d=Math.abs(r[0].z);l<=c&&(c=l,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),d<=c&&n.set(0,0,1),o.crossVectors(r[0],n).normalize(),i[0].crossVectors(r[0],o),a[0].crossVectors(r[0],i[0]);for(let t=1;t<=e;t++){if(i[t]=i[t-1].clone(),a[t]=a[t-1].clone(),o.crossVectors(r[t-1],r[t]),o.length()>2**-52){o.normalize();let e=Math.acos(pn(r[t-1].dot(r[t]),-1,1));i[t].applyMatrix4(s.makeRotationAxis(o,e))}a[t].crossVectors(r[t],i[t])}if(t===!0){let t=Math.acos(pn(i[0].dot(i[e]),-1,1));t/=e,r[0].dot(o.crossVectors(i[0],i[e]))>0&&(t=-t);for(let n=1;n<=e;n++)i[n].applyMatrix4(s.makeRotationAxis(r[n],t*n)),a[n].crossVectors(r[n],i[n])}return{tangents:r,normals:i,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.6,type:`Curve`,generator:`Curve.toJSON`}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},Jc=class extends qc{constructor(e=0,t=0,n=1,r=1,i=0,a=Math.PI*2,o=!1,s=0){super(),this.isEllipseCurve=!0,this.type=`EllipseCurve`,this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=r,this.aStartAngle=i,this.aEndAngle=a,this.aClockwise=o,this.aRotation=s}getPoint(e,t=new V){let n=t,r=Math.PI*2,i=this.aEndAngle-this.aStartAngle,a=Math.abs(i)<2**-52;for(;i<0;)i+=r;for(;i>r;)i-=r;i<2**-52&&(i=a?0:r),this.aClockwise===!0&&!a&&(i===r?i=-r:i-=r);let o=this.aStartAngle+e*i,s=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let e=Math.cos(this.aRotation),t=Math.sin(this.aRotation),n=s-this.aX,r=c-this.aY;s=n*e-r*t+this.aX,c=n*t+r*e+this.aY}return n.set(s,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},Yc=class extends Jc{constructor(e,t,n,r,i,a){super(e,t,n,n,r,i,a),this.isArcCurve=!0,this.type=`ArcCurve`}};function Xc(){let e=0,t=0,n=0,r=0;function i(i,a,o,s){e=i,t=o,n=-3*i+3*a-2*o-s,r=2*i-2*a+o+s}return{initCatmullRom:function(e,t,n,r,a){i(t,n,a*(n-e),a*(r-t))},initNonuniformCatmullRom:function(e,t,n,r,a,o,s){let c=(t-e)/a-(n-e)/(a+o)+(n-t)/o,l=(n-t)/o-(r-t)/(o+s)+(r-n)/s;c*=o,l*=o,i(t,n,c,l)},calc:function(i){let a=i*i,o=a*i;return e+t*i+n*a+r*o}}}var Zc=new W,Qc=new Xc,$c=new Xc,el=new Xc,tl=class extends qc{constructor(e=[],t=!1,n=`centripetal`,r=.5){super(),this.isCatmullRomCurve3=!0,this.type=`CatmullRomCurve3`,this.points=e,this.closed=t,this.curveType=n,this.tension=r}getPoint(e,t=new W){let n=t,r=this.points,i=r.length,a=(i-+!this.closed)*e,o=Math.floor(a),s=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/i)+1)*i:s===0&&o===i-1&&(o=i-2,s=1);let c,l;this.closed||o>0?c=r[(o-1)%i]:(Zc.subVectors(r[0],r[1]).add(r[0]),c=Zc);let u=r[o%i],d=r[(o+1)%i];if(this.closed||o+2<i?l=r[(o+2)%i]:(Zc.subVectors(r[i-1],r[i-2]).add(r[i-1]),l=Zc),this.curveType===`centripetal`||this.curveType===`chordal`){let e=this.curveType===`chordal`?.5:.25,t=c.distanceToSquared(u)**+e,n=u.distanceToSquared(d)**+e,r=d.distanceToSquared(l)**+e;n<1e-4&&(n=1),t<1e-4&&(t=n),r<1e-4&&(r=n),Qc.initNonuniformCatmullRom(c.x,u.x,d.x,l.x,t,n,r),$c.initNonuniformCatmullRom(c.y,u.y,d.y,l.y,t,n,r),el.initNonuniformCatmullRom(c.z,u.z,d.z,l.z,t,n,r)}else this.curveType===`catmullrom`&&(Qc.initCatmullRom(c.x,u.x,d.x,l.x,this.tension),$c.initCatmullRom(c.y,u.y,d.y,l.y,this.tension),el.initCatmullRom(c.z,u.z,d.z,l.z,this.tension));return n.set(Qc.calc(s),$c.calc(s),el.calc(s)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let n=e.points[t];this.points.push(n.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let n=this.points[t];e.points.push(n.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let n=e.points[t];this.points.push(new W().fromArray(n))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function nl(e,t,n,r,i){let a=(r-t)*.5,o=(i-n)*.5,s=e*e,c=e*s;return(2*n-2*r+a+o)*c+(-3*n+3*r-2*a-o)*s+a*e+n}function rl(e,t){let n=1-e;return n*n*t}function il(e,t){return 2*(1-e)*e*t}function al(e,t){return e*e*t}function ol(e,t,n,r){return rl(e,t)+il(e,n)+al(e,r)}function sl(e,t){let n=1-e;return n*n*n*t}function cl(e,t){let n=1-e;return 3*n*n*e*t}function ll(e,t){return 3*(1-e)*e*e*t}function ul(e,t){return e*e*e*t}function dl(e,t,n,r,i){return sl(e,t)+cl(e,n)+ll(e,r)+ul(e,i)}var fl=class extends qc{constructor(e=new V,t=new V,n=new V,r=new V){super(),this.isCubicBezierCurve=!0,this.type=`CubicBezierCurve`,this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new V){let n=t,r=this.v0,i=this.v1,a=this.v2,o=this.v3;return n.set(dl(e,r.x,i.x,a.x,o.x),dl(e,r.y,i.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},pl=class extends qc{constructor(e=new W,t=new W,n=new W,r=new W){super(),this.isCubicBezierCurve3=!0,this.type=`CubicBezierCurve3`,this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new W){let n=t,r=this.v0,i=this.v1,a=this.v2,o=this.v3;return n.set(dl(e,r.x,i.x,a.x,o.x),dl(e,r.y,i.y,a.y,o.y),dl(e,r.z,i.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},ml=class extends qc{constructor(e=new V,t=new V){super(),this.isLineCurve=!0,this.type=`LineCurve`,this.v1=e,this.v2=t}getPoint(e,t=new V){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new V){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},hl=class extends qc{constructor(e=new W,t=new W){super(),this.isLineCurve3=!0,this.type=`LineCurve3`,this.v1=e,this.v2=t}getPoint(e,t=new W){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new W){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},gl=class extends qc{constructor(e=new V,t=new V,n=new V){super(),this.isQuadraticBezierCurve=!0,this.type=`QuadraticBezierCurve`,this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new V){let n=t,r=this.v0,i=this.v1,a=this.v2;return n.set(ol(e,r.x,i.x,a.x),ol(e,r.y,i.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},_l=class extends qc{constructor(e=new W,t=new W,n=new W){super(),this.isQuadraticBezierCurve3=!0,this.type=`QuadraticBezierCurve3`,this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new W){let n=t,r=this.v0,i=this.v1,a=this.v2;return n.set(ol(e,r.x,i.x,a.x),ol(e,r.y,i.y,a.y),ol(e,r.z,i.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},vl=class extends qc{constructor(e=[]){super(),this.isSplineCurve=!0,this.type=`SplineCurve`,this.points=e}getPoint(e,t=new V){let n=t,r=this.points,i=(r.length-1)*e,a=Math.floor(i),o=i-a,s=r[a===0?a:a-1],c=r[a],l=r[a>r.length-2?r.length-1:a+1],u=r[a>r.length-3?r.length-1:a+2];return n.set(nl(o,s.x,c.x,l.x,u.x),nl(o,s.y,c.y,l.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let n=e.points[t];this.points.push(n.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let n=this.points[t];e.points.push(n.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let n=e.points[t];this.points.push(new V().fromArray(n))}return this}},yl=Object.freeze({__proto__:null,ArcCurve:Yc,CatmullRomCurve3:tl,CubicBezierCurve:fl,CubicBezierCurve3:pl,EllipseCurve:Jc,LineCurve:ml,LineCurve3:hl,QuadraticBezierCurve:gl,QuadraticBezierCurve3:_l,SplineCurve:vl}),bl=class extends qc{constructor(){super(),this.type=`CurvePath`,this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?`LineCurve`:`LineCurve3`;this.curves.push(new yl[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),r=this.getCurveLengths(),i=0;for(;i<r.length;){if(r[i]>=n){let e=r[i]-n,a=this.curves[i],o=a.getLength(),s=o===0?0:1-e/o;return a.getPointAt(s,t)}i++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,r=this.curves.length;n<r;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let r=0,i=this.curves;r<i.length;r++){let a=i[r],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,s=a.getPoints(o);for(let e=0;e<s.length;e++){let r=s[e];n&&n.equals(r)||(t.push(r),n=r)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let n=e.curves[t];this.curves.push(n.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let n=this.curves[t];e.curves.push(n.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let n=e.curves[t];this.curves.push(new yl[n.type]().fromJSON(n))}return this}},xl=class extends bl{constructor(e){super(),this.type=`Path`,this.currentPoint=new V,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new ml(this.currentPoint.clone(),new V(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,r){let i=new gl(this.currentPoint.clone(),new V(e,t),new V(n,r));return this.curves.push(i),this.currentPoint.set(n,r),this}bezierCurveTo(e,t,n,r,i,a){let o=new fl(this.currentPoint.clone(),new V(e,t),new V(n,r),new V(i,a));return this.curves.push(o),this.currentPoint.set(i,a),this}splineThru(e){let t=new vl([this.currentPoint.clone()].concat(e));return this.curves.push(t),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,r,i,a){let o=this.currentPoint.x,s=this.currentPoint.y;return this.absarc(e+o,t+s,n,r,i,a),this}absarc(e,t,n,r,i,a){return this.absellipse(e,t,n,n,r,i,a),this}ellipse(e,t,n,r,i,a,o,s){let c=this.currentPoint.x,l=this.currentPoint.y;return this.absellipse(e+c,t+l,n,r,i,a,o,s),this}absellipse(e,t,n,r,i,a,o,s){let c=new Jc(e,t,n,r,i,a,o,s);if(this.curves.length>0){let e=c.getPoint(0);e.equals(this.currentPoint)||this.lineTo(e.x,e.y)}this.curves.push(c);let l=c.getPoint(1);return this.currentPoint.copy(l),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},Sl=class e extends ki{constructor(e=[new V(0,-.5),new V(.5,0),new V(0,.5)],t=12,n=0,r=Math.PI*2){super(),this.type=`LatheGeometry`,this.parameters={points:e,segments:t,phiStart:n,phiLength:r},t=Math.floor(t),r=pn(r,0,Math.PI*2);let i=[],a=[],o=[],s=[],c=[],l=1/t,u=new W,d=new V,f=new W,p=new W,m=new W,h=0,g=0;for(let t=0;t<=e.length-1;t++)switch(t){case 0:h=e[t+1].x-e[t].x,g=e[t+1].y-e[t].y,f.x=g*1,f.y=-h,f.z=g*0,m.copy(f),f.normalize(),s.push(f.x,f.y,f.z);break;case e.length-1:s.push(m.x,m.y,m.z);break;default:h=e[t+1].x-e[t].x,g=e[t+1].y-e[t].y,f.x=g*1,f.y=-h,f.z=g*0,p.copy(f),f.x+=m.x,f.y+=m.y,f.z+=m.z,f.normalize(),s.push(f.x,f.y,f.z),m.copy(p)}for(let i=0;i<=t;i++){let f=n+i*l*r,p=Math.sin(f),m=Math.cos(f);for(let n=0;n<=e.length-1;n++){u.x=e[n].x*p,u.y=e[n].y,u.z=e[n].x*m,a.push(u.x,u.y,u.z),d.x=i/t,d.y=n/(e.length-1),o.push(d.x,d.y);let r=s[3*n+0]*p,l=s[3*n+1],f=s[3*n+0]*m;c.push(r,l,f)}}for(let n=0;n<t;n++)for(let t=0;t<e.length-1;t++){let r=t+n*e.length,a=r,o=r+e.length,s=r+e.length+1,c=r+1;i.push(a,o,c),i.push(s,c,o)}this.setIndex(i),this.setAttribute(`position`,new K(a,3)),this.setAttribute(`uv`,new K(o,2)),this.setAttribute(`normal`,new K(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.points,t.segments,t.phiStart,t.phiLength)}},Cl=class e extends ki{constructor(e=1,t=1,n=1,r=32,i=1,a=!1,o=0,s=Math.PI*2){super(),this.type=`CylinderGeometry`,this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:r,heightSegments:i,openEnded:a,thetaStart:o,thetaLength:s};let c=this;r=Math.floor(r),i=Math.floor(i);let l=[],u=[],d=[],f=[],p=0,m=[],h=n/2,g=0;_(),a===!1&&(e>0&&v(!0),t>0&&v(!1)),this.setIndex(l),this.setAttribute(`position`,new K(u,3)),this.setAttribute(`normal`,new K(d,3)),this.setAttribute(`uv`,new K(f,2));function _(){let a=new W,_=new W,v=0,y=(t-e)/n;for(let c=0;c<=i;c++){let l=[],g=c/i,v=g*(t-e)+e;for(let e=0;e<=r;e++){let t=e/r,i=t*s+o,c=Math.sin(i),m=Math.cos(i);_.x=v*c,_.y=-g*n+h,_.z=v*m,u.push(_.x,_.y,_.z),a.set(c,y,m).normalize(),d.push(a.x,a.y,a.z),f.push(t,1-g),l.push(p++)}m.push(l)}for(let n=0;n<r;n++)for(let r=0;r<i;r++){let i=m[r][n],a=m[r+1][n],o=m[r+1][n+1],s=m[r][n+1];e>0&&(l.push(i,a,s),v+=3),t>0&&(l.push(a,o,s),v+=3)}c.addGroup(g,v,0),g+=v}function v(n){let i=p,a=new V,m=new W,_=0,v=n===!0?e:t,y=n===!0?1:-1;for(let e=1;e<=r;e++)u.push(0,h*y,0),d.push(0,y,0),f.push(.5,.5),p++;let b=p;for(let e=0;e<=r;e++){let t=e/r*s+o,n=Math.cos(t),i=Math.sin(t);m.x=v*i,m.y=h*y,m.z=v*n,u.push(m.x,m.y,m.z),d.push(0,y,0),a.x=n*.5+.5,a.y=i*.5*y+.5,f.push(a.x,a.y),p++}for(let e=0;e<r;e++){let t=i+e,r=b+e;n===!0?l.push(r,r+1,t):l.push(r+1,r,t),_+=3}c.addGroup(g,_,n===!0?1:2),g+=_}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},wl=class e extends Cl{constructor(e=1,t=1,n=32,r=1,i=!1,a=0,o=Math.PI*2){super(0,e,t,n,r,i,a,o),this.type=`ConeGeometry`,this.parameters={radius:e,height:t,radialSegments:n,heightSegments:r,openEnded:i,thetaStart:a,thetaLength:o}}static fromJSON(t){return new e(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Tl=class e extends ki{constructor(e=[],t=[],n=1,r=0){super(),this.type=`PolyhedronGeometry`,this.parameters={vertices:e,indices:t,radius:n,detail:r};let i=[],a=[];o(r),c(n),l(),this.setAttribute(`position`,new K(i,3)),this.setAttribute(`normal`,new K(i.slice(),3)),this.setAttribute(`uv`,new K(a,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function o(e){let n=new W,r=new W,i=new W;for(let a=0;a<t.length;a+=3)f(t[a+0],n),f(t[a+1],r),f(t[a+2],i),s(n,r,i,e)}function s(e,t,n,r){let i=r+1,a=[];for(let r=0;r<=i;r++){a[r]=[];let o=e.clone().lerp(n,r/i),s=t.clone().lerp(n,r/i),c=i-r;for(let e=0;e<=c;e++)e===0&&r===i?a[r][e]=o:a[r][e]=o.clone().lerp(s,e/c)}for(let e=0;e<i;e++)for(let t=0;t<2*(i-e)-1;t++){let n=Math.floor(t/2);t%2==0?(d(a[e][n+1]),d(a[e+1][n]),d(a[e][n])):(d(a[e][n+1]),d(a[e+1][n+1]),d(a[e+1][n]))}}function c(e){let t=new W;for(let n=0;n<i.length;n+=3)t.x=i[n+0],t.y=i[n+1],t.z=i[n+2],t.normalize().multiplyScalar(e),i[n+0]=t.x,i[n+1]=t.y,i[n+2]=t.z}function l(){let e=new W;for(let t=0;t<i.length;t+=3){e.x=i[t+0],e.y=i[t+1],e.z=i[t+2];let n=h(e)/2/Math.PI+.5,r=g(e)/Math.PI+.5;a.push(n,1-r)}p(),u()}function u(){for(let e=0;e<a.length;e+=6){let t=a[e+0],n=a[e+2],r=a[e+4];Math.max(t,n,r)>.9&&Math.min(t,n,r)<.1&&(t<.2&&(a[e+0]+=1),n<.2&&(a[e+2]+=1),r<.2&&(a[e+4]+=1))}}function d(e){i.push(e.x,e.y,e.z)}function f(t,n){let r=t*3;n.x=e[r+0],n.y=e[r+1],n.z=e[r+2]}function p(){let e=new W,t=new W,n=new W,r=new W,o=new V,s=new V,c=new V;for(let l=0,u=0;l<i.length;l+=9,u+=6){e.set(i[l+0],i[l+1],i[l+2]),t.set(i[l+3],i[l+4],i[l+5]),n.set(i[l+6],i[l+7],i[l+8]),o.set(a[u+0],a[u+1]),s.set(a[u+2],a[u+3]),c.set(a[u+4],a[u+5]),r.copy(e).add(t).add(n).divideScalar(3);let d=h(r);m(o,u+0,e,d),m(s,u+2,t,d),m(c,u+4,n,d)}}function m(e,t,n,r){r<0&&e.x===1&&(a[t]=e.x-1),n.x===0&&n.z===0&&(a[t]=r/2/Math.PI+.5)}function h(e){return Math.atan2(e.z,-e.x)}function g(e){return Math.atan2(-e.y,Math.sqrt(e.x*e.x+e.z*e.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.vertices,t.indices,t.radius,t.details)}},El=class e extends Tl{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,r=1/n,i=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-r,-n,0,-r,n,0,r,-n,0,r,n,-r,-n,0,-r,n,0,r,-n,0,r,n,0,-n,0,-r,n,0,-r,-n,0,r,n,0,r];super(i,[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9],e,t),this.type=`DodecahedronGeometry`,this.parameters={radius:e,detail:t}}static fromJSON(t){return new e(t.radius,t.detail)}},Dl=class extends xl{constructor(e){super(e),this.uuid=fn(),this.type=`Shape`,this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,r=this.holes.length;n<r;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let n=e.holes[t];this.holes.push(n.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let n=this.holes[t];e.holes.push(n.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let n=e.holes[t];this.holes.push(new xl().fromJSON(n))}return this}},Ol={triangulate:function(e,t,n=2){let r=t&&t.length,i=r?t[0]*n:e.length,a=kl(e,0,i,n,!0),o=[];if(!a||a.next===a.prev)return o;let s,c,l,u,d,f,p;if(r&&(a=Il(e,t,a,n)),e.length>80*n){s=l=e[0],c=u=e[1];for(let t=n;t<i;t+=n)d=e[t],f=e[t+1],d<s&&(s=d),f<c&&(c=f),d>l&&(l=d),f>u&&(u=f);p=Math.max(l-s,u-c),p=p===0?0:32767/p}return jl(a,o,n,s,c,p,0),o}};function kl(e,t,n,r,i){let a,o;if(i===au(e,t,n,r)>0)for(a=t;a<n;a+=r)o=nu(a,e[a],e[a+1],o);else for(a=n-r;a>=t;a-=r)o=nu(a,e[a],e[a+1],o);return o&&Jl(o,o.next)&&(ru(o),o=o.next),o}function Al(e,t){if(!e)return e;t||=e;let n=e,r;do if(r=!1,!n.steiner&&(Jl(n,n.next)||ql(n.prev,n,n.next)===0)){if(ru(n),n=t=n.prev,n===n.next)break;r=!0}else n=n.next;while(r||n!==t);return t}function jl(e,t,n,r,i,a,o){if(!e)return;!o&&a&&Vl(e,r,i,a);let s=e,c,l;for(;e.prev!==e.next;){if(c=e.prev,l=e.next,a?Nl(e,r,i,a):Ml(e)){t.push(c.i/n|0),t.push(e.i/n|0),t.push(l.i/n|0),ru(e),e=l.next,s=l.next;continue}if(e=l,e===s){o?o===1?(e=Pl(Al(e),t,n),jl(e,t,n,r,i,a,2)):o===2&&Fl(e,t,n,r,i,a):jl(Al(e),t,n,r,i,a,1);break}}}function Ml(e){let t=e.prev,n=e,r=e.next;if(ql(t,n,r)>=0)return!1;let i=t.x,a=n.x,o=r.x,s=t.y,c=n.y,l=r.y,u=i<a?i<o?i:o:a<o?a:o,d=s<c?s<l?s:l:c<l?c:l,f=i>a?i>o?i:o:a>o?a:o,p=s>c?s>l?s:l:c>l?c:l,m=r.next;for(;m!==t;){if(m.x>=u&&m.x<=f&&m.y>=d&&m.y<=p&&Gl(i,s,a,c,o,l,m.x,m.y)&&ql(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function Nl(e,t,n,r){let i=e.prev,a=e,o=e.next;if(ql(i,a,o)>=0)return!1;let s=i.x,c=a.x,l=o.x,u=i.y,d=a.y,f=o.y,p=s<c?s<l?s:l:c<l?c:l,m=u<d?u<f?u:f:d<f?d:f,h=s>c?s>l?s:l:c>l?c:l,g=u>d?u>f?u:f:d>f?d:f,_=Ul(p,m,t,n,r),v=Ul(h,g,t,n,r),y=e.prevZ,b=e.nextZ;for(;y&&y.z>=_&&b&&b.z<=v;){if(y.x>=p&&y.x<=h&&y.y>=m&&y.y<=g&&y!==i&&y!==o&&Gl(s,u,c,d,l,f,y.x,y.y)&&ql(y.prev,y,y.next)>=0||(y=y.prevZ,b.x>=p&&b.x<=h&&b.y>=m&&b.y<=g&&b!==i&&b!==o&&Gl(s,u,c,d,l,f,b.x,b.y)&&ql(b.prev,b,b.next)>=0))return!1;b=b.nextZ}for(;y&&y.z>=_;){if(y.x>=p&&y.x<=h&&y.y>=m&&y.y<=g&&y!==i&&y!==o&&Gl(s,u,c,d,l,f,y.x,y.y)&&ql(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;b&&b.z<=v;){if(b.x>=p&&b.x<=h&&b.y>=m&&b.y<=g&&b!==i&&b!==o&&Gl(s,u,c,d,l,f,b.x,b.y)&&ql(b.prev,b,b.next)>=0)return!1;b=b.nextZ}return!0}function Pl(e,t,n){let r=e;do{let i=r.prev,a=r.next.next;!Jl(i,a)&&Yl(i,r,r.next,a)&&$l(i,a)&&$l(a,i)&&(t.push(i.i/n|0),t.push(r.i/n|0),t.push(a.i/n|0),ru(r),ru(r.next),r=e=a),r=r.next}while(r!==e);return Al(r)}function Fl(e,t,n,r,i,a){let o=e;do{let e=o.next.next;for(;e!==o.prev;){if(o.i!==e.i&&Kl(o,e)){let s=tu(o,e);o=Al(o,o.next),s=Al(s,s.next),jl(o,t,n,r,i,a,0),jl(s,t,n,r,i,a,0);return}e=e.next}o=o.next}while(o!==e)}function Il(e,t,n,r){let i=[],a,o,s,c,l;for(a=0,o=t.length;a<o;a++)s=t[a]*r,c=a<o-1?t[a+1]*r:e.length,l=kl(e,s,c,r,!1),l===l.next&&(l.steiner=!0),i.push(Wl(l));for(i.sort(Ll),a=0;a<i.length;a++)n=Rl(i[a],n);return n}function Ll(e,t){return e.x-t.x}function Rl(e,t){let n=zl(e,t);if(!n)return t;let r=tu(n,e);return Al(r,r.next),Al(n,n.next)}function zl(e,t){let n=t,r=-1/0,i,a=e.x,o=e.y;do{if(o<=n.y&&o>=n.next.y&&n.next.y!==n.y){let e=n.x+(o-n.y)*(n.next.x-n.x)/(n.next.y-n.y);if(e<=a&&e>r&&(r=e,i=n.x<n.next.x?n:n.next,e===a))return i}n=n.next}while(n!==t);if(!i)return null;let s=i,c=i.x,l=i.y,u=1/0,d;n=i;do a>=n.x&&n.x>=c&&a!==n.x&&Gl(o<l?a:r,o,c,l,o<l?r:a,o,n.x,n.y)&&(d=Math.abs(o-n.y)/(a-n.x),$l(n,e)&&(d<u||d===u&&(n.x>i.x||n.x===i.x&&Bl(i,n)))&&(i=n,u=d)),n=n.next;while(n!==s);return i}function Bl(e,t){return ql(e.prev,e,t.prev)<0&&ql(t.next,e,e.next)<0}function Vl(e,t,n,r){let i=e;do i.z===0&&(i.z=Ul(i.x,i.y,t,n,r)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==e);i.prevZ.nextZ=null,i.prevZ=null,Hl(i)}function Hl(e){let t,n,r,i,a,o,s,c,l=1;do{for(n=e,e=null,a=null,o=0;n;){for(o++,r=n,s=0,t=0;t<l&&(s++,r=r.nextZ,r);t++);for(c=l;s>0||c>0&&r;)s!==0&&(c===0||!r||n.z<=r.z)?(i=n,n=n.nextZ,s--):(i=r,r=r.nextZ,c--),a?a.nextZ=i:e=i,i.prevZ=a,a=i;n=r}a.nextZ=null,l*=2}while(o>1);return e}function Ul(e,t,n,r,i){return e=(e-n)*i|0,t=(t-r)*i|0,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,e|t<<1}function Wl(e){let t=e,n=e;do(t.x<n.x||t.x===n.x&&t.y<n.y)&&(n=t),t=t.next;while(t!==e);return n}function Gl(e,t,n,r,i,a,o,s){return(i-o)*(t-s)>=(e-o)*(a-s)&&(e-o)*(r-s)>=(n-o)*(t-s)&&(n-o)*(a-s)>=(i-o)*(r-s)}function Kl(e,t){return e.next.i!==t.i&&e.prev.i!==t.i&&!Ql(e,t)&&($l(e,t)&&$l(t,e)&&eu(e,t)&&(ql(e.prev,e,t.prev)||ql(e,t.prev,t))||Jl(e,t)&&ql(e.prev,e,e.next)>0&&ql(t.prev,t,t.next)>0)}function ql(e,t,n){return(t.y-e.y)*(n.x-t.x)-(t.x-e.x)*(n.y-t.y)}function Jl(e,t){return e.x===t.x&&e.y===t.y}function Yl(e,t,n,r){let i=Zl(ql(e,t,n)),a=Zl(ql(e,t,r)),o=Zl(ql(n,r,e)),s=Zl(ql(n,r,t));return!!(i!==a&&o!==s||i===0&&Xl(e,n,t)||a===0&&Xl(e,r,t)||o===0&&Xl(n,e,r)||s===0&&Xl(n,t,r))}function Xl(e,t,n){return t.x<=Math.max(e.x,n.x)&&t.x>=Math.min(e.x,n.x)&&t.y<=Math.max(e.y,n.y)&&t.y>=Math.min(e.y,n.y)}function Zl(e){return e>0?1:e<0?-1:0}function Ql(e,t){let n=e;do{if(n.i!==e.i&&n.next.i!==e.i&&n.i!==t.i&&n.next.i!==t.i&&Yl(n,n.next,e,t))return!0;n=n.next}while(n!==e);return!1}function $l(e,t){return ql(e.prev,e,e.next)<0?ql(e,t,e.next)>=0&&ql(e,e.prev,t)>=0:ql(e,t,e.prev)<0||ql(e,e.next,t)<0}function eu(e,t){let n=e,r=!1,i=(e.x+t.x)/2,a=(e.y+t.y)/2;do n.y>a!=n.next.y>a&&n.next.y!==n.y&&i<(n.next.x-n.x)*(a-n.y)/(n.next.y-n.y)+n.x&&(r=!r),n=n.next;while(n!==e);return r}function tu(e,t){let n=new iu(e.i,e.x,e.y),r=new iu(t.i,t.x,t.y),i=e.next,a=t.prev;return e.next=t,t.prev=e,n.next=i,i.prev=n,r.next=n,n.prev=r,a.next=r,r.prev=a,r}function nu(e,t,n,r){let i=new iu(e,t,n);return r?(i.next=r.next,i.prev=r,r.next.prev=i,r.next=i):(i.prev=i,i.next=i),i}function ru(e){e.next.prev=e.prev,e.prev.next=e.next,e.prevZ&&(e.prevZ.nextZ=e.nextZ),e.nextZ&&(e.nextZ.prevZ=e.prevZ)}function iu(e,t,n){this.i=e,this.x=t,this.y=n,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function au(e,t,n,r){let i=0;for(let a=t,o=n-r;a<n;a+=r)i+=(e[o]-e[a])*(e[a+1]+e[o+1]),o=a;return i}var ou=class e{static area(e){let t=e.length,n=0;for(let r=t-1,i=0;i<t;r=i++)n+=e[r].x*e[i].y-e[i].x*e[r].y;return n*.5}static isClockWise(t){return e.area(t)<0}static triangulateShape(e,t){let n=[],r=[],i=[];su(e),cu(n,e);let a=e.length;t.forEach(su);for(let e=0;e<t.length;e++)r.push(a),a+=t[e].length,cu(n,t[e]);let o=Ol.triangulate(n,r);for(let e=0;e<o.length;e+=3)i.push(o.slice(e,e+3));return i}};function su(e){let t=e.length;t>2&&e[t-1].equals(e[0])&&e.pop()}function cu(e,t){for(let n=0;n<t.length;n++)e.push(t[n].x),e.push(t[n].y)}var lu=class e extends ki{constructor(e=new Dl([new V(.5,.5),new V(-.5,.5),new V(-.5,-.5),new V(.5,-.5)]),t={}){super(),this.type=`ExtrudeGeometry`,this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,r=[],i=[];for(let t=0,n=e.length;t<n;t++){let n=e[t];a(n)}this.setAttribute(`position`,new K(r,3)),this.setAttribute(`uv`,new K(i,2)),this.computeVertexNormals();function a(e){let a=[],o=t.curveSegments===void 0?12:t.curveSegments,s=t.steps===void 0?1:t.steps,c=t.depth===void 0?1:t.depth,l=t.bevelEnabled===void 0||t.bevelEnabled,u=t.bevelThickness===void 0?.2:t.bevelThickness,d=t.bevelSize===void 0?u-.1:t.bevelSize,f=t.bevelOffset===void 0?0:t.bevelOffset,p=t.bevelSegments===void 0?3:t.bevelSegments,m=t.extrudePath,h=t.UVGenerator===void 0?uu:t.UVGenerator,g,_=!1,v,y,b,x;m&&(g=m.getSpacedPoints(s),_=!0,l=!1,v=m.computeFrenetFrames(s,!1),y=new W,b=new W,x=new W),l||(p=0,u=0,d=0,f=0);let S=e.extractPoints(o),C=S.shape,w=S.holes;if(!ou.isClockWise(C)){C=C.reverse();for(let e=0,t=w.length;e<t;e++){let t=w[e];ou.isClockWise(t)&&(w[e]=t.reverse())}}let T=ou.triangulateShape(C,w),E=C;for(let e=0,t=w.length;e<t;e++){let t=w[e];C=C.concat(t)}function D(e,t,n){return t||console.error(`THREE.ExtrudeGeometry: vec does not exist`),e.clone().addScaledVector(t,n)}let O=C.length,k=T.length;function A(e,t,n){let r,i,a,o=e.x-t.x,s=e.y-t.y,c=n.x-e.x,l=n.y-e.y,u=o*o+s*s,d=o*l-s*c;if(Math.abs(d)>2**-52){let d=Math.sqrt(u),f=Math.sqrt(c*c+l*l),p=t.x-s/d,m=t.y+o/d,h=n.x-l/f,g=n.y+c/f,_=((h-p)*l-(g-m)*c)/(o*l-s*c);r=p+o*_-e.x,i=m+s*_-e.y;let v=r*r+i*i;if(v<=2)return new V(r,i);a=Math.sqrt(v/2)}else{let e=!1;o>2**-52?c>2**-52&&(e=!0):o<-(2**-52)?c<-(2**-52)&&(e=!0):Math.sign(s)===Math.sign(l)&&(e=!0),e?(r=-s,i=o,a=Math.sqrt(u)):(r=o,i=s,a=Math.sqrt(u/2))}return new V(r/a,i/a)}let j=[];for(let e=0,t=E.length,n=t-1,r=e+1;e<t;e++,n++,r++)n===t&&(n=0),r===t&&(r=0),j[e]=A(E[e],E[n],E[r]);let ee=[],te,ne=j.concat();for(let e=0,t=w.length;e<t;e++){let t=w[e];te=[];for(let e=0,n=t.length,r=n-1,i=e+1;e<n;e++,r++,i++)r===n&&(r=0),i===n&&(i=0),te[e]=A(t[e],t[r],t[i]);ee.push(te),ne=ne.concat(te)}for(let e=0;e<p;e++){let t=e/p,n=u*Math.cos(t*Math.PI/2),r=d*Math.sin(t*Math.PI/2)+f;for(let e=0,t=E.length;e<t;e++){let t=D(E[e],j[e],r);oe(t.x,t.y,-n)}for(let e=0,t=w.length;e<t;e++){let t=w[e];te=ee[e];for(let e=0,i=t.length;e<i;e++){let i=D(t[e],te[e],r);oe(i.x,i.y,-n)}}}let re=d+f;for(let e=0;e<O;e++){let t=l?D(C[e],ne[e],re):C[e];_?(b.copy(v.normals[0]).multiplyScalar(t.x),y.copy(v.binormals[0]).multiplyScalar(t.y),x.copy(g[0]).add(b).add(y),oe(x.x,x.y,x.z)):oe(t.x,t.y,0)}for(let e=1;e<=s;e++)for(let t=0;t<O;t++){let n=l?D(C[t],ne[t],re):C[t];_?(b.copy(v.normals[e]).multiplyScalar(n.x),y.copy(v.binormals[e]).multiplyScalar(n.y),x.copy(g[e]).add(b).add(y),oe(x.x,x.y,x.z)):oe(n.x,n.y,c/s*e)}for(let e=p-1;e>=0;e--){let t=e/p,n=u*Math.cos(t*Math.PI/2),r=d*Math.sin(t*Math.PI/2)+f;for(let e=0,t=E.length;e<t;e++){let t=D(E[e],j[e],r);oe(t.x,t.y,c+n)}for(let e=0,t=w.length;e<t;e++){let t=w[e];te=ee[e];for(let e=0,i=t.length;e<i;e++){let i=D(t[e],te[e],r);_?oe(i.x,i.y+g[s-1].y,g[s-1].x+n):oe(i.x,i.y,c+n)}}}M(),ie();function M(){let e=r.length/3;if(l){let e=0,t=O*e;for(let e=0;e<k;e++){let n=T[e];se(n[2]+t,n[1]+t,n[0]+t)}e=s+p*2,t=O*e;for(let e=0;e<k;e++){let n=T[e];se(n[0]+t,n[1]+t,n[2]+t)}}else{for(let e=0;e<k;e++){let t=T[e];se(t[2],t[1],t[0])}for(let e=0;e<k;e++){let t=T[e];se(t[0]+O*s,t[1]+O*s,t[2]+O*s)}}n.addGroup(e,r.length/3-e,0)}function ie(){let e=r.length/3,t=0;ae(E,t),t+=E.length;for(let e=0,n=w.length;e<n;e++){let n=w[e];ae(n,t),t+=n.length}n.addGroup(e,r.length/3-e,1)}function ae(e,t){let n=e.length;for(;--n>=0;){let r=n,i=n-1;i<0&&(i=e.length-1);for(let e=0,n=s+p*2;e<n;e++){let n=O*e,a=O*(e+1);ce(t+r+n,t+i+n,t+i+a,t+r+a)}}}function oe(e,t,n){a.push(e),a.push(t),a.push(n)}function se(e,t,i){le(e),le(t),le(i);let a=r.length/3,o=h.generateTopUV(n,r,a-3,a-2,a-1);N(o[0]),N(o[1]),N(o[2])}function ce(e,t,i,a){le(e),le(t),le(a),le(t),le(i),le(a);let o=r.length/3,s=h.generateSideWallUV(n,r,o-6,o-3,o-2,o-1);N(s[0]),N(s[1]),N(s[3]),N(s[1]),N(s[2]),N(s[3])}function le(e){r.push(a[e*3+0]),r.push(a[e*3+1]),r.push(a[e*3+2])}function N(e){i.push(e.x),i.push(e.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return du(t,n,e)}static fromJSON(t,n){let r=[];for(let e=0,i=t.shapes.length;e<i;e++){let i=n[t.shapes[e]];r.push(i)}let i=t.options.extrudePath;return i!==void 0&&(t.options.extrudePath=new yl[i.type]().fromJSON(i)),new e(r,t.options)}},uu={generateTopUV:function(e,t,n,r,i){let a=t[n*3],o=t[n*3+1],s=t[r*3],c=t[r*3+1],l=t[i*3],u=t[i*3+1];return[new V(a,o),new V(s,c),new V(l,u)]},generateSideWallUV:function(e,t,n,r,i,a){let o=t[n*3],s=t[n*3+1],c=t[n*3+2],l=t[r*3],u=t[r*3+1],d=t[r*3+2],f=t[i*3],p=t[i*3+1],m=t[i*3+2],h=t[a*3],g=t[a*3+1],_=t[a*3+2];return Math.abs(s-u)<Math.abs(o-l)?[new V(o,1-c),new V(l,1-d),new V(f,1-m),new V(h,1-_)]:[new V(s,1-c),new V(u,1-d),new V(p,1-m),new V(g,1-_)]}};function du(e,t,n){if(n.shapes=[],Array.isArray(e))for(let t=0,r=e.length;t<r;t++){let r=e[t];n.shapes.push(r.uuid)}else n.shapes.push(e.uuid);return n.options=Object.assign({},t),t.extrudePath!==void 0&&(n.options.extrudePath=t.extrudePath.toJSON()),n}var fu=class e extends Tl{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,r=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1];super(r,[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1],e,t),this.type=`IcosahedronGeometry`,this.parameters={radius:e,detail:t}}static fromJSON(t){return new e(t.radius,t.detail)}},pu=class e extends Tl{constructor(e=1,t=0){super([1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2],e,t),this.type=`OctahedronGeometry`,this.parameters={radius:e,detail:t}}static fromJSON(t){return new e(t.radius,t.detail)}},mu=class e extends ki{constructor(e=.5,t=1,n=32,r=1,i=0,a=Math.PI*2){super(),this.type=`RingGeometry`,this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:r,thetaStart:i,thetaLength:a},n=Math.max(3,n),r=Math.max(1,r);let o=[],s=[],c=[],l=[],u=e,d=(t-e)/r,f=new W,p=new V;for(let e=0;e<=r;e++){for(let e=0;e<=n;e++){let r=i+e/n*a;f.x=u*Math.cos(r),f.y=u*Math.sin(r),s.push(f.x,f.y,f.z),c.push(0,0,1),p.x=(f.x/t+1)/2,p.y=(f.y/t+1)/2,l.push(p.x,p.y)}u+=d}for(let e=0;e<r;e++){let t=e*(n+1);for(let e=0;e<n;e++){let r=e+t,i=r,a=r+n+1,s=r+n+2,c=r+1;o.push(i,a,c),o.push(a,s,c)}}this.setIndex(o),this.setAttribute(`position`,new K(s,3)),this.setAttribute(`normal`,new K(c,3)),this.setAttribute(`uv`,new K(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}},hu=class e extends ki{constructor(e=1,t=32,n=16,r=0,i=Math.PI*2,a=0,o=Math.PI){super(),this.type=`SphereGeometry`,this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:r,phiLength:i,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let s=Math.min(a+o,Math.PI),c=0,l=[],u=new W,d=new W,f=[],p=[],m=[],h=[];for(let f=0;f<=n;f++){let g=[],_=f/n,v=0;f===0&&a===0?v=.5/t:f===n&&s===Math.PI&&(v=-.5/t);for(let n=0;n<=t;n++){let s=n/t;u.x=-e*Math.cos(r+s*i)*Math.sin(a+_*o),u.y=e*Math.cos(a+_*o),u.z=e*Math.sin(r+s*i)*Math.sin(a+_*o),p.push(u.x,u.y,u.z),d.copy(u).normalize(),m.push(d.x,d.y,d.z),h.push(s+v,1-_),g.push(c++)}l.push(g)}for(let e=0;e<n;e++)for(let r=0;r<t;r++){let t=l[e][r+1],i=l[e][r],o=l[e+1][r],c=l[e+1][r+1];(e!==0||a>0)&&f.push(t,i,c),(e!==n-1||s<Math.PI)&&f.push(i,o,c)}this.setIndex(f),this.setAttribute(`position`,new K(p,3)),this.setAttribute(`normal`,new K(m,3)),this.setAttribute(`uv`,new K(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}},gu=class e extends ki{constructor(e=1,t=.4,n=12,r=48,i=Math.PI*2){super(),this.type=`TorusGeometry`,this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:r,arc:i},n=Math.floor(n),r=Math.floor(r);let a=[],o=[],s=[],c=[],l=new W,u=new W,d=new W;for(let a=0;a<=n;a++)for(let f=0;f<=r;f++){let p=f/r*i,m=a/n*Math.PI*2;u.x=(e+t*Math.cos(m))*Math.cos(p),u.y=(e+t*Math.cos(m))*Math.sin(p),u.z=t*Math.sin(m),o.push(u.x,u.y,u.z),l.x=e*Math.cos(p),l.y=e*Math.sin(p),d.subVectors(u,l).normalize(),s.push(d.x,d.y,d.z),c.push(f/r),c.push(a/n)}for(let e=1;e<=n;e++)for(let t=1;t<=r;t++){let n=(r+1)*e+t-1,i=(r+1)*(e-1)+t-1,o=(r+1)*(e-1)+t,s=(r+1)*e+t;a.push(n,i,s),a.push(i,o,s)}this.setIndex(a),this.setAttribute(`position`,new K(o,3)),this.setAttribute(`normal`,new K(s,3)),this.setAttribute(`uv`,new K(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}},_u=class e extends ki{constructor(e=new _l(new W(-1,-1,0),new W(-1,1,0),new W(1,1,0)),t=64,n=1,r=8,i=!1){super(),this.type=`TubeGeometry`,this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:r,closed:i};let a=e.computeFrenetFrames(t,i);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;let o=new W,s=new W,c=new V,l=new W,u=[],d=[],f=[],p=[];m(),this.setIndex(p),this.setAttribute(`position`,new K(u,3)),this.setAttribute(`normal`,new K(d,3)),this.setAttribute(`uv`,new K(f,2));function m(){for(let e=0;e<t;e++)h(e);h(i===!1?t:0),_(),g()}function h(i){l=e.getPointAt(i/t,l);let c=a.normals[i],f=a.binormals[i];for(let e=0;e<=r;e++){let t=e/r*Math.PI*2,i=Math.sin(t),a=-Math.cos(t);s.x=a*c.x+i*f.x,s.y=a*c.y+i*f.y,s.z=a*c.z+i*f.z,s.normalize(),d.push(s.x,s.y,s.z),o.x=l.x+n*s.x,o.y=l.y+n*s.y,o.z=l.z+n*s.z,u.push(o.x,o.y,o.z)}}function g(){for(let e=1;e<=t;e++)for(let t=1;t<=r;t++){let n=(r+1)*(e-1)+(t-1),i=(r+1)*e+(t-1),a=(r+1)*e+t,o=(r+1)*(e-1)+t;p.push(n,i,o),p.push(i,a,o)}}function _(){for(let e=0;e<=t;e++)for(let n=0;n<=r;n++)c.x=e/t,c.y=n/r,f.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(t){return new e(new yl[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}},vu=class extends Zi{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type=`RawShaderMaterial`}},yu=class extends hi{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:``},this.type=`MeshStandardMaterial`,this.color=new G(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new G(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=It,this.normalScale=new V(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new jr,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:``},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},bu=class extends Jr{constructor(e,t=1){super(),this.isLight=!0,this.type=`Light`,this.color=new G(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}},xu=class extends bu{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type=`HemisphereLight`,this.position.copy(Jr.DEFAULT_UP),this.updateMatrix(),this.groundColor=new G(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},Su=new xr,Cu=new W,wu=new W,Tu=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new V(512,512),this.map=null,this.mapPass=null,this.matrix=new xr,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ma,this._frameExtents=new V(1,1),this._viewportCount=1,this._viewports=[new Bn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;Cu.setFromMatrixPosition(e.matrixWorld),t.position.copy(Cu),wu.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(wu),t.updateMatrixWorld(),Su.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Su),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Su)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Eu=class extends Tu{constructor(){super(new Oa(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Du=class extends bu{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type=`DirectionalLight`,this.position.copy(Jr.DEFAULT_UP),this.updateMatrix(),this.target=new Jr,this.shadow=new Eu}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},Ou=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=ku(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=ku();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}};function ku(){return performance.now()}typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`register`,{detail:{revision:r}})),typeof window<`u`&&(window.__THREE__?console.warn(`WARNING: Multiple instances of Three.js being imported.`):window.__THREE__=r);var Au={name:`CopyShader`,uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`},ju=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error(`THREE.Pass: .render() must be implemented in derived pass.`)}dispose(){}},Mu=new Oa(-1,1,1,-1,0,1),Nu=new class extends ki{constructor(){super(),this.setAttribute(`position`,new K([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute(`uv`,new K([0,2,0,0,2,0],2))}},Pu=class{constructor(e){this._mesh=new q(Nu,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,Mu)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}},Fu=class extends ju{constructor(e,t){super(),this.textureID=t===void 0?`tDiffuse`:t,e instanceof Zi?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Ji.clone(e.uniforms),this.material=new Zi({name:e.name===void 0?`unspecified`:e.name,defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new Pu(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}},Iu=class extends ju{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){let r=e.getContext(),i=e.state;i.buffers.color.setMask(!1),i.buffers.depth.setMask(!1),i.buffers.color.setLocked(!0),i.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),i.buffers.stencil.setTest(!0),i.buffers.stencil.setOp(r.REPLACE,r.REPLACE,r.REPLACE),i.buffers.stencil.setFunc(r.ALWAYS,a,4294967295),i.buffers.stencil.setClear(o),i.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),i.buffers.color.setLocked(!1),i.buffers.depth.setLocked(!1),i.buffers.color.setMask(!0),i.buffers.depth.setMask(!0),i.buffers.stencil.setLocked(!1),i.buffers.stencil.setFunc(r.EQUAL,1,4294967295),i.buffers.stencil.setOp(r.KEEP,r.KEEP,r.KEEP),i.buffers.stencil.setLocked(!0)}},Lu=class extends ju{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}},Ru=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let n=e.getSize(new V);this._width=n.width,this._height=n.height,t=new Hn(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:ze}),t.texture.name=`EffectComposer.rt1`}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name=`EffectComposer.rt2`,this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Fu(Au),this.copyPass.material.blending=p,this.clock=new Ou}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());let t=this.renderer.getRenderTarget(),n=!1;for(let t=0,r=this.passes.length;t<r;t++){let r=this.passes[t];if(r.enabled!==!1){if(r.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(t),r.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),r.needsSwap){if(n){let t=this.renderer.getContext(),n=this.renderer.state.buffers.stencil;n.setFunc(t.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),n.setFunc(t.EQUAL,1,4294967295)}this.swapBuffers()}Iu!==void 0&&(r instanceof Iu?n=!0:r instanceof Lu&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new V);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let n=this._width*this._pixelRatio,r=this._height*this._pixelRatio;this.renderTarget1.setSize(n,r),this.renderTarget2.setSize(n,r);for(let e=0;e<this.passes.length;e++)this.passes[e].setSize(n,r)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}},zu=class extends ju{constructor(e,t,n=null,r=null,i=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=r,this.clearAlpha=i,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new G}render(e,t,n){let r=e.autoClear;e.autoClear=!1;let i,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(i=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==1&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(i),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),e.autoClear=r}},Bu={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new G(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`},Vu=class e extends ju{constructor(e,t,n,r){super(),this.strength=t===void 0?1:t,this.radius=n,this.threshold=r,this.resolution=e===void 0?new V(256,256):new V(e.x,e.y),this.clearColor=new G(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let i=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new Hn(i,a,{type:ze}),this.renderTargetBright.texture.name=`UnrealBloomPass.bright`,this.renderTargetBright.texture.generateMipmaps=!1;for(let e=0;e<this.nMips;e++){let t=new Hn(i,a,{type:ze});t.texture.name=`UnrealBloomPass.h`+e,t.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(t);let n=new Hn(i,a,{type:ze});n.texture.name=`UnrealBloomPass.v`+e,n.texture.generateMipmaps=!1,this.renderTargetsVertical.push(n),i=Math.round(i/2),a=Math.round(a/2)}let o=Bu;this.highPassUniforms=Ji.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=r,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Zi({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];let s=[3,5,7,9,11];i=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let e=0;e<this.nMips;e++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(s[e])),this.separableBlurMaterials[e].uniforms.invSize.value=new V(1/i,1/a),i=Math.round(i/2),a=Math.round(a/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new W(1,1,1),new W(1,1,1),new W(1,1,1),new W(1,1,1),new W(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;let l=Au;this.copyUniforms=Ji.clone(l.uniforms),this.blendMaterial=new Zi({uniforms:this.copyUniforms,vertexShader:l.vertexShader,fragmentShader:l.fragmentShader,blending:h,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new G,this.oldClearAlpha=1,this.basic=new gi,this.fsQuad=new Pu(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),r=Math.round(t/2);this.renderTargetBright.setSize(n,r);for(let e=0;e<this.nMips;e++)this.renderTargetsHorizontal[e].setSize(n,r),this.renderTargetsVertical[e].setSize(n,r),this.separableBlurMaterials[e].uniforms.invSize.value=new V(1/n,1/r),n=Math.round(n/2),r=Math.round(r/2)}render(t,n,r,i,a){t.getClearColor(this._oldClearColor),this.oldClearAlpha=t.getClearAlpha();let o=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),a&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=r.texture,t.setRenderTarget(null),t.clear(),this.fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=r.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this.fsQuad.render(t);let s=this.renderTargetBright;for(let n=0;n<this.nMips;n++)this.fsQuad.material=this.separableBlurMaterials[n],this.separableBlurMaterials[n].uniforms.colorTexture.value=s.texture,this.separableBlurMaterials[n].uniforms.direction.value=e.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[n]),t.clear(),this.fsQuad.render(t),this.separableBlurMaterials[n].uniforms.colorTexture.value=this.renderTargetsHorizontal[n].texture,this.separableBlurMaterials[n].uniforms.direction.value=e.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[n]),t.clear(),this.fsQuad.render(t),s=this.renderTargetsVertical[n];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this.fsQuad.render(t),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,a&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(r),this.fsQuad.render(t)),t.setClearColor(this._oldClearColor,this.oldClearAlpha),t.autoClear=o}getSeperableBlurMaterial(e){let t=[];for(let n=0;n<e;n++)t.push(.39894*Math.exp(-.5*n*n/(e*e))/e);return new Zi({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new V(.5,.5)},direction:{value:new V(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {
					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;
					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {
						float x = float(i);
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += (sample1 + sample2) * w;
						weightSum += 2.0 * w;
					}
					gl_FragColor = vec4(diffuseSum/weightSum, 1.0);
				}`})}getCompositeMaterial(e){return new Zi({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;
				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor(const in float factor) {
					float mirrorFactor = 1.2 - factor;
					return mix(factor, mirrorFactor, bloomRadius);
				}

				void main() {
					gl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) +
						lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) +
						lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) +
						lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) +
						lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );
				}`})}};Vu.BlurDirectionX=new V(1,0),Vu.BlurDirectionY=new V(0,1);var Hu={name:`OutputShader`,uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`
	
		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`},Uu=class extends ju{constructor(){super();let e=Hu;this.uniforms=Ji.clone(e.uniforms),this.material=new vu({name:e.name,uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader}),this.fsQuad=new Pu(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},U.getTransfer(this._outputColorSpace)===Wt&&(this.material.defines.SRGB_TRANSFER=``),this._toneMapping===_e?this.material.defines.LINEAR_TONE_MAPPING=``:this._toneMapping===ve?this.material.defines.REINHARD_TONE_MAPPING=``:this._toneMapping===P?this.material.defines.CINEON_TONE_MAPPING=``:this._toneMapping===ye?this.material.defines.ACES_FILMIC_TONE_MAPPING=``:this._toneMapping===I?this.material.defines.AGX_TONE_MAPPING=``:this._toneMapping===L&&(this.material.defines.NEUTRAL_TONE_MAPPING=``),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}},Wu={KeyW:`accel`,ArrowUp:`accel`,KeyS:`brake`,ArrowDown:`brake`,KeyA:`left`,ArrowLeft:`left`,KeyD:`right`,ArrowRight:`right`,ShiftLeft:`drift`,ShiftRight:`drift`,Space:`item`,KeyE:`item`,KeyQ:`look_back`,KeyR:`reset`,KeyP:`pause`,Escape:`pause`},Gu=[`accel`,`brake`,`left`,`right`,`drift`,`item`,`look_back`,`reset`,`pause`],Ku=class{constructor(){n(this,`held`,new Set),n(this,`edge`,new Set),n(this,`releasedEdge`,new Set),n(this,`pointerAccel`,!1),n(this,`interacted`,!1),n(this,`captureUI`,!1),n(this,`unlockCbs`,[]),n(this,`onKeyDown`,e=>{let t=Wu[e.code];if(this.interacted=!0,t){e.preventDefault(),this.held.has(t)||(this.held.add(t),this.edge.add(t));return}(e.code===`Space`||e.code.startsWith(`Arrow`))&&e.preventDefault()}),n(this,`onKeyUp`,e=>{let t=Wu[e.code];t&&(e.preventDefault(),this.held.delete(t)&&this.releasedEdge.add(t))}),n(this,`onBlur`,()=>{this.held.clear(),this.edge.clear(),this.pointerAccel=!1}),n(this,`onVisibility`,()=>{document.hidden&&this.onBlur()}),n(this,`onPointerDown`,e=>{this.interacted=!0,e.button===0&&(this.pointerAccel=!0);for(let e of this.unlockCbs)e()}),n(this,`onPointerUp`,()=>{this.pointerAccel=!1})}onFirstInteraction(e){this.interacted?e():this.unlockCbs.push(e)}attach(e){window.addEventListener(`keydown`,this.onKeyDown,{passive:!1}),window.addEventListener(`keyup`,this.onKeyUp,{passive:!1}),window.addEventListener(`blur`,this.onBlur),document.addEventListener(`visibilitychange`,this.onVisibility),window.addEventListener(`pointerdown`,this.onPointerDown),window.addEventListener(`pointerup`,this.onPointerUp),window.addEventListener(`pointercancel`,this.onPointerUp),e.addEventListener(`contextmenu`,e=>e.preventDefault())}detach(){window.removeEventListener(`keydown`,this.onKeyDown),window.removeEventListener(`keyup`,this.onKeyUp),window.removeEventListener(`blur`,this.onBlur),document.removeEventListener(`visibilitychange`,this.onVisibility),window.removeEventListener(`pointerdown`,this.onPointerDown),window.removeEventListener(`pointerup`,this.onPointerUp),window.removeEventListener(`pointercancel`,this.onPointerUp)}raw(e){return this.held.has(e)}down(e){return this.captureUI&&e!==`pause`?!1:this.held.has(e)}pressed(e){return this.captureUI&&e!==`pause`?!1:this.edge.has(e)}released(e){return this.captureUI&&e!==`pause`?!1:this.releasedEdge.has(e)}steerAxis(){return+!!this.down(`right`)-!!this.down(`left`)}endStep(){this.edge.clear(),this.releasedEdge.clear()}clearHeld(){this.held.clear(),this.edge.clear(),this.releasedEdge.clear(),this.pointerAccel=!1}static allActions(){return Gu}},qu=Math.PI*2;function Ju(e,t,n){return e<t?t:e>n?n:e}function X(e){return e<0?0:e>1?1:e}function Yu(e,t,n){return e+(t-e)*n}function Xu(e){let t=X(e);return t*t*(3-2*t)}function Z(e,t,n,r){return t+(e-t)*Math.exp(-n*r)}function Zu(e){let t=e%qu;return t>Math.PI&&(t-=qu),t<=-Math.PI&&(t+=qu),t}function Qu(e){let t=e>>>0;return function(){t=t+1831565813>>>0;let e=t;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}}function $u(e){let t=Math.sin(e*127.1)*43758.5453123;return t-Math.floor(t)}function ed(e,t){let n=Math.floor(e),r=Math.floor(t),i=e-n,a=t-r,o=i*i*(3-2*i),s=a*a*(3-2*a),c=$u(n*57+r*113),l=$u((n+1)*57+r*113),u=$u(n*57+(r+1)*113),d=$u((n+1)*57+(r+1)*113);return c+(l-c)*o+(u-c)*s+(c-l-u+d)*o*s}function td(e,t,n=4,r=2.03,i=.5){let a=.5,o=1,s=0,c=0;for(let l=0;l<n;l++)s+=a*ed(e*o,t*o),c+=a,a*=i,o*=r;return s/c}var nd=`zephyr-reef-settings-v1`,rd={quality:`high`,master:.85,music:.55,sfx:.9,muted:!1,cameraShake:1,lastKart:`nix`};function id(){try{let e=localStorage.getItem(nd);if(!e)return{...rd};let t=JSON.parse(e);return{...rd,...t}}catch{return{...rd}}}function ad(e){try{localStorage.setItem(nd,JSON.stringify(e))}catch{}}function od(e,t){switch(e){case`low`:return{level:e,pixelRatioCap:1,shadows:!0,shadowMapSize:1024,bloom:.26,sceneryDensity:.35,particleBudget:700,fancyWater:!1,antialias:!1,anisotropy:2};case`medium`:return{level:e,pixelRatioCap:Math.min(1.35,t),shadows:!0,shadowMapSize:2048,bloom:.42,sceneryDensity:.7,particleBudget:1400,fancyWater:!0,antialias:!0,anisotropy:4};default:return{level:`high`,pixelRatioCap:Math.min(2,t),shadows:!0,shadowMapSize:2048,bloom:.5,sceneryDensity:1,particleBudget:2400,fancyWater:!0,antialias:!0,anisotropy:8}}}var sd=[{id:`nix`,name:`Nix Otterly`,tagline:`Surfed the reef before it had a road.`,archetype:`Wave-Runner`,driver:{primary:14262378,secondary:3065014,accent:16765286,body:`otter`,eye:731695,glow:.6},kart:{body:1618854,trim:15988464,glow:6746336,tyre:1316636,rim:16765286,shape:`pontoon`},stats:{speed:1.02,accel:1.06,handling:1.06,weight:.92}},{id:`bruno`,name:`Bruno Boulderknuckle`,tagline:`Stops for nobody. Mostly because he cannot.`,archetype:`Landslide`,driver:{primary:9277334,secondary:5922150,accent:16742938,body:`golem`,eye:16757575,glow:1.4},kart:{body:7172216,trim:4014152,glow:16742938,tyre:1053206,rim:12604970,shape:`chunky`},stats:{speed:1.1,accel:.88,handling:.86,weight:1.24}},{id:`sable`,name:`Sable Vex`,tagline:`Races the night shift. Never loses it.`,archetype:`Nightflyer`,driver:{primary:3878738,secondary:10320856,accent:8190463,body:`moth`,eye:12189519,glow:1.2},kart:{body:2827072,trim:12167144,glow:8190463,tyre:854804,rim:10320856,shape:`sleek`},stats:{speed:1.05,accel:1,handling:1.12,weight:.9}},{id:`zuzu`,name:`Zuzu Frill`,tagline:`Bounces off the scenery. On purpose.`,archetype:`Drifter`,driver:{primary:16751317,secondary:8120575,accent:16773544,body:`jelly`,eye:2757184,glow:1.8},kart:{body:15888308,trim:9234943,glow:16763376,tyre:1708064,rim:16773544,shape:`buggy`},stats:{speed:.94,accel:1.12,handling:1.1,weight:.86}},{id:`rustam`,name:`Rustam Cog`,tagline:`Built his kart. Twice. This is the third.`,archetype:`Tinkerer`,driver:{primary:13208383,secondary:7031332,accent:9109456,body:`automaton`,eye:9109456,glow:1.3},kart:{body:11892015,trim:4995620,glow:9109456,tyre:1446414,rim:15253881,shape:`buggy`},stats:{speed:1,accel:1.04,handling:.98,weight:1}},{id:`marlow`,name:`Marlow Reef`,tagline:`Retired pirate. Unretired for the trophy.`,archetype:`Corsair`,driver:{primary:5221978,secondary:15918788,accent:16765286,body:`frog`,eye:16731469,glow:.7},kart:{body:3112267,trim:15260064,glow:16765286,tyre:1315855,rim:15777866,shape:`chunky`},stats:{speed:1.06,accel:.96,handling:.96,weight:1.1}}];function cd(e){let t=sd.find(t=>t.id===e);if(!t)throw Error(`Unknown kart spec: ${e}`);return t}var ld=`
attribute float aSize;
attribute vec3 aColor;
attribute float aAlpha;
varying vec3 vColor;
varying float vAlpha;
void main() {
  vColor = aColor;
  vAlpha = aAlpha;
  vec4 mv = modelViewMatrix * vec4(position, 1.0);
  gl_PointSize = aSize * (420.0 / max(1.0, -mv.z));
  gl_Position = projectionMatrix * mv;
}
`,ud=`
varying vec3 vColor;
varying float vAlpha;
void main() {
  vec2 d = gl_PointCoord - 0.5;
  float r2 = dot(d, d) * 4.0;
  if (r2 > 1.0) discard;
  float a = (1.0 - r2);
  a *= a;
  gl_FragColor = vec4(vColor, a * vAlpha);
}
`,dd=`
varying vec3 vColor;
varying float vAlpha;
void main() {
  vec2 d = gl_PointCoord - 0.5;
  float r2 = dot(d, d) * 4.0;
  if (r2 > 1.0) discard;
  float a = smoothstep(1.0, 0.15, r2);
  gl_FragColor = vec4(vColor, a * vAlpha);
}
`,fd=new G,pd=class{constructor(e,t){n(this,`points`),n(this,`n`),n(this,`cursor`,0),n(this,`px`),n(this,`py`),n(this,`pz`),n(this,`vx`),n(this,`vy`),n(this,`vz`),n(this,`life`),n(this,`maxLife`),n(this,`size0`),n(this,`size1`),n(this,`grav`),n(this,`drag`),n(this,`cr`),n(this,`cg`),n(this,`cb`),n(this,`aPos`),n(this,`aSize`),n(this,`aColor`),n(this,`aAlpha`),this.n=e,this.px=new Float32Array(e),this.py=new Float32Array(e),this.pz=new Float32Array(e),this.vx=new Float32Array(e),this.vy=new Float32Array(e),this.vz=new Float32Array(e),this.life=new Float32Array(e),this.maxLife=new Float32Array(e),this.size0=new Float32Array(e),this.size1=new Float32Array(e),this.grav=new Float32Array(e),this.drag=new Float32Array(e),this.cr=new Float32Array(e),this.cg=new Float32Array(e),this.cb=new Float32Array(e),this.aPos=new Float32Array(e*3),this.aSize=new Float32Array(e),this.aColor=new Float32Array(e*3),this.aAlpha=new Float32Array(e);for(let t=0;t<e;t++)this.py[t]=-1e4,this.aSize[t]=0;let r=new ki;r.setAttribute(`position`,new yi(this.aPos,3)),r.setAttribute(`aSize`,new yi(this.aSize,1)),r.setAttribute(`aColor`,new yi(this.aColor,3)),r.setAttribute(`aAlpha`,new yi(this.aAlpha,1)),r.boundingSphere=null;let i=new Zi({vertexShader:ld,fragmentShader:t?ud:dd,transparent:!0,depthWrite:!1,depthTest:!0,blending:t?h:m});this.points=new Wc(r,i),this.points.frustumCulled=!1,this.points.renderOrder=10}emit(e,t,n,r,i,a,o,s,c,l,u,d){let f=this.cursor;this.cursor=(this.cursor+1)%this.n,this.px[f]=e,this.py[f]=t,this.pz[f]=n,this.vx[f]=r,this.vy[f]=i,this.vz[f]=a,this.life[f]=c,this.maxLife[f]=c,this.size0[f]=s,this.size1[f]=s*d,this.grav[f]=l,this.drag[f]=u,fd.setHex(o),this.cr[f]=fd.r,this.cg[f]=fd.g,this.cb[f]=fd.b;let p=f*3;this.aPos[p]=e,this.aPos[p+1]=t,this.aPos[p+2]=n,this.aColor[p]=fd.r,this.aColor[p+1]=fd.g,this.aColor[p+2]=fd.b,this.aSize[f]=s,this.aAlpha[f]=1}update(e){let t=this.n;for(let n=0;n<t;n++){let t=this.life[n];if(t<=0){this.aAlpha[n]!==0&&(this.aAlpha[n]=0);continue}if(t-=e,this.life[n]=t,t<=0){this.aAlpha[n]=0,this.aSize[n]=0;continue}let r=Math.exp(-this.drag[n]*e);this.vx[n]*=r,this.vy[n]=this.vy[n]*r-this.grav[n]*e,this.vz[n]*=r,this.px[n]+=this.vx[n]*e,this.py[n]+=this.vy[n]*e,this.pz[n]+=this.vz[n]*e;let i=n*3;this.aPos[i]=this.px[n],this.aPos[i+1]=this.py[n],this.aPos[i+2]=this.pz[n];let a=1-t/this.maxLife[n];this.aSize[n]=this.size0[n]+(this.size1[n]-this.size0[n])*a,this.aAlpha[n]=(1-a)*(1-a*.35)}let n=this.points.geometry;n.getAttribute(`position`).needsUpdate=!0,n.getAttribute(`aSize`).needsUpdate=!0,n.getAttribute(`aColor`).needsUpdate=!0,n.getAttribute(`aAlpha`).needsUpdate=!0}dispose(){this.points.geometry.dispose(),this.points.material.dispose()}},md=`
attribute float aBirth;
attribute float aStrength;
uniform float uTime;
uniform float uFade;
varying float vAlpha;
void main() {
  float age = uTime - aBirth;
  vAlpha = clamp(1.0 - age / uFade, 0.0, 1.0) * aStrength;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`,hd=`
varying float vAlpha;
uniform vec3 uColor;
void main() {
  if (vAlpha <= 0.001) discard;
  gl_FragColor = vec4(uColor, vAlpha);
}
`,gd=class{constructor(e,t){n(this,`mesh`),n(this,`maxQuads`),n(this,`cursor`,0),n(this,`time`,0),n(this,`pos`),n(this,`birth`),n(this,`strength`),n(this,`geo`),n(this,`mat`),n(this,`dirty`,!1),this.maxQuads=e;let r=e*4;this.pos=new Float32Array(r*3),this.birth=new Float32Array(r),this.strength=new Float32Array(r),this.birth.fill(-1e9);let i=new Uint32Array(e*6);for(let t=0;t<e;t++){let e=t*4,n=t*6;i[n]=e,i[n+1]=e+1,i[n+2]=e+2,i[n+3]=e,i[n+4]=e+2,i[n+5]=e+3}this.geo=new ki,this.geo.setAttribute(`position`,new yi(this.pos,3)),this.geo.setAttribute(`aBirth`,new yi(this.birth,1)),this.geo.setAttribute(`aStrength`,new yi(this.strength,1)),this.geo.setIndex(new yi(i,1)),this.geo.boundingSphere=null,this.mat=new Zi({vertexShader:md,fragmentShader:hd,uniforms:{uTime:{value:0},uFade:{value:t},uColor:{value:new G(856084)}},transparent:!0,depthWrite:!1,side:f,polygonOffset:!0,polygonOffsetFactor:-3,polygonOffsetUnits:-6}),this.mesh=new q(this.geo,this.mat),this.mesh.frustumCulled=!1,this.mesh.renderOrder=4}add(e,t,n,r,i,a,o,s){let c=r-e,l=a-n,u=Math.hypot(c,l);if(u<1e-4)return;c/=u,l/=u;let d=-l*o,f=c*o,p=this.cursor;this.cursor=(this.cursor+1)%this.maxQuads;let m=p*4,h=this.pos,g=m*3;h[g]=e+d,h[g+1]=t,h[g+2]=n+f,g+=3,h[g]=e-d,h[g+1]=t,h[g+2]=n-f,g+=3,h[g]=r-d,h[g+1]=i,h[g+2]=a-f,g+=3,h[g]=r+d,h[g+1]=i,h[g+2]=a+f;for(let e=0;e<4;e++)this.birth[m+e]=this.time,this.strength[m+e]=s;this.dirty=!0}update(e){this.time+=e,this.mat.uniforms.uTime.value=this.time,this.dirty&&(this.dirty=!1,this.geo.getAttribute(`position`).needsUpdate=!0,this.geo.getAttribute(`aBirth`).needsUpdate=!0,this.geo.getAttribute(`aStrength`).needsUpdate=!0)}clear(){this.birth.fill(-1e9),this.dirty=!0}dispose(){this.geo.dispose(),this.mat.dispose()}},_d=class{constructor(e,t){n(this,`group`,new hc),n(this,`sparks`),n(this,`smoke`),n(this,`skid`),n(this,`density`,1),n(this,`_v`,new W),this.scene=e;let r=t.particleBudget;this.sparks=new pd(Math.max(200,Math.floor(r*.45)),!0),this.smoke=new pd(Math.max(200,Math.floor(r*.55)),!1),this.skid=new gd(t.level===`low`?420:1100,9),this.density=t.level===`low`?.5:t.level===`medium`?.75:1,this.group.add(this.sparks.points,this.smoke.points,this.skid.mesh),e.add(this.group)}spark(e,t,n,r,i,a,o,s=.5,c=.5,l=6,u=1.2){this.density<1&&Math.random()>this.density||this.sparks.emit(e,t,n,r,i,a,o,s,c,l,u,.35)}puff(e,t,n,r,i,a,o,s=1.4,c=.9,l=2.4,u=-1.5,d=2.2){this.density<1&&Math.random()>this.density||this.smoke.emit(e,t,n,r,i,a,o,s,c,u,d,l)}exhaust(e,t,n,r,i,a){this.sparks.emit(e,t,n,r*(2+a*6)+(Math.random()-.5)*1.2,.5+Math.random()*1.1+a*1.1,i*(2+a*6)+(Math.random()-.5)*1.2,a>.55?9434879:16757575,a>.55?.42:.3,.16+a*.12,-1.2,3.8,.3)}boostTrail(e,t,n,r,i,a){this.sparks.emit(e+(Math.random()-.5)*.5,t+(Math.random()-.5)*.35,n+(Math.random()-.5)*.5,r*(9+Math.random()*9),1.2+Math.random()*2.2,i*(9+Math.random()*9),Math.random()<.35?16777215:a,.5+Math.random()*.3,.2+Math.random()*.16,-2,3.6,.35),Math.random()<.35&&this.smoke.emit(e,t,n,r*5+(Math.random()-.5)*2,1.2,i*5+(Math.random()-.5)*2,10217471,.9,.42,2,-2.5,2.8)}driftSmoke(e,t,n,r){this.smoke.emit(e,t,n+.1,(Math.random()-.5)*1.6,1.1+Math.random()*1.1,(Math.random()-.5)*1.6,r,1.1,.75,2.6,-1,2)}groundSpray(e,t,n,r,i,a){this.puff(e,t,n,r*3+(Math.random()-.5)*2.5,2.2+Math.random()*2.4,i*3+(Math.random()-.5)*2.5,a,.85,.6,2.2,7,1.6)}burst(e,t,n,r,i,a){let o=Math.max(6,Math.round(i*this.density));for(let i=0;i<o;i++){let s=i/o*Math.PI*2+Math.random()*.5,c=Math.random()*.9,l=a*(.5+Math.random()*.8);this.sparks.emit(e,t,n,Math.cos(s)*l,c*l*.8+1.5,Math.sin(s)*l,i%3==0?16777215:r,.7+Math.random()*.8,.42+Math.random()*.5,9,1.1,.3)}for(let r=0;r<Math.max(3,o>>2);r++){let r=Math.random()*Math.PI*2;this.smoke.emit(e,t,n,Math.cos(r)*3,2+Math.random()*2,Math.sin(r)*3,3816004,1.7,.9,3,-1.5,2)}}splash(e,t,n){for(let r=0;r<10;r++){let r=Math.random()*Math.PI*2;this.puff(e,t,n,Math.cos(r)*3,5+Math.random()*4,Math.sin(r)*3,14219263,1,.7,2,10,1.2)}}miniTurboBurst(e,t,n,r){for(let i=0;i<14;i++){let a=i/14*Math.PI*2;this.sparks.emit(e,t+.2,n,Math.cos(a)*8,1.6+Math.random(),Math.sin(a)*8,r,.75,.42,5,2.2,.3)}}skidMark(e,t,n,r,i,a,o,s){this.skid.add(e,t,n,r,i,a,o,s)}clearSkids(){this.skid.clear()}update(e){this.sparks.update(e),this.smoke.update(e),this.skid.update(e),this._v}dispose(){this.scene.remove(this.group),this.sparks.dispose(),this.smoke.dispose(),this.skid.dispose()}},vd=(e=>(e[e.Ground=0]=`Ground`,e[e.Bridge=1]=`Bridge`,e[e.Tunnel=2]=`Tunnel`,e))(vd||{}),yd=e=>e*Math.PI/180,bd=.3,xd=-14,Sd=2,Cd=3.5,wd=1.25,Td=0,Ed=.04,Dd=5.6,Od=9,kd=3,Ad=48;window.__ZEPHYR_TRACKS=[{name:`Coral Sanctuary`,sub:`Laguna Corallina`,ico:`🪸`,segs:[{k:`S`,len:183.7},{k:`A`,radius:95,sweep:-52},{k:`S`,len:50},{k:`A`,radius:65,sweep:46},{k:`S`,len:50},{k:`A`,radius:28,sweep:-125},{k:`S`,len:122.8},{k:`A`,radius:90,sweep:-34},{k:`S`,len:208.7},{k:`A`,radius:55,sweep:-42},{k:`S`,len:146.8},{k:`A`,radius:75,sweep:-60},{k:`S`,len:95.7},{k:`A`,radius:92,sweep:-93},{k:`S`,len:50}]},{name:`Abyssal Trench`,sub:`Fossa degli Abissi`,ico:`🌊`,segs:[{k:`S`,len:220},{k:`A`,radius:110,sweep:-75},{k:`S`,len:140},{k:`A`,radius:75,sweep:65},{k:`S`,len:120},{k:`A`,radius:100,sweep:-110},{k:`S`,len:200},{k:`A`,radius:65,sweep:-80},{k:`S`,len:110},{k:`A`,radius:90,sweep:-80}]},{name:`Sky Reef`,sub:`Arcipelago Celeste`,ico:`☁️`,segs:[{k:`S`,len:150},{k:`A`,radius:70,sweep:-90},{k:`S`,len:110},{k:`A`,radius:50,sweep:90},{k:`S`,len:90},{k:`A`,radius:40,sweep:-120},{k:`S`,len:180},{k:`A`,radius:60,sweep:-60},{k:`S`,len:130},{k:`A`,radius:80,sweep:-80},{k:`S`,len:60}]},{name:`Temple of Nix`,sub:`Il Tempio Sommerso`,ico:`🏛️`,segs:[{k:`S`,len:120},{k:`A`,radius:45,sweep:-100},{k:`S`,len:80},{k:`A`,radius:45,sweep:100},{k:`S`,len:140},{k:`A`,radius:35,sweep:-140},{k:`S`,len:160},{k:`A`,radius:60,sweep:-40},{k:`S`,len:100},{k:`A`,radius:75,sweep:-80}]}];var jd=Math.max(0,Math.min(3,parseInt(localStorage.getItem(`zephyr_track`)||`0`)));window.__CURRENT_TRACK_INDEX=jd,window.__ZEPHYR_THEMES=[{skyHorizon:[.46,.31,.23],skyMid:[.045,.27,.34],skyZenith:[.022,.045,.19],fogColor:7783112,fogDensity:.0011,sunDir:[-.64,.57,-.51],waterColor:969397,curbColor1:15620736,curbColor2:15986146,glowColor:61439,name:`Coral Sanctuary`},{skyHorizon:[.03,.06,.15],skyMid:[.01,.03,.09],skyZenith:[.005,.01,.04],fogColor:266527,fogDensity:.0018,sunDir:[-.3,.8,-.4],waterColor:70180,curbColor1:10027247,curbColor2:55542,glowColor:10027247,name:`Abyssal Trench`},{skyHorizon:[.82,.42,.15],skyMid:[.45,.18,.35],skyZenith:[.12,.05,.25],fogColor:9058328,fogDensity:95e-5,sunDir:[-.85,.35,-.38],waterColor:2263193,curbColor1:16746496,curbColor2:16770730,glowColor:16755200,name:`Sky Reef`},{skyHorizon:[.05,.25,.22],skyMid:[.02,.15,.18],skyZenith:[.01,.06,.1],fogColor:534562,fogDensity:.0015,sunDir:[-.5,.65,-.55],waterColor:13100,curbColor1:65450,curbColor2:13938487,glowColor:65450,name:`Temple of Nix`}],window.__ACTIVE_THEME=window.__ZEPHYR_THEMES[jd];var Md=window.__ZEPHYR_TRACKS[jd]?window.__ZEPHYR_TRACKS[jd].segs:window.__ZEPHYR_TRACKS[0].segs,Nd=[[[0,10],[.13,10],[.17,11.5],[.22,14.5],[.27,19],[.3,21],[.345,26],[.4,30.5],[.435,29],[.47,30],[.55,33.5],[.62,36],[.66,36],[.74,31],[.8,27],[.86,21],[.93,15],[.965,12.5],[1,10]],[[0,5],[.14,2],[.28,-14],[.42,-24],[.58,-28],[.72,-16],[.86,-4],[1,5]],[[0,22],[.16,34],[.32,48],[.48,54],[.64,49],[.8,36],[.92,26],[1,22]],[[0,12],[.18,16],[.34,4],[.5,-6],[.66,-2],[.82,8],[.94,14],[1,12]]],Pd=Nd[jd]||Nd[0],Fd=[[0,0],[.42,0],[.47,16],[.52,42],[.56,62],[.66,62],[.7,38],[.73,18],[.76,8],[.8,3],[.845,1.5],[.92,.5],[1,0]],Id=[[0,13.5],[.13,13],[.2,12.5],[.3,12],[.455,11.5],[.66,11.5],[.745,10.5],[.835,10.5],[.87,12],[.93,13],[1,13.5]],Ld=[[0,.3],[.14,1.2],[.28,.5],[.32,.6],[.42,.4],[.45,1.1],[.62,.9],[.72,.5],[.84,.9],[.9,.4],[.94,1.15],[1,.5]];function Rd(e,t){if(t<=e[0][0])return e[0][1];for(let n=1;n<e.length;n++)if(t<=e[n][0]){let[r,i]=e[n-1],[a,o]=e[n],s=(t-r)/Math.max(1e-9,a-r);return s=s*s*(3-2*s),i+(o-i)*s}return e[e.length-1][1]}function zd(e){return e>=.455&&e<=.737?vd.Bridge:e>=.745&&e<=.838?vd.Tunnel:vd.Ground}function Bd(e){let t=Math.PI/2,n=0,r=0,i=0,a=[],o=Md.reduce((e,t)=>e+(t.k===`S`?t.len:Math.abs(t.radius*yd(t.sweep))),0),s=()=>{a.push({x:n,z:r,u:i/o})};s();for(let o of Md)if(o.k===`S`){let c=Math.max(1,Math.round(o.len/e));for(let e=1;e<=c;e++)n=a[a.length-1].x+Math.cos(t)*(o.len/c),r=a[a.length-1].z+Math.sin(t)*(o.len/c),i+=o.len/c,s()}else{let e=yd(o.sweep),a=e>0?1:-1,c=Math.abs(o.radius*e),l=Math.max(2,Math.round(c/(o.radius*yd(20)))),u=n+o.radius*a*-Math.sin(t),d=r+o.radius*a*Math.cos(t);for(let f=1;f<=l;f++){let p=Math.abs(e)*f/l;a>0?(n=u+o.radius*Math.sin(t+p),r=d-o.radius*Math.cos(t+p)):(n=u-o.radius*Math.sin(t-p),r=d+o.radius*Math.cos(t-p)),i+=c/l,s()}t+=e}return{pts:a,total:o}}function Vd(e,t){let n=[],r=0;for(let t=0;t<e.length-1;t++){let i=Math.hypot(e[t+1].x-e[t].x,e[t+1].z-e[t].z);n.push(i),r+=i}let i=[],a=r/t,o=0,s=0;for(let r=0;r<t;r++){let c=r*a;for(;o<n.length-1&&s+n[o]<c;)s+=n[o],o++;let l=(c-s)/Math.max(n[o]??1,1e-9),u=e[o],d=e[o+1]??e[o];i.push({x:u.x+(d.x-u.x)*l,z:u.z+(d.z-u.z)*l,u:r/t})}return i}function Hd(){let{pts:e}=Bd(6),t=e[0].x-e[e.length-1].x,n=e[0].z-e[e.length-1].z,r=e.length-1;for(let i=0;i<=r;i++){let a=i/r;e[i].x+=t*a,e[i].z+=n*a}return Vd(e,Ad).map(e=>{let t=Rd(Pd,e.u);return{x:Math.round(e.x*10)/10,z:Math.round(e.z*10)/10,y:Math.round(t*10)/10,groundY:Math.round((t-Rd(Fd,e.u))*10)/10,bank:Math.round(Rd(Ld,e.u)*100)/100,halfWidth:Math.round(Rd(Id,e.u)*100)/100,kind:zd(e.u)}})}var Ud=Hd();function Q(e,t){let n=e*Ad;return{seg:(Math.floor(n)%Ad+Ad)%Ad,t:Math.round((n-Math.floor(n))*100)/100,lateral:t}}var Wd=[{...Q(.045,-4.6),length:16},{...Q(.045,0),length:16},{...Q(.045,4.6),length:16},{...Q(.4,0),length:14},{...Q(.53,-3.6),length:14},{...Q(.53,3.6),length:14},{...Q(.845,0),length:15}],Gd=[{...Q(.095,0),count:4,spread:15},{...Q(.235,0),count:3,spread:11},{...Q(.365,0),count:4,spread:14},{...Q(.5,0),count:3,spread:10},{...Q(.66,0),count:3,spread:10},{...Q(.79,0),count:3,spread:10},{...Q(.9,0),count:4,spread:14}],Kd=[{...Q(.055,-7.5),count:6,bow:7.5,spacing:6.5},{...Q(.16,8),count:5,bow:5.5,spacing:6.5},{...Q(.25,-6),count:6,bow:6,spacing:6},{...Q(.335,7),count:4,bow:4,spacing:6.5},{...Q(.45,-6.5),count:5,bow:5.5,spacing:6},{...Q(.52,0),count:6,bow:6.5,spacing:6.5},{...Q(.58,0),count:6,bow:6.5,spacing:6.5},{...Q(.7,-6),count:4,bow:4.5,spacing:6},{...Q(.78,6),count:4,bow:4.5,spacing:6},{...Q(.88,0),count:5,bow:6,spacing:6.5},{...Q(.95,0),count:5,bow:6,spacing:6.5}],qd=[{...Q(.005,0),kind:`arch`,scale:1},{...Q(.005,-24),kind:`beacon`,scale:1.1},{...Q(.115,-30),kind:`flora_cluster`,scale:1.1},{...Q(.19,30),kind:`floatisland`,scale:1.3},{...Q(.3,-34),kind:`arch`,scale:1.35},{...Q(.365,0),kind:`shell`,scale:1},{...Q(.42,34),kind:`rocks`,scale:1.2},{...Q(.47,-40),kind:`waterfall`,scale:1},{...Q(.545,-46),kind:`floatisland`,scale:1.6},{...Q(.56,0),kind:`arch`,scale:1.7},{...Q(.6,90),kind:`floatisland`,scale:2.2},{...Q(.65,-95),kind:`rocks`,scale:1.8},{...Q(.65,80),kind:`wreck`,scale:1},{...Q(.7,-60),kind:`waterfall`,scale:1.3},{...Q(.82,34),kind:`flora_cluster`,scale:1.3},{...Q(.88,-30),kind:`waterfall`,scale:1.1},{...Q(.94,32),kind:`beacon`,scale:.8},{...Q(.98,-28),kind:`flora_cluster`,scale:1}];function Jd(e,t,n){return Xu(n/55)*((td(e*.012,t*.012,4)-.43)*26+(td(e*.045,t*.045,3)-.5)*2.2)}function Yd(e,t,n,r){let i=r+Jd(e,t,n),a=Xu((n-45)/70);return a===0?i:Yu(i,2+(td(e*.0035+17,t*.0035-9,3)-.5)*52,a)}var Xd=new W(0,1,0),Zd=()=>({index:0,lateral:0,u:0,s:0,roadY:0,groundY:0,onRoad:!1}),Qd=class{constructor(e=Ud,t=100){n(this,`samples`,[]),n(this,`totalLength`),n(this,`startIndex`),n(this,`spacing`),n(this,`arc`),n(this,`subdivisions`),n(this,`nodeCount`),n(this,`cells`,new Map),n(this,`scratch`,Zd()),n(this,`queryWidth`,0),n(this,`startS`),this.nodeCount=e.length,this.subdivisions=Math.max(32,Math.floor(t));let r=e.map(e=>new W(e.x,e.y,e.z)),i=new tl(r,!0,`centripetal`),a=e.length*this.subdivisions;this.arc=new Float64Array(a+1);let o=i.getPoint(0),s=new W;for(let e=1;e<=a;e++)i.getPoint(e/a,s),this.arc[e]=this.arc[e-1]+o.distanceTo(s),o.copy(s);this.totalLength=this.arc[a];let c=Math.round(this.totalLength/1.2);this.spacing=this.totalLength/c;let l=new Float64Array(c),u=0;for(let t=0;t<c;t++){let n=t*this.spacing;for(;this.arc[u+1]<n;)u++;let o=(u+(n-this.arc[u])/(this.arc[u+1]-this.arc[u]))/a,s=o*e.length,d=Math.floor(s),f=s-d,p=e[(d-1+e.length)%e.length],m=e[d],h=e[(d+1)%e.length],g=e[(d+2)%e.length],_=Math.max(1e-4,Math.sqrt(r[(d-1+e.length)%e.length].distanceTo(r[d]))),v=_+Math.max(1e-4,Math.sqrt(r[d].distanceTo(r[(d+1)%e.length]))),y=v+Math.max(1e-4,Math.sqrt(r[(d+1)%e.length].distanceTo(r[(d+2)%e.length]))),b=Yu(_,v,f),x=e=>{let t=Yu(p[e],m[e],(b-0)/(_-0)),n=Yu(m[e],h[e],(b-_)/(v-_)),r=Yu(h[e],g[e],(b-v)/(y-v));return Yu(Yu(t,n,(b-0)/(v-0)),Yu(n,r,(b-_)/(y-_)),f)};l[t]=Ju(x(`bank`),0,1.6),this.samples.push({i:t,u:t/c,s:n,pos:i.getPoint(o),tangent:new W,right:new W,up:new W,halfWidth:x(`halfWidth`),bank:0,groundY:x(`groundY`),kind:(f<.5?m:h).kind,curvature:0})}for(let e=0;e<c;e++){let t=this.samples[e];t.tangent.subVectors(this.samples[(e+2)%c].pos,this.samples[(e-2+c)%c].pos).normalize(),t.right.crossVectors(t.tangent,Xd).normalize()}let d=new Float64Array(c);for(let e=0;e<c;e++){let t=this.samples[(e-3+c)%c].tangent,n=this.samples[(e+3)%c].tangent,r=Math.atan2(t.x*n.z-t.z*n.x,t.x*n.x+t.z*n.z);this.samples[e].curvature=r/(6*this.spacing),d[e]=Ju(this.samples[e].curvature*9,-.3,bd)*l[e]}for(let e=0;e<c;e++){let t=this.samples[e],n=0,r=0;for(let t=-15;t<=15;t++){let i=Math.exp(-t*t/98);n+=d[(e+t+c)%c]*i,r+=i}t.bank=n/r,t.up.crossVectors(t.right,t.tangent).normalize().applyAxisAngle(t.tangent,-t.bank);let i=t.halfWidth+6;for(let n=Math.floor((t.pos.x-i)/24);n<=Math.floor((t.pos.x+i)/24);n++)for(let r=Math.floor((t.pos.z-i)/24);r<=Math.floor((t.pos.z+i)/24);r++){let t=n*65536+r,i=this.cells.get(t);i?i.push(e):this.cells.set(t,[e])}}this.startS=this.sAt({seg:Td,t:Ed}),this.startIndex=Math.round(this.startS/this.spacing)%c}query(e,t,n,r=Zd()){let i=this.samples.length,a=n===void 0?0:(Math.round(n)%i+i)%i,o=this.samples[a].pos,s=(e-o.x)**2+(t-o.z)**2,c=this.cells.get(Math.floor(e/24)*65536+Math.floor(t/24));if(c?.length)for(let n=0;n<c.length;n++){let r=c[n];o=this.samples[r].pos;let i=(e-o.x)**2+(t-o.z)**2;i<s&&(s=i,a=r)}else{for(let n=0;n<i;n+=16){o=this.samples[n].pos;let r=(e-o.x)**2+(t-o.z)**2;r<s&&(s=r,a=n)}let n=a;for(let r=-16;r<=16;r++){let c=(n+r+i)%i;o=this.samples[c].pos;let l=(e-o.x)**2+(t-o.z)**2;l<s&&(s=l,a=c)}}let l=a,u=0;s=1/0;for(let n=-1;n<=0;n++){let r=(a+n+i)%i,o=this.samples[r].pos,c=this.samples[(r+1)%i].pos,d=c.x-o.x,f=c.z-o.z,p=Ju(((e-o.x)*d+(t-o.z)*f)/(d*d+f*f),0,1),m=(e-o.x-d*p)**2+(t-o.z-f*p)**2;m<s&&(s=m,l=r,u=p)}let d=this.samples[l],f=this.samples[(l+1)%i],p=Yu(d.right.x,f.right.x,u),m=Yu(d.right.z,f.right.z,u),h=Math.hypot(p,m);r.lateral=((e-Yu(d.pos.x,f.pos.x,u))*p+(t-Yu(d.pos.z,f.pos.z,u))*m)/h;let g=r.lateral*Math.tan(Yu(d.bank,f.bank,u));return r.index=u<.5?l:(l+1)%i,r.s=(l+u)*this.spacing,n!==void 0&&(r.s+=Math.round((n*this.spacing-r.s)/this.totalLength)*this.totalLength),r.u=this.wrapS(r.s)/this.totalLength,r.roadY=Yu(d.pos.y,f.pos.y,u)+g,r.groundY=Yu(d.groundY,f.groundY,u)+g,this.queryWidth=Yu(d.halfWidth,f.halfWidth,u),r.onRoad=Math.abs(r.lateral)<=this.queryWidth,r}surfaceHeight(e,t,n){let r=this.query(e,t,n,this.scratch),i=Math.abs(r.lateral)-this.queryWidth;return i<=0?r.roadY:i<=Sd?Yu(r.roadY,r.groundY,Xu(i/Sd)):Yd(e,t,i-Sd,r.groundY)}sAt(e){let t=((e.seg%this.nodeCount+this.nodeCount)%this.nodeCount+Ju(e.t,0,1))*this.subdivisions,n=Math.min(this.arc.length-2,Math.floor(t));return Yu(this.arc[n],this.arc[n+1],t-n)}frameAt(e,t){let n=this.wrapS(e)/this.spacing,r=Math.floor(n),i=n-r,a=this.samples[r],o=this.samples[(r+1)%this.samples.length];return t.pos.lerpVectors(a.pos,o.pos,i),t.tangent.lerpVectors(a.tangent,o.tangent,i).normalize(),t.right.crossVectors(t.tangent,Xd).normalize(),t.up.crossVectors(t.right,t.tangent).normalize().applyAxisAngle(t.tangent,-Yu(a.bank,o.bank,i)),t.halfWidth=Yu(a.halfWidth,o.halfWidth,i),t}sampleAtS(e){return this.samples[Math.floor(this.wrapS(e)/this.spacing)]}wrapS(e){return(e%this.totalLength+this.totalLength)%this.totalLength}gridSlot(e,t){let n=this.startS-Od*(Math.floor(e/2)+1);this.frameAt(n,t);let r=(e%2==0?-1:1)*Dd;return t.pos.addScaledVector(t.right,r),t.pos.y=this.query(t.pos.x,t.pos.z,void 0,this.scratch).roadY,t}},$d=class{constructor(){n(this,`positions`,[]),n(this,`uv`,[]),n(this,`colors`,[]),n(this,`uv1`,[])}quad(e,t,n,r,i=0,a=1){this.positions.push(...e,...t,...r,...t,...n,...r),this.uv.push(0,i,1,i,0,a,1,i,1,a,0,a)}box(e,t,n,r,i,a,o=1){let s=[];for(let c=0;c<2;c++)for(let l=-1;l<=1;l+=2)for(let u=-1;u<=1;u+=2){let d=c?o:1;s.push([e.x+d*(u*r*t.x+l*a*n.x)/2,e.y+c*i,e.z+d*(u*r*t.z+l*a*n.z)/2])}this.quad(s[0],s[1],s[3],s[2]),this.quad(s[4],s[6],s[7],s[5]),this.quad(s[0],s[4],s[5],s[1]),this.quad(s[2],s[3],s[7],s[6]),this.quad(s[0],s[2],s[6],s[4]),this.quad(s[1],s[5],s[7],s[3])}beam(e,t,n){let r=new W(t[0]-e[0],t[1]-e[1],t[2]-e[2]).normalize(),i=new W(0,1,0);Math.abs(r.y)>.95&&i.set(1,0,0),i.cross(r).normalize().multiplyScalar(n);let a=new W().crossVectors(r,i).normalize().multiplyScalar(n),o=(e,t)=>[e[0]+i.x*Math.cos(t)+a.x*Math.sin(t),e[1]+i.y*Math.cos(t)+a.y*Math.sin(t),e[2]+i.z*Math.cos(t)+a.z*Math.sin(t)];for(let n=0;n<4;n++)this.quad(o(e,n*Math.PI/2),o(t,n*Math.PI/2),o(t,(n+1)*Math.PI/2),o(e,(n+1)*Math.PI/2))}crystal(e,t,n){let r=t=>[e[0]+Math.cos(t*Math.PI/3)*n,e[1],e[2]+Math.sin(t*Math.PI/3)*n];for(let e=0;e<6;e++)this.quad(r(e),r(e+1),t,t)}mesh(e,t){let n=new ki;n.setAttribute(`position`,new K(this.positions,3)),n.setAttribute(`uv`,new K(this.uv,2)),this.colors.length&&n.setAttribute(`color`,new K(this.colors,3)),this.uv1.length&&n.setAttribute(`uv1`,new K(this.uv1,2)),n.computeVertexNormals();let r=new q(n,e);return r.name=t,r}};function ef(e,t){let n=new hc;n.name=`zephyr-circuit`;let r=[],i=[],a=(e,t=0,n=0)=>{let r=new yu({color:e,roughness:.72,side:f,emissive:t,emissiveIntensity:n});return i.push(r),r},o=(e,t,n)=>{let r=a(e);return r.polygonOffset=!0,r.polygonOffsetFactor=t,r.polygonOffsetUnits=n,r},s=(e,n,i)=>{let a=document.createElement(`canvas`);a.width=e,a.height=n;let o=a.getContext(`2d`);if(!o)throw Error(`Canvas 2D is required for circuit textures`);i(o);let s=new Kc(a);return s.wrapT=Ce,s.colorSpace=zt,s.anisotropy=t.anisotropy,r.push(s),s},c=Qu(7193),l=s(512,512,e=>{let t=e.createImageData(512,512);for(let e=0;e<t.data.length;e+=4){let n=77+c()*34+(c()>.985?24:0);t.data[e]=n+3,t.data[e+1]=n+2,t.data[e+2]=n,t.data[e+3]=255}e.putImageData(t,0,0)});l.wrapS=Ce;let u=s(256,256,e=>{let t=e.createImageData(256,256);for(let e=0;e<256;e++)for(let n=0;n<256;n++){let r=(e*256+n)*4,i=184+ed(n/27,e/31)*62+c()*9;t.data[r]=t.data[r+1]=t.data[r+2]=i,t.data[r+3]=255}e.putImageData(t,0,0)});u.colorSpace=Rt,u.wrapS=Ce,u.channel=1;let d=a(16777215);d.map=l,d.vertexColors=!0,d.roughness=.96,d.metalness=0,d.roughnessMap=u,d.bumpMap=l,d.bumpScale=.018;let p=s(256,1024,e=>{for(let t=0;t<1500;t++){let t=c()*256,n=Math.sin(t/256*Math.PI);e.fillStyle=`rgba(35,34,31,${(.05+c()*.14)*n*n})`,e.fillRect(t,c()*1024,.5+c()*2,12+c()*190)}}),m=a(16777215);m.map=p,m.transparent=!0,m.depthWrite=!1,m.roughness=.57,m.metalness=0,m.forceSinglePass=!0;let g=new $d,_=new $d,v=new $d,y=new $d,b=new $d,x=new $d,S=new $d,C=new $d,w=new $d,T=new $d,E=new $d,D=new $d,O=new $d,k=new $d,A=new $d,j=new $d,ee=new $d,te=new $d,ne=new $d,re=new $d,M=new $d,ie=new $d,ae=new $d,oe=new $d,se=new $d,ce=new $d,le=new $d,N=(e,t,n=0)=>[e.pos.x+e.right.x*t,e.pos.y+t*Math.tan(e.bank)+n,e.pos.z+e.right.z*t],ue=(t,n,r,i,a,o,s,c=0)=>{t.quad(N(n,i,c),N(n,a,c),N(r,s,c),N(r,o,c),n.s/24,(r.i===0?e.totalLength:r.s)/24)},de=e.samples,fe=de.length,pe=t.level===`low`?10:16,me=new Float32Array(fe);for(let e=0;e<fe;e++){let t=0,n=0;for(let r=-24;r<=24;r++){let i=25-Math.abs(r);t+=de[(e+r+fe)%fe].curvature*i,n+=i}me[e]=Math.tanh(t/n*100)*de[e].halfWidth*.44}for(let t=0;t<fe;t++){let n=de[t],r=de[(t+1)%fe],i=e=>Math.floor(n.s/e)!==Math.floor(r.s/e)&&r.i!==0;for(let t=0;t<8;t++){let i=t/4-1,a=(t+1)/4-1,o=[N(n,i*n.halfWidth),N(n,a*n.halfWidth),N(r,a*r.halfWidth),N(r,i*r.halfWidth)];g.quad(o[0],o[1],o[2],o[3]),g.uv.length-=12;for(let t of[0,1,3,1,2,3]){let s=o[t],c=t<2?n:r,l=(t===0||t===3?i:a)*c.halfWidth,u=c===r&&r.i===0?e.totalLength:c.s;g.uv.push(u/5.73,l/5.73+ed(s[0]*.018,s[2]*.018)*1.7),g.uv1.push((s[0]+s[2]*.31)/137,(s[2]-s[0]*.23)/113);let d=ed(s[0]*.025+31,s[2]*.025-17),f=ed(s[0]*.11,s[2]*.11),p=.73+d*.29+f*.08;g.colors.push(p*(1+d*.018),p,p*(1-d*.025))}}let a=e=>(.56-Math.min(.3,Math.abs(e.curvature)*10))*(.78+ed(e.pos.x*.17,e.pos.z*.17)*.3),o=a(n),s=a(r);for(let i of[-1.05,1.05])_.quad(N(n,me[t]+i-o,.018),N(n,me[t]+i+o,.018),N(r,me[r.i]+i+s,.018),N(r,me[r.i]+i-s,.018),n.s/41.3,(r.i===0?e.totalLength:r.s)/41.3);Math.abs(n.curvature)<.0018&&Math.floor(n.s/7)%2==0&&ue(y,n,r,-.11,.11,-.11,.11,.035);for(let t of[-1,1]){let a=t*n.halfWidth,o=t*r.halfWidth;for(let i=0;i<4;i++){let s=N(n,a+t*Sd*i/4),c=N(n,a+t*Sd*(i+1)/4),l=N(r,o+t*Sd*i/4),u=N(r,o+t*Sd*(i+1)/4);for(let t of[s,c,l,u])t[1]=(n.kind===vd.Bridge||r.kind===vd.Bridge?t[1]:e.surfaceHeight(t[0],t[2]))+.025;v.quad(s,c,u,l)}ue(y,n,r,a-t*.6,a-t*.28,o-t*.6,o-t*.28,.04);let s=t<0?E:D;if(Math.abs(n.curvature)>.003&&t===-Math.sign(n.curvature)){let e=Math.floor(n.s/3.6)%2?b:x,c=[[.08,.16],[.23,.34],[.85,.34],[1.02,.16]];for(let i=0;i<c.length-1;i++){let[s,l]=c[i],[u,d]=c[i+1];e.quad(N(n,a+t*s,l),N(n,a+t*u,d),N(r,o+t*u,d),N(r,o+t*s,l))}ce.quad(N(n,a+t*.08,.035),N(n,a+t*.08,.16),N(r,o+t*.08,.16),N(r,o+t*.08,.035)),ce.quad(N(n,a+t*1.02,.035),N(r,o+t*1.02,.035),N(r,o+t*1.02,.16),N(n,a+t*1.02,.16)),ue(le,n,r,a-t*.035,a+t*.12,o-t*.035,o+t*.12,.032),i(7.2)&&s.box(new W(...N(n,a+t*.64,.35)),n.right,n.tangent,.22,.075,.3)}let c=a+t*Cd,l=o+t*Cd;C.quad(N(n,c),N(r,l),N(r,l,.28),N(n,c,.28)),(Math.floor(n.s/9)%3==0?T:S).quad(N(n,c,.28),N(r,l,.28),N(r,l,1.03),N(n,c,1.03)),S.quad(N(n,c+t*.65),N(r,l+t*.65),N(r,l+t*.65,1.07),N(n,c+t*.65,1.07)),w.quad(N(n,c,1.03),N(r,l,1.03),N(r,l+t*.12,wd),N(n,c+t*.12,wd)),ue(w,n,r,c+t*.12,c+t*.56,l+t*.12,l+t*.56,wd),ue(s,n,r,c+t*.19,c+t*.32,l+t*.19,l+t*.32,1.268),s.quad(N(n,c-t*.012,.77),N(r,l-t*.012,.77),N(r,l-t*.012,.87),N(n,c-t*.012,.87)),i(18)&&(C.box(new W(...N(n,c+t*.65)),n.right,n.tangent,1.25,wd,1.35,.75),w.box(new W(...N(n,c+t*.65,wd)),n.right,n.tangent,1.02,.13,1.18,.87))}if(n.kind===vd.Tunnel||r.kind===vd.Tunnel){let e=(e,t,n=0)=>N(e,Math.cos(t)*(e.halfWidth+7-n),1.8+Math.sin(t)*(17-n)),t=n.kind!==r.kind;for(let a=0;a<pe;a++){let o=a/pe*Math.PI,s=(a+1)/pe*Math.PI;O.quad(e(n,o),e(r,o),e(r,s),e(n,s)),k.quad(e(n,o,.24),e(r,o,.24),e(r,s,.24),e(n,s,.24)),(i(16)||t)&&(A.beam(e(n,o,.65),e(n,s,.65),t?.65:.3),t&&j.beam(e(n,o,-.4),e(n,s,-.4),1.15)),(a===3||a===pe-4)&&A.beam(e(n,o,.4),e(r,o,.4),.07)}if(i(12))for(let e of[-1,1])for(let t=0;t<3;t++){let r=e*(n.halfWidth+5.3+t*.38),i=N(n,r,.3+t*.4),a=N(n,r-e*(.4+c()),3.5+c()*5.5);a[0]+=n.tangent.x*(t-1)*1.5,a[2]+=n.tangent.z*(t-1)*1.5,(t===1?A:j).crystal(i,a,.65+c()*.5)}}if(n.kind===vd.Bridge||r.kind===vd.Bridge){let t=n.halfWidth+Cd+1.1,a=r.halfWidth+Cd+1.1;ue(ee,n,r,-t,t,-a,a,-1.25);for(let e of[-1,1])ee.quad(N(n,e*t,-.12),N(r,e*a,-.12),N(r,e*a,-1.35),N(n,e*t,-1.35)),te.beam(N(n,e*(t-.5),-2.1),N(r,e*(a-.5),-2.1),.45);if(i(32)){for(let t of[-1,1]){let r=new W(...N(n,t*(n.halfWidth+Cd+.3))),i=Math.min(n.groundY-3,e.surfaceHeight(r.x,r.z)-2),a=r.y-1.25;r.y=i,ee.box(r,n.right,n.tangent,5.8,Math.max(1,a-i),6.2,.48),te.box(new W(r.x,a-2,r.z),n.right,n.tangent,4.4,1.8,5.1,1.16);for(let e=0;e<9;e++){let t=e*2.4,n=Math.min(a-4,xd+c()*6-3);if(n<i)continue;let o=[r.x+Math.cos(t)*2.35,n,r.z+Math.sin(t)*2.35];ne.crystal(o,[o[0]+Math.cos(t)*.45,n+.7+c(),o[2]+Math.sin(t)*.45],.5+c()*.4)}if(e.sampleAtS(n.s+32).kind===vd.Bridge)for(let r=0;r<12;r++){let i=e.sampleAtS(n.s+r*32/12),a=e.sampleAtS(n.s+(r+1)*32/12),o=-14+Math.sin(r/12*Math.PI)*10,s=-14+Math.sin((r+1)/12*Math.PI)*10,c=N(i,t*(i.halfWidth+Cd+.3),o),l=N(a,t*(a.halfWidth+Cd+.3),s);te.beam(c,l,1.1),r%3==0&&ee.beam(c,N(i,t*(i.halfWidth+Cd+.3),-1.4),.45)}}te.beam(N(n,-t,-1.7),N(n,t,-1.7),.7)}}}let he={pos:new W,tangent:new W,right:new W,up:new W,halfWidth:0},ge=(t,n,r=0)=>(e.frameAt(t,he),he.pos.addScaledVector(he.right,n),he.pos.y=e.query(he.pos.x,he.pos.z).roadY+r,[he.pos.x,he.pos.y,he.pos.z]),_e=e.sAt({seg:Td,t:Ed});e.frameAt(_e,he);let ve=he.halfWidth;for(let e=0;e<3;e++)for(let t=0;t<18;t++){let n=-ve+t*ve/9,r=n+ve/9;((e+t)%2?re:x).quad(ge(_e+e*1.05,n,.065),ge(_e+e*1.05,r,.065),ge(_e+(e+1)*1.05,r,.065),ge(_e+(e+1)*1.05,n,.065))}e.frameAt(_e,he);let P=he.pos.clone(),ye=he.right.clone(),F=he.tangent.clone(),I=ve+Cd+3.2,L=(e,t,n=0)=>[P.x+ye.x*e+F.x*n,P.y+t,P.z+ye.z*e+F.z*n];for(let e of[-1,1])M.box(new W(...L(e*I,-.2)),ye,F,4.2,16.7,5,.55),x.box(new W(...L(e*I,0)),ye,F,4.5,1.2,5.3,.88),ie.beam(L(e*I,2,-2.05),L(e*I,15.8,-1.25),.22),b.box(new W(...L(e*I,12)),ye,F,3.2,2,3.8,.85);for(let e of[-1.2,1.2]){for(let t of[13,16])M.beam(L(-I,t,e),L(I,t,e),.42);for(let t=0;t<12;t++){let n=-I+t*I/6,r=n+I/6;x.beam(L(n,13,e),L(r,16,e),.13),x.beam(L(n,16,e),L(r,13,e),.13),M.beam(L(n,16,-1.2),L(n,16,1.2),.2)}}M.box(new W(...L(0,9.6)),ye,F,ve*1.95,3,.5);for(let e of[-ve*.75,ve*.75])ie.beam(L(e,12.5),L(e,14.9),.1);let be=s(1024,128,e=>{e.fillStyle=`#102c38`,e.fillRect(0,0,1024,128),e.fillStyle=`#f1dbad`,e.fillRect(0,0,1024,5),e.fillRect(0,123,1024,5),e.font=`900 52px sans-serif`,e.textAlign=`center`,e.fillText(`ZEPHYR REEF`,512,64),e.font=`bold 23px sans-serif`,e.fillStyle=`#76fff0`,e.fillText(`G R A N D   P R I X`,512,100);for(let t=0;t<4;t++)for(let n=0;n<3;n++)(n+t)%2==0&&(e.fillStyle=`#f1dbad`,e.fillRect(18+n*25,14+t*25,25,25),e.fillRect(931+n*25,14+t*25,25,25))});ae.quad(L(-ve*.95,9.75,-.27),L(ve*.95,9.75,-.27),L(ve*.95,12.4,-.27),L(-ve*.95,12.4,-.27));let R=a(16777215,16777215,.55);R.map=be,R.emissiveMap=be;let z=s(128,128,e=>{let t=(t,n)=>{e.fillStyle=n,e.beginPath(),e.moveTo(8+t,12+t),e.lineTo(64,51-t*.6),e.lineTo(120-t,12+t),e.lineTo(120-t,42),e.lineTo(64,84-t*.6),e.lineTo(8+t,42),e.closePath(),e.fill()};t(0,`#ff2fd0`),t(34,`#ffe9fb`),e.fillStyle=`#ffb0ec`,e.fillRect(2,0,4,128),e.fillRect(122,0,4,128)});for(let t of Wd){let n=e.sAt(t),r=Math.ceil(t.length/1.5);for(let e=0;e<r;e++){let i=n-t.length/2+e*t.length/r,a=i+t.length/r;se.quad(ge(i,t.lateral-2.1,.14),ge(i,t.lateral+2.1,.14),ge(a,t.lateral+2.1,.14),ge(a,t.lateral-2.1,.14));let o=.165+e/r*.025,s=.165+(e+1)/r*.025;oe.quad(ge(i,t.lateral-1.9,o),ge(i,t.lateral+1.9,o),ge(a,t.lateral+1.9,s),ge(a,t.lateral-1.9,s),e/r*3,(e+1)/r*3)}let i=n+t.length/2;ie.beam(ge(i,t.lateral-2,.1),ge(i,t.lateral+2,.1),.035)}let xe=new gi({map:z,transparent:!0,blending:h,depthWrite:!1,depthTest:!0,side:f,opacity:.95,forceSinglePass:!0,polygonOffset:!0,polygonOffsetFactor:-9,polygonOffsetUnits:-18});i.push(xe);let Se=a(9081064,6576089,.8);Se.transparent=!0,Se.opacity=.16,Se.depthWrite=!1,Se.forceSinglePass=!0;let B=(e,r,i,a=!1)=>{if(!e.positions.length)return;let o=e.mesh(r,i);o.receiveShadow=!0,o.castShadow=a&&t.shadows,n.add(o)};d.polygonOffset=!0,d.polygonOffsetFactor=-3,d.polygonOffsetUnits=-6,m.polygonOffset=!0,m.polygonOffsetFactor=-5,m.polygonOffsetUnits=-10,B(g,d,`road`),B(_,m,`racing-line`);let we=o(16773838,-6,-12);we.roughness=.43;let Te=o(15624806,-6,-12),Ee=o(16772035,-6,-12);Te.roughness=Ee.roughness=.48,B(v,o(12367005,-2,-4),`sand-verge`),B(y,we,`edge-lines`),B(b,Te,`coral-curbs`),B(x,Ee,`cream-markings`),B(re,o(1452850,-6,-12),`start-checkers`),B(ce,o(8680806,-6,-12),`curb-faces`),B(le,o(4802363,-6,-12),`curb-base-dirt`),B(S,a(7376018),`walls`),B(C,a(3559256),`wall-foundation`),B(w,a(12175032),`wall-caps`),B(T,a(8691355),`wall-courses`),B(E,a(7667686,2157257,1.5),`left-glow-rail`),B(D,a(16760200,16747838,1.5),`right-glow-rail`),B(O,a(3160399),`crystal-bore`,!0),B(k,Se,`crystal-lining`),B(A,a(10747903,3726569,1.9),`tunnel-ribs`);let De=a(8550861,5978555,.6);return De.roughness=.24,De.metalness=.22,B(j,De,`bore-crystals`),B(ee,a(7638926),`viaduct`,!0),B(te,a(11580833),`viaduct-arches`,!0),B(ne,a(12953996),`pier-barnacles`),B(M,a(2112842),`start-gantry`,!0),B(ie,a(16773821,16767100,1.8),`gantry-light`),B(ae,R,`race-banner`),B(se,a(3805232,16723920,.5),`boost-inlays`),B(oe,xe,`boost-pads`),{group:n,update(e,t){z.offset.y=-t*1.1,xe.opacity=.88+Math.sin(t*5)*.1},dispose(){n.traverse(e=>{e instanceof q&&e.geometry.dispose()});for(let e of i)e.dispose();for(let e of r)e.dispose()}}}function tf(e,t){let n=new Jn;for(let t of e.samples)n.expandByPoint(t.pos);let r=t.level===`low`?5:3.2,i=n.min.x-280,a=n.min.z-280,o=Math.ceil((n.max.x-i+280)/r),s=Math.ceil((n.max.z-a+280)/r),c=(o+1)*(s+1),l=new Float32Array(c*3),u=new Float32Array(c*3),d=new Uint32Array(o*s*6);for(let t=0;t<=s;t++)for(let n=0;n<=o;n++){let s=(t*(o+1)+n)*3,c=i+n*r,u=a+t*r,d=e.query(c,u),f=Math.abs(d.lateral)-e.sampleAtS(d.s).halfWidth,p=f<=3?.14:f<9?.14*(1-(f-3)/6):0;l[s]=c,l[s+1]=e.surfaceHeight(c,u,d.index)-p,l[s+2]=u}let f=0;for(let e=0;e<s;e++)for(let t=0;t<o;t++){let n=e*(o+1)+t,r=n+1,i=n+o+1,a=i+1;d[f++]=n,d[f++]=i,d[f++]=r,d[f++]=r,d[f++]=i,d[f++]=a}let p=new ki;p.setAttribute(`position`,new yi(l,3)),p.setIndex(new yi(d,1)),p.computeVertexNormals();let m=p.getAttribute(`normal`),h=new G(`#c8b786`),g=new G(`#388979`),_=new G(`#d8898c`),v=new G(`#bfccd0`),y=new G;for(let e=0;e<c;e++){let t=e*3,n=l[t+1];y.copy(h).lerp(g,Ju((n-xd-1)/9,0,1)),y.lerp(_,Ju((.91-m.getY(e))*3.8,0,1)),y.lerp(v,Ju((n-34)/27,0,.9)),y.multiplyScalar(.86+td(l[t]*.038,l[t+2]*.038,3)*.32),u[t]=y.r,u[t+1]=y.g,u[t+2]=y.b}p.setAttribute(`color`,new yi(u,3));let b=new yu({vertexColors:!0,roughness:.95}),x=new q(p,b);return x.name=`reef-terrain`,x.receiveShadow=!0,x.castShadow=!1,{mesh:x,dispose(){p.dispose(),b.dispose()}}}function nf(e,t){let n=window.__ACTIVE_THEME||window.__ZEPHYR_THEMES[0],r=new W(n.sunDir[0],n.sunDir[1],n.sunDir[2]).normalize(),i=e.background,a=e.fog,o=new G(n.fogColor);e.background=o,e.fog=new Dc(o,n.fogDensity);let s=new Zi({side:d,depthWrite:!1,uniforms:{uTime:{value:0},uSun:{value:r}},vertexShader:`varying vec3 vDir;
      void main(){vDir=position; vec4 p=projectionMatrix*modelViewMatrix*vec4(position,1.); gl_Position=p.xyww;}`,fragmentShader:`varying vec3 vDir; uniform float uTime; uniform vec3 uSun;
      float hash(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453);}
      float noise(vec2 p){vec2 i=floor(p),f=fract(p);f=f*f*(3.-2.*f);return mix(mix(hash(i),hash(i+vec2(1,0)),f.x),mix(hash(i+vec2(0,1)),hash(i+1.),f.x),f.y);}
      float fbm(vec2 p){float n=0.,a=.5;for(int i=0;i<5;i++){n+=a*noise(p);p=p*2.03+13.1;a*=.5;}return n;}
      void main(){vec3 d=normalize(vDir);float h=max(d.y,0.);
        vec3 c=mix(vec3(.46,.31,.23),vec3(.045,.27,.34),smoothstep(0.,.23,h));
        c=mix(c,vec3(.022,.045,.19),smoothstep(.18,1.,h));
        c+=vec3(.23,.12,.035)*exp(-pow((h-.045)*22.,2.));
        vec2 p=d.xz/(abs(d.y)+.25);float n=fbm(p*2.3+vec2(uTime*.006,0.));
        float cloud=smoothstep(.58,.73,n+sin(p.y*3.+n*4.)*.08)*smoothstep(.055,.22,h);
        vec3 cloudColor=mix(vec3(.09,.15,.23),vec3(.88,.65,.38),smoothstep(.57,.79,n));
        c=mix(c,cloudColor,cloud*.9);
        float sd=max(dot(d,uSun),0.);c+=vec3(1.,.56,.2)*pow(sd,350.)*.42;
        c+=vec3(1.,.87,.57)*smoothstep(.9991,.99965,sd)*3.;
        gl_FragColor=vec4(c,1.);
        #include <tonemapping_fragment>
        #include <colorspace_fragment>
      }`}),c=new q(new hu(1900,32,16),s);c.frustumCulled=!1,c.renderOrder=-100,e.add(c);let l=new Du(16770746,3.5);l.castShadow=t.shadows,l.shadow.mapSize.set(t.shadowMapSize,t.shadowMapSize),Object.assign(l.shadow.camera,{left:-90,right:90,top:90,bottom:-90,near:70,far:390}),l.shadow.camera.updateProjectionMatrix(),l.shadow.bias=-6e-4,l.shadow.normalBias=.045;let u=new xu(6662088,2635585,.75),f=new Du(6724836,.22);return f.position.set(90,60,90),l.position.copy(r).multiplyScalar(220),e.add(l,l.target,u,f),{sunDir:r,sunLight:l,update(e,t,n,i){c.position.copy(n.position),s.uniforms.uTime.value=t,l.position.copy(i).addScaledVector(r,220),l.target.position.copy(i),l.target.updateMatrixWorld()},dispose(){e.remove(c,l,l.target,u,f),c.geometry.dispose(),s.dispose(),l.dispose(),e.background=i,e.fog=a}}}function rf(e,t){return new Zi({uniforms:{uTime:{value:0},uDetail:{value:1},uLevel:{value:xd},uSeabed:{value:e},uBounds:{value:t},uTexel:{value:new V(1/e.image.width,1/e.image.height)},uSun:{value:new W(-.64,.57,-.51).normalize()}},vertexShader:`
      uniform float uTime; uniform float uLevel; uniform sampler2D uSeabed; uniform vec4 uBounds;
      varying vec3 vWorld;
      void main() {
        vec4 w = modelMatrix * vec4(position, 1.);
        float depth = uLevel - texture2D(uSeabed, (w.xz-uBounds.xy)/uBounds.zw).r;
        // Zero displacement at the real waterline; the lagoon's datum remains sea level.
        float shoreFade = smoothstep(0., 5., depth);
        w.y += shoreFade * (sin(w.x*.095+w.z*.04+uTime*1.2)*.58
          + sin(w.z*.17-w.x*.05-uTime*1.65)*.28);
        vWorld = w.xyz;
        gl_Position = projectionMatrix * viewMatrix * w;
      }`,fragmentShader:`
      uniform float uTime; uniform float uDetail; uniform float uLevel;
      uniform sampler2D uSeabed; uniform vec4 uBounds; uniform vec2 uTexel; uniform vec3 uSun;
      varying vec3 vWorld;
      void main() {
        vec2 p = vWorld.xz, uv = (p-uBounds.xy)/uBounds.zw;
        float bed = texture2D(uSeabed, uv).r;
        float depth = uLevel-bed;
        if (depth <= 0. || bed >= vWorld.y) discard;
        vec2 stepWorld = uTexel*uBounds.zw;
        vec2 gradient = vec2(
          texture2D(uSeabed, uv+vec2(uTexel.x,0.)).r-texture2D(uSeabed, uv-vec2(uTexel.x,0.)).r,
          texture2D(uSeabed, uv+vec2(0.,uTexel.y)).r-texture2D(uSeabed, uv-vec2(0.,uTexel.y)).r
        )/(2.*stepWorld);
        // Depth / terrain slope estimates horizontal distance to the real contour.
        float shoreDistance = depth/max(length(gradient), .12);
        float shoreFade = smoothstep(0., 5., depth);
        float a=p.x*.095+p.y*.04+uTime*1.2, b=p.y*.17-p.x*.05-uTime*1.65;
        vec2 slope = (vec2(.095,.04)*cos(a)*.58 + vec2(-.05,.17)*cos(b)*.28)*shoreFade;
        // Analytic chop normals remain visible when the mesh swells are subpixel.
        float bendA = dot(p,vec2(-.12,.16))+uTime*.31;
        float bendB = dot(p,vec2(.17,.09))-uTime*.27;
        slope += (vec2(.52,.21)+vec2(-.12,.16)*cos(bendA)*1.6)
          *cos(dot(p,vec2(.52,.21))+sin(bendA)*1.6+uTime*1.9)*.32;
        slope += (vec2(-.31,.73)+vec2(.17,.09)*cos(bendB)*1.3)
          *cos(dot(p,vec2(-.31,.73))+sin(bendB)*1.3-uTime*2.3)*.22;
        if (uDetail > .5) {
          slope += vec2(1.43,.62)*cos(dot(p,vec2(1.43,.62))+uTime*2.7)*.075;
          slope += vec2(-.85,1.76)*cos(dot(p,vec2(-.85,1.76))-uTime*3.1)*.055;
        }
        vec3 n = normalize(vec3(-slope.x,1.,-slope.y));
        vec3 viewDir = normalize(cameraPosition-vWorld);
        float fres = .045+.955*pow(1.-max(dot(n,viewDir),0.),4.);
        float shallow = 1.-smoothstep(.6,18.,depth);
        // Blue, not terrain green: turquoise shelves fall into cobalt/navy channels.
        vec3 c = mix(vec3(.003,.028,.115),vec3(.008,.30,.43),shallow);
        vec3 reflection = reflect(-viewDir,n);
        vec3 sky = mix(vec3(.28,.56,.76),vec3(.025,.14,.32),smoothstep(0.,.65,reflection.y));
        c = mix(c,sky,fres*.72);
        float halfDot = max(dot(n,normalize(viewDir+uSun)),0.);
        float glint = pow(halfDot,190.);
        c += vec3(1.,.9,.68)*glint*4.5;
        float breaker = sin(shoreDistance*2.1-uTime*1.35 + sin(p.x*.19+p.y*.23)*.6);
        float rim = 1.-smoothstep(.65,2.5,shoreDistance);
        float wash = (1.-smoothstep(1.5,5.5,shoreDistance))*smoothstep(.35,.85,breaker);
        c = mix(c,vec3(.79,.94,.96),max(rim*.94,wash*.72));
        if (uDetail > .5) {
          float caustic = pow(max(0.,sin(p.x*.57+sin(p.y*.43+uTime*.35))*sin(p.y*.61-uTime*.28)),18.);
          c += vec3(.1,.25,.28)*caustic*shallow*shallow;
        }
        float fog = 1.-exp(-.00125*.00125*dot(cameraPosition-vWorld,cameraPosition-vWorld));
        c = mix(c,vec3(.46,.31,.23),fog);
        gl_FragColor = vec4(c,1.);
        #include <tonemapping_fragment>
        #include <colorspace_fragment>
      }`})}function af(e,t){let n=new Jn;for(let t of e.samples)n.expandByPoint(t.pos);n.expandByScalar(260);let r=n.getCenter(new W),i=n.getSize(new W),a=t.fancyWater?160:48,o=new _a(i.x,i.z,a,a);o.rotateX(-Math.PI/2);let s=t.fancyWater?512:256,c=new Float32Array(s*s),l={index:0,lateral:0,u:0,s:0,roadY:0,groundY:0,onRoad:!1};for(let t=0;t<s;t++)for(let r=0;r<s;r++){let a=n.min.x+(r+.5)/s*i.x,o=n.min.z+(t+.5)/s*i.z;e.query(a,o,void 0,l);let u=e.samples[l.index];c[t*s+r]=l.roadY-l.groundY>3?Yd(a,o,Math.max(0,Math.abs(l.lateral)-u.halfWidth-Sd),l.groundY):e.surfaceHeight(a,o,l.index)}let u=new kc(c,s,s,Ze,Re);u.minFilter=u.magFilter=ke,u.needsUpdate=!0;let d=rf(u,new Bn(n.min.x,n.min.z,i.x,i.z));d.uniforms.uDetail.value=+!!t.fancyWater;let f=new q(o,d);return f.name=`Zephyr lagoon`,f.position.set(r.x,xd,r.z),{mesh:f,update(e,t,n){d.uniforms.uTime.value=t},dispose(){o.dispose(),d.dispose(),u.dispose()}}}function of(e,t=!1){let n=e[0].index!==null,r=new Set(Object.keys(e[0].attributes)),i=new Set(Object.keys(e[0].morphAttributes)),a={},o={},s=e[0].morphTargetsRelative,c=new ki,l=0;for(let u=0;u<e.length;++u){let d=e[u],f=0;if(n!==(d.index!==null))return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them.`),null;for(let e in d.attributes){if(!r.has(e))return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. All geometries must have compatible attributes; make sure "`+e+`" attribute exists among all geometries, or in none of them.`),null;a[e]===void 0&&(a[e]=[]),a[e].push(d.attributes[e]),f++}if(f!==r.size)return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. Make sure all geometries have the same number of attributes.`),null;if(s!==d.morphTargetsRelative)return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. .morphTargetsRelative must be consistent throughout all geometries.`),null;for(let e in d.morphAttributes){if(!i.has(e))return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`.  .morphAttributes must be consistent throughout all geometries.`),null;o[e]===void 0&&(o[e]=[]),o[e].push(d.morphAttributes[e])}if(t){let e;if(n)e=d.index.count;else if(d.attributes.position!==void 0)e=d.attributes.position.count;else return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. The geometry must have either an index or a position attribute`),null;c.addGroup(l,e,u),l+=e}}if(n){let t=0,n=[];for(let r=0;r<e.length;++r){let i=e[r].index;for(let e=0;e<i.count;++e)n.push(i.getX(e)+t);t+=e[r].attributes.position.count}c.setIndex(n)}for(let e in a){let t=sf(a[e]);if(!t)return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the `+e+` attribute.`),null;c.setAttribute(e,t)}for(let e in o){let t=o[e][0].length;if(t===0)break;c.morphAttributes=c.morphAttributes||{},c.morphAttributes[e]=[];for(let n=0;n<t;++n){let t=[];for(let r=0;r<o[e].length;++r)t.push(o[e][r][n]);let r=sf(t);if(!r)return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the `+e+` morphAttribute.`),null;c.morphAttributes[e].push(r)}}return c}function sf(e){let t,n,r,i=-1,a=0;for(let o=0;o<e.length;++o){let s=e[o];if(t===void 0&&(t=s.array.constructor),t!==s.array.constructor)return console.error(`THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes.`),null;if(n===void 0&&(n=s.itemSize),n!==s.itemSize)return console.error(`THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes.`),null;if(r===void 0&&(r=s.normalized),r!==s.normalized)return console.error(`THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes.`),null;if(i===-1&&(i=s.gpuType),i!==s.gpuType)return console.error(`THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes.`),null;a+=s.count*n}let o=new t(a),s=new yi(o,n,r),c=0;for(let t=0;t<e.length;++t){let r=e[t];if(r.isInterleavedBufferAttribute){let e=c/n;for(let t=0,i=r.count;t<i;t++)for(let i=0;i<n;i++){let n=r.getComponent(t,i);s.setComponent(t+e,i,n)}}else o.set(r.array,c);c+=r.count*n}return i!==void 0&&(s.gpuType=i),s}function cf(e,t){let n=new hc;n.name=`Reef landmarks`;let r=Qu(81037),i=new yu({color:3165536,roughness:.93,flatShading:!0}),a=new yu({color:14966086,roughness:.72,flatShading:!0}),o=new yu({color:14200409,roughness:.75}),s=new yu({color:2590573,roughness:.8}),c=new yu({color:5782322,roughness:.9}),l=new yu({color:7929839,emissive:1826254,emissiveIntensity:1.4,roughness:.35}),u=new yu({color:16777215,emissive:1527621,emissiveIntensity:.18,roughness:.8}),d=new Map,p=new Jr,m={pos:new W,tangent:new W,right:new W,up:new W,halfWidth:12},g=[],_=[],v=(e,t,n,r=new W(1,1,1),i=new jr)=>{p.position.copy(n),p.scale.copy(r),p.rotation.copy(i),p.updateMatrix(),e.applyMatrix4(p.matrix);let a=e.index?e.toNonIndexed():e;a!==e&&e.dispose(),a.deleteAttribute(`uv`);let o=d.get(t)??[];o.push(a),d.set(t,o)},y=(t,n,r)=>{let i=e.query(t,n),a=e.samples[i.index];return Math.hypot(t-a.pos.x,n-a.pos.z)>a.halfWidth+4+r},b=(t,n,r,i)=>{e.frameAt(t,m);let a=n<0?-1:1;for(let t=0;t<80;t++){let o=a*(Math.max(Math.abs(n),m.halfWidth+5+r)+t*4),s=m.pos.x+m.right.x*o,c=m.pos.z+m.right.z*o,l=e.surfaceHeight(s,c);if(y(s,c,r)&&(i||l>=-13))return new W(s,l,c)}return null},x=new Zi({transparent:!0,depthWrite:!1,side:f,blending:h,uniforms:{uTime:{value:0}},vertexShader:`varying vec2 vUv;void main(){vUv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}`,fragmentShader:`varying vec2 vUv;uniform float uTime;void main(){float edge=sin(vUv.x*3.14159);float streak=.55+.25*sin(vUv.x*140.+sin(vUv.y*7.-uTime*6.))+.2*sin(vUv.y*80.+uTime*12.);gl_FragColor=vec4(.22,.85,1.,edge*streak*.72);}`}),S=new Zi({transparent:!0,depthWrite:!1,side:f,blending:h,uniforms:{uTime:{value:0}},vertexShader:`varying vec2 vUv;void main(){vUv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}`,fragmentShader:`varying vec2 vUv;uniform float uTime;void main(){float d=length((vUv-.5)*2.);float a=pow(max(0.,1.-d),2.);gl_FragColor=vec4(.55,1.,.94,a*(.3+.07*sin(uTime*1.3)));}`}),C=new Zi({transparent:!0,depthWrite:!1,side:f,blending:h,vertexShader:`varying vec2 vUv;void main(){vUv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}`,fragmentShader:`varying vec2 vUv;void main(){float edge=pow(max(0.,sin(vUv.x*3.14159)),2.);gl_FragColor=vec4(.35,.9,1.,edge*pow(vUv.y,1.8)*.34);}`});for(let u of qd){let d=e.sAt(u),f=u.scale;if(e.frameAt(d,m),u.kind===`arch`){let t=!1;for(let n=0;n<200;n++){let r=Math.ceil(n/2)*8*(n%2?1:-1);e.frameAt(d+r,m);let i=m.halfWidth+6+f*5,a=m.pos.clone().addScaledVector(m.right,-i),o=m.pos.clone().addScaledVector(m.right,i);if(e.surfaceHeight(a.x,a.z)>=-13&&e.surfaceHeight(o.x,o.z)>=-13&&y(a.x,a.z,4.6*f)&&y(o.x,o.z,4.6*f)){t=!0;break}}if(!t)continue;let n=m.halfWidth+6+f*5,r=m.pos.clone(),s=Math.atan2(-m.tangent.x,-m.tangent.z),c=Math.abs(Math.tan(e.samples[e.query(r.x,r.z).index].bank))*n,u=Math.max(16,15*f)+c;for(let t of[-1,1]){let c=r.clone().addScaledVector(m.right,t*n),d=e.surfaceHeight(c.x,c.z),p=r.y+u-d,h=c.clone();h.y=d+p/2,v(new Cl(1.7*f,2.1*f,p,6),a,h);let g=c.clone().addScaledVector(m.right,t*f);g.y=d+3*f,v(new Ui(5*f,6*f,5*f),i,g,void 0,new jr(0,s,0));for(let e=0;e<4;e++){let t=c.clone();t.y=d+5*f+e*(p-6*f)/4,v(new Cl(1.94*f,1.94*f,.45*f,6),o,t),v(new pu(.7*f),l,t.addScaledVector(m.tangent,1.95*f),new W(.6,1.4,.4))}let _=h.clone();_.y=r.y+u,v(new fu(2.8*f,0),o,_)}let p=r.clone();if(p.y+=u+1.7*f,p.y-1.7*f<r.y+11+c)throw Error(`Arch opening clearance`);v(new Ui(n*2+4*f,3.4*f,3*f),a,p,void 0,new jr(0,s,0));for(let e=-4;e<=4;e++){let t=p.clone().addScaledVector(m.right,e*n/5).addScaledVector(m.tangent,1.6*f);v(new pu(.65*f),l,t,new W(1,1.5,.35),new jr(0,s,0))}continue}let p=(u.kind===`shell`?18:u.kind===`floatisland`||u.kind===`waterfall`?24:u.kind===`wreck`?23:8)*f,h=[`wreck`,`rocks`,`waterfall`,`floatisland`].includes(u.kind),w=b(d,u.lateral,p,h);if(w){if(u.kind===`beacon`){v(new Cl(2.2*f,5*f,39*f,8),o,w.clone().add(new W(0,19.5*f,0))),v(new Cl(5*f,4*f,2*f,8),a,w.clone().add(new W(0,37*f,0)));let e=new hc;e.position.copy(w).y+=42*f,e.add(new q(new pu(3.4*f),l));let t=new q(new wl(13*f,95*f,20,1,!0),C);t.rotation.z=Math.PI/2,t.position.x=47.5*f,e.add(t),n.add(e),_.push(e),v(new wl(6*f,6*f,8),a,w.clone().add(new W(0,49*f,0)))}else if(u.kind===`shell`){let e=[];for(let t=0;t<=150;t++){let n=t/150*Math.PI*5,r=1+t/150*12;e.push(new W(Math.cos(n)*r,Math.sin(n)*r+15,t/150*6))}v(new _u(new tl(e),150,2.4,8,!1),o,w,new W(f,f,f));for(let e=0;e<14;e++){let t=e/14*Math.PI*2;v(new pu(1.5),a,w.clone().add(new W(Math.cos(t)*14,15+Math.sin(t)*14,5)),new W(1,2,1))}}else if(u.kind===`floatisland`){let e=w.clone();e.y=Math.max(w.y+45,50)+f*9;for(let t=0;t<4;t++){let n=(13-t*2.7)*f,r=e.clone().add(new W(Math.sin(t*2)*f,-t*4*f-2*f,Math.cos(t)*f));v(new Cl(n,n*.78,4.5*f,9),t%2?o:i,r)}v(new Cl(14*f,13*f,1.3*f,9),s,e),v(new Cl(14.3*f,13.3*f,.65*f,9),o,e.clone().add(new W(0,-.8*f,0)));for(let t=0;t<13;t++){let n=t/13*Math.PI*2,a=(3+r()*8)*f,o=e.clone().add(new W(Math.cos(n)*12.5*f,-a/2,Math.sin(n)*12.5*f));if(v(new Cl(.28*f,.06*f,a,4),s,o,void 0,new jr(.12*Math.sin(n),0,.12*Math.cos(n))),t%4==0){let t=e.clone().add(new W(Math.cos(n)*19*f,(-5-r()*5)*f,Math.sin(n)*19*f));v(new fu(2.5*f,0),i,t,new W(1.2,.7,1))}}for(let t=0;t<5;t++){let n=e.clone().add(new W((r()-.5)*14*f,2.5*f,(r()-.5)*14*f));v(new fu(2.7*f,1),s,n,new W(1,.7+r(),1)),t===0&&v(new pu(2*f),l,n.add(new W(0,4*f,0)),new W(.6,2,.6))}}else if(u.kind===`waterfall`){let e=Math.max(w.y+26*f,m.pos.y+16),t=Math.max(xd,w.y-14),a=e-t;for(let e=0;e<4;e++)v(new Cl((12-e)*f,(13-e)*f,a/4+1,7),e%2?i:s,new W(w.x,t+a*(e+.5)/4,w.z-7*f),new W(1,1,.55));let o=new q(new _a(13*f,a,1,8),x);o.position.set(w.x,t+a/2,w.z),n.add(o);let c=new q(new _a(29*f,16*f),S);c.position.set(w.x,t+2,w.z+1),n.add(c),g.push({object:c,y:c.position.y,phase:r()*6,amplitude:.6})}else if(u.kind===`wreck`){w.y=-13,v(new hu(1,16,8,0,Math.PI*2,Math.PI/2,Math.PI/2),c,w,new W(7*f,8*f,17*f),new jr(0,0,.13)),v(new Ui(11*f,.7*f,25*f),c,w.clone().add(new W(0,-.3*f,0)));for(let e of[-1,1]){v(new Ui(.55*f,.65*f,24*f),o,w.clone().add(new W(e*5.7*f,1.2*f,0)));for(let t=-3;t<=3;t++)v(new Ui(.35*f,2*f,.35*f),o,w.clone().add(new W(e*5.7*f,.2*f,t*3.4*f)))}v(new Ui(7*f,4*f,6*f),a,w.clone().add(new W(0,2*f,8*f))),v(new Cl(.3*f,.6*f,25*f,6),c,w.clone().add(new W(0,12*f,-2*f)),void 0,new jr(0,0,-.12)),v(new Ui(13*f,.5*f,.5*f),o,w.clone().add(new W(1.7*f,17*f,-2*f)));let e=new Dl;e.moveTo(-5,0),e.lineTo(5,0),e.lineTo(3,-4),e.lineTo(4,-7),e.lineTo(-4,-9),e.closePath(),v(new lu(e,{depth:.12,bevelEnabled:!1}),o,w.clone().add(new W(1.7*f,16.5*f,-2*f)),new W(f,f,f))}else for(let n=0;n<Math.ceil(25*t.sceneryDensity);n++){let t=w.clone().add(new W((r()-.5)*13*f,0,(r()-.5)*13*f));t.y=e.surfaceHeight(t.x,t.z);let o=u.kind===`flora_cluster`;!y(t.x,t.z,4*f)||o&&t.y<-13||(o?v(new wl(.9*f,6*f,5),n%2?l:a,t.add(new W(0,3*f,0)),new W(1,.5+r(),1)):v(new fu(2*f),i,t,new W(1+r(),.7+r(),1+r())))}}}let w=[.1,.24,.41,.81,.96],T=Math.floor(210*t.sceneryDensity),E=[new fu(1,0),new fu(1,1),new wl(.45,3,5)],D=[3771509,2390383,7645824,6520721];for(let a=0;a<3;a++){let o=new Rc(E[a],a===0?i:u,T),s=0;for(let t=0;t<T*3&&s<T;t++){let n=t%w.length,i=e.sampleAtS((w[n]+(r()-.5)*.022)*e.totalLength),c=r()<.18,l=c?3+r()*4:.45+r()*1.25,u=(i.halfWidth+13+l*2+r()*(c?110:30))*(n%2?1:-1),d=i.pos.x+i.right.x*u,f=i.pos.z+i.right.z*u;if(!y(d,f,l*2))continue;let m=e.surfaceHeight(d,f);a!==0&&m<-13||(p.position.set(d,m+(a===0?.3:l),f),p.scale.set(l,l*(a===1?.6:.8+r()*.3),l),p.rotation.set(0,r()*Math.PI*2,0),p.updateMatrix(),o.setMatrixAt(s,p.matrix),o.setColorAt(s,new G(D[a===0?3:Math.floor(r()*3)])),s++)}o.count=s,o.instanceMatrix.needsUpdate=!0,o.computeBoundingSphere(),o.castShadow=t.shadows,n.add(o)}for(let[e,r]of d){let i=of(r);if(r.forEach(e=>e.dispose()),i){let r=new q(i,e);r.castShadow=t.shadows,r.receiveShadow=!0,n.add(r)}}return{group:n,update(e,t,n){l.emissiveIntensity=1.15+Math.sin(t*1.4)*.25,u.emissiveIntensity=.16+Math.sin(t*.8)*.03,x.uniforms.uTime.value=t,S.uniforms.uTime.value=t;for(let e of g)e.object.position.y=e.y+Math.sin(t*.45+e.phase)*e.amplitude,e.object instanceof q?e.object.quaternion.copy(n.quaternion):e.object.rotation.y=Math.sin(t*.12+e.phase)*.04;for(let e of _)e.rotation.y=t*.7},dispose(){let e=new Set,t=new Set([i,a,o,s,c,l,u,x,S,C]);n.traverse(n=>{n instanceof q&&(e.add(n.geometry),Array.isArray(n.material)?n.material.forEach(e=>t.add(e)):t.add(n.material),n instanceof Rc&&n.dispose())}),e.forEach(e=>e.dispose()),t.forEach(e=>e.dispose()),n.clear()}}}function lf(e,t){let n=new hc;n.name=`world`,e.add(n);let r=new Qd,i=ef(r,t),a=tf(r,t),o=af(r,t),s=cf(r,t),c=nf(e,t);n.add(a.mesh,o.mesh,i.group,s.group);let l=r.samples.filter(e=>e.kind===vd.Tunnel),u=l.length?l[0].s:0,d=l.length?l[l.length-1].s:0,f=new W;return{group:n,spline:r,sunDir:c.sunDir,tunnelBlend(e){if(!l.length)return 0;let t=r.query(e.x,e.z,-1).s;if(!(u<=d?t>=u&&t<=d:t>=u||t<=d))return 0;let n=Math.min(Math.abs(t-u),Math.abs(t-d));return Math.min(1,n/12)},update(e,t,n,r){f.copy(r),i.update(e,t),o.update(e,t,n),s.update(e,t,n),c.update(e,t,n,f)},dispose(){i.dispose(),a.dispose(),o.dispose(),s.dispose(),c.dispose(),n.removeFromParent()}}}function uf(e,t,n,r=0,i=0,a=0){let o=new q(t,n);return o.position.set(r,i,a),o.castShadow=!0,o.receiveShadow=!0,e.add(o),o}function $(e,t,n,r,i=12){let a=uf(e,new hu(1,i,8),t,n[0],n[1],n[2]);return a.scale.set(r[0],r[1],r[2]),a}function df(e,t,n,r,i,a,o,s){return uf(e,new Ui(a,o,s),t,n,r,i)}function ff(e,t,n,r,i,a=8){let o=new W(n[0],n[1],n[2]),s=new W(r[0],r[1],r[2]),c=s.clone().sub(o),l=uf(e,new Cl(i,i,c.length(),a),t);return l.position.copy(o).add(s).multiplyScalar(.5),l.quaternion.setFromUnitVectors(new W(0,1,0),c.normalize()),l}function pf(e,t,n,r,i,a=.06){let o=new Dl;o.moveTo(n[0][0],-n[0][1]);for(let e=1;e<n.length;e++)o.lineTo(n[e][0],-n[e][1]);o.closePath();let s=new lu(o,{depth:i,bevelEnabled:!0,bevelSegments:1,steps:1,bevelSize:a,bevelThickness:a,curveSegments:8});return s.rotateX(-Math.PI/2),uf(e,s,t,0,r,0)}function mf(e){let t=new Map;for(let n of[...e.children])if(n instanceof q&&!Array.isArray(n.material)){let e=t.get(n.material)??[];e.push(n),t.set(n.material,e)}else mf(n);for(let[n,r]of t){if(r.length<2)continue;let t=r.map(e=>{e.updateMatrix();let t=e.geometry.index?e.geometry.toNonIndexed():e.geometry.clone();return t.applyMatrix4(e.matrix),t}),i=of(t);for(let e of t)e.dispose();if(!i)continue;for(let t of r)t.geometry.dispose(),e.remove(t);let a=new q(i,n);a.castShadow=!0,a.receiveShadow=!0,e.add(a)}}function hf(e){let t=new Set,n=new Set;e.traverse(e=>{if(e instanceof q){t.add(e.geometry);for(let t of Array.isArray(e.material)?e.material:[e.material])n.add(t)}});for(let e of t)e.dispose();for(let e of n)e.dispose()}function gf(e,t){let n=new hc;n.name=`driver_${e.body}`;let r=[],i=(t,n=0)=>{let i=new yu({color:t,roughness:.48,metalness:e.body===`automaton`?.4:.12,emissive:n?t:0,emissiveIntensity:n});return n&&r.push(i),i},a=i(e.primary),o=i(e.secondary),s=i(e.accent,e.body===`golem`||e.body===`moth`?e.glow:0),c=i(e.eye,e.body===`automaton`?e.glow:0),l=i(1647404),u=t.level===`low`?8:12,d=new hc;d.position.y=.38,n.add(d),$(d,o,[0,.03,0],[.36,.42,.25],u),df(d,s,0,.05,-.245,.1,.38,.035);for(let e of[-1,1])ff(n,o,[e*.19,.12,0],[e*.2,.05,-.43],.13),$(n,l,[e*.2,.04,-.47],[.15,.1,.23],8);let f=new hc;f.name=`head`,f.position.set(0,1.03,-.035),n.add(f);let p=[],m=[new hc,new hc];for(let e=0;e<2;e++){let t=e===0?-1:1,n=new hc;n.position.set(t*.35,.22,0),d.add(n),ff(n,o,[0,0,0],[t*.07,-.2,-.14],.105),ff(n,a,[t*.07,-.2,-.14],[0,-.18,-.4],.085),m[e].name=e===0?`hand_L`:`hand_R`,m[e].position.set(0,-.18,-.4),n.add(m[e]),$(m[e],a,[0,0,0],[.11,.1,.12],8),p.push(n)}if(e.body===`otter`){$(f,a,[0,0,0],[.4,.35,.33],u);for(let e of[-1,1]){$(f,a,[e*.34,.23,0],[.14,.14,.09],8),$(f,o,[e*.34,.23,-.075],[.07,.08,.025],8),$(f,s,[e*.13,-.12,-.3],[.17,.12,.1],8),$(f,c,[e*.17,.06,-.306],[.047,.065,.035],8),$(f,l,[e*.16,.28,-.23],[.16,.12,.055],8),$(f,o,[e*.16,.28,-.277],[.115,.08,.023],8);for(let t=0;t<3;t++)ff(f,s,[e*.25,-.11,-.35],[e*.52,-.09+t*.045,-.3],.012,5)}$(f,l,[0,-.1,-.413],[.07,.055,.045],8),ff(d,s,[-.29,.32,0],[.29,.32,0],.13);let e=pf(d,s,[[-.1,.12],[.13,.15],[.26,.87],[.04,.75],[-.13,1.04]],.3,.035,.015);e.rotation.x=-.18}else if(e.body===`golem`){uf(f,new El(.44,0),a).scale.set(1.05,.95,.88);for(let e of[-1,1]){df(f,c,e*.17,.015,-.345,.19,.07,.055);let t=df(f,o,e*.17,.12,-.35,.3,.12,.12);t.rotation.z=e*-.15,uf(d,new El(.23,0),a,e*.4,.2,0);for(let t=0;t<2;t++){let n=uf(d,new wl(.09,.33,5),s,e*(.36+t*.13),.4,.015);n.rotation.z=-e*(.3+t*.3)}}ff(f,s,[-.1,.32,-.3],[-.04,.13,-.397],.018,5),ff(f,s,[-.04,.13,-.397],[.04,-.1,-.402],.018,5),ff(f,s,[.04,-.1,-.402],[.2,-.27,-.29],.018,5),df(f,l,0,-.21,-.34,.27,.045,.04)}else if(e.body===`moth`){$(f,a,[0,0,0],[.36,.35,.3],u);for(let e of[-1,1]){$(f,c,[e*.19,.025,-.255],[.2,.22,.12],8);for(let t=0;t<3;t++)ff(f,s,[e*(.12+t*.06),-.12,-.36],[e*(.12+t*.06),.16,-.35],.009,4);ff(f,a,[e*.17,.25,0],[e*.34,.76,0],.033);for(let t=0;t<5;t++){let n=.37+t*.075;ff(f,s,[e*(.2+t*.027),n,0],[e*(.39+t*.015),n+.05,0],.022,5)}for(let t=0;t<2;t++){let n=$(d,o,[e*(.43-t*.08),.19-t*.29,.28],[.37,.24,.055],8);n.rotation.z=e*(.7-t*1.3),$(d,s,[e*(.56-t*.1),.22-t*.32,.325],[.11,.11,.025],8)}}for(let e=0;e<8;e++){let t=e*Math.PI/4;$(d,a,[Math.cos(t)*.28,.34,Math.sin(t)*.19],[.13,.13,.12],8)}}else if(e.body===`jelly`){a.transparent=!0,a.opacity=.65,a.depthWrite=!1,a.emissive.setHex(e.primary),a.emissiveIntensity=e.glow*.45,r.push(a);let t=uf(f,new hu(.46,u,8,0,Math.PI*2,0,Math.PI*.61),a,0,-.06,0);t.scale.y=.83;let n=uf(f,new gu(.43,.045,6,u),s,0,-.2,0);n.rotation.x=Math.PI/2;for(let e=0;e<7;e++){let t=e*Math.PI*2/7,n=Math.cos(t)*.3,r=Math.sin(t)*.27;uf(f,new _u(new tl([new W(n,-.18,r),new W(n*1.08,-.38,r),new W(n*.8+.07,-.53,r+.07)]),5,.028,5,!1),a)}for(let e of[-1,1])$(f,c,[e*.14,.025,-.421],[.043,.06,.027],8)}else if(e.body===`automaton`){df(f,a,0,0,0,.67,.55,.51),$(f,l,[0,.035,-.275],[.35,.17,.08],8),$(f,c,[0,.035,-.342],[.29,.11,.035],u);for(let e of[-1,1])for(let t of[-.21,.21])$(f,s,[e*.28,t,-.27],[.032,.032,.025],8);for(let e=0;e<4;e++)df(f,l,-.12+e*.08,-.17,-.267,.035,.06,.025);ff(f,o,[.22,.23,.13],[.22,.57,.13],.072),uf(f,new Cl(.1,.1,.06,8),l,.22,.58,.13);for(let e of[-1,1]){let t=uf(d,new Cl(.19,.19,.08,12),s,e*.4,.2,0);t.rotation.z=Math.PI/2;for(let t=0;t<8;t++){let n=t*Math.PI/4,r=df(d,a,e*.41,.2+Math.cos(n)*.2,Math.sin(n)*.2,.1,.09,.09);r.rotation.x=-n}}}else{$(f,a,[0,0,-.01],[.49,.25,.33],u);for(let e of[-1,1])$(f,a,[e*.29,.22,-.12],[.18,.2,.16],8),$(f,s,[e*.29,.24,-.257],[.12,.13,.042],8);$(f,c,[.29,.24,-.301],[.04,.085,.02],8),$(f,l,[-.29,.24,-.301],[.135,.14,.035],8),ff(f,l,[-.46,.31,-.16],[.17,.02,-.315],.022),uf(f,new _u(new tl([new W(-.31,-.065,-.275),new W(0,-.14,-.331),new W(.31,-.065,-.275)]),8,.02,5,!1),l),pf(f,l,[[-.53,.21],[0,-.49],[.53,.21]],.4,.075,.035),uf(f,new Cl(.21,.31,.22,3),o,0,.55,0),$(f,s,[0,.51,-.22],[.075,.085,.025],8)}return mf(n),{root:n,hands:m,emissives:r,update(e){let t=Math.sin(e.time*3.8)*.018,n=e.hitTimer>0,r=n?Math.sin(e.time*32)*.3:0,i=e.boosting?-.23:e.airborne?.12:0;d.position.y=.38+t+(e.airborne?.09:0),d.scale.y=1+Math.sin(e.time*2.6)*.018+(e.airborne?.1:0),d.rotation.set(i+(n?.32:0),0,-e.lean*.17+r),f.position.set(-e.lean*.1,1.03+t+(e.airborne?.15:0),-.035+i*.45),f.rotation.set(n?-.18:i*.35,-e.steer*.35,-e.lean*.1-r*.5);for(let t=0;t<2;t++){let i=t===0?-1:1,a=e.drifting&&t===0;p[t].rotation.set(e.airborne||n?2.25+r:e.boosting?-.25:0,e.steer*.12,i*(e.airborne||n?-.65:a?-1.45:0))}}}}function _f(e,t){let n=new hc;n.name=`kart_${e.id}`;let r=new hc;r.name=`chassis`,n.add(r);let i=[],a=(e,t=.4,n=.25,r=0)=>{let a=new yu({color:e,roughness:t,metalness:n,emissive:r?e:0,emissiveIntensity:r});return r&&i.push(a),a},o=a(e.kart.body),s=a(e.kart.trim,.35),c=a(e.kart.tyre,.7,.1),l=a(e.kart.rim,.28,.4),u=a(3425364,.5,.4),d=a(e.kart.glow,.25,.1,1.5),f=a(16774345,.25,.1,2),p=e.kart.shape,m=p===`buggy`,h=p===`chunky`,g=h?1.03:.99,_=-.94,v=.96,y=h?.46:.42,b=m?.57:h?.54:.5,x=(e,r)=>{let i=r?y:b,a=new W(e*g,i,r?_:v),o=new hc;o.name=`${r?`front`:`rear`}_${e<0?`left`:`right`}_hub`,o.position.copy(a);let s=new hc;s.name=`spin`,o.add(s),n.add(o);let d=r?.3:.38,f=uf(s,new Cl(i,i,d,16),c);f.rotation.z=Math.PI/2;for(let e of[-1,1]){let t=uf(s,new Cl(i*.6,i*.6,.035,12),u,e*(d/2+.008),0,0);t.rotation.z=Math.PI/2;let n=uf(s,new gu(i*.65,.035,4,12),l,e*(d/2+.025),0,0);n.rotation.y=Math.PI/2;for(let t=0;t<5;t++){let n=t*Math.PI*2/5;ff(s,l,[e*(d/2+.035),0,0],[e*(d/2+.035),Math.cos(n)*i*.58,Math.sin(n)*i*.58],.028,5)}let r=uf(s,new Cl(.09,.09,.055,8),l,e*(d/2+.04),0,0);r.rotation.z=Math.PI/2}if(t.level!==`low`)for(let e of[-1,1]){let t=uf(s,new gu(i-.02,.018,4,16),c,e*d*.29,0,0);t.rotation.y=Math.PI/2}return mf(s),{pivot:o,spin:s,radius:i,isFront:r,offset:a}},S={fl:x(-1,!0),fr:x(1,!0),rl:x(-1,!1),rr:x(1,!1)};pf(r,u,[[-.66,-1.2],[.66,-1.2],[.72,1.22],[-.72,1.22]],.36,.13);for(let e of[!0,!1]){let t=e?_:v,n=e?y:b;ff(r,u,[-g,n,t],[g,n,t],.065);for(let e of[-1,1])ff(r,l,[e*.52,.7,t+.15],[e*.89,n,t-.1],.042),ff(r,s,[e*.58,.67,t+.1],[e*.77,n+.08,t-.04],.068)}df(r,d,0,.32,-.35,1.2,.045,.085);for(let e of[-1,1])df(r,d,e*.65,.36,.08,.045,.055,1.6);if(p===`sleek`){pf(r,o,[[-.23,-1.65],[.23,-1.65],[.63,-.56],[.55,1.08],[-.55,1.08],[-.63,-.56]],.49,.25);for(let e of[-1,1])pf(r,s,[[e*.53,-1.15],[e*.83,-.55],[e*.85,.67],[e*.5,.92]],.48,.17);$(r,u,[0,.76,.04],[.46,.3,.73],12);let e=a(7922923,.25,.25);e.transparent=!0,e.opacity=.58,$(r,e,[0,.92,-.52],[.43,.3,.23],12),pf(r,l,[[-.06,-1.55],[.06,-1.55],[.09,-.84],[-.09,-.84]],.81,.018,.015);for(let e of[-1,1])ff(r,u,[e*.49,.63,1.1],[e*.55,1.11,1.19],.05);pf(r,o,[[-1,.99],[1,.99],[1,1.4],[-1,1.4]],1.1,.085);for(let e of[-1,1])df(r,s,e*.98,1.18,1.18,.045,.25,.48)}else if(h){pf(r,o,[[-.72,-1.38],[.72,-1.38],[.78,1.2],[-.78,1.2]],.5,.4,.1);for(let e of[-1,1])for(let t of[!0,!1]){let n=t?y:b,i=uf(r,new gu(n+.1,.115,6,10,Math.PI),o,e*g,n,t?_:v);i.rotation.y=Math.PI/2,i.scale.z=1.7}for(let e of[-1,1])ff(r,u,[e*.58,.42,-1.52],[e*.58,.92,-1.52],.075);ff(r,l,[-.79,.82,-1.53],[.79,.82,-1.53],.09),df(r,u,0,.57,1.4,1.75,.22,.22);for(let e=0;e<5;e++)df(r,u,-.3+e*.15,.72,-1.445,.06,.22,.04);df(r,s,0,.965,-.91,.28,.045,.6)}else if(m){pf(r,o,[[-.45,-1.35],[.45,-1.35],[.64,-.72],[-.64,-.72]],.47,.17);for(let e of[-1,1])ff(r,l,[e*.64,.48,-1.25],[e*.64,.58,1.2],.055),ff(r,l,[e*.64,.52,-.45],[e*.57,1.91,.34],.055),ff(r,l,[e*.57,1.91,.34],[e*.62,.55,1.1],.055),ff(r,s,[e*.65,.52,-.65],[e*.65,.96,.65],.035),pf(r,o,[[e*.55,-.48],[e*.75,-.25],[e*.75,.57],[e*.55,.75]],.55,.13);ff(r,l,[-.57,1.91,.34],[.57,1.91,.34],.055),df(r,u,0,.76,1.03,.72,.4,.52);for(let e=0;e<5;e++)df(r,s,0,.84,.84+e*.095,.82,.06,.035);for(let e of[-1,1])ff(r,l,[e*.17,.92,.98],[e*.32,1.17,1.05],.075)}else{let e=[new V(.04,-1.42),new V(.26,-1.25),new V(.34,-.7),new V(.34,.7),new V(.23,1.3),new V(0,1.62)];for(let t of[-1,1]){let n=uf(r,new Sl(e,12),o,t*.62,.7,0);n.rotation.x=-Math.PI/2,n.scale.z=.8,ff(r,l,[t*.63,.91,-1.15],[t*.63,.94,1.06],.032)}$(r,s,[0,.64,-.1],[.85,.22,1.22],12),pf(r,o,[[-.43,-.73],[.43,-.73],[.47,.7],[-.47,.7]],.73,.12);for(let e of[-1,1]){let t=pf(r,s,[[e*.57,.67],[e*1.02,1.17],[e*.57,1.38]],.86,.06);t.rotation.z=e*.17}}for(let e of[-1,1])$(r,u,[e*.46,.72,-1.31],[.2,.12,.12],8),$(r,f,[e*.46,.73,-1.41],[.145,.072,.04],8);let C=[];for(let e of[-1,1]){ff(r,u,[e*.43,.49,1.03],[e*.48,.65,1.47],.11);let t=uf(r,new Cl(.077,.077,.015,8),d,e*.48,.65,1.48);t.rotation.x=Math.PI/2;let n=new Jr;n.name=e<0?`exhaust_L`:`exhaust_R`,n.position.set(e*.48,.65,1.52),r.add(n),C.push(n)}df(r,c,0,.69,.16,.64,.13,.67);let w=df(r,c,0,.98,.45,.62,.64,.14);w.rotation.x=.12,ff(r,u,[0,.56,-.55],[0,1.03,-.39],.037);let T=uf(r,new gu(.26,.032,5,12),c,0,1.05,-.43);T.rotation.x=-.6,ff(r,l,[-.22,1.05,-.43],[.22,1.05,-.43],.025);let E=gf(e.driver,t);return E.root.position.set(0,.76,.02),r.add(E.root),i.push(...E.emissives),mf(r),{root:n,chassis:r,wheels:S,driver:E,exhaustAnchors:C,boostEmissives:i,radius:h?1.8:1.65,headHeight:1.79,dispose:()=>hf(n)}}var vf=class{constructor(e,t=16){n(this,`gates`,[]),n(this,`spacing`),n(this,`count`),n(this,`totalLength`),this.count=Math.max(4,t),this.totalLength=e.totalLength,this.spacing=this.totalLength/this.count;let r={pos:new W,tangent:new W,right:new W,up:new W,halfWidth:12};for(let t=0;t<this.count;t++){let n=t*this.spacing;e.frameAt(n,r),this.gates.push({index:t,s:n,center:r.pos.clone().add(new W(0,.1,0)),normal:r.tangent.clone(),halfWidth:r.halfWidth+Cd+2,isFinishLine:t===0})}}bandOf(e){return Math.floor(e/this.spacing)}gateOf(e){let t=e%this.count;return t<0?t+this.count:t}bandProgress(e){return(e-this.bandOf(e)*this.spacing)/this.spacing}gridSlot(e,t,n){e.gridSlot(t,n)}},yf={gripAccel:34,brakeAccel:30,accel:20,minSpeed:12,maxSpeed:44,apex:.72},bf=class{constructor(e,t=yf){n(this,`n`),n(this,`spacing`),n(this,`totalLength`),n(this,`lateral`),n(this,`speed`),n(this,`curv`),n(this,`points`);let r=e.samples,i=r.length;this.n=i,this.spacing=e.totalLength/i,this.totalLength=e.totalLength;let a=new Float32Array(i),o=new Float32Array(i),s=new Float32Array(i),c=new Float32Array(i*3),l=new Float32Array(i);for(let e=0;e<i;e++){let n=r[e],i=n.curvature,a=n.halfWidth-2.2,s=Ju(i*220,-1,1)*a*t.apex;l[e]=s,o[e]=Math.abs(i)}let u=l,d=a,f=Math.max(4,Math.round(26/this.spacing));for(let e=0;e<5;e++){for(let e=0;e<i;e++){let t=0;for(let n=-f;n<=f;n++)t+=u[((e+n)%i+i)%i];d[e]=t/(f*2+1)}let e=u;u=d,d=e}for(let t=0;t<i;t++){let n=e.samples[t].halfWidth-2;a[t]=Ju(u[t],-n,n)}let p=this.spacing;for(let e=0;e<i;e++){let n=Math.max(1e-4,Math.abs(r[e].curvature));s[e]=Ju(Math.sqrt(t.gripAccel/n),t.minSpeed,t.maxSpeed)}for(let e=0;e<2;e++){for(let e=0;e<i;e++){let n=(e-1+i)%i,r=Math.sqrt(s[n]*s[n]+2*t.accel*p);s[e]>r&&(s[e]=r)}for(let e=i-1;e>=0;e--){let n=(e+1)%i,r=Math.sqrt(s[n]*s[n]+2*t.brakeAccel*p);s[e]>r&&(s[e]=r)}}for(let e=0;e<i;e++){let t=r[e],n=a[e];c[e*3]=t.pos.x+t.right.x*n,c[e*3+1]=t.pos.y+n*Math.tan(t.bank),c[e*3+2]=t.pos.z+t.right.z*n}this.lateral=a,this.curv=o,this.speed=s,this.points=c}indexAt(e){let t=e/this.totalLength*this.n,n=Math.floor(t)%this.n;return n<0?n+this.n:n}speedAt(e){let t=e/this.totalLength*this.n,n=Math.floor(t),r=t-n,i=this.wrap(n),a=this.wrap(n+1);return this.speed[i]+(this.speed[a]-this.speed[i])*r}lateralAt(e){let t=e/this.totalLength*this.n,n=Math.floor(t),r=t-n,i=this.wrap(n),a=this.wrap(n+1);return this.lateral[i]+(this.lateral[a]-this.lateral[i])*r}pointAt(e,t){let n=e/this.totalLength*this.n,r=Math.floor(n),i=n-r,a=this.wrap(r)*3,o=this.wrap(r+1)*3;return t.set(this.points[a]+(this.points[o]-this.points[a])*i,this.points[a+1]+(this.points[o+1]-this.points[a+1])*i,this.points[a+2]+(this.points[o+2]-this.points[a+2])*i),t}wrap(e){let t=e%this.n;return t<0?t+this.n:t}minSpeedAhead(e,t){let n=Math.max(1,Math.round(t/this.spacing)),r=1/0;for(let t=0;t<n;t++){let n=this.speedAt(e+t*this.spacing);n<r&&(r=n)}return r}},xf=new W;new W;var Sf=class{constructor(e){n(this,`profile`),n(this,`smootherThrottle`,0),n(this,`smootherBrake`,0),n(this,`smootherSteer`,0),n(this,`noisePhase`,0),n(this,`stuckTimer`,0),n(this,`reversing`,0),n(this,`driftHold`,0),n(this,`controls`,{steer:0,throttle:0,brake:0,drift:!1,driftPressed:!1}),n(this,`avoid`,0),n(this,`rubberBand`,1),n(this,`lastSteer`,0),this.profile=e,this.noisePhase=e.seed%1e3*.017}reset(){this.smootherThrottle=0,this.smootherBrake=0,this.smootherSteer=0,this.stuckTimer=0,this.reversing=0,this.driftHold=0,this.avoid=0,this.rubberBand=1}update(e,t,n,r,i){let a=this.profile,o=n.line,s=n.spline,c=Math.abs(t.speed),l=t.trackS;if(c<2&&t.spinTimer<=0?this.stuckTimer+=e:this.stuckTimer=Math.max(0,this.stuckTimer-e*2),this.reversing>0)return this.reversing-=e,this.controls.steer=-this.lastSteer*.6,this.controls.throttle=0,this.controls.brake=1,this.controls.drift=!1,this.controls.driftPressed=!1,this.controls;if(this.stuckTimer>1.5)return this.reversing=1.05,this.stuckTimer=0,this.controls.steer=0,this.controls.throttle=0,this.controls.brake=1,this.controls.drift=!1,this.controls.driftPressed=!1,this.controls;let u=1+a.reaction*2,d=Ju((7+c*.62)*u*(.92+a.aggression*.16),8,36);this.noisePhase+=e*.35;let f=Math.sin(this.noisePhase)*a.lineNoise,p=0;for(let e of n.neighbours){let n=e.x-t.pos.x,r=e.z-t.pos.z,i=n*n+r*r;if(i>400||i<1e-4)continue;let a=Math.sin(t.yaw),o=Math.cos(t.yaw),s=n*-a+r*-o;if(s<.4)continue;let c=n*o+r*-a,l=1-X((Math.sqrt(i)-3)/17);p-=Math.sign(c||1)*l*3.6,e.isPlayer&&s<9&&(p-=Math.sign(c||1)*l*2.2)}this.avoid=Z(this.avoid,Ju(p,-4.5,4.5),5,e);let m=o.lateralAt(l+d*.55)+f+this.avoid;o.pointAt(l+d,xf);let h=s.sampleAtS(l+d),g=h.halfWidth-2.4,_=Ju(m,-g,g);xf.x+=h.right.x*(_-o.lateralAt(l+d)),xf.z+=h.right.z*(_-o.lateralAt(l+d));let v=xf.x-t.pos.x,y=xf.z-t.pos.z,b=Math.atan2(-v,-y),x=Ju(Zu(t.yaw-b)*(1.75+a.aggression*.5),-1,1),S=o.speedAt(l+d*.5),C=S*a.skill*this.rubberBand;C*=.97-(1-a.aggression)*.05;let w=Ju(c*c/26,12,60),T=o.minSpeedAhead(l+2,w)*a.skill*this.rubberBand;C=Math.min(C,Math.max(T,S));let E=C-c,D,O;E>.6?(D=X(E/7),O=0):E>-1.6?(D=.35,O=0):(D=0,O=X(-E/9)),o.curv[s.sampleAtS(l+6).i]<.004&&c<C*1.02&&(D=1);let k=s.sampleAtS(l),A=Math.abs(k.curvature),j=!1,ee=!1;a.canDrift&&t.grounded&&(A>.0135&&c>17&&Math.abs(x)>.34&&this.driftHold<=0&&(this.driftHold=.9+a.aggression,ee=!0),this.driftHold>0&&(this.driftHold-=e,j=!0,D=Math.max(D,.75))),this.lastSteer=x;let te=8+a.aggression*7;return this.smootherThrottle=Z(this.smootherThrottle,D,te,e),this.smootherBrake=Z(this.smootherBrake,O,te*1.5,e),this.smootherSteer=Z(this.smootherSteer,x,12,e),this.controls.steer=Ju(this.smootherSteer,-1,1),this.controls.throttle=X(this.smootherThrottle),this.controls.brake=X(this.smootherBrake),this.controls.drift=j,this.controls.driftPressed=ee,this.controls}},Cf={maxSpeed:41,accel:26,brake:46,reverseAccel:12,reverseMaxSpeed:11,steerRate:1.15,steerRefSpeed:16,grip:9,driftGrip:2.2,driftSteer:1.55,driftSlip:.34,offroadMaxSpeed:.66,offroadDrag:15,weight:1,radius:1.5,boostGrip:6.5},wf=[0,1.05,2.15,3.3],Tf=[0,.7,1.15,1.7],Ef=[0,12,18,25];function Df(){return{pos:new W,vel:new W,yaw:0,yawRate:0,vy:0,grounded:!0,surfaceY:0,airHeight:0,steer:0,visualSteer:0,drifting:!1,driftDir:0,driftCharge:0,driftTier:0,miniTurbo:0,boostTime:0,boostPower:0,padBoostTime:0,spinTimer:0,spinRate:0,landSquash:0,justLanded:!1,landImpact:0,onRoad:!0,lateral01:0,speed:0,slip:0,trackS:0,trackIndex:0,wallHit:!1,wallHitStrength:0,travelled:0}}var Of=0,kf=class{constructor(e){n(this,`params`),n(this,`state`),n(this,`_surf`,{index:0,lateral:0,halfWidthAt:12,onRoad:!0,s:0,rightX:1,rightZ:0,roadY:0,upX:0,upY:1,upZ:0}),this.params=e,this.state=Df()}reset(e,t,n,r){let i=this.state;i.pos.set(e,t,n),i.vel.set(0,0,0),i.yaw=r,i.yawRate=0,i.vy=0,i.grounded=!0,i.airHeight=0,i.steer=0,i.visualSteer=0,i.drifting=!1,i.driftDir=0,i.driftCharge=0,i.driftTier=0,i.miniTurbo=0,i.boostTime=0,i.boostPower=0,i.padBoostTime=0,i.spinTimer=0,i.spinRate=0,i.landSquash=0,i.justLanded=!1,i.speed=0,i.slip=0,i.wallHit=!1,i.wallHitStrength=0}applyBoost(e,t){let n=this.state;n.boostTime=Math.max(n.boostTime,e),n.boostPower=Math.max(n.boostPower,t)}applyPadBoost(e,t){let n=this.state;n.padBoostTime=Math.max(n.padBoostTime,e),n.boostPower=Math.max(n.boostPower,t)}spinOut(e,t){let n=this.state;n.spinTimer=Math.max(n.spinTimer,e),n.spinRate=(t>=0?1:-1)*(7+Math.random()*3.5),n.drifting=!1,n.driftDir=0,n.driftCharge=0,n.driftTier=0,n.boostTime=0,n.padBoostTime=0,n.vel.multiplyScalar(.4)}knockback(e,t,n,r){let i=this.state;i.vel.x+=e*n,i.vel.z+=t*n,i.vy=Math.max(i.vy,r),i.grounded=!1}placeOnTrack(e,t,n,r,i){let a=this.state;a.pos.set(e,t,n),a.yaw=r,a.vy=0,a.grounded=!0,a.airHeight=0,a.spinTimer=0,a.drifting=!1,a.driftDir=0,a.driftCharge=0,a.driftTier=0;let o=Math.sin(r),s=Math.cos(r);a.vel.set(-o*i,0,-s*i),a.speed=i,a.slip=0}step(e,t,n,r=1){let i=this.params,a=this.state,o=a.pos.x,s=a.pos.z;a.justLanded=!1;let c=n.querySurface(o,s,a.trackIndex,this._surf);a.trackIndex=c.index,a.trackS=c.s,a.lateral01=Math.abs(c.lateral)/Math.max(.001,c.halfWidthAt),a.onRoad=c.onRoad;let l=n.surfaceOffsetAt?n.surfaceOffsetAt(o,s):0;a.surfaceY=n.surfaceHeight(o,s,c.index)+l;let u=Math.sin(a.yaw),d=Math.cos(a.yaw),f=-u,p=-d,m=d,h=-u,g=a.vel.x*f+a.vel.z*p,_=a.vel.x*m+a.vel.z*h;if(a.spinTimer>0){if(a.spinTimer-=e,a.yaw+=a.spinRate*e,a.spinRate=Z(a.spinRate,0,1.6,e),g=Z(g,0,1.9,e),_=Z(_,0,3.2,e),a.spinTimer<.45){let n=1-a.spinTimer/.45,r=Ju(t.steer,-1,1);a.steer=Z(a.steer,r*n,14,e),a.yaw+=-a.steer*i.steerRate*1.2*e}else a.steer=Z(a.steer,0,12,e);a.visualSteer=Z(a.visualSteer,a.steer,12,e),a.speed=g,a.slip=Math.abs(_),g*=this.settleVertical(e),this.integrate(e,g,_,f,p,m,h),this.resolveWalls(c,t.steer);return}let v=t.noControl===!0,y=v?0:Ju(t.steer,-1,1),b=v?0:X(t.throttle),x=v?0:X(t.brake),S=Math.abs(g),C=X(S/i.steerRefSpeed),w=1-.42*X(S/(i.maxSpeed*1.15)),T=1.65*(1-X(S/16)),E=x>0&&b===0&&g<-.4?-1:1,D=Math.max(.72,Math.max(C*w,T))*E;a.steer=Z(a.steer,y,S<6?16:9.5,e),a.visualSteer=Z(a.visualSteer,a.steer,14,e);let O=a.grounded&&S>i.maxSpeed*.2;if(t.driftPressed&&O&&!a.drifting)a.vy=4.6,a.grounded=!1,a.drifting=!0,a.driftDir=y>.15?1:y<-.15?-1:0,a.driftCharge=0,a.driftTier=0;else if(a.drifting){let n=a.spinTimer<=0&&S>i.maxSpeed*.13&&a.airHeight<4.5;if(!t.drift||!n)a.drifting=!1,a.driftTier>0&&(a.miniTurbo=1,this.applyBoost(Tf[a.driftTier],Ef[a.driftTier])),a.driftCharge=0,a.driftTier=0,a.driftDir=0;else{a.driftDir===0&&Math.abs(a.steer)>.3&&(a.driftDir=a.steer>0?1:-1),a.driftCharge=Math.min(a.driftCharge+e,4.6);let t=0;a.driftCharge>=wf[3]?t=3:a.driftCharge>=wf[2]?t=2:a.driftCharge>=wf[1]&&(t=1),a.driftTier=t}}let k;if(a.grounded){if(a.drifting){let e=Math.min(1,D+.32*Math.sign(D||1));k=-a.steer*i.steerRate*i.driftSteer*e,k-=a.driftDir*i.driftSlip*(.6+.4*X(S/i.maxSpeed))}else k=-a.steer*i.steerRate*D;!a.drifting&&Math.abs(_)>2&&Math.abs(y)<.25&&(k-=Math.sign(_)*Math.min(.5,Math.abs(_)*.025)*Math.sign(D||1))}else k=-a.steer*i.steerRate*.34;a.yawRate=k,a.yaw+=k*e;let A=(a.drifting?i.driftGrip:i.grip)*r;(a.boostTime>0||a.padBoostTime>0)&&(A=Math.max(A,i.boostGrip)),a.grounded?a.onRoad||(A*=.72):A*=.08,_*=Math.exp(-A*e);let j=a.boostTime>0||a.padBoostTime>0,ee=(i.maxSpeed+(j?a.boostPower:0))*(a.onRoad?1:i.offroadMaxSpeed);if(a.grounded){if(b>0){let t=X(Math.max(0,g)/Math.max(1,ee)),n=1-t*t*.9,r=S<6?1.35:1;g+=b*i.accel*n*(j?1.9:1)*r*e}x>0&&(g-=g>.4?x*i.brake*e:x*i.reverseAccel*e),a.onRoad||(g-=Math.sign(g)*Math.min(Math.abs(g)/Math.max(e,1e-4),i.offroadDrag*e)),g-=g*.08*e,g-=Math.sign(g)*g*g*9e-4*e,g=Ju(g,-i.reverseMaxSpeed,ee)}else g-=g*.05*e;g*=this.settleVertical(e),this.integrate(e,g,_,f,p,m,h),this.resolveWalls(c,t.steer)}settleVertical(e){let t=this.state;if(t.pos.y=Math.max(t.pos.y,t.surfaceY),t.grounded){let e=t.surfaceY-t.pos.y;return e<-.4?(t.grounded=!1,t.vy=.5,t.airHeight=-e):(t.pos.y=t.surfaceY,t.airHeight=0),1}if(t.vy-=30*e,t.pos.y+=t.vy*e,t.pos.y<=t.surfaceY&&t.vy<=0){let e=X(Math.abs(t.vy)/18);return t.pos.y=t.surfaceY,t.vy=0,t.grounded=!0,t.airHeight=0,t.landSquash=e,t.landImpact=e,t.justLanded=!0,e>.35?1-.14*e:1}return t.airHeight=t.pos.y-t.surfaceY,1}integrate(e,t,n,r,i,a,o){let s=this.state,c=s.pos.x,l=s.pos.z;s.speed=t,s.slip=Math.abs(n),s.vel.set(r*t+a*n,s.vy,i*t+o*n),s.pos.x+=s.vel.x*e,s.pos.z+=s.vel.z*e;let u=s.pos.x-c,d=s.pos.z-l;s.travelled=Math.sqrt(u*u+d*d),s.boostTime>0&&(s.boostTime=Math.max(0,s.boostTime-e)),s.padBoostTime>0&&(s.padBoostTime=Math.max(0,s.padBoostTime-e)),s.boostTime===0&&s.padBoostTime===0&&(s.boostPower=0),s.landSquash=Math.max(0,s.landSquash-e*3.2),s.wallHit=!1}resolveWalls(e,t=0){let n=this.state,r=e.halfWidthAt+Of-this.params.radius,i=Math.abs(e.lateral)-r;if(i<=0)return;let a=e.lateral>=0?1:-1;n.pos.x-=e.rightX*a*i,n.pos.z-=e.rightZ*a*i;let o=(n.vel.x*e.rightX+n.vel.z*e.rightZ)*a;if(o>0){n.vel.x-=e.rightX*a*o*1.2,n.vel.z-=e.rightZ*a*o*1.2;let t=Math.hypot(n.vel.x,n.vel.z)<7?Math.min(.18,o*.015):Math.min(.45,o*.032);n.vel.x*=1-t,n.vel.z*=1-t,n.wallHit=!0,n.wallHitStrength=X(o/20)}let s=t||n.steer||0;s*a<-.05&&(n.yaw+=-a*Math.abs(s)*.045)}},Af=new W,jf=new W,Mf=new W,Nf=new W,Pf=new xr,Ff=new Gn,If=new jr,Lf=class{constructor(e){n(this,`model`),n(this,`nx`,0),n(this,`ny`,1),n(this,`nz`,0),n(this,`wheelSpin`,0),n(this,`lean`,0),n(this,`pitch`,0),n(this,`squash`,0),n(this,`boostGlow`,1),n(this,`hitShake`,0),n(this,`lastSpeed`,0),n(this,`emissiveMats`,[]),n(this,`emissiveBase`,[]),n(this,`exhaustParents`,[]),n(this,`extras`,{rearWheels:[new W,new W],frontWheels:[new W,new W],exhausts:[],center:new W,head:new W}),this.model=e;let t=e=>{this.emissiveMats.includes(e)||(this.emissiveMats.push(e),this.emissiveBase.push(e.emissiveIntensity))};for(let n of e.boostEmissives)t(n);for(let n of e.driver.emissives)t(n);for(let t of e.exhaustAnchors)this.exhaustParents.push(t),this.extras.exhausts.push(new W)}snap(e){this.nx=0,this.ny=1,this.nz=0,this.lean=0,this.pitch=0,this.squash=0,this.boostGlow=1,this.lastSpeed=e.speed,this.updateTransform(e,1,0,1,0)}update(e,t,n,r,i){let a=t.grounded?12:4;this.nx=Z(this.nx,n,a,e),this.ny=Z(this.ny,r,a,e),this.nz=Z(this.nz,i,a,e),jf.set(this.nx,this.ny,this.nz).lengthSq()<1e-6&&(this.nx=0,this.ny=1,this.nz=0),this.updateTransform(t,e,this.nx,this.ny,this.nz)}updateTransform(e,t,n,r,i){let a=this.model,o=a.root;this.squash=Z(this.squash,e.landSquash,9,t),o.position.set(e.pos.x,e.pos.y-.22*this.squash-.02,e.pos.z);let s=Math.sin(e.yaw),c=Math.cos(e.yaw);Mf.set(-s,0,-c),jf.set(n,r,i).normalize(),Af.crossVectors(Mf,jf),Af.lengthSq()<1e-6&&Af.set(1,0,0),Af.normalize(),Mf.crossVectors(jf,Af).normalize(),Nf.copy(Mf).negate(),Pf.makeBasis(Af,jf,Nf),Ff.setFromRotationMatrix(Pf),o.quaternion.copy(Ff);let l=X(Math.abs(e.speed)/40),u=Ju(e.steer*(.09+.13*l)+(e.drifting?e.driftDir*.055:0),-.24,.24);this.lean=Z(this.lean,u,8,t);let d=e.boostTime>0||e.padBoostTime>0,f=(e.speed-this.lastSpeed)/Math.max(t,.001);this.lastSpeed=e.speed;let p=Ju(-f*.006*(d?1.6:1),-.11,.11);this.pitch=Z(this.pitch,p,6,t),this.hitShake=Z(this.hitShake,0,6,t);let m=Math.max(this.hitShake,e.spinTimer>0?Math.min(.2,e.spinTimer*.06):0),h=m>.001?m*Math.sin(performance.now()*.045):0;If.set(this.pitch+h,0,this.lean+h*.5),a.chassis.rotation.copy(If),a.chassis.position.y=-.07*this.squash;let g=a.wheels,_=g.rl.radius||.5;this.wheelSpin+=e.speed/Math.max(.15,_)*t,(this.wheelSpin>1e6||this.wheelSpin<-1e6)&&(this.wheelSpin=0);let v=e.visualSteer*.5;g.fl.pivot.rotation.y=-v,g.fr.pivot.rotation.y=-v,g.fl.spin.rotation.x=this.wheelSpin,g.fr.spin.rotation.x=this.wheelSpin;let y=this.wheelSpin+(e.drifting?Math.min(1.5,e.slip*.08):0);g.rl.spin.rotation.x=y,g.rr.spin.rotation.x=y;let b=this.squash*.18;g.fl.pivot.position.y=g.fl.offset.y+b*.6-this.lean*.4,g.fr.pivot.position.y=g.fr.offset.y+b*.6+this.lean*.4,g.rl.pivot.position.y=g.rl.offset.y+b*.3-this.lean*.3,g.rr.pivot.position.y=g.rr.offset.y+b*.3+this.lean*.3;let x=d?2.4:e.drifting&&e.driftCharge>.5?.75:1;this.boostGlow=Z(this.boostGlow,x,10,t);let S=d?.85+Math.random()*.3:1,C=this.boostGlow*S;for(let e=0;e<this.emissiveMats.length;e++)this.emissiveMats[e].emissiveIntensity=this.emissiveBase[e]*C;this.updateExtras()}updateExtras(){let e=this.model,t=this.extras;e.root.updateWorldMatrix(!0,!1),Rf(e.wheels.rl,t.rearWheels[0]),Rf(e.wheels.rr,t.rearWheels[1]),Rf(e.wheels.fl,t.frontWheels[0]),Rf(e.wheels.fr,t.frontWheels[1]);for(let e=0;e<this.exhaustParents.length&&e<t.exhausts.length;e++)this.exhaustParents[e].updateWorldMatrix(!0,!1),t.exhausts[e].setFromMatrixPosition(this.exhaustParents[e].matrixWorld);t.center.setFromMatrixPosition(e.root.matrixWorld),t.center.y+=e.headHeight*.45,t.head.setFromMatrixPosition(e.root.matrixWorld),t.head.y+=e.headHeight}punch(e){this.hitShake=Math.max(this.hitShake,Ju(e,0,1)*.24)}get rootObject(){return this.model.root}};function Rf(e,t){t.setFromMatrixPosition(e.pivot.matrixWorld),t.y-=e.radius*.92}function zf(e,t=Cf){let n=e.stats;return{...t,maxSpeed:t.maxSpeed*n.speed,accel:t.accel*n.accel,steerRate:t.steerRate*(.72+.28*n.handling),grip:t.grip*(.78+.22*n.handling),driftGrip:t.driftGrip*(.82+.18*n.handling),weight:n.weight}}var Bf=class{constructor(e,t,r=zf(e)){n(this,`spec`),n(this,`physics`),n(this,`visual`),n(this,`model`),n(this,`object`),n(this,`groundNormal`,{x:0,y:1,z:0}),n(this,`baseSpeed`),n(this,`coinBoost`,1),this.spec=e,this.physics=new kf(r),this.baseSpeed=r.maxSpeed,this.model=_f(e,t),this.visual=new Lf(this.model),this.object=new hc,this.object.name=`kart_${e.id}`,this.object.add(this.model.root)}spawn(e,t,n,r){this.physics.reset(e,t,n,r),this.coinBoost=1,this.physics.params.maxSpeed=this.baseSpeed,this.visual.snap(this.physics.state)}step(e,t,n,r=1){let i=this.physics.params,a=this.baseSpeed*this.coinBoost;i.maxSpeed!==a&&(i.maxSpeed=a),this.physics.step(e,t,n,r)}setGroundNormal(e,t,n){this.groundNormal.x=e,this.groundNormal.y=t,this.groundNormal.z=n}syncVisual(e){this.visual.update(e,this.physics.state,this.groundNormal.x,this.groundNormal.y,this.groundNormal.z)}dispose(){this.model.dispose()}},Vf=class{constructor(e,t,r,i){n(this,`id`),n(this,`kind`),n(this,`name`),n(this,`isPlayer`),n(this,`kart`),n(this,`progress`,{lap:0,checkpoint:0,distance:0,finished:!1,finishTime:0,finishRank:0,lapTimes:[]}),n(this,`rank`,1),n(this,`item`,null),n(this,`itemRoll`,0),n(this,`invuln`,0),n(this,`shield`,0),n(this,`slickTimer`,0),n(this,`coins`,0),n(this,`frozen`,!0),n(this,`controls`,{steer:0,throttle:0,brake:0,drift:!1,driftPressed:!1}),n(this,`currentLapTime`,0),n(this,`wallSfxCooldown`,0),n(this,`recoverTimer`,0),n(this,`prevRear`,[new W,new W]),n(this,`hasPrev`,!1),n(this,`backDir`,new W),n(this,`gridPoint`,{pos:new W,tangent:new W,right:new W,up:new W,halfWidth:12}),n(this,`lastRawS`,NaN),n(this,`unwrappedS`,0),n(this,`prevBandU`,0),this.id=e,this.kind=r,this.isPlayer=r===`player`,this.name=t.name,this.kart=new Bf(t,i)}get state(){return this.kart.physics.state}get pos(){return this.kart.physics.state.pos}resetOnGrid(e,t){let n=this.gridPoint;e.gridSlot(t,n);let r=Math.atan2(-n.tangent.x,-n.tangent.z);this.kart.spawn(n.pos.x,n.pos.y,n.pos.z,r),this.progress={lap:0,checkpoint:0,distance:0,finished:!1,finishTime:0,finishRank:0,lapTimes:[]},this.item=null,this.itemRoll=0,this.invuln=0,this.shield=0,this.slickTimer=0,this.coins=0,this.frozen=!0,this.currentLapTime=0,this.recoverTimer=0,this.rank=1,this.hasPrev=!1,this.lastRawS=NaN,this.unwrappedS=0,this.controls.steer=0,this.controls.throttle=0,this.controls.brake=0,this.controls.drift=!1,this.controls.driftPressed=!1}step(e,t){if(this.invuln>0&&(this.invuln-=e),this.shield>0&&(this.shield-=e),this.slickTimer>0&&(this.slickTimer-=e),this.wallSfxCooldown>0&&(this.wallSfxCooldown-=e),this.itemRoll>0&&(this.itemRoll-=e),this.frozen){let n=this.kart.physics.state;n.vel.set(0,0,0),n.speed=0,n.slip=0,n.vy=0,n.steer=0,n.visualSteer=0,this.controls.steer=0,this.controls.throttle=0,this.controls.brake=0,this.controls.drift=!1,this.controls.driftPressed=!1,this.kart.physics.step(e,this.controls,t,1),n.vel.set(0,0,0),n.speed=0,this.kart.setGroundNormal(t.lastUp.x,t.lastUp.y,t.lastUp.z);return}let n=this.slickTimer>0?.32:1;this.kart.step(e,this.controls,t,n),this.kart.setGroundNormal(t.lastUp.x,t.lastUp.y,t.lastUp.z),this.currentLapTime+=e}grantLaunchBoost(){this.kart.physics.applyBoost(1.1,Ef[2]),this.kart.visual.punch(.25)}updateBackDir(){let e=this.state;this.backDir.set(Math.sin(e.yaw),0,Math.cos(e.yaw))}syncVisual(e,t,n){let r=this.state;this.kart.syncVisual(e);let i=this.kart.visual.extras;if(!n){this.hasPrev=!1;return}let a=r.grounded&&(r.drifting||r.slip>3.4)&&Math.abs(r.speed)>6;if(this.hasPrev){let e=X(r.slip/12+(r.drifting?.45:0));if(a&&e>.12){for(let n=0;n<2;n++){let r=this.prevRear[n],a=i.rearWheels[n],o=a.x-r.x,s=a.z-r.z;o*o+s*s>9e-4&&t.skidMark(r.x,r.y+.03,r.z,a.x,a.y+.03,a.z,.34,e*.9)}if(Math.random()<.55){let e=i.rearWheels[Math.random()<.5?0:1];t.driftSmoke(e.x,e.y+.25,e.z,13424864)}}}if(this.prevRear[0].copy(i.rearWheels[0]),this.prevRear[1].copy(i.rearWheels[1]),this.hasPrev=!0,!r.onRoad&&r.grounded&&Math.abs(r.speed)>8)for(let e=0;e<2;e++){let n=i.rearWheels[e];t.groundSpray(n.x,n.y+.15,n.z,this.backDir.x,this.backDir.z,13218180)}let o=r.boostTime>0||r.padBoostTime>0,s=o?1:X(Math.abs(r.speed)/34)*.7;if(r.grounded&&(s>.15||o)){let e=this.kart.spec.kart.glow;for(let n=0;n<i.exhausts.length;n++){let r=i.exhausts[n];t.exhaust(r.x,r.y,r.z,this.backDir.x,this.backDir.z,s),o&&t.boostTrail(r.x,r.y+.1,r.z,-this.backDir.x*.4,-this.backDir.z*.4,e)}}r.justLanded&&r.landImpact>.3&&t.puff(i.center.x,r.pos.y+.15,i.center.z,0,1.4,0,12371660,1.4,.55,2.4,1.5,2.2)}hit(e,t){return this.invuln>0||this.shield>0||this.progress.finished?!1:(this.kart.physics.spinOut(e,t),this.invuln=1.4,this.kart.visual.punch(.85),!0)}addCoin(e){return this.coins>=e?!1:(this.coins++,this.kart.coinBoost=1+this.coins*.0045,!0)}get boostFromCoins(){return this.kart.coinBoost}dropCoins(){this.coins=Math.max(0,this.coins-3),this.kart.coinBoost=1+this.coins*.0045}updateProgress(e){let t=this.state.trackS,n=e.totalLength;if(Number.isNaN(this.lastRawS))this.lastRawS=t,this.unwrappedS=t>n*.5?t-n:t,this.progress.checkpoint=e.count-1;else{let e=t-this.lastRawS;e>n*.5?e-=n:e<-n*.5&&(e+=n),this.unwrappedS+=e,this.lastRawS=t}let r=this.unwrappedS;if(this.progress.finished){this.progress.distance=r;return}let i=e.bandOf(this.prevBandU),a=e.bandOf(r);if(this.prevBandU=r,a>i&&a-i<6)for(let t=i+1;t<=a;t++)this.onGate(e.gateOf(t),e);this.progress.distance=r}onGate(e,t){let n=this.progress;if(e===0){if(n.checkpoint===t.count-1){let e=n.lap===0;n.lap++,e||n.lapTimes.push(this.currentLapTime),this.currentLapTime=0,n.checkpoint=0}return}e===n.checkpoint+1&&(n.checkpoint=e)}displayLap(e){return Math.min(e,Math.max(1,this.progress.lap))}hasCompleted(e){return this.progress.lap>e}dispose(){this.kart.dispose()}},Hf=class{constructor(e){n(this,`lastUp`,new W(0,1,0)),n(this,`lastHalfWidth`,12),n(this,`scratch`,{index:0,lateral:0,u:0,s:0,roadY:0,groundY:0,onRoad:!0}),this.spline=e}querySurface(e,t,n,r){let i=this.spline.query(e,t,n,this.scratch),a=this.spline.sampleAtS(i.s);return r.index=i.index,r.lateral=i.lateral,r.halfWidthAt=a.halfWidth,r.onRoad=Math.abs(i.lateral)<=a.halfWidth,r.s=i.s,r.rightX=a.right.x,r.rightZ=a.right.z,r.roadY=i.roadY,r.upX=a.up.x,r.upY=a.up.y,r.upZ=a.up.z,this.lastUp.set(a.up.x,a.up.y,a.up.z),this.lastHalfWidth=a.halfWidth,r}surfaceHeight(e,t,n){return this.spline.surfaceHeight(e,t,n)}},Uf={photon:{id:`photon`,name:`Photon Pulse`,icon:`⚡`,color:61439,weight:10,blurb:`High-speed laser bolt that ricochets up to 3 times.`,held:!0},drone:{id:`drone`,name:`Seeker Drone`,icon:`🎯`,color:16733952,weight:10,blurb:`Homing torpedo tracking the racer ahead.`,held:!0},orbital:{id:`orbital`,name:`Orbital Ion Strike`,icon:`🛰️`,color:65535,weight:5,blurb:`Satellite EMP strike on the 1st place leader.`,held:!0},mine:{id:`mine`,name:`EMP Nanomine`,icon:`💣`,color:16711765,weight:9,blurb:`Deploy a hazard grid triggering a 360 spinout.`,held:!0},turbo:{id:`turbo`,name:`Overdrive Nitro`,icon:`🚀`,color:16755200,weight:8,blurb:`Instant supercharge speed boost.`,held:!1},triple_turbo:{id:`triple_turbo`,name:`Triple Nitro`,icon:`🚀`,color:16746496,weight:6,blurb:`Three successive bursts of rocket speed.`,held:!0},matrix:{id:`matrix`,name:`Cyber Matrix`,icon:`⭐`,color:16711935,weight:4,blurb:`Total neon invulnerability and competitor knockback.`,held:!0},shockwave:{id:`shockwave`,name:`Sonic Shockwave`,icon:`📢`,color:7798768,weight:6,blurb:`360 kinetic wave destroying weapons and repelling karts.`,held:!0},glitch:{id:`glitch`,name:`Quantum Glitch`,icon:`🌐`,color:11141375,weight:3,blurb:`Digital EMP shrinking and slowing competitors.`,held:!0},decoy:{id:`decoy`,name:`Holo-Decoy`,icon:`📦`,color:16720384,weight:6,blurb:`Explosive red decoy box shocking anyone who takes it.`,held:!0},bolt:{id:`bolt`,name:`Photon Pulse`,icon:`⚡`,color:61439,weight:10,blurb:`Laser bolt.`,held:!0},blast:{id:`blast`,name:`Sonic Bloom`,icon:`📢`,color:7798768,weight:5,blurb:`Shockwave.`,held:!0},shield:{id:`shield`,name:`Pearl Ward`,icon:`🛡️`,color:12189519,weight:4,blurb:`Blocks hits.`,held:!0}},Wf=[`bolt`,`mine`,`turbo`,`blast`,`shield`];function Gf(e,t,n){let r=X(t<=1?0:(e-1)/(t-1)),i={bolt:12-r*3,mine:10+r*2,turbo:4+r*8,blast:1+r*9,shield:7-r*4},a=0;for(let e of Wf)a+=i[e];let o=n()*a;for(let e of Wf)if(o-=i[e],o<=0)return e;return`bolt`}var Kf=4,qf=class{constructor(e,t,r){n(this,`group`,new hc),n(this,`slots`,[]),n(this,`geom`),n(this,`runeGeom`),n(this,`shellMat`),n(this,`runeMat`),this.vfx=r;let i=t.level===`low`?0:1;this.geom=new Ui(1.5,1.5,1.5),this.runeGeom=new fu(.52,i),this.shellMat=new yu({color:2830190,emissive:5995775,emissiveIntensity:.55,roughness:.25,metalness:.5,transparent:!0,opacity:.86}),this.runeMat=new gi({color:14086399,blending:h,transparent:!0});let a={pos:new W,tangent:new W,right:new W,up:new W,halfWidth:12};for(let n of Gd){let r=e.sAt(n);e.frameAt(r,a);let i=Math.max(1,n.count);for(let e=0;e<i;e++){let r=i===1?n.lateral:(e/(i-1)-.5)*n.spread+n.lateral,o=new hc,s=new q(this.geom,this.shellMat),c=new q(this.runeGeom,this.runeMat);s.castShadow=t.shadows&&t.level===`high`,o.add(s,c),o.position.set(a.pos.x+a.right.x*r,a.pos.y+1.15,a.pos.z+a.right.z*r),this.group.add(o),this.slots.push({object:o,pos:o.position.clone(),alive:!0,timer:0,spin:(e*1.3+n.seg)%6.28})}}}update(e,t,n,r){for(let i of this.slots){if(i.spin+=e*1.4,!i.alive){if(i.timer-=e,i.timer<=0)i.alive=!0,i.object.visible=!0,i.object.scale.setScalar(.01);else continue}let a=i.object.scale.x;a<1&&i.object.scale.setScalar(Math.min(1,a+e*4.5)),i.object.rotation.y=i.spin,i.object.position.y=i.pos.y+Math.sin(t*1.8+i.spin)*.18;for(let e of n){if(e.progress.finished)continue;let t=e.pos,n=t.x-i.pos.x,a=t.z-i.pos.z,o=t.y+.6-i.object.position.y;if(n*n+a*a<3.6&&Math.abs(o)<2.6){i.alive=!1,i.timer=Kf,i.object.visible=!1,this.vfx.burst(i.pos.x,i.pos.y,i.pos.z,10473727,14,7),r(e);break}}}}reset(){for(let e of this.slots)e.alive=!0,e.timer=0,e.object.visible=!0,e.object.scale.setScalar(1)}dispose(){this.geom.dispose(),this.runeGeom.dispose(),this.shellMat.dispose(),this.runeMat.dispose()}},Jf=62,Yf=5.5,Xf=26,Zf=.75,Qf=27,$f=class{constructor(e,t,r,i){n(this,`group`,new hc),n(this,`boxes`),n(this,`bolts`,[]),n(this,`mines`,[]),n(this,`blasts`,[]),n(this,`shieldViz`,new Map),n(this,`boltGeo`),n(this,`boltMat`),n(this,`mineGeo`),n(this,`mineMat`),n(this,`spikeGeo`),n(this,`spikeMat`),n(this,`ringGeo`),n(this,`ringMat`),n(this,`shieldGeo`),n(this,`shieldMat`),n(this,`onHit`,null),this.vfx=r,this.boxes=new qf(t,i,r),this.group.add(this.boxes.group);let a=i.level===`low`;this.boltGeo=new hu(.42,a?8:14,a?6:10),this.boltMat=new gi({color:10351615}),this.mineGeo=new fu(.72,+!a),this.mineMat=new yu({color:13912686,emissive:16726891,emissiveIntensity:1.5,roughness:.4,metalness:.6}),this.spikeGeo=new wl(.2,.62,6),this.spikeMat=new yu({color:2756640,roughness:.6}),this.ringGeo=new mu(.6,.85,a?16:32),this.ringMat=new gi({color:16751317,transparent:!0,opacity:.9,blending:h,side:f}),this.shieldGeo=new hu(2.1,a?10:18,a?8:12),this.shieldMat=new gi({color:12189519,transparent:!0,opacity:.19,blending:h,side:2});for(let e=0;e<10;e++){let e=new hc,t=new q(this.boltGeo,this.boltMat),n=new q(this.mineGeo,this.boltMat);n.scale.setScalar(.7),e.add(t,n),e.visible=!1,this.group.add(e),this.bolts.push({object:e,active:!1,life:0,vel:new W,target:null,owner:null,trailTimer:0})}for(let e=0;e<12;e++){let e=new hc,t=new q(this.mineGeo,this.mineMat);e.add(t);for(let t=0;t<6;t++){let n=new q(this.spikeGeo,this.spikeMat),r=t/6*Math.PI*2;n.position.set(Math.cos(r)*.72,0,Math.sin(r)*.72),n.rotation.z=-Math.PI/2,n.rotation.y=-r,e.add(n)}e.visible=!1,this.group.add(e),this.mines.push({object:e,active:!1,life:0,armTimer:0,owner:null,spin:0})}for(let e=0;e<6;e++){let e=new q(this.ringGeo,this.ringMat.clone());e.rotation.x=-Math.PI/2,e.visible=!1,this.group.add(e),this.blasts.push({object:e,active:!1,life:0,radius:0,origin:new W,owner:null})}e.add(this.group)}updateBoxes(e,t,n,r){this.boxes.update(e,t,n,r)}fireBolt(e,t){let n=this.bolts.find(e=>!e.active);if(!n)return;let r=e.state,i=-Math.sin(r.yaw),a=-Math.cos(r.yaw);n.active=!0,n.life=Yf,n.owner=e,n.target=this.pickTarget(e,t),n.object.visible=!0,n.object.position.set(r.pos.x+i*2.2,r.pos.y+.85,r.pos.z+a*2.2),n.vel.set(i*Jf,0,a*Jf),n.trailTimer=0}dropMine(e){let t=this.mines.find(e=>!e.active);if(!t)return;let n=e.state,r=-Math.sin(n.yaw),i=-Math.cos(n.yaw);t.active=!0,t.life=Xf,t.armTimer=1.1,t.owner=e,t.spin=0,t.object.visible=!0,t.object.position.set(n.pos.x-r*3,n.pos.y+.85,n.pos.z-i*3)}detonateBlast(e,t){let n=this.blasts.find(e=>!e.active),r=e.state;n&&(n.active=!0,n.life=Zf,n.radius=0,n.owner=e,n.origin.set(r.pos.x,r.pos.y+.7,r.pos.z),n.object.visible=!0,n.object.position.copy(n.origin),n.object.scale.setScalar(.6));for(let n of t){if(n===e)continue;let t=n.pos.x-r.pos.x,i=n.pos.z-r.pos.z,a=t*t+i*i;if(a>729||a<1e-4)continue;let o=-Math.sin(r.yaw),s=-Math.cos(r.yaw);if(t*o+i*s<-6)continue;let c=Math.sqrt(a),l=(1-c/Qf)*24;n.hit(.95,Math.sign(t*s-i*o)||1)&&(n.kart.physics.knockback(t/c,i/c,l,5.5+l*.15),n.dropCoins(),this.onHit?.(n,`blast`))}this.vfx.burst(r.pos.x,r.pos.y+.8,r.pos.z,16751317,30,16)}raiseShield(e){e.shield=7.5}update(e,t,n){this.updateBolts(e,t,n),this.updateMines(e,t),this.updateBlasts(e),this.updateShields(e,t)}pickTarget(e,t){let n=null,r=1/0;for(let i of t){if(i===e||i.progress.finished)continue;let t=i.pos.x-e.pos.x,a=i.pos.z-e.pos.z,o=Math.hypot(t,a);if(o>90)continue;let s=-Math.sin(e.state.yaw),c=-Math.cos(e.state.yaw);if(t*s+a*c<-4)continue;let l=o*.5-i.progress.distance*.02;l<r&&(r=l,n=i)}return n}updateBolts(e,t,n){for(let r of this.bolts){if(!r.active)continue;if(r.life-=e,r.life<=0){this.killBolt(r);continue}let i=r.target;if(i&&!i.progress.finished){let t=i.pos.x-r.object.position.x,n=i.pos.y+.8-r.object.position.y,a=i.pos.z-r.object.position.z,o=Math.hypot(t,n,a)||1,s=t/o*Jf,c=n/o*Jf,l=a/o*Jf,u=5.2;r.vel.x=Z(r.vel.x,s,u,e),r.vel.y=Z(r.vel.y,c,u,e),r.vel.z=Z(r.vel.z,l,u,e)}r.object.position.x+=r.vel.x*e,r.object.position.y+=r.vel.y*e,r.object.position.z+=r.vel.z*e;let a=n.surfaceHeight(r.object.position.x,r.object.position.z,-1);r.object.position.y<a+.4&&(r.object.position.y=a+.4),r.object.rotation.y+=e*9,r.object.rotation.x+=e*6,r.trailTimer-=e,r.trailTimer<=0&&(r.trailTimer=.016,this.vfx.spark(r.object.position.x,r.object.position.y,r.object.position.z,-r.vel.x*.12,.4,-r.vel.z*.12,8382207,.85,.4,1,2));for(let e of t){if(e===r.owner&&r.life>5.25)continue;let t=e.pos.x-r.object.position.x,n=e.pos.y+.9-r.object.position.y,i=e.pos.z-r.object.position.z;if(t*t+n*n+i*i<5.6){e.hit(1.5,Math.random()<.5?1:-1)?(e.dropCoins(),e.kart.visual.punch(1),this.vfx.burst(r.object.position.x,r.object.position.y,r.object.position.z,8382207,22,13),this.onHit?.(e,`bolt`)):this.vfx.burst(r.object.position.x,r.object.position.y,r.object.position.z,12189519,16,10),this.killBolt(r);break}}}}killBolt(e){e.active=!1,e.object.visible=!1,e.target=null,e.owner=null}updateMines(e,t){for(let n of this.mines)if(n.active){if(n.life-=e,n.spin+=e*2.2,n.object.rotation.y=n.spin,n.object.rotation.x=n.spin*.6,n.object.position.y+=Math.sin(n.spin*2)*.004,n.life<=0){n.active=!1,n.object.visible=!1;continue}if(n.armTimer>0){n.armTimer-=e;continue}for(let e of t){if(e.progress.finished||e===n.owner&&n.life>24.6)continue;let t=e.pos.x-n.object.position.x,r=e.pos.z-n.object.position.z,i=e.pos.y+.6-n.object.position.y;if(t*t+r*r<4.4&&Math.abs(i)<2.6){n.active=!1,n.object.visible=!1,this.vfx.burst(n.object.position.x,n.object.position.y,n.object.position.z,16739210,26,14),e.hit(1.4,Math.random()<.5?1:-1)&&(e.dropCoins(),e.kart.visual.punch(1),this.onHit?.(e,`mine`));break}}}}updateBlasts(e){for(let t of this.blasts){if(!t.active)continue;if(t.life-=e,t.life<=0){t.active=!1,t.object.visible=!1;continue}let n=1-t.life/Zf;t.radius=n*Qf,t.object.scale.setScalar(Math.max(.6,t.radius)),t.object.material.opacity=.9*(1-n)}}updateShields(e,t){for(let n of t){let t=n.shield>0,r=this.shieldViz.get(n.id);if(t&&!r){let e=new q(this.shieldGeo,this.shieldMat.clone());e.position.set(0,.9,0),n.kart.object.add(e),r={object:n.kart.object,mesh:e},this.shieldViz.set(n.id,r)}if(r){if(r.mesh.visible=t,t){let t=r.mesh.material;t.opacity=.14+.1*Math.sin(performance.now()*.008)+.1,r.mesh.rotation.y+=e*1.4}else n.kart.object.remove(r.mesh),r.mesh.material.dispose(),this.shieldViz.delete(n.id)}}}clear(){for(let e of this.bolts)this.killBolt(e);for(let e of this.mines)e.active=!1,e.object.visible=!1;for(let e of this.blasts)e.active=!1,e.object.visible=!1}resetBoxes(){this.boxes.reset()}dispose(){this.group.removeFromParent();for(let e of this.blasts)e.object.material.dispose();this.boxes.dispose(),this.boltGeo.dispose(),this.boltMat.dispose(),this.mineGeo.dispose(),this.mineMat.dispose(),this.spikeGeo.dispose(),this.spikeMat.dispose(),this.ringGeo.dispose(),this.ringMat.dispose(),this.shieldGeo.dispose(),this.shieldMat.dispose();for(let e of this.shieldViz.values())e.object.remove(e.mesh),e.mesh.material.dispose();this.shieldViz.clear()}},ep=14,tp=10,np=class{constructor(e,t,r,i){n(this,`group`,new hc),n(this,`mesh`),n(this,`ring`),n(this,`slots`,[]),n(this,`tmpM`,new xr),n(this,`tmpQ`,new Gn),n(this,`tmpP`,new W),n(this,`tmpS`,new W(1,1,1)),n(this,`elapsed`,0),this.vfx=i;let a=r.level===`low`?10:16,o=new Cl(.55,.55,.14,a),s=new gu(.72,.09,6,a),c=new gi({color:16766046}),l=new gi({color:16773296,transparent:!0,opacity:.55,blending:h}),u={pos:new W,tangent:new W,right:new W,up:new W,halfWidth:12};for(let e of Kd){let n=t.sAt(e);for(let r=0;r<e.count;r++){let i=e.count===1?0:r/(e.count-1),a=n+(i-.5)*e.spacing*e.count;t.frameAt(a,u);let o=Math.sin(i*Math.PI)*e.bow,s=e.lateral+o;this.slots.push({pos:new W(u.pos.x+u.right.x*s,u.pos.y+1.25,u.pos.z+u.right.z*s),alive:!0,timer:0,spin:this.slots.length*.7%6.28})}}this.mesh=new Rc(o,c,Math.max(1,this.slots.length)),this.ring=new Rc(s,l,Math.max(1,this.slots.length)),this.mesh.frustumCulled=!1,this.ring.frustumCulled=!1,this.mesh.instanceMatrix.setUsage(35048),this.ring.instanceMatrix.setUsage(35048),this.group.add(this.mesh,this.ring),e.add(this.group),this.writeMatrices()}writeMatrices(){for(let e=0;e<this.slots.length;e++){let t=this.slots[e];if(!t.alive){this.tmpM.makeScale(1e-4,1e-4,1e-4),this.mesh.setMatrixAt(e,this.tmpM),this.ring.setMatrixAt(e,this.tmpM);continue}this.tmpP.copy(t.pos),this.tmpP.y+=Math.sin(this.elapsed*2.2+t.spin)*.16,this.tmpQ.setFromAxisAngle(ip,t.spin),this.tmpM.compose(this.tmpP,this.tmpQ,this.tmpS),this.mesh.setMatrixAt(e,this.tmpM),this.tmpQ.setFromAxisAngle(rp,Math.PI/2),this.tmpQ.multiply(op.setFromAxisAngle(ap,t.spin*1.4)),this.tmpM.compose(this.tmpP,this.tmpQ,this.tmpS),this.ring.setMatrixAt(e,this.tmpM)}this.mesh.instanceMatrix.needsUpdate=!0,this.ring.instanceMatrix.needsUpdate=!0}update(e,t,n){this.elapsed+=e;let r=!1;for(let i=0;i<this.slots.length;i++){let a=this.slots[i];if(!a.alive){a.timer-=e,a.timer<=0&&(a.alive=!0,r=!0);continue}a.spin+=e*2.6,r=!0;for(let e of t){if(e.progress.finished)continue;let t=e.pos,r=t.x-a.pos.x,i=t.y+.7-a.pos.y,o=t.z-a.pos.z;if(r*r+o*o<4.4&&Math.abs(i)<2.4){a.alive=!1,a.timer=ep,this.vfx.spark(a.pos.x,a.pos.y,a.pos.z,0,3,0,16769162,1.1,.4,4,2),n(e);break}}}r&&this.writeMatrices()}get cap(){return tp}reset(){for(let e of this.slots)e.alive=!0,e.timer=0;this.writeMatrices()}dispose(){this.mesh.geometry.dispose(),this.mesh.material.dispose(),this.ring.geometry.dispose(),this.ring.material.dispose(),this.group.removeFromParent()}},rp=new W(1,0,0),ip=new W(0,1,0),ap=new W(0,0,1),op=new Gn,sp=class{constructor(e){n(this,`zones`,[]);for(let t of Wd){let n=e.sAt(t);this.zones.push({s:n,halfLen:t.length*.5,lateral:t.lateral,halfWidth:2.6,cooldown:0})}}update(e,t,n,r){for(let t of this.zones)t.cooldown>0&&(t.cooldown-=e);for(let e of t){if(e.progress.finished)continue;let t=e.state.trackS;for(let i of this.zones){if(i.cooldown>0)continue;let a=t-i.s,o=n.totalLength;if(a>o*.5?a-=o:a<-o*.5&&(a+=o),Math.abs(a)>i.halfLen)continue;let s=n.sampleAtS(t),c=e.pos.x-s.pos.x,l=e.pos.z-s.pos.z,u=c*s.right.x+l*s.right.z;if(!(Math.abs(u-i.lateral)>i.halfWidth)){i.cooldown=.35,r(e,1);break}}}}reset(){for(let e of this.zones)e.cooldown=0}},cp={distance:6.6,height:2.95,lookAhead:12,positionDamping:6.4,aimDamping:7.6,fovBase:68,fovSpeedGain:14,fovBoostGain:12},lp=new W,up=new W,dp=new W;new W;var fp=new W,pp=class{constructor(e,t=cp){n(this,`camera`),n(this,`pos`,new W),n(this,`aim`,new W),n(this,`fov`),n(this,`shake`,0),n(this,`shakeSeed`,Math.random()*100),n(this,`lookBack`,0),n(this,`wantLookBack`,!1),n(this,`airLift`,0),this.tuning=t,this.camera=new na(t.fovBase,e,.35,1600),this.fov=t.fovBase}setAspect(e){this.camera.aspect=e,this.camera.updateProjectionMatrix()}setLookBack(e){this.wantLookBack=e}snap(e,t){this.computeDesired(e,t,0),this.pos.copy(lp),this.aim.copy(up),this.camera.position.copy(this.pos),this.camera.lookAt(this.aim)}update(e,t,n,r){this.wantLookBack=this.wantLookBack&&!0,this.lookBack=Z(this.lookBack,+!!this.wantLookBack,7,e),this.airLift=Z(this.airLift,+!!r.airborne,4,e),this.computeDesired(t,n,this.airLift),this.pos.distanceToSquared(lp)>900&&(this.pos.copy(lp),this.aim.copy(up));let i=this.tuning.positionDamping*(r.airborne?.75:1);this.pos.x=Z(this.pos.x,lp.x,i,e),this.pos.y=Z(this.pos.y,lp.y,i*1.15,e),this.pos.z=Z(this.pos.z,lp.z,i,e),this.aim.x=Z(this.aim.x,up.x,this.tuning.aimDamping,e),this.aim.y=Z(this.aim.y,up.y,this.tuning.aimDamping,e),this.aim.z=Z(this.aim.z,up.z,this.tuning.aimDamping,e);let a=n.surfaceHeight(this.pos.x,this.pos.z,t.trackIndex);if(this.pos.y<a+1.1&&(this.pos.y=a+1.1),this.shake=Math.max(0,this.shake-e*2.6),this.shake>.001){this.shakeSeed+=e*37;let t=this.shake*this.shake*.55;fp.set(Math.sin(this.shakeSeed*1.7)*t,Math.sin(this.shakeSeed*2.3)*t*.8,Math.sin(this.shakeSeed*1.1)*t)}else fp.set(0,0,0);this.camera.position.set(this.pos.x+fp.x,this.pos.y+fp.y,this.pos.z+fp.z),this.camera.lookAt(this.aim.x+fp.x*2,this.aim.y+fp.y*2,this.aim.z+fp.z*2),r.spin>0&&this.camera.rotateZ(Math.sin(this.shakeSeed*3.1)*this.shake*.35);let o=this.tuning.fovBase+this.tuning.fovSpeedGain*r.speed01+this.tuning.fovBoostGain*+!!r.boosting;this.fov=Z(this.fov,o,4.5,e),Math.abs(this.fov-this.camera.fov)>.02&&(this.camera.fov=this.fov,this.camera.updateProjectionMatrix())}computeDesired(e,t,n){let r=Math.sin(e.yaw),i=Math.cos(e.yaw);dp.set(-r,0,-i);let a=t.sampleAtS(e.trackS).kind===vd.Tunnel,o=X(Math.abs(e.speed)/40),s=(a?5.9:this.tuning.distance*(1-this.lookBack*1.85))+o*1.5,c=(a?2.35:this.tuning.height+o*.35)+n*1.2;lp.set(e.pos.x-dp.x*s,e.pos.y+c,e.pos.z-dp.z*s);let l=t.query(lp.x,lp.z,e.trackIndex),u=t.sampleAtS(l.s),d=a?u.halfWidth-1.2:u.halfWidth+1.6;if(Math.abs(l.lateral)>d){let e=Math.abs(l.lateral)-d,t=Math.sign(l.lateral);lp.x-=u.right.x*t*e,lp.z-=u.right.z*t*e}let f=t.surfaceHeight(lp.x,lp.z,l.index),p=a?f+3.1:1/0;lp.y<f+1&&(lp.y=f+1),lp.y>p&&(lp.y=p);let m=this.lookBack>.5?-this.tuning.lookAhead:this.tuning.lookAhead;up.set(e.pos.x+dp.x*m,e.pos.y+1.15,e.pos.z+dp.z*m)}impact(e){this.shake=Math.min(1,this.shake+Ju(e,0,1))}},mp=[{skill:1.065,aggression:.85,lineNoise:.7,canDrift:!0,reaction:.05},{skill:1.02,aggression:.62,lineNoise:1.1,canDrift:!0,reaction:.08},{skill:.985,aggression:.5,lineNoise:1.5,canDrift:!0,reaction:.1},{skill:.955,aggression:.42,lineNoise:1.9,canDrift:!1,reaction:.12},{skill:.93,aggression:.34,lineNoise:2.3,canDrift:!1,reaction:.14},{skill:.91,aggression:.28,lineNoise:2.7,canDrift:!1,reaction:.16}],hp=class{constructor(e,t,r,i,a,o,s={}){n(this,`racers`,[]),n(this,`adapter`),n(this,`gates`),n(this,`line`),n(this,`items`),n(this,`coins`),n(this,`pads`),n(this,`camera`),n(this,`config`),n(this,`phase`,`idle`),n(this,`raceTime`,0),n(this,`countdown`,3.6),n(this,`goTimer`,0),n(this,`playerFinished`,!1),n(this,`launchWindow`,0),n(this,`aiDrivers`,[]),n(this,`playerSpectator`),n(this,`neighbours`,[]),n(this,`rng`,Qu(6221086)),n(this,`accumulator`,0),n(this,`finishCounter`,0),n(this,`raceOverTimer`,0),n(this,`itemUseCooldown`,0),n(this,`aiItemTimers`,[]),n(this,`warnWrongWay`,0),n(this,`autoPilotPlayer`,!1),n(this,`elapsed`,0),n(this,`events`,{}),this.scene=e,this.spline=t,this.vfx=i,this.config={laps:kd,aiCount:o.length,fixedStep:1/120,maxSubsteps:12,timeScale:1,aiDifficulty:1,itemRespawn:4,...s},this.adapter=new Hf(t),this.gates=new vf(t,16),this.line=new bf(t),this.racers.push(new Vf(0,a,`player`,r));for(let e=0;e<o.length;e++)this.racers.push(new Vf(e+1,o[e],`ai`,r));for(let t of this.racers)e.add(t.kart.object);this.items=new $f(e,t,i,r),this.items.onHit=(e,t)=>{this.events.sfx?.(t===`mine`?`explode`:`hit`,{volume:.9}),e.isPlayer&&(this.events.shake?.(.85),this.events.sfx?.(`spinout`))},this.coins=new np(e,t,r,i),this.pads=new sp(t),this.camera=new pp(16/9);for(let e=0;e<this.racers.length;e++){if(this.racers[e].kind!==`ai`)continue;let t=mp[(e-1)%mp.length];this.aiDrivers.push(new Sf({skill:t.skill*this.config.aiDifficulty,aggression:t.aggression,lineNoise:t.lineNoise,canDrift:t.canDrift,reaction:t.reaction,seed:1337+e*977}))}this.playerSpectator=new Sf({skill:.92,aggression:.4,lineNoise:1,canDrift:!0,reaction:.08,seed:4242});for(let e of this.racers)this.neighbours.push({id:e.id,x:0,z:0,speed:0,isPlayer:e.isPlayer});for(let e of this.racers)this.aiItemTimers[e.id]=0;this.resetRace(a,o)}resetRace(e,t){for(let e=0;e<this.racers.length;e++)this.racers[e].resetOnGrid(this.spline,e),this.racers[e].updateProgress(this.gates);this.items.clear(),this.items.resetBoxes(),this.coins.reset(),this.pads.reset(),this.vfx.clearSkids();for(let e of this.aiDrivers)e.reset();this.playerSpectator.reset(),this.phase=`countdown`,this.countdown=3.6,this.raceTime=0,this.goTimer=0,this.finishCounter=0,this.raceOverTimer=0,this.playerFinished=!1,this.itemUseCooldown=0,this.accumulator=0,this.warnWrongWay=0;for(let e of this.racers)e.rank=e.id+1,e.kart.setGroundNormal(0,1,0),e.kart.syncVisual(.016);this.computeStandings(),this.camera.snap(this.racers[0].state,this.spline)}get player(){return this.racers[0]}update(e,t){let n=this.config.fixedStep,r=Math.min(e,.1)*this.config.timeScale;this.accumulator+=r;let i=0;for(;this.accumulator>=n&&i<this.config.maxSubsteps;)this.fixedStep(n,t),this.accumulator-=n,i++;return i>=this.config.maxSubsteps&&(this.accumulator=0),this.syncVisual(r,t),this.hud()}fixedStep(e,t){let n=this.player;if(this.elapsed+=e,this.phase===`countdown`){let r=Math.ceil(this.countdown);this.countdown-=e;let i=Math.ceil(this.countdown);if(i!==r&&(i>=1&&this.events.sfx?.(`countdown_beep`),i===0&&(this.events.sfx?.(`countdown_go`),this.goTimer=1.2)),this.countdown<=0){this.phase=`racing`,this.launchWindow=.35,t.down(`accel`)&&n.grantLaunchBoost();for(let e of this.racers)e.frozen=!1}}else(this.phase===`racing`||this.phase===`finished`)&&(this.raceTime+=e,this.goTimer>0&&(this.goTimer-=e),this.launchWindow>0&&(this.launchWindow-=e));let r=this.phase===`racing`||this.phase===`finished`,i=this.phase===`results`;for(let n of this.racers){if(n.updateBackDir(),i){n.controls.steer=0,n.controls.throttle=0,n.controls.brake=.35,n.controls.drift=!1,n.controls.driftPressed=!1;continue}if(r){if(n.kind===`player`)this.autoPilotPlayer||n.progress.finished?(this.playerSpectator.rubberBand=1,n.controls=this.playerSpectator.update(e,n.state,this.worldView(),n.state.trackIndex,this.adapter)):this.readPlayerControls(n,t);else{let t=this.aiDrivers[n.id-1];t&&(t.rubberBand=this.rubberBandFor(n),n.controls=t.update(e,n.state,this.worldView(),n.state.trackIndex,this.adapter))}}}for(let t of this.racers)t.step(e,this.adapter);this.resolveKartCollisions();for(let e of this.racers){let t=e.progress.lap;e.updateProgress(this.gates),e.progress.lap!==t&&!e.progress.finished&&(e.isPlayer&&(e.progress.lap>=this.config.laps?this.events.sfx?.(`final_lap`):e.progress.lap>0&&this.events.sfx?.(`lap`)),e.hasCompleted(this.config.laps)&&(e.progress.finished=!0,e.progress.finishTime=this.raceTime,e.progress.finishRank=++this.finishCounter,e.isPlayer&&(this.playerFinished=!0,this.phase=`finished`,this.events.sfx?.(`finish`,{volume:1}))))}this.coins.update(e,this.racers,e=>this.onCoin(e)),this.pads.update(e,this.racers,this.spline,e=>this.onBoostPad(e)),this.items.updateBoxes(e,this.raceTime,this.racers,e=>this.onItemBox(e)),this.items.update(e,this.racers,this.spline),this.itemUseCooldown>0&&(this.itemUseCooldown-=e);for(let n of this.racers)n.item&&(n.kind===`player`?t.pressed(`item`)&&n.itemRoll<=0&&this.itemUseCooldown<=0&&(this.useItem(n),this.itemUseCooldown=.25):(this.aiItemTimers[n.id]-=e,this.aiItemTimers[n.id]<=0&&n.itemRoll<=0&&(this.aiShouldUse(n)?this.useItem(n):this.aiItemTimers[n.id]=.4+this.rng()*.5)));this.updateRecovery(e),this.computeStandings(),this.phase===`finished`&&(this.raceOverTimer+=e,(this.racers.every(e=>e.progress.finished)||this.raceOverTimer>7)&&(this.phase=`results`))}worldView(){let e=this.neighbours;for(let t=0;t<this.racers.length;t++){let n=this.racers[t];e[t].id=n.id,e[t].x=n.pos.x,e[t].z=n.pos.z,e[t].speed=n.state.speed,e[t].isPlayer=n.isPlayer}return{spline:this.spline,line:this.line,neighbours:e}}readPlayerControls(e,t){let n=e.controls,r=t.steerAxis();n.noControl=!1,n.steer=r,n.throttle=t.down(`accel`)||t.pointerAccel?1:0,n.brake=+!!t.down(`brake`);let i=t.down(`drift`);n.driftPressed=t.pressed(`drift`),n.drift=i,n.driftPressed&&e.state&&e.state.grounded&&e.kart?.physics?.jump?.(.25)}onItemBox(e){let t=Gf(e.rank,this.racers.length,this.rng);e.item=t,e.itemRoll=.85,e.turboCharges=t===`triple_turbo`?3:0,e.isPlayer&&this.events.sfx?.(`item_roll`)}useItem(e){let t=e.item;if(t){if(t===`triple_turbo`){e.turboCharges=(e.turboCharges||3)-1,this.applyTurbo(e),e.isPlayer&&this.events.sfx?.(`boost_start`),e.turboCharges<=0&&(e.item=null,e.turboCharges=0);return}switch(e.item=null,t){case`photon`:this.items.fireBolt(e,this.racers),this.events.sfx?.(`fire_bolt`,{volume:e.isPlayer?1:.5});break;case`drone`:this.items.fireBolt(e,this.racers),this.events.sfx?.(`fire_bolt`,{volume:e.isPlayer?1:.5});break;case`orbital`:this.items.detonateBlast(e,this.racers),this.events.sfx?.(`warn`,{volume:1}),e.isPlayer&&this.events.shake?.(.9);break;case`mine`:this.items.dropMine(e),this.events.sfx?.(`drop_mine`,{volume:e.isPlayer?1:.45});break;case`turbo`:this.applyTurbo(e),e.isPlayer&&this.events.sfx?.(`boost_start`);break;case`matrix`:e.matrixTimer=6.5,e.invuln=6.5,this.applyTurbo(e),this.events.sfx?.(`finish`,{volume:e.isPlayer?.9:.4});break;case`shockwave`:this.items.detonateBlast(e,this.racers),this.events.sfx?.(`blast`,{volume:e.isPlayer?1:.6}),e.isPlayer&&this.events.shake?.(.8);break;case`glitch`:for(let t of this.racers)t!==e&&t.progress.distance>=e.progress.distance-15&&(t.glitchTimer=4.5,t.kart?.object?.scale?.setScalar?.(.65),t.state.speed*=.65,t.hit(1));this.events.sfx?.(`hit`,{volume:1}),e.isPlayer&&this.events.shake?.(.6);break;case`decoy`:this.items.dropMine(e),this.events.sfx?.(`drop_mine`,{volume:e.isPlayer?1:.45});break;case`shield`:this.items.raiseShield(e),this.events.sfx?.(`shield_up`,{volume:e.isPlayer?1:.5});break;default:this.items.fireBolt(e,this.racers)}}}applyTurbo(e){e.kart.physics.applyBoost(1.5,22),this.events.sfx?.(`boost_start`,{volume:e.isPlayer?1:.4})}aiShouldUse(e){let t=e.item;if(!t)return!1;let n=-Math.sin(e.state.yaw),r=-Math.cos(e.state.yaw),i=0,a=0,o=0;for(let t of this.racers){if(t===e||t.progress.finished)continue;let s=t.pos.x-e.pos.x,c=t.pos.z-e.pos.z,l=Math.hypot(s,c);if(l>70)continue;let u=s*n+c*r;u>2?(i++,l<26&&o++):u<-2&&a++}switch(t){case`bolt`:return i>0&&e.state.trackS>0;case`mine`:return a>0||this.rng()<.02;case`turbo`:{let t=this.spline.sampleAtS(e.state.trackS);return Math.abs(t.curvature)<.006}case`blast`:return o>0;case`shield`:return a>0||this.rng()<.03;default:return!1}}onCoin(e){e.addCoin(this.coins.cap)&&this.events.sfx?.(`coin`,{volume:e.isPlayer?.7:.22,rate:1+e.coins%5*.06})}onBoostPad(e){e.kart.physics.applyPadBoost(.85,17),this.vfx.miniTurboBurst(e.pos.x,e.pos.y+.2,e.pos.z,8190463),e.isPlayer&&(this.events.sfx?.(`boost_start`,{volume:.85}),this.events.shake?.(.28))}resolveKartCollisions(){let e=this.racers.length;for(let t=0;t<e;t++){let n=this.racers[t];for(let r=t+1;r<e;r++){let e=this.racers[r],t=e.pos.x-n.pos.x,i=e.pos.z-n.pos.z,a=e.pos.y-n.pos.y;if(Math.abs(a)>1.8)continue;let o=n.kart.model.radius+e.kart.model.radius,s=t*t+i*i;if(s>=o*o||s<1e-6)continue;let c=Math.sqrt(s),l=t/c,u=i/c,d=o-c,f=n.kart.physics.params.weight,p=e.kart.physics.params.weight,m=f+p;n.pos.x-=l*d*(p/m),n.pos.z-=u*d*(p/m),e.pos.x+=l*d*(f/m),e.pos.z+=u*d*(f/m);let h=n.state.vel,g=e.state.vel,_=(g.x-h.x)*l+(g.z-h.z)*u;if(_<0){let t=-1.35*_/(1/f+1/p);h.x-=l*t/f,h.z-=u*t/f,g.x+=l*t/p,g.z+=u*t/p;let r=Math.min(1,Math.abs(_)/18);r>.28&&(n.kart.visual.punch(r*.6),e.kart.visual.punch(r*.6),(n.isPlayer||e.isPlayer)&&(this.events.shake?.(r*.5),this.events.sfx?.(`wall_hit`,{volume:r*.7})))}}}}updateRecovery(e){for(let t of this.racers){if(t.progress.finished)continue;let n=t.state;t.recoverTimer=Math.abs(n.speed)<2.2&&n.spinTimer<=0&&(this.phase===`racing`||this.phase===`finished`)?t.recoverTimer+e:0;let r=!n.onRoad&&n.lateral01>1.45;(t.recoverTimer>3.4||r&&t.recoverTimer>1.6)&&this.rescueRacer(t)}let t=this.player;this.warnWrongWay=this.phase!==`racing`||t.progress.finished?0:t.state.speed<-1.5&&Math.abs(t.state.speed)>2?1.4:Math.max(0,this.warnWrongWay-e)}rescueRacer(e){let t=this.spline.wrapS(e.state.trackS+4),n=this.line.lateralAt(t),r=this.spline.sampleAtS(t),i=Math.atan2(-r.tangent.x,-r.tangent.z),a=r.pos.x+r.right.x*n,o=r.pos.z+r.right.z*n,s=this.spline.surfaceHeight(a,o,r.i)+.15;e.kart.physics.placeOnTrack(a,s,o,i,8),e.recoverTimer=0,e.kart.visual.snap(e.state),this.vfx.burst(a,s+.6,o,9427199,16,7),e.isPlayer&&this.events.sfx?.(`warn`)}computeStandings(){let e=[...this.racers];e.sort((e,t)=>e.progress.finished&&t.progress.finished?e.progress.finishRank-t.progress.finishRank:e.progress.finished?-1:t.progress.finished?1:e.progress.lap===t.progress.lap?e.progress.checkpoint===t.progress.checkpoint?t.progress.distance-e.progress.distance:t.progress.checkpoint-e.progress.checkpoint:t.progress.lap-e.progress.lap);for(let t=0;t<e.length;t++)e[t].rank=t+1}rubberBandFor(e){let t=this.player.progress.distance-e.progress.distance;return t>220?1.055:t>110?1.025:t<-260?.955:t<-130?.98:1}syncVisual(e,t){for(let t of this.racers){t.syncVisual(e,this.vfx,this.phase!==`idle`);let n=t.state;n.wallHit&&n.wallHitStrength>.25&&t.wallSfxCooldown<=0&&(t.wallSfxCooldown=.28,this.vfx.spark(n.pos.x,n.pos.y+.5,n.pos.z,-n.vel.x*.1,1.5,-n.vel.z*.1,16773312,.6,.3,8,2),t.isPlayer&&(this.events.sfx?.(`wall_hit`,{volume:.45*n.wallHitStrength}),this.events.shake?.(n.wallHitStrength*.55))),n.justLanded&&t.isPlayer&&n.landImpact>.35&&this.events.sfx?.(`land`,{volume:.4+n.landImpact*.4})}let n=this.player.state;this.camera.setLookBack(t.down(`look_back`)),this.camera.update(e,n,this.spline,{boosting:n.boostTime>0||n.padBoostTime>0,speed01:X(Math.abs(n.speed)/42),airborne:!n.grounded,spin:n.spinTimer})}hud(){let e=this.player,t=e.state,n=this.racers.slice().sort((e,t)=>e.rank-t.rank),r=n[0],i=n.map(e=>({rank:e.rank,name:e.name,kartId:e.kart.spec.id,isPlayer:e.isPlayer,lap:Math.min(this.config.laps,Math.max(1,e.progress.lap)),finished:e.progress.finished,finishTime:e.progress.finishTime,gap:e.progress.finished?e.progress.finishTime-(r.progress.finished?r.progress.finishTime:0):(r.progress.distance-e.progress.distance)/24,bestLap:e.progress.lapTimes.length?Math.min(...e.progress.lapTimes):0})),a=e.progress.lapTimes,o=a.length?a[a.length-1]:0,s=a.length>1?a[a.length-2]:0;return{phase:this.phase,countdown:Math.max(0,this.countdown),countdownActive:this.phase===`countdown`,lap:e.displayLap(this.config.laps),laps:this.config.laps,rank:e.rank,total:this.racers.length,speed:Math.abs(t.speed)*3.6,speed01:X(Math.abs(t.speed)/42),coins:e.coins,coinBoostPct:(e.boostFromCoins-1)*100,item:e.item,itemRolling:e.itemRoll>0,itemBlurb:e.item&&Uf[e.item]?Uf[e.item].blurb:``,lapTime:e.currentLapTime,raceTime:this.raceTime,bestLap:a.length?Math.min(...a):0,lastLap:o,lastLapDelta:o&&s?o-s:0,driftCharge01:X(t.driftCharge/3.3),driftTier:t.driftTier,boostTime:Math.max(t.boostTime,t.padBoostTime),showGo:this.goTimer>0,goTimer:this.goTimer,standings:i,finished:e.progress.finished,warnWrongWay:this.warnWrongWay>0}}results(){return this.racers.slice().sort((e,t)=>e.rank-t.rank).map(e=>({rank:e.rank,name:e.name,kartId:e.kart.spec.id,isPlayer:e.isPlayer,lap:this.config.laps,finished:e.progress.finished,finishTime:e.progress.finishTime,gap:e.progress.finished?e.progress.finishTime-(this.racers.find(e=>e.progress.finishRank===1)?.progress.finishTime??e.progress.finishTime):null,bestLap:e.progress.lapTimes.length?Math.min(...e.progress.lapTimes):0}))}manualReset(){let e=this.player;e.progress.finished||(e.kart.physics.state.spinTimer=0,this.rescueRacer(e),this.events.sfx?.(`warn`))}get activeCamera(){return this.camera}raceStats(){let e=1/0,t=1/0;for(let n of this.racers)for(let r of n.progress.lapTimes)r<t&&(t=r),n.isPlayer&&r<e&&(e=r);return{bestLapPlayer:Number.isFinite(e)?e:0,bestLapOverall:Number.isFinite(t)?t:0}}dispose(){for(let e of this.racers)this.scene.remove(e.kart.object),e.dispose();this.items.dispose(),this.coins.dispose(),this.racers.length=0}};function gp(e,t){let n=sd.filter(t=>t.id!==e),r=[];for(let e=0;e<t;e++)r.push(n[e%n.length]);return r}var _p=class{constructor(e,t){n(this,`ctx`),n(this,`path`),n(this,`startX`,0),n(this,`startZ`,0),n(this,`minX`,0),n(this,`minZ`,0),n(this,`scale`,1),n(this,`pad`,12),this.canvas=e,this.ctx=e.getContext(`2d`),e.width=384,e.height=384;let r=1/0,i=-1/0,a=1/0,o=-1/0;for(let e of t.samples)e.pos.x<r&&(r=e.pos.x),e.pos.x>i&&(i=e.pos.x),e.pos.z<a&&(a=e.pos.z),e.pos.z>o&&(o=e.pos.z);let s=i-r,c=o-a,l=Math.max(s,c);this.minX=r+s/2-l/2,this.minZ=a+c/2-l/2,this.scale=(e.width-this.pad*2)/l,this.path=new Path2D;let u=t.samples.length;for(let e=0;e<=u;e++){let n=t.samples[e%u],r=this.project(n.pos.x,n.pos.z);e===0?this.path.moveTo(r.x,r.y):this.path.lineTo(r.x,r.y)}let d=t.samples[t.startIndex%u],f=this.project(d.pos.x,d.pos.z);this.startX=f.x,this.startZ=f.y}project(e,t){return{x:this.pad+(e-this.minX)*this.scale,y:this.pad+(t-this.minZ)*this.scale}}draw(e){let t=this.ctx;if(!t)return;let n=this.canvas.width;t.clearRect(0,0,n,n),t.save(),t.lineCap=`round`,t.lineJoin=`round`,t.strokeStyle=`rgba(6, 22, 38, 0.85)`,t.lineWidth=17,t.stroke(this.path),t.strokeStyle=`rgba(124, 249, 255, 0.42)`,t.lineWidth=12,t.stroke(this.path),t.strokeStyle=`rgba(233, 246, 255, 0.28)`,t.lineWidth=3.5,t.stroke(this.path),t.restore(),t.save(),t.translate(this.startX,this.startZ),t.fillStyle=`#ffc857`,t.fillRect(-9,-3,18,6),t.restore();let r=e.slice().sort((e,t)=>Number(e.isPlayer)-Number(t.isPlayer));for(let e of r){let n=this.project(e.x,e.z),r=`#${e.color.toString(16).padStart(6,`0`)}`;e.isPlayer&&(t.beginPath(),t.arc(n.x,n.y,10,0,Math.PI*2),t.fillStyle=`rgba(255, 200, 87, 0.28)`,t.fill()),t.beginPath(),t.arc(n.x,n.y,e.isPlayer?6.5:5,0,Math.PI*2),t.fillStyle=r,t.fill(),t.lineWidth=2,t.strokeStyle=e.isPlayer?`#fff8e1`:`rgba(3, 10, 20, 0.8)`,t.stroke()}}};function vp(e){if(!Number.isFinite(e)||e<=0)return`--:--.---`;let t=Math.floor(e/60),n=Math.floor(e%60),r=Math.floor(e%1*1e3);return`${t}:${n.toString().padStart(2,`0`)}.${r.toString().padStart(3,`0`)}`}function yp(e){return Number.isFinite(e)?`${e>=0?`+`:`-`}${Math.abs(e).toFixed(2)}`:`--`}function bp(e,t=54){let n=`#${Uf[e].color.toString(16).padStart(6,`0`)}`,r=`width="${t}" height="${t}" viewBox="0 0 48 48" fill="none" style="filter:${`drop-shadow(0 0 8px ${n})`}"`;switch(e){case`bolt`:return`<svg ${r}><path d="M10 24h20M22 14l12 10-12 10" stroke="${n}" stroke-width="4.5" stroke-linecap="round" stroke-linejoin="round"/><circle cx="38" cy="24" r="4.5" fill="#ffffff"/></svg>`;case`mine`:return`<svg ${r}><circle cx="24" cy="24" r="9" fill="${n}"/><path d="M24 6v6M24 36v6M6 24h6M36 24h6M11 11l4.5 4.5M32.5 32.5L37 37M37 11l-4.5 4.5M15.5 32.5L11 37" stroke="${n}" stroke-width="3.4" stroke-linecap="round"/><circle cx="24" cy="24" r="3.4" fill="#12040a"/></svg>`;case`turbo`:return`<svg ${r}><path d="M8 14l13 10-13 10z" fill="${n}"/><path d="M24 14l13 10-13 10z" fill="#ffffff" opacity="0.85"/></svg>`;case`blast`:return`<svg ${r}><circle cx="24" cy="24" r="6.5" fill="#ffffff"/><path d="M24 4l4 12 12-6-6 12 12 4-12 4 6 12-12-6-4 12-4-12-12 6 6-12-12-4 12-4-6-12 12 6z" fill="${n}" opacity="0.9"/></svg>`;default:return`<svg ${r}><path d="M24 5l16 9.5v19L24 43 8 33.5v-19z" stroke="${n}" stroke-width="3.6" fill="rgba(255,255,255,0.08)"/><path d="M24 15l9 5.4v10.2L24 36l-9-5.4V20.4z" fill="${n}" opacity="0.55"/></svg>`}}function xp(e){return`#${e.toString(16).padStart(6,`0`)}`}function Sp(e,t){let n=e.getContext(`2d`);if(!n)return;e.width=128,e.height=128;let r=t.driver,i=n.createRadialGradient(64,92.16,4,64,70.4,92.16);switch(i.addColorStop(0,xp(t.kart.body)),i.addColorStop(1,`rgba(3,10,20,0.9)`),n.fillStyle=i,n.fillRect(0,0,128,128),n.fillStyle=xp(r.secondary),n.beginPath(),n.ellipse(64,125.44,56.32,38.4,0,0,Math.PI*2),n.fill(),n.fillStyle=xp(r.primary),n.beginPath(),n.ellipse(64,66.56,37.12,38.4,0,0,Math.PI*2),n.fill(),n.fillStyle=xp(r.accent),r.body){case`otter`:n.beginPath(),n.ellipse(39.68,38.4,10.24,11.52,-.4,0,7),n.fill(),n.beginPath(),n.ellipse(88.32,38.4,10.24,11.52,.4,0,7),n.fill(),n.fillStyle=xp(r.secondary),n.fillRect(25.6,84.48,76.8,12.8);break;case`golem`:n.beginPath(),n.moveTo(28.16,38.4),n.lineTo(51.2,17.92),n.lineTo(56.32,43.52),n.closePath(),n.fill(),n.beginPath(),n.moveTo(99.84,38.4),n.lineTo(76.8,17.92),n.lineTo(71.68,43.52),n.closePath(),n.fill();break;case`moth`:n.strokeStyle=xp(r.accent),n.lineWidth=4,n.lineCap=`round`,n.beginPath(),n.moveTo(51.2,35.84),n.quadraticCurveTo(30.72,12.8,17.92,20.48),n.stroke(),n.beginPath(),n.moveTo(76.8,35.84),n.quadraticCurveTo(97.28,12.8,110.08,20.48),n.stroke();break;case`jelly`:n.globalAlpha=.55,n.beginPath(),n.ellipse(64,51.2,43.52,33.28,0,Math.PI,0),n.fill(),n.globalAlpha=1;break;case`automaton`:n.fillStyle=`#0a0f14`,n.beginPath(),n.ellipse(64,64,25.6,14.08,0,0,Math.PI*2),n.fill(),n.fillStyle=xp(r.eye),n.beginPath(),n.arc(64,64,8.32,0,Math.PI*2),n.fill();break;default:n.beginPath(),n.moveTo(20.48,46.08),n.lineTo(107.52,46.08),n.lineTo(64,15.36),n.closePath(),n.fill()}n.fillStyle=xp(r.eye);let a=r.body===`frog`?46.08:64;n.beginPath(),n.arc(51.2,a,8.32,0,Math.PI*2),n.fill(),n.beginPath(),n.arc(76.8,a,8.32,0,Math.PI*2),n.fill(),n.fillStyle=r.glow>1.2?xp(r.accent):`#ffffff`,n.beginPath(),n.arc(53.12,a-3,2.816,0,Math.PI*2),n.fill(),n.beginPath(),n.arc(78.72,a-3,2.816,0,Math.PI*2),n.fill()}var Cp=class{constructor(e,t){n(this,`root`),n(this,`cb`),n(this,`titleScreen`),n(this,`selectScreen`),n(this,`resultsScreen`),n(this,`pauseOverlay`),n(this,`hud`),n(this,`cards`,new Map),n(this,`selectedKart`,sd[0].id),n(this,`elRank`),n(this,`elLap`),n(this,`elSpeed`),n(this,`elSpeedBar`),n(this,`elBoost`),n(this,`elBoostBar`),n(this,`elCoins`),n(this,`elCoinBonus`),n(this,`elItem`),n(this,`elItemIco`),n(this,`elTimers`),n(this,`elStandings`),n(this,`elCountdown`),n(this,`elWarn`),n(this,`elDrift`),n(this,`elDriftBar`),n(this,`elSpeedlines`),n(this,`elToast`),n(this,`elQuality`),n(this,`minimap`,null),n(this,`minimapCanvas`),n(this,`lastHudSig`,``),n(this,`lastItem`,null),n(this,`lastCountdownToken`,``),n(this,`toastUntil`,0),this.root=e,this.cb=t,this.buildTitle(),this.buildSelect(),this.buildHud(),this.buildPause(),this.buildResults(),this.setScreen(`title`)}attachMinimap(e){this.minimap=new _p(this.minimapCanvas,e)}button(e,t,n){let r=document.createElement(`button`);return r.className=t,r.textContent=e,r.addEventListener(`click`,e=>{e.stopPropagation(),n()}),r.addEventListener(`mouseenter`,()=>this.cb.onHover()),r}buildTitle(){let e=document.createElement(`section`);e.className=`screen screen--title`,e.innerHTML=`
      <div class="title__logo">Zephyr Reef<span>Grand Prix</span></div>
      <p class="title__tag">
        Six racers. Three laps. One reef. Bank the Humpback, ride the viaduct over the
        glowing lagoon, hold your nerve through the Crystal Bore — and take the trophy.
      </p>
      <div class="title__actions"></div>
      <div class="title__foot">
        <kbd>W</kbd><kbd>A</kbd><kbd>S</kbd><kbd>D</kbd> drive &nbsp;·&nbsp;
        <kbd>Shift</kbd> drift &nbsp;·&nbsp; <kbd>Space</kbd> item &nbsp;·&nbsp;
        <kbd>R</kbd> reset &nbsp;·&nbsp; <kbd>Q</kbd> look back &nbsp;·&nbsp; <kbd>P</kbd> pause
      </div>`;let t=e.querySelector(`.title__actions`),n=this.button(`Start Race`,`btn btn--primary`,()=>this.cb.onStartRace()),r=this.button(`Choose Racer`,`btn`,()=>this.cb.onOpenSelect());t.append(n,r);let i=document.createElement(`div`);i.className=`panel title__settings`,i.innerHTML=`
      <label>Quality <button class="chip" data-role="quality">High</button></label>
      <label>Sound <button class="chip" data-role="mute">On</button></label>
      <label>Master <input type="range" min="0" max="1" step="0.02" data-role="vol-master"></label>
      <label>Music <input type="range" min="0" max="1" step="0.02" data-role="vol-music"></label>
      <label>Effects <input type="range" min="0" max="1" step="0.02" data-role="vol-sfx"></label>`;let a=i.querySelector(`[data-role="quality"]`);a.addEventListener(`click`,()=>this.cb.onCycleQuality()),a.addEventListener(`mouseenter`,()=>this.cb.onHover());let o=i.querySelector(`[data-role="mute"]`);o.addEventListener(`click`,()=>this.cb.onToggleMute()),o.addEventListener(`mouseenter`,()=>this.cb.onHover());for(let[e,t]of[[`master`,`vol-master`],[`music`,`vol-music`],[`sfx`,`vol-sfx`]]){let n=i.querySelector(`[data-role="${t}"]`);n.addEventListener(`input`,()=>this.cb.onVolume(e,Number(n.value)))}e.querySelector(`.title__foot`)?.before(i),this.titleScreen=e,this.root.appendChild(e)}buildSelect(){let e=document.createElement(`section`);e.className=`screen screen--select`;let t=document.createElement(`div`);t.className=`select__head`,t.textContent=`Choose your racer`;let n=document.createElement(`div`);n.className=`select__grid`;for(let e of sd){let t=document.createElement(`div`);t.className=`card clickable`;let r=document.createElement(`canvas`);r.className=`card__swatch`,Sp(r,e);let i=document.createElement(`div`);i.className=`card__name`,i.textContent=e.name;let a=document.createElement(`div`);a.className=`card__arch`,a.textContent=e.archetype,t.append(r,i,a),t.addEventListener(`click`,()=>{this.cb.onHover(),this.setSelectedKart(e.id),this.cb.onSelectKart(e.id)}),t.addEventListener(`mouseenter`,()=>{this.setSelectedKart(e.id,!1),this.cb.onSelectKart(e.id)}),this.cards.set(e.id,t),n.appendChild(t)}let r=document.createElement(`div`);r.className=`select__detail`,r.dataset.role=`detail`;let i=document.createElement(`div`);i.className=`select__actions`,i.append(this.button(`Back`,`btn btn--ghost`,()=>this.cb.onQuitToTitle()),this.button(`Race`,`btn btn--primary`,()=>this.cb.onStartRace())),e.append(t,n,r,i),this.selectScreen=e,this.root.appendChild(e),this.setSelectedKart(this.selectedKart)}setSelectedKart(e,t=!0){this.selectedKart=e;let n=sd.find(t=>t.id===e)??sd[0];if(t)for(let[t,n]of this.cards)n.classList.toggle(`selected`,t===e);else for(let[t,n]of this.cards)n.classList.toggle(`selected`,t===e);let r=this.selectScreen.querySelector(`[data-role="detail"]`);if(!r)return;let i=e=>Math.round(Math.max(0,Math.min(1,(e-.82)/.48))*100);r.innerHTML=`
      <div class="select__tagline">${n.name} — ${n.tagline}</div>
      <div class="stat stat--speed"><span>Speed</span><div class="stat__bar"><div class="stat__fill" style="width:${i(n.stats.speed)}%"></div></div><span class="stat__val">${n.stats.speed.toFixed(2)}</span></div>
      <div class="stat stat--accel"><span>Accel</span><div class="stat__bar"><div class="stat__fill" style="width:${i(n.stats.accel)}%"></div></div><span class="stat__val">${n.stats.accel.toFixed(2)}</span></div>
      <div class="stat stat--handling"><span>Handling</span><div class="stat__bar"><div class="stat__fill" style="width:${i(n.stats.handling)}%"></div></div><span class="stat__val">${n.stats.handling.toFixed(2)}</span></div>
      <div class="stat stat--weight"><span>Weight</span><div class="stat__bar"><div class="stat__fill" style="width:${i(n.stats.weight)}%"></div></div><span class="stat__val">${n.stats.weight.toFixed(2)}</span></div>`}get chosenKart(){return this.selectedKart}buildHud(){let e=document.createElement(`div`);e.className=`hud`,e.innerHTML=`
      <div class="hud__pos">
        <div class="panel hud__rank">
          <div class="hud__rank-num" data-role="rank">1<small>/6</small></div>
          <div class="hud__rank-label">Position</div>
        </div>
        <div class="panel hud__lap">
          <div class="hud__lap-num" data-role="lap">1<small>/3</small></div>
          <div class="hud__lap-label">Lap</div>
        </div>
      </div>
      <div class="panel hud__timers" data-role="timers"></div>
      <div class="panel hud__standings" data-role="standings"></div>
      <div class="panel hud__item empty" data-role="item"><div class="hud__item-ico" data-role="itemico"></div></div>
      <div class="panel hud__coins">
        <svg class="coin-glyph" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" fill="none" stroke="#ffc857" stroke-width="2.4"/><circle cx="12" cy="12" r="5" fill="#ffc857" opacity="0.55"/></svg>
        <div>
          <div class="hud__coins-num" data-role="coins">0</div>
          <div class="hud__coins-label">Energy</div>
        </div>
        <div class="hud__coins-bonus" data-role="coinbonus"></div>
      </div>
      <div class="panel hud__speed">
        <div class="hud__speed-num" data-role="speed">0<small>km/h</small></div>
        <div class="hud__bar"><i data-role="speedbar"></i></div>
        <div class="hud__boost" data-role="boostwrap"><i data-role="boostbar"></i></div>
      </div>
      <div class="panel hud__drift" data-role="drift"><i data-role="driftbar"></i></div>
      <div class="panel hud__minimap"><canvas data-role="minimap"></canvas></div>
      <div class="hud__quality" data-role="quality"></div>
      <div class="countdown" data-role="countdown"></div>
      <div class="warn" data-role="warn">Wrong Way!</div>
      <div class="speedlines" data-role="speedlines"></div>
      <div class="panel toast" data-role="toast"></div>`,this.hud=e,this.root.appendChild(e);let t=t=>e.querySelector(`[data-role="${t}"]`);this.elRank=t(`rank`),this.elLap=t(`lap`),this.elSpeed=t(`speed`),this.elSpeedBar=t(`speedbar`),this.elBoost=t(`boostwrap`),this.elBoostBar=t(`boostbar`),this.elCoins=t(`coins`),this.elCoinBonus=t(`coinbonus`),this.elItem=t(`item`),this.elItemIco=t(`itemico`),this.elTimers=t(`timers`),this.elStandings=t(`standings`),this.elCountdown=t(`countdown`),this.elWarn=t(`warn`),this.elDrift=t(`drift`),this.elDriftBar=t(`driftbar`),this.elSpeedlines=t(`speedlines`),this.elToast=t(`toast`),this.elQuality=t(`quality`),this.minimapCanvas=t(`minimap`)}buildPause(){let e=document.createElement(`section`);e.className=`overlay overlay--pause`;let t=document.createElement(`div`);t.className=`panel overlay__card`,t.innerHTML=`
      <div class="overlay__title">Paused</div>
      <div class="overlay__actions"></div>
      <div class="overlay__hint">
        <kbd>P</kbd> or <kbd>Esc</kbd> to resume &nbsp;·&nbsp; <kbd>R</kbd> resets your kart onto the track
      </div>`,t.querySelector(`.overlay__actions`).append(this.button(`Resume`,`btn btn--primary`,()=>this.cb.onResume()),this.button(`Restart Race`,`btn`,()=>this.cb.onRestart()),this.button(`Quit to Title`,`btn btn--ghost`,()=>this.cb.onQuitToTitle())),e.appendChild(t),this.pauseOverlay=e,this.root.appendChild(e)}buildResults(){let e=document.createElement(`section`);e.className=`screen screen--results`,e.innerHTML=`
      <div class="results__head" data-role="rhead">Race Complete</div>
      <div class="results__sub" data-role="rsub"></div>
      <div class="results__podium" data-role="podium"></div>
      <div class="panel results__table" data-role="table"></div>
      <div class="select__actions" data-role="ractions"></div>`,e.querySelector(`[data-role="ractions"]`).append(this.button(`Race Again`,`btn btn--primary`,()=>this.cb.onRestart()),this.button(`Change Racer`,`btn`,()=>this.cb.onOpenSelect()),this.button(`Title`,`btn btn--ghost`,()=>this.cb.onQuitToTitle())),this.resultsScreen=e,this.root.appendChild(e)}setScreen(e){this.titleScreen.classList.toggle(`visible`,e===`title`),this.selectScreen.classList.toggle(`visible`,e===`select`),this.resultsScreen.classList.toggle(`visible`,e===`results`),this.hud.classList.toggle(`visible`,e===`race`||e===`results`),this.hud.classList.toggle(`dimmed`,e===`results`)}setPaused(e){this.pauseOverlay.classList.toggle(`visible`,e)}setQualityLabel(e,t){this.elQuality.textContent=`${e.toUpperCase()}  ·  ${t?`MUTED`:`SOUND ON`}  ·  click for audio`}setSettings(e){let t=this.titleScreen.querySelector(`[data-role="quality"]`),n=this.titleScreen.querySelector(`[data-role="mute"]`);t&&(t.textContent=`${e.quality[0].toUpperCase()}${e.quality.slice(1)}`),n&&(n.textContent=e.muted?`Muted`:`On`);let r=(e,t)=>{let n=this.titleScreen.querySelector(`[data-role="${e}"]`);n&&(n.value=String(t))};r(`vol-master`,e.master),r(`vol-music`,e.music),r(`vol-sfx`,e.sfx),this.setQualityLabel(e.quality,e.muted)}toast(e,t=1.8){this.elToast.textContent=e,this.elToast.classList.add(`show`),this.toastUntil=performance.now()+t*1e3}update(e){if(e.countdownActive){let t=e.countdown<=.6?`go`:String(Math.ceil(e.countdown));t!==this.lastCountdownToken&&(this.lastCountdownToken=t,this.elCountdown.textContent=t===`go`?`GO!`:t,this.elCountdown.classList.toggle(`go`,t===`go`),this.elCountdown.classList.remove(`show`),this.elCountdown.offsetWidth,this.elCountdown.classList.add(`show`))}else e.showGo?this.lastCountdownToken!==`go2`&&(this.lastCountdownToken=`go2`,this.elCountdown.textContent=`GO!`,this.elCountdown.classList.add(`go`,`show`)):this.lastCountdownToken!==``&&(this.lastCountdownToken=``,this.elCountdown.classList.remove(`show`));this.elWarn.classList.toggle(`show`,e.warnWrongWay);let t=[e.rank,e.lap,e.laps,Math.round(e.speed),e.coins,e.item??`-`,+!!e.itemRolling,e.rank,e.standings.map(e=>`${e.rank}${e.lap}${(e.gap??0).toFixed(0)}`).join(``),Math.round(e.lapTime*100),Math.round(e.raceTime*100),Math.round(e.driftCharge01*40),e.driftTier,Math.round(e.boostTime*20),+!!e.finished].join(`|`);if(t===this.lastHudSig){this.tick(e);return}this.lastHudSig=t,this.elRank.innerHTML=`${e.rank}<small>/${e.total}</small>`,this.elLap.innerHTML=`${e.lap}<small>/${e.laps}</small>`,this.elSpeed.innerHTML=`${Math.round(e.speed)}<small>km/h</small>`,this.elSpeedBar.style.width=`${Math.round(e.speed01*100)}%`;let n=e.boostTime>0;this.elBoost.classList.toggle(`active`,n),this.elBoostBar.style.width=`${Math.round(Math.min(1,e.boostTime/1.6)*100)}%`,this.elCoins.textContent=String(e.coins),this.elCoinBonus.textContent=e.coins>0?`+${e.coinBoostPct.toFixed(1)}% top speed`:`collect for speed`,e.item?(this.lastItem!==e.item&&(this.lastItem=e.item,this.elItemIco.innerHTML=bp(e.item),this.elItem.classList.remove(`empty`,`rolling`,`flash`),this.elItem.offsetWidth,this.elItem.classList.add(`flash`)),this.elItem.classList.toggle(`rolling`,e.itemRolling)):this.lastItem!==null&&(this.lastItem=null,this.elItem.classList.remove(`flash`,`rolling`),this.elItem.classList.add(`empty`)),this.elItemIco.innerHTML||(this.elItemIco.innerHTML=bp(`bolt`)),this.elTimers.innerHTML=`
      <div><span>Lap</span><b>${vp(e.lapTime)}</b></div>
      <div><span>Best</span><b>${vp(e.bestLap)}</b></div>
      <div><span>Race</span><b>${vp(e.raceTime)}</b></div>`,this.elStandings.innerHTML=`<h4>Field</h4>`+e.standings.map(e=>{let t=sd.find(t=>t.id===e.kartId),n=t?xp(t.kart.body):`#888`,r=e.finished?vp(e.finishTime):e.rank===1?`LEADER`:yp(e.gap??0);return`<div class="row ${e.isPlayer?`row--player`:``}">
          <span class="row__rank">${e.rank}</span>
          <span class="row__name"><i class="row__dot" style="background:${n}"></i>${e.name.split(` `)[0]}</span>
          <span class="row__gap">${r}</span>
        </div>`}).join(``),this.tick(e)}tick(e){let t=e.driftCharge01>.001;this.elDrift.classList.toggle(`active`,t),t&&(this.elDrift.className=`panel hud__drift active t${e.driftTier}`,this.elDriftBar.style.width=`${Math.round(e.driftCharge01*100)}%`);let n=Math.min(1,e.boostTime/1.2);this.elSpeedlines.style.opacity=String(Math.min(.85,n*.85+Math.max(0,e.speed01-.82)*.7)),this.toastUntil>0&&performance.now()>=this.toastUntil&&(this.toastUntil=0,this.elToast.classList.remove(`show`))}updateMinimap(e){this.minimap?.draw(e)}showResults(e,t,n,r){let i=this.resultsScreen.querySelector(`[data-role="rhead"]`),a=this.resultsScreen.querySelector(`[data-role="rsub"]`),o=this.resultsScreen.querySelector(`[data-role="podium"]`),s=this.resultsScreen.querySelector(`[data-role="table"]`);i.textContent=r===1?`Victory!`:r<=3?`Podium Finish`:`Race Complete`,a.textContent=`Finished ${r} of ${e.length} · best lap ${vp(t)} · total ${vp(n)}`,o.innerHTML=[1,0,2].filter(t=>e[t]).map(t=>{let n=e[t];return`<div class="podium__step">
          <div class="podium__name" style="${n.isPlayer?`color:#ffc857;font-weight:800`:``}">${n.name.split(` `)[0]}</div>
          <div class="podium__block p${n.rank}"></div>
          <div class="results__rank">${n.rank}</div>
        </div>`}).join(``),s.innerHTML=`<div class="results__row head"><span>#</span><span>Racer</span><span class="results__time">Best Lap</span><span class="results__time">Total</span></div>`+e.map(e=>`<div class="results__row ${e.isPlayer?`player`:``}">
            <span class="results__rank">${e.rank}</span>
            <span>${e.name}</span>
            <span class="results__time">${vp(e.bestLap)}</span>
            <span class="results__time">${e.finished?vp(e.finishTime):`DNF`}</span>
          </div>`).join(``)}},wp=e=>2**(e/12),Tp=[0,.18,.38,.62,.84,1.15],Ep={menu:[[0,4,7,11],[5,9,12,16],[9,12,16,19],[7,11,14,17]],race:[[9,12,16,19],[5,9,12,16],[0,4,7,11],[7,11,14,17],[9,12,16,21],[2,5,9,12],[5,9,12,16],[7,11,14,19]],results:[[0,4,7,12],[7,11,14,19],[9,12,16,19],[5,9,12,16]]},Dp=class{constructor(){n(this,`ctx`,null),n(this,`master`,null),n(this,`sfxBus`,null),n(this,`musicBus`,null),n(this,`engineBus`,null),n(this,`noiseBuffer`,null),n(this,`grit`,null),n(this,`graph`,[]),n(this,`engines`,new Map),n(this,`requestedEngines`,new Set),n(this,`shots`,new Set),n(this,`musicTimer`,null),n(this,`currentMusic`,null),n(this,`cueBus`,null),n(this,`retiredCues`,new Set),n(this,`step`,0),n(this,`nextStep`,0),n(this,`intensity`,.35),n(this,`musicVol`,.55),n(this,`sfxVol`,.9),n(this,`masterVol`,.85),n(this,`muted`,!1),n(this,`lastSfx`,new Map),n(this,`engine`,{attach:e=>{this.requestedEngines.add(e),this.attachEngine(e)},update:(e,t,n,r,i,a)=>{let o=this.engines.get(e),s=this.ctx;if(!o||!s||s.state!==`running`)return;let c=s.currentTime,l=X(t),u=X(n),d=o.gear;l>Tp[d+1]&&d<4?d++:d>0&&l<Tp[d]-.045&&d--,r||(d=0),r&&(d!==o.gear||o.load-u>.32&&l>.12)&&c-o.lastPop>.13&&(o.pop.gain.cancelScheduledValues(c),o.pop.gain.setValueAtTime(.001,c),o.pop.gain.linearRampToValueAtTime(.75,c+.003),o.pop.gain.exponentialRampToValueAtTime(.001,c+.075),o.lastPop=c,d!==o.gear&&(o.shiftUntil=c+.11)),o.gear=d,o.load=u;let f=X((l-Tp[d])/(Tp[d+1]-Tp[d])),p=37+(l>.03?34:0)+f*92+u*19,m=c<o.shiftUntil,h=l>.985&&u>.85?.6+Math.sin(c*95)*.3:1;o.saw1.frequency.setTargetAtTime(p,c,.045),o.saw2.frequency.setTargetAtTime(p*1.006,c,.045),o.sub.frequency.setTargetAtTime(p*.5,c,.055),o.pulse.frequency.setTargetAtTime(p*.5,c,.05),o.filter.frequency.setTargetAtTime(550+u*1800+f*800,c,.08),o.intake.frequency.setTargetAtTime(280+u*2300+l*650,c,.09),o.combustion.gain.setTargetAtTime((.06+u*.22)*h,c,.035),o.gravel.gain.setTargetAtTime(o.offroad*(.1+l*.4),c,.07),o.tyre.frequency.setTargetAtTime(750+o.slip*1250+l*380,c,.08),o.screech.gain.setTargetAtTime(o.slip*l*.11,c,.08),o.whine.frequency.setTargetAtTime(450+l*1450+o.boosting*700,c,.25),o.boost.gain.setTargetAtTime(o.boosting*.12,c,.14),o.roar.gain.setTargetAtTime(o.boosting*.4,c,.12);let g=1/(1+Math.max(0,a)*Math.max(0,a)/225);o.gain.gain.setTargetAtTime(r?(.105+u*.075)*g*(m?.45:h):0,c,.045),o.pan.pan.setTargetAtTime(Ju(i,-1,1),c,.07)},detach:e=>{this.requestedEngines.delete(e);let t=this.engines.get(e);if(t){for(let e of t.sources)try{e.stop()}catch{}for(let e of t.nodes)e.disconnect();this.engines.delete(e)}}}),n(this,`music`,{play:e=>{this.currentMusic===e&&this.cueBus||(this.music.stop(.12),this.currentMusic=e,this.ready&&this.startCue(e))},stop:(e=.4)=>{this.musicTimer!==null&&window.clearInterval(this.musicTimer),this.musicTimer=null,this.currentMusic=null;let t=this.cueBus,n=this.ctx;if(this.cueBus=null,!t||!n||n.state===`closed`)return;let r=n.currentTime+Ju(e,0,8);t.gain.cancelScheduledValues(n.currentTime),t.gain.setValueAtTime(t.gain.value,n.currentTime),t.gain.linearRampToValueAtTime(0,r),this.retiredCues.add(t);for(let e of this.shots)if(e.bus===t)for(let t of e.sources)try{t.stop(r+.01)}catch{}this.cleanCues()}})}get ready(){return this.ctx?.state===`running`}async unlock(){try{if(!this.ctx||this.ctx.state===`closed`){this.releaseGraph();let e=window.AudioContext??window.webkitAudioContext;if(!e)return;let t=this.ctx=new e,n=this.master=t.createGain();n.gain.value=this.muted?0:this.masterVol;let r=t.createDynamicsCompressor();r.threshold.value=-16,r.knee.value=16,r.ratio.value=5,r.attack.value=.003,r.release.value=.18;let i=t.createBiquadFilter();i.type=`highpass`,i.frequency.value=28,i.Q.value=.5;let a=t.createBiquadFilter();a.type=`highshelf`,a.frequency.value=6500,a.gain.value=-2;let o=t.createWaveShaper(),s=new Float32Array(4096),c=this.grit=new Float32Array(1024);for(let e=0;e<s.length;e++){let t=e*2/(s.length-1)-1;s[e]=Math.tanh(t*1.1)*.89}for(let e=0;e<c.length;e++){let t=e*2/(c.length-1)-1;c[e]=Math.tanh(t*2.8)*.72}o.curve=s,o.oversample=`2x`,i.connect(a),a.connect(r),r.connect(o),o.connect(n),n.connect(t.destination),this.sfxBus=t.createGain(),this.sfxBus.gain.value=this.sfxVol,this.musicBus=t.createGain(),this.musicBus.gain.value=this.musicVol*.65,this.engineBus=t.createGain(),this.engineBus.gain.value=this.sfxVol*.48,this.sfxBus.connect(i),this.musicBus.connect(i),this.engineBus.connect(i),this.graph=[n,r,i,a,o,this.sfxBus,this.musicBus,this.engineBus];let l=t.createBuffer(1,t.sampleRate*2,t.sampleRate),u=l.getChannelData(0),d=7562593;for(let e=0;e<u.length;e++)d=Math.imul(d,1664525)+1013904223|0,u[e]=d/2147483648;this.noiseBuffer=l,this.lastSfx.clear()}this.ctx.state!==`running`&&await this.ctx.resume();for(let e of this.requestedEngines)this.attachEngine(e);this.currentMusic&&!this.cueBus&&this.startCue(this.currentMusic)}catch{}}target(e,t){e&&this.ctx&&this.ctx.state!==`closed`&&e.setTargetAtTime(t,this.ctx.currentTime,.025)}setMasterVolume(e){this.masterVol=X(e),this.target(this.master?.gain,this.muted?0:this.masterVol)}setMusicVolume(e){this.musicVol=X(e),this.target(this.musicBus?.gain,this.musicVol*.65)}setSfxVolume(e){this.sfxVol=X(e),this.target(this.sfxBus?.gain,this.sfxVol),this.target(this.engineBus?.gain,this.sfxVol*.48)}mute(e){this.muted=e,this.target(this.master?.gain,e?0:this.masterVol)}setIntensity(e){this.intensity=X(e)}setEngineState(e,t,n,r){let i=this.engines.get(e);i&&(i.offroad=X(t),i.slip=X(Math.abs(n)),i.boosting=X(r))}play(e,t={}){if(!this.ctx||!this.sfxBus||this.ctx.state!==`running`)return;let n=this.ctx.currentTime,r=e===`coin`?.03:.02;if(n-(this.lastSfx.get(e)??-1)<r)return;this.lastSfx.set(e,n);let i=Ju(t.volume??1,0,2)*.7,a=Ju(t.rate??1,.25,4),o=n;switch(e){case`ui_move`:this.tone(660*a,.06,`square`,i*.18,o);break;case`ui_accept`:this.tone(523*a,.09,`triangle`,i*.28,o),this.tone(784*a,.16,`triangle`,i*.24,o+.07),this.tone(1046*a,.22,`triangle`,i*.2,o+.14);break;case`ui_back`:this.tone(392*a,.1,`triangle`,i*.24,o),this.tone(294*a,.16,`triangle`,i*.2,o+.08);break;case`countdown_beep`:this.tone(440,.28,`square`,i*.3,o),this.tone(880,.22,`sine`,i*.16,o);break;case`countdown_go`:this.tone(784,.5,`square`,i*.35,o),this.tone(1174,.5,`triangle`,i*.26,o),this.tone(1568,.7,`sine`,i*.2,o+.02);break;case`engine_start`:this.sweep(70,240,.6,`sawtooth`,i*.3,o);break;case`pickup`:this.tone(880,.1,`triangle`,i*.26,o),this.tone(1318,.14,`triangle`,i*.2,o+.05);break;case`coin`:this.note(1568*a,1568*a,.12,`triangle`,i*.24,o,this.sfxBus,-.25,.002,8e3),this.note(2093*a,2093*a,.24,`sine`,i*.18,o+.045,this.sfxBus,.25,.002,9500);break;case`item_roll`:this.tone(300,.05,`square`,i*.14,o);break;case`fire_bolt`:this.sweep(1200,320,.28,`sawtooth`,i*.26,o),this.noise(.18,2400,i*.18,o),this.note(90,42,.18,`sine`,i*.32,o,this.sfxBus,0,.002,900);break;case`drop_mine`:this.tone(220,.12,`square`,i*.2,o),this.tone(150,.2,`sawtooth`,i*.16,o+.05);break;case`boost_start`:this.sweep(280,1400,.45,`sawtooth`,i*.24,o),this.noise(.4,1200,i*.2,o),this.note(75,105,.55,`sine`,i*.32,o,this.sfxBus,0,.015,650);break;case`boost_end`:this.sweep(900,300,.25,`sawtooth`,i*.14,o);break;case`shield_up`:this.tone(523,.3,`sine`,i*.24,o),this.tone(1046,.4,`sine`,i*.16,o+.04);break;case`blast`:this.sweep(200,60,.7,`sawtooth`,i*.4,o),this.noise(.6,700,i*.36,o);break;case`hit`:this.sweep(420,90,.35,`square`,i*.34,o),this.noise(.25,900,i*.3,o);break;case`explode`:this.sweep(180,45,.55,`sawtooth`,i*.4,o),this.noise(.45,500,i*.34,o),this.note(95,29,.85,`sine`,i*.48,o,this.sfxBus,0,.002,850),this.noise(.8,1500,i*.2,o+.035,void 0,-.4),this.noise(.65,950,i*.18,o+.09,void 0,.45);break;case`spinout`:this.sweep(900,200,.7,`triangle`,i*.24,o);break;case`drift_start`:this.noise(.22,3200,i*.16,o);break;case`drift_charge`:this.tone(392*a,.12,`sine`,i*.14,o);break;case`mini_turbo`:this.sweep(500,1600,.35,`square`,i*.26,o),this.tone(1046,.3,`triangle`,i*.16,o+.03),this.noise(.24,4100,i*.21,o,void 0,.3),this.note(100,65,.22,`sine`,i*.22,o,this.sfxBus,0,.003,800);break;case`land`:this.noise(.16,420,i*.3,o),this.tone(90,.14,`sine`,i*.26,o);break;case`offroad`:this.noise(.2,900,i*.1,o);break;case`wall_hit`:this.noise(.2,1500,i*.3,o),this.sweep(320,120,.2,`square`,i*.22,o);break;case`lap`:this.tone(659,.18,`triangle`,i*.24,o),this.tone(988,.26,`triangle`,i*.2,o+.1);break;case`final_lap`:this.tone(659,.18,`square`,i*.24,o),this.tone(880,.18,`square`,i*.22,o+.14),this.tone(1174,.34,`square`,i*.2,o+.28);break;case`finish`:this.tone(523,.24,`triangle`,i*.3,o),this.tone(659,.24,`triangle`,i*.28,o+.16),this.tone(784,.24,`triangle`,i*.26,o+.32),this.tone(1046,.7,`triangle`,i*.24,o+.48);for(let e=0;e<3;e++)this.note(523*wp(e===0?0:e===1?4:7),523*wp(e===0?0:e===1?4:7),1.2,`sawtooth`,i*.1,o+.48,this.sfxBus,(e-1)*.45,.04,2600);this.noise(.6,6500,i*.12,o+.48,void 0,.2);break;case`warn`:this.tone(330,.16,`square`,i*.22,o),this.tone(330,.16,`square`,i*.22,o+.22);break;case`ricochet`:this.sweep(1800*a,420*a,.12,`sawtooth`,i*.25,o);break;case`orbital_siren`:this.tone(880,.08,`square`,i*.28,o),this.tone(1174,.08,`square`,i*.28,o+.09);break;case`orbital_strike`:this.note(65,22,1.2,`sawtooth`,i*.65,o),this.noise(.9,450,i*.55,o);break;case`shockwave_bass`:this.note(45,24,.75,`sine`,i*.5,o),this.noise(.35,900,i*.3,o);break;case`quantum_glitch`:this.noise(.5,3200,i*.4,o),this.tone(220,.18,`sawtooth`,i*.3,o);break;case`ultra_turbo`:this.tone(784*a,.12,`triangle`,i*.3,o),this.tone(1046*a,.14,`triangle`,i*.28,o+.08),this.tone(1568*a,.25,`triangle`,i*.25,o+.16);break;case`draft_rush`:this.noise(.28,1400,i*.18,o)}}attachEngine(e){let t=this.ctx;if(!t||t.state===`closed`||!this.engineBus||!this.noiseBuffer||this.engines.has(e))return;let n=[],r=[],i=e=>{let r=t.createGain();return r.gain.value=e,n.push(r),r},a=(e,r,i=.7)=>{let a=t.createBiquadFilter();return a.type=e,a.frequency.value=r,a.Q.value=i,n.push(a),a},o=(e,i,a)=>{let o=t.createOscillator();return o.type=e,o.frequency.value=i,o.connect(a),n.push(o),r.push(o),o},s=i(0),c=t.createStereoPanner();n.push(c),s.connect(c),c.connect(this.engineBus);let l=t.createWaveShaper();l.curve=this.grit,l.oversample=`2x`,n.push(l);let u=a(`lowpass`,900),d=i(.3);d.connect(l),l.connect(u),u.connect(s);let f=o(`sawtooth`,42,d),p=o(`sawtooth`,42.25,d),m=i(.42);m.connect(d);let h=o(`square`,21,m),g=i(.06);g.connect(d.gain);let _=o(`sine`,21,g),v=t.createBufferSource();v.buffer=this.noiseBuffer,v.loop=!0,n.push(v),r.push(v);let y=a(`bandpass`,650,2.5),b=i(.08);v.connect(y),y.connect(b),b.connect(d);let x=i(0),S=a(`lowpass`,650);v.connect(S),S.connect(x),x.connect(s);let C=i(0),w=a(`bandpass`,1800,1.8);C.connect(w),w.connect(s);let T=o(`sawtooth`,1200,C),E=i(0);E.connect(s);let D=o(`sine`,500,E),O=i(0),k=a(`lowpass`,260);v.connect(k),k.connect(O),O.connect(s);let A=i(0),j=a(`bandpass`,180,.65);v.connect(j),j.connect(A),A.connect(s);for(let e of r)e.start();this.engines.set(e,{sources:r,nodes:n,saw1:f,saw2:p,sub:h,tyre:T,whine:D,pulse:_,gain:s,combustion:b,gravel:x,screech:C,boost:E,roar:O,pop:A,filter:u,intake:y,pan:c,gear:0,load:0,shiftUntil:0,lastPop:-1,offroad:0,slip:0,boosting:0})}startCue(e){if(!this.ctx||!this.musicBus)return;let t=this.cueBus=this.ctx.createGain();t.connect(this.musicBus),t.gain.setValueAtTime(0,this.ctx.currentTime),t.gain.linearRampToValueAtTime(1,this.ctx.currentTime+.12),this.step=0,this.nextStep=this.ctx.currentTime+.025,this.scheduleMusic(e),this.musicTimer=window.setInterval(()=>this.scheduleMusic(e),25)}scheduleMusic(e){let t=this.ctx;if(!t||t.state!==`running`||this.currentMusic!==e)return;let n=e===`race`?142:e===`menu`?98:112;for(this.nextStep<t.currentTime-.15&&(this.nextStep=t.currentTime+.025);this.nextStep<t.currentTime+.14;)this.playMusicStep(e,this.step++,n,this.nextStep),this.nextStep+=60/n/4}playMusicStep(e,t,n,r){let i=this.cueBus;if(!this.ctx||!i)return;let a=60/n,o=t<32,s=o?t:t-32,c=Math.floor(s/16),l=s%16,u=Ep[e][c%Ep[e].length],d=u[0],f=e===`race`?this.intensity:.35;if(l===0)for(let e=0;e<4;e++)this.note(261.63*wp(u[e]),261.63*wp(u[e]),a*4.3,`sawtooth`,.033,r,i,(e-1.5)*.4,a*.35,1100+f*1800);if((!o||c>0)&&(l===0||l===6||l===8||l===14)){let e=65.407*wp(d+(l===14?7:0));this.note(e,e,a*(l===0?1.2:.65),`triangle`,.22,r,i,0,.008,650)}if(l%(e===`menu`||o?4:2)==0){let e=u[(Math.floor(l/2)+c)%4]+(l>=8?12:0);this.note(523.25*wp(e),523.25*wp(e),a*.65,`sine`,.075,r,i,Math.sin(l*.8)*.65,.006,4800)}if(!(o&&c===0)){if((l===0||l===8||e===`race`&&f>.6&&l===10)&&this.note(145,43,.22,`sine`,.37,r,i,0,.002,1600),(l===4||l===12)&&(this.noise(.16,2100,.2,r,i,-.08),this.note(190,105,.12,`triangle`,.11,r,i,0,.002,1800),e===`results`||f>.45))for(let e=0;e<3;e++)this.noise(.08,1400,.09,r+e*.014,i,.3);if((l%2==0||e===`race`&&f>.75)&&this.noise(l===14?.12:.035,7800,.065,r,i,l%4==0?-.35:.35),e===`race`&&!o&&f>.5&&l%4==3){let e=523.25*wp(u[(c+l)%4]+12);this.note(e,e,a*.4,`triangle`,(f-.5)*.12,r,i,-.3,.005,5400)}}}cleanCues(){for(let e of this.retiredCues){let t=!1;for(let n of this.shots)if(n.bus===e){t=!0;break}t||(e.disconnect(),this.retiredCues.delete(e))}}trackShot(e,t,n,r,i){let a={sources:e,nodes:t,bus:n};this.shots.add(a);let o=e.length;for(let n of e)n.onended=()=>{if(n.onended=null,--o===0){for(let e of t)e.disconnect();this.shots.delete(a),this.cleanCues()}},n.start(r),n.stop(r+i+.025)}tone(e,t,n,r,i,a){this.note(e,e,t,n,r,i,a??this.sfxBus,0,.007,5400)}sweep(e,t,n,r,i,a){this.note(e,t,n,r,i,a,this.sfxBus,-.1,.006,4200),this.noise(n*.7,Math.min(6e3,e*3),i*.38,a,void 0,.25)}note(e,t,n,r,i,a,o,s,c,l){let u=this.ctx;if(!u||!o||u.state===`closed`||this.shots.size>=320)return;let d=u.createOscillator(),f=u.createOscillator(),p=u.createGain(),m=u.createGain(),h=u.createBiquadFilter(),g=u.createStereoPanner();d.type=r,f.type=`sine`,p.gain.value=r===`sawtooth`?.22:.28,d.frequency.setValueAtTime(Math.max(20,e),a),d.frequency.exponentialRampToValueAtTime(Math.max(20,t),a+n),f.frequency.setValueAtTime(Math.max(20,e*2.003),a),f.frequency.exponentialRampToValueAtTime(Math.max(20,t*2.003),a+n),h.type=`lowpass`,h.Q.value=.65,h.frequency.setValueAtTime(l,a),h.frequency.exponentialRampToValueAtTime(Math.max(220,l*.45),a+n),m.gain.setValueAtTime(0,a),m.gain.linearRampToValueAtTime(i,a+Math.min(c,n*.4)),c>.08&&m.gain.linearRampToValueAtTime(i*.65,a+n*.72),m.gain.exponentialRampToValueAtTime(1e-5,a+n),m.gain.linearRampToValueAtTime(0,a+n+.02),g.pan.value=s,d.connect(h),f.connect(p),p.connect(h),h.connect(m),m.connect(g),g.connect(o),this.trackShot([d,f],[d,f,p,h,m,g],o,a,n)}noise(e,t,n,r,i,a=0){let o=this.ctx,s=i??this.sfxBus;if(!o||!s||!this.noiseBuffer||o.state===`closed`||this.shots.size>=320)return;let c=o.createBufferSource(),l=o.createBiquadFilter(),u=o.createBiquadFilter(),d=o.createGain(),f=o.createGain(),p=o.createStereoPanner();c.buffer=this.noiseBuffer,c.loop=!0,l.type=`bandpass`,l.frequency.value=t,l.Q.value=.7,u.type=`highpass`,u.frequency.value=Math.min(1e4,t*2),d.gain.value=.15,f.gain.setValueAtTime(0,r),f.gain.linearRampToValueAtTime(n,r+.003),f.gain.exponentialRampToValueAtTime(1e-5,r+e),f.gain.linearRampToValueAtTime(0,r+e+.02),p.pan.value=a,c.connect(l),c.connect(u),u.connect(d),d.connect(f),l.connect(f),f.connect(p),p.connect(s),this.trackShot([c],[c,l,u,d,f,p],s,r,e)}releaseGraph(){this.musicTimer!==null&&window.clearInterval(this.musicTimer),this.musicTimer=null;for(let e of this.engines.values()){for(let t of e.sources)try{t.stop()}catch{}for(let t of e.nodes)t.disconnect()}this.engines.clear();for(let e of this.shots){for(let t of e.sources){t.onended=null;try{t.stop()}catch{}}for(let t of e.nodes)t.disconnect()}this.shots.clear(),this.cueBus?.disconnect(),this.cueBus=null;for(let e of this.retiredCues)e.disconnect();this.retiredCues.clear();for(let e of this.graph)e.disconnect();this.graph=[],this.master=this.sfxBus=this.musicBus=this.engineBus=null,this.noiseBuffer=null,this.grit=null}shutdown(){this.currentMusic=null,this.requestedEngines.clear(),this.releaseGraph(),this.ctx&&this.ctx.state!==`closed`&&this.ctx.close().catch(()=>{}),this.ctx=null}};function Op(){return new Dp}var kp=new URLSearchParams(location.search),Ap=new W(0,1,0),jp=class{constructor(){n(this,`shots`,[]),n(this,`index`,0),n(this,`t`,0),n(this,`pos`,new W),n(this,`look`,new W),n(this,`enabled`,!0)}build(e){this.shots.length=0;let t={pos:new W,tangent:new W,right:new W,up:new W,halfWidth:12},n=(n,r,i,a,o,s,c,l,u,d)=>{let f=new W,p=new W,m=new W;e.frameAt(e.wrapS(n),t),f.set(t.pos.x+t.right.x*r,t.pos.y+i,t.pos.z+t.right.z*r),e.frameAt(e.wrapS(a),t),p.set(t.pos.x+t.right.x*o,t.pos.y+s,t.pos.z+t.right.z*o),e.frameAt(e.wrapS(c),t),m.set(t.pos.x+t.right.x*l,t.pos.y+u,t.pos.z+t.right.z*l),this.shots.push({from:f,to:p,look:m.clone(),lookTo:m.clone(),duration:d})},r=e.totalLength;n(.56*r,54,30,.615*r,42,24,.585*r,0,2.2,10),n(.945*r,-34,30,.012*r,-22,8.5,.065*r,0,2.4,11),n(.03*r,6,2.6,.095*r,-4,3.4,.15*r,0,2,8),n(.285*r,-30,16,.355*r,-22,10,.335*r,0,3,9),n(.47*r,30,17,.56*r,20,22,.545*r,0,4.5,10),n(.59*r,-34,13,.66*r,-26,8,.632*r,0,2.5,8),n(.72*r,0,7,.8*r,0,5.5,.775*r,0,2,9),n(.88*r,-20,11,.945*r,-15,7,.93*r,0,2.6,9)}hold(e,t){this.enabled=!1,this.pos.copy(e),this.look.copy(t)}track(e){this.enabled||this.look.copy(e)}update(e,t){if(this.enabled&&this.shots.length){let t=this.shots[this.index];this.t+=e/t.duration,this.t>=1&&(this.t=0,this.index=(this.index+1)%this.shots.length);let n=this.shots[this.index],r=this.t*this.t*(3-2*this.t);this.pos.lerpVectors(n.from,n.to,r),this.look.lerpVectors(n.look,n.lookTo,r)}t.position.copy(this.pos),t.lookAt(this.look)}skip(){this.t=1}},Mp=class{constructor(e){n(this,`renderer`),n(this,`scene`,new Oc),n(this,`menuCamera`),n(this,`composer`),n(this,`renderPass`),n(this,`bloom`),n(this,`input`,new Ku),n(this,`ui`),n(this,`audio`,Op()),n(this,`userSettings`,id()),n(this,`quality`,od(this.userSettings.quality,window.devicePixelRatio)),n(this,`world`,null),n(this,`vfx`,null),n(this,`director`,null),n(this,`mode`,`title`),n(this,`paused`,!1),n(this,`lastTime`,0),n(this,`elapsed`,0),n(this,`running`,!0),n(this,`cine`,new jp),n(this,`stage`,new hc),n(this,`stagePivot`,new hc),n(this,`stageModel`,null),n(this,`stageLight`),n(this,`modelsGroup`,null),n(this,`aiSpecsCache`,[]),n(this,`playerSpec`,sd[0]),n(this,`lapOverride`,Number(kp.get(`laps`))||0),n(this,`hudPhaseSeen`,``),n(this,`tick`,e=>{if(!this.running)return;requestAnimationFrame(this.tick);let t=Math.min(.05,Math.max(5e-4,(e-this.lastTime)/1e3));if(this.lastTime=e,this.mode===`race`?(this.input.pressed(`pause`)&&this.setPaused(!this.paused),!this.paused&&this.input.pressed(`reset`)&&this.director?.manualReset()):this.mode===`results`&&this.input.pressed(`pause`)&&this.quitToTitle(),this.paused){this.input.endStep(),this.render();return}this.elapsed+=t,this.mode===`race`||this.mode===`results`?this.updateRace(t):this.updateMenu(t),this.input.endStep()}),this.root=e;let t=document.getElementById(`gl`);this.renderer=new Ec({canvas:t,antialias:this.quality.antialias,powerPreference:`high-performance`,stencil:!1}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,this.quality.pixelRatioCap)),this.renderer.outputColorSpace=zt,this.renderer.toneMapping=ye,this.renderer.toneMappingExposure=1.04,this.renderer.shadowMap.enabled=this.quality.shadows,this.renderer.shadowMap.type=c,this.menuCamera=new na(62,16/9,.4,2400),this.composer=new Ru(this.renderer),this.renderPass=new zu(this.scene,this.menuCamera),this.composer.addPass(this.renderPass),this.bloom=new Vu(new V(window.innerWidth,window.innerHeight),this.quality.bloom,.55,.82),this.composer.addPass(this.bloom),this.composer.addPass(new Uu),this.stageLight=new Du(16773853,1.35),this.stageLight.position.set(6,12,10),this.stage.add(this.stagePivot),this.scene.add(this.stage,this.stageLight,this.stageLight.target),this.ui=new Cp(this.root,{onStartRace:()=>this.startRace(),onOpenSelect:()=>this.setMode(`select`),onSelectKart:e=>this.selectKart(e),onResume:()=>this.setPaused(!1),onRestart:()=>this.restartRace(),onQuitToTitle:()=>this.quitToTitle(),onCycleQuality:()=>this.cycleQuality(),onToggleMute:()=>this.toggleMute(),onVolume:(e,t)=>{e===`master`?(this.userSettings.master=t,this.audio.setMasterVolume(t)):e===`music`?(this.userSettings.music=t,this.audio.setMusicVolume(t)):(this.userSettings.sfx=t,this.audio.setSfxVolume(t)),ad(this.userSettings)},onHover:()=>{this.userSettings.muted||this.audio.play(`ui_move`,{volume:.45})}}),this.input.attach(t),this.input.onFirstInteraction(()=>this.unlockAudio()),window.addEventListener(`resize`,()=>this.onResize()),window.addEventListener(`blur`,()=>this.onBlur()),document.addEventListener(`visibilitychange`,()=>{document.hidden&&this.onBlur()}),window.addEventListener(`webglcontextlost`,e=>{e.preventDefault(),this.running=!1,this.ui.toast(`Graphics context lost — please reload`,30)}),this.playerSpec=cd(this.userSettings.lastKart)??sd[0],this.aiSpecsCache=gp(this.playerSpec.id,5);let r=kp.get(`quality`);(r===`low`||r===`medium`||r===`high`)&&(this.userSettings.quality=r,this.quality=od(r,window.devicePixelRatio),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,this.quality.pixelRatioCap)),this.renderer.shadowMap.enabled=this.quality.shadows,this.bloom.strength=this.quality.bloom),kp.get(`nobloom`)===`1`&&(this.bloom.strength=0),this.buildWorld(),this.ui.attachMinimap(this.world.spline),this.cine.build(this.world.spline),this.ui.setSelectedKart(this.playerSpec.id),this.ui.setSettings(this.userSettings),kp.get(`view`)===`models`?this.enterModelViewer():kp.get(`auto`)===`1`?this.setMode(`select`):(this.setMode(`title`),this.ui.toast(`Press START RACE — or click anywhere for sound`,4.5)),this.lastTime=performance.now(),requestAnimationFrame(this.tick)}unlockAudio(){this.audio.unlock().then(()=>{this.audio.setMasterVolume(this.userSettings.master),this.audio.setMusicVolume(this.userSettings.music),this.audio.setSfxVolume(this.userSettings.sfx),this.audio.mute(this.userSettings.muted),(this.mode===`title`||this.mode===`select`)&&this.audio.music.play(`menu`)})}toggleMute(){this.userSettings.muted=!this.userSettings.muted,this.audio.mute(this.userSettings.muted),ad(this.userSettings),this.ui.setSettings(this.userSettings),this.userSettings.muted||this.audio.play(`ui_accept`)}buildWorld(){this.director&&=(this.director.dispose(),null),this.world?.dispose(),this.vfx?.dispose(),this.world=null,this.vfx=null,this.vfx=new _d(this.scene,this.quality),this.world=lf(this.scene,this.quality),this.onResize()}buildRace(){!this.world||!this.vfx||(this.director?.dispose(),this.director=new hp(this.scene,this.world.spline,this.quality,this.vfx,this.playerSpec,this.aiSpecsCache,{laps:this.lapOverride||3,aiDifficulty:1}),this.director.events={sfx:(e,t)=>this.audio.play(e,t),shake:e=>this.director?.camera.impact(e)},this.director.camera.setAspect(Math.max(1,window.innerWidth)/Math.max(1,window.innerHeight)),this.hudPhaseSeen=``)}setMode(e){switch(this.mode=e,this.input.clearHeld(),this.paused=!1,this.ui.setPaused(!1),e){case`title`:this.ui.setScreen(`title`),this.audio.music.play(`menu`),this.cine.enabled=!0,this.cine.skip(),this.stage.visible=!1,this.clearModels();break;case`select`:this.ui.setScreen(`select`),this.audio.music.play(`menu`),this.buildStageModel(this.playerSpec.id),this.focusStage();break;case`race`:this.ui.setScreen(`race`),this.audio.music.play(`race`),this.stage.visible=!1,this.clearModels();break;case`results`:this.ui.setScreen(`results`),this.audio.music.play(`results`)}}selectKart(e){this.playerSpec=cd(e),this.userSettings.lastKart=e,ad(this.userSettings),this.buildStageModel(e)}startRace(){this.audio.play(`ui_accept`),this.hudPhaseSeen=``,this.aiSpecsCache=gp(this.playerSpec.id,5),this.buildRace(),this.setMode(`race`),this.audio.play(`engine_start`)}restartRace(){if(this.audio.play(`ui_accept`),!this.director){this.startRace();return}this.hudPhaseSeen=``,this.director.resetRace(this.playerSpec,this.aiSpecsCache),this.setMode(`race`)}quitToTitle(){this.audio.play(`ui_back`);for(let e of this.director?.racers.map(e=>e.id)??[])this.audio.engine.detach(e);this.director?.dispose(),this.director=null,this.vfx?.clearSkids(),this.setMode(`title`)}cycleQuality(){let e=[`low`,`medium`,`high`],t=e[(e.indexOf(this.userSettings.quality)+1)%e.length];this.userSettings.quality=t,ad(this.userSettings),this.quality=od(t,window.devicePixelRatio),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,this.quality.pixelRatioCap)),this.renderer.shadowMap.enabled=this.quality.shadows,this.bloom.strength=this.quality.bloom;let n=this.mode===`race`||this.mode===`results`;this.buildWorld(),this.ui.attachMinimap(this.world.spline),this.cine.build(this.world.spline),n?(this.buildRace(),this.setMode(`race`)):this.mode===`select`&&(this.buildStageModel(this.playerSpec.id),this.focusStage()),this.ui.setSettings(this.userSettings),this.ui.toast(`Quality: ${t.toUpperCase()}`,1.6),this.audio.play(`ui_accept`)}setPaused(e){if(this.mode===`race`&&this.paused!==e){if(this.paused=e,this.ui.setPaused(e),this.input.clearHeld(),e){this.audio.music.stop(.25);for(let e of this.director?.racers??[])this.audio.engine.detach(e.id)}else this.audio.music.play(`race`),this.lastTime=performance.now()}}onBlur(){this.mode===`race`&&!this.paused&&this.setPaused(!0)}buildStageModel(e){this.world&&(this.stageModel&&=(this.stagePivot.remove(this.stageModel.root),this.stageModel.dispose(),null),this.stageModel=_f(cd(e),this.quality),this.stagePivot.add(this.stageModel.root),this.stage.visible=!0)}focusStage(){if(!this.world)return;let e=this.world.spline,t={pos:new W,tangent:new W,right:new W,up:new W,halfWidth:12};e.frameAt(e.totalLength*.055,t);let n=e.surfaceHeight(t.pos.x,t.pos.z,-1);this.stage.position.set(t.pos.x,n,t.pos.z),this.stage.rotation.y=Math.atan2(-t.tangent.x,-t.tangent.z),this.stageLight.position.set(t.pos.x+t.right.x*8+5,n+11,t.pos.z+t.right.z*8+5),this.stageLight.target.position.set(t.pos.x,n+1.2,t.pos.z),this.stageLight.target.updateMatrixWorld();let r=new W(t.pos.x+t.right.x*7.2-t.tangent.x*6.6,n+3.5,t.pos.z+t.right.z*7.2-t.tangent.z*6.6),i=new W(t.pos.x,n+1,t.pos.z),a=new W().subVectors(i,r).normalize(),o=new W().crossVectors(a,Ap).normalize(),s=i.clone().addScaledVector(Ap,2.5).addScaledVector(o,-3.1);this.cine.hold(r,s)}clearModels(){this.modelsGroup&&=(this.modelsGroup.traverse(e=>{}),this.scene.remove(this.modelsGroup),null)}enterModelViewer(){this.setMode(`title`),this.mode=`models`,this.ui.setScreen(`title`),this.cine.enabled=!1;let e=new hc,t=Qu(7);for(let n=0;n<sd.length;n++){let r=_f(sd[n],this.quality),i=n%3,a=Math.floor(n/3);r.root.position.set((i-1)*6.8,0,a*8.2),r.root.rotation.y=.5*(t()-.5),e.add(r.root)}this.modelsGroup=e,this.scene.add(e),this.cine.hold(new W(0,8.5,-14),new W(0,1.1,4))}onResize(){let e=Math.max(1,window.innerWidth),t=Math.max(1,window.innerHeight);this.renderer.setSize(e,t,!1),this.composer.setSize(e,t),this.menuCamera.aspect=e/t,this.menuCamera.updateProjectionMatrix();let n=this.director?.camera;n&&n.setAspect(e/t)}activeCamera(){return(this.mode===`race`||this.mode===`results`)&&this.director?this.director.camera.camera:this.menuCamera}updateMenu(e){if(!this.world||!this.vfx)return;if(this.cine.update(e,this.menuCamera),this.mode===`models`&&this.menuCamera.lookAt(0,1.1,4),this.mode===`select`&&this.stageModel){this.stagePivot.rotation.y+=e*.5;let t=this.stageModel;t.driver.update({steer:Math.sin(this.elapsed*.85)*.45,lean:Math.sin(this.elapsed*.6)*.12,throttle:.25,drifting:!1,hitTimer:0,airborne:!1,boosting:!1,time:this.elapsed});let n=t.wheels;n.fl.spin.rotation.x+=e*1.6,n.fr.spin.rotation.x+=e*1.6,n.rl.spin.rotation.x+=e*1.6,n.rr.spin.rotation.x+=e*1.6,n.fl.pivot.rotation.y=Math.sin(this.elapsed*.85)*.22,n.fr.pivot.rotation.y=Math.sin(this.elapsed*.85)*.22}let t=Np.copy(this.menuCamera.position);t.y-=6,this.world.update(e,this.elapsed,this.menuCamera,t),this.vfx.update(e),this.render()}updateRace(e){if(!this.world||!this.vfx||!this.director){this.updateMenu(e);return}if(this.director&&this.director.racers)for(let t=0;t<this.director.racers.length;t++){let n=this.director.racers[t];if(n.progress.finished)continue;let r=!1;for(let e=0;e<this.director.racers.length;e++){if(t===e)continue;let i=this.director.racers[e],a=i.pos.x-n.pos.x,o=i.pos.z-n.pos.z,s=Math.hypot(a,o);if(s>3&&s<18){let e=-Math.sin(n.state.yaw),t=-Math.cos(n.state.yaw);if((a*e+o*t)/s>.85){r=!0;break}}}if(r?(n.draftTimer=(n.draftTimer||0)+e,n.draftTimer>1.2&&(n.state.boostTime=Math.max(n.state.boostTime,.35),n.state.speed=Math.min(n.state.speed*1.025,44),n.isPlayer&&Math.random()<.3&&this.vfx?.spark(n.pos.x,n.pos.y+.4,n.pos.z,-Math.sin(n.state.yaw)*6,.8,-Math.cos(n.state.yaw)*6,16777215,.5,.2,3,1.2))):n.draftTimer=Math.max(0,(n.draftTimer||0)-e*2),n.matrixTimer>0){n.matrixTimer-=e,n.invuln=Math.max(n.invuln,.5),n.state.speed=Math.max(n.state.speed,38),Math.random()<.4&&this.vfx?.spark(n.pos.x,n.pos.y+.5,n.pos.z,(Math.random()-.5)*4,2,(Math.random()-.5)*4,Math.random()<.5?61439:16711850,.5,.3,4,1.5);for(let e of this.director.racers)e!==n&&!e.progress.finished&&e.pos.distanceTo(n.pos)<3.5&&(e.hit(1.5,Math.random()<.5?1:-1),e.dropCoins())}n.glitchTimer>0&&(n.glitchTimer-=e,n.glitchTimer<=0&&n.kart?.object?.scale?.setScalar&&n.kart.object.scale.setScalar(1))}let t=this.director.update(e,this.input),n=this.director.camera.camera;if(this.world.update(e,this.elapsed,n,this.director.player.pos),this.vfx.update(e),this.ui.update(t),this.drawMinimap(),this.updateEngineAudio(n),this.mode===`race`&&t.phase===`results`&&this.hudPhaseSeen!==`results`){this.hudPhaseSeen=`results`;let e=this.director.results(),n=this.director.raceStats(),r=e.find(e=>e.isPlayer);this.ui.showResults(e,n.bestLapPlayer,r?.finishTime??t.raceTime,r?.rank??1),this.setMode(`results`);for(let e of this.director.racers)this.audio.engine.detach(e.id);this.ui.toast(`Race complete`,2.4)}this.render()}updateEngineAudio(e){if(!this.audio.ready||!this.director)return;let t=this.director,n=Math.atan2(e.matrixWorld.elements[8],e.matrixWorld.elements[10]);for(let r of t.racers){let t=r.state,i=t.pos.x-e.position.x,a=t.pos.z-e.position.z,o=Math.hypot(i,a),s=Math.cos(n),c=-Math.sin(n),l=o>.5?Pp((i*s+a*c)/o):0,u=X(Math.max(t.boostTime,t.padBoostTime)/1.6);this.audio.engine.attach(r.id),this.audio.engine.update(r.id,X(Math.abs(t.speed)/42),X(r.controls.throttle*(1-X(Math.abs(t.speed)/46))),!0,l,o),this.audio.setEngineState?.(r.id,+!t.onRoad,X(t.slip/10),u)}let r=t.player,i=t.racers.reduce((e,t)=>t.progress.distance>e.progress.distance?t:e),a=Math.abs(i.progress.distance-r.progress.distance),o=+(r.progress.lap>=t.config.laps),s=X(1-a/90),c=X(Math.max(r.state.boostTime,r.state.padBoostTime)/1.6);this.audio.setIntensity?.(X(o*.55+s*.4+c*.35))}drawMinimap(){if(!this.director)return;let e=[];for(let t of this.director.racers)e.push({x:t.pos.x,z:t.pos.z,color:t.isPlayer?16762967:t.kart.spec.kart.body,isPlayer:t.isPlayer,rank:t.rank});this.ui.updateMinimap(e)}render(){let e=this.activeCamera();this.renderPass.camera=e,this.composer.render()}debugStartRace(){(!this.director||this.mode===`title`||this.mode===`select`)&&this.startRace()}debugSnapshot(){let e=this.director;return e?{mode:this.mode,phase:e.phase,paused:this.paused,player:{rank:e.player.rank,lap:e.player.progress.lap,checkpoint:e.player.progress.checkpoint,finished:e.player.progress.finished,speed:Number(e.player.state.speed.toFixed(2)),coins:e.player.coins,item:e.player.item,onRoad:e.player.state.onRoad,grounded:e.player.state.grounded,drifting:e.player.state.drifting,driftTier:e.player.state.driftTier,driftCharge:Number(e.player.state.driftCharge.toFixed(2)),boostTime:Number(Math.max(e.player.state.boostTime,e.player.state.padBoostTime).toFixed(2)),airborne:!e.player.state.grounded,x:Number(e.player.pos.x.toFixed(1)),y:Number(e.player.pos.y.toFixed(1)),z:Number(e.player.pos.z.toFixed(1))},field:e.racers.map(e=>({id:e.id,name:e.name,rank:e.rank,lap:e.progress.lap,distance:Number(e.progress.distance.toFixed(1)),speed:Number(e.state.speed.toFixed(2)),finished:e.progress.finished})),lapTimes:e.player.progress.lapTimes.map(e=>Number(e.toFixed(3))),raceTime:Number(e.raceTime.toFixed(2))}:{mode:this.mode,director:null}}debugGiveItem(e){this.director&&(this.director.player.item=e,this.director.player.itemRoll=0)}debugFinishRace(){let e=this.director;if(e){for(let t=0;t<e.racers.length;t++){let n=e.racers[t];n.progress.finished||(n.progress.finished=!0,n.progress.finishTime=e.raceTime+t*.9,n.progress.finishRank=t+1,n.progress.lap=4)}e.phase=`results`}}debugSimScale(e){if(!this.director)return;let t=Math.max(1,Math.min(40,e));this.director.config.timeScale=t,this.director.config.maxSubsteps=Math.min(4800,Math.ceil(120*t)+24)}debugAutoPilot(e){this.director&&(this.director.autoPilotPlayer=e)}debugRestart(){this.restartRace()}debugTeleport(e){let t=this.director;if(!t||!this.world)return;let n=this.world.spline.wrapS(e*this.world.spline.totalLength),r=this.world.spline.sampleAtS(n),i=Math.atan2(-r.tangent.x,-r.tangent.z);t.player.kart.physics.placeOnTrack(r.pos.x,this.world.spline.surfaceHeight(r.pos.x,r.pos.z,r.i)+.2,r.pos.z,i,14)}},Np=new W;function Pp(e){return e<-1?-1:e>1?1:e}function Fp(){let e=document.getElementById(`ui`),t=document.getElementById(`boot`);if(e&&t)try{let n=new Mp(e);window.__zephyr=n,t.classList.add(`hidden`),setTimeout(()=>t.remove(),700)}catch(e){t.textContent=`Failed to start: ${e.message}`,console.error(e)}}document.readyState===`loading`?window.addEventListener(`DOMContentLoaded`,Fp,{once:!0}):Fp();