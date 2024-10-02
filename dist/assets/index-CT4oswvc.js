function by(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in e)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(e,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function zy(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var pp={exports:{}},ia={},gp={exports:{}},W={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ds=Symbol.for("react.element"),$y=Symbol.for("react.portal"),By=Symbol.for("react.fragment"),Vy=Symbol.for("react.strict_mode"),Hy=Symbol.for("react.profiler"),Wy=Symbol.for("react.provider"),Ky=Symbol.for("react.context"),Gy=Symbol.for("react.forward_ref"),qy=Symbol.for("react.suspense"),Qy=Symbol.for("react.memo"),Xy=Symbol.for("react.lazy"),ah=Symbol.iterator;function Yy(e){return e===null||typeof e!="object"?null:(e=ah&&e[ah]||e["@@iterator"],typeof e=="function"?e:null)}var mp={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},vp=Object.assign,yp={};function Xr(e,t,n){this.props=e,this.context=t,this.refs=yp,this.updater=n||mp}Xr.prototype.isReactComponent={};Xr.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Xr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function wp(){}wp.prototype=Xr.prototype;function Ku(e,t,n){this.props=e,this.context=t,this.refs=yp,this.updater=n||mp}var Gu=Ku.prototype=new wp;Gu.constructor=Ku;vp(Gu,Xr.prototype);Gu.isPureReactComponent=!0;var lh=Array.isArray,_p=Object.prototype.hasOwnProperty,qu={current:null},Ep={key:!0,ref:!0,__self:!0,__source:!0};function Sp(e,t,n){var r,i={},s=null,a=null;if(t!=null)for(r in t.ref!==void 0&&(a=t.ref),t.key!==void 0&&(s=""+t.key),t)_p.call(t,r)&&!Ep.hasOwnProperty(r)&&(i[r]=t[r]);var u=arguments.length-2;if(u===1)i.children=n;else if(1<u){for(var c=Array(u),h=0;h<u;h++)c[h]=arguments[h+2];i.children=c}if(e&&e.defaultProps)for(r in u=e.defaultProps,u)i[r]===void 0&&(i[r]=u[r]);return{$$typeof:ds,type:e,key:s,ref:a,props:i,_owner:qu.current}}function Jy(e,t){return{$$typeof:ds,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Qu(e){return typeof e=="object"&&e!==null&&e.$$typeof===ds}function Zy(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var uh=/\/+/g;function nl(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Zy(""+e.key):t.toString(36)}function ro(e,t,n,r,i){var s=typeof e;(s==="undefined"||s==="boolean")&&(e=null);var a=!1;if(e===null)a=!0;else switch(s){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case ds:case $y:a=!0}}if(a)return a=e,i=i(a),e=r===""?"."+nl(a,0):r,lh(i)?(n="",e!=null&&(n=e.replace(uh,"$&/")+"/"),ro(i,t,n,"",function(h){return h})):i!=null&&(Qu(i)&&(i=Jy(i,n+(!i.key||a&&a.key===i.key?"":(""+i.key).replace(uh,"$&/")+"/")+e)),t.push(i)),1;if(a=0,r=r===""?".":r+":",lh(e))for(var u=0;u<e.length;u++){s=e[u];var c=r+nl(s,u);a+=ro(s,t,n,c,i)}else if(c=Yy(e),typeof c=="function")for(e=c.call(e),u=0;!(s=e.next()).done;)s=s.value,c=r+nl(s,u++),a+=ro(s,t,n,c,i);else if(s==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return a}function js(e,t,n){if(e==null)return e;var r=[],i=0;return ro(e,r,"","",function(s){return t.call(n,s,i++)}),r}function e0(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var je={current:null},io={transition:null},t0={ReactCurrentDispatcher:je,ReactCurrentBatchConfig:io,ReactCurrentOwner:qu};function Ip(){throw Error("act(...) is not supported in production builds of React.")}W.Children={map:js,forEach:function(e,t,n){js(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return js(e,function(){t++}),t},toArray:function(e){return js(e,function(t){return t})||[]},only:function(e){if(!Qu(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};W.Component=Xr;W.Fragment=By;W.Profiler=Hy;W.PureComponent=Ku;W.StrictMode=Vy;W.Suspense=qy;W.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=t0;W.act=Ip;W.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=vp({},e.props),i=e.key,s=e.ref,a=e._owner;if(t!=null){if(t.ref!==void 0&&(s=t.ref,a=qu.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var u=e.type.defaultProps;for(c in t)_p.call(t,c)&&!Ep.hasOwnProperty(c)&&(r[c]=t[c]===void 0&&u!==void 0?u[c]:t[c])}var c=arguments.length-2;if(c===1)r.children=n;else if(1<c){u=Array(c);for(var h=0;h<c;h++)u[h]=arguments[h+2];r.children=u}return{$$typeof:ds,type:e.type,key:i,ref:s,props:r,_owner:a}};W.createContext=function(e){return e={$$typeof:Ky,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Wy,_context:e},e.Consumer=e};W.createElement=Sp;W.createFactory=function(e){var t=Sp.bind(null,e);return t.type=e,t};W.createRef=function(){return{current:null}};W.forwardRef=function(e){return{$$typeof:Gy,render:e}};W.isValidElement=Qu;W.lazy=function(e){return{$$typeof:Xy,_payload:{_status:-1,_result:e},_init:e0}};W.memo=function(e,t){return{$$typeof:Qy,type:e,compare:t===void 0?null:t}};W.startTransition=function(e){var t=io.transition;io.transition={};try{e()}finally{io.transition=t}};W.unstable_act=Ip;W.useCallback=function(e,t){return je.current.useCallback(e,t)};W.useContext=function(e){return je.current.useContext(e)};W.useDebugValue=function(){};W.useDeferredValue=function(e){return je.current.useDeferredValue(e)};W.useEffect=function(e,t){return je.current.useEffect(e,t)};W.useId=function(){return je.current.useId()};W.useImperativeHandle=function(e,t,n){return je.current.useImperativeHandle(e,t,n)};W.useInsertionEffect=function(e,t){return je.current.useInsertionEffect(e,t)};W.useLayoutEffect=function(e,t){return je.current.useLayoutEffect(e,t)};W.useMemo=function(e,t){return je.current.useMemo(e,t)};W.useReducer=function(e,t,n){return je.current.useReducer(e,t,n)};W.useRef=function(e){return je.current.useRef(e)};W.useState=function(e){return je.current.useState(e)};W.useSyncExternalStore=function(e,t,n){return je.current.useSyncExternalStore(e,t,n)};W.useTransition=function(){return je.current.useTransition()};W.version="18.3.1";gp.exports=W;var M=gp.exports;const n0=zy(M),r0=by({__proto__:null,default:n0},[M]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var i0=M,s0=Symbol.for("react.element"),o0=Symbol.for("react.fragment"),a0=Object.prototype.hasOwnProperty,l0=i0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,u0={key:!0,ref:!0,__self:!0,__source:!0};function Tp(e,t,n){var r,i={},s=null,a=null;n!==void 0&&(s=""+n),t.key!==void 0&&(s=""+t.key),t.ref!==void 0&&(a=t.ref);for(r in t)a0.call(t,r)&&!u0.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:s0,type:e,key:s,ref:a,props:i,_owner:l0.current}}ia.Fragment=o0;ia.jsx=Tp;ia.jsxs=Tp;pp.exports=ia;var U=pp.exports,kp={exports:{}},Ye={},Cp={exports:{}},Pp={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(z,V){var H=z.length;z.push(V);e:for(;0<H;){var ie=H-1>>>1,Y=z[ie];if(0<i(Y,V))z[ie]=V,z[H]=Y,H=ie;else break e}}function n(z){return z.length===0?null:z[0]}function r(z){if(z.length===0)return null;var V=z[0],H=z.pop();if(H!==V){z[0]=H;e:for(var ie=0,Y=z.length,ce=Y>>>1;ie<ce;){var Ot=2*(ie+1)-1,xt=z[Ot],Lt=Ot+1,Dt=z[Lt];if(0>i(xt,H))Lt<Y&&0>i(Dt,xt)?(z[ie]=Dt,z[Lt]=H,ie=Lt):(z[ie]=xt,z[Ot]=H,ie=Ot);else if(Lt<Y&&0>i(Dt,H))z[ie]=Dt,z[Lt]=H,ie=Lt;else break e}}return V}function i(z,V){var H=z.sortIndex-V.sortIndex;return H!==0?H:z.id-V.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;e.unstable_now=function(){return s.now()}}else{var a=Date,u=a.now();e.unstable_now=function(){return a.now()-u}}var c=[],h=[],w=1,g=null,S=3,N=!1,A=!1,x=!1,L=typeof setTimeout=="function"?setTimeout:null,T=typeof clearTimeout=="function"?clearTimeout:null,m=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function I(z){for(var V=n(h);V!==null;){if(V.callback===null)r(h);else if(V.startTime<=z)r(h),V.sortIndex=V.expirationTime,t(c,V);else break;V=n(h)}}function O(z){if(x=!1,I(z),!A)if(n(c)!==null)A=!0,ii(j);else{var V=n(h);V!==null&&Nt(O,V.startTime-z)}}function j(z,V){A=!1,x&&(x=!1,T(p),p=-1),N=!0;var H=S;try{for(I(V),g=n(c);g!==null&&(!(g.expirationTime>V)||z&&!k());){var ie=g.callback;if(typeof ie=="function"){g.callback=null,S=g.priorityLevel;var Y=ie(g.expirationTime<=V);V=e.unstable_now(),typeof Y=="function"?g.callback=Y:g===n(c)&&r(c),I(V)}else r(c);g=n(c)}if(g!==null)var ce=!0;else{var Ot=n(h);Ot!==null&&Nt(O,Ot.startTime-V),ce=!1}return ce}finally{g=null,S=H,N=!1}}var b=!1,y=null,p=-1,v=5,_=-1;function k(){return!(e.unstable_now()-_<v)}function P(){if(y!==null){var z=e.unstable_now();_=z;var V=!0;try{V=y(!0,z)}finally{V?E():(b=!1,y=null)}}else b=!1}var E;if(typeof m=="function")E=function(){m(P)};else if(typeof MessageChannel<"u"){var Ze=new MessageChannel,Un=Ze.port2;Ze.port1.onmessage=P,E=function(){Un.postMessage(null)}}else E=function(){L(P,0)};function ii(z){y=z,b||(b=!0,E())}function Nt(z,V){p=L(function(){z(e.unstable_now())},V)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(z){z.callback=null},e.unstable_continueExecution=function(){A||N||(A=!0,ii(j))},e.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):v=0<z?Math.floor(1e3/z):5},e.unstable_getCurrentPriorityLevel=function(){return S},e.unstable_getFirstCallbackNode=function(){return n(c)},e.unstable_next=function(z){switch(S){case 1:case 2:case 3:var V=3;break;default:V=S}var H=S;S=V;try{return z()}finally{S=H}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(z,V){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var H=S;S=z;try{return V()}finally{S=H}},e.unstable_scheduleCallback=function(z,V,H){var ie=e.unstable_now();switch(typeof H=="object"&&H!==null?(H=H.delay,H=typeof H=="number"&&0<H?ie+H:ie):H=ie,z){case 1:var Y=-1;break;case 2:Y=250;break;case 5:Y=1073741823;break;case 4:Y=1e4;break;default:Y=5e3}return Y=H+Y,z={id:w++,callback:V,priorityLevel:z,startTime:H,expirationTime:Y,sortIndex:-1},H>ie?(z.sortIndex=H,t(h,z),n(c)===null&&z===n(h)&&(x?(T(p),p=-1):x=!0,Nt(O,H-ie))):(z.sortIndex=Y,t(c,z),A||N||(A=!0,ii(j))),z},e.unstable_shouldYield=k,e.unstable_wrapCallback=function(z){var V=S;return function(){var H=S;S=V;try{return z.apply(this,arguments)}finally{S=H}}}})(Pp);Cp.exports=Pp;var c0=Cp.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var d0=M,Xe=c0;function D(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Ap=new Set,Vi={};function sr(e,t){zr(e,t),zr(e+"Capture",t)}function zr(e,t){for(Vi[e]=t,e=0;e<t.length;e++)Ap.add(t[e])}var Kt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),zl=Object.prototype.hasOwnProperty,h0=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,ch={},dh={};function f0(e){return zl.call(dh,e)?!0:zl.call(ch,e)?!1:h0.test(e)?dh[e]=!0:(ch[e]=!0,!1)}function p0(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function g0(e,t,n,r){if(t===null||typeof t>"u"||p0(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Fe(e,t,n,r,i,s,a){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=s,this.removeEmptyString=a}var Ee={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Ee[e]=new Fe(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];Ee[t]=new Fe(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Ee[e]=new Fe(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Ee[e]=new Fe(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Ee[e]=new Fe(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Ee[e]=new Fe(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Ee[e]=new Fe(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Ee[e]=new Fe(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Ee[e]=new Fe(e,5,!1,e.toLowerCase(),null,!1,!1)});var Xu=/[\-:]([a-z])/g;function Yu(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Xu,Yu);Ee[t]=new Fe(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Xu,Yu);Ee[t]=new Fe(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Xu,Yu);Ee[t]=new Fe(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Ee[e]=new Fe(e,1,!1,e.toLowerCase(),null,!1,!1)});Ee.xlinkHref=new Fe("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Ee[e]=new Fe(e,1,!1,e.toLowerCase(),null,!0,!0)});function Ju(e,t,n,r){var i=Ee.hasOwnProperty(t)?Ee[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(g0(t,n,i,r)&&(n=null),r||i===null?f0(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Yt=d0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Fs=Symbol.for("react.element"),vr=Symbol.for("react.portal"),yr=Symbol.for("react.fragment"),Zu=Symbol.for("react.strict_mode"),$l=Symbol.for("react.profiler"),Rp=Symbol.for("react.provider"),Np=Symbol.for("react.context"),ec=Symbol.for("react.forward_ref"),Bl=Symbol.for("react.suspense"),Vl=Symbol.for("react.suspense_list"),tc=Symbol.for("react.memo"),an=Symbol.for("react.lazy"),Op=Symbol.for("react.offscreen"),hh=Symbol.iterator;function yi(e){return e===null||typeof e!="object"?null:(e=hh&&e[hh]||e["@@iterator"],typeof e=="function"?e:null)}var le=Object.assign,rl;function Ci(e){if(rl===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);rl=t&&t[1]||""}return`
`+rl+e}var il=!1;function sl(e,t){if(!e||il)return"";il=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(h){var r=h}Reflect.construct(e,[],t)}else{try{t.call()}catch(h){r=h}e.call(t.prototype)}else{try{throw Error()}catch(h){r=h}e()}}catch(h){if(h&&r&&typeof h.stack=="string"){for(var i=h.stack.split(`
`),s=r.stack.split(`
`),a=i.length-1,u=s.length-1;1<=a&&0<=u&&i[a]!==s[u];)u--;for(;1<=a&&0<=u;a--,u--)if(i[a]!==s[u]){if(a!==1||u!==1)do if(a--,u--,0>u||i[a]!==s[u]){var c=`
`+i[a].replace(" at new "," at ");return e.displayName&&c.includes("<anonymous>")&&(c=c.replace("<anonymous>",e.displayName)),c}while(1<=a&&0<=u);break}}}finally{il=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Ci(e):""}function m0(e){switch(e.tag){case 5:return Ci(e.type);case 16:return Ci("Lazy");case 13:return Ci("Suspense");case 19:return Ci("SuspenseList");case 0:case 2:case 15:return e=sl(e.type,!1),e;case 11:return e=sl(e.type.render,!1),e;case 1:return e=sl(e.type,!0),e;default:return""}}function Hl(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case yr:return"Fragment";case vr:return"Portal";case $l:return"Profiler";case Zu:return"StrictMode";case Bl:return"Suspense";case Vl:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Np:return(e.displayName||"Context")+".Consumer";case Rp:return(e._context.displayName||"Context")+".Provider";case ec:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case tc:return t=e.displayName||null,t!==null?t:Hl(e.type)||"Memo";case an:t=e._payload,e=e._init;try{return Hl(e(t))}catch{}}return null}function v0(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Hl(t);case 8:return t===Zu?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Rn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function xp(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function y0(e){var t=xp(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(a){r=""+a,s.call(this,a)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(a){r=""+a},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function bs(e){e._valueTracker||(e._valueTracker=y0(e))}function Lp(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=xp(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function _o(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Wl(e,t){var n=t.checked;return le({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function fh(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Rn(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Dp(e,t){t=t.checked,t!=null&&Ju(e,"checked",t,!1)}function Kl(e,t){Dp(e,t);var n=Rn(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Gl(e,t.type,n):t.hasOwnProperty("defaultValue")&&Gl(e,t.type,Rn(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function ph(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Gl(e,t,n){(t!=="number"||_o(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Pi=Array.isArray;function Nr(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Rn(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function ql(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(D(91));return le({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function gh(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(D(92));if(Pi(n)){if(1<n.length)throw Error(D(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Rn(n)}}function Mp(e,t){var n=Rn(t.value),r=Rn(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function mh(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Up(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ql(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Up(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var zs,jp=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(zs=zs||document.createElement("div"),zs.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=zs.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Hi(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var xi={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},w0=["Webkit","ms","Moz","O"];Object.keys(xi).forEach(function(e){w0.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),xi[t]=xi[e]})});function Fp(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||xi.hasOwnProperty(e)&&xi[e]?(""+t).trim():t+"px"}function bp(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Fp(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var _0=le({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Xl(e,t){if(t){if(_0[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(D(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(D(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(D(61))}if(t.style!=null&&typeof t.style!="object")throw Error(D(62))}}function Yl(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Jl=null;function nc(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Zl=null,Or=null,xr=null;function vh(e){if(e=ps(e)){if(typeof Zl!="function")throw Error(D(280));var t=e.stateNode;t&&(t=ua(t),Zl(e.stateNode,e.type,t))}}function zp(e){Or?xr?xr.push(e):xr=[e]:Or=e}function $p(){if(Or){var e=Or,t=xr;if(xr=Or=null,vh(e),t)for(e=0;e<t.length;e++)vh(t[e])}}function Bp(e,t){return e(t)}function Vp(){}var ol=!1;function Hp(e,t,n){if(ol)return e(t,n);ol=!0;try{return Bp(e,t,n)}finally{ol=!1,(Or!==null||xr!==null)&&(Vp(),$p())}}function Wi(e,t){var n=e.stateNode;if(n===null)return null;var r=ua(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(D(231,t,typeof n));return n}var eu=!1;if(Kt)try{var wi={};Object.defineProperty(wi,"passive",{get:function(){eu=!0}}),window.addEventListener("test",wi,wi),window.removeEventListener("test",wi,wi)}catch{eu=!1}function E0(e,t,n,r,i,s,a,u,c){var h=Array.prototype.slice.call(arguments,3);try{t.apply(n,h)}catch(w){this.onError(w)}}var Li=!1,Eo=null,So=!1,tu=null,S0={onError:function(e){Li=!0,Eo=e}};function I0(e,t,n,r,i,s,a,u,c){Li=!1,Eo=null,E0.apply(S0,arguments)}function T0(e,t,n,r,i,s,a,u,c){if(I0.apply(this,arguments),Li){if(Li){var h=Eo;Li=!1,Eo=null}else throw Error(D(198));So||(So=!0,tu=h)}}function or(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Wp(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function yh(e){if(or(e)!==e)throw Error(D(188))}function k0(e){var t=e.alternate;if(!t){if(t=or(e),t===null)throw Error(D(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return yh(i),e;if(s===r)return yh(i),t;s=s.sibling}throw Error(D(188))}if(n.return!==r.return)n=i,r=s;else{for(var a=!1,u=i.child;u;){if(u===n){a=!0,n=i,r=s;break}if(u===r){a=!0,r=i,n=s;break}u=u.sibling}if(!a){for(u=s.child;u;){if(u===n){a=!0,n=s,r=i;break}if(u===r){a=!0,r=s,n=i;break}u=u.sibling}if(!a)throw Error(D(189))}}if(n.alternate!==r)throw Error(D(190))}if(n.tag!==3)throw Error(D(188));return n.stateNode.current===n?e:t}function Kp(e){return e=k0(e),e!==null?Gp(e):null}function Gp(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Gp(e);if(t!==null)return t;e=e.sibling}return null}var qp=Xe.unstable_scheduleCallback,wh=Xe.unstable_cancelCallback,C0=Xe.unstable_shouldYield,P0=Xe.unstable_requestPaint,he=Xe.unstable_now,A0=Xe.unstable_getCurrentPriorityLevel,rc=Xe.unstable_ImmediatePriority,Qp=Xe.unstable_UserBlockingPriority,Io=Xe.unstable_NormalPriority,R0=Xe.unstable_LowPriority,Xp=Xe.unstable_IdlePriority,sa=null,kt=null;function N0(e){if(kt&&typeof kt.onCommitFiberRoot=="function")try{kt.onCommitFiberRoot(sa,e,void 0,(e.current.flags&128)===128)}catch{}}var pt=Math.clz32?Math.clz32:L0,O0=Math.log,x0=Math.LN2;function L0(e){return e>>>=0,e===0?32:31-(O0(e)/x0|0)|0}var $s=64,Bs=4194304;function Ai(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function To(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,s=e.pingedLanes,a=n&268435455;if(a!==0){var u=a&~i;u!==0?r=Ai(u):(s&=a,s!==0&&(r=Ai(s)))}else a=n&~i,a!==0?r=Ai(a):s!==0&&(r=Ai(s));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,s=t&-t,i>=s||i===16&&(s&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-pt(t),i=1<<n,r|=e[n],t&=~i;return r}function D0(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function M0(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,s=e.pendingLanes;0<s;){var a=31-pt(s),u=1<<a,c=i[a];c===-1?(!(u&n)||u&r)&&(i[a]=D0(u,t)):c<=t&&(e.expiredLanes|=u),s&=~u}}function nu(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Yp(){var e=$s;return $s<<=1,!($s&4194240)&&($s=64),e}function al(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function hs(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-pt(t),e[t]=n}function U0(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-pt(n),s=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~s}}function ic(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-pt(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var X=0;function Jp(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Zp,sc,eg,tg,ng,ru=!1,Vs=[],yn=null,wn=null,_n=null,Ki=new Map,Gi=new Map,un=[],j0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function _h(e,t){switch(e){case"focusin":case"focusout":yn=null;break;case"dragenter":case"dragleave":wn=null;break;case"mouseover":case"mouseout":_n=null;break;case"pointerover":case"pointerout":Ki.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Gi.delete(t.pointerId)}}function _i(e,t,n,r,i,s){return e===null||e.nativeEvent!==s?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},t!==null&&(t=ps(t),t!==null&&sc(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function F0(e,t,n,r,i){switch(t){case"focusin":return yn=_i(yn,e,t,n,r,i),!0;case"dragenter":return wn=_i(wn,e,t,n,r,i),!0;case"mouseover":return _n=_i(_n,e,t,n,r,i),!0;case"pointerover":var s=i.pointerId;return Ki.set(s,_i(Ki.get(s)||null,e,t,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,Gi.set(s,_i(Gi.get(s)||null,e,t,n,r,i)),!0}return!1}function rg(e){var t=Vn(e.target);if(t!==null){var n=or(t);if(n!==null){if(t=n.tag,t===13){if(t=Wp(n),t!==null){e.blockedOn=t,ng(e.priority,function(){eg(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function so(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=iu(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Jl=r,n.target.dispatchEvent(r),Jl=null}else return t=ps(n),t!==null&&sc(t),e.blockedOn=n,!1;t.shift()}return!0}function Eh(e,t,n){so(e)&&n.delete(t)}function b0(){ru=!1,yn!==null&&so(yn)&&(yn=null),wn!==null&&so(wn)&&(wn=null),_n!==null&&so(_n)&&(_n=null),Ki.forEach(Eh),Gi.forEach(Eh)}function Ei(e,t){e.blockedOn===t&&(e.blockedOn=null,ru||(ru=!0,Xe.unstable_scheduleCallback(Xe.unstable_NormalPriority,b0)))}function qi(e){function t(i){return Ei(i,e)}if(0<Vs.length){Ei(Vs[0],e);for(var n=1;n<Vs.length;n++){var r=Vs[n];r.blockedOn===e&&(r.blockedOn=null)}}for(yn!==null&&Ei(yn,e),wn!==null&&Ei(wn,e),_n!==null&&Ei(_n,e),Ki.forEach(t),Gi.forEach(t),n=0;n<un.length;n++)r=un[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<un.length&&(n=un[0],n.blockedOn===null);)rg(n),n.blockedOn===null&&un.shift()}var Lr=Yt.ReactCurrentBatchConfig,ko=!0;function z0(e,t,n,r){var i=X,s=Lr.transition;Lr.transition=null;try{X=1,oc(e,t,n,r)}finally{X=i,Lr.transition=s}}function $0(e,t,n,r){var i=X,s=Lr.transition;Lr.transition=null;try{X=4,oc(e,t,n,r)}finally{X=i,Lr.transition=s}}function oc(e,t,n,r){if(ko){var i=iu(e,t,n,r);if(i===null)vl(e,t,r,Co,n),_h(e,r);else if(F0(i,e,t,n,r))r.stopPropagation();else if(_h(e,r),t&4&&-1<j0.indexOf(e)){for(;i!==null;){var s=ps(i);if(s!==null&&Zp(s),s=iu(e,t,n,r),s===null&&vl(e,t,r,Co,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else vl(e,t,r,null,n)}}var Co=null;function iu(e,t,n,r){if(Co=null,e=nc(r),e=Vn(e),e!==null)if(t=or(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Wp(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Co=e,null}function ig(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(A0()){case rc:return 1;case Qp:return 4;case Io:case R0:return 16;case Xp:return 536870912;default:return 16}default:return 16}}var gn=null,ac=null,oo=null;function sg(){if(oo)return oo;var e,t=ac,n=t.length,r,i="value"in gn?gn.value:gn.textContent,s=i.length;for(e=0;e<n&&t[e]===i[e];e++);var a=n-e;for(r=1;r<=a&&t[n-r]===i[s-r];r++);return oo=i.slice(e,1<r?1-r:void 0)}function ao(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Hs(){return!0}function Sh(){return!1}function Je(e){function t(n,r,i,s,a){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=a,this.currentTarget=null;for(var u in e)e.hasOwnProperty(u)&&(n=e[u],this[u]=n?n(s):s[u]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Hs:Sh,this.isPropagationStopped=Sh,this}return le(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Hs)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Hs)},persist:function(){},isPersistent:Hs}),t}var Yr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},lc=Je(Yr),fs=le({},Yr,{view:0,detail:0}),B0=Je(fs),ll,ul,Si,oa=le({},fs,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:uc,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Si&&(Si&&e.type==="mousemove"?(ll=e.screenX-Si.screenX,ul=e.screenY-Si.screenY):ul=ll=0,Si=e),ll)},movementY:function(e){return"movementY"in e?e.movementY:ul}}),Ih=Je(oa),V0=le({},oa,{dataTransfer:0}),H0=Je(V0),W0=le({},fs,{relatedTarget:0}),cl=Je(W0),K0=le({},Yr,{animationName:0,elapsedTime:0,pseudoElement:0}),G0=Je(K0),q0=le({},Yr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Q0=Je(q0),X0=le({},Yr,{data:0}),Th=Je(X0),Y0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},J0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Z0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function ew(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Z0[e])?!!t[e]:!1}function uc(){return ew}var tw=le({},fs,{key:function(e){if(e.key){var t=Y0[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=ao(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?J0[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:uc,charCode:function(e){return e.type==="keypress"?ao(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?ao(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),nw=Je(tw),rw=le({},oa,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),kh=Je(rw),iw=le({},fs,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:uc}),sw=Je(iw),ow=le({},Yr,{propertyName:0,elapsedTime:0,pseudoElement:0}),aw=Je(ow),lw=le({},oa,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),uw=Je(lw),cw=[9,13,27,32],cc=Kt&&"CompositionEvent"in window,Di=null;Kt&&"documentMode"in document&&(Di=document.documentMode);var dw=Kt&&"TextEvent"in window&&!Di,og=Kt&&(!cc||Di&&8<Di&&11>=Di),Ch=" ",Ph=!1;function ag(e,t){switch(e){case"keyup":return cw.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function lg(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var wr=!1;function hw(e,t){switch(e){case"compositionend":return lg(t);case"keypress":return t.which!==32?null:(Ph=!0,Ch);case"textInput":return e=t.data,e===Ch&&Ph?null:e;default:return null}}function fw(e,t){if(wr)return e==="compositionend"||!cc&&ag(e,t)?(e=sg(),oo=ac=gn=null,wr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return og&&t.locale!=="ko"?null:t.data;default:return null}}var pw={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ah(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!pw[e.type]:t==="textarea"}function ug(e,t,n,r){zp(r),t=Po(t,"onChange"),0<t.length&&(n=new lc("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Mi=null,Qi=null;function gw(e){_g(e,0)}function aa(e){var t=Sr(e);if(Lp(t))return e}function mw(e,t){if(e==="change")return t}var cg=!1;if(Kt){var dl;if(Kt){var hl="oninput"in document;if(!hl){var Rh=document.createElement("div");Rh.setAttribute("oninput","return;"),hl=typeof Rh.oninput=="function"}dl=hl}else dl=!1;cg=dl&&(!document.documentMode||9<document.documentMode)}function Nh(){Mi&&(Mi.detachEvent("onpropertychange",dg),Qi=Mi=null)}function dg(e){if(e.propertyName==="value"&&aa(Qi)){var t=[];ug(t,Qi,e,nc(e)),Hp(gw,t)}}function vw(e,t,n){e==="focusin"?(Nh(),Mi=t,Qi=n,Mi.attachEvent("onpropertychange",dg)):e==="focusout"&&Nh()}function yw(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return aa(Qi)}function ww(e,t){if(e==="click")return aa(t)}function _w(e,t){if(e==="input"||e==="change")return aa(t)}function Ew(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var mt=typeof Object.is=="function"?Object.is:Ew;function Xi(e,t){if(mt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!zl.call(t,i)||!mt(e[i],t[i]))return!1}return!0}function Oh(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function xh(e,t){var n=Oh(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Oh(n)}}function hg(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?hg(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function fg(){for(var e=window,t=_o();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=_o(e.document)}return t}function dc(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Sw(e){var t=fg(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&hg(n.ownerDocument.documentElement,n)){if(r!==null&&dc(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!e.extend&&s>r&&(i=r,r=s,s=i),i=xh(n,s);var a=xh(n,r);i&&a&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==a.node||e.focusOffset!==a.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),s>r?(e.addRange(t),e.extend(a.node,a.offset)):(t.setEnd(a.node,a.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Iw=Kt&&"documentMode"in document&&11>=document.documentMode,_r=null,su=null,Ui=null,ou=!1;function Lh(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;ou||_r==null||_r!==_o(r)||(r=_r,"selectionStart"in r&&dc(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Ui&&Xi(Ui,r)||(Ui=r,r=Po(su,"onSelect"),0<r.length&&(t=new lc("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=_r)))}function Ws(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Er={animationend:Ws("Animation","AnimationEnd"),animationiteration:Ws("Animation","AnimationIteration"),animationstart:Ws("Animation","AnimationStart"),transitionend:Ws("Transition","TransitionEnd")},fl={},pg={};Kt&&(pg=document.createElement("div").style,"AnimationEvent"in window||(delete Er.animationend.animation,delete Er.animationiteration.animation,delete Er.animationstart.animation),"TransitionEvent"in window||delete Er.transitionend.transition);function la(e){if(fl[e])return fl[e];if(!Er[e])return e;var t=Er[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in pg)return fl[e]=t[n];return e}var gg=la("animationend"),mg=la("animationiteration"),vg=la("animationstart"),yg=la("transitionend"),wg=new Map,Dh="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function On(e,t){wg.set(e,t),sr(t,[e])}for(var pl=0;pl<Dh.length;pl++){var gl=Dh[pl],Tw=gl.toLowerCase(),kw=gl[0].toUpperCase()+gl.slice(1);On(Tw,"on"+kw)}On(gg,"onAnimationEnd");On(mg,"onAnimationIteration");On(vg,"onAnimationStart");On("dblclick","onDoubleClick");On("focusin","onFocus");On("focusout","onBlur");On(yg,"onTransitionEnd");zr("onMouseEnter",["mouseout","mouseover"]);zr("onMouseLeave",["mouseout","mouseover"]);zr("onPointerEnter",["pointerout","pointerover"]);zr("onPointerLeave",["pointerout","pointerover"]);sr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));sr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));sr("onBeforeInput",["compositionend","keypress","textInput","paste"]);sr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));sr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));sr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ri="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Cw=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ri));function Mh(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,T0(r,t,void 0,e),e.currentTarget=null}function _g(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var s=void 0;if(t)for(var a=r.length-1;0<=a;a--){var u=r[a],c=u.instance,h=u.currentTarget;if(u=u.listener,c!==s&&i.isPropagationStopped())break e;Mh(i,u,h),s=c}else for(a=0;a<r.length;a++){if(u=r[a],c=u.instance,h=u.currentTarget,u=u.listener,c!==s&&i.isPropagationStopped())break e;Mh(i,u,h),s=c}}}if(So)throw e=tu,So=!1,tu=null,e}function te(e,t){var n=t[du];n===void 0&&(n=t[du]=new Set);var r=e+"__bubble";n.has(r)||(Eg(t,e,2,!1),n.add(r))}function ml(e,t,n){var r=0;t&&(r|=4),Eg(n,e,r,t)}var Ks="_reactListening"+Math.random().toString(36).slice(2);function Yi(e){if(!e[Ks]){e[Ks]=!0,Ap.forEach(function(n){n!=="selectionchange"&&(Cw.has(n)||ml(n,!1,e),ml(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Ks]||(t[Ks]=!0,ml("selectionchange",!1,t))}}function Eg(e,t,n,r){switch(ig(t)){case 1:var i=z0;break;case 4:i=$0;break;default:i=oc}n=i.bind(null,t,n,e),i=void 0,!eu||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function vl(e,t,n,r,i){var s=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var a=r.tag;if(a===3||a===4){var u=r.stateNode.containerInfo;if(u===i||u.nodeType===8&&u.parentNode===i)break;if(a===4)for(a=r.return;a!==null;){var c=a.tag;if((c===3||c===4)&&(c=a.stateNode.containerInfo,c===i||c.nodeType===8&&c.parentNode===i))return;a=a.return}for(;u!==null;){if(a=Vn(u),a===null)return;if(c=a.tag,c===5||c===6){r=s=a;continue e}u=u.parentNode}}r=r.return}Hp(function(){var h=s,w=nc(n),g=[];e:{var S=wg.get(e);if(S!==void 0){var N=lc,A=e;switch(e){case"keypress":if(ao(n)===0)break e;case"keydown":case"keyup":N=nw;break;case"focusin":A="focus",N=cl;break;case"focusout":A="blur",N=cl;break;case"beforeblur":case"afterblur":N=cl;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":N=Ih;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":N=H0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":N=sw;break;case gg:case mg:case vg:N=G0;break;case yg:N=aw;break;case"scroll":N=B0;break;case"wheel":N=uw;break;case"copy":case"cut":case"paste":N=Q0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":N=kh}var x=(t&4)!==0,L=!x&&e==="scroll",T=x?S!==null?S+"Capture":null:S;x=[];for(var m=h,I;m!==null;){I=m;var O=I.stateNode;if(I.tag===5&&O!==null&&(I=O,T!==null&&(O=Wi(m,T),O!=null&&x.push(Ji(m,O,I)))),L)break;m=m.return}0<x.length&&(S=new N(S,A,null,n,w),g.push({event:S,listeners:x}))}}if(!(t&7)){e:{if(S=e==="mouseover"||e==="pointerover",N=e==="mouseout"||e==="pointerout",S&&n!==Jl&&(A=n.relatedTarget||n.fromElement)&&(Vn(A)||A[Gt]))break e;if((N||S)&&(S=w.window===w?w:(S=w.ownerDocument)?S.defaultView||S.parentWindow:window,N?(A=n.relatedTarget||n.toElement,N=h,A=A?Vn(A):null,A!==null&&(L=or(A),A!==L||A.tag!==5&&A.tag!==6)&&(A=null)):(N=null,A=h),N!==A)){if(x=Ih,O="onMouseLeave",T="onMouseEnter",m="mouse",(e==="pointerout"||e==="pointerover")&&(x=kh,O="onPointerLeave",T="onPointerEnter",m="pointer"),L=N==null?S:Sr(N),I=A==null?S:Sr(A),S=new x(O,m+"leave",N,n,w),S.target=L,S.relatedTarget=I,O=null,Vn(w)===h&&(x=new x(T,m+"enter",A,n,w),x.target=I,x.relatedTarget=L,O=x),L=O,N&&A)t:{for(x=N,T=A,m=0,I=x;I;I=gr(I))m++;for(I=0,O=T;O;O=gr(O))I++;for(;0<m-I;)x=gr(x),m--;for(;0<I-m;)T=gr(T),I--;for(;m--;){if(x===T||T!==null&&x===T.alternate)break t;x=gr(x),T=gr(T)}x=null}else x=null;N!==null&&Uh(g,S,N,x,!1),A!==null&&L!==null&&Uh(g,L,A,x,!0)}}e:{if(S=h?Sr(h):window,N=S.nodeName&&S.nodeName.toLowerCase(),N==="select"||N==="input"&&S.type==="file")var j=mw;else if(Ah(S))if(cg)j=_w;else{j=yw;var b=vw}else(N=S.nodeName)&&N.toLowerCase()==="input"&&(S.type==="checkbox"||S.type==="radio")&&(j=ww);if(j&&(j=j(e,h))){ug(g,j,n,w);break e}b&&b(e,S,h),e==="focusout"&&(b=S._wrapperState)&&b.controlled&&S.type==="number"&&Gl(S,"number",S.value)}switch(b=h?Sr(h):window,e){case"focusin":(Ah(b)||b.contentEditable==="true")&&(_r=b,su=h,Ui=null);break;case"focusout":Ui=su=_r=null;break;case"mousedown":ou=!0;break;case"contextmenu":case"mouseup":case"dragend":ou=!1,Lh(g,n,w);break;case"selectionchange":if(Iw)break;case"keydown":case"keyup":Lh(g,n,w)}var y;if(cc)e:{switch(e){case"compositionstart":var p="onCompositionStart";break e;case"compositionend":p="onCompositionEnd";break e;case"compositionupdate":p="onCompositionUpdate";break e}p=void 0}else wr?ag(e,n)&&(p="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(p="onCompositionStart");p&&(og&&n.locale!=="ko"&&(wr||p!=="onCompositionStart"?p==="onCompositionEnd"&&wr&&(y=sg()):(gn=w,ac="value"in gn?gn.value:gn.textContent,wr=!0)),b=Po(h,p),0<b.length&&(p=new Th(p,e,null,n,w),g.push({event:p,listeners:b}),y?p.data=y:(y=lg(n),y!==null&&(p.data=y)))),(y=dw?hw(e,n):fw(e,n))&&(h=Po(h,"onBeforeInput"),0<h.length&&(w=new Th("onBeforeInput","beforeinput",null,n,w),g.push({event:w,listeners:h}),w.data=y))}_g(g,t)})}function Ji(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Po(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=Wi(e,n),s!=null&&r.unshift(Ji(e,s,i)),s=Wi(e,t),s!=null&&r.push(Ji(e,s,i))),e=e.return}return r}function gr(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Uh(e,t,n,r,i){for(var s=t._reactName,a=[];n!==null&&n!==r;){var u=n,c=u.alternate,h=u.stateNode;if(c!==null&&c===r)break;u.tag===5&&h!==null&&(u=h,i?(c=Wi(n,s),c!=null&&a.unshift(Ji(n,c,u))):i||(c=Wi(n,s),c!=null&&a.push(Ji(n,c,u)))),n=n.return}a.length!==0&&e.push({event:t,listeners:a})}var Pw=/\r\n?/g,Aw=/\u0000|\uFFFD/g;function jh(e){return(typeof e=="string"?e:""+e).replace(Pw,`
`).replace(Aw,"")}function Gs(e,t,n){if(t=jh(t),jh(e)!==t&&n)throw Error(D(425))}function Ao(){}var au=null,lu=null;function uu(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var cu=typeof setTimeout=="function"?setTimeout:void 0,Rw=typeof clearTimeout=="function"?clearTimeout:void 0,Fh=typeof Promise=="function"?Promise:void 0,Nw=typeof queueMicrotask=="function"?queueMicrotask:typeof Fh<"u"?function(e){return Fh.resolve(null).then(e).catch(Ow)}:cu;function Ow(e){setTimeout(function(){throw e})}function yl(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),qi(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);qi(t)}function En(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function bh(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Jr=Math.random().toString(36).slice(2),It="__reactFiber$"+Jr,Zi="__reactProps$"+Jr,Gt="__reactContainer$"+Jr,du="__reactEvents$"+Jr,xw="__reactListeners$"+Jr,Lw="__reactHandles$"+Jr;function Vn(e){var t=e[It];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Gt]||n[It]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=bh(e);e!==null;){if(n=e[It])return n;e=bh(e)}return t}e=n,n=e.parentNode}return null}function ps(e){return e=e[It]||e[Gt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Sr(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(D(33))}function ua(e){return e[Zi]||null}var hu=[],Ir=-1;function xn(e){return{current:e}}function ne(e){0>Ir||(e.current=hu[Ir],hu[Ir]=null,Ir--)}function Z(e,t){Ir++,hu[Ir]=e.current,e.current=t}var Nn={},Oe=xn(Nn),$e=xn(!1),Qn=Nn;function $r(e,t){var n=e.type.contextTypes;if(!n)return Nn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=t[s];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function Be(e){return e=e.childContextTypes,e!=null}function Ro(){ne($e),ne(Oe)}function zh(e,t,n){if(Oe.current!==Nn)throw Error(D(168));Z(Oe,t),Z($e,n)}function Sg(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(D(108,v0(e)||"Unknown",i));return le({},n,r)}function No(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Nn,Qn=Oe.current,Z(Oe,e),Z($e,$e.current),!0}function $h(e,t,n){var r=e.stateNode;if(!r)throw Error(D(169));n?(e=Sg(e,t,Qn),r.__reactInternalMemoizedMergedChildContext=e,ne($e),ne(Oe),Z(Oe,e)):ne($e),Z($e,n)}var Ft=null,ca=!1,wl=!1;function Ig(e){Ft===null?Ft=[e]:Ft.push(e)}function Dw(e){ca=!0,Ig(e)}function Ln(){if(!wl&&Ft!==null){wl=!0;var e=0,t=X;try{var n=Ft;for(X=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Ft=null,ca=!1}catch(i){throw Ft!==null&&(Ft=Ft.slice(e+1)),qp(rc,Ln),i}finally{X=t,wl=!1}}return null}var Tr=[],kr=0,Oo=null,xo=0,tt=[],nt=0,Xn=null,bt=1,zt="";function zn(e,t){Tr[kr++]=xo,Tr[kr++]=Oo,Oo=e,xo=t}function Tg(e,t,n){tt[nt++]=bt,tt[nt++]=zt,tt[nt++]=Xn,Xn=e;var r=bt;e=zt;var i=32-pt(r)-1;r&=~(1<<i),n+=1;var s=32-pt(t)+i;if(30<s){var a=i-i%5;s=(r&(1<<a)-1).toString(32),r>>=a,i-=a,bt=1<<32-pt(t)+i|n<<i|r,zt=s+e}else bt=1<<s|n<<i|r,zt=e}function hc(e){e.return!==null&&(zn(e,1),Tg(e,1,0))}function fc(e){for(;e===Oo;)Oo=Tr[--kr],Tr[kr]=null,xo=Tr[--kr],Tr[kr]=null;for(;e===Xn;)Xn=tt[--nt],tt[nt]=null,zt=tt[--nt],tt[nt]=null,bt=tt[--nt],tt[nt]=null}var qe=null,Ke=null,re=!1,ft=null;function kg(e,t){var n=rt(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Bh(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,qe=e,Ke=En(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,qe=e,Ke=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Xn!==null?{id:bt,overflow:zt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=rt(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,qe=e,Ke=null,!0):!1;default:return!1}}function fu(e){return(e.mode&1)!==0&&(e.flags&128)===0}function pu(e){if(re){var t=Ke;if(t){var n=t;if(!Bh(e,t)){if(fu(e))throw Error(D(418));t=En(n.nextSibling);var r=qe;t&&Bh(e,t)?kg(r,n):(e.flags=e.flags&-4097|2,re=!1,qe=e)}}else{if(fu(e))throw Error(D(418));e.flags=e.flags&-4097|2,re=!1,qe=e}}}function Vh(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;qe=e}function qs(e){if(e!==qe)return!1;if(!re)return Vh(e),re=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!uu(e.type,e.memoizedProps)),t&&(t=Ke)){if(fu(e))throw Cg(),Error(D(418));for(;t;)kg(e,t),t=En(t.nextSibling)}if(Vh(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(D(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Ke=En(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Ke=null}}else Ke=qe?En(e.stateNode.nextSibling):null;return!0}function Cg(){for(var e=Ke;e;)e=En(e.nextSibling)}function Br(){Ke=qe=null,re=!1}function pc(e){ft===null?ft=[e]:ft.push(e)}var Mw=Yt.ReactCurrentBatchConfig;function Ii(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(D(309));var r=n.stateNode}if(!r)throw Error(D(147,e));var i=r,s=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===s?t.ref:(t=function(a){var u=i.refs;a===null?delete u[s]:u[s]=a},t._stringRef=s,t)}if(typeof e!="string")throw Error(D(284));if(!n._owner)throw Error(D(290,e))}return e}function Qs(e,t){throw e=Object.prototype.toString.call(t),Error(D(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Hh(e){var t=e._init;return t(e._payload)}function Pg(e){function t(T,m){if(e){var I=T.deletions;I===null?(T.deletions=[m],T.flags|=16):I.push(m)}}function n(T,m){if(!e)return null;for(;m!==null;)t(T,m),m=m.sibling;return null}function r(T,m){for(T=new Map;m!==null;)m.key!==null?T.set(m.key,m):T.set(m.index,m),m=m.sibling;return T}function i(T,m){return T=kn(T,m),T.index=0,T.sibling=null,T}function s(T,m,I){return T.index=I,e?(I=T.alternate,I!==null?(I=I.index,I<m?(T.flags|=2,m):I):(T.flags|=2,m)):(T.flags|=1048576,m)}function a(T){return e&&T.alternate===null&&(T.flags|=2),T}function u(T,m,I,O){return m===null||m.tag!==6?(m=Cl(I,T.mode,O),m.return=T,m):(m=i(m,I),m.return=T,m)}function c(T,m,I,O){var j=I.type;return j===yr?w(T,m,I.props.children,O,I.key):m!==null&&(m.elementType===j||typeof j=="object"&&j!==null&&j.$$typeof===an&&Hh(j)===m.type)?(O=i(m,I.props),O.ref=Ii(T,m,I),O.return=T,O):(O=go(I.type,I.key,I.props,null,T.mode,O),O.ref=Ii(T,m,I),O.return=T,O)}function h(T,m,I,O){return m===null||m.tag!==4||m.stateNode.containerInfo!==I.containerInfo||m.stateNode.implementation!==I.implementation?(m=Pl(I,T.mode,O),m.return=T,m):(m=i(m,I.children||[]),m.return=T,m)}function w(T,m,I,O,j){return m===null||m.tag!==7?(m=qn(I,T.mode,O,j),m.return=T,m):(m=i(m,I),m.return=T,m)}function g(T,m,I){if(typeof m=="string"&&m!==""||typeof m=="number")return m=Cl(""+m,T.mode,I),m.return=T,m;if(typeof m=="object"&&m!==null){switch(m.$$typeof){case Fs:return I=go(m.type,m.key,m.props,null,T.mode,I),I.ref=Ii(T,null,m),I.return=T,I;case vr:return m=Pl(m,T.mode,I),m.return=T,m;case an:var O=m._init;return g(T,O(m._payload),I)}if(Pi(m)||yi(m))return m=qn(m,T.mode,I,null),m.return=T,m;Qs(T,m)}return null}function S(T,m,I,O){var j=m!==null?m.key:null;if(typeof I=="string"&&I!==""||typeof I=="number")return j!==null?null:u(T,m,""+I,O);if(typeof I=="object"&&I!==null){switch(I.$$typeof){case Fs:return I.key===j?c(T,m,I,O):null;case vr:return I.key===j?h(T,m,I,O):null;case an:return j=I._init,S(T,m,j(I._payload),O)}if(Pi(I)||yi(I))return j!==null?null:w(T,m,I,O,null);Qs(T,I)}return null}function N(T,m,I,O,j){if(typeof O=="string"&&O!==""||typeof O=="number")return T=T.get(I)||null,u(m,T,""+O,j);if(typeof O=="object"&&O!==null){switch(O.$$typeof){case Fs:return T=T.get(O.key===null?I:O.key)||null,c(m,T,O,j);case vr:return T=T.get(O.key===null?I:O.key)||null,h(m,T,O,j);case an:var b=O._init;return N(T,m,I,b(O._payload),j)}if(Pi(O)||yi(O))return T=T.get(I)||null,w(m,T,O,j,null);Qs(m,O)}return null}function A(T,m,I,O){for(var j=null,b=null,y=m,p=m=0,v=null;y!==null&&p<I.length;p++){y.index>p?(v=y,y=null):v=y.sibling;var _=S(T,y,I[p],O);if(_===null){y===null&&(y=v);break}e&&y&&_.alternate===null&&t(T,y),m=s(_,m,p),b===null?j=_:b.sibling=_,b=_,y=v}if(p===I.length)return n(T,y),re&&zn(T,p),j;if(y===null){for(;p<I.length;p++)y=g(T,I[p],O),y!==null&&(m=s(y,m,p),b===null?j=y:b.sibling=y,b=y);return re&&zn(T,p),j}for(y=r(T,y);p<I.length;p++)v=N(y,T,p,I[p],O),v!==null&&(e&&v.alternate!==null&&y.delete(v.key===null?p:v.key),m=s(v,m,p),b===null?j=v:b.sibling=v,b=v);return e&&y.forEach(function(k){return t(T,k)}),re&&zn(T,p),j}function x(T,m,I,O){var j=yi(I);if(typeof j!="function")throw Error(D(150));if(I=j.call(I),I==null)throw Error(D(151));for(var b=j=null,y=m,p=m=0,v=null,_=I.next();y!==null&&!_.done;p++,_=I.next()){y.index>p?(v=y,y=null):v=y.sibling;var k=S(T,y,_.value,O);if(k===null){y===null&&(y=v);break}e&&y&&k.alternate===null&&t(T,y),m=s(k,m,p),b===null?j=k:b.sibling=k,b=k,y=v}if(_.done)return n(T,y),re&&zn(T,p),j;if(y===null){for(;!_.done;p++,_=I.next())_=g(T,_.value,O),_!==null&&(m=s(_,m,p),b===null?j=_:b.sibling=_,b=_);return re&&zn(T,p),j}for(y=r(T,y);!_.done;p++,_=I.next())_=N(y,T,p,_.value,O),_!==null&&(e&&_.alternate!==null&&y.delete(_.key===null?p:_.key),m=s(_,m,p),b===null?j=_:b.sibling=_,b=_);return e&&y.forEach(function(P){return t(T,P)}),re&&zn(T,p),j}function L(T,m,I,O){if(typeof I=="object"&&I!==null&&I.type===yr&&I.key===null&&(I=I.props.children),typeof I=="object"&&I!==null){switch(I.$$typeof){case Fs:e:{for(var j=I.key,b=m;b!==null;){if(b.key===j){if(j=I.type,j===yr){if(b.tag===7){n(T,b.sibling),m=i(b,I.props.children),m.return=T,T=m;break e}}else if(b.elementType===j||typeof j=="object"&&j!==null&&j.$$typeof===an&&Hh(j)===b.type){n(T,b.sibling),m=i(b,I.props),m.ref=Ii(T,b,I),m.return=T,T=m;break e}n(T,b);break}else t(T,b);b=b.sibling}I.type===yr?(m=qn(I.props.children,T.mode,O,I.key),m.return=T,T=m):(O=go(I.type,I.key,I.props,null,T.mode,O),O.ref=Ii(T,m,I),O.return=T,T=O)}return a(T);case vr:e:{for(b=I.key;m!==null;){if(m.key===b)if(m.tag===4&&m.stateNode.containerInfo===I.containerInfo&&m.stateNode.implementation===I.implementation){n(T,m.sibling),m=i(m,I.children||[]),m.return=T,T=m;break e}else{n(T,m);break}else t(T,m);m=m.sibling}m=Pl(I,T.mode,O),m.return=T,T=m}return a(T);case an:return b=I._init,L(T,m,b(I._payload),O)}if(Pi(I))return A(T,m,I,O);if(yi(I))return x(T,m,I,O);Qs(T,I)}return typeof I=="string"&&I!==""||typeof I=="number"?(I=""+I,m!==null&&m.tag===6?(n(T,m.sibling),m=i(m,I),m.return=T,T=m):(n(T,m),m=Cl(I,T.mode,O),m.return=T,T=m),a(T)):n(T,m)}return L}var Vr=Pg(!0),Ag=Pg(!1),Lo=xn(null),Do=null,Cr=null,gc=null;function mc(){gc=Cr=Do=null}function vc(e){var t=Lo.current;ne(Lo),e._currentValue=t}function gu(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Dr(e,t){Do=e,gc=Cr=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(ze=!0),e.firstContext=null)}function ot(e){var t=e._currentValue;if(gc!==e)if(e={context:e,memoizedValue:t,next:null},Cr===null){if(Do===null)throw Error(D(308));Cr=e,Do.dependencies={lanes:0,firstContext:e}}else Cr=Cr.next=e;return t}var Hn=null;function yc(e){Hn===null?Hn=[e]:Hn.push(e)}function Rg(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,yc(t)):(n.next=i.next,i.next=n),t.interleaved=n,qt(e,r)}function qt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var ln=!1;function wc(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Ng(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Ht(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Sn(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,G&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,qt(e,n)}return i=r.interleaved,i===null?(t.next=t,yc(r)):(t.next=i.next,i.next=t),r.interleaved=t,qt(e,n)}function lo(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,ic(e,n)}}function Wh(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=a:s=s.next=a,n=n.next}while(n!==null);s===null?i=s=t:s=s.next=t}else i=s=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Mo(e,t,n,r){var i=e.updateQueue;ln=!1;var s=i.firstBaseUpdate,a=i.lastBaseUpdate,u=i.shared.pending;if(u!==null){i.shared.pending=null;var c=u,h=c.next;c.next=null,a===null?s=h:a.next=h,a=c;var w=e.alternate;w!==null&&(w=w.updateQueue,u=w.lastBaseUpdate,u!==a&&(u===null?w.firstBaseUpdate=h:u.next=h,w.lastBaseUpdate=c))}if(s!==null){var g=i.baseState;a=0,w=h=c=null,u=s;do{var S=u.lane,N=u.eventTime;if((r&S)===S){w!==null&&(w=w.next={eventTime:N,lane:0,tag:u.tag,payload:u.payload,callback:u.callback,next:null});e:{var A=e,x=u;switch(S=t,N=n,x.tag){case 1:if(A=x.payload,typeof A=="function"){g=A.call(N,g,S);break e}g=A;break e;case 3:A.flags=A.flags&-65537|128;case 0:if(A=x.payload,S=typeof A=="function"?A.call(N,g,S):A,S==null)break e;g=le({},g,S);break e;case 2:ln=!0}}u.callback!==null&&u.lane!==0&&(e.flags|=64,S=i.effects,S===null?i.effects=[u]:S.push(u))}else N={eventTime:N,lane:S,tag:u.tag,payload:u.payload,callback:u.callback,next:null},w===null?(h=w=N,c=g):w=w.next=N,a|=S;if(u=u.next,u===null){if(u=i.shared.pending,u===null)break;S=u,u=S.next,S.next=null,i.lastBaseUpdate=S,i.shared.pending=null}}while(!0);if(w===null&&(c=g),i.baseState=c,i.firstBaseUpdate=h,i.lastBaseUpdate=w,t=i.shared.interleaved,t!==null){i=t;do a|=i.lane,i=i.next;while(i!==t)}else s===null&&(i.shared.lanes=0);Jn|=a,e.lanes=a,e.memoizedState=g}}function Kh(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(D(191,i));i.call(r)}}}var gs={},Ct=xn(gs),es=xn(gs),ts=xn(gs);function Wn(e){if(e===gs)throw Error(D(174));return e}function _c(e,t){switch(Z(ts,t),Z(es,e),Z(Ct,gs),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Ql(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Ql(t,e)}ne(Ct),Z(Ct,t)}function Hr(){ne(Ct),ne(es),ne(ts)}function Og(e){Wn(ts.current);var t=Wn(Ct.current),n=Ql(t,e.type);t!==n&&(Z(es,e),Z(Ct,n))}function Ec(e){es.current===e&&(ne(Ct),ne(es))}var se=xn(0);function Uo(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var _l=[];function Sc(){for(var e=0;e<_l.length;e++)_l[e]._workInProgressVersionPrimary=null;_l.length=0}var uo=Yt.ReactCurrentDispatcher,El=Yt.ReactCurrentBatchConfig,Yn=0,oe=null,pe=null,me=null,jo=!1,ji=!1,ns=0,Uw=0;function ke(){throw Error(D(321))}function Ic(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!mt(e[n],t[n]))return!1;return!0}function Tc(e,t,n,r,i,s){if(Yn=s,oe=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,uo.current=e===null||e.memoizedState===null?zw:$w,e=n(r,i),ji){s=0;do{if(ji=!1,ns=0,25<=s)throw Error(D(301));s+=1,me=pe=null,t.updateQueue=null,uo.current=Bw,e=n(r,i)}while(ji)}if(uo.current=Fo,t=pe!==null&&pe.next!==null,Yn=0,me=pe=oe=null,jo=!1,t)throw Error(D(300));return e}function kc(){var e=ns!==0;return ns=0,e}function St(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return me===null?oe.memoizedState=me=e:me=me.next=e,me}function at(){if(pe===null){var e=oe.alternate;e=e!==null?e.memoizedState:null}else e=pe.next;var t=me===null?oe.memoizedState:me.next;if(t!==null)me=t,pe=e;else{if(e===null)throw Error(D(310));pe=e,e={memoizedState:pe.memoizedState,baseState:pe.baseState,baseQueue:pe.baseQueue,queue:pe.queue,next:null},me===null?oe.memoizedState=me=e:me=me.next=e}return me}function rs(e,t){return typeof t=="function"?t(e):t}function Sl(e){var t=at(),n=t.queue;if(n===null)throw Error(D(311));n.lastRenderedReducer=e;var r=pe,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var a=i.next;i.next=s.next,s.next=a}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var u=a=null,c=null,h=s;do{var w=h.lane;if((Yn&w)===w)c!==null&&(c=c.next={lane:0,action:h.action,hasEagerState:h.hasEagerState,eagerState:h.eagerState,next:null}),r=h.hasEagerState?h.eagerState:e(r,h.action);else{var g={lane:w,action:h.action,hasEagerState:h.hasEagerState,eagerState:h.eagerState,next:null};c===null?(u=c=g,a=r):c=c.next=g,oe.lanes|=w,Jn|=w}h=h.next}while(h!==null&&h!==s);c===null?a=r:c.next=u,mt(r,t.memoizedState)||(ze=!0),t.memoizedState=r,t.baseState=a,t.baseQueue=c,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do s=i.lane,oe.lanes|=s,Jn|=s,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Il(e){var t=at(),n=t.queue;if(n===null)throw Error(D(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,s=t.memoizedState;if(i!==null){n.pending=null;var a=i=i.next;do s=e(s,a.action),a=a.next;while(a!==i);mt(s,t.memoizedState)||(ze=!0),t.memoizedState=s,t.baseQueue===null&&(t.baseState=s),n.lastRenderedState=s}return[s,r]}function xg(){}function Lg(e,t){var n=oe,r=at(),i=t(),s=!mt(r.memoizedState,i);if(s&&(r.memoizedState=i,ze=!0),r=r.queue,Cc(Ug.bind(null,n,r,e),[e]),r.getSnapshot!==t||s||me!==null&&me.memoizedState.tag&1){if(n.flags|=2048,is(9,Mg.bind(null,n,r,i,t),void 0,null),ve===null)throw Error(D(349));Yn&30||Dg(n,t,i)}return i}function Dg(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=oe.updateQueue,t===null?(t={lastEffect:null,stores:null},oe.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Mg(e,t,n,r){t.value=n,t.getSnapshot=r,jg(t)&&Fg(e)}function Ug(e,t,n){return n(function(){jg(t)&&Fg(e)})}function jg(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!mt(e,n)}catch{return!0}}function Fg(e){var t=qt(e,1);t!==null&&gt(t,e,1,-1)}function Gh(e){var t=St();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:rs,lastRenderedState:e},t.queue=e,e=e.dispatch=bw.bind(null,oe,e),[t.memoizedState,e]}function is(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=oe.updateQueue,t===null?(t={lastEffect:null,stores:null},oe.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function bg(){return at().memoizedState}function co(e,t,n,r){var i=St();oe.flags|=e,i.memoizedState=is(1|t,n,void 0,r===void 0?null:r)}function da(e,t,n,r){var i=at();r=r===void 0?null:r;var s=void 0;if(pe!==null){var a=pe.memoizedState;if(s=a.destroy,r!==null&&Ic(r,a.deps)){i.memoizedState=is(t,n,s,r);return}}oe.flags|=e,i.memoizedState=is(1|t,n,s,r)}function qh(e,t){return co(8390656,8,e,t)}function Cc(e,t){return da(2048,8,e,t)}function zg(e,t){return da(4,2,e,t)}function $g(e,t){return da(4,4,e,t)}function Bg(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Vg(e,t,n){return n=n!=null?n.concat([e]):null,da(4,4,Bg.bind(null,t,e),n)}function Pc(){}function Hg(e,t){var n=at();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Ic(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Wg(e,t){var n=at();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Ic(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Kg(e,t,n){return Yn&21?(mt(n,t)||(n=Yp(),oe.lanes|=n,Jn|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,ze=!0),e.memoizedState=n)}function jw(e,t){var n=X;X=n!==0&&4>n?n:4,e(!0);var r=El.transition;El.transition={};try{e(!1),t()}finally{X=n,El.transition=r}}function Gg(){return at().memoizedState}function Fw(e,t,n){var r=Tn(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},qg(e))Qg(t,n);else if(n=Rg(e,t,n,r),n!==null){var i=Ue();gt(n,e,r,i),Xg(n,t,r)}}function bw(e,t,n){var r=Tn(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(qg(e))Qg(t,i);else{var s=e.alternate;if(e.lanes===0&&(s===null||s.lanes===0)&&(s=t.lastRenderedReducer,s!==null))try{var a=t.lastRenderedState,u=s(a,n);if(i.hasEagerState=!0,i.eagerState=u,mt(u,a)){var c=t.interleaved;c===null?(i.next=i,yc(t)):(i.next=c.next,c.next=i),t.interleaved=i;return}}catch{}finally{}n=Rg(e,t,i,r),n!==null&&(i=Ue(),gt(n,e,r,i),Xg(n,t,r))}}function qg(e){var t=e.alternate;return e===oe||t!==null&&t===oe}function Qg(e,t){ji=jo=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Xg(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,ic(e,n)}}var Fo={readContext:ot,useCallback:ke,useContext:ke,useEffect:ke,useImperativeHandle:ke,useInsertionEffect:ke,useLayoutEffect:ke,useMemo:ke,useReducer:ke,useRef:ke,useState:ke,useDebugValue:ke,useDeferredValue:ke,useTransition:ke,useMutableSource:ke,useSyncExternalStore:ke,useId:ke,unstable_isNewReconciler:!1},zw={readContext:ot,useCallback:function(e,t){return St().memoizedState=[e,t===void 0?null:t],e},useContext:ot,useEffect:qh,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,co(4194308,4,Bg.bind(null,t,e),n)},useLayoutEffect:function(e,t){return co(4194308,4,e,t)},useInsertionEffect:function(e,t){return co(4,2,e,t)},useMemo:function(e,t){var n=St();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=St();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Fw.bind(null,oe,e),[r.memoizedState,e]},useRef:function(e){var t=St();return e={current:e},t.memoizedState=e},useState:Gh,useDebugValue:Pc,useDeferredValue:function(e){return St().memoizedState=e},useTransition:function(){var e=Gh(!1),t=e[0];return e=jw.bind(null,e[1]),St().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=oe,i=St();if(re){if(n===void 0)throw Error(D(407));n=n()}else{if(n=t(),ve===null)throw Error(D(349));Yn&30||Dg(r,t,n)}i.memoizedState=n;var s={value:n,getSnapshot:t};return i.queue=s,qh(Ug.bind(null,r,s,e),[e]),r.flags|=2048,is(9,Mg.bind(null,r,s,n,t),void 0,null),n},useId:function(){var e=St(),t=ve.identifierPrefix;if(re){var n=zt,r=bt;n=(r&~(1<<32-pt(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=ns++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=Uw++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},$w={readContext:ot,useCallback:Hg,useContext:ot,useEffect:Cc,useImperativeHandle:Vg,useInsertionEffect:zg,useLayoutEffect:$g,useMemo:Wg,useReducer:Sl,useRef:bg,useState:function(){return Sl(rs)},useDebugValue:Pc,useDeferredValue:function(e){var t=at();return Kg(t,pe.memoizedState,e)},useTransition:function(){var e=Sl(rs)[0],t=at().memoizedState;return[e,t]},useMutableSource:xg,useSyncExternalStore:Lg,useId:Gg,unstable_isNewReconciler:!1},Bw={readContext:ot,useCallback:Hg,useContext:ot,useEffect:Cc,useImperativeHandle:Vg,useInsertionEffect:zg,useLayoutEffect:$g,useMemo:Wg,useReducer:Il,useRef:bg,useState:function(){return Il(rs)},useDebugValue:Pc,useDeferredValue:function(e){var t=at();return pe===null?t.memoizedState=e:Kg(t,pe.memoizedState,e)},useTransition:function(){var e=Il(rs)[0],t=at().memoizedState;return[e,t]},useMutableSource:xg,useSyncExternalStore:Lg,useId:Gg,unstable_isNewReconciler:!1};function dt(e,t){if(e&&e.defaultProps){t=le({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function mu(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:le({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var ha={isMounted:function(e){return(e=e._reactInternals)?or(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Ue(),i=Tn(e),s=Ht(r,i);s.payload=t,n!=null&&(s.callback=n),t=Sn(e,s,i),t!==null&&(gt(t,e,i,r),lo(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Ue(),i=Tn(e),s=Ht(r,i);s.tag=1,s.payload=t,n!=null&&(s.callback=n),t=Sn(e,s,i),t!==null&&(gt(t,e,i,r),lo(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Ue(),r=Tn(e),i=Ht(n,r);i.tag=2,t!=null&&(i.callback=t),t=Sn(e,i,r),t!==null&&(gt(t,e,r,n),lo(t,e,r))}};function Qh(e,t,n,r,i,s,a){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,s,a):t.prototype&&t.prototype.isPureReactComponent?!Xi(n,r)||!Xi(i,s):!0}function Yg(e,t,n){var r=!1,i=Nn,s=t.contextType;return typeof s=="object"&&s!==null?s=ot(s):(i=Be(t)?Qn:Oe.current,r=t.contextTypes,s=(r=r!=null)?$r(e,i):Nn),t=new t(n,s),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=ha,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=s),t}function Xh(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&ha.enqueueReplaceState(t,t.state,null)}function vu(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},wc(e);var s=t.contextType;typeof s=="object"&&s!==null?i.context=ot(s):(s=Be(t)?Qn:Oe.current,i.context=$r(e,s)),i.state=e.memoizedState,s=t.getDerivedStateFromProps,typeof s=="function"&&(mu(e,t,s,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&ha.enqueueReplaceState(i,i.state,null),Mo(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function Wr(e,t){try{var n="",r=t;do n+=m0(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:e,source:t,stack:i,digest:null}}function Tl(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function yu(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var Vw=typeof WeakMap=="function"?WeakMap:Map;function Jg(e,t,n){n=Ht(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){zo||(zo=!0,Au=r),yu(e,t)},n}function Zg(e,t,n){n=Ht(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){yu(e,t)}}var s=e.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){yu(e,t),typeof r!="function"&&(In===null?In=new Set([this]):In.add(this));var a=t.stack;this.componentDidCatch(t.value,{componentStack:a!==null?a:""})}),n}function Yh(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Vw;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=r_.bind(null,e,t,n),t.then(e,e))}function Jh(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Zh(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Ht(-1,1),t.tag=2,Sn(n,t,1))),n.lanes|=1),e)}var Hw=Yt.ReactCurrentOwner,ze=!1;function Me(e,t,n,r){t.child=e===null?Ag(t,null,n,r):Vr(t,e.child,n,r)}function ef(e,t,n,r,i){n=n.render;var s=t.ref;return Dr(t,i),r=Tc(e,t,n,r,s,i),n=kc(),e!==null&&!ze?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Qt(e,t,i)):(re&&n&&hc(t),t.flags|=1,Me(e,t,r,i),t.child)}function tf(e,t,n,r,i){if(e===null){var s=n.type;return typeof s=="function"&&!Mc(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=s,em(e,t,s,r,i)):(e=go(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(s=e.child,!(e.lanes&i)){var a=s.memoizedProps;if(n=n.compare,n=n!==null?n:Xi,n(a,r)&&e.ref===t.ref)return Qt(e,t,i)}return t.flags|=1,e=kn(s,r),e.ref=t.ref,e.return=t,t.child=e}function em(e,t,n,r,i){if(e!==null){var s=e.memoizedProps;if(Xi(s,r)&&e.ref===t.ref)if(ze=!1,t.pendingProps=r=s,(e.lanes&i)!==0)e.flags&131072&&(ze=!0);else return t.lanes=e.lanes,Qt(e,t,i)}return wu(e,t,n,r,i)}function tm(e,t,n){var r=t.pendingProps,i=r.children,s=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},Z(Ar,We),We|=n;else{if(!(n&1073741824))return e=s!==null?s.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,Z(Ar,We),We|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,Z(Ar,We),We|=r}else s!==null?(r=s.baseLanes|n,t.memoizedState=null):r=n,Z(Ar,We),We|=r;return Me(e,t,i,n),t.child}function nm(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function wu(e,t,n,r,i){var s=Be(n)?Qn:Oe.current;return s=$r(t,s),Dr(t,i),n=Tc(e,t,n,r,s,i),r=kc(),e!==null&&!ze?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Qt(e,t,i)):(re&&r&&hc(t),t.flags|=1,Me(e,t,n,i),t.child)}function nf(e,t,n,r,i){if(Be(n)){var s=!0;No(t)}else s=!1;if(Dr(t,i),t.stateNode===null)ho(e,t),Yg(t,n,r),vu(t,n,r,i),r=!0;else if(e===null){var a=t.stateNode,u=t.memoizedProps;a.props=u;var c=a.context,h=n.contextType;typeof h=="object"&&h!==null?h=ot(h):(h=Be(n)?Qn:Oe.current,h=$r(t,h));var w=n.getDerivedStateFromProps,g=typeof w=="function"||typeof a.getSnapshotBeforeUpdate=="function";g||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(u!==r||c!==h)&&Xh(t,a,r,h),ln=!1;var S=t.memoizedState;a.state=S,Mo(t,r,a,i),c=t.memoizedState,u!==r||S!==c||$e.current||ln?(typeof w=="function"&&(mu(t,n,w,r),c=t.memoizedState),(u=ln||Qh(t,n,u,r,S,c,h))?(g||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(t.flags|=4194308)):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=c),a.props=r,a.state=c,a.context=h,r=u):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,Ng(e,t),u=t.memoizedProps,h=t.type===t.elementType?u:dt(t.type,u),a.props=h,g=t.pendingProps,S=a.context,c=n.contextType,typeof c=="object"&&c!==null?c=ot(c):(c=Be(n)?Qn:Oe.current,c=$r(t,c));var N=n.getDerivedStateFromProps;(w=typeof N=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(u!==g||S!==c)&&Xh(t,a,r,c),ln=!1,S=t.memoizedState,a.state=S,Mo(t,r,a,i);var A=t.memoizedState;u!==g||S!==A||$e.current||ln?(typeof N=="function"&&(mu(t,n,N,r),A=t.memoizedState),(h=ln||Qh(t,n,h,r,S,A,c)||!1)?(w||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(r,A,c),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(r,A,c)),typeof a.componentDidUpdate=="function"&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof a.componentDidUpdate!="function"||u===e.memoizedProps&&S===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||u===e.memoizedProps&&S===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=A),a.props=r,a.state=A,a.context=c,r=h):(typeof a.componentDidUpdate!="function"||u===e.memoizedProps&&S===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||u===e.memoizedProps&&S===e.memoizedState||(t.flags|=1024),r=!1)}return _u(e,t,n,r,s,i)}function _u(e,t,n,r,i,s){nm(e,t);var a=(t.flags&128)!==0;if(!r&&!a)return i&&$h(t,n,!1),Qt(e,t,s);r=t.stateNode,Hw.current=t;var u=a&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&a?(t.child=Vr(t,e.child,null,s),t.child=Vr(t,null,u,s)):Me(e,t,u,s),t.memoizedState=r.state,i&&$h(t,n,!0),t.child}function rm(e){var t=e.stateNode;t.pendingContext?zh(e,t.pendingContext,t.pendingContext!==t.context):t.context&&zh(e,t.context,!1),_c(e,t.containerInfo)}function rf(e,t,n,r,i){return Br(),pc(i),t.flags|=256,Me(e,t,n,r),t.child}var Eu={dehydrated:null,treeContext:null,retryLane:0};function Su(e){return{baseLanes:e,cachePool:null,transitions:null}}function im(e,t,n){var r=t.pendingProps,i=se.current,s=!1,a=(t.flags&128)!==0,u;if((u=a)||(u=e!==null&&e.memoizedState===null?!1:(i&2)!==0),u?(s=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),Z(se,i&1),e===null)return pu(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(a=r.children,e=r.fallback,s?(r=t.mode,s=t.child,a={mode:"hidden",children:a},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=a):s=ga(a,r,0,null),e=qn(e,r,n,null),s.return=t,e.return=t,s.sibling=e,t.child=s,t.child.memoizedState=Su(n),t.memoizedState=Eu,e):Ac(t,a));if(i=e.memoizedState,i!==null&&(u=i.dehydrated,u!==null))return Ww(e,t,a,r,u,i,n);if(s){s=r.fallback,a=t.mode,i=e.child,u=i.sibling;var c={mode:"hidden",children:r.children};return!(a&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=c,t.deletions=null):(r=kn(i,c),r.subtreeFlags=i.subtreeFlags&14680064),u!==null?s=kn(u,s):(s=qn(s,a,n,null),s.flags|=2),s.return=t,r.return=t,r.sibling=s,t.child=r,r=s,s=t.child,a=e.child.memoizedState,a=a===null?Su(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},s.memoizedState=a,s.childLanes=e.childLanes&~n,t.memoizedState=Eu,r}return s=e.child,e=s.sibling,r=kn(s,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Ac(e,t){return t=ga({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Xs(e,t,n,r){return r!==null&&pc(r),Vr(t,e.child,null,n),e=Ac(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Ww(e,t,n,r,i,s,a){if(n)return t.flags&256?(t.flags&=-257,r=Tl(Error(D(422))),Xs(e,t,a,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(s=r.fallback,i=t.mode,r=ga({mode:"visible",children:r.children},i,0,null),s=qn(s,i,a,null),s.flags|=2,r.return=t,s.return=t,r.sibling=s,t.child=r,t.mode&1&&Vr(t,e.child,null,a),t.child.memoizedState=Su(a),t.memoizedState=Eu,s);if(!(t.mode&1))return Xs(e,t,a,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var u=r.dgst;return r=u,s=Error(D(419)),r=Tl(s,r,void 0),Xs(e,t,a,r)}if(u=(a&e.childLanes)!==0,ze||u){if(r=ve,r!==null){switch(a&-a){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|a)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,qt(e,i),gt(r,e,i,-1))}return Dc(),r=Tl(Error(D(421))),Xs(e,t,a,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=i_.bind(null,e),i._reactRetry=t,null):(e=s.treeContext,Ke=En(i.nextSibling),qe=t,re=!0,ft=null,e!==null&&(tt[nt++]=bt,tt[nt++]=zt,tt[nt++]=Xn,bt=e.id,zt=e.overflow,Xn=t),t=Ac(t,r.children),t.flags|=4096,t)}function sf(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),gu(e.return,t,n)}function kl(e,t,n,r,i){var s=e.memoizedState;s===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=t,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function sm(e,t,n){var r=t.pendingProps,i=r.revealOrder,s=r.tail;if(Me(e,t,r.children,n),r=se.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&sf(e,n,t);else if(e.tag===19)sf(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(Z(se,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&Uo(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),kl(t,!1,i,n,s);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&Uo(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}kl(t,!0,n,null,s);break;case"together":kl(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function ho(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Qt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Jn|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(D(153));if(t.child!==null){for(e=t.child,n=kn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=kn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Kw(e,t,n){switch(t.tag){case 3:rm(t),Br();break;case 5:Og(t);break;case 1:Be(t.type)&&No(t);break;case 4:_c(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;Z(Lo,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(Z(se,se.current&1),t.flags|=128,null):n&t.child.childLanes?im(e,t,n):(Z(se,se.current&1),e=Qt(e,t,n),e!==null?e.sibling:null);Z(se,se.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return sm(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),Z(se,se.current),r)break;return null;case 22:case 23:return t.lanes=0,tm(e,t,n)}return Qt(e,t,n)}var om,Iu,am,lm;om=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Iu=function(){};am=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,Wn(Ct.current);var s=null;switch(n){case"input":i=Wl(e,i),r=Wl(e,r),s=[];break;case"select":i=le({},i,{value:void 0}),r=le({},r,{value:void 0}),s=[];break;case"textarea":i=ql(e,i),r=ql(e,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Ao)}Xl(n,r);var a;n=null;for(h in i)if(!r.hasOwnProperty(h)&&i.hasOwnProperty(h)&&i[h]!=null)if(h==="style"){var u=i[h];for(a in u)u.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else h!=="dangerouslySetInnerHTML"&&h!=="children"&&h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&h!=="autoFocus"&&(Vi.hasOwnProperty(h)?s||(s=[]):(s=s||[]).push(h,null));for(h in r){var c=r[h];if(u=i!=null?i[h]:void 0,r.hasOwnProperty(h)&&c!==u&&(c!=null||u!=null))if(h==="style")if(u){for(a in u)!u.hasOwnProperty(a)||c&&c.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in c)c.hasOwnProperty(a)&&u[a]!==c[a]&&(n||(n={}),n[a]=c[a])}else n||(s||(s=[]),s.push(h,n)),n=c;else h==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,u=u?u.__html:void 0,c!=null&&u!==c&&(s=s||[]).push(h,c)):h==="children"?typeof c!="string"&&typeof c!="number"||(s=s||[]).push(h,""+c):h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&(Vi.hasOwnProperty(h)?(c!=null&&h==="onScroll"&&te("scroll",e),s||u===c||(s=[])):(s=s||[]).push(h,c))}n&&(s=s||[]).push("style",n);var h=s;(t.updateQueue=h)&&(t.flags|=4)}};lm=function(e,t,n,r){n!==r&&(t.flags|=4)};function Ti(e,t){if(!re)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Ce(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Gw(e,t,n){var r=t.pendingProps;switch(fc(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ce(t),null;case 1:return Be(t.type)&&Ro(),Ce(t),null;case 3:return r=t.stateNode,Hr(),ne($e),ne(Oe),Sc(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(qs(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,ft!==null&&(Ou(ft),ft=null))),Iu(e,t),Ce(t),null;case 5:Ec(t);var i=Wn(ts.current);if(n=t.type,e!==null&&t.stateNode!=null)am(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(D(166));return Ce(t),null}if(e=Wn(Ct.current),qs(t)){r=t.stateNode,n=t.type;var s=t.memoizedProps;switch(r[It]=t,r[Zi]=s,e=(t.mode&1)!==0,n){case"dialog":te("cancel",r),te("close",r);break;case"iframe":case"object":case"embed":te("load",r);break;case"video":case"audio":for(i=0;i<Ri.length;i++)te(Ri[i],r);break;case"source":te("error",r);break;case"img":case"image":case"link":te("error",r),te("load",r);break;case"details":te("toggle",r);break;case"input":fh(r,s),te("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},te("invalid",r);break;case"textarea":gh(r,s),te("invalid",r)}Xl(n,s),i=null;for(var a in s)if(s.hasOwnProperty(a)){var u=s[a];a==="children"?typeof u=="string"?r.textContent!==u&&(s.suppressHydrationWarning!==!0&&Gs(r.textContent,u,e),i=["children",u]):typeof u=="number"&&r.textContent!==""+u&&(s.suppressHydrationWarning!==!0&&Gs(r.textContent,u,e),i=["children",""+u]):Vi.hasOwnProperty(a)&&u!=null&&a==="onScroll"&&te("scroll",r)}switch(n){case"input":bs(r),ph(r,s,!0);break;case"textarea":bs(r),mh(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=Ao)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{a=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Up(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=a.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=a.createElement(n,{is:r.is}):(e=a.createElement(n),n==="select"&&(a=e,r.multiple?a.multiple=!0:r.size&&(a.size=r.size))):e=a.createElementNS(e,n),e[It]=t,e[Zi]=r,om(e,t,!1,!1),t.stateNode=e;e:{switch(a=Yl(n,r),n){case"dialog":te("cancel",e),te("close",e),i=r;break;case"iframe":case"object":case"embed":te("load",e),i=r;break;case"video":case"audio":for(i=0;i<Ri.length;i++)te(Ri[i],e);i=r;break;case"source":te("error",e),i=r;break;case"img":case"image":case"link":te("error",e),te("load",e),i=r;break;case"details":te("toggle",e),i=r;break;case"input":fh(e,r),i=Wl(e,r),te("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=le({},r,{value:void 0}),te("invalid",e);break;case"textarea":gh(e,r),i=ql(e,r),te("invalid",e);break;default:i=r}Xl(n,i),u=i;for(s in u)if(u.hasOwnProperty(s)){var c=u[s];s==="style"?bp(e,c):s==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,c!=null&&jp(e,c)):s==="children"?typeof c=="string"?(n!=="textarea"||c!=="")&&Hi(e,c):typeof c=="number"&&Hi(e,""+c):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Vi.hasOwnProperty(s)?c!=null&&s==="onScroll"&&te("scroll",e):c!=null&&Ju(e,s,c,a))}switch(n){case"input":bs(e),ph(e,r,!1);break;case"textarea":bs(e),mh(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Rn(r.value));break;case"select":e.multiple=!!r.multiple,s=r.value,s!=null?Nr(e,!!r.multiple,s,!1):r.defaultValue!=null&&Nr(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=Ao)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Ce(t),null;case 6:if(e&&t.stateNode!=null)lm(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(D(166));if(n=Wn(ts.current),Wn(Ct.current),qs(t)){if(r=t.stateNode,n=t.memoizedProps,r[It]=t,(s=r.nodeValue!==n)&&(e=qe,e!==null))switch(e.tag){case 3:Gs(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Gs(r.nodeValue,n,(e.mode&1)!==0)}s&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[It]=t,t.stateNode=r}return Ce(t),null;case 13:if(ne(se),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(re&&Ke!==null&&t.mode&1&&!(t.flags&128))Cg(),Br(),t.flags|=98560,s=!1;else if(s=qs(t),r!==null&&r.dehydrated!==null){if(e===null){if(!s)throw Error(D(318));if(s=t.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(D(317));s[It]=t}else Br(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Ce(t),s=!1}else ft!==null&&(Ou(ft),ft=null),s=!0;if(!s)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||se.current&1?ge===0&&(ge=3):Dc())),t.updateQueue!==null&&(t.flags|=4),Ce(t),null);case 4:return Hr(),Iu(e,t),e===null&&Yi(t.stateNode.containerInfo),Ce(t),null;case 10:return vc(t.type._context),Ce(t),null;case 17:return Be(t.type)&&Ro(),Ce(t),null;case 19:if(ne(se),s=t.memoizedState,s===null)return Ce(t),null;if(r=(t.flags&128)!==0,a=s.rendering,a===null)if(r)Ti(s,!1);else{if(ge!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(a=Uo(e),a!==null){for(t.flags|=128,Ti(s,!1),r=a.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)s=n,e=r,s.flags&=14680066,a=s.alternate,a===null?(s.childLanes=0,s.lanes=e,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=a.childLanes,s.lanes=a.lanes,s.child=a.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=a.memoizedProps,s.memoizedState=a.memoizedState,s.updateQueue=a.updateQueue,s.type=a.type,e=a.dependencies,s.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return Z(se,se.current&1|2),t.child}e=e.sibling}s.tail!==null&&he()>Kr&&(t.flags|=128,r=!0,Ti(s,!1),t.lanes=4194304)}else{if(!r)if(e=Uo(a),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Ti(s,!0),s.tail===null&&s.tailMode==="hidden"&&!a.alternate&&!re)return Ce(t),null}else 2*he()-s.renderingStartTime>Kr&&n!==1073741824&&(t.flags|=128,r=!0,Ti(s,!1),t.lanes=4194304);s.isBackwards?(a.sibling=t.child,t.child=a):(n=s.last,n!==null?n.sibling=a:t.child=a,s.last=a)}return s.tail!==null?(t=s.tail,s.rendering=t,s.tail=t.sibling,s.renderingStartTime=he(),t.sibling=null,n=se.current,Z(se,r?n&1|2:n&1),t):(Ce(t),null);case 22:case 23:return Lc(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?We&1073741824&&(Ce(t),t.subtreeFlags&6&&(t.flags|=8192)):Ce(t),null;case 24:return null;case 25:return null}throw Error(D(156,t.tag))}function qw(e,t){switch(fc(t),t.tag){case 1:return Be(t.type)&&Ro(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Hr(),ne($e),ne(Oe),Sc(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Ec(t),null;case 13:if(ne(se),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(D(340));Br()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return ne(se),null;case 4:return Hr(),null;case 10:return vc(t.type._context),null;case 22:case 23:return Lc(),null;case 24:return null;default:return null}}var Ys=!1,Ae=!1,Qw=typeof WeakSet=="function"?WeakSet:Set,$=null;function Pr(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){ue(e,t,r)}else n.current=null}function Tu(e,t,n){try{n()}catch(r){ue(e,t,r)}}var of=!1;function Xw(e,t){if(au=ko,e=fg(),dc(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var a=0,u=-1,c=-1,h=0,w=0,g=e,S=null;t:for(;;){for(var N;g!==n||i!==0&&g.nodeType!==3||(u=a+i),g!==s||r!==0&&g.nodeType!==3||(c=a+r),g.nodeType===3&&(a+=g.nodeValue.length),(N=g.firstChild)!==null;)S=g,g=N;for(;;){if(g===e)break t;if(S===n&&++h===i&&(u=a),S===s&&++w===r&&(c=a),(N=g.nextSibling)!==null)break;g=S,S=g.parentNode}g=N}n=u===-1||c===-1?null:{start:u,end:c}}else n=null}n=n||{start:0,end:0}}else n=null;for(lu={focusedElem:e,selectionRange:n},ko=!1,$=t;$!==null;)if(t=$,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,$=e;else for(;$!==null;){t=$;try{var A=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(A!==null){var x=A.memoizedProps,L=A.memoizedState,T=t.stateNode,m=T.getSnapshotBeforeUpdate(t.elementType===t.type?x:dt(t.type,x),L);T.__reactInternalSnapshotBeforeUpdate=m}break;case 3:var I=t.stateNode.containerInfo;I.nodeType===1?I.textContent="":I.nodeType===9&&I.documentElement&&I.removeChild(I.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(D(163))}}catch(O){ue(t,t.return,O)}if(e=t.sibling,e!==null){e.return=t.return,$=e;break}$=t.return}return A=of,of=!1,A}function Fi(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var s=i.destroy;i.destroy=void 0,s!==void 0&&Tu(t,n,s)}i=i.next}while(i!==r)}}function fa(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function ku(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function um(e){var t=e.alternate;t!==null&&(e.alternate=null,um(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[It],delete t[Zi],delete t[du],delete t[xw],delete t[Lw])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function cm(e){return e.tag===5||e.tag===3||e.tag===4}function af(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||cm(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Cu(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Ao));else if(r!==4&&(e=e.child,e!==null))for(Cu(e,t,n),e=e.sibling;e!==null;)Cu(e,t,n),e=e.sibling}function Pu(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Pu(e,t,n),e=e.sibling;e!==null;)Pu(e,t,n),e=e.sibling}var we=null,ht=!1;function rn(e,t,n){for(n=n.child;n!==null;)dm(e,t,n),n=n.sibling}function dm(e,t,n){if(kt&&typeof kt.onCommitFiberUnmount=="function")try{kt.onCommitFiberUnmount(sa,n)}catch{}switch(n.tag){case 5:Ae||Pr(n,t);case 6:var r=we,i=ht;we=null,rn(e,t,n),we=r,ht=i,we!==null&&(ht?(e=we,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):we.removeChild(n.stateNode));break;case 18:we!==null&&(ht?(e=we,n=n.stateNode,e.nodeType===8?yl(e.parentNode,n):e.nodeType===1&&yl(e,n),qi(e)):yl(we,n.stateNode));break;case 4:r=we,i=ht,we=n.stateNode.containerInfo,ht=!0,rn(e,t,n),we=r,ht=i;break;case 0:case 11:case 14:case 15:if(!Ae&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,a=s.destroy;s=s.tag,a!==void 0&&(s&2||s&4)&&Tu(n,t,a),i=i.next}while(i!==r)}rn(e,t,n);break;case 1:if(!Ae&&(Pr(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(u){ue(n,t,u)}rn(e,t,n);break;case 21:rn(e,t,n);break;case 22:n.mode&1?(Ae=(r=Ae)||n.memoizedState!==null,rn(e,t,n),Ae=r):rn(e,t,n);break;default:rn(e,t,n)}}function lf(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Qw),t.forEach(function(r){var i=s_.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function ct(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=e,a=t,u=a;e:for(;u!==null;){switch(u.tag){case 5:we=u.stateNode,ht=!1;break e;case 3:we=u.stateNode.containerInfo,ht=!0;break e;case 4:we=u.stateNode.containerInfo,ht=!0;break e}u=u.return}if(we===null)throw Error(D(160));dm(s,a,i),we=null,ht=!1;var c=i.alternate;c!==null&&(c.return=null),i.return=null}catch(h){ue(i,t,h)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)hm(t,e),t=t.sibling}function hm(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(ct(t,e),_t(e),r&4){try{Fi(3,e,e.return),fa(3,e)}catch(x){ue(e,e.return,x)}try{Fi(5,e,e.return)}catch(x){ue(e,e.return,x)}}break;case 1:ct(t,e),_t(e),r&512&&n!==null&&Pr(n,n.return);break;case 5:if(ct(t,e),_t(e),r&512&&n!==null&&Pr(n,n.return),e.flags&32){var i=e.stateNode;try{Hi(i,"")}catch(x){ue(e,e.return,x)}}if(r&4&&(i=e.stateNode,i!=null)){var s=e.memoizedProps,a=n!==null?n.memoizedProps:s,u=e.type,c=e.updateQueue;if(e.updateQueue=null,c!==null)try{u==="input"&&s.type==="radio"&&s.name!=null&&Dp(i,s),Yl(u,a);var h=Yl(u,s);for(a=0;a<c.length;a+=2){var w=c[a],g=c[a+1];w==="style"?bp(i,g):w==="dangerouslySetInnerHTML"?jp(i,g):w==="children"?Hi(i,g):Ju(i,w,g,h)}switch(u){case"input":Kl(i,s);break;case"textarea":Mp(i,s);break;case"select":var S=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var N=s.value;N!=null?Nr(i,!!s.multiple,N,!1):S!==!!s.multiple&&(s.defaultValue!=null?Nr(i,!!s.multiple,s.defaultValue,!0):Nr(i,!!s.multiple,s.multiple?[]:"",!1))}i[Zi]=s}catch(x){ue(e,e.return,x)}}break;case 6:if(ct(t,e),_t(e),r&4){if(e.stateNode===null)throw Error(D(162));i=e.stateNode,s=e.memoizedProps;try{i.nodeValue=s}catch(x){ue(e,e.return,x)}}break;case 3:if(ct(t,e),_t(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{qi(t.containerInfo)}catch(x){ue(e,e.return,x)}break;case 4:ct(t,e),_t(e);break;case 13:ct(t,e),_t(e),i=e.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(Oc=he())),r&4&&lf(e);break;case 22:if(w=n!==null&&n.memoizedState!==null,e.mode&1?(Ae=(h=Ae)||w,ct(t,e),Ae=h):ct(t,e),_t(e),r&8192){if(h=e.memoizedState!==null,(e.stateNode.isHidden=h)&&!w&&e.mode&1)for($=e,w=e.child;w!==null;){for(g=$=w;$!==null;){switch(S=$,N=S.child,S.tag){case 0:case 11:case 14:case 15:Fi(4,S,S.return);break;case 1:Pr(S,S.return);var A=S.stateNode;if(typeof A.componentWillUnmount=="function"){r=S,n=S.return;try{t=r,A.props=t.memoizedProps,A.state=t.memoizedState,A.componentWillUnmount()}catch(x){ue(r,n,x)}}break;case 5:Pr(S,S.return);break;case 22:if(S.memoizedState!==null){cf(g);continue}}N!==null?(N.return=S,$=N):cf(g)}w=w.sibling}e:for(w=null,g=e;;){if(g.tag===5){if(w===null){w=g;try{i=g.stateNode,h?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(u=g.stateNode,c=g.memoizedProps.style,a=c!=null&&c.hasOwnProperty("display")?c.display:null,u.style.display=Fp("display",a))}catch(x){ue(e,e.return,x)}}}else if(g.tag===6){if(w===null)try{g.stateNode.nodeValue=h?"":g.memoizedProps}catch(x){ue(e,e.return,x)}}else if((g.tag!==22&&g.tag!==23||g.memoizedState===null||g===e)&&g.child!==null){g.child.return=g,g=g.child;continue}if(g===e)break e;for(;g.sibling===null;){if(g.return===null||g.return===e)break e;w===g&&(w=null),g=g.return}w===g&&(w=null),g.sibling.return=g.return,g=g.sibling}}break;case 19:ct(t,e),_t(e),r&4&&lf(e);break;case 21:break;default:ct(t,e),_t(e)}}function _t(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(cm(n)){var r=n;break e}n=n.return}throw Error(D(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Hi(i,""),r.flags&=-33);var s=af(e);Pu(e,s,i);break;case 3:case 4:var a=r.stateNode.containerInfo,u=af(e);Cu(e,u,a);break;default:throw Error(D(161))}}catch(c){ue(e,e.return,c)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Yw(e,t,n){$=e,fm(e)}function fm(e,t,n){for(var r=(e.mode&1)!==0;$!==null;){var i=$,s=i.child;if(i.tag===22&&r){var a=i.memoizedState!==null||Ys;if(!a){var u=i.alternate,c=u!==null&&u.memoizedState!==null||Ae;u=Ys;var h=Ae;if(Ys=a,(Ae=c)&&!h)for($=i;$!==null;)a=$,c=a.child,a.tag===22&&a.memoizedState!==null?df(i):c!==null?(c.return=a,$=c):df(i);for(;s!==null;)$=s,fm(s),s=s.sibling;$=i,Ys=u,Ae=h}uf(e)}else i.subtreeFlags&8772&&s!==null?(s.return=i,$=s):uf(e)}}function uf(e){for(;$!==null;){var t=$;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:Ae||fa(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!Ae)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:dt(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=t.updateQueue;s!==null&&Kh(t,s,r);break;case 3:var a=t.updateQueue;if(a!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Kh(t,a,n)}break;case 5:var u=t.stateNode;if(n===null&&t.flags&4){n=u;var c=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":c.autoFocus&&n.focus();break;case"img":c.src&&(n.src=c.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var h=t.alternate;if(h!==null){var w=h.memoizedState;if(w!==null){var g=w.dehydrated;g!==null&&qi(g)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(D(163))}Ae||t.flags&512&&ku(t)}catch(S){ue(t,t.return,S)}}if(t===e){$=null;break}if(n=t.sibling,n!==null){n.return=t.return,$=n;break}$=t.return}}function cf(e){for(;$!==null;){var t=$;if(t===e){$=null;break}var n=t.sibling;if(n!==null){n.return=t.return,$=n;break}$=t.return}}function df(e){for(;$!==null;){var t=$;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{fa(4,t)}catch(c){ue(t,n,c)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(c){ue(t,i,c)}}var s=t.return;try{ku(t)}catch(c){ue(t,s,c)}break;case 5:var a=t.return;try{ku(t)}catch(c){ue(t,a,c)}}}catch(c){ue(t,t.return,c)}if(t===e){$=null;break}var u=t.sibling;if(u!==null){u.return=t.return,$=u;break}$=t.return}}var Jw=Math.ceil,bo=Yt.ReactCurrentDispatcher,Rc=Yt.ReactCurrentOwner,it=Yt.ReactCurrentBatchConfig,G=0,ve=null,fe=null,_e=0,We=0,Ar=xn(0),ge=0,ss=null,Jn=0,pa=0,Nc=0,bi=null,be=null,Oc=0,Kr=1/0,jt=null,zo=!1,Au=null,In=null,Js=!1,mn=null,$o=0,zi=0,Ru=null,fo=-1,po=0;function Ue(){return G&6?he():fo!==-1?fo:fo=he()}function Tn(e){return e.mode&1?G&2&&_e!==0?_e&-_e:Mw.transition!==null?(po===0&&(po=Yp()),po):(e=X,e!==0||(e=window.event,e=e===void 0?16:ig(e.type)),e):1}function gt(e,t,n,r){if(50<zi)throw zi=0,Ru=null,Error(D(185));hs(e,n,r),(!(G&2)||e!==ve)&&(e===ve&&(!(G&2)&&(pa|=n),ge===4&&cn(e,_e)),Ve(e,r),n===1&&G===0&&!(t.mode&1)&&(Kr=he()+500,ca&&Ln()))}function Ve(e,t){var n=e.callbackNode;M0(e,t);var r=To(e,e===ve?_e:0);if(r===0)n!==null&&wh(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&wh(n),t===1)e.tag===0?Dw(hf.bind(null,e)):Ig(hf.bind(null,e)),Nw(function(){!(G&6)&&Ln()}),n=null;else{switch(Jp(r)){case 1:n=rc;break;case 4:n=Qp;break;case 16:n=Io;break;case 536870912:n=Xp;break;default:n=Io}n=Em(n,pm.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function pm(e,t){if(fo=-1,po=0,G&6)throw Error(D(327));var n=e.callbackNode;if(Mr()&&e.callbackNode!==n)return null;var r=To(e,e===ve?_e:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=Bo(e,r);else{t=r;var i=G;G|=2;var s=mm();(ve!==e||_e!==t)&&(jt=null,Kr=he()+500,Gn(e,t));do try{t_();break}catch(u){gm(e,u)}while(!0);mc(),bo.current=s,G=i,fe!==null?t=0:(ve=null,_e=0,t=ge)}if(t!==0){if(t===2&&(i=nu(e),i!==0&&(r=i,t=Nu(e,i))),t===1)throw n=ss,Gn(e,0),cn(e,r),Ve(e,he()),n;if(t===6)cn(e,r);else{if(i=e.current.alternate,!(r&30)&&!Zw(i)&&(t=Bo(e,r),t===2&&(s=nu(e),s!==0&&(r=s,t=Nu(e,s))),t===1))throw n=ss,Gn(e,0),cn(e,r),Ve(e,he()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(D(345));case 2:$n(e,be,jt);break;case 3:if(cn(e,r),(r&130023424)===r&&(t=Oc+500-he(),10<t)){if(To(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){Ue(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=cu($n.bind(null,e,be,jt),t);break}$n(e,be,jt);break;case 4:if(cn(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var a=31-pt(r);s=1<<a,a=t[a],a>i&&(i=a),r&=~s}if(r=i,r=he()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Jw(r/1960))-r,10<r){e.timeoutHandle=cu($n.bind(null,e,be,jt),r);break}$n(e,be,jt);break;case 5:$n(e,be,jt);break;default:throw Error(D(329))}}}return Ve(e,he()),e.callbackNode===n?pm.bind(null,e):null}function Nu(e,t){var n=bi;return e.current.memoizedState.isDehydrated&&(Gn(e,t).flags|=256),e=Bo(e,t),e!==2&&(t=be,be=n,t!==null&&Ou(t)),e}function Ou(e){be===null?be=e:be.push.apply(be,e)}function Zw(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!mt(s(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function cn(e,t){for(t&=~Nc,t&=~pa,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-pt(t),r=1<<n;e[n]=-1,t&=~r}}function hf(e){if(G&6)throw Error(D(327));Mr();var t=To(e,0);if(!(t&1))return Ve(e,he()),null;var n=Bo(e,t);if(e.tag!==0&&n===2){var r=nu(e);r!==0&&(t=r,n=Nu(e,r))}if(n===1)throw n=ss,Gn(e,0),cn(e,t),Ve(e,he()),n;if(n===6)throw Error(D(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,$n(e,be,jt),Ve(e,he()),null}function xc(e,t){var n=G;G|=1;try{return e(t)}finally{G=n,G===0&&(Kr=he()+500,ca&&Ln())}}function Zn(e){mn!==null&&mn.tag===0&&!(G&6)&&Mr();var t=G;G|=1;var n=it.transition,r=X;try{if(it.transition=null,X=1,e)return e()}finally{X=r,it.transition=n,G=t,!(G&6)&&Ln()}}function Lc(){We=Ar.current,ne(Ar)}function Gn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Rw(n)),fe!==null)for(n=fe.return;n!==null;){var r=n;switch(fc(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Ro();break;case 3:Hr(),ne($e),ne(Oe),Sc();break;case 5:Ec(r);break;case 4:Hr();break;case 13:ne(se);break;case 19:ne(se);break;case 10:vc(r.type._context);break;case 22:case 23:Lc()}n=n.return}if(ve=e,fe=e=kn(e.current,null),_e=We=t,ge=0,ss=null,Nc=pa=Jn=0,be=bi=null,Hn!==null){for(t=0;t<Hn.length;t++)if(n=Hn[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var a=s.next;s.next=i,r.next=a}n.pending=r}Hn=null}return e}function gm(e,t){do{var n=fe;try{if(mc(),uo.current=Fo,jo){for(var r=oe.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}jo=!1}if(Yn=0,me=pe=oe=null,ji=!1,ns=0,Rc.current=null,n===null||n.return===null){ge=1,ss=t,fe=null;break}e:{var s=e,a=n.return,u=n,c=t;if(t=_e,u.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){var h=c,w=u,g=w.tag;if(!(w.mode&1)&&(g===0||g===11||g===15)){var S=w.alternate;S?(w.updateQueue=S.updateQueue,w.memoizedState=S.memoizedState,w.lanes=S.lanes):(w.updateQueue=null,w.memoizedState=null)}var N=Jh(a);if(N!==null){N.flags&=-257,Zh(N,a,u,s,t),N.mode&1&&Yh(s,h,t),t=N,c=h;var A=t.updateQueue;if(A===null){var x=new Set;x.add(c),t.updateQueue=x}else A.add(c);break e}else{if(!(t&1)){Yh(s,h,t),Dc();break e}c=Error(D(426))}}else if(re&&u.mode&1){var L=Jh(a);if(L!==null){!(L.flags&65536)&&(L.flags|=256),Zh(L,a,u,s,t),pc(Wr(c,u));break e}}s=c=Wr(c,u),ge!==4&&(ge=2),bi===null?bi=[s]:bi.push(s),s=a;do{switch(s.tag){case 3:s.flags|=65536,t&=-t,s.lanes|=t;var T=Jg(s,c,t);Wh(s,T);break e;case 1:u=c;var m=s.type,I=s.stateNode;if(!(s.flags&128)&&(typeof m.getDerivedStateFromError=="function"||I!==null&&typeof I.componentDidCatch=="function"&&(In===null||!In.has(I)))){s.flags|=65536,t&=-t,s.lanes|=t;var O=Zg(s,u,t);Wh(s,O);break e}}s=s.return}while(s!==null)}ym(n)}catch(j){t=j,fe===n&&n!==null&&(fe=n=n.return);continue}break}while(!0)}function mm(){var e=bo.current;return bo.current=Fo,e===null?Fo:e}function Dc(){(ge===0||ge===3||ge===2)&&(ge=4),ve===null||!(Jn&268435455)&&!(pa&268435455)||cn(ve,_e)}function Bo(e,t){var n=G;G|=2;var r=mm();(ve!==e||_e!==t)&&(jt=null,Gn(e,t));do try{e_();break}catch(i){gm(e,i)}while(!0);if(mc(),G=n,bo.current=r,fe!==null)throw Error(D(261));return ve=null,_e=0,ge}function e_(){for(;fe!==null;)vm(fe)}function t_(){for(;fe!==null&&!C0();)vm(fe)}function vm(e){var t=_m(e.alternate,e,We);e.memoizedProps=e.pendingProps,t===null?ym(e):fe=t,Rc.current=null}function ym(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=qw(n,t),n!==null){n.flags&=32767,fe=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{ge=6,fe=null;return}}else if(n=Gw(n,t,We),n!==null){fe=n;return}if(t=t.sibling,t!==null){fe=t;return}fe=t=e}while(t!==null);ge===0&&(ge=5)}function $n(e,t,n){var r=X,i=it.transition;try{it.transition=null,X=1,n_(e,t,n,r)}finally{it.transition=i,X=r}return null}function n_(e,t,n,r){do Mr();while(mn!==null);if(G&6)throw Error(D(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(D(177));e.callbackNode=null,e.callbackPriority=0;var s=n.lanes|n.childLanes;if(U0(e,s),e===ve&&(fe=ve=null,_e=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Js||(Js=!0,Em(Io,function(){return Mr(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=it.transition,it.transition=null;var a=X;X=1;var u=G;G|=4,Rc.current=null,Xw(e,n),hm(n,e),Sw(lu),ko=!!au,lu=au=null,e.current=n,Yw(n),P0(),G=u,X=a,it.transition=s}else e.current=n;if(Js&&(Js=!1,mn=e,$o=i),s=e.pendingLanes,s===0&&(In=null),N0(n.stateNode),Ve(e,he()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(zo)throw zo=!1,e=Au,Au=null,e;return $o&1&&e.tag!==0&&Mr(),s=e.pendingLanes,s&1?e===Ru?zi++:(zi=0,Ru=e):zi=0,Ln(),null}function Mr(){if(mn!==null){var e=Jp($o),t=it.transition,n=X;try{if(it.transition=null,X=16>e?16:e,mn===null)var r=!1;else{if(e=mn,mn=null,$o=0,G&6)throw Error(D(331));var i=G;for(G|=4,$=e.current;$!==null;){var s=$,a=s.child;if($.flags&16){var u=s.deletions;if(u!==null){for(var c=0;c<u.length;c++){var h=u[c];for($=h;$!==null;){var w=$;switch(w.tag){case 0:case 11:case 15:Fi(8,w,s)}var g=w.child;if(g!==null)g.return=w,$=g;else for(;$!==null;){w=$;var S=w.sibling,N=w.return;if(um(w),w===h){$=null;break}if(S!==null){S.return=N,$=S;break}$=N}}}var A=s.alternate;if(A!==null){var x=A.child;if(x!==null){A.child=null;do{var L=x.sibling;x.sibling=null,x=L}while(x!==null)}}$=s}}if(s.subtreeFlags&2064&&a!==null)a.return=s,$=a;else e:for(;$!==null;){if(s=$,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Fi(9,s,s.return)}var T=s.sibling;if(T!==null){T.return=s.return,$=T;break e}$=s.return}}var m=e.current;for($=m;$!==null;){a=$;var I=a.child;if(a.subtreeFlags&2064&&I!==null)I.return=a,$=I;else e:for(a=m;$!==null;){if(u=$,u.flags&2048)try{switch(u.tag){case 0:case 11:case 15:fa(9,u)}}catch(j){ue(u,u.return,j)}if(u===a){$=null;break e}var O=u.sibling;if(O!==null){O.return=u.return,$=O;break e}$=u.return}}if(G=i,Ln(),kt&&typeof kt.onPostCommitFiberRoot=="function")try{kt.onPostCommitFiberRoot(sa,e)}catch{}r=!0}return r}finally{X=n,it.transition=t}}return!1}function ff(e,t,n){t=Wr(n,t),t=Jg(e,t,1),e=Sn(e,t,1),t=Ue(),e!==null&&(hs(e,1,t),Ve(e,t))}function ue(e,t,n){if(e.tag===3)ff(e,e,n);else for(;t!==null;){if(t.tag===3){ff(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(In===null||!In.has(r))){e=Wr(n,e),e=Zg(t,e,1),t=Sn(t,e,1),e=Ue(),t!==null&&(hs(t,1,e),Ve(t,e));break}}t=t.return}}function r_(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Ue(),e.pingedLanes|=e.suspendedLanes&n,ve===e&&(_e&n)===n&&(ge===4||ge===3&&(_e&130023424)===_e&&500>he()-Oc?Gn(e,0):Nc|=n),Ve(e,t)}function wm(e,t){t===0&&(e.mode&1?(t=Bs,Bs<<=1,!(Bs&130023424)&&(Bs=4194304)):t=1);var n=Ue();e=qt(e,t),e!==null&&(hs(e,t,n),Ve(e,n))}function i_(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),wm(e,n)}function s_(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(D(314))}r!==null&&r.delete(t),wm(e,n)}var _m;_m=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||$e.current)ze=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return ze=!1,Kw(e,t,n);ze=!!(e.flags&131072)}else ze=!1,re&&t.flags&1048576&&Tg(t,xo,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;ho(e,t),e=t.pendingProps;var i=$r(t,Oe.current);Dr(t,n),i=Tc(null,t,r,e,i,n);var s=kc();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Be(r)?(s=!0,No(t)):s=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,wc(t),i.updater=ha,t.stateNode=i,i._reactInternals=t,vu(t,r,e,n),t=_u(null,t,r,!0,s,n)):(t.tag=0,re&&s&&hc(t),Me(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(ho(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=a_(r),e=dt(r,e),i){case 0:t=wu(null,t,r,e,n);break e;case 1:t=nf(null,t,r,e,n);break e;case 11:t=ef(null,t,r,e,n);break e;case 14:t=tf(null,t,r,dt(r.type,e),n);break e}throw Error(D(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:dt(r,i),wu(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:dt(r,i),nf(e,t,r,i,n);case 3:e:{if(rm(t),e===null)throw Error(D(387));r=t.pendingProps,s=t.memoizedState,i=s.element,Ng(e,t),Mo(t,r,null,n);var a=t.memoizedState;if(r=a.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},t.updateQueue.baseState=s,t.memoizedState=s,t.flags&256){i=Wr(Error(D(423)),t),t=rf(e,t,r,n,i);break e}else if(r!==i){i=Wr(Error(D(424)),t),t=rf(e,t,r,n,i);break e}else for(Ke=En(t.stateNode.containerInfo.firstChild),qe=t,re=!0,ft=null,n=Ag(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Br(),r===i){t=Qt(e,t,n);break e}Me(e,t,r,n)}t=t.child}return t;case 5:return Og(t),e===null&&pu(t),r=t.type,i=t.pendingProps,s=e!==null?e.memoizedProps:null,a=i.children,uu(r,i)?a=null:s!==null&&uu(r,s)&&(t.flags|=32),nm(e,t),Me(e,t,a,n),t.child;case 6:return e===null&&pu(t),null;case 13:return im(e,t,n);case 4:return _c(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Vr(t,null,r,n):Me(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:dt(r,i),ef(e,t,r,i,n);case 7:return Me(e,t,t.pendingProps,n),t.child;case 8:return Me(e,t,t.pendingProps.children,n),t.child;case 12:return Me(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,s=t.memoizedProps,a=i.value,Z(Lo,r._currentValue),r._currentValue=a,s!==null)if(mt(s.value,a)){if(s.children===i.children&&!$e.current){t=Qt(e,t,n);break e}}else for(s=t.child,s!==null&&(s.return=t);s!==null;){var u=s.dependencies;if(u!==null){a=s.child;for(var c=u.firstContext;c!==null;){if(c.context===r){if(s.tag===1){c=Ht(-1,n&-n),c.tag=2;var h=s.updateQueue;if(h!==null){h=h.shared;var w=h.pending;w===null?c.next=c:(c.next=w.next,w.next=c),h.pending=c}}s.lanes|=n,c=s.alternate,c!==null&&(c.lanes|=n),gu(s.return,n,t),u.lanes|=n;break}c=c.next}}else if(s.tag===10)a=s.type===t.type?null:s.child;else if(s.tag===18){if(a=s.return,a===null)throw Error(D(341));a.lanes|=n,u=a.alternate,u!==null&&(u.lanes|=n),gu(a,n,t),a=s.sibling}else a=s.child;if(a!==null)a.return=s;else for(a=s;a!==null;){if(a===t){a=null;break}if(s=a.sibling,s!==null){s.return=a.return,a=s;break}a=a.return}s=a}Me(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,Dr(t,n),i=ot(i),r=r(i),t.flags|=1,Me(e,t,r,n),t.child;case 14:return r=t.type,i=dt(r,t.pendingProps),i=dt(r.type,i),tf(e,t,r,i,n);case 15:return em(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:dt(r,i),ho(e,t),t.tag=1,Be(r)?(e=!0,No(t)):e=!1,Dr(t,n),Yg(t,r,i),vu(t,r,i,n),_u(null,t,r,!0,e,n);case 19:return sm(e,t,n);case 22:return tm(e,t,n)}throw Error(D(156,t.tag))};function Em(e,t){return qp(e,t)}function o_(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function rt(e,t,n,r){return new o_(e,t,n,r)}function Mc(e){return e=e.prototype,!(!e||!e.isReactComponent)}function a_(e){if(typeof e=="function")return Mc(e)?1:0;if(e!=null){if(e=e.$$typeof,e===ec)return 11;if(e===tc)return 14}return 2}function kn(e,t){var n=e.alternate;return n===null?(n=rt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function go(e,t,n,r,i,s){var a=2;if(r=e,typeof e=="function")Mc(e)&&(a=1);else if(typeof e=="string")a=5;else e:switch(e){case yr:return qn(n.children,i,s,t);case Zu:a=8,i|=8;break;case $l:return e=rt(12,n,t,i|2),e.elementType=$l,e.lanes=s,e;case Bl:return e=rt(13,n,t,i),e.elementType=Bl,e.lanes=s,e;case Vl:return e=rt(19,n,t,i),e.elementType=Vl,e.lanes=s,e;case Op:return ga(n,i,s,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Rp:a=10;break e;case Np:a=9;break e;case ec:a=11;break e;case tc:a=14;break e;case an:a=16,r=null;break e}throw Error(D(130,e==null?e:typeof e,""))}return t=rt(a,n,t,i),t.elementType=e,t.type=r,t.lanes=s,t}function qn(e,t,n,r){return e=rt(7,e,r,t),e.lanes=n,e}function ga(e,t,n,r){return e=rt(22,e,r,t),e.elementType=Op,e.lanes=n,e.stateNode={isHidden:!1},e}function Cl(e,t,n){return e=rt(6,e,null,t),e.lanes=n,e}function Pl(e,t,n){return t=rt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function l_(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=al(0),this.expirationTimes=al(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=al(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Uc(e,t,n,r,i,s,a,u,c){return e=new l_(e,t,n,u,c),t===1?(t=1,s===!0&&(t|=8)):t=0,s=rt(3,null,null,t),e.current=s,s.stateNode=e,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},wc(s),e}function u_(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:vr,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Sm(e){if(!e)return Nn;e=e._reactInternals;e:{if(or(e)!==e||e.tag!==1)throw Error(D(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Be(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(D(171))}if(e.tag===1){var n=e.type;if(Be(n))return Sg(e,n,t)}return t}function Im(e,t,n,r,i,s,a,u,c){return e=Uc(n,r,!0,e,i,s,a,u,c),e.context=Sm(null),n=e.current,r=Ue(),i=Tn(n),s=Ht(r,i),s.callback=t??null,Sn(n,s,i),e.current.lanes=i,hs(e,i,r),Ve(e,r),e}function ma(e,t,n,r){var i=t.current,s=Ue(),a=Tn(i);return n=Sm(n),t.context===null?t.context=n:t.pendingContext=n,t=Ht(s,a),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Sn(i,t,a),e!==null&&(gt(e,i,a,s),lo(e,i,a)),a}function Vo(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function pf(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function jc(e,t){pf(e,t),(e=e.alternate)&&pf(e,t)}function c_(){return null}var Tm=typeof reportError=="function"?reportError:function(e){console.error(e)};function Fc(e){this._internalRoot=e}va.prototype.render=Fc.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(D(409));ma(e,t,null,null)};va.prototype.unmount=Fc.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Zn(function(){ma(null,e,null,null)}),t[Gt]=null}};function va(e){this._internalRoot=e}va.prototype.unstable_scheduleHydration=function(e){if(e){var t=tg();e={blockedOn:null,target:e,priority:t};for(var n=0;n<un.length&&t!==0&&t<un[n].priority;n++);un.splice(n,0,e),n===0&&rg(e)}};function bc(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function ya(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function gf(){}function d_(e,t,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var h=Vo(a);s.call(h)}}var a=Im(t,r,e,0,null,!1,!1,"",gf);return e._reactRootContainer=a,e[Gt]=a.current,Yi(e.nodeType===8?e.parentNode:e),Zn(),a}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var u=r;r=function(){var h=Vo(c);u.call(h)}}var c=Uc(e,0,!1,null,null,!1,!1,"",gf);return e._reactRootContainer=c,e[Gt]=c.current,Yi(e.nodeType===8?e.parentNode:e),Zn(function(){ma(t,c,n,r)}),c}function wa(e,t,n,r,i){var s=n._reactRootContainer;if(s){var a=s;if(typeof i=="function"){var u=i;i=function(){var c=Vo(a);u.call(c)}}ma(t,a,e,i)}else a=d_(n,t,e,i,r);return Vo(a)}Zp=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Ai(t.pendingLanes);n!==0&&(ic(t,n|1),Ve(t,he()),!(G&6)&&(Kr=he()+500,Ln()))}break;case 13:Zn(function(){var r=qt(e,1);if(r!==null){var i=Ue();gt(r,e,1,i)}}),jc(e,1)}};sc=function(e){if(e.tag===13){var t=qt(e,134217728);if(t!==null){var n=Ue();gt(t,e,134217728,n)}jc(e,134217728)}};eg=function(e){if(e.tag===13){var t=Tn(e),n=qt(e,t);if(n!==null){var r=Ue();gt(n,e,t,r)}jc(e,t)}};tg=function(){return X};ng=function(e,t){var n=X;try{return X=e,t()}finally{X=n}};Zl=function(e,t,n){switch(t){case"input":if(Kl(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=ua(r);if(!i)throw Error(D(90));Lp(r),Kl(r,i)}}}break;case"textarea":Mp(e,n);break;case"select":t=n.value,t!=null&&Nr(e,!!n.multiple,t,!1)}};Bp=xc;Vp=Zn;var h_={usingClientEntryPoint:!1,Events:[ps,Sr,ua,zp,$p,xc]},ki={findFiberByHostInstance:Vn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},f_={bundleType:ki.bundleType,version:ki.version,rendererPackageName:ki.rendererPackageName,rendererConfig:ki.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Yt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Kp(e),e===null?null:e.stateNode},findFiberByHostInstance:ki.findFiberByHostInstance||c_,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Zs=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Zs.isDisabled&&Zs.supportsFiber)try{sa=Zs.inject(f_),kt=Zs}catch{}}Ye.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=h_;Ye.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!bc(t))throw Error(D(200));return u_(e,t,null,n)};Ye.createRoot=function(e,t){if(!bc(e))throw Error(D(299));var n=!1,r="",i=Tm;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=Uc(e,1,!1,null,null,n,!1,r,i),e[Gt]=t.current,Yi(e.nodeType===8?e.parentNode:e),new Fc(t)};Ye.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(D(188)):(e=Object.keys(e).join(","),Error(D(268,e)));return e=Kp(t),e=e===null?null:e.stateNode,e};Ye.flushSync=function(e){return Zn(e)};Ye.hydrate=function(e,t,n){if(!ya(t))throw Error(D(200));return wa(null,e,t,!0,n)};Ye.hydrateRoot=function(e,t,n){if(!bc(e))throw Error(D(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",a=Tm;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),t=Im(t,null,e,1,n??null,i,!1,s,a),e[Gt]=t.current,Yi(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new va(t)};Ye.render=function(e,t,n){if(!ya(t))throw Error(D(200));return wa(null,e,t,!1,n)};Ye.unmountComponentAtNode=function(e){if(!ya(e))throw Error(D(40));return e._reactRootContainer?(Zn(function(){wa(null,null,e,!1,function(){e._reactRootContainer=null,e[Gt]=null})}),!0):!1};Ye.unstable_batchedUpdates=xc;Ye.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!ya(n))throw Error(D(200));if(e==null||e._reactInternals===void 0)throw Error(D(38));return wa(e,t,n,!1,r)};Ye.version="18.3.1-next-f1338f8080-20240426";function km(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(km)}catch(e){console.error(e)}}km(),kp.exports=Ye;var p_=kp.exports,Cm,mf=p_;Cm=mf.createRoot,mf.hydrateRoot;/**
 * @remix-run/router v1.19.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function os(){return os=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},os.apply(this,arguments)}var vn;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(vn||(vn={}));const vf="popstate";function g_(e){e===void 0&&(e={});function t(r,i){let{pathname:s,search:a,hash:u}=r.location;return xu("",{pathname:s,search:a,hash:u},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:Ho(i)}return v_(t,n,null,e)}function ae(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function Pm(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function m_(){return Math.random().toString(36).substr(2,8)}function yf(e,t){return{usr:e.state,key:e.key,idx:t}}function xu(e,t,n,r){return n===void 0&&(n=null),os({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?Zr(t):t,{state:n,key:t&&t.key||r||m_()})}function Ho(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function Zr(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function v_(e,t,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,a=i.history,u=vn.Pop,c=null,h=w();h==null&&(h=0,a.replaceState(os({},a.state,{idx:h}),""));function w(){return(a.state||{idx:null}).idx}function g(){u=vn.Pop;let L=w(),T=L==null?null:L-h;h=L,c&&c({action:u,location:x.location,delta:T})}function S(L,T){u=vn.Push;let m=xu(x.location,L,T);h=w()+1;let I=yf(m,h),O=x.createHref(m);try{a.pushState(I,"",O)}catch(j){if(j instanceof DOMException&&j.name==="DataCloneError")throw j;i.location.assign(O)}s&&c&&c({action:u,location:x.location,delta:1})}function N(L,T){u=vn.Replace;let m=xu(x.location,L,T);h=w();let I=yf(m,h),O=x.createHref(m);a.replaceState(I,"",O),s&&c&&c({action:u,location:x.location,delta:0})}function A(L){let T=i.location.origin!=="null"?i.location.origin:i.location.href,m=typeof L=="string"?L:Ho(L);return m=m.replace(/ $/,"%20"),ae(T,"No window.location.(origin|href) available to create URL for href: "+m),new URL(m,T)}let x={get action(){return u},get location(){return e(i,a)},listen(L){if(c)throw new Error("A history only accepts one active listener");return i.addEventListener(vf,g),c=L,()=>{i.removeEventListener(vf,g),c=null}},createHref(L){return t(i,L)},createURL:A,encodeLocation(L){let T=A(L);return{pathname:T.pathname,search:T.search,hash:T.hash}},push:S,replace:N,go(L){return a.go(L)}};return x}var wf;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(wf||(wf={}));function y_(e,t,n){return n===void 0&&(n="/"),w_(e,t,n,!1)}function w_(e,t,n,r){let i=typeof t=="string"?Zr(t):t,s=Gr(i.pathname||"/",n);if(s==null)return null;let a=Am(e);__(a);let u=null;for(let c=0;u==null&&c<a.length;++c){let h=O_(s);u=R_(a[c],h,r)}return u}function Am(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,a,u)=>{let c={relativePath:u===void 0?s.path||"":u,caseSensitive:s.caseSensitive===!0,childrenIndex:a,route:s};c.relativePath.startsWith("/")&&(ae(c.relativePath.startsWith(r),'Absolute route path "'+c.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),c.relativePath=c.relativePath.slice(r.length));let h=Cn([r,c.relativePath]),w=n.concat(c);s.children&&s.children.length>0&&(ae(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+h+'".')),Am(s.children,t,w,h)),!(s.path==null&&!s.index)&&t.push({path:h,score:P_(h,s.index),routesMeta:w})};return e.forEach((s,a)=>{var u;if(s.path===""||!((u=s.path)!=null&&u.includes("?")))i(s,a);else for(let c of Rm(s.path))i(s,a,c)}),t}function Rm(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let a=Rm(r.join("/")),u=[];return u.push(...a.map(c=>c===""?s:[s,c].join("/"))),i&&u.push(...a),u.map(c=>e.startsWith("/")&&c===""?"/":c)}function __(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:A_(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const E_=/^:[\w-]+$/,S_=3,I_=2,T_=1,k_=10,C_=-2,_f=e=>e==="*";function P_(e,t){let n=e.split("/"),r=n.length;return n.some(_f)&&(r+=C_),t&&(r+=I_),n.filter(i=>!_f(i)).reduce((i,s)=>i+(E_.test(s)?S_:s===""?T_:k_),r)}function A_(e,t){return e.length===t.length&&e.slice(0,-1).every((r,i)=>r===t[i])?e[e.length-1]-t[t.length-1]:0}function R_(e,t,n){let{routesMeta:r}=e,i={},s="/",a=[];for(let u=0;u<r.length;++u){let c=r[u],h=u===r.length-1,w=s==="/"?t:t.slice(s.length)||"/",g=Wo({path:c.relativePath,caseSensitive:c.caseSensitive,end:h},w),S=c.route;if(!g&&h&&n&&!r[r.length-1].route.index&&(g=Wo({path:c.relativePath,caseSensitive:c.caseSensitive,end:!1},w)),!g)return null;Object.assign(i,g.params),a.push({params:i,pathname:Cn([s,g.pathname]),pathnameBase:M_(Cn([s,g.pathnameBase])),route:S}),g.pathnameBase!=="/"&&(s=Cn([s,g.pathnameBase]))}return a}function Wo(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=N_(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let s=i[0],a=s.replace(/(.)\/+$/,"$1"),u=i.slice(1);return{params:r.reduce((h,w,g)=>{let{paramName:S,isOptional:N}=w;if(S==="*"){let x=u[g]||"";a=s.slice(0,s.length-x.length).replace(/(.)\/+$/,"$1")}const A=u[g];return N&&!A?h[S]=void 0:h[S]=(A||"").replace(/%2F/g,"/"),h},{}),pathname:s,pathnameBase:a,pattern:e}}function N_(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),Pm(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(a,u,c)=>(r.push({paramName:u,isOptional:c!=null}),c?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),r]}function O_(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return Pm(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function Gr(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function x_(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:i=""}=typeof e=="string"?Zr(e):e;return{pathname:n?n.startsWith("/")?n:L_(n,t):t,search:U_(r),hash:j_(i)}}function L_(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function Al(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function D_(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function zc(e,t){let n=D_(e);return t?n.map((r,i)=>i===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function $c(e,t,n,r){r===void 0&&(r=!1);let i;typeof e=="string"?i=Zr(e):(i=os({},e),ae(!i.pathname||!i.pathname.includes("?"),Al("?","pathname","search",i)),ae(!i.pathname||!i.pathname.includes("#"),Al("#","pathname","hash",i)),ae(!i.search||!i.search.includes("#"),Al("#","search","hash",i)));let s=e===""||i.pathname==="",a=s?"/":i.pathname,u;if(a==null)u=n;else{let g=t.length-1;if(!r&&a.startsWith("..")){let S=a.split("/");for(;S[0]==="..";)S.shift(),g-=1;i.pathname=S.join("/")}u=g>=0?t[g]:"/"}let c=x_(i,u),h=a&&a!=="/"&&a.endsWith("/"),w=(s||a===".")&&n.endsWith("/");return!c.pathname.endsWith("/")&&(h||w)&&(c.pathname+="/"),c}const Cn=e=>e.join("/").replace(/\/\/+/g,"/"),M_=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),U_=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,j_=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function F_(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const Nm=["post","put","patch","delete"];new Set(Nm);const b_=["get",...Nm];new Set(b_);/**
 * React Router v6.26.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function as(){return as=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},as.apply(this,arguments)}const _a=M.createContext(null),Om=M.createContext(null),Jt=M.createContext(null),Ea=M.createContext(null),Dn=M.createContext({outlet:null,matches:[],isDataRoute:!1}),xm=M.createContext(null);function z_(e,t){let{relative:n}=t===void 0?{}:t;ei()||ae(!1);let{basename:r,navigator:i}=M.useContext(Jt),{hash:s,pathname:a,search:u}=Sa(e,{relative:n}),c=a;return r!=="/"&&(c=a==="/"?r:Cn([r,a])),i.createHref({pathname:c,search:u,hash:s})}function ei(){return M.useContext(Ea)!=null}function ti(){return ei()||ae(!1),M.useContext(Ea).location}function Lm(e){M.useContext(Jt).static||M.useLayoutEffect(e)}function Bc(){let{isDataRoute:e}=M.useContext(Dn);return e?Z_():$_()}function $_(){ei()||ae(!1);let e=M.useContext(_a),{basename:t,future:n,navigator:r}=M.useContext(Jt),{matches:i}=M.useContext(Dn),{pathname:s}=ti(),a=JSON.stringify(zc(i,n.v7_relativeSplatPath)),u=M.useRef(!1);return Lm(()=>{u.current=!0}),M.useCallback(function(h,w){if(w===void 0&&(w={}),!u.current)return;if(typeof h=="number"){r.go(h);return}let g=$c(h,JSON.parse(a),s,w.relative==="path");e==null&&t!=="/"&&(g.pathname=g.pathname==="/"?t:Cn([t,g.pathname])),(w.replace?r.replace:r.push)(g,w.state,w)},[t,r,a,s,e])}function Sa(e,t){let{relative:n}=t===void 0?{}:t,{future:r}=M.useContext(Jt),{matches:i}=M.useContext(Dn),{pathname:s}=ti(),a=JSON.stringify(zc(i,r.v7_relativeSplatPath));return M.useMemo(()=>$c(e,JSON.parse(a),s,n==="path"),[e,a,s,n])}function B_(e,t){return V_(e,t)}function V_(e,t,n,r){ei()||ae(!1);let{navigator:i}=M.useContext(Jt),{matches:s}=M.useContext(Dn),a=s[s.length-1],u=a?a.params:{};a&&a.pathname;let c=a?a.pathnameBase:"/";a&&a.route;let h=ti(),w;if(t){var g;let L=typeof t=="string"?Zr(t):t;c==="/"||(g=L.pathname)!=null&&g.startsWith(c)||ae(!1),w=L}else w=h;let S=w.pathname||"/",N=S;if(c!=="/"){let L=c.replace(/^\//,"").split("/");N="/"+S.replace(/^\//,"").split("/").slice(L.length).join("/")}let A=y_(e,{pathname:N}),x=q_(A&&A.map(L=>Object.assign({},L,{params:Object.assign({},u,L.params),pathname:Cn([c,i.encodeLocation?i.encodeLocation(L.pathname).pathname:L.pathname]),pathnameBase:L.pathnameBase==="/"?c:Cn([c,i.encodeLocation?i.encodeLocation(L.pathnameBase).pathname:L.pathnameBase])})),s,n,r);return t&&x?M.createElement(Ea.Provider,{value:{location:as({pathname:"/",search:"",hash:"",state:null,key:"default"},w),navigationType:vn.Pop}},x):x}function H_(){let e=J_(),t=F_(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return M.createElement(M.Fragment,null,M.createElement("h2",null,"Unexpected Application Error!"),M.createElement("h3",{style:{fontStyle:"italic"}},t),n?M.createElement("pre",{style:i},n):null,null)}const W_=M.createElement(H_,null);class K_ extends M.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?M.createElement(Dn.Provider,{value:this.props.routeContext},M.createElement(xm.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function G_(e){let{routeContext:t,match:n,children:r}=e,i=M.useContext(_a);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),M.createElement(Dn.Provider,{value:t},r)}function q_(e,t,n,r){var i;if(t===void 0&&(t=[]),n===void 0&&(n=null),r===void 0&&(r=null),e==null){var s;if(!n)return null;if(n.errors)e=n.matches;else if((s=r)!=null&&s.v7_partialHydration&&t.length===0&&!n.initialized&&n.matches.length>0)e=n.matches;else return null}let a=e,u=(i=n)==null?void 0:i.errors;if(u!=null){let w=a.findIndex(g=>g.route.id&&(u==null?void 0:u[g.route.id])!==void 0);w>=0||ae(!1),a=a.slice(0,Math.min(a.length,w+1))}let c=!1,h=-1;if(n&&r&&r.v7_partialHydration)for(let w=0;w<a.length;w++){let g=a[w];if((g.route.HydrateFallback||g.route.hydrateFallbackElement)&&(h=w),g.route.id){let{loaderData:S,errors:N}=n,A=g.route.loader&&S[g.route.id]===void 0&&(!N||N[g.route.id]===void 0);if(g.route.lazy||A){c=!0,h>=0?a=a.slice(0,h+1):a=[a[0]];break}}}return a.reduceRight((w,g,S)=>{let N,A=!1,x=null,L=null;n&&(N=u&&g.route.id?u[g.route.id]:void 0,x=g.route.errorElement||W_,c&&(h<0&&S===0?(A=!0,L=null):h===S&&(A=!0,L=g.route.hydrateFallbackElement||null)));let T=t.concat(a.slice(0,S+1)),m=()=>{let I;return N?I=x:A?I=L:g.route.Component?I=M.createElement(g.route.Component,null):g.route.element?I=g.route.element:I=w,M.createElement(G_,{match:g,routeContext:{outlet:w,matches:T,isDataRoute:n!=null},children:I})};return n&&(g.route.ErrorBoundary||g.route.errorElement||S===0)?M.createElement(K_,{location:n.location,revalidation:n.revalidation,component:x,error:N,children:m(),routeContext:{outlet:null,matches:T,isDataRoute:!0}}):m()},null)}var Dm=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(Dm||{}),Ko=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(Ko||{});function Q_(e){let t=M.useContext(_a);return t||ae(!1),t}function X_(e){let t=M.useContext(Om);return t||ae(!1),t}function Y_(e){let t=M.useContext(Dn);return t||ae(!1),t}function Mm(e){let t=Y_(),n=t.matches[t.matches.length-1];return n.route.id||ae(!1),n.route.id}function J_(){var e;let t=M.useContext(xm),n=X_(Ko.UseRouteError),r=Mm(Ko.UseRouteError);return t!==void 0?t:(e=n.errors)==null?void 0:e[r]}function Z_(){let{router:e}=Q_(Dm.UseNavigateStable),t=Mm(Ko.UseNavigateStable),n=M.useRef(!1);return Lm(()=>{n.current=!0}),M.useCallback(function(i,s){s===void 0&&(s={}),n.current&&(typeof i=="number"?e.navigate(i):e.navigate(i,as({fromRouteId:t},s)))},[e,t])}function eo(e){let{to:t,replace:n,state:r,relative:i}=e;ei()||ae(!1);let{future:s,static:a}=M.useContext(Jt),{matches:u}=M.useContext(Dn),{pathname:c}=ti(),h=Bc(),w=$c(t,zc(u,s.v7_relativeSplatPath),c,i==="path"),g=JSON.stringify(w);return M.useEffect(()=>h(JSON.parse(g),{replace:n,state:r,relative:i}),[h,g,i,n,r]),null}function mr(e){ae(!1)}function e1(e){let{basename:t="/",children:n=null,location:r,navigationType:i=vn.Pop,navigator:s,static:a=!1,future:u}=e;ei()&&ae(!1);let c=t.replace(/^\/*/,"/"),h=M.useMemo(()=>({basename:c,navigator:s,static:a,future:as({v7_relativeSplatPath:!1},u)}),[c,u,s,a]);typeof r=="string"&&(r=Zr(r));let{pathname:w="/",search:g="",hash:S="",state:N=null,key:A="default"}=r,x=M.useMemo(()=>{let L=Gr(w,c);return L==null?null:{location:{pathname:L,search:g,hash:S,state:N,key:A},navigationType:i}},[c,w,g,S,N,A,i]);return x==null?null:M.createElement(Jt.Provider,{value:h},M.createElement(Ea.Provider,{children:n,value:x}))}function t1(e){let{children:t,location:n}=e;return B_(Lu(t),n)}new Promise(()=>{});function Lu(e,t){t===void 0&&(t=[]);let n=[];return M.Children.forEach(e,(r,i)=>{if(!M.isValidElement(r))return;let s=[...t,i];if(r.type===M.Fragment){n.push.apply(n,Lu(r.props.children,s));return}r.type!==mr&&ae(!1),!r.props.index||!r.props.children||ae(!1);let a={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(a.children=Lu(r.props.children,s)),n.push(a)}),n}/**
 * React Router DOM v6.26.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Go(){return Go=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Go.apply(this,arguments)}function Um(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,s;for(s=0;s<r.length;s++)i=r[s],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function n1(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function r1(e,t){return e.button===0&&(!t||t==="_self")&&!n1(e)}const i1=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","unstable_viewTransition"],s1=["aria-current","caseSensitive","className","end","style","to","unstable_viewTransition","children"],o1="6";try{window.__reactRouterVersion=o1}catch{}const a1=M.createContext({isTransitioning:!1}),l1="startTransition",Ef=r0[l1];function u1(e){let{basename:t,children:n,future:r,window:i}=e,s=M.useRef();s.current==null&&(s.current=g_({window:i,v5Compat:!0}));let a=s.current,[u,c]=M.useState({action:a.action,location:a.location}),{v7_startTransition:h}=r||{},w=M.useCallback(g=>{h&&Ef?Ef(()=>c(g)):c(g)},[c,h]);return M.useLayoutEffect(()=>a.listen(w),[a,w]),M.createElement(e1,{basename:t,children:n,location:u.location,navigationType:u.action,navigator:a,future:r})}const c1=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",d1=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,h1=M.forwardRef(function(t,n){let{onClick:r,relative:i,reloadDocument:s,replace:a,state:u,target:c,to:h,preventScrollReset:w,unstable_viewTransition:g}=t,S=Um(t,i1),{basename:N}=M.useContext(Jt),A,x=!1;if(typeof h=="string"&&d1.test(h)&&(A=h,c1))try{let I=new URL(window.location.href),O=h.startsWith("//")?new URL(I.protocol+h):new URL(h),j=Gr(O.pathname,N);O.origin===I.origin&&j!=null?h=j+O.search+O.hash:x=!0}catch{}let L=z_(h,{relative:i}),T=p1(h,{replace:a,state:u,target:c,preventScrollReset:w,relative:i,unstable_viewTransition:g});function m(I){r&&r(I),I.defaultPrevented||T(I)}return M.createElement("a",Go({},S,{href:A||L,onClick:x||s?r:m,ref:n,target:c}))}),sn=M.forwardRef(function(t,n){let{"aria-current":r="page",caseSensitive:i=!1,className:s="",end:a=!1,style:u,to:c,unstable_viewTransition:h,children:w}=t,g=Um(t,s1),S=Sa(c,{relative:g.relative}),N=ti(),A=M.useContext(Om),{navigator:x,basename:L}=M.useContext(Jt),T=A!=null&&g1(S)&&h===!0,m=x.encodeLocation?x.encodeLocation(S).pathname:S.pathname,I=N.pathname,O=A&&A.navigation&&A.navigation.location?A.navigation.location.pathname:null;i||(I=I.toLowerCase(),O=O?O.toLowerCase():null,m=m.toLowerCase()),O&&L&&(O=Gr(O,L)||O);const j=m!=="/"&&m.endsWith("/")?m.length-1:m.length;let b=I===m||!a&&I.startsWith(m)&&I.charAt(j)==="/",y=O!=null&&(O===m||!a&&O.startsWith(m)&&O.charAt(m.length)==="/"),p={isActive:b,isPending:y,isTransitioning:T},v=b?r:void 0,_;typeof s=="function"?_=s(p):_=[s,b?"active":null,y?"pending":null,T?"transitioning":null].filter(Boolean).join(" ");let k=typeof u=="function"?u(p):u;return M.createElement(h1,Go({},g,{"aria-current":v,className:_,ref:n,style:k,to:c,unstable_viewTransition:h}),typeof w=="function"?w(p):w)});var Du;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(Du||(Du={}));var Sf;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(Sf||(Sf={}));function f1(e){let t=M.useContext(_a);return t||ae(!1),t}function p1(e,t){let{target:n,replace:r,state:i,preventScrollReset:s,relative:a,unstable_viewTransition:u}=t===void 0?{}:t,c=Bc(),h=ti(),w=Sa(e,{relative:a});return M.useCallback(g=>{if(r1(g,n)){g.preventDefault();let S=r!==void 0?r:Ho(h)===Ho(w);c(e,{replace:S,state:i,preventScrollReset:s,relative:a,unstable_viewTransition:u})}},[h,c,w,r,i,n,e,s,a,u])}function g1(e,t){t===void 0&&(t={});let n=M.useContext(a1);n==null&&ae(!1);let{basename:r}=f1(Du.useViewTransitionState),i=Sa(e,{relative:t.relative});if(!n.isTransitioning)return!1;let s=Gr(n.currentLocation.pathname,r)||n.currentLocation.pathname,a=Gr(n.nextLocation.pathname,r)||n.nextLocation.pathname;return Wo(i.pathname,a)!=null||Wo(i.pathname,s)!=null}const m1="_navbar_1bvsz_1",v1="_brand_1bvsz_19",y1="_links_list_1bvsz_37",w1="_active_1bvsz_55",Et={navbar:m1,brand:v1,links_list:y1,active:w1},jm=M.createContext();function _1({children:e,value:t}){return U.jsx(jm.Provider,{value:t,children:e})}function E1(){return M.useContext(jm)}var If={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fm=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=i&63|128):(i&64512)===55296&&r+1<e.length&&(e.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(e.charCodeAt(++r)&1023),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=i&63|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=i&63|128)}return t},S1=function(e){const t=[];let n=0,r=0;for(;n<e.length;){const i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=e[n++];t[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=e[n++],a=e[n++],u=e[n++],c=((i&7)<<18|(s&63)<<12|(a&63)<<6|u&63)-65536;t[r++]=String.fromCharCode(55296+(c>>10)),t[r++]=String.fromCharCode(56320+(c&1023))}else{const s=e[n++],a=e[n++];t[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|a&63)}}return t.join("")},bm={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<e.length;i+=3){const s=e[i],a=i+1<e.length,u=a?e[i+1]:0,c=i+2<e.length,h=c?e[i+2]:0,w=s>>2,g=(s&3)<<4|u>>4;let S=(u&15)<<2|h>>6,N=h&63;c||(N=64,a||(S=64)),r.push(n[w],n[g],n[S],n[N])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(Fm(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):S1(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<e.length;){const s=n[e.charAt(i++)],u=i<e.length?n[e.charAt(i)]:0;++i;const h=i<e.length?n[e.charAt(i)]:64;++i;const g=i<e.length?n[e.charAt(i)]:64;if(++i,s==null||u==null||h==null||g==null)throw new I1;const S=s<<2|u>>4;if(r.push(S),h!==64){const N=u<<4&240|h>>2;if(r.push(N),g!==64){const A=h<<6&192|g;r.push(A)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class I1 extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const T1=function(e){const t=Fm(e);return bm.encodeByteArray(t,!0)},qo=function(e){return T1(e).replace(/\./g,"")},zm=function(e){try{return bm.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function k1(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const C1=()=>k1().__FIREBASE_DEFAULTS__,P1=()=>{if(typeof process>"u"||typeof If>"u")return;const e=If.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},A1=()=>{if(typeof document>"u")return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=e&&zm(e[1]);return t&&JSON.parse(t)},Vc=()=>{try{return C1()||P1()||A1()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},$m=e=>{var t,n;return(n=(t=Vc())===null||t===void 0?void 0:t.emulatorHosts)===null||n===void 0?void 0:n[e]},R1=e=>{const t=$m(e);if(!t)return;const n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const r=parseInt(t.substring(n+1),10);return t[0]==="["?[t.substring(1,n-1),r]:[t.substring(0,n),r]},Bm=()=>{var e;return(e=Vc())===null||e===void 0?void 0:e.config},Vm=e=>{var t;return(t=Vc())===null||t===void 0?void 0:t[`_${e}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N1{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function O1(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=t||"demo-project",i=e.iat||0,s=e.sub||e.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},e);return[qo(JSON.stringify(n)),qo(JSON.stringify(a)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xe(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function x1(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(xe())}function Hm(){const e=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof e=="object"&&e.id!==void 0}function L1(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function D1(){const e=xe();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function Wm(){try{return typeof indexedDB=="object"}catch{return!1}}function Km(){return new Promise((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;t(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){t(n)}})}function M1(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const U1="FirebaseError";class wt extends Error{constructor(t,n,r){super(n),this.code=t,this.customData=r,this.name=U1,Object.setPrototypeOf(this,wt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ar.prototype.create)}}class ar{constructor(t,n,r){this.service=t,this.serviceName=n,this.errors=r}create(t,...n){const r=n[0]||{},i=`${this.service}/${t}`,s=this.errors[t],a=s?j1(s,r):"Error",u=`${this.serviceName}: ${a} (${i}).`;return new wt(i,u,r)}}function j1(e,t){return e.replace(F1,(n,r)=>{const i=t[r];return i!=null?String(i):`<${r}?>`})}const F1=/\{\$([^}]+)}/g;function b1(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function ls(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const i of n){if(!r.includes(i))return!1;const s=e[i],a=t[i];if(Tf(s)&&Tf(a)){if(!ls(s,a))return!1}else if(s!==a)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Tf(e){return e!==null&&typeof e=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ms(e){const t=[];for(const[n,r]of Object.entries(e))Array.isArray(r)?r.forEach(i=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):t.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}function Ni(e){const t={};return e.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");t[decodeURIComponent(i)]=decodeURIComponent(s)}}),t}function Oi(e){const t=e.indexOf("?");if(!t)return"";const n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}function z1(e,t){const n=new $1(e,t);return n.subscribe.bind(n)}class $1{constructor(t,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{t(this)}).catch(r=>{this.error(r)})}next(t){this.forEachObserver(n=>{n.next(t)})}error(t){this.forEachObserver(n=>{n.error(t)}),this.close(t)}complete(){this.forEachObserver(t=>{t.complete()}),this.close()}subscribe(t,n,r){let i;if(t===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");B1(t,["next","error","complete"])?i=t:i={next:t,error:n,complete:r},i.next===void 0&&(i.next=Rl),i.error===void 0&&(i.error=Rl),i.complete===void 0&&(i.complete=Rl);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(t){this.observers===void 0||this.observers[t]===void 0||(delete this.observers[t],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,t)}sendOne(t,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[t]!==void 0)try{n(this.observers[t])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(t){this.finalized||(this.finalized=!0,t!==void 0&&(this.finalError=t),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function B1(e,t){if(typeof e!="object"||e===null)return!1;for(const n of t)if(n in e&&typeof e[n]=="function")return!0;return!1}function Rl(){}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const V1=1e3,H1=2,W1=4*60*60*1e3,K1=.5;function kf(e,t=V1,n=H1){const r=t*Math.pow(n,e),i=Math.round(K1*r*(Math.random()-.5)*2);return Math.min(W1,r+i)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lt(e){return e&&e._delegate?e._delegate:e}class vt{constructor(t,n,r){this.name=t,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bn="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G1{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const r=new N1;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){var n;const r=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),i=(n=t==null?void 0:t.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(Q1(t))try{this.getOrInitializeService({instanceIdentifier:Bn})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(t=Bn){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=Bn){return this.instances.has(t)}getOptions(t=Bn){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,a]of this.instancesDeferred.entries()){const u=this.normalizeInstanceIdentifier(s);r===u&&a.resolve(i)}return i}onInit(t,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(t),this.onInitCallbacks.set(i,s);const a=this.instances.get(i);return a&&t(a,i),()=>{s.delete(t)}}invokeOnInitCallbacks(t,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:q1(t),options:n}),this.instances.set(t,r),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=Bn){return this.component?this.component.multipleInstances?t:Bn:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function q1(e){return e===Bn?void 0:e}function Q1(e){return e.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X1{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new G1(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Q;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(Q||(Q={}));const Y1={debug:Q.DEBUG,verbose:Q.VERBOSE,info:Q.INFO,warn:Q.WARN,error:Q.ERROR,silent:Q.SILENT},J1=Q.INFO,Z1={[Q.DEBUG]:"log",[Q.VERBOSE]:"log",[Q.INFO]:"info",[Q.WARN]:"warn",[Q.ERROR]:"error"},eE=(e,t,...n)=>{if(t<e.logLevel)return;const r=new Date().toISOString(),i=Z1[t];if(i)console[i](`[${r}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class Ia{constructor(t){this.name=t,this._logLevel=J1,this._logHandler=eE,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in Q))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?Y1[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,Q.DEBUG,...t),this._logHandler(this,Q.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,Q.VERBOSE,...t),this._logHandler(this,Q.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,Q.INFO,...t),this._logHandler(this,Q.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,Q.WARN,...t),this._logHandler(this,Q.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,Q.ERROR,...t),this._logHandler(this,Q.ERROR,...t)}}const tE=(e,t)=>t.some(n=>e instanceof n);let Cf,Pf;function nE(){return Cf||(Cf=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function rE(){return Pf||(Pf=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Gm=new WeakMap,Mu=new WeakMap,qm=new WeakMap,Nl=new WeakMap,Hc=new WeakMap;function iE(e){const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("success",s),e.removeEventListener("error",a)},s=()=>{n(Pn(e.result)),i()},a=()=>{r(e.error),i()};e.addEventListener("success",s),e.addEventListener("error",a)});return t.then(n=>{n instanceof IDBCursor&&Gm.set(n,e)}).catch(()=>{}),Hc.set(t,e),t}function sE(e){if(Mu.has(e))return;const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("complete",s),e.removeEventListener("error",a),e.removeEventListener("abort",a)},s=()=>{n(),i()},a=()=>{r(e.error||new DOMException("AbortError","AbortError")),i()};e.addEventListener("complete",s),e.addEventListener("error",a),e.addEventListener("abort",a)});Mu.set(e,t)}let Uu={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return Mu.get(e);if(t==="objectStoreNames")return e.objectStoreNames||qm.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Pn(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function oE(e){Uu=e(Uu)}function aE(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const r=e.call(Ol(this),t,...n);return qm.set(r,t.sort?t.sort():[t]),Pn(r)}:rE().includes(e)?function(...t){return e.apply(Ol(this),t),Pn(Gm.get(this))}:function(...t){return Pn(e.apply(Ol(this),t))}}function lE(e){return typeof e=="function"?aE(e):(e instanceof IDBTransaction&&sE(e),tE(e,nE())?new Proxy(e,Uu):e)}function Pn(e){if(e instanceof IDBRequest)return iE(e);if(Nl.has(e))return Nl.get(e);const t=lE(e);return t!==e&&(Nl.set(e,t),Hc.set(t,e)),t}const Ol=e=>Hc.get(e);function Qm(e,t,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const a=indexedDB.open(e,t),u=Pn(a);return r&&a.addEventListener("upgradeneeded",c=>{r(Pn(a.result),c.oldVersion,c.newVersion,Pn(a.transaction),c)}),n&&a.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),u.then(c=>{s&&c.addEventListener("close",()=>s()),i&&c.addEventListener("versionchange",h=>i(h.oldVersion,h.newVersion,h))}).catch(()=>{}),u}const uE=["get","getKey","getAll","getAllKeys","count"],cE=["put","add","delete","clear"],xl=new Map;function Af(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(xl.get(t))return xl.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,i=cE.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||uE.includes(n)))return;const s=async function(a,...u){const c=this.transaction(a,i?"readwrite":"readonly");let h=c.store;return r&&(h=h.index(u.shift())),(await Promise.all([h[n](...u),i&&c.done]))[0]};return xl.set(t,s),s}oE(e=>({...e,get:(t,n,r)=>Af(t,n)||e.get(t,n,r),has:(t,n)=>!!Af(t,n)||e.has(t,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dE{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(hE(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function hE(e){const t=e.getComponent();return(t==null?void 0:t.type)==="VERSION"}const ju="@firebase/app",Rf="0.10.8";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const er=new Ia("@firebase/app"),fE="@firebase/app-compat",pE="@firebase/analytics-compat",gE="@firebase/analytics",mE="@firebase/app-check-compat",vE="@firebase/app-check",yE="@firebase/auth",wE="@firebase/auth-compat",_E="@firebase/database",EE="@firebase/database-compat",SE="@firebase/functions",IE="@firebase/functions-compat",TE="@firebase/installations",kE="@firebase/installations-compat",CE="@firebase/messaging",PE="@firebase/messaging-compat",AE="@firebase/performance",RE="@firebase/performance-compat",NE="@firebase/remote-config",OE="@firebase/remote-config-compat",xE="@firebase/storage",LE="@firebase/storage-compat",DE="@firebase/firestore",ME="@firebase/vertexai-preview",UE="@firebase/firestore-compat",jE="firebase",FE="10.12.5";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fu="[DEFAULT]",bE={[ju]:"fire-core",[fE]:"fire-core-compat",[gE]:"fire-analytics",[pE]:"fire-analytics-compat",[vE]:"fire-app-check",[mE]:"fire-app-check-compat",[yE]:"fire-auth",[wE]:"fire-auth-compat",[_E]:"fire-rtdb",[EE]:"fire-rtdb-compat",[SE]:"fire-fn",[IE]:"fire-fn-compat",[TE]:"fire-iid",[kE]:"fire-iid-compat",[CE]:"fire-fcm",[PE]:"fire-fcm-compat",[AE]:"fire-perf",[RE]:"fire-perf-compat",[NE]:"fire-rc",[OE]:"fire-rc-compat",[xE]:"fire-gcs",[LE]:"fire-gcs-compat",[DE]:"fire-fst",[UE]:"fire-fst-compat",[ME]:"fire-vertex","fire-js":"fire-js",[jE]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qo=new Map,zE=new Map,bu=new Map;function Nf(e,t){try{e.container.addComponent(t)}catch(n){er.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function Rt(e){const t=e.name;if(bu.has(t))return er.debug(`There were multiple attempts to register component ${t}.`),!1;bu.set(t,e);for(const n of Qo.values())Nf(n,e);for(const n of zE.values())Nf(n,e);return!0}function lr(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}function Tt(e){return e.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $E={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},An=new ar("app","Firebase",$E);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BE{constructor(t,n,r){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new vt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw An.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ni=FE;function Xm(e,t={}){let n=e;typeof t!="object"&&(t={name:t});const r=Object.assign({name:Fu,automaticDataCollectionEnabled:!1},t),i=r.name;if(typeof i!="string"||!i)throw An.create("bad-app-name",{appName:String(i)});if(n||(n=Bm()),!n)throw An.create("no-options");const s=Qo.get(i);if(s){if(ls(n,s.options)&&ls(r,s.config))return s;throw An.create("duplicate-app",{appName:i})}const a=new X1(i);for(const c of bu.values())a.addComponent(c);const u=new BE(n,r,a);return Qo.set(i,u),u}function Wc(e=Fu){const t=Qo.get(e);if(!t&&e===Fu&&Bm())return Xm();if(!t)throw An.create("no-app",{appName:e});return t}function st(e,t,n){var r;let i=(r=bE[e])!==null&&r!==void 0?r:e;n&&(i+=`-${n}`);const s=i.match(/\s|\//),a=t.match(/\s|\//);if(s||a){const u=[`Unable to register library "${i}" with version "${t}":`];s&&u.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&a&&u.push("and"),a&&u.push(`version name "${t}" contains illegal characters (whitespace or "/")`),er.warn(u.join(" "));return}Rt(new vt(`${i}-version`,()=>({library:i,version:t}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VE="firebase-heartbeat-database",HE=1,us="firebase-heartbeat-store";let Ll=null;function Ym(){return Ll||(Ll=Qm(VE,HE,{upgrade:(e,t)=>{switch(t){case 0:try{e.createObjectStore(us)}catch(n){console.warn(n)}}}}).catch(e=>{throw An.create("idb-open",{originalErrorMessage:e.message})})),Ll}async function WE(e){try{const n=(await Ym()).transaction(us),r=await n.objectStore(us).get(Jm(e));return await n.done,r}catch(t){if(t instanceof wt)er.warn(t.message);else{const n=An.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});er.warn(n.message)}}}async function Of(e,t){try{const r=(await Ym()).transaction(us,"readwrite");await r.objectStore(us).put(t,Jm(e)),await r.done}catch(n){if(n instanceof wt)er.warn(n.message);else{const r=An.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});er.warn(r.message)}}}function Jm(e){return`${e.name}!${e.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KE=1024,GE=30*24*60*60*1e3;class qE{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new XE(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var t,n;const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=xf();if(!(((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(a=>a.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(a=>{const u=new Date(a.date).valueOf();return Date.now()-u<=GE}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var t;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=xf(),{heartbeatsToSend:r,unsentEntries:i}=QE(this._heartbeatsCache.heartbeats),s=qo(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function xf(){return new Date().toISOString().substring(0,10)}function QE(e,t=KE){const n=[];let r=e.slice();for(const i of e){const s=n.find(a=>a.agent===i.agent);if(s){if(s.dates.push(i.date),Lf(n)>t){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Lf(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class XE{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Wm()?Km().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await WE(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Of(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Of(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...t.heartbeats]})}else return}}function Lf(e){return qo(JSON.stringify({version:2,heartbeats:e})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function YE(e){Rt(new vt("platform-logger",t=>new dE(t),"PRIVATE")),Rt(new vt("heartbeat",t=>new qE(t),"PRIVATE")),st(ju,Rf,e),st(ju,Rf,"esm2017"),st("fire-js","")}YE("");var JE="firebase",ZE="10.12.5";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */st(JE,ZE,"app");const Zm="@firebase/installations",Kc="0.6.8";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ev=1e4,tv=`w:${Kc}`,nv="FIS_v2",eS="https://firebaseinstallations.googleapis.com/v1",tS=60*60*1e3,nS="installations",rS="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iS={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},tr=new ar(nS,rS,iS);function rv(e){return e instanceof wt&&e.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iv({projectId:e}){return`${eS}/projects/${e}/installations`}function sv(e){return{token:e.token,requestStatus:2,expiresIn:oS(e.expiresIn),creationTime:Date.now()}}async function ov(e,t){const r=(await t.json()).error;return tr.create("request-failed",{requestName:e,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function av({apiKey:e}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e})}function sS(e,{refreshToken:t}){const n=av(e);return n.append("Authorization",aS(t)),n}async function lv(e){const t=await e();return t.status>=500&&t.status<600?e():t}function oS(e){return Number(e.replace("s","000"))}function aS(e){return`${nv} ${e}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function lS({appConfig:e,heartbeatServiceProvider:t},{fid:n}){const r=iv(e),i=av(e),s=t.getImmediate({optional:!0});if(s){const h=await s.getHeartbeatsHeader();h&&i.append("x-firebase-client",h)}const a={fid:n,authVersion:nv,appId:e.appId,sdkVersion:tv},u={method:"POST",headers:i,body:JSON.stringify(a)},c=await lv(()=>fetch(r,u));if(c.ok){const h=await c.json();return{fid:h.fid||n,registrationStatus:2,refreshToken:h.refreshToken,authToken:sv(h.authToken)}}else throw await ov("Create Installation",c)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uv(e){return new Promise(t=>{setTimeout(t,e)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uS(e){return btoa(String.fromCharCode(...e)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cS=/^[cdef][\w-]{21}$/,zu="";function dS(){try{const e=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(e),e[0]=112+e[0]%16;const n=hS(e);return cS.test(n)?n:zu}catch{return zu}}function hS(e){return uS(e).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ta(e){return`${e.appName}!${e.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cv=new Map;function dv(e,t){const n=Ta(e);hv(n,t),fS(n,t)}function hv(e,t){const n=cv.get(e);if(n)for(const r of n)r(t)}function fS(e,t){const n=pS();n&&n.postMessage({key:e,fid:t}),gS()}let Kn=null;function pS(){return!Kn&&"BroadcastChannel"in self&&(Kn=new BroadcastChannel("[Firebase] FID Change"),Kn.onmessage=e=>{hv(e.data.key,e.data.fid)}),Kn}function gS(){cv.size===0&&Kn&&(Kn.close(),Kn=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mS="firebase-installations-database",vS=1,nr="firebase-installations-store";let Dl=null;function Gc(){return Dl||(Dl=Qm(mS,vS,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(nr)}}})),Dl}async function Xo(e,t){const n=Ta(e),i=(await Gc()).transaction(nr,"readwrite"),s=i.objectStore(nr),a=await s.get(n);return await s.put(t,n),await i.done,(!a||a.fid!==t.fid)&&dv(e,t.fid),t}async function fv(e){const t=Ta(e),r=(await Gc()).transaction(nr,"readwrite");await r.objectStore(nr).delete(t),await r.done}async function ka(e,t){const n=Ta(e),i=(await Gc()).transaction(nr,"readwrite"),s=i.objectStore(nr),a=await s.get(n),u=t(a);return u===void 0?await s.delete(n):await s.put(u,n),await i.done,u&&(!a||a.fid!==u.fid)&&dv(e,u.fid),u}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qc(e){let t;const n=await ka(e.appConfig,r=>{const i=yS(r),s=wS(e,i);return t=s.registrationPromise,s.installationEntry});return n.fid===zu?{installationEntry:await t}:{installationEntry:n,registrationPromise:t}}function yS(e){const t=e||{fid:dS(),registrationStatus:0};return pv(t)}function wS(e,t){if(t.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject(tr.create("app-offline"));return{installationEntry:t,registrationPromise:i}}const n={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},r=_S(e,n);return{installationEntry:n,registrationPromise:r}}else return t.registrationStatus===1?{installationEntry:t,registrationPromise:ES(e)}:{installationEntry:t}}async function _S(e,t){try{const n=await lS(e,t);return Xo(e.appConfig,n)}catch(n){throw rv(n)&&n.customData.serverCode===409?await fv(e.appConfig):await Xo(e.appConfig,{fid:t.fid,registrationStatus:0}),n}}async function ES(e){let t=await Df(e.appConfig);for(;t.registrationStatus===1;)await uv(100),t=await Df(e.appConfig);if(t.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await qc(e);return r||n}return t}function Df(e){return ka(e,t=>{if(!t)throw tr.create("installation-not-found");return pv(t)})}function pv(e){return SS(e)?{fid:e.fid,registrationStatus:0}:e}function SS(e){return e.registrationStatus===1&&e.registrationTime+ev<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function IS({appConfig:e,heartbeatServiceProvider:t},n){const r=TS(e,n),i=sS(e,n),s=t.getImmediate({optional:!0});if(s){const h=await s.getHeartbeatsHeader();h&&i.append("x-firebase-client",h)}const a={installation:{sdkVersion:tv,appId:e.appId}},u={method:"POST",headers:i,body:JSON.stringify(a)},c=await lv(()=>fetch(r,u));if(c.ok){const h=await c.json();return sv(h)}else throw await ov("Generate Auth Token",c)}function TS(e,{fid:t}){return`${iv(e)}/${t}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Qc(e,t=!1){let n;const r=await ka(e.appConfig,s=>{if(!gv(s))throw tr.create("not-registered");const a=s.authToken;if(!t&&PS(a))return s;if(a.requestStatus===1)return n=kS(e,t),s;{if(!navigator.onLine)throw tr.create("app-offline");const u=RS(s);return n=CS(e,u),u}});return n?await n:r.authToken}async function kS(e,t){let n=await Mf(e.appConfig);for(;n.authToken.requestStatus===1;)await uv(100),n=await Mf(e.appConfig);const r=n.authToken;return r.requestStatus===0?Qc(e,t):r}function Mf(e){return ka(e,t=>{if(!gv(t))throw tr.create("not-registered");const n=t.authToken;return NS(n)?Object.assign(Object.assign({},t),{authToken:{requestStatus:0}}):t})}async function CS(e,t){try{const n=await IS(e,t),r=Object.assign(Object.assign({},t),{authToken:n});return await Xo(e.appConfig,r),n}catch(n){if(rv(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await fv(e.appConfig);else{const r=Object.assign(Object.assign({},t),{authToken:{requestStatus:0}});await Xo(e.appConfig,r)}throw n}}function gv(e){return e!==void 0&&e.registrationStatus===2}function PS(e){return e.requestStatus===2&&!AS(e)}function AS(e){const t=Date.now();return t<e.creationTime||e.creationTime+e.expiresIn<t+tS}function RS(e){const t={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},e),{authToken:t})}function NS(e){return e.requestStatus===1&&e.requestTime+ev<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function OS(e){const t=e,{installationEntry:n,registrationPromise:r}=await qc(t);return r?r.catch(console.error):Qc(t).catch(console.error),n.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xS(e,t=!1){const n=e;return await LS(n),(await Qc(n,t)).token}async function LS(e){const{registrationPromise:t}=await qc(e);t&&await t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function DS(e){if(!e||!e.options)throw Ml("App Configuration");if(!e.name)throw Ml("App Name");const t=["projectId","apiKey","appId"];for(const n of t)if(!e.options[n])throw Ml(n);return{appName:e.name,projectId:e.options.projectId,apiKey:e.options.apiKey,appId:e.options.appId}}function Ml(e){return tr.create("missing-app-config-values",{valueName:e})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mv="installations",MS="installations-internal",US=e=>{const t=e.getProvider("app").getImmediate(),n=DS(t),r=lr(t,"heartbeat");return{app:t,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},jS=e=>{const t=e.getProvider("app").getImmediate(),n=lr(t,mv).getImmediate();return{getId:()=>OS(n),getToken:i=>xS(n,i)}};function FS(){Rt(new vt(mv,US,"PUBLIC")),Rt(new vt(MS,jS,"PRIVATE"))}FS();st(Zm,Kc);st(Zm,Kc,"esm2017");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yo="analytics",bS="firebase_id",zS="origin",$S=60*1e3,BS="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",Xc="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const He=new Ia("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VS={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},Qe=new ar("analytics","Analytics",VS);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function HS(e){if(!e.startsWith(Xc)){const t=Qe.create("invalid-gtag-resource",{gtagURL:e});return He.warn(t.message),""}return e}function vv(e){return Promise.all(e.map(t=>t.catch(n=>n)))}function WS(e,t){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(e,t)),n}function KS(e,t){const n=WS("firebase-js-sdk-policy",{createScriptURL:HS}),r=document.createElement("script"),i=`${Xc}?l=${e}&id=${t}`;r.src=n?n==null?void 0:n.createScriptURL(i):i,r.async=!0,document.head.appendChild(r)}function GS(e){let t=[];return Array.isArray(window[e])?t=window[e]:window[e]=t,t}async function qS(e,t,n,r,i,s){const a=r[i];try{if(a)await t[a];else{const c=(await vv(n)).find(h=>h.measurementId===i);c&&await t[c.appId]}}catch(u){He.error(u)}e("config",i,s)}async function QS(e,t,n,r,i){try{let s=[];if(i&&i.send_to){let a=i.send_to;Array.isArray(a)||(a=[a]);const u=await vv(n);for(const c of a){const h=u.find(g=>g.measurementId===c),w=h&&t[h.appId];if(w)s.push(w);else{s=[];break}}}s.length===0&&(s=Object.values(t)),await Promise.all(s),e("event",r,i||{})}catch(s){He.error(s)}}function XS(e,t,n,r){async function i(s,...a){try{if(s==="event"){const[u,c]=a;await QS(e,t,n,u,c)}else if(s==="config"){const[u,c]=a;await qS(e,t,n,r,u,c)}else if(s==="consent"){const[u,c]=a;e("consent",u,c)}else if(s==="get"){const[u,c,h]=a;e("get",u,c,h)}else if(s==="set"){const[u]=a;e("set",u)}else e(s,...a)}catch(u){He.error(u)}}return i}function YS(e,t,n,r,i){let s=function(...a){window[r].push(arguments)};return window[i]&&typeof window[i]=="function"&&(s=window[i]),window[i]=XS(s,e,t,n),{gtagCore:s,wrappedGtag:window[i]}}function JS(e){const t=window.document.getElementsByTagName("script");for(const n of Object.values(t))if(n.src&&n.src.includes(Xc)&&n.src.includes(e))return n;return null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZS=30,eI=1e3;class tI{constructor(t={},n=eI){this.throttleMetadata=t,this.intervalMillis=n}getThrottleMetadata(t){return this.throttleMetadata[t]}setThrottleMetadata(t,n){this.throttleMetadata[t]=n}deleteThrottleMetadata(t){delete this.throttleMetadata[t]}}const yv=new tI;function nI(e){return new Headers({Accept:"application/json","x-goog-api-key":e})}async function rI(e){var t;const{appId:n,apiKey:r}=e,i={method:"GET",headers:nI(r)},s=BS.replace("{app-id}",n),a=await fetch(s,i);if(a.status!==200&&a.status!==304){let u="";try{const c=await a.json();!((t=c.error)===null||t===void 0)&&t.message&&(u=c.error.message)}catch{}throw Qe.create("config-fetch-failed",{httpStatus:a.status,responseMessage:u})}return a.json()}async function iI(e,t=yv,n){const{appId:r,apiKey:i,measurementId:s}=e.options;if(!r)throw Qe.create("no-app-id");if(!i){if(s)return{measurementId:s,appId:r};throw Qe.create("no-api-key")}const a=t.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},u=new aI;return setTimeout(async()=>{u.abort()},$S),wv({appId:r,apiKey:i,measurementId:s},a,u,t)}async function wv(e,{throttleEndTimeMillis:t,backoffCount:n},r,i=yv){var s;const{appId:a,measurementId:u}=e;try{await sI(r,t)}catch(c){if(u)return He.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${u} provided in the "measurementId" field in the local Firebase config. [${c==null?void 0:c.message}]`),{appId:a,measurementId:u};throw c}try{const c=await rI(e);return i.deleteThrottleMetadata(a),c}catch(c){const h=c;if(!oI(h)){if(i.deleteThrottleMetadata(a),u)return He.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${u} provided in the "measurementId" field in the local Firebase config. [${h==null?void 0:h.message}]`),{appId:a,measurementId:u};throw c}const w=Number((s=h==null?void 0:h.customData)===null||s===void 0?void 0:s.httpStatus)===503?kf(n,i.intervalMillis,ZS):kf(n,i.intervalMillis),g={throttleEndTimeMillis:Date.now()+w,backoffCount:n+1};return i.setThrottleMetadata(a,g),He.debug(`Calling attemptFetch again in ${w} millis`),wv(e,g,r,i)}}function sI(e,t){return new Promise((n,r)=>{const i=Math.max(t-Date.now(),0),s=setTimeout(n,i);e.addEventListener(()=>{clearTimeout(s),r(Qe.create("fetch-throttle",{throttleEndTimeMillis:t}))})})}function oI(e){if(!(e instanceof wt)||!e.customData)return!1;const t=Number(e.customData.httpStatus);return t===429||t===500||t===503||t===504}class aI{constructor(){this.listeners=[]}addEventListener(t){this.listeners.push(t)}abort(){this.listeners.forEach(t=>t())}}async function lI(e,t,n,r,i){if(i&&i.global){e("event",n,r);return}else{const s=await t,a=Object.assign(Object.assign({},r),{send_to:s});e("event",n,a)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function uI(){if(Wm())try{await Km()}catch(e){return He.warn(Qe.create("indexeddb-unavailable",{errorInfo:e==null?void 0:e.toString()}).message),!1}else return He.warn(Qe.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function cI(e,t,n,r,i,s,a){var u;const c=iI(e);c.then(N=>{n[N.measurementId]=N.appId,e.options.measurementId&&N.measurementId!==e.options.measurementId&&He.warn(`The measurement ID in the local Firebase config (${e.options.measurementId}) does not match the measurement ID fetched from the server (${N.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(N=>He.error(N)),t.push(c);const h=uI().then(N=>{if(N)return r.getId()}),[w,g]=await Promise.all([c,h]);JS(s)||KS(s,w.measurementId),i("js",new Date);const S=(u=a==null?void 0:a.config)!==null&&u!==void 0?u:{};return S[zS]="firebase",S.update=!0,g!=null&&(S[bS]=g),i("config",w.measurementId,S),w.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dI{constructor(t){this.app=t}_delete(){return delete $i[this.app.options.appId],Promise.resolve()}}let $i={},Uf=[];const jf={};let Ul="dataLayer",hI="gtag",Ff,_v,bf=!1;function fI(){const e=[];if(Hm()&&e.push("This is a browser extension environment."),M1()||e.push("Cookies are not available."),e.length>0){const t=e.map((r,i)=>`(${i+1}) ${r}`).join(" "),n=Qe.create("invalid-analytics-context",{errorInfo:t});He.warn(n.message)}}function pI(e,t,n){fI();const r=e.options.appId;if(!r)throw Qe.create("no-app-id");if(!e.options.apiKey)if(e.options.measurementId)He.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${e.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw Qe.create("no-api-key");if($i[r]!=null)throw Qe.create("already-exists",{id:r});if(!bf){GS(Ul);const{wrappedGtag:s,gtagCore:a}=YS($i,Uf,jf,Ul,hI);_v=s,Ff=a,bf=!0}return $i[r]=cI(e,Uf,jf,t,Ff,Ul,n),new dI(e)}function gI(e=Wc()){e=lt(e);const t=lr(e,Yo);return t.isInitialized()?t.getImmediate():mI(e)}function mI(e,t={}){const n=lr(e,Yo);if(n.isInitialized()){const i=n.getImmediate();if(ls(t,n.getOptions()))return i;throw Qe.create("already-initialized")}return n.initialize({options:t})}function vI(e,t,n,r){e=lt(e),lI(_v,$i[e.app.options.appId],t,n,r).catch(i=>He.error(i))}const zf="@firebase/analytics",$f="0.10.7";function yI(){Rt(new vt(Yo,(t,{options:n})=>{const r=t.getProvider("app").getImmediate(),i=t.getProvider("installations-internal").getImmediate();return pI(r,i,n)},"PUBLIC")),Rt(new vt("analytics-internal",e,"PRIVATE")),st(zf,$f),st(zf,$f,"esm2017");function e(t){try{const n=t.getProvider(Yo).getImmediate();return{logEvent:(r,i,s)=>vI(n,r,i,s)}}catch(n){throw Qe.create("interop-component-reg-failed",{reason:n})}}}yI();var Bf=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Ev;(function(){var e;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function t(y,p){function v(){}v.prototype=p.prototype,y.D=p.prototype,y.prototype=new v,y.prototype.constructor=y,y.C=function(_,k,P){for(var E=Array(arguments.length-2),Ze=2;Ze<arguments.length;Ze++)E[Ze-2]=arguments[Ze];return p.prototype[k].apply(_,E)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}t(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(y,p,v){v||(v=0);var _=Array(16);if(typeof p=="string")for(var k=0;16>k;++k)_[k]=p.charCodeAt(v++)|p.charCodeAt(v++)<<8|p.charCodeAt(v++)<<16|p.charCodeAt(v++)<<24;else for(k=0;16>k;++k)_[k]=p[v++]|p[v++]<<8|p[v++]<<16|p[v++]<<24;p=y.g[0],v=y.g[1],k=y.g[2];var P=y.g[3],E=p+(P^v&(k^P))+_[0]+3614090360&4294967295;p=v+(E<<7&4294967295|E>>>25),E=P+(k^p&(v^k))+_[1]+3905402710&4294967295,P=p+(E<<12&4294967295|E>>>20),E=k+(v^P&(p^v))+_[2]+606105819&4294967295,k=P+(E<<17&4294967295|E>>>15),E=v+(p^k&(P^p))+_[3]+3250441966&4294967295,v=k+(E<<22&4294967295|E>>>10),E=p+(P^v&(k^P))+_[4]+4118548399&4294967295,p=v+(E<<7&4294967295|E>>>25),E=P+(k^p&(v^k))+_[5]+1200080426&4294967295,P=p+(E<<12&4294967295|E>>>20),E=k+(v^P&(p^v))+_[6]+2821735955&4294967295,k=P+(E<<17&4294967295|E>>>15),E=v+(p^k&(P^p))+_[7]+4249261313&4294967295,v=k+(E<<22&4294967295|E>>>10),E=p+(P^v&(k^P))+_[8]+1770035416&4294967295,p=v+(E<<7&4294967295|E>>>25),E=P+(k^p&(v^k))+_[9]+2336552879&4294967295,P=p+(E<<12&4294967295|E>>>20),E=k+(v^P&(p^v))+_[10]+4294925233&4294967295,k=P+(E<<17&4294967295|E>>>15),E=v+(p^k&(P^p))+_[11]+2304563134&4294967295,v=k+(E<<22&4294967295|E>>>10),E=p+(P^v&(k^P))+_[12]+1804603682&4294967295,p=v+(E<<7&4294967295|E>>>25),E=P+(k^p&(v^k))+_[13]+4254626195&4294967295,P=p+(E<<12&4294967295|E>>>20),E=k+(v^P&(p^v))+_[14]+2792965006&4294967295,k=P+(E<<17&4294967295|E>>>15),E=v+(p^k&(P^p))+_[15]+1236535329&4294967295,v=k+(E<<22&4294967295|E>>>10),E=p+(k^P&(v^k))+_[1]+4129170786&4294967295,p=v+(E<<5&4294967295|E>>>27),E=P+(v^k&(p^v))+_[6]+3225465664&4294967295,P=p+(E<<9&4294967295|E>>>23),E=k+(p^v&(P^p))+_[11]+643717713&4294967295,k=P+(E<<14&4294967295|E>>>18),E=v+(P^p&(k^P))+_[0]+3921069994&4294967295,v=k+(E<<20&4294967295|E>>>12),E=p+(k^P&(v^k))+_[5]+3593408605&4294967295,p=v+(E<<5&4294967295|E>>>27),E=P+(v^k&(p^v))+_[10]+38016083&4294967295,P=p+(E<<9&4294967295|E>>>23),E=k+(p^v&(P^p))+_[15]+3634488961&4294967295,k=P+(E<<14&4294967295|E>>>18),E=v+(P^p&(k^P))+_[4]+3889429448&4294967295,v=k+(E<<20&4294967295|E>>>12),E=p+(k^P&(v^k))+_[9]+568446438&4294967295,p=v+(E<<5&4294967295|E>>>27),E=P+(v^k&(p^v))+_[14]+3275163606&4294967295,P=p+(E<<9&4294967295|E>>>23),E=k+(p^v&(P^p))+_[3]+4107603335&4294967295,k=P+(E<<14&4294967295|E>>>18),E=v+(P^p&(k^P))+_[8]+1163531501&4294967295,v=k+(E<<20&4294967295|E>>>12),E=p+(k^P&(v^k))+_[13]+2850285829&4294967295,p=v+(E<<5&4294967295|E>>>27),E=P+(v^k&(p^v))+_[2]+4243563512&4294967295,P=p+(E<<9&4294967295|E>>>23),E=k+(p^v&(P^p))+_[7]+1735328473&4294967295,k=P+(E<<14&4294967295|E>>>18),E=v+(P^p&(k^P))+_[12]+2368359562&4294967295,v=k+(E<<20&4294967295|E>>>12),E=p+(v^k^P)+_[5]+4294588738&4294967295,p=v+(E<<4&4294967295|E>>>28),E=P+(p^v^k)+_[8]+2272392833&4294967295,P=p+(E<<11&4294967295|E>>>21),E=k+(P^p^v)+_[11]+1839030562&4294967295,k=P+(E<<16&4294967295|E>>>16),E=v+(k^P^p)+_[14]+4259657740&4294967295,v=k+(E<<23&4294967295|E>>>9),E=p+(v^k^P)+_[1]+2763975236&4294967295,p=v+(E<<4&4294967295|E>>>28),E=P+(p^v^k)+_[4]+1272893353&4294967295,P=p+(E<<11&4294967295|E>>>21),E=k+(P^p^v)+_[7]+4139469664&4294967295,k=P+(E<<16&4294967295|E>>>16),E=v+(k^P^p)+_[10]+3200236656&4294967295,v=k+(E<<23&4294967295|E>>>9),E=p+(v^k^P)+_[13]+681279174&4294967295,p=v+(E<<4&4294967295|E>>>28),E=P+(p^v^k)+_[0]+3936430074&4294967295,P=p+(E<<11&4294967295|E>>>21),E=k+(P^p^v)+_[3]+3572445317&4294967295,k=P+(E<<16&4294967295|E>>>16),E=v+(k^P^p)+_[6]+76029189&4294967295,v=k+(E<<23&4294967295|E>>>9),E=p+(v^k^P)+_[9]+3654602809&4294967295,p=v+(E<<4&4294967295|E>>>28),E=P+(p^v^k)+_[12]+3873151461&4294967295,P=p+(E<<11&4294967295|E>>>21),E=k+(P^p^v)+_[15]+530742520&4294967295,k=P+(E<<16&4294967295|E>>>16),E=v+(k^P^p)+_[2]+3299628645&4294967295,v=k+(E<<23&4294967295|E>>>9),E=p+(k^(v|~P))+_[0]+4096336452&4294967295,p=v+(E<<6&4294967295|E>>>26),E=P+(v^(p|~k))+_[7]+1126891415&4294967295,P=p+(E<<10&4294967295|E>>>22),E=k+(p^(P|~v))+_[14]+2878612391&4294967295,k=P+(E<<15&4294967295|E>>>17),E=v+(P^(k|~p))+_[5]+4237533241&4294967295,v=k+(E<<21&4294967295|E>>>11),E=p+(k^(v|~P))+_[12]+1700485571&4294967295,p=v+(E<<6&4294967295|E>>>26),E=P+(v^(p|~k))+_[3]+2399980690&4294967295,P=p+(E<<10&4294967295|E>>>22),E=k+(p^(P|~v))+_[10]+4293915773&4294967295,k=P+(E<<15&4294967295|E>>>17),E=v+(P^(k|~p))+_[1]+2240044497&4294967295,v=k+(E<<21&4294967295|E>>>11),E=p+(k^(v|~P))+_[8]+1873313359&4294967295,p=v+(E<<6&4294967295|E>>>26),E=P+(v^(p|~k))+_[15]+4264355552&4294967295,P=p+(E<<10&4294967295|E>>>22),E=k+(p^(P|~v))+_[6]+2734768916&4294967295,k=P+(E<<15&4294967295|E>>>17),E=v+(P^(k|~p))+_[13]+1309151649&4294967295,v=k+(E<<21&4294967295|E>>>11),E=p+(k^(v|~P))+_[4]+4149444226&4294967295,p=v+(E<<6&4294967295|E>>>26),E=P+(v^(p|~k))+_[11]+3174756917&4294967295,P=p+(E<<10&4294967295|E>>>22),E=k+(p^(P|~v))+_[2]+718787259&4294967295,k=P+(E<<15&4294967295|E>>>17),E=v+(P^(k|~p))+_[9]+3951481745&4294967295,y.g[0]=y.g[0]+p&4294967295,y.g[1]=y.g[1]+(k+(E<<21&4294967295|E>>>11))&4294967295,y.g[2]=y.g[2]+k&4294967295,y.g[3]=y.g[3]+P&4294967295}r.prototype.u=function(y,p){p===void 0&&(p=y.length);for(var v=p-this.blockSize,_=this.B,k=this.h,P=0;P<p;){if(k==0)for(;P<=v;)i(this,y,P),P+=this.blockSize;if(typeof y=="string"){for(;P<p;)if(_[k++]=y.charCodeAt(P++),k==this.blockSize){i(this,_),k=0;break}}else for(;P<p;)if(_[k++]=y[P++],k==this.blockSize){i(this,_),k=0;break}}this.h=k,this.o+=p},r.prototype.v=function(){var y=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);y[0]=128;for(var p=1;p<y.length-8;++p)y[p]=0;var v=8*this.o;for(p=y.length-8;p<y.length;++p)y[p]=v&255,v/=256;for(this.u(y),y=Array(16),p=v=0;4>p;++p)for(var _=0;32>_;_+=8)y[v++]=this.g[p]>>>_&255;return y};function s(y,p){var v=u;return Object.prototype.hasOwnProperty.call(v,y)?v[y]:v[y]=p(y)}function a(y,p){this.h=p;for(var v=[],_=!0,k=y.length-1;0<=k;k--){var P=y[k]|0;_&&P==p||(v[k]=P,_=!1)}this.g=v}var u={};function c(y){return-128<=y&&128>y?s(y,function(p){return new a([p|0],0>p?-1:0)}):new a([y|0],0>y?-1:0)}function h(y){if(isNaN(y)||!isFinite(y))return g;if(0>y)return L(h(-y));for(var p=[],v=1,_=0;y>=v;_++)p[_]=y/v|0,v*=4294967296;return new a(p,0)}function w(y,p){if(y.length==0)throw Error("number format error: empty string");if(p=p||10,2>p||36<p)throw Error("radix out of range: "+p);if(y.charAt(0)=="-")return L(w(y.substring(1),p));if(0<=y.indexOf("-"))throw Error('number format error: interior "-" character');for(var v=h(Math.pow(p,8)),_=g,k=0;k<y.length;k+=8){var P=Math.min(8,y.length-k),E=parseInt(y.substring(k,k+P),p);8>P?(P=h(Math.pow(p,P)),_=_.j(P).add(h(E))):(_=_.j(v),_=_.add(h(E)))}return _}var g=c(0),S=c(1),N=c(16777216);e=a.prototype,e.m=function(){if(x(this))return-L(this).m();for(var y=0,p=1,v=0;v<this.g.length;v++){var _=this.i(v);y+=(0<=_?_:4294967296+_)*p,p*=4294967296}return y},e.toString=function(y){if(y=y||10,2>y||36<y)throw Error("radix out of range: "+y);if(A(this))return"0";if(x(this))return"-"+L(this).toString(y);for(var p=h(Math.pow(y,6)),v=this,_="";;){var k=O(v,p).g;v=T(v,k.j(p));var P=((0<v.g.length?v.g[0]:v.h)>>>0).toString(y);if(v=k,A(v))return P+_;for(;6>P.length;)P="0"+P;_=P+_}},e.i=function(y){return 0>y?0:y<this.g.length?this.g[y]:this.h};function A(y){if(y.h!=0)return!1;for(var p=0;p<y.g.length;p++)if(y.g[p]!=0)return!1;return!0}function x(y){return y.h==-1}e.l=function(y){return y=T(this,y),x(y)?-1:A(y)?0:1};function L(y){for(var p=y.g.length,v=[],_=0;_<p;_++)v[_]=~y.g[_];return new a(v,~y.h).add(S)}e.abs=function(){return x(this)?L(this):this},e.add=function(y){for(var p=Math.max(this.g.length,y.g.length),v=[],_=0,k=0;k<=p;k++){var P=_+(this.i(k)&65535)+(y.i(k)&65535),E=(P>>>16)+(this.i(k)>>>16)+(y.i(k)>>>16);_=E>>>16,P&=65535,E&=65535,v[k]=E<<16|P}return new a(v,v[v.length-1]&-2147483648?-1:0)};function T(y,p){return y.add(L(p))}e.j=function(y){if(A(this)||A(y))return g;if(x(this))return x(y)?L(this).j(L(y)):L(L(this).j(y));if(x(y))return L(this.j(L(y)));if(0>this.l(N)&&0>y.l(N))return h(this.m()*y.m());for(var p=this.g.length+y.g.length,v=[],_=0;_<2*p;_++)v[_]=0;for(_=0;_<this.g.length;_++)for(var k=0;k<y.g.length;k++){var P=this.i(_)>>>16,E=this.i(_)&65535,Ze=y.i(k)>>>16,Un=y.i(k)&65535;v[2*_+2*k]+=E*Un,m(v,2*_+2*k),v[2*_+2*k+1]+=P*Un,m(v,2*_+2*k+1),v[2*_+2*k+1]+=E*Ze,m(v,2*_+2*k+1),v[2*_+2*k+2]+=P*Ze,m(v,2*_+2*k+2)}for(_=0;_<p;_++)v[_]=v[2*_+1]<<16|v[2*_];for(_=p;_<2*p;_++)v[_]=0;return new a(v,0)};function m(y,p){for(;(y[p]&65535)!=y[p];)y[p+1]+=y[p]>>>16,y[p]&=65535,p++}function I(y,p){this.g=y,this.h=p}function O(y,p){if(A(p))throw Error("division by zero");if(A(y))return new I(g,g);if(x(y))return p=O(L(y),p),new I(L(p.g),L(p.h));if(x(p))return p=O(y,L(p)),new I(L(p.g),p.h);if(30<y.g.length){if(x(y)||x(p))throw Error("slowDivide_ only works with positive integers.");for(var v=S,_=p;0>=_.l(y);)v=j(v),_=j(_);var k=b(v,1),P=b(_,1);for(_=b(_,2),v=b(v,2);!A(_);){var E=P.add(_);0>=E.l(y)&&(k=k.add(v),P=E),_=b(_,1),v=b(v,1)}return p=T(y,k.j(p)),new I(k,p)}for(k=g;0<=y.l(p);){for(v=Math.max(1,Math.floor(y.m()/p.m())),_=Math.ceil(Math.log(v)/Math.LN2),_=48>=_?1:Math.pow(2,_-48),P=h(v),E=P.j(p);x(E)||0<E.l(y);)v-=_,P=h(v),E=P.j(p);A(P)&&(P=S),k=k.add(P),y=T(y,E)}return new I(k,y)}e.A=function(y){return O(this,y).h},e.and=function(y){for(var p=Math.max(this.g.length,y.g.length),v=[],_=0;_<p;_++)v[_]=this.i(_)&y.i(_);return new a(v,this.h&y.h)},e.or=function(y){for(var p=Math.max(this.g.length,y.g.length),v=[],_=0;_<p;_++)v[_]=this.i(_)|y.i(_);return new a(v,this.h|y.h)},e.xor=function(y){for(var p=Math.max(this.g.length,y.g.length),v=[],_=0;_<p;_++)v[_]=this.i(_)^y.i(_);return new a(v,this.h^y.h)};function j(y){for(var p=y.g.length+1,v=[],_=0;_<p;_++)v[_]=y.i(_)<<1|y.i(_-1)>>>31;return new a(v,y.h)}function b(y,p){var v=p>>5;p%=32;for(var _=y.g.length-v,k=[],P=0;P<_;P++)k[P]=0<p?y.i(P+v)>>>p|y.i(P+v+1)<<32-p:y.i(P+v);return new a(k,y.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.A,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=h,a.fromString=w,Ev=a}).apply(typeof Bf<"u"?Bf:typeof self<"u"?self:typeof window<"u"?window:{});var to=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};(function(){var e,t=typeof Object.defineProperties=="function"?Object.defineProperty:function(o,l,d){return o==Array.prototype||o==Object.prototype||(o[l]=d.value),o};function n(o){o=[typeof globalThis=="object"&&globalThis,o,typeof window=="object"&&window,typeof self=="object"&&self,typeof to=="object"&&to];for(var l=0;l<o.length;++l){var d=o[l];if(d&&d.Math==Math)return d}throw Error("Cannot find global object")}var r=n(this);function i(o,l){if(l)e:{var d=r;o=o.split(".");for(var f=0;f<o.length-1;f++){var C=o[f];if(!(C in d))break e;d=d[C]}o=o[o.length-1],f=d[o],l=l(f),l!=f&&l!=null&&t(d,o,{configurable:!0,writable:!0,value:l})}}function s(o,l){o instanceof String&&(o+="");var d=0,f=!1,C={next:function(){if(!f&&d<o.length){var R=d++;return{value:l(R,o[R]),done:!1}}return f=!0,{done:!0,value:void 0}}};return C[Symbol.iterator]=function(){return C},C}i("Array.prototype.values",function(o){return o||function(){return s(this,function(l,d){return d})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var a=a||{},u=this||self;function c(o){var l=typeof o;return l=l!="object"?l:o?Array.isArray(o)?"array":l:"null",l=="array"||l=="object"&&typeof o.length=="number"}function h(o){var l=typeof o;return l=="object"&&o!=null||l=="function"}function w(o,l,d){return o.call.apply(o.bind,arguments)}function g(o,l,d){if(!o)throw Error();if(2<arguments.length){var f=Array.prototype.slice.call(arguments,2);return function(){var C=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(C,f),o.apply(l,C)}}return function(){return o.apply(l,arguments)}}function S(o,l,d){return S=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?w:g,S.apply(null,arguments)}function N(o,l){var d=Array.prototype.slice.call(arguments,1);return function(){var f=d.slice();return f.push.apply(f,arguments),o.apply(this,f)}}function A(o,l){function d(){}d.prototype=l.prototype,o.aa=l.prototype,o.prototype=new d,o.prototype.constructor=o,o.Qb=function(f,C,R){for(var F=Array(arguments.length-2),J=2;J<arguments.length;J++)F[J-2]=arguments[J];return l.prototype[C].apply(f,F)}}function x(o){const l=o.length;if(0<l){const d=Array(l);for(let f=0;f<l;f++)d[f]=o[f];return d}return[]}function L(o,l){for(let d=1;d<arguments.length;d++){const f=arguments[d];if(c(f)){const C=o.length||0,R=f.length||0;o.length=C+R;for(let F=0;F<R;F++)o[C+F]=f[F]}else o.push(f)}}class T{constructor(l,d){this.i=l,this.j=d,this.h=0,this.g=null}get(){let l;return 0<this.h?(this.h--,l=this.g,this.g=l.next,l.next=null):l=this.i(),l}}function m(o){return/^[\s\xa0]*$/.test(o)}function I(){var o=u.navigator;return o&&(o=o.userAgent)?o:""}function O(o){return O[" "](o),o}O[" "]=function(){};var j=I().indexOf("Gecko")!=-1&&!(I().toLowerCase().indexOf("webkit")!=-1&&I().indexOf("Edge")==-1)&&!(I().indexOf("Trident")!=-1||I().indexOf("MSIE")!=-1)&&I().indexOf("Edge")==-1;function b(o,l,d){for(const f in o)l.call(d,o[f],f,o)}function y(o,l){for(const d in o)l.call(void 0,o[d],d,o)}function p(o){const l={};for(const d in o)l[d]=o[d];return l}const v="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function _(o,l){let d,f;for(let C=1;C<arguments.length;C++){f=arguments[C];for(d in f)o[d]=f[d];for(let R=0;R<v.length;R++)d=v[R],Object.prototype.hasOwnProperty.call(f,d)&&(o[d]=f[d])}}function k(o){var l=1;o=o.split(":");const d=[];for(;0<l&&o.length;)d.push(o.shift()),l--;return o.length&&d.push(o.join(":")),d}function P(o){u.setTimeout(()=>{throw o},0)}function E(){var o=V;let l=null;return o.g&&(l=o.g,o.g=o.g.next,o.g||(o.h=null),l.next=null),l}class Ze{constructor(){this.h=this.g=null}add(l,d){const f=Un.get();f.set(l,d),this.h?this.h.next=f:this.g=f,this.h=f}}var Un=new T(()=>new ii,o=>o.reset());class ii{constructor(){this.next=this.g=this.h=null}set(l,d){this.h=l,this.g=d,this.next=null}reset(){this.next=this.g=this.h=null}}let Nt,z=!1,V=new Ze,H=()=>{const o=u.Promise.resolve(void 0);Nt=()=>{o.then(ie)}};var ie=()=>{for(var o;o=E();){try{o.h.call(o.g)}catch(d){P(d)}var l=Un;l.j(o),100>l.h&&(l.h++,o.next=l.g,l.g=o)}z=!1};function Y(){this.s=this.s,this.C=this.C}Y.prototype.s=!1,Y.prototype.ma=function(){this.s||(this.s=!0,this.N())},Y.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function ce(o,l){this.type=o,this.g=this.target=l,this.defaultPrevented=!1}ce.prototype.h=function(){this.defaultPrevented=!0};var Ot=function(){if(!u.addEventListener||!Object.defineProperty)return!1;var o=!1,l=Object.defineProperty({},"passive",{get:function(){o=!0}});try{const d=()=>{};u.addEventListener("test",d,l),u.removeEventListener("test",d,l)}catch{}return o}();function xt(o,l){if(ce.call(this,o?o.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,o){var d=this.type=o.type,f=o.changedTouches&&o.changedTouches.length?o.changedTouches[0]:null;if(this.target=o.target||o.srcElement,this.g=l,l=o.relatedTarget){if(j){e:{try{O(l.nodeName);var C=!0;break e}catch{}C=!1}C||(l=null)}}else d=="mouseover"?l=o.fromElement:d=="mouseout"&&(l=o.toElement);this.relatedTarget=l,f?(this.clientX=f.clientX!==void 0?f.clientX:f.pageX,this.clientY=f.clientY!==void 0?f.clientY:f.pageY,this.screenX=f.screenX||0,this.screenY=f.screenY||0):(this.clientX=o.clientX!==void 0?o.clientX:o.pageX,this.clientY=o.clientY!==void 0?o.clientY:o.pageY,this.screenX=o.screenX||0,this.screenY=o.screenY||0),this.button=o.button,this.key=o.key||"",this.ctrlKey=o.ctrlKey,this.altKey=o.altKey,this.shiftKey=o.shiftKey,this.metaKey=o.metaKey,this.pointerId=o.pointerId||0,this.pointerType=typeof o.pointerType=="string"?o.pointerType:Lt[o.pointerType]||"",this.state=o.state,this.i=o,o.defaultPrevented&&xt.aa.h.call(this)}}A(xt,ce);var Lt={2:"touch",3:"pen",4:"mouse"};xt.prototype.h=function(){xt.aa.h.call(this);var o=this.i;o.preventDefault?o.preventDefault():o.returnValue=!1};var Dt="closure_listenable_"+(1e6*Math.random()|0),oy=0;function ay(o,l,d,f,C){this.listener=o,this.proxy=null,this.src=l,this.type=d,this.capture=!!f,this.ha=C,this.key=++oy,this.da=this.fa=!1}function Ss(o){o.da=!0,o.listener=null,o.proxy=null,o.src=null,o.ha=null}function Is(o){this.src=o,this.g={},this.h=0}Is.prototype.add=function(o,l,d,f,C){var R=o.toString();o=this.g[R],o||(o=this.g[R]=[],this.h++);var F=xa(o,l,f,C);return-1<F?(l=o[F],d||(l.fa=!1)):(l=new ay(l,this.src,R,!!f,C),l.fa=d,o.push(l)),l};function Oa(o,l){var d=l.type;if(d in o.g){var f=o.g[d],C=Array.prototype.indexOf.call(f,l,void 0),R;(R=0<=C)&&Array.prototype.splice.call(f,C,1),R&&(Ss(l),o.g[d].length==0&&(delete o.g[d],o.h--))}}function xa(o,l,d,f){for(var C=0;C<o.length;++C){var R=o[C];if(!R.da&&R.listener==l&&R.capture==!!d&&R.ha==f)return C}return-1}var La="closure_lm_"+(1e6*Math.random()|0),Da={};function cd(o,l,d,f,C){if(Array.isArray(l)){for(var R=0;R<l.length;R++)cd(o,l[R],d,f,C);return null}return d=fd(d),o&&o[Dt]?o.K(l,d,h(f)?!!f.capture:!!f,C):ly(o,l,d,!1,f,C)}function ly(o,l,d,f,C,R){if(!l)throw Error("Invalid event type");var F=h(C)?!!C.capture:!!C,J=Ua(o);if(J||(o[La]=J=new Is(o)),d=J.add(l,d,f,F,R),d.proxy)return d;if(f=uy(),d.proxy=f,f.src=o,f.listener=d,o.addEventListener)Ot||(C=F),C===void 0&&(C=!1),o.addEventListener(l.toString(),f,C);else if(o.attachEvent)o.attachEvent(hd(l.toString()),f);else if(o.addListener&&o.removeListener)o.addListener(f);else throw Error("addEventListener and attachEvent are unavailable.");return d}function uy(){function o(d){return l.call(o.src,o.listener,d)}const l=cy;return o}function dd(o,l,d,f,C){if(Array.isArray(l))for(var R=0;R<l.length;R++)dd(o,l[R],d,f,C);else f=h(f)?!!f.capture:!!f,d=fd(d),o&&o[Dt]?(o=o.i,l=String(l).toString(),l in o.g&&(R=o.g[l],d=xa(R,d,f,C),-1<d&&(Ss(R[d]),Array.prototype.splice.call(R,d,1),R.length==0&&(delete o.g[l],o.h--)))):o&&(o=Ua(o))&&(l=o.g[l.toString()],o=-1,l&&(o=xa(l,d,f,C)),(d=-1<o?l[o]:null)&&Ma(d))}function Ma(o){if(typeof o!="number"&&o&&!o.da){var l=o.src;if(l&&l[Dt])Oa(l.i,o);else{var d=o.type,f=o.proxy;l.removeEventListener?l.removeEventListener(d,f,o.capture):l.detachEvent?l.detachEvent(hd(d),f):l.addListener&&l.removeListener&&l.removeListener(f),(d=Ua(l))?(Oa(d,o),d.h==0&&(d.src=null,l[La]=null)):Ss(o)}}}function hd(o){return o in Da?Da[o]:Da[o]="on"+o}function cy(o,l){if(o.da)o=!0;else{l=new xt(l,this);var d=o.listener,f=o.ha||o.src;o.fa&&Ma(o),o=d.call(f,l)}return o}function Ua(o){return o=o[La],o instanceof Is?o:null}var ja="__closure_events_fn_"+(1e9*Math.random()>>>0);function fd(o){return typeof o=="function"?o:(o[ja]||(o[ja]=function(l){return o.handleEvent(l)}),o[ja])}function Se(){Y.call(this),this.i=new Is(this),this.M=this,this.F=null}A(Se,Y),Se.prototype[Dt]=!0,Se.prototype.removeEventListener=function(o,l,d,f){dd(this,o,l,d,f)};function Le(o,l){var d,f=o.F;if(f)for(d=[];f;f=f.F)d.push(f);if(o=o.M,f=l.type||l,typeof l=="string")l=new ce(l,o);else if(l instanceof ce)l.target=l.target||o;else{var C=l;l=new ce(f,o),_(l,C)}if(C=!0,d)for(var R=d.length-1;0<=R;R--){var F=l.g=d[R];C=Ts(F,f,!0,l)&&C}if(F=l.g=o,C=Ts(F,f,!0,l)&&C,C=Ts(F,f,!1,l)&&C,d)for(R=0;R<d.length;R++)F=l.g=d[R],C=Ts(F,f,!1,l)&&C}Se.prototype.N=function(){if(Se.aa.N.call(this),this.i){var o=this.i,l;for(l in o.g){for(var d=o.g[l],f=0;f<d.length;f++)Ss(d[f]);delete o.g[l],o.h--}}this.F=null},Se.prototype.K=function(o,l,d,f){return this.i.add(String(o),l,!1,d,f)},Se.prototype.L=function(o,l,d,f){return this.i.add(String(o),l,!0,d,f)};function Ts(o,l,d,f){if(l=o.i.g[String(l)],!l)return!0;l=l.concat();for(var C=!0,R=0;R<l.length;++R){var F=l[R];if(F&&!F.da&&F.capture==d){var J=F.listener,ye=F.ha||F.src;F.fa&&Oa(o.i,F),C=J.call(ye,f)!==!1&&C}}return C&&!f.defaultPrevented}function pd(o,l,d){if(typeof o=="function")d&&(o=S(o,d));else if(o&&typeof o.handleEvent=="function")o=S(o.handleEvent,o);else throw Error("Invalid listener argument");return 2147483647<Number(l)?-1:u.setTimeout(o,l||0)}function gd(o){o.g=pd(()=>{o.g=null,o.i&&(o.i=!1,gd(o))},o.l);const l=o.h;o.h=null,o.m.apply(null,l)}class dy extends Y{constructor(l,d){super(),this.m=l,this.l=d,this.h=null,this.i=!1,this.g=null}j(l){this.h=arguments,this.g?this.i=!0:gd(this)}N(){super.N(),this.g&&(u.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function si(o){Y.call(this),this.h=o,this.g={}}A(si,Y);var md=[];function vd(o){b(o.g,function(l,d){this.g.hasOwnProperty(d)&&Ma(l)},o),o.g={}}si.prototype.N=function(){si.aa.N.call(this),vd(this)},si.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Fa=u.JSON.stringify,hy=u.JSON.parse,fy=class{stringify(o){return u.JSON.stringify(o,void 0)}parse(o){return u.JSON.parse(o,void 0)}};function ba(){}ba.prototype.h=null;function yd(o){return o.h||(o.h=o.i())}function py(){}var oi={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function za(){ce.call(this,"d")}A(za,ce);function $a(){ce.call(this,"c")}A($a,ce);var cr={},wd=null;function Ba(){return wd=wd||new Se}cr.La="serverreachability";function _d(o){ce.call(this,cr.La,o)}A(_d,ce);function ai(o){const l=Ba();Le(l,new _d(l))}cr.STAT_EVENT="statevent";function Ed(o,l){ce.call(this,cr.STAT_EVENT,o),this.stat=l}A(Ed,ce);function De(o){const l=Ba();Le(l,new Ed(l,o))}cr.Ma="timingevent";function Sd(o,l){ce.call(this,cr.Ma,o),this.size=l}A(Sd,ce);function li(o,l){if(typeof o!="function")throw Error("Fn must not be null and must be a function");return u.setTimeout(function(){o()},l)}function ui(){this.g=!0}ui.prototype.xa=function(){this.g=!1};function gy(o,l,d,f,C,R){o.info(function(){if(o.g)if(R)for(var F="",J=R.split("&"),ye=0;ye<J.length;ye++){var q=J[ye].split("=");if(1<q.length){var Ie=q[0];q=q[1];var Te=Ie.split("_");F=2<=Te.length&&Te[1]=="type"?F+(Ie+"="+q+"&"):F+(Ie+"=redacted&")}}else F=null;else F=R;return"XMLHTTP REQ ("+f+") [attempt "+C+"]: "+l+`
`+d+`
`+F})}function my(o,l,d,f,C,R,F){o.info(function(){return"XMLHTTP RESP ("+f+") [ attempt "+C+"]: "+l+`
`+d+`
`+R+" "+F})}function dr(o,l,d,f){o.info(function(){return"XMLHTTP TEXT ("+l+"): "+yy(o,d)+(f?" "+f:"")})}function vy(o,l){o.info(function(){return"TIMEOUT: "+l})}ui.prototype.info=function(){};function yy(o,l){if(!o.g)return l;if(!l)return null;try{var d=JSON.parse(l);if(d){for(o=0;o<d.length;o++)if(Array.isArray(d[o])){var f=d[o];if(!(2>f.length)){var C=f[1];if(Array.isArray(C)&&!(1>C.length)){var R=C[0];if(R!="noop"&&R!="stop"&&R!="close")for(var F=1;F<C.length;F++)C[F]=""}}}}return Fa(d)}catch{return l}}var Va={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},wy={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Ha;function ks(){}A(ks,ba),ks.prototype.g=function(){return new XMLHttpRequest},ks.prototype.i=function(){return{}},Ha=new ks;function en(o,l,d,f){this.j=o,this.i=l,this.l=d,this.R=f||1,this.U=new si(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Id}function Id(){this.i=null,this.g="",this.h=!1}var Td={},Wa={};function Ka(o,l,d){o.L=1,o.v=Rs(Mt(l)),o.m=d,o.P=!0,kd(o,null)}function kd(o,l){o.F=Date.now(),Cs(o),o.A=Mt(o.v);var d=o.A,f=o.R;Array.isArray(f)||(f=[String(f)]),bd(d.i,"t",f),o.C=0,d=o.j.J,o.h=new Id,o.g=rh(o.j,d?l:null,!o.m),0<o.O&&(o.M=new dy(S(o.Y,o,o.g),o.O)),l=o.U,d=o.g,f=o.ca;var C="readystatechange";Array.isArray(C)||(C&&(md[0]=C.toString()),C=md);for(var R=0;R<C.length;R++){var F=cd(d,C[R],f||l.handleEvent,!1,l.h||l);if(!F)break;l.g[F.key]=F}l=o.H?p(o.H):{},o.m?(o.u||(o.u="POST"),l["Content-Type"]="application/x-www-form-urlencoded",o.g.ea(o.A,o.u,o.m,l)):(o.u="GET",o.g.ea(o.A,o.u,null,l)),ai(),gy(o.i,o.u,o.A,o.l,o.R,o.m)}en.prototype.ca=function(o){o=o.target;const l=this.M;l&&Ut(o)==3?l.j():this.Y(o)},en.prototype.Y=function(o){try{if(o==this.g)e:{const Te=Ut(this.g);var l=this.g.Ba();const pr=this.g.Z();if(!(3>Te)&&(Te!=3||this.g&&(this.h.h||this.g.oa()||Kd(this.g)))){this.J||Te!=4||l==7||(l==8||0>=pr?ai(3):ai(2)),Ga(this);var d=this.g.Z();this.X=d;t:if(Cd(this)){var f=Kd(this.g);o="";var C=f.length,R=Ut(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){jn(this),ci(this);var F="";break t}this.h.i=new u.TextDecoder}for(l=0;l<C;l++)this.h.h=!0,o+=this.h.i.decode(f[l],{stream:!(R&&l==C-1)});f.length=0,this.h.g+=o,this.C=0,F=this.h.g}else F=this.g.oa();if(this.o=d==200,my(this.i,this.u,this.A,this.l,this.R,Te,d),this.o){if(this.T&&!this.K){t:{if(this.g){var J,ye=this.g;if((J=ye.g?ye.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!m(J)){var q=J;break t}}q=null}if(d=q)dr(this.i,this.l,d,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,qa(this,d);else{this.o=!1,this.s=3,De(12),jn(this),ci(this);break e}}if(this.P){d=!0;let ut;for(;!this.J&&this.C<F.length;)if(ut=_y(this,F),ut==Wa){Te==4&&(this.s=4,De(14),d=!1),dr(this.i,this.l,null,"[Incomplete Response]");break}else if(ut==Td){this.s=4,De(15),dr(this.i,this.l,F,"[Invalid Chunk]"),d=!1;break}else dr(this.i,this.l,ut,null),qa(this,ut);if(Cd(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Te!=4||F.length!=0||this.h.h||(this.s=1,De(16),d=!1),this.o=this.o&&d,!d)dr(this.i,this.l,F,"[Invalid Chunked Response]"),jn(this),ci(this);else if(0<F.length&&!this.W){this.W=!0;var Ie=this.j;Ie.g==this&&Ie.ba&&!Ie.M&&(Ie.j.info("Great, no buffering proxy detected. Bytes received: "+F.length),el(Ie),Ie.M=!0,De(11))}}else dr(this.i,this.l,F,null),qa(this,F);Te==4&&jn(this),this.o&&!this.J&&(Te==4?Zd(this.j,this):(this.o=!1,Cs(this)))}else jy(this.g),d==400&&0<F.indexOf("Unknown SID")?(this.s=3,De(12)):(this.s=0,De(13)),jn(this),ci(this)}}}catch{}finally{}};function Cd(o){return o.g?o.u=="GET"&&o.L!=2&&o.j.Ca:!1}function _y(o,l){var d=o.C,f=l.indexOf(`
`,d);return f==-1?Wa:(d=Number(l.substring(d,f)),isNaN(d)?Td:(f+=1,f+d>l.length?Wa:(l=l.slice(f,f+d),o.C=f+d,l)))}en.prototype.cancel=function(){this.J=!0,jn(this)};function Cs(o){o.S=Date.now()+o.I,Pd(o,o.I)}function Pd(o,l){if(o.B!=null)throw Error("WatchDog timer not null");o.B=li(S(o.ba,o),l)}function Ga(o){o.B&&(u.clearTimeout(o.B),o.B=null)}en.prototype.ba=function(){this.B=null;const o=Date.now();0<=o-this.S?(vy(this.i,this.A),this.L!=2&&(ai(),De(17)),jn(this),this.s=2,ci(this)):Pd(this,this.S-o)};function ci(o){o.j.G==0||o.J||Zd(o.j,o)}function jn(o){Ga(o);var l=o.M;l&&typeof l.ma=="function"&&l.ma(),o.M=null,vd(o.U),o.g&&(l=o.g,o.g=null,l.abort(),l.ma())}function qa(o,l){try{var d=o.j;if(d.G!=0&&(d.g==o||Qa(d.h,o))){if(!o.K&&Qa(d.h,o)&&d.G==3){try{var f=d.Da.g.parse(l)}catch{f=null}if(Array.isArray(f)&&f.length==3){var C=f;if(C[0]==0){e:if(!d.u){if(d.g)if(d.g.F+3e3<o.F)Ms(d),Ls(d);else break e;Za(d),De(18)}}else d.za=C[1],0<d.za-d.T&&37500>C[2]&&d.F&&d.v==0&&!d.C&&(d.C=li(S(d.Za,d),6e3));if(1>=Nd(d.h)&&d.ca){try{d.ca()}catch{}d.ca=void 0}}else bn(d,11)}else if((o.K||d.g==o)&&Ms(d),!m(l))for(C=d.Da.g.parse(l),l=0;l<C.length;l++){let q=C[l];if(d.T=q[0],q=q[1],d.G==2)if(q[0]=="c"){d.K=q[1],d.ia=q[2];const Ie=q[3];Ie!=null&&(d.la=Ie,d.j.info("VER="+d.la));const Te=q[4];Te!=null&&(d.Aa=Te,d.j.info("SVER="+d.Aa));const pr=q[5];pr!=null&&typeof pr=="number"&&0<pr&&(f=1.5*pr,d.L=f,d.j.info("backChannelRequestTimeoutMs_="+f)),f=d;const ut=o.g;if(ut){const Us=ut.g?ut.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Us){var R=f.h;R.g||Us.indexOf("spdy")==-1&&Us.indexOf("quic")==-1&&Us.indexOf("h2")==-1||(R.j=R.l,R.g=new Set,R.h&&(Xa(R,R.h),R.h=null))}if(f.D){const tl=ut.g?ut.g.getResponseHeader("X-HTTP-Session-Id"):null;tl&&(f.ya=tl,ee(f.I,f.D,tl))}}d.G=3,d.l&&d.l.ua(),d.ba&&(d.R=Date.now()-o.F,d.j.info("Handshake RTT: "+d.R+"ms")),f=d;var F=o;if(f.qa=nh(f,f.J?f.ia:null,f.W),F.K){Od(f.h,F);var J=F,ye=f.L;ye&&(J.I=ye),J.B&&(Ga(J),Cs(J)),f.g=F}else Yd(f);0<d.i.length&&Ds(d)}else q[0]!="stop"&&q[0]!="close"||bn(d,7);else d.G==3&&(q[0]=="stop"||q[0]=="close"?q[0]=="stop"?bn(d,7):Ja(d):q[0]!="noop"&&d.l&&d.l.ta(q),d.v=0)}}ai(4)}catch{}}var Ey=class{constructor(o,l){this.g=o,this.map=l}};function Ad(o){this.l=o||10,u.PerformanceNavigationTiming?(o=u.performance.getEntriesByType("navigation"),o=0<o.length&&(o[0].nextHopProtocol=="hq"||o[0].nextHopProtocol=="h2")):o=!!(u.chrome&&u.chrome.loadTimes&&u.chrome.loadTimes()&&u.chrome.loadTimes().wasFetchedViaSpdy),this.j=o?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Rd(o){return o.h?!0:o.g?o.g.size>=o.j:!1}function Nd(o){return o.h?1:o.g?o.g.size:0}function Qa(o,l){return o.h?o.h==l:o.g?o.g.has(l):!1}function Xa(o,l){o.g?o.g.add(l):o.h=l}function Od(o,l){o.h&&o.h==l?o.h=null:o.g&&o.g.has(l)&&o.g.delete(l)}Ad.prototype.cancel=function(){if(this.i=xd(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const o of this.g.values())o.cancel();this.g.clear()}};function xd(o){if(o.h!=null)return o.i.concat(o.h.D);if(o.g!=null&&o.g.size!==0){let l=o.i;for(const d of o.g.values())l=l.concat(d.D);return l}return x(o.i)}function Sy(o){if(o.V&&typeof o.V=="function")return o.V();if(typeof Map<"u"&&o instanceof Map||typeof Set<"u"&&o instanceof Set)return Array.from(o.values());if(typeof o=="string")return o.split("");if(c(o)){for(var l=[],d=o.length,f=0;f<d;f++)l.push(o[f]);return l}l=[],d=0;for(f in o)l[d++]=o[f];return l}function Iy(o){if(o.na&&typeof o.na=="function")return o.na();if(!o.V||typeof o.V!="function"){if(typeof Map<"u"&&o instanceof Map)return Array.from(o.keys());if(!(typeof Set<"u"&&o instanceof Set)){if(c(o)||typeof o=="string"){var l=[];o=o.length;for(var d=0;d<o;d++)l.push(d);return l}l=[],d=0;for(const f in o)l[d++]=f;return l}}}function Ld(o,l){if(o.forEach&&typeof o.forEach=="function")o.forEach(l,void 0);else if(c(o)||typeof o=="string")Array.prototype.forEach.call(o,l,void 0);else for(var d=Iy(o),f=Sy(o),C=f.length,R=0;R<C;R++)l.call(void 0,f[R],d&&d[R],o)}var Dd=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Ty(o,l){if(o){o=o.split("&");for(var d=0;d<o.length;d++){var f=o[d].indexOf("="),C=null;if(0<=f){var R=o[d].substring(0,f);C=o[d].substring(f+1)}else R=o[d];l(R,C?decodeURIComponent(C.replace(/\+/g," ")):"")}}}function Fn(o){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,o instanceof Fn){this.h=o.h,Ps(this,o.j),this.o=o.o,this.g=o.g,As(this,o.s),this.l=o.l;var l=o.i,d=new fi;d.i=l.i,l.g&&(d.g=new Map(l.g),d.h=l.h),Md(this,d),this.m=o.m}else o&&(l=String(o).match(Dd))?(this.h=!1,Ps(this,l[1]||"",!0),this.o=di(l[2]||""),this.g=di(l[3]||"",!0),As(this,l[4]),this.l=di(l[5]||"",!0),Md(this,l[6]||"",!0),this.m=di(l[7]||"")):(this.h=!1,this.i=new fi(null,this.h))}Fn.prototype.toString=function(){var o=[],l=this.j;l&&o.push(hi(l,Ud,!0),":");var d=this.g;return(d||l=="file")&&(o.push("//"),(l=this.o)&&o.push(hi(l,Ud,!0),"@"),o.push(encodeURIComponent(String(d)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),d=this.s,d!=null&&o.push(":",String(d))),(d=this.l)&&(this.g&&d.charAt(0)!="/"&&o.push("/"),o.push(hi(d,d.charAt(0)=="/"?Py:Cy,!0))),(d=this.i.toString())&&o.push("?",d),(d=this.m)&&o.push("#",hi(d,Ry)),o.join("")};function Mt(o){return new Fn(o)}function Ps(o,l,d){o.j=d?di(l,!0):l,o.j&&(o.j=o.j.replace(/:$/,""))}function As(o,l){if(l){if(l=Number(l),isNaN(l)||0>l)throw Error("Bad port number "+l);o.s=l}else o.s=null}function Md(o,l,d){l instanceof fi?(o.i=l,Ny(o.i,o.h)):(d||(l=hi(l,Ay)),o.i=new fi(l,o.h))}function ee(o,l,d){o.i.set(l,d)}function Rs(o){return ee(o,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),o}function di(o,l){return o?l?decodeURI(o.replace(/%25/g,"%2525")):decodeURIComponent(o):""}function hi(o,l,d){return typeof o=="string"?(o=encodeURI(o).replace(l,ky),d&&(o=o.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),o):null}function ky(o){return o=o.charCodeAt(0),"%"+(o>>4&15).toString(16)+(o&15).toString(16)}var Ud=/[#\/\?@]/g,Cy=/[#\?:]/g,Py=/[#\?]/g,Ay=/[#\?@]/g,Ry=/#/g;function fi(o,l){this.h=this.g=null,this.i=o||null,this.j=!!l}function tn(o){o.g||(o.g=new Map,o.h=0,o.i&&Ty(o.i,function(l,d){o.add(decodeURIComponent(l.replace(/\+/g," ")),d)}))}e=fi.prototype,e.add=function(o,l){tn(this),this.i=null,o=hr(this,o);var d=this.g.get(o);return d||this.g.set(o,d=[]),d.push(l),this.h+=1,this};function jd(o,l){tn(o),l=hr(o,l),o.g.has(l)&&(o.i=null,o.h-=o.g.get(l).length,o.g.delete(l))}function Fd(o,l){return tn(o),l=hr(o,l),o.g.has(l)}e.forEach=function(o,l){tn(this),this.g.forEach(function(d,f){d.forEach(function(C){o.call(l,C,f,this)},this)},this)},e.na=function(){tn(this);const o=Array.from(this.g.values()),l=Array.from(this.g.keys()),d=[];for(let f=0;f<l.length;f++){const C=o[f];for(let R=0;R<C.length;R++)d.push(l[f])}return d},e.V=function(o){tn(this);let l=[];if(typeof o=="string")Fd(this,o)&&(l=l.concat(this.g.get(hr(this,o))));else{o=Array.from(this.g.values());for(let d=0;d<o.length;d++)l=l.concat(o[d])}return l},e.set=function(o,l){return tn(this),this.i=null,o=hr(this,o),Fd(this,o)&&(this.h-=this.g.get(o).length),this.g.set(o,[l]),this.h+=1,this},e.get=function(o,l){return o?(o=this.V(o),0<o.length?String(o[0]):l):l};function bd(o,l,d){jd(o,l),0<d.length&&(o.i=null,o.g.set(hr(o,l),x(d)),o.h+=d.length)}e.toString=function(){if(this.i)return this.i;if(!this.g)return"";const o=[],l=Array.from(this.g.keys());for(var d=0;d<l.length;d++){var f=l[d];const R=encodeURIComponent(String(f)),F=this.V(f);for(f=0;f<F.length;f++){var C=R;F[f]!==""&&(C+="="+encodeURIComponent(String(F[f]))),o.push(C)}}return this.i=o.join("&")};function hr(o,l){return l=String(l),o.j&&(l=l.toLowerCase()),l}function Ny(o,l){l&&!o.j&&(tn(o),o.i=null,o.g.forEach(function(d,f){var C=f.toLowerCase();f!=C&&(jd(this,f),bd(this,C,d))},o)),o.j=l}function Oy(o,l){const d=new ui;if(u.Image){const f=new Image;f.onload=N(nn,d,"TestLoadImage: loaded",!0,l,f),f.onerror=N(nn,d,"TestLoadImage: error",!1,l,f),f.onabort=N(nn,d,"TestLoadImage: abort",!1,l,f),f.ontimeout=N(nn,d,"TestLoadImage: timeout",!1,l,f),u.setTimeout(function(){f.ontimeout&&f.ontimeout()},1e4),f.src=o}else l(!1)}function xy(o,l){const d=new ui,f=new AbortController,C=setTimeout(()=>{f.abort(),nn(d,"TestPingServer: timeout",!1,l)},1e4);fetch(o,{signal:f.signal}).then(R=>{clearTimeout(C),R.ok?nn(d,"TestPingServer: ok",!0,l):nn(d,"TestPingServer: server error",!1,l)}).catch(()=>{clearTimeout(C),nn(d,"TestPingServer: error",!1,l)})}function nn(o,l,d,f,C){try{C&&(C.onload=null,C.onerror=null,C.onabort=null,C.ontimeout=null),f(d)}catch{}}function Ly(){this.g=new fy}function Dy(o,l,d){const f=d||"";try{Ld(o,function(C,R){let F=C;h(C)&&(F=Fa(C)),l.push(f+R+"="+encodeURIComponent(F))})}catch(C){throw l.push(f+"type="+encodeURIComponent("_badmap")),C}}function Ns(o){this.l=o.Ub||null,this.j=o.eb||!1}A(Ns,ba),Ns.prototype.g=function(){return new Os(this.l,this.j)},Ns.prototype.i=function(o){return function(){return o}}({});function Os(o,l){Se.call(this),this.D=o,this.o=l,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}A(Os,Se),e=Os.prototype,e.open=function(o,l){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=o,this.A=l,this.readyState=1,gi(this)},e.send=function(o){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const l={headers:this.u,method:this.B,credentials:this.m,cache:void 0};o&&(l.body=o),(this.D||u).fetch(new Request(this.A,l)).then(this.Sa.bind(this),this.ga.bind(this))},e.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,pi(this)),this.readyState=0},e.Sa=function(o){if(this.g&&(this.l=o,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=o.headers,this.readyState=2,gi(this)),this.g&&(this.readyState=3,gi(this),this.g)))if(this.responseType==="arraybuffer")o.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof u.ReadableStream<"u"&&"body"in o){if(this.j=o.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;zd(this)}else o.text().then(this.Ra.bind(this),this.ga.bind(this))};function zd(o){o.j.read().then(o.Pa.bind(o)).catch(o.ga.bind(o))}e.Pa=function(o){if(this.g){if(this.o&&o.value)this.response.push(o.value);else if(!this.o){var l=o.value?o.value:new Uint8Array(0);(l=this.v.decode(l,{stream:!o.done}))&&(this.response=this.responseText+=l)}o.done?pi(this):gi(this),this.readyState==3&&zd(this)}},e.Ra=function(o){this.g&&(this.response=this.responseText=o,pi(this))},e.Qa=function(o){this.g&&(this.response=o,pi(this))},e.ga=function(){this.g&&pi(this)};function pi(o){o.readyState=4,o.l=null,o.j=null,o.v=null,gi(o)}e.setRequestHeader=function(o,l){this.u.append(o,l)},e.getResponseHeader=function(o){return this.h&&this.h.get(o.toLowerCase())||""},e.getAllResponseHeaders=function(){if(!this.h)return"";const o=[],l=this.h.entries();for(var d=l.next();!d.done;)d=d.value,o.push(d[0]+": "+d[1]),d=l.next();return o.join(`\r
`)};function gi(o){o.onreadystatechange&&o.onreadystatechange.call(o)}Object.defineProperty(Os.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(o){this.m=o?"include":"same-origin"}});function $d(o){let l="";return b(o,function(d,f){l+=f,l+=":",l+=d,l+=`\r
`}),l}function Ya(o,l,d){e:{for(f in d){var f=!1;break e}f=!0}f||(d=$d(d),typeof o=="string"?d!=null&&encodeURIComponent(String(d)):ee(o,l,d))}function de(o){Se.call(this),this.headers=new Map,this.o=o||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}A(de,Se);var My=/^https?$/i,Uy=["POST","PUT"];e=de.prototype,e.Ha=function(o){this.J=o},e.ea=function(o,l,d,f){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+o);l=l?l.toUpperCase():"GET",this.D=o,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Ha.g(),this.v=this.o?yd(this.o):yd(Ha),this.g.onreadystatechange=S(this.Ea,this);try{this.B=!0,this.g.open(l,String(o),!0),this.B=!1}catch(R){Bd(this,R);return}if(o=d||"",d=new Map(this.headers),f)if(Object.getPrototypeOf(f)===Object.prototype)for(var C in f)d.set(C,f[C]);else if(typeof f.keys=="function"&&typeof f.get=="function")for(const R of f.keys())d.set(R,f.get(R));else throw Error("Unknown input type for opt_headers: "+String(f));f=Array.from(d.keys()).find(R=>R.toLowerCase()=="content-type"),C=u.FormData&&o instanceof u.FormData,!(0<=Array.prototype.indexOf.call(Uy,l,void 0))||f||C||d.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[R,F]of d)this.g.setRequestHeader(R,F);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Wd(this),this.u=!0,this.g.send(o),this.u=!1}catch(R){Bd(this,R)}};function Bd(o,l){o.h=!1,o.g&&(o.j=!0,o.g.abort(),o.j=!1),o.l=l,o.m=5,Vd(o),xs(o)}function Vd(o){o.A||(o.A=!0,Le(o,"complete"),Le(o,"error"))}e.abort=function(o){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=o||7,Le(this,"complete"),Le(this,"abort"),xs(this))},e.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),xs(this,!0)),de.aa.N.call(this)},e.Ea=function(){this.s||(this.B||this.u||this.j?Hd(this):this.bb())},e.bb=function(){Hd(this)};function Hd(o){if(o.h&&typeof a<"u"&&(!o.v[1]||Ut(o)!=4||o.Z()!=2)){if(o.u&&Ut(o)==4)pd(o.Ea,0,o);else if(Le(o,"readystatechange"),Ut(o)==4){o.h=!1;try{const F=o.Z();e:switch(F){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var l=!0;break e;default:l=!1}var d;if(!(d=l)){var f;if(f=F===0){var C=String(o.D).match(Dd)[1]||null;!C&&u.self&&u.self.location&&(C=u.self.location.protocol.slice(0,-1)),f=!My.test(C?C.toLowerCase():"")}d=f}if(d)Le(o,"complete"),Le(o,"success");else{o.m=6;try{var R=2<Ut(o)?o.g.statusText:""}catch{R=""}o.l=R+" ["+o.Z()+"]",Vd(o)}}finally{xs(o)}}}}function xs(o,l){if(o.g){Wd(o);const d=o.g,f=o.v[0]?()=>{}:null;o.g=null,o.v=null,l||Le(o,"ready");try{d.onreadystatechange=f}catch{}}}function Wd(o){o.I&&(u.clearTimeout(o.I),o.I=null)}e.isActive=function(){return!!this.g};function Ut(o){return o.g?o.g.readyState:0}e.Z=function(){try{return 2<Ut(this)?this.g.status:-1}catch{return-1}},e.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},e.Oa=function(o){if(this.g){var l=this.g.responseText;return o&&l.indexOf(o)==0&&(l=l.substring(o.length)),hy(l)}};function Kd(o){try{if(!o.g)return null;if("response"in o.g)return o.g.response;switch(o.H){case"":case"text":return o.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in o.g)return o.g.mozResponseArrayBuffer}return null}catch{return null}}function jy(o){const l={};o=(o.g&&2<=Ut(o)&&o.g.getAllResponseHeaders()||"").split(`\r
`);for(let f=0;f<o.length;f++){if(m(o[f]))continue;var d=k(o[f]);const C=d[0];if(d=d[1],typeof d!="string")continue;d=d.trim();const R=l[C]||[];l[C]=R,R.push(d)}y(l,function(f){return f.join(", ")})}e.Ba=function(){return this.m},e.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function mi(o,l,d){return d&&d.internalChannelParams&&d.internalChannelParams[o]||l}function Gd(o){this.Aa=0,this.i=[],this.j=new ui,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=mi("failFast",!1,o),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=mi("baseRetryDelayMs",5e3,o),this.cb=mi("retryDelaySeedMs",1e4,o),this.Wa=mi("forwardChannelMaxRetries",2,o),this.wa=mi("forwardChannelRequestTimeoutMs",2e4,o),this.pa=o&&o.xmlHttpFactory||void 0,this.Xa=o&&o.Tb||void 0,this.Ca=o&&o.useFetchStreams||!1,this.L=void 0,this.J=o&&o.supportsCrossDomainXhr||!1,this.K="",this.h=new Ad(o&&o.concurrentRequestLimit),this.Da=new Ly,this.P=o&&o.fastHandshake||!1,this.O=o&&o.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=o&&o.Rb||!1,o&&o.xa&&this.j.xa(),o&&o.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&o&&o.detectBufferingProxy||!1,this.ja=void 0,o&&o.longPollingTimeout&&0<o.longPollingTimeout&&(this.ja=o.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}e=Gd.prototype,e.la=8,e.G=1,e.connect=function(o,l,d,f){De(0),this.W=o,this.H=l||{},d&&f!==void 0&&(this.H.OSID=d,this.H.OAID=f),this.F=this.X,this.I=nh(this,null,this.W),Ds(this)};function Ja(o){if(qd(o),o.G==3){var l=o.U++,d=Mt(o.I);if(ee(d,"SID",o.K),ee(d,"RID",l),ee(d,"TYPE","terminate"),vi(o,d),l=new en(o,o.j,l),l.L=2,l.v=Rs(Mt(d)),d=!1,u.navigator&&u.navigator.sendBeacon)try{d=u.navigator.sendBeacon(l.v.toString(),"")}catch{}!d&&u.Image&&(new Image().src=l.v,d=!0),d||(l.g=rh(l.j,null),l.g.ea(l.v)),l.F=Date.now(),Cs(l)}th(o)}function Ls(o){o.g&&(el(o),o.g.cancel(),o.g=null)}function qd(o){Ls(o),o.u&&(u.clearTimeout(o.u),o.u=null),Ms(o),o.h.cancel(),o.s&&(typeof o.s=="number"&&u.clearTimeout(o.s),o.s=null)}function Ds(o){if(!Rd(o.h)&&!o.s){o.s=!0;var l=o.Ga;Nt||H(),z||(Nt(),z=!0),V.add(l,o),o.B=0}}function Fy(o,l){return Nd(o.h)>=o.h.j-(o.s?1:0)?!1:o.s?(o.i=l.D.concat(o.i),!0):o.G==1||o.G==2||o.B>=(o.Va?0:o.Wa)?!1:(o.s=li(S(o.Ga,o,l),eh(o,o.B)),o.B++,!0)}e.Ga=function(o){if(this.s)if(this.s=null,this.G==1){if(!o){this.U=Math.floor(1e5*Math.random()),o=this.U++;const C=new en(this,this.j,o);let R=this.o;if(this.S&&(R?(R=p(R),_(R,this.S)):R=this.S),this.m!==null||this.O||(C.H=R,R=null),this.P)e:{for(var l=0,d=0;d<this.i.length;d++){t:{var f=this.i[d];if("__data__"in f.map&&(f=f.map.__data__,typeof f=="string")){f=f.length;break t}f=void 0}if(f===void 0)break;if(l+=f,4096<l){l=d;break e}if(l===4096||d===this.i.length-1){l=d+1;break e}}l=1e3}else l=1e3;l=Xd(this,C,l),d=Mt(this.I),ee(d,"RID",o),ee(d,"CVER",22),this.D&&ee(d,"X-HTTP-Session-Id",this.D),vi(this,d),R&&(this.O?l="headers="+encodeURIComponent(String($d(R)))+"&"+l:this.m&&Ya(d,this.m,R)),Xa(this.h,C),this.Ua&&ee(d,"TYPE","init"),this.P?(ee(d,"$req",l),ee(d,"SID","null"),C.T=!0,Ka(C,d,null)):Ka(C,d,l),this.G=2}}else this.G==3&&(o?Qd(this,o):this.i.length==0||Rd(this.h)||Qd(this))};function Qd(o,l){var d;l?d=l.l:d=o.U++;const f=Mt(o.I);ee(f,"SID",o.K),ee(f,"RID",d),ee(f,"AID",o.T),vi(o,f),o.m&&o.o&&Ya(f,o.m,o.o),d=new en(o,o.j,d,o.B+1),o.m===null&&(d.H=o.o),l&&(o.i=l.D.concat(o.i)),l=Xd(o,d,1e3),d.I=Math.round(.5*o.wa)+Math.round(.5*o.wa*Math.random()),Xa(o.h,d),Ka(d,f,l)}function vi(o,l){o.H&&b(o.H,function(d,f){ee(l,f,d)}),o.l&&Ld({},function(d,f){ee(l,f,d)})}function Xd(o,l,d){d=Math.min(o.i.length,d);var f=o.l?S(o.l.Na,o.l,o):null;e:{var C=o.i;let R=-1;for(;;){const F=["count="+d];R==-1?0<d?(R=C[0].g,F.push("ofs="+R)):R=0:F.push("ofs="+R);let J=!0;for(let ye=0;ye<d;ye++){let q=C[ye].g;const Ie=C[ye].map;if(q-=R,0>q)R=Math.max(0,C[ye].g-100),J=!1;else try{Dy(Ie,F,"req"+q+"_")}catch{f&&f(Ie)}}if(J){f=F.join("&");break e}}}return o=o.i.splice(0,d),l.D=o,f}function Yd(o){if(!o.g&&!o.u){o.Y=1;var l=o.Fa;Nt||H(),z||(Nt(),z=!0),V.add(l,o),o.v=0}}function Za(o){return o.g||o.u||3<=o.v?!1:(o.Y++,o.u=li(S(o.Fa,o),eh(o,o.v)),o.v++,!0)}e.Fa=function(){if(this.u=null,Jd(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var o=2*this.R;this.j.info("BP detection timer enabled: "+o),this.A=li(S(this.ab,this),o)}},e.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,De(10),Ls(this),Jd(this))};function el(o){o.A!=null&&(u.clearTimeout(o.A),o.A=null)}function Jd(o){o.g=new en(o,o.j,"rpc",o.Y),o.m===null&&(o.g.H=o.o),o.g.O=0;var l=Mt(o.qa);ee(l,"RID","rpc"),ee(l,"SID",o.K),ee(l,"AID",o.T),ee(l,"CI",o.F?"0":"1"),!o.F&&o.ja&&ee(l,"TO",o.ja),ee(l,"TYPE","xmlhttp"),vi(o,l),o.m&&o.o&&Ya(l,o.m,o.o),o.L&&(o.g.I=o.L);var d=o.g;o=o.ia,d.L=1,d.v=Rs(Mt(l)),d.m=null,d.P=!0,kd(d,o)}e.Za=function(){this.C!=null&&(this.C=null,Ls(this),Za(this),De(19))};function Ms(o){o.C!=null&&(u.clearTimeout(o.C),o.C=null)}function Zd(o,l){var d=null;if(o.g==l){Ms(o),el(o),o.g=null;var f=2}else if(Qa(o.h,l))d=l.D,Od(o.h,l),f=1;else return;if(o.G!=0){if(l.o)if(f==1){d=l.m?l.m.length:0,l=Date.now()-l.F;var C=o.B;f=Ba(),Le(f,new Sd(f,d)),Ds(o)}else Yd(o);else if(C=l.s,C==3||C==0&&0<l.X||!(f==1&&Fy(o,l)||f==2&&Za(o)))switch(d&&0<d.length&&(l=o.h,l.i=l.i.concat(d)),C){case 1:bn(o,5);break;case 4:bn(o,10);break;case 3:bn(o,6);break;default:bn(o,2)}}}function eh(o,l){let d=o.Ta+Math.floor(Math.random()*o.cb);return o.isActive()||(d*=2),d*l}function bn(o,l){if(o.j.info("Error code "+l),l==2){var d=S(o.fb,o),f=o.Xa;const C=!f;f=new Fn(f||"//www.google.com/images/cleardot.gif"),u.location&&u.location.protocol=="http"||Ps(f,"https"),Rs(f),C?Oy(f.toString(),d):xy(f.toString(),d)}else De(2);o.G=0,o.l&&o.l.sa(l),th(o),qd(o)}e.fb=function(o){o?(this.j.info("Successfully pinged google.com"),De(2)):(this.j.info("Failed to ping google.com"),De(1))};function th(o){if(o.G=0,o.ka=[],o.l){const l=xd(o.h);(l.length!=0||o.i.length!=0)&&(L(o.ka,l),L(o.ka,o.i),o.h.i.length=0,x(o.i),o.i.length=0),o.l.ra()}}function nh(o,l,d){var f=d instanceof Fn?Mt(d):new Fn(d);if(f.g!="")l&&(f.g=l+"."+f.g),As(f,f.s);else{var C=u.location;f=C.protocol,l=l?l+"."+C.hostname:C.hostname,C=+C.port;var R=new Fn(null);f&&Ps(R,f),l&&(R.g=l),C&&As(R,C),d&&(R.l=d),f=R}return d=o.D,l=o.ya,d&&l&&ee(f,d,l),ee(f,"VER",o.la),vi(o,f),f}function rh(o,l,d){if(l&&!o.J)throw Error("Can't create secondary domain capable XhrIo object.");return l=o.Ca&&!o.pa?new de(new Ns({eb:d})):new de(o.pa),l.Ha(o.J),l}e.isActive=function(){return!!this.l&&this.l.isActive(this)};function ih(){}e=ih.prototype,e.ua=function(){},e.ta=function(){},e.sa=function(){},e.ra=function(){},e.isActive=function(){return!0},e.Na=function(){};function et(o,l){Se.call(this),this.g=new Gd(l),this.l=o,this.h=l&&l.messageUrlParams||null,o=l&&l.messageHeaders||null,l&&l.clientProtocolHeaderRequired&&(o?o["X-Client-Protocol"]="webchannel":o={"X-Client-Protocol":"webchannel"}),this.g.o=o,o=l&&l.initMessageHeaders||null,l&&l.messageContentType&&(o?o["X-WebChannel-Content-Type"]=l.messageContentType:o={"X-WebChannel-Content-Type":l.messageContentType}),l&&l.va&&(o?o["X-WebChannel-Client-Profile"]=l.va:o={"X-WebChannel-Client-Profile":l.va}),this.g.S=o,(o=l&&l.Sb)&&!m(o)&&(this.g.m=o),this.v=l&&l.supportsCrossDomainXhr||!1,this.u=l&&l.sendRawJson||!1,(l=l&&l.httpSessionIdParam)&&!m(l)&&(this.g.D=l,o=this.h,o!==null&&l in o&&(o=this.h,l in o&&delete o[l])),this.j=new fr(this)}A(et,Se),et.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},et.prototype.close=function(){Ja(this.g)},et.prototype.o=function(o){var l=this.g;if(typeof o=="string"){var d={};d.__data__=o,o=d}else this.u&&(d={},d.__data__=Fa(o),o=d);l.i.push(new Ey(l.Ya++,o)),l.G==3&&Ds(l)},et.prototype.N=function(){this.g.l=null,delete this.j,Ja(this.g),delete this.g,et.aa.N.call(this)};function sh(o){za.call(this),o.__headers__&&(this.headers=o.__headers__,this.statusCode=o.__status__,delete o.__headers__,delete o.__status__);var l=o.__sm__;if(l){e:{for(const d in l){o=d;break e}o=void 0}(this.i=o)&&(o=this.i,l=l!==null&&o in l?l[o]:void 0),this.data=l}else this.data=o}A(sh,za);function oh(){$a.call(this),this.status=1}A(oh,$a);function fr(o){this.g=o}A(fr,ih),fr.prototype.ua=function(){Le(this.g,"a")},fr.prototype.ta=function(o){Le(this.g,new sh(o))},fr.prototype.sa=function(o){Le(this.g,new oh)},fr.prototype.ra=function(){Le(this.g,"b")},et.prototype.send=et.prototype.o,et.prototype.open=et.prototype.m,et.prototype.close=et.prototype.close,Va.NO_ERROR=0,Va.TIMEOUT=8,Va.HTTP_ERROR=6,wy.COMPLETE="complete",py.EventType=oi,oi.OPEN="a",oi.CLOSE="b",oi.ERROR="c",oi.MESSAGE="d",Se.prototype.listen=Se.prototype.K,de.prototype.listenOnce=de.prototype.L,de.prototype.getLastError=de.prototype.Ka,de.prototype.getLastErrorCode=de.prototype.Ba,de.prototype.getStatus=de.prototype.Z,de.prototype.getResponseJson=de.prototype.Oa,de.prototype.getResponseText=de.prototype.oa,de.prototype.send=de.prototype.ea,de.prototype.setWithCredentials=de.prototype.Ha}).apply(typeof to<"u"?to:typeof self<"u"?self:typeof window<"u"?window:{});const Vf="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pe{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}Pe.UNAUTHENTICATED=new Pe(null),Pe.GOOGLE_CREDENTIALS=new Pe("google-credentials-uid"),Pe.FIRST_PARTY=new Pe("first-party-uid"),Pe.MOCK_USER=new Pe("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let vs="10.12.5";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qr=new Ia("@firebase/firestore");function Ge(e,...t){if(qr.logLevel<=Q.DEBUG){const n=t.map(Jc);qr.debug(`Firestore (${vs}): ${e}`,...n)}}function Yc(e,...t){if(qr.logLevel<=Q.ERROR){const n=t.map(Jc);qr.error(`Firestore (${vs}): ${e}`,...n)}}function wI(e,...t){if(qr.logLevel<=Q.WARN){const n=t.map(Jc);qr.warn(`Firestore (${vs}): ${e}`,...n)}}function Jc(e){if(typeof e=="string")return e;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(e)}catch{return e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zc(e="Unexpected state"){const t=`FIRESTORE (${vs}) INTERNAL ASSERTION FAILED: `+e;throw Yc(t),new Error(t)}function $u(e,t){e||Zc()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Re={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class Ne extends wt{constructor(t,n){super(t,n),this.code=t,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ur{constructor(){this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sv{constructor(t,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class _I{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,n){t.enqueueRetryable(()=>n(Pe.UNAUTHENTICATED))}shutdown(){}}class EI{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,n){this.changeListener=n,t.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class SI{constructor(t){this.t=t,this.currentUser=Pe.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,n){let r=this.i;const i=c=>this.i!==r?(r=this.i,n(c)):Promise.resolve();let s=new Ur;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new Ur,t.enqueueRetryable(()=>i(this.currentUser))};const a=()=>{const c=s;t.enqueueRetryable(async()=>{await c.promise,await i(this.currentUser)})},u=c=>{Ge("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),a()};this.t.onInit(c=>u(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?u(c):(Ge("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new Ur)}},0),a()}getToken(){const t=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==t?(Ge("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?($u(typeof r.accessToken=="string"),new Sv(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return $u(t===null||typeof t=="string"),new Pe(t)}}class II{constructor(t,n,r){this.l=t,this.h=n,this.P=r,this.type="FirstParty",this.user=Pe.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const t=this.T();return t&&this.I.set("Authorization",t),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class TI{constructor(t,n,r){this.l=t,this.h=n,this.P=r}getToken(){return Promise.resolve(new II(this.l,this.h,this.P))}start(t,n){t.enqueueRetryable(()=>n(Pe.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class kI{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class CI{constructor(t){this.A=t,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(t,n){const r=s=>{s.error!=null&&Ge("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const a=s.token!==this.R;return this.R=s.token,Ge("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?n(s.token):Promise.resolve()};this.o=s=>{t.enqueueRetryable(()=>r(s))};const i=s=>{Ge("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):Ge("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(n=>n?($u(typeof n.token=="string"),this.R=n.token,new kI(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function PI(e){const t=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(e);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(n);else for(let r=0;r<e;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AI{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/t.length)*t.length;let r="";for(;r.length<20;){const i=PI(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=t.charAt(i[s]%t.length))}return r}}function Iv(e){return e.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RI{constructor(t,n,r,i,s,a,u,c,h){this.databaseId=t,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=a,this.autoDetectLongPolling=u,this.longPollingOptions=c,this.useFetchStreams=h}}class Jo{constructor(t,n){this.projectId=t,this.database=n||"(default)"}static empty(){return new Jo("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(t){return t instanceof Jo&&t.projectId===this.projectId&&t.database===this.database}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Hf,K;(K=Hf||(Hf={}))[K.OK=0]="OK",K[K.CANCELLED=1]="CANCELLED",K[K.UNKNOWN=2]="UNKNOWN",K[K.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",K[K.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",K[K.NOT_FOUND=5]="NOT_FOUND",K[K.ALREADY_EXISTS=6]="ALREADY_EXISTS",K[K.PERMISSION_DENIED=7]="PERMISSION_DENIED",K[K.UNAUTHENTICATED=16]="UNAUTHENTICATED",K[K.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",K[K.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",K[K.ABORTED=10]="ABORTED",K[K.OUT_OF_RANGE=11]="OUT_OF_RANGE",K[K.UNIMPLEMENTED=12]="UNIMPLEMENTED",K[K.INTERNAL=13]="INTERNAL",K[K.UNAVAILABLE=14]="UNAVAILABLE",K[K.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */new Ev([4294967295,4294967295],0);function jl(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NI{constructor(t,n,r=1e3,i=1.5,s=6e4){this.ai=t,this.timerId=n,this.Bo=r,this.ko=i,this.qo=s,this.Qo=0,this.Ko=null,this.$o=Date.now(),this.reset()}reset(){this.Qo=0}Uo(){this.Qo=this.qo}Wo(t){this.cancel();const n=Math.floor(this.Qo+this.Go()),r=Math.max(0,Date.now()-this.$o),i=Math.max(0,n-r);i>0&&Ge("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Qo} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.Ko=this.ai.enqueueAfterDelay(this.timerId,i,()=>(this.$o=Date.now(),t())),this.Qo*=this.ko,this.Qo<this.Bo&&(this.Qo=this.Bo),this.Qo>this.qo&&(this.Qo=this.qo)}zo(){this.Ko!==null&&(this.Ko.skipDelay(),this.Ko=null)}cancel(){this.Ko!==null&&(this.Ko.cancel(),this.Ko=null)}Go(){return(Math.random()-.5)*this.Qo}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ed{constructor(t,n,r,i,s){this.asyncQueue=t,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new Ur,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(a=>{})}get promise(){return this.deferred.promise}static createAndSchedule(t,n,r,i,s){const a=Date.now()+r,u=new ed(t,n,a,i,s);return u.start(r),u}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new Ne(Re.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function OI(e,t){if(Yc("AsyncQueue",`${t}: ${e}`),Iv(e))return new Ne(Re.UNAVAILABLE,`${t}: ${e}`);throw e}var Wf,Kf;(Kf=Wf||(Wf={})).X_="default",Kf.Cache="cache";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xI{constructor(t,n,r,i){this.authCredentials=t,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=Pe.UNAUTHENTICATED,this.clientId=AI.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async s=>{Ge("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>(Ge("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new Ne(Re.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new Ur;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(n){const r=OI(n,"Failed to shutdown persistence");t.reject(r)}}),t.promise}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tv(e){const t={};return e.timeoutSeconds!==void 0&&(t.timeoutSeconds=e.timeoutSeconds),t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gf=new Map;function LI(e,t,n,r){if(t===!0&&r===!0)throw new Ne(Re.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)}function DI(e){if(e===void 0)return"undefined";if(e===null)return"null";if(typeof e=="string")return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if(typeof e=="number"||typeof e=="boolean")return""+e;if(typeof e=="object"){if(e instanceof Array)return"an array";{const t=function(r){return r.constructor?r.constructor.name:null}(e);return t?`a custom ${t} object`:"an object"}}return typeof e=="function"?"a function":Zc()}function MI(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new Ne(Re.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=DI(e);throw new Ne(Re.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qf{constructor(t){var n,r;if(t.host===void 0){if(t.ssl!==void 0)throw new Ne(Re.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=(n=t.ssl)===null||n===void 0||n;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<1048576)throw new Ne(Re.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}LI("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Tv((r=t.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new Ne(Re.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new Ne(Re.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new Ne(Re.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class kv{constructor(t,n,r,i){this._authCredentials=t,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new qf({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new Ne(Re.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(t){if(this._settingsFrozen)throw new Ne(Re.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new qf(t),t.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new _I;switch(r.type){case"firstParty":return new TI(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new Ne(Re.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=Gf.get(n);r&&(Ge("ComponentProvider","Removing Datastore"),Gf.delete(n),r.terminate())}(this),Promise.resolve()}}function UI(e,t,n,r={}){var i;const s=(e=MI(e,kv))._getSettings(),a=`${t}:${n}`;if(s.host!=="firestore.googleapis.com"&&s.host!==a&&wI("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),e._setSettings(Object.assign(Object.assign({},s),{host:a,ssl:!1})),r.mockUserToken){let u,c;if(typeof r.mockUserToken=="string")u=r.mockUserToken,c=Pe.MOCK_USER;else{u=O1(r.mockUserToken,(i=e._app)===null||i===void 0?void 0:i.options.projectId);const h=r.mockUserToken.sub||r.mockUserToken.user_id;if(!h)throw new Ne(Re.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");c=new Pe(h)}e._authCredentials=new EI(new Sv(u,c))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jI{constructor(){this._u=Promise.resolve(),this.au=[],this.uu=!1,this.cu=[],this.lu=null,this.hu=!1,this.Pu=!1,this.Iu=[],this.e_=new NI(this,"async_queue_retry"),this.Tu=()=>{const n=jl();n&&Ge("AsyncQueue","Visibility state changed to "+n.visibilityState),this.e_.zo()};const t=jl();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.Tu)}get isShuttingDown(){return this.uu}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.Eu(),this.du(t)}enterRestrictedMode(t){if(!this.uu){this.uu=!0,this.Pu=t||!1;const n=jl();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Tu)}}enqueue(t){if(this.Eu(),this.uu)return new Promise(()=>{});const n=new Ur;return this.du(()=>this.uu&&this.Pu?Promise.resolve():(t().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.au.push(t),this.Au()))}async Au(){if(this.au.length!==0){try{await this.au[0](),this.au.shift(),this.e_.reset()}catch(t){if(!Iv(t))throw t;Ge("AsyncQueue","Operation failed with retryable error: "+t)}this.au.length>0&&this.e_.Wo(()=>this.Au())}}du(t){const n=this._u.then(()=>(this.hu=!0,t().catch(r=>{this.lu=r,this.hu=!1;const i=function(a){let u=a.message||"";return a.stack&&(u=a.stack.includes(a.message)?a.stack:a.message+`
`+a.stack),u}(r);throw Yc("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.hu=!1,r))));return this._u=n,n}enqueueAfterDelay(t,n,r){this.Eu(),this.Iu.indexOf(t)>-1&&(n=0);const i=ed.createAndSchedule(this,t,n,r,s=>this.Ru(s));return this.cu.push(i),i}Eu(){this.lu&&Zc()}verifyOperationInProgress(){}async Vu(){let t;do t=this._u,await t;while(t!==this._u)}mu(t){for(const n of this.cu)if(n.timerId===t)return!0;return!1}fu(t){return this.Vu().then(()=>{this.cu.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.cu)if(n.skipDelay(),t!=="all"&&n.timerId===t)break;return this.Vu()})}gu(t){this.Iu.push(t)}Ru(t){const n=this.cu.indexOf(t);this.cu.splice(n,1)}}class FI extends kv{constructor(t,n,r,i){super(t,n,r,i),this.type="firestore",this._queue=function(){return new jI}(),this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||zI(this),this._firestoreClient.terminate()}}function bI(e,t){const n=typeof e=="object"?e:Wc(),r=typeof e=="string"?e:"(default)",i=lr(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=R1("firestore");s&&UI(i,...s)}return i}function zI(e){var t,n,r;const i=e._freezeSettings(),s=function(u,c,h,w){return new RI(u,c,h,w.host,w.ssl,w.experimentalForceLongPolling,w.experimentalAutoDetectLongPolling,Tv(w.experimentalLongPollingOptions),w.useFetchStreams)}(e._databaseId,((t=e._app)===null||t===void 0?void 0:t.options.appId)||"",e._persistenceKey,i);e._firestoreClient=new xI(e._authCredentials,e._appCheckCredentials,e._queue,s),!((n=i.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(e._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.localCache.kind,_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider})}(function(t,n=!0){(function(i){vs=i})(ni),Rt(new vt("firestore",(r,{instanceIdentifier:i,options:s})=>{const a=r.getProvider("app").getImmediate(),u=new FI(new SI(r.getProvider("auth-internal")),new CI(r.getProvider("app-check-internal")),function(h,w){if(!Object.prototype.hasOwnProperty.apply(h.options,["projectId"]))throw new Ne(Re.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Jo(h.options.projectId,w)}(a,i),a);return s=Object.assign({useFetchStreams:n},s),u._setSettings(s),u},"PUBLIC").setMultipleInstances(!0)),st(Vf,"4.6.5",t),st(Vf,"4.6.5","esm2017")})();const $I={apiKey:"AIzaSyCoeFQCEkHjz1cioB8GqpRfgvfyqGZMMyE",authDomain:"nomadelide-mi.firebaseapp.com",projectId:"nomadelide-mi",storageBucket:"nomadelide-mi.appspot.com",messagingSenderId:"877452353809",appId:"1:877452353809:web:e866bda9e55985a66facb0",measurementId:"G-51VE8SHWR1"},Cv=Xm($I);gI(Cv);const BI=bI(Cv);function td(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n}function Pv(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const VI=Pv,Av=new ar("auth","Firebase",Pv());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zo=new Ia("@firebase/auth");function HI(e,...t){Zo.logLevel<=Q.WARN&&Zo.warn(`Auth (${ni}): ${e}`,...t)}function mo(e,...t){Zo.logLevel<=Q.ERROR&&Zo.error(`Auth (${ni}): ${e}`,...t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yt(e,...t){throw nd(e,...t)}function Pt(e,...t){return nd(e,...t)}function Rv(e,t,n){const r=Object.assign(Object.assign({},VI()),{[t]:n});return new ar("auth","Firebase",r).create(t,{appName:e.name})}function Wt(e){return Rv(e,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function nd(e,...t){if(typeof e!="string"){const n=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=e.name),e._errorFactory.create(n,...r)}return Av.create(e,...t)}function B(e,t,...n){if(!e)throw nd(t,...n)}function $t(e){const t="INTERNAL ASSERTION FAILED: "+e;throw mo(t),new Error(t)}function Xt(e,t){e||$t(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bu(){var e;return typeof self<"u"&&((e=self.location)===null||e===void 0?void 0:e.href)||""}function WI(){return Qf()==="http:"||Qf()==="https:"}function Qf(){var e;return typeof self<"u"&&((e=self.location)===null||e===void 0?void 0:e.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function KI(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(WI()||Hm()||"connection"in navigator)?navigator.onLine:!0}function GI(){if(typeof navigator>"u")return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ys{constructor(t,n){this.shortDelay=t,this.longDelay=n,Xt(n>t,"Short delay should be less than long delay!"),this.isMobile=x1()||L1()}get(){return KI()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rd(e,t){Xt(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nv{static initialize(t,n,r){this.fetchImpl=t,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;$t("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;$t("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;$t("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qI={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QI=new ys(3e4,6e4);function Mn(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function Zt(e,t,n,r,i={}){return Ov(e,i,async()=>{let s={},a={};r&&(t==="GET"?a=r:s={body:JSON.stringify(r)});const u=ms(Object.assign({key:e.config.apiKey},a)).slice(1),c=await e._getAdditionalHeaders();return c["Content-Type"]="application/json",e.languageCode&&(c["X-Firebase-Locale"]=e.languageCode),Nv.fetch()(xv(e,e.config.apiHost,n,u),Object.assign({method:t,headers:c,referrerPolicy:"no-referrer"},s))})}async function Ov(e,t,n){e._canInitEmulator=!1;const r=Object.assign(Object.assign({},qI),t);try{const i=new YI(e),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const a=await s.json();if("needConfirmation"in a)throw no(e,"account-exists-with-different-credential",a);if(s.ok&&!("errorMessage"in a))return a;{const u=s.ok?a.errorMessage:a.error.message,[c,h]=u.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw no(e,"credential-already-in-use",a);if(c==="EMAIL_EXISTS")throw no(e,"email-already-in-use",a);if(c==="USER_DISABLED")throw no(e,"user-disabled",a);const w=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(h)throw Rv(e,w,h);yt(e,w)}}catch(i){if(i instanceof wt)throw i;yt(e,"network-request-failed",{message:String(i)})}}async function ws(e,t,n,r,i={}){const s=await Zt(e,t,n,r,i);return"mfaPendingCredential"in s&&yt(e,"multi-factor-auth-required",{_serverResponse:s}),s}function xv(e,t,n,r){const i=`${t}${n}?${r}`;return e.config.emulator?rd(e.config,i):`${e.config.apiScheme}://${i}`}function XI(e){switch(e){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class YI{constructor(t){this.auth=t,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Pt(this.auth,"network-request-failed")),QI.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function no(e,t,n){const r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=Pt(e,t,r);return i.customData._tokenResponse=n,i}function Xf(e){return e!==void 0&&e.enterprise!==void 0}class JI{constructor(t){if(this.siteKey="",this.recaptchaEnforcementState=[],t.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=t.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=t.recaptchaEnforcementState}getProviderEnforcementState(t){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===t)return XI(n.enforcementState);return null}isProviderEnabled(t){return this.getProviderEnforcementState(t)==="ENFORCE"||this.getProviderEnforcementState(t)==="AUDIT"}}async function ZI(e,t){return Zt(e,"GET","/v2/recaptchaConfig",Mn(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function eT(e,t){return Zt(e,"POST","/v1/accounts:delete",t)}async function Lv(e,t){return Zt(e,"POST","/v1/accounts:lookup",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bi(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch{}}async function tT(e,t=!1){const n=lt(e),r=await n.getIdToken(t),i=id(r);B(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,a=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Bi(Fl(i.auth_time)),issuedAtTime:Bi(Fl(i.iat)),expirationTime:Bi(Fl(i.exp)),signInProvider:a||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Fl(e){return Number(e)*1e3}function id(e){const[t,n,r]=e.split(".");if(t===void 0||n===void 0||r===void 0)return mo("JWT malformed, contained fewer than 3 sections"),null;try{const i=zm(n);return i?JSON.parse(i):(mo("Failed to decode base64 JWT payload"),null)}catch(i){return mo("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function Yf(e){const t=id(e);return B(t,"internal-error"),B(typeof t.exp<"u","internal-error"),B(typeof t.iat<"u","internal-error"),Number(t.exp)-Number(t.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Qr(e,t,n=!1){if(n)return t;try{return await t}catch(r){throw r instanceof wt&&nT(r)&&e.auth.currentUser===e&&await e.auth.signOut(),r}}function nT({code:e}){return e==="auth/user-disabled"||e==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rT{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(t){var n;if(t){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(t=!1){if(!this.isRunning)return;const n=this.getInterval(t);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){(t==null?void 0:t.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vu{constructor(t,n){this.createdAt=t,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Bi(this.lastLoginAt),this.creationTime=Bi(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ea(e){var t;const n=e.auth,r=await e.getIdToken(),i=await Qr(e,Lv(n,{idToken:r}));B(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];e._notifyReloadListener(s);const a=!((t=s.providerUserInfo)===null||t===void 0)&&t.length?Dv(s.providerUserInfo):[],u=sT(e.providerData,a),c=e.isAnonymous,h=!(e.email&&s.passwordHash)&&!(u!=null&&u.length),w=c?h:!1,g={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:u,metadata:new Vu(s.createdAt,s.lastLoginAt),isAnonymous:w};Object.assign(e,g)}async function iT(e){const t=lt(e);await ea(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function sT(e,t){return[...e.filter(r=>!t.some(i=>i.providerId===r.providerId)),...t]}function Dv(e){return e.map(t=>{var{providerId:n}=t,r=td(t,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function oT(e,t){const n=await Ov(e,{},async()=>{const r=ms({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:i,apiKey:s}=e.config,a=xv(e,i,"/v1/token",`key=${s}`),u=await e._getAdditionalHeaders();return u["Content-Type"]="application/x-www-form-urlencoded",Nv.fetch()(a,{method:"POST",headers:u,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function aT(e,t){return Zt(e,"POST","/v2/accounts:revokeToken",Mn(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jr{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){B(t.idToken,"internal-error"),B(typeof t.idToken<"u","internal-error"),B(typeof t.refreshToken<"u","internal-error");const n="expiresIn"in t&&typeof t.expiresIn<"u"?Number(t.expiresIn):Yf(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,n)}updateFromIdToken(t){B(t.length!==0,"internal-error");const n=Yf(t);this.updateTokensAndExpiration(t,null,n)}async getToken(t,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(B(this.refreshToken,t,"user-token-expired"),this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(t,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await oT(t,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(t,n,r){this.refreshToken=n||null,this.accessToken=t||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(t,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,a=new jr;return r&&(B(typeof r=="string","internal-error",{appName:t}),a.refreshToken=r),i&&(B(typeof i=="string","internal-error",{appName:t}),a.accessToken=i),s&&(B(typeof s=="number","internal-error",{appName:t}),a.expirationTime=s),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new jr,this.toJSON())}_performRefresh(){return $t("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function on(e,t){B(typeof e=="string"||typeof e>"u","internal-error",{appName:t})}class Bt{constructor(t){var{uid:n,auth:r,stsTokenManager:i}=t,s=td(t,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new rT(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Vu(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(t){const n=await Qr(this,this.stsTokenManager.getToken(this.auth,t));return B(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(t){return tT(this,t)}reload(){return iT(this)}_assign(t){this!==t&&(B(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map(n=>Object.assign({},n)),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){const n=new Bt(Object.assign(Object.assign({},this),{auth:t,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(t){B(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,n=!1){let r=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),r=!0),n&&await ea(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Tt(this.auth.app))return Promise.reject(Wt(this.auth));const t=await this.getIdToken();return await Qr(this,eT(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(t=>Object.assign({},t)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,n){var r,i,s,a,u,c,h,w;const g=(r=n.displayName)!==null&&r!==void 0?r:void 0,S=(i=n.email)!==null&&i!==void 0?i:void 0,N=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,A=(a=n.photoURL)!==null&&a!==void 0?a:void 0,x=(u=n.tenantId)!==null&&u!==void 0?u:void 0,L=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,T=(h=n.createdAt)!==null&&h!==void 0?h:void 0,m=(w=n.lastLoginAt)!==null&&w!==void 0?w:void 0,{uid:I,emailVerified:O,isAnonymous:j,providerData:b,stsTokenManager:y}=n;B(I&&y,t,"internal-error");const p=jr.fromJSON(this.name,y);B(typeof I=="string",t,"internal-error"),on(g,t.name),on(S,t.name),B(typeof O=="boolean",t,"internal-error"),B(typeof j=="boolean",t,"internal-error"),on(N,t.name),on(A,t.name),on(x,t.name),on(L,t.name),on(T,t.name),on(m,t.name);const v=new Bt({uid:I,auth:t,email:S,emailVerified:O,displayName:g,isAnonymous:j,photoURL:A,phoneNumber:N,tenantId:x,stsTokenManager:p,createdAt:T,lastLoginAt:m});return b&&Array.isArray(b)&&(v.providerData=b.map(_=>Object.assign({},_))),L&&(v._redirectEventId=L),v}static async _fromIdTokenResponse(t,n,r=!1){const i=new jr;i.updateFromServerResponse(n);const s=new Bt({uid:n.localId,auth:t,stsTokenManager:i,isAnonymous:r});return await ea(s),s}static async _fromGetAccountInfoResponse(t,n,r){const i=n.users[0];B(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?Dv(i.providerUserInfo):[],a=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),u=new jr;u.updateFromIdToken(r);const c=new Bt({uid:i.localId,auth:t,stsTokenManager:u,isAnonymous:a}),h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new Vu(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(c,h),c}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jf=new Map;function Vt(e){Xt(e instanceof Function,"Expected a class definition");let t=Jf.get(e);return t?(Xt(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,Jf.set(e,t),t)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mv{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,n){this.storage[t]=n}async _get(t){const n=this.storage[t];return n===void 0?null:n}async _remove(t){delete this.storage[t]}_addListener(t,n){}_removeListener(t,n){}}Mv.type="NONE";const Zf=Mv;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vo(e,t,n){return`firebase:${e}:${t}:${n}`}class Fr{constructor(t,n,r){this.persistence=t,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=vo(this.userKey,i.apiKey,s),this.fullPersistenceKey=vo("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);return t?Bt._fromJSON(this.auth,t):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=t,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,n,r="authUser"){if(!n.length)return new Fr(Vt(Zf),t,r);const i=(await Promise.all(n.map(async h=>{if(await h._isAvailable())return h}))).filter(h=>h);let s=i[0]||Vt(Zf);const a=vo(r,t.config.apiKey,t.name);let u=null;for(const h of n)try{const w=await h._get(a);if(w){const g=Bt._fromJSON(t,w);h!==s&&(u=g),s=h;break}}catch{}const c=i.filter(h=>h._shouldAllowMigration);return!s._shouldAllowMigration||!c.length?new Fr(s,t,r):(s=c[0],u&&await s._set(a,u.toJSON()),await Promise.all(n.map(async h=>{if(h!==s)try{await h._remove(a)}catch{}})),new Fr(s,t,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ep(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(Fv(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(Uv(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(zv(t))return"Blackberry";if($v(t))return"Webos";if(sd(t))return"Safari";if((t.includes("chrome/")||jv(t))&&!t.includes("edge/"))return"Chrome";if(bv(t))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=e.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Uv(e=xe()){return/firefox\//i.test(e)}function sd(e=xe()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function jv(e=xe()){return/crios\//i.test(e)}function Fv(e=xe()){return/iemobile/i.test(e)}function bv(e=xe()){return/android/i.test(e)}function zv(e=xe()){return/blackberry/i.test(e)}function $v(e=xe()){return/webos/i.test(e)}function Ca(e=xe()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function lT(e=xe()){var t;return Ca(e)&&!!(!((t=window.navigator)===null||t===void 0)&&t.standalone)}function uT(){return D1()&&document.documentMode===10}function Bv(e=xe()){return Ca(e)||bv(e)||$v(e)||zv(e)||/windows phone/i.test(e)||Fv(e)}function cT(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vv(e,t=[]){let n;switch(e){case"Browser":n=ep(xe());break;case"Worker":n=`${ep(xe())}-${e}`;break;default:n=e}const r=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${ni}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dT{constructor(t){this.auth=t,this.queue=[]}pushCallback(t,n){const r=s=>new Promise((a,u)=>{try{const c=t(s);a(c)}catch(c){u(c)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(t){if(this.auth.currentUser===t)return;const n=[];try{for(const r of this.queue)await r(t),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function hT(e,t={}){return Zt(e,"GET","/v2/passwordPolicy",Mn(e,t))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fT=6;class pT{constructor(t){var n,r,i,s;const a=t.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=a.minPasswordLength)!==null&&n!==void 0?n:fT,a.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=a.maxPasswordLength),a.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=a.containsLowercaseCharacter),a.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=a.containsUppercaseCharacter),a.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=a.containsNumericCharacter),a.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=a.containsNonAlphanumericCharacter),this.enforcementState=t.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=t.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=t.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=t.schemaVersion}validatePassword(t){var n,r,i,s,a,u;const c={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(t,c),this.validatePasswordCharacterOptions(t,c),c.isValid&&(c.isValid=(n=c.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),c.isValid&&(c.isValid=(r=c.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),c.isValid&&(c.isValid=(i=c.containsLowercaseLetter)!==null&&i!==void 0?i:!0),c.isValid&&(c.isValid=(s=c.containsUppercaseLetter)!==null&&s!==void 0?s:!0),c.isValid&&(c.isValid=(a=c.containsNumericCharacter)!==null&&a!==void 0?a:!0),c.isValid&&(c.isValid=(u=c.containsNonAlphanumericCharacter)!==null&&u!==void 0?u:!0),c}validatePasswordLengthOptions(t,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=t.length>=r),i&&(n.meetsMaxPasswordLength=t.length<=i)}validatePasswordCharacterOptions(t,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<t.length;i++)r=t.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(t,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(t.containsLowercaseLetter||(t.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(t.containsUppercaseLetter||(t.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(t.containsNumericCharacter||(t.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(t.containsNonAlphanumericCharacter||(t.containsNonAlphanumericCharacter=s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gT{constructor(t,n,r,i){this.app=t,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new tp(this),this.idTokenSubscription=new tp(this),this.beforeStateQueue=new dT(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Av,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(t,n){return n&&(this._popupRedirectResolver=Vt(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await Fr.create(this,t),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!t)){if(this.currentUser&&t&&this.currentUser.uid===t.uid){this._currentUser._assign(t),await this.currentUser.getIdToken();return}await this._updateCurrentUser(t,!0)}}async initializeCurrentUserFromIdToken(t){try{const n=await Lv(this,{idToken:t}),r=await Bt._fromGetAccountInfoResponse(this,n,t);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(t){var n;if(Tt(this.app)){const a=this.app.settings.authIdToken;return a?new Promise(u=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(a).then(u,u))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const a=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,u=i==null?void 0:i._redirectEventId,c=await this.tryRedirectSignIn(t);(!a||a===u)&&(c!=null&&c.user)&&(i=c.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(a){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(a))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return B(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(t){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(t){try{await ea(t)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=GI()}async _delete(){this._deleted=!0}async updateCurrentUser(t){if(Tt(this.app))return Promise.reject(Wt(this));const n=t?lt(t):null;return n&&B(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(t,n=!1){if(!this._deleted)return t&&B(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(t),this.queue(async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()})}async signOut(){return Tt(this.app)?Promise.reject(Wt(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(t){return Tt(this.app)?Promise.reject(Wt(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Vt(t))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(t){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(t)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const t=await hT(this),n=new pT(t);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(t){this._errorFactory=new ar("auth","Firebase",t())}onAuthStateChanged(t,n,r){return this.registerStateListener(this.authStateSubscription,t,n,r)}beforeAuthStateChanged(t,n){return this.beforeStateQueue.pushCallback(t,n)}onIdTokenChanged(t,n,r){return this.registerStateListener(this.idTokenSubscription,t,n,r)}authStateReady(){return new Promise((t,n)=>{if(this.currentUser)t();else{const r=this.onAuthStateChanged(()=>{r(),t()},n)}})}async revokeAccessToken(t){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:t,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await aT(this,r)}}toJSON(){var t;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(t=this._currentUser)===null||t===void 0?void 0:t.toJSON()}}async _setRedirectUser(t,n){const r=await this.getOrInitRedirectPersistenceManager(n);return t===null?r.removeCurrentUser():r.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const n=t&&Vt(t)||this._popupRedirectResolver;B(n,this,"argument-error"),this.redirectPersistenceManager=await Fr.create(this,[Vt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===t?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(t))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(t=this.currentUser)===null||t===void 0?void 0:t.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let a=!1;const u=this._isInitialized?Promise.resolve():this._initializationPromise;if(B(u,this,"internal-error"),u.then(()=>{a||s(this.currentUser)}),typeof n=="function"){const c=t.addObserver(n,r,i);return()=>{a=!0,c()}}else{const c=t.addObserver(n);return()=>{a=!0,c()}}}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh(),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return B(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){!t||this.frameworks.includes(t)||(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=Vv(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var t;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((t=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var t;const n=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getToken());return n!=null&&n.error&&HI(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function ur(e){return lt(e)}class tp{constructor(t){this.auth=t,this.observer=null,this.addObserver=z1(n=>this.observer=n)}get next(){return B(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Pa={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function mT(e){Pa=e}function Hv(e){return Pa.loadJS(e)}function vT(){return Pa.recaptchaEnterpriseScript}function yT(){return Pa.gapiScript}function wT(e){return`__${e}${Math.floor(Math.random()*1e6)}`}const _T="recaptcha-enterprise",ET="NO_RECAPTCHA";class ST{constructor(t){this.type=_T,this.auth=ur(t)}async verify(t="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(a,u)=>{ZI(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)u(new Error("recaptcha Enterprise site key undefined"));else{const h=new JI(c);return s.tenantId==null?s._agentRecaptchaConfig=h:s._tenantRecaptchaConfigs[s.tenantId]=h,a(h.siteKey)}}).catch(c=>{u(c)})})}function i(s,a,u){const c=window.grecaptcha;Xf(c)?c.enterprise.ready(()=>{c.enterprise.execute(s,{action:t}).then(h=>{a(h)}).catch(()=>{a(ET)})}):u(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,a)=>{r(this.auth).then(u=>{if(!n&&Xf(window.grecaptcha))i(u,s,a);else{if(typeof window>"u"){a(new Error("RecaptchaVerifier is only supported in browser"));return}let c=vT();c.length!==0&&(c+=u),Hv(c).then(()=>{i(u,s,a)}).catch(h=>{a(h)})}}).catch(u=>{a(u)})})}}async function np(e,t,n,r=!1){const i=new ST(e);let s;try{s=await i.verify(n)}catch{s=await i.verify(n,!0)}const a=Object.assign({},t);return r?Object.assign(a,{captchaResp:s}):Object.assign(a,{captchaResponse:s}),Object.assign(a,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(a,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),a}async function Hu(e,t,n,r){var i;if(!((i=e._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const s=await np(e,t,n,n==="getOobCode");return r(e,s)}else return r(e,t).catch(async s=>{if(s.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const a=await np(e,t,n,n==="getOobCode");return r(e,a)}else return Promise.reject(s)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function IT(e,t){const n=lr(e,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(ls(s,t??{}))return i;yt(i,"already-initialized")}return n.initialize({options:t})}function TT(e,t){const n=(t==null?void 0:t.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Vt);t!=null&&t.errorMap&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,t==null?void 0:t.popupRedirectResolver)}function kT(e,t,n){const r=ur(e);B(r._canInitEmulator,r,"emulator-config-failed"),B(/^https?:\/\//.test(t),r,"invalid-emulator-scheme");const i=!1,s=Wv(t),{host:a,port:u}=CT(t),c=u===null?"":`:${u}`;r.config.emulator={url:`${s}//${a}${c}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:a,port:u,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),PT()}function Wv(e){const t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function CT(e){const t=Wv(e),n=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:rp(r.substr(s.length+1))}}else{const[s,a]=r.split(":");return{host:s,port:rp(a)}}}function rp(e){if(!e)return null;const t=Number(e);return isNaN(t)?null:t}function PT(){function e(){const t=document.createElement("p"),n=t.style;t.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",t.classList.add("firebase-emulator-warning"),document.body.appendChild(t)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",e):e())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class od{constructor(t,n){this.providerId=t,this.signInMethod=n}toJSON(){return $t("not implemented")}_getIdTokenResponse(t){return $t("not implemented")}_linkToIdToken(t,n){return $t("not implemented")}_getReauthenticationResolver(t){return $t("not implemented")}}async function AT(e,t){return Zt(e,"POST","/v1/accounts:signUp",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function RT(e,t){return ws(e,"POST","/v1/accounts:signInWithPassword",Mn(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function NT(e,t){return ws(e,"POST","/v1/accounts:signInWithEmailLink",Mn(e,t))}async function OT(e,t){return ws(e,"POST","/v1/accounts:signInWithEmailLink",Mn(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cs extends od{constructor(t,n,r,i=null){super("password",r),this._email=t,this._password=n,this._tenantId=i}static _fromEmailAndPassword(t,n){return new cs(t,n,"password")}static _fromEmailAndCode(t,n,r=null){return new cs(t,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(t){const n=typeof t=="string"?JSON.parse(t):t;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(t){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Hu(t,n,"signInWithPassword",RT);case"emailLink":return NT(t,{email:this._email,oobCode:this._password});default:yt(t,"internal-error")}}async _linkToIdToken(t,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Hu(t,r,"signUpPassword",AT);case"emailLink":return OT(t,{idToken:n,email:this._email,oobCode:this._password});default:yt(t,"internal-error")}}_getReauthenticationResolver(t){return this._getIdTokenResponse(t)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function br(e,t){return ws(e,"POST","/v1/accounts:signInWithIdp",Mn(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xT="http://localhost";class rr extends od{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){const n=new rr(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(n.idToken=t.idToken),t.accessToken&&(n.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(n.nonce=t.nonce),t.pendingToken&&(n.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(n.accessToken=t.oauthToken,n.secret=t.oauthTokenSecret):yt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const n=typeof t=="string"?JSON.parse(t):t,{providerId:r,signInMethod:i}=n,s=td(n,["providerId","signInMethod"]);if(!r||!i)return null;const a=new rr(r,i);return a.idToken=s.idToken||void 0,a.accessToken=s.accessToken||void 0,a.secret=s.secret,a.nonce=s.nonce,a.pendingToken=s.pendingToken||null,a}_getIdTokenResponse(t){const n=this.buildRequest();return br(t,n)}_linkToIdToken(t,n){const r=this.buildRequest();return r.idToken=n,br(t,r)}_getReauthenticationResolver(t){const n=this.buildRequest();return n.autoCreate=!1,br(t,n)}buildRequest(){const t={requestUri:xT,returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),t.postBody=ms(n)}return t}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function LT(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function DT(e){const t=Ni(Oi(e)).link,n=t?Ni(Oi(t)).deep_link_id:null,r=Ni(Oi(e)).deep_link_id;return(r?Ni(Oi(r)).link:null)||r||n||t||e}class ad{constructor(t){var n,r,i,s,a,u;const c=Ni(Oi(t)),h=(n=c.apiKey)!==null&&n!==void 0?n:null,w=(r=c.oobCode)!==null&&r!==void 0?r:null,g=LT((i=c.mode)!==null&&i!==void 0?i:null);B(h&&w&&g,"argument-error"),this.apiKey=h,this.operation=g,this.code=w,this.continueUrl=(s=c.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(a=c.languageCode)!==null&&a!==void 0?a:null,this.tenantId=(u=c.tenantId)!==null&&u!==void 0?u:null}static parseLink(t){const n=DT(t);try{return new ad(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ri{constructor(){this.providerId=ri.PROVIDER_ID}static credential(t,n){return cs._fromEmailAndPassword(t,n)}static credentialWithLink(t,n){const r=ad.parseLink(n);return B(r,"argument-error"),cs._fromEmailAndCode(t,r.code,r.tenantId)}}ri.PROVIDER_ID="password";ri.EMAIL_PASSWORD_SIGN_IN_METHOD="password";ri.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kv{constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _s extends Kv{constructor(){super(...arguments),this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dn extends _s{constructor(){super("facebook.com")}static credential(t){return rr._fromParams({providerId:dn.PROVIDER_ID,signInMethod:dn.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return dn.credentialFromTaggedObject(t)}static credentialFromError(t){return dn.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return dn.credential(t.oauthAccessToken)}catch{return null}}}dn.FACEBOOK_SIGN_IN_METHOD="facebook.com";dn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hn extends _s{constructor(){super("google.com"),this.addScope("profile")}static credential(t,n){return rr._fromParams({providerId:hn.PROVIDER_ID,signInMethod:hn.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:n})}static credentialFromResult(t){return hn.credentialFromTaggedObject(t)}static credentialFromError(t){return hn.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:n,oauthAccessToken:r}=t;if(!n&&!r)return null;try{return hn.credential(n,r)}catch{return null}}}hn.GOOGLE_SIGN_IN_METHOD="google.com";hn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fn extends _s{constructor(){super("github.com")}static credential(t){return rr._fromParams({providerId:fn.PROVIDER_ID,signInMethod:fn.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return fn.credentialFromTaggedObject(t)}static credentialFromError(t){return fn.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return fn.credential(t.oauthAccessToken)}catch{return null}}}fn.GITHUB_SIGN_IN_METHOD="github.com";fn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pn extends _s{constructor(){super("twitter.com")}static credential(t,n){return rr._fromParams({providerId:pn.PROVIDER_ID,signInMethod:pn.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:n})}static credentialFromResult(t){return pn.credentialFromTaggedObject(t)}static credentialFromError(t){return pn.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=t;if(!n||!r)return null;try{return pn.credential(n,r)}catch{return null}}}pn.TWITTER_SIGN_IN_METHOD="twitter.com";pn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function MT(e,t){return ws(e,"POST","/v1/accounts:signUp",Mn(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ir{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,n,r,i=!1){const s=await Bt._fromIdTokenResponse(t,r,i),a=ip(r);return new ir({user:s,providerId:a,_tokenResponse:r,operationType:n})}static async _forOperation(t,n,r){await t._updateTokensIfNecessary(r,!0);const i=ip(r);return new ir({user:t,providerId:i,_tokenResponse:r,operationType:n})}}function ip(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ta extends wt{constructor(t,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,ta.prototype),this.customData={appName:t.name,tenantId:(s=t.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(t,n,r,i){return new ta(t,n,r,i)}}function Gv(e,t,n,r){return(t==="reauthenticate"?n._getReauthenticationResolver(e):n._getIdTokenResponse(e)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?ta._fromErrorAndOperation(e,s,t,r):s})}async function UT(e,t,n=!1){const r=await Qr(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return ir._forOperation(e,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jT(e,t,n=!1){const{auth:r}=e;if(Tt(r.app))return Promise.reject(Wt(r));const i="reauthenticate";try{const s=await Qr(e,Gv(r,i,t,e),n);B(s.idToken,r,"internal-error");const a=id(s.idToken);B(a,r,"internal-error");const{sub:u}=a;return B(e.uid===u,r,"user-mismatch"),ir._forOperation(e,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&yt(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qv(e,t,n=!1){if(Tt(e.app))return Promise.reject(Wt(e));const r="signIn",i=await Gv(e,r,t),s=await ir._fromIdTokenResponse(e,r,i);return n||await e._updateCurrentUser(s.user),s}async function FT(e,t){return qv(ur(e),t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Qv(e){const t=ur(e);t._getPasswordPolicyInternal()&&await t._updatePasswordPolicy()}async function bT(e,t,n){if(Tt(e.app))return Promise.reject(Wt(e));const r=ur(e),a=await Hu(r,{returnSecureToken:!0,email:t,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",MT).catch(c=>{throw c.code==="auth/password-does-not-meet-requirements"&&Qv(e),c}),u=await ir._fromIdTokenResponse(r,"signIn",a);return await r._updateCurrentUser(u.user),u}function zT(e,t,n){return Tt(e.app)?Promise.reject(Wt(e)):FT(lt(e),ri.credential(t,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&Qv(e),r})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $T(e,t){return Zt(e,"POST","/v1/accounts:update",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function BT(e,{displayName:t,photoURL:n}){if(t===void 0&&n===void 0)return;const r=lt(e),s={idToken:await r.getIdToken(),displayName:t,photoUrl:n,returnSecureToken:!0},a=await Qr(r,$T(r.auth,s));r.displayName=a.displayName||null,r.photoURL=a.photoUrl||null;const u=r.providerData.find(({providerId:c})=>c==="password");u&&(u.displayName=r.displayName,u.photoURL=r.photoURL),await r._updateTokensIfNecessary(a)}function VT(e,t,n,r){return lt(e).onIdTokenChanged(t,n,r)}function HT(e,t,n){return lt(e).beforeAuthStateChanged(t,n)}function WT(e,t,n,r){return lt(e).onAuthStateChanged(t,n,r)}function KT(e){return lt(e).signOut()}const na="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xv{constructor(t,n){this.storageRetriever=t,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(na,"1"),this.storage.removeItem(na),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(t,n){return this.storage.setItem(t,JSON.stringify(n)),Promise.resolve()}_get(t){const n=this.storage.getItem(t);return Promise.resolve(n?JSON.parse(n):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function GT(){const e=xe();return sd(e)||Ca(e)}const qT=1e3,QT=10;class Yv extends Xv{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(t,n)=>this.onStorageEvent(t,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=GT()&&cT(),this.fallbackToPolling=Bv(),this._shouldAllowMigration=!0}forAllChangedKeys(t){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&t(n,i,r)}}onStorageEvent(t,n=!1){if(!t.key){this.forAllChangedKeys((a,u,c)=>{this.notifyListeners(a,c)});return}const r=t.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const a=this.storage.getItem(r);if(t.newValue!==a)t.newValue!==null?this.storage.setItem(r,t.newValue):this.storage.removeItem(r);else if(this.localCache[r]===t.newValue&&!n)return}const i=()=>{const a=this.storage.getItem(r);!n&&this.localCache[r]===a||this.notifyListeners(r,a)},s=this.storage.getItem(r);uT()&&s!==t.newValue&&t.newValue!==t.oldValue?setTimeout(i,QT):i()}notifyListeners(t,n){this.localCache[t]=n;const r=this.listeners[t];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((t,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:n,newValue:r}),!0)})},qT)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(t,n){await super._set(t,n),this.localCache[t]=JSON.stringify(n)}async _get(t){const n=await super._get(t);return this.localCache[t]=JSON.stringify(n),n}async _remove(t){await super._remove(t),delete this.localCache[t]}}Yv.type="LOCAL";const XT=Yv;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jv extends Xv{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(t,n){}_removeListener(t,n){}}Jv.type="SESSION";const Zv=Jv;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function YT(e){return Promise.all(e.map(async t=>{try{return{fulfilled:!0,value:await t}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Aa{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const n=this.receivers.find(i=>i.isListeningto(t));if(n)return n;const r=new Aa(t);return this.receivers.push(r),r}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const n=t,{eventId:r,eventType:i,data:s}=n.data,a=this.handlersMap[i];if(!(a!=null&&a.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const u=Array.from(a).map(async h=>h(n.origin,s)),c=await YT(u);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:c})}_subscribe(t,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(n)}_unsubscribe(t,n){this.handlersMap[t]&&n&&this.handlersMap[t].delete(n),(!n||this.handlersMap[t].size===0)&&delete this.handlersMap[t],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Aa.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ld(e="",t=10){let n="";for(let r=0;r<t;r++)n+=Math.floor(Math.random()*10);return e+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JT{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,a;return new Promise((u,c)=>{const h=ld("",20);i.port1.start();const w=setTimeout(()=>{c(new Error("unsupported_event"))},r);a={messageChannel:i,onMessage(g){const S=g;if(S.data.eventId===h)switch(S.data.status){case"ack":clearTimeout(w),s=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),u(S.data.response);break;default:clearTimeout(w),clearTimeout(s),c(new Error("invalid_response"));break}}},this.handlers.add(a),i.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:t,eventId:h,data:n},[i.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function At(){return window}function ZT(e){At().location.href=e}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ey(){return typeof At().WorkerGlobalScope<"u"&&typeof At().importScripts=="function"}async function ek(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function tk(){var e;return((e=navigator==null?void 0:navigator.serviceWorker)===null||e===void 0?void 0:e.controller)||null}function nk(){return ey()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ty="firebaseLocalStorageDb",rk=1,ra="firebaseLocalStorage",ny="fbase_key";class Es{constructor(t){this.request=t}toPromise(){return new Promise((t,n)=>{this.request.addEventListener("success",()=>{t(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Ra(e,t){return e.transaction([ra],t?"readwrite":"readonly").objectStore(ra)}function ik(){const e=indexedDB.deleteDatabase(ty);return new Es(e).toPromise()}function Wu(){const e=indexedDB.open(ty,rk);return new Promise((t,n)=>{e.addEventListener("error",()=>{n(e.error)}),e.addEventListener("upgradeneeded",()=>{const r=e.result;try{r.createObjectStore(ra,{keyPath:ny})}catch(i){n(i)}}),e.addEventListener("success",async()=>{const r=e.result;r.objectStoreNames.contains(ra)?t(r):(r.close(),await ik(),t(await Wu()))})})}async function sp(e,t,n){const r=Ra(e,!0).put({[ny]:t,value:n});return new Es(r).toPromise()}async function sk(e,t){const n=Ra(e,!1).get(t),r=await new Es(n).toPromise();return r===void 0?null:r.value}function op(e,t){const n=Ra(e,!0).delete(t);return new Es(n).toPromise()}const ok=800,ak=3;class ry{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Wu(),this.db)}async _withRetries(t){let n=0;for(;;)try{const r=await this._openDb();return await t(r)}catch(r){if(n++>ak)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return ey()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Aa._getInstance(nk()),this.receiver._subscribe("keyChanged",async(t,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(t,n)=>["keyChanged"])}async initializeSender(){var t,n;if(this.activeServiceWorker=await ek(),!this.activeServiceWorker)return;this.sender=new JT(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((t=r[0])===null||t===void 0)&&t.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){if(!(!this.sender||!this.activeServiceWorker||tk()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await Wu();return await sp(t,na,"1"),await op(t,na),!0}catch{}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>sp(r,t,n)),this.localCache[t]=n,this.notifyServiceWorker(t)))}async _get(t){const n=await this._withRetries(r=>sk(r,t));return this.localCache[t]=n,n}async _remove(t){return this._withPendingWrite(async()=>(await this._withRetries(n=>op(n,t)),delete this.localCache[t],this.notifyServiceWorker(t)))}async _poll(){const t=await this._withRetries(i=>{const s=Ra(i,!1).getAll();return new Es(s).toPromise()});if(!t)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(t.length!==0)for(const{fbase_key:i,value:s}of t)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(t,n){this.localCache[t]=n;const r=this.listeners[t];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),ok)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&this.stopPolling()}}ry.type="LOCAL";const lk=ry;new ys(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uk(e,t){return t?Vt(t):(B(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ud extends od{constructor(t){super("custom","custom"),this.params=t}_getIdTokenResponse(t){return br(t,this._buildIdpRequest())}_linkToIdToken(t,n){return br(t,this._buildIdpRequest(n))}_getReauthenticationResolver(t){return br(t,this._buildIdpRequest())}_buildIdpRequest(t){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(n.idToken=t),n}}function ck(e){return qv(e.auth,new ud(e),e.bypassAuthState)}function dk(e){const{auth:t,user:n}=e;return B(n,t,"internal-error"),jT(n,new ud(e),e.bypassAuthState)}async function hk(e){const{auth:t,user:n}=e;return B(n,t,"internal-error"),UT(n,new ud(e),e.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iy{constructor(t,n,r,i,s=!1){this.auth=t,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(t,n)=>{this.pendingPromise={resolve:t,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(t){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:a,type:u}=t;if(a){this.reject(a);return}const c={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(u)(c))}catch(h){this.reject(h)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return ck;case"linkViaPopup":case"linkViaRedirect":return hk;case"reauthViaPopup":case"reauthViaRedirect":return dk;default:yt(this.auth,"internal-error")}}resolve(t){Xt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){Xt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fk=new ys(2e3,1e4);class Rr extends iy{constructor(t,n,r,i,s){super(t,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Rr.currentPopupAction&&Rr.currentPopupAction.cancel(),Rr.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return B(t,this.auth,"internal-error"),t}async onExecution(){Xt(this.filter.length===1,"Popup operations only handle one event");const t=ld();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Pt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var t;return((t=this.authWindow)===null||t===void 0?void 0:t.associatedEvent)||null}cancel(){this.reject(Pt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Rr.currentPopupAction=null}pollUserCancellation(){const t=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Pt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(t,fk.get())};t()}}Rr.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pk="pendingRedirect",yo=new Map;class gk extends iy{constructor(t,n,r=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let t=yo.get(this.auth._key());if(!t){try{const r=await mk(this.resolver,this.auth)?await super.execute():null;t=()=>Promise.resolve(r)}catch(n){t=()=>Promise.reject(n)}yo.set(this.auth._key(),t)}return this.bypassAuthState||yo.set(this.auth._key(),()=>Promise.resolve(null)),t()}async onAuthEvent(t){if(t.type==="signInViaRedirect")return super.onAuthEvent(t);if(t.type==="unknown"){this.resolve(null);return}if(t.eventId){const n=await this.auth._redirectUserForId(t.eventId);if(n)return this.user=n,super.onAuthEvent(t);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function mk(e,t){const n=wk(t),r=yk(e);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function vk(e,t){yo.set(e._key(),t)}function yk(e){return Vt(e._redirectPersistence)}function wk(e){return vo(pk,e.config.apiKey,e.name)}async function _k(e,t,n=!1){if(Tt(e.app))return Promise.reject(Wt(e));const r=ur(e),i=uk(r,t),a=await new gk(r,i,n).execute();return a&&!n&&(delete a.user._redirectEventId,await r._persistUserIfCurrent(a.user),await r._setRedirectUser(null,t)),a}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ek=10*60*1e3;class Sk{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(t,r)&&(n=!0,this.sendToConsumer(t,r),this.saveEventToCache(t))}),this.hasHandledPotentialRedirect||!Ik(t)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=t,n=!0)),n}sendToConsumer(t,n){var r;if(t.error&&!sy(t)){const i=((r=t.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Pt(this.auth,i))}else n.onAuthEvent(t)}isEventForConsumer(t,n){const r=n.eventId===null||!!t.eventId&&t.eventId===n.eventId;return n.filter.includes(t.type)&&r}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=Ek&&this.cachedEventUids.clear(),this.cachedEventUids.has(ap(t))}saveEventToCache(t){this.cachedEventUids.add(ap(t)),this.lastProcessedEventTime=Date.now()}}function ap(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter(t=>t).join("-")}function sy({type:e,error:t}){return e==="unknown"&&(t==null?void 0:t.code)==="auth/no-auth-event"}function Ik(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return sy(e);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Tk(e,t={}){return Zt(e,"GET","/v1/projects",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kk=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Ck=/^https?/;async function Pk(e){if(e.config.emulator)return;const{authorizedDomains:t}=await Tk(e);for(const n of t)try{if(Ak(n))return}catch{}yt(e,"unauthorized-domain")}function Ak(e){const t=Bu(),{protocol:n,hostname:r}=new URL(t);if(e.startsWith("chrome-extension://")){const a=new URL(e);return a.hostname===""&&r===""?n==="chrome-extension:"&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):n==="chrome-extension:"&&a.hostname===r}if(!Ck.test(n))return!1;if(kk.test(e))return r===e;const i=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rk=new ys(3e4,6e4);function lp(){const e=At().___jsl;if(e!=null&&e.H){for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let n=0;n<e.CP.length;n++)e.CP[n]=null}}function Nk(e){return new Promise((t,n)=>{var r,i,s;function a(){lp(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{lp(),n(Pt(e,"network-request-failed"))},timeout:Rk.get()})}if(!((i=(r=At().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)t(gapi.iframes.getContext());else if(!((s=At().gapi)===null||s===void 0)&&s.load)a();else{const u=wT("iframefcb");return At()[u]=()=>{gapi.load?a():n(Pt(e,"network-request-failed"))},Hv(`${yT()}?onload=${u}`).catch(c=>n(c))}}).catch(t=>{throw wo=null,t})}let wo=null;function Ok(e){return wo=wo||Nk(e),wo}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xk=new ys(5e3,15e3),Lk="__/auth/iframe",Dk="emulator/auth/iframe",Mk={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Uk=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function jk(e){const t=e.config;B(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?rd(t,Dk):`https://${e.config.authDomain}/${Lk}`,r={apiKey:t.apiKey,appName:e.name,v:ni},i=Uk.get(e.config.apiHost);i&&(r.eid=i);const s=e._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${ms(r).slice(1)}`}async function Fk(e){const t=await Ok(e),n=At().gapi;return B(n,e,"internal-error"),t.open({where:document.body,url:jk(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Mk,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const a=Pt(e,"network-request-failed"),u=At().setTimeout(()=>{s(a)},xk.get());function c(){At().clearTimeout(u),i(r)}r.ping(c).then(c,()=>{s(a)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bk={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},zk=500,$k=600,Bk="_blank",Vk="http://localhost";class up{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Hk(e,t,n,r=zk,i=$k){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),a=Math.max((window.screen.availWidth-r)/2,0).toString();let u="";const c=Object.assign(Object.assign({},bk),{width:r.toString(),height:i.toString(),top:s,left:a}),h=xe().toLowerCase();n&&(u=jv(h)?Bk:n),Uv(h)&&(t=t||Vk,c.scrollbars="yes");const w=Object.entries(c).reduce((S,[N,A])=>`${S}${N}=${A},`,"");if(lT(h)&&u!=="_self")return Wk(t||"",u),new up(null);const g=window.open(t||"",u,w);B(g,e,"popup-blocked");try{g.focus()}catch{}return new up(g)}function Wk(e,t){const n=document.createElement("a");n.href=e,n.target=t;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kk="__/auth/handler",Gk="emulator/auth/handler",qk=encodeURIComponent("fac");async function cp(e,t,n,r,i,s){B(e.config.authDomain,e,"auth-domain-config-required"),B(e.config.apiKey,e,"invalid-api-key");const a={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:r,v:ni,eventId:i};if(t instanceof Kv){t.setDefaultLanguage(e.languageCode),a.providerId=t.providerId||"",b1(t.getCustomParameters())||(a.customParameters=JSON.stringify(t.getCustomParameters()));for(const[w,g]of Object.entries({}))a[w]=g}if(t instanceof _s){const w=t.getScopes().filter(g=>g!=="");w.length>0&&(a.scopes=w.join(","))}e.tenantId&&(a.tid=e.tenantId);const u=a;for(const w of Object.keys(u))u[w]===void 0&&delete u[w];const c=await e._getAppCheckToken(),h=c?`#${qk}=${encodeURIComponent(c)}`:"";return`${Qk(e)}?${ms(u).slice(1)}${h}`}function Qk({config:e}){return e.emulator?rd(e,Gk):`https://${e.authDomain}/${Kk}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bl="webStorageSupport";class Xk{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Zv,this._completeRedirectFn=_k,this._overrideRedirectResult=vk}async _openPopup(t,n,r,i){var s;Xt((s=this.eventManagers[t._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const a=await cp(t,n,r,Bu(),i);return Hk(t,a,ld())}async _openRedirect(t,n,r,i){await this._originValidation(t);const s=await cp(t,n,r,Bu(),i);return ZT(s),new Promise(()=>{})}_initialize(t){const n=t._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(Xt(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(t);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(t){const n=await Fk(t),r=new Sk(t);return n.register("authEvent",i=>(B(i==null?void 0:i.authEvent,t,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:r},this.iframes[t._key()]=n,r}_isIframeWebStorageSupported(t,n){this.iframes[t._key()].send(bl,{type:bl},i=>{var s;const a=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[bl];a!==void 0&&n(!!a),yt(t,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const n=t._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=Pk(t)),this.originValidationPromises[n]}get _shouldInitProactively(){return Bv()||sd()||Ca()}}const Yk=Xk;var dp="@firebase/auth",hp="1.7.6";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jk{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){var t;return this.assertAuthConfigured(),((t=this.auth.currentUser)===null||t===void 0?void 0:t.uid)||null}async getToken(t){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(t)}:null}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const n=this.auth.onIdTokenChanged(r=>{t((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(t,n),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const n=this.internalListeners.get(t);n&&(this.internalListeners.delete(t),n(),this.updateProactiveRefresh())}assertAuthConfigured(){B(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zk(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function eC(e){Rt(new vt("auth",(t,{options:n})=>{const r=t.getProvider("app").getImmediate(),i=t.getProvider("heartbeat"),s=t.getProvider("app-check-internal"),{apiKey:a,authDomain:u}=r.options;B(a&&!a.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:a,authDomain:u,clientPlatform:e,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Vv(e)},h=new gT(r,i,s,c);return TT(h,n),h},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,n,r)=>{t.getProvider("auth-internal").initialize()})),Rt(new vt("auth-internal",t=>{const n=ur(t.getProvider("auth").getImmediate());return(r=>new Jk(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),st(dp,hp,Zk(e)),st(dp,hp,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tC=5*60,nC=Vm("authIdTokenMaxAge")||tC;let fp=null;const rC=e=>async t=>{const n=t&&await t.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>nC)return;const i=n==null?void 0:n.token;fp!==i&&(fp=i,await fetch(e,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function iC(e=Wc()){const t=lr(e,"auth");if(t.isInitialized())return t.getImmediate();const n=IT(e,{popupRedirectResolver:Yk,persistence:[lk,XT,Zv]}),r=Vm("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const a=rC(s.toString());HT(n,a,()=>a(n.currentUser)),VT(n,u=>a(u))}}const i=$m("auth");return i&&kT(n,`http://${i}`),n}function sC(){var e,t;return(t=(e=document.getElementsByTagName("head"))===null||e===void 0?void 0:e[0])!==null&&t!==void 0?t:document}mT({loadJS(e){return new Promise((t,n)=>{const r=document.createElement("script");r.setAttribute("src",e),r.onload=t,r.onerror=i=>{const s=Pt("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",sC().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});eC("Browser");const Na=()=>{const[e,t]=M.useState(null),[n,r]=M.useState(null),[i,s]=M.useState(!1),a=iC();async function u(w){r(!0),t(null);try{const{user:g}=await bT(a,w.email,w.password);return await BT(g,{displayName:w.displayName}),r(!1),g}catch(g){console.error(g.message),console.table(typeof g.message);let S;g.message.include("Password")?S="A senha precisa conter ao menos 6 caracteres.":g.message.include("email-already")?S="E-mail já cadastrado em nosso sistema.":S="Ocorreu um erro, tente novamente mais tarde.",r(!1),t(S)}}const c=async w=>{r(!0),t(null);try{await zT(a,w.email,w.password),r(!1)}catch(g){console.error(g.message),console.table(typeof g.message);let S;g.message.include("invalid-login-credentials")?S="Este usuário não tem registro em nossos sistemas":g.message.include("wrong-password")?S="Existe algum erro em suas credenciais de login":S="Ocorreu um erro, tente novamente mais tarde.",r(!1),t(S)}},h=()=>{KT(a)};return M.useEffect(()=>()=>s(!0),[]),{db:BI,auth:a,createUser:u,error:e,loading:n,logout:h,login:c}},oC=()=>{const{user:e}=E1(),{logout:t}=Na();return U.jsxs("nav",{className:Et.navbar,children:[U.jsxs(sn,{to:"/",className:Et.brand,children:["NomadeLife ",U.jsx("span",{children:"DEV"})]}),U.jsxs("ul",{className:Et.links_list,children:[U.jsx("li",{children:U.jsx(sn,{to:"/",className:({isActive:n})=>n?Et.active:"",children:"Home"})}),U.jsx("li",{children:U.jsx(sn,{to:"/about",className:({isActive:n})=>n?Et.active:"",children:"About"})}),!e&&U.jsxs(U.Fragment,{children:[U.jsx("li",{children:U.jsx(sn,{to:"/login",className:({isActive:n})=>n?Et.active:"",children:"Login"})}),U.jsx("li",{children:U.jsx(sn,{to:"/register",className:({isActive:n})=>n?Et.active:"",children:"Register"})})]}),e&&U.jsxs(U.Fragment,{children:[U.jsx("li",{children:U.jsx(sn,{to:"/posts/create",className:({isActive:n})=>n?Et.active:"",children:"Create Post"})}),U.jsx("li",{children:U.jsx(sn,{to:"/dashboard",className:({isActive:n})=>n?Et.active:"",children:"Dashboard"})}),e&&U.jsx("li",{children:U.jsx(sn,{className:({isActive:n})=>n?Et.active:"",onClick:t,children:"Logout"})})]})]})]})},aC="_footer_1xqa3_1",lC={footer:aC},uC=()=>U.jsx(U.Fragment,{children:U.jsxs("footer",{className:lC.footer,children:[U.jsx("h3",{children:"Plataforma para desenvolvedores que tem o espírito livre!"}),U.jsx("p",{children:"Nomade Developers © 2024"})]})}),cC=()=>U.jsx(U.Fragment,{children:U.jsx("div",{children:"CreatePost"})}),dC="_login_1n4wa_1",hC={login:dC},fC=()=>{const[e,t]=M.useState(""),[n,r]=M.useState(""),[i,s]=M.useState(""),{login:a,error:u,loading:c}=Na(),h=Bc(),w=async g=>{g.preventDefault(),s("");const N=await a({email:e,password:n});console.table(N),h("/post/create")};return M.useEffect(()=>{u&&s(u)},[u]),U.jsxs("div",{className:hC.login,children:[U.jsx("h1",{children:"Entrar no Nomade Life"}),U.jsx("p",{children:"Entre no ambiente e compartilhe suas experiências"}),U.jsxs("form",{onSubmit:w,children:[U.jsxs("label",{children:[U.jsx("span",{children:"E-mail:"}),U.jsx("input",{type:"email",name:"email",required:!0,value:e,onChange:g=>t(g.target.value),placeholder:"Entre com seu e-mail"})]}),U.jsxs("label",{children:[U.jsx("span",{children:"Senha:"}),U.jsx("input",{type:"password",name:"password",required:!0,value:n,onChange:g=>r(g.target.value),placeholder:"Entre com sua senha"})]}),!c&&U.jsx("button",{className:"btn",children:"Login"}),c&&U.jsx("button",{className:"btn",disabled:!0,children:"Aguarde..."}),i&&U.jsx("p",{className:"error",children:i})]})]})},pC="/logo-quadrada.png",gC=()=>U.jsx("div",{children:U.jsx("img",{src:pC,alt:"Logo da desenvolvedora"})}),mC={},vC=()=>{const[e,t]=M.useState(""),[n,r]=M.useState(""),[i,s]=M.useState(""),[a,u]=M.useState(""),[c,h]=M.useState(null),{createUser:w,error:g,loading:S}=Na(),N=async A=>{A.preventDefault(),h("");const x={displayName:e,email:n,password:i,confirmPassowrd:a};if(i!==a){h("Password not match");return}const L=await w(x);console.log(L)};return M.useEffect(()=>{g&&h(g)},[g]),U.jsxs("div",{className:mC.register,children:[U.jsx("h1",{children:"Compartilhe suas experiências com outros nomades"}),U.jsxs("form",{action:"",onSubmit:N,children:[U.jsxs("label",{htmlFor:"",children:[U.jsx("span",{children:"Nome:"}),U.jsx("input",{type:"text",name:"displayName",required:!0,placeholder:"Nome do Usuário",value:e,onChange:A=>t(A.target.value)})]}),U.jsxs("label",{htmlFor:"",children:[U.jsx("span",{children:"Email:"}),U.jsx("input",{type:"email",name:"email",required:!0,placeholder:"Email do Usuário",value:n,onChange:A=>r(A.target.value)})]}),U.jsxs("label",{htmlFor:"",children:[U.jsx("span",{children:"Senha:"}),U.jsx("input",{type:"password",name:"password",required:!0,placeholder:"Senha deve ter no mínimo 6 caracteres",value:i,onChange:A=>s(A.target.value)})]}),U.jsxs("label",{htmlFor:"",children:[U.jsx("span",{children:"Confirmar Senha:"}),U.jsx("input",{type:"password",name:"confirmPassword",required:!0,placeholder:"Confirme sua Senha",value:a,onChange:A=>u(A.target.value)})]}),!S&&U.jsx("button",{type:"submit",className:"btn",children:"Cadastrar"}),S&&U.jsx("button",{type:"submit",disabled:!0,className:"btn",children:"Carregando..."}),c&&U.jsx("p",{className:"error",children:c})]})]})},yC=()=>U.jsx("div",{children:"Dashboard"}),wC=()=>{const[e,t]=M.useState(void 0),{auth:n}=Na(),r=e===void 0;return M.useEffect(()=>{WT(n,i=>{t(i)})},[n]),r?U.jsx("p",{children:"Carregando..."}):U.jsx("div",{className:"App",children:U.jsx(_1,{value:{user:e},children:U.jsxs(u1,{children:[U.jsx(oC,{}),U.jsx("div",{className:"container",children:U.jsxs(t1,{children:[U.jsx(mr,{path:"/",element:U.jsx(gC,{})}),U.jsx(mr,{path:"/login",element:e?U.jsx(eo,{to:"/"}):U.jsx(fC,{})}),U.jsx(mr,{path:"/register",element:e?U.jsx(eo,{to:"/"}):U.jsx(vC,{})}),U.jsx(mr,{path:"/posts/create",element:e?U.jsx(cC,{}):U.jsx(eo,{to:"/login"})}),U.jsx(mr,{path:"/dashboard",element:e?U.jsx(yC,{}):U.jsx(eo,{to:"/login"})})]})}),U.jsx(uC,{})]})})})};Cm(document.getElementById("root")).render(U.jsx(M.StrictMode,{children:U.jsx(wC,{})}));
