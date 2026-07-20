var Kl=Object.defineProperty;var _g=Object.getOwnPropertyDescriptor;var xg=Object.getOwnPropertyNames;var yg=Object.prototype.hasOwnProperty;var vg=(n,t)=>{for(var e in t)Kl(n,e,{get:t[e],enumerable:!0})},bg=(n,t,e,i)=>{if(t&&typeof t=="object"||typeof t=="function")for(let s of xg(t))!yg.call(n,s)&&s!==e&&Kl(n,s,{get:()=>t[s],enumerable:!(i=_g(t,s))||i.enumerable});return n};var Mg=n=>bg(Kl({},"__esModule",{value:!0}),n);var ZS={};vg(ZS,{default:()=>Zl});module.exports=Mg(ZS);var Ke=require("obsidian");var vo="185",wi={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Ei={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Yu=0,Ic=1,Zu=2;var wr=1,$u=2,Ls=3,Qn=0,He=1,zn=2,kn=0,Wi=1,Er=2,Pc=3,Dc=4,Ju=5;var _i=100,Ku=101,ju=102,Qu=103,tf=104,ef=200,nf=201,sf=202,rf=203,Ua=204,Fa=205,af=206,of=207,lf=208,cf=209,hf=210,uf=211,ff=212,df=213,pf=214,Oa=0,Ba=1,za=2,Xi=3,ka=4,Va=5,Ga=6,Ha=7,Lc=0,mf=1,gf=2,Sn=0,Nc=1,Uc=2,Fc=3,Oc=4,Bc=5,zc=6,kc=7;var Vc=300,Ti=301,$i=302,bo=303,Mo=304,Tr=306,Wa=1e3,Fn=1001,Xa=1002,Ce=1003,_f=1004;var Ar=1005;var Pe=1006,So=1007;var Ai=1008;var on=1009,Gc=1010,Hc=1011,Ns=1012,wo=1013,wn=1014,En=1015,Vn=1016,Eo=1017,To=1018,Us=1020,Wc=35902,Xc=35899,qc=1021,Yc=1022,un=1023,On=1026,Ci=1027,Zc=1028,Ao=1029,Ri=1030,Co=1031;var Ro=1033,Cr=33776,Rr=33777,Ir=33778,Pr=33779,Io=35840,Po=35841,Do=35842,Lo=35843,No=36196,Uo=37492,Fo=37496,Oo=37488,Bo=37489,Dr=37490,zo=37491,ko=37808,Vo=37809,Go=37810,Ho=37811,Wo=37812,Xo=37813,qo=37814,Yo=37815,Zo=37816,$o=37817,Jo=37818,Ko=37819,jo=37820,Qo=37821,tl=36492,el=36494,nl=36495,il=36283,sl=36284,Lr=36285,rl=36286;var er=2300,qa=2301,Na=2302,bc=2303,Mc=2400,Sc=2401,wc=2402;var xf=3200;var $c=0,yf=1,ni="",en="srgb",nr="srgb-linear",ir="linear",ee="srgb";var Vi=7680;var Ec=519,vf=512,bf=513,Mf=514,al=515,Sf=516,wf=517,ol=518,Ef=519,Ya=35044;var Jc="300 es",bn=2e3,sr=2001;function Sg(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function wg(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function rr(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Tf(){let n=rr("canvas");return n.style.display="block",n}var xu={},Ss=null;function ar(...n){let t="THREE."+n.shift();Ss?Ss("log",t,...n):console.log(t,...n)}function Af(n){let t=n[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=n[1];e&&e.isStackTrace?n[0]+=" "+e.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function Ft(...n){n=Af(n);let t="THREE."+n.shift();if(Ss)Ss("warn",t,...n);else{let e=n[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...n)}}function Bt(...n){n=Af(n);let t="THREE."+n.shift();if(Ss)Ss("error",t,...n);else{let e=n[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...n)}}function Hi(...n){let t=n.join(" ");t in xu||(xu[t]=!0,Ft(...n))}function Cf(n,t,e){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:i()}}setTimeout(r,e)})}var Rf={[Oa]:Ba,[za]:Ga,[ka]:Ha,[Xi]:Va,[Ba]:Oa,[Ga]:za,[Ha]:ka,[Va]:Xi},Mn=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){let i=this._listeners;return i===void 0?!1:i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){let i=this._listeners;if(i===void 0)return;let s=i[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let i=e[t.type];if(i!==void 0){t.target=this;let s=i.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}},Fe=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],yu=1234567,Qs=Math.PI/180,ws=180/Math.PI;function Kn(){let n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Fe[n&255]+Fe[n>>8&255]+Fe[n>>16&255]+Fe[n>>24&255]+"-"+Fe[t&255]+Fe[t>>8&255]+"-"+Fe[t>>16&15|64]+Fe[t>>24&255]+"-"+Fe[e&63|128]+Fe[e>>8&255]+"-"+Fe[e>>16&255]+Fe[e>>24&255]+Fe[i&255]+Fe[i>>8&255]+Fe[i>>16&255]+Fe[i>>24&255]).toLowerCase()}function Zt(n,t,e){return Math.max(t,Math.min(e,n))}function Kc(n,t){return(n%t+t)%t}function Eg(n,t,e,i,s){return i+(n-t)*(s-i)/(e-t)}function Tg(n,t,e){return n!==t?(e-n)/(t-n):0}function tr(n,t,e){return(1-e)*n+e*t}function Ag(n,t,e,i){return tr(n,t,1-Math.exp(-e*i))}function Cg(n,t=1){return t-Math.abs(Kc(n,t*2)-t)}function Rg(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*(3-2*n))}function Ig(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*n*(n*(n*6-15)+10))}function Pg(n,t){return n+Math.floor(Math.random()*(t-n+1))}function Dg(n,t){return n+Math.random()*(t-n)}function Lg(n){return n*(.5-Math.random())}function Ng(n){n!==void 0&&(yu=n);let t=yu+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Ug(n){return n*Qs}function Fg(n){return n*ws}function Og(n){return(n&n-1)===0&&n!==0}function Bg(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function zg(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function kg(n,t,e,i,s){let r=Math.cos,a=Math.sin,o=r(e/2),l=a(e/2),c=r((t+i)/2),h=a((t+i)/2),d=r((t-i)/2),u=a((t-i)/2),p=r((i-t)/2),g=a((i-t)/2);switch(s){case"XYX":n.set(o*h,l*d,l*u,o*c);break;case"YZY":n.set(l*u,o*h,l*d,o*c);break;case"ZXZ":n.set(l*d,l*u,o*h,o*c);break;case"XZX":n.set(o*h,l*g,l*p,o*c);break;case"YXY":n.set(l*p,o*h,l*g,o*c);break;case"ZYZ":n.set(l*g,l*p,o*h,o*c);break;default:Ft("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function vn(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function ie(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var jc={DEG2RAD:Qs,RAD2DEG:ws,generateUUID:Kn,clamp:Zt,euclideanModulo:Kc,mapLinear:Eg,inverseLerp:Tg,lerp:tr,damp:Ag,pingpong:Cg,smoothstep:Rg,smootherstep:Ig,randInt:Pg,randFloat:Dg,randFloatSpread:Lg,seededRandom:Ng,degToRad:Ug,radToDeg:Fg,isPowerOfTwo:Og,ceilPowerOfTwo:Bg,floorPowerOfTwo:zg,setQuaternionFromProperEuler:kg,normalize:ie,denormalize:vn},ih=class ih{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,i=this.y,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6],this.y=s[1]*e+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Zt(this.x,t.x,e.x),this.y=Zt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Zt(this.x,t,e),this.y=Zt(this.y,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Zt(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(Zt(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let i=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*i-a*s+t.x,this.y=r*s+a*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};ih.prototype.isVector2=!0;var Ot=ih,nn=class{constructor(t=0,e=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=s}static slerpFlat(t,e,i,s,r,a,o){let l=i[s+0],c=i[s+1],h=i[s+2],d=i[s+3],u=r[a+0],p=r[a+1],g=r[a+2],_=r[a+3];if(d!==_||l!==u||c!==p||h!==g){let m=l*u+c*p+h*g+d*_;m<0&&(u=-u,p=-p,g=-g,_=-_,m=-m);let f=1-o;if(m<.9995){let b=Math.acos(m),T=Math.sin(b);f=Math.sin(f*b)/T,o=Math.sin(o*b)/T,l=l*f+u*o,c=c*f+p*o,h=h*f+g*o,d=d*f+_*o}else{l=l*f+u*o,c=c*f+p*o,h=h*f+g*o,d=d*f+_*o;let b=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=b,c*=b,h*=b,d*=b}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=d}static multiplyQuaternionsFlat(t,e,i,s,r,a){let o=i[s],l=i[s+1],c=i[s+2],h=i[s+3],d=r[a],u=r[a+1],p=r[a+2],g=r[a+3];return t[e]=o*g+h*d+l*p-c*u,t[e+1]=l*g+h*u+c*d-o*p,t[e+2]=c*g+h*p+o*u-l*d,t[e+3]=h*g-o*d-l*u-c*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,s){return this._x=t,this._y=e,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let i=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(i/2),h=o(s/2),d=o(r/2),u=l(i/2),p=l(s/2),g=l(r/2);switch(a){case"XYZ":this._x=u*h*d+c*p*g,this._y=c*p*d-u*h*g,this._z=c*h*g+u*p*d,this._w=c*h*d-u*p*g;break;case"YXZ":this._x=u*h*d+c*p*g,this._y=c*p*d-u*h*g,this._z=c*h*g-u*p*d,this._w=c*h*d+u*p*g;break;case"ZXY":this._x=u*h*d-c*p*g,this._y=c*p*d+u*h*g,this._z=c*h*g+u*p*d,this._w=c*h*d-u*p*g;break;case"ZYX":this._x=u*h*d-c*p*g,this._y=c*p*d+u*h*g,this._z=c*h*g-u*p*d,this._w=c*h*d+u*p*g;break;case"YZX":this._x=u*h*d+c*p*g,this._y=c*p*d+u*h*g,this._z=c*h*g-u*p*d,this._w=c*h*d-u*p*g;break;case"XZY":this._x=u*h*d-c*p*g,this._y=c*p*d-u*h*g,this._z=c*h*g+u*p*d,this._w=c*h*d+u*p*g;break;default:Ft("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let i=e/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,i=e[0],s=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],h=e[6],d=e[10],u=i+o+d;if(u>0){let p=.5/Math.sqrt(u+1);this._w=.25/p,this._x=(h-l)*p,this._y=(r-c)*p,this._z=(a-s)*p}else if(i>o&&i>d){let p=2*Math.sqrt(1+i-o-d);this._w=(h-l)/p,this._x=.25*p,this._y=(s+a)/p,this._z=(r+c)/p}else if(o>d){let p=2*Math.sqrt(1+o-i-d);this._w=(r-c)/p,this._x=(s+a)/p,this._y=.25*p,this._z=(l+h)/p}else{let p=2*Math.sqrt(1+d-i-o);this._w=(a-s)/p,this._x=(r+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<1e-8?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Zt(this.dot(t),-1,1)))}rotateTowards(t,e){let i=this.angleTo(t);if(i===0)return this;let s=Math.min(1,e/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let i=t._x,s=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,h=e._w;return this._x=i*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-i*c,this._z=r*h+a*c+i*l-s*o,this._w=a*h-i*o-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){let i=t._x,s=t._y,r=t._z,a=t._w,o=this.dot(t);o<0&&(i=-i,s=-s,r=-r,a=-a,o=-o);let l=1-e;if(o<.9995){let c=Math.acos(o),h=Math.sin(c);l=Math.sin(l*c)/h,e=Math.sin(e*c)/h,this._x=this._x*l+i*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this._onChangeCallback()}else this._x=this._x*l+i*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this.normalize();return this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},sh=class sh{constructor(t=0,e=0,i=0){this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(vu.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(vu.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6]*s,this.y=r[1]*e+r[4]*i+r[7]*s,this.z=r[2]*e+r[5]*i+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,i=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*i+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*i+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*i+r[10]*s+r[14])*a,this}applyQuaternion(t){let e=this.x,i=this.y,s=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*s-o*i),h=2*(o*e-r*s),d=2*(r*i-a*e);return this.x=e+l*c+a*d-o*h,this.y=i+l*h+o*c-r*d,this.z=s+l*d+r*h-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*s,this.y=r[1]*e+r[5]*i+r[9]*s,this.z=r[2]*e+r[6]*i+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Zt(this.x,t.x,e.x),this.y=Zt(this.y,t.y,e.y),this.z=Zt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Zt(this.x,t,e),this.y=Zt(this.y,t,e),this.z=Zt(this.z,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Zt(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let i=t.x,s=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=s*l-r*o,this.y=r*a-i*l,this.z=i*o-s*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return jl.copy(this).projectOnVector(t),this.sub(jl)}reflect(t){return this.sub(jl.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(Zt(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return e*e+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){let s=Math.sin(e)*t;return this.x=s*Math.sin(i),this.y=Math.cos(e)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};sh.prototype.isVector3=!0;var V=sh,jl=new V,vu=new nn,rh=class rh{constructor(t,e,i,s,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,a,o,l,c)}set(t,e,i,s,r,a,o,l,c){let h=this.elements;return h[0]=t,h[1]=s,h[2]=o,h[3]=e,h[4]=r,h[5]=l,h[6]=i,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,s=e.elements,r=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],h=i[4],d=i[7],u=i[2],p=i[5],g=i[8],_=s[0],m=s[3],f=s[6],b=s[1],T=s[4],x=s[7],M=s[2],S=s[5],w=s[8];return r[0]=a*_+o*b+l*M,r[3]=a*m+o*T+l*S,r[6]=a*f+o*x+l*w,r[1]=c*_+h*b+d*M,r[4]=c*m+h*T+d*S,r[7]=c*f+h*x+d*w,r[2]=u*_+p*b+g*M,r[5]=u*m+p*T+g*S,r[8]=u*f+p*x+g*w,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return e*a*h-e*o*c-i*r*h+i*o*l+s*r*c-s*a*l}invert(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],d=h*a-o*c,u=o*l-h*r,p=c*r-a*l,g=e*d+i*u+s*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/g;return t[0]=d*_,t[1]=(s*c-h*i)*_,t[2]=(o*i-s*a)*_,t[3]=u*_,t[4]=(h*e-s*l)*_,t[5]=(s*r-o*e)*_,t[6]=p*_,t[7]=(i*l-c*e)*_,t[8]=(a*e-i*r)*_,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*a+c*o)+a+t,-s*c,s*l,-s*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return Hi("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Ql.makeScale(t,e)),this}rotate(t){return Hi("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Ql.makeRotation(-t)),this}translate(t,e){return Hi("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Ql.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,i=t.elements;for(let s=0;s<9;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}};rh.prototype.isMatrix3=!0;var Gt=rh,Ql=new Gt,bu=new Gt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Mu=new Gt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Vg(){let n={enabled:!0,workingColorSpace:nr,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===ee&&(s.r=jn(s.r),s.g=jn(s.g),s.b=jn(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===ee&&(s.r=Ms(s.r),s.g=Ms(s.g),s.b=Ms(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===ni?ir:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Hi("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Hi("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[nr]:{primaries:t,whitePoint:i,transfer:ir,toXYZ:bu,fromXYZ:Mu,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:en},outputColorSpaceConfig:{drawingBufferColorSpace:en}},[en]:{primaries:t,whitePoint:i,transfer:ee,toXYZ:bu,fromXYZ:Mu,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:en}}}),n}var $t=Vg();function jn(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Ms(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var as,Za=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement=="undefined")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{as===void 0&&(as=rr("canvas")),as.width=t.width,as.height=t.height;let s=as.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),i=as}return i.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement!="undefined"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&t instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&t instanceof ImageBitmap){let e=rr("canvas");e.width=t.width,e.height=t.height;let i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);let s=i.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=jn(r[a]/255)*255;return i.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(jn(e[i]/255)*255):e[i]=jn(e[i]);return{data:e,width:t.width,height:t.height}}else return Ft("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Gg=0,Es=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Gg++}),this.uuid=Kn(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement!="undefined"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame!="undefined"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(tc(s[a].image)):r.push(tc(s[a]))}else r=tc(s);i.url=r}return e||(t.images[this.uuid]=i),i}};function tc(n){return typeof HTMLImageElement!="undefined"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&n instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&n instanceof ImageBitmap?Za.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(Ft("Texture: Unable to serialize Texture."),{})}var Hg=0,ec=new V,Ve=class n extends Mn{constructor(t=n.DEFAULT_IMAGE,e=n.DEFAULT_MAPPING,i=Fn,s=Fn,r=Pe,a=Ai,o=un,l=on,c=n.DEFAULT_ANISOTROPY,h=ni){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Hg++}),this.uuid=Kn(),this.name="",this.source=new Es(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Ot(0,0),this.repeat=new Ot(1,1),this.center=new Ot(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Gt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(ec).x}get height(){return this.source.getSize(ec).y}get depth(){return this.source.getSize(ec).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let i=t[e];if(i===void 0){Ft(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){Ft(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Vc)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Wa:t.x=t.x-Math.floor(t.x);break;case Fn:t.x=t.x<0?0:1;break;case Xa:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Wa:t.y=t.y-Math.floor(t.y);break;case Fn:t.y=t.y<0?0:1;break;case Xa:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Ve.DEFAULT_IMAGE=null;Ve.DEFAULT_MAPPING=Vc;Ve.DEFAULT_ANISOTROPY=1;var ah=class ah{constructor(t=0,e=0,i=0,s=1){this.x=t,this.y=e,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,s){return this.x=t,this.y=e,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,i=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*i+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*i+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*i+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*i+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,s,r,l=t.elements,c=l[0],h=l[4],d=l[8],u=l[1],p=l[5],g=l[9],_=l[2],m=l[6],f=l[10];if(Math.abs(h-u)<.01&&Math.abs(d-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+f-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let T=(c+1)/2,x=(p+1)/2,M=(f+1)/2,S=(h+u)/4,w=(d+_)/4,y=(g+m)/4;return T>x&&T>M?T<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(T),s=S/i,r=w/i):x>M?x<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(x),i=S/s,r=y/s):M<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(M),i=w/r,s=y/r),this.set(i,s,r,e),this}let b=Math.sqrt((m-g)*(m-g)+(d-_)*(d-_)+(u-h)*(u-h));return Math.abs(b)<.001&&(b=1),this.x=(m-g)/b,this.y=(d-_)/b,this.z=(u-h)/b,this.w=Math.acos((c+p+f-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Zt(this.x,t.x,e.x),this.y=Zt(this.y,t.y,e.y),this.z=Zt(this.z,t.z,e.z),this.w=Zt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Zt(this.x,t,e),this.y=Zt(this.y,t,e),this.z=Zt(this.z,t,e),this.w=Zt(this.w,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Zt(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};ah.prototype.isVector4=!0;var de=ah,$a=class extends Mn{constructor(t=1,e=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Pe,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=i.depth,this.scissor=new de(0,0,t,e),this.scissorTest=!1,this.viewport=new de(0,0,t,e),this.textures=[];let s={width:t,height:e,depth:i.depth},r=new Ve(s),a=i.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:Pe,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,i=t.textures.length;e<i;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new Es(s)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},sn=class extends $a{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}},or=class extends Ve{constructor(t=null,e=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=Ce,this.minFilter=Ce,this.wrapR=Fn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Ja=class extends Ve{constructor(t=null,e=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=Ce,this.minFilter=Ce,this.wrapR=Fn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var yo=class yo{constructor(t,e,i,s,r,a,o,l,c,h,d,u,p,g,_,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,a,o,l,c,h,d,u,p,g,_,m)}set(t,e,i,s,r,a,o,l,c,h,d,u,p,g,_,m){let f=this.elements;return f[0]=t,f[4]=e,f[8]=i,f[12]=s,f[1]=r,f[5]=a,f[9]=o,f[13]=l,f[2]=c,f[6]=h,f[10]=d,f[14]=u,f[3]=p,f[7]=g,f[11]=_,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new yo().fromArray(this.elements)}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){let e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),i.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,i=t.elements,s=1/os.setFromMatrixColumn(t,0).length(),r=1/os.setFromMatrixColumn(t,1).length(),a=1/os.setFromMatrixColumn(t,2).length();return e[0]=i[0]*s,e[1]=i[1]*s,e[2]=i[2]*s,e[3]=0,e[4]=i[4]*r,e[5]=i[5]*r,e[6]=i[6]*r,e[7]=0,e[8]=i[8]*a,e[9]=i[9]*a,e[10]=i[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,i=t.x,s=t.y,r=t.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){let u=a*h,p=a*d,g=o*h,_=o*d;e[0]=l*h,e[4]=-l*d,e[8]=c,e[1]=p+g*c,e[5]=u-_*c,e[9]=-o*l,e[2]=_-u*c,e[6]=g+p*c,e[10]=a*l}else if(t.order==="YXZ"){let u=l*h,p=l*d,g=c*h,_=c*d;e[0]=u+_*o,e[4]=g*o-p,e[8]=a*c,e[1]=a*d,e[5]=a*h,e[9]=-o,e[2]=p*o-g,e[6]=_+u*o,e[10]=a*l}else if(t.order==="ZXY"){let u=l*h,p=l*d,g=c*h,_=c*d;e[0]=u-_*o,e[4]=-a*d,e[8]=g+p*o,e[1]=p+g*o,e[5]=a*h,e[9]=_-u*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){let u=a*h,p=a*d,g=o*h,_=o*d;e[0]=l*h,e[4]=g*c-p,e[8]=u*c+_,e[1]=l*d,e[5]=_*c+u,e[9]=p*c-g,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){let u=a*l,p=a*c,g=o*l,_=o*c;e[0]=l*h,e[4]=_-u*d,e[8]=g*d+p,e[1]=d,e[5]=a*h,e[9]=-o*h,e[2]=-c*h,e[6]=p*d+g,e[10]=u-_*d}else if(t.order==="XZY"){let u=a*l,p=a*c,g=o*l,_=o*c;e[0]=l*h,e[4]=-d,e[8]=c*h,e[1]=u*d+_,e[5]=a*h,e[9]=p*d-g,e[2]=g*d-p,e[6]=o*h,e[10]=_*d+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Wg,t,Xg)}lookAt(t,e,i){let s=this.elements;return Qe.subVectors(t,e),Qe.lengthSq()===0&&(Qe.z=1),Qe.normalize(),ui.crossVectors(i,Qe),ui.lengthSq()===0&&(Math.abs(i.z)===1?Qe.x+=1e-4:Qe.z+=1e-4,Qe.normalize(),ui.crossVectors(i,Qe)),ui.normalize(),oa.crossVectors(Qe,ui),s[0]=ui.x,s[4]=oa.x,s[8]=Qe.x,s[1]=ui.y,s[5]=oa.y,s[9]=Qe.y,s[2]=ui.z,s[6]=oa.z,s[10]=Qe.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,s=e.elements,r=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],h=i[1],d=i[5],u=i[9],p=i[13],g=i[2],_=i[6],m=i[10],f=i[14],b=i[3],T=i[7],x=i[11],M=i[15],S=s[0],w=s[4],y=s[8],E=s[12],I=s[1],P=s[5],N=s[9],H=s[13],R=s[2],L=s[6],U=s[10],D=s[14],F=s[3],W=s[7],$=s[11],et=s[15];return r[0]=a*S+o*I+l*R+c*F,r[4]=a*w+o*P+l*L+c*W,r[8]=a*y+o*N+l*U+c*$,r[12]=a*E+o*H+l*D+c*et,r[1]=h*S+d*I+u*R+p*F,r[5]=h*w+d*P+u*L+p*W,r[9]=h*y+d*N+u*U+p*$,r[13]=h*E+d*H+u*D+p*et,r[2]=g*S+_*I+m*R+f*F,r[6]=g*w+_*P+m*L+f*W,r[10]=g*y+_*N+m*U+f*$,r[14]=g*E+_*H+m*D+f*et,r[3]=b*S+T*I+x*R+M*F,r[7]=b*w+T*P+x*L+M*W,r[11]=b*y+T*N+x*U+M*$,r[15]=b*E+T*H+x*D+M*et,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[4],s=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],h=t[2],d=t[6],u=t[10],p=t[14],g=t[3],_=t[7],m=t[11],f=t[15],b=l*p-c*u,T=o*p-c*d,x=o*u-l*d,M=a*p-c*h,S=a*u-l*h,w=a*d-o*h;return e*(_*b-m*T+f*x)-i*(g*b-m*M+f*S)+s*(g*T-_*M+f*w)-r*(g*x-_*S+m*w)}determinantAffine(){let t=this.elements,e=t[0],i=t[4],s=t[8],r=t[1],a=t[5],o=t[9],l=t[2],c=t[6],h=t[10];return e*(a*h-o*c)-i*(r*h-o*l)+s*(r*c-a*l)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=i),this}invert(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],d=t[9],u=t[10],p=t[11],g=t[12],_=t[13],m=t[14],f=t[15],b=e*o-i*a,T=e*l-s*a,x=e*c-r*a,M=i*l-s*o,S=i*c-r*o,w=s*c-r*l,y=h*_-d*g,E=h*m-u*g,I=h*f-p*g,P=d*m-u*_,N=d*f-p*_,H=u*f-p*m,R=b*H-T*N+x*P+M*I-S*E+w*y;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let L=1/R;return t[0]=(o*H-l*N+c*P)*L,t[1]=(s*N-i*H-r*P)*L,t[2]=(_*w-m*S+f*M)*L,t[3]=(u*S-d*w-p*M)*L,t[4]=(l*I-a*H-c*E)*L,t[5]=(e*H-s*I+r*E)*L,t[6]=(m*x-g*w-f*T)*L,t[7]=(h*w-u*x+p*T)*L,t[8]=(a*N-o*I+c*y)*L,t[9]=(i*I-e*N-r*y)*L,t[10]=(g*S-_*x+f*b)*L,t[11]=(d*x-h*S-p*b)*L,t[12]=(o*E-a*P-l*y)*L,t[13]=(e*P-i*E+s*y)*L,t[14]=(_*T-g*M-m*b)*L,t[15]=(h*M-d*T+u*b)*L,this}scale(t){let e=this.elements,i=t.x,s=t.y,r=t.z;return e[0]*=i,e[4]*=s,e[8]*=r,e[1]*=i,e[5]*=s,e[9]*=r,e[2]*=i,e[6]*=s,e[10]*=r,e[3]*=i,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,s))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let i=Math.cos(e),s=Math.sin(e),r=1-i,a=t.x,o=t.y,l=t.z,c=r*a,h=r*o;return this.set(c*a+i,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+i,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,s,r,a){return this.set(1,i,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,i){let s=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,h=a+a,d=o+o,u=r*c,p=r*h,g=r*d,_=a*h,m=a*d,f=o*d,b=l*c,T=l*h,x=l*d,M=i.x,S=i.y,w=i.z;return s[0]=(1-(_+f))*M,s[1]=(p+x)*M,s[2]=(g-T)*M,s[3]=0,s[4]=(p-x)*S,s[5]=(1-(u+f))*S,s[6]=(m+b)*S,s[7]=0,s[8]=(g+T)*w,s[9]=(m-b)*w,s[10]=(1-(u+_))*w,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,i){let s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];let r=this.determinantAffine();if(r===0)return i.set(1,1,1),e.identity(),this;let a=os.set(s[0],s[1],s[2]).length(),o=os.set(s[4],s[5],s[6]).length(),l=os.set(s[8],s[9],s[10]).length();r<0&&(a=-a),_n.copy(this);let c=1/a,h=1/o,d=1/l;return _n.elements[0]*=c,_n.elements[1]*=c,_n.elements[2]*=c,_n.elements[4]*=h,_n.elements[5]*=h,_n.elements[6]*=h,_n.elements[8]*=d,_n.elements[9]*=d,_n.elements[10]*=d,e.setFromRotationMatrix(_n),i.x=a,i.y=o,i.z=l,this}makePerspective(t,e,i,s,r,a,o=bn,l=!1){let c=this.elements,h=2*r/(e-t),d=2*r/(i-s),u=(e+t)/(e-t),p=(i+s)/(i-s),g,_;if(l)g=r/(a-r),_=a*r/(a-r);else if(o===bn)g=-(a+r)/(a-r),_=-2*a*r/(a-r);else if(o===sr)g=-a/(a-r),_=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=d,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,i,s,r,a,o=bn,l=!1){let c=this.elements,h=2/(e-t),d=2/(i-s),u=-(e+t)/(e-t),p=-(i+s)/(i-s),g,_;if(l)g=1/(a-r),_=a/(a-r);else if(o===bn)g=-2/(a-r),_=-(a+r)/(a-r);else if(o===sr)g=-1/(a-r),_=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=d,c[9]=0,c[13]=p,c[2]=0,c[6]=0,c[10]=g,c[14]=_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,i=t.elements;for(let s=0;s<16;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}};yo.prototype.isMatrix4=!0;var fe=yo,os=new V,_n=new fe,Wg=new V(0,0,0),Xg=new V(1,1,1),ui=new V,oa=new V,Qe=new V,Su=new fe,wu=new nn,xi=class n{constructor(t=0,e=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,s=this._order){return this._x=t,this._y=e,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){let s=t.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],d=s[2],u=s[6],p=s[10];switch(e){case"XYZ":this._y=Math.asin(Zt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Zt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(Zt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Zt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Zt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-Zt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:Ft("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return Su.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Su,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return wu.setFromEuler(this),this.setFromQuaternion(wu,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};xi.DEFAULT_ORDER="XYZ";var Ts=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},qg=0,Eu=new V,ls=new nn,Xn=new fe,la=new V,Xs=new V,Yg=new V,Zg=new nn,Tu=new V(1,0,0),Au=new V(0,1,0),Cu=new V(0,0,1),Ru={type:"added"},$g={type:"removed"},cs={type:"childadded",child:null},nc={type:"childremoved",child:null},Ge=class n extends Mn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:qg++}),this.uuid=Kn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let t=new V,e=new xi,i=new nn,s=new V(1,1,1);function r(){i.setFromEuler(e,!1)}function a(){e.setFromQuaternion(i,void 0,!1)}e._onChange(r),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new fe},normalMatrix:{value:new Gt}}),this.matrix=new fe,this.matrixWorld=new fe,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ts,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return ls.setFromAxisAngle(t,e),this.quaternion.multiply(ls),this}rotateOnWorldAxis(t,e){return ls.setFromAxisAngle(t,e),this.quaternion.premultiply(ls),this}rotateX(t){return this.rotateOnAxis(Tu,t)}rotateY(t){return this.rotateOnAxis(Au,t)}rotateZ(t){return this.rotateOnAxis(Cu,t)}translateOnAxis(t,e){return Eu.copy(t).applyQuaternion(this.quaternion),this.position.add(Eu.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Tu,t)}translateY(t){return this.translateOnAxis(Au,t)}translateZ(t){return this.translateOnAxis(Cu,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Xn.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?la.copy(t):la.set(t,e,i);let s=this.parent;this.updateWorldMatrix(!0,!1),Xs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Xn.lookAt(Xs,la,this.up):Xn.lookAt(la,Xs,this.up),this.quaternion.setFromRotationMatrix(Xn),s&&(Xn.extractRotation(s.matrixWorld),ls.setFromRotationMatrix(Xn),this.quaternion.premultiply(ls.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(Bt("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Ru),cs.child=t,this.dispatchEvent(cs),cs.child=null):Bt("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent($g),nc.child=t,this.dispatchEvent(nc),nc.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Xn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Xn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Xn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Ru),cs.child=t,this.dispatchEvent(cs),cs.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,s=this.children.length;i<s;i++){let a=this.children[i].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Xs,t,Yg),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Xs,Zg,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,i=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*i-r[8]*s,r[13]+=i-r[1]*e-r[5]*i-r[9]*s,r[14]+=s-r[2]*e-r[6]*i-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e,i=!1){let s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),e===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,i)}}toJSON(t){let e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),this.static!==!1&&(s.static=this.static),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let d=l[c];r(t.shapes,d)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(t.animations,l))}}if(e){let o=a(t.geometries),l=a(t.materials),c=a(t.textures),h=a(t.images),d=a(t.shapes),u=a(t.skeletons),p=a(t.animations),g=a(t.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),d.length>0&&(i.shapes=d),u.length>0&&(i.skeletons=u),p.length>0&&(i.animations=p),g.length>0&&(i.nodes=g)}return i.object=s,i;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){let s=t.children[i];this.add(s.clone())}return this}};Ge.DEFAULT_UP=new V(0,1,0);Ge.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ge.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Gi=class extends Ge{constructor(){super(),this.isGroup=!0,this.type="Group"}},Jg={type:"move"},As=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Gi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Gi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new V,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new V),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Gi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new V,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new V,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(let _ of t.hand.values()){let m=e.getJointPose(_,i),f=this._getHandJoint(c,_);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}let h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],u=h.position.distanceTo(d.position),p=.02,g=.005;c.inputState.pinching&&u>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&u<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));o!==null&&(s=e.getPose(t.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Jg)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let i=new Gi;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}},If={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},fi={h:0,s:0,l:0},ca={h:0,s:0,l:0};function ic(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}var Jt=class{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=en){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,$t.colorSpaceToWorking(this,e),this}setRGB(t,e,i,s=$t.workingColorSpace){return this.r=t,this.g=e,this.b=i,$t.colorSpaceToWorking(this,s),this}setHSL(t,e,i,s=$t.workingColorSpace){if(t=Kc(t,1),e=Zt(e,0,1),i=Zt(i,0,1),e===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+e):i+e-i*e,a=2*i-r;this.r=ic(a,r,t+1/3),this.g=ic(a,r,t),this.b=ic(a,r,t-1/3)}return $t.colorSpaceToWorking(this,s),this}setStyle(t,e=en){function i(r){r!==void 0&&parseFloat(r)<1&&Ft("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:Ft("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);Ft("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=en){let i=If[t.toLowerCase()];return i!==void 0?this.setHex(i,e):Ft("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=jn(t.r),this.g=jn(t.g),this.b=jn(t.b),this}copyLinearToSRGB(t){return this.r=Ms(t.r),this.g=Ms(t.g),this.b=Ms(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=en){return $t.workingToColorSpace(Oe.copy(this),t),Math.round(Zt(Oe.r*255,0,255))*65536+Math.round(Zt(Oe.g*255,0,255))*256+Math.round(Zt(Oe.b*255,0,255))}getHexString(t=en){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=$t.workingColorSpace){$t.workingToColorSpace(Oe.copy(this),e);let i=Oe.r,s=Oe.g,r=Oe.b,a=Math.max(i,s,r),o=Math.min(i,s,r),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let d=a-o;switch(c=h<=.5?d/(a+o):d/(2-a-o),a){case i:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-i)/d+2;break;case r:l=(i-s)/d+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=$t.workingColorSpace){return $t.workingToColorSpace(Oe.copy(this),e),t.r=Oe.r,t.g=Oe.g,t.b=Oe.b,t}getStyle(t=en){$t.workingToColorSpace(Oe.copy(this),t);let e=Oe.r,i=Oe.g,s=Oe.b;return t!==en?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,e,i){return this.getHSL(fi),this.setHSL(fi.h+t,fi.s+e,fi.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(fi),t.getHSL(ca);let i=tr(fi.h,ca.h,e),s=tr(fi.s,ca.s,e),r=tr(fi.l,ca.l,e);return this.setHSL(i,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,i=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*i+r[6]*s,this.g=r[1]*e+r[4]*i+r[7]*s,this.b=r[2]*e+r[5]*i+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Oe=new Jt;Jt.NAMES=If;var lr=class extends Ge{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new xi,this.environmentIntensity=1,this.environmentRotation=new xi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}},xn=new V,qn=new V,sc=new V,Yn=new V,hs=new V,us=new V,Iu=new V,rc=new V,ac=new V,oc=new V,lc=new de,cc=new de,hc=new de,Jn=class n{constructor(t=new V,e=new V,i=new V){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,s){s.subVectors(i,e),xn.subVectors(t,e),s.cross(xn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,i,s,r){xn.subVectors(s,e),qn.subVectors(i,e),sc.subVectors(t,e);let a=xn.dot(xn),o=xn.dot(qn),l=xn.dot(sc),c=qn.dot(qn),h=qn.dot(sc),d=a*c-o*o;if(d===0)return r.set(0,0,0),null;let u=1/d,p=(c*l-o*h)*u,g=(a*h-o*l)*u;return r.set(1-p-g,g,p)}static containsPoint(t,e,i,s){return this.getBarycoord(t,e,i,s,Yn)===null?!1:Yn.x>=0&&Yn.y>=0&&Yn.x+Yn.y<=1}static getInterpolation(t,e,i,s,r,a,o,l){return this.getBarycoord(t,e,i,s,Yn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Yn.x),l.addScaledVector(a,Yn.y),l.addScaledVector(o,Yn.z),l)}static getInterpolatedAttribute(t,e,i,s,r,a){return lc.setScalar(0),cc.setScalar(0),hc.setScalar(0),lc.fromBufferAttribute(t,e),cc.fromBufferAttribute(t,i),hc.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(lc,r.x),a.addScaledVector(cc,r.y),a.addScaledVector(hc,r.z),a}static isFrontFacing(t,e,i,s){return xn.subVectors(i,e),qn.subVectors(t,e),xn.cross(qn).dot(s)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,s){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,i,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return xn.subVectors(this.c,this.b),qn.subVectors(this.a,this.b),xn.cross(qn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return n.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return n.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,s,r){return n.getInterpolation(t,this.a,this.b,this.c,e,i,s,r)}containsPoint(t){return n.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return n.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let i=this.a,s=this.b,r=this.c,a,o;hs.subVectors(s,i),us.subVectors(r,i),rc.subVectors(t,i);let l=hs.dot(rc),c=us.dot(rc);if(l<=0&&c<=0)return e.copy(i);ac.subVectors(t,s);let h=hs.dot(ac),d=us.dot(ac);if(h>=0&&d<=h)return e.copy(s);let u=l*d-h*c;if(u<=0&&l>=0&&h<=0)return a=l/(l-h),e.copy(i).addScaledVector(hs,a);oc.subVectors(t,r);let p=hs.dot(oc),g=us.dot(oc);if(g>=0&&p<=g)return e.copy(r);let _=p*c-l*g;if(_<=0&&c>=0&&g<=0)return o=c/(c-g),e.copy(i).addScaledVector(us,o);let m=h*g-p*d;if(m<=0&&d-h>=0&&p-g>=0)return Iu.subVectors(r,s),o=(d-h)/(d-h+(p-g)),e.copy(s).addScaledVector(Iu,o);let f=1/(m+_+u);return a=_*f,o=u*f,e.copy(i).addScaledVector(hs,a).addScaledVector(us,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},yi=class{constructor(t=new V(1/0,1/0,1/0),e=new V(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(yn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(yn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let i=yn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let i=t.geometry;if(i!==void 0){let r=i.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,yn):yn.fromBufferAttribute(r,a),yn.applyMatrix4(t.matrixWorld),this.expandByPoint(yn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),ha.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),ha.copy(i.boundingBox)),ha.applyMatrix4(t.matrixWorld),this.union(ha)}let s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,yn),yn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(qs),ua.subVectors(this.max,qs),fs.subVectors(t.a,qs),ds.subVectors(t.b,qs),ps.subVectors(t.c,qs),di.subVectors(ds,fs),pi.subVectors(ps,ds),Oi.subVectors(fs,ps);let e=[0,-di.z,di.y,0,-pi.z,pi.y,0,-Oi.z,Oi.y,di.z,0,-di.x,pi.z,0,-pi.x,Oi.z,0,-Oi.x,-di.y,di.x,0,-pi.y,pi.x,0,-Oi.y,Oi.x,0];return!uc(e,fs,ds,ps,ua)||(e=[1,0,0,0,1,0,0,0,1],!uc(e,fs,ds,ps,ua))?!1:(fa.crossVectors(di,pi),e=[fa.x,fa.y,fa.z],uc(e,fs,ds,ps,ua))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,yn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(yn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Zn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Zn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Zn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Zn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Zn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Zn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Zn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Zn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Zn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},Zn=[new V,new V,new V,new V,new V,new V,new V,new V],yn=new V,ha=new yi,fs=new V,ds=new V,ps=new V,di=new V,pi=new V,Oi=new V,qs=new V,ua=new V,fa=new V,Bi=new V;function uc(n,t,e,i,s){for(let r=0,a=n.length-3;r<=a;r+=3){Bi.fromArray(n,r);let o=s.x*Math.abs(Bi.x)+s.y*Math.abs(Bi.y)+s.z*Math.abs(Bi.z),l=t.dot(Bi),c=e.dot(Bi),h=i.dot(Bi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var ve=new V,da=new Ot,Kg=0,qe=class extends Mn{constructor(t,e,i=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Kg++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=Ya,this.updateRanges=[],this.gpuType=En,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)da.fromBufferAttribute(this,e),da.applyMatrix3(t),this.setXY(e,da.x,da.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)ve.fromBufferAttribute(this,e),ve.applyMatrix3(t),this.setXYZ(e,ve.x,ve.y,ve.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)ve.fromBufferAttribute(this,e),ve.applyMatrix4(t),this.setXYZ(e,ve.x,ve.y,ve.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)ve.fromBufferAttribute(this,e),ve.applyNormalMatrix(t),this.setXYZ(e,ve.x,ve.y,ve.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)ve.fromBufferAttribute(this,e),ve.transformDirection(t),this.setXYZ(e,ve.x,ve.y,ve.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=vn(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=ie(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=vn(e,this.array)),e}setX(t,e){return this.normalized&&(e=ie(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=vn(e,this.array)),e}setY(t,e){return this.normalized&&(e=ie(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=vn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=ie(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=vn(e,this.array)),e}setW(t,e){return this.normalized&&(e=ie(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=ie(e,this.array),i=ie(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,s){return t*=this.itemSize,this.normalized&&(e=ie(e,this.array),i=ie(i,this.array),s=ie(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t*=this.itemSize,this.normalized&&(e=ie(e,this.array),i=ie(i,this.array),s=ie(s,this.array),r=ie(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Ya&&(t.usage=this.usage),t}dispose(){this.dispatchEvent({type:"dispose"})}};var cr=class extends qe{constructor(t,e,i){super(new Uint16Array(t),e,i)}};var hr=class extends qe{constructor(t,e,i){super(new Uint32Array(t),e,i)}};var be=class extends qe{constructor(t,e,i){super(new Float32Array(t),e,i)}},jg=new yi,Ys=new V,fc=new V,vi=class{constructor(t=new V,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let i=this.center;e!==void 0?i.copy(e):jg.setFromPoints(t).getCenter(i);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,i.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ys.subVectors(t,this.center);let e=Ys.lengthSq();if(e>this.radius*this.radius){let i=Math.sqrt(e),s=(i-this.radius)*.5;this.center.addScaledVector(Ys,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(fc.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ys.copy(t.center).add(fc)),this.expandByPoint(Ys.copy(t.center).sub(fc))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},Qg=0,cn=new fe,dc=new Ge,ms=new V,tn=new yi,Zs=new yi,Ae=new V,De=class n extends Mn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Qg++}),this.uuid=Kn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Sg(t)?hr:cr)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new Gt().getNormalMatrix(t);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return cn.makeRotationFromQuaternion(t),this.applyMatrix4(cn),this}rotateX(t){return cn.makeRotationX(t),this.applyMatrix4(cn),this}rotateY(t){return cn.makeRotationY(t),this.applyMatrix4(cn),this}rotateZ(t){return cn.makeRotationZ(t),this.applyMatrix4(cn),this}translate(t,e,i){return cn.makeTranslation(t,e,i),this.applyMatrix4(cn),this}scale(t,e,i){return cn.makeScale(t,e,i),this.applyMatrix4(cn),this}lookAt(t){return dc.lookAt(t),dc.updateMatrix(),this.applyMatrix4(dc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ms).negate(),this.translate(ms.x,ms.y,ms.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let i=[];for(let s=0,r=t.length;s<r;s++){let a=t[s];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new be(i,3))}else{let i=Math.min(t.length,e.count);for(let s=0;s<i;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&Ft("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new yi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Bt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new V(-1/0,-1/0,-1/0),new V(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,s=e.length;i<s;i++){let r=e[i];tn.setFromBufferAttribute(r),this.morphTargetsRelative?(Ae.addVectors(this.boundingBox.min,tn.min),this.boundingBox.expandByPoint(Ae),Ae.addVectors(this.boundingBox.max,tn.max),this.boundingBox.expandByPoint(Ae)):(this.boundingBox.expandByPoint(tn.min),this.boundingBox.expandByPoint(tn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Bt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new vi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Bt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new V,1/0);return}if(t){let i=this.boundingSphere.center;if(tn.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){let o=e[r];Zs.setFromBufferAttribute(o),this.morphTargetsRelative?(Ae.addVectors(tn.min,Zs.min),tn.expandByPoint(Ae),Ae.addVectors(tn.max,Zs.max),tn.expandByPoint(Ae)):(tn.expandByPoint(Zs.min),tn.expandByPoint(Zs.max))}tn.getCenter(i);let s=0;for(let r=0,a=t.count;r<a;r++)Ae.fromBufferAttribute(t,r),s=Math.max(s,i.distanceToSquared(Ae));if(e)for(let r=0,a=e.length;r<a;r++){let o=e[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Ae.fromBufferAttribute(o,c),l&&(ms.fromBufferAttribute(t,c),Ae.add(ms)),s=Math.max(s,i.distanceToSquared(Ae))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Bt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){Bt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=e.position,s=e.normal,r=e.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==i.count)&&(a=new qe(new Float32Array(4*i.count),4),this.setAttribute("tangent",a));let o=[],l=[];for(let y=0;y<i.count;y++)o[y]=new V,l[y]=new V;let c=new V,h=new V,d=new V,u=new Ot,p=new Ot,g=new Ot,_=new V,m=new V;function f(y,E,I){c.fromBufferAttribute(i,y),h.fromBufferAttribute(i,E),d.fromBufferAttribute(i,I),u.fromBufferAttribute(r,y),p.fromBufferAttribute(r,E),g.fromBufferAttribute(r,I),h.sub(c),d.sub(c),p.sub(u),g.sub(u);let P=1/(p.x*g.y-g.x*p.y);isFinite(P)&&(_.copy(h).multiplyScalar(g.y).addScaledVector(d,-p.y).multiplyScalar(P),m.copy(d).multiplyScalar(p.x).addScaledVector(h,-g.x).multiplyScalar(P),o[y].add(_),o[E].add(_),o[I].add(_),l[y].add(m),l[E].add(m),l[I].add(m))}let b=this.groups;b.length===0&&(b=[{start:0,count:t.count}]);for(let y=0,E=b.length;y<E;++y){let I=b[y],P=I.start,N=I.count;for(let H=P,R=P+N;H<R;H+=3)f(t.getX(H+0),t.getX(H+1),t.getX(H+2))}let T=new V,x=new V,M=new V,S=new V;function w(y){M.fromBufferAttribute(s,y),S.copy(M);let E=o[y];T.copy(E),T.sub(M.multiplyScalar(M.dot(E))).normalize(),x.crossVectors(S,E);let P=x.dot(l[y])<0?-1:1;a.setXYZW(y,T.x,T.y,T.z,P)}for(let y=0,E=b.length;y<E;++y){let I=b[y],P=I.start,N=I.count;for(let H=P,R=P+N;H<R;H+=3)w(t.getX(H+0)),w(t.getX(H+1)),w(t.getX(H+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==e.count)i=new qe(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let u=0,p=i.count;u<p;u++)i.setXYZ(u,0,0,0);let s=new V,r=new V,a=new V,o=new V,l=new V,c=new V,h=new V,d=new V;if(t)for(let u=0,p=t.count;u<p;u+=3){let g=t.getX(u+0),_=t.getX(u+1),m=t.getX(u+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,_),a.fromBufferAttribute(e,m),h.subVectors(a,r),d.subVectors(s,r),h.cross(d),o.fromBufferAttribute(i,g),l.fromBufferAttribute(i,_),c.fromBufferAttribute(i,m),o.add(h),l.add(h),c.add(h),i.setXYZ(g,o.x,o.y,o.z),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let u=0,p=e.count;u<p;u+=3)s.fromBufferAttribute(e,u+0),r.fromBufferAttribute(e,u+1),a.fromBufferAttribute(e,u+2),h.subVectors(a,r),d.subVectors(s,r),h.cross(d),i.setXYZ(u+0,h.x,h.y,h.z),i.setXYZ(u+1,h.x,h.y,h.z),i.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)Ae.fromBufferAttribute(t,e),Ae.normalize(),t.setXYZ(e,Ae.x,Ae.y,Ae.z)}toNonIndexed(){function t(o,l){let c=o.array,h=o.itemSize,d=o.normalized,u=new c.constructor(l.length*h),p=0,g=0;for(let _=0,m=l.length;_<m;_++){o.isInterleavedBufferAttribute?p=l[_]*o.data.stride+o.offset:p=l[_]*h;for(let f=0;f<h;f++)u[g++]=c[p++]}return new qe(u,h,d)}if(this.index===null)return Ft("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new n,i=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=t(l,i);e.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let h=0,d=c.length;h<d;h++){let u=c[h],p=t(u,i);l.push(p)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let i=this.attributes;for(let l in i){let c=i[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let d=0,u=c.length;d<u;d++){let p=c[d];h.push(p.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let i=t.index;i!==null&&this.setIndex(i.clone());let s=t.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],d=r[c];for(let u=0,p=d.length;u<p;u++)h.push(d[u].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let c=0,h=a.length;c<h;c++){let d=a[c];this.addGroup(d.start,d.count,d.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ka=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Ya,this.updateRanges=[],this.version=0,this.uuid=Kn()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,i){t*=this.stride,i*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[i+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Kn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(e,this.stride);return i.setUsage(this.usage),i}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Kn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},ke=new V,ur=class n{constructor(t,e,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,i=this.data.count;e<i;e++)ke.fromBufferAttribute(this,e),ke.applyMatrix4(t),this.setXYZ(e,ke.x,ke.y,ke.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)ke.fromBufferAttribute(this,e),ke.applyNormalMatrix(t),this.setXYZ(e,ke.x,ke.y,ke.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)ke.fromBufferAttribute(this,e),ke.transformDirection(t),this.setXYZ(e,ke.x,ke.y,ke.z);return this}getComponent(t,e){let i=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(i=vn(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=ie(i,this.array)),this.data.array[t*this.data.stride+this.offset+e]=i,this}setX(t,e){return this.normalized&&(e=ie(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=ie(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=ie(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=ie(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=vn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=vn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=vn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=vn(e,this.array)),e}setXY(t,e,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=ie(e,this.array),i=ie(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this}setXYZ(t,e,i,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=ie(e,this.array),i=ie(i,this.array),s=ie(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=ie(e,this.array),i=ie(i,this.array),s=ie(s,this.array),r=ie(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){ar("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new qe(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new n(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){ar("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},t0=0,Bn=class extends Mn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:t0++}),this.uuid=Kn(),this.name="",this.type="Material",this.blending=Wi,this.side=Qn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ua,this.blendDst=Fa,this.blendEquation=_i,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Jt(0,0,0),this.blendAlpha=0,this.depthFunc=Xi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ec,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Vi,this.stencilZFail=Vi,this.stencilZPass=Vi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let i=t[e];if(i===void 0){Ft(`Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){Ft(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector2&&i&&i.isVector2||s&&s.isEuler&&i&&i.isEuler||s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Wi&&(i.blending=this.blending),this.side!==Qn&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Ua&&(i.blendSrc=this.blendSrc),this.blendDst!==Fa&&(i.blendDst=this.blendDst),this.blendEquation!==_i&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Xi&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ec&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Vi&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Vi&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Vi&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(e){let r=s(t.textures),a=s(t.images);r.length>0&&(i.textures=r),a.length>0&&(i.images=a)}return i}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new Jt().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let i=t.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new Ot().fromArray(i)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Ot().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,i=null;if(e!==null){let s=e.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=e[r].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},qi=class extends Bn{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Jt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},gs,$s=new V,_s=new V,xs=new V,ys=new Ot,Js=new Ot,Pf=new fe,pa=new V,Ks=new V,ma=new V,Pu=new Ot,pc=new Ot,Du=new Ot,Cs=class extends Ge{constructor(t=new qi){if(super(),this.isSprite=!0,this.type="Sprite",gs===void 0){gs=new De;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new Ka(e,5);gs.setIndex([0,1,2,0,2,3]),gs.setAttribute("position",new ur(i,3,0,!1)),gs.setAttribute("uv",new ur(i,2,3,!1))}this.geometry=gs,this.material=t,this.center=new Ot(.5,.5),this.count=1}raycast(t,e){t.camera===null&&Bt('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),_s.setFromMatrixScale(this.matrixWorld),Pf.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),xs.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&_s.multiplyScalar(-xs.z);let i=this.material.rotation,s,r;i!==0&&(r=Math.cos(i),s=Math.sin(i));let a=this.center;ga(pa.set(-.5,-.5,0),xs,a,_s,s,r),ga(Ks.set(.5,-.5,0),xs,a,_s,s,r),ga(ma.set(.5,.5,0),xs,a,_s,s,r),Pu.set(0,0),pc.set(1,0),Du.set(1,1);let o=t.ray.intersectTriangle(pa,Ks,ma,!1,$s);if(o===null&&(ga(Ks.set(-.5,.5,0),xs,a,_s,s,r),pc.set(0,1),o=t.ray.intersectTriangle(pa,ma,Ks,!1,$s),o===null))return;let l=t.ray.origin.distanceTo($s);l<t.near||l>t.far||e.push({distance:l,point:$s.clone(),uv:Jn.getInterpolation($s,pa,Ks,ma,Pu,pc,Du,new Ot),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}};function ga(n,t,e,i,s,r){ys.subVectors(n,e).addScalar(.5).multiply(i),s!==void 0?(Js.x=r*ys.x-s*ys.y,Js.y=s*ys.x+r*ys.y):Js.copy(ys),n.copy(t),n.x+=Js.x,n.y+=Js.y,n.applyMatrix4(Pf)}var $n=new V,mc=new V,_a=new V,mi=new V,gc=new V,xa=new V,_c=new V,ti=class{constructor(t=new V,e=new V(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,$n)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=$n.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):($n.copy(this.origin).addScaledVector(this.direction,e),$n.distanceToSquared(t))}distanceSqToSegment(t,e,i,s){mc.copy(t).add(e).multiplyScalar(.5),_a.copy(e).sub(t).normalize(),mi.copy(this.origin).sub(mc);let r=t.distanceTo(e)*.5,a=-this.direction.dot(_a),o=mi.dot(this.direction),l=-mi.dot(_a),c=mi.lengthSq(),h=Math.abs(1-a*a),d,u,p,g;if(h>0)if(d=a*l-o,u=a*o-l,g=r*h,d>=0)if(u>=-g)if(u<=g){let _=1/h;d*=_,u*=_,p=d*(d+a*u+2*o)+u*(a*d+u+2*l)+c}else u=r,d=Math.max(0,-(a*u+o)),p=-d*d+u*(u+2*l)+c;else u=-r,d=Math.max(0,-(a*u+o)),p=-d*d+u*(u+2*l)+c;else u<=-g?(d=Math.max(0,-(-a*r+o)),u=d>0?-r:Math.min(Math.max(-r,-l),r),p=-d*d+u*(u+2*l)+c):u<=g?(d=0,u=Math.min(Math.max(-r,-l),r),p=u*(u+2*l)+c):(d=Math.max(0,-(a*r+o)),u=d>0?r:Math.min(Math.max(-r,-l),r),p=-d*d+u*(u+2*l)+c);else u=a>0?-r:r,d=Math.max(0,-(a*u+o)),p=-d*d+u*(u+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(mc).addScaledVector(_a,u),p}intersectSphere(t,e){$n.subVectors(t.center,this.origin);let i=$n.dot(this.direction),s=$n.dot($n)-i*i,r=t.radius*t.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){let i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,s,r,a,o,l,c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return c>=0?(i=(t.min.x-u.x)*c,s=(t.max.x-u.x)*c):(i=(t.max.x-u.x)*c,s=(t.min.x-u.x)*c),h>=0?(r=(t.min.y-u.y)*h,a=(t.max.y-u.y)*h):(r=(t.max.y-u.y)*h,a=(t.min.y-u.y)*h),i>a||r>s||((r>i||isNaN(i))&&(i=r),(a<s||isNaN(s))&&(s=a),d>=0?(o=(t.min.z-u.z)*d,l=(t.max.z-u.z)*d):(o=(t.max.z-u.z)*d,l=(t.min.z-u.z)*d),i>l||o>s)||((o>i||i!==i)&&(i=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,e)}intersectsBox(t){return this.intersectBox(t,$n)!==null}intersectTriangle(t,e,i,s,r){gc.subVectors(e,t),xa.subVectors(i,t),_c.crossVectors(gc,xa);let a=this.direction.dot(_c),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;mi.subVectors(this.origin,t);let l=o*this.direction.dot(xa.crossVectors(mi,xa));if(l<0)return null;let c=o*this.direction.dot(gc.cross(mi));if(c<0||l+c>a)return null;let h=-o*mi.dot(_c);return h<0?null:this.at(h/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Yi=class extends Bn{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Jt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new xi,this.combine=Lc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},Lu=new fe,zi=new ti,ya=new vi,Nu=new V,va=new V,ba=new V,Ma=new V,xc=new V,Sa=new V,Uu=new V,wa=new V,Ye=class extends Ge{constructor(t=new De,e=new Yi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,a=i.morphTargetsRelative;e.fromBufferAttribute(s,t);let o=this.morphTargetInfluences;if(r&&o){Sa.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=o[l],d=r[l];h!==0&&(xc.fromBufferAttribute(d,t),a?Sa.addScaledVector(xc,h):Sa.addScaledVector(xc.sub(e),h))}e.add(Sa)}return e}raycast(t,e){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),ya.copy(i.boundingSphere),ya.applyMatrix4(r),zi.copy(t.ray).recast(t.near),!(ya.containsPoint(zi.origin)===!1&&(zi.intersectSphere(ya,Nu)===null||zi.origin.distanceToSquared(Nu)>(t.far-t.near)**2))&&(Lu.copy(r).invert(),zi.copy(t.ray).applyMatrix4(Lu),!(i.boundingBox!==null&&zi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,zi)))}_computeIntersections(t,e,i){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,u=r.groups,p=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,_=u.length;g<_;g++){let m=u[g],f=a[m.materialIndex],b=Math.max(m.start,p.start),T=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let x=b,M=T;x<M;x+=3){let S=o.getX(x),w=o.getX(x+1),y=o.getX(x+2);s=Ea(this,f,t,i,c,h,d,S,w,y),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,p.start),_=Math.min(o.count,p.start+p.count);for(let m=g,f=_;m<f;m+=3){let b=o.getX(m),T=o.getX(m+1),x=o.getX(m+2);s=Ea(this,a,t,i,c,h,d,b,T,x),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,_=u.length;g<_;g++){let m=u[g],f=a[m.materialIndex],b=Math.max(m.start,p.start),T=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let x=b,M=T;x<M;x+=3){let S=x,w=x+1,y=x+2;s=Ea(this,f,t,i,c,h,d,S,w,y),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,p.start),_=Math.min(l.count,p.start+p.count);for(let m=g,f=_;m<f;m+=3){let b=m,T=m+1,x=m+2;s=Ea(this,a,t,i,c,h,d,b,T,x),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}};function e0(n,t,e,i,s,r,a,o){let l;if(t.side===He?l=i.intersectTriangle(a,r,s,!0,o):l=i.intersectTriangle(s,r,a,t.side===Qn,o),l===null)return null;wa.copy(o),wa.applyMatrix4(n.matrixWorld);let c=e.ray.origin.distanceTo(wa);return c<e.near||c>e.far?null:{distance:c,point:wa.clone(),object:n}}function Ea(n,t,e,i,s,r,a,o,l,c){n.getVertexPosition(o,va),n.getVertexPosition(l,ba),n.getVertexPosition(c,Ma);let h=e0(n,t,e,i,va,ba,Ma,Uu);if(h){let d=new V;Jn.getBarycoord(Uu,va,ba,Ma,d),s&&(h.uv=Jn.getInterpolatedAttribute(s,o,l,c,d,new Ot)),r&&(h.uv1=Jn.getInterpolatedAttribute(r,o,l,c,d,new Ot)),a&&(h.normal=Jn.getInterpolatedAttribute(a,o,l,c,d,new V),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let u={a:o,b:l,c,normal:new V,materialIndex:0};Jn.getNormal(va,ba,Ma,u.normal),h.face=u,h.barycoord=d}return h}var ja=class extends Ve{constructor(t=null,e=1,i=1,s,r,a,o,l,c=Ce,h=Ce,d,u){super(null,a,o,l,c,h,s,r,d,u),this.isDataTexture=!0,this.image={data:t,width:e,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var yc=new V,n0=new V,i0=new Gt,hn=class{constructor(t=new V(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,s){return this.normal.set(t,e,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){let s=yc.subVectors(i,e).cross(n0.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,i=!0){let s=t.delta(yc),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let a=-(t.start.dot(this.normal)+this.constant)/r;return i===!0&&(a<0||a>1)?null:e.copy(t.start).addScaledVector(s,a)}intersectsLine(t){let e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let i=e||i0.getNormalMatrix(t),s=this.coplanarPoint(yc).applyMatrix4(t),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},ki=new vi,s0=new Ot(.5,.5),Ta=new V,fr=class{constructor(t=new hn,e=new hn,i=new hn,s=new hn,r=new hn,a=new hn){this.planes=[t,e,i,s,r,a]}set(t,e,i,s,r,a){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(i),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){let e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=bn,i=!1){let s=this.planes,r=t.elements,a=r[0],o=r[1],l=r[2],c=r[3],h=r[4],d=r[5],u=r[6],p=r[7],g=r[8],_=r[9],m=r[10],f=r[11],b=r[12],T=r[13],x=r[14],M=r[15];if(s[0].setComponents(c-a,p-h,f-g,M-b).normalize(),s[1].setComponents(c+a,p+h,f+g,M+b).normalize(),s[2].setComponents(c+o,p+d,f+_,M+T).normalize(),s[3].setComponents(c-o,p-d,f-_,M-T).normalize(),i)s[4].setComponents(l,u,m,x).normalize(),s[5].setComponents(c-l,p-u,f-m,M-x).normalize();else if(s[4].setComponents(c-l,p-u,f-m,M-x).normalize(),e===bn)s[5].setComponents(c+l,p+u,f+m,M+x).normalize();else if(e===sr)s[5].setComponents(l,u,m,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),ki.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),ki.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(ki)}intersectsSprite(t){ki.center.set(0,0,0);let e=s0.distanceTo(t.center);return ki.radius=.7071067811865476+e,ki.applyMatrix4(t.matrixWorld),this.intersectsSphere(ki)}intersectsSphere(t){let e=this.planes,i=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let i=0;i<6;i++){let s=e[i];if(Ta.x=s.normal.x>0?t.max.x:t.min.x,Ta.y=s.normal.y>0?t.max.y:t.min.y,Ta.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Ta)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Rs=class extends Bn{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Jt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},Qa=new V,to=new V,Fu=new fe,js=new ti,Aa=new vi,vc=new V,Ou=new V,eo=class extends Ge{constructor(t=new De,e=new Rs){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,i=[0];for(let s=1,r=e.count;s<r;s++)Qa.fromBufferAttribute(e,s-1),to.fromBufferAttribute(e,s),i[s]=i[s-1],i[s]+=Qa.distanceTo(to);t.setAttribute("lineDistance",new be(i,1))}else Ft("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){let i=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Aa.copy(i.boundingSphere),Aa.applyMatrix4(s),Aa.radius+=r,t.ray.intersectsSphere(Aa)===!1)return;Fu.copy(s).invert(),js.copy(t.ray).applyMatrix4(Fu);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=i.index,u=i.attributes.position;if(h!==null){let p=Math.max(0,a.start),g=Math.min(h.count,a.start+a.count);for(let _=p,m=g-1;_<m;_+=c){let f=h.getX(_),b=h.getX(_+1),T=Ca(this,t,js,l,f,b,_);T&&e.push(T)}if(this.isLineLoop){let _=h.getX(g-1),m=h.getX(p),f=Ca(this,t,js,l,_,m,g-1);f&&e.push(f)}}else{let p=Math.max(0,a.start),g=Math.min(u.count,a.start+a.count);for(let _=p,m=g-1;_<m;_+=c){let f=Ca(this,t,js,l,_,_+1,_);f&&e.push(f)}if(this.isLineLoop){let _=Ca(this,t,js,l,g-1,p,g-1);_&&e.push(_)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function Ca(n,t,e,i,s,r,a){let o=n.geometry.attributes.position;if(Qa.fromBufferAttribute(o,s),to.fromBufferAttribute(o,r),e.distanceSqToSegment(Qa,to,vc,Ou)>i)return;vc.applyMatrix4(n.matrixWorld);let c=t.ray.origin.distanceTo(vc);if(!(c<t.near||c>t.far))return{distance:c,point:Ou.clone().applyMatrix4(n.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:n}}var Bu=new V,zu=new V,dr=class extends eo{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,i=[];for(let s=0,r=e.count;s<r;s+=2)Bu.fromBufferAttribute(e,s),zu.fromBufferAttribute(e,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+Bu.distanceTo(zu);t.setAttribute("lineDistance",new be(i,1))}else Ft("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var Is=class extends Bn{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Jt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},ku=new fe,Tc=new ti,Ra=new vi,Ia=new V,pr=class extends Ge{constructor(t=new De,e=new Is){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){let i=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Ra.copy(i.boundingSphere),Ra.applyMatrix4(s),Ra.radius+=r,t.ray.intersectsSphere(Ra)===!1)return;ku.copy(s).invert(),Tc.copy(t.ray).applyMatrix4(ku);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=i.index,d=i.attributes.position;if(c!==null){let u=Math.max(0,a.start),p=Math.min(c.count,a.start+a.count);for(let g=u,_=p;g<_;g++){let m=c.getX(g);Ia.fromBufferAttribute(d,m),Vu(Ia,m,l,s,t,e,this)}}else{let u=Math.max(0,a.start),p=Math.min(d.count,a.start+a.count);for(let g=u,_=p;g<_;g++)Ia.fromBufferAttribute(d,g),Vu(Ia,g,l,s,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function Vu(n,t,e,i,s,r,a){let o=Tc.distanceSqToPoint(n);if(o<e){let l=new V;Tc.closestPointToPoint(n,l),l.applyMatrix4(i);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}var mr=class extends Ve{constructor(t=[],e=Ti,i,s,r,a,o,l,c,h){super(t,e,i,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Zi=class extends Ve{constructor(t,e,i,s,r,a,o,l,c){super(t,e,i,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var ei=class extends Ve{constructor(t,e,i=wn,s,r,a,o=Ce,l=Ce,c,h=On,d=1){if(h!==On&&h!==Ci)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let u={width:t,height:e,depth:d};super(u,s,r,a,o,l,h,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Es(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},no=class extends ei{constructor(t,e=wn,i=Ti,s,r,a=Ce,o=Ce,l,c=On){let h={width:t,height:t,depth:1},d=[h,h,h,h,h,h];super(t,t,e,i,s,r,a,o,l,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},gr=class extends Ve{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},Ps=class n extends De{constructor(t=1,e=1,i=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],h=[],d=[],u=0,p=0;g("z","y","x",-1,-1,i,e,t,a,r,0),g("z","y","x",1,-1,i,e,-t,a,r,1),g("x","z","y",1,1,t,i,e,s,a,2),g("x","z","y",1,-1,t,i,-e,s,a,3),g("x","y","z",1,-1,t,e,i,s,r,4),g("x","y","z",-1,-1,t,e,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new be(c,3)),this.setAttribute("normal",new be(h,3)),this.setAttribute("uv",new be(d,2));function g(_,m,f,b,T,x,M,S,w,y,E){let I=x/w,P=M/y,N=x/2,H=M/2,R=S/2,L=w+1,U=y+1,D=0,F=0,W=new V;for(let $=0;$<U;$++){let et=$*P-H;for(let G=0;G<L;G++){let ot=G*I-N;W[_]=ot*b,W[m]=et*T,W[f]=R,c.push(W.x,W.y,W.z),W[_]=0,W[m]=0,W[f]=S>0?1:-1,h.push(W.x,W.y,W.z),d.push(G/w),d.push(1-$/y),D+=1}}for(let $=0;$<y;$++)for(let et=0;et<w;et++){let G=u+et+L*$,ot=u+et+L*($+1),ft=u+(et+1)+L*($+1),yt=u+(et+1)+L*$;l.push(G,ot,yt),l.push(ot,ft,yt),F+=6}o.addGroup(p,F,E),p+=F,u+=D}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};var _r=class n extends De{constructor(t=1,e=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:s};let r=t/2,a=e/2,o=Math.floor(i),l=Math.floor(s),c=o+1,h=l+1,d=t/o,u=e/l,p=[],g=[],_=[],m=[];for(let f=0;f<h;f++){let b=f*u-a;for(let T=0;T<c;T++){let x=T*d-r;g.push(x,-b,0),_.push(0,0,1),m.push(T/o),m.push(1-f/l)}}for(let f=0;f<l;f++)for(let b=0;b<o;b++){let T=b+c*f,x=b+c*(f+1),M=b+1+c*(f+1),S=b+1+c*f;p.push(T,x,S),p.push(x,M,S)}this.setIndex(p),this.setAttribute("position",new be(g,3)),this.setAttribute("normal",new be(_,3)),this.setAttribute("uv",new be(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.width,t.height,t.widthSegments,t.heightSegments)}};var xr=class n extends De{constructor(t=1,e=32,i=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));let l=Math.min(a+o,Math.PI),c=0,h=[],d=new V,u=new V,p=[],g=[],_=[],m=[];for(let f=0;f<=i;f++){let b=[],T=f/i,x=a+T*o,M=t*Math.cos(x),S=Math.sqrt(t*t-M*M),w=0;f===0&&a===0?w=.5/e:f===i&&l===Math.PI&&(w=-.5/e);for(let y=0;y<=e;y++){let E=y/e,I=s+E*r;d.x=-S*Math.cos(I),d.y=M,d.z=S*Math.sin(I),g.push(d.x,d.y,d.z),u.copy(d).normalize(),_.push(u.x,u.y,u.z),m.push(E+w,1-T),b.push(c++)}h.push(b)}for(let f=0;f<i;f++)for(let b=0;b<e;b++){let T=h[f][b+1],x=h[f][b],M=h[f+1][b],S=h[f+1][b+1];(f!==0||a>0)&&p.push(T,x,S),(f!==i-1||l<Math.PI)&&p.push(x,M,S)}this.setIndex(p),this.setAttribute("position",new be(g,3)),this.setAttribute("normal",new be(_,3)),this.setAttribute("uv",new be(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};function Ji(n){let t={};for(let e in n){t[e]={};for(let i in n[e]){let s=n[e][i];if(Gu(s))s.isRenderTargetTexture?(Ft("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=s.clone();else if(Array.isArray(s))if(Gu(s[0])){let r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();t[e][i]=r}else t[e][i]=s.slice();else t[e][i]=s}}return t}function ze(n){let t={};for(let e=0;e<n.length;e++){let i=Ji(n[e]);for(let s in i)t[s]=i[s]}return t}function Gu(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function r0(n){let t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function Qc(n){let t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:$t.workingColorSpace}var Df={clone:Ji,merge:ze},a0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,o0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,rn=class extends Bn{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=a0,this.fragmentShader=o0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ji(t.uniforms),this.uniformsGroups=r0(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let i in t.uniforms){let s=t.uniforms[i];switch(this.uniforms[i]={},s.type){case"t":this.uniforms[i].value=e[s.value]||null;break;case"c":this.uniforms[i].value=new Jt().setHex(s.value);break;case"v2":this.uniforms[i].value=new Ot().fromArray(s.value);break;case"v3":this.uniforms[i].value=new V().fromArray(s.value);break;case"v4":this.uniforms[i].value=new de().fromArray(s.value);break;case"m3":this.uniforms[i].value=new Gt().fromArray(s.value);break;case"m4":this.uniforms[i].value=new fe().fromArray(s.value);break;default:this.uniforms[i].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let i in t.extensions)this.extensions[i]=t.extensions[i];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},io=class extends rn{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}};var so=class extends Bn{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=xf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},ro=class extends Bn{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function Pa(n,t){return!n||n.constructor===t?n:typeof t.BYTES_PER_ELEMENT=="number"?new t(n):Array.prototype.slice.call(n)}var bi=class{constructor(t,e,i,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(i),this.sampleValues=e,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,i=this._cachedIndex,s=e[i],r=e[i-1];n:{t:{let a;e:{i:if(!(t<s)){for(let o=i+2;;){if(s===void 0){if(t<r)break i;return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===o)break;if(r=s,s=e[++i],t<s)break t}a=e.length;break e}if(!(t>=r)){let o=e[1];t<o&&(i=2,r=o);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=r,r=e[--i-1],t>=r)break t}a=i,i=0;break e}break n}for(;i<a;){let o=i+a>>>1;t<e[o]?a=o:i=o+1}if(s=e[i],r=e[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=t*s;for(let a=0;a!==s;++a)e[a]=i[r+a];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},ao=class extends bi{constructor(t,e,i,s){super(t,e,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Mc,endingEnd:Mc}}intervalChanged_(t,e,i){let s=this.parameterPositions,r=t-2,a=t+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case Sc:r=t,o=2*e-i;break;case wc:r=s.length-2,o=e+s[r]-s[r+1];break;default:r=t,o=i}if(l===void 0)switch(this.getSettings_().endingEnd){case Sc:a=t,l=2*i-e;break;case wc:a=1,l=i+s[1]-s[0];break;default:a=t-1,l=e}let c=(i-e)*.5,h=this.valueSize;this._weightPrev=c/(e-o),this._weightNext=c/(l-i),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(t,e,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=this._offsetPrev,d=this._offsetNext,u=this._weightPrev,p=this._weightNext,g=(i-e)/(s-e),_=g*g,m=_*g,f=-u*m+2*u*_-u*g,b=(1+u)*m+(-1.5-2*u)*_+(-.5+u)*g+1,T=(-1-p)*m+(1.5+p)*_+.5*g,x=p*m-p*_;for(let M=0;M!==o;++M)r[M]=f*a[h+M]+b*a[c+M]+T*a[l+M]+x*a[d+M];return r}},oo=class extends bi{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t,e,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=(i-e)/(s-e),d=1-h;for(let u=0;u!==o;++u)r[u]=a[c+u]*d+a[l+u]*h;return r}},lo=class extends bi{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t){return this.copySampleValue_(t-1)}},co=class extends bi{interpolate_(t,e,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=this.inTangents,d=this.outTangents;if(!h||!d){let g=(i-e)/(s-e),_=1-g;for(let m=0;m!==o;++m)r[m]=a[c+m]*_+a[l+m]*g;return r}let u=o*2,p=t-1;for(let g=0;g!==o;++g){let _=a[c+g],m=a[l+g],f=p*u+g*2,b=d[f],T=d[f+1],x=t*u+g*2,M=h[x],S=h[x+1],w=(i-e)/(s-e),y,E,I,P,N;for(let H=0;H<8;H++){y=w*w,E=y*w,I=1-w,P=I*I,N=P*I;let L=N*e+3*P*w*b+3*I*y*M+E*s-i;if(Math.abs(L)<1e-10)break;let U=3*P*(b-e)+6*I*w*(M-b)+3*y*(s-M);if(Math.abs(U)<1e-10)break;w=w-L/U,w=Math.max(0,Math.min(1,w))}r[g]=N*_+3*P*w*T+3*I*y*S+E*m}return r}},an=class{constructor(t,e,i,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Pa(e,this.TimeBufferType),this.values=Pa(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,i;if(e.toJSON!==this.toJSON)i=e.toJSON(t);else{i={name:t.name,times:Pa(t.times,Array),values:Pa(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(i.interpolation=s)}return i.type=t.ValueTypeName,i}InterpolantFactoryMethodDiscrete(t){return new lo(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new oo(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new ao(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new co(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case er:e=this.InterpolantFactoryMethodDiscrete;break;case qa:e=this.InterpolantFactoryMethodLinear;break;case Na:e=this.InterpolantFactoryMethodSmooth;break;case bc:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return Ft("KeyframeTrack:",i),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return er;case this.InterpolantFactoryMethodLinear:return qa;case this.InterpolantFactoryMethodSmooth:return Na;case this.InterpolantFactoryMethodBezier:return bc}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let i=0,s=e.length;i!==s;++i)e[i]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let i=0,s=e.length;i!==s;++i)e[i]*=t}return this}trim(t,e){let i=this.times,s=i.length,r=0,a=s-1;for(;r!==s&&i[r]<t;)++r;for(;a!==-1&&i[a]>e;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=i.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(Bt("KeyframeTrack: Invalid value size in track.",this),t=!1);let i=this.times,s=this.values,r=i.length;r===0&&(Bt("KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==r;o++){let l=i[o];if(typeof l=="number"&&isNaN(l)){Bt("KeyframeTrack: Time is not a valid number.",this,o,l),t=!1;break}if(a!==null&&a>l){Bt("KeyframeTrack: Out of order keys.",this,o,l,a),t=!1;break}a=l}if(s!==void 0&&wg(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){Bt("KeyframeTrack: Value is not a valid number.",this,o,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===Na,r=t.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=t[o],h=t[o+1];if(c!==h&&(o!==1||c!==t[0]))if(s)l=!0;else{let d=o*i,u=d-i,p=d+i;for(let g=0;g!==i;++g){let _=e[d+g];if(_!==e[u+g]||_!==e[p+g]){l=!0;break}}}if(l){if(o!==a){t[a]=t[o];let d=o*i,u=a*i;for(let p=0;p!==i;++p)e[u+p]=e[d+p]}++a}}if(r>0){t[a]=t[r];for(let o=r*i,l=a*i,c=0;c!==i;++c)e[l+c]=e[o+c];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*i)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),i=this.constructor,s=new i(this.name,t,e);return s.createInterpolant=this.createInterpolant,s}};an.prototype.ValueTypeName="";an.prototype.TimeBufferType=Float32Array;an.prototype.ValueBufferType=Float32Array;an.prototype.DefaultInterpolation=qa;var Mi=class extends an{constructor(t,e,i){super(t,e,i)}};Mi.prototype.ValueTypeName="bool";Mi.prototype.ValueBufferType=Array;Mi.prototype.DefaultInterpolation=er;Mi.prototype.InterpolantFactoryMethodLinear=void 0;Mi.prototype.InterpolantFactoryMethodSmooth=void 0;var ho=class extends an{constructor(t,e,i,s){super(t,e,i,s)}};ho.prototype.ValueTypeName="color";var uo=class extends an{constructor(t,e,i,s){super(t,e,i,s)}};uo.prototype.ValueTypeName="number";var fo=class extends bi{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t,e,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(i-e)/(s-e),c=t*o;for(let h=c+o;c!==h;c+=4)nn.slerpFlat(r,0,a,c-o,a,c,l);return r}},yr=class extends an{constructor(t,e,i,s){super(t,e,i,s)}InterpolantFactoryMethodLinear(t){return new fo(this.times,this.values,this.getValueSize(),t)}};yr.prototype.ValueTypeName="quaternion";yr.prototype.InterpolantFactoryMethodSmooth=void 0;var Si=class extends an{constructor(t,e,i){super(t,e,i)}};Si.prototype.ValueTypeName="string";Si.prototype.ValueBufferType=Array;Si.prototype.DefaultInterpolation=er;Si.prototype.InterpolantFactoryMethodLinear=void 0;Si.prototype.InterpolantFactoryMethodSmooth=void 0;var po=class extends an{constructor(t,e,i,s){super(t,e,i,s)}};po.prototype.ValueTypeName="vector";var mo=class{constructor(t,e,i){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=i,this._abortController=null,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,d){return c.push(h,d),this},this.removeHandler=function(h){let d=c.indexOf(h);return d!==-1&&c.splice(d,2),this},this.getHandler=function(h){for(let d=0,u=c.length;d<u;d+=2){let p=c[d],g=c[d+1];if(p.global&&(p.lastIndex=0),p.test(h))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Lf=new mo,go=class{constructor(t){this.manager=t!==void 0?t:Lf,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let i=this;return new Promise(function(s,r){i.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};go.DEFAULT_MATERIAL_NAME="__DEFAULT";var Da=new V,La=new nn,Un=new V,vr=class extends Ge{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new fe,this.projectionMatrix=new fe,this.projectionMatrixInverse=new fe,this.coordinateSystem=bn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Da,La,Un),Un.x===1&&Un.y===1&&Un.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Da,La,Un.set(1,1,1)).invert()}updateWorldMatrix(t,e,i=!1){super.updateWorldMatrix(t,e,i),this.matrixWorld.decompose(Da,La,Un),Un.x===1&&Un.y===1&&Un.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Da,La,Un.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},gi=new V,Hu=new Ot,Wu=new Ot,Be=class extends vr{constructor(t=50,e=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=ws*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Qs*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return ws*2*Math.atan(Math.tan(Qs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){gi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(gi.x,gi.y).multiplyScalar(-t/gi.z),gi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(gi.x,gi.y).multiplyScalar(-t/gi.z)}getViewSize(t,e){return this.getViewBounds(t,Hu,Wu),e.subVectors(Wu,Hu)}setViewOffset(t,e,i,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Qs*.5*this.fov)/this.zoom,i=2*e,s=this.aspect*i,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,e-=a.offsetY*i/c,s*=a.width/l,i*=a.height/c}let o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-i,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var br=class extends vr{constructor(t=-1,e=1,i=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-t,a=i+t,o=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}};var vs=-90,bs=1,_o=class extends Ge{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Be(vs,bs,t,e);s.layers=this.layers,this.add(s);let r=new Be(vs,bs,t,e);r.layers=this.layers,this.add(r);let a=new Be(vs,bs,t,e);a.layers=this.layers,this.add(a);let o=new Be(vs,bs,t,e);o.layers=this.layers,this.add(o);let l=new Be(vs,bs,t,e);l.layers=this.layers,this.add(l);let c=new Be(vs,bs,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[i,s,r,a,o,l]=e;for(let c of e)this.remove(c);if(t===bn)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===sr)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,h]=this.children,d=t.getRenderTarget(),u=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let m=!1;t.isWebGLRenderer===!0?m=t.state.buffers.depth.getReversed():m=t.reversedDepthBuffer,t.setRenderTarget(i,0,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(i,1,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(i,2,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(i,3,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(i,4,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),i.texture.generateMipmaps=_,t.setRenderTarget(i,5,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(d,u,p),t.xr.enabled=g,i.texture.needsPMREMUpdate=!0}},xo=class extends Be{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}};var th="\\[\\]\\.:\\/",l0=new RegExp("["+th+"]","g"),eh="[^"+th+"]",c0="[^"+th.replace("\\.","")+"]",h0=/((?:WC+[\/:])*)/.source.replace("WC",eh),u0=/(WCOD+)?/.source.replace("WCOD",c0),f0=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",eh),d0=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",eh),p0=new RegExp("^"+h0+u0+f0+d0+"$"),m0=["material","materials","bones","map"],Ac=class{constructor(t,e,i){let s=i||ue.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(t,e)}setValue(t,e){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].unbind()}},ue=class n{constructor(t,e,i){this.path=e,this.parsedPath=i||n.parseTrackName(e),this.node=n.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,i){return t&&t.isAnimationObjectGroup?new n.Composite(t,e,i):new n(t,e,i)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(l0,"")}static parseTrackName(t){let e=p0.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let i={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);m0.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return i}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let i=t.skeleton.getBoneByName(e);if(i!==void 0)return i}if(t.children){let i=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===e||o.uuid===e)return o;let l=i(o.children);if(l)return l}return null},s=i(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)t[e++]=i[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,i=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=n.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){Ft("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=e.objectIndex;switch(i){case"materials":if(!t.material){Bt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){Bt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){Bt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){Bt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){Bt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[i]===void 0){Bt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[i]}if(c!==void 0){if(t[c]===void 0){Bt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let a=t[s];if(a===void 0){let c=e.nodeName;Bt("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?o=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){Bt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){Bt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};ue.Composite=Ac;ue.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ue.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ue.prototype.GetterByBindingType=[ue.prototype._getValue_direct,ue.prototype._getValue_array,ue.prototype._getValue_arrayElement,ue.prototype._getValue_toArray];ue.prototype.SetterByBindingTypeAndVersioning=[[ue.prototype._setValue_direct,ue.prototype._setValue_direct_setNeedsUpdate,ue.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ue.prototype._setValue_array,ue.prototype._setValue_array_setNeedsUpdate,ue.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ue.prototype._setValue_arrayElement,ue.prototype._setValue_arrayElement_setNeedsUpdate,ue.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ue.prototype._setValue_fromArray,ue.prototype._setValue_fromArray_setNeedsUpdate,ue.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var JS=new Float32Array(1);var Xu=new fe,Mr=class{constructor(t,e,i=0,s=1/0){this.ray=new ti(t,e),this.near=i,this.far=s,this.camera=null,this.layers=new Ts,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,e.projectionMatrix.elements[14]).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):Bt("Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Xu.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Xu),this}intersectObject(t,e=!0,i=[]){return Cc(t,this,i,e),i.sort(qu),i}intersectObjects(t,e=!0,i=[]){for(let s=0,r=t.length;s<r;s++)Cc(t[s],this,i,e);return i.sort(qu),i}};function qu(n,t){return n.distance-t.distance}function Cc(n,t,e,i){let s=!0;if(n.layers.test(t.layers)&&n.raycast(t,e)===!1&&(s=!1),s===!0&&i===!0){let r=n.children;for(let a=0,o=r.length;a<o;a++)Cc(r[a],t,e,!0)}}var Ds=class{constructor(t=1,e=0,i=0){this.radius=t,this.phi=e,this.theta=i}set(t,e,i){return this.radius=t,this.phi=e,this.theta=i,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Zt(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,i){return this.radius=Math.sqrt(t*t+e*e+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,i),this.phi=Math.acos(Zt(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};var oh=class oh{constructor(t,e,i,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,i,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let i=0;i<4;i++)this.elements[i]=t[i+e];return this}set(t,e,i,s){let r=this.elements;return r[0]=t,r[2]=e,r[1]=i,r[3]=s,this}};oh.prototype.isMatrix2=!0;var Rc=oh;var Sr=class extends Mn{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){if(t===void 0){Ft("Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}};function nh(n,t,e,i){let s=g0(i);switch(e){case qc:return n*t;case Zc:return n*t/s.components*s.byteLength;case Ao:return n*t/s.components*s.byteLength;case Ri:return n*t*2/s.components*s.byteLength;case Co:return n*t*2/s.components*s.byteLength;case Yc:return n*t*3/s.components*s.byteLength;case un:return n*t*4/s.components*s.byteLength;case Ro:return n*t*4/s.components*s.byteLength;case Cr:case Rr:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case Ir:case Pr:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Po:case Lo:return Math.max(n,16)*Math.max(t,8)/4;case Io:case Do:return Math.max(n,8)*Math.max(t,8)/2;case No:case Uo:case Oo:case Bo:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case Fo:case Dr:case zo:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case ko:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Vo:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case Go:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case Ho:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case Wo:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case Xo:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case qo:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case Yo:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case Zo:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case $o:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case Jo:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case Ko:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case jo:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case Qo:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case tl:case el:case nl:return Math.ceil(n/4)*Math.ceil(t/4)*16;case il:case sl:return Math.ceil(n/4)*Math.ceil(t/4)*8;case Lr:case rl:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function g0(n){switch(n){case on:case Gc:return{byteLength:1,components:1};case Ns:case Hc:case Vn:return{byteLength:2,components:1};case Eo:case To:return{byteLength:2,components:4};case wn:case wo:case En:return{byteLength:4,components:1};case Wc:case Xc:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:vo}}));typeof window!="undefined"&&(window.__THREE__?Ft("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=vo);function nd(){let n=null,t=!1,e=null,i=null;function s(r,a){e(r,a),i=n.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&n!==null&&(i=n.requestAnimationFrame(s),t=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){n=r}}}function _0(n){let t=new WeakMap;function e(o,l){let c=o.array,h=o.usage,d=c.byteLength,u=n.createBuffer();n.bindBuffer(l,u),n.bufferData(l,c,h),o.onUploadCallback();let p;if(c instanceof Float32Array)p=n.FLOAT;else if(typeof Float16Array!="undefined"&&c instanceof Float16Array)p=n.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?p=n.HALF_FLOAT:p=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=n.SHORT;else if(c instanceof Uint32Array)p=n.UNSIGNED_INT;else if(c instanceof Int32Array)p=n.INT;else if(c instanceof Int8Array)p=n.BYTE;else if(c instanceof Uint8Array)p=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:d}}function i(o,l,c){let h=l.array,d=l.updateRanges;if(n.bindBuffer(c,o),d.length===0)n.bufferSubData(c,0,h);else{d.sort((p,g)=>p.start-g.start);let u=0;for(let p=1;p<d.length;p++){let g=d[u],_=d[p];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++u,d[u]=_)}d.length=u+1;for(let p=0,g=d.length;p<g;p++){let _=d[p];n.bufferSubData(c,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=t.get(o);l&&(n.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var x0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,y0=`#ifdef USE_ALPHAHASH
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
#endif`,v0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,b0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,M0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,S0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,w0=`#ifdef USE_AOMAP
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
#endif`,E0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,T0=`#ifdef USE_BATCHING
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
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,A0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,C0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,R0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,I0=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,P0=`#ifdef USE_IRIDESCENCE
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
#endif`,D0=`#ifdef USE_BUMPMAP
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
#endif`,L0=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,N0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,U0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,F0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,O0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,B0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,z0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,k0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,V0=`#define PI 3.141592653589793
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
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
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
} // validated`,G0=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,H0=`vec3 transformedNormal = objectNormal;
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
#endif`,W0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,X0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,q0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Y0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Z0="gl_FragColor = linearToOutputTexel( gl_FragColor );",$0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,J0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,K0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,j0=`#ifdef USE_ENVMAP
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
#endif`,Q0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,t_=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,e_=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,n_=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,i_=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,s_=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,r_=`#ifdef USE_GRADIENTMAP
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
}`,a_=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,o_=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,l_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,c_=`uniform bool receiveShadow;
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
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
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
#endif
#include <lightprobes_pars_fragment>`,h_=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
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
#endif`,u_=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,f_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,d_=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,p_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,m_=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
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
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
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
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
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
#endif`,g_=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
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
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
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
		return 0.5 / max( gv + gl, EPSILON );
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
	vec3 f0 = material.specularColorBlended;
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
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
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
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
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
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
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
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
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
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,__=`
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
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
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
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,x_=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
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
#endif`,y_=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,v_=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,b_=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,M_=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,S_=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,w_=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,E_=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,T_=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,A_=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,C_=`#if defined( USE_POINTS_UV )
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
#endif`,R_=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,I_=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,P_=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,D_=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,L_=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,N_=`#ifdef USE_MORPHTARGETS
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
#endif`,U_=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,F_=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
	#ifdef DOUBLE_SIDED
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
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,O_=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,B_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,z_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,k_=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,V_=`#ifdef USE_NORMALMAP
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
#endif`,G_=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,H_=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,W_=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,X_=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,q_=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Y_=`vec3 packNormalToRGB( const in vec3 normal ) {
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
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,Z_=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,$_=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,J_=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,K_=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,j_=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Q_=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,tx=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
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
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
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
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
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
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,ex=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,nx=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
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
#endif`,ix=`float getShadowMask() {
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
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
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
}`,sx=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,rx=`#ifdef USE_SKINNING
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
#endif`,ax=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,ox=`#ifdef USE_SKINNING
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
#endif`,lx=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,cx=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,hx=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,ux=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,fx=`#ifdef USE_TRANSMISSION
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
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,dx=`#ifdef USE_TRANSMISSION
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
#endif`,px=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,mx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,gx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,_x=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,xx=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,yx=`uniform sampler2D t2D;
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
}`,vx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,bx=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Mx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Sx=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,wx=`#include <common>
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
}`,Ex=`#if DEPTH_PACKING == 3200
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
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Tx=`#define DISTANCE
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
}`,Ax=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,Cx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Rx=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ix=`uniform float scale;
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
}`,Px=`uniform vec3 diffuse;
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
}`,Dx=`#include <common>
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
}`,Lx=`uniform vec3 diffuse;
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
}`,Nx=`#define LAMBERT
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
}`,Ux=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
}`,Fx=`#define MATCAP
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
}`,Ox=`#define MATCAP
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
}`,Bx=`#define NORMAL
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
}`,zx=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
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
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,kx=`#define PHONG
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
}`,Vx=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
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
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
}`,Gx=`#define STANDARD
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
}`,Hx=`#define STANDARD
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
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
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
}`,Wx=`#define TOON
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
}`,Xx=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
}`,qx=`uniform float size;
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
}`,Yx=`uniform vec3 diffuse;
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
}`,Zx=`#include <common>
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
}`,$x=`uniform vec3 color;
uniform float opacity;
#include <common>
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
	#include <premultiplied_alpha_fragment>
}`,Jx=`uniform float rotation;
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
}`,Kx=`uniform vec3 diffuse;
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
}`,qt={alphahash_fragment:x0,alphahash_pars_fragment:y0,alphamap_fragment:v0,alphamap_pars_fragment:b0,alphatest_fragment:M0,alphatest_pars_fragment:S0,aomap_fragment:w0,aomap_pars_fragment:E0,batching_pars_vertex:T0,batching_vertex:A0,begin_vertex:C0,beginnormal_vertex:R0,bsdfs:I0,iridescence_fragment:P0,bumpmap_pars_fragment:D0,clipping_planes_fragment:L0,clipping_planes_pars_fragment:N0,clipping_planes_pars_vertex:U0,clipping_planes_vertex:F0,color_fragment:O0,color_pars_fragment:B0,color_pars_vertex:z0,color_vertex:k0,common:V0,cube_uv_reflection_fragment:G0,defaultnormal_vertex:H0,displacementmap_pars_vertex:W0,displacementmap_vertex:X0,emissivemap_fragment:q0,emissivemap_pars_fragment:Y0,colorspace_fragment:Z0,colorspace_pars_fragment:$0,envmap_fragment:J0,envmap_common_pars_fragment:K0,envmap_pars_fragment:j0,envmap_pars_vertex:Q0,envmap_physical_pars_fragment:h_,envmap_vertex:t_,fog_vertex:e_,fog_pars_vertex:n_,fog_fragment:i_,fog_pars_fragment:s_,gradientmap_pars_fragment:r_,lightmap_pars_fragment:a_,lights_lambert_fragment:o_,lights_lambert_pars_fragment:l_,lights_pars_begin:c_,lights_toon_fragment:u_,lights_toon_pars_fragment:f_,lights_phong_fragment:d_,lights_phong_pars_fragment:p_,lights_physical_fragment:m_,lights_physical_pars_fragment:g_,lights_fragment_begin:__,lights_fragment_maps:x_,lights_fragment_end:y_,lightprobes_pars_fragment:v_,logdepthbuf_fragment:b_,logdepthbuf_pars_fragment:M_,logdepthbuf_pars_vertex:S_,logdepthbuf_vertex:w_,map_fragment:E_,map_pars_fragment:T_,map_particle_fragment:A_,map_particle_pars_fragment:C_,metalnessmap_fragment:R_,metalnessmap_pars_fragment:I_,morphinstance_vertex:P_,morphcolor_vertex:D_,morphnormal_vertex:L_,morphtarget_pars_vertex:N_,morphtarget_vertex:U_,normal_fragment_begin:F_,normal_fragment_maps:O_,normal_pars_fragment:B_,normal_pars_vertex:z_,normal_vertex:k_,normalmap_pars_fragment:V_,clearcoat_normal_fragment_begin:G_,clearcoat_normal_fragment_maps:H_,clearcoat_pars_fragment:W_,iridescence_pars_fragment:X_,opaque_fragment:q_,packing:Y_,premultiplied_alpha_fragment:Z_,project_vertex:$_,dithering_fragment:J_,dithering_pars_fragment:K_,roughnessmap_fragment:j_,roughnessmap_pars_fragment:Q_,shadowmap_pars_fragment:tx,shadowmap_pars_vertex:ex,shadowmap_vertex:nx,shadowmask_pars_fragment:ix,skinbase_vertex:sx,skinning_pars_vertex:rx,skinning_vertex:ax,skinnormal_vertex:ox,specularmap_fragment:lx,specularmap_pars_fragment:cx,tonemapping_fragment:hx,tonemapping_pars_fragment:ux,transmission_fragment:fx,transmission_pars_fragment:dx,uv_pars_fragment:px,uv_pars_vertex:mx,uv_vertex:gx,worldpos_vertex:_x,background_vert:xx,background_frag:yx,backgroundCube_vert:vx,backgroundCube_frag:bx,cube_vert:Mx,cube_frag:Sx,depth_vert:wx,depth_frag:Ex,distance_vert:Tx,distance_frag:Ax,equirect_vert:Cx,equirect_frag:Rx,linedashed_vert:Ix,linedashed_frag:Px,meshbasic_vert:Dx,meshbasic_frag:Lx,meshlambert_vert:Nx,meshlambert_frag:Ux,meshmatcap_vert:Fx,meshmatcap_frag:Ox,meshnormal_vert:Bx,meshnormal_frag:zx,meshphong_vert:kx,meshphong_frag:Vx,meshphysical_vert:Gx,meshphysical_frag:Hx,meshtoon_vert:Wx,meshtoon_frag:Xx,points_vert:qx,points_frag:Yx,shadow_vert:Zx,shadow_frag:$x,sprite_vert:Jx,sprite_frag:Kx},_t={common:{diffuse:{value:new Jt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Gt},alphaMap:{value:null},alphaMapTransform:{value:new Gt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Gt}},envmap:{envMap:{value:null},envMapRotation:{value:new Gt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Gt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Gt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Gt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Gt},normalScale:{value:new Ot(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Gt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Gt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Gt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Gt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Jt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new V},probesMax:{value:new V},probesResolution:{value:new V}},points:{diffuse:{value:new Jt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Gt},alphaTest:{value:0},uvTransform:{value:new Gt}},sprite:{diffuse:{value:new Jt(16777215)},opacity:{value:1},center:{value:new Ot(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Gt},alphaMap:{value:null},alphaMapTransform:{value:new Gt},alphaTest:{value:0}}},Hn={basic:{uniforms:ze([_t.common,_t.specularmap,_t.envmap,_t.aomap,_t.lightmap,_t.fog]),vertexShader:qt.meshbasic_vert,fragmentShader:qt.meshbasic_frag},lambert:{uniforms:ze([_t.common,_t.specularmap,_t.envmap,_t.aomap,_t.lightmap,_t.emissivemap,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.fog,_t.lights,{emissive:{value:new Jt(0)},envMapIntensity:{value:1}}]),vertexShader:qt.meshlambert_vert,fragmentShader:qt.meshlambert_frag},phong:{uniforms:ze([_t.common,_t.specularmap,_t.envmap,_t.aomap,_t.lightmap,_t.emissivemap,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.fog,_t.lights,{emissive:{value:new Jt(0)},specular:{value:new Jt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:qt.meshphong_vert,fragmentShader:qt.meshphong_frag},standard:{uniforms:ze([_t.common,_t.envmap,_t.aomap,_t.lightmap,_t.emissivemap,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.roughnessmap,_t.metalnessmap,_t.fog,_t.lights,{emissive:{value:new Jt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:qt.meshphysical_vert,fragmentShader:qt.meshphysical_frag},toon:{uniforms:ze([_t.common,_t.aomap,_t.lightmap,_t.emissivemap,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.gradientmap,_t.fog,_t.lights,{emissive:{value:new Jt(0)}}]),vertexShader:qt.meshtoon_vert,fragmentShader:qt.meshtoon_frag},matcap:{uniforms:ze([_t.common,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.fog,{matcap:{value:null}}]),vertexShader:qt.meshmatcap_vert,fragmentShader:qt.meshmatcap_frag},points:{uniforms:ze([_t.points,_t.fog]),vertexShader:qt.points_vert,fragmentShader:qt.points_frag},dashed:{uniforms:ze([_t.common,_t.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:qt.linedashed_vert,fragmentShader:qt.linedashed_frag},depth:{uniforms:ze([_t.common,_t.displacementmap]),vertexShader:qt.depth_vert,fragmentShader:qt.depth_frag},normal:{uniforms:ze([_t.common,_t.bumpmap,_t.normalmap,_t.displacementmap,{opacity:{value:1}}]),vertexShader:qt.meshnormal_vert,fragmentShader:qt.meshnormal_frag},sprite:{uniforms:ze([_t.sprite,_t.fog]),vertexShader:qt.sprite_vert,fragmentShader:qt.sprite_frag},background:{uniforms:{uvTransform:{value:new Gt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:qt.background_vert,fragmentShader:qt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Gt}},vertexShader:qt.backgroundCube_vert,fragmentShader:qt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:qt.cube_vert,fragmentShader:qt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:qt.equirect_vert,fragmentShader:qt.equirect_frag},distance:{uniforms:ze([_t.common,_t.displacementmap,{referencePosition:{value:new V},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:qt.distance_vert,fragmentShader:qt.distance_frag},shadow:{uniforms:ze([_t.lights,_t.fog,{color:{value:new Jt(0)},opacity:{value:1}}]),vertexShader:qt.shadow_vert,fragmentShader:qt.shadow_frag}};Hn.physical={uniforms:ze([Hn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Gt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Gt},clearcoatNormalScale:{value:new Ot(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Gt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Gt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Gt},sheen:{value:0},sheenColor:{value:new Jt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Gt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Gt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Gt},transmissionSamplerSize:{value:new Ot},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Gt},attenuationDistance:{value:0},attenuationColor:{value:new Jt(0)},specularColor:{value:new Jt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Gt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Gt},anisotropyVector:{value:new Ot},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Gt}}]),vertexShader:qt.meshphysical_vert,fragmentShader:qt.meshphysical_frag};var ll={r:0,b:0,g:0},jx=new fe,id=new Gt;id.set(-1,0,0,0,1,0,0,0,1);function Qx(n,t,e,i,s,r){let a=new Jt(0),o=s===!0?0:1,l,c,h=null,d=0,u=null;function p(b){let T=b.isScene===!0?b.background:null;if(T&&T.isTexture){let x=b.backgroundBlurriness>0;T=t.get(T,x)}return T}function g(b){let T=!1,x=p(b);x===null?m(a,o):x&&x.isColor&&(m(x,1),T=!0);let M=n.xr.getEnvironmentBlendMode();M==="additive"?e.buffers.color.setClear(0,0,0,1,r):M==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(n.autoClear||T)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function _(b,T){let x=p(T);x&&(x.isCubeTexture||x.mapping===Tr)?(c===void 0&&(c=new Ye(new Ps(1,1,1),new rn({name:"BackgroundCubeMaterial",uniforms:Ji(Hn.backgroundCube.uniforms),vertexShader:Hn.backgroundCube.vertexShader,fragmentShader:Hn.backgroundCube.fragmentShader,side:He,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(M,S,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=x,c.material.uniforms.backgroundBlurriness.value=T.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(jx.makeRotationFromEuler(T.backgroundRotation)).transpose(),x.isCubeTexture&&x.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(id),c.material.toneMapped=$t.getTransfer(x.colorSpace)!==ee,(h!==x||d!==x.version||u!==n.toneMapping)&&(c.material.needsUpdate=!0,h=x,d=x.version,u=n.toneMapping),c.layers.enableAll(),b.unshift(c,c.geometry,c.material,0,0,null)):x&&x.isTexture&&(l===void 0&&(l=new Ye(new _r(2,2),new rn({name:"BackgroundMaterial",uniforms:Ji(Hn.background.uniforms),vertexShader:Hn.background.vertexShader,fragmentShader:Hn.background.fragmentShader,side:Qn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=x,l.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,l.material.toneMapped=$t.getTransfer(x.colorSpace)!==ee,x.matrixAutoUpdate===!0&&x.updateMatrix(),l.material.uniforms.uvTransform.value.copy(x.matrix),(h!==x||d!==x.version||u!==n.toneMapping)&&(l.material.needsUpdate=!0,h=x,d=x.version,u=n.toneMapping),l.layers.enableAll(),b.unshift(l,l.geometry,l.material,0,0,null))}function m(b,T){b.getRGB(ll,Qc(n)),e.buffers.color.setClear(ll.r,ll.g,ll.b,T,r)}function f(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(b,T=1){a.set(b),o=T,m(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(b){o=b,m(a,o)},render:g,addToRenderList:_,dispose:f}}function ty(n,t){let e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=u(null),r=s,a=!1;function o(P,N,H,R,L){let U=!1,D=d(P,R,H,N);r!==D&&(r=D,c(r.object)),U=p(P,R,H,L),U&&g(P,R,H,L),L!==null&&t.update(L,n.ELEMENT_ARRAY_BUFFER),(U||a)&&(a=!1,x(P,N,H,R),L!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(L).buffer))}function l(){return n.createVertexArray()}function c(P){return n.bindVertexArray(P)}function h(P){return n.deleteVertexArray(P)}function d(P,N,H,R){let L=R.wireframe===!0,U=i[N.id];U===void 0&&(U={},i[N.id]=U);let D=P.isInstancedMesh===!0?P.id:0,F=U[D];F===void 0&&(F={},U[D]=F);let W=F[H.id];W===void 0&&(W={},F[H.id]=W);let $=W[L];return $===void 0&&($=u(l()),W[L]=$),$}function u(P){let N=[],H=[],R=[];for(let L=0;L<e;L++)N[L]=0,H[L]=0,R[L]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:N,enabledAttributes:H,attributeDivisors:R,object:P,attributes:{},index:null}}function p(P,N,H,R){let L=r.attributes,U=N.attributes,D=0,F=H.getAttributes();for(let W in F)if(F[W].location>=0){let et=L[W],G=U[W];if(G===void 0&&(W==="instanceMatrix"&&P.instanceMatrix&&(G=P.instanceMatrix),W==="instanceColor"&&P.instanceColor&&(G=P.instanceColor)),et===void 0||et.attribute!==G||G&&et.data!==G.data)return!0;D++}return r.attributesNum!==D||r.index!==R}function g(P,N,H,R){let L={},U=N.attributes,D=0,F=H.getAttributes();for(let W in F)if(F[W].location>=0){let et=U[W];et===void 0&&(W==="instanceMatrix"&&P.instanceMatrix&&(et=P.instanceMatrix),W==="instanceColor"&&P.instanceColor&&(et=P.instanceColor));let G={};G.attribute=et,et&&et.data&&(G.data=et.data),L[W]=G,D++}r.attributes=L,r.attributesNum=D,r.index=R}function _(){let P=r.newAttributes;for(let N=0,H=P.length;N<H;N++)P[N]=0}function m(P){f(P,0)}function f(P,N){let H=r.newAttributes,R=r.enabledAttributes,L=r.attributeDivisors;H[P]=1,R[P]===0&&(n.enableVertexAttribArray(P),R[P]=1),L[P]!==N&&(n.vertexAttribDivisor(P,N),L[P]=N)}function b(){let P=r.newAttributes,N=r.enabledAttributes;for(let H=0,R=N.length;H<R;H++)N[H]!==P[H]&&(n.disableVertexAttribArray(H),N[H]=0)}function T(P,N,H,R,L,U,D){D===!0?n.vertexAttribIPointer(P,N,H,L,U):n.vertexAttribPointer(P,N,H,R,L,U)}function x(P,N,H,R){_();let L=R.attributes,U=H.getAttributes(),D=N.defaultAttributeValues;for(let F in U){let W=U[F];if(W.location>=0){let $=L[F];if($===void 0&&(F==="instanceMatrix"&&P.instanceMatrix&&($=P.instanceMatrix),F==="instanceColor"&&P.instanceColor&&($=P.instanceColor)),$!==void 0){let et=$.normalized,G=$.itemSize,ot=t.get($);if(ot===void 0)continue;let ft=ot.buffer,yt=ot.type,Z=ot.bytesPerElement,it=yt===n.INT||yt===n.UNSIGNED_INT||$.gpuType===wo;if($.isInterleavedBufferAttribute){let nt=$.data,Rt=nt.stride,Pt=$.offset;if(nt.isInstancedInterleavedBuffer){for(let wt=0;wt<W.locationSize;wt++)f(W.location+wt,nt.meshPerAttribute);P.isInstancedMesh!==!0&&R._maxInstanceCount===void 0&&(R._maxInstanceCount=nt.meshPerAttribute*nt.count)}else for(let wt=0;wt<W.locationSize;wt++)m(W.location+wt);n.bindBuffer(n.ARRAY_BUFFER,ft);for(let wt=0;wt<W.locationSize;wt++)T(W.location+wt,G/W.locationSize,yt,et,Rt*Z,(Pt+G/W.locationSize*wt)*Z,it)}else{if($.isInstancedBufferAttribute){for(let nt=0;nt<W.locationSize;nt++)f(W.location+nt,$.meshPerAttribute);P.isInstancedMesh!==!0&&R._maxInstanceCount===void 0&&(R._maxInstanceCount=$.meshPerAttribute*$.count)}else for(let nt=0;nt<W.locationSize;nt++)m(W.location+nt);n.bindBuffer(n.ARRAY_BUFFER,ft);for(let nt=0;nt<W.locationSize;nt++)T(W.location+nt,G/W.locationSize,yt,et,G*Z,G/W.locationSize*nt*Z,it)}}else if(D!==void 0){let et=D[F];if(et!==void 0)switch(et.length){case 2:n.vertexAttrib2fv(W.location,et);break;case 3:n.vertexAttrib3fv(W.location,et);break;case 4:n.vertexAttrib4fv(W.location,et);break;default:n.vertexAttrib1fv(W.location,et)}}}}b()}function M(){E();for(let P in i){let N=i[P];for(let H in N){let R=N[H];for(let L in R){let U=R[L];for(let D in U)h(U[D].object),delete U[D];delete R[L]}}delete i[P]}}function S(P){if(i[P.id]===void 0)return;let N=i[P.id];for(let H in N){let R=N[H];for(let L in R){let U=R[L];for(let D in U)h(U[D].object),delete U[D];delete R[L]}}delete i[P.id]}function w(P){for(let N in i){let H=i[N];for(let R in H){let L=H[R];if(L[P.id]===void 0)continue;let U=L[P.id];for(let D in U)h(U[D].object),delete U[D];delete L[P.id]}}}function y(P){for(let N in i){let H=i[N],R=P.isInstancedMesh===!0?P.id:0,L=H[R];if(L!==void 0){for(let U in L){let D=L[U];for(let F in D)h(D[F].object),delete D[F];delete L[U]}delete H[R],Object.keys(H).length===0&&delete i[N]}}}function E(){I(),a=!0,r!==s&&(r=s,c(r.object))}function I(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:E,resetDefaultState:I,dispose:M,releaseStatesOfGeometry:S,releaseStatesOfObject:y,releaseStatesOfProgram:w,initAttributes:_,enableAttribute:m,disableUnusedAttributes:b}}function ey(n,t,e){let i;function s(l){i=l}function r(l,c){n.drawArrays(i,l,c),e.update(c,i,1)}function a(l,c,h){h!==0&&(n.drawArraysInstanced(i,l,c,h),e.update(c,i,h))}function o(l,c,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,h);let u=0;for(let p=0;p<h;p++)u+=c[p];e.update(u,i,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function ny(n,t,e,i){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let w=t.get("EXT_texture_filter_anisotropic");s=n.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(w){return!(w!==un&&i.convert(w)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(w){let y=w===Vn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(w!==on&&i.convert(w)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&w!==En&&!y)}function l(w){if(w==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(Ft("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let d=e.logarithmicDepthBuffer===!0,u=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&u===!1&&Ft("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let p=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),f=n.getParameter(n.MAX_VERTEX_ATTRIBS),b=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),T=n.getParameter(n.MAX_VARYING_VECTORS),x=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),M=n.getParameter(n.MAX_SAMPLES),S=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:u,maxTextures:p,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:f,maxVertexUniforms:b,maxVaryings:T,maxFragmentUniforms:x,maxSamples:M,samples:S}}function iy(n){let t=this,e=null,i=0,s=!1,r=!1,a=new hn,o=new Gt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){let p=d.length!==0||u||i!==0||s;return s=u,i=d.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,u){e=h(d,u,0)},this.setState=function(d,u,p){let g=d.clippingPlanes,_=d.clipIntersection,m=d.clipShadows,f=n.get(d);if(!s||g===null||g.length===0||r&&!m)r?h(null):c();else{let b=r?0:i,T=b*4,x=f.clippingState||null;l.value=x,x=h(g,u,T,p);for(let M=0;M!==T;++M)x[M]=e[M];f.clippingState=x,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=b}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function h(d,u,p,g){let _=d!==null?d.length:0,m=null;if(_!==0){if(m=l.value,g!==!0||m===null){let f=p+_*4,b=u.matrixWorldInverse;o.getNormalMatrix(b),(m===null||m.length<f)&&(m=new Float32Array(f));for(let T=0,x=p;T!==_;++T,x+=4)a.copy(d[T]).applyMatrix4(b,o),a.normal.toArray(m,x),m[x+3]=a.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,m}}var Ii=4,Nf=[.125,.215,.35,.446,.526,.582],Ki=20,sy=256,Nr=new br,Uf=new Jt,lh=null,ch=0,hh=0,uh=!1,ry=new V,hl=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,i=.1,s=100,r={}){let{size:a=256,position:o=ry}=r;lh=this._renderer.getRenderTarget(),ch=this._renderer.getActiveCubeFace(),hh=this._renderer.getActiveMipmapLevel(),uh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,i,s,l,o),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Bf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Of(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(lh,ch,hh),this._renderer.xr.enabled=uh,t.scissorTest=!1,Fs(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Ti||t.mapping===$i?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),lh=this._renderer.getRenderTarget(),ch=this._renderer.getActiveCubeFace(),hh=this._renderer.getActiveMipmapLevel(),uh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:Pe,minFilter:Pe,generateMipmaps:!1,type:Vn,format:un,colorSpace:nr,depthBuffer:!1},s=Ff(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ff(t,e,i);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=ay(r)),this._blurMaterial=ly(r,t,e),this._ggxMaterial=oy(r,t,e)}return s}_compileMaterial(t){let e=new Ye(new De,t);this._renderer.compile(e,Nr)}_sceneToCubeUV(t,e,i,s,r){let l=new Be(90,1,e,i),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],d=this._renderer,u=d.autoClear,p=d.toneMapping;d.getClearColor(Uf),d.toneMapping=Sn,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(s),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Ye(new Ps,new Yi({name:"PMREM.Background",side:He,depthWrite:!1,depthTest:!1})));let _=this._backgroundBox,m=_.material,f=!1,b=t.background;b?b.isColor&&(m.color.copy(b),t.background=null,f=!0):(m.color.copy(Uf),f=!0);for(let T=0;T<6;T++){let x=T%3;x===0?(l.up.set(0,c[T],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[T],r.y,r.z)):x===1?(l.up.set(0,0,c[T]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[T],r.z)):(l.up.set(0,c[T],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[T]));let M=this._cubeSize;Fs(s,x*M,T>2?M:0,M,M),d.setRenderTarget(s),f&&d.render(_,l),d.render(t,l)}d.toneMapping=p,d.autoClear=u,t.background=b}_textureToCubeUV(t,e){let i=this._renderer,s=t.mapping===Ti||t.mapping===$i;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Bf()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Of());let r=s?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;let o=r.uniforms;o.envMap.value=t;let l=this._cubeSize;Fs(e,0,0,3*l,2*l),i.setRenderTarget(e),i.render(a,Nr)}_applyPMREM(t){let e=this._renderer,i=e.autoClear;e.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(t,r-1,r);e.autoClear=i}_applyGGXFilter(t,e,i){let s=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[i];o.material=a;let l=a.uniforms,c=i/(this._lodMeshes.length-1),h=e/(this._lodMeshes.length-1),d=Math.sqrt(c*c-h*h),u=0+c*1.25,p=d*u,{_lodMax:g}=this,_=this._sizeLods[i],m=3*_*(i>g-Ii?i-g+Ii:0),f=4*(this._cubeSize-_);l.envMap.value=t.texture,l.roughness.value=p,l.mipInt.value=g-e,Fs(r,m,f,3*_,2*_),s.setRenderTarget(r),s.render(o,Nr),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=g-i,Fs(t,m,f,3*_,2*_),s.setRenderTarget(t),s.render(o,Nr)}_blur(t,e,i,s,r){let a=this._pingPongRenderTarget;this._halfBlur(t,a,e,i,s,"latitudinal",r),this._halfBlur(a,t,i,i,s,"longitudinal",r)}_halfBlur(t,e,i,s,r,a,o){let l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&Bt("blur direction must be either latitudinal or longitudinal!");let h=3,d=this._lodMeshes[s];d.material=c;let u=c.uniforms,p=this._sizeLods[i]-1,g=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*Ki-1),_=r/g,m=isFinite(r)?1+Math.floor(h*_):Ki;m>Ki&&Ft(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Ki}`);let f=[],b=0;for(let w=0;w<Ki;++w){let y=w/_,E=Math.exp(-y*y/2);f.push(E),w===0?b+=E:w<m&&(b+=2*E)}for(let w=0;w<f.length;w++)f[w]=f[w]/b;u.envMap.value=t.texture,u.samples.value=m,u.weights.value=f,u.latitudinal.value=a==="latitudinal",o&&(u.poleAxis.value=o);let{_lodMax:T}=this;u.dTheta.value=g,u.mipInt.value=T-i;let x=this._sizeLods[s],M=3*x*(s>T-Ii?s-T+Ii:0),S=4*(this._cubeSize-x);Fs(e,M,S,3*x,2*x),l.setRenderTarget(e),l.render(d,Nr)}};function ay(n){let t=[],e=[],i=[],s=n,r=n-Ii+1+Nf.length;for(let a=0;a<r;a++){let o=Math.pow(2,s);t.push(o);let l=1/o;a>n-Ii?l=Nf[a-n+Ii-1]:a===0&&(l=0),e.push(l);let c=1/(o-2),h=-c,d=1+c,u=[h,h,d,h,d,d,h,h,d,d,h,d],p=6,g=6,_=3,m=2,f=1,b=new Float32Array(_*g*p),T=new Float32Array(m*g*p),x=new Float32Array(f*g*p);for(let S=0;S<p;S++){let w=S%3*2/3-1,y=S>2?0:-1,E=[w,y,0,w+2/3,y,0,w+2/3,y+1,0,w,y,0,w+2/3,y+1,0,w,y+1,0];b.set(E,_*g*S),T.set(u,m*g*S);let I=[S,S,S,S,S,S];x.set(I,f*g*S)}let M=new De;M.setAttribute("position",new qe(b,_)),M.setAttribute("uv",new qe(T,m)),M.setAttribute("faceIndex",new qe(x,f)),i.push(new Ye(M,null)),s>Ii&&s--}return{lodMeshes:i,sizeLods:t,sigmas:e}}function Ff(n,t,e){let i=new sn(n,t,e);return i.texture.mapping=Tr,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Fs(n,t,e,i,s){n.viewport.set(t,e,i,s),n.scissor.set(t,e,i,s)}function oy(n,t,e){return new rn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:sy,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:dl(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:kn,depthTest:!1,depthWrite:!1})}function ly(n,t,e){let i=new Float32Array(Ki),s=new V(0,1,0);return new rn({name:"SphericalGaussianBlur",defines:{n:Ki,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:dl(),fragmentShader:`

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
		`,blending:kn,depthTest:!1,depthWrite:!1})}function Of(){return new rn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:dl(),fragmentShader:`

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
		`,blending:kn,depthTest:!1,depthWrite:!1})}function Bf(){return new rn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:dl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:kn,depthTest:!1,depthWrite:!1})}function dl(){return`

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
	`}var ul=class extends sn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];this.texture=new mr(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Ps(5,5,5),r=new rn({name:"CubemapFromEquirect",uniforms:Ji(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:He,blending:kn});r.uniforms.tEquirect.value=e;let a=new Ye(s,r),o=e.minFilter;return e.minFilter===Ai&&(e.minFilter=Pe),new _o(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,i=!0,s=!0){let r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,i,s);t.setRenderTarget(r)}};function cy(n){let t=new WeakMap,e=new WeakMap,i=null;function s(u,p=!1){return u==null?null:p?a(u):r(u)}function r(u){if(u&&u.isTexture){let p=u.mapping;if(p===bo||p===Mo)if(t.has(u)){let g=t.get(u).texture;return o(g,u.mapping)}else{let g=u.image;if(g&&g.height>0){let _=new ul(g.height);return _.fromEquirectangularTexture(n,u),t.set(u,_),u.addEventListener("dispose",c),o(_.texture,u.mapping)}else return null}}return u}function a(u){if(u&&u.isTexture){let p=u.mapping,g=p===bo||p===Mo,_=p===Ti||p===$i;if(g||_){let m=e.get(u),f=m!==void 0?m.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==f)return i===null&&(i=new hl(n)),m=g?i.fromEquirectangular(u,m):i.fromCubemap(u,m),m.texture.pmremVersion=u.pmremVersion,e.set(u,m),m.texture;if(m!==void 0)return m.texture;{let b=u.image;return g&&b&&b.height>0||_&&b&&l(b)?(i===null&&(i=new hl(n)),m=g?i.fromEquirectangular(u):i.fromCubemap(u),m.texture.pmremVersion=u.pmremVersion,e.set(u,m),u.addEventListener("dispose",h),m.texture):null}}}return u}function o(u,p){return p===bo?u.mapping=Ti:p===Mo&&(u.mapping=$i),u}function l(u){let p=0,g=6;for(let _=0;_<g;_++)u[_]!==void 0&&p++;return p===g}function c(u){let p=u.target;p.removeEventListener("dispose",c);let g=t.get(p);g!==void 0&&(t.delete(p),g.dispose())}function h(u){let p=u.target;p.removeEventListener("dispose",h);let g=e.get(p);g!==void 0&&(e.delete(p),g.dispose())}function d(){t=new WeakMap,e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:d}}function hy(n){let t={};function e(i){if(t[i]!==void 0)return t[i];let s=n.getExtension(i);return t[i]=s,s}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){let s=e(i);return s===null&&Hi("WebGLRenderer: "+i+" extension not supported."),s}}}function uy(n,t,e,i){let s={},r=new WeakMap;function a(d){let u=d.target;u.index!==null&&t.remove(u.index);for(let g in u.attributes)t.remove(u.attributes[g]);u.removeEventListener("dispose",a),delete s[u.id];let p=r.get(u);p&&(t.remove(p),r.delete(u)),i.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,e.memory.geometries--}function o(d,u){return s[u.id]===!0||(u.addEventListener("dispose",a),s[u.id]=!0,e.memory.geometries++),u}function l(d){let u=d.attributes;for(let p in u)t.update(u[p],n.ARRAY_BUFFER)}function c(d){let u=[],p=d.index,g=d.attributes.position,_=0;if(g===void 0)return;if(p!==null){let b=p.array;_=p.version;for(let T=0,x=b.length;T<x;T+=3){let M=b[T+0],S=b[T+1],w=b[T+2];u.push(M,S,S,w,w,M)}}else{let b=g.array;_=g.version;for(let T=0,x=b.length/3-1;T<x;T+=3){let M=T+0,S=T+1,w=T+2;u.push(M,S,S,w,w,M)}}let m=new(g.count>=65535?hr:cr)(u,1);m.version=_;let f=r.get(d);f&&t.remove(f),r.set(d,m)}function h(d){let u=r.get(d);if(u){let p=d.index;p!==null&&u.version<p.version&&c(d)}else c(d);return r.get(d)}return{get:o,update:l,getWireframeAttribute:h}}function fy(n,t,e){let i;function s(d){i=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function l(d,u){n.drawElements(i,u,r,d*a),e.update(u,i,1)}function c(d,u,p){p!==0&&(n.drawElementsInstanced(i,u,r,d*a,p),e.update(u,i,p))}function h(d,u,p){if(p===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,u,0,r,d,0,p);let _=0;for(let m=0;m<p;m++)_+=u[m];e.update(_,i,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function dy(n){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,a,o){switch(e.calls++,a){case n.TRIANGLES:e.triangles+=o*(r/3);break;case n.LINES:e.lines+=o*(r/2);break;case n.LINE_STRIP:e.lines+=o*(r-1);break;case n.LINE_LOOP:e.lines+=o*r;break;case n.POINTS:e.points+=o*r;break;default:Bt("WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:i}}function py(n,t,e){let i=new WeakMap,s=new de;function r(a,o,l){let c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=h!==void 0?h.length:0,u=i.get(o);if(u===void 0||u.count!==d){let E=function(){w.dispose(),i.delete(o),o.removeEventListener("dispose",E)};u!==void 0&&u.texture.dispose();let p=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,_=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],f=o.morphAttributes.normal||[],b=o.morphAttributes.color||[],T=0;p===!0&&(T=1),g===!0&&(T=2),_===!0&&(T=3);let x=o.attributes.position.count*T,M=1;x>t.maxTextureSize&&(M=Math.ceil(x/t.maxTextureSize),x=t.maxTextureSize);let S=new Float32Array(x*M*4*d),w=new or(S,x,M,d);w.type=En,w.needsUpdate=!0;let y=T*4;for(let I=0;I<d;I++){let P=m[I],N=f[I],H=b[I],R=x*M*4*I;for(let L=0;L<P.count;L++){let U=L*y;p===!0&&(s.fromBufferAttribute(P,L),S[R+U+0]=s.x,S[R+U+1]=s.y,S[R+U+2]=s.z,S[R+U+3]=0),g===!0&&(s.fromBufferAttribute(N,L),S[R+U+4]=s.x,S[R+U+5]=s.y,S[R+U+6]=s.z,S[R+U+7]=0),_===!0&&(s.fromBufferAttribute(H,L),S[R+U+8]=s.x,S[R+U+9]=s.y,S[R+U+10]=s.z,S[R+U+11]=H.itemSize===4?s.w:1)}}u={count:d,texture:w,size:new Ot(x,M)},i.set(o,u),o.addEventListener("dispose",E)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",a.morphTexture,e);else{let p=0;for(let _=0;_<c.length;_++)p+=c[_];let g=o.morphTargetsRelative?1:1-p;l.getUniforms().setValue(n,"morphTargetBaseInfluence",g),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",u.texture,e),l.getUniforms().setValue(n,"morphTargetsTextureSize",u.size)}return{update:r}}function my(n,t,e,i,s){let r=new WeakMap;function a(c){let h=s.render.frame,d=c.geometry,u=t.get(c,d);if(r.get(u)!==h&&(t.update(u),r.set(u,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(e.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,n.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){let p=c.skeleton;r.get(p)!==h&&(p.update(),r.set(p,h))}return u}function o(){r=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),i.releaseStatesOfObject(h),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:a,dispose:o}}var gy={[Nc]:"LINEAR_TONE_MAPPING",[Uc]:"REINHARD_TONE_MAPPING",[Fc]:"CINEON_TONE_MAPPING",[Oc]:"ACES_FILMIC_TONE_MAPPING",[zc]:"AGX_TONE_MAPPING",[kc]:"NEUTRAL_TONE_MAPPING",[Bc]:"CUSTOM_TONE_MAPPING"};function _y(n,t,e,i,s,r){let a=new sn(t,e,{type:n,depthBuffer:s,stencilBuffer:r,samples:i?4:0,depthTexture:s?new ei(t,e):void 0}),o=new sn(t,e,{type:Vn,depthBuffer:!1,stencilBuffer:!1}),l=new De;l.setAttribute("position",new be([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute("uv",new be([0,2,0,0,2,0],2));let c=new io({uniforms:{tDiffuse:{value:null}},vertexShader:`
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

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

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
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),h=new Ye(l,c),d=new br(-1,1,1,-1,0,1),u=null,p=null,g=!1,_,m=null,f=[],b=!1;this.setSize=function(T,x){a.setSize(T,x),o.setSize(T,x);for(let M=0;M<f.length;M++){let S=f[M];S.setSize&&S.setSize(T,x)}},this.setEffects=function(T){f=T,b=f.length>0&&f[0].isRenderPass===!0;let x=a.width,M=a.height;for(let S=0;S<f.length;S++){let w=f[S];w.setSize&&w.setSize(x,M)}},this.begin=function(T,x){if(g||T.toneMapping===Sn&&f.length===0)return!1;if(m=x,x!==null){let M=x.width,S=x.height;(a.width!==M||a.height!==S)&&this.setSize(M,S)}return b===!1&&T.setRenderTarget(a),_=T.toneMapping,T.toneMapping=Sn,!0},this.hasRenderPass=function(){return b},this.end=function(T,x){T.toneMapping=_,g=!0;let M=a,S=o;for(let w=0;w<f.length;w++){let y=f[w];if(y.enabled!==!1&&(y.render(T,S,M,x),y.needsSwap!==!1)){let E=M;M=S,S=E}}if(u!==T.outputColorSpace||p!==T.toneMapping){u=T.outputColorSpace,p=T.toneMapping,c.defines={},$t.getTransfer(u)===ee&&(c.defines.SRGB_TRANSFER="");let w=gy[p];w&&(c.defines[w]=""),c.needsUpdate=!0}c.uniforms.tDiffuse.value=M.texture,T.setRenderTarget(m),T.render(h,d),m=null,g=!1},this.isCompositing=function(){return g},this.dispose=function(){a.depthTexture&&a.depthTexture.dispose(),a.dispose(),o.dispose(),l.dispose(),c.dispose()}}var sd=new Ve,ph=new ei(1,1),rd=new or,ad=new Ja,od=new mr,zf=[],kf=[],Vf=new Float32Array(16),Gf=new Float32Array(9),Hf=new Float32Array(4);function Bs(n,t,e){let i=n[0];if(i<=0||i>0)return n;let s=t*e,r=zf[s];if(r===void 0&&(r=new Float32Array(s),zf[s]=r),t!==0){i.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,n[a].toArray(r,o)}return r}function Se(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function we(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function pl(n,t){let e=kf[t];e===void 0&&(e=new Int32Array(t),kf[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function xy(n,t){let e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function yy(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Se(e,t))return;n.uniform2fv(this.addr,t),we(e,t)}}function vy(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Se(e,t))return;n.uniform3fv(this.addr,t),we(e,t)}}function by(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Se(e,t))return;n.uniform4fv(this.addr,t),we(e,t)}}function My(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(Se(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),we(e,t)}else{if(Se(e,i))return;Hf.set(i),n.uniformMatrix2fv(this.addr,!1,Hf),we(e,i)}}function Sy(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(Se(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),we(e,t)}else{if(Se(e,i))return;Gf.set(i),n.uniformMatrix3fv(this.addr,!1,Gf),we(e,i)}}function wy(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(Se(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),we(e,t)}else{if(Se(e,i))return;Vf.set(i),n.uniformMatrix4fv(this.addr,!1,Vf),we(e,i)}}function Ey(n,t){let e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function Ty(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Se(e,t))return;n.uniform2iv(this.addr,t),we(e,t)}}function Ay(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Se(e,t))return;n.uniform3iv(this.addr,t),we(e,t)}}function Cy(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Se(e,t))return;n.uniform4iv(this.addr,t),we(e,t)}}function Ry(n,t){let e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function Iy(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Se(e,t))return;n.uniform2uiv(this.addr,t),we(e,t)}}function Py(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Se(e,t))return;n.uniform3uiv(this.addr,t),we(e,t)}}function Dy(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Se(e,t))return;n.uniform4uiv(this.addr,t),we(e,t)}}function Ly(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(ph.compareFunction=e.isReversedDepthBuffer()?ol:al,r=ph):r=sd,e.setTexture2D(t||r,s)}function Ny(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture3D(t||ad,s)}function Uy(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTextureCube(t||od,s)}function Fy(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture2DArray(t||rd,s)}function Oy(n){switch(n){case 5126:return xy;case 35664:return yy;case 35665:return vy;case 35666:return by;case 35674:return My;case 35675:return Sy;case 35676:return wy;case 5124:case 35670:return Ey;case 35667:case 35671:return Ty;case 35668:case 35672:return Ay;case 35669:case 35673:return Cy;case 5125:return Ry;case 36294:return Iy;case 36295:return Py;case 36296:return Dy;case 35678:case 36198:case 36298:case 36306:case 35682:return Ly;case 35679:case 36299:case 36307:return Ny;case 35680:case 36300:case 36308:case 36293:return Uy;case 36289:case 36303:case 36311:case 36292:return Fy}}function By(n,t){n.uniform1fv(this.addr,t)}function zy(n,t){let e=Bs(t,this.size,2);n.uniform2fv(this.addr,e)}function ky(n,t){let e=Bs(t,this.size,3);n.uniform3fv(this.addr,e)}function Vy(n,t){let e=Bs(t,this.size,4);n.uniform4fv(this.addr,e)}function Gy(n,t){let e=Bs(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function Hy(n,t){let e=Bs(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function Wy(n,t){let e=Bs(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function Xy(n,t){n.uniform1iv(this.addr,t)}function qy(n,t){n.uniform2iv(this.addr,t)}function Yy(n,t){n.uniform3iv(this.addr,t)}function Zy(n,t){n.uniform4iv(this.addr,t)}function $y(n,t){n.uniform1uiv(this.addr,t)}function Jy(n,t){n.uniform2uiv(this.addr,t)}function Ky(n,t){n.uniform3uiv(this.addr,t)}function jy(n,t){n.uniform4uiv(this.addr,t)}function Qy(n,t,e){let i=this.cache,s=t.length,r=pl(e,s);Se(i,r)||(n.uniform1iv(this.addr,r),we(i,r));let a;this.type===n.SAMPLER_2D_SHADOW?a=ph:a=sd;for(let o=0;o!==s;++o)e.setTexture2D(t[o]||a,r[o])}function tv(n,t,e){let i=this.cache,s=t.length,r=pl(e,s);Se(i,r)||(n.uniform1iv(this.addr,r),we(i,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||ad,r[a])}function ev(n,t,e){let i=this.cache,s=t.length,r=pl(e,s);Se(i,r)||(n.uniform1iv(this.addr,r),we(i,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||od,r[a])}function nv(n,t,e){let i=this.cache,s=t.length,r=pl(e,s);Se(i,r)||(n.uniform1iv(this.addr,r),we(i,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||rd,r[a])}function iv(n){switch(n){case 5126:return By;case 35664:return zy;case 35665:return ky;case 35666:return Vy;case 35674:return Gy;case 35675:return Hy;case 35676:return Wy;case 5124:case 35670:return Xy;case 35667:case 35671:return qy;case 35668:case 35672:return Yy;case 35669:case 35673:return Zy;case 5125:return $y;case 36294:return Jy;case 36295:return Ky;case 36296:return jy;case 35678:case 36198:case 36298:case 36306:case 35682:return Qy;case 35679:case 36299:case 36307:return tv;case 35680:case 36300:case 36308:case 36293:return ev;case 36289:case 36303:case 36311:case 36292:return nv}}var mh=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=Oy(e.type)}},gh=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=iv(e.type)}},_h=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(t,e[o.id],i)}}},fh=/(\w+)(\])?(\[|\.)?/g;function Wf(n,t){n.seq.push(t),n.map[t.id]=t}function sv(n,t,e){let i=n.name,s=i.length;for(fh.lastIndex=0;;){let r=fh.exec(i),a=fh.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){Wf(e,c===void 0?new mh(o,n,t):new gh(o,n,t));break}else{let d=e.map[o];d===void 0&&(d=new _h(o),Wf(e,d)),e=d}}}var Os=class{constructor(t,e){this.seq=[],this.map={};let i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){let o=t.getActiveUniform(e,a),l=t.getUniformLocation(e,o.name);sv(o,l,this)}let s=[],r=[];for(let a of this.seq)a.type===t.SAMPLER_2D_SHADOW||a.type===t.SAMPLER_CUBE_SHADOW||a.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,i,s){let r=this.map[e];r!==void 0&&r.setValue(t,i,s)}setOptional(t,e,i){let s=e[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,e,i,s){for(let r=0,a=e.length;r!==a;++r){let o=e[r],l=i[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,e){let i=[];for(let s=0,r=t.length;s!==r;++s){let a=t[s];a.id in e&&i.push(a)}return i}};function Xf(n,t,e){let i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}var rv=37297,av=0;function ov(n,t){let e=n.split(`
`),i=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){let o=a+1;i.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return i.join(`
`)}var qf=new Gt;function lv(n){$t._getMatrix(qf,$t.workingColorSpace,n);let t=`mat3( ${qf.elements.map(e=>e.toFixed(4))} )`;switch($t.getTransfer(n)){case ir:return[t,"LinearTransferOETF"];case ee:return[t,"sRGBTransferOETF"];default:return Ft("WebGLProgram: Unsupported color space: ",n),[t,"LinearTransferOETF"]}}function Yf(n,t,e){let i=n.getShaderParameter(t,n.COMPILE_STATUS),r=(n.getShaderInfoLog(t)||"").trim();if(i&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return e.toUpperCase()+`

`+r+`

`+ov(n.getShaderSource(t),o)}else return r}function cv(n,t){let e=lv(t);return[`vec4 ${n}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}var hv={[Nc]:"Linear",[Uc]:"Reinhard",[Fc]:"Cineon",[Oc]:"ACESFilmic",[zc]:"AgX",[kc]:"Neutral",[Bc]:"Custom"};function uv(n,t){let e=hv[t];return e===void 0?(Ft("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var cl=new V;function fv(){$t.getLuminanceCoefficients(cl);let n=cl.x.toFixed(4),t=cl.y.toFixed(4),e=cl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function dv(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Fr).join(`
`)}function pv(n){let t=[];for(let e in n){let i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function mv(n,t){let e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=n.getActiveAttrib(t,s),a=r.name,o=1;r.type===n.FLOAT_MAT2&&(o=2),r.type===n.FLOAT_MAT3&&(o=3),r.type===n.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:n.getAttribLocation(t,a),locationSize:o}}return e}function Fr(n){return n!==""}function Zf(n,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function $f(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var gv=/^[ \t]*#include +<([\w\d./]+)>/gm;function xh(n){return n.replace(gv,xv)}var _v=new Map;function xv(n,t){let e=qt[t];if(e===void 0){let i=_v.get(t);if(i!==void 0)e=qt[i],Ft('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return xh(e)}var yv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Jf(n){return n.replace(yv,vv)}function vv(n,t,e,i){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Kf(n){let t=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?t+=`
#define HIGH_PRECISION`:n.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}var bv={[wr]:"SHADOWMAP_TYPE_PCF",[Ls]:"SHADOWMAP_TYPE_VSM"};function Mv(n){return bv[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var Sv={[Ti]:"ENVMAP_TYPE_CUBE",[$i]:"ENVMAP_TYPE_CUBE",[Tr]:"ENVMAP_TYPE_CUBE_UV"};function wv(n){return n.envMap===!1?"ENVMAP_TYPE_CUBE":Sv[n.envMapMode]||"ENVMAP_TYPE_CUBE"}var Ev={[$i]:"ENVMAP_MODE_REFRACTION"};function Tv(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":Ev[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}var Av={[Lc]:"ENVMAP_BLENDING_MULTIPLY",[mf]:"ENVMAP_BLENDING_MIX",[gf]:"ENVMAP_BLENDING_ADD"};function Cv(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":Av[n.combine]||"ENVMAP_BLENDING_NONE"}function Rv(n){let t=n.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:i,maxMip:e}}function Iv(n,t,e,i){let s=n.getContext(),r=e.defines,a=e.vertexShader,o=e.fragmentShader,l=Mv(e),c=wv(e),h=Tv(e),d=Cv(e),u=Rv(e),p=dv(e),g=pv(r),_=s.createProgram(),m,f,b=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Fr).join(`
`),m.length>0&&(m+=`
`),f=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Fr).join(`
`),f.length>0&&(f+=`
`)):(m=[Kf(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Fr).join(`
`),f=[Kf(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Sn?"#define TONE_MAPPING":"",e.toneMapping!==Sn?qt.tonemapping_pars_fragment:"",e.toneMapping!==Sn?uv("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",qt.colorspace_pars_fragment,cv("linearToOutputTexel",e.outputColorSpace),fv(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Fr).join(`
`)),a=xh(a),a=Zf(a,e),a=$f(a,e),o=xh(o),o=Zf(o,e),o=$f(o,e),a=Jf(a),o=Jf(o),e.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",e.glslVersion===Jc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Jc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);let T=b+m+a,x=b+f+o,M=Xf(s,s.VERTEX_SHADER,T),S=Xf(s,s.FRAGMENT_SHADER,x);s.attachShader(_,M),s.attachShader(_,S),e.index0AttributeName!==void 0?s.bindAttribLocation(_,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function w(P){if(n.debug.checkShaderErrors){let N=s.getProgramInfoLog(_)||"",H=s.getShaderInfoLog(M)||"",R=s.getShaderInfoLog(S)||"",L=N.trim(),U=H.trim(),D=R.trim(),F=!0,W=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(F=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,_,M,S);else{let $=Yf(s,M,"vertex"),et=Yf(s,S,"fragment");Bt("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+L+`
`+$+`
`+et)}else L!==""?Ft("WebGLProgram: Program Info Log:",L):(U===""||D==="")&&(W=!1);W&&(P.diagnostics={runnable:F,programLog:L,vertexShader:{log:U,prefix:m},fragmentShader:{log:D,prefix:f}})}s.deleteShader(M),s.deleteShader(S),y=new Os(s,_),E=mv(s,_)}let y;this.getUniforms=function(){return y===void 0&&w(this),y};let E;this.getAttributes=function(){return E===void 0&&w(this),E};let I=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return I===!1&&(I=s.getProgramParameter(_,rv)),I},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=av++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=M,this.fragmentShader=S,this}var Pv=0,yh=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,i){let s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(i)===!1&&(s.add(i),i.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){let e=this.shaderCache,i=e.get(t);return i===void 0&&(i=new vh(t),e.set(t,i)),i}},vh=class{constructor(t){this.id=Pv++,this.code=t,this.usedTimes=0}};function Dv(n){return n===Ri||n===Dr||n===Lr}function Lv(n,t,e,i,s,r){let a=new Ts,o=new yh,l=new Set,c=[],h=new Map,d=i.logarithmicDepthBuffer,u=i.precision,p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(y){return l.add(y),y===0?"uv":`uv${y}`}function _(y,E,I,P,N,H){let R=P.fog,L=N.geometry,U=y.isMeshStandardMaterial||y.isMeshLambertMaterial||y.isMeshPhongMaterial?P.environment:null,D=y.isMeshStandardMaterial||y.isMeshLambertMaterial&&!y.envMap||y.isMeshPhongMaterial&&!y.envMap,F=t.get(y.envMap||U,D),W=F&&F.mapping===Tr?F.image.height:null,$=p[y.type];y.precision!==null&&(u=i.getMaxPrecision(y.precision),u!==y.precision&&Ft("WebGLProgram.getParameters:",y.precision,"not supported, using",u,"instead."));let et=L.morphAttributes.position||L.morphAttributes.normal||L.morphAttributes.color,G=et!==void 0?et.length:0,ot=0;L.morphAttributes.position!==void 0&&(ot=1),L.morphAttributes.normal!==void 0&&(ot=2),L.morphAttributes.color!==void 0&&(ot=3);let ft,yt,Z,it;if($){let Tt=Hn[$];ft=Tt.vertexShader,yt=Tt.fragmentShader}else{ft=y.vertexShader,yt=y.fragmentShader;let Tt=o.getVertexShaderStage(y),pe=o.getFragmentShaderStage(y);o.update(y,Tt,pe),Z=Tt.id,it=pe.id}let nt=n.getRenderTarget(),Rt=n.state.buffers.depth.getReversed(),Pt=N.isInstancedMesh===!0,wt=N.isBatchedMesh===!0,te=!!y.map,ht=!!y.matcap,At=!!F,zt=!!y.aoMap,Vt=!!y.lightMap,jt=!!y.bumpMap&&y.wireframe===!1,ye=!!y.normalMap,at=!!y.displacementMap,lt=!!y.emissiveMap,Et=!!y.metalnessMap,Kt=!!y.roughnessMap,O=y.anisotropy>0,ae=y.clearcoat>0,Ht=y.dispersion>0,C=y.iridescence>0,v=y.sheen>0,k=y.transmission>0,X=O&&!!y.anisotropyMap,K=ae&&!!y.clearcoatMap,rt=ae&&!!y.clearcoatNormalMap,ct=ae&&!!y.clearcoatRoughnessMap,j=C&&!!y.iridescenceMap,Q=C&&!!y.iridescenceThicknessMap,dt=v&&!!y.sheenColorMap,Dt=v&&!!y.sheenRoughnessMap,gt=!!y.specularMap,pt=!!y.specularColorMap,Ut=!!y.specularIntensityMap,kt=k&&!!y.transmissionMap,Wt=k&&!!y.thicknessMap,B=!!y.gradientMap,ut=!!y.alphaMap,tt=y.alphaTest>0,mt=!!y.alphaHash,bt=!!y.extensions,st=Sn;y.toneMapped&&(nt===null||nt.isXRRenderTarget===!0)&&(st=n.toneMapping);let It={shaderID:$,shaderType:y.type,shaderName:y.name,vertexShader:ft,fragmentShader:yt,defines:y.defines,customVertexShaderID:Z,customFragmentShaderID:it,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:u,batching:wt,batchingColor:wt&&N._colorsTexture!==null,instancing:Pt,instancingColor:Pt&&N.instanceColor!==null,instancingMorph:Pt&&N.morphTexture!==null,outputColorSpace:nt===null?n.outputColorSpace:nt.isXRRenderTarget===!0?nt.texture.colorSpace:$t.workingColorSpace,alphaToCoverage:!!y.alphaToCoverage,map:te,matcap:ht,envMap:At,envMapMode:At&&F.mapping,envMapCubeUVHeight:W,aoMap:zt,lightMap:Vt,bumpMap:jt,normalMap:ye,displacementMap:at,emissiveMap:lt,normalMapObjectSpace:ye&&y.normalMapType===yf,normalMapTangentSpace:ye&&y.normalMapType===$c,packedNormalMap:ye&&y.normalMapType===$c&&Dv(y.normalMap.format),metalnessMap:Et,roughnessMap:Kt,anisotropy:O,anisotropyMap:X,clearcoat:ae,clearcoatMap:K,clearcoatNormalMap:rt,clearcoatRoughnessMap:ct,dispersion:Ht,iridescence:C,iridescenceMap:j,iridescenceThicknessMap:Q,sheen:v,sheenColorMap:dt,sheenRoughnessMap:Dt,specularMap:gt,specularColorMap:pt,specularIntensityMap:Ut,transmission:k,transmissionMap:kt,thicknessMap:Wt,gradientMap:B,opaque:y.transparent===!1&&y.blending===Wi&&y.alphaToCoverage===!1,alphaMap:ut,alphaTest:tt,alphaHash:mt,combine:y.combine,mapUv:te&&g(y.map.channel),aoMapUv:zt&&g(y.aoMap.channel),lightMapUv:Vt&&g(y.lightMap.channel),bumpMapUv:jt&&g(y.bumpMap.channel),normalMapUv:ye&&g(y.normalMap.channel),displacementMapUv:at&&g(y.displacementMap.channel),emissiveMapUv:lt&&g(y.emissiveMap.channel),metalnessMapUv:Et&&g(y.metalnessMap.channel),roughnessMapUv:Kt&&g(y.roughnessMap.channel),anisotropyMapUv:X&&g(y.anisotropyMap.channel),clearcoatMapUv:K&&g(y.clearcoatMap.channel),clearcoatNormalMapUv:rt&&g(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ct&&g(y.clearcoatRoughnessMap.channel),iridescenceMapUv:j&&g(y.iridescenceMap.channel),iridescenceThicknessMapUv:Q&&g(y.iridescenceThicknessMap.channel),sheenColorMapUv:dt&&g(y.sheenColorMap.channel),sheenRoughnessMapUv:Dt&&g(y.sheenRoughnessMap.channel),specularMapUv:gt&&g(y.specularMap.channel),specularColorMapUv:pt&&g(y.specularColorMap.channel),specularIntensityMapUv:Ut&&g(y.specularIntensityMap.channel),transmissionMapUv:kt&&g(y.transmissionMap.channel),thicknessMapUv:Wt&&g(y.thicknessMap.channel),alphaMapUv:ut&&g(y.alphaMap.channel),vertexTangents:!!L.attributes.tangent&&(ye||O),vertexNormals:!!L.attributes.normal,vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!L.attributes.color&&L.attributes.color.itemSize===4,pointsUvs:N.isPoints===!0&&!!L.attributes.uv&&(te||ut),fog:!!R,useFog:y.fog===!0,fogExp2:!!R&&R.isFogExp2,flatShading:y.wireframe===!1&&(y.flatShading===!0||L.attributes.normal===void 0&&ye===!1&&(y.isMeshLambertMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isMeshPhysicalMaterial)),sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:Rt,skinning:N.isSkinnedMesh===!0,hasPositionAttribute:L.attributes.position!==void 0,morphTargets:L.morphAttributes.position!==void 0,morphNormals:L.morphAttributes.normal!==void 0,morphColors:L.morphAttributes.color!==void 0,morphTargetsCount:G,morphTextureStride:ot,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numLightProbeGrids:H.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:y.dithering,shadowMapEnabled:n.shadowMap.enabled&&I.length>0,shadowMapType:n.shadowMap.type,toneMapping:st,decodeVideoTexture:te&&y.map.isVideoTexture===!0&&$t.getTransfer(y.map.colorSpace)===ee,decodeVideoTextureEmissive:lt&&y.emissiveMap.isVideoTexture===!0&&$t.getTransfer(y.emissiveMap.colorSpace)===ee,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===zn,flipSided:y.side===He,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:bt&&y.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(bt&&y.extensions.multiDraw===!0||wt)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return It.vertexUv1s=l.has(1),It.vertexUv2s=l.has(2),It.vertexUv3s=l.has(3),l.clear(),It}function m(y){let E=[];if(y.shaderID?E.push(y.shaderID):(E.push(y.customVertexShaderID),E.push(y.customFragmentShaderID)),y.defines!==void 0)for(let I in y.defines)E.push(I),E.push(y.defines[I]);return y.isRawShaderMaterial===!1&&(f(E,y),b(E,y),E.push(n.outputColorSpace)),E.push(y.customProgramCacheKey),E.join()}function f(y,E){y.push(E.precision),y.push(E.outputColorSpace),y.push(E.envMapMode),y.push(E.envMapCubeUVHeight),y.push(E.mapUv),y.push(E.alphaMapUv),y.push(E.lightMapUv),y.push(E.aoMapUv),y.push(E.bumpMapUv),y.push(E.normalMapUv),y.push(E.displacementMapUv),y.push(E.emissiveMapUv),y.push(E.metalnessMapUv),y.push(E.roughnessMapUv),y.push(E.anisotropyMapUv),y.push(E.clearcoatMapUv),y.push(E.clearcoatNormalMapUv),y.push(E.clearcoatRoughnessMapUv),y.push(E.iridescenceMapUv),y.push(E.iridescenceThicknessMapUv),y.push(E.sheenColorMapUv),y.push(E.sheenRoughnessMapUv),y.push(E.specularMapUv),y.push(E.specularColorMapUv),y.push(E.specularIntensityMapUv),y.push(E.transmissionMapUv),y.push(E.thicknessMapUv),y.push(E.combine),y.push(E.fogExp2),y.push(E.sizeAttenuation),y.push(E.morphTargetsCount),y.push(E.morphAttributeCount),y.push(E.numDirLights),y.push(E.numPointLights),y.push(E.numSpotLights),y.push(E.numSpotLightMaps),y.push(E.numHemiLights),y.push(E.numRectAreaLights),y.push(E.numDirLightShadows),y.push(E.numPointLightShadows),y.push(E.numSpotLightShadows),y.push(E.numSpotLightShadowsWithMaps),y.push(E.numLightProbes),y.push(E.shadowMapType),y.push(E.toneMapping),y.push(E.numClippingPlanes),y.push(E.numClipIntersection),y.push(E.depthPacking)}function b(y,E){a.disableAll(),E.instancing&&a.enable(0),E.instancingColor&&a.enable(1),E.instancingMorph&&a.enable(2),E.matcap&&a.enable(3),E.envMap&&a.enable(4),E.normalMapObjectSpace&&a.enable(5),E.normalMapTangentSpace&&a.enable(6),E.clearcoat&&a.enable(7),E.iridescence&&a.enable(8),E.alphaTest&&a.enable(9),E.vertexColors&&a.enable(10),E.vertexAlphas&&a.enable(11),E.vertexUv1s&&a.enable(12),E.vertexUv2s&&a.enable(13),E.vertexUv3s&&a.enable(14),E.vertexTangents&&a.enable(15),E.anisotropy&&a.enable(16),E.alphaHash&&a.enable(17),E.batching&&a.enable(18),E.dispersion&&a.enable(19),E.batchingColor&&a.enable(20),E.gradientMap&&a.enable(21),E.packedNormalMap&&a.enable(22),E.vertexNormals&&a.enable(23),y.push(a.mask),a.disableAll(),E.fog&&a.enable(0),E.useFog&&a.enable(1),E.flatShading&&a.enable(2),E.logarithmicDepthBuffer&&a.enable(3),E.reversedDepthBuffer&&a.enable(4),E.skinning&&a.enable(5),E.morphTargets&&a.enable(6),E.morphNormals&&a.enable(7),E.morphColors&&a.enable(8),E.premultipliedAlpha&&a.enable(9),E.shadowMapEnabled&&a.enable(10),E.doubleSided&&a.enable(11),E.flipSided&&a.enable(12),E.useDepthPacking&&a.enable(13),E.dithering&&a.enable(14),E.transmission&&a.enable(15),E.sheen&&a.enable(16),E.opaque&&a.enable(17),E.pointsUvs&&a.enable(18),E.decodeVideoTexture&&a.enable(19),E.decodeVideoTextureEmissive&&a.enable(20),E.alphaToCoverage&&a.enable(21),E.numLightProbeGrids>0&&a.enable(22),E.hasPositionAttribute&&a.enable(23),y.push(a.mask)}function T(y){let E=p[y.type],I;if(E){let P=Hn[E];I=Df.clone(P.uniforms)}else I=y.uniforms;return I}function x(y,E){let I=h.get(E);return I!==void 0?++I.usedTimes:(I=new Iv(n,E,y,s),c.push(I),h.set(E,I)),I}function M(y){if(--y.usedTimes===0){let E=c.indexOf(y);c[E]=c[c.length-1],c.pop(),h.delete(y.cacheKey),y.destroy()}}function S(y){o.remove(y)}function w(){o.dispose()}return{getParameters:_,getProgramCacheKey:m,getUniforms:T,acquireProgram:x,releaseProgram:M,releaseShaderCache:S,programs:c,dispose:w}}function Nv(){let n=new WeakMap;function t(a){return n.has(a)}function e(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function i(a){n.delete(a)}function s(a,o,l){n.get(a)[o]=l}function r(){n=new WeakMap}return{has:t,get:e,remove:i,update:s,dispose:r}}function Uv(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.materialVariant!==t.materialVariant?n.materialVariant-t.materialVariant:n.z!==t.z?n.z-t.z:n.id-t.id}function jf(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function Qf(){let n=[],t=0,e=[],i=[],s=[];function r(){t=0,e.length=0,i.length=0,s.length=0}function a(u){let p=0;return u.isInstancedMesh&&(p+=2),u.isSkinnedMesh&&(p+=1),p}function o(u,p,g,_,m,f){let b=n[t];return b===void 0?(b={id:u.id,object:u,geometry:p,material:g,materialVariant:a(u),groupOrder:_,renderOrder:u.renderOrder,z:m,group:f},n[t]=b):(b.id=u.id,b.object=u,b.geometry=p,b.material=g,b.materialVariant=a(u),b.groupOrder=_,b.renderOrder=u.renderOrder,b.z=m,b.group=f),t++,b}function l(u,p,g,_,m,f){let b=o(u,p,g,_,m,f);g.transmission>0?i.push(b):g.transparent===!0?s.push(b):e.push(b)}function c(u,p,g,_,m,f){let b=o(u,p,g,_,m,f);g.transmission>0?i.unshift(b):g.transparent===!0?s.unshift(b):e.unshift(b)}function h(u,p,g){e.length>1&&e.sort(u||Uv),i.length>1&&i.sort(p||jf),s.length>1&&s.sort(p||jf),g&&(e.reverse(),i.reverse(),s.reverse())}function d(){for(let u=t,p=n.length;u<p;u++){let g=n[u];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:e,transmissive:i,transparent:s,init:r,push:l,unshift:c,finish:d,sort:h}}function Fv(){let n=new WeakMap;function t(i,s){let r=n.get(i),a;return r===void 0?(a=new Qf,n.set(i,[a])):s>=r.length?(a=new Qf,r.push(a)):a=r[s],a}function e(){n=new WeakMap}return{get:t,dispose:e}}function Ov(){let n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new V,color:new Jt};break;case"SpotLight":e={position:new V,direction:new V,color:new Jt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new V,color:new Jt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new V,skyColor:new Jt,groundColor:new Jt};break;case"RectAreaLight":e={color:new Jt,position:new V,halfWidth:new V,halfHeight:new V};break}return n[t.id]=e,e}}}function Bv(){let n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ot};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ot};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ot,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}var zv=0;function kv(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function Vv(n){let t=new Ov,e=Bv(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new V);let s=new V,r=new fe,a=new fe;function o(c){let h=0,d=0,u=0;for(let E=0;E<9;E++)i.probe[E].set(0,0,0);let p=0,g=0,_=0,m=0,f=0,b=0,T=0,x=0,M=0,S=0,w=0;c.sort(kv);for(let E=0,I=c.length;E<I;E++){let P=c[E],N=P.color,H=P.intensity,R=P.distance,L=null;if(P.shadow&&P.shadow.map&&(P.shadow.map.texture.format===Ri?L=P.shadow.map.texture:L=P.shadow.map.depthTexture||P.shadow.map.texture),P.isAmbientLight)h+=N.r*H,d+=N.g*H,u+=N.b*H;else if(P.isLightProbe){for(let U=0;U<9;U++)i.probe[U].addScaledVector(P.sh.coefficients[U],H);w++}else if(P.isDirectionalLight){let U=t.get(P);if(U.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){let D=P.shadow,F=e.get(P);F.shadowIntensity=D.intensity,F.shadowBias=D.bias,F.shadowNormalBias=D.normalBias,F.shadowRadius=D.radius,F.shadowMapSize=D.mapSize,i.directionalShadow[p]=F,i.directionalShadowMap[p]=L,i.directionalShadowMatrix[p]=P.shadow.matrix,b++}i.directional[p]=U,p++}else if(P.isSpotLight){let U=t.get(P);U.position.setFromMatrixPosition(P.matrixWorld),U.color.copy(N).multiplyScalar(H),U.distance=R,U.coneCos=Math.cos(P.angle),U.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),U.decay=P.decay,i.spot[_]=U;let D=P.shadow;if(P.map&&(i.spotLightMap[M]=P.map,M++,D.updateMatrices(P),P.castShadow&&S++),i.spotLightMatrix[_]=D.matrix,P.castShadow){let F=e.get(P);F.shadowIntensity=D.intensity,F.shadowBias=D.bias,F.shadowNormalBias=D.normalBias,F.shadowRadius=D.radius,F.shadowMapSize=D.mapSize,i.spotShadow[_]=F,i.spotShadowMap[_]=L,x++}_++}else if(P.isRectAreaLight){let U=t.get(P);U.color.copy(N).multiplyScalar(H),U.halfWidth.set(P.width*.5,0,0),U.halfHeight.set(0,P.height*.5,0),i.rectArea[m]=U,m++}else if(P.isPointLight){let U=t.get(P);if(U.color.copy(P.color).multiplyScalar(P.intensity),U.distance=P.distance,U.decay=P.decay,P.castShadow){let D=P.shadow,F=e.get(P);F.shadowIntensity=D.intensity,F.shadowBias=D.bias,F.shadowNormalBias=D.normalBias,F.shadowRadius=D.radius,F.shadowMapSize=D.mapSize,F.shadowCameraNear=D.camera.near,F.shadowCameraFar=D.camera.far,i.pointShadow[g]=F,i.pointShadowMap[g]=L,i.pointShadowMatrix[g]=P.shadow.matrix,T++}i.point[g]=U,g++}else if(P.isHemisphereLight){let U=t.get(P);U.skyColor.copy(P.color).multiplyScalar(H),U.groundColor.copy(P.groundColor).multiplyScalar(H),i.hemi[f]=U,f++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=_t.LTC_FLOAT_1,i.rectAreaLTC2=_t.LTC_FLOAT_2):(i.rectAreaLTC1=_t.LTC_HALF_1,i.rectAreaLTC2=_t.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=d,i.ambient[2]=u;let y=i.hash;(y.directionalLength!==p||y.pointLength!==g||y.spotLength!==_||y.rectAreaLength!==m||y.hemiLength!==f||y.numDirectionalShadows!==b||y.numPointShadows!==T||y.numSpotShadows!==x||y.numSpotMaps!==M||y.numLightProbes!==w)&&(i.directional.length=p,i.spot.length=_,i.rectArea.length=m,i.point.length=g,i.hemi.length=f,i.directionalShadow.length=b,i.directionalShadowMap.length=b,i.pointShadow.length=T,i.pointShadowMap.length=T,i.spotShadow.length=x,i.spotShadowMap.length=x,i.directionalShadowMatrix.length=b,i.pointShadowMatrix.length=T,i.spotLightMatrix.length=x+M-S,i.spotLightMap.length=M,i.numSpotLightShadowsWithMaps=S,i.numLightProbes=w,y.directionalLength=p,y.pointLength=g,y.spotLength=_,y.rectAreaLength=m,y.hemiLength=f,y.numDirectionalShadows=b,y.numPointShadows=T,y.numSpotShadows=x,y.numSpotMaps=M,y.numLightProbes=w,i.version=zv++)}function l(c,h){let d=0,u=0,p=0,g=0,_=0,m=h.matrixWorldInverse;for(let f=0,b=c.length;f<b;f++){let T=c[f];if(T.isDirectionalLight){let x=i.directional[d];x.direction.setFromMatrixPosition(T.matrixWorld),s.setFromMatrixPosition(T.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(m),d++}else if(T.isSpotLight){let x=i.spot[p];x.position.setFromMatrixPosition(T.matrixWorld),x.position.applyMatrix4(m),x.direction.setFromMatrixPosition(T.matrixWorld),s.setFromMatrixPosition(T.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(m),p++}else if(T.isRectAreaLight){let x=i.rectArea[g];x.position.setFromMatrixPosition(T.matrixWorld),x.position.applyMatrix4(m),a.identity(),r.copy(T.matrixWorld),r.premultiply(m),a.extractRotation(r),x.halfWidth.set(T.width*.5,0,0),x.halfHeight.set(0,T.height*.5,0),x.halfWidth.applyMatrix4(a),x.halfHeight.applyMatrix4(a),g++}else if(T.isPointLight){let x=i.point[u];x.position.setFromMatrixPosition(T.matrixWorld),x.position.applyMatrix4(m),u++}else if(T.isHemisphereLight){let x=i.hemi[_];x.direction.setFromMatrixPosition(T.matrixWorld),x.direction.transformDirection(m),_++}}}return{setup:o,setupView:l,state:i}}function td(n){let t=new Vv(n),e=[],i=[],s=[];function r(u){d.camera=u,e.length=0,i.length=0,s.length=0}function a(u){e.push(u)}function o(u){i.push(u)}function l(u){s.push(u)}function c(){t.setup(e)}function h(u){t.setupView(e,u)}let d={lightsArray:e,shadowsArray:i,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:d,setupLights:c,setupLightsView:h,pushLight:a,pushShadow:o,pushLightProbeGrid:l}}function Gv(n){let t=new WeakMap;function e(s,r=0){let a=t.get(s),o;return a===void 0?(o=new td(n),t.set(s,[o])):r>=a.length?(o=new td(n),a.push(o)):o=a[r],o}function i(){t=new WeakMap}return{get:e,dispose:i}}var Hv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Wv=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,Xv=[new V(1,0,0),new V(-1,0,0),new V(0,1,0),new V(0,-1,0),new V(0,0,1),new V(0,0,-1)],qv=[new V(0,-1,0),new V(0,-1,0),new V(0,0,1),new V(0,0,-1),new V(0,-1,0),new V(0,-1,0)],ed=new fe,Ur=new V,dh=new V;function Yv(n,t,e){let i=new fr,s=new Ot,r=new Ot,a=new de,o=new so,l=new ro,c={},h=e.maxTextureSize,d={[Qn]:He,[He]:Qn,[zn]:zn},u=new rn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ot},radius:{value:4}},vertexShader:Hv,fragmentShader:Wv}),p=u.clone();p.defines.HORIZONTAL_PASS=1;let g=new De;g.setAttribute("position",new qe(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new Ye(g,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=wr;let f=this.type;this.render=function(S,w,y){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||S.length===0)return;this.type===$u&&(Ft("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=wr);let E=n.getRenderTarget(),I=n.getActiveCubeFace(),P=n.getActiveMipmapLevel(),N=n.state;N.setBlending(kn),N.buffers.depth.getReversed()===!0?N.buffers.color.setClear(0,0,0,0):N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);let H=f!==this.type;H&&w.traverse(function(R){R.material&&(Array.isArray(R.material)?R.material.forEach(L=>L.needsUpdate=!0):R.material.needsUpdate=!0)});for(let R=0,L=S.length;R<L;R++){let U=S[R],D=U.shadow;if(D===void 0){Ft("WebGLShadowMap:",U,"has no shadow.");continue}if(D.autoUpdate===!1&&D.needsUpdate===!1)continue;s.copy(D.mapSize);let F=D.getFrameExtents();s.multiply(F),r.copy(D.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/F.x),s.x=r.x*F.x,D.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/F.y),s.y=r.y*F.y,D.mapSize.y=r.y));let W=n.state.buffers.depth.getReversed();if(D.camera._reversedDepth=W,D.map===null||H===!0){if(D.map!==null&&(D.map.depthTexture!==null&&(D.map.depthTexture.dispose(),D.map.depthTexture=null),D.map.dispose()),this.type===Ls){if(U.isPointLight){Ft("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}D.map=new sn(s.x,s.y,{format:Ri,type:Vn,minFilter:Pe,magFilter:Pe,generateMipmaps:!1}),D.map.texture.name=U.name+".shadowMap",D.map.depthTexture=new ei(s.x,s.y,En),D.map.depthTexture.name=U.name+".shadowMapDepth",D.map.depthTexture.format=On,D.map.depthTexture.compareFunction=null,D.map.depthTexture.minFilter=Ce,D.map.depthTexture.magFilter=Ce}else U.isPointLight?(D.map=new ul(s.x),D.map.depthTexture=new no(s.x,wn)):(D.map=new sn(s.x,s.y),D.map.depthTexture=new ei(s.x,s.y,wn)),D.map.depthTexture.name=U.name+".shadowMap",D.map.depthTexture.format=On,this.type===wr?(D.map.depthTexture.compareFunction=W?ol:al,D.map.depthTexture.minFilter=Pe,D.map.depthTexture.magFilter=Pe):(D.map.depthTexture.compareFunction=null,D.map.depthTexture.minFilter=Ce,D.map.depthTexture.magFilter=Ce);D.camera.updateProjectionMatrix()}let $=D.map.isWebGLCubeRenderTarget?6:1;for(let et=0;et<$;et++){if(D.map.isWebGLCubeRenderTarget)n.setRenderTarget(D.map,et),n.clear();else{et===0&&(n.setRenderTarget(D.map),n.clear());let G=D.getViewport(et);a.set(r.x*G.x,r.y*G.y,r.x*G.z,r.y*G.w),N.viewport(a)}if(U.isPointLight){let G=D.camera,ot=D.matrix,ft=U.distance||G.far;ft!==G.far&&(G.far=ft,G.updateProjectionMatrix()),Ur.setFromMatrixPosition(U.matrixWorld),G.position.copy(Ur),dh.copy(G.position),dh.add(Xv[et]),G.up.copy(qv[et]),G.lookAt(dh),G.updateMatrixWorld(),ot.makeTranslation(-Ur.x,-Ur.y,-Ur.z),ed.multiplyMatrices(G.projectionMatrix,G.matrixWorldInverse),D._frustum.setFromProjectionMatrix(ed,G.coordinateSystem,G.reversedDepth)}else D.updateMatrices(U);i=D.getFrustum(),x(w,y,D.camera,U,this.type)}D.isPointLightShadow!==!0&&this.type===Ls&&b(D,y),D.needsUpdate=!1}f=this.type,m.needsUpdate=!1,n.setRenderTarget(E,I,P)};function b(S,w){let y=t.update(_);u.defines.VSM_SAMPLES!==S.blurSamples&&(u.defines.VSM_SAMPLES=S.blurSamples,p.defines.VSM_SAMPLES=S.blurSamples,u.needsUpdate=!0,p.needsUpdate=!0),S.mapPass===null&&(S.mapPass=new sn(s.x,s.y,{format:Ri,type:Vn})),u.uniforms.shadow_pass.value=S.map.depthTexture,u.uniforms.resolution.value=S.mapSize,u.uniforms.radius.value=S.radius,n.setRenderTarget(S.mapPass),n.clear(),n.renderBufferDirect(w,null,y,u,_,null),p.uniforms.shadow_pass.value=S.mapPass.texture,p.uniforms.resolution.value=S.mapSize,p.uniforms.radius.value=S.radius,n.setRenderTarget(S.map),n.clear(),n.renderBufferDirect(w,null,y,p,_,null)}function T(S,w,y,E){let I=null,P=y.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if(P!==void 0)I=P;else if(I=y.isPointLight===!0?l:o,n.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0||w.alphaToCoverage===!0){let N=I.uuid,H=w.uuid,R=c[N];R===void 0&&(R={},c[N]=R);let L=R[H];L===void 0&&(L=I.clone(),R[H]=L,w.addEventListener("dispose",M)),I=L}if(I.visible=w.visible,I.wireframe=w.wireframe,E===Ls?I.side=w.shadowSide!==null?w.shadowSide:w.side:I.side=w.shadowSide!==null?w.shadowSide:d[w.side],I.alphaMap=w.alphaMap,I.alphaTest=w.alphaToCoverage===!0?.5:w.alphaTest,I.map=w.map,I.clipShadows=w.clipShadows,I.clippingPlanes=w.clippingPlanes,I.clipIntersection=w.clipIntersection,I.displacementMap=w.displacementMap,I.displacementScale=w.displacementScale,I.displacementBias=w.displacementBias,I.wireframeLinewidth=w.wireframeLinewidth,I.linewidth=w.linewidth,y.isPointLight===!0&&I.isMeshDistanceMaterial===!0){let N=n.properties.get(I);N.light=y}return I}function x(S,w,y,E,I){if(S.visible===!1)return;if(S.layers.test(w.layers)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&I===Ls)&&(!S.frustumCulled||i.intersectsObject(S))){S.modelViewMatrix.multiplyMatrices(y.matrixWorldInverse,S.matrixWorld);let H=t.update(S),R=S.material;if(Array.isArray(R)){let L=H.groups;for(let U=0,D=L.length;U<D;U++){let F=L[U],W=R[F.materialIndex];if(W&&W.visible){let $=T(S,W,E,I);S.onBeforeShadow(n,S,w,y,H,$,F),n.renderBufferDirect(y,null,H,$,S,F),S.onAfterShadow(n,S,w,y,H,$,F)}}}else if(R.visible){let L=T(S,R,E,I);S.onBeforeShadow(n,S,w,y,H,L,null),n.renderBufferDirect(y,null,H,L,S,null),S.onAfterShadow(n,S,w,y,H,L,null)}}let N=S.children;for(let H=0,R=N.length;H<R;H++)x(N[H],w,y,E,I)}function M(S){S.target.removeEventListener("dispose",M);for(let y in c){let E=c[y],I=S.target.uuid;I in E&&(E[I].dispose(),delete E[I])}}}function Zv(n,t){function e(){let B=!1,ut=new de,tt=null,mt=new de(0,0,0,0);return{setMask:function(bt){tt!==bt&&!B&&(n.colorMask(bt,bt,bt,bt),tt=bt)},setLocked:function(bt){B=bt},setClear:function(bt,st,It,Tt,pe){pe===!0&&(bt*=Tt,st*=Tt,It*=Tt),ut.set(bt,st,It,Tt),mt.equals(ut)===!1&&(n.clearColor(bt,st,It,Tt),mt.copy(ut))},reset:function(){B=!1,tt=null,mt.set(-1,0,0,0)}}}function i(){let B=!1,ut=!1,tt=null,mt=null,bt=null;return{setReversed:function(st){if(ut!==st){let It=t.get("EXT_clip_control");st?It.clipControlEXT(It.LOWER_LEFT_EXT,It.ZERO_TO_ONE_EXT):It.clipControlEXT(It.LOWER_LEFT_EXT,It.NEGATIVE_ONE_TO_ONE_EXT),ut=st;let Tt=bt;bt=null,this.setClear(Tt)}},getReversed:function(){return ut},setTest:function(st){st?nt(n.DEPTH_TEST):Rt(n.DEPTH_TEST)},setMask:function(st){tt!==st&&!B&&(n.depthMask(st),tt=st)},setFunc:function(st){if(ut&&(st=Rf[st]),mt!==st){switch(st){case Oa:n.depthFunc(n.NEVER);break;case Ba:n.depthFunc(n.ALWAYS);break;case za:n.depthFunc(n.LESS);break;case Xi:n.depthFunc(n.LEQUAL);break;case ka:n.depthFunc(n.EQUAL);break;case Va:n.depthFunc(n.GEQUAL);break;case Ga:n.depthFunc(n.GREATER);break;case Ha:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}mt=st}},setLocked:function(st){B=st},setClear:function(st){bt!==st&&(bt=st,ut&&(st=1-st),n.clearDepth(st))},reset:function(){B=!1,tt=null,mt=null,bt=null,ut=!1}}}function s(){let B=!1,ut=null,tt=null,mt=null,bt=null,st=null,It=null,Tt=null,pe=null;return{setTest:function(ce){B||(ce?nt(n.STENCIL_TEST):Rt(n.STENCIL_TEST))},setMask:function(ce){ut!==ce&&!B&&(n.stencilMask(ce),ut=ce)},setFunc:function(ce,Dn,Ln){(tt!==ce||mt!==Dn||bt!==Ln)&&(n.stencilFunc(ce,Dn,Ln),tt=ce,mt=Dn,bt=Ln)},setOp:function(ce,Dn,Ln){(st!==ce||It!==Dn||Tt!==Ln)&&(n.stencilOp(ce,Dn,Ln),st=ce,It=Dn,Tt=Ln)},setLocked:function(ce){B=ce},setClear:function(ce){pe!==ce&&(n.clearStencil(ce),pe=ce)},reset:function(){B=!1,ut=null,tt=null,mt=null,bt=null,st=null,It=null,Tt=null,pe=null}}}let r=new e,a=new i,o=new s,l=new WeakMap,c=new WeakMap,h={},d={},u={},p=new WeakMap,g=[],_=null,m=!1,f=null,b=null,T=null,x=null,M=null,S=null,w=null,y=new Jt(0,0,0),E=0,I=!1,P=null,N=null,H=null,R=null,L=null,U=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),D=!1,F=0,W=n.getParameter(n.VERSION);W.indexOf("WebGL")!==-1?(F=parseFloat(/^WebGL (\d)/.exec(W)[1]),D=F>=1):W.indexOf("OpenGL ES")!==-1&&(F=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),D=F>=2);let $=null,et={},G=n.getParameter(n.SCISSOR_BOX),ot=n.getParameter(n.VIEWPORT),ft=new de().fromArray(G),yt=new de().fromArray(ot);function Z(B,ut,tt,mt){let bt=new Uint8Array(4),st=n.createTexture();n.bindTexture(B,st),n.texParameteri(B,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(B,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let It=0;It<tt;It++)B===n.TEXTURE_3D||B===n.TEXTURE_2D_ARRAY?n.texImage3D(ut,0,n.RGBA,1,1,mt,0,n.RGBA,n.UNSIGNED_BYTE,bt):n.texImage2D(ut+It,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,bt);return st}let it={};it[n.TEXTURE_2D]=Z(n.TEXTURE_2D,n.TEXTURE_2D,1),it[n.TEXTURE_CUBE_MAP]=Z(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),it[n.TEXTURE_2D_ARRAY]=Z(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),it[n.TEXTURE_3D]=Z(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),nt(n.DEPTH_TEST),a.setFunc(Xi),jt(!1),ye(Ic),nt(n.CULL_FACE),zt(kn);function nt(B){h[B]!==!0&&(n.enable(B),h[B]=!0)}function Rt(B){h[B]!==!1&&(n.disable(B),h[B]=!1)}function Pt(B,ut){return u[B]!==ut?(n.bindFramebuffer(B,ut),u[B]=ut,B===n.DRAW_FRAMEBUFFER&&(u[n.FRAMEBUFFER]=ut),B===n.FRAMEBUFFER&&(u[n.DRAW_FRAMEBUFFER]=ut),!0):!1}function wt(B,ut){let tt=g,mt=!1;if(B){tt=p.get(ut),tt===void 0&&(tt=[],p.set(ut,tt));let bt=B.textures;if(tt.length!==bt.length||tt[0]!==n.COLOR_ATTACHMENT0){for(let st=0,It=bt.length;st<It;st++)tt[st]=n.COLOR_ATTACHMENT0+st;tt.length=bt.length,mt=!0}}else tt[0]!==n.BACK&&(tt[0]=n.BACK,mt=!0);mt&&n.drawBuffers(tt)}function te(B){return _!==B?(n.useProgram(B),_=B,!0):!1}let ht={[_i]:n.FUNC_ADD,[Ku]:n.FUNC_SUBTRACT,[ju]:n.FUNC_REVERSE_SUBTRACT};ht[Qu]=n.MIN,ht[tf]=n.MAX;let At={[ef]:n.ZERO,[nf]:n.ONE,[sf]:n.SRC_COLOR,[Ua]:n.SRC_ALPHA,[hf]:n.SRC_ALPHA_SATURATE,[lf]:n.DST_COLOR,[af]:n.DST_ALPHA,[rf]:n.ONE_MINUS_SRC_COLOR,[Fa]:n.ONE_MINUS_SRC_ALPHA,[cf]:n.ONE_MINUS_DST_COLOR,[of]:n.ONE_MINUS_DST_ALPHA,[uf]:n.CONSTANT_COLOR,[ff]:n.ONE_MINUS_CONSTANT_COLOR,[df]:n.CONSTANT_ALPHA,[pf]:n.ONE_MINUS_CONSTANT_ALPHA};function zt(B,ut,tt,mt,bt,st,It,Tt,pe,ce){if(B===kn){m===!0&&(Rt(n.BLEND),m=!1);return}if(m===!1&&(nt(n.BLEND),m=!0),B!==Ju){if(B!==f||ce!==I){if((b!==_i||M!==_i)&&(n.blendEquation(n.FUNC_ADD),b=_i,M=_i),ce)switch(B){case Wi:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Er:n.blendFunc(n.ONE,n.ONE);break;case Pc:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Dc:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:Bt("WebGLState: Invalid blending: ",B);break}else switch(B){case Wi:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Er:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case Pc:Bt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Dc:Bt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Bt("WebGLState: Invalid blending: ",B);break}T=null,x=null,S=null,w=null,y.set(0,0,0),E=0,f=B,I=ce}return}bt=bt||ut,st=st||tt,It=It||mt,(ut!==b||bt!==M)&&(n.blendEquationSeparate(ht[ut],ht[bt]),b=ut,M=bt),(tt!==T||mt!==x||st!==S||It!==w)&&(n.blendFuncSeparate(At[tt],At[mt],At[st],At[It]),T=tt,x=mt,S=st,w=It),(Tt.equals(y)===!1||pe!==E)&&(n.blendColor(Tt.r,Tt.g,Tt.b,pe),y.copy(Tt),E=pe),f=B,I=!1}function Vt(B,ut){B.side===zn?Rt(n.CULL_FACE):nt(n.CULL_FACE);let tt=B.side===He;ut&&(tt=!tt),jt(tt),B.blending===Wi&&B.transparent===!1?zt(kn):zt(B.blending,B.blendEquation,B.blendSrc,B.blendDst,B.blendEquationAlpha,B.blendSrcAlpha,B.blendDstAlpha,B.blendColor,B.blendAlpha,B.premultipliedAlpha),a.setFunc(B.depthFunc),a.setTest(B.depthTest),a.setMask(B.depthWrite),r.setMask(B.colorWrite);let mt=B.stencilWrite;o.setTest(mt),mt&&(o.setMask(B.stencilWriteMask),o.setFunc(B.stencilFunc,B.stencilRef,B.stencilFuncMask),o.setOp(B.stencilFail,B.stencilZFail,B.stencilZPass)),lt(B.polygonOffset,B.polygonOffsetFactor,B.polygonOffsetUnits),B.alphaToCoverage===!0?nt(n.SAMPLE_ALPHA_TO_COVERAGE):Rt(n.SAMPLE_ALPHA_TO_COVERAGE)}function jt(B){P!==B&&(B?n.frontFace(n.CW):n.frontFace(n.CCW),P=B)}function ye(B){B!==Yu?(nt(n.CULL_FACE),B!==N&&(B===Ic?n.cullFace(n.BACK):B===Zu?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Rt(n.CULL_FACE),N=B}function at(B){B!==H&&(D&&n.lineWidth(B),H=B)}function lt(B,ut,tt){B?(nt(n.POLYGON_OFFSET_FILL),(R!==ut||L!==tt)&&(R=ut,L=tt,a.getReversed()&&(ut=-ut),n.polygonOffset(ut,tt))):Rt(n.POLYGON_OFFSET_FILL)}function Et(B){B?nt(n.SCISSOR_TEST):Rt(n.SCISSOR_TEST)}function Kt(B){B===void 0&&(B=n.TEXTURE0+U-1),$!==B&&(n.activeTexture(B),$=B)}function O(B,ut,tt){tt===void 0&&($===null?tt=n.TEXTURE0+U-1:tt=$);let mt=et[tt];mt===void 0&&(mt={type:void 0,texture:void 0},et[tt]=mt),(mt.type!==B||mt.texture!==ut)&&($!==tt&&(n.activeTexture(tt),$=tt),n.bindTexture(B,ut||it[B]),mt.type=B,mt.texture=ut)}function ae(){let B=et[$];B!==void 0&&B.type!==void 0&&(n.bindTexture(B.type,null),B.type=void 0,B.texture=void 0)}function Ht(){try{n.compressedTexImage2D(...arguments)}catch(B){Bt("WebGLState:",B)}}function C(){try{n.compressedTexImage3D(...arguments)}catch(B){Bt("WebGLState:",B)}}function v(){try{n.texSubImage2D(...arguments)}catch(B){Bt("WebGLState:",B)}}function k(){try{n.texSubImage3D(...arguments)}catch(B){Bt("WebGLState:",B)}}function X(){try{n.compressedTexSubImage2D(...arguments)}catch(B){Bt("WebGLState:",B)}}function K(){try{n.compressedTexSubImage3D(...arguments)}catch(B){Bt("WebGLState:",B)}}function rt(){try{n.texStorage2D(...arguments)}catch(B){Bt("WebGLState:",B)}}function ct(){try{n.texStorage3D(...arguments)}catch(B){Bt("WebGLState:",B)}}function j(){try{n.texImage2D(...arguments)}catch(B){Bt("WebGLState:",B)}}function Q(){try{n.texImage3D(...arguments)}catch(B){Bt("WebGLState:",B)}}function dt(B){return d[B]!==void 0?d[B]:n.getParameter(B)}function Dt(B,ut){d[B]!==ut&&(n.pixelStorei(B,ut),d[B]=ut)}function gt(B){ft.equals(B)===!1&&(n.scissor(B.x,B.y,B.z,B.w),ft.copy(B))}function pt(B){yt.equals(B)===!1&&(n.viewport(B.x,B.y,B.z,B.w),yt.copy(B))}function Ut(B,ut){let tt=c.get(ut);tt===void 0&&(tt=new WeakMap,c.set(ut,tt));let mt=tt.get(B);mt===void 0&&(mt=n.getUniformBlockIndex(ut,B.name),tt.set(B,mt))}function kt(B,ut){let mt=c.get(ut).get(B);l.get(ut)!==mt&&(n.uniformBlockBinding(ut,mt,B.__bindingPointIndex),l.set(ut,mt))}function Wt(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),h={},d={},$=null,et={},u={},p=new WeakMap,g=[],_=null,m=!1,f=null,b=null,T=null,x=null,M=null,S=null,w=null,y=new Jt(0,0,0),E=0,I=!1,P=null,N=null,H=null,R=null,L=null,ft.set(0,0,n.canvas.width,n.canvas.height),yt.set(0,0,n.canvas.width,n.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:nt,disable:Rt,bindFramebuffer:Pt,drawBuffers:wt,useProgram:te,setBlending:zt,setMaterial:Vt,setFlipSided:jt,setCullFace:ye,setLineWidth:at,setPolygonOffset:lt,setScissorTest:Et,activeTexture:Kt,bindTexture:O,unbindTexture:ae,compressedTexImage2D:Ht,compressedTexImage3D:C,texImage2D:j,texImage3D:Q,pixelStorei:Dt,getParameter:dt,updateUBOMapping:Ut,uniformBlockBinding:kt,texStorage2D:rt,texStorage3D:ct,texSubImage2D:v,texSubImage3D:k,compressedTexSubImage2D:X,compressedTexSubImage3D:K,scissor:gt,viewport:pt,reset:Wt}}function $v(n,t,e,i,s,r,a){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator=="undefined"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ot,h=new WeakMap,d=new Set,u,p=new WeakMap,g=!1;try{g=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch(C){}function _(C,v){return g?new OffscreenCanvas(C,v):rr("canvas")}function m(C,v,k){let X=1,K=Ht(C);if((K.width>k||K.height>k)&&(X=k/Math.max(K.width,K.height)),X<1)if(typeof HTMLImageElement!="undefined"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&C instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&C instanceof ImageBitmap||typeof VideoFrame!="undefined"&&C instanceof VideoFrame){let rt=Math.floor(X*K.width),ct=Math.floor(X*K.height);u===void 0&&(u=_(rt,ct));let j=v?_(rt,ct):u;return j.width=rt,j.height=ct,j.getContext("2d").drawImage(C,0,0,rt,ct),Ft("WebGLRenderer: Texture has been resized from ("+K.width+"x"+K.height+") to ("+rt+"x"+ct+")."),j}else return"data"in C&&Ft("WebGLRenderer: Image in DataTexture is too big ("+K.width+"x"+K.height+")."),C;return C}function f(C){return C.generateMipmaps}function b(C){n.generateMipmap(C)}function T(C){return C.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?n.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function x(C,v,k,X,K,rt=!1){if(C!==null){if(n[C]!==void 0)return n[C];Ft("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let ct;X&&(ct=t.get("EXT_texture_norm16"),ct||Ft("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let j=v;if(v===n.RED&&(k===n.FLOAT&&(j=n.R32F),k===n.HALF_FLOAT&&(j=n.R16F),k===n.UNSIGNED_BYTE&&(j=n.R8),k===n.UNSIGNED_SHORT&&ct&&(j=ct.R16_EXT),k===n.SHORT&&ct&&(j=ct.R16_SNORM_EXT)),v===n.RED_INTEGER&&(k===n.UNSIGNED_BYTE&&(j=n.R8UI),k===n.UNSIGNED_SHORT&&(j=n.R16UI),k===n.UNSIGNED_INT&&(j=n.R32UI),k===n.BYTE&&(j=n.R8I),k===n.SHORT&&(j=n.R16I),k===n.INT&&(j=n.R32I)),v===n.RG&&(k===n.FLOAT&&(j=n.RG32F),k===n.HALF_FLOAT&&(j=n.RG16F),k===n.UNSIGNED_BYTE&&(j=n.RG8),k===n.UNSIGNED_SHORT&&ct&&(j=ct.RG16_EXT),k===n.SHORT&&ct&&(j=ct.RG16_SNORM_EXT)),v===n.RG_INTEGER&&(k===n.UNSIGNED_BYTE&&(j=n.RG8UI),k===n.UNSIGNED_SHORT&&(j=n.RG16UI),k===n.UNSIGNED_INT&&(j=n.RG32UI),k===n.BYTE&&(j=n.RG8I),k===n.SHORT&&(j=n.RG16I),k===n.INT&&(j=n.RG32I)),v===n.RGB_INTEGER&&(k===n.UNSIGNED_BYTE&&(j=n.RGB8UI),k===n.UNSIGNED_SHORT&&(j=n.RGB16UI),k===n.UNSIGNED_INT&&(j=n.RGB32UI),k===n.BYTE&&(j=n.RGB8I),k===n.SHORT&&(j=n.RGB16I),k===n.INT&&(j=n.RGB32I)),v===n.RGBA_INTEGER&&(k===n.UNSIGNED_BYTE&&(j=n.RGBA8UI),k===n.UNSIGNED_SHORT&&(j=n.RGBA16UI),k===n.UNSIGNED_INT&&(j=n.RGBA32UI),k===n.BYTE&&(j=n.RGBA8I),k===n.SHORT&&(j=n.RGBA16I),k===n.INT&&(j=n.RGBA32I)),v===n.RGB&&(k===n.UNSIGNED_SHORT&&ct&&(j=ct.RGB16_EXT),k===n.SHORT&&ct&&(j=ct.RGB16_SNORM_EXT),k===n.UNSIGNED_INT_5_9_9_9_REV&&(j=n.RGB9_E5),k===n.UNSIGNED_INT_10F_11F_11F_REV&&(j=n.R11F_G11F_B10F)),v===n.RGBA){let Q=rt?ir:$t.getTransfer(K);k===n.FLOAT&&(j=n.RGBA32F),k===n.HALF_FLOAT&&(j=n.RGBA16F),k===n.UNSIGNED_BYTE&&(j=Q===ee?n.SRGB8_ALPHA8:n.RGBA8),k===n.UNSIGNED_SHORT&&ct&&(j=ct.RGBA16_EXT),k===n.SHORT&&ct&&(j=ct.RGBA16_SNORM_EXT),k===n.UNSIGNED_SHORT_4_4_4_4&&(j=n.RGBA4),k===n.UNSIGNED_SHORT_5_5_5_1&&(j=n.RGB5_A1)}return(j===n.R16F||j===n.R32F||j===n.RG16F||j===n.RG32F||j===n.RGBA16F||j===n.RGBA32F)&&t.get("EXT_color_buffer_float"),j}function M(C,v){let k;return C?v===null||v===wn||v===Us?k=n.DEPTH24_STENCIL8:v===En?k=n.DEPTH32F_STENCIL8:v===Ns&&(k=n.DEPTH24_STENCIL8,Ft("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===wn||v===Us?k=n.DEPTH_COMPONENT24:v===En?k=n.DEPTH_COMPONENT32F:v===Ns&&(k=n.DEPTH_COMPONENT16),k}function S(C,v){return f(C)===!0||C.isFramebufferTexture&&C.minFilter!==Ce&&C.minFilter!==Pe?Math.log2(Math.max(v.width,v.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?v.mipmaps.length:1}function w(C){let v=C.target;v.removeEventListener("dispose",w),E(v),v.isVideoTexture&&h.delete(v),v.isHTMLTexture&&d.delete(v)}function y(C){let v=C.target;v.removeEventListener("dispose",y),P(v)}function E(C){let v=i.get(C);if(v.__webglInit===void 0)return;let k=C.source,X=p.get(k);if(X){let K=X[v.__cacheKey];K.usedTimes--,K.usedTimes===0&&I(C),Object.keys(X).length===0&&p.delete(k)}i.remove(C)}function I(C){let v=i.get(C);n.deleteTexture(v.__webglTexture);let k=C.source,X=p.get(k);delete X[v.__cacheKey],a.memory.textures--}function P(C){let v=i.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),i.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let X=0;X<6;X++){if(Array.isArray(v.__webglFramebuffer[X]))for(let K=0;K<v.__webglFramebuffer[X].length;K++)n.deleteFramebuffer(v.__webglFramebuffer[X][K]);else n.deleteFramebuffer(v.__webglFramebuffer[X]);v.__webglDepthbuffer&&n.deleteRenderbuffer(v.__webglDepthbuffer[X])}else{if(Array.isArray(v.__webglFramebuffer))for(let X=0;X<v.__webglFramebuffer.length;X++)n.deleteFramebuffer(v.__webglFramebuffer[X]);else n.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&n.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&n.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let X=0;X<v.__webglColorRenderbuffer.length;X++)v.__webglColorRenderbuffer[X]&&n.deleteRenderbuffer(v.__webglColorRenderbuffer[X]);v.__webglDepthRenderbuffer&&n.deleteRenderbuffer(v.__webglDepthRenderbuffer)}let k=C.textures;for(let X=0,K=k.length;X<K;X++){let rt=i.get(k[X]);rt.__webglTexture&&(n.deleteTexture(rt.__webglTexture),a.memory.textures--),i.remove(k[X])}i.remove(C)}let N=0;function H(){N=0}function R(){return N}function L(C){N=C}function U(){let C=N;return C>=s.maxTextures&&Ft("WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+s.maxTextures),N+=1,C}function D(C){let v=[];return v.push(C.wrapS),v.push(C.wrapT),v.push(C.wrapR||0),v.push(C.magFilter),v.push(C.minFilter),v.push(C.anisotropy),v.push(C.internalFormat),v.push(C.format),v.push(C.type),v.push(C.generateMipmaps),v.push(C.premultiplyAlpha),v.push(C.flipY),v.push(C.unpackAlignment),v.push(C.colorSpace),v.join()}function F(C,v){let k=i.get(C);if(C.isVideoTexture&&O(C),C.isRenderTargetTexture===!1&&C.isExternalTexture!==!0&&C.version>0&&k.__version!==C.version){let X=C.image;if(X===null)Ft("WebGLRenderer: Texture marked for update but no image data found.");else if(X.complete===!1)Ft("WebGLRenderer: Texture marked for update but image is incomplete");else{Rt(k,C,v);return}}else C.isExternalTexture&&(k.__webglTexture=C.sourceTexture?C.sourceTexture:null);e.bindTexture(n.TEXTURE_2D,k.__webglTexture,n.TEXTURE0+v)}function W(C,v){let k=i.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&k.__version!==C.version){Rt(k,C,v);return}else C.isExternalTexture&&(k.__webglTexture=C.sourceTexture?C.sourceTexture:null);e.bindTexture(n.TEXTURE_2D_ARRAY,k.__webglTexture,n.TEXTURE0+v)}function $(C,v){let k=i.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&k.__version!==C.version){Rt(k,C,v);return}e.bindTexture(n.TEXTURE_3D,k.__webglTexture,n.TEXTURE0+v)}function et(C,v){let k=i.get(C);if(C.isCubeDepthTexture!==!0&&C.version>0&&k.__version!==C.version){Pt(k,C,v);return}e.bindTexture(n.TEXTURE_CUBE_MAP,k.__webglTexture,n.TEXTURE0+v)}let G={[Wa]:n.REPEAT,[Fn]:n.CLAMP_TO_EDGE,[Xa]:n.MIRRORED_REPEAT},ot={[Ce]:n.NEAREST,[_f]:n.NEAREST_MIPMAP_NEAREST,[Ar]:n.NEAREST_MIPMAP_LINEAR,[Pe]:n.LINEAR,[So]:n.LINEAR_MIPMAP_NEAREST,[Ai]:n.LINEAR_MIPMAP_LINEAR},ft={[vf]:n.NEVER,[Ef]:n.ALWAYS,[bf]:n.LESS,[al]:n.LEQUAL,[Mf]:n.EQUAL,[ol]:n.GEQUAL,[Sf]:n.GREATER,[wf]:n.NOTEQUAL};function yt(C,v){if(v.type===En&&t.has("OES_texture_float_linear")===!1&&(v.magFilter===Pe||v.magFilter===So||v.magFilter===Ar||v.magFilter===Ai||v.minFilter===Pe||v.minFilter===So||v.minFilter===Ar||v.minFilter===Ai)&&Ft("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(C,n.TEXTURE_WRAP_S,G[v.wrapS]),n.texParameteri(C,n.TEXTURE_WRAP_T,G[v.wrapT]),(C===n.TEXTURE_3D||C===n.TEXTURE_2D_ARRAY)&&n.texParameteri(C,n.TEXTURE_WRAP_R,G[v.wrapR]),n.texParameteri(C,n.TEXTURE_MAG_FILTER,ot[v.magFilter]),n.texParameteri(C,n.TEXTURE_MIN_FILTER,ot[v.minFilter]),v.compareFunction&&(n.texParameteri(C,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(C,n.TEXTURE_COMPARE_FUNC,ft[v.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===Ce||v.minFilter!==Ar&&v.minFilter!==Ai||v.type===En&&t.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||i.get(v).__currentAnisotropy){let k=t.get("EXT_texture_filter_anisotropic");n.texParameterf(C,k.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,s.getMaxAnisotropy())),i.get(v).__currentAnisotropy=v.anisotropy}}}function Z(C,v){let k=!1;C.__webglInit===void 0&&(C.__webglInit=!0,v.addEventListener("dispose",w));let X=v.source,K=p.get(X);K===void 0&&(K={},p.set(X,K));let rt=D(v);if(rt!==C.__cacheKey){K[rt]===void 0&&(K[rt]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,k=!0),K[rt].usedTimes++;let ct=K[C.__cacheKey];ct!==void 0&&(K[C.__cacheKey].usedTimes--,ct.usedTimes===0&&I(v)),C.__cacheKey=rt,C.__webglTexture=K[rt].texture}return k}function it(C,v,k){return Math.floor(Math.floor(C/k)/v)}function nt(C,v,k,X){let rt=C.updateRanges;if(rt.length===0)e.texSubImage2D(n.TEXTURE_2D,0,0,0,v.width,v.height,k,X,v.data);else{rt.sort((Dt,gt)=>Dt.start-gt.start);let ct=0;for(let Dt=1;Dt<rt.length;Dt++){let gt=rt[ct],pt=rt[Dt],Ut=gt.start+gt.count,kt=it(pt.start,v.width,4),Wt=it(gt.start,v.width,4);pt.start<=Ut+1&&kt===Wt&&it(pt.start+pt.count-1,v.width,4)===kt?gt.count=Math.max(gt.count,pt.start+pt.count-gt.start):(++ct,rt[ct]=pt)}rt.length=ct+1;let j=e.getParameter(n.UNPACK_ROW_LENGTH),Q=e.getParameter(n.UNPACK_SKIP_PIXELS),dt=e.getParameter(n.UNPACK_SKIP_ROWS);e.pixelStorei(n.UNPACK_ROW_LENGTH,v.width);for(let Dt=0,gt=rt.length;Dt<gt;Dt++){let pt=rt[Dt],Ut=Math.floor(pt.start/4),kt=Math.ceil(pt.count/4),Wt=Ut%v.width,B=Math.floor(Ut/v.width),ut=kt,tt=1;e.pixelStorei(n.UNPACK_SKIP_PIXELS,Wt),e.pixelStorei(n.UNPACK_SKIP_ROWS,B),e.texSubImage2D(n.TEXTURE_2D,0,Wt,B,ut,tt,k,X,v.data)}C.clearUpdateRanges(),e.pixelStorei(n.UNPACK_ROW_LENGTH,j),e.pixelStorei(n.UNPACK_SKIP_PIXELS,Q),e.pixelStorei(n.UNPACK_SKIP_ROWS,dt)}}function Rt(C,v,k){let X=n.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(X=n.TEXTURE_2D_ARRAY),v.isData3DTexture&&(X=n.TEXTURE_3D);let K=Z(C,v),rt=v.source;e.bindTexture(X,C.__webglTexture,n.TEXTURE0+k);let ct=i.get(rt);if(rt.version!==ct.__version||K===!0){if(e.activeTexture(n.TEXTURE0+k),(typeof ImageBitmap!="undefined"&&v.image instanceof ImageBitmap)===!1){let tt=$t.getPrimaries($t.workingColorSpace),mt=v.colorSpace===ni?null:$t.getPrimaries(v.colorSpace),bt=v.colorSpace===ni||tt===mt?n.NONE:n.BROWSER_DEFAULT_WEBGL;e.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),e.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),e.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,bt)}e.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment);let Q=m(v.image,!1,s.maxTextureSize);Q=ae(v,Q);let dt=r.convert(v.format,v.colorSpace),Dt=r.convert(v.type),gt=x(v.internalFormat,dt,Dt,v.normalized,v.colorSpace,v.isVideoTexture);yt(X,v);let pt,Ut=v.mipmaps,kt=v.isVideoTexture!==!0,Wt=ct.__version===void 0||K===!0,B=rt.dataReady,ut=S(v,Q);if(v.isDepthTexture)gt=M(v.format===Ci,v.type),Wt&&(kt?e.texStorage2D(n.TEXTURE_2D,1,gt,Q.width,Q.height):e.texImage2D(n.TEXTURE_2D,0,gt,Q.width,Q.height,0,dt,Dt,null));else if(v.isDataTexture)if(Ut.length>0){kt&&Wt&&e.texStorage2D(n.TEXTURE_2D,ut,gt,Ut[0].width,Ut[0].height);for(let tt=0,mt=Ut.length;tt<mt;tt++)pt=Ut[tt],kt?B&&e.texSubImage2D(n.TEXTURE_2D,tt,0,0,pt.width,pt.height,dt,Dt,pt.data):e.texImage2D(n.TEXTURE_2D,tt,gt,pt.width,pt.height,0,dt,Dt,pt.data);v.generateMipmaps=!1}else kt?(Wt&&e.texStorage2D(n.TEXTURE_2D,ut,gt,Q.width,Q.height),B&&nt(v,Q,dt,Dt)):e.texImage2D(n.TEXTURE_2D,0,gt,Q.width,Q.height,0,dt,Dt,Q.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){kt&&Wt&&e.texStorage3D(n.TEXTURE_2D_ARRAY,ut,gt,Ut[0].width,Ut[0].height,Q.depth);for(let tt=0,mt=Ut.length;tt<mt;tt++)if(pt=Ut[tt],v.format!==un)if(dt!==null)if(kt){if(B)if(v.layerUpdates.size>0){let bt=nh(pt.width,pt.height,v.format,v.type);for(let st of v.layerUpdates){let It=pt.data.subarray(st*bt/pt.data.BYTES_PER_ELEMENT,(st+1)*bt/pt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,tt,0,0,st,pt.width,pt.height,1,dt,It)}v.clearLayerUpdates()}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,tt,0,0,0,pt.width,pt.height,Q.depth,dt,pt.data)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,tt,gt,pt.width,pt.height,Q.depth,0,pt.data,0,0);else Ft("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else kt?B&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,tt,0,0,0,pt.width,pt.height,Q.depth,dt,Dt,pt.data):e.texImage3D(n.TEXTURE_2D_ARRAY,tt,gt,pt.width,pt.height,Q.depth,0,dt,Dt,pt.data)}else{kt&&Wt&&e.texStorage2D(n.TEXTURE_2D,ut,gt,Ut[0].width,Ut[0].height);for(let tt=0,mt=Ut.length;tt<mt;tt++)pt=Ut[tt],v.format!==un?dt!==null?kt?B&&e.compressedTexSubImage2D(n.TEXTURE_2D,tt,0,0,pt.width,pt.height,dt,pt.data):e.compressedTexImage2D(n.TEXTURE_2D,tt,gt,pt.width,pt.height,0,pt.data):Ft("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):kt?B&&e.texSubImage2D(n.TEXTURE_2D,tt,0,0,pt.width,pt.height,dt,Dt,pt.data):e.texImage2D(n.TEXTURE_2D,tt,gt,pt.width,pt.height,0,dt,Dt,pt.data)}else if(v.isDataArrayTexture)if(kt){if(Wt&&e.texStorage3D(n.TEXTURE_2D_ARRAY,ut,gt,Q.width,Q.height,Q.depth),B)if(v.layerUpdates.size>0){let tt=nh(Q.width,Q.height,v.format,v.type);for(let mt of v.layerUpdates){let bt=Q.data.subarray(mt*tt/Q.data.BYTES_PER_ELEMENT,(mt+1)*tt/Q.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,mt,Q.width,Q.height,1,dt,Dt,bt)}v.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,Q.width,Q.height,Q.depth,dt,Dt,Q.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,gt,Q.width,Q.height,Q.depth,0,dt,Dt,Q.data);else if(v.isData3DTexture)kt?(Wt&&e.texStorage3D(n.TEXTURE_3D,ut,gt,Q.width,Q.height,Q.depth),B&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,Q.width,Q.height,Q.depth,dt,Dt,Q.data)):e.texImage3D(n.TEXTURE_3D,0,gt,Q.width,Q.height,Q.depth,0,dt,Dt,Q.data);else if(v.isFramebufferTexture){if(Wt)if(kt)e.texStorage2D(n.TEXTURE_2D,ut,gt,Q.width,Q.height);else{let tt=Q.width,mt=Q.height;for(let bt=0;bt<ut;bt++)e.texImage2D(n.TEXTURE_2D,bt,gt,tt,mt,0,dt,Dt,null),tt>>=1,mt>>=1}}else if(v.isHTMLTexture){if("texElementImage2D"in n){let tt=n.canvas;if(tt.hasAttribute("layoutsubtree")||tt.setAttribute("layoutsubtree","true"),Q.parentNode!==tt){tt.appendChild(Q),d.add(v),tt.onpaint=mt=>{let bt=mt.changedElements;for(let st of d)bt.includes(st.image)&&(st.needsUpdate=!0)},tt.requestPaint();return}if(n.texElementImage2D.length===3)n.texElementImage2D(n.TEXTURE_2D,n.RGBA8,Q);else{let bt=n.RGBA,st=n.RGBA,It=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,0,bt,st,It,Q)}n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(Ut.length>0){if(kt&&Wt){let tt=Ht(Ut[0]);e.texStorage2D(n.TEXTURE_2D,ut,gt,tt.width,tt.height)}for(let tt=0,mt=Ut.length;tt<mt;tt++)pt=Ut[tt],kt?B&&e.texSubImage2D(n.TEXTURE_2D,tt,0,0,dt,Dt,pt):e.texImage2D(n.TEXTURE_2D,tt,gt,dt,Dt,pt);v.generateMipmaps=!1}else if(kt){if(Wt){let tt=Ht(Q);e.texStorage2D(n.TEXTURE_2D,ut,gt,tt.width,tt.height)}B&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,dt,Dt,Q)}else e.texImage2D(n.TEXTURE_2D,0,gt,dt,Dt,Q);f(v)&&b(X),ct.__version=rt.version,v.onUpdate&&v.onUpdate(v)}C.__version=v.version}function Pt(C,v,k){if(v.image.length!==6)return;let X=Z(C,v),K=v.source;e.bindTexture(n.TEXTURE_CUBE_MAP,C.__webglTexture,n.TEXTURE0+k);let rt=i.get(K);if(K.version!==rt.__version||X===!0){e.activeTexture(n.TEXTURE0+k);let ct=$t.getPrimaries($t.workingColorSpace),j=v.colorSpace===ni?null:$t.getPrimaries(v.colorSpace),Q=v.colorSpace===ni||ct===j?n.NONE:n.BROWSER_DEFAULT_WEBGL;e.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),e.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),e.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment),e.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Q);let dt=v.isCompressedTexture||v.image[0].isCompressedTexture,Dt=v.image[0]&&v.image[0].isDataTexture,gt=[];for(let st=0;st<6;st++)!dt&&!Dt?gt[st]=m(v.image[st],!0,s.maxCubemapSize):gt[st]=Dt?v.image[st].image:v.image[st],gt[st]=ae(v,gt[st]);let pt=gt[0],Ut=r.convert(v.format,v.colorSpace),kt=r.convert(v.type),Wt=x(v.internalFormat,Ut,kt,v.normalized,v.colorSpace),B=v.isVideoTexture!==!0,ut=rt.__version===void 0||X===!0,tt=K.dataReady,mt=S(v,pt);yt(n.TEXTURE_CUBE_MAP,v);let bt;if(dt){B&&ut&&e.texStorage2D(n.TEXTURE_CUBE_MAP,mt,Wt,pt.width,pt.height);for(let st=0;st<6;st++){bt=gt[st].mipmaps;for(let It=0;It<bt.length;It++){let Tt=bt[It];v.format!==un?Ut!==null?B?tt&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+st,It,0,0,Tt.width,Tt.height,Ut,Tt.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+st,It,Wt,Tt.width,Tt.height,0,Tt.data):Ft("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):B?tt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+st,It,0,0,Tt.width,Tt.height,Ut,kt,Tt.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+st,It,Wt,Tt.width,Tt.height,0,Ut,kt,Tt.data)}}}else{if(bt=v.mipmaps,B&&ut){bt.length>0&&mt++;let st=Ht(gt[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,mt,Wt,st.width,st.height)}for(let st=0;st<6;st++)if(Dt){B?tt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,0,0,gt[st].width,gt[st].height,Ut,kt,gt[st].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,Wt,gt[st].width,gt[st].height,0,Ut,kt,gt[st].data);for(let It=0;It<bt.length;It++){let pe=bt[It].image[st].image;B?tt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+st,It+1,0,0,pe.width,pe.height,Ut,kt,pe.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+st,It+1,Wt,pe.width,pe.height,0,Ut,kt,pe.data)}}else{B?tt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,0,0,Ut,kt,gt[st]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,Wt,Ut,kt,gt[st]);for(let It=0;It<bt.length;It++){let Tt=bt[It];B?tt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+st,It+1,0,0,Ut,kt,Tt.image[st]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+st,It+1,Wt,Ut,kt,Tt.image[st])}}}f(v)&&b(n.TEXTURE_CUBE_MAP),rt.__version=K.version,v.onUpdate&&v.onUpdate(v)}C.__version=v.version}function wt(C,v,k,X,K,rt){let ct=r.convert(k.format,k.colorSpace),j=r.convert(k.type),Q=x(k.internalFormat,ct,j,k.normalized,k.colorSpace),dt=i.get(v),Dt=i.get(k);if(Dt.__renderTarget=v,!dt.__hasExternalTextures){let gt=Math.max(1,v.width>>rt),pt=Math.max(1,v.height>>rt);K===n.TEXTURE_3D||K===n.TEXTURE_2D_ARRAY?e.texImage3D(K,rt,Q,gt,pt,v.depth,0,ct,j,null):e.texImage2D(K,rt,Q,gt,pt,0,ct,j,null)}e.bindFramebuffer(n.FRAMEBUFFER,C),Kt(v)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,X,K,Dt.__webglTexture,0,Et(v)):(K===n.TEXTURE_2D||K>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&K<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,X,K,Dt.__webglTexture,rt),e.bindFramebuffer(n.FRAMEBUFFER,null)}function te(C,v,k){if(n.bindRenderbuffer(n.RENDERBUFFER,C),v.depthBuffer){let X=v.depthTexture,K=X&&X.isDepthTexture?X.type:null,rt=M(v.stencilBuffer,K),ct=v.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;Kt(v)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Et(v),rt,v.width,v.height):k?n.renderbufferStorageMultisample(n.RENDERBUFFER,Et(v),rt,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,rt,v.width,v.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,ct,n.RENDERBUFFER,C)}else{let X=v.textures;for(let K=0;K<X.length;K++){let rt=X[K],ct=r.convert(rt.format,rt.colorSpace),j=r.convert(rt.type),Q=x(rt.internalFormat,ct,j,rt.normalized,rt.colorSpace);Kt(v)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Et(v),Q,v.width,v.height):k?n.renderbufferStorageMultisample(n.RENDERBUFFER,Et(v),Q,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,Q,v.width,v.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function ht(C,v,k){let X=v.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(n.FRAMEBUFFER,C),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let K=i.get(v.depthTexture);if(K.__renderTarget=v,(!K.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),X){if(K.__webglInit===void 0&&(K.__webglInit=!0,v.depthTexture.addEventListener("dispose",w)),K.__webglTexture===void 0){K.__webglTexture=n.createTexture(),e.bindTexture(n.TEXTURE_CUBE_MAP,K.__webglTexture),yt(n.TEXTURE_CUBE_MAP,v.depthTexture);let dt=r.convert(v.depthTexture.format),Dt=r.convert(v.depthTexture.type),gt;v.depthTexture.format===On?gt=n.DEPTH_COMPONENT24:v.depthTexture.format===Ci&&(gt=n.DEPTH24_STENCIL8);for(let pt=0;pt<6;pt++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pt,0,gt,v.width,v.height,0,dt,Dt,null)}}else F(v.depthTexture,0);let rt=K.__webglTexture,ct=Et(v),j=X?n.TEXTURE_CUBE_MAP_POSITIVE_X+k:n.TEXTURE_2D,Q=v.depthTexture.format===Ci?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(v.depthTexture.format===On)Kt(v)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Q,j,rt,0,ct):n.framebufferTexture2D(n.FRAMEBUFFER,Q,j,rt,0);else if(v.depthTexture.format===Ci)Kt(v)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Q,j,rt,0,ct):n.framebufferTexture2D(n.FRAMEBUFFER,Q,j,rt,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function At(C){let v=i.get(C),k=C.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==C.depthTexture){let X=C.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),X){let K=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,X.removeEventListener("dispose",K)};X.addEventListener("dispose",K),v.__depthDisposeCallback=K}v.__boundDepthTexture=X}if(C.depthTexture&&!v.__autoAllocateDepthBuffer)if(k)for(let X=0;X<6;X++)ht(v.__webglFramebuffer[X],C,X);else{let X=C.texture.mipmaps;X&&X.length>0?ht(v.__webglFramebuffer[0],C,0):ht(v.__webglFramebuffer,C,0)}else if(k){v.__webglDepthbuffer=[];for(let X=0;X<6;X++)if(e.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer[X]),v.__webglDepthbuffer[X]===void 0)v.__webglDepthbuffer[X]=n.createRenderbuffer(),te(v.__webglDepthbuffer[X],C,!1);else{let K=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,rt=v.__webglDepthbuffer[X];n.bindRenderbuffer(n.RENDERBUFFER,rt),n.framebufferRenderbuffer(n.FRAMEBUFFER,K,n.RENDERBUFFER,rt)}}else{let X=C.texture.mipmaps;if(X&&X.length>0?e.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer[0]):e.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=n.createRenderbuffer(),te(v.__webglDepthbuffer,C,!1);else{let K=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,rt=v.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,rt),n.framebufferRenderbuffer(n.FRAMEBUFFER,K,n.RENDERBUFFER,rt)}}e.bindFramebuffer(n.FRAMEBUFFER,null)}function zt(C,v,k){let X=i.get(C);v!==void 0&&wt(X.__webglFramebuffer,C,C.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),k!==void 0&&At(C)}function Vt(C){let v=C.texture,k=i.get(C),X=i.get(v);C.addEventListener("dispose",y);let K=C.textures,rt=C.isWebGLCubeRenderTarget===!0,ct=K.length>1;if(ct||(X.__webglTexture===void 0&&(X.__webglTexture=n.createTexture()),X.__version=v.version,a.memory.textures++),rt){k.__webglFramebuffer=[];for(let j=0;j<6;j++)if(v.mipmaps&&v.mipmaps.length>0){k.__webglFramebuffer[j]=[];for(let Q=0;Q<v.mipmaps.length;Q++)k.__webglFramebuffer[j][Q]=n.createFramebuffer()}else k.__webglFramebuffer[j]=n.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){k.__webglFramebuffer=[];for(let j=0;j<v.mipmaps.length;j++)k.__webglFramebuffer[j]=n.createFramebuffer()}else k.__webglFramebuffer=n.createFramebuffer();if(ct)for(let j=0,Q=K.length;j<Q;j++){let dt=i.get(K[j]);dt.__webglTexture===void 0&&(dt.__webglTexture=n.createTexture(),a.memory.textures++)}if(C.samples>0&&Kt(C)===!1){k.__webglMultisampledFramebuffer=n.createFramebuffer(),k.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let j=0;j<K.length;j++){let Q=K[j];k.__webglColorRenderbuffer[j]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,k.__webglColorRenderbuffer[j]);let dt=r.convert(Q.format,Q.colorSpace),Dt=r.convert(Q.type),gt=x(Q.internalFormat,dt,Dt,Q.normalized,Q.colorSpace,C.isXRRenderTarget===!0),pt=Et(C);n.renderbufferStorageMultisample(n.RENDERBUFFER,pt,gt,C.width,C.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+j,n.RENDERBUFFER,k.__webglColorRenderbuffer[j])}n.bindRenderbuffer(n.RENDERBUFFER,null),C.depthBuffer&&(k.__webglDepthRenderbuffer=n.createRenderbuffer(),te(k.__webglDepthRenderbuffer,C,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(rt){e.bindTexture(n.TEXTURE_CUBE_MAP,X.__webglTexture),yt(n.TEXTURE_CUBE_MAP,v);for(let j=0;j<6;j++)if(v.mipmaps&&v.mipmaps.length>0)for(let Q=0;Q<v.mipmaps.length;Q++)wt(k.__webglFramebuffer[j][Q],C,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+j,Q);else wt(k.__webglFramebuffer[j],C,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+j,0);f(v)&&b(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(ct){for(let j=0,Q=K.length;j<Q;j++){let dt=K[j],Dt=i.get(dt),gt=n.TEXTURE_2D;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(gt=C.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(gt,Dt.__webglTexture),yt(gt,dt),wt(k.__webglFramebuffer,C,dt,n.COLOR_ATTACHMENT0+j,gt,0),f(dt)&&b(gt)}e.unbindTexture()}else{let j=n.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(j=C.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(j,X.__webglTexture),yt(j,v),v.mipmaps&&v.mipmaps.length>0)for(let Q=0;Q<v.mipmaps.length;Q++)wt(k.__webglFramebuffer[Q],C,v,n.COLOR_ATTACHMENT0,j,Q);else wt(k.__webglFramebuffer,C,v,n.COLOR_ATTACHMENT0,j,0);f(v)&&b(j),e.unbindTexture()}C.depthBuffer&&At(C)}function jt(C){let v=C.textures;for(let k=0,X=v.length;k<X;k++){let K=v[k];if(f(K)){let rt=T(C),ct=i.get(K).__webglTexture;e.bindTexture(rt,ct),b(rt),e.unbindTexture()}}}let ye=[],at=[];function lt(C){if(C.samples>0){if(Kt(C)===!1){let v=C.textures,k=C.width,X=C.height,K=n.COLOR_BUFFER_BIT,rt=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ct=i.get(C),j=v.length>1;if(j)for(let dt=0;dt<v.length;dt++)e.bindFramebuffer(n.FRAMEBUFFER,ct.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+dt,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,ct.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+dt,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,ct.__webglMultisampledFramebuffer);let Q=C.texture.mipmaps;Q&&Q.length>0?e.bindFramebuffer(n.DRAW_FRAMEBUFFER,ct.__webglFramebuffer[0]):e.bindFramebuffer(n.DRAW_FRAMEBUFFER,ct.__webglFramebuffer);for(let dt=0;dt<v.length;dt++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(K|=n.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(K|=n.STENCIL_BUFFER_BIT)),j){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,ct.__webglColorRenderbuffer[dt]);let Dt=i.get(v[dt]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Dt,0)}n.blitFramebuffer(0,0,k,X,0,0,k,X,K,n.NEAREST),l===!0&&(ye.length=0,at.length=0,ye.push(n.COLOR_ATTACHMENT0+dt),C.depthBuffer&&C.resolveDepthBuffer===!1&&(ye.push(rt),at.push(rt),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,at)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,ye))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),j)for(let dt=0;dt<v.length;dt++){e.bindFramebuffer(n.FRAMEBUFFER,ct.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+dt,n.RENDERBUFFER,ct.__webglColorRenderbuffer[dt]);let Dt=i.get(v[dt]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,ct.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+dt,n.TEXTURE_2D,Dt,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,ct.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&l){let v=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[v])}}}function Et(C){return Math.min(s.maxSamples,C.samples)}function Kt(C){let v=i.get(C);return C.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function O(C){let v=a.render.frame;h.get(C)!==v&&(h.set(C,v),C.update())}function ae(C,v){let k=C.colorSpace,X=C.format,K=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||k!==nr&&k!==ni&&($t.getTransfer(k)===ee?(X!==un||K!==on)&&Ft("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Bt("WebGLTextures: Unsupported texture color space:",k)),v}function Ht(C){return typeof HTMLImageElement!="undefined"&&C instanceof HTMLImageElement?(c.width=C.naturalWidth||C.width,c.height=C.naturalHeight||C.height):typeof VideoFrame!="undefined"&&C instanceof VideoFrame?(c.width=C.displayWidth,c.height=C.displayHeight):(c.width=C.width,c.height=C.height),c}this.allocateTextureUnit=U,this.resetTextureUnits=H,this.getTextureUnits=R,this.setTextureUnits=L,this.setTexture2D=F,this.setTexture2DArray=W,this.setTexture3D=$,this.setTextureCube=et,this.rebindTextures=zt,this.setupRenderTarget=Vt,this.updateRenderTargetMipmap=jt,this.updateMultisampleRenderTarget=lt,this.setupDepthRenderbuffer=At,this.setupFrameBufferTexture=wt,this.useMultisampledRTT=Kt,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function Jv(n,t){function e(i,s=ni){let r,a=$t.getTransfer(s);if(i===on)return n.UNSIGNED_BYTE;if(i===Eo)return n.UNSIGNED_SHORT_4_4_4_4;if(i===To)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Wc)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Xc)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===Gc)return n.BYTE;if(i===Hc)return n.SHORT;if(i===Ns)return n.UNSIGNED_SHORT;if(i===wo)return n.INT;if(i===wn)return n.UNSIGNED_INT;if(i===En)return n.FLOAT;if(i===Vn)return n.HALF_FLOAT;if(i===qc)return n.ALPHA;if(i===Yc)return n.RGB;if(i===un)return n.RGBA;if(i===On)return n.DEPTH_COMPONENT;if(i===Ci)return n.DEPTH_STENCIL;if(i===Zc)return n.RED;if(i===Ao)return n.RED_INTEGER;if(i===Ri)return n.RG;if(i===Co)return n.RG_INTEGER;if(i===Ro)return n.RGBA_INTEGER;if(i===Cr||i===Rr||i===Ir||i===Pr)if(a===ee)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Cr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Rr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Ir)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Pr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Cr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Rr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Ir)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Pr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Io||i===Po||i===Do||i===Lo)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Io)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Po)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Do)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Lo)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===No||i===Uo||i===Fo||i===Oo||i===Bo||i===Dr||i===zo)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(i===No||i===Uo)return a===ee?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Fo)return a===ee?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===Oo)return r.COMPRESSED_R11_EAC;if(i===Bo)return r.COMPRESSED_SIGNED_R11_EAC;if(i===Dr)return r.COMPRESSED_RG11_EAC;if(i===zo)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===ko||i===Vo||i===Go||i===Ho||i===Wo||i===Xo||i===qo||i===Yo||i===Zo||i===$o||i===Jo||i===Ko||i===jo||i===Qo)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(i===ko)return a===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Vo)return a===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Go)return a===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Ho)return a===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Wo)return a===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Xo)return a===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===qo)return a===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Yo)return a===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Zo)return a===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===$o)return a===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Jo)return a===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Ko)return a===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===jo)return a===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Qo)return a===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===tl||i===el||i===nl)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(i===tl)return a===ee?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===el)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===nl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===il||i===sl||i===Lr||i===rl)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(i===il)return r.COMPRESSED_RED_RGTC1_EXT;if(i===sl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Lr)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===rl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Us?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}var Kv=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,jv=`
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

}`,bh=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let i=new gr(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,i=new rn({vertexShader:Kv,fragmentShader:jv,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Ye(new _r(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Mh=class extends Mn{constructor(t,e){super();let i=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,d=null,u=null,p=null,g=null,_=typeof XRWebGLBinding!="undefined",m=new bh,f={},b=e.getContextAttributes(),T=null,x=null,M=[],S=[],w=new Ot,y=null,E=new Be;E.viewport=new de;let I=new Be;I.viewport=new de;let P=[E,I],N=new xo,H=null,R=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let it=M[Z];return it===void 0&&(it=new As,M[Z]=it),it.getTargetRaySpace()},this.getControllerGrip=function(Z){let it=M[Z];return it===void 0&&(it=new As,M[Z]=it),it.getGripSpace()},this.getHand=function(Z){let it=M[Z];return it===void 0&&(it=new As,M[Z]=it),it.getHandSpace()};function L(Z){let it=S.indexOf(Z.inputSource);if(it===-1)return;let nt=M[it];nt!==void 0&&(nt.update(Z.inputSource,Z.frame,c||a),nt.dispatchEvent({type:Z.type,data:Z.inputSource}))}function U(){s.removeEventListener("select",L),s.removeEventListener("selectstart",L),s.removeEventListener("selectend",L),s.removeEventListener("squeeze",L),s.removeEventListener("squeezestart",L),s.removeEventListener("squeezeend",L),s.removeEventListener("end",U),s.removeEventListener("inputsourceschange",D);for(let Z=0;Z<M.length;Z++){let it=S[Z];it!==null&&(S[Z]=null,M[Z].disconnect(it))}H=null,R=null,m.reset();for(let Z in f)delete f[Z];t.setRenderTarget(T),p=null,u=null,d=null,s=null,x=null,yt.stop(),i.isPresenting=!1,t.setPixelRatio(y),t.setSize(w.width,w.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){r=Z,i.isPresenting===!0&&Ft("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){o=Z,i.isPresenting===!0&&Ft("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(Z){c=Z},this.getBaseLayer=function(){return u!==null?u:p},this.getBinding=function(){return d===null&&_&&(d=new XRWebGLBinding(s,e)),d},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(Z){if(s=Z,s!==null){if(T=t.getRenderTarget(),s.addEventListener("select",L),s.addEventListener("selectstart",L),s.addEventListener("selectend",L),s.addEventListener("squeeze",L),s.addEventListener("squeezestart",L),s.addEventListener("squeezeend",L),s.addEventListener("end",U),s.addEventListener("inputsourceschange",D),b.xrCompatible!==!0&&await e.makeXRCompatible(),y=t.getPixelRatio(),t.getSize(w),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let nt=null,Rt=null,Pt=null;b.depth&&(Pt=b.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,nt=b.stencil?Ci:On,Rt=b.stencil?Us:wn);let wt={colorFormat:e.RGBA8,depthFormat:Pt,scaleFactor:r};d=this.getBinding(),u=d.createProjectionLayer(wt),s.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),x=new sn(u.textureWidth,u.textureHeight,{format:un,type:on,depthTexture:new ei(u.textureWidth,u.textureHeight,Rt,void 0,void 0,void 0,void 0,void 0,void 0,nt),stencilBuffer:b.stencil,colorSpace:t.outputColorSpace,samples:b.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1})}else{let nt={antialias:b.antialias,alpha:!0,depth:b.depth,stencil:b.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,e,nt),s.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),x=new sn(p.framebufferWidth,p.framebufferHeight,{format:un,type:on,colorSpace:t.outputColorSpace,stencilBuffer:b.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),yt.setContext(s),yt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function D(Z){for(let it=0;it<Z.removed.length;it++){let nt=Z.removed[it],Rt=S.indexOf(nt);Rt>=0&&(S[Rt]=null,M[Rt].disconnect(nt))}for(let it=0;it<Z.added.length;it++){let nt=Z.added[it],Rt=S.indexOf(nt);if(Rt===-1){for(let wt=0;wt<M.length;wt++)if(wt>=S.length){S.push(nt),Rt=wt;break}else if(S[wt]===null){S[wt]=nt,Rt=wt;break}if(Rt===-1)break}let Pt=M[Rt];Pt&&Pt.connect(nt)}}let F=new V,W=new V;function $(Z,it,nt){F.setFromMatrixPosition(it.matrixWorld),W.setFromMatrixPosition(nt.matrixWorld);let Rt=F.distanceTo(W),Pt=it.projectionMatrix.elements,wt=nt.projectionMatrix.elements,te=Pt[14]/(Pt[10]-1),ht=Pt[14]/(Pt[10]+1),At=(Pt[9]+1)/Pt[5],zt=(Pt[9]-1)/Pt[5],Vt=(Pt[8]-1)/Pt[0],jt=(wt[8]+1)/wt[0],ye=te*Vt,at=te*jt,lt=Rt/(-Vt+jt),Et=lt*-Vt;if(it.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(Et),Z.translateZ(lt),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert(),Pt[10]===-1)Z.projectionMatrix.copy(it.projectionMatrix),Z.projectionMatrixInverse.copy(it.projectionMatrixInverse);else{let Kt=te+lt,O=ht+lt,ae=ye-Et,Ht=at+(Rt-Et),C=At*ht/O*Kt,v=zt*ht/O*Kt;Z.projectionMatrix.makePerspective(ae,Ht,C,v,Kt,O),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}}function et(Z,it){it===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(it.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(s===null)return;let it=Z.near,nt=Z.far;m.texture!==null&&(m.depthNear>0&&(it=m.depthNear),m.depthFar>0&&(nt=m.depthFar)),N.near=I.near=E.near=it,N.far=I.far=E.far=nt,(H!==N.near||R!==N.far)&&(s.updateRenderState({depthNear:N.near,depthFar:N.far}),H=N.near,R=N.far),N.layers.mask=Z.layers.mask|6,E.layers.mask=N.layers.mask&-5,I.layers.mask=N.layers.mask&-3;let Rt=Z.parent,Pt=N.cameras;et(N,Rt);for(let wt=0;wt<Pt.length;wt++)et(Pt[wt],Rt);Pt.length===2?$(N,E,I):N.projectionMatrix.copy(E.projectionMatrix),G(Z,N,Rt)};function G(Z,it,nt){nt===null?Z.matrix.copy(it.matrixWorld):(Z.matrix.copy(nt.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(it.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(it.projectionMatrix),Z.projectionMatrixInverse.copy(it.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=ws*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return N},this.getFoveation=function(){if(!(u===null&&p===null))return l},this.setFoveation=function(Z){l=Z,u!==null&&(u.fixedFoveation=Z),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=Z)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(N)},this.getCameraTexture=function(Z){return f[Z]};let ot=null;function ft(Z,it){if(h=it.getViewerPose(c||a),g=it,h!==null){let nt=h.views;p!==null&&(t.setRenderTargetFramebuffer(x,p.framebuffer),t.setRenderTarget(x));let Rt=!1;nt.length!==N.cameras.length&&(N.cameras.length=0,Rt=!0);for(let ht=0;ht<nt.length;ht++){let At=nt[ht],zt=null;if(p!==null)zt=p.getViewport(At);else{let jt=d.getViewSubImage(u,At);zt=jt.viewport,ht===0&&(t.setRenderTargetTextures(x,jt.colorTexture,jt.depthStencilTexture),t.setRenderTarget(x))}let Vt=P[ht];Vt===void 0&&(Vt=new Be,Vt.layers.enable(ht),Vt.viewport=new de,P[ht]=Vt),Vt.matrix.fromArray(At.transform.matrix),Vt.matrix.decompose(Vt.position,Vt.quaternion,Vt.scale),Vt.projectionMatrix.fromArray(At.projectionMatrix),Vt.projectionMatrixInverse.copy(Vt.projectionMatrix).invert(),Vt.viewport.set(zt.x,zt.y,zt.width,zt.height),ht===0&&(N.matrix.copy(Vt.matrix),N.matrix.decompose(N.position,N.quaternion,N.scale)),Rt===!0&&N.cameras.push(Vt)}let Pt=s.enabledFeatures;if(Pt&&Pt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&_){d=i.getBinding();let ht=d.getDepthInformation(nt[0]);ht&&ht.isValid&&ht.texture&&m.init(ht,s.renderState)}if(Pt&&Pt.includes("camera-access")&&_){t.state.unbindTexture(),d=i.getBinding();for(let ht=0;ht<nt.length;ht++){let At=nt[ht].camera;if(At){let zt=f[At];zt||(zt=new gr,f[At]=zt);let Vt=d.getCameraImage(At);zt.sourceTexture=Vt}}}}for(let nt=0;nt<M.length;nt++){let Rt=S[nt],Pt=M[nt];Rt!==null&&Pt!==void 0&&Pt.update(Rt,it,c||a)}ot&&ot(Z,it),it.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:it}),g=null}let yt=new nd;yt.setAnimationLoop(ft),this.setAnimationLoop=function(Z){ot=Z},this.dispose=function(){}}},Qv=new fe,ld=new Gt;ld.set(-1,0,0,0,1,0,0,0,1);function tb(n,t){function e(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function i(m,f){f.color.getRGB(m.fogColor.value,Qc(n)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function s(m,f,b,T,x){f.isNodeMaterial?f.uniformsNeedUpdate=!1:f.isMeshBasicMaterial?r(m,f):f.isMeshLambertMaterial?(r(m,f),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)):f.isMeshToonMaterial?(r(m,f),d(m,f)):f.isMeshPhongMaterial?(r(m,f),h(m,f),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)):f.isMeshStandardMaterial?(r(m,f),u(m,f),f.isMeshPhysicalMaterial&&p(m,f,x)):f.isMeshMatcapMaterial?(r(m,f),g(m,f)):f.isMeshDepthMaterial?r(m,f):f.isMeshDistanceMaterial?(r(m,f),_(m,f)):f.isMeshNormalMaterial?r(m,f):f.isLineBasicMaterial?(a(m,f),f.isLineDashedMaterial&&o(m,f)):f.isPointsMaterial?l(m,f,b,T):f.isSpriteMaterial?c(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,e(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,e(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===He&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,e(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===He&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,e(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,e(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,e(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);let b=t.get(f),T=b.envMap,x=b.envMapRotation;T&&(m.envMap.value=T,m.envMapRotation.value.setFromMatrix4(Qv.makeRotationFromEuler(x)).transpose(),T.isCubeTexture&&T.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(ld),m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,e(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,e(f.aoMap,m.aoMapTransform))}function a(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,e(f.map,m.mapTransform))}function o(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function l(m,f,b,T){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*b,m.scale.value=T*.5,f.map&&(m.map.value=f.map,e(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function c(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,e(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function h(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function d(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function u(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,e(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,e(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,b){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,e(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,e(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,e(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,e(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,e(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===He&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,e(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,e(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=b.texture,m.transmissionSamplerSize.value.set(b.width,b.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,e(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,e(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,e(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,e(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,e(f.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,f){f.matcap&&(m.matcap.value=f.matcap)}function _(m,f){let b=t.get(f).light;m.referencePosition.value.setFromMatrixPosition(b.matrixWorld),m.nearDistance.value=b.shadow.camera.near,m.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function eb(n,t,e,i){let s={},r={},a=[],o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(x,M){let S=M.program;i.uniformBlockBinding(x,S)}function c(x,M){let S=s[x.id];S===void 0&&(m(x),S=h(x),s[x.id]=S,x.addEventListener("dispose",b));let w=M.program;i.updateUBOMapping(x,w);let y=t.render.frame;r[x.id]!==y&&(u(x),r[x.id]=y)}function h(x){let M=d();x.__bindingPointIndex=M;let S=n.createBuffer(),w=x.__size,y=x.usage;return n.bindBuffer(n.UNIFORM_BUFFER,S),n.bufferData(n.UNIFORM_BUFFER,w,y),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,M,S),S}function d(){for(let x=0;x<o;x++)if(a.indexOf(x)===-1)return a.push(x),x;return Bt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(x){let M=s[x.id],S=x.uniforms,w=x.__cache;n.bindBuffer(n.UNIFORM_BUFFER,M);for(let y=0,E=S.length;y<E;y++){let I=S[y];if(Array.isArray(I))for(let P=0,N=I.length;P<N;P++)p(I[P],y,P,w);else p(I,y,0,w)}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(x,M,S,w){if(_(x,M,S,w)===!0){let y=x.__offset,E=x.value;if(Array.isArray(E)){let I=0;for(let P=0;P<E.length;P++){let N=E[P],H=f(N);g(N,x.__data,I),typeof N!="number"&&typeof N!="boolean"&&!N.isMatrix3&&!ArrayBuffer.isView(N)&&(I+=H.storage/Float32Array.BYTES_PER_ELEMENT)}}else g(E,x.__data,0);n.bufferSubData(n.UNIFORM_BUFFER,y,x.__data)}}function g(x,M,S){typeof x=="number"||typeof x=="boolean"?M[0]=x:x.isMatrix3?(M[0]=x.elements[0],M[1]=x.elements[1],M[2]=x.elements[2],M[3]=0,M[4]=x.elements[3],M[5]=x.elements[4],M[6]=x.elements[5],M[7]=0,M[8]=x.elements[6],M[9]=x.elements[7],M[10]=x.elements[8],M[11]=0):ArrayBuffer.isView(x)?M.set(new x.constructor(x.buffer,x.byteOffset,M.length)):x.toArray(M,S)}function _(x,M,S,w){let y=x.value,E=M+"_"+S;if(w[E]===void 0)return typeof y=="number"||typeof y=="boolean"?w[E]=y:ArrayBuffer.isView(y)?w[E]=y.slice():w[E]=y.clone(),!0;{let I=w[E];if(typeof y=="number"||typeof y=="boolean"){if(I!==y)return w[E]=y,!0}else{if(ArrayBuffer.isView(y))return!0;if(I.equals(y)===!1)return I.copy(y),!0}}return!1}function m(x){let M=x.uniforms,S=0,w=16;for(let E=0,I=M.length;E<I;E++){let P=Array.isArray(M[E])?M[E]:[M[E]];for(let N=0,H=P.length;N<H;N++){let R=P[N],L=Array.isArray(R.value)?R.value:[R.value];for(let U=0,D=L.length;U<D;U++){let F=L[U],W=f(F),$=S%w,et=$%W.boundary,G=$+et;S+=et,G!==0&&w-G<W.storage&&(S+=w-G),R.__data=new Float32Array(W.storage/Float32Array.BYTES_PER_ELEMENT),R.__offset=S,S+=W.storage}}}let y=S%w;return y>0&&(S+=w-y),x.__size=S,x.__cache={},this}function f(x){let M={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(M.boundary=4,M.storage=4):x.isVector2?(M.boundary=8,M.storage=8):x.isVector3||x.isColor?(M.boundary=16,M.storage=12):x.isVector4?(M.boundary=16,M.storage=16):x.isMatrix3?(M.boundary=48,M.storage=48):x.isMatrix4?(M.boundary=64,M.storage=64):x.isTexture?Ft("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(x)?(M.boundary=16,M.storage=x.byteLength):Ft("WebGLRenderer: Unsupported uniform value type.",x),M}function b(x){let M=x.target;M.removeEventListener("dispose",b);let S=a.indexOf(M.__bindingPointIndex);a.splice(S,1),n.deleteBuffer(s[M.id]),delete s[M.id],delete r[M.id]}function T(){for(let x in s)n.deleteBuffer(s[x]);a=[],s={},r={}}return{bind:l,update:c,dispose:T}}var nb=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Gn=null;function ib(){return Gn===null&&(Gn=new ja(nb,16,16,Ri,Vn),Gn.name="DFG_LUT",Gn.minFilter=Pe,Gn.magFilter=Pe,Gn.wrapS=Fn,Gn.wrapT=Fn,Gn.generateMipmaps=!1,Gn.needsUpdate=!0),Gn}var fl=class{constructor(t={}){let{canvas:e=Tf(),context:i=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:u=!1,outputBufferType:p=on}=t;this.isWebGLRenderer=!0;let g;if(i!==null){if(typeof WebGLRenderingContext!="undefined"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=i.getContextAttributes().alpha}else g=a;let _=p,m=new Set([Ro,Co,Ao]),f=new Set([on,wn,Ns,Us,Eo,To]),b=new Uint32Array(4),T=new Int32Array(4),x=new V,M=null,S=null,w=[],y=[],E=null;this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Sn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let I=this,P=!1,N=null,H=null,R=null,L=null;this._outputColorSpace=en;let U=0,D=0,F=null,W=-1,$=null,et=new de,G=new de,ot=null,ft=new Jt(0),yt=0,Z=e.width,it=e.height,nt=1,Rt=null,Pt=null,wt=new de(0,0,Z,it),te=new de(0,0,Z,it),ht=!1,At=new fr,zt=!1,Vt=!1,jt=new fe,ye=new V,at=new de,lt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Et=!1;function Kt(){return F===null?nt:1}let O=i;function ae(A,z){return e.getContext(A,z)}try{let A={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${vo}`),e.addEventListener("webglcontextlost",pe,!1),e.addEventListener("webglcontextrestored",ce,!1),e.addEventListener("webglcontextcreationerror",Dn,!1),O===null){let z="webgl2";if(O=ae(z,A),O===null)throw ae(z)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}}catch(A){throw Bt("WebGLRenderer: "+A.message),A}let Ht,C,v,k,X,K,rt,ct,j,Q,dt,Dt,gt,pt,Ut,kt,Wt,B,ut,tt,mt,bt,st;function It(){Ht=new hy(O),Ht.init(),mt=new Jv(O,Ht),C=new ny(O,Ht,t,mt),v=new Zv(O,Ht),C.reversedDepthBuffer&&u&&v.buffers.depth.setReversed(!0),H=O.createFramebuffer(),R=O.createFramebuffer(),L=O.createFramebuffer(),k=new dy(O),X=new Nv,K=new $v(O,Ht,v,X,C,mt,k),rt=new cy(I),ct=new _0(O),bt=new ty(O,ct),j=new uy(O,ct,k,bt),Q=new my(O,j,ct,bt,k),B=new py(O,C,K),Ut=new iy(X),dt=new Lv(I,rt,Ht,C,bt,Ut),Dt=new tb(I,X),gt=new Fv,pt=new Gv(Ht),Wt=new Qx(I,rt,v,Q,g,l),kt=new Yv(I,Q,C),st=new eb(O,k,C,v),ut=new ey(O,Ht,k),tt=new fy(O,Ht,k),k.programs=dt.programs,I.capabilities=C,I.extensions=Ht,I.properties=X,I.renderLists=gt,I.shadowMap=kt,I.state=v,I.info=k}It(),_!==on&&(E=new _y(_,e.width,e.height,o,s,r));let Tt=new Mh(I,O);this.xr=Tt,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){let A=Ht.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){let A=Ht.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return nt},this.setPixelRatio=function(A){A!==void 0&&(nt=A,this.setSize(Z,it,!1))},this.getSize=function(A){return A.set(Z,it)},this.setSize=function(A,z,J=!0){if(Tt.isPresenting){Ft("WebGLRenderer: Can't change size while VR device is presenting.");return}Z=A,it=z,e.width=Math.floor(A*nt),e.height=Math.floor(z*nt),J===!0&&(e.style.width=A+"px",e.style.height=z+"px"),E!==null&&E.setSize(e.width,e.height),this.setViewport(0,0,A,z)},this.getDrawingBufferSize=function(A){return A.set(Z*nt,it*nt).floor()},this.setDrawingBufferSize=function(A,z,J){Z=A,it=z,nt=J,e.width=Math.floor(A*J),e.height=Math.floor(z*J),this.setViewport(0,0,A,z)},this.setEffects=function(A){if(_===on){Bt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(A){for(let z=0;z<A.length;z++)if(A[z].isOutputPass===!0){Ft("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}E.setEffects(A||[])},this.getCurrentViewport=function(A){return A.copy(et)},this.getViewport=function(A){return A.copy(wt)},this.setViewport=function(A,z,J,q){A.isVector4?wt.set(A.x,A.y,A.z,A.w):wt.set(A,z,J,q),v.viewport(et.copy(wt).multiplyScalar(nt).round())},this.getScissor=function(A){return A.copy(te)},this.setScissor=function(A,z,J,q){A.isVector4?te.set(A.x,A.y,A.z,A.w):te.set(A,z,J,q),v.scissor(G.copy(te).multiplyScalar(nt).round())},this.getScissorTest=function(){return ht},this.setScissorTest=function(A){v.setScissorTest(ht=A)},this.setOpaqueSort=function(A){Rt=A},this.setTransparentSort=function(A){Pt=A},this.getClearColor=function(A){return A.copy(Wt.getClearColor())},this.setClearColor=function(){Wt.setClearColor(...arguments)},this.getClearAlpha=function(){return Wt.getClearAlpha()},this.setClearAlpha=function(){Wt.setClearAlpha(...arguments)},this.clear=function(A=!0,z=!0,J=!0){let q=0;if(A){let Y=!1;if(F!==null){let vt=F.texture.format;Y=m.has(vt)}if(Y){let vt=F.texture.type,St=f.has(vt),xt=Wt.getClearColor(),Ct=Wt.getClearAlpha(),Lt=xt.r,Xt=xt.g,Yt=xt.b;St?(b[0]=Lt,b[1]=Xt,b[2]=Yt,b[3]=Ct,O.clearBufferuiv(O.COLOR,0,b)):(T[0]=Lt,T[1]=Xt,T[2]=Yt,T[3]=Ct,O.clearBufferiv(O.COLOR,0,T))}else q|=O.COLOR_BUFFER_BIT}z&&(q|=O.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),J&&(q|=O.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),q!==0&&O.clear(q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(A){A.setRenderer(this),N=A},this.dispose=function(){e.removeEventListener("webglcontextlost",pe,!1),e.removeEventListener("webglcontextrestored",ce,!1),e.removeEventListener("webglcontextcreationerror",Dn,!1),Wt.dispose(),gt.dispose(),pt.dispose(),X.dispose(),rt.dispose(),Q.dispose(),bt.dispose(),st.dispose(),dt.dispose(),Tt.dispose(),Tt.removeEventListener("sessionstart",hu),Tt.removeEventListener("sessionend",uu),Fi.stop()};function pe(A){A.preventDefault(),ar("WebGLRenderer: Context Lost."),P=!0}function ce(){ar("WebGLRenderer: Context Restored."),P=!1;let A=k.autoReset,z=kt.enabled,J=kt.autoUpdate,q=kt.needsUpdate,Y=kt.type;It(),k.autoReset=A,kt.enabled=z,kt.autoUpdate=J,kt.needsUpdate=q,kt.type=Y}function Dn(A){Bt("WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function Ln(A){let z=A.target;z.removeEventListener("dispose",Ln),hg(z)}function hg(A){ug(A),X.remove(A)}function ug(A){let z=X.get(A).programs;z!==void 0&&(z.forEach(function(J){dt.releaseProgram(J)}),A.isShaderMaterial&&dt.releaseShaderCache(A))}this.renderBufferDirect=function(A,z,J,q,Y,vt){z===null&&(z=lt);let St=Y.isMesh&&Y.matrixWorld.determinantAffine()<0,xt=pg(A,z,J,q,Y);v.setMaterial(q,St);let Ct=J.index,Lt=1;if(q.wireframe===!0){if(Ct=j.getWireframeAttribute(J),Ct===void 0)return;Lt=2}let Xt=J.drawRange,Yt=J.attributes.position,Nt=Xt.start*Lt,se=(Xt.start+Xt.count)*Lt;vt!==null&&(Nt=Math.max(Nt,vt.start*Lt),se=Math.min(se,(vt.start+vt.count)*Lt)),Ct!==null?(Nt=Math.max(Nt,0),se=Math.min(se,Ct.count)):Yt!=null&&(Nt=Math.max(Nt,0),se=Math.min(se,Yt.count));let _e=se-Nt;if(_e<0||_e===1/0)return;bt.setup(Y,q,xt,J,Ct);let me,oe=ut;if(Ct!==null&&(me=ct.get(Ct),oe=tt,oe.setIndex(me)),Y.isMesh)q.wireframe===!0?(v.setLineWidth(q.wireframeLinewidth*Kt()),oe.setMode(O.LINES)):oe.setMode(O.TRIANGLES);else if(Y.isLine){let Ue=q.linewidth;Ue===void 0&&(Ue=1),v.setLineWidth(Ue*Kt()),Y.isLineSegments?oe.setMode(O.LINES):Y.isLineLoop?oe.setMode(O.LINE_LOOP):oe.setMode(O.LINE_STRIP)}else Y.isPoints?oe.setMode(O.POINTS):Y.isSprite&&oe.setMode(O.TRIANGLES);if(Y.isBatchedMesh)if(Ht.get("WEBGL_multi_draw"))oe.renderMultiDraw(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount);else{let Ue=Y._multiDrawStarts,Mt=Y._multiDrawCounts,je=Y._multiDrawCount,Qt=Ct?ct.get(Ct).bytesPerElement:1,ln=X.get(q).currentProgram.getUniforms();for(let Nn=0;Nn<je;Nn++)ln.setValue(O,"_gl_DrawID",Nn),oe.render(Ue[Nn]/Qt,Mt[Nn])}else if(Y.isInstancedMesh)oe.renderInstances(Nt,_e,Y.count);else if(J.isInstancedBufferGeometry){let Ue=J._maxInstanceCount!==void 0?J._maxInstanceCount:1/0,Mt=Math.min(J.instanceCount,Ue);oe.renderInstances(Nt,_e,Mt)}else oe.render(Nt,_e)};function cu(A,z,J){A.transparent===!0&&A.side===zn&&A.forceSinglePass===!1?(A.side=He,A.needsUpdate=!0,aa(A,z,J),A.side=Qn,A.needsUpdate=!0,aa(A,z,J),A.side=zn):aa(A,z,J)}this.compile=function(A,z,J=null){J===null&&(J=A),S=pt.get(J),S.init(z),y.push(S),J.traverseVisible(function(Y){Y.isLight&&Y.layers.test(z.layers)&&(S.pushLight(Y),Y.castShadow&&S.pushShadow(Y))}),A!==J&&A.traverseVisible(function(Y){Y.isLight&&Y.layers.test(z.layers)&&(S.pushLight(Y),Y.castShadow&&S.pushShadow(Y))}),S.setupLights();let q=new Set;return A.traverse(function(Y){if(!(Y.isMesh||Y.isPoints||Y.isLine||Y.isSprite))return;let vt=Y.material;if(vt)if(Array.isArray(vt))for(let St=0;St<vt.length;St++){let xt=vt[St];cu(xt,J,Y),q.add(xt)}else cu(vt,J,Y),q.add(vt)}),S=y.pop(),q},this.compileAsync=function(A,z,J=null){let q=this.compile(A,z,J);return new Promise(Y=>{function vt(){if(q.forEach(function(St){X.get(St).currentProgram.isReady()&&q.delete(St)}),q.size===0){Y(A);return}setTimeout(vt,10)}Ht.get("KHR_parallel_shader_compile")!==null?vt():setTimeout(vt,10)})};let $l=null;function fg(A){$l&&$l(A)}function hu(){Fi.stop()}function uu(){Fi.start()}let Fi=new nd;Fi.setAnimationLoop(fg),typeof self!="undefined"&&Fi.setContext(self),this.setAnimationLoop=function(A){$l=A,Tt.setAnimationLoop(A),A===null?Fi.stop():Fi.start()},Tt.addEventListener("sessionstart",hu),Tt.addEventListener("sessionend",uu),this.render=function(A,z){if(z!==void 0&&z.isCamera!==!0){Bt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;N!==null&&N.renderStart(A,z);let J=Tt.enabled===!0&&Tt.isPresenting===!0,q=E!==null&&(F===null||J)&&E.begin(I,F);if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),z.parent===null&&z.matrixWorldAutoUpdate===!0&&z.updateMatrixWorld(),Tt.enabled===!0&&Tt.isPresenting===!0&&(E===null||E.isCompositing()===!1)&&(Tt.cameraAutoUpdate===!0&&Tt.updateCamera(z),z=Tt.getCamera()),A.isScene===!0&&A.onBeforeRender(I,A,z,F),S=pt.get(A,y.length),S.init(z),S.state.textureUnits=K.getTextureUnits(),y.push(S),jt.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),At.setFromProjectionMatrix(jt,bn,z.reversedDepth),Vt=this.localClippingEnabled,zt=Ut.init(this.clippingPlanes,Vt),M=gt.get(A,w.length),M.init(),w.push(M),Tt.enabled===!0&&Tt.isPresenting===!0){let St=I.xr.getDepthSensingMesh();St!==null&&Jl(St,z,-1/0,I.sortObjects)}Jl(A,z,0,I.sortObjects),M.finish(),I.sortObjects===!0&&M.sort(Rt,Pt,z.reversedDepth),Et=Tt.enabled===!1||Tt.isPresenting===!1||Tt.hasDepthSensing()===!1,Et&&Wt.addToRenderList(M,A),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),zt===!0&&Ut.beginShadows();let Y=S.state.shadowsArray;if(kt.render(Y,A,z),zt===!0&&Ut.endShadows(),(q&&E.hasRenderPass())===!1){let St=M.opaque,xt=M.transmissive;if(S.setupLights(),z.isArrayCamera){let Ct=z.cameras;if(xt.length>0)for(let Lt=0,Xt=Ct.length;Lt<Xt;Lt++){let Yt=Ct[Lt];du(St,xt,A,Yt)}Et&&Wt.render(A);for(let Lt=0,Xt=Ct.length;Lt<Xt;Lt++){let Yt=Ct[Lt];fu(M,A,Yt,Yt.viewport)}}else xt.length>0&&du(St,xt,A,z),Et&&Wt.render(A),fu(M,A,z)}F!==null&&D===0&&(K.updateMultisampleRenderTarget(F),K.updateRenderTargetMipmap(F)),q&&E.end(I),A.isScene===!0&&A.onAfterRender(I,A,z),bt.resetDefaultState(),W=-1,$=null,y.pop(),y.length>0?(S=y[y.length-1],K.setTextureUnits(S.state.textureUnits),zt===!0&&Ut.setGlobalState(I.clippingPlanes,S.state.camera)):S=null,w.pop(),w.length>0?M=w[w.length-1]:M=null,N!==null&&N.renderEnd()};function Jl(A,z,J,q){if(A.visible===!1)return;if(A.layers.test(z.layers)){if(A.isGroup)J=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(z);else if(A.isLightProbeGrid)S.pushLightProbeGrid(A);else if(A.isLight)S.pushLight(A),A.castShadow&&S.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||At.intersectsSprite(A)){q&&at.setFromMatrixPosition(A.matrixWorld).applyMatrix4(jt);let St=Q.update(A),xt=A.material;xt.visible&&M.push(A,St,xt,J,at.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||At.intersectsObject(A))){let St=Q.update(A),xt=A.material;if(q&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),at.copy(A.boundingSphere.center)):(St.boundingSphere===null&&St.computeBoundingSphere(),at.copy(St.boundingSphere.center)),at.applyMatrix4(A.matrixWorld).applyMatrix4(jt)),Array.isArray(xt)){let Ct=St.groups;for(let Lt=0,Xt=Ct.length;Lt<Xt;Lt++){let Yt=Ct[Lt],Nt=xt[Yt.materialIndex];Nt&&Nt.visible&&M.push(A,St,Nt,J,at.z,Yt)}}else xt.visible&&M.push(A,St,xt,J,at.z,null)}}let vt=A.children;for(let St=0,xt=vt.length;St<xt;St++)Jl(vt[St],z,J,q)}function fu(A,z,J,q){let{opaque:Y,transmissive:vt,transparent:St}=A;S.setupLightsView(J),zt===!0&&Ut.setGlobalState(I.clippingPlanes,J),q&&v.viewport(et.copy(q)),Y.length>0&&ra(Y,z,J),vt.length>0&&ra(vt,z,J),St.length>0&&ra(St,z,J),v.buffers.depth.setTest(!0),v.buffers.depth.setMask(!0),v.buffers.color.setMask(!0),v.setPolygonOffset(!1)}function du(A,z,J,q){if((J.isScene===!0?J.overrideMaterial:null)!==null)return;if(S.state.transmissionRenderTarget[q.id]===void 0){let Nt=Ht.has("EXT_color_buffer_half_float")||Ht.has("EXT_color_buffer_float");S.state.transmissionRenderTarget[q.id]=new sn(1,1,{generateMipmaps:!0,type:Nt?Vn:on,minFilter:Ai,samples:Math.max(4,C.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:$t.workingColorSpace})}let vt=S.state.transmissionRenderTarget[q.id],St=q.viewport||et;vt.setSize(St.z*I.transmissionResolutionScale,St.w*I.transmissionResolutionScale);let xt=I.getRenderTarget(),Ct=I.getActiveCubeFace(),Lt=I.getActiveMipmapLevel();I.setRenderTarget(vt),I.getClearColor(ft),yt=I.getClearAlpha(),yt<1&&I.setClearColor(16777215,.5),I.clear(),Et&&Wt.render(J);let Xt=I.toneMapping;I.toneMapping=Sn;let Yt=q.viewport;if(q.viewport!==void 0&&(q.viewport=void 0),S.setupLightsView(q),zt===!0&&Ut.setGlobalState(I.clippingPlanes,q),ra(A,J,q),K.updateMultisampleRenderTarget(vt),K.updateRenderTargetMipmap(vt),Ht.has("WEBGL_multisampled_render_to_texture")===!1){let Nt=!1;for(let se=0,_e=z.length;se<_e;se++){let me=z[se],{object:oe,geometry:Ue,material:Mt,group:je}=me;if(Mt.side===zn&&oe.layers.test(q.layers)){let Qt=Mt.side;Mt.side=He,Mt.needsUpdate=!0,pu(oe,J,q,Ue,Mt,je),Mt.side=Qt,Mt.needsUpdate=!0,Nt=!0}}Nt===!0&&(K.updateMultisampleRenderTarget(vt),K.updateRenderTargetMipmap(vt))}I.setRenderTarget(xt,Ct,Lt),I.setClearColor(ft,yt),Yt!==void 0&&(q.viewport=Yt),I.toneMapping=Xt}function ra(A,z,J){let q=z.isScene===!0?z.overrideMaterial:null;for(let Y=0,vt=A.length;Y<vt;Y++){let St=A[Y],{object:xt,geometry:Ct,group:Lt}=St,Xt=St.material;Xt.allowOverride===!0&&q!==null&&(Xt=q),xt.layers.test(J.layers)&&pu(xt,z,J,Ct,Xt,Lt)}}function pu(A,z,J,q,Y,vt){A.onBeforeRender(I,z,J,q,Y,vt),A.modelViewMatrix.multiplyMatrices(J.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),Y.onBeforeRender(I,z,J,q,A,vt),Y.transparent===!0&&Y.side===zn&&Y.forceSinglePass===!1?(Y.side=He,Y.needsUpdate=!0,I.renderBufferDirect(J,z,q,Y,A,vt),Y.side=Qn,Y.needsUpdate=!0,I.renderBufferDirect(J,z,q,Y,A,vt),Y.side=zn):I.renderBufferDirect(J,z,q,Y,A,vt),A.onAfterRender(I,z,J,q,Y,vt)}function aa(A,z,J){z.isScene!==!0&&(z=lt);let q=X.get(A),Y=S.state.lights,vt=S.state.shadowsArray,St=Y.state.version,xt=dt.getParameters(A,Y.state,vt,z,J,S.state.lightProbeGridArray),Ct=dt.getProgramCacheKey(xt),Lt=q.programs;q.environment=A.isMeshStandardMaterial||A.isMeshLambertMaterial||A.isMeshPhongMaterial?z.environment:null,q.fog=z.fog;let Xt=A.isMeshStandardMaterial||A.isMeshLambertMaterial&&!A.envMap||A.isMeshPhongMaterial&&!A.envMap;q.envMap=rt.get(A.envMap||q.environment,Xt),q.envMapRotation=q.environment!==null&&A.envMap===null?z.environmentRotation:A.envMapRotation,Lt===void 0&&(A.addEventListener("dispose",Ln),Lt=new Map,q.programs=Lt);let Yt=Lt.get(Ct);if(Yt!==void 0){if(q.currentProgram===Yt&&q.lightsStateVersion===St)return gu(A,xt),Yt}else xt.uniforms=dt.getUniforms(A),N!==null&&A.isNodeMaterial&&N.build(A,J,xt),A.onBeforeCompile(xt,I),Yt=dt.acquireProgram(xt,Ct),Lt.set(Ct,Yt),q.uniforms=xt.uniforms;let Nt=q.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Nt.clippingPlanes=Ut.uniform),gu(A,xt),q.needsLights=gg(A),q.lightsStateVersion=St,q.needsLights&&(Nt.ambientLightColor.value=Y.state.ambient,Nt.lightProbe.value=Y.state.probe,Nt.directionalLights.value=Y.state.directional,Nt.directionalLightShadows.value=Y.state.directionalShadow,Nt.spotLights.value=Y.state.spot,Nt.spotLightShadows.value=Y.state.spotShadow,Nt.rectAreaLights.value=Y.state.rectArea,Nt.ltc_1.value=Y.state.rectAreaLTC1,Nt.ltc_2.value=Y.state.rectAreaLTC2,Nt.pointLights.value=Y.state.point,Nt.pointLightShadows.value=Y.state.pointShadow,Nt.hemisphereLights.value=Y.state.hemi,Nt.directionalShadowMatrix.value=Y.state.directionalShadowMatrix,Nt.spotLightMatrix.value=Y.state.spotLightMatrix,Nt.spotLightMap.value=Y.state.spotLightMap,Nt.pointShadowMatrix.value=Y.state.pointShadowMatrix),q.lightProbeGrid=S.state.lightProbeGridArray.length>0,q.currentProgram=Yt,q.uniformsList=null,Yt}function mu(A){if(A.uniformsList===null){let z=A.currentProgram.getUniforms();A.uniformsList=Os.seqWithValue(z.seq,A.uniforms)}return A.uniformsList}function gu(A,z){let J=X.get(A);J.outputColorSpace=z.outputColorSpace,J.batching=z.batching,J.batchingColor=z.batchingColor,J.instancing=z.instancing,J.instancingColor=z.instancingColor,J.instancingMorph=z.instancingMorph,J.skinning=z.skinning,J.morphTargets=z.morphTargets,J.morphNormals=z.morphNormals,J.morphColors=z.morphColors,J.morphTargetsCount=z.morphTargetsCount,J.numClippingPlanes=z.numClippingPlanes,J.numIntersection=z.numClipIntersection,J.vertexAlphas=z.vertexAlphas,J.vertexTangents=z.vertexTangents,J.toneMapping=z.toneMapping}function dg(A,z){if(A.length===0)return null;if(A.length===1)return A[0].texture!==null?A[0]:null;x.setFromMatrixPosition(z.matrixWorld);for(let J=0,q=A.length;J<q;J++){let Y=A[J];if(Y.texture!==null&&Y.boundingBox.containsPoint(x))return Y}return null}function pg(A,z,J,q,Y){z.isScene!==!0&&(z=lt),K.resetTextureUnits();let vt=z.fog,St=q.isMeshStandardMaterial||q.isMeshLambertMaterial||q.isMeshPhongMaterial?z.environment:null,xt=F===null?I.outputColorSpace:F.isXRRenderTarget===!0?F.texture.colorSpace:$t.workingColorSpace,Ct=q.isMeshStandardMaterial||q.isMeshLambertMaterial&&!q.envMap||q.isMeshPhongMaterial&&!q.envMap,Lt=rt.get(q.envMap||St,Ct),Xt=q.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,Yt=!!J.attributes.tangent&&(!!q.normalMap||q.anisotropy>0),Nt=!!J.morphAttributes.position,se=!!J.morphAttributes.normal,_e=!!J.morphAttributes.color,me=Sn;q.toneMapped&&(F===null||F.isXRRenderTarget===!0)&&(me=I.toneMapping);let oe=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,Ue=oe!==void 0?oe.length:0,Mt=X.get(q),je=S.state.lights;if(zt===!0&&(Vt===!0||A!==$)){let he=A===$&&q.id===W;Ut.setState(q,A,he)}let Qt=!1;q.version===Mt.__version?(Mt.needsLights&&Mt.lightsStateVersion!==je.state.version||Mt.outputColorSpace!==xt||Y.isBatchedMesh&&Mt.batching===!1||!Y.isBatchedMesh&&Mt.batching===!0||Y.isBatchedMesh&&Mt.batchingColor===!0&&Y.colorTexture===null||Y.isBatchedMesh&&Mt.batchingColor===!1&&Y.colorTexture!==null||Y.isInstancedMesh&&Mt.instancing===!1||!Y.isInstancedMesh&&Mt.instancing===!0||Y.isSkinnedMesh&&Mt.skinning===!1||!Y.isSkinnedMesh&&Mt.skinning===!0||Y.isInstancedMesh&&Mt.instancingColor===!0&&Y.instanceColor===null||Y.isInstancedMesh&&Mt.instancingColor===!1&&Y.instanceColor!==null||Y.isInstancedMesh&&Mt.instancingMorph===!0&&Y.morphTexture===null||Y.isInstancedMesh&&Mt.instancingMorph===!1&&Y.morphTexture!==null||Mt.envMap!==Lt||q.fog===!0&&Mt.fog!==vt||Mt.numClippingPlanes!==void 0&&(Mt.numClippingPlanes!==Ut.numPlanes||Mt.numIntersection!==Ut.numIntersection)||Mt.vertexAlphas!==Xt||Mt.vertexTangents!==Yt||Mt.morphTargets!==Nt||Mt.morphNormals!==se||Mt.morphColors!==_e||Mt.toneMapping!==me||Mt.morphTargetsCount!==Ue||!!Mt.lightProbeGrid!=S.state.lightProbeGridArray.length>0)&&(Qt=!0):(Qt=!0,Mt.__version=q.version);let ln=Mt.currentProgram;Qt===!0&&(ln=aa(q,z,Y),N&&q.isNodeMaterial&&N.onUpdateProgram(q,ln,Mt));let Nn=!1,li=!1,ss=!1,le=ln.getUniforms(),xe=Mt.uniforms;if(v.useProgram(ln.program)&&(Nn=!0,li=!0,ss=!0),q.id!==W&&(W=q.id,li=!0),Mt.needsLights){let he=dg(S.state.lightProbeGridArray,Y);Mt.lightProbeGrid!==he&&(Mt.lightProbeGrid=he,li=!0)}if(Nn||$!==A){v.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),le.setValue(O,"projectionMatrix",A.projectionMatrix),le.setValue(O,"viewMatrix",A.matrixWorldInverse);let hi=le.map.cameraPosition;hi!==void 0&&hi.setValue(O,ye.setFromMatrixPosition(A.matrixWorld)),C.logarithmicDepthBuffer&&le.setValue(O,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(q.isMeshPhongMaterial||q.isMeshToonMaterial||q.isMeshLambertMaterial||q.isMeshBasicMaterial||q.isMeshStandardMaterial||q.isShaderMaterial)&&le.setValue(O,"isOrthographic",A.isOrthographicCamera===!0),$!==A&&($=A,li=!0,ss=!0)}if(Mt.needsLights&&(je.state.directionalShadowMap.length>0&&le.setValue(O,"directionalShadowMap",je.state.directionalShadowMap,K),je.state.spotShadowMap.length>0&&le.setValue(O,"spotShadowMap",je.state.spotShadowMap,K),je.state.pointShadowMap.length>0&&le.setValue(O,"pointShadowMap",je.state.pointShadowMap,K)),Y.isSkinnedMesh){le.setOptional(O,Y,"bindMatrix"),le.setOptional(O,Y,"bindMatrixInverse");let he=Y.skeleton;he&&(he.boneTexture===null&&he.computeBoneTexture(),le.setValue(O,"boneTexture",he.boneTexture,K))}Y.isBatchedMesh&&(le.setOptional(O,Y,"batchingTexture"),le.setValue(O,"batchingTexture",Y._matricesTexture,K),le.setOptional(O,Y,"batchingIdTexture"),le.setValue(O,"batchingIdTexture",Y._indirectTexture,K),le.setOptional(O,Y,"batchingColorTexture"),Y._colorsTexture!==null&&le.setValue(O,"batchingColorTexture",Y._colorsTexture,K));let ci=J.morphAttributes;if((ci.position!==void 0||ci.normal!==void 0||ci.color!==void 0)&&B.update(Y,J,ln),(li||Mt.receiveShadow!==Y.receiveShadow)&&(Mt.receiveShadow=Y.receiveShadow,le.setValue(O,"receiveShadow",Y.receiveShadow)),(q.isMeshStandardMaterial||q.isMeshLambertMaterial||q.isMeshPhongMaterial)&&q.envMap===null&&z.environment!==null&&(xe.envMapIntensity.value=z.environmentIntensity),xe.dfgLUT!==void 0&&(xe.dfgLUT.value=ib()),li){if(le.setValue(O,"toneMappingExposure",I.toneMappingExposure),Mt.needsLights&&mg(xe,ss),vt&&q.fog===!0&&Dt.refreshFogUniforms(xe,vt),Dt.refreshMaterialUniforms(xe,q,nt,it,S.state.transmissionRenderTarget[A.id]),Mt.needsLights&&Mt.lightProbeGrid){let he=Mt.lightProbeGrid;xe.probesSH.value=he.texture,xe.probesMin.value.copy(he.boundingBox.min),xe.probesMax.value.copy(he.boundingBox.max),xe.probesResolution.value.copy(he.resolution)}Os.upload(O,mu(Mt),xe,K)}if(q.isShaderMaterial&&q.uniformsNeedUpdate===!0&&(Os.upload(O,mu(Mt),xe,K),q.uniformsNeedUpdate=!1),q.isSpriteMaterial&&le.setValue(O,"center",Y.center),le.setValue(O,"modelViewMatrix",Y.modelViewMatrix),le.setValue(O,"normalMatrix",Y.normalMatrix),le.setValue(O,"modelMatrix",Y.matrixWorld),q.uniformsGroups!==void 0){let he=q.uniformsGroups;for(let hi=0,rs=he.length;hi<rs;hi++){let _u=he[hi];st.update(_u,ln),st.bind(_u,ln)}}return ln}function mg(A,z){A.ambientLightColor.needsUpdate=z,A.lightProbe.needsUpdate=z,A.directionalLights.needsUpdate=z,A.directionalLightShadows.needsUpdate=z,A.pointLights.needsUpdate=z,A.pointLightShadows.needsUpdate=z,A.spotLights.needsUpdate=z,A.spotLightShadows.needsUpdate=z,A.rectAreaLights.needsUpdate=z,A.hemisphereLights.needsUpdate=z}function gg(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return U},this.getActiveMipmapLevel=function(){return D},this.getRenderTarget=function(){return F},this.setRenderTargetTextures=function(A,z,J){let q=X.get(A);q.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,q.__autoAllocateDepthBuffer===!1&&(q.__useRenderToTexture=!1),X.get(A.texture).__webglTexture=z,X.get(A.depthTexture).__webglTexture=q.__autoAllocateDepthBuffer?void 0:J,q.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,z){let J=X.get(A);J.__webglFramebuffer=z,J.__useDefaultFramebuffer=z===void 0},this.setRenderTarget=function(A,z=0,J=0){F=A,U=z,D=J;let q=null,Y=!1,vt=!1;if(A){let xt=X.get(A);if(xt.__useDefaultFramebuffer!==void 0){v.bindFramebuffer(O.FRAMEBUFFER,xt.__webglFramebuffer),et.copy(A.viewport),G.copy(A.scissor),ot=A.scissorTest,v.viewport(et),v.scissor(G),v.setScissorTest(ot),W=-1;return}else if(xt.__webglFramebuffer===void 0)K.setupRenderTarget(A);else if(xt.__hasExternalTextures)K.rebindTextures(A,X.get(A.texture).__webglTexture,X.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){let Xt=A.depthTexture;if(xt.__boundDepthTexture!==Xt){if(Xt!==null&&X.has(Xt)&&(A.width!==Xt.image.width||A.height!==Xt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");K.setupDepthRenderbuffer(A)}}let Ct=A.texture;(Ct.isData3DTexture||Ct.isDataArrayTexture||Ct.isCompressedArrayTexture)&&(vt=!0);let Lt=X.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Lt[z])?q=Lt[z][J]:q=Lt[z],Y=!0):A.samples>0&&K.useMultisampledRTT(A)===!1?q=X.get(A).__webglMultisampledFramebuffer:Array.isArray(Lt)?q=Lt[J]:q=Lt,et.copy(A.viewport),G.copy(A.scissor),ot=A.scissorTest}else et.copy(wt).multiplyScalar(nt).floor(),G.copy(te).multiplyScalar(nt).floor(),ot=ht;if(J!==0&&(q=H),v.bindFramebuffer(O.FRAMEBUFFER,q)&&v.drawBuffers(A,q),v.viewport(et),v.scissor(G),v.setScissorTest(ot),Y){let xt=X.get(A.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+z,xt.__webglTexture,J)}else if(vt){let xt=z;for(let Ct=0;Ct<A.textures.length;Ct++){let Lt=X.get(A.textures[Ct]);O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0+Ct,Lt.__webglTexture,J,xt)}}else if(A!==null&&J!==0){let xt=X.get(A.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,xt.__webglTexture,J)}W=-1},this.readRenderTargetPixels=function(A,z,J,q,Y,vt,St,xt=0){if(!(A&&A.isWebGLRenderTarget)){Bt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ct=X.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&St!==void 0&&(Ct=Ct[St]),Ct){v.bindFramebuffer(O.FRAMEBUFFER,Ct);try{let Lt=A.textures[xt],Xt=Lt.format,Yt=Lt.type;if(A.textures.length>1&&O.readBuffer(O.COLOR_ATTACHMENT0+xt),!C.textureFormatReadable(Xt)){Bt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!C.textureTypeReadable(Yt)){Bt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}z>=0&&z<=A.width-q&&J>=0&&J<=A.height-Y&&O.readPixels(z,J,q,Y,mt.convert(Xt),mt.convert(Yt),vt)}finally{let Lt=F!==null?X.get(F).__webglFramebuffer:null;v.bindFramebuffer(O.FRAMEBUFFER,Lt)}}},this.readRenderTargetPixelsAsync=async function(A,z,J,q,Y,vt,St,xt=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ct=X.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&St!==void 0&&(Ct=Ct[St]),Ct)if(z>=0&&z<=A.width-q&&J>=0&&J<=A.height-Y){v.bindFramebuffer(O.FRAMEBUFFER,Ct);let Lt=A.textures[xt],Xt=Lt.format,Yt=Lt.type;if(A.textures.length>1&&O.readBuffer(O.COLOR_ATTACHMENT0+xt),!C.textureFormatReadable(Xt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!C.textureTypeReadable(Yt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Nt=O.createBuffer();O.bindBuffer(O.PIXEL_PACK_BUFFER,Nt),O.bufferData(O.PIXEL_PACK_BUFFER,vt.byteLength,O.STREAM_READ),O.readPixels(z,J,q,Y,mt.convert(Xt),mt.convert(Yt),0);let se=F!==null?X.get(F).__webglFramebuffer:null;v.bindFramebuffer(O.FRAMEBUFFER,se);let _e=O.fenceSync(O.SYNC_GPU_COMMANDS_COMPLETE,0);return O.flush(),await Cf(O,_e,4),O.bindBuffer(O.PIXEL_PACK_BUFFER,Nt),O.getBufferSubData(O.PIXEL_PACK_BUFFER,0,vt),O.deleteBuffer(Nt),O.deleteSync(_e),vt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,z=null,J=0){let q=Math.pow(2,-J),Y=Math.floor(A.image.width*q),vt=Math.floor(A.image.height*q),St=z!==null?z.x:0,xt=z!==null?z.y:0;K.setTexture2D(A,0),O.copyTexSubImage2D(O.TEXTURE_2D,J,0,0,St,xt,Y,vt),v.unbindTexture()},this.copyTextureToTexture=function(A,z,J=null,q=null,Y=0,vt=0){let St,xt,Ct,Lt,Xt,Yt,Nt,se,_e,me=A.isCompressedTexture?A.mipmaps[vt]:A.image;if(J!==null)St=J.max.x-J.min.x,xt=J.max.y-J.min.y,Ct=J.isBox3?J.max.z-J.min.z:1,Lt=J.min.x,Xt=J.min.y,Yt=J.isBox3?J.min.z:0;else{let xe=Math.pow(2,-Y);St=Math.floor(me.width*xe),xt=Math.floor(me.height*xe),A.isDataArrayTexture?Ct=me.depth:A.isData3DTexture?Ct=Math.floor(me.depth*xe):Ct=1,Lt=0,Xt=0,Yt=0}q!==null?(Nt=q.x,se=q.y,_e=q.z):(Nt=0,se=0,_e=0);let oe=mt.convert(z.format),Ue=mt.convert(z.type),Mt;z.isData3DTexture?(K.setTexture3D(z,0),Mt=O.TEXTURE_3D):z.isDataArrayTexture||z.isCompressedArrayTexture?(K.setTexture2DArray(z,0),Mt=O.TEXTURE_2D_ARRAY):(K.setTexture2D(z,0),Mt=O.TEXTURE_2D),v.activeTexture(O.TEXTURE0),v.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,z.flipY),v.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),v.pixelStorei(O.UNPACK_ALIGNMENT,z.unpackAlignment);let je=v.getParameter(O.UNPACK_ROW_LENGTH),Qt=v.getParameter(O.UNPACK_IMAGE_HEIGHT),ln=v.getParameter(O.UNPACK_SKIP_PIXELS),Nn=v.getParameter(O.UNPACK_SKIP_ROWS),li=v.getParameter(O.UNPACK_SKIP_IMAGES);v.pixelStorei(O.UNPACK_ROW_LENGTH,me.width),v.pixelStorei(O.UNPACK_IMAGE_HEIGHT,me.height),v.pixelStorei(O.UNPACK_SKIP_PIXELS,Lt),v.pixelStorei(O.UNPACK_SKIP_ROWS,Xt),v.pixelStorei(O.UNPACK_SKIP_IMAGES,Yt);let ss=A.isDataArrayTexture||A.isData3DTexture,le=z.isDataArrayTexture||z.isData3DTexture;if(A.isDepthTexture){let xe=X.get(A),ci=X.get(z),he=X.get(xe.__renderTarget),hi=X.get(ci.__renderTarget);v.bindFramebuffer(O.READ_FRAMEBUFFER,he.__webglFramebuffer),v.bindFramebuffer(O.DRAW_FRAMEBUFFER,hi.__webglFramebuffer);for(let rs=0;rs<Ct;rs++)ss&&(O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,X.get(A).__webglTexture,Y,Yt+rs),O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,X.get(z).__webglTexture,vt,_e+rs)),O.blitFramebuffer(Lt,Xt,St,xt,Nt,se,St,xt,O.DEPTH_BUFFER_BIT,O.NEAREST);v.bindFramebuffer(O.READ_FRAMEBUFFER,null),v.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else if(Y!==0||A.isRenderTargetTexture||X.has(A)){let xe=X.get(A),ci=X.get(z);v.bindFramebuffer(O.READ_FRAMEBUFFER,R),v.bindFramebuffer(O.DRAW_FRAMEBUFFER,L);for(let he=0;he<Ct;he++)ss?O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,xe.__webglTexture,Y,Yt+he):O.framebufferTexture2D(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,xe.__webglTexture,Y),le?O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,ci.__webglTexture,vt,_e+he):O.framebufferTexture2D(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,ci.__webglTexture,vt),Y!==0?O.blitFramebuffer(Lt,Xt,St,xt,Nt,se,St,xt,O.COLOR_BUFFER_BIT,O.NEAREST):le?O.copyTexSubImage3D(Mt,vt,Nt,se,_e+he,Lt,Xt,St,xt):O.copyTexSubImage2D(Mt,vt,Nt,se,Lt,Xt,St,xt);v.bindFramebuffer(O.READ_FRAMEBUFFER,null),v.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else le?A.isDataTexture||A.isData3DTexture?O.texSubImage3D(Mt,vt,Nt,se,_e,St,xt,Ct,oe,Ue,me.data):z.isCompressedArrayTexture?O.compressedTexSubImage3D(Mt,vt,Nt,se,_e,St,xt,Ct,oe,me.data):O.texSubImage3D(Mt,vt,Nt,se,_e,St,xt,Ct,oe,Ue,me):A.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,vt,Nt,se,St,xt,oe,Ue,me.data):A.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,vt,Nt,se,me.width,me.height,oe,me.data):O.texSubImage2D(O.TEXTURE_2D,vt,Nt,se,St,xt,oe,Ue,me);v.pixelStorei(O.UNPACK_ROW_LENGTH,je),v.pixelStorei(O.UNPACK_IMAGE_HEIGHT,Qt),v.pixelStorei(O.UNPACK_SKIP_PIXELS,ln),v.pixelStorei(O.UNPACK_SKIP_ROWS,Nn),v.pixelStorei(O.UNPACK_SKIP_IMAGES,li),vt===0&&z.generateMipmaps&&O.generateMipmap(Mt),v.unbindTexture()},this.initRenderTarget=function(A){X.get(A).__webglFramebuffer===void 0&&K.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?K.setTextureCube(A,0):A.isData3DTexture?K.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?K.setTexture2DArray(A,0):K.setTexture2D(A,0),v.unbindTexture()},this.resetState=function(){U=0,D=0,F=null,v.reset(),bt.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return bn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=$t._getDrawingBufferColorSpace(t),e.unpackColorSpace=$t._getUnpackColorSpace()}};var cd={type:"change"},wh={type:"start"},ud={type:"end"},ml=new ti,hd=new hn,sb=Math.cos(70*jc.DEG2RAD),Ee=new V,Ze=2*Math.PI,re={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Sh=1e-6,gl=class extends Sr{constructor(t,e=null){super(t,e),this.state=re.NONE,this.target=new V,this.cursor=new V,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:wi.ROTATE,MIDDLE:wi.DOLLY,RIGHT:wi.PAN},this.touches={ONE:Ei.ROTATE,TWO:Ei.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new V,this._lastQuaternion=new nn,this._lastTargetPosition=new V,this._quat=new nn().setFromUnitVectors(t.up,new V(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Ds,this._sphericalDelta=new Ds,this._scale=1,this._panOffset=new V,this._rotateStart=new Ot,this._rotateEnd=new Ot,this._rotateDelta=new Ot,this._panStart=new Ot,this._panEnd=new Ot,this._panDelta=new Ot,this._dollyStart=new Ot,this._dollyEnd=new Ot,this._dollyDelta=new Ot,this._dollyDirection=new V,this._mouse=new Ot,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=ab.bind(this),this._onPointerDown=rb.bind(this),this._onPointerUp=ob.bind(this),this._onContextMenu=pb.bind(this),this._onMouseWheel=hb.bind(this),this._onKeyDown=ub.bind(this),this._onTouchStart=fb.bind(this),this._onTouchMove=db.bind(this),this._onMouseDown=lb.bind(this),this._onMouseMove=cb.bind(this),this._interceptControlDown=mb.bind(this),this._interceptControlUp=gb.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(t){this._cursorStyle=t,t==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction=""}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(cd),this.update(),this.state=re.NONE}pan(t,e){this._pan(t,e),this.update()}dollyIn(t){this._dollyIn(t),this.update()}dollyOut(t){this._dollyOut(t),this.update()}rotateLeft(t){this._rotateLeft(t),this.update()}rotateUp(t){this._rotateUp(t),this.update()}update(t=null){let e=this.object.position;Ee.copy(e).sub(this.target),Ee.applyQuaternion(this._quat),this._spherical.setFromVector3(Ee),this.autoRotate&&this.state===re.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(i)&&isFinite(s)&&(i<-Math.PI?i+=Ze:i>Math.PI&&(i-=Ze),s<-Math.PI?s+=Ze:s>Math.PI&&(s-=Ze),i<=s?this._spherical.theta=Math.max(i,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+s)/2?Math.max(i,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=a!=this._spherical.radius}if(Ee.setFromSpherical(this._spherical),Ee.applyQuaternion(this._quatInverse),e.copy(this.target).add(Ee),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){let o=Ee.length();a=this._clampDistance(o*this._scale);let l=o-a;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){let o=new V(this._mouse.x,this._mouse.y,0);o.unproject(this.object);let l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;let c=new V(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(o),this.object.updateMatrixWorld(),a=Ee.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(ml.origin.copy(this.object.position),ml.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(ml.direction))<sb?this.object.lookAt(this.target):(hd.setFromNormalAndCoplanarPoint(this.object.up,this.target),ml.intersectPlane(hd,this.target))))}else if(this.object.isOrthographicCamera){let a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>Sh||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Sh||this._lastTargetPosition.distanceToSquared(this.target)>Sh?(this.dispatchEvent(cd),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?Ze/60*this.autoRotateSpeed*t:Ze/60/60*this.autoRotateSpeed}_getZoomScale(t){let e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){Ee.setFromMatrixColumn(e,0),Ee.multiplyScalar(-t),this._panOffset.add(Ee)}_panUp(t,e){this.screenSpacePanning===!0?Ee.setFromMatrixColumn(e,1):(Ee.setFromMatrixColumn(e,0),Ee.crossVectors(this.object.up,Ee)),Ee.multiplyScalar(t),this._panOffset.add(Ee)}_pan(t,e){let i=this.domElement;if(this.object.isPerspectiveCamera){let s=this.object.position;Ee.copy(s).sub(this.target);let r=Ee.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*r/i.clientHeight,this.object.matrix),this._panUp(2*e*r/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let i=this.domElement.getBoundingClientRect(),s=t-i.left,r=e-i.top,a=i.width,o=i.height;this._mouse.x=s/a*2-1,this._mouse.y=-(r/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let e=this.domElement;this._rotateLeft(Ze*this._rotateDelta.x/e.clientHeight),this._rotateUp(Ze*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(Ze*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-Ze*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(Ze*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-Ze*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._rotateStart.set(i,s)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panStart.set(i,s)}}_handleTouchStartDolly(t){let e=this._getSecondPointerPosition(t),i=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(i*i+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{let i=this._getSecondPointerPosition(t),s=.5*(t.pageX+i.x),r=.5*(t.pageY+i.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let e=this.domElement;this._rotateLeft(Ze*this._rotateDelta.x/e.clientHeight),this._rotateUp(Ze*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panEnd.set(i,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){let e=this._getSecondPointerPosition(t),i=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(i*i+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let a=(t.pageX+e.x)*.5,o=(t.pageY+e.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new Ot,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){let e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){let e=t.deltaMode,i={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}};function rb(n){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(n.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(n)&&(this._addPointer(n),n.pointerType==="touch"?this._onTouchStart(n):this._onMouseDown(n),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function ab(n){this.enabled!==!1&&(n.pointerType==="touch"?this._onTouchMove(n):this._onMouseMove(n))}function ob(n){switch(this._removePointer(n),this._pointers.length){case 0:this.domElement.releasePointerCapture(n.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(ud),this.state=re.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:let t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function lb(n){let t;switch(n.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case wi.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(n),this.state=re.DOLLY;break;case wi.ROTATE:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=re.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=re.ROTATE}break;case wi.PAN:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=re.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=re.PAN}break;default:this.state=re.NONE}this.state!==re.NONE&&this.dispatchEvent(wh)}function cb(n){switch(this.state){case re.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(n);break;case re.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(n);break;case re.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(n);break}}function hb(n){this.enabled===!1||this.enableZoom===!1||this.state!==re.NONE||(n.preventDefault(),this.dispatchEvent(wh),this._handleMouseWheel(this._customWheelEvent(n)),this.dispatchEvent(ud))}function ub(n){this.enabled!==!1&&this._handleKeyDown(n)}function fb(n){switch(this._trackPointer(n),this._pointers.length){case 1:switch(this.touches.ONE){case Ei.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(n),this.state=re.TOUCH_ROTATE;break;case Ei.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(n),this.state=re.TOUCH_PAN;break;default:this.state=re.NONE}break;case 2:switch(this.touches.TWO){case Ei.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(n),this.state=re.TOUCH_DOLLY_PAN;break;case Ei.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(n),this.state=re.TOUCH_DOLLY_ROTATE;break;default:this.state=re.NONE}break;default:this.state=re.NONE}this.state!==re.NONE&&this.dispatchEvent(wh)}function db(n){switch(this._trackPointer(n),this.state){case re.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(n),this.update();break;case re.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(n),this.update();break;case re.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(n),this.update();break;case re.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(n),this.update();break;default:this.state=re.NONE}}function pb(n){this.enabled!==!1&&n.preventDefault()}function mb(n){n.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function gb(n){n.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function Eh(n,t,e){var i,s=1;n==null&&(n=0),t==null&&(t=0),e==null&&(e=0);function r(){var a,o=i.length,l,c=0,h=0,d=0;for(a=0;a<o;++a)l=i[a],c+=l.x||0,h+=l.y||0,d+=l.z||0;for(c=(c/o-n)*s,h=(h/o-t)*s,d=(d/o-e)*s,a=0;a<o;++a)l=i[a],c&&(l.x-=c),h&&(l.y-=h),d&&(l.z-=d)}return r.initialize=function(a){i=a},r.x=function(a){return arguments.length?(n=+a,r):n},r.y=function(a){return arguments.length?(t=+a,r):t},r.z=function(a){return arguments.length?(e=+a,r):e},r.strength=function(a){return arguments.length?(s=+a,r):s},r}function fd(n){let t=+this._x.call(null,n);return dd(this.cover(t),t,n)}function dd(n,t,e){if(isNaN(t))return n;var i,s=n._root,r={data:e},a=n._x0,o=n._x1,l,c,h,d,u;if(!s)return n._root=r,n;for(;s.length;)if((h=t>=(l=(a+o)/2))?a=l:o=l,i=s,!(s=s[d=+h]))return i[d]=r,n;if(c=+n._x.call(null,s.data),t===c)return r.next=s,i?i[d]=r:n._root=r,n;do i=i?i[d]=new Array(2):n._root=new Array(2),(h=t>=(l=(a+o)/2))?a=l:o=l;while((d=+h)==(u=+(c>=l)));return i[u]=s,i[d]=r,n}function pd(n){Array.isArray(n)||(n=Array.from(n));let t=n.length,e=new Float64Array(t),i=1/0,s=-1/0;for(let r=0,a;r<t;++r)isNaN(a=+this._x.call(null,n[r]))||(e[r]=a,a<i&&(i=a),a>s&&(s=a));if(i>s)return this;this.cover(i).cover(s);for(let r=0;r<t;++r)dd(this,e[r],n[r]);return this}function md(n){if(isNaN(n=+n))return this;var t=this._x0,e=this._x1;if(isNaN(t))e=(t=Math.floor(n))+1;else{for(var i=e-t||1,s=this._root,r,a;t>n||n>=e;)switch(a=+(n<t),r=new Array(2),r[a]=s,s=r,i*=2,a){case 0:e=t+i;break;case 1:t=e-i;break}this._root&&this._root.length&&(this._root=s)}return this._x0=t,this._x1=e,this}function gd(){var n=[];return this.visit(function(t){if(!t.length)do n.push(t.data);while(t=t.next)}),n}function _d(n){return arguments.length?this.cover(+n[0][0]).cover(+n[1][0]):isNaN(this._x0)?void 0:[[this._x0],[this._x1]]}function fn(n,t,e){this.node=n,this.x0=t,this.x1=e}function xd(n,t){var e,i=this._x0,s,r,a=this._x1,o=[],l=this._root,c,h;for(l&&o.push(new fn(l,i,a)),t==null?t=1/0:(i=n-t,a=n+t);c=o.pop();)if(!(!(l=c.node)||(s=c.x0)>a||(r=c.x1)<i))if(l.length){var d=(s+r)/2;o.push(new fn(l[1],d,r),new fn(l[0],s,d)),(h=+(n>=d))&&(c=o[o.length-1],o[o.length-1]=o[o.length-1-h],o[o.length-1-h]=c)}else{var u=Math.abs(n-+this._x.call(null,l.data));u<t&&(t=u,i=n-u,a=n+u,e=l.data)}return e}function yd(n){if(isNaN(l=+this._x.call(null,n)))return this;var t,e=this._root,i,s,r,a=this._x0,o=this._x1,l,c,h,d,u;if(!e)return this;if(e.length)for(;;){if((h=l>=(c=(a+o)/2))?a=c:o=c,t=e,!(e=e[d=+h]))return this;if(!e.length)break;t[d+1&1]&&(i=t,u=d)}for(;e.data!==n;)if(s=e,!(e=e.next))return this;return(r=e.next)&&delete e.next,s?(r?s.next=r:delete s.next,this):t?(r?t[d]=r:delete t[d],(e=t[0]||t[1])&&e===(t[1]||t[0])&&!e.length&&(i?i[u]=e:this._root=e),this):(this._root=r,this)}function vd(n){for(var t=0,e=n.length;t<e;++t)this.remove(n[t]);return this}function bd(){return this._root}function Md(){var n=0;return this.visit(function(t){if(!t.length)do++n;while(t=t.next)}),n}function Sd(n){var t=[],e,i=this._root,s,r,a;for(i&&t.push(new fn(i,this._x0,this._x1));e=t.pop();)if(!n(i=e.node,r=e.x0,a=e.x1)&&i.length){var o=(r+a)/2;(s=i[1])&&t.push(new fn(s,o,a)),(s=i[0])&&t.push(new fn(s,r,o))}return this}function wd(n){var t=[],e=[],i;for(this._root&&t.push(new fn(this._root,this._x0,this._x1));i=t.pop();){var s=i.node;if(s.length){var r,a=i.x0,o=i.x1,l=(a+o)/2;(r=s[0])&&t.push(new fn(r,a,l)),(r=s[1])&&t.push(new fn(r,l,o))}e.push(i)}for(;i=e.pop();)n(i.node,i.x0,i.x1);return this}function Ed(n){return n[0]}function Td(n){return arguments.length?(this._x=n,this):this._x}function Or(n,t){var e=new Th(t==null?Ed:t,NaN,NaN);return n==null?e:e.addAll(n)}function Th(n,t,e){this._x=n,this._x0=t,this._x1=e,this._root=void 0}function Ad(n){for(var t={data:n.data},e=t;n=n.next;)e=e.next={data:n.data};return t}var $e=Or.prototype=Th.prototype;$e.copy=function(){var n=new Th(this._x,this._x0,this._x1),t=this._root,e,i;if(!t)return n;if(!t.length)return n._root=Ad(t),n;for(e=[{source:t,target:n._root=new Array(2)}];t=e.pop();)for(var s=0;s<2;++s)(i=t.source[s])&&(i.length?e.push({source:i,target:t.target[s]=new Array(2)}):t.target[s]=Ad(i));return n};$e.add=fd;$e.addAll=pd;$e.cover=md;$e.data=gd;$e.extent=_d;$e.find=xd;$e.remove=yd;$e.removeAll=vd;$e.root=bd;$e.size=Md;$e.visit=Sd;$e.visitAfter=wd;$e.x=Td;function Cd(n){let t=+this._x.call(null,n),e=+this._y.call(null,n);return Rd(this.cover(t,e),t,e,n)}function Rd(n,t,e,i){if(isNaN(t)||isNaN(e))return n;var s,r=n._root,a={data:i},o=n._x0,l=n._y0,c=n._x1,h=n._y1,d,u,p,g,_,m,f,b;if(!r)return n._root=a,n;for(;r.length;)if((_=t>=(d=(o+c)/2))?o=d:c=d,(m=e>=(u=(l+h)/2))?l=u:h=u,s=r,!(r=r[f=m<<1|_]))return s[f]=a,n;if(p=+n._x.call(null,r.data),g=+n._y.call(null,r.data),t===p&&e===g)return a.next=r,s?s[f]=a:n._root=a,n;do s=s?s[f]=new Array(4):n._root=new Array(4),(_=t>=(d=(o+c)/2))?o=d:c=d,(m=e>=(u=(l+h)/2))?l=u:h=u;while((f=m<<1|_)===(b=(g>=u)<<1|p>=d));return s[b]=r,s[f]=a,n}function Id(n){var t,e,i=n.length,s,r,a=new Array(i),o=new Array(i),l=1/0,c=1/0,h=-1/0,d=-1/0;for(e=0;e<i;++e)isNaN(s=+this._x.call(null,t=n[e]))||isNaN(r=+this._y.call(null,t))||(a[e]=s,o[e]=r,s<l&&(l=s),s>h&&(h=s),r<c&&(c=r),r>d&&(d=r));if(l>h||c>d)return this;for(this.cover(l,c).cover(h,d),e=0;e<i;++e)Rd(this,a[e],o[e],n[e]);return this}function Pd(n,t){if(isNaN(n=+n)||isNaN(t=+t))return this;var e=this._x0,i=this._y0,s=this._x1,r=this._y1;if(isNaN(e))s=(e=Math.floor(n))+1,r=(i=Math.floor(t))+1;else{for(var a=s-e||1,o=this._root,l,c;e>n||n>=s||i>t||t>=r;)switch(c=(t<i)<<1|n<e,l=new Array(4),l[c]=o,o=l,a*=2,c){case 0:s=e+a,r=i+a;break;case 1:e=s-a,r=i+a;break;case 2:s=e+a,i=r-a;break;case 3:e=s-a,i=r-a;break}this._root&&this._root.length&&(this._root=o)}return this._x0=e,this._y0=i,this._x1=s,this._y1=r,this}function Dd(){var n=[];return this.visit(function(t){if(!t.length)do n.push(t.data);while(t=t.next)}),n}function Ld(n){return arguments.length?this.cover(+n[0][0],+n[0][1]).cover(+n[1][0],+n[1][1]):isNaN(this._x0)?void 0:[[this._x0,this._y0],[this._x1,this._y1]]}function Re(n,t,e,i,s){this.node=n,this.x0=t,this.y0=e,this.x1=i,this.y1=s}function Nd(n,t,e){var i,s=this._x0,r=this._y0,a,o,l,c,h=this._x1,d=this._y1,u=[],p=this._root,g,_;for(p&&u.push(new Re(p,s,r,h,d)),e==null?e=1/0:(s=n-e,r=t-e,h=n+e,d=t+e,e*=e);g=u.pop();)if(!(!(p=g.node)||(a=g.x0)>h||(o=g.y0)>d||(l=g.x1)<s||(c=g.y1)<r))if(p.length){var m=(a+l)/2,f=(o+c)/2;u.push(new Re(p[3],m,f,l,c),new Re(p[2],a,f,m,c),new Re(p[1],m,o,l,f),new Re(p[0],a,o,m,f)),(_=(t>=f)<<1|n>=m)&&(g=u[u.length-1],u[u.length-1]=u[u.length-1-_],u[u.length-1-_]=g)}else{var b=n-+this._x.call(null,p.data),T=t-+this._y.call(null,p.data),x=b*b+T*T;if(x<e){var M=Math.sqrt(e=x);s=n-M,r=t-M,h=n+M,d=t+M,i=p.data}}return i}function Ud(n){if(isNaN(h=+this._x.call(null,n))||isNaN(d=+this._y.call(null,n)))return this;var t,e=this._root,i,s,r,a=this._x0,o=this._y0,l=this._x1,c=this._y1,h,d,u,p,g,_,m,f;if(!e)return this;if(e.length)for(;;){if((g=h>=(u=(a+l)/2))?a=u:l=u,(_=d>=(p=(o+c)/2))?o=p:c=p,t=e,!(e=e[m=_<<1|g]))return this;if(!e.length)break;(t[m+1&3]||t[m+2&3]||t[m+3&3])&&(i=t,f=m)}for(;e.data!==n;)if(s=e,!(e=e.next))return this;return(r=e.next)&&delete e.next,s?(r?s.next=r:delete s.next,this):t?(r?t[m]=r:delete t[m],(e=t[0]||t[1]||t[2]||t[3])&&e===(t[3]||t[2]||t[1]||t[0])&&!e.length&&(i?i[f]=e:this._root=e),this):(this._root=r,this)}function Fd(n){for(var t=0,e=n.length;t<e;++t)this.remove(n[t]);return this}function Od(){return this._root}function Bd(){var n=0;return this.visit(function(t){if(!t.length)do++n;while(t=t.next)}),n}function zd(n){var t=[],e,i=this._root,s,r,a,o,l;for(i&&t.push(new Re(i,this._x0,this._y0,this._x1,this._y1));e=t.pop();)if(!n(i=e.node,r=e.x0,a=e.y0,o=e.x1,l=e.y1)&&i.length){var c=(r+o)/2,h=(a+l)/2;(s=i[3])&&t.push(new Re(s,c,h,o,l)),(s=i[2])&&t.push(new Re(s,r,h,c,l)),(s=i[1])&&t.push(new Re(s,c,a,o,h)),(s=i[0])&&t.push(new Re(s,r,a,c,h))}return this}function kd(n){var t=[],e=[],i;for(this._root&&t.push(new Re(this._root,this._x0,this._y0,this._x1,this._y1));i=t.pop();){var s=i.node;if(s.length){var r,a=i.x0,o=i.y0,l=i.x1,c=i.y1,h=(a+l)/2,d=(o+c)/2;(r=s[0])&&t.push(new Re(r,a,o,h,d)),(r=s[1])&&t.push(new Re(r,h,o,l,d)),(r=s[2])&&t.push(new Re(r,a,d,h,c)),(r=s[3])&&t.push(new Re(r,h,d,l,c))}e.push(i)}for(;i=e.pop();)n(i.node,i.x0,i.y0,i.x1,i.y1);return this}function Vd(n){return n[0]}function Gd(n){return arguments.length?(this._x=n,this):this._x}function Hd(n){return n[1]}function Wd(n){return arguments.length?(this._y=n,this):this._y}function ii(n,t,e){var i=new Ah(t==null?Vd:t,e==null?Hd:e,NaN,NaN,NaN,NaN);return n==null?i:i.addAll(n)}function Ah(n,t,e,i,s,r){this._x=n,this._y=t,this._x0=e,this._y0=i,this._x1=s,this._y1=r,this._root=void 0}function Xd(n){for(var t={data:n.data},e=t;n=n.next;)e=e.next={data:n.data};return t}var We=ii.prototype=Ah.prototype;We.copy=function(){var n=new Ah(this._x,this._y,this._x0,this._y0,this._x1,this._y1),t=this._root,e,i;if(!t)return n;if(!t.length)return n._root=Xd(t),n;for(e=[{source:t,target:n._root=new Array(4)}];t=e.pop();)for(var s=0;s<4;++s)(i=t.source[s])&&(i.length?e.push({source:i,target:t.target[s]=new Array(4)}):t.target[s]=Xd(i));return n};We.add=Cd;We.addAll=Id;We.cover=Pd;We.data=Dd;We.extent=Ld;We.find=Nd;We.remove=Ud;We.removeAll=Fd;We.root=Od;We.size=Bd;We.visit=zd;We.visitAfter=kd;We.x=Gd;We.y=Wd;function qd(n){let t=+this._x.call(null,n),e=+this._y.call(null,n),i=+this._z.call(null,n);return Yd(this.cover(t,e,i),t,e,i,n)}function Yd(n,t,e,i,s){if(isNaN(t)||isNaN(e)||isNaN(i))return n;var r,a=n._root,o={data:s},l=n._x0,c=n._y0,h=n._z0,d=n._x1,u=n._y1,p=n._z1,g,_,m,f,b,T,x,M,S,w,y;if(!a)return n._root=o,n;for(;a.length;)if((x=t>=(g=(l+d)/2))?l=g:d=g,(M=e>=(_=(c+u)/2))?c=_:u=_,(S=i>=(m=(h+p)/2))?h=m:p=m,r=a,!(a=a[w=S<<2|M<<1|x]))return r[w]=o,n;if(f=+n._x.call(null,a.data),b=+n._y.call(null,a.data),T=+n._z.call(null,a.data),t===f&&e===b&&i===T)return o.next=a,r?r[w]=o:n._root=o,n;do r=r?r[w]=new Array(8):n._root=new Array(8),(x=t>=(g=(l+d)/2))?l=g:d=g,(M=e>=(_=(c+u)/2))?c=_:u=_,(S=i>=(m=(h+p)/2))?h=m:p=m;while((w=S<<2|M<<1|x)===(y=(T>=m)<<2|(b>=_)<<1|f>=g));return r[y]=a,r[w]=o,n}function Zd(n){Array.isArray(n)||(n=Array.from(n));let t=n.length,e=new Float64Array(t),i=new Float64Array(t),s=new Float64Array(t),r=1/0,a=1/0,o=1/0,l=-1/0,c=-1/0,h=-1/0;for(let d=0,u,p,g,_;d<t;++d)isNaN(p=+this._x.call(null,u=n[d]))||isNaN(g=+this._y.call(null,u))||isNaN(_=+this._z.call(null,u))||(e[d]=p,i[d]=g,s[d]=_,p<r&&(r=p),p>l&&(l=p),g<a&&(a=g),g>c&&(c=g),_<o&&(o=_),_>h&&(h=_));if(r>l||a>c||o>h)return this;this.cover(r,a,o).cover(l,c,h);for(let d=0;d<t;++d)Yd(this,e[d],i[d],s[d],n[d]);return this}function $d(n,t,e){if(isNaN(n=+n)||isNaN(t=+t)||isNaN(e=+e))return this;var i=this._x0,s=this._y0,r=this._z0,a=this._x1,o=this._y1,l=this._z1;if(isNaN(i))a=(i=Math.floor(n))+1,o=(s=Math.floor(t))+1,l=(r=Math.floor(e))+1;else{for(var c=a-i||1,h=this._root,d,u;i>n||n>=a||s>t||t>=o||r>e||e>=l;)switch(u=(e<r)<<2|(t<s)<<1|n<i,d=new Array(8),d[u]=h,h=d,c*=2,u){case 0:a=i+c,o=s+c,l=r+c;break;case 1:i=a-c,o=s+c,l=r+c;break;case 2:a=i+c,s=o-c,l=r+c;break;case 3:i=a-c,s=o-c,l=r+c;break;case 4:a=i+c,o=s+c,r=l-c;break;case 5:i=a-c,o=s+c,r=l-c;break;case 6:a=i+c,s=o-c,r=l-c;break;case 7:i=a-c,s=o-c,r=l-c;break}this._root&&this._root.length&&(this._root=h)}return this._x0=i,this._y0=s,this._z0=r,this._x1=a,this._y1=o,this._z1=l,this}function Jd(){var n=[];return this.visit(function(t){if(!t.length)do n.push(t.data);while(t=t.next)}),n}function Kd(n){return arguments.length?this.cover(+n[0][0],+n[0][1],+n[0][2]).cover(+n[1][0],+n[1][1],+n[1][2]):isNaN(this._x0)?void 0:[[this._x0,this._y0,this._z0],[this._x1,this._y1,this._z1]]}function ne(n,t,e,i,s,r,a){this.node=n,this.x0=t,this.y0=e,this.z0=i,this.x1=s,this.y1=r,this.z1=a}function jd(n,t,e,i){var s,r=this._x0,a=this._y0,o=this._z0,l,c,h,d,u,p,g=this._x1,_=this._y1,m=this._z1,f=[],b=this._root,T,x;for(b&&f.push(new ne(b,r,a,o,g,_,m)),i==null?i=1/0:(r=n-i,a=t-i,o=e-i,g=n+i,_=t+i,m=e+i,i*=i);T=f.pop();)if(!(!(b=T.node)||(l=T.x0)>g||(c=T.y0)>_||(h=T.z0)>m||(d=T.x1)<r||(u=T.y1)<a||(p=T.z1)<o))if(b.length){var M=(l+d)/2,S=(c+u)/2,w=(h+p)/2;f.push(new ne(b[7],M,S,w,d,u,p),new ne(b[6],l,S,w,M,u,p),new ne(b[5],M,c,w,d,S,p),new ne(b[4],l,c,w,M,S,p),new ne(b[3],M,S,h,d,u,w),new ne(b[2],l,S,h,M,u,w),new ne(b[1],M,c,h,d,S,w),new ne(b[0],l,c,h,M,S,w)),(x=(e>=w)<<2|(t>=S)<<1|n>=M)&&(T=f[f.length-1],f[f.length-1]=f[f.length-1-x],f[f.length-1-x]=T)}else{var y=n-+this._x.call(null,b.data),E=t-+this._y.call(null,b.data),I=e-+this._z.call(null,b.data),P=y*y+E*E+I*I;if(P<i){var N=Math.sqrt(i=P);r=n-N,a=t-N,o=e-N,g=n+N,_=t+N,m=e+N,s=b.data}}return s}var _b=(n,t,e,i,s,r)=>Math.sqrt((n-i)**2+(t-s)**2+(e-r)**2);function Qd(n,t,e,i){let s=[],r=n-i,a=t-i,o=e-i,l=n+i,c=t+i,h=e+i;return this.visit((d,u,p,g,_,m,f)=>{if(!d.length)do{let b=d.data;_b(n,t,e,this._x(b),this._y(b),this._z(b))<=i&&s.push(b)}while(d=d.next);return u>l||p>c||g>h||_<r||m<a||f<o}),s}function tp(n){if(isNaN(u=+this._x.call(null,n))||isNaN(p=+this._y.call(null,n))||isNaN(g=+this._z.call(null,n)))return this;var t,e=this._root,i,s,r,a=this._x0,o=this._y0,l=this._z0,c=this._x1,h=this._y1,d=this._z1,u,p,g,_,m,f,b,T,x,M,S;if(!e)return this;if(e.length)for(;;){if((b=u>=(_=(a+c)/2))?a=_:c=_,(T=p>=(m=(o+h)/2))?o=m:h=m,(x=g>=(f=(l+d)/2))?l=f:d=f,t=e,!(e=e[M=x<<2|T<<1|b]))return this;if(!e.length)break;(t[M+1&7]||t[M+2&7]||t[M+3&7]||t[M+4&7]||t[M+5&7]||t[M+6&7]||t[M+7&7])&&(i=t,S=M)}for(;e.data!==n;)if(s=e,!(e=e.next))return this;return(r=e.next)&&delete e.next,s?(r?s.next=r:delete s.next,this):t?(r?t[M]=r:delete t[M],(e=t[0]||t[1]||t[2]||t[3]||t[4]||t[5]||t[6]||t[7])&&e===(t[7]||t[6]||t[5]||t[4]||t[3]||t[2]||t[1]||t[0])&&!e.length&&(i?i[S]=e:this._root=e),this):(this._root=r,this)}function ep(n){for(var t=0,e=n.length;t<e;++t)this.remove(n[t]);return this}function np(){return this._root}function ip(){var n=0;return this.visit(function(t){if(!t.length)do++n;while(t=t.next)}),n}function sp(n){var t=[],e,i=this._root,s,r,a,o,l,c,h;for(i&&t.push(new ne(i,this._x0,this._y0,this._z0,this._x1,this._y1,this._z1));e=t.pop();)if(!n(i=e.node,r=e.x0,a=e.y0,o=e.z0,l=e.x1,c=e.y1,h=e.z1)&&i.length){var d=(r+l)/2,u=(a+c)/2,p=(o+h)/2;(s=i[7])&&t.push(new ne(s,d,u,p,l,c,h)),(s=i[6])&&t.push(new ne(s,r,u,p,d,c,h)),(s=i[5])&&t.push(new ne(s,d,a,p,l,u,h)),(s=i[4])&&t.push(new ne(s,r,a,p,d,u,h)),(s=i[3])&&t.push(new ne(s,d,u,o,l,c,p)),(s=i[2])&&t.push(new ne(s,r,u,o,d,c,p)),(s=i[1])&&t.push(new ne(s,d,a,o,l,u,p)),(s=i[0])&&t.push(new ne(s,r,a,o,d,u,p))}return this}function rp(n){var t=[],e=[],i;for(this._root&&t.push(new ne(this._root,this._x0,this._y0,this._z0,this._x1,this._y1,this._z1));i=t.pop();){var s=i.node;if(s.length){var r,a=i.x0,o=i.y0,l=i.z0,c=i.x1,h=i.y1,d=i.z1,u=(a+c)/2,p=(o+h)/2,g=(l+d)/2;(r=s[0])&&t.push(new ne(r,a,o,l,u,p,g)),(r=s[1])&&t.push(new ne(r,u,o,l,c,p,g)),(r=s[2])&&t.push(new ne(r,a,p,l,u,h,g)),(r=s[3])&&t.push(new ne(r,u,p,l,c,h,g)),(r=s[4])&&t.push(new ne(r,a,o,g,u,p,d)),(r=s[5])&&t.push(new ne(r,u,o,g,c,p,d)),(r=s[6])&&t.push(new ne(r,a,p,g,u,h,d)),(r=s[7])&&t.push(new ne(r,u,p,g,c,h,d))}e.push(i)}for(;i=e.pop();)n(i.node,i.x0,i.y0,i.z0,i.x1,i.y1,i.z1);return this}function ap(n){return n[0]}function op(n){return arguments.length?(this._x=n,this):this._x}function lp(n){return n[1]}function cp(n){return arguments.length?(this._y=n,this):this._y}function hp(n){return n[2]}function up(n){return arguments.length?(this._z=n,this):this._z}function Br(n,t,e,i){var s=new Ch(t==null?ap:t,e==null?lp:e,i==null?hp:i,NaN,NaN,NaN,NaN,NaN,NaN);return n==null?s:s.addAll(n)}function Ch(n,t,e,i,s,r,a,o,l){this._x=n,this._y=t,this._z=e,this._x0=i,this._y0=s,this._z0=r,this._x1=a,this._y1=o,this._z1=l,this._root=void 0}function fp(n){for(var t={data:n.data},e=t;n=n.next;)e=e.next={data:n.data};return t}var Le=Br.prototype=Ch.prototype;Le.copy=function(){var n=new Ch(this._x,this._y,this._z,this._x0,this._y0,this._z0,this._x1,this._y1,this._z1),t=this._root,e,i;if(!t)return n;if(!t.length)return n._root=fp(t),n;for(e=[{source:t,target:n._root=new Array(8)}];t=e.pop();)for(var s=0;s<8;++s)(i=t.source[s])&&(i.length?e.push({source:i,target:t.target[s]=new Array(8)}):t.target[s]=fp(i));return n};Le.add=qd;Le.addAll=Zd;Le.cover=$d;Le.data=Jd;Le.extent=Kd;Le.find=jd;Le.findAllWithinRadius=Qd;Le.remove=tp;Le.removeAll=ep;Le.root=np;Le.size=ip;Le.visit=sp;Le.visitAfter=rp;Le.x=op;Le.y=cp;Le.z=up;function dn(n){return function(){return n}}function Tn(n){return(n()-.5)*1e-6}function xb(n){return n.index}function dp(n,t){var e=n.get(t);if(!e)throw new Error("node not found: "+t);return e}function Rh(n){var t=xb,e=u,i,s=dn(30),r,a,o,l,c,h,d=1;n==null&&(n=[]);function u(f){return 1/Math.min(l[f.source.index],l[f.target.index])}function p(f){for(var b=0,T=n.length;b<d;++b)for(var x=0,M,S,w,y=0,E=0,I=0,P,N;x<T;++x)M=n[x],S=M.source,w=M.target,y=w.x+w.vx-S.x-S.vx||Tn(h),o>1&&(E=w.y+w.vy-S.y-S.vy||Tn(h)),o>2&&(I=w.z+w.vz-S.z-S.vz||Tn(h)),P=Math.sqrt(y*y+E*E+I*I),P=(P-r[x])/P*f*i[x],y*=P,E*=P,I*=P,w.vx-=y*(N=c[x]),o>1&&(w.vy-=E*N),o>2&&(w.vz-=I*N),S.vx+=y*(N=1-N),o>1&&(S.vy+=E*N),o>2&&(S.vz+=I*N)}function g(){if(a){var f,b=a.length,T=n.length,x=new Map(a.map((S,w)=>[t(S,w,a),S])),M;for(f=0,l=new Array(b);f<T;++f)M=n[f],M.index=f,typeof M.source!="object"&&(M.source=dp(x,M.source)),typeof M.target!="object"&&(M.target=dp(x,M.target)),l[M.source.index]=(l[M.source.index]||0)+1,l[M.target.index]=(l[M.target.index]||0)+1;for(f=0,c=new Array(T);f<T;++f)M=n[f],c[f]=l[M.source.index]/(l[M.source.index]+l[M.target.index]);i=new Array(T),_(),r=new Array(T),m()}}function _(){if(a)for(var f=0,b=n.length;f<b;++f)i[f]=+e(n[f],f,n)}function m(){if(a)for(var f=0,b=n.length;f<b;++f)r[f]=+s(n[f],f,n)}return p.initialize=function(f,...b){a=f,h=b.find(T=>typeof T=="function")||Math.random,o=b.find(T=>[1,2,3].includes(T))||2,g()},p.links=function(f){return arguments.length?(n=f,g(),p):n},p.id=function(f){return arguments.length?(t=f,p):t},p.iterations=function(f){return arguments.length?(d=+f,p):d},p.strength=function(f){return arguments.length?(e=typeof f=="function"?f:dn(+f),_(),p):e},p.distance=function(f){return arguments.length?(s=typeof f=="function"?f:dn(+f),m(),p):s},p}var yb={value:()=>{}};function mp(){for(var n=0,t=arguments.length,e={},i;n<t;++n){if(!(i=arguments[n]+"")||i in e||/[\s.]/.test(i))throw new Error("illegal type: "+i);e[i]=[]}return new _l(e)}function _l(n){this._=n}function vb(n,t){return n.trim().split(/^|\s+/).map(function(e){var i="",s=e.indexOf(".");if(s>=0&&(i=e.slice(s+1),e=e.slice(0,s)),e&&!t.hasOwnProperty(e))throw new Error("unknown type: "+e);return{type:e,name:i}})}_l.prototype=mp.prototype={constructor:_l,on:function(n,t){var e=this._,i=vb(n+"",e),s,r=-1,a=i.length;if(arguments.length<2){for(;++r<a;)if((s=(n=i[r]).type)&&(s=bb(e[s],n.name)))return s;return}if(t!=null&&typeof t!="function")throw new Error("invalid callback: "+t);for(;++r<a;)if(s=(n=i[r]).type)e[s]=pp(e[s],n.name,t);else if(t==null)for(s in e)e[s]=pp(e[s],n.name,null);return this},copy:function(){var n={},t=this._;for(var e in t)n[e]=t[e].slice();return new _l(n)},call:function(n,t){if((s=arguments.length-2)>0)for(var e=new Array(s),i=0,s,r;i<s;++i)e[i]=arguments[i+2];if(!this._.hasOwnProperty(n))throw new Error("unknown type: "+n);for(r=this._[n],i=0,s=r.length;i<s;++i)r[i].value.apply(t,e)},apply:function(n,t,e){if(!this._.hasOwnProperty(n))throw new Error("unknown type: "+n);for(var i=this._[n],s=0,r=i.length;s<r;++s)i[s].value.apply(t,e)}};function bb(n,t){for(var e=0,i=n.length,s;e<i;++e)if((s=n[e]).name===t)return s.value}function pp(n,t,e){for(var i=0,s=n.length;i<s;++i)if(n[i].name===t){n[i]=yb,n=n.slice(0,i).concat(n.slice(i+1));break}return e!=null&&n.push({name:t,value:e}),n}var An=mp;var zs=0,kr=0,zr=0,_p=1e3,xl,Vr,yl=0,ji=0,vl=0,Gr=typeof performance=="object"&&performance.now?performance:Date,xp=typeof window=="object"&&window.requestAnimationFrame?window.requestAnimationFrame.bind(window):function(n){setTimeout(n,17)};function Wr(){return ji||(xp(Mb),ji=Gr.now()+vl)}function Mb(){ji=0}function Hr(){this._call=this._time=this._next=null}Hr.prototype=Pi.prototype={constructor:Hr,restart:function(n,t,e){if(typeof n!="function")throw new TypeError("callback is not a function");e=(e==null?Wr():+e)+(t==null?0:+t),!this._next&&Vr!==this&&(Vr?Vr._next=this:xl=this,Vr=this),this._call=n,this._time=e,Ih()},stop:function(){this._call&&(this._call=null,this._time=1/0,Ih())}};function Pi(n,t,e){var i=new Hr;return i.restart(n,t,e),i}function yp(){Wr(),++zs;for(var n=xl,t;n;)(t=ji-n._time)>=0&&n._call.call(void 0,t),n=n._next;--zs}function gp(){ji=(yl=Gr.now())+vl,zs=kr=0;try{yp()}finally{zs=0,wb(),ji=0}}function Sb(){var n=Gr.now(),t=n-yl;t>_p&&(vl-=t,yl=n)}function wb(){for(var n,t=xl,e,i=1/0;t;)t._call?(i>t._time&&(i=t._time),n=t,t=t._next):(e=t._next,t._next=null,t=n?n._next=e:xl=e);Vr=n,Ih(i)}function Ih(n){if(!zs){kr&&(kr=clearTimeout(kr));var t=n-ji;t>24?(n<1/0&&(kr=setTimeout(gp,n-Gr.now()-vl)),zr&&(zr=clearInterval(zr))):(zr||(yl=Gr.now(),zr=setInterval(Sb,_p)),zs=1,xp(gp))}}function bl(n,t,e){var i=new Hr;return t=t==null?0:+t,i.restart(s=>{i.stop(),n(s+t)},t,e),i}function vp(){let n=1;return()=>(n=(1664525*n+1013904223)%4294967296)/4294967296}var bp=3;function Ml(n){return n.x}function Ph(n){return n.y}function Mp(n){return n.z}var Eb=10,Tb=Math.PI*(3-Math.sqrt(5)),Ab=Math.PI*20/(9+Math.sqrt(221));function Dh(n,t){t=t||2;var e=Math.min(bp,Math.max(1,Math.round(t))),i,s=1,r=.001,a=1-Math.pow(r,1/300),o=0,l=.6,c=new Map,h=Pi(p),d=An("tick","end"),u=vp();n==null&&(n=[]);function p(){g(),d.call("tick",i),s<r&&(h.stop(),d.call("end",i))}function g(f){var b,T=n.length,x;f===void 0&&(f=1);for(var M=0;M<f;++M)for(s+=(o-s)*a,c.forEach(function(S){S(s)}),b=0;b<T;++b)x=n[b],x.fx==null?x.x+=x.vx*=l:(x.x=x.fx,x.vx=0),e>1&&(x.fy==null?x.y+=x.vy*=l:(x.y=x.fy,x.vy=0)),e>2&&(x.fz==null?x.z+=x.vz*=l:(x.z=x.fz,x.vz=0));return i}function _(){for(var f=0,b=n.length,T;f<b;++f){if(T=n[f],T.index=f,T.fx!=null&&(T.x=T.fx),T.fy!=null&&(T.y=T.fy),T.fz!=null&&(T.z=T.fz),isNaN(T.x)||e>1&&isNaN(T.y)||e>2&&isNaN(T.z)){var x=Eb*(e>2?Math.cbrt(.5+f):e>1?Math.sqrt(.5+f):f),M=f*Tb,S=f*Ab;e===1?T.x=x:e===2?(T.x=x*Math.cos(M),T.y=x*Math.sin(M)):(T.x=x*Math.sin(M)*Math.cos(S),T.y=x*Math.cos(M),T.z=x*Math.sin(M)*Math.sin(S))}(isNaN(T.vx)||e>1&&isNaN(T.vy)||e>2&&isNaN(T.vz))&&(T.vx=0,e>1&&(T.vy=0),e>2&&(T.vz=0))}}function m(f){return f.initialize&&f.initialize(n,u,e),f}return _(),i={tick:g,restart:function(){return h.restart(p),i},stop:function(){return h.stop(),i},numDimensions:function(f){return arguments.length?(e=Math.min(bp,Math.max(1,Math.round(f))),c.forEach(m),i):e},nodes:function(f){return arguments.length?(n=f,_(),c.forEach(m),i):n},alpha:function(f){return arguments.length?(s=+f,i):s},alphaMin:function(f){return arguments.length?(r=+f,i):r},alphaDecay:function(f){return arguments.length?(a=+f,i):+a},alphaTarget:function(f){return arguments.length?(o=+f,i):o},velocityDecay:function(f){return arguments.length?(l=1-f,i):1-l},randomSource:function(f){return arguments.length?(u=f,c.forEach(m),i):u},force:function(f,b){return arguments.length>1?(b==null?c.delete(f):c.set(f,m(b)),i):c.get(f)},find:function(){var f=Array.prototype.slice.call(arguments),b=f.shift()||0,T=(e>1?f.shift():null)||0,x=(e>2?f.shift():null)||0,M=f.shift()||1/0,S=0,w=n.length,y,E,I,P,N,H;for(M*=M,S=0;S<w;++S)N=n[S],y=b-N.x,E=T-(N.y||0),I=x-(N.z||0),P=y*y+E*E+I*I,P<M&&(H=N,M=P);return H},on:function(f,b){return arguments.length>1?(d.on(f,b),i):d.on(f)}}}function Lh(){var n,t,e,i,s,r=dn(-30),a,o=1,l=1/0,c=.81;function h(g){var _,m=n.length,f=(t===1?Or(n,Ml):t===2?ii(n,Ml,Ph):t===3?Br(n,Ml,Ph,Mp):null).visitAfter(u);for(s=g,_=0;_<m;++_)e=n[_],f.visit(p)}function d(){if(n){var g,_=n.length,m;for(a=new Array(_),g=0;g<_;++g)m=n[g],a[m.index]=+r(m,g,n)}}function u(g){var _=0,m,f,b=0,T,x,M,S,w=g.length;if(w){for(T=x=M=S=0;S<w;++S)(m=g[S])&&(f=Math.abs(m.value))&&(_+=m.value,b+=f,T+=f*(m.x||0),x+=f*(m.y||0),M+=f*(m.z||0));_*=Math.sqrt(4/w),g.x=T/b,t>1&&(g.y=x/b),t>2&&(g.z=M/b)}else{m=g,m.x=m.data.x,t>1&&(m.y=m.data.y),t>2&&(m.z=m.data.z);do _+=a[m.data.index];while(m=m.next)}g.value=_}function p(g,_,m,f,b){if(!g.value)return!0;var T=[m,f,b][t-1],x=g.x-e.x,M=t>1?g.y-e.y:0,S=t>2?g.z-e.z:0,w=T-_,y=x*x+M*M+S*S;if(w*w/c<y)return y<l&&(x===0&&(x=Tn(i),y+=x*x),t>1&&M===0&&(M=Tn(i),y+=M*M),t>2&&S===0&&(S=Tn(i),y+=S*S),y<o&&(y=Math.sqrt(o*y)),e.vx+=x*g.value*s/y,t>1&&(e.vy+=M*g.value*s/y),t>2&&(e.vz+=S*g.value*s/y)),!0;if(g.length||y>=l)return;(g.data!==e||g.next)&&(x===0&&(x=Tn(i),y+=x*x),t>1&&M===0&&(M=Tn(i),y+=M*M),t>2&&S===0&&(S=Tn(i),y+=S*S),y<o&&(y=Math.sqrt(o*y)));do g.data!==e&&(w=a[g.data.index]*s/y,e.vx+=x*w,t>1&&(e.vy+=M*w),t>2&&(e.vz+=S*w));while(g=g.next)}return h.initialize=function(g,..._){n=g,i=_.find(m=>typeof m=="function")||Math.random,t=_.find(m=>[1,2,3].includes(m))||2,d()},h.strength=function(g){return arguments.length?(r=typeof g=="function"?g:dn(+g),d(),h):r},h.distanceMin=function(g){return arguments.length?(o=g*g,h):Math.sqrt(o)},h.distanceMax=function(g){return arguments.length?(l=g*g,h):Math.sqrt(l)},h.theta=function(g){return arguments.length?(c=g*g,h):Math.sqrt(c)},h}function Nh(n,t,e,i){var s,r,a=dn(.1),o,l;typeof n!="function"&&(n=dn(+n)),t==null&&(t=0),e==null&&(e=0),i==null&&(i=0);function c(d){for(var u=0,p=s.length;u<p;++u){var g=s[u],_=g.x-t||1e-6,m=(g.y||0)-e||1e-6,f=(g.z||0)-i||1e-6,b=Math.sqrt(_*_+m*m+f*f),T=(l[u]-b)*o[u]*d/b;g.vx+=_*T,r>1&&(g.vy+=m*T),r>2&&(g.vz+=f*T)}}function h(){if(s){var d,u=s.length;for(o=new Array(u),l=new Array(u),d=0;d<u;++d)l[d]=+n(s[d],d,s),o[d]=isNaN(l[d])?0:+a(s[d],d,s)}}return c.initialize=function(d,...u){s=d,r=u.find(p=>[1,2,3].includes(p))||2,h()},c.strength=function(d){return arguments.length?(a=typeof d=="function"?d:dn(+d),h(),c):a},c.radius=function(d){return arguments.length?(n=typeof d=="function"?d:dn(+d),h(),c):n},c.x=function(d){return arguments.length?(t=+d,c):t},c.y=function(d){return arguments.length?(e=+d,c):e},c.z=function(d){return arguments.length?(i=+d,c):i},c}var Sl=class{constructor(){this.animId=null;this.raycaster=new Mr;this.mouse=new Ot(-9999,-9999);this.nodeMeshes=new Map;this.glowSprites=new Map;this.labelSprites=new Map;this.simNodes=[];this.simLinks=[];this.hoveredId=null;this.ro=null;this.sim=null;this.nodeBaseSizes=new Map;this.currentNodeScale=1;this.currentLabelSize=10;this.physicsLinkDist=80;this.physicsCharge=120;this.physicsGravity=.04;this.frameCount=0}get nodeIds(){return this.simNodes.map(t=>t.id)}getNodeType(t){var e,i;return(i=(e=this.simNodes.find(s=>s.id===t))==null?void 0:e.type)!=null?i:"concept"}init(t,e){this.container=t,this.opts=e,this.currentNodeScale=e.nodeScale,this.currentLabelSize=e.labelSize,this.physicsLinkDist=e.linkDist,this.physicsCharge=e.chargeStr,this.physicsGravity=e.gravityStr;let i=t.clientWidth||800,s=t.clientHeight||600;this.renderer=new fl({antialias:!0}),this.renderer.setSize(i,s),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.setClearColor(266,1),this.renderer.domElement.style.cssText="position:absolute;inset:0;width:100%;height:100%;",t.style.position="relative",t.appendChild(this.renderer.domElement),this.scene=new lr,this.camera=new Be(60,i/s,.5,5e4),this.camera.position.set(0,0,600),this.controls=new gl(this.camera,this.renderer.domElement),this.controls.enableDamping=!0,this.controls.dampingFactor=.06,this.controls.rotateSpeed=.6,this.controls.zoomSpeed=1.2,this.buildStarField(),this.edgeGeo=new De,this.edgeMat=new Rs({color:4478327,opacity:Math.min(.5,.12+e.edgeWidth/8*.38),transparent:!0,depthWrite:!1}),this.edgeLines=new dr(this.edgeGeo,this.edgeMat),this.scene.add(this.edgeLines),this.renderer.domElement.addEventListener("mousemove",this.onMouseMove.bind(this)),this.renderer.domElement.addEventListener("click",this.onClick.bind(this)),this.ro=new ResizeObserver(()=>this.onResize()),this.ro.observe(t),this.updateLabelFade(e.labelFadeAt),this.loop()}buildStarField(){let e=new Float32Array(6e3);for(let r=0;r<2e3;r++){let a=Math.random()*Math.PI*2,o=Math.acos(2*Math.random()-1),l=1800+Math.random()*800;e[r*3]=l*Math.sin(o)*Math.cos(a),e[r*3+1]=l*Math.sin(o)*Math.sin(a),e[r*3+2]=l*Math.cos(o)}let i=new De;i.setAttribute("position",new be(e,3));let s=new Is({color:13687024,size:1,sizeAttenuation:!0,transparent:!0,opacity:.5,depthWrite:!1});this.starField=new pr(i,s),this.scene.add(this.starField)}makeGlowCanvas(t,e=64){let i=document.createElement("canvas");i.width=i.height=e;let s=i.getContext("2d"),r=e/2,a=s.createRadialGradient(r,r,0,r,r,r);return a.addColorStop(0,"#ffffff"),a.addColorStop(.12,t),a.addColorStop(.35,t+"44"),a.addColorStop(1,"rgba(0,0,0,0)"),s.fillStyle=a,s.fillRect(0,0,e,e),i}setData(t,e){for(let a of this.nodeMeshes.values())this.scene.remove(a);for(let a of this.glowSprites.values())this.scene.remove(a);for(let a of this.labelSprites.values())this.scene.remove(a);this.nodeMeshes.clear(),this.glowSprites.clear(),this.labelSprites.clear(),this.nodeBaseSizes.clear(),this.simNodes=t,this.simLinks=e;let i=new xr(1,6,4),s=new Yi({transparent:!0,opacity:0,depthWrite:!1});for(let a of t){let o=new Ye(i.clone(),s.clone()),l=a.size*5;this.nodeBaseSizes.set(a.id,l),o.scale.setScalar(l*this.currentNodeScale),o.userData.id=a.id,this.nodeMeshes.set(a.id,o),this.scene.add(o);let c=this.makeGlowCanvas(a.color,64),h=new Zi(c),d=new qi({map:h,blending:Er,transparent:!0,depthWrite:!1}),u=new Cs(d),p=l*this.currentNodeScale*3.5;u.scale.setScalar(p),u.userData.id=a.id,this.glowSprites.set(a.id,u),this.scene.add(u);let g=this.makeLabel(a.title,this.currentLabelSize);g.userData.id=a.id,this.labelSprites.set(a.id,g),this.scene.add(g)}let r=new Float32Array(e.length*6);this.edgeGeo.setAttribute("position",new be(r,3)),this.edgeGeo.setDrawRange(0,0),this.runSim(this.physicsLinkDist,this.physicsCharge,this.physicsGravity)}runSim(t=80,e=120,i=.08){let s=Math.max(100,Math.sqrt(this.simNodes.length)*20);this.sim=Dh(this.simNodes,3).force("link",Rh(this.simLinks).id(r=>r.id).distance(t).strength(.4)).force("charge",Lh().strength(-e)).force("center",Eh(0,0,0)).force("radial",Nh(s,0,0,0).strength(i)).alphaDecay(.025),this.sim.on("tick",()=>this.updatePositions())}updateLinkDist(t){var e,i,s;(i=(e=this.sim)==null?void 0:e.force("link"))==null||i.distance(t),(s=this.sim)==null||s.alpha(.4).restart()}updateCharge(t){var e,i,s;(i=(e=this.sim)==null?void 0:e.force("charge"))==null||i.strength(-t),(s=this.sim)==null||s.alpha(.4).restart()}updateGravity(t){var e,i,s;(i=(e=this.sim)==null?void 0:e.force("radial"))==null||i.strength(t),(s=this.sim)==null||s.alpha(.3).restart()}updateNodeScale(t){var e;this.currentNodeScale=t;for(let[i,s]of this.nodeMeshes){let r=(e=this.nodeBaseSizes.get(i))!=null?e:5;s.scale.setScalar(r*t);let a=this.glowSprites.get(i);a&&a.scale.setScalar(r*t*3.5)}}updateEdgeWidth(t){this.edgeMat.opacity=Math.min(.5,.12+t/8*.38)}updateLabelSize(t){var e;this.currentLabelSize=t;for(let[,i]of this.labelSprites){let s=(e=i.material.map)==null?void 0:e.image;s&&i.scale.set(s.width*t/95,t*1.4,1)}}updateLabelFade(t){let e=t>.15;for(let i of this.labelSprites.values())i.visible=e}updatePositions(){var i,s,r,a,o,l,c;for(let h of this.simNodes){let d=this.nodeMeshes.get(h.id),u=this.glowSprites.get(h.id),p=this.labelSprites.get(h.id);if(!d)continue;let g=(i=h.x)!=null?i:0,_=(s=h.y)!=null?s:0,m=(r=h.z)!=null?r:0;d.position.set(g,_,m),u&&u.position.set(g,_,m),p&&p.position.set(g+h.size*7,_+h.size*5,m)}let t=this.edgeGeo.getAttribute("position"),e=0;for(let h of this.simLinks){let d=h.source,u=h.target;!d||!u||d.x==null||(t.array[e++]=d.x,t.array[e++]=(a=d.y)!=null?a:0,t.array[e++]=(o=d.z)!=null?o:0,t.array[e++]=u.x,t.array[e++]=(l=u.y)!=null?l:0,t.array[e++]=(c=u.z)!=null?c:0)}t.needsUpdate=!0,this.edgeGeo.setDrawRange(0,e/3)}highlight(t,e=.08){let i=t.size>0;for(let[s,r]of this.glowSprites){let a=r.material;a.opacity=!i||t.has(s)?1:e}}makeLabel(t,e=10){let i=document.createElement("canvas"),s=i.getContext("2d"),r=t.length>24?t.slice(0,22)+"\u2026":t;s.font='24px -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif';let a=s.measureText(r).width+16;i.width=a,i.height=40,s.font='24px -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',s.fillStyle="rgba(220, 230, 255, 0.90)",s.fillText(r,8,30);let o=new Zi(i),l=new qi({map:o,transparent:!0,depthWrite:!1}),c=new Cs(l);return c.scale.set(a*e/95,e*1.3,1),c}setLabelVisibility(t){for(let e of this.labelSprites.values())e.visible=t}onMouseMove(t){let e=this.renderer.domElement.getBoundingClientRect();this.mouse.set((t.clientX-e.left)/e.width*2-1,-((t.clientY-e.top)/e.height)*2+1)}onClick(t){this.raycaster.setFromCamera(this.mouse,this.camera);let e=[...this.nodeMeshes.values()],i=this.raycaster.intersectObjects(e);if(i.length>0){let s=i[0].object.userData.id;s&&this.opts.onNodeClick(s)}}loop(){var i,s;this.animId=requestAnimationFrame(()=>this.loop()),this.controls.update(),this.frameCount++,this.starField&&(this.starField.rotation.y+=25e-6),this.raycaster.setFromCamera(this.mouse,this.camera);let t=this.raycaster.intersectObjects([...this.nodeMeshes.values()]),e=t.length>0?t[0].object.userData.id:null;if(e!==this.hoveredId){if(this.hoveredId){let r=this.glowSprites.get(this.hoveredId);if(r){let a=(i=this.nodeBaseSizes.get(this.hoveredId))!=null?i:5;r.scale.setScalar(a*this.currentNodeScale*3.5)}}if(e){let r=this.glowSprites.get(e);if(r){let a=(s=this.nodeBaseSizes.get(e))!=null?s:5;r.scale.setScalar(a*this.currentNodeScale*5.5)}}this.hoveredId=e,this.renderer.domElement.style.cursor=e?"pointer":"default"}this.renderer.render(this.scene,this.camera)}onResize(){let t=this.container.clientWidth,e=this.container.clientHeight;!t||!e||(this.camera.aspect=t/e,this.camera.updateProjectionMatrix(),this.renderer.setSize(t,e))}updateColors(t){var e;for(let[i,s]of this.glowSprites){let r=t.get(i);if(!r)continue;let a=this.makeGlowCanvas(r,128),o=s.material;(e=o.map)==null||e.dispose(),o.map=new Zi(a),o.needsUpdate=!0}}getCameraState(){return{px:this.camera.position.x,py:this.camera.position.y,pz:this.camera.position.z,tx:this.controls.target.x,ty:this.controls.target.y,tz:this.controls.target.z}}setCameraState(t){this.camera.position.set(t.px,t.py,t.pz),this.controls.target.set(t.tx,t.ty,t.tz),this.controls.update()}dispose(){var t,e,i,s,r,a,o;this.animId!=null&&cancelAnimationFrame(this.animId),(t=this.ro)==null||t.disconnect(),this.controls.dispose(),this.renderer.dispose(),this.renderer.domElement.remove();for(let l of this.nodeMeshes.values())l.geometry.dispose(),l.material.dispose();for(let l of this.glowSprites.values())(e=l.material.map)==null||e.dispose(),l.material.dispose();for(let l of this.labelSprites.values())(i=l.material.map)==null||i.dispose(),l.material.dispose();(r=(s=this.starField)==null?void 0:s.material)==null||r.dispose(),(o=(a=this.starField)==null?void 0:a.geometry)==null||o.dispose(),this.edgeGeo.dispose(),this.edgeMat.dispose()}};var wl="http://www.w3.org/1999/xhtml",Uh={svg:"http://www.w3.org/2000/svg",xhtml:wl,xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/"};function si(n){var t=n+="",e=t.indexOf(":");return e>=0&&(t=n.slice(0,e))!=="xmlns"&&(n=n.slice(e+1)),Uh.hasOwnProperty(t)?{space:Uh[t],local:n}:n}function Cb(n){return function(){var t=this.ownerDocument,e=this.namespaceURI;return e===wl&&t.documentElement.namespaceURI===wl?t.createElement(n):t.createElementNS(e,n)}}function Rb(n){return function(){return this.ownerDocument.createElementNS(n.space,n.local)}}function El(n){var t=si(n);return(t.local?Rb:Cb)(t)}function Ib(){}function Qi(n){return n==null?Ib:function(){return this.querySelector(n)}}function Sp(n){typeof n!="function"&&(n=Qi(n));for(var t=this._groups,e=t.length,i=new Array(e),s=0;s<e;++s)for(var r=t[s],a=r.length,o=i[s]=new Array(a),l,c,h=0;h<a;++h)(l=r[h])&&(c=n.call(l,l.__data__,h,r))&&("__data__"in l&&(c.__data__=l.__data__),o[h]=c);return new ge(i,this._parents)}function Fh(n){return n==null?[]:Array.isArray(n)?n:Array.from(n)}function Pb(){return[]}function Xr(n){return n==null?Pb:function(){return this.querySelectorAll(n)}}function Db(n){return function(){return Fh(n.apply(this,arguments))}}function wp(n){typeof n=="function"?n=Db(n):n=Xr(n);for(var t=this._groups,e=t.length,i=[],s=[],r=0;r<e;++r)for(var a=t[r],o=a.length,l,c=0;c<o;++c)(l=a[c])&&(i.push(n.call(l,l.__data__,c,a)),s.push(l));return new ge(i,s)}function qr(n){return function(){return this.matches(n)}}function Tl(n){return function(t){return t.matches(n)}}var Lb=Array.prototype.find;function Nb(n){return function(){return Lb.call(this.children,n)}}function Ub(){return this.firstElementChild}function Ep(n){return this.select(n==null?Ub:Nb(typeof n=="function"?n:Tl(n)))}var Fb=Array.prototype.filter;function Ob(){return Array.from(this.children)}function Bb(n){return function(){return Fb.call(this.children,n)}}function Tp(n){return this.selectAll(n==null?Ob:Bb(typeof n=="function"?n:Tl(n)))}function Ap(n){typeof n!="function"&&(n=qr(n));for(var t=this._groups,e=t.length,i=new Array(e),s=0;s<e;++s)for(var r=t[s],a=r.length,o=i[s]=[],l,c=0;c<a;++c)(l=r[c])&&n.call(l,l.__data__,c,r)&&o.push(l);return new ge(i,this._parents)}function Al(n){return new Array(n.length)}function Cp(){return new ge(this._enter||this._groups.map(Al),this._parents)}function Yr(n,t){this.ownerDocument=n.ownerDocument,this.namespaceURI=n.namespaceURI,this._next=null,this._parent=n,this.__data__=t}Yr.prototype={constructor:Yr,appendChild:function(n){return this._parent.insertBefore(n,this._next)},insertBefore:function(n,t){return this._parent.insertBefore(n,t)},querySelector:function(n){return this._parent.querySelector(n)},querySelectorAll:function(n){return this._parent.querySelectorAll(n)}};function Rp(n){return function(){return n}}function zb(n,t,e,i,s,r){for(var a=0,o,l=t.length,c=r.length;a<c;++a)(o=t[a])?(o.__data__=r[a],i[a]=o):e[a]=new Yr(n,r[a]);for(;a<l;++a)(o=t[a])&&(s[a]=o)}function kb(n,t,e,i,s,r,a){var o,l,c=new Map,h=t.length,d=r.length,u=new Array(h),p;for(o=0;o<h;++o)(l=t[o])&&(u[o]=p=a.call(l,l.__data__,o,t)+"",c.has(p)?s[o]=l:c.set(p,l));for(o=0;o<d;++o)p=a.call(n,r[o],o,r)+"",(l=c.get(p))?(i[o]=l,l.__data__=r[o],c.delete(p)):e[o]=new Yr(n,r[o]);for(o=0;o<h;++o)(l=t[o])&&c.get(u[o])===l&&(s[o]=l)}function Vb(n){return n.__data__}function Ip(n,t){if(!arguments.length)return Array.from(this,Vb);var e=t?kb:zb,i=this._parents,s=this._groups;typeof n!="function"&&(n=Rp(n));for(var r=s.length,a=new Array(r),o=new Array(r),l=new Array(r),c=0;c<r;++c){var h=i[c],d=s[c],u=d.length,p=Gb(n.call(h,h&&h.__data__,c,i)),g=p.length,_=o[c]=new Array(g),m=a[c]=new Array(g),f=l[c]=new Array(u);e(h,d,_,m,f,p,t);for(var b=0,T=0,x,M;b<g;++b)if(x=_[b]){for(b>=T&&(T=b+1);!(M=m[T])&&++T<g;);x._next=M||null}}return a=new ge(a,i),a._enter=o,a._exit=l,a}function Gb(n){return typeof n=="object"&&"length"in n?n:Array.from(n)}function Pp(){return new ge(this._exit||this._groups.map(Al),this._parents)}function Dp(n,t,e){var i=this.enter(),s=this,r=this.exit();return typeof n=="function"?(i=n(i),i&&(i=i.selection())):i=i.append(n+""),t!=null&&(s=t(s),s&&(s=s.selection())),e==null?r.remove():e(r),i&&s?i.merge(s).order():s}function Lp(n){for(var t=n.selection?n.selection():n,e=this._groups,i=t._groups,s=e.length,r=i.length,a=Math.min(s,r),o=new Array(s),l=0;l<a;++l)for(var c=e[l],h=i[l],d=c.length,u=o[l]=new Array(d),p,g=0;g<d;++g)(p=c[g]||h[g])&&(u[g]=p);for(;l<s;++l)o[l]=e[l];return new ge(o,this._parents)}function Np(){for(var n=this._groups,t=-1,e=n.length;++t<e;)for(var i=n[t],s=i.length-1,r=i[s],a;--s>=0;)(a=i[s])&&(r&&a.compareDocumentPosition(r)^4&&r.parentNode.insertBefore(a,r),r=a);return this}function Up(n){n||(n=Hb);function t(d,u){return d&&u?n(d.__data__,u.__data__):!d-!u}for(var e=this._groups,i=e.length,s=new Array(i),r=0;r<i;++r){for(var a=e[r],o=a.length,l=s[r]=new Array(o),c,h=0;h<o;++h)(c=a[h])&&(l[h]=c);l.sort(t)}return new ge(s,this._parents).order()}function Hb(n,t){return n<t?-1:n>t?1:n>=t?0:NaN}function Fp(){var n=arguments[0];return arguments[0]=this,n.apply(null,arguments),this}function Op(){return Array.from(this)}function Bp(){for(var n=this._groups,t=0,e=n.length;t<e;++t)for(var i=n[t],s=0,r=i.length;s<r;++s){var a=i[s];if(a)return a}return null}function zp(){let n=0;for(let t of this)++n;return n}function kp(){return!this.node()}function Vp(n){for(var t=this._groups,e=0,i=t.length;e<i;++e)for(var s=t[e],r=0,a=s.length,o;r<a;++r)(o=s[r])&&n.call(o,o.__data__,r,s);return this}function Wb(n){return function(){this.removeAttribute(n)}}function Xb(n){return function(){this.removeAttributeNS(n.space,n.local)}}function qb(n,t){return function(){this.setAttribute(n,t)}}function Yb(n,t){return function(){this.setAttributeNS(n.space,n.local,t)}}function Zb(n,t){return function(){var e=t.apply(this,arguments);e==null?this.removeAttribute(n):this.setAttribute(n,e)}}function $b(n,t){return function(){var e=t.apply(this,arguments);e==null?this.removeAttributeNS(n.space,n.local):this.setAttributeNS(n.space,n.local,e)}}function Gp(n,t){var e=si(n);if(arguments.length<2){var i=this.node();return e.local?i.getAttributeNS(e.space,e.local):i.getAttribute(e)}return this.each((t==null?e.local?Xb:Wb:typeof t=="function"?e.local?$b:Zb:e.local?Yb:qb)(e,t))}function Cl(n){return n.ownerDocument&&n.ownerDocument.defaultView||n.document&&n||n.defaultView}function Jb(n){return function(){this.style.removeProperty(n)}}function Kb(n,t,e){return function(){this.style.setProperty(n,t,e)}}function jb(n,t,e){return function(){var i=t.apply(this,arguments);i==null?this.style.removeProperty(n):this.style.setProperty(n,i,e)}}function Hp(n,t,e){return arguments.length>1?this.each((t==null?Jb:typeof t=="function"?jb:Kb)(n,t,e==null?"":e)):Di(this.node(),n)}function Di(n,t){return n.style.getPropertyValue(t)||Cl(n).getComputedStyle(n,null).getPropertyValue(t)}function Qb(n){return function(){delete this[n]}}function tM(n,t){return function(){this[n]=t}}function eM(n,t){return function(){var e=t.apply(this,arguments);e==null?delete this[n]:this[n]=e}}function Wp(n,t){return arguments.length>1?this.each((t==null?Qb:typeof t=="function"?eM:tM)(n,t)):this.node()[n]}function Xp(n){return n.trim().split(/^|\s+/)}function Oh(n){return n.classList||new qp(n)}function qp(n){this._node=n,this._names=Xp(n.getAttribute("class")||"")}qp.prototype={add:function(n){var t=this._names.indexOf(n);t<0&&(this._names.push(n),this._node.setAttribute("class",this._names.join(" ")))},remove:function(n){var t=this._names.indexOf(n);t>=0&&(this._names.splice(t,1),this._node.setAttribute("class",this._names.join(" ")))},contains:function(n){return this._names.indexOf(n)>=0}};function Yp(n,t){for(var e=Oh(n),i=-1,s=t.length;++i<s;)e.add(t[i])}function Zp(n,t){for(var e=Oh(n),i=-1,s=t.length;++i<s;)e.remove(t[i])}function nM(n){return function(){Yp(this,n)}}function iM(n){return function(){Zp(this,n)}}function sM(n,t){return function(){(t.apply(this,arguments)?Yp:Zp)(this,n)}}function $p(n,t){var e=Xp(n+"");if(arguments.length<2){for(var i=Oh(this.node()),s=-1,r=e.length;++s<r;)if(!i.contains(e[s]))return!1;return!0}return this.each((typeof t=="function"?sM:t?nM:iM)(e,t))}function rM(){this.textContent=""}function aM(n){return function(){this.textContent=n}}function oM(n){return function(){var t=n.apply(this,arguments);this.textContent=t==null?"":t}}function Jp(n){return arguments.length?this.each(n==null?rM:(typeof n=="function"?oM:aM)(n)):this.node().textContent}function lM(){this.innerHTML=""}function cM(n){return function(){this.innerHTML=n}}function hM(n){return function(){var t=n.apply(this,arguments);this.innerHTML=t==null?"":t}}function Kp(n){return arguments.length?this.each(n==null?lM:(typeof n=="function"?hM:cM)(n)):this.node().innerHTML}function uM(){this.nextSibling&&this.parentNode.appendChild(this)}function jp(){return this.each(uM)}function fM(){this.previousSibling&&this.parentNode.insertBefore(this,this.parentNode.firstChild)}function Qp(){return this.each(fM)}function tm(n){var t=typeof n=="function"?n:El(n);return this.select(function(){return this.appendChild(t.apply(this,arguments))})}function dM(){return null}function em(n,t){var e=typeof n=="function"?n:El(n),i=t==null?dM:typeof t=="function"?t:Qi(t);return this.select(function(){return this.insertBefore(e.apply(this,arguments),i.apply(this,arguments)||null)})}function pM(){var n=this.parentNode;n&&n.removeChild(this)}function nm(){return this.each(pM)}function mM(){var n=this.cloneNode(!1),t=this.parentNode;return t?t.insertBefore(n,this.nextSibling):n}function gM(){var n=this.cloneNode(!0),t=this.parentNode;return t?t.insertBefore(n,this.nextSibling):n}function im(n){return this.select(n?gM:mM)}function sm(n){return arguments.length?this.property("__data__",n):this.node().__data__}function _M(n){return function(t){n.call(this,t,this.__data__)}}function xM(n){return n.trim().split(/^|\s+/).map(function(t){var e="",i=t.indexOf(".");return i>=0&&(e=t.slice(i+1),t=t.slice(0,i)),{type:t,name:e}})}function yM(n){return function(){var t=this.__on;if(t){for(var e=0,i=-1,s=t.length,r;e<s;++e)r=t[e],(!n.type||r.type===n.type)&&r.name===n.name?this.removeEventListener(r.type,r.listener,r.options):t[++i]=r;++i?t.length=i:delete this.__on}}}function vM(n,t,e){return function(){var i=this.__on,s,r=_M(t);if(i){for(var a=0,o=i.length;a<o;++a)if((s=i[a]).type===n.type&&s.name===n.name){this.removeEventListener(s.type,s.listener,s.options),this.addEventListener(s.type,s.listener=r,s.options=e),s.value=t;return}}this.addEventListener(n.type,r,e),s={type:n.type,name:n.name,value:t,listener:r,options:e},i?i.push(s):this.__on=[s]}}function rm(n,t,e){var i=xM(n+""),s,r=i.length,a;if(arguments.length<2){var o=this.node().__on;if(o){for(var l=0,c=o.length,h;l<c;++l)for(s=0,h=o[l];s<r;++s)if((a=i[s]).type===h.type&&a.name===h.name)return h.value}return}for(o=t?vM:yM,s=0;s<r;++s)this.each(o(i[s],t,e));return this}function am(n,t,e){var i=Cl(n),s=i.CustomEvent;typeof s=="function"?s=new s(t,e):(s=i.document.createEvent("Event"),e?(s.initEvent(t,e.bubbles,e.cancelable),s.detail=e.detail):s.initEvent(t,!1,!1)),n.dispatchEvent(s)}function bM(n,t){return function(){return am(this,n,t)}}function MM(n,t){return function(){return am(this,n,t.apply(this,arguments))}}function om(n,t){return this.each((typeof t=="function"?MM:bM)(n,t))}function*lm(){for(var n=this._groups,t=0,e=n.length;t<e;++t)for(var i=n[t],s=0,r=i.length,a;s<r;++s)(a=i[s])&&(yield a)}var Bh=[null];function ge(n,t){this._groups=n,this._parents=t}function cm(){return new ge([[document.documentElement]],Bh)}function SM(){return this}ge.prototype=cm.prototype={constructor:ge,select:Sp,selectAll:wp,selectChild:Ep,selectChildren:Tp,filter:Ap,data:Ip,enter:Cp,exit:Pp,join:Dp,merge:Lp,selection:SM,order:Np,sort:Up,call:Fp,nodes:Op,node:Bp,size:zp,empty:kp,each:Vp,attr:Gp,style:Hp,property:Wp,classed:$p,text:Jp,html:Kp,raise:jp,lower:Qp,append:tm,insert:em,remove:nm,clone:im,datum:sm,on:rm,dispatch:om,[Symbol.iterator]:lm};var ri=cm;function Ie(n){return typeof n=="string"?new ge([[document.querySelector(n)]],[document.documentElement]):new ge([[n]],Bh)}function hm(n){let t;for(;t=n.sourceEvent;)n=t;return n}function pn(n,t){if(n=hm(n),t===void 0&&(t=n.currentTarget),t){var e=t.ownerSVGElement||t;if(e.createSVGPoint){var i=e.createSVGPoint();return i.x=n.clientX,i.y=n.clientY,i=i.matrixTransform(t.getScreenCTM().inverse()),[i.x,i.y]}if(t.getBoundingClientRect){var s=t.getBoundingClientRect();return[n.clientX-s.left-t.clientLeft,n.clientY-s.top-t.clientTop]}}return[n.pageX,n.pageY]}function Me(n){return function(){return n}}function Cn(n){return(n()-.5)*1e-6}function wM(n){return n.x+n.vx}function EM(n){return n.y+n.vy}function zh(n){var t,e,i,s=1,r=1;typeof n!="function"&&(n=Me(n==null?1:+n));function a(){for(var c,h=t.length,d,u,p,g,_,m,f=0;f<r;++f)for(d=ii(t,wM,EM).visitAfter(o),c=0;c<h;++c)u=t[c],_=e[u.index],m=_*_,p=u.x+u.vx,g=u.y+u.vy,d.visit(b);function b(T,x,M,S,w){var y=T.data,E=T.r,I=_+E;if(y){if(y.index>u.index){var P=p-y.x-y.vx,N=g-y.y-y.vy,H=P*P+N*N;H<I*I&&(P===0&&(P=Cn(i),H+=P*P),N===0&&(N=Cn(i),H+=N*N),H=(I-(H=Math.sqrt(H)))/H*s,u.vx+=(P*=H)*(I=(E*=E)/(m+E)),u.vy+=(N*=H)*I,y.vx-=P*(I=1-I),y.vy-=N*I)}return}return x>p+I||S<p-I||M>g+I||w<g-I}}function o(c){if(c.data)return c.r=e[c.data.index];for(var h=c.r=0;h<4;++h)c[h]&&c[h].r>c.r&&(c.r=c[h].r)}function l(){if(t){var c,h=t.length,d;for(e=new Array(h),c=0;c<h;++c)d=t[c],e[d.index]=+n(d,c,t)}}return a.initialize=function(c,h){t=c,i=h,l()},a.iterations=function(c){return arguments.length?(r=+c,a):r},a.strength=function(c){return arguments.length?(s=+c,a):s},a.radius=function(c){return arguments.length?(n=typeof c=="function"?c:Me(+c),l(),a):n},a}function TM(n){return n.index}function um(n,t){var e=n.get(t);if(!e)throw new Error("node not found: "+t);return e}function kh(n){var t=TM,e=d,i,s=Me(30),r,a,o,l,c,h=1;n==null&&(n=[]);function d(m){return 1/Math.min(o[m.source.index],o[m.target.index])}function u(m){for(var f=0,b=n.length;f<h;++f)for(var T=0,x,M,S,w,y,E,I;T<b;++T)x=n[T],M=x.source,S=x.target,w=S.x+S.vx-M.x-M.vx||Cn(c),y=S.y+S.vy-M.y-M.vy||Cn(c),E=Math.sqrt(w*w+y*y),E=(E-r[T])/E*m*i[T],w*=E,y*=E,S.vx-=w*(I=l[T]),S.vy-=y*I,M.vx+=w*(I=1-I),M.vy+=y*I}function p(){if(a){var m,f=a.length,b=n.length,T=new Map(a.map((M,S)=>[t(M,S,a),M])),x;for(m=0,o=new Array(f);m<b;++m)x=n[m],x.index=m,typeof x.source!="object"&&(x.source=um(T,x.source)),typeof x.target!="object"&&(x.target=um(T,x.target)),o[x.source.index]=(o[x.source.index]||0)+1,o[x.target.index]=(o[x.target.index]||0)+1;for(m=0,l=new Array(b);m<b;++m)x=n[m],l[m]=o[x.source.index]/(o[x.source.index]+o[x.target.index]);i=new Array(b),g(),r=new Array(b),_()}}function g(){if(a)for(var m=0,f=n.length;m<f;++m)i[m]=+e(n[m],m,n)}function _(){if(a)for(var m=0,f=n.length;m<f;++m)r[m]=+s(n[m],m,n)}return u.initialize=function(m,f){a=m,c=f,p()},u.links=function(m){return arguments.length?(n=m,p(),u):n},u.id=function(m){return arguments.length?(t=m,u):t},u.iterations=function(m){return arguments.length?(h=+m,u):h},u.strength=function(m){return arguments.length?(e=typeof m=="function"?m:Me(+m),g(),u):e},u.distance=function(m){return arguments.length?(s=typeof m=="function"?m:Me(+m),_(),u):s},u}function fm(){let n=1;return()=>(n=(1664525*n+1013904223)%4294967296)/4294967296}function dm(n){return n.x}function pm(n){return n.y}var AM=10,CM=Math.PI*(3-Math.sqrt(5));function Vh(n){var t,e=1,i=.001,s=1-Math.pow(i,1/300),r=0,a=.6,o=new Map,l=Pi(d),c=An("tick","end"),h=fm();n==null&&(n=[]);function d(){u(),c.call("tick",t),e<i&&(l.stop(),c.call("end",t))}function u(_){var m,f=n.length,b;_===void 0&&(_=1);for(var T=0;T<_;++T)for(e+=(r-e)*s,o.forEach(function(x){x(e)}),m=0;m<f;++m)b=n[m],b.fx==null?b.x+=b.vx*=a:(b.x=b.fx,b.vx=0),b.fy==null?b.y+=b.vy*=a:(b.y=b.fy,b.vy=0);return t}function p(){for(var _=0,m=n.length,f;_<m;++_){if(f=n[_],f.index=_,f.fx!=null&&(f.x=f.fx),f.fy!=null&&(f.y=f.fy),isNaN(f.x)||isNaN(f.y)){var b=AM*Math.sqrt(.5+_),T=_*CM;f.x=b*Math.cos(T),f.y=b*Math.sin(T)}(isNaN(f.vx)||isNaN(f.vy))&&(f.vx=f.vy=0)}}function g(_){return _.initialize&&_.initialize(n,h),_}return p(),t={tick:u,restart:function(){return l.restart(d),t},stop:function(){return l.stop(),t},nodes:function(_){return arguments.length?(n=_,p(),o.forEach(g),t):n},alpha:function(_){return arguments.length?(e=+_,t):e},alphaMin:function(_){return arguments.length?(i=+_,t):i},alphaDecay:function(_){return arguments.length?(s=+_,t):+s},alphaTarget:function(_){return arguments.length?(r=+_,t):r},velocityDecay:function(_){return arguments.length?(a=1-_,t):1-a},randomSource:function(_){return arguments.length?(h=_,o.forEach(g),t):h},force:function(_,m){return arguments.length>1?(m==null?o.delete(_):o.set(_,g(m)),t):o.get(_)},find:function(_,m,f){var b=0,T=n.length,x,M,S,w,y;for(f==null?f=1/0:f*=f,b=0;b<T;++b)w=n[b],x=_-w.x,M=m-w.y,S=x*x+M*M,S<f&&(y=w,f=S);return y},on:function(_,m){return arguments.length>1?(c.on(_,m),t):c.on(_)}}}function Gh(){var n,t,e,i,s=Me(-30),r,a=1,o=1/0,l=.81;function c(p){var g,_=n.length,m=ii(n,dm,pm).visitAfter(d);for(i=p,g=0;g<_;++g)t=n[g],m.visit(u)}function h(){if(n){var p,g=n.length,_;for(r=new Array(g),p=0;p<g;++p)_=n[p],r[_.index]=+s(_,p,n)}}function d(p){var g=0,_,m,f=0,b,T,x;if(p.length){for(b=T=x=0;x<4;++x)(_=p[x])&&(m=Math.abs(_.value))&&(g+=_.value,f+=m,b+=m*_.x,T+=m*_.y);p.x=b/f,p.y=T/f}else{_=p,_.x=_.data.x,_.y=_.data.y;do g+=r[_.data.index];while(_=_.next)}p.value=g}function u(p,g,_,m){if(!p.value)return!0;var f=p.x-t.x,b=p.y-t.y,T=m-g,x=f*f+b*b;if(T*T/l<x)return x<o&&(f===0&&(f=Cn(e),x+=f*f),b===0&&(b=Cn(e),x+=b*b),x<a&&(x=Math.sqrt(a*x)),t.vx+=f*p.value*i/x,t.vy+=b*p.value*i/x),!0;if(p.length||x>=o)return;(p.data!==t||p.next)&&(f===0&&(f=Cn(e),x+=f*f),b===0&&(b=Cn(e),x+=b*b),x<a&&(x=Math.sqrt(a*x)));do p.data!==t&&(T=r[p.data.index]*i/x,t.vx+=f*T,t.vy+=b*T);while(p=p.next)}return c.initialize=function(p,g){n=p,e=g,h()},c.strength=function(p){return arguments.length?(s=typeof p=="function"?p:Me(+p),h(),c):s},c.distanceMin=function(p){return arguments.length?(a=p*p,c):Math.sqrt(a)},c.distanceMax=function(p){return arguments.length?(o=p*p,c):Math.sqrt(o)},c.theta=function(p){return arguments.length?(l=p*p,c):Math.sqrt(l)},c}function Hh(n){var t=Me(.1),e,i,s;typeof n!="function"&&(n=Me(n==null?0:+n));function r(o){for(var l=0,c=e.length,h;l<c;++l)h=e[l],h.vx+=(s[l]-h.x)*i[l]*o}function a(){if(e){var o,l=e.length;for(i=new Array(l),s=new Array(l),o=0;o<l;++o)i[o]=isNaN(s[o]=+n(e[o],o,e))?0:+t(e[o],o,e)}}return r.initialize=function(o){e=o,a()},r.strength=function(o){return arguments.length?(t=typeof o=="function"?o:Me(+o),a(),r):t},r.x=function(o){return arguments.length?(n=typeof o=="function"?o:Me(+o),a(),r):n},r}function Wh(n){var t=Me(.1),e,i,s;typeof n!="function"&&(n=Me(n==null?0:+n));function r(o){for(var l=0,c=e.length,h;l<c;++l)h=e[l],h.vy+=(s[l]-h.y)*i[l]*o}function a(){if(e){var o,l=e.length;for(i=new Array(l),s=new Array(l),o=0;o<l;++o)i[o]=isNaN(s[o]=+n(e[o],o,e))?0:+t(e[o],o,e)}}return r.initialize=function(o){e=o,a()},r.strength=function(o){return arguments.length?(t=typeof o=="function"?o:Me(+o),a(),r):t},r.y=function(o){return arguments.length?(n=typeof o=="function"?o:Me(+o),a(),r):n},r}var mm={passive:!1},ts={capture:!0,passive:!1};function Rl(n){n.stopImmediatePropagation()}function Li(n){n.preventDefault(),n.stopImmediatePropagation()}function Zr(n){var t=n.document.documentElement,e=Ie(n).on("dragstart.drag",Li,ts);"onselectstart"in t?e.on("selectstart.drag",Li,ts):(t.__noselect=t.style.MozUserSelect,t.style.MozUserSelect="none")}function $r(n,t){var e=n.document.documentElement,i=Ie(n).on("dragstart.drag",null);t&&(i.on("click.drag",Li,ts),setTimeout(function(){i.on("click.drag",null)},0)),"onselectstart"in e?i.on("selectstart.drag",null):(e.style.MozUserSelect=e.__noselect,delete e.__noselect)}var Jr=n=>()=>n;function Kr(n,{sourceEvent:t,subject:e,target:i,identifier:s,active:r,x:a,y:o,dx:l,dy:c,dispatch:h}){Object.defineProperties(this,{type:{value:n,enumerable:!0,configurable:!0},sourceEvent:{value:t,enumerable:!0,configurable:!0},subject:{value:e,enumerable:!0,configurable:!0},target:{value:i,enumerable:!0,configurable:!0},identifier:{value:s,enumerable:!0,configurable:!0},active:{value:r,enumerable:!0,configurable:!0},x:{value:a,enumerable:!0,configurable:!0},y:{value:o,enumerable:!0,configurable:!0},dx:{value:l,enumerable:!0,configurable:!0},dy:{value:c,enumerable:!0,configurable:!0},_:{value:h}})}Kr.prototype.on=function(){var n=this._.on.apply(this._,arguments);return n===this._?this:n};function RM(n){return!n.ctrlKey&&!n.button}function IM(){return this.parentNode}function PM(n,t){return t==null?{x:n.x,y:n.y}:t}function DM(){return navigator.maxTouchPoints||"ontouchstart"in this}function Xh(){var n=RM,t=IM,e=PM,i=DM,s={},r=An("start","drag","end"),a=0,o,l,c,h,d=0;function u(x){x.on("mousedown.drag",p).filter(i).on("touchstart.drag",m).on("touchmove.drag",f,mm).on("touchend.drag touchcancel.drag",b).style("touch-action","none").style("-webkit-tap-highlight-color","rgba(0,0,0,0)")}function p(x,M){if(!(h||!n.call(this,x,M))){var S=T(this,t.call(this,x,M),x,M,"mouse");S&&(Ie(x.view).on("mousemove.drag",g,ts).on("mouseup.drag",_,ts),Zr(x.view),Rl(x),c=!1,o=x.clientX,l=x.clientY,S("start",x))}}function g(x){if(Li(x),!c){var M=x.clientX-o,S=x.clientY-l;c=M*M+S*S>d}s.mouse("drag",x)}function _(x){Ie(x.view).on("mousemove.drag mouseup.drag",null),$r(x.view,c),Li(x),s.mouse("end",x)}function m(x,M){if(n.call(this,x,M)){var S=x.changedTouches,w=t.call(this,x,M),y=S.length,E,I;for(E=0;E<y;++E)(I=T(this,w,x,M,S[E].identifier,S[E]))&&(Rl(x),I("start",x,S[E]))}}function f(x){var M=x.changedTouches,S=M.length,w,y;for(w=0;w<S;++w)(y=s[M[w].identifier])&&(Li(x),y("drag",x,M[w]))}function b(x){var M=x.changedTouches,S=M.length,w,y;for(h&&clearTimeout(h),h=setTimeout(function(){h=null},500),w=0;w<S;++w)(y=s[M[w].identifier])&&(Rl(x),y("end",x,M[w]))}function T(x,M,S,w,y,E){var I=r.copy(),P=pn(E||S,M),N,H,R;if((R=e.call(x,new Kr("beforestart",{sourceEvent:S,target:u,identifier:y,active:a,x:P[0],y:P[1],dx:0,dy:0,dispatch:I}),w))!=null)return N=R.x-P[0]||0,H=R.y-P[1]||0,function L(U,D,F){var W=P,$;switch(U){case"start":s[y]=L,$=a++;break;case"end":delete s[y],--a;case"drag":P=pn(F||D,M),$=a;break}I.call(U,x,new Kr(U,{sourceEvent:D,subject:R,target:u,identifier:y,active:$,x:P[0]+N,y:P[1]+H,dx:P[0]-W[0],dy:P[1]-W[1],dispatch:I}),w)}}return u.filter=function(x){return arguments.length?(n=typeof x=="function"?x:Jr(!!x),u):n},u.container=function(x){return arguments.length?(t=typeof x=="function"?x:Jr(x),u):t},u.subject=function(x){return arguments.length?(e=typeof x=="function"?x:Jr(x),u):e},u.touchable=function(x){return arguments.length?(i=typeof x=="function"?x:Jr(!!x),u):i},u.on=function(){var x=r.on.apply(r,arguments);return x===r?u:x},u.clickDistance=function(x){return arguments.length?(d=(x=+x)*x,u):Math.sqrt(d)},u}function Il(n,t,e){n.prototype=t.prototype=e,e.constructor=n}function qh(n,t){var e=Object.create(n.prototype);for(var i in t)e[i]=t[i];return e}function ta(){}var jr=.7,Ll=1/jr,ks="\\s*([+-]?\\d+)\\s*",Qr="\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*",Wn="\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*",LM=/^#([0-9a-f]{3,8})$/,NM=new RegExp(`^rgb\\(${ks},${ks},${ks}\\)$`),UM=new RegExp(`^rgb\\(${Wn},${Wn},${Wn}\\)$`),FM=new RegExp(`^rgba\\(${ks},${ks},${ks},${Qr}\\)$`),OM=new RegExp(`^rgba\\(${Wn},${Wn},${Wn},${Qr}\\)$`),BM=new RegExp(`^hsl\\(${Qr},${Wn},${Wn}\\)$`),zM=new RegExp(`^hsla\\(${Qr},${Wn},${Wn},${Qr}\\)$`),gm={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074};Il(ta,Ni,{copy(n){return Object.assign(new this.constructor,this,n)},displayable(){return this.rgb().displayable()},hex:_m,formatHex:_m,formatHex8:kM,formatHsl:VM,formatRgb:xm,toString:xm});function _m(){return this.rgb().formatHex()}function kM(){return this.rgb().formatHex8()}function VM(){return wm(this).formatHsl()}function xm(){return this.rgb().formatRgb()}function Ni(n){var t,e;return n=(n+"").trim().toLowerCase(),(t=LM.exec(n))?(e=t[1].length,t=parseInt(t[1],16),e===6?ym(t):e===3?new Je(t>>8&15|t>>4&240,t>>4&15|t&240,(t&15)<<4|t&15,1):e===8?Pl(t>>24&255,t>>16&255,t>>8&255,(t&255)/255):e===4?Pl(t>>12&15|t>>8&240,t>>8&15|t>>4&240,t>>4&15|t&240,((t&15)<<4|t&15)/255):null):(t=NM.exec(n))?new Je(t[1],t[2],t[3],1):(t=UM.exec(n))?new Je(t[1]*255/100,t[2]*255/100,t[3]*255/100,1):(t=FM.exec(n))?Pl(t[1],t[2],t[3],t[4]):(t=OM.exec(n))?Pl(t[1]*255/100,t[2]*255/100,t[3]*255/100,t[4]):(t=BM.exec(n))?Mm(t[1],t[2]/100,t[3]/100,1):(t=zM.exec(n))?Mm(t[1],t[2]/100,t[3]/100,t[4]):gm.hasOwnProperty(n)?ym(gm[n]):n==="transparent"?new Je(NaN,NaN,NaN,0):null}function ym(n){return new Je(n>>16&255,n>>8&255,n&255,1)}function Pl(n,t,e,i){return i<=0&&(n=t=e=NaN),new Je(n,t,e,i)}function GM(n){return n instanceof ta||(n=Ni(n)),n?(n=n.rgb(),new Je(n.r,n.g,n.b,n.opacity)):new Je}function Vs(n,t,e,i){return arguments.length===1?GM(n):new Je(n,t,e,i==null?1:i)}function Je(n,t,e,i){this.r=+n,this.g=+t,this.b=+e,this.opacity=+i}Il(Je,Vs,qh(ta,{brighter(n){return n=n==null?Ll:Math.pow(Ll,n),new Je(this.r*n,this.g*n,this.b*n,this.opacity)},darker(n){return n=n==null?jr:Math.pow(jr,n),new Je(this.r*n,this.g*n,this.b*n,this.opacity)},rgb(){return this},clamp(){return new Je(ns(this.r),ns(this.g),ns(this.b),Nl(this.opacity))},displayable(){return-.5<=this.r&&this.r<255.5&&-.5<=this.g&&this.g<255.5&&-.5<=this.b&&this.b<255.5&&0<=this.opacity&&this.opacity<=1},hex:vm,formatHex:vm,formatHex8:HM,formatRgb:bm,toString:bm}));function vm(){return`#${es(this.r)}${es(this.g)}${es(this.b)}`}function HM(){return`#${es(this.r)}${es(this.g)}${es(this.b)}${es((isNaN(this.opacity)?1:this.opacity)*255)}`}function bm(){let n=Nl(this.opacity);return`${n===1?"rgb(":"rgba("}${ns(this.r)}, ${ns(this.g)}, ${ns(this.b)}${n===1?")":`, ${n})`}`}function Nl(n){return isNaN(n)?1:Math.max(0,Math.min(1,n))}function ns(n){return Math.max(0,Math.min(255,Math.round(n)||0))}function es(n){return n=ns(n),(n<16?"0":"")+n.toString(16)}function Mm(n,t,e,i){return i<=0?n=t=e=NaN:e<=0||e>=1?n=t=NaN:t<=0&&(n=NaN),new Rn(n,t,e,i)}function wm(n){if(n instanceof Rn)return new Rn(n.h,n.s,n.l,n.opacity);if(n instanceof ta||(n=Ni(n)),!n)return new Rn;if(n instanceof Rn)return n;n=n.rgb();var t=n.r/255,e=n.g/255,i=n.b/255,s=Math.min(t,e,i),r=Math.max(t,e,i),a=NaN,o=r-s,l=(r+s)/2;return o?(t===r?a=(e-i)/o+(e<i)*6:e===r?a=(i-t)/o+2:a=(t-e)/o+4,o/=l<.5?r+s:2-r-s,a*=60):o=l>0&&l<1?0:a,new Rn(a,o,l,n.opacity)}function Em(n,t,e,i){return arguments.length===1?wm(n):new Rn(n,t,e,i==null?1:i)}function Rn(n,t,e,i){this.h=+n,this.s=+t,this.l=+e,this.opacity=+i}Il(Rn,Em,qh(ta,{brighter(n){return n=n==null?Ll:Math.pow(Ll,n),new Rn(this.h,this.s,this.l*n,this.opacity)},darker(n){return n=n==null?jr:Math.pow(jr,n),new Rn(this.h,this.s,this.l*n,this.opacity)},rgb(){var n=this.h%360+(this.h<0)*360,t=isNaN(n)||isNaN(this.s)?0:this.s,e=this.l,i=e+(e<.5?e:1-e)*t,s=2*e-i;return new Je(Yh(n>=240?n-240:n+120,s,i),Yh(n,s,i),Yh(n<120?n+240:n-120,s,i),this.opacity)},clamp(){return new Rn(Sm(this.h),Dl(this.s),Dl(this.l),Nl(this.opacity))},displayable(){return(0<=this.s&&this.s<=1||isNaN(this.s))&&0<=this.l&&this.l<=1&&0<=this.opacity&&this.opacity<=1},formatHsl(){let n=Nl(this.opacity);return`${n===1?"hsl(":"hsla("}${Sm(this.h)}, ${Dl(this.s)*100}%, ${Dl(this.l)*100}%${n===1?")":`, ${n})`}`}}));function Sm(n){return n=(n||0)%360,n<0?n+360:n}function Dl(n){return Math.max(0,Math.min(1,n||0))}function Yh(n,t,e){return(n<60?t+(e-t)*n/60:n<180?e:n<240?t+(e-t)*(240-n)/60:t)*255}function Zh(n,t,e,i,s){var r=n*n,a=r*n;return((1-3*n+3*r-a)*t+(4-6*r+3*a)*e+(1+3*n+3*r-3*a)*i+a*s)/6}function Tm(n){var t=n.length-1;return function(e){var i=e<=0?e=0:e>=1?(e=1,t-1):Math.floor(e*t),s=n[i],r=n[i+1],a=i>0?n[i-1]:2*s-r,o=i<t-1?n[i+2]:2*r-s;return Zh((e-i/t)*t,a,s,r,o)}}function Am(n){var t=n.length;return function(e){var i=Math.floor(((e%=1)<0?++e:e)*t),s=n[(i+t-1)%t],r=n[i%t],a=n[(i+1)%t],o=n[(i+2)%t];return Zh((e-i/t)*t,s,r,a,o)}}var $h=n=>()=>n;function WM(n,t){return function(e){return n+e*t}}function XM(n,t,e){return n=Math.pow(n,e),t=Math.pow(t,e)-n,e=1/e,function(i){return Math.pow(n+i*t,e)}}function Cm(n){return(n=+n)==1?Ul:function(t,e){return e-t?XM(t,e,n):$h(isNaN(t)?e:t)}}function Ul(n,t){var e=t-n;return e?WM(n,e):$h(isNaN(n)?t:n)}var Fl=function n(t){var e=Cm(t);function i(s,r){var a=e((s=Vs(s)).r,(r=Vs(r)).r),o=e(s.g,r.g),l=e(s.b,r.b),c=Ul(s.opacity,r.opacity);return function(h){return s.r=a(h),s.g=o(h),s.b=l(h),s.opacity=c(h),s+""}}return i.gamma=n,i}(1);function Rm(n){return function(t){var e=t.length,i=new Array(e),s=new Array(e),r=new Array(e),a,o;for(a=0;a<e;++a)o=Vs(t[a]),i[a]=o.r||0,s[a]=o.g||0,r[a]=o.b||0;return i=n(i),s=n(s),r=n(r),o.opacity=1,function(l){return o.r=i(l),o.g=s(l),o.b=r(l),o+""}}}var qM=Rm(Tm),YM=Rm(Am);function mn(n,t){return n=+n,t=+t,function(e){return n*(1-e)+t*e}}var Kh=/[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,Jh=new RegExp(Kh.source,"g");function ZM(n){return function(){return n}}function $M(n){return function(t){return n(t)+""}}function jh(n,t){var e=Kh.lastIndex=Jh.lastIndex=0,i,s,r,a=-1,o=[],l=[];for(n=n+"",t=t+"";(i=Kh.exec(n))&&(s=Jh.exec(t));)(r=s.index)>e&&(r=t.slice(e,r),o[a]?o[a]+=r:o[++a]=r),(i=i[0])===(s=s[0])?o[a]?o[a]+=s:o[++a]=s:(o[++a]=null,l.push({i:a,x:mn(i,s)})),e=Jh.lastIndex;return e<t.length&&(r=t.slice(e),o[a]?o[a]+=r:o[++a]=r),o.length<2?l[0]?$M(l[0].x):ZM(t):(t=l.length,function(c){for(var h=0,d;h<t;++h)o[(d=l[h]).i]=d.x(c);return o.join("")})}var Im=180/Math.PI,Ol={translateX:0,translateY:0,rotate:0,skewX:0,scaleX:1,scaleY:1};function Qh(n,t,e,i,s,r){var a,o,l;return(a=Math.sqrt(n*n+t*t))&&(n/=a,t/=a),(l=n*e+t*i)&&(e-=n*l,i-=t*l),(o=Math.sqrt(e*e+i*i))&&(e/=o,i/=o,l/=o),n*i<t*e&&(n=-n,t=-t,l=-l,a=-a),{translateX:s,translateY:r,rotate:Math.atan2(t,n)*Im,skewX:Math.atan(l)*Im,scaleX:a,scaleY:o}}var Bl;function Pm(n){let t=new(typeof DOMMatrix=="function"?DOMMatrix:WebKitCSSMatrix)(n+"");return t.isIdentity?Ol:Qh(t.a,t.b,t.c,t.d,t.e,t.f)}function Dm(n){return n==null?Ol:(Bl||(Bl=document.createElementNS("http://www.w3.org/2000/svg","g")),Bl.setAttribute("transform",n),(n=Bl.transform.baseVal.consolidate())?(n=n.matrix,Qh(n.a,n.b,n.c,n.d,n.e,n.f)):Ol)}function Lm(n,t,e,i){function s(c){return c.length?c.pop()+" ":""}function r(c,h,d,u,p,g){if(c!==d||h!==u){var _=p.push("translate(",null,t,null,e);g.push({i:_-4,x:mn(c,d)},{i:_-2,x:mn(h,u)})}else(d||u)&&p.push("translate("+d+t+u+e)}function a(c,h,d,u){c!==h?(c-h>180?h+=360:h-c>180&&(c+=360),u.push({i:d.push(s(d)+"rotate(",null,i)-2,x:mn(c,h)})):h&&d.push(s(d)+"rotate("+h+i)}function o(c,h,d,u){c!==h?u.push({i:d.push(s(d)+"skewX(",null,i)-2,x:mn(c,h)}):h&&d.push(s(d)+"skewX("+h+i)}function l(c,h,d,u,p,g){if(c!==d||h!==u){var _=p.push(s(p)+"scale(",null,",",null,")");g.push({i:_-4,x:mn(c,d)},{i:_-2,x:mn(h,u)})}else(d!==1||u!==1)&&p.push(s(p)+"scale("+d+","+u+")")}return function(c,h){var d=[],u=[];return c=n(c),h=n(h),r(c.translateX,c.translateY,h.translateX,h.translateY,d,u),a(c.rotate,h.rotate,d,u),o(c.skewX,h.skewX,d,u),l(c.scaleX,c.scaleY,h.scaleX,h.scaleY,d,u),c=h=null,function(p){for(var g=-1,_=u.length,m;++g<_;)d[(m=u[g]).i]=m.x(p);return d.join("")}}}var tu=Lm(Pm,"px, ","px)","deg)"),eu=Lm(Dm,", ",")",")");var JM=1e-12;function Nm(n){return((n=Math.exp(n))+1/n)/2}function KM(n){return((n=Math.exp(n))-1/n)/2}function jM(n){return((n=Math.exp(2*n))-1)/(n+1)}var nu=function n(t,e,i){function s(r,a){var o=r[0],l=r[1],c=r[2],h=a[0],d=a[1],u=a[2],p=h-o,g=d-l,_=p*p+g*g,m,f;if(_<JM)f=Math.log(u/c)/t,m=function(w){return[o+w*p,l+w*g,c*Math.exp(t*w*f)]};else{var b=Math.sqrt(_),T=(u*u-c*c+i*_)/(2*c*e*b),x=(u*u-c*c-i*_)/(2*u*e*b),M=Math.log(Math.sqrt(T*T+1)-T),S=Math.log(Math.sqrt(x*x+1)-x);f=(S-M)/t,m=function(w){var y=w*f,E=Nm(M),I=c/(e*b)*(E*jM(t*y+M)-KM(M));return[o+I*p,l+I*g,c*E/Nm(t*y+M)]}}return m.duration=f*1e3*t/Math.SQRT2,m}return s.rho=function(r){var a=Math.max(.001,+r),o=a*a,l=o*o;return n(a,o,l)},s}(Math.SQRT2,2,4);var QM=An("start","end","cancel","interrupt"),tS=[],Om=0,Um=1,kl=2,zl=3,Fm=4,Vl=5,ea=6;function Ui(n,t,e,i,s,r){var a=n.__transition;if(!a)n.__transition={};else if(e in a)return;eS(n,e,{name:t,index:i,group:s,on:QM,tween:tS,time:r.time,delay:r.delay,duration:r.duration,ease:r.ease,timer:null,state:Om})}function na(n,t){var e=Te(n,t);if(e.state>Om)throw new Error("too late; already scheduled");return e}function Ne(n,t){var e=Te(n,t);if(e.state>zl)throw new Error("too late; already running");return e}function Te(n,t){var e=n.__transition;if(!e||!(e=e[t]))throw new Error("transition not found");return e}function eS(n,t,e){var i=n.__transition,s;i[t]=e,e.timer=Pi(r,0,e.time);function r(c){e.state=Um,e.timer.restart(a,e.delay,e.time),e.delay<=c&&a(c-e.delay)}function a(c){var h,d,u,p;if(e.state!==Um)return l();for(h in i)if(p=i[h],p.name===e.name){if(p.state===zl)return bl(a);p.state===Fm?(p.state=ea,p.timer.stop(),p.on.call("interrupt",n,n.__data__,p.index,p.group),delete i[h]):+h<t&&(p.state=ea,p.timer.stop(),p.on.call("cancel",n,n.__data__,p.index,p.group),delete i[h])}if(bl(function(){e.state===zl&&(e.state=Fm,e.timer.restart(o,e.delay,e.time),o(c))}),e.state=kl,e.on.call("start",n,n.__data__,e.index,e.group),e.state===kl){for(e.state=zl,s=new Array(u=e.tween.length),h=0,d=-1;h<u;++h)(p=e.tween[h].value.call(n,n.__data__,e.index,e.group))&&(s[++d]=p);s.length=d+1}}function o(c){for(var h=c<e.duration?e.ease.call(null,c/e.duration):(e.timer.restart(l),e.state=Vl,1),d=-1,u=s.length;++d<u;)s[d].call(n,h);e.state===Vl&&(e.on.call("end",n,n.__data__,e.index,e.group),l())}function l(){e.state=ea,e.timer.stop(),delete i[t];for(var c in i)return;delete n.__transition}}function is(n,t){var e=n.__transition,i,s,r=!0,a;if(e){t=t==null?null:t+"";for(a in e){if((i=e[a]).name!==t){r=!1;continue}s=i.state>kl&&i.state<Vl,i.state=ea,i.timer.stop(),i.on.call(s?"interrupt":"cancel",n,n.__data__,i.index,i.group),delete e[a]}r&&delete n.__transition}}function Bm(n){return this.each(function(){is(this,n)})}function nS(n,t){var e,i;return function(){var s=Ne(this,n),r=s.tween;if(r!==e){i=e=r;for(var a=0,o=i.length;a<o;++a)if(i[a].name===t){i=i.slice(),i.splice(a,1);break}}s.tween=i}}function iS(n,t,e){var i,s;if(typeof e!="function")throw new Error;return function(){var r=Ne(this,n),a=r.tween;if(a!==i){s=(i=a).slice();for(var o={name:t,value:e},l=0,c=s.length;l<c;++l)if(s[l].name===t){s[l]=o;break}l===c&&s.push(o)}r.tween=s}}function zm(n,t){var e=this._id;if(n+="",arguments.length<2){for(var i=Te(this.node(),e).tween,s=0,r=i.length,a;s<r;++s)if((a=i[s]).name===n)return a.value;return null}return this.each((t==null?nS:iS)(e,n,t))}function Gs(n,t,e){var i=n._id;return n.each(function(){var s=Ne(this,i);(s.value||(s.value={}))[t]=e.apply(this,arguments)}),function(s){return Te(s,i).value[t]}}function Gl(n,t){var e;return(typeof t=="number"?mn:t instanceof Ni?Fl:(e=Ni(t))?(t=e,Fl):jh)(n,t)}function sS(n){return function(){this.removeAttribute(n)}}function rS(n){return function(){this.removeAttributeNS(n.space,n.local)}}function aS(n,t,e){var i,s=e+"",r;return function(){var a=this.getAttribute(n);return a===s?null:a===i?r:r=t(i=a,e)}}function oS(n,t,e){var i,s=e+"",r;return function(){var a=this.getAttributeNS(n.space,n.local);return a===s?null:a===i?r:r=t(i=a,e)}}function lS(n,t,e){var i,s,r;return function(){var a,o=e(this),l;return o==null?void this.removeAttribute(n):(a=this.getAttribute(n),l=o+"",a===l?null:a===i&&l===s?r:(s=l,r=t(i=a,o)))}}function cS(n,t,e){var i,s,r;return function(){var a,o=e(this),l;return o==null?void this.removeAttributeNS(n.space,n.local):(a=this.getAttributeNS(n.space,n.local),l=o+"",a===l?null:a===i&&l===s?r:(s=l,r=t(i=a,o)))}}function km(n,t){var e=si(n),i=e==="transform"?eu:Gl;return this.attrTween(n,typeof t=="function"?(e.local?cS:lS)(e,i,Gs(this,"attr."+n,t)):t==null?(e.local?rS:sS)(e):(e.local?oS:aS)(e,i,t))}function hS(n,t){return function(e){this.setAttribute(n,t.call(this,e))}}function uS(n,t){return function(e){this.setAttributeNS(n.space,n.local,t.call(this,e))}}function fS(n,t){var e,i;function s(){var r=t.apply(this,arguments);return r!==i&&(e=(i=r)&&uS(n,r)),e}return s._value=t,s}function dS(n,t){var e,i;function s(){var r=t.apply(this,arguments);return r!==i&&(e=(i=r)&&hS(n,r)),e}return s._value=t,s}function Vm(n,t){var e="attr."+n;if(arguments.length<2)return(e=this.tween(e))&&e._value;if(t==null)return this.tween(e,null);if(typeof t!="function")throw new Error;var i=si(n);return this.tween(e,(i.local?fS:dS)(i,t))}function pS(n,t){return function(){na(this,n).delay=+t.apply(this,arguments)}}function mS(n,t){return t=+t,function(){na(this,n).delay=t}}function Gm(n){var t=this._id;return arguments.length?this.each((typeof n=="function"?pS:mS)(t,n)):Te(this.node(),t).delay}function gS(n,t){return function(){Ne(this,n).duration=+t.apply(this,arguments)}}function _S(n,t){return t=+t,function(){Ne(this,n).duration=t}}function Hm(n){var t=this._id;return arguments.length?this.each((typeof n=="function"?gS:_S)(t,n)):Te(this.node(),t).duration}function xS(n,t){if(typeof t!="function")throw new Error;return function(){Ne(this,n).ease=t}}function Wm(n){var t=this._id;return arguments.length?this.each(xS(t,n)):Te(this.node(),t).ease}function yS(n,t){return function(){var e=t.apply(this,arguments);if(typeof e!="function")throw new Error;Ne(this,n).ease=e}}function Xm(n){if(typeof n!="function")throw new Error;return this.each(yS(this._id,n))}function qm(n){typeof n!="function"&&(n=qr(n));for(var t=this._groups,e=t.length,i=new Array(e),s=0;s<e;++s)for(var r=t[s],a=r.length,o=i[s]=[],l,c=0;c<a;++c)(l=r[c])&&n.call(l,l.__data__,c,r)&&o.push(l);return new Xe(i,this._parents,this._name,this._id)}function Ym(n){if(n._id!==this._id)throw new Error;for(var t=this._groups,e=n._groups,i=t.length,s=e.length,r=Math.min(i,s),a=new Array(i),o=0;o<r;++o)for(var l=t[o],c=e[o],h=l.length,d=a[o]=new Array(h),u,p=0;p<h;++p)(u=l[p]||c[p])&&(d[p]=u);for(;o<i;++o)a[o]=t[o];return new Xe(a,this._parents,this._name,this._id)}function vS(n){return(n+"").trim().split(/^|\s+/).every(function(t){var e=t.indexOf(".");return e>=0&&(t=t.slice(0,e)),!t||t==="start"})}function bS(n,t,e){var i,s,r=vS(t)?na:Ne;return function(){var a=r(this,n),o=a.on;o!==i&&(s=(i=o).copy()).on(t,e),a.on=s}}function Zm(n,t){var e=this._id;return arguments.length<2?Te(this.node(),e).on.on(n):this.each(bS(e,n,t))}function MS(n){return function(){var t=this.parentNode;for(var e in this.__transition)if(+e!==n)return;t&&t.removeChild(this)}}function $m(){return this.on("end.remove",MS(this._id))}function Jm(n){var t=this._name,e=this._id;typeof n!="function"&&(n=Qi(n));for(var i=this._groups,s=i.length,r=new Array(s),a=0;a<s;++a)for(var o=i[a],l=o.length,c=r[a]=new Array(l),h,d,u=0;u<l;++u)(h=o[u])&&(d=n.call(h,h.__data__,u,o))&&("__data__"in h&&(d.__data__=h.__data__),c[u]=d,Ui(c[u],t,e,u,c,Te(h,e)));return new Xe(r,this._parents,t,e)}function Km(n){var t=this._name,e=this._id;typeof n!="function"&&(n=Xr(n));for(var i=this._groups,s=i.length,r=[],a=[],o=0;o<s;++o)for(var l=i[o],c=l.length,h,d=0;d<c;++d)if(h=l[d]){for(var u=n.call(h,h.__data__,d,l),p,g=Te(h,e),_=0,m=u.length;_<m;++_)(p=u[_])&&Ui(p,t,e,_,u,g);r.push(u),a.push(h)}return new Xe(r,a,t,e)}var SS=ri.prototype.constructor;function jm(){return new SS(this._groups,this._parents)}function wS(n,t){var e,i,s;return function(){var r=Di(this,n),a=(this.style.removeProperty(n),Di(this,n));return r===a?null:r===e&&a===i?s:s=t(e=r,i=a)}}function Qm(n){return function(){this.style.removeProperty(n)}}function ES(n,t,e){var i,s=e+"",r;return function(){var a=Di(this,n);return a===s?null:a===i?r:r=t(i=a,e)}}function TS(n,t,e){var i,s,r;return function(){var a=Di(this,n),o=e(this),l=o+"";return o==null&&(l=o=(this.style.removeProperty(n),Di(this,n))),a===l?null:a===i&&l===s?r:(s=l,r=t(i=a,o))}}function AS(n,t){var e,i,s,r="style."+t,a="end."+r,o;return function(){var l=Ne(this,n),c=l.on,h=l.value[r]==null?o||(o=Qm(t)):void 0;(c!==e||s!==h)&&(i=(e=c).copy()).on(a,s=h),l.on=i}}function tg(n,t,e){var i=(n+="")=="transform"?tu:Gl;return t==null?this.styleTween(n,wS(n,i)).on("end.style."+n,Qm(n)):typeof t=="function"?this.styleTween(n,TS(n,i,Gs(this,"style."+n,t))).each(AS(this._id,n)):this.styleTween(n,ES(n,i,t),e).on("end.style."+n,null)}function CS(n,t,e){return function(i){this.style.setProperty(n,t.call(this,i),e)}}function RS(n,t,e){var i,s;function r(){var a=t.apply(this,arguments);return a!==s&&(i=(s=a)&&CS(n,a,e)),i}return r._value=t,r}function eg(n,t,e){var i="style."+(n+="");if(arguments.length<2)return(i=this.tween(i))&&i._value;if(t==null)return this.tween(i,null);if(typeof t!="function")throw new Error;return this.tween(i,RS(n,t,e==null?"":e))}function IS(n){return function(){this.textContent=n}}function PS(n){return function(){var t=n(this);this.textContent=t==null?"":t}}function ng(n){return this.tween("text",typeof n=="function"?PS(Gs(this,"text",n)):IS(n==null?"":n+""))}function DS(n){return function(t){this.textContent=n.call(this,t)}}function LS(n){var t,e;function i(){var s=n.apply(this,arguments);return s!==e&&(t=(e=s)&&DS(s)),t}return i._value=n,i}function ig(n){var t="text";if(arguments.length<1)return(t=this.tween(t))&&t._value;if(n==null)return this.tween(t,null);if(typeof n!="function")throw new Error;return this.tween(t,LS(n))}function sg(){for(var n=this._name,t=this._id,e=Hl(),i=this._groups,s=i.length,r=0;r<s;++r)for(var a=i[r],o=a.length,l,c=0;c<o;++c)if(l=a[c]){var h=Te(l,t);Ui(l,n,e,c,a,{time:h.time+h.delay+h.duration,delay:0,duration:h.duration,ease:h.ease})}return new Xe(i,this._parents,n,e)}function rg(){var n,t,e=this,i=e._id,s=e.size();return new Promise(function(r,a){var o={value:a},l={value:function(){--s===0&&r()}};e.each(function(){var c=Ne(this,i),h=c.on;h!==n&&(t=(n=h).copy(),t._.cancel.push(o),t._.interrupt.push(o),t._.end.push(l)),c.on=t}),s===0&&r()})}var NS=0;function Xe(n,t,e,i){this._groups=n,this._parents=t,this._name=e,this._id=i}function ag(n){return ri().transition(n)}function Hl(){return++NS}var ai=ri.prototype;Xe.prototype=ag.prototype={constructor:Xe,select:Jm,selectAll:Km,selectChild:ai.selectChild,selectChildren:ai.selectChildren,filter:qm,merge:Ym,selection:jm,transition:sg,call:ai.call,nodes:ai.nodes,node:ai.node,size:ai.size,empty:ai.empty,each:ai.each,on:Zm,attr:km,attrTween:Vm,style:tg,styleTween:eg,text:ng,textTween:ig,remove:$m,tween:zm,delay:Gm,duration:Hm,ease:Wm,easeVarying:Xm,end:rg,[Symbol.iterator]:ai[Symbol.iterator]};function Wl(n){return((n*=2)<=1?n*n*n:(n-=2)*n*n+2)/2}var US={time:null,delay:0,duration:250,ease:Wl};function FS(n,t){for(var e;!(e=n.__transition)||!(e=e[t]);)if(!(n=n.parentNode))throw new Error(`transition ${t} not found`);return e}function og(n){var t,e;n instanceof Xe?(t=n._id,n=n._name):(t=Hl(),(e=US).time=Wr(),n=n==null?null:n+"");for(var i=this._groups,s=i.length,r=0;r<s;++r)for(var a=i[r],o=a.length,l,c=0;c<o;++c)(l=a[c])&&Ui(l,n,t,c,a,e||FS(l,t));return new Xe(i,this._parents,n,t)}ri.prototype.interrupt=Bm;ri.prototype.transition=og;var ia=n=>()=>n;function iu(n,{sourceEvent:t,target:e,transform:i,dispatch:s}){Object.defineProperties(this,{type:{value:n,enumerable:!0,configurable:!0},sourceEvent:{value:t,enumerable:!0,configurable:!0},target:{value:e,enumerable:!0,configurable:!0},transform:{value:i,enumerable:!0,configurable:!0},_:{value:s}})}function In(n,t,e){this.k=n,this.x=t,this.y=e}In.prototype={constructor:In,scale:function(n){return n===1?this:new In(this.k*n,this.x,this.y)},translate:function(n,t){return n===0&t===0?this:new In(this.k,this.x+this.k*n,this.y+this.k*t)},apply:function(n){return[n[0]*this.k+this.x,n[1]*this.k+this.y]},applyX:function(n){return n*this.k+this.x},applyY:function(n){return n*this.k+this.y},invert:function(n){return[(n[0]-this.x)/this.k,(n[1]-this.y)/this.k]},invertX:function(n){return(n-this.x)/this.k},invertY:function(n){return(n-this.y)/this.k},rescaleX:function(n){return n.copy().domain(n.range().map(this.invertX,this).map(n.invert,n))},rescaleY:function(n){return n.copy().domain(n.range().map(this.invertY,this).map(n.invert,n))},toString:function(){return"translate("+this.x+","+this.y+") scale("+this.k+")"}};var Pn=new In(1,0,0);Hs.prototype=In.prototype;function Hs(n){for(;!n.__zoom;)if(!(n=n.parentNode))return Pn;return n.__zoom}function Xl(n){n.stopImmediatePropagation()}function Ws(n){n.preventDefault(),n.stopImmediatePropagation()}function OS(n){return(!n.ctrlKey||n.type==="wheel")&&!n.button}function BS(){var n=this;return n instanceof SVGElement?(n=n.ownerSVGElement||n,n.hasAttribute("viewBox")?(n=n.viewBox.baseVal,[[n.x,n.y],[n.x+n.width,n.y+n.height]]):[[0,0],[n.width.baseVal.value,n.height.baseVal.value]]):[[0,0],[n.clientWidth,n.clientHeight]]}function lg(){return this.__zoom||Pn}function zS(n){return-n.deltaY*(n.deltaMode===1?.05:n.deltaMode?1:.002)*(n.ctrlKey?10:1)}function kS(){return navigator.maxTouchPoints||"ontouchstart"in this}function VS(n,t,e){var i=n.invertX(t[0][0])-e[0][0],s=n.invertX(t[1][0])-e[1][0],r=n.invertY(t[0][1])-e[0][1],a=n.invertY(t[1][1])-e[1][1];return n.translate(s>i?(i+s)/2:Math.min(0,i)||Math.max(0,s),a>r?(r+a)/2:Math.min(0,r)||Math.max(0,a))}function su(){var n=OS,t=BS,e=VS,i=zS,s=kS,r=[0,1/0],a=[[-1/0,-1/0],[1/0,1/0]],o=250,l=nu,c=An("start","zoom","end"),h,d,u,p=500,g=150,_=0,m=10;function f(R){R.property("__zoom",lg).on("wheel.zoom",y,{passive:!1}).on("mousedown.zoom",E).on("dblclick.zoom",I).filter(s).on("touchstart.zoom",P).on("touchmove.zoom",N).on("touchend.zoom touchcancel.zoom",H).style("-webkit-tap-highlight-color","rgba(0,0,0,0)")}f.transform=function(R,L,U,D){var F=R.selection?R.selection():R;F.property("__zoom",lg),R!==F?M(R,L,U,D):F.interrupt().each(function(){S(this,arguments).event(D).start().zoom(null,typeof L=="function"?L.apply(this,arguments):L).end()})},f.scaleBy=function(R,L,U,D){f.scaleTo(R,function(){var F=this.__zoom.k,W=typeof L=="function"?L.apply(this,arguments):L;return F*W},U,D)},f.scaleTo=function(R,L,U,D){f.transform(R,function(){var F=t.apply(this,arguments),W=this.__zoom,$=U==null?x(F):typeof U=="function"?U.apply(this,arguments):U,et=W.invert($),G=typeof L=="function"?L.apply(this,arguments):L;return e(T(b(W,G),$,et),F,a)},U,D)},f.translateBy=function(R,L,U,D){f.transform(R,function(){return e(this.__zoom.translate(typeof L=="function"?L.apply(this,arguments):L,typeof U=="function"?U.apply(this,arguments):U),t.apply(this,arguments),a)},null,D)},f.translateTo=function(R,L,U,D,F){f.transform(R,function(){var W=t.apply(this,arguments),$=this.__zoom,et=D==null?x(W):typeof D=="function"?D.apply(this,arguments):D;return e(Pn.translate(et[0],et[1]).scale($.k).translate(typeof L=="function"?-L.apply(this,arguments):-L,typeof U=="function"?-U.apply(this,arguments):-U),W,a)},D,F)};function b(R,L){return L=Math.max(r[0],Math.min(r[1],L)),L===R.k?R:new In(L,R.x,R.y)}function T(R,L,U){var D=L[0]-U[0]*R.k,F=L[1]-U[1]*R.k;return D===R.x&&F===R.y?R:new In(R.k,D,F)}function x(R){return[(+R[0][0]+ +R[1][0])/2,(+R[0][1]+ +R[1][1])/2]}function M(R,L,U,D){R.on("start.zoom",function(){S(this,arguments).event(D).start()}).on("interrupt.zoom end.zoom",function(){S(this,arguments).event(D).end()}).tween("zoom",function(){var F=this,W=arguments,$=S(F,W).event(D),et=t.apply(F,W),G=U==null?x(et):typeof U=="function"?U.apply(F,W):U,ot=Math.max(et[1][0]-et[0][0],et[1][1]-et[0][1]),ft=F.__zoom,yt=typeof L=="function"?L.apply(F,W):L,Z=l(ft.invert(G).concat(ot/ft.k),yt.invert(G).concat(ot/yt.k));return function(it){if(it===1)it=yt;else{var nt=Z(it),Rt=ot/nt[2];it=new In(Rt,G[0]-nt[0]*Rt,G[1]-nt[1]*Rt)}$.zoom(null,it)}})}function S(R,L,U){return!U&&R.__zooming||new w(R,L)}function w(R,L){this.that=R,this.args=L,this.active=0,this.sourceEvent=null,this.extent=t.apply(R,L),this.taps=0}w.prototype={event:function(R){return R&&(this.sourceEvent=R),this},start:function(){return++this.active===1&&(this.that.__zooming=this,this.emit("start")),this},zoom:function(R,L){return this.mouse&&R!=="mouse"&&(this.mouse[1]=L.invert(this.mouse[0])),this.touch0&&R!=="touch"&&(this.touch0[1]=L.invert(this.touch0[0])),this.touch1&&R!=="touch"&&(this.touch1[1]=L.invert(this.touch1[0])),this.that.__zoom=L,this.emit("zoom"),this},end:function(){return--this.active===0&&(delete this.that.__zooming,this.emit("end")),this},emit:function(R){var L=Ie(this.that).datum();c.call(R,this.that,new iu(R,{sourceEvent:this.sourceEvent,target:f,type:R,transform:this.that.__zoom,dispatch:c}),L)}};function y(R,...L){if(!n.apply(this,arguments))return;var U=S(this,L).event(R),D=this.__zoom,F=Math.max(r[0],Math.min(r[1],D.k*Math.pow(2,i.apply(this,arguments)))),W=pn(R);if(U.wheel)(U.mouse[0][0]!==W[0]||U.mouse[0][1]!==W[1])&&(U.mouse[1]=D.invert(U.mouse[0]=W)),clearTimeout(U.wheel);else{if(D.k===F)return;U.mouse=[W,D.invert(W)],is(this),U.start()}Ws(R),U.wheel=setTimeout($,g),U.zoom("mouse",e(T(b(D,F),U.mouse[0],U.mouse[1]),U.extent,a));function $(){U.wheel=null,U.end()}}function E(R,...L){if(u||!n.apply(this,arguments))return;var U=R.currentTarget,D=S(this,L,!0).event(R),F=Ie(R.view).on("mousemove.zoom",G,!0).on("mouseup.zoom",ot,!0),W=pn(R,U),$=R.clientX,et=R.clientY;Zr(R.view),Xl(R),D.mouse=[W,this.__zoom.invert(W)],is(this),D.start();function G(ft){if(Ws(ft),!D.moved){var yt=ft.clientX-$,Z=ft.clientY-et;D.moved=yt*yt+Z*Z>_}D.event(ft).zoom("mouse",e(T(D.that.__zoom,D.mouse[0]=pn(ft,U),D.mouse[1]),D.extent,a))}function ot(ft){F.on("mousemove.zoom mouseup.zoom",null),$r(ft.view,D.moved),Ws(ft),D.event(ft).end()}}function I(R,...L){if(n.apply(this,arguments)){var U=this.__zoom,D=pn(R.changedTouches?R.changedTouches[0]:R,this),F=U.invert(D),W=U.k*(R.shiftKey?.5:2),$=e(T(b(U,W),D,F),t.apply(this,L),a);Ws(R),o>0?Ie(this).transition().duration(o).call(M,$,D,R):Ie(this).call(f.transform,$,D,R)}}function P(R,...L){if(n.apply(this,arguments)){var U=R.touches,D=U.length,F=S(this,L,R.changedTouches.length===D).event(R),W,$,et,G;for(Xl(R),$=0;$<D;++$)et=U[$],G=pn(et,this),G=[G,this.__zoom.invert(G),et.identifier],F.touch0?!F.touch1&&F.touch0[2]!==G[2]&&(F.touch1=G,F.taps=0):(F.touch0=G,W=!0,F.taps=1+!!h);h&&(h=clearTimeout(h)),W&&(F.taps<2&&(d=G[0],h=setTimeout(function(){h=null},p)),is(this),F.start())}}function N(R,...L){if(this.__zooming){var U=S(this,L).event(R),D=R.changedTouches,F=D.length,W,$,et,G;for(Ws(R),W=0;W<F;++W)$=D[W],et=pn($,this),U.touch0&&U.touch0[2]===$.identifier?U.touch0[0]=et:U.touch1&&U.touch1[2]===$.identifier&&(U.touch1[0]=et);if($=U.that.__zoom,U.touch1){var ot=U.touch0[0],ft=U.touch0[1],yt=U.touch1[0],Z=U.touch1[1],it=(it=yt[0]-ot[0])*it+(it=yt[1]-ot[1])*it,nt=(nt=Z[0]-ft[0])*nt+(nt=Z[1]-ft[1])*nt;$=b($,Math.sqrt(it/nt)),et=[(ot[0]+yt[0])/2,(ot[1]+yt[1])/2],G=[(ft[0]+Z[0])/2,(ft[1]+Z[1])/2]}else if(U.touch0)et=U.touch0[0],G=U.touch0[1];else return;U.zoom("touch",e(T($,et,G),U.extent,a))}}function H(R,...L){if(this.__zooming){var U=S(this,L).event(R),D=R.changedTouches,F=D.length,W,$;for(Xl(R),u&&clearTimeout(u),u=setTimeout(function(){u=null},p),W=0;W<F;++W)$=D[W],U.touch0&&U.touch0[2]===$.identifier?delete U.touch0:U.touch1&&U.touch1[2]===$.identifier&&delete U.touch1;if(U.touch1&&!U.touch0&&(U.touch0=U.touch1,delete U.touch1),U.touch0)U.touch0[1]=this.__zoom.invert(U.touch0[0]);else if(U.end(),U.taps===2&&($=pn($,this),Math.hypot(d[0]-$[0],d[1]-$[1])<m)){var et=Ie(this).on("dblclick.zoom");et&&et.apply(this,arguments)}}}return f.wheelDelta=function(R){return arguments.length?(i=typeof R=="function"?R:ia(+R),f):i},f.filter=function(R){return arguments.length?(n=typeof R=="function"?R:ia(!!R),f):n},f.touchable=function(R){return arguments.length?(s=typeof R=="function"?R:ia(!!R),f):s},f.extent=function(R){return arguments.length?(t=typeof R=="function"?R:ia([[+R[0][0],+R[0][1]],[+R[1][0],+R[1][1]]]),f):t},f.scaleExtent=function(R){return arguments.length?(r[0]=+R[0],r[1]=+R[1],f):[r[0],r[1]]},f.translateExtent=function(R){return arguments.length?(a[0][0]=+R[0][0],a[1][0]=+R[1][0],a[0][1]=+R[0][1],a[1][1]=+R[1][1],f):[[a[0][0],a[0][1]],[a[1][0],a[1][1]]]},f.constrain=function(R){return arguments.length?(e=R,f):e},f.duration=function(R){return arguments.length?(o=+R,f):o},f.interpolate=function(R){return arguments.length?(l=R,f):l},f.on=function(){var R=c.on.apply(c,arguments);return R===c?f:R},f.clickDistance=function(R){return arguments.length?(_=(R=+R)*R,f):Math.sqrt(_)},f.tapDistance=function(R){return arguments.length?(m=+R,f):m},f}var sa="llm-wiki-semantic-graph",GS=new Set(["the","a","an","and","or","in","is","it","of","to","for","on","with","as","at","by","from","be","was","were","been","that","this","are","have","has","had","not","but","can","all","if","they","their","more","will","would","could","should","also","just","about","when","then","than","into","over","use","used","using","new","one","two","may","how","what","its","which"]);function au(n){return n.toLowerCase().replace(/```[\s\S]*?```/g," ").replace(/\[\[([^\]]+)\]\]/g,"$1").replace(/[^a-z0-9\s]/g," ").split(/\s+/).filter(t=>t.length>2&&!GS.has(t))}function HS(n,t){let e=0,i=0,s=0,r=Math.min(n.length,t.length);for(let o=0;o<r;o++)e+=n[o]*t[o],i+=n[o]*n[o],s+=t[o]*t[o];let a=Math.sqrt(i)*Math.sqrt(s);return a>0?e/a:0}var ou=class{constructor(){this.tf=new Map;this.df=new Map;this.dl=new Map;this.avgdl=1;this.N=0;this.k1=1.5;this.b=.75}add(t,e){var r,a;let i=au(e),s=new Map;for(let o of i)s.set(o,((r=s.get(o))!=null?r:0)+1);this.tf.set(t,s),this.dl.set(t,i.length);for(let o of s.keys())this.df.set(o,((a=this.df.get(o))!=null?a:0)+1);this.N++}finalize(){let t=[...this.dl.values()].reduce((e,i)=>e+i,0);this.avgdl=this.N>0?t/this.N:1}score(t,e){var a,o,l;let i=this.tf.get(t);if(!i)return 0;let s=(a=this.dl.get(t))!=null?a:1,r=0;for(let c of e){let h=(o=i.get(c))!=null?o:0;if(h===0)continue;let d=(l=this.df.get(c))!=null?l:0,u=Math.log((this.N-d+.5)/(d+.5)+1);r+=u*(h*(this.k1+1))/(h+this.k1*(1-this.b+this.b*s/this.avgdl))}return r}topK(t,e=30,i=.5){let s=[];for(let r of this.tf.keys()){let a=this.score(r,t);a>=i&&s.push([r,a])}return s.sort((r,a)=>a[1]-r[1]),s.slice(0,e).map(([r])=>r)}},oi={axiom:"#4E79A7",rule:"#4E79A7",entity:"#59A14F",concept:"#76B7B2",index:"#BAB0AC",process:"#F28E2B",decision:"#E15759",pattern:"#B07AA1",overview:"#9C755F",synthesis:"#9C755F"},gn=["#1f77b4","#ff7f0e","#2ca02c","#d62728","#9467bd","#8c564b","#e377c2","#7f7f7f","#bcbd22","#17becf","#aec7e8","#ffbb78","#98df8a","#ff9896","#c5b0d5","#c49c94","#f7b6d2","#dbdb8d","#9edae5","#393b79"];function ql(n){let t=0;for(let e=0;e<n.length;e++)t=Math.imul(31,t)+n.charCodeAt(e)>>>0;return gn[t%gn.length]}var cg={axiom:"diamond",rule:"diamond",process:"square",decision:"square",pattern:"hexagon",overview:"hexagon",synthesis:"hexagon",entity:"circle",concept:"circle",index:"circle"},WS=["Axiom","Entity","Process","Pattern","Method","Concept","Rule","Overview","Decision","Synthesis"],ru=["wiki/templates/","wiki/graph/","wiki/compiled/","wiki/updates/","wiki/Meta/","pipeline/","schema/","ontology/","domains/","tools/","docs/"],XS=/^wiki\/graph\/\d{8}T\d{6}Z-graph\.md$/,qS=/^\|\s*([^|]+?)\s*\|\s*[A-Za-z]+→[A-Za-z]+\s*\|\s*([^|]+?)\s*\|\s*([^|]+?)\s*\|/,YS={showNodeLabels:!0,showEdgeLabels:!0,showArrows:!0,sidebarOpen:!1,semSidebarOpen:!1,hiddenTypes:[],linkDist:60,chargeStr:120,gravityStr:.03,labelFadeAt:.9,labelSize:10,nodeScale:1,edgeWidth:1.2,searchQuery:"",selectedDomains:[],embeddingEndpoint:"http://localhost:11434",embeddingModel:"nomic-embed-text",colorMode:"type",numClusters:6,mode3D:!1},Yl=class extends Ke.ItemView{constructor(e,i){super(e);this.nodes=[];this.edges=[];this.analytics=null;this.sim=null;this.showNodeLabels=!0;this.showEdgeLabels=!0;this.showArrows=!0;this.sidebarOpen=!1;this.semSidebarOpen=!1;this.searchResultsData=null;this.semSidebarEl=null;this.hiddenTypes=new Set;this.showOrphans=!1;this.selectedId=null;this.searchQuery="";this.selectedDomains=new Set;this._labelsUserSet=!1;this.embeddingEndpoint="http://localhost:11434";this.embeddingModel="nomic-embed-text";this.colorMode="type";this.numClusters=6;this.clusterMap=new Map;this.mode3D=!1;this.graph3D=null;this.bm25Index=null;this.embeddings=null;this.semanticIds=new Set;this.semSearchTimer=null;this.linkDist=60;this.chargeStr=120;this.gravityStr=.03;this.labelFadeAt=.9;this.labelSize=10;this.nodeScale=1;this.edgeWidth=1.2;this.savedTransform=null;this.savedCameraState=null;this.pendingRaf=null;this.isRefreshing=!1;this.selNodeEl=null;this.selEdgeLine=null;this.selEdgeLabel=null;this.selNodeLabel=null;this.focusNodeFn=null;this.svgEl=null;this.layerRowMap=new Map;this.neighborSet=new Set;this.refreshTimer=null;this.plugin=i}async loadSettings(){var s,r,a,o,l,c,h,d,u,p,g;let e=await this.plugin.loadData();if(!e)return;let i={...YS,...e};this.showNodeLabels=i.showNodeLabels,this.showEdgeLabels=i.showEdgeLabels,this.showArrows=i.showArrows,this.sidebarOpen=i.sidebarOpen,this.semSidebarOpen=(s=i.semSidebarOpen)!=null?s:!1,this.hiddenTypes=new Set(i.hiddenTypes),this.linkDist=i.linkDist,this.chargeStr=i.chargeStr,this.gravityStr=i.gravityStr,this.labelFadeAt=(r=i.labelFadeAt)!=null?r:.9,this.labelSize=(a=i.labelSize)!=null?a:10,this.nodeScale=(o=i.nodeScale)!=null?o:1,this.edgeWidth=(l=i.edgeWidth)!=null?l:1.2,this.searchQuery=i.searchQuery,this.selectedDomains=new Set((c=i.selectedDomains)!=null?c:[]),this.embeddingEndpoint=(h=i.embeddingEndpoint)!=null?h:"http://localhost:11434",this.embeddingModel=(d=i.embeddingModel)!=null?d:"nomic-embed-text",this.colorMode=(u=i.colorMode)!=null?u:"type",this.numClusters=(p=i.numClusters)!=null?p:6,this.mode3D=(g=i.mode3D)!=null?g:!1}saveSettings(){let e={showNodeLabels:this.showNodeLabels,showEdgeLabels:this.showEdgeLabels,showArrows:this.showArrows,sidebarOpen:this.sidebarOpen,semSidebarOpen:this.semSidebarOpen,hiddenTypes:[...this.hiddenTypes],linkDist:this.linkDist,chargeStr:this.chargeStr,gravityStr:this.gravityStr,labelFadeAt:this.labelFadeAt,labelSize:this.labelSize,nodeScale:this.nodeScale,edgeWidth:this.edgeWidth,searchQuery:this.searchQuery,selectedDomains:[...this.selectedDomains],embeddingEndpoint:this.embeddingEndpoint,embeddingModel:this.embeddingModel,colorMode:this.colorMode,numClusters:this.numClusters,mode3D:this.mode3D};this.plugin.saveData(e)}getViewType(){return sa}getDisplayText(){return"Semantic Graph"}getIcon(){return"git-fork"}async onOpen(){await this.loadSettings(),await this.buildGraph(),this.render(),this.buildSearchIndex(),this.loadEmbeddings();let e=i=>i.path.startsWith("wiki/")&&!ru.some(s=>i.path.includes(s));this.registerEvent(this.app.vault.on("modify",i=>{e(i)&&this.scheduleRefresh()})),this.registerEvent(this.app.vault.on("create",i=>{e(i)&&this.scheduleRefresh()})),this.registerEvent(this.app.vault.on("delete",i=>{e(i)&&this.scheduleRefresh()})),this.registerEvent(this.app.vault.on("rename",i=>{e(i)&&this.scheduleRefresh()}))}async onClose(){var e;(e=this.sim)==null||e.stop(),this.refreshTimer!==null&&(window.clearTimeout(this.refreshTimer),this.refreshTimer=null),this.isRefreshing=!1}captureZoom(){if(this.svgEl&&this.zoomBehavior){let e=Hs(this.svgEl);this.savedTransform={k:e.k,x:e.x,y:e.y}}}scheduleRefresh(){this.refreshTimer!==null&&window.clearTimeout(this.refreshTimer),this.refreshTimer=window.setTimeout(async()=>{if(this.refreshTimer=null,!this.isRefreshing){this.isRefreshing=!0;try{this.captureZoom(),await this.buildGraph(),this.render()}finally{this.isRefreshing=!1}}},1500)}async manualRefresh(){if(this.refreshTimer!==null&&(window.clearTimeout(this.refreshTimer),this.refreshTimer=null),!this.isRefreshing){this.isRefreshing=!0;try{this.captureZoom(),await this.buildGraph(),this.render()}finally{this.isRefreshing=!1}}}async buildGraph(){var h,d,u,p,g;let e=this.app.vault.getMarkdownFiles().filter(_=>XS.test(_.path)).sort((_,m)=>m.basename.localeCompare(_.basename));if(e.length===0){this.nodes=[],this.edges=[],this.analytics=this.computeAnalytics();return}let i=e[0];console.log(`[llm-wiki-graph] reading compiled graph: ${i.path}`);let r=(await this.app.vault.cachedRead(i)).split(`
`),a=new Map,o=this.app.vault.getMarkdownFiles().filter(_=>_.path.startsWith("wiki/")&&!ru.some(m=>_.path.includes(m)));for(let _ of o){let m=(d=(h=this.app.metadataCache.getFileCache(_))==null?void 0:h.frontmatter)!=null?d:{};a.set(_.basename,{id:_.basename,title:(u=m.title)!=null?u:_.basename,type:((p=m.type)!=null?p:"unknown").toLowerCase(),domain:(g=m.domain)!=null?g:""})}let l=[],c=!1;for(let _ of r){if(_.startsWith("## Edge List")){c=!0;continue}if(c&&_.startsWith("## ")){c=!1;continue}if(!c)continue;let m=qS.exec(_);if(!m)continue;let[,f,b,T]=m;f!=="Source"&&l.push({src:f.trim(),tgt:b.trim(),label:T.trim()})}this.nodes=Array.from(a.values()),this.edges=l.filter(_=>a.has(_.src)&&a.has(_.tgt)).map(_=>({source:_.src,target:_.tgt,label:_.label})),this.analytics=this.computeAnalytics()}async buildSearchIndex(){let e=new ou,i=this.app.vault.getMarkdownFiles().filter(s=>s.path.startsWith("wiki/")&&!ru.some(r=>s.path.includes(r)));await Promise.all(i.map(async s=>{let a=(await this.app.vault.cachedRead(s)).replace(/^---[\s\S]*?---\n?/,"");e.add(s.basename,s.basename+" "+a)})),e.finalize(),this.bm25Index=e}async loadEmbeddings(){let e=this.app.vault.getAbstractFileByPath("wiki/search/embeddings.json");if(e instanceof Ke.TFile)try{let i=await this.app.vault.read(e),s=JSON.parse(i);this.embeddings=new Map(Object.entries(s)),console.log(`[llm-wiki-graph] loaded ${this.embeddings.size} embeddings`),this.colorMode==="semantic"&&this.computeClusters(this.numClusters)}catch(i){console.warn("[llm-wiki-graph] could not load embeddings:",i)}}computeClusters(e){var h,d;this.clusterMap.clear();let i=this.embeddings;if(!i||i.size===0)return;let s=[...i.keys()],r=s.map(u=>i.get(u)),a=(d=(h=r[0])==null?void 0:h.length)!=null?d:0;if(a===0||s.length<e){s.forEach((u,p)=>this.clusterMap.set(u,p%e));return}let o=(u,p)=>{let g=0,_=0,m=0;for(let b=0;b<u.length;b++)g+=u[b]*p[b],_+=u[b]*u[b],m+=p[b]*p[b];return 1-(_===0||m===0?0:g/(Math.sqrt(_)*Math.sqrt(m)))},l=[r[Math.floor(Math.random()*r.length)]];for(;l.length<e;){let u=r.map(m=>Math.min(...l.map(f=>o(m,f)))),p=u.reduce((m,f)=>m+f,0),g=Math.random()*p,_=0;for(;_<u.length-1&&(g-=u[_],!(g<=0));_++);l.push(r[_])}let c=new Array(r.length).fill(0);for(let u=0;u<25;u++){let p=!1;for(let g=0;g<r.length;g++){let _=0,m=1/0;for(let f=0;f<e;f++){let b=o(r[g],l[f]);b<m&&(m=b,_=f)}c[g]!==_&&(c[g]=_,p=!0)}if(!p)break;for(let g=0;g<e;g++){let _=r.filter((f,b)=>c[b]===g);if(_.length===0)continue;let m=new Array(a).fill(0);for(let f of _)for(let b=0;b<a;b++)m[b]+=f[b]/_.length;l[g]=m}}s.forEach((u,p)=>this.clusterMap.set(u,c[p])),console.log(`[llm-wiki-graph] computed ${e} clusters over ${s.length} nodes`)}async runSemanticSearch(e){if(!this.embeddings||!e.trim())return[];let i;try{let r=await fetch(`${this.embeddingEndpoint}/api/embeddings`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({model:this.embeddingModel,prompt:e})});if(!r.ok)return[];i=(await r.json()).embedding}catch(r){return[]}let s=[];for(let[r,a]of this.embeddings)s.push([r,HS(i,a)]);return s.sort((r,a)=>a[1]-r[1]),s.slice(0,30).filter(([,r])=>r>=.45).map(([r,a])=>({id:r,score:a}))}computeAnalytics(){var f,b,T,x,M,S,w,y;let e=new Map;for(let E of this.edges){let I=E.source,P=E.target;e.set(I,((f=e.get(I))!=null?f:0)+1),e.set(P,((b=e.get(P))!=null?b:0)+1)}let i=new Map(this.nodes.map(E=>[E.id,E])),s=new Map;for(let E of this.edges){let I=E.source,P=E.target,N=(T=i.get(I))==null?void 0:T.domain,H=(x=i.get(P))==null?void 0:x.domain;N&&N===H&&s.set(I,((M=s.get(I))!=null?M:0)+1)}let r=this.nodes.length,a=this.edges.length,o=r>1?+(a/(r*(r-1))).toFixed(4):0,l=r>0?+([...e.values()].reduce((E,I)=>E+I,0)/r).toFixed(2):0,c=this.nodes.filter(E=>!e.has(E.id)).map(E=>E.id),h=new Map;for(let E of this.nodes)h.set(E.type,((S=h.get(E.type))!=null?S:0)+1);let d=WS.map(E=>{var I,P;return{name:E,color:(I=oi[E.toLowerCase()])!=null?I:"#888",count:(P=h.get(E.toLowerCase()))!=null?P:0}}),u=new Map;for(let E of this.edges)u.set(E.label,((w=u.get(E.label))!=null?w:0)+1);let p=[...u.entries()].sort((E,I)=>I[1]-E[1]).map(([E,I])=>({label:E,count:I})),g=this.nodes.filter(E=>e.has(E.id)).sort((E,I)=>{var P,N;return((P=e.get(I.id))!=null?P:0)-((N=e.get(E.id))!=null?N:0)}).slice(0,10).map(E=>({id:E.id,deg:e.get(E.id),type:E.type})),_=new Map;for(let E of this.nodes)E.domain&&_.set(E.domain,((y=_.get(E.domain))!=null?y:0)+1);let m=[..._.entries()].sort((E,I)=>I[1]-E[1]).map(([E,I])=>({name:E,count:I}));return{n:r,m:a,density:o,avgDeg:l,orphans:c.length,orphanIds:c,layers:d,edgeTypes:p,hubs:g,domains:m,degreeOf:e,intraDomainOut:s}}buildAdjacency(e){let i=new Map;for(let s of e)i.has(s.source.id)||i.set(s.source.id,new Set),i.has(s.target.id)||i.set(s.target.id,new Set),i.get(s.source.id).add(s.target.id),i.get(s.target.id).add(s.source.id);return i}recolorNodes(){if(!this.selNodeEl)return;let e=this.colorMode,i=this.clusterMap;this.selNodeEl.each(function(s){var a;let r;e==="semantic"&&i.has(s.id)?r=gn[i.get(s.id)%gn.length]:r=(a=oi[s.type])!=null?a:"#BAB0AC",Ie(this).selectAll(".llm-graph-node-shape").attr("fill",r)})}applyVisibility(e){var o,l,c,h,d;if(!this.selNodeEl)return;let i=this.selectedId,s=i?(o=e.get(i))!=null?o:new Set:null,r=this.selectedDomains.size>0;this.selNodeEl.style("opacity",u=>{var p,g;return this.hiddenTypes.has(u.type)||!r&&!this.showOrphans&&((g=(p=e.get(u.id))==null?void 0:p.size)!=null?g:0)===0?"0":i?u.id===i||s.has(u.id)?"1":"0.07":"1"}).style("display",u=>{var p,g;return this.hiddenTypes.has(u.type)||!r&&!this.showOrphans&&((g=(p=e.get(u.id))==null?void 0:p.size)!=null?g:0)===0?"none":null});let a=u=>{let p=u.source,g=u.target;return this.hiddenTypes.has(p.type)||this.hiddenTypes.has(g.type)?"0":i?p.id===i||g.id===i?"0.9":"0.04":"0.55"};(l=this.selEdgeLine)==null||l.style("opacity",a),(c=this.selEdgeLabel)==null||c.style("opacity",a).style("display",this.showEdgeLabels?null:"none"),(h=this.selNodeLabel)==null||h.style("display",this.showNodeLabels?null:"none"),(d=this.selEdgeLine)==null||d.attr("marker-end",this.showArrows?"url(#llm-arrow)":null)}render(){var et;(et=this.sim)==null||et.stop(),this.pendingRaf!==null&&(cancelAnimationFrame(this.pendingRaf),this.pendingRaf=null);let e=this.containerEl.children[1];e.empty(),e.addClass("llm-graph-container");let i=this.analytics,s=this.selectedDomains,r=s.size>0?this.nodes.filter(G=>s.has(G.domain)):this.nodes,a=new Set(r.map(G=>G.id)),o=s.size>0?this.edges.filter(G=>a.has(G.source)&&a.has(G.target)):this.edges,l=r.length;l>0&&(this.chargeStr=Math.min(800,Math.max(120,Math.round(l*2))),this.linkDist=Math.min(200,Math.max(50,Math.round(Math.sqrt(l)*8))));let c=e.createDiv({cls:"llm-graph-toolbar"}),h=e.createDiv({cls:"llm-graph-searchbar"}),d=h.createEl("input",{cls:"llm-graph-search",attr:{type:"text",placeholder:"Search nodes\u2026 (BM25 + semantic)"}}),u=h.createSpan({cls:"llm-graph-sem-indicator"});u.style.display="none";let p=h.createEl("button",{cls:"llm-graph-btn llm-graph-find-btn",text:"Find"}),g=h.createEl("button",{cls:"llm-graph-search-clear",text:"\xD7"});g.style.display="none",this.searchQuery&&(d.value=this.searchQuery,g.style.display="flex");let _=new Map(this.nodes.map(G=>[G.id,G])),m=()=>{var G,ot;d.value="",this.searchQuery="",this.semanticIds.clear(),this.searchResultsData=null,u.style.display="none",g.style.display="none",this.semSidebarEl&&this.buildSemanticSidebar(this.semSidebarEl),this.selNodeEl&&(this.selNodeEl.style("opacity",null).style("pointer-events",null),(G=this.selEdgeLine)==null||G.style("opacity",null),(ot=this.selEdgeLabel)==null||ot.style("opacity",null),this.saveSettings())},f=(G,ot)=>{var ft,yt;this.selNodeEl&&(this.selNodeEl.style("opacity",Z=>G.has(Z.id)?"1":ot.has(Z.id)?"0.5":"0.06").style("pointer-events",Z=>G.has(Z.id)||ot.has(Z.id)?null:"none"),(ft=this.selEdgeLine)==null||ft.style("opacity",Z=>{let it=Z.source.id,nt=Z.target.id;return G.has(it)||G.has(nt)?"0.6":ot.has(it)||ot.has(nt)?"0.25":"0.03"}),(yt=this.selEdgeLabel)==null||yt.style("opacity",Z=>{let it=Z.source.id,nt=Z.target.id;return G.has(it)||G.has(nt)?"1":ot.has(it)||ot.has(nt)?"0.5":"0"}))};d.addEventListener("input",()=>{this.searchQuery=d.value,this.saveSettings();let G=this.searchQuery.toLowerCase().trim();if(g.style.display=G?"flex":"none",!G){m();return}let ot=au(G),ft=new Set;for(let yt of this.nodes){let Z=0;yt.title.toLowerCase().includes(G)&&(Z+=10),yt.type.toLowerCase().includes(G)&&(Z+=5),yt.domain.toLowerCase().includes(G)&&(Z+=5),this.bm25Index&&ot.length>0&&(Z+=this.bm25Index.score(yt.id,ot)),Z>0&&ft.add(yt.id)}f(ft,this.semanticIds)}),d.addEventListener("keydown",G=>{G.key==="Enter"&&p.click()}),p.addEventListener("click",async()=>{let G=this.searchQuery.trim();if(!G){m();return}p.disabled=!0,p.textContent="\u2026",u.textContent="\u27F3",u.style.display="inline";let ot=G.toLowerCase(),ft=au(ot),yt=[];for(let Pt of this.nodes){let wt=0;Pt.title.toLowerCase().includes(ot)&&(wt+=10),Pt.type.toLowerCase().includes(ot)&&(wt+=5),Pt.domain.toLowerCase().includes(ot)&&(wt+=5),this.bm25Index&&ft.length>0&&(wt+=this.bm25Index.score(Pt.id,ft)),wt>0&&yt.push({id:Pt.id,score:wt})}let Z=await this.runSemanticSearch(G),it=new Set(yt.map(Pt=>Pt.id)),nt=new Set(Z.map(Pt=>Pt.id));this.semanticIds=nt,this.searchResultsData={bm25:yt,sem:Z},f(it,nt),this.semSidebarEl&&(this.semSidebarOpen=!0,this.semSidebarEl.addClass("llm-graph-sem-sidebar--open"),y.addClass("llm-graph-btn--active"),this.buildSemanticSidebar(this.semSidebarEl));let Rt=new Set([...it,...nt]).size;u.textContent=`${Rt}`,u.style.display=Rt>0?"inline":"none",p.disabled=!1,p.textContent="Find",this.saveSettings()}),g.addEventListener("click",()=>{m(),d.focus()});let b=(G,ot,ft=!1)=>{let yt=c.createEl("button",{cls:"llm-graph-btn"});return(0,Ke.setIcon)(yt,G),yt.createSpan({text:ot}),yt.setAttribute("aria-label",ot),ft&&yt.addClass("llm-graph-btn--active"),yt},T=b("rotate-ccw","Reset zoom"),x=b("refresh-cw","Refresh"),M=b("type","Nodes",this.showNodeLabels),S=b("minus","Edges",this.showEdgeLabels),w=b("arrow-right","Arrows",this.showArrows),y=b("cpu","Semantic",this.semSidebarOpen),E=b("layers","Clusters",this.colorMode==="semantic"),I=b("box","3D",this.mode3D),P=b("bar-chart-2","Analytics",this.sidebarOpen);c.createSpan({cls:"llm-graph-stats",text:`${i.n} nodes \xB7 ${i.m} edges \xB7 density ${i.density}`});let N=new Map,H=e.createDiv({cls:"llm-graph-layout"}),R=H.createDiv({cls:"llm-graph-sem-sidebar"});if(this.semSidebarOpen&&R.addClass("llm-graph-sem-sidebar--open"),this.semSidebarEl=R,this.mode3D){let G=H.createDiv({cls:"llm-graph-3d-canvas"}),ot=H.createDiv({cls:"llm-graph-sidebar"});this.sidebarOpen&&ot.addClass("llm-graph-sidebar--open"),this.buildSidebar(ot,i,N),this.buildSemanticSidebar(R),this.graph3D&&(this.graph3D.dispose(),this.graph3D=null);let ft=new Sl;this.graph3D=ft;let yt=ht=>{var At;return this.colorMode==="semantic"&&this.clusterMap.has(ht.id)?gn[this.clusterMap.get(ht.id)%gn.length]:(At=oi[ht.type])!=null?At:"#BAB0AC"},Z=this.selectedDomains.size>0?this.nodes.filter(ht=>this.selectedDomains.has(ht.domain)):this.nodes,it=new Set(Z.map(ht=>ht.id)),nt=i.degreeOf,Rt=Z.map(ht=>{var At;return{id:ht.id,title:ht.title,type:ht.type,domain:ht.domain,color:yt(ht),size:1+Math.log1p((At=nt.get(ht.id))!=null?At:0)*.4}}),Pt=this.edges.filter(ht=>{let At=typeof ht.source=="string"?ht.source:ht.source.id,zt=typeof ht.target=="string"?ht.target:ht.target.id;return it.has(At)&&it.has(zt)}).map(ht=>({source:typeof ht.source=="string"?ht.source:ht.source.id,target:typeof ht.target=="string"?ht.target:ht.target.id}));I.addEventListener("click",()=>{this.graph3D&&(this.savedCameraState=this.graph3D.getCameraState(),this.graph3D.dispose(),this.graph3D=null),this.mode3D=!1,this.saveSettings(),this.render()}),E.addEventListener("click",()=>{if(this.colorMode==="type"){if(!this.embeddings||this.embeddings.size===0)return;this.colorMode="semantic",this.computeClusters(this.numClusters)}else this.colorMode="type";if(E.toggleClass("llm-graph-btn--active",this.colorMode==="semantic"),this.saveSettings(),this.graph3D){let ht=new Map(Rt.map(Vt=>[Vt.id,Vt.color])),At=this.colorMode,zt=this.clusterMap;Rt.forEach(Vt=>{var jt;Vt.color=At==="semantic"&&zt.has(Vt.id)?gn[zt.get(Vt.id)%gn.length]:(jt=oi[Vt.type])!=null?jt:"#BAB0AC",ht.set(Vt.id,Vt.color)}),this.graph3D.updateColors(ht)}}),requestAnimationFrame(()=>{ft.init(G,{onNodeClick:ht=>this.app.workspace.openLinkText(ht,"",!1),onClose:()=>{},linkDist:this.linkDist,chargeStr:this.chargeStr,gravityStr:this.gravityStr,nodeScale:this.nodeScale,edgeWidth:this.edgeWidth,labelSize:this.labelSize,labelFadeAt:this.labelFadeAt}),ft.setData(Rt,Pt),this.savedCameraState&&(ft.setCameraState(this.savedCameraState),this.savedCameraState=null)}),ot.querySelectorAll("[data-physics]").forEach(ht=>{ht.addEventListener("input",()=>{let At=+ht.value,zt=ht.dataset.physics,Vt=zt==="gravityStr"||zt==="labelFadeAt"||zt==="nodeScale"||zt==="edgeWidth",jt=ht.nextElementSibling;jt&&(jt.textContent=Vt?At.toFixed(2):String(At)),zt==="linkDist"?(this.linkDist=At,ft.updateLinkDist(At)):zt==="chargeStr"?(this.chargeStr=At,ft.updateCharge(At)):zt==="gravityStr"?(this.gravityStr=At,ft.updateGravity(At)):zt==="nodeScale"?(this.nodeScale=At,ft.updateNodeScale(At)):zt==="edgeWidth"?(this.edgeWidth=At,ft.updateEdgeWidth(At)):zt==="labelSize"?(this.labelSize=At,ft.updateLabelSize(At)):zt==="labelFadeAt"&&(this.labelFadeAt=At,ft.updateLabelFade(At)),this.saveSettings()})});let wt=c.querySelector('[aria-label="Reset zoom"]'),te=c.querySelector('[aria-label="Refresh"]');wt==null||wt.addEventListener("click",()=>{var ht,At;(ht=ft.camera)==null||ht.position.set(0,0,600),(At=ft.controls)==null||At.reset()}),te==null||te.addEventListener("click",()=>this.render()),P.addEventListener("click",()=>{this.sidebarOpen=!this.sidebarOpen,P.toggleClass("llm-graph-btn--active",this.sidebarOpen),ot.toggleClass("llm-graph-sidebar--open",this.sidebarOpen),this.saveSettings()}),y.addEventListener("click",()=>{this.semSidebarOpen=!this.semSidebarOpen,y.toggleClass("llm-graph-btn--active",this.semSidebarOpen),R.toggleClass("llm-graph-sem-sidebar--open",this.semSidebarOpen),this.saveSettings()});return}let L=H.createSvg("svg",{cls:"llm-graph-svg"});this.svgEl=L;let U=H.createDiv({cls:"llm-graph-sidebar"});this.sidebarOpen&&U.addClass("llm-graph-sidebar--open"),this.buildSidebar(U,i,N),this.buildSemanticSidebar(R);let D=Ie(L),F=D.append("g");if(this.zoomBehavior=su().scaleExtent([.05,10]).on("zoom",G=>{F.attr("transform",G.transform);let ot=G.transform.k,ft=this.labelSize/ot,yt=this.labelSize*.85/ot,Z=this.labelFadeAt,it=this.labelFadeAt*.45,nt=Math.max(0,Math.min(1,(ot-it)/(Z-it)));this.showNodeLabels&&F.selectAll(".llm-graph-node-label").style("font-size",`${ft}px`).style("opacity",String(nt)),this.showEdgeLabels&&F.selectAll(".llm-graph-edge-label").style("font-size",`${yt}px`).style("opacity",String(nt))}),D.call(this.zoomBehavior),this.savedTransform&&this.selectedDomains.size===0){let{k:G,x:ot,y:ft}=this.savedTransform;D.call(this.zoomBehavior.transform,Pn.translate(ot,ft).scale(G))}D.on("click",G=>{G.target===L&&(this.selectedId=null,this.applyVisibility(N))}),T.addEventListener("click",()=>{this.savedTransform=null,D.transition().duration(400).call(this.zoomBehavior.transform,Pn)}),x.addEventListener("click",()=>this.manualRefresh()),D.append("defs").append("marker").attr("id","llm-arrow").attr("viewBox","0 -3 6 6").attr("refX",10).attr("refY",0).attr("markerWidth",6).attr("markerHeight",6).attr("markerUnits","strokeWidth").attr("orient","auto").append("path").attr("d","M0,-3L6,0L0,3").attr("fill","var(--text-faint)");let W=new Map(r.map(G=>[G.id,G])),$=o.map(G=>({...G,source:W.get(G.source),target:W.get(G.target)})).filter(G=>G.source&&G.target);this.pendingRaf=requestAnimationFrame(()=>{this.pendingRaf=null;let G=L.clientWidth||900,ot=L.clientHeight||700,ft=kh($).id(at=>at.id).distance(this.linkDist).strength(at=>{var lt,Et;return 1/Math.sqrt(Math.max(1,(lt=i.degreeOf.get(at.source.id))!=null?lt:1)*Math.max(1,(Et=i.degreeOf.get(at.target.id))!=null?Et:1))}),yt=Gh().strength(-this.chargeStr),Z=Hh(G/2).strength(this.gravityStr),it=Wh(ot/2).strength(this.gravityStr),nt=Math.max(15,Math.sqrt(l)*2);this.sim=Vh(r).force("link",ft).force("charge",yt).force("gx",Z).force("gy",it).force("collide",zh(nt));let Rt=this.buildAdjacency($);N.clear();for(let[at,lt]of Rt)N.set(at,lt);let Pt=F.append("g").selectAll("line").data($).join("line").attr("class","llm-graph-edge").attr("stroke-width",this.edgeWidth).style("stroke",at=>{let lt=at.source.domain||at.target.domain;return lt?ql(lt):"#888"}).style("stroke-opacity",at=>{let lt=at.source.domain,Et=at.target.domain;return lt&&Et&&lt===Et?"0.7":"0.3"}).attr("marker-end","url(#llm-arrow)");this.selEdgeLine=Pt;let wt=F.append("g").selectAll("text").data($).join("text").attr("class","llm-graph-edge-label").attr("pointer-events","none").text(at=>at.label);this.selEdgeLabel=wt;let te=F.append("g").selectAll("g").data(r).join("g").attr("class","llm-graph-node").call(Xh().on("start",(at,lt)=>{var Et;at.active||(Et=this.sim)==null||Et.alphaTarget(.3).restart(),lt.fx=lt.x,lt.fy=lt.y}).on("drag",(at,lt)=>{lt.fx=at.x,lt.fy=at.y}).on("end",(at,lt)=>{var Et;at.active||(Et=this.sim)==null||Et.alphaTarget(0),lt.fx=null,lt.fy=null})).on("click",(at,lt)=>{at.stopPropagation(),this.selectedId===lt.id?this.app.workspace.openLinkText(lt.id,"",!1):(this.selectedId=lt.id,this.applyVisibility(N))});this.selNodeEl=te;let ht=this.colorMode,At=this.clusterMap,zt=this.nodeScale;te.each(function(at){var X,K,rt,ct;let lt=Ie(this),Et;ht==="semantic"&&At.has(at.id)?Et=gn[At.get(at.id)%gn.length]:Et=(X=oi[at.type])!=null?X:"#BAB0AC";let Kt=(K=cg[at.type])!=null?K:"circle",O="llm-graph-node-shape",ae=(rt=i.intraDomainOut.get(at.id))!=null?rt:0,Ht=(ct=i.degreeOf.get(at.id))!=null?ct:0,C=ae>0?ae:Ht,v=1+Math.log1p(C)*(ae>0?.5:.25),k=lt.append("g").attr("class","llm-node-shape-wrapper").attr("data-base-scale",v).attr("transform",`scale(${v*zt})`);Kt==="diamond"?k.append("rect").attr("class",O).attr("width",11).attr("height",11).attr("x",-5.5).attr("y",-5.5).attr("transform","rotate(45)").attr("rx",1.5).attr("fill",Et):Kt==="square"?k.append("rect").attr("class",O).attr("width",13).attr("height",13).attr("x",-6.5).attr("y",-6.5).attr("rx",2).attr("fill",Et):Kt==="hexagon"?k.append("polygon").attr("class",O).attr("points","0,-8 6.9,-4 6.9,4 0,8 -6.9,4 -6.9,-4").attr("fill",Et):k.append("circle").attr("class",O).attr("r",7).attr("fill",Et)});let Vt=te.append("text").attr("class","llm-graph-node-label").attr("dy","0.35em").attr("x",13).attr("pointer-events","none").text(at=>at.title.length>26?at.title.slice(0,24)+"\u2026":at.title).attr("display",this.showNodeLabels?null:"none");this.selNodeLabel=Vt;let jt=e.createDiv({cls:"llm-graph-tooltip"});te.on("mouseenter",(at,lt)=>{var O,ae,Ht;let Et=(O=i.degreeOf.get(lt.id))!=null?O:0,Kt=(ae=N.get(lt.id))!=null?ae:new Set;jt.innerHTML=`<strong>${lt.title}</strong><br><span class="llm-tp-type" style="color:${(Ht=oi[lt.type])!=null?Ht:"#888"}">${lt.type}</span>`+(lt.domain?`<br><em>${lt.domain}</em>`:"")+`<br><small>degree: ${Et} \xB7 neighbors: ${Kt.size}</small><br><small class="llm-tp-hint">click to select \xB7 click again to open</small>`,jt.style.display="block"}).on("mousemove",at=>{let lt=e.getBoundingClientRect();jt.style.left=at.clientX-lt.left+14+"px",jt.style.top=at.clientY-lt.top+14+"px"}).on("mouseleave",()=>{jt.style.display="none"}),this.focusNodeFn=at=>{let lt=W.get(at);if(!lt||lt.x==null||lt.y==null)return;this.selectedId=at,this.applyVisibility(N);let Et=L.clientWidth,Kt=L.clientHeight;D.transition().duration(600).call(this.zoomBehavior.transform,Pn.translate(Et/2,Kt/2).scale(1.8).translate(-lt.x,-lt.y)),jt.style.display="none"},U.querySelectorAll("[data-node-id]").forEach(at=>{at.addEventListener("click",()=>{var lt;return(lt=this.focusNodeFn)==null?void 0:lt.call(this,at.dataset.nodeId)})}),this.sim.on("tick",()=>{Pt.attr("x1",at=>at.source.x).attr("y1",at=>at.source.y).attr("x2",at=>at.target.x).attr("y2",at=>at.target.y),wt.attr("x",at=>(at.source.x+at.target.x)/2).attr("y",at=>(at.source.y+at.target.y)/2),te.attr("transform",at=>`translate(${at.x},${at.y})`)}),(this.selectedDomains.size>0||!this.savedTransform)&&this.sim.on("end",()=>{let at=r.filter(Q=>Q.x!=null&&Q.y!=null);if(at.length===0)return;let lt=at.map(Q=>Q.x),Et=at.map(Q=>Q.y),Kt=Math.min(...lt),O=Math.max(...lt),ae=Math.min(...Et),Ht=Math.max(...Et),C=L.clientWidth||900,v=L.clientHeight||700,k=60,X=(C-k*2)/Math.max(O-Kt,1),K=(v-k*2)/Math.max(Ht-ae,1),rt=Math.min(X,K,3),ct=(Kt+O)/2,j=(ae+Ht)/2;D.transition().duration(500).call(this.zoomBehavior.transform,Pn.translate(C/2,v/2).scale(rt).translate(-ct,-j))}),U.querySelectorAll("[data-physics]").forEach(at=>{at.addEventListener("input",()=>{var ae;let lt=+at.value,Et=at.dataset.physics,Kt=at.nextElementSibling,O=Et==="gravityStr"||Et==="labelFadeAt"||Et==="nodeScale"||Et==="edgeWidth";if(Kt&&(Kt.textContent=O?lt.toFixed(2):String(lt)),Et==="linkDist")this.linkDist=lt,this.sim.force("link").distance(lt);else if(Et==="chargeStr")this.chargeStr=lt,this.sim.force("charge").strength(-lt);else if(Et==="gravityStr")this.gravityStr=lt,this.sim.force("gx").strength(lt),this.sim.force("gy").strength(lt);else if(Et==="labelFadeAt"||Et==="labelSize"){Et==="labelFadeAt"&&(this.labelFadeAt=lt),Et==="labelSize"&&(this.labelSize=lt);let Ht=Hs(L).k,C=this.labelFadeAt,v=this.labelFadeAt*.45,k=String(Math.max(0,Math.min(1,(Ht-v)/(C-v))));this.showNodeLabels&&F.selectAll(".llm-graph-node-label").style("font-size",`${this.labelSize/Ht}px`).style("opacity",k),this.showEdgeLabels&&F.selectAll(".llm-graph-edge-label").style("font-size",`${this.labelSize*.85/Ht}px`).style("opacity",k),this.saveSettings();return}else if(Et==="nodeScale"){this.nodeScale=lt,F.selectAll(".llm-node-shape-wrapper").attr("transform",function(){var C;return`scale(${+((C=this.getAttribute("data-base-scale"))!=null?C:1)*lt})`}),this.saveSettings();return}else if(Et==="edgeWidth"){this.edgeWidth=lt,(ae=this.selEdgeLine)==null||ae.attr("stroke-width",lt),this.saveSettings();return}this.sim.alpha(.4).restart(),this.saveSettings()})}),this.applyVisibility(N)}),M.addEventListener("click",()=>{var G;this._labelsUserSet=!0,this.showNodeLabels=!this.showNodeLabels,M.toggleClass("llm-graph-btn--active",this.showNodeLabels),(G=this.selNodeLabel)==null||G.attr("display",this.showNodeLabels?null:"none"),this.saveSettings()}),S.addEventListener("click",()=>{var G;this.showEdgeLabels=!this.showEdgeLabels,S.toggleClass("llm-graph-btn--active",this.showEdgeLabels),(G=this.selEdgeLabel)==null||G.attr("display",this.showEdgeLabels?null:"none"),this.saveSettings()}),w.addEventListener("click",()=>{var G;this.showArrows=!this.showArrows,w.toggleClass("llm-graph-btn--active",this.showArrows),(G=this.selEdgeLine)==null||G.attr("marker-end",this.showArrows?"url(#llm-arrow)":null),this.saveSettings()}),P.addEventListener("click",()=>{this.sidebarOpen=!this.sidebarOpen,P.toggleClass("llm-graph-btn--active",this.sidebarOpen),U.toggleClass("llm-graph-sidebar--open",this.sidebarOpen),this.saveSettings()}),y.addEventListener("click",()=>{this.semSidebarOpen=!this.semSidebarOpen,y.toggleClass("llm-graph-btn--active",this.semSidebarOpen),R.toggleClass("llm-graph-sem-sidebar--open",this.semSidebarOpen),this.saveSettings()}),E.addEventListener("click",()=>{if(this.colorMode==="type"){if(!this.embeddings||this.embeddings.size===0){new(require("obsidian")).Notice("Generate embeddings first (Semantic sidebar)");return}this.colorMode="semantic",this.computeClusters(this.numClusters)}else this.colorMode="type";E.toggleClass("llm-graph-btn--active",this.colorMode==="semantic"),this.saveSettings(),this.recolorNodes()}),I.addEventListener("click",()=>{this.graph3D?(this.savedCameraState=this.graph3D.getCameraState(),this.graph3D.dispose(),this.graph3D=null):this.captureZoom(),this.mode3D=!this.mode3D,this.saveSettings(),this.render()})}async generateEmbeddings(e){let i=this.app.vault.getMarkdownFiles().filter(d=>d.path.startsWith("wiki/")&&!["wiki/updates/","wiki/compiled/","wiki/graph/","wiki/synthesis/","wiki/decisions/"].some(u=>d.path.includes(u))),s={},r=i.length,a=0,o=0;for(let d of i){e.textContent=`${a}/${r} embedded${o?` (${o} failed)`:""}\u2026`;try{let p=(await this.app.vault.cachedRead(d)).replace(/^---[\s\S]*?---\n?/,"").slice(0,1e3),g=d.basename+". "+p,_=await fetch(`${this.embeddingEndpoint}/api/embeddings`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({model:this.embeddingModel,prompt:g})});if(!_.ok){o++;continue}let m=(await _.json()).embedding;m!=null&&m.length&&(s[d.basename]=m)}catch(u){o++}a++}e.textContent=`Done: ${a} embedded, ${o} failed. Saving\u2026`;let l="wiki/search/embeddings.json",c=JSON.stringify(s),h=this.app.vault.getAbstractFileByPath(l);if(h instanceof Ke.TFile)await this.app.vault.modify(h,c);else{try{await this.app.vault.createFolder("wiki/search")}catch(d){}await this.app.vault.create(l,c)}e.textContent=`\u2713 ${Object.keys(s).length} embeddings saved.`}buildSemanticSidebar(e){var h,d,u,p;e.empty();let i=this.embeddings,s=this.nodes,r=new Map(s.map(g=>[g.id,g])),a=g=>{let _=e.createDiv({cls:"llm-sb-section"});return _.createDiv({cls:"llm-sb-title",text:g}),_};if(this.searchResultsData){let{bm25:g,sem:_}=this.searchResultsData,m=new Map;for(let{id:x,score:M}of g)m.set(x,{bm25:M,sem:0});for(let{id:x,score:M}of _){let S=(h=m.get(x))!=null?h:{bm25:0,sem:0};m.set(x,{...S,sem:M})}let f=[...m.entries()].sort((x,M)=>{let S=x[1].bm25>0?x[1].bm25*2+x[1].sem:x[1].sem;return(M[1].bm25>0?M[1].bm25*2+M[1].sem:M[1].sem)-S}),b=a(`Search Results (${f.length})`);_.length>0&&((d=b.querySelector(".llm-sb-title"))==null||d.appendChild(createSpan({cls:"llm-res-sem-tag",text:"~ semantic"})));let T=b.createEl("button",{cls:"llm-graph-btn",text:"Clear search"});T.style.cssText="font-size:10px;padding:2px 8px;margin:4px 0 8px;",T.addEventListener("click",()=>{var x,M;this.searchResultsData=null,this.semanticIds.clear(),this.selNodeEl&&(this.selNodeEl.style("opacity",null).style("pointer-events",null),(x=this.selEdgeLine)==null||x.style("opacity",null),(M=this.selEdgeLabel)==null||M.style("opacity",null)),this.buildSemanticSidebar(e)}),f.length===0&&b.createDiv({cls:"llm-sb-muted",text:"No results found."});for(let[x,{bm25:M,sem:S}]of f){let w=r.get(x);if(!w)continue;let y=b.createDiv({cls:"llm-res-row"+(M>0?" llm-res-row--bm25":" llm-res-row--sem")}),E=y.createSpan({cls:"llm-res-score"});E.textContent=S>0?S.toFixed(2):"\u2014",E.title=`BM25: ${M.toFixed(1)}  semantic: ${S.toFixed(2)}`;let I=y.createSpan({cls:"llm-res-domain",text:w.domain||w.type});I.style.background=w.domain?ql(w.domain)+"33":"",I.style.color=w.domain?ql(w.domain):"",y.createEl("a",{cls:"llm-res-title",text:w.title}).addEventListener("click",()=>{this.app.workspace.openLinkText(x,"",!1);let N=w;if(N.x!=null&&N.y!=null&&this.zoomBehavior&&this.svgEl){let{width:H,height:R}=this.svgEl.getBoundingClientRect(),L=Pn.translate(H/2-N.x,R/2-N.y);Ie(this.svgEl).transition().duration(400).call(this.zoomBehavior.transform,L)}})}}if(!i||i.size===0)a("Semantic Metrics").createDiv({cls:"llm-sb-muted",text:"No embeddings found. Generate them below (requires Ollama running). Configure endpoint and model in plugin Settings."});else{let g=(D,F)=>{let W=0,$=0,et=0;for(let G=0;G<D.length;G++)W+=D[G]*F[G],$+=D[G]*D[G],et+=F[G]*F[G];return $===0||et===0?0:W/(Math.sqrt($)*Math.sqrt(et))},_=new Map;for(let D of s)!D.domain||!i.has(D.id)||(_.has(D.domain)||_.set(D.domain,[]),_.get(D.domain).push(D));let m=new Map,f=(p=(u=i.values().next().value)==null?void 0:u.length)!=null?p:0;for(let[D,F]of _){if(F.length<2||f===0)continue;let W=new Array(f).fill(0);for(let ot of F){let ft=i.get(ot.id);for(let yt=0;yt<f;yt++)W[yt]+=ft[yt]/F.length}let $=F.map(ot=>({id:ot.id,sim:g(i.get(ot.id),W)})),et=$.reduce((ot,ft)=>ot+ft.sim,0)/$.length,G=[...$].sort((ot,ft)=>ot.sim-ft.sim).slice(0,5);m.set(D,{cohesion:et,centroid:W,outliers:G})}let b=a("Domain Cohesion");b.createDiv({cls:"llm-sb-muted",text:"avg cos-sim to domain centroid (1.0 = perfectly focused)"});let T=[...m.entries()].sort((D,F)=>F[1].cohesion-D[1].cohesion),x=Math.max(...T.map(([,D])=>D.cohesion),.01);for(let[D,{cohesion:F}]of T){let W=b.createDiv({cls:"llm-sb-bar-row"});W.createSpan({cls:"llm-sb-bar-name",text:D});let $=W.createDiv({cls:"llm-sb-track"}),et=Math.max(F/x*100,2),G=Math.round(F*120);$.createDiv({cls:"llm-sb-fill",attr:{style:`width:${et}%;background:hsl(${G},60%,45%)`}}),W.createSpan({cls:"llm-sb-bar-cnt",text:F.toFixed(2)})}let M=a("Semantic Outliers");M.createDiv({cls:"llm-sb-muted",text:"nodes farthest from their domain centroid"});for(let[D,{outliers:F}]of T.slice(0,8)){M.createDiv({cls:"llm-sb-outlier-domain"}).createSpan({cls:"llm-sb-bar-name",text:D});for(let $ of F.slice(0,3)){let et=M.createDiv({cls:"llm-sb-outlier-row"});et.createSpan({cls:"llm-sb-outlier-sim",text:$.sim.toFixed(2)});let G=et.createEl("a",{cls:"llm-sb-outlier-name",text:$.id.length>28?$.id.slice(0,26)+"\u2026":$.id});G.setAttribute("title",$.id),G.addEventListener("click",()=>this.app.workspace.openLinkText($.id,"",!1))}}let S=a("Missing Links");S.createDiv({cls:"llm-sb-muted",text:"similar nodes without an edge (cos-sim > 0.80)"});let w=new Set(this.edges.map(D=>`${D.source}|${D.target}`)),y=s.filter(D=>i.has(D.id)).map(D=>D.id),E=[],I=.8;if(y.length<=300){for(let D=0;D<y.length&&E.length<200;D++)for(let F=D+1;F<y.length;F++){if(w.has(`${y[D]}|${y[F]}`)||w.has(`${y[F]}|${y[D]}`))continue;let W=g(i.get(y[D]),i.get(y[F]));W>=I&&E.push({a:y[D],b:y[F],sim:W})}E.sort((D,F)=>F.sim-D.sim)}else S.createDiv({cls:"llm-sb-muted",text:`${y.length} nodes \u2014 too many for full scan (max 300)`});for(let{a:D,b:F,sim:W}of E.slice(0,15)){let $=S.createDiv({cls:"llm-sb-miss-row"});$.createSpan({cls:"llm-sb-outlier-sim",text:W.toFixed(2)}),$.createEl("a",{cls:"llm-sb-miss-name",text:D.length>18?D.slice(0,16)+"\u2026":D}).addEventListener("click",()=>this.app.workspace.openLinkText(D,"",!1)),$.createSpan({text:" \u2194 "}),$.createEl("a",{cls:"llm-sb-miss-name",text:F.length>18?F.slice(0,16)+"\u2026":F}).addEventListener("click",()=>this.app.workspace.openLinkText(F,"",!1))}E.length===0&&y.length<=300&&S.createDiv({cls:"llm-sb-muted",text:"None found above threshold."});let P=a("Near Duplicates");P.createDiv({cls:"llm-sb-muted",text:"cos-sim > 0.93 \u2014 potential redundancy"});let N=E.filter(D=>D.sim>=.93);N.length===0&&P.createDiv({cls:"llm-sb-muted",text:"None found."});for(let{a:D,b:F,sim:W}of N.slice(0,10)){let $=P.createDiv({cls:"llm-sb-miss-row"});$.createSpan({cls:"llm-sb-outlier-sim",text:W.toFixed(2)}),$.createEl("a",{cls:"llm-sb-miss-name",text:D.length>18?D.slice(0,16)+"\u2026":D}).addEventListener("click",()=>this.app.workspace.openLinkText(D,"",!1)),$.createSpan({text:" \u2194 "}),$.createEl("a",{cls:"llm-sb-miss-name",text:F.length>18?F.slice(0,16)+"\u2026":F}).addEventListener("click",()=>this.app.workspace.openLinkText(F,"",!1))}let R=a("Semantic Clusters").createDiv({cls:"llm-sb-slider-row"});R.createSpan({cls:"llm-sb-slider-lbl",text:"k clusters"});let L=R.createEl("input",{type:"range"});L.addClass("llm-sb-slider"),L.min="2",L.max="20",L.step="1",L.value=String(this.numClusters);let U=R.createSpan({cls:"llm-sb-slider-val",text:String(this.numClusters)});L.addEventListener("input",()=>{var F;let D=+L.value;if(U.textContent=String(D),this.numClusters=D,this.saveSettings(),this.colorMode==="semantic"&&(this.computeClusters(D),this.recolorNodes(),this.graph3D)){let W=this.colorMode,$=this.clusterMap,et=new Map;for(let G of this.graph3D.nodeIds)et.set(G,W==="semantic"&&$.has(G)?gn[$.get(G)%gn.length]:(F=oi[this.graph3D.getNodeType(G)])!=null?F:"#BAB0AC");this.graph3D.updateColors(et)}})}let o=a(i&&i.size>0?`Regenerate Embeddings (${i.size} stored)`:"Generate Embeddings");o.createDiv({cls:"llm-sb-muted",text:`Endpoint: ${this.embeddingEndpoint} \xB7 Model: ${this.embeddingModel}`});let l=o.createDiv({cls:"llm-sem-gen-progress"}),c=o.createEl("button",{cls:"llm-graph-btn llm-sem-gen-btn",text:i&&i.size>0?"Regenerate":"Generate Embeddings"});c.addEventListener("click",async()=>{c.disabled=!0,c.textContent="Generating\u2026",await this.generateEmbeddings(l),await this.loadEmbeddings(),this.buildSemanticSidebar(e)})}buildSidebar(e,i,s){let r=w=>{let y=e.createDiv({cls:"llm-sb-section"});return y.createDiv({cls:"llm-sb-title",text:w}),y},a=r("Physics"),o=(w,y,E,I,P,N)=>{let H=a.createDiv({cls:"llm-sb-slider-row"});H.createSpan({cls:"llm-sb-slider-lbl",text:w});let R=H.createEl("input",{type:"range"});R.addClass("llm-sb-slider"),R.min=String(E),R.max=String(I),R.value=String(P),R.step=String(N),R.dataset.physics=y;let L=N<1?P.toFixed(2):String(P);H.createSpan({cls:"llm-sb-slider-val",text:L})};o("Link dist","linkDist",20,200,this.linkDist,5),o("Repulsion","chargeStr",30,800,this.chargeStr,10),o("Gravity","gravityStr",0,.3,this.gravityStr,.01),o("Node size","nodeScale",.3,4,this.nodeScale,.1),o("Edge width","edgeWidth",.5,8,this.edgeWidth,.5),o("Font size","labelSize",6,24,this.labelSize,1),o("Labels fade","labelFadeAt",.05,3,this.labelFadeAt,.05);let l=r("Graph Health"),c=[{lbl:"Nodes",val:i.n,warn:!1},{lbl:"Edges",val:i.m,warn:!1},{lbl:"Density",val:i.density,warn:i.density<.01},{lbl:"Avg deg",val:i.avgDeg,warn:i.avgDeg<1},{lbl:"Orphans",val:i.orphans,warn:i.orphans>0}],h=l.createDiv({cls:"llm-sb-cards"});for(let w of c){let y=h.createDiv({cls:"llm-sb-card"+(w.warn?" llm-sb-card--warn":"")});y.createDiv({cls:"llm-sb-card-val",text:String(w.val)}),y.createDiv({cls:"llm-sb-card-lbl",text:w.lbl})}if(i.orphans>0){let y=l.createDiv({cls:"llm-sb-orphan-row"}).createEl("button",{cls:"llm-graph-btn llm-graph-btn--xs"+(this.showOrphans?" llm-graph-btn--active":""),text:this.showOrphans?`Hide ${i.orphans} orphans`:`Show ${i.orphans} orphans`});y.addEventListener("click",()=>{this.showOrphans=!this.showOrphans,y.textContent=this.showOrphans?`Hide ${i.orphans} orphans`:`Show ${i.orphans} orphans`,y.toggleClass("llm-graph-btn--active",this.showOrphans),this.applyVisibility(s)})}let d=r("Epistemic Layers"),u=(w,y)=>{let E=`fill="${y}"`;switch(w){case"diamond":return`<svg width="12" height="12" viewBox="0 0 10 10"><rect ${E} x="1.5" y="1.5" width="7" height="7" rx="1" transform="rotate(45 5 5)"/></svg>`;case"square":return`<svg width="12" height="12" viewBox="0 0 10 10"><rect ${E} x="1.5" y="1.5" width="7" height="7" rx="1.5"/></svg>`;case"hexagon":return`<svg width="12" height="12" viewBox="0 0 10 10"><polygon ${E} points="5,1 8.7,3 8.7,7 5,9 1.3,7 1.3,3"/></svg>`;default:return`<svg width="12" height="12" viewBox="0 0 10 10"><circle ${E} cx="5" cy="5" r="4"/></svg>`}},p=d.createDiv({cls:"llm-sb-layer-ctrl"}),g=p.createEl("button",{cls:"llm-graph-btn llm-graph-btn--xs",text:"All"}),_=p.createEl("button",{cls:"llm-graph-btn llm-graph-btn--xs",text:"None"});this.layerRowMap.clear();let m=Math.max(...i.layers.map(w=>w.count),1);i.layers.forEach((w,y)=>{var R;let E=w.name.toLowerCase(),I=w.color,P=(R=cg[E])!=null?R:"circle",N=d.createDiv({cls:"llm-sb-layer-row"});w.count>0&&N.addClass("llm-sb-layer-clickable"),this.hiddenTypes.has(E)&&N.addClass("llm-sb-layer-row--off"),this.layerRowMap.set(E,N),N.createSpan({cls:"llm-sb-layer-num",text:String(y+1)}),N.innerHTML+=u(P,I),N.createSpan({cls:"llm-sb-layer-name",text:w.name}).style.color=I;let H=N.createDiv({cls:"llm-sb-track"});if(w.count>0){let L=H.createDiv({cls:"llm-sb-fill"});L.style.cssText=`width:${Math.max(w.count/m*100,4)}%;background:${I}`}else H.createSpan({cls:"llm-sb-gap",text:"gap"});N.createSpan({cls:"llm-sb-layer-cnt",text:w.count?String(w.count):"\u2014"}).style.color=w.count?I:"var(--text-faint)",w.count>0&&N.addEventListener("click",()=>{this.hiddenTypes.has(E)?this.hiddenTypes.delete(E):this.hiddenTypes.add(E),this.layerRowMap.forEach((L,U)=>L.toggleClass("llm-sb-layer-row--off",this.hiddenTypes.has(U))),this.applyVisibility(s),this.saveSettings()})}),g.addEventListener("click",()=>{this.hiddenTypes.clear(),this.layerRowMap.forEach(w=>w.removeClass("llm-sb-layer-row--off")),this.applyVisibility(s),this.saveSettings()}),_.addEventListener("click",()=>{i.layers.forEach(w=>{w.count>0&&this.hiddenTypes.add(w.name.toLowerCase())}),this.layerRowMap.forEach((w,y)=>w.toggleClass("llm-sb-layer-row--off",this.hiddenTypes.has(y))),this.applyVisibility(s),this.saveSettings()});let f=r("Edge Types"),b=Math.max(...i.edgeTypes.map(w=>w.count),1);for(let w of i.edgeTypes){let y=f.createDiv({cls:"llm-sb-bar-row"});y.createSpan({cls:"llm-sb-bar-name",text:w.label});let I=y.createDiv({cls:"llm-sb-track"}).createDiv({cls:"llm-sb-fill llm-sb-fill--blue"});I.style.width=`${w.count/b*100}%`,y.createSpan({cls:"llm-sb-bar-cnt",text:String(w.count)})}let T=r("Top Hubs \xB7 by degree"),x=Math.max(...i.hubs.map(w=>w.deg),1);i.hubs.forEach((w,y)=>{var N,H;let E=T.createDiv({cls:"llm-sb-hub-row"});E.dataset.nodeId=w.id,E.createSpan({cls:"llm-sb-hub-rank",text:String(y+1)});let I=E.createSpan({cls:"llm-sb-hub-dot"});I.style.background=(N=oi[w.type])!=null?N:"#888",E.createSpan({cls:"llm-sb-hub-name",text:w.id.length>20?w.id.slice(0,18)+"\u2026":w.id}).setAttribute("title",w.id),E.createDiv({cls:"llm-sb-hub-bar"}).createDiv({cls:"llm-sb-fill",style:`width:${w.deg/x*100}%;background:${(H=oi[w.type])!=null?H:"#888"}`}),E.createSpan({cls:"llm-sb-hub-deg",text:String(w.deg)})});let M=r("Domain Coverage");if(this.selectedDomains.size>0){let w=M.createDiv({cls:"llm-sb-domain-badge"});w.setText(`${this.selectedDomains.size} selected \u2014 `),w.createEl("a",{text:"clear all"}).addEventListener("click",E=>{E.stopPropagation(),this.selectedDomains.clear(),this.saveSettings(),this.render()})}let S=Math.max(...i.domains.map(w=>w.count),1);for(let w of i.domains){let y=this.selectedDomains.has(w.name),E=M.createDiv({cls:"llm-sb-bar-row llm-sb-domain-row"+(y?" llm-sb-domain-row--active":"")});E.createSpan({cls:"llm-sb-bar-name",text:w.name});let P=E.createDiv({cls:"llm-sb-track"}).createDiv({cls:"llm-sb-fill"});P.style.cssText=`width:${Math.max(w.count/S*100,4)}%;background:${ql(w.name)}`,E.createSpan({cls:"llm-sb-bar-cnt",text:String(w.count)}),E.addEventListener("click",()=>{this.selectedDomains.has(w.name)?this.selectedDomains.delete(w.name):this.selectedDomains.add(w.name),this.saveSettings(),this.render()})}}},lu=class extends Ke.PluginSettingTab{constructor(t,e){super(t,e),this.plugin=e}display(){let{containerEl:t}=this;t.empty(),t.createEl("h2",{text:"LLM Wiki Semantic Graph"}),new Ke.Setting(t).setName("Ollama endpoint").setDesc("Base URL of your Ollama server (no trailing slash)").addText(e=>e.setPlaceholder("http://localhost:11434").setValue(this.plugin.embeddingEndpoint).onChange(async i=>{let s=i.trim()||"http://localhost:11434";this.plugin.embeddingEndpoint=s;let r=this.plugin.getActiveView();r&&(r.embeddingEndpoint=s,r.saveSettings())})),new Ke.Setting(t).setName("Embedding model").setDesc("Ollama model to use for embeddings (must be pulled locally)").addText(e=>e.setPlaceholder("nomic-embed-text").setValue(this.plugin.embeddingModel).onChange(async i=>{let s=i.trim()||"nomic-embed-text";this.plugin.embeddingModel=s;let r=this.plugin.getActiveView();r&&(r.embeddingModel=s,r.saveSettings())}))}},Zl=class extends Ke.Plugin{constructor(){super(...arguments);this.embeddingEndpoint="http://localhost:11434";this.embeddingModel="nomic-embed-text"}async onload(){this.registerView(sa,e=>new Yl(e,this)),this.addRibbonIcon("git-fork","LLM Wiki Semantic Graph",()=>this.activateView()),this.addCommand({id:"open-semantic-graph",name:"Open Semantic Graph",callback:()=>this.activateView()}),this.addSettingTab(new lu(this.app,this))}async activateView(){let{workspace:e}=this.app,i=e.getLeavesOfType(sa)[0];i||(i=e.getRightLeaf(!1),await i.setViewState({type:sa,active:!0})),e.revealLeaf(i)}getActiveView(){let e=this.app.workspace.getLeavesOfType(sa)[0];return(e==null?void 0:e.view)instanceof Yl?e.view:null}onunload(){}};
/*! Bundled license information:

three/build/three.core.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
