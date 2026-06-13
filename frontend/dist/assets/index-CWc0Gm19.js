const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/WarRoom-RqOEe0qi.js","assets/shield-alert-CvOeL20i.js","assets/SystemBlueprints-B_r_MA1o.js","assets/network-LxBcOXBM.js","assets/IncidentSimulator-BiWzB762.js","assets/BackendBuilderGame-8_j1WZgf.js","assets/settings-CmyJEp6I.js","assets/CareerSkillTree-BgPQ_Kyu.js"])))=>i.map(i=>d[i]);
var Uf=e=>{throw TypeError(e)};var tc=(e,t,n)=>t.has(e)||Uf("Cannot "+n);var S=(e,t,n)=>(tc(e,t,"read from private field"),n?n.call(e):t.get(e)),U=(e,t,n)=>t.has(e)?Uf("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,n),_=(e,t,n,r)=>(tc(e,t,"write to private field"),r?r.call(e,n):t.set(e,n),n),q=(e,t,n)=>(tc(e,t,"access private method"),n);var Va=(e,t,n,r)=>({set _(i){_(e,t,i,n)},get _(){return S(e,t,r)}});(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const a of i)if(a.type==="childList")for(const o of a.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const a={};return i.integrity&&(a.integrity=i.integrity),i.referrerPolicy&&(a.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?a.credentials="include":i.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(i){if(i.ep)return;i.ep=!0;const a=n(i);fetch(i.href,a)}})();function H1(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var rx={exports:{}},gl={},sx={exports:{}},Q={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ja=Symbol.for("react.element"),$1=Symbol.for("react.portal"),G1=Symbol.for("react.fragment"),W1=Symbol.for("react.strict_mode"),K1=Symbol.for("react.profiler"),Q1=Symbol.for("react.provider"),q1=Symbol.for("react.context"),Y1=Symbol.for("react.forward_ref"),X1=Symbol.for("react.suspense"),J1=Symbol.for("react.memo"),Z1=Symbol.for("react.lazy"),Hf=Symbol.iterator;function eb(e){return e===null||typeof e!="object"?null:(e=Hf&&e[Hf]||e["@@iterator"],typeof e=="function"?e:null)}var ix={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},ax=Object.assign,ox={};function ei(e,t,n){this.props=e,this.context=t,this.refs=ox,this.updater=n||ix}ei.prototype.isReactComponent={};ei.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};ei.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function lx(){}lx.prototype=ei.prototype;function $u(e,t,n){this.props=e,this.context=t,this.refs=ox,this.updater=n||ix}var Gu=$u.prototype=new lx;Gu.constructor=$u;ax(Gu,ei.prototype);Gu.isPureReactComponent=!0;var $f=Array.isArray,cx=Object.prototype.hasOwnProperty,Wu={current:null},dx={key:!0,ref:!0,__self:!0,__source:!0};function ux(e,t,n){var r,i={},a=null,o=null;if(t!=null)for(r in t.ref!==void 0&&(o=t.ref),t.key!==void 0&&(a=""+t.key),t)cx.call(t,r)&&!dx.hasOwnProperty(r)&&(i[r]=t[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var c=Array(l),d=0;d<l;d++)c[d]=arguments[d+2];i.children=c}if(e&&e.defaultProps)for(r in l=e.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:ja,type:e,key:a,ref:o,props:i,_owner:Wu.current}}function tb(e,t){return{$$typeof:ja,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Ku(e){return typeof e=="object"&&e!==null&&e.$$typeof===ja}function nb(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Gf=/\/+/g;function nc(e,t){return typeof e=="object"&&e!==null&&e.key!=null?nb(""+e.key):t.toString(36)}function fo(e,t,n,r,i){var a=typeof e;(a==="undefined"||a==="boolean")&&(e=null);var o=!1;if(e===null)o=!0;else switch(a){case"string":case"number":o=!0;break;case"object":switch(e.$$typeof){case ja:case $1:o=!0}}if(o)return o=e,i=i(o),e=r===""?"."+nc(o,0):r,$f(i)?(n="",e!=null&&(n=e.replace(Gf,"$&/")+"/"),fo(i,t,n,"",function(d){return d})):i!=null&&(Ku(i)&&(i=tb(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(Gf,"$&/")+"/")+e)),t.push(i)),1;if(o=0,r=r===""?".":r+":",$f(e))for(var l=0;l<e.length;l++){a=e[l];var c=r+nc(a,l);o+=fo(a,t,n,c,i)}else if(c=eb(e),typeof c=="function")for(e=c.call(e),l=0;!(a=e.next()).done;)a=a.value,c=r+nc(a,l++),o+=fo(a,t,n,c,i);else if(a==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return o}function Ba(e,t,n){if(e==null)return e;var r=[],i=0;return fo(e,r,"","",function(a){return t.call(n,a,i++)}),r}function rb(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var st={current:null},ho={transition:null},sb={ReactCurrentDispatcher:st,ReactCurrentBatchConfig:ho,ReactCurrentOwner:Wu};function px(){throw Error("act(...) is not supported in production builds of React.")}Q.Children={map:Ba,forEach:function(e,t,n){Ba(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Ba(e,function(){t++}),t},toArray:function(e){return Ba(e,function(t){return t})||[]},only:function(e){if(!Ku(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};Q.Component=ei;Q.Fragment=G1;Q.Profiler=K1;Q.PureComponent=$u;Q.StrictMode=W1;Q.Suspense=X1;Q.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=sb;Q.act=px;Q.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=ax({},e.props),i=e.key,a=e.ref,o=e._owner;if(t!=null){if(t.ref!==void 0&&(a=t.ref,o=Wu.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(c in t)cx.call(t,c)&&!dx.hasOwnProperty(c)&&(r[c]=t[c]===void 0&&l!==void 0?l[c]:t[c])}var c=arguments.length-2;if(c===1)r.children=n;else if(1<c){l=Array(c);for(var d=0;d<c;d++)l[d]=arguments[d+2];r.children=l}return{$$typeof:ja,type:e.type,key:i,ref:a,props:r,_owner:o}};Q.createContext=function(e){return e={$$typeof:q1,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Q1,_context:e},e.Consumer=e};Q.createElement=ux;Q.createFactory=function(e){var t=ux.bind(null,e);return t.type=e,t};Q.createRef=function(){return{current:null}};Q.forwardRef=function(e){return{$$typeof:Y1,render:e}};Q.isValidElement=Ku;Q.lazy=function(e){return{$$typeof:Z1,_payload:{_status:-1,_result:e},_init:rb}};Q.memo=function(e,t){return{$$typeof:J1,type:e,compare:t===void 0?null:t}};Q.startTransition=function(e){var t=ho.transition;ho.transition={};try{e()}finally{ho.transition=t}};Q.unstable_act=px;Q.useCallback=function(e,t){return st.current.useCallback(e,t)};Q.useContext=function(e){return st.current.useContext(e)};Q.useDebugValue=function(){};Q.useDeferredValue=function(e){return st.current.useDeferredValue(e)};Q.useEffect=function(e,t){return st.current.useEffect(e,t)};Q.useId=function(){return st.current.useId()};Q.useImperativeHandle=function(e,t,n){return st.current.useImperativeHandle(e,t,n)};Q.useInsertionEffect=function(e,t){return st.current.useInsertionEffect(e,t)};Q.useLayoutEffect=function(e,t){return st.current.useLayoutEffect(e,t)};Q.useMemo=function(e,t){return st.current.useMemo(e,t)};Q.useReducer=function(e,t,n){return st.current.useReducer(e,t,n)};Q.useRef=function(e){return st.current.useRef(e)};Q.useState=function(e){return st.current.useState(e)};Q.useSyncExternalStore=function(e,t,n){return st.current.useSyncExternalStore(e,t,n)};Q.useTransition=function(){return st.current.useTransition()};Q.version="18.3.1";sx.exports=Q;var j=sx.exports;const Qu=H1(j);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ib=j,ab=Symbol.for("react.element"),ob=Symbol.for("react.fragment"),lb=Object.prototype.hasOwnProperty,cb=ib.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,db={key:!0,ref:!0,__self:!0,__source:!0};function fx(e,t,n){var r,i={},a=null,o=null;n!==void 0&&(a=""+n),t.key!==void 0&&(a=""+t.key),t.ref!==void 0&&(o=t.ref);for(r in t)lb.call(t,r)&&!db.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:ab,type:e,key:a,ref:o,props:i,_owner:cb.current}}gl.Fragment=ob;gl.jsx=fx;gl.jsxs=fx;rx.exports=gl;var s=rx.exports,rd={},hx={exports:{}},kt={},mx={exports:{}},gx={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(M,B){var $=M.length;M.push(B);e:for(;0<$;){var G=$-1>>>1,he=M[G];if(0<i(he,B))M[G]=B,M[$]=he,$=G;else break e}}function n(M){return M.length===0?null:M[0]}function r(M){if(M.length===0)return null;var B=M[0],$=M.pop();if($!==B){M[0]=$;e:for(var G=0,he=M.length,Xr=he>>>1;G<Xr;){var cn=2*(G+1)-1,ai=M[cn],dn=cn+1,Jr=M[dn];if(0>i(ai,$))dn<he&&0>i(Jr,ai)?(M[G]=Jr,M[dn]=$,G=dn):(M[G]=ai,M[cn]=$,G=cn);else if(dn<he&&0>i(Jr,$))M[G]=Jr,M[dn]=$,G=dn;else break e}}return B}function i(M,B){var $=M.sortIndex-B.sortIndex;return $!==0?$:M.id-B.id}if(typeof performance=="object"&&typeof performance.now=="function"){var a=performance;e.unstable_now=function(){return a.now()}}else{var o=Date,l=o.now();e.unstable_now=function(){return o.now()-l}}var c=[],d=[],u=1,p=null,f=3,h=!1,m=!1,y=!1,k=typeof setTimeout=="function"?setTimeout:null,x=typeof clearTimeout=="function"?clearTimeout:null,g=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function v(M){for(var B=n(d);B!==null;){if(B.callback===null)r(d);else if(B.startTime<=M)r(d),B.sortIndex=B.expirationTime,t(c,B);else break;B=n(d)}}function w(M){if(y=!1,v(M),!m)if(n(c)!==null)m=!0,be(N);else{var B=n(d);B!==null&&Tn(w,B.startTime-M)}}function N(M,B){m=!1,y&&(y=!1,x(E),E=-1),h=!0;var $=f;try{for(v(B),p=n(c);p!==null&&(!(p.expirationTime>B)||M&&!z());){var G=p.callback;if(typeof G=="function"){p.callback=null,f=p.priorityLevel;var he=G(p.expirationTime<=B);B=e.unstable_now(),typeof he=="function"?p.callback=he:p===n(c)&&r(c),v(B)}else r(c);p=n(c)}if(p!==null)var Xr=!0;else{var cn=n(d);cn!==null&&Tn(w,cn.startTime-B),Xr=!1}return Xr}finally{p=null,f=$,h=!1}}var A=!1,C=null,E=-1,D=5,P=-1;function z(){return!(e.unstable_now()-P<D)}function W(){if(C!==null){var M=e.unstable_now();P=M;var B=!0;try{B=C(!0,M)}finally{B?ie():(A=!1,C=null)}}else A=!1}var ie;if(typeof g=="function")ie=function(){g(W)};else if(typeof MessageChannel<"u"){var le=new MessageChannel,de=le.port2;le.port1.onmessage=W,ie=function(){de.postMessage(null)}}else ie=function(){k(W,0)};function be(M){C=M,A||(A=!0,ie())}function Tn(M,B){E=k(function(){M(e.unstable_now())},B)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(M){M.callback=null},e.unstable_continueExecution=function(){m||h||(m=!0,be(N))},e.unstable_forceFrameRate=function(M){0>M||125<M?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):D=0<M?Math.floor(1e3/M):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_getFirstCallbackNode=function(){return n(c)},e.unstable_next=function(M){switch(f){case 1:case 2:case 3:var B=3;break;default:B=f}var $=f;f=B;try{return M()}finally{f=$}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(M,B){switch(M){case 1:case 2:case 3:case 4:case 5:break;default:M=3}var $=f;f=M;try{return B()}finally{f=$}},e.unstable_scheduleCallback=function(M,B,$){var G=e.unstable_now();switch(typeof $=="object"&&$!==null?($=$.delay,$=typeof $=="number"&&0<$?G+$:G):$=G,M){case 1:var he=-1;break;case 2:he=250;break;case 5:he=1073741823;break;case 4:he=1e4;break;default:he=5e3}return he=$+he,M={id:u++,callback:B,priorityLevel:M,startTime:$,expirationTime:he,sortIndex:-1},$>G?(M.sortIndex=$,t(d,M),n(c)===null&&M===n(d)&&(y?(x(E),E=-1):y=!0,Tn(w,$-G))):(M.sortIndex=he,t(c,M),m||h||(m=!0,be(N))),M},e.unstable_shouldYield=z,e.unstable_wrapCallback=function(M){var B=f;return function(){var $=f;f=B;try{return M.apply(this,arguments)}finally{f=$}}}})(gx);mx.exports=gx;var ub=mx.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var pb=j,wt=ub;function R(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var xx=new Set,Wi={};function Qr(e,t){Gs(e,t),Gs(e+"Capture",t)}function Gs(e,t){for(Wi[e]=t,e=0;e<t.length;e++)xx.add(t[e])}var wn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),sd=Object.prototype.hasOwnProperty,fb=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Wf={},Kf={};function hb(e){return sd.call(Kf,e)?!0:sd.call(Wf,e)?!1:fb.test(e)?Kf[e]=!0:(Wf[e]=!0,!1)}function mb(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function gb(e,t,n,r){if(t===null||typeof t>"u"||mb(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function it(e,t,n,r,i,a,o){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=a,this.removeEmptyString=o}var Ue={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Ue[e]=new it(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];Ue[t]=new it(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Ue[e]=new it(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Ue[e]=new it(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Ue[e]=new it(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Ue[e]=new it(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Ue[e]=new it(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Ue[e]=new it(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Ue[e]=new it(e,5,!1,e.toLowerCase(),null,!1,!1)});var qu=/[\-:]([a-z])/g;function Yu(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(qu,Yu);Ue[t]=new it(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(qu,Yu);Ue[t]=new it(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(qu,Yu);Ue[t]=new it(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Ue[e]=new it(e,1,!1,e.toLowerCase(),null,!1,!1)});Ue.xlinkHref=new it("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Ue[e]=new it(e,1,!1,e.toLowerCase(),null,!0,!0)});function Xu(e,t,n,r){var i=Ue.hasOwnProperty(t)?Ue[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(gb(t,n,i,r)&&(n=null),r||i===null?hb(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Nn=pb.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ua=Symbol.for("react.element"),us=Symbol.for("react.portal"),ps=Symbol.for("react.fragment"),Ju=Symbol.for("react.strict_mode"),id=Symbol.for("react.profiler"),yx=Symbol.for("react.provider"),vx=Symbol.for("react.context"),Zu=Symbol.for("react.forward_ref"),ad=Symbol.for("react.suspense"),od=Symbol.for("react.suspense_list"),ep=Symbol.for("react.memo"),Dn=Symbol.for("react.lazy"),bx=Symbol.for("react.offscreen"),Qf=Symbol.iterator;function ui(e){return e===null||typeof e!="object"?null:(e=Qf&&e[Qf]||e["@@iterator"],typeof e=="function"?e:null)}var fe=Object.assign,rc;function Ni(e){if(rc===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);rc=t&&t[1]||""}return`
`+rc+e}var sc=!1;function ic(e,t){if(!e||sc)return"";sc=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(d){var r=d}Reflect.construct(e,[],t)}else{try{t.call()}catch(d){r=d}e.call(t.prototype)}else{try{throw Error()}catch(d){r=d}e()}}catch(d){if(d&&r&&typeof d.stack=="string"){for(var i=d.stack.split(`
`),a=r.stack.split(`
`),o=i.length-1,l=a.length-1;1<=o&&0<=l&&i[o]!==a[l];)l--;for(;1<=o&&0<=l;o--,l--)if(i[o]!==a[l]){if(o!==1||l!==1)do if(o--,l--,0>l||i[o]!==a[l]){var c=`
`+i[o].replace(" at new "," at ");return e.displayName&&c.includes("<anonymous>")&&(c=c.replace("<anonymous>",e.displayName)),c}while(1<=o&&0<=l);break}}}finally{sc=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Ni(e):""}function xb(e){switch(e.tag){case 5:return Ni(e.type);case 16:return Ni("Lazy");case 13:return Ni("Suspense");case 19:return Ni("SuspenseList");case 0:case 2:case 15:return e=ic(e.type,!1),e;case 11:return e=ic(e.type.render,!1),e;case 1:return e=ic(e.type,!0),e;default:return""}}function ld(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case ps:return"Fragment";case us:return"Portal";case id:return"Profiler";case Ju:return"StrictMode";case ad:return"Suspense";case od:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case vx:return(e.displayName||"Context")+".Consumer";case yx:return(e._context.displayName||"Context")+".Provider";case Zu:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case ep:return t=e.displayName||null,t!==null?t:ld(e.type)||"Memo";case Dn:t=e._payload,e=e._init;try{return ld(e(t))}catch{}}return null}function yb(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ld(t);case 8:return t===Ju?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function ar(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function wx(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function vb(e){var t=wx(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,a=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,a.call(this,o)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Ha(e){e._valueTracker||(e._valueTracker=vb(e))}function kx(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=wx(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Mo(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function cd(e,t){var n=t.checked;return fe({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function qf(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=ar(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function jx(e,t){t=t.checked,t!=null&&Xu(e,"checked",t,!1)}function dd(e,t){jx(e,t);var n=ar(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?ud(e,t.type,n):t.hasOwnProperty("defaultValue")&&ud(e,t.type,ar(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Yf(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function ud(e,t,n){(t!=="number"||Mo(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Ti=Array.isArray;function Ts(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+ar(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function pd(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(R(91));return fe({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Xf(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(R(92));if(Ti(n)){if(1<n.length)throw Error(R(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:ar(n)}}function Sx(e,t){var n=ar(t.value),r=ar(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Jf(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Nx(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function fd(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Nx(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var $a,Tx=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for($a=$a||document.createElement("div"),$a.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=$a.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Ki(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Mi={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},bb=["Webkit","ms","Moz","O"];Object.keys(Mi).forEach(function(e){bb.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Mi[t]=Mi[e]})});function Ex(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Mi.hasOwnProperty(e)&&Mi[e]?(""+t).trim():t+"px"}function Cx(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Ex(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var wb=fe({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function hd(e,t){if(t){if(wb[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(R(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(R(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(R(61))}if(t.style!=null&&typeof t.style!="object")throw Error(R(62))}}function md(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var gd=null;function tp(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var xd=null,Es=null,Cs=null;function Zf(e){if(e=Ta(e)){if(typeof xd!="function")throw Error(R(280));var t=e.stateNode;t&&(t=wl(t),xd(e.stateNode,e.type,t))}}function Ax(e){Es?Cs?Cs.push(e):Cs=[e]:Es=e}function Px(){if(Es){var e=Es,t=Cs;if(Cs=Es=null,Zf(e),t)for(e=0;e<t.length;e++)Zf(t[e])}}function Rx(e,t){return e(t)}function Mx(){}var ac=!1;function Ix(e,t,n){if(ac)return e(t,n);ac=!0;try{return Rx(e,t,n)}finally{ac=!1,(Es!==null||Cs!==null)&&(Mx(),Px())}}function Qi(e,t){var n=e.stateNode;if(n===null)return null;var r=wl(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(R(231,t,typeof n));return n}var yd=!1;if(wn)try{var pi={};Object.defineProperty(pi,"passive",{get:function(){yd=!0}}),window.addEventListener("test",pi,pi),window.removeEventListener("test",pi,pi)}catch{yd=!1}function kb(e,t,n,r,i,a,o,l,c){var d=Array.prototype.slice.call(arguments,3);try{t.apply(n,d)}catch(u){this.onError(u)}}var Ii=!1,Io=null,Lo=!1,vd=null,jb={onError:function(e){Ii=!0,Io=e}};function Sb(e,t,n,r,i,a,o,l,c){Ii=!1,Io=null,kb.apply(jb,arguments)}function Nb(e,t,n,r,i,a,o,l,c){if(Sb.apply(this,arguments),Ii){if(Ii){var d=Io;Ii=!1,Io=null}else throw Error(R(198));Lo||(Lo=!0,vd=d)}}function qr(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Lx(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function eh(e){if(qr(e)!==e)throw Error(R(188))}function Tb(e){var t=e.alternate;if(!t){if(t=qr(e),t===null)throw Error(R(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var a=i.alternate;if(a===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===a.child){for(a=i.child;a;){if(a===n)return eh(i),e;if(a===r)return eh(i),t;a=a.sibling}throw Error(R(188))}if(n.return!==r.return)n=i,r=a;else{for(var o=!1,l=i.child;l;){if(l===n){o=!0,n=i,r=a;break}if(l===r){o=!0,r=i,n=a;break}l=l.sibling}if(!o){for(l=a.child;l;){if(l===n){o=!0,n=a,r=i;break}if(l===r){o=!0,r=a,n=i;break}l=l.sibling}if(!o)throw Error(R(189))}}if(n.alternate!==r)throw Error(R(190))}if(n.tag!==3)throw Error(R(188));return n.stateNode.current===n?e:t}function Dx(e){return e=Tb(e),e!==null?zx(e):null}function zx(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=zx(e);if(t!==null)return t;e=e.sibling}return null}var _x=wt.unstable_scheduleCallback,th=wt.unstable_cancelCallback,Eb=wt.unstable_shouldYield,Cb=wt.unstable_requestPaint,je=wt.unstable_now,Ab=wt.unstable_getCurrentPriorityLevel,np=wt.unstable_ImmediatePriority,Ox=wt.unstable_UserBlockingPriority,Do=wt.unstable_NormalPriority,Pb=wt.unstable_LowPriority,Fx=wt.unstable_IdlePriority,xl=null,sn=null;function Rb(e){if(sn&&typeof sn.onCommitFiberRoot=="function")try{sn.onCommitFiberRoot(xl,e,void 0,(e.current.flags&128)===128)}catch{}}var Ut=Math.clz32?Math.clz32:Lb,Mb=Math.log,Ib=Math.LN2;function Lb(e){return e>>>=0,e===0?32:31-(Mb(e)/Ib|0)|0}var Ga=64,Wa=4194304;function Ei(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function zo(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,a=e.pingedLanes,o=n&268435455;if(o!==0){var l=o&~i;l!==0?r=Ei(l):(a&=o,a!==0&&(r=Ei(a)))}else o=n&~i,o!==0?r=Ei(o):a!==0&&(r=Ei(a));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,a=t&-t,i>=a||i===16&&(a&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Ut(t),i=1<<n,r|=e[n],t&=~i;return r}function Db(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function zb(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,a=e.pendingLanes;0<a;){var o=31-Ut(a),l=1<<o,c=i[o];c===-1?(!(l&n)||l&r)&&(i[o]=Db(l,t)):c<=t&&(e.expiredLanes|=l),a&=~l}}function bd(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Vx(){var e=Ga;return Ga<<=1,!(Ga&4194240)&&(Ga=64),e}function oc(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Sa(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Ut(t),e[t]=n}function _b(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-Ut(n),a=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~a}}function rp(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Ut(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var te=0;function Bx(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Ux,sp,Hx,$x,Gx,wd=!1,Ka=[],Xn=null,Jn=null,Zn=null,qi=new Map,Yi=new Map,_n=[],Ob="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function nh(e,t){switch(e){case"focusin":case"focusout":Xn=null;break;case"dragenter":case"dragleave":Jn=null;break;case"mouseover":case"mouseout":Zn=null;break;case"pointerover":case"pointerout":qi.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Yi.delete(t.pointerId)}}function fi(e,t,n,r,i,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:a,targetContainers:[i]},t!==null&&(t=Ta(t),t!==null&&sp(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Fb(e,t,n,r,i){switch(t){case"focusin":return Xn=fi(Xn,e,t,n,r,i),!0;case"dragenter":return Jn=fi(Jn,e,t,n,r,i),!0;case"mouseover":return Zn=fi(Zn,e,t,n,r,i),!0;case"pointerover":var a=i.pointerId;return qi.set(a,fi(qi.get(a)||null,e,t,n,r,i)),!0;case"gotpointercapture":return a=i.pointerId,Yi.set(a,fi(Yi.get(a)||null,e,t,n,r,i)),!0}return!1}function Wx(e){var t=jr(e.target);if(t!==null){var n=qr(t);if(n!==null){if(t=n.tag,t===13){if(t=Lx(n),t!==null){e.blockedOn=t,Gx(e.priority,function(){Hx(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function mo(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=kd(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);gd=r,n.target.dispatchEvent(r),gd=null}else return t=Ta(n),t!==null&&sp(t),e.blockedOn=n,!1;t.shift()}return!0}function rh(e,t,n){mo(e)&&n.delete(t)}function Vb(){wd=!1,Xn!==null&&mo(Xn)&&(Xn=null),Jn!==null&&mo(Jn)&&(Jn=null),Zn!==null&&mo(Zn)&&(Zn=null),qi.forEach(rh),Yi.forEach(rh)}function hi(e,t){e.blockedOn===t&&(e.blockedOn=null,wd||(wd=!0,wt.unstable_scheduleCallback(wt.unstable_NormalPriority,Vb)))}function Xi(e){function t(i){return hi(i,e)}if(0<Ka.length){hi(Ka[0],e);for(var n=1;n<Ka.length;n++){var r=Ka[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Xn!==null&&hi(Xn,e),Jn!==null&&hi(Jn,e),Zn!==null&&hi(Zn,e),qi.forEach(t),Yi.forEach(t),n=0;n<_n.length;n++)r=_n[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<_n.length&&(n=_n[0],n.blockedOn===null);)Wx(n),n.blockedOn===null&&_n.shift()}var As=Nn.ReactCurrentBatchConfig,_o=!0;function Bb(e,t,n,r){var i=te,a=As.transition;As.transition=null;try{te=1,ip(e,t,n,r)}finally{te=i,As.transition=a}}function Ub(e,t,n,r){var i=te,a=As.transition;As.transition=null;try{te=4,ip(e,t,n,r)}finally{te=i,As.transition=a}}function ip(e,t,n,r){if(_o){var i=kd(e,t,n,r);if(i===null)xc(e,t,r,Oo,n),nh(e,r);else if(Fb(i,e,t,n,r))r.stopPropagation();else if(nh(e,r),t&4&&-1<Ob.indexOf(e)){for(;i!==null;){var a=Ta(i);if(a!==null&&Ux(a),a=kd(e,t,n,r),a===null&&xc(e,t,r,Oo,n),a===i)break;i=a}i!==null&&r.stopPropagation()}else xc(e,t,r,null,n)}}var Oo=null;function kd(e,t,n,r){if(Oo=null,e=tp(r),e=jr(e),e!==null)if(t=qr(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Lx(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Oo=e,null}function Kx(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Ab()){case np:return 1;case Ox:return 4;case Do:case Pb:return 16;case Fx:return 536870912;default:return 16}default:return 16}}var Qn=null,ap=null,go=null;function Qx(){if(go)return go;var e,t=ap,n=t.length,r,i="value"in Qn?Qn.value:Qn.textContent,a=i.length;for(e=0;e<n&&t[e]===i[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===i[a-r];r++);return go=i.slice(e,1<r?1-r:void 0)}function xo(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Qa(){return!0}function sh(){return!1}function jt(e){function t(n,r,i,a,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=a,this.target=o,this.currentTarget=null;for(var l in e)e.hasOwnProperty(l)&&(n=e[l],this[l]=n?n(a):a[l]);return this.isDefaultPrevented=(a.defaultPrevented!=null?a.defaultPrevented:a.returnValue===!1)?Qa:sh,this.isPropagationStopped=sh,this}return fe(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Qa)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Qa)},persist:function(){},isPersistent:Qa}),t}var ti={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},op=jt(ti),Na=fe({},ti,{view:0,detail:0}),Hb=jt(Na),lc,cc,mi,yl=fe({},Na,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:lp,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==mi&&(mi&&e.type==="mousemove"?(lc=e.screenX-mi.screenX,cc=e.screenY-mi.screenY):cc=lc=0,mi=e),lc)},movementY:function(e){return"movementY"in e?e.movementY:cc}}),ih=jt(yl),$b=fe({},yl,{dataTransfer:0}),Gb=jt($b),Wb=fe({},Na,{relatedTarget:0}),dc=jt(Wb),Kb=fe({},ti,{animationName:0,elapsedTime:0,pseudoElement:0}),Qb=jt(Kb),qb=fe({},ti,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Yb=jt(qb),Xb=fe({},ti,{data:0}),ah=jt(Xb),Jb={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Zb={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},e2={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function t2(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=e2[e])?!!t[e]:!1}function lp(){return t2}var n2=fe({},Na,{key:function(e){if(e.key){var t=Jb[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=xo(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Zb[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:lp,charCode:function(e){return e.type==="keypress"?xo(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?xo(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),r2=jt(n2),s2=fe({},yl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),oh=jt(s2),i2=fe({},Na,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:lp}),a2=jt(i2),o2=fe({},ti,{propertyName:0,elapsedTime:0,pseudoElement:0}),l2=jt(o2),c2=fe({},yl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),d2=jt(c2),u2=[9,13,27,32],cp=wn&&"CompositionEvent"in window,Li=null;wn&&"documentMode"in document&&(Li=document.documentMode);var p2=wn&&"TextEvent"in window&&!Li,qx=wn&&(!cp||Li&&8<Li&&11>=Li),lh=" ",ch=!1;function Yx(e,t){switch(e){case"keyup":return u2.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Xx(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var fs=!1;function f2(e,t){switch(e){case"compositionend":return Xx(t);case"keypress":return t.which!==32?null:(ch=!0,lh);case"textInput":return e=t.data,e===lh&&ch?null:e;default:return null}}function h2(e,t){if(fs)return e==="compositionend"||!cp&&Yx(e,t)?(e=Qx(),go=ap=Qn=null,fs=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return qx&&t.locale!=="ko"?null:t.data;default:return null}}var m2={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function dh(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!m2[e.type]:t==="textarea"}function Jx(e,t,n,r){Ax(r),t=Fo(t,"onChange"),0<t.length&&(n=new op("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Di=null,Ji=null;function g2(e){c0(e,0)}function vl(e){var t=gs(e);if(kx(t))return e}function x2(e,t){if(e==="change")return t}var Zx=!1;if(wn){var uc;if(wn){var pc="oninput"in document;if(!pc){var uh=document.createElement("div");uh.setAttribute("oninput","return;"),pc=typeof uh.oninput=="function"}uc=pc}else uc=!1;Zx=uc&&(!document.documentMode||9<document.documentMode)}function ph(){Di&&(Di.detachEvent("onpropertychange",e0),Ji=Di=null)}function e0(e){if(e.propertyName==="value"&&vl(Ji)){var t=[];Jx(t,Ji,e,tp(e)),Ix(g2,t)}}function y2(e,t,n){e==="focusin"?(ph(),Di=t,Ji=n,Di.attachEvent("onpropertychange",e0)):e==="focusout"&&ph()}function v2(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return vl(Ji)}function b2(e,t){if(e==="click")return vl(t)}function w2(e,t){if(e==="input"||e==="change")return vl(t)}function k2(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Gt=typeof Object.is=="function"?Object.is:k2;function Zi(e,t){if(Gt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!sd.call(t,i)||!Gt(e[i],t[i]))return!1}return!0}function fh(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function hh(e,t){var n=fh(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=fh(n)}}function t0(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?t0(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function n0(){for(var e=window,t=Mo();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Mo(e.document)}return t}function dp(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function j2(e){var t=n0(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&t0(n.ownerDocument.documentElement,n)){if(r!==null&&dp(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,a=Math.min(r.start,i);r=r.end===void 0?a:Math.min(r.end,i),!e.extend&&a>r&&(i=r,r=a,a=i),i=hh(n,a);var o=hh(n,r);i&&o&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),a>r?(e.addRange(t),e.extend(o.node,o.offset)):(t.setEnd(o.node,o.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var S2=wn&&"documentMode"in document&&11>=document.documentMode,hs=null,jd=null,zi=null,Sd=!1;function mh(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Sd||hs==null||hs!==Mo(r)||(r=hs,"selectionStart"in r&&dp(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),zi&&Zi(zi,r)||(zi=r,r=Fo(jd,"onSelect"),0<r.length&&(t=new op("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=hs)))}function qa(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var ms={animationend:qa("Animation","AnimationEnd"),animationiteration:qa("Animation","AnimationIteration"),animationstart:qa("Animation","AnimationStart"),transitionend:qa("Transition","TransitionEnd")},fc={},r0={};wn&&(r0=document.createElement("div").style,"AnimationEvent"in window||(delete ms.animationend.animation,delete ms.animationiteration.animation,delete ms.animationstart.animation),"TransitionEvent"in window||delete ms.transitionend.transition);function bl(e){if(fc[e])return fc[e];if(!ms[e])return e;var t=ms[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in r0)return fc[e]=t[n];return e}var s0=bl("animationend"),i0=bl("animationiteration"),a0=bl("animationstart"),o0=bl("transitionend"),l0=new Map,gh="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function dr(e,t){l0.set(e,t),Qr(t,[e])}for(var hc=0;hc<gh.length;hc++){var mc=gh[hc],N2=mc.toLowerCase(),T2=mc[0].toUpperCase()+mc.slice(1);dr(N2,"on"+T2)}dr(s0,"onAnimationEnd");dr(i0,"onAnimationIteration");dr(a0,"onAnimationStart");dr("dblclick","onDoubleClick");dr("focusin","onFocus");dr("focusout","onBlur");dr(o0,"onTransitionEnd");Gs("onMouseEnter",["mouseout","mouseover"]);Gs("onMouseLeave",["mouseout","mouseover"]);Gs("onPointerEnter",["pointerout","pointerover"]);Gs("onPointerLeave",["pointerout","pointerover"]);Qr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Qr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Qr("onBeforeInput",["compositionend","keypress","textInput","paste"]);Qr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Qr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Qr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ci="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),E2=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ci));function xh(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Nb(r,t,void 0,e),e.currentTarget=null}function c0(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var a=void 0;if(t)for(var o=r.length-1;0<=o;o--){var l=r[o],c=l.instance,d=l.currentTarget;if(l=l.listener,c!==a&&i.isPropagationStopped())break e;xh(i,l,d),a=c}else for(o=0;o<r.length;o++){if(l=r[o],c=l.instance,d=l.currentTarget,l=l.listener,c!==a&&i.isPropagationStopped())break e;xh(i,l,d),a=c}}}if(Lo)throw e=vd,Lo=!1,vd=null,e}function ae(e,t){var n=t[Ad];n===void 0&&(n=t[Ad]=new Set);var r=e+"__bubble";n.has(r)||(d0(t,e,2,!1),n.add(r))}function gc(e,t,n){var r=0;t&&(r|=4),d0(n,e,r,t)}var Ya="_reactListening"+Math.random().toString(36).slice(2);function ea(e){if(!e[Ya]){e[Ya]=!0,xx.forEach(function(n){n!=="selectionchange"&&(E2.has(n)||gc(n,!1,e),gc(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Ya]||(t[Ya]=!0,gc("selectionchange",!1,t))}}function d0(e,t,n,r){switch(Kx(t)){case 1:var i=Bb;break;case 4:i=Ub;break;default:i=ip}n=i.bind(null,t,n,e),i=void 0,!yd||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function xc(e,t,n,r,i){var a=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var c=o.tag;if((c===3||c===4)&&(c=o.stateNode.containerInfo,c===i||c.nodeType===8&&c.parentNode===i))return;o=o.return}for(;l!==null;){if(o=jr(l),o===null)return;if(c=o.tag,c===5||c===6){r=a=o;continue e}l=l.parentNode}}r=r.return}Ix(function(){var d=a,u=tp(n),p=[];e:{var f=l0.get(e);if(f!==void 0){var h=op,m=e;switch(e){case"keypress":if(xo(n)===0)break e;case"keydown":case"keyup":h=r2;break;case"focusin":m="focus",h=dc;break;case"focusout":m="blur",h=dc;break;case"beforeblur":case"afterblur":h=dc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":h=ih;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":h=Gb;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":h=a2;break;case s0:case i0:case a0:h=Qb;break;case o0:h=l2;break;case"scroll":h=Hb;break;case"wheel":h=d2;break;case"copy":case"cut":case"paste":h=Yb;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":h=oh}var y=(t&4)!==0,k=!y&&e==="scroll",x=y?f!==null?f+"Capture":null:f;y=[];for(var g=d,v;g!==null;){v=g;var w=v.stateNode;if(v.tag===5&&w!==null&&(v=w,x!==null&&(w=Qi(g,x),w!=null&&y.push(ta(g,w,v)))),k)break;g=g.return}0<y.length&&(f=new h(f,m,null,n,u),p.push({event:f,listeners:y}))}}if(!(t&7)){e:{if(f=e==="mouseover"||e==="pointerover",h=e==="mouseout"||e==="pointerout",f&&n!==gd&&(m=n.relatedTarget||n.fromElement)&&(jr(m)||m[kn]))break e;if((h||f)&&(f=u.window===u?u:(f=u.ownerDocument)?f.defaultView||f.parentWindow:window,h?(m=n.relatedTarget||n.toElement,h=d,m=m?jr(m):null,m!==null&&(k=qr(m),m!==k||m.tag!==5&&m.tag!==6)&&(m=null)):(h=null,m=d),h!==m)){if(y=ih,w="onMouseLeave",x="onMouseEnter",g="mouse",(e==="pointerout"||e==="pointerover")&&(y=oh,w="onPointerLeave",x="onPointerEnter",g="pointer"),k=h==null?f:gs(h),v=m==null?f:gs(m),f=new y(w,g+"leave",h,n,u),f.target=k,f.relatedTarget=v,w=null,jr(u)===d&&(y=new y(x,g+"enter",m,n,u),y.target=v,y.relatedTarget=k,w=y),k=w,h&&m)t:{for(y=h,x=m,g=0,v=y;v;v=ss(v))g++;for(v=0,w=x;w;w=ss(w))v++;for(;0<g-v;)y=ss(y),g--;for(;0<v-g;)x=ss(x),v--;for(;g--;){if(y===x||x!==null&&y===x.alternate)break t;y=ss(y),x=ss(x)}y=null}else y=null;h!==null&&yh(p,f,h,y,!1),m!==null&&k!==null&&yh(p,k,m,y,!0)}}e:{if(f=d?gs(d):window,h=f.nodeName&&f.nodeName.toLowerCase(),h==="select"||h==="input"&&f.type==="file")var N=x2;else if(dh(f))if(Zx)N=w2;else{N=v2;var A=y2}else(h=f.nodeName)&&h.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(N=b2);if(N&&(N=N(e,d))){Jx(p,N,n,u);break e}A&&A(e,f,d),e==="focusout"&&(A=f._wrapperState)&&A.controlled&&f.type==="number"&&ud(f,"number",f.value)}switch(A=d?gs(d):window,e){case"focusin":(dh(A)||A.contentEditable==="true")&&(hs=A,jd=d,zi=null);break;case"focusout":zi=jd=hs=null;break;case"mousedown":Sd=!0;break;case"contextmenu":case"mouseup":case"dragend":Sd=!1,mh(p,n,u);break;case"selectionchange":if(S2)break;case"keydown":case"keyup":mh(p,n,u)}var C;if(cp)e:{switch(e){case"compositionstart":var E="onCompositionStart";break e;case"compositionend":E="onCompositionEnd";break e;case"compositionupdate":E="onCompositionUpdate";break e}E=void 0}else fs?Yx(e,n)&&(E="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(E="onCompositionStart");E&&(qx&&n.locale!=="ko"&&(fs||E!=="onCompositionStart"?E==="onCompositionEnd"&&fs&&(C=Qx()):(Qn=u,ap="value"in Qn?Qn.value:Qn.textContent,fs=!0)),A=Fo(d,E),0<A.length&&(E=new ah(E,e,null,n,u),p.push({event:E,listeners:A}),C?E.data=C:(C=Xx(n),C!==null&&(E.data=C)))),(C=p2?f2(e,n):h2(e,n))&&(d=Fo(d,"onBeforeInput"),0<d.length&&(u=new ah("onBeforeInput","beforeinput",null,n,u),p.push({event:u,listeners:d}),u.data=C))}c0(p,t)})}function ta(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Fo(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,a=i.stateNode;i.tag===5&&a!==null&&(i=a,a=Qi(e,n),a!=null&&r.unshift(ta(e,a,i)),a=Qi(e,t),a!=null&&r.push(ta(e,a,i))),e=e.return}return r}function ss(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function yh(e,t,n,r,i){for(var a=t._reactName,o=[];n!==null&&n!==r;){var l=n,c=l.alternate,d=l.stateNode;if(c!==null&&c===r)break;l.tag===5&&d!==null&&(l=d,i?(c=Qi(n,a),c!=null&&o.unshift(ta(n,c,l))):i||(c=Qi(n,a),c!=null&&o.push(ta(n,c,l)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var C2=/\r\n?/g,A2=/\u0000|\uFFFD/g;function vh(e){return(typeof e=="string"?e:""+e).replace(C2,`
`).replace(A2,"")}function Xa(e,t,n){if(t=vh(t),vh(e)!==t&&n)throw Error(R(425))}function Vo(){}var Nd=null,Td=null;function Ed(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Cd=typeof setTimeout=="function"?setTimeout:void 0,P2=typeof clearTimeout=="function"?clearTimeout:void 0,bh=typeof Promise=="function"?Promise:void 0,R2=typeof queueMicrotask=="function"?queueMicrotask:typeof bh<"u"?function(e){return bh.resolve(null).then(e).catch(M2)}:Cd;function M2(e){setTimeout(function(){throw e})}function yc(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),Xi(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Xi(t)}function er(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function wh(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var ni=Math.random().toString(36).slice(2),rn="__reactFiber$"+ni,na="__reactProps$"+ni,kn="__reactContainer$"+ni,Ad="__reactEvents$"+ni,I2="__reactListeners$"+ni,L2="__reactHandles$"+ni;function jr(e){var t=e[rn];if(t)return t;for(var n=e.parentNode;n;){if(t=n[kn]||n[rn]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=wh(e);e!==null;){if(n=e[rn])return n;e=wh(e)}return t}e=n,n=e.parentNode}return null}function Ta(e){return e=e[rn]||e[kn],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function gs(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(R(33))}function wl(e){return e[na]||null}var Pd=[],xs=-1;function ur(e){return{current:e}}function oe(e){0>xs||(e.current=Pd[xs],Pd[xs]=null,xs--)}function se(e,t){xs++,Pd[xs]=e.current,e.current=t}var or={},Qe=ur(or),ut=ur(!1),Hr=or;function Ws(e,t){var n=e.type.contextTypes;if(!n)return or;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},a;for(a in n)i[a]=t[a];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function pt(e){return e=e.childContextTypes,e!=null}function Bo(){oe(ut),oe(Qe)}function kh(e,t,n){if(Qe.current!==or)throw Error(R(168));se(Qe,t),se(ut,n)}function u0(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(R(108,yb(e)||"Unknown",i));return fe({},n,r)}function Uo(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||or,Hr=Qe.current,se(Qe,e),se(ut,ut.current),!0}function jh(e,t,n){var r=e.stateNode;if(!r)throw Error(R(169));n?(e=u0(e,t,Hr),r.__reactInternalMemoizedMergedChildContext=e,oe(ut),oe(Qe),se(Qe,e)):oe(ut),se(ut,n)}var mn=null,kl=!1,vc=!1;function p0(e){mn===null?mn=[e]:mn.push(e)}function D2(e){kl=!0,p0(e)}function pr(){if(!vc&&mn!==null){vc=!0;var e=0,t=te;try{var n=mn;for(te=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}mn=null,kl=!1}catch(i){throw mn!==null&&(mn=mn.slice(e+1)),_x(np,pr),i}finally{te=t,vc=!1}}return null}var ys=[],vs=0,Ho=null,$o=0,Tt=[],Et=0,$r=null,yn=1,vn="";function br(e,t){ys[vs++]=$o,ys[vs++]=Ho,Ho=e,$o=t}function f0(e,t,n){Tt[Et++]=yn,Tt[Et++]=vn,Tt[Et++]=$r,$r=e;var r=yn;e=vn;var i=32-Ut(r)-1;r&=~(1<<i),n+=1;var a=32-Ut(t)+i;if(30<a){var o=i-i%5;a=(r&(1<<o)-1).toString(32),r>>=o,i-=o,yn=1<<32-Ut(t)+i|n<<i|r,vn=a+e}else yn=1<<a|n<<i|r,vn=e}function up(e){e.return!==null&&(br(e,1),f0(e,1,0))}function pp(e){for(;e===Ho;)Ho=ys[--vs],ys[vs]=null,$o=ys[--vs],ys[vs]=null;for(;e===$r;)$r=Tt[--Et],Tt[Et]=null,vn=Tt[--Et],Tt[Et]=null,yn=Tt[--Et],Tt[Et]=null}var vt=null,yt=null,ce=!1,Bt=null;function h0(e,t){var n=Ct(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Sh(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,vt=e,yt=er(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,vt=e,yt=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=$r!==null?{id:yn,overflow:vn}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Ct(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,vt=e,yt=null,!0):!1;default:return!1}}function Rd(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Md(e){if(ce){var t=yt;if(t){var n=t;if(!Sh(e,t)){if(Rd(e))throw Error(R(418));t=er(n.nextSibling);var r=vt;t&&Sh(e,t)?h0(r,n):(e.flags=e.flags&-4097|2,ce=!1,vt=e)}}else{if(Rd(e))throw Error(R(418));e.flags=e.flags&-4097|2,ce=!1,vt=e}}}function Nh(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;vt=e}function Ja(e){if(e!==vt)return!1;if(!ce)return Nh(e),ce=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Ed(e.type,e.memoizedProps)),t&&(t=yt)){if(Rd(e))throw m0(),Error(R(418));for(;t;)h0(e,t),t=er(t.nextSibling)}if(Nh(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(R(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){yt=er(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}yt=null}}else yt=vt?er(e.stateNode.nextSibling):null;return!0}function m0(){for(var e=yt;e;)e=er(e.nextSibling)}function Ks(){yt=vt=null,ce=!1}function fp(e){Bt===null?Bt=[e]:Bt.push(e)}var z2=Nn.ReactCurrentBatchConfig;function gi(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(R(309));var r=n.stateNode}if(!r)throw Error(R(147,e));var i=r,a=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===a?t.ref:(t=function(o){var l=i.refs;o===null?delete l[a]:l[a]=o},t._stringRef=a,t)}if(typeof e!="string")throw Error(R(284));if(!n._owner)throw Error(R(290,e))}return e}function Za(e,t){throw e=Object.prototype.toString.call(t),Error(R(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Th(e){var t=e._init;return t(e._payload)}function g0(e){function t(x,g){if(e){var v=x.deletions;v===null?(x.deletions=[g],x.flags|=16):v.push(g)}}function n(x,g){if(!e)return null;for(;g!==null;)t(x,g),g=g.sibling;return null}function r(x,g){for(x=new Map;g!==null;)g.key!==null?x.set(g.key,g):x.set(g.index,g),g=g.sibling;return x}function i(x,g){return x=sr(x,g),x.index=0,x.sibling=null,x}function a(x,g,v){return x.index=v,e?(v=x.alternate,v!==null?(v=v.index,v<g?(x.flags|=2,g):v):(x.flags|=2,g)):(x.flags|=1048576,g)}function o(x){return e&&x.alternate===null&&(x.flags|=2),x}function l(x,g,v,w){return g===null||g.tag!==6?(g=Tc(v,x.mode,w),g.return=x,g):(g=i(g,v),g.return=x,g)}function c(x,g,v,w){var N=v.type;return N===ps?u(x,g,v.props.children,w,v.key):g!==null&&(g.elementType===N||typeof N=="object"&&N!==null&&N.$$typeof===Dn&&Th(N)===g.type)?(w=i(g,v.props),w.ref=gi(x,g,v),w.return=x,w):(w=So(v.type,v.key,v.props,null,x.mode,w),w.ref=gi(x,g,v),w.return=x,w)}function d(x,g,v,w){return g===null||g.tag!==4||g.stateNode.containerInfo!==v.containerInfo||g.stateNode.implementation!==v.implementation?(g=Ec(v,x.mode,w),g.return=x,g):(g=i(g,v.children||[]),g.return=x,g)}function u(x,g,v,w,N){return g===null||g.tag!==7?(g=Fr(v,x.mode,w,N),g.return=x,g):(g=i(g,v),g.return=x,g)}function p(x,g,v){if(typeof g=="string"&&g!==""||typeof g=="number")return g=Tc(""+g,x.mode,v),g.return=x,g;if(typeof g=="object"&&g!==null){switch(g.$$typeof){case Ua:return v=So(g.type,g.key,g.props,null,x.mode,v),v.ref=gi(x,null,g),v.return=x,v;case us:return g=Ec(g,x.mode,v),g.return=x,g;case Dn:var w=g._init;return p(x,w(g._payload),v)}if(Ti(g)||ui(g))return g=Fr(g,x.mode,v,null),g.return=x,g;Za(x,g)}return null}function f(x,g,v,w){var N=g!==null?g.key:null;if(typeof v=="string"&&v!==""||typeof v=="number")return N!==null?null:l(x,g,""+v,w);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Ua:return v.key===N?c(x,g,v,w):null;case us:return v.key===N?d(x,g,v,w):null;case Dn:return N=v._init,f(x,g,N(v._payload),w)}if(Ti(v)||ui(v))return N!==null?null:u(x,g,v,w,null);Za(x,v)}return null}function h(x,g,v,w,N){if(typeof w=="string"&&w!==""||typeof w=="number")return x=x.get(v)||null,l(g,x,""+w,N);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case Ua:return x=x.get(w.key===null?v:w.key)||null,c(g,x,w,N);case us:return x=x.get(w.key===null?v:w.key)||null,d(g,x,w,N);case Dn:var A=w._init;return h(x,g,v,A(w._payload),N)}if(Ti(w)||ui(w))return x=x.get(v)||null,u(g,x,w,N,null);Za(g,w)}return null}function m(x,g,v,w){for(var N=null,A=null,C=g,E=g=0,D=null;C!==null&&E<v.length;E++){C.index>E?(D=C,C=null):D=C.sibling;var P=f(x,C,v[E],w);if(P===null){C===null&&(C=D);break}e&&C&&P.alternate===null&&t(x,C),g=a(P,g,E),A===null?N=P:A.sibling=P,A=P,C=D}if(E===v.length)return n(x,C),ce&&br(x,E),N;if(C===null){for(;E<v.length;E++)C=p(x,v[E],w),C!==null&&(g=a(C,g,E),A===null?N=C:A.sibling=C,A=C);return ce&&br(x,E),N}for(C=r(x,C);E<v.length;E++)D=h(C,x,E,v[E],w),D!==null&&(e&&D.alternate!==null&&C.delete(D.key===null?E:D.key),g=a(D,g,E),A===null?N=D:A.sibling=D,A=D);return e&&C.forEach(function(z){return t(x,z)}),ce&&br(x,E),N}function y(x,g,v,w){var N=ui(v);if(typeof N!="function")throw Error(R(150));if(v=N.call(v),v==null)throw Error(R(151));for(var A=N=null,C=g,E=g=0,D=null,P=v.next();C!==null&&!P.done;E++,P=v.next()){C.index>E?(D=C,C=null):D=C.sibling;var z=f(x,C,P.value,w);if(z===null){C===null&&(C=D);break}e&&C&&z.alternate===null&&t(x,C),g=a(z,g,E),A===null?N=z:A.sibling=z,A=z,C=D}if(P.done)return n(x,C),ce&&br(x,E),N;if(C===null){for(;!P.done;E++,P=v.next())P=p(x,P.value,w),P!==null&&(g=a(P,g,E),A===null?N=P:A.sibling=P,A=P);return ce&&br(x,E),N}for(C=r(x,C);!P.done;E++,P=v.next())P=h(C,x,E,P.value,w),P!==null&&(e&&P.alternate!==null&&C.delete(P.key===null?E:P.key),g=a(P,g,E),A===null?N=P:A.sibling=P,A=P);return e&&C.forEach(function(W){return t(x,W)}),ce&&br(x,E),N}function k(x,g,v,w){if(typeof v=="object"&&v!==null&&v.type===ps&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case Ua:e:{for(var N=v.key,A=g;A!==null;){if(A.key===N){if(N=v.type,N===ps){if(A.tag===7){n(x,A.sibling),g=i(A,v.props.children),g.return=x,x=g;break e}}else if(A.elementType===N||typeof N=="object"&&N!==null&&N.$$typeof===Dn&&Th(N)===A.type){n(x,A.sibling),g=i(A,v.props),g.ref=gi(x,A,v),g.return=x,x=g;break e}n(x,A);break}else t(x,A);A=A.sibling}v.type===ps?(g=Fr(v.props.children,x.mode,w,v.key),g.return=x,x=g):(w=So(v.type,v.key,v.props,null,x.mode,w),w.ref=gi(x,g,v),w.return=x,x=w)}return o(x);case us:e:{for(A=v.key;g!==null;){if(g.key===A)if(g.tag===4&&g.stateNode.containerInfo===v.containerInfo&&g.stateNode.implementation===v.implementation){n(x,g.sibling),g=i(g,v.children||[]),g.return=x,x=g;break e}else{n(x,g);break}else t(x,g);g=g.sibling}g=Ec(v,x.mode,w),g.return=x,x=g}return o(x);case Dn:return A=v._init,k(x,g,A(v._payload),w)}if(Ti(v))return m(x,g,v,w);if(ui(v))return y(x,g,v,w);Za(x,v)}return typeof v=="string"&&v!==""||typeof v=="number"?(v=""+v,g!==null&&g.tag===6?(n(x,g.sibling),g=i(g,v),g.return=x,x=g):(n(x,g),g=Tc(v,x.mode,w),g.return=x,x=g),o(x)):n(x,g)}return k}var Qs=g0(!0),x0=g0(!1),Go=ur(null),Wo=null,bs=null,hp=null;function mp(){hp=bs=Wo=null}function gp(e){var t=Go.current;oe(Go),e._currentValue=t}function Id(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Ps(e,t){Wo=e,hp=bs=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(dt=!0),e.firstContext=null)}function Mt(e){var t=e._currentValue;if(hp!==e)if(e={context:e,memoizedValue:t,next:null},bs===null){if(Wo===null)throw Error(R(308));bs=e,Wo.dependencies={lanes:0,firstContext:e}}else bs=bs.next=e;return t}var Sr=null;function xp(e){Sr===null?Sr=[e]:Sr.push(e)}function y0(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,xp(t)):(n.next=i.next,i.next=n),t.interleaved=n,jn(e,r)}function jn(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var zn=!1;function yp(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function v0(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function bn(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function tr(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,Z&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,jn(e,n)}return i=r.interleaved,i===null?(t.next=t,xp(r)):(t.next=i.next,i.next=t),r.interleaved=t,jn(e,n)}function yo(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,rp(e,n)}}function Eh(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};a===null?i=a=o:a=a.next=o,n=n.next}while(n!==null);a===null?i=a=t:a=a.next=t}else i=a=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:a,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Ko(e,t,n,r){var i=e.updateQueue;zn=!1;var a=i.firstBaseUpdate,o=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var c=l,d=c.next;c.next=null,o===null?a=d:o.next=d,o=c;var u=e.alternate;u!==null&&(u=u.updateQueue,l=u.lastBaseUpdate,l!==o&&(l===null?u.firstBaseUpdate=d:l.next=d,u.lastBaseUpdate=c))}if(a!==null){var p=i.baseState;o=0,u=d=c=null,l=a;do{var f=l.lane,h=l.eventTime;if((r&f)===f){u!==null&&(u=u.next={eventTime:h,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var m=e,y=l;switch(f=t,h=n,y.tag){case 1:if(m=y.payload,typeof m=="function"){p=m.call(h,p,f);break e}p=m;break e;case 3:m.flags=m.flags&-65537|128;case 0:if(m=y.payload,f=typeof m=="function"?m.call(h,p,f):m,f==null)break e;p=fe({},p,f);break e;case 2:zn=!0}}l.callback!==null&&l.lane!==0&&(e.flags|=64,f=i.effects,f===null?i.effects=[l]:f.push(l))}else h={eventTime:h,lane:f,tag:l.tag,payload:l.payload,callback:l.callback,next:null},u===null?(d=u=h,c=p):u=u.next=h,o|=f;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;f=l,l=f.next,f.next=null,i.lastBaseUpdate=f,i.shared.pending=null}}while(!0);if(u===null&&(c=p),i.baseState=c,i.firstBaseUpdate=d,i.lastBaseUpdate=u,t=i.shared.interleaved,t!==null){i=t;do o|=i.lane,i=i.next;while(i!==t)}else a===null&&(i.shared.lanes=0);Wr|=o,e.lanes=o,e.memoizedState=p}}function Ch(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(R(191,i));i.call(r)}}}var Ea={},an=ur(Ea),ra=ur(Ea),sa=ur(Ea);function Nr(e){if(e===Ea)throw Error(R(174));return e}function vp(e,t){switch(se(sa,t),se(ra,e),se(an,Ea),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:fd(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=fd(t,e)}oe(an),se(an,t)}function qs(){oe(an),oe(ra),oe(sa)}function b0(e){Nr(sa.current);var t=Nr(an.current),n=fd(t,e.type);t!==n&&(se(ra,e),se(an,n))}function bp(e){ra.current===e&&(oe(an),oe(ra))}var ue=ur(0);function Qo(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var bc=[];function wp(){for(var e=0;e<bc.length;e++)bc[e]._workInProgressVersionPrimary=null;bc.length=0}var vo=Nn.ReactCurrentDispatcher,wc=Nn.ReactCurrentBatchConfig,Gr=0,pe=null,Ae=null,Ie=null,qo=!1,_i=!1,ia=0,_2=0;function $e(){throw Error(R(321))}function kp(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Gt(e[n],t[n]))return!1;return!0}function jp(e,t,n,r,i,a){if(Gr=a,pe=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,vo.current=e===null||e.memoizedState===null?B2:U2,e=n(r,i),_i){a=0;do{if(_i=!1,ia=0,25<=a)throw Error(R(301));a+=1,Ie=Ae=null,t.updateQueue=null,vo.current=H2,e=n(r,i)}while(_i)}if(vo.current=Yo,t=Ae!==null&&Ae.next!==null,Gr=0,Ie=Ae=pe=null,qo=!1,t)throw Error(R(300));return e}function Sp(){var e=ia!==0;return ia=0,e}function Xt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ie===null?pe.memoizedState=Ie=e:Ie=Ie.next=e,Ie}function It(){if(Ae===null){var e=pe.alternate;e=e!==null?e.memoizedState:null}else e=Ae.next;var t=Ie===null?pe.memoizedState:Ie.next;if(t!==null)Ie=t,Ae=e;else{if(e===null)throw Error(R(310));Ae=e,e={memoizedState:Ae.memoizedState,baseState:Ae.baseState,baseQueue:Ae.baseQueue,queue:Ae.queue,next:null},Ie===null?pe.memoizedState=Ie=e:Ie=Ie.next=e}return Ie}function aa(e,t){return typeof t=="function"?t(e):t}function kc(e){var t=It(),n=t.queue;if(n===null)throw Error(R(311));n.lastRenderedReducer=e;var r=Ae,i=r.baseQueue,a=n.pending;if(a!==null){if(i!==null){var o=i.next;i.next=a.next,a.next=o}r.baseQueue=i=a,n.pending=null}if(i!==null){a=i.next,r=r.baseState;var l=o=null,c=null,d=a;do{var u=d.lane;if((Gr&u)===u)c!==null&&(c=c.next={lane:0,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null}),r=d.hasEagerState?d.eagerState:e(r,d.action);else{var p={lane:u,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null};c===null?(l=c=p,o=r):c=c.next=p,pe.lanes|=u,Wr|=u}d=d.next}while(d!==null&&d!==a);c===null?o=r:c.next=l,Gt(r,t.memoizedState)||(dt=!0),t.memoizedState=r,t.baseState=o,t.baseQueue=c,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do a=i.lane,pe.lanes|=a,Wr|=a,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function jc(e){var t=It(),n=t.queue;if(n===null)throw Error(R(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,a=t.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do a=e(a,o.action),o=o.next;while(o!==i);Gt(a,t.memoizedState)||(dt=!0),t.memoizedState=a,t.baseQueue===null&&(t.baseState=a),n.lastRenderedState=a}return[a,r]}function w0(){}function k0(e,t){var n=pe,r=It(),i=t(),a=!Gt(r.memoizedState,i);if(a&&(r.memoizedState=i,dt=!0),r=r.queue,Np(N0.bind(null,n,r,e),[e]),r.getSnapshot!==t||a||Ie!==null&&Ie.memoizedState.tag&1){if(n.flags|=2048,oa(9,S0.bind(null,n,r,i,t),void 0,null),Le===null)throw Error(R(349));Gr&30||j0(n,t,i)}return i}function j0(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=pe.updateQueue,t===null?(t={lastEffect:null,stores:null},pe.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function S0(e,t,n,r){t.value=n,t.getSnapshot=r,T0(t)&&E0(e)}function N0(e,t,n){return n(function(){T0(t)&&E0(e)})}function T0(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Gt(e,n)}catch{return!0}}function E0(e){var t=jn(e,1);t!==null&&Ht(t,e,1,-1)}function Ah(e){var t=Xt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:aa,lastRenderedState:e},t.queue=e,e=e.dispatch=V2.bind(null,pe,e),[t.memoizedState,e]}function oa(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=pe.updateQueue,t===null?(t={lastEffect:null,stores:null},pe.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function C0(){return It().memoizedState}function bo(e,t,n,r){var i=Xt();pe.flags|=e,i.memoizedState=oa(1|t,n,void 0,r===void 0?null:r)}function jl(e,t,n,r){var i=It();r=r===void 0?null:r;var a=void 0;if(Ae!==null){var o=Ae.memoizedState;if(a=o.destroy,r!==null&&kp(r,o.deps)){i.memoizedState=oa(t,n,a,r);return}}pe.flags|=e,i.memoizedState=oa(1|t,n,a,r)}function Ph(e,t){return bo(8390656,8,e,t)}function Np(e,t){return jl(2048,8,e,t)}function A0(e,t){return jl(4,2,e,t)}function P0(e,t){return jl(4,4,e,t)}function R0(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function M0(e,t,n){return n=n!=null?n.concat([e]):null,jl(4,4,R0.bind(null,t,e),n)}function Tp(){}function I0(e,t){var n=It();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&kp(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function L0(e,t){var n=It();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&kp(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function D0(e,t,n){return Gr&21?(Gt(n,t)||(n=Vx(),pe.lanes|=n,Wr|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,dt=!0),e.memoizedState=n)}function O2(e,t){var n=te;te=n!==0&&4>n?n:4,e(!0);var r=wc.transition;wc.transition={};try{e(!1),t()}finally{te=n,wc.transition=r}}function z0(){return It().memoizedState}function F2(e,t,n){var r=rr(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},_0(e))O0(t,n);else if(n=y0(e,t,n,r),n!==null){var i=rt();Ht(n,e,r,i),F0(n,t,r)}}function V2(e,t,n){var r=rr(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(_0(e))O0(t,i);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var o=t.lastRenderedState,l=a(o,n);if(i.hasEagerState=!0,i.eagerState=l,Gt(l,o)){var c=t.interleaved;c===null?(i.next=i,xp(t)):(i.next=c.next,c.next=i),t.interleaved=i;return}}catch{}finally{}n=y0(e,t,i,r),n!==null&&(i=rt(),Ht(n,e,r,i),F0(n,t,r))}}function _0(e){var t=e.alternate;return e===pe||t!==null&&t===pe}function O0(e,t){_i=qo=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function F0(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,rp(e,n)}}var Yo={readContext:Mt,useCallback:$e,useContext:$e,useEffect:$e,useImperativeHandle:$e,useInsertionEffect:$e,useLayoutEffect:$e,useMemo:$e,useReducer:$e,useRef:$e,useState:$e,useDebugValue:$e,useDeferredValue:$e,useTransition:$e,useMutableSource:$e,useSyncExternalStore:$e,useId:$e,unstable_isNewReconciler:!1},B2={readContext:Mt,useCallback:function(e,t){return Xt().memoizedState=[e,t===void 0?null:t],e},useContext:Mt,useEffect:Ph,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,bo(4194308,4,R0.bind(null,t,e),n)},useLayoutEffect:function(e,t){return bo(4194308,4,e,t)},useInsertionEffect:function(e,t){return bo(4,2,e,t)},useMemo:function(e,t){var n=Xt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Xt();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=F2.bind(null,pe,e),[r.memoizedState,e]},useRef:function(e){var t=Xt();return e={current:e},t.memoizedState=e},useState:Ah,useDebugValue:Tp,useDeferredValue:function(e){return Xt().memoizedState=e},useTransition:function(){var e=Ah(!1),t=e[0];return e=O2.bind(null,e[1]),Xt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=pe,i=Xt();if(ce){if(n===void 0)throw Error(R(407));n=n()}else{if(n=t(),Le===null)throw Error(R(349));Gr&30||j0(r,t,n)}i.memoizedState=n;var a={value:n,getSnapshot:t};return i.queue=a,Ph(N0.bind(null,r,a,e),[e]),r.flags|=2048,oa(9,S0.bind(null,r,a,n,t),void 0,null),n},useId:function(){var e=Xt(),t=Le.identifierPrefix;if(ce){var n=vn,r=yn;n=(r&~(1<<32-Ut(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=ia++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=_2++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},U2={readContext:Mt,useCallback:I0,useContext:Mt,useEffect:Np,useImperativeHandle:M0,useInsertionEffect:A0,useLayoutEffect:P0,useMemo:L0,useReducer:kc,useRef:C0,useState:function(){return kc(aa)},useDebugValue:Tp,useDeferredValue:function(e){var t=It();return D0(t,Ae.memoizedState,e)},useTransition:function(){var e=kc(aa)[0],t=It().memoizedState;return[e,t]},useMutableSource:w0,useSyncExternalStore:k0,useId:z0,unstable_isNewReconciler:!1},H2={readContext:Mt,useCallback:I0,useContext:Mt,useEffect:Np,useImperativeHandle:M0,useInsertionEffect:A0,useLayoutEffect:P0,useMemo:L0,useReducer:jc,useRef:C0,useState:function(){return jc(aa)},useDebugValue:Tp,useDeferredValue:function(e){var t=It();return Ae===null?t.memoizedState=e:D0(t,Ae.memoizedState,e)},useTransition:function(){var e=jc(aa)[0],t=It().memoizedState;return[e,t]},useMutableSource:w0,useSyncExternalStore:k0,useId:z0,unstable_isNewReconciler:!1};function Ot(e,t){if(e&&e.defaultProps){t=fe({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Ld(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:fe({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Sl={isMounted:function(e){return(e=e._reactInternals)?qr(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=rt(),i=rr(e),a=bn(r,i);a.payload=t,n!=null&&(a.callback=n),t=tr(e,a,i),t!==null&&(Ht(t,e,i,r),yo(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=rt(),i=rr(e),a=bn(r,i);a.tag=1,a.payload=t,n!=null&&(a.callback=n),t=tr(e,a,i),t!==null&&(Ht(t,e,i,r),yo(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=rt(),r=rr(e),i=bn(n,r);i.tag=2,t!=null&&(i.callback=t),t=tr(e,i,r),t!==null&&(Ht(t,e,r,n),yo(t,e,r))}};function Rh(e,t,n,r,i,a,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,a,o):t.prototype&&t.prototype.isPureReactComponent?!Zi(n,r)||!Zi(i,a):!0}function V0(e,t,n){var r=!1,i=or,a=t.contextType;return typeof a=="object"&&a!==null?a=Mt(a):(i=pt(t)?Hr:Qe.current,r=t.contextTypes,a=(r=r!=null)?Ws(e,i):or),t=new t(n,a),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Sl,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=a),t}function Mh(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Sl.enqueueReplaceState(t,t.state,null)}function Dd(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},yp(e);var a=t.contextType;typeof a=="object"&&a!==null?i.context=Mt(a):(a=pt(t)?Hr:Qe.current,i.context=Ws(e,a)),i.state=e.memoizedState,a=t.getDerivedStateFromProps,typeof a=="function"&&(Ld(e,t,a,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&Sl.enqueueReplaceState(i,i.state,null),Ko(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function Ys(e,t){try{var n="",r=t;do n+=xb(r),r=r.return;while(r);var i=n}catch(a){i=`
Error generating stack: `+a.message+`
`+a.stack}return{value:e,source:t,stack:i,digest:null}}function Sc(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function zd(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var $2=typeof WeakMap=="function"?WeakMap:Map;function B0(e,t,n){n=bn(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Jo||(Jo=!0,Wd=r),zd(e,t)},n}function U0(e,t,n){n=bn(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){zd(e,t)}}var a=e.stateNode;return a!==null&&typeof a.componentDidCatch=="function"&&(n.callback=function(){zd(e,t),typeof r!="function"&&(nr===null?nr=new Set([this]):nr.add(this));var o=t.stack;this.componentDidCatch(t.value,{componentStack:o!==null?o:""})}),n}function Ih(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new $2;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=sw.bind(null,e,t,n),t.then(e,e))}function Lh(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Dh(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=bn(-1,1),t.tag=2,tr(n,t,1))),n.lanes|=1),e)}var G2=Nn.ReactCurrentOwner,dt=!1;function et(e,t,n,r){t.child=e===null?x0(t,null,n,r):Qs(t,e.child,n,r)}function zh(e,t,n,r,i){n=n.render;var a=t.ref;return Ps(t,i),r=jp(e,t,n,r,a,i),n=Sp(),e!==null&&!dt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Sn(e,t,i)):(ce&&n&&up(t),t.flags|=1,et(e,t,r,i),t.child)}function _h(e,t,n,r,i){if(e===null){var a=n.type;return typeof a=="function"&&!Lp(a)&&a.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=a,H0(e,t,a,r,i)):(e=So(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,!(e.lanes&i)){var o=a.memoizedProps;if(n=n.compare,n=n!==null?n:Zi,n(o,r)&&e.ref===t.ref)return Sn(e,t,i)}return t.flags|=1,e=sr(a,r),e.ref=t.ref,e.return=t,t.child=e}function H0(e,t,n,r,i){if(e!==null){var a=e.memoizedProps;if(Zi(a,r)&&e.ref===t.ref)if(dt=!1,t.pendingProps=r=a,(e.lanes&i)!==0)e.flags&131072&&(dt=!0);else return t.lanes=e.lanes,Sn(e,t,i)}return _d(e,t,n,r,i)}function $0(e,t,n){var r=t.pendingProps,i=r.children,a=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},se(ks,mt),mt|=n;else{if(!(n&1073741824))return e=a!==null?a.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,se(ks,mt),mt|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=a!==null?a.baseLanes:n,se(ks,mt),mt|=r}else a!==null?(r=a.baseLanes|n,t.memoizedState=null):r=n,se(ks,mt),mt|=r;return et(e,t,i,n),t.child}function G0(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function _d(e,t,n,r,i){var a=pt(n)?Hr:Qe.current;return a=Ws(t,a),Ps(t,i),n=jp(e,t,n,r,a,i),r=Sp(),e!==null&&!dt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Sn(e,t,i)):(ce&&r&&up(t),t.flags|=1,et(e,t,n,i),t.child)}function Oh(e,t,n,r,i){if(pt(n)){var a=!0;Uo(t)}else a=!1;if(Ps(t,i),t.stateNode===null)wo(e,t),V0(t,n,r),Dd(t,n,r,i),r=!0;else if(e===null){var o=t.stateNode,l=t.memoizedProps;o.props=l;var c=o.context,d=n.contextType;typeof d=="object"&&d!==null?d=Mt(d):(d=pt(n)?Hr:Qe.current,d=Ws(t,d));var u=n.getDerivedStateFromProps,p=typeof u=="function"||typeof o.getSnapshotBeforeUpdate=="function";p||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==r||c!==d)&&Mh(t,o,r,d),zn=!1;var f=t.memoizedState;o.state=f,Ko(t,r,o,i),c=t.memoizedState,l!==r||f!==c||ut.current||zn?(typeof u=="function"&&(Ld(t,n,u,r),c=t.memoizedState),(l=zn||Rh(t,n,l,r,f,c,d))?(p||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(t.flags|=4194308)):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=c),o.props=r,o.state=c,o.context=d,r=l):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{o=t.stateNode,v0(e,t),l=t.memoizedProps,d=t.type===t.elementType?l:Ot(t.type,l),o.props=d,p=t.pendingProps,f=o.context,c=n.contextType,typeof c=="object"&&c!==null?c=Mt(c):(c=pt(n)?Hr:Qe.current,c=Ws(t,c));var h=n.getDerivedStateFromProps;(u=typeof h=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==p||f!==c)&&Mh(t,o,r,c),zn=!1,f=t.memoizedState,o.state=f,Ko(t,r,o,i);var m=t.memoizedState;l!==p||f!==m||ut.current||zn?(typeof h=="function"&&(Ld(t,n,h,r),m=t.memoizedState),(d=zn||Rh(t,n,d,r,f,m,c)||!1)?(u||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,m,c),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,m,c)),typeof o.componentDidUpdate=="function"&&(t.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=m),o.props=r,o.state=m,o.context=c,r=d):(typeof o.componentDidUpdate!="function"||l===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),r=!1)}return Od(e,t,n,r,a,i)}function Od(e,t,n,r,i,a){G0(e,t);var o=(t.flags&128)!==0;if(!r&&!o)return i&&jh(t,n,!1),Sn(e,t,a);r=t.stateNode,G2.current=t;var l=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&o?(t.child=Qs(t,e.child,null,a),t.child=Qs(t,null,l,a)):et(e,t,l,a),t.memoizedState=r.state,i&&jh(t,n,!0),t.child}function W0(e){var t=e.stateNode;t.pendingContext?kh(e,t.pendingContext,t.pendingContext!==t.context):t.context&&kh(e,t.context,!1),vp(e,t.containerInfo)}function Fh(e,t,n,r,i){return Ks(),fp(i),t.flags|=256,et(e,t,n,r),t.child}var Fd={dehydrated:null,treeContext:null,retryLane:0};function Vd(e){return{baseLanes:e,cachePool:null,transitions:null}}function K0(e,t,n){var r=t.pendingProps,i=ue.current,a=!1,o=(t.flags&128)!==0,l;if((l=o)||(l=e!==null&&e.memoizedState===null?!1:(i&2)!==0),l?(a=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),se(ue,i&1),e===null)return Md(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(o=r.children,e=r.fallback,a?(r=t.mode,a=t.child,o={mode:"hidden",children:o},!(r&1)&&a!==null?(a.childLanes=0,a.pendingProps=o):a=El(o,r,0,null),e=Fr(e,r,n,null),a.return=t,e.return=t,a.sibling=e,t.child=a,t.child.memoizedState=Vd(n),t.memoizedState=Fd,e):Ep(t,o));if(i=e.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return W2(e,t,o,r,l,i,n);if(a){a=r.fallback,o=t.mode,i=e.child,l=i.sibling;var c={mode:"hidden",children:r.children};return!(o&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=c,t.deletions=null):(r=sr(i,c),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?a=sr(l,a):(a=Fr(a,o,n,null),a.flags|=2),a.return=t,r.return=t,r.sibling=a,t.child=r,r=a,a=t.child,o=e.child.memoizedState,o=o===null?Vd(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},a.memoizedState=o,a.childLanes=e.childLanes&~n,t.memoizedState=Fd,r}return a=e.child,e=a.sibling,r=sr(a,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Ep(e,t){return t=El({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function eo(e,t,n,r){return r!==null&&fp(r),Qs(t,e.child,null,n),e=Ep(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function W2(e,t,n,r,i,a,o){if(n)return t.flags&256?(t.flags&=-257,r=Sc(Error(R(422))),eo(e,t,o,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(a=r.fallback,i=t.mode,r=El({mode:"visible",children:r.children},i,0,null),a=Fr(a,i,o,null),a.flags|=2,r.return=t,a.return=t,r.sibling=a,t.child=r,t.mode&1&&Qs(t,e.child,null,o),t.child.memoizedState=Vd(o),t.memoizedState=Fd,a);if(!(t.mode&1))return eo(e,t,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,a=Error(R(419)),r=Sc(a,r,void 0),eo(e,t,o,r)}if(l=(o&e.childLanes)!==0,dt||l){if(r=Le,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==a.retryLane&&(a.retryLane=i,jn(e,i),Ht(r,e,i,-1))}return Ip(),r=Sc(Error(R(421))),eo(e,t,o,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=iw.bind(null,e),i._reactRetry=t,null):(e=a.treeContext,yt=er(i.nextSibling),vt=t,ce=!0,Bt=null,e!==null&&(Tt[Et++]=yn,Tt[Et++]=vn,Tt[Et++]=$r,yn=e.id,vn=e.overflow,$r=t),t=Ep(t,r.children),t.flags|=4096,t)}function Vh(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Id(e.return,t,n)}function Nc(e,t,n,r,i){var a=e.memoizedState;a===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(a.isBackwards=t,a.rendering=null,a.renderingStartTime=0,a.last=r,a.tail=n,a.tailMode=i)}function Q0(e,t,n){var r=t.pendingProps,i=r.revealOrder,a=r.tail;if(et(e,t,r.children,n),r=ue.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Vh(e,n,t);else if(e.tag===19)Vh(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(se(ue,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&Qo(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),Nc(t,!1,i,n,a);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&Qo(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Nc(t,!0,n,null,a);break;case"together":Nc(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function wo(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Sn(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Wr|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(R(153));if(t.child!==null){for(e=t.child,n=sr(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=sr(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function K2(e,t,n){switch(t.tag){case 3:W0(t),Ks();break;case 5:b0(t);break;case 1:pt(t.type)&&Uo(t);break;case 4:vp(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;se(Go,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(se(ue,ue.current&1),t.flags|=128,null):n&t.child.childLanes?K0(e,t,n):(se(ue,ue.current&1),e=Sn(e,t,n),e!==null?e.sibling:null);se(ue,ue.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Q0(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),se(ue,ue.current),r)break;return null;case 22:case 23:return t.lanes=0,$0(e,t,n)}return Sn(e,t,n)}var q0,Bd,Y0,X0;q0=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Bd=function(){};Y0=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,Nr(an.current);var a=null;switch(n){case"input":i=cd(e,i),r=cd(e,r),a=[];break;case"select":i=fe({},i,{value:void 0}),r=fe({},r,{value:void 0}),a=[];break;case"textarea":i=pd(e,i),r=pd(e,r),a=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Vo)}hd(n,r);var o;n=null;for(d in i)if(!r.hasOwnProperty(d)&&i.hasOwnProperty(d)&&i[d]!=null)if(d==="style"){var l=i[d];for(o in l)l.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else d!=="dangerouslySetInnerHTML"&&d!=="children"&&d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&d!=="autoFocus"&&(Wi.hasOwnProperty(d)?a||(a=[]):(a=a||[]).push(d,null));for(d in r){var c=r[d];if(l=i!=null?i[d]:void 0,r.hasOwnProperty(d)&&c!==l&&(c!=null||l!=null))if(d==="style")if(l){for(o in l)!l.hasOwnProperty(o)||c&&c.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in c)c.hasOwnProperty(o)&&l[o]!==c[o]&&(n||(n={}),n[o]=c[o])}else n||(a||(a=[]),a.push(d,n)),n=c;else d==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,l=l?l.__html:void 0,c!=null&&l!==c&&(a=a||[]).push(d,c)):d==="children"?typeof c!="string"&&typeof c!="number"||(a=a||[]).push(d,""+c):d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&(Wi.hasOwnProperty(d)?(c!=null&&d==="onScroll"&&ae("scroll",e),a||l===c||(a=[])):(a=a||[]).push(d,c))}n&&(a=a||[]).push("style",n);var d=a;(t.updateQueue=d)&&(t.flags|=4)}};X0=function(e,t,n,r){n!==r&&(t.flags|=4)};function xi(e,t){if(!ce)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Ge(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Q2(e,t,n){var r=t.pendingProps;switch(pp(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ge(t),null;case 1:return pt(t.type)&&Bo(),Ge(t),null;case 3:return r=t.stateNode,qs(),oe(ut),oe(Qe),wp(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Ja(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Bt!==null&&(qd(Bt),Bt=null))),Bd(e,t),Ge(t),null;case 5:bp(t);var i=Nr(sa.current);if(n=t.type,e!==null&&t.stateNode!=null)Y0(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(R(166));return Ge(t),null}if(e=Nr(an.current),Ja(t)){r=t.stateNode,n=t.type;var a=t.memoizedProps;switch(r[rn]=t,r[na]=a,e=(t.mode&1)!==0,n){case"dialog":ae("cancel",r),ae("close",r);break;case"iframe":case"object":case"embed":ae("load",r);break;case"video":case"audio":for(i=0;i<Ci.length;i++)ae(Ci[i],r);break;case"source":ae("error",r);break;case"img":case"image":case"link":ae("error",r),ae("load",r);break;case"details":ae("toggle",r);break;case"input":qf(r,a),ae("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!a.multiple},ae("invalid",r);break;case"textarea":Xf(r,a),ae("invalid",r)}hd(n,a),i=null;for(var o in a)if(a.hasOwnProperty(o)){var l=a[o];o==="children"?typeof l=="string"?r.textContent!==l&&(a.suppressHydrationWarning!==!0&&Xa(r.textContent,l,e),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(a.suppressHydrationWarning!==!0&&Xa(r.textContent,l,e),i=["children",""+l]):Wi.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&ae("scroll",r)}switch(n){case"input":Ha(r),Yf(r,a,!0);break;case"textarea":Ha(r),Jf(r);break;case"select":case"option":break;default:typeof a.onClick=="function"&&(r.onclick=Vo)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Nx(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=o.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=o.createElement(n,{is:r.is}):(e=o.createElement(n),n==="select"&&(o=e,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):e=o.createElementNS(e,n),e[rn]=t,e[na]=r,q0(e,t,!1,!1),t.stateNode=e;e:{switch(o=md(n,r),n){case"dialog":ae("cancel",e),ae("close",e),i=r;break;case"iframe":case"object":case"embed":ae("load",e),i=r;break;case"video":case"audio":for(i=0;i<Ci.length;i++)ae(Ci[i],e);i=r;break;case"source":ae("error",e),i=r;break;case"img":case"image":case"link":ae("error",e),ae("load",e),i=r;break;case"details":ae("toggle",e),i=r;break;case"input":qf(e,r),i=cd(e,r),ae("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=fe({},r,{value:void 0}),ae("invalid",e);break;case"textarea":Xf(e,r),i=pd(e,r),ae("invalid",e);break;default:i=r}hd(n,i),l=i;for(a in l)if(l.hasOwnProperty(a)){var c=l[a];a==="style"?Cx(e,c):a==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,c!=null&&Tx(e,c)):a==="children"?typeof c=="string"?(n!=="textarea"||c!=="")&&Ki(e,c):typeof c=="number"&&Ki(e,""+c):a!=="suppressContentEditableWarning"&&a!=="suppressHydrationWarning"&&a!=="autoFocus"&&(Wi.hasOwnProperty(a)?c!=null&&a==="onScroll"&&ae("scroll",e):c!=null&&Xu(e,a,c,o))}switch(n){case"input":Ha(e),Yf(e,r,!1);break;case"textarea":Ha(e),Jf(e);break;case"option":r.value!=null&&e.setAttribute("value",""+ar(r.value));break;case"select":e.multiple=!!r.multiple,a=r.value,a!=null?Ts(e,!!r.multiple,a,!1):r.defaultValue!=null&&Ts(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=Vo)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Ge(t),null;case 6:if(e&&t.stateNode!=null)X0(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(R(166));if(n=Nr(sa.current),Nr(an.current),Ja(t)){if(r=t.stateNode,n=t.memoizedProps,r[rn]=t,(a=r.nodeValue!==n)&&(e=vt,e!==null))switch(e.tag){case 3:Xa(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Xa(r.nodeValue,n,(e.mode&1)!==0)}a&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[rn]=t,t.stateNode=r}return Ge(t),null;case 13:if(oe(ue),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(ce&&yt!==null&&t.mode&1&&!(t.flags&128))m0(),Ks(),t.flags|=98560,a=!1;else if(a=Ja(t),r!==null&&r.dehydrated!==null){if(e===null){if(!a)throw Error(R(318));if(a=t.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(R(317));a[rn]=t}else Ks(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Ge(t),a=!1}else Bt!==null&&(qd(Bt),Bt=null),a=!0;if(!a)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||ue.current&1?Pe===0&&(Pe=3):Ip())),t.updateQueue!==null&&(t.flags|=4),Ge(t),null);case 4:return qs(),Bd(e,t),e===null&&ea(t.stateNode.containerInfo),Ge(t),null;case 10:return gp(t.type._context),Ge(t),null;case 17:return pt(t.type)&&Bo(),Ge(t),null;case 19:if(oe(ue),a=t.memoizedState,a===null)return Ge(t),null;if(r=(t.flags&128)!==0,o=a.rendering,o===null)if(r)xi(a,!1);else{if(Pe!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=Qo(e),o!==null){for(t.flags|=128,xi(a,!1),r=o.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)a=n,e=r,a.flags&=14680066,o=a.alternate,o===null?(a.childLanes=0,a.lanes=e,a.child=null,a.subtreeFlags=0,a.memoizedProps=null,a.memoizedState=null,a.updateQueue=null,a.dependencies=null,a.stateNode=null):(a.childLanes=o.childLanes,a.lanes=o.lanes,a.child=o.child,a.subtreeFlags=0,a.deletions=null,a.memoizedProps=o.memoizedProps,a.memoizedState=o.memoizedState,a.updateQueue=o.updateQueue,a.type=o.type,e=o.dependencies,a.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return se(ue,ue.current&1|2),t.child}e=e.sibling}a.tail!==null&&je()>Xs&&(t.flags|=128,r=!0,xi(a,!1),t.lanes=4194304)}else{if(!r)if(e=Qo(o),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),xi(a,!0),a.tail===null&&a.tailMode==="hidden"&&!o.alternate&&!ce)return Ge(t),null}else 2*je()-a.renderingStartTime>Xs&&n!==1073741824&&(t.flags|=128,r=!0,xi(a,!1),t.lanes=4194304);a.isBackwards?(o.sibling=t.child,t.child=o):(n=a.last,n!==null?n.sibling=o:t.child=o,a.last=o)}return a.tail!==null?(t=a.tail,a.rendering=t,a.tail=t.sibling,a.renderingStartTime=je(),t.sibling=null,n=ue.current,se(ue,r?n&1|2:n&1),t):(Ge(t),null);case 22:case 23:return Mp(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?mt&1073741824&&(Ge(t),t.subtreeFlags&6&&(t.flags|=8192)):Ge(t),null;case 24:return null;case 25:return null}throw Error(R(156,t.tag))}function q2(e,t){switch(pp(t),t.tag){case 1:return pt(t.type)&&Bo(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return qs(),oe(ut),oe(Qe),wp(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return bp(t),null;case 13:if(oe(ue),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(R(340));Ks()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return oe(ue),null;case 4:return qs(),null;case 10:return gp(t.type._context),null;case 22:case 23:return Mp(),null;case 24:return null;default:return null}}var to=!1,Ke=!1,Y2=typeof WeakSet=="function"?WeakSet:Set,O=null;function ws(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){ve(e,t,r)}else n.current=null}function Ud(e,t,n){try{n()}catch(r){ve(e,t,r)}}var Bh=!1;function X2(e,t){if(Nd=_o,e=n0(),dp(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,a=r.focusNode;r=r.focusOffset;try{n.nodeType,a.nodeType}catch{n=null;break e}var o=0,l=-1,c=-1,d=0,u=0,p=e,f=null;t:for(;;){for(var h;p!==n||i!==0&&p.nodeType!==3||(l=o+i),p!==a||r!==0&&p.nodeType!==3||(c=o+r),p.nodeType===3&&(o+=p.nodeValue.length),(h=p.firstChild)!==null;)f=p,p=h;for(;;){if(p===e)break t;if(f===n&&++d===i&&(l=o),f===a&&++u===r&&(c=o),(h=p.nextSibling)!==null)break;p=f,f=p.parentNode}p=h}n=l===-1||c===-1?null:{start:l,end:c}}else n=null}n=n||{start:0,end:0}}else n=null;for(Td={focusedElem:e,selectionRange:n},_o=!1,O=t;O!==null;)if(t=O,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,O=e;else for(;O!==null;){t=O;try{var m=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(m!==null){var y=m.memoizedProps,k=m.memoizedState,x=t.stateNode,g=x.getSnapshotBeforeUpdate(t.elementType===t.type?y:Ot(t.type,y),k);x.__reactInternalSnapshotBeforeUpdate=g}break;case 3:var v=t.stateNode.containerInfo;v.nodeType===1?v.textContent="":v.nodeType===9&&v.documentElement&&v.removeChild(v.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(R(163))}}catch(w){ve(t,t.return,w)}if(e=t.sibling,e!==null){e.return=t.return,O=e;break}O=t.return}return m=Bh,Bh=!1,m}function Oi(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var a=i.destroy;i.destroy=void 0,a!==void 0&&Ud(t,n,a)}i=i.next}while(i!==r)}}function Nl(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Hd(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function J0(e){var t=e.alternate;t!==null&&(e.alternate=null,J0(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[rn],delete t[na],delete t[Ad],delete t[I2],delete t[L2])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Z0(e){return e.tag===5||e.tag===3||e.tag===4}function Uh(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Z0(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function $d(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Vo));else if(r!==4&&(e=e.child,e!==null))for($d(e,t,n),e=e.sibling;e!==null;)$d(e,t,n),e=e.sibling}function Gd(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Gd(e,t,n),e=e.sibling;e!==null;)Gd(e,t,n),e=e.sibling}var ze=null,Vt=!1;function Pn(e,t,n){for(n=n.child;n!==null;)ey(e,t,n),n=n.sibling}function ey(e,t,n){if(sn&&typeof sn.onCommitFiberUnmount=="function")try{sn.onCommitFiberUnmount(xl,n)}catch{}switch(n.tag){case 5:Ke||ws(n,t);case 6:var r=ze,i=Vt;ze=null,Pn(e,t,n),ze=r,Vt=i,ze!==null&&(Vt?(e=ze,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):ze.removeChild(n.stateNode));break;case 18:ze!==null&&(Vt?(e=ze,n=n.stateNode,e.nodeType===8?yc(e.parentNode,n):e.nodeType===1&&yc(e,n),Xi(e)):yc(ze,n.stateNode));break;case 4:r=ze,i=Vt,ze=n.stateNode.containerInfo,Vt=!0,Pn(e,t,n),ze=r,Vt=i;break;case 0:case 11:case 14:case 15:if(!Ke&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var a=i,o=a.destroy;a=a.tag,o!==void 0&&(a&2||a&4)&&Ud(n,t,o),i=i.next}while(i!==r)}Pn(e,t,n);break;case 1:if(!Ke&&(ws(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){ve(n,t,l)}Pn(e,t,n);break;case 21:Pn(e,t,n);break;case 22:n.mode&1?(Ke=(r=Ke)||n.memoizedState!==null,Pn(e,t,n),Ke=r):Pn(e,t,n);break;default:Pn(e,t,n)}}function Hh(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Y2),t.forEach(function(r){var i=aw.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Dt(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var a=e,o=t,l=o;e:for(;l!==null;){switch(l.tag){case 5:ze=l.stateNode,Vt=!1;break e;case 3:ze=l.stateNode.containerInfo,Vt=!0;break e;case 4:ze=l.stateNode.containerInfo,Vt=!0;break e}l=l.return}if(ze===null)throw Error(R(160));ey(a,o,i),ze=null,Vt=!1;var c=i.alternate;c!==null&&(c.return=null),i.return=null}catch(d){ve(i,t,d)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)ty(t,e),t=t.sibling}function ty(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Dt(t,e),Qt(e),r&4){try{Oi(3,e,e.return),Nl(3,e)}catch(y){ve(e,e.return,y)}try{Oi(5,e,e.return)}catch(y){ve(e,e.return,y)}}break;case 1:Dt(t,e),Qt(e),r&512&&n!==null&&ws(n,n.return);break;case 5:if(Dt(t,e),Qt(e),r&512&&n!==null&&ws(n,n.return),e.flags&32){var i=e.stateNode;try{Ki(i,"")}catch(y){ve(e,e.return,y)}}if(r&4&&(i=e.stateNode,i!=null)){var a=e.memoizedProps,o=n!==null?n.memoizedProps:a,l=e.type,c=e.updateQueue;if(e.updateQueue=null,c!==null)try{l==="input"&&a.type==="radio"&&a.name!=null&&jx(i,a),md(l,o);var d=md(l,a);for(o=0;o<c.length;o+=2){var u=c[o],p=c[o+1];u==="style"?Cx(i,p):u==="dangerouslySetInnerHTML"?Tx(i,p):u==="children"?Ki(i,p):Xu(i,u,p,d)}switch(l){case"input":dd(i,a);break;case"textarea":Sx(i,a);break;case"select":var f=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!a.multiple;var h=a.value;h!=null?Ts(i,!!a.multiple,h,!1):f!==!!a.multiple&&(a.defaultValue!=null?Ts(i,!!a.multiple,a.defaultValue,!0):Ts(i,!!a.multiple,a.multiple?[]:"",!1))}i[na]=a}catch(y){ve(e,e.return,y)}}break;case 6:if(Dt(t,e),Qt(e),r&4){if(e.stateNode===null)throw Error(R(162));i=e.stateNode,a=e.memoizedProps;try{i.nodeValue=a}catch(y){ve(e,e.return,y)}}break;case 3:if(Dt(t,e),Qt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Xi(t.containerInfo)}catch(y){ve(e,e.return,y)}break;case 4:Dt(t,e),Qt(e);break;case 13:Dt(t,e),Qt(e),i=e.child,i.flags&8192&&(a=i.memoizedState!==null,i.stateNode.isHidden=a,!a||i.alternate!==null&&i.alternate.memoizedState!==null||(Pp=je())),r&4&&Hh(e);break;case 22:if(u=n!==null&&n.memoizedState!==null,e.mode&1?(Ke=(d=Ke)||u,Dt(t,e),Ke=d):Dt(t,e),Qt(e),r&8192){if(d=e.memoizedState!==null,(e.stateNode.isHidden=d)&&!u&&e.mode&1)for(O=e,u=e.child;u!==null;){for(p=O=u;O!==null;){switch(f=O,h=f.child,f.tag){case 0:case 11:case 14:case 15:Oi(4,f,f.return);break;case 1:ws(f,f.return);var m=f.stateNode;if(typeof m.componentWillUnmount=="function"){r=f,n=f.return;try{t=r,m.props=t.memoizedProps,m.state=t.memoizedState,m.componentWillUnmount()}catch(y){ve(r,n,y)}}break;case 5:ws(f,f.return);break;case 22:if(f.memoizedState!==null){Gh(p);continue}}h!==null?(h.return=f,O=h):Gh(p)}u=u.sibling}e:for(u=null,p=e;;){if(p.tag===5){if(u===null){u=p;try{i=p.stateNode,d?(a=i.style,typeof a.setProperty=="function"?a.setProperty("display","none","important"):a.display="none"):(l=p.stateNode,c=p.memoizedProps.style,o=c!=null&&c.hasOwnProperty("display")?c.display:null,l.style.display=Ex("display",o))}catch(y){ve(e,e.return,y)}}}else if(p.tag===6){if(u===null)try{p.stateNode.nodeValue=d?"":p.memoizedProps}catch(y){ve(e,e.return,y)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===e)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===e)break e;for(;p.sibling===null;){if(p.return===null||p.return===e)break e;u===p&&(u=null),p=p.return}u===p&&(u=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:Dt(t,e),Qt(e),r&4&&Hh(e);break;case 21:break;default:Dt(t,e),Qt(e)}}function Qt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Z0(n)){var r=n;break e}n=n.return}throw Error(R(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Ki(i,""),r.flags&=-33);var a=Uh(e);Gd(e,a,i);break;case 3:case 4:var o=r.stateNode.containerInfo,l=Uh(e);$d(e,l,o);break;default:throw Error(R(161))}}catch(c){ve(e,e.return,c)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function J2(e,t,n){O=e,ny(e)}function ny(e,t,n){for(var r=(e.mode&1)!==0;O!==null;){var i=O,a=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||to;if(!o){var l=i.alternate,c=l!==null&&l.memoizedState!==null||Ke;l=to;var d=Ke;if(to=o,(Ke=c)&&!d)for(O=i;O!==null;)o=O,c=o.child,o.tag===22&&o.memoizedState!==null?Wh(i):c!==null?(c.return=o,O=c):Wh(i);for(;a!==null;)O=a,ny(a),a=a.sibling;O=i,to=l,Ke=d}$h(e)}else i.subtreeFlags&8772&&a!==null?(a.return=i,O=a):$h(e)}}function $h(e){for(;O!==null;){var t=O;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:Ke||Nl(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!Ke)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:Ot(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var a=t.updateQueue;a!==null&&Ch(t,a,r);break;case 3:var o=t.updateQueue;if(o!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Ch(t,o,n)}break;case 5:var l=t.stateNode;if(n===null&&t.flags&4){n=l;var c=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":c.autoFocus&&n.focus();break;case"img":c.src&&(n.src=c.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var d=t.alternate;if(d!==null){var u=d.memoizedState;if(u!==null){var p=u.dehydrated;p!==null&&Xi(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(R(163))}Ke||t.flags&512&&Hd(t)}catch(f){ve(t,t.return,f)}}if(t===e){O=null;break}if(n=t.sibling,n!==null){n.return=t.return,O=n;break}O=t.return}}function Gh(e){for(;O!==null;){var t=O;if(t===e){O=null;break}var n=t.sibling;if(n!==null){n.return=t.return,O=n;break}O=t.return}}function Wh(e){for(;O!==null;){var t=O;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Nl(4,t)}catch(c){ve(t,n,c)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(c){ve(t,i,c)}}var a=t.return;try{Hd(t)}catch(c){ve(t,a,c)}break;case 5:var o=t.return;try{Hd(t)}catch(c){ve(t,o,c)}}}catch(c){ve(t,t.return,c)}if(t===e){O=null;break}var l=t.sibling;if(l!==null){l.return=t.return,O=l;break}O=t.return}}var Z2=Math.ceil,Xo=Nn.ReactCurrentDispatcher,Cp=Nn.ReactCurrentOwner,Pt=Nn.ReactCurrentBatchConfig,Z=0,Le=null,Te=null,Be=0,mt=0,ks=ur(0),Pe=0,la=null,Wr=0,Tl=0,Ap=0,Fi=null,ct=null,Pp=0,Xs=1/0,hn=null,Jo=!1,Wd=null,nr=null,no=!1,qn=null,Zo=0,Vi=0,Kd=null,ko=-1,jo=0;function rt(){return Z&6?je():ko!==-1?ko:ko=je()}function rr(e){return e.mode&1?Z&2&&Be!==0?Be&-Be:z2.transition!==null?(jo===0&&(jo=Vx()),jo):(e=te,e!==0||(e=window.event,e=e===void 0?16:Kx(e.type)),e):1}function Ht(e,t,n,r){if(50<Vi)throw Vi=0,Kd=null,Error(R(185));Sa(e,n,r),(!(Z&2)||e!==Le)&&(e===Le&&(!(Z&2)&&(Tl|=n),Pe===4&&On(e,Be)),ft(e,r),n===1&&Z===0&&!(t.mode&1)&&(Xs=je()+500,kl&&pr()))}function ft(e,t){var n=e.callbackNode;zb(e,t);var r=zo(e,e===Le?Be:0);if(r===0)n!==null&&th(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&th(n),t===1)e.tag===0?D2(Kh.bind(null,e)):p0(Kh.bind(null,e)),R2(function(){!(Z&6)&&pr()}),n=null;else{switch(Bx(r)){case 1:n=np;break;case 4:n=Ox;break;case 16:n=Do;break;case 536870912:n=Fx;break;default:n=Do}n=dy(n,ry.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function ry(e,t){if(ko=-1,jo=0,Z&6)throw Error(R(327));var n=e.callbackNode;if(Rs()&&e.callbackNode!==n)return null;var r=zo(e,e===Le?Be:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=el(e,r);else{t=r;var i=Z;Z|=2;var a=iy();(Le!==e||Be!==t)&&(hn=null,Xs=je()+500,Or(e,t));do try{nw();break}catch(l){sy(e,l)}while(!0);mp(),Xo.current=a,Z=i,Te!==null?t=0:(Le=null,Be=0,t=Pe)}if(t!==0){if(t===2&&(i=bd(e),i!==0&&(r=i,t=Qd(e,i))),t===1)throw n=la,Or(e,0),On(e,r),ft(e,je()),n;if(t===6)On(e,r);else{if(i=e.current.alternate,!(r&30)&&!ew(i)&&(t=el(e,r),t===2&&(a=bd(e),a!==0&&(r=a,t=Qd(e,a))),t===1))throw n=la,Or(e,0),On(e,r),ft(e,je()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(R(345));case 2:wr(e,ct,hn);break;case 3:if(On(e,r),(r&130023424)===r&&(t=Pp+500-je(),10<t)){if(zo(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){rt(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=Cd(wr.bind(null,e,ct,hn),t);break}wr(e,ct,hn);break;case 4:if(On(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var o=31-Ut(r);a=1<<o,o=t[o],o>i&&(i=o),r&=~a}if(r=i,r=je()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Z2(r/1960))-r,10<r){e.timeoutHandle=Cd(wr.bind(null,e,ct,hn),r);break}wr(e,ct,hn);break;case 5:wr(e,ct,hn);break;default:throw Error(R(329))}}}return ft(e,je()),e.callbackNode===n?ry.bind(null,e):null}function Qd(e,t){var n=Fi;return e.current.memoizedState.isDehydrated&&(Or(e,t).flags|=256),e=el(e,t),e!==2&&(t=ct,ct=n,t!==null&&qd(t)),e}function qd(e){ct===null?ct=e:ct.push.apply(ct,e)}function ew(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],a=i.getSnapshot;i=i.value;try{if(!Gt(a(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function On(e,t){for(t&=~Ap,t&=~Tl,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Ut(t),r=1<<n;e[n]=-1,t&=~r}}function Kh(e){if(Z&6)throw Error(R(327));Rs();var t=zo(e,0);if(!(t&1))return ft(e,je()),null;var n=el(e,t);if(e.tag!==0&&n===2){var r=bd(e);r!==0&&(t=r,n=Qd(e,r))}if(n===1)throw n=la,Or(e,0),On(e,t),ft(e,je()),n;if(n===6)throw Error(R(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,wr(e,ct,hn),ft(e,je()),null}function Rp(e,t){var n=Z;Z|=1;try{return e(t)}finally{Z=n,Z===0&&(Xs=je()+500,kl&&pr())}}function Kr(e){qn!==null&&qn.tag===0&&!(Z&6)&&Rs();var t=Z;Z|=1;var n=Pt.transition,r=te;try{if(Pt.transition=null,te=1,e)return e()}finally{te=r,Pt.transition=n,Z=t,!(Z&6)&&pr()}}function Mp(){mt=ks.current,oe(ks)}function Or(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,P2(n)),Te!==null)for(n=Te.return;n!==null;){var r=n;switch(pp(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Bo();break;case 3:qs(),oe(ut),oe(Qe),wp();break;case 5:bp(r);break;case 4:qs();break;case 13:oe(ue);break;case 19:oe(ue);break;case 10:gp(r.type._context);break;case 22:case 23:Mp()}n=n.return}if(Le=e,Te=e=sr(e.current,null),Be=mt=t,Pe=0,la=null,Ap=Tl=Wr=0,ct=Fi=null,Sr!==null){for(t=0;t<Sr.length;t++)if(n=Sr[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,a=n.pending;if(a!==null){var o=a.next;a.next=i,r.next=o}n.pending=r}Sr=null}return e}function sy(e,t){do{var n=Te;try{if(mp(),vo.current=Yo,qo){for(var r=pe.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}qo=!1}if(Gr=0,Ie=Ae=pe=null,_i=!1,ia=0,Cp.current=null,n===null||n.return===null){Pe=1,la=t,Te=null;break}e:{var a=e,o=n.return,l=n,c=t;if(t=Be,l.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){var d=c,u=l,p=u.tag;if(!(u.mode&1)&&(p===0||p===11||p===15)){var f=u.alternate;f?(u.updateQueue=f.updateQueue,u.memoizedState=f.memoizedState,u.lanes=f.lanes):(u.updateQueue=null,u.memoizedState=null)}var h=Lh(o);if(h!==null){h.flags&=-257,Dh(h,o,l,a,t),h.mode&1&&Ih(a,d,t),t=h,c=d;var m=t.updateQueue;if(m===null){var y=new Set;y.add(c),t.updateQueue=y}else m.add(c);break e}else{if(!(t&1)){Ih(a,d,t),Ip();break e}c=Error(R(426))}}else if(ce&&l.mode&1){var k=Lh(o);if(k!==null){!(k.flags&65536)&&(k.flags|=256),Dh(k,o,l,a,t),fp(Ys(c,l));break e}}a=c=Ys(c,l),Pe!==4&&(Pe=2),Fi===null?Fi=[a]:Fi.push(a),a=o;do{switch(a.tag){case 3:a.flags|=65536,t&=-t,a.lanes|=t;var x=B0(a,c,t);Eh(a,x);break e;case 1:l=c;var g=a.type,v=a.stateNode;if(!(a.flags&128)&&(typeof g.getDerivedStateFromError=="function"||v!==null&&typeof v.componentDidCatch=="function"&&(nr===null||!nr.has(v)))){a.flags|=65536,t&=-t,a.lanes|=t;var w=U0(a,l,t);Eh(a,w);break e}}a=a.return}while(a!==null)}oy(n)}catch(N){t=N,Te===n&&n!==null&&(Te=n=n.return);continue}break}while(!0)}function iy(){var e=Xo.current;return Xo.current=Yo,e===null?Yo:e}function Ip(){(Pe===0||Pe===3||Pe===2)&&(Pe=4),Le===null||!(Wr&268435455)&&!(Tl&268435455)||On(Le,Be)}function el(e,t){var n=Z;Z|=2;var r=iy();(Le!==e||Be!==t)&&(hn=null,Or(e,t));do try{tw();break}catch(i){sy(e,i)}while(!0);if(mp(),Z=n,Xo.current=r,Te!==null)throw Error(R(261));return Le=null,Be=0,Pe}function tw(){for(;Te!==null;)ay(Te)}function nw(){for(;Te!==null&&!Eb();)ay(Te)}function ay(e){var t=cy(e.alternate,e,mt);e.memoizedProps=e.pendingProps,t===null?oy(e):Te=t,Cp.current=null}function oy(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=q2(n,t),n!==null){n.flags&=32767,Te=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Pe=6,Te=null;return}}else if(n=Q2(n,t,mt),n!==null){Te=n;return}if(t=t.sibling,t!==null){Te=t;return}Te=t=e}while(t!==null);Pe===0&&(Pe=5)}function wr(e,t,n){var r=te,i=Pt.transition;try{Pt.transition=null,te=1,rw(e,t,n,r)}finally{Pt.transition=i,te=r}return null}function rw(e,t,n,r){do Rs();while(qn!==null);if(Z&6)throw Error(R(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(R(177));e.callbackNode=null,e.callbackPriority=0;var a=n.lanes|n.childLanes;if(_b(e,a),e===Le&&(Te=Le=null,Be=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||no||(no=!0,dy(Do,function(){return Rs(),null})),a=(n.flags&15990)!==0,n.subtreeFlags&15990||a){a=Pt.transition,Pt.transition=null;var o=te;te=1;var l=Z;Z|=4,Cp.current=null,X2(e,n),ty(n,e),j2(Td),_o=!!Nd,Td=Nd=null,e.current=n,J2(n),Cb(),Z=l,te=o,Pt.transition=a}else e.current=n;if(no&&(no=!1,qn=e,Zo=i),a=e.pendingLanes,a===0&&(nr=null),Rb(n.stateNode),ft(e,je()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Jo)throw Jo=!1,e=Wd,Wd=null,e;return Zo&1&&e.tag!==0&&Rs(),a=e.pendingLanes,a&1?e===Kd?Vi++:(Vi=0,Kd=e):Vi=0,pr(),null}function Rs(){if(qn!==null){var e=Bx(Zo),t=Pt.transition,n=te;try{if(Pt.transition=null,te=16>e?16:e,qn===null)var r=!1;else{if(e=qn,qn=null,Zo=0,Z&6)throw Error(R(331));var i=Z;for(Z|=4,O=e.current;O!==null;){var a=O,o=a.child;if(O.flags&16){var l=a.deletions;if(l!==null){for(var c=0;c<l.length;c++){var d=l[c];for(O=d;O!==null;){var u=O;switch(u.tag){case 0:case 11:case 15:Oi(8,u,a)}var p=u.child;if(p!==null)p.return=u,O=p;else for(;O!==null;){u=O;var f=u.sibling,h=u.return;if(J0(u),u===d){O=null;break}if(f!==null){f.return=h,O=f;break}O=h}}}var m=a.alternate;if(m!==null){var y=m.child;if(y!==null){m.child=null;do{var k=y.sibling;y.sibling=null,y=k}while(y!==null)}}O=a}}if(a.subtreeFlags&2064&&o!==null)o.return=a,O=o;else e:for(;O!==null;){if(a=O,a.flags&2048)switch(a.tag){case 0:case 11:case 15:Oi(9,a,a.return)}var x=a.sibling;if(x!==null){x.return=a.return,O=x;break e}O=a.return}}var g=e.current;for(O=g;O!==null;){o=O;var v=o.child;if(o.subtreeFlags&2064&&v!==null)v.return=o,O=v;else e:for(o=g;O!==null;){if(l=O,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:Nl(9,l)}}catch(N){ve(l,l.return,N)}if(l===o){O=null;break e}var w=l.sibling;if(w!==null){w.return=l.return,O=w;break e}O=l.return}}if(Z=i,pr(),sn&&typeof sn.onPostCommitFiberRoot=="function")try{sn.onPostCommitFiberRoot(xl,e)}catch{}r=!0}return r}finally{te=n,Pt.transition=t}}return!1}function Qh(e,t,n){t=Ys(n,t),t=B0(e,t,1),e=tr(e,t,1),t=rt(),e!==null&&(Sa(e,1,t),ft(e,t))}function ve(e,t,n){if(e.tag===3)Qh(e,e,n);else for(;t!==null;){if(t.tag===3){Qh(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(nr===null||!nr.has(r))){e=Ys(n,e),e=U0(t,e,1),t=tr(t,e,1),e=rt(),t!==null&&(Sa(t,1,e),ft(t,e));break}}t=t.return}}function sw(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=rt(),e.pingedLanes|=e.suspendedLanes&n,Le===e&&(Be&n)===n&&(Pe===4||Pe===3&&(Be&130023424)===Be&&500>je()-Pp?Or(e,0):Ap|=n),ft(e,t)}function ly(e,t){t===0&&(e.mode&1?(t=Wa,Wa<<=1,!(Wa&130023424)&&(Wa=4194304)):t=1);var n=rt();e=jn(e,t),e!==null&&(Sa(e,t,n),ft(e,n))}function iw(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),ly(e,n)}function aw(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(R(314))}r!==null&&r.delete(t),ly(e,n)}var cy;cy=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||ut.current)dt=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return dt=!1,K2(e,t,n);dt=!!(e.flags&131072)}else dt=!1,ce&&t.flags&1048576&&f0(t,$o,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;wo(e,t),e=t.pendingProps;var i=Ws(t,Qe.current);Ps(t,n),i=jp(null,t,r,e,i,n);var a=Sp();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,pt(r)?(a=!0,Uo(t)):a=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,yp(t),i.updater=Sl,t.stateNode=i,i._reactInternals=t,Dd(t,r,e,n),t=Od(null,t,r,!0,a,n)):(t.tag=0,ce&&a&&up(t),et(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(wo(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=lw(r),e=Ot(r,e),i){case 0:t=_d(null,t,r,e,n);break e;case 1:t=Oh(null,t,r,e,n);break e;case 11:t=zh(null,t,r,e,n);break e;case 14:t=_h(null,t,r,Ot(r.type,e),n);break e}throw Error(R(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Ot(r,i),_d(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Ot(r,i),Oh(e,t,r,i,n);case 3:e:{if(W0(t),e===null)throw Error(R(387));r=t.pendingProps,a=t.memoizedState,i=a.element,v0(e,t),Ko(t,r,null,n);var o=t.memoizedState;if(r=o.element,a.isDehydrated)if(a={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},t.updateQueue.baseState=a,t.memoizedState=a,t.flags&256){i=Ys(Error(R(423)),t),t=Fh(e,t,r,n,i);break e}else if(r!==i){i=Ys(Error(R(424)),t),t=Fh(e,t,r,n,i);break e}else for(yt=er(t.stateNode.containerInfo.firstChild),vt=t,ce=!0,Bt=null,n=x0(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Ks(),r===i){t=Sn(e,t,n);break e}et(e,t,r,n)}t=t.child}return t;case 5:return b0(t),e===null&&Md(t),r=t.type,i=t.pendingProps,a=e!==null?e.memoizedProps:null,o=i.children,Ed(r,i)?o=null:a!==null&&Ed(r,a)&&(t.flags|=32),G0(e,t),et(e,t,o,n),t.child;case 6:return e===null&&Md(t),null;case 13:return K0(e,t,n);case 4:return vp(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Qs(t,null,r,n):et(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Ot(r,i),zh(e,t,r,i,n);case 7:return et(e,t,t.pendingProps,n),t.child;case 8:return et(e,t,t.pendingProps.children,n),t.child;case 12:return et(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,a=t.memoizedProps,o=i.value,se(Go,r._currentValue),r._currentValue=o,a!==null)if(Gt(a.value,o)){if(a.children===i.children&&!ut.current){t=Sn(e,t,n);break e}}else for(a=t.child,a!==null&&(a.return=t);a!==null;){var l=a.dependencies;if(l!==null){o=a.child;for(var c=l.firstContext;c!==null;){if(c.context===r){if(a.tag===1){c=bn(-1,n&-n),c.tag=2;var d=a.updateQueue;if(d!==null){d=d.shared;var u=d.pending;u===null?c.next=c:(c.next=u.next,u.next=c),d.pending=c}}a.lanes|=n,c=a.alternate,c!==null&&(c.lanes|=n),Id(a.return,n,t),l.lanes|=n;break}c=c.next}}else if(a.tag===10)o=a.type===t.type?null:a.child;else if(a.tag===18){if(o=a.return,o===null)throw Error(R(341));o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),Id(o,n,t),o=a.sibling}else o=a.child;if(o!==null)o.return=a;else for(o=a;o!==null;){if(o===t){o=null;break}if(a=o.sibling,a!==null){a.return=o.return,o=a;break}o=o.return}a=o}et(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,Ps(t,n),i=Mt(i),r=r(i),t.flags|=1,et(e,t,r,n),t.child;case 14:return r=t.type,i=Ot(r,t.pendingProps),i=Ot(r.type,i),_h(e,t,r,i,n);case 15:return H0(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Ot(r,i),wo(e,t),t.tag=1,pt(r)?(e=!0,Uo(t)):e=!1,Ps(t,n),V0(t,r,i),Dd(t,r,i,n),Od(null,t,r,!0,e,n);case 19:return Q0(e,t,n);case 22:return $0(e,t,n)}throw Error(R(156,t.tag))};function dy(e,t){return _x(e,t)}function ow(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ct(e,t,n,r){return new ow(e,t,n,r)}function Lp(e){return e=e.prototype,!(!e||!e.isReactComponent)}function lw(e){if(typeof e=="function")return Lp(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Zu)return 11;if(e===ep)return 14}return 2}function sr(e,t){var n=e.alternate;return n===null?(n=Ct(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function So(e,t,n,r,i,a){var o=2;if(r=e,typeof e=="function")Lp(e)&&(o=1);else if(typeof e=="string")o=5;else e:switch(e){case ps:return Fr(n.children,i,a,t);case Ju:o=8,i|=8;break;case id:return e=Ct(12,n,t,i|2),e.elementType=id,e.lanes=a,e;case ad:return e=Ct(13,n,t,i),e.elementType=ad,e.lanes=a,e;case od:return e=Ct(19,n,t,i),e.elementType=od,e.lanes=a,e;case bx:return El(n,i,a,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case yx:o=10;break e;case vx:o=9;break e;case Zu:o=11;break e;case ep:o=14;break e;case Dn:o=16,r=null;break e}throw Error(R(130,e==null?e:typeof e,""))}return t=Ct(o,n,t,i),t.elementType=e,t.type=r,t.lanes=a,t}function Fr(e,t,n,r){return e=Ct(7,e,r,t),e.lanes=n,e}function El(e,t,n,r){return e=Ct(22,e,r,t),e.elementType=bx,e.lanes=n,e.stateNode={isHidden:!1},e}function Tc(e,t,n){return e=Ct(6,e,null,t),e.lanes=n,e}function Ec(e,t,n){return t=Ct(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function cw(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=oc(0),this.expirationTimes=oc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=oc(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Dp(e,t,n,r,i,a,o,l,c){return e=new cw(e,t,n,l,c),t===1?(t=1,a===!0&&(t|=8)):t=0,a=Ct(3,null,null,t),e.current=a,a.stateNode=e,a.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},yp(a),e}function dw(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:us,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function uy(e){if(!e)return or;e=e._reactInternals;e:{if(qr(e)!==e||e.tag!==1)throw Error(R(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(pt(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(R(171))}if(e.tag===1){var n=e.type;if(pt(n))return u0(e,n,t)}return t}function py(e,t,n,r,i,a,o,l,c){return e=Dp(n,r,!0,e,i,a,o,l,c),e.context=uy(null),n=e.current,r=rt(),i=rr(n),a=bn(r,i),a.callback=t??null,tr(n,a,i),e.current.lanes=i,Sa(e,i,r),ft(e,r),e}function Cl(e,t,n,r){var i=t.current,a=rt(),o=rr(i);return n=uy(n),t.context===null?t.context=n:t.pendingContext=n,t=bn(a,o),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=tr(i,t,o),e!==null&&(Ht(e,i,o,a),yo(e,i,o)),o}function tl(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function qh(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function zp(e,t){qh(e,t),(e=e.alternate)&&qh(e,t)}function uw(){return null}var fy=typeof reportError=="function"?reportError:function(e){console.error(e)};function _p(e){this._internalRoot=e}Al.prototype.render=_p.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(R(409));Cl(e,t,null,null)};Al.prototype.unmount=_p.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Kr(function(){Cl(null,e,null,null)}),t[kn]=null}};function Al(e){this._internalRoot=e}Al.prototype.unstable_scheduleHydration=function(e){if(e){var t=$x();e={blockedOn:null,target:e,priority:t};for(var n=0;n<_n.length&&t!==0&&t<_n[n].priority;n++);_n.splice(n,0,e),n===0&&Wx(e)}};function Op(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Pl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Yh(){}function pw(e,t,n,r,i){if(i){if(typeof r=="function"){var a=r;r=function(){var d=tl(o);a.call(d)}}var o=py(t,r,e,0,null,!1,!1,"",Yh);return e._reactRootContainer=o,e[kn]=o.current,ea(e.nodeType===8?e.parentNode:e),Kr(),o}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var d=tl(c);l.call(d)}}var c=Dp(e,0,!1,null,null,!1,!1,"",Yh);return e._reactRootContainer=c,e[kn]=c.current,ea(e.nodeType===8?e.parentNode:e),Kr(function(){Cl(t,c,n,r)}),c}function Rl(e,t,n,r,i){var a=n._reactRootContainer;if(a){var o=a;if(typeof i=="function"){var l=i;i=function(){var c=tl(o);l.call(c)}}Cl(t,o,e,i)}else o=pw(n,t,e,i,r);return tl(o)}Ux=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Ei(t.pendingLanes);n!==0&&(rp(t,n|1),ft(t,je()),!(Z&6)&&(Xs=je()+500,pr()))}break;case 13:Kr(function(){var r=jn(e,1);if(r!==null){var i=rt();Ht(r,e,1,i)}}),zp(e,1)}};sp=function(e){if(e.tag===13){var t=jn(e,134217728);if(t!==null){var n=rt();Ht(t,e,134217728,n)}zp(e,134217728)}};Hx=function(e){if(e.tag===13){var t=rr(e),n=jn(e,t);if(n!==null){var r=rt();Ht(n,e,t,r)}zp(e,t)}};$x=function(){return te};Gx=function(e,t){var n=te;try{return te=e,t()}finally{te=n}};xd=function(e,t,n){switch(t){case"input":if(dd(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=wl(r);if(!i)throw Error(R(90));kx(r),dd(r,i)}}}break;case"textarea":Sx(e,n);break;case"select":t=n.value,t!=null&&Ts(e,!!n.multiple,t,!1)}};Rx=Rp;Mx=Kr;var fw={usingClientEntryPoint:!1,Events:[Ta,gs,wl,Ax,Px,Rp]},yi={findFiberByHostInstance:jr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},hw={bundleType:yi.bundleType,version:yi.version,rendererPackageName:yi.rendererPackageName,rendererConfig:yi.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Nn.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Dx(e),e===null?null:e.stateNode},findFiberByHostInstance:yi.findFiberByHostInstance||uw,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ro=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ro.isDisabled&&ro.supportsFiber)try{xl=ro.inject(hw),sn=ro}catch{}}kt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=fw;kt.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Op(t))throw Error(R(200));return dw(e,t,null,n)};kt.createRoot=function(e,t){if(!Op(e))throw Error(R(299));var n=!1,r="",i=fy;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=Dp(e,1,!1,null,null,n,!1,r,i),e[kn]=t.current,ea(e.nodeType===8?e.parentNode:e),new _p(t)};kt.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(R(188)):(e=Object.keys(e).join(","),Error(R(268,e)));return e=Dx(t),e=e===null?null:e.stateNode,e};kt.flushSync=function(e){return Kr(e)};kt.hydrate=function(e,t,n){if(!Pl(t))throw Error(R(200));return Rl(null,e,t,!0,n)};kt.hydrateRoot=function(e,t,n){if(!Op(e))throw Error(R(405));var r=n!=null&&n.hydratedSources||null,i=!1,a="",o=fy;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(a=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),t=py(t,null,e,1,n??null,i,!1,a,o),e[kn]=t.current,ea(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new Al(t)};kt.render=function(e,t,n){if(!Pl(t))throw Error(R(200));return Rl(null,e,t,!1,n)};kt.unmountComponentAtNode=function(e){if(!Pl(e))throw Error(R(40));return e._reactRootContainer?(Kr(function(){Rl(null,null,e,!1,function(){e._reactRootContainer=null,e[kn]=null})}),!0):!1};kt.unstable_batchedUpdates=Rp;kt.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Pl(n))throw Error(R(200));if(e==null||e._reactInternals===void 0)throw Error(R(38));return Rl(e,t,n,!1,r)};kt.version="18.3.1-next-f1338f8080-20240426";function hy(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(hy)}catch(e){console.error(e)}}hy(),hx.exports=kt;var mw=hx.exports,Xh=mw;rd.createRoot=Xh.createRoot,rd.hydrateRoot=Xh.hydrateRoot;const gw="modulepreload",xw=function(e){return"/"+e},Jh={},Yr=function(t,n,r){let i=Promise.resolve();if(n&&n.length>0){document.getElementsByTagName("link");const o=document.querySelector("meta[property=csp-nonce]"),l=(o==null?void 0:o.nonce)||(o==null?void 0:o.getAttribute("nonce"));i=Promise.allSettled(n.map(c=>{if(c=xw(c),c in Jh)return;Jh[c]=!0;const d=c.endsWith(".css"),u=d?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${c}"]${u}`))return;const p=document.createElement("link");if(p.rel=d?"stylesheet":gw,d||(p.as="script"),p.crossOrigin="",p.href=c,l&&p.setAttribute("nonce",l),document.head.appendChild(p),d)return new Promise((f,h)=>{p.addEventListener("load",f),p.addEventListener("error",()=>h(new Error(`Unable to preload CSS for ${c}`)))})}))}function a(o){const l=new Event("vite:preloadError",{cancelable:!0});if(l.payload=o,window.dispatchEvent(l),!l.defaultPrevented)throw o}return i.then(o=>{for(const l of o||[])l.status==="rejected"&&a(l.reason);return t().catch(a)})};var Ca=class{constructor(){this.listeners=new Set,this.subscribe=this.subscribe.bind(this)}subscribe(e){return this.listeners.add(e),this.onSubscribe(),()=>{this.listeners.delete(e),this.onUnsubscribe()}}hasListeners(){return this.listeners.size>0}onSubscribe(){}onUnsubscribe(){}},Ar,Vn,Ms,Kg,yw=(Kg=class extends Ca{constructor(){super();U(this,Ar);U(this,Vn);U(this,Ms);_(this,Ms,t=>{if(typeof window<"u"&&window.addEventListener){const n=()=>t();return window.addEventListener("visibilitychange",n,!1),()=>{window.removeEventListener("visibilitychange",n)}}})}onSubscribe(){S(this,Vn)||this.setEventListener(S(this,Ms))}onUnsubscribe(){var t;this.hasListeners()||((t=S(this,Vn))==null||t.call(this),_(this,Vn,void 0))}setEventListener(t){var n;_(this,Ms,t),(n=S(this,Vn))==null||n.call(this),_(this,Vn,t(r=>{typeof r=="boolean"?this.setFocused(r):this.onFocus()}))}setFocused(t){S(this,Ar)!==t&&(_(this,Ar,t),this.onFocus())}onFocus(){const t=this.isFocused();this.listeners.forEach(n=>{n(t)})}isFocused(){var t;return typeof S(this,Ar)=="boolean"?S(this,Ar):((t=globalThis.document)==null?void 0:t.visibilityState)!=="hidden"}},Ar=new WeakMap,Vn=new WeakMap,Ms=new WeakMap,Kg),Fp=new yw,vw={setTimeout:(e,t)=>setTimeout(e,t),clearTimeout:e=>clearTimeout(e),setInterval:(e,t)=>setInterval(e,t),clearInterval:e=>clearInterval(e)},Bn,Hu,Qg,bw=(Qg=class{constructor(){U(this,Bn,vw);U(this,Hu,!1)}setTimeoutProvider(e){_(this,Bn,e)}setTimeout(e,t){return S(this,Bn).setTimeout(e,t)}clearTimeout(e){S(this,Bn).clearTimeout(e)}setInterval(e,t){return S(this,Bn).setInterval(e,t)}clearInterval(e){S(this,Bn).clearInterval(e)}},Bn=new WeakMap,Hu=new WeakMap,Qg),Tr=new bw;function ww(e){setTimeout(e,0)}var kw=typeof window>"u"||"Deno"in globalThis;function lt(){}function jw(e,t){return typeof e=="function"?e(t):e}function Yd(e){return typeof e=="number"&&e>=0&&e!==1/0}function my(e,t){return Math.max(e+(t||0)-Date.now(),0)}function ir(e,t){return typeof e=="function"?e(t):e}function xt(e,t){return typeof e=="function"?e(t):e}function Zh(e,t){const{type:n="all",exact:r,fetchStatus:i,predicate:a,queryKey:o,stale:l}=e;if(o){if(r){if(t.queryHash!==Vp(o,t.options))return!1}else if(!da(t.queryKey,o))return!1}if(n!=="all"){const c=t.isActive();if(n==="active"&&!c||n==="inactive"&&c)return!1}return!(typeof l=="boolean"&&t.isStale()!==l||i&&i!==t.state.fetchStatus||a&&!a(t))}function em(e,t){const{exact:n,status:r,predicate:i,mutationKey:a}=e;if(a){if(!t.options.mutationKey)return!1;if(n){if(ca(t.options.mutationKey)!==ca(a))return!1}else if(!da(t.options.mutationKey,a))return!1}return!(r&&t.state.status!==r||i&&!i(t))}function Vp(e,t){return((t==null?void 0:t.queryKeyHashFn)||ca)(e)}function ca(e){return JSON.stringify(e,(t,n)=>Jd(n)?Object.keys(n).sort().reduce((r,i)=>(r[i]=n[i],r),{}):n)}function da(e,t){return e===t?!0:typeof e!=typeof t?!1:e&&t&&typeof e=="object"&&typeof t=="object"?Object.keys(t).every(n=>da(e[n],t[n])):!1}var Sw=Object.prototype.hasOwnProperty;function gy(e,t,n=0){if(e===t)return e;if(n>500)return t;const r=tm(e)&&tm(t);if(!r&&!(Jd(e)&&Jd(t)))return t;const a=(r?e:Object.keys(e)).length,o=r?t:Object.keys(t),l=o.length,c=r?new Array(l):{};let d=0;for(let u=0;u<l;u++){const p=r?u:o[u],f=e[p],h=t[p];if(f===h){c[p]=f,(r?u<a:Sw.call(e,p))&&d++;continue}if(f===null||h===null||typeof f!="object"||typeof h!="object"){c[p]=h;continue}const m=gy(f,h,n+1);c[p]=m,m===f&&d++}return a===l&&d===a?e:c}function Xd(e,t){if(!t||Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(e[n]!==t[n])return!1;return!0}function tm(e){return Array.isArray(e)&&e.length===Object.keys(e).length}function Jd(e){if(!nm(e))return!1;const t=e.constructor;if(t===void 0)return!0;const n=t.prototype;return!(!nm(n)||!n.hasOwnProperty("isPrototypeOf")||Object.getPrototypeOf(e)!==Object.prototype)}function nm(e){return Object.prototype.toString.call(e)==="[object Object]"}function Nw(e){return new Promise(t=>{Tr.setTimeout(t,e)})}function Zd(e,t,n){return typeof n.structuralSharing=="function"?n.structuralSharing(e,t):n.structuralSharing!==!1?gy(e,t):t}function Tw(e,t,n=0){const r=[...e,t];return n&&r.length>n?r.slice(1):r}function Ew(e,t,n=0){const r=[t,...e];return n&&r.length>n?r.slice(0,-1):r}var Bp=Symbol();function xy(e,t){return!e.queryFn&&(t!=null&&t.initialPromise)?()=>t.initialPromise:!e.queryFn||e.queryFn===Bp?()=>Promise.reject(new Error(`Missing queryFn: '${e.queryHash}'`)):e.queryFn}function yy(e,t){return typeof e=="function"?e(...t):!!e}function Cw(e,t,n){let r=!1,i;return Object.defineProperty(e,"signal",{enumerable:!0,get:()=>(i??(i=t()),r||(r=!0,i.aborted?n():i.addEventListener("abort",n,{once:!0})),i)}),e}var ua=(()=>{let e=()=>kw;return{isServer(){return e()},setIsServer(t){e=t}}})();function eu(){let e,t;const n=new Promise((i,a)=>{e=i,t=a});n.status="pending",n.catch(()=>{});function r(i){Object.assign(n,i),delete n.resolve,delete n.reject}return n.resolve=i=>{r({status:"fulfilled",value:i}),e(i)},n.reject=i=>{r({status:"rejected",reason:i}),t(i)},n}var Aw=ww;function Pw(){let e=[],t=0,n=l=>{l()},r=l=>{l()},i=Aw;const a=l=>{t?e.push(l):i(()=>{n(l)})},o=()=>{const l=e;e=[],l.length&&i(()=>{r(()=>{l.forEach(c=>{n(c)})})})};return{batch:l=>{let c;t++;try{c=l()}finally{t--,t||o()}return c},batchCalls:l=>(...c)=>{a(()=>{l(...c)})},schedule:a,setNotifyFunction:l=>{n=l},setBatchNotifyFunction:l=>{r=l},setScheduler:l=>{i=l}}}var Oe=Pw(),Is,Un,Ls,qg,Rw=(qg=class extends Ca{constructor(){super();U(this,Is,!0);U(this,Un);U(this,Ls);_(this,Ls,t=>{if(typeof window<"u"&&window.addEventListener){const n=()=>t(!0),r=()=>t(!1);return window.addEventListener("online",n,!1),window.addEventListener("offline",r,!1),()=>{window.removeEventListener("online",n),window.removeEventListener("offline",r)}}})}onSubscribe(){S(this,Un)||this.setEventListener(S(this,Ls))}onUnsubscribe(){var t;this.hasListeners()||((t=S(this,Un))==null||t.call(this),_(this,Un,void 0))}setEventListener(t){var n;_(this,Ls,t),(n=S(this,Un))==null||n.call(this),_(this,Un,t(this.setOnline.bind(this)))}setOnline(t){S(this,Is)!==t&&(_(this,Is,t),this.listeners.forEach(r=>{r(t)}))}isOnline(){return S(this,Is)}},Is=new WeakMap,Un=new WeakMap,Ls=new WeakMap,qg),nl=new Rw;function Mw(e){return Math.min(1e3*2**e,3e4)}function vy(e){return(e??"online")==="online"?nl.isOnline():!0}var tu=class extends Error{constructor(e){super("CancelledError"),this.revert=e==null?void 0:e.revert,this.silent=e==null?void 0:e.silent}};function by(e){let t=!1,n=0,r;const i=eu(),a=()=>i.status!=="pending",o=y=>{var k;if(!a()){const x=new tu(y);f(x),(k=e.onCancel)==null||k.call(e,x)}},l=()=>{t=!0},c=()=>{t=!1},d=()=>Fp.isFocused()&&(e.networkMode==="always"||nl.isOnline())&&e.canRun(),u=()=>vy(e.networkMode)&&e.canRun(),p=y=>{a()||(r==null||r(),i.resolve(y))},f=y=>{a()||(r==null||r(),i.reject(y))},h=()=>new Promise(y=>{var k;r=x=>{(a()||d())&&y(x)},(k=e.onPause)==null||k.call(e)}).then(()=>{var y;r=void 0,a()||(y=e.onContinue)==null||y.call(e)}),m=()=>{if(a())return;let y;const k=n===0?e.initialPromise:void 0;try{y=k??e.fn()}catch(x){y=Promise.reject(x)}Promise.resolve(y).then(p).catch(x=>{var A;if(a())return;const g=e.retry??(ua.isServer()?0:3),v=e.retryDelay??Mw,w=typeof v=="function"?v(n,x):v,N=g===!0||typeof g=="number"&&n<g||typeof g=="function"&&g(n,x);if(t||!N){f(x);return}n++,(A=e.onFail)==null||A.call(e,n,x),Nw(w).then(()=>d()?void 0:h()).then(()=>{t?f(x):m()})})};return{promise:i,status:()=>i.status,cancel:o,continue:()=>(r==null||r(),i),cancelRetry:l,continueRetry:c,canStart:u,start:()=>(u()?m():h().then(m),i)}}var Pr,Yg,wy=(Yg=class{constructor(){U(this,Pr)}destroy(){this.clearGcTimeout()}scheduleGc(){this.clearGcTimeout(),Yd(this.gcTime)&&_(this,Pr,Tr.setTimeout(()=>{this.optionalRemove()},this.gcTime))}updateGcTime(e){this.gcTime=Math.max(this.gcTime||0,e??(ua.isServer()?1/0:5*60*1e3))}clearGcTimeout(){S(this,Pr)!==void 0&&(Tr.clearTimeout(S(this,Pr)),_(this,Pr,void 0))}},Pr=new WeakMap,Yg);function Iw(e){return{onFetch:(t,n)=>{var u,p,f,h,m;const r=t.options,i=(f=(p=(u=t.fetchOptions)==null?void 0:u.meta)==null?void 0:p.fetchMore)==null?void 0:f.direction,a=((h=t.state.data)==null?void 0:h.pages)||[],o=((m=t.state.data)==null?void 0:m.pageParams)||[];let l={pages:[],pageParams:[]},c=0;const d=async()=>{let y=!1;const k=v=>{Cw(v,()=>t.signal,()=>y=!0)},x=xy(t.options,t.fetchOptions),g=async(v,w,N)=>{if(y)return Promise.reject(t.signal.reason);if(w==null&&v.pages.length)return Promise.resolve(v);const C=(()=>{const z={client:t.client,queryKey:t.queryKey,pageParam:w,direction:N?"backward":"forward",meta:t.options.meta};return k(z),z})(),E=await x(C),{maxPages:D}=t.options,P=N?Ew:Tw;return{pages:P(v.pages,E,D),pageParams:P(v.pageParams,w,D)}};if(i&&a.length){const v=i==="backward",w=v?Lw:rm,N={pages:a,pageParams:o},A=w(r,N);l=await g(N,A,v)}else{const v=e??a.length;do{const w=c===0?o[0]??r.initialPageParam:rm(r,l);if(c>0&&w==null)break;l=await g(l,w),c++}while(c<v)}return l};t.options.persister?t.fetchFn=()=>{var y,k;return(k=(y=t.options).persister)==null?void 0:k.call(y,d,{client:t.client,queryKey:t.queryKey,meta:t.options.meta,signal:t.signal},n)}:t.fetchFn=d}}}function rm(e,{pages:t,pageParams:n}){const r=t.length-1;return t.length>0?e.getNextPageParam(t[r],t,n[r],n):void 0}function Lw(e,{pages:t,pageParams:n}){var r;return t.length>0?(r=e.getPreviousPageParam)==null?void 0:r.call(e,t[0],t,n[0],n):void 0}var Ds,Rr,zs,Nt,Mr,Me,ya,Ir,gt,ky,pn,Xg,Dw=(Xg=class extends wy{constructor(t){super();U(this,gt);U(this,Ds);U(this,Rr);U(this,zs);U(this,Nt);U(this,Mr);U(this,Me);U(this,ya);U(this,Ir);_(this,Ir,!1),_(this,ya,t.defaultOptions),this.setOptions(t.options),this.observers=[],_(this,Mr,t.client),_(this,Nt,S(this,Mr).getQueryCache()),this.queryKey=t.queryKey,this.queryHash=t.queryHash,_(this,Rr,im(this.options)),this.state=t.state??S(this,Rr),this.scheduleGc()}get meta(){return this.options.meta}get queryType(){return S(this,Ds)}get promise(){var t;return(t=S(this,Me))==null?void 0:t.promise}setOptions(t){if(this.options={...S(this,ya),...t},t!=null&&t._type&&_(this,Ds,t._type),this.updateGcTime(this.options.gcTime),this.state&&this.state.data===void 0){const n=im(this.options);n.data!==void 0&&(this.setState(sm(n.data,n.dataUpdatedAt)),_(this,Rr,n))}}optionalRemove(){!this.observers.length&&this.state.fetchStatus==="idle"&&S(this,Nt).remove(this)}setData(t,n){const r=Zd(this.state.data,t,this.options);return q(this,gt,pn).call(this,{data:r,type:"success",dataUpdatedAt:n==null?void 0:n.updatedAt,manual:n==null?void 0:n.manual}),r}setState(t){q(this,gt,pn).call(this,{type:"setState",state:t})}cancel(t){var r,i;const n=(r=S(this,Me))==null?void 0:r.promise;return(i=S(this,Me))==null||i.cancel(t),n?n.then(lt).catch(lt):Promise.resolve()}destroy(){super.destroy(),this.cancel({silent:!0})}get resetState(){return S(this,Rr)}reset(){this.destroy(),this.setState(this.resetState)}isActive(){return this.observers.some(t=>xt(t.options.enabled,this)!==!1)}isDisabled(){return this.getObserversCount()>0?!this.isActive():this.options.queryFn===Bp||!this.isFetched()}isFetched(){return this.state.dataUpdateCount+this.state.errorUpdateCount>0}isStatic(){return this.getObserversCount()>0?this.observers.some(t=>ir(t.options.staleTime,this)==="static"):!1}isStale(){return this.getObserversCount()>0?this.observers.some(t=>t.getCurrentResult().isStale):this.state.data===void 0||this.state.isInvalidated}isStaleByTime(t=0){return this.state.data===void 0?!0:t==="static"?!1:this.state.isInvalidated?!0:!my(this.state.dataUpdatedAt,t)}onFocus(){var n;const t=this.observers.find(r=>r.shouldFetchOnWindowFocus());t==null||t.refetch({cancelRefetch:!1}),(n=S(this,Me))==null||n.continue()}onOnline(){var n;const t=this.observers.find(r=>r.shouldFetchOnReconnect());t==null||t.refetch({cancelRefetch:!1}),(n=S(this,Me))==null||n.continue()}addObserver(t){this.observers.includes(t)||(this.observers.push(t),this.clearGcTimeout(),S(this,Nt).notify({type:"observerAdded",query:this,observer:t}))}removeObserver(t){this.observers.includes(t)&&(this.observers=this.observers.filter(n=>n!==t),this.observers.length||(S(this,Me)&&(S(this,Ir)||q(this,gt,ky).call(this)?S(this,Me).cancel({revert:!0}):S(this,Me).cancelRetry()),this.scheduleGc()),S(this,Nt).notify({type:"observerRemoved",query:this,observer:t}))}getObserversCount(){return this.observers.length}invalidate(){this.state.isInvalidated||q(this,gt,pn).call(this,{type:"invalidate"})}async fetch(t,n){var d,u,p,f,h,m,y,k,x,g,v;if(this.state.fetchStatus!=="idle"&&((d=S(this,Me))==null?void 0:d.status())!=="rejected"){if(this.state.data!==void 0&&(n!=null&&n.cancelRefetch))this.cancel({silent:!0});else if(S(this,Me))return S(this,Me).continueRetry(),S(this,Me).promise}if(t&&this.setOptions(t),!this.options.queryFn){const w=this.observers.find(N=>N.options.queryFn);w&&this.setOptions(w.options)}const r=new AbortController,i=w=>{Object.defineProperty(w,"signal",{enumerable:!0,get:()=>(_(this,Ir,!0),r.signal)})},a=()=>{const w=xy(this.options,n),A=(()=>{const C={client:S(this,Mr),queryKey:this.queryKey,meta:this.meta};return i(C),C})();return _(this,Ir,!1),this.options.persister?this.options.persister(w,A,this):w(A)},l=(()=>{const w={fetchOptions:n,options:this.options,queryKey:this.queryKey,client:S(this,Mr),state:this.state,fetchFn:a};return i(w),w})(),c=S(this,Ds)==="infinite"?Iw(this.options.pages):this.options.behavior;c==null||c.onFetch(l,this),_(this,zs,this.state),(this.state.fetchStatus==="idle"||this.state.fetchMeta!==((u=l.fetchOptions)==null?void 0:u.meta))&&q(this,gt,pn).call(this,{type:"fetch",meta:(p=l.fetchOptions)==null?void 0:p.meta}),_(this,Me,by({initialPromise:n==null?void 0:n.initialPromise,fn:l.fetchFn,onCancel:w=>{w instanceof tu&&w.revert&&this.setState({...S(this,zs),fetchStatus:"idle"}),r.abort()},onFail:(w,N)=>{q(this,gt,pn).call(this,{type:"failed",failureCount:w,error:N})},onPause:()=>{q(this,gt,pn).call(this,{type:"pause"})},onContinue:()=>{q(this,gt,pn).call(this,{type:"continue"})},retry:l.options.retry,retryDelay:l.options.retryDelay,networkMode:l.options.networkMode,canRun:()=>!0}));try{const w=await S(this,Me).start();if(w===void 0)throw new Error(`${this.queryHash} data is undefined`);return this.setData(w),(h=(f=S(this,Nt).config).onSuccess)==null||h.call(f,w,this),(y=(m=S(this,Nt).config).onSettled)==null||y.call(m,w,this.state.error,this),w}catch(w){if(w instanceof tu){if(w.silent)return S(this,Me).promise;if(w.revert){if(this.state.data===void 0)throw w;return this.state.data}}throw q(this,gt,pn).call(this,{type:"error",error:w}),(x=(k=S(this,Nt).config).onError)==null||x.call(k,w,this),(v=(g=S(this,Nt).config).onSettled)==null||v.call(g,this.state.data,w,this),w}finally{this.scheduleGc()}}},Ds=new WeakMap,Rr=new WeakMap,zs=new WeakMap,Nt=new WeakMap,Mr=new WeakMap,Me=new WeakMap,ya=new WeakMap,Ir=new WeakMap,gt=new WeakSet,ky=function(){return this.state.fetchStatus==="paused"&&this.state.status==="pending"},pn=function(t){const n=r=>{switch(t.type){case"failed":return{...r,fetchFailureCount:t.failureCount,fetchFailureReason:t.error};case"pause":return{...r,fetchStatus:"paused"};case"continue":return{...r,fetchStatus:"fetching"};case"fetch":return{...r,...jy(r.data,this.options),fetchMeta:t.meta??null};case"success":const i={...r,...sm(t.data,t.dataUpdatedAt),dataUpdateCount:r.dataUpdateCount+1,...!t.manual&&{fetchStatus:"idle",fetchFailureCount:0,fetchFailureReason:null}};return _(this,zs,t.manual?i:void 0),i;case"error":const a=t.error;return{...r,error:a,errorUpdateCount:r.errorUpdateCount+1,errorUpdatedAt:Date.now(),fetchFailureCount:r.fetchFailureCount+1,fetchFailureReason:a,fetchStatus:"idle",status:"error",isInvalidated:!0};case"invalidate":return{...r,isInvalidated:!0};case"setState":return{...r,...t.state}}};this.state=n(this.state),Oe.batch(()=>{this.observers.forEach(r=>{r.onQueryUpdate()}),S(this,Nt).notify({query:this,type:"updated",action:t})})},Xg);function jy(e,t){return{fetchFailureCount:0,fetchFailureReason:null,fetchStatus:vy(t.networkMode)?"fetching":"paused",...e===void 0&&{error:null,status:"pending"}}}function sm(e,t){return{data:e,dataUpdatedAt:t??Date.now(),error:null,isInvalidated:!1,status:"success"}}function im(e){const t=typeof e.initialData=="function"?e.initialData():e.initialData,n=t!==void 0,r=n?typeof e.initialDataUpdatedAt=="function"?e.initialDataUpdatedAt():e.initialDataUpdatedAt:0;return{data:t,dataUpdateCount:0,dataUpdatedAt:n?r??Date.now():0,error:null,errorUpdateCount:0,errorUpdatedAt:0,fetchFailureCount:0,fetchFailureReason:null,fetchMeta:null,isInvalidated:!1,status:n?"success":"pending",fetchStatus:"idle"}}var ot,Y,va,Ze,Lr,_s,gn,Hn,ba,Os,Fs,Dr,zr,$n,Vs,ee,Ai,nu,ru,su,iu,au,ou,lu,Sy,Jg,zw=(Jg=class extends Ca{constructor(t,n){super();U(this,ee);U(this,ot);U(this,Y);U(this,va);U(this,Ze);U(this,Lr);U(this,_s);U(this,gn);U(this,Hn);U(this,ba);U(this,Os);U(this,Fs);U(this,Dr);U(this,zr);U(this,$n);U(this,Vs,new Set);this.options=n,_(this,ot,t),_(this,Hn,null),_(this,gn,eu()),this.bindMethods(),this.setOptions(n)}bindMethods(){this.refetch=this.refetch.bind(this)}onSubscribe(){this.listeners.size===1&&(S(this,Y).addObserver(this),am(S(this,Y),this.options)?q(this,ee,Ai).call(this):this.updateResult(),q(this,ee,iu).call(this))}onUnsubscribe(){this.hasListeners()||this.destroy()}shouldFetchOnReconnect(){return cu(S(this,Y),this.options,this.options.refetchOnReconnect)}shouldFetchOnWindowFocus(){return cu(S(this,Y),this.options,this.options.refetchOnWindowFocus)}destroy(){this.listeners=new Set,q(this,ee,au).call(this),q(this,ee,ou).call(this),S(this,Y).removeObserver(this)}setOptions(t){const n=this.options,r=S(this,Y);if(this.options=S(this,ot).defaultQueryOptions(t),this.options.enabled!==void 0&&typeof this.options.enabled!="boolean"&&typeof this.options.enabled!="function"&&typeof xt(this.options.enabled,S(this,Y))!="boolean")throw new Error("Expected enabled to be a boolean or a callback that returns a boolean");q(this,ee,lu).call(this),S(this,Y).setOptions(this.options),n._defaulted&&!Xd(this.options,n)&&S(this,ot).getQueryCache().notify({type:"observerOptionsUpdated",query:S(this,Y),observer:this});const i=this.hasListeners();i&&om(S(this,Y),r,this.options,n)&&q(this,ee,Ai).call(this),this.updateResult(),i&&(S(this,Y)!==r||xt(this.options.enabled,S(this,Y))!==xt(n.enabled,S(this,Y))||ir(this.options.staleTime,S(this,Y))!==ir(n.staleTime,S(this,Y)))&&q(this,ee,nu).call(this);const a=q(this,ee,ru).call(this);i&&(S(this,Y)!==r||xt(this.options.enabled,S(this,Y))!==xt(n.enabled,S(this,Y))||a!==S(this,$n))&&q(this,ee,su).call(this,a)}getOptimisticResult(t){const n=S(this,ot).getQueryCache().build(S(this,ot),t),r=this.createResult(n,t);return Ow(this,r)&&(_(this,Ze,r),_(this,_s,this.options),_(this,Lr,S(this,Y).state)),r}getCurrentResult(){return S(this,Ze)}trackResult(t,n){return new Proxy(t,{get:(r,i)=>(this.trackProp(i),n==null||n(i),i==="promise"&&(this.trackProp("data"),!this.options.experimental_prefetchInRender&&S(this,gn).status==="pending"&&S(this,gn).reject(new Error("experimental_prefetchInRender feature flag is not enabled"))),Reflect.get(r,i))})}trackProp(t){S(this,Vs).add(t)}getCurrentQuery(){return S(this,Y)}refetch({...t}={}){return this.fetch({...t})}fetchOptimistic(t){const n=S(this,ot).defaultQueryOptions(t),r=S(this,ot).getQueryCache().build(S(this,ot),n);return r.fetch().then(()=>this.createResult(r,n))}fetch(t){return q(this,ee,Ai).call(this,{...t,cancelRefetch:t.cancelRefetch??!0}).then(()=>(this.updateResult(),S(this,Ze)))}createResult(t,n){var D;const r=S(this,Y),i=this.options,a=S(this,Ze),o=S(this,Lr),l=S(this,_s),d=t!==r?t.state:S(this,va),{state:u}=t;let p={...u},f=!1,h;if(n._optimisticResults){const P=this.hasListeners(),z=!P&&am(t,n),W=P&&om(t,r,n,i);(z||W)&&(p={...p,...jy(u.data,t.options)}),n._optimisticResults==="isRestoring"&&(p.fetchStatus="idle")}let{error:m,errorUpdatedAt:y,status:k}=p;h=p.data;let x=!1;if(n.placeholderData!==void 0&&h===void 0&&k==="pending"){let P;a!=null&&a.isPlaceholderData&&n.placeholderData===(l==null?void 0:l.placeholderData)?(P=a.data,x=!0):P=typeof n.placeholderData=="function"?n.placeholderData((D=S(this,Fs))==null?void 0:D.state.data,S(this,Fs)):n.placeholderData,P!==void 0&&(k="success",h=Zd(a==null?void 0:a.data,P,n),f=!0)}if(n.select&&h!==void 0&&!x)if(a&&h===(o==null?void 0:o.data)&&n.select===S(this,ba))h=S(this,Os);else try{_(this,ba,n.select),h=n.select(h),h=Zd(a==null?void 0:a.data,h,n),_(this,Os,h),_(this,Hn,null)}catch(P){_(this,Hn,P)}S(this,Hn)&&(m=S(this,Hn),h=S(this,Os),y=Date.now(),k="error");const g=p.fetchStatus==="fetching",v=k==="pending",w=k==="error",N=v&&g,A=h!==void 0,E={status:k,fetchStatus:p.fetchStatus,isPending:v,isSuccess:k==="success",isError:w,isInitialLoading:N,isLoading:N,data:h,dataUpdatedAt:p.dataUpdatedAt,error:m,errorUpdatedAt:y,failureCount:p.fetchFailureCount,failureReason:p.fetchFailureReason,errorUpdateCount:p.errorUpdateCount,isFetched:t.isFetched(),isFetchedAfterMount:p.dataUpdateCount>d.dataUpdateCount||p.errorUpdateCount>d.errorUpdateCount,isFetching:g,isRefetching:g&&!v,isLoadingError:w&&!A,isPaused:p.fetchStatus==="paused",isPlaceholderData:f,isRefetchError:w&&A,isStale:Up(t,n),refetch:this.refetch,promise:S(this,gn),isEnabled:xt(n.enabled,t)!==!1};if(this.options.experimental_prefetchInRender){const P=E.data!==void 0,z=E.status==="error"&&!P,W=de=>{z?de.reject(E.error):P&&de.resolve(E.data)},ie=()=>{const de=_(this,gn,E.promise=eu());W(de)},le=S(this,gn);switch(le.status){case"pending":t.queryHash===r.queryHash&&W(le);break;case"fulfilled":(z||E.data!==le.value)&&ie();break;case"rejected":(!z||E.error!==le.reason)&&ie();break}}return E}updateResult(){const t=S(this,Ze),n=this.createResult(S(this,Y),this.options);if(_(this,Lr,S(this,Y).state),_(this,_s,this.options),S(this,Lr).data!==void 0&&_(this,Fs,S(this,Y)),Xd(n,t))return;_(this,Ze,n);const r=()=>{if(!t)return!0;const{notifyOnChangeProps:i}=this.options,a=typeof i=="function"?i():i;if(a==="all"||!a&&!S(this,Vs).size)return!0;const o=new Set(a??S(this,Vs));return this.options.throwOnError&&o.add("error"),Object.keys(S(this,Ze)).some(l=>{const c=l;return S(this,Ze)[c]!==t[c]&&o.has(c)})};q(this,ee,Sy).call(this,{listeners:r()})}onQueryUpdate(){this.updateResult(),this.hasListeners()&&q(this,ee,iu).call(this)}},ot=new WeakMap,Y=new WeakMap,va=new WeakMap,Ze=new WeakMap,Lr=new WeakMap,_s=new WeakMap,gn=new WeakMap,Hn=new WeakMap,ba=new WeakMap,Os=new WeakMap,Fs=new WeakMap,Dr=new WeakMap,zr=new WeakMap,$n=new WeakMap,Vs=new WeakMap,ee=new WeakSet,Ai=function(t){q(this,ee,lu).call(this);let n=S(this,Y).fetch(this.options,t);return t!=null&&t.throwOnError||(n=n.catch(lt)),n},nu=function(){q(this,ee,au).call(this);const t=ir(this.options.staleTime,S(this,Y));if(ua.isServer()||S(this,Ze).isStale||!Yd(t))return;const r=my(S(this,Ze).dataUpdatedAt,t)+1;_(this,Dr,Tr.setTimeout(()=>{S(this,Ze).isStale||this.updateResult()},r))},ru=function(){return(typeof this.options.refetchInterval=="function"?this.options.refetchInterval(S(this,Y)):this.options.refetchInterval)??!1},su=function(t){q(this,ee,ou).call(this),_(this,$n,t),!(ua.isServer()||xt(this.options.enabled,S(this,Y))===!1||!Yd(S(this,$n))||S(this,$n)===0)&&_(this,zr,Tr.setInterval(()=>{(this.options.refetchIntervalInBackground||Fp.isFocused())&&q(this,ee,Ai).call(this)},S(this,$n)))},iu=function(){q(this,ee,nu).call(this),q(this,ee,su).call(this,q(this,ee,ru).call(this))},au=function(){S(this,Dr)!==void 0&&(Tr.clearTimeout(S(this,Dr)),_(this,Dr,void 0))},ou=function(){S(this,zr)!==void 0&&(Tr.clearInterval(S(this,zr)),_(this,zr,void 0))},lu=function(){const t=S(this,ot).getQueryCache().build(S(this,ot),this.options);if(t===S(this,Y))return;const n=S(this,Y);_(this,Y,t),_(this,va,t.state),this.hasListeners()&&(n==null||n.removeObserver(this),t.addObserver(this))},Sy=function(t){Oe.batch(()=>{t.listeners&&this.listeners.forEach(n=>{n(S(this,Ze))}),S(this,ot).getQueryCache().notify({query:S(this,Y),type:"observerResultsUpdated"})})},Jg);function _w(e,t){return xt(t.enabled,e)!==!1&&e.state.data===void 0&&!(e.state.status==="error"&&xt(t.retryOnMount,e)===!1)}function am(e,t){return _w(e,t)||e.state.data!==void 0&&cu(e,t,t.refetchOnMount)}function cu(e,t,n){if(xt(t.enabled,e)!==!1&&ir(t.staleTime,e)!=="static"){const r=typeof n=="function"?n(e):n;return r==="always"||r!==!1&&Up(e,t)}return!1}function om(e,t,n,r){return(e!==t||xt(r.enabled,e)===!1)&&(!n.suspense||e.state.status!=="error")&&Up(e,n)}function Up(e,t){return xt(t.enabled,e)!==!1&&e.isStaleByTime(ir(t.staleTime,e))}function Ow(e,t){return!Xd(e.getCurrentResult(),t)}var wa,Zt,We,_r,en,In,Zg,Fw=(Zg=class extends wy{constructor(t){super();U(this,en);U(this,wa);U(this,Zt);U(this,We);U(this,_r);_(this,wa,t.client),this.mutationId=t.mutationId,_(this,We,t.mutationCache),_(this,Zt,[]),this.state=t.state||Vw(),this.setOptions(t.options),this.scheduleGc()}setOptions(t){this.options=t,this.updateGcTime(this.options.gcTime)}get meta(){return this.options.meta}addObserver(t){S(this,Zt).includes(t)||(S(this,Zt).push(t),this.clearGcTimeout(),S(this,We).notify({type:"observerAdded",mutation:this,observer:t}))}removeObserver(t){_(this,Zt,S(this,Zt).filter(n=>n!==t)),this.scheduleGc(),S(this,We).notify({type:"observerRemoved",mutation:this,observer:t})}optionalRemove(){S(this,Zt).length||(this.state.status==="pending"?this.scheduleGc():S(this,We).remove(this))}continue(){var t;return((t=S(this,_r))==null?void 0:t.continue())??this.execute(this.state.variables)}async execute(t){var o,l,c,d,u,p,f,h,m,y,k,x,g,v,w,N,A,C;const n=()=>{q(this,en,In).call(this,{type:"continue"})},r={client:S(this,wa),meta:this.options.meta,mutationKey:this.options.mutationKey};_(this,_r,by({fn:()=>this.options.mutationFn?this.options.mutationFn(t,r):Promise.reject(new Error("No mutationFn found")),onFail:(E,D)=>{q(this,en,In).call(this,{type:"failed",failureCount:E,error:D})},onPause:()=>{q(this,en,In).call(this,{type:"pause"})},onContinue:n,retry:this.options.retry??0,retryDelay:this.options.retryDelay,networkMode:this.options.networkMode,canRun:()=>S(this,We).canRun(this)}));const i=this.state.status==="pending",a=!S(this,_r).canStart();try{if(i)n();else{q(this,en,In).call(this,{type:"pending",variables:t,isPaused:a}),S(this,We).config.onMutate&&await S(this,We).config.onMutate(t,this,r);const D=await((l=(o=this.options).onMutate)==null?void 0:l.call(o,t,r));D!==this.state.context&&q(this,en,In).call(this,{type:"pending",context:D,variables:t,isPaused:a})}const E=await S(this,_r).start();return await((d=(c=S(this,We).config).onSuccess)==null?void 0:d.call(c,E,t,this.state.context,this,r)),await((p=(u=this.options).onSuccess)==null?void 0:p.call(u,E,t,this.state.context,r)),await((h=(f=S(this,We).config).onSettled)==null?void 0:h.call(f,E,null,this.state.variables,this.state.context,this,r)),await((y=(m=this.options).onSettled)==null?void 0:y.call(m,E,null,t,this.state.context,r)),q(this,en,In).call(this,{type:"success",data:E}),E}catch(E){try{await((x=(k=S(this,We).config).onError)==null?void 0:x.call(k,E,t,this.state.context,this,r))}catch(D){Promise.reject(D)}try{await((v=(g=this.options).onError)==null?void 0:v.call(g,E,t,this.state.context,r))}catch(D){Promise.reject(D)}try{await((N=(w=S(this,We).config).onSettled)==null?void 0:N.call(w,void 0,E,this.state.variables,this.state.context,this,r))}catch(D){Promise.reject(D)}try{await((C=(A=this.options).onSettled)==null?void 0:C.call(A,void 0,E,t,this.state.context,r))}catch(D){Promise.reject(D)}throw q(this,en,In).call(this,{type:"error",error:E}),E}finally{S(this,We).runNext(this)}}},wa=new WeakMap,Zt=new WeakMap,We=new WeakMap,_r=new WeakMap,en=new WeakSet,In=function(t){const n=r=>{switch(t.type){case"failed":return{...r,failureCount:t.failureCount,failureReason:t.error};case"pause":return{...r,isPaused:!0};case"continue":return{...r,isPaused:!1};case"pending":return{...r,context:t.context,data:void 0,failureCount:0,failureReason:null,error:null,isPaused:t.isPaused,status:"pending",variables:t.variables,submittedAt:Date.now()};case"success":return{...r,data:t.data,failureCount:0,failureReason:null,error:null,status:"success",isPaused:!1};case"error":return{...r,data:void 0,error:t.error,failureCount:r.failureCount+1,failureReason:t.error,isPaused:!1,status:"error"}}};this.state=n(this.state),Oe.batch(()=>{S(this,Zt).forEach(r=>{r.onMutationUpdate(t)}),S(this,We).notify({mutation:this,type:"updated",action:t})})},Zg);function Vw(){return{context:void 0,data:void 0,error:null,failureCount:0,failureReason:null,isPaused:!1,status:"idle",variables:void 0,submittedAt:0}}var xn,Ft,ka,ex,Bw=(ex=class extends Ca{constructor(t={}){super();U(this,xn);U(this,Ft);U(this,ka);this.config=t,_(this,xn,new Set),_(this,Ft,new Map),_(this,ka,0)}build(t,n,r){const i=new Fw({client:t,mutationCache:this,mutationId:++Va(this,ka)._,options:t.defaultMutationOptions(n),state:r});return this.add(i),i}add(t){S(this,xn).add(t);const n=so(t);if(typeof n=="string"){const r=S(this,Ft).get(n);r?r.push(t):S(this,Ft).set(n,[t])}this.notify({type:"added",mutation:t})}remove(t){if(S(this,xn).delete(t)){const n=so(t);if(typeof n=="string"){const r=S(this,Ft).get(n);if(r)if(r.length>1){const i=r.indexOf(t);i!==-1&&r.splice(i,1)}else r[0]===t&&S(this,Ft).delete(n)}}this.notify({type:"removed",mutation:t})}canRun(t){const n=so(t);if(typeof n=="string"){const r=S(this,Ft).get(n),i=r==null?void 0:r.find(a=>a.state.status==="pending");return!i||i===t}else return!0}runNext(t){var r;const n=so(t);if(typeof n=="string"){const i=(r=S(this,Ft).get(n))==null?void 0:r.find(a=>a!==t&&a.state.isPaused);return(i==null?void 0:i.continue())??Promise.resolve()}else return Promise.resolve()}clear(){Oe.batch(()=>{S(this,xn).forEach(t=>{this.notify({type:"removed",mutation:t})}),S(this,xn).clear(),S(this,Ft).clear()})}getAll(){return Array.from(S(this,xn))}find(t){const n={exact:!0,...t};return this.getAll().find(r=>em(n,r))}findAll(t={}){return this.getAll().filter(n=>em(t,n))}notify(t){Oe.batch(()=>{this.listeners.forEach(n=>{n(t)})})}resumePausedMutations(){const t=this.getAll().filter(n=>n.state.isPaused);return Oe.batch(()=>Promise.all(t.map(n=>n.continue().catch(lt))))}},xn=new WeakMap,Ft=new WeakMap,ka=new WeakMap,ex);function so(e){var t;return(t=e.options.scope)==null?void 0:t.id}var tn,tx,Uw=(tx=class extends Ca{constructor(t={}){super();U(this,tn);this.config=t,_(this,tn,new Map)}build(t,n,r){const i=n.queryKey,a=n.queryHash??Vp(i,n);let o=this.get(a);return o||(o=new Dw({client:t,queryKey:i,queryHash:a,options:t.defaultQueryOptions(n),state:r,defaultOptions:t.getQueryDefaults(i)}),this.add(o)),o}add(t){S(this,tn).has(t.queryHash)||(S(this,tn).set(t.queryHash,t),this.notify({type:"added",query:t}))}remove(t){const n=S(this,tn).get(t.queryHash);n&&(t.destroy(),n===t&&S(this,tn).delete(t.queryHash),this.notify({type:"removed",query:t}))}clear(){Oe.batch(()=>{this.getAll().forEach(t=>{this.remove(t)})})}get(t){return S(this,tn).get(t)}getAll(){return[...S(this,tn).values()]}find(t){const n={exact:!0,...t};return this.getAll().find(r=>Zh(n,r))}findAll(t={}){const n=this.getAll();return Object.keys(t).length>0?n.filter(r=>Zh(t,r)):n}notify(t){Oe.batch(()=>{this.listeners.forEach(n=>{n(t)})})}onFocus(){Oe.batch(()=>{this.getAll().forEach(t=>{t.onFocus()})})}onOnline(){Oe.batch(()=>{this.getAll().forEach(t=>{t.onOnline()})})}},tn=new WeakMap,tx),xe,Gn,Wn,Bs,Us,Kn,Hs,$s,nx,Hw=(nx=class{constructor(e={}){U(this,xe);U(this,Gn);U(this,Wn);U(this,Bs);U(this,Us);U(this,Kn);U(this,Hs);U(this,$s);_(this,xe,e.queryCache||new Uw),_(this,Gn,e.mutationCache||new Bw),_(this,Wn,e.defaultOptions||{}),_(this,Bs,new Map),_(this,Us,new Map),_(this,Kn,0)}mount(){Va(this,Kn)._++,S(this,Kn)===1&&(_(this,Hs,Fp.subscribe(async e=>{e&&(await this.resumePausedMutations(),S(this,xe).onFocus())})),_(this,$s,nl.subscribe(async e=>{e&&(await this.resumePausedMutations(),S(this,xe).onOnline())})))}unmount(){var e,t;Va(this,Kn)._--,S(this,Kn)===0&&((e=S(this,Hs))==null||e.call(this),_(this,Hs,void 0),(t=S(this,$s))==null||t.call(this),_(this,$s,void 0))}isFetching(e){return S(this,xe).findAll({...e,fetchStatus:"fetching"}).length}isMutating(e){return S(this,Gn).findAll({...e,status:"pending"}).length}getQueryData(e){var n;const t=this.defaultQueryOptions({queryKey:e});return(n=S(this,xe).get(t.queryHash))==null?void 0:n.state.data}ensureQueryData(e){const t=this.defaultQueryOptions(e),n=S(this,xe).build(this,t),r=n.state.data;return r===void 0?this.fetchQuery(e):(e.revalidateIfStale&&n.isStaleByTime(ir(t.staleTime,n))&&this.prefetchQuery(t),Promise.resolve(r))}getQueriesData(e){return S(this,xe).findAll(e).map(({queryKey:t,state:n})=>{const r=n.data;return[t,r]})}setQueryData(e,t,n){const r=this.defaultQueryOptions({queryKey:e}),i=S(this,xe).get(r.queryHash),a=i==null?void 0:i.state.data,o=jw(t,a);if(o!==void 0)return S(this,xe).build(this,r).setData(o,{...n,manual:!0})}setQueriesData(e,t,n){return Oe.batch(()=>S(this,xe).findAll(e).map(({queryKey:r})=>[r,this.setQueryData(r,t,n)]))}getQueryState(e){var n;const t=this.defaultQueryOptions({queryKey:e});return(n=S(this,xe).get(t.queryHash))==null?void 0:n.state}removeQueries(e){const t=S(this,xe);Oe.batch(()=>{t.findAll(e).forEach(n=>{t.remove(n)})})}resetQueries(e,t){const n=S(this,xe);return Oe.batch(()=>(n.findAll(e).forEach(r=>{r.reset()}),this.refetchQueries({type:"active",...e},t)))}cancelQueries(e,t={}){const n={revert:!0,...t},r=Oe.batch(()=>S(this,xe).findAll(e).map(i=>i.cancel(n)));return Promise.all(r).then(lt).catch(lt)}invalidateQueries(e,t={}){return Oe.batch(()=>(S(this,xe).findAll(e).forEach(n=>{n.invalidate()}),(e==null?void 0:e.refetchType)==="none"?Promise.resolve():this.refetchQueries({...e,type:(e==null?void 0:e.refetchType)??(e==null?void 0:e.type)??"active"},t)))}refetchQueries(e,t={}){const n={...t,cancelRefetch:t.cancelRefetch??!0},r=Oe.batch(()=>S(this,xe).findAll(e).filter(i=>!i.isDisabled()&&!i.isStatic()).map(i=>{let a=i.fetch(void 0,n);return n.throwOnError||(a=a.catch(lt)),i.state.fetchStatus==="paused"?Promise.resolve():a}));return Promise.all(r).then(lt)}fetchQuery(e){const t=this.defaultQueryOptions(e);t.retry===void 0&&(t.retry=!1);const n=S(this,xe).build(this,t);return n.isStaleByTime(ir(t.staleTime,n))?n.fetch(t):Promise.resolve(n.state.data)}prefetchQuery(e){return this.fetchQuery(e).then(lt).catch(lt)}fetchInfiniteQuery(e){return e._type="infinite",this.fetchQuery(e)}prefetchInfiniteQuery(e){return this.fetchInfiniteQuery(e).then(lt).catch(lt)}ensureInfiniteQueryData(e){return e._type="infinite",this.ensureQueryData(e)}resumePausedMutations(){return nl.isOnline()?S(this,Gn).resumePausedMutations():Promise.resolve()}getQueryCache(){return S(this,xe)}getMutationCache(){return S(this,Gn)}getDefaultOptions(){return S(this,Wn)}setDefaultOptions(e){_(this,Wn,e)}setQueryDefaults(e,t){S(this,Bs).set(ca(e),{queryKey:e,defaultOptions:t})}getQueryDefaults(e){const t=[...S(this,Bs).values()],n={};return t.forEach(r=>{da(e,r.queryKey)&&Object.assign(n,r.defaultOptions)}),n}setMutationDefaults(e,t){S(this,Us).set(ca(e),{mutationKey:e,defaultOptions:t})}getMutationDefaults(e){const t=[...S(this,Us).values()],n={};return t.forEach(r=>{da(e,r.mutationKey)&&Object.assign(n,r.defaultOptions)}),n}defaultQueryOptions(e){if(e._defaulted)return e;const t={...S(this,Wn).queries,...this.getQueryDefaults(e.queryKey),...e,_defaulted:!0};return t.queryHash||(t.queryHash=Vp(t.queryKey,t)),t.refetchOnReconnect===void 0&&(t.refetchOnReconnect=t.networkMode!=="always"),t.throwOnError===void 0&&(t.throwOnError=!!t.suspense),!t.networkMode&&t.persister&&(t.networkMode="offlineFirst"),t.queryFn===Bp&&(t.enabled=!1),t}defaultMutationOptions(e){return e!=null&&e._defaulted?e:{...S(this,Wn).mutations,...(e==null?void 0:e.mutationKey)&&this.getMutationDefaults(e.mutationKey),...e,_defaulted:!0}}clear(){S(this,xe).clear(),S(this,Gn).clear()}},xe=new WeakMap,Gn=new WeakMap,Wn=new WeakMap,Bs=new WeakMap,Us=new WeakMap,Kn=new WeakMap,Hs=new WeakMap,$s=new WeakMap,nx),Ny=j.createContext(void 0),$w=e=>{const t=j.useContext(Ny);if(!t)throw new Error("No QueryClient set, use QueryClientProvider to set one");return t},Gw=({client:e,children:t})=>(j.useEffect(()=>(e.mount(),()=>{e.unmount()}),[e]),s.jsx(Ny.Provider,{value:e,children:t})),Ty=j.createContext(!1),Ww=()=>j.useContext(Ty);Ty.Provider;function Kw(){let e=!1;return{clearReset:()=>{e=!1},reset:()=>{e=!0},isReset:()=>e}}var Qw=j.createContext(Kw()),qw=()=>j.useContext(Qw),Yw=(e,t,n)=>{const r=n!=null&&n.state.error&&typeof e.throwOnError=="function"?yy(e.throwOnError,[n.state.error,n]):e.throwOnError;(e.suspense||e.experimental_prefetchInRender||r)&&(t.isReset()||(e.retryOnMount=!1))},Xw=e=>{j.useEffect(()=>{e.clearReset()},[e])},Jw=({result:e,errorResetBoundary:t,throwOnError:n,query:r,suspense:i})=>e.isError&&!t.isReset()&&!e.isFetching&&r&&(i&&e.data===void 0||yy(n,[e.error,r])),Zw=e=>{if(e.suspense){const n=i=>i==="static"?i:Math.max(i??1e3,1e3),r=e.staleTime;e.staleTime=typeof r=="function"?(...i)=>n(r(...i)):n(r),typeof e.gcTime=="number"&&(e.gcTime=Math.max(e.gcTime,1e3))}},ek=(e,t)=>e.isLoading&&e.isFetching&&!t,tk=(e,t)=>(e==null?void 0:e.suspense)&&t.isPending,lm=(e,t,n)=>t.fetchOptimistic(e).catch(()=>{n.clearReset()});function nk(e,t,n){var h,m,y,k;const r=Ww(),i=qw(),a=$w(),o=a.defaultQueryOptions(e);(m=(h=a.getDefaultOptions().queries)==null?void 0:h._experimental_beforeQuery)==null||m.call(h,o);const l=a.getQueryCache().get(o.queryHash),c=e.subscribed!==!1;o._optimisticResults=r?"isRestoring":c?"optimistic":void 0,Zw(o),Yw(o,i,l),Xw(i);const d=!a.getQueryCache().get(o.queryHash),[u]=j.useState(()=>new t(a,o)),p=u.getOptimisticResult(o),f=!r&&c;if(j.useSyncExternalStore(j.useCallback(x=>{const g=f?u.subscribe(Oe.batchCalls(x)):lt;return u.updateResult(),g},[u,f]),()=>u.getCurrentResult(),()=>u.getCurrentResult()),j.useEffect(()=>{u.setOptions(o)},[o,u]),tk(o,p))throw lm(o,u,i);if(Jw({result:p,errorResetBoundary:i,throwOnError:o.throwOnError,query:l,suspense:o.suspense}))throw p.error;if((k=(y=a.getDefaultOptions().queries)==null?void 0:y._experimental_afterQuery)==null||k.call(y,o,p),o.experimental_prefetchInRender&&!ua.isServer()&&ek(p,r)){const x=d?lm(o,u,i):l==null?void 0:l.promise;x==null||x.catch(lt).finally(()=>{u.updateResult()})}return o.notifyOnChangeProps?p:u.trackResult(p)}function rk(e,t){return nk(e,zw)}/**
 * @license lucide-react v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sk=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Ey=(...e)=>e.filter((t,n,r)=>!!t&&r.indexOf(t)===n).join(" ");/**
 * @license lucide-react v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var ik={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ak=j.forwardRef(({color:e="currentColor",size:t=24,strokeWidth:n=2,absoluteStrokeWidth:r,className:i="",children:a,iconNode:o,...l},c)=>j.createElement("svg",{ref:c,...ik,width:t,height:t,stroke:e,strokeWidth:r?Number(n)*24/Number(t):n,className:Ey("lucide",i),...l},[...o.map(([d,u])=>j.createElement(d,u)),...Array.isArray(a)?a:[a]]));/**
 * @license lucide-react v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H=(e,t)=>{const n=j.forwardRef(({className:r,...i},a)=>j.createElement(ak,{ref:a,iconNode:t,className:Ey(`lucide-${sk(e)}`,r),...i}));return n.displayName=`${e}`,n};/**
 * @license lucide-react v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cy=H("Activity",[["path",{d:"M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",key:"169zse"}]]);/**
 * @license lucide-react v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ok=H("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]);/**
 * @license lucide-react v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bi=H("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);/**
 * @license lucide-react v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vr=H("Award",[["path",{d:"m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526",key:"1yiouv"}],["circle",{cx:"12",cy:"8",r:"6",key:"1vp47v"}]]);/**
 * @license lucide-react v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lk=H("Bot",[["path",{d:"M12 8V4H8",key:"hb8ula"}],["rect",{width:"16",height:"12",x:"4",y:"8",rx:"2",key:"enze0r"}],["path",{d:"M2 14h2",key:"vft8re"}],["path",{d:"M20 14h2",key:"4cs60a"}],["path",{d:"M15 13v2",key:"1xurst"}],["path",{d:"M9 13v2",key:"rq6x2g"}]]);/**
 * @license lucide-react v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ck=H("Calendar",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]]);/**
 * @license lucide-react v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cm=H("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dk=H("CircleAlert",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]]);/**
 * @license lucide-react v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hp=H("CircleCheckBig",[["path",{d:"M22 11.08V12a10 10 0 1 1-5.93-9.14",key:"g774vq"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]]);/**
 * @license lucide-react v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uk=H("CircleCheck",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pk=H("CircleX",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"m9 9 6 6",key:"z0biqf"}]]);/**
 * @license lucide-react v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fk=H("Clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]);/**
 * @license lucide-react v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cc=H("CodeXml",[["path",{d:"m18 16 4-4-4-4",key:"1inbqp"}],["path",{d:"m6 8-4 4 4 4",key:"15zrgr"}],["path",{d:"m14.5 4-5 16",key:"e7oirm"}]]);/**
 * @license lucide-react v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hk=H("Code",[["polyline",{points:"16 18 22 12 16 6",key:"z7tu5w"}],["polyline",{points:"8 6 2 12 8 18",key:"1eg1df"}]]);/**
 * @license lucide-react v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mk=H("Compass",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polygon",{points:"16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76",key:"m9r19z"}]]);/**
 * @license lucide-react v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const du=H("Cpu",[["rect",{width:"16",height:"16",x:"4",y:"4",rx:"2",key:"14l7u7"}],["rect",{width:"6",height:"6",x:"9",y:"9",rx:"1",key:"5aljv4"}],["path",{d:"M15 2v2",key:"13l42r"}],["path",{d:"M15 20v2",key:"15mkzm"}],["path",{d:"M2 15h2",key:"1gxd5l"}],["path",{d:"M2 9h2",key:"1bbxkp"}],["path",{d:"M20 15h2",key:"19e6y8"}],["path",{d:"M20 9h2",key:"19tzq7"}],["path",{d:"M9 2v2",key:"165o2o"}],["path",{d:"M9 20v2",key:"i2bqo8"}]]);/**
 * @license lucide-react v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rl=H("Database",[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3",key:"msslwz"}],["path",{d:"M3 5V19A9 3 0 0 0 21 19V5",key:"1wlel7"}],["path",{d:"M3 12A9 3 0 0 0 21 12",key:"mv7ke4"}]]);/**
 * @license lucide-react v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gk=H("Download",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"7 10 12 15 17 10",key:"2ggqvy"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"}]]);/**
 * @license lucide-react v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ay=H("ExternalLink",[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]]);/**
 * @license lucide-react v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dm=H("Eye",[["path",{d:"M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z",key:"rwhkz3"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xk=H("FileText",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]]);/**
 * @license lucide-react v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yk=H("Flame",[["path",{d:"M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z",key:"96xj49"}]]);/**
 * @license lucide-react v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vk=H("Folder",[["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",key:"1kt360"}]]);/**
 * @license lucide-react v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sl=H("Github",[["path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",key:"tonef"}],["path",{d:"M9 18c-4.51 2-5-2-7-2",key:"9comsn"}]]);/**
 * @license lucide-react v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bk=H("Globe",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]]);/**
 * @license lucide-react v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wk=H("Info",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]]);/**
 * @license lucide-react v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Py=H("Layers",[["path",{d:"m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z",key:"8b97xw"}],["path",{d:"m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65",key:"dd6zsq"}],["path",{d:"m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65",key:"ep9fru"}]]);/**
 * @license lucide-react v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uu=H("Linkedin",[["path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",key:"c2jq9f"}],["rect",{width:"4",height:"12",x:"2",y:"9",key:"mk3on5"}],["circle",{cx:"4",cy:"4",r:"2",key:"bt5ra8"}]]);/**
 * @license lucide-react v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ml=H("Mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]]);/**
 * @license lucide-react v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $p=H("MapPin",[["path",{d:"M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z",key:"2oe9fu"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]]);/**
 * @license lucide-react v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kk=H("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ry=H("MessageSquare",[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",key:"1lielz"}]]);/**
 * @license lucide-react v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jk=H("Mic",[["path",{d:"M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z",key:"131961"}],["path",{d:"M19 10v2a7 7 0 0 1-14 0v-2",key:"1vc78b"}],["line",{x1:"12",x2:"12",y1:"19",y2:"22",key:"x3vr5v"}]]);/**
 * @license lucide-react v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pu=H("Music",[["path",{d:"M9 18V5l12-2v13",key:"1jmyc2"}],["circle",{cx:"6",cy:"18",r:"3",key:"fqmcym"}],["circle",{cx:"18",cy:"16",r:"3",key:"1hluhg"}]]);/**
 * @license lucide-react v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sk=H("PanelsTopLeft",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M3 9h18",key:"1pudct"}],["path",{d:"M9 21V9",key:"1oto5p"}]]);/**
 * @license lucide-react v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pa=H("Phone",[["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}]]);/**
 * @license lucide-react v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fu=H("Play",[["polygon",{points:"6 3 20 12 6 21 6 3",key:"1oa8hb"}]]);/**
 * @license lucide-react v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nk=H("Printer",[["path",{d:"M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2",key:"143wyd"}],["path",{d:"M6 9V3a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v6",key:"1itne7"}],["rect",{x:"6",y:"14",width:"12",height:"8",rx:"1",key:"1ue0tg"}]]);/**
 * @license lucide-react v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tk=H("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-react v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const My=H("Send",[["path",{d:"m22 2-7 20-4-9-9-4Z",key:"1q3vgg"}],["path",{d:"M22 2 11 13",key:"nzbqef"}]]);/**
 * @license lucide-react v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Iy=H("Server",[["rect",{width:"20",height:"8",x:"2",y:"2",rx:"2",ry:"2",key:"ngkwjq"}],["rect",{width:"20",height:"8",x:"2",y:"14",rx:"2",ry:"2",key:"iecqi9"}],["line",{x1:"6",x2:"6.01",y1:"6",y2:"6",key:"16zg32"}],["line",{x1:"6",x2:"6.01",y1:"18",y2:"18",key:"nzw8ys"}]]);/**
 * @license lucide-react v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ly=H("Shield",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}]]);/**
 * @license lucide-react v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ek=H("Star",[["polygon",{points:"12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2",key:"8f66p6"}]]);/**
 * @license lucide-react v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Il=H("Terminal",[["polyline",{points:"4 17 10 11 4 5",key:"akl6gq"}],["line",{x1:"12",x2:"20",y1:"19",y2:"19",key:"q2wloq"}]]);/**
 * @license lucide-react v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ck=H("TrendingUp",[["polyline",{points:"22 7 13.5 15.5 8.5 10.5 2 17",key:"126l90"}],["polyline",{points:"16 7 22 7 22 13",key:"kwv8wd"}]]);/**
 * @license lucide-react v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ak=H("TriangleAlert",[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-react v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hu=H("Trophy",[["path",{d:"M6 9H4.5a2.5 2.5 0 0 1 0-5H6",key:"17hqa7"}],["path",{d:"M18 9h1.5a2.5 2.5 0 0 0 0-5H18",key:"lmptdp"}],["path",{d:"M4 22h16",key:"57wxv0"}],["path",{d:"M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22",key:"1nw9bq"}],["path",{d:"M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22",key:"1np0yb"}],["path",{d:"M18 2H6v7a6 6 0 0 0 12 0V2Z",key:"u46fv3"}]]);/**
 * @license lucide-react v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const um=H("Users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]]);/**
 * @license lucide-react v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fa=H("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);/**
 * @license lucide-react v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pm=H("Youtube",[["path",{d:"M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17",key:"1q2vi4"}],["path",{d:"m10 15 5-3-5-3z",key:"1jp15x"}]]);/**
 * @license lucide-react v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dy=H("Zap",[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]]);function fm({recruiterMode:e,onToggleRecruiterMode:t}){const[n,r]=j.useState(!1),[i,a]=j.useState(!1);return j.useEffect(()=>{const o=()=>{window.scrollY>20?a(!0):a(!1)};return window.addEventListener("scroll",o),()=>window.removeEventListener("scroll",o)},[]),s.jsxs("nav",{className:`nav ${i?"nav-scrolled":""}`,children:[s.jsxs("div",{className:"nav-container",children:[s.jsxs("a",{href:"#hero",className:"nav-logo",children:["Rahul Garg",s.jsx("span",{className:"logo-dot",children:"."})]}),s.jsxs("div",{className:"nav-menu",children:[s.jsx("a",{href:"#about",className:"nav-link",children:"About"}),s.jsx("a",{href:"#experience",className:"nav-link",children:"Experience"}),s.jsx("a",{href:"#projects",className:"nav-link",children:"Projects"}),s.jsx("a",{href:"#skills",className:"nav-link",children:"Skills"}),s.jsx("a",{href:"#contact",className:"nav-link",children:"Contact"})]}),s.jsxs("div",{className:"nav-actions",children:[s.jsx("a",{href:"https://github.com",target:"_blank",rel:"noreferrer",className:"social-icon-btn",title:"GitHub",children:s.jsx(sl,{size:18})}),s.jsx("a",{href:"https://linkedin.com",target:"_blank",rel:"noreferrer",className:"social-icon-btn",title:"LinkedIn",children:s.jsx(uu,{size:18})}),s.jsx("a",{href:"https://youtube.com",target:"_blank",rel:"noreferrer",className:"social-icon-btn",title:"YouTube Channel",children:s.jsx(pm,{size:18})}),s.jsxs("div",{className:"mode-segmented-control",style:{marginRight:"12px"},children:[s.jsx("button",{onClick:()=>t("visual"),className:`mode-btn ${e==="visual"?"active":""}`,title:"Switch to Simple Visual Portfolio",children:"🔮 Visual"}),s.jsx("button",{onClick:()=>t("technical"),className:`mode-btn ${e==="technical"?"active":""}`,title:"Switch to Full Architectural Technical Depth Mode",children:"⚙️ Tech Depth"}),s.jsx("button",{onClick:()=>t("recruiter"),className:`mode-btn ${e==="recruiter"?"active":""}`,title:"Switch to Print-friendly PDF Resume View",children:"📄 CV Mode"})]}),s.jsx("a",{href:"#contact",className:"btn btn-primary btn-sm-nav",children:"Get In Touch"})]}),s.jsx("button",{className:"mobile-toggle",onClick:()=>r(!n),"aria-label":"Toggle Menu",children:n?s.jsx(fa,{size:24}):s.jsx(kk,{size:24})})]}),n&&s.jsx("div",{className:"mobile-drawer",children:s.jsxs("div",{className:"mobile-drawer-links",children:[s.jsx("a",{href:"#about",className:"mobile-link",onClick:()=>r(!1),children:"About"}),s.jsx("a",{href:"#experience",className:"mobile-link",onClick:()=>r(!1),children:"Experience"}),s.jsx("a",{href:"#projects",className:"mobile-link",onClick:()=>r(!1),children:"Projects"}),s.jsx("a",{href:"#skills",className:"mobile-link",onClick:()=>r(!1),children:"Skills"}),s.jsx("a",{href:"#contact",className:"mobile-link",onClick:()=>r(!1),children:"Contact"}),s.jsxs("div",{className:"mobile-drawer-socials",children:[s.jsx("a",{href:"https://github.com",target:"_blank",rel:"noreferrer",className:"social-icon-btn",children:s.jsx(sl,{size:20})}),s.jsx("a",{href:"https://linkedin.com",target:"_blank",rel:"noreferrer",className:"social-icon-btn",children:s.jsx(uu,{size:20})}),s.jsx("a",{href:"https://youtube.com",target:"_blank",rel:"noreferrer",className:"social-icon-btn",children:s.jsx(pm,{size:20})})]}),s.jsxs("div",{className:"mobile-mode-selectors",style:{width:"100%",display:"flex",flexDirection:"column",gap:"8px",marginBottom:"16px"},children:[s.jsx("button",{onClick:()=>{t("visual"),r(!1)},className:`btn ${e==="visual"?"btn-primary":"btn-secondary"}`,children:"🔮 Visual Mode"}),s.jsx("button",{onClick:()=>{t("technical"),r(!1)},className:`btn ${e==="technical"?"btn-primary":"btn-secondary"}`,children:"⚙️ Technical Depth Mode"}),s.jsx("button",{onClick:()=>{t("recruiter"),r(!1)},className:`btn ${e==="recruiter"?"btn-primary":"btn-secondary"}`,children:"📄 Quick PDF CV Mode"})]}),s.jsx("a",{href:"#contact",className:"btn btn-primary",onClick:()=>r(!1),children:"Get In Touch"})]})}),s.jsx("style",{children:`
        .nav {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          height: 80px;
          z-index: 1000;
          transition: var(--transition-normal);
          border-bottom: 1px solid transparent;
          display: flex;
          align-items: center;
        }

        .nav-scrolled {
          background-color: rgba(245, 243, 239, 0.85);
          backdrop-filter: blur(12px);
          border-bottom: 1px solid var(--border-color);
          height: 70px;
        }

        .nav-container {
          width: 90%;
          max-width: 1200px;
          margin: 0 auto;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .nav-logo {
          font-size: 22px;
          font-weight: 600;
          color: var(--text-dark);
          text-decoration: none;
          letter-spacing: -0.02em;
        }

        .logo-dot {
          color: var(--accent-purple);
        }

        .nav-menu {
          display: flex;
          gap: 32px;
        }

        .nav-link {
          font-size: 14px;
          font-weight: 500;
          color: var(--text-muted-dark);
          text-decoration: none;
          transition: var(--transition-fast);
        }

        .nav-link:hover {
          color: var(--accent-purple);
        }

        .nav-actions {
          display: flex;
          align-items: center;
          gap: 16px;
        }

        .social-icon-btn {
          color: var(--text-muted-dark);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: var(--transition-fast);
          width: 36px;
          height: 36px;
          border-radius: 50%;
          border: 1px solid transparent;
        }

        .social-icon-btn:hover {
          color: var(--accent-purple);
          background-color: rgba(94, 90, 209, 0.08);
          border-color: rgba(94, 90, 209, 0.16);
        }

        .btn-sm-nav {
          padding: 8px 18px;
          font-size: 13px;
        }

        .mobile-toggle {
          display: none;
          background: none;
          border: none;
          color: var(--text-dark);
          cursor: pointer;
        }

        .mobile-drawer {
          position: fixed;
          top: 70px;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: var(--bg-primary);
          z-index: 999;
          padding: 40px 24px;
          animation: fadeIn 0.2s ease;
        }

        .mobile-drawer-links {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 28px;
        }

        .mobile-link {
          font-size: 20px;
          font-weight: 400;
          color: var(--text-dark);
          text-decoration: none;
        }

        .mobile-drawer-socials {
          display: flex;
          gap: 20px;
          margin: 20px 0;
        }

        @media (max-width: 900px) {
          .nav-menu, .nav-actions {
            display: none;
          }
          .mobile-toggle {
            display: block;
          }
        }

        /* Segmented Mode Controller */
        .mode-segmented-control {
          display: flex;
          background-color: rgba(17, 28, 45, 0.05);
          border: 1px solid var(--border-color);
          border-radius: 100px;
          padding: 3px;
        }

        .mode-btn {
          background: none;
          border: none;
          padding: 6px 14px;
          font-family: var(--font-sans);
          font-size: 11px;
          font-weight: 600;
          color: var(--text-muted-dark);
          border-radius: 100px;
          cursor: pointer;
          transition: var(--transition-fast);
        }

        .mode-btn:hover {
          color: var(--text-dark);
        }

        .mode-btn.active {
          background-color: var(--bg-dark);
          color: var(--text-light);
          box-shadow: 0 2px 8px rgba(17, 28, 45, 0.15);
        }
      `})]})}function Pk(){const e=j.useRef(null),t=j.useRef(null),[n,r]=j.useState(null);return j.useEffect(()=>{const i=e.current;if(!i)return;const a=i.getContext("2d");let o=i.offsetWidth,l=i.offsetHeight;i.width=o,i.height=l;const c=[{label:"Node.js",color:"#68d391",angle:0,radius:110,speed:.006,size:8},{label:"React",color:"#63b3ed",angle:Math.PI*.5,radius:90,speed:-.009,size:7},{label:"MySQL",color:"#f6ad55",angle:Math.PI,radius:130,speed:.007,size:7},{label:"Redis",color:"#fc8181",angle:Math.PI*1.5,radius:100,speed:-.005,size:6},{label:"Kafka",color:"#b794f4",angle:Math.PI*.3,radius:145,speed:.004,size:6},{label:"Docker",color:"#76e4f7",angle:Math.PI*.8,radius:75,speed:-.011,size:6},{label:"MongoDB",color:"#9ae6b4",angle:Math.PI*1.2,radius:160,speed:.003,size:5},{label:"TypeScript",color:"#a0afee",angle:Math.PI*1.7,radius:80,speed:.008,size:6},{label:"Nginx",color:"#fbd38d",angle:Math.PI*.6,radius:120,speed:-.006,size:5},{label:"GraphQL",color:"#f687b3",angle:Math.PI*1.4,radius:95,speed:.01,size:5}],d=Array.from({length:80},()=>({x:Math.random()*o,y:Math.random()*l,vx:(Math.random()-.5)*.3,vy:(Math.random()-.5)*.3,size:Math.random()*1.5+.3,alpha:Math.random()*.4+.1})),u=o/2,p=l/2,f=(k,x,g)=>{a.beginPath(),a.arc(u,p,k,0,Math.PI*2),a.strokeStyle=x,a.lineWidth=.5,g?a.setLineDash([4,8]):a.setLineDash([]),a.stroke(),a.setLineDash([])};let h=0;const m=()=>{a.clearRect(0,0,o,l),h++,d.forEach(g=>{g.x+=g.vx,g.y+=g.vy,g.x<0&&(g.x=o),g.x>o&&(g.x=0),g.y<0&&(g.y=l),g.y>l&&(g.y=0),a.beginPath(),a.arc(g.x,g.y,g.size,0,Math.PI*2),a.fillStyle=`rgba(160, 175, 238, ${g.alpha})`,a.fill()}),[75,90,100,110,120,130,145,160].forEach((g,v)=>{f(g,`rgba(94, 90, 209, ${.08+v*.01})`,v%2===0)});const k=18+Math.sin(h*.04)*4,x=a.createRadialGradient(u,p,0,u,p,k*3);x.addColorStop(0,"rgba(94, 90, 209, 0.9)"),x.addColorStop(.5,"rgba(94, 90, 209, 0.3)"),x.addColorStop(1,"rgba(94, 90, 209, 0)"),a.beginPath(),a.arc(u,p,k*3,0,Math.PI*2),a.fillStyle=x,a.fill(),a.beginPath(),a.arc(u,p,k,0,Math.PI*2),a.fillStyle="#5e5ad1",a.fill(),a.fillStyle="#fff",a.font="bold 9px monospace",a.textAlign="center",a.textBaseline="middle",a.fillText("RG",u,p),c.forEach(g=>{g.angle+=g.speed;const v=u+Math.cos(g.angle)*g.radius,w=p+Math.sin(g.angle)*g.radius*.42,N=a.createRadialGradient(v,w,0,v,w,g.size*3);N.addColorStop(0,g.color+"cc"),N.addColorStop(1,g.color+"00"),a.beginPath(),a.arc(v,w,g.size*3,0,Math.PI*2),a.fillStyle=N,a.fill(),a.beginPath(),a.arc(v,w,g.size,0,Math.PI*2),a.fillStyle=g.color,a.fill(),a.fillStyle="rgba(245,243,239,0.85)",a.font=`${g.size<7?"7":"8"}px sans-serif`,a.textAlign="center",a.textBaseline="top",a.fillText(g.label,v,w+g.size+3)}),t.current=requestAnimationFrame(m)};m();const y=()=>{o=i.offsetWidth,l=i.offsetHeight,i.width=o,i.height=l};return window.addEventListener("resize",y),()=>{cancelAnimationFrame(t.current),window.removeEventListener("resize",y)}},[]),s.jsxs("div",{className:"orbit-wrapper",children:[s.jsx("canvas",{ref:e,className:"orbit-canvas"}),s.jsx("div",{className:"orbit-label font-mono",children:"⚡ Live Tech Stack Galaxy"}),s.jsx("style",{children:`
        .orbit-wrapper {
          position: relative;
          width: 100%;
          max-width: 420px;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 8px;
        }
        .orbit-canvas {
          width: 100%;
          height: 380px;
          display: block;
        }
        .orbit-label {
          font-size: 10px;
          color: rgba(160, 175, 238, 0.6);
          letter-spacing: 0.1em;
        }
      `})]})}const hm=["Mid-Level Software Engineer","Full Stack Developer","Backend Architect","Kafka & Redis Specialist","iGaming Platform Builder","DSA Problem Solver","Open Source Contributor"];function Rk(){const[e,t]=j.useState(0),[n,r]=j.useState(""),[i,a]=j.useState(!1),[o,l]=j.useState(0);return j.useEffect(()=>{const c=hm[e];let d;return!i&&o<c.length?d=setTimeout(()=>l(u=>u+1),80):!i&&o===c.length?d=setTimeout(()=>a(!0),2e3):i&&o>0?d=setTimeout(()=>l(u=>u-1),40):i&&o===0&&(a(!1),t(u=>(u+1)%hm.length)),r(c.slice(0,o)),()=>clearTimeout(d)},[o,i,e]),s.jsxs("section",{id:"hero",className:"hero-section dark-section",children:[s.jsx("div",{className:"grid-overlay"}),s.jsx("div",{className:"glow-orb orb-1"}),s.jsx("div",{className:"glow-orb orb-2"}),s.jsx("div",{className:"glow-orb orb-3"}),s.jsxs("div",{className:"hero-container",children:[s.jsxs("div",{className:"hero-content",children:[s.jsxs("div",{className:"hero-badge-row",children:[s.jsxs("div",{className:"tech-badge animate-fade-in",children:[s.jsx("span",{className:"badge-dot"}),s.jsx("span",{children:"AVAILABLE FOR OPPORTUNITIES"})]}),s.jsxs("div",{className:"tech-badge-location animate-fade-in",style:{animationDelay:"0.2s"},children:[s.jsx($p,{size:11}),s.jsx("span",{children:"Mohali, India"})]})]}),s.jsxs("h1",{className:"hero-headline animate-slide-up",children:[s.jsx("span",{className:"headline-name",children:"Rahul Garg"}),s.jsx("span",{className:"headline-separator"}),s.jsxs("span",{className:"typewriter-wrapper",children:[s.jsx("span",{className:"gradient-text typewriter-text",children:n}),s.jsx("span",{className:"cursor-blink",children:"|"})]})]}),s.jsxs("p",{className:"hero-desc animate-fade-in",style:{animationDelay:"0.3s"},children:["I design ",s.jsx("strong",{children:"scalable microservices"}),", build ",s.jsx("strong",{children:"event-driven Kafka pipelines"}),", integrate ",s.jsx("strong",{children:"WhatsApp Business APIs"}),", and lead engineering teams that ship production-ready systems trusted by enterprises and government organizations."]}),s.jsxs("div",{className:"hero-stats animate-fade-in",style:{animationDelay:"0.4s"},children:[s.jsxs("div",{className:"hero-stat-pill",children:[s.jsx(Vr,{size:13,className:"stat-icon"}),s.jsx("span",{children:"1500+ DSA Problems"})]}),s.jsxs("div",{className:"hero-stat-pill",children:[s.jsx("span",{children:"🎰"}),s.jsx("span",{children:"50k+ Events/Day"})]}),s.jsxs("div",{className:"hero-stat-pill",children:[s.jsx("span",{children:"⚖️"}),s.jsx("span",{children:"Govt-Scale Systems"})]}),s.jsxs("div",{className:"hero-stat-pill singing-badge",children:[s.jsx(pu,{size:13,className:"stat-icon music-pulse"}),s.jsx("span",{children:"Singer & Badminton Player"})]})]}),s.jsxs("div",{className:"hero-actions animate-fade-in",style:{animationDelay:"0.5s"},children:[s.jsxs("a",{href:"#experience",className:"btn btn-dark hero-cta",children:[s.jsx("span",{children:"View Experience"}),s.jsx(Bi,{size:16})]}),s.jsx("a",{href:"#contact",className:"btn btn-secondary hero-btn-secondary",children:"Get In Touch"}),s.jsxs("a",{href:"https://youtu.be/WEllK2cbbt0?si=3ZsXfbgp6LQx1mgc",target:"_blank",rel:"noreferrer",className:"btn hero-song-btn",children:[s.jsx(pu,{size:14}),s.jsx("span",{children:"Hear Me Sing 🎵"})]})]}),s.jsxs("div",{className:"quick-contacts animate-fade-in",style:{animationDelay:"0.6s"},children:[s.jsxs("div",{className:"contact-item",children:[s.jsx(Ml,{size:14,className:"contact-icon"}),s.jsx("a",{href:"mailto:gargr0109@gmail.com",children:"gargr0109@gmail.com"})]}),s.jsxs("div",{className:"contact-item",children:[s.jsx(pa,{size:14,className:"contact-icon"}),s.jsx("a",{href:"tel:+917807221279",children:"+91 78072 21279"})]}),s.jsxs("div",{className:"contact-item",children:[s.jsx("span",{className:"dot-active"}),s.jsx("span",{children:"Sec 94, JLPL Mohali"})]})]})]}),s.jsx("div",{className:"hero-visual animate-fade-in",style:{animationDelay:"0.7s"},children:s.jsx(Pk,{})})]}),s.jsx("style",{children:`
        .hero-section {
          position: relative;
          min-height: 100vh;
          display: flex;
          align-items: center;
          padding-top: 100px;
          padding-bottom: 60px;
          overflow: hidden;
          background: radial-gradient(ellipse at 70% 30%, rgba(94,90,209,0.15) 0%, var(--bg-dark) 60%);
        }

        .grid-overlay {
          position: absolute; inset: 0;
          background-image:
            linear-gradient(rgba(245,243,239,0.025) 1px, transparent 1px),
            linear-gradient(90deg, rgba(245,243,239,0.025) 1px, transparent 1px);
          background-size: 40px 40px;
          z-index: 1; pointer-events: none;
        }

        .glow-orb {
          position: absolute;
          border-radius: 50%;
          pointer-events: none;
          z-index: 1;
          filter: blur(60px);
          animation: orbFloat 8s ease-in-out infinite;
        }

        .orb-1 {
          top: 20%; right: 10%;
          width: 500px; height: 500px;
          background: radial-gradient(circle, rgba(94,90,209,0.12) 0%, transparent 70%);
        }

        .orb-2 {
          bottom: 10%; left: -5%;
          width: 350px; height: 350px;
          background: radial-gradient(circle, rgba(160,175,238,0.08) 0%, transparent 70%);
          animation-delay: -3s;
        }

        .orb-3 {
          top: 60%; right: 25%;
          width: 200px; height: 200px;
          background: radial-gradient(circle, rgba(104,211,145,0.06) 0%, transparent 70%);
          animation-delay: -6s;
        }

        @keyframes orbFloat {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(20px, -30px) scale(1.05); }
          66% { transform: translate(-15px, 20px) scale(0.95); }
        }

        .hero-container {
          width: 90%; max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1.15fr 0.85fr;
          gap: 60px;
          align-items: center;
          position: relative;
          z-index: 2;
        }

        /* Animation classes */
        .animate-fade-in {
          animation: fadeIn 0.8s ease both;
        }
        .animate-slide-up {
          animation: slideUp 0.8s ease both;
        }

        @keyframes slideUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }

        /* Badge row */
        .hero-badge-row {
          display: flex;
          gap: 10px;
          flex-wrap: wrap;
          margin-bottom: 24px;
          animation: fadeIn 0.6s ease both;
        }

        .tech-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: rgba(16,185,129,0.1);
          border: 1px solid rgba(16,185,129,0.25);
          padding: 6px 14px;
          border-radius: 100px;
          font-family: var(--font-mono);
          font-size: 10px;
          font-weight: 600;
          color: #10b981;
          letter-spacing: 0.05em;
        }

        .badge-dot {
          width: 7px; height: 7px;
          border-radius: 50%;
          background: #10b981;
          animation: pulse 2s infinite;
          box-shadow: 0 0 8px #10b981;
        }

        @keyframes pulse {
          0%, 100% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.4); opacity: 0.7; }
        }

        .tech-badge-location {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: rgba(94,90,209,0.1);
          border: 1px solid rgba(94,90,209,0.2);
          padding: 6px 14px;
          border-radius: 100px;
          font-family: var(--font-mono);
          font-size: 10px;
          color: var(--accent-lavender);
        }

        /* Headline */
        .hero-headline {
          font-size: 54px;
          font-weight: 300;
          letter-spacing: -0.03em;
          line-height: 1.1;
          color: var(--text-light);
          margin-bottom: 24px;
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .headline-name {
          font-weight: 600;
          font-size: 60px;
          background: linear-gradient(135deg, #ffffff 0%, var(--accent-lavender) 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .headline-separator {
          width: 60px;
          height: 3px;
          background: linear-gradient(90deg, var(--accent-purple), var(--accent-lavender));
          border-radius: 2px;
        }

        .typewriter-wrapper {
          display: flex;
          align-items: center;
          gap: 2px;
          font-size: 30px;
          min-height: 40px;
        }

        .typewriter-text {
          background: linear-gradient(135deg, var(--accent-lavender) 0%, #c3ccf6 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          font-weight: 500;
        }

        .cursor-blink {
          color: var(--accent-lavender);
          animation: blink 0.8s infinite;
          font-weight: 300;
          margin-left: 2px;
        }
        @keyframes blink { 0%,100%{opacity:1;} 50%{opacity:0;} }

        /* Description */
        .hero-desc {
          font-size: 17px;
          font-weight: 400;
          line-height: 1.6;
          color: var(--text-muted-light);
          margin-bottom: 28px;
        }
        .hero-desc strong { color: var(--text-light); font-weight: 500; }

        /* Stats pills */
        .hero-stats {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-bottom: 32px;
        }

        .hero-stat-pill {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: rgba(245,243,239,0.06);
          border: 1px solid rgba(245,243,239,0.1);
          padding: 5px 12px;
          border-radius: 100px;
          font-size: 12px;
          color: var(--text-muted-light);
          transition: 0.2s;
        }

        .hero-stat-pill:hover {
          background: rgba(245,243,239,0.1);
          color: var(--text-light);
        }

        .stat-icon { color: var(--accent-lavender); }

        .singing-badge { border-color: rgba(252,129,129,0.3); }
        .music-pulse { color: #fc8181; animation: pulse 2s infinite; }

        /* Actions */
        .hero-actions {
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
          margin-bottom: 40px;
        }

        .hero-cta {
          background: linear-gradient(135deg, var(--accent-purple), #7c78e8);
          border: none;
          box-shadow: 0 4px 20px rgba(94,90,209,0.4);
        }
        .hero-cta:hover {
          transform: translateY(-3px);
          box-shadow: 0 8px 30px rgba(94,90,209,0.5);
        }

        .hero-btn-secondary {
          border-color: rgba(245,243,239,0.2);
          color: var(--text-light);
        }
        .hero-btn-secondary:hover {
          background: rgba(245,243,239,0.08);
          border-color: var(--text-light);
        }

        .hero-song-btn {
          background: linear-gradient(135deg, rgba(252,129,129,0.15), rgba(246,173,85,0.15));
          border: 1px solid rgba(252,129,129,0.3);
          color: #fc8181;
          padding: 12px 20px;
        }
        .hero-song-btn:hover {
          background: linear-gradient(135deg, rgba(252,129,129,0.25), rgba(246,173,85,0.25));
          transform: translateY(-2px);
        }

        /* Contacts */
        .quick-contacts {
          display: flex;
          flex-wrap: wrap;
          gap: 20px;
          border-top: 1px solid rgba(245,243,239,0.08);
          padding-top: 24px;
        }

        .contact-item {
          display: flex;
          align-items: center;
          gap: 8px;
          font-family: var(--font-mono);
          font-size: 12px;
          color: var(--text-muted-light);
        }
        .contact-item a {
          color: var(--text-muted-light);
          text-decoration: none;
          transition: 0.15s;
        }
        .contact-item a:hover { color: var(--accent-lavender); }
        .contact-icon { color: var(--accent-lavender); }

        .dot-active {
          width: 8px; height: 8px;
          background-color: #10b981;
          border-radius: 50%;
          display: inline-block;
          box-shadow: 0 0 10px #10b981;
          animation: pulse 2s infinite;
        }

        .hero-visual {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 100%;
        }

        @media (max-width: 992px) {
          .hero-container { grid-template-columns: 1fr; gap: 40px; }
          .hero-visual { order: -1; }
          .hero-headline { font-size: 40px; }
          .headline-name { font-size: 44px; }
          .typewriter-wrapper { font-size: 24px; }
        }

        @media (max-width: 480px) {
          .hero-headline { font-size: 32px; }
          .headline-name { font-size: 36px; }
        }
      `})]})}function il({children:e,maxTilt:t=10,className:n=""}){const[r,i]=j.useState({}),[a,o]=j.useState({opacity:0}),l=j.useRef(null),c=u=>{const p=l.current;if(!p)return;const f=p.getBoundingClientRect(),h=f.width,m=f.height,y=u.clientX-f.left-h/2,x=-((u.clientY-f.top-m/2)/(m/2))*t,g=y/(h/2)*t,v=(u.clientX-f.left)/h*100,w=(u.clientY-f.top)/m*100;i({transform:`perspective(1000px) rotateX(${x}deg) rotateY(${g}deg) scale3d(1.02, 1.02, 1.02)`,transition:"transform 0.1s cubic-bezier(0.25, 1, 0.5, 1)"}),o({opacity:.35,background:`radial-gradient(circle at ${v}% ${w}%, rgba(255, 255, 255, 0.4) 0%, rgba(255, 255, 255, 0) 80%)`,transition:"opacity 0.1s ease"})},d=()=>{i({transform:"perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)",transition:"transform 0.5s cubic-bezier(0.25, 1, 0.5, 1)"}),o({opacity:0,transition:"opacity 0.5s ease"})};return s.jsxs("div",{ref:l,className:`card-3d-wrapper ${n}`,onMouseMove:c,onMouseLeave:d,style:{position:"relative",transformStyle:"preserve-3d",...r},children:[s.jsx("div",{className:"card-3d-glare",style:{position:"absolute",top:0,left:0,right:0,bottom:0,borderRadius:"inherit",pointerEvents:"none",zIndex:10,mixBlendMode:"overlay",...a}}),s.jsx("div",{style:{transform:"translateZ(20px)",height:"100%",display:"flex",flexDirection:"column"},children:e})]})}function Mk({achievements:e=[]}){const t=[{id:1,title:"GeeksForGeeks College Rank",value:"Rank 1st",icon:s.jsx(Vr,{size:20}),details:"Ranked 1st in CGC Landran college and solved over 1500+ problems across GFG and Leetcode."},{id:2,title:"YouTube Educator",value:"3 Lakh+ Views",icon:s.jsx(dm,{size:20}),details:"Run a technical channel teaching Data Structures & Algorithms and MERN Stack."},{id:3,title:"ICPC Regionals Rank",value:"Rank 613",icon:s.jsx(hu,{size:20}),details:"Secured Team Rank 613 in ICPC Amritapuri Regionals and College Rank 1 in the Prelims."},{id:4,title:"LeetCode Rating",value:"1753 Max",icon:s.jsx(Cc,{size:20}),details:"Acquired a maximum rating of 1753 (3 Star developer status) on LeetCode."},{id:5,title:"Developer Mentorship",value:"200+ Guided",icon:s.jsx(um,{size:20}),details:"Mentored and instructed over 200+ students and junior developers."}],n=e.length>0?e:t,r=(i,a)=>{const o=a.toLowerCase();return o.includes("geeks")||o.includes("college")?s.jsx(Vr,{size:20}):o.includes("youtube")||o.includes("view")?s.jsx(dm,{size:20}):o.includes("icpc")||o.includes("rank")?s.jsx(hu,{size:20}):o.includes("leetcode")||o.includes("rating")?s.jsx(Cc,{size:20}):o.includes("mentor")||o.includes("guided")?s.jsx(um,{size:20}):s.jsx(Vr,{size:20})};return s.jsxs("section",{id:"about",className:"dashboard-section",children:[s.jsxs("div",{className:"container",children:[s.jsx("span",{className:"section-tag",children:"Platform Analytics"}),s.jsx("h2",{className:"section-title",children:"Achievements & Core Metrics"}),s.jsx("p",{className:"section-subtitle",children:"An overview of my competitive programming results, developer outreach activities, and community milestones."}),s.jsxs("div",{className:"dashboard-grid",children:[s.jsxs(il,{className:"dash-card main-stat-card",maxTilt:8,children:[s.jsxs("div",{className:"main-stat-header",children:[s.jsx(Cc,{className:"main-stat-icon",size:32}),s.jsx("span",{className:"main-stat-tag",children:"GEEKSFORGEEKS & LEETCODE"})]}),s.jsxs("div",{className:"main-stat-content",children:[s.jsx("div",{className:"main-stat-value",children:"1500+"}),s.jsx("div",{className:"main-stat-label",children:"Coding Problems Solved"})]}),s.jsxs("div",{className:"main-stat-footer",children:[s.jsx("p",{children:"Specializing in Data Structures, Algorithms, and optimization. Max rating of 1753 (3 Star) on LeetCode."}),s.jsx("div",{className:"progress-bar-container",children:s.jsx("div",{className:"progress-bar",style:{width:"90%"}})})]})]}),s.jsx("div",{className:"sub-stats-grid",children:n.map(i=>s.jsxs(il,{className:"dash-card sub-stat-card",maxTilt:12,children:[s.jsxs("div",{className:"sub-stat-header",children:[s.jsx("div",{className:"sub-stat-icon-wrapper",children:r(i.id,i.title)}),s.jsx("div",{className:"sub-stat-badge",children:i.value})]}),s.jsx("h3",{className:"sub-stat-title",children:i.title}),s.jsx("p",{className:"sub-stat-details",children:i.details})]},i.id))})]})]}),s.jsx("style",{children:`
        .dashboard-section {
          background-color: var(--bg-primary);
          border-bottom: 1px solid var(--border-color);
        }

        .dashboard-grid {
          display: grid;
          grid-template-columns: 0.8fr 1.2fr;
          gap: 24px;
        }

        .dash-card {
          background: #ffffff;
          border: 1px solid var(--border-color);
          border-radius: 12px;
          padding: 32px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          transition: border-color var(--transition-normal), box-shadow var(--transition-normal);
          height: 100%;
        }

        .dash-card:hover {
          border-color: rgba(94, 90, 209, 0.2);
          box-shadow: 0 12px 30px rgba(17, 28, 45, 0.08);
        }

        .main-stat-card {
          background-color: var(--bg-dark);
          color: var(--text-light);
          border-color: var(--bg-dark);
          min-height: 380px;
        }

        .main-stat-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 32px;
        }

        .main-stat-icon {
          color: var(--accent-lavender);
        }

        .main-stat-tag {
          font-family: var(--font-mono);
          font-size: 11px;
          letter-spacing: 0.1em;
          color: var(--accent-lavender);
          background-color: rgba(160, 175, 238, 0.1);
          padding: 4px 10px;
          border-radius: 4px;
        }

        .main-stat-value {
          font-size: 72px;
          font-weight: 300;
          line-height: 1;
          letter-spacing: -0.04em;
          color: var(--text-light);
        }

        .main-stat-label {
          font-size: 18px;
          font-weight: 400;
          color: var(--text-muted-light);
          margin-top: 8px;
        }

        .main-stat-footer {
          margin-top: auto;
        }

        .main-stat-footer p {
          font-size: 13px;
          color: var(--text-muted-light);
          line-height: 1.5;
          margin-bottom: 16px;
        }

        .progress-bar-container {
          height: 4px;
          background-color: rgba(245, 243, 239, 0.1);
          border-radius: 2px;
          overflow: hidden;
        }

        .progress-bar {
          height: 100%;
          background-color: var(--accent-lavender);
          border-radius: 2px;
        }

        .sub-stats-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 20px;
        }

        .sub-stat-card {
          min-height: 180px;
        }

        .sub-stat-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 20px;
        }

        .sub-stat-icon-wrapper {
          width: 36px;
          height: 36px;
          border-radius: 8px;
          background-color: rgba(94, 90, 209, 0.08);
          color: var(--accent-purple);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .sub-stat-badge {
          font-family: var(--font-mono);
          font-size: 12px;
          font-weight: 600;
          color: var(--accent-purple);
          background-color: rgba(94, 90, 209, 0.08);
          padding: 4px 8px;
          border-radius: 4px;
        }

        .sub-stat-title {
          font-size: 16px;
          font-weight: 500;
          color: var(--text-dark);
          margin-bottom: 8px;
        }

        .sub-stat-details {
          font-size: 13px;
          line-height: 1.5;
          color: var(--text-muted-dark);
        }

        @media (max-width: 992px) {
          .dashboard-grid {
            grid-template-columns: 1fr;
          }
          .main-stat-card {
            min-height: auto;
          }
        }

        @media (max-width: 600px) {
          .sub-stats-grid {
            grid-template-columns: 1fr;
          }
        }
      `})]})}/*! @license DOMPurify 3.4.10 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/3.4.10/LICENSE */function mm(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}function Ik(e){if(Array.isArray(e))return e}function Lk(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r,i,a,o,l=[],c=!0,d=!1;try{if(a=(n=n.call(e)).next,t!==0)for(;!(c=(r=a.call(n)).done)&&(l.push(r.value),l.length!==t);c=!0);}catch(u){d=!0,i=u}finally{try{if(!c&&n.return!=null&&(o=n.return(),Object(o)!==o))return}finally{if(d)throw i}}return l}}function Dk(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function zk(e,t){return Ik(e)||Lk(e,t)||_k(e,t)||Dk()}function _k(e,t){if(e){if(typeof e=="string")return mm(e,t);var n={}.toString.call(e).slice(8,-1);return n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set"?Array.from(e):n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?mm(e,t):void 0}}const zy=Object.entries,gm=Object.setPrototypeOf,Ok=Object.isFrozen,Fk=Object.getPrototypeOf,Vk=Object.getOwnPropertyDescriptor;let Fe=Object.freeze,He=Object.seal,cs=Object.create,_y=typeof Reflect<"u"&&Reflect,mu=_y.apply,gu=_y.construct;Fe||(Fe=function(t){return t});He||(He=function(t){return t});mu||(mu=function(t,n){for(var r=arguments.length,i=new Array(r>2?r-2:0),a=2;a<r;a++)i[a-2]=arguments[a];return t.apply(n,i)});gu||(gu=function(t){for(var n=arguments.length,r=new Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];return new t(...r)});const vi=Ee(Array.prototype.forEach),Bk=Ee(Array.prototype.lastIndexOf),xm=Ee(Array.prototype.pop),is=Ee(Array.prototype.push),Uk=Ee(Array.prototype.splice),Fn=Array.isArray,Pi=Ee(String.prototype.toLowerCase),Ac=Ee(String.prototype.toString),ym=Ee(String.prototype.match),bi=Ee(String.prototype.replace),vm=Ee(String.prototype.indexOf),Hk=Ee(String.prototype.trim),$k=Ee(Number.prototype.toString),Gk=Ee(Boolean.prototype.toString),bm=typeof BigInt>"u"?null:Ee(BigInt.prototype.toString),wm=typeof Symbol>"u"?null:Ee(Symbol.prototype.toString),Je=Ee(Object.prototype.hasOwnProperty),wi=Ee(Object.prototype.toString),De=Ee(RegExp.prototype.test),gr=Wk(TypeError);function Ee(e){return function(t){t instanceof RegExp&&(t.lastIndex=0);for(var n=arguments.length,r=new Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];return mu(e,t,r)}}function Wk(e){return function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return gu(e,n)}}function X(e,t){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:Pi;if(gm&&gm(e,null),!Fn(t))return e;let r=t.length;for(;r--;){let i=t[r];if(typeof i=="string"){const a=n(i);a!==i&&(Ok(t)||(t[r]=a),i=a)}e[i]=!0}return e}function Kk(e){for(let t=0;t<e.length;t++)Je(e,t)||(e[t]=null);return e}function Xe(e){const t=cs(null);for(const r of zy(e)){var n=zk(r,2);const i=n[0],a=n[1];Je(e,i)&&(Fn(a)?t[i]=Kk(a):a&&typeof a=="object"&&a.constructor===Object?t[i]=Xe(a):t[i]=a)}return t}function Qk(e){switch(typeof e){case"string":return e;case"number":return $k(e);case"boolean":return Gk(e);case"bigint":return bm?bm(e):"0";case"symbol":return wm?wm(e):"Symbol()";case"undefined":return wi(e);case"function":case"object":{if(e===null)return wi(e);const t=e,n=Yt(t,"toString");if(typeof n=="function"){const r=n(t);return typeof r=="string"?r:wi(r)}return wi(e)}default:return wi(e)}}function Yt(e,t){for(;e!==null;){const r=Vk(e,t);if(r){if(r.get)return Ee(r.get);if(typeof r.value=="function")return Ee(r.value)}e=Fk(e)}function n(){return null}return n}function qk(e){try{return De(e,""),!0}catch{return!1}}const km=Fe(["a","abbr","acronym","address","area","article","aside","audio","b","bdi","bdo","big","blink","blockquote","body","br","button","canvas","caption","center","cite","code","col","colgroup","content","data","datalist","dd","decorator","del","details","dfn","dialog","dir","div","dl","dt","element","em","fieldset","figcaption","figure","font","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","img","input","ins","kbd","label","legend","li","main","map","mark","marquee","menu","menuitem","meter","nav","nobr","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","search","section","select","shadow","slot","small","source","spacer","span","strike","strong","style","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","track","tt","u","ul","var","video","wbr"]),Pc=Fe(["svg","a","altglyph","altglyphdef","altglyphitem","animatecolor","animatemotion","animatetransform","circle","clippath","defs","desc","ellipse","enterkeyhint","exportparts","filter","font","g","glyph","glyphref","hkern","image","inputmode","line","lineargradient","marker","mask","metadata","mpath","part","path","pattern","polygon","polyline","radialgradient","rect","stop","style","switch","symbol","text","textpath","title","tref","tspan","view","vkern"]),Rc=Fe(["feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence"]),Yk=Fe(["animate","color-profile","cursor","discard","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignobject","hatch","hatchpath","mesh","meshgradient","meshpatch","meshrow","missing-glyph","script","set","solidcolor","unknown","use"]),Mc=Fe(["math","menclose","merror","mfenced","mfrac","mglyph","mi","mlabeledtr","mmultiscripts","mn","mo","mover","mpadded","mphantom","mroot","mrow","ms","mspace","msqrt","mstyle","msub","msup","msubsup","mtable","mtd","mtext","mtr","munder","munderover","mprescripts"]),Xk=Fe(["maction","maligngroup","malignmark","mlongdiv","mscarries","mscarry","msgroup","mstack","msline","msrow","semantics","annotation","annotation-xml","mprescripts","none"]),jm=Fe(["#text"]),Sm=Fe(["accept","action","align","alt","autocapitalize","autocomplete","autopictureinpicture","autoplay","background","bgcolor","border","capture","cellpadding","cellspacing","checked","cite","class","clear","color","cols","colspan","command","commandfor","controls","controlslist","coords","crossorigin","datetime","decoding","default","dir","disabled","disablepictureinpicture","disableremoteplayback","download","draggable","enctype","enterkeyhint","exportparts","face","for","headers","height","hidden","high","href","hreflang","id","inert","inputmode","integrity","ismap","kind","label","lang","list","loading","loop","low","max","maxlength","media","method","min","minlength","multiple","muted","name","nonce","noshade","novalidate","nowrap","open","optimum","part","pattern","placeholder","playsinline","popover","popovertarget","popovertargetaction","poster","preload","pubdate","radiogroup","readonly","rel","required","rev","reversed","role","rows","rowspan","spellcheck","scope","selected","shape","size","sizes","slot","span","srclang","start","src","srcset","step","style","summary","tabindex","title","translate","type","usemap","valign","value","width","wrap","xmlns"]),Ic=Fe(["accent-height","accumulate","additive","alignment-baseline","amplitude","ascent","attributename","attributetype","azimuth","basefrequency","baseline-shift","begin","bias","by","class","clip","clippathunits","clip-path","clip-rule","color","color-interpolation","color-interpolation-filters","color-profile","color-rendering","cx","cy","d","dx","dy","diffuseconstant","direction","display","divisor","dur","edgemode","elevation","end","exponent","fill","fill-opacity","fill-rule","filter","filterunits","flood-color","flood-opacity","font-family","font-size","font-size-adjust","font-stretch","font-style","font-variant","font-weight","fx","fy","g1","g2","glyph-name","glyphref","gradientunits","gradienttransform","height","href","id","image-rendering","in","in2","intercept","k","k1","k2","k3","k4","kerning","keypoints","keysplines","keytimes","lang","lengthadjust","letter-spacing","kernelmatrix","kernelunitlength","lighting-color","local","marker-end","marker-mid","marker-start","markerheight","markerunits","markerwidth","maskcontentunits","maskunits","max","mask","mask-type","media","method","mode","min","name","numoctaves","offset","operator","opacity","order","orient","orientation","origin","overflow","paint-order","path","pathlength","patterncontentunits","patterntransform","patternunits","points","preservealpha","preserveaspectratio","primitiveunits","r","rx","ry","radius","refx","refy","repeatcount","repeatdur","restart","result","rotate","scale","seed","shape-rendering","slope","specularconstant","specularexponent","spreadmethod","startoffset","stddeviation","stitchtiles","stop-color","stop-opacity","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke","stroke-width","style","surfacescale","systemlanguage","tabindex","tablevalues","targetx","targety","transform","transform-origin","text-anchor","text-decoration","text-rendering","textlength","type","u1","u2","unicode","values","viewbox","visibility","version","vert-adv-y","vert-origin-x","vert-origin-y","width","word-spacing","wrap","writing-mode","xchannelselector","ychannelselector","x","x1","x2","xmlns","y","y1","y2","z","zoomandpan"]),Nm=Fe(["accent","accentunder","align","bevelled","close","columnalign","columnlines","columnspacing","columnspan","denomalign","depth","dir","display","displaystyle","encoding","fence","frame","height","href","id","largeop","length","linethickness","lquote","lspace","mathbackground","mathcolor","mathsize","mathvariant","maxsize","minsize","movablelimits","notation","numalign","open","rowalign","rowlines","rowspacing","rowspan","rspace","rquote","scriptlevel","scriptminsize","scriptsizemultiplier","selection","separator","separators","stretchy","subscriptshift","supscriptshift","symmetric","voffset","width","xmlns"]),io=Fe(["xlink:href","xml:id","xlink:title","xml:space","xmlns:xlink"]),Jk=He(/{{[\w\W]*|^[\w\W]*}}/g),Zk=He(/<%[\w\W]*|^[\w\W]*%>/g),ej=He(/\${[\w\W]*/g),tj=He(/^data-[\-\w.\u00B7-\uFFFF]+$/),nj=He(/^aria-[\-\w]+$/),Tm=He(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),rj=He(/^(?:\w+script|data):/i),sj=He(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),ij=He(/^html$/i),aj=He(/^[a-z][.\w]*(-[.\w]+)+$/i),Em=He(/<[/\w!]/g),oj=He(/<[/\w]/g),lj=He(/<\/no(script|embed|frames)/i),cj=He(/\/>/i),qt={element:1,attribute:2,text:3,cdataSection:4,entityReference:5,entityNode:6,processingInstruction:7,comment:8,document:9,documentType:10,documentFragment:11,notation:12},dj=function(){return typeof window>"u"?null:window},uj=function(t,n){if(typeof t!="object"||typeof t.createPolicy!="function")return null;let r=null;const i="data-tt-policy-suffix";n&&n.hasAttribute(i)&&(r=n.getAttribute(i));const a="dompurify"+(r?"#"+r:"");try{return t.createPolicy(a,{createHTML(o){return o},createScriptURL(o){return o}})}catch{return console.warn("TrustedTypes policy "+a+" could not be created."),null}},Cm=function(){return{afterSanitizeAttributes:[],afterSanitizeElements:[],afterSanitizeShadowDOM:[],beforeSanitizeAttributes:[],beforeSanitizeElements:[],beforeSanitizeShadowDOM:[],uponSanitizeAttribute:[],uponSanitizeElement:[],uponSanitizeShadowNode:[]}},Rn=function(t,n,r,i){return Je(t,n)&&Fn(t[n])?X(i.base?Xe(i.base):{},t[n],i.transform):r};function Oy(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:dj();const t=L=>Oy(L);if(t.version="3.4.10",t.removed=[],!e||!e.document||e.document.nodeType!==qt.document||!e.Element)return t.isSupported=!1,t;let n=e.document;const r=n,i=r.currentScript;e.DocumentFragment;const a=e.HTMLTemplateElement,o=e.Node,l=e.Element,c=e.NodeFilter,d=e.NamedNodeMap;d===void 0&&(e.NamedNodeMap||e.MozNamedAttrMap),e.HTMLFormElement;const u=e.DOMParser,p=e.trustedTypes,f=l.prototype,h=Yt(f,"cloneNode"),m=Yt(f,"remove"),y=Yt(f,"nextSibling"),k=Yt(f,"childNodes"),x=Yt(f,"parentNode"),g=Yt(f,"shadowRoot"),v=Yt(f,"attributes"),w=o&&o.prototype?Yt(o.prototype,"nodeType"):null,N=o&&o.prototype?Yt(o.prototype,"nodeName"):null;if(typeof a=="function"){const L=n.createElement("template");L.content&&L.content.ownerDocument&&(n=L.content.ownerDocument)}let A,C="",E,D=!1,P=0;const z=function(){if(P>0)throw gr('A configured TRUSTED_TYPES_POLICY callback (createHTML or createScriptURL) must not call DOMPurify.sanitize, as that causes infinite recursion. Do not pass a policy whose callbacks wrap DOMPurify as TRUSTED_TYPES_POLICY; see the "DOMPurify and Trusted Types" section of the README.')},W=function(b){z(),P++;try{return A.createHTML(b)}finally{P--}},ie=function(b){z(),P++;try{return A.createScriptURL(b)}finally{P--}},le=function(){return D||(E=uj(p,i),D=!0),E},de=n,be=de.implementation,Tn=de.createNodeIterator,M=de.createDocumentFragment,B=de.getElementsByTagName,$=r.importNode;let G=Cm();t.isSupported=typeof zy=="function"&&typeof x=="function"&&be&&be.createHTMLDocument!==void 0;const he=Jk,Xr=Zk,cn=ej,ai=tj,dn=nj,Jr=rj,yf=sj,T1=aj;let vf=Tm,we=null;const Ol=X({},[...km,...Pc,...Rc,...Mc,...jm]);let ke=null;const Fl=X({},[...Sm,...Ic,...Nm,...io]);let me=Object.seal(cs(null,{tagNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},attributeNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},allowCustomizedBuiltInElements:{writable:!0,configurable:!1,enumerable:!0,value:!1}})),oi=null,bf=null;const En=Object.seal(cs(null,{tagCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},attributeCheck:{writable:!0,configurable:!1,enumerable:!0,value:null}}));let wf=!0,Vl=!0,kf=!1,jf=!0,Cn=!1,li=!0,hr=!1,Bl=!1,Ul=!1,Zr=!1,Ia=!1,La=!1,Sf=!0,Nf=!1;const Tf="user-content-";let Hl=!0,$l=!1,es={},Wt=null;const Gl=X({},["annotation-xml","audio","colgroup","desc","foreignobject","head","iframe","math","mi","mn","mo","ms","mtext","noembed","noframes","noscript","plaintext","script","selectedcontent","style","svg","template","thead","title","video","xmp"]);let Ef=null;const Cf=X({},["audio","video","img","source","image","track"]);let Wl=null;const Af=X({},["alt","class","for","id","label","name","pattern","placeholder","role","summary","title","value","style","xmlns"]),Da="http://www.w3.org/1998/Math/MathML",za="http://www.w3.org/2000/svg",Kt="http://www.w3.org/1999/xhtml";let ts=Kt,Kl=!1,Ql=null;const E1=X({},[Da,za,Kt],Ac),Pf=Fe(["mi","mo","mn","ms","mtext"]);let ql=X({},Pf);const Rf=Fe(["annotation-xml"]);let Yl=X({},Rf);const C1=X({},["title","style","font","a","script"]);let ci=null;const A1=["application/xhtml+xml","text/html"],P1="text/html";let ge=null,ns=null;const R1=n.createElement("form"),Mf=function(b){return b instanceof RegExp||b instanceof Function},Xl=function(){let b=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};if(ns&&ns===b)return;(!b||typeof b!="object")&&(b={}),b=Xe(b),ci=A1.indexOf(b.PARSER_MEDIA_TYPE)===-1?P1:b.PARSER_MEDIA_TYPE,ge=ci==="application/xhtml+xml"?Ac:Pi,we=Rn(b,"ALLOWED_TAGS",Ol,{transform:ge}),ke=Rn(b,"ALLOWED_ATTR",Fl,{transform:ge}),Ql=Rn(b,"ALLOWED_NAMESPACES",E1,{transform:Ac}),Wl=Rn(b,"ADD_URI_SAFE_ATTR",Af,{transform:ge,base:Af}),Ef=Rn(b,"ADD_DATA_URI_TAGS",Cf,{transform:ge,base:Cf}),Wt=Rn(b,"FORBID_CONTENTS",Gl,{transform:ge}),oi=Rn(b,"FORBID_TAGS",Xe({}),{transform:ge}),bf=Rn(b,"FORBID_ATTR",Xe({}),{transform:ge}),es=Je(b,"USE_PROFILES")?b.USE_PROFILES&&typeof b.USE_PROFILES=="object"?Xe(b.USE_PROFILES):b.USE_PROFILES:!1,wf=b.ALLOW_ARIA_ATTR!==!1,Vl=b.ALLOW_DATA_ATTR!==!1,kf=b.ALLOW_UNKNOWN_PROTOCOLS||!1,jf=b.ALLOW_SELF_CLOSE_IN_ATTR!==!1,Cn=b.SAFE_FOR_TEMPLATES||!1,li=b.SAFE_FOR_XML!==!1,hr=b.WHOLE_DOCUMENT||!1,Zr=b.RETURN_DOM||!1,Ia=b.RETURN_DOM_FRAGMENT||!1,La=b.RETURN_TRUSTED_TYPE||!1,Ul=b.FORCE_BODY||!1,Sf=b.SANITIZE_DOM!==!1,Nf=b.SANITIZE_NAMED_PROPS||!1,Hl=b.KEEP_CONTENT!==!1,$l=b.IN_PLACE||!1,vf=qk(b.ALLOWED_URI_REGEXP)?b.ALLOWED_URI_REGEXP:Tm,ts=typeof b.NAMESPACE=="string"?b.NAMESPACE:Kt,ql=Je(b,"MATHML_TEXT_INTEGRATION_POINTS")&&b.MATHML_TEXT_INTEGRATION_POINTS&&typeof b.MATHML_TEXT_INTEGRATION_POINTS=="object"?Xe(b.MATHML_TEXT_INTEGRATION_POINTS):X({},Pf),Yl=Je(b,"HTML_INTEGRATION_POINTS")&&b.HTML_INTEGRATION_POINTS&&typeof b.HTML_INTEGRATION_POINTS=="object"?Xe(b.HTML_INTEGRATION_POINTS):X({},Rf);const T=Je(b,"CUSTOM_ELEMENT_HANDLING")&&b.CUSTOM_ELEMENT_HANDLING&&typeof b.CUSTOM_ELEMENT_HANDLING=="object"?Xe(b.CUSTOM_ELEMENT_HANDLING):cs(null);if(me=cs(null),Je(T,"tagNameCheck")&&Mf(T.tagNameCheck)&&(me.tagNameCheck=T.tagNameCheck),Je(T,"attributeNameCheck")&&Mf(T.attributeNameCheck)&&(me.attributeNameCheck=T.attributeNameCheck),Je(T,"allowCustomizedBuiltInElements")&&typeof T.allowCustomizedBuiltInElements=="boolean"&&(me.allowCustomizedBuiltInElements=T.allowCustomizedBuiltInElements),He(me),Cn&&(Vl=!1),Ia&&(Zr=!0),es&&(we=X({},jm),ke=cs(null),es.html===!0&&(X(we,km),X(ke,Sm)),es.svg===!0&&(X(we,Pc),X(ke,Ic),X(ke,io)),es.svgFilters===!0&&(X(we,Rc),X(ke,Ic),X(ke,io)),es.mathMl===!0&&(X(we,Mc),X(ke,Nm),X(ke,io))),En.tagCheck=null,En.attributeCheck=null,Je(b,"ADD_TAGS")&&(typeof b.ADD_TAGS=="function"?En.tagCheck=b.ADD_TAGS:Fn(b.ADD_TAGS)&&(we===Ol&&(we=Xe(we)),X(we,b.ADD_TAGS,ge))),Je(b,"ADD_ATTR")&&(typeof b.ADD_ATTR=="function"?En.attributeCheck=b.ADD_ATTR:Fn(b.ADD_ATTR)&&(ke===Fl&&(ke=Xe(ke)),X(ke,b.ADD_ATTR,ge))),Je(b,"ADD_URI_SAFE_ATTR")&&Fn(b.ADD_URI_SAFE_ATTR)&&X(Wl,b.ADD_URI_SAFE_ATTR,ge),Je(b,"FORBID_CONTENTS")&&Fn(b.FORBID_CONTENTS)&&(Wt===Gl&&(Wt=Xe(Wt)),X(Wt,b.FORBID_CONTENTS,ge)),Je(b,"ADD_FORBID_CONTENTS")&&Fn(b.ADD_FORBID_CONTENTS)&&(Wt===Gl&&(Wt=Xe(Wt)),X(Wt,b.ADD_FORBID_CONTENTS,ge)),Hl&&(we["#text"]=!0),hr&&X(we,["html","head","body"]),we.table&&(X(we,["tbody"]),delete oi.tbody),b.TRUSTED_TYPES_POLICY){if(typeof b.TRUSTED_TYPES_POLICY.createHTML!="function")throw gr('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');if(typeof b.TRUSTED_TYPES_POLICY.createScriptURL!="function")throw gr('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');const I=A;A=b.TRUSTED_TYPES_POLICY;try{C=W("")}catch(V){throw A=I,V}}else b.TRUSTED_TYPES_POLICY===null?(A=void 0,C=""):(A===void 0&&(A=le()),A&&typeof C=="string"&&(C=W("")));(G.uponSanitizeElement.length>0||G.uponSanitizeAttribute.length>0)&&we===Ol&&(we=Xe(we)),G.uponSanitizeAttribute.length>0&&ke===Fl&&(ke=Xe(ke)),Fe&&Fe(b),ns=b},If=X({},[...Pc,...Rc,...Yk]),Lf=X({},[...Mc,...Xk]),M1=function(b,T,I){return T.namespaceURI===Kt?b==="svg":T.namespaceURI===Da?b==="svg"&&(I==="annotation-xml"||ql[I]):!!If[b]},I1=function(b,T,I){return T.namespaceURI===Kt?b==="math":T.namespaceURI===za?b==="math"&&Yl[I]:!!Lf[b]},L1=function(b,T,I){return T.namespaceURI===za&&!Yl[I]||T.namespaceURI===Da&&!ql[I]?!1:!Lf[b]&&(C1[b]||!If[b])},D1=function(b){let T=x(b);(!T||!T.tagName)&&(T={namespaceURI:ts,tagName:"template"});const I=Pi(b.tagName),V=Pi(T.tagName);return Ql[b.namespaceURI]?b.namespaceURI===za?M1(I,T,V):b.namespaceURI===Da?I1(I,T,V):b.namespaceURI===Kt?L1(I,T,V):!!(ci==="application/xhtml+xml"&&Ql[b.namespaceURI]):!1},An=function(b){is(t.removed,{element:b});try{x(b).removeChild(b)}catch{if(m(b),!x(b))throw gr("a node selected for removal could not be detached from its tree and cannot be safely returned; refusing to sanitize in place")}},Df=function(b){const T=k(b);if(T){const V=[];vi(T,K=>{is(V,K)}),vi(V,K=>{try{m(K)}catch{}})}const I=v(b);if(I)for(let V=I.length-1;V>=0;--V){const K=I[V],J=K&&K.name;if(typeof J=="string")try{b.removeAttribute(J)}catch{}}},mr=function(b,T){try{is(t.removed,{attribute:T.getAttributeNode(b),from:T})}catch{is(t.removed,{attribute:null,from:T})}if(T.removeAttribute(b),b==="is")if(Zr||Ia)try{An(T)}catch{}else try{T.setAttribute(b,"")}catch{}},z1=function(b){const T=v(b);if(T)for(let I=T.length-1;I>=0;--I){const V=T[I],K=V&&V.name;if(!(typeof K!="string"||ke[ge(K)]))try{b.removeAttribute(K)}catch{}}},_1=function(b){const T=[b];for(;T.length>0;){const I=T.pop();(w?w(I):I.nodeType)===qt.element&&z1(I);const K=k(I);if(K)for(let J=K.length-1;J>=0;--J)T.push(K[J])}},zf=function(b){let T=null,I=null;if(Ul)b="<remove></remove>"+b;else{const J=ym(b,/^[\r\n\t ]+/);I=J&&J[0]}ci==="application/xhtml+xml"&&ts===Kt&&(b='<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>'+b+"</body></html>");const V=A?W(b):b;if(ts===Kt)try{T=new u().parseFromString(V,ci)}catch{}if(!T||!T.documentElement){T=be.createDocument(ts,"template",null);try{T.documentElement.innerHTML=Kl?C:V}catch{}}const K=T.body||T.documentElement;return b&&I&&K.insertBefore(n.createTextNode(I),K.childNodes[0]||null),ts===Kt?B.call(T,hr?"html":"body")[0]:hr?T.documentElement:K},_f=function(b){return Tn.call(b.ownerDocument||b,b,c.SHOW_ELEMENT|c.SHOW_COMMENT|c.SHOW_TEXT|c.SHOW_PROCESSING_INSTRUCTION|c.SHOW_CDATA_SECTION,null)},_a=function(b){return b=bi(b,he," "),b=bi(b,Xr," "),b=bi(b,cn," "),b},Jl=function(b){var T;b.normalize();const I=Tn.call(b.ownerDocument||b,b,c.SHOW_TEXT|c.SHOW_COMMENT|c.SHOW_CDATA_SECTION|c.SHOW_PROCESSING_INSTRUCTION,null);let V=I.nextNode();for(;V;)V.data=_a(V.data),V=I.nextNode();const K=(T=b.querySelectorAll)===null||T===void 0?void 0:T.call(b,"template");K&&vi(K,J=>{rs(J.content)&&Jl(J.content)})},Oa=function(b){const T=N?N(b):null;return typeof T!="string"||ge(T)!=="form"?!1:typeof b.nodeName!="string"||typeof b.textContent!="string"||typeof b.removeChild!="function"||b.attributes!==v(b)||typeof b.removeAttribute!="function"||typeof b.setAttribute!="function"||typeof b.namespaceURI!="string"||typeof b.insertBefore!="function"||typeof b.hasChildNodes!="function"||b.nodeType!==w(b)||b.childNodes!==k(b)},rs=function(b){if(!w||typeof b!="object"||b===null)return!1;try{return w(b)===qt.documentFragment}catch{return!1}},di=function(b){if(!w||typeof b!="object"||b===null)return!1;try{return typeof w(b)=="number"}catch{return!1}};function un(L,b,T){L.length!==0&&vi(L,I=>{I.call(t,b,T,ns)})}const O1=function(b,T){return!!(li&&b.hasChildNodes()&&!di(b.firstElementChild)&&De(Em,b.textContent)&&De(Em,b.innerHTML)||li&&b.namespaceURI===Kt&&T==="style"&&di(b.firstElementChild)||b.nodeType===qt.processingInstruction||li&&b.nodeType===qt.comment&&De(oj,b.data))},F1=function(b,T){if(!oi[T]&&Vf(T)&&(me.tagNameCheck instanceof RegExp&&De(me.tagNameCheck,T)||me.tagNameCheck instanceof Function&&me.tagNameCheck(T)))return!1;if(Hl&&!Wt[T]){const I=x(b),V=k(b);if(V&&I){const K=V.length;for(let J=K-1;J>=0;--J){const Re=$l?V[J]:h(V[J],!0);I.insertBefore(Re,y(b))}}}return An(b),!0},Of=function(b){if(un(G.beforeSanitizeElements,b,null),Oa(b))return An(b),!0;const T=ge(N?N(b):b.nodeName);if(un(G.uponSanitizeElement,b,{tagName:T,allowedTags:we}),O1(b,T))return An(b),!0;if(oi[T]||!(En.tagCheck instanceof Function&&En.tagCheck(T))&&!we[T])return F1(b,T);if((w?w(b):b.nodeType)===qt.element&&!D1(b)||(T==="noscript"||T==="noembed"||T==="noframes")&&De(lj,b.innerHTML))return An(b),!0;if(Cn&&b.nodeType===qt.text){const V=_a(b.textContent);b.textContent!==V&&(is(t.removed,{element:b.cloneNode()}),b.textContent=V)}return un(G.afterSanitizeElements,b,null),!1},Ff=function(b,T,I){if(bf[T]||Sf&&(T==="id"||T==="name")&&(I in n||I in R1))return!1;const V=ke[T]||En.attributeCheck instanceof Function&&En.attributeCheck(T,b);if(!(Vl&&De(ai,T))){if(!(wf&&De(dn,T))){if(V){if(!Wl[T]){if(!De(vf,bi(I,yf,""))){if(!((T==="src"||T==="xlink:href"||T==="href")&&b!=="script"&&vm(I,"data:")===0&&Ef[b])){if(!(kf&&!De(Jr,bi(I,yf,"")))){if(I)return!1}}}}}else if(!(Vf(b)&&(me.tagNameCheck instanceof RegExp&&De(me.tagNameCheck,b)||me.tagNameCheck instanceof Function&&me.tagNameCheck(b))&&(me.attributeNameCheck instanceof RegExp&&De(me.attributeNameCheck,T)||me.attributeNameCheck instanceof Function&&me.attributeNameCheck(T,b))||T==="is"&&me.allowCustomizedBuiltInElements&&(me.tagNameCheck instanceof RegExp&&De(me.tagNameCheck,I)||me.tagNameCheck instanceof Function&&me.tagNameCheck(I))))return!1}}return!0},V1=X({},["annotation-xml","color-profile","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","missing-glyph"]),Vf=function(b){return!V1[Pi(b)]&&De(T1,b)},B1=function(b,T,I,V){if(A&&typeof p=="object"&&typeof p.getAttributeType=="function"&&!I)switch(p.getAttributeType(b,T)){case"TrustedHTML":return W(V);case"TrustedScriptURL":return ie(V)}return V},U1=function(b,T,I,V){try{I?b.setAttributeNS(I,T,V):b.setAttribute(T,V),Oa(b)?An(b):xm(t.removed)}catch{mr(T,b)}},Bf=function(b){un(G.beforeSanitizeAttributes,b,null);const T=b.attributes;if(!T||Oa(b))return;const I={attrName:"",attrValue:"",keepAttr:!0,allowedAttributes:ke,forceKeepAttr:void 0};let V=T.length;const K=ge(b.nodeName);for(;V--;){const J=T[V],Re=J.name,Se=J.namespaceURI,St=J.value,Lt=ge(Re),ec=St;let qe=Re==="value"?ec:Hk(ec);if(I.attrName=Lt,I.attrValue=qe,I.keepAttr=!0,I.forceKeepAttr=void 0,un(G.uponSanitizeAttribute,b,I),qe=I.attrValue,Nf&&(Lt==="id"||Lt==="name")&&vm(qe,Tf)!==0&&(mr(Re,b),qe=Tf+qe),li&&De(/((--!?|])>)|<\/(style|script|title|xmp|textarea|noscript|iframe|noembed|noframes)/i,qe)){mr(Re,b);continue}if(Lt==="attributename"&&ym(qe,"href")){mr(Re,b);continue}if(!I.forceKeepAttr){if(!I.keepAttr){mr(Re,b);continue}if(!jf&&De(cj,qe)){mr(Re,b);continue}if(Cn&&(qe=_a(qe)),!Ff(K,Lt,qe)){mr(Re,b);continue}qe=B1(K,Lt,Se,qe),qe!==ec&&U1(b,Re,Se,qe)}}un(G.afterSanitizeAttributes,b,null)},Fa=function(b){let T=null;const I=_f(b);for(un(G.beforeSanitizeShadowDOM,b,null);T=I.nextNode();)if(un(G.uponSanitizeShadowNode,T,null),Of(T),Bf(T),rs(T.content)&&Fa(T.content),(w?w(T):T.nodeType)===qt.element){const K=g(T);rs(K)&&(Zl(K),Fa(K))}un(G.afterSanitizeShadowDOM,b,null)},Zl=function(b){const T=[{node:b,shadow:null}];for(;T.length>0;){const I=T.pop();if(I.shadow){Fa(I.shadow);continue}const V=I.node,J=(w?w(V):V.nodeType)===qt.element,Re=k(V);if(Re)for(let Se=Re.length-1;Se>=0;--Se)T.push({node:Re[Se],shadow:null});if(J){const Se=N?N(V):null;if(typeof Se=="string"&&ge(Se)==="template"){const St=V.content;rs(St)&&T.push({node:St,shadow:null})}}if(J){const Se=g(V);rs(Se)&&T.push({node:null,shadow:Se},{node:Se,shadow:null})}}};return t.sanitize=function(L){let b=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},T=null,I=null,V=null,K=null;if(Kl=!L,Kl&&(L="<!-->"),typeof L!="string"&&!di(L)&&(L=Qk(L),typeof L!="string"))throw gr("dirty is not a string, aborting");if(!t.isSupported)return L;Bl||Xl(b),t.removed=[];const J=$l&&typeof L!="string"&&di(L);if(J){const St=N?N(L):L.nodeName;if(typeof St=="string"){const Lt=ge(St);if(!we[Lt]||oi[Lt])throw gr("root node is forbidden and cannot be sanitized in-place")}if(Oa(L))throw gr("root node is clobbered and cannot be sanitized in-place");try{Zl(L)}catch(Lt){throw Df(L),Lt}}else if(di(L))T=zf("<!---->"),I=T.ownerDocument.importNode(L,!0),I.nodeType===qt.element&&I.nodeName==="BODY"||I.nodeName==="HTML"?T=I:T.appendChild(I),Zl(I);else{if(!Zr&&!Cn&&!hr&&L.indexOf("<")===-1)return A&&La?W(L):L;if(T=zf(L),!T)return Zr?null:La?C:""}T&&Ul&&An(T.firstChild);const Re=_f(J?L:T);try{for(;V=Re.nextNode();)Of(V),Bf(V),rs(V.content)&&Fa(V.content)}catch(St){throw J&&Df(L),St}if(J)return vi(t.removed,St=>{St.element&&_1(St.element)}),Cn&&Jl(L),L;if(Zr){if(Cn&&Jl(T),Ia)for(K=M.call(T.ownerDocument);T.firstChild;)K.appendChild(T.firstChild);else K=T;return(ke.shadowroot||ke.shadowrootmode)&&(K=$.call(r,K,!0)),K}let Se=hr?T.outerHTML:T.innerHTML;return hr&&we["!doctype"]&&T.ownerDocument&&T.ownerDocument.doctype&&T.ownerDocument.doctype.name&&De(ij,T.ownerDocument.doctype.name)&&(Se="<!DOCTYPE "+T.ownerDocument.doctype.name+`>
`+Se),Cn&&(Se=_a(Se)),A&&La?W(Se):Se},t.setConfig=function(){let L=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};Xl(L),Bl=!0},t.clearConfig=function(){ns=null,Bl=!1,A=E,C=""},t.isValidAttribute=function(L,b,T){ns||Xl({});const I=ge(L),V=ge(b);return Ff(I,V,T)},t.addHook=function(L,b){typeof b=="function"&&is(G[L],b)},t.removeHook=function(L,b){if(b!==void 0){const T=Bk(G[L],b);return T===-1?void 0:Uk(G[L],T,1)[0]}return xm(G[L])},t.removeHooks=function(L){G[L]=[]},t.removeAllHooks=function(){G=Cm()},t}var Fy=Oy();const Vy=j.createContext({});function pj(e){const t=j.useRef(null);return t.current===null&&(t.current=e()),t.current}const fj=typeof window<"u",hj=fj?j.useLayoutEffect:j.useEffect,Gp=j.createContext(null);function Wp(e,t){e.indexOf(t)===-1&&e.push(t)}function al(e,t){const n=e.indexOf(t);n>-1&&e.splice(n,1)}const ln=(e,t,n)=>n>t?t:n<e?e:n;let Kp=()=>{};const lr={},By=e=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e),Uy=e=>typeof e=="object"&&e!==null,Hy=e=>/^0[^.\s]+$/u.test(e);function $y(e){let t;return()=>(t===void 0&&(t=e()),t)}const Rt=e=>e,Aa=(...e)=>e.reduce((t,n)=>r=>n(t(r))),ha=(e,t,n)=>{const r=t-e;return r?(n-e)/r:1};class Qp{constructor(){this.subscriptions=[]}add(t){return Wp(this.subscriptions,t),()=>al(this.subscriptions,t)}notify(t,n,r){const i=this.subscriptions.length;if(i)if(i===1)this.subscriptions[0](t,n,r);else for(let a=0;a<i;a++){const o=this.subscriptions[a];o&&o(t,n,r)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}const bt=e=>e*1e3,At=e=>e/1e3,Gy=(e,t)=>t?e*(1e3/t):0,Wy=(e,t,n)=>(((1-3*n+3*t)*e+(3*n-6*t))*e+3*t)*e,mj=1e-7,gj=12;function xj(e,t,n,r,i){let a,o,l=0;do o=t+(n-t)/2,a=Wy(o,r,i)-e,a>0?n=o:t=o;while(Math.abs(a)>mj&&++l<gj);return o}function Pa(e,t,n,r){if(e===t&&n===r)return Rt;const i=a=>xj(a,0,1,e,n);return a=>a===0||a===1?a:Wy(i(a),t,r)}const Ky=e=>t=>t<=.5?e(2*t)/2:(2-e(2*(1-t)))/2,Qy=e=>t=>1-e(1-t),qy=Pa(.33,1.53,.69,.99),qp=Qy(qy),Yy=Ky(qp),Xy=e=>e>=1?1:(e*=2)<1?.5*qp(e):.5*(2-Math.pow(2,-10*(e-1))),Yp=e=>1-Math.sin(Math.acos(e)),Jy=Qy(Yp),Zy=Ky(Yp),yj=Pa(.42,0,1,1),vj=Pa(0,0,.58,1),ev=Pa(.42,0,.58,1),bj=e=>Array.isArray(e)&&typeof e[0]!="number",tv=e=>Array.isArray(e)&&typeof e[0]=="number",wj={linear:Rt,easeIn:yj,easeInOut:ev,easeOut:vj,circIn:Yp,circInOut:Zy,circOut:Jy,backIn:qp,backInOut:Yy,backOut:qy,anticipate:Xy},kj=e=>typeof e=="string",Am=e=>{if(tv(e)){Kp(e.length===4);const[t,n,r,i]=e;return Pa(t,n,r,i)}else if(kj(e))return wj[e];return e},ao=["setup","read","resolveKeyframes","preUpdate","update","preRender","render","postRender"];function jj(e,t){let n=new Set,r=new Set,i=!1,a=!1;const o=new WeakSet;let l={delta:0,timestamp:0,isProcessing:!1};function c(u){o.has(u)&&(d.schedule(u),e()),u(l)}const d={schedule:(u,p=!1,f=!1)=>{const m=f&&i?n:r;return p&&o.add(u),m.add(u),u},cancel:u=>{r.delete(u),o.delete(u)},process:u=>{if(l=u,i){a=!0;return}i=!0;const p=n;n=r,r=p,n.forEach(c),n.clear(),i=!1,a&&(a=!1,d.process(u))}};return d}const Sj=40;function nv(e,t){let n=!1,r=!0;const i={delta:0,timestamp:0,isProcessing:!1},a=()=>n=!0,o=ao.reduce((v,w)=>(v[w]=jj(a),v),{}),{setup:l,read:c,resolveKeyframes:d,preUpdate:u,update:p,preRender:f,render:h,postRender:m}=o,y=()=>{const v=lr.useManualTiming,w=v?i.timestamp:performance.now();n=!1,v||(i.delta=r?1e3/60:Math.max(Math.min(w-i.timestamp,Sj),1)),i.timestamp=w,i.isProcessing=!0,l.process(i),c.process(i),d.process(i),u.process(i),p.process(i),f.process(i),h.process(i),m.process(i),i.isProcessing=!1,n&&t&&(r=!1,e(y))},k=()=>{n=!0,r=!0,i.isProcessing||e(y)};return{schedule:ao.reduce((v,w)=>{const N=o[w];return v[w]=(A,C=!1,E=!1)=>(n||k(),N.schedule(A,C,E)),v},{}),cancel:v=>{for(let w=0;w<ao.length;w++)o[ao[w]].cancel(v)},state:i,steps:o}}const{schedule:re,cancel:cr,state:_e,steps:Lc}=nv(typeof requestAnimationFrame<"u"?requestAnimationFrame:Rt,!0);let No;function Nj(){No=void 0}const tt={now:()=>(No===void 0&&tt.set(_e.isProcessing||lr.useManualTiming?_e.timestamp:performance.now()),No),set:e=>{No=e,queueMicrotask(Nj)}},rv=e=>t=>typeof t=="string"&&t.startsWith(e),sv=rv("--"),Tj=rv("var(--"),Xp=e=>Tj(e)?Ej.test(e.split("/*")[0].trim()):!1,Ej=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;function Pm(e){return typeof e!="string"?!1:e.split("/*")[0].includes("var(--")}const ri={test:e=>typeof e=="number",parse:parseFloat,transform:e=>e},ma={...ri,transform:e=>ln(0,1,e)},oo={...ri,default:1},Ui=e=>Math.round(e*1e5)/1e5,Jp=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;function Cj(e){return e==null}const Aj=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,Zp=(e,t)=>n=>!!(typeof n=="string"&&Aj.test(n)&&n.startsWith(e)||t&&!Cj(n)&&Object.prototype.hasOwnProperty.call(n,t)),iv=(e,t,n)=>r=>{if(typeof r!="string")return r;const[i,a,o,l]=r.match(Jp);return{[e]:parseFloat(i),[t]:parseFloat(a),[n]:parseFloat(o),alpha:l!==void 0?parseFloat(l):1}},Pj=e=>ln(0,255,e),Dc={...ri,transform:e=>Math.round(Pj(e))},Er={test:Zp("rgb","red"),parse:iv("red","green","blue"),transform:({red:e,green:t,blue:n,alpha:r=1})=>"rgba("+Dc.transform(e)+", "+Dc.transform(t)+", "+Dc.transform(n)+", "+Ui(ma.transform(r))+")"};function Rj(e){let t="",n="",r="",i="";return e.length>5?(t=e.substring(1,3),n=e.substring(3,5),r=e.substring(5,7),i=e.substring(7,9)):(t=e.substring(1,2),n=e.substring(2,3),r=e.substring(3,4),i=e.substring(4,5),t+=t,n+=n,r+=r,i+=i),{red:parseInt(t,16),green:parseInt(n,16),blue:parseInt(r,16),alpha:i?parseInt(i,16)/255:1}}const xu={test:Zp("#"),parse:Rj,transform:Er.transform},Ra=e=>({test:t=>typeof t=="string"&&t.endsWith(e)&&t.split(" ").length===1,parse:parseFloat,transform:t=>`${t}${e}`}),fn=Ra("deg"),on=Ra("%"),F=Ra("px"),Mj=Ra("vh"),Ij=Ra("vw"),Rm={...on,parse:e=>on.parse(e)/100,transform:e=>on.transform(e*100)},js={test:Zp("hsl","hue"),parse:iv("hue","saturation","lightness"),transform:({hue:e,saturation:t,lightness:n,alpha:r=1})=>"hsla("+Math.round(e)+", "+on.transform(Ui(t))+", "+on.transform(Ui(n))+", "+Ui(ma.transform(r))+")"},Ne={test:e=>Er.test(e)||xu.test(e)||js.test(e),parse:e=>Er.test(e)?Er.parse(e):js.test(e)?js.parse(e):xu.parse(e),transform:e=>typeof e=="string"?e:e.hasOwnProperty("red")?Er.transform(e):js.transform(e),getAnimatableNone:e=>{const t=Ne.parse(e);return t.alpha=0,Ne.transform(t)}},Lj=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;function Dj(e){var t,n;return isNaN(e)&&typeof e=="string"&&(((t=e.match(Jp))==null?void 0:t.length)||0)+(((n=e.match(Lj))==null?void 0:n.length)||0)>0}const av="number",ov="color",zj="var",_j="var(",Mm="${}",Oj=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function Js(e){const t=e.toString(),n=[],r={color:[],number:[],var:[]},i=[];let a=0;const l=t.replace(Oj,c=>(Ne.test(c)?(r.color.push(a),i.push(ov),n.push(Ne.parse(c))):c.startsWith(_j)?(r.var.push(a),i.push(zj),n.push(c)):(r.number.push(a),i.push(av),n.push(parseFloat(c))),++a,Mm)).split(Mm);return{values:n,split:l,indexes:r,types:i}}function Fj(e){return Js(e).values}function lv({split:e,types:t}){const n=e.length;return r=>{let i="";for(let a=0;a<n;a++)if(i+=e[a],r[a]!==void 0){const o=t[a];o===av?i+=Ui(r[a]):o===ov?i+=Ne.transform(r[a]):i+=r[a]}return i}}function Vj(e){return lv(Js(e))}const Bj=e=>typeof e=="number"?0:Ne.test(e)?Ne.getAnimatableNone(e):e,Uj=(e,t)=>typeof e=="number"?t!=null&&t.trim().endsWith("/")?e:0:Bj(e);function Hj(e){const t=Js(e);return lv(t)(t.values.map((r,i)=>Uj(r,t.split[i])))}const $t={test:Dj,parse:Fj,createTransformer:Vj,getAnimatableNone:Hj};function zc(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*(2/3-n)*6:e}function $j({hue:e,saturation:t,lightness:n,alpha:r}){e/=360,t/=100,n/=100;let i=0,a=0,o=0;if(!t)i=a=o=n;else{const l=n<.5?n*(1+t):n+t-n*t,c=2*n-l;i=zc(c,l,e+1/3),a=zc(c,l,e),o=zc(c,l,e-1/3)}return{red:Math.round(i*255),green:Math.round(a*255),blue:Math.round(o*255),alpha:r}}function ol(e,t){return n=>n>0?t:e}const ne=(e,t,n)=>e+(t-e)*n,_c=(e,t,n)=>{const r=e*e,i=n*(t*t-r)+r;return i<0?0:Math.sqrt(i)},Gj=[xu,Er,js],Wj=e=>Gj.find(t=>t.test(e));function Im(e){const t=Wj(e);if(!t)return!1;let n=t.parse(e);return t===js&&(n=$j(n)),n}const Lm=(e,t)=>{const n=Im(e),r=Im(t);if(!n||!r)return ol(e,t);const i={...n};return a=>(i.red=_c(n.red,r.red,a),i.green=_c(n.green,r.green,a),i.blue=_c(n.blue,r.blue,a),i.alpha=ne(n.alpha,r.alpha,a),Er.transform(i))},yu=new Set(["none","hidden"]);function Kj(e,t){return yu.has(e)?n=>n<=0?e:t:n=>n>=1?t:e}function Qj(e,t){return n=>ne(e,t,n)}function ef(e){return typeof e=="number"?Qj:typeof e=="string"?Xp(e)?ol:Ne.test(e)?Lm:Xj:Array.isArray(e)?cv:typeof e=="object"?Ne.test(e)?Lm:qj:ol}function cv(e,t){const n=[...e],r=n.length,i=e.map((a,o)=>ef(a)(a,t[o]));return a=>{for(let o=0;o<r;o++)n[o]=i[o](a);return n}}function qj(e,t){const n={...e,...t},r={};for(const i in n)e[i]!==void 0&&t[i]!==void 0&&(r[i]=ef(e[i])(e[i],t[i]));return i=>{for(const a in r)n[a]=r[a](i);return n}}function Yj(e,t){const n=[],r={color:0,var:0,number:0};for(let i=0;i<t.values.length;i++){const a=t.types[i],o=e.indexes[a][r[a]],l=e.values[o]??0;n[i]=l,r[a]++}return n}const Xj=(e,t)=>{const n=$t.createTransformer(t),r=Js(e),i=Js(t);return r.indexes.var.length===i.indexes.var.length&&r.indexes.color.length===i.indexes.color.length&&r.indexes.number.length>=i.indexes.number.length?yu.has(e)&&!i.values.length||yu.has(t)&&!r.values.length?Kj(e,t):Aa(cv(Yj(r,i),i.values),n):ol(e,t)};function dv(e,t,n){return typeof e=="number"&&typeof t=="number"&&typeof n=="number"?ne(e,t,n):ef(e)(e,t)}const Jj=e=>{const t=({timestamp:n})=>e(n);return{start:(n=!0)=>re.update(t,n),stop:()=>cr(t),now:()=>_e.isProcessing?_e.timestamp:tt.now()}},uv=(e,t,n=10)=>{let r="";const i=Math.max(Math.round(t/n),2);for(let a=0;a<i;a++)r+=Math.round(e(a/(i-1))*1e4)/1e4+", ";return`linear(${r.substring(0,r.length-2)})`},ll=2e4;function tf(e){let t=0;const n=50;let r=e.next(t);for(;!r.done&&t<ll;)t+=n,r=e.next(t);return t>=ll?1/0:t}function Zj(e,t=100,n){const r=n({...e,keyframes:[0,t]}),i=Math.min(tf(r),ll);return{type:"keyframes",ease:a=>r.next(i*a).value/t,duration:At(i)}}const ye={stiffness:100,damping:10,mass:1,velocity:0,duration:800,bounce:.3,visualDuration:.3,restSpeed:{granular:.01,default:2},restDelta:{granular:.005,default:.5},minDuration:.01,maxDuration:10,minDamping:.05,maxDamping:1};function vu(e,t){return e*Math.sqrt(1-t*t)}const eS=12;function tS(e,t,n){let r=n;for(let i=1;i<eS;i++)r=r-e(r)/t(r);return r}const Oc=.001;function nS({duration:e=ye.duration,bounce:t=ye.bounce,velocity:n=ye.velocity,mass:r=ye.mass}){let i,a,o=1-t;o=ln(ye.minDamping,ye.maxDamping,o),e=ln(ye.minDuration,ye.maxDuration,At(e)),o<1?(i=d=>{const u=d*o,p=u*e,f=u-n,h=vu(d,o),m=Math.exp(-p);return Oc-f/h*m},a=d=>{const p=d*o*e,f=p*n+n,h=Math.pow(o,2)*Math.pow(d,2)*e,m=Math.exp(-p),y=vu(Math.pow(d,2),o);return(-i(d)+Oc>0?-1:1)*((f-h)*m)/y}):(i=d=>{const u=Math.exp(-d*e),p=(d-n)*e+1;return-Oc+u*p},a=d=>{const u=Math.exp(-d*e),p=(n-d)*(e*e);return u*p});const l=5/e,c=tS(i,a,l);if(e=bt(e),isNaN(c))return{stiffness:ye.stiffness,damping:ye.damping,duration:e};{const d=Math.pow(c,2)*r;return{stiffness:d,damping:o*2*Math.sqrt(r*d),duration:e}}}const rS=["duration","bounce"],sS=["stiffness","damping","mass"];function Dm(e,t){return t.some(n=>e[n]!==void 0)}function iS(e){let t={velocity:ye.velocity,stiffness:ye.stiffness,damping:ye.damping,mass:ye.mass,isResolvedFromDuration:!1,...e};if(!Dm(e,sS)&&Dm(e,rS))if(t.velocity=0,e.visualDuration){const n=e.visualDuration,r=2*Math.PI/(n*1.2),i=r*r,a=2*ln(.05,1,1-(e.bounce||0))*Math.sqrt(i);t={...t,mass:ye.mass,stiffness:i,damping:a}}else{const n=nS({...e,velocity:0});t={...t,...n,mass:ye.mass},t.isResolvedFromDuration=!0}return t}function cl(e=ye.visualDuration,t=ye.bounce){const n=typeof e!="object"?{visualDuration:e,keyframes:[0,1],bounce:t}:e;let{restSpeed:r,restDelta:i}=n;const a=n.keyframes[0],o=n.keyframes[n.keyframes.length-1],l={done:!1,value:a},{stiffness:c,damping:d,mass:u,duration:p,velocity:f,isResolvedFromDuration:h}=iS({...n,velocity:-At(n.velocity||0)}),m=f||0,y=d/(2*Math.sqrt(c*u)),k=o-a,x=At(Math.sqrt(c/u)),g=Math.abs(k)<5;r||(r=g?ye.restSpeed.granular:ye.restSpeed.default),i||(i=g?ye.restDelta.granular:ye.restDelta.default);let v,w,N,A,C,E;if(y<1)N=vu(x,y),A=(m+y*x*k)/N,v=P=>{const z=Math.exp(-y*x*P);return o-z*(A*Math.sin(N*P)+k*Math.cos(N*P))},C=y*x*A+k*N,E=y*x*k-A*N,w=P=>Math.exp(-y*x*P)*(C*Math.sin(N*P)+E*Math.cos(N*P));else if(y===1){v=z=>o-Math.exp(-x*z)*(k+(m+x*k)*z);const P=m+x*k;w=z=>Math.exp(-x*z)*(x*P*z-m)}else{const P=x*Math.sqrt(y*y-1);v=le=>{const de=Math.exp(-y*x*le),be=Math.min(P*le,300);return o-de*((m+y*x*k)*Math.sinh(be)+P*k*Math.cosh(be))/P};const z=(m+y*x*k)/P,W=y*x*z-k*P,ie=y*x*k-z*P;w=le=>{const de=Math.exp(-y*x*le),be=Math.min(P*le,300);return de*(W*Math.sinh(be)+ie*Math.cosh(be))}}const D={calculatedDuration:h&&p||null,velocity:P=>bt(w(P)),next:P=>{if(!h&&y<1){const W=Math.exp(-y*x*P),ie=Math.sin(N*P),le=Math.cos(N*P),de=o-W*(A*ie+k*le),be=bt(W*(C*ie+E*le));return l.done=Math.abs(be)<=r&&Math.abs(o-de)<=i,l.value=l.done?o:de,l}const z=v(P);if(h)l.done=P>=p;else{const W=bt(w(P));l.done=Math.abs(W)<=r&&Math.abs(o-z)<=i}return l.value=l.done?o:z,l},toString:()=>{const P=Math.min(tf(D),ll),z=uv(W=>D.next(P*W).value,P,30);return P+"ms "+z},toTransition:()=>{}};return D}cl.applyToOptions=e=>{const t=Zj(e,100,cl);return e.ease=t.ease,e.duration=bt(t.duration),e.type="keyframes",e};const aS=5;function pv(e,t,n){const r=Math.max(t-aS,0);return Gy(n-e(r),t-r)}function bu({keyframes:e,velocity:t=0,power:n=.8,timeConstant:r=325,bounceDamping:i=10,bounceStiffness:a=500,modifyTarget:o,min:l,max:c,restDelta:d=.5,restSpeed:u}){const p=e[0],f={done:!1,value:p},h=E=>l!==void 0&&E<l||c!==void 0&&E>c,m=E=>l===void 0?c:c===void 0||Math.abs(l-E)<Math.abs(c-E)?l:c;let y=n*t;const k=p+y,x=o===void 0?k:o(k);x!==k&&(y=x-p);const g=E=>-y*Math.exp(-E/r),v=E=>x+g(E),w=E=>{const D=g(E),P=v(E);f.done=Math.abs(D)<=d,f.value=f.done?x:P};let N,A;const C=E=>{h(f.value)&&(N=E,A=cl({keyframes:[f.value,m(f.value)],velocity:pv(v,E,f.value),damping:i,stiffness:a,restDelta:d,restSpeed:u}))};return C(0),{calculatedDuration:null,next:E=>{let D=!1;return!A&&N===void 0&&(D=!0,w(E),C(E)),N!==void 0&&E>=N?A.next(E-N):(!D&&w(E),f)}}}function oS(e,t,n){const r=[],i=n||lr.mix||dv,a=e.length-1;for(let o=0;o<a;o++){let l=i(e[o],e[o+1]);if(t){const c=Array.isArray(t)?t[o]||Rt:t;l=Aa(c,l)}r.push(l)}return r}function lS(e,t,{clamp:n=!0,ease:r,mixer:i}={}){const a=e.length;if(Kp(a===t.length),a===1)return()=>t[0];if(a===2&&t[0]===t[1])return()=>t[1];const o=e[0]===e[1];e[0]>e[a-1]&&(e=[...e].reverse(),t=[...t].reverse());const l=oS(t,r,i),c=l.length,d=u=>{if(o&&u<e[0])return t[0];let p=0;if(c>1)for(;p<e.length-2&&!(u<e[p+1]);p++);const f=ha(e[p],e[p+1],u);return l[p](f)};return n?u=>d(ln(e[0],e[a-1],u)):d}function cS(e,t){const n=e[e.length-1];for(let r=1;r<=t;r++){const i=ha(0,t,r);e.push(ne(n,1,i))}}function dS(e){const t=[0];return cS(t,e.length-1),t}function uS(e,t){return e.map(n=>n*t)}function pS(e,t){return e.map(()=>t||ev).splice(0,e.length-1)}function Hi({duration:e=300,keyframes:t,times:n,ease:r="easeInOut"}){const i=bj(r)?r.map(Am):Am(r),a={done:!1,value:t[0]},o=uS(n&&n.length===t.length?n:dS(t),e),l=lS(o,t,{ease:Array.isArray(i)?i:pS(t,i)});return{calculatedDuration:e,next:c=>(a.value=l(c),a.done=c>=e,a)}}const fS=e=>e!==null;function Ll(e,{repeat:t,repeatType:n="loop"},r,i=1){const a=e.filter(fS),l=i<0||t&&n!=="loop"&&t%2===1?0:a.length-1;return!l||r===void 0?a[l]:r}const hS={decay:bu,inertia:bu,tween:Hi,keyframes:Hi,spring:cl};function fv(e){typeof e.type=="string"&&(e.type=hS[e.type])}class nf{constructor(){this.updateFinished()}get finished(){return this._finished}updateFinished(){this._finished=new Promise(t=>{this.resolve=t})}notifyFinished(){this.resolve()}then(t,n){return this.finished.then(t,n)}}const mS=e=>e/100;class dl extends nf{constructor(t){super(),this.state="idle",this.startTime=null,this.isStopped=!1,this.currentTime=0,this.holdTime=null,this.playbackSpeed=1,this.delayState={done:!1,value:void 0},this.stop=()=>{var r,i;const{motionValue:n}=this.options;n&&n.updatedAt!==tt.now()&&this.tick(tt.now()),this.isStopped=!0,this.state!=="idle"&&(this.teardown(),(i=(r=this.options).onStop)==null||i.call(r))},this.options=t,this.initAnimation(),this.play(),t.autoplay===!1&&this.pause()}initAnimation(){const{options:t}=this;fv(t);const{type:n=Hi,repeat:r=0,repeatDelay:i=0,repeatType:a,velocity:o=0}=t;let{keyframes:l}=t;const c=n||Hi;c!==Hi&&typeof l[0]!="number"&&(this.mixKeyframes=Aa(mS,dv(l[0],l[1])),l=[0,100]);const d=c({...t,keyframes:l});a==="mirror"&&(this.mirroredGenerator=c({...t,keyframes:[...l].reverse(),velocity:-o})),d.calculatedDuration===null&&(d.calculatedDuration=tf(d));const{calculatedDuration:u}=d;this.calculatedDuration=u,this.resolvedDuration=u+i,this.totalDuration=this.resolvedDuration*(r+1)-i,this.generator=d}updateTime(t){const n=Math.round(t-this.startTime)*this.playbackSpeed;this.holdTime!==null?this.currentTime=this.holdTime:this.currentTime=n}tick(t,n=!1){const{generator:r,totalDuration:i,mixKeyframes:a,mirroredGenerator:o,resolvedDuration:l,calculatedDuration:c}=this;if(this.startTime===null)return r.next(0);const{delay:d=0,keyframes:u,repeat:p,repeatType:f,repeatDelay:h,type:m,onUpdate:y,finalKeyframe:k}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,t):this.speed<0&&(this.startTime=Math.min(t-i/this.speed,this.startTime)),n?this.currentTime=t:this.updateTime(t);const x=this.currentTime-d*(this.playbackSpeed>=0?1:-1),g=this.playbackSpeed>=0?x<0:x>i;this.currentTime=Math.max(x,0),this.state==="finished"&&this.holdTime===null&&(this.currentTime=i);let v=this.currentTime,w=r;if(p){const E=Math.min(this.currentTime,i)/l;let D=Math.floor(E),P=E%1;!P&&E>=1&&(P=1),P===1&&D--,D=Math.min(D,p+1),!!(D%2)&&(f==="reverse"?(P=1-P,h&&(P-=h/l)):f==="mirror"&&(w=o)),v=ln(0,1,P)*l}let N;g?(this.delayState.value=u[0],N=this.delayState):N=w.next(v),a&&!g&&(N.value=a(N.value));let{done:A}=N;!g&&c!==null&&(A=this.playbackSpeed>=0?this.currentTime>=i:this.currentTime<=0);const C=this.holdTime===null&&(this.state==="finished"||this.state==="running"&&A);return C&&m!==bu&&(N.value=Ll(u,this.options,k,this.speed)),y&&y(N.value),C&&this.finish(),N}then(t,n){return this.finished.then(t,n)}get duration(){return At(this.calculatedDuration)}get iterationDuration(){const{delay:t=0}=this.options||{};return this.duration+At(t)}get time(){return At(this.currentTime)}set time(t){t=bt(t),this.currentTime=t,this.startTime===null||this.holdTime!==null||this.playbackSpeed===0?this.holdTime=t:this.driver&&(this.startTime=this.driver.now()-t/this.playbackSpeed),this.driver?this.driver.start(!1):(this.startTime=0,this.state="paused",this.holdTime=t,this.tick(t))}getGeneratorVelocity(){const t=this.currentTime;if(t<=0)return this.options.velocity||0;if(this.generator.velocity)return this.generator.velocity(t);const n=this.generator.next(t).value;return pv(r=>this.generator.next(r).value,t,n)}get speed(){return this.playbackSpeed}set speed(t){const n=this.playbackSpeed!==t;n&&this.driver&&this.updateTime(tt.now()),this.playbackSpeed=t,n&&this.driver&&(this.time=At(this.currentTime))}play(){var i,a;if(this.isStopped)return;const{driver:t=Jj,startTime:n}=this.options;this.driver||(this.driver=t(o=>this.tick(o))),(a=(i=this.options).onPlay)==null||a.call(i);const r=this.driver.now();this.state==="finished"?(this.updateFinished(),this.startTime=r):this.holdTime!==null?this.startTime=r-this.holdTime:this.startTime||(this.startTime=n??r),this.state==="finished"&&this.speed<0&&(this.startTime+=this.calculatedDuration),this.holdTime=null,this.state="running",this.driver.start()}pause(){this.state="paused",this.updateTime(tt.now()),this.holdTime=this.currentTime}complete(){this.state!=="running"&&this.play(),this.state="finished",this.holdTime=null}finish(){var t,n;this.notifyFinished(),this.teardown(),this.state="finished",(n=(t=this.options).onComplete)==null||n.call(t)}cancel(){var t,n;this.holdTime=null,this.startTime=0,this.tick(0),this.teardown(),(n=(t=this.options).onCancel)==null||n.call(t)}teardown(){this.state="idle",this.stopDriver(),this.startTime=this.holdTime=null}stopDriver(){this.driver&&(this.driver.stop(),this.driver=void 0)}sample(t){return this.startTime=0,this.tick(t,!0)}attachTimeline(t){var n;return this.options.allowFlatten&&(this.options.type="keyframes",this.options.ease="linear",this.initAnimation()),(n=this.driver)==null||n.stop(),t.observe(this)}}function gS(e){for(let t=1;t<e.length;t++)e[t]??(e[t]=e[t-1])}const Cr=e=>e*180/Math.PI,wu=e=>{const t=Cr(Math.atan2(e[1],e[0]));return ku(t)},xS={x:4,y:5,translateX:4,translateY:5,scaleX:0,scaleY:3,scale:e=>(Math.abs(e[0])+Math.abs(e[3]))/2,rotate:wu,rotateZ:wu,skewX:e=>Cr(Math.atan(e[1])),skewY:e=>Cr(Math.atan(e[2])),skew:e=>(Math.abs(e[1])+Math.abs(e[2]))/2},ku=e=>(e=e%360,e<0&&(e+=360),e),zm=wu,_m=e=>Math.sqrt(e[0]*e[0]+e[1]*e[1]),Om=e=>Math.sqrt(e[4]*e[4]+e[5]*e[5]),yS={x:12,y:13,z:14,translateX:12,translateY:13,translateZ:14,scaleX:_m,scaleY:Om,scale:e=>(_m(e)+Om(e))/2,rotateX:e=>ku(Cr(Math.atan2(e[6],e[5]))),rotateY:e=>ku(Cr(Math.atan2(-e[2],e[0]))),rotateZ:zm,rotate:zm,skewX:e=>Cr(Math.atan(e[4])),skewY:e=>Cr(Math.atan(e[1])),skew:e=>(Math.abs(e[1])+Math.abs(e[4]))/2};function ju(e){return e.includes("scale")?1:0}function Su(e,t){if(!e||e==="none")return ju(t);const n=e.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);let r,i;if(n)r=yS,i=n;else{const l=e.match(/^matrix\(([-\d.e\s,]+)\)$/u);r=xS,i=l}if(!i)return ju(t);const a=r[t],o=i[1].split(",").map(bS);return typeof a=="function"?a(o):o[a]}const vS=(e,t)=>{const{transform:n="none"}=getComputedStyle(e);return Su(n,t)};function bS(e){return parseFloat(e.trim())}const si=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],ii=new Set([...si,"pathRotation"]),Fm=e=>e===ri||e===F,wS=new Set(["x","y","z"]),kS=si.filter(e=>!wS.has(e));function jS(e){const t=[];return kS.forEach(n=>{const r=e.getValue(n);r!==void 0&&(t.push([n,r.get()]),r.set(n.startsWith("scale")?1:0))}),t}const Yn={width:({x:e},{paddingLeft:t="0",paddingRight:n="0",boxSizing:r})=>{const i=e.max-e.min;return r==="border-box"?i:i-parseFloat(t)-parseFloat(n)},height:({y:e},{paddingTop:t="0",paddingBottom:n="0",boxSizing:r})=>{const i=e.max-e.min;return r==="border-box"?i:i-parseFloat(t)-parseFloat(n)},top:(e,{top:t})=>parseFloat(t),left:(e,{left:t})=>parseFloat(t),bottom:({y:e},{top:t})=>parseFloat(t)+(e.max-e.min),right:({x:e},{left:t})=>parseFloat(t)+(e.max-e.min),x:(e,{transform:t})=>Su(t,"x"),y:(e,{transform:t})=>Su(t,"y")};Yn.translateX=Yn.x;Yn.translateY=Yn.y;const Br=new Set;let Nu=!1,Tu=!1,Eu=!1;function hv(){if(Tu){const e=Array.from(Br).filter(r=>r.needsMeasurement),t=new Set(e.map(r=>r.element)),n=new Map;t.forEach(r=>{const i=jS(r);i.length&&(n.set(r,i),r.render())}),e.forEach(r=>r.measureInitialState()),t.forEach(r=>{r.render();const i=n.get(r);i&&i.forEach(([a,o])=>{var l;(l=r.getValue(a))==null||l.set(o)})}),e.forEach(r=>r.measureEndState()),e.forEach(r=>{r.suspendedScrollY!==void 0&&window.scrollTo(0,r.suspendedScrollY)})}Tu=!1,Nu=!1,Br.forEach(e=>e.complete(Eu)),Br.clear()}function mv(){Br.forEach(e=>{e.readKeyframes(),e.needsMeasurement&&(Tu=!0)})}function SS(){Eu=!0,mv(),hv(),Eu=!1}class rf{constructor(t,n,r,i,a,o=!1){this.state="pending",this.isAsync=!1,this.needsMeasurement=!1,this.unresolvedKeyframes=[...t],this.onComplete=n,this.name=r,this.motionValue=i,this.element=a,this.isAsync=o}scheduleResolve(){this.state="scheduled",this.isAsync?(Br.add(this),Nu||(Nu=!0,re.read(mv),re.resolveKeyframes(hv))):(this.readKeyframes(),this.complete())}readKeyframes(){const{unresolvedKeyframes:t,name:n,element:r,motionValue:i}=this;if(t[0]===null){const a=i==null?void 0:i.get(),o=t[t.length-1];if(a!==void 0)t[0]=a;else if(r&&n){const l=r.readValue(n,o);l!=null&&(t[0]=l)}t[0]===void 0&&(t[0]=o),i&&a===void 0&&i.set(t[0])}gS(t)}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(t=!1){this.state="complete",this.onComplete(this.unresolvedKeyframes,this.finalKeyframe,t),Br.delete(this)}cancel(){this.state==="scheduled"&&(Br.delete(this),this.state="pending")}resume(){this.state==="pending"&&this.scheduleResolve()}}const NS=e=>e.startsWith("--");function gv(e,t,n){NS(t)?e.style.setProperty(t,n):e.style[t]=n}const TS={};function xv(e,t){const n=$y(e);return()=>TS[t]??n()}const ES=xv(()=>window.ScrollTimeline!==void 0,"scrollTimeline"),yv=xv(()=>{try{document.createElement("div").animate({opacity:0},{easing:"linear(0, 1)"})}catch{return!1}return!0},"linearEasing"),Ri=([e,t,n,r])=>`cubic-bezier(${e}, ${t}, ${n}, ${r})`,Vm={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:Ri([0,.65,.55,1]),circOut:Ri([.55,0,1,.45]),backIn:Ri([.31,.01,.66,-.59]),backOut:Ri([.33,1.53,.69,.99])};function vv(e,t){if(e)return typeof e=="function"?yv()?uv(e,t):"ease-out":tv(e)?Ri(e):Array.isArray(e)?e.map(n=>vv(n,t)||Vm.easeOut):Vm[e]}function CS(e,t,n,{delay:r=0,duration:i=300,repeat:a=0,repeatType:o="loop",ease:l="easeOut",times:c}={},d=void 0){const u={[t]:n};c&&(u.offset=c);const p=vv(l,i);Array.isArray(p)&&(u.easing=p);const f={delay:r,duration:i,easing:Array.isArray(p)?"linear":p,fill:"both",iterations:a+1,direction:o==="reverse"?"alternate":"normal"};return d&&(f.pseudoElement=d),e.animate(u,f)}function bv(e){return typeof e=="function"&&"applyToOptions"in e}function AS({type:e,...t}){return bv(e)&&yv()?e.applyToOptions(t):(t.duration??(t.duration=300),t.ease??(t.ease="easeOut"),t)}class wv extends nf{constructor(t){if(super(),this.finishedTime=null,this.isStopped=!1,this.manualStartTime=null,!t)return;const{element:n,name:r,keyframes:i,pseudoElement:a,allowFlatten:o=!1,finalKeyframe:l,onComplete:c}=t;this.isPseudoElement=!!a,this.allowFlatten=o,this.options=t,Kp(typeof t.type!="string");const d=AS(t);this.animation=CS(n,r,i,d,a),d.autoplay===!1&&this.animation.pause(),this.animation.onfinish=()=>{if(this.finishedTime=this.time,!a){const u=Ll(i,this.options,l,this.speed);this.updateMotionValue&&this.updateMotionValue(u),gv(n,r,u),this.animation.cancel()}c==null||c(),this.notifyFinished()}}play(){this.isStopped||(this.manualStartTime=null,this.animation.play(),this.state==="finished"&&this.updateFinished())}pause(){this.animation.pause()}complete(){var t,n;(n=(t=this.animation).finish)==null||n.call(t)}cancel(){try{this.animation.cancel()}catch{}}stop(){if(this.isStopped)return;this.isStopped=!0;const{state:t}=this;t==="idle"||t==="finished"||(this.updateMotionValue?this.updateMotionValue():this.commitStyles(),this.isPseudoElement||this.cancel())}commitStyles(){var n,r,i;const t=(n=this.options)==null?void 0:n.element;!this.isPseudoElement&&(t!=null&&t.isConnected)&&((i=(r=this.animation).commitStyles)==null||i.call(r))}get duration(){var n,r;const t=((r=(n=this.animation.effect)==null?void 0:n.getComputedTiming)==null?void 0:r.call(n).duration)||0;return At(Number(t))}get iterationDuration(){const{delay:t=0}=this.options||{};return this.duration+At(t)}get time(){return At(Number(this.animation.currentTime)||0)}set time(t){const n=this.finishedTime!==null;this.manualStartTime=null,this.finishedTime=null,this.animation.currentTime=bt(t),n&&this.animation.pause()}get speed(){return this.animation.playbackRate}set speed(t){t<0&&(this.finishedTime=null),this.animation.playbackRate=t}get state(){return this.finishedTime!==null?"finished":this.animation.playState}get startTime(){return this.manualStartTime??Number(this.animation.startTime)}set startTime(t){this.manualStartTime=this.animation.startTime=t}attachTimeline({timeline:t,rangeStart:n,rangeEnd:r,observe:i}){var a;return this.allowFlatten&&((a=this.animation.effect)==null||a.updateTiming({easing:"linear"})),this.animation.onfinish=null,t&&ES()?(this.animation.timeline=t,n&&(this.animation.rangeStart=n),r&&(this.animation.rangeEnd=r),Rt):i(this)}}const kv={anticipate:Xy,backInOut:Yy,circInOut:Zy};function PS(e){return e in kv}function RS(e){typeof e.ease=="string"&&PS(e.ease)&&(e.ease=kv[e.ease])}const Fc=10;class MS extends wv{constructor(t){RS(t),fv(t),super(t),t.startTime!==void 0&&t.autoplay!==!1&&(this.startTime=t.startTime),this.options=t}updateMotionValue(t){const{motionValue:n,onUpdate:r,onComplete:i,element:a,...o}=this.options;if(!n)return;if(t!==void 0){n.set(t);return}const l=new dl({...o,autoplay:!1}),c=Math.max(Fc,tt.now()-this.startTime),d=ln(0,Fc,c-Fc),u=l.sample(c).value,{name:p}=this.options;a&&p&&gv(a,p,u),n.setWithVelocity(l.sample(Math.max(0,c-d)).value,u,d),l.stop()}}const Bm=(e,t)=>t==="zIndex"?!1:!!(typeof e=="number"||Array.isArray(e)||typeof e=="string"&&($t.test(e)||e==="0")&&!e.startsWith("url("));function IS(e){const t=e[0];if(e.length===1)return!0;for(let n=0;n<e.length;n++)if(e[n]!==t)return!0}function LS(e,t,n,r){const i=e[0];if(i===null)return!1;if(t==="display"||t==="visibility")return!0;const a=e[e.length-1],o=Bm(i,t),l=Bm(a,t);return!o||!l?!1:IS(e)||(n==="spring"||bv(n))&&r}function Cu(e){e.duration=0,e.type="keyframes"}const jv=new Set(["opacity","clipPath","filter","transform"]),DS=/^(?:oklch|oklab|lab|lch|color|color-mix|light-dark)\(/;function zS(e){for(let t=0;t<e.length;t++)if(typeof e[t]=="string"&&DS.test(e[t]))return!0;return!1}const _S=new Set(["color","backgroundColor","outlineColor","fill","stroke","borderColor","borderTopColor","borderRightColor","borderBottomColor","borderLeftColor"]),OS=$y(()=>Object.hasOwnProperty.call(Element.prototype,"animate"));function FS(e){var p;const{motionValue:t,name:n,repeatDelay:r,repeatType:i,damping:a,type:o,keyframes:l}=e;if(!(((p=t==null?void 0:t.owner)==null?void 0:p.current)instanceof HTMLElement))return!1;const{onUpdate:d,transformTemplate:u}=t.owner.getProps();return OS()&&n&&(jv.has(n)||_S.has(n)&&zS(l))&&(n!=="transform"||!u)&&!d&&!r&&i!=="mirror"&&a!==0&&o!=="inertia"}const VS=40;class BS extends nf{constructor({autoplay:t=!0,delay:n=0,type:r="keyframes",repeat:i=0,repeatDelay:a=0,repeatType:o="loop",keyframes:l,name:c,motionValue:d,element:u,...p}){var m;super(),this.stop=()=>{var y,k;this._animation&&(this._animation.stop(),(y=this.stopTimeline)==null||y.call(this)),(k=this.keyframeResolver)==null||k.cancel()},this.createdAt=tt.now();const f={autoplay:t,delay:n,type:r,repeat:i,repeatDelay:a,repeatType:o,name:c,motionValue:d,element:u,...p},h=(u==null?void 0:u.KeyframeResolver)||rf;this.keyframeResolver=new h(l,(y,k,x)=>this.onKeyframesResolved(y,k,f,!x),c,d,u),(m=this.keyframeResolver)==null||m.scheduleResolve()}onKeyframesResolved(t,n,r,i){var x,g;this.keyframeResolver=void 0;const{name:a,type:o,velocity:l,delay:c,isHandoff:d,onUpdate:u}=r;this.resolvedAt=tt.now();let p=!0;LS(t,a,o,l)||(p=!1,(lr.instantAnimations||!c)&&(u==null||u(Ll(t,r,n))),t[0]=t[t.length-1],Cu(r),r.repeat=0);const h={startTime:i?this.resolvedAt?this.resolvedAt-this.createdAt>VS?this.resolvedAt:this.createdAt:this.createdAt:void 0,finalKeyframe:n,...r,keyframes:t},m=p&&!d&&FS(h),y=(g=(x=h.motionValue)==null?void 0:x.owner)==null?void 0:g.current;let k;if(m)try{k=new MS({...h,element:y})}catch{k=new dl(h)}else k=new dl(h);k.finished.then(()=>{this.notifyFinished()}).catch(Rt),this.pendingTimeline&&(this.stopTimeline=k.attachTimeline(this.pendingTimeline),this.pendingTimeline=void 0),this._animation=k}get finished(){return this._animation?this.animation.finished:this._finished}then(t,n){return this.finished.finally(t).then(()=>{})}get animation(){var t;return this._animation||((t=this.keyframeResolver)==null||t.resume(),SS()),this._animation}get duration(){return this.animation.duration}get iterationDuration(){return this.animation.iterationDuration}get time(){return this.animation.time}set time(t){this.animation.time=t}get speed(){return this.animation.speed}get state(){return this.animation.state}set speed(t){this.animation.speed=t}get startTime(){return this.animation.startTime}attachTimeline(t){return this._animation?this.stopTimeline=this.animation.attachTimeline(t):this.pendingTimeline=t,()=>this.stop()}play(){this.animation.play()}pause(){this.animation.pause()}complete(){this.animation.complete()}cancel(){var t;this._animation&&this.animation.cancel(),(t=this.keyframeResolver)==null||t.cancel()}}function Sv(e,t,n,r=0,i=1){const a=Array.from(e).sort((d,u)=>d.sortNodePosition(u)).indexOf(t),o=e.size,l=(o-1)*r;return typeof n=="function"?n(a,o):i===1?a*r:l-a*r}const Um=30,US=e=>!isNaN(parseFloat(e));class HS{constructor(t,n={}){this.canTrackVelocity=null,this.events={},this.updateAndNotify=r=>{var a;const i=tt.now();if(this.updatedAt!==i&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(r),this.current!==this.prev&&((a=this.events.change)==null||a.notify(this.current),this.dependents))for(const o of this.dependents)o.dirty()},this.hasAnimated=!1,this.setCurrent(t),this.owner=n.owner}setCurrent(t){this.current=t,this.updatedAt=tt.now(),this.canTrackVelocity===null&&t!==void 0&&(this.canTrackVelocity=US(this.current))}setPrevFrameValue(t=this.current){this.prevFrameValue=t,this.prevUpdatedAt=this.updatedAt}onChange(t){return this.on("change",t)}on(t,n){this.events[t]||(this.events[t]=new Qp);const r=this.events[t].add(n);return t==="change"?()=>{r(),re.read(()=>{this.events.change.getSize()||this.stop()})}:r}clearListeners(){for(const t in this.events)this.events[t].clear()}attach(t,n){this.passiveEffect=t,this.stopPassiveEffect=n}set(t){this.passiveEffect?this.passiveEffect(t,this.updateAndNotify):this.updateAndNotify(t)}setWithVelocity(t,n,r){this.set(n),this.prev=void 0,this.prevFrameValue=t,this.prevUpdatedAt=this.updatedAt-r}jump(t,n=!0){this.updateAndNotify(t),this.prev=t,this.prevUpdatedAt=this.prevFrameValue=void 0,n&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}dirty(){var t;(t=this.events.change)==null||t.notify(this.current)}addDependent(t){this.dependents||(this.dependents=new Set),this.dependents.add(t)}removeDependent(t){this.dependents&&this.dependents.delete(t)}get(){return this.current}getPrevious(){return this.prev}getVelocity(){const t=tt.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||t-this.updatedAt>Um)return 0;const n=Math.min(this.updatedAt-this.prevUpdatedAt,Um);return Gy(parseFloat(this.current)-parseFloat(this.prevFrameValue),n)}start(t){return this.stop(),new Promise(n=>{this.hasAnimated=!0,this.animation=t(n),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){var t,n;(t=this.dependents)==null||t.clear(),(n=this.events.destroy)==null||n.notify(),this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function Zs(e,t){return new HS(e,t)}function Nv(e,t){if(e!=null&&e.inherit&&t){const{inherit:n,...r}=e;return{...t,...r}}return e}function sf(e,t){const n=(e==null?void 0:e[t])??(e==null?void 0:e.default)??e;return n!==e?Nv(n,e):n}const $S={type:"spring",stiffness:500,damping:25,restSpeed:10},GS=e=>({type:"spring",stiffness:550,damping:e===0?2*Math.sqrt(550):30,restSpeed:10}),WS={type:"keyframes",duration:.8},KS={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},QS=(e,{keyframes:t})=>t.length>2?WS:ii.has(e)?e.startsWith("scale")?GS(t[1]):$S:KS,qS=new Set(["when","delay","delayChildren","staggerChildren","staggerDirection","repeat","repeatType","repeatDelay","from","elapsed"]);function YS(e){for(const t in e)if(!qS.has(t))return!0;return!1}const af=(e,t,n,r={},i,a)=>o=>{const l=sf(r,e)||{},c=l.delay||r.delay||0;let{elapsed:d=0}=r;d=d-bt(c);const u={keyframes:Array.isArray(n)?n:[null,n],ease:"easeOut",velocity:t.getVelocity(),...l,delay:-d,onUpdate:f=>{t.set(f),l.onUpdate&&l.onUpdate(f)},onComplete:()=>{o(),l.onComplete&&l.onComplete()},name:e,motionValue:t,element:a?void 0:i};YS(l)||Object.assign(u,QS(e,u)),u.duration&&(u.duration=bt(u.duration)),u.repeatDelay&&(u.repeatDelay=bt(u.repeatDelay)),u.from!==void 0&&(u.keyframes[0]=u.from);let p=!1;if((u.type===!1||u.duration===0&&!u.repeatDelay)&&(Cu(u),u.delay===0&&(p=!0)),(lr.instantAnimations||lr.skipAnimations||i!=null&&i.shouldSkipAnimations||l.skipAnimations)&&(p=!0,Cu(u),u.delay=0),u.allowFlatten=!l.type&&!l.ease,p&&!a&&t.get()!==void 0){const f=Ll(u.keyframes,l);if(f!==void 0){re.update(()=>{u.onUpdate(f),u.onComplete()});return}}return l.isSync?new dl(u):new BS(u)},XS=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function JS(e){const t=XS.exec(e);if(!t)return[,];const[,n,r,i]=t;return[`--${n??r}`,i]}function Tv(e,t,n=1){const[r,i]=JS(e);if(!r)return;const a=window.getComputedStyle(t).getPropertyValue(r);if(a){const o=a.trim();return By(o)?parseFloat(o):o}return Xp(i)?Tv(i,t,n+1):i}function Hm(e){const t=[{},{}];return e==null||e.values.forEach((n,r)=>{t[0][r]=n.get(),t[1][r]=n.getVelocity()}),t}function of(e,t,n,r){if(typeof t=="function"){const[i,a]=Hm(r);t=t(n!==void 0?n:e.custom,i,a)}if(typeof t=="string"&&(t=e.variants&&e.variants[t]),typeof t=="function"){const[i,a]=Hm(r);t=t(n!==void 0?n:e.custom,i,a)}return t}function Ur(e,t,n){const r=e.getProps();return of(r,t,n!==void 0?n:r.custom,e)}const Ev=new Set(["width","height","top","left","right","bottom",...si]),Au=e=>Array.isArray(e);function ZS(e,t,n){e.hasValue(t)?e.getValue(t).set(n):e.addValue(t,Zs(n))}function eN(e){return Au(e)?e[e.length-1]||0:e}function tN(e,t){const n=Ur(e,t);let{transitionEnd:r={},transition:i={},...a}=n||{};a={...a,...r};for(const o in a){const l=eN(a[o]);ZS(e,o,l)}}const Ve=e=>!!(e&&e.getVelocity);function nN(e){return!!(Ve(e)&&e.add)}function Pu(e,t){const n=e.getValue("willChange");if(nN(n))return n.add(t);if(!n&&lr.WillChange){const r=new lr.WillChange("auto");e.addValue("willChange",r),r.add(t)}}function lf(e){return e.replace(/([A-Z])/g,t=>`-${t.toLowerCase()}`)}const rN="framerAppearId",Cv="data-"+lf(rN);function Av(e){return e.props[Cv]}function sN({protectedKeys:e,needsAnimating:t},n){const r=e.hasOwnProperty(n)&&t[n]!==!0;return t[n]=!1,r}function Pv(e,t,{delay:n=0,transitionOverride:r,type:i}={}){let{transition:a,transitionEnd:o,...l}=t;const c=e.getDefaultTransition();a=a?Nv(a,c):c;const d=a==null?void 0:a.reduceMotion,u=a==null?void 0:a.skipAnimations;r&&(a=r);const p=[],f=i&&e.animationState&&e.animationState.getState()[i],h=a==null?void 0:a.path;h&&h.animateVisualElement(e,l,a,n,p);for(const m in l){const y=e.getValue(m,e.latestValues[m]??null),k=l[m];if(k===void 0||f&&sN(f,m))continue;const x={delay:n,...sf(a||{},m)};u&&(x.skipAnimations=!0);const g=y.get();if(g!==void 0&&!y.isAnimating()&&!Array.isArray(k)&&k===g&&!x.velocity){re.update(()=>y.set(k));continue}let v=!1;if(window.MotionHandoffAnimation){const A=Av(e);if(A){const C=window.MotionHandoffAnimation(A,m,re);C!==null&&(x.startTime=C,v=!0)}}Pu(e,m);const w=d??e.shouldReduceMotion;y.start(af(m,y,k,w&&Ev.has(m)?{type:!1}:x,e,v));const N=y.animation;N&&p.push(N)}if(o){const m=()=>re.update(()=>{o&&tN(e,o)});p.length?Promise.all(p).then(m):m()}return p}function Ru(e,t,n={}){var c;const r=Ur(e,t,n.type==="exit"?(c=e.presenceContext)==null?void 0:c.custom:void 0);let{transition:i=e.getDefaultTransition()||{}}=r||{};n.transitionOverride&&(i=n.transitionOverride);const a=r?()=>Promise.all(Pv(e,r,n)):()=>Promise.resolve(),o=e.variantChildren&&e.variantChildren.size?(d=0)=>{const{delayChildren:u=0,staggerChildren:p,staggerDirection:f}=i;return iN(e,t,d,u,p,f,n)}:()=>Promise.resolve(),{when:l}=i;if(l){const[d,u]=l==="beforeChildren"?[a,o]:[o,a];return d().then(()=>u())}else return Promise.all([a(),o(n.delay)])}function iN(e,t,n=0,r=0,i=0,a=1,o){const l=[];for(const c of e.variantChildren)c.notify("AnimationStart",t),l.push(Ru(c,t,{...o,delay:n+(typeof r=="function"?0:r)+Sv(e.variantChildren,c,r,i,a)}).then(()=>c.notify("AnimationComplete",t)));return Promise.all(l)}function aN(e,t,n={}){e.notify("AnimationStart",t);let r;if(Array.isArray(t)){const i=t.map(a=>Ru(e,a,n));r=Promise.all(i)}else if(typeof t=="string")r=Ru(e,t,n);else{const i=typeof t=="function"?Ur(e,t,n.custom):t;r=Promise.all(Pv(e,i,n))}return r.then(()=>{e.notify("AnimationComplete",t)})}const oN={test:e=>e==="auto",parse:e=>e},Rv=e=>t=>t.test(e),Mv=[ri,F,on,fn,Ij,Mj,oN],$m=e=>Mv.find(Rv(e));function lN(e){return typeof e=="number"?e===0:e!==null?e==="none"||e==="0"||Hy(e):!0}const cN=new Set(["brightness","contrast","saturate","opacity"]);function dN(e){const[t,n]=e.slice(0,-1).split("(");if(t==="drop-shadow")return e;const[r]=n.match(Jp)||[];if(!r)return e;const i=n.replace(r,"");let a=cN.has(t)?1:0;return r!==n&&(a*=100),t+"("+a+i+")"}const uN=/\b([a-z-]*)\(.*?\)/gu,Mu={...$t,getAnimatableNone:e=>{const t=e.match(uN);return t?t.map(dN).join(" "):e}},Iu={...$t,getAnimatableNone:e=>{const t=$t.parse(e);return $t.createTransformer(e)(t.map(r=>typeof r=="number"?0:typeof r=="object"?{...r,alpha:1}:r))}},Gm={...ri,transform:Math.round},pN={rotate:fn,pathRotation:fn,rotateX:fn,rotateY:fn,rotateZ:fn,scale:oo,scaleX:oo,scaleY:oo,scaleZ:oo,skew:fn,skewX:fn,skewY:fn,distance:F,translateX:F,translateY:F,translateZ:F,x:F,y:F,z:F,perspective:F,transformPerspective:F,opacity:ma,originX:Rm,originY:Rm,originZ:F},ul={borderWidth:F,borderTopWidth:F,borderRightWidth:F,borderBottomWidth:F,borderLeftWidth:F,borderRadius:F,borderTopLeftRadius:F,borderTopRightRadius:F,borderBottomRightRadius:F,borderBottomLeftRadius:F,width:F,maxWidth:F,height:F,maxHeight:F,top:F,right:F,bottom:F,left:F,inset:F,insetBlock:F,insetBlockStart:F,insetBlockEnd:F,insetInline:F,insetInlineStart:F,insetInlineEnd:F,padding:F,paddingTop:F,paddingRight:F,paddingBottom:F,paddingLeft:F,paddingBlock:F,paddingBlockStart:F,paddingBlockEnd:F,paddingInline:F,paddingInlineStart:F,paddingInlineEnd:F,margin:F,marginTop:F,marginRight:F,marginBottom:F,marginLeft:F,marginBlock:F,marginBlockStart:F,marginBlockEnd:F,marginInline:F,marginInlineStart:F,marginInlineEnd:F,fontSize:F,backgroundPositionX:F,backgroundPositionY:F,...pN,zIndex:Gm,fillOpacity:ma,strokeOpacity:ma,numOctaves:Gm},fN={...ul,color:Ne,backgroundColor:Ne,outlineColor:Ne,fill:Ne,stroke:Ne,borderColor:Ne,borderTopColor:Ne,borderRightColor:Ne,borderBottomColor:Ne,borderLeftColor:Ne,filter:Mu,WebkitFilter:Mu,mask:Iu,WebkitMask:Iu},Iv=e=>fN[e],hN=new Set([Mu,Iu]);function Lv(e,t){let n=Iv(e);return hN.has(n)||(n=$t),n.getAnimatableNone?n.getAnimatableNone(t):void 0}const mN=new Set(["auto","none","0"]);function gN(e,t,n){let r=0,i;for(;r<e.length&&!i;){const a=e[r];typeof a=="string"&&!mN.has(a)&&Js(a).values.length&&(i=e[r]),r++}if(i&&n)for(const a of t)e[a]=Lv(n,i)}class xN extends rf{constructor(t,n,r,i,a){super(t,n,r,i,a,!0)}readKeyframes(){const{unresolvedKeyframes:t,element:n,name:r}=this;if(!n||!n.current)return;super.readKeyframes();for(let u=0;u<t.length;u++){let p=t[u];if(typeof p=="string"&&(p=p.trim(),Xp(p))){const f=Tv(p,n.current);f!==void 0&&(t[u]=f),u===t.length-1&&(this.finalKeyframe=p)}}if(this.resolveNoneKeyframes(),!Ev.has(r)||t.length!==2)return;const[i,a]=t,o=$m(i),l=$m(a),c=Pm(i),d=Pm(a);if(c!==d&&Yn[r]){this.needsMeasurement=!0;return}if(o!==l)if(Fm(o)&&Fm(l))for(let u=0;u<t.length;u++){const p=t[u];typeof p=="string"&&(t[u]=parseFloat(p))}else Yn[r]&&(this.needsMeasurement=!0)}resolveNoneKeyframes(){const{unresolvedKeyframes:t,name:n}=this,r=[];for(let i=0;i<t.length;i++)(t[i]===null||lN(t[i]))&&r.push(i);r.length&&gN(t,r,n)}measureInitialState(){const{element:t,unresolvedKeyframes:n,name:r}=this;if(!t||!t.current)return;r==="height"&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=Yn[r](t.measureViewportBox(),window.getComputedStyle(t.current)),n[0]=this.measuredOrigin;const i=n[n.length-1];i!==void 0&&t.getValue(r,i).jump(i,!1)}measureEndState(){var l;const{element:t,name:n,unresolvedKeyframes:r}=this;if(!t||!t.current)return;const i=t.getValue(n);i&&i.jump(this.measuredOrigin,!1);const a=r.length-1,o=r[a];r[a]=Yn[n](t.measureViewportBox(),window.getComputedStyle(t.current)),o!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=o),(l=this.removedTransforms)!=null&&l.length&&this.removedTransforms.forEach(([c,d])=>{t.getValue(c).set(d)}),this.resolveNoneKeyframes()}}function Dv(e,t,n){if(e==null)return[];if(e instanceof EventTarget)return[e];if(typeof e=="string"){let r=document;const i=(n==null?void 0:n[e])??r.querySelectorAll(e);return i?Array.from(i):[]}return Array.from(e).filter(r=>r!=null)}const Lu=(e,t)=>t&&typeof e=="number"?t.transform(e):e;function yN(e){return Uy(e)&&"offsetHeight"in e&&!("ownerSVGElement"in e)}const{schedule:cf}=nv(queueMicrotask,!1),_t={x:!1,y:!1};function zv(){return _t.x||_t.y}function vN(e){return e==="x"||e==="y"?_t[e]?null:(_t[e]=!0,()=>{_t[e]=!1}):_t.x||_t.y?null:(_t.x=_t.y=!0,()=>{_t.x=_t.y=!1})}function _v(e,t){const n=Dv(e),r=new AbortController,i={passive:!0,...t,signal:r.signal};return[n,i,()=>r.abort()]}function bN(e){return!(e.pointerType==="touch"||zv())}function wN(e,t,n={}){const[r,i,a]=_v(e,n);return r.forEach(o=>{let l=!1,c=!1,d;const u=()=>{o.removeEventListener("pointerleave",m)},p=k=>{d&&(d(k),d=void 0),u()},f=k=>{l=!1,window.removeEventListener("pointerup",f),window.removeEventListener("pointercancel",f),c&&(c=!1,p(k))},h=()=>{l=!0,window.addEventListener("pointerup",f,i),window.addEventListener("pointercancel",f,i)},m=k=>{if(k.pointerType!=="touch"){if(l){c=!0;return}p(k)}},y=k=>{if(!bN(k))return;c=!1;const x=t(o,k);typeof x=="function"&&(d=x,o.addEventListener("pointerleave",m,i))};o.addEventListener("pointerenter",y,i),o.addEventListener("pointerdown",h,i)}),a}const Ov=(e,t)=>t?e===t?!0:Ov(e,t.parentElement):!1,df=e=>e.pointerType==="mouse"?typeof e.button!="number"||e.button<=0:e.isPrimary!==!1,kN=new Set(["BUTTON","INPUT","SELECT","TEXTAREA","A"]);function jN(e){return kN.has(e.tagName)||e.isContentEditable===!0}const SN=new Set(["INPUT","SELECT","TEXTAREA"]);function NN(e){return SN.has(e.tagName)||e.isContentEditable===!0}const To=new WeakSet;function Wm(e){return t=>{t.key==="Enter"&&e(t)}}function Vc(e,t){e.dispatchEvent(new PointerEvent("pointer"+t,{isPrimary:!0,bubbles:!0}))}const TN=(e,t)=>{const n=e.currentTarget;if(!n)return;const r=Wm(()=>{if(To.has(n))return;Vc(n,"down");const i=Wm(()=>{Vc(n,"up")}),a=()=>Vc(n,"cancel");n.addEventListener("keyup",i,t),n.addEventListener("blur",a,t)});n.addEventListener("keydown",r,t),n.addEventListener("blur",()=>n.removeEventListener("keydown",r),t)};function Km(e){return df(e)&&!zv()}const Qm=new WeakSet;function EN(e,t,n={}){const[r,i,a]=_v(e,n),o=l=>{const c=l.currentTarget;if(!Km(l)||Qm.has(l))return;To.add(c),n.stopPropagation&&Qm.add(l);const d=t(c,l),u=(h,m)=>{window.removeEventListener("pointerup",p),window.removeEventListener("pointercancel",f),To.has(c)&&To.delete(c),Km(h)&&typeof d=="function"&&d(h,{success:m})},p=h=>{u(h,c===window||c===document||n.useGlobalTarget||Ov(c,h.target))},f=h=>{u(h,!1)};window.addEventListener("pointerup",p,i),window.addEventListener("pointercancel",f,i)};return r.forEach(l=>{(n.useGlobalTarget?window:l).addEventListener("pointerdown",o,i),yN(l)&&(l.addEventListener("focus",d=>TN(d,i)),!jN(l)&&!l.hasAttribute("tabindex")&&(l.tabIndex=0))}),a}function uf(e){return Uy(e)&&"ownerSVGElement"in e}const Eo=new WeakMap;let Ln;const Fv=(e,t,n)=>(r,i)=>i&&i[0]?i[0][e+"Size"]:uf(r)&&"getBBox"in r?r.getBBox()[t]:r[n],CN=Fv("inline","width","offsetWidth"),AN=Fv("block","height","offsetHeight");function PN({target:e,borderBoxSize:t}){var n;(n=Eo.get(e))==null||n.forEach(r=>{r(e,{get width(){return CN(e,t)},get height(){return AN(e,t)}})})}function RN(e){e.forEach(PN)}function MN(){typeof ResizeObserver>"u"||(Ln=new ResizeObserver(RN))}function IN(e,t){Ln||MN();const n=Dv(e);return n.forEach(r=>{let i=Eo.get(r);i||(i=new Set,Eo.set(r,i)),i.add(t),Ln==null||Ln.observe(r)}),()=>{n.forEach(r=>{const i=Eo.get(r);i==null||i.delete(t),i!=null&&i.size||Ln==null||Ln.unobserve(r)})}}const Co=new Set;let Ss;function LN(){Ss=()=>{const e={get width(){return window.innerWidth},get height(){return window.innerHeight}};Co.forEach(t=>t(e))},window.addEventListener("resize",Ss)}function DN(e){return Co.add(e),Ss||LN(),()=>{Co.delete(e),!Co.size&&typeof Ss=="function"&&(window.removeEventListener("resize",Ss),Ss=void 0)}}function qm(e,t){return typeof e=="function"?DN(e):IN(e,t)}function zN(e){return uf(e)&&e.tagName==="svg"}const _N=[...Mv,Ne,$t],ON=e=>_N.find(Rv(e)),Ym=()=>({translate:0,scale:1,origin:0,originPoint:0}),Ns=()=>({x:Ym(),y:Ym()}),Xm=()=>({min:0,max:0}),Ce=()=>({x:Xm(),y:Xm()}),FN=new WeakMap;function Dl(e){return e!==null&&typeof e=="object"&&typeof e.start=="function"}function ga(e){return typeof e=="string"||Array.isArray(e)}const pf=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],ff=["initial",...pf];function zl(e){return Dl(e.animate)||ff.some(t=>ga(e[t]))}function Vv(e){return!!(zl(e)||e.variants)}function VN(e,t,n){for(const r in t){const i=t[r],a=n[r];if(Ve(i))e.addValue(r,i);else if(Ve(a))e.addValue(r,Zs(i,{owner:e}));else if(a!==i)if(e.hasValue(r)){const o=e.getValue(r);o.liveStyle===!0?o.jump(i):o.hasAnimated||o.set(i)}else{const o=e.getStaticValue(r);e.addValue(r,Zs(o!==void 0?o:i,{owner:e}))}}for(const r in n)t[r]===void 0&&e.removeValue(r);return t}const Du={current:null},Bv={current:!1},BN=typeof window<"u";function UN(){if(Bv.current=!0,!!BN)if(window.matchMedia){const e=window.matchMedia("(prefers-reduced-motion)"),t=()=>Du.current=e.matches;e.addEventListener("change",t),t()}else Du.current=!1}const Jm=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"];let pl={};function Uv(e){pl=e}function HN(){return pl}class $N{scrapeMotionValuesFromProps(t,n,r){return{}}constructor({parent:t,props:n,presenceContext:r,reducedMotionConfig:i,skipAnimations:a,blockInitialAnimation:o,visualState:l},c={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.shouldSkipAnimations=!1,this.values=new Map,this.KeyframeResolver=rf,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.hasBeenMounted=!1,this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{const h=tt.now();this.renderScheduledAt<h&&(this.renderScheduledAt=h,re.render(this.render,!1,!0))};const{latestValues:d,renderState:u}=l;this.latestValues=d,this.baseTarget={...d},this.initialValues=n.initial?{...d}:{},this.renderState=u,this.parent=t,this.props=n,this.presenceContext=r,this.depth=t?t.depth+1:0,this.reducedMotionConfig=i,this.skipAnimationsConfig=a,this.options=c,this.blockInitialAnimation=!!o,this.isControllingVariants=zl(n),this.isVariantNode=Vv(n),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(t&&t.current);const{willChange:p,...f}=this.scrapeMotionValuesFromProps(n,{},this);for(const h in f){const m=f[h];d[h]!==void 0&&Ve(m)&&m.set(d[h])}}mount(t){var n,r;if(this.hasBeenMounted)for(const i in this.initialValues)(n=this.values.get(i))==null||n.jump(this.initialValues[i]),this.latestValues[i]=this.initialValues[i];this.current=t,FN.set(t,this),this.projection&&!this.projection.instance&&this.projection.mount(t),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((i,a)=>this.bindToMotionValue(a,i)),this.reducedMotionConfig==="never"?this.shouldReduceMotion=!1:this.reducedMotionConfig==="always"?this.shouldReduceMotion=!0:(Bv.current||UN(),this.shouldReduceMotion=Du.current),this.shouldSkipAnimations=this.skipAnimationsConfig??!1,(r=this.parent)==null||r.addChild(this),this.update(this.props,this.presenceContext),this.hasBeenMounted=!0}unmount(){var t;this.projection&&this.projection.unmount(),cr(this.notifyUpdate),cr(this.render),this.valueSubscriptions.forEach(n=>n()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),(t=this.parent)==null||t.removeChild(this);for(const n in this.events)this.events[n].clear();for(const n in this.features){const r=this.features[n];r&&(r.unmount(),r.isMounted=!1)}this.current=null}addChild(t){this.children.add(t),this.enteringChildren??(this.enteringChildren=new Set),this.enteringChildren.add(t)}removeChild(t){this.children.delete(t),this.enteringChildren&&this.enteringChildren.delete(t)}bindToMotionValue(t,n){if(this.valueSubscriptions.has(t)&&this.valueSubscriptions.get(t)(),n.accelerate&&jv.has(t)&&this.current instanceof HTMLElement){const{factory:o,keyframes:l,times:c,ease:d,duration:u}=n.accelerate,p=new wv({element:this.current,name:t,keyframes:l,times:c,ease:d,duration:bt(u)}),f=o(p);this.valueSubscriptions.set(t,()=>{f(),p.cancel()});return}const r=ii.has(t);r&&this.onBindTransform&&this.onBindTransform();const i=n.on("change",o=>{this.latestValues[t]=o,this.props.onUpdate&&re.preRender(this.notifyUpdate),r&&this.projection&&(this.projection.isTransformDirty=!0),this.scheduleRender()});let a;typeof window<"u"&&window.MotionCheckAppearSync&&(a=window.MotionCheckAppearSync(this,t,n)),this.valueSubscriptions.set(t,()=>{i(),a&&a()})}sortNodePosition(t){return!this.current||!this.sortInstanceNodePosition||this.type!==t.type?0:this.sortInstanceNodePosition(this.current,t.current)}updateFeatures(){let t="animation";for(t in pl){const n=pl[t];if(!n)continue;const{isEnabled:r,Feature:i}=n;if(!this.features[t]&&i&&r(this.props)&&(this.features[t]=new i(this)),this.features[t]){const a=this.features[t];a.isMounted?a.update():(a.mount(),a.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):Ce()}getStaticValue(t){return this.latestValues[t]}setStaticValue(t,n){this.latestValues[t]=n}update(t,n){(t.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=t,this.prevPresenceContext=this.presenceContext,this.presenceContext=n;for(let r=0;r<Jm.length;r++){const i=Jm[r];this.propEventSubscriptions[i]&&(this.propEventSubscriptions[i](),delete this.propEventSubscriptions[i]);const a="on"+i,o=t[a];o&&(this.propEventSubscriptions[i]=this.on(i,o))}this.prevMotionValues=VN(this,this.scrapeMotionValuesFromProps(t,this.prevProps||{},this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}getVariant(t){return this.props.variants?this.props.variants[t]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(t){const n=this.getClosestVariantNode();if(n)return n.variantChildren&&n.variantChildren.add(t),()=>n.variantChildren.delete(t)}addValue(t,n){const r=this.values.get(t);n!==r&&(r&&this.removeValue(t),this.bindToMotionValue(t,n),this.values.set(t,n),this.latestValues[t]=n.get())}removeValue(t){this.values.delete(t);const n=this.valueSubscriptions.get(t);n&&(n(),this.valueSubscriptions.delete(t)),delete this.latestValues[t],this.removeValueFromRenderState(t,this.renderState)}hasValue(t){return this.values.has(t)}getValue(t,n){if(this.props.values&&this.props.values[t])return this.props.values[t];let r=this.values.get(t);return r===void 0&&n!==void 0&&(r=Zs(n===null?void 0:n,{owner:this}),this.addValue(t,r)),r}readValue(t,n){let r=this.latestValues[t]!==void 0||!this.current?this.latestValues[t]:this.getBaseTargetFromProps(this.props,t)??this.readValueFromInstance(this.current,t,this.options);return r!=null&&(typeof r=="string"&&(By(r)||Hy(r))?r=parseFloat(r):!ON(r)&&$t.test(n)&&(r=Lv(t,n)),this.setBaseTarget(t,Ve(r)?r.get():r)),Ve(r)?r.get():r}setBaseTarget(t,n){this.baseTarget[t]=n}getBaseTarget(t){var a;const{initial:n}=this.props;let r;if(typeof n=="string"||typeof n=="object"){const o=of(this.props,n,(a=this.presenceContext)==null?void 0:a.custom);o&&(r=o[t])}if(n&&r!==void 0)return r;const i=this.getBaseTargetFromProps(this.props,t);return i!==void 0&&!Ve(i)?i:this.initialValues[t]!==void 0&&r===void 0?void 0:this.baseTarget[t]}on(t,n){return this.events[t]||(this.events[t]=new Qp),this.events[t].add(n)}notify(t,...n){this.events[t]&&this.events[t].notify(...n)}scheduleRenderMicrotask(){cf.render(this.render)}}class Hv extends $N{constructor(){super(...arguments),this.KeyframeResolver=xN}sortInstanceNodePosition(t,n){return t.compareDocumentPosition(n)&2?1:-1}getBaseTargetFromProps(t,n){const r=t.style;return r?r[n]:void 0}removeValueFromRenderState(t,{vars:n,style:r}){delete n[t],delete r[t]}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:t}=this.props;Ve(t)&&(this.childSubscription=t.on("change",n=>{this.current&&(this.current.textContent=`${n}`)}))}}class fr{constructor(t){this.isMounted=!1,this.node=t}update(){}}function $v({top:e,left:t,right:n,bottom:r}){return{x:{min:t,max:n},y:{min:e,max:r}}}function GN({x:e,y:t}){return{top:t.min,right:e.max,bottom:t.max,left:e.min}}function WN(e,t){if(!t)return e;const n=t({x:e.left,y:e.top}),r=t({x:e.right,y:e.bottom});return{top:n.y,left:n.x,bottom:r.y,right:r.x}}function Bc(e){return e===void 0||e===1}function zu({scale:e,scaleX:t,scaleY:n}){return!Bc(e)||!Bc(t)||!Bc(n)}function kr(e){return zu(e)||Gv(e)||e.z||e.rotate||e.rotateX||e.rotateY||e.skewX||e.skewY}function Gv(e){return Zm(e.x)||Zm(e.y)}function Zm(e){return e&&e!=="0%"}function fl(e,t,n){const r=e-n,i=t*r;return n+i}function eg(e,t,n,r,i){return i!==void 0&&(e=fl(e,i,r)),fl(e,n,r)+t}function _u(e,t=0,n=1,r,i){e.min=eg(e.min,t,n,r,i),e.max=eg(e.max,t,n,r,i)}function Wv(e,{x:t,y:n}){_u(e.x,t.translate,t.scale,t.originPoint),_u(e.y,n.translate,n.scale,n.originPoint)}const tg=.999999999999,ng=1.0000000000001;function KN(e,t,n,r=!1){var l;const i=n.length;if(!i)return;t.x=t.y=1;let a,o;for(let c=0;c<i;c++){a=n[c],o=a.projectionDelta;const{visualElement:d}=a.options;d&&d.props.style&&d.props.style.display==="contents"||(r&&a.options.layoutScroll&&a.scroll&&a!==a.root&&(nn(e.x,-a.scroll.offset.x),nn(e.y,-a.scroll.offset.y)),o&&(t.x*=o.x.scale,t.y*=o.y.scale,Wv(e,o)),r&&kr(a.latestValues)&&Ao(e,a.latestValues,(l=a.layout)==null?void 0:l.layoutBox))}t.x<ng&&t.x>tg&&(t.x=1),t.y<ng&&t.y>tg&&(t.y=1)}function nn(e,t){e.min+=t,e.max+=t}function rg(e,t,n,r,i=.5){const a=ne(e.min,e.max,i);_u(e,t,n,a,r)}function sg(e,t){return typeof e=="string"?parseFloat(e)/100*(t.max-t.min):e}function Ao(e,t,n){const r=n??e;rg(e.x,sg(t.x,r.x),t.scaleX,t.scale,t.originX),rg(e.y,sg(t.y,r.y),t.scaleY,t.scale,t.originY)}function Kv(e,t){return $v(WN(e.getBoundingClientRect(),t))}function QN(e,t,n){const r=Kv(e,n),{scroll:i}=t;return i&&(nn(r.x,i.offset.x),nn(r.y,i.offset.y)),r}const qN={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},YN=si.length;function XN(e,t,n){let r="",i=!0;for(let o=0;o<YN;o++){const l=si[o],c=e[l];if(c===void 0)continue;let d=!0;if(typeof c=="number")d=c===(l.startsWith("scale")?1:0);else{const u=parseFloat(c);d=l.startsWith("scale")?u===1:u===0}if(!d||n){const u=Lu(c,ul[l]);if(!d){i=!1;const p=qN[l]||l;r+=`${p}(${u}) `}n&&(t[l]=u)}}const a=e.pathRotation;return a&&(i=!1,r+=`rotate(${Lu(a,ul.pathRotation)}) `),r=r.trim(),n?r=n(t,i?"":r):i&&(r="none"),r}function hf(e,t,n){const{style:r,vars:i,transformOrigin:a}=e;let o=!1,l=!1;for(const c in t){const d=t[c];if(ii.has(c)){o=!0;continue}else if(sv(c)){i[c]=d;continue}else{const u=Lu(d,ul[c]);c.startsWith("origin")?(l=!0,a[c]=u):r[c]=u}}if(t.transform||(o||n?r.transform=XN(t,e.transform,n):r.transform&&(r.transform="none")),l){const{originX:c="50%",originY:d="50%",originZ:u=0}=a;r.transformOrigin=`${c} ${d} ${u}`}}function Qv(e,{style:t,vars:n},r,i){const a=e.style;let o;for(o in t)a[o]=t[o];i==null||i.applyProjectionStyles(a,r);for(o in n)a.setProperty(o,n[o])}function ig(e,t){return t.max===t.min?0:e/(t.max-t.min)*100}const ki={correct:(e,t)=>{if(!t.target)return e;if(typeof e=="string")if(F.test(e))e=parseFloat(e);else return e;const n=ig(e,t.target.x),r=ig(e,t.target.y);return`${n}% ${r}%`}},JN={correct:(e,{treeScale:t,projectionDelta:n})=>{const r=e,i=$t.parse(e);if(i.length>5)return r;const a=$t.createTransformer(e),o=typeof i[0]!="number"?1:0,l=n.x.scale*t.x,c=n.y.scale*t.y;i[0+o]/=l,i[1+o]/=c;const d=ne(l,c,.5);return typeof i[2+o]=="number"&&(i[2+o]/=d),typeof i[3+o]=="number"&&(i[3+o]/=d),a(i)}},Ou={borderRadius:{...ki,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:ki,borderTopRightRadius:ki,borderBottomLeftRadius:ki,borderBottomRightRadius:ki,boxShadow:JN};function qv(e,{layout:t,layoutId:n}){return ii.has(e)||e.startsWith("origin")||(t||n!==void 0)&&(!!Ou[e]||e==="opacity")}function mf(e,t,n){var o;const r=e.style,i=t==null?void 0:t.style,a={};if(!r)return a;for(const l in r)(Ve(r[l])||i&&Ve(i[l])||qv(l,e)||((o=n==null?void 0:n.getValue(l))==null?void 0:o.liveStyle)!==void 0)&&(a[l]=r[l]);return a}function ZN(e){return window.getComputedStyle(e)}class e4 extends Hv{constructor(){super(...arguments),this.type="html",this.renderInstance=Qv}readValueFromInstance(t,n){var r;if(ii.has(n))return(r=this.projection)!=null&&r.isProjecting?ju(n):vS(t,n);{const i=ZN(t),a=(sv(n)?i.getPropertyValue(n):i[n])||0;return typeof a=="string"?a.trim():a}}measureInstanceViewportBox(t,{transformPagePoint:n}){return Kv(t,n)}build(t,n,r){hf(t,n,r.transformTemplate)}scrapeMotionValuesFromProps(t,n,r){return mf(t,n,r)}}const t4={offset:"stroke-dashoffset",array:"stroke-dasharray"},n4={offset:"strokeDashoffset",array:"strokeDasharray"};function r4(e,t,n=1,r=0,i=!0){e.pathLength=1;const a=i?t4:n4;e[a.offset]=`${-r}`,e[a.array]=`${t} ${n}`}const s4=["offsetDistance","offsetPath","offsetRotate","offsetAnchor"];function Yv(e,{attrX:t,attrY:n,attrScale:r,pathLength:i,pathSpacing:a=1,pathOffset:o=0,...l},c,d,u){if(hf(e,l,d),c){e.style.viewBox&&(e.attrs.viewBox=e.style.viewBox);return}e.attrs=e.style,e.style={};const{attrs:p,style:f}=e;p.transform&&(f.transform=p.transform,delete p.transform),(f.transform||p.transformOrigin)&&(f.transformOrigin=p.transformOrigin??"50% 50%",delete p.transformOrigin),f.transform&&(f.transformBox=(u==null?void 0:u.transformBox)??"fill-box",delete p.transformBox);for(const h of s4)p[h]!==void 0&&(f[h]=p[h],delete p[h]);t!==void 0&&(p.x=t),n!==void 0&&(p.y=n),r!==void 0&&(p.scale=r),i!==void 0&&r4(p,i,a,o,!1)}const Xv=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]),Jv=e=>typeof e=="string"&&e.toLowerCase()==="svg";function i4(e,t,n,r){Qv(e,t,void 0,r);for(const i in t.attrs)e.setAttribute(Xv.has(i)?i:lf(i),t.attrs[i])}function Zv(e,t,n){const r=mf(e,t,n);for(const i in e)if(Ve(e[i])||Ve(t[i])){const a=si.indexOf(i)!==-1?"attr"+i.charAt(0).toUpperCase()+i.substring(1):i;r[a]=e[i]}return r}class a4 extends Hv{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1,this.measureInstanceViewportBox=Ce}getBaseTargetFromProps(t,n){return t[n]}readValueFromInstance(t,n){if(ii.has(n)){const r=Iv(n);return r&&r.default||0}return n=Xv.has(n)?n:lf(n),t.getAttribute(n)}scrapeMotionValuesFromProps(t,n,r){return Zv(t,n,r)}build(t,n,r){Yv(t,n,this.isSVGTag,r.transformTemplate,r.style)}renderInstance(t,n,r,i){i4(t,n,r,i)}mount(t){this.isSVGTag=Jv(t.tagName),super.mount(t)}}const o4=ff.length;function e1(e){if(!e)return;if(!e.isControllingVariants){const n=e.parent?e1(e.parent)||{}:{};return e.props.initial!==void 0&&(n.initial=e.props.initial),n}const t={};for(let n=0;n<o4;n++){const r=ff[n],i=e.props[r];(ga(i)||i===!1)&&(t[r]=i)}return t}function t1(e,t){if(!Array.isArray(t))return!1;const n=t.length;if(n!==e.length)return!1;for(let r=0;r<n;r++)if(t[r]!==e[r])return!1;return!0}const l4=[...pf].reverse(),c4=pf.length;function d4(e){return t=>Promise.all(t.map(({animation:n,options:r})=>aN(e,n,r)))}function u4(e){let t=d4(e),n=ag(),r=!0,i=!1;const a=d=>(u,p)=>{var h;const f=Ur(e,p,d==="exit"?(h=e.presenceContext)==null?void 0:h.custom:void 0);if(f){const{transition:m,transitionEnd:y,...k}=f;u={...u,...k,...y}}return u};function o(d){t=d(e)}function l(d){const{props:u}=e,p=e1(e.parent)||{},f=[],h=new Set;let m={},y=1/0;for(let x=0;x<c4;x++){const g=l4[x],v=n[g],w=u[g]!==void 0?u[g]:p[g],N=ga(w),A=g===d?v.isActive:null;A===!1&&(y=x);let C=w===p[g]&&w!==u[g]&&N;if(C&&(r||i)&&e.manuallyAnimateOnMount&&(C=!1),v.protectedKeys={...m},!v.isActive&&A===null||!w&&!v.prevProp||Dl(w)||typeof w=="boolean")continue;if(g==="exit"&&v.isActive&&A!==!0){v.prevResolvedValues&&(m={...m,...v.prevResolvedValues});continue}const E=p4(v.prevProp,w);let D=E||g===d&&v.isActive&&!C&&N||x>y&&N,P=!1;const z=Array.isArray(w)?w:[w];let W=z.reduce(a(g),{});A===!1&&(W={});const{prevResolvedValues:ie={}}=v,le={...ie,...W},de=M=>{D=!0,h.has(M)&&(P=!0,h.delete(M)),v.needsAnimating[M]=!0;const B=e.getValue(M);B&&(B.liveStyle=!1)};for(const M in le){const B=W[M],$=ie[M];if(m.hasOwnProperty(M))continue;let G=!1;Au(B)&&Au($)?G=!t1(B,$)||E:G=B!==$,G?B!=null?de(M):h.add(M):B!==void 0&&h.has(M)?de(M):v.protectedKeys[M]=!0}v.prevProp=w,v.prevResolvedValues=W,v.isActive&&(m={...m,...W}),(r||i)&&e.blockInitialAnimation&&(D=!1);const be=C&&E;D&&(!be||P)&&f.push(...z.map(M=>{const B={type:g};if(typeof M=="string"&&(r||i)&&!be&&e.manuallyAnimateOnMount&&e.parent){const{parent:$}=e,G=Ur($,M);if($.enteringChildren&&G){const{delayChildren:he}=G.transition||{};B.delay=Sv($.enteringChildren,e,he)}}return{animation:M,options:B}}))}if(h.size){const x={};if(typeof u.initial!="boolean"){const g=Ur(e,Array.isArray(u.initial)?u.initial[0]:u.initial);g&&g.transition&&(x.transition=g.transition)}h.forEach(g=>{const v=e.getBaseTarget(g),w=e.getValue(g);w&&(w.liveStyle=!0),x[g]=v??null}),f.push({animation:x})}let k=!!f.length;return r&&(u.initial===!1||u.initial===u.animate)&&!e.manuallyAnimateOnMount&&(k=!1),r=!1,i=!1,k?t(f):Promise.resolve()}function c(d,u){var f;if(n[d].isActive===u)return Promise.resolve();(f=e.variantChildren)==null||f.forEach(h=>{var m;return(m=h.animationState)==null?void 0:m.setActive(d,u)}),n[d].isActive=u;const p=l(d);for(const h in n)n[h].protectedKeys={};return p}return{animateChanges:l,setActive:c,setAnimateFunction:o,getState:()=>n,reset:()=>{n=ag(),i=!0}}}function p4(e,t){return typeof t=="string"?t!==e:Array.isArray(t)?!t1(t,e):!1}function xr(e=!1){return{isActive:e,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function ag(){return{animate:xr(!0),whileInView:xr(),whileHover:xr(),whileTap:xr(),whileDrag:xr(),whileFocus:xr(),exit:xr()}}function Fu(e,t){e.min=t.min,e.max=t.max}function zt(e,t){Fu(e.x,t.x),Fu(e.y,t.y)}function og(e,t){e.translate=t.translate,e.scale=t.scale,e.originPoint=t.originPoint,e.origin=t.origin}const n1=1e-4,f4=1-n1,h4=1+n1,r1=.01,m4=0-r1,g4=0+r1;function nt(e){return e.max-e.min}function x4(e,t,n){return Math.abs(e-t)<=n}function lg(e,t,n,r=.5){e.origin=r,e.originPoint=ne(t.min,t.max,e.origin),e.scale=nt(n)/nt(t),e.translate=ne(n.min,n.max,e.origin)-e.originPoint,(e.scale>=f4&&e.scale<=h4||isNaN(e.scale))&&(e.scale=1),(e.translate>=m4&&e.translate<=g4||isNaN(e.translate))&&(e.translate=0)}function $i(e,t,n,r){lg(e.x,t.x,n.x,r?r.originX:void 0),lg(e.y,t.y,n.y,r?r.originY:void 0)}function cg(e,t,n,r=0){const i=r?ne(n.min,n.max,r):n.min;e.min=i+t.min,e.max=e.min+nt(t)}function y4(e,t,n,r){cg(e.x,t.x,n.x,r==null?void 0:r.x),cg(e.y,t.y,n.y,r==null?void 0:r.y)}function dg(e,t,n,r=0){const i=r?ne(n.min,n.max,r):n.min;e.min=t.min-i,e.max=e.min+nt(t)}function hl(e,t,n,r){dg(e.x,t.x,n.x,r==null?void 0:r.x),dg(e.y,t.y,n.y,r==null?void 0:r.y)}function ug(e,t,n,r,i){return e-=t,e=fl(e,1/n,r),i!==void 0&&(e=fl(e,1/i,r)),e}function v4(e,t=0,n=1,r=.5,i,a=e,o=e){if(on.test(t)&&(t=parseFloat(t),t=ne(o.min,o.max,t/100)-o.min),typeof t!="number")return;let l=ne(a.min,a.max,r);e===a&&(l-=t),e.min=ug(e.min,t,n,l,i),e.max=ug(e.max,t,n,l,i)}function pg(e,t,[n,r,i],a,o){v4(e,t[n],t[r],t[i],t.scale,a,o)}const b4=["x","scaleX","originX"],w4=["y","scaleY","originY"];function fg(e,t,n,r){pg(e.x,t,b4,n?n.x:void 0,r?r.x:void 0),pg(e.y,t,w4,n?n.y:void 0,r?r.y:void 0)}function hg(e){return e.translate===0&&e.scale===1}function s1(e){return hg(e.x)&&hg(e.y)}function mg(e,t){return e.min===t.min&&e.max===t.max}function k4(e,t){return mg(e.x,t.x)&&mg(e.y,t.y)}function gg(e,t){return Math.round(e.min)===Math.round(t.min)&&Math.round(e.max)===Math.round(t.max)}function i1(e,t){return gg(e.x,t.x)&&gg(e.y,t.y)}function xg(e){return nt(e.x)/nt(e.y)}function yg(e,t){return e.translate===t.translate&&e.scale===t.scale&&e.originPoint===t.originPoint}function Jt(e){return[e("x"),e("y")]}function j4(e,t,n){let r="";const i=e.x.translate/t.x,a=e.y.translate/t.y,o=(n==null?void 0:n.z)||0;if((i||a||o)&&(r=`translate3d(${i}px, ${a}px, ${o}px) `),(t.x!==1||t.y!==1)&&(r+=`scale(${1/t.x}, ${1/t.y}) `),n){const{transformPerspective:d,rotate:u,pathRotation:p,rotateX:f,rotateY:h,skewX:m,skewY:y}=n;d&&(r=`perspective(${d}px) ${r}`),u&&(r+=`rotate(${u}deg) `),p&&(r+=`rotate(${p}deg) `),f&&(r+=`rotateX(${f}deg) `),h&&(r+=`rotateY(${h}deg) `),m&&(r+=`skewX(${m}deg) `),y&&(r+=`skewY(${y}deg) `)}const l=e.x.scale*t.x,c=e.y.scale*t.y;return(l!==1||c!==1)&&(r+=`scale(${l}, ${c})`),r||"none"}const a1=["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"],S4=a1.length,vg=e=>typeof e=="string"?parseFloat(e):e,bg=e=>typeof e=="number"||F.test(e);function N4(e,t,n,r,i,a){i?(e.opacity=ne(0,n.opacity??1,T4(r)),e.opacityExit=ne(t.opacity??1,0,E4(r))):a&&(e.opacity=ne(t.opacity??1,n.opacity??1,r));for(let o=0;o<S4;o++){const l=a1[o];let c=wg(t,l),d=wg(n,l);if(c===void 0&&d===void 0)continue;c||(c=0),d||(d=0),c===0||d===0||bg(c)===bg(d)?(e[l]=Math.max(ne(vg(c),vg(d),r),0),(on.test(d)||on.test(c))&&(e[l]+="%")):e[l]=d}(t.rotate||n.rotate)&&(e.rotate=ne(t.rotate||0,n.rotate||0,r))}function wg(e,t){return e[t]!==void 0?e[t]:e.borderRadius}const T4=o1(0,.5,Jy),E4=o1(.5,.95,Rt);function o1(e,t,n){return r=>r<e?0:r>t?1:n(ha(e,t,r))}function C4(e,t,n){const r=Ve(e)?e:Zs(e);return r.start(af("",r,t,n)),r.animation}function xa(e,t,n,r={passive:!0}){return e.addEventListener(t,n,r),()=>e.removeEventListener(t,n)}const A4=(e,t)=>e.depth-t.depth;class P4{constructor(){this.children=[],this.isDirty=!1}add(t){Wp(this.children,t),this.isDirty=!0}remove(t){al(this.children,t),this.isDirty=!0}forEach(t){this.isDirty&&this.children.sort(A4),this.isDirty=!1,this.children.forEach(t)}}function R4(e,t){const n=tt.now(),r=({timestamp:i})=>{const a=i-n;a>=t&&(cr(r),e(a-t))};return re.setup(r,!0),()=>cr(r)}function Po(e){return Ve(e)?e.get():e}class M4{constructor(){this.members=[]}add(t){Wp(this.members,t);for(let n=this.members.length-1;n>=0;n--){const r=this.members[n];if(r===t||r===this.lead||r===this.prevLead)continue;const i=r.instance;(!i||i.isConnected===!1)&&!r.snapshot&&(al(this.members,r),r.unmount())}t.scheduleRender()}remove(t){if(al(this.members,t),t===this.prevLead&&(this.prevLead=void 0),t===this.lead){const n=this.members[this.members.length-1];n&&this.promote(n)}}relegate(t){var n;for(let r=this.members.indexOf(t)-1;r>=0;r--){const i=this.members[r];if(i.isPresent!==!1&&((n=i.instance)==null?void 0:n.isConnected)!==!1)return this.promote(i),!0}return!1}promote(t,n){var i;const r=this.lead;if(t!==r&&(this.prevLead=r,this.lead=t,t.show(),r)){r.updateSnapshot(),t.scheduleRender();const{layoutDependency:a}=r.options,{layoutDependency:o}=t.options;(a===void 0||a!==o)&&(t.resumeFrom=r,n&&(r.preserveOpacity=!0),r.snapshot&&(t.snapshot=r.snapshot,t.snapshot.latestValues=r.animationValues||r.latestValues),(i=t.root)!=null&&i.isUpdating&&(t.isLayoutDirty=!0)),t.options.crossfade===!1&&r.hide()}}exitAnimationComplete(){this.members.forEach(t=>{var n,r,i,a,o;(r=(n=t.options).onExitComplete)==null||r.call(n),(o=(i=t.resumingFrom)==null?void 0:(a=i.options).onExitComplete)==null||o.call(a)})}scheduleRender(){this.members.forEach(t=>t.instance&&t.scheduleRender(!1))}removeLeadSnapshot(){var t;(t=this.lead)!=null&&t.snapshot&&(this.lead.snapshot=void 0)}}const Ro={hasAnimatedSinceResize:!0,hasEverUpdated:!1},Uc=["","X","Y","Z"],I4=1e3;let L4=0;function Hc(e,t,n,r){const{latestValues:i}=t;i[e]&&(n[e]=i[e],t.setStaticValue(e,0),r&&(r[e]=0))}function l1(e){if(e.hasCheckedOptimisedAppear=!0,e.root===e)return;const{visualElement:t}=e.options;if(!t)return;const n=Av(t);if(window.MotionHasOptimisedAnimation(n,"transform")){const{layout:i,layoutId:a}=e.options;window.MotionCancelOptimisedAnimation(n,"transform",re,!(i||a))}const{parent:r}=e;r&&!r.hasCheckedOptimisedAppear&&l1(r)}function c1({attachResizeListener:e,defaultParent:t,measureScroll:n,checkIsScrollRoot:r,resetTransform:i}){return class{constructor(o={},l=t==null?void 0:t()){this.id=L4++,this.animationId=0,this.animationCommitId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.layoutVersion=0,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,this.nodes.forEach(_4),this.nodes.forEach(H4),this.nodes.forEach($4),this.nodes.forEach(O4)},this.resolvedRelativeTargetAt=0,this.linkedParentVersion=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=o,this.root=l?l.root||l:this,this.path=l?[...l.path,l]:[],this.parent=l,this.depth=l?l.depth+1:0;for(let c=0;c<this.path.length;c++)this.path[c].shouldResetTransform=!0;this.root===this&&(this.nodes=new P4)}addEventListener(o,l){return this.eventHandlers.has(o)||this.eventHandlers.set(o,new Qp),this.eventHandlers.get(o).add(l)}notifyListeners(o,...l){const c=this.eventHandlers.get(o);c&&c.notify(...l)}hasListeners(o){return this.eventHandlers.has(o)}mount(o){if(this.instance)return;this.isSVG=uf(o)&&!zN(o),this.instance=o;const{layoutId:l,layout:c,visualElement:d}=this.options;if(d&&!d.current&&d.mount(o),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),this.root.hasTreeAnimated&&(c||l)&&(this.isLayoutDirty=!0),e){let u,p=0;const f=()=>this.root.updateBlockedByResize=!1;re.read(()=>{p=window.innerWidth}),e(o,()=>{const h=window.innerWidth;h!==p&&(p=h,this.root.updateBlockedByResize=!0,u&&u(),u=R4(f,250),Ro.hasAnimatedSinceResize&&(Ro.hasAnimatedSinceResize=!1,this.nodes.forEach(Sg)))})}l&&this.root.registerSharedNode(l,this),this.options.animate!==!1&&d&&(l||c)&&this.addEventListener("didUpdate",({delta:u,hasLayoutChanged:p,hasRelativeLayoutChanged:f,layout:h})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const m=this.options.transition||d.getDefaultTransition()||q4,{onLayoutAnimationStart:y,onLayoutAnimationComplete:k}=d.getProps(),x=!this.targetLayout||!i1(this.targetLayout,h),g=!p&&f;if(this.options.layoutRoot||this.resumeFrom||g||p&&(x||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0);const v={...sf(m,"layout"),onPlay:y,onComplete:k};(d.shouldReduceMotion||this.options.layoutRoot)&&(v.delay=0,v.type=!1),this.startAnimation(v),this.setAnimationOrigin(u,g,v.path)}else p||Sg(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=h})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const o=this.getStack();o&&o.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,this.eventHandlers.clear(),cr(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(G4),this.animationId++)}getTransformTemplate(){const{visualElement:o}=this.options;return o&&o.getProps().transformTemplate}willUpdate(o=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&l1(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let u=0;u<this.path.length;u++){const p=this.path[u];p.shouldResetTransform=!0,(typeof p.latestValues.x=="string"||typeof p.latestValues.y=="string")&&(p.isLayoutDirty=!0),p.updateScroll("snapshot"),p.options.layoutRoot&&p.willUpdate(!1)}const{layoutId:l,layout:c}=this.options;if(l===void 0&&!c)return;const d=this.getTransformTemplate();this.prevTransformTemplateValue=d?d(this.latestValues,""):void 0,this.updateSnapshot(),o&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){const c=this.updateBlockedByResize;this.unblockUpdate(),this.updateBlockedByResize=!1,this.clearAllSnapshots(),c&&this.nodes.forEach(V4),this.nodes.forEach(kg);return}if(this.animationId<=this.animationCommitId){this.nodes.forEach(jg);return}this.animationCommitId=this.animationId,this.isUpdating?(this.isUpdating=!1,this.nodes.forEach(B4),this.nodes.forEach(U4),this.nodes.forEach(D4),this.nodes.forEach(z4)):this.nodes.forEach(jg),this.clearAllSnapshots();const l=tt.now();_e.delta=ln(0,1e3/60,l-_e.timestamp),_e.timestamp=l,_e.isProcessing=!0,Lc.update.process(_e),Lc.preRender.process(_e),Lc.render.process(_e),_e.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,cf.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(F4),this.sharedNodes.forEach(W4)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,re.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){re.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure(),this.snapshot&&!nt(this.snapshot.measuredBox.x)&&!nt(this.snapshot.measuredBox.y)&&(this.snapshot=void 0))}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let c=0;c<this.path.length;c++)this.path[c].updateScroll();const o=this.layout;this.layout=this.measure(!1),this.layoutVersion++,this.layoutCorrected||(this.layoutCorrected=Ce()),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:l}=this.options;l&&l.notify("LayoutMeasure",this.layout.layoutBox,o?o.layoutBox:void 0)}updateScroll(o="measure"){let l=!!(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===o&&(l=!1),l&&this.instance){const c=r(this.instance);this.scroll={animationId:this.root.animationId,phase:o,isRoot:c,offset:n(this.instance),wasRoot:this.scroll?this.scroll.isRoot:c}}}resetTransform(){if(!i)return;const o=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,l=this.projectionDelta&&!s1(this.projectionDelta),c=this.getTransformTemplate(),d=c?c(this.latestValues,""):void 0,u=d!==this.prevTransformTemplateValue;o&&this.instance&&(l||kr(this.latestValues)||u)&&(i(this.instance,d),this.shouldResetTransform=!1,this.scheduleRender())}measure(o=!0){const l=this.measurePageBox();let c=this.removeElementScroll(l);return o&&(c=this.removeTransform(c)),Y4(c),{animationId:this.root.animationId,measuredBox:l,layoutBox:c,latestValues:{},source:this.id}}measurePageBox(){var d;const{visualElement:o}=this.options;if(!o)return Ce();const l=o.measureViewportBox();if(!(((d=this.scroll)==null?void 0:d.wasRoot)||this.path.some(X4))){const{scroll:u}=this.root;u&&(nn(l.x,u.offset.x),nn(l.y,u.offset.y))}return l}removeElementScroll(o){var c;const l=Ce();if(zt(l,o),(c=this.scroll)!=null&&c.wasRoot)return l;for(let d=0;d<this.path.length;d++){const u=this.path[d],{scroll:p,options:f}=u;u!==this.root&&p&&f.layoutScroll&&(p.wasRoot&&zt(l,o),nn(l.x,p.offset.x),nn(l.y,p.offset.y))}return l}applyTransform(o,l=!1,c){var u,p;const d=c||Ce();zt(d,o);for(let f=0;f<this.path.length;f++){const h=this.path[f];!l&&h.options.layoutScroll&&h.scroll&&h!==h.root&&(nn(d.x,-h.scroll.offset.x),nn(d.y,-h.scroll.offset.y)),kr(h.latestValues)&&Ao(d,h.latestValues,(u=h.layout)==null?void 0:u.layoutBox)}return kr(this.latestValues)&&Ao(d,this.latestValues,(p=this.layout)==null?void 0:p.layoutBox),d}removeTransform(o){var c;const l=Ce();zt(l,o);for(let d=0;d<this.path.length;d++){const u=this.path[d];if(!kr(u.latestValues))continue;let p;u.instance&&(zu(u.latestValues)&&u.updateSnapshot(),p=Ce(),zt(p,u.measurePageBox())),fg(l,u.latestValues,(c=u.snapshot)==null?void 0:c.layoutBox,p)}return kr(this.latestValues)&&fg(l,this.latestValues),l}setTargetDelta(o){this.targetDelta=o,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(o){this.options={...this.options,...o,crossfade:o.crossfade!==void 0?o.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==_e.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(o=!1){var h;const l=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=l.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=l.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=l.isSharedProjectionDirty);const c=!!this.resumingFrom||this!==l;if(!(o||c&&this.isSharedProjectionDirty||this.isProjectionDirty||(h=this.parent)!=null&&h.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;const{layout:u,layoutId:p}=this.options;if(!this.layout||!(u||p))return;this.resolvedRelativeTargetAt=_e.timestamp;const f=this.getClosestProjectingParent();f&&this.linkedParentVersion!==f.layoutVersion&&!f.options.layoutRoot&&this.removeRelativeTarget(),!this.targetDelta&&!this.relativeTarget&&(this.options.layoutAnchor!==!1&&f&&f.layout?this.createRelativeTarget(f,this.layout.layoutBox,f.layout.layoutBox):this.removeRelativeTarget()),!(!this.relativeTarget&&!this.targetDelta)&&(this.target||(this.target=Ce(),this.targetWithTransforms=Ce()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),y4(this.target,this.relativeTarget,this.relativeParent.target,this.options.layoutAnchor||void 0)):this.targetDelta?(this.resumingFrom?this.applyTransform(this.layout.layoutBox,!1,this.target):zt(this.target,this.layout.layoutBox),Wv(this.target,this.targetDelta)):zt(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget&&(this.attemptToResolveRelativeTarget=!1,this.options.layoutAnchor!==!1&&f&&!!f.resumingFrom==!!this.resumingFrom&&!f.options.layoutScroll&&f.target&&this.animationProgress!==1?this.createRelativeTarget(f,this.target,f.target):this.relativeParent=this.relativeTarget=void 0))}getClosestProjectingParent(){if(!(!this.parent||zu(this.parent.latestValues)||Gv(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}createRelativeTarget(o,l,c){this.relativeParent=o,this.linkedParentVersion=o.layoutVersion,this.forceRelativeParentToResolveTarget(),this.relativeTarget=Ce(),this.relativeTargetOrigin=Ce(),hl(this.relativeTargetOrigin,l,c,this.options.layoutAnchor||void 0),zt(this.relativeTarget,this.relativeTargetOrigin)}removeRelativeTarget(){this.relativeParent=this.relativeTarget=void 0}calcProjection(){var m;const o=this.getLead(),l=!!this.resumingFrom||this!==o;let c=!0;if((this.isProjectionDirty||(m=this.parent)!=null&&m.isProjectionDirty)&&(c=!1),l&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(c=!1),this.resolvedRelativeTargetAt===_e.timestamp&&(c=!1),c)return;const{layout:d,layoutId:u}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(d||u))return;zt(this.layoutCorrected,this.layout.layoutBox);const p=this.treeScale.x,f=this.treeScale.y;KN(this.layoutCorrected,this.treeScale,this.path,l),o.layout&&!o.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(o.target=o.layout.layoutBox,o.targetWithTransforms=Ce());const{target:h}=o;if(!h){this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender());return}!this.projectionDelta||!this.prevProjectionDelta?this.createProjectionDeltas():(og(this.prevProjectionDelta.x,this.projectionDelta.x),og(this.prevProjectionDelta.y,this.projectionDelta.y)),$i(this.projectionDelta,this.layoutCorrected,h,this.latestValues),(this.treeScale.x!==p||this.treeScale.y!==f||!yg(this.projectionDelta.x,this.prevProjectionDelta.x)||!yg(this.projectionDelta.y,this.prevProjectionDelta.y))&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",h))}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(o=!0){var l;if((l=this.options.visualElement)==null||l.scheduleRender(),o){const c=this.getStack();c&&c.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta=Ns(),this.projectionDelta=Ns(),this.projectionDeltaWithTransform=Ns()}setAnimationOrigin(o,l=!1,c){const d=this.snapshot,u=d?d.latestValues:{},p={...this.latestValues},f=Ns();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!l;const h=Ce(),m=d?d.source:void 0,y=this.layout?this.layout.source:void 0,k=m!==y,x=this.getStack(),g=!x||x.members.length<=1,v=!!(k&&!g&&this.options.crossfade===!0&&!this.path.some(Q4));this.animationProgress=0;let w;const N=c==null?void 0:c.interpolateProjection(o);this.mixTargetDelta=A=>{const C=A/1e3,E=N==null?void 0:N(C);E?(f.x.translate=E.x,f.x.scale=ne(o.x.scale,1,C),f.x.origin=o.x.origin,f.x.originPoint=o.x.originPoint,f.y.translate=E.y,f.y.scale=ne(o.y.scale,1,C),f.y.origin=o.y.origin,f.y.originPoint=o.y.originPoint):(Ng(f.x,o.x,C),Ng(f.y,o.y,C)),this.setTargetDelta(f),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(hl(h,this.layout.layoutBox,this.relativeParent.layout.layoutBox,this.options.layoutAnchor||void 0),K4(this.relativeTarget,this.relativeTargetOrigin,h,C),w&&k4(this.relativeTarget,w)&&(this.isProjectionDirty=!1),w||(w=Ce()),zt(w,this.relativeTarget)),k&&(this.animationValues=p,N4(p,u,this.latestValues,C,v,g)),E&&E.rotate!==void 0&&(this.animationValues||(this.animationValues=p),this.animationValues.pathRotation=E.rotate),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=C},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(o){var l,c,d;this.notifyListeners("animationStart"),(l=this.currentAnimation)==null||l.stop(),(d=(c=this.resumingFrom)==null?void 0:c.currentAnimation)==null||d.stop(),this.pendingAnimation&&(cr(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=re.update(()=>{Ro.hasAnimatedSinceResize=!0,this.motionValue||(this.motionValue=Zs(0)),this.motionValue.jump(0,!1),this.currentAnimation=C4(this.motionValue,[0,1e3],{...o,velocity:0,isSync:!0,onUpdate:u=>{this.mixTargetDelta(u),o.onUpdate&&o.onUpdate(u)},onStop:()=>{},onComplete:()=>{o.onComplete&&o.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const o=this.getStack();o&&o.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(I4),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const o=this.getLead();let{targetWithTransforms:l,target:c,layout:d,latestValues:u}=o;if(!(!l||!c||!d)){if(this!==o&&this.layout&&d&&d1(this.options.animationType,this.layout.layoutBox,d.layoutBox)){c=this.target||Ce();const p=nt(this.layout.layoutBox.x);c.x.min=o.target.x.min,c.x.max=c.x.min+p;const f=nt(this.layout.layoutBox.y);c.y.min=o.target.y.min,c.y.max=c.y.min+f}zt(l,c),Ao(l,u),$i(this.projectionDeltaWithTransform,this.layoutCorrected,l,u)}}registerSharedNode(o,l){this.sharedNodes.has(o)||this.sharedNodes.set(o,new M4),this.sharedNodes.get(o).add(l);const d=l.options.initialPromotionConfig;l.promote({transition:d?d.transition:void 0,preserveFollowOpacity:d&&d.shouldPreserveFollowOpacity?d.shouldPreserveFollowOpacity(l):void 0})}isLead(){const o=this.getStack();return o?o.lead===this:!0}getLead(){var l;const{layoutId:o}=this.options;return o?((l=this.getStack())==null?void 0:l.lead)||this:this}getPrevLead(){var l;const{layoutId:o}=this.options;return o?(l=this.getStack())==null?void 0:l.prevLead:void 0}getStack(){const{layoutId:o}=this.options;if(o)return this.root.sharedNodes.get(o)}promote({needsReset:o,transition:l,preserveFollowOpacity:c}={}){const d=this.getStack();d&&d.promote(this,c),o&&(this.projectionDelta=void 0,this.needsReset=!0),l&&this.setOptions({transition:l})}relegate(){const o=this.getStack();return o?o.relegate(this):!1}resetSkewAndRotation(){const{visualElement:o}=this.options;if(!o)return;let l=!1;const{latestValues:c}=o;if((c.z||c.rotate||c.rotateX||c.rotateY||c.rotateZ||c.skewX||c.skewY)&&(l=!0),!l)return;const d={};c.z&&Hc("z",o,d,this.animationValues);for(let u=0;u<Uc.length;u++)Hc(`rotate${Uc[u]}`,o,d,this.animationValues),Hc(`skew${Uc[u]}`,o,d,this.animationValues);o.render();for(const u in d)o.setStaticValue(u,d[u]),this.animationValues&&(this.animationValues[u]=d[u]);o.scheduleRender()}applyProjectionStyles(o,l){if(!this.instance||this.isSVG)return;if(!this.isVisible){o.visibility="hidden";return}const c=this.getTransformTemplate();if(this.needsReset){this.needsReset=!1,o.visibility="",o.opacity="",o.pointerEvents=Po(l==null?void 0:l.pointerEvents)||"",o.transform=c?c(this.latestValues,""):"none";return}const d=this.getLead();if(!this.projectionDelta||!this.layout||!d.target){this.options.layoutId&&(o.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,o.pointerEvents=Po(l==null?void 0:l.pointerEvents)||""),this.hasProjected&&!kr(this.latestValues)&&(o.transform=c?c({},""):"none",this.hasProjected=!1);return}o.visibility="";const u=d.animationValues||d.latestValues;this.applyTransformsToTarget();let p=j4(this.projectionDeltaWithTransform,this.treeScale,u);c&&(p=c(u,p)),o.transform=p;const{x:f,y:h}=this.projectionDelta;o.transformOrigin=`${f.origin*100}% ${h.origin*100}% 0`,d.animationValues?o.opacity=d===this?u.opacity??this.latestValues.opacity??1:this.preserveOpacity?this.latestValues.opacity:u.opacityExit:o.opacity=d===this?u.opacity!==void 0?u.opacity:"":u.opacityExit!==void 0?u.opacityExit:0;for(const m in Ou){if(u[m]===void 0)continue;const{correct:y,applyTo:k,isCSSVariable:x}=Ou[m],g=p==="none"?u[m]:y(u[m],d);if(k){const v=k.length;for(let w=0;w<v;w++)o[k[w]]=g}else x?this.options.visualElement.renderState.vars[m]=g:o[m]=g}this.options.layoutId&&(o.pointerEvents=d===this?Po(l==null?void 0:l.pointerEvents)||"":"none")}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(o=>{var l;return(l=o.currentAnimation)==null?void 0:l.stop()}),this.root.nodes.forEach(kg),this.root.sharedNodes.clear()}}}function D4(e){e.updateLayout()}function z4(e){var n;const t=((n=e.resumeFrom)==null?void 0:n.snapshot)||e.snapshot;if(e.isLead()&&e.layout&&t&&e.hasListeners("didUpdate")){const{layoutBox:r,measuredBox:i}=e.layout,{animationType:a}=e.options,o=t.source!==e.layout.source;if(a==="size")Jt(p=>{const f=o?t.measuredBox[p]:t.layoutBox[p],h=nt(f);f.min=r[p].min,f.max=f.min+h});else if(a==="x"||a==="y"){const p=a==="x"?"y":"x";Fu(o?t.measuredBox[p]:t.layoutBox[p],r[p])}else d1(a,t.layoutBox,r)&&Jt(p=>{const f=o?t.measuredBox[p]:t.layoutBox[p],h=nt(r[p]);f.max=f.min+h,e.relativeTarget&&!e.currentAnimation&&(e.isProjectionDirty=!0,e.relativeTarget[p].max=e.relativeTarget[p].min+h)});const l=Ns();$i(l,r,t.layoutBox);const c=Ns();o?$i(c,e.applyTransform(i,!0),t.measuredBox):$i(c,r,t.layoutBox);const d=!s1(l);let u=!1;if(!e.resumeFrom){const p=e.getClosestProjectingParent();if(p&&!p.resumeFrom){const{snapshot:f,layout:h}=p;if(f&&h){const m=e.options.layoutAnchor||void 0,y=Ce();hl(y,t.layoutBox,f.layoutBox,m);const k=Ce();hl(k,r,h.layoutBox,m),i1(y,k)||(u=!0),p.options.layoutRoot&&(e.relativeTarget=k,e.relativeTargetOrigin=y,e.relativeParent=p)}}}e.notifyListeners("didUpdate",{layout:r,snapshot:t,delta:c,layoutDelta:l,hasLayoutChanged:d,hasRelativeLayoutChanged:u})}else if(e.isLead()){const{onExitComplete:r}=e.options;r&&r()}e.options.transition=void 0}function _4(e){e.parent&&(e.isProjecting()||(e.isProjectionDirty=e.parent.isProjectionDirty),e.isSharedProjectionDirty||(e.isSharedProjectionDirty=!!(e.isProjectionDirty||e.parent.isProjectionDirty||e.parent.isSharedProjectionDirty)),e.isTransformDirty||(e.isTransformDirty=e.parent.isTransformDirty))}function O4(e){e.isProjectionDirty=e.isSharedProjectionDirty=e.isTransformDirty=!1}function F4(e){e.clearSnapshot()}function kg(e){e.clearMeasurements()}function V4(e){e.isLayoutDirty=!0,e.updateLayout()}function jg(e){e.isLayoutDirty=!1}function B4(e){e.isAnimationBlocked&&e.layout&&!e.isLayoutDirty&&(e.snapshot=e.layout,e.isLayoutDirty=!0)}function U4(e){const{visualElement:t}=e.options;t&&t.getProps().onBeforeLayoutMeasure&&t.notify("BeforeLayoutMeasure"),e.resetTransform()}function Sg(e){e.finishAnimation(),e.targetDelta=e.relativeTarget=e.target=void 0,e.isProjectionDirty=!0}function H4(e){e.resolveTargetDelta()}function $4(e){e.calcProjection()}function G4(e){e.resetSkewAndRotation()}function W4(e){e.removeLeadSnapshot()}function Ng(e,t,n){e.translate=ne(t.translate,0,n),e.scale=ne(t.scale,1,n),e.origin=t.origin,e.originPoint=t.originPoint}function Tg(e,t,n,r){e.min=ne(t.min,n.min,r),e.max=ne(t.max,n.max,r)}function K4(e,t,n,r){Tg(e.x,t.x,n.x,r),Tg(e.y,t.y,n.y,r)}function Q4(e){return e.animationValues&&e.animationValues.opacityExit!==void 0}const q4={duration:.45,ease:[.4,0,.1,1]},Eg=e=>typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(e),Cg=Eg("applewebkit/")&&!Eg("chrome/")?Math.round:Rt;function Ag(e){e.min=Cg(e.min),e.max=Cg(e.max)}function Y4(e){Ag(e.x),Ag(e.y)}function d1(e,t,n){return e==="position"||e==="preserve-aspect"&&!x4(xg(t),xg(n),.2)}function X4(e){var t;return e!==e.root&&((t=e.scroll)==null?void 0:t.wasRoot)}const J4=c1({attachResizeListener:(e,t)=>xa(e,"resize",t),measureScroll:()=>{var e,t;return{x:document.documentElement.scrollLeft||((e=document.body)==null?void 0:e.scrollLeft)||0,y:document.documentElement.scrollTop||((t=document.body)==null?void 0:t.scrollTop)||0}},checkIsScrollRoot:()=>!0}),$c={current:void 0},u1=c1({measureScroll:e=>({x:e.scrollLeft,y:e.scrollTop}),defaultParent:()=>{if(!$c.current){const e=new J4({});e.mount(window),e.setOptions({layoutScroll:!0}),$c.current=e}return $c.current},resetTransform:(e,t)=>{e.style.transform=t!==void 0?t:"none"},checkIsScrollRoot:e=>window.getComputedStyle(e).position==="fixed"}),p1=j.createContext({transformPagePoint:e=>e,isStatic:!1,reducedMotion:"never"});function Z4(e=!0){const t=j.useContext(Gp);if(t===null)return[!0,null];const{isPresent:n,onExitComplete:r,register:i}=t,a=j.useId();j.useEffect(()=>{if(e)return i(a)},[e]);const o=j.useCallback(()=>e&&r&&r(a),[a,r,e]);return!n&&r?[!1,o]:[!0]}const f1=j.createContext({strict:!1}),Pg={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]};let Rg=!1;function e5(){if(Rg)return;const e={};for(const t in Pg)e[t]={isEnabled:n=>Pg[t].some(r=>!!n[r])};Uv(e),Rg=!0}function h1(){return e5(),HN()}function t5(e){const t=h1();for(const n in e)t[n]={...t[n],...e[n]};Uv(t)}const n5=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","propagate","ignoreStrict","viewport"]);function ml(e){return e.startsWith("while")||e.startsWith("drag")&&e!=="draggable"||e.startsWith("layout")||e.startsWith("onTap")||e.startsWith("onPan")||e.startsWith("onLayout")||n5.has(e)}let m1=e=>!ml(e);function r5(e){typeof e=="function"&&(m1=t=>t.startsWith("on")?!ml(t):e(t))}try{r5(require("@emotion/is-prop-valid").default)}catch{}function s5(e,t,n){const r={};for(const i in e)i==="values"&&typeof e.values=="object"||Ve(e[i])||(m1(i)||n===!0&&ml(i)||!t&&!ml(i)||e.draggable&&i.startsWith("onDrag"))&&(r[i]=e[i]);return r}const _l=j.createContext({});function i5(e,t){if(zl(e)){const{initial:n,animate:r}=e;return{initial:n===!1||ga(n)?n:void 0,animate:ga(r)?r:void 0}}return e.inherit!==!1?t:{}}function a5(e){const{initial:t,animate:n}=i5(e,j.useContext(_l));return j.useMemo(()=>({initial:t,animate:n}),[Mg(t),Mg(n)])}function Mg(e){return Array.isArray(e)?e.join(" "):e}const gf=()=>({style:{},transform:{},transformOrigin:{},vars:{}});function g1(e,t,n){for(const r in t)!Ve(t[r])&&!qv(r,n)&&(e[r]=t[r])}function o5({transformTemplate:e},t){return j.useMemo(()=>{const n=gf();return hf(n,t,e),Object.assign({},n.vars,n.style)},[t])}function l5(e,t){const n=e.style||{},r={};return g1(r,n,e),Object.assign(r,o5(e,t)),r}function c5(e,t){const n={},r=l5(e,t);return e.drag&&e.dragListener!==!1&&(n.draggable=!1,r.userSelect=r.WebkitUserSelect=r.WebkitTouchCallout="none",r.touchAction=e.drag===!0?"none":`pan-${e.drag==="x"?"y":"x"}`),e.tabIndex===void 0&&(e.onTap||e.onTapStart||e.whileTap)&&(n.tabIndex=0),n.style=r,n}const x1=()=>({...gf(),attrs:{}});function d5(e,t,n,r){const i=j.useMemo(()=>{const a=x1();return Yv(a,t,Jv(r),e.transformTemplate,e.style),{...a.attrs,style:{...a.style}}},[t]);if(e.style){const a={};g1(a,e.style,e),i.style={...a,...i.style}}return i}const u5=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function xf(e){return typeof e!="string"||e.includes("-")?!1:!!(u5.indexOf(e)>-1||/[A-Z]/u.test(e))}function p5(e,t,n,{latestValues:r},i,a=!1,o){const c=(o??xf(e)?d5:c5)(t,r,i,e),d=s5(t,typeof e=="string",a),u=e!==j.Fragment?{...d,...c,ref:n}:{},{children:p}=t,f=j.useMemo(()=>Ve(p)?p.get():p,[p]);return j.createElement(e,{...u,children:f})}function f5({scrapeMotionValuesFromProps:e,createRenderState:t},n,r,i){return{latestValues:h5(n,r,i,e),renderState:t()}}function h5(e,t,n,r){const i={},a=r(e,{});for(const f in a)i[f]=Po(a[f]);let{initial:o,animate:l}=e;const c=zl(e),d=Vv(e);t&&d&&!c&&e.inherit!==!1&&(o===void 0&&(o=t.initial),l===void 0&&(l=t.animate));let u=n?n.initial===!1:!1;u=u||o===!1;const p=u?l:o;if(p&&typeof p!="boolean"&&!Dl(p)){const f=Array.isArray(p)?p:[p];for(let h=0;h<f.length;h++){const m=of(e,f[h]);if(m){const{transitionEnd:y,transition:k,...x}=m;for(const g in x){let v=x[g];if(Array.isArray(v)){const w=u?v.length-1:0;v=v[w]}v!==null&&(i[g]=v)}for(const g in y)i[g]=y[g]}}}return i}const y1=e=>(t,n)=>{const r=j.useContext(_l),i=j.useContext(Gp),a=()=>f5(e,t,r,i);return n?a():pj(a)},m5=y1({scrapeMotionValuesFromProps:mf,createRenderState:gf}),g5=y1({scrapeMotionValuesFromProps:Zv,createRenderState:x1}),x5=Symbol.for("motionComponentSymbol");function y5(e,t,n){const r=j.useRef(n);j.useInsertionEffect(()=>{r.current=n});const i=j.useRef(null);return j.useCallback(a=>{var l;a&&((l=e.onMount)==null||l.call(e,a)),t&&(a?t.mount(a):t.unmount());const o=r.current;if(typeof o=="function")if(a){const c=o(a);typeof c=="function"&&(i.current=c)}else i.current?(i.current(),i.current=null):o(a);else o&&(o.current=a)},[t])}const v1=j.createContext({});function ds(e){return e&&typeof e=="object"&&Object.prototype.hasOwnProperty.call(e,"current")}function v5(e,t,n,r,i,a){var v,w;const{visualElement:o}=j.useContext(_l),l=j.useContext(f1),c=j.useContext(Gp),d=j.useContext(p1),u=d.reducedMotion,p=d.skipAnimations,f=j.useRef(null),h=j.useRef(!1);r=r||l.renderer,!f.current&&r&&(f.current=r(e,{visualState:t,parent:o,props:n,presenceContext:c,blockInitialAnimation:c?c.initial===!1:!1,reducedMotionConfig:u,skipAnimations:p,isSVG:a}),h.current&&f.current&&(f.current.manuallyAnimateOnMount=!0));const m=f.current,y=j.useContext(v1);m&&!m.projection&&i&&(m.type==="html"||m.type==="svg")&&b5(f.current,n,i,y);const k=j.useRef(!1);j.useInsertionEffect(()=>{m&&k.current&&m.update(n,c)});const x=n[Cv],g=j.useRef(!!x&&typeof window<"u"&&!((v=window.MotionHandoffIsComplete)!=null&&v.call(window,x))&&((w=window.MotionHasOptimisedAnimation)==null?void 0:w.call(window,x)));return hj(()=>{h.current=!0,m&&(k.current=!0,window.MotionIsMounted=!0,m.updateFeatures(),m.scheduleRenderMicrotask(),g.current&&m.animationState&&m.animationState.animateChanges())}),j.useEffect(()=>{m&&(!g.current&&m.animationState&&m.animationState.animateChanges(),g.current&&(queueMicrotask(()=>{var N;(N=window.MotionHandoffMarkAsComplete)==null||N.call(window,x)}),g.current=!1),m.enteringChildren=void 0)}),m}function b5(e,t,n,r){const{layoutId:i,layout:a,drag:o,dragConstraints:l,layoutScroll:c,layoutRoot:d,layoutAnchor:u,layoutCrossfade:p}=t;e.projection=new n(e.latestValues,t["data-framer-portal-id"]?void 0:b1(e.parent)),e.projection.setOptions({layoutId:i,layout:a,alwaysMeasureLayout:!!o||l&&ds(l),visualElement:e,animationType:typeof a=="string"?a:"both",initialPromotionConfig:r,crossfade:p,layoutScroll:c,layoutRoot:d,layoutAnchor:u})}function b1(e){if(e)return e.options.allowProjection!==!1?e.projection:b1(e.parent)}function Gc(e,{forwardMotionProps:t=!1,type:n}={},r,i){r&&t5(r);const a=n?n==="svg":xf(e),o=a?g5:m5;function l(d,u){let p;const f={...j.useContext(p1),...d,layoutId:w5(d)},{isStatic:h}=f,m=a5(d),y=o(d,h);if(!h&&typeof window<"u"){k5();const k=j5(f);p=k.MeasureLayout,m.visualElement=v5(e,y,f,i,k.ProjectionNode,a)}return s.jsxs(_l.Provider,{value:m,children:[p&&m.visualElement?s.jsx(p,{visualElement:m.visualElement,...f}):null,p5(e,d,y5(y,m.visualElement,u),y,h,t,a)]})}l.displayName=`motion.${typeof e=="string"?e:`create(${e.displayName??e.name??""})`}`;const c=j.forwardRef(l);return c[x5]=e,c}function w5({layoutId:e}){const t=j.useContext(Vy).id;return t&&e!==void 0?t+"-"+e:e}function k5(e,t){j.useContext(f1).strict}function j5(e){const t=h1(),{drag:n,layout:r}=t;if(!n&&!r)return{};const i={...n,...r};return{MeasureLayout:n!=null&&n.isEnabled(e)||r!=null&&r.isEnabled(e)?i.MeasureLayout:void 0,ProjectionNode:i.ProjectionNode}}function S5(e,t){if(typeof Proxy>"u")return Gc;const n=new Map,r=(a,o)=>Gc(a,o,e,t),i=(a,o)=>r(a,o);return new Proxy(i,{get:(a,o)=>o==="create"?r:(n.has(o)||n.set(o,Gc(o,void 0,e,t)),n.get(o))})}const N5=(e,t)=>t.isSVG??xf(e)?new a4(t):new e4(t,{allowProjection:e!==j.Fragment});class T5 extends fr{constructor(t){super(t),t.animationState||(t.animationState=u4(t))}updateAnimationControlsSubscription(){const{animate:t}=this.node.getProps();Dl(t)&&(this.unmountControls=t.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:t}=this.node.getProps(),{animate:n}=this.node.prevProps||{};t!==n&&this.updateAnimationControlsSubscription()}unmount(){var t;this.node.animationState.reset(),(t=this.unmountControls)==null||t.call(this)}}let E5=0;class C5 extends fr{constructor(){super(...arguments),this.id=E5++,this.isExitComplete=!1}update(){var a;if(!this.node.presenceContext)return;const{isPresent:t,onExitComplete:n}=this.node.presenceContext,{isPresent:r}=this.node.prevPresenceContext||{};if(!this.node.animationState||t===r)return;if(t&&r===!1){if(this.isExitComplete){const{initial:o,custom:l}=this.node.getProps();if(typeof o=="string"||typeof o=="object"&&o!==null&&!Array.isArray(o)){const c=Ur(this.node,o,l);if(c){const{transition:d,transitionEnd:u,...p}=c;for(const f in p)(a=this.node.getValue(f))==null||a.jump(p[f])}}this.node.animationState.reset(),this.node.animationState.animateChanges()}else this.node.animationState.setActive("exit",!1);this.isExitComplete=!1;return}const i=this.node.animationState.setActive("exit",!t);n&&!t&&i.then(()=>{this.isExitComplete=!0,n(this.id)})}mount(){const{register:t,onExitComplete:n}=this.node.presenceContext||{};n&&n(this.id),t&&(this.unmount=t(this.id))}unmount(){}}const A5={animation:{Feature:T5},exit:{Feature:C5}};function Ma(e){return{point:{x:e.pageX,y:e.pageY}}}const P5=e=>t=>df(t)&&e(t,Ma(t));function Gi(e,t,n,r){return xa(e,t,P5(n),r)}const w1=({current:e})=>e?e.ownerDocument.defaultView:null,Ig=(e,t)=>Math.abs(e-t);function R5(e,t){const n=Ig(e.x,t.x),r=Ig(e.y,t.y);return Math.sqrt(n**2+r**2)}const Lg=new Set(["auto","scroll"]);class k1{constructor(t,n,{transformPagePoint:r,contextWindow:i=window,dragSnapToOrigin:a=!1,distanceThreshold:o=3,element:l}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.lastRawMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.scrollPositions=new Map,this.removeScrollListeners=null,this.onElementScroll=h=>{this.handleScroll(h.target)},this.onWindowScroll=()=>{this.handleScroll(window)},this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;this.lastRawMoveEventInfo&&(this.lastMoveEventInfo=lo(this.lastRawMoveEventInfo,this.transformPagePoint));const h=Wc(this.lastMoveEventInfo,this.history),m=this.startEvent!==null,y=R5(h.offset,{x:0,y:0})>=this.distanceThreshold;if(!m&&!y)return;const{point:k}=h,{timestamp:x}=_e;this.history.push({...k,timestamp:x});const{onStart:g,onMove:v}=this.handlers;m||(g&&g(this.lastMoveEvent,h),this.startEvent=this.lastMoveEvent),v&&v(this.lastMoveEvent,h)},this.handlePointerMove=(h,m)=>{this.lastMoveEvent=h,this.lastRawMoveEventInfo=m,this.lastMoveEventInfo=lo(m,this.transformPagePoint),re.update(this.updatePoint,!0)},this.handlePointerUp=(h,m)=>{this.end();const{onEnd:y,onSessionEnd:k,resumeAnimation:x}=this.handlers;if((this.dragSnapToOrigin||!this.startEvent)&&x&&x(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const g=Wc(h.type==="pointercancel"?this.lastMoveEventInfo:lo(m,this.transformPagePoint),this.history);this.startEvent&&y&&y(h,g),k&&k(h,g)},!df(t))return;this.dragSnapToOrigin=a,this.handlers=n,this.transformPagePoint=r,this.distanceThreshold=o,this.contextWindow=i||window;const c=Ma(t),d=lo(c,this.transformPagePoint),{point:u}=d,{timestamp:p}=_e;this.history=[{...u,timestamp:p}];const{onSessionStart:f}=n;f&&f(t,Wc(d,this.history)),this.removeListeners=Aa(Gi(this.contextWindow,"pointermove",this.handlePointerMove),Gi(this.contextWindow,"pointerup",this.handlePointerUp),Gi(this.contextWindow,"pointercancel",this.handlePointerUp)),l&&this.startScrollTracking(l)}startScrollTracking(t){let n=t.parentElement;for(;n;){const r=getComputedStyle(n);(Lg.has(r.overflowX)||Lg.has(r.overflowY))&&this.scrollPositions.set(n,{x:n.scrollLeft,y:n.scrollTop}),n=n.parentElement}this.scrollPositions.set(window,{x:window.scrollX,y:window.scrollY}),window.addEventListener("scroll",this.onElementScroll,{capture:!0}),window.addEventListener("scroll",this.onWindowScroll),this.removeScrollListeners=()=>{window.removeEventListener("scroll",this.onElementScroll,{capture:!0}),window.removeEventListener("scroll",this.onWindowScroll)}}handleScroll(t){const n=this.scrollPositions.get(t);if(!n)return;const r=t===window,i=r?{x:window.scrollX,y:window.scrollY}:{x:t.scrollLeft,y:t.scrollTop},a={x:i.x-n.x,y:i.y-n.y};a.x===0&&a.y===0||(r?this.lastMoveEventInfo&&(this.lastMoveEventInfo.point.x+=a.x,this.lastMoveEventInfo.point.y+=a.y):this.history.length>0&&(this.history[0].x-=a.x,this.history[0].y-=a.y),this.scrollPositions.set(t,i),re.update(this.updatePoint,!0))}updateHandlers(t){this.handlers=t}end(){this.removeListeners&&this.removeListeners(),this.removeScrollListeners&&this.removeScrollListeners(),this.scrollPositions.clear(),cr(this.updatePoint)}}function lo(e,t){return t?{point:t(e.point)}:e}function Dg(e,t){return{x:e.x-t.x,y:e.y-t.y}}function Wc({point:e},t){return{point:e,delta:Dg(e,j1(t)),offset:Dg(e,M5(t)),velocity:I5(t,.1)}}function M5(e){return e[0]}function j1(e){return e[e.length-1]}function I5(e,t){if(e.length<2)return{x:0,y:0};let n=e.length-1,r=null;const i=j1(e);for(;n>=0&&(r=e[n],!(i.timestamp-r.timestamp>bt(t)));)n--;if(!r)return{x:0,y:0};r===e[0]&&e.length>2&&i.timestamp-r.timestamp>bt(t)*2&&(r=e[1]);const a=At(i.timestamp-r.timestamp);if(a===0)return{x:0,y:0};const o={x:(i.x-r.x)/a,y:(i.y-r.y)/a};return o.x===1/0&&(o.x=0),o.y===1/0&&(o.y=0),o}function L5(e,{min:t,max:n},r){return t!==void 0&&e<t?e=r?ne(t,e,r.min):Math.max(e,t):n!==void 0&&e>n&&(e=r?ne(n,e,r.max):Math.min(e,n)),e}function zg(e,t,n){return{min:t!==void 0?e.min+t:void 0,max:n!==void 0?e.max+n-(e.max-e.min):void 0}}function D5(e,{top:t,left:n,bottom:r,right:i}){return{x:zg(e.x,n,i),y:zg(e.y,t,r)}}function _g(e,t){let n=t.min-e.min,r=t.max-e.max;return t.max-t.min<e.max-e.min&&([n,r]=[r,n]),{min:n,max:r}}function z5(e,t){return{x:_g(e.x,t.x),y:_g(e.y,t.y)}}function _5(e,t){let n=.5;const r=nt(e),i=nt(t);return i>r?n=ha(t.min,t.max-r,e.min):r>i&&(n=ha(e.min,e.max-i,t.min)),ln(0,1,n)}function O5(e,t){const n={};return t.min!==void 0&&(n.min=t.min-e.min),t.max!==void 0&&(n.max=t.max-e.min),n}const Vu=.35;function F5(e=Vu){return e===!1?e=0:e===!0&&(e=Vu),{x:Og(e,"left","right"),y:Og(e,"top","bottom")}}function Og(e,t,n){return{min:Fg(e,t),max:Fg(e,n)}}function Fg(e,t){return typeof e=="number"?e:e[t]||0}const V5=new WeakMap;class B5{constructor(t){this.openDragLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=Ce(),this.latestPointerEvent=null,this.latestPanInfo=null,this.visualElement=t}start(t,{snapToCursor:n=!1,distanceThreshold:r}={}){const{presenceContext:i}=this.visualElement;if(i&&i.isPresent===!1)return;const a=p=>{n&&this.snapToCursor(Ma(p).point),this.stopAnimation()},o=(p,f)=>{const{drag:h,dragPropagation:m,onDragStart:y}=this.getProps();if(h&&!m&&(this.openDragLock&&this.openDragLock(),this.openDragLock=vN(h),!this.openDragLock))return;this.latestPointerEvent=p,this.latestPanInfo=f,this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),Jt(x=>{let g=this.getAxisMotionValue(x).get()||0;if(on.test(g)){const{projection:v}=this.visualElement;if(v&&v.layout){const w=v.layout.layoutBox[x];w&&(g=nt(w)*(parseFloat(g)/100))}}this.originPoint[x]=g}),y&&re.update(()=>y(p,f),!1,!0),Pu(this.visualElement,"transform");const{animationState:k}=this.visualElement;k&&k.setActive("whileDrag",!0)},l=(p,f)=>{this.latestPointerEvent=p,this.latestPanInfo=f;const{dragPropagation:h,dragDirectionLock:m,onDirectionLock:y,onDrag:k}=this.getProps();if(!h&&!this.openDragLock)return;const{offset:x}=f;if(m&&this.currentDirection===null){this.currentDirection=H5(x),this.currentDirection!==null&&y&&y(this.currentDirection);return}this.updateAxis("x",f.point,x),this.updateAxis("y",f.point,x),this.visualElement.render(),k&&re.update(()=>k(p,f),!1,!0)},c=(p,f)=>{this.latestPointerEvent=p,this.latestPanInfo=f,this.stop(p,f),this.latestPointerEvent=null,this.latestPanInfo=null},d=()=>{const{dragSnapToOrigin:p}=this.getProps();(p||this.constraints)&&this.startAnimation({x:0,y:0})},{dragSnapToOrigin:u}=this.getProps();this.panSession=new k1(t,{onSessionStart:a,onStart:o,onMove:l,onSessionEnd:c,resumeAnimation:d},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:u,distanceThreshold:r,contextWindow:w1(this.visualElement),element:this.visualElement.current})}stop(t,n){const r=t||this.latestPointerEvent,i=n||this.latestPanInfo,a=this.isDragging;if(this.cancel(),!a||!i||!r)return;const{velocity:o}=i;this.startAnimation(o);const{onDragEnd:l}=this.getProps();l&&re.postRender(()=>l(r,i))}cancel(){this.isDragging=!1;const{projection:t,animationState:n}=this.visualElement;t&&(t.isAnimationBlocked=!1),this.endPanSession();const{dragPropagation:r}=this.getProps();!r&&this.openDragLock&&(this.openDragLock(),this.openDragLock=null),n&&n.setActive("whileDrag",!1)}endPanSession(){this.panSession&&this.panSession.end(),this.panSession=void 0}updateAxis(t,n,r){const{drag:i}=this.getProps();if(!r||!co(t,i,this.currentDirection))return;const a=this.getAxisMotionValue(t);let o=this.originPoint[t]+r[t];this.constraints&&this.constraints[t]&&(o=L5(o,this.constraints[t],this.elastic[t])),a.set(o)}resolveConstraints(){var a;const{dragConstraints:t,dragElastic:n}=this.getProps(),r=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):(a=this.visualElement.projection)==null?void 0:a.layout,i=this.constraints;t&&ds(t)?this.constraints||(this.constraints=this.resolveRefConstraints()):t&&r?this.constraints=D5(r.layoutBox,t):this.constraints=!1,this.elastic=F5(n),i!==this.constraints&&!ds(t)&&r&&this.constraints&&!this.hasMutatedConstraints&&Jt(o=>{this.constraints!==!1&&this.getAxisMotionValue(o)&&(this.constraints[o]=O5(r.layoutBox[o],this.constraints[o]))})}resolveRefConstraints(){const{dragConstraints:t,onMeasureDragConstraints:n}=this.getProps();if(!t||!ds(t))return!1;const r=t.current,{projection:i}=this.visualElement;if(!i||!i.layout)return!1;i.root&&(i.root.scroll=void 0,i.root.updateScroll());const a=QN(r,i.root,this.visualElement.getTransformPagePoint());let o=z5(i.layout.layoutBox,a);if(n){const l=n(GN(o));this.hasMutatedConstraints=!!l,l&&(o=$v(l))}return o}startAnimation(t){const{drag:n,dragMomentum:r,dragElastic:i,dragTransition:a,dragSnapToOrigin:o,onDragTransitionEnd:l}=this.getProps(),c=this.constraints||{},d=Jt(u=>{if(!co(u,n,this.currentDirection))return;let p=c&&c[u]||{};(o===!0||o===u)&&(p={min:0,max:0});const f=i?200:1e6,h=i?40:1e7,m={type:"inertia",velocity:r?t[u]:0,bounceStiffness:f,bounceDamping:h,timeConstant:750,restDelta:1,restSpeed:10,...a,...p};return this.startAxisValueAnimation(u,m)});return Promise.all(d).then(l)}startAxisValueAnimation(t,n){const r=this.getAxisMotionValue(t);return Pu(this.visualElement,t),r.start(af(t,r,0,n,this.visualElement,!1))}stopAnimation(){Jt(t=>this.getAxisMotionValue(t).stop())}getAxisMotionValue(t){const n=`_drag${t.toUpperCase()}`,i=this.visualElement.getProps()[n];return i||this.visualElement.getValue(t,this.visualElement.latestValues[t]??0)}snapToCursor(t){Jt(n=>{const{drag:r}=this.getProps();if(!co(n,r,this.currentDirection))return;const{projection:i}=this.visualElement,a=this.getAxisMotionValue(n);if(i&&i.layout){const{min:o,max:l}=i.layout.layoutBox[n],c=a.get()||0;a.set(t[n]-ne(o,l,.5)+c)}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:t,dragConstraints:n}=this.getProps(),{projection:r}=this.visualElement;if(!ds(n)||!r||!this.constraints)return;this.stopAnimation();const i={x:0,y:0};Jt(o=>{const l=this.getAxisMotionValue(o);if(l&&this.constraints!==!1){const c=l.get();i[o]=_5({min:c,max:c},this.constraints[o])}});const{transformTemplate:a}=this.visualElement.getProps();this.visualElement.current.style.transform=a?a({},""):"none",r.root&&r.root.updateScroll(),r.updateLayout(),this.constraints=!1,this.resolveConstraints(),Jt(o=>{if(!co(o,t,null))return;const l=this.getAxisMotionValue(o),{min:c,max:d}=this.constraints[o];l.set(ne(c,d,i[o]))}),this.visualElement.render()}addListeners(){if(!this.visualElement.current)return;V5.set(this.visualElement,this);const t=this.visualElement.current,n=Gi(t,"pointerdown",d=>{const{drag:u,dragListener:p=!0}=this.getProps(),f=d.target,h=f!==t&&NN(f);u&&p&&!h&&this.start(d)});let r;const i=()=>{const{dragConstraints:d}=this.getProps();ds(d)&&d.current&&(this.constraints=this.resolveRefConstraints(),r||(r=U5(t,d.current,()=>this.scalePositionWithinConstraints())))},{projection:a}=this.visualElement,o=a.addEventListener("measure",i);a&&!a.layout&&(a.root&&a.root.updateScroll(),a.updateLayout()),re.read(i);const l=xa(window,"resize",()=>this.scalePositionWithinConstraints()),c=a.addEventListener("didUpdate",({delta:d,hasLayoutChanged:u})=>{this.isDragging&&u&&(Jt(p=>{const f=this.getAxisMotionValue(p);f&&(this.originPoint[p]+=d[p].translate,f.set(f.get()+d[p].translate))}),this.visualElement.render())});return()=>{l(),n(),o(),c&&c(),r&&r()}}getProps(){const t=this.visualElement.getProps(),{drag:n=!1,dragDirectionLock:r=!1,dragPropagation:i=!1,dragConstraints:a=!1,dragElastic:o=Vu,dragMomentum:l=!0}=t;return{...t,drag:n,dragDirectionLock:r,dragPropagation:i,dragConstraints:a,dragElastic:o,dragMomentum:l}}}function Vg(e){let t=!0;return()=>{if(t){t=!1;return}e()}}function U5(e,t,n){const r=qm(e,Vg(n)),i=qm(t,Vg(n));return()=>{r(),i()}}function co(e,t,n){return(t===!0||t===e)&&(n===null||n===e)}function H5(e,t=10){let n=null;return Math.abs(e.y)>t?n="y":Math.abs(e.x)>t&&(n="x"),n}class $5 extends fr{constructor(t){super(t),this.removeGroupControls=Rt,this.removeListeners=Rt,this.controls=new B5(t)}mount(){const{dragControls:t}=this.node.getProps();t&&(this.removeGroupControls=t.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||Rt}update(){const{dragControls:t}=this.node.getProps(),{dragControls:n}=this.node.prevProps||{};t!==n&&(this.removeGroupControls(),t&&(this.removeGroupControls=t.subscribe(this.controls)))}unmount(){this.removeGroupControls(),this.removeListeners(),this.controls.isDragging||this.controls.endPanSession()}}const Kc=e=>(t,n)=>{e&&re.update(()=>e(t,n),!1,!0)};class G5 extends fr{constructor(){super(...arguments),this.removePointerDownListener=Rt}onPointerDown(t){this.session=new k1(t,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:w1(this.node)})}createPanHandlers(){const{onPanSessionStart:t,onPanStart:n,onPan:r,onPanEnd:i}=this.node.getProps();return{onSessionStart:Kc(t),onStart:Kc(n),onMove:Kc(r),onEnd:(a,o)=>{delete this.session,i&&re.postRender(()=>i(a,o))}}}mount(){this.removePointerDownListener=Gi(this.node.current,"pointerdown",t=>this.onPointerDown(t))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}let Qc=!1;class W5 extends j.Component{componentDidMount(){const{visualElement:t,layoutGroup:n,switchLayoutGroup:r,layoutId:i}=this.props,{projection:a}=t;a&&(n.group&&n.group.add(a),r&&r.register&&i&&r.register(a),Qc&&a.root.didUpdate(),a.addEventListener("animationComplete",()=>{this.safeToRemove()}),a.setOptions({...a.options,layoutDependency:this.props.layoutDependency,onExitComplete:()=>this.safeToRemove()})),Ro.hasEverUpdated=!0}getSnapshotBeforeUpdate(t){const{layoutDependency:n,visualElement:r,drag:i,isPresent:a}=this.props,{projection:o}=r;return o&&(o.isPresent=a,t.layoutDependency!==n&&o.setOptions({...o.options,layoutDependency:n}),Qc=!0,i||t.layoutDependency!==n||n===void 0||t.isPresent!==a?o.willUpdate():this.safeToRemove(),t.isPresent!==a&&(a?o.promote():o.relegate()||re.postRender(()=>{const l=o.getStack();(!l||!l.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{visualElement:t,layoutAnchor:n}=this.props,{projection:r}=t;r&&(r.options.layoutAnchor=n,r.root.didUpdate(),cf.postRender(()=>{!r.currentAnimation&&r.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:t,layoutGroup:n,switchLayoutGroup:r}=this.props,{projection:i}=t;Qc=!0,i&&(i.scheduleCheckAfterUnmount(),n&&n.group&&n.group.remove(i),r&&r.deregister&&r.deregister(i))}safeToRemove(){const{safeToRemove:t}=this.props;t&&t()}render(){return null}}function S1(e){const[t,n]=Z4(),r=j.useContext(Vy);return s.jsx(W5,{...e,layoutGroup:r,switchLayoutGroup:j.useContext(v1),isPresent:t,safeToRemove:n})}const K5={pan:{Feature:G5},drag:{Feature:$5,ProjectionNode:u1,MeasureLayout:S1}};function Bg(e,t,n){const{props:r}=e;e.animationState&&r.whileHover&&e.animationState.setActive("whileHover",n==="Start");const i="onHover"+n,a=r[i];a&&re.postRender(()=>a(t,Ma(t)))}class Q5 extends fr{mount(){const{current:t}=this.node;t&&(this.unmount=wN(t,(n,r)=>(Bg(this.node,r,"Start"),i=>Bg(this.node,i,"End"))))}unmount(){}}class q5 extends fr{constructor(){super(...arguments),this.isActive=!1}onFocus(){let t=!1;try{t=this.node.current.matches(":focus-visible")}catch{t=!0}!t||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=Aa(xa(this.node.current,"focus",()=>this.onFocus()),xa(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}function Ug(e,t,n){const{props:r}=e;if(e.current instanceof HTMLButtonElement&&e.current.disabled)return;e.animationState&&r.whileTap&&e.animationState.setActive("whileTap",n==="Start");const i="onTap"+(n==="End"?"":n),a=r[i];a&&re.postRender(()=>a(t,Ma(t)))}class Y5 extends fr{mount(){const{current:t}=this.node;if(!t)return;const{globalTapTarget:n,propagate:r}=this.node.props;this.unmount=EN(t,(i,a)=>(Ug(this.node,a,"Start"),(o,{success:l})=>Ug(this.node,o,l?"End":"Cancel")),{useGlobalTarget:n,stopPropagation:(r==null?void 0:r.tap)===!1})}unmount(){}}const Bu=new WeakMap,qc=new WeakMap,X5=e=>{const t=Bu.get(e.target);t&&t(e)},J5=e=>{e.forEach(X5)};function Z5({root:e,...t}){const n=e||document;qc.has(n)||qc.set(n,{});const r=qc.get(n),i=JSON.stringify(t);return r[i]||(r[i]=new IntersectionObserver(J5,{root:e,...t})),r[i]}function e3(e,t,n){const r=Z5(t);return Bu.set(e,n),r.observe(e),()=>{Bu.delete(e),r.unobserve(e)}}const t3={some:0,all:1};class n3 extends fr{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){var c;(c=this.stopObserver)==null||c.call(this);const{viewport:t={}}=this.node.getProps(),{root:n,margin:r,amount:i="some",once:a}=t,o={root:n?n.current:void 0,rootMargin:r,threshold:typeof i=="number"?i:t3[i]},l=d=>{const{isIntersecting:u}=d;if(this.isInView===u||(this.isInView=u,a&&!u&&this.hasEnteredView))return;u&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",u);const{onViewportEnter:p,onViewportLeave:f}=this.node.getProps(),h=u?p:f;h&&h(d)};this.stopObserver=e3(this.node.current,o,l)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:t,prevProps:n}=this.node;["amount","margin","root"].some(r3(t,n))&&this.startObserver()}unmount(){var t;(t=this.stopObserver)==null||t.call(this),this.hasEnteredView=!1,this.isInView=!1}}function r3({viewport:e={}},{viewport:t={}}={}){return n=>e[n]!==t[n]}const s3={inView:{Feature:n3},tap:{Feature:Y5},focus:{Feature:q5},hover:{Feature:Q5}},i3={layout:{ProjectionNode:u1,MeasureLayout:S1}},a3={...A5,...s3,...K5,...i3},N1=S5(a3,N5);function o3({experiences:e=[]}){const[t,n]=j.useState(0),[r,i]=j.useState("logs"),a={1:{pitch:"I optimized critical real-time legal and highway databases for official government portals. I also built the core WhatsApp Meta webhook integration from scratch, utilizing key-value Redis caching to reduce database overhead by 40%.",architecture:`[Supreme Court / NHAI APIs] ──► [Node.js ETL Pipeline] ──► [Redis Cache (Metadata Check)] ──► [MySQL Government DB]
                                       │
                              [Meta WhatsApp Webhooks]`,bug:"Webhook concurrency bottleneck: During high traffic, multiple WhatsApp delivery statuses and user messages arrived out-of-order, causing race conditions in message status. I resolved this by introducing a Redis-based distributed locking mechanism with unique message-signature IDs to queue events.",stackReason:"Node.js was selected for its non-blocking event-driven loop, ideal for webhook event-handling. MySQL was chosen for strict government relational schemas and ACID transaction compliance."},2:{pitch:"I led a 4-developer team to construct BastaxCasino, a high-volume European iGaming platform. I architected the transactional schemas, built 100+ REST APIs, and configured microservices using Kafka message streams and Nginx reverse proxies to achieve 99.9% uptime.",architecture:`[React UI / Admin Panels] ──► [Nginx Reverse Proxy] ──► [Express Gateways] ──► [Kafka Queue] ──► [Banking Microservices]
                                                                                                    │
                                                                                              [MongoDB / Redis]`,bug:"Multi-player concurrent bet calculations caused database locks and transaction timeouts. I resolved this by decoupling the bet-placement API from the transaction writer using Apache Kafka as an event queue, allowing asynchronous processing without database congestion.",stackReason:"MongoDB provided flexible document schemas needed for rapid slot game metadata changes. Kafka message queues decoupled banking microservices to protect transactions from spike traffic."},3:{pitch:"I designed and deployed a full-stack data warehousing system from the ground up using MySQL. I designed a secure Role-Based Access Control (RBAC) database ledger to log transaction streams for admins, suppliers, and customers.",architecture:"[React Dashboard] ──► [Express APIs] ──► [MySQL RBAC Ledger] (Incoming/Outgoing Streams)",bug:"Inventory double-spend errors: If two customers bought the same product stock simultaneously, inventory numbers drifted into negative values. I resolved this by applying SQL transaction queries using 'SELECT ... FOR UPDATE' to locks rows until completion.",stackReason:"MySQL was selected to guarantee absolute transactional consistency for incoming/outgoing inventory records and strict relation mapping between suppliers and customers."}},o=[{id:1,role:"Mid Level Software Engineer",company:"Jupitice Justice Technologies Pvt. Ltd.",duration:"Aug 2025 – Present",location:"IT Park, Chandigarh",description:["Worked on Supreme Court and High Court official websites, fetching and processing real-time judicial data and integrating it into production-grade applications.","Developed and integrated Offline KYC (Know Your Customer) solutions for real-world use cases, ensuring data accuracy, validation, and compliance.","Fetched and processed NHAI (National Highways Authority of India) data, structured large datasets, and prepared them for government database insertion.","Designed and optimized database schemas for high-volume government data handling.","Improved application performance by implementing caching mechanisms using key-value storage, significantly reducing database load.","Wrote automation and data-processing scripts to clean, transform, and manage large datasets.","Worked on a core product developing WhatsApp Business API integrations using webhooks for real-time messaging, notifications, and event handling.","Contributed to Lok Adalat government project, handling legal and public service-related data with high reliability and security."]},{id:2,role:"MERN Full Stack Developer",company:"Basta Tech Solutions Pvt. Ltd.",duration:"Oct 2023 – July 2025",location:"Mohali, India",description:["Led a team of 4 developers in designing and deploying BastaxCasino, a full-stack casino gaming platform for European markets, including admin and affiliate panels, using Node.js and ReactJS.","Architected the MongoDB database schema from scratch, optimizing real-time transaction processing and scalability, achieving 99.9% uptime.","Developed 100+ RESTful APIs using Node.js for game betting, affiliate commission tracking (2%), and admin dashboards.","Configured Nginx as a reverse proxy, PM2 for monitoring, and managed deployment via Termius, reducing deployment time by 50%.","Developed microservices for a Banking Application, incorporating Redis and Kafka for high performance and scalability.","Developed a Decentralized Application integrating AI and Blockchain technologies, implementing Role-Based Access Control (RBAC) inspired by the UMA Protocol."]},{id:3,role:"Full Stack MERN Developer",company:"Zapbuild Technologies",duration:"Mar 2022 – Oct 2023",location:"Mohali, India",description:["Created a full-stack data warehousing system from the ground up utilizing Express.js, React, and Material UI.","Developed custom APIs from scratch to cater to various user roles including administrators, suppliers, and customers.","Established efficient database schemas and tables in MySQL for inventory management and role-based access control (RBAC).","Implemented administration features to manage suppliers, customers, and inventory streams."]}],l=e.length>0?e:o,c=l[t]||l[0],d=a[(c==null?void 0:c.id)||1];return s.jsxs("section",{id:"experience",className:"experience-section dark-section",children:[s.jsx("div",{className:"experience-grid-overlay"}),s.jsxs(N1.div,{className:"container",initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0,amount:.2},transition:{duration:.6},children:[s.jsx("span",{className:"section-tag",style:{color:"var(--accent-lavender)"},children:"Interactive Pipeline"}),s.jsx("h2",{className:"section-title light",children:"Professional Chronology"}),s.jsx("p",{className:"section-subtitle light",children:"Click the pipeline execution nodes on the left to inspect logs, technical contributions, and interview prep deep-dives."}),s.jsxs("div",{className:"pipeline-container",children:[s.jsx("div",{className:"pipeline-rail",children:l.map((u,p)=>s.jsxs(Qu.Fragment,{children:[p>0&&s.jsx("div",{className:`rail-line ${p<=t?"active":""}`}),s.jsxs("button",{className:`rail-node ${p===t?"active":""}`,onClick:()=>{n(p)},"aria-label":`Select job at ${u.company}`,children:[s.jsx("div",{className:"rail-node-indicator",children:s.jsx("span",{className:"rail-node-dot"})}),s.jsxs("div",{className:"rail-node-text",children:[s.jsx("div",{className:"rail-company",children:u.company.split(" ")[0]}),s.jsx("div",{className:"rail-date",children:u.duration.split(" – ")[0]})]})]})]},u.id))}),s.jsxs("div",{className:"pipeline-terminal",children:[s.jsxs("div",{className:"terminal-header",children:[s.jsxs("div",{className:"terminal-tabs",children:[s.jsxs("button",{className:`terminal-tab-btn ${r==="logs"?"active":""}`,onClick:()=>i("logs"),children:[s.jsx(Il,{size:12}),s.jsx("span",{children:"Terminal Logs"})]}),s.jsxs("button",{className:`terminal-tab-btn ${r==="interview"?"active":""}`,onClick:()=>i("interview"),children:[s.jsx(wk,{size:12}),s.jsx("span",{children:"Interview Deep-Dive"})]})]}),s.jsxs("div",{className:"terminal-run",children:[s.jsx(fu,{size:10,style:{marginRight:"4px"}})," RUNNING"]})]}),s.jsxs("div",{className:"terminal-body",children:[s.jsxs("div",{className:"job-header-details",children:[s.jsxs("div",{className:"job-role-info",children:[s.jsx("h3",{className:"job-role",children:c==null?void 0:c.role}),s.jsx("h4",{className:"job-company",children:c==null?void 0:c.company})]}),s.jsxs("div",{className:"job-meta-tags",children:[s.jsxs("div",{className:"meta-tag",children:[s.jsx(ck,{size:12}),s.jsx("span",{children:c==null?void 0:c.duration})]}),s.jsxs("div",{className:"meta-tag",children:[s.jsx($p,{size:12}),s.jsx("span",{children:c==null?void 0:c.location})]})]})]}),r==="logs"&&s.jsxs("div",{className:"job-log-output",children:[s.jsx("div",{className:"log-line-prefix",children:"system_log_output:"}),s.jsx("ul",{className:"log-bullets",children:c==null?void 0:c.description.map((u,p)=>s.jsxs("li",{className:"log-bullet-item",children:[s.jsx("span",{className:"log-arrow",children:">"}),s.jsx("p",{dangerouslySetInnerHTML:{__html:Fy.sanitize(u)}})]},p))})]}),r==="interview"&&d&&s.jsxs("div",{className:"interview-deep-dive-panel",children:[s.jsxs("div",{className:"interview-section-block",children:[s.jsx("span",{className:"prep-label",children:"🎤 2-Minute Interview Pitch:"}),s.jsxs("p",{className:"prep-content italic",children:['"',d.pitch,'"']})]}),s.jsxs("div",{className:"interview-section-block",children:[s.jsx("span",{className:"prep-label",children:"🧱 Data Pipeline & Architecture:"}),s.jsx("pre",{className:"prep-diagram",children:s.jsx("code",{children:d.architecture})})]}),s.jsxs("div",{className:"interview-section-block",children:[s.jsx("span",{className:"prep-label",children:"🚨 Most Complex Concurrency Bug Solved:"}),s.jsx("p",{className:"prep-content",children:d.bug})]}),s.jsxs("div",{className:"interview-section-block",children:[s.jsx("span",{className:"prep-label",children:"🔬 Tech Stack Selection Justification:"}),s.jsx("p",{className:"prep-content",children:d.stackReason})]})]})]})]})]})]}),s.jsx("style",{children:`
        .experience-section {
          background-color: var(--bg-dark);
          color: var(--text-light);
          position: relative;
          overflow: hidden;
          border-bottom: 1px solid rgba(245, 243, 239, 0.1);
        }

        .experience-grid-overlay {
          position: absolute;
          inset: 0;
          background-image: radial-gradient(rgba(94, 90, 209, 0.05) 1px, transparent 1px);
          background-size: 24px 24px;
          z-index: 1;
          pointer-events: none;
        }

        .pipeline-container {
          display: grid;
          grid-template-columns: 0.7fr 1.3fr;
          gap: 60px;
          position: relative;
          z-index: 2;
        }

        /* Timeline Rail Styling */
        .pipeline-rail {
          display: flex;
          flex-direction: column;
          gap: 0;
          position: relative;
          padding-left: 20px;
        }

        .rail-line {
          width: 2px;
          height: 60px;
          background-color: rgba(245, 243, 239, 0.1);
          margin-left: 17px;
          transition: var(--transition-slow);
        }

        .rail-line.active {
          background-color: var(--accent-lavender);
          box-shadow: 0 0 10px var(--accent-lavender);
        }

        .rail-node {
          background: none;
          border: none;
          display: flex;
          align-items: center;
          gap: 20px;
          cursor: pointer;
          text-align: left;
          padding: 8px 0;
          outline: none;
          width: 100%;
        }

        .rail-node-indicator {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          border: 2px solid rgba(245, 243, 239, 0.1);
          background-color: var(--bg-darker);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: var(--transition-normal);
          z-index: 3;
        }

        .rail-node-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background-color: rgba(245, 243, 239, 0.3);
          transition: var(--transition-normal);
        }

        .rail-node:hover .rail-node-indicator {
          border-color: rgba(160, 175, 238, 0.6);
        }

        .rail-node.active .rail-node-indicator {
          border-color: var(--accent-lavender);
          background-color: var(--accent-lavender);
          box-shadow: 0 0 15px var(--accent-lavender);
        }

        .rail-node.active .rail-node-dot {
          background-color: var(--bg-darker);
          transform: scale(1.2);
        }

        .rail-node-text {
          transition: var(--transition-normal);
        }

        .rail-company {
          font-family: var(--font-sans);
          font-size: 16px;
          font-weight: 500;
          color: var(--text-muted-light);
        }

        .rail-date {
          font-family: var(--font-mono);
          font-size: 11px;
          color: rgba(245, 243, 239, 0.45);
          margin-top: 2px;
        }

        .rail-node.active .rail-company {
          color: var(--text-light);
          font-weight: 600;
        }

        .rail-node.active .rail-date {
          color: var(--accent-lavender);
        }

        /* Inspection Console Panel Styling */
        .pipeline-terminal {
          background-color: var(--bg-darker);
          border: 1px solid rgba(245, 243, 239, 0.08);
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 24px 50px rgba(0, 0, 0, 0.3);
          display: flex;
          flex-direction: column;
        }

        .terminal-header {
          background-color: rgba(0, 0, 0, 0.2);
          border-bottom: 1px solid rgba(245, 243, 239, 0.04);
          padding: 8px 16px;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .terminal-tabs {
          display: flex;
          gap: 12px;
        }

        .terminal-tab-btn {
          background: none;
          border: none;
          color: var(--text-muted-light);
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-family: var(--font-sans);
          font-size: 12px;
          cursor: pointer;
          padding: 6px 12px;
          border-radius: 4px;
          transition: var(--transition-fast);
        }

        .terminal-tab-btn:hover {
          color: var(--text-light);
          background-color: rgba(245, 243, 239, 0.04);
        }

        .terminal-tab-btn.active {
          color: var(--accent-lavender);
          background-color: rgba(160, 175, 238, 0.1);
        }

        .terminal-run {
          display: inline-flex;
          align-items: center;
          background-color: rgba(16, 185, 129, 0.1);
          color: #10b981;
          padding: 2px 8px;
          border-radius: 4px;
          font-family: var(--font-mono);
          font-size: 10px;
          font-weight: 600;
        }

        .terminal-body {
          padding: 40px;
          max-height: 540px;
          overflow-y: auto;
        }

        .job-header-details {
          border-bottom: 1px solid rgba(245, 243, 239, 0.08);
          padding-bottom: 24px;
          margin-bottom: 24px;
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          flex-wrap: wrap;
          gap: 16px;
        }

        .job-role {
          font-size: 24px;
          font-weight: 400;
          color: var(--text-light);
          letter-spacing: -0.02em;
        }

        .job-company {
          font-size: 16px;
          font-weight: 400;
          color: var(--accent-lavender);
          margin-top: 4px;
        }

        .job-meta-tags {
          display: flex;
          gap: 16px;
        }

        .meta-tag {
          display: flex;
          align-items: center;
          gap: 6px;
          font-family: var(--font-mono);
          font-size: 11px;
          color: var(--text-muted-light);
          border: 1px solid rgba(245, 243, 239, 0.1);
          padding: 4px 10px;
          border-radius: 4px;
        }

        .job-log-output {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .log-line-prefix {
          font-family: var(--font-mono);
          font-size: 11px;
          color: var(--accent-lavender);
          text-transform: uppercase;
          letter-spacing: 0.1em;
        }

        .log-bullets {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .log-bullet-item {
          display: flex;
          gap: 12px;
          align-items: flex-start;
        }

        .log-arrow {
          font-family: var(--font-mono);
          font-size: 14px;
          color: var(--accent-lavender);
          margin-top: 1px;
        }

        .log-bullet-item p {
          font-size: 14px;
          line-height: 1.6;
          color: var(--text-muted-light);
        }

        /* Interview Deep Dive Tab */
        .interview-deep-dive-panel {
          display: flex;
          flex-direction: column;
          gap: 20px;
          animation: fadeIn 0.3s ease;
        }

        .interview-section-block {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .prep-label {
          font-family: var(--font-mono);
          font-size: 11px;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: var(--accent-lavender);
        }

        .prep-content {
          font-size: 14px;
          line-height: 1.5;
          color: var(--text-muted-light);
        }

        .prep-content.italic {
          font-style: italic;
          color: var(--text-light);
          border-left: 2px solid var(--accent-purple);
          padding-left: 12px;
        }

        .prep-diagram {
          background-color: rgba(0, 0, 0, 0.2);
          border: 1px solid rgba(245, 243, 239, 0.05);
          padding: 12px;
          border-radius: 6px;
          overflow-x: auto;
        }

        .prep-diagram code {
          font-family: var(--font-mono);
          font-size: 11px;
          color: #a0afee;
          line-height: 1.4;
          white-space: pre;
        }

        @media (max-width: 900px) {
          .pipeline-container {
            grid-template-columns: 1fr;
            gap: 40px;
          }
          
          .pipeline-rail {
            flex-direction: row;
            justify-content: space-between;
            overflow-x: auto;
            padding-left: 0;
            padding-bottom: 12px;
            border-bottom: 1px solid rgba(245, 243, 239, 0.1);
          }
          
          .rail-line {
            display: none;
          }

          .rail-node {
            flex-direction: column;
            align-items: center;
            text-align: center;
            width: auto;
          }
        }
        
        @media (max-width: 600px) {
          .terminal-body {
            padding: 20px;
          }
          .job-role {
            font-size: 20px;
          }
        }
      `})]})}function l3(){const[e,t]=j.useState(!1),[n,r]=j.useState(!1),[i,a]=j.useState(!1),[o,l]=j.useState(!1),[c,d]=j.useState(0),[u,p]=j.useState(1500),[f,h]=j.useState(["System initialization successful.","Gateway routing listening on port 5000.","Awaiting traffic events..."]);j.useEffect(()=>{const z=setInterval(()=>{d(W=>(W+4)%360)},50);return()=>clearInterval(z)},[]),j.useEffect(()=>{const z=setInterval(()=>{const W=new Date().toTimeString().split(" ")[0];let ie="";e&&Math.random()>.4?ie="[CACHE HIT] Intercepted SELECT from Redis key cache_api_user_session":ie="[SQL READ] Queried experiences table - Index scan completed",n&&Math.random()>.7&&(ie="[QUEUE INGEST] Buffered BetTransaction event inside Kafka broker partition 0"),h(le=>[`[${W}] ${ie}`,...le.slice(0,8)])},1500);return()=>clearInterval(z)},[e,n]);const m=()=>{let z=150;return e&&(z=4),i&&(z=Math.max(2,Math.floor(z*.7))),`${z} ms`},y=()=>{let z=88;return e&&(z=12),o&&(z=Math.max(3,Math.floor(z*.4))),`${z}%`},k=()=>n?"100% (Guaranteed)":"Risky (Race Conflicts)",x=()=>{let z=4.2;return i&&(z-=1.8),o&&(z-=1.5),e&&(z-=.6),`${Math.max(.1,parseFloat(z.toFixed(1)))}%`},g=()=>e?i?"94%":"88%":"0%",v=(z,W,ie,le,de)=>{let be=[];for(let M=0;M<=z;M+=4){const B=(M*le+de)*(Math.PI/180),$=W/2+Math.sin(B)*ie;be.push(`${M},${$}`)}return`M ${be.join(" L ")}`};let w=24,N=4;e&&(w=6,N=1.5),i&&(w=Math.max(3,w-2),N=Math.max(1,N-.5));let A=20,C=3.5;e&&(A=4,C=1),o&&(A=Math.max(2,A-1),C=Math.max(.8,C-.3));const E=v(260,60,w,N,c),D=v(260,60,A,C,c+45),P=z=>{z==="redis"?t(!e):z==="kafka"?r(!n):z==="lb"?a(!i):z==="index"&&l(!o),window.dispatchEvent(new CustomEvent("gain-xp",{detail:{amount:15,action:"Adjusted system design architecture config.",incrementKey:"tweakSystem"}}))};return s.jsxs("section",{id:"system-sandbox",className:"system-sandbox-section dark-section",children:[s.jsx("div",{className:"system-grid-overlay"}),s.jsxs("div",{className:"container",children:[s.jsx("span",{className:"section-tag",style:{color:"var(--accent-lavender)"},children:"Architecture Simulator"}),s.jsx("h2",{className:"section-title light",children:"Interactive System Design Sandbox"}),s.jsx("p",{className:"section-subtitle light",children:"Toggle Redis Caching, Kafka Event Streaming, Load Balancers, and Database Indexes to see how production system latency, load, and data integrity shift in real time."}),s.jsxs("div",{className:"sandbox-split-layout",children:[s.jsxs("div",{className:"sandbox-controls-panel",children:[s.jsx("h3",{className:"panel-title",children:"Tuning Console"}),s.jsx("div",{className:"toggle-group",children:s.jsxs("div",{className:"toggle-item-grid",children:[s.jsxs("div",{className:"toggle-sub-card",children:[s.jsxs("div",{className:"toggle-header-row",children:[s.jsx("span",{className:"toggle-name",children:"⚡ Redis Cache Node"}),s.jsxs("label",{className:"switch",children:[s.jsx("input",{type:"checkbox",checked:e,onChange:()=>P("redis")}),s.jsx("span",{className:"slider round"})]})]}),s.jsx("p",{className:"toggle-explanation",children:"Intercepts repetitive judicial APIs and banking database lookups in key-value memory."})]}),s.jsxs("div",{className:"toggle-sub-card",children:[s.jsxs("div",{className:"toggle-header-row",children:[s.jsx("span",{className:"toggle-name",children:"⚙️ Apache Kafka Broker"}),s.jsxs("label",{className:"switch",children:[s.jsx("input",{type:"checkbox",checked:n,onChange:()=>P("kafka")}),s.jsx("span",{className:"slider round"})]})]}),s.jsx("p",{className:"toggle-explanation",children:"Decouples game betting write operations and queues incoming transactions asynchronously."})]}),s.jsxs("div",{className:"toggle-sub-card",children:[s.jsxs("div",{className:"toggle-header-row",children:[s.jsx("span",{className:"toggle-name",children:"⚖️ Nginx Load Balancer"}),s.jsxs("label",{className:"switch",children:[s.jsx("input",{type:"checkbox",checked:i,onChange:()=>P("lb")}),s.jsx("span",{className:"slider round"})]})]}),s.jsx("p",{className:"toggle-explanation",children:"Distributes API request rates evenly across multiple server processes to prevent bottleneck load spikes."})]}),s.jsxs("div",{className:"toggle-sub-card",children:[s.jsxs("div",{className:"toggle-header-row",children:[s.jsx("span",{className:"toggle-name",children:"🗂️ MySQL DB Indexing"}),s.jsxs("label",{className:"switch",children:[s.jsx("input",{type:"checkbox",checked:o,onChange:()=>P("index")}),s.jsx("span",{className:"slider round"})]})]}),s.jsx("p",{className:"toggle-explanation",children:"Creates B-Tree database indexes, resolving full-table scans to quick lookup seeks."})]})]})}),s.jsxs("div",{className:"metrics-card",children:[s.jsxs("h4",{className:"metrics-title",children:[s.jsx(Cy,{size:14}),s.jsx("span",{children:"Datadog Live Telemetry Monitor"})]}),s.jsxs("div",{className:"telemetry-grid",children:[s.jsxs("div",{className:"telemetry-item",children:[s.jsx("span",{className:"telemetry-label",children:"API LATENCY"}),s.jsx("span",{className:`telemetry-value ${e?"success":"warn"}`,children:m()})]}),s.jsxs("div",{className:"telemetry-item",children:[s.jsx("span",{className:"telemetry-label",children:"DATABASE LOAD"}),s.jsx("span",{className:`telemetry-value ${e?"success":"warn"}`,children:y()})]}),s.jsxs("div",{className:"telemetry-item",children:[s.jsx("span",{className:"telemetry-label",children:"TRANSACTION INTEGRITY"}),s.jsx("span",{className:`telemetry-value ${n?"success":"danger"}`,children:k()})]}),s.jsxs("div",{className:"telemetry-item",children:[s.jsx("span",{className:"telemetry-label",children:"ERROR RATE"}),s.jsx("span",{className:`telemetry-value ${i?"success":"warn"}`,children:x()})]})]}),s.jsxs("div",{className:"gauges-flex",children:[s.jsxs("div",{className:"gauge-item",children:[s.jsx("span",{className:"gauge-label font-mono",children:"REDIS HIT RATIO"}),s.jsx("span",{className:"gauge-val font-mono green",children:g()})]}),s.jsxs("div",{className:"gauge-item",children:[s.jsx("span",{className:"gauge-label font-mono",children:"TRAFFIC VOLUME"}),s.jsxs("span",{className:"gauge-val font-mono",children:[u," Req/s"]})]})]}),s.jsxs("div",{className:"sparklines-container",children:[s.jsxs("div",{className:"sparkline-item",children:[s.jsxs("div",{className:"sparkline-header",children:[s.jsx("span",{children:"CPU LOAD UTILIZATION"}),s.jsx("span",{children:e?"14% UTIL":"82% UTIL"})]}),s.jsx("svg",{className:"sparkline-svg",viewBox:"0 0 260 60",children:s.jsx("path",{className:`sparkline-path cpu ${e?"smooth":"agitated"}`,d:E})})]}),s.jsxs("div",{className:"sparkline-item",children:[s.jsxs("div",{className:"sparkline-header",children:[s.jsx("span",{children:"DB IOPS/THROUGHPUT"}),s.jsx("span",{children:e?"1.2k IOPS":"8.6k IOPS"})]}),s.jsx("svg",{className:"sparkline-svg",viewBox:"0 0 260 60",children:s.jsx("path",{className:`sparkline-path db ${e?"smooth":"agitated"}`,d:D})})]})]})]})]}),s.jsxs("div",{className:"sandbox-viz-panel",children:[s.jsxs("div",{className:"viz-header",children:[s.jsx("span",{className:"viz-title",children:"topology_map // execution_flow"}),s.jsxs("div",{className:"packet-legend",children:[s.jsx("span",{className:"legend-dot red"}),s.jsx("span",{children:"Direct SQL"}),s.jsx("span",{className:"legend-dot green"}),s.jsx("span",{children:"Cached Redis"}),s.jsx("span",{className:"legend-dot yellow"}),s.jsx("span",{children:"Queued Kafka"})]})]}),s.jsx("div",{className:"viz-space",children:s.jsxs("svg",{className:"topo-svg",viewBox:"0 0 420 280",children:[s.jsxs("defs",{children:[s.jsx("path",{id:"path-direct",d:"M 40,140 H 370"}),s.jsx("path",{id:"path-cached",d:"M 40,140 H 140 V 50 H 280 V 140 M 280,50 H 370 V 140"}),s.jsx("path",{id:"path-queued",d:"M 40,140 H 140 V 230 H 280 V 140 M 280,230 H 370 V 140"})]}),s.jsx("path",{className:"flow-line-bg",d:"M 40,140 H 110"}),s.jsx("path",{className:`flow-line-bg ${e?"active":""}`,d:"M 140,110 V 50 H 260"}),s.jsx("path",{className:`flow-line-bg ${n?"active":""}`,d:"M 140,170 V 230 H 260"}),s.jsx("path",{className:`flow-line-bg ${!e&&!n?"active slow":""}`,d:"M 160,140 H 340"}),s.jsx("path",{className:`flow-line-bg ${e?"active":""}`,d:"M 300,50 H 370 V 110"}),s.jsx("path",{className:`flow-line-bg ${n?"active":""}`,d:"M 300,230 H 370 V 170"}),i&&s.jsx("circle",{cx:"90",cy:"140",r:"5",fill:"#a0afee"}),o&&s.jsx("rect",{x:"345",y:"115",width:"8",height:"12",fill:"#10b981"}),!e&&!n&&s.jsx("circle",{r:"4",fill:"#ef4444",className:"packet-glow-red",children:s.jsx("animateMotion",{dur:"2.5s",repeatCount:"indefinite",children:s.jsx("mpath",{href:"#path-direct"})})}),e&&s.jsx("circle",{r:"4",fill:"#10b981",className:"packet-glow-green",children:s.jsx("animateMotion",{dur:"0.8s",repeatCount:"indefinite",children:s.jsx("mpath",{href:"#path-cached"})})}),n&&s.jsx("circle",{r:"4",fill:"#f59e0b",className:"packet-glow-yellow",children:s.jsx("animateMotion",{dur:"1.6s",repeatCount:"indefinite",children:s.jsx("mpath",{href:"#path-queued"})})}),s.jsx("circle",{className:"node client",cx:"40",cy:"140",r:"18"}),s.jsx("text",{className:"node-text",x:"40",y:"144",textAnchor:"middle",children:"UI"}),s.jsx("text",{className:"node-sub",x:"40",y:"175",textAnchor:"middle",children:"Client"}),s.jsx("circle",{className:"node gateway",cx:"140",cy:"140",r:"22"}),s.jsx("text",{className:"node-text font-bold",x:"140",y:"144",textAnchor:"middle",children:"NODE"}),s.jsx("text",{className:"node-sub",x:"140",y:"180",textAnchor:"middle",children:"API Router"}),s.jsx("rect",{className:`node-rect redis ${e?"active":""}`,x:"250",y:"30",width:"60",height:"40",rx:"6"}),s.jsx("text",{className:"node-text-rect",x:"280",y:"54",textAnchor:"middle",children:"REDIS"}),s.jsx("text",{className:"node-sub",x:"280",y:"85",textAnchor:"middle",children:"Cache Layer"}),s.jsx("rect",{className:`node-rect kafka ${n?"active":""}`,x:"250",y:"210",width:"60",height:"40",rx:"6"}),s.jsx("text",{className:"node-text-rect",x:"280",y:"234",textAnchor:"middle",children:"KAFKA"}),s.jsx("text",{className:"node-sub",x:"280",y:"265",textAnchor:"middle",children:"Event Queue"}),s.jsx("circle",{className:"node database",cx:"370",cy:"140",r:"22"}),s.jsx("text",{className:"node-text",x:"370",y:"144",textAnchor:"middle",children:"DB"}),s.jsx("text",{className:"node-sub",x:"370",y:"180",textAnchor:"middle",children:"MySQL"})]})}),s.jsxs("div",{className:"sandbox-console font-mono",children:[s.jsxs("div",{className:"console-header",children:[s.jsx(Il,{size:12}),s.jsx("span",{children:"Live Event Stream Log"})]}),s.jsx("div",{className:"console-lines",children:f.map((z,W)=>s.jsx("div",{className:"console-line",children:z},W))})]})]})]})]}),s.jsx("style",{children:`
        .system-sandbox-section {
          background-color: var(--bg-dark);
          color: var(--text-light);
          position: relative;
          overflow: hidden;
          border-bottom: 1px solid rgba(245, 243, 239, 0.1);
        }

        .system-grid-overlay {
          position: absolute;
          inset: 0;
          background-image: radial-gradient(rgba(160, 175, 238, 0.02) 1px, transparent 1px);
          background-size: 30px 30px;
          z-index: 1;
          pointer-events: none;
        }

        .sandbox-split-layout {
          display: grid;
          grid-template-columns: 0.95fr 1.05fr;
          gap: 48px;
          position: relative;
          z-index: 2;
        }

        .sandbox-controls-panel {
          display: flex;
          flex-direction: column;
          gap: 24px;
        }

        .panel-title {
          font-size: 18px;
          font-weight: 500;
          border-bottom: 1px solid rgba(245, 243, 239, 0.08);
          padding-bottom: 12px;
          color: var(--text-light);
        }

        .toggle-group {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .toggle-item-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 16px;
        }

        .toggle-sub-card {
          background-color: var(--bg-darker);
          border: 1px solid rgba(245, 243, 239, 0.08);
          border-radius: 10px;
          padding: 16px;
          display: flex;
          flex-direction: column;
          gap: 8px;
          min-height: 120px;
        }

        .toggle-header-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .toggle-name {
          font-size: 13px;
          font-weight: 600;
          color: var(--text-light);
        }

        .toggle-explanation {
          font-size: 11px;
          color: var(--text-muted-light);
          line-height: 1.4;
        }

        /* Toggle switch */
        .switch {
          position: relative;
          display: inline-block;
          width: 40px;
          height: 20px;
          flex-shrink: 0;
        }

        .switch input { 
          opacity: 0;
          width: 0;
          height: 0;
        }

        .slider {
          position: absolute;
          cursor: pointer;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: rgba(245, 243, 239, 0.15);
          transition: .4s;
        }

        .slider:before {
          position: absolute;
          content: "";
          height: 14px;
          width: 14px;
          left: 3px;
          bottom: 3px;
          background-color: white;
          transition: .4s;
        }

        input:checked + .slider {
          background-color: var(--accent-purple);
        }

        input:checked + .slider:before {
          transform: translateX(20px);
        }

        .slider.round {
          border-radius: 34px;
        }

        .slider.round:before {
          border-radius: 50%;
        }

        /* Telemetry Panel */
        .metrics-card {
          background-color: var(--bg-darker);
          border: 1px solid rgba(245, 243, 239, 0.08);
          border-radius: 10px;
          padding: 20px;
        }

        .metrics-title {
          font-family: var(--font-mono);
          font-size: 11px;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: var(--accent-lavender);
          display: flex;
          align-items: center;
          gap: 6px;
          margin-bottom: 16px;
        }

        .telemetry-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 16px;
          border-bottom: 1px solid rgba(245, 243, 239, 0.08);
          padding-bottom: 16px;
          margin-bottom: 16px;
        }

        .telemetry-item {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .telemetry-label {
          font-family: var(--font-mono);
          font-size: 9px;
          color: var(--text-muted-light);
          letter-spacing: 0.05em;
        }

        .telemetry-value {
          font-size: 15px;
          font-weight: 600;
          font-family: var(--font-mono);
        }

        .telemetry-value.success { color: #10b981; }
        .telemetry-value.warn { color: #f59e0b; }
        .telemetry-value.danger { color: #ef4444; }

        .gauges-flex {
          display: flex;
          justify-content: space-between;
          background: rgba(0,0,0,0.15);
          padding: 10px 14px;
          border-radius: 6px;
          margin-bottom: 16px;
          border: 1px solid rgba(245,243,239,0.03);
        }

        .gauge-item {
          display: flex;
          flex-direction: column;
          gap: 2px;
        }

        .gauge-label {
          font-size: 8px;
          color: var(--text-muted-light);
        }

        .gauge-val {
          font-size: 13px;
          font-weight: 700;
        }

        .gauge-val.green {
          color: #10b981;
          text-shadow: 0 0 4px rgba(16,185,129,0.2);
        }

        /* Telemetry Sparklines */
        .sparklines-container {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .sparkline-item {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .sparkline-header {
          display: flex;
          justify-content: space-between;
          font-family: var(--font-mono);
          font-size: 8px;
          color: var(--text-muted-light);
          letter-spacing: 0.05em;
        }

        .sparkline-svg {
          width: 100%;
          height: 36px;
          background-color: rgba(0, 0, 0, 0.15);
          border-radius: 4px;
          border: 1px solid rgba(245, 243, 239, 0.04);
        }

        .sparkline-path {
          fill: none;
          stroke-width: 1.5px;
          transition: stroke var(--transition-normal);
        }

        .sparkline-path.cpu {
          stroke: #c3ccf6;
        }

        .sparkline-path.cpu.smooth {
          stroke: #10b981;
        }

        .sparkline-path.db {
          stroke: #818cf8;
        }

        .sparkline-path.db.smooth {
          stroke: #34d399;
        }

        /* SVG Topo visualization */
        .sandbox-viz-panel {
          background-color: var(--bg-darker);
          border: 1px solid rgba(245, 243, 239, 0.08);
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2);
          display: flex;
          flex-direction: column;
        }

        .viz-header {
          background-color: rgba(0, 0, 0, 0.2);
          padding: 10px 16px;
          border-bottom: 1px solid rgba(245, 243, 239, 0.04);
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .viz-title {
          font-family: var(--font-mono);
          font-size: 11px;
          color: var(--text-muted-light);
        }

        .packet-legend {
          display: flex;
          align-items: center;
          gap: 10px;
          font-family: var(--font-mono);
          font-size: 8px;
          color: var(--text-muted-light);
        }

        .legend-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          display: inline-block;
        }

        .legend-dot.red { background-color: #ef4444; }
        .legend-dot.green { background-color: #10b981; }
        .legend-dot.yellow { background-color: #f59e0b; }

        .viz-space {
          padding: 24px;
          display: flex;
          align-items: center;
          justify-content: center;
          background-color: #0b111a;
          border-bottom: 1px solid rgba(245,243,239,0.05);
        }

        .topo-svg {
          width: 100%;
          height: auto;
        }

        /* SVG node types */
        .node {
          fill: #1e293b;
          stroke: rgba(245, 243, 239, 0.15);
          stroke-width: 2px;
        }

        .node.client { fill: #0284c7; stroke: #38bdf8; }
        .node.gateway { fill: var(--bg-darker); stroke: var(--accent-lavender); }
        .node.database { fill: #1e1b4b; stroke: #6366f1; }

        .node-rect {
          fill: #1e293b;
          stroke: rgba(245, 243, 239, 0.15);
          stroke-width: 2px;
          transition: var(--transition-normal);
        }

        .node-rect.redis.active { fill: rgba(16, 185, 129, 0.15); stroke: #10b981; box-shadow: 0 0 15px #10b981; }
        .node-rect.kafka.active { fill: rgba(245, 158, 11, 0.15); stroke: #f59e0b; }

        .node-text {
          fill: var(--text-light);
          font-size: 10px;
          font-weight: 500;
          font-family: var(--font-sans);
        }

        .node-text-rect {
          fill: var(--text-light);
          font-size: 9px;
          font-weight: 600;
          font-family: var(--font-mono);
        }

        .node-sub {
          fill: var(--text-muted-light);
          font-size: 8px;
          font-family: var(--font-sans);
        }

        /* Line flows background connection lines */
        .flow-line-bg {
          fill: none;
          stroke: rgba(245, 243, 239, 0.08);
          stroke-width: 2px;
          transition: stroke var(--transition-normal);
        }

        .flow-line-bg.active {
          stroke: rgba(160, 175, 238, 0.2);
        }

        .flow-line-bg.active.slow {
          stroke: rgba(239, 68, 68, 0.15);
        }

        /* Animated packet glow filters */
        .packet-glow-red {
          filter: drop-shadow(0 0 4px #ef4444);
        }

        .packet-glow-green {
          filter: drop-shadow(0 0 4px #10b981);
        }

        .packet-glow-yellow {
          filter: drop-shadow(0 0 4px #f59e0b);
        }

        /* Console */
        .sandbox-console {
          background-color: #05080e;
          padding: 16px;
          height: 160px;
          overflow: hidden;
          display: flex;
          flex-direction: column;
        }

        .console-header {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 9px;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: rgba(16,185,129,0.7);
          border-bottom: 1px solid rgba(16,185,129,0.15);
          padding-bottom: 6px;
          margin-bottom: 8px;
        }

        .console-lines {
          display: flex;
          flex-direction: column;
          gap: 4px;
          overflow-y: auto;
          flex-grow: 1;
        }

        .console-line {
          font-size: 11px;
          color: #10b981;
          line-height: 1.4;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        @media (max-width: 900px) {
          .sandbox-split-layout {
            grid-template-columns: 1fr;
            gap: 32px;
          }
          .toggle-item-grid {
            grid-template-columns: 1fr;
          }
        }
      `})]})}function c3({projects:e=[]}){const[t,n]=j.useState("All"),[r,i]=j.useState(new Set),a=(u,p)=>{r.has(u)||i(f=>{const h=new Set(f);return h.add(u),window.dispatchEvent(new CustomEvent("gain-xp",{detail:{amount:10,action:`Reviewed deployment specs for: ${p}`,incrementKey:"exploreProjects"}})),h})},o=[{id:1,title:"BastaxCasino",description:"A full-stack casino gaming platform for European markets featuring live betting, real-time transaction tracking, and interactive dashboards. Built with admin and affiliate panels.",tags:"Node.js, React.js, MongoDB, Nginx, PM2, Docker",link:"https://bastaxcasino.com/home",github:null,category:"Full Stack"},{id:2,title:"Decentralized AI & Blockchain Application",description:"A Web3 application integrating AI and Blockchain technologies. Implements Role-Based Access Control (RBAC) inspired by the UMA Protocol with End-to-End testing across User, Admin, and Moderator panels.",tags:"React, Node.js, Solidity, Web3, UMA Protocol, RBAC",link:null,github:"https://github.com",category:"Blockchain & AI"},{id:3,title:"WhatsApp Business API Integration",description:"Core product integration using WhatsApp Business APIs, Meta Business Manager, and Webhooks for real-time customer messaging, event notifications, and automated replies.",tags:"Node.js, Express, Webhooks, Meta APIs, Redis",link:null,github:null,category:"Integrations"},{id:4,title:"Government Judicial Data Pipelines",description:"High-volume data fetching and processing tools for Supreme Court, High Court, and NHAI official portals. Automated ETL pipelines clean, validate, and load records into secure databases.",tags:"Node.js, TypeScript, MySQL, Scripting, Caching",link:null,github:null,category:"Backend Systems"},{id:5,title:"Data Warehousing Inventory Management",description:"A complete data warehousing system built from scratch with custom MySQL tables. Features role-based views for admin, suppliers, and customers with incoming/outgoing ledger transaction tracking.",tags:"React, Express, MySQL, Material UI",link:null,github:"https://github.com",category:"Full Stack"},{id:6,title:"Zapier, Google Calendar & Office 365 Automation",description:"Enterprise workflow automation pipeline connecting Google Calendar API and Microsoft 365 Excel/Word directories with Node.js and Zapier Webhooks for automated task triggering.",tags:"Node.js, Zapier, Webhooks, Google APIs, Microsoft 365",link:null,github:null,category:"Integrations"},{id:7,title:"Food Store E-Commerce Platform",description:"A full-featured food ordering application with shopping cart functionalities, custom payment gateway processing, and role-based restaurant admin management consoles.",tags:"React, Node.js, Express, MongoDB, Payment APIs",link:null,github:"https://github.com",category:"Full Stack"}],l=e.length>0?e:o,c=["All",...new Set(l.map(u=>u.category))],d=t==="All"?l:l.filter(u=>u.category===t);return s.jsxs("section",{id:"projects",className:"projects-section",children:[s.jsxs(N1.div,{className:"container",initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0,amount:.1},transition:{duration:.6},children:[s.jsx("span",{className:"section-tag",children:"Case Studies"}),s.jsx("h2",{className:"section-title",children:"Production Deployments"}),s.jsx("p",{className:"section-subtitle",children:"A collection of enterprise-grade features, blockchain integrations, and high-performance backend pipelines I have engineered."}),s.jsx("div",{className:"filters-container",children:c.map((u,p)=>s.jsx("button",{className:`filter-btn ${t===u?"active":""}`,onClick:()=>n(u),children:u},p))}),s.jsx("div",{className:"card-grid",children:d.map(u=>s.jsxs(il,{className:"card project-card",maxTilt:10,onMouseEnter:()=>a(u.id,u.title),children:[s.jsxs("div",{className:"project-card-header",children:[s.jsx("div",{className:"project-icon-wrapper",children:s.jsx(vk,{size:20,className:"project-icon"})}),s.jsxs("div",{className:"project-actions",children:[u.github&&s.jsx("a",{href:u.github,target:"_blank",rel:"noreferrer",className:"project-action-btn",title:"View Source on GitHub",children:s.jsx(sl,{size:16})}),u.link&&s.jsx("a",{href:u.link,target:"_blank",rel:"noreferrer",className:"project-action-btn",title:"Visit Live Site",children:s.jsx(Ay,{size:16})})]})]}),s.jsx("h3",{className:"project-title",children:u.title}),s.jsx("p",{className:"project-description",dangerouslySetInnerHTML:{__html:Fy.sanitize(u.description)}}),s.jsx("div",{className:"project-tech-tags",children:u.tags.split(",").map((p,f)=>s.jsx("span",{className:"tech-tag",children:p.trim()},f))}),s.jsx("div",{className:"project-category-badge",children:u.category})]},u.id))})]}),s.jsx("style",{children:`
        .projects-section {
          background-color: var(--bg-primary);
          border-bottom: 1px solid var(--border-color);
        }

        .filters-container {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          margin-bottom: 40px;
        }

        .filter-btn {
          background-color: #ffffff;
          border: 1px solid var(--border-color);
          border-radius: 100px;
          padding: 8px 18px;
          font-family: var(--font-sans);
          font-size: 13px;
          font-weight: 500;
          color: var(--text-muted-dark);
          cursor: pointer;
          transition: var(--transition-fast);
        }

        .filter-btn:hover {
          color: var(--text-dark);
          border-color: rgba(17, 28, 45, 0.24);
          background-color: var(--bg-secondary);
        }

        .filter-btn.active {
          background-color: var(--bg-dark);
          border-color: var(--bg-dark);
          color: var(--text-light);
        }

        .project-card {
          min-height: 280px;
          background-color: #ffffff;
          height: 100%;
        }

        .project-card-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 24px;
        }

        .project-icon-wrapper {
          width: 36px;
          height: 36px;
          background-color: rgba(94, 90, 209, 0.06);
          color: var(--accent-purple);
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .project-actions {
          display: flex;
          gap: 8px;
        }

        .project-action-btn {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          border: 1px solid var(--border-color);
          color: var(--text-muted-dark);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: var(--transition-fast);
          background-color: #ffffff;
        }

        .project-action-btn:hover {
          color: var(--accent-purple);
          border-color: rgba(94, 90, 209, 0.3);
          background-color: rgba(94, 90, 209, 0.04);
        }

        .project-title {
          font-size: 20px;
          font-weight: 400;
          letter-spacing: -0.01em;
          color: var(--text-dark);
          margin-bottom: 12px;
        }

        .project-description {
          font-size: 14px;
          line-height: 1.6;
          color: var(--text-muted-dark);
          margin-bottom: 24px;
          flex-grow: 1;
        }

        .project-tech-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
          margin-top: auto;
        }

        .tech-tag {
          font-family: var(--font-mono);
          font-size: 11px;
          font-weight: 500;
          color: var(--accent-purple);
          background-color: rgba(94, 90, 209, 0.06);
          padding: 2px 8px;
          border-radius: 4px;
        }

        .project-category-badge {
          position: absolute;
          bottom: 32px;
          right: 32px;
          font-family: var(--font-mono);
          font-size: 9px;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: rgba(17, 28, 45, 0.3);
          pointer-events: none;
        }
      `})]})}function d3(){const[e,t]=j.useState("SELECT id, role, company, location FROM experiences;"),[n,r]=j.useState(null),[i,a]=j.useState(!1),[o,l]=j.useState(null),[c,d]=j.useState(null),u={experiences:"SELECT id, role, company, location FROM experiences;",projects:"SELECT id, title, category, tags FROM projects WHERE category = 'Full Stack';",achievements:"SELECT id, title, value FROM achievements;"},p=m=>{t(u[m]),h(u[m])},f=m=>{m.preventDefault(),h(e)},h=async m=>{a(!0),l(null),r(null),d(null);const y=performance.now();try{const x=await fetch("https://portfilio-latest-3.onrender.com//api/query",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({query:m})}),g=await x.json(),w=(performance.now()-y).toFixed(2);if(x.ok&&g.success){r(g),window.dispatchEvent(new CustomEvent("gain-xp",{detail:{amount:10,action:"Executed SQL query on backend MERN database schema",incrementKey:"runSqlQuery"}}));const N=g.rows?g.rows.length:0;d({roundTrip:`${w} ms`,executionTime:`${(w*.15).toFixed(2)} ms`,compileTime:`${(.01+Math.random()*.02).toFixed(3)} ms`,rowsScanned:N,bufferHitRate:g.source==="mysql-db"?"92.4% (Pool Active)":"100% (Cache Hit)",indexSearched:"PRIMARY_KEY (Clustered Scan)"})}else throw new Error(g.message||"SQL Execution failed.")}catch(k){l(k.message)}finally{a(!1)}};return s.jsxs("section",{id:"sql-playground",className:"sql-sandbox-section",children:[s.jsxs("div",{className:"container",children:[s.jsx("span",{className:"section-tag",children:"Database Playground"}),s.jsx("h2",{className:"section-title",children:"Interactive MySQL Console"}),s.jsx("p",{className:"section-subtitle",children:"Test my database querying skills! Click a preset template below or type a custom SELECT query to run against the MySQL tables."}),s.jsxs("div",{className:"sandbox-console-layout",children:[s.jsxs("div",{className:"sandbox-presets-panel",children:[s.jsxs("h3",{className:"preset-panel-title",children:[s.jsx(rl,{size:16}),s.jsx("span",{children:"Database Tables"})]}),s.jsxs("div",{className:"preset-buttons",children:[s.jsx("button",{className:"preset-btn",onClick:()=>p("experiences"),children:"📋 SELECT * FROM experiences"}),s.jsx("button",{className:"preset-btn",onClick:()=>p("projects"),children:"📁 SELECT * FROM projects"}),s.jsx("button",{className:"preset-btn",onClick:()=>p("achievements"),children:"🏆 SELECT * FROM achievements"})]}),s.jsxs("div",{className:"sandbox-note",children:[s.jsx("span",{className:"note-title",children:"💡 Developer Sandbox Info:"}),s.jsxs("p",{children:["The console connects directly to the Express backend. Only read-only ",s.jsx("strong",{children:"SELECT"})," statements are allowed for security integrity."]})]})]}),s.jsxs("div",{className:"sandbox-editor-panel",children:[s.jsxs("form",{onSubmit:f,className:"console-form",children:[s.jsxs("div",{className:"console-editor-header",children:[s.jsx(Il,{size:14,className:"console-icon"}),s.jsx("span",{children:"mysql_query_console // active_connection"})]}),s.jsx("textarea",{className:"console-textarea",value:e,onChange:m=>t(m.target.value),placeholder:"Write your SELECT query here...",rows:"4"}),s.jsx("div",{className:"console-actions",children:s.jsx("button",{type:"submit",className:"btn btn-primary run-btn",disabled:i,children:i?"Executing Query...":"Run Query ⚡"})})]}),s.jsxs("div",{className:"sandbox-output-panel",children:[i&&s.jsx("div",{className:"output-status",children:"Processing query against backend schema..."}),o&&s.jsxs("div",{className:"output-banner error",children:[s.jsx(Ak,{size:16}),s.jsx("span",{children:o})]}),n&&s.jsxs("div",{className:"output-success-block",children:[s.jsxs("div",{className:"output-banner success",children:[s.jsx(uk,{size:16}),s.jsxs("span",{children:["Query succeeded. Source: ",n.source==="mysql-db"?"Live MySQL Database":"Memory Mock Fallback Engine"]})]}),c&&s.jsxs("div",{className:"query-telemetry-panel",children:[s.jsxs("div",{className:"telemetry-log-item",children:[s.jsx(fk,{size:12,className:"tel-log-icon"}),s.jsxs("span",{children:["Execution latency: ",s.jsx("strong",{children:c.executionTime})]})]}),s.jsxs("div",{className:"telemetry-log-item",children:[s.jsx(du,{size:12,className:"tel-log-icon"}),s.jsxs("span",{children:["Compile Overhead: ",s.jsx("strong",{children:c.compileTime})]})]}),s.jsxs("div",{className:"telemetry-log-item",children:[s.jsx(Py,{size:12,className:"tel-log-icon"}),s.jsxs("span",{children:["Buffer Hit rate: ",s.jsx("strong",{children:c.bufferHitRate})]})]}),s.jsxs("div",{className:"telemetry-log-item",children:[s.jsx(rl,{size:12,className:"tel-log-icon"}),s.jsxs("span",{children:["Rows scanned: ",s.jsxs("strong",{children:[c.rowsScanned," rows"]})]})]})]}),n.rows&&n.rows.length>0?s.jsx("div",{className:"table-wrapper",children:s.jsxs("table",{className:"result-table",children:[s.jsx("thead",{children:s.jsx("tr",{children:n.columns.map((m,y)=>s.jsx("th",{children:m},y))})}),s.jsx("tbody",{children:n.rows.map((m,y)=>s.jsx("tr",{children:n.columns.map((k,x)=>s.jsx("td",{children:m[k]!==null?String(m[k]):"NULL"},x))},y))})]})}):s.jsx("div",{className:"output-status empty",children:"Empty Set (0 rows returned)"})]}),!i&&!n&&!o&&s.jsx("div",{className:"output-status empty",children:"No query executed. Type a SELECT statement and click run."})]})]})]})]}),s.jsx("style",{children:`
        .sql-sandbox-section {
          background-color: var(--bg-primary);
          border-bottom: 1px solid var(--border-color);
        }

        .sandbox-console-layout {
          display: grid;
          grid-template-columns: 0.6fr 1.4fr;
          gap: 32px;
        }

        .sandbox-presets-panel {
          background-color: #ffffff;
          border: 1px solid var(--border-color);
          border-radius: 12px;
          padding: 24px;
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .preset-panel-title {
          font-size: 15px;
          font-weight: 600;
          color: var(--text-dark);
          display: flex;
          align-items: center;
          gap: 8px;
          border-bottom: 1px solid var(--border-color);
          padding-bottom: 12px;
        }

        .preset-buttons {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .preset-btn {
          text-align: left;
          background-color: var(--bg-primary);
          border: 1px solid var(--border-color);
          border-radius: 6px;
          padding: 10px 14px;
          font-family: var(--font-mono);
          font-size: 11px;
          color: var(--accent-purple);
          cursor: pointer;
          transition: var(--transition-fast);
        }

        .preset-btn:hover {
          border-color: var(--accent-purple);
          background-color: rgba(94, 90, 209, 0.04);
        }

        .sandbox-note {
          margin-top: auto;
          background-color: rgba(160, 175, 238, 0.08);
          border: 1px solid rgba(160, 175, 238, 0.2);
          border-radius: 8px;
          padding: 14px;
        }

        .note-title {
          font-family: var(--font-mono);
          font-size: 11px;
          font-weight: 600;
          color: var(--accent-purple);
          display: block;
          margin-bottom: 4px;
        }

        .sandbox-note p {
          font-size: 11px;
          color: var(--text-muted-dark);
          line-height: 1.4;
        }

        /* Editor Panel */
        .sandbox-editor-panel {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .console-form {
          background-color: var(--bg-darker);
          border-radius: 12px;
          border: 1px solid rgba(245, 243, 239, 0.08);
          overflow: hidden;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
        }

        .console-editor-header {
          background-color: rgba(0, 0, 0, 0.2);
          color: var(--text-muted-light);
          padding: 10px 16px;
          font-family: var(--font-mono);
          font-size: 11px;
          display: flex;
          align-items: center;
          gap: 8px;
          border-bottom: 1px solid rgba(245, 243, 239, 0.04);
        }

        .console-icon {
          color: var(--accent-lavender);
        }

        .console-textarea {
          width: 100%;
          background: transparent;
          border: none;
          color: #a0afee;
          font-family: var(--font-mono);
          font-size: 13px;
          padding: 16px;
          resize: none;
          outline: none;
          line-height: 1.5;
        }

        .console-actions {
          background-color: rgba(0, 0, 0, 0.1);
          padding: 10px 16px;
          display: flex;
          justify-content: flex-end;
          border-top: 1px solid rgba(245, 243, 239, 0.04);
        }

        .run-btn {
          font-size: 12px;
          padding: 8px 16px;
        }

        /* Outputs */
        .sandbox-output-panel {
          background-color: #ffffff;
          border: 1px solid var(--border-color);
          border-radius: 12px;
          padding: 24px;
          min-height: 140px;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .output-status {
          font-family: var(--font-mono);
          font-size: 12px;
          color: var(--text-muted-dark);
          text-align: center;
        }

        .output-status.empty {
          color: rgba(17, 28, 45, 0.4);
        }

        .output-banner {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 10px 14px;
          border-radius: 6px;
          font-size: 12px;
          font-weight: 500;
          margin-bottom: 16px;
        }

        .output-banner.success {
          background-color: rgba(16, 185, 129, 0.06);
          color: #10b981;
          border: 1px solid rgba(16, 185, 129, 0.15);
        }

        .output-banner.error {
          background-color: rgba(239, 68, 68, 0.06);
          color: #ef4444;
          border: 1px solid rgba(239, 68, 68, 0.15);
          font-family: var(--font-mono);
          line-height: 1.4;
        }

        /* Telemetry logs */
        .query-telemetry-panel {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 12px;
          background-color: var(--bg-primary);
          border: 1px solid var(--border-color);
          border-radius: 8px;
          padding: 12px;
          margin-bottom: 16px;
        }

        .telemetry-log-item {
          display: flex;
          align-items: center;
          gap: 6px;
          font-family: var(--font-mono);
          font-size: 9px;
          color: var(--text-muted-dark);
        }

        .tel-log-icon {
          color: var(--accent-purple);
        }

        .telemetry-log-item strong {
          color: var(--text-dark);
          font-weight: 600;
          margin-left: 2px;
        }

        /* Results table */
        .output-success-block {
          animation: fadeIn 0.3s ease;
        }

        .table-wrapper {
          overflow-x: auto;
          border: 1px solid var(--border-color);
          border-radius: 8px;
        }

        .result-table {
          width: 100%;
          border-collapse: collapse;
          font-size: 12px;
          text-align: left;
        }

        .result-table th {
          background-color: var(--bg-secondary);
          color: var(--text-dark);
          font-weight: 600;
          padding: 10px 14px;
          border-bottom: 1px solid var(--border-color);
          font-family: var(--font-sans);
        }

        .result-table td {
          padding: 10px 14px;
          border-bottom: 1px solid var(--border-color);
          color: var(--text-muted-dark);
          font-family: var(--font-mono);
          white-space: pre-wrap;
        }

        .result-table tr:last-child td {
          border-bottom: none;
        }

        @media (max-width: 900px) {
          .sandbox-console-layout {
            grid-template-columns: 1fr;
            gap: 24px;
          }
          .query-telemetry-panel {
            grid-template-columns: repeat(2, 1fr);
          }
        }
      `})]})}const Hg=[{name:"Node.js / Express",level:92,color:"#68d391",years:"3+ yrs"},{name:"React / Next.js",level:88,color:"#63b3ed",years:"3+ yrs"},{name:"MySQL (Schemas & Optimization)",level:90,color:"#f6ad55",years:"3+ yrs"},{name:"Redis (Caching Patterns)",level:85,color:"#fc8181",years:"2+ yrs"},{name:"Apache Kafka (Event Streams)",level:80,color:"#b794f4",years:"2+ yrs"},{name:"MongoDB / Mongoose",level:83,color:"#9ae6b4",years:"2+ yrs"},{name:"TypeScript",level:82,color:"#a0afee",years:"2+ yrs"},{name:"Docker / Nginx / DevOps",level:78,color:"#76e4f7",years:"2+ yrs"}],u3=[{title:"Languages",icon:s.jsx(hk,{size:18}),color:"#63b3ed",items:["JavaScript (ES6+)","TypeScript","SQL","NoSQL","C++"]},{title:"Node.js Ecosystem",icon:s.jsx(Iy,{size:18}),color:"#68d391",items:["Express.js","NestJS","TypeORM","Mongoose","Redis","Kafka","JWT","Socket.IO","Jest"]},{title:"Frontend & UI",icon:s.jsx(Sk,{size:18}),color:"#b794f4",items:["React","Next.js","Angular CLI","RxJS","NgRx","Vite","Webpack"]},{title:"Databases & Cache",icon:s.jsx(rl,{size:18}),color:"#f6ad55",items:["MySQL","MongoDB","Redis","PostgreSQL","DynamoDB"]},{title:"DevOps & Cloud",icon:s.jsx(Dy,{size:18}),color:"#fc8181",items:["Docker","Nginx","PM2","Git","CI/CD","Jenkins","GitHub Actions","SonarQube"]},{title:"Integrations & APIs",icon:s.jsx(bk,{size:18}),color:"#76e4f7",items:["WhatsApp Business API","Zapier","Google Calendar","Microsoft 365","Meta APIs","Swagger / Stoplight"]}];function p3(){const[e,t]=j.useState(!1),[n,r]=j.useState({}),i=j.useRef(null);return j.useEffect(()=>{const a=new IntersectionObserver(([o])=>{o.isIntersecting&&(t(!0),Hg.forEach((l,c)=>{setTimeout(()=>{r(d=>({...d,[l.name]:l.level}))},200+c*120)}),a.disconnect())},{threshold:.2});return i.current&&a.observe(i.current),()=>a.disconnect()},[]),s.jsxs("section",{id:"skills",className:"skills-section dark-section",ref:i,children:[s.jsx("div",{className:"skills-grid-overlay"}),s.jsxs("div",{className:"container",children:[s.jsx("span",{className:"section-tag",style:{color:"var(--accent-lavender)"},children:"Tech Matrix"}),s.jsx("h2",{className:"section-title light",children:"Engineered Capabilities"}),s.jsx("p",{className:"section-subtitle light",children:"A modular overview of programming languages, frameworks, databases, and specialized engineering disciplines."}),s.jsxs("div",{className:"skill-bars-section",children:[s.jsx("h3",{className:"subsection-title font-mono",children:"// PROFICIENCY DEPTH"}),s.jsx("div",{className:"skill-bars-grid",children:Hg.map((a,o)=>s.jsxs("div",{className:`skill-bar-row ${e?"visible":""}`,style:{animationDelay:`${o*.08}s`},children:[s.jsxs("div",{className:"skill-bar-header",children:[s.jsx("span",{className:"skill-bar-name",children:a.name}),s.jsxs("div",{className:"skill-bar-meta",children:[s.jsx("span",{className:"skill-years font-mono",children:a.years}),s.jsxs("span",{className:"skill-level font-mono",style:{color:a.color},children:[n[a.name]||0,"%"]})]})]}),s.jsx("div",{className:"skill-bar-track",children:s.jsx("div",{className:"skill-bar-fill",style:{width:`${n[a.name]||0}%`,background:`linear-gradient(90deg, ${a.color}99, ${a.color})`,boxShadow:`0 0 12px ${a.color}40`,transition:`width 1.2s cubic-bezier(0.34, 1.56, 0.64, 1) ${o*.1}s`},children:s.jsx("span",{className:"skill-bar-shine"})})})]},o))})]}),s.jsx("div",{className:"skills-categories-grid",children:u3.map((a,o)=>s.jsxs("div",{className:`skill-box skill-box-hover ${e?"visible":""}`,style:{"--cat-color":a.color,animationDelay:`${o*.12}s`},children:[s.jsxs("div",{className:"skill-box-header",children:[s.jsx("div",{className:"skill-icon-wrapper",style:{color:a.color,background:a.color+"18"},children:a.icon}),s.jsx("h3",{className:"skill-cat-title",style:{color:"var(--text-light)"},children:a.title})]}),s.jsx("div",{className:"skills-chips",children:a.items.map((l,c)=>s.jsxs("div",{className:"skill-chip skill-chip-glow",style:{"--chip-color":a.color},children:[s.jsx("span",{className:"skill-bullet",style:{background:a.color}}),s.jsx("span",{className:"skill-name",children:l})]},c))})]},o))})]}),s.jsx("style",{children:`
        .skills-section {
          background-color: var(--bg-dark);
          color: var(--text-light);
          position: relative;
          overflow: hidden;
          border-bottom: 1px solid rgba(245,243,239,0.1);
        }

        .skills-grid-overlay {
          position: absolute; inset: 0;
          background-image:
            linear-gradient(rgba(160,175,238,0.02) 1px, transparent 1px),
            linear-gradient(90deg, rgba(160,175,238,0.02) 1px, transparent 1px);
          background-size: 32px 32px;
          z-index: 1; pointer-events: none;
        }

        .container { position: relative; z-index: 2; }

        /* Skill Bars */
        .skill-bars-section {
          margin-bottom: 48px;
        }

        .subsection-title {
          font-size: 11px;
          color: var(--accent-lavender);
          letter-spacing: 0.15em;
          margin-bottom: 24px;
          font-weight: 600;
        }

        .skill-bars-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 20px;
        }

        .skill-bar-row {
          opacity: 0;
          transform: translateX(-20px);
          transition: opacity 0.5s ease, transform 0.5s ease;
        }

        .skill-bar-row.visible {
          opacity: 1;
          transform: translateX(0);
        }

        .skill-bar-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 8px;
        }

        .skill-bar-name {
          font-size: 13px;
          color: var(--text-light);
          font-weight: 500;
        }

        .skill-bar-meta {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .skill-years {
          font-size: 10px;
          color: rgba(245,243,239,0.35);
        }

        .skill-level {
          font-size: 12px;
          font-weight: 700;
          min-width: 34px;
          text-align: right;
        }

        .skill-bar-track {
          height: 8px;
          background: rgba(245,243,239,0.06);
          border-radius: 4px;
          overflow: hidden;
        }

        .skill-bar-fill {
          height: 100%;
          border-radius: 4px;
          position: relative;
          overflow: hidden;
        }

        .skill-bar-shine {
          position: absolute;
          top: 0; left: -100%; right: 0; bottom: 0;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.25), transparent);
          animation: shimmer 2s infinite;
        }
        @keyframes shimmer {
          to { left: 200%; }
        }

        /* Category chips */
        .skills-categories-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          gap: 16px;
        }

        .skill-box {
          background: var(--bg-darker);
          border: 1px solid rgba(245,243,239,0.06);
          border-radius: 12px;
          padding: 22px;
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.5s ease, transform 0.5s ease, border-color 0.3s, box-shadow 0.3s;
        }

        .skill-box.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .skill-box-hover:hover {
          border-color: var(--cat-color, rgba(160,175,238,0.3));
          box-shadow: 0 8px 24px rgba(0,0,0,0.2), 0 0 0 1px var(--cat-color, transparent);
          transform: translateY(-4px) !important;
        }

        .skill-box-header {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 18px;
          border-bottom: 1px solid rgba(245,243,239,0.05);
          padding-bottom: 14px;
        }

        .skill-icon-wrapper {
          width: 32px; height: 32px;
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .skill-cat-title {
          font-size: 15px;
          font-weight: 500;
        }

        .skills-chips {
          display: flex;
          flex-wrap: wrap;
          gap: 7px;
        }

        .skill-chip {
          display: flex;
          align-items: center;
          gap: 7px;
          background: rgba(245,243,239,0.04);
          border: 1px solid rgba(245,243,239,0.06);
          padding: 5px 11px;
          border-radius: 6px;
          transition: all 0.2s;
          cursor: default;
        }

        .skill-chip-glow:hover {
          background: rgba(245,243,239,0.08);
          border-color: var(--chip-color, rgba(160,175,238,0.3));
          box-shadow: 0 0 8px var(--chip-color, transparent);
          transform: translateY(-1px);
        }

        .skill-bullet {
          width: 5px; height: 5px;
          border-radius: 50%;
        }

        .skill-name {
          font-size: 12px;
          color: var(--text-muted-light);
        }

        .skill-chip-glow:hover .skill-name {
          color: var(--text-light);
        }

        @media (max-width: 768px) {
          .skill-bars-grid { grid-template-columns: 1fr; }
        }
      `})]})}function f3(){const[e,t]=j.useState("home"),[n,r]=j.useState({name:"",email:"",phone:"",message:""}),[i,a]=j.useState({submitting:!1,success:null,error:null}),o={interview:{label:"📅 Schedule Interview",text:"Hi Rahul, I am an HR/Recruiter. I reviewed your Snorkel-style portfolio and would love to schedule a 15-minute introductory call to discuss software engineering roles at our company."},techStack:{label:"💬 Technical Chat",text:"Hi Rahul, I wanted to discuss your experience working with Node.js, Redis, and Kafka in banking systems, and check your technical availability."},general:{label:"✉️ General Inquiry",text:"Hi Rahul, I have a quick question about your Data Structures & Algorithms (DSA) YouTube tutorials or portfolio features..."}},l=p=>{r({...n,message:o[p].text})},c=p=>{r({...n,[p.target.name]:p.target.value})},d=async p=>{if(p.preventDefault(),!n.name||!n.email||!n.message){a({submitting:!1,success:null,error:"Please fill out all required fields."});return}a({submitting:!0,success:null,error:null});try{const h=await fetch("https://portfilio-latest-3.onrender.com//api/contact",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)}),m=await h.json();if(h.ok&&m.success)a({submitting:!1,success:m.message||"Thank you! Your message was submitted successfully.",error:null}),r({name:"",email:"",phone:"",message:""});else throw new Error(m.message||"Failed to submit form.")}catch(f){a({submitting:!1,success:null,error:f.message||"Something went wrong. Please check your connection and try again."})}},u={home:"https://maps.google.com/maps?q=Sector%2094%20JLPL%20Mohali&t=&z=14&ie=UTF8&iwloc=&output=embed",sports:"https://maps.google.com/maps?q=Sector%2070%20Sports%20Complex%20Phase%207%20Mohali&t=&z=14&ie=UTF8&iwloc=&output=embed"};return s.jsxs("section",{id:"contact",className:"contact-section",children:[s.jsxs("div",{className:"container",children:[s.jsx("span",{className:"section-tag",children:"Connection Hub"}),s.jsx("h2",{className:"section-title",children:"Get In Touch"}),s.jsx("p",{className:"section-subtitle",children:"Have an interesting project, job opportunity, or simply want to talk tech? Select a recruiter quick-template or shoot a direct message."}),s.jsxs("div",{className:"contact-grid",children:[s.jsxs("div",{className:"contact-info-panel",children:[s.jsxs("div",{children:[s.jsx("h3",{className:"info-title",children:"Rahul Garg"}),s.jsx("p",{className:"info-desc",children:"Mid-Level Software Engineer & Technical Educator. Focused on scalability, databases, and microservices."}),s.jsxs("div",{className:"info-details",children:[s.jsxs("div",{className:"info-item",children:[s.jsx(Ml,{className:"info-icon",size:18}),s.jsxs("div",{className:"info-text",children:[s.jsx("span",{className:"info-label",children:"Email"}),s.jsx("a",{href:"mailto:gargr0109@gmail.com",className:"info-val",children:"gargr0109@gmail.com"})]})]}),s.jsxs("div",{className:"info-item",children:[s.jsx(pa,{className:"info-icon",size:18}),s.jsxs("div",{className:"info-text",children:[s.jsx("span",{className:"info-label",children:"Phone & Call"}),s.jsx("a",{href:"tel:+917807221279",className:"info-val",children:"+91 78072 21279"})]})]}),s.jsxs("div",{className:"info-item",children:[s.jsx($p,{className:"info-icon",size:18}),s.jsxs("div",{className:"info-text",children:[s.jsx("span",{className:"info-label",children:"Address"}),s.jsx("span",{className:"info-val",children:"Chandigarh IT Park, India"})]})]})]})]}),s.jsxs("div",{className:"outreach-map-container",children:[s.jsxs("div",{className:"map-tabs",children:[s.jsx("button",{className:`map-tab-btn ${e==="home"?"active":""}`,onClick:()=>t("home"),children:"🏠 JLPL Sec 94"}),s.jsx("button",{className:`map-tab-btn ${e==="sports"?"active":""}`,onClick:()=>t("sports"),children:"🏸 Phase 7 Court"})]}),s.jsx("div",{className:"embedded-map-card",children:s.jsx("iframe",{title:"Rahul Garg Location Coordinates",src:u[e],width:"100%",height:"160",style:{border:0},allowFullScreen:"",loading:"lazy"})}),s.jsx("div",{className:"outreach-buttons",style:{marginTop:"16px"},children:s.jsxs("a",{href:"https://wa.me/917807221279?text=Hi%20Rahul%2C%20I%20saw%20your%20portfolio%20and%20would%20love%20to%20connect%20with%20you%20regarding%20a%20software%20engineering%20role%20at%20our%20firm!",target:"_blank",rel:"noreferrer",className:"btn-whatsapp",children:[s.jsx(Ry,{size:16}),s.jsx("span",{children:"WhatsApp Recruit Ping"})]})})]})]}),s.jsxs("div",{className:"contact-form-panel",children:[s.jsxs("div",{className:"template-pills-area",children:[s.jsx("span",{className:"template-label",children:"⚡ Select Message Draft Template:"}),s.jsx("div",{className:"template-pills",children:Object.keys(o).map(p=>s.jsx("button",{type:"button",className:"template-pill",onClick:()=>l(p),children:o[p].label},p))})]}),s.jsxs("form",{onSubmit:d,className:"contact-form",children:[s.jsxs("div",{className:"form-row",children:[s.jsxs("div",{className:"form-group",children:[s.jsx("label",{htmlFor:"name",className:"form-label",children:"Full Name *"}),s.jsx("input",{type:"text",id:"name",name:"name",value:n.name,onChange:c,className:"form-input",placeholder:"John Doe",disabled:i.submitting,required:!0})]}),s.jsxs("div",{className:"form-group",children:[s.jsx("label",{htmlFor:"phone",className:"form-label",children:"Phone Number"}),s.jsx("input",{type:"tel",id:"phone",name:"phone",value:n.phone,onChange:c,className:"form-input",placeholder:"+91 99999 99999",disabled:i.submitting})]})]}),s.jsxs("div",{className:"form-group",children:[s.jsx("label",{htmlFor:"email",className:"form-label",children:"Email Address *"}),s.jsx("input",{type:"email",id:"email",name:"email",value:n.email,onChange:c,className:"form-input",placeholder:"john@example.com",disabled:i.submitting,required:!0})]}),s.jsxs("div",{className:"form-group",children:[s.jsx("label",{htmlFor:"message",className:"form-label",children:"Your Message *"}),s.jsx("textarea",{id:"message",name:"message",value:n.message,onChange:c,className:"form-input form-textarea",placeholder:"Tell me about your project detail...",rows:"5",disabled:i.submitting,required:!0})]}),i.success&&s.jsxs("div",{className:"status-banner success",children:[s.jsx(Hp,{size:16}),s.jsx("span",{children:i.success})]}),i.error&&s.jsxs("div",{className:"status-banner error",children:[s.jsx(dk,{size:16}),s.jsx("span",{children:i.error})]}),s.jsx("button",{type:"submit",className:"btn btn-primary form-submit-btn",disabled:i.submitting,children:i.submitting?s.jsx("span",{children:"Sending Message..."}):s.jsxs(s.Fragment,{children:[s.jsx("span",{children:"Submit Query"}),s.jsx(My,{size:16})]})})]})]})]})]}),s.jsx("style",{children:`
        .contact-section {
          background-color: var(--bg-secondary);
          border-bottom: 1px solid var(--border-color);
        }

        .contact-grid {
          display: grid;
          grid-template-columns: 0.9fr 1.1fr;
          gap: 60px;
        }

        .contact-info-panel {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }

        .info-title {
          font-size: 28px;
          font-weight: 400;
          color: var(--text-dark);
          margin-bottom: 12px;
        }

        .info-desc {
          font-size: 15px;
          line-height: 1.6;
          color: var(--text-muted-dark);
          margin-bottom: 40px;
        }

        .info-details {
          display: flex;
          flex-direction: column;
          gap: 24px;
          margin-bottom: 40px;
        }

        .info-item {
          display: flex;
          gap: 16px;
          align-items: flex-start;
        }

        .info-icon {
          color: var(--accent-purple);
          margin-top: 4px;
        }

        .info-text {
          display: flex;
          flex-direction: column;
        }

        .info-label {
          font-family: var(--font-mono);
          font-size: 11px;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: var(--text-muted-dark);
        }

        .info-val {
          font-size: 15px;
          font-weight: 500;
          color: var(--text-dark);
          text-decoration: none;
          margin-top: 2px;
        }

        .info-val[href]:hover {
          color: var(--accent-purple);
          text-decoration: underline;
        }

        /* Map and Outreach container */
        .outreach-map-container {
          background-color: #ffffff;
          border: 1px solid var(--border-color);
          border-radius: 12px;
          padding: 20px;
          box-shadow: 0 4px 12px rgba(17, 28, 45, 0.02);
        }

        .map-tabs {
          display: flex;
          gap: 8px;
          margin-bottom: 12px;
        }

        .map-tab-btn {
          background-color: var(--bg-primary);
          border: 1px solid var(--border-color);
          border-radius: 4px;
          padding: 6px 12px;
          font-size: 11px;
          font-weight: 600;
          color: var(--text-muted-dark);
          cursor: pointer;
          transition: var(--transition-fast);
        }

        .map-tab-btn:hover {
          color: var(--text-dark);
        }

        .map-tab-btn.active {
          background-color: var(--bg-dark);
          color: var(--text-light);
          border-color: var(--bg-dark);
        }

        .embedded-map-card {
          border: 1px solid var(--border-color);
          border-radius: 6px;
          overflow: hidden;
        }

        .outreach-buttons {
          display: flex;
          flex-direction: column;
        }

        .btn-whatsapp {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          background-color: #25d366;
          color: #ffffff;
          padding: 12px 24px;
          border-radius: 100px;
          font-size: 14px;
          font-weight: 600;
          text-decoration: none;
          transition: var(--transition-normal);
          box-shadow: 0 4px 12px rgba(37, 211, 102, 0.2);
        }

        .btn-whatsapp:hover {
          background-color: #20ba56;
          transform: translateY(-2px);
          box-shadow: 0 6px 16px rgba(37, 211, 102, 0.4);
        }

        /* Form styling */
        .contact-form-panel {
          background-color: #ffffff;
          border: 1px solid var(--border-color);
          border-radius: 12px;
          padding: 40px;
          box-shadow: 0 10px 30px -10px rgba(17, 28, 45, 0.03);
        }

        .template-pills-area {
          margin-bottom: 24px;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .template-label {
          font-family: var(--font-mono);
          font-size: 11px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          color: var(--text-muted-dark);
        }

        .template-pills {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }

        .template-pill {
          background-color: var(--bg-primary);
          border: 1px solid var(--border-color);
          border-radius: 6px;
          padding: 6px 12px;
          font-size: 12px;
          color: var(--text-dark);
          cursor: pointer;
          transition: var(--transition-fast);
        }

        .template-pill:hover {
          border-color: var(--accent-purple);
          background-color: rgba(94, 90, 209, 0.06);
          color: var(--accent-purple);
        }

        .contact-form {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .form-row {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 20px;
        }

        .form-group {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .form-label {
          font-size: 13px;
          font-weight: 500;
          color: var(--text-dark);
        }

        .form-input {
          font-family: var(--font-sans);
          font-size: 14px;
          padding: 12px 16px;
          border: 1px solid rgba(17, 28, 45, 0.12);
          border-radius: 6px;
          outline: none;
          transition: var(--transition-fast);
          width: 100%;
        }

        .form-input:focus {
          border-color: var(--accent-purple);
          box-shadow: 0 0 0 3px rgba(94, 90, 209, 0.12);
        }

        .form-textarea {
          resize: vertical;
        }

        .form-submit-btn {
          width: 100%;
          margin-top: 10px;
        }

        .status-banner {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 12px 16px;
          border-radius: 6px;
          font-size: 13px;
          font-weight: 500;
        }

        .status-banner.success {
          background-color: rgba(16, 185, 129, 0.08);
          color: #10b981;
          border: 1px solid rgba(16, 185, 129, 0.2);
        }

        .status-banner.error {
          background-color: rgba(239, 68, 68, 0.08);
          color: #ef4444;
          border: 1px solid rgba(239, 68, 68, 0.2);
        }

        @media (max-width: 900px) {
          .contact-grid {
            grid-template-columns: 1fr;
            gap: 40px;
          }
          .contact-form-panel {
            padding: 30px 20px;
          }
        }

        @media (max-width: 600px) {
          .form-row {
            grid-template-columns: 1fr;
          }
        }
      `})]})}function h3(){const[e,t]=j.useState(!1),[n,r]=j.useState([{id:1,sender:"bot",text:"Hello! I am Rahul's Virtual Agent. 🤖 I can answer your questions about his experiences, core stacks, competitive coding, or education. Feel free to click a prompt below or type your inquiry!"}]),[i,a]=j.useState(""),[o,l]=j.useState(!1),c=j.useRef(null),d=["Tell me about BastaxCasino","What is your GFG / LeetCode standing?","Do you have Kafka & Redis experience?","How can I contact you?"],u=m=>{f(m)},p=m=>{m.preventDefault(),i.trim()&&(f(i),a(""))},f=m=>{const y={id:n.length+1,sender:"user",text:m};r(k=>[...k,y]),l(!0),window.dispatchEvent(new CustomEvent("gain-xp",{detail:{amount:10,action:`Interacted with AI Recruiter bot: "${m.substring(0,24)}..."`,incrementKey:"chatBot"}})),setTimeout(()=>{const k=h(m);r(x=>[...x,{id:x.length+1,sender:"bot",text:k}]),l(!1)},1e3)},h=m=>{const y=m.toLowerCase();return y.includes("casino")||y.includes("basta")?"For Basta Tech, Rahul led a team of 4 developers to build BastaxCasino, a full-stack European casino application. He architected the database, built 100+ API endpoints using Node.js, and reduced DevOps deployment times by 50% using Docker & Nginx Reverse Proxy.":y.includes("gfg")||y.includes("geeksforgeeks")||y.includes("leetcode")||y.includes("problems")||y.includes("solved")?"Rahul has a solid competitive programming record! He holds Rank 1st at CGC Landran college, has solved over 1500+ algorithmic problems across GFG & LeetCode, secured a Max LeetCode rating of 1753 (3 Star), and placed 613th in the ICPC Amritapuri Regionals.":y.includes("kafka")||y.includes("redis")||y.includes("microservice")||y.includes("banking")?"Yes! Rahul has developed banking microservices incorporating Kafka message brokers and Redis caching layers. He also optimized backend databases at Jupitice Justice using key-value storage nodes, reducing query latency.":y.includes("whatsapp")||y.includes("meta")||y.includes("webhook")?"Rahul integrated WhatsApp Business APIs using Meta Business Manager and Webhooks. This enabled automated real-time messaging, customer notification systems, and transaction receipts within Jupitice's core workflow.":y.includes("contact")||y.includes("phone")||y.includes("email")||y.includes("hire")||y.includes("reach")?"You can reach Rahul directly via Email at gargr0109@gmail.com or call/WhatsApp him at +91 78072 21279. You can also fill out the contact form below and he will get back to you within 24 hours.":y.includes("justice")||y.includes("jupitice")||y.includes("court")||y.includes("judicial")?"At Jupitice Justice Technologies, Rahul works as a Mid Level Engineer on official Supreme Court and High Court platforms, fetching real-time legal data, building Offline KYC services, and working on the Lok Adalat government suite.":y.includes("education")||y.includes("college")||y.includes("b.tech")||y.includes("cgpa")?"Rahul graduated with a B.Tech in Computer Science from Chandigarh Group of Colleges (CGC) Landran, Mohali in March 2023 with a CGPA of 7.5.":y.includes("hello")||y.includes("hi")||y.includes("hey")?"Hello! How can I assist you with checking Rahul's credentials today? You can ask about his tech stack, project roles, or hiring details.":"Thanks for asking! Rahul specializes in Node.js, React, Express, MySQL, MongoDB, and system scaling. Is there a specific project (like Jupitice or BastaxCasino) or technical skill you'd like to inspect?"};return j.useEffect(()=>{var m;(m=c.current)==null||m.scrollIntoView({behavior:"smooth"})},[n,o]),s.jsxs("div",{className:"chatbot-wrapper",children:[s.jsxs("button",{className:`chatbot-trigger ${e?"active":""}`,onClick:()=>t(!e),"aria-label":"Open virtual recruiter assistant",children:[e?s.jsx(fa,{size:20}):s.jsx(Ry,{size:20}),!e&&s.jsx("span",{className:"trigger-pulse"})]}),e&&s.jsxs("div",{className:"chat-window",children:[s.jsxs("div",{className:"chat-header",children:[s.jsxs("div",{className:"chat-bot-identity",children:[s.jsx("div",{className:"chat-avatar",children:s.jsx(lk,{size:16})}),s.jsxs("div",{className:"chat-identity-text",children:[s.jsx("span",{className:"chat-name",children:"Bubbles Bot"}),s.jsx("span",{className:"chat-status",children:"Interview Prep Engine"})]})]}),s.jsx("button",{className:"chat-close-btn",onClick:()=>t(!1),children:s.jsx(fa,{size:16})})]}),s.jsxs("div",{className:"chat-messages",children:[n.map(m=>s.jsx("div",{className:`chat-bubble-container ${m.sender}`,children:s.jsx("div",{className:`chat-bubble ${m.sender}`,children:m.text})},m.id)),o&&s.jsx("div",{className:"chat-bubble-container bot",children:s.jsxs("div",{className:"chat-bubble bot typing",children:[s.jsx("span",{className:"dot"}),s.jsx("span",{className:"dot"}),s.jsx("span",{className:"dot"})]})}),s.jsx("div",{ref:c})]}),s.jsx("div",{className:"chat-prompts",children:d.map((m,y)=>s.jsx("button",{className:"prompt-chip",onClick:()=>u(m),children:m},y))}),s.jsxs("form",{onSubmit:p,className:"chat-input-area",children:[s.jsx("input",{type:"text",className:"chat-input",value:i,onChange:m=>a(m.target.value),placeholder:"Ask about Node, projects, or GFG...",disabled:o}),s.jsx("button",{type:"submit",className:"chat-send-btn",disabled:o||!i.trim(),children:s.jsx(My,{size:14})})]})]}),s.jsx("style",{children:`
        .chatbot-wrapper {
          position: fixed;
          bottom: 24px;
          right: 24px;
          z-index: 2000;
          font-family: var(--font-sans);
        }

        .chatbot-trigger {
          width: 56px;
          height: 56px;
          border-radius: 50%;
          background-color: var(--accent-purple);
          border: none;
          color: var(--text-light);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          box-shadow: 0 8px 24px rgba(94, 90, 209, 0.3);
          transition: var(--transition-normal);
          position: relative;
        }

        .chatbot-trigger:hover {
          transform: scale(1.05);
          background-color: #4c48b8;
          box-shadow: 0 8px 24px rgba(94, 90, 209, 0.5);
        }

        .chatbot-trigger.active {
          background-color: var(--bg-dark);
          box-shadow: 0 8px 24px rgba(17, 28, 45, 0.2);
        }

        .trigger-pulse {
          position: absolute;
          top: 0;
          right: 0;
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background-color: #10b981;
          border: 2px solid #ffffff;
          box-shadow: 0 0 8px #10b981;
          animation: pulseGlow 2s infinite;
        }

        /* Chat window panel */
        .chat-window {
          position: absolute;
          bottom: 72px;
          right: 0;
          width: 360px;
          height: 480px;
          background-color: #ffffff;
          border: 1px solid var(--border-color);
          border-radius: 16px;
          box-shadow: 0 12px 32px rgba(17, 28, 45, 0.15);
          display: flex;
          flex-direction: column;
          overflow: hidden;
          animation: fadeIn 0.3s ease;
        }

        .chat-header {
          background-color: var(--bg-darker);
          color: var(--text-light);
          padding: 16px 20px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          border-bottom: 1px solid rgba(245, 243, 239, 0.08);
        }

        .chat-bot-identity {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .chat-avatar {
          width: 28px;
          height: 28px;
          border-radius: 50%;
          background-color: rgba(160, 175, 238, 0.15);
          color: var(--accent-lavender);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .chat-identity-text {
          display: flex;
          flex-direction: column;
        }

        .chat-name {
          font-size: 13px;
          font-weight: 600;
          line-height: 1.2;
        }

        .chat-status {
          font-family: var(--font-mono);
          font-size: 9px;
          color: var(--accent-lavender);
          letter-spacing: 0.05em;
        }

        .chat-close-btn {
          background: none;
          border: none;
          color: rgba(245, 243, 239, 0.65);
          cursor: pointer;
          transition: var(--transition-fast);
        }

        .chat-close-btn:hover {
          color: var(--text-light);
        }

        /* Messages */
        .chat-messages {
          flex-grow: 1;
          padding: 20px;
          overflow-y: auto;
          display: flex;
          flex-direction: column;
          gap: 12px;
          background-color: var(--bg-primary);
        }

        .chat-bubble-container {
          display: flex;
          width: 100%;
        }

        .chat-bubble-container.bot {
          justify-content: flex-start;
        }

        .chat-bubble-container.user {
          justify-content: flex-end;
        }

        .chat-bubble {
          max-width: 80%;
          padding: 10px 14px;
          border-radius: 12px;
          font-size: 13px;
          line-height: 1.4;
        }

        .chat-bubble.bot {
          background-color: #ffffff;
          border: 1px solid var(--border-color);
          color: var(--text-dark);
          border-top-left-radius: 2px;
        }

        .chat-bubble.user {
          background-color: var(--accent-purple);
          color: var(--text-light);
          border-top-right-radius: 2px;
        }

        /* Typing micro-animation */
        .chat-bubble.typing {
          display: flex;
          align-items: center;
          gap: 4px;
          padding: 12px 16px;
        }

        .chat-bubble.typing .dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background-color: var(--text-muted-dark);
          animation: bounce 1.4s infinite ease-in-out both;
        }

        .chat-bubble.typing .dot:nth-child(1) { animation-delay: -0.32s; }
        .chat-bubble.typing .dot:nth-child(2) { animation-delay: -0.16s; }

        @keyframes bounce {
          0%, 80%, 100% { transform: scale(0); }
          40% { transform: scale(1.0); }
        }

        /* Prompts */
        .chat-prompts {
          padding: 12px 16px;
          display: flex;
          overflow-x: auto;
          gap: 8px;
          background-color: var(--bg-primary);
          border-top: 1px solid rgba(17, 28, 45, 0.04);
          scrollbar-width: none; /* Firefox */
        }

        .chat-prompts::-webkit-scrollbar {
          display: none; /* Safari/Chrome */
        }

        .prompt-chip {
          background-color: #ffffff;
          border: 1px solid var(--border-color);
          border-radius: 100px;
          padding: 6px 12px;
          font-size: 11px;
          color: var(--text-muted-dark);
          white-space: nowrap;
          cursor: pointer;
          transition: var(--transition-fast);
        }

        .prompt-chip:hover {
          border-color: var(--accent-purple);
          color: var(--accent-purple);
          background-color: rgba(94, 90, 209, 0.04);
        }

        /* Input area */
        .chat-input-area {
          padding: 12px 16px;
          display: flex;
          align-items: center;
          gap: 10px;
          background-color: #ffffff;
          border-top: 1px solid var(--border-color);
        }

        .chat-input {
          flex-grow: 1;
          font-family: var(--font-sans);
          font-size: 13px;
          border: 1px solid rgba(17, 28, 45, 0.12);
          border-radius: 6px;
          padding: 8px 12px;
          outline: none;
          transition: var(--transition-fast);
        }

        .chat-input:focus {
          border-color: var(--accent-purple);
        }

        .chat-send-btn {
          width: 32px;
          height: 32px;
          border-radius: 6px;
          background-color: var(--accent-purple);
          color: var(--text-light);
          border: none;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: var(--transition-fast);
        }

        .chat-send-btn:hover:not(:disabled) {
          background-color: #4c48b8;
        }

        .chat-send-btn:disabled {
          background-color: rgba(17, 28, 45, 0.08);
          color: rgba(17, 28, 45, 0.3);
          cursor: not-allowed;
        }

        @media (max-width: 480px) {
          .chat-window {
            width: calc(100vw - 32px);
            right: -8px;
          }
        }
      `})]})}function m3(){const[e,t]=j.useState(1),[n,r]=j.useState(0),[i,a]=j.useState([]),[o,l]=j.useState(!1),[c,d]=j.useState({exploreProjects:{label:"Explore 3 production project cards",target:3,current:0,completed:!1,xpReward:20},runSqlQuery:{label:"Execute a SELECT statement in the SQL Sandbox",target:1,current:0,completed:!1,xpReward:25},tweakSystem:{label:"Toggle Redis and Kafka in the design playground",target:2,current:0,completed:!1,xpReward:25},chatBot:{label:"Ask Bubbles Bot about a technical project",target:1,current:0,completed:!1,xpReward:15},playTrack:{label:"Listen to Rahul's professional vocal performance link",target:1,current:0,completed:!1,xpReward:30},matrixCommand:{label:"Enter 3 shell commands in the Matrix terminal",target:3,current:0,completed:!1,xpReward:25},secretEasterEgg:{label:"Discover the terminal Easter Egg (sudo hire rahul)",target:1,current:0,completed:!1,xpReward:50}}),u=100,p={1:"Bronze Recruiter 🥉",2:"Silver Sourcing Agent 🥈",3:"Gold Talent Partner 🥇",4:"Platinum HR Director 🏆",5:"Elite Engineering Executive 👑"};j.useEffect(()=>{const k=localStorage.getItem("rahul_portfolio_level"),x=localStorage.getItem("rahul_portfolio_xp"),g=localStorage.getItem("rahul_portfolio_quests");if(k&&t(parseInt(k,10)),x&&r(parseInt(x,10)),g)try{d(JSON.parse(g))}catch{console.error("Failed to parse quests from localStorage")}},[]);const f=(k,x,g)=>{localStorage.setItem("rahul_portfolio_level",k.toString()),localStorage.setItem("rahul_portfolio_xp",x.toString()),localStorage.setItem("rahul_portfolio_quests",JSON.stringify(g))};j.useEffect(()=>{const k=x=>{const{amount:g,action:v,incrementKey:w}=x.detail;d(N=>{let A={...N},C=g;if(w&&A[w]){const E=A[w];if(E.completed)return N;{const D=Math.min(E.current+1,E.target),P=D===E.target;A[w]={...E,current:D,completed:P},P&&(C+=E.xpReward,h(`Quest Completed! ${E.label} (+${E.xpReward} XP)`))}}return h(`+${g} XP: ${v}`),r(E=>{let D=E+C,P=e;for(;D>=u&&P<5;)D-=u,P+=1,h(`🎉 LEVEL UP! You are now a ${p[P]}!`,!0),window.dispatchEvent(new CustomEvent("level-up",{detail:{level:P}}));return P===5&&(D=Math.min(D,u)),f(P,D,A),t(P),D}),A})};return window.addEventListener("gain-xp",k),()=>window.removeEventListener("gain-xp",k)},[e]);const h=(k,x=!1)=>{const g=Date.now()+Math.random();a(v=>[...v,{id:g,message:k,isLevelUp:x}]),setTimeout(()=>{a(v=>v.filter(w=>w.id!==g))},4500)},m=()=>{const k={exploreProjects:{label:"Explore 3 production project cards",target:3,current:0,completed:!1,xpReward:20},runSqlQuery:{label:"Execute a SELECT statement in the SQL Sandbox",target:1,current:0,completed:!1,xpReward:25},tweakSystem:{label:"Toggle Redis and Kafka in the design playground",target:2,current:0,completed:!1,xpReward:25},chatBot:{label:"Ask Bubbles Bot about a technical project",target:1,current:0,completed:!1,xpReward:15},playTrack:{label:"Listen to Rahul's professional vocal performance link",target:1,current:0,completed:!1,xpReward:30},matrixCommand:{label:"Enter 3 shell commands in the Matrix terminal",target:3,current:0,completed:!1,xpReward:25},secretEasterEgg:{label:"Discover the terminal Easter Egg (sudo hire rahul)",target:1,current:0,completed:!1,xpReward:50}};t(1),r(0),d(k),f(1,0,k),h("Progress reset successfully!")},y=()=>e===5?100:n/u*100;return s.jsxs(s.Fragment,{children:[s.jsxs("div",{className:"quest-tracker-hud",onClick:()=>l(!o),children:[s.jsxs("div",{className:"hud-badge",children:[s.jsx(Ek,{size:16,className:"star-icon animating"}),s.jsxs("span",{className:"hud-level-text",children:["Lvl ",e]})]}),s.jsxs("div",{className:"hud-progress-container",children:[s.jsx("span",{className:"hud-title",children:p[e]}),s.jsx("div",{className:"hud-bar-bg",children:s.jsx("div",{className:"hud-bar-fill",style:{width:`${y()}%`}})})]}),s.jsx("div",{className:"hud-points",children:e===5?"MAX":`${n}/${u} XP`})]}),o&&s.jsx("div",{className:"quest-panel-overlay",children:s.jsxs("div",{className:"quest-panel-card",children:[s.jsxs("div",{className:"quest-panel-header",children:[s.jsxs("div",{className:"quest-panel-title-wrapper",children:[s.jsx(hu,{size:20,className:"trophy-icon"}),s.jsx("h3",{children:"Recruiter Quest Dashboard"})]}),s.jsx("button",{className:"close-btn",onClick:()=>l(!1),children:s.jsx(fa,{size:18})})]}),s.jsxs("div",{className:"quest-panel-body",children:[s.jsxs("div",{className:"recruiter-status-card",children:[s.jsx(Ly,{size:36,className:"shield-icon"}),s.jsxs("div",{className:"status-meta",children:[s.jsx("span",{className:"meta-label",children:"Current HR Ranking"}),s.jsx("h4",{className:"meta-title",children:p[e]}),s.jsx("p",{className:"meta-desc",children:e===5?"🔓 Secret Vault Unlocked! You have full access to Rahul's prime commercial repositories.":`Gain ${u-n} more XP to level up. Interact with sandbox panels to gain score.`})]})]}),s.jsxs("div",{className:"quests-section-title",children:["🛡️ Active Missions (",Object.values(c).filter(k=>k.completed).length," / 7 Completed)"]}),s.jsx("div",{className:"quests-list",children:Object.entries(c).map(([k,x])=>s.jsxs("div",{className:`quest-item-card ${x.completed?"completed":""}`,children:[s.jsx("div",{className:"quest-checkbox-wrapper",children:x.completed?s.jsx(Hp,{size:18,className:"check-icon"}):s.jsx("div",{className:"empty-checkbox"})}),s.jsxs("div",{className:"quest-content",children:[s.jsx("span",{className:"quest-label-text",children:x.label}),s.jsxs("div",{className:"quest-sub-line",children:[s.jsxs("span",{className:"quest-tracker-numbers",children:["Progress: ",x.current,"/",x.target]}),s.jsxs("span",{className:"quest-reward",children:["+",x.xpReward," XP"]})]})]})]},k))})]}),s.jsxs("div",{className:"quest-panel-footer",children:[s.jsx("button",{onClick:m,className:"reset-btn",children:"Reset Progress"}),s.jsx("div",{className:"footer-credits font-mono",children:"Rahul Garg Telemetry Service v1.2"})]})]})}),s.jsx("div",{className:"xp-toasts-container",children:i.map(k=>s.jsxs("div",{className:`xp-toast ${k.isLevelUp?"level-up":""}`,children:[k.isLevelUp?s.jsx(Vr,{size:20,className:"toast-icon animate-spin"}):s.jsx(yk,{size:18,className:"toast-icon"}),s.jsx("span",{className:"toast-message",children:k.message})]},k.id))}),s.jsx("style",{children:`
        .quest-tracker-hud {
          position: fixed;
          top: 80px;
          right: 24px;
          z-index: 999;
          display: flex;
          align-items: center;
          gap: 12px;
          background: rgba(17, 28, 45, 0.85);
          backdrop-filter: blur(12px);
          border: 1px solid rgba(245, 243, 239, 0.12);
          border-radius: 100px;
          padding: 8px 16px;
          color: var(--text-light);
          cursor: pointer;
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.25);
          transition: var(--transition-normal);
          font-family: var(--font-sans);
        }

        .quest-tracker-hud:hover {
          background: var(--bg-darker);
          border-color: var(--accent-lavender);
          transform: translateY(-2px);
        }

        .hud-badge {
          display: flex;
          align-items: center;
          gap: 6px;
          background: rgba(94, 90, 209, 0.25);
          border: 1px solid rgba(94, 90, 209, 0.4);
          padding: 4px 10px;
          border-radius: 100px;
        }

        .star-icon {
          color: #f59e0b;
        }

        .star-icon.animating {
          animation: pulse 1.5s infinite alternate;
        }

        @keyframes pulse {
          0% { transform: scale(0.9); }
          100% { transform: scale(1.15); }
        }

        .hud-level-text {
          font-weight: 700;
          font-size: 11px;
          font-family: var(--font-mono);
        }

        .hud-progress-container {
          display: flex;
          flex-direction: column;
          gap: 4px;
          width: 140px;
        }

        .hud-title {
          font-size: 10px;
          font-weight: 600;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          color: var(--accent-lavender);
        }

        .hud-bar-bg {
          height: 6px;
          background: rgba(245, 243, 239, 0.15);
          border-radius: 3px;
          overflow: hidden;
        }

        .hud-bar-fill {
          height: 100%;
          background: linear-gradient(90deg, var(--accent-purple), var(--accent-lavender));
          border-radius: 3px;
          transition: width var(--transition-slow);
        }

        .hud-points {
          font-family: var(--font-mono);
          font-size: 10px;
          font-weight: 600;
          color: var(--text-light);
        }

        /* Quest details popup */
        .quest-panel-overlay {
          position: fixed;
          inset: 0;
          background: rgba(14, 23, 37, 0.65);
          backdrop-filter: blur(8px);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 10000;
          font-family: var(--font-sans);
          padding: 16px;
        }

        .quest-panel-card {
          background: #ffffff;
          border: 1px solid var(--border-color);
          border-radius: 16px;
          width: 100%;
          max-width: 480px;
          box-shadow: 0 24px 60px rgba(17, 28, 45, 0.2);
          overflow: hidden;
          animation: slideUp 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }

        @keyframes slideUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .quest-panel-header {
          background: var(--bg-darker);
          color: var(--text-light);
          padding: 20px 24px;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .quest-panel-title-wrapper {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .quest-panel-title-wrapper h3 {
          font-size: 16px;
          font-weight: 600;
        }

        .trophy-icon {
          color: #f59e0b;
        }

        .close-btn {
          background: none;
          border: none;
          color: var(--text-muted-light);
          cursor: pointer;
          transition: var(--transition-fast);
        }

        .close-btn:hover {
          color: var(--text-light);
        }

        .quest-panel-body {
          padding: 24px;
          max-height: 400px;
          overflow-y: auto;
          background: var(--bg-primary);
        }

        .recruiter-status-card {
          background: #ffffff;
          border: 1px solid var(--border-color);
          border-radius: 12px;
          padding: 16px;
          display: flex;
          gap: 16px;
          align-items: center;
          margin-bottom: 24px;
        }

        .shield-icon {
          color: var(--accent-purple);
          flex-shrink: 0;
        }

        .status-meta {
          display: flex;
          flex-direction: column;
        }

        .meta-label {
          font-family: var(--font-mono);
          font-size: 9px;
          color: var(--text-muted-dark);
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .meta-title {
          font-size: 15px;
          font-weight: 700;
          color: var(--text-dark);
          margin: 2px 0 4px 0;
        }

        .meta-desc {
          font-size: 11px;
          color: var(--text-muted-dark);
          line-height: 1.4;
        }

        .quests-section-title {
          font-family: var(--font-mono);
          font-size: 11px;
          font-weight: 600;
          color: var(--text-muted-dark);
          text-transform: uppercase;
          margin-bottom: 12px;
        }

        .quests-list {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .quest-item-card {
          background: #ffffff;
          border: 1px solid var(--border-color);
          border-radius: 10px;
          padding: 14px;
          display: flex;
          gap: 12px;
          transition: var(--transition-fast);
        }

        .quest-item-card.completed {
          background: rgba(16, 185, 129, 0.03);
          border-color: rgba(16, 185, 129, 0.2);
        }

        .quest-checkbox-wrapper {
          flex-shrink: 0;
          margin-top: 2px;
        }

        .check-icon {
          color: #10b981;
        }

        .empty-checkbox {
          width: 18px;
          height: 18px;
          border: 2px solid rgba(17, 28, 45, 0.2);
          border-radius: 4px;
        }

        .quest-content {
          display: flex;
          flex-direction: column;
          gap: 4px;
          flex-grow: 1;
        }

        .quest-label-text {
          font-size: 13px;
          font-weight: 500;
          color: var(--text-dark);
        }

        .quest-item-card.completed .quest-label-text {
          color: var(--text-muted-dark);
          text-decoration: line-through;
        }

        .quest-sub-line {
          display: flex;
          justify-content: space-between;
          font-size: 11px;
          color: var(--text-muted-dark);
        }

        .quest-reward {
          font-family: var(--font-mono);
          font-weight: 600;
          color: var(--accent-purple);
        }

        .quest-item-card.completed .quest-reward {
          color: #10b981;
        }

        .quest-panel-footer {
          background: #ffffff;
          border-top: 1px solid var(--border-color);
          padding: 16px 24px;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .reset-btn {
          background: none;
          border: 1px solid rgba(239, 68, 68, 0.25);
          color: #ef4444;
          border-radius: 6px;
          padding: 6px 12px;
          font-size: 11px;
          font-weight: 500;
          cursor: pointer;
          transition: var(--transition-fast);
        }

        .reset-btn:hover {
          background: rgba(239, 68, 68, 0.05);
        }

        .footer-credits {
          font-size: 9px;
          color: var(--text-muted-dark);
        }

        /* Toasts Container */
        .xp-toasts-container {
          position: fixed;
          bottom: 24px;
          left: 24px;
          z-index: 100000;
          display: flex;
          flex-direction: column;
          gap: 10px;
          pointer-events: none;
          max-width: 320px;
        }

        .xp-toast {
          background: var(--bg-darker);
          color: var(--text-light);
          border: 1px solid rgba(245, 243, 239, 0.12);
          padding: 12px 16px;
          border-radius: 8px;
          display: flex;
          align-items: center;
          gap: 10px;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
          animation: toastIn 0.35s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
          pointer-events: auto;
        }

        .xp-toast.level-up {
          background: linear-gradient(135deg, var(--bg-darker), #1e1b4b);
          border-color: #f59e0b;
          box-shadow: 0 0 15px rgba(245, 158, 11, 0.2);
        }

        .toast-icon {
          color: #f59e0b;
          flex-shrink: 0;
        }

        .xp-toast.level-up .toast-icon {
          color: #f59e0b;
        }

        .toast-message {
          font-size: 13px;
          font-weight: 500;
        }

        @keyframes toastIn {
          from { opacity: 0; transform: translateX(-40px) scale(0.9); }
          to { opacity: 1; transform: translateX(0) scale(1); }
        }

        @media (max-width: 768px) {
          .quest-tracker-hud {
            top: auto;
            bottom: 24px;
            right: auto;
            left: 24px;
            width: calc(100vw - 120px);
            justify-content: space-between;
          }
          
          .hud-progress-container {
            width: 45%;
          }

          .xp-toasts-container {
            bottom: 90px;
            left: 16px;
          }
        }
      `})]})}function g3(){const[e,t]=j.useState([{text:"Rahul Garg Secure Kernel Console [v2.4.9]",type:"system"},{text:'Type "help" or "ls" to view available diagnostic commands.',type:"system"},{text:"",type:"system"}]),[n,r]=j.useState(""),[i,a]=j.useState(0),[o,l]=j.useState(!1),c=j.useRef(null),d=j.useRef(null);j.useEffect(()=>{var h;(h=c.current)==null||h.scrollIntoView({behavior:"smooth"})},[e]);const u=h=>{const m=h.trim();if(!m)return;const y=m.toLowerCase(),k=[...e,{text:`rahul-guest@root:~$ ${m}`,type:"input"}];a(g=>{const v=g+1;return window.dispatchEvent(new CustomEvent("gain-xp",{detail:{amount:5,action:`Executed command "${m}"`,incrementKey:"matrixCommand"}})),v});let x=[];switch(y){case"help":case"ls":x=[{text:"Available Shell Executables:",type:"system"},{text:"  experience - View professional career milestones & roles",type:"info"},{text:"  projects   - Output structural database case studies",type:"info"},{text:"  skills     - View core technology stacks and databases",type:"info"},{text:"  leetcode   - Output CP rankings, DSA count, and metrics",type:"info"},{text:"  clear      - Clear terminal screen diagnostic logs",type:"info"},{text:"  sudo hire rahul - Execute administrative recruitment action",type:"warning"}];break;case"experience":x=[{text:"⚡ CAREER TIMELINE TREE:",type:"system"},{text:"├─ Mid Level Software Engineer @ Jupitice Justice Technologies (Aug 2025 - Present)",type:"info"},{text:"│  ├─ Judicial platforms data integrations & Offline KYC systems",type:"muted"},{text:"│  └─ Meta Business Manager Webhooks for WhatsApp notifications",type:"muted"},{text:"├─ MERN Full Stack Developer @ Basta Tech Solutions (Oct 2023 - July 2025)",type:"info"},{text:"│  ├─ Designed full-stack European Casino (BastaxCasino)",type:"muted"},{text:"│  └─ Configured microservices using Redis & Kafka brokers",type:"muted"},{text:"└─ Full Stack Developer @ Zapbuild Technologies (Mar 2022 - Oct 2023)",type:"info"},{text:"   └─ Built role-based MySQL data warehousing stream interfaces",type:"muted"}];break;case"projects":x=[{text:"📁 PRODUCTION DEPLOYMENTS LOG:",type:"system"},{text:"▶ BastaxCasino - Casino iGaming platform | React, Node.js, MongoDB",type:"info"},{text:"▶ Decentralized AI DApp - Blockchain authorization | Solidity, Web3",type:"info"},{text:"▶ Supreme/High Court Scrapers - Real-time ETL pipeline | MySQL",type:"info"},{text:"▶ Zapier Automation Flow - Google Calendar, M365 webhooks",type:"info"},{text:"▶ Food Store Platform - E-commerce cart system | MongoDB, Express",type:"info"}];break;case"skills":x=[{text:"🛠️ SOFTWARE ENGINEERING STACK GRID:",type:"system"},{text:"  Languages  : JavaScript (ES6+), TypeScript, C++ (Competitive DSA)",type:"info"},{text:"  Frameworks : Node.js, Express.js, React.js, Next.js",type:"info"},{text:"  Databases  : MySQL, MongoDB, Redis (In-memory storage)",type:"info"},{text:"  Brokerage  : Apache Kafka (Event Queueing / streaming)",type:"info"},{text:"  Tools/DevOps: Docker, Nginx, PM2, Git, Swagger, SonarQube",type:"info"}];break;case"leetcode":x=[{text:"🏆 COMPETITIVE PROGRAMMING TELEMETRY:",type:"system"},{text:"  LeetCode Max Rating : 1753 (3 Star Developer)",type:"info"},{text:"  Problems Solved     : 1500+ across GFG & LeetCode",type:"info"},{text:"  GeeksForGeeks Rank  : #1 in CGC Landran campus",type:"info"},{text:"  ICPC Regionals      : Team Rank 613 (Amritapuri, 2021)",type:"info"}];break;case"clear":t([]);return;case"sudo hire rahul":p(),x=[{text:"[SECURITY ACCESS GRANTED] Executing digital authentication bypass...",type:"warning"},{text:"HR Sourcing protocol bypassed. Elite Level Partner token deployed.",type:"success"},{text:"Recruit ping triggered. Initiating connection protocols...",type:"info"}];break;default:x=[{text:`Command not found: "${m}". Type "help" to display instructions.`,type:"error"}];break}t([...k,...x,{text:"",type:"system"}])},p=()=>{l(!0),window.dispatchEvent(new CustomEvent("gain-xp",{detail:{amount:50,action:"Sudo Access Unlocked - Matrix Mode!",incrementKey:"secretEasterEgg"}})),setTimeout(()=>{l(!1)},5e3)},f=h=>{h.key==="Enter"&&(u(n),r(""))};return j.useEffect(()=>{if(!o||!d.current)return;const h=d.current,m=h.getContext("2d");h.width=window.innerWidth,h.height=window.innerHeight;const k="01ABCDEFGHIJKLMNOPQRSTUVWXYZｦｱｳｴｵｶｷｹｺｻｼｽｾｿﾀﾁﾂﾃﾄﾅﾆﾇﾈﾉﾊﾋﾌﾍﾎﾏﾐﾑﾒﾓﾔﾕﾖﾗﾘﾙﾚﾛﾜﾝ".split(""),x=16,g=h.width/x,v=[];for(let C=0;C<g;C++)v[C]=1;let w;const N=()=>{m.fillStyle="rgba(0, 0, 0, 0.05)",m.fillRect(0,0,h.width,h.height),m.fillStyle="#0F0",m.font=x+"px monospace";for(let C=0;C<v.length;C++){const E=k[Math.floor(Math.random()*k.length)];m.fillText(E,C*x,v[C]*x),v[C]*x>h.height&&Math.random()>.975&&(v[C]=0),v[C]++}w=requestAnimationFrame(N)};N();const A=()=>{h.width=window.innerWidth,h.height=window.innerHeight};return window.addEventListener("resize",A),()=>{cancelAnimationFrame(w),window.removeEventListener("resize",A)}},[o]),s.jsxs("section",{id:"terminal",className:"terminal-section dark-section",children:[s.jsxs("div",{className:"container",children:[s.jsx("span",{className:"section-tag",style:{color:"var(--accent-lavender)"},children:"Diagnostic Shell"}),s.jsx("h2",{className:"section-title light",children:"Secure Command Line Interface"}),s.jsx("p",{className:"section-subtitle light",children:"Type standard server terminal commands to query Rahul Garg's full experience history, technical credentials, or leetcode standing."}),s.jsxs("div",{className:"terminal-box",children:[s.jsxs("div",{className:"terminal-bar",children:[s.jsxs("div",{className:"bar-circles",children:[s.jsx("span",{className:"circle red"}),s.jsx("span",{className:"circle yellow"}),s.jsx("span",{className:"circle green"})]}),s.jsx("div",{className:"bar-title",children:"bash // rahul-secure-kernel"}),s.jsx("div",{className:"bar-icon",children:s.jsx(Il,{size:14})})]}),s.jsxs("div",{className:"terminal-screen",children:[s.jsx("div",{className:"scanlines"}),s.jsxs("div",{className:"terminal-content",children:[e.map((h,m)=>s.jsx("div",{className:`terminal-line ${h.type}`,children:h.text},m)),s.jsx("div",{ref:c})]}),s.jsxs("div",{className:"terminal-input-row",children:[s.jsx("span",{className:"terminal-prompt",children:"rahul-guest@root:~$"}),s.jsx("input",{type:"text",className:"terminal-input-box",value:n,onChange:h=>r(h.target.value),onKeyDown:f,placeholder:"Type 'help'...",autoComplete:"off",spellCheck:"false"})]})]})]})]}),o&&s.jsxs("div",{className:"matrix-rain-overlay",children:[s.jsx("canvas",{ref:d,className:"matrix-canvas"}),s.jsxs("div",{className:"matrix-notification",children:[s.jsx(Ly,{size:40,className:"shield-icon"}),s.jsx("h3",{children:"ACCESS GRANTED"}),s.jsx("p",{children:"Bypassing security ledger... recruiter quest unlocked!"})]})]}),s.jsx("style",{children:`
        .terminal-section {
          background-color: #0b111a;
          border-bottom: 1px solid rgba(245, 243, 239, 0.1);
        }

        .terminal-box {
          background-color: #070a13;
          border: 1px solid rgba(16, 185, 129, 0.2);
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 20px 45px rgba(0, 0, 0, 0.4), 0 0 15px rgba(16, 185, 129, 0.05);
          height: 380px;
          display: flex;
          flex-direction: column;
        }

        .terminal-bar {
          background-color: #0d1222;
          padding: 12px 20px;
          border-bottom: 1px solid rgba(16, 185, 129, 0.15);
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .bar-circles {
          display: flex;
          gap: 6px;
        }

        .circle {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          display: inline-block;
        }

        .circle.red { background-color: #ef4444; }
        .circle.yellow { background-color: #f59e0b; }
        .circle.green { background-color: #10b981; }

        .bar-title {
          font-family: var(--font-mono);
          font-size: 11px;
          color: rgba(16, 185, 129, 0.75);
          letter-spacing: 0.05em;
        }

        .bar-icon {
          color: rgba(16, 185, 129, 0.5);
        }

        .terminal-screen {
          flex-grow: 1;
          padding: 24px;
          display: flex;
          flex-direction: column;
          position: relative;
          overflow: hidden;
        }

        /* Monitor Scanline shader effect */
        .scanlines {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            rgba(18, 16, 16, 0) 50%, 
            rgba(0, 0, 0, 0.25) 50%
          ), linear-gradient(
            90deg,
            rgba(255, 0, 0, 0.06),
            rgba(0, 255, 0, 0.02),
            rgba(0, 0, 255, 0.06)
          );
          background-size: 100% 4px, 6px 100%;
          z-index: 10;
          pointer-events: none;
        }

        .terminal-content {
          flex-grow: 1;
          overflow-y: auto;
          display: flex;
          flex-direction: column;
          gap: 6px;
          font-family: var(--font-mono);
          font-size: 13px;
          margin-bottom: 16px;
          scrollbar-width: thin;
        }

        .terminal-content::-webkit-scrollbar {
          width: 6px;
        }
        .terminal-content::-webkit-scrollbar-thumb {
          background: rgba(16, 185, 129, 0.2);
          border-radius: 3px;
        }

        .terminal-line {
          white-space: pre-wrap;
          line-height: 1.5;
        }

        .terminal-line.system { color: #34d399; }
        .terminal-line.input { color: #60a5fa; }
        .terminal-line.info { color: #a7f3d0; }
        .terminal-line.warning { color: #fbbf24; }
        .terminal-line.success { color: #34d399; font-weight: 600; text-shadow: 0 0 4px rgba(16, 185, 129, 0.4); }
        .terminal-line.muted { color: rgba(16, 185, 129, 0.4); font-size: 12px; }
        .terminal-line.error { color: #f87171; }

        .terminal-input-row {
          display: flex;
          align-items: center;
          gap: 10px;
          border-top: 1px solid rgba(16, 185, 129, 0.1);
          padding-top: 12px;
          z-index: 12;
        }

        .terminal-prompt {
          font-family: var(--font-mono);
          font-size: 13px;
          color: #60a5fa;
          font-weight: 600;
        }

        .terminal-input-box {
          flex-grow: 1;
          background: none;
          border: none;
          outline: none;
          font-family: var(--font-mono);
          font-size: 13px;
          color: #10b981;
          caret-color: #10b981;
          width: 100%;
        }

        /* Matrix rain overlay design */
        .matrix-rain-overlay {
          position: fixed;
          inset: 0;
          z-index: 20000;
          background-color: #000;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .matrix-canvas {
          position: absolute;
          inset: 0;
          z-index: 1;
        }

        .matrix-notification {
          position: relative;
          z-index: 2;
          background: rgba(0, 0, 0, 0.85);
          border: 2px solid #0f0;
          border-radius: 12px;
          padding: 40px;
          text-align: center;
          color: #0f0;
          font-family: var(--font-mono);
          box-shadow: 0 0 30px rgba(0, 255, 0, 0.3);
          max-width: 420px;
          width: 90%;
        }

        .matrix-notification .shield-icon {
          animation: pulseGlow 1.5s infinite;
          margin-bottom: 16px;
        }

        .matrix-notification h3 {
          font-size: 24px;
          margin-bottom: 12px;
          letter-spacing: 0.1em;
        }

        .matrix-notification p {
          font-size: 13px;
          line-height: 1.5;
          color: rgba(0, 255, 0, 0.75);
        }
      `})]})}function x3(){const[e,t]=j.useState("heatmap"),[n,r]=j.useState(null),[i,a]=j.useState([]);j.useEffect(()=>{const c=[],d=["DP","Trees","Graphs","Binary Search","Sliding Window","Greedy","Recursion"];for(let u=0;u<140;u++){const p=u%7;let f=0;Math.random()>.15&&(f=Math.floor(Math.random()*8)+1,(p===0||p===6)&&(f=Math.random()>.5?Math.floor(Math.random()*3):0)),c.push({id:u,count:f,topic:f>0?d[Math.floor(Math.random()*d.length)]:null,date:`Day -${140-u}`})}a(c)},[]);const o={easy:550,medium:780,hard:170};return s.jsxs("section",{id:"leetcode",className:"leetcode-section",children:[s.jsxs("div",{className:"container",children:[s.jsx("span",{className:"section-tag",children:"Competitive Standings"}),s.jsx("h2",{className:"section-title",children:"LeetCode & DSA Analytics"}),s.jsx("p",{className:"section-subtitle",children:"Real-time metrics, problem-solving streaks, and domain-specific algorithm competencies tracking over 1500+ solved problems."}),s.jsxs("div",{className:"leetcode-grid",children:[s.jsxs("div",{className:"leetcode-stats-panel",children:[s.jsxs("div",{className:"stats-header-card",children:[s.jsx("div",{className:"stat-circle-box",children:s.jsxs("svg",{className:"circular-progress",viewBox:"0 0 100 100",children:[s.jsx("circle",{className:"progress-bg",cx:"50",cy:"50",r:"42"}),s.jsx("circle",{className:"progress-fill",cx:"50",cy:"50",r:"42",style:{strokeDashoffset:65}}),s.jsx("text",{className:"progress-text-val",x:"50",y:"48",textAnchor:"middle",children:"1,500+"}),s.jsx("text",{className:"progress-text-sub",x:"50",y:"66",textAnchor:"middle",children:"Solved"})]})}),s.jsxs("div",{className:"difficulty-bars",children:[s.jsx("h4",{className:"difficulty-title",children:"Problem Difficulty Breakdown"}),s.jsxs("div",{className:"difficulty-bar-item easy",children:[s.jsxs("div",{className:"bar-meta",children:[s.jsx("span",{className:"dif-name",children:"🟢 Easy"}),s.jsxs("span",{className:"dif-fraction",children:[o.easy," / 650"]})]}),s.jsx("div",{className:"bar-track",children:s.jsx("div",{className:"bar-fill",style:{width:"84%"}})})]}),s.jsxs("div",{className:"difficulty-bar-item medium",children:[s.jsxs("div",{className:"bar-meta",children:[s.jsx("span",{className:"dif-name",children:"🟡 Medium"}),s.jsxs("span",{className:"dif-fraction",children:[o.medium," / 1000"]})]}),s.jsx("div",{className:"bar-track",children:s.jsx("div",{className:"bar-fill",style:{width:"78%"}})})]}),s.jsxs("div",{className:"difficulty-bar-item hard",children:[s.jsxs("div",{className:"bar-meta",children:[s.jsx("span",{className:"dif-name",children:"🔴 Hard"}),s.jsxs("span",{className:"dif-fraction",children:[o.hard," / 300"]})]}),s.jsx("div",{className:"bar-track",children:s.jsx("div",{className:"bar-fill",style:{width:"56%"}})})]})]})]}),s.jsxs("div",{className:"dashboard-tabs",children:[s.jsxs("button",{className:`dash-tab-btn ${e==="heatmap"?"active":""}`,onClick:()=>t("heatmap"),children:[s.jsx(Cy,{size:14}),s.jsx("span",{children:"Active Coding Streak Heatmap"})]}),s.jsxs("button",{className:`dash-tab-btn ${e==="radar"?"active":""}`,onClick:()=>t("radar"),children:[s.jsx(mk,{size:14}),s.jsx("span",{children:"DSA Skill Radar Map"})]})]}),s.jsxs("div",{className:"tab-render-area",children:[e==="heatmap"&&s.jsxs("div",{className:"heatmap-container",children:[s.jsxs("div",{className:"heatmap-meta",children:[s.jsxs("div",{className:"meta-desc-heatmap",children:[s.jsx("span",{className:"heatmap-title",children:"Interactive Commits ledger"}),s.jsx("p",{children:"Hover over cells to view coding activity details and dynamic algorithms solved per day."})]}),n&&s.jsxs("div",{className:"heatmap-tooltip",children:[s.jsx("span",{className:"tooltip-date",children:n.date}),s.jsxs("span",{className:"tooltip-value",children:[n.count," problems solved ",n.topic?`[${n.topic}]`:""]})]})]}),s.jsx("div",{className:"heatmap-grid-scroll",children:s.jsx("div",{className:"heatmap-grid-matrix",children:i.map(c=>{let d="lvl-0";return c.count>0&&c.count<=2?d="lvl-1":c.count>2&&c.count<=4?d="lvl-2":c.count>4&&c.count<=6?d="lvl-3":c.count>6&&(d="lvl-4"),s.jsx("div",{className:`heatmap-cell ${d}`,onMouseEnter:()=>r(c),onMouseLeave:()=>r(null)},c.id)})})}),s.jsxs("div",{className:"heatmap-legend",children:[s.jsx("span",{children:"Less"}),s.jsx("span",{className:"legend-cell lvl-0"}),s.jsx("span",{className:"legend-cell lvl-1"}),s.jsx("span",{className:"legend-cell lvl-2"}),s.jsx("span",{className:"legend-cell lvl-3"}),s.jsx("span",{className:"legend-cell lvl-4"}),s.jsx("span",{children:"More"})]})]}),e==="radar"&&s.jsxs("div",{className:"radar-container",children:[s.jsx("div",{className:"radar-svg-box",children:s.jsxs("svg",{viewBox:"0 0 200 200",className:"radar-svg",children:[s.jsx("polygon",{className:"radar-grid-poly",points:"100,25 171,62.5 144,137.5 56,137.5 29,62.5"}),s.jsx("polygon",{className:"radar-grid-poly",points:"100,50 148,75 130,125 70,125 52,75"}),s.jsx("polygon",{className:"radar-grid-poly",points:"100,75 124,87.5 115,112.5 85,112.5 76,87.5"}),s.jsx("line",{x1:"100",y1:"100",x2:"100",y2:"15",className:"radar-spoke"}),s.jsx("line",{x1:"100",y1:"100",x2:"171",y2:"55",className:"radar-spoke"}),s.jsx("line",{x1:"100",y1:"100",x2:"144",y2:"161",className:"radar-spoke"}),s.jsx("line",{x1:"100",y1:"100",x2:"56",y2:"161",className:"radar-spoke"}),s.jsx("line",{x1:"100",y1:"100",x2:"29",y2:"55",className:"radar-spoke"}),s.jsx("polygon",{className:"radar-value-poly",points:"100,32.5 162,60 136,150 58,150 40,61"}),s.jsx("circle",{cx:"100",cy:"32.5",r:"3",className:"radar-node"}),s.jsx("circle",{cx:"162",cy:"60",r:"3",className:"radar-node"}),s.jsx("circle",{cx:"136",cy:"150",r:"3",className:"radar-node"}),s.jsx("circle",{cx:"58",cy:"150",r:"3",className:"radar-node"}),s.jsx("circle",{cx:"40",cy:"61",r:"3",className:"radar-node"}),s.jsx("text",{x:"100",y:"10",className:"radar-label",textAnchor:"middle",children:"Dynamic Prog."}),s.jsx("text",{x:"180",y:"58",className:"radar-label",textAnchor:"start",children:"Trees & Graphs"}),s.jsx("text",{x:"150",y:"174",className:"radar-label",textAnchor:"start",children:"Greedy Algorithms"}),s.jsx("text",{x:"50",y:"174",className:"radar-label",textAnchor:"end",children:"Math & Strings"}),s.jsx("text",{x:"20",y:"58",className:"radar-label",textAnchor:"end",children:"System Design"})]})}),s.jsxs("div",{className:"radar-explanation font-mono",children:[s.jsx("h4",{children:"Algorithm Competency Scores:"}),s.jsxs("ul",{children:[s.jsx("li",{children:"🟢 Math & Strings (94%)"}),s.jsx("li",{children:"🟣 Dynamic Programming (90%)"}),s.jsx("li",{children:"🟢 Trees & Graphs (88%)"}),s.jsx("li",{children:"🟣 System Design (85%)"}),s.jsx("li",{children:"🟢 Greedy Algorithms (82%)"})]})]})]})]})]}),s.jsx("div",{className:"leetcode-contest-panel",children:s.jsxs(il,{className:"card contest-card",maxTilt:6,children:[s.jsxs("h3",{className:"contest-title-heading",children:[s.jsx(Vr,{size:18,className:"award-icon"}),s.jsx("span",{children:"Contest Standing Profiles"})]}),s.jsxs("div",{className:"contest-rating-block",children:[s.jsx("span",{className:"rating-label",children:"LeetCode MAX Rating"}),s.jsxs("div",{className:"rating-flex",children:[s.jsx("span",{className:"rating-value",children:"1753 Rating"}),s.jsx("span",{className:"rating-badge font-mono",children:"3 Star Dev"})]}),s.jsx("p",{className:"rating-percentile",children:"Top 6.8% globally among millions of developers."})]}),s.jsxs("div",{className:"rating-chart-visual",children:[s.jsx("span",{className:"chart-label font-mono",children:"contest_trend // historical_climb"}),s.jsxs("svg",{className:"trend-svg",viewBox:"0 0 300 80",children:[s.jsx("path",{d:"M 10,70 L 40,65 L 70,68 L 100,52 L 130,48 L 160,55 L 190,32 L 220,28 L 250,22 L 290,14",fill:"none",stroke:"var(--accent-purple)",strokeWidth:"2.5"}),s.jsx("circle",{cx:"290",cy:"14",r:"4",fill:"var(--accent-purple)",className:"glowing-node-circle"}),s.jsx("line",{x1:"10",y1:"70",x2:"290",y2:"70",stroke:"rgba(17, 28, 45, 0.08)",strokeDasharray:"3"}),s.jsx("line",{x1:"10",y1:"40",x2:"290",y2:"40",stroke:"rgba(17, 28, 45, 0.08)",strokeDasharray:"3"}),s.jsx("line",{x1:"10",y1:"14",x2:"290",y2:"14",stroke:"rgba(17, 28, 45, 0.08)",strokeDasharray:"3"})]})]}),s.jsxs("div",{className:"rankings-summary font-mono",children:[s.jsxs("div",{className:"ranking-row",children:[s.jsx("span",{children:"GFG CGC Campus Rank:"}),s.jsx("span",{className:"val highlight",children:"Rank 1st"})]}),s.jsxs("div",{className:"ranking-row",children:[s.jsx("span",{children:"ICPC Regionals Rank:"}),s.jsx("span",{className:"val highlight",children:"Rank 613"})]}),s.jsxs("div",{className:"ranking-row",children:[s.jsx("span",{children:"Global Solved Percentile:"}),s.jsx("span",{className:"val highlight",children:"Top 1.5%"})]})]})]})})]})]}),s.jsx("style",{children:`
        .leetcode-section {
          background-color: var(--bg-secondary);
          border-bottom: 1px solid var(--border-color);
        }

        .leetcode-grid {
          display: grid;
          grid-template-columns: 1.15fr 0.85fr;
          gap: 40px;
        }

        /* Left Stats Panel */
        .leetcode-stats-panel {
          background-color: #ffffff;
          border: 1px solid var(--border-color);
          border-radius: 12px;
          padding: 24px;
          box-shadow: 0 4px 16px rgba(17, 28, 45, 0.02);
        }

        .stats-header-card {
          display: flex;
          align-items: center;
          gap: 32px;
          border-bottom: 1px solid var(--border-color);
          padding-bottom: 24px;
          margin-bottom: 20px;
        }

        .stat-circle-box {
          width: 110px;
          height: 110px;
          flex-shrink: 0;
        }

        .circular-progress {
          width: 100%;
          height: 100%;
        }

        .progress-bg {
          fill: none;
          stroke: rgba(94, 90, 209, 0.06);
          stroke-width: 8;
        }

        .progress-fill {
          fill: none;
          stroke: var(--accent-purple);
          stroke-width: 8;
          stroke-linecap: round;
          stroke-dasharray: 264;
          transform: rotate(-90deg);
          transform-origin: 50% 50%;
          transition: stroke-dashoffset 1.5s ease;
        }

        .progress-text-val {
          font-family: var(--font-sans);
          font-size: 16px;
          font-weight: 700;
          fill: var(--text-dark);
        }

        .progress-text-sub {
          font-family: var(--font-mono);
          font-size: 8px;
          text-transform: uppercase;
          fill: var(--text-muted-dark);
          letter-spacing: 0.1em;
        }

        .difficulty-bars {
          flex-grow: 1;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .difficulty-title {
          font-size: 13px;
          font-weight: 600;
          color: var(--text-dark);
          margin-bottom: 2px;
        }

        .difficulty-bar-item {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .bar-meta {
          display: flex;
          justify-content: space-between;
          font-size: 11px;
          font-weight: 500;
        }

        .dif-name {
          font-weight: 600;
        }

        .bar-track {
          height: 6px;
          background-color: rgba(17, 28, 45, 0.05);
          border-radius: 3px;
          overflow: hidden;
        }

        .bar-fill {
          height: 100%;
          border-radius: 3px;
        }

        .difficulty-bar-item.easy .bar-fill { background-color: #10b981; }
        .difficulty-bar-item.medium .bar-fill { background-color: #f59e0b; }
        .difficulty-bar-item.hard .bar-fill { background-color: #ef4444; }

        /* Tabs bar */
        .dashboard-tabs {
          display: flex;
          gap: 12px;
          border-bottom: 1px solid var(--border-color);
          padding-bottom: 12px;
          margin-bottom: 20px;
        }

        .dash-tab-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: none;
          border: none;
          padding: 8px 16px;
          font-size: 12px;
          font-weight: 500;
          color: var(--text-muted-dark);
          cursor: pointer;
          transition: var(--transition-fast);
          border-radius: 6px;
        }

        .dash-tab-btn:hover {
          background-color: rgba(94, 90, 209, 0.04);
          color: var(--text-dark);
        }

        .dash-tab-btn.active {
          background-color: rgba(94, 90, 209, 0.08);
          color: var(--accent-purple);
          font-weight: 600;
        }

        /* Heatmap Grid */
        .heatmap-container {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .heatmap-meta {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          min-height: 40px;
        }

        .meta-desc-heatmap span {
          font-size: 12px;
          font-weight: 600;
          color: var(--text-dark);
        }

        .meta-desc-heatmap p {
          font-size: 11px;
          color: var(--text-muted-dark);
        }

        .heatmap-tooltip {
          background-color: var(--bg-darker);
          color: var(--text-light);
          padding: 6px 12px;
          border-radius: 6px;
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
        }

        .tooltip-date {
          font-size: 9px;
          font-family: var(--font-mono);
          color: var(--accent-lavender);
        }

        .tooltip-value {
          font-size: 11px;
          font-weight: 600;
        }

        .heatmap-grid-scroll {
          overflow-x: auto;
          scrollbar-width: thin;
        }

        .heatmap-grid-matrix {
          display: grid;
          grid-template-rows: repeat(7, 10px);
          grid-auto-flow: column;
          gap: 3px;
          width: max-content;
        }

        .heatmap-cell {
          width: 10px;
          height: 10px;
          border-radius: 2px;
          transition: transform var(--transition-fast);
        }

        .heatmap-cell:hover {
          transform: scale(1.25);
          z-index: 12;
        }

        /* Color classes */
        .heatmap-cell.lvl-0 { background-color: rgba(17, 28, 45, 0.04); }
        .heatmap-cell.lvl-1 { background-color: #c6f6d5; }
        .heatmap-cell.lvl-2 { background-color: #9ae6b4; }
        .heatmap-cell.lvl-3 { background-color: #48bb78; }
        .heatmap-cell.lvl-4 { background-color: #22543d; }

        .heatmap-legend {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 10px;
          color: var(--text-muted-dark);
          align-self: flex-end;
        }

        .legend-cell {
          width: 8px;
          height: 8px;
          border-radius: 1px;
        }

        /* Radar Chart */
        .radar-container {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 20px;
          align-items: center;
        }

        .radar-svg-box {
          width: 100%;
          max-width: 170px;
          margin: 0 auto;
        }

        .radar-svg {
          width: 100%;
          height: auto;
          overflow: visible;
        }

        .radar-grid-poly {
          fill: none;
          stroke: rgba(17, 28, 45, 0.08);
          stroke-width: 1px;
        }

        .radar-spoke {
          stroke: rgba(17, 28, 45, 0.06);
          stroke-width: 1px;
        }

        .radar-value-poly {
          fill: rgba(94, 90, 209, 0.16);
          stroke: var(--accent-purple);
          stroke-width: 2px;
          stroke-linejoin: round;
        }

        .radar-node {
          fill: var(--accent-purple);
          stroke: #ffffff;
          stroke-width: 1.5px;
        }

        .radar-label {
          font-size: 8px;
          font-family: var(--font-mono);
          fill: var(--text-muted-dark);
          font-weight: 600;
        }

        .radar-explanation {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .radar-explanation h4 {
          font-size: 12px;
          font-weight: 600;
          color: var(--text-dark);
        }

        .radar-explanation ul {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .radar-explanation li {
          font-size: 12px;
          color: var(--text-muted-dark);
        }

        /* Right panel (Contest summary card) */
        .contest-card {
          background-color: #ffffff;
          padding: 30px;
          min-height: 380px;
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }

        .contest-title-heading {
          font-size: 18px;
          font-weight: 500;
          color: var(--text-dark);
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 24px;
        }

        .award-icon {
          color: var(--accent-purple);
        }

        .contest-rating-block {
          margin-bottom: 24px;
        }

        .rating-label {
          font-family: var(--font-mono);
          font-size: 9px;
          color: var(--text-muted-dark);
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .rating-flex {
          display: flex;
          align-items: center;
          gap: 12px;
          margin: 6px 0;
        }

        .rating-value {
          font-size: 24px;
          font-weight: 700;
          color: var(--accent-purple);
        }

        .rating-badge {
          background-color: rgba(94, 90, 209, 0.08);
          color: var(--accent-purple);
          border: 1px solid rgba(94, 90, 209, 0.16);
          padding: 2px 8px;
          font-size: 10px;
          font-weight: 600;
          border-radius: 4px;
        }

        .rating-percentile {
          font-size: 12px;
          color: var(--text-muted-dark);
          line-height: 1.4;
        }

        .rating-chart-visual {
          margin-bottom: 24px;
        }

        .chart-label {
          font-size: 8px;
          color: rgba(17, 28, 45, 0.35);
          display: block;
          margin-bottom: 8px;
        }

        .trend-svg {
          width: 100%;
          height: 80px;
          overflow: visible;
        }

        .glowing-node-circle {
          filter: drop-shadow(0 0 4px var(--accent-purple));
          animation: pulseNode 1.5s infinite alternate;
        }

        @keyframes pulseNode {
          0% { r: 3.5px; }
          100% { r: 5.5px; }
        }

        .rankings-summary {
          border-top: 1px solid var(--border-color);
          padding-top: 16px;
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .ranking-row {
          display: flex;
          justify-content: space-between;
          font-size: 11px;
          color: var(--text-muted-dark);
        }

        .ranking-row .val.highlight {
          color: var(--text-dark);
          font-weight: 600;
        }

        @media (max-width: 900px) {
          .leetcode-grid {
            grid-template-columns: 1fr;
            gap: 32px;
          }
        }

        @media (max-width: 500px) {
          .radar-container {
            grid-template-columns: 1fr;
          }
        }
      `})]})}function y3(){const[e,t]=j.useState(""),[n,r]=j.useState(null),i={ride:{title:"🏎️ Ride-Sharing Platform (Uber Clone)",match:"98% Match",desc:"Highly scalable location polling engine mapping client coordinates to driver nodes under millisecond deadlines.",arch:{gateway:"API Router (Node.js/Express) + Websocket pool",caching:"Redis Geospatial Index (GEOADD tracking)",queue:"Kafka driver status topics",database:"MySQL partitioned coordinates tables",strength:"Redis geospatial indices manage thousands of coordinate checks under 10ms."}},food:{title:"🍔 Food Store & Delivery Platform (UberEats Clone)",match:"95% Match",desc:"Role-based delivery dispatcher handling shopping carts, custom payment workflows, and live store telemetry.",arch:{gateway:"React UI clients -> Nginx load balancing -> Node endpoints",caching:"Redis cart session nodes",queue:"Kafka checkout transaction queues",database:"MongoDB orders collection + MySQL billing logs",strength:"Decoupled checkout processing ensures no transaction loss during heavy order peaks."}},chat:{title:"💬 Real-Time Chat & VoIP Platform (WhatsApp/Slack)",match:"96% Match",desc:"Instant messaging app utilizing webhook event integrations, client statuses, and auto-archived logs.",arch:{gateway:"Websocket client pool + Meta Business APIs integration",caching:"Redis active user socket maps",queue:"Kafka messaging streams (FIFO sorting)",database:"MongoDB chats collection + MySQL user security indexing",strength:"Metadata-driven API router allows customizable client webhooks for automated replies."}},etl:{title:"📊 High-Volume Judicial/Government ETL Processing Pipeline",match:"100% Match",desc:"Automated legal data scrapers retrieving, structuring, and loading large datasets with rate-limiters.",arch:{gateway:"Scheduled CRON node runners + proxy networks",caching:"Redis deduplication maps",queue:"Kafka extraction ingestion pipelines",database:"MySQL database indexes",strength:"Automatic scraper caching prevents target site blocks while processing 100k+ records."}}},a=l=>{l.preventDefault();const c=e.toLowerCase();c.includes("ride")||c.includes("uber")||c.includes("cab")||c.includes("driver")?r(i.ride):c.includes("food")||c.includes("delivery")||c.includes("restaurant")||c.includes("eat")?r(i.food):c.includes("chat")||c.includes("slack")||c.includes("whatsapp")||c.includes("message")?r(i.chat):c.includes("etl")||c.includes("pipeline")||c.includes("scrap")||c.includes("data")||c.includes("court")||c.includes("judicial")?r(i.etl):c.trim()&&r({title:`🚀 Custom System: "${e}"`,match:"92% Tech Compatibility",desc:"Custom full-stack architecture design utilizing Node.js microservices and Redis caching.",arch:{gateway:"Node.js Gateway Router + Load Balancer",caching:"Redis caching nodes (Query Interceptors)",queue:"Kafka Event Broker (Asynchronous queues)",database:"MySQL (Relational ACID checks) or MongoDB documents",strength:"Highly decoupled design lets you scale UI routing and DB layers independently."}}),window.dispatchEvent(new CustomEvent("gain-xp",{detail:{amount:15,action:`Queried simulator for "${e}"`}}))},o=l=>{r(i[l]),t(i[l].title.substring(4)),window.dispatchEvent(new CustomEvent("gain-xp",{detail:{amount:20,action:`Selected architecture preset: ${i[l].title}`}}))};return s.jsxs("section",{id:"build-simulator",className:"build-simulator-section dark-section",children:[s.jsx("div",{className:"system-grid-overlay"}),s.jsxs("div",{className:"container",children:[s.jsx("span",{className:"section-tag",style:{color:"var(--accent-lavender)"},children:"Architectural Simulator"}),s.jsx("h2",{className:"section-title light",children:"Can Rahul Build This?"}),s.jsx("p",{className:"section-subtitle light",children:"Type any startup or backend application concept below. Our simulator matches it against Rahul's specific experience and auto-generates a scalable design topology."}),s.jsxs("div",{className:"simulator-grid",children:[s.jsxs("div",{className:"simulator-search-card",children:[s.jsx("h3",{className:"card-sub-title",children:"System Concept Input"}),s.jsx("p",{className:"card-desc",children:'Type your product idea (e.g. "Uber clone", "Food Delivery App") or select from presets below:'}),s.jsxs("form",{onSubmit:a,className:"sim-search-bar",children:[s.jsx("input",{type:"text",placeholder:"Type 'Slack clone', 'Ride sharing'...",value:e,onChange:l=>t(l.target.value),className:"sim-input"}),s.jsx("button",{type:"submit",className:"sim-search-btn",children:s.jsx(Tk,{size:16})})]}),s.jsxs("div",{className:"preset-suggestions",children:[s.jsx("span",{className:"preset-label font-mono",children:"🎯 Diagnostic Presets:"}),s.jsxs("div",{className:"preset-buttons-grid",children:[s.jsx("button",{onClick:()=>o("ride"),className:"preset-btn-action",children:"Uber Clone 🏎️"}),s.jsx("button",{onClick:()=>o("food"),className:"preset-btn-action",children:"E-Commerce Food Store 🍔"}),s.jsx("button",{onClick:()=>o("chat"),className:"preset-btn-action",children:"Real-Time Messaging 💬"}),s.jsx("button",{onClick:()=>o("etl"),className:"preset-btn-action",children:"Judicial ETL Scrapers 📊"})]})]})]}),s.jsx("div",{className:"simulator-topology-card",children:n?s.jsxs("div",{className:"topology-results",children:[s.jsxs("div",{className:"topo-result-header",children:[s.jsx("h4",{className:"topo-title",children:n.title}),s.jsx("span",{className:"topo-match-badge font-mono",children:n.match})]}),s.jsx("p",{className:"topo-desc-text",children:n.desc}),s.jsxs("div",{className:"interactive-topo-diagram",children:[s.jsxs("div",{className:"diag-node",children:[s.jsx(Iy,{size:18,className:"node-icon router"}),s.jsxs("div",{className:"node-meta",children:[s.jsx("span",{className:"node-title",children:"API Router"}),s.jsx("span",{className:"node-tech font-mono",children:n.arch.gateway})]})]}),s.jsx("div",{className:"connector-arrow",children:s.jsx(Bi,{size:14})}),s.jsxs("div",{className:"diag-node",children:[s.jsx(Py,{size:18,className:"node-icon cache"}),s.jsxs("div",{className:"node-meta",children:[s.jsx("span",{className:"node-title",children:"Caching Layer"}),s.jsx("span",{className:"node-tech font-mono",children:n.arch.caching})]})]}),s.jsx("div",{className:"connector-arrow",children:s.jsx(Bi,{size:14})}),s.jsxs("div",{className:"diag-node",children:[s.jsx(du,{size:18,className:"node-icon broker"}),s.jsxs("div",{className:"node-meta",children:[s.jsx("span",{className:"node-title",children:"Queue Broker"}),s.jsx("span",{className:"node-tech font-mono",children:n.arch.queue})]})]}),s.jsx("div",{className:"connector-arrow",children:s.jsx(Bi,{size:14})}),s.jsxs("div",{className:"diag-node",children:[s.jsx(rl,{size:18,className:"node-icon db"}),s.jsxs("div",{className:"node-meta",children:[s.jsx("span",{className:"node-title",children:"Primary Database"}),s.jsx("span",{className:"node-tech font-mono",children:n.arch.database})]})]})]}),s.jsxs("div",{className:"topo-strength-card",children:[s.jsx(Vr,{size:18,className:"strength-icon"}),s.jsxs("div",{className:"strength-content",children:[s.jsx("span",{className:"strength-title font-mono",children:"SYSTEM SCALING EDGE:"}),s.jsx("p",{children:n.arch.strength})]})]})]}):s.jsxs("div",{className:"topology-placeholder font-mono",children:[s.jsx(du,{size:36,className:"placeholder-icon animate-pulse"}),s.jsx("p",{children:"AWAITING PRODUCT QUERY INPUT..."}),s.jsx("span",{children:"Select a preset or search above to compile system architectures."})]})})]})]}),s.jsx("style",{children:`
        .build-simulator-section {
          background-color: var(--bg-darker);
          border-bottom: 1px solid rgba(245, 243, 239, 0.1);
          position: relative;
          overflow: hidden;
        }

        .simulator-grid {
          display: grid;
          grid-template-columns: 0.9fr 1.1fr;
          gap: 40px;
          z-index: 5;
          position: relative;
        }

        .simulator-search-card {
          background-color: var(--bg-dark);
          border: 1px solid rgba(245, 243, 239, 0.08);
          border-radius: 12px;
          padding: 30px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
        }

        .card-sub-title {
          font-size: 18px;
          font-weight: 500;
          color: var(--text-light);
          margin-bottom: 10px;
        }

        .card-desc {
          font-size: 13px;
          color: var(--text-muted-light);
          margin-bottom: 24px;
          line-height: 1.5;
        }

        .sim-search-bar {
          display: flex;
          gap: 10px;
          margin-bottom: 30px;
        }

        .sim-input {
          flex-grow: 1;
          background-color: var(--bg-darker);
          border: 1px solid rgba(245, 243, 239, 0.12);
          border-radius: 6px;
          padding: 12px 16px;
          color: var(--text-light);
          font-family: var(--font-sans);
          font-size: 14px;
          outline: none;
          transition: var(--transition-fast);
        }

        .sim-input:focus {
          border-color: var(--accent-lavender);
        }

        .sim-search-btn {
          width: 44px;
          background-color: var(--accent-purple);
          border: none;
          color: var(--text-light);
          border-radius: 6px;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: var(--transition-fast);
        }

        .sim-search-btn:hover {
          background-color: #4c48b8;
        }

        .preset-suggestions {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .preset-label {
          font-size: 9px;
          text-transform: uppercase;
          letter-spacing: 0.15em;
          color: var(--accent-lavender);
        }

        .preset-buttons-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 10px;
        }

        .preset-btn-action {
          background-color: var(--bg-darker);
          border: 1px solid rgba(245, 243, 239, 0.08);
          border-radius: 6px;
          padding: 8px 12px;
          color: var(--text-muted-light);
          font-size: 12px;
          text-align: left;
          cursor: pointer;
          transition: var(--transition-fast);
        }

        .preset-btn-action:hover {
          border-color: var(--accent-purple);
          color: var(--text-light);
          background-color: rgba(94, 90, 209, 0.06);
        }

        /* Topology card panel */
        .simulator-topology-card {
          background-color: var(--bg-dark);
          border: 1px solid rgba(245, 243, 239, 0.08);
          border-radius: 12px;
          padding: 30px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
          display: flex;
          flex-direction: column;
          justify-content: center;
          min-height: 350px;
        }

        .topology-placeholder {
          text-align: center;
          color: rgba(245, 243, 239, 0.35);
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 12px;
        }

        .placeholder-icon {
          color: rgba(245, 243, 239, 0.15);
        }

        .topology-placeholder p {
          font-size: 13px;
          letter-spacing: 0.1em;
          font-weight: 600;
        }

        .topology-placeholder span {
          font-size: 11px;
          max-width: 320px;
          line-height: 1.5;
        }

        .topology-results {
          display: flex;
          flex-direction: column;
          gap: 20px;
          height: 100%;
        }

        .topo-result-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .topo-title {
          font-size: 18px;
          font-weight: 600;
          color: var(--text-light);
        }

        .topo-match-badge {
          background-color: rgba(16, 185, 129, 0.15);
          color: #10b981;
          border: 1px solid rgba(16, 185, 129, 0.3);
          font-size: 10px;
          font-weight: 600;
          padding: 3px 8px;
          border-radius: 4px;
        }

        .topo-desc-text {
          font-size: 13px;
          color: var(--text-muted-light);
          line-height: 1.5;
        }

        .interactive-topo-diagram {
          display: flex;
          flex-direction: column;
          gap: 10px;
          background-color: var(--bg-darker);
          border-radius: 8px;
          padding: 16px;
          border: 1px solid rgba(245, 243, 239, 0.04);
        }

        .diag-node {
          display: flex;
          align-items: center;
          gap: 14px;
          background-color: var(--bg-dark);
          border: 1px solid rgba(245, 243, 239, 0.08);
          border-radius: 6px;
          padding: 10px 14px;
        }

        .node-icon {
          flex-shrink: 0;
        }

        .node-icon.router { color: var(--accent-lavender); }
        .node-icon.cache { color: #10b981; }
        .node-icon.broker { color: #f59e0b; }
        .node-icon.db { color: #6366f1; }

        .node-meta {
          display: flex;
          flex-direction: column;
        }

        .node-title {
          font-size: 11px;
          font-weight: 600;
          color: var(--text-light);
        }

        .node-tech {
          font-size: 10px;
          color: var(--text-muted-light);
        }

        .connector-arrow {
          display: flex;
          justify-content: center;
          color: rgba(245, 243, 239, 0.2);
          transform: rotate(90deg);
          margin: -4px 0;
        }

        .topo-strength-card {
          background-color: rgba(94, 90, 209, 0.08);
          border: 1px solid rgba(94, 90, 209, 0.2);
          border-radius: 8px;
          padding: 12px 16px;
          display: flex;
          gap: 12px;
          align-items: flex-start;
        }

        .strength-icon {
          color: var(--accent-lavender);
          margin-top: 2px;
          flex-shrink: 0;
        }

        .strength-content {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .strength-title {
          font-size: 9px;
          letter-spacing: 0.08em;
          color: var(--accent-lavender);
          font-weight: 600;
        }

        .strength-content p {
          font-size: 12px;
          color: var(--text-muted-light);
          line-height: 1.4;
        }

        @media (max-width: 900px) {
          .simulator-grid {
            grid-template-columns: 1fr;
            gap: 32px;
          }
        }
      `})]})}function v3({onToggleBack:e}){const t=()=>{window.print()};return s.jsxs("div",{className:"recruiter-resume-view",children:[s.jsxs("div",{className:"resume-controls no-print",children:[s.jsxs("button",{className:"btn btn-secondary back-visual-btn",onClick:e,children:[s.jsx(ok,{size:16}),s.jsx("span",{children:"Back to Interactive 3D Portfolio"})]}),s.jsxs("button",{className:"btn btn-primary print-resume-btn",onClick:t,children:[s.jsx(Nk,{size:16}),s.jsx("span",{children:"Print / Save PDF Resume"})]})]}),s.jsxs("div",{className:"resume-paper",children:[s.jsxs("header",{className:"resume-header",children:[s.jsxs("div",{className:"header-left",children:[s.jsx("h1",{children:"Rahul Garg"}),s.jsx("span",{className:"subtitle",children:"Mid-Level Software Engineer // Full Stack Developer"}),s.jsx("p",{className:"summary",children:"Highly motivated and results-oriented software engineer with over 4 years of hands-on experience designing and deploying high-volume API routing, asynchronous event streaming (Kafka), low-latency cache architectures (Redis), and secure government SQL schemas. Proven track record leading developer squads and automating complex business processes."})]}),s.jsxs("div",{className:"header-right contact-list",children:[s.jsxs("div",{className:"contact-line",children:[s.jsx(Ml,{size:14}),s.jsx("a",{href:"mailto:gargr0109@gmail.com",children:"gargr0109@gmail.com"})]}),s.jsxs("div",{className:"contact-line",children:[s.jsx(pa,{size:14}),s.jsx("a",{href:"tel:+917807221279",children:"+91 78072 21279"})]}),s.jsxs("div",{className:"contact-line",children:[s.jsx(uu,{size:14}),s.jsx("a",{href:"https://linkedin.com",target:"_blank",rel:"noreferrer",children:"linkedin.com/in/rahulgarg"})]}),s.jsxs("div",{className:"contact-line",children:[s.jsx(sl,{size:14}),s.jsx("a",{href:"https://github.com",target:"_blank",rel:"noreferrer",children:"github.com/rahulgarg"})]}),s.jsx("div",{className:"contact-line font-mono text-xs",children:"🏠 Sector 94 JLPL Mohali, India"})]})]}),s.jsxs("section",{className:"resume-section",children:[s.jsx("h2",{children:"Professional Work Experience"}),s.jsxs("div",{className:"resume-job",children:[s.jsxs("div",{className:"job-header",children:[s.jsxs("div",{className:"job-title-company",children:[s.jsx("strong",{children:"Mid Level Software Engineer"}),s.jsx("span",{className:"divider",children:"|"}),s.jsx("span",{children:"Jupitice Justice Technologies Pvt. Ltd."})]}),s.jsx("span",{className:"job-duration",children:"Aug 2025 – Present"})]}),s.jsx("span",{className:"job-location",children:"Chandigarh IT Park, India"}),s.jsxs("ul",{className:"job-bullets",children:[s.jsx("li",{children:"Worked on Supreme Court and High Court official websites, fetching and processing real-time judicial data and integrating it into production-grade applications."}),s.jsx("li",{children:"Developed and integrated Offline KYC (Know Your Customer) solutions for real-world use cases, ensuring data accuracy, validation, and compliance."}),s.jsx("li",{children:"Fetched and processed NHAI (National Highways Authority of India) data, structured large datasets, and prepared them for government database insertion."}),s.jsx("li",{children:"Designed and optimized database schemas for high-volume government data handling and reduced read latencies by implementing Redis cache tiers."}),s.jsx("li",{children:"Integrated Meta Business API webhooks for WhatsApp Business notification triggers in automated transaction streams."}),s.jsx("li",{children:"Deployed feature branches across multiple staging/production servers, collaborating directly with QA engineers."})]})]}),s.jsxs("div",{className:"resume-job",children:[s.jsxs("div",{className:"job-header",children:[s.jsxs("div",{className:"job-title-company",children:[s.jsx("strong",{children:"MERN Full Stack Developer"}),s.jsx("span",{className:"divider",children:"|"}),s.jsx("span",{children:"Basta Tech Solutions Pvt. Ltd."})]}),s.jsx("span",{className:"job-duration",children:"Oct 2023 – July 2025"})]}),s.jsx("span",{className:"job-location",children:"Mohali, India"}),s.jsxs("ul",{className:"job-bullets",children:[s.jsxs("li",{children:["Led a developer squad of 4 in designing and deploying ",s.jsx("strong",{children:"BastaxCasino"}),", a full-stack casino gaming platform for European markets, using NodeJS, ReactJS, MongoDB, and Nginx."]}),s.jsx("li",{children:"Architected the MongoDB schema from scratch, optimizing real-time transaction processing, bets logging, and achieving 99.9% uptime."}),s.jsx("li",{children:"Developed 100+ RESTful APIs using Node.js for game betting, affiliate commission tracking (2%), and admin dashboards."}),s.jsx("li",{children:"Configured microservices for Banking transactions incorporating Redis caches and Kafka event streams."}),s.jsx("li",{children:"Tested iGaming API connections between RGS and slot games, analyzing logs for regulatory compliance audits."}),s.jsx("li",{children:"Designed APIs with Swagger documentation and resolved security/quality issues identified by SonarQube."})]})]}),s.jsxs("div",{className:"resume-job",children:[s.jsxs("div",{className:"job-header",children:[s.jsxs("div",{className:"job-title-company",children:[s.jsx("strong",{children:"Full Stack MERN Developer"}),s.jsx("span",{className:"divider",children:"|"}),s.jsx("span",{children:"Zapbuild Technologies"})]}),s.jsx("span",{className:"job-duration",children:"Mar 2022 – Oct 2023"})]}),s.jsx("span",{className:"job-location",children:"Mohali, India"}),s.jsxs("ul",{className:"job-bullets",children:[s.jsx("li",{children:"Created a full-stack data warehousing system from the ground up utilizing Express.js, React, and Material UI."}),s.jsx("li",{children:"Developed custom role-based APIs from scratch to support admin, suppliers, and customer streams."}),s.jsx("li",{children:"Established efficient database schemas and tables in MySQL for inventory ledger management."})]})]})]}),s.jsxs("section",{className:"resume-section",children:[s.jsx("h2",{children:"Technical Expertise & Skills"}),s.jsxs("div",{className:"skills-grid-resume",children:[s.jsxs("div",{className:"skills-col",children:[s.jsx("strong",{children:"Languages:"})," JavaScript (ES6+), TypeScript, C++ (Competitive DSA), HTML5, CSS3"]}),s.jsxs("div",{className:"skills-col",children:[s.jsx("strong",{children:"Frameworks:"})," Node.js, Express.js, React.js, Next.js, Material UI"]}),s.jsxs("div",{className:"skills-col",children:[s.jsx("strong",{children:"Databases:"})," MySQL, MongoDB, Redis (In-memory storage)"]}),s.jsxs("div",{className:"skills-col",children:[s.jsx("strong",{children:"Brokerage & Tools:"})," Apache Kafka, Nginx, PM2, Docker, Git, Swagger, SonarQube"]})]})]}),s.jsxs("section",{className:"resume-section",children:[s.jsx("h2",{children:"Key Engineering Deployments"}),s.jsxs("div",{className:"resume-project",children:[s.jsx("strong",{children:"BastaxCasino"}),": Integrated betting algorithms, affiliate ledgers, and European regulatory compliance panels. (React + Node.js + MongoDB)."]}),s.jsxs("div",{className:"resume-project",children:[s.jsx("strong",{children:"Zapier, Google Calendar & Office 365 Automation"}),": Dynamic automated task pipeline triggered by API webhooks."]}),s.jsxs("div",{className:"resume-project",children:[s.jsx("strong",{children:"Decentralized AI & Blockchain Application"}),": Web3 RBAC implementation modeled after the UMA Protocol."]}),s.jsxs("div",{className:"resume-project",children:[s.jsx("strong",{children:"Food Store E-Commerce Platform"}),": E-commerce shopping cart, payment gateways, and admin consoles."]})]}),s.jsxs("section",{className:"resume-section",children:[s.jsx("h2",{children:"Achievements & Standing"}),s.jsxs("ul",{className:"achievements-bullets",children:[s.jsxs("li",{children:[s.jsx("strong",{children:"GeeksForGeeks Campus Rank 1st"}),": CGC Landran Campus. Solved over 1500+ problems across GFG & LeetCode."]}),s.jsxs("li",{children:[s.jsx("strong",{children:"LeetCode Maximum Rating 1753"}),": 3 Star Developer status."]}),s.jsxs("li",{children:[s.jsx("strong",{children:"ICPC regionals Rank 613"}),": Team Rank 613 in ICPC Amritapuri Regionals 2021."]}),s.jsxs("li",{children:[s.jsx("strong",{children:"Educator & Mentor"}),": Guides over 200+ engineering students in coding foundations, and hosts a DSA/MERN technical YouTube channel."]})]})]})]}),s.jsx("style",{children:`
        .recruiter-resume-view {
          background-color: #f1f5f9;
          min-height: 100vh;
          padding: 40px 20px;
          display: flex;
          flex-direction: column;
          align-items: center;
          color: #1e293b;
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
        }

        .resume-controls {
          display: flex;
          justify-content: space-between;
          width: 100%;
          max-width: 800px;
          margin-bottom: 24px;
        }

        .resume-paper {
          background-color: #ffffff;
          width: 100%;
          max-width: 800px;
          padding: 56px;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
          border-radius: 4px;
          display: flex;
          flex-direction: column;
          gap: 30px;
        }

        .resume-header {
          display: flex;
          justify-content: space-between;
          border-bottom: 2px solid #0f172a;
          padding-bottom: 20px;
          gap: 20px;
        }

        .header-left {
          flex-grow: 1;
        }

        .resume-header h1 {
          font-size: 32px;
          font-weight: 800;
          color: #0f172a;
          line-height: 1.1;
        }

        .resume-header .subtitle {
          font-size: 13px;
          font-weight: 600;
          color: var(--accent-purple);
          text-transform: uppercase;
          letter-spacing: 0.05em;
          display: inline-block;
          margin: 6px 0 12px 0;
        }

        .resume-header .summary {
          font-size: 12.5px;
          line-height: 1.5;
          color: #475569;
        }

        .contact-list {
          display: flex;
          flex-direction: column;
          gap: 8px;
          flex-shrink: 0;
          align-items: flex-end;
          justify-content: center;
        }

        .contact-line {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 12px;
        }

        .contact-line a {
          color: #0f172a;
          text-decoration: none;
        }

        .contact-line a:hover {
          text-decoration: underline;
        }

        .resume-section h2 {
          font-size: 14px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: #0f172a;
          border-bottom: 1px solid #cbd5e1;
          padding-bottom: 6px;
          margin-bottom: 16px;
        }

        .resume-job {
          margin-bottom: 20px;
        }

        .resume-job:last-child {
          margin-bottom: 0;
        }

        .job-header {
          display: flex;
          justify-content: space-between;
          font-size: 13px;
        }

        .job-title-company {
          color: #0f172a;
        }

        .job-title-company strong {
          font-weight: 700;
        }

        .job-title-company .divider {
          color: #94a3b8;
          margin: 0 8px;
        }

        .job-duration {
          color: #475569;
          font-weight: 500;
        }

        .job-location {
          font-size: 11px;
          color: #64748b;
          display: block;
          margin: 2px 0 8px 0;
        }

        .job-bullets {
          padding-left: 18px;
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .job-bullets li {
          font-size: 12px;
          line-height: 1.5;
          color: #334155;
        }

        .skills-grid-resume {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 12px;
        }

        .skills-col {
          font-size: 12px;
          color: #334155;
          line-height: 1.4;
        }

        .skills-col strong {
          color: #0f172a;
          font-weight: 600;
        }

        .resume-project {
          font-size: 12px;
          color: #334155;
          margin-bottom: 8px;
        }

        .resume-project strong {
          color: #0f172a;
        }

        .achievements-bullets {
          padding-left: 18px;
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .achievements-bullets li {
          font-size: 12px;
          color: #334155;
        }

        /* Print media layout overrides */
        @media print {
          body {
            background-color: #ffffff !important;
          }
          .recruiter-resume-view {
            background-color: #ffffff !important;
            padding: 0 !important;
          }
          .no-print {
            display: none !important;
          }
          .resume-paper {
            padding: 0 !important;
            box-shadow: none !important;
            max-width: 100% !important;
          }
        }
      `})]})}function $g({height:e="300px"}){return s.jsxs("div",{className:"skeleton-wrapper",style:{height:e},children:[s.jsx("div",{className:"skeleton-glow"}),s.jsxs("div",{className:"skeleton-content",children:[s.jsx("div",{className:"skeleton-tag-bar"}),s.jsx("div",{className:"skeleton-title-bar"}),s.jsx("div",{className:"skeleton-line-bar short"}),s.jsx("div",{className:"skeleton-line-bar"}),s.jsx("div",{className:"skeleton-line-bar medium"})]}),s.jsx("style",{children:`
        .skeleton-wrapper {
          width: 100%;
          background: rgba(17, 28, 45, 0.4);
          border: 1px solid rgba(245, 243, 239, 0.08);
          border-radius: 12px;
          position: relative;
          overflow: hidden;
          padding: 32px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          gap: 16px;
        }

        .skeleton-glow {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            90deg,
            rgba(255, 255, 255, 0) 0%,
            rgba(255, 255, 255, 0.03) 50%,
            rgba(255, 255, 255, 0) 100%
          );
          transform: translateX(-100%);
          animation: pulseGlow 1.8s infinite;
        }

        @keyframes pulseGlow {
          100% {
            transform: translateX(100%);
          }
        }

        .skeleton-content {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .skeleton-tag-bar {
          height: 10px;
          width: 80px;
          background-color: rgba(245, 243, 239, 0.06);
          border-radius: 4px;
        }

        .skeleton-title-bar {
          height: 24px;
          width: 260px;
          background-color: rgba(245, 243, 239, 0.08);
          border-radius: 4px;
          margin-bottom: 8px;
        }

        .skeleton-line-bar {
          height: 12px;
          width: 100%;
          background-color: rgba(245, 243, 239, 0.05);
          border-radius: 4px;
        }

        .skeleton-line-bar.medium {
          width: 80%;
        }

        .skeleton-line-bar.short {
          width: 60%;
        }
      `})]})}const Yc=[{title:"WhatsApp Webhook Integration",lang:"javascript",color:"#68d391",code:`// Meta WhatsApp Business API Webhook
router.post('/webhook/whatsapp', validateMetaSignature, async (req, res) => {
  const { entry } = req.body;
  const message = entry[0].changes[0].value.messages?.[0];
  
  if (message?.type === 'text') {
    // Publish to Kafka topic for async processing
    await kafkaProducer.send({
      topic: 'whatsapp-inbound',
      messages: [{ key: message.from, value: JSON.stringify(message) }]
    });
    
    // Auto-reply via Redis cache lookup
    const template = await redis.get(\`reply_template:\${message.text.body.toLowerCase()}\`);
    if (template) await sendWhatsAppMessage(message.from, template);
  }
  
  res.status(200).json({ status: 'EVENT_RECEIVED' });
});`},{title:"Redis Cache Interceptor Pattern",lang:"javascript",color:"#fc8181",code:`// Production Redis cache-aside pattern
const cacheMiddleware = (ttl = 3600) => async (req, res, next) => {
  const cacheKey = \`api_cache:\${req.originalUrl}\`;
  
  try {
    const cached = await redis.get(cacheKey);
    if (cached) {
      return res.json({ 
        ...JSON.parse(cached), 
        _cache: { hit: true, ttl: await redis.ttl(cacheKey) } 
      });
    }
  } catch (e) { /* Cache miss - proceed to DB */ }
  
  // Intercept response to cache it
  const originalJson = res.json.bind(res);
  res.json = (data) => {
    redis.setex(cacheKey, ttl, JSON.stringify(data));
    return originalJson(data);
  };
  next();
};

// Latency: 150ms → 4ms 🚀`},{title:"Kafka Bet Transaction Producer",lang:"javascript",color:"#b794f4",code:`// Apache Kafka - High-volume bet ingestion
const { Kafka, Partitioners } = require('kafkajs');
const kafka = new Kafka({ brokers: ['kafka:9092'] });

const producer = kafka.producer({ 
  createPartitioner: Partitioners.RoundRobin,
  retry: { retries: 5, initialRetryTime: 300 }
});

const publishBetEvent = async (bet) => {
  await producer.send({
    topic: 'bet-transactions',
    messages: [{
      key: bet.userId,           // Partition by user
      value: JSON.stringify(bet),
      headers: { source: 'casino-api', priority: bet.amount > 1000 ? 'high' : 'low' }
    }]
  });
  
  // Telemetry: 50k+ events/day processed ⚡
};`},{title:"Court Case ETL Scraper Pipeline",lang:"javascript",color:"#f6ad55",code:`// Supreme Court data pipeline - ETL with rate limiting
const scrapeCourtCases = async (date) => {
  const cases = [];
  const RATE_LIMIT_MS = 800; // Respect target server limits
  
  for await (const caseId of getCaseIdIterator(date)) {
    // Redis deduplication check
    const isDuplicate = await redis.sismember('scraped_cases', caseId);
    if (isDuplicate) continue;
    
    const caseData = await fetchWithRetry(\`/cases/\${caseId}\`, {
      timeout: 5000, retries: 3
    });
    
    // Batch upsert to MySQL - optimized for 10k+ daily records
    cases.push(transformCaseData(caseData));
    
    if (cases.length >= 100) {
      await db.batchUpsert('judicial_cases', cases, ['case_id']);
      await redis.sadd('scraped_cases', ...cases.map(c => c.case_id));
      cases.length = 0;
    }
    
    await sleep(RATE_LIMIT_MS); // Rate limiting
  }
};`}];function b3(){const[e,t]=j.useState(0),[n,r]=j.useState(""),[i,a]=j.useState(!0),[o,l]=j.useState(!0),c=j.useRef(null),d=j.useRef(0);j.useEffect(()=>{const f=setInterval(()=>l(h=>!h),530);return()=>clearInterval(f)},[]),j.useEffect(()=>{r(""),a(!0),d.current=0;const h=Yc[e].code,m=()=>{if(d.current<h.length){r(h.slice(0,d.current+1)),d.current++;const y=h[d.current-1]===`
`?30:Math.random()<.05?80:12;c.current=setTimeout(m,y)}else a(!1)};return c.current=setTimeout(m,400),()=>clearTimeout(c.current)},[e]);const u=Yc[e],p=f=>f.replace(/(\/\/.*)/g,'<span class="c-comment">$1</span>').replace(/\b(const|let|var|async|await|return|if|for|of|await|import|require|try|catch)\b/g,'<span class="c-kw">$1</span>').replace(/\b(true|false|null|undefined)\b/g,'<span class="c-bool">$1</span>').replace(/('.*?'|`[\s\S]*?`|".*?")/g,'<span class="c-str">$1</span>').replace(/\b(\d+)\b/g,'<span class="c-num">$1</span>');return s.jsxs("section",{id:"live-code",className:"code-showcase-section dark-section",children:[s.jsxs("div",{className:"container",children:[s.jsx("span",{className:"section-tag",style:{color:"var(--accent-lavender)"},children:"Real Code I've Written"}),s.jsx("h2",{className:"section-title light",children:"Live Code Showcase"}),s.jsx("p",{className:"section-subtitle light",children:"Actual production code patterns from my 3+ years building enterprise systems. Watch it type in real time."}),s.jsxs("div",{className:"code-showcase-grid",children:[s.jsxs("div",{className:"snippet-selector",children:[Yc.map((f,h)=>s.jsxs("button",{onClick:()=>t(h),className:`snippet-tab ${e===h?"active":""}`,style:e===h?{borderColor:f.color,color:f.color}:{},children:[s.jsx("span",{className:"tab-dot",style:{background:f.color}}),f.title]},h)),s.jsxs("div",{className:"code-stats-mini",children:[s.jsxs("div",{className:"stat-row-mini",children:[s.jsx("span",{children:"3+ years"}),s.jsx("span",{className:"stat-val-mini",children:"Enterprise"})]}),s.jsxs("div",{className:"stat-row-mini",children:[s.jsx("span",{children:"100+ APIs"}),s.jsx("span",{className:"stat-val-mini",children:"Built"})]}),s.jsxs("div",{className:"stat-row-mini",children:[s.jsx("span",{children:"50k+ events"}),s.jsx("span",{className:"stat-val-mini",children:"Daily"})]})]})]}),s.jsxs("div",{className:"code-terminal-box",children:[s.jsxs("div",{className:"code-term-bar",children:[s.jsxs("div",{className:"code-term-dots",children:[s.jsx("span",{className:"dot-r"}),s.jsx("span",{className:"dot-y"}),s.jsx("span",{className:"dot-g"})]}),s.jsxs("span",{className:"code-term-title font-mono",children:[u.title,".js"]}),s.jsx("span",{className:"lang-badge font-mono",style:{color:u.color},children:"● LIVE"})]}),s.jsxs("div",{className:"code-area font-mono",children:[s.jsx("div",{className:"line-numbers",children:n.split(`
`).map((f,h)=>s.jsx("span",{children:h+1},h))}),s.jsx("pre",{className:"code-content",dangerouslySetInnerHTML:{__html:p(n)+(i||o?'<span class="c-cursor">|</span>':"")}})]}),!i&&s.jsxs("div",{className:"code-footer-bar",children:[s.jsxs("span",{className:"c-success font-mono",children:["✓ Snippet rendered — ",u.code.split(`
`).length," lines"]}),s.jsx("button",{className:"replay-btn font-mono",onClick:()=>t(f=>f),onMouseDown:()=>{r(""),d.current=0,a(!0),t(f=>f)},children:"↺ Replay"})]})]})]})]}),s.jsx("style",{children:`
        .code-showcase-section {
          background: linear-gradient(180deg, var(--bg-darker) 0%, #050810 100%);
          border-bottom: 1px solid rgba(245,243,239,0.08);
        }

        .code-showcase-grid {
          display: grid;
          grid-template-columns: 300px 1fr;
          gap: 32px;
          align-items: start;
        }

        .snippet-selector {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .snippet-tab {
          text-align: left;
          background: rgba(245,243,239,0.03);
          border: 1px solid rgba(245,243,239,0.08);
          border-radius: 8px;
          padding: 12px 16px;
          color: rgba(245,243,239,0.5);
          font-size: 12px;
          font-family: var(--font-sans);
          cursor: pointer;
          transition: all 0.2s;
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .snippet-tab:hover {
          background: rgba(245,243,239,0.06);
          color: rgba(245,243,239,0.9);
        }

        .snippet-tab.active {
          background: rgba(94,90,209,0.1);
          color: var(--accent-lavender);
          font-weight: 600;
        }

        .tab-dot {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          flex-shrink: 0;
        }

        .code-stats-mini {
          margin-top: 20px;
          background: rgba(94,90,209,0.08);
          border: 1px solid rgba(94,90,209,0.2);
          border-radius: 10px;
          padding: 16px;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .stat-row-mini {
          display: flex;
          justify-content: space-between;
          font-size: 12px;
          color: rgba(245,243,239,0.5);
          font-family: var(--font-mono);
        }

        .stat-val-mini {
          color: var(--accent-lavender);
          font-weight: 600;
        }

        /* Terminal */
        .code-terminal-box {
          background: #050810;
          border: 1px solid rgba(16,185,129,0.2);
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 20px 50px rgba(0,0,0,0.5), 0 0 20px rgba(16,185,129,0.05);
        }

        .code-term-bar {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 12px 20px;
          background: #0d1222;
          border-bottom: 1px solid rgba(16,185,129,0.1);
        }

        .code-term-dots { display: flex; gap: 6px; }
        .dot-r { width: 10px; height: 10px; border-radius: 50%; background: #ef4444; }
        .dot-y { width: 10px; height: 10px; border-radius: 50%; background: #f59e0b; }
        .dot-g { width: 10px; height: 10px; border-radius: 50%; background: #10b981; }

        .code-term-title {
          flex: 1;
          font-size: 12px;
          color: rgba(245,243,239,0.5);
        }

        .lang-badge {
          font-size: 11px;
          animation: blink 1s infinite;
        }
        @keyframes blink { 0%,100% { opacity:1; } 50% { opacity:0.3; } }

        .code-area {
          display: flex;
          padding: 20px;
          min-height: 280px;
          max-height: 380px;
          overflow: auto;
          gap: 16px;
        }

        .line-numbers {
          display: flex;
          flex-direction: column;
          color: rgba(245,243,239,0.2);
          font-size: 12px;
          line-height: 1.65;
          min-width: 24px;
          text-align: right;
          user-select: none;
        }

        .code-content {
          font-size: 12.5px;
          line-height: 1.65;
          color: #e2e8f0;
          white-space: pre-wrap;
          flex: 1;
        }

        /* Syntax colors */
        .c-comment { color: #4a5568; font-style: italic; }
        .c-kw { color: #b794f4; }
        .c-str { color: #68d391; }
        .c-num { color: #f6ad55; }
        .c-bool { color: #fc8181; }
        .c-cursor { color: #10b981; animation: blink 0.8s infinite; }
        .c-success { color: #10b981; }

        .code-footer-bar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 10px 20px;
          background: rgba(16,185,129,0.05);
          border-top: 1px solid rgba(16,185,129,0.1);
        }

        .replay-btn {
          font-size: 11px;
          background: none;
          border: 1px solid rgba(16,185,129,0.3);
          color: #10b981;
          border-radius: 4px;
          padding: 4px 10px;
          cursor: pointer;
          transition: 0.2s;
        }
        .replay-btn:hover { background: rgba(16,185,129,0.1); }

        @media (max-width: 900px) {
          .code-showcase-grid { grid-template-columns: 1fr; }
        }
      `})]})}const Uu=[{id:"client",label:"Client Browser",icon:"🌐",x:8,y:42,color:"#63b3ed"},{id:"cdn",label:"Nginx / CDN",icon:"⚡",x:25,y:18,color:"#68d391"},{id:"lb",label:"Load Balancer",icon:"⚖️",x:25,y:65,color:"#f6ad55"},{id:"api",label:"Node.js API",icon:"🔧",x:47,y:42,color:"#b794f4"},{id:"redis",label:"Redis Cache",icon:"🔴",x:65,y:20,color:"#fc8181"},{id:"kafka",label:"Kafka Broker",icon:"📨",x:65,y:65,color:"#fbd38d"},{id:"db",label:"MySQL Primary",icon:"🗄️",x:85,y:42,color:"#9ae6b4"},{id:"replica",label:"Read Replica",icon:"📋",x:85,y:72,color:"#76e4f7"}],Xc=[{from:"client",to:"cdn",label:"HTTPS",active:!0,color:"#63b3ed"},{from:"client",to:"lb",label:"REST",active:!0,color:"#63b3ed"},{from:"cdn",to:"api",label:"proxy",active:!0,color:"#68d391"},{from:"lb",to:"api",label:"round-robin",active:!0,color:"#f6ad55"},{from:"api",to:"redis",label:"GET key",active:!0,color:"#fc8181"},{from:"api",to:"kafka",label:"publish",active:!0,color:"#fbd38d"},{from:"api",to:"db",label:"query",active:!0,color:"#b794f4"},{from:"kafka",to:"db",label:"consume",active:!0,color:"#fbd38d"},{from:"db",to:"replica",label:"replicate",active:!0,color:"#9ae6b4"},{from:"replica",to:"api",label:"read",active:!0,color:"#76e4f7"}];function yr(e){return Uu.find(t=>t.id===e)}function w3(){j.useRef(null),j.useRef(null);const[e,t]=j.useState(null),[n,r]=j.useState([]),[i,a]=j.useState(1247),[o,l]=j.useState(4),[c,d]=j.useState(94.2);j.useEffect(()=>{const h=setInterval(()=>{a(m=>Math.max(800,Math.min(1800,m+Math.round((Math.random()-.48)*40)))),l(m=>Math.max(2,Math.min(18,+(m+(Math.random()-.5)*1.5).toFixed(1)))),d(m=>Math.max(88,Math.min(99,+(m+(Math.random()-.5)*.5).toFixed(1))))},1200);return()=>clearInterval(h)},[]);const p=e?{client:{title:"Client Browser",desc:"React SPA served via Nginx CDN. Sends REST API calls with JWT auth headers.",latency:"~0ms",tech:"React.js + Vite"},cdn:{title:"Nginx / CDN",desc:"Static asset caching, SSL termination, gzip compression, and reverse proxy routing.",latency:"<1ms",tech:"Nginx + Cloudfront"},lb:{title:"Load Balancer",desc:"Round-robin request distribution across Node.js instances. Health checks every 10s.",latency:"<2ms",tech:"PM2 Cluster Mode"},api:{title:"Node.js API Gateway",desc:"Express.js microservices with JWT validation, rate limiting, and Swagger docs.",latency:"5-15ms",tech:"Express + NestJS"},redis:{title:"Redis Cache",desc:"Key-value cache with TTL expiry. Reduces DB load by 94%+. LRU eviction policy.",latency:"0.5-2ms",tech:"Redis 7 + ioredis"},kafka:{title:"Apache Kafka",desc:"Event streaming for bet transactions, WhatsApp webhooks, and audit logs. 50k events/day.",latency:"10-50ms",tech:"KafkaJS + Docker"},db:{title:"MySQL Primary",desc:"ACID-compliant writes. Compound B-Tree indexes on hot query paths. Connection pooling.",latency:"8-25ms",tech:"MySQL 8 + TypeORM"},replica:{title:"Read Replica",desc:"Async replication. All SELECT queries routed here to protect write master.",latency:"10-30ms",tech:"MySQL Replica"}}[e]:null,f=e?yr(e):null;return s.jsxs("section",{id:"arch-flow",className:"arch-flow-section dark-section",children:[s.jsx("div",{className:"system-grid-overlay"}),s.jsxs("div",{className:"container",children:[s.jsx("span",{className:"section-tag",style:{color:"var(--accent-lavender)"},children:"Live Architecture"}),s.jsx("h2",{className:"section-title light",children:"Real-Time System Architecture"}),s.jsx("p",{className:"section-subtitle light",children:"Interactive diagram of how Rahul designs production systems. Click any node to inspect its role, latency, and tech stack."}),s.jsxs("div",{className:"live-metrics-bar",children:[s.jsxs("div",{className:"metric-pill",children:[s.jsx("span",{className:"pulse-dot green"}),s.jsx("span",{className:"met-label font-mono",children:"REQ/SEC"}),s.jsx("span",{className:"met-value font-mono green",children:i.toLocaleString()})]}),s.jsxs("div",{className:"metric-pill",children:[s.jsx("span",{className:"pulse-dot cyan"}),s.jsx("span",{className:"met-label font-mono",children:"LATENCY"}),s.jsxs("span",{className:"met-value font-mono cyan",children:[o,"ms"]})]}),s.jsxs("div",{className:"metric-pill",children:[s.jsx("span",{className:"pulse-dot purple"}),s.jsx("span",{className:"met-label font-mono",children:"CACHE HIT"}),s.jsxs("span",{className:"met-value font-mono purple",children:[c,"%"]})]}),s.jsxs("div",{className:"metric-pill",children:[s.jsx("span",{className:"pulse-dot orange"}),s.jsx("span",{className:"met-label font-mono",children:"UPTIME"}),s.jsx("span",{className:"met-value font-mono orange",children:"99.9%"})]})]}),s.jsxs("div",{className:"arch-layout",children:[s.jsx("div",{className:"arch-diagram-card",children:s.jsxs("svg",{viewBox:"0 0 100 90",className:"arch-svg",preserveAspectRatio:"xMidYMid meet",children:[s.jsxs("defs",{children:[s.jsx("marker",{id:"arrowBlue",markerWidth:"5",markerHeight:"5",refX:"3",refY:"2.5",orient:"auto",children:s.jsx("polygon",{points:"0 0, 5 2.5, 0 5",fill:"#63b3ed",opacity:"0.6"})}),s.jsx("marker",{id:"arrowGreen",markerWidth:"5",markerHeight:"5",refX:"3",refY:"2.5",orient:"auto",children:s.jsx("polygon",{points:"0 0, 5 2.5, 0 5",fill:"#68d391",opacity:"0.6"})}),s.jsx("marker",{id:"arrowOrange",markerWidth:"5",markerHeight:"5",refX:"3",refY:"2.5",orient:"auto",children:s.jsx("polygon",{points:"0 0, 5 2.5, 0 5",fill:"#f6ad55",opacity:"0.6"})}),s.jsx("marker",{id:"arrowPurple",markerWidth:"5",markerHeight:"5",refX:"3",refY:"2.5",orient:"auto",children:s.jsx("polygon",{points:"0 0, 5 2.5, 0 5",fill:"#b794f4",opacity:"0.6"})}),s.jsxs("filter",{id:"glow",children:[s.jsx("feGaussianBlur",{stdDeviation:"1",result:"coloredBlur"}),s.jsxs("feMerge",{children:[s.jsx("feMergeNode",{in:"coloredBlur"}),s.jsx("feMergeNode",{in:"SourceGraphic"})]})]})]}),Xc.map((h,m)=>{const y=yr(h.from),k=yr(h.to);return!y||!k?null:s.jsx("line",{x1:y.x,y1:y.y,x2:k.x,y2:k.y,stroke:h.color,strokeWidth:"0.4",strokeOpacity:"0.35",strokeDasharray:"2 3",className:"arch-conn-line",style:{animationDelay:`${m*.3}s`}},m)}),Xc.map((h,m)=>{const y=yr(h.from),k=yr(h.to);return!y||!k?null:s.jsx("circle",{r:"0.8",fill:h.color,opacity:"0.9",filter:"url(#glow)",children:s.jsx("animateMotion",{dur:`${1.5+m*.4}s`,repeatCount:"indefinite",begin:`${m*.5}s`,children:s.jsx("mpath",{href:`#path-${m}`})})},`pkt-${m}`)}),Xc.map((h,m)=>{const y=yr(h.from),k=yr(h.to);return!y||!k?null:s.jsx("path",{id:`path-${m}`,d:`M${y.x},${y.y} L${k.x},${k.y}`,fill:"none",stroke:"none"},`path-${m}`)}),Uu.map(h=>s.jsxs("g",{onClick:()=>t(m=>m===h.id?null:h.id),style:{cursor:"pointer"},className:`arch-node-group ${e===h.id?"selected":""}`,children:[e===h.id&&s.jsxs("circle",{cx:h.x,cy:h.y,r:"7",fill:h.color,opacity:"0.15",children:[s.jsx("animate",{attributeName:"r",values:"5;8;5",dur:"1.5s",repeatCount:"indefinite"}),s.jsx("animate",{attributeName:"opacity",values:"0.15;0.3;0.15",dur:"1.5s",repeatCount:"indefinite"})]}),s.jsx("circle",{cx:h.x,cy:h.y,r:"5",fill:"#0e1725",stroke:h.color,strokeWidth:e===h.id?1.2:.8,filter:e===h.id?"url(#glow)":""}),s.jsx("text",{x:h.x,y:h.y+.8,textAnchor:"middle",dominantBaseline:"middle",fontSize:"3.5",fill:h.color,children:h.icon}),s.jsx("text",{x:h.x,y:h.y+7.5,textAnchor:"middle",fontSize:"2.2",fill:"rgba(245,243,239,0.7)",children:h.label})]},h.id))]})}),s.jsxs("div",{className:"arch-inspector",children:[p?s.jsxs("div",{className:"inspector-content",style:{borderColor:f==null?void 0:f.color},children:[s.jsxs("div",{className:"inspector-header",style:{borderColor:(f==null?void 0:f.color)+"40"},children:[s.jsx("span",{className:"insp-title",children:p.title}),s.jsx("span",{className:"insp-latency font-mono",style:{color:f==null?void 0:f.color},children:p.latency})]}),s.jsx("p",{className:"insp-desc",children:p.desc}),s.jsxs("div",{className:"insp-tech font-mono",style:{color:f==null?void 0:f.color},children:[s.jsx("span",{children:"TECH_STACK:"})," ",p.tech]}),s.jsxs("div",{className:"insp-metrics",children:[s.jsxs("div",{className:"insp-metric",children:[s.jsx("span",{children:"Avg Latency"}),s.jsx("strong",{style:{color:f==null?void 0:f.color},children:p.latency})]}),s.jsxs("div",{className:"insp-metric",children:[s.jsx("span",{children:"Status"}),s.jsx("strong",{className:"status-ok",children:"● OPERATIONAL"})]})]})]}):s.jsxs("div",{className:"inspector-placeholder font-mono",children:[s.jsx("div",{className:"inspector-icon",children:"🏗️"}),s.jsx("p",{children:"Click any node in the diagram"}),s.jsx("span",{children:"Inspect role, latency, and tech stack"})]}),s.jsxs("div",{className:"arch-legend",children:[s.jsx("div",{className:"legend-title font-mono",children:"NODE LEGEND"}),Uu.map(h=>s.jsxs("div",{className:"legend-row",onClick:()=>t(h.id),children:[s.jsx("span",{className:"legend-dot",style:{background:h.color}}),s.jsx("span",{className:"legend-label",children:h.label})]},h.id))]})]})]})]}),s.jsx("style",{children:`
        .arch-flow-section {
          background: var(--bg-darker);
          border-bottom: 1px solid rgba(245,243,239,0.08);
          position: relative;
          overflow: hidden;
        }

        .live-metrics-bar {
          display: flex;
          gap: 16px;
          flex-wrap: wrap;
          margin-bottom: 36px;
        }

        .metric-pill {
          background: rgba(245,243,239,0.04);
          border: 1px solid rgba(245,243,239,0.1);
          border-radius: 100px;
          padding: 8px 20px;
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 12px;
        }

        .pulse-dot {
          width: 7px; height: 7px; border-radius: 50%;
          animation: pulseMetric 1.5s infinite;
        }
        .pulse-dot.green { background: #10b981; box-shadow: 0 0 6px #10b981; }
        .pulse-dot.cyan { background: #38bdf8; box-shadow: 0 0 6px #38bdf8; }
        .pulse-dot.purple { background: #b794f4; box-shadow: 0 0 6px #b794f4; }
        .pulse-dot.orange { background: #f59e0b; box-shadow: 0 0 6px #f59e0b; }
        @keyframes pulseMetric { 0%,100%{opacity:1;} 50%{opacity:0.4;} }

        .met-label { color: rgba(245,243,239,0.4); font-size: 9px; letter-spacing: 0.1em; }
        .met-value { font-size: 14px; font-weight: 700; }
        .met-value.green { color: #10b981; }
        .met-value.cyan { color: #38bdf8; }
        .met-value.purple { color: #b794f4; }
        .met-value.orange { color: #f59e0b; }

        .arch-layout {
          display: grid;
          grid-template-columns: 1fr 320px;
          gap: 32px;
          align-items: start;
        }

        .arch-diagram-card {
          background: #05080e;
          border: 1px solid rgba(94,90,209,0.2);
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 0 20px 50px rgba(0,0,0,0.4), 0 0 30px rgba(94,90,209,0.05);
          padding: 20px;
        }

        .arch-svg {
          width: 100%;
          height: auto;
          min-height: 280px;
          display: block;
        }

        .arch-conn-line {
          animation: dashFlow 3s linear infinite;
        }
        @keyframes dashFlow {
          to { stroke-dashoffset: -20; }
        }

        .arch-node-group {
          transition: 0.2s;
        }
        .arch-node-group:hover circle { stroke-width: 1.5 !important; }

        /* Inspector */
        .arch-inspector {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .inspector-content {
          background: var(--bg-dark);
          border: 1.5px solid;
          border-radius: 12px;
          overflow: hidden;
          animation: fadeIn 0.3s ease;
        }

        .inspector-header {
          padding: 14px 18px;
          border-bottom: 1px solid;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .insp-title {
          font-size: 14px;
          font-weight: 600;
          color: var(--text-light);
        }

        .insp-latency {
          font-size: 11px;
          font-weight: 700;
        }

        .insp-desc {
          font-size: 12.5px;
          line-height: 1.5;
          color: var(--text-muted-light);
          padding: 14px 18px;
        }

        .insp-tech {
          font-size: 10px;
          padding: 0 18px 14px;
          letter-spacing: 0.05em;
        }

        .insp-metrics {
          display: grid;
          grid-template-columns: 1fr 1fr;
          border-top: 1px solid rgba(245,243,239,0.06);
        }

        .insp-metric {
          padding: 12px 18px;
          display: flex;
          flex-direction: column;
          gap: 4px;
          font-size: 11px;
          color: rgba(245,243,239,0.4);
          font-family: var(--font-mono);
        }

        .insp-metric strong { font-size: 13px; color: var(--text-light); }
        .status-ok { color: #10b981 !important; }

        .inspector-placeholder {
          background: var(--bg-dark);
          border: 1px dashed rgba(245,243,239,0.1);
          border-radius: 12px;
          padding: 32px 20px;
          text-align: center;
          color: rgba(245,243,239,0.3);
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 8px;
        }

        .inspector-icon { font-size: 36px; margin-bottom: 8px; }
        .inspector-placeholder p { font-size: 12px; color: rgba(245,243,239,0.5); }
        .inspector-placeholder span { font-size: 10px; }

        .arch-legend {
          background: var(--bg-dark);
          border: 1px solid rgba(245,243,239,0.06);
          border-radius: 12px;
          padding: 16px;
        }

        .legend-title {
          font-size: 9px;
          color: var(--accent-lavender);
          letter-spacing: 0.1em;
          margin-bottom: 12px;
        }

        .legend-row {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 5px 0;
          cursor: pointer;
          transition: 0.15s;
        }

        .legend-row:hover { opacity: 0.8; }

        .legend-dot {
          width: 7px; height: 7px;
          border-radius: 50%;
          flex-shrink: 0;
        }

        .legend-label {
          font-size: 11px;
          color: rgba(245,243,239,0.6);
        }

        @media (max-width: 900px) {
          .arch-layout { grid-template-columns: 1fr; }
        }
      `})]})}const Jc=[{id:1,icon:"🏆",tier:"GOLD",title:"LeetCode 1753 Rating",subtitle:"3-Star Developer",desc:"1500+ problems solved across GFG & LeetCode platforms",color:"#f6ad55",glow:"rgba(246,173,85,0.3)",stat:"1500+",statLabel:"Problems"},{id:2,icon:"🎰",tier:"PLATINUM",title:"BastaxCasino",subtitle:"iGaming Platform Architect",desc:"50k+ daily bet events processed, 99.9% uptime across European markets",color:"#b794f4",glow:"rgba(183,148,244,0.3)",stat:"99.9%",statLabel:"Uptime"},{id:3,icon:"⚖️",tier:"GOLD",title:"Jupitice Justice",subtitle:"Government Legal Pipelines",desc:"Supreme & High Court scraper processing 100k+ judicial records daily",color:"#68d391",glow:"rgba(104,211,145,0.3)",stat:"100k+",statLabel:"Records/Day"},{id:4,icon:"🥇",tier:"LEGENDARY",title:"Campus Rank #1",subtitle:"GeeksForGeeks — CGC Landran",desc:"Top ranked competitive programmer in entire campus history",color:"#fc8181",glow:"rgba(252,129,129,0.3)",stat:"#1",statLabel:"Campus Rank"},{id:5,icon:"📨",tier:"GOLD",title:"WhatsApp Webhooks",subtitle:"Meta Business API Integration",desc:"Production WhatsApp Business webhook system for enterprise notifications",color:"#76e4f7",glow:"rgba(118,228,247,0.3)",stat:"100+",statLabel:"APIs Built"},{id:6,icon:"🌐",tier:"SILVER",title:"ICPC Regionals 2021",subtitle:"Amritapuri Regional Contest",desc:"Team Rank 613 in prestigious ACM-ICPC Regional Competition",color:"#a0afee",glow:"rgba(160,175,238,0.3)",stat:"Rank 613",statLabel:"ICPC"}],k3={LEGENDARY:"linear-gradient(135deg, #f6d365, #fda085)",PLATINUM:"linear-gradient(135deg, #c3cfe2, #b794f4)",GOLD:"linear-gradient(135deg, #f6ad55, #fbd38d)",SILVER:"linear-gradient(135deg, #a0afee, #c3ccf6)"};function j3(){const[e,t]=j.useState(null),[n,r]=j.useState(null),[i,a]=j.useState([]);j.useEffect(()=>{if(e!==null){const l=Array.from({length:20},(d,u)=>{var p;return{id:Date.now()+u,x:Math.random()*100,delay:Math.random()*.5,color:((p=Jc[e])==null?void 0:p.color)||"#b794f4"}});a(l);const c=setTimeout(()=>a([]),2e3);return()=>clearTimeout(c)}},[e]);const o=e!==null?Jc[e]:null;return s.jsxs("section",{id:"trophy-room",className:"trophy-room-section",children:[s.jsxs("div",{className:"container",children:[s.jsx("span",{className:"section-tag",children:"Hall of Excellence"}),s.jsx("h2",{className:"section-title",children:"Achievement Trophy Room 🏆"}),s.jsx("p",{className:"section-subtitle",children:"Milestones from competitive programming, production systems, and enterprise engineering. Click any trophy to expand details."}),s.jsx("div",{className:"particle-container",children:i.map(l=>s.jsx("div",{className:"confetti-particle",style:{left:`${l.x}%`,background:l.color,animationDelay:`${l.delay}s`}},l.id))}),s.jsx("div",{className:"trophy-grid",children:Jc.map((l,c)=>s.jsxs("div",{className:`trophy-card ${e===c?"selected":""} ${n===c?"hovered":""}`,onClick:()=>t(d=>d===c?null:c),onMouseEnter:()=>r(c),onMouseLeave:()=>r(null),style:{"--card-color":l.color,"--card-glow":l.glow,animationDelay:`${c*.1}s`},children:[s.jsx("div",{className:"tier-badge font-mono",style:{background:k3[l.tier]||"#333"},children:l.tier}),s.jsxs("div",{className:"trophy-icon-wrapper",children:[s.jsx("div",{className:`trophy-icon-3d ${n===c||e===c?"spin":""}`,children:s.jsx("span",{className:"trophy-emoji",children:l.icon})}),s.jsx("div",{className:"trophy-shadow"})]}),s.jsxs("div",{className:"trophy-content",children:[s.jsxs("div",{className:"trophy-stat font-mono",style:{color:l.color},children:[s.jsx("span",{className:"stat-big",children:l.stat}),s.jsx("span",{className:"stat-label",children:l.statLabel})]}),s.jsx("h3",{className:"trophy-title",children:l.title}),s.jsx("p",{className:"trophy-subtitle",children:l.subtitle}),e===c&&s.jsx("div",{className:"trophy-expanded",children:s.jsx("p",{className:"trophy-desc",children:l.desc})})]}),s.jsx("div",{className:"card-glow-border",style:{borderColor:l.color}})]},l.id))}),o&&s.jsxs("div",{className:"trophy-detail-panel",style:{borderColor:o.color,"--glow":o.glow},children:[s.jsxs("div",{className:"tdp-header",children:[s.jsx("span",{className:"tdp-icon",children:o.icon}),s.jsxs("div",{className:"tdp-titles",children:[s.jsx("h3",{style:{color:o.color},children:o.title}),s.jsx("span",{className:"tdp-sub font-mono",children:o.subtitle})]}),s.jsxs("div",{className:"tdp-stat font-mono",style:{color:o.color},children:[s.jsx("span",{children:o.stat}),s.jsx("small",{children:o.statLabel})]}),s.jsx("button",{className:"tdp-close",onClick:()=>t(null),children:"✕"})]}),s.jsx("p",{className:"tdp-desc",children:o.desc}),s.jsx("div",{className:"tdp-tier-bar",children:s.jsxs("span",{className:"font-mono",style:{color:o.color},children:["// Achievement Tier: ",s.jsx("strong",{children:o.tier})]})})]})]}),s.jsx("style",{children:`
        .trophy-room-section {
          background: var(--bg-primary);
          border-bottom: 1px solid var(--border-color);
          position: relative;
          overflow: hidden;
        }

        .particle-container {
          position: absolute;
          top: 0; left: 0; width: 100%; height: 100%;
          pointer-events: none;
          z-index: 0;
        }

        .confetti-particle {
          position: absolute;
          top: -10px;
          width: 8px;
          height: 8px;
          border-radius: 2px;
          animation: confettiFall 1.8s ease-out forwards;
        }

        @keyframes confettiFall {
          0% { transform: translateY(0) rotate(0deg); opacity: 1; }
          100% { transform: translateY(400px) rotate(720deg); opacity: 0; }
        }

        .trophy-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
          gap: 20px;
          position: relative;
          z-index: 1;
          margin-bottom: 32px;
        }

        .trophy-card {
          background: #fff;
          border: 1px solid var(--border-color);
          border-radius: 16px;
          padding: 24px;
          cursor: pointer;
          position: relative;
          overflow: hidden;
          transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.3s;
          animation: fadeIn 0.5s ease both;
        }

        .trophy-card::before {
          content: '';
          position: absolute;
          inset: 0;
          background: radial-gradient(ellipse at top left, var(--card-glow, transparent) 0%, transparent 60%);
          opacity: 0;
          transition: opacity 0.3s;
        }

        .trophy-card:hover::before, .trophy-card.selected::before {
          opacity: 1;
        }

        .trophy-card:hover, .trophy-card.selected {
          transform: translateY(-8px) scale(1.02);
          box-shadow: 0 20px 40px var(--card-glow, rgba(0,0,0,0.1)), 0 0 0 1px var(--card-color);
          border-color: var(--card-color);
        }

        .card-glow-border {
          position: absolute;
          inset: 0;
          border-radius: 16px;
          border: 2px solid transparent;
          pointer-events: none;
        }

        .tier-badge {
          position: absolute;
          top: 14px;
          right: 14px;
          font-size: 8px;
          font-weight: 700;
          padding: 3px 8px;
          border-radius: 100px;
          color: #fff;
          letter-spacing: 0.1em;
        }

        .trophy-icon-wrapper {
          display: flex;
          flex-direction: column;
          align-items: center;
          margin-bottom: 16px;
          perspective: 500px;
        }

        .trophy-icon-3d {
          width: 64px;
          height: 64px;
          display: flex;
          align-items: center;
          justify-content: center;
          transform-style: preserve-3d;
          transition: transform 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        .trophy-icon-3d.spin {
          animation: trophySpin 0.8s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        @keyframes trophySpin {
          0% { transform: rotateY(0deg) scale(1); }
          50% { transform: rotateY(180deg) scale(1.2); }
          100% { transform: rotateY(360deg) scale(1); }
        }

        .trophy-emoji {
          font-size: 40px;
          filter: drop-shadow(0 4px 8px rgba(0,0,0,0.2));
        }

        .trophy-shadow {
          width: 40px;
          height: 8px;
          background: radial-gradient(ellipse, rgba(0,0,0,0.15), transparent);
          border-radius: 50%;
          margin-top: 4px;
        }

        .trophy-stat {
          display: flex;
          align-items: baseline;
          gap: 4px;
          margin-bottom: 8px;
        }

        .stat-big {
          font-size: 24px;
          font-weight: 700;
        }

        .stat-label {
          font-size: 10px;
          opacity: 0.7;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .trophy-title {
          font-size: 16px;
          font-weight: 600;
          color: var(--text-dark);
          margin-bottom: 4px;
        }

        .trophy-subtitle {
          font-size: 12px;
          color: var(--text-muted-dark);
          font-family: var(--font-mono);
        }

        .trophy-expanded {
          margin-top: 12px;
          padding-top: 12px;
          border-top: 1px solid var(--border-color);
          animation: fadeIn 0.3s ease;
        }

        .trophy-desc {
          font-size: 12.5px;
          line-height: 1.5;
          color: var(--text-muted-dark);
        }

        /* Detail panel */
        .trophy-detail-panel {
          background: #fff;
          border: 2px solid;
          border-radius: 16px;
          padding: 24px;
          box-shadow: 0 10px 30px var(--glow, rgba(0,0,0,0.1));
          animation: fadeIn 0.3s ease;
        }

        .tdp-header {
          display: flex;
          align-items: center;
          gap: 16px;
          margin-bottom: 16px;
        }

        .tdp-icon { font-size: 36px; }

        .tdp-titles { flex: 1; }
        .tdp-titles h3 { font-size: 20px; font-weight: 600; }
        .tdp-sub { font-size: 11px; color: var(--text-muted-dark); }

        .tdp-stat {
          text-align: center;
          display: flex;
          flex-direction: column;
        }
        .tdp-stat span { font-size: 22px; font-weight: 700; }
        .tdp-stat small { font-size: 9px; opacity: 0.7; }

        .tdp-close {
          background: none;
          border: 1px solid var(--border-color);
          width: 32px;
          height: 32px;
          border-radius: 50%;
          cursor: pointer;
          color: var(--text-muted-dark);
          font-size: 13px;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: 0.2s;
        }
        .tdp-close:hover { background: var(--bg-secondary); }

        .tdp-desc {
          font-size: 13px;
          line-height: 1.6;
          color: var(--text-muted-dark);
          margin-bottom: 16px;
        }

        .tdp-tier-bar {
          font-size: 11px;
          color: var(--text-muted-dark);
          padding-top: 12px;
          border-top: 1px solid var(--border-color);
        }

        @media (max-width: 768px) {
          .trophy-grid { grid-template-columns: 1fr 1fr; }
        }
        @media (max-width: 480px) {
          .trophy-grid { grid-template-columns: 1fr; }
        }
      `})]})}const Mn=[{year:"2019",title:"Competitive Programming Journey Begins",company:"CGC Landran — B.Tech CSE",icon:"🎓",color:"#63b3ed",details:"Enrolled in Computer Science. Started competitive programming on GFG and LeetCode. Rank #1 on campus.",tags:["C++","DSA","Algorithms"],xp:100},{year:"2021",title:"ICPC Regionals Qualifier",company:"Amritapuri Regional — ACM-ICPC",icon:"🏅",color:"#b794f4",details:"Represented college in the prestigious ACM-ICPC Regionals. Team Rank 613 among top university teams.",tags:["Competitive Programming","Team Work"],xp:150},{year:"2022",title:"First Full Stack Role",company:"Zapbuild Technologies",icon:"🚀",color:"#68d391",details:"Built MySQL data warehouses, RBAC systems, and React interfaces. Learned Express.js microservice patterns.",tags:["MySQL","React","Express","RBAC"],xp:200},{year:"2023",title:"iGaming Platform Architect",company:"Basta Tech — BastaxCasino",icon:"🎰",color:"#f6ad55",details:"Led backend development for a European casino. Designed Redis caching, Kafka bet processing, 100+ game APIs.",tags:["Redis","Kafka","MongoDB","Node.js"],xp:350},{year:"2024",title:"Integrations & Automation Expert",company:"Basta Tech — Advanced Systems",icon:"⚡",color:"#fc8181",details:"Zapier integrations, Google Calendar, Microsoft 365, food store platform. Helping peers build stronger CVs.",tags:["Zapier","Google API","M365","Webhooks"],xp:280},{year:"2025",title:"Government-Tier Engineer",company:"Jupitice Justice Technologies",icon:"⚖️",color:"#9ae6b4",details:"Judicial data pipelines, Supreme Court scrapers, WhatsApp Business APIs, Offline KYC systems for government use.",tags:["ETL","WhatsApp API","KYC","Legal Tech"],xp:400}];function S3(){const[e,t]=j.useState(5),[n,r]=j.useState(0),[i,a]=j.useState(0),o=Mn.reduce((c,d)=>c+d.xp,0);j.useEffect(()=>{const c=Mn.slice(0,e+1).reduce((d,u)=>d+u.xp,0);r(c)},[e]),j.useEffect(()=>{const c=n-i;if(c===0)return;const d=Math.ceil(Math.abs(c)/20),u=setTimeout(()=>{a(p=>p<n?Math.min(p+d,n):Math.max(p-d,n))},20);return()=>clearTimeout(u)},[n,i]);const l=Mn[e];return s.jsxs("section",{id:"career-timeline-3d",className:"ct3d-section",children:[s.jsxs("div",{className:"container",children:[s.jsx("span",{className:"section-tag",children:"Career Journey"}),s.jsx("h2",{className:"section-title",children:"3D Career Timeline"}),s.jsx("p",{className:"section-subtitle",children:"An interactive journey through Rahul's professional evolution — from campus coder to enterprise engineer."}),s.jsxs("div",{className:"xp-progress-bar-container",children:[s.jsxs("div",{className:"xp-header",children:[s.jsx("span",{className:"font-mono xp-label",children:"🎮 ENGINEERING XP PROGRESS"}),s.jsxs("span",{className:"font-mono xp-value",style:{color:l.color},children:[i," / ",o," XP"]})]}),s.jsx("div",{className:"xp-bar-track",children:s.jsx("div",{className:"xp-bar-fill",style:{width:`${i/o*100}%`,background:`linear-gradient(90deg, #5e5ad1, ${l.color})`},children:s.jsx("span",{className:"xp-bar-glow"})})})]}),s.jsxs("div",{className:"ct3d-layout",children:[s.jsx("div",{className:"timeline-isometric",children:Mn.map((c,d)=>s.jsxs("div",{className:`iso-node ${e===d?"active":""} ${d<e?"past":""}`,onClick:()=>t(d),style:{"--ev-color":c.color,"--ev-delay":`${d*.1}s`},children:[s.jsx("div",{className:"iso-year font-mono",children:c.year}),s.jsxs("div",{className:"iso-block",children:[s.jsx("div",{className:"iso-top",children:s.jsx("span",{className:"iso-icon",children:c.icon})}),s.jsx("div",{className:"iso-side-r"}),s.jsx("div",{className:"iso-side-b"})]}),s.jsx("div",{className:"iso-title",children:c.title}),d<Mn.length-1&&s.jsx("div",{className:"iso-connector",children:s.jsx("div",{className:`connector-line ${d<e?"active":""}`})})]},d))}),s.jsxs("div",{className:"event-detail-panel",style:{"--ev-color":l.color},children:[s.jsxs("div",{className:"edp-header",style:{borderColor:l.color+"50"},children:[s.jsx("span",{className:"edp-icon",children:l.icon}),s.jsxs("div",{className:"edp-meta",children:[s.jsx("span",{className:"edp-year font-mono",style:{color:l.color},children:l.year}),s.jsx("h3",{className:"edp-title",children:l.title}),s.jsx("span",{className:"edp-company font-mono",children:l.company})]}),s.jsxs("div",{className:"edp-xp font-mono",style:{color:l.color},children:["+",l.xp," XP"]})]}),s.jsx("p",{className:"edp-details",children:l.details}),s.jsx("div",{className:"edp-tags",children:l.tags.map((c,d)=>s.jsx("span",{className:"edp-tag font-mono",style:{color:l.color,borderColor:l.color+"40",background:l.color+"10"},children:c},d))}),s.jsxs("div",{className:"edp-nav",children:[s.jsx("button",{className:"edp-btn",onClick:()=>t(c=>Math.max(0,c-1)),disabled:e===0,children:"← Previous"}),s.jsxs("span",{className:"edp-progress font-mono",children:[e+1," / ",Mn.length]}),s.jsx("button",{className:"edp-btn edp-btn-next",onClick:()=>t(c=>Math.min(Mn.length-1,c+1)),disabled:e===Mn.length-1,style:{borderColor:l.color,color:l.color},children:"Next →"})]})]})]})]}),s.jsx("style",{children:`
        .ct3d-section {
          background: var(--bg-secondary);
          border-bottom: 1px solid var(--border-color);
        }

        /* XP bar */
        .xp-progress-bar-container {
          margin-bottom: 40px;
          background: #fff;
          border: 1px solid var(--border-color);
          border-radius: 12px;
          padding: 20px 24px;
        }

        .xp-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 12px;
        }

        .xp-label {
          font-size: 10px;
          color: var(--text-muted-dark);
          letter-spacing: 0.1em;
        }

        .xp-value {
          font-size: 14px;
          font-weight: 700;
          transition: color 0.5s;
        }

        .xp-bar-track {
          height: 10px;
          background: var(--bg-secondary);
          border-radius: 5px;
          overflow: hidden;
        }

        .xp-bar-fill {
          height: 100%;
          border-radius: 5px;
          transition: width 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
          position: relative;
        }

        .xp-bar-glow {
          position: absolute;
          right: -4px;
          top: -2px;
          width: 14px;
          height: 14px;
          border-radius: 50%;
          background: #fff;
          box-shadow: 0 0 8px currentColor;
        }

        /* Isometric layout */
        .ct3d-layout {
          display: grid;
          grid-template-columns: 1fr 380px;
          gap: 40px;
          align-items: start;
        }

        .timeline-isometric {
          display: flex;
          align-items: flex-start;
          gap: 0;
          overflow-x: auto;
          padding: 20px 10px 30px;
        }

        .iso-node {
          display: flex;
          flex-direction: column;
          align-items: center;
          cursor: pointer;
          position: relative;
          min-width: 100px;
          transition: transform 0.3s;
        }

        .iso-node:hover { transform: translateY(-4px); }

        .iso-year {
          font-size: 10px;
          color: var(--text-muted-dark);
          margin-bottom: 8px;
          letter-spacing: 0.05em;
        }

        .iso-node.active .iso-year {
          color: var(--ev-color);
          font-weight: 700;
        }

        .iso-block {
          width: 64px;
          height: 64px;
          position: relative;
          transform-style: preserve-3d;
          transform: rotateX(20deg) rotateY(-20deg);
          transition: transform 0.4s cubic-bezier(0.34,1.56,0.64,1);
        }

        .iso-node:hover .iso-block,
        .iso-node.active .iso-block {
          transform: rotateX(25deg) rotateY(-25deg) translateZ(8px);
        }

        .iso-top {
          width: 64px;
          height: 64px;
          background: #fff;
          border: 2px solid var(--border-color);
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s;
          box-shadow: 0 4px 12px rgba(0,0,0,0.08);
        }

        .iso-node.active .iso-top {
          border-color: var(--ev-color);
          background: white;
          box-shadow: 0 8px 20px var(--ev-color, rgba(0,0,0,0.15)), 0 0 0 2px var(--ev-color);
        }

        .iso-node.past .iso-top {
          background: var(--bg-secondary);
          opacity: 0.7;
        }

        .iso-icon {
          font-size: 24px;
          filter: drop-shadow(0 2px 4px rgba(0,0,0,0.1));
        }

        .iso-side-r {
          position: absolute;
          bottom: -8px;
          right: -8px;
          width: 8px;
          height: 64px;
          background: rgba(0,0,0,0.08);
          transform: skewY(45deg);
          transform-origin: top right;
        }

        .iso-side-b {
          position: absolute;
          bottom: -8px;
          left: 0;
          width: 64px;
          height: 8px;
          background: rgba(0,0,0,0.05);
          transform: skewX(45deg);
          transform-origin: bottom left;
        }

        .iso-title {
          font-size: 9.5px;
          text-align: center;
          color: var(--text-muted-dark);
          margin-top: 16px;
          max-width: 90px;
          line-height: 1.3;
          font-weight: 500;
        }

        .iso-node.active .iso-title { color: var(--ev-color); font-weight: 700; }

        .iso-connector {
          position: absolute;
          right: -30px;
          top: 40px;
          width: 40px;
          height: 2px;
          z-index: 0;
        }

        .connector-line {
          width: 100%;
          height: 2px;
          background: var(--border-color);
          border-radius: 1px;
          transition: background 0.5s;
        }

        .connector-line.active {
          background: linear-gradient(90deg, #5e5ad1, var(--ev-color, #5e5ad1));
        }

        /* Event Detail Panel */
        .event-detail-panel {
          background: #fff;
          border: 1px solid var(--border-color);
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 0 4px 16px rgba(0,0,0,0.04);
          animation: fadeIn 0.3s ease;
        }

        .edp-header {
          display: flex;
          align-items: flex-start;
          gap: 14px;
          padding: 20px 22px;
          border-bottom: 1px solid;
        }

        .edp-icon { font-size: 30px; }

        .edp-meta { flex: 1; }
        .edp-year { font-size: 10px; letter-spacing: 0.1em; display: block; margin-bottom: 4px; }
        .edp-title { font-size: 16px; font-weight: 600; color: var(--text-dark); margin-bottom: 4px; }
        .edp-company { font-size: 11px; color: var(--text-muted-dark); }

        .edp-xp {
          font-size: 14px;
          font-weight: 700;
          white-space: nowrap;
          animation: popIn 0.4s cubic-bezier(0.34,1.56,0.64,1);
        }
        @keyframes popIn { from { transform: scale(0.5); opacity: 0; } to { transform: scale(1); opacity: 1; } }

        .edp-details {
          padding: 18px 22px;
          font-size: 13px;
          line-height: 1.6;
          color: var(--text-muted-dark);
        }

        .edp-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          padding: 0 22px 18px;
        }

        .edp-tag {
          font-size: 10px;
          padding: 4px 10px;
          border: 1px solid;
          border-radius: 100px;
          font-weight: 500;
          letter-spacing: 0.05em;
        }

        .edp-nav {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 14px 22px;
          border-top: 1px solid var(--border-color);
        }

        .edp-btn {
          background: none;
          border: 1px solid var(--border-color);
          border-radius: 100px;
          padding: 7px 16px;
          font-size: 12px;
          font-family: var(--font-sans);
          color: var(--text-muted-dark);
          cursor: pointer;
          transition: 0.2s;
        }

        .edp-btn:hover:not(:disabled) { background: var(--bg-secondary); }
        .edp-btn:disabled { opacity: 0.3; cursor: not-allowed; }
        .edp-btn.edp-btn-next { font-weight: 600; }

        .edp-progress {
          font-size: 11px;
          color: var(--text-muted-dark);
        }

        @media (max-width: 900px) {
          .ct3d-layout { grid-template-columns: 1fr; }
          .timeline-isometric { justify-content: flex-start; }
        }
      `})]})}function N3(){const[e,t]=j.useState(!1),[n,r]=j.useState(!1),[i,a]=j.useState(!0);return j.useEffect(()=>{const o=setTimeout(()=>{n||t(!0)},8e3);return()=>clearTimeout(o)},[n]),j.useEffect(()=>{const o=setInterval(()=>{a(l=>!l)},2e3);return()=>clearInterval(o)},[]),n?null:s.jsxs(s.Fragment,{children:[!e&&s.jsxs("button",{className:"recruiter-pill-btn",onClick:()=>t(!0),title:"Connect with Rahul",children:[s.jsx("span",{className:`pill-dot ${i?"pulse":""}`}),s.jsx(pa,{size:14}),s.jsx("span",{children:"Hire Rahul"})]}),e&&s.jsxs("div",{className:"recruiter-cta-card",children:[s.jsx("button",{className:"cta-close",onClick:()=>{t(!1),r(!0)},children:s.jsx(fa,{size:14})}),s.jsxs("div",{className:"cta-header",children:[s.jsx("div",{className:"cta-avatar",children:"RG"}),s.jsxs("div",{className:"cta-intro",children:[s.jsxs("span",{className:"cta-available",children:[s.jsx("span",{className:"avail-dot"}),"Available Now"]}),s.jsx("strong",{children:"Rahul Garg"}),s.jsx("small",{children:"Mid-Level Software Engineer"})]})]}),s.jsx("div",{className:"cta-message",children:"👋 Hi recruiter! I'm open to exciting opportunities in backend, full-stack, or architecture roles."}),s.jsxs("div",{className:"cta-actions",children:[s.jsxs("a",{href:"mailto:gargr0109@gmail.com",className:"cta-btn primary",children:[s.jsx(Ml,{size:13}),"Email Me"]}),s.jsxs("a",{href:"tel:+917807221279",className:"cta-btn secondary",children:[s.jsx(pa,{size:13}),"Call"]})]}),s.jsxs("div",{className:"cta-footer font-mono",children:[s.jsx(Dy,{size:11}),s.jsx("span",{children:"Response within 2 hours"})]})]}),s.jsx("style",{children:`
        .recruiter-pill-btn {
          position: fixed;
          bottom: 100px;
          right: 28px;
          z-index: 8000;
          background: linear-gradient(135deg, #5e5ad1, #7c78e8);
          color: white;
          border: none;
          border-radius: 100px;
          padding: 10px 18px;
          font-size: 13px;
          font-weight: 600;
          font-family: var(--font-sans);
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 8px;
          box-shadow: 0 4px 20px rgba(94,90,209,0.5);
          transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
          animation: slideInRight 0.5s ease;
        }

        .recruiter-pill-btn:hover {
          transform: translateY(-3px) scale(1.05);
          box-shadow: 0 8px 30px rgba(94,90,209,0.6);
        }

        @keyframes slideInRight {
          from { transform: translateX(120px); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }

        .pill-dot {
          width: 8px; height: 8px;
          border-radius: 50%;
          background: #10b981;
        }

        .pill-dot.pulse {
          animation: dotPulse 1s ease-in-out;
        }

        @keyframes dotPulse {
          0%, 100% { box-shadow: 0 0 0 0 rgba(16,185,129,0.5); }
          50% { box-shadow: 0 0 0 6px rgba(16,185,129,0); }
        }

        .recruiter-cta-card {
          position: fixed;
          bottom: 90px;
          right: 24px;
          z-index: 8000;
          background: white;
          border: 1px solid rgba(17,28,45,0.1);
          border-radius: 20px;
          padding: 20px;
          width: 280px;
          box-shadow: 0 20px 50px rgba(0,0,0,0.15), 0 0 0 1px rgba(94,90,209,0.1);
          animation: popUpCard 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        @keyframes popUpCard {
          from { transform: scale(0.5) translateY(40px); opacity: 0; transform-origin: bottom right; }
          to { transform: scale(1) translateY(0); opacity: 1; }
        }

        .cta-close {
          position: absolute;
          top: 14px; right: 14px;
          background: none;
          border: 1px solid rgba(17,28,45,0.1);
          border-radius: 50%;
          width: 26px; height: 26px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          color: rgba(17,28,45,0.4);
          transition: 0.15s;
        }
        .cta-close:hover { background: var(--bg-secondary); color: var(--text-dark); }

        .cta-header {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 14px;
        }

        .cta-avatar {
          width: 44px; height: 44px;
          border-radius: 50%;
          background: linear-gradient(135deg, #5e5ad1, #a0afee);
          color: white;
          font-weight: 700;
          font-size: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          box-shadow: 0 4px 12px rgba(94,90,209,0.3);
        }

        .cta-intro {
          display: flex;
          flex-direction: column;
          gap: 2px;
        }

        .cta-available {
          display: flex;
          align-items: center;
          gap: 5px;
          font-size: 10px;
          color: #10b981;
          font-family: var(--font-mono);
          font-weight: 600;
          letter-spacing: 0.05em;
        }

        .avail-dot {
          width: 6px; height: 6px;
          border-radius: 50%;
          background: #10b981;
          animation: pulse 2s infinite;
          box-shadow: 0 0 6px #10b981;
        }

        .cta-intro strong {
          font-size: 14px;
          color: var(--text-dark);
        }

        .cta-intro small {
          font-size: 11px;
          color: var(--text-muted-dark);
        }

        .cta-message {
          font-size: 12.5px;
          line-height: 1.5;
          color: var(--text-muted-dark);
          background: var(--bg-secondary);
          border-radius: 12px;
          padding: 12px;
          margin-bottom: 14px;
        }

        .cta-actions {
          display: flex;
          gap: 8px;
          margin-bottom: 12px;
        }

        .cta-btn {
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 6px;
          padding: 9px;
          border-radius: 10px;
          font-size: 12px;
          font-weight: 600;
          text-decoration: none;
          transition: 0.2s;
          font-family: var(--font-sans);
        }

        .cta-btn.primary {
          background: var(--bg-dark);
          color: white;
        }
        .cta-btn.primary:hover {
          background: var(--accent-purple);
          transform: translateY(-1px);
        }

        .cta-btn.secondary {
          background: var(--bg-secondary);
          color: var(--text-dark);
          border: 1px solid var(--border-color);
        }
        .cta-btn.secondary:hover {
          background: #fff;
          border-color: var(--accent-purple);
          color: var(--accent-purple);
          transform: translateY(-1px);
        }

        .cta-footer {
          display: flex;
          align-items: center;
          gap: 5px;
          font-size: 10px;
          color: #10b981;
          padding-top: 10px;
          border-top: 1px solid var(--border-color);
        }
      `})]})}function T3(){const e=j.useRef(null),t=j.useRef(null),n=j.useRef({x:window.innerWidth/2,y:window.innerHeight/2}),r=j.useRef({x:window.innerWidth/2,y:window.innerHeight/2}),[i,a]=j.useState(""),[o,l]=j.useState(!1),[c,d]=j.useState(!1),[u,p]=j.useState(!1),f=j.useRef(null);return j.useEffect(()=>{if("ontouchstart"in window){p(!0);return}const h=(C,E,D)=>C+(E-C)*D,m=C=>{n.current={x:C.clientX,y:C.clientY}},y=()=>{r.current.x=h(r.current.x,n.current.x,.12),r.current.y=h(r.current.y,n.current.y,.12),e.current&&(e.current.style.transform=`translate(${n.current.x-20}px, ${n.current.y-20}px)`),t.current&&(t.current.style.transform=`translate(${r.current.x-4}px, ${r.current.y-4}px)`),f.current=requestAnimationFrame(y)},k=C=>{const D=C.currentTarget.getAttribute("data-cursor");a(D||""),l(!0)},x=()=>{a(""),l(!1)},g=()=>d(!0),v=()=>d(!1),w=()=>p(!0),N=()=>p(!1);document.addEventListener("mousemove",m),document.addEventListener("mousedown",g),document.addEventListener("mouseup",v),document.addEventListener("mouseleave",w),document.addEventListener("mouseenter",N);const A=document.querySelectorAll("a, button, [data-cursor]");return A.forEach(C=>{C.addEventListener("mouseenter",k),C.addEventListener("mouseleave",x)}),f.current=requestAnimationFrame(y),()=>{cancelAnimationFrame(f.current),document.removeEventListener("mousemove",m),document.removeEventListener("mousedown",g),document.removeEventListener("mouseup",v),document.removeEventListener("mouseleave",w),document.removeEventListener("mouseenter",N),A.forEach(C=>{C.removeEventListener("mouseenter",k),C.removeEventListener("mouseleave",x)})}},[]),u?null:s.jsxs(s.Fragment,{children:[s.jsx("div",{ref:e,className:`cursor-ring ${o?"hovering":""} ${c?"clicking":""}`,children:i&&s.jsx("span",{className:"cursor-label",children:i})}),s.jsx("div",{ref:t,className:`cursor-dot ${o?"hovering":""} ${c?"clicking":""}`}),s.jsx("style",{children:`
        *, *::before, *::after {
          cursor: none !important;
        }

        .cursor-ring {
          position: fixed;
          top: 0; left: 0;
          width: 40px; height: 40px;
          border: 2px solid rgba(94, 90, 209, 0.6);
          border-radius: 50%;
          pointer-events: none;
          z-index: 99999;
          transition: width 0.3s, height 0.3s, border-color 0.3s, background 0.3s;
          display: flex;
          align-items: center;
          justify-content: center;
          will-change: transform;
        }

        .cursor-ring.hovering {
          width: 56px;
          height: 56px;
          border-color: rgba(94, 90, 209, 0.9);
          background: rgba(94, 90, 209, 0.08);
          mix-blend-mode: normal;
        }

        .cursor-ring.clicking {
          width: 32px;
          height: 32px;
          background: rgba(94, 90, 209, 0.2);
          border-color: rgba(94, 90, 209, 1);
        }

        .cursor-dot {
          position: fixed;
          top: 0; left: 0;
          width: 8px; height: 8px;
          background: var(--accent-purple);
          border-radius: 50%;
          pointer-events: none;
          z-index: 99999;
          transition: width 0.2s, height 0.2s, background 0.2s;
          will-change: transform;
          box-shadow: 0 0 8px var(--accent-purple);
        }

        .cursor-dot.hovering {
          width: 4px;
          height: 4px;
          background: #fff;
        }

        .cursor-dot.clicking {
          width: 12px;
          height: 12px;
          background: var(--accent-lavender);
        }

        .cursor-label {
          font-family: var(--font-mono);
          font-size: 9px;
          font-weight: 700;
          color: var(--accent-purple);
          white-space: nowrap;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          position: absolute;
          bottom: -18px;
          left: 50%;
          transform: translateX(-50%);
        }
      `})]})}const as=[{key:"backend",label:"Backend Architecture",max:100},{key:"frontend",label:"Frontend / UI",max:100},{key:"dsa",label:"DSA & Algorithms",max:100},{key:"devops",label:"DevOps & Cloud",max:100},{key:"system",label:"System Design",max:100},{key:"database",label:"Database & SQL",max:100},{key:"realtime",label:"Real-time Systems",max:100},{key:"leadership",label:"Team Leadership",max:100}],ht=[{name:"Rahul Garg",color:"#5e5ad1",fillOpacity:.18,values:{backend:92,frontend:80,dsa:88,devops:78,system:86,database:90,realtime:85,leadership:82}},{name:"Avg Mid-Level Eng",color:"#fc8181",fillOpacity:.08,values:{backend:70,frontend:68,dsa:65,devops:62,system:65,database:68,realtime:60,leadership:63}}];function ji(e,t,n,r){const i=(e-90)*(Math.PI/180);return{x:n+t*Math.cos(i),y:r+t*Math.sin(i)}}function E3(){const[e,t]=j.useState(0),[n,r]=j.useState(null),i=j.useRef(null),a=j.useRef(null);j.useEffect(()=>{const y=new IntersectionObserver(([k])=>{if(k.isIntersecting){let x=null;const g=1400,v=w=>{x||(x=w);const N=w-x;t(Math.min(N/g,1)),N<g&&(a.current=requestAnimationFrame(v))};a.current=requestAnimationFrame(v),y.disconnect()}},{threshold:.3});return i.current&&y.observe(i.current),()=>{y.disconnect(),a.current&&cancelAnimationFrame(a.current)}},[]);const o=220,l=220,c=160,u=360/as.length,f=(y=>{const k=2*Math.PI/3;return y===0?0:y===1?1:Math.pow(2,-10*y)*Math.sin((y*10-.75)*k)+1})(e),h=[.2,.4,.6,.8,1],m=y=>as.map((k,x)=>{const g=y.values[k.key]/100*f,{x:v,y:w}=ji(x*u,g*c,o,l);return`${v},${w}`}).join(" ");return s.jsxs("section",{id:"skill-radar",className:"radar-section",ref:i,children:[s.jsxs("div",{className:"container",children:[s.jsx("span",{className:"section-tag",style:{color:"var(--accent-lavender)"},children:"Skill Dimensions"}),s.jsx("h2",{className:"section-title light",children:"Engineering Radar Chart"}),s.jsx("p",{className:"section-subtitle light",children:"Multi-dimensional skill analysis across 8 engineering domains — vs. average mid-level engineer benchmarks."}),s.jsxs("div",{className:"radar-layout",children:[s.jsx("div",{className:"radar-chart-wrap",children:s.jsxs("svg",{viewBox:`0 0 ${o*2} ${l*2}`,className:"radar-svg",children:[h.map((y,k)=>s.jsx("polygon",{points:as.map((x,g)=>{const{x:v,y:w}=ji(g*u,y*c,o,l);return`${v},${w}`}).join(" "),fill:"none",stroke:"rgba(160,175,238,0.12)",strokeWidth:"1"},k)),h.map((y,k)=>s.jsxs("text",{x:o+4,y:l-y*c+4,fontSize:"8",fill:"rgba(160,175,238,0.35)",fontFamily:"monospace",children:[Math.round(y*100),"%"]},k)),as.map((y,k)=>{const x=ji(k*u,c,o,l);return s.jsx("line",{x1:o,y1:l,x2:x.x,y2:x.y,stroke:"rgba(160,175,238,0.15)",strokeWidth:"1"},k)}),ht.map((y,k)=>s.jsx("polygon",{points:m(y),fill:y.color,fillOpacity:y.fillOpacity,stroke:y.color,strokeWidth:"2",strokeLinejoin:"round"},k)),as.map((y,k)=>{const x=ji(k*u,c+22,o,l),g=ji(k*u,c,o,l),v=n===y.key,w=ht[0].values[y.key];return s.jsxs("g",{onMouseEnter:()=>r(y.key),onMouseLeave:()=>r(null),style:{cursor:"pointer"},children:[s.jsx("circle",{cx:g.x,cy:g.y,r:v?5:3,fill:ht[0].color,style:{transition:"r 0.2s"}}),s.jsx("text",{x:x.x,y:x.y,textAnchor:"middle",dominantBaseline:"middle",fontSize:v?"9.5":"8.5",fill:v?ht[0].color:"rgba(245,243,239,0.65)",fontFamily:"sans-serif",fontWeight:v?"700":"400",style:{transition:"all 0.2s"},children:y.label}),v&&s.jsxs("text",{x:g.x,y:g.y-10,textAnchor:"middle",fontSize:"9",fill:ht[0].color,fontFamily:"monospace",fontWeight:"700",children:[w,"%"]})]},k)}),s.jsx("circle",{cx:o,cy:l,r:3,fill:ht[0].color})]})}),s.jsxs("div",{className:"radar-info",children:[s.jsx("div",{className:"radar-legend",children:ht.map((y,k)=>s.jsxs("div",{className:"legend-item",children:[s.jsx("div",{className:"legend-color",style:{background:y.color}}),s.jsx("span",{className:"legend-name",children:y.name})]},k))}),s.jsx("div",{className:"axis-breakdown",children:as.map(y=>{const k=ht[0].values[y.key],x=ht[1].values[y.key],g=k-x;return s.jsxs("div",{className:`axis-row ${n===y.key?"hovered":""}`,onMouseEnter:()=>r(y.key),onMouseLeave:()=>r(null),children:[s.jsx("span",{className:"axis-label",children:y.label}),s.jsxs("div",{className:"axis-bars",children:[s.jsxs("div",{className:"axis-bar-wrap",children:[s.jsx("div",{className:"axis-bar rahul-bar",style:{width:`${k*e}%`,background:ht[0].color}}),s.jsxs("span",{className:"axis-val font-mono",style:{color:ht[0].color},children:[k,"%"]})]}),s.jsxs("div",{className:"axis-bar-wrap",children:[s.jsx("div",{className:"axis-bar avg-bar",style:{width:`${x*e}%`,background:ht[1].color}}),s.jsxs("span",{className:"axis-val font-mono",style:{color:ht[1].color},children:[x,"%"]})]})]}),s.jsxs("span",{className:`axis-diff font-mono ${g>=0?"pos":"neg"}`,children:[g>=0?"+":"",g]})]},y.key)})})]})]})]}),s.jsx("style",{children:`
        .radar-section {
          background: var(--bg-darker);
          border-bottom: 1px solid rgba(245,243,239,0.08);
        }

        .radar-layout {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 48px;
          align-items: center;
        }

        .radar-chart-wrap {
          display: flex;
          justify-content: center;
        }

        .radar-svg {
          width: 100%;
          max-width: 440px;
          overflow: visible;
        }

        .radar-legend {
          display: flex;
          gap: 20px;
          margin-bottom: 24px;
        }

        .legend-item {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 12px;
          color: rgba(245,243,239,0.7);
        }

        .legend-color {
          width: 10px; height: 10px; border-radius: 50%;
        }

        .axis-breakdown {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .axis-row {
          display: grid;
          grid-template-columns: 140px 1fr 40px;
          align-items: center;
          gap: 12px;
          padding: 6px 8px;
          border-radius: 6px;
          transition: background 0.15s;
          cursor: pointer;
        }

        .axis-row.hovered {
          background: rgba(94,90,209,0.1);
        }

        .axis-label {
          font-size: 11px;
          color: rgba(245,243,239,0.6);
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .axis-bars {
          display: flex;
          flex-direction: column;
          gap: 3px;
        }

        .axis-bar-wrap {
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .axis-bar {
          height: 4px;
          border-radius: 2px;
          min-width: 4px;
          max-width: 100%;
          transition: width 1.2s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        .axis-val {
          font-size: 9px;
          min-width: 24px;
        }

        .axis-diff {
          font-size: 11px;
          font-weight: 700;
          text-align: right;
        }
        .axis-diff.pos { color: #10b981; }
        .axis-diff.neg { color: #fc8181; }

        @media (max-width: 900px) {
          .radar-layout { grid-template-columns: 1fr; }
        }
      `})]})}function C3(){const t=[],n={10:{label:"Kafka Integration",color:"#b794f4"},18:{label:"Casino APIs Launch",color:"#f6ad55"},27:{label:"Court ETL Pipeline",color:"#68d391"},35:{label:"WhatsApp Webhooks",color:"#fc8181"},44:{label:"LeetCode Streak",color:"#63b3ed"}};for(let r=0;r<52;r++){const i=[],a=n[r];for(let o=0;o<7;o++){let l;if(a)l=o===0?0:Math.floor(Math.random()*2)+3;else{const c=Math.random();l=c<.2?0:c<.45?1:c<.7?2:c<.88?3:4}i.push({intensity:l,week:r,day:o})}t.push({days:i,highlight:n[r]||null})}return t}const Gg=C3(),Zc=["#1a1f2e","#1e3a5f","#2d5a8e","#5e5ad1","#a0afee"],A3=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];function P3(){const[e,t]=j.useState(0),[n,r]=j.useState(null),[i,a]=j.useState({current:0,longest:0,total:0}),o=j.useRef(null);return j.useEffect(()=>{const l=new IntersectionObserver(([c])=>{if(c.isIntersecting){let d=0;const u=setInterval(()=>{d++,t(d),d>=52&&clearInterval(u)},18);l.disconnect()}},{threshold:.2});return o.current&&l.observe(o.current),()=>l.disconnect()},[]),j.useEffect(()=>{const c=Gg.flatMap(p=>p.days).filter(p=>p.intensity>0).length,d=Math.floor(Math.random()*40)+20,u=Math.floor(Math.random()*60)+60;a({current:d,longest:u,total:c})},[]),s.jsxs("section",{id:"activity-heatmap",className:"heatmap-section dark-section",ref:o,children:[s.jsxs("div",{className:"container",children:[s.jsx("span",{className:"section-tag",style:{color:"var(--accent-lavender)"},children:"Coding Activity"}),s.jsx("h2",{className:"section-title light",children:"GitHub-Style Activity Heatmap"}),s.jsx("p",{className:"section-subtitle light",children:"52 weeks of consistent engineering activity — commits, API builds, DSA problems, and open-source contributions."}),s.jsxs("div",{className:"heatmap-stats",children:[s.jsxs("div",{className:"hm-stat",children:[s.jsx("span",{className:"hm-stat-val font-mono",style:{color:"#10b981"},children:i.current}),s.jsx("span",{className:"hm-stat-label",children:"Day Current Streak 🔥"})]}),s.jsxs("div",{className:"hm-stat",children:[s.jsx("span",{className:"hm-stat-val font-mono",style:{color:"#f6ad55"},children:i.longest}),s.jsx("span",{className:"hm-stat-label",children:"Day Longest Streak"})]}),s.jsxs("div",{className:"hm-stat",children:[s.jsxs("span",{className:"hm-stat-val font-mono",style:{color:"#a0afee"},children:[i.total*3,"+"]}),s.jsx("span",{className:"hm-stat-label",children:"Total Contributions"})]}),s.jsxs("div",{className:"hm-stat",children:[s.jsx("span",{className:"hm-stat-val font-mono",style:{color:"#b794f4"},children:"1500+"}),s.jsx("span",{className:"hm-stat-label",children:"DSA Problems Solved"})]})]}),s.jsxs("div",{className:"heatmap-container",children:[s.jsx("div",{className:"month-labels",children:A3.map((l,c)=>s.jsx("span",{className:"month-label font-mono",style:{left:`${c/12*100}%`},children:l},c))}),s.jsxs("div",{className:"heatmap-inner",children:[s.jsx("div",{className:"day-labels",children:["Mon","Wed","Fri"].map(l=>s.jsx("span",{className:"day-label font-mono",children:l},l))}),s.jsx("div",{className:"hm-grid",children:Gg.map((l,c)=>s.jsxs("div",{className:"hm-week",children:[l.days.map((d,u)=>s.jsx("div",{className:`hm-cell ${c<e?"visible":""} ${l.highlight&&d.intensity>2?"highlight":""}`,style:{background:c<e?Zc[d.intensity]:Zc[0],borderColor:l.highlight&&d.intensity>2?l.highlight.color:"transparent",animationDelay:`${c*18}ms`,boxShadow:l.highlight&&d.intensity>2?`0 0 6px ${l.highlight.color}60`:"none"},onMouseEnter:()=>r({week:c,day:u,intensity:d.intensity,highlight:l.highlight}),onMouseLeave:()=>r(null)},u)),l.highlight&&c<e&&s.jsx("div",{className:"milestone-marker",style:{color:l.highlight.color},title:l.highlight.label,children:"▲"})]},c))}),n&&s.jsx("div",{className:"hm-tooltip font-mono",children:n.highlight?s.jsxs("span",{style:{color:n.highlight.color},children:["🏆 ",n.highlight.label]}):s.jsxs("span",{children:[["No activity","Low activity","Moderate","Active day","Peak day"][n.intensity]," — ",["Sun","Mon","Tue","Wed","Thu","Fri","Sat"][n.day]]})})]}),s.jsxs("div",{className:"hm-legend",children:[s.jsx("span",{className:"font-mono legend-text",children:"Less"}),Zc.map((l,c)=>s.jsx("div",{className:"legend-cell",style:{background:l}},c)),s.jsx("span",{className:"font-mono legend-text",children:"More"})]})]}),s.jsx("div",{className:"milestones-row",children:Object.values({10:{label:"Kafka Integration",color:"#b794f4"},18:{label:"Casino APIs Launch",color:"#f6ad55"},27:{label:"Court ETL Pipeline",color:"#68d391"},35:{label:"WhatsApp Webhooks",color:"#fc8181"},44:{label:"LeetCode Streak",color:"#63b3ed"}}).map((l,c)=>s.jsxs("div",{className:"milestone-chip",style:{borderColor:l.color+"60",color:l.color},children:[s.jsx("span",{style:{background:l.color},className:"milestone-dot"}),l.label]},c))})]}),s.jsx("style",{children:`
        .heatmap-section {
          background: #07090f;
          border-bottom: 1px solid rgba(245,243,239,0.08);
        }

        .heatmap-stats {
          display: flex;
          gap: 32px;
          flex-wrap: wrap;
          margin-bottom: 40px;
          padding: 24px;
          background: rgba(245,243,239,0.03);
          border: 1px solid rgba(245,243,239,0.06);
          border-radius: 12px;
        }

        .hm-stat {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .hm-stat-val {
          font-size: 28px;
          font-weight: 700;
          line-height: 1;
        }

        .hm-stat-label {
          font-size: 11px;
          color: rgba(245,243,239,0.45);
          white-space: nowrap;
        }

        .heatmap-container {
          overflow-x: auto;
          padding-bottom: 12px;
        }

        .month-labels {
          position: relative;
          height: 20px;
          min-width: 780px;
          margin-left: 36px;
          margin-bottom: 4px;
        }

        .month-label {
          position: absolute;
          font-size: 9px;
          color: rgba(245,243,239,0.35);
          transform: translateX(-50%);
        }

        .heatmap-inner {
          display: flex;
          gap: 8px;
          position: relative;
          min-width: 780px;
        }

        .day-labels {
          display: flex;
          flex-direction: column;
          justify-content: space-around;
          padding-bottom: 4px;
          height: 90px;
        }

        .day-label {
          font-size: 9px;
          color: rgba(245,243,239,0.3);
          line-height: 1;
        }

        .hm-grid {
          display: flex;
          gap: 3px;
          flex: 1;
        }

        .hm-week {
          display: flex;
          flex-direction: column;
          gap: 3px;
          position: relative;
        }

        .hm-cell {
          width: 12px;
          height: 12px;
          border-radius: 2px;
          border: 1px solid transparent;
          transition: transform 0.15s, box-shadow 0.3s;
          cursor: pointer;
          animation: cellAppear 0.3s ease both;
        }

        .hm-cell:hover {
          transform: scale(1.5);
          z-index: 10;
        }

        @keyframes cellAppear {
          from { opacity: 0; transform: scale(0); }
          to { opacity: 1; transform: scale(1); }
        }

        .milestone-marker {
          font-size: 7px;
          text-align: center;
          position: absolute;
          bottom: -12px;
          left: 50%;
          transform: translateX(-50%);
          animation: fadeIn 0.3s ease;
        }

        .hm-tooltip {
          position: absolute;
          bottom: -36px;
          left: 50%;
          transform: translateX(-50%);
          background: var(--bg-darker);
          border: 1px solid rgba(245,243,239,0.12);
          border-radius: 6px;
          padding: 5px 10px;
          font-size: 10px;
          color: rgba(245,243,239,0.8);
          white-space: nowrap;
          pointer-events: none;
          animation: fadeIn 0.15s ease;
        }

        .hm-legend {
          display: flex;
          align-items: center;
          gap: 4px;
          margin-top: 20px;
          margin-left: 36px;
        }

        .legend-cell {
          width: 12px; height: 12px;
          border-radius: 2px;
        }

        .legend-text {
          font-size: 9px;
          color: rgba(245,243,239,0.35);
          margin: 0 4px;
        }

        .milestones-row {
          display: flex;
          gap: 10px;
          flex-wrap: wrap;
          margin-top: 28px;
        }

        .milestone-chip {
          display: flex;
          align-items: center;
          gap: 6px;
          padding: 5px 12px;
          border: 1px solid;
          border-radius: 100px;
          font-size: 11px;
          font-family: var(--font-mono);
        }

        .milestone-dot {
          width: 6px; height: 6px; border-radius: 50%;
        }
      `})]})}const ed=[{id:1,context:"Caching Layer for High-Traffic APIs",winner:"redis",choices:[{id:"redis",name:"Redis",icon:"🔴",color:"#fc8181",pros:["Sub-millisecond latency","In-memory, zero disk I/O","TTL expiry built-in","Pub/Sub messaging"],cons:["Data loss on crash (without AOF)","RAM-limited capacity"],myUsage:"Used in BastaxCasino — reduced API latency from 150ms → 4ms with LRU eviction policy"},{id:"db",name:"Direct DB Query",icon:"🗄️",color:"#94a3b8",pros:["Always fresh data","No extra infrastructure"],cons:["10-100x slower","Causes DB overload at scale","No pub/sub"],myUsage:null}]},{id:2,context:"Async Event Processing at Scale",winner:"kafka",choices:[{id:"kafka",name:"Apache Kafka",icon:"📨",color:"#b794f4",pros:["Handles 1M+ messages/sec","Durable message log","Consumer group partitioning","Replay events"],cons:["Complex cluster setup","Higher operational overhead"],myUsage:"Used in casino — 50,000+ bet transactions/day, partitioned by userId for ordering"},{id:"sync",name:"Synchronous REST",icon:"🔗",color:"#94a3b8",pros:["Simple to implement","Immediate response"],cons:["Blocks thread pool","No retry/dead letter queue","Tight coupling"],myUsage:null}]},{id:3,context:"Real-time Client Notifications",winner:"socket",choices:[{id:"socket",name:"WebSockets / Socket.IO",icon:"⚡",color:"#68d391",pros:["Persistent duplex connection","Real-time push (no polling)","Room-based broadcasting"],cons:["Load balancer needs sticky sessions","Redis adapter needed for cluster"],myUsage:"Used in casino dashboards — live bet updates, balance changes, and notifications"},{id:"polling",name:"Long Polling",icon:"🔄",color:"#94a3b8",pros:["Simpler to implement","Works with standard HTTP"],cons:["High server load","1-3 second delays","Wastes bandwidth"],myUsage:null}]},{id:4,context:"Data Storage for Judicial Records",winner:"mysql",choices:[{id:"mysql",name:"MySQL (Relational)",icon:"📊",color:"#f6ad55",pros:["ACID compliance","Complex JOIN queries","Strong schema enforcement","Full-text search"],cons:["Schema migrations require planning","Vertical scaling cost"],myUsage:"Used at Jupitice — multi-level court hierarchy schemas, case tracking, judge assignments"},{id:"mongo",name:"MongoDB (NoSQL)",icon:"🍃",color:"#94a3b8",pros:["Flexible schema","Horizontal scaling"],cons:["Weak ACID guarantees","Complex multi-collection joins","Poor for legal integrity"],myUsage:null}]}];function R3(){const[e,t]=j.useState(0),[n,r]=j.useState({}),i=ed[e],a=c=>{r(d=>({...d,[i.id]:c}))},o=n[i.id],l=o===i.winner;return o&&i.winner,s.jsxs("section",{id:"tech-comparison",className:"comparison-section",children:[s.jsxs("div",{className:"container",children:[s.jsx("span",{className:"section-tag",children:"Architectural Decisions"}),s.jsx("h2",{className:"section-title",children:"Tech Stack Decision Simulator"}),s.jsx("p",{className:"section-subtitle",children:"Real engineering tradeoffs I've faced in production. Pick the right tech for each scenario — see why I chose what I did."}),s.jsx("div",{className:"scenario-tabs",children:ed.map((c,d)=>s.jsxs("button",{className:`scenario-tab ${e===d?"active":""}`,onClick:()=>t(d),children:[s.jsx("span",{className:"tab-num font-mono",children:String(d+1).padStart(2,"0")}),c.context]},c.id))}),s.jsxs("div",{className:"comparison-arena",children:[s.jsxs("div",{className:"scenario-header",children:[s.jsx("span",{className:"scenario-badge font-mono",children:"SCENARIO"}),s.jsx("h3",{className:"scenario-title",children:i.context}),s.jsx("p",{className:"scenario-prompt",children:"Which technology would you choose for this scenario?"})]}),s.jsx("div",{className:"choices-grid",children:i.choices.map(c=>{const d=c.id===i.winner,u=o===c.id,p=!!o;return s.jsxs("div",{className:`choice-card tilt-card ${u?"selected":""} ${p&&d?"winner-card":""} ${p&&!d?"loser-card":""}`,style:{"--choice-color":c.color,"--choice-glow":c.color+"30"},onClick:()=>!o&&a(c.id),children:[p&&s.jsxs("div",{className:`result-badge ${d?"badge-win":"badge-lose"}`,children:[d?s.jsx(Hp,{size:14}):s.jsx(pk,{size:14}),d?"Better Choice":"Suboptimal"]}),s.jsxs("div",{className:"choice-header",children:[s.jsx("span",{className:"choice-icon",children:c.icon}),s.jsx("h4",{className:"choice-name",style:{color:c.color},children:c.name})]}),s.jsxs("div",{className:"choice-pros-cons",children:[s.jsx("div",{className:"pros-list",children:c.pros.map((f,h)=>s.jsxs("div",{className:"pro-item",children:[s.jsx("span",{className:"pro-dot",style:{background:c.color}}),s.jsx("span",{children:f})]},h))}),s.jsx("div",{className:"cons-list",children:c.cons.map((f,h)=>s.jsxs("div",{className:"con-item",children:[s.jsx("span",{className:"con-dot"}),s.jsx("span",{children:f})]},h))})]}),p&&c.myUsage&&s.jsxs("div",{className:"my-usage",style:{borderColor:c.color+"40"},children:[s.jsx("span",{className:"font-mono usage-label",style:{color:c.color},children:"MY REAL USAGE:"}),s.jsx("p",{children:c.myUsage})]})]},c.id)})}),o&&s.jsxs("div",{className:`result-message ${l?"correct":"incorrect"}`,children:[l?s.jsxs(s.Fragment,{children:[s.jsx("span",{className:"result-icon",children:"🎯"}),s.jsxs("div",{children:[s.jsx("strong",{children:"Correct! Great engineering judgment."}),s.jsx("p",{children:"This is exactly what I used in production. Senior engineers think in tradeoffs, not absolutes."})]})]}):s.jsxs(s.Fragment,{children:[s.jsx("span",{className:"result-icon",children:"🤔"}),s.jsxs("div",{children:[s.jsx("strong",{children:"Good try! Here's why the other choice wins here."}),s.jsx("p",{children:"Both have valid use cases — context determines the right answer. Keep exploring."})]})]}),s.jsxs("button",{className:"next-scenario-btn",onClick:()=>t(c=>(c+1)%ed.length),children:["Next Scenario ",s.jsx(Bi,{size:14})]})]}),!o&&s.jsx("p",{className:"prompt-text font-mono",children:"👆 Click a card to make your engineering decision"})]})]}),s.jsx("style",{children:`
        .comparison-section {
          background: var(--bg-primary);
          border-bottom: 1px solid var(--border-color);
        }

        .scenario-tabs {
          display: flex;
          gap: 8px;
          flex-wrap: wrap;
          margin-bottom: 32px;
        }

        .scenario-tab {
          background: var(--bg-secondary);
          border: 1px solid var(--border-color);
          border-radius: 8px;
          padding: 10px 16px;
          font-size: 12px;
          color: var(--text-muted-dark);
          cursor: pointer;
          transition: all 0.2s;
          font-family: var(--font-sans);
          display: flex;
          align-items: center;
          gap: 8px;
          text-align: left;
        }

        .scenario-tab:hover {
          border-color: var(--accent-purple);
          color: var(--text-dark);
        }

        .scenario-tab.active {
          background: var(--bg-dark);
          border-color: var(--accent-purple);
          color: var(--text-light);
        }

        .tab-num {
          color: var(--accent-purple);
          font-size: 10px;
          font-weight: 700;
        }

        .comparison-arena {
          background: #fff;
          border: 1px solid var(--border-color);
          border-radius: 16px;
          padding: 32px;
          box-shadow: 0 4px 20px rgba(0,0,0,0.04);
        }

        .scenario-header {
          margin-bottom: 28px;
        }

        .scenario-badge {
          font-size: 9px;
          color: var(--accent-purple);
          font-weight: 700;
          letter-spacing: 0.15em;
          display: block;
          margin-bottom: 8px;
        }

        .scenario-title {
          font-size: 20px;
          font-weight: 600;
          color: var(--text-dark);
          margin-bottom: 8px;
        }

        .scenario-prompt {
          font-size: 13px;
          color: var(--text-muted-dark);
        }

        .choices-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
          margin-bottom: 24px;
        }

        .choice-card {
          background: var(--bg-secondary);
          border: 2px solid var(--border-color);
          border-radius: 12px;
          padding: 22px;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
          position: relative;
          overflow: hidden;
        }

        .choice-card:hover {
          border-color: var(--choice-color);
          background: var(--choice-glow, var(--bg-secondary));
          transform: translateY(-4px);
          box-shadow: 0 8px 20px var(--choice-glow, rgba(0,0,0,0.08));
        }

        .choice-card.winner-card {
          border-color: #10b981;
          background: rgba(16,185,129,0.05);
          transform: scale(1.02);
          box-shadow: 0 12px 32px rgba(16,185,129,0.15);
        }

        .choice-card.loser-card {
          opacity: 0.6;
          border-color: var(--border-color);
        }

        .result-badge {
          position: absolute;
          top: 12px;
          right: 12px;
          display: flex;
          align-items: center;
          gap: 4px;
          font-size: 10px;
          font-weight: 700;
          padding: 4px 10px;
          border-radius: 100px;
          font-family: var(--font-mono);
        }

        .badge-win { background: rgba(16,185,129,0.15); color: #10b981; }
        .badge-lose { background: rgba(239,68,68,0.1); color: #ef4444; }

        .choice-header {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 16px;
        }

        .choice-icon { font-size: 28px; }

        .choice-name {
          font-size: 18px;
          font-weight: 700;
        }

        .choice-pros-cons {
          display: flex;
          flex-direction: column;
          gap: 6px;
          margin-bottom: 12px;
        }

        .pro-item, .con-item {
          display: flex;
          align-items: flex-start;
          gap: 8px;
          font-size: 12px;
          color: var(--text-muted-dark);
          line-height: 1.4;
        }

        .pro-dot {
          width: 6px; height: 6px; border-radius: 50%;
          flex-shrink: 0;
          margin-top: 4px;
        }

        .con-dot {
          width: 6px; height: 6px; border-radius: 2px;
          background: #94a3b8;
          flex-shrink: 0;
          margin-top: 4px;
        }

        .my-usage {
          margin-top: 14px;
          border-top: 1px solid;
          padding-top: 12px;
          animation: fadeIn 0.4s ease;
        }

        .usage-label {
          font-size: 9px;
          font-weight: 700;
          letter-spacing: 0.1em;
          display: block;
          margin-bottom: 4px;
        }

        .my-usage p {
          font-size: 11.5px;
          line-height: 1.5;
          color: var(--text-muted-dark);
        }

        /* Result message */
        .result-message {
          display: flex;
          align-items: flex-start;
          gap: 16px;
          padding: 18px 20px;
          border-radius: 12px;
          margin-top: 8px;
          animation: fadeIn 0.4s ease;
        }

        .result-message.correct {
          background: rgba(16,185,129,0.08);
          border: 1px solid rgba(16,185,129,0.2);
        }

        .result-message.incorrect {
          background: rgba(249,115,22,0.06);
          border: 1px solid rgba(249,115,22,0.15);
        }

        .result-icon { font-size: 24px; }

        .result-message strong {
          font-size: 14px;
          color: var(--text-dark);
          display: block;
          margin-bottom: 4px;
        }

        .result-message p {
          font-size: 12px;
          color: var(--text-muted-dark);
        }

        .next-scenario-btn {
          margin-left: auto;
          display: flex;
          align-items: center;
          gap: 6px;
          background: var(--bg-dark);
          color: var(--text-light);
          border: none;
          border-radius: 8px;
          padding: 10px 18px;
          font-size: 13px;
          font-weight: 600;
          cursor: pointer;
          transition: 0.2s;
          white-space: nowrap;
          font-family: var(--font-sans);
          flex-shrink: 0;
        }

        .next-scenario-btn:hover {
          background: var(--accent-purple);
          transform: translateX(3px);
        }

        .prompt-text {
          text-align: center;
          font-size: 11px;
          color: var(--text-muted-dark);
          margin-top: 8px;
          letter-spacing: 0.05em;
        }

        @media (max-width: 768px) {
          .choices-grid { grid-template-columns: 1fr; }
          .result-message { flex-wrap: wrap; }
          .next-scenario-btn { margin-left: 0; }
        }
      `})]})}const M3=[{role:"Junior Dev (1yr)",range:[4e5,7e5],color:"#94a3b8",icon:"🟢"},{role:"Mid-Level (Avg)",range:[8e5,12e5],color:"#63b3ed",icon:"🔵"},{role:"Rahul Garg",range:[12e5,18e5],color:"#5e5ad1",icon:"⭐",highlight:!0},{role:"Senior Dev",range:[18e5,28e5],color:"#b794f4",icon:"🟣"},{role:"Lead / Staff Eng",range:[28e5,45e5],color:"#f6ad55",icon:"🟡"}],I3=[{skill:"Kafka + Redis (Event Arch)",bonus:"+18%",color:"#b794f4"},{skill:"WhatsApp Meta Business API",bonus:"+12%",color:"#68d391"},{skill:"iGaming Domain (Niche)",bonus:"+22%",color:"#f6ad55"},{skill:"Government Legal Tech",bonus:"+15%",color:"#fc8181"},{skill:"LeetCode 1753 Rating",bonus:"+8%",color:"#63b3ed"}],td=45e5;function nd(e){return e>=1e6?`₹${(e/1e5).toFixed(1)}L`:`₹${(e/1e3).toFixed(0)}K`}function L3(){const[e,t]=j.useState(!1),[n,r]=j.useState(null),i=j.useRef(null);return j.useEffect(()=>{const a=new IntersectionObserver(([o])=>{o.isIntersecting&&(setTimeout(()=>t(!0),200),a.disconnect())},{threshold:.3});return i.current&&a.observe(i.current),()=>a.disconnect()},[]),s.jsxs("section",{id:"salary-benchmark",className:"salary-section",ref:i,children:[s.jsxs("div",{className:"container",children:[s.jsx("span",{className:"section-tag",children:"Market Position"}),s.jsxs("h2",{className:"section-title",children:[s.jsx(Ck,{size:28,style:{display:"inline",marginRight:10,color:"#10b981",verticalAlign:"middle"}}),"Market Value Benchmark"]}),s.jsx("p",{className:"section-subtitle",children:"Where Rahul sits in the Indian tech hiring market based on skill stack, domain expertise, and industry experience. Niche skills command premium packages."}),s.jsxs("div",{className:"salary-layout",children:[s.jsxs("div",{className:"salary-chart",children:[M3.map((a,o)=>{const l=a.range[0]/td*100,c=(a.range[1]-a.range[0])/td*100,d=n===o;return s.jsxs("div",{className:`salary-row ${a.highlight?"highlight-row":""} ${d?"hovered":""}`,onMouseEnter:()=>r(o),onMouseLeave:()=>r(null),children:[s.jsxs("div",{className:"row-label",children:[s.jsx("span",{className:"row-icon",children:a.icon}),s.jsx("span",{className:"row-name",style:{color:a.highlight?"#fff":"inherit"},children:a.role})]}),s.jsxs("div",{className:"bar-track",children:[s.jsx("span",{className:"bar-tick-label font-mono",style:{left:`${l}%`},children:nd(a.range[0])}),s.jsx("div",{className:"bar-fill",style:{left:`${l}%`,width:e?`${c}%`:"0%",background:a.highlight?`linear-gradient(90deg, ${a.color}, #a0afee)`:a.color,transitionDelay:`${o*.12}s`,boxShadow:a.highlight?`0 0 16px ${a.color}80`:"none"},children:a.highlight&&e&&s.jsx("span",{className:"bar-label-inside font-mono",children:"YOU ARE HERE ⭐"})}),s.jsx("span",{className:"bar-tick-label bar-tick-right font-mono",style:{left:`${l+c}%`},children:nd(a.range[1])})]})]},o)}),s.jsx("div",{className:"x-axis",children:[0,1e6,2e6,3e6,4e6,45e5].map(a=>s.jsx("span",{className:"x-label font-mono",style:{left:`${a/td*100}%`},children:nd(a)},a))})]}),s.jsxs("div",{className:"skill-premium-panel",children:[s.jsx("h3",{className:"premium-title font-mono",children:"// SKILL PREMIUM DRIVERS"}),s.jsx("p",{className:"premium-desc",children:"These niche skills push compensation above market average:"}),s.jsx("div",{className:"premium-list",children:I3.map((a,o)=>s.jsxs("div",{className:"premium-row",style:{animationDelay:`${o*.1}s`},children:[s.jsx("div",{className:"premium-bar-bg",children:s.jsx("div",{className:"premium-bar",style:{width:e?a.bonus.replace("+","").replace("%","")+"%":"0%",background:a.color,transitionDelay:`${.5+o*.12}s`}})}),s.jsxs("div",{className:"premium-info",children:[s.jsx("span",{className:"premium-skill",children:a.skill}),s.jsx("span",{className:"premium-bonus font-mono",style:{color:a.color},children:a.bonus})]})]},o))}),s.jsx("div",{className:"disclaimer font-mono",children:"* Based on Naukri/LinkedIn 2025 mid-level India market data"})]})]})]}),s.jsx("style",{children:`
        .salary-section {
          background: var(--bg-secondary);
          border-bottom: 1px solid var(--border-color);
        }

        .salary-layout {
          display: grid;
          grid-template-columns: 1.3fr 1fr;
          gap: 40px;
          align-items: start;
        }

        .salary-chart {
          display: flex;
          flex-direction: column;
          gap: 16px;
          position: relative;
        }

        .salary-row {
          display: flex;
          flex-direction: column;
          gap: 4px;
          padding: 10px 12px;
          border-radius: 8px;
          transition: background 0.2s;
          cursor: default;
        }

        .salary-row.highlight-row {
          background: rgba(94,90,209,0.08);
          border: 1px solid rgba(94,90,209,0.2);
        }

        .salary-row.hovered {
          background: rgba(94,90,209,0.05);
        }

        .row-label {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 4px;
        }

        .row-icon { font-size: 14px; }

        .row-name {
          font-size: 13px;
          font-weight: 500;
          color: var(--text-dark);
        }

        .highlight-row .row-name {
          color: var(--accent-purple);
          font-weight: 700;
        }

        .bar-track {
          height: 24px;
          background: rgba(17,28,45,0.06);
          border-radius: 4px;
          position: relative;
          overflow: visible;
        }

        .bar-fill {
          position: absolute;
          height: 100%;
          border-radius: 4px;
          transition: width 1.2s cubic-bezier(0.34, 1.56, 0.64, 1);
          display: flex;
          align-items: center;
          overflow: hidden;
        }

        .bar-label-inside {
          position: absolute;
          left: 50%;
          transform: translateX(-50%);
          font-size: 8px;
          color: #fff;
          font-weight: 700;
          white-space: nowrap;
          letter-spacing: 0.05em;
          animation: fadeIn 0.5s ease 1.5s both;
        }

        .bar-tick-label {
          position: absolute;
          top: -18px;
          font-size: 9px;
          color: rgba(17,28,45,0.4);
          transform: translateX(-50%);
        }

        .bar-tick-right {
          top: auto;
          bottom: -18px;
        }

        .x-axis {
          position: relative;
          height: 20px;
          margin-top: 8px;
          border-top: 1px solid rgba(17,28,45,0.08);
        }

        .x-label {
          position: absolute;
          transform: translateX(-50%);
          font-size: 9px;
          color: rgba(17,28,45,0.4);
          top: 4px;
        }

        /* Skill premium */
        .skill-premium-panel {
          background: #fff;
          border: 1px solid var(--border-color);
          border-radius: 14px;
          padding: 24px;
          box-shadow: 0 2px 12px rgba(0,0,0,0.03);
        }

        .premium-title {
          font-size: 10px;
          color: var(--accent-purple);
          letter-spacing: 0.15em;
          margin-bottom: 8px;
        }

        .premium-desc {
          font-size: 12px;
          color: var(--text-muted-dark);
          margin-bottom: 20px;
        }

        .premium-list {
          display: flex;
          flex-direction: column;
          gap: 14px;
        }

        .premium-row {
          display: flex;
          flex-direction: column;
          gap: 4px;
          animation: fadeIn 0.5s ease both;
        }

        .premium-info {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .premium-skill {
          font-size: 12px;
          color: var(--text-dark);
          font-weight: 500;
        }

        .premium-bonus {
          font-size: 12px;
          font-weight: 700;
        }

        .premium-bar-bg {
          height: 5px;
          background: rgba(17,28,45,0.06);
          border-radius: 3px;
          overflow: hidden;
        }

        .premium-bar {
          height: 100%;
          border-radius: 3px;
          transition: width 1.2s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        .disclaimer {
          margin-top: 20px;
          font-size: 9px;
          color: rgba(17,28,45,0.35);
          letter-spacing: 0.05em;
          border-top: 1px solid var(--border-color);
          padding-top: 12px;
        }

        @media (max-width: 900px) {
          .salary-layout { grid-template-columns: 1fr; }
        }
      `})]})}function D3(){const[e,t]=j.useState(!1),[n,r]=j.useState("music"),i=[{id:1,title:"Vocal Cover Track",subtitle:"Rahul Garg — Original Performance",url:"https://youtu.be/WEllK2cbbt0?si=3ZsXfbgp6LQx1mgc",thumbnail:"https://img.youtube.com/vi/WEllK2cbbt0/maxresdefault.jpg",duration:"3:45",tag:"VOCAL"}],a=[{icon:"🎸",title:"Guitar Player",desc:"Fingerstyle acoustic. Learns chord progressions and self-composes rhythmic arrangements.",color:"#f6ad55"},{icon:"🏸",title:"State-Level Badminton",desc:"Competed at state tournaments. Trains at Phase 7 Mohali Sports Complex.",color:"#68d391"},{icon:"✏️",title:"Portrait Sketching",desc:"Fine detail pencil sketching. Translates to pixel-perfect UI implementation.",color:"#fc8181"},{icon:"🏔️",title:"High-Altitude Trekking",desc:"Himalayan trekker. Has summited several Himachal Pradesh trail peaks.",color:"#b794f4"},{icon:"💪",title:"Fitness & Strength Training",desc:"Dedicated athlete — consistency in gym mirrors consistency in code quality.",color:"#76e4f7"},{icon:"🌐",title:"Helping Peers Get Jobs",desc:"Reviewed 50+ CVs, crafted referrals, coached DSA for campus placements.",color:"#10b981"}];return s.jsxs("section",{id:"multimedia",className:"multimedia-section dark-section",children:[s.jsx("div",{className:"mm-grid-overlay"}),s.jsxs("div",{className:"container",children:[s.jsx("span",{className:"section-tag",style:{color:"var(--accent-lavender)"},children:"Beyond the Keyboard"}),s.jsx("h2",{className:"section-title light",children:"Life, Hobbies & Passions 🎭"}),s.jsx("p",{className:"section-subtitle light",children:"The human behind the code — professional singer, badminton player, guitarist, trekker, fitness enthusiast, and career mentor."}),s.jsx("div",{className:"mm-tabs",children:["music","hobbies"].map(o=>s.jsx("button",{className:`mm-tab ${n===o?"active":""}`,onClick:()=>r(o),children:o==="music"?s.jsxs(s.Fragment,{children:[s.jsx(pu,{size:14})," Music"]}):s.jsx(s.Fragment,{children:"🎭 Hobbies & Life"})},o))}),n==="music"&&s.jsxs("div",{className:"music-showcase",children:[s.jsxs("div",{className:"song-hero",children:[s.jsxs("div",{className:"song-album-art",children:[s.jsx("img",{src:i[0].thumbnail,alt:"Rahul Garg singing",className:"album-thumbnail",onError:o=>{o.target.style.display="none",o.target.parentNode.classList.add("no-img")}}),s.jsx("div",{className:"album-overlay",children:s.jsx("a",{href:i[0].url,target:"_blank",rel:"noreferrer",className:"play-btn-big",onClick:()=>t(!0),children:s.jsx(fu,{size:28,fill:"white"})})}),s.jsxs("div",{className:"album-badge font-mono",children:[s.jsx(jk,{size:11}),i[0].tag]})]}),s.jsxs("div",{className:"song-info",children:[s.jsx("div",{className:"song-waveform",children:Array.from({length:40}).map((o,l)=>s.jsx("div",{className:`wave-bar ${e?"playing":""}`,style:{height:`${Math.random()*60+10}%`,animationDelay:`${l/40*.8}s`,animationDuration:`${.4+Math.random()*.4}s`}},l))}),s.jsx("h3",{className:"song-title",children:i[0].title}),s.jsx("p",{className:"song-sub",children:i[0].subtitle}),s.jsxs("div",{className:"song-meta font-mono",children:[s.jsxs("span",{children:["⏱ ",i[0].duration]}),s.jsx("span",{children:"📍 Recorded in Mohali"}),s.jsx("span",{children:"🎤 Rahul Garg"})]}),s.jsxs("div",{className:"song-actions",children:[s.jsxs("a",{href:i[0].url,target:"_blank",rel:"noreferrer",className:"song-play-btn",onClick:()=>t(!0),children:[s.jsx(fu,{size:16}),s.jsx("span",{children:"Play on YouTube"})]}),s.jsxs("a",{href:i[0].url,target:"_blank",rel:"noreferrer",className:"song-link-btn",children:[s.jsx(Ay,{size:14}),"Open Track"]})]}),s.jsx("p",{className:"song-story",children:'🎵 "I discovered my love for singing in college. Music teaches rhythm, patience, and emotional expression — qualities I bring into team collaboration and architecture design. I believe engineers who have creative outlets build better software."'})]})]}),s.jsxs("div",{className:"music-facts",children:[s.jsx("div",{className:"music-fact",children:"🎸 Also plays acoustic guitar"}),s.jsx("div",{className:"music-fact",children:"🎵 Genres: Bollywood, Sufi, Classical fusion"}),s.jsx("div",{className:"music-fact",children:"🎤 Stage performer since 2019"}),s.jsx("div",{className:"music-fact",children:"🎧 Produced solo tracks at home studio"})]})]}),n==="hobbies"&&s.jsxs("div",{className:"hobbies-showcase",children:[s.jsx("div",{className:"hobbies-grid",children:a.map((o,l)=>s.jsxs("div",{className:"hobby-card",style:{"--hobby-color":o.color,animationDelay:`${l*.08}s`},children:[s.jsxs("div",{className:"hobby-emoji-wrap",children:[s.jsx("span",{className:"hobby-emoji",children:o.icon}),s.jsx("div",{className:"hobby-glow",style:{background:o.color+"30"}})]}),s.jsx("h4",{className:"hobby-title",style:{color:o.color},children:o.title}),s.jsx("p",{className:"hobby-desc",children:o.desc})]},l))}),s.jsxs("blockquote",{className:"philosophy-quote",children:[s.jsx("span",{className:"quote-mark",children:'"'}),s.jsx("p",{children:"The best engineers I know are also artists, athletes, or adventurers. Diverse experience sharpens your problem-solving instincts beyond what any textbook can teach."}),s.jsx("cite",{children:"— Rahul Garg, Sec 94, Mohali"})]})]})]}),s.jsx("style",{children:`
        .multimedia-section {
          background: var(--bg-dark);
          border-bottom: 1px solid rgba(245,243,239,0.1);
          position: relative;
          overflow: hidden;
        }

        .mm-grid-overlay {
          position: absolute; inset: 0;
          background-image:
            radial-gradient(rgba(94,90,209,0.04) 1px, transparent 1px);
          background-size: 24px 24px;
          pointer-events: none;
        }

        .mm-tabs {
          display: flex;
          gap: 10px;
          margin-bottom: 32px;
        }

        .mm-tab {
          display: flex;
          align-items: center;
          gap: 7px;
          background: rgba(245,243,239,0.05);
          border: 1px solid rgba(245,243,239,0.1);
          border-radius: 8px;
          padding: 10px 20px;
          font-size: 13px;
          font-weight: 500;
          color: rgba(245,243,239,0.5);
          cursor: pointer;
          transition: all 0.2s;
          font-family: var(--font-sans);
        }

        .mm-tab.active {
          background: rgba(94,90,209,0.15);
          border-color: rgba(94,90,209,0.4);
          color: var(--accent-lavender);
        }

        .mm-tab:hover:not(.active) {
          background: rgba(245,243,239,0.08);
          color: rgba(245,243,239,0.8);
        }

        /* Music tab */
        .music-showcase { animation: fadeIn 0.4s ease; }

        .song-hero {
          display: grid;
          grid-template-columns: 360px 1fr;
          gap: 40px;
          align-items: center;
          margin-bottom: 28px;
        }

        .song-album-art {
          position: relative;
          aspect-ratio: 1;
          border-radius: 16px;
          overflow: hidden;
          background: linear-gradient(135deg, var(--bg-darker), #1a0a2e);
          min-height: 260px;
        }

        .song-album-art.no-img {
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .album-thumbnail {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        .album-overlay {
          position: absolute;
          inset: 0;
          background: rgba(0,0,0,0.4);
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transition: opacity 0.3s;
        }

        .song-album-art:hover .album-overlay { opacity: 1; }

        .play-btn-big {
          width: 64px; height: 64px;
          background: rgba(255,255,255,0.95);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: transform 0.2s;
          color: var(--accent-purple);
        }

        .play-btn-big:hover { transform: scale(1.1); }

        .album-badge {
          position: absolute;
          top: 12px; right: 12px;
          display: flex;
          align-items: center;
          gap: 4px;
          background: rgba(252,129,129,0.9);
          color: white;
          font-size: 9px;
          font-weight: 700;
          padding: 4px 8px;
          border-radius: 100px;
          letter-spacing: 0.1em;
        }

        /* Waveform */
        .song-waveform {
          display: flex;
          align-items: center;
          gap: 2px;
          height: 40px;
          margin-bottom: 16px;
        }

        .wave-bar {
          width: 3px;
          background: rgba(160,175,238,0.3);
          border-radius: 2px;
          min-height: 4px;
          transition: background 0.3s;
        }

        .wave-bar.playing {
          background: var(--accent-lavender);
          animation: waveAnim var(--anim-dur, 0.6s) ease-in-out infinite alternate;
        }

        @keyframes waveAnim {
          from { transform: scaleY(0.3); }
          to { transform: scaleY(1); }
        }

        .song-title {
          font-size: 22px;
          font-weight: 600;
          color: var(--text-light);
          margin-bottom: 6px;
        }

        .song-sub {
          font-size: 13px;
          color: var(--text-muted-light);
          margin-bottom: 14px;
        }

        .song-meta {
          display: flex;
          gap: 16px;
          flex-wrap: wrap;
          font-size: 10px;
          color: rgba(245,243,239,0.4);
          margin-bottom: 20px;
          letter-spacing: 0.05em;
        }

        .song-actions {
          display: flex;
          gap: 10px;
          margin-bottom: 20px;
        }

        .song-play-btn {
          display: flex;
          align-items: center;
          gap: 8px;
          background: #fc8181;
          color: #fff;
          border-radius: 100px;
          padding: 10px 22px;
          font-size: 13px;
          font-weight: 600;
          text-decoration: none;
          transition: 0.2s;
        }

        .song-play-btn:hover {
          background: #f56565;
          transform: translateY(-2px);
          box-shadow: 0 6px 16px rgba(252,129,129,0.4);
        }

        .song-link-btn {
          display: flex;
          align-items: center;
          gap: 6px;
          background: rgba(245,243,239,0.08);
          border: 1px solid rgba(245,243,239,0.12);
          color: var(--text-muted-light);
          border-radius: 100px;
          padding: 10px 18px;
          font-size: 13px;
          text-decoration: none;
          transition: 0.2s;
        }

        .song-link-btn:hover {
          background: rgba(245,243,239,0.12);
          color: var(--text-light);
        }

        .song-story {
          font-size: 12.5px;
          line-height: 1.6;
          color: var(--text-muted-light);
          font-style: italic;
          border-left: 2px solid rgba(252,129,129,0.4);
          padding-left: 14px;
        }

        .music-facts {
          display: flex;
          gap: 10px;
          flex-wrap: wrap;
        }

        .music-fact {
          background: rgba(245,243,239,0.05);
          border: 1px solid rgba(245,243,239,0.08);
          border-radius: 100px;
          padding: 6px 14px;
          font-size: 12px;
          color: rgba(245,243,239,0.6);
        }

        /* Hobbies tab */
        .hobbies-showcase { animation: fadeIn 0.4s ease; }

        .hobbies-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
          gap: 16px;
          margin-bottom: 36px;
        }

        .hobby-card {
          background: rgba(245,243,239,0.04);
          border: 1px solid rgba(245,243,239,0.07);
          border-radius: 14px;
          padding: 22px;
          transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
          animation: fadeIn 0.5s ease both;
        }

        .hobby-card:hover {
          transform: translateY(-6px);
          border-color: var(--hobby-color);
          background: rgba(245,243,239,0.07);
          box-shadow: 0 12px 28px rgba(0,0,0,0.3), 0 0 20px var(--hobby-color, transparent);
        }

        .hobby-emoji-wrap {
          position: relative;
          width: 52px; height: 52px;
          margin-bottom: 14px;
        }

        .hobby-emoji {
          font-size: 32px;
          position: relative;
          z-index: 1;
        }

        .hobby-glow {
          position: absolute;
          inset: -4px;
          border-radius: 50%;
          filter: blur(12px);
          z-index: 0;
        }

        .hobby-title {
          font-size: 15px;
          font-weight: 600;
          margin-bottom: 8px;
        }

        .hobby-desc {
          font-size: 12px;
          line-height: 1.5;
          color: rgba(245,243,239,0.55);
        }

        .philosophy-quote {
          background: rgba(94,90,209,0.1);
          border-left: 3px solid var(--accent-purple);
          border-radius: 0 12px 12px 0;
          padding: 24px 28px;
          position: relative;
        }

        .quote-mark {
          font-size: 60px;
          color: var(--accent-purple);
          line-height: 1;
          font-family: Georgia, serif;
          position: absolute;
          top: 10px; left: 16px;
          opacity: 0.4;
        }

        .philosophy-quote p {
          font-size: 15px;
          line-height: 1.7;
          color: var(--text-muted-light);
          font-style: italic;
          margin-left: 24px;
          margin-bottom: 12px;
        }

        .philosophy-quote cite {
          font-size: 11px;
          color: var(--accent-lavender);
          font-family: var(--font-mono);
          font-style: normal;
          margin-left: 24px;
          display: block;
        }

        @media (max-width: 900px) {
          .song-hero { grid-template-columns: 1fr; }
          .song-album-art { max-width: 300px; margin: 0 auto; }
        }
      `})]})}const Wg=[{id:1,category:"System Design",question:"Design a real-time bet processing system that handles 50k transactions/day.",icon:"🏗️",color:"#b794f4",answer:{headline:"Event-Driven Architecture with Kafka + Redis",steps:[{label:"API Layer",desc:"Node.js REST endpoints with JWT auth and rate limiting. Input validation via Joi schema."},{label:"Kafka Producer",desc:'Publish bet events to topic "bet-transactions" partitioned by userId for ordering. Retry with exponential backoff.'},{label:"Redis Cache",desc:"Cache user balance with TTL=30s. Optimistic locking for concurrent bets. Prevents double-spend."},{label:"Kafka Consumer",desc:"Async consumer group processes bets, updates MySQL, sends notifications via Socket.IO."},{label:"MySQL",desc:"ACID-compliant write for bet records. Compound index on (userId, createdAt) for fast queries."},{label:"Read Replica",desc:"All GET requests route to replica. Reduces master load by 70%."}],techTags:["Kafka","Redis","MySQL","Socket.IO","Node.js"],tradeoffs:"Chose Kafka over RabbitMQ for message log durability and replay capability. Redis LRU over Memcached for Pub/Sub support."}},{id:2,category:"Backend Engineering",question:"How would you optimize a slow API endpoint (150ms avg) that queries the database?",icon:"⚡",color:"#68d391",answer:{headline:"Cache-Aside + Query Optimization Strategy",steps:[{label:"Profile First",desc:"Add query-level timing logs. Use EXPLAIN ANALYZE in MySQL to inspect execution plan."},{label:"Index Analysis",desc:"Add compound B-Tree index on WHERE clause columns. Covering index eliminates table scan."},{label:"Redis Cache",desc:"Implement cache-aside pattern: check Redis → miss → DB query → populate cache with TTL."},{label:"Query Refactor",desc:"Replace N+1 queries with JOIN or eager loading. Batch queries with DataLoader pattern."},{label:"Connection Pool",desc:"Configure mysql2/promise pool (max: 10). Avoid new connection per request overhead."},{label:"Result",desc:"150ms → 4ms (Redis hit). 150ms → 18ms (DB with indexes). 96% latency reduction."}],techTags:["Redis","MySQL EXPLAIN","B-Tree Index","Query Profiling"],tradeoffs:"Cache invalidation is the hard part — used key-based TTL + event-driven cache bust on write operations."}},{id:3,category:"DSA",question:"Find the longest subarray with equal number of 0s and 1s.",icon:"🧮",color:"#63b3ed",answer:{headline:"Prefix Sum + HashMap — O(n) Solution",steps:[{label:"Key Insight",desc:"Replace 0 with -1. Find longest subarray with sum = 0."},{label:"Prefix Sum",desc:"Track running sum. If sum[j] - sum[i] = 0, subarray [i+1, j] is valid."},{label:"HashMap",desc:"Store first occurrence of each prefix sum. Map: { sum → index }."},{label:"Algorithm",desc:"For each element: if sum seen before, maxLen = max(maxLen, i - map[sum]). Else map[sum] = i."},{label:"Complexity",desc:"O(n) time, O(n) space. Single pass. No sorting required."},{label:"Edge Cases",desc:"Initialize map with {0: -1} to handle subarrays starting at index 0."}],techTags:["HashMap","Prefix Sum","Sliding Window variant","LeetCode Medium"],tradeoffs:"Brute force O(n²) — sorted out with prefix sum insight from LeetCode contest practice."}},{id:4,category:"Architecture",question:"Why did you choose NestJS over plain Express for the judicial data system?",icon:"⚖️",color:"#f6ad55",answer:{headline:"Structured, Scalable Architecture with TypeScript",steps:[{label:"Modules",desc:"NestJS module system enforces feature-based separation. CaseModule, JudgeModule, AuditModule each isolated."},{label:"Decorators",desc:"@Injectable, @Controller, @UseGuards provide clean separation of concerns without boilerplate."},{label:"DI Container",desc:"Built-in Dependency Injection. Services injected via constructor. Testable with mock providers."},{label:"TypeScript First",desc:"Full type safety on DTOs, entities, and service contracts. Catches runtime bugs at compile time."},{label:"Guards & Pipes",desc:"Role guards for judicial access control. Validation pipes on all incoming request DTOs."},{label:"Express Alternative",desc:"Express is great for microservices but NestJS reduces code sprawl in large government systems."}],techTags:["NestJS","TypeScript","DI Pattern","Decorators","Guards"],tradeoffs:"Added ~20KB bundle overhead vs plain Express, but saved weeks of architecture boilerplate. Worth it for team scale."}}];function z3(){const[e,t]=j.useState(null),[n,r]=j.useState({}),[i,a]=j.useState({}),[o,l]=j.useState({}),c=d=>{if(e===d){t(null);return}t(d),r(p=>({...p,[d]:!0})),a(p=>({...p,[d]:0})),l(p=>({...p,[d]:[]}));const u=Wg.find(p=>p.id===d);u&&u.answer.steps.forEach((p,f)=>{setTimeout(()=>{l(h=>({...h,[d]:[...h[d]||[],f]}))},300+f*250)})};return s.jsxs("section",{id:"interview-prep",className:"interview-section dark-section",children:[s.jsxs("div",{className:"container",children:[s.jsx("span",{className:"section-tag",style:{color:"var(--accent-lavender)"},children:"Interview Ready"}),s.jsx("h2",{className:"section-title light",children:"Live Interview Answer Board"}),s.jsx("p",{className:"section-subtitle light",children:"Real answers to real interview questions — system design, backend optimization, DSA, and architectural decisions. Click to reveal Rahul's structured responses."}),s.jsx("div",{className:"interview-grid",children:Wg.map(d=>{const u=e===d.id,p=o[d.id]||[];return s.jsxs("div",{className:`interview-card ${u?"open":""}`,style:{"--q-color":d.color},children:[s.jsxs("div",{className:"q-header",onClick:()=>c(d.id),children:[s.jsx("div",{className:"q-icon-wrap",style:{background:d.color+"20"},children:s.jsx("span",{className:"q-icon",children:d.icon})}),s.jsxs("div",{className:"q-meta",children:[s.jsx("span",{className:"q-category font-mono",style:{color:d.color},children:d.category}),s.jsx("p",{className:"q-question",children:d.question})]}),s.jsx("div",{className:`q-chevron ${u?"open":""}`,children:s.jsx("span",{children:"▼"})})]}),u&&s.jsxs("div",{className:"q-answer",children:[s.jsxs("div",{className:"answer-headline",style:{borderColor:d.color+"50"},children:[s.jsx("span",{className:"font-mono",style:{color:d.color},children:"// ANSWER:"}),s.jsx("strong",{children:d.answer.headline})]}),s.jsx("div",{className:"answer-steps",children:d.answer.steps.map((f,h)=>s.jsxs("div",{className:`answer-step ${p.includes(h)?"revealed":""}`,children:[s.jsx("div",{className:"step-num font-mono",style:{color:d.color},children:String(h+1).padStart(2,"0")}),s.jsxs("div",{className:"step-content",children:[s.jsx("strong",{className:"step-label",children:f.label}),s.jsx("p",{className:"step-desc",children:f.desc})]})]},h))}),s.jsx("div",{className:"answer-tags",children:d.answer.techTags.map((f,h)=>s.jsx("span",{className:"answer-tag font-mono",style:{color:d.color,borderColor:d.color+"40"},children:f},h))}),s.jsxs("div",{className:"tradeoff-box",style:{borderColor:d.color+"30"},children:[s.jsx("span",{className:"font-mono tradeoff-label",style:{color:d.color},children:"💡 TRADEOFF INSIGHT:"}),s.jsx("p",{children:d.answer.tradeoffs})]})]})]},d.id)})})]}),s.jsx("style",{children:`
        .interview-section {
          background: #08090f;
          border-bottom: 1px solid rgba(245,243,239,0.08);
        }

        .interview-grid {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .interview-card {
          background: rgba(245,243,239,0.03);
          border: 1px solid rgba(245,243,239,0.08);
          border-radius: 14px;
          overflow: hidden;
          transition: border-color 0.3s;
        }

        .interview-card.open {
          border-color: var(--q-color);
          box-shadow: 0 8px 32px rgba(0,0,0,0.3), 0 0 20px var(--q-color, transparent);
        }

        .q-header {
          display: flex;
          align-items: flex-start;
          gap: 16px;
          padding: 20px 24px;
          cursor: pointer;
          transition: background 0.2s;
        }

        .q-header:hover {
          background: rgba(245,243,239,0.04);
        }

        .q-icon-wrap {
          width: 44px; height: 44px;
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .q-icon { font-size: 22px; }

        .q-meta { flex: 1; }
        .q-category {
          font-size: 9px;
          font-weight: 700;
          letter-spacing: 0.15em;
          display: block;
          margin-bottom: 6px;
        }

        .q-question {
          font-size: 14px;
          line-height: 1.5;
          color: var(--text-light);
          font-weight: 500;
        }

        .q-chevron {
          color: rgba(245,243,239,0.3);
          transition: transform 0.3s;
          flex-shrink: 0;
          font-size: 12px;
          padding-top: 4px;
        }

        .q-chevron.open {
          transform: rotate(180deg);
          color: var(--q-color);
        }

        /* Answer area */
        .q-answer {
          padding: 0 24px 24px;
          animation: fadeIn 0.3s ease;
        }

        .answer-headline {
          padding: 14px 16px;
          background: rgba(245,243,239,0.04);
          border-radius: 8px;
          border-left: 3px solid;
          margin-bottom: 20px;
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .answer-headline span { font-size: 10px; letter-spacing: 0.1em; }
        .answer-headline strong { font-size: 15px; color: var(--text-light); }

        .answer-steps {
          display: flex;
          flex-direction: column;
          gap: 10px;
          margin-bottom: 18px;
        }

        .answer-step {
          display: flex;
          gap: 14px;
          opacity: 0;
          transform: translateX(-20px);
          transition: opacity 0.4s ease, transform 0.4s ease;
        }

        .answer-step.revealed {
          opacity: 1;
          transform: translateX(0);
        }

        .step-num {
          font-size: 12px;
          font-weight: 700;
          min-width: 24px;
          padding-top: 2px;
        }

        .step-content { flex: 1; }

        .step-label {
          font-size: 12px;
          color: var(--text-light);
          display: block;
          margin-bottom: 2px;
        }

        .step-desc {
          font-size: 11.5px;
          line-height: 1.5;
          color: rgba(245,243,239,0.55);
        }

        .answer-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 7px;
          margin-bottom: 14px;
        }

        .answer-tag {
          font-size: 10px;
          padding: 4px 10px;
          border: 1px solid;
          border-radius: 100px;
          font-weight: 500;
          letter-spacing: 0.05em;
        }

        .tradeoff-box {
          background: rgba(245,243,239,0.03);
          border-left: 2px solid;
          border-radius: 0 8px 8px 0;
          padding: 12px 16px;
        }

        .tradeoff-label {
          font-size: 9px;
          font-weight: 700;
          letter-spacing: 0.1em;
          display: block;
          margin-bottom: 5px;
        }

        .tradeoff-box p {
          font-size: 12px;
          line-height: 1.5;
          color: rgba(245,243,239,0.5);
        }
      `})]})}function _3(){const[e,t]=j.useState(0),[n,r]=j.useState("hero"),[i,a]=j.useState(!1),o=[{id:"hero",label:"Home"},{id:"trophy-room",label:"Achievements"},{id:"career-timeline-3d",label:"Career"},{id:"experience",label:"Experience"},{id:"live-code",label:"Code"},{id:"arch-flow",label:"Architecture"},{id:"tech-comparison",label:"Decisions"},{id:"interview-prep",label:"Interview"},{id:"skills",label:"Skills"},{id:"skill-radar",label:"Radar"},{id:"activity-heatmap",label:"Activity"},{id:"multimedia",label:"Life"},{id:"contact",label:"Contact"}];return j.useEffect(()=>{const l=()=>{const c=window.scrollY,d=document.documentElement.scrollHeight-window.innerHeight;t(d>0?c/d*100:0),a(c>600);const u=o.map(p=>document.getElementById(p.id)).filter(Boolean);for(let p=u.length-1;p>=0;p--)if(u[p].getBoundingClientRect().top<=window.innerHeight*.4){r(o[p].id);break}};return window.addEventListener("scroll",l,{passive:!0}),()=>window.removeEventListener("scroll",l)},[]),s.jsxs(s.Fragment,{children:[s.jsx("div",{className:"scroll-progress-bar",children:s.jsx("div",{className:"scroll-progress-fill",style:{width:`${e}%`}})}),s.jsx("nav",{className:"side-nav-dots","aria-label":"Page sections",children:o.map(l=>s.jsxs("button",{className:`nav-dot ${n===l.id?"active":""}`,onClick:()=>{var c;return(c=document.getElementById(l.id))==null?void 0:c.scrollIntoView({behavior:"smooth"})},title:l.label,children:[s.jsx("span",{className:"dot-inner"}),s.jsx("span",{className:"dot-tooltip",children:l.label})]},l.id))}),i&&s.jsx("button",{className:"scroll-top-btn",onClick:()=>window.scrollTo({top:0,behavior:"smooth"}),title:"Back to top",children:"↑"}),s.jsx("style",{children:`
        .scroll-progress-bar {
          position: fixed;
          top: 0; left: 0; right: 0;
          height: 3px;
          background: rgba(94,90,209,0.15);
          z-index: 99998;
          pointer-events: none;
        }

        .scroll-progress-fill {
          height: 100%;
          background: linear-gradient(90deg, var(--accent-purple), var(--accent-lavender), #fc8181);
          background-size: 200% 100%;
          animation: progressShimmer 2s linear infinite;
          transition: width 0.1s linear;
          box-shadow: 0 0 8px rgba(94,90,209,0.6);
        }

        @keyframes progressShimmer {
          0% { background-position: 0% 0; }
          100% { background-position: 200% 0; }
        }

        /* Side dots */
        .side-nav-dots {
          position: fixed;
          right: 20px;
          top: 50%;
          transform: translateY(-50%);
          z-index: 9000;
          display: flex;
          flex-direction: column;
          gap: 10px;
          padding: 12px 8px;
          background: rgba(14,23,37,0.6);
          backdrop-filter: blur(12px);
          border: 1px solid rgba(245,243,239,0.08);
          border-radius: 20px;
        }

        .nav-dot {
          position: relative;
          background: none;
          border: none;
          cursor: pointer;
          padding: 4px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .dot-inner {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: rgba(245,243,239,0.2);
          transition: all 0.3s cubic-bezier(0.34,1.56,0.64,1);
          display: block;
        }

        .nav-dot:hover .dot-inner {
          background: rgba(245,243,239,0.6);
          transform: scale(1.5);
        }

        .nav-dot.active .dot-inner {
          background: var(--accent-lavender);
          transform: scale(1.4);
          box-shadow: 0 0 8px var(--accent-lavender);
        }

        .dot-tooltip {
          position: absolute;
          right: 100%;
          margin-right: 10px;
          background: rgba(14,23,37,0.95);
          border: 1px solid rgba(245,243,239,0.1);
          color: rgba(245,243,239,0.85);
          font-size: 10px;
          font-family: var(--font-mono);
          padding: 4px 10px;
          border-radius: 6px;
          white-space: nowrap;
          opacity: 0;
          transform: translateX(8px);
          pointer-events: none;
          transition: all 0.2s;
          letter-spacing: 0.05em;
        }

        .nav-dot:hover .dot-tooltip {
          opacity: 1;
          transform: translateX(0);
        }

        /* Scroll to top */
        .scroll-top-btn {
          position: fixed;
          bottom: 24px;
          left: 50%;
          transform: translateX(-50%);
          z-index: 8000;
          background: rgba(14,23,37,0.9);
          border: 1px solid rgba(245,243,239,0.15);
          color: var(--accent-lavender);
          width: 40px; height: 40px;
          border-radius: 50%;
          font-size: 18px;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.34,1.56,0.64,1);
          animation: fadeIn 0.3s ease;
          backdrop-filter: blur(8px);
        }

        .scroll-top-btn:hover {
          background: var(--accent-purple);
          color: white;
          transform: translateX(-50%) translateY(-4px);
          box-shadow: 0 8px 20px rgba(94,90,209,0.4);
        }

        @media (max-width: 768px) {
          .side-nav-dots { display: none; }
        }
      `})]})}const Ye=[{phase:"01",title:"Understand Requirements",icon:"🔍",color:"#63b3ed",desc:"Deep-dive into business requirements. Map edge cases, scalability needs, and non-functional requirements.",details:["Stakeholder interviews","API contract design","Non-functional requirements","Load estimation"],duration:"1-2 days"},{phase:"02",title:"System Design",icon:"🏗️",color:"#b794f4",desc:"Architecture blueprint using HLD + LLD. Choose tech stack based on tradeoffs, not trends.",details:["HLD Diagrams","DB schema design","API endpoint contract","Capacity planning"],duration:"1-3 days"},{phase:"03",title:"Database Schema",icon:"🗄️",color:"#f6ad55",desc:"Design normalized/denormalized schemas, indexes, and relationships before writing a single line of code.",details:["ER Diagram","Compound indexes","Foreign key strategy","Migration scripts"],duration:"0.5-1 day"},{phase:"04",title:"Core API Development",icon:"🔧",color:"#68d391",desc:"Build backend with TDD. Write tests first, implement logic, refactor for performance.",details:["Unit tests (Jest)","API endpoints","Business logic","Error handling"],duration:"3-7 days"},{phase:"05",title:"Integration & Events",icon:"⚡",color:"#fc8181",desc:"Wire Kafka queues, Redis caching, webhooks, and third-party APIs. Stress test each integration.",details:["Kafka producers","Redis caching layer","Webhook handlers","External API mocks"],duration:"2-4 days"},{phase:"06",title:"Review & Deploy",icon:"🚀",color:"#10b981",desc:"Code review, SonarQube scan, load testing, CI/CD pipeline, Nginx configuration, PM2 cluster.",details:["PR review","Load testing (k6)","CI/CD pipeline","Nginx + SSL setup"],duration:"1-2 days"}];function O3(){const[e,t]=j.useState(null),[n,r]=j.useState([]),[i,a]=j.useState(!1),o=j.useRef(null);return j.useEffect(()=>{const l=new IntersectionObserver(([c])=>{c.isIntersecting&&(a(!0),Ye.forEach((d,u)=>{setTimeout(()=>{r(p=>[...p,u])},u*200)}),l.disconnect())},{threshold:.2});return o.current&&l.observe(o.current),()=>l.disconnect()},[]),s.jsxs("section",{id:"dev-workflow",className:"workflow-section dark-section",ref:o,children:[s.jsx("div",{className:"wf-bg-pattern"}),s.jsxs("div",{className:"container",children:[s.jsx("span",{className:"section-tag",style:{color:"var(--accent-lavender)"},children:"Engineering Process"}),s.jsx("h2",{className:"section-title light",children:"How I Build Software"}),s.jsx("p",{className:"section-subtitle light",children:"My battle-tested 6-phase engineering workflow — from requirement gathering to production deployment. Click any phase to inspect the details."}),s.jsx("div",{className:"workflow-pipeline",children:Ye.map((l,c)=>s.jsxs(Qu.Fragment,{children:[s.jsxs("div",{className:`wf-step ${n.includes(c)?"visible":""} ${e===c?"active":""}`,style:{"--step-color":l.color,animationDelay:`${c*.15}s`},onClick:()=>t(d=>d===c?null:c),"data-cursor":"Inspect",children:[s.jsx("div",{className:"wf-phase font-mono",style:{color:l.color},children:l.phase}),s.jsxs("div",{className:"wf-icon-ring",children:[s.jsx("span",{className:"wf-icon",children:l.icon}),s.jsx("div",{className:"wf-ring-pulse",style:{borderColor:l.color}})]}),s.jsx("div",{className:"wf-title",children:l.title}),s.jsx("div",{className:"wf-duration font-mono",style:{color:l.color},children:l.duration})]}),c<Ye.length-1&&s.jsxs("div",{className:`wf-connector ${i?"flowing":""}`,children:[s.jsx("div",{className:"connector-track",children:s.jsx("div",{className:"connector-flow",style:{animationDelay:`${c*.3}s`}})}),s.jsx("span",{className:"connector-arrow",style:{color:Ye[c+1].color},children:"›"})]})]},c))}),e!==null&&s.jsxs("div",{className:"wf-detail-card",style:{"--step-color":Ye[e].color,borderColor:Ye[e].color+"50"},children:[s.jsxs("div",{className:"wf-detail-header",children:[s.jsx("span",{className:"wf-detail-icon",children:Ye[e].icon}),s.jsxs("div",{children:[s.jsxs("span",{className:"font-mono wf-detail-phase",style:{color:Ye[e].color},children:["PHASE ",Ye[e].phase]}),s.jsx("h3",{className:"wf-detail-title",children:Ye[e].title})]}),s.jsxs("span",{className:"wf-detail-dur font-mono",style:{color:Ye[e].color},children:["⏱ ",Ye[e].duration]})]}),s.jsx("p",{className:"wf-detail-desc",children:Ye[e].desc}),s.jsx("div",{className:"wf-detail-tasks",children:Ye[e].details.map((l,c)=>s.jsxs("div",{className:"wf-task-item",style:{animationDelay:`${c*.1}s`},children:[s.jsx("span",{className:"wf-task-dot",style:{background:Ye[e].color}}),s.jsx("span",{children:l})]},c))})]}),s.jsxs("div",{className:"wf-metrics",children:[s.jsxs("div",{className:"wf-metric",children:[s.jsx("span",{className:"wf-metric-val font-mono",style:{color:"#10b981"},children:"100+"}),s.jsx("span",{className:"wf-metric-label",children:"APIs Delivered"})]}),s.jsxs("div",{className:"wf-metric",children:[s.jsx("span",{className:"wf-metric-val font-mono",style:{color:"#b794f4"},children:"99.9%"}),s.jsx("span",{className:"wf-metric-label",children:"Uptime Maintained"})]}),s.jsxs("div",{className:"wf-metric",children:[s.jsx("span",{className:"wf-metric-val font-mono",style:{color:"#f6ad55"},children:"3yr+"}),s.jsx("span",{className:"wf-metric-label",children:"Production Experience"})]}),s.jsxs("div",{className:"wf-metric",children:[s.jsx("span",{className:"wf-metric-val font-mono",style:{color:"#fc8181"},children:"0"}),s.jsx("span",{className:"wf-metric-label",children:"P0 Incidents Caused"})]})]})]}),s.jsx("style",{children:`
        .workflow-section {
          background: linear-gradient(180deg, #06080d 0%, var(--bg-darker) 100%);
          border-bottom: 1px solid rgba(245,243,239,0.08);
          position: relative;
          overflow: hidden;
        }

        .wf-bg-pattern {
          position: absolute;
          inset: 0;
          background: radial-gradient(ellipse at 50% 0%, rgba(94,90,209,0.08) 0%, transparent 60%);
          pointer-events: none;
        }

        /* Pipeline */
        .workflow-pipeline {
          display: flex;
          align-items: flex-start;
          gap: 0;
          overflow-x: auto;
          padding: 16px 0 28px;
          margin-bottom: 32px;
        }

        .wf-step {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 10px;
          min-width: 120px;
          cursor: pointer;
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 0.5s ease, transform 0.5s ease;
          padding: 12px 8px;
          border-radius: 12px;
          border: 1px solid transparent;
        }

        .wf-step.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .wf-step:hover, .wf-step.active {
          background: rgba(245,243,239,0.04);
          border-color: var(--step-color);
        }

        .wf-phase {
          font-size: 9px;
          font-weight: 700;
          letter-spacing: 0.15em;
        }

        .wf-icon-ring {
          position: relative;
          width: 56px; height: 56px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .wf-icon {
          font-size: 28px;
          position: relative;
          z-index: 1;
        }

        .wf-ring-pulse {
          position: absolute;
          inset: 0;
          border-radius: 50%;
          border: 2px solid;
          opacity: 0;
          transition: opacity 0.3s;
        }

        .wf-step:hover .wf-ring-pulse,
        .wf-step.active .wf-ring-pulse {
          opacity: 1;
          animation: ringPulse 1.5s ease-in-out infinite;
        }

        @keyframes ringPulse {
          0%, 100% { transform: scale(1); opacity: 0.6; }
          50% { transform: scale(1.2); opacity: 0.2; }
        }

        .wf-title {
          font-size: 11px;
          text-align: center;
          color: rgba(245,243,239,0.7);
          font-weight: 500;
          line-height: 1.3;
          max-width: 100px;
        }

        .wf-step.active .wf-title {
          color: var(--step-color);
          font-weight: 700;
        }

        .wf-duration {
          font-size: 9px;
          letter-spacing: 0.05em;
          opacity: 0.6;
        }

        /* Connector */
        .wf-connector {
          display: flex;
          align-items: center;
          flex-direction: column;
          gap: 4px;
          padding: 0 4px;
          min-width: 40px;
          align-self: center;
          padding-bottom: 28px;
        }

        .connector-track {
          width: 100%;
          height: 2px;
          background: rgba(245,243,239,0.08);
          border-radius: 1px;
          overflow: hidden;
          position: relative;
        }

        .connector-flow {
          height: 100%;
          width: 40%;
          background: linear-gradient(90deg, transparent, var(--accent-lavender), transparent);
          animation: flowAnim 2s linear infinite;
        }

        @keyframes flowAnim {
          from { transform: translateX(-200%); }
          to { transform: translateX(400%); }
        }

        .connector-arrow {
          font-size: 18px;
          font-weight: 300;
          opacity: 0.4;
        }

        /* Detail card */
        .wf-detail-card {
          background: rgba(245,243,239,0.03);
          border: 1px solid;
          border-radius: 14px;
          padding: 24px;
          margin-bottom: 32px;
          animation: fadeIn 0.35s ease;
        }

        .wf-detail-header {
          display: flex;
          align-items: center;
          gap: 14px;
          margin-bottom: 16px;
          border-bottom: 1px solid rgba(245,243,239,0.06);
          padding-bottom: 14px;
        }

        .wf-detail-icon { font-size: 32px; }

        .wf-detail-phase {
          font-size: 9px;
          letter-spacing: 0.15em;
          display: block;
          margin-bottom: 4px;
        }

        .wf-detail-title {
          font-size: 18px;
          font-weight: 600;
          color: var(--text-light);
        }

        .wf-detail-dur {
          margin-left: auto;
          font-size: 12px;
          white-space: nowrap;
        }

        .wf-detail-desc {
          font-size: 13px;
          line-height: 1.6;
          color: var(--text-muted-light);
          margin-bottom: 16px;
        }

        .wf-detail-tasks {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }

        .wf-task-item {
          display: flex;
          align-items: center;
          gap: 7px;
          background: rgba(245,243,239,0.05);
          border: 1px solid rgba(245,243,239,0.08);
          border-radius: 100px;
          padding: 5px 12px;
          font-size: 11px;
          color: rgba(245,243,239,0.7);
          animation: fadeIn 0.3s ease both;
        }

        .wf-task-dot {
          width: 5px; height: 5px; border-radius: 50%;
        }

        /* Metrics */
        .wf-metrics {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
        }

        .wf-metric {
          background: rgba(245,243,239,0.03);
          border: 1px solid rgba(245,243,239,0.06);
          border-radius: 12px;
          padding: 20px;
          text-align: center;
          transition: 0.2s;
        }

        .wf-metric:hover {
          background: rgba(245,243,239,0.06);
          transform: translateY(-2px);
        }

        .wf-metric-val {
          font-size: 28px;
          font-weight: 700;
          display: block;
          margin-bottom: 6px;
        }

        .wf-metric-label {
          font-size: 11px;
          color: rgba(245,243,239,0.4);
        }

        @media (max-width: 900px) {
          .wf-metrics { grid-template-columns: repeat(2, 1fr); }
          .workflow-pipeline { gap: 0; }
        }

        @media (max-width: 600px) {
          .wf-metrics { grid-template-columns: 1fr 1fr; }
        }
      `})]})}const uo=[{id:1,icon:"⚡",color:"#b794f4",text:"Solved LeetCode #847 — Shortest Path Visiting All Nodes",tag:"DSA",time:"2m ago"},{id:2,icon:"🚀",color:"#68d391",text:"Deployed Kafka consumer microservice to production",tag:"Kafka",time:"18m ago"},{id:3,icon:"🔴",color:"#fc8181",text:"Optimized Redis cache — hit rate improved to 94.2%",tag:"Redis",time:"1h ago"},{id:4,icon:"📊",color:"#63b3ed",text:"Designed ER schema for judicial case management system",tag:"MySQL",time:"3h ago"},{id:5,icon:"🎯",color:"#f6ad55",text:"Integrated WhatsApp Business API webhook handler",tag:"Node.js",time:"5h ago"},{id:6,icon:"🏆",color:"#ffd93d",text:"Reached LeetCode Rating 1753 — Contest #392",tag:"LeetCode",time:"1d ago"},{id:7,icon:"🎸",color:"#fc8181",text:"Recorded new acoustic guitar cover at home studio",tag:"Music",time:"2d ago"},{id:8,icon:"🏸",color:"#68d391",text:"Won badminton doubles match at Phase 7 Sports Club",tag:"Badminton",time:"3d ago"},{id:9,icon:"📝",color:"#a0afee",text:"Reviewed 3 developer CVs — all got shortlisted!",tag:"Mentoring",time:"4d ago"},{id:10,icon:"🐳",color:"#63b3ed",text:"Containerized Node.js app with Docker multi-stage build",tag:"DevOps",time:"5d ago"}];function F3(){const[e,t]=j.useState(uo.slice(0,5)),[n,r]=j.useState(null),[i,a]=j.useState(!1),o=j.useRef(null),l=j.useRef(5);return j.useEffect(()=>{if(!i)return o.current=setInterval(()=>{const c=uo[l.current%uo.length];r(c),setTimeout(()=>{t(d=>[{...c,time:"just now"},...d.slice(0,4)]),r(null)},500),l.current++},3500),()=>clearInterval(o.current)},[i]),s.jsxs("section",{id:"activity-feed",className:"feed-section dark-section",children:[s.jsx("div",{className:"container",children:s.jsxs("div",{className:"feed-layout",children:[s.jsxs("div",{className:"feed-header-col",children:[s.jsx("span",{className:"section-tag",style:{color:"var(--accent-lavender)"},children:"Live Activity"}),s.jsxs("h2",{className:"section-title light",children:["Real-Time",s.jsx("br",{}),"Activity Feed"]}),s.jsx("p",{className:"section-subtitle light",children:"Live view of Rahul's engineering and personal activities — code, sports, music, and mentorship."}),s.jsx("button",{className:`pause-btn font-mono ${i?"paused":""}`,onClick:()=>a(c=>!c),children:i?"▶ Resume Feed":"⏸ Pause Feed"}),s.jsx("div",{className:"feed-legend",children:["DSA","Kafka","Redis","Node.js","Music","Badminton"].map(c=>s.jsx("span",{className:"legend-tag font-mono",children:c},c))})]}),s.jsxs("div",{className:"feed-list-col",children:[s.jsxs("div",{className:"feed-live-bar font-mono",children:[s.jsx("span",{className:"live-pulse"}),"LIVE FEED",s.jsxs("span",{className:"live-count",children:[uo.length," recent activities"]})]}),n&&s.jsxs("div",{className:"feed-item incoming",style:{"--item-color":n.color},children:[s.jsx("span",{className:"fi-icon",children:n.icon}),s.jsxs("div",{className:"fi-body",children:[s.jsx("span",{className:"fi-tag font-mono",style:{color:n.color},children:n.tag}),s.jsx("p",{className:"fi-text",children:n.text})]}),s.jsx("span",{className:"fi-time font-mono",children:"just now"})]}),s.jsx("div",{className:"feed-list",children:e.map((c,d)=>s.jsxs("div",{className:"feed-item",style:{"--item-color":c.color,animationDelay:`${d*.05}s`},children:[s.jsx("span",{className:"fi-icon",children:c.icon}),s.jsxs("div",{className:"fi-body",children:[s.jsx("span",{className:"fi-tag font-mono",style:{color:c.color},children:c.tag}),s.jsx("p",{className:"fi-text",children:c.text})]}),s.jsx("span",{className:"fi-time font-mono",children:c.time})]},`${c.id}-${d}`))})]})]})}),s.jsx("style",{children:`
        .feed-section {
          background: #050810;
          border-bottom: 1px solid rgba(245,243,239,0.08);
        }

        .feed-layout {
          display: grid;
          grid-template-columns: 1fr 1.4fr;
          gap: 56px;
          align-items: start;
        }

        .pause-btn {
          background: rgba(245,243,239,0.06);
          border: 1px solid rgba(245,243,239,0.12);
          color: rgba(245,243,239,0.6);
          border-radius: 8px;
          padding: 9px 18px;
          font-size: 11px;
          cursor: pointer;
          letter-spacing: 0.08em;
          transition: all 0.2s;
          margin-bottom: 20px;
          display: block;
        }

        .pause-btn.paused {
          color: #10b981;
          border-color: rgba(16,185,129,0.3);
          background: rgba(16,185,129,0.06);
        }

        .pause-btn:hover {
          background: rgba(245,243,239,0.1);
          color: var(--text-light);
        }

        .feed-legend {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
        }

        .legend-tag {
          font-size: 9px;
          padding: 3px 9px;
          border: 1px solid rgba(245,243,239,0.1);
          border-radius: 100px;
          color: rgba(245,243,239,0.4);
          letter-spacing: 0.08em;
        }

        .feed-list-col {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .feed-live-bar {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 9px;
          color: rgba(245,243,239,0.35);
          letter-spacing: 0.15em;
          margin-bottom: 8px;
        }

        .live-pulse {
          width: 8px; height: 8px;
          border-radius: 50%;
          background: #10b981;
          animation: pulse 2s infinite;
          box-shadow: 0 0 6px #10b981;
          flex-shrink: 0;
        }

        .live-count {
          margin-left: auto;
          font-size: 9px;
          color: rgba(245,243,239,0.25);
        }

        .feed-item {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          background: rgba(245,243,239,0.03);
          border: 1px solid rgba(245,243,239,0.06);
          border-left: 3px solid var(--item-color, rgba(160,175,238,0.5));
          border-radius: 10px;
          padding: 12px 14px;
          animation: slideInFeed 0.4s cubic-bezier(0.34,1.56,0.64,1) both;
          transition: background 0.2s;
        }

        .feed-item:hover {
          background: rgba(245,243,239,0.05);
        }

        .feed-item.incoming {
          border-color: var(--item-color);
          background: rgba(160,175,238,0.08);
          animation: popFeed 0.5s cubic-bezier(0.34,1.56,0.64,1) both;
        }

        @keyframes slideInFeed {
          from { opacity: 0; transform: translateX(-16px); }
          to { opacity: 1; transform: translateX(0); }
        }

        @keyframes popFeed {
          from { opacity: 0; transform: scale(0.95) translateY(-8px); }
          to { opacity: 1; transform: scale(1) translateY(0); }
        }

        .fi-icon { font-size: 18px; flex-shrink: 0; line-height: 1.4; }

        .fi-body { flex: 1; }

        .fi-tag {
          font-size: 9px;
          font-weight: 700;
          letter-spacing: 0.12em;
          display: block;
          margin-bottom: 3px;
        }

        .fi-text {
          font-size: 12.5px;
          color: rgba(245,243,239,0.7);
          line-height: 1.4;
        }

        .fi-time {
          font-size: 9px;
          color: rgba(245,243,239,0.25);
          white-space: nowrap;
          margin-top: 2px;
          flex-shrink: 0;
        }

        @media (max-width: 900px) {
          .feed-layout { grid-template-columns: 1fr; }
        }
      `})]})}const vr=[{id:1,name:"Arun Sharma",role:"CTO at Basta Tech",avatar:"AS",color:"#b794f4",rating:5,text:"Rahul architected our entire casino backend from scratch — Kafka pipelines, Redis caching, Socket.IO dashboards. The system has maintained 99.9% uptime across 50k+ daily transactions. Exceptional backend thinking.",company:"BastaxCasino",highlight:"Built entire backend stack"},{id:2,name:"Priya Verma",role:"Engineering Manager at Jupitice",avatar:"PV",color:"#68d391",rating:5,text:"Rahul's ETL pipeline scrapes 100k+ judicial records daily with zero data loss. His WhatsApp integration for Lok Adalat was flawless. He explains complex systems clearly and leads with initiative.",company:"Jupitice Justice Tech",highlight:"100k+ records/day pipeline"},{id:3,name:"Kunal Mehta",role:"Senior Developer at Zapbuild",avatar:"KM",color:"#63b3ed",rating:5,text:"Rahul handled Zapier, Google Calendar, and Microsoft 365 integrations effortlessly. His RBAC implementations were clean and secure. A natural team player who also mentors junior devs actively.",company:"Zapbuild Technologies",highlight:"Enterprise integrations expert"},{id:4,name:"Simran Kaur",role:"DSA Student, CGC Landran",avatar:"SK",color:"#f6ad55",rating:5,text:"Rahul mentored me through 200+ DSA problems and helped me crack my placement interviews. He explains graph algorithms and DP with such clarity. Got placed at a top MNC thanks to his coaching!",company:"Campus Mentorship",highlight:"Helped 200+ students"},{id:5,name:"Dev Patel",role:"Backend Engineer, Startup",avatar:"DP",color:"#fc8181",rating:5,text:"Rahul reviewed my CV and portfolio. Within a week of his feedback, I got 3 interview calls. He knows exactly what recruiters at top companies look for. Real-world advice, not textbook stuff.",company:"Career Mentorship",highlight:"50+ CVs reviewed"}];function V3({count:e}){return s.jsx("div",{className:"stars",children:Array.from({length:5}).map((t,n)=>s.jsx("span",{style:{color:n<e?"#ffd93d":"rgba(245,243,239,0.15)",fontSize:"14px"},children:"★"},n))})}function B3(){const[e,t]=j.useState(0),[n,r]=j.useState("right"),[i,a]=j.useState(!0),o=j.useRef(null),l=(p,f="right")=>{r(f),t(p)},c=()=>l((e+1)%vr.length,"right"),d=()=>l((e-1+vr.length)%vr.length,"left");j.useEffect(()=>{if(i)return o.current=setInterval(c,5e3),()=>clearInterval(o.current)},[e,i]);const u=vr[e];return s.jsxs("section",{id:"testimonials",className:"testi-section dark-section",children:[s.jsxs("div",{className:"container",children:[s.jsx("span",{className:"section-tag",style:{color:"var(--accent-lavender)"},children:"What They Say"}),s.jsxs("h2",{className:"section-title light",children:["Testimonials &",s.jsx("br",{}),"Recommendations"]}),s.jsxs("div",{className:"testi-layout",children:[s.jsxs("div",{className:"testi-card",style:{"--t-color":u.color},children:[s.jsx("div",{className:"testi-quote-mark",children:'"'}),s.jsxs("div",{className:"testi-highlight font-mono",style:{color:u.color},children:["✦ ",u.highlight]}),s.jsxs("p",{className:"testi-text",children:['"',u.text,'"']}),s.jsxs("div",{className:"testi-footer",children:[s.jsx("div",{className:"testi-avatar",style:{background:`linear-gradient(135deg, ${u.color}30, ${u.color}60)`,border:`2px solid ${u.color}`},children:u.avatar}),s.jsxs("div",{className:"testi-info",children:[s.jsx("strong",{className:"testi-name",style:{color:u.color},children:u.name}),s.jsx("span",{className:"testi-role",children:u.role}),s.jsx("span",{className:"testi-company font-mono",children:u.company})]}),s.jsx(V3,{count:u.rating})]})]},e),s.jsxs("div",{className:"testi-sidebar",children:[s.jsxs("div",{className:"testi-progress-label font-mono",children:[String(e+1).padStart(2,"0")," / ",String(vr.length).padStart(2,"0")]}),vr.map((p,f)=>s.jsxs("div",{className:`testi-thumb ${f===e?"active":""}`,style:{"--tc":p.color},onClick:()=>{l(f),a(!1)},children:[s.jsx("div",{className:"thumb-avatar",style:{background:`${p.color}25`,border:`1.5px solid ${p.color}`},children:p.avatar}),s.jsxs("div",{className:"thumb-info",children:[s.jsx("span",{className:"thumb-name",children:p.name}),s.jsx("span",{className:"thumb-role font-mono",children:p.company})]}),f===e&&s.jsx("div",{className:"thumb-progress",children:s.jsx("div",{className:"thumb-progress-fill",style:{background:p.color}})})]},p.id)),s.jsxs("div",{className:"testi-controls",children:[s.jsx("button",{className:"testi-btn",onClick:()=>{d(),a(!1)},children:"←"}),s.jsx("button",{className:`autoplay-btn font-mono ${i?"on":"off"}`,onClick:()=>a(p=>!p),children:i?"⏸":"▶"}),s.jsx("button",{className:"testi-btn",onClick:()=>{c(),a(!1)},children:"→"})]})]})]}),s.jsx("div",{className:"testi-dots",children:vr.map((p,f)=>s.jsx("button",{className:`testi-dot ${f===e?"active":""}`,style:f===e?{background:u.color}:{},onClick:()=>{l(f),a(!1)}},f))})]}),s.jsx("style",{children:`
        .testi-section {
          background: #090b12;
          border-bottom: 1px solid rgba(245,243,239,0.08);
        }

        .testi-layout {
          display: grid;
          grid-template-columns: 1fr 280px;
          gap: 32px;
          align-items: start;
          margin-bottom: 24px;
        }

        /* Main card */
        .testi-card {
          background: rgba(245,243,239,0.03);
          border: 1px solid var(--t-color, rgba(245,243,239,0.1));
          border-radius: 20px;
          padding: 36px;
          position: relative;
          overflow: hidden;
          animation: testiIn 0.45s cubic-bezier(0.34,1.56,0.64,1) both;
          box-shadow: 0 0 40px var(--t-color, transparent);
        }

        @keyframes testiIn {
          from { opacity: 0; transform: scale(0.97) translateY(12px); }
          to { opacity: 1; transform: scale(1) translateY(0); }
        }

        .testi-quote-mark {
          position: absolute;
          top: 12px; right: 24px;
          font-size: 80px;
          color: var(--t-color);
          opacity: 0.12;
          font-family: Georgia, serif;
          line-height: 1;
          pointer-events: none;
        }

        .testi-highlight {
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.15em;
          margin-bottom: 20px;
          display: block;
        }

        .testi-text {
          font-size: 16px;
          line-height: 1.75;
          color: rgba(245,243,239,0.8);
          font-style: italic;
          margin-bottom: 28px;
        }

        .testi-footer {
          display: flex;
          align-items: center;
          gap: 14px;
        }

        .testi-avatar {
          width: 52px; height: 52px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 700;
          font-size: 16px;
          flex-shrink: 0;
          color: var(--text-light);
        }

        .testi-info {
          display: flex;
          flex-direction: column;
          gap: 2px;
          flex: 1;
        }

        .testi-name {
          font-size: 15px;
          font-weight: 700;
        }

        .testi-role {
          font-size: 12px;
          color: rgba(245,243,239,0.5);
        }

        .testi-company {
          font-size: 10px;
          color: rgba(245,243,239,0.3);
          letter-spacing: 0.08em;
        }

        .stars { display: flex; gap: 2px; }

        /* Sidebar */
        .testi-sidebar {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .testi-progress-label {
          font-size: 9px;
          color: rgba(245,243,239,0.2);
          letter-spacing: 0.1em;
          margin-bottom: 4px;
        }

        .testi-thumb {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 10px 12px;
          border-radius: 10px;
          border: 1px solid rgba(245,243,239,0.06);
          background: rgba(245,243,239,0.02);
          cursor: pointer;
          transition: all 0.2s;
          position: relative;
          overflow: hidden;
        }

        .testi-thumb:hover {
          background: rgba(245,243,239,0.04);
          border-color: var(--tc);
        }

        .testi-thumb.active {
          border-color: var(--tc);
          background: rgba(245,243,239,0.05);
        }

        .thumb-avatar {
          width: 32px; height: 32px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 11px;
          font-weight: 700;
          flex-shrink: 0;
          color: var(--text-light);
        }

        .thumb-info { flex: 1; min-width: 0; }

        .thumb-name {
          font-size: 12px;
          font-weight: 600;
          color: var(--text-light);
          display: block;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .thumb-role {
          font-size: 9px;
          color: rgba(245,243,239,0.35);
          letter-spacing: 0.05em;
          display: block;
        }

        .thumb-progress {
          position: absolute;
          bottom: 0; left: 0; right: 0;
          height: 2px;
          background: rgba(245,243,239,0.05);
        }

        .thumb-progress-fill {
          height: 100%;
          animation: progressFill 5s linear both;
        }

        @keyframes progressFill {
          from { width: 0%; }
          to { width: 100%; }
        }

        .testi-controls {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-top: 8px;
        }

        .testi-btn {
          background: rgba(245,243,239,0.06);
          border: 1px solid rgba(245,243,239,0.1);
          color: rgba(245,243,239,0.7);
          width: 36px; height: 36px;
          border-radius: 8px;
          cursor: pointer;
          font-size: 16px;
          transition: all 0.2s;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .testi-btn:hover {
          background: rgba(245,243,239,0.1);
          color: var(--text-light);
        }

        .autoplay-btn {
          flex: 1;
          background: rgba(245,243,239,0.04);
          border: 1px solid rgba(245,243,239,0.08);
          color: rgba(245,243,239,0.4);
          padding: 8px;
          border-radius: 8px;
          font-size: 14px;
          cursor: pointer;
          transition: 0.2s;
          letter-spacing: 0.05em;
        }

        .autoplay-btn.on { color: #10b981; border-color: rgba(16,185,129,0.25); }

        /* Dots */
        .testi-dots {
          display: flex;
          justify-content: center;
          gap: 8px;
        }

        .testi-dot {
          width: 8px; height: 8px;
          border-radius: 50%;
          background: rgba(245,243,239,0.15);
          border: none;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.34,1.56,0.64,1);
        }

        .testi-dot.active {
          width: 24px;
          border-radius: 4px;
        }

        @media (max-width: 900px) {
          .testi-layout { grid-template-columns: 1fr; }
          .testi-sidebar { flex-direction: row; flex-wrap: wrap; }
          .testi-thumb { flex: 1; min-width: 140px; }
        }
      `})]})}const U3={rps:1243,latency:18,errorRate:.02,cacheHit:94.2,cpuUsage:34,memUsage:61,activeConnections:847,kafkaLag:3},os=30;function H3({data:e,color:t,height:n=40}){if(!e||e.length<2)return null;const r=Math.min(...e),a=Math.max(...e)-r||1,o=120,l=e.map((c,d)=>{const u=d/(e.length-1)*o,p=n-(c-r)/a*(n-4)-2;return`${u},${p}`}).join(" ");return s.jsxs("svg",{width:o,height:n,className:"sparkline-svg",children:[s.jsx("defs",{children:s.jsxs("linearGradient",{id:`sg-${t.replace("#","")}`,x1:"0",y1:"0",x2:"0",y2:"1",children:[s.jsx("stop",{offset:"0%",stopColor:t,stopOpacity:"0.3"}),s.jsx("stop",{offset:"100%",stopColor:t,stopOpacity:"0"})]})}),s.jsx("polyline",{points:l,fill:"none",stroke:t,strokeWidth:"1.5",strokeLinejoin:"round",strokeLinecap:"round"})]})}function ls({title:e,value:t,unit:n,status:r,color:i,data:a,icon:o,description:l}){return s.jsxs("div",{className:"metric-card",style:{"--mc-color":i},children:[s.jsxs("div",{className:"mc-header",children:[s.jsx("span",{className:"mc-icon",children:o}),s.jsx("span",{className:"mc-title font-mono",children:e}),s.jsx("span",{className:`mc-status font-mono status-${r}`,children:r})]}),s.jsxs("div",{className:"mc-value-row",children:[s.jsxs("span",{className:"mc-value font-mono",style:{color:i},children:[typeof t=="number"?t.toLocaleString():t,s.jsx("span",{className:"mc-unit",children:n})]}),s.jsx(H3,{data:a,color:i})]}),s.jsx("p",{className:"mc-desc",children:l})]})}function $3(){const[e,t]=j.useState(U3),[n,r]=j.useState(()=>({rps:Array.from({length:os},()=>1200+Math.random()*200),latency:Array.from({length:os},()=>14+Math.random()*10),cacheHit:Array.from({length:os},()=>91+Math.random()*5),cpu:Array.from({length:os},()=>28+Math.random()*15),mem:Array.from({length:os},()=>55+Math.random()*12),connections:Array.from({length:os},()=>800+Math.random()*100)})),[i,a]=j.useState({hours:2187,mins:42,secs:18}),[o,l]=j.useState(!1);j.useEffect(()=>{const p=setInterval(()=>{t(f=>({rps:Math.max(800,Math.min(2e3,f.rps+(Math.random()-.45)*80)),latency:Math.max(4,Math.min(60,f.latency+(Math.random()-.45)*3)),errorRate:Math.max(0,Math.min(2,f.errorRate+(Math.random()-.5)*.02)).toFixed(2),cacheHit:Math.max(88,Math.min(98,f.cacheHit+(Math.random()-.48)*.5)).toFixed(1),cpuUsage:Math.max(10,Math.min(80,f.cpuUsage+(Math.random()-.45)*4)),memUsage:Math.max(40,Math.min(85,f.memUsage+(Math.random()-.47)*2)),activeConnections:Math.max(400,Math.min(1400,f.activeConnections+(Math.random()-.45)*30)),kafkaLag:Math.max(0,Math.min(20,f.kafkaLag+(Math.random()-.5)*2))})),r(f=>({rps:[...f.rps.slice(1),e.rps],latency:[...f.latency.slice(1),e.latency],cacheHit:[...f.cacheHit.slice(1),parseFloat(e.cacheHit)],cpu:[...f.cpu.slice(1),e.cpuUsage],mem:[...f.mem.slice(1),e.memUsage],connections:[...f.connections.slice(1),e.activeConnections]})),a(f=>{let h=f.secs+1,m=f.mins,y=f.hours;return h>=60&&(h=0,m++),m>=60&&(m=0,y++),{hours:y,mins:m,secs:h}})},1200);return()=>clearInterval(p)},[e]);const c=p=>String(Math.floor(p)).padStart(2,"0"),d=e.cpuUsage>65,u=e.latency>40;return s.jsxs("section",{id:"perf-dashboard",className:"perf-section dark-section",children:[s.jsxs("div",{className:"container",children:[s.jsx("span",{className:"section-tag",style:{color:"#10b981"},children:"Live Metrics"}),s.jsxs("h2",{className:"section-title light",children:["Production Performance",s.jsx("br",{}),"Dashboard"]}),s.jsx("p",{className:"section-subtitle light",children:"Real-time simulated metrics from Rahul's production systems — as if you were looking at the actual Grafana/Datadog dashboard."}),s.jsxs("div",{className:"perf-status-bar",children:[s.jsxs("div",{className:"status-uptime",children:[s.jsx("span",{className:"uptime-dot"}),s.jsx("span",{className:"font-mono uptime-label",children:"SYSTEM UPTIME"}),s.jsxs("span",{className:"uptime-val font-mono",children:[c(i.hours),"h ",c(i.mins),"m ",c(i.secs),"s"]})]}),s.jsxs("div",{className:"status-env font-mono",children:[s.jsx("span",{className:"env-badge",children:"PROD"}),s.jsx("span",{className:"env-badge",children:"EU-WEST-1"}),s.jsx("span",{className:"env-badge",children:"PM2 CLUSTER"})]})]}),(d||u)&&s.jsxs("div",{className:"perf-alert",children:[s.jsx("span",{children:"⚠️"}),s.jsxs("span",{className:"font-mono",children:[d&&`HIGH CPU: ${Math.round(e.cpuUsage)}%`,d&&u&&" | ",u&&`HIGH LATENCY: ${Math.round(e.latency)}ms`," — Auto-scaling triggered"]})]}),s.jsxs("div",{className:"metrics-grid",children:[s.jsx(ls,{title:"REQUESTS/SEC",icon:"📡",value:Math.round(e.rps),unit:"/s",status:"healthy",color:"#68d391",data:n.rps,description:"Nginx load balancer throughput across 3 Node.js instances"}),s.jsx(ls,{title:"API LATENCY",icon:"⚡",value:Math.round(e.latency),unit:"ms",status:e.latency>40?"warn":"healthy",color:e.latency>40?"#f6ad55":"#63b3ed",data:n.latency,description:"P95 response time including Redis cache lookup"}),s.jsx(ls,{title:"CACHE HIT RATE",icon:"🔴",value:e.cacheHit,unit:"%",status:"healthy",color:"#fc8181",data:n.cacheHit,description:"Redis LRU cache — 4ms avg response on cache hit"}),s.jsx(ls,{title:"CPU USAGE",icon:"💻",value:Math.round(e.cpuUsage),unit:"%",status:e.cpuUsage>65?"warn":"healthy",color:e.cpuUsage>65?"#f6ad55":"#b794f4",data:n.cpu,description:"Average across all PM2 worker processes"}),s.jsx(ls,{title:"MEMORY",icon:"🧠",value:Math.round(e.memUsage),unit:"%",status:"healthy",color:"#a0afee",data:n.mem,description:"Node.js heap + Redis memory consumption"}),s.jsx(ls,{title:"ACTIVE CONNECTIONS",icon:"🔌",value:Math.round(e.activeConnections),unit:"",status:"healthy",color:"#76e4f7",data:n.connections,description:"Socket.IO + HTTP keep-alive concurrent sessions"})]}),s.jsx("div",{className:"service-status-row",children:[{name:"Kafka Cluster",status:"operational",lag:`Lag: ${Math.round(e.kafkaLag)}`,color:"#b794f4"},{name:"Redis Master",status:"operational",lag:"Repl: OK",color:"#fc8181"},{name:"MySQL Primary",status:"operational",lag:"QPS: 1.2k",color:"#f6ad55"},{name:"Read Replica",status:"operational",lag:"Lag: 0ms",color:"#68d391"},{name:"Nginx Gateway",status:"operational",lag:"SSL: valid",color:"#63b3ed"},{name:"PM2 Workers",status:"operational",lag:"4/4 online",color:"#76e4f7"}].map((p,f)=>s.jsxs("div",{className:"svc-pill",style:{borderColor:p.color+"40"},children:[s.jsx("span",{className:"svc-dot",style:{background:"#10b981",boxShadow:"0 0 6px #10b981"}}),s.jsx("span",{className:"svc-name font-mono",children:p.name}),s.jsx("span",{className:"svc-lag font-mono",style:{color:p.color},children:p.lag})]},f))})]}),s.jsx("style",{children:`
        .perf-section {
          background: #040609;
          border-bottom: 1px solid rgba(245,243,239,0.08);
        }

        /* Status bar */
        .perf-status-bar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          background: rgba(16,185,129,0.06);
          border: 1px solid rgba(16,185,129,0.15);
          border-radius: 10px;
          padding: 12px 20px;
          margin-bottom: 16px;
          flex-wrap: wrap;
          gap: 12px;
        }

        .status-uptime {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .uptime-dot {
          width: 9px; height: 9px;
          border-radius: 50%;
          background: #10b981;
          box-shadow: 0 0 8px #10b981;
          animation: pulse 2s infinite;
        }

        .uptime-label {
          font-size: 9px;
          color: rgba(245,243,239,0.35);
          letter-spacing: 0.15em;
        }

        .uptime-val {
          font-size: 16px;
          font-weight: 700;
          color: #10b981;
          letter-spacing: 0.1em;
        }

        .status-env {
          display: flex;
          gap: 6px;
        }

        .env-badge {
          font-size: 9px;
          padding: 3px 9px;
          background: rgba(245,243,239,0.05);
          border: 1px solid rgba(245,243,239,0.1);
          border-radius: 100px;
          color: rgba(245,243,239,0.4);
          letter-spacing: 0.1em;
        }

        /* Alert */
        .perf-alert {
          background: rgba(246,173,85,0.08);
          border: 1px solid rgba(246,173,85,0.25);
          border-radius: 8px;
          padding: 10px 16px;
          font-size: 11px;
          color: #f6ad55;
          font-family: var(--font-mono);
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 16px;
          animation: fadeIn 0.3s ease;
          letter-spacing: 0.05em;
        }

        /* Metrics grid */
        .metrics-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 16px;
          margin-bottom: 20px;
        }

        .metric-card {
          background: rgba(245,243,239,0.03);
          border: 1px solid rgba(245,243,239,0.06);
          border-radius: 12px;
          padding: 18px;
          transition: border-color 0.2s;
        }

        .metric-card:hover {
          border-color: var(--mc-color, rgba(245,243,239,0.12));
        }

        .mc-header {
          display: flex;
          align-items: center;
          gap: 7px;
          margin-bottom: 10px;
        }

        .mc-icon { font-size: 14px; }

        .mc-title {
          font-size: 9px;
          color: rgba(245,243,239,0.35);
          letter-spacing: 0.12em;
          flex: 1;
        }

        .mc-status {
          font-size: 8px;
          padding: 2px 7px;
          border-radius: 100px;
          letter-spacing: 0.08em;
          font-weight: 700;
        }

        .status-healthy { background: rgba(16,185,129,0.12); color: #10b981; }
        .status-warn { background: rgba(246,173,85,0.12); color: #f6ad55; }
        .status-critical { background: rgba(239,68,68,0.12); color: #ef4444; }

        .mc-value-row {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          gap: 8px;
          margin-bottom: 8px;
        }

        .mc-value {
          font-size: 28px;
          font-weight: 700;
          line-height: 1;
        }

        .mc-unit {
          font-size: 12px;
          opacity: 0.6;
          margin-left: 2px;
        }

        .sparkline-svg { display: block; }

        .mc-desc {
          font-size: 10.5px;
          color: rgba(245,243,239,0.3);
          line-height: 1.4;
        }

        /* Service pills */
        .service-status-row {
          display: flex;
          gap: 10px;
          flex-wrap: wrap;
        }

        .svc-pill {
          display: flex;
          align-items: center;
          gap: 7px;
          padding: 7px 14px;
          background: rgba(245,243,239,0.02);
          border: 1px solid;
          border-radius: 100px;
        }

        .svc-dot {
          width: 6px; height: 6px;
          border-radius: 50%;
          animation: pulse 2s infinite;
          flex-shrink: 0;
        }

        .svc-name {
          font-size: 10px;
          color: rgba(245,243,239,0.5);
          letter-spacing: 0.05em;
        }

        .svc-lag {
          font-size: 9px;
          letter-spacing: 0.05em;
        }

        @media (max-width: 900px) {
          .metrics-grid { grid-template-columns: repeat(2, 1fr); }
        }

        @media (max-width: 600px) {
          .metrics-grid { grid-template-columns: 1fr 1fr; }
        }
      `})]})}const G3=[{label:"Contact & Summary",done:!0,icon:"👤"},{label:"Work Experience (3 companies)",done:!0,icon:"💼"},{label:"Tech Stack & Skills",done:!0,icon:"🛠️"},{label:"Projects (Casino, Judicial, WhatsApp)",done:!0,icon:"🗂️"},{label:"Achievements & LeetCode Stats",done:!0,icon:"🏆"},{label:"Education & Certifications",done:!0,icon:"🎓"}];function W3(){const[e,t]=j.useState(!1),[n,r]=j.useState(!1),[i,a]=j.useState("card"),o=()=>{t(!0),setTimeout(()=>{t(!1),r(!0),setTimeout(()=>r(!1),3e3);const l=`
RAHUL GARG
Mid-Level Software Engineer
📧 gargr0109@gmail.com | 📞 +91 78072 21279
📍 Sec 94, JLPL Mohali, Punjab, India

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
EXPERIENCE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

JUPITICE JUSTICE TECHNOLOGIES | Software Engineer | 2024 – Present
• Built ETL pipeline scraping 100k+ Supreme Court & High Court records daily
• Integrated WhatsApp Business API for Lok Adalat case notifications
• Developed offline KYC system and real-time courtroom dashboards
• Stack: NestJS, MySQL, Redis, WhatsApp Meta API, React

BASTA TECH – BASTAXCASINO | Backend Engineer | 2022 – 2024  
• Architected entire casino backend: Kafka pipelines, Redis cache (94% hit rate)
• Processed 50,000+ daily bet transactions with 99.9% uptime
• Built 100+ REST APIs with Socket.IO real-time updates
• Stack: Node.js, Apache Kafka, Redis, MongoDB, Docker, Socket.IO

ZAPBUILD TECHNOLOGIES | Full Stack Developer | 2021 – 2022
• Built RBAC enterprise platforms with Zapier, Google Calendar, M365 integrations
• Developed food-store management system with real-time order tracking
• Stack: React, Node.js, MySQL, TypeORM

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
TECHNICAL SKILLS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Backend: Node.js, Express.js, NestJS, TypeScript
Frontend: React.js, Next.js, Angular
Databases: MySQL, MongoDB, Redis, PostgreSQL
Event Systems: Apache Kafka, Bull Queue, WebSockets, Pub/Sub
DevOps: Docker, Nginx, PM2, GitHub Actions, SonarQube
APIs: WhatsApp Meta API, Zapier, Google Calendar, Microsoft 365

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
ACHIEVEMENTS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

• LeetCode Rating: 1753 (3-Star) | 1500+ problems solved
• Campus Rank #1 on GeeksForGeeks at CGC Landran
• ICPC Regional Qualifier 2021
• Mentored 200+ students in DSA | Reviewed 50+ CVs

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
EDUCATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

B.Tech – Computer Science Engineering | CGC Landran | 2018–2022

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
HOBBIES & INTERESTS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Professional Singer 🎤 | State-Level Badminton Player 🏸 | Guitarist 🎸 | Trekker 🏔️
`.trim(),c=new Blob([l],{type:"text/plain"}),d=URL.createObjectURL(c),u=document.createElement("a");u.href=d,u.download="Rahul_Garg_Resume_2025.txt",u.click(),URL.revokeObjectURL(d)},1800)};return s.jsxs("section",{id:"resume",className:"resume-section",children:[s.jsx("div",{className:"container",children:s.jsxs("div",{className:"resume-layout",children:[s.jsxs("div",{className:"resume-info",children:[s.jsx("span",{className:"section-tag",children:"Resume & CV"}),s.jsxs("h2",{className:"section-title",children:["Download My",s.jsx("br",{}),"Resume"]}),s.jsx("p",{className:"section-subtitle",children:"Updated June 2025 — includes 3+ years of experience, production system metrics, and project highlights optimized for ATS screening."}),s.jsx("div",{className:"resume-checklist",children:G3.map((l,c)=>s.jsxs("div",{className:"resume-check-item",children:[s.jsx("span",{className:"rc-icon",children:l.icon}),s.jsx("span",{className:"rc-label",children:l.label}),s.jsx("span",{className:"rc-check",children:s.jsx(cm,{size:12})})]},c))}),s.jsxs("div",{className:"resume-meta font-mono",children:[s.jsx("span",{children:"📄 Last updated: June 2025"}),s.jsx("span",{children:"📊 ATS score: 97/100"}),s.jsx("span",{children:"🔍 Keywords: Kafka, Redis, Node.js, MySQL"})]})]}),s.jsxs("div",{className:"resume-preview-wrap",children:[s.jsxs("div",{className:"resume-preview-card",children:[s.jsxs("div",{className:"rp-header",children:[s.jsx("div",{className:"rp-avatar",children:"RG"}),s.jsxs("div",{className:"rp-name-block",children:[s.jsx("strong",{children:"Rahul Garg"}),s.jsx("span",{children:"Mid-Level Software Engineer"}),s.jsx("span",{className:"font-mono rp-location",children:"📍 Mohali, India"})]}),s.jsxs("div",{className:"rp-contact-pills",children:[s.jsx("span",{className:"rp-pill",children:"📧 Gmail"}),s.jsx("span",{className:"rp-pill",children:"📞 Phone"}),s.jsx("span",{className:"rp-pill",children:"💼 LinkedIn"})]})]}),s.jsxs("div",{className:"rp-section",children:[s.jsx("div",{className:"rp-section-title font-mono",children:"EXPERIENCE"}),[{co:"Jupitice",role:"Software Engineer",yr:"2024–Now"},{co:"BastaxCasino",role:"Backend Engineer",yr:"2022–2024"},{co:"Zapbuild",role:"Full Stack Dev",yr:"2021–2022"}].map((l,c)=>s.jsxs("div",{className:"rp-exp-row",children:[s.jsx("div",{className:"rp-exp-dot",style:{background:["#68d391","#b794f4","#63b3ed"][c]}}),s.jsxs("div",{className:"rp-exp-info",children:[s.jsx("strong",{children:l.co}),s.jsx("span",{children:l.role})]}),s.jsx("span",{className:"rp-exp-yr font-mono",children:l.yr})]},c))]}),s.jsxs("div",{className:"rp-section",children:[s.jsx("div",{className:"rp-section-title font-mono",children:"KEY SKILLS"}),s.jsx("div",{className:"rp-skills",children:["Node.js","Kafka","Redis","MySQL","React","Docker"].map(l=>s.jsx("span",{className:"rp-skill-tag",children:l},l))})]}),s.jsxs("div",{className:"rp-section",children:[s.jsx("div",{className:"rp-section-title font-mono",children:"ACHIEVEMENTS"}),s.jsxs("div",{className:"rp-achievements",children:[s.jsx("span",{children:"🏆 LeetCode 1753"}),s.jsx("span",{children:"🥇 Campus Rank #1"}),s.jsx("span",{children:"🎤 Professional Singer"}),s.jsx("span",{children:"🏸 State Badminton"})]})]}),s.jsxs("div",{className:"rp-metric-overlay",children:[s.jsxs("div",{className:"rpm-item",children:[s.jsx("span",{className:"rpm-val font-mono",style:{color:"#68d391"},children:"99.9%"}),s.jsx("span",{className:"rpm-label",children:"Uptime"})]}),s.jsxs("div",{className:"rpm-item",children:[s.jsx("span",{className:"rpm-val font-mono",style:{color:"#b794f4"},children:"50k+"}),s.jsx("span",{className:"rpm-label",children:"Events/day"})]}),s.jsxs("div",{className:"rpm-item",children:[s.jsx("span",{className:"rpm-val font-mono",style:{color:"#f6ad55"},children:"1753"}),s.jsx("span",{className:"rpm-label",children:"LeetCode"})]})]})]}),s.jsxs("div",{className:"resume-actions",children:[s.jsx("button",{className:`download-btn ${e?"loading":""} ${n?"done":""}`,onClick:o,disabled:e,children:e?s.jsxs(s.Fragment,{children:[s.jsx("span",{className:"dl-spinner"})," Preparing..."]}):n?s.jsxs(s.Fragment,{children:[s.jsx(cm,{size:18})," Downloaded!"]}):s.jsxs(s.Fragment,{children:[s.jsx(gk,{size:18})," Download Resume"]})}),s.jsxs("a",{href:"mailto:gargr0109@gmail.com?subject=Opportunity for Rahul Garg",className:"email-btn",children:[s.jsx(xk,{size:16}),"Request Full PDF"]})]}),s.jsx("p",{className:"resume-note font-mono",children:"💡 Tip: Send to recruiter@yourcompany.com — Rahul responds within 2 hours."})]})]})}),s.jsx("style",{children:`
        .resume-section {
          background: var(--bg-primary);
          border-bottom: 1px solid var(--border-color);
        }

        .resume-layout {
          display: grid;
          grid-template-columns: 1fr 1.1fr;
          gap: 60px;
          align-items: start;
        }

        /* Checklist */
        .resume-checklist {
          display: flex;
          flex-direction: column;
          gap: 10px;
          margin: 28px 0;
        }

        .resume-check-item {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 13px;
          color: var(--text-muted-dark);
        }

        .rc-icon { font-size: 16px; width: 24px; text-align: center; }
        .rc-label { flex: 1; }

        .rc-check {
          width: 20px; height: 20px;
          background: rgba(16,185,129,0.1);
          border: 1px solid rgba(16,185,129,0.3);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #10b981;
          flex-shrink: 0;
        }

        .resume-meta {
          display: flex;
          flex-direction: column;
          gap: 6px;
          font-size: 11px;
          color: var(--text-muted-dark);
          letter-spacing: 0.03em;
        }

        /* Preview card */
        .resume-preview-wrap {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .resume-preview-card {
          background: #fff;
          border: 1px solid rgba(17,28,45,0.1);
          border-radius: 16px;
          padding: 24px;
          box-shadow: 0 8px 32px rgba(0,0,0,0.08);
          position: relative;
          overflow: hidden;
        }

        .resume-preview-card::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 4px;
          background: linear-gradient(90deg, var(--accent-purple), var(--accent-lavender), #fc8181);
        }

        .rp-header {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 16px;
          padding-bottom: 14px;
          border-bottom: 1px solid rgba(17,28,45,0.08);
          flex-wrap: wrap;
        }

        .rp-avatar {
          width: 44px; height: 44px;
          background: linear-gradient(135deg, var(--accent-purple), var(--accent-lavender));
          color: white;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 700;
          font-size: 16px;
          flex-shrink: 0;
        }

        .rp-name-block {
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: 2px;
        }

        .rp-name-block strong { font-size: 15px; color: #1a1a2e; }
        .rp-name-block span:nth-child(2) { font-size: 11px; color: rgba(17,28,45,0.55); }
        .rp-location { font-size: 9px; color: rgba(17,28,45,0.35); letter-spacing: 0.05em; }

        .rp-contact-pills {
          display: flex;
          gap: 5px;
        }

        .rp-pill {
          font-size: 9px;
          background: rgba(94,90,209,0.08);
          border: 1px solid rgba(94,90,209,0.15);
          color: var(--accent-purple);
          border-radius: 100px;
          padding: 3px 8px;
          font-family: var(--font-mono);
        }

        .rp-section {
          margin-bottom: 14px;
        }

        .rp-section-title {
          font-size: 9px;
          color: rgba(17,28,45,0.35);
          letter-spacing: 0.15em;
          margin-bottom: 8px;
          font-weight: 700;
        }

        .rp-exp-row {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 6px;
        }

        .rp-exp-dot {
          width: 7px; height: 7px;
          border-radius: 50%;
          flex-shrink: 0;
        }

        .rp-exp-info {
          flex: 1;
          display: flex;
          gap: 6px;
          align-items: center;
        }

        .rp-exp-info strong { font-size: 12px; color: #1a1a2e; }
        .rp-exp-info span { font-size: 10px; color: rgba(17,28,45,0.45); }

        .rp-exp-yr {
          font-size: 9px;
          color: rgba(17,28,45,0.35);
          letter-spacing: 0.05em;
        }

        .rp-skills {
          display: flex;
          flex-wrap: wrap;
          gap: 5px;
        }

        .rp-skill-tag {
          font-size: 10px;
          background: rgba(94,90,209,0.06);
          border: 1px solid rgba(94,90,209,0.12);
          color: var(--accent-purple);
          padding: 3px 9px;
          border-radius: 4px;
          font-family: var(--font-mono);
        }

        .rp-achievements {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          font-size: 11px;
          color: rgba(17,28,45,0.55);
        }

        /* Overlay metrics */
        .rp-metric-overlay {
          position: absolute;
          bottom: 0; right: 0;
          background: linear-gradient(135deg, rgba(94,90,209,0.08), rgba(160,175,238,0.12));
          border-top: 1px solid rgba(94,90,209,0.12);
          border-left: 1px solid rgba(94,90,209,0.12);
          border-radius: 12px 0 16px 0;
          padding: 10px 16px;
          display: flex;
          gap: 16px;
        }

        .rpm-item { text-align: center; }
        .rpm-val { display: block; font-size: 13px; font-weight: 700; }
        .rpm-label { font-size: 9px; color: rgba(17,28,45,0.4); }

        /* Buttons */
        .resume-actions {
          display: flex;
          gap: 10px;
        }

        .download-btn {
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          background: var(--bg-dark);
          color: var(--text-light);
          border: none;
          border-radius: 10px;
          padding: 13px;
          font-size: 14px;
          font-weight: 700;
          cursor: pointer;
          transition: all 0.3s;
          font-family: var(--font-sans);
        }

        .download-btn:hover:not(:disabled) {
          background: var(--accent-purple);
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(94,90,209,0.3);
        }

        .download-btn.done {
          background: #10b981;
        }

        .download-btn.loading {
          opacity: 0.7;
          cursor: wait;
        }

        .dl-spinner {
          width: 16px; height: 16px;
          border: 2px solid rgba(255,255,255,0.3);
          border-top-color: white;
          border-radius: 50%;
          animation: spin 0.7s linear infinite;
          display: inline-block;
        }

        @keyframes spin { to { transform: rotate(360deg); } }

        .email-btn {
          display: flex;
          align-items: center;
          gap: 7px;
          background: var(--bg-secondary);
          border: 1px solid var(--border-color);
          color: var(--text-dark);
          border-radius: 10px;
          padding: 13px 18px;
          font-size: 13px;
          font-weight: 600;
          text-decoration: none;
          transition: 0.2s;
          font-family: var(--font-sans);
        }

        .email-btn:hover {
          border-color: var(--accent-purple);
          color: var(--accent-purple);
          transform: translateY(-2px);
        }

        .resume-note {
          font-size: 10px;
          color: var(--text-muted-dark);
          text-align: center;
          letter-spacing: 0.03em;
        }

        @media (max-width: 900px) {
          .resume-layout { grid-template-columns: 1fr; }
        }
      `})]})}const po=["ArrowUp","ArrowUp","ArrowDown","ArrowDown","ArrowLeft","ArrowRight","ArrowLeft","ArrowRight","b","a"],K3=[{title:"🎵 AI Song Generator",desc:"Personal project: Built a Python + HuggingFace pipeline to generate Bollywood lyrics using fine-tuned GPT-2. Created audio previews using gTTS + custom melody overlays.",tech:["Python","HuggingFace","gTTS","FastAPI"],status:"Side Project"},{title:"♟️ Chess Engine with MCTS",desc:"Implemented a minimax alpha-beta pruning chess engine in Node.js. Later upgraded to Monte Carlo Tree Search. Beats casual players consistently at depth 5.",tech:["Node.js","TypeScript","WebSockets","Canvas API"],status:"WIP"},{title:"🌐 Auto CV Builder SaaS",desc:"A SaaS tool that generates ATS-optimized CVs from a job description URL. Scrapes JD, extracts keywords with NLP, and fills resume template. Built for 50+ mentees.",tech:["Next.js","OpenAI API","Puppeteer","MySQL"],status:"Private Beta"}];function Q3(){const[e,t]=j.useState([]),[n,r]=j.useState(!1),[i,a]=j.useState(!1),o=j.useCallback(c=>{const d=c.key;t(u=>{const p=[...u,d],f=po.slice(0,p.length);return p.every((m,y)=>m===f[y])?p.length===po.length?(r(!0),[]):p:[d]})},[]);j.useEffect(()=>{window.addEventListener("keydown",o);const c=setTimeout(()=>a(!0),3e4);return()=>{window.removeEventListener("keydown",o),clearTimeout(c)}},[o]);const l=e.length/po.length*100;return s.jsxs(s.Fragment,{children:[i&&!n&&s.jsxs("div",{className:"konami-hint font-mono",children:["🕹️ Try the Konami Code to unlock hidden projects...",s.jsx("button",{onClick:()=>a(!1),className:"hint-dismiss",children:"×"})]}),e.length>0&&!n&&s.jsxs("div",{className:"konami-progress",children:[s.jsx("div",{className:"kp-bar",style:{width:`${l}%`}}),s.jsxs("span",{className:"kp-label font-mono",children:["🕹️ ",e.length,"/",po.length]})]}),n&&s.jsx("div",{className:"konami-overlay",onClick:c=>c.target===c.currentTarget&&r(!1),children:s.jsxs("div",{className:"konami-modal",children:[s.jsx("button",{className:"km-close",onClick:()=>r(!1),children:"✕"}),s.jsxs("div",{className:"km-header",children:[s.jsx("div",{className:"km-trophy",children:"🏆"}),s.jsx("h2",{className:"km-title",children:"SECRET UNLOCKED!"}),s.jsx("p",{className:"km-subtitle font-mono",children:"You found the Konami Code Easter Egg"}),s.jsx("div",{className:"km-badge font-mono",children:"↑↑↓↓←→←→BA"})]}),s.jsx("p",{className:"km-desc",children:"Congratulations, curious soul! Here are 3 secret projects I've never publicly shared."}),s.jsx("div",{className:"km-projects",children:K3.map((c,d)=>s.jsxs("div",{className:"km-project",style:{animationDelay:`${d*.15}s`},children:[s.jsx("h3",{className:"kmp-title",children:c.title}),s.jsx("p",{className:"kmp-desc",children:c.desc}),s.jsxs("div",{className:"kmp-footer",children:[s.jsx("div",{className:"kmp-tags",children:c.tech.map(u=>s.jsx("span",{className:"kmp-tag font-mono",children:u},u))}),s.jsx("span",{className:"kmp-status font-mono",children:c.status})]})]},d))}),s.jsxs("p",{className:"km-closer font-mono",children:["🎯 You think like an engineer. Let's build something together →"," ",s.jsx("a",{href:"mailto:gargr0109@gmail.com",style:{color:"#a0afee"},children:"gargr0109@gmail.com"})]})]})}),s.jsx("style",{children:`
        .konami-hint {
          position: fixed;
          bottom: 170px;
          left: 50%;
          transform: translateX(-50%);
          background: rgba(14,23,37,0.95);
          border: 1px solid rgba(160,175,238,0.2);
          color: rgba(245,243,239,0.5);
          font-size: 11px;
          padding: 8px 18px;
          border-radius: 100px;
          z-index: 7000;
          display: flex;
          align-items: center;
          gap: 10px;
          animation: fadeIn 0.5s ease;
          letter-spacing: 0.05em;
        }

        .hint-dismiss {
          background: none;
          border: none;
          color: rgba(245,243,239,0.3);
          cursor: pointer;
          font-size: 16px;
          line-height: 1;
          padding: 0;
        }

        .konami-progress {
          position: fixed;
          bottom: 0; left: 0; right: 0;
          height: 3px;
          background: rgba(94,90,209,0.15);
          z-index: 9999;
        }

        .kp-bar {
          height: 100%;
          background: linear-gradient(90deg, var(--accent-purple), #fc8181);
          transition: width 0.2s ease;
          box-shadow: 0 0 8px var(--accent-purple);
        }

        .kp-label {
          position: absolute;
          right: 12px;
          top: 6px;
          font-size: 9px;
          color: rgba(245,243,239,0.4);
          letter-spacing: 0.08em;
        }

        /* Modal */
        .konami-overlay {
          position: fixed;
          inset: 0;
          background: rgba(0,0,0,0.85);
          backdrop-filter: blur(8px);
          z-index: 99990;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 24px;
          animation: fadeIn 0.3s ease;
        }

        .konami-modal {
          background: var(--bg-darker);
          border: 1px solid rgba(94,90,209,0.4);
          border-radius: 20px;
          padding: 40px;
          max-width: 640px;
          width: 100%;
          max-height: 90vh;
          overflow-y: auto;
          box-shadow: 0 0 60px rgba(94,90,209,0.3), 0 0 120px rgba(94,90,209,0.1);
          animation: popUpModal 0.5s cubic-bezier(0.34,1.56,0.64,1) both;
          position: relative;
        }

        @keyframes popUpModal {
          from { transform: scale(0.7) translateY(40px); opacity: 0; }
          to { transform: scale(1) translateY(0); opacity: 1; }
        }

        .km-close {
          position: absolute;
          top: 16px; right: 16px;
          background: rgba(245,243,239,0.06);
          border: 1px solid rgba(245,243,239,0.1);
          color: rgba(245,243,239,0.5);
          width: 32px; height: 32px;
          border-radius: 50%;
          cursor: pointer;
          font-size: 16px;
          transition: 0.2s;
        }

        .km-close:hover { background: rgba(245,243,239,0.12); color: var(--text-light); }

        .km-header {
          text-align: center;
          margin-bottom: 24px;
        }

        .km-trophy {
          font-size: 56px;
          display: block;
          margin-bottom: 12px;
          animation: bounce3d 2s ease-in-out infinite;
        }

        .km-title {
          font-size: 26px;
          font-weight: 800;
          color: var(--text-light);
          margin-bottom: 6px;
          background: linear-gradient(135deg, var(--accent-lavender), #ffd93d);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .km-subtitle {
          font-size: 11px;
          color: rgba(245,243,239,0.4);
          letter-spacing: 0.12em;
          margin-bottom: 12px;
        }

        .km-badge {
          display: inline-block;
          background: rgba(94,90,209,0.15);
          border: 1px solid rgba(94,90,209,0.3);
          color: var(--accent-lavender);
          padding: 5px 14px;
          border-radius: 100px;
          font-size: 13px;
          letter-spacing: 0.12em;
        }

        .km-desc {
          font-size: 14px;
          color: rgba(245,243,239,0.6);
          text-align: center;
          margin-bottom: 24px;
          line-height: 1.6;
        }

        .km-projects {
          display: flex;
          flex-direction: column;
          gap: 14px;
          margin-bottom: 24px;
        }

        .km-project {
          background: rgba(245,243,239,0.04);
          border: 1px solid rgba(245,243,239,0.08);
          border-radius: 12px;
          padding: 18px;
          animation: fadeIn 0.5s ease both;
        }

        .kmp-title {
          font-size: 16px;
          font-weight: 700;
          color: var(--text-light);
          margin-bottom: 8px;
        }

        .kmp-desc {
          font-size: 13px;
          color: rgba(245,243,239,0.55);
          line-height: 1.5;
          margin-bottom: 12px;
        }

        .kmp-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 8px;
        }

        .kmp-tags { display: flex; gap: 6px; flex-wrap: wrap; }

        .kmp-tag {
          font-size: 10px;
          background: rgba(160,175,238,0.1);
          border: 1px solid rgba(160,175,238,0.15);
          color: var(--accent-lavender);
          padding: 3px 9px;
          border-radius: 100px;
        }

        .kmp-status {
          font-size: 10px;
          color: #10b981;
          letter-spacing: 0.08em;
          white-space: nowrap;
        }

        .km-closer {
          font-size: 11px;
          color: rgba(245,243,239,0.4);
          text-align: center;
          letter-spacing: 0.05em;
        }
      `})]})}const at=[{id:"node",label:"Node.js",color:"#68d391",x:50,y:50,size:36},{id:"react",label:"React",color:"#63b3ed",x:75,y:25,size:30},{id:"kafka",label:"Kafka",color:"#b794f4",x:25,y:25,size:32},{id:"redis",label:"Redis",color:"#fc8181",x:20,y:60,size:28},{id:"mysql",label:"MySQL",color:"#f6ad55",x:80,y:65,size:28},{id:"docker",label:"Docker",color:"#76e4f7",x:50,y:85,size:24},{id:"socket",label:"Socket.IO",color:"#a0afee",x:65,y:48,size:22},{id:"nestjs",label:"NestJS",color:"#fc8181",x:35,y:80,size:22},{id:"ts",label:"TypeScript",color:"#63b3ed",x:12,y:42,size:20},{id:"nginx",label:"Nginx",color:"#68d391",x:88,y:40,size:20}],Si=[["node","kafka"],["node","redis"],["node","mysql"],["node","socket"],["node","react"],["node","docker"],["kafka","redis"],["kafka","mysql"],["react","socket"],["react","node"],["mysql","docker"],["nestjs","mysql"],["nestjs","node"],["ts","node"],["ts","react"],["ts","nestjs"],["nginx","node"],["nginx","docker"],["socket","redis"]];function q3(){var p,f,h;const e=j.useRef(null),[t,n]=j.useState(()=>at.reduce((m,y)=>({...m,[y.id]:{x:y.x,y:y.y}}),{})),[r,i]=j.useState(null),[a,o]=j.useState(!1),l=j.useRef(null),c=j.useRef(null);j.useEffect(()=>{const m=new IntersectionObserver(([y])=>{y.isIntersecting&&(o(!0),m.disconnect())},{threshold:.3});return l.current&&m.observe(l.current),()=>m.disconnect()},[]),j.useEffect(()=>{if(!a)return;let m=0;const y=()=>{m+=.006,n(at.reduce((k,x,g)=>({...k,[x.id]:{x:x.x+Math.sin(m+g*1.2)*2.5,y:x.y+Math.cos(m+g*.8)*2.5}}),{})),c.current=requestAnimationFrame(y)};return c.current=requestAnimationFrame(y),()=>cancelAnimationFrame(c.current)},[a]);const d=m=>t[m]||at.find(y=>y.id===m)||{x:50,y:50},u=r?Si.filter(([m,y])=>m===r||y===r).flatMap(([m,y])=>[m,y]):[];return s.jsxs("section",{id:"skill-network",className:"network-section dark-section",ref:l,children:[s.jsxs("div",{className:"container",children:[s.jsx("span",{className:"section-tag",style:{color:"var(--accent-lavender)"},children:"Skill Connections"}),s.jsxs("h2",{className:"section-title light",children:["Technology",s.jsx("br",{}),"Network Graph"]}),s.jsx("p",{className:"section-subtitle light",children:"How all my technologies interconnect in production systems. Hover any node to see its direct dependencies."}),s.jsxs("div",{className:"network-layout",children:[s.jsx("div",{className:"network-canvas-wrap",children:s.jsxs("svg",{ref:e,viewBox:"0 0 100 100",className:"network-svg",preserveAspectRatio:"xMidYMid meet",children:[s.jsx("defs",{children:at.map(m=>s.jsxs("radialGradient",{id:`grad-${m.id}`,children:[s.jsx("stop",{offset:"0%",stopColor:m.color,stopOpacity:"0.3"}),s.jsx("stop",{offset:"100%",stopColor:m.color,stopOpacity:"0"})]},m.id))}),Si.map(([m,y],k)=>{const x=d(m),g=d(y),v=r&&u.includes(m)&&u.includes(y),w=at.find(N=>N.id===m);return at.find(N=>N.id===y),s.jsx("line",{x1:x.x,y1:x.y,x2:g.x,y2:g.y,stroke:v?(w==null?void 0:w.color)||"#a0afee":"rgba(160,175,238,0.1)",strokeWidth:v?.5:.2,strokeDasharray:"0",style:{transition:"stroke 0.3s, stroke-width 0.3s"}},k)}),r&&Si.filter(([m,y])=>m===r||y===r).map(([m,y],k)=>{const x=d(m),g=d(y),v=at.find(w=>w.id===m);return s.jsx("circle",{r:"0.8",fill:(v==null?void 0:v.color)||"#a0afee",opacity:"0.9",children:s.jsx("animateMotion",{dur:`${1.2+k*.3}s`,repeatCount:"indefinite",path:`M${x.x},${x.y} L${g.x},${g.y}`})},`pkt-${k}`)}),at.map(m=>{const y=d(m.id),k=r===m.id,x=u.includes(m.id),g=r&&!k&&!x;return s.jsxs("g",{onMouseEnter:()=>i(m.id),onMouseLeave:()=>i(null),style:{cursor:"pointer"},children:[s.jsx("circle",{cx:y.x,cy:y.y,r:k?m.size/3+4:m.size/3+1,fill:`url(#grad-${m.id})`,style:{transition:"r 0.3s"}}),s.jsx("circle",{cx:y.x,cy:y.y,r:k?m.size/6+1:m.size/6,fill:m.color,fillOpacity:g?.2:k?1:.8,stroke:k?"#fff":m.color,strokeWidth:k?.5:.2,strokeOpacity:.6,style:{transition:"all 0.3s"}}),s.jsx("text",{x:y.x,y:y.y+m.size/6+3,textAnchor:"middle",fontSize:k?"3.5":"2.8",fill:g?"rgba(245,243,239,0.15)":k?m.color:"rgba(245,243,239,0.7)",fontFamily:"monospace",fontWeight:k?"700":"400",style:{transition:"all 0.3s"},children:m.label})]},m.id)})]})}),s.jsxs("div",{className:"network-legend",children:[s.jsxs("div",{className:"legend-title font-mono",children:["// NODES (",at.length,")"]}),at.map(m=>s.jsxs("div",{className:`legend-node ${r===m.id?"active":""} ${r&&!u.includes(m.id)&&r!==m.id?"dim":""}`,onMouseEnter:()=>i(m.id),onMouseLeave:()=>i(null),style:{"--ln-color":m.color},children:[s.jsx("span",{className:"ln-dot",style:{background:m.color}}),s.jsx("span",{className:"ln-label",children:m.label}),r===m.id&&s.jsxs("span",{className:"ln-count font-mono",style:{color:m.color},children:[Si.filter(([y,k])=>y===m.id||k===m.id).length," links"]})]},m.id)),s.jsxs("div",{className:"legend-edges font-mono",children:[Si.length," connections total"]}),r&&s.jsxs("div",{className:"hovered-info",style:{borderColor:((p=at.find(m=>m.id===r))==null?void 0:p.color)+"50"},children:[s.jsx("strong",{style:{color:(f=at.find(m=>m.id===r))==null?void 0:f.color},children:(h=at.find(m=>m.id===r))==null?void 0:h.label}),s.jsxs("p",{children:["Connected to: ",u.filter(m=>m!==r).map(m=>{var y;return(y=at.find(k=>k.id===m))==null?void 0:y.label}).join(", ")]})]})]})]})]}),s.jsx("style",{children:`
        .network-section {
          background: #06080d;
          border-bottom: 1px solid rgba(245,243,239,0.08);
        }

        .network-layout {
          display: grid;
          grid-template-columns: 1fr 220px;
          gap: 32px;
          align-items: center;
        }

        .network-canvas-wrap {
          aspect-ratio: 1;
          max-width: 560px;
        }

        .network-svg {
          width: 100%;
          height: 100%;
          background: rgba(245,243,239,0.015);
          border: 1px solid rgba(245,243,239,0.06);
          border-radius: 20px;
        }

        /* Legend */
        .network-legend {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .legend-title {
          font-size: 9px;
          color: rgba(245,243,239,0.25);
          letter-spacing: 0.15em;
          margin-bottom: 6px;
        }

        .legend-node {
          display: flex;
          align-items: center;
          gap: 7px;
          padding: 5px 8px;
          border-radius: 6px;
          cursor: pointer;
          transition: background 0.15s;
          border: 1px solid transparent;
        }

        .legend-node.active {
          background: rgba(245,243,239,0.05);
          border-color: var(--ln-color);
        }

        .legend-node.dim {
          opacity: 0.2;
        }

        .legend-node:hover {
          background: rgba(245,243,239,0.04);
        }

        .ln-dot {
          width: 8px; height: 8px;
          border-radius: 50%;
          flex-shrink: 0;
        }

        .ln-label {
          font-size: 11px;
          color: rgba(245,243,239,0.65);
          flex: 1;
        }

        .ln-count {
          font-size: 9px;
          letter-spacing: 0.05em;
        }

        .legend-edges {
          font-size: 9px;
          color: rgba(245,243,239,0.2);
          letter-spacing: 0.08em;
          margin-top: 6px;
          padding-top: 10px;
          border-top: 1px solid rgba(245,243,239,0.06);
        }

        .hovered-info {
          margin-top: 12px;
          padding: 12px;
          background: rgba(245,243,239,0.03);
          border: 1px solid;
          border-radius: 10px;
          animation: fadeIn 0.3s ease;
        }

        .hovered-info strong {
          display: block;
          font-size: 14px;
          margin-bottom: 6px;
        }

        .hovered-info p {
          font-size: 11px;
          color: rgba(245,243,239,0.45);
          line-height: 1.5;
        }

        @media (max-width: 768px) {
          .network-layout { grid-template-columns: 1fr; }
          .network-canvas-wrap { max-width: 100%; }
        }
      `})]})}const Y3=j.lazy(()=>Yr(()=>import("./WarRoom-RqOEe0qi.js"),__vite__mapDeps([0,1]))),X3=j.lazy(()=>Yr(()=>import("./SystemBlueprints-B_r_MA1o.js"),__vite__mapDeps([2,3]))),J3=j.lazy(()=>Yr(()=>import("./EngineeringPhilosophy-DKxPMx8w.js"),[])),Z3=j.lazy(()=>Yr(()=>import("./IncidentSimulator-BiWzB762.js"),__vite__mapDeps([4,1]))),eT=j.lazy(()=>Yr(()=>import("./BackendBuilderGame-8_j1WZgf.js"),__vite__mapDeps([5,6,3]))),tT=j.lazy(()=>Yr(()=>import("./CareerSkillTree-BgPQ_Kyu.js"),__vite__mapDeps([7,6]))),nT=j.lazy(()=>Yr(()=>import("./SecretVault-ZfIGPESR.js"),[]));function rT(){const e=async()=>{const c=await fetch("https://portfilio-latest-3.onrender.com//api/portfolio");if(!c.ok)throw new Error("Failed to fetch data");const d=await c.json();if(!d.success||!d.data)throw new Error("Invalid data format");return d},{data:t,isLoading:n,isError:r}=rk({queryKey:["portfolioData"],queryFn:e,retry:2,staleTime:3e5}),i=(t==null?void 0:t.data)||{experiences:[],projects:[],achievements:[]},[a,o]=j.useState("visual");return a==="recruiter"?s.jsxs("div",{className:"app-wrapper",style:{backgroundColor:"#f1f5f9"},children:[s.jsx(fm,{recruiterMode:a,onToggleRecruiterMode:l=>o(l)}),s.jsx("main",{style:{marginTop:"80px"},children:s.jsx(v3,{onToggleBack:()=>o("visual")})})]}):s.jsxs("div",{className:"app-wrapper",children:[s.jsx(_3,{}),s.jsx(fm,{recruiterMode:a,onToggleRecruiterMode:l=>o(l)}),s.jsx(m3,{}),s.jsxs("main",{children:[s.jsx(Rk,{}),s.jsx(Mk,{achievements:i.achievements}),s.jsx(j3,{}),s.jsx(S3,{}),s.jsx(x3,{}),s.jsx(o3,{experiences:i.experiences}),s.jsx(b3,{}),s.jsx(l3,{}),s.jsx(w3,{}),s.jsx($3,{}),s.jsx(R3,{}),s.jsx(O3,{}),s.jsx(z3,{}),s.jsx(F3,{}),a==="technical"&&s.jsxs(j.Suspense,{fallback:s.jsx($g,{height:"400px"}),children:[s.jsx(Y3,{}),s.jsx(Z3,{}),s.jsx(y3,{}),s.jsx(eT,{})]}),s.jsx(c3,{projects:i.projects}),s.jsx(d3,{}),a==="technical"&&s.jsxs(j.Suspense,{fallback:s.jsx($g,{height:"400px"}),children:[s.jsx(X3,{}),s.jsx(tT,{}),s.jsx(g3,{}),s.jsx(J3,{}),s.jsx(nT,{})]}),s.jsx(p3,{}),s.jsx(E3,{}),s.jsx(q3,{}),s.jsx(P3,{}),s.jsx(L3,{}),s.jsx(B3,{}),s.jsx(W3,{}),s.jsx(D3,{}),s.jsx(f3,{})]}),s.jsx(h3,{}),s.jsx(N3,{}),s.jsx(T3,{}),s.jsx(Q3,{}),s.jsxs("footer",{className:"footer dark-section",children:[s.jsxs("div",{className:"footer-container",children:[s.jsxs("div",{className:"footer-logo-panel",children:[s.jsxs("span",{className:"footer-logo",children:["Rahul Garg",s.jsx("span",{className:"logo-dot",children:"."})]}),s.jsx("p",{className:"footer-description",children:"Mid-Level Software Engineer based in India. Designing scalable, secure, and performant backend solutions and full-stack systems."})]}),s.jsxs("div",{className:"footer-links-panel",children:[s.jsx("h4",{className:"footer-heading",children:"Navigation"}),s.jsxs("div",{className:"footer-links",children:[s.jsx("a",{href:"#hero",className:"footer-link",children:"Home"}),s.jsx("a",{href:"#about",className:"footer-link",children:"About"}),s.jsx("a",{href:"#experience",className:"footer-link",children:"Experience"}),s.jsx("a",{href:"#projects",className:"footer-link",children:"Projects"}),s.jsx("a",{href:"#skills",className:"footer-link",children:"Skills"}),s.jsx("a",{href:"#interests",className:"footer-link",children:"Interests"}),s.jsx("a",{href:"#contact",className:"footer-link",children:"Contact"})]})]})]}),s.jsxs("div",{className:"footer-bottom",children:[s.jsxs("p",{children:["© ",new Date().getFullYear()," Rahul Garg. All rights reserved."]}),s.jsxs("div",{className:"footer-bottom-info",children:[s.jsx("span",{children:"Built with React + Node.js + MySQL"}),s.jsx("span",{className:"divider",children:"|"}),s.jsx("span",{children:"Snorkel.ai Style Adaptation"})]})]})]}),s.jsx("style",{children:`
        .app-wrapper {
          display: flex;
          flex-direction: column;
          min-height: 100vh;
        }

        main {
          flex-grow: 1;
        }

        /* Footer styling matching Snorkel.ai */
        .footer {
          background-color: var(--bg-darker);
          border-top: 1px solid rgba(245, 243, 239, 0.08);
          padding: 80px 0 40px 0;
          color: var(--text-light);
        }

        .footer-container {
          width: 90%;
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1.5fr 0.5fr;
          gap: 60px;
          padding-bottom: 60px;
          border-bottom: 1px solid rgba(245, 243, 239, 0.08);
        }

        .footer-logo {
          font-size: 24px;
          font-weight: 600;
          color: var(--text-light);
          margin-bottom: 16px;
          display: inline-block;
        }

        .footer-description {
          font-size: 14px;
          line-height: 1.6;
          color: var(--text-muted-light);
          max-width: 450px;
        }

        .footer-heading {
          font-family: var(--font-mono);
          font-size: 11px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: var(--accent-lavender);
          margin-bottom: 20px;
        }

        .footer-links {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .footer-link {
          font-size: 14px;
          color: var(--text-muted-light);
          text-decoration: none;
          transition: var(--transition-fast);
        }

        .footer-link:hover {
          color: var(--accent-lavender);
        }

        .footer-bottom {
          width: 90%;
          max-width: 1200px;
          margin: 0 auto;
          padding-top: 40px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 16px;
          font-size: 13px;
          color: rgba(245, 243, 239, 0.45);
        }

        .footer-bottom-info {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .divider {
          color: rgba(245, 243, 239, 0.15);
        }

        @media (max-width: 768px) {
          .footer-container {
            grid-template-columns: 1fr;
            gap: 40px;
          }
          .footer-bottom {
            flex-direction: column;
            align-items: flex-start;
          }
        }
      `})]})}const sT=new Hw;rd.createRoot(document.getElementById("root")).render(s.jsx(Qu.StrictMode,{children:s.jsx(Gw,{client:sT,children:s.jsx(rT,{})})}));export{Cy as A,du as C,rl as D,Py as L,Ml as M,fu as P,My as S,Il as T,hk as a,il as b,H as c,Hp as d,dk as e,Iy as f,pa as g,gk as h,s as j,j as r};
