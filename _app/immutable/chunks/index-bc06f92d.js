function b(){}const G=t=>t;function gt(t,e){for(const n in e)t[n]=e[n];return t}function it(t){return t()}function Y(){return Object.create(null)}function v(t){t.forEach(it)}function M(t){return typeof t=="function"}function zt(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let D;function Ft(t,e){return D||(D=document.createElement("a")),D.href=e,t===D.href}function yt(t){return Object.keys(t).length===0}function bt(t,...e){if(t==null)return b;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function Gt(t,e,n){t.$$.on_destroy.push(bt(e,n))}function Wt(t,e,n,i){if(t){const s=st(t,e,n,i);return t[0](s)}}function st(t,e,n,i){return t[1]&&i?gt(n.ctx.slice(),t[1](i(e))):n.ctx}function It(t,e,n,i){if(t[2]&&i){const s=t[2](i(n));if(e.dirty===void 0)return s;if(typeof s=="object"){const l=[],r=Math.max(e.dirty.length,s.length);for(let a=0;a<r;a+=1)l[a]=e.dirty[a]|s[a];return l}return e.dirty|s}return e.dirty}function Jt(t,e,n,i,s,l){if(s){const r=st(e,n,i,l);t.p(r,s)}}function Kt(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let i=0;i<n;i++)e[i]=-1;return e}return-1}function Qt(t){let e=!1;return function(...n){e||(e=!0,t.call(this,...n))}}function Ut(t,e,n){return t.set(n),e}const rt=typeof window<"u";let W=rt?()=>window.performance.now():()=>Date.now(),I=rt?t=>requestAnimationFrame(t):b;const E=new Set;function lt(t){E.forEach(e=>{e.c(t)||(E.delete(e),e.f())}),E.size!==0&&I(lt)}function J(t){let e;return E.size===0&&I(lt),{promise:new Promise(n=>{E.add(e={c:t,f:n})}),abort(){E.delete(e)}}}let B=!1;function xt(){B=!0}function $t(){B=!1}function wt(t,e,n,i){for(;t<e;){const s=t+(e-t>>1);n(s)<=i?t=s+1:e=s}return t}function vt(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const c=[];for(let o=0;o<e.length;o++){const _=e[o];_.claim_order!==void 0&&c.push(_)}e=c}const n=new Int32Array(e.length+1),i=new Int32Array(e.length);n[0]=-1;let s=0;for(let c=0;c<e.length;c++){const o=e[c].claim_order,_=(s>0&&e[n[s]].claim_order<=o?s+1:wt(1,s,u=>e[n[u]].claim_order,o))-1;i[c]=n[_]+1;const f=_+1;n[f]=c,s=Math.max(f,s)}const l=[],r=[];let a=e.length-1;for(let c=n[s]+1;c!=0;c=i[c-1]){for(l.push(e[c-1]);a>=c;a--)r.push(e[a]);a--}for(;a>=0;a--)r.push(e[a]);l.reverse(),r.sort((c,o)=>c.claim_order-o.claim_order);for(let c=0,o=0;c<r.length;c++){for(;o<l.length&&r[c].claim_order>=l[o].claim_order;)o++;const _=o<l.length?l[o]:null;t.insertBefore(r[c],_)}}function Et(t,e){t.appendChild(e)}function ct(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function Nt(t){const e=K("style");return Tt(ct(t),e),e.sheet}function Tt(t,e){return Et(t.head||t,e),e.sheet}function kt(t,e){if(B){for(vt(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function At(t,e,n){t.insertBefore(e,n||null)}function St(t,e,n){B&&!n?kt(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function S(t){t.parentNode.removeChild(t)}function Vt(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function K(t){return document.createElement(t)}function ot(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function Q(t){return document.createTextNode(t)}function Xt(){return Q(" ")}function Yt(){return Q("")}function Zt(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function te(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function ee(t,e,n){t.setAttributeNS("http://www.w3.org/1999/xlink",e,n)}function Ct(t){return Array.from(t.childNodes)}function at(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function ut(t,e,n,i,s=!1){at(t);const l=(()=>{for(let r=t.claim_info.last_index;r<t.length;r++){const a=t[r];if(e(a)){const c=n(a);return c===void 0?t.splice(r,1):t[r]=c,s||(t.claim_info.last_index=r),a}}for(let r=t.claim_info.last_index-1;r>=0;r--){const a=t[r];if(e(a)){const c=n(a);return c===void 0?t.splice(r,1):t[r]=c,s?c===void 0&&t.claim_info.last_index--:t.claim_info.last_index=r,a}}return i()})();return l.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,l}function ft(t,e,n,i){return ut(t,s=>s.nodeName===e,s=>{const l=[];for(let r=0;r<s.attributes.length;r++){const a=s.attributes[r];n[a.name]||l.push(a.name)}l.forEach(r=>s.removeAttribute(r))},()=>i(e))}function ne(t,e,n){return ft(t,e,n,K)}function ie(t,e,n){return ft(t,e,n,ot)}function Mt(t,e){return ut(t,n=>n.nodeType===3,n=>{const i=""+e;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>Q(e),!0)}function se(t){return Mt(t," ")}function Z(t,e,n){for(let i=n;i<t.length;i+=1){const s=t[i];if(s.nodeType===8&&s.textContent.trim()===e)return i}return t.length}function re(t,e){const n=Z(t,"HTML_TAG_START",0),i=Z(t,"HTML_TAG_END",n);if(n===i)return new tt(void 0,e);at(t);const s=t.splice(n,i-n+1);S(s[0]),S(s[s.length-1]);const l=s.slice(1,s.length-1);for(const r of l)r.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1;return new tt(l,e)}function le(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function ce(t,e,n,i){n===null?t.style.removeProperty(e):t.style.setProperty(e,n,i?"important":"")}function oe(t,e,n){t.classList[n?"add":"remove"](e)}function _t(t,e,{bubbles:n=!1,cancelable:i=!1}={}){const s=document.createEvent("CustomEvent");return s.initCustomEvent(t,n,i,e),s}function ae(t,e){const n=[];let i=0;for(const s of e.childNodes)if(s.nodeType===8){const l=s.textContent.trim();l===`HEAD_${t}_END`?(i-=1,n.push(s)):l===`HEAD_${t}_START`&&(i+=1,n.push(s))}else i>0&&n.push(s);return n}class Dt{constructor(e=!1){this.is_svg=!1,this.is_svg=e,this.e=this.n=null}c(e){this.h(e)}m(e,n,i=null){this.e||(this.is_svg?this.e=ot(n.nodeName):this.e=K(n.nodeName),this.t=n,this.c(e)),this.i(i)}h(e){this.e.innerHTML=e,this.n=Array.from(this.e.childNodes)}i(e){for(let n=0;n<this.n.length;n+=1)At(this.t,this.n[n],e)}p(e){this.d(),this.h(e),this.i(this.a)}d(){this.n.forEach(S)}}class tt extends Dt{constructor(e,n=!1){super(n),this.e=this.n=null,this.l=e}c(e){this.l?this.n=this.l:super.c(e)}i(e){for(let n=0;n<this.n.length;n+=1)St(this.t,this.n[n],e)}}function ue(t,e){return new t(e)}const P=new Map;let R=0;function Ht(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}function jt(t,e){const n={stylesheet:Nt(e),rules:{}};return P.set(t,n),n}function O(t,e,n,i,s,l,r,a=0){const c=16.666/i;let o=`{
`;for(let m=0;m<=1;m+=c){const y=e+(n-e)*l(m);o+=m*100+`%{${r(y,1-y)}}
`}const _=o+`100% {${r(n,1-n)}}
}`,f=`__svelte_${Ht(_)}_${a}`,u=ct(t),{stylesheet:d,rules:h}=P.get(u)||jt(u,t);h[f]||(h[f]=!0,d.insertRule(`@keyframes ${f} ${_}`,d.cssRules.length));const p=t.style.animation||"";return t.style.animation=`${p?`${p}, `:""}${f} ${i}ms linear ${s}ms 1 both`,R+=1,f}function q(t,e){const n=(t.style.animation||"").split(", "),i=n.filter(e?l=>l.indexOf(e)<0:l=>l.indexOf("__svelte")===-1),s=n.length-i.length;s&&(t.style.animation=i.join(", "),R-=s,R||Lt())}function Lt(){I(()=>{R||(P.forEach(t=>{const{ownerNode:e}=t.stylesheet;e&&S(e)}),P.clear())})}let C;function A(t){C=t}function U(){if(!C)throw new Error("Function called outside component initialization");return C}function fe(t){U().$$.on_mount.push(t)}function _e(t){U().$$.after_update.push(t)}function de(){const t=U();return(e,n,{cancelable:i=!1}={})=>{const s=t.$$.callbacks[e];if(s){const l=_t(e,n,{cancelable:i});return s.slice().forEach(r=>{r.call(t,l)}),!l.defaultPrevented}return!0}}function he(t,e){const n=t.$$.callbacks[e.type];n&&n.slice().forEach(i=>i.call(this,e))}const k=[],et=[],j=[],nt=[],dt=Promise.resolve();let F=!1;function ht(){F||(F=!0,dt.then(mt))}function me(){return ht(),dt}function N(t){j.push(t)}const z=new Set;let H=0;function mt(){const t=C;do{for(;H<k.length;){const e=k[H];H++,A(e),Pt(e.$$)}for(A(null),k.length=0,H=0;et.length;)et.pop()();for(let e=0;e<j.length;e+=1){const n=j[e];z.has(n)||(z.add(n),n())}j.length=0}while(k.length);for(;nt.length;)nt.pop()();F=!1,z.clear(),A(t)}function Pt(t){if(t.fragment!==null){t.update(),v(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(N)}}let T;function V(){return T||(T=Promise.resolve(),T.then(()=>{T=null})),T}function w(t,e,n){t.dispatchEvent(_t(`${e?"intro":"outro"}${n}`))}const L=new Set;let g;function pe(){g={r:0,c:[],p:g}}function ge(){g.r||v(g.c),g=g.p}function Rt(t,e){t&&t.i&&(L.delete(t),t.i(e))}function ye(t,e,n,i){if(t&&t.o){if(L.has(t))return;L.add(t),g.c.push(()=>{L.delete(t),i&&(n&&t.d(1),i())}),t.o(e)}else i&&i()}const X={duration:0};function be(t,e,n){let i=e(t,n),s=!1,l,r,a=0;function c(){l&&q(t,l)}function o(){const{delay:f=0,duration:u=300,easing:d=G,tick:h=b,css:p}=i||X;p&&(l=O(t,0,1,u,f,d,p,a++)),h(0,1);const m=W()+f,y=m+u;r&&r.abort(),s=!0,N(()=>w(t,!0,"start")),r=J(x=>{if(s){if(x>=y)return h(1,0),w(t,!0,"end"),c(),s=!1;if(x>=m){const $=d((x-m)/u);h($,1-$)}}return s})}let _=!1;return{start(){_||(_=!0,q(t),M(i)?(i=i(),V().then(o)):o())},invalidate(){_=!1},end(){s&&(c(),s=!1)}}}function xe(t,e,n){let i=e(t,n),s=!0,l;const r=g;r.r+=1;function a(){const{delay:c=0,duration:o=300,easing:_=G,tick:f=b,css:u}=i||X;u&&(l=O(t,1,0,o,c,_,u));const d=W()+c,h=d+o;N(()=>w(t,!1,"start")),J(p=>{if(s){if(p>=h)return f(0,1),w(t,!1,"end"),--r.r||v(r.c),!1;if(p>=d){const m=_((p-d)/o);f(1-m,m)}}return s})}return M(i)?V().then(()=>{i=i(),a()}):a(),{end(c){c&&i.tick&&i.tick(1,0),s&&(l&&q(t,l),s=!1)}}}function $e(t,e,n,i){let s=e(t,n),l=i?0:1,r=null,a=null,c=null;function o(){c&&q(t,c)}function _(u,d){const h=u.b-l;return d*=Math.abs(h),{a:l,b:u.b,d:h,duration:d,start:u.start,end:u.start+d,group:u.group}}function f(u){const{delay:d=0,duration:h=300,easing:p=G,tick:m=b,css:y}=s||X,x={start:W()+d,b:u};u||(x.group=g,g.r+=1),r||a?a=x:(y&&(o(),c=O(t,l,u,h,d,p,y)),u&&m(0,1),r=_(x,h),N(()=>w(t,u,"start")),J($=>{if(a&&$>a.start&&(r=_(a,h),a=null,w(t,r.b,"start"),y&&(o(),c=O(t,l,r.b,r.duration,0,p,s.css))),r){if($>=r.end)m(l=r.b,1-l),w(t,r.b,"end"),a||(r.b?o():--r.group.r||v(r.group.c)),r=null;else if($>=r.start){const pt=$-r.start;l=r.a+r.d*p(pt/r.duration),m(l,1-l)}}return!!(r||a)}))}return{run(u){M(s)?V().then(()=>{s=s(),f(u)}):f(u)},end(){o(),r=a=null}}}const we=typeof window<"u"?window:typeof globalThis<"u"?globalThis:global;function ve(t){t&&t.c()}function Ee(t,e){t&&t.l(e)}function Ot(t,e,n,i){const{fragment:s,after_update:l}=t.$$;s&&s.m(e,n),i||N(()=>{const r=t.$$.on_mount.map(it).filter(M);t.$$.on_destroy?t.$$.on_destroy.push(...r):v(r),t.$$.on_mount=[]}),l.forEach(N)}function qt(t,e){const n=t.$$;n.fragment!==null&&(v(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Bt(t,e){t.$$.dirty[0]===-1&&(k.push(t),ht(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function Ne(t,e,n,i,s,l,r,a=[-1]){const c=C;A(t);const o=t.$$={fragment:null,ctx:[],props:l,update:b,not_equal:s,bound:Y(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(c?c.$$.context:[])),callbacks:Y(),dirty:a,skip_bound:!1,root:e.target||c.$$.root};r&&r(o.root);let _=!1;if(o.ctx=n?n(t,e.props||{},(f,u,...d)=>{const h=d.length?d[0]:u;return o.ctx&&s(o.ctx[f],o.ctx[f]=h)&&(!o.skip_bound&&o.bound[f]&&o.bound[f](h),_&&Bt(t,f)),u}):[],o.update(),_=!0,v(o.before_update),o.fragment=i?i(o.ctx):!1,e.target){if(e.hydrate){xt();const f=Ct(e.target);o.fragment&&o.fragment.l(f),f.forEach(S)}else o.fragment&&o.fragment.c();e.intro&&Rt(t.$$.fragment),Ot(t,e.target,e.anchor,e.customElement),$t(),mt()}A(c)}class Te{$destroy(){qt(this,1),this.$destroy=b}$on(e,n){if(!M(n))return b;const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(n),()=>{const s=i.indexOf(n);s!==-1&&i.splice(s,1)}}$set(e){this.$$set&&!yt(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}export{Qt as $,me as A,b as B,bt as C,v as D,M as E,Wt as F,Jt as G,Kt as H,It as I,kt as J,Gt as K,oe as L,de as M,Ut as N,et as O,Ft as P,Zt as Q,he as R,Te as S,N as T,Vt as U,we as V,xe as W,tt as X,re as Y,ot as Z,ie as _,Xt as a,G as a0,gt as a1,W as a2,J as a3,ae as a4,$e as a5,ee as a6,be as a7,I as a8,St as b,se as c,ge as d,Yt as e,Rt as f,pe as g,S as h,Ne as i,_e as j,K as k,ne as l,Ct as m,te as n,fe as o,ce as p,Q as q,Mt as r,zt as s,ye as t,le as u,ue as v,ve as w,Ee as x,Ot as y,qt as z};