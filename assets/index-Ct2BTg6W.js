(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const h of c.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&r(h)}).observe(document,{childList:!0,subtree:!0});function i(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function r(l){if(l.ep)return;l.ep=!0;const c=i(l);fetch(l.href,c)}})();var Nf={exports:{}},_o={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Kg;function IS(){if(Kg)return _o;Kg=1;var o=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function i(r,l,c){var h=null;if(c!==void 0&&(h=""+c),l.key!==void 0&&(h=""+l.key),"key"in l){c={};for(var d in l)d!=="key"&&(c[d]=l[d])}else c=l;return l=c.ref,{$$typeof:o,type:r,key:h,ref:l!==void 0?l:null,props:c}}return _o.Fragment=e,_o.jsx=i,_o.jsxs=i,_o}var Qg;function FS(){return Qg||(Qg=1,Nf.exports=IS()),Nf.exports}var In=FS(),Of={exports:{}},re={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Jg;function HS(){if(Jg)return re;Jg=1;var o=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),h=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),S=Symbol.for("react.lazy"),_=Symbol.for("react.activity"),x=Symbol.iterator;function y(L){return L===null||typeof L!="object"?null:(L=x&&L[x]||L["@@iterator"],typeof L=="function"?L:null)}var A={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},R=Object.assign,M={};function v(L,tt,xt){this.props=L,this.context=tt,this.refs=M,this.updater=xt||A}v.prototype.isReactComponent={},v.prototype.setState=function(L,tt){if(typeof L!="object"&&typeof L!="function"&&L!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,L,tt,"setState")},v.prototype.forceUpdate=function(L){this.updater.enqueueForceUpdate(this,L,"forceUpdate")};function I(){}I.prototype=v.prototype;function z(L,tt,xt){this.props=L,this.context=tt,this.refs=M,this.updater=xt||A}var D=z.prototype=new I;D.constructor=z,R(D,v.prototype),D.isPureReactComponent=!0;var X=Array.isArray;function H(){}var P={H:null,A:null,T:null,S:null},j=Object.prototype.hasOwnProperty;function w(L,tt,xt){var bt=xt.ref;return{$$typeof:o,type:L,key:tt,ref:bt!==void 0?bt:null,props:xt}}function C(L,tt){return w(L.type,tt,L.props)}function G(L){return typeof L=="object"&&L!==null&&L.$$typeof===o}function nt(L){var tt={"=":"=0",":":"=2"};return"$"+L.replace(/[=:]/g,function(xt){return tt[xt]})}var ut=/\/+/g;function gt(L,tt){return typeof L=="object"&&L!==null&&L.key!=null?nt(""+L.key):tt.toString(36)}function ft(L){switch(L.status){case"fulfilled":return L.value;case"rejected":throw L.reason;default:switch(typeof L.status=="string"?L.then(H,H):(L.status="pending",L.then(function(tt){L.status==="pending"&&(L.status="fulfilled",L.value=tt)},function(tt){L.status==="pending"&&(L.status="rejected",L.reason=tt)})),L.status){case"fulfilled":return L.value;case"rejected":throw L.reason}}throw L}function N(L,tt,xt,bt,Nt){var et=typeof L;(et==="undefined"||et==="boolean")&&(L=null);var ot=!1;if(L===null)ot=!0;else switch(et){case"bigint":case"string":case"number":ot=!0;break;case"object":switch(L.$$typeof){case o:case e:ot=!0;break;case S:return ot=L._init,N(ot(L._payload),tt,xt,bt,Nt)}}if(ot)return Nt=Nt(L),ot=bt===""?"."+gt(L,0):bt,X(Nt)?(xt="",ot!=null&&(xt=ot.replace(ut,"$&/")+"/"),N(Nt,tt,xt,"",function(Xt){return Xt})):Nt!=null&&(G(Nt)&&(Nt=C(Nt,xt+(Nt.key==null||L&&L.key===Nt.key?"":(""+Nt.key).replace(ut,"$&/")+"/")+ot)),tt.push(Nt)),1;ot=0;var wt=bt===""?".":bt+":";if(X(L))for(var Bt=0;Bt<L.length;Bt++)bt=L[Bt],et=wt+gt(bt,Bt),ot+=N(bt,tt,xt,et,Nt);else if(Bt=y(L),typeof Bt=="function")for(L=Bt.call(L),Bt=0;!(bt=L.next()).done;)bt=bt.value,et=wt+gt(bt,Bt++),ot+=N(bt,tt,xt,et,Nt);else if(et==="object"){if(typeof L.then=="function")return N(ft(L),tt,xt,bt,Nt);throw tt=String(L),Error("Objects are not valid as a React child (found: "+(tt==="[object Object]"?"object with keys {"+Object.keys(L).join(", ")+"}":tt)+"). If you meant to render a collection of children, use an array instead.")}return ot}function Z(L,tt,xt){if(L==null)return L;var bt=[],Nt=0;return N(L,bt,"","",function(et){return tt.call(xt,et,Nt++)}),bt}function Y(L){if(L._status===-1){var tt=L._result;tt=tt(),tt.then(function(xt){(L._status===0||L._status===-1)&&(L._status=1,L._result=xt)},function(xt){(L._status===0||L._status===-1)&&(L._status=2,L._result=xt)}),L._status===-1&&(L._status=0,L._result=tt)}if(L._status===1)return L._result.default;throw L._result}var vt=typeof reportError=="function"?reportError:function(L){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var tt=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof L=="object"&&L!==null&&typeof L.message=="string"?String(L.message):String(L),error:L});if(!window.dispatchEvent(tt))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",L);return}console.error(L)},yt={map:Z,forEach:function(L,tt,xt){Z(L,function(){tt.apply(this,arguments)},xt)},count:function(L){var tt=0;return Z(L,function(){tt++}),tt},toArray:function(L){return Z(L,function(tt){return tt})||[]},only:function(L){if(!G(L))throw Error("React.Children.only expected to receive a single React element child.");return L}};return re.Activity=_,re.Children=yt,re.Component=v,re.Fragment=i,re.Profiler=l,re.PureComponent=z,re.StrictMode=r,re.Suspense=m,re.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=P,re.__COMPILER_RUNTIME={__proto__:null,c:function(L){return P.H.useMemoCache(L)}},re.cache=function(L){return function(){return L.apply(null,arguments)}},re.cacheSignal=function(){return null},re.cloneElement=function(L,tt,xt){if(L==null)throw Error("The argument must be a React element, but you passed "+L+".");var bt=R({},L.props),Nt=L.key;if(tt!=null)for(et in tt.key!==void 0&&(Nt=""+tt.key),tt)!j.call(tt,et)||et==="key"||et==="__self"||et==="__source"||et==="ref"&&tt.ref===void 0||(bt[et]=tt[et]);var et=arguments.length-2;if(et===1)bt.children=xt;else if(1<et){for(var ot=Array(et),wt=0;wt<et;wt++)ot[wt]=arguments[wt+2];bt.children=ot}return w(L.type,Nt,bt)},re.createContext=function(L){return L={$$typeof:h,_currentValue:L,_currentValue2:L,_threadCount:0,Provider:null,Consumer:null},L.Provider=L,L.Consumer={$$typeof:c,_context:L},L},re.createElement=function(L,tt,xt){var bt,Nt={},et=null;if(tt!=null)for(bt in tt.key!==void 0&&(et=""+tt.key),tt)j.call(tt,bt)&&bt!=="key"&&bt!=="__self"&&bt!=="__source"&&(Nt[bt]=tt[bt]);var ot=arguments.length-2;if(ot===1)Nt.children=xt;else if(1<ot){for(var wt=Array(ot),Bt=0;Bt<ot;Bt++)wt[Bt]=arguments[Bt+2];Nt.children=wt}if(L&&L.defaultProps)for(bt in ot=L.defaultProps,ot)Nt[bt]===void 0&&(Nt[bt]=ot[bt]);return w(L,et,Nt)},re.createRef=function(){return{current:null}},re.forwardRef=function(L){return{$$typeof:d,render:L}},re.isValidElement=G,re.lazy=function(L){return{$$typeof:S,_payload:{_status:-1,_result:L},_init:Y}},re.memo=function(L,tt){return{$$typeof:p,type:L,compare:tt===void 0?null:tt}},re.startTransition=function(L){var tt=P.T,xt={};P.T=xt;try{var bt=L(),Nt=P.S;Nt!==null&&Nt(xt,bt),typeof bt=="object"&&bt!==null&&typeof bt.then=="function"&&bt.then(H,vt)}catch(et){vt(et)}finally{tt!==null&&xt.types!==null&&(tt.types=xt.types),P.T=tt}},re.unstable_useCacheRefresh=function(){return P.H.useCacheRefresh()},re.use=function(L){return P.H.use(L)},re.useActionState=function(L,tt,xt){return P.H.useActionState(L,tt,xt)},re.useCallback=function(L,tt){return P.H.useCallback(L,tt)},re.useContext=function(L){return P.H.useContext(L)},re.useDebugValue=function(){},re.useDeferredValue=function(L,tt){return P.H.useDeferredValue(L,tt)},re.useEffect=function(L,tt){return P.H.useEffect(L,tt)},re.useEffectEvent=function(L){return P.H.useEffectEvent(L)},re.useId=function(){return P.H.useId()},re.useImperativeHandle=function(L,tt,xt){return P.H.useImperativeHandle(L,tt,xt)},re.useInsertionEffect=function(L,tt){return P.H.useInsertionEffect(L,tt)},re.useLayoutEffect=function(L,tt){return P.H.useLayoutEffect(L,tt)},re.useMemo=function(L,tt){return P.H.useMemo(L,tt)},re.useOptimistic=function(L,tt){return P.H.useOptimistic(L,tt)},re.useReducer=function(L,tt,xt){return P.H.useReducer(L,tt,xt)},re.useRef=function(L){return P.H.useRef(L)},re.useState=function(L){return P.H.useState(L)},re.useSyncExternalStore=function(L,tt,xt){return P.H.useSyncExternalStore(L,tt,xt)},re.useTransition=function(){return P.H.useTransition()},re.version="19.2.0",re}var $g;function rd(){return $g||($g=1,Of.exports=HS()),Of.exports}var pu=rd(),zf={exports:{}},vo={},Pf={exports:{}},Bf={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var t_;function GS(){return t_||(t_=1,(function(o){function e(N,Z){var Y=N.length;N.push(Z);t:for(;0<Y;){var vt=Y-1>>>1,yt=N[vt];if(0<l(yt,Z))N[vt]=Z,N[Y]=yt,Y=vt;else break t}}function i(N){return N.length===0?null:N[0]}function r(N){if(N.length===0)return null;var Z=N[0],Y=N.pop();if(Y!==Z){N[0]=Y;t:for(var vt=0,yt=N.length,L=yt>>>1;vt<L;){var tt=2*(vt+1)-1,xt=N[tt],bt=tt+1,Nt=N[bt];if(0>l(xt,Y))bt<yt&&0>l(Nt,xt)?(N[vt]=Nt,N[bt]=Y,vt=bt):(N[vt]=xt,N[tt]=Y,vt=tt);else if(bt<yt&&0>l(Nt,Y))N[vt]=Nt,N[bt]=Y,vt=bt;else break t}}return Z}function l(N,Z){var Y=N.sortIndex-Z.sortIndex;return Y!==0?Y:N.id-Z.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;o.unstable_now=function(){return c.now()}}else{var h=Date,d=h.now();o.unstable_now=function(){return h.now()-d}}var m=[],p=[],S=1,_=null,x=3,y=!1,A=!1,R=!1,M=!1,v=typeof setTimeout=="function"?setTimeout:null,I=typeof clearTimeout=="function"?clearTimeout:null,z=typeof setImmediate<"u"?setImmediate:null;function D(N){for(var Z=i(p);Z!==null;){if(Z.callback===null)r(p);else if(Z.startTime<=N)r(p),Z.sortIndex=Z.expirationTime,e(m,Z);else break;Z=i(p)}}function X(N){if(R=!1,D(N),!A)if(i(m)!==null)A=!0,H||(H=!0,nt());else{var Z=i(p);Z!==null&&ft(X,Z.startTime-N)}}var H=!1,P=-1,j=5,w=-1;function C(){return M?!0:!(o.unstable_now()-w<j)}function G(){if(M=!1,H){var N=o.unstable_now();w=N;var Z=!0;try{t:{A=!1,R&&(R=!1,I(P),P=-1),y=!0;var Y=x;try{e:{for(D(N),_=i(m);_!==null&&!(_.expirationTime>N&&C());){var vt=_.callback;if(typeof vt=="function"){_.callback=null,x=_.priorityLevel;var yt=vt(_.expirationTime<=N);if(N=o.unstable_now(),typeof yt=="function"){_.callback=yt,D(N),Z=!0;break e}_===i(m)&&r(m),D(N)}else r(m);_=i(m)}if(_!==null)Z=!0;else{var L=i(p);L!==null&&ft(X,L.startTime-N),Z=!1}}break t}finally{_=null,x=Y,y=!1}Z=void 0}}finally{Z?nt():H=!1}}}var nt;if(typeof z=="function")nt=function(){z(G)};else if(typeof MessageChannel<"u"){var ut=new MessageChannel,gt=ut.port2;ut.port1.onmessage=G,nt=function(){gt.postMessage(null)}}else nt=function(){v(G,0)};function ft(N,Z){P=v(function(){N(o.unstable_now())},Z)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(N){N.callback=null},o.unstable_forceFrameRate=function(N){0>N||125<N?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):j=0<N?Math.floor(1e3/N):5},o.unstable_getCurrentPriorityLevel=function(){return x},o.unstable_next=function(N){switch(x){case 1:case 2:case 3:var Z=3;break;default:Z=x}var Y=x;x=Z;try{return N()}finally{x=Y}},o.unstable_requestPaint=function(){M=!0},o.unstable_runWithPriority=function(N,Z){switch(N){case 1:case 2:case 3:case 4:case 5:break;default:N=3}var Y=x;x=N;try{return Z()}finally{x=Y}},o.unstable_scheduleCallback=function(N,Z,Y){var vt=o.unstable_now();switch(typeof Y=="object"&&Y!==null?(Y=Y.delay,Y=typeof Y=="number"&&0<Y?vt+Y:vt):Y=vt,N){case 1:var yt=-1;break;case 2:yt=250;break;case 5:yt=1073741823;break;case 4:yt=1e4;break;default:yt=5e3}return yt=Y+yt,N={id:S++,callback:Z,priorityLevel:N,startTime:Y,expirationTime:yt,sortIndex:-1},Y>vt?(N.sortIndex=Y,e(p,N),i(m)===null&&N===i(p)&&(R?(I(P),P=-1):R=!0,ft(X,Y-vt))):(N.sortIndex=yt,e(m,N),A||y||(A=!0,H||(H=!0,nt()))),N},o.unstable_shouldYield=C,o.unstable_wrapCallback=function(N){var Z=x;return function(){var Y=x;x=Z;try{return N.apply(this,arguments)}finally{x=Y}}}})(Bf)),Bf}var e_;function VS(){return e_||(e_=1,Pf.exports=GS()),Pf.exports}var If={exports:{}},En={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var n_;function XS(){if(n_)return En;n_=1;var o=rd();function e(m){var p="https://react.dev/errors/"+m;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var S=2;S<arguments.length;S++)p+="&args[]="+encodeURIComponent(arguments[S])}return"Minified React error #"+m+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var r={d:{f:i,r:function(){throw Error(e(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function c(m,p,S){var _=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:_==null?null:""+_,children:m,containerInfo:p,implementation:S}}var h=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function d(m,p){if(m==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return En.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,En.createPortal=function(m,p){var S=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(e(299));return c(m,p,null,S)},En.flushSync=function(m){var p=h.T,S=r.p;try{if(h.T=null,r.p=2,m)return m()}finally{h.T=p,r.p=S,r.d.f()}},En.preconnect=function(m,p){typeof m=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,r.d.C(m,p))},En.prefetchDNS=function(m){typeof m=="string"&&r.d.D(m)},En.preinit=function(m,p){if(typeof m=="string"&&p&&typeof p.as=="string"){var S=p.as,_=d(S,p.crossOrigin),x=typeof p.integrity=="string"?p.integrity:void 0,y=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;S==="style"?r.d.S(m,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:_,integrity:x,fetchPriority:y}):S==="script"&&r.d.X(m,{crossOrigin:_,integrity:x,fetchPriority:y,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},En.preinitModule=function(m,p){if(typeof m=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var S=d(p.as,p.crossOrigin);r.d.M(m,{crossOrigin:S,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&r.d.M(m)},En.preload=function(m,p){if(typeof m=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var S=p.as,_=d(S,p.crossOrigin);r.d.L(m,S,{crossOrigin:_,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},En.preloadModule=function(m,p){if(typeof m=="string")if(p){var S=d(p.as,p.crossOrigin);r.d.m(m,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:S,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else r.d.m(m)},En.requestFormReset=function(m){r.d.r(m)},En.unstable_batchedUpdates=function(m,p){return m(p)},En.useFormState=function(m,p,S){return h.H.useFormState(m,p,S)},En.useFormStatus=function(){return h.H.useHostTransitionStatus()},En.version="19.2.0",En}var i_;function kS(){if(i_)return If.exports;i_=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),If.exports=XS(),If.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var a_;function WS(){if(a_)return vo;a_=1;var o=VS(),e=rd(),i=kS();function r(t){var n="https://react.dev/errors/"+t;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function c(t){var n=t,a=t;if(t.alternate)for(;n.return;)n=n.return;else{t=n;do n=t,(n.flags&4098)!==0&&(a=n.return),t=n.return;while(t)}return n.tag===3?a:null}function h(t){if(t.tag===13){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function d(t){if(t.tag===31){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function m(t){if(c(t)!==t)throw Error(r(188))}function p(t){var n=t.alternate;if(!n){if(n=c(t),n===null)throw Error(r(188));return n!==t?null:t}for(var a=t,s=n;;){var u=a.return;if(u===null)break;var f=u.alternate;if(f===null){if(s=u.return,s!==null){a=s;continue}break}if(u.child===f.child){for(f=u.child;f;){if(f===a)return m(u),t;if(f===s)return m(u),n;f=f.sibling}throw Error(r(188))}if(a.return!==s.return)a=u,s=f;else{for(var g=!1,T=u.child;T;){if(T===a){g=!0,a=u,s=f;break}if(T===s){g=!0,s=u,a=f;break}T=T.sibling}if(!g){for(T=f.child;T;){if(T===a){g=!0,a=f,s=u;break}if(T===s){g=!0,s=f,a=u;break}T=T.sibling}if(!g)throw Error(r(189))}}if(a.alternate!==s)throw Error(r(190))}if(a.tag!==3)throw Error(r(188));return a.stateNode.current===a?t:n}function S(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t;for(t=t.child;t!==null;){if(n=S(t),n!==null)return n;t=t.sibling}return null}var _=Object.assign,x=Symbol.for("react.element"),y=Symbol.for("react.transitional.element"),A=Symbol.for("react.portal"),R=Symbol.for("react.fragment"),M=Symbol.for("react.strict_mode"),v=Symbol.for("react.profiler"),I=Symbol.for("react.consumer"),z=Symbol.for("react.context"),D=Symbol.for("react.forward_ref"),X=Symbol.for("react.suspense"),H=Symbol.for("react.suspense_list"),P=Symbol.for("react.memo"),j=Symbol.for("react.lazy"),w=Symbol.for("react.activity"),C=Symbol.for("react.memo_cache_sentinel"),G=Symbol.iterator;function nt(t){return t===null||typeof t!="object"?null:(t=G&&t[G]||t["@@iterator"],typeof t=="function"?t:null)}var ut=Symbol.for("react.client.reference");function gt(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===ut?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case R:return"Fragment";case v:return"Profiler";case M:return"StrictMode";case X:return"Suspense";case H:return"SuspenseList";case w:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case A:return"Portal";case z:return t.displayName||"Context";case I:return(t._context.displayName||"Context")+".Consumer";case D:var n=t.render;return t=t.displayName,t||(t=n.displayName||n.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case P:return n=t.displayName||null,n!==null?n:gt(t.type)||"Memo";case j:n=t._payload,t=t._init;try{return gt(t(n))}catch{}}return null}var ft=Array.isArray,N=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Z=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Y={pending:!1,data:null,method:null,action:null},vt=[],yt=-1;function L(t){return{current:t}}function tt(t){0>yt||(t.current=vt[yt],vt[yt]=null,yt--)}function xt(t,n){yt++,vt[yt]=t.current,t.current=n}var bt=L(null),Nt=L(null),et=L(null),ot=L(null);function wt(t,n){switch(xt(et,n),xt(Nt,t),xt(bt,null),n.nodeType){case 9:case 11:t=(t=n.documentElement)&&(t=t.namespaceURI)?Sg(t):0;break;default:if(t=n.tagName,n=n.namespaceURI)n=Sg(n),t=xg(n,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}tt(bt),xt(bt,t)}function Bt(){tt(bt),tt(Nt),tt(et)}function Xt(t){t.memoizedState!==null&&xt(ot,t);var n=bt.current,a=xg(n,t.type);n!==a&&(xt(Nt,t),xt(bt,a))}function fe(t){Nt.current===t&&(tt(bt),tt(Nt)),ot.current===t&&(tt(ot),ho._currentValue=Y)}var tn,B;function Ee(t){if(tn===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);tn=n&&n[1]||"",B=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+tn+t+B}var ne=!1;function $t(t,n){if(!t||ne)return"";ne=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var s={DetermineComponentFrameRoot:function(){try{if(n){var pt=function(){throw Error()};if(Object.defineProperty(pt.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(pt,[])}catch(rt){var $=rt}Reflect.construct(t,[],pt)}else{try{pt.call()}catch(rt){$=rt}t.call(pt.prototype)}}else{try{throw Error()}catch(rt){$=rt}(pt=t())&&typeof pt.catch=="function"&&pt.catch(function(){})}}catch(rt){if(rt&&$&&typeof rt.stack=="string")return[rt.stack,$.stack]}return[null,null]}};s.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(s.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(s.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=s.DetermineComponentFrameRoot(),g=f[0],T=f[1];if(g&&T){var O=g.split(`
`),Q=T.split(`
`);for(u=s=0;s<O.length&&!O[s].includes("DetermineComponentFrameRoot");)s++;for(;u<Q.length&&!Q[u].includes("DetermineComponentFrameRoot");)u++;if(s===O.length||u===Q.length)for(s=O.length-1,u=Q.length-1;1<=s&&0<=u&&O[s]!==Q[u];)u--;for(;1<=s&&0<=u;s--,u--)if(O[s]!==Q[u]){if(s!==1||u!==1)do if(s--,u--,0>u||O[s]!==Q[u]){var ct=`
`+O[s].replace(" at new "," at ");return t.displayName&&ct.includes("<anonymous>")&&(ct=ct.replace("<anonymous>",t.displayName)),ct}while(1<=s&&0<=u);break}}}finally{ne=!1,Error.prepareStackTrace=a}return(a=t?t.displayName||t.name:"")?Ee(a):""}function kt(t,n){switch(t.tag){case 26:case 27:case 5:return Ee(t.type);case 16:return Ee("Lazy");case 13:return t.child!==n&&n!==null?Ee("Suspense Fallback"):Ee("Suspense");case 19:return Ee("SuspenseList");case 0:case 15:return $t(t.type,!1);case 11:return $t(t.type.render,!1);case 1:return $t(t.type,!0);case 31:return Ee("Activity");default:return""}}function Fe(t){try{var n="",a=null;do n+=kt(t,a),a=t,t=t.return;while(t);return n}catch(s){return`
Error generating stack: `+s.message+`
`+s.stack}}var Vt=Object.prototype.hasOwnProperty,ae=o.unstable_scheduleCallback,Ye=o.unstable_cancelCallback,qe=o.unstable_shouldYield,U=o.unstable_requestPaint,E=o.unstable_now,J=o.unstable_getCurrentPriorityLevel,ht=o.unstable_ImmediatePriority,St=o.unstable_UserBlockingPriority,lt=o.unstable_NormalPriority,Zt=o.unstable_LowPriority,At=o.unstable_IdlePriority,qt=o.log,Yt=o.unstable_setDisableYieldValue,Et=null,Rt=null;function jt(t){if(typeof qt=="function"&&Yt(t),Rt&&typeof Rt.setStrictMode=="function")try{Rt.setStrictMode(Et,t)}catch{}}var zt=Math.clz32?Math.clz32:V,Dt=Math.log,se=Math.LN2;function V(t){return t>>>=0,t===0?32:31-(Dt(t)/se|0)|0}var Tt=256,Ct=262144,Pt=4194304;function Mt(t){var n=t&42;if(n!==0)return n;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function mt(t,n,a){var s=t.pendingLanes;if(s===0)return 0;var u=0,f=t.suspendedLanes,g=t.pingedLanes;t=t.warmLanes;var T=s&134217727;return T!==0?(s=T&~f,s!==0?u=Mt(s):(g&=T,g!==0?u=Mt(g):a||(a=T&~t,a!==0&&(u=Mt(a))))):(T=s&~f,T!==0?u=Mt(T):g!==0?u=Mt(g):a||(a=s&~t,a!==0&&(u=Mt(a)))),u===0?0:n!==0&&n!==u&&(n&f)===0&&(f=u&-u,a=n&-n,f>=a||f===32&&(a&4194048)!==0)?n:u}function It(t,n){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&n)===0}function ie(t,n){switch(t){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function De(){var t=Pt;return Pt<<=1,(Pt&62914560)===0&&(Pt=4194304),t}function Me(t){for(var n=[],a=0;31>a;a++)n.push(t);return n}function An(t,n){t.pendingLanes|=n,n!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function Qn(t,n,a,s,u,f){var g=t.pendingLanes;t.pendingLanes=a,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=a,t.entangledLanes&=a,t.errorRecoveryDisabledLanes&=a,t.shellSuspendCounter=0;var T=t.entanglements,O=t.expirationTimes,Q=t.hiddenUpdates;for(a=g&~a;0<a;){var ct=31-zt(a),pt=1<<ct;T[ct]=0,O[ct]=-1;var $=Q[ct];if($!==null)for(Q[ct]=null,ct=0;ct<$.length;ct++){var rt=$[ct];rt!==null&&(rt.lane&=-536870913)}a&=~pt}s!==0&&As(t,s,0),f!==0&&u===0&&t.tag!==0&&(t.suspendedLanes|=f&~(g&~n))}function As(t,n,a){t.pendingLanes|=n,t.suspendedLanes&=~n;var s=31-zt(n);t.entangledLanes|=n,t.entanglements[s]=t.entanglements[s]|1073741824|a&261930}function vi(t,n){var a=t.entangledLanes|=n;for(t=t.entanglements;a;){var s=31-zt(a),u=1<<s;u&n|t[s]&n&&(t[s]|=n),a&=~u}}function xr(t,n){var a=n&-n;return a=(a&42)!==0?1:Mr(a),(a&(t.suspendedLanes|n))!==0?0:a}function Mr(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function yr(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function Fa(){var t=Z.p;return t!==0?t:(t=window.event,t===void 0?32:Xg(t.type))}function Rs(t,n){var a=Z.p;try{return Z.p=t,n()}finally{Z.p=a}}var Hn=Math.random().toString(36).slice(2),en="__reactFiber$"+Hn,gn="__reactProps$"+Hn,ra="__reactContainer$"+Hn,Cs="__reactEvents$"+Hn,Au="__reactListeners$"+Hn,Ru="__reactHandles$"+Hn,Po="__reactResources$"+Hn,Ha="__reactMarker$"+Hn;function b(t){delete t[en],delete t[gn],delete t[Cs],delete t[Au],delete t[Ru]}function k(t){var n=t[en];if(n)return n;for(var a=t.parentNode;a;){if(n=a[ra]||a[en]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(t=Rg(t);t!==null;){if(a=t[en])return a;t=Rg(t)}return n}t=a,a=t.parentNode}return null}function it(t){if(t=t[en]||t[ra]){var n=t.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return t}return null}function at(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t.stateNode;throw Error(r(33))}function q(t){var n=t[Po];return n||(n=t[Po]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function _t(t){t[Ha]=!0}var Ut=new Set,Ht={};function Ot(t,n){Kt(t,n),Kt(t+"Capture",n)}function Kt(t,n){for(Ht[t]=n,t=0;t<n.length;t++)Ut.add(n[t])}var ee=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Qt={},he={};function Ce(t){return Vt.call(he,t)?!0:Vt.call(Qt,t)?!1:ee.test(t)?he[t]=!0:(Qt[t]=!0,!1)}function He(t,n,a){if(Ce(n))if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":t.removeAttribute(n);return;case"boolean":var s=n.toLowerCase().slice(0,5);if(s!=="data-"&&s!=="aria-"){t.removeAttribute(n);return}}t.setAttribute(n,""+a)}}function we(t,n,a){if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttribute(n,""+a)}}function de(t,n,a,s){if(s===null)t.removeAttribute(a);else{switch(typeof s){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttributeNS(n,a,""+s)}}function Gt(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Ve(t){var n=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function ye(t,n,a){var s=Object.getOwnPropertyDescriptor(t.constructor.prototype,n);if(!t.hasOwnProperty(n)&&typeof s<"u"&&typeof s.get=="function"&&typeof s.set=="function"){var u=s.get,f=s.set;return Object.defineProperty(t,n,{configurable:!0,get:function(){return u.call(this)},set:function(g){a=""+g,f.call(this,g)}}),Object.defineProperty(t,n,{enumerable:s.enumerable}),{getValue:function(){return a},setValue:function(g){a=""+g},stopTracking:function(){t._valueTracker=null,delete t[n]}}}}function _n(t){if(!t._valueTracker){var n=Ve(t)?"checked":"value";t._valueTracker=ye(t,n,""+t[n])}}function wi(t){if(!t)return!1;var n=t._valueTracker;if(!n)return!0;var a=n.getValue(),s="";return t&&(s=Ve(t)?t.checked?"true":"false":t.value),t=s,t!==a?(n.setValue(t),!0):!1}function dn(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var Ga=/[\n"\\]/g;function ge(t){return t.replace(Ga,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function yn(t,n,a,s,u,f,g,T){t.name="",g!=null&&typeof g!="function"&&typeof g!="symbol"&&typeof g!="boolean"?t.type=g:t.removeAttribute("type"),n!=null?g==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+Gt(n)):t.value!==""+Gt(n)&&(t.value=""+Gt(n)):g!=="submit"&&g!=="reset"||t.removeAttribute("value"),n!=null?ln(t,g,Gt(n)):a!=null?ln(t,g,Gt(a)):s!=null&&t.removeAttribute("value"),u==null&&f!=null&&(t.defaultChecked=!!f),u!=null&&(t.checked=u&&typeof u!="function"&&typeof u!="symbol"),T!=null&&typeof T!="function"&&typeof T!="symbol"&&typeof T!="boolean"?t.name=""+Gt(T):t.removeAttribute("name")}function Rn(t,n,a,s,u,f,g,T){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(t.type=f),n!=null||a!=null){if(!(f!=="submit"&&f!=="reset"||n!=null)){_n(t);return}a=a!=null?""+Gt(a):"",n=n!=null?""+Gt(n):a,T||n===t.value||(t.value=n),t.defaultValue=n}s=s??u,s=typeof s!="function"&&typeof s!="symbol"&&!!s,t.checked=T?t.checked:!!s,t.defaultChecked=!!s,g!=null&&typeof g!="function"&&typeof g!="symbol"&&typeof g!="boolean"&&(t.name=g),_n(t)}function ln(t,n,a){n==="number"&&dn(t.ownerDocument)===t||t.defaultValue===""+a||(t.defaultValue=""+a)}function Ke(t,n,a,s){if(t=t.options,n){n={};for(var u=0;u<a.length;u++)n["$"+a[u]]=!0;for(a=0;a<t.length;a++)u=n.hasOwnProperty("$"+t[a].value),t[a].selected!==u&&(t[a].selected=u),u&&s&&(t[a].defaultSelected=!0)}else{for(a=""+Gt(a),n=null,u=0;u<t.length;u++){if(t[u].value===a){t[u].selected=!0,s&&(t[u].defaultSelected=!0);return}n!==null||t[u].disabled||(n=t[u])}n!==null&&(n.selected=!0)}}function Er(t,n,a){if(n!=null&&(n=""+Gt(n),n!==t.value&&(t.value=n),a==null)){t.defaultValue!==n&&(t.defaultValue=n);return}t.defaultValue=a!=null?""+Gt(a):""}function Si(t,n,a,s){if(n==null){if(s!=null){if(a!=null)throw Error(r(92));if(ft(s)){if(1<s.length)throw Error(r(93));s=s[0]}a=s}a==null&&(a=""),n=a}a=Gt(n),t.defaultValue=a,s=t.textContent,s===a&&s!==""&&s!==null&&(t.value=s),_n(t)}function Tr(t,n){if(n){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=n;return}}t.textContent=n}var N0=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function gd(t,n,a){var s=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?s?t.setProperty(n,""):n==="float"?t.cssFloat="":t[n]="":s?t.setProperty(n,a):typeof a!="number"||a===0||N0.has(n)?n==="float"?t.cssFloat=a:t[n]=(""+a).trim():t[n]=a+"px"}function _d(t,n,a){if(n!=null&&typeof n!="object")throw Error(r(62));if(t=t.style,a!=null){for(var s in a)!a.hasOwnProperty(s)||n!=null&&n.hasOwnProperty(s)||(s.indexOf("--")===0?t.setProperty(s,""):s==="float"?t.cssFloat="":t[s]="");for(var u in n)s=n[u],n.hasOwnProperty(u)&&a[u]!==s&&gd(t,u,s)}else for(var f in n)n.hasOwnProperty(f)&&gd(t,f,n[f])}function Cu(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var O0=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),z0=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Bo(t){return z0.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function Di(){}var wu=null;function Du(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var br=null,Ar=null;function vd(t){var n=it(t);if(n&&(t=n.stateNode)){var a=t[gn]||null;t:switch(t=n.stateNode,n.type){case"input":if(yn(t,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+ge(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var s=a[n];if(s!==t&&s.form===t.form){var u=s[gn]||null;if(!u)throw Error(r(90));yn(s,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(n=0;n<a.length;n++)s=a[n],s.form===t.form&&wi(s)}break t;case"textarea":Er(t,a.value,a.defaultValue);break t;case"select":n=a.value,n!=null&&Ke(t,!!a.multiple,n,!1)}}}var Uu=!1;function Sd(t,n,a){if(Uu)return t(n,a);Uu=!0;try{var s=t(n);return s}finally{if(Uu=!1,(br!==null||Ar!==null)&&(Tl(),br&&(n=br,t=Ar,Ar=br=null,vd(n),t)))for(n=0;n<t.length;n++)vd(t[n])}}function ws(t,n){var a=t.stateNode;if(a===null)return null;var s=a[gn]||null;if(s===null)return null;a=s[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(s=!s.disabled)||(t=t.type,s=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!s;break t;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(r(231,n,typeof a));return a}var Ui=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Lu=!1;if(Ui)try{var Ds={};Object.defineProperty(Ds,"passive",{get:function(){Lu=!0}}),window.addEventListener("test",Ds,Ds),window.removeEventListener("test",Ds,Ds)}catch{Lu=!1}var sa=null,Nu=null,Io=null;function xd(){if(Io)return Io;var t,n=Nu,a=n.length,s,u="value"in sa?sa.value:sa.textContent,f=u.length;for(t=0;t<a&&n[t]===u[t];t++);var g=a-t;for(s=1;s<=g&&n[a-s]===u[f-s];s++);return Io=u.slice(t,1<s?1-s:void 0)}function Fo(t){var n=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&n===13&&(t=13)):t=n,t===10&&(t=13),32<=t||t===13?t:0}function Ho(){return!0}function Md(){return!1}function Un(t){function n(a,s,u,f,g){this._reactName=a,this._targetInst=u,this.type=s,this.nativeEvent=f,this.target=g,this.currentTarget=null;for(var T in t)t.hasOwnProperty(T)&&(a=t[T],this[T]=a?a(f):f[T]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?Ho:Md,this.isPropagationStopped=Md,this}return _(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Ho)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Ho)},persist:function(){},isPersistent:Ho}),n}var Va={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Go=Un(Va),Us=_({},Va,{view:0,detail:0}),P0=Un(Us),Ou,zu,Ls,Vo=_({},Us,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Bu,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Ls&&(Ls&&t.type==="mousemove"?(Ou=t.screenX-Ls.screenX,zu=t.screenY-Ls.screenY):zu=Ou=0,Ls=t),Ou)},movementY:function(t){return"movementY"in t?t.movementY:zu}}),yd=Un(Vo),B0=_({},Vo,{dataTransfer:0}),I0=Un(B0),F0=_({},Us,{relatedTarget:0}),Pu=Un(F0),H0=_({},Va,{animationName:0,elapsedTime:0,pseudoElement:0}),G0=Un(H0),V0=_({},Va,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),X0=Un(V0),k0=_({},Va,{data:0}),Ed=Un(k0),W0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},q0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Y0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Z0(t){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(t):(t=Y0[t])?!!n[t]:!1}function Bu(){return Z0}var j0=_({},Us,{key:function(t){if(t.key){var n=W0[t.key]||t.key;if(n!=="Unidentified")return n}return t.type==="keypress"?(t=Fo(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?q0[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Bu,charCode:function(t){return t.type==="keypress"?Fo(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Fo(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),K0=Un(j0),Q0=_({},Vo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Td=Un(Q0),J0=_({},Us,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Bu}),$0=Un(J0),tv=_({},Va,{propertyName:0,elapsedTime:0,pseudoElement:0}),ev=Un(tv),nv=_({},Vo,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),iv=Un(nv),av=_({},Va,{newState:0,oldState:0}),rv=Un(av),sv=[9,13,27,32],Iu=Ui&&"CompositionEvent"in window,Ns=null;Ui&&"documentMode"in document&&(Ns=document.documentMode);var ov=Ui&&"TextEvent"in window&&!Ns,bd=Ui&&(!Iu||Ns&&8<Ns&&11>=Ns),Ad=" ",Rd=!1;function Cd(t,n){switch(t){case"keyup":return sv.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function wd(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Rr=!1;function lv(t,n){switch(t){case"compositionend":return wd(n);case"keypress":return n.which!==32?null:(Rd=!0,Ad);case"textInput":return t=n.data,t===Ad&&Rd?null:t;default:return null}}function uv(t,n){if(Rr)return t==="compositionend"||!Iu&&Cd(t,n)?(t=xd(),Io=Nu=sa=null,Rr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return bd&&n.locale!=="ko"?null:n.data;default:return null}}var cv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Dd(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n==="input"?!!cv[t.type]:n==="textarea"}function Ud(t,n,a,s){br?Ar?Ar.push(s):Ar=[s]:br=s,n=Ul(n,"onChange"),0<n.length&&(a=new Go("onChange","change",null,a,s),t.push({event:a,listeners:n}))}var Os=null,zs=null;function fv(t){dg(t,0)}function Xo(t){var n=at(t);if(wi(n))return t}function Ld(t,n){if(t==="change")return n}var Nd=!1;if(Ui){var Fu;if(Ui){var Hu="oninput"in document;if(!Hu){var Od=document.createElement("div");Od.setAttribute("oninput","return;"),Hu=typeof Od.oninput=="function"}Fu=Hu}else Fu=!1;Nd=Fu&&(!document.documentMode||9<document.documentMode)}function zd(){Os&&(Os.detachEvent("onpropertychange",Pd),zs=Os=null)}function Pd(t){if(t.propertyName==="value"&&Xo(zs)){var n=[];Ud(n,zs,t,Du(t)),Sd(fv,n)}}function hv(t,n,a){t==="focusin"?(zd(),Os=n,zs=a,Os.attachEvent("onpropertychange",Pd)):t==="focusout"&&zd()}function dv(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Xo(zs)}function pv(t,n){if(t==="click")return Xo(n)}function mv(t,n){if(t==="input"||t==="change")return Xo(n)}function gv(t,n){return t===n&&(t!==0||1/t===1/n)||t!==t&&n!==n}var Gn=typeof Object.is=="function"?Object.is:gv;function Ps(t,n){if(Gn(t,n))return!0;if(typeof t!="object"||t===null||typeof n!="object"||n===null)return!1;var a=Object.keys(t),s=Object.keys(n);if(a.length!==s.length)return!1;for(s=0;s<a.length;s++){var u=a[s];if(!Vt.call(n,u)||!Gn(t[u],n[u]))return!1}return!0}function Bd(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Id(t,n){var a=Bd(t);t=0;for(var s;a;){if(a.nodeType===3){if(s=t+a.textContent.length,t<=n&&s>=n)return{node:a,offset:n-t};t=s}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=Bd(a)}}function Fd(t,n){return t&&n?t===n?!0:t&&t.nodeType===3?!1:n&&n.nodeType===3?Fd(t,n.parentNode):"contains"in t?t.contains(n):t.compareDocumentPosition?!!(t.compareDocumentPosition(n)&16):!1:!1}function Hd(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var n=dn(t.document);n instanceof t.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)t=n.contentWindow;else break;n=dn(t.document)}return n}function Gu(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n&&(n==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||n==="textarea"||t.contentEditable==="true")}var _v=Ui&&"documentMode"in document&&11>=document.documentMode,Cr=null,Vu=null,Bs=null,Xu=!1;function Gd(t,n,a){var s=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Xu||Cr==null||Cr!==dn(s)||(s=Cr,"selectionStart"in s&&Gu(s)?s={start:s.selectionStart,end:s.selectionEnd}:(s=(s.ownerDocument&&s.ownerDocument.defaultView||window).getSelection(),s={anchorNode:s.anchorNode,anchorOffset:s.anchorOffset,focusNode:s.focusNode,focusOffset:s.focusOffset}),Bs&&Ps(Bs,s)||(Bs=s,s=Ul(Vu,"onSelect"),0<s.length&&(n=new Go("onSelect","select",null,n,a),t.push({event:n,listeners:s}),n.target=Cr)))}function Xa(t,n){var a={};return a[t.toLowerCase()]=n.toLowerCase(),a["Webkit"+t]="webkit"+n,a["Moz"+t]="moz"+n,a}var wr={animationend:Xa("Animation","AnimationEnd"),animationiteration:Xa("Animation","AnimationIteration"),animationstart:Xa("Animation","AnimationStart"),transitionrun:Xa("Transition","TransitionRun"),transitionstart:Xa("Transition","TransitionStart"),transitioncancel:Xa("Transition","TransitionCancel"),transitionend:Xa("Transition","TransitionEnd")},ku={},Vd={};Ui&&(Vd=document.createElement("div").style,"AnimationEvent"in window||(delete wr.animationend.animation,delete wr.animationiteration.animation,delete wr.animationstart.animation),"TransitionEvent"in window||delete wr.transitionend.transition);function ka(t){if(ku[t])return ku[t];if(!wr[t])return t;var n=wr[t],a;for(a in n)if(n.hasOwnProperty(a)&&a in Vd)return ku[t]=n[a];return t}var Xd=ka("animationend"),kd=ka("animationiteration"),Wd=ka("animationstart"),vv=ka("transitionrun"),Sv=ka("transitionstart"),xv=ka("transitioncancel"),qd=ka("transitionend"),Yd=new Map,Wu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Wu.push("scrollEnd");function ci(t,n){Yd.set(t,n),Ot(n,[t])}var ko=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},Jn=[],Dr=0,qu=0;function Wo(){for(var t=Dr,n=qu=Dr=0;n<t;){var a=Jn[n];Jn[n++]=null;var s=Jn[n];Jn[n++]=null;var u=Jn[n];Jn[n++]=null;var f=Jn[n];if(Jn[n++]=null,s!==null&&u!==null){var g=s.pending;g===null?u.next=u:(u.next=g.next,g.next=u),s.pending=u}f!==0&&Zd(a,u,f)}}function qo(t,n,a,s){Jn[Dr++]=t,Jn[Dr++]=n,Jn[Dr++]=a,Jn[Dr++]=s,qu|=s,t.lanes|=s,t=t.alternate,t!==null&&(t.lanes|=s)}function Yu(t,n,a,s){return qo(t,n,a,s),Yo(t)}function Wa(t,n){return qo(t,null,null,n),Yo(t)}function Zd(t,n,a){t.lanes|=a;var s=t.alternate;s!==null&&(s.lanes|=a);for(var u=!1,f=t.return;f!==null;)f.childLanes|=a,s=f.alternate,s!==null&&(s.childLanes|=a),f.tag===22&&(t=f.stateNode,t===null||t._visibility&1||(u=!0)),t=f,f=f.return;return t.tag===3?(f=t.stateNode,u&&n!==null&&(u=31-zt(a),t=f.hiddenUpdates,s=t[u],s===null?t[u]=[n]:s.push(n),n.lane=a|536870912),f):null}function Yo(t){if(50<ro)throw ro=0,nf=null,Error(r(185));for(var n=t.return;n!==null;)t=n,n=t.return;return t.tag===3?t.stateNode:null}var Ur={};function Mv(t,n,a,s){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=s,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Vn(t,n,a,s){return new Mv(t,n,a,s)}function Zu(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Li(t,n){var a=t.alternate;return a===null?(a=Vn(t.tag,n,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=n,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&65011712,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,n=t.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a.refCleanup=t.refCleanup,a}function jd(t,n){t.flags&=65011714;var a=t.alternate;return a===null?(t.childLanes=0,t.lanes=n,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=a.childLanes,t.lanes=a.lanes,t.child=a.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=a.memoizedProps,t.memoizedState=a.memoizedState,t.updateQueue=a.updateQueue,t.type=a.type,n=a.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t}function Zo(t,n,a,s,u,f){var g=0;if(s=t,typeof t=="function")Zu(t)&&(g=1);else if(typeof t=="string")g=AS(t,a,bt.current)?26:t==="html"||t==="head"||t==="body"?27:5;else t:switch(t){case w:return t=Vn(31,a,n,u),t.elementType=w,t.lanes=f,t;case R:return qa(a.children,u,f,n);case M:g=8,u|=24;break;case v:return t=Vn(12,a,n,u|2),t.elementType=v,t.lanes=f,t;case X:return t=Vn(13,a,n,u),t.elementType=X,t.lanes=f,t;case H:return t=Vn(19,a,n,u),t.elementType=H,t.lanes=f,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case z:g=10;break t;case I:g=9;break t;case D:g=11;break t;case P:g=14;break t;case j:g=16,s=null;break t}g=29,a=Error(r(130,t===null?"null":typeof t,"")),s=null}return n=Vn(g,a,n,u),n.elementType=t,n.type=s,n.lanes=f,n}function qa(t,n,a,s){return t=Vn(7,t,s,n),t.lanes=a,t}function ju(t,n,a){return t=Vn(6,t,null,n),t.lanes=a,t}function Kd(t){var n=Vn(18,null,null,0);return n.stateNode=t,n}function Ku(t,n,a){return n=Vn(4,t.children!==null?t.children:[],t.key,n),n.lanes=a,n.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},n}var Qd=new WeakMap;function $n(t,n){if(typeof t=="object"&&t!==null){var a=Qd.get(t);return a!==void 0?a:(n={value:t,source:n,stack:Fe(n)},Qd.set(t,n),n)}return{value:t,source:n,stack:Fe(n)}}var Lr=[],Nr=0,jo=null,Is=0,ti=[],ei=0,oa=null,xi=1,Mi="";function Ni(t,n){Lr[Nr++]=Is,Lr[Nr++]=jo,jo=t,Is=n}function Jd(t,n,a){ti[ei++]=xi,ti[ei++]=Mi,ti[ei++]=oa,oa=t;var s=xi;t=Mi;var u=32-zt(s)-1;s&=~(1<<u),a+=1;var f=32-zt(n)+u;if(30<f){var g=u-u%5;f=(s&(1<<g)-1).toString(32),s>>=g,u-=g,xi=1<<32-zt(n)+u|a<<u|s,Mi=f+t}else xi=1<<f|a<<u|s,Mi=t}function Qu(t){t.return!==null&&(Ni(t,1),Jd(t,1,0))}function Ju(t){for(;t===jo;)jo=Lr[--Nr],Lr[Nr]=null,Is=Lr[--Nr],Lr[Nr]=null;for(;t===oa;)oa=ti[--ei],ti[ei]=null,Mi=ti[--ei],ti[ei]=null,xi=ti[--ei],ti[ei]=null}function $d(t,n){ti[ei++]=xi,ti[ei++]=Mi,ti[ei++]=oa,xi=n.id,Mi=n.overflow,oa=t}var vn=null,Xe=null,Se=!1,la=null,ni=!1,$u=Error(r(519));function ua(t){var n=Error(r(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Fs($n(n,t)),$u}function tp(t){var n=t.stateNode,a=t.type,s=t.memoizedProps;switch(n[en]=t,n[gn]=s,a){case"dialog":me("cancel",n),me("close",n);break;case"iframe":case"object":case"embed":me("load",n);break;case"video":case"audio":for(a=0;a<oo.length;a++)me(oo[a],n);break;case"source":me("error",n);break;case"img":case"image":case"link":me("error",n),me("load",n);break;case"details":me("toggle",n);break;case"input":me("invalid",n),Rn(n,s.value,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name,!0);break;case"select":me("invalid",n);break;case"textarea":me("invalid",n),Si(n,s.value,s.defaultValue,s.children)}a=s.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||s.suppressHydrationWarning===!0||_g(n.textContent,a)?(s.popover!=null&&(me("beforetoggle",n),me("toggle",n)),s.onScroll!=null&&me("scroll",n),s.onScrollEnd!=null&&me("scrollend",n),s.onClick!=null&&(n.onclick=Di),n=!0):n=!1,n||ua(t,!0)}function ep(t){for(vn=t.return;vn;)switch(vn.tag){case 5:case 31:case 13:ni=!1;return;case 27:case 3:ni=!0;return;default:vn=vn.return}}function Or(t){if(t!==vn)return!1;if(!Se)return ep(t),Se=!0,!1;var n=t.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=t.type,a=!(a!=="form"&&a!=="button")||vf(t.type,t.memoizedProps)),a=!a),a&&Xe&&ua(t),ep(t),n===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));Xe=Ag(t)}else if(n===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));Xe=Ag(t)}else n===27?(n=Xe,Ea(t.type)?(t=Ef,Ef=null,Xe=t):Xe=n):Xe=vn?ai(t.stateNode.nextSibling):null;return!0}function Ya(){Xe=vn=null,Se=!1}function tc(){var t=la;return t!==null&&(zn===null?zn=t:zn.push.apply(zn,t),la=null),t}function Fs(t){la===null?la=[t]:la.push(t)}var ec=L(null),Za=null,Oi=null;function ca(t,n,a){xt(ec,n._currentValue),n._currentValue=a}function zi(t){t._currentValue=ec.current,tt(ec)}function nc(t,n,a){for(;t!==null;){var s=t.alternate;if((t.childLanes&n)!==n?(t.childLanes|=n,s!==null&&(s.childLanes|=n)):s!==null&&(s.childLanes&n)!==n&&(s.childLanes|=n),t===a)break;t=t.return}}function ic(t,n,a,s){var u=t.child;for(u!==null&&(u.return=t);u!==null;){var f=u.dependencies;if(f!==null){var g=u.child;f=f.firstContext;t:for(;f!==null;){var T=f;f=u;for(var O=0;O<n.length;O++)if(T.context===n[O]){f.lanes|=a,T=f.alternate,T!==null&&(T.lanes|=a),nc(f.return,a,t),s||(g=null);break t}f=T.next}}else if(u.tag===18){if(g=u.return,g===null)throw Error(r(341));g.lanes|=a,f=g.alternate,f!==null&&(f.lanes|=a),nc(g,a,t),g=null}else g=u.child;if(g!==null)g.return=u;else for(g=u;g!==null;){if(g===t){g=null;break}if(u=g.sibling,u!==null){u.return=g.return,g=u;break}g=g.return}u=g}}function zr(t,n,a,s){t=null;for(var u=n,f=!1;u!==null;){if(!f){if((u.flags&524288)!==0)f=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var g=u.alternate;if(g===null)throw Error(r(387));if(g=g.memoizedProps,g!==null){var T=u.type;Gn(u.pendingProps.value,g.value)||(t!==null?t.push(T):t=[T])}}else if(u===ot.current){if(g=u.alternate,g===null)throw Error(r(387));g.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(t!==null?t.push(ho):t=[ho])}u=u.return}t!==null&&ic(n,t,a,s),n.flags|=262144}function Ko(t){for(t=t.firstContext;t!==null;){if(!Gn(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function ja(t){Za=t,Oi=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function Sn(t){return np(Za,t)}function Qo(t,n){return Za===null&&ja(t),np(t,n)}function np(t,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},Oi===null){if(t===null)throw Error(r(308));Oi=n,t.dependencies={lanes:0,firstContext:n},t.flags|=524288}else Oi=Oi.next=n;return a}var yv=typeof AbortController<"u"?AbortController:function(){var t=[],n=this.signal={aborted:!1,addEventListener:function(a,s){t.push(s)}};this.abort=function(){n.aborted=!0,t.forEach(function(a){return a()})}},Ev=o.unstable_scheduleCallback,Tv=o.unstable_NormalPriority,nn={$$typeof:z,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function ac(){return{controller:new yv,data:new Map,refCount:0}}function Hs(t){t.refCount--,t.refCount===0&&Ev(Tv,function(){t.controller.abort()})}var Gs=null,rc=0,Pr=0,Br=null;function bv(t,n){if(Gs===null){var a=Gs=[];rc=0,Pr=uf(),Br={status:"pending",value:void 0,then:function(s){a.push(s)}}}return rc++,n.then(ip,ip),n}function ip(){if(--rc===0&&Gs!==null){Br!==null&&(Br.status="fulfilled");var t=Gs;Gs=null,Pr=0,Br=null;for(var n=0;n<t.length;n++)(0,t[n])()}}function Av(t,n){var a=[],s={status:"pending",value:null,reason:null,then:function(u){a.push(u)}};return t.then(function(){s.status="fulfilled",s.value=n;for(var u=0;u<a.length;u++)(0,a[u])(n)},function(u){for(s.status="rejected",s.reason=u,u=0;u<a.length;u++)(0,a[u])(void 0)}),s}var ap=N.S;N.S=function(t,n){Gm=E(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&bv(t,n),ap!==null&&ap(t,n)};var Ka=L(null);function sc(){var t=Ka.current;return t!==null?t:Ge.pooledCache}function Jo(t,n){n===null?xt(Ka,Ka.current):xt(Ka,n.pool)}function rp(){var t=sc();return t===null?null:{parent:nn._currentValue,pool:t}}var Ir=Error(r(460)),oc=Error(r(474)),$o=Error(r(542)),tl={then:function(){}};function sp(t){return t=t.status,t==="fulfilled"||t==="rejected"}function op(t,n,a){switch(a=t[a],a===void 0?t.push(n):a!==n&&(n.then(Di,Di),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,up(t),t;default:if(typeof n.status=="string")n.then(Di,Di);else{if(t=Ge,t!==null&&100<t.shellSuspendCounter)throw Error(r(482));t=n,t.status="pending",t.then(function(s){if(n.status==="pending"){var u=n;u.status="fulfilled",u.value=s}},function(s){if(n.status==="pending"){var u=n;u.status="rejected",u.reason=s}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,up(t),t}throw Ja=n,Ir}}function Qa(t){try{var n=t._init;return n(t._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(Ja=a,Ir):a}}var Ja=null;function lp(){if(Ja===null)throw Error(r(459));var t=Ja;return Ja=null,t}function up(t){if(t===Ir||t===$o)throw Error(r(483))}var Fr=null,Vs=0;function el(t){var n=Vs;return Vs+=1,Fr===null&&(Fr=[]),op(Fr,t,n)}function Xs(t,n){n=n.props.ref,t.ref=n!==void 0?n:null}function nl(t,n){throw n.$$typeof===x?Error(r(525)):(t=Object.prototype.toString.call(n),Error(r(31,t==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":t)))}function cp(t){function n(W,F){if(t){var K=W.deletions;K===null?(W.deletions=[F],W.flags|=16):K.push(F)}}function a(W,F){if(!t)return null;for(;F!==null;)n(W,F),F=F.sibling;return null}function s(W){for(var F=new Map;W!==null;)W.key!==null?F.set(W.key,W):F.set(W.index,W),W=W.sibling;return F}function u(W,F){return W=Li(W,F),W.index=0,W.sibling=null,W}function f(W,F,K){return W.index=K,t?(K=W.alternate,K!==null?(K=K.index,K<F?(W.flags|=67108866,F):K):(W.flags|=67108866,F)):(W.flags|=1048576,F)}function g(W){return t&&W.alternate===null&&(W.flags|=67108866),W}function T(W,F,K,dt){return F===null||F.tag!==6?(F=ju(K,W.mode,dt),F.return=W,F):(F=u(F,K),F.return=W,F)}function O(W,F,K,dt){var Jt=K.type;return Jt===R?ct(W,F,K.props.children,dt,K.key):F!==null&&(F.elementType===Jt||typeof Jt=="object"&&Jt!==null&&Jt.$$typeof===j&&Qa(Jt)===F.type)?(F=u(F,K.props),Xs(F,K),F.return=W,F):(F=Zo(K.type,K.key,K.props,null,W.mode,dt),Xs(F,K),F.return=W,F)}function Q(W,F,K,dt){return F===null||F.tag!==4||F.stateNode.containerInfo!==K.containerInfo||F.stateNode.implementation!==K.implementation?(F=Ku(K,W.mode,dt),F.return=W,F):(F=u(F,K.children||[]),F.return=W,F)}function ct(W,F,K,dt,Jt){return F===null||F.tag!==7?(F=qa(K,W.mode,dt,Jt),F.return=W,F):(F=u(F,K),F.return=W,F)}function pt(W,F,K){if(typeof F=="string"&&F!==""||typeof F=="number"||typeof F=="bigint")return F=ju(""+F,W.mode,K),F.return=W,F;if(typeof F=="object"&&F!==null){switch(F.$$typeof){case y:return K=Zo(F.type,F.key,F.props,null,W.mode,K),Xs(K,F),K.return=W,K;case A:return F=Ku(F,W.mode,K),F.return=W,F;case j:return F=Qa(F),pt(W,F,K)}if(ft(F)||nt(F))return F=qa(F,W.mode,K,null),F.return=W,F;if(typeof F.then=="function")return pt(W,el(F),K);if(F.$$typeof===z)return pt(W,Qo(W,F),K);nl(W,F)}return null}function $(W,F,K,dt){var Jt=F!==null?F.key:null;if(typeof K=="string"&&K!==""||typeof K=="number"||typeof K=="bigint")return Jt!==null?null:T(W,F,""+K,dt);if(typeof K=="object"&&K!==null){switch(K.$$typeof){case y:return K.key===Jt?O(W,F,K,dt):null;case A:return K.key===Jt?Q(W,F,K,dt):null;case j:return K=Qa(K),$(W,F,K,dt)}if(ft(K)||nt(K))return Jt!==null?null:ct(W,F,K,dt,null);if(typeof K.then=="function")return $(W,F,el(K),dt);if(K.$$typeof===z)return $(W,F,Qo(W,K),dt);nl(W,K)}return null}function rt(W,F,K,dt,Jt){if(typeof dt=="string"&&dt!==""||typeof dt=="number"||typeof dt=="bigint")return W=W.get(K)||null,T(F,W,""+dt,Jt);if(typeof dt=="object"&&dt!==null){switch(dt.$$typeof){case y:return W=W.get(dt.key===null?K:dt.key)||null,O(F,W,dt,Jt);case A:return W=W.get(dt.key===null?K:dt.key)||null,Q(F,W,dt,Jt);case j:return dt=Qa(dt),rt(W,F,K,dt,Jt)}if(ft(dt)||nt(dt))return W=W.get(K)||null,ct(F,W,dt,Jt,null);if(typeof dt.then=="function")return rt(W,F,K,el(dt),Jt);if(dt.$$typeof===z)return rt(W,F,K,Qo(F,dt),Jt);nl(F,dt)}return null}function Ft(W,F,K,dt){for(var Jt=null,Te=null,Wt=F,le=F=0,ve=null;Wt!==null&&le<K.length;le++){Wt.index>le?(ve=Wt,Wt=null):ve=Wt.sibling;var be=$(W,Wt,K[le],dt);if(be===null){Wt===null&&(Wt=ve);break}t&&Wt&&be.alternate===null&&n(W,Wt),F=f(be,F,le),Te===null?Jt=be:Te.sibling=be,Te=be,Wt=ve}if(le===K.length)return a(W,Wt),Se&&Ni(W,le),Jt;if(Wt===null){for(;le<K.length;le++)Wt=pt(W,K[le],dt),Wt!==null&&(F=f(Wt,F,le),Te===null?Jt=Wt:Te.sibling=Wt,Te=Wt);return Se&&Ni(W,le),Jt}for(Wt=s(Wt);le<K.length;le++)ve=rt(Wt,W,le,K[le],dt),ve!==null&&(t&&ve.alternate!==null&&Wt.delete(ve.key===null?le:ve.key),F=f(ve,F,le),Te===null?Jt=ve:Te.sibling=ve,Te=ve);return t&&Wt.forEach(function(Ca){return n(W,Ca)}),Se&&Ni(W,le),Jt}function te(W,F,K,dt){if(K==null)throw Error(r(151));for(var Jt=null,Te=null,Wt=F,le=F=0,ve=null,be=K.next();Wt!==null&&!be.done;le++,be=K.next()){Wt.index>le?(ve=Wt,Wt=null):ve=Wt.sibling;var Ca=$(W,Wt,be.value,dt);if(Ca===null){Wt===null&&(Wt=ve);break}t&&Wt&&Ca.alternate===null&&n(W,Wt),F=f(Ca,F,le),Te===null?Jt=Ca:Te.sibling=Ca,Te=Ca,Wt=ve}if(be.done)return a(W,Wt),Se&&Ni(W,le),Jt;if(Wt===null){for(;!be.done;le++,be=K.next())be=pt(W,be.value,dt),be!==null&&(F=f(be,F,le),Te===null?Jt=be:Te.sibling=be,Te=be);return Se&&Ni(W,le),Jt}for(Wt=s(Wt);!be.done;le++,be=K.next())be=rt(Wt,W,le,be.value,dt),be!==null&&(t&&be.alternate!==null&&Wt.delete(be.key===null?le:be.key),F=f(be,F,le),Te===null?Jt=be:Te.sibling=be,Te=be);return t&&Wt.forEach(function(BS){return n(W,BS)}),Se&&Ni(W,le),Jt}function ze(W,F,K,dt){if(typeof K=="object"&&K!==null&&K.type===R&&K.key===null&&(K=K.props.children),typeof K=="object"&&K!==null){switch(K.$$typeof){case y:t:{for(var Jt=K.key;F!==null;){if(F.key===Jt){if(Jt=K.type,Jt===R){if(F.tag===7){a(W,F.sibling),dt=u(F,K.props.children),dt.return=W,W=dt;break t}}else if(F.elementType===Jt||typeof Jt=="object"&&Jt!==null&&Jt.$$typeof===j&&Qa(Jt)===F.type){a(W,F.sibling),dt=u(F,K.props),Xs(dt,K),dt.return=W,W=dt;break t}a(W,F);break}else n(W,F);F=F.sibling}K.type===R?(dt=qa(K.props.children,W.mode,dt,K.key),dt.return=W,W=dt):(dt=Zo(K.type,K.key,K.props,null,W.mode,dt),Xs(dt,K),dt.return=W,W=dt)}return g(W);case A:t:{for(Jt=K.key;F!==null;){if(F.key===Jt)if(F.tag===4&&F.stateNode.containerInfo===K.containerInfo&&F.stateNode.implementation===K.implementation){a(W,F.sibling),dt=u(F,K.children||[]),dt.return=W,W=dt;break t}else{a(W,F);break}else n(W,F);F=F.sibling}dt=Ku(K,W.mode,dt),dt.return=W,W=dt}return g(W);case j:return K=Qa(K),ze(W,F,K,dt)}if(ft(K))return Ft(W,F,K,dt);if(nt(K)){if(Jt=nt(K),typeof Jt!="function")throw Error(r(150));return K=Jt.call(K),te(W,F,K,dt)}if(typeof K.then=="function")return ze(W,F,el(K),dt);if(K.$$typeof===z)return ze(W,F,Qo(W,K),dt);nl(W,K)}return typeof K=="string"&&K!==""||typeof K=="number"||typeof K=="bigint"?(K=""+K,F!==null&&F.tag===6?(a(W,F.sibling),dt=u(F,K),dt.return=W,W=dt):(a(W,F),dt=ju(K,W.mode,dt),dt.return=W,W=dt),g(W)):a(W,F)}return function(W,F,K,dt){try{Vs=0;var Jt=ze(W,F,K,dt);return Fr=null,Jt}catch(Wt){if(Wt===Ir||Wt===$o)throw Wt;var Te=Vn(29,Wt,null,W.mode);return Te.lanes=dt,Te.return=W,Te}finally{}}}var $a=cp(!0),fp=cp(!1),fa=!1;function lc(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function uc(t,n){t=t.updateQueue,n.updateQueue===t&&(n.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function ha(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function da(t,n,a){var s=t.updateQueue;if(s===null)return null;if(s=s.shared,(Re&2)!==0){var u=s.pending;return u===null?n.next=n:(n.next=u.next,u.next=n),s.pending=n,n=Yo(t),Zd(t,null,a),n}return qo(t,s,n,a),Yo(t)}function ks(t,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var s=n.lanes;s&=t.pendingLanes,a|=s,n.lanes=a,vi(t,a)}}function cc(t,n){var a=t.updateQueue,s=t.alternate;if(s!==null&&(s=s.updateQueue,a===s)){var u=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var g={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};f===null?u=f=g:f=f.next=g,a=a.next}while(a!==null);f===null?u=f=n:f=f.next=n}else u=f=n;a={baseState:s.baseState,firstBaseUpdate:u,lastBaseUpdate:f,shared:s.shared,callbacks:s.callbacks},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=n:t.next=n,a.lastBaseUpdate=n}var fc=!1;function Ws(){if(fc){var t=Br;if(t!==null)throw t}}function qs(t,n,a,s){fc=!1;var u=t.updateQueue;fa=!1;var f=u.firstBaseUpdate,g=u.lastBaseUpdate,T=u.shared.pending;if(T!==null){u.shared.pending=null;var O=T,Q=O.next;O.next=null,g===null?f=Q:g.next=Q,g=O;var ct=t.alternate;ct!==null&&(ct=ct.updateQueue,T=ct.lastBaseUpdate,T!==g&&(T===null?ct.firstBaseUpdate=Q:T.next=Q,ct.lastBaseUpdate=O))}if(f!==null){var pt=u.baseState;g=0,ct=Q=O=null,T=f;do{var $=T.lane&-536870913,rt=$!==T.lane;if(rt?(_e&$)===$:(s&$)===$){$!==0&&$===Pr&&(fc=!0),ct!==null&&(ct=ct.next={lane:0,tag:T.tag,payload:T.payload,callback:null,next:null});t:{var Ft=t,te=T;$=n;var ze=a;switch(te.tag){case 1:if(Ft=te.payload,typeof Ft=="function"){pt=Ft.call(ze,pt,$);break t}pt=Ft;break t;case 3:Ft.flags=Ft.flags&-65537|128;case 0:if(Ft=te.payload,$=typeof Ft=="function"?Ft.call(ze,pt,$):Ft,$==null)break t;pt=_({},pt,$);break t;case 2:fa=!0}}$=T.callback,$!==null&&(t.flags|=64,rt&&(t.flags|=8192),rt=u.callbacks,rt===null?u.callbacks=[$]:rt.push($))}else rt={lane:$,tag:T.tag,payload:T.payload,callback:T.callback,next:null},ct===null?(Q=ct=rt,O=pt):ct=ct.next=rt,g|=$;if(T=T.next,T===null){if(T=u.shared.pending,T===null)break;rt=T,T=rt.next,rt.next=null,u.lastBaseUpdate=rt,u.shared.pending=null}}while(!0);ct===null&&(O=pt),u.baseState=O,u.firstBaseUpdate=Q,u.lastBaseUpdate=ct,f===null&&(u.shared.lanes=0),va|=g,t.lanes=g,t.memoizedState=pt}}function hp(t,n){if(typeof t!="function")throw Error(r(191,t));t.call(n)}function dp(t,n){var a=t.callbacks;if(a!==null)for(t.callbacks=null,t=0;t<a.length;t++)hp(a[t],n)}var Hr=L(null),il=L(0);function pp(t,n){t=ki,xt(il,t),xt(Hr,n),ki=t|n.baseLanes}function hc(){xt(il,ki),xt(Hr,Hr.current)}function dc(){ki=il.current,tt(Hr),tt(il)}var Xn=L(null),ii=null;function pa(t){var n=t.alternate;xt(Qe,Qe.current&1),xt(Xn,t),ii===null&&(n===null||Hr.current!==null||n.memoizedState!==null)&&(ii=t)}function pc(t){xt(Qe,Qe.current),xt(Xn,t),ii===null&&(ii=t)}function mp(t){t.tag===22?(xt(Qe,Qe.current),xt(Xn,t),ii===null&&(ii=t)):ma()}function ma(){xt(Qe,Qe.current),xt(Xn,Xn.current)}function kn(t){tt(Xn),ii===t&&(ii=null),tt(Qe)}var Qe=L(0);function al(t){for(var n=t;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||Mf(a)||yf(a)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var Pi=0,oe=null,Ne=null,an=null,rl=!1,Gr=!1,tr=!1,sl=0,Ys=0,Vr=null,Rv=0;function Ze(){throw Error(r(321))}function mc(t,n){if(n===null)return!1;for(var a=0;a<n.length&&a<t.length;a++)if(!Gn(t[a],n[a]))return!1;return!0}function gc(t,n,a,s,u,f){return Pi=f,oe=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,N.H=t===null||t.memoizedState===null?Jp:Uc,tr=!1,f=a(s,u),tr=!1,Gr&&(f=_p(n,a,s,u)),gp(t),f}function gp(t){N.H=Ks;var n=Ne!==null&&Ne.next!==null;if(Pi=0,an=Ne=oe=null,rl=!1,Ys=0,Vr=null,n)throw Error(r(300));t===null||rn||(t=t.dependencies,t!==null&&Ko(t)&&(rn=!0))}function _p(t,n,a,s){oe=t;var u=0;do{if(Gr&&(Vr=null),Ys=0,Gr=!1,25<=u)throw Error(r(301));if(u+=1,an=Ne=null,t.updateQueue!=null){var f=t.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}N.H=$p,f=n(a,s)}while(Gr);return f}function Cv(){var t=N.H,n=t.useState()[0];return n=typeof n.then=="function"?Zs(n):n,t=t.useState()[0],(Ne!==null?Ne.memoizedState:null)!==t&&(oe.flags|=1024),n}function _c(){var t=sl!==0;return sl=0,t}function vc(t,n,a){n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~a}function Sc(t){if(rl){for(t=t.memoizedState;t!==null;){var n=t.queue;n!==null&&(n.pending=null),t=t.next}rl=!1}Pi=0,an=Ne=oe=null,Gr=!1,Ys=sl=0,Vr=null}function Cn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return an===null?oe.memoizedState=an=t:an=an.next=t,an}function Je(){if(Ne===null){var t=oe.alternate;t=t!==null?t.memoizedState:null}else t=Ne.next;var n=an===null?oe.memoizedState:an.next;if(n!==null)an=n,Ne=t;else{if(t===null)throw oe.alternate===null?Error(r(467)):Error(r(310));Ne=t,t={memoizedState:Ne.memoizedState,baseState:Ne.baseState,baseQueue:Ne.baseQueue,queue:Ne.queue,next:null},an===null?oe.memoizedState=an=t:an=an.next=t}return an}function ol(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Zs(t){var n=Ys;return Ys+=1,Vr===null&&(Vr=[]),t=op(Vr,t,n),n=oe,(an===null?n.memoizedState:an.next)===null&&(n=n.alternate,N.H=n===null||n.memoizedState===null?Jp:Uc),t}function ll(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return Zs(t);if(t.$$typeof===z)return Sn(t)}throw Error(r(438,String(t)))}function xc(t){var n=null,a=oe.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var s=oe.alternate;s!==null&&(s=s.updateQueue,s!==null&&(s=s.memoCache,s!=null&&(n={data:s.data.map(function(u){return u.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=ol(),oe.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(t),s=0;s<t;s++)a[s]=C;return n.index++,a}function Bi(t,n){return typeof n=="function"?n(t):n}function ul(t){var n=Je();return Mc(n,Ne,t)}function Mc(t,n,a){var s=t.queue;if(s===null)throw Error(r(311));s.lastRenderedReducer=a;var u=t.baseQueue,f=s.pending;if(f!==null){if(u!==null){var g=u.next;u.next=f.next,f.next=g}n.baseQueue=u=f,s.pending=null}if(f=t.baseState,u===null)t.memoizedState=f;else{n=u.next;var T=g=null,O=null,Q=n,ct=!1;do{var pt=Q.lane&-536870913;if(pt!==Q.lane?(_e&pt)===pt:(Pi&pt)===pt){var $=Q.revertLane;if($===0)O!==null&&(O=O.next={lane:0,revertLane:0,gesture:null,action:Q.action,hasEagerState:Q.hasEagerState,eagerState:Q.eagerState,next:null}),pt===Pr&&(ct=!0);else if((Pi&$)===$){Q=Q.next,$===Pr&&(ct=!0);continue}else pt={lane:0,revertLane:Q.revertLane,gesture:null,action:Q.action,hasEagerState:Q.hasEagerState,eagerState:Q.eagerState,next:null},O===null?(T=O=pt,g=f):O=O.next=pt,oe.lanes|=$,va|=$;pt=Q.action,tr&&a(f,pt),f=Q.hasEagerState?Q.eagerState:a(f,pt)}else $={lane:pt,revertLane:Q.revertLane,gesture:Q.gesture,action:Q.action,hasEagerState:Q.hasEagerState,eagerState:Q.eagerState,next:null},O===null?(T=O=$,g=f):O=O.next=$,oe.lanes|=pt,va|=pt;Q=Q.next}while(Q!==null&&Q!==n);if(O===null?g=f:O.next=T,!Gn(f,t.memoizedState)&&(rn=!0,ct&&(a=Br,a!==null)))throw a;t.memoizedState=f,t.baseState=g,t.baseQueue=O,s.lastRenderedState=f}return u===null&&(s.lanes=0),[t.memoizedState,s.dispatch]}function yc(t){var n=Je(),a=n.queue;if(a===null)throw Error(r(311));a.lastRenderedReducer=t;var s=a.dispatch,u=a.pending,f=n.memoizedState;if(u!==null){a.pending=null;var g=u=u.next;do f=t(f,g.action),g=g.next;while(g!==u);Gn(f,n.memoizedState)||(rn=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),a.lastRenderedState=f}return[f,s]}function vp(t,n,a){var s=oe,u=Je(),f=Se;if(f){if(a===void 0)throw Error(r(407));a=a()}else a=n();var g=!Gn((Ne||u).memoizedState,a);if(g&&(u.memoizedState=a,rn=!0),u=u.queue,bc(Mp.bind(null,s,u,t),[t]),u.getSnapshot!==n||g||an!==null&&an.memoizedState.tag&1){if(s.flags|=2048,Xr(9,{destroy:void 0},xp.bind(null,s,u,a,n),null),Ge===null)throw Error(r(349));f||(Pi&127)!==0||Sp(s,n,a)}return a}function Sp(t,n,a){t.flags|=16384,t={getSnapshot:n,value:a},n=oe.updateQueue,n===null?(n=ol(),oe.updateQueue=n,n.stores=[t]):(a=n.stores,a===null?n.stores=[t]:a.push(t))}function xp(t,n,a,s){n.value=a,n.getSnapshot=s,yp(n)&&Ep(t)}function Mp(t,n,a){return a(function(){yp(n)&&Ep(t)})}function yp(t){var n=t.getSnapshot;t=t.value;try{var a=n();return!Gn(t,a)}catch{return!0}}function Ep(t){var n=Wa(t,2);n!==null&&Pn(n,t,2)}function Ec(t){var n=Cn();if(typeof t=="function"){var a=t;if(t=a(),tr){jt(!0);try{a()}finally{jt(!1)}}}return n.memoizedState=n.baseState=t,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Bi,lastRenderedState:t},n}function Tp(t,n,a,s){return t.baseState=a,Mc(t,Ne,typeof s=="function"?s:Bi)}function wv(t,n,a,s,u){if(hl(t))throw Error(r(485));if(t=n.action,t!==null){var f={payload:u,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(g){f.listeners.push(g)}};N.T!==null?a(!0):f.isTransition=!1,s(f),a=n.pending,a===null?(f.next=n.pending=f,bp(n,f)):(f.next=a.next,n.pending=a.next=f)}}function bp(t,n){var a=n.action,s=n.payload,u=t.state;if(n.isTransition){var f=N.T,g={};N.T=g;try{var T=a(u,s),O=N.S;O!==null&&O(g,T),Ap(t,n,T)}catch(Q){Tc(t,n,Q)}finally{f!==null&&g.types!==null&&(f.types=g.types),N.T=f}}else try{f=a(u,s),Ap(t,n,f)}catch(Q){Tc(t,n,Q)}}function Ap(t,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(s){Rp(t,n,s)},function(s){return Tc(t,n,s)}):Rp(t,n,a)}function Rp(t,n,a){n.status="fulfilled",n.value=a,Cp(n),t.state=a,n=t.pending,n!==null&&(a=n.next,a===n?t.pending=null:(a=a.next,n.next=a,bp(t,a)))}function Tc(t,n,a){var s=t.pending;if(t.pending=null,s!==null){s=s.next;do n.status="rejected",n.reason=a,Cp(n),n=n.next;while(n!==s)}t.action=null}function Cp(t){t=t.listeners;for(var n=0;n<t.length;n++)(0,t[n])()}function wp(t,n){return n}function Dp(t,n){if(Se){var a=Ge.formState;if(a!==null){t:{var s=oe;if(Se){if(Xe){e:{for(var u=Xe,f=ni;u.nodeType!==8;){if(!f){u=null;break e}if(u=ai(u.nextSibling),u===null){u=null;break e}}f=u.data,u=f==="F!"||f==="F"?u:null}if(u){Xe=ai(u.nextSibling),s=u.data==="F!";break t}}ua(s)}s=!1}s&&(n=a[0])}}return a=Cn(),a.memoizedState=a.baseState=n,s={pending:null,lanes:0,dispatch:null,lastRenderedReducer:wp,lastRenderedState:n},a.queue=s,a=jp.bind(null,oe,s),s.dispatch=a,s=Ec(!1),f=Dc.bind(null,oe,!1,s.queue),s=Cn(),u={state:n,dispatch:null,action:t,pending:null},s.queue=u,a=wv.bind(null,oe,u,f,a),u.dispatch=a,s.memoizedState=t,[n,a,!1]}function Up(t){var n=Je();return Lp(n,Ne,t)}function Lp(t,n,a){if(n=Mc(t,n,wp)[0],t=ul(Bi)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var s=Zs(n)}catch(g){throw g===Ir?$o:g}else s=n;n=Je();var u=n.queue,f=u.dispatch;return a!==n.memoizedState&&(oe.flags|=2048,Xr(9,{destroy:void 0},Dv.bind(null,u,a),null)),[s,f,t]}function Dv(t,n){t.action=n}function Np(t){var n=Je(),a=Ne;if(a!==null)return Lp(n,a,t);Je(),n=n.memoizedState,a=Je();var s=a.queue.dispatch;return a.memoizedState=t,[n,s,!1]}function Xr(t,n,a,s){return t={tag:t,create:a,deps:s,inst:n,next:null},n=oe.updateQueue,n===null&&(n=ol(),oe.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=t.next=t:(s=a.next,a.next=t,t.next=s,n.lastEffect=t),t}function Op(){return Je().memoizedState}function cl(t,n,a,s){var u=Cn();oe.flags|=t,u.memoizedState=Xr(1|n,{destroy:void 0},a,s===void 0?null:s)}function fl(t,n,a,s){var u=Je();s=s===void 0?null:s;var f=u.memoizedState.inst;Ne!==null&&s!==null&&mc(s,Ne.memoizedState.deps)?u.memoizedState=Xr(n,f,a,s):(oe.flags|=t,u.memoizedState=Xr(1|n,f,a,s))}function zp(t,n){cl(8390656,8,t,n)}function bc(t,n){fl(2048,8,t,n)}function Uv(t){oe.flags|=4;var n=oe.updateQueue;if(n===null)n=ol(),oe.updateQueue=n,n.events=[t];else{var a=n.events;a===null?n.events=[t]:a.push(t)}}function Pp(t){var n=Je().memoizedState;return Uv({ref:n,nextImpl:t}),function(){if((Re&2)!==0)throw Error(r(440));return n.impl.apply(void 0,arguments)}}function Bp(t,n){return fl(4,2,t,n)}function Ip(t,n){return fl(4,4,t,n)}function Fp(t,n){if(typeof n=="function"){t=t();var a=n(t);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return t=t(),n.current=t,function(){n.current=null}}function Hp(t,n,a){a=a!=null?a.concat([t]):null,fl(4,4,Fp.bind(null,n,t),a)}function Ac(){}function Gp(t,n){var a=Je();n=n===void 0?null:n;var s=a.memoizedState;return n!==null&&mc(n,s[1])?s[0]:(a.memoizedState=[t,n],t)}function Vp(t,n){var a=Je();n=n===void 0?null:n;var s=a.memoizedState;if(n!==null&&mc(n,s[1]))return s[0];if(s=t(),tr){jt(!0);try{t()}finally{jt(!1)}}return a.memoizedState=[s,n],s}function Rc(t,n,a){return a===void 0||(Pi&1073741824)!==0&&(_e&261930)===0?t.memoizedState=n:(t.memoizedState=a,t=Xm(),oe.lanes|=t,va|=t,a)}function Xp(t,n,a,s){return Gn(a,n)?a:Hr.current!==null?(t=Rc(t,a,s),Gn(t,n)||(rn=!0),t):(Pi&42)===0||(Pi&1073741824)!==0&&(_e&261930)===0?(rn=!0,t.memoizedState=a):(t=Xm(),oe.lanes|=t,va|=t,n)}function kp(t,n,a,s,u){var f=Z.p;Z.p=f!==0&&8>f?f:8;var g=N.T,T={};N.T=T,Dc(t,!1,n,a);try{var O=u(),Q=N.S;if(Q!==null&&Q(T,O),O!==null&&typeof O=="object"&&typeof O.then=="function"){var ct=Av(O,s);js(t,n,ct,Yn(t))}else js(t,n,s,Yn(t))}catch(pt){js(t,n,{then:function(){},status:"rejected",reason:pt},Yn())}finally{Z.p=f,g!==null&&T.types!==null&&(g.types=T.types),N.T=g}}function Lv(){}function Cc(t,n,a,s){if(t.tag!==5)throw Error(r(476));var u=Wp(t).queue;kp(t,u,n,Y,a===null?Lv:function(){return qp(t),a(s)})}function Wp(t){var n=t.memoizedState;if(n!==null)return n;n={memoizedState:Y,baseState:Y,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Bi,lastRenderedState:Y},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Bi,lastRenderedState:a},next:null},t.memoizedState=n,t=t.alternate,t!==null&&(t.memoizedState=n),n}function qp(t){var n=Wp(t);n.next===null&&(n=t.alternate.memoizedState),js(t,n.next.queue,{},Yn())}function wc(){return Sn(ho)}function Yp(){return Je().memoizedState}function Zp(){return Je().memoizedState}function Nv(t){for(var n=t.return;n!==null;){switch(n.tag){case 24:case 3:var a=Yn();t=ha(a);var s=da(n,t,a);s!==null&&(Pn(s,n,a),ks(s,n,a)),n={cache:ac()},t.payload=n;return}n=n.return}}function Ov(t,n,a){var s=Yn();a={lane:s,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},hl(t)?Kp(n,a):(a=Yu(t,n,a,s),a!==null&&(Pn(a,t,s),Qp(a,n,s)))}function jp(t,n,a){var s=Yn();js(t,n,a,s)}function js(t,n,a,s){var u={lane:s,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(hl(t))Kp(n,u);else{var f=t.alternate;if(t.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var g=n.lastRenderedState,T=f(g,a);if(u.hasEagerState=!0,u.eagerState=T,Gn(T,g))return qo(t,n,u,0),Ge===null&&Wo(),!1}catch{}finally{}if(a=Yu(t,n,u,s),a!==null)return Pn(a,t,s),Qp(a,n,s),!0}return!1}function Dc(t,n,a,s){if(s={lane:2,revertLane:uf(),gesture:null,action:s,hasEagerState:!1,eagerState:null,next:null},hl(t)){if(n)throw Error(r(479))}else n=Yu(t,a,s,2),n!==null&&Pn(n,t,2)}function hl(t){var n=t.alternate;return t===oe||n!==null&&n===oe}function Kp(t,n){Gr=rl=!0;var a=t.pending;a===null?n.next=n:(n.next=a.next,a.next=n),t.pending=n}function Qp(t,n,a){if((a&4194048)!==0){var s=n.lanes;s&=t.pendingLanes,a|=s,n.lanes=a,vi(t,a)}}var Ks={readContext:Sn,use:ll,useCallback:Ze,useContext:Ze,useEffect:Ze,useImperativeHandle:Ze,useLayoutEffect:Ze,useInsertionEffect:Ze,useMemo:Ze,useReducer:Ze,useRef:Ze,useState:Ze,useDebugValue:Ze,useDeferredValue:Ze,useTransition:Ze,useSyncExternalStore:Ze,useId:Ze,useHostTransitionStatus:Ze,useFormState:Ze,useActionState:Ze,useOptimistic:Ze,useMemoCache:Ze,useCacheRefresh:Ze};Ks.useEffectEvent=Ze;var Jp={readContext:Sn,use:ll,useCallback:function(t,n){return Cn().memoizedState=[t,n===void 0?null:n],t},useContext:Sn,useEffect:zp,useImperativeHandle:function(t,n,a){a=a!=null?a.concat([t]):null,cl(4194308,4,Fp.bind(null,n,t),a)},useLayoutEffect:function(t,n){return cl(4194308,4,t,n)},useInsertionEffect:function(t,n){cl(4,2,t,n)},useMemo:function(t,n){var a=Cn();n=n===void 0?null:n;var s=t();if(tr){jt(!0);try{t()}finally{jt(!1)}}return a.memoizedState=[s,n],s},useReducer:function(t,n,a){var s=Cn();if(a!==void 0){var u=a(n);if(tr){jt(!0);try{a(n)}finally{jt(!1)}}}else u=n;return s.memoizedState=s.baseState=u,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:u},s.queue=t,t=t.dispatch=Ov.bind(null,oe,t),[s.memoizedState,t]},useRef:function(t){var n=Cn();return t={current:t},n.memoizedState=t},useState:function(t){t=Ec(t);var n=t.queue,a=jp.bind(null,oe,n);return n.dispatch=a,[t.memoizedState,a]},useDebugValue:Ac,useDeferredValue:function(t,n){var a=Cn();return Rc(a,t,n)},useTransition:function(){var t=Ec(!1);return t=kp.bind(null,oe,t.queue,!0,!1),Cn().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,n,a){var s=oe,u=Cn();if(Se){if(a===void 0)throw Error(r(407));a=a()}else{if(a=n(),Ge===null)throw Error(r(349));(_e&127)!==0||Sp(s,n,a)}u.memoizedState=a;var f={value:a,getSnapshot:n};return u.queue=f,zp(Mp.bind(null,s,f,t),[t]),s.flags|=2048,Xr(9,{destroy:void 0},xp.bind(null,s,f,a,n),null),a},useId:function(){var t=Cn(),n=Ge.identifierPrefix;if(Se){var a=Mi,s=xi;a=(s&~(1<<32-zt(s)-1)).toString(32)+a,n="_"+n+"R_"+a,a=sl++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=Rv++,n="_"+n+"r_"+a.toString(32)+"_";return t.memoizedState=n},useHostTransitionStatus:wc,useFormState:Dp,useActionState:Dp,useOptimistic:function(t){var n=Cn();n.memoizedState=n.baseState=t;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=Dc.bind(null,oe,!0,a),a.dispatch=n,[t,n]},useMemoCache:xc,useCacheRefresh:function(){return Cn().memoizedState=Nv.bind(null,oe)},useEffectEvent:function(t){var n=Cn(),a={impl:t};return n.memoizedState=a,function(){if((Re&2)!==0)throw Error(r(440));return a.impl.apply(void 0,arguments)}}},Uc={readContext:Sn,use:ll,useCallback:Gp,useContext:Sn,useEffect:bc,useImperativeHandle:Hp,useInsertionEffect:Bp,useLayoutEffect:Ip,useMemo:Vp,useReducer:ul,useRef:Op,useState:function(){return ul(Bi)},useDebugValue:Ac,useDeferredValue:function(t,n){var a=Je();return Xp(a,Ne.memoizedState,t,n)},useTransition:function(){var t=ul(Bi)[0],n=Je().memoizedState;return[typeof t=="boolean"?t:Zs(t),n]},useSyncExternalStore:vp,useId:Yp,useHostTransitionStatus:wc,useFormState:Up,useActionState:Up,useOptimistic:function(t,n){var a=Je();return Tp(a,Ne,t,n)},useMemoCache:xc,useCacheRefresh:Zp};Uc.useEffectEvent=Pp;var $p={readContext:Sn,use:ll,useCallback:Gp,useContext:Sn,useEffect:bc,useImperativeHandle:Hp,useInsertionEffect:Bp,useLayoutEffect:Ip,useMemo:Vp,useReducer:yc,useRef:Op,useState:function(){return yc(Bi)},useDebugValue:Ac,useDeferredValue:function(t,n){var a=Je();return Ne===null?Rc(a,t,n):Xp(a,Ne.memoizedState,t,n)},useTransition:function(){var t=yc(Bi)[0],n=Je().memoizedState;return[typeof t=="boolean"?t:Zs(t),n]},useSyncExternalStore:vp,useId:Yp,useHostTransitionStatus:wc,useFormState:Np,useActionState:Np,useOptimistic:function(t,n){var a=Je();return Ne!==null?Tp(a,Ne,t,n):(a.baseState=t,[t,a.queue.dispatch])},useMemoCache:xc,useCacheRefresh:Zp};$p.useEffectEvent=Pp;function Lc(t,n,a,s){n=t.memoizedState,a=a(s,n),a=a==null?n:_({},n,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var Nc={enqueueSetState:function(t,n,a){t=t._reactInternals;var s=Yn(),u=ha(s);u.payload=n,a!=null&&(u.callback=a),n=da(t,u,s),n!==null&&(Pn(n,t,s),ks(n,t,s))},enqueueReplaceState:function(t,n,a){t=t._reactInternals;var s=Yn(),u=ha(s);u.tag=1,u.payload=n,a!=null&&(u.callback=a),n=da(t,u,s),n!==null&&(Pn(n,t,s),ks(n,t,s))},enqueueForceUpdate:function(t,n){t=t._reactInternals;var a=Yn(),s=ha(a);s.tag=2,n!=null&&(s.callback=n),n=da(t,s,a),n!==null&&(Pn(n,t,a),ks(n,t,a))}};function tm(t,n,a,s,u,f,g){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(s,f,g):n.prototype&&n.prototype.isPureReactComponent?!Ps(a,s)||!Ps(u,f):!0}function em(t,n,a,s){t=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,s),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,s),n.state!==t&&Nc.enqueueReplaceState(n,n.state,null)}function er(t,n){var a=n;if("ref"in n){a={};for(var s in n)s!=="ref"&&(a[s]=n[s])}if(t=t.defaultProps){a===n&&(a=_({},a));for(var u in t)a[u]===void 0&&(a[u]=t[u])}return a}function nm(t){ko(t)}function im(t){console.error(t)}function am(t){ko(t)}function dl(t,n){try{var a=t.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(s){setTimeout(function(){throw s})}}function rm(t,n,a){try{var s=t.onCaughtError;s(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function Oc(t,n,a){return a=ha(a),a.tag=3,a.payload={element:null},a.callback=function(){dl(t,n)},a}function sm(t){return t=ha(t),t.tag=3,t}function om(t,n,a,s){var u=a.type.getDerivedStateFromError;if(typeof u=="function"){var f=s.value;t.payload=function(){return u(f)},t.callback=function(){rm(n,a,s)}}var g=a.stateNode;g!==null&&typeof g.componentDidCatch=="function"&&(t.callback=function(){rm(n,a,s),typeof u!="function"&&(Sa===null?Sa=new Set([this]):Sa.add(this));var T=s.stack;this.componentDidCatch(s.value,{componentStack:T!==null?T:""})})}function zv(t,n,a,s,u){if(a.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){if(n=a.alternate,n!==null&&zr(n,a,u,!0),a=Xn.current,a!==null){switch(a.tag){case 31:case 13:return ii===null?bl():a.alternate===null&&je===0&&(je=3),a.flags&=-257,a.flags|=65536,a.lanes=u,s===tl?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([s]):n.add(s),sf(t,s,u)),!1;case 22:return a.flags|=65536,s===tl?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([s])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([s]):a.add(s)),sf(t,s,u)),!1}throw Error(r(435,a.tag))}return sf(t,s,u),bl(),!1}if(Se)return n=Xn.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=u,s!==$u&&(t=Error(r(422),{cause:s}),Fs($n(t,a)))):(s!==$u&&(n=Error(r(423),{cause:s}),Fs($n(n,a))),t=t.current.alternate,t.flags|=65536,u&=-u,t.lanes|=u,s=$n(s,a),u=Oc(t.stateNode,s,u),cc(t,u),je!==4&&(je=2)),!1;var f=Error(r(520),{cause:s});if(f=$n(f,a),ao===null?ao=[f]:ao.push(f),je!==4&&(je=2),n===null)return!0;s=$n(s,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,t=u&-u,a.lanes|=t,t=Oc(a.stateNode,s,t),cc(a,t),!1;case 1:if(n=a.type,f=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(Sa===null||!Sa.has(f))))return a.flags|=65536,u&=-u,a.lanes|=u,u=sm(u),om(u,t,a,s),cc(a,u),!1}a=a.return}while(a!==null);return!1}var zc=Error(r(461)),rn=!1;function xn(t,n,a,s){n.child=t===null?fp(n,null,a,s):$a(n,t.child,a,s)}function lm(t,n,a,s,u){a=a.render;var f=n.ref;if("ref"in s){var g={};for(var T in s)T!=="ref"&&(g[T]=s[T])}else g=s;return ja(n),s=gc(t,n,a,g,f,u),T=_c(),t!==null&&!rn?(vc(t,n,u),Ii(t,n,u)):(Se&&T&&Qu(n),n.flags|=1,xn(t,n,s,u),n.child)}function um(t,n,a,s,u){if(t===null){var f=a.type;return typeof f=="function"&&!Zu(f)&&f.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=f,cm(t,n,f,s,u)):(t=Zo(a.type,null,s,n,n.mode,u),t.ref=n.ref,t.return=n,n.child=t)}if(f=t.child,!Xc(t,u)){var g=f.memoizedProps;if(a=a.compare,a=a!==null?a:Ps,a(g,s)&&t.ref===n.ref)return Ii(t,n,u)}return n.flags|=1,t=Li(f,s),t.ref=n.ref,t.return=n,n.child=t}function cm(t,n,a,s,u){if(t!==null){var f=t.memoizedProps;if(Ps(f,s)&&t.ref===n.ref)if(rn=!1,n.pendingProps=s=f,Xc(t,u))(t.flags&131072)!==0&&(rn=!0);else return n.lanes=t.lanes,Ii(t,n,u)}return Pc(t,n,a,s,u)}function fm(t,n,a,s){var u=s.children,f=t!==null?t.memoizedState:null;if(t===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),s.mode==="hidden"){if((n.flags&128)!==0){if(f=f!==null?f.baseLanes|a:a,t!==null){for(s=n.child=t.child,u=0;s!==null;)u=u|s.lanes|s.childLanes,s=s.sibling;s=u&~f}else s=0,n.child=null;return hm(t,n,f,a,s)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},t!==null&&Jo(n,f!==null?f.cachePool:null),f!==null?pp(n,f):hc(),mp(n);else return s=n.lanes=536870912,hm(t,n,f!==null?f.baseLanes|a:a,a,s)}else f!==null?(Jo(n,f.cachePool),pp(n,f),ma(),n.memoizedState=null):(t!==null&&Jo(n,null),hc(),ma());return xn(t,n,u,a),n.child}function Qs(t,n){return t!==null&&t.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function hm(t,n,a,s,u){var f=sc();return f=f===null?null:{parent:nn._currentValue,pool:f},n.memoizedState={baseLanes:a,cachePool:f},t!==null&&Jo(n,null),hc(),mp(n),t!==null&&zr(t,n,s,!0),n.childLanes=u,null}function pl(t,n){return n=gl({mode:n.mode,children:n.children},t.mode),n.ref=t.ref,t.child=n,n.return=t,n}function dm(t,n,a){return $a(n,t.child,null,a),t=pl(n,n.pendingProps),t.flags|=2,kn(n),n.memoizedState=null,t}function Pv(t,n,a){var s=n.pendingProps,u=(n.flags&128)!==0;if(n.flags&=-129,t===null){if(Se){if(s.mode==="hidden")return t=pl(n,s),n.lanes=536870912,Qs(null,t);if(pc(n),(t=Xe)?(t=bg(t,ni),t=t!==null&&t.data==="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:oa!==null?{id:xi,overflow:Mi}:null,retryLane:536870912,hydrationErrors:null},a=Kd(t),a.return=n,n.child=a,vn=n,Xe=null)):t=null,t===null)throw ua(n);return n.lanes=536870912,null}return pl(n,s)}var f=t.memoizedState;if(f!==null){var g=f.dehydrated;if(pc(n),u)if(n.flags&256)n.flags&=-257,n=dm(t,n,a);else if(n.memoizedState!==null)n.child=t.child,n.flags|=128,n=null;else throw Error(r(558));else if(rn||zr(t,n,a,!1),u=(a&t.childLanes)!==0,rn||u){if(s=Ge,s!==null&&(g=xr(s,a),g!==0&&g!==f.retryLane))throw f.retryLane=g,Wa(t,g),Pn(s,t,g),zc;bl(),n=dm(t,n,a)}else t=f.treeContext,Xe=ai(g.nextSibling),vn=n,Se=!0,la=null,ni=!1,t!==null&&$d(n,t),n=pl(n,s),n.flags|=4096;return n}return t=Li(t.child,{mode:s.mode,children:s.children}),t.ref=n.ref,n.child=t,t.return=n,t}function ml(t,n){var a=n.ref;if(a===null)t!==null&&t.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(r(284));(t===null||t.ref!==a)&&(n.flags|=4194816)}}function Pc(t,n,a,s,u){return ja(n),a=gc(t,n,a,s,void 0,u),s=_c(),t!==null&&!rn?(vc(t,n,u),Ii(t,n,u)):(Se&&s&&Qu(n),n.flags|=1,xn(t,n,a,u),n.child)}function pm(t,n,a,s,u,f){return ja(n),n.updateQueue=null,a=_p(n,s,a,u),gp(t),s=_c(),t!==null&&!rn?(vc(t,n,f),Ii(t,n,f)):(Se&&s&&Qu(n),n.flags|=1,xn(t,n,a,f),n.child)}function mm(t,n,a,s,u){if(ja(n),n.stateNode===null){var f=Ur,g=a.contextType;typeof g=="object"&&g!==null&&(f=Sn(g)),f=new a(s,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=Nc,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=s,f.state=n.memoizedState,f.refs={},lc(n),g=a.contextType,f.context=typeof g=="object"&&g!==null?Sn(g):Ur,f.state=n.memoizedState,g=a.getDerivedStateFromProps,typeof g=="function"&&(Lc(n,a,g,s),f.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(g=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),g!==f.state&&Nc.enqueueReplaceState(f,f.state,null),qs(n,s,f,u),Ws(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),s=!0}else if(t===null){f=n.stateNode;var T=n.memoizedProps,O=er(a,T);f.props=O;var Q=f.context,ct=a.contextType;g=Ur,typeof ct=="object"&&ct!==null&&(g=Sn(ct));var pt=a.getDerivedStateFromProps;ct=typeof pt=="function"||typeof f.getSnapshotBeforeUpdate=="function",T=n.pendingProps!==T,ct||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(T||Q!==g)&&em(n,f,s,g),fa=!1;var $=n.memoizedState;f.state=$,qs(n,s,f,u),Ws(),Q=n.memoizedState,T||$!==Q||fa?(typeof pt=="function"&&(Lc(n,a,pt,s),Q=n.memoizedState),(O=fa||tm(n,a,O,s,$,Q,g))?(ct||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=s,n.memoizedState=Q),f.props=s,f.state=Q,f.context=g,s=O):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),s=!1)}else{f=n.stateNode,uc(t,n),g=n.memoizedProps,ct=er(a,g),f.props=ct,pt=n.pendingProps,$=f.context,Q=a.contextType,O=Ur,typeof Q=="object"&&Q!==null&&(O=Sn(Q)),T=a.getDerivedStateFromProps,(Q=typeof T=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(g!==pt||$!==O)&&em(n,f,s,O),fa=!1,$=n.memoizedState,f.state=$,qs(n,s,f,u),Ws();var rt=n.memoizedState;g!==pt||$!==rt||fa||t!==null&&t.dependencies!==null&&Ko(t.dependencies)?(typeof T=="function"&&(Lc(n,a,T,s),rt=n.memoizedState),(ct=fa||tm(n,a,ct,s,$,rt,O)||t!==null&&t.dependencies!==null&&Ko(t.dependencies))?(Q||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(s,rt,O),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(s,rt,O)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||g===t.memoizedProps&&$===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||g===t.memoizedProps&&$===t.memoizedState||(n.flags|=1024),n.memoizedProps=s,n.memoizedState=rt),f.props=s,f.state=rt,f.context=O,s=ct):(typeof f.componentDidUpdate!="function"||g===t.memoizedProps&&$===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||g===t.memoizedProps&&$===t.memoizedState||(n.flags|=1024),s=!1)}return f=s,ml(t,n),s=(n.flags&128)!==0,f||s?(f=n.stateNode,a=s&&typeof a.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,t!==null&&s?(n.child=$a(n,t.child,null,u),n.child=$a(n,null,a,u)):xn(t,n,a,u),n.memoizedState=f.state,t=n.child):t=Ii(t,n,u),t}function gm(t,n,a,s){return Ya(),n.flags|=256,xn(t,n,a,s),n.child}var Bc={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Ic(t){return{baseLanes:t,cachePool:rp()}}function Fc(t,n,a){return t=t!==null?t.childLanes&~a:0,n&&(t|=qn),t}function _m(t,n,a){var s=n.pendingProps,u=!1,f=(n.flags&128)!==0,g;if((g=f)||(g=t!==null&&t.memoizedState===null?!1:(Qe.current&2)!==0),g&&(u=!0,n.flags&=-129),g=(n.flags&32)!==0,n.flags&=-33,t===null){if(Se){if(u?pa(n):ma(),(t=Xe)?(t=bg(t,ni),t=t!==null&&t.data!=="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:oa!==null?{id:xi,overflow:Mi}:null,retryLane:536870912,hydrationErrors:null},a=Kd(t),a.return=n,n.child=a,vn=n,Xe=null)):t=null,t===null)throw ua(n);return yf(t)?n.lanes=32:n.lanes=536870912,null}var T=s.children;return s=s.fallback,u?(ma(),u=n.mode,T=gl({mode:"hidden",children:T},u),s=qa(s,u,a,null),T.return=n,s.return=n,T.sibling=s,n.child=T,s=n.child,s.memoizedState=Ic(a),s.childLanes=Fc(t,g,a),n.memoizedState=Bc,Qs(null,s)):(pa(n),Hc(n,T))}var O=t.memoizedState;if(O!==null&&(T=O.dehydrated,T!==null)){if(f)n.flags&256?(pa(n),n.flags&=-257,n=Gc(t,n,a)):n.memoizedState!==null?(ma(),n.child=t.child,n.flags|=128,n=null):(ma(),T=s.fallback,u=n.mode,s=gl({mode:"visible",children:s.children},u),T=qa(T,u,a,null),T.flags|=2,s.return=n,T.return=n,s.sibling=T,n.child=s,$a(n,t.child,null,a),s=n.child,s.memoizedState=Ic(a),s.childLanes=Fc(t,g,a),n.memoizedState=Bc,n=Qs(null,s));else if(pa(n),yf(T)){if(g=T.nextSibling&&T.nextSibling.dataset,g)var Q=g.dgst;g=Q,s=Error(r(419)),s.stack="",s.digest=g,Fs({value:s,source:null,stack:null}),n=Gc(t,n,a)}else if(rn||zr(t,n,a,!1),g=(a&t.childLanes)!==0,rn||g){if(g=Ge,g!==null&&(s=xr(g,a),s!==0&&s!==O.retryLane))throw O.retryLane=s,Wa(t,s),Pn(g,t,s),zc;Mf(T)||bl(),n=Gc(t,n,a)}else Mf(T)?(n.flags|=192,n.child=t.child,n=null):(t=O.treeContext,Xe=ai(T.nextSibling),vn=n,Se=!0,la=null,ni=!1,t!==null&&$d(n,t),n=Hc(n,s.children),n.flags|=4096);return n}return u?(ma(),T=s.fallback,u=n.mode,O=t.child,Q=O.sibling,s=Li(O,{mode:"hidden",children:s.children}),s.subtreeFlags=O.subtreeFlags&65011712,Q!==null?T=Li(Q,T):(T=qa(T,u,a,null),T.flags|=2),T.return=n,s.return=n,s.sibling=T,n.child=s,Qs(null,s),s=n.child,T=t.child.memoizedState,T===null?T=Ic(a):(u=T.cachePool,u!==null?(O=nn._currentValue,u=u.parent!==O?{parent:O,pool:O}:u):u=rp(),T={baseLanes:T.baseLanes|a,cachePool:u}),s.memoizedState=T,s.childLanes=Fc(t,g,a),n.memoizedState=Bc,Qs(t.child,s)):(pa(n),a=t.child,t=a.sibling,a=Li(a,{mode:"visible",children:s.children}),a.return=n,a.sibling=null,t!==null&&(g=n.deletions,g===null?(n.deletions=[t],n.flags|=16):g.push(t)),n.child=a,n.memoizedState=null,a)}function Hc(t,n){return n=gl({mode:"visible",children:n},t.mode),n.return=t,t.child=n}function gl(t,n){return t=Vn(22,t,null,n),t.lanes=0,t}function Gc(t,n,a){return $a(n,t.child,null,a),t=Hc(n,n.pendingProps.children),t.flags|=2,n.memoizedState=null,t}function vm(t,n,a){t.lanes|=n;var s=t.alternate;s!==null&&(s.lanes|=n),nc(t.return,n,a)}function Vc(t,n,a,s,u,f){var g=t.memoizedState;g===null?t.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:s,tail:a,tailMode:u,treeForkCount:f}:(g.isBackwards=n,g.rendering=null,g.renderingStartTime=0,g.last=s,g.tail=a,g.tailMode=u,g.treeForkCount=f)}function Sm(t,n,a){var s=n.pendingProps,u=s.revealOrder,f=s.tail;s=s.children;var g=Qe.current,T=(g&2)!==0;if(T?(g=g&1|2,n.flags|=128):g&=1,xt(Qe,g),xn(t,n,s,a),s=Se?Is:0,!T&&t!==null&&(t.flags&128)!==0)t:for(t=n.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&vm(t,a,n);else if(t.tag===19)vm(t,a,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break t;for(;t.sibling===null;){if(t.return===null||t.return===n)break t;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(u){case"forwards":for(a=n.child,u=null;a!==null;)t=a.alternate,t!==null&&al(t)===null&&(u=a),a=a.sibling;a=u,a===null?(u=n.child,n.child=null):(u=a.sibling,a.sibling=null),Vc(n,!1,u,a,f,s);break;case"backwards":case"unstable_legacy-backwards":for(a=null,u=n.child,n.child=null;u!==null;){if(t=u.alternate,t!==null&&al(t)===null){n.child=u;break}t=u.sibling,u.sibling=a,a=u,u=t}Vc(n,!0,a,null,f,s);break;case"together":Vc(n,!1,null,null,void 0,s);break;default:n.memoizedState=null}return n.child}function Ii(t,n,a){if(t!==null&&(n.dependencies=t.dependencies),va|=n.lanes,(a&n.childLanes)===0)if(t!==null){if(zr(t,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(t!==null&&n.child!==t.child)throw Error(r(153));if(n.child!==null){for(t=n.child,a=Li(t,t.pendingProps),n.child=a,a.return=n;t.sibling!==null;)t=t.sibling,a=a.sibling=Li(t,t.pendingProps),a.return=n;a.sibling=null}return n.child}function Xc(t,n){return(t.lanes&n)!==0?!0:(t=t.dependencies,!!(t!==null&&Ko(t)))}function Bv(t,n,a){switch(n.tag){case 3:wt(n,n.stateNode.containerInfo),ca(n,nn,t.memoizedState.cache),Ya();break;case 27:case 5:Xt(n);break;case 4:wt(n,n.stateNode.containerInfo);break;case 10:ca(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,pc(n),null;break;case 13:var s=n.memoizedState;if(s!==null)return s.dehydrated!==null?(pa(n),n.flags|=128,null):(a&n.child.childLanes)!==0?_m(t,n,a):(pa(n),t=Ii(t,n,a),t!==null?t.sibling:null);pa(n);break;case 19:var u=(t.flags&128)!==0;if(s=(a&n.childLanes)!==0,s||(zr(t,n,a,!1),s=(a&n.childLanes)!==0),u){if(s)return Sm(t,n,a);n.flags|=128}if(u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),xt(Qe,Qe.current),s)break;return null;case 22:return n.lanes=0,fm(t,n,a,n.pendingProps);case 24:ca(n,nn,t.memoizedState.cache)}return Ii(t,n,a)}function xm(t,n,a){if(t!==null)if(t.memoizedProps!==n.pendingProps)rn=!0;else{if(!Xc(t,a)&&(n.flags&128)===0)return rn=!1,Bv(t,n,a);rn=(t.flags&131072)!==0}else rn=!1,Se&&(n.flags&1048576)!==0&&Jd(n,Is,n.index);switch(n.lanes=0,n.tag){case 16:t:{var s=n.pendingProps;if(t=Qa(n.elementType),n.type=t,typeof t=="function")Zu(t)?(s=er(t,s),n.tag=1,n=mm(null,n,t,s,a)):(n.tag=0,n=Pc(null,n,t,s,a));else{if(t!=null){var u=t.$$typeof;if(u===D){n.tag=11,n=lm(null,n,t,s,a);break t}else if(u===P){n.tag=14,n=um(null,n,t,s,a);break t}}throw n=gt(t)||t,Error(r(306,n,""))}}return n;case 0:return Pc(t,n,n.type,n.pendingProps,a);case 1:return s=n.type,u=er(s,n.pendingProps),mm(t,n,s,u,a);case 3:t:{if(wt(n,n.stateNode.containerInfo),t===null)throw Error(r(387));s=n.pendingProps;var f=n.memoizedState;u=f.element,uc(t,n),qs(n,s,null,a);var g=n.memoizedState;if(s=g.cache,ca(n,nn,s),s!==f.cache&&ic(n,[nn],a,!0),Ws(),s=g.element,f.isDehydrated)if(f={element:s,isDehydrated:!1,cache:g.cache},n.updateQueue.baseState=f,n.memoizedState=f,n.flags&256){n=gm(t,n,s,a);break t}else if(s!==u){u=$n(Error(r(424)),n),Fs(u),n=gm(t,n,s,a);break t}else{switch(t=n.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(Xe=ai(t.firstChild),vn=n,Se=!0,la=null,ni=!0,a=fp(n,null,s,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(Ya(),s===u){n=Ii(t,n,a);break t}xn(t,n,s,a)}n=n.child}return n;case 26:return ml(t,n),t===null?(a=Ug(n.type,null,n.pendingProps,null))?n.memoizedState=a:Se||(a=n.type,t=n.pendingProps,s=Ll(et.current).createElement(a),s[en]=n,s[gn]=t,Mn(s,a,t),_t(s),n.stateNode=s):n.memoizedState=Ug(n.type,t.memoizedProps,n.pendingProps,t.memoizedState),null;case 27:return Xt(n),t===null&&Se&&(s=n.stateNode=Cg(n.type,n.pendingProps,et.current),vn=n,ni=!0,u=Xe,Ea(n.type)?(Ef=u,Xe=ai(s.firstChild)):Xe=u),xn(t,n,n.pendingProps.children,a),ml(t,n),t===null&&(n.flags|=4194304),n.child;case 5:return t===null&&Se&&((u=s=Xe)&&(s=dS(s,n.type,n.pendingProps,ni),s!==null?(n.stateNode=s,vn=n,Xe=ai(s.firstChild),ni=!1,u=!0):u=!1),u||ua(n)),Xt(n),u=n.type,f=n.pendingProps,g=t!==null?t.memoizedProps:null,s=f.children,vf(u,f)?s=null:g!==null&&vf(u,g)&&(n.flags|=32),n.memoizedState!==null&&(u=gc(t,n,Cv,null,null,a),ho._currentValue=u),ml(t,n),xn(t,n,s,a),n.child;case 6:return t===null&&Se&&((t=a=Xe)&&(a=pS(a,n.pendingProps,ni),a!==null?(n.stateNode=a,vn=n,Xe=null,t=!0):t=!1),t||ua(n)),null;case 13:return _m(t,n,a);case 4:return wt(n,n.stateNode.containerInfo),s=n.pendingProps,t===null?n.child=$a(n,null,s,a):xn(t,n,s,a),n.child;case 11:return lm(t,n,n.type,n.pendingProps,a);case 7:return xn(t,n,n.pendingProps,a),n.child;case 8:return xn(t,n,n.pendingProps.children,a),n.child;case 12:return xn(t,n,n.pendingProps.children,a),n.child;case 10:return s=n.pendingProps,ca(n,n.type,s.value),xn(t,n,s.children,a),n.child;case 9:return u=n.type._context,s=n.pendingProps.children,ja(n),u=Sn(u),s=s(u),n.flags|=1,xn(t,n,s,a),n.child;case 14:return um(t,n,n.type,n.pendingProps,a);case 15:return cm(t,n,n.type,n.pendingProps,a);case 19:return Sm(t,n,a);case 31:return Pv(t,n,a);case 22:return fm(t,n,a,n.pendingProps);case 24:return ja(n),s=Sn(nn),t===null?(u=sc(),u===null&&(u=Ge,f=ac(),u.pooledCache=f,f.refCount++,f!==null&&(u.pooledCacheLanes|=a),u=f),n.memoizedState={parent:s,cache:u},lc(n),ca(n,nn,u)):((t.lanes&a)!==0&&(uc(t,n),qs(n,null,null,a),Ws()),u=t.memoizedState,f=n.memoizedState,u.parent!==s?(u={parent:s,cache:s},n.memoizedState=u,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=u),ca(n,nn,s)):(s=f.cache,ca(n,nn,s),s!==u.cache&&ic(n,[nn],a,!0))),xn(t,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(r(156,n.tag))}function Fi(t){t.flags|=4}function kc(t,n,a,s,u){if((n=(t.mode&32)!==0)&&(n=!1),n){if(t.flags|=16777216,(u&335544128)===u)if(t.stateNode.complete)t.flags|=8192;else if(Ym())t.flags|=8192;else throw Ja=tl,oc}else t.flags&=-16777217}function Mm(t,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!Pg(n))if(Ym())t.flags|=8192;else throw Ja=tl,oc}function _l(t,n){n!==null&&(t.flags|=4),t.flags&16384&&(n=t.tag!==22?De():536870912,t.lanes|=n,Yr|=n)}function Js(t,n){if(!Se)switch(t.tailMode){case"hidden":n=t.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t.tail=null:a.sibling=null;break;case"collapsed":a=t.tail;for(var s=null;a!==null;)a.alternate!==null&&(s=a),a=a.sibling;s===null?n||t.tail===null?t.tail=null:t.tail.sibling=null:s.sibling=null}}function ke(t){var n=t.alternate!==null&&t.alternate.child===t.child,a=0,s=0;if(n)for(var u=t.child;u!==null;)a|=u.lanes|u.childLanes,s|=u.subtreeFlags&65011712,s|=u.flags&65011712,u.return=t,u=u.sibling;else for(u=t.child;u!==null;)a|=u.lanes|u.childLanes,s|=u.subtreeFlags,s|=u.flags,u.return=t,u=u.sibling;return t.subtreeFlags|=s,t.childLanes=a,n}function Iv(t,n,a){var s=n.pendingProps;switch(Ju(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ke(n),null;case 1:return ke(n),null;case 3:return a=n.stateNode,s=null,t!==null&&(s=t.memoizedState.cache),n.memoizedState.cache!==s&&(n.flags|=2048),zi(nn),Bt(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(Or(n)?Fi(n):t===null||t.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,tc())),ke(n),null;case 26:var u=n.type,f=n.memoizedState;return t===null?(Fi(n),f!==null?(ke(n),Mm(n,f)):(ke(n),kc(n,u,null,s,a))):f?f!==t.memoizedState?(Fi(n),ke(n),Mm(n,f)):(ke(n),n.flags&=-16777217):(t=t.memoizedProps,t!==s&&Fi(n),ke(n),kc(n,u,t,s,a)),null;case 27:if(fe(n),a=et.current,u=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==s&&Fi(n);else{if(!s){if(n.stateNode===null)throw Error(r(166));return ke(n),null}t=bt.current,Or(n)?tp(n):(t=Cg(u,s,a),n.stateNode=t,Fi(n))}return ke(n),null;case 5:if(fe(n),u=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==s&&Fi(n);else{if(!s){if(n.stateNode===null)throw Error(r(166));return ke(n),null}if(f=bt.current,Or(n))tp(n);else{var g=Ll(et.current);switch(f){case 1:f=g.createElementNS("http://www.w3.org/2000/svg",u);break;case 2:f=g.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;default:switch(u){case"svg":f=g.createElementNS("http://www.w3.org/2000/svg",u);break;case"math":f=g.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;case"script":f=g.createElement("div"),f.innerHTML="<script><\/script>",f=f.removeChild(f.firstChild);break;case"select":f=typeof s.is=="string"?g.createElement("select",{is:s.is}):g.createElement("select"),s.multiple?f.multiple=!0:s.size&&(f.size=s.size);break;default:f=typeof s.is=="string"?g.createElement(u,{is:s.is}):g.createElement(u)}}f[en]=n,f[gn]=s;t:for(g=n.child;g!==null;){if(g.tag===5||g.tag===6)f.appendChild(g.stateNode);else if(g.tag!==4&&g.tag!==27&&g.child!==null){g.child.return=g,g=g.child;continue}if(g===n)break t;for(;g.sibling===null;){if(g.return===null||g.return===n)break t;g=g.return}g.sibling.return=g.return,g=g.sibling}n.stateNode=f;t:switch(Mn(f,u,s),u){case"button":case"input":case"select":case"textarea":s=!!s.autoFocus;break t;case"img":s=!0;break t;default:s=!1}s&&Fi(n)}}return ke(n),kc(n,n.type,t===null?null:t.memoizedProps,n.pendingProps,a),null;case 6:if(t&&n.stateNode!=null)t.memoizedProps!==s&&Fi(n);else{if(typeof s!="string"&&n.stateNode===null)throw Error(r(166));if(t=et.current,Or(n)){if(t=n.stateNode,a=n.memoizedProps,s=null,u=vn,u!==null)switch(u.tag){case 27:case 5:s=u.memoizedProps}t[en]=n,t=!!(t.nodeValue===a||s!==null&&s.suppressHydrationWarning===!0||_g(t.nodeValue,a)),t||ua(n,!0)}else t=Ll(t).createTextNode(s),t[en]=n,n.stateNode=t}return ke(n),null;case 31:if(a=n.memoizedState,t===null||t.memoizedState!==null){if(s=Or(n),a!==null){if(t===null){if(!s)throw Error(r(318));if(t=n.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(557));t[en]=n}else Ya(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;ke(n),t=!1}else a=tc(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=a),t=!0;if(!t)return n.flags&256?(kn(n),n):(kn(n),null);if((n.flags&128)!==0)throw Error(r(558))}return ke(n),null;case 13:if(s=n.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(u=Or(n),s!==null&&s.dehydrated!==null){if(t===null){if(!u)throw Error(r(318));if(u=n.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(r(317));u[en]=n}else Ya(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;ke(n),u=!1}else u=tc(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=u),u=!0;if(!u)return n.flags&256?(kn(n),n):(kn(n),null)}return kn(n),(n.flags&128)!==0?(n.lanes=a,n):(a=s!==null,t=t!==null&&t.memoizedState!==null,a&&(s=n.child,u=null,s.alternate!==null&&s.alternate.memoizedState!==null&&s.alternate.memoizedState.cachePool!==null&&(u=s.alternate.memoizedState.cachePool.pool),f=null,s.memoizedState!==null&&s.memoizedState.cachePool!==null&&(f=s.memoizedState.cachePool.pool),f!==u&&(s.flags|=2048)),a!==t&&a&&(n.child.flags|=8192),_l(n,n.updateQueue),ke(n),null);case 4:return Bt(),t===null&&df(n.stateNode.containerInfo),ke(n),null;case 10:return zi(n.type),ke(n),null;case 19:if(tt(Qe),s=n.memoizedState,s===null)return ke(n),null;if(u=(n.flags&128)!==0,f=s.rendering,f===null)if(u)Js(s,!1);else{if(je!==0||t!==null&&(t.flags&128)!==0)for(t=n.child;t!==null;){if(f=al(t),f!==null){for(n.flags|=128,Js(s,!1),t=f.updateQueue,n.updateQueue=t,_l(n,t),n.subtreeFlags=0,t=a,a=n.child;a!==null;)jd(a,t),a=a.sibling;return xt(Qe,Qe.current&1|2),Se&&Ni(n,s.treeForkCount),n.child}t=t.sibling}s.tail!==null&&E()>yl&&(n.flags|=128,u=!0,Js(s,!1),n.lanes=4194304)}else{if(!u)if(t=al(f),t!==null){if(n.flags|=128,u=!0,t=t.updateQueue,n.updateQueue=t,_l(n,t),Js(s,!0),s.tail===null&&s.tailMode==="hidden"&&!f.alternate&&!Se)return ke(n),null}else 2*E()-s.renderingStartTime>yl&&a!==536870912&&(n.flags|=128,u=!0,Js(s,!1),n.lanes=4194304);s.isBackwards?(f.sibling=n.child,n.child=f):(t=s.last,t!==null?t.sibling=f:n.child=f,s.last=f)}return s.tail!==null?(t=s.tail,s.rendering=t,s.tail=t.sibling,s.renderingStartTime=E(),t.sibling=null,a=Qe.current,xt(Qe,u?a&1|2:a&1),Se&&Ni(n,s.treeForkCount),t):(ke(n),null);case 22:case 23:return kn(n),dc(),s=n.memoizedState!==null,t!==null?t.memoizedState!==null!==s&&(n.flags|=8192):s&&(n.flags|=8192),s?(a&536870912)!==0&&(n.flags&128)===0&&(ke(n),n.subtreeFlags&6&&(n.flags|=8192)):ke(n),a=n.updateQueue,a!==null&&_l(n,a.retryQueue),a=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),s=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(s=n.memoizedState.cachePool.pool),s!==a&&(n.flags|=2048),t!==null&&tt(Ka),null;case 24:return a=null,t!==null&&(a=t.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),zi(nn),ke(n),null;case 25:return null;case 30:return null}throw Error(r(156,n.tag))}function Fv(t,n){switch(Ju(n),n.tag){case 1:return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 3:return zi(nn),Bt(),t=n.flags,(t&65536)!==0&&(t&128)===0?(n.flags=t&-65537|128,n):null;case 26:case 27:case 5:return fe(n),null;case 31:if(n.memoizedState!==null){if(kn(n),n.alternate===null)throw Error(r(340));Ya()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 13:if(kn(n),t=n.memoizedState,t!==null&&t.dehydrated!==null){if(n.alternate===null)throw Error(r(340));Ya()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 19:return tt(Qe),null;case 4:return Bt(),null;case 10:return zi(n.type),null;case 22:case 23:return kn(n),dc(),t!==null&&tt(Ka),t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 24:return zi(nn),null;case 25:return null;default:return null}}function ym(t,n){switch(Ju(n),n.tag){case 3:zi(nn),Bt();break;case 26:case 27:case 5:fe(n);break;case 4:Bt();break;case 31:n.memoizedState!==null&&kn(n);break;case 13:kn(n);break;case 19:tt(Qe);break;case 10:zi(n.type);break;case 22:case 23:kn(n),dc(),t!==null&&tt(Ka);break;case 24:zi(nn)}}function $s(t,n){try{var a=n.updateQueue,s=a!==null?a.lastEffect:null;if(s!==null){var u=s.next;a=u;do{if((a.tag&t)===t){s=void 0;var f=a.create,g=a.inst;s=f(),g.destroy=s}a=a.next}while(a!==u)}}catch(T){Le(n,n.return,T)}}function ga(t,n,a){try{var s=n.updateQueue,u=s!==null?s.lastEffect:null;if(u!==null){var f=u.next;s=f;do{if((s.tag&t)===t){var g=s.inst,T=g.destroy;if(T!==void 0){g.destroy=void 0,u=n;var O=a,Q=T;try{Q()}catch(ct){Le(u,O,ct)}}}s=s.next}while(s!==f)}}catch(ct){Le(n,n.return,ct)}}function Em(t){var n=t.updateQueue;if(n!==null){var a=t.stateNode;try{dp(n,a)}catch(s){Le(t,t.return,s)}}}function Tm(t,n,a){a.props=er(t.type,t.memoizedProps),a.state=t.memoizedState;try{a.componentWillUnmount()}catch(s){Le(t,n,s)}}function to(t,n){try{var a=t.ref;if(a!==null){switch(t.tag){case 26:case 27:case 5:var s=t.stateNode;break;case 30:s=t.stateNode;break;default:s=t.stateNode}typeof a=="function"?t.refCleanup=a(s):a.current=s}}catch(u){Le(t,n,u)}}function yi(t,n){var a=t.ref,s=t.refCleanup;if(a!==null)if(typeof s=="function")try{s()}catch(u){Le(t,n,u)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(u){Le(t,n,u)}else a.current=null}function bm(t){var n=t.type,a=t.memoizedProps,s=t.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&s.focus();break t;case"img":a.src?s.src=a.src:a.srcSet&&(s.srcset=a.srcSet)}}catch(u){Le(t,t.return,u)}}function Wc(t,n,a){try{var s=t.stateNode;oS(s,t.type,a,n),s[gn]=n}catch(u){Le(t,t.return,u)}}function Am(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&Ea(t.type)||t.tag===4}function qc(t){t:for(;;){for(;t.sibling===null;){if(t.return===null||Am(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&Ea(t.type)||t.flags&2||t.child===null||t.tag===4)continue t;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Yc(t,n,a){var s=t.tag;if(s===5||s===6)t=t.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(t,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(t),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=Di));else if(s!==4&&(s===27&&Ea(t.type)&&(a=t.stateNode,n=null),t=t.child,t!==null))for(Yc(t,n,a),t=t.sibling;t!==null;)Yc(t,n,a),t=t.sibling}function vl(t,n,a){var s=t.tag;if(s===5||s===6)t=t.stateNode,n?a.insertBefore(t,n):a.appendChild(t);else if(s!==4&&(s===27&&Ea(t.type)&&(a=t.stateNode),t=t.child,t!==null))for(vl(t,n,a),t=t.sibling;t!==null;)vl(t,n,a),t=t.sibling}function Rm(t){var n=t.stateNode,a=t.memoizedProps;try{for(var s=t.type,u=n.attributes;u.length;)n.removeAttributeNode(u[0]);Mn(n,s,a),n[en]=t,n[gn]=a}catch(f){Le(t,t.return,f)}}var Hi=!1,sn=!1,Zc=!1,Cm=typeof WeakSet=="function"?WeakSet:Set,pn=null;function Hv(t,n){if(t=t.containerInfo,gf=Fl,t=Hd(t),Gu(t)){if("selectionStart"in t)var a={start:t.selectionStart,end:t.selectionEnd};else t:{a=(a=t.ownerDocument)&&a.defaultView||window;var s=a.getSelection&&a.getSelection();if(s&&s.rangeCount!==0){a=s.anchorNode;var u=s.anchorOffset,f=s.focusNode;s=s.focusOffset;try{a.nodeType,f.nodeType}catch{a=null;break t}var g=0,T=-1,O=-1,Q=0,ct=0,pt=t,$=null;e:for(;;){for(var rt;pt!==a||u!==0&&pt.nodeType!==3||(T=g+u),pt!==f||s!==0&&pt.nodeType!==3||(O=g+s),pt.nodeType===3&&(g+=pt.nodeValue.length),(rt=pt.firstChild)!==null;)$=pt,pt=rt;for(;;){if(pt===t)break e;if($===a&&++Q===u&&(T=g),$===f&&++ct===s&&(O=g),(rt=pt.nextSibling)!==null)break;pt=$,$=pt.parentNode}pt=rt}a=T===-1||O===-1?null:{start:T,end:O}}else a=null}a=a||{start:0,end:0}}else a=null;for(_f={focusedElem:t,selectionRange:a},Fl=!1,pn=n;pn!==null;)if(n=pn,t=n.child,(n.subtreeFlags&1028)!==0&&t!==null)t.return=n,pn=t;else for(;pn!==null;){switch(n=pn,f=n.alternate,t=n.flags,n.tag){case 0:if((t&4)!==0&&(t=n.updateQueue,t=t!==null?t.events:null,t!==null))for(a=0;a<t.length;a++)u=t[a],u.ref.impl=u.nextImpl;break;case 11:case 15:break;case 1:if((t&1024)!==0&&f!==null){t=void 0,a=n,u=f.memoizedProps,f=f.memoizedState,s=a.stateNode;try{var Ft=er(a.type,u);t=s.getSnapshotBeforeUpdate(Ft,f),s.__reactInternalSnapshotBeforeUpdate=t}catch(te){Le(a,a.return,te)}}break;case 3:if((t&1024)!==0){if(t=n.stateNode.containerInfo,a=t.nodeType,a===9)xf(t);else if(a===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":xf(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(r(163))}if(t=n.sibling,t!==null){t.return=n.return,pn=t;break}pn=n.return}}function wm(t,n,a){var s=a.flags;switch(a.tag){case 0:case 11:case 15:Vi(t,a),s&4&&$s(5,a);break;case 1:if(Vi(t,a),s&4)if(t=a.stateNode,n===null)try{t.componentDidMount()}catch(g){Le(a,a.return,g)}else{var u=er(a.type,n.memoizedProps);n=n.memoizedState;try{t.componentDidUpdate(u,n,t.__reactInternalSnapshotBeforeUpdate)}catch(g){Le(a,a.return,g)}}s&64&&Em(a),s&512&&to(a,a.return);break;case 3:if(Vi(t,a),s&64&&(t=a.updateQueue,t!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{dp(t,n)}catch(g){Le(a,a.return,g)}}break;case 27:n===null&&s&4&&Rm(a);case 26:case 5:Vi(t,a),n===null&&s&4&&bm(a),s&512&&to(a,a.return);break;case 12:Vi(t,a);break;case 31:Vi(t,a),s&4&&Lm(t,a);break;case 13:Vi(t,a),s&4&&Nm(t,a),s&64&&(t=a.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(a=jv.bind(null,a),mS(t,a))));break;case 22:if(s=a.memoizedState!==null||Hi,!s){n=n!==null&&n.memoizedState!==null||sn,u=Hi;var f=sn;Hi=s,(sn=n)&&!f?Xi(t,a,(a.subtreeFlags&8772)!==0):Vi(t,a),Hi=u,sn=f}break;case 30:break;default:Vi(t,a)}}function Dm(t){var n=t.alternate;n!==null&&(t.alternate=null,Dm(n)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(n=t.stateNode,n!==null&&b(n)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var We=null,Ln=!1;function Gi(t,n,a){for(a=a.child;a!==null;)Um(t,n,a),a=a.sibling}function Um(t,n,a){if(Rt&&typeof Rt.onCommitFiberUnmount=="function")try{Rt.onCommitFiberUnmount(Et,a)}catch{}switch(a.tag){case 26:sn||yi(a,n),Gi(t,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:sn||yi(a,n);var s=We,u=Ln;Ea(a.type)&&(We=a.stateNode,Ln=!1),Gi(t,n,a),uo(a.stateNode),We=s,Ln=u;break;case 5:sn||yi(a,n);case 6:if(s=We,u=Ln,We=null,Gi(t,n,a),We=s,Ln=u,We!==null)if(Ln)try{(We.nodeType===9?We.body:We.nodeName==="HTML"?We.ownerDocument.body:We).removeChild(a.stateNode)}catch(f){Le(a,n,f)}else try{We.removeChild(a.stateNode)}catch(f){Le(a,n,f)}break;case 18:We!==null&&(Ln?(t=We,Eg(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,a.stateNode),es(t)):Eg(We,a.stateNode));break;case 4:s=We,u=Ln,We=a.stateNode.containerInfo,Ln=!0,Gi(t,n,a),We=s,Ln=u;break;case 0:case 11:case 14:case 15:ga(2,a,n),sn||ga(4,a,n),Gi(t,n,a);break;case 1:sn||(yi(a,n),s=a.stateNode,typeof s.componentWillUnmount=="function"&&Tm(a,n,s)),Gi(t,n,a);break;case 21:Gi(t,n,a);break;case 22:sn=(s=sn)||a.memoizedState!==null,Gi(t,n,a),sn=s;break;default:Gi(t,n,a)}}function Lm(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{es(t)}catch(a){Le(n,n.return,a)}}}function Nm(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{es(t)}catch(a){Le(n,n.return,a)}}function Gv(t){switch(t.tag){case 31:case 13:case 19:var n=t.stateNode;return n===null&&(n=t.stateNode=new Cm),n;case 22:return t=t.stateNode,n=t._retryCache,n===null&&(n=t._retryCache=new Cm),n;default:throw Error(r(435,t.tag))}}function Sl(t,n){var a=Gv(t);n.forEach(function(s){if(!a.has(s)){a.add(s);var u=Kv.bind(null,t,s);s.then(u,u)}})}function Nn(t,n){var a=n.deletions;if(a!==null)for(var s=0;s<a.length;s++){var u=a[s],f=t,g=n,T=g;t:for(;T!==null;){switch(T.tag){case 27:if(Ea(T.type)){We=T.stateNode,Ln=!1;break t}break;case 5:We=T.stateNode,Ln=!1;break t;case 3:case 4:We=T.stateNode.containerInfo,Ln=!0;break t}T=T.return}if(We===null)throw Error(r(160));Um(f,g,u),We=null,Ln=!1,f=u.alternate,f!==null&&(f.return=null),u.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)Om(n,t),n=n.sibling}var fi=null;function Om(t,n){var a=t.alternate,s=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:Nn(n,t),On(t),s&4&&(ga(3,t,t.return),$s(3,t),ga(5,t,t.return));break;case 1:Nn(n,t),On(t),s&512&&(sn||a===null||yi(a,a.return)),s&64&&Hi&&(t=t.updateQueue,t!==null&&(s=t.callbacks,s!==null&&(a=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=a===null?s:a.concat(s))));break;case 26:var u=fi;if(Nn(n,t),On(t),s&512&&(sn||a===null||yi(a,a.return)),s&4){var f=a!==null?a.memoizedState:null;if(s=t.memoizedState,a===null)if(s===null)if(t.stateNode===null){t:{s=t.type,a=t.memoizedProps,u=u.ownerDocument||u;e:switch(s){case"title":f=u.getElementsByTagName("title")[0],(!f||f[Ha]||f[en]||f.namespaceURI==="http://www.w3.org/2000/svg"||f.hasAttribute("itemprop"))&&(f=u.createElement(s),u.head.insertBefore(f,u.querySelector("head > title"))),Mn(f,s,a),f[en]=t,_t(f),s=f;break t;case"link":var g=Og("link","href",u).get(s+(a.href||""));if(g){for(var T=0;T<g.length;T++)if(f=g[T],f.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&f.getAttribute("rel")===(a.rel==null?null:a.rel)&&f.getAttribute("title")===(a.title==null?null:a.title)&&f.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){g.splice(T,1);break e}}f=u.createElement(s),Mn(f,s,a),u.head.appendChild(f);break;case"meta":if(g=Og("meta","content",u).get(s+(a.content||""))){for(T=0;T<g.length;T++)if(f=g[T],f.getAttribute("content")===(a.content==null?null:""+a.content)&&f.getAttribute("name")===(a.name==null?null:a.name)&&f.getAttribute("property")===(a.property==null?null:a.property)&&f.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&f.getAttribute("charset")===(a.charSet==null?null:a.charSet)){g.splice(T,1);break e}}f=u.createElement(s),Mn(f,s,a),u.head.appendChild(f);break;default:throw Error(r(468,s))}f[en]=t,_t(f),s=f}t.stateNode=s}else zg(u,t.type,t.stateNode);else t.stateNode=Ng(u,s,t.memoizedProps);else f!==s?(f===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):f.count--,s===null?zg(u,t.type,t.stateNode):Ng(u,s,t.memoizedProps)):s===null&&t.stateNode!==null&&Wc(t,t.memoizedProps,a.memoizedProps)}break;case 27:Nn(n,t),On(t),s&512&&(sn||a===null||yi(a,a.return)),a!==null&&s&4&&Wc(t,t.memoizedProps,a.memoizedProps);break;case 5:if(Nn(n,t),On(t),s&512&&(sn||a===null||yi(a,a.return)),t.flags&32){u=t.stateNode;try{Tr(u,"")}catch(Ft){Le(t,t.return,Ft)}}s&4&&t.stateNode!=null&&(u=t.memoizedProps,Wc(t,u,a!==null?a.memoizedProps:u)),s&1024&&(Zc=!0);break;case 6:if(Nn(n,t),On(t),s&4){if(t.stateNode===null)throw Error(r(162));s=t.memoizedProps,a=t.stateNode;try{a.nodeValue=s}catch(Ft){Le(t,t.return,Ft)}}break;case 3:if(zl=null,u=fi,fi=Nl(n.containerInfo),Nn(n,t),fi=u,On(t),s&4&&a!==null&&a.memoizedState.isDehydrated)try{es(n.containerInfo)}catch(Ft){Le(t,t.return,Ft)}Zc&&(Zc=!1,zm(t));break;case 4:s=fi,fi=Nl(t.stateNode.containerInfo),Nn(n,t),On(t),fi=s;break;case 12:Nn(n,t),On(t);break;case 31:Nn(n,t),On(t),s&4&&(s=t.updateQueue,s!==null&&(t.updateQueue=null,Sl(t,s)));break;case 13:Nn(n,t),On(t),t.child.flags&8192&&t.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Ml=E()),s&4&&(s=t.updateQueue,s!==null&&(t.updateQueue=null,Sl(t,s)));break;case 22:u=t.memoizedState!==null;var O=a!==null&&a.memoizedState!==null,Q=Hi,ct=sn;if(Hi=Q||u,sn=ct||O,Nn(n,t),sn=ct,Hi=Q,On(t),s&8192)t:for(n=t.stateNode,n._visibility=u?n._visibility&-2:n._visibility|1,u&&(a===null||O||Hi||sn||nr(t)),a=null,n=t;;){if(n.tag===5||n.tag===26){if(a===null){O=a=n;try{if(f=O.stateNode,u)g=f.style,typeof g.setProperty=="function"?g.setProperty("display","none","important"):g.display="none";else{T=O.stateNode;var pt=O.memoizedProps.style,$=pt!=null&&pt.hasOwnProperty("display")?pt.display:null;T.style.display=$==null||typeof $=="boolean"?"":(""+$).trim()}}catch(Ft){Le(O,O.return,Ft)}}}else if(n.tag===6){if(a===null){O=n;try{O.stateNode.nodeValue=u?"":O.memoizedProps}catch(Ft){Le(O,O.return,Ft)}}}else if(n.tag===18){if(a===null){O=n;try{var rt=O.stateNode;u?Tg(rt,!0):Tg(O.stateNode,!1)}catch(Ft){Le(O,O.return,Ft)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===t)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break t;for(;n.sibling===null;){if(n.return===null||n.return===t)break t;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}s&4&&(s=t.updateQueue,s!==null&&(a=s.retryQueue,a!==null&&(s.retryQueue=null,Sl(t,a))));break;case 19:Nn(n,t),On(t),s&4&&(s=t.updateQueue,s!==null&&(t.updateQueue=null,Sl(t,s)));break;case 30:break;case 21:break;default:Nn(n,t),On(t)}}function On(t){var n=t.flags;if(n&2){try{for(var a,s=t.return;s!==null;){if(Am(s)){a=s;break}s=s.return}if(a==null)throw Error(r(160));switch(a.tag){case 27:var u=a.stateNode,f=qc(t);vl(t,f,u);break;case 5:var g=a.stateNode;a.flags&32&&(Tr(g,""),a.flags&=-33);var T=qc(t);vl(t,T,g);break;case 3:case 4:var O=a.stateNode.containerInfo,Q=qc(t);Yc(t,Q,O);break;default:throw Error(r(161))}}catch(ct){Le(t,t.return,ct)}t.flags&=-3}n&4096&&(t.flags&=-4097)}function zm(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var n=t;zm(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),t=t.sibling}}function Vi(t,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)wm(t,n.alternate,n),n=n.sibling}function nr(t){for(t=t.child;t!==null;){var n=t;switch(n.tag){case 0:case 11:case 14:case 15:ga(4,n,n.return),nr(n);break;case 1:yi(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&Tm(n,n.return,a),nr(n);break;case 27:uo(n.stateNode);case 26:case 5:yi(n,n.return),nr(n);break;case 22:n.memoizedState===null&&nr(n);break;case 30:nr(n);break;default:nr(n)}t=t.sibling}}function Xi(t,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var s=n.alternate,u=t,f=n,g=f.flags;switch(f.tag){case 0:case 11:case 15:Xi(u,f,a),$s(4,f);break;case 1:if(Xi(u,f,a),s=f,u=s.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(Q){Le(s,s.return,Q)}if(s=f,u=s.updateQueue,u!==null){var T=s.stateNode;try{var O=u.shared.hiddenCallbacks;if(O!==null)for(u.shared.hiddenCallbacks=null,u=0;u<O.length;u++)hp(O[u],T)}catch(Q){Le(s,s.return,Q)}}a&&g&64&&Em(f),to(f,f.return);break;case 27:Rm(f);case 26:case 5:Xi(u,f,a),a&&s===null&&g&4&&bm(f),to(f,f.return);break;case 12:Xi(u,f,a);break;case 31:Xi(u,f,a),a&&g&4&&Lm(u,f);break;case 13:Xi(u,f,a),a&&g&4&&Nm(u,f);break;case 22:f.memoizedState===null&&Xi(u,f,a),to(f,f.return);break;case 30:break;default:Xi(u,f,a)}n=n.sibling}}function jc(t,n){var a=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),t=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),t!==a&&(t!=null&&t.refCount++,a!=null&&Hs(a))}function Kc(t,n){t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&Hs(t))}function hi(t,n,a,s){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)Pm(t,n,a,s),n=n.sibling}function Pm(t,n,a,s){var u=n.flags;switch(n.tag){case 0:case 11:case 15:hi(t,n,a,s),u&2048&&$s(9,n);break;case 1:hi(t,n,a,s);break;case 3:hi(t,n,a,s),u&2048&&(t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&Hs(t)));break;case 12:if(u&2048){hi(t,n,a,s),t=n.stateNode;try{var f=n.memoizedProps,g=f.id,T=f.onPostCommit;typeof T=="function"&&T(g,n.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(O){Le(n,n.return,O)}}else hi(t,n,a,s);break;case 31:hi(t,n,a,s);break;case 13:hi(t,n,a,s);break;case 23:break;case 22:f=n.stateNode,g=n.alternate,n.memoizedState!==null?f._visibility&2?hi(t,n,a,s):eo(t,n):f._visibility&2?hi(t,n,a,s):(f._visibility|=2,kr(t,n,a,s,(n.subtreeFlags&10256)!==0||!1)),u&2048&&jc(g,n);break;case 24:hi(t,n,a,s),u&2048&&Kc(n.alternate,n);break;default:hi(t,n,a,s)}}function kr(t,n,a,s,u){for(u=u&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var f=t,g=n,T=a,O=s,Q=g.flags;switch(g.tag){case 0:case 11:case 15:kr(f,g,T,O,u),$s(8,g);break;case 23:break;case 22:var ct=g.stateNode;g.memoizedState!==null?ct._visibility&2?kr(f,g,T,O,u):eo(f,g):(ct._visibility|=2,kr(f,g,T,O,u)),u&&Q&2048&&jc(g.alternate,g);break;case 24:kr(f,g,T,O,u),u&&Q&2048&&Kc(g.alternate,g);break;default:kr(f,g,T,O,u)}n=n.sibling}}function eo(t,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=t,s=n,u=s.flags;switch(s.tag){case 22:eo(a,s),u&2048&&jc(s.alternate,s);break;case 24:eo(a,s),u&2048&&Kc(s.alternate,s);break;default:eo(a,s)}n=n.sibling}}var no=8192;function Wr(t,n,a){if(t.subtreeFlags&no)for(t=t.child;t!==null;)Bm(t,n,a),t=t.sibling}function Bm(t,n,a){switch(t.tag){case 26:Wr(t,n,a),t.flags&no&&t.memoizedState!==null&&RS(a,fi,t.memoizedState,t.memoizedProps);break;case 5:Wr(t,n,a);break;case 3:case 4:var s=fi;fi=Nl(t.stateNode.containerInfo),Wr(t,n,a),fi=s;break;case 22:t.memoizedState===null&&(s=t.alternate,s!==null&&s.memoizedState!==null?(s=no,no=16777216,Wr(t,n,a),no=s):Wr(t,n,a));break;default:Wr(t,n,a)}}function Im(t){var n=t.alternate;if(n!==null&&(t=n.child,t!==null)){n.child=null;do n=t.sibling,t.sibling=null,t=n;while(t!==null)}}function io(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var s=n[a];pn=s,Hm(s,t)}Im(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Fm(t),t=t.sibling}function Fm(t){switch(t.tag){case 0:case 11:case 15:io(t),t.flags&2048&&ga(9,t,t.return);break;case 3:io(t);break;case 12:io(t);break;case 22:var n=t.stateNode;t.memoizedState!==null&&n._visibility&2&&(t.return===null||t.return.tag!==13)?(n._visibility&=-3,xl(t)):io(t);break;default:io(t)}}function xl(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var s=n[a];pn=s,Hm(s,t)}Im(t)}for(t=t.child;t!==null;){switch(n=t,n.tag){case 0:case 11:case 15:ga(8,n,n.return),xl(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,xl(n));break;default:xl(n)}t=t.sibling}}function Hm(t,n){for(;pn!==null;){var a=pn;switch(a.tag){case 0:case 11:case 15:ga(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var s=a.memoizedState.cachePool.pool;s!=null&&s.refCount++}break;case 24:Hs(a.memoizedState.cache)}if(s=a.child,s!==null)s.return=a,pn=s;else t:for(a=t;pn!==null;){s=pn;var u=s.sibling,f=s.return;if(Dm(s),s===a){pn=null;break t}if(u!==null){u.return=f,pn=u;break t}pn=f}}}var Vv={getCacheForType:function(t){var n=Sn(nn),a=n.data.get(t);return a===void 0&&(a=t(),n.data.set(t,a)),a},cacheSignal:function(){return Sn(nn).controller.signal}},Xv=typeof WeakMap=="function"?WeakMap:Map,Re=0,Ge=null,pe=null,_e=0,Ue=0,Wn=null,_a=!1,qr=!1,Qc=!1,ki=0,je=0,va=0,ir=0,Jc=0,qn=0,Yr=0,ao=null,zn=null,$c=!1,Ml=0,Gm=0,yl=1/0,El=null,Sa=null,un=0,xa=null,Zr=null,Wi=0,tf=0,ef=null,Vm=null,ro=0,nf=null;function Yn(){return(Re&2)!==0&&_e!==0?_e&-_e:N.T!==null?uf():Fa()}function Xm(){if(qn===0)if((_e&536870912)===0||Se){var t=Ct;Ct<<=1,(Ct&3932160)===0&&(Ct=262144),qn=t}else qn=536870912;return t=Xn.current,t!==null&&(t.flags|=32),qn}function Pn(t,n,a){(t===Ge&&(Ue===2||Ue===9)||t.cancelPendingCommit!==null)&&(jr(t,0),Ma(t,_e,qn,!1)),An(t,a),((Re&2)===0||t!==Ge)&&(t===Ge&&((Re&2)===0&&(ir|=a),je===4&&Ma(t,_e,qn,!1)),Ei(t))}function km(t,n,a){if((Re&6)!==0)throw Error(r(327));var s=!a&&(n&127)===0&&(n&t.expiredLanes)===0||It(t,n),u=s?qv(t,n):rf(t,n,!0),f=s;do{if(u===0){qr&&!s&&Ma(t,n,0,!1);break}else{if(a=t.current.alternate,f&&!kv(a)){u=rf(t,n,!1),f=!1;continue}if(u===2){if(f=n,t.errorRecoveryDisabledLanes&f)var g=0;else g=t.pendingLanes&-536870913,g=g!==0?g:g&536870912?536870912:0;if(g!==0){n=g;t:{var T=t;u=ao;var O=T.current.memoizedState.isDehydrated;if(O&&(jr(T,g).flags|=256),g=rf(T,g,!1),g!==2){if(Qc&&!O){T.errorRecoveryDisabledLanes|=f,ir|=f,u=4;break t}f=zn,zn=u,f!==null&&(zn===null?zn=f:zn.push.apply(zn,f))}u=g}if(f=!1,u!==2)continue}}if(u===1){jr(t,0),Ma(t,n,0,!0);break}t:{switch(s=t,f=u,f){case 0:case 1:throw Error(r(345));case 4:if((n&4194048)!==n)break;case 6:Ma(s,n,qn,!_a);break t;case 2:zn=null;break;case 3:case 5:break;default:throw Error(r(329))}if((n&62914560)===n&&(u=Ml+300-E(),10<u)){if(Ma(s,n,qn,!_a),mt(s,0,!0)!==0)break t;Wi=n,s.timeoutHandle=Mg(Wm.bind(null,s,a,zn,El,$c,n,qn,ir,Yr,_a,f,"Throttled",-0,0),u);break t}Wm(s,a,zn,El,$c,n,qn,ir,Yr,_a,f,null,-0,0)}}break}while(!0);Ei(t)}function Wm(t,n,a,s,u,f,g,T,O,Q,ct,pt,$,rt){if(t.timeoutHandle=-1,pt=n.subtreeFlags,pt&8192||(pt&16785408)===16785408){pt={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Di},Bm(n,f,pt);var Ft=(f&62914560)===f?Ml-E():(f&4194048)===f?Gm-E():0;if(Ft=CS(pt,Ft),Ft!==null){Wi=f,t.cancelPendingCommit=Ft($m.bind(null,t,n,f,a,s,u,g,T,O,ct,pt,null,$,rt)),Ma(t,f,g,!Q);return}}$m(t,n,f,a,s,u,g,T,O)}function kv(t){for(var n=t;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var s=0;s<a.length;s++){var u=a[s],f=u.getSnapshot;u=u.value;try{if(!Gn(f(),u))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Ma(t,n,a,s){n&=~Jc,n&=~ir,t.suspendedLanes|=n,t.pingedLanes&=~n,s&&(t.warmLanes|=n),s=t.expirationTimes;for(var u=n;0<u;){var f=31-zt(u),g=1<<f;s[f]=-1,u&=~g}a!==0&&As(t,a,n)}function Tl(){return(Re&6)===0?(so(0),!1):!0}function af(){if(pe!==null){if(Ue===0)var t=pe.return;else t=pe,Oi=Za=null,Sc(t),Fr=null,Vs=0,t=pe;for(;t!==null;)ym(t.alternate,t),t=t.return;pe=null}}function jr(t,n){var a=t.timeoutHandle;a!==-1&&(t.timeoutHandle=-1,cS(a)),a=t.cancelPendingCommit,a!==null&&(t.cancelPendingCommit=null,a()),Wi=0,af(),Ge=t,pe=a=Li(t.current,null),_e=n,Ue=0,Wn=null,_a=!1,qr=It(t,n),Qc=!1,Yr=qn=Jc=ir=va=je=0,zn=ao=null,$c=!1,(n&8)!==0&&(n|=n&32);var s=t.entangledLanes;if(s!==0)for(t=t.entanglements,s&=n;0<s;){var u=31-zt(s),f=1<<u;n|=t[u],s&=~f}return ki=n,Wo(),a}function qm(t,n){oe=null,N.H=Ks,n===Ir||n===$o?(n=lp(),Ue=3):n===oc?(n=lp(),Ue=4):Ue=n===zc?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,Wn=n,pe===null&&(je=1,dl(t,$n(n,t.current)))}function Ym(){var t=Xn.current;return t===null?!0:(_e&4194048)===_e?ii===null:(_e&62914560)===_e||(_e&536870912)!==0?t===ii:!1}function Zm(){var t=N.H;return N.H=Ks,t===null?Ks:t}function jm(){var t=N.A;return N.A=Vv,t}function bl(){je=4,_a||(_e&4194048)!==_e&&Xn.current!==null||(qr=!0),(va&134217727)===0&&(ir&134217727)===0||Ge===null||Ma(Ge,_e,qn,!1)}function rf(t,n,a){var s=Re;Re|=2;var u=Zm(),f=jm();(Ge!==t||_e!==n)&&(El=null,jr(t,n)),n=!1;var g=je;t:do try{if(Ue!==0&&pe!==null){var T=pe,O=Wn;switch(Ue){case 8:af(),g=6;break t;case 3:case 2:case 9:case 6:Xn.current===null&&(n=!0);var Q=Ue;if(Ue=0,Wn=null,Kr(t,T,O,Q),a&&qr){g=0;break t}break;default:Q=Ue,Ue=0,Wn=null,Kr(t,T,O,Q)}}Wv(),g=je;break}catch(ct){qm(t,ct)}while(!0);return n&&t.shellSuspendCounter++,Oi=Za=null,Re=s,N.H=u,N.A=f,pe===null&&(Ge=null,_e=0,Wo()),g}function Wv(){for(;pe!==null;)Km(pe)}function qv(t,n){var a=Re;Re|=2;var s=Zm(),u=jm();Ge!==t||_e!==n?(El=null,yl=E()+500,jr(t,n)):qr=It(t,n);t:do try{if(Ue!==0&&pe!==null){n=pe;var f=Wn;e:switch(Ue){case 1:Ue=0,Wn=null,Kr(t,n,f,1);break;case 2:case 9:if(sp(f)){Ue=0,Wn=null,Qm(n);break}n=function(){Ue!==2&&Ue!==9||Ge!==t||(Ue=7),Ei(t)},f.then(n,n);break t;case 3:Ue=7;break t;case 4:Ue=5;break t;case 7:sp(f)?(Ue=0,Wn=null,Qm(n)):(Ue=0,Wn=null,Kr(t,n,f,7));break;case 5:var g=null;switch(pe.tag){case 26:g=pe.memoizedState;case 5:case 27:var T=pe;if(g?Pg(g):T.stateNode.complete){Ue=0,Wn=null;var O=T.sibling;if(O!==null)pe=O;else{var Q=T.return;Q!==null?(pe=Q,Al(Q)):pe=null}break e}}Ue=0,Wn=null,Kr(t,n,f,5);break;case 6:Ue=0,Wn=null,Kr(t,n,f,6);break;case 8:af(),je=6;break t;default:throw Error(r(462))}}Yv();break}catch(ct){qm(t,ct)}while(!0);return Oi=Za=null,N.H=s,N.A=u,Re=a,pe!==null?0:(Ge=null,_e=0,Wo(),je)}function Yv(){for(;pe!==null&&!qe();)Km(pe)}function Km(t){var n=xm(t.alternate,t,ki);t.memoizedProps=t.pendingProps,n===null?Al(t):pe=n}function Qm(t){var n=t,a=n.alternate;switch(n.tag){case 15:case 0:n=pm(a,n,n.pendingProps,n.type,void 0,_e);break;case 11:n=pm(a,n,n.pendingProps,n.type.render,n.ref,_e);break;case 5:Sc(n);default:ym(a,n),n=pe=jd(n,ki),n=xm(a,n,ki)}t.memoizedProps=t.pendingProps,n===null?Al(t):pe=n}function Kr(t,n,a,s){Oi=Za=null,Sc(n),Fr=null,Vs=0;var u=n.return;try{if(zv(t,u,n,a,_e)){je=1,dl(t,$n(a,t.current)),pe=null;return}}catch(f){if(u!==null)throw pe=u,f;je=1,dl(t,$n(a,t.current)),pe=null;return}n.flags&32768?(Se||s===1?t=!0:qr||(_e&536870912)!==0?t=!1:(_a=t=!0,(s===2||s===9||s===3||s===6)&&(s=Xn.current,s!==null&&s.tag===13&&(s.flags|=16384))),Jm(n,t)):Al(n)}function Al(t){var n=t;do{if((n.flags&32768)!==0){Jm(n,_a);return}t=n.return;var a=Iv(n.alternate,n,ki);if(a!==null){pe=a;return}if(n=n.sibling,n!==null){pe=n;return}pe=n=t}while(n!==null);je===0&&(je=5)}function Jm(t,n){do{var a=Fv(t.alternate,t);if(a!==null){a.flags&=32767,pe=a;return}if(a=t.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(t=t.sibling,t!==null)){pe=t;return}pe=t=a}while(t!==null);je=6,pe=null}function $m(t,n,a,s,u,f,g,T,O){t.cancelPendingCommit=null;do Rl();while(un!==0);if((Re&6)!==0)throw Error(r(327));if(n!==null){if(n===t.current)throw Error(r(177));if(f=n.lanes|n.childLanes,f|=qu,Qn(t,a,f,g,T,O),t===Ge&&(pe=Ge=null,_e=0),Zr=n,xa=t,Wi=a,tf=f,ef=u,Vm=s,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,Qv(lt,function(){return ag(),null})):(t.callbackNode=null,t.callbackPriority=0),s=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||s){s=N.T,N.T=null,u=Z.p,Z.p=2,g=Re,Re|=4;try{Hv(t,n,a)}finally{Re=g,Z.p=u,N.T=s}}un=1,tg(),eg(),ng()}}function tg(){if(un===1){un=0;var t=xa,n=Zr,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=N.T,N.T=null;var s=Z.p;Z.p=2;var u=Re;Re|=4;try{Om(n,t);var f=_f,g=Hd(t.containerInfo),T=f.focusedElem,O=f.selectionRange;if(g!==T&&T&&T.ownerDocument&&Fd(T.ownerDocument.documentElement,T)){if(O!==null&&Gu(T)){var Q=O.start,ct=O.end;if(ct===void 0&&(ct=Q),"selectionStart"in T)T.selectionStart=Q,T.selectionEnd=Math.min(ct,T.value.length);else{var pt=T.ownerDocument||document,$=pt&&pt.defaultView||window;if($.getSelection){var rt=$.getSelection(),Ft=T.textContent.length,te=Math.min(O.start,Ft),ze=O.end===void 0?te:Math.min(O.end,Ft);!rt.extend&&te>ze&&(g=ze,ze=te,te=g);var W=Id(T,te),F=Id(T,ze);if(W&&F&&(rt.rangeCount!==1||rt.anchorNode!==W.node||rt.anchorOffset!==W.offset||rt.focusNode!==F.node||rt.focusOffset!==F.offset)){var K=pt.createRange();K.setStart(W.node,W.offset),rt.removeAllRanges(),te>ze?(rt.addRange(K),rt.extend(F.node,F.offset)):(K.setEnd(F.node,F.offset),rt.addRange(K))}}}}for(pt=[],rt=T;rt=rt.parentNode;)rt.nodeType===1&&pt.push({element:rt,left:rt.scrollLeft,top:rt.scrollTop});for(typeof T.focus=="function"&&T.focus(),T=0;T<pt.length;T++){var dt=pt[T];dt.element.scrollLeft=dt.left,dt.element.scrollTop=dt.top}}Fl=!!gf,_f=gf=null}finally{Re=u,Z.p=s,N.T=a}}t.current=n,un=2}}function eg(){if(un===2){un=0;var t=xa,n=Zr,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=N.T,N.T=null;var s=Z.p;Z.p=2;var u=Re;Re|=4;try{wm(t,n.alternate,n)}finally{Re=u,Z.p=s,N.T=a}}un=3}}function ng(){if(un===4||un===3){un=0,U();var t=xa,n=Zr,a=Wi,s=Vm;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?un=5:(un=0,Zr=xa=null,ig(t,t.pendingLanes));var u=t.pendingLanes;if(u===0&&(Sa=null),yr(a),n=n.stateNode,Rt&&typeof Rt.onCommitFiberRoot=="function")try{Rt.onCommitFiberRoot(Et,n,void 0,(n.current.flags&128)===128)}catch{}if(s!==null){n=N.T,u=Z.p,Z.p=2,N.T=null;try{for(var f=t.onRecoverableError,g=0;g<s.length;g++){var T=s[g];f(T.value,{componentStack:T.stack})}}finally{N.T=n,Z.p=u}}(Wi&3)!==0&&Rl(),Ei(t),u=t.pendingLanes,(a&261930)!==0&&(u&42)!==0?t===nf?ro++:(ro=0,nf=t):ro=0,so(0)}}function ig(t,n){(t.pooledCacheLanes&=n)===0&&(n=t.pooledCache,n!=null&&(t.pooledCache=null,Hs(n)))}function Rl(){return tg(),eg(),ng(),ag()}function ag(){if(un!==5)return!1;var t=xa,n=tf;tf=0;var a=yr(Wi),s=N.T,u=Z.p;try{Z.p=32>a?32:a,N.T=null,a=ef,ef=null;var f=xa,g=Wi;if(un=0,Zr=xa=null,Wi=0,(Re&6)!==0)throw Error(r(331));var T=Re;if(Re|=4,Fm(f.current),Pm(f,f.current,g,a),Re=T,so(0,!1),Rt&&typeof Rt.onPostCommitFiberRoot=="function")try{Rt.onPostCommitFiberRoot(Et,f)}catch{}return!0}finally{Z.p=u,N.T=s,ig(t,n)}}function rg(t,n,a){n=$n(a,n),n=Oc(t.stateNode,n,2),t=da(t,n,2),t!==null&&(An(t,2),Ei(t))}function Le(t,n,a){if(t.tag===3)rg(t,t,a);else for(;n!==null;){if(n.tag===3){rg(n,t,a);break}else if(n.tag===1){var s=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof s.componentDidCatch=="function"&&(Sa===null||!Sa.has(s))){t=$n(a,t),a=sm(2),s=da(n,a,2),s!==null&&(om(a,s,n,t),An(s,2),Ei(s));break}}n=n.return}}function sf(t,n,a){var s=t.pingCache;if(s===null){s=t.pingCache=new Xv;var u=new Set;s.set(n,u)}else u=s.get(n),u===void 0&&(u=new Set,s.set(n,u));u.has(a)||(Qc=!0,u.add(a),t=Zv.bind(null,t,n,a),n.then(t,t))}function Zv(t,n,a){var s=t.pingCache;s!==null&&s.delete(n),t.pingedLanes|=t.suspendedLanes&a,t.warmLanes&=~a,Ge===t&&(_e&a)===a&&(je===4||je===3&&(_e&62914560)===_e&&300>E()-Ml?(Re&2)===0&&jr(t,0):Jc|=a,Yr===_e&&(Yr=0)),Ei(t)}function sg(t,n){n===0&&(n=De()),t=Wa(t,n),t!==null&&(An(t,n),Ei(t))}function jv(t){var n=t.memoizedState,a=0;n!==null&&(a=n.retryLane),sg(t,a)}function Kv(t,n){var a=0;switch(t.tag){case 31:case 13:var s=t.stateNode,u=t.memoizedState;u!==null&&(a=u.retryLane);break;case 19:s=t.stateNode;break;case 22:s=t.stateNode._retryCache;break;default:throw Error(r(314))}s!==null&&s.delete(n),sg(t,a)}function Qv(t,n){return ae(t,n)}var Cl=null,Qr=null,of=!1,wl=!1,lf=!1,ya=0;function Ei(t){t!==Qr&&t.next===null&&(Qr===null?Cl=Qr=t:Qr=Qr.next=t),wl=!0,of||(of=!0,$v())}function so(t,n){if(!lf&&wl){lf=!0;do for(var a=!1,s=Cl;s!==null;){if(t!==0){var u=s.pendingLanes;if(u===0)var f=0;else{var g=s.suspendedLanes,T=s.pingedLanes;f=(1<<31-zt(42|t)+1)-1,f&=u&~(g&~T),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(a=!0,cg(s,f))}else f=_e,f=mt(s,s===Ge?f:0,s.cancelPendingCommit!==null||s.timeoutHandle!==-1),(f&3)===0||It(s,f)||(a=!0,cg(s,f));s=s.next}while(a);lf=!1}}function Jv(){og()}function og(){wl=of=!1;var t=0;ya!==0&&uS()&&(t=ya);for(var n=E(),a=null,s=Cl;s!==null;){var u=s.next,f=lg(s,n);f===0?(s.next=null,a===null?Cl=u:a.next=u,u===null&&(Qr=a)):(a=s,(t!==0||(f&3)!==0)&&(wl=!0)),s=u}un!==0&&un!==5||so(t),ya!==0&&(ya=0)}function lg(t,n){for(var a=t.suspendedLanes,s=t.pingedLanes,u=t.expirationTimes,f=t.pendingLanes&-62914561;0<f;){var g=31-zt(f),T=1<<g,O=u[g];O===-1?((T&a)===0||(T&s)!==0)&&(u[g]=ie(T,n)):O<=n&&(t.expiredLanes|=T),f&=~T}if(n=Ge,a=_e,a=mt(t,t===n?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),s=t.callbackNode,a===0||t===n&&(Ue===2||Ue===9)||t.cancelPendingCommit!==null)return s!==null&&s!==null&&Ye(s),t.callbackNode=null,t.callbackPriority=0;if((a&3)===0||It(t,a)){if(n=a&-a,n===t.callbackPriority)return n;switch(s!==null&&Ye(s),yr(a)){case 2:case 8:a=St;break;case 32:a=lt;break;case 268435456:a=At;break;default:a=lt}return s=ug.bind(null,t),a=ae(a,s),t.callbackPriority=n,t.callbackNode=a,n}return s!==null&&s!==null&&Ye(s),t.callbackPriority=2,t.callbackNode=null,2}function ug(t,n){if(un!==0&&un!==5)return t.callbackNode=null,t.callbackPriority=0,null;var a=t.callbackNode;if(Rl()&&t.callbackNode!==a)return null;var s=_e;return s=mt(t,t===Ge?s:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),s===0?null:(km(t,s,n),lg(t,E()),t.callbackNode!=null&&t.callbackNode===a?ug.bind(null,t):null)}function cg(t,n){if(Rl())return null;km(t,n,!0)}function $v(){fS(function(){(Re&6)!==0?ae(ht,Jv):og()})}function uf(){if(ya===0){var t=Pr;t===0&&(t=Tt,Tt<<=1,(Tt&261888)===0&&(Tt=256)),ya=t}return ya}function fg(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:Bo(""+t)}function hg(t,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,t.id&&a.setAttribute("form",t.id),n.parentNode.insertBefore(a,n),t=new FormData(t),a.parentNode.removeChild(a),t}function tS(t,n,a,s,u){if(n==="submit"&&a&&a.stateNode===u){var f=fg((u[gn]||null).action),g=s.submitter;g&&(n=(n=g[gn]||null)?fg(n.formAction):g.getAttribute("formAction"),n!==null&&(f=n,g=null));var T=new Go("action","action",null,s,u);t.push({event:T,listeners:[{instance:null,listener:function(){if(s.defaultPrevented){if(ya!==0){var O=g?hg(u,g):new FormData(u);Cc(a,{pending:!0,data:O,method:u.method,action:f},null,O)}}else typeof f=="function"&&(T.preventDefault(),O=g?hg(u,g):new FormData(u),Cc(a,{pending:!0,data:O,method:u.method,action:f},f,O))},currentTarget:u}]})}}for(var cf=0;cf<Wu.length;cf++){var ff=Wu[cf],eS=ff.toLowerCase(),nS=ff[0].toUpperCase()+ff.slice(1);ci(eS,"on"+nS)}ci(Xd,"onAnimationEnd"),ci(kd,"onAnimationIteration"),ci(Wd,"onAnimationStart"),ci("dblclick","onDoubleClick"),ci("focusin","onFocus"),ci("focusout","onBlur"),ci(vv,"onTransitionRun"),ci(Sv,"onTransitionStart"),ci(xv,"onTransitionCancel"),ci(qd,"onTransitionEnd"),Kt("onMouseEnter",["mouseout","mouseover"]),Kt("onMouseLeave",["mouseout","mouseover"]),Kt("onPointerEnter",["pointerout","pointerover"]),Kt("onPointerLeave",["pointerout","pointerover"]),Ot("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Ot("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Ot("onBeforeInput",["compositionend","keypress","textInput","paste"]),Ot("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Ot("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Ot("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var oo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),iS=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(oo));function dg(t,n){n=(n&4)!==0;for(var a=0;a<t.length;a++){var s=t[a],u=s.event;s=s.listeners;t:{var f=void 0;if(n)for(var g=s.length-1;0<=g;g--){var T=s[g],O=T.instance,Q=T.currentTarget;if(T=T.listener,O!==f&&u.isPropagationStopped())break t;f=T,u.currentTarget=Q;try{f(u)}catch(ct){ko(ct)}u.currentTarget=null,f=O}else for(g=0;g<s.length;g++){if(T=s[g],O=T.instance,Q=T.currentTarget,T=T.listener,O!==f&&u.isPropagationStopped())break t;f=T,u.currentTarget=Q;try{f(u)}catch(ct){ko(ct)}u.currentTarget=null,f=O}}}}function me(t,n){var a=n[Cs];a===void 0&&(a=n[Cs]=new Set);var s=t+"__bubble";a.has(s)||(pg(n,t,2,!1),a.add(s))}function hf(t,n,a){var s=0;n&&(s|=4),pg(a,t,s,n)}var Dl="_reactListening"+Math.random().toString(36).slice(2);function df(t){if(!t[Dl]){t[Dl]=!0,Ut.forEach(function(a){a!=="selectionchange"&&(iS.has(a)||hf(a,!1,t),hf(a,!0,t))});var n=t.nodeType===9?t:t.ownerDocument;n===null||n[Dl]||(n[Dl]=!0,hf("selectionchange",!1,n))}}function pg(t,n,a,s){switch(Xg(n)){case 2:var u=US;break;case 8:u=LS;break;default:u=Cf}a=u.bind(null,n,a,t),u=void 0,!Lu||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(u=!0),s?u!==void 0?t.addEventListener(n,a,{capture:!0,passive:u}):t.addEventListener(n,a,!0):u!==void 0?t.addEventListener(n,a,{passive:u}):t.addEventListener(n,a,!1)}function pf(t,n,a,s,u){var f=s;if((n&1)===0&&(n&2)===0&&s!==null)t:for(;;){if(s===null)return;var g=s.tag;if(g===3||g===4){var T=s.stateNode.containerInfo;if(T===u)break;if(g===4)for(g=s.return;g!==null;){var O=g.tag;if((O===3||O===4)&&g.stateNode.containerInfo===u)return;g=g.return}for(;T!==null;){if(g=k(T),g===null)return;if(O=g.tag,O===5||O===6||O===26||O===27){s=f=g;continue t}T=T.parentNode}}s=s.return}Sd(function(){var Q=f,ct=Du(a),pt=[];t:{var $=Yd.get(t);if($!==void 0){var rt=Go,Ft=t;switch(t){case"keypress":if(Fo(a)===0)break t;case"keydown":case"keyup":rt=K0;break;case"focusin":Ft="focus",rt=Pu;break;case"focusout":Ft="blur",rt=Pu;break;case"beforeblur":case"afterblur":rt=Pu;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":rt=yd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":rt=I0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":rt=$0;break;case Xd:case kd:case Wd:rt=G0;break;case qd:rt=ev;break;case"scroll":case"scrollend":rt=P0;break;case"wheel":rt=iv;break;case"copy":case"cut":case"paste":rt=X0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":rt=Td;break;case"toggle":case"beforetoggle":rt=rv}var te=(n&4)!==0,ze=!te&&(t==="scroll"||t==="scrollend"),W=te?$!==null?$+"Capture":null:$;te=[];for(var F=Q,K;F!==null;){var dt=F;if(K=dt.stateNode,dt=dt.tag,dt!==5&&dt!==26&&dt!==27||K===null||W===null||(dt=ws(F,W),dt!=null&&te.push(lo(F,dt,K))),ze)break;F=F.return}0<te.length&&($=new rt($,Ft,null,a,ct),pt.push({event:$,listeners:te}))}}if((n&7)===0){t:{if($=t==="mouseover"||t==="pointerover",rt=t==="mouseout"||t==="pointerout",$&&a!==wu&&(Ft=a.relatedTarget||a.fromElement)&&(k(Ft)||Ft[ra]))break t;if((rt||$)&&($=ct.window===ct?ct:($=ct.ownerDocument)?$.defaultView||$.parentWindow:window,rt?(Ft=a.relatedTarget||a.toElement,rt=Q,Ft=Ft?k(Ft):null,Ft!==null&&(ze=c(Ft),te=Ft.tag,Ft!==ze||te!==5&&te!==27&&te!==6)&&(Ft=null)):(rt=null,Ft=Q),rt!==Ft)){if(te=yd,dt="onMouseLeave",W="onMouseEnter",F="mouse",(t==="pointerout"||t==="pointerover")&&(te=Td,dt="onPointerLeave",W="onPointerEnter",F="pointer"),ze=rt==null?$:at(rt),K=Ft==null?$:at(Ft),$=new te(dt,F+"leave",rt,a,ct),$.target=ze,$.relatedTarget=K,dt=null,k(ct)===Q&&(te=new te(W,F+"enter",Ft,a,ct),te.target=K,te.relatedTarget=ze,dt=te),ze=dt,rt&&Ft)e:{for(te=aS,W=rt,F=Ft,K=0,dt=W;dt;dt=te(dt))K++;dt=0;for(var Jt=F;Jt;Jt=te(Jt))dt++;for(;0<K-dt;)W=te(W),K--;for(;0<dt-K;)F=te(F),dt--;for(;K--;){if(W===F||F!==null&&W===F.alternate){te=W;break e}W=te(W),F=te(F)}te=null}else te=null;rt!==null&&mg(pt,$,rt,te,!1),Ft!==null&&ze!==null&&mg(pt,ze,Ft,te,!0)}}t:{if($=Q?at(Q):window,rt=$.nodeName&&$.nodeName.toLowerCase(),rt==="select"||rt==="input"&&$.type==="file")var Te=Ld;else if(Dd($))if(Nd)Te=mv;else{Te=dv;var Wt=hv}else rt=$.nodeName,!rt||rt.toLowerCase()!=="input"||$.type!=="checkbox"&&$.type!=="radio"?Q&&Cu(Q.elementType)&&(Te=Ld):Te=pv;if(Te&&(Te=Te(t,Q))){Ud(pt,Te,a,ct);break t}Wt&&Wt(t,$,Q),t==="focusout"&&Q&&$.type==="number"&&Q.memoizedProps.value!=null&&ln($,"number",$.value)}switch(Wt=Q?at(Q):window,t){case"focusin":(Dd(Wt)||Wt.contentEditable==="true")&&(Cr=Wt,Vu=Q,Bs=null);break;case"focusout":Bs=Vu=Cr=null;break;case"mousedown":Xu=!0;break;case"contextmenu":case"mouseup":case"dragend":Xu=!1,Gd(pt,a,ct);break;case"selectionchange":if(_v)break;case"keydown":case"keyup":Gd(pt,a,ct)}var le;if(Iu)t:{switch(t){case"compositionstart":var ve="onCompositionStart";break t;case"compositionend":ve="onCompositionEnd";break t;case"compositionupdate":ve="onCompositionUpdate";break t}ve=void 0}else Rr?Cd(t,a)&&(ve="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(ve="onCompositionStart");ve&&(bd&&a.locale!=="ko"&&(Rr||ve!=="onCompositionStart"?ve==="onCompositionEnd"&&Rr&&(le=xd()):(sa=ct,Nu="value"in sa?sa.value:sa.textContent,Rr=!0)),Wt=Ul(Q,ve),0<Wt.length&&(ve=new Ed(ve,t,null,a,ct),pt.push({event:ve,listeners:Wt}),le?ve.data=le:(le=wd(a),le!==null&&(ve.data=le)))),(le=ov?lv(t,a):uv(t,a))&&(ve=Ul(Q,"onBeforeInput"),0<ve.length&&(Wt=new Ed("onBeforeInput","beforeinput",null,a,ct),pt.push({event:Wt,listeners:ve}),Wt.data=le)),tS(pt,t,Q,a,ct)}dg(pt,n)})}function lo(t,n,a){return{instance:t,listener:n,currentTarget:a}}function Ul(t,n){for(var a=n+"Capture",s=[];t!==null;){var u=t,f=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||f===null||(u=ws(t,a),u!=null&&s.unshift(lo(t,u,f)),u=ws(t,n),u!=null&&s.push(lo(t,u,f))),t.tag===3)return s;t=t.return}return[]}function aS(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function mg(t,n,a,s,u){for(var f=n._reactName,g=[];a!==null&&a!==s;){var T=a,O=T.alternate,Q=T.stateNode;if(T=T.tag,O!==null&&O===s)break;T!==5&&T!==26&&T!==27||Q===null||(O=Q,u?(Q=ws(a,f),Q!=null&&g.unshift(lo(a,Q,O))):u||(Q=ws(a,f),Q!=null&&g.push(lo(a,Q,O)))),a=a.return}g.length!==0&&t.push({event:n,listeners:g})}var rS=/\r\n?/g,sS=/\u0000|\uFFFD/g;function gg(t){return(typeof t=="string"?t:""+t).replace(rS,`
`).replace(sS,"")}function _g(t,n){return n=gg(n),gg(t)===n}function Oe(t,n,a,s,u,f){switch(a){case"children":typeof s=="string"?n==="body"||n==="textarea"&&s===""||Tr(t,s):(typeof s=="number"||typeof s=="bigint")&&n!=="body"&&Tr(t,""+s);break;case"className":we(t,"class",s);break;case"tabIndex":we(t,"tabindex",s);break;case"dir":case"role":case"viewBox":case"width":case"height":we(t,a,s);break;case"style":_d(t,s,f);break;case"data":if(n!=="object"){we(t,"data",s);break}case"src":case"href":if(s===""&&(n!=="a"||a!=="href")){t.removeAttribute(a);break}if(s==null||typeof s=="function"||typeof s=="symbol"||typeof s=="boolean"){t.removeAttribute(a);break}s=Bo(""+s),t.setAttribute(a,s);break;case"action":case"formAction":if(typeof s=="function"){t.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(a==="formAction"?(n!=="input"&&Oe(t,n,"name",u.name,u,null),Oe(t,n,"formEncType",u.formEncType,u,null),Oe(t,n,"formMethod",u.formMethod,u,null),Oe(t,n,"formTarget",u.formTarget,u,null)):(Oe(t,n,"encType",u.encType,u,null),Oe(t,n,"method",u.method,u,null),Oe(t,n,"target",u.target,u,null)));if(s==null||typeof s=="symbol"||typeof s=="boolean"){t.removeAttribute(a);break}s=Bo(""+s),t.setAttribute(a,s);break;case"onClick":s!=null&&(t.onclick=Di);break;case"onScroll":s!=null&&me("scroll",t);break;case"onScrollEnd":s!=null&&me("scrollend",t);break;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(r(61));if(a=s.__html,a!=null){if(u.children!=null)throw Error(r(60));t.innerHTML=a}}break;case"multiple":t.multiple=s&&typeof s!="function"&&typeof s!="symbol";break;case"muted":t.muted=s&&typeof s!="function"&&typeof s!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(s==null||typeof s=="function"||typeof s=="boolean"||typeof s=="symbol"){t.removeAttribute("xlink:href");break}a=Bo(""+s),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":s!=null&&typeof s!="function"&&typeof s!="symbol"?t.setAttribute(a,""+s):t.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":s&&typeof s!="function"&&typeof s!="symbol"?t.setAttribute(a,""):t.removeAttribute(a);break;case"capture":case"download":s===!0?t.setAttribute(a,""):s!==!1&&s!=null&&typeof s!="function"&&typeof s!="symbol"?t.setAttribute(a,s):t.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":s!=null&&typeof s!="function"&&typeof s!="symbol"&&!isNaN(s)&&1<=s?t.setAttribute(a,s):t.removeAttribute(a);break;case"rowSpan":case"start":s==null||typeof s=="function"||typeof s=="symbol"||isNaN(s)?t.removeAttribute(a):t.setAttribute(a,s);break;case"popover":me("beforetoggle",t),me("toggle",t),He(t,"popover",s);break;case"xlinkActuate":de(t,"http://www.w3.org/1999/xlink","xlink:actuate",s);break;case"xlinkArcrole":de(t,"http://www.w3.org/1999/xlink","xlink:arcrole",s);break;case"xlinkRole":de(t,"http://www.w3.org/1999/xlink","xlink:role",s);break;case"xlinkShow":de(t,"http://www.w3.org/1999/xlink","xlink:show",s);break;case"xlinkTitle":de(t,"http://www.w3.org/1999/xlink","xlink:title",s);break;case"xlinkType":de(t,"http://www.w3.org/1999/xlink","xlink:type",s);break;case"xmlBase":de(t,"http://www.w3.org/XML/1998/namespace","xml:base",s);break;case"xmlLang":de(t,"http://www.w3.org/XML/1998/namespace","xml:lang",s);break;case"xmlSpace":de(t,"http://www.w3.org/XML/1998/namespace","xml:space",s);break;case"is":He(t,"is",s);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=O0.get(a)||a,He(t,a,s))}}function mf(t,n,a,s,u,f){switch(a){case"style":_d(t,s,f);break;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(r(61));if(a=s.__html,a!=null){if(u.children!=null)throw Error(r(60));t.innerHTML=a}}break;case"children":typeof s=="string"?Tr(t,s):(typeof s=="number"||typeof s=="bigint")&&Tr(t,""+s);break;case"onScroll":s!=null&&me("scroll",t);break;case"onScrollEnd":s!=null&&me("scrollend",t);break;case"onClick":s!=null&&(t.onclick=Di);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Ht.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(u=a.endsWith("Capture"),n=a.slice(2,u?a.length-7:void 0),f=t[gn]||null,f=f!=null?f[a]:null,typeof f=="function"&&t.removeEventListener(n,f,u),typeof s=="function")){typeof f!="function"&&f!==null&&(a in t?t[a]=null:t.hasAttribute(a)&&t.removeAttribute(a)),t.addEventListener(n,s,u);break t}a in t?t[a]=s:s===!0?t.setAttribute(a,""):He(t,a,s)}}}function Mn(t,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":me("error",t),me("load",t);var s=!1,u=!1,f;for(f in a)if(a.hasOwnProperty(f)){var g=a[f];if(g!=null)switch(f){case"src":s=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Oe(t,n,f,g,a,null)}}u&&Oe(t,n,"srcSet",a.srcSet,a,null),s&&Oe(t,n,"src",a.src,a,null);return;case"input":me("invalid",t);var T=f=g=u=null,O=null,Q=null;for(s in a)if(a.hasOwnProperty(s)){var ct=a[s];if(ct!=null)switch(s){case"name":u=ct;break;case"type":g=ct;break;case"checked":O=ct;break;case"defaultChecked":Q=ct;break;case"value":f=ct;break;case"defaultValue":T=ct;break;case"children":case"dangerouslySetInnerHTML":if(ct!=null)throw Error(r(137,n));break;default:Oe(t,n,s,ct,a,null)}}Rn(t,f,T,O,Q,g,u,!1);return;case"select":me("invalid",t),s=g=f=null;for(u in a)if(a.hasOwnProperty(u)&&(T=a[u],T!=null))switch(u){case"value":f=T;break;case"defaultValue":g=T;break;case"multiple":s=T;default:Oe(t,n,u,T,a,null)}n=f,a=g,t.multiple=!!s,n!=null?Ke(t,!!s,n,!1):a!=null&&Ke(t,!!s,a,!0);return;case"textarea":me("invalid",t),f=u=s=null;for(g in a)if(a.hasOwnProperty(g)&&(T=a[g],T!=null))switch(g){case"value":s=T;break;case"defaultValue":u=T;break;case"children":f=T;break;case"dangerouslySetInnerHTML":if(T!=null)throw Error(r(91));break;default:Oe(t,n,g,T,a,null)}Si(t,s,u,f);return;case"option":for(O in a)if(a.hasOwnProperty(O)&&(s=a[O],s!=null))switch(O){case"selected":t.selected=s&&typeof s!="function"&&typeof s!="symbol";break;default:Oe(t,n,O,s,a,null)}return;case"dialog":me("beforetoggle",t),me("toggle",t),me("cancel",t),me("close",t);break;case"iframe":case"object":me("load",t);break;case"video":case"audio":for(s=0;s<oo.length;s++)me(oo[s],t);break;case"image":me("error",t),me("load",t);break;case"details":me("toggle",t);break;case"embed":case"source":case"link":me("error",t),me("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(Q in a)if(a.hasOwnProperty(Q)&&(s=a[Q],s!=null))switch(Q){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Oe(t,n,Q,s,a,null)}return;default:if(Cu(n)){for(ct in a)a.hasOwnProperty(ct)&&(s=a[ct],s!==void 0&&mf(t,n,ct,s,a,void 0));return}}for(T in a)a.hasOwnProperty(T)&&(s=a[T],s!=null&&Oe(t,n,T,s,a,null))}function oS(t,n,a,s){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,f=null,g=null,T=null,O=null,Q=null,ct=null;for(rt in a){var pt=a[rt];if(a.hasOwnProperty(rt)&&pt!=null)switch(rt){case"checked":break;case"value":break;case"defaultValue":O=pt;default:s.hasOwnProperty(rt)||Oe(t,n,rt,null,s,pt)}}for(var $ in s){var rt=s[$];if(pt=a[$],s.hasOwnProperty($)&&(rt!=null||pt!=null))switch($){case"type":f=rt;break;case"name":u=rt;break;case"checked":Q=rt;break;case"defaultChecked":ct=rt;break;case"value":g=rt;break;case"defaultValue":T=rt;break;case"children":case"dangerouslySetInnerHTML":if(rt!=null)throw Error(r(137,n));break;default:rt!==pt&&Oe(t,n,$,rt,s,pt)}}yn(t,g,T,O,Q,ct,f,u);return;case"select":rt=g=T=$=null;for(f in a)if(O=a[f],a.hasOwnProperty(f)&&O!=null)switch(f){case"value":break;case"multiple":rt=O;default:s.hasOwnProperty(f)||Oe(t,n,f,null,s,O)}for(u in s)if(f=s[u],O=a[u],s.hasOwnProperty(u)&&(f!=null||O!=null))switch(u){case"value":$=f;break;case"defaultValue":T=f;break;case"multiple":g=f;default:f!==O&&Oe(t,n,u,f,s,O)}n=T,a=g,s=rt,$!=null?Ke(t,!!a,$,!1):!!s!=!!a&&(n!=null?Ke(t,!!a,n,!0):Ke(t,!!a,a?[]:"",!1));return;case"textarea":rt=$=null;for(T in a)if(u=a[T],a.hasOwnProperty(T)&&u!=null&&!s.hasOwnProperty(T))switch(T){case"value":break;case"children":break;default:Oe(t,n,T,null,s,u)}for(g in s)if(u=s[g],f=a[g],s.hasOwnProperty(g)&&(u!=null||f!=null))switch(g){case"value":$=u;break;case"defaultValue":rt=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(r(91));break;default:u!==f&&Oe(t,n,g,u,s,f)}Er(t,$,rt);return;case"option":for(var Ft in a)if($=a[Ft],a.hasOwnProperty(Ft)&&$!=null&&!s.hasOwnProperty(Ft))switch(Ft){case"selected":t.selected=!1;break;default:Oe(t,n,Ft,null,s,$)}for(O in s)if($=s[O],rt=a[O],s.hasOwnProperty(O)&&$!==rt&&($!=null||rt!=null))switch(O){case"selected":t.selected=$&&typeof $!="function"&&typeof $!="symbol";break;default:Oe(t,n,O,$,s,rt)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var te in a)$=a[te],a.hasOwnProperty(te)&&$!=null&&!s.hasOwnProperty(te)&&Oe(t,n,te,null,s,$);for(Q in s)if($=s[Q],rt=a[Q],s.hasOwnProperty(Q)&&$!==rt&&($!=null||rt!=null))switch(Q){case"children":case"dangerouslySetInnerHTML":if($!=null)throw Error(r(137,n));break;default:Oe(t,n,Q,$,s,rt)}return;default:if(Cu(n)){for(var ze in a)$=a[ze],a.hasOwnProperty(ze)&&$!==void 0&&!s.hasOwnProperty(ze)&&mf(t,n,ze,void 0,s,$);for(ct in s)$=s[ct],rt=a[ct],!s.hasOwnProperty(ct)||$===rt||$===void 0&&rt===void 0||mf(t,n,ct,$,s,rt);return}}for(var W in a)$=a[W],a.hasOwnProperty(W)&&$!=null&&!s.hasOwnProperty(W)&&Oe(t,n,W,null,s,$);for(pt in s)$=s[pt],rt=a[pt],!s.hasOwnProperty(pt)||$===rt||$==null&&rt==null||Oe(t,n,pt,$,s,rt)}function vg(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function lS(){if(typeof performance.getEntriesByType=="function"){for(var t=0,n=0,a=performance.getEntriesByType("resource"),s=0;s<a.length;s++){var u=a[s],f=u.transferSize,g=u.initiatorType,T=u.duration;if(f&&T&&vg(g)){for(g=0,T=u.responseEnd,s+=1;s<a.length;s++){var O=a[s],Q=O.startTime;if(Q>T)break;var ct=O.transferSize,pt=O.initiatorType;ct&&vg(pt)&&(O=O.responseEnd,g+=ct*(O<T?1:(T-Q)/(O-Q)))}if(--s,n+=8*(f+g)/(u.duration/1e3),t++,10<t)break}}if(0<t)return n/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var gf=null,_f=null;function Ll(t){return t.nodeType===9?t:t.ownerDocument}function Sg(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function xg(t,n){if(t===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&n==="foreignObject"?0:t}function vf(t,n){return t==="textarea"||t==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Sf=null;function uS(){var t=window.event;return t&&t.type==="popstate"?t===Sf?!1:(Sf=t,!0):(Sf=null,!1)}var Mg=typeof setTimeout=="function"?setTimeout:void 0,cS=typeof clearTimeout=="function"?clearTimeout:void 0,yg=typeof Promise=="function"?Promise:void 0,fS=typeof queueMicrotask=="function"?queueMicrotask:typeof yg<"u"?function(t){return yg.resolve(null).then(t).catch(hS)}:Mg;function hS(t){setTimeout(function(){throw t})}function Ea(t){return t==="head"}function Eg(t,n){var a=n,s=0;do{var u=a.nextSibling;if(t.removeChild(a),u&&u.nodeType===8)if(a=u.data,a==="/$"||a==="/&"){if(s===0){t.removeChild(u),es(n);return}s--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")s++;else if(a==="html")uo(t.ownerDocument.documentElement);else if(a==="head"){a=t.ownerDocument.head,uo(a);for(var f=a.firstChild;f;){var g=f.nextSibling,T=f.nodeName;f[Ha]||T==="SCRIPT"||T==="STYLE"||T==="LINK"&&f.rel.toLowerCase()==="stylesheet"||a.removeChild(f),f=g}}else a==="body"&&uo(t.ownerDocument.body);a=u}while(a);es(n)}function Tg(t,n){var a=t;t=0;do{var s=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),s&&s.nodeType===8)if(a=s.data,a==="/$"){if(t===0)break;t--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||t++;a=s}while(a)}function xf(t){var n=t.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":xf(a),b(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}t.removeChild(a)}}function dS(t,n,a,s){for(;t.nodeType===1;){var u=a;if(t.nodeName.toLowerCase()!==n.toLowerCase()){if(!s&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(s){if(!t[Ha])switch(n){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(f=t.getAttribute("rel"),f==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(f!==u.rel||t.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||t.getAttribute("title")!==(u.title==null?null:u.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(f=t.getAttribute("src"),(f!==(u.src==null?null:u.src)||t.getAttribute("type")!==(u.type==null?null:u.type)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&f&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(n==="input"&&t.type==="hidden"){var f=u.name==null?null:""+u.name;if(u.type==="hidden"&&t.getAttribute("name")===f)return t}else return t;if(t=ai(t.nextSibling),t===null)break}return null}function pS(t,n,a){if(n==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=ai(t.nextSibling),t===null))return null;return t}function bg(t,n){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!n||(t=ai(t.nextSibling),t===null))return null;return t}function Mf(t){return t.data==="$?"||t.data==="$~"}function yf(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function mS(t,n){var a=t.ownerDocument;if(t.data==="$~")t._reactRetry=n;else if(t.data!=="$?"||a.readyState!=="loading")n();else{var s=function(){n(),a.removeEventListener("DOMContentLoaded",s)};a.addEventListener("DOMContentLoaded",s),t._reactRetry=s}}function ai(t){for(;t!=null;t=t.nextSibling){var n=t.nodeType;if(n===1||n===3)break;if(n===8){if(n=t.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return t}var Ef=null;function Ag(t){t=t.nextSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="/$"||a==="/&"){if(n===0)return ai(t.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}t=t.nextSibling}return null}function Rg(t){t=t.previousSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return t;n--}else a!=="/$"&&a!=="/&"||n++}t=t.previousSibling}return null}function Cg(t,n,a){switch(n=Ll(a),t){case"html":if(t=n.documentElement,!t)throw Error(r(452));return t;case"head":if(t=n.head,!t)throw Error(r(453));return t;case"body":if(t=n.body,!t)throw Error(r(454));return t;default:throw Error(r(451))}}function uo(t){for(var n=t.attributes;n.length;)t.removeAttributeNode(n[0]);b(t)}var ri=new Map,wg=new Set;function Nl(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var qi=Z.d;Z.d={f:gS,r:_S,D:vS,C:SS,L:xS,m:MS,X:ES,S:yS,M:TS};function gS(){var t=qi.f(),n=Tl();return t||n}function _S(t){var n=it(t);n!==null&&n.tag===5&&n.type==="form"?qp(n):qi.r(t)}var Jr=typeof document>"u"?null:document;function Dg(t,n,a){var s=Jr;if(s&&typeof n=="string"&&n){var u=ge(n);u='link[rel="'+t+'"][href="'+u+'"]',typeof a=="string"&&(u+='[crossorigin="'+a+'"]'),wg.has(u)||(wg.add(u),t={rel:t,crossOrigin:a,href:n},s.querySelector(u)===null&&(n=s.createElement("link"),Mn(n,"link",t),_t(n),s.head.appendChild(n)))}}function vS(t){qi.D(t),Dg("dns-prefetch",t,null)}function SS(t,n){qi.C(t,n),Dg("preconnect",t,n)}function xS(t,n,a){qi.L(t,n,a);var s=Jr;if(s&&t&&n){var u='link[rel="preload"][as="'+ge(n)+'"]';n==="image"&&a&&a.imageSrcSet?(u+='[imagesrcset="'+ge(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(u+='[imagesizes="'+ge(a.imageSizes)+'"]')):u+='[href="'+ge(t)+'"]';var f=u;switch(n){case"style":f=$r(t);break;case"script":f=ts(t)}ri.has(f)||(t=_({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:t,as:n},a),ri.set(f,t),s.querySelector(u)!==null||n==="style"&&s.querySelector(co(f))||n==="script"&&s.querySelector(fo(f))||(n=s.createElement("link"),Mn(n,"link",t),_t(n),s.head.appendChild(n)))}}function MS(t,n){qi.m(t,n);var a=Jr;if(a&&t){var s=n&&typeof n.as=="string"?n.as:"script",u='link[rel="modulepreload"][as="'+ge(s)+'"][href="'+ge(t)+'"]',f=u;switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=ts(t)}if(!ri.has(f)&&(t=_({rel:"modulepreload",href:t},n),ri.set(f,t),a.querySelector(u)===null)){switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(fo(f)))return}s=a.createElement("link"),Mn(s,"link",t),_t(s),a.head.appendChild(s)}}}function yS(t,n,a){qi.S(t,n,a);var s=Jr;if(s&&t){var u=q(s).hoistableStyles,f=$r(t);n=n||"default";var g=u.get(f);if(!g){var T={loading:0,preload:null};if(g=s.querySelector(co(f)))T.loading=5;else{t=_({rel:"stylesheet",href:t,"data-precedence":n},a),(a=ri.get(f))&&Tf(t,a);var O=g=s.createElement("link");_t(O),Mn(O,"link",t),O._p=new Promise(function(Q,ct){O.onload=Q,O.onerror=ct}),O.addEventListener("load",function(){T.loading|=1}),O.addEventListener("error",function(){T.loading|=2}),T.loading|=4,Ol(g,n,s)}g={type:"stylesheet",instance:g,count:1,state:T},u.set(f,g)}}}function ES(t,n){qi.X(t,n);var a=Jr;if(a&&t){var s=q(a).hoistableScripts,u=ts(t),f=s.get(u);f||(f=a.querySelector(fo(u)),f||(t=_({src:t,async:!0},n),(n=ri.get(u))&&bf(t,n),f=a.createElement("script"),_t(f),Mn(f,"link",t),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},s.set(u,f))}}function TS(t,n){qi.M(t,n);var a=Jr;if(a&&t){var s=q(a).hoistableScripts,u=ts(t),f=s.get(u);f||(f=a.querySelector(fo(u)),f||(t=_({src:t,async:!0,type:"module"},n),(n=ri.get(u))&&bf(t,n),f=a.createElement("script"),_t(f),Mn(f,"link",t),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},s.set(u,f))}}function Ug(t,n,a,s){var u=(u=et.current)?Nl(u):null;if(!u)throw Error(r(446));switch(t){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=$r(a.href),a=q(u).hoistableStyles,s=a.get(n),s||(s={type:"style",instance:null,count:0,state:null},a.set(n,s)),s):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){t=$r(a.href);var f=q(u).hoistableStyles,g=f.get(t);if(g||(u=u.ownerDocument||u,g={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(t,g),(f=u.querySelector(co(t)))&&!f._p&&(g.instance=f,g.state.loading=5),ri.has(t)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},ri.set(t,a),f||bS(u,t,a,g.state))),n&&s===null)throw Error(r(528,""));return g}if(n&&s!==null)throw Error(r(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=ts(a),a=q(u).hoistableScripts,s=a.get(n),s||(s={type:"script",instance:null,count:0,state:null},a.set(n,s)),s):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,t))}}function $r(t){return'href="'+ge(t)+'"'}function co(t){return'link[rel="stylesheet"]['+t+"]"}function Lg(t){return _({},t,{"data-precedence":t.precedence,precedence:null})}function bS(t,n,a,s){t.querySelector('link[rel="preload"][as="style"]['+n+"]")?s.loading=1:(n=t.createElement("link"),s.preload=n,n.addEventListener("load",function(){return s.loading|=1}),n.addEventListener("error",function(){return s.loading|=2}),Mn(n,"link",a),_t(n),t.head.appendChild(n))}function ts(t){return'[src="'+ge(t)+'"]'}function fo(t){return"script[async]"+t}function Ng(t,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var s=t.querySelector('style[data-href~="'+ge(a.href)+'"]');if(s)return n.instance=s,_t(s),s;var u=_({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return s=(t.ownerDocument||t).createElement("style"),_t(s),Mn(s,"style",u),Ol(s,a.precedence,t),n.instance=s;case"stylesheet":u=$r(a.href);var f=t.querySelector(co(u));if(f)return n.state.loading|=4,n.instance=f,_t(f),f;s=Lg(a),(u=ri.get(u))&&Tf(s,u),f=(t.ownerDocument||t).createElement("link"),_t(f);var g=f;return g._p=new Promise(function(T,O){g.onload=T,g.onerror=O}),Mn(f,"link",s),n.state.loading|=4,Ol(f,a.precedence,t),n.instance=f;case"script":return f=ts(a.src),(u=t.querySelector(fo(f)))?(n.instance=u,_t(u),u):(s=a,(u=ri.get(f))&&(s=_({},a),bf(s,u)),t=t.ownerDocument||t,u=t.createElement("script"),_t(u),Mn(u,"link",s),t.head.appendChild(u),n.instance=u);case"void":return null;default:throw Error(r(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(s=n.instance,n.state.loading|=4,Ol(s,a.precedence,t));return n.instance}function Ol(t,n,a){for(var s=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=s.length?s[s.length-1]:null,f=u,g=0;g<s.length;g++){var T=s[g];if(T.dataset.precedence===n)f=T;else if(f!==u)break}f?f.parentNode.insertBefore(t,f.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(t,n.firstChild))}function Tf(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.title==null&&(t.title=n.title)}function bf(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.integrity==null&&(t.integrity=n.integrity)}var zl=null;function Og(t,n,a){if(zl===null){var s=new Map,u=zl=new Map;u.set(a,s)}else u=zl,s=u.get(a),s||(s=new Map,u.set(a,s));if(s.has(t))return s;for(s.set(t,null),a=a.getElementsByTagName(t),u=0;u<a.length;u++){var f=a[u];if(!(f[Ha]||f[en]||t==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var g=f.getAttribute(n)||"";g=t+g;var T=s.get(g);T?T.push(f):s.set(g,[f])}}return s}function zg(t,n,a){t=t.ownerDocument||t,t.head.insertBefore(a,n==="title"?t.querySelector("head > title"):null)}function AS(t,n,a){if(a===1||n.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return t=n.disabled,typeof n.precedence=="string"&&t==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function Pg(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function RS(t,n,a,s){if(a.type==="stylesheet"&&(typeof s.media!="string"||matchMedia(s.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var u=$r(s.href),f=n.querySelector(co(u));if(f){n=f._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(t.count++,t=Pl.bind(t),n.then(t,t)),a.state.loading|=4,a.instance=f,_t(f);return}f=n.ownerDocument||n,s=Lg(s),(u=ri.get(u))&&Tf(s,u),f=f.createElement("link"),_t(f);var g=f;g._p=new Promise(function(T,O){g.onload=T,g.onerror=O}),Mn(f,"link",s),a.instance=f}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(t.count++,a=Pl.bind(t),n.addEventListener("load",a),n.addEventListener("error",a))}}var Af=0;function CS(t,n){return t.stylesheets&&t.count===0&&Il(t,t.stylesheets),0<t.count||0<t.imgCount?function(a){var s=setTimeout(function(){if(t.stylesheets&&Il(t,t.stylesheets),t.unsuspend){var f=t.unsuspend;t.unsuspend=null,f()}},6e4+n);0<t.imgBytes&&Af===0&&(Af=62500*lS());var u=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&Il(t,t.stylesheets),t.unsuspend)){var f=t.unsuspend;t.unsuspend=null,f()}},(t.imgBytes>Af?50:800)+n);return t.unsuspend=a,function(){t.unsuspend=null,clearTimeout(s),clearTimeout(u)}}:null}function Pl(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Il(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var Bl=null;function Il(t,n){t.stylesheets=null,t.unsuspend!==null&&(t.count++,Bl=new Map,n.forEach(wS,t),Bl=null,Pl.call(t))}function wS(t,n){if(!(n.state.loading&4)){var a=Bl.get(t);if(a)var s=a.get(null);else{a=new Map,Bl.set(t,a);for(var u=t.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<u.length;f++){var g=u[f];(g.nodeName==="LINK"||g.getAttribute("media")!=="not all")&&(a.set(g.dataset.precedence,g),s=g)}s&&a.set(null,s)}u=n.instance,g=u.getAttribute("data-precedence"),f=a.get(g)||s,f===s&&a.set(null,u),a.set(g,u),this.count++,s=Pl.bind(this),u.addEventListener("load",s),u.addEventListener("error",s),f?f.parentNode.insertBefore(u,f.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(u,t.firstChild)),n.state.loading|=4}}var ho={$$typeof:z,Provider:null,Consumer:null,_currentValue:Y,_currentValue2:Y,_threadCount:0};function DS(t,n,a,s,u,f,g,T,O){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Me(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Me(0),this.hiddenUpdates=Me(null),this.identifierPrefix=s,this.onUncaughtError=u,this.onCaughtError=f,this.onRecoverableError=g,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=O,this.incompleteTransitions=new Map}function Bg(t,n,a,s,u,f,g,T,O,Q,ct,pt){return t=new DS(t,n,a,g,O,Q,ct,pt,T),n=1,f===!0&&(n|=24),f=Vn(3,null,null,n),t.current=f,f.stateNode=t,n=ac(),n.refCount++,t.pooledCache=n,n.refCount++,f.memoizedState={element:s,isDehydrated:a,cache:n},lc(f),t}function Ig(t){return t?(t=Ur,t):Ur}function Fg(t,n,a,s,u,f){u=Ig(u),s.context===null?s.context=u:s.pendingContext=u,s=ha(n),s.payload={element:a},f=f===void 0?null:f,f!==null&&(s.callback=f),a=da(t,s,n),a!==null&&(Pn(a,t,n),ks(a,t,n))}function Hg(t,n){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<n?a:n}}function Rf(t,n){Hg(t,n),(t=t.alternate)&&Hg(t,n)}function Gg(t){if(t.tag===13||t.tag===31){var n=Wa(t,67108864);n!==null&&Pn(n,t,67108864),Rf(t,67108864)}}function Vg(t){if(t.tag===13||t.tag===31){var n=Yn();n=Mr(n);var a=Wa(t,n);a!==null&&Pn(a,t,n),Rf(t,n)}}var Fl=!0;function US(t,n,a,s){var u=N.T;N.T=null;var f=Z.p;try{Z.p=2,Cf(t,n,a,s)}finally{Z.p=f,N.T=u}}function LS(t,n,a,s){var u=N.T;N.T=null;var f=Z.p;try{Z.p=8,Cf(t,n,a,s)}finally{Z.p=f,N.T=u}}function Cf(t,n,a,s){if(Fl){var u=wf(s);if(u===null)pf(t,n,s,Hl,a),kg(t,s);else if(OS(u,t,n,a,s))s.stopPropagation();else if(kg(t,s),n&4&&-1<NS.indexOf(t)){for(;u!==null;){var f=it(u);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var g=Mt(f.pendingLanes);if(g!==0){var T=f;for(T.pendingLanes|=2,T.entangledLanes|=2;g;){var O=1<<31-zt(g);T.entanglements[1]|=O,g&=~O}Ei(f),(Re&6)===0&&(yl=E()+500,so(0))}}break;case 31:case 13:T=Wa(f,2),T!==null&&Pn(T,f,2),Tl(),Rf(f,2)}if(f=wf(s),f===null&&pf(t,n,s,Hl,a),f===u)break;u=f}u!==null&&s.stopPropagation()}else pf(t,n,s,null,a)}}function wf(t){return t=Du(t),Df(t)}var Hl=null;function Df(t){if(Hl=null,t=k(t),t!==null){var n=c(t);if(n===null)t=null;else{var a=n.tag;if(a===13){if(t=h(n),t!==null)return t;t=null}else if(a===31){if(t=d(n),t!==null)return t;t=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;t=null}else n!==t&&(t=null)}}return Hl=t,null}function Xg(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(J()){case ht:return 2;case St:return 8;case lt:case Zt:return 32;case At:return 268435456;default:return 32}default:return 32}}var Uf=!1,Ta=null,ba=null,Aa=null,po=new Map,mo=new Map,Ra=[],NS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function kg(t,n){switch(t){case"focusin":case"focusout":Ta=null;break;case"dragenter":case"dragleave":ba=null;break;case"mouseover":case"mouseout":Aa=null;break;case"pointerover":case"pointerout":po.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":mo.delete(n.pointerId)}}function go(t,n,a,s,u,f){return t===null||t.nativeEvent!==f?(t={blockedOn:n,domEventName:a,eventSystemFlags:s,nativeEvent:f,targetContainers:[u]},n!==null&&(n=it(n),n!==null&&Gg(n)),t):(t.eventSystemFlags|=s,n=t.targetContainers,u!==null&&n.indexOf(u)===-1&&n.push(u),t)}function OS(t,n,a,s,u){switch(n){case"focusin":return Ta=go(Ta,t,n,a,s,u),!0;case"dragenter":return ba=go(ba,t,n,a,s,u),!0;case"mouseover":return Aa=go(Aa,t,n,a,s,u),!0;case"pointerover":var f=u.pointerId;return po.set(f,go(po.get(f)||null,t,n,a,s,u)),!0;case"gotpointercapture":return f=u.pointerId,mo.set(f,go(mo.get(f)||null,t,n,a,s,u)),!0}return!1}function Wg(t){var n=k(t.target);if(n!==null){var a=c(n);if(a!==null){if(n=a.tag,n===13){if(n=h(a),n!==null){t.blockedOn=n,Rs(t.priority,function(){Vg(a)});return}}else if(n===31){if(n=d(a),n!==null){t.blockedOn=n,Rs(t.priority,function(){Vg(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Gl(t){if(t.blockedOn!==null)return!1;for(var n=t.targetContainers;0<n.length;){var a=wf(t.nativeEvent);if(a===null){a=t.nativeEvent;var s=new a.constructor(a.type,a);wu=s,a.target.dispatchEvent(s),wu=null}else return n=it(a),n!==null&&Gg(n),t.blockedOn=a,!1;n.shift()}return!0}function qg(t,n,a){Gl(t)&&a.delete(n)}function zS(){Uf=!1,Ta!==null&&Gl(Ta)&&(Ta=null),ba!==null&&Gl(ba)&&(ba=null),Aa!==null&&Gl(Aa)&&(Aa=null),po.forEach(qg),mo.forEach(qg)}function Vl(t,n){t.blockedOn===n&&(t.blockedOn=null,Uf||(Uf=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,zS)))}var Xl=null;function Yg(t){Xl!==t&&(Xl=t,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){Xl===t&&(Xl=null);for(var n=0;n<t.length;n+=3){var a=t[n],s=t[n+1],u=t[n+2];if(typeof s!="function"){if(Df(s||a)===null)continue;break}var f=it(a);f!==null&&(t.splice(n,3),n-=3,Cc(f,{pending:!0,data:u,method:a.method,action:s},s,u))}}))}function es(t){function n(O){return Vl(O,t)}Ta!==null&&Vl(Ta,t),ba!==null&&Vl(ba,t),Aa!==null&&Vl(Aa,t),po.forEach(n),mo.forEach(n);for(var a=0;a<Ra.length;a++){var s=Ra[a];s.blockedOn===t&&(s.blockedOn=null)}for(;0<Ra.length&&(a=Ra[0],a.blockedOn===null);)Wg(a),a.blockedOn===null&&Ra.shift();if(a=(t.ownerDocument||t).$$reactFormReplay,a!=null)for(s=0;s<a.length;s+=3){var u=a[s],f=a[s+1],g=u[gn]||null;if(typeof f=="function")g||Yg(a);else if(g){var T=null;if(f&&f.hasAttribute("formAction")){if(u=f,g=f[gn]||null)T=g.formAction;else if(Df(u)!==null)continue}else T=g.action;typeof T=="function"?a[s+1]=T:(a.splice(s,3),s-=3),Yg(a)}}}function Zg(){function t(f){f.canIntercept&&f.info==="react-transition"&&f.intercept({handler:function(){return new Promise(function(g){return u=g})},focusReset:"manual",scroll:"manual"})}function n(){u!==null&&(u(),u=null),s||setTimeout(a,20)}function a(){if(!s&&!navigation.transition){var f=navigation.currentEntry;f&&f.url!=null&&navigation.navigate(f.url,{state:f.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var s=!1,u=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){s=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),u!==null&&(u(),u=null)}}}function Lf(t){this._internalRoot=t}kl.prototype.render=Lf.prototype.render=function(t){var n=this._internalRoot;if(n===null)throw Error(r(409));var a=n.current,s=Yn();Fg(a,s,t,n,null,null)},kl.prototype.unmount=Lf.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var n=t.containerInfo;Fg(t.current,2,null,t,null,null),Tl(),n[ra]=null}};function kl(t){this._internalRoot=t}kl.prototype.unstable_scheduleHydration=function(t){if(t){var n=Fa();t={blockedOn:null,target:t,priority:n};for(var a=0;a<Ra.length&&n!==0&&n<Ra[a].priority;a++);Ra.splice(a,0,t),a===0&&Wg(t)}};var jg=e.version;if(jg!=="19.2.0")throw Error(r(527,jg,"19.2.0"));Z.findDOMNode=function(t){var n=t._reactInternals;if(n===void 0)throw typeof t.render=="function"?Error(r(188)):(t=Object.keys(t).join(","),Error(r(268,t)));return t=p(n),t=t!==null?S(t):null,t=t===null?null:t.stateNode,t};var PS={bundleType:0,version:"19.2.0",rendererPackageName:"react-dom",currentDispatcherRef:N,reconcilerVersion:"19.2.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Wl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Wl.isDisabled&&Wl.supportsFiber)try{Et=Wl.inject(PS),Rt=Wl}catch{}}return vo.createRoot=function(t,n){if(!l(t))throw Error(r(299));var a=!1,s="",u=nm,f=im,g=am;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(g=n.onRecoverableError)),n=Bg(t,1,!1,null,null,a,s,null,u,f,g,Zg),t[ra]=n.current,df(t),new Lf(n)},vo.hydrateRoot=function(t,n,a){if(!l(t))throw Error(r(299));var s=!1,u="",f=nm,g=im,T=am,O=null;return a!=null&&(a.unstable_strictMode===!0&&(s=!0),a.identifierPrefix!==void 0&&(u=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(g=a.onCaughtError),a.onRecoverableError!==void 0&&(T=a.onRecoverableError),a.formState!==void 0&&(O=a.formState)),n=Bg(t,1,!0,n,a??null,s,u,O,f,g,T,Zg),n.context=Ig(null),a=n.current,s=Yn(),s=Mr(s),u=ha(s),u.callback=null,da(a,u,s),a=s,n.current.lanes=a,An(n,a),Ei(n),t[ra]=n.current,df(t),new kl(n)},vo.version="19.2.0",vo}var r_;function qS(){if(r_)return zf.exports;r_=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),zf.exports=WS(),zf.exports}var YS=qS();/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const sd="180",ZS=0,s_=1,jS=2,i0=1,KS=2,Ji=3,Ia=0,Fn=1,$i=2,Pa=0,_s=1,o_=2,l_=3,u_=4,QS=5,hr=100,JS=101,$S=102,tx=103,ex=104,nx=200,ix=201,ax=202,rx=203,gh=204,_h=205,sx=206,ox=207,lx=208,ux=209,cx=210,fx=211,hx=212,dx=213,px=214,vh=0,Sh=1,xh=2,Ss=3,Mh=4,yh=5,Eh=6,Th=7,a0=0,mx=1,gx=2,Ba=0,_x=1,vx=2,Sx=3,xx=4,Mx=5,yx=6,Ex=7,r0=300,xs=301,Ms=302,bh=303,Ah=304,Eu=306,Rh=1e3,pr=1001,Ch=1002,ui=1003,Tx=1004,ql=1005,bi=1006,Ff=1007,mr=1008,na=1009,s0=1010,o0=1011,bo=1012,od=1013,_r=1014,ta=1015,Do=1016,ld=1017,ud=1018,Ao=1020,l0=35902,u0=35899,c0=1021,f0=1022,_i=1023,Ro=1026,Co=1027,h0=1028,cd=1029,d0=1030,fd=1031,hd=1033,mu=33776,gu=33777,_u=33778,vu=33779,wh=35840,Dh=35841,Uh=35842,Lh=35843,Nh=36196,Oh=37492,zh=37496,Ph=37808,Bh=37809,Ih=37810,Fh=37811,Hh=37812,Gh=37813,Vh=37814,Xh=37815,kh=37816,Wh=37817,qh=37818,Yh=37819,Zh=37820,jh=37821,Kh=36492,Qh=36494,Jh=36495,$h=36283,td=36284,ed=36285,nd=36286,bx=3200,Ax=3201,Rx=0,Cx=1,za="",oi="srgb",ys="srgb-linear",xu="linear",Pe="srgb",ns=7680,c_=519,wx=512,Dx=513,Ux=514,p0=515,Lx=516,Nx=517,Ox=518,zx=519,f_=35044,h_="300 es",Ai=2e3,Mu=2001;class Ts{addEventListener(e,i){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(i)===-1&&r[e].push(i)}hasEventListener(e,i){const r=this._listeners;return r===void 0?!1:r[e]!==void 0&&r[e].indexOf(i)!==-1}removeEventListener(e,i){const r=this._listeners;if(r===void 0)return;const l=r[e];if(l!==void 0){const c=l.indexOf(i);c!==-1&&l.splice(c,1)}}dispatchEvent(e){const i=this._listeners;if(i===void 0)return;const r=i[e.type];if(r!==void 0){e.target=this;const l=r.slice(0);for(let c=0,h=l.length;c<h;c++)l[c].call(this,e);e.target=null}}}const Tn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Hf=Math.PI/180,id=180/Math.PI;function Uo(){const o=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Tn[o&255]+Tn[o>>8&255]+Tn[o>>16&255]+Tn[o>>24&255]+"-"+Tn[e&255]+Tn[e>>8&255]+"-"+Tn[e>>16&15|64]+Tn[e>>24&255]+"-"+Tn[i&63|128]+Tn[i>>8&255]+"-"+Tn[i>>16&255]+Tn[i>>24&255]+Tn[r&255]+Tn[r>>8&255]+Tn[r>>16&255]+Tn[r>>24&255]).toLowerCase()}function xe(o,e,i){return Math.max(e,Math.min(i,o))}function Px(o,e){return(o%e+e)%e}function Gf(o,e,i){return(1-i)*o+i*e}function So(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function Bn(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}class Ie{constructor(e=0,i=0){Ie.prototype.isVector2=!0,this.x=e,this.y=i}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,i){return this.x=e,this.y=i,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const i=this.x,r=this.y,l=e.elements;return this.x=l[0]*i+l[3]*r+l[6],this.y=l[1]*i+l[4]*r+l[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,i){return this.x=xe(this.x,e.x,i.x),this.y=xe(this.y,e.y,i.y),this}clampScalar(e,i){return this.x=xe(this.x,e,i),this.y=xe(this.y,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(xe(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(e)/i;return Math.acos(xe(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,r=this.y-e.y;return i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this}rotateAround(e,i){const r=Math.cos(i),l=Math.sin(i),c=this.x-e.x,h=this.y-e.y;return this.x=c*r-h*l+e.x,this.y=c*l+h*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Lo{constructor(e=0,i=0,r=0,l=1){this.isQuaternion=!0,this._x=e,this._y=i,this._z=r,this._w=l}static slerpFlat(e,i,r,l,c,h,d){let m=r[l+0],p=r[l+1],S=r[l+2],_=r[l+3];const x=c[h+0],y=c[h+1],A=c[h+2],R=c[h+3];if(d===0){e[i+0]=m,e[i+1]=p,e[i+2]=S,e[i+3]=_;return}if(d===1){e[i+0]=x,e[i+1]=y,e[i+2]=A,e[i+3]=R;return}if(_!==R||m!==x||p!==y||S!==A){let M=1-d;const v=m*x+p*y+S*A+_*R,I=v>=0?1:-1,z=1-v*v;if(z>Number.EPSILON){const X=Math.sqrt(z),H=Math.atan2(X,v*I);M=Math.sin(M*H)/X,d=Math.sin(d*H)/X}const D=d*I;if(m=m*M+x*D,p=p*M+y*D,S=S*M+A*D,_=_*M+R*D,M===1-d){const X=1/Math.sqrt(m*m+p*p+S*S+_*_);m*=X,p*=X,S*=X,_*=X}}e[i]=m,e[i+1]=p,e[i+2]=S,e[i+3]=_}static multiplyQuaternionsFlat(e,i,r,l,c,h){const d=r[l],m=r[l+1],p=r[l+2],S=r[l+3],_=c[h],x=c[h+1],y=c[h+2],A=c[h+3];return e[i]=d*A+S*_+m*y-p*x,e[i+1]=m*A+S*x+p*_-d*y,e[i+2]=p*A+S*y+d*x-m*_,e[i+3]=S*A-d*_-m*x-p*y,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,i,r,l){return this._x=e,this._y=i,this._z=r,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,i=!0){const r=e._x,l=e._y,c=e._z,h=e._order,d=Math.cos,m=Math.sin,p=d(r/2),S=d(l/2),_=d(c/2),x=m(r/2),y=m(l/2),A=m(c/2);switch(h){case"XYZ":this._x=x*S*_+p*y*A,this._y=p*y*_-x*S*A,this._z=p*S*A+x*y*_,this._w=p*S*_-x*y*A;break;case"YXZ":this._x=x*S*_+p*y*A,this._y=p*y*_-x*S*A,this._z=p*S*A-x*y*_,this._w=p*S*_+x*y*A;break;case"ZXY":this._x=x*S*_-p*y*A,this._y=p*y*_+x*S*A,this._z=p*S*A+x*y*_,this._w=p*S*_-x*y*A;break;case"ZYX":this._x=x*S*_-p*y*A,this._y=p*y*_+x*S*A,this._z=p*S*A-x*y*_,this._w=p*S*_+x*y*A;break;case"YZX":this._x=x*S*_+p*y*A,this._y=p*y*_+x*S*A,this._z=p*S*A-x*y*_,this._w=p*S*_-x*y*A;break;case"XZY":this._x=x*S*_-p*y*A,this._y=p*y*_-x*S*A,this._z=p*S*A+x*y*_,this._w=p*S*_+x*y*A;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+h)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,i){const r=i/2,l=Math.sin(r);return this._x=e.x*l,this._y=e.y*l,this._z=e.z*l,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const i=e.elements,r=i[0],l=i[4],c=i[8],h=i[1],d=i[5],m=i[9],p=i[2],S=i[6],_=i[10],x=r+d+_;if(x>0){const y=.5/Math.sqrt(x+1);this._w=.25/y,this._x=(S-m)*y,this._y=(c-p)*y,this._z=(h-l)*y}else if(r>d&&r>_){const y=2*Math.sqrt(1+r-d-_);this._w=(S-m)/y,this._x=.25*y,this._y=(l+h)/y,this._z=(c+p)/y}else if(d>_){const y=2*Math.sqrt(1+d-r-_);this._w=(c-p)/y,this._x=(l+h)/y,this._y=.25*y,this._z=(m+S)/y}else{const y=2*Math.sqrt(1+_-r-d);this._w=(h-l)/y,this._x=(c+p)/y,this._y=(m+S)/y,this._z=.25*y}return this._onChangeCallback(),this}setFromUnitVectors(e,i){let r=e.dot(i)+1;return r<1e-8?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*i.z-e.z*i.y,this._y=e.z*i.x-e.x*i.z,this._z=e.x*i.y-e.y*i.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(xe(this.dot(e),-1,1)))}rotateTowards(e,i){const r=this.angleTo(e);if(r===0)return this;const l=Math.min(1,i/r);return this.slerp(e,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,i){const r=e._x,l=e._y,c=e._z,h=e._w,d=i._x,m=i._y,p=i._z,S=i._w;return this._x=r*S+h*d+l*p-c*m,this._y=l*S+h*m+c*d-r*p,this._z=c*S+h*p+r*m-l*d,this._w=h*S-r*d-l*m-c*p,this._onChangeCallback(),this}slerp(e,i){if(i===0)return this;if(i===1)return this.copy(e);const r=this._x,l=this._y,c=this._z,h=this._w;let d=h*e._w+r*e._x+l*e._y+c*e._z;if(d<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,d=-d):this.copy(e),d>=1)return this._w=h,this._x=r,this._y=l,this._z=c,this;const m=1-d*d;if(m<=Number.EPSILON){const y=1-i;return this._w=y*h+i*this._w,this._x=y*r+i*this._x,this._y=y*l+i*this._y,this._z=y*c+i*this._z,this.normalize(),this}const p=Math.sqrt(m),S=Math.atan2(p,d),_=Math.sin((1-i)*S)/p,x=Math.sin(i*S)/p;return this._w=h*_+this._w*x,this._x=r*_+this._x*x,this._y=l*_+this._y*x,this._z=c*_+this._z*x,this._onChangeCallback(),this}slerpQuaternions(e,i,r){return this.copy(e).slerp(i,r)}random(){const e=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),r=Math.random(),l=Math.sqrt(1-r),c=Math.sqrt(r);return this.set(l*Math.sin(e),l*Math.cos(e),c*Math.sin(i),c*Math.cos(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,i=0){return this._x=e[i],this._y=e[i+1],this._z=e[i+2],this._w=e[i+3],this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._w,e}fromBufferAttribute(e,i){return this._x=e.getX(i),this._y=e.getY(i),this._z=e.getZ(i),this._w=e.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class st{constructor(e=0,i=0,r=0){st.prototype.isVector3=!0,this.x=e,this.y=i,this.z=r}set(e,i,r){return r===void 0&&(r=this.z),this.x=e,this.y=i,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,i){return this.x=e.x*i.x,this.y=e.y*i.y,this.z=e.z*i.z,this}applyEuler(e){return this.applyQuaternion(d_.setFromEuler(e))}applyAxisAngle(e,i){return this.applyQuaternion(d_.setFromAxisAngle(e,i))}applyMatrix3(e){const i=this.x,r=this.y,l=this.z,c=e.elements;return this.x=c[0]*i+c[3]*r+c[6]*l,this.y=c[1]*i+c[4]*r+c[7]*l,this.z=c[2]*i+c[5]*r+c[8]*l,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const i=this.x,r=this.y,l=this.z,c=e.elements,h=1/(c[3]*i+c[7]*r+c[11]*l+c[15]);return this.x=(c[0]*i+c[4]*r+c[8]*l+c[12])*h,this.y=(c[1]*i+c[5]*r+c[9]*l+c[13])*h,this.z=(c[2]*i+c[6]*r+c[10]*l+c[14])*h,this}applyQuaternion(e){const i=this.x,r=this.y,l=this.z,c=e.x,h=e.y,d=e.z,m=e.w,p=2*(h*l-d*r),S=2*(d*i-c*l),_=2*(c*r-h*i);return this.x=i+m*p+h*_-d*S,this.y=r+m*S+d*p-c*_,this.z=l+m*_+c*S-h*p,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const i=this.x,r=this.y,l=this.z,c=e.elements;return this.x=c[0]*i+c[4]*r+c[8]*l,this.y=c[1]*i+c[5]*r+c[9]*l,this.z=c[2]*i+c[6]*r+c[10]*l,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,i){return this.x=xe(this.x,e.x,i.x),this.y=xe(this.y,e.y,i.y),this.z=xe(this.z,e.z,i.z),this}clampScalar(e,i){return this.x=xe(this.x,e,i),this.y=xe(this.y,e,i),this.z=xe(this.z,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(xe(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this.z=e.z+(i.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,i){const r=e.x,l=e.y,c=e.z,h=i.x,d=i.y,m=i.z;return this.x=l*m-c*d,this.y=c*h-r*m,this.z=r*d-l*h,this}projectOnVector(e){const i=e.lengthSq();if(i===0)return this.set(0,0,0);const r=e.dot(this)/i;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return Vf.copy(this).projectOnVector(e),this.sub(Vf)}reflect(e){return this.sub(Vf.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(e)/i;return Math.acos(xe(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,r=this.y-e.y,l=this.z-e.z;return i*i+r*r+l*l}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,i,r){const l=Math.sin(i)*e;return this.x=l*Math.sin(r),this.y=Math.cos(i)*e,this.z=l*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,i,r){return this.x=e*Math.sin(i),this.y=r,this.z=e*Math.cos(i),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(e){const i=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),l=this.setFromMatrixColumn(e,2).length();return this.x=i,this.y=r,this.z=l,this}setFromMatrixColumn(e,i){return this.fromArray(e.elements,i*4)}setFromMatrix3Column(e,i){return this.fromArray(e.elements,i*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,i=Math.random()*2-1,r=Math.sqrt(1-i*i);return this.x=r*Math.cos(e),this.y=i,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Vf=new st,d_=new Lo;class ue{constructor(e,i,r,l,c,h,d,m,p){ue.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,i,r,l,c,h,d,m,p)}set(e,i,r,l,c,h,d,m,p){const S=this.elements;return S[0]=e,S[1]=l,S[2]=d,S[3]=i,S[4]=c,S[5]=m,S[6]=r,S[7]=h,S[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const i=this.elements,r=e.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],this}extractBasis(e,i,r){return e.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const i=e.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const r=e.elements,l=i.elements,c=this.elements,h=r[0],d=r[3],m=r[6],p=r[1],S=r[4],_=r[7],x=r[2],y=r[5],A=r[8],R=l[0],M=l[3],v=l[6],I=l[1],z=l[4],D=l[7],X=l[2],H=l[5],P=l[8];return c[0]=h*R+d*I+m*X,c[3]=h*M+d*z+m*H,c[6]=h*v+d*D+m*P,c[1]=p*R+S*I+_*X,c[4]=p*M+S*z+_*H,c[7]=p*v+S*D+_*P,c[2]=x*R+y*I+A*X,c[5]=x*M+y*z+A*H,c[8]=x*v+y*D+A*P,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=e,i[4]*=e,i[7]*=e,i[2]*=e,i[5]*=e,i[8]*=e,this}determinant(){const e=this.elements,i=e[0],r=e[1],l=e[2],c=e[3],h=e[4],d=e[5],m=e[6],p=e[7],S=e[8];return i*h*S-i*d*p-r*c*S+r*d*m+l*c*p-l*h*m}invert(){const e=this.elements,i=e[0],r=e[1],l=e[2],c=e[3],h=e[4],d=e[5],m=e[6],p=e[7],S=e[8],_=S*h-d*p,x=d*m-S*c,y=p*c-h*m,A=i*_+r*x+l*y;if(A===0)return this.set(0,0,0,0,0,0,0,0,0);const R=1/A;return e[0]=_*R,e[1]=(l*p-S*r)*R,e[2]=(d*r-l*h)*R,e[3]=x*R,e[4]=(S*i-l*m)*R,e[5]=(l*c-d*i)*R,e[6]=y*R,e[7]=(r*m-p*i)*R,e[8]=(h*i-r*c)*R,this}transpose(){let e;const i=this.elements;return e=i[1],i[1]=i[3],i[3]=e,e=i[2],i[2]=i[6],i[6]=e,e=i[5],i[5]=i[7],i[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const i=this.elements;return e[0]=i[0],e[1]=i[3],e[2]=i[6],e[3]=i[1],e[4]=i[4],e[5]=i[7],e[6]=i[2],e[7]=i[5],e[8]=i[8],this}setUvTransform(e,i,r,l,c,h,d){const m=Math.cos(c),p=Math.sin(c);return this.set(r*m,r*p,-r*(m*h+p*d)+h+e,-l*p,l*m,-l*(-p*h+m*d)+d+i,0,0,1),this}scale(e,i){return this.premultiply(Xf.makeScale(e,i)),this}rotate(e){return this.premultiply(Xf.makeRotation(-e)),this}translate(e,i){return this.premultiply(Xf.makeTranslation(e,i)),this}makeTranslation(e,i){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,i,0,0,1),this}makeRotation(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,-r,0,r,i,0,0,0,1),this}makeScale(e,i){return this.set(e,0,0,0,i,0,0,0,1),this}equals(e){const i=this.elements,r=e.elements;for(let l=0;l<9;l++)if(i[l]!==r[l])return!1;return!0}fromArray(e,i=0){for(let r=0;r<9;r++)this.elements[r]=e[r+i];return this}toArray(e=[],i=0){const r=this.elements;return e[i]=r[0],e[i+1]=r[1],e[i+2]=r[2],e[i+3]=r[3],e[i+4]=r[4],e[i+5]=r[5],e[i+6]=r[6],e[i+7]=r[7],e[i+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Xf=new ue;function m0(o){for(let e=o.length-1;e>=0;--e)if(o[e]>=65535)return!0;return!1}function yu(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function Bx(){const o=yu("canvas");return o.style.display="block",o}const p_={};function wo(o){o in p_||(p_[o]=!0,console.warn(o))}function Ix(o,e,i){return new Promise(function(r,l){function c(){switch(o.clientWaitSync(e,o.SYNC_FLUSH_COMMANDS_BIT,0)){case o.WAIT_FAILED:l();break;case o.TIMEOUT_EXPIRED:setTimeout(c,i);break;default:r()}}setTimeout(c,i)})}const m_=new ue().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),g_=new ue().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Fx(){const o={enabled:!0,workingColorSpace:ys,spaces:{},convert:function(l,c,h){return this.enabled===!1||c===h||!c||!h||(this.spaces[c].transfer===Pe&&(l.r=ea(l.r),l.g=ea(l.g),l.b=ea(l.b)),this.spaces[c].primaries!==this.spaces[h].primaries&&(l.applyMatrix3(this.spaces[c].toXYZ),l.applyMatrix3(this.spaces[h].fromXYZ)),this.spaces[h].transfer===Pe&&(l.r=vs(l.r),l.g=vs(l.g),l.b=vs(l.b))),l},workingToColorSpace:function(l,c){return this.convert(l,this.workingColorSpace,c)},colorSpaceToWorking:function(l,c){return this.convert(l,c,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===za?xu:this.spaces[l].transfer},getToneMappingMode:function(l){return this.spaces[l].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(l,c=this.workingColorSpace){return l.fromArray(this.spaces[c].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,c,h){return l.copy(this.spaces[c].toXYZ).multiply(this.spaces[h].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,c){return wo("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),o.workingToColorSpace(l,c)},toWorkingColorSpace:function(l,c){return wo("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),o.colorSpaceToWorking(l,c)}},e=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],r=[.3127,.329];return o.define({[ys]:{primaries:e,whitePoint:r,transfer:xu,toXYZ:m_,fromXYZ:g_,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:oi},outputColorSpaceConfig:{drawingBufferColorSpace:oi}},[oi]:{primaries:e,whitePoint:r,transfer:Pe,toXYZ:m_,fromXYZ:g_,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:oi}}}),o}const Ae=Fx();function ea(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function vs(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}let is;class Hx{static getDataURL(e,i="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let r;if(e instanceof HTMLCanvasElement)r=e;else{is===void 0&&(is=yu("canvas")),is.width=e.width,is.height=e.height;const l=is.getContext("2d");e instanceof ImageData?l.putImageData(e,0,0):l.drawImage(e,0,0,e.width,e.height),r=is}return r.toDataURL(i)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const i=yu("canvas");i.width=e.width,i.height=e.height;const r=i.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const l=r.getImageData(0,0,e.width,e.height),c=l.data;for(let h=0;h<c.length;h++)c[h]=ea(c[h]/255)*255;return r.putImageData(l,0,0),i}else if(e.data){const i=e.data.slice(0);for(let r=0;r<i.length;r++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[r]=Math.floor(ea(i[r]/255)*255):i[r]=ea(i[r]);return{data:i,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Gx=0;class dd{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Gx++}),this.uuid=Uo(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?e.set(i.videoWidth,i.videoHeight,0):i instanceof VideoFrame?e.set(i.displayHeight,i.displayWidth,0):i!==null?e.set(i.width,i.height,i.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},l=this.data;if(l!==null){let c;if(Array.isArray(l)){c=[];for(let h=0,d=l.length;h<d;h++)l[h].isDataTexture?c.push(kf(l[h].image)):c.push(kf(l[h]))}else c=kf(l);r.url=c}return i||(e.images[this.uuid]=r),r}}function kf(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?Hx.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Vx=0;const Wf=new st;class Dn extends Ts{constructor(e=Dn.DEFAULT_IMAGE,i=Dn.DEFAULT_MAPPING,r=pr,l=pr,c=bi,h=mr,d=_i,m=na,p=Dn.DEFAULT_ANISOTROPY,S=za){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Vx++}),this.uuid=Uo(),this.name="",this.source=new dd(e),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=r,this.wrapT=l,this.magFilter=c,this.minFilter=h,this.anisotropy=p,this.format=d,this.internalFormat=null,this.type=m,this.offset=new Ie(0,0),this.repeat=new Ie(1,1),this.center=new Ie(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ue,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=S,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Wf).x}get height(){return this.source.getSize(Wf).y}get depth(){return this.source.getSize(Wf).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const i in e){const r=e[i];if(r===void 0){console.warn(`THREE.Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Texture.setValues(): property '${i}' does not exist.`);continue}l&&r&&l.isVector2&&r.isVector2||l&&r&&l.isVector3&&r.isVector3||l&&r&&l.isMatrix3&&r.isMatrix3?l.copy(r):this[i]=r}}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),i||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==r0)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Rh:e.x=e.x-Math.floor(e.x);break;case pr:e.x=e.x<0?0:1;break;case Ch:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Rh:e.y=e.y-Math.floor(e.y);break;case pr:e.y=e.y<0?0:1;break;case Ch:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Dn.DEFAULT_IMAGE=null;Dn.DEFAULT_MAPPING=r0;Dn.DEFAULT_ANISOTROPY=1;class $e{constructor(e=0,i=0,r=0,l=1){$e.prototype.isVector4=!0,this.x=e,this.y=i,this.z=r,this.w=l}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,i,r,l){return this.x=e,this.y=i,this.z=r,this.w=l,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this.w=e.w+i.w,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this.w+=e.w*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this.w=e.w-i.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const i=this.x,r=this.y,l=this.z,c=this.w,h=e.elements;return this.x=h[0]*i+h[4]*r+h[8]*l+h[12]*c,this.y=h[1]*i+h[5]*r+h[9]*l+h[13]*c,this.z=h[2]*i+h[6]*r+h[10]*l+h[14]*c,this.w=h[3]*i+h[7]*r+h[11]*l+h[15]*c,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const i=Math.sqrt(1-e.w*e.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/i,this.y=e.y/i,this.z=e.z/i),this}setAxisAngleFromRotationMatrix(e){let i,r,l,c;const m=e.elements,p=m[0],S=m[4],_=m[8],x=m[1],y=m[5],A=m[9],R=m[2],M=m[6],v=m[10];if(Math.abs(S-x)<.01&&Math.abs(_-R)<.01&&Math.abs(A-M)<.01){if(Math.abs(S+x)<.1&&Math.abs(_+R)<.1&&Math.abs(A+M)<.1&&Math.abs(p+y+v-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const z=(p+1)/2,D=(y+1)/2,X=(v+1)/2,H=(S+x)/4,P=(_+R)/4,j=(A+M)/4;return z>D&&z>X?z<.01?(r=0,l=.707106781,c=.707106781):(r=Math.sqrt(z),l=H/r,c=P/r):D>X?D<.01?(r=.707106781,l=0,c=.707106781):(l=Math.sqrt(D),r=H/l,c=j/l):X<.01?(r=.707106781,l=.707106781,c=0):(c=Math.sqrt(X),r=P/c,l=j/c),this.set(r,l,c,i),this}let I=Math.sqrt((M-A)*(M-A)+(_-R)*(_-R)+(x-S)*(x-S));return Math.abs(I)<.001&&(I=1),this.x=(M-A)/I,this.y=(_-R)/I,this.z=(x-S)/I,this.w=Math.acos((p+y+v-1)/2),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,i){return this.x=xe(this.x,e.x,i.x),this.y=xe(this.y,e.y,i.y),this.z=xe(this.z,e.z,i.z),this.w=xe(this.w,e.w,i.w),this}clampScalar(e,i){return this.x=xe(this.x,e,i),this.y=xe(this.y,e,i),this.z=xe(this.z,e,i),this.w=xe(this.w,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(xe(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this.w+=(e.w-this.w)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this.z=e.z+(i.z-e.z)*r,this.w=e.w+(i.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this.w=e[i+3],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e[i+3]=this.w,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this.w=e.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Xx extends Ts{constructor(e=1,i=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:bi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},r),this.isRenderTarget=!0,this.width=e,this.height=i,this.depth=r.depth,this.scissor=new $e(0,0,e,i),this.scissorTest=!1,this.viewport=new $e(0,0,e,i);const l={width:e,height:i,depth:r.depth},c=new Dn(l);this.textures=[];const h=r.count;for(let d=0;d<h;d++)this.textures[d]=c.clone(),this.textures[d].isRenderTargetTexture=!0,this.textures[d].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview}_setTextureOptions(e={}){const i={minFilter:bi,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(i.mapping=e.mapping),e.wrapS!==void 0&&(i.wrapS=e.wrapS),e.wrapT!==void 0&&(i.wrapT=e.wrapT),e.wrapR!==void 0&&(i.wrapR=e.wrapR),e.magFilter!==void 0&&(i.magFilter=e.magFilter),e.minFilter!==void 0&&(i.minFilter=e.minFilter),e.format!==void 0&&(i.format=e.format),e.type!==void 0&&(i.type=e.type),e.anisotropy!==void 0&&(i.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(i.colorSpace=e.colorSpace),e.flipY!==void 0&&(i.flipY=e.flipY),e.generateMipmaps!==void 0&&(i.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(i.internalFormat=e.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(i)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,i,r=1){if(this.width!==e||this.height!==i||this.depth!==r){this.width=e,this.height=i,this.depth=r;for(let l=0,c=this.textures.length;l<c;l++)this.textures[l].image.width=e,this.textures[l].image.height=i,this.textures[l].image.depth=r,this.textures[l].isArrayTexture=this.textures[l].image.depth>1;this.dispose()}this.viewport.set(0,0,e,i),this.scissor.set(0,0,e,i)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++){this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},e.textures[i].image);this.textures[i].source=new dd(l)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class vr extends Xx{constructor(e=1,i=1,r={}){super(e,i,r),this.isWebGLRenderTarget=!0}}class g0 extends Dn{constructor(e=null,i=1,r=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:i,height:r,depth:l},this.magFilter=ui,this.minFilter=ui,this.wrapR=pr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class kx extends Dn{constructor(e=null,i=1,r=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:i,height:r,depth:l},this.magFilter=ui,this.minFilter=ui,this.wrapR=pr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class No{constructor(e=new st(1/0,1/0,1/0),i=new st(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=i}set(e,i){return this.min.copy(e),this.max.copy(i),this}setFromArray(e){this.makeEmpty();for(let i=0,r=e.length;i<r;i+=3)this.expandByPoint(di.fromArray(e,i));return this}setFromBufferAttribute(e){this.makeEmpty();for(let i=0,r=e.count;i<r;i++)this.expandByPoint(di.fromBufferAttribute(e,i));return this}setFromPoints(e){this.makeEmpty();for(let i=0,r=e.length;i<r;i++)this.expandByPoint(e[i]);return this}setFromCenterAndSize(e,i){const r=di.copy(i).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,i=!1){return this.makeEmpty(),this.expandByObject(e,i)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,i=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const c=r.getAttribute("position");if(i===!0&&c!==void 0&&e.isInstancedMesh!==!0)for(let h=0,d=c.count;h<d;h++)e.isMesh===!0?e.getVertexPosition(h,di):di.fromBufferAttribute(c,h),di.applyMatrix4(e.matrixWorld),this.expandByPoint(di);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Yl.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),Yl.copy(r.boundingBox)),Yl.applyMatrix4(e.matrixWorld),this.union(Yl)}const l=e.children;for(let c=0,h=l.length;c<h;c++)this.expandByObject(l[c],i);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,i){return i.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,di),di.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let i,r;return e.normal.x>0?(i=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(i=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(i+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(i+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(i+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(i+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),i<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(xo),Zl.subVectors(this.max,xo),as.subVectors(e.a,xo),rs.subVectors(e.b,xo),ss.subVectors(e.c,xo),wa.subVectors(rs,as),Da.subVectors(ss,rs),ar.subVectors(as,ss);let i=[0,-wa.z,wa.y,0,-Da.z,Da.y,0,-ar.z,ar.y,wa.z,0,-wa.x,Da.z,0,-Da.x,ar.z,0,-ar.x,-wa.y,wa.x,0,-Da.y,Da.x,0,-ar.y,ar.x,0];return!qf(i,as,rs,ss,Zl)||(i=[1,0,0,0,1,0,0,0,1],!qf(i,as,rs,ss,Zl))?!1:(jl.crossVectors(wa,Da),i=[jl.x,jl.y,jl.z],qf(i,as,rs,ss,Zl))}clampPoint(e,i){return i.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,di).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(di).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Yi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Yi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Yi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Yi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Yi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Yi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Yi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Yi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Yi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Yi=[new st,new st,new st,new st,new st,new st,new st,new st],di=new st,Yl=new No,as=new st,rs=new st,ss=new st,wa=new st,Da=new st,ar=new st,xo=new st,Zl=new st,jl=new st,rr=new st;function qf(o,e,i,r,l){for(let c=0,h=o.length-3;c<=h;c+=3){rr.fromArray(o,c);const d=l.x*Math.abs(rr.x)+l.y*Math.abs(rr.y)+l.z*Math.abs(rr.z),m=e.dot(rr),p=i.dot(rr),S=r.dot(rr);if(Math.max(-Math.max(m,p,S),Math.min(m,p,S))>d)return!1}return!0}const Wx=new No,Mo=new st,Yf=new st;class pd{constructor(e=new st,i=-1){this.isSphere=!0,this.center=e,this.radius=i}set(e,i){return this.center.copy(e),this.radius=i,this}setFromPoints(e,i){const r=this.center;i!==void 0?r.copy(i):Wx.setFromPoints(e).getCenter(r);let l=0;for(let c=0,h=e.length;c<h;c++)l=Math.max(l,r.distanceToSquared(e[c]));return this.radius=Math.sqrt(l),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const i=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=i*i}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,i){const r=this.center.distanceToSquared(e);return i.copy(e),r>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Mo.subVectors(e,this.center);const i=Mo.lengthSq();if(i>this.radius*this.radius){const r=Math.sqrt(i),l=(r-this.radius)*.5;this.center.addScaledVector(Mo,l/r),this.radius+=l}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Yf.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Mo.copy(e.center).add(Yf)),this.expandByPoint(Mo.copy(e.center).sub(Yf))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const Zi=new st,Zf=new st,Kl=new st,Ua=new st,jf=new st,Ql=new st,Kf=new st;class qx{constructor(e=new st,i=new st(0,0,-1)){this.origin=e,this.direction=i}set(e,i){return this.origin.copy(e),this.direction.copy(i),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,i){return i.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Zi)),this}closestPointToPoint(e,i){i.subVectors(e,this.origin);const r=i.dot(this.direction);return r<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const i=Zi.subVectors(e,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(e):(Zi.copy(this.origin).addScaledVector(this.direction,i),Zi.distanceToSquared(e))}distanceSqToSegment(e,i,r,l){Zf.copy(e).add(i).multiplyScalar(.5),Kl.copy(i).sub(e).normalize(),Ua.copy(this.origin).sub(Zf);const c=e.distanceTo(i)*.5,h=-this.direction.dot(Kl),d=Ua.dot(this.direction),m=-Ua.dot(Kl),p=Ua.lengthSq(),S=Math.abs(1-h*h);let _,x,y,A;if(S>0)if(_=h*m-d,x=h*d-m,A=c*S,_>=0)if(x>=-A)if(x<=A){const R=1/S;_*=R,x*=R,y=_*(_+h*x+2*d)+x*(h*_+x+2*m)+p}else x=c,_=Math.max(0,-(h*x+d)),y=-_*_+x*(x+2*m)+p;else x=-c,_=Math.max(0,-(h*x+d)),y=-_*_+x*(x+2*m)+p;else x<=-A?(_=Math.max(0,-(-h*c+d)),x=_>0?-c:Math.min(Math.max(-c,-m),c),y=-_*_+x*(x+2*m)+p):x<=A?(_=0,x=Math.min(Math.max(-c,-m),c),y=x*(x+2*m)+p):(_=Math.max(0,-(h*c+d)),x=_>0?c:Math.min(Math.max(-c,-m),c),y=-_*_+x*(x+2*m)+p);else x=h>0?-c:c,_=Math.max(0,-(h*x+d)),y=-_*_+x*(x+2*m)+p;return r&&r.copy(this.origin).addScaledVector(this.direction,_),l&&l.copy(Zf).addScaledVector(Kl,x),y}intersectSphere(e,i){Zi.subVectors(e.center,this.origin);const r=Zi.dot(this.direction),l=Zi.dot(Zi)-r*r,c=e.radius*e.radius;if(l>c)return null;const h=Math.sqrt(c-l),d=r-h,m=r+h;return m<0?null:d<0?this.at(m,i):this.at(d,i)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const i=e.normal.dot(this.direction);if(i===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/i;return r>=0?r:null}intersectPlane(e,i){const r=this.distanceToPlane(e);return r===null?null:this.at(r,i)}intersectsPlane(e){const i=e.distanceToPoint(this.origin);return i===0||e.normal.dot(this.direction)*i<0}intersectBox(e,i){let r,l,c,h,d,m;const p=1/this.direction.x,S=1/this.direction.y,_=1/this.direction.z,x=this.origin;return p>=0?(r=(e.min.x-x.x)*p,l=(e.max.x-x.x)*p):(r=(e.max.x-x.x)*p,l=(e.min.x-x.x)*p),S>=0?(c=(e.min.y-x.y)*S,h=(e.max.y-x.y)*S):(c=(e.max.y-x.y)*S,h=(e.min.y-x.y)*S),r>h||c>l||((c>r||isNaN(r))&&(r=c),(h<l||isNaN(l))&&(l=h),_>=0?(d=(e.min.z-x.z)*_,m=(e.max.z-x.z)*_):(d=(e.max.z-x.z)*_,m=(e.min.z-x.z)*_),r>m||d>l)||((d>r||r!==r)&&(r=d),(m<l||l!==l)&&(l=m),l<0)?null:this.at(r>=0?r:l,i)}intersectsBox(e){return this.intersectBox(e,Zi)!==null}intersectTriangle(e,i,r,l,c){jf.subVectors(i,e),Ql.subVectors(r,e),Kf.crossVectors(jf,Ql);let h=this.direction.dot(Kf),d;if(h>0){if(l)return null;d=1}else if(h<0)d=-1,h=-h;else return null;Ua.subVectors(this.origin,e);const m=d*this.direction.dot(Ql.crossVectors(Ua,Ql));if(m<0)return null;const p=d*this.direction.dot(jf.cross(Ua));if(p<0||m+p>h)return null;const S=-d*Ua.dot(Kf);return S<0?null:this.at(S/h,c)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class cn{constructor(e,i,r,l,c,h,d,m,p,S,_,x,y,A,R,M){cn.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,i,r,l,c,h,d,m,p,S,_,x,y,A,R,M)}set(e,i,r,l,c,h,d,m,p,S,_,x,y,A,R,M){const v=this.elements;return v[0]=e,v[4]=i,v[8]=r,v[12]=l,v[1]=c,v[5]=h,v[9]=d,v[13]=m,v[2]=p,v[6]=S,v[10]=_,v[14]=x,v[3]=y,v[7]=A,v[11]=R,v[15]=M,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new cn().fromArray(this.elements)}copy(e){const i=this.elements,r=e.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],i[9]=r[9],i[10]=r[10],i[11]=r[11],i[12]=r[12],i[13]=r[13],i[14]=r[14],i[15]=r[15],this}copyPosition(e){const i=this.elements,r=e.elements;return i[12]=r[12],i[13]=r[13],i[14]=r[14],this}setFromMatrix3(e){const i=e.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(e,i,r){return e.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(e,i,r){return this.set(e.x,i.x,r.x,0,e.y,i.y,r.y,0,e.z,i.z,r.z,0,0,0,0,1),this}extractRotation(e){const i=this.elements,r=e.elements,l=1/os.setFromMatrixColumn(e,0).length(),c=1/os.setFromMatrixColumn(e,1).length(),h=1/os.setFromMatrixColumn(e,2).length();return i[0]=r[0]*l,i[1]=r[1]*l,i[2]=r[2]*l,i[3]=0,i[4]=r[4]*c,i[5]=r[5]*c,i[6]=r[6]*c,i[7]=0,i[8]=r[8]*h,i[9]=r[9]*h,i[10]=r[10]*h,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(e){const i=this.elements,r=e.x,l=e.y,c=e.z,h=Math.cos(r),d=Math.sin(r),m=Math.cos(l),p=Math.sin(l),S=Math.cos(c),_=Math.sin(c);if(e.order==="XYZ"){const x=h*S,y=h*_,A=d*S,R=d*_;i[0]=m*S,i[4]=-m*_,i[8]=p,i[1]=y+A*p,i[5]=x-R*p,i[9]=-d*m,i[2]=R-x*p,i[6]=A+y*p,i[10]=h*m}else if(e.order==="YXZ"){const x=m*S,y=m*_,A=p*S,R=p*_;i[0]=x+R*d,i[4]=A*d-y,i[8]=h*p,i[1]=h*_,i[5]=h*S,i[9]=-d,i[2]=y*d-A,i[6]=R+x*d,i[10]=h*m}else if(e.order==="ZXY"){const x=m*S,y=m*_,A=p*S,R=p*_;i[0]=x-R*d,i[4]=-h*_,i[8]=A+y*d,i[1]=y+A*d,i[5]=h*S,i[9]=R-x*d,i[2]=-h*p,i[6]=d,i[10]=h*m}else if(e.order==="ZYX"){const x=h*S,y=h*_,A=d*S,R=d*_;i[0]=m*S,i[4]=A*p-y,i[8]=x*p+R,i[1]=m*_,i[5]=R*p+x,i[9]=y*p-A,i[2]=-p,i[6]=d*m,i[10]=h*m}else if(e.order==="YZX"){const x=h*m,y=h*p,A=d*m,R=d*p;i[0]=m*S,i[4]=R-x*_,i[8]=A*_+y,i[1]=_,i[5]=h*S,i[9]=-d*S,i[2]=-p*S,i[6]=y*_+A,i[10]=x-R*_}else if(e.order==="XZY"){const x=h*m,y=h*p,A=d*m,R=d*p;i[0]=m*S,i[4]=-_,i[8]=p*S,i[1]=x*_+R,i[5]=h*S,i[9]=y*_-A,i[2]=A*_-y,i[6]=d*S,i[10]=R*_+x}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Yx,e,Zx)}lookAt(e,i,r){const l=this.elements;return Zn.subVectors(e,i),Zn.lengthSq()===0&&(Zn.z=1),Zn.normalize(),La.crossVectors(r,Zn),La.lengthSq()===0&&(Math.abs(r.z)===1?Zn.x+=1e-4:Zn.z+=1e-4,Zn.normalize(),La.crossVectors(r,Zn)),La.normalize(),Jl.crossVectors(Zn,La),l[0]=La.x,l[4]=Jl.x,l[8]=Zn.x,l[1]=La.y,l[5]=Jl.y,l[9]=Zn.y,l[2]=La.z,l[6]=Jl.z,l[10]=Zn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const r=e.elements,l=i.elements,c=this.elements,h=r[0],d=r[4],m=r[8],p=r[12],S=r[1],_=r[5],x=r[9],y=r[13],A=r[2],R=r[6],M=r[10],v=r[14],I=r[3],z=r[7],D=r[11],X=r[15],H=l[0],P=l[4],j=l[8],w=l[12],C=l[1],G=l[5],nt=l[9],ut=l[13],gt=l[2],ft=l[6],N=l[10],Z=l[14],Y=l[3],vt=l[7],yt=l[11],L=l[15];return c[0]=h*H+d*C+m*gt+p*Y,c[4]=h*P+d*G+m*ft+p*vt,c[8]=h*j+d*nt+m*N+p*yt,c[12]=h*w+d*ut+m*Z+p*L,c[1]=S*H+_*C+x*gt+y*Y,c[5]=S*P+_*G+x*ft+y*vt,c[9]=S*j+_*nt+x*N+y*yt,c[13]=S*w+_*ut+x*Z+y*L,c[2]=A*H+R*C+M*gt+v*Y,c[6]=A*P+R*G+M*ft+v*vt,c[10]=A*j+R*nt+M*N+v*yt,c[14]=A*w+R*ut+M*Z+v*L,c[3]=I*H+z*C+D*gt+X*Y,c[7]=I*P+z*G+D*ft+X*vt,c[11]=I*j+z*nt+D*N+X*yt,c[15]=I*w+z*ut+D*Z+X*L,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[4]*=e,i[8]*=e,i[12]*=e,i[1]*=e,i[5]*=e,i[9]*=e,i[13]*=e,i[2]*=e,i[6]*=e,i[10]*=e,i[14]*=e,i[3]*=e,i[7]*=e,i[11]*=e,i[15]*=e,this}determinant(){const e=this.elements,i=e[0],r=e[4],l=e[8],c=e[12],h=e[1],d=e[5],m=e[9],p=e[13],S=e[2],_=e[6],x=e[10],y=e[14],A=e[3],R=e[7],M=e[11],v=e[15];return A*(+c*m*_-l*p*_-c*d*x+r*p*x+l*d*y-r*m*y)+R*(+i*m*y-i*p*x+c*h*x-l*h*y+l*p*S-c*m*S)+M*(+i*p*_-i*d*y-c*h*_+r*h*y+c*d*S-r*p*S)+v*(-l*d*S-i*m*_+i*d*x+l*h*_-r*h*x+r*m*S)}transpose(){const e=this.elements;let i;return i=e[1],e[1]=e[4],e[4]=i,i=e[2],e[2]=e[8],e[8]=i,i=e[6],e[6]=e[9],e[9]=i,i=e[3],e[3]=e[12],e[12]=i,i=e[7],e[7]=e[13],e[13]=i,i=e[11],e[11]=e[14],e[14]=i,this}setPosition(e,i,r){const l=this.elements;return e.isVector3?(l[12]=e.x,l[13]=e.y,l[14]=e.z):(l[12]=e,l[13]=i,l[14]=r),this}invert(){const e=this.elements,i=e[0],r=e[1],l=e[2],c=e[3],h=e[4],d=e[5],m=e[6],p=e[7],S=e[8],_=e[9],x=e[10],y=e[11],A=e[12],R=e[13],M=e[14],v=e[15],I=_*M*p-R*x*p+R*m*y-d*M*y-_*m*v+d*x*v,z=A*x*p-S*M*p-A*m*y+h*M*y+S*m*v-h*x*v,D=S*R*p-A*_*p+A*d*y-h*R*y-S*d*v+h*_*v,X=A*_*m-S*R*m-A*d*x+h*R*x+S*d*M-h*_*M,H=i*I+r*z+l*D+c*X;if(H===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const P=1/H;return e[0]=I*P,e[1]=(R*x*c-_*M*c-R*l*y+r*M*y+_*l*v-r*x*v)*P,e[2]=(d*M*c-R*m*c+R*l*p-r*M*p-d*l*v+r*m*v)*P,e[3]=(_*m*c-d*x*c-_*l*p+r*x*p+d*l*y-r*m*y)*P,e[4]=z*P,e[5]=(S*M*c-A*x*c+A*l*y-i*M*y-S*l*v+i*x*v)*P,e[6]=(A*m*c-h*M*c-A*l*p+i*M*p+h*l*v-i*m*v)*P,e[7]=(h*x*c-S*m*c+S*l*p-i*x*p-h*l*y+i*m*y)*P,e[8]=D*P,e[9]=(A*_*c-S*R*c-A*r*y+i*R*y+S*r*v-i*_*v)*P,e[10]=(h*R*c-A*d*c+A*r*p-i*R*p-h*r*v+i*d*v)*P,e[11]=(S*d*c-h*_*c-S*r*p+i*_*p+h*r*y-i*d*y)*P,e[12]=X*P,e[13]=(S*R*l-A*_*l+A*r*x-i*R*x-S*r*M+i*_*M)*P,e[14]=(A*d*l-h*R*l-A*r*m+i*R*m+h*r*M-i*d*M)*P,e[15]=(h*_*l-S*d*l+S*r*m-i*_*m-h*r*x+i*d*x)*P,this}scale(e){const i=this.elements,r=e.x,l=e.y,c=e.z;return i[0]*=r,i[4]*=l,i[8]*=c,i[1]*=r,i[5]*=l,i[9]*=c,i[2]*=r,i[6]*=l,i[10]*=c,i[3]*=r,i[7]*=l,i[11]*=c,this}getMaxScaleOnAxis(){const e=this.elements,i=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],l=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(i,r,l))}makeTranslation(e,i,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,i,0,0,1,r,0,0,0,1),this}makeRotationX(e){const i=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,i,-r,0,0,r,i,0,0,0,0,1),this}makeRotationY(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,0,r,0,0,1,0,0,-r,0,i,0,0,0,0,1),this}makeRotationZ(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,-r,0,0,r,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,i){const r=Math.cos(i),l=Math.sin(i),c=1-r,h=e.x,d=e.y,m=e.z,p=c*h,S=c*d;return this.set(p*h+r,p*d-l*m,p*m+l*d,0,p*d+l*m,S*d+r,S*m-l*h,0,p*m-l*d,S*m+l*h,c*m*m+r,0,0,0,0,1),this}makeScale(e,i,r){return this.set(e,0,0,0,0,i,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,i,r,l,c,h){return this.set(1,r,c,0,e,1,h,0,i,l,1,0,0,0,0,1),this}compose(e,i,r){const l=this.elements,c=i._x,h=i._y,d=i._z,m=i._w,p=c+c,S=h+h,_=d+d,x=c*p,y=c*S,A=c*_,R=h*S,M=h*_,v=d*_,I=m*p,z=m*S,D=m*_,X=r.x,H=r.y,P=r.z;return l[0]=(1-(R+v))*X,l[1]=(y+D)*X,l[2]=(A-z)*X,l[3]=0,l[4]=(y-D)*H,l[5]=(1-(x+v))*H,l[6]=(M+I)*H,l[7]=0,l[8]=(A+z)*P,l[9]=(M-I)*P,l[10]=(1-(x+R))*P,l[11]=0,l[12]=e.x,l[13]=e.y,l[14]=e.z,l[15]=1,this}decompose(e,i,r){const l=this.elements;let c=os.set(l[0],l[1],l[2]).length();const h=os.set(l[4],l[5],l[6]).length(),d=os.set(l[8],l[9],l[10]).length();this.determinant()<0&&(c=-c),e.x=l[12],e.y=l[13],e.z=l[14],pi.copy(this);const p=1/c,S=1/h,_=1/d;return pi.elements[0]*=p,pi.elements[1]*=p,pi.elements[2]*=p,pi.elements[4]*=S,pi.elements[5]*=S,pi.elements[6]*=S,pi.elements[8]*=_,pi.elements[9]*=_,pi.elements[10]*=_,i.setFromRotationMatrix(pi),r.x=c,r.y=h,r.z=d,this}makePerspective(e,i,r,l,c,h,d=Ai,m=!1){const p=this.elements,S=2*c/(i-e),_=2*c/(r-l),x=(i+e)/(i-e),y=(r+l)/(r-l);let A,R;if(m)A=c/(h-c),R=h*c/(h-c);else if(d===Ai)A=-(h+c)/(h-c),R=-2*h*c/(h-c);else if(d===Mu)A=-h/(h-c),R=-h*c/(h-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return p[0]=S,p[4]=0,p[8]=x,p[12]=0,p[1]=0,p[5]=_,p[9]=y,p[13]=0,p[2]=0,p[6]=0,p[10]=A,p[14]=R,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(e,i,r,l,c,h,d=Ai,m=!1){const p=this.elements,S=2/(i-e),_=2/(r-l),x=-(i+e)/(i-e),y=-(r+l)/(r-l);let A,R;if(m)A=1/(h-c),R=h/(h-c);else if(d===Ai)A=-2/(h-c),R=-(h+c)/(h-c);else if(d===Mu)A=-1/(h-c),R=-c/(h-c);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return p[0]=S,p[4]=0,p[8]=0,p[12]=x,p[1]=0,p[5]=_,p[9]=0,p[13]=y,p[2]=0,p[6]=0,p[10]=A,p[14]=R,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(e){const i=this.elements,r=e.elements;for(let l=0;l<16;l++)if(i[l]!==r[l])return!1;return!0}fromArray(e,i=0){for(let r=0;r<16;r++)this.elements[r]=e[r+i];return this}toArray(e=[],i=0){const r=this.elements;return e[i]=r[0],e[i+1]=r[1],e[i+2]=r[2],e[i+3]=r[3],e[i+4]=r[4],e[i+5]=r[5],e[i+6]=r[6],e[i+7]=r[7],e[i+8]=r[8],e[i+9]=r[9],e[i+10]=r[10],e[i+11]=r[11],e[i+12]=r[12],e[i+13]=r[13],e[i+14]=r[14],e[i+15]=r[15],e}}const os=new st,pi=new cn,Yx=new st(0,0,0),Zx=new st(1,1,1),La=new st,Jl=new st,Zn=new st,__=new cn,v_=new Lo;class ia{constructor(e=0,i=0,r=0,l=ia.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=i,this._z=r,this._order=l}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,i,r,l=this._order){return this._x=e,this._y=i,this._z=r,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,i=this._order,r=!0){const l=e.elements,c=l[0],h=l[4],d=l[8],m=l[1],p=l[5],S=l[9],_=l[2],x=l[6],y=l[10];switch(i){case"XYZ":this._y=Math.asin(xe(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-S,y),this._z=Math.atan2(-h,c)):(this._x=Math.atan2(x,p),this._z=0);break;case"YXZ":this._x=Math.asin(-xe(S,-1,1)),Math.abs(S)<.9999999?(this._y=Math.atan2(d,y),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-_,c),this._z=0);break;case"ZXY":this._x=Math.asin(xe(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(-_,y),this._z=Math.atan2(-h,p)):(this._y=0,this._z=Math.atan2(m,c));break;case"ZYX":this._y=Math.asin(-xe(_,-1,1)),Math.abs(_)<.9999999?(this._x=Math.atan2(x,y),this._z=Math.atan2(m,c)):(this._x=0,this._z=Math.atan2(-h,p));break;case"YZX":this._z=Math.asin(xe(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-S,p),this._y=Math.atan2(-_,c)):(this._x=0,this._y=Math.atan2(d,y));break;case"XZY":this._z=Math.asin(-xe(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(x,p),this._y=Math.atan2(d,c)):(this._x=Math.atan2(-S,y),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,i,r){return __.makeRotationFromQuaternion(e),this.setFromRotationMatrix(__,i,r)}setFromVector3(e,i=this._order){return this.set(e.x,e.y,e.z,i)}reorder(e){return v_.setFromEuler(this),this.setFromQuaternion(v_,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ia.DEFAULT_ORDER="XYZ";class _0{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let jx=0;const S_=new st,ls=new Lo,ji=new cn,$l=new st,yo=new st,Kx=new st,Qx=new Lo,x_=new st(1,0,0),M_=new st(0,1,0),y_=new st(0,0,1),E_={type:"added"},Jx={type:"removed"},us={type:"childadded",child:null},Qf={type:"childremoved",child:null};class Kn extends Ts{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:jx++}),this.uuid=Uo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Kn.DEFAULT_UP.clone();const e=new st,i=new ia,r=new Lo,l=new st(1,1,1);function c(){r.setFromEuler(i,!1)}function h(){i.setFromQuaternion(r,void 0,!1)}i._onChange(c),r._onChange(h),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new cn},normalMatrix:{value:new ue}}),this.matrix=new cn,this.matrixWorld=new cn,this.matrixAutoUpdate=Kn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Kn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new _0,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,i){this.quaternion.setFromAxisAngle(e,i)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,i){return ls.setFromAxisAngle(e,i),this.quaternion.multiply(ls),this}rotateOnWorldAxis(e,i){return ls.setFromAxisAngle(e,i),this.quaternion.premultiply(ls),this}rotateX(e){return this.rotateOnAxis(x_,e)}rotateY(e){return this.rotateOnAxis(M_,e)}rotateZ(e){return this.rotateOnAxis(y_,e)}translateOnAxis(e,i){return S_.copy(e).applyQuaternion(this.quaternion),this.position.add(S_.multiplyScalar(i)),this}translateX(e){return this.translateOnAxis(x_,e)}translateY(e){return this.translateOnAxis(M_,e)}translateZ(e){return this.translateOnAxis(y_,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ji.copy(this.matrixWorld).invert())}lookAt(e,i,r){e.isVector3?$l.copy(e):$l.set(e,i,r);const l=this.parent;this.updateWorldMatrix(!0,!1),yo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ji.lookAt(yo,$l,this.up):ji.lookAt($l,yo,this.up),this.quaternion.setFromRotationMatrix(ji),l&&(ji.extractRotation(l.matrixWorld),ls.setFromRotationMatrix(ji),this.quaternion.premultiply(ls.invert()))}add(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(E_),us.child=e,this.dispatchEvent(us),us.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const i=this.children.indexOf(e);return i!==-1&&(e.parent=null,this.children.splice(i,1),e.dispatchEvent(Jx),Qf.child=e,this.dispatchEvent(Qf),Qf.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ji.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ji.multiply(e.parent.matrixWorld)),e.applyMatrix4(ji),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(E_),us.child=e,this.dispatchEvent(us),us.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,i){if(this[e]===i)return this;for(let r=0,l=this.children.length;r<l;r++){const h=this.children[r].getObjectByProperty(e,i);if(h!==void 0)return h}}getObjectsByProperty(e,i,r=[]){this[e]===i&&r.push(this);const l=this.children;for(let c=0,h=l.length;c<h;c++)l[c].getObjectsByProperty(e,i,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(yo,e,Kx),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(yo,Qx,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return e.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(e){e(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverseVisible(e)}traverseAncestors(e){const i=this.parent;i!==null&&(e(i),i.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].updateMatrixWorld(e)}updateWorldMatrix(e,i){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let c=0,h=l.length;c<h;c++)l[c].updateWorldMatrix(!1,!0)}}toJSON(e){const i=e===void 0||typeof e=="string",r={};i&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(d=>({...d,boundingBox:d.boundingBox?d.boundingBox.toJSON():void 0,boundingSphere:d.boundingSphere?d.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(d=>({...d})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(e),l.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function c(d,m){return d[m.uuid]===void 0&&(d[m.uuid]=m.toJSON(e)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=c(e.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const m=d.shapes;if(Array.isArray(m))for(let p=0,S=m.length;p<S;p++){const _=m[p];c(e.shapes,_)}else c(e.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(e.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let m=0,p=this.material.length;m<p;m++)d.push(c(e.materials,this.material[m]));l.material=d}else l.material=c(e.materials,this.material);if(this.children.length>0){l.children=[];for(let d=0;d<this.children.length;d++)l.children.push(this.children[d].toJSON(e).object)}if(this.animations.length>0){l.animations=[];for(let d=0;d<this.animations.length;d++){const m=this.animations[d];l.animations.push(c(e.animations,m))}}if(i){const d=h(e.geometries),m=h(e.materials),p=h(e.textures),S=h(e.images),_=h(e.shapes),x=h(e.skeletons),y=h(e.animations),A=h(e.nodes);d.length>0&&(r.geometries=d),m.length>0&&(r.materials=m),p.length>0&&(r.textures=p),S.length>0&&(r.images=S),_.length>0&&(r.shapes=_),x.length>0&&(r.skeletons=x),y.length>0&&(r.animations=y),A.length>0&&(r.nodes=A)}return r.object=l,r;function h(d){const m=[];for(const p in d){const S=d[p];delete S.metadata,m.push(S)}return m}}clone(e){return new this.constructor().copy(this,e)}copy(e,i=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),i===!0)for(let r=0;r<e.children.length;r++){const l=e.children[r];this.add(l.clone())}return this}}Kn.DEFAULT_UP=new st(0,1,0);Kn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Kn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const mi=new st,Ki=new st,Jf=new st,Qi=new st,cs=new st,fs=new st,T_=new st,$f=new st,th=new st,eh=new st,nh=new $e,ih=new $e,ah=new $e;class gi{constructor(e=new st,i=new st,r=new st){this.a=e,this.b=i,this.c=r}static getNormal(e,i,r,l){l.subVectors(r,i),mi.subVectors(e,i),l.cross(mi);const c=l.lengthSq();return c>0?l.multiplyScalar(1/Math.sqrt(c)):l.set(0,0,0)}static getBarycoord(e,i,r,l,c){mi.subVectors(l,i),Ki.subVectors(r,i),Jf.subVectors(e,i);const h=mi.dot(mi),d=mi.dot(Ki),m=mi.dot(Jf),p=Ki.dot(Ki),S=Ki.dot(Jf),_=h*p-d*d;if(_===0)return c.set(0,0,0),null;const x=1/_,y=(p*m-d*S)*x,A=(h*S-d*m)*x;return c.set(1-y-A,A,y)}static containsPoint(e,i,r,l){return this.getBarycoord(e,i,r,l,Qi)===null?!1:Qi.x>=0&&Qi.y>=0&&Qi.x+Qi.y<=1}static getInterpolation(e,i,r,l,c,h,d,m){return this.getBarycoord(e,i,r,l,Qi)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(c,Qi.x),m.addScaledVector(h,Qi.y),m.addScaledVector(d,Qi.z),m)}static getInterpolatedAttribute(e,i,r,l,c,h){return nh.setScalar(0),ih.setScalar(0),ah.setScalar(0),nh.fromBufferAttribute(e,i),ih.fromBufferAttribute(e,r),ah.fromBufferAttribute(e,l),h.setScalar(0),h.addScaledVector(nh,c.x),h.addScaledVector(ih,c.y),h.addScaledVector(ah,c.z),h}static isFrontFacing(e,i,r,l){return mi.subVectors(r,i),Ki.subVectors(e,i),mi.cross(Ki).dot(l)<0}set(e,i,r){return this.a.copy(e),this.b.copy(i),this.c.copy(r),this}setFromPointsAndIndices(e,i,r,l){return this.a.copy(e[i]),this.b.copy(e[r]),this.c.copy(e[l]),this}setFromAttributeAndIndices(e,i,r,l){return this.a.fromBufferAttribute(e,i),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,l),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return mi.subVectors(this.c,this.b),Ki.subVectors(this.a,this.b),mi.cross(Ki).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return gi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,i){return gi.getBarycoord(e,this.a,this.b,this.c,i)}getInterpolation(e,i,r,l,c){return gi.getInterpolation(e,this.a,this.b,this.c,i,r,l,c)}containsPoint(e){return gi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return gi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,i){const r=this.a,l=this.b,c=this.c;let h,d;cs.subVectors(l,r),fs.subVectors(c,r),$f.subVectors(e,r);const m=cs.dot($f),p=fs.dot($f);if(m<=0&&p<=0)return i.copy(r);th.subVectors(e,l);const S=cs.dot(th),_=fs.dot(th);if(S>=0&&_<=S)return i.copy(l);const x=m*_-S*p;if(x<=0&&m>=0&&S<=0)return h=m/(m-S),i.copy(r).addScaledVector(cs,h);eh.subVectors(e,c);const y=cs.dot(eh),A=fs.dot(eh);if(A>=0&&y<=A)return i.copy(c);const R=y*p-m*A;if(R<=0&&p>=0&&A<=0)return d=p/(p-A),i.copy(r).addScaledVector(fs,d);const M=S*A-y*_;if(M<=0&&_-S>=0&&y-A>=0)return T_.subVectors(c,l),d=(_-S)/(_-S+(y-A)),i.copy(l).addScaledVector(T_,d);const v=1/(M+R+x);return h=R*v,d=x*v,i.copy(r).addScaledVector(cs,h).addScaledVector(fs,d)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const v0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Na={h:0,s:0,l:0},tu={h:0,s:0,l:0};function rh(o,e,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?o+(e-o)*6*i:i<1/2?e:i<2/3?o+(e-o)*6*(2/3-i):o}class Be{constructor(e,i,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,i,r)}set(e,i,r){if(i===void 0&&r===void 0){const l=e;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(e,i,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,i=oi){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ae.colorSpaceToWorking(this,i),this}setRGB(e,i,r,l=Ae.workingColorSpace){return this.r=e,this.g=i,this.b=r,Ae.colorSpaceToWorking(this,l),this}setHSL(e,i,r,l=Ae.workingColorSpace){if(e=Px(e,1),i=xe(i,0,1),r=xe(r,0,1),i===0)this.r=this.g=this.b=r;else{const c=r<=.5?r*(1+i):r+i-r*i,h=2*r-c;this.r=rh(h,c,e+1/3),this.g=rh(h,c,e),this.b=rh(h,c,e-1/3)}return Ae.colorSpaceToWorking(this,l),this}setStyle(e,i=oi){function r(c){c!==void 0&&parseFloat(c)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(e)){let c;const h=l[1],d=l[2];switch(h){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,i);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,i);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,i);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(e)){const c=l[1],h=c.length;if(h===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,i);if(h===6)return this.setHex(parseInt(c,16),i);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,i);return this}setColorName(e,i=oi){const r=v0[e.toLowerCase()];return r!==void 0?this.setHex(r,i):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ea(e.r),this.g=ea(e.g),this.b=ea(e.b),this}copyLinearToSRGB(e){return this.r=vs(e.r),this.g=vs(e.g),this.b=vs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=oi){return Ae.workingToColorSpace(bn.copy(this),e),Math.round(xe(bn.r*255,0,255))*65536+Math.round(xe(bn.g*255,0,255))*256+Math.round(xe(bn.b*255,0,255))}getHexString(e=oi){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,i=Ae.workingColorSpace){Ae.workingToColorSpace(bn.copy(this),i);const r=bn.r,l=bn.g,c=bn.b,h=Math.max(r,l,c),d=Math.min(r,l,c);let m,p;const S=(d+h)/2;if(d===h)m=0,p=0;else{const _=h-d;switch(p=S<=.5?_/(h+d):_/(2-h-d),h){case r:m=(l-c)/_+(l<c?6:0);break;case l:m=(c-r)/_+2;break;case c:m=(r-l)/_+4;break}m/=6}return e.h=m,e.s=p,e.l=S,e}getRGB(e,i=Ae.workingColorSpace){return Ae.workingToColorSpace(bn.copy(this),i),e.r=bn.r,e.g=bn.g,e.b=bn.b,e}getStyle(e=oi){Ae.workingToColorSpace(bn.copy(this),e);const i=bn.r,r=bn.g,l=bn.b;return e!==oi?`color(${e} ${i.toFixed(3)} ${r.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(r*255)},${Math.round(l*255)})`}offsetHSL(e,i,r){return this.getHSL(Na),this.setHSL(Na.h+e,Na.s+i,Na.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,i){return this.r=e.r+i.r,this.g=e.g+i.g,this.b=e.b+i.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,i){return this.r+=(e.r-this.r)*i,this.g+=(e.g-this.g)*i,this.b+=(e.b-this.b)*i,this}lerpColors(e,i,r){return this.r=e.r+(i.r-e.r)*r,this.g=e.g+(i.g-e.g)*r,this.b=e.b+(i.b-e.b)*r,this}lerpHSL(e,i){this.getHSL(Na),e.getHSL(tu);const r=Gf(Na.h,tu.h,i),l=Gf(Na.s,tu.s,i),c=Gf(Na.l,tu.l,i);return this.setHSL(r,l,c),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const i=this.r,r=this.g,l=this.b,c=e.elements;return this.r=c[0]*i+c[3]*r+c[6]*l,this.g=c[1]*i+c[4]*r+c[7]*l,this.b=c[2]*i+c[5]*r+c[8]*l,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,i=0){return this.r=e[i],this.g=e[i+1],this.b=e[i+2],this}toArray(e=[],i=0){return e[i]=this.r,e[i+1]=this.g,e[i+2]=this.b,e}fromBufferAttribute(e,i){return this.r=e.getX(i),this.g=e.getY(i),this.b=e.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const bn=new Be;Be.NAMES=v0;let $x=0;class Tu extends Ts{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:$x++}),this.uuid=Uo(),this.name="",this.type="Material",this.blending=_s,this.side=Ia,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=gh,this.blendDst=_h,this.blendEquation=hr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Be(0,0,0),this.blendAlpha=0,this.depthFunc=Ss,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=c_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ns,this.stencilZFail=ns,this.stencilZPass=ns,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const i in e){const r=e[i];if(r===void 0){console.warn(`THREE.Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(r):l&&l.isVector3&&r&&r.isVector3?l.copy(r):this[i]=r}}toJSON(e){const i=e===void 0||typeof e=="string";i&&(e={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(r.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(r.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==_s&&(r.blending=this.blending),this.side!==Ia&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==gh&&(r.blendSrc=this.blendSrc),this.blendDst!==_h&&(r.blendDst=this.blendDst),this.blendEquation!==hr&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==Ss&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==c_&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ns&&(r.stencilFail=this.stencilFail),this.stencilZFail!==ns&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==ns&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function l(c){const h=[];for(const d in c){const m=c[d];delete m.metadata,h.push(m)}return h}if(i){const c=l(e.textures),h=l(e.images);c.length>0&&(r.textures=c),h.length>0&&(r.images=h)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const i=e.clippingPlanes;let r=null;if(i!==null){const l=i.length;r=new Array(l);for(let c=0;c!==l;++c)r[c]=i[c].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class S0 extends Tu{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Be(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ia,this.combine=a0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const on=new st,eu=new Ie;let tM=0;class Ci{constructor(e,i,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:tM++}),this.name="",this.array=e,this.itemSize=i,this.count=e!==void 0?e.length/i:0,this.normalized=r,this.usage=f_,this.updateRanges=[],this.gpuType=ta,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,i,r){e*=this.itemSize,r*=i.itemSize;for(let l=0,c=this.itemSize;l<c;l++)this.array[e+l]=i.array[r+l];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let i=0,r=this.count;i<r;i++)eu.fromBufferAttribute(this,i),eu.applyMatrix3(e),this.setXY(i,eu.x,eu.y);else if(this.itemSize===3)for(let i=0,r=this.count;i<r;i++)on.fromBufferAttribute(this,i),on.applyMatrix3(e),this.setXYZ(i,on.x,on.y,on.z);return this}applyMatrix4(e){for(let i=0,r=this.count;i<r;i++)on.fromBufferAttribute(this,i),on.applyMatrix4(e),this.setXYZ(i,on.x,on.y,on.z);return this}applyNormalMatrix(e){for(let i=0,r=this.count;i<r;i++)on.fromBufferAttribute(this,i),on.applyNormalMatrix(e),this.setXYZ(i,on.x,on.y,on.z);return this}transformDirection(e){for(let i=0,r=this.count;i<r;i++)on.fromBufferAttribute(this,i),on.transformDirection(e),this.setXYZ(i,on.x,on.y,on.z);return this}set(e,i=0){return this.array.set(e,i),this}getComponent(e,i){let r=this.array[e*this.itemSize+i];return this.normalized&&(r=So(r,this.array)),r}setComponent(e,i,r){return this.normalized&&(r=Bn(r,this.array)),this.array[e*this.itemSize+i]=r,this}getX(e){let i=this.array[e*this.itemSize];return this.normalized&&(i=So(i,this.array)),i}setX(e,i){return this.normalized&&(i=Bn(i,this.array)),this.array[e*this.itemSize]=i,this}getY(e){let i=this.array[e*this.itemSize+1];return this.normalized&&(i=So(i,this.array)),i}setY(e,i){return this.normalized&&(i=Bn(i,this.array)),this.array[e*this.itemSize+1]=i,this}getZ(e){let i=this.array[e*this.itemSize+2];return this.normalized&&(i=So(i,this.array)),i}setZ(e,i){return this.normalized&&(i=Bn(i,this.array)),this.array[e*this.itemSize+2]=i,this}getW(e){let i=this.array[e*this.itemSize+3];return this.normalized&&(i=So(i,this.array)),i}setW(e,i){return this.normalized&&(i=Bn(i,this.array)),this.array[e*this.itemSize+3]=i,this}setXY(e,i,r){return e*=this.itemSize,this.normalized&&(i=Bn(i,this.array),r=Bn(r,this.array)),this.array[e+0]=i,this.array[e+1]=r,this}setXYZ(e,i,r,l){return e*=this.itemSize,this.normalized&&(i=Bn(i,this.array),r=Bn(r,this.array),l=Bn(l,this.array)),this.array[e+0]=i,this.array[e+1]=r,this.array[e+2]=l,this}setXYZW(e,i,r,l,c){return e*=this.itemSize,this.normalized&&(i=Bn(i,this.array),r=Bn(r,this.array),l=Bn(l,this.array),c=Bn(c,this.array)),this.array[e+0]=i,this.array[e+1]=r,this.array[e+2]=l,this.array[e+3]=c,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==f_&&(e.usage=this.usage),e}}class x0 extends Ci{constructor(e,i,r){super(new Uint16Array(e),i,r)}}class M0 extends Ci{constructor(e,i,r){super(new Uint32Array(e),i,r)}}class gr extends Ci{constructor(e,i,r){super(new Float32Array(e),i,r)}}let eM=0;const si=new cn,sh=new Kn,hs=new st,jn=new No,Eo=new No,mn=new st;class Sr extends Ts{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:eM++}),this.uuid=Uo(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(m0(e)?M0:x0)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,i){return this.attributes[e]=i,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,i,r=0){this.groups.push({start:e,count:i,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,i){this.drawRange.start=e,this.drawRange.count=i}applyMatrix4(e){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(e),i.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const c=new ue().getNormalMatrix(e);r.applyNormalMatrix(c),r.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(e),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return si.makeRotationFromQuaternion(e),this.applyMatrix4(si),this}rotateX(e){return si.makeRotationX(e),this.applyMatrix4(si),this}rotateY(e){return si.makeRotationY(e),this.applyMatrix4(si),this}rotateZ(e){return si.makeRotationZ(e),this.applyMatrix4(si),this}translate(e,i,r){return si.makeTranslation(e,i,r),this.applyMatrix4(si),this}scale(e,i,r){return si.makeScale(e,i,r),this.applyMatrix4(si),this}lookAt(e){return sh.lookAt(e),sh.updateMatrix(),this.applyMatrix4(sh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(hs).negate(),this.translate(hs.x,hs.y,hs.z),this}setFromPoints(e){const i=this.getAttribute("position");if(i===void 0){const r=[];for(let l=0,c=e.length;l<c;l++){const h=e[l];r.push(h.x,h.y,h.z||0)}this.setAttribute("position",new gr(r,3))}else{const r=Math.min(e.length,i.count);for(let l=0;l<r;l++){const c=e[l];i.setXYZ(l,c.x,c.y,c.z||0)}e.length>i.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new No);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new st(-1/0,-1/0,-1/0),new st(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),i)for(let r=0,l=i.length;r<l;r++){const c=i[r];jn.setFromBufferAttribute(c),this.morphTargetsRelative?(mn.addVectors(this.boundingBox.min,jn.min),this.boundingBox.expandByPoint(mn),mn.addVectors(this.boundingBox.max,jn.max),this.boundingBox.expandByPoint(mn)):(this.boundingBox.expandByPoint(jn.min),this.boundingBox.expandByPoint(jn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new pd);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new st,1/0);return}if(e){const r=this.boundingSphere.center;if(jn.setFromBufferAttribute(e),i)for(let c=0,h=i.length;c<h;c++){const d=i[c];Eo.setFromBufferAttribute(d),this.morphTargetsRelative?(mn.addVectors(jn.min,Eo.min),jn.expandByPoint(mn),mn.addVectors(jn.max,Eo.max),jn.expandByPoint(mn)):(jn.expandByPoint(Eo.min),jn.expandByPoint(Eo.max))}jn.getCenter(r);let l=0;for(let c=0,h=e.count;c<h;c++)mn.fromBufferAttribute(e,c),l=Math.max(l,r.distanceToSquared(mn));if(i)for(let c=0,h=i.length;c<h;c++){const d=i[c],m=this.morphTargetsRelative;for(let p=0,S=d.count;p<S;p++)mn.fromBufferAttribute(d,p),m&&(hs.fromBufferAttribute(e,p),mn.add(hs)),l=Math.max(l,r.distanceToSquared(mn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,i=this.attributes;if(e===null||i.position===void 0||i.normal===void 0||i.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=i.position,l=i.normal,c=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ci(new Float32Array(4*r.count),4));const h=this.getAttribute("tangent"),d=[],m=[];for(let j=0;j<r.count;j++)d[j]=new st,m[j]=new st;const p=new st,S=new st,_=new st,x=new Ie,y=new Ie,A=new Ie,R=new st,M=new st;function v(j,w,C){p.fromBufferAttribute(r,j),S.fromBufferAttribute(r,w),_.fromBufferAttribute(r,C),x.fromBufferAttribute(c,j),y.fromBufferAttribute(c,w),A.fromBufferAttribute(c,C),S.sub(p),_.sub(p),y.sub(x),A.sub(x);const G=1/(y.x*A.y-A.x*y.y);isFinite(G)&&(R.copy(S).multiplyScalar(A.y).addScaledVector(_,-y.y).multiplyScalar(G),M.copy(_).multiplyScalar(y.x).addScaledVector(S,-A.x).multiplyScalar(G),d[j].add(R),d[w].add(R),d[C].add(R),m[j].add(M),m[w].add(M),m[C].add(M))}let I=this.groups;I.length===0&&(I=[{start:0,count:e.count}]);for(let j=0,w=I.length;j<w;++j){const C=I[j],G=C.start,nt=C.count;for(let ut=G,gt=G+nt;ut<gt;ut+=3)v(e.getX(ut+0),e.getX(ut+1),e.getX(ut+2))}const z=new st,D=new st,X=new st,H=new st;function P(j){X.fromBufferAttribute(l,j),H.copy(X);const w=d[j];z.copy(w),z.sub(X.multiplyScalar(X.dot(w))).normalize(),D.crossVectors(H,w);const G=D.dot(m[j])<0?-1:1;h.setXYZW(j,z.x,z.y,z.z,G)}for(let j=0,w=I.length;j<w;++j){const C=I[j],G=C.start,nt=C.count;for(let ut=G,gt=G+nt;ut<gt;ut+=3)P(e.getX(ut+0)),P(e.getX(ut+1)),P(e.getX(ut+2))}}computeVertexNormals(){const e=this.index,i=this.getAttribute("position");if(i!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new Ci(new Float32Array(i.count*3),3),this.setAttribute("normal",r);else for(let x=0,y=r.count;x<y;x++)r.setXYZ(x,0,0,0);const l=new st,c=new st,h=new st,d=new st,m=new st,p=new st,S=new st,_=new st;if(e)for(let x=0,y=e.count;x<y;x+=3){const A=e.getX(x+0),R=e.getX(x+1),M=e.getX(x+2);l.fromBufferAttribute(i,A),c.fromBufferAttribute(i,R),h.fromBufferAttribute(i,M),S.subVectors(h,c),_.subVectors(l,c),S.cross(_),d.fromBufferAttribute(r,A),m.fromBufferAttribute(r,R),p.fromBufferAttribute(r,M),d.add(S),m.add(S),p.add(S),r.setXYZ(A,d.x,d.y,d.z),r.setXYZ(R,m.x,m.y,m.z),r.setXYZ(M,p.x,p.y,p.z)}else for(let x=0,y=i.count;x<y;x+=3)l.fromBufferAttribute(i,x+0),c.fromBufferAttribute(i,x+1),h.fromBufferAttribute(i,x+2),S.subVectors(h,c),_.subVectors(l,c),S.cross(_),r.setXYZ(x+0,S.x,S.y,S.z),r.setXYZ(x+1,S.x,S.y,S.z),r.setXYZ(x+2,S.x,S.y,S.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let i=0,r=e.count;i<r;i++)mn.fromBufferAttribute(e,i),mn.normalize(),e.setXYZ(i,mn.x,mn.y,mn.z)}toNonIndexed(){function e(d,m){const p=d.array,S=d.itemSize,_=d.normalized,x=new p.constructor(m.length*S);let y=0,A=0;for(let R=0,M=m.length;R<M;R++){d.isInterleavedBufferAttribute?y=m[R]*d.data.stride+d.offset:y=m[R]*S;for(let v=0;v<S;v++)x[A++]=p[y++]}return new Ci(x,S,_)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new Sr,r=this.index.array,l=this.attributes;for(const d in l){const m=l[d],p=e(m,r);i.setAttribute(d,p)}const c=this.morphAttributes;for(const d in c){const m=[],p=c[d];for(let S=0,_=p.length;S<_;S++){const x=p[S],y=e(x,r);m.push(y)}i.morphAttributes[d]=m}i.morphTargetsRelative=this.morphTargetsRelative;const h=this.groups;for(let d=0,m=h.length;d<m;d++){const p=h[d];i.addGroup(p.start,p.count,p.materialIndex)}return i}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(e[p]=m[p]);return e}e.data={attributes:{}};const i=this.index;i!==null&&(e.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const r=this.attributes;for(const m in r){const p=r[m];e.data.attributes[m]=p.toJSON(e.data)}const l={};let c=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],S=[];for(let _=0,x=p.length;_<x;_++){const y=p[_];S.push(y.toJSON(e.data))}S.length>0&&(l[m]=S,c=!0)}c&&(e.data.morphAttributes=l,e.data.morphTargetsRelative=this.morphTargetsRelative);const h=this.groups;h.length>0&&(e.data.groups=JSON.parse(JSON.stringify(h)));const d=this.boundingSphere;return d!==null&&(e.data.boundingSphere=d.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone());const l=e.attributes;for(const p in l){const S=l[p];this.setAttribute(p,S.clone(i))}const c=e.morphAttributes;for(const p in c){const S=[],_=c[p];for(let x=0,y=_.length;x<y;x++)S.push(_[x].clone(i));this.morphAttributes[p]=S}this.morphTargetsRelative=e.morphTargetsRelative;const h=e.groups;for(let p=0,S=h.length;p<S;p++){const _=h[p];this.addGroup(_.start,_.count,_.materialIndex)}const d=e.boundingBox;d!==null&&(this.boundingBox=d.clone());const m=e.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const b_=new cn,sr=new qx,nu=new pd,A_=new st,iu=new st,au=new st,ru=new st,oh=new st,su=new st,R_=new st,ou=new st;class Ri extends Kn{constructor(e=new Sr,i=new S0){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,h=l.length;c<h;c++){const d=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=c}}}}getVertexPosition(e,i){const r=this.geometry,l=r.attributes.position,c=r.morphAttributes.position,h=r.morphTargetsRelative;i.fromBufferAttribute(l,e);const d=this.morphTargetInfluences;if(c&&d){su.set(0,0,0);for(let m=0,p=c.length;m<p;m++){const S=d[m],_=c[m];S!==0&&(oh.fromBufferAttribute(_,e),h?su.addScaledVector(oh,S):su.addScaledVector(oh.sub(i),S))}i.add(su)}return i}raycast(e,i){const r=this.geometry,l=this.material,c=this.matrixWorld;l!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),nu.copy(r.boundingSphere),nu.applyMatrix4(c),sr.copy(e.ray).recast(e.near),!(nu.containsPoint(sr.origin)===!1&&(sr.intersectSphere(nu,A_)===null||sr.origin.distanceToSquared(A_)>(e.far-e.near)**2))&&(b_.copy(c).invert(),sr.copy(e.ray).applyMatrix4(b_),!(r.boundingBox!==null&&sr.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,i,sr)))}_computeIntersections(e,i,r){let l;const c=this.geometry,h=this.material,d=c.index,m=c.attributes.position,p=c.attributes.uv,S=c.attributes.uv1,_=c.attributes.normal,x=c.groups,y=c.drawRange;if(d!==null)if(Array.isArray(h))for(let A=0,R=x.length;A<R;A++){const M=x[A],v=h[M.materialIndex],I=Math.max(M.start,y.start),z=Math.min(d.count,Math.min(M.start+M.count,y.start+y.count));for(let D=I,X=z;D<X;D+=3){const H=d.getX(D),P=d.getX(D+1),j=d.getX(D+2);l=lu(this,v,e,r,p,S,_,H,P,j),l&&(l.faceIndex=Math.floor(D/3),l.face.materialIndex=M.materialIndex,i.push(l))}}else{const A=Math.max(0,y.start),R=Math.min(d.count,y.start+y.count);for(let M=A,v=R;M<v;M+=3){const I=d.getX(M),z=d.getX(M+1),D=d.getX(M+2);l=lu(this,h,e,r,p,S,_,I,z,D),l&&(l.faceIndex=Math.floor(M/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(h))for(let A=0,R=x.length;A<R;A++){const M=x[A],v=h[M.materialIndex],I=Math.max(M.start,y.start),z=Math.min(m.count,Math.min(M.start+M.count,y.start+y.count));for(let D=I,X=z;D<X;D+=3){const H=D,P=D+1,j=D+2;l=lu(this,v,e,r,p,S,_,H,P,j),l&&(l.faceIndex=Math.floor(D/3),l.face.materialIndex=M.materialIndex,i.push(l))}}else{const A=Math.max(0,y.start),R=Math.min(m.count,y.start+y.count);for(let M=A,v=R;M<v;M+=3){const I=M,z=M+1,D=M+2;l=lu(this,h,e,r,p,S,_,I,z,D),l&&(l.faceIndex=Math.floor(M/3),i.push(l))}}}}function nM(o,e,i,r,l,c,h,d){let m;if(e.side===Fn?m=r.intersectTriangle(h,c,l,!0,d):m=r.intersectTriangle(l,c,h,e.side===Ia,d),m===null)return null;ou.copy(d),ou.applyMatrix4(o.matrixWorld);const p=i.ray.origin.distanceTo(ou);return p<i.near||p>i.far?null:{distance:p,point:ou.clone(),object:o}}function lu(o,e,i,r,l,c,h,d,m,p){o.getVertexPosition(d,iu),o.getVertexPosition(m,au),o.getVertexPosition(p,ru);const S=nM(o,e,i,r,iu,au,ru,R_);if(S){const _=new st;gi.getBarycoord(R_,iu,au,ru,_),l&&(S.uv=gi.getInterpolatedAttribute(l,d,m,p,_,new Ie)),c&&(S.uv1=gi.getInterpolatedAttribute(c,d,m,p,_,new Ie)),h&&(S.normal=gi.getInterpolatedAttribute(h,d,m,p,_,new st),S.normal.dot(r.direction)>0&&S.normal.multiplyScalar(-1));const x={a:d,b:m,c:p,normal:new st,materialIndex:0};gi.getNormal(iu,au,ru,x.normal),S.face=x,S.barycoord=_}return S}class Oo extends Sr{constructor(e=1,i=1,r=1,l=1,c=1,h=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:i,depth:r,widthSegments:l,heightSegments:c,depthSegments:h};const d=this;l=Math.floor(l),c=Math.floor(c),h=Math.floor(h);const m=[],p=[],S=[],_=[];let x=0,y=0;A("z","y","x",-1,-1,r,i,e,h,c,0),A("z","y","x",1,-1,r,i,-e,h,c,1),A("x","z","y",1,1,e,r,i,l,h,2),A("x","z","y",1,-1,e,r,-i,l,h,3),A("x","y","z",1,-1,e,i,r,l,c,4),A("x","y","z",-1,-1,e,i,-r,l,c,5),this.setIndex(m),this.setAttribute("position",new gr(p,3)),this.setAttribute("normal",new gr(S,3)),this.setAttribute("uv",new gr(_,2));function A(R,M,v,I,z,D,X,H,P,j,w){const C=D/P,G=X/j,nt=D/2,ut=X/2,gt=H/2,ft=P+1,N=j+1;let Z=0,Y=0;const vt=new st;for(let yt=0;yt<N;yt++){const L=yt*G-ut;for(let tt=0;tt<ft;tt++){const xt=tt*C-nt;vt[R]=xt*I,vt[M]=L*z,vt[v]=gt,p.push(vt.x,vt.y,vt.z),vt[R]=0,vt[M]=0,vt[v]=H>0?1:-1,S.push(vt.x,vt.y,vt.z),_.push(tt/P),_.push(1-yt/j),Z+=1}}for(let yt=0;yt<j;yt++)for(let L=0;L<P;L++){const tt=x+L+ft*yt,xt=x+L+ft*(yt+1),bt=x+(L+1)+ft*(yt+1),Nt=x+(L+1)+ft*yt;m.push(tt,xt,Nt),m.push(xt,bt,Nt),Y+=6}d.addGroup(y,Y,w),y+=Y,x+=Z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Oo(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Es(o){const e={};for(const i in o){e[i]={};for(const r in o[i]){const l=o[i][r];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[i][r]=null):e[i][r]=l.clone():Array.isArray(l)?e[i][r]=l.slice():e[i][r]=l}}return e}function wn(o){const e={};for(let i=0;i<o.length;i++){const r=Es(o[i]);for(const l in r)e[l]=r[l]}return e}function iM(o){const e=[];for(let i=0;i<o.length;i++)e.push(o[i].clone());return e}function y0(o){const e=o.getRenderTarget();return e===null?o.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ae.workingColorSpace}const aM={clone:Es,merge:wn};var rM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,sM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class aa extends Tu{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=rM,this.fragmentShader=sM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Es(e.uniforms),this.uniformsGroups=iM(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const i=super.toJSON(e);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const h=this.uniforms[l].value;h&&h.isTexture?i.uniforms[l]={type:"t",value:h.toJSON(e).uuid}:h&&h.isColor?i.uniforms[l]={type:"c",value:h.getHex()}:h&&h.isVector2?i.uniforms[l]={type:"v2",value:h.toArray()}:h&&h.isVector3?i.uniforms[l]={type:"v3",value:h.toArray()}:h&&h.isVector4?i.uniforms[l]={type:"v4",value:h.toArray()}:h&&h.isMatrix3?i.uniforms[l]={type:"m3",value:h.toArray()}:h&&h.isMatrix4?i.uniforms[l]={type:"m4",value:h.toArray()}:i.uniforms[l]={value:h}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const r={};for(const l in this.extensions)this.extensions[l]===!0&&(r[l]=!0);return Object.keys(r).length>0&&(i.extensions=r),i}}class E0 extends Kn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new cn,this.projectionMatrix=new cn,this.projectionMatrixInverse=new cn,this.coordinateSystem=Ai,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,i){return super.copy(e,i),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,i){super.updateWorldMatrix(e,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Oa=new st,C_=new Ie,w_=new Ie;class li extends E0{constructor(e=50,i=1,r=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const i=.5*this.getFilmHeight()/e;this.fov=id*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Hf*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return id*2*Math.atan(Math.tan(Hf*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,i,r){Oa.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Oa.x,Oa.y).multiplyScalar(-e/Oa.z),Oa.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(Oa.x,Oa.y).multiplyScalar(-e/Oa.z)}getViewSize(e,i){return this.getViewBounds(e,C_,w_),i.subVectors(w_,C_)}setViewOffset(e,i,r,l,c,h){this.aspect=e/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=c,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let i=e*Math.tan(Hf*.5*this.fov)/this.zoom,r=2*i,l=this.aspect*r,c=-.5*l;const h=this.view;if(this.view!==null&&this.view.enabled){const m=h.fullWidth,p=h.fullHeight;c+=h.offsetX*l/m,i-=h.offsetY*r/p,l*=h.width/m,r*=h.height/p}const d=this.filmOffset;d!==0&&(c+=e*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+l,i,i-r,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const ds=-90,ps=1;class oM extends Kn{constructor(e,i,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new li(ds,ps,e,i);l.layers=this.layers,this.add(l);const c=new li(ds,ps,e,i);c.layers=this.layers,this.add(c);const h=new li(ds,ps,e,i);h.layers=this.layers,this.add(h);const d=new li(ds,ps,e,i);d.layers=this.layers,this.add(d);const m=new li(ds,ps,e,i);m.layers=this.layers,this.add(m);const p=new li(ds,ps,e,i);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const e=this.coordinateSystem,i=this.children.concat(),[r,l,c,h,d,m]=i;for(const p of i)this.remove(p);if(e===Ai)r.up.set(0,1,0),r.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),h.up.set(0,0,1),h.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(e===Mu)r.up.set(0,-1,0),r.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),h.up.set(0,0,-1),h.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const p of i)this.add(p),p.updateMatrixWorld()}update(e,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:l}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[c,h,d,m,p,S]=this.children,_=e.getRenderTarget(),x=e.getActiveCubeFace(),y=e.getActiveMipmapLevel(),A=e.xr.enabled;e.xr.enabled=!1;const R=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0,l),e.render(i,c),e.setRenderTarget(r,1,l),e.render(i,h),e.setRenderTarget(r,2,l),e.render(i,d),e.setRenderTarget(r,3,l),e.render(i,m),e.setRenderTarget(r,4,l),e.render(i,p),r.texture.generateMipmaps=R,e.setRenderTarget(r,5,l),e.render(i,S),e.setRenderTarget(_,x,y),e.xr.enabled=A,r.texture.needsPMREMUpdate=!0}}class T0 extends Dn{constructor(e=[],i=xs,r,l,c,h,d,m,p,S){super(e,i,r,l,c,h,d,m,p,S),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class lM extends vr{constructor(e=1,i={}){super(e,e,i),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},l=[r,r,r,r,r,r];this.texture=new T0(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},l=new Oo(5,5,5),c=new aa({name:"CubemapFromEquirect",uniforms:Es(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:Fn,blending:Pa});c.uniforms.tEquirect.value=i;const h=new Ri(l,c),d=i.minFilter;return i.minFilter===mr&&(i.minFilter=bi),new oM(1,10,this).update(e,h),i.minFilter=d,h.geometry.dispose(),h.material.dispose(),this}clear(e,i=!0,r=!0,l=!0){const c=e.getRenderTarget();for(let h=0;h<6;h++)e.setRenderTarget(this,h),e.clear(i,r,l);e.setRenderTarget(c)}}class uu extends Kn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const uM={type:"move"};class lh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new uu,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new uu,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new st,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new st),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new uu,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new st,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new st),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const i=this._hand;if(i)for(const r of e.hand.values())this._getHandJoint(i,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,i,r){let l=null,c=null,h=null;const d=this._targetRay,m=this._grip,p=this._hand;if(e&&i.session.visibilityState!=="visible-blurred"){if(p&&e.hand){h=!0;for(const R of e.hand.values()){const M=i.getJointPose(R,r),v=this._getHandJoint(p,R);M!==null&&(v.matrix.fromArray(M.transform.matrix),v.matrix.decompose(v.position,v.rotation,v.scale),v.matrixWorldNeedsUpdate=!0,v.jointRadius=M.radius),v.visible=M!==null}const S=p.joints["index-finger-tip"],_=p.joints["thumb-tip"],x=S.position.distanceTo(_.position),y=.02,A=.005;p.inputState.pinching&&x>y+A?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!p.inputState.pinching&&x<=y-A&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else m!==null&&e.gripSpace&&(c=i.getPose(e.gripSpace,r),c!==null&&(m.matrix.fromArray(c.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,c.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(c.linearVelocity)):m.hasLinearVelocity=!1,c.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(c.angularVelocity)):m.hasAngularVelocity=!1));d!==null&&(l=i.getPose(e.targetRaySpace,r),l===null&&c!==null&&(l=c),l!==null&&(d.matrix.fromArray(l.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,l.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(l.linearVelocity)):d.hasLinearVelocity=!1,l.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(l.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(uM)))}return d!==null&&(d.visible=l!==null),m!==null&&(m.visible=c!==null),p!==null&&(p.visible=h!==null),this}_getHandJoint(e,i){if(e.joints[i.jointName]===void 0){const r=new uu;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[i.jointName]=r,e.add(r)}return e.joints[i.jointName]}}class cM extends Kn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ia,this.environmentIntensity=1,this.environmentRotation=new ia,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,i){return super.copy(e,i),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const i=super.toJSON(e);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}const uh=new st,fM=new st,hM=new ue;class cr{constructor(e=new st(1,0,0),i=0){this.isPlane=!0,this.normal=e,this.constant=i}set(e,i){return this.normal.copy(e),this.constant=i,this}setComponents(e,i,r,l){return this.normal.set(e,i,r),this.constant=l,this}setFromNormalAndCoplanarPoint(e,i){return this.normal.copy(e),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(e,i,r){const l=uh.subVectors(r,i).cross(fM.subVectors(e,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,i){return i.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,i){const r=e.delta(uh),l=this.normal.dot(r);if(l===0)return this.distanceToPoint(e.start)===0?i.copy(e.start):null;const c=-(e.start.dot(this.normal)+this.constant)/l;return c<0||c>1?null:i.copy(e.start).addScaledVector(r,c)}intersectsLine(e){const i=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return i<0&&r>0||r<0&&i>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,i){const r=i||hM.getNormalMatrix(e),l=this.coplanarPoint(uh).applyMatrix4(e),c=this.normal.applyMatrix3(r).normalize();return this.constant=-l.dot(c),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const or=new pd,dM=new Ie(.5,.5),cu=new st;class b0{constructor(e=new cr,i=new cr,r=new cr,l=new cr,c=new cr,h=new cr){this.planes=[e,i,r,l,c,h]}set(e,i,r,l,c,h){const d=this.planes;return d[0].copy(e),d[1].copy(i),d[2].copy(r),d[3].copy(l),d[4].copy(c),d[5].copy(h),this}copy(e){const i=this.planes;for(let r=0;r<6;r++)i[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,i=Ai,r=!1){const l=this.planes,c=e.elements,h=c[0],d=c[1],m=c[2],p=c[3],S=c[4],_=c[5],x=c[6],y=c[7],A=c[8],R=c[9],M=c[10],v=c[11],I=c[12],z=c[13],D=c[14],X=c[15];if(l[0].setComponents(p-h,y-S,v-A,X-I).normalize(),l[1].setComponents(p+h,y+S,v+A,X+I).normalize(),l[2].setComponents(p+d,y+_,v+R,X+z).normalize(),l[3].setComponents(p-d,y-_,v-R,X-z).normalize(),r)l[4].setComponents(m,x,M,D).normalize(),l[5].setComponents(p-m,y-x,v-M,X-D).normalize();else if(l[4].setComponents(p-m,y-x,v-M,X-D).normalize(),i===Ai)l[5].setComponents(p+m,y+x,v+M,X+D).normalize();else if(i===Mu)l[5].setComponents(m,x,M,D).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),or.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const i=e.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),or.copy(i.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(or)}intersectsSprite(e){or.center.set(0,0,0);const i=dM.distanceTo(e.center);return or.radius=.7071067811865476+i,or.applyMatrix4(e.matrixWorld),this.intersectsSphere(or)}intersectsSphere(e){const i=this.planes,r=e.center,l=-e.radius;for(let c=0;c<6;c++)if(i[c].distanceToPoint(r)<l)return!1;return!0}intersectsBox(e){const i=this.planes;for(let r=0;r<6;r++){const l=i[r];if(cu.x=l.normal.x>0?e.max.x:e.min.x,cu.y=l.normal.y>0?e.max.y:e.min.y,cu.z=l.normal.z>0?e.max.z:e.min.z,l.distanceToPoint(cu)<0)return!1}return!0}containsPoint(e){const i=this.planes;for(let r=0;r<6;r++)if(i[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class pM extends Dn{constructor(e,i,r,l,c,h,d,m,p){super(e,i,r,l,c,h,d,m,p),this.isCanvasTexture=!0,this.needsUpdate=!0}}class A0 extends Dn{constructor(e,i,r=_r,l,c,h,d=ui,m=ui,p,S=Ro,_=1){if(S!==Ro&&S!==Co)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const x={width:e,height:i,depth:_};super(x,l,c,h,d,m,S,r,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new dd(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const i=super.toJSON(e);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class R0 extends Dn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class zo extends Sr{constructor(e=1,i=1,r=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:i,widthSegments:r,heightSegments:l};const c=e/2,h=i/2,d=Math.floor(r),m=Math.floor(l),p=d+1,S=m+1,_=e/d,x=i/m,y=[],A=[],R=[],M=[];for(let v=0;v<S;v++){const I=v*x-h;for(let z=0;z<p;z++){const D=z*_-c;A.push(D,-I,0),R.push(0,0,1),M.push(z/d),M.push(1-v/m)}}for(let v=0;v<m;v++)for(let I=0;I<d;I++){const z=I+p*v,D=I+p*(v+1),X=I+1+p*(v+1),H=I+1+p*v;y.push(z,D,H),y.push(D,X,H)}this.setIndex(y),this.setAttribute("position",new gr(A,3)),this.setAttribute("normal",new gr(R,3)),this.setAttribute("uv",new gr(M,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new zo(e.width,e.height,e.widthSegments,e.heightSegments)}}class mM extends Tu{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=bx,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class gM extends Tu{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class _M extends E0{constructor(e=-1,i=1,r=1,l=-1,c=.1,h=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=i,this.top=r,this.bottom=l,this.near=c,this.far=h,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,i,r,l,c,h){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=c,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let c=r-e,h=r+e,d=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,S=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=p*this.view.offsetX,h=c+p*this.view.width,d-=S*this.view.offsetY,m=d-S*this.view.height}this.projectionMatrix.makeOrthographic(c,h,d,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class vM extends li{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}function D_(o,e,i,r){const l=SM(r);switch(i){case c0:return o*e;case h0:return o*e/l.components*l.byteLength;case cd:return o*e/l.components*l.byteLength;case d0:return o*e*2/l.components*l.byteLength;case fd:return o*e*2/l.components*l.byteLength;case f0:return o*e*3/l.components*l.byteLength;case _i:return o*e*4/l.components*l.byteLength;case hd:return o*e*4/l.components*l.byteLength;case mu:case gu:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case _u:case vu:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case Dh:case Lh:return Math.max(o,16)*Math.max(e,8)/4;case wh:case Uh:return Math.max(o,8)*Math.max(e,8)/2;case Nh:case Oh:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case zh:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case Ph:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case Bh:return Math.floor((o+4)/5)*Math.floor((e+3)/4)*16;case Ih:return Math.floor((o+4)/5)*Math.floor((e+4)/5)*16;case Fh:return Math.floor((o+5)/6)*Math.floor((e+4)/5)*16;case Hh:return Math.floor((o+5)/6)*Math.floor((e+5)/6)*16;case Gh:return Math.floor((o+7)/8)*Math.floor((e+4)/5)*16;case Vh:return Math.floor((o+7)/8)*Math.floor((e+5)/6)*16;case Xh:return Math.floor((o+7)/8)*Math.floor((e+7)/8)*16;case kh:return Math.floor((o+9)/10)*Math.floor((e+4)/5)*16;case Wh:return Math.floor((o+9)/10)*Math.floor((e+5)/6)*16;case qh:return Math.floor((o+9)/10)*Math.floor((e+7)/8)*16;case Yh:return Math.floor((o+9)/10)*Math.floor((e+9)/10)*16;case Zh:return Math.floor((o+11)/12)*Math.floor((e+9)/10)*16;case jh:return Math.floor((o+11)/12)*Math.floor((e+11)/12)*16;case Kh:case Qh:case Jh:return Math.ceil(o/4)*Math.ceil(e/4)*16;case $h:case td:return Math.ceil(o/4)*Math.ceil(e/4)*8;case ed:case nd:return Math.ceil(o/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function SM(o){switch(o){case na:case s0:return{byteLength:1,components:1};case bo:case o0:case Do:return{byteLength:2,components:1};case ld:case ud:return{byteLength:2,components:4};case _r:case od:case ta:return{byteLength:4,components:1};case l0:case u0:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${o}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:sd}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=sd);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function C0(){let o=null,e=!1,i=null,r=null;function l(c,h){i(c,h),r=o.requestAnimationFrame(l)}return{start:function(){e!==!0&&i!==null&&(r=o.requestAnimationFrame(l),e=!0)},stop:function(){o.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(c){i=c},setContext:function(c){o=c}}}function xM(o){const e=new WeakMap;function i(d,m){const p=d.array,S=d.usage,_=p.byteLength,x=o.createBuffer();o.bindBuffer(m,x),o.bufferData(m,p,S),d.onUploadCallback();let y;if(p instanceof Float32Array)y=o.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)y=o.HALF_FLOAT;else if(p instanceof Uint16Array)d.isFloat16BufferAttribute?y=o.HALF_FLOAT:y=o.UNSIGNED_SHORT;else if(p instanceof Int16Array)y=o.SHORT;else if(p instanceof Uint32Array)y=o.UNSIGNED_INT;else if(p instanceof Int32Array)y=o.INT;else if(p instanceof Int8Array)y=o.BYTE;else if(p instanceof Uint8Array)y=o.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)y=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:x,type:y,bytesPerElement:p.BYTES_PER_ELEMENT,version:d.version,size:_}}function r(d,m,p){const S=m.array,_=m.updateRanges;if(o.bindBuffer(p,d),_.length===0)o.bufferSubData(p,0,S);else{_.sort((y,A)=>y.start-A.start);let x=0;for(let y=1;y<_.length;y++){const A=_[x],R=_[y];R.start<=A.start+A.count+1?A.count=Math.max(A.count,R.start+R.count-A.start):(++x,_[x]=R)}_.length=x+1;for(let y=0,A=_.length;y<A;y++){const R=_[y];o.bufferSubData(p,R.start*S.BYTES_PER_ELEMENT,S,R.start,R.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(d){return d.isInterleavedBufferAttribute&&(d=d.data),e.get(d)}function c(d){d.isInterleavedBufferAttribute&&(d=d.data);const m=e.get(d);m&&(o.deleteBuffer(m.buffer),e.delete(d))}function h(d,m){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const S=e.get(d);(!S||S.version<d.version)&&e.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const p=e.get(d);if(p===void 0)e.set(d,i(d,m));else if(p.version<d.version){if(p.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(p.buffer,d,m),p.version=d.version}}return{get:l,remove:c,update:h}}var MM=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,yM=`#ifdef USE_ALPHAHASH
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
#endif`,EM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,TM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,bM=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,AM=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,RM=`#ifdef USE_AOMAP
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
#endif`,CM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,wM=`#ifdef USE_BATCHING
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
#endif`,DM=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,UM=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,LM=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,NM=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,OM=`#ifdef USE_IRIDESCENCE
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
#endif`,zM=`#ifdef USE_BUMPMAP
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
#endif`,PM=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,BM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,IM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,FM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,HM=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,GM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,VM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,XM=`#if defined( USE_COLOR_ALPHA )
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
#endif`,kM=`#define PI 3.141592653589793
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
} // validated`,WM=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,qM=`vec3 transformedNormal = objectNormal;
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
#endif`,YM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,ZM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,jM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,KM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,QM="gl_FragColor = linearToOutputTexel( gl_FragColor );",JM=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,$M=`#ifdef USE_ENVMAP
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
#endif`,ty=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,ey=`#ifdef USE_ENVMAP
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
#endif`,ny=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,iy=`#ifdef USE_ENVMAP
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
#endif`,ay=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,ry=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,sy=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,oy=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,ly=`#ifdef USE_GRADIENTMAP
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
}`,uy=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,cy=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,fy=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,hy=`uniform bool receiveShadow;
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
#endif`,dy=`#ifdef USE_ENVMAP
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
#endif`,py=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,my=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,gy=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,_y=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,vy=`PhysicalMaterial material;
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
#endif`,Sy=`struct PhysicalMaterial {
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
}`,xy=`
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
#endif`,My=`#if defined( RE_IndirectDiffuse )
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
#endif`,yy=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Ey=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Ty=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,by=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ay=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Ry=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Cy=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,wy=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Dy=`#if defined( USE_POINTS_UV )
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
#endif`,Uy=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Ly=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Ny=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Oy=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,zy=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Py=`#ifdef USE_MORPHTARGETS
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
#endif`,By=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Iy=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Fy=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Hy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Gy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Vy=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Xy=`#ifdef USE_NORMALMAP
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
#endif`,ky=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Wy=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,qy=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Yy=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Zy=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,jy=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Ky=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Qy=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Jy=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,$y=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,tE=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,eE=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,nE=`#if NUM_SPOT_LIGHT_COORDS > 0
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
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
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
#endif`,iE=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,aE=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,rE=`float getShadowMask() {
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
}`,sE=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,oE=`#ifdef USE_SKINNING
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
#endif`,lE=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,uE=`#ifdef USE_SKINNING
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
#endif`,cE=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,fE=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,hE=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,dE=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,pE=`#ifdef USE_TRANSMISSION
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
#endif`,mE=`#ifdef USE_TRANSMISSION
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
#endif`,gE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,_E=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,vE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,SE=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const xE=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,ME=`uniform sampler2D t2D;
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
}`,yE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,EE=`#ifdef ENVMAP_TYPE_CUBE
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
}`,TE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,bE=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,AE=`#include <common>
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
}`,RE=`#if DEPTH_PACKING == 3200
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
}`,CE=`#define DISTANCE
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
}`,wE=`#define DISTANCE
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
}`,DE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,UE=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,LE=`uniform float scale;
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
}`,NE=`uniform vec3 diffuse;
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
}`,OE=`#include <common>
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
}`,zE=`uniform vec3 diffuse;
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
}`,PE=`#define LAMBERT
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
}`,BE=`#define LAMBERT
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
}`,IE=`#define MATCAP
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
}`,FE=`#define MATCAP
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
}`,HE=`#define NORMAL
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
}`,GE=`#define NORMAL
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
}`,VE=`#define PHONG
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
}`,XE=`#define PHONG
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
}`,kE=`#define STANDARD
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
}`,WE=`#define STANDARD
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
}`,qE=`#define TOON
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
}`,YE=`#define TOON
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
}`,ZE=`uniform float size;
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
}`,jE=`uniform vec3 diffuse;
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
}`,KE=`#include <common>
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
}`,QE=`uniform vec3 color;
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
}`,JE=`uniform float rotation;
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
}`,$E=`uniform vec3 diffuse;
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
}`,ce={alphahash_fragment:MM,alphahash_pars_fragment:yM,alphamap_fragment:EM,alphamap_pars_fragment:TM,alphatest_fragment:bM,alphatest_pars_fragment:AM,aomap_fragment:RM,aomap_pars_fragment:CM,batching_pars_vertex:wM,batching_vertex:DM,begin_vertex:UM,beginnormal_vertex:LM,bsdfs:NM,iridescence_fragment:OM,bumpmap_pars_fragment:zM,clipping_planes_fragment:PM,clipping_planes_pars_fragment:BM,clipping_planes_pars_vertex:IM,clipping_planes_vertex:FM,color_fragment:HM,color_pars_fragment:GM,color_pars_vertex:VM,color_vertex:XM,common:kM,cube_uv_reflection_fragment:WM,defaultnormal_vertex:qM,displacementmap_pars_vertex:YM,displacementmap_vertex:ZM,emissivemap_fragment:jM,emissivemap_pars_fragment:KM,colorspace_fragment:QM,colorspace_pars_fragment:JM,envmap_fragment:$M,envmap_common_pars_fragment:ty,envmap_pars_fragment:ey,envmap_pars_vertex:ny,envmap_physical_pars_fragment:dy,envmap_vertex:iy,fog_vertex:ay,fog_pars_vertex:ry,fog_fragment:sy,fog_pars_fragment:oy,gradientmap_pars_fragment:ly,lightmap_pars_fragment:uy,lights_lambert_fragment:cy,lights_lambert_pars_fragment:fy,lights_pars_begin:hy,lights_toon_fragment:py,lights_toon_pars_fragment:my,lights_phong_fragment:gy,lights_phong_pars_fragment:_y,lights_physical_fragment:vy,lights_physical_pars_fragment:Sy,lights_fragment_begin:xy,lights_fragment_maps:My,lights_fragment_end:yy,logdepthbuf_fragment:Ey,logdepthbuf_pars_fragment:Ty,logdepthbuf_pars_vertex:by,logdepthbuf_vertex:Ay,map_fragment:Ry,map_pars_fragment:Cy,map_particle_fragment:wy,map_particle_pars_fragment:Dy,metalnessmap_fragment:Uy,metalnessmap_pars_fragment:Ly,morphinstance_vertex:Ny,morphcolor_vertex:Oy,morphnormal_vertex:zy,morphtarget_pars_vertex:Py,morphtarget_vertex:By,normal_fragment_begin:Iy,normal_fragment_maps:Fy,normal_pars_fragment:Hy,normal_pars_vertex:Gy,normal_vertex:Vy,normalmap_pars_fragment:Xy,clearcoat_normal_fragment_begin:ky,clearcoat_normal_fragment_maps:Wy,clearcoat_pars_fragment:qy,iridescence_pars_fragment:Yy,opaque_fragment:Zy,packing:jy,premultiplied_alpha_fragment:Ky,project_vertex:Qy,dithering_fragment:Jy,dithering_pars_fragment:$y,roughnessmap_fragment:tE,roughnessmap_pars_fragment:eE,shadowmap_pars_fragment:nE,shadowmap_pars_vertex:iE,shadowmap_vertex:aE,shadowmask_pars_fragment:rE,skinbase_vertex:sE,skinning_pars_vertex:oE,skinning_vertex:lE,skinnormal_vertex:uE,specularmap_fragment:cE,specularmap_pars_fragment:fE,tonemapping_fragment:hE,tonemapping_pars_fragment:dE,transmission_fragment:pE,transmission_pars_fragment:mE,uv_pars_fragment:gE,uv_pars_vertex:_E,uv_vertex:vE,worldpos_vertex:SE,background_vert:xE,background_frag:ME,backgroundCube_vert:yE,backgroundCube_frag:EE,cube_vert:TE,cube_frag:bE,depth_vert:AE,depth_frag:RE,distanceRGBA_vert:CE,distanceRGBA_frag:wE,equirect_vert:DE,equirect_frag:UE,linedashed_vert:LE,linedashed_frag:NE,meshbasic_vert:OE,meshbasic_frag:zE,meshlambert_vert:PE,meshlambert_frag:BE,meshmatcap_vert:IE,meshmatcap_frag:FE,meshnormal_vert:HE,meshnormal_frag:GE,meshphong_vert:VE,meshphong_frag:XE,meshphysical_vert:kE,meshphysical_frag:WE,meshtoon_vert:qE,meshtoon_frag:YE,points_vert:ZE,points_frag:jE,shadow_vert:KE,shadow_frag:QE,sprite_vert:JE,sprite_frag:$E},Lt={common:{diffuse:{value:new Be(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ue},alphaMap:{value:null},alphaMapTransform:{value:new ue},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ue}},envmap:{envMap:{value:null},envMapRotation:{value:new ue},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ue}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ue}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ue},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ue},normalScale:{value:new Ie(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ue},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ue}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ue}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ue}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Be(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Be(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ue},alphaTest:{value:0},uvTransform:{value:new ue}},sprite:{diffuse:{value:new Be(16777215)},opacity:{value:1},center:{value:new Ie(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ue},alphaMap:{value:null},alphaMapTransform:{value:new ue},alphaTest:{value:0}}},Ti={basic:{uniforms:wn([Lt.common,Lt.specularmap,Lt.envmap,Lt.aomap,Lt.lightmap,Lt.fog]),vertexShader:ce.meshbasic_vert,fragmentShader:ce.meshbasic_frag},lambert:{uniforms:wn([Lt.common,Lt.specularmap,Lt.envmap,Lt.aomap,Lt.lightmap,Lt.emissivemap,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.fog,Lt.lights,{emissive:{value:new Be(0)}}]),vertexShader:ce.meshlambert_vert,fragmentShader:ce.meshlambert_frag},phong:{uniforms:wn([Lt.common,Lt.specularmap,Lt.envmap,Lt.aomap,Lt.lightmap,Lt.emissivemap,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.fog,Lt.lights,{emissive:{value:new Be(0)},specular:{value:new Be(1118481)},shininess:{value:30}}]),vertexShader:ce.meshphong_vert,fragmentShader:ce.meshphong_frag},standard:{uniforms:wn([Lt.common,Lt.envmap,Lt.aomap,Lt.lightmap,Lt.emissivemap,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.roughnessmap,Lt.metalnessmap,Lt.fog,Lt.lights,{emissive:{value:new Be(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ce.meshphysical_vert,fragmentShader:ce.meshphysical_frag},toon:{uniforms:wn([Lt.common,Lt.aomap,Lt.lightmap,Lt.emissivemap,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.gradientmap,Lt.fog,Lt.lights,{emissive:{value:new Be(0)}}]),vertexShader:ce.meshtoon_vert,fragmentShader:ce.meshtoon_frag},matcap:{uniforms:wn([Lt.common,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.fog,{matcap:{value:null}}]),vertexShader:ce.meshmatcap_vert,fragmentShader:ce.meshmatcap_frag},points:{uniforms:wn([Lt.points,Lt.fog]),vertexShader:ce.points_vert,fragmentShader:ce.points_frag},dashed:{uniforms:wn([Lt.common,Lt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ce.linedashed_vert,fragmentShader:ce.linedashed_frag},depth:{uniforms:wn([Lt.common,Lt.displacementmap]),vertexShader:ce.depth_vert,fragmentShader:ce.depth_frag},normal:{uniforms:wn([Lt.common,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,{opacity:{value:1}}]),vertexShader:ce.meshnormal_vert,fragmentShader:ce.meshnormal_frag},sprite:{uniforms:wn([Lt.sprite,Lt.fog]),vertexShader:ce.sprite_vert,fragmentShader:ce.sprite_frag},background:{uniforms:{uvTransform:{value:new ue},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ce.background_vert,fragmentShader:ce.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ue}},vertexShader:ce.backgroundCube_vert,fragmentShader:ce.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ce.cube_vert,fragmentShader:ce.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ce.equirect_vert,fragmentShader:ce.equirect_frag},distanceRGBA:{uniforms:wn([Lt.common,Lt.displacementmap,{referencePosition:{value:new st},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ce.distanceRGBA_vert,fragmentShader:ce.distanceRGBA_frag},shadow:{uniforms:wn([Lt.lights,Lt.fog,{color:{value:new Be(0)},opacity:{value:1}}]),vertexShader:ce.shadow_vert,fragmentShader:ce.shadow_frag}};Ti.physical={uniforms:wn([Ti.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ue},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ue},clearcoatNormalScale:{value:new Ie(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ue},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ue},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ue},sheen:{value:0},sheenColor:{value:new Be(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ue},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ue},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ue},transmissionSamplerSize:{value:new Ie},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ue},attenuationDistance:{value:0},attenuationColor:{value:new Be(0)},specularColor:{value:new Be(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ue},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ue},anisotropyVector:{value:new Ie},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ue}}]),vertexShader:ce.meshphysical_vert,fragmentShader:ce.meshphysical_frag};const fu={r:0,b:0,g:0},lr=new ia,tT=new cn;function eT(o,e,i,r,l,c,h){const d=new Be(0);let m=c===!0?0:1,p,S,_=null,x=0,y=null;function A(z){let D=z.isScene===!0?z.background:null;return D&&D.isTexture&&(D=(z.backgroundBlurriness>0?i:e).get(D)),D}function R(z){let D=!1;const X=A(z);X===null?v(d,m):X&&X.isColor&&(v(X,1),D=!0);const H=o.xr.getEnvironmentBlendMode();H==="additive"?r.buffers.color.setClear(0,0,0,1,h):H==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,h),(o.autoClear||D)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil))}function M(z,D){const X=A(D);X&&(X.isCubeTexture||X.mapping===Eu)?(S===void 0&&(S=new Ri(new Oo(1,1,1),new aa({name:"BackgroundCubeMaterial",uniforms:Es(Ti.backgroundCube.uniforms),vertexShader:Ti.backgroundCube.vertexShader,fragmentShader:Ti.backgroundCube.fragmentShader,side:Fn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),S.geometry.deleteAttribute("normal"),S.geometry.deleteAttribute("uv"),S.onBeforeRender=function(H,P,j){this.matrixWorld.copyPosition(j.matrixWorld)},Object.defineProperty(S.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(S)),lr.copy(D.backgroundRotation),lr.x*=-1,lr.y*=-1,lr.z*=-1,X.isCubeTexture&&X.isRenderTargetTexture===!1&&(lr.y*=-1,lr.z*=-1),S.material.uniforms.envMap.value=X,S.material.uniforms.flipEnvMap.value=X.isCubeTexture&&X.isRenderTargetTexture===!1?-1:1,S.material.uniforms.backgroundBlurriness.value=D.backgroundBlurriness,S.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,S.material.uniforms.backgroundRotation.value.setFromMatrix4(tT.makeRotationFromEuler(lr)),S.material.toneMapped=Ae.getTransfer(X.colorSpace)!==Pe,(_!==X||x!==X.version||y!==o.toneMapping)&&(S.material.needsUpdate=!0,_=X,x=X.version,y=o.toneMapping),S.layers.enableAll(),z.unshift(S,S.geometry,S.material,0,0,null)):X&&X.isTexture&&(p===void 0&&(p=new Ri(new zo(2,2),new aa({name:"BackgroundMaterial",uniforms:Es(Ti.background.uniforms),vertexShader:Ti.background.vertexShader,fragmentShader:Ti.background.fragmentShader,side:Ia,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(p)),p.material.uniforms.t2D.value=X,p.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,p.material.toneMapped=Ae.getTransfer(X.colorSpace)!==Pe,X.matrixAutoUpdate===!0&&X.updateMatrix(),p.material.uniforms.uvTransform.value.copy(X.matrix),(_!==X||x!==X.version||y!==o.toneMapping)&&(p.material.needsUpdate=!0,_=X,x=X.version,y=o.toneMapping),p.layers.enableAll(),z.unshift(p,p.geometry,p.material,0,0,null))}function v(z,D){z.getRGB(fu,y0(o)),r.buffers.color.setClear(fu.r,fu.g,fu.b,D,h)}function I(){S!==void 0&&(S.geometry.dispose(),S.material.dispose(),S=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return d},setClearColor:function(z,D=1){d.set(z),m=D,v(d,m)},getClearAlpha:function(){return m},setClearAlpha:function(z){m=z,v(d,m)},render:R,addToRenderList:M,dispose:I}}function nT(o,e){const i=o.getParameter(o.MAX_VERTEX_ATTRIBS),r={},l=x(null);let c=l,h=!1;function d(C,G,nt,ut,gt){let ft=!1;const N=_(ut,nt,G);c!==N&&(c=N,p(c.object)),ft=y(C,ut,nt,gt),ft&&A(C,ut,nt,gt),gt!==null&&e.update(gt,o.ELEMENT_ARRAY_BUFFER),(ft||h)&&(h=!1,D(C,G,nt,ut),gt!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,e.get(gt).buffer))}function m(){return o.createVertexArray()}function p(C){return o.bindVertexArray(C)}function S(C){return o.deleteVertexArray(C)}function _(C,G,nt){const ut=nt.wireframe===!0;let gt=r[C.id];gt===void 0&&(gt={},r[C.id]=gt);let ft=gt[G.id];ft===void 0&&(ft={},gt[G.id]=ft);let N=ft[ut];return N===void 0&&(N=x(m()),ft[ut]=N),N}function x(C){const G=[],nt=[],ut=[];for(let gt=0;gt<i;gt++)G[gt]=0,nt[gt]=0,ut[gt]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:G,enabledAttributes:nt,attributeDivisors:ut,object:C,attributes:{},index:null}}function y(C,G,nt,ut){const gt=c.attributes,ft=G.attributes;let N=0;const Z=nt.getAttributes();for(const Y in Z)if(Z[Y].location>=0){const yt=gt[Y];let L=ft[Y];if(L===void 0&&(Y==="instanceMatrix"&&C.instanceMatrix&&(L=C.instanceMatrix),Y==="instanceColor"&&C.instanceColor&&(L=C.instanceColor)),yt===void 0||yt.attribute!==L||L&&yt.data!==L.data)return!0;N++}return c.attributesNum!==N||c.index!==ut}function A(C,G,nt,ut){const gt={},ft=G.attributes;let N=0;const Z=nt.getAttributes();for(const Y in Z)if(Z[Y].location>=0){let yt=ft[Y];yt===void 0&&(Y==="instanceMatrix"&&C.instanceMatrix&&(yt=C.instanceMatrix),Y==="instanceColor"&&C.instanceColor&&(yt=C.instanceColor));const L={};L.attribute=yt,yt&&yt.data&&(L.data=yt.data),gt[Y]=L,N++}c.attributes=gt,c.attributesNum=N,c.index=ut}function R(){const C=c.newAttributes;for(let G=0,nt=C.length;G<nt;G++)C[G]=0}function M(C){v(C,0)}function v(C,G){const nt=c.newAttributes,ut=c.enabledAttributes,gt=c.attributeDivisors;nt[C]=1,ut[C]===0&&(o.enableVertexAttribArray(C),ut[C]=1),gt[C]!==G&&(o.vertexAttribDivisor(C,G),gt[C]=G)}function I(){const C=c.newAttributes,G=c.enabledAttributes;for(let nt=0,ut=G.length;nt<ut;nt++)G[nt]!==C[nt]&&(o.disableVertexAttribArray(nt),G[nt]=0)}function z(C,G,nt,ut,gt,ft,N){N===!0?o.vertexAttribIPointer(C,G,nt,gt,ft):o.vertexAttribPointer(C,G,nt,ut,gt,ft)}function D(C,G,nt,ut){R();const gt=ut.attributes,ft=nt.getAttributes(),N=G.defaultAttributeValues;for(const Z in ft){const Y=ft[Z];if(Y.location>=0){let vt=gt[Z];if(vt===void 0&&(Z==="instanceMatrix"&&C.instanceMatrix&&(vt=C.instanceMatrix),Z==="instanceColor"&&C.instanceColor&&(vt=C.instanceColor)),vt!==void 0){const yt=vt.normalized,L=vt.itemSize,tt=e.get(vt);if(tt===void 0)continue;const xt=tt.buffer,bt=tt.type,Nt=tt.bytesPerElement,et=bt===o.INT||bt===o.UNSIGNED_INT||vt.gpuType===od;if(vt.isInterleavedBufferAttribute){const ot=vt.data,wt=ot.stride,Bt=vt.offset;if(ot.isInstancedInterleavedBuffer){for(let Xt=0;Xt<Y.locationSize;Xt++)v(Y.location+Xt,ot.meshPerAttribute);C.isInstancedMesh!==!0&&ut._maxInstanceCount===void 0&&(ut._maxInstanceCount=ot.meshPerAttribute*ot.count)}else for(let Xt=0;Xt<Y.locationSize;Xt++)M(Y.location+Xt);o.bindBuffer(o.ARRAY_BUFFER,xt);for(let Xt=0;Xt<Y.locationSize;Xt++)z(Y.location+Xt,L/Y.locationSize,bt,yt,wt*Nt,(Bt+L/Y.locationSize*Xt)*Nt,et)}else{if(vt.isInstancedBufferAttribute){for(let ot=0;ot<Y.locationSize;ot++)v(Y.location+ot,vt.meshPerAttribute);C.isInstancedMesh!==!0&&ut._maxInstanceCount===void 0&&(ut._maxInstanceCount=vt.meshPerAttribute*vt.count)}else for(let ot=0;ot<Y.locationSize;ot++)M(Y.location+ot);o.bindBuffer(o.ARRAY_BUFFER,xt);for(let ot=0;ot<Y.locationSize;ot++)z(Y.location+ot,L/Y.locationSize,bt,yt,L*Nt,L/Y.locationSize*ot*Nt,et)}}else if(N!==void 0){const yt=N[Z];if(yt!==void 0)switch(yt.length){case 2:o.vertexAttrib2fv(Y.location,yt);break;case 3:o.vertexAttrib3fv(Y.location,yt);break;case 4:o.vertexAttrib4fv(Y.location,yt);break;default:o.vertexAttrib1fv(Y.location,yt)}}}}I()}function X(){j();for(const C in r){const G=r[C];for(const nt in G){const ut=G[nt];for(const gt in ut)S(ut[gt].object),delete ut[gt];delete G[nt]}delete r[C]}}function H(C){if(r[C.id]===void 0)return;const G=r[C.id];for(const nt in G){const ut=G[nt];for(const gt in ut)S(ut[gt].object),delete ut[gt];delete G[nt]}delete r[C.id]}function P(C){for(const G in r){const nt=r[G];if(nt[C.id]===void 0)continue;const ut=nt[C.id];for(const gt in ut)S(ut[gt].object),delete ut[gt];delete nt[C.id]}}function j(){w(),h=!0,c!==l&&(c=l,p(c.object))}function w(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:j,resetDefaultState:w,dispose:X,releaseStatesOfGeometry:H,releaseStatesOfProgram:P,initAttributes:R,enableAttribute:M,disableUnusedAttributes:I}}function iT(o,e,i){let r;function l(p){r=p}function c(p,S){o.drawArrays(r,p,S),i.update(S,r,1)}function h(p,S,_){_!==0&&(o.drawArraysInstanced(r,p,S,_),i.update(S,r,_))}function d(p,S,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,p,0,S,0,_);let y=0;for(let A=0;A<_;A++)y+=S[A];i.update(y,r,1)}function m(p,S,_,x){if(_===0)return;const y=e.get("WEBGL_multi_draw");if(y===null)for(let A=0;A<p.length;A++)h(p[A],S[A],x[A]);else{y.multiDrawArraysInstancedWEBGL(r,p,0,S,0,x,0,_);let A=0;for(let R=0;R<_;R++)A+=S[R]*x[R];i.update(A,r,1)}}this.setMode=l,this.render=c,this.renderInstances=h,this.renderMultiDraw=d,this.renderMultiDrawInstances=m}function aT(o,e,i,r){let l;function c(){if(l!==void 0)return l;if(e.has("EXT_texture_filter_anisotropic")===!0){const P=e.get("EXT_texture_filter_anisotropic");l=o.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function h(P){return!(P!==_i&&r.convert(P)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(P){const j=P===Do&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(P!==na&&r.convert(P)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_TYPE)&&P!==ta&&!j)}function m(P){if(P==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=i.precision!==void 0?i.precision:"highp";const S=m(p);S!==p&&(console.warn("THREE.WebGLRenderer:",p,"not supported, using",S,"instead."),p=S);const _=i.logarithmicDepthBuffer===!0,x=i.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),y=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),A=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),R=o.getParameter(o.MAX_TEXTURE_SIZE),M=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),v=o.getParameter(o.MAX_VERTEX_ATTRIBS),I=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),z=o.getParameter(o.MAX_VARYING_VECTORS),D=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),X=A>0,H=o.getParameter(o.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:m,textureFormatReadable:h,textureTypeReadable:d,precision:p,logarithmicDepthBuffer:_,reversedDepthBuffer:x,maxTextures:y,maxVertexTextures:A,maxTextureSize:R,maxCubemapSize:M,maxAttributes:v,maxVertexUniforms:I,maxVaryings:z,maxFragmentUniforms:D,vertexTextures:X,maxSamples:H}}function rT(o){const e=this;let i=null,r=0,l=!1,c=!1;const h=new cr,d=new ue,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(_,x){const y=_.length!==0||x||r!==0||l;return l=x,r=_.length,y},this.beginShadows=function(){c=!0,S(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(_,x){i=S(_,x,0)},this.setState=function(_,x,y){const A=_.clippingPlanes,R=_.clipIntersection,M=_.clipShadows,v=o.get(_);if(!l||A===null||A.length===0||c&&!M)c?S(null):p();else{const I=c?0:r,z=I*4;let D=v.clippingState||null;m.value=D,D=S(A,x,z,y);for(let X=0;X!==z;++X)D[X]=i[X];v.clippingState=D,this.numIntersection=R?this.numPlanes:0,this.numPlanes+=I}};function p(){m.value!==i&&(m.value=i,m.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function S(_,x,y,A){const R=_!==null?_.length:0;let M=null;if(R!==0){if(M=m.value,A!==!0||M===null){const v=y+R*4,I=x.matrixWorldInverse;d.getNormalMatrix(I),(M===null||M.length<v)&&(M=new Float32Array(v));for(let z=0,D=y;z!==R;++z,D+=4)h.copy(_[z]).applyMatrix4(I,d),h.normal.toArray(M,D),M[D+3]=h.constant}m.value=M,m.needsUpdate=!0}return e.numPlanes=R,e.numIntersection=0,M}}function sT(o){let e=new WeakMap;function i(h,d){return d===bh?h.mapping=xs:d===Ah&&(h.mapping=Ms),h}function r(h){if(h&&h.isTexture){const d=h.mapping;if(d===bh||d===Ah)if(e.has(h)){const m=e.get(h).texture;return i(m,h.mapping)}else{const m=h.image;if(m&&m.height>0){const p=new lM(m.height);return p.fromEquirectangularTexture(o,h),e.set(h,p),h.addEventListener("dispose",l),i(p.texture,h.mapping)}else return null}}return h}function l(h){const d=h.target;d.removeEventListener("dispose",l);const m=e.get(d);m!==void 0&&(e.delete(d),m.dispose())}function c(){e=new WeakMap}return{get:r,dispose:c}}const gs=4,U_=[.125,.215,.35,.446,.526,.582],dr=20,ch=new _M,L_=new Be;let fh=null,hh=0,dh=0,ph=!1;const fr=(1+Math.sqrt(5))/2,ms=1/fr,N_=[new st(-fr,ms,0),new st(fr,ms,0),new st(-ms,0,fr),new st(ms,0,fr),new st(0,fr,-ms),new st(0,fr,ms),new st(-1,1,-1),new st(1,1,-1),new st(-1,1,1),new st(1,1,1)],oT=new st;class O_{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,i=0,r=.1,l=100,c={}){const{size:h=256,position:d=oT}=c;fh=this._renderer.getRenderTarget(),hh=this._renderer.getActiveCubeFace(),dh=this._renderer.getActiveMipmapLevel(),ph=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(h);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(e,r,l,m,d),i>0&&this._blur(m,0,0,i),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(e,i=null){return this._fromTexture(e,i)}fromCubemap(e,i=null){return this._fromTexture(e,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=B_(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=P_(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(fh,hh,dh),this._renderer.xr.enabled=ph,e.scissorTest=!1,hu(e,0,0,e.width,e.height)}_fromTexture(e,i){e.mapping===xs||e.mapping===Ms?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),fh=this._renderer.getRenderTarget(),hh=this._renderer.getActiveCubeFace(),dh=this._renderer.getActiveMipmapLevel(),ph=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=i||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,r={magFilter:bi,minFilter:bi,generateMipmaps:!1,type:Do,format:_i,colorSpace:ys,depthBuffer:!1},l=z_(e,i,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=z_(e,i,r);const{_lodMax:c}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=lT(c)),this._blurMaterial=uT(c,e,i)}return l}_compileMaterial(e){const i=new Ri(this._lodPlanes[0],e);this._renderer.compile(i,ch)}_sceneToCubeUV(e,i,r,l,c){const m=new li(90,1,i,r),p=[1,-1,1,1,1,1],S=[1,1,1,-1,-1,-1],_=this._renderer,x=_.autoClear,y=_.toneMapping;_.getClearColor(L_),_.toneMapping=Ba,_.autoClear=!1,_.state.buffers.depth.getReversed()&&(_.setRenderTarget(l),_.clearDepth(),_.setRenderTarget(null));const R=new S0({name:"PMREM.Background",side:Fn,depthWrite:!1,depthTest:!1}),M=new Ri(new Oo,R);let v=!1;const I=e.background;I?I.isColor&&(R.color.copy(I),e.background=null,v=!0):(R.color.copy(L_),v=!0);for(let z=0;z<6;z++){const D=z%3;D===0?(m.up.set(0,p[z],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x+S[z],c.y,c.z)):D===1?(m.up.set(0,0,p[z]),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y+S[z],c.z)):(m.up.set(0,p[z],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y,c.z+S[z]));const X=this._cubeSize;hu(l,D*X,z>2?X:0,X,X),_.setRenderTarget(l),v&&_.render(M,m),_.render(e,m)}M.geometry.dispose(),M.material.dispose(),_.toneMapping=y,_.autoClear=x,e.background=I}_textureToCubeUV(e,i){const r=this._renderer,l=e.mapping===xs||e.mapping===Ms;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=B_()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=P_());const c=l?this._cubemapMaterial:this._equirectMaterial,h=new Ri(this._lodPlanes[0],c),d=c.uniforms;d.envMap.value=e;const m=this._cubeSize;hu(i,0,0,3*m,2*m),r.setRenderTarget(i),r.render(h,ch)}_applyPMREM(e){const i=this._renderer,r=i.autoClear;i.autoClear=!1;const l=this._lodPlanes.length;for(let c=1;c<l;c++){const h=Math.sqrt(this._sigmas[c]*this._sigmas[c]-this._sigmas[c-1]*this._sigmas[c-1]),d=N_[(l-c-1)%N_.length];this._blur(e,c-1,c,h,d)}i.autoClear=r}_blur(e,i,r,l,c){const h=this._pingPongRenderTarget;this._halfBlur(e,h,i,r,l,"latitudinal",c),this._halfBlur(h,e,r,r,l,"longitudinal",c)}_halfBlur(e,i,r,l,c,h,d){const m=this._renderer,p=this._blurMaterial;h!=="latitudinal"&&h!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const S=3,_=new Ri(this._lodPlanes[l],p),x=p.uniforms,y=this._sizeLods[r]-1,A=isFinite(c)?Math.PI/(2*y):2*Math.PI/(2*dr-1),R=c/A,M=isFinite(c)?1+Math.floor(S*R):dr;M>dr&&console.warn(`sigmaRadians, ${c}, is too large and will clip, as it requested ${M} samples when the maximum is set to ${dr}`);const v=[];let I=0;for(let P=0;P<dr;++P){const j=P/R,w=Math.exp(-j*j/2);v.push(w),P===0?I+=w:P<M&&(I+=2*w)}for(let P=0;P<v.length;P++)v[P]=v[P]/I;x.envMap.value=e.texture,x.samples.value=M,x.weights.value=v,x.latitudinal.value=h==="latitudinal",d&&(x.poleAxis.value=d);const{_lodMax:z}=this;x.dTheta.value=A,x.mipInt.value=z-r;const D=this._sizeLods[l],X=3*D*(l>z-gs?l-z+gs:0),H=4*(this._cubeSize-D);hu(i,X,H,3*D,2*D),m.setRenderTarget(i),m.render(_,ch)}}function lT(o){const e=[],i=[],r=[];let l=o;const c=o-gs+1+U_.length;for(let h=0;h<c;h++){const d=Math.pow(2,l);i.push(d);let m=1/d;h>o-gs?m=U_[h-o+gs-1]:h===0&&(m=0),r.push(m);const p=1/(d-2),S=-p,_=1+p,x=[S,S,_,S,_,_,S,S,_,_,S,_],y=6,A=6,R=3,M=2,v=1,I=new Float32Array(R*A*y),z=new Float32Array(M*A*y),D=new Float32Array(v*A*y);for(let H=0;H<y;H++){const P=H%3*2/3-1,j=H>2?0:-1,w=[P,j,0,P+2/3,j,0,P+2/3,j+1,0,P,j,0,P+2/3,j+1,0,P,j+1,0];I.set(w,R*A*H),z.set(x,M*A*H);const C=[H,H,H,H,H,H];D.set(C,v*A*H)}const X=new Sr;X.setAttribute("position",new Ci(I,R)),X.setAttribute("uv",new Ci(z,M)),X.setAttribute("faceIndex",new Ci(D,v)),e.push(X),l>gs&&l--}return{lodPlanes:e,sizeLods:i,sigmas:r}}function z_(o,e,i){const r=new vr(o,e,i);return r.texture.mapping=Eu,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function hu(o,e,i,r,l){o.viewport.set(e,i,r,l),o.scissor.set(e,i,r,l)}function uT(o,e,i){const r=new Float32Array(dr),l=new st(0,1,0);return new aa({name:"SphericalGaussianBlur",defines:{n:dr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:md(),fragmentShader:`

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
		`,blending:Pa,depthTest:!1,depthWrite:!1})}function P_(){return new aa({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:md(),fragmentShader:`

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
		`,blending:Pa,depthTest:!1,depthWrite:!1})}function B_(){return new aa({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:md(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Pa,depthTest:!1,depthWrite:!1})}function md(){return`

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
	`}function cT(o){let e=new WeakMap,i=null;function r(d){if(d&&d.isTexture){const m=d.mapping,p=m===bh||m===Ah,S=m===xs||m===Ms;if(p||S){let _=e.get(d);const x=_!==void 0?_.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==x)return i===null&&(i=new O_(o)),_=p?i.fromEquirectangular(d,_):i.fromCubemap(d,_),_.texture.pmremVersion=d.pmremVersion,e.set(d,_),_.texture;if(_!==void 0)return _.texture;{const y=d.image;return p&&y&&y.height>0||S&&y&&l(y)?(i===null&&(i=new O_(o)),_=p?i.fromEquirectangular(d):i.fromCubemap(d),_.texture.pmremVersion=d.pmremVersion,e.set(d,_),d.addEventListener("dispose",c),_.texture):null}}}return d}function l(d){let m=0;const p=6;for(let S=0;S<p;S++)d[S]!==void 0&&m++;return m===p}function c(d){const m=d.target;m.removeEventListener("dispose",c);const p=e.get(m);p!==void 0&&(e.delete(m),p.dispose())}function h(){e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:h}}function fT(o){const e={};function i(r){if(e[r]!==void 0)return e[r];let l;switch(r){case"WEBGL_depth_texture":l=o.getExtension("WEBGL_depth_texture")||o.getExtension("MOZ_WEBGL_depth_texture")||o.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":l=o.getExtension("EXT_texture_filter_anisotropic")||o.getExtension("MOZ_EXT_texture_filter_anisotropic")||o.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":l=o.getExtension("WEBGL_compressed_texture_s3tc")||o.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":l=o.getExtension("WEBGL_compressed_texture_pvrtc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:l=o.getExtension(r)}return e[r]=l,l}return{has:function(r){return i(r)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(r){const l=i(r);return l===null&&wo("THREE.WebGLRenderer: "+r+" extension not supported."),l}}}function hT(o,e,i,r){const l={},c=new WeakMap;function h(_){const x=_.target;x.index!==null&&e.remove(x.index);for(const A in x.attributes)e.remove(x.attributes[A]);x.removeEventListener("dispose",h),delete l[x.id];const y=c.get(x);y&&(e.remove(y),c.delete(x)),r.releaseStatesOfGeometry(x),x.isInstancedBufferGeometry===!0&&delete x._maxInstanceCount,i.memory.geometries--}function d(_,x){return l[x.id]===!0||(x.addEventListener("dispose",h),l[x.id]=!0,i.memory.geometries++),x}function m(_){const x=_.attributes;for(const y in x)e.update(x[y],o.ARRAY_BUFFER)}function p(_){const x=[],y=_.index,A=_.attributes.position;let R=0;if(y!==null){const I=y.array;R=y.version;for(let z=0,D=I.length;z<D;z+=3){const X=I[z+0],H=I[z+1],P=I[z+2];x.push(X,H,H,P,P,X)}}else if(A!==void 0){const I=A.array;R=A.version;for(let z=0,D=I.length/3-1;z<D;z+=3){const X=z+0,H=z+1,P=z+2;x.push(X,H,H,P,P,X)}}else return;const M=new(m0(x)?M0:x0)(x,1);M.version=R;const v=c.get(_);v&&e.remove(v),c.set(_,M)}function S(_){const x=c.get(_);if(x){const y=_.index;y!==null&&x.version<y.version&&p(_)}else p(_);return c.get(_)}return{get:d,update:m,getWireframeAttribute:S}}function dT(o,e,i){let r;function l(x){r=x}let c,h;function d(x){c=x.type,h=x.bytesPerElement}function m(x,y){o.drawElements(r,y,c,x*h),i.update(y,r,1)}function p(x,y,A){A!==0&&(o.drawElementsInstanced(r,y,c,x*h,A),i.update(y,r,A))}function S(x,y,A){if(A===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,y,0,c,x,0,A);let M=0;for(let v=0;v<A;v++)M+=y[v];i.update(M,r,1)}function _(x,y,A,R){if(A===0)return;const M=e.get("WEBGL_multi_draw");if(M===null)for(let v=0;v<x.length;v++)p(x[v]/h,y[v],R[v]);else{M.multiDrawElementsInstancedWEBGL(r,y,0,c,x,0,R,0,A);let v=0;for(let I=0;I<A;I++)v+=y[I]*R[I];i.update(v,r,1)}}this.setMode=l,this.setIndex=d,this.render=m,this.renderInstances=p,this.renderMultiDraw=S,this.renderMultiDrawInstances=_}function pT(o){const e={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function r(c,h,d){switch(i.calls++,h){case o.TRIANGLES:i.triangles+=d*(c/3);break;case o.LINES:i.lines+=d*(c/2);break;case o.LINE_STRIP:i.lines+=d*(c-1);break;case o.LINE_LOOP:i.lines+=d*c;break;case o.POINTS:i.points+=d*c;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",h);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:e,render:i,programs:null,autoReset:!0,reset:l,update:r}}function mT(o,e,i){const r=new WeakMap,l=new $e;function c(h,d,m){const p=h.morphTargetInfluences,S=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,_=S!==void 0?S.length:0;let x=r.get(d);if(x===void 0||x.count!==_){let C=function(){j.dispose(),r.delete(d),d.removeEventListener("dispose",C)};var y=C;x!==void 0&&x.texture.dispose();const A=d.morphAttributes.position!==void 0,R=d.morphAttributes.normal!==void 0,M=d.morphAttributes.color!==void 0,v=d.morphAttributes.position||[],I=d.morphAttributes.normal||[],z=d.morphAttributes.color||[];let D=0;A===!0&&(D=1),R===!0&&(D=2),M===!0&&(D=3);let X=d.attributes.position.count*D,H=1;X>e.maxTextureSize&&(H=Math.ceil(X/e.maxTextureSize),X=e.maxTextureSize);const P=new Float32Array(X*H*4*_),j=new g0(P,X,H,_);j.type=ta,j.needsUpdate=!0;const w=D*4;for(let G=0;G<_;G++){const nt=v[G],ut=I[G],gt=z[G],ft=X*H*4*G;for(let N=0;N<nt.count;N++){const Z=N*w;A===!0&&(l.fromBufferAttribute(nt,N),P[ft+Z+0]=l.x,P[ft+Z+1]=l.y,P[ft+Z+2]=l.z,P[ft+Z+3]=0),R===!0&&(l.fromBufferAttribute(ut,N),P[ft+Z+4]=l.x,P[ft+Z+5]=l.y,P[ft+Z+6]=l.z,P[ft+Z+7]=0),M===!0&&(l.fromBufferAttribute(gt,N),P[ft+Z+8]=l.x,P[ft+Z+9]=l.y,P[ft+Z+10]=l.z,P[ft+Z+11]=gt.itemSize===4?l.w:1)}}x={count:_,texture:j,size:new Ie(X,H)},r.set(d,x),d.addEventListener("dispose",C)}if(h.isInstancedMesh===!0&&h.morphTexture!==null)m.getUniforms().setValue(o,"morphTexture",h.morphTexture,i);else{let A=0;for(let M=0;M<p.length;M++)A+=p[M];const R=d.morphTargetsRelative?1:1-A;m.getUniforms().setValue(o,"morphTargetBaseInfluence",R),m.getUniforms().setValue(o,"morphTargetInfluences",p)}m.getUniforms().setValue(o,"morphTargetsTexture",x.texture,i),m.getUniforms().setValue(o,"morphTargetsTextureSize",x.size)}return{update:c}}function gT(o,e,i,r){let l=new WeakMap;function c(m){const p=r.render.frame,S=m.geometry,_=e.get(m,S);if(l.get(_)!==p&&(e.update(_),l.set(_,p)),m.isInstancedMesh&&(m.hasEventListener("dispose",d)===!1&&m.addEventListener("dispose",d),l.get(m)!==p&&(i.update(m.instanceMatrix,o.ARRAY_BUFFER),m.instanceColor!==null&&i.update(m.instanceColor,o.ARRAY_BUFFER),l.set(m,p))),m.isSkinnedMesh){const x=m.skeleton;l.get(x)!==p&&(x.update(),l.set(x,p))}return _}function h(){l=new WeakMap}function d(m){const p=m.target;p.removeEventListener("dispose",d),i.remove(p.instanceMatrix),p.instanceColor!==null&&i.remove(p.instanceColor)}return{update:c,dispose:h}}const w0=new Dn,I_=new A0(1,1),D0=new g0,U0=new kx,L0=new T0,F_=[],H_=[],G_=new Float32Array(16),V_=new Float32Array(9),X_=new Float32Array(4);function bs(o,e,i){const r=o[0];if(r<=0||r>0)return o;const l=e*i;let c=F_[l];if(c===void 0&&(c=new Float32Array(l),F_[l]=c),e!==0){r.toArray(c,0);for(let h=1,d=0;h!==e;++h)d+=i,o[h].toArray(c,d)}return c}function fn(o,e){if(o.length!==e.length)return!1;for(let i=0,r=o.length;i<r;i++)if(o[i]!==e[i])return!1;return!0}function hn(o,e){for(let i=0,r=e.length;i<r;i++)o[i]=e[i]}function bu(o,e){let i=H_[e];i===void 0&&(i=new Int32Array(e),H_[e]=i);for(let r=0;r!==e;++r)i[r]=o.allocateTextureUnit();return i}function _T(o,e){const i=this.cache;i[0]!==e&&(o.uniform1f(this.addr,e),i[0]=e)}function vT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2f(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(fn(i,e))return;o.uniform2fv(this.addr,e),hn(i,e)}}function ST(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3f(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else if(e.r!==void 0)(i[0]!==e.r||i[1]!==e.g||i[2]!==e.b)&&(o.uniform3f(this.addr,e.r,e.g,e.b),i[0]=e.r,i[1]=e.g,i[2]=e.b);else{if(fn(i,e))return;o.uniform3fv(this.addr,e),hn(i,e)}}function xT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4f(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(fn(i,e))return;o.uniform4fv(this.addr,e),hn(i,e)}}function MT(o,e){const i=this.cache,r=e.elements;if(r===void 0){if(fn(i,e))return;o.uniformMatrix2fv(this.addr,!1,e),hn(i,e)}else{if(fn(i,r))return;X_.set(r),o.uniformMatrix2fv(this.addr,!1,X_),hn(i,r)}}function yT(o,e){const i=this.cache,r=e.elements;if(r===void 0){if(fn(i,e))return;o.uniformMatrix3fv(this.addr,!1,e),hn(i,e)}else{if(fn(i,r))return;V_.set(r),o.uniformMatrix3fv(this.addr,!1,V_),hn(i,r)}}function ET(o,e){const i=this.cache,r=e.elements;if(r===void 0){if(fn(i,e))return;o.uniformMatrix4fv(this.addr,!1,e),hn(i,e)}else{if(fn(i,r))return;G_.set(r),o.uniformMatrix4fv(this.addr,!1,G_),hn(i,r)}}function TT(o,e){const i=this.cache;i[0]!==e&&(o.uniform1i(this.addr,e),i[0]=e)}function bT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2i(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(fn(i,e))return;o.uniform2iv(this.addr,e),hn(i,e)}}function AT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3i(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(fn(i,e))return;o.uniform3iv(this.addr,e),hn(i,e)}}function RT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4i(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(fn(i,e))return;o.uniform4iv(this.addr,e),hn(i,e)}}function CT(o,e){const i=this.cache;i[0]!==e&&(o.uniform1ui(this.addr,e),i[0]=e)}function wT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2ui(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(fn(i,e))return;o.uniform2uiv(this.addr,e),hn(i,e)}}function DT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3ui(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(fn(i,e))return;o.uniform3uiv(this.addr,e),hn(i,e)}}function UT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4ui(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(fn(i,e))return;o.uniform4uiv(this.addr,e),hn(i,e)}}function LT(o,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l);let c;this.type===o.SAMPLER_2D_SHADOW?(I_.compareFunction=p0,c=I_):c=w0,i.setTexture2D(e||c,l)}function NT(o,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTexture3D(e||U0,l)}function OT(o,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTextureCube(e||L0,l)}function zT(o,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTexture2DArray(e||D0,l)}function PT(o){switch(o){case 5126:return _T;case 35664:return vT;case 35665:return ST;case 35666:return xT;case 35674:return MT;case 35675:return yT;case 35676:return ET;case 5124:case 35670:return TT;case 35667:case 35671:return bT;case 35668:case 35672:return AT;case 35669:case 35673:return RT;case 5125:return CT;case 36294:return wT;case 36295:return DT;case 36296:return UT;case 35678:case 36198:case 36298:case 36306:case 35682:return LT;case 35679:case 36299:case 36307:return NT;case 35680:case 36300:case 36308:case 36293:return OT;case 36289:case 36303:case 36311:case 36292:return zT}}function BT(o,e){o.uniform1fv(this.addr,e)}function IT(o,e){const i=bs(e,this.size,2);o.uniform2fv(this.addr,i)}function FT(o,e){const i=bs(e,this.size,3);o.uniform3fv(this.addr,i)}function HT(o,e){const i=bs(e,this.size,4);o.uniform4fv(this.addr,i)}function GT(o,e){const i=bs(e,this.size,4);o.uniformMatrix2fv(this.addr,!1,i)}function VT(o,e){const i=bs(e,this.size,9);o.uniformMatrix3fv(this.addr,!1,i)}function XT(o,e){const i=bs(e,this.size,16);o.uniformMatrix4fv(this.addr,!1,i)}function kT(o,e){o.uniform1iv(this.addr,e)}function WT(o,e){o.uniform2iv(this.addr,e)}function qT(o,e){o.uniform3iv(this.addr,e)}function YT(o,e){o.uniform4iv(this.addr,e)}function ZT(o,e){o.uniform1uiv(this.addr,e)}function jT(o,e){o.uniform2uiv(this.addr,e)}function KT(o,e){o.uniform3uiv(this.addr,e)}function QT(o,e){o.uniform4uiv(this.addr,e)}function JT(o,e,i){const r=this.cache,l=e.length,c=bu(i,l);fn(r,c)||(o.uniform1iv(this.addr,c),hn(r,c));for(let h=0;h!==l;++h)i.setTexture2D(e[h]||w0,c[h])}function $T(o,e,i){const r=this.cache,l=e.length,c=bu(i,l);fn(r,c)||(o.uniform1iv(this.addr,c),hn(r,c));for(let h=0;h!==l;++h)i.setTexture3D(e[h]||U0,c[h])}function t1(o,e,i){const r=this.cache,l=e.length,c=bu(i,l);fn(r,c)||(o.uniform1iv(this.addr,c),hn(r,c));for(let h=0;h!==l;++h)i.setTextureCube(e[h]||L0,c[h])}function e1(o,e,i){const r=this.cache,l=e.length,c=bu(i,l);fn(r,c)||(o.uniform1iv(this.addr,c),hn(r,c));for(let h=0;h!==l;++h)i.setTexture2DArray(e[h]||D0,c[h])}function n1(o){switch(o){case 5126:return BT;case 35664:return IT;case 35665:return FT;case 35666:return HT;case 35674:return GT;case 35675:return VT;case 35676:return XT;case 5124:case 35670:return kT;case 35667:case 35671:return WT;case 35668:case 35672:return qT;case 35669:case 35673:return YT;case 5125:return ZT;case 36294:return jT;case 36295:return KT;case 36296:return QT;case 35678:case 36198:case 36298:case 36306:case 35682:return JT;case 35679:case 36299:case 36307:return $T;case 35680:case 36300:case 36308:case 36293:return t1;case 36289:case 36303:case 36311:case 36292:return e1}}class i1{constructor(e,i,r){this.id=e,this.addr=r,this.cache=[],this.type=i.type,this.setValue=PT(i.type)}}class a1{constructor(e,i,r){this.id=e,this.addr=r,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=n1(i.type)}}class r1{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,i,r){const l=this.seq;for(let c=0,h=l.length;c!==h;++c){const d=l[c];d.setValue(e,i[d.id],r)}}}const mh=/(\w+)(\])?(\[|\.)?/g;function k_(o,e){o.seq.push(e),o.map[e.id]=e}function s1(o,e,i){const r=o.name,l=r.length;for(mh.lastIndex=0;;){const c=mh.exec(r),h=mh.lastIndex;let d=c[1];const m=c[2]==="]",p=c[3];if(m&&(d=d|0),p===void 0||p==="["&&h+2===l){k_(i,p===void 0?new i1(d,o,e):new a1(d,o,e));break}else{let _=i.map[d];_===void 0&&(_=new r1(d),k_(i,_)),i=_}}}class Su{constructor(e,i){this.seq=[],this.map={};const r=e.getProgramParameter(i,e.ACTIVE_UNIFORMS);for(let l=0;l<r;++l){const c=e.getActiveUniform(i,l),h=e.getUniformLocation(i,c.name);s1(c,h,this)}}setValue(e,i,r,l){const c=this.map[i];c!==void 0&&c.setValue(e,r,l)}setOptional(e,i,r){const l=i[r];l!==void 0&&this.setValue(e,r,l)}static upload(e,i,r,l){for(let c=0,h=i.length;c!==h;++c){const d=i[c],m=r[d.id];m.needsUpdate!==!1&&d.setValue(e,m.value,l)}}static seqWithValue(e,i){const r=[];for(let l=0,c=e.length;l!==c;++l){const h=e[l];h.id in i&&r.push(h)}return r}}function W_(o,e,i){const r=o.createShader(e);return o.shaderSource(r,i),o.compileShader(r),r}const o1=37297;let l1=0;function u1(o,e){const i=o.split(`
`),r=[],l=Math.max(e-6,0),c=Math.min(e+6,i.length);for(let h=l;h<c;h++){const d=h+1;r.push(`${d===e?">":" "} ${d}: ${i[h]}`)}return r.join(`
`)}const q_=new ue;function c1(o){Ae._getMatrix(q_,Ae.workingColorSpace,o);const e=`mat3( ${q_.elements.map(i=>i.toFixed(4))} )`;switch(Ae.getTransfer(o)){case xu:return[e,"LinearTransferOETF"];case Pe:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",o),[e,"LinearTransferOETF"]}}function Y_(o,e,i){const r=o.getShaderParameter(e,o.COMPILE_STATUS),c=(o.getShaderInfoLog(e)||"").trim();if(r&&c==="")return"";const h=/ERROR: 0:(\d+)/.exec(c);if(h){const d=parseInt(h[1]);return i.toUpperCase()+`

`+c+`

`+u1(o.getShaderSource(e),d)}else return c}function f1(o,e){const i=c1(e);return[`vec4 ${o}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}function h1(o,e){let i;switch(e){case _x:i="Linear";break;case vx:i="Reinhard";break;case Sx:i="Cineon";break;case xx:i="ACESFilmic";break;case yx:i="AgX";break;case Ex:i="Neutral";break;case Mx:i="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),i="Linear"}return"vec3 "+o+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const du=new st;function d1(){Ae.getLuminanceCoefficients(du);const o=du.x.toFixed(4),e=du.y.toFixed(4),i=du.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${o}, ${e}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function p1(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",o.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(To).join(`
`)}function m1(o){const e=[];for(const i in o){const r=o[i];r!==!1&&e.push("#define "+i+" "+r)}return e.join(`
`)}function g1(o,e){const i={},r=o.getProgramParameter(e,o.ACTIVE_ATTRIBUTES);for(let l=0;l<r;l++){const c=o.getActiveAttrib(e,l),h=c.name;let d=1;c.type===o.FLOAT_MAT2&&(d=2),c.type===o.FLOAT_MAT3&&(d=3),c.type===o.FLOAT_MAT4&&(d=4),i[h]={type:c.type,location:o.getAttribLocation(e,h),locationSize:d}}return i}function To(o){return o!==""}function Z_(o,e){const i=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function j_(o,e){return o.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const _1=/^[ \t]*#include +<([\w\d./]+)>/gm;function ad(o){return o.replace(_1,S1)}const v1=new Map;function S1(o,e){let i=ce[e];if(i===void 0){const r=v1.get(e);if(r!==void 0)i=ce[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return ad(i)}const x1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function K_(o){return o.replace(x1,M1)}function M1(o,e,i,r){let l="";for(let c=parseInt(e);c<parseInt(i);c++)l+=r.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return l}function Q_(o){let e=`precision ${o.precision} float;
	precision ${o.precision} int;
	precision ${o.precision} sampler2D;
	precision ${o.precision} samplerCube;
	precision ${o.precision} sampler3D;
	precision ${o.precision} sampler2DArray;
	precision ${o.precision} sampler2DShadow;
	precision ${o.precision} samplerCubeShadow;
	precision ${o.precision} sampler2DArrayShadow;
	precision ${o.precision} isampler2D;
	precision ${o.precision} isampler3D;
	precision ${o.precision} isamplerCube;
	precision ${o.precision} isampler2DArray;
	precision ${o.precision} usampler2D;
	precision ${o.precision} usampler3D;
	precision ${o.precision} usamplerCube;
	precision ${o.precision} usampler2DArray;
	`;return o.precision==="highp"?e+=`
#define HIGH_PRECISION`:o.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:o.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function y1(o){let e="SHADOWMAP_TYPE_BASIC";return o.shadowMapType===i0?e="SHADOWMAP_TYPE_PCF":o.shadowMapType===KS?e="SHADOWMAP_TYPE_PCF_SOFT":o.shadowMapType===Ji&&(e="SHADOWMAP_TYPE_VSM"),e}function E1(o){let e="ENVMAP_TYPE_CUBE";if(o.envMap)switch(o.envMapMode){case xs:case Ms:e="ENVMAP_TYPE_CUBE";break;case Eu:e="ENVMAP_TYPE_CUBE_UV";break}return e}function T1(o){let e="ENVMAP_MODE_REFLECTION";if(o.envMap)switch(o.envMapMode){case Ms:e="ENVMAP_MODE_REFRACTION";break}return e}function b1(o){let e="ENVMAP_BLENDING_NONE";if(o.envMap)switch(o.combine){case a0:e="ENVMAP_BLENDING_MULTIPLY";break;case mx:e="ENVMAP_BLENDING_MIX";break;case gx:e="ENVMAP_BLENDING_ADD";break}return e}function A1(o){const e=o.envMapCubeUVHeight;if(e===null)return null;const i=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:r,maxMip:i}}function R1(o,e,i,r){const l=o.getContext(),c=i.defines;let h=i.vertexShader,d=i.fragmentShader;const m=y1(i),p=E1(i),S=T1(i),_=b1(i),x=A1(i),y=p1(i),A=m1(c),R=l.createProgram();let M,v,I=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(M=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,A].filter(To).join(`
`),M.length>0&&(M+=`
`),v=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,A].filter(To).join(`
`),v.length>0&&(v+=`
`)):(M=[Q_(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,A,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+S:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(To).join(`
`),v=[Q_(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,A,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+p:"",i.envMap?"#define "+S:"",i.envMap?"#define "+_:"",x?"#define CUBEUV_TEXEL_WIDTH "+x.texelWidth:"",x?"#define CUBEUV_TEXEL_HEIGHT "+x.texelHeight:"",x?"#define CUBEUV_MAX_MIP "+x.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor||i.batchingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==Ba?"#define TONE_MAPPING":"",i.toneMapping!==Ba?ce.tonemapping_pars_fragment:"",i.toneMapping!==Ba?h1("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",ce.colorspace_pars_fragment,f1("linearToOutputTexel",i.outputColorSpace),d1(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(To).join(`
`)),h=ad(h),h=Z_(h,i),h=j_(h,i),d=ad(d),d=Z_(d,i),d=j_(d,i),h=K_(h),d=K_(d),i.isRawShaderMaterial!==!0&&(I=`#version 300 es
`,M=[y,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+M,v=["#define varying in",i.glslVersion===h_?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===h_?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);const z=I+M+h,D=I+v+d,X=W_(l,l.VERTEX_SHADER,z),H=W_(l,l.FRAGMENT_SHADER,D);l.attachShader(R,X),l.attachShader(R,H),i.index0AttributeName!==void 0?l.bindAttribLocation(R,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(R,0,"position"),l.linkProgram(R);function P(G){if(o.debug.checkShaderErrors){const nt=l.getProgramInfoLog(R)||"",ut=l.getShaderInfoLog(X)||"",gt=l.getShaderInfoLog(H)||"",ft=nt.trim(),N=ut.trim(),Z=gt.trim();let Y=!0,vt=!0;if(l.getProgramParameter(R,l.LINK_STATUS)===!1)if(Y=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(l,R,X,H);else{const yt=Y_(l,X,"vertex"),L=Y_(l,H,"fragment");console.error("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(R,l.VALIDATE_STATUS)+`

Material Name: `+G.name+`
Material Type: `+G.type+`

Program Info Log: `+ft+`
`+yt+`
`+L)}else ft!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ft):(N===""||Z==="")&&(vt=!1);vt&&(G.diagnostics={runnable:Y,programLog:ft,vertexShader:{log:N,prefix:M},fragmentShader:{log:Z,prefix:v}})}l.deleteShader(X),l.deleteShader(H),j=new Su(l,R),w=g1(l,R)}let j;this.getUniforms=function(){return j===void 0&&P(this),j};let w;this.getAttributes=function(){return w===void 0&&P(this),w};let C=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=l.getProgramParameter(R,o1)),C},this.destroy=function(){r.releaseStatesOfProgram(this),l.deleteProgram(R),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=l1++,this.cacheKey=e,this.usedTimes=1,this.program=R,this.vertexShader=X,this.fragmentShader=H,this}let C1=0;class w1{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const i=e.vertexShader,r=e.fragmentShader,l=this._getShaderStage(i),c=this._getShaderStage(r),h=this._getShaderCacheForMaterial(e);return h.has(l)===!1&&(h.add(l),l.usedTimes++),h.has(c)===!1&&(h.add(c),c.usedTimes++),this}remove(e){const i=this.materialCache.get(e);for(const r of i)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const i=this.materialCache;let r=i.get(e);return r===void 0&&(r=new Set,i.set(e,r)),r}_getShaderStage(e){const i=this.shaderCache;let r=i.get(e);return r===void 0&&(r=new D1(e),i.set(e,r)),r}}class D1{constructor(e){this.id=C1++,this.code=e,this.usedTimes=0}}function U1(o,e,i,r,l,c,h){const d=new _0,m=new w1,p=new Set,S=[],_=l.logarithmicDepthBuffer,x=l.vertexTextures;let y=l.precision;const A={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function R(w){return p.add(w),w===0?"uv":`uv${w}`}function M(w,C,G,nt,ut){const gt=nt.fog,ft=ut.geometry,N=w.isMeshStandardMaterial?nt.environment:null,Z=(w.isMeshStandardMaterial?i:e).get(w.envMap||N),Y=Z&&Z.mapping===Eu?Z.image.height:null,vt=A[w.type];w.precision!==null&&(y=l.getMaxPrecision(w.precision),y!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",y,"instead."));const yt=ft.morphAttributes.position||ft.morphAttributes.normal||ft.morphAttributes.color,L=yt!==void 0?yt.length:0;let tt=0;ft.morphAttributes.position!==void 0&&(tt=1),ft.morphAttributes.normal!==void 0&&(tt=2),ft.morphAttributes.color!==void 0&&(tt=3);let xt,bt,Nt,et;if(vt){const Me=Ti[vt];xt=Me.vertexShader,bt=Me.fragmentShader}else xt=w.vertexShader,bt=w.fragmentShader,m.update(w),Nt=m.getVertexShaderID(w),et=m.getFragmentShaderID(w);const ot=o.getRenderTarget(),wt=o.state.buffers.depth.getReversed(),Bt=ut.isInstancedMesh===!0,Xt=ut.isBatchedMesh===!0,fe=!!w.map,tn=!!w.matcap,B=!!Z,Ee=!!w.aoMap,ne=!!w.lightMap,$t=!!w.bumpMap,kt=!!w.normalMap,Fe=!!w.displacementMap,Vt=!!w.emissiveMap,ae=!!w.metalnessMap,Ye=!!w.roughnessMap,qe=w.anisotropy>0,U=w.clearcoat>0,E=w.dispersion>0,J=w.iridescence>0,ht=w.sheen>0,St=w.transmission>0,lt=qe&&!!w.anisotropyMap,Zt=U&&!!w.clearcoatMap,At=U&&!!w.clearcoatNormalMap,qt=U&&!!w.clearcoatRoughnessMap,Yt=J&&!!w.iridescenceMap,Et=J&&!!w.iridescenceThicknessMap,Rt=ht&&!!w.sheenColorMap,jt=ht&&!!w.sheenRoughnessMap,zt=!!w.specularMap,Dt=!!w.specularColorMap,se=!!w.specularIntensityMap,V=St&&!!w.transmissionMap,Tt=St&&!!w.thicknessMap,Ct=!!w.gradientMap,Pt=!!w.alphaMap,Mt=w.alphaTest>0,mt=!!w.alphaHash,It=!!w.extensions;let ie=Ba;w.toneMapped&&(ot===null||ot.isXRRenderTarget===!0)&&(ie=o.toneMapping);const De={shaderID:vt,shaderType:w.type,shaderName:w.name,vertexShader:xt,fragmentShader:bt,defines:w.defines,customVertexShaderID:Nt,customFragmentShaderID:et,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:y,batching:Xt,batchingColor:Xt&&ut._colorsTexture!==null,instancing:Bt,instancingColor:Bt&&ut.instanceColor!==null,instancingMorph:Bt&&ut.morphTexture!==null,supportsVertexTextures:x,outputColorSpace:ot===null?o.outputColorSpace:ot.isXRRenderTarget===!0?ot.texture.colorSpace:ys,alphaToCoverage:!!w.alphaToCoverage,map:fe,matcap:tn,envMap:B,envMapMode:B&&Z.mapping,envMapCubeUVHeight:Y,aoMap:Ee,lightMap:ne,bumpMap:$t,normalMap:kt,displacementMap:x&&Fe,emissiveMap:Vt,normalMapObjectSpace:kt&&w.normalMapType===Cx,normalMapTangentSpace:kt&&w.normalMapType===Rx,metalnessMap:ae,roughnessMap:Ye,anisotropy:qe,anisotropyMap:lt,clearcoat:U,clearcoatMap:Zt,clearcoatNormalMap:At,clearcoatRoughnessMap:qt,dispersion:E,iridescence:J,iridescenceMap:Yt,iridescenceThicknessMap:Et,sheen:ht,sheenColorMap:Rt,sheenRoughnessMap:jt,specularMap:zt,specularColorMap:Dt,specularIntensityMap:se,transmission:St,transmissionMap:V,thicknessMap:Tt,gradientMap:Ct,opaque:w.transparent===!1&&w.blending===_s&&w.alphaToCoverage===!1,alphaMap:Pt,alphaTest:Mt,alphaHash:mt,combine:w.combine,mapUv:fe&&R(w.map.channel),aoMapUv:Ee&&R(w.aoMap.channel),lightMapUv:ne&&R(w.lightMap.channel),bumpMapUv:$t&&R(w.bumpMap.channel),normalMapUv:kt&&R(w.normalMap.channel),displacementMapUv:Fe&&R(w.displacementMap.channel),emissiveMapUv:Vt&&R(w.emissiveMap.channel),metalnessMapUv:ae&&R(w.metalnessMap.channel),roughnessMapUv:Ye&&R(w.roughnessMap.channel),anisotropyMapUv:lt&&R(w.anisotropyMap.channel),clearcoatMapUv:Zt&&R(w.clearcoatMap.channel),clearcoatNormalMapUv:At&&R(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:qt&&R(w.clearcoatRoughnessMap.channel),iridescenceMapUv:Yt&&R(w.iridescenceMap.channel),iridescenceThicknessMapUv:Et&&R(w.iridescenceThicknessMap.channel),sheenColorMapUv:Rt&&R(w.sheenColorMap.channel),sheenRoughnessMapUv:jt&&R(w.sheenRoughnessMap.channel),specularMapUv:zt&&R(w.specularMap.channel),specularColorMapUv:Dt&&R(w.specularColorMap.channel),specularIntensityMapUv:se&&R(w.specularIntensityMap.channel),transmissionMapUv:V&&R(w.transmissionMap.channel),thicknessMapUv:Tt&&R(w.thicknessMap.channel),alphaMapUv:Pt&&R(w.alphaMap.channel),vertexTangents:!!ft.attributes.tangent&&(kt||qe),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!ft.attributes.color&&ft.attributes.color.itemSize===4,pointsUvs:ut.isPoints===!0&&!!ft.attributes.uv&&(fe||Pt),fog:!!gt,useFog:w.fog===!0,fogExp2:!!gt&&gt.isFogExp2,flatShading:w.flatShading===!0&&w.wireframe===!1,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:_,reversedDepthBuffer:wt,skinning:ut.isSkinnedMesh===!0,morphTargets:ft.morphAttributes.position!==void 0,morphNormals:ft.morphAttributes.normal!==void 0,morphColors:ft.morphAttributes.color!==void 0,morphTargetsCount:L,morphTextureStride:tt,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numLightProbes:C.numLightProbes,numClippingPlanes:h.numPlanes,numClipIntersection:h.numIntersection,dithering:w.dithering,shadowMapEnabled:o.shadowMap.enabled&&G.length>0,shadowMapType:o.shadowMap.type,toneMapping:ie,decodeVideoTexture:fe&&w.map.isVideoTexture===!0&&Ae.getTransfer(w.map.colorSpace)===Pe,decodeVideoTextureEmissive:Vt&&w.emissiveMap.isVideoTexture===!0&&Ae.getTransfer(w.emissiveMap.colorSpace)===Pe,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===$i,flipSided:w.side===Fn,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:It&&w.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(It&&w.extensions.multiDraw===!0||Xt)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return De.vertexUv1s=p.has(1),De.vertexUv2s=p.has(2),De.vertexUv3s=p.has(3),p.clear(),De}function v(w){const C=[];if(w.shaderID?C.push(w.shaderID):(C.push(w.customVertexShaderID),C.push(w.customFragmentShaderID)),w.defines!==void 0)for(const G in w.defines)C.push(G),C.push(w.defines[G]);return w.isRawShaderMaterial===!1&&(I(C,w),z(C,w),C.push(o.outputColorSpace)),C.push(w.customProgramCacheKey),C.join()}function I(w,C){w.push(C.precision),w.push(C.outputColorSpace),w.push(C.envMapMode),w.push(C.envMapCubeUVHeight),w.push(C.mapUv),w.push(C.alphaMapUv),w.push(C.lightMapUv),w.push(C.aoMapUv),w.push(C.bumpMapUv),w.push(C.normalMapUv),w.push(C.displacementMapUv),w.push(C.emissiveMapUv),w.push(C.metalnessMapUv),w.push(C.roughnessMapUv),w.push(C.anisotropyMapUv),w.push(C.clearcoatMapUv),w.push(C.clearcoatNormalMapUv),w.push(C.clearcoatRoughnessMapUv),w.push(C.iridescenceMapUv),w.push(C.iridescenceThicknessMapUv),w.push(C.sheenColorMapUv),w.push(C.sheenRoughnessMapUv),w.push(C.specularMapUv),w.push(C.specularColorMapUv),w.push(C.specularIntensityMapUv),w.push(C.transmissionMapUv),w.push(C.thicknessMapUv),w.push(C.combine),w.push(C.fogExp2),w.push(C.sizeAttenuation),w.push(C.morphTargetsCount),w.push(C.morphAttributeCount),w.push(C.numDirLights),w.push(C.numPointLights),w.push(C.numSpotLights),w.push(C.numSpotLightMaps),w.push(C.numHemiLights),w.push(C.numRectAreaLights),w.push(C.numDirLightShadows),w.push(C.numPointLightShadows),w.push(C.numSpotLightShadows),w.push(C.numSpotLightShadowsWithMaps),w.push(C.numLightProbes),w.push(C.shadowMapType),w.push(C.toneMapping),w.push(C.numClippingPlanes),w.push(C.numClipIntersection),w.push(C.depthPacking)}function z(w,C){d.disableAll(),C.supportsVertexTextures&&d.enable(0),C.instancing&&d.enable(1),C.instancingColor&&d.enable(2),C.instancingMorph&&d.enable(3),C.matcap&&d.enable(4),C.envMap&&d.enable(5),C.normalMapObjectSpace&&d.enable(6),C.normalMapTangentSpace&&d.enable(7),C.clearcoat&&d.enable(8),C.iridescence&&d.enable(9),C.alphaTest&&d.enable(10),C.vertexColors&&d.enable(11),C.vertexAlphas&&d.enable(12),C.vertexUv1s&&d.enable(13),C.vertexUv2s&&d.enable(14),C.vertexUv3s&&d.enable(15),C.vertexTangents&&d.enable(16),C.anisotropy&&d.enable(17),C.alphaHash&&d.enable(18),C.batching&&d.enable(19),C.dispersion&&d.enable(20),C.batchingColor&&d.enable(21),C.gradientMap&&d.enable(22),w.push(d.mask),d.disableAll(),C.fog&&d.enable(0),C.useFog&&d.enable(1),C.flatShading&&d.enable(2),C.logarithmicDepthBuffer&&d.enable(3),C.reversedDepthBuffer&&d.enable(4),C.skinning&&d.enable(5),C.morphTargets&&d.enable(6),C.morphNormals&&d.enable(7),C.morphColors&&d.enable(8),C.premultipliedAlpha&&d.enable(9),C.shadowMapEnabled&&d.enable(10),C.doubleSided&&d.enable(11),C.flipSided&&d.enable(12),C.useDepthPacking&&d.enable(13),C.dithering&&d.enable(14),C.transmission&&d.enable(15),C.sheen&&d.enable(16),C.opaque&&d.enable(17),C.pointsUvs&&d.enable(18),C.decodeVideoTexture&&d.enable(19),C.decodeVideoTextureEmissive&&d.enable(20),C.alphaToCoverage&&d.enable(21),w.push(d.mask)}function D(w){const C=A[w.type];let G;if(C){const nt=Ti[C];G=aM.clone(nt.uniforms)}else G=w.uniforms;return G}function X(w,C){let G;for(let nt=0,ut=S.length;nt<ut;nt++){const gt=S[nt];if(gt.cacheKey===C){G=gt,++G.usedTimes;break}}return G===void 0&&(G=new R1(o,C,w,c),S.push(G)),G}function H(w){if(--w.usedTimes===0){const C=S.indexOf(w);S[C]=S[S.length-1],S.pop(),w.destroy()}}function P(w){m.remove(w)}function j(){m.dispose()}return{getParameters:M,getProgramCacheKey:v,getUniforms:D,acquireProgram:X,releaseProgram:H,releaseShaderCache:P,programs:S,dispose:j}}function L1(){let o=new WeakMap;function e(h){return o.has(h)}function i(h){let d=o.get(h);return d===void 0&&(d={},o.set(h,d)),d}function r(h){o.delete(h)}function l(h,d,m){o.get(h)[d]=m}function c(){o=new WeakMap}return{has:e,get:i,remove:r,update:l,dispose:c}}function N1(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.material.id!==e.material.id?o.material.id-e.material.id:o.z!==e.z?o.z-e.z:o.id-e.id}function J_(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.z!==e.z?e.z-o.z:o.id-e.id}function $_(){const o=[];let e=0;const i=[],r=[],l=[];function c(){e=0,i.length=0,r.length=0,l.length=0}function h(_,x,y,A,R,M){let v=o[e];return v===void 0?(v={id:_.id,object:_,geometry:x,material:y,groupOrder:A,renderOrder:_.renderOrder,z:R,group:M},o[e]=v):(v.id=_.id,v.object=_,v.geometry=x,v.material=y,v.groupOrder=A,v.renderOrder=_.renderOrder,v.z=R,v.group=M),e++,v}function d(_,x,y,A,R,M){const v=h(_,x,y,A,R,M);y.transmission>0?r.push(v):y.transparent===!0?l.push(v):i.push(v)}function m(_,x,y,A,R,M){const v=h(_,x,y,A,R,M);y.transmission>0?r.unshift(v):y.transparent===!0?l.unshift(v):i.unshift(v)}function p(_,x){i.length>1&&i.sort(_||N1),r.length>1&&r.sort(x||J_),l.length>1&&l.sort(x||J_)}function S(){for(let _=e,x=o.length;_<x;_++){const y=o[_];if(y.id===null)break;y.id=null,y.object=null,y.geometry=null,y.material=null,y.group=null}}return{opaque:i,transmissive:r,transparent:l,init:c,push:d,unshift:m,finish:S,sort:p}}function O1(){let o=new WeakMap;function e(r,l){const c=o.get(r);let h;return c===void 0?(h=new $_,o.set(r,[h])):l>=c.length?(h=new $_,c.push(h)):h=c[l],h}function i(){o=new WeakMap}return{get:e,dispose:i}}function z1(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let i;switch(e.type){case"DirectionalLight":i={direction:new st,color:new Be};break;case"SpotLight":i={position:new st,direction:new st,color:new Be,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new st,color:new Be,distance:0,decay:0};break;case"HemisphereLight":i={direction:new st,skyColor:new Be,groundColor:new Be};break;case"RectAreaLight":i={color:new Be,position:new st,halfWidth:new st,halfHeight:new st};break}return o[e.id]=i,i}}}function P1(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let i;switch(e.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ie};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ie};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ie,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[e.id]=i,i}}}let B1=0;function I1(o,e){return(e.castShadow?2:0)-(o.castShadow?2:0)+(e.map?1:0)-(o.map?1:0)}function F1(o){const e=new z1,i=P1(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)r.probe.push(new st);const l=new st,c=new cn,h=new cn;function d(p){let S=0,_=0,x=0;for(let w=0;w<9;w++)r.probe[w].set(0,0,0);let y=0,A=0,R=0,M=0,v=0,I=0,z=0,D=0,X=0,H=0,P=0;p.sort(I1);for(let w=0,C=p.length;w<C;w++){const G=p[w],nt=G.color,ut=G.intensity,gt=G.distance,ft=G.shadow&&G.shadow.map?G.shadow.map.texture:null;if(G.isAmbientLight)S+=nt.r*ut,_+=nt.g*ut,x+=nt.b*ut;else if(G.isLightProbe){for(let N=0;N<9;N++)r.probe[N].addScaledVector(G.sh.coefficients[N],ut);P++}else if(G.isDirectionalLight){const N=e.get(G);if(N.color.copy(G.color).multiplyScalar(G.intensity),G.castShadow){const Z=G.shadow,Y=i.get(G);Y.shadowIntensity=Z.intensity,Y.shadowBias=Z.bias,Y.shadowNormalBias=Z.normalBias,Y.shadowRadius=Z.radius,Y.shadowMapSize=Z.mapSize,r.directionalShadow[y]=Y,r.directionalShadowMap[y]=ft,r.directionalShadowMatrix[y]=G.shadow.matrix,I++}r.directional[y]=N,y++}else if(G.isSpotLight){const N=e.get(G);N.position.setFromMatrixPosition(G.matrixWorld),N.color.copy(nt).multiplyScalar(ut),N.distance=gt,N.coneCos=Math.cos(G.angle),N.penumbraCos=Math.cos(G.angle*(1-G.penumbra)),N.decay=G.decay,r.spot[R]=N;const Z=G.shadow;if(G.map&&(r.spotLightMap[X]=G.map,X++,Z.updateMatrices(G),G.castShadow&&H++),r.spotLightMatrix[R]=Z.matrix,G.castShadow){const Y=i.get(G);Y.shadowIntensity=Z.intensity,Y.shadowBias=Z.bias,Y.shadowNormalBias=Z.normalBias,Y.shadowRadius=Z.radius,Y.shadowMapSize=Z.mapSize,r.spotShadow[R]=Y,r.spotShadowMap[R]=ft,D++}R++}else if(G.isRectAreaLight){const N=e.get(G);N.color.copy(nt).multiplyScalar(ut),N.halfWidth.set(G.width*.5,0,0),N.halfHeight.set(0,G.height*.5,0),r.rectArea[M]=N,M++}else if(G.isPointLight){const N=e.get(G);if(N.color.copy(G.color).multiplyScalar(G.intensity),N.distance=G.distance,N.decay=G.decay,G.castShadow){const Z=G.shadow,Y=i.get(G);Y.shadowIntensity=Z.intensity,Y.shadowBias=Z.bias,Y.shadowNormalBias=Z.normalBias,Y.shadowRadius=Z.radius,Y.shadowMapSize=Z.mapSize,Y.shadowCameraNear=Z.camera.near,Y.shadowCameraFar=Z.camera.far,r.pointShadow[A]=Y,r.pointShadowMap[A]=ft,r.pointShadowMatrix[A]=G.shadow.matrix,z++}r.point[A]=N,A++}else if(G.isHemisphereLight){const N=e.get(G);N.skyColor.copy(G.color).multiplyScalar(ut),N.groundColor.copy(G.groundColor).multiplyScalar(ut),r.hemi[v]=N,v++}}M>0&&(o.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Lt.LTC_FLOAT_1,r.rectAreaLTC2=Lt.LTC_FLOAT_2):(r.rectAreaLTC1=Lt.LTC_HALF_1,r.rectAreaLTC2=Lt.LTC_HALF_2)),r.ambient[0]=S,r.ambient[1]=_,r.ambient[2]=x;const j=r.hash;(j.directionalLength!==y||j.pointLength!==A||j.spotLength!==R||j.rectAreaLength!==M||j.hemiLength!==v||j.numDirectionalShadows!==I||j.numPointShadows!==z||j.numSpotShadows!==D||j.numSpotMaps!==X||j.numLightProbes!==P)&&(r.directional.length=y,r.spot.length=R,r.rectArea.length=M,r.point.length=A,r.hemi.length=v,r.directionalShadow.length=I,r.directionalShadowMap.length=I,r.pointShadow.length=z,r.pointShadowMap.length=z,r.spotShadow.length=D,r.spotShadowMap.length=D,r.directionalShadowMatrix.length=I,r.pointShadowMatrix.length=z,r.spotLightMatrix.length=D+X-H,r.spotLightMap.length=X,r.numSpotLightShadowsWithMaps=H,r.numLightProbes=P,j.directionalLength=y,j.pointLength=A,j.spotLength=R,j.rectAreaLength=M,j.hemiLength=v,j.numDirectionalShadows=I,j.numPointShadows=z,j.numSpotShadows=D,j.numSpotMaps=X,j.numLightProbes=P,r.version=B1++)}function m(p,S){let _=0,x=0,y=0,A=0,R=0;const M=S.matrixWorldInverse;for(let v=0,I=p.length;v<I;v++){const z=p[v];if(z.isDirectionalLight){const D=r.directional[_];D.direction.setFromMatrixPosition(z.matrixWorld),l.setFromMatrixPosition(z.target.matrixWorld),D.direction.sub(l),D.direction.transformDirection(M),_++}else if(z.isSpotLight){const D=r.spot[y];D.position.setFromMatrixPosition(z.matrixWorld),D.position.applyMatrix4(M),D.direction.setFromMatrixPosition(z.matrixWorld),l.setFromMatrixPosition(z.target.matrixWorld),D.direction.sub(l),D.direction.transformDirection(M),y++}else if(z.isRectAreaLight){const D=r.rectArea[A];D.position.setFromMatrixPosition(z.matrixWorld),D.position.applyMatrix4(M),h.identity(),c.copy(z.matrixWorld),c.premultiply(M),h.extractRotation(c),D.halfWidth.set(z.width*.5,0,0),D.halfHeight.set(0,z.height*.5,0),D.halfWidth.applyMatrix4(h),D.halfHeight.applyMatrix4(h),A++}else if(z.isPointLight){const D=r.point[x];D.position.setFromMatrixPosition(z.matrixWorld),D.position.applyMatrix4(M),x++}else if(z.isHemisphereLight){const D=r.hemi[R];D.direction.setFromMatrixPosition(z.matrixWorld),D.direction.transformDirection(M),R++}}}return{setup:d,setupView:m,state:r}}function t0(o){const e=new F1(o),i=[],r=[];function l(S){p.camera=S,i.length=0,r.length=0}function c(S){i.push(S)}function h(S){r.push(S)}function d(){e.setup(i)}function m(S){e.setupView(i,S)}const p={lightsArray:i,shadowsArray:r,camera:null,lights:e,transmissionRenderTarget:{}};return{init:l,state:p,setupLights:d,setupLightsView:m,pushLight:c,pushShadow:h}}function H1(o){let e=new WeakMap;function i(l,c=0){const h=e.get(l);let d;return h===void 0?(d=new t0(o),e.set(l,[d])):c>=h.length?(d=new t0(o),h.push(d)):d=h[c],d}function r(){e=new WeakMap}return{get:i,dispose:r}}const G1=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,V1=`uniform sampler2D shadow_pass;
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
}`;function X1(o,e,i){let r=new b0;const l=new Ie,c=new Ie,h=new $e,d=new mM({depthPacking:Ax}),m=new gM,p={},S=i.maxTextureSize,_={[Ia]:Fn,[Fn]:Ia,[$i]:$i},x=new aa({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ie},radius:{value:4}},vertexShader:G1,fragmentShader:V1}),y=x.clone();y.defines.HORIZONTAL_PASS=1;const A=new Sr;A.setAttribute("position",new Ci(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const R=new Ri(A,x),M=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=i0;let v=this.type;this.render=function(H,P,j){if(M.enabled===!1||M.autoUpdate===!1&&M.needsUpdate===!1||H.length===0)return;const w=o.getRenderTarget(),C=o.getActiveCubeFace(),G=o.getActiveMipmapLevel(),nt=o.state;nt.setBlending(Pa),nt.buffers.depth.getReversed()===!0?nt.buffers.color.setClear(0,0,0,0):nt.buffers.color.setClear(1,1,1,1),nt.buffers.depth.setTest(!0),nt.setScissorTest(!1);const ut=v!==Ji&&this.type===Ji,gt=v===Ji&&this.type!==Ji;for(let ft=0,N=H.length;ft<N;ft++){const Z=H[ft],Y=Z.shadow;if(Y===void 0){console.warn("THREE.WebGLShadowMap:",Z,"has no shadow.");continue}if(Y.autoUpdate===!1&&Y.needsUpdate===!1)continue;l.copy(Y.mapSize);const vt=Y.getFrameExtents();if(l.multiply(vt),c.copy(Y.mapSize),(l.x>S||l.y>S)&&(l.x>S&&(c.x=Math.floor(S/vt.x),l.x=c.x*vt.x,Y.mapSize.x=c.x),l.y>S&&(c.y=Math.floor(S/vt.y),l.y=c.y*vt.y,Y.mapSize.y=c.y)),Y.map===null||ut===!0||gt===!0){const L=this.type!==Ji?{minFilter:ui,magFilter:ui}:{};Y.map!==null&&Y.map.dispose(),Y.map=new vr(l.x,l.y,L),Y.map.texture.name=Z.name+".shadowMap",Y.camera.updateProjectionMatrix()}o.setRenderTarget(Y.map),o.clear();const yt=Y.getViewportCount();for(let L=0;L<yt;L++){const tt=Y.getViewport(L);h.set(c.x*tt.x,c.y*tt.y,c.x*tt.z,c.y*tt.w),nt.viewport(h),Y.updateMatrices(Z,L),r=Y.getFrustum(),D(P,j,Y.camera,Z,this.type)}Y.isPointLightShadow!==!0&&this.type===Ji&&I(Y,j),Y.needsUpdate=!1}v=this.type,M.needsUpdate=!1,o.setRenderTarget(w,C,G)};function I(H,P){const j=e.update(R);x.defines.VSM_SAMPLES!==H.blurSamples&&(x.defines.VSM_SAMPLES=H.blurSamples,y.defines.VSM_SAMPLES=H.blurSamples,x.needsUpdate=!0,y.needsUpdate=!0),H.mapPass===null&&(H.mapPass=new vr(l.x,l.y)),x.uniforms.shadow_pass.value=H.map.texture,x.uniforms.resolution.value=H.mapSize,x.uniforms.radius.value=H.radius,o.setRenderTarget(H.mapPass),o.clear(),o.renderBufferDirect(P,null,j,x,R,null),y.uniforms.shadow_pass.value=H.mapPass.texture,y.uniforms.resolution.value=H.mapSize,y.uniforms.radius.value=H.radius,o.setRenderTarget(H.map),o.clear(),o.renderBufferDirect(P,null,j,y,R,null)}function z(H,P,j,w){let C=null;const G=j.isPointLight===!0?H.customDistanceMaterial:H.customDepthMaterial;if(G!==void 0)C=G;else if(C=j.isPointLight===!0?m:d,o.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0||P.alphaToCoverage===!0){const nt=C.uuid,ut=P.uuid;let gt=p[nt];gt===void 0&&(gt={},p[nt]=gt);let ft=gt[ut];ft===void 0&&(ft=C.clone(),gt[ut]=ft,P.addEventListener("dispose",X)),C=ft}if(C.visible=P.visible,C.wireframe=P.wireframe,w===Ji?C.side=P.shadowSide!==null?P.shadowSide:P.side:C.side=P.shadowSide!==null?P.shadowSide:_[P.side],C.alphaMap=P.alphaMap,C.alphaTest=P.alphaToCoverage===!0?.5:P.alphaTest,C.map=P.map,C.clipShadows=P.clipShadows,C.clippingPlanes=P.clippingPlanes,C.clipIntersection=P.clipIntersection,C.displacementMap=P.displacementMap,C.displacementScale=P.displacementScale,C.displacementBias=P.displacementBias,C.wireframeLinewidth=P.wireframeLinewidth,C.linewidth=P.linewidth,j.isPointLight===!0&&C.isMeshDistanceMaterial===!0){const nt=o.properties.get(C);nt.light=j}return C}function D(H,P,j,w,C){if(H.visible===!1)return;if(H.layers.test(P.layers)&&(H.isMesh||H.isLine||H.isPoints)&&(H.castShadow||H.receiveShadow&&C===Ji)&&(!H.frustumCulled||r.intersectsObject(H))){H.modelViewMatrix.multiplyMatrices(j.matrixWorldInverse,H.matrixWorld);const ut=e.update(H),gt=H.material;if(Array.isArray(gt)){const ft=ut.groups;for(let N=0,Z=ft.length;N<Z;N++){const Y=ft[N],vt=gt[Y.materialIndex];if(vt&&vt.visible){const yt=z(H,vt,w,C);H.onBeforeShadow(o,H,P,j,ut,yt,Y),o.renderBufferDirect(j,null,ut,yt,H,Y),H.onAfterShadow(o,H,P,j,ut,yt,Y)}}}else if(gt.visible){const ft=z(H,gt,w,C);H.onBeforeShadow(o,H,P,j,ut,ft,null),o.renderBufferDirect(j,null,ut,ft,H,null),H.onAfterShadow(o,H,P,j,ut,ft,null)}}const nt=H.children;for(let ut=0,gt=nt.length;ut<gt;ut++)D(nt[ut],P,j,w,C)}function X(H){H.target.removeEventListener("dispose",X);for(const j in p){const w=p[j],C=H.target.uuid;C in w&&(w[C].dispose(),delete w[C])}}}const k1={[vh]:Sh,[xh]:Eh,[Mh]:Th,[Ss]:yh,[Sh]:vh,[Eh]:xh,[Th]:Mh,[yh]:Ss};function W1(o,e){function i(){let V=!1;const Tt=new $e;let Ct=null;const Pt=new $e(0,0,0,0);return{setMask:function(Mt){Ct!==Mt&&!V&&(o.colorMask(Mt,Mt,Mt,Mt),Ct=Mt)},setLocked:function(Mt){V=Mt},setClear:function(Mt,mt,It,ie,De){De===!0&&(Mt*=ie,mt*=ie,It*=ie),Tt.set(Mt,mt,It,ie),Pt.equals(Tt)===!1&&(o.clearColor(Mt,mt,It,ie),Pt.copy(Tt))},reset:function(){V=!1,Ct=null,Pt.set(-1,0,0,0)}}}function r(){let V=!1,Tt=!1,Ct=null,Pt=null,Mt=null;return{setReversed:function(mt){if(Tt!==mt){const It=e.get("EXT_clip_control");mt?It.clipControlEXT(It.LOWER_LEFT_EXT,It.ZERO_TO_ONE_EXT):It.clipControlEXT(It.LOWER_LEFT_EXT,It.NEGATIVE_ONE_TO_ONE_EXT),Tt=mt;const ie=Mt;Mt=null,this.setClear(ie)}},getReversed:function(){return Tt},setTest:function(mt){mt?ot(o.DEPTH_TEST):wt(o.DEPTH_TEST)},setMask:function(mt){Ct!==mt&&!V&&(o.depthMask(mt),Ct=mt)},setFunc:function(mt){if(Tt&&(mt=k1[mt]),Pt!==mt){switch(mt){case vh:o.depthFunc(o.NEVER);break;case Sh:o.depthFunc(o.ALWAYS);break;case xh:o.depthFunc(o.LESS);break;case Ss:o.depthFunc(o.LEQUAL);break;case Mh:o.depthFunc(o.EQUAL);break;case yh:o.depthFunc(o.GEQUAL);break;case Eh:o.depthFunc(o.GREATER);break;case Th:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}Pt=mt}},setLocked:function(mt){V=mt},setClear:function(mt){Mt!==mt&&(Tt&&(mt=1-mt),o.clearDepth(mt),Mt=mt)},reset:function(){V=!1,Ct=null,Pt=null,Mt=null,Tt=!1}}}function l(){let V=!1,Tt=null,Ct=null,Pt=null,Mt=null,mt=null,It=null,ie=null,De=null;return{setTest:function(Me){V||(Me?ot(o.STENCIL_TEST):wt(o.STENCIL_TEST))},setMask:function(Me){Tt!==Me&&!V&&(o.stencilMask(Me),Tt=Me)},setFunc:function(Me,An,Qn){(Ct!==Me||Pt!==An||Mt!==Qn)&&(o.stencilFunc(Me,An,Qn),Ct=Me,Pt=An,Mt=Qn)},setOp:function(Me,An,Qn){(mt!==Me||It!==An||ie!==Qn)&&(o.stencilOp(Me,An,Qn),mt=Me,It=An,ie=Qn)},setLocked:function(Me){V=Me},setClear:function(Me){De!==Me&&(o.clearStencil(Me),De=Me)},reset:function(){V=!1,Tt=null,Ct=null,Pt=null,Mt=null,mt=null,It=null,ie=null,De=null}}}const c=new i,h=new r,d=new l,m=new WeakMap,p=new WeakMap;let S={},_={},x=new WeakMap,y=[],A=null,R=!1,M=null,v=null,I=null,z=null,D=null,X=null,H=null,P=new Be(0,0,0),j=0,w=!1,C=null,G=null,nt=null,ut=null,gt=null;const ft=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let N=!1,Z=0;const Y=o.getParameter(o.VERSION);Y.indexOf("WebGL")!==-1?(Z=parseFloat(/^WebGL (\d)/.exec(Y)[1]),N=Z>=1):Y.indexOf("OpenGL ES")!==-1&&(Z=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),N=Z>=2);let vt=null,yt={};const L=o.getParameter(o.SCISSOR_BOX),tt=o.getParameter(o.VIEWPORT),xt=new $e().fromArray(L),bt=new $e().fromArray(tt);function Nt(V,Tt,Ct,Pt){const Mt=new Uint8Array(4),mt=o.createTexture();o.bindTexture(V,mt),o.texParameteri(V,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(V,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let It=0;It<Ct;It++)V===o.TEXTURE_3D||V===o.TEXTURE_2D_ARRAY?o.texImage3D(Tt,0,o.RGBA,1,1,Pt,0,o.RGBA,o.UNSIGNED_BYTE,Mt):o.texImage2D(Tt+It,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,Mt);return mt}const et={};et[o.TEXTURE_2D]=Nt(o.TEXTURE_2D,o.TEXTURE_2D,1),et[o.TEXTURE_CUBE_MAP]=Nt(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),et[o.TEXTURE_2D_ARRAY]=Nt(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),et[o.TEXTURE_3D]=Nt(o.TEXTURE_3D,o.TEXTURE_3D,1,1),c.setClear(0,0,0,1),h.setClear(1),d.setClear(0),ot(o.DEPTH_TEST),h.setFunc(Ss),$t(!1),kt(s_),ot(o.CULL_FACE),Ee(Pa);function ot(V){S[V]!==!0&&(o.enable(V),S[V]=!0)}function wt(V){S[V]!==!1&&(o.disable(V),S[V]=!1)}function Bt(V,Tt){return _[V]!==Tt?(o.bindFramebuffer(V,Tt),_[V]=Tt,V===o.DRAW_FRAMEBUFFER&&(_[o.FRAMEBUFFER]=Tt),V===o.FRAMEBUFFER&&(_[o.DRAW_FRAMEBUFFER]=Tt),!0):!1}function Xt(V,Tt){let Ct=y,Pt=!1;if(V){Ct=x.get(Tt),Ct===void 0&&(Ct=[],x.set(Tt,Ct));const Mt=V.textures;if(Ct.length!==Mt.length||Ct[0]!==o.COLOR_ATTACHMENT0){for(let mt=0,It=Mt.length;mt<It;mt++)Ct[mt]=o.COLOR_ATTACHMENT0+mt;Ct.length=Mt.length,Pt=!0}}else Ct[0]!==o.BACK&&(Ct[0]=o.BACK,Pt=!0);Pt&&o.drawBuffers(Ct)}function fe(V){return A!==V?(o.useProgram(V),A=V,!0):!1}const tn={[hr]:o.FUNC_ADD,[JS]:o.FUNC_SUBTRACT,[$S]:o.FUNC_REVERSE_SUBTRACT};tn[tx]=o.MIN,tn[ex]=o.MAX;const B={[nx]:o.ZERO,[ix]:o.ONE,[ax]:o.SRC_COLOR,[gh]:o.SRC_ALPHA,[cx]:o.SRC_ALPHA_SATURATE,[lx]:o.DST_COLOR,[sx]:o.DST_ALPHA,[rx]:o.ONE_MINUS_SRC_COLOR,[_h]:o.ONE_MINUS_SRC_ALPHA,[ux]:o.ONE_MINUS_DST_COLOR,[ox]:o.ONE_MINUS_DST_ALPHA,[fx]:o.CONSTANT_COLOR,[hx]:o.ONE_MINUS_CONSTANT_COLOR,[dx]:o.CONSTANT_ALPHA,[px]:o.ONE_MINUS_CONSTANT_ALPHA};function Ee(V,Tt,Ct,Pt,Mt,mt,It,ie,De,Me){if(V===Pa){R===!0&&(wt(o.BLEND),R=!1);return}if(R===!1&&(ot(o.BLEND),R=!0),V!==QS){if(V!==M||Me!==w){if((v!==hr||D!==hr)&&(o.blendEquation(o.FUNC_ADD),v=hr,D=hr),Me)switch(V){case _s:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case o_:o.blendFunc(o.ONE,o.ONE);break;case l_:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case u_:o.blendFuncSeparate(o.DST_COLOR,o.ONE_MINUS_SRC_ALPHA,o.ZERO,o.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",V);break}else switch(V){case _s:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case o_:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE,o.ONE,o.ONE);break;case l_:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case u_:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",V);break}I=null,z=null,X=null,H=null,P.set(0,0,0),j=0,M=V,w=Me}return}Mt=Mt||Tt,mt=mt||Ct,It=It||Pt,(Tt!==v||Mt!==D)&&(o.blendEquationSeparate(tn[Tt],tn[Mt]),v=Tt,D=Mt),(Ct!==I||Pt!==z||mt!==X||It!==H)&&(o.blendFuncSeparate(B[Ct],B[Pt],B[mt],B[It]),I=Ct,z=Pt,X=mt,H=It),(ie.equals(P)===!1||De!==j)&&(o.blendColor(ie.r,ie.g,ie.b,De),P.copy(ie),j=De),M=V,w=!1}function ne(V,Tt){V.side===$i?wt(o.CULL_FACE):ot(o.CULL_FACE);let Ct=V.side===Fn;Tt&&(Ct=!Ct),$t(Ct),V.blending===_s&&V.transparent===!1?Ee(Pa):Ee(V.blending,V.blendEquation,V.blendSrc,V.blendDst,V.blendEquationAlpha,V.blendSrcAlpha,V.blendDstAlpha,V.blendColor,V.blendAlpha,V.premultipliedAlpha),h.setFunc(V.depthFunc),h.setTest(V.depthTest),h.setMask(V.depthWrite),c.setMask(V.colorWrite);const Pt=V.stencilWrite;d.setTest(Pt),Pt&&(d.setMask(V.stencilWriteMask),d.setFunc(V.stencilFunc,V.stencilRef,V.stencilFuncMask),d.setOp(V.stencilFail,V.stencilZFail,V.stencilZPass)),Vt(V.polygonOffset,V.polygonOffsetFactor,V.polygonOffsetUnits),V.alphaToCoverage===!0?ot(o.SAMPLE_ALPHA_TO_COVERAGE):wt(o.SAMPLE_ALPHA_TO_COVERAGE)}function $t(V){C!==V&&(V?o.frontFace(o.CW):o.frontFace(o.CCW),C=V)}function kt(V){V!==ZS?(ot(o.CULL_FACE),V!==G&&(V===s_?o.cullFace(o.BACK):V===jS?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):wt(o.CULL_FACE),G=V}function Fe(V){V!==nt&&(N&&o.lineWidth(V),nt=V)}function Vt(V,Tt,Ct){V?(ot(o.POLYGON_OFFSET_FILL),(ut!==Tt||gt!==Ct)&&(o.polygonOffset(Tt,Ct),ut=Tt,gt=Ct)):wt(o.POLYGON_OFFSET_FILL)}function ae(V){V?ot(o.SCISSOR_TEST):wt(o.SCISSOR_TEST)}function Ye(V){V===void 0&&(V=o.TEXTURE0+ft-1),vt!==V&&(o.activeTexture(V),vt=V)}function qe(V,Tt,Ct){Ct===void 0&&(vt===null?Ct=o.TEXTURE0+ft-1:Ct=vt);let Pt=yt[Ct];Pt===void 0&&(Pt={type:void 0,texture:void 0},yt[Ct]=Pt),(Pt.type!==V||Pt.texture!==Tt)&&(vt!==Ct&&(o.activeTexture(Ct),vt=Ct),o.bindTexture(V,Tt||et[V]),Pt.type=V,Pt.texture=Tt)}function U(){const V=yt[vt];V!==void 0&&V.type!==void 0&&(o.bindTexture(V.type,null),V.type=void 0,V.texture=void 0)}function E(){try{o.compressedTexImage2D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function J(){try{o.compressedTexImage3D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function ht(){try{o.texSubImage2D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function St(){try{o.texSubImage3D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function lt(){try{o.compressedTexSubImage2D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Zt(){try{o.compressedTexSubImage3D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function At(){try{o.texStorage2D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function qt(){try{o.texStorage3D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Yt(){try{o.texImage2D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Et(){try{o.texImage3D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Rt(V){xt.equals(V)===!1&&(o.scissor(V.x,V.y,V.z,V.w),xt.copy(V))}function jt(V){bt.equals(V)===!1&&(o.viewport(V.x,V.y,V.z,V.w),bt.copy(V))}function zt(V,Tt){let Ct=p.get(Tt);Ct===void 0&&(Ct=new WeakMap,p.set(Tt,Ct));let Pt=Ct.get(V);Pt===void 0&&(Pt=o.getUniformBlockIndex(Tt,V.name),Ct.set(V,Pt))}function Dt(V,Tt){const Pt=p.get(Tt).get(V);m.get(Tt)!==Pt&&(o.uniformBlockBinding(Tt,Pt,V.__bindingPointIndex),m.set(Tt,Pt))}function se(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),h.setReversed(!1),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),S={},vt=null,yt={},_={},x=new WeakMap,y=[],A=null,R=!1,M=null,v=null,I=null,z=null,D=null,X=null,H=null,P=new Be(0,0,0),j=0,w=!1,C=null,G=null,nt=null,ut=null,gt=null,xt.set(0,0,o.canvas.width,o.canvas.height),bt.set(0,0,o.canvas.width,o.canvas.height),c.reset(),h.reset(),d.reset()}return{buffers:{color:c,depth:h,stencil:d},enable:ot,disable:wt,bindFramebuffer:Bt,drawBuffers:Xt,useProgram:fe,setBlending:Ee,setMaterial:ne,setFlipSided:$t,setCullFace:kt,setLineWidth:Fe,setPolygonOffset:Vt,setScissorTest:ae,activeTexture:Ye,bindTexture:qe,unbindTexture:U,compressedTexImage2D:E,compressedTexImage3D:J,texImage2D:Yt,texImage3D:Et,updateUBOMapping:zt,uniformBlockBinding:Dt,texStorage2D:At,texStorage3D:qt,texSubImage2D:ht,texSubImage3D:St,compressedTexSubImage2D:lt,compressedTexSubImage3D:Zt,scissor:Rt,viewport:jt,reset:se}}function q1(o,e,i,r,l,c,h){const d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new Ie,S=new WeakMap;let _;const x=new WeakMap;let y=!1;try{y=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function A(U,E){return y?new OffscreenCanvas(U,E):yu("canvas")}function R(U,E,J){let ht=1;const St=qe(U);if((St.width>J||St.height>J)&&(ht=J/Math.max(St.width,St.height)),ht<1)if(typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&U instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&U instanceof ImageBitmap||typeof VideoFrame<"u"&&U instanceof VideoFrame){const lt=Math.floor(ht*St.width),Zt=Math.floor(ht*St.height);_===void 0&&(_=A(lt,Zt));const At=E?A(lt,Zt):_;return At.width=lt,At.height=Zt,At.getContext("2d").drawImage(U,0,0,lt,Zt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+St.width+"x"+St.height+") to ("+lt+"x"+Zt+")."),At}else return"data"in U&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+St.width+"x"+St.height+")."),U;return U}function M(U){return U.generateMipmaps}function v(U){o.generateMipmap(U)}function I(U){return U.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:U.isWebGL3DRenderTarget?o.TEXTURE_3D:U.isWebGLArrayRenderTarget||U.isCompressedArrayTexture?o.TEXTURE_2D_ARRAY:o.TEXTURE_2D}function z(U,E,J,ht,St=!1){if(U!==null){if(o[U]!==void 0)return o[U];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+U+"'")}let lt=E;if(E===o.RED&&(J===o.FLOAT&&(lt=o.R32F),J===o.HALF_FLOAT&&(lt=o.R16F),J===o.UNSIGNED_BYTE&&(lt=o.R8)),E===o.RED_INTEGER&&(J===o.UNSIGNED_BYTE&&(lt=o.R8UI),J===o.UNSIGNED_SHORT&&(lt=o.R16UI),J===o.UNSIGNED_INT&&(lt=o.R32UI),J===o.BYTE&&(lt=o.R8I),J===o.SHORT&&(lt=o.R16I),J===o.INT&&(lt=o.R32I)),E===o.RG&&(J===o.FLOAT&&(lt=o.RG32F),J===o.HALF_FLOAT&&(lt=o.RG16F),J===o.UNSIGNED_BYTE&&(lt=o.RG8)),E===o.RG_INTEGER&&(J===o.UNSIGNED_BYTE&&(lt=o.RG8UI),J===o.UNSIGNED_SHORT&&(lt=o.RG16UI),J===o.UNSIGNED_INT&&(lt=o.RG32UI),J===o.BYTE&&(lt=o.RG8I),J===o.SHORT&&(lt=o.RG16I),J===o.INT&&(lt=o.RG32I)),E===o.RGB_INTEGER&&(J===o.UNSIGNED_BYTE&&(lt=o.RGB8UI),J===o.UNSIGNED_SHORT&&(lt=o.RGB16UI),J===o.UNSIGNED_INT&&(lt=o.RGB32UI),J===o.BYTE&&(lt=o.RGB8I),J===o.SHORT&&(lt=o.RGB16I),J===o.INT&&(lt=o.RGB32I)),E===o.RGBA_INTEGER&&(J===o.UNSIGNED_BYTE&&(lt=o.RGBA8UI),J===o.UNSIGNED_SHORT&&(lt=o.RGBA16UI),J===o.UNSIGNED_INT&&(lt=o.RGBA32UI),J===o.BYTE&&(lt=o.RGBA8I),J===o.SHORT&&(lt=o.RGBA16I),J===o.INT&&(lt=o.RGBA32I)),E===o.RGB&&(J===o.UNSIGNED_INT_5_9_9_9_REV&&(lt=o.RGB9_E5),J===o.UNSIGNED_INT_10F_11F_11F_REV&&(lt=o.R11F_G11F_B10F)),E===o.RGBA){const Zt=St?xu:Ae.getTransfer(ht);J===o.FLOAT&&(lt=o.RGBA32F),J===o.HALF_FLOAT&&(lt=o.RGBA16F),J===o.UNSIGNED_BYTE&&(lt=Zt===Pe?o.SRGB8_ALPHA8:o.RGBA8),J===o.UNSIGNED_SHORT_4_4_4_4&&(lt=o.RGBA4),J===o.UNSIGNED_SHORT_5_5_5_1&&(lt=o.RGB5_A1)}return(lt===o.R16F||lt===o.R32F||lt===o.RG16F||lt===o.RG32F||lt===o.RGBA16F||lt===o.RGBA32F)&&e.get("EXT_color_buffer_float"),lt}function D(U,E){let J;return U?E===null||E===_r||E===Ao?J=o.DEPTH24_STENCIL8:E===ta?J=o.DEPTH32F_STENCIL8:E===bo&&(J=o.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===_r||E===Ao?J=o.DEPTH_COMPONENT24:E===ta?J=o.DEPTH_COMPONENT32F:E===bo&&(J=o.DEPTH_COMPONENT16),J}function X(U,E){return M(U)===!0||U.isFramebufferTexture&&U.minFilter!==ui&&U.minFilter!==bi?Math.log2(Math.max(E.width,E.height))+1:U.mipmaps!==void 0&&U.mipmaps.length>0?U.mipmaps.length:U.isCompressedTexture&&Array.isArray(U.image)?E.mipmaps.length:1}function H(U){const E=U.target;E.removeEventListener("dispose",H),j(E),E.isVideoTexture&&S.delete(E)}function P(U){const E=U.target;E.removeEventListener("dispose",P),C(E)}function j(U){const E=r.get(U);if(E.__webglInit===void 0)return;const J=U.source,ht=x.get(J);if(ht){const St=ht[E.__cacheKey];St.usedTimes--,St.usedTimes===0&&w(U),Object.keys(ht).length===0&&x.delete(J)}r.remove(U)}function w(U){const E=r.get(U);o.deleteTexture(E.__webglTexture);const J=U.source,ht=x.get(J);delete ht[E.__cacheKey],h.memory.textures--}function C(U){const E=r.get(U);if(U.depthTexture&&(U.depthTexture.dispose(),r.remove(U.depthTexture)),U.isWebGLCubeRenderTarget)for(let ht=0;ht<6;ht++){if(Array.isArray(E.__webglFramebuffer[ht]))for(let St=0;St<E.__webglFramebuffer[ht].length;St++)o.deleteFramebuffer(E.__webglFramebuffer[ht][St]);else o.deleteFramebuffer(E.__webglFramebuffer[ht]);E.__webglDepthbuffer&&o.deleteRenderbuffer(E.__webglDepthbuffer[ht])}else{if(Array.isArray(E.__webglFramebuffer))for(let ht=0;ht<E.__webglFramebuffer.length;ht++)o.deleteFramebuffer(E.__webglFramebuffer[ht]);else o.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&o.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&o.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let ht=0;ht<E.__webglColorRenderbuffer.length;ht++)E.__webglColorRenderbuffer[ht]&&o.deleteRenderbuffer(E.__webglColorRenderbuffer[ht]);E.__webglDepthRenderbuffer&&o.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const J=U.textures;for(let ht=0,St=J.length;ht<St;ht++){const lt=r.get(J[ht]);lt.__webglTexture&&(o.deleteTexture(lt.__webglTexture),h.memory.textures--),r.remove(J[ht])}r.remove(U)}let G=0;function nt(){G=0}function ut(){const U=G;return U>=l.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+U+" texture units while this GPU supports only "+l.maxTextures),G+=1,U}function gt(U){const E=[];return E.push(U.wrapS),E.push(U.wrapT),E.push(U.wrapR||0),E.push(U.magFilter),E.push(U.minFilter),E.push(U.anisotropy),E.push(U.internalFormat),E.push(U.format),E.push(U.type),E.push(U.generateMipmaps),E.push(U.premultiplyAlpha),E.push(U.flipY),E.push(U.unpackAlignment),E.push(U.colorSpace),E.join()}function ft(U,E){const J=r.get(U);if(U.isVideoTexture&&ae(U),U.isRenderTargetTexture===!1&&U.isExternalTexture!==!0&&U.version>0&&J.__version!==U.version){const ht=U.image;if(ht===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ht.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{et(J,U,E);return}}else U.isExternalTexture&&(J.__webglTexture=U.sourceTexture?U.sourceTexture:null);i.bindTexture(o.TEXTURE_2D,J.__webglTexture,o.TEXTURE0+E)}function N(U,E){const J=r.get(U);if(U.isRenderTargetTexture===!1&&U.version>0&&J.__version!==U.version){et(J,U,E);return}i.bindTexture(o.TEXTURE_2D_ARRAY,J.__webglTexture,o.TEXTURE0+E)}function Z(U,E){const J=r.get(U);if(U.isRenderTargetTexture===!1&&U.version>0&&J.__version!==U.version){et(J,U,E);return}i.bindTexture(o.TEXTURE_3D,J.__webglTexture,o.TEXTURE0+E)}function Y(U,E){const J=r.get(U);if(U.version>0&&J.__version!==U.version){ot(J,U,E);return}i.bindTexture(o.TEXTURE_CUBE_MAP,J.__webglTexture,o.TEXTURE0+E)}const vt={[Rh]:o.REPEAT,[pr]:o.CLAMP_TO_EDGE,[Ch]:o.MIRRORED_REPEAT},yt={[ui]:o.NEAREST,[Tx]:o.NEAREST_MIPMAP_NEAREST,[ql]:o.NEAREST_MIPMAP_LINEAR,[bi]:o.LINEAR,[Ff]:o.LINEAR_MIPMAP_NEAREST,[mr]:o.LINEAR_MIPMAP_LINEAR},L={[wx]:o.NEVER,[zx]:o.ALWAYS,[Dx]:o.LESS,[p0]:o.LEQUAL,[Ux]:o.EQUAL,[Ox]:o.GEQUAL,[Lx]:o.GREATER,[Nx]:o.NOTEQUAL};function tt(U,E){if(E.type===ta&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===bi||E.magFilter===Ff||E.magFilter===ql||E.magFilter===mr||E.minFilter===bi||E.minFilter===Ff||E.minFilter===ql||E.minFilter===mr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),o.texParameteri(U,o.TEXTURE_WRAP_S,vt[E.wrapS]),o.texParameteri(U,o.TEXTURE_WRAP_T,vt[E.wrapT]),(U===o.TEXTURE_3D||U===o.TEXTURE_2D_ARRAY)&&o.texParameteri(U,o.TEXTURE_WRAP_R,vt[E.wrapR]),o.texParameteri(U,o.TEXTURE_MAG_FILTER,yt[E.magFilter]),o.texParameteri(U,o.TEXTURE_MIN_FILTER,yt[E.minFilter]),E.compareFunction&&(o.texParameteri(U,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(U,o.TEXTURE_COMPARE_FUNC,L[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===ui||E.minFilter!==ql&&E.minFilter!==mr||E.type===ta&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||r.get(E).__currentAnisotropy){const J=e.get("EXT_texture_filter_anisotropic");o.texParameterf(U,J.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,l.getMaxAnisotropy())),r.get(E).__currentAnisotropy=E.anisotropy}}}function xt(U,E){let J=!1;U.__webglInit===void 0&&(U.__webglInit=!0,E.addEventListener("dispose",H));const ht=E.source;let St=x.get(ht);St===void 0&&(St={},x.set(ht,St));const lt=gt(E);if(lt!==U.__cacheKey){St[lt]===void 0&&(St[lt]={texture:o.createTexture(),usedTimes:0},h.memory.textures++,J=!0),St[lt].usedTimes++;const Zt=St[U.__cacheKey];Zt!==void 0&&(St[U.__cacheKey].usedTimes--,Zt.usedTimes===0&&w(E)),U.__cacheKey=lt,U.__webglTexture=St[lt].texture}return J}function bt(U,E,J){return Math.floor(Math.floor(U/J)/E)}function Nt(U,E,J,ht){const lt=U.updateRanges;if(lt.length===0)i.texSubImage2D(o.TEXTURE_2D,0,0,0,E.width,E.height,J,ht,E.data);else{lt.sort((Et,Rt)=>Et.start-Rt.start);let Zt=0;for(let Et=1;Et<lt.length;Et++){const Rt=lt[Zt],jt=lt[Et],zt=Rt.start+Rt.count,Dt=bt(jt.start,E.width,4),se=bt(Rt.start,E.width,4);jt.start<=zt+1&&Dt===se&&bt(jt.start+jt.count-1,E.width,4)===Dt?Rt.count=Math.max(Rt.count,jt.start+jt.count-Rt.start):(++Zt,lt[Zt]=jt)}lt.length=Zt+1;const At=o.getParameter(o.UNPACK_ROW_LENGTH),qt=o.getParameter(o.UNPACK_SKIP_PIXELS),Yt=o.getParameter(o.UNPACK_SKIP_ROWS);o.pixelStorei(o.UNPACK_ROW_LENGTH,E.width);for(let Et=0,Rt=lt.length;Et<Rt;Et++){const jt=lt[Et],zt=Math.floor(jt.start/4),Dt=Math.ceil(jt.count/4),se=zt%E.width,V=Math.floor(zt/E.width),Tt=Dt,Ct=1;o.pixelStorei(o.UNPACK_SKIP_PIXELS,se),o.pixelStorei(o.UNPACK_SKIP_ROWS,V),i.texSubImage2D(o.TEXTURE_2D,0,se,V,Tt,Ct,J,ht,E.data)}U.clearUpdateRanges(),o.pixelStorei(o.UNPACK_ROW_LENGTH,At),o.pixelStorei(o.UNPACK_SKIP_PIXELS,qt),o.pixelStorei(o.UNPACK_SKIP_ROWS,Yt)}}function et(U,E,J){let ht=o.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(ht=o.TEXTURE_2D_ARRAY),E.isData3DTexture&&(ht=o.TEXTURE_3D);const St=xt(U,E),lt=E.source;i.bindTexture(ht,U.__webglTexture,o.TEXTURE0+J);const Zt=r.get(lt);if(lt.version!==Zt.__version||St===!0){i.activeTexture(o.TEXTURE0+J);const At=Ae.getPrimaries(Ae.workingColorSpace),qt=E.colorSpace===za?null:Ae.getPrimaries(E.colorSpace),Yt=E.colorSpace===za||At===qt?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,E.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,E.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Yt);let Et=R(E.image,!1,l.maxTextureSize);Et=Ye(E,Et);const Rt=c.convert(E.format,E.colorSpace),jt=c.convert(E.type);let zt=z(E.internalFormat,Rt,jt,E.colorSpace,E.isVideoTexture);tt(ht,E);let Dt;const se=E.mipmaps,V=E.isVideoTexture!==!0,Tt=Zt.__version===void 0||St===!0,Ct=lt.dataReady,Pt=X(E,Et);if(E.isDepthTexture)zt=D(E.format===Co,E.type),Tt&&(V?i.texStorage2D(o.TEXTURE_2D,1,zt,Et.width,Et.height):i.texImage2D(o.TEXTURE_2D,0,zt,Et.width,Et.height,0,Rt,jt,null));else if(E.isDataTexture)if(se.length>0){V&&Tt&&i.texStorage2D(o.TEXTURE_2D,Pt,zt,se[0].width,se[0].height);for(let Mt=0,mt=se.length;Mt<mt;Mt++)Dt=se[Mt],V?Ct&&i.texSubImage2D(o.TEXTURE_2D,Mt,0,0,Dt.width,Dt.height,Rt,jt,Dt.data):i.texImage2D(o.TEXTURE_2D,Mt,zt,Dt.width,Dt.height,0,Rt,jt,Dt.data);E.generateMipmaps=!1}else V?(Tt&&i.texStorage2D(o.TEXTURE_2D,Pt,zt,Et.width,Et.height),Ct&&Nt(E,Et,Rt,jt)):i.texImage2D(o.TEXTURE_2D,0,zt,Et.width,Et.height,0,Rt,jt,Et.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){V&&Tt&&i.texStorage3D(o.TEXTURE_2D_ARRAY,Pt,zt,se[0].width,se[0].height,Et.depth);for(let Mt=0,mt=se.length;Mt<mt;Mt++)if(Dt=se[Mt],E.format!==_i)if(Rt!==null)if(V){if(Ct)if(E.layerUpdates.size>0){const It=D_(Dt.width,Dt.height,E.format,E.type);for(const ie of E.layerUpdates){const De=Dt.data.subarray(ie*It/Dt.data.BYTES_PER_ELEMENT,(ie+1)*It/Dt.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,Mt,0,0,ie,Dt.width,Dt.height,1,Rt,De)}E.clearLayerUpdates()}else i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,Mt,0,0,0,Dt.width,Dt.height,Et.depth,Rt,Dt.data)}else i.compressedTexImage3D(o.TEXTURE_2D_ARRAY,Mt,zt,Dt.width,Dt.height,Et.depth,0,Dt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else V?Ct&&i.texSubImage3D(o.TEXTURE_2D_ARRAY,Mt,0,0,0,Dt.width,Dt.height,Et.depth,Rt,jt,Dt.data):i.texImage3D(o.TEXTURE_2D_ARRAY,Mt,zt,Dt.width,Dt.height,Et.depth,0,Rt,jt,Dt.data)}else{V&&Tt&&i.texStorage2D(o.TEXTURE_2D,Pt,zt,se[0].width,se[0].height);for(let Mt=0,mt=se.length;Mt<mt;Mt++)Dt=se[Mt],E.format!==_i?Rt!==null?V?Ct&&i.compressedTexSubImage2D(o.TEXTURE_2D,Mt,0,0,Dt.width,Dt.height,Rt,Dt.data):i.compressedTexImage2D(o.TEXTURE_2D,Mt,zt,Dt.width,Dt.height,0,Dt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):V?Ct&&i.texSubImage2D(o.TEXTURE_2D,Mt,0,0,Dt.width,Dt.height,Rt,jt,Dt.data):i.texImage2D(o.TEXTURE_2D,Mt,zt,Dt.width,Dt.height,0,Rt,jt,Dt.data)}else if(E.isDataArrayTexture)if(V){if(Tt&&i.texStorage3D(o.TEXTURE_2D_ARRAY,Pt,zt,Et.width,Et.height,Et.depth),Ct)if(E.layerUpdates.size>0){const Mt=D_(Et.width,Et.height,E.format,E.type);for(const mt of E.layerUpdates){const It=Et.data.subarray(mt*Mt/Et.data.BYTES_PER_ELEMENT,(mt+1)*Mt/Et.data.BYTES_PER_ELEMENT);i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,mt,Et.width,Et.height,1,Rt,jt,It)}E.clearLayerUpdates()}else i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,Et.width,Et.height,Et.depth,Rt,jt,Et.data)}else i.texImage3D(o.TEXTURE_2D_ARRAY,0,zt,Et.width,Et.height,Et.depth,0,Rt,jt,Et.data);else if(E.isData3DTexture)V?(Tt&&i.texStorage3D(o.TEXTURE_3D,Pt,zt,Et.width,Et.height,Et.depth),Ct&&i.texSubImage3D(o.TEXTURE_3D,0,0,0,0,Et.width,Et.height,Et.depth,Rt,jt,Et.data)):i.texImage3D(o.TEXTURE_3D,0,zt,Et.width,Et.height,Et.depth,0,Rt,jt,Et.data);else if(E.isFramebufferTexture){if(Tt)if(V)i.texStorage2D(o.TEXTURE_2D,Pt,zt,Et.width,Et.height);else{let Mt=Et.width,mt=Et.height;for(let It=0;It<Pt;It++)i.texImage2D(o.TEXTURE_2D,It,zt,Mt,mt,0,Rt,jt,null),Mt>>=1,mt>>=1}}else if(se.length>0){if(V&&Tt){const Mt=qe(se[0]);i.texStorage2D(o.TEXTURE_2D,Pt,zt,Mt.width,Mt.height)}for(let Mt=0,mt=se.length;Mt<mt;Mt++)Dt=se[Mt],V?Ct&&i.texSubImage2D(o.TEXTURE_2D,Mt,0,0,Rt,jt,Dt):i.texImage2D(o.TEXTURE_2D,Mt,zt,Rt,jt,Dt);E.generateMipmaps=!1}else if(V){if(Tt){const Mt=qe(Et);i.texStorage2D(o.TEXTURE_2D,Pt,zt,Mt.width,Mt.height)}Ct&&i.texSubImage2D(o.TEXTURE_2D,0,0,0,Rt,jt,Et)}else i.texImage2D(o.TEXTURE_2D,0,zt,Rt,jt,Et);M(E)&&v(ht),Zt.__version=lt.version,E.onUpdate&&E.onUpdate(E)}U.__version=E.version}function ot(U,E,J){if(E.image.length!==6)return;const ht=xt(U,E),St=E.source;i.bindTexture(o.TEXTURE_CUBE_MAP,U.__webglTexture,o.TEXTURE0+J);const lt=r.get(St);if(St.version!==lt.__version||ht===!0){i.activeTexture(o.TEXTURE0+J);const Zt=Ae.getPrimaries(Ae.workingColorSpace),At=E.colorSpace===za?null:Ae.getPrimaries(E.colorSpace),qt=E.colorSpace===za||Zt===At?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,E.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,E.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,qt);const Yt=E.isCompressedTexture||E.image[0].isCompressedTexture,Et=E.image[0]&&E.image[0].isDataTexture,Rt=[];for(let mt=0;mt<6;mt++)!Yt&&!Et?Rt[mt]=R(E.image[mt],!0,l.maxCubemapSize):Rt[mt]=Et?E.image[mt].image:E.image[mt],Rt[mt]=Ye(E,Rt[mt]);const jt=Rt[0],zt=c.convert(E.format,E.colorSpace),Dt=c.convert(E.type),se=z(E.internalFormat,zt,Dt,E.colorSpace),V=E.isVideoTexture!==!0,Tt=lt.__version===void 0||ht===!0,Ct=St.dataReady;let Pt=X(E,jt);tt(o.TEXTURE_CUBE_MAP,E);let Mt;if(Yt){V&&Tt&&i.texStorage2D(o.TEXTURE_CUBE_MAP,Pt,se,jt.width,jt.height);for(let mt=0;mt<6;mt++){Mt=Rt[mt].mipmaps;for(let It=0;It<Mt.length;It++){const ie=Mt[It];E.format!==_i?zt!==null?V?Ct&&i.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+mt,It,0,0,ie.width,ie.height,zt,ie.data):i.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+mt,It,se,ie.width,ie.height,0,ie.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):V?Ct&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+mt,It,0,0,ie.width,ie.height,zt,Dt,ie.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+mt,It,se,ie.width,ie.height,0,zt,Dt,ie.data)}}}else{if(Mt=E.mipmaps,V&&Tt){Mt.length>0&&Pt++;const mt=qe(Rt[0]);i.texStorage2D(o.TEXTURE_CUBE_MAP,Pt,se,mt.width,mt.height)}for(let mt=0;mt<6;mt++)if(Et){V?Ct&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+mt,0,0,0,Rt[mt].width,Rt[mt].height,zt,Dt,Rt[mt].data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+mt,0,se,Rt[mt].width,Rt[mt].height,0,zt,Dt,Rt[mt].data);for(let It=0;It<Mt.length;It++){const De=Mt[It].image[mt].image;V?Ct&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+mt,It+1,0,0,De.width,De.height,zt,Dt,De.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+mt,It+1,se,De.width,De.height,0,zt,Dt,De.data)}}else{V?Ct&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+mt,0,0,0,zt,Dt,Rt[mt]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+mt,0,se,zt,Dt,Rt[mt]);for(let It=0;It<Mt.length;It++){const ie=Mt[It];V?Ct&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+mt,It+1,0,0,zt,Dt,ie.image[mt]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+mt,It+1,se,zt,Dt,ie.image[mt])}}}M(E)&&v(o.TEXTURE_CUBE_MAP),lt.__version=St.version,E.onUpdate&&E.onUpdate(E)}U.__version=E.version}function wt(U,E,J,ht,St,lt){const Zt=c.convert(J.format,J.colorSpace),At=c.convert(J.type),qt=z(J.internalFormat,Zt,At,J.colorSpace),Yt=r.get(E),Et=r.get(J);if(Et.__renderTarget=E,!Yt.__hasExternalTextures){const Rt=Math.max(1,E.width>>lt),jt=Math.max(1,E.height>>lt);St===o.TEXTURE_3D||St===o.TEXTURE_2D_ARRAY?i.texImage3D(St,lt,qt,Rt,jt,E.depth,0,Zt,At,null):i.texImage2D(St,lt,qt,Rt,jt,0,Zt,At,null)}i.bindFramebuffer(o.FRAMEBUFFER,U),Vt(E)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,ht,St,Et.__webglTexture,0,Fe(E)):(St===o.TEXTURE_2D||St>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&St<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,ht,St,Et.__webglTexture,lt),i.bindFramebuffer(o.FRAMEBUFFER,null)}function Bt(U,E,J){if(o.bindRenderbuffer(o.RENDERBUFFER,U),E.depthBuffer){const ht=E.depthTexture,St=ht&&ht.isDepthTexture?ht.type:null,lt=D(E.stencilBuffer,St),Zt=E.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,At=Fe(E);Vt(E)?d.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,At,lt,E.width,E.height):J?o.renderbufferStorageMultisample(o.RENDERBUFFER,At,lt,E.width,E.height):o.renderbufferStorage(o.RENDERBUFFER,lt,E.width,E.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,Zt,o.RENDERBUFFER,U)}else{const ht=E.textures;for(let St=0;St<ht.length;St++){const lt=ht[St],Zt=c.convert(lt.format,lt.colorSpace),At=c.convert(lt.type),qt=z(lt.internalFormat,Zt,At,lt.colorSpace),Yt=Fe(E);J&&Vt(E)===!1?o.renderbufferStorageMultisample(o.RENDERBUFFER,Yt,qt,E.width,E.height):Vt(E)?d.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,Yt,qt,E.width,E.height):o.renderbufferStorage(o.RENDERBUFFER,qt,E.width,E.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function Xt(U,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(i.bindFramebuffer(o.FRAMEBUFFER,U),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ht=r.get(E.depthTexture);ht.__renderTarget=E,(!ht.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),ft(E.depthTexture,0);const St=ht.__webglTexture,lt=Fe(E);if(E.depthTexture.format===Ro)Vt(E)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,St,0,lt):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,St,0);else if(E.depthTexture.format===Co)Vt(E)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,St,0,lt):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,St,0);else throw new Error("Unknown depthTexture format")}function fe(U){const E=r.get(U),J=U.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==U.depthTexture){const ht=U.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),ht){const St=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,ht.removeEventListener("dispose",St)};ht.addEventListener("dispose",St),E.__depthDisposeCallback=St}E.__boundDepthTexture=ht}if(U.depthTexture&&!E.__autoAllocateDepthBuffer){if(J)throw new Error("target.depthTexture not supported in Cube render targets");const ht=U.texture.mipmaps;ht&&ht.length>0?Xt(E.__webglFramebuffer[0],U):Xt(E.__webglFramebuffer,U)}else if(J){E.__webglDepthbuffer=[];for(let ht=0;ht<6;ht++)if(i.bindFramebuffer(o.FRAMEBUFFER,E.__webglFramebuffer[ht]),E.__webglDepthbuffer[ht]===void 0)E.__webglDepthbuffer[ht]=o.createRenderbuffer(),Bt(E.__webglDepthbuffer[ht],U,!1);else{const St=U.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,lt=E.__webglDepthbuffer[ht];o.bindRenderbuffer(o.RENDERBUFFER,lt),o.framebufferRenderbuffer(o.FRAMEBUFFER,St,o.RENDERBUFFER,lt)}}else{const ht=U.texture.mipmaps;if(ht&&ht.length>0?i.bindFramebuffer(o.FRAMEBUFFER,E.__webglFramebuffer[0]):i.bindFramebuffer(o.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=o.createRenderbuffer(),Bt(E.__webglDepthbuffer,U,!1);else{const St=U.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,lt=E.__webglDepthbuffer;o.bindRenderbuffer(o.RENDERBUFFER,lt),o.framebufferRenderbuffer(o.FRAMEBUFFER,St,o.RENDERBUFFER,lt)}}i.bindFramebuffer(o.FRAMEBUFFER,null)}function tn(U,E,J){const ht=r.get(U);E!==void 0&&wt(ht.__webglFramebuffer,U,U.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),J!==void 0&&fe(U)}function B(U){const E=U.texture,J=r.get(U),ht=r.get(E);U.addEventListener("dispose",P);const St=U.textures,lt=U.isWebGLCubeRenderTarget===!0,Zt=St.length>1;if(Zt||(ht.__webglTexture===void 0&&(ht.__webglTexture=o.createTexture()),ht.__version=E.version,h.memory.textures++),lt){J.__webglFramebuffer=[];for(let At=0;At<6;At++)if(E.mipmaps&&E.mipmaps.length>0){J.__webglFramebuffer[At]=[];for(let qt=0;qt<E.mipmaps.length;qt++)J.__webglFramebuffer[At][qt]=o.createFramebuffer()}else J.__webglFramebuffer[At]=o.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){J.__webglFramebuffer=[];for(let At=0;At<E.mipmaps.length;At++)J.__webglFramebuffer[At]=o.createFramebuffer()}else J.__webglFramebuffer=o.createFramebuffer();if(Zt)for(let At=0,qt=St.length;At<qt;At++){const Yt=r.get(St[At]);Yt.__webglTexture===void 0&&(Yt.__webglTexture=o.createTexture(),h.memory.textures++)}if(U.samples>0&&Vt(U)===!1){J.__webglMultisampledFramebuffer=o.createFramebuffer(),J.__webglColorRenderbuffer=[],i.bindFramebuffer(o.FRAMEBUFFER,J.__webglMultisampledFramebuffer);for(let At=0;At<St.length;At++){const qt=St[At];J.__webglColorRenderbuffer[At]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,J.__webglColorRenderbuffer[At]);const Yt=c.convert(qt.format,qt.colorSpace),Et=c.convert(qt.type),Rt=z(qt.internalFormat,Yt,Et,qt.colorSpace,U.isXRRenderTarget===!0),jt=Fe(U);o.renderbufferStorageMultisample(o.RENDERBUFFER,jt,Rt,U.width,U.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+At,o.RENDERBUFFER,J.__webglColorRenderbuffer[At])}o.bindRenderbuffer(o.RENDERBUFFER,null),U.depthBuffer&&(J.__webglDepthRenderbuffer=o.createRenderbuffer(),Bt(J.__webglDepthRenderbuffer,U,!0)),i.bindFramebuffer(o.FRAMEBUFFER,null)}}if(lt){i.bindTexture(o.TEXTURE_CUBE_MAP,ht.__webglTexture),tt(o.TEXTURE_CUBE_MAP,E);for(let At=0;At<6;At++)if(E.mipmaps&&E.mipmaps.length>0)for(let qt=0;qt<E.mipmaps.length;qt++)wt(J.__webglFramebuffer[At][qt],U,E,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+At,qt);else wt(J.__webglFramebuffer[At],U,E,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+At,0);M(E)&&v(o.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Zt){for(let At=0,qt=St.length;At<qt;At++){const Yt=St[At],Et=r.get(Yt);let Rt=o.TEXTURE_2D;(U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(Rt=U.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(Rt,Et.__webglTexture),tt(Rt,Yt),wt(J.__webglFramebuffer,U,Yt,o.COLOR_ATTACHMENT0+At,Rt,0),M(Yt)&&v(Rt)}i.unbindTexture()}else{let At=o.TEXTURE_2D;if((U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(At=U.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(At,ht.__webglTexture),tt(At,E),E.mipmaps&&E.mipmaps.length>0)for(let qt=0;qt<E.mipmaps.length;qt++)wt(J.__webglFramebuffer[qt],U,E,o.COLOR_ATTACHMENT0,At,qt);else wt(J.__webglFramebuffer,U,E,o.COLOR_ATTACHMENT0,At,0);M(E)&&v(At),i.unbindTexture()}U.depthBuffer&&fe(U)}function Ee(U){const E=U.textures;for(let J=0,ht=E.length;J<ht;J++){const St=E[J];if(M(St)){const lt=I(U),Zt=r.get(St).__webglTexture;i.bindTexture(lt,Zt),v(lt),i.unbindTexture()}}}const ne=[],$t=[];function kt(U){if(U.samples>0){if(Vt(U)===!1){const E=U.textures,J=U.width,ht=U.height;let St=o.COLOR_BUFFER_BIT;const lt=U.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Zt=r.get(U),At=E.length>1;if(At)for(let Yt=0;Yt<E.length;Yt++)i.bindFramebuffer(o.FRAMEBUFFER,Zt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Yt,o.RENDERBUFFER,null),i.bindFramebuffer(o.FRAMEBUFFER,Zt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Yt,o.TEXTURE_2D,null,0);i.bindFramebuffer(o.READ_FRAMEBUFFER,Zt.__webglMultisampledFramebuffer);const qt=U.texture.mipmaps;qt&&qt.length>0?i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Zt.__webglFramebuffer[0]):i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Zt.__webglFramebuffer);for(let Yt=0;Yt<E.length;Yt++){if(U.resolveDepthBuffer&&(U.depthBuffer&&(St|=o.DEPTH_BUFFER_BIT),U.stencilBuffer&&U.resolveStencilBuffer&&(St|=o.STENCIL_BUFFER_BIT)),At){o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,Zt.__webglColorRenderbuffer[Yt]);const Et=r.get(E[Yt]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,Et,0)}o.blitFramebuffer(0,0,J,ht,0,0,J,ht,St,o.NEAREST),m===!0&&(ne.length=0,$t.length=0,ne.push(o.COLOR_ATTACHMENT0+Yt),U.depthBuffer&&U.resolveDepthBuffer===!1&&(ne.push(lt),$t.push(lt),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,$t)),o.invalidateFramebuffer(o.READ_FRAMEBUFFER,ne))}if(i.bindFramebuffer(o.READ_FRAMEBUFFER,null),i.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),At)for(let Yt=0;Yt<E.length;Yt++){i.bindFramebuffer(o.FRAMEBUFFER,Zt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Yt,o.RENDERBUFFER,Zt.__webglColorRenderbuffer[Yt]);const Et=r.get(E[Yt]).__webglTexture;i.bindFramebuffer(o.FRAMEBUFFER,Zt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Yt,o.TEXTURE_2D,Et,0)}i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Zt.__webglMultisampledFramebuffer)}else if(U.depthBuffer&&U.resolveDepthBuffer===!1&&m){const E=U.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[E])}}}function Fe(U){return Math.min(l.maxSamples,U.samples)}function Vt(U){const E=r.get(U);return U.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function ae(U){const E=h.render.frame;S.get(U)!==E&&(S.set(U,E),U.update())}function Ye(U,E){const J=U.colorSpace,ht=U.format,St=U.type;return U.isCompressedTexture===!0||U.isVideoTexture===!0||J!==ys&&J!==za&&(Ae.getTransfer(J)===Pe?(ht!==_i||St!==na)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",J)),E}function qe(U){return typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement?(p.width=U.naturalWidth||U.width,p.height=U.naturalHeight||U.height):typeof VideoFrame<"u"&&U instanceof VideoFrame?(p.width=U.displayWidth,p.height=U.displayHeight):(p.width=U.width,p.height=U.height),p}this.allocateTextureUnit=ut,this.resetTextureUnits=nt,this.setTexture2D=ft,this.setTexture2DArray=N,this.setTexture3D=Z,this.setTextureCube=Y,this.rebindTextures=tn,this.setupRenderTarget=B,this.updateRenderTargetMipmap=Ee,this.updateMultisampleRenderTarget=kt,this.setupDepthRenderbuffer=fe,this.setupFrameBufferTexture=wt,this.useMultisampledRTT=Vt}function Y1(o,e){function i(r,l=za){let c;const h=Ae.getTransfer(l);if(r===na)return o.UNSIGNED_BYTE;if(r===ld)return o.UNSIGNED_SHORT_4_4_4_4;if(r===ud)return o.UNSIGNED_SHORT_5_5_5_1;if(r===l0)return o.UNSIGNED_INT_5_9_9_9_REV;if(r===u0)return o.UNSIGNED_INT_10F_11F_11F_REV;if(r===s0)return o.BYTE;if(r===o0)return o.SHORT;if(r===bo)return o.UNSIGNED_SHORT;if(r===od)return o.INT;if(r===_r)return o.UNSIGNED_INT;if(r===ta)return o.FLOAT;if(r===Do)return o.HALF_FLOAT;if(r===c0)return o.ALPHA;if(r===f0)return o.RGB;if(r===_i)return o.RGBA;if(r===Ro)return o.DEPTH_COMPONENT;if(r===Co)return o.DEPTH_STENCIL;if(r===h0)return o.RED;if(r===cd)return o.RED_INTEGER;if(r===d0)return o.RG;if(r===fd)return o.RG_INTEGER;if(r===hd)return o.RGBA_INTEGER;if(r===mu||r===gu||r===_u||r===vu)if(h===Pe)if(c=e.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(r===mu)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===gu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===_u)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===vu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=e.get("WEBGL_compressed_texture_s3tc"),c!==null){if(r===mu)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===gu)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===_u)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===vu)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===wh||r===Dh||r===Uh||r===Lh)if(c=e.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(r===wh)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Dh)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Uh)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Lh)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Nh||r===Oh||r===zh)if(c=e.get("WEBGL_compressed_texture_etc"),c!==null){if(r===Nh||r===Oh)return h===Pe?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(r===zh)return h===Pe?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Ph||r===Bh||r===Ih||r===Fh||r===Hh||r===Gh||r===Vh||r===Xh||r===kh||r===Wh||r===qh||r===Yh||r===Zh||r===jh)if(c=e.get("WEBGL_compressed_texture_astc"),c!==null){if(r===Ph)return h===Pe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Bh)return h===Pe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Ih)return h===Pe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Fh)return h===Pe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Hh)return h===Pe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Gh)return h===Pe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Vh)return h===Pe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Xh)return h===Pe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===kh)return h===Pe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Wh)return h===Pe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===qh)return h===Pe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Yh)return h===Pe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Zh)return h===Pe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===jh)return h===Pe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Kh||r===Qh||r===Jh)if(c=e.get("EXT_texture_compression_bptc"),c!==null){if(r===Kh)return h===Pe?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Qh)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Jh)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===$h||r===td||r===ed||r===nd)if(c=e.get("EXT_texture_compression_rgtc"),c!==null){if(r===$h)return c.COMPRESSED_RED_RGTC1_EXT;if(r===td)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===ed)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===nd)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Ao?o.UNSIGNED_INT_24_8:o[r]!==void 0?o[r]:null}return{convert:i}}const Z1=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,j1=`
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

}`;class K1{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,i){if(this.texture===null){const r=new R0(e.texture);(e.depthNear!==i.depthNear||e.depthFar!==i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const i=e.cameras[0].viewport,r=new aa({vertexShader:Z1,fragmentShader:j1,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new Ri(new zo(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Q1 extends Ts{constructor(e,i){super();const r=this;let l=null,c=1,h=null,d="local-floor",m=1,p=null,S=null,_=null,x=null,y=null,A=null;const R=typeof XRWebGLBinding<"u",M=new K1,v={},I=i.getContextAttributes();let z=null,D=null;const X=[],H=[],P=new Ie;let j=null;const w=new li;w.viewport=new $e;const C=new li;C.viewport=new $e;const G=[w,C],nt=new vM;let ut=null,gt=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(et){let ot=X[et];return ot===void 0&&(ot=new lh,X[et]=ot),ot.getTargetRaySpace()},this.getControllerGrip=function(et){let ot=X[et];return ot===void 0&&(ot=new lh,X[et]=ot),ot.getGripSpace()},this.getHand=function(et){let ot=X[et];return ot===void 0&&(ot=new lh,X[et]=ot),ot.getHandSpace()};function ft(et){const ot=H.indexOf(et.inputSource);if(ot===-1)return;const wt=X[ot];wt!==void 0&&(wt.update(et.inputSource,et.frame,p||h),wt.dispatchEvent({type:et.type,data:et.inputSource}))}function N(){l.removeEventListener("select",ft),l.removeEventListener("selectstart",ft),l.removeEventListener("selectend",ft),l.removeEventListener("squeeze",ft),l.removeEventListener("squeezestart",ft),l.removeEventListener("squeezeend",ft),l.removeEventListener("end",N),l.removeEventListener("inputsourceschange",Z);for(let et=0;et<X.length;et++){const ot=H[et];ot!==null&&(H[et]=null,X[et].disconnect(ot))}ut=null,gt=null,M.reset();for(const et in v)delete v[et];e.setRenderTarget(z),y=null,x=null,_=null,l=null,D=null,Nt.stop(),r.isPresenting=!1,e.setPixelRatio(j),e.setSize(P.width,P.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(et){c=et,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(et){d=et,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||h},this.setReferenceSpace=function(et){p=et},this.getBaseLayer=function(){return x!==null?x:y},this.getBinding=function(){return _===null&&R&&(_=new XRWebGLBinding(l,i)),_},this.getFrame=function(){return A},this.getSession=function(){return l},this.setSession=async function(et){if(l=et,l!==null){if(z=e.getRenderTarget(),l.addEventListener("select",ft),l.addEventListener("selectstart",ft),l.addEventListener("selectend",ft),l.addEventListener("squeeze",ft),l.addEventListener("squeezestart",ft),l.addEventListener("squeezeend",ft),l.addEventListener("end",N),l.addEventListener("inputsourceschange",Z),I.xrCompatible!==!0&&await i.makeXRCompatible(),j=e.getPixelRatio(),e.getSize(P),R&&"createProjectionLayer"in XRWebGLBinding.prototype){let wt=null,Bt=null,Xt=null;I.depth&&(Xt=I.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,wt=I.stencil?Co:Ro,Bt=I.stencil?Ao:_r);const fe={colorFormat:i.RGBA8,depthFormat:Xt,scaleFactor:c};_=this.getBinding(),x=_.createProjectionLayer(fe),l.updateRenderState({layers:[x]}),e.setPixelRatio(1),e.setSize(x.textureWidth,x.textureHeight,!1),D=new vr(x.textureWidth,x.textureHeight,{format:_i,type:na,depthTexture:new A0(x.textureWidth,x.textureHeight,Bt,void 0,void 0,void 0,void 0,void 0,void 0,wt),stencilBuffer:I.stencil,colorSpace:e.outputColorSpace,samples:I.antialias?4:0,resolveDepthBuffer:x.ignoreDepthValues===!1,resolveStencilBuffer:x.ignoreDepthValues===!1})}else{const wt={antialias:I.antialias,alpha:!0,depth:I.depth,stencil:I.stencil,framebufferScaleFactor:c};y=new XRWebGLLayer(l,i,wt),l.updateRenderState({baseLayer:y}),e.setPixelRatio(1),e.setSize(y.framebufferWidth,y.framebufferHeight,!1),D=new vr(y.framebufferWidth,y.framebufferHeight,{format:_i,type:na,colorSpace:e.outputColorSpace,stencilBuffer:I.stencil,resolveDepthBuffer:y.ignoreDepthValues===!1,resolveStencilBuffer:y.ignoreDepthValues===!1})}D.isXRRenderTarget=!0,this.setFoveation(m),p=null,h=await l.requestReferenceSpace(d),Nt.setContext(l),Nt.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return M.getDepthTexture()};function Z(et){for(let ot=0;ot<et.removed.length;ot++){const wt=et.removed[ot],Bt=H.indexOf(wt);Bt>=0&&(H[Bt]=null,X[Bt].disconnect(wt))}for(let ot=0;ot<et.added.length;ot++){const wt=et.added[ot];let Bt=H.indexOf(wt);if(Bt===-1){for(let fe=0;fe<X.length;fe++)if(fe>=H.length){H.push(wt),Bt=fe;break}else if(H[fe]===null){H[fe]=wt,Bt=fe;break}if(Bt===-1)break}const Xt=X[Bt];Xt&&Xt.connect(wt)}}const Y=new st,vt=new st;function yt(et,ot,wt){Y.setFromMatrixPosition(ot.matrixWorld),vt.setFromMatrixPosition(wt.matrixWorld);const Bt=Y.distanceTo(vt),Xt=ot.projectionMatrix.elements,fe=wt.projectionMatrix.elements,tn=Xt[14]/(Xt[10]-1),B=Xt[14]/(Xt[10]+1),Ee=(Xt[9]+1)/Xt[5],ne=(Xt[9]-1)/Xt[5],$t=(Xt[8]-1)/Xt[0],kt=(fe[8]+1)/fe[0],Fe=tn*$t,Vt=tn*kt,ae=Bt/(-$t+kt),Ye=ae*-$t;if(ot.matrixWorld.decompose(et.position,et.quaternion,et.scale),et.translateX(Ye),et.translateZ(ae),et.matrixWorld.compose(et.position,et.quaternion,et.scale),et.matrixWorldInverse.copy(et.matrixWorld).invert(),Xt[10]===-1)et.projectionMatrix.copy(ot.projectionMatrix),et.projectionMatrixInverse.copy(ot.projectionMatrixInverse);else{const qe=tn+ae,U=B+ae,E=Fe-Ye,J=Vt+(Bt-Ye),ht=Ee*B/U*qe,St=ne*B/U*qe;et.projectionMatrix.makePerspective(E,J,ht,St,qe,U),et.projectionMatrixInverse.copy(et.projectionMatrix).invert()}}function L(et,ot){ot===null?et.matrixWorld.copy(et.matrix):et.matrixWorld.multiplyMatrices(ot.matrixWorld,et.matrix),et.matrixWorldInverse.copy(et.matrixWorld).invert()}this.updateCamera=function(et){if(l===null)return;let ot=et.near,wt=et.far;M.texture!==null&&(M.depthNear>0&&(ot=M.depthNear),M.depthFar>0&&(wt=M.depthFar)),nt.near=C.near=w.near=ot,nt.far=C.far=w.far=wt,(ut!==nt.near||gt!==nt.far)&&(l.updateRenderState({depthNear:nt.near,depthFar:nt.far}),ut=nt.near,gt=nt.far),nt.layers.mask=et.layers.mask|6,w.layers.mask=nt.layers.mask&3,C.layers.mask=nt.layers.mask&5;const Bt=et.parent,Xt=nt.cameras;L(nt,Bt);for(let fe=0;fe<Xt.length;fe++)L(Xt[fe],Bt);Xt.length===2?yt(nt,w,C):nt.projectionMatrix.copy(w.projectionMatrix),tt(et,nt,Bt)};function tt(et,ot,wt){wt===null?et.matrix.copy(ot.matrixWorld):(et.matrix.copy(wt.matrixWorld),et.matrix.invert(),et.matrix.multiply(ot.matrixWorld)),et.matrix.decompose(et.position,et.quaternion,et.scale),et.updateMatrixWorld(!0),et.projectionMatrix.copy(ot.projectionMatrix),et.projectionMatrixInverse.copy(ot.projectionMatrixInverse),et.isPerspectiveCamera&&(et.fov=id*2*Math.atan(1/et.projectionMatrix.elements[5]),et.zoom=1)}this.getCamera=function(){return nt},this.getFoveation=function(){if(!(x===null&&y===null))return m},this.setFoveation=function(et){m=et,x!==null&&(x.fixedFoveation=et),y!==null&&y.fixedFoveation!==void 0&&(y.fixedFoveation=et)},this.hasDepthSensing=function(){return M.texture!==null},this.getDepthSensingMesh=function(){return M.getMesh(nt)},this.getCameraTexture=function(et){return v[et]};let xt=null;function bt(et,ot){if(S=ot.getViewerPose(p||h),A=ot,S!==null){const wt=S.views;y!==null&&(e.setRenderTargetFramebuffer(D,y.framebuffer),e.setRenderTarget(D));let Bt=!1;wt.length!==nt.cameras.length&&(nt.cameras.length=0,Bt=!0);for(let B=0;B<wt.length;B++){const Ee=wt[B];let ne=null;if(y!==null)ne=y.getViewport(Ee);else{const kt=_.getViewSubImage(x,Ee);ne=kt.viewport,B===0&&(e.setRenderTargetTextures(D,kt.colorTexture,kt.depthStencilTexture),e.setRenderTarget(D))}let $t=G[B];$t===void 0&&($t=new li,$t.layers.enable(B),$t.viewport=new $e,G[B]=$t),$t.matrix.fromArray(Ee.transform.matrix),$t.matrix.decompose($t.position,$t.quaternion,$t.scale),$t.projectionMatrix.fromArray(Ee.projectionMatrix),$t.projectionMatrixInverse.copy($t.projectionMatrix).invert(),$t.viewport.set(ne.x,ne.y,ne.width,ne.height),B===0&&(nt.matrix.copy($t.matrix),nt.matrix.decompose(nt.position,nt.quaternion,nt.scale)),Bt===!0&&nt.cameras.push($t)}const Xt=l.enabledFeatures;if(Xt&&Xt.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&R){_=r.getBinding();const B=_.getDepthInformation(wt[0]);B&&B.isValid&&B.texture&&M.init(B,l.renderState)}if(Xt&&Xt.includes("camera-access")&&R){e.state.unbindTexture(),_=r.getBinding();for(let B=0;B<wt.length;B++){const Ee=wt[B].camera;if(Ee){let ne=v[Ee];ne||(ne=new R0,v[Ee]=ne);const $t=_.getCameraImage(Ee);ne.sourceTexture=$t}}}}for(let wt=0;wt<X.length;wt++){const Bt=H[wt],Xt=X[wt];Bt!==null&&Xt!==void 0&&Xt.update(Bt,ot,p||h)}xt&&xt(et,ot),ot.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:ot}),A=null}const Nt=new C0;Nt.setAnimationLoop(bt),this.setAnimationLoop=function(et){xt=et},this.dispose=function(){}}}const ur=new ia,J1=new cn;function $1(o,e){function i(M,v){M.matrixAutoUpdate===!0&&M.updateMatrix(),v.value.copy(M.matrix)}function r(M,v){v.color.getRGB(M.fogColor.value,y0(o)),v.isFog?(M.fogNear.value=v.near,M.fogFar.value=v.far):v.isFogExp2&&(M.fogDensity.value=v.density)}function l(M,v,I,z,D){v.isMeshBasicMaterial||v.isMeshLambertMaterial?c(M,v):v.isMeshToonMaterial?(c(M,v),_(M,v)):v.isMeshPhongMaterial?(c(M,v),S(M,v)):v.isMeshStandardMaterial?(c(M,v),x(M,v),v.isMeshPhysicalMaterial&&y(M,v,D)):v.isMeshMatcapMaterial?(c(M,v),A(M,v)):v.isMeshDepthMaterial?c(M,v):v.isMeshDistanceMaterial?(c(M,v),R(M,v)):v.isMeshNormalMaterial?c(M,v):v.isLineBasicMaterial?(h(M,v),v.isLineDashedMaterial&&d(M,v)):v.isPointsMaterial?m(M,v,I,z):v.isSpriteMaterial?p(M,v):v.isShadowMaterial?(M.color.value.copy(v.color),M.opacity.value=v.opacity):v.isShaderMaterial&&(v.uniformsNeedUpdate=!1)}function c(M,v){M.opacity.value=v.opacity,v.color&&M.diffuse.value.copy(v.color),v.emissive&&M.emissive.value.copy(v.emissive).multiplyScalar(v.emissiveIntensity),v.map&&(M.map.value=v.map,i(v.map,M.mapTransform)),v.alphaMap&&(M.alphaMap.value=v.alphaMap,i(v.alphaMap,M.alphaMapTransform)),v.bumpMap&&(M.bumpMap.value=v.bumpMap,i(v.bumpMap,M.bumpMapTransform),M.bumpScale.value=v.bumpScale,v.side===Fn&&(M.bumpScale.value*=-1)),v.normalMap&&(M.normalMap.value=v.normalMap,i(v.normalMap,M.normalMapTransform),M.normalScale.value.copy(v.normalScale),v.side===Fn&&M.normalScale.value.negate()),v.displacementMap&&(M.displacementMap.value=v.displacementMap,i(v.displacementMap,M.displacementMapTransform),M.displacementScale.value=v.displacementScale,M.displacementBias.value=v.displacementBias),v.emissiveMap&&(M.emissiveMap.value=v.emissiveMap,i(v.emissiveMap,M.emissiveMapTransform)),v.specularMap&&(M.specularMap.value=v.specularMap,i(v.specularMap,M.specularMapTransform)),v.alphaTest>0&&(M.alphaTest.value=v.alphaTest);const I=e.get(v),z=I.envMap,D=I.envMapRotation;z&&(M.envMap.value=z,ur.copy(D),ur.x*=-1,ur.y*=-1,ur.z*=-1,z.isCubeTexture&&z.isRenderTargetTexture===!1&&(ur.y*=-1,ur.z*=-1),M.envMapRotation.value.setFromMatrix4(J1.makeRotationFromEuler(ur)),M.flipEnvMap.value=z.isCubeTexture&&z.isRenderTargetTexture===!1?-1:1,M.reflectivity.value=v.reflectivity,M.ior.value=v.ior,M.refractionRatio.value=v.refractionRatio),v.lightMap&&(M.lightMap.value=v.lightMap,M.lightMapIntensity.value=v.lightMapIntensity,i(v.lightMap,M.lightMapTransform)),v.aoMap&&(M.aoMap.value=v.aoMap,M.aoMapIntensity.value=v.aoMapIntensity,i(v.aoMap,M.aoMapTransform))}function h(M,v){M.diffuse.value.copy(v.color),M.opacity.value=v.opacity,v.map&&(M.map.value=v.map,i(v.map,M.mapTransform))}function d(M,v){M.dashSize.value=v.dashSize,M.totalSize.value=v.dashSize+v.gapSize,M.scale.value=v.scale}function m(M,v,I,z){M.diffuse.value.copy(v.color),M.opacity.value=v.opacity,M.size.value=v.size*I,M.scale.value=z*.5,v.map&&(M.map.value=v.map,i(v.map,M.uvTransform)),v.alphaMap&&(M.alphaMap.value=v.alphaMap,i(v.alphaMap,M.alphaMapTransform)),v.alphaTest>0&&(M.alphaTest.value=v.alphaTest)}function p(M,v){M.diffuse.value.copy(v.color),M.opacity.value=v.opacity,M.rotation.value=v.rotation,v.map&&(M.map.value=v.map,i(v.map,M.mapTransform)),v.alphaMap&&(M.alphaMap.value=v.alphaMap,i(v.alphaMap,M.alphaMapTransform)),v.alphaTest>0&&(M.alphaTest.value=v.alphaTest)}function S(M,v){M.specular.value.copy(v.specular),M.shininess.value=Math.max(v.shininess,1e-4)}function _(M,v){v.gradientMap&&(M.gradientMap.value=v.gradientMap)}function x(M,v){M.metalness.value=v.metalness,v.metalnessMap&&(M.metalnessMap.value=v.metalnessMap,i(v.metalnessMap,M.metalnessMapTransform)),M.roughness.value=v.roughness,v.roughnessMap&&(M.roughnessMap.value=v.roughnessMap,i(v.roughnessMap,M.roughnessMapTransform)),v.envMap&&(M.envMapIntensity.value=v.envMapIntensity)}function y(M,v,I){M.ior.value=v.ior,v.sheen>0&&(M.sheenColor.value.copy(v.sheenColor).multiplyScalar(v.sheen),M.sheenRoughness.value=v.sheenRoughness,v.sheenColorMap&&(M.sheenColorMap.value=v.sheenColorMap,i(v.sheenColorMap,M.sheenColorMapTransform)),v.sheenRoughnessMap&&(M.sheenRoughnessMap.value=v.sheenRoughnessMap,i(v.sheenRoughnessMap,M.sheenRoughnessMapTransform))),v.clearcoat>0&&(M.clearcoat.value=v.clearcoat,M.clearcoatRoughness.value=v.clearcoatRoughness,v.clearcoatMap&&(M.clearcoatMap.value=v.clearcoatMap,i(v.clearcoatMap,M.clearcoatMapTransform)),v.clearcoatRoughnessMap&&(M.clearcoatRoughnessMap.value=v.clearcoatRoughnessMap,i(v.clearcoatRoughnessMap,M.clearcoatRoughnessMapTransform)),v.clearcoatNormalMap&&(M.clearcoatNormalMap.value=v.clearcoatNormalMap,i(v.clearcoatNormalMap,M.clearcoatNormalMapTransform),M.clearcoatNormalScale.value.copy(v.clearcoatNormalScale),v.side===Fn&&M.clearcoatNormalScale.value.negate())),v.dispersion>0&&(M.dispersion.value=v.dispersion),v.iridescence>0&&(M.iridescence.value=v.iridescence,M.iridescenceIOR.value=v.iridescenceIOR,M.iridescenceThicknessMinimum.value=v.iridescenceThicknessRange[0],M.iridescenceThicknessMaximum.value=v.iridescenceThicknessRange[1],v.iridescenceMap&&(M.iridescenceMap.value=v.iridescenceMap,i(v.iridescenceMap,M.iridescenceMapTransform)),v.iridescenceThicknessMap&&(M.iridescenceThicknessMap.value=v.iridescenceThicknessMap,i(v.iridescenceThicknessMap,M.iridescenceThicknessMapTransform))),v.transmission>0&&(M.transmission.value=v.transmission,M.transmissionSamplerMap.value=I.texture,M.transmissionSamplerSize.value.set(I.width,I.height),v.transmissionMap&&(M.transmissionMap.value=v.transmissionMap,i(v.transmissionMap,M.transmissionMapTransform)),M.thickness.value=v.thickness,v.thicknessMap&&(M.thicknessMap.value=v.thicknessMap,i(v.thicknessMap,M.thicknessMapTransform)),M.attenuationDistance.value=v.attenuationDistance,M.attenuationColor.value.copy(v.attenuationColor)),v.anisotropy>0&&(M.anisotropyVector.value.set(v.anisotropy*Math.cos(v.anisotropyRotation),v.anisotropy*Math.sin(v.anisotropyRotation)),v.anisotropyMap&&(M.anisotropyMap.value=v.anisotropyMap,i(v.anisotropyMap,M.anisotropyMapTransform))),M.specularIntensity.value=v.specularIntensity,M.specularColor.value.copy(v.specularColor),v.specularColorMap&&(M.specularColorMap.value=v.specularColorMap,i(v.specularColorMap,M.specularColorMapTransform)),v.specularIntensityMap&&(M.specularIntensityMap.value=v.specularIntensityMap,i(v.specularIntensityMap,M.specularIntensityMapTransform))}function A(M,v){v.matcap&&(M.matcap.value=v.matcap)}function R(M,v){const I=e.get(v).light;M.referencePosition.value.setFromMatrixPosition(I.matrixWorld),M.nearDistance.value=I.shadow.camera.near,M.farDistance.value=I.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:l}}function tb(o,e,i,r){let l={},c={},h=[];const d=o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS);function m(I,z){const D=z.program;r.uniformBlockBinding(I,D)}function p(I,z){let D=l[I.id];D===void 0&&(A(I),D=S(I),l[I.id]=D,I.addEventListener("dispose",M));const X=z.program;r.updateUBOMapping(I,X);const H=e.render.frame;c[I.id]!==H&&(x(I),c[I.id]=H)}function S(I){const z=_();I.__bindingPointIndex=z;const D=o.createBuffer(),X=I.__size,H=I.usage;return o.bindBuffer(o.UNIFORM_BUFFER,D),o.bufferData(o.UNIFORM_BUFFER,X,H),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,z,D),D}function _(){for(let I=0;I<d;I++)if(h.indexOf(I)===-1)return h.push(I),I;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function x(I){const z=l[I.id],D=I.uniforms,X=I.__cache;o.bindBuffer(o.UNIFORM_BUFFER,z);for(let H=0,P=D.length;H<P;H++){const j=Array.isArray(D[H])?D[H]:[D[H]];for(let w=0,C=j.length;w<C;w++){const G=j[w];if(y(G,H,w,X)===!0){const nt=G.__offset,ut=Array.isArray(G.value)?G.value:[G.value];let gt=0;for(let ft=0;ft<ut.length;ft++){const N=ut[ft],Z=R(N);typeof N=="number"||typeof N=="boolean"?(G.__data[0]=N,o.bufferSubData(o.UNIFORM_BUFFER,nt+gt,G.__data)):N.isMatrix3?(G.__data[0]=N.elements[0],G.__data[1]=N.elements[1],G.__data[2]=N.elements[2],G.__data[3]=0,G.__data[4]=N.elements[3],G.__data[5]=N.elements[4],G.__data[6]=N.elements[5],G.__data[7]=0,G.__data[8]=N.elements[6],G.__data[9]=N.elements[7],G.__data[10]=N.elements[8],G.__data[11]=0):(N.toArray(G.__data,gt),gt+=Z.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(o.UNIFORM_BUFFER,nt,G.__data)}}}o.bindBuffer(o.UNIFORM_BUFFER,null)}function y(I,z,D,X){const H=I.value,P=z+"_"+D;if(X[P]===void 0)return typeof H=="number"||typeof H=="boolean"?X[P]=H:X[P]=H.clone(),!0;{const j=X[P];if(typeof H=="number"||typeof H=="boolean"){if(j!==H)return X[P]=H,!0}else if(j.equals(H)===!1)return j.copy(H),!0}return!1}function A(I){const z=I.uniforms;let D=0;const X=16;for(let P=0,j=z.length;P<j;P++){const w=Array.isArray(z[P])?z[P]:[z[P]];for(let C=0,G=w.length;C<G;C++){const nt=w[C],ut=Array.isArray(nt.value)?nt.value:[nt.value];for(let gt=0,ft=ut.length;gt<ft;gt++){const N=ut[gt],Z=R(N),Y=D%X,vt=Y%Z.boundary,yt=Y+vt;D+=vt,yt!==0&&X-yt<Z.storage&&(D+=X-yt),nt.__data=new Float32Array(Z.storage/Float32Array.BYTES_PER_ELEMENT),nt.__offset=D,D+=Z.storage}}}const H=D%X;return H>0&&(D+=X-H),I.__size=D,I.__cache={},this}function R(I){const z={boundary:0,storage:0};return typeof I=="number"||typeof I=="boolean"?(z.boundary=4,z.storage=4):I.isVector2?(z.boundary=8,z.storage=8):I.isVector3||I.isColor?(z.boundary=16,z.storage=12):I.isVector4?(z.boundary=16,z.storage=16):I.isMatrix3?(z.boundary=48,z.storage=48):I.isMatrix4?(z.boundary=64,z.storage=64):I.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",I),z}function M(I){const z=I.target;z.removeEventListener("dispose",M);const D=h.indexOf(z.__bindingPointIndex);h.splice(D,1),o.deleteBuffer(l[z.id]),delete l[z.id],delete c[z.id]}function v(){for(const I in l)o.deleteBuffer(l[I]);h=[],l={},c={}}return{bind:m,update:p,dispose:v}}class eb{constructor(e={}){const{canvas:i=Bx(),context:r=null,depth:l=!0,stencil:c=!1,alpha:h=!1,antialias:d=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:p=!1,powerPreference:S="default",failIfMajorPerformanceCaveat:_=!1,reversedDepthBuffer:x=!1}=e;this.isWebGLRenderer=!0;let y;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");y=r.getContextAttributes().alpha}else y=h;const A=new Uint32Array(4),R=new Int32Array(4);let M=null,v=null;const I=[],z=[];this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ba,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const D=this;let X=!1;this._outputColorSpace=oi;let H=0,P=0,j=null,w=-1,C=null;const G=new $e,nt=new $e;let ut=null;const gt=new Be(0);let ft=0,N=i.width,Z=i.height,Y=1,vt=null,yt=null;const L=new $e(0,0,N,Z),tt=new $e(0,0,N,Z);let xt=!1;const bt=new b0;let Nt=!1,et=!1;const ot=new cn,wt=new st,Bt=new $e,Xt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let fe=!1;function tn(){return j===null?Y:1}let B=r;function Ee(b,k){return i.getContext(b,k)}try{const b={alpha:!0,depth:l,stencil:c,antialias:d,premultipliedAlpha:m,preserveDrawingBuffer:p,powerPreference:S,failIfMajorPerformanceCaveat:_};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${sd}`),i.addEventListener("webglcontextlost",Ct,!1),i.addEventListener("webglcontextrestored",Pt,!1),i.addEventListener("webglcontextcreationerror",Mt,!1),B===null){const k="webgl2";if(B=Ee(k,b),B===null)throw Ee(k)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let ne,$t,kt,Fe,Vt,ae,Ye,qe,U,E,J,ht,St,lt,Zt,At,qt,Yt,Et,Rt,jt,zt,Dt,se;function V(){ne=new fT(B),ne.init(),zt=new Y1(B,ne),$t=new aT(B,ne,e,zt),kt=new W1(B,ne),$t.reversedDepthBuffer&&x&&kt.buffers.depth.setReversed(!0),Fe=new pT(B),Vt=new L1,ae=new q1(B,ne,kt,Vt,$t,zt,Fe),Ye=new sT(D),qe=new cT(D),U=new xM(B),Dt=new nT(B,U),E=new hT(B,U,Fe,Dt),J=new gT(B,E,U,Fe),Et=new mT(B,$t,ae),At=new rT(Vt),ht=new U1(D,Ye,qe,ne,$t,Dt,At),St=new $1(D,Vt),lt=new O1,Zt=new H1(ne),Yt=new eT(D,Ye,qe,kt,J,y,m),qt=new X1(D,J,$t),se=new tb(B,Fe,$t,kt),Rt=new iT(B,ne,Fe),jt=new dT(B,ne,Fe),Fe.programs=ht.programs,D.capabilities=$t,D.extensions=ne,D.properties=Vt,D.renderLists=lt,D.shadowMap=qt,D.state=kt,D.info=Fe}V();const Tt=new Q1(D,B);this.xr=Tt,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){const b=ne.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=ne.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return Y},this.setPixelRatio=function(b){b!==void 0&&(Y=b,this.setSize(N,Z,!1))},this.getSize=function(b){return b.set(N,Z)},this.setSize=function(b,k,it=!0){if(Tt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}N=b,Z=k,i.width=Math.floor(b*Y),i.height=Math.floor(k*Y),it===!0&&(i.style.width=b+"px",i.style.height=k+"px"),this.setViewport(0,0,b,k)},this.getDrawingBufferSize=function(b){return b.set(N*Y,Z*Y).floor()},this.setDrawingBufferSize=function(b,k,it){N=b,Z=k,Y=it,i.width=Math.floor(b*it),i.height=Math.floor(k*it),this.setViewport(0,0,b,k)},this.getCurrentViewport=function(b){return b.copy(G)},this.getViewport=function(b){return b.copy(L)},this.setViewport=function(b,k,it,at){b.isVector4?L.set(b.x,b.y,b.z,b.w):L.set(b,k,it,at),kt.viewport(G.copy(L).multiplyScalar(Y).round())},this.getScissor=function(b){return b.copy(tt)},this.setScissor=function(b,k,it,at){b.isVector4?tt.set(b.x,b.y,b.z,b.w):tt.set(b,k,it,at),kt.scissor(nt.copy(tt).multiplyScalar(Y).round())},this.getScissorTest=function(){return xt},this.setScissorTest=function(b){kt.setScissorTest(xt=b)},this.setOpaqueSort=function(b){vt=b},this.setTransparentSort=function(b){yt=b},this.getClearColor=function(b){return b.copy(Yt.getClearColor())},this.setClearColor=function(){Yt.setClearColor(...arguments)},this.getClearAlpha=function(){return Yt.getClearAlpha()},this.setClearAlpha=function(){Yt.setClearAlpha(...arguments)},this.clear=function(b=!0,k=!0,it=!0){let at=0;if(b){let q=!1;if(j!==null){const _t=j.texture.format;q=_t===hd||_t===fd||_t===cd}if(q){const _t=j.texture.type,Ut=_t===na||_t===_r||_t===bo||_t===Ao||_t===ld||_t===ud,Ht=Yt.getClearColor(),Ot=Yt.getClearAlpha(),Kt=Ht.r,ee=Ht.g,Qt=Ht.b;Ut?(A[0]=Kt,A[1]=ee,A[2]=Qt,A[3]=Ot,B.clearBufferuiv(B.COLOR,0,A)):(R[0]=Kt,R[1]=ee,R[2]=Qt,R[3]=Ot,B.clearBufferiv(B.COLOR,0,R))}else at|=B.COLOR_BUFFER_BIT}k&&(at|=B.DEPTH_BUFFER_BIT),it&&(at|=B.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),B.clear(at)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",Ct,!1),i.removeEventListener("webglcontextrestored",Pt,!1),i.removeEventListener("webglcontextcreationerror",Mt,!1),Yt.dispose(),lt.dispose(),Zt.dispose(),Vt.dispose(),Ye.dispose(),qe.dispose(),J.dispose(),Dt.dispose(),se.dispose(),ht.dispose(),Tt.dispose(),Tt.removeEventListener("sessionstart",Qn),Tt.removeEventListener("sessionend",As),vi.stop()};function Ct(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),X=!0}function Pt(){console.log("THREE.WebGLRenderer: Context Restored."),X=!1;const b=Fe.autoReset,k=qt.enabled,it=qt.autoUpdate,at=qt.needsUpdate,q=qt.type;V(),Fe.autoReset=b,qt.enabled=k,qt.autoUpdate=it,qt.needsUpdate=at,qt.type=q}function Mt(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function mt(b){const k=b.target;k.removeEventListener("dispose",mt),It(k)}function It(b){ie(b),Vt.remove(b)}function ie(b){const k=Vt.get(b).programs;k!==void 0&&(k.forEach(function(it){ht.releaseProgram(it)}),b.isShaderMaterial&&ht.releaseShaderCache(b))}this.renderBufferDirect=function(b,k,it,at,q,_t){k===null&&(k=Xt);const Ut=q.isMesh&&q.matrixWorld.determinant()<0,Ht=ra(b,k,it,at,q);kt.setMaterial(at,Ut);let Ot=it.index,Kt=1;if(at.wireframe===!0){if(Ot=E.getWireframeAttribute(it),Ot===void 0)return;Kt=2}const ee=it.drawRange,Qt=it.attributes.position;let he=ee.start*Kt,Ce=(ee.start+ee.count)*Kt;_t!==null&&(he=Math.max(he,_t.start*Kt),Ce=Math.min(Ce,(_t.start+_t.count)*Kt)),Ot!==null?(he=Math.max(he,0),Ce=Math.min(Ce,Ot.count)):Qt!=null&&(he=Math.max(he,0),Ce=Math.min(Ce,Qt.count));const He=Ce-he;if(He<0||He===1/0)return;Dt.setup(q,at,Ht,it,Ot);let we,de=Rt;if(Ot!==null&&(we=U.get(Ot),de=jt,de.setIndex(we)),q.isMesh)at.wireframe===!0?(kt.setLineWidth(at.wireframeLinewidth*tn()),de.setMode(B.LINES)):de.setMode(B.TRIANGLES);else if(q.isLine){let Gt=at.linewidth;Gt===void 0&&(Gt=1),kt.setLineWidth(Gt*tn()),q.isLineSegments?de.setMode(B.LINES):q.isLineLoop?de.setMode(B.LINE_LOOP):de.setMode(B.LINE_STRIP)}else q.isPoints?de.setMode(B.POINTS):q.isSprite&&de.setMode(B.TRIANGLES);if(q.isBatchedMesh)if(q._multiDrawInstances!==null)wo("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),de.renderMultiDrawInstances(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount,q._multiDrawInstances);else if(ne.get("WEBGL_multi_draw"))de.renderMultiDraw(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount);else{const Gt=q._multiDrawStarts,Ve=q._multiDrawCounts,ye=q._multiDrawCount,_n=Ot?U.get(Ot).bytesPerElement:1,wi=Vt.get(at).currentProgram.getUniforms();for(let dn=0;dn<ye;dn++)wi.setValue(B,"_gl_DrawID",dn),de.render(Gt[dn]/_n,Ve[dn])}else if(q.isInstancedMesh)de.renderInstances(he,He,q.count);else if(it.isInstancedBufferGeometry){const Gt=it._maxInstanceCount!==void 0?it._maxInstanceCount:1/0,Ve=Math.min(it.instanceCount,Gt);de.renderInstances(he,He,Ve)}else de.render(he,He)};function De(b,k,it){b.transparent===!0&&b.side===$i&&b.forceSinglePass===!1?(b.side=Fn,b.needsUpdate=!0,Hn(b,k,it),b.side=Ia,b.needsUpdate=!0,Hn(b,k,it),b.side=$i):Hn(b,k,it)}this.compile=function(b,k,it=null){it===null&&(it=b),v=Zt.get(it),v.init(k),z.push(v),it.traverseVisible(function(q){q.isLight&&q.layers.test(k.layers)&&(v.pushLight(q),q.castShadow&&v.pushShadow(q))}),b!==it&&b.traverseVisible(function(q){q.isLight&&q.layers.test(k.layers)&&(v.pushLight(q),q.castShadow&&v.pushShadow(q))}),v.setupLights();const at=new Set;return b.traverse(function(q){if(!(q.isMesh||q.isPoints||q.isLine||q.isSprite))return;const _t=q.material;if(_t)if(Array.isArray(_t))for(let Ut=0;Ut<_t.length;Ut++){const Ht=_t[Ut];De(Ht,it,q),at.add(Ht)}else De(_t,it,q),at.add(_t)}),v=z.pop(),at},this.compileAsync=function(b,k,it=null){const at=this.compile(b,k,it);return new Promise(q=>{function _t(){if(at.forEach(function(Ut){Vt.get(Ut).currentProgram.isReady()&&at.delete(Ut)}),at.size===0){q(b);return}setTimeout(_t,10)}ne.get("KHR_parallel_shader_compile")!==null?_t():setTimeout(_t,10)})};let Me=null;function An(b){Me&&Me(b)}function Qn(){vi.stop()}function As(){vi.start()}const vi=new C0;vi.setAnimationLoop(An),typeof self<"u"&&vi.setContext(self),this.setAnimationLoop=function(b){Me=b,Tt.setAnimationLoop(b),b===null?vi.stop():vi.start()},Tt.addEventListener("sessionstart",Qn),Tt.addEventListener("sessionend",As),this.render=function(b,k){if(k!==void 0&&k.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(X===!0)return;if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),Tt.enabled===!0&&Tt.isPresenting===!0&&(Tt.cameraAutoUpdate===!0&&Tt.updateCamera(k),k=Tt.getCamera()),b.isScene===!0&&b.onBeforeRender(D,b,k,j),v=Zt.get(b,z.length),v.init(k),z.push(v),ot.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),bt.setFromProjectionMatrix(ot,Ai,k.reversedDepth),et=this.localClippingEnabled,Nt=At.init(this.clippingPlanes,et),M=lt.get(b,I.length),M.init(),I.push(M),Tt.enabled===!0&&Tt.isPresenting===!0){const _t=D.xr.getDepthSensingMesh();_t!==null&&xr(_t,k,-1/0,D.sortObjects)}xr(b,k,0,D.sortObjects),M.finish(),D.sortObjects===!0&&M.sort(vt,yt),fe=Tt.enabled===!1||Tt.isPresenting===!1||Tt.hasDepthSensing()===!1,fe&&Yt.addToRenderList(M,b),this.info.render.frame++,Nt===!0&&At.beginShadows();const it=v.state.shadowsArray;qt.render(it,b,k),Nt===!0&&At.endShadows(),this.info.autoReset===!0&&this.info.reset();const at=M.opaque,q=M.transmissive;if(v.setupLights(),k.isArrayCamera){const _t=k.cameras;if(q.length>0)for(let Ut=0,Ht=_t.length;Ut<Ht;Ut++){const Ot=_t[Ut];yr(at,q,b,Ot)}fe&&Yt.render(b);for(let Ut=0,Ht=_t.length;Ut<Ht;Ut++){const Ot=_t[Ut];Mr(M,b,Ot,Ot.viewport)}}else q.length>0&&yr(at,q,b,k),fe&&Yt.render(b),Mr(M,b,k);j!==null&&P===0&&(ae.updateMultisampleRenderTarget(j),ae.updateRenderTargetMipmap(j)),b.isScene===!0&&b.onAfterRender(D,b,k),Dt.resetDefaultState(),w=-1,C=null,z.pop(),z.length>0?(v=z[z.length-1],Nt===!0&&At.setGlobalState(D.clippingPlanes,v.state.camera)):v=null,I.pop(),I.length>0?M=I[I.length-1]:M=null};function xr(b,k,it,at){if(b.visible===!1)return;if(b.layers.test(k.layers)){if(b.isGroup)it=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(k);else if(b.isLight)v.pushLight(b),b.castShadow&&v.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||bt.intersectsSprite(b)){at&&Bt.setFromMatrixPosition(b.matrixWorld).applyMatrix4(ot);const Ut=J.update(b),Ht=b.material;Ht.visible&&M.push(b,Ut,Ht,it,Bt.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||bt.intersectsObject(b))){const Ut=J.update(b),Ht=b.material;if(at&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),Bt.copy(b.boundingSphere.center)):(Ut.boundingSphere===null&&Ut.computeBoundingSphere(),Bt.copy(Ut.boundingSphere.center)),Bt.applyMatrix4(b.matrixWorld).applyMatrix4(ot)),Array.isArray(Ht)){const Ot=Ut.groups;for(let Kt=0,ee=Ot.length;Kt<ee;Kt++){const Qt=Ot[Kt],he=Ht[Qt.materialIndex];he&&he.visible&&M.push(b,Ut,he,it,Bt.z,Qt)}}else Ht.visible&&M.push(b,Ut,Ht,it,Bt.z,null)}}const _t=b.children;for(let Ut=0,Ht=_t.length;Ut<Ht;Ut++)xr(_t[Ut],k,it,at)}function Mr(b,k,it,at){const q=b.opaque,_t=b.transmissive,Ut=b.transparent;v.setupLightsView(it),Nt===!0&&At.setGlobalState(D.clippingPlanes,it),at&&kt.viewport(G.copy(at)),q.length>0&&Fa(q,k,it),_t.length>0&&Fa(_t,k,it),Ut.length>0&&Fa(Ut,k,it),kt.buffers.depth.setTest(!0),kt.buffers.depth.setMask(!0),kt.buffers.color.setMask(!0),kt.setPolygonOffset(!1)}function yr(b,k,it,at){if((it.isScene===!0?it.overrideMaterial:null)!==null)return;v.state.transmissionRenderTarget[at.id]===void 0&&(v.state.transmissionRenderTarget[at.id]=new vr(1,1,{generateMipmaps:!0,type:ne.has("EXT_color_buffer_half_float")||ne.has("EXT_color_buffer_float")?Do:na,minFilter:mr,samples:4,stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ae.workingColorSpace}));const _t=v.state.transmissionRenderTarget[at.id],Ut=at.viewport||G;_t.setSize(Ut.z*D.transmissionResolutionScale,Ut.w*D.transmissionResolutionScale);const Ht=D.getRenderTarget(),Ot=D.getActiveCubeFace(),Kt=D.getActiveMipmapLevel();D.setRenderTarget(_t),D.getClearColor(gt),ft=D.getClearAlpha(),ft<1&&D.setClearColor(16777215,.5),D.clear(),fe&&Yt.render(it);const ee=D.toneMapping;D.toneMapping=Ba;const Qt=at.viewport;if(at.viewport!==void 0&&(at.viewport=void 0),v.setupLightsView(at),Nt===!0&&At.setGlobalState(D.clippingPlanes,at),Fa(b,it,at),ae.updateMultisampleRenderTarget(_t),ae.updateRenderTargetMipmap(_t),ne.has("WEBGL_multisampled_render_to_texture")===!1){let he=!1;for(let Ce=0,He=k.length;Ce<He;Ce++){const we=k[Ce],de=we.object,Gt=we.geometry,Ve=we.material,ye=we.group;if(Ve.side===$i&&de.layers.test(at.layers)){const _n=Ve.side;Ve.side=Fn,Ve.needsUpdate=!0,Rs(de,it,at,Gt,Ve,ye),Ve.side=_n,Ve.needsUpdate=!0,he=!0}}he===!0&&(ae.updateMultisampleRenderTarget(_t),ae.updateRenderTargetMipmap(_t))}D.setRenderTarget(Ht,Ot,Kt),D.setClearColor(gt,ft),Qt!==void 0&&(at.viewport=Qt),D.toneMapping=ee}function Fa(b,k,it){const at=k.isScene===!0?k.overrideMaterial:null;for(let q=0,_t=b.length;q<_t;q++){const Ut=b[q],Ht=Ut.object,Ot=Ut.geometry,Kt=Ut.group;let ee=Ut.material;ee.allowOverride===!0&&at!==null&&(ee=at),Ht.layers.test(it.layers)&&Rs(Ht,k,it,Ot,ee,Kt)}}function Rs(b,k,it,at,q,_t){b.onBeforeRender(D,k,it,at,q,_t),b.modelViewMatrix.multiplyMatrices(it.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),q.onBeforeRender(D,k,it,at,b,_t),q.transparent===!0&&q.side===$i&&q.forceSinglePass===!1?(q.side=Fn,q.needsUpdate=!0,D.renderBufferDirect(it,k,at,q,b,_t),q.side=Ia,q.needsUpdate=!0,D.renderBufferDirect(it,k,at,q,b,_t),q.side=$i):D.renderBufferDirect(it,k,at,q,b,_t),b.onAfterRender(D,k,it,at,q,_t)}function Hn(b,k,it){k.isScene!==!0&&(k=Xt);const at=Vt.get(b),q=v.state.lights,_t=v.state.shadowsArray,Ut=q.state.version,Ht=ht.getParameters(b,q.state,_t,k,it),Ot=ht.getProgramCacheKey(Ht);let Kt=at.programs;at.environment=b.isMeshStandardMaterial?k.environment:null,at.fog=k.fog,at.envMap=(b.isMeshStandardMaterial?qe:Ye).get(b.envMap||at.environment),at.envMapRotation=at.environment!==null&&b.envMap===null?k.environmentRotation:b.envMapRotation,Kt===void 0&&(b.addEventListener("dispose",mt),Kt=new Map,at.programs=Kt);let ee=Kt.get(Ot);if(ee!==void 0){if(at.currentProgram===ee&&at.lightsStateVersion===Ut)return gn(b,Ht),ee}else Ht.uniforms=ht.getUniforms(b),b.onBeforeCompile(Ht,D),ee=ht.acquireProgram(Ht,Ot),Kt.set(Ot,ee),at.uniforms=Ht.uniforms;const Qt=at.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Qt.clippingPlanes=At.uniform),gn(b,Ht),at.needsLights=Au(b),at.lightsStateVersion=Ut,at.needsLights&&(Qt.ambientLightColor.value=q.state.ambient,Qt.lightProbe.value=q.state.probe,Qt.directionalLights.value=q.state.directional,Qt.directionalLightShadows.value=q.state.directionalShadow,Qt.spotLights.value=q.state.spot,Qt.spotLightShadows.value=q.state.spotShadow,Qt.rectAreaLights.value=q.state.rectArea,Qt.ltc_1.value=q.state.rectAreaLTC1,Qt.ltc_2.value=q.state.rectAreaLTC2,Qt.pointLights.value=q.state.point,Qt.pointLightShadows.value=q.state.pointShadow,Qt.hemisphereLights.value=q.state.hemi,Qt.directionalShadowMap.value=q.state.directionalShadowMap,Qt.directionalShadowMatrix.value=q.state.directionalShadowMatrix,Qt.spotShadowMap.value=q.state.spotShadowMap,Qt.spotLightMatrix.value=q.state.spotLightMatrix,Qt.spotLightMap.value=q.state.spotLightMap,Qt.pointShadowMap.value=q.state.pointShadowMap,Qt.pointShadowMatrix.value=q.state.pointShadowMatrix),at.currentProgram=ee,at.uniformsList=null,ee}function en(b){if(b.uniformsList===null){const k=b.currentProgram.getUniforms();b.uniformsList=Su.seqWithValue(k.seq,b.uniforms)}return b.uniformsList}function gn(b,k){const it=Vt.get(b);it.outputColorSpace=k.outputColorSpace,it.batching=k.batching,it.batchingColor=k.batchingColor,it.instancing=k.instancing,it.instancingColor=k.instancingColor,it.instancingMorph=k.instancingMorph,it.skinning=k.skinning,it.morphTargets=k.morphTargets,it.morphNormals=k.morphNormals,it.morphColors=k.morphColors,it.morphTargetsCount=k.morphTargetsCount,it.numClippingPlanes=k.numClippingPlanes,it.numIntersection=k.numClipIntersection,it.vertexAlphas=k.vertexAlphas,it.vertexTangents=k.vertexTangents,it.toneMapping=k.toneMapping}function ra(b,k,it,at,q){k.isScene!==!0&&(k=Xt),ae.resetTextureUnits();const _t=k.fog,Ut=at.isMeshStandardMaterial?k.environment:null,Ht=j===null?D.outputColorSpace:j.isXRRenderTarget===!0?j.texture.colorSpace:ys,Ot=(at.isMeshStandardMaterial?qe:Ye).get(at.envMap||Ut),Kt=at.vertexColors===!0&&!!it.attributes.color&&it.attributes.color.itemSize===4,ee=!!it.attributes.tangent&&(!!at.normalMap||at.anisotropy>0),Qt=!!it.morphAttributes.position,he=!!it.morphAttributes.normal,Ce=!!it.morphAttributes.color;let He=Ba;at.toneMapped&&(j===null||j.isXRRenderTarget===!0)&&(He=D.toneMapping);const we=it.morphAttributes.position||it.morphAttributes.normal||it.morphAttributes.color,de=we!==void 0?we.length:0,Gt=Vt.get(at),Ve=v.state.lights;if(Nt===!0&&(et===!0||b!==C)){const ln=b===C&&at.id===w;At.setState(at,b,ln)}let ye=!1;at.version===Gt.__version?(Gt.needsLights&&Gt.lightsStateVersion!==Ve.state.version||Gt.outputColorSpace!==Ht||q.isBatchedMesh&&Gt.batching===!1||!q.isBatchedMesh&&Gt.batching===!0||q.isBatchedMesh&&Gt.batchingColor===!0&&q.colorTexture===null||q.isBatchedMesh&&Gt.batchingColor===!1&&q.colorTexture!==null||q.isInstancedMesh&&Gt.instancing===!1||!q.isInstancedMesh&&Gt.instancing===!0||q.isSkinnedMesh&&Gt.skinning===!1||!q.isSkinnedMesh&&Gt.skinning===!0||q.isInstancedMesh&&Gt.instancingColor===!0&&q.instanceColor===null||q.isInstancedMesh&&Gt.instancingColor===!1&&q.instanceColor!==null||q.isInstancedMesh&&Gt.instancingMorph===!0&&q.morphTexture===null||q.isInstancedMesh&&Gt.instancingMorph===!1&&q.morphTexture!==null||Gt.envMap!==Ot||at.fog===!0&&Gt.fog!==_t||Gt.numClippingPlanes!==void 0&&(Gt.numClippingPlanes!==At.numPlanes||Gt.numIntersection!==At.numIntersection)||Gt.vertexAlphas!==Kt||Gt.vertexTangents!==ee||Gt.morphTargets!==Qt||Gt.morphNormals!==he||Gt.morphColors!==Ce||Gt.toneMapping!==He||Gt.morphTargetsCount!==de)&&(ye=!0):(ye=!0,Gt.__version=at.version);let _n=Gt.currentProgram;ye===!0&&(_n=Hn(at,k,q));let wi=!1,dn=!1,Ga=!1;const ge=_n.getUniforms(),yn=Gt.uniforms;if(kt.useProgram(_n.program)&&(wi=!0,dn=!0,Ga=!0),at.id!==w&&(w=at.id,dn=!0),wi||C!==b){kt.buffers.depth.getReversed()&&b.reversedDepth!==!0&&(b._reversedDepth=!0,b.updateProjectionMatrix()),ge.setValue(B,"projectionMatrix",b.projectionMatrix),ge.setValue(B,"viewMatrix",b.matrixWorldInverse);const Ke=ge.map.cameraPosition;Ke!==void 0&&Ke.setValue(B,wt.setFromMatrixPosition(b.matrixWorld)),$t.logarithmicDepthBuffer&&ge.setValue(B,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(at.isMeshPhongMaterial||at.isMeshToonMaterial||at.isMeshLambertMaterial||at.isMeshBasicMaterial||at.isMeshStandardMaterial||at.isShaderMaterial)&&ge.setValue(B,"isOrthographic",b.isOrthographicCamera===!0),C!==b&&(C=b,dn=!0,Ga=!0)}if(q.isSkinnedMesh){ge.setOptional(B,q,"bindMatrix"),ge.setOptional(B,q,"bindMatrixInverse");const ln=q.skeleton;ln&&(ln.boneTexture===null&&ln.computeBoneTexture(),ge.setValue(B,"boneTexture",ln.boneTexture,ae))}q.isBatchedMesh&&(ge.setOptional(B,q,"batchingTexture"),ge.setValue(B,"batchingTexture",q._matricesTexture,ae),ge.setOptional(B,q,"batchingIdTexture"),ge.setValue(B,"batchingIdTexture",q._indirectTexture,ae),ge.setOptional(B,q,"batchingColorTexture"),q._colorsTexture!==null&&ge.setValue(B,"batchingColorTexture",q._colorsTexture,ae));const Rn=it.morphAttributes;if((Rn.position!==void 0||Rn.normal!==void 0||Rn.color!==void 0)&&Et.update(q,it,_n),(dn||Gt.receiveShadow!==q.receiveShadow)&&(Gt.receiveShadow=q.receiveShadow,ge.setValue(B,"receiveShadow",q.receiveShadow)),at.isMeshGouraudMaterial&&at.envMap!==null&&(yn.envMap.value=Ot,yn.flipEnvMap.value=Ot.isCubeTexture&&Ot.isRenderTargetTexture===!1?-1:1),at.isMeshStandardMaterial&&at.envMap===null&&k.environment!==null&&(yn.envMapIntensity.value=k.environmentIntensity),dn&&(ge.setValue(B,"toneMappingExposure",D.toneMappingExposure),Gt.needsLights&&Cs(yn,Ga),_t&&at.fog===!0&&St.refreshFogUniforms(yn,_t),St.refreshMaterialUniforms(yn,at,Y,Z,v.state.transmissionRenderTarget[b.id]),Su.upload(B,en(Gt),yn,ae)),at.isShaderMaterial&&at.uniformsNeedUpdate===!0&&(Su.upload(B,en(Gt),yn,ae),at.uniformsNeedUpdate=!1),at.isSpriteMaterial&&ge.setValue(B,"center",q.center),ge.setValue(B,"modelViewMatrix",q.modelViewMatrix),ge.setValue(B,"normalMatrix",q.normalMatrix),ge.setValue(B,"modelMatrix",q.matrixWorld),at.isShaderMaterial||at.isRawShaderMaterial){const ln=at.uniformsGroups;for(let Ke=0,Er=ln.length;Ke<Er;Ke++){const Si=ln[Ke];se.update(Si,_n),se.bind(Si,_n)}}return _n}function Cs(b,k){b.ambientLightColor.needsUpdate=k,b.lightProbe.needsUpdate=k,b.directionalLights.needsUpdate=k,b.directionalLightShadows.needsUpdate=k,b.pointLights.needsUpdate=k,b.pointLightShadows.needsUpdate=k,b.spotLights.needsUpdate=k,b.spotLightShadows.needsUpdate=k,b.rectAreaLights.needsUpdate=k,b.hemisphereLights.needsUpdate=k}function Au(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return H},this.getActiveMipmapLevel=function(){return P},this.getRenderTarget=function(){return j},this.setRenderTargetTextures=function(b,k,it){const at=Vt.get(b);at.__autoAllocateDepthBuffer=b.resolveDepthBuffer===!1,at.__autoAllocateDepthBuffer===!1&&(at.__useRenderToTexture=!1),Vt.get(b.texture).__webglTexture=k,Vt.get(b.depthTexture).__webglTexture=at.__autoAllocateDepthBuffer?void 0:it,at.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(b,k){const it=Vt.get(b);it.__webglFramebuffer=k,it.__useDefaultFramebuffer=k===void 0};const Ru=B.createFramebuffer();this.setRenderTarget=function(b,k=0,it=0){j=b,H=k,P=it;let at=!0,q=null,_t=!1,Ut=!1;if(b){const Ot=Vt.get(b);if(Ot.__useDefaultFramebuffer!==void 0)kt.bindFramebuffer(B.FRAMEBUFFER,null),at=!1;else if(Ot.__webglFramebuffer===void 0)ae.setupRenderTarget(b);else if(Ot.__hasExternalTextures)ae.rebindTextures(b,Vt.get(b.texture).__webglTexture,Vt.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){const Qt=b.depthTexture;if(Ot.__boundDepthTexture!==Qt){if(Qt!==null&&Vt.has(Qt)&&(b.width!==Qt.image.width||b.height!==Qt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");ae.setupDepthRenderbuffer(b)}}const Kt=b.texture;(Kt.isData3DTexture||Kt.isDataArrayTexture||Kt.isCompressedArrayTexture)&&(Ut=!0);const ee=Vt.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(ee[k])?q=ee[k][it]:q=ee[k],_t=!0):b.samples>0&&ae.useMultisampledRTT(b)===!1?q=Vt.get(b).__webglMultisampledFramebuffer:Array.isArray(ee)?q=ee[it]:q=ee,G.copy(b.viewport),nt.copy(b.scissor),ut=b.scissorTest}else G.copy(L).multiplyScalar(Y).floor(),nt.copy(tt).multiplyScalar(Y).floor(),ut=xt;if(it!==0&&(q=Ru),kt.bindFramebuffer(B.FRAMEBUFFER,q)&&at&&kt.drawBuffers(b,q),kt.viewport(G),kt.scissor(nt),kt.setScissorTest(ut),_t){const Ot=Vt.get(b.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+k,Ot.__webglTexture,it)}else if(Ut){const Ot=k;for(let Kt=0;Kt<b.textures.length;Kt++){const ee=Vt.get(b.textures[Kt]);B.framebufferTextureLayer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0+Kt,ee.__webglTexture,it,Ot)}}else if(b!==null&&it!==0){const Ot=Vt.get(b.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,Ot.__webglTexture,it)}w=-1},this.readRenderTargetPixels=function(b,k,it,at,q,_t,Ut,Ht=0){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ot=Vt.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Ut!==void 0&&(Ot=Ot[Ut]),Ot){kt.bindFramebuffer(B.FRAMEBUFFER,Ot);try{const Kt=b.textures[Ht],ee=Kt.format,Qt=Kt.type;if(!$t.textureFormatReadable(ee)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!$t.textureTypeReadable(Qt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=b.width-at&&it>=0&&it<=b.height-q&&(b.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+Ht),B.readPixels(k,it,at,q,zt.convert(ee),zt.convert(Qt),_t))}finally{const Kt=j!==null?Vt.get(j).__webglFramebuffer:null;kt.bindFramebuffer(B.FRAMEBUFFER,Kt)}}},this.readRenderTargetPixelsAsync=async function(b,k,it,at,q,_t,Ut,Ht=0){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ot=Vt.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Ut!==void 0&&(Ot=Ot[Ut]),Ot)if(k>=0&&k<=b.width-at&&it>=0&&it<=b.height-q){kt.bindFramebuffer(B.FRAMEBUFFER,Ot);const Kt=b.textures[Ht],ee=Kt.format,Qt=Kt.type;if(!$t.textureFormatReadable(ee))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!$t.textureTypeReadable(Qt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const he=B.createBuffer();B.bindBuffer(B.PIXEL_PACK_BUFFER,he),B.bufferData(B.PIXEL_PACK_BUFFER,_t.byteLength,B.STREAM_READ),b.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+Ht),B.readPixels(k,it,at,q,zt.convert(ee),zt.convert(Qt),0);const Ce=j!==null?Vt.get(j).__webglFramebuffer:null;kt.bindFramebuffer(B.FRAMEBUFFER,Ce);const He=B.fenceSync(B.SYNC_GPU_COMMANDS_COMPLETE,0);return B.flush(),await Ix(B,He,4),B.bindBuffer(B.PIXEL_PACK_BUFFER,he),B.getBufferSubData(B.PIXEL_PACK_BUFFER,0,_t),B.deleteBuffer(he),B.deleteSync(He),_t}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(b,k=null,it=0){const at=Math.pow(2,-it),q=Math.floor(b.image.width*at),_t=Math.floor(b.image.height*at),Ut=k!==null?k.x:0,Ht=k!==null?k.y:0;ae.setTexture2D(b,0),B.copyTexSubImage2D(B.TEXTURE_2D,it,0,0,Ut,Ht,q,_t),kt.unbindTexture()};const Po=B.createFramebuffer(),Ha=B.createFramebuffer();this.copyTextureToTexture=function(b,k,it=null,at=null,q=0,_t=null){_t===null&&(q!==0?(wo("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),_t=q,q=0):_t=0);let Ut,Ht,Ot,Kt,ee,Qt,he,Ce,He;const we=b.isCompressedTexture?b.mipmaps[_t]:b.image;if(it!==null)Ut=it.max.x-it.min.x,Ht=it.max.y-it.min.y,Ot=it.isBox3?it.max.z-it.min.z:1,Kt=it.min.x,ee=it.min.y,Qt=it.isBox3?it.min.z:0;else{const Rn=Math.pow(2,-q);Ut=Math.floor(we.width*Rn),Ht=Math.floor(we.height*Rn),b.isDataArrayTexture?Ot=we.depth:b.isData3DTexture?Ot=Math.floor(we.depth*Rn):Ot=1,Kt=0,ee=0,Qt=0}at!==null?(he=at.x,Ce=at.y,He=at.z):(he=0,Ce=0,He=0);const de=zt.convert(k.format),Gt=zt.convert(k.type);let Ve;k.isData3DTexture?(ae.setTexture3D(k,0),Ve=B.TEXTURE_3D):k.isDataArrayTexture||k.isCompressedArrayTexture?(ae.setTexture2DArray(k,0),Ve=B.TEXTURE_2D_ARRAY):(ae.setTexture2D(k,0),Ve=B.TEXTURE_2D),B.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,k.flipY),B.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),B.pixelStorei(B.UNPACK_ALIGNMENT,k.unpackAlignment);const ye=B.getParameter(B.UNPACK_ROW_LENGTH),_n=B.getParameter(B.UNPACK_IMAGE_HEIGHT),wi=B.getParameter(B.UNPACK_SKIP_PIXELS),dn=B.getParameter(B.UNPACK_SKIP_ROWS),Ga=B.getParameter(B.UNPACK_SKIP_IMAGES);B.pixelStorei(B.UNPACK_ROW_LENGTH,we.width),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,we.height),B.pixelStorei(B.UNPACK_SKIP_PIXELS,Kt),B.pixelStorei(B.UNPACK_SKIP_ROWS,ee),B.pixelStorei(B.UNPACK_SKIP_IMAGES,Qt);const ge=b.isDataArrayTexture||b.isData3DTexture,yn=k.isDataArrayTexture||k.isData3DTexture;if(b.isDepthTexture){const Rn=Vt.get(b),ln=Vt.get(k),Ke=Vt.get(Rn.__renderTarget),Er=Vt.get(ln.__renderTarget);kt.bindFramebuffer(B.READ_FRAMEBUFFER,Ke.__webglFramebuffer),kt.bindFramebuffer(B.DRAW_FRAMEBUFFER,Er.__webglFramebuffer);for(let Si=0;Si<Ot;Si++)ge&&(B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Vt.get(b).__webglTexture,q,Qt+Si),B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Vt.get(k).__webglTexture,_t,He+Si)),B.blitFramebuffer(Kt,ee,Ut,Ht,he,Ce,Ut,Ht,B.DEPTH_BUFFER_BIT,B.NEAREST);kt.bindFramebuffer(B.READ_FRAMEBUFFER,null),kt.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else if(q!==0||b.isRenderTargetTexture||Vt.has(b)){const Rn=Vt.get(b),ln=Vt.get(k);kt.bindFramebuffer(B.READ_FRAMEBUFFER,Po),kt.bindFramebuffer(B.DRAW_FRAMEBUFFER,Ha);for(let Ke=0;Ke<Ot;Ke++)ge?B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Rn.__webglTexture,q,Qt+Ke):B.framebufferTexture2D(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,Rn.__webglTexture,q),yn?B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,ln.__webglTexture,_t,He+Ke):B.framebufferTexture2D(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,ln.__webglTexture,_t),q!==0?B.blitFramebuffer(Kt,ee,Ut,Ht,he,Ce,Ut,Ht,B.COLOR_BUFFER_BIT,B.NEAREST):yn?B.copyTexSubImage3D(Ve,_t,he,Ce,He+Ke,Kt,ee,Ut,Ht):B.copyTexSubImage2D(Ve,_t,he,Ce,Kt,ee,Ut,Ht);kt.bindFramebuffer(B.READ_FRAMEBUFFER,null),kt.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else yn?b.isDataTexture||b.isData3DTexture?B.texSubImage3D(Ve,_t,he,Ce,He,Ut,Ht,Ot,de,Gt,we.data):k.isCompressedArrayTexture?B.compressedTexSubImage3D(Ve,_t,he,Ce,He,Ut,Ht,Ot,de,we.data):B.texSubImage3D(Ve,_t,he,Ce,He,Ut,Ht,Ot,de,Gt,we):b.isDataTexture?B.texSubImage2D(B.TEXTURE_2D,_t,he,Ce,Ut,Ht,de,Gt,we.data):b.isCompressedTexture?B.compressedTexSubImage2D(B.TEXTURE_2D,_t,he,Ce,we.width,we.height,de,we.data):B.texSubImage2D(B.TEXTURE_2D,_t,he,Ce,Ut,Ht,de,Gt,we);B.pixelStorei(B.UNPACK_ROW_LENGTH,ye),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,_n),B.pixelStorei(B.UNPACK_SKIP_PIXELS,wi),B.pixelStorei(B.UNPACK_SKIP_ROWS,dn),B.pixelStorei(B.UNPACK_SKIP_IMAGES,Ga),_t===0&&k.generateMipmaps&&B.generateMipmap(Ve),kt.unbindTexture()},this.initRenderTarget=function(b){Vt.get(b).__webglFramebuffer===void 0&&ae.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?ae.setTextureCube(b,0):b.isData3DTexture?ae.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?ae.setTexture2DArray(b,0):ae.setTexture2D(b,0),kt.unbindTexture()},this.resetState=function(){H=0,P=0,j=null,kt.reset(),Dt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ai}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const i=this.getContext();i.drawingBufferColorSpace=Ae._getDrawingBufferColorSpace(e),i.unpackColorSpace=Ae._getUnpackColorSpace()}}const nb=`
varying vec2 vUv;
uniform float uTime;
uniform float mouse;
uniform float uEnableWaves;

void main() {
    vUv = uv;
    float time = uTime * 5.;

    float waveFactor = uEnableWaves;

    vec3 transformed = position;

    transformed.x += sin(time + position.y) * 0.5 * waveFactor;
    transformed.y += cos(time + position.z) * 0.15 * waveFactor;
    transformed.z += sin(time + position.x) * waveFactor;

    gl_Position = projectionMatrix * modelViewMatrix * vec4(transformed, 1.0);
}
`,ib=`
varying vec2 vUv;
uniform float mouse;
uniform float uTime;
uniform sampler2D uTexture;

void main() {
    float time = uTime;
    vec2 pos = vUv;
    
    float move = sin(time + mouse) * 0.01;
    float r = texture2D(uTexture, pos + cos(time * 2. - time + pos.x) * .01).r;
    float g = texture2D(uTexture, pos + tan(time * .5 + pos.x - time) * .01).g;
    float b = texture2D(uTexture, pos - cos(time * 2. + time + pos.y) * .01).b;
    float a = texture2D(uTexture, pos).a;
    gl_FragColor = vec4(r, g, b, a);
}
`;Math.map=function(o,e,i,r,l){return(o-e)/(i-e)*(l-r)+r};const e0=typeof window<"u"?window.devicePixelRatio:1;class ab{constructor(e,{fontSize:i,fontFamily:r,charset:l,invert:c}={}){this.renderer=e,this.domElement=document.createElement("div"),this.domElement.style.position="absolute",this.domElement.style.top="0",this.domElement.style.left="0",this.domElement.style.width="100%",this.domElement.style.height="100%",this.pre=document.createElement("pre"),this.domElement.appendChild(this.pre),this.canvas=document.createElement("canvas"),this.context=this.canvas.getContext("2d"),this.domElement.appendChild(this.canvas),this.deg=0,this.invert=c??!0,this.fontSize=i??12,this.fontFamily=r??"'Courier New', monospace",this.charset=l??" .'`^\",:;Il!i~+_-?][}{1)(|/tfjrxnuvczXYUJCLQ0OZmwqpdbkhao*#MW&8%B@$",this.context.webkitImageSmoothingEnabled=!1,this.context.mozImageSmoothingEnabled=!1,this.context.msImageSmoothingEnabled=!1,this.context.imageSmoothingEnabled=!1,this.onMouseMove=this.onMouseMove.bind(this),document.addEventListener("mousemove",this.onMouseMove)}setSize(e,i){this.width=e,this.height=i,this.renderer.setSize(e,i),this.reset(),this.center={x:e/2,y:i/2},this.mouse={x:this.center.x,y:this.center.y}}reset(){this.context.font=`${this.fontSize}px ${this.fontFamily}`;const e=this.context.measureText("A").width;this.cols=Math.floor(this.width/(this.fontSize*(e/this.fontSize))),this.rows=Math.floor(this.height/this.fontSize),this.canvas.width=this.cols,this.canvas.height=this.rows,this.pre.style.fontFamily=this.fontFamily,this.pre.style.fontSize=`${this.fontSize}px`,this.pre.style.margin="0",this.pre.style.padding="0",this.pre.style.lineHeight="1em",this.pre.style.position="absolute",this.pre.style.left="50%",this.pre.style.top="50%",this.pre.style.transform="translate(-50%, -50%)",this.pre.style.zIndex="9",this.pre.style.backgroundAttachment="fixed",this.pre.style.mixBlendMode="difference"}render(e,i){this.renderer.render(e,i);const r=this.canvas.width,l=this.canvas.height;this.context.clearRect(0,0,r,l),this.context&&r&&l&&this.context.drawImage(this.renderer.domElement,0,0,r,l),this.asciify(this.context,r,l),this.hue()}onMouseMove(e){this.mouse={x:e.clientX*e0,y:e.clientY*e0}}get dx(){return this.mouse.x-this.center.x}get dy(){return this.mouse.y-this.center.y}hue(){const e=Math.atan2(this.dy,this.dx)*180/Math.PI;this.deg+=(e-this.deg)*.075,this.domElement.style.filter=`hue-rotate(${this.deg.toFixed(1)}deg)`}asciify(e,i,r){if(i&&r){const l=e.getImageData(0,0,i,r).data;let c="";for(let h=0;h<r;h++){for(let d=0;d<i;d++){const m=d*4+h*4*i,[p,S,_,x]=[l[m],l[m+1],l[m+2],l[m+3]];if(x===0){c+=" ";continue}let y=(.3*p+.6*S+.1*_)/255,A=Math.floor((1-y)*(this.charset.length-1));this.invert&&(A=this.charset.length-A-1),c+=this.charset[A]}c+=`
`}this.pre.innerHTML=c}}dispose(){document.removeEventListener("mousemove",this.onMouseMove)}}class rb{constructor(e,{fontSize:i=200,fontFamily:r="Arial",color:l="#fdf9f3"}={}){this.canvas=document.createElement("canvas"),this.context=this.canvas.getContext("2d"),this.txt=e,this.fontSize=i,this.fontFamily=r,this.color=l,this.font=`600 ${this.fontSize}px ${this.fontFamily}`}resize(){this.context.font=this.font;const e=this.context.measureText(this.txt),i=Math.ceil(e.width)+20,r=Math.ceil(e.actualBoundingBoxAscent+e.actualBoundingBoxDescent)+20;this.canvas.width=i,this.canvas.height=r}render(){this.context.clearRect(0,0,this.canvas.width,this.canvas.height),this.context.fillStyle=this.color,this.context.font=this.font;const i=10+this.context.measureText(this.txt).actualBoundingBoxAscent;this.context.fillText(this.txt,10,i)}get width(){return this.canvas.width}get height(){return this.canvas.height}get texture(){return this.canvas}}class n0{constructor({text:e,asciiFontSize:i,textFontSize:r,textColor:l,planeBaseHeight:c,enableWaves:h},d,m,p){this.textString=e,this.asciiFontSize=i,this.textFontSize=r,this.textColor=l,this.planeBaseHeight=c,this.container=d,this.width=m,this.height=p,this.enableWaves=h,this.camera=new li(45,this.width/this.height,1,1e3),this.camera.position.z=30,this.scene=new cM,this.mouse={x:0,y:0},this.onMouseMove=this.onMouseMove.bind(this),this.setMesh(),this.setRenderer()}setMesh(){this.textCanvas=new rb(this.textString,{fontSize:this.textFontSize,fontFamily:"IBM Plex Mono",color:this.textColor}),this.textCanvas.resize(),this.textCanvas.render(),this.texture=new pM(this.textCanvas.texture),this.texture.minFilter=ui;const e=this.textCanvas.width/this.textCanvas.height,i=this.planeBaseHeight,r=i*e,l=i;this.geometry=new zo(r,l,36,36),this.material=new aa({vertexShader:nb,fragmentShader:ib,transparent:!0,uniforms:{uTime:{value:0},mouse:{value:1},uTexture:{value:this.texture},uEnableWaves:{value:this.enableWaves?1:0}}}),this.mesh=new Ri(this.geometry,this.material),this.scene.add(this.mesh)}setRenderer(){this.renderer=new eb({antialias:!1,alpha:!0}),this.renderer.setPixelRatio(1),this.renderer.setClearColor(0,0),this.filter=new ab(this.renderer,{fontFamily:"IBM Plex Mono",fontSize:this.asciiFontSize,invert:!0}),this.container.appendChild(this.filter.domElement),this.setSize(this.width,this.height),this.container.addEventListener("mousemove",this.onMouseMove),this.container.addEventListener("touchmove",this.onMouseMove)}setSize(e,i){this.width=e,this.height=i,this.camera.aspect=e/i,this.camera.updateProjectionMatrix(),this.filter.setSize(e,i),this.center={x:e/2,y:i/2}}load(){this.animate()}onMouseMove(e){const i=e.touches?e.touches[0]:e,r=this.container.getBoundingClientRect(),l=i.clientX-r.left,c=i.clientY-r.top;this.mouse={x:l,y:c}}animate(){const e=()=>{this.animationFrameId=requestAnimationFrame(e),this.render()};e()}render(){const e=new Date().getTime()*.001;this.textCanvas.render(),this.texture.needsUpdate=!0,this.mesh.material.uniforms.uTime.value=Math.sin(e),this.updateRotation(),this.filter.render(this.scene,this.camera)}updateRotation(){const e=Math.map(this.mouse.y,0,this.height,.5,-.5),i=Math.map(this.mouse.x,0,this.width,-.5,.5);this.mesh.rotation.x+=(e-this.mesh.rotation.x)*.05,this.mesh.rotation.y+=(i-this.mesh.rotation.y)*.05}clear(){this.scene.traverse(e=>{e.isMesh&&typeof e.material=="object"&&e.material!==null&&(Object.keys(e.material).forEach(i=>{const r=e.material[i];r!==null&&typeof r=="object"&&typeof r.dispose=="function"&&r.dispose()}),e.material.dispose(),e.geometry.dispose())}),this.scene.clear()}dispose(){cancelAnimationFrame(this.animationFrameId),this.filter.dispose(),this.container.removeChild(this.filter.domElement),this.container.removeEventListener("mousemove",this.onMouseMove),this.container.removeEventListener("touchmove",this.onMouseMove),this.clear(),this.renderer.dispose()}}function sb({text:o="David!",asciiFontSize:e=8,textFontSize:i=200,textColor:r="#fdf9f3",planeBaseHeight:l=8,enableWaves:c=!0}){const h=pu.useRef(null),d=pu.useRef(null);return pu.useEffect(()=>{if(!h.current)return;const{width:m,height:p}=h.current.getBoundingClientRect();if(m===0||p===0){const _=new IntersectionObserver(([x])=>{if(x.isIntersecting&&x.boundingClientRect.width>0&&x.boundingClientRect.height>0){const{width:y,height:A}=x.boundingClientRect;d.current=new n0({text:o,asciiFontSize:e,textFontSize:i,textColor:r,planeBaseHeight:l,enableWaves:c},h.current,y,A),d.current.load(),_.disconnect()}},{threshold:.1});return _.observe(h.current),()=>{_.disconnect(),d.current&&d.current.dispose()}}d.current=new n0({text:o,asciiFontSize:e,textFontSize:i,textColor:r,planeBaseHeight:l,enableWaves:c},h.current,m,p),d.current.load();const S=new ResizeObserver(_=>{if(!_[0]||!d.current)return;const{width:x,height:y}=_[0].contentRect;x>0&&y>0&&d.current.setSize(x,y)});return S.observe(h.current),()=>{S.disconnect(),d.current&&d.current.dispose()}},[o,e,i,r,l,c]),In.jsx("div",{ref:h,className:"ascii-text-container",style:{position:"absolute",width:"100%",height:"100%"},children:In.jsx("style",{children:`
        @import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@500&display=swap');

        .ascii-text-container canvas {
          position: absolute;
          left: 0;
          top: 0;
          width: 100%;
          height: 100%;
          image-rendering: optimizeSpeed;
          image-rendering: -moz-crisp-edges;
          image-rendering: -o-crisp-edges;
          image-rendering: -webkit-optimize-contrast;
          image-rendering: optimize-contrast;
          image-rendering: crisp-edges;
          image-rendering: pixelated;
        }

        .ascii-text-container pre {
          margin: 0;
          user-select: none;
          padding: 0;
          line-height: 1em;
          text-align: left;
          position: absolute;
          left: 0;
          top: 0;
          background-image: radial-gradient(circle, #ff6188 0%, #fc9867 50%, #ffd866 100%);
          background-attachment: fixed;
          -webkit-text-fill-color: transparent;
          -webkit-background-clip: text;
          z-index: 9;
          mix-blend-mode: difference;
        }
      `})})}const ob="data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='UTF-8'?%3e%3csvg%20id='linkedin'%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2024%2024'%3e%3cpath%20d='m22,2v-1H2v1h-1v20h1v1h20v-1h1V2h-1Zm-9,10v8h-3v-11h3v1h1v-1h4v1h1v10h-3v-8h-3Zm-9-4v-3h3v3h-3Zm3,1v11h-3v-11h3Z'/%3e%3c/svg%3e",lb="data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='UTF-8'?%3e%3csvg%20id='github'%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2024%2024'%3e%3cpolygon%20points='23%209%2023%2015%2022%2015%2022%2017%2021%2017%2021%2019%2020%2019%2020%2020%2019%2020%2019%2021%2018%2021%2018%2022%2016%2022%2016%2023%2015%2023%2015%2018%2014%2018%2014%2017%2015%2017%2015%2016%2017%2016%2017%2015%2018%2015%2018%2014%2019%2014%2019%209%2018%209%2018%206%2016%206%2016%207%2015%207%2015%208%2014%208%2014%207%2010%207%2010%208%209%208%209%207%208%207%208%206%206%206%206%209%205%209%205%2014%206%2014%206%2015%207%2015%207%2016%209%2016%209%2018%207%2018%207%2017%206%2017%206%2016%204%2016%204%2017%205%2017%205%2019%206%2019%206%2020%209%2020%209%2023%208%2023%208%2022%206%2022%206%2021%205%2021%205%2020%204%2020%204%2019%203%2019%203%2017%202%2017%202%2015%201%2015%201%209%202%209%202%207%203%207%203%205%204%205%204%204%205%204%205%203%207%203%207%202%209%202%209%201%2015%201%2015%202%2017%202%2017%203%2019%203%2019%204%2020%204%2020%205%2021%205%2021%207%2022%207%2022%209%2023%209'/%3e%3c/svg%3e",ub="data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='UTF-8'?%3e%3csvg%20id='envelope'%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2024%2024'%3e%3cpath%20d='m21,5v-1H3v1H1v14h1v1h20v-1h1V5h-2Zm-11,7v-1h-1v-1h-1v-1h-1v-1h-1v-1h-1v-1h14v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-2v-1h-1Zm-6-5v1h1v1h1v1h1v1h1v1h1v1h1v1h1v1h2v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1v11H3V7h1Z'/%3e%3c/svg%3e";function cb(){return In.jsxs("div",{style:{position:"relative",width:"100%",height:"100vh",background:"black",overflow:"hidden",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"},children:[In.jsx("div",{style:{position:"relative",width:"100%",height:"100%",transform:"translateY(-20px)"},children:In.jsx(sb,{text:"Pierre",enableWaves:!0,asciiFontSize:9})}),In.jsxs("div",{className:"socials",style:{position:"absolute",top:"80%",left:"50%",transform:"translateX(-50%)",display:"flex",gap:"2rem",zIndex:10},children:[In.jsx("a",{href:"https://linkedin.com/in/pierreanri",target:"_blank",rel:"noopener noreferrer",children:In.jsx("img",{src:ob,alt:"LinkedIn",className:"social-icon"})}),In.jsx("a",{href:"https://github.com/pierreanri",target:"_blank",rel:"noopener noreferrer",children:In.jsx("img",{src:lb,alt:"GitHub",className:"social-icon"})}),In.jsx("a",{href:"mailto:pierreanriwork@outlook.com",children:In.jsx("img",{src:ub,alt:"Email",className:"social-icon"})})]})]})}YS.createRoot(document.getElementById("root")).render(In.jsx(pu.StrictMode,{children:In.jsx(cb,{})}));
