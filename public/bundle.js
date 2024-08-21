(()=>{"use strict";var e={63:(e,t,n)=>{n.d(t,{A:()=>i});var r=n(601),o=n.n(r),s=n(314),u=n.n(s)()(o());u.push([e.id,"* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\nbody {\n  overflow-x: hidden;\n}\n",""]);const i=u},314:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,o,s){"string"==typeof e&&(e=[[null,e,void 0]]);var u={};if(r)for(var i=0;i<this.length;i++){var l=this[i][0];null!=l&&(u[l]=!0)}for(var c=0;c<e.length;c++){var a=[].concat(e[c]);r&&u[a[0]]||(void 0!==s&&(void 0===a[5]||(a[1]="@layer".concat(a[5].length>0?" ".concat(a[5]):""," {").concat(a[1],"}")),a[5]=s),n&&(a[2]?(a[1]="@media ".concat(a[2]," {").concat(a[1],"}"),a[2]=n):a[2]=n),o&&(a[4]?(a[1]="@supports (".concat(a[4],") {").concat(a[1],"}"),a[4]=o):a[4]="".concat(o)),t.push(a))}},t}},601:e=>{e.exports=function(e){return e[1]}},72:e=>{var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var s={},u=[],i=0;i<e.length;i++){var l=e[i],c=r.base?l[0]+r.base:l[0],a=s[c]||0,f="".concat(c," ").concat(a);s[c]=a+1;var d=n(f),p={css:l[1],media:l[2],sourceMap:l[3],supports:l[4],layer:l[5]};if(-1!==d)t[d].references++,t[d].updater(p);else{var h=o(p,r);r.byIndex=i,t.splice(i,0,{identifier:f,updater:h,references:1})}u.push(f)}return u}function o(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,o){var s=r(e=e||[],o=o||{});return function(e){e=e||[];for(var u=0;u<s.length;u++){var i=n(s[u]);t[i].references--}for(var l=r(e,o),c=0;c<s.length;c++){var a=n(s[c]);0===t[a].references&&(t[a].updater(),t.splice(a,1))}s=l}}},659:e=>{var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},540:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},56:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},825:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var o=void 0!==n.layer;o&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,o&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var s=n.sourceMap;s&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(s))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},113:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var s=t[r]={id:r,exports:{}};return e[r](s,s.exports,n),s.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.nc=void 0;const r={context:void 0,registry:void 0,done:!1,getContextId(){return o(this.context.count)},getNextContextId(){return o(this.context.count++)}};function o(e){const t=String(e),n=t.length-1;return r.context.id+(n?String.fromCharCode(96+n):"")+t}const s=(Symbol("solid-proxy"),Symbol("solid-track"),Symbol("solid-dev-component"),{equals:(e,t)=>e===t});let u=null,i=k;const l=1,c=2,a={owned:null,cleanups:null,context:null,owner:null};var f=null;let d=null,p=null,h=null,v=null,g=null,y=null,m=0;function b(e,t){const n={value:e,observers:null,observerSlots:null,comparator:(t=t?Object.assign({},s,t):s).equals||void 0};return[O.bind(n),e=>("function"==typeof e&&(e=d&&d.running&&d.sources.has(n)?e(n.tValue):e(n.value)),T(n,e))]}function w(e,t,n){const r=function(e,t,n,r=l){const o={fn:e,state:r,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:t,owner:f,context:f?f.context:null,pure:n};if(d&&d.running&&(o.state=0,o.tState=r),null===f||f!==a&&(d&&d.running&&f.pure?f.tOwned?f.tOwned.push(o):f.tOwned=[o]:f.owned?f.owned.push(o):f.owned=[o]),h&&o.fn){const[e,t]=b(void 0,{equals:!1}),n=h.factory(o.fn,t);!function(e){null===f||(null===f.cleanups?f.cleanups=[e]:f.cleanups.push(e))}((()=>n.dispose()));const r=()=>function(e){if(d&&d.running)return e(),d.done;const t=v,n=f;return Promise.resolve().then((()=>{let r;return v=t,f=n,(p||C)&&(r=d||(d={sources:new Set,effects:[],promises:new Set,disposed:new Set,queue:new Set,running:!0}),r.done||(r.done=new Promise((e=>r.resolve=e))),r.running=!0),j(e,!1),v=f=null,r?r.done:void 0}))}(t).then((()=>s.dispose())),s=h.factory(o.fn,r);o.fn=t=>(e(),d&&d.running?s.track(t):n.track(t))}return o}(e,t,!1,l);p&&d&&d.running?g.push(r):N(r)}function S(e){if(!h&&null===v)return e();const t=v;v=null;try{return h?h.untrack(e):e()}finally{v=t}}const[x,A]=b(!1);let C;function O(){const e=d&&d.running;if(this.sources&&(e?this.tState:this.state))if((e?this.tState:this.state)===l)N(this);else{const e=g;g=null,j((()=>I(this)),!1),g=e}if(v){const e=this.observers?this.observers.length:0;v.sources?(v.sources.push(this),v.sourceSlots.push(e)):(v.sources=[this],v.sourceSlots=[e]),this.observers?(this.observers.push(v),this.observerSlots.push(v.sources.length-1)):(this.observers=[v],this.observerSlots=[v.sources.length-1])}return e&&d.sources.has(this)?this.tValue:this.value}function T(e,t,n){let r=d&&d.running&&d.sources.has(e)?e.tValue:e.value;if(!e.comparator||!e.comparator(r,t)){if(d){const r=d.running;(r||!n&&d.sources.has(e))&&(d.sources.add(e),e.tValue=t),r||(e.value=t)}else e.value=t;e.observers&&e.observers.length&&j((()=>{for(let t=0;t<e.observers.length;t+=1){const n=e.observers[t],r=d&&d.running;r&&d.disposed.has(n)||((r?n.tState:n.state)||(n.pure?g.push(n):y.push(n),n.observers&&V(n)),r?n.tState=l:n.state=l)}if(g.length>1e6)throw g=[],new Error}),!1)}return t}function N(e){if(!e.fn)return;q(e);const t=m;E(e,d&&d.running&&d.sources.has(e)?e.tValue:e.value,t),d&&!d.running&&d.sources.has(e)&&queueMicrotask((()=>{j((()=>{d&&(d.running=!0),v=f=e,E(e,e.tValue,t),v=f=null}),!1)}))}function E(e,t,n){let r;const o=f,s=v;v=f=e;try{r=e.fn(t)}catch(t){return e.pure&&(d&&d.running?(e.tState=l,e.tOwned&&e.tOwned.forEach(q),e.tOwned=void 0):(e.state=l,e.owned&&e.owned.forEach(q),e.owned=null)),e.updatedAt=n+1,H(t)}finally{v=s,f=o}(!e.updatedAt||e.updatedAt<=n)&&(null!=e.updatedAt&&"observers"in e?T(e,r,!0):d&&d.running&&e.pure?(d.sources.add(e),e.tValue=r):e.value=r,e.updatedAt=n)}function M(e){const t=d&&d.running;if(0===(t?e.tState:e.state))return;if((t?e.tState:e.state)===c)return I(e);if(e.suspense&&S(e.suspense.inFallback))return e.suspense.effects.push(e);const n=[e];for(;(e=e.owner)&&(!e.updatedAt||e.updatedAt<m);){if(t&&d.disposed.has(e))return;(t?e.tState:e.state)&&n.push(e)}for(let r=n.length-1;r>=0;r--){if(e=n[r],t){let t=e,o=n[r+1];for(;(t=t.owner)&&t!==o;)if(d.disposed.has(t))return}if((t?e.tState:e.state)===l)N(e);else if((t?e.tState:e.state)===c){const t=g;g=null,j((()=>I(e,n[0])),!1),g=t}}}function j(e,t){if(g)return e();let n=!1;t||(g=[]),y?n=!0:y=[],m++;try{const t=e();return function(e){if(g&&(p&&d&&d.running?function(e){for(let t=0;t<e.length;t++){const n=e[t],r=d.queue;r.has(n)||(r.add(n),p((()=>{r.delete(n),j((()=>{d.running=!0,M(n)}),!1),d&&(d.running=!1)})))}}(g):k(g),g=null),e)return;let t;if(d)if(d.promises.size||d.queue.size){if(d.running)return d.running=!1,d.effects.push.apply(d.effects,y),y=null,void A(!0)}else{const e=d.sources,n=d.disposed;y.push.apply(y,d.effects),t=d.resolve;for(const e of y)"tState"in e&&(e.state=e.tState),delete e.tState;d=null,j((()=>{for(const e of n)q(e);for(const t of e){if(t.value=t.tValue,t.owned)for(let e=0,n=t.owned.length;e<n;e++)q(t.owned[e]);t.tOwned&&(t.owned=t.tOwned),delete t.tValue,delete t.tOwned,t.tState=0}A(!1)}),!1)}const n=y;y=null,n.length&&j((()=>i(n)),!1),t&&t()}(n),t}catch(e){n||(y=null),g=null,H(e)}}function k(e){for(let t=0;t<e.length;t++)M(e[t])}function I(e,t){const n=d&&d.running;n?e.tState=0:e.state=0;for(let r=0;r<e.sources.length;r+=1){const o=e.sources[r];if(o.sources){const e=n?o.tState:o.state;e===l?o!==t&&(!o.updatedAt||o.updatedAt<m)&&M(o):e===c&&I(o,t)}}}function V(e){const t=d&&d.running;for(let n=0;n<e.observers.length;n+=1){const r=e.observers[n];(t?r.tState:r.state)||(t?r.tState=c:r.state=c,r.pure?g.push(r):y.push(r),r.observers&&V(r))}}function q(e){let t;if(e.sources)for(;e.sources.length;){const t=e.sources.pop(),n=e.sourceSlots.pop(),r=t.observers;if(r&&r.length){const e=r.pop(),o=t.observerSlots.pop();n<r.length&&(e.sourceSlots[o]=n,r[n]=e,t.observerSlots[n]=o)}}if(d&&d.running&&e.pure){if(e.tOwned){for(t=e.tOwned.length-1;t>=0;t--)q(e.tOwned[t]);delete e.tOwned}B(e,!0)}else if(e.owned){for(t=e.owned.length-1;t>=0;t--)q(e.owned[t]);e.owned=null}if(e.cleanups){for(t=e.cleanups.length-1;t>=0;t--)e.cleanups[t]();e.cleanups=null}d&&d.running?e.tState=0:e.state=0}function B(e,t){if(t||(e.tState=0,d.disposed.add(e)),e.owned)for(let t=0;t<e.owned.length;t++)B(e.owned[t])}function P(e,t,n){try{for(const n of t)n(e)}catch(e){H(e,n&&n.owner||null)}}function H(e,t=f){const n=u&&t&&t.context&&t.context[u],r=function(e){return e instanceof Error?e:new Error("string"==typeof e?e:"Unknown error",{cause:e})}(e);if(!n)throw r;y?y.push({fn(){P(r,n,t)},state:l}):P(r,n,t)}function L(e,t,n){let r;const o=()=>{const t=document.createElement("template");return t.innerHTML=e,n?t.content.firstChild.firstChild:t.content.firstChild},s=t?()=>S((()=>document.importNode(r||(r=o()),!0))):()=>(r||(r=o())).cloneNode(!0);return s.cloneNode=s,s}function z(e,t,n,o,s){const u=(i=e,!!r.context&&!r.done&&(!i||i.isConnected));var i;if(u){!n&&(n=[...e.childNodes]);let t=[];for(let e=0;e<n.length;e++){const r=n[e];8===r.nodeType&&"!$"===r.data.slice(0,2)?r.remove():t.push(r)}n=t}for(;"function"==typeof n;)n=n();if(t===n)return n;const l=typeof t,c=void 0!==o;if(e=c&&n[0]&&n[0].parentNode||e,"string"===l||"number"===l){if(u)return n;if("number"===l&&(t=t.toString())===n)return n;if(c){let r=n[0];r&&3===r.nodeType?r.data!==t&&(r.data=t):r=document.createTextNode(t),n=R(e,n,o,r)}else n=""!==n&&"string"==typeof n?e.firstChild.data=t:e.textContent=t}else if(null==t||"boolean"===l){if(u)return n;n=R(e,n,o)}else{if("function"===l)return w((()=>{let r=t();for(;"function"==typeof r;)r=r();n=z(e,r,n,o)})),()=>n;if(Array.isArray(t)){const r=[],i=n&&Array.isArray(n);if(F(r,t,n,s))return w((()=>n=z(e,r,n,o,!0))),()=>n;if(u){if(!r.length)return n;if(void 0===o)return n=[...e.childNodes];let t=r[0];if(t.parentNode!==e)return n;const s=[t];for(;(t=t.nextSibling)!==o;)s.push(t);return n=s}if(0===r.length){if(n=R(e,n,o),c)return n}else i?0===n.length?U(e,r,o):function(e,t,n){let r=n.length,o=t.length,s=r,u=0,i=0,l=t[o-1].nextSibling,c=null;for(;u<o||i<s;)if(t[u]!==n[i]){for(;t[o-1]===n[s-1];)o--,s--;if(o===u){const t=s<r?i?n[i-1].nextSibling:n[s-i]:l;for(;i<s;)e.insertBefore(n[i++],t)}else if(s===i)for(;u<o;)c&&c.has(t[u])||t[u].remove(),u++;else if(t[u]===n[s-1]&&n[i]===t[o-1]){const r=t[--o].nextSibling;e.insertBefore(n[i++],t[u++].nextSibling),e.insertBefore(n[--s],r),t[o]=n[s]}else{if(!c){c=new Map;let e=i;for(;e<s;)c.set(n[e],e++)}const r=c.get(t[u]);if(null!=r)if(i<r&&r<s){let l,a=u,f=1;for(;++a<o&&a<s&&null!=(l=c.get(t[a]))&&l===r+f;)f++;if(f>r-i){const o=t[u];for(;i<r;)e.insertBefore(n[i++],o)}else e.replaceChild(n[i++],t[u++])}else u++;else t[u++].remove()}}else u++,i++}(e,n,r):(n&&R(e),U(e,r));n=r}else if(t.nodeType){if(u&&t.parentNode)return n=c?[t]:t;if(Array.isArray(n)){if(c)return n=R(e,n,o,t);R(e,n,null,t)}else null!=n&&""!==n&&e.firstChild?e.replaceChild(t,e.firstChild):e.appendChild(t);n=t}}return n}function F(e,t,n,r){let o=!1;for(let s=0,u=t.length;s<u;s++){let u,i=t[s],l=n&&n[e.length];if(null==i||!0===i||!1===i);else if("object"==(u=typeof i)&&i.nodeType)e.push(i);else if(Array.isArray(i))o=F(e,i,l)||o;else if("function"===u)if(r){for(;"function"==typeof i;)i=i();o=F(e,Array.isArray(i)?i:[i],Array.isArray(l)?l:[l])||o}else e.push(i),o=!0;else{const t=String(i);l&&3===l.nodeType&&l.data===t?e.push(l):e.push(document.createTextNode(t))}}return o}function U(e,t,n=null){for(let r=0,o=t.length;r<o;r++)e.insertBefore(t[r],n)}function R(e,t,n,r){if(void 0===n)return e.textContent="";const o=r||document.createTextNode("");if(t.length){let r=!1;for(let s=t.length-1;s>=0;s--){const u=t[s];if(o!==u){const t=u.parentNode===e;r||s?t&&u.remove():t?e.replaceChild(o,u):e.insertBefore(o,n)}else r=!0}}else e.insertBefore(o,n);return[o]}Symbol("fallback"),Object.create(null),Object.create(null),Symbol();var _=n(72),D=n.n(_),J=n(825),$=n.n(J),G=n(659),K=n.n(G),Q=n(56),W=n.n(Q),X=n(540),Y=n.n(X),Z=n(113),ee=n.n(Z),te=n(63),ne={};ne.styleTagTransform=ee(),ne.setAttributes=W(),ne.insert=K().bind(null,"head"),ne.domAPI=$(),ne.insertStyleElement=Y(),D()(te.A,ne),te.A&&te.A.locals&&te.A.locals;var re=L("<div><h1>Hello, Solid with TypeScript!</h1><p>This is a Solid.js component integrated into your existing project.");!function(e,t,n,r={}){let o;(function(e,t){const n=v,r=f,o=0===e.length,s=void 0===t?r:t,u=o?a:{owned:null,cleanups:null,context:s?s.context:null,owner:s},i=o?e:()=>e((()=>S((()=>q(u)))));f=u,v=null;try{return j(i,!0)}finally{v=n,f=r}})((r=>{o=r,t===document?e():function(e,t,n,r){if(void 0===n||r||(r=[]),"function"!=typeof t)return z(e,t,r,n);w((r=>z(e,t(),r,n)),r)}(t,e(),t.firstChild?null:void 0,n)}),r.owner)}((()=>re()),document.getElementById("root"))})();