window.neologin=function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=13)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.DATA_CLONE_ERROR=t.MESSAGE=t.REJECTED=t.FULFILLED=t.REPLY=t.CALL=t.HANDSHAKE_REPLY=t.HANDSHAKE=void 0;t.HANDSHAKE="handshake";t.HANDSHAKE_REPLY="handshake-reply";t.CALL="call";t.REPLY="reply";t.FULFILLED="fulfilled";t.REJECTED="rejected";t.MESSAGE="message";t.DATA_CLONE_ERROR="DataCloneError"},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.ERR_NO_IFRAME_SRC=t.ERR_NOT_IN_IFRAME=t.ERR_CONNECTION_TIMEOUT=t.ERR_CONNECTION_DESTROYED=void 0;t.ERR_CONNECTION_DESTROYED="ConnectionDestroyed";t.ERR_CONNECTION_TIMEOUT="ConnectionTimeout";t.ERR_NOT_IN_IFRAME="NotInIframe";t.ERR_NO_IFRAME_SRC="NoIframeSrc"},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.deserializeError=t.serializeError=void 0;t.serializeError=e=>({name:e.name,message:e.message,stack:e.stack});t.deserializeError=e=>{const t=new Error;return Object.keys(e).forEach(n=>t[n]=e[n]),t}},function(e,t,n){var r;e.exports=(r=r||function(e,t){var n=Object.create||function(){function e(){}return function(t){var n;return e.prototype=t,n=new e,e.prototype=null,n}}(),r={},o=r.lib={},i=o.Base={extend:function(e){var t=n(this);return e&&t.mixIn(e),t.hasOwnProperty("init")&&this.init!==t.init||(t.init=function(){t.$super.init.apply(this,arguments)}),t.init.prototype=t,t.$super=this,t},create:function(){var e=this.extend();return e.init.apply(e,arguments),e},init:function(){},mixIn:function(e){for(var t in e)e.hasOwnProperty(t)&&(this[t]=e[t]);e.hasOwnProperty("toString")&&(this.toString=e.toString)},clone:function(){return this.init.prototype.extend(this)}},s=o.WordArray=i.extend({init:function(e,t){e=this.words=e||[],this.sigBytes=null!=t?t:4*e.length},toString:function(e){return(e||c).stringify(this)},concat:function(e){var t=this.words,n=e.words,r=this.sigBytes,o=e.sigBytes;if(this.clamp(),r%4)for(var i=0;i<o;i++){var s=n[i>>>2]>>>24-i%4*8&255;t[r+i>>>2]|=s<<24-(r+i)%4*8}else for(i=0;i<o;i+=4)t[r+i>>>2]=n[i>>>2];return this.sigBytes+=o,this},clamp:function(){var t=this.words,n=this.sigBytes;t[n>>>2]&=4294967295<<32-n%4*8,t.length=e.ceil(n/4)},clone:function(){var e=i.clone.call(this);return e.words=this.words.slice(0),e},random:function(t){for(var n,r=[],o=function(t){t=t;var n=987654321,r=4294967295;return function(){var o=((n=36969*(65535&n)+(n>>16)&r)<<16)+(t=18e3*(65535&t)+(t>>16)&r)&r;return o/=4294967296,(o+=.5)*(e.random()>.5?1:-1)}},i=0;i<t;i+=4){var a=o(4294967296*(n||e.random()));n=987654071*a(),r.push(4294967296*a()|0)}return new s.init(r,t)}}),a=r.enc={},c=a.Hex={stringify:function(e){for(var t=e.words,n=e.sigBytes,r=[],o=0;o<n;o++){var i=t[o>>>2]>>>24-o%4*8&255;r.push((i>>>4).toString(16)),r.push((15&i).toString(16))}return r.join("")},parse:function(e){for(var t=e.length,n=[],r=0;r<t;r+=2)n[r>>>3]|=parseInt(e.substr(r,2),16)<<24-r%8*4;return new s.init(n,t/2)}},u=a.Latin1={stringify:function(e){for(var t=e.words,n=e.sigBytes,r=[],o=0;o<n;o++){var i=t[o>>>2]>>>24-o%4*8&255;r.push(String.fromCharCode(i))}return r.join("")},parse:function(e){for(var t=e.length,n=[],r=0;r<t;r++)n[r>>>2]|=(255&e.charCodeAt(r))<<24-r%4*8;return new s.init(n,t)}},d=a.Utf8={stringify:function(e){try{return decodeURIComponent(escape(u.stringify(e)))}catch(e){throw new Error("Malformed UTF-8 data")}},parse:function(e){return u.parse(unescape(encodeURIComponent(e)))}},l=o.BufferedBlockAlgorithm=i.extend({reset:function(){this._data=new s.init,this._nDataBytes=0},_append:function(e){"string"==typeof e&&(e=d.parse(e)),this._data.concat(e),this._nDataBytes+=e.sigBytes},_process:function(t){var n=this._data,r=n.words,o=n.sigBytes,i=this.blockSize,a=o/(4*i),c=(a=t?e.ceil(a):e.max((0|a)-this._minBufferSize,0))*i,u=e.min(4*c,o);if(c){for(var d=0;d<c;d+=i)this._doProcessBlock(r,d);var l=r.splice(0,c);n.sigBytes-=u}return new s.init(l,u)},clone:function(){var e=i.clone.call(this);return e._data=this._data.clone(),e},_minBufferSize:0}),f=(o.Hasher=l.extend({cfg:i.extend(),init:function(e){this.cfg=this.cfg.extend(e),this.reset()},reset:function(){l.reset.call(this),this._doReset()},update:function(e){return this._append(e),this._process(),this},finalize:function(e){return e&&this._append(e),this._doFinalize()},blockSize:16,_createHelper:function(e){return function(t,n){return new e.init(n).finalize(t)}},_createHmacHelper:function(e){return function(t,n){return new f.HMAC.init(e,n).finalize(t)}}}),r.algo={});return r}(Math),r)},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(0),o=n(1),i=d(n(7)),s=d(n(8)),a=d(n(9)),c=d(n(10)),u=d(n(11));function d(e){return e&&e.__esModule?e:{default:e}}t.default=e=>{let t=e.iframe,n=e.methods,d=void 0===n?{}:n,l=e.childOrigin,f=e.timeout,h=e.debug;const p=(0,a.default)(h),E=window,g=(0,i.default)(),v=g.destroy,_=g.onDestroy;if(!l){if(!t.src&&!t.srcdoc){const e=new Error("Iframe must have src or srcdoc property defined.");throw e.code=o.ERR_NO_IFRAME_SRC,e}l=(0,s.default)(t.src)}const m="null"===l?"*":l;return{promise:new Promise((e,n)=>{let i;void 0!==f&&(i=setTimeout(()=>{const e=new Error(`Connection to child timed out after ${f}ms`);e.code=o.ERR_CONNECTION_TIMEOUT,n(e),v()},f));const s={};let a,h;const g=n=>{const o=t.contentWindow;if(n.source!==o||n.data.penpal!==r.HANDSHAKE)return;if(n.origin!==l)return void p(`Parent received handshake from origin ${n.origin} which did not match expected origin ${l}`);p("Parent: Received handshake, sending reply"),n.source.postMessage({penpal:r.HANDSHAKE_REPLY,methodNames:Object.keys(d)},m);const f={localName:"Parent",local:E,remote:o,originForSending:m,originForReceiving:l};h&&h(),h=(0,c.default)(f,d,p),_(h),a&&a.forEach(e=>{delete s[e]}),a=n.data.methodNames;const g=(0,u.default)(s,f,a,v,p);_(g),clearTimeout(i),e(s)};E.addEventListener(r.MESSAGE,g),p("Parent: Awaiting handshake");var y=setInterval(()=>{document.contains(t)||(clearInterval(y),v())},6e4);_(()=>{E.removeEventListener(r.MESSAGE,g),clearInterval(y);const e=new Error("Connection destroyed");e.code=o.ERR_CONNECTION_DESTROYED,n(e)})}),destroy:v}},e.exports=t.default},function(e,t,n){var r;e.exports=(r=n(3),function(e){var t=r,n=t.lib,o=n.WordArray,i=n.Hasher,s=t.algo,a=[],c=[];!function(){function t(t){for(var n=e.sqrt(t),r=2;r<=n;r++)if(!(t%r))return!1;return!0}function n(e){return 4294967296*(e-(0|e))|0}for(var r=2,o=0;o<64;)t(r)&&(o<8&&(a[o]=n(e.pow(r,.5))),c[o]=n(e.pow(r,1/3)),o++),r++}();var u=[],d=s.SHA256=i.extend({_doReset:function(){this._hash=new o.init(a.slice(0))},_doProcessBlock:function(e,t){for(var n=this._hash.words,r=n[0],o=n[1],i=n[2],s=n[3],a=n[4],d=n[5],l=n[6],f=n[7],h=0;h<64;h++){if(h<16)u[h]=0|e[t+h];else{var p=u[h-15],E=(p<<25|p>>>7)^(p<<14|p>>>18)^p>>>3,g=u[h-2],v=(g<<15|g>>>17)^(g<<13|g>>>19)^g>>>10;u[h]=E+u[h-7]+v+u[h-16]}var _=r&o^r&i^o&i,m=(r<<30|r>>>2)^(r<<19|r>>>13)^(r<<10|r>>>22),y=f+((a<<26|a>>>6)^(a<<21|a>>>11)^(a<<7|a>>>25))+(a&d^~a&l)+c[h]+u[h];f=l,l=d,d=a,a=s+y|0,s=i,i=o,o=r,r=y+(m+_)|0}n[0]=n[0]+r|0,n[1]=n[1]+o|0,n[2]=n[2]+i|0,n[3]=n[3]+s|0,n[4]=n[4]+a|0,n[5]=n[5]+d|0,n[6]=n[6]+l|0,n[7]=n[7]+f|0},_doFinalize:function(){var t=this._data,n=t.words,r=8*this._nDataBytes,o=8*t.sigBytes;return n[o>>>5]|=128<<24-o%32,n[14+(o+64>>>9<<4)]=e.floor(r/4294967296),n[15+(o+64>>>9<<4)]=r,t.sigBytes=4*n.length,this._process(),this._hash},clone:function(){var e=i.clone.call(this);return e._hash=this._hash.clone(),e}});t.SHA256=i._createHelper(d),t.HmacSHA256=i._createHmacHelper(d)}(Math),r.SHA256)},function(e,t,n){var r;e.exports=(r=n(3),r.enc.Hex)},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;t.default=()=>{const e=[];let t=!1;return{destroy(){t=!0,e.forEach(e=>{e()})},onDestroy(n){t?n():e.push(n)}}},e.exports=t.default},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;const r={"http:":"80","https:":"443"},o=/^(https?:)?\/\/([^/:]+)?(:(\d+))?/,i=["file:","data:"];t.default=e=>{if(e&&i.find(t=>e.startsWith(t)))return"null";const t=document.location,n=o.exec(e);let s,a,c;n?(s=n[1]?n[1]:t.protocol,a=n[2],c=n[4]):(s=t.protocol,a=t.hostname,c=t.port);return`${s}//${a}${c&&c!==r[s]?":"+c:""}`},e.exports=t.default},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;t.default=e=>function(){if(e){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];console.log("[Penpal]",...n)}},e.exports=t.default},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(0),o=n(2);t.default=(e,t,n)=>{const i=e.localName,s=e.local,a=e.remote,c=e.originForSending,u=e.originForReceiving;let d=!1;n(i+": Connecting call receiver");const l=e=>{if(e.source!==a||e.data.penpal!==r.CALL)return;if(e.origin!==u)return void n(`${i} received message from origin ${e.origin} which did not match expected origin ${u}`);const s=e.data,l=s.methodName,f=s.args,h=s.id;n(`${i}: Received ${l}() call`);const p=e=>t=>{if(n(`${i}: Sending ${l}() reply`),d)return void n(`${i}: Unable to send ${l}() reply due to destroyed connection`);const s={penpal:r.REPLY,id:h,resolution:e,returnValue:t};e===r.REJECTED&&t instanceof Error&&(s.returnValue=(0,o.serializeError)(t),s.returnValueIsError=!0);try{a.postMessage(s,c)}catch(e){throw e.name===r.DATA_CLONE_ERROR&&a.postMessage({penpal:r.REPLY,id:h,resolution:r.REJECTED,returnValue:(0,o.serializeError)(e),returnValueIsError:!0},c),e}};new Promise(e=>e(t[l].apply(t,f))).then(p(r.FULFILLED),p(r.REJECTED))};return s.addEventListener(r.MESSAGE,l),()=>{d=!0,s.removeEventListener(r.MESSAGE,l)}},e.exports=t.default},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r,o=n(0),i=n(1),s=(r=n(12))&&r.__esModule?r:{default:r},a=n(2);t.default=(e,t,n,r,c)=>{const u=t.localName,d=t.local,l=t.remote,f=t.originForSending,h=t.originForReceiving;let p=!1;c(u+": Connecting call sender");return n.reduce((e,t)=>(e[t]=(e=>function(){for(var t=arguments.length,n=new Array(t),E=0;E<t;E++)n[E]=arguments[E];let g;c(`${u}: Sending ${e}() call`);try{l.closed&&(g=!0)}catch(e){g=!0}if(g&&r(),p){const t=new Error(`Unable to send ${e}() call due to destroyed connection`);throw t.code=i.ERR_CONNECTION_DESTROYED,t}return new Promise((t,r)=>{const i=(0,s.default)(),p=n=>{if(n.source!==l||n.data.penpal!==o.REPLY||n.data.id!==i)return;if(n.origin!==h)return void c(`${u} received message from origin ${n.origin} which did not match expected origin ${h}`);c(`${u}: Received ${e}() reply`),d.removeEventListener(o.MESSAGE,p);let s=n.data.returnValue;n.data.returnValueIsError&&(s=(0,a.deserializeError)(s)),(n.data.resolution===o.FULFILLED?t:r)(s)};d.addEventListener(o.MESSAGE,p),l.postMessage({penpal:o.CALL,id:i,methodName:e,args:n},f)})})(t),e),e),()=>{p=!0}},e.exports=t.default},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;let r=0;t.default=()=>++r,e.exports=t.default},function(e,t,n){"use strict";n.r(t);var r=n(4),o=n.n(r),i=n(5),s=n.n(i),a=n(6),c=n.n(a);let u=[],d=null;let l={READY:[],ACCOUNT_CHANGED:[],NETWORK_CHANGED:[],CONNECTED:[],DISCONNECTED:[],BLOCK_HEIGHT_CHANGED:[],TRANSACTION_CONFIRMED:[]};function f(e){return!!Object.keys(l).includes(e)||(console.error(`The event used ("${e}") is not supported. The only events supported are ${Object.keys(l)}.`),!1)}const h=document.createElement("iframe");h.src="https://neologin.io/widget/";const p={position:"fixed",top:"1.5rem",right:"1.5rem",boxShadow:"0 5px 40px rgba(0,0,0,.16)",borderRadius:"4px",border:"0",width:"375px",background:"white","z-index":99999},E={position:"fixed",bottom:"0",boxShadow:"0 5px 40px rgba(0,0,0,.16)",borderRadius:"0px",width:"100%",border:"0",background:"white","z-index":99999};function g(){const e=document.documentElement.clientWidth;document.documentElement.clientHeight;let t=e>576?p:E,n=h.style.height;h.style=null;for(let e in t)h.style[e]=t[e];h.style.height=n}const v=()=>{document.body.appendChild(h),g()};"complete"===document.readyState||"loaded"===document.readyState||"interactive"===document.readyState?v():document.addEventListener("DOMContentLoaded",()=>{v()});const _=o()({iframe:h,methods:{sendEvent:function(e,t){l[e].map(e=>e(t)),"READY"===e&&(d=t)},displayWidget:function(e){h.style.height=e+"px"},closeWidget:R,updateWidgetHeight:function(e){u[u.length-1]=e,h.style.height=e+"px"}}}),m=["getProvider","getNetworks","getAccount","getPublicKey","getBalance","getStorage","invokeRead","verifyMessage","getBlock","getBlockHeight","getTransaction","getApplicationLog","send","invoke","invokeMulti","signMessage","deploy","encrypt","decrypt","disconnect"];let y={removeEventListener:function(e){f(e)&&(l[e]=[])},addEventListener:function(e,t){"READY"===e&&null!==d?t(d):f(e)&&l[e].push(t)}};for(let e=0;e<m.length;e++){let t=m[e];y[t]=function(...e){return _.promise.then(n=>n[t](...e))}}function R(){h.style.height="0px"}window.addEventListener("resize",g),R();let N=e=>e.match(/.{2}/g).reverse().join("");function A(e){const t=c.a.parse(e);return s()(t).toString()}y.utils={hex2str:e=>{for(var t=e.toString(),n="",r=0;r<t.length&&"00"!==t.substr(r,2);r+=2)n+=String.fromCharCode(parseInt(t.substr(r,2),16));return n},str2hex:e=>{for(var t=[],n=0,r=e.length;n<r;n++){var o=Number(e.charCodeAt(n)).toString(16);t.push(o.length>1&&o||"0"+o)}return t.join("")},hex2int:e=>parseInt(N(e),16),int2hex:e=>{let t=e.toString(16);return N(t.length%2?"0"+t:t)},reverseHex:N,address2scriptHash:e=>function(e){let t=BigInt(0),n=BigInt(1);for(let r=e.length-1;r>=0;r--)t+=BigInt(C.indexOf(e[r]))*n,n*=BigInt(58);return t.toString(16)}(e).substr(2,40),scriptHash2address:e=>{const t=A("17"+(e=e.substr(0,40)));return function(e){let t=BigInt(e),n="";for(;t>0;)n+=C[t%BigInt(58)],t/=BigInt(58);return n.split("").reverse().join("")}("0x17"+e+A(t).substr(0,8))}};const C="123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz";y.Constants={ArgumentDataType:{STRING:"String",BOOLEAN:"Boolean",HASH160:"Hash160",HASH256:"Hash256",INTEGER:"Integer",BYTEARRAY:"ByteArray",ARRAY:"Array",ADDRESS:"Address"},EventName:{READY:"READY",ACCOUNT_CHANGED:"ACCOUNT_CHANGED",CONNECTED:"CONNECTED",DISCONNECTED:"DISCONNECTED",NETWORK_CHANGED:"NETWORK_CHANGED",BLOCK_HEIGHT_CHANGED:"BLOCK_HEIGHT_CHANGED",TRANSACTION_CONFIRMED:"TRANSACTION_CONFIRMED"}};t.default=y}]).default;