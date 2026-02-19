(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();var bg={exports:{}},Vl={},Ug={exports:{}},ee={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ao=Symbol.for("react.element"),Dw=Symbol.for("react.portal"),Vw=Symbol.for("react.fragment"),Ow=Symbol.for("react.strict_mode"),Lw=Symbol.for("react.profiler"),Mw=Symbol.for("react.provider"),bw=Symbol.for("react.context"),Uw=Symbol.for("react.forward_ref"),Fw=Symbol.for("react.suspense"),jw=Symbol.for("react.memo"),zw=Symbol.for("react.lazy"),fp=Symbol.iterator;function Bw(t){return t===null||typeof t!="object"?null:(t=fp&&t[fp]||t["@@iterator"],typeof t=="function"?t:null)}var Fg={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},jg=Object.assign,zg={};function Xi(t,e,n){this.props=t,this.context=e,this.refs=zg,this.updater=n||Fg}Xi.prototype.isReactComponent={};Xi.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Xi.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Bg(){}Bg.prototype=Xi.prototype;function Oh(t,e,n){this.props=t,this.context=e,this.refs=zg,this.updater=n||Fg}var Lh=Oh.prototype=new Bg;Lh.constructor=Oh;jg(Lh,Xi.prototype);Lh.isPureReactComponent=!0;var pp=Array.isArray,$g=Object.prototype.hasOwnProperty,Mh={current:null},Hg={key:!0,ref:!0,__self:!0,__source:!0};function Wg(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)$g.call(e,r)&&!Hg.hasOwnProperty(r)&&(i[r]=e[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var u=Array(l),h=0;h<l;h++)u[h]=arguments[h+2];i.children=u}if(t&&t.defaultProps)for(r in l=t.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:Ao,type:t,key:s,ref:o,props:i,_owner:Mh.current}}function $w(t,e){return{$$typeof:Ao,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function bh(t){return typeof t=="object"&&t!==null&&t.$$typeof===Ao}function Hw(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var mp=/\/+/g;function Ou(t,e){return typeof t=="object"&&t!==null&&t.key!=null?Hw(""+t.key):e.toString(36)}function ka(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Ao:case Dw:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+Ou(o,0):r,pp(i)?(n="",t!=null&&(n=t.replace(mp,"$&/")+"/"),ka(i,e,n,"",function(h){return h})):i!=null&&(bh(i)&&(i=$w(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(mp,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",pp(t))for(var l=0;l<t.length;l++){s=t[l];var u=r+Ou(s,l);o+=ka(s,e,n,u,i)}else if(u=Bw(t),typeof u=="function")for(t=u.call(t),l=0;!(s=t.next()).done;)s=s.value,u=r+Ou(s,l++),o+=ka(s,e,n,u,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function ra(t,e,n){if(t==null)return t;var r=[],i=0;return ka(t,r,"","",function(s){return e.call(n,s,i++)}),r}function Ww(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var gt={current:null},Ra={transition:null},qw={ReactCurrentDispatcher:gt,ReactCurrentBatchConfig:Ra,ReactCurrentOwner:Mh};function qg(){throw Error("act(...) is not supported in production builds of React.")}ee.Children={map:ra,forEach:function(t,e,n){ra(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return ra(t,function(){e++}),e},toArray:function(t){return ra(t,function(e){return e})||[]},only:function(t){if(!bh(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};ee.Component=Xi;ee.Fragment=Vw;ee.Profiler=Lw;ee.PureComponent=Oh;ee.StrictMode=Ow;ee.Suspense=Fw;ee.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=qw;ee.act=qg;ee.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=jg({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Mh.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var l=t.type.defaultProps;for(u in e)$g.call(e,u)&&!Hg.hasOwnProperty(u)&&(r[u]=e[u]===void 0&&l!==void 0?l[u]:e[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){l=Array(u);for(var h=0;h<u;h++)l[h]=arguments[h+2];r.children=l}return{$$typeof:Ao,type:t.type,key:i,ref:s,props:r,_owner:o}};ee.createContext=function(t){return t={$$typeof:bw,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:Mw,_context:t},t.Consumer=t};ee.createElement=Wg;ee.createFactory=function(t){var e=Wg.bind(null,t);return e.type=t,e};ee.createRef=function(){return{current:null}};ee.forwardRef=function(t){return{$$typeof:Uw,render:t}};ee.isValidElement=bh;ee.lazy=function(t){return{$$typeof:zw,_payload:{_status:-1,_result:t},_init:Ww}};ee.memo=function(t,e){return{$$typeof:jw,type:t,compare:e===void 0?null:e}};ee.startTransition=function(t){var e=Ra.transition;Ra.transition={};try{t()}finally{Ra.transition=e}};ee.unstable_act=qg;ee.useCallback=function(t,e){return gt.current.useCallback(t,e)};ee.useContext=function(t){return gt.current.useContext(t)};ee.useDebugValue=function(){};ee.useDeferredValue=function(t){return gt.current.useDeferredValue(t)};ee.useEffect=function(t,e){return gt.current.useEffect(t,e)};ee.useId=function(){return gt.current.useId()};ee.useImperativeHandle=function(t,e,n){return gt.current.useImperativeHandle(t,e,n)};ee.useInsertionEffect=function(t,e){return gt.current.useInsertionEffect(t,e)};ee.useLayoutEffect=function(t,e){return gt.current.useLayoutEffect(t,e)};ee.useMemo=function(t,e){return gt.current.useMemo(t,e)};ee.useReducer=function(t,e,n){return gt.current.useReducer(t,e,n)};ee.useRef=function(t){return gt.current.useRef(t)};ee.useState=function(t){return gt.current.useState(t)};ee.useSyncExternalStore=function(t,e,n){return gt.current.useSyncExternalStore(t,e,n)};ee.useTransition=function(){return gt.current.useTransition()};ee.version="18.3.1";Ug.exports=ee;var Z=Ug.exports;/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Kw=Z,Gw=Symbol.for("react.element"),Qw=Symbol.for("react.fragment"),Xw=Object.prototype.hasOwnProperty,Yw=Kw.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Jw={key:!0,ref:!0,__self:!0,__source:!0};function Kg(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)Xw.call(e,r)&&!Jw.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:Gw,type:t,key:s,ref:o,props:i,_owner:Yw.current}}Vl.Fragment=Qw;Vl.jsx=Kg;Vl.jsxs=Kg;bg.exports=Vl;var x=bg.exports,Gg={exports:{}},Vt={},Qg={exports:{}},Xg={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(U,W){var K=U.length;U.push(W);e:for(;0<K;){var ue=K-1>>>1,re=U[ue];if(0<i(re,W))U[ue]=W,U[K]=re,K=ue;else break e}}function n(U){return U.length===0?null:U[0]}function r(U){if(U.length===0)return null;var W=U[0],K=U.pop();if(K!==W){U[0]=K;e:for(var ue=0,re=U.length,de=re>>>1;ue<de;){var Re=2*(ue+1)-1,_t=U[Re],kt=Re+1,dt=U[kt];if(0>i(_t,K))kt<re&&0>i(dt,_t)?(U[ue]=dt,U[kt]=K,ue=kt):(U[ue]=_t,U[Re]=K,ue=Re);else if(kt<re&&0>i(dt,K))U[ue]=dt,U[kt]=K,ue=kt;else break e}}return W}function i(U,W){var K=U.sortIndex-W.sortIndex;return K!==0?K:U.id-W.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,l=o.now();t.unstable_now=function(){return o.now()-l}}var u=[],h=[],f=1,g=null,y=3,k=!1,P=!1,D=!1,O=typeof setTimeout=="function"?setTimeout:null,I=typeof clearTimeout=="function"?clearTimeout:null,E=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function S(U){for(var W=n(h);W!==null;){if(W.callback===null)r(h);else if(W.startTime<=U)r(h),W.sortIndex=W.expirationTime,e(u,W);else break;W=n(h)}}function V(U){if(D=!1,S(U),!P)if(n(u)!==null)P=!0,Lt(j);else{var W=n(h);W!==null&&ge(V,W.startTime-U)}}function j(U,W){P=!1,D&&(D=!1,I(m),m=-1),k=!0;var K=y;try{for(S(W),g=n(u);g!==null&&(!(g.expirationTime>W)||U&&!A());){var ue=g.callback;if(typeof ue=="function"){g.callback=null,y=g.priorityLevel;var re=ue(g.expirationTime<=W);W=t.unstable_now(),typeof re=="function"?g.callback=re:g===n(u)&&r(u),S(W)}else r(u);g=n(u)}if(g!==null)var de=!0;else{var Re=n(h);Re!==null&&ge(V,Re.startTime-W),de=!1}return de}finally{g=null,y=K,k=!1}}var F=!1,w=null,m=-1,v=5,T=-1;function A(){return!(t.unstable_now()-T<v)}function R(){if(w!==null){var U=t.unstable_now();T=U;var W=!0;try{W=w(!0,U)}finally{W?_():(F=!1,w=null)}}else F=!1}var _;if(typeof E=="function")_=function(){E(R)};else if(typeof MessageChannel<"u"){var Fe=new MessageChannel,je=Fe.port2;Fe.port1.onmessage=R,_=function(){je.postMessage(null)}}else _=function(){O(R,0)};function Lt(U){w=U,F||(F=!0,_())}function ge(U,W){m=O(function(){U(t.unstable_now())},W)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(U){U.callback=null},t.unstable_continueExecution=function(){P||k||(P=!0,Lt(j))},t.unstable_forceFrameRate=function(U){0>U||125<U?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):v=0<U?Math.floor(1e3/U):5},t.unstable_getCurrentPriorityLevel=function(){return y},t.unstable_getFirstCallbackNode=function(){return n(u)},t.unstable_next=function(U){switch(y){case 1:case 2:case 3:var W=3;break;default:W=y}var K=y;y=W;try{return U()}finally{y=K}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(U,W){switch(U){case 1:case 2:case 3:case 4:case 5:break;default:U=3}var K=y;y=U;try{return W()}finally{y=K}},t.unstable_scheduleCallback=function(U,W,K){var ue=t.unstable_now();switch(typeof K=="object"&&K!==null?(K=K.delay,K=typeof K=="number"&&0<K?ue+K:ue):K=ue,U){case 1:var re=-1;break;case 2:re=250;break;case 5:re=1073741823;break;case 4:re=1e4;break;default:re=5e3}return re=K+re,U={id:f++,callback:W,priorityLevel:U,startTime:K,expirationTime:re,sortIndex:-1},K>ue?(U.sortIndex=K,e(h,U),n(u)===null&&U===n(h)&&(D?(I(m),m=-1):D=!0,ge(V,K-ue))):(U.sortIndex=re,e(u,U),P||k||(P=!0,Lt(j))),U},t.unstable_shouldYield=A,t.unstable_wrapCallback=function(U){var W=y;return function(){var K=y;y=W;try{return U.apply(this,arguments)}finally{y=K}}}})(Xg);Qg.exports=Xg;var Zw=Qg.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var eE=Z,Dt=Zw;function b(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Yg=new Set,Js={};function Jr(t,e){Li(t,e),Li(t+"Capture",e)}function Li(t,e){for(Js[t]=e,t=0;t<e.length;t++)Yg.add(e[t])}var kn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),_c=Object.prototype.hasOwnProperty,tE=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,gp={},yp={};function nE(t){return _c.call(yp,t)?!0:_c.call(gp,t)?!1:tE.test(t)?yp[t]=!0:(gp[t]=!0,!1)}function rE(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function iE(t,e,n,r){if(e===null||typeof e>"u"||rE(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function yt(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Ze={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Ze[t]=new yt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Ze[e]=new yt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Ze[t]=new yt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Ze[t]=new yt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Ze[t]=new yt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Ze[t]=new yt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Ze[t]=new yt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Ze[t]=new yt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Ze[t]=new yt(t,5,!1,t.toLowerCase(),null,!1,!1)});var Uh=/[\-:]([a-z])/g;function Fh(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Uh,Fh);Ze[e]=new yt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Uh,Fh);Ze[e]=new yt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Uh,Fh);Ze[e]=new yt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Ze[t]=new yt(t,1,!1,t.toLowerCase(),null,!1,!1)});Ze.xlinkHref=new yt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Ze[t]=new yt(t,1,!1,t.toLowerCase(),null,!0,!0)});function jh(t,e,n,r){var i=Ze.hasOwnProperty(e)?Ze[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(iE(e,n,i,r)&&(n=null),r||i===null?nE(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var Ln=eE.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ia=Symbol.for("react.element"),di=Symbol.for("react.portal"),fi=Symbol.for("react.fragment"),zh=Symbol.for("react.strict_mode"),vc=Symbol.for("react.profiler"),Jg=Symbol.for("react.provider"),Zg=Symbol.for("react.context"),Bh=Symbol.for("react.forward_ref"),wc=Symbol.for("react.suspense"),Ec=Symbol.for("react.suspense_list"),$h=Symbol.for("react.memo"),$n=Symbol.for("react.lazy"),ey=Symbol.for("react.offscreen"),_p=Symbol.iterator;function ws(t){return t===null||typeof t!="object"?null:(t=_p&&t[_p]||t["@@iterator"],typeof t=="function"?t:null)}var Ae=Object.assign,Lu;function xs(t){if(Lu===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Lu=e&&e[1]||""}return`
`+Lu+t}var Mu=!1;function bu(t,e){if(!t||Mu)return"";Mu=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(h){var r=h}Reflect.construct(t,[],e)}else{try{e.call()}catch(h){r=h}t.call(e.prototype)}else{try{throw Error()}catch(h){r=h}t()}}catch(h){if(h&&r&&typeof h.stack=="string"){for(var i=h.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,l=s.length-1;1<=o&&0<=l&&i[o]!==s[l];)l--;for(;1<=o&&0<=l;o--,l--)if(i[o]!==s[l]){if(o!==1||l!==1)do if(o--,l--,0>l||i[o]!==s[l]){var u=`
`+i[o].replace(" at new "," at ");return t.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",t.displayName)),u}while(1<=o&&0<=l);break}}}finally{Mu=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?xs(t):""}function sE(t){switch(t.tag){case 5:return xs(t.type);case 16:return xs("Lazy");case 13:return xs("Suspense");case 19:return xs("SuspenseList");case 0:case 2:case 15:return t=bu(t.type,!1),t;case 11:return t=bu(t.type.render,!1),t;case 1:return t=bu(t.type,!0),t;default:return""}}function Tc(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case fi:return"Fragment";case di:return"Portal";case vc:return"Profiler";case zh:return"StrictMode";case wc:return"Suspense";case Ec:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Zg:return(t.displayName||"Context")+".Consumer";case Jg:return(t._context.displayName||"Context")+".Provider";case Bh:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case $h:return e=t.displayName||null,e!==null?e:Tc(t.type)||"Memo";case $n:e=t._payload,t=t._init;try{return Tc(t(e))}catch{}}return null}function oE(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Tc(e);case 8:return e===zh?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function pr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function ty(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function aE(t){var e=ty(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function sa(t){t._valueTracker||(t._valueTracker=aE(t))}function ny(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=ty(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function Ka(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Ic(t,e){var n=e.checked;return Ae({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function vp(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=pr(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function ry(t,e){e=e.checked,e!=null&&jh(t,"checked",e,!1)}function Sc(t,e){ry(t,e);var n=pr(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Ac(t,e.type,n):e.hasOwnProperty("defaultValue")&&Ac(t,e.type,pr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function wp(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Ac(t,e,n){(e!=="number"||Ka(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Ns=Array.isArray;function Ai(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+pr(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function kc(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(b(91));return Ae({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Ep(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(b(92));if(Ns(n)){if(1<n.length)throw Error(b(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:pr(n)}}function iy(t,e){var n=pr(e.value),r=pr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function Tp(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function sy(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Rc(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?sy(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var oa,oy=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(oa=oa||document.createElement("div"),oa.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=oa.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Zs(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Us={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},lE=["Webkit","ms","Moz","O"];Object.keys(Us).forEach(function(t){lE.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Us[e]=Us[t]})});function ay(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Us.hasOwnProperty(t)&&Us[t]?(""+e).trim():e+"px"}function ly(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=ay(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var uE=Ae({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Cc(t,e){if(e){if(uE[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(b(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(b(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(b(61))}if(e.style!=null&&typeof e.style!="object")throw Error(b(62))}}function Pc(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var xc=null;function Hh(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Nc=null,ki=null,Ri=null;function Ip(t){if(t=Co(t)){if(typeof Nc!="function")throw Error(b(280));var e=t.stateNode;e&&(e=Ul(e),Nc(t.stateNode,t.type,e))}}function uy(t){ki?Ri?Ri.push(t):Ri=[t]:ki=t}function cy(){if(ki){var t=ki,e=Ri;if(Ri=ki=null,Ip(t),e)for(t=0;t<e.length;t++)Ip(e[t])}}function hy(t,e){return t(e)}function dy(){}var Uu=!1;function fy(t,e,n){if(Uu)return t(e,n);Uu=!0;try{return hy(t,e,n)}finally{Uu=!1,(ki!==null||Ri!==null)&&(dy(),cy())}}function eo(t,e){var n=t.stateNode;if(n===null)return null;var r=Ul(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(b(231,e,typeof n));return n}var Dc=!1;if(kn)try{var Es={};Object.defineProperty(Es,"passive",{get:function(){Dc=!0}}),window.addEventListener("test",Es,Es),window.removeEventListener("test",Es,Es)}catch{Dc=!1}function cE(t,e,n,r,i,s,o,l,u){var h=Array.prototype.slice.call(arguments,3);try{e.apply(n,h)}catch(f){this.onError(f)}}var Fs=!1,Ga=null,Qa=!1,Vc=null,hE={onError:function(t){Fs=!0,Ga=t}};function dE(t,e,n,r,i,s,o,l,u){Fs=!1,Ga=null,cE.apply(hE,arguments)}function fE(t,e,n,r,i,s,o,l,u){if(dE.apply(this,arguments),Fs){if(Fs){var h=Ga;Fs=!1,Ga=null}else throw Error(b(198));Qa||(Qa=!0,Vc=h)}}function Zr(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function py(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Sp(t){if(Zr(t)!==t)throw Error(b(188))}function pE(t){var e=t.alternate;if(!e){if(e=Zr(t),e===null)throw Error(b(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return Sp(i),t;if(s===r)return Sp(i),e;s=s.sibling}throw Error(b(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,l=i.child;l;){if(l===n){o=!0,n=i,r=s;break}if(l===r){o=!0,r=i,n=s;break}l=l.sibling}if(!o){for(l=s.child;l;){if(l===n){o=!0,n=s,r=i;break}if(l===r){o=!0,r=s,n=i;break}l=l.sibling}if(!o)throw Error(b(189))}}if(n.alternate!==r)throw Error(b(190))}if(n.tag!==3)throw Error(b(188));return n.stateNode.current===n?t:e}function my(t){return t=pE(t),t!==null?gy(t):null}function gy(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=gy(t);if(e!==null)return e;t=t.sibling}return null}var yy=Dt.unstable_scheduleCallback,Ap=Dt.unstable_cancelCallback,mE=Dt.unstable_shouldYield,gE=Dt.unstable_requestPaint,Ne=Dt.unstable_now,yE=Dt.unstable_getCurrentPriorityLevel,Wh=Dt.unstable_ImmediatePriority,_y=Dt.unstable_UserBlockingPriority,Xa=Dt.unstable_NormalPriority,_E=Dt.unstable_LowPriority,vy=Dt.unstable_IdlePriority,Ol=null,tn=null;function vE(t){if(tn&&typeof tn.onCommitFiberRoot=="function")try{tn.onCommitFiberRoot(Ol,t,void 0,(t.current.flags&128)===128)}catch{}}var Qt=Math.clz32?Math.clz32:TE,wE=Math.log,EE=Math.LN2;function TE(t){return t>>>=0,t===0?32:31-(wE(t)/EE|0)|0}var aa=64,la=4194304;function Ds(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Ya(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var l=o&~i;l!==0?r=Ds(l):(s&=o,s!==0&&(r=Ds(s)))}else o=n&~i,o!==0?r=Ds(o):s!==0&&(r=Ds(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-Qt(e),i=1<<n,r|=t[n],e&=~i;return r}function IE(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function SE(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-Qt(s),l=1<<o,u=i[o];u===-1?(!(l&n)||l&r)&&(i[o]=IE(l,e)):u<=e&&(t.expiredLanes|=l),s&=~l}}function Oc(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function wy(){var t=aa;return aa<<=1,!(aa&4194240)&&(aa=64),t}function Fu(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function ko(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Qt(e),t[e]=n}function AE(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-Qt(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function qh(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-Qt(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var ce=0;function Ey(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Ty,Kh,Iy,Sy,Ay,Lc=!1,ua=[],tr=null,nr=null,rr=null,to=new Map,no=new Map,Wn=[],kE="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function kp(t,e){switch(t){case"focusin":case"focusout":tr=null;break;case"dragenter":case"dragleave":nr=null;break;case"mouseover":case"mouseout":rr=null;break;case"pointerover":case"pointerout":to.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":no.delete(e.pointerId)}}function Ts(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=Co(e),e!==null&&Kh(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function RE(t,e,n,r,i){switch(e){case"focusin":return tr=Ts(tr,t,e,n,r,i),!0;case"dragenter":return nr=Ts(nr,t,e,n,r,i),!0;case"mouseover":return rr=Ts(rr,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return to.set(s,Ts(to.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,no.set(s,Ts(no.get(s)||null,t,e,n,r,i)),!0}return!1}function ky(t){var e=Vr(t.target);if(e!==null){var n=Zr(e);if(n!==null){if(e=n.tag,e===13){if(e=py(n),e!==null){t.blockedOn=e,Ay(t.priority,function(){Iy(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Ca(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Mc(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);xc=r,n.target.dispatchEvent(r),xc=null}else return e=Co(n),e!==null&&Kh(e),t.blockedOn=n,!1;e.shift()}return!0}function Rp(t,e,n){Ca(t)&&n.delete(e)}function CE(){Lc=!1,tr!==null&&Ca(tr)&&(tr=null),nr!==null&&Ca(nr)&&(nr=null),rr!==null&&Ca(rr)&&(rr=null),to.forEach(Rp),no.forEach(Rp)}function Is(t,e){t.blockedOn===e&&(t.blockedOn=null,Lc||(Lc=!0,Dt.unstable_scheduleCallback(Dt.unstable_NormalPriority,CE)))}function ro(t){function e(i){return Is(i,t)}if(0<ua.length){Is(ua[0],t);for(var n=1;n<ua.length;n++){var r=ua[n];r.blockedOn===t&&(r.blockedOn=null)}}for(tr!==null&&Is(tr,t),nr!==null&&Is(nr,t),rr!==null&&Is(rr,t),to.forEach(e),no.forEach(e),n=0;n<Wn.length;n++)r=Wn[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<Wn.length&&(n=Wn[0],n.blockedOn===null);)ky(n),n.blockedOn===null&&Wn.shift()}var Ci=Ln.ReactCurrentBatchConfig,Ja=!0;function PE(t,e,n,r){var i=ce,s=Ci.transition;Ci.transition=null;try{ce=1,Gh(t,e,n,r)}finally{ce=i,Ci.transition=s}}function xE(t,e,n,r){var i=ce,s=Ci.transition;Ci.transition=null;try{ce=4,Gh(t,e,n,r)}finally{ce=i,Ci.transition=s}}function Gh(t,e,n,r){if(Ja){var i=Mc(t,e,n,r);if(i===null)Qu(t,e,r,Za,n),kp(t,r);else if(RE(i,t,e,n,r))r.stopPropagation();else if(kp(t,r),e&4&&-1<kE.indexOf(t)){for(;i!==null;){var s=Co(i);if(s!==null&&Ty(s),s=Mc(t,e,n,r),s===null&&Qu(t,e,r,Za,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else Qu(t,e,r,null,n)}}var Za=null;function Mc(t,e,n,r){if(Za=null,t=Hh(r),t=Vr(t),t!==null)if(e=Zr(t),e===null)t=null;else if(n=e.tag,n===13){if(t=py(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Za=t,null}function Ry(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(yE()){case Wh:return 1;case _y:return 4;case Xa:case _E:return 16;case vy:return 536870912;default:return 16}default:return 16}}var Yn=null,Qh=null,Pa=null;function Cy(){if(Pa)return Pa;var t,e=Qh,n=e.length,r,i="value"in Yn?Yn.value:Yn.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return Pa=i.slice(t,1<r?1-r:void 0)}function xa(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function ca(){return!0}function Cp(){return!1}function Ot(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var l in t)t.hasOwnProperty(l)&&(n=t[l],this[l]=n?n(s):s[l]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?ca:Cp,this.isPropagationStopped=Cp,this}return Ae(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=ca)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=ca)},persist:function(){},isPersistent:ca}),e}var Yi={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Xh=Ot(Yi),Ro=Ae({},Yi,{view:0,detail:0}),NE=Ot(Ro),ju,zu,Ss,Ll=Ae({},Ro,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Yh,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Ss&&(Ss&&t.type==="mousemove"?(ju=t.screenX-Ss.screenX,zu=t.screenY-Ss.screenY):zu=ju=0,Ss=t),ju)},movementY:function(t){return"movementY"in t?t.movementY:zu}}),Pp=Ot(Ll),DE=Ae({},Ll,{dataTransfer:0}),VE=Ot(DE),OE=Ae({},Ro,{relatedTarget:0}),Bu=Ot(OE),LE=Ae({},Yi,{animationName:0,elapsedTime:0,pseudoElement:0}),ME=Ot(LE),bE=Ae({},Yi,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),UE=Ot(bE),FE=Ae({},Yi,{data:0}),xp=Ot(FE),jE={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},zE={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},BE={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function $E(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=BE[t])?!!e[t]:!1}function Yh(){return $E}var HE=Ae({},Ro,{key:function(t){if(t.key){var e=jE[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=xa(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?zE[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Yh,charCode:function(t){return t.type==="keypress"?xa(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?xa(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),WE=Ot(HE),qE=Ae({},Ll,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Np=Ot(qE),KE=Ae({},Ro,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Yh}),GE=Ot(KE),QE=Ae({},Yi,{propertyName:0,elapsedTime:0,pseudoElement:0}),XE=Ot(QE),YE=Ae({},Ll,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),JE=Ot(YE),ZE=[9,13,27,32],Jh=kn&&"CompositionEvent"in window,js=null;kn&&"documentMode"in document&&(js=document.documentMode);var eT=kn&&"TextEvent"in window&&!js,Py=kn&&(!Jh||js&&8<js&&11>=js),Dp=" ",Vp=!1;function xy(t,e){switch(t){case"keyup":return ZE.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ny(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var pi=!1;function tT(t,e){switch(t){case"compositionend":return Ny(e);case"keypress":return e.which!==32?null:(Vp=!0,Dp);case"textInput":return t=e.data,t===Dp&&Vp?null:t;default:return null}}function nT(t,e){if(pi)return t==="compositionend"||!Jh&&xy(t,e)?(t=Cy(),Pa=Qh=Yn=null,pi=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Py&&e.locale!=="ko"?null:e.data;default:return null}}var rT={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Op(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!rT[t.type]:e==="textarea"}function Dy(t,e,n,r){uy(r),e=el(e,"onChange"),0<e.length&&(n=new Xh("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var zs=null,io=null;function iT(t){$y(t,0)}function Ml(t){var e=yi(t);if(ny(e))return t}function sT(t,e){if(t==="change")return e}var Vy=!1;if(kn){var $u;if(kn){var Hu="oninput"in document;if(!Hu){var Lp=document.createElement("div");Lp.setAttribute("oninput","return;"),Hu=typeof Lp.oninput=="function"}$u=Hu}else $u=!1;Vy=$u&&(!document.documentMode||9<document.documentMode)}function Mp(){zs&&(zs.detachEvent("onpropertychange",Oy),io=zs=null)}function Oy(t){if(t.propertyName==="value"&&Ml(io)){var e=[];Dy(e,io,t,Hh(t)),fy(iT,e)}}function oT(t,e,n){t==="focusin"?(Mp(),zs=e,io=n,zs.attachEvent("onpropertychange",Oy)):t==="focusout"&&Mp()}function aT(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Ml(io)}function lT(t,e){if(t==="click")return Ml(e)}function uT(t,e){if(t==="input"||t==="change")return Ml(e)}function cT(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Yt=typeof Object.is=="function"?Object.is:cT;function so(t,e){if(Yt(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!_c.call(e,i)||!Yt(t[i],e[i]))return!1}return!0}function bp(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Up(t,e){var n=bp(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=bp(n)}}function Ly(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Ly(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function My(){for(var t=window,e=Ka();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Ka(t.document)}return e}function Zh(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function hT(t){var e=My(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Ly(n.ownerDocument.documentElement,n)){if(r!==null&&Zh(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=Up(n,s);var o=Up(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var dT=kn&&"documentMode"in document&&11>=document.documentMode,mi=null,bc=null,Bs=null,Uc=!1;function Fp(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Uc||mi==null||mi!==Ka(r)||(r=mi,"selectionStart"in r&&Zh(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Bs&&so(Bs,r)||(Bs=r,r=el(bc,"onSelect"),0<r.length&&(e=new Xh("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=mi)))}function ha(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var gi={animationend:ha("Animation","AnimationEnd"),animationiteration:ha("Animation","AnimationIteration"),animationstart:ha("Animation","AnimationStart"),transitionend:ha("Transition","TransitionEnd")},Wu={},by={};kn&&(by=document.createElement("div").style,"AnimationEvent"in window||(delete gi.animationend.animation,delete gi.animationiteration.animation,delete gi.animationstart.animation),"TransitionEvent"in window||delete gi.transitionend.transition);function bl(t){if(Wu[t])return Wu[t];if(!gi[t])return t;var e=gi[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in by)return Wu[t]=e[n];return t}var Uy=bl("animationend"),Fy=bl("animationiteration"),jy=bl("animationstart"),zy=bl("transitionend"),By=new Map,jp="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function wr(t,e){By.set(t,e),Jr(e,[t])}for(var qu=0;qu<jp.length;qu++){var Ku=jp[qu],fT=Ku.toLowerCase(),pT=Ku[0].toUpperCase()+Ku.slice(1);wr(fT,"on"+pT)}wr(Uy,"onAnimationEnd");wr(Fy,"onAnimationIteration");wr(jy,"onAnimationStart");wr("dblclick","onDoubleClick");wr("focusin","onFocus");wr("focusout","onBlur");wr(zy,"onTransitionEnd");Li("onMouseEnter",["mouseout","mouseover"]);Li("onMouseLeave",["mouseout","mouseover"]);Li("onPointerEnter",["pointerout","pointerover"]);Li("onPointerLeave",["pointerout","pointerover"]);Jr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Jr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Jr("onBeforeInput",["compositionend","keypress","textInput","paste"]);Jr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Jr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Jr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Vs="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),mT=new Set("cancel close invalid load scroll toggle".split(" ").concat(Vs));function zp(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,fE(r,e,void 0,t),t.currentTarget=null}function $y(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var l=r[o],u=l.instance,h=l.currentTarget;if(l=l.listener,u!==s&&i.isPropagationStopped())break e;zp(i,l,h),s=u}else for(o=0;o<r.length;o++){if(l=r[o],u=l.instance,h=l.currentTarget,l=l.listener,u!==s&&i.isPropagationStopped())break e;zp(i,l,h),s=u}}}if(Qa)throw t=Vc,Qa=!1,Vc=null,t}function ve(t,e){var n=e[$c];n===void 0&&(n=e[$c]=new Set);var r=t+"__bubble";n.has(r)||(Hy(e,t,2,!1),n.add(r))}function Gu(t,e,n){var r=0;e&&(r|=4),Hy(n,t,r,e)}var da="_reactListening"+Math.random().toString(36).slice(2);function oo(t){if(!t[da]){t[da]=!0,Yg.forEach(function(n){n!=="selectionchange"&&(mT.has(n)||Gu(n,!1,t),Gu(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[da]||(e[da]=!0,Gu("selectionchange",!1,e))}}function Hy(t,e,n,r){switch(Ry(e)){case 1:var i=PE;break;case 4:i=xE;break;default:i=Gh}n=i.bind(null,e,n,t),i=void 0,!Dc||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function Qu(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var u=o.tag;if((u===3||u===4)&&(u=o.stateNode.containerInfo,u===i||u.nodeType===8&&u.parentNode===i))return;o=o.return}for(;l!==null;){if(o=Vr(l),o===null)return;if(u=o.tag,u===5||u===6){r=s=o;continue e}l=l.parentNode}}r=r.return}fy(function(){var h=s,f=Hh(n),g=[];e:{var y=By.get(t);if(y!==void 0){var k=Xh,P=t;switch(t){case"keypress":if(xa(n)===0)break e;case"keydown":case"keyup":k=WE;break;case"focusin":P="focus",k=Bu;break;case"focusout":P="blur",k=Bu;break;case"beforeblur":case"afterblur":k=Bu;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":k=Pp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":k=VE;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":k=GE;break;case Uy:case Fy:case jy:k=ME;break;case zy:k=XE;break;case"scroll":k=NE;break;case"wheel":k=JE;break;case"copy":case"cut":case"paste":k=UE;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":k=Np}var D=(e&4)!==0,O=!D&&t==="scroll",I=D?y!==null?y+"Capture":null:y;D=[];for(var E=h,S;E!==null;){S=E;var V=S.stateNode;if(S.tag===5&&V!==null&&(S=V,I!==null&&(V=eo(E,I),V!=null&&D.push(ao(E,V,S)))),O)break;E=E.return}0<D.length&&(y=new k(y,P,null,n,f),g.push({event:y,listeners:D}))}}if(!(e&7)){e:{if(y=t==="mouseover"||t==="pointerover",k=t==="mouseout"||t==="pointerout",y&&n!==xc&&(P=n.relatedTarget||n.fromElement)&&(Vr(P)||P[Rn]))break e;if((k||y)&&(y=f.window===f?f:(y=f.ownerDocument)?y.defaultView||y.parentWindow:window,k?(P=n.relatedTarget||n.toElement,k=h,P=P?Vr(P):null,P!==null&&(O=Zr(P),P!==O||P.tag!==5&&P.tag!==6)&&(P=null)):(k=null,P=h),k!==P)){if(D=Pp,V="onMouseLeave",I="onMouseEnter",E="mouse",(t==="pointerout"||t==="pointerover")&&(D=Np,V="onPointerLeave",I="onPointerEnter",E="pointer"),O=k==null?y:yi(k),S=P==null?y:yi(P),y=new D(V,E+"leave",k,n,f),y.target=O,y.relatedTarget=S,V=null,Vr(f)===h&&(D=new D(I,E+"enter",P,n,f),D.target=S,D.relatedTarget=O,V=D),O=V,k&&P)t:{for(D=k,I=P,E=0,S=D;S;S=li(S))E++;for(S=0,V=I;V;V=li(V))S++;for(;0<E-S;)D=li(D),E--;for(;0<S-E;)I=li(I),S--;for(;E--;){if(D===I||I!==null&&D===I.alternate)break t;D=li(D),I=li(I)}D=null}else D=null;k!==null&&Bp(g,y,k,D,!1),P!==null&&O!==null&&Bp(g,O,P,D,!0)}}e:{if(y=h?yi(h):window,k=y.nodeName&&y.nodeName.toLowerCase(),k==="select"||k==="input"&&y.type==="file")var j=sT;else if(Op(y))if(Vy)j=uT;else{j=aT;var F=oT}else(k=y.nodeName)&&k.toLowerCase()==="input"&&(y.type==="checkbox"||y.type==="radio")&&(j=lT);if(j&&(j=j(t,h))){Dy(g,j,n,f);break e}F&&F(t,y,h),t==="focusout"&&(F=y._wrapperState)&&F.controlled&&y.type==="number"&&Ac(y,"number",y.value)}switch(F=h?yi(h):window,t){case"focusin":(Op(F)||F.contentEditable==="true")&&(mi=F,bc=h,Bs=null);break;case"focusout":Bs=bc=mi=null;break;case"mousedown":Uc=!0;break;case"contextmenu":case"mouseup":case"dragend":Uc=!1,Fp(g,n,f);break;case"selectionchange":if(dT)break;case"keydown":case"keyup":Fp(g,n,f)}var w;if(Jh)e:{switch(t){case"compositionstart":var m="onCompositionStart";break e;case"compositionend":m="onCompositionEnd";break e;case"compositionupdate":m="onCompositionUpdate";break e}m=void 0}else pi?xy(t,n)&&(m="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(m="onCompositionStart");m&&(Py&&n.locale!=="ko"&&(pi||m!=="onCompositionStart"?m==="onCompositionEnd"&&pi&&(w=Cy()):(Yn=f,Qh="value"in Yn?Yn.value:Yn.textContent,pi=!0)),F=el(h,m),0<F.length&&(m=new xp(m,t,null,n,f),g.push({event:m,listeners:F}),w?m.data=w:(w=Ny(n),w!==null&&(m.data=w)))),(w=eT?tT(t,n):nT(t,n))&&(h=el(h,"onBeforeInput"),0<h.length&&(f=new xp("onBeforeInput","beforeinput",null,n,f),g.push({event:f,listeners:h}),f.data=w))}$y(g,e)})}function ao(t,e,n){return{instance:t,listener:e,currentTarget:n}}function el(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=eo(t,n),s!=null&&r.unshift(ao(t,s,i)),s=eo(t,e),s!=null&&r.push(ao(t,s,i))),t=t.return}return r}function li(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Bp(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var l=n,u=l.alternate,h=l.stateNode;if(u!==null&&u===r)break;l.tag===5&&h!==null&&(l=h,i?(u=eo(n,s),u!=null&&o.unshift(ao(n,u,l))):i||(u=eo(n,s),u!=null&&o.push(ao(n,u,l)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var gT=/\r\n?/g,yT=/\u0000|\uFFFD/g;function $p(t){return(typeof t=="string"?t:""+t).replace(gT,`
`).replace(yT,"")}function fa(t,e,n){if(e=$p(e),$p(t)!==e&&n)throw Error(b(425))}function tl(){}var Fc=null,jc=null;function zc(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Bc=typeof setTimeout=="function"?setTimeout:void 0,_T=typeof clearTimeout=="function"?clearTimeout:void 0,Hp=typeof Promise=="function"?Promise:void 0,vT=typeof queueMicrotask=="function"?queueMicrotask:typeof Hp<"u"?function(t){return Hp.resolve(null).then(t).catch(wT)}:Bc;function wT(t){setTimeout(function(){throw t})}function Xu(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),ro(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);ro(e)}function ir(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Wp(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Ji=Math.random().toString(36).slice(2),en="__reactFiber$"+Ji,lo="__reactProps$"+Ji,Rn="__reactContainer$"+Ji,$c="__reactEvents$"+Ji,ET="__reactListeners$"+Ji,TT="__reactHandles$"+Ji;function Vr(t){var e=t[en];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Rn]||n[en]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Wp(t);t!==null;){if(n=t[en])return n;t=Wp(t)}return e}t=n,n=t.parentNode}return null}function Co(t){return t=t[en]||t[Rn],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function yi(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(b(33))}function Ul(t){return t[lo]||null}var Hc=[],_i=-1;function Er(t){return{current:t}}function we(t){0>_i||(t.current=Hc[_i],Hc[_i]=null,_i--)}function ye(t,e){_i++,Hc[_i]=t.current,t.current=e}var mr={},ut=Er(mr),Tt=Er(!1),zr=mr;function Mi(t,e){var n=t.type.contextTypes;if(!n)return mr;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function It(t){return t=t.childContextTypes,t!=null}function nl(){we(Tt),we(ut)}function qp(t,e,n){if(ut.current!==mr)throw Error(b(168));ye(ut,e),ye(Tt,n)}function Wy(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(b(108,oE(t)||"Unknown",i));return Ae({},n,r)}function rl(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||mr,zr=ut.current,ye(ut,t),ye(Tt,Tt.current),!0}function Kp(t,e,n){var r=t.stateNode;if(!r)throw Error(b(169));n?(t=Wy(t,e,zr),r.__reactInternalMemoizedMergedChildContext=t,we(Tt),we(ut),ye(ut,t)):we(Tt),ye(Tt,n)}var _n=null,Fl=!1,Yu=!1;function qy(t){_n===null?_n=[t]:_n.push(t)}function IT(t){Fl=!0,qy(t)}function Tr(){if(!Yu&&_n!==null){Yu=!0;var t=0,e=ce;try{var n=_n;for(ce=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}_n=null,Fl=!1}catch(i){throw _n!==null&&(_n=_n.slice(t+1)),yy(Wh,Tr),i}finally{ce=e,Yu=!1}}return null}var vi=[],wi=0,il=null,sl=0,bt=[],Ut=0,Br=null,vn=1,wn="";function xr(t,e){vi[wi++]=sl,vi[wi++]=il,il=t,sl=e}function Ky(t,e,n){bt[Ut++]=vn,bt[Ut++]=wn,bt[Ut++]=Br,Br=t;var r=vn;t=wn;var i=32-Qt(r)-1;r&=~(1<<i),n+=1;var s=32-Qt(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,vn=1<<32-Qt(e)+i|n<<i|r,wn=s+t}else vn=1<<s|n<<i|r,wn=t}function ed(t){t.return!==null&&(xr(t,1),Ky(t,1,0))}function td(t){for(;t===il;)il=vi[--wi],vi[wi]=null,sl=vi[--wi],vi[wi]=null;for(;t===Br;)Br=bt[--Ut],bt[Ut]=null,wn=bt[--Ut],bt[Ut]=null,vn=bt[--Ut],bt[Ut]=null}var Nt=null,Pt=null,Ee=!1,Gt=null;function Gy(t,e){var n=Ft(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Gp(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Nt=t,Pt=ir(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Nt=t,Pt=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Br!==null?{id:vn,overflow:wn}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Ft(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Nt=t,Pt=null,!0):!1;default:return!1}}function Wc(t){return(t.mode&1)!==0&&(t.flags&128)===0}function qc(t){if(Ee){var e=Pt;if(e){var n=e;if(!Gp(t,e)){if(Wc(t))throw Error(b(418));e=ir(n.nextSibling);var r=Nt;e&&Gp(t,e)?Gy(r,n):(t.flags=t.flags&-4097|2,Ee=!1,Nt=t)}}else{if(Wc(t))throw Error(b(418));t.flags=t.flags&-4097|2,Ee=!1,Nt=t}}}function Qp(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Nt=t}function pa(t){if(t!==Nt)return!1;if(!Ee)return Qp(t),Ee=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!zc(t.type,t.memoizedProps)),e&&(e=Pt)){if(Wc(t))throw Qy(),Error(b(418));for(;e;)Gy(t,e),e=ir(e.nextSibling)}if(Qp(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(b(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Pt=ir(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Pt=null}}else Pt=Nt?ir(t.stateNode.nextSibling):null;return!0}function Qy(){for(var t=Pt;t;)t=ir(t.nextSibling)}function bi(){Pt=Nt=null,Ee=!1}function nd(t){Gt===null?Gt=[t]:Gt.push(t)}var ST=Ln.ReactCurrentBatchConfig;function As(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(b(309));var r=n.stateNode}if(!r)throw Error(b(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var l=i.refs;o===null?delete l[s]:l[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(b(284));if(!n._owner)throw Error(b(290,t))}return t}function ma(t,e){throw t=Object.prototype.toString.call(e),Error(b(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Xp(t){var e=t._init;return e(t._payload)}function Xy(t){function e(I,E){if(t){var S=I.deletions;S===null?(I.deletions=[E],I.flags|=16):S.push(E)}}function n(I,E){if(!t)return null;for(;E!==null;)e(I,E),E=E.sibling;return null}function r(I,E){for(I=new Map;E!==null;)E.key!==null?I.set(E.key,E):I.set(E.index,E),E=E.sibling;return I}function i(I,E){return I=lr(I,E),I.index=0,I.sibling=null,I}function s(I,E,S){return I.index=S,t?(S=I.alternate,S!==null?(S=S.index,S<E?(I.flags|=2,E):S):(I.flags|=2,E)):(I.flags|=1048576,E)}function o(I){return t&&I.alternate===null&&(I.flags|=2),I}function l(I,E,S,V){return E===null||E.tag!==6?(E=ic(S,I.mode,V),E.return=I,E):(E=i(E,S),E.return=I,E)}function u(I,E,S,V){var j=S.type;return j===fi?f(I,E,S.props.children,V,S.key):E!==null&&(E.elementType===j||typeof j=="object"&&j!==null&&j.$$typeof===$n&&Xp(j)===E.type)?(V=i(E,S.props),V.ref=As(I,E,S),V.return=I,V):(V=ba(S.type,S.key,S.props,null,I.mode,V),V.ref=As(I,E,S),V.return=I,V)}function h(I,E,S,V){return E===null||E.tag!==4||E.stateNode.containerInfo!==S.containerInfo||E.stateNode.implementation!==S.implementation?(E=sc(S,I.mode,V),E.return=I,E):(E=i(E,S.children||[]),E.return=I,E)}function f(I,E,S,V,j){return E===null||E.tag!==7?(E=Ur(S,I.mode,V,j),E.return=I,E):(E=i(E,S),E.return=I,E)}function g(I,E,S){if(typeof E=="string"&&E!==""||typeof E=="number")return E=ic(""+E,I.mode,S),E.return=I,E;if(typeof E=="object"&&E!==null){switch(E.$$typeof){case ia:return S=ba(E.type,E.key,E.props,null,I.mode,S),S.ref=As(I,null,E),S.return=I,S;case di:return E=sc(E,I.mode,S),E.return=I,E;case $n:var V=E._init;return g(I,V(E._payload),S)}if(Ns(E)||ws(E))return E=Ur(E,I.mode,S,null),E.return=I,E;ma(I,E)}return null}function y(I,E,S,V){var j=E!==null?E.key:null;if(typeof S=="string"&&S!==""||typeof S=="number")return j!==null?null:l(I,E,""+S,V);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case ia:return S.key===j?u(I,E,S,V):null;case di:return S.key===j?h(I,E,S,V):null;case $n:return j=S._init,y(I,E,j(S._payload),V)}if(Ns(S)||ws(S))return j!==null?null:f(I,E,S,V,null);ma(I,S)}return null}function k(I,E,S,V,j){if(typeof V=="string"&&V!==""||typeof V=="number")return I=I.get(S)||null,l(E,I,""+V,j);if(typeof V=="object"&&V!==null){switch(V.$$typeof){case ia:return I=I.get(V.key===null?S:V.key)||null,u(E,I,V,j);case di:return I=I.get(V.key===null?S:V.key)||null,h(E,I,V,j);case $n:var F=V._init;return k(I,E,S,F(V._payload),j)}if(Ns(V)||ws(V))return I=I.get(S)||null,f(E,I,V,j,null);ma(E,V)}return null}function P(I,E,S,V){for(var j=null,F=null,w=E,m=E=0,v=null;w!==null&&m<S.length;m++){w.index>m?(v=w,w=null):v=w.sibling;var T=y(I,w,S[m],V);if(T===null){w===null&&(w=v);break}t&&w&&T.alternate===null&&e(I,w),E=s(T,E,m),F===null?j=T:F.sibling=T,F=T,w=v}if(m===S.length)return n(I,w),Ee&&xr(I,m),j;if(w===null){for(;m<S.length;m++)w=g(I,S[m],V),w!==null&&(E=s(w,E,m),F===null?j=w:F.sibling=w,F=w);return Ee&&xr(I,m),j}for(w=r(I,w);m<S.length;m++)v=k(w,I,m,S[m],V),v!==null&&(t&&v.alternate!==null&&w.delete(v.key===null?m:v.key),E=s(v,E,m),F===null?j=v:F.sibling=v,F=v);return t&&w.forEach(function(A){return e(I,A)}),Ee&&xr(I,m),j}function D(I,E,S,V){var j=ws(S);if(typeof j!="function")throw Error(b(150));if(S=j.call(S),S==null)throw Error(b(151));for(var F=j=null,w=E,m=E=0,v=null,T=S.next();w!==null&&!T.done;m++,T=S.next()){w.index>m?(v=w,w=null):v=w.sibling;var A=y(I,w,T.value,V);if(A===null){w===null&&(w=v);break}t&&w&&A.alternate===null&&e(I,w),E=s(A,E,m),F===null?j=A:F.sibling=A,F=A,w=v}if(T.done)return n(I,w),Ee&&xr(I,m),j;if(w===null){for(;!T.done;m++,T=S.next())T=g(I,T.value,V),T!==null&&(E=s(T,E,m),F===null?j=T:F.sibling=T,F=T);return Ee&&xr(I,m),j}for(w=r(I,w);!T.done;m++,T=S.next())T=k(w,I,m,T.value,V),T!==null&&(t&&T.alternate!==null&&w.delete(T.key===null?m:T.key),E=s(T,E,m),F===null?j=T:F.sibling=T,F=T);return t&&w.forEach(function(R){return e(I,R)}),Ee&&xr(I,m),j}function O(I,E,S,V){if(typeof S=="object"&&S!==null&&S.type===fi&&S.key===null&&(S=S.props.children),typeof S=="object"&&S!==null){switch(S.$$typeof){case ia:e:{for(var j=S.key,F=E;F!==null;){if(F.key===j){if(j=S.type,j===fi){if(F.tag===7){n(I,F.sibling),E=i(F,S.props.children),E.return=I,I=E;break e}}else if(F.elementType===j||typeof j=="object"&&j!==null&&j.$$typeof===$n&&Xp(j)===F.type){n(I,F.sibling),E=i(F,S.props),E.ref=As(I,F,S),E.return=I,I=E;break e}n(I,F);break}else e(I,F);F=F.sibling}S.type===fi?(E=Ur(S.props.children,I.mode,V,S.key),E.return=I,I=E):(V=ba(S.type,S.key,S.props,null,I.mode,V),V.ref=As(I,E,S),V.return=I,I=V)}return o(I);case di:e:{for(F=S.key;E!==null;){if(E.key===F)if(E.tag===4&&E.stateNode.containerInfo===S.containerInfo&&E.stateNode.implementation===S.implementation){n(I,E.sibling),E=i(E,S.children||[]),E.return=I,I=E;break e}else{n(I,E);break}else e(I,E);E=E.sibling}E=sc(S,I.mode,V),E.return=I,I=E}return o(I);case $n:return F=S._init,O(I,E,F(S._payload),V)}if(Ns(S))return P(I,E,S,V);if(ws(S))return D(I,E,S,V);ma(I,S)}return typeof S=="string"&&S!==""||typeof S=="number"?(S=""+S,E!==null&&E.tag===6?(n(I,E.sibling),E=i(E,S),E.return=I,I=E):(n(I,E),E=ic(S,I.mode,V),E.return=I,I=E),o(I)):n(I,E)}return O}var Ui=Xy(!0),Yy=Xy(!1),ol=Er(null),al=null,Ei=null,rd=null;function id(){rd=Ei=al=null}function sd(t){var e=ol.current;we(ol),t._currentValue=e}function Kc(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function Pi(t,e){al=t,rd=Ei=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Et=!0),t.firstContext=null)}function Bt(t){var e=t._currentValue;if(rd!==t)if(t={context:t,memoizedValue:e,next:null},Ei===null){if(al===null)throw Error(b(308));Ei=t,al.dependencies={lanes:0,firstContext:t}}else Ei=Ei.next=t;return e}var Or=null;function od(t){Or===null?Or=[t]:Or.push(t)}function Jy(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,od(e)):(n.next=i.next,i.next=n),e.interleaved=n,Cn(t,r)}function Cn(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Hn=!1;function ad(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Zy(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function An(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function sr(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,oe&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,Cn(t,n)}return i=r.interleaved,i===null?(e.next=e,od(r)):(e.next=i.next,i.next=e),r.interleaved=e,Cn(t,n)}function Na(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,qh(t,n)}}function Yp(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function ll(t,e,n,r){var i=t.updateQueue;Hn=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var u=l,h=u.next;u.next=null,o===null?s=h:o.next=h,o=u;var f=t.alternate;f!==null&&(f=f.updateQueue,l=f.lastBaseUpdate,l!==o&&(l===null?f.firstBaseUpdate=h:l.next=h,f.lastBaseUpdate=u))}if(s!==null){var g=i.baseState;o=0,f=h=u=null,l=s;do{var y=l.lane,k=l.eventTime;if((r&y)===y){f!==null&&(f=f.next={eventTime:k,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var P=t,D=l;switch(y=e,k=n,D.tag){case 1:if(P=D.payload,typeof P=="function"){g=P.call(k,g,y);break e}g=P;break e;case 3:P.flags=P.flags&-65537|128;case 0:if(P=D.payload,y=typeof P=="function"?P.call(k,g,y):P,y==null)break e;g=Ae({},g,y);break e;case 2:Hn=!0}}l.callback!==null&&l.lane!==0&&(t.flags|=64,y=i.effects,y===null?i.effects=[l]:y.push(l))}else k={eventTime:k,lane:y,tag:l.tag,payload:l.payload,callback:l.callback,next:null},f===null?(h=f=k,u=g):f=f.next=k,o|=y;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;y=l,l=y.next,y.next=null,i.lastBaseUpdate=y,i.shared.pending=null}}while(!0);if(f===null&&(u=g),i.baseState=u,i.firstBaseUpdate=h,i.lastBaseUpdate=f,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);Hr|=o,t.lanes=o,t.memoizedState=g}}function Jp(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(b(191,i));i.call(r)}}}var Po={},nn=Er(Po),uo=Er(Po),co=Er(Po);function Lr(t){if(t===Po)throw Error(b(174));return t}function ld(t,e){switch(ye(co,e),ye(uo,t),ye(nn,Po),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Rc(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Rc(e,t)}we(nn),ye(nn,e)}function Fi(){we(nn),we(uo),we(co)}function e_(t){Lr(co.current);var e=Lr(nn.current),n=Rc(e,t.type);e!==n&&(ye(uo,t),ye(nn,n))}function ud(t){uo.current===t&&(we(nn),we(uo))}var Ie=Er(0);function ul(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Ju=[];function cd(){for(var t=0;t<Ju.length;t++)Ju[t]._workInProgressVersionPrimary=null;Ju.length=0}var Da=Ln.ReactCurrentDispatcher,Zu=Ln.ReactCurrentBatchConfig,$r=0,Se=null,Le=null,He=null,cl=!1,$s=!1,ho=0,AT=0;function rt(){throw Error(b(321))}function hd(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Yt(t[n],e[n]))return!1;return!0}function dd(t,e,n,r,i,s){if($r=s,Se=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Da.current=t===null||t.memoizedState===null?PT:xT,t=n(r,i),$s){s=0;do{if($s=!1,ho=0,25<=s)throw Error(b(301));s+=1,He=Le=null,e.updateQueue=null,Da.current=NT,t=n(r,i)}while($s)}if(Da.current=hl,e=Le!==null&&Le.next!==null,$r=0,He=Le=Se=null,cl=!1,e)throw Error(b(300));return t}function fd(){var t=ho!==0;return ho=0,t}function Zt(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return He===null?Se.memoizedState=He=t:He=He.next=t,He}function $t(){if(Le===null){var t=Se.alternate;t=t!==null?t.memoizedState:null}else t=Le.next;var e=He===null?Se.memoizedState:He.next;if(e!==null)He=e,Le=t;else{if(t===null)throw Error(b(310));Le=t,t={memoizedState:Le.memoizedState,baseState:Le.baseState,baseQueue:Le.baseQueue,queue:Le.queue,next:null},He===null?Se.memoizedState=He=t:He=He.next=t}return He}function fo(t,e){return typeof e=="function"?e(t):e}function ec(t){var e=$t(),n=e.queue;if(n===null)throw Error(b(311));n.lastRenderedReducer=t;var r=Le,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var l=o=null,u=null,h=s;do{var f=h.lane;if(($r&f)===f)u!==null&&(u=u.next={lane:0,action:h.action,hasEagerState:h.hasEagerState,eagerState:h.eagerState,next:null}),r=h.hasEagerState?h.eagerState:t(r,h.action);else{var g={lane:f,action:h.action,hasEagerState:h.hasEagerState,eagerState:h.eagerState,next:null};u===null?(l=u=g,o=r):u=u.next=g,Se.lanes|=f,Hr|=f}h=h.next}while(h!==null&&h!==s);u===null?o=r:u.next=l,Yt(r,e.memoizedState)||(Et=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=u,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,Se.lanes|=s,Hr|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function tc(t){var e=$t(),n=e.queue;if(n===null)throw Error(b(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);Yt(s,e.memoizedState)||(Et=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function t_(){}function n_(t,e){var n=Se,r=$t(),i=e(),s=!Yt(r.memoizedState,i);if(s&&(r.memoizedState=i,Et=!0),r=r.queue,pd(s_.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||He!==null&&He.memoizedState.tag&1){if(n.flags|=2048,po(9,i_.bind(null,n,r,i,e),void 0,null),We===null)throw Error(b(349));$r&30||r_(n,e,i)}return i}function r_(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Se.updateQueue,e===null?(e={lastEffect:null,stores:null},Se.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function i_(t,e,n,r){e.value=n,e.getSnapshot=r,o_(e)&&a_(t)}function s_(t,e,n){return n(function(){o_(e)&&a_(t)})}function o_(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Yt(t,n)}catch{return!0}}function a_(t){var e=Cn(t,1);e!==null&&Xt(e,t,1,-1)}function Zp(t){var e=Zt();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:fo,lastRenderedState:t},e.queue=t,t=t.dispatch=CT.bind(null,Se,t),[e.memoizedState,t]}function po(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=Se.updateQueue,e===null?(e={lastEffect:null,stores:null},Se.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function l_(){return $t().memoizedState}function Va(t,e,n,r){var i=Zt();Se.flags|=t,i.memoizedState=po(1|e,n,void 0,r===void 0?null:r)}function jl(t,e,n,r){var i=$t();r=r===void 0?null:r;var s=void 0;if(Le!==null){var o=Le.memoizedState;if(s=o.destroy,r!==null&&hd(r,o.deps)){i.memoizedState=po(e,n,s,r);return}}Se.flags|=t,i.memoizedState=po(1|e,n,s,r)}function em(t,e){return Va(8390656,8,t,e)}function pd(t,e){return jl(2048,8,t,e)}function u_(t,e){return jl(4,2,t,e)}function c_(t,e){return jl(4,4,t,e)}function h_(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function d_(t,e,n){return n=n!=null?n.concat([t]):null,jl(4,4,h_.bind(null,e,t),n)}function md(){}function f_(t,e){var n=$t();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&hd(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function p_(t,e){var n=$t();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&hd(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function m_(t,e,n){return $r&21?(Yt(n,e)||(n=wy(),Se.lanes|=n,Hr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Et=!0),t.memoizedState=n)}function kT(t,e){var n=ce;ce=n!==0&&4>n?n:4,t(!0);var r=Zu.transition;Zu.transition={};try{t(!1),e()}finally{ce=n,Zu.transition=r}}function g_(){return $t().memoizedState}function RT(t,e,n){var r=ar(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},y_(t))__(e,n);else if(n=Jy(t,e,n,r),n!==null){var i=mt();Xt(n,t,r,i),v_(n,e,r)}}function CT(t,e,n){var r=ar(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(y_(t))__(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,l=s(o,n);if(i.hasEagerState=!0,i.eagerState=l,Yt(l,o)){var u=e.interleaved;u===null?(i.next=i,od(e)):(i.next=u.next,u.next=i),e.interleaved=i;return}}catch{}finally{}n=Jy(t,e,i,r),n!==null&&(i=mt(),Xt(n,t,r,i),v_(n,e,r))}}function y_(t){var e=t.alternate;return t===Se||e!==null&&e===Se}function __(t,e){$s=cl=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function v_(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,qh(t,n)}}var hl={readContext:Bt,useCallback:rt,useContext:rt,useEffect:rt,useImperativeHandle:rt,useInsertionEffect:rt,useLayoutEffect:rt,useMemo:rt,useReducer:rt,useRef:rt,useState:rt,useDebugValue:rt,useDeferredValue:rt,useTransition:rt,useMutableSource:rt,useSyncExternalStore:rt,useId:rt,unstable_isNewReconciler:!1},PT={readContext:Bt,useCallback:function(t,e){return Zt().memoizedState=[t,e===void 0?null:e],t},useContext:Bt,useEffect:em,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Va(4194308,4,h_.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Va(4194308,4,t,e)},useInsertionEffect:function(t,e){return Va(4,2,t,e)},useMemo:function(t,e){var n=Zt();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=Zt();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=RT.bind(null,Se,t),[r.memoizedState,t]},useRef:function(t){var e=Zt();return t={current:t},e.memoizedState=t},useState:Zp,useDebugValue:md,useDeferredValue:function(t){return Zt().memoizedState=t},useTransition:function(){var t=Zp(!1),e=t[0];return t=kT.bind(null,t[1]),Zt().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=Se,i=Zt();if(Ee){if(n===void 0)throw Error(b(407));n=n()}else{if(n=e(),We===null)throw Error(b(349));$r&30||r_(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,em(s_.bind(null,r,s,t),[t]),r.flags|=2048,po(9,i_.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=Zt(),e=We.identifierPrefix;if(Ee){var n=wn,r=vn;n=(r&~(1<<32-Qt(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=ho++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=AT++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},xT={readContext:Bt,useCallback:f_,useContext:Bt,useEffect:pd,useImperativeHandle:d_,useInsertionEffect:u_,useLayoutEffect:c_,useMemo:p_,useReducer:ec,useRef:l_,useState:function(){return ec(fo)},useDebugValue:md,useDeferredValue:function(t){var e=$t();return m_(e,Le.memoizedState,t)},useTransition:function(){var t=ec(fo)[0],e=$t().memoizedState;return[t,e]},useMutableSource:t_,useSyncExternalStore:n_,useId:g_,unstable_isNewReconciler:!1},NT={readContext:Bt,useCallback:f_,useContext:Bt,useEffect:pd,useImperativeHandle:d_,useInsertionEffect:u_,useLayoutEffect:c_,useMemo:p_,useReducer:tc,useRef:l_,useState:function(){return tc(fo)},useDebugValue:md,useDeferredValue:function(t){var e=$t();return Le===null?e.memoizedState=t:m_(e,Le.memoizedState,t)},useTransition:function(){var t=tc(fo)[0],e=$t().memoizedState;return[t,e]},useMutableSource:t_,useSyncExternalStore:n_,useId:g_,unstable_isNewReconciler:!1};function qt(t,e){if(t&&t.defaultProps){e=Ae({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Gc(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:Ae({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var zl={isMounted:function(t){return(t=t._reactInternals)?Zr(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=mt(),i=ar(t),s=An(r,i);s.payload=e,n!=null&&(s.callback=n),e=sr(t,s,i),e!==null&&(Xt(e,t,i,r),Na(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=mt(),i=ar(t),s=An(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=sr(t,s,i),e!==null&&(Xt(e,t,i,r),Na(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=mt(),r=ar(t),i=An(n,r);i.tag=2,e!=null&&(i.callback=e),e=sr(t,i,r),e!==null&&(Xt(e,t,r,n),Na(e,t,r))}};function tm(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!so(n,r)||!so(i,s):!0}function w_(t,e,n){var r=!1,i=mr,s=e.contextType;return typeof s=="object"&&s!==null?s=Bt(s):(i=It(e)?zr:ut.current,r=e.contextTypes,s=(r=r!=null)?Mi(t,i):mr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=zl,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function nm(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&zl.enqueueReplaceState(e,e.state,null)}function Qc(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs={},ad(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=Bt(s):(s=It(e)?zr:ut.current,i.context=Mi(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Gc(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&zl.enqueueReplaceState(i,i.state,null),ll(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function ji(t,e){try{var n="",r=e;do n+=sE(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function nc(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Xc(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var DT=typeof WeakMap=="function"?WeakMap:Map;function E_(t,e,n){n=An(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){fl||(fl=!0,oh=r),Xc(t,e)},n}function T_(t,e,n){n=An(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){Xc(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Xc(t,e),typeof r!="function"&&(or===null?or=new Set([this]):or.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function rm(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new DT;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=qT.bind(null,t,e,n),e.then(t,t))}function im(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function sm(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=An(-1,1),e.tag=2,sr(n,e,1))),n.lanes|=1),t)}var VT=Ln.ReactCurrentOwner,Et=!1;function pt(t,e,n,r){e.child=t===null?Yy(e,null,n,r):Ui(e,t.child,n,r)}function om(t,e,n,r,i){n=n.render;var s=e.ref;return Pi(e,i),r=dd(t,e,n,r,s,i),n=fd(),t!==null&&!Et?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Pn(t,e,i)):(Ee&&n&&ed(e),e.flags|=1,pt(t,e,r,i),e.child)}function am(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!Id(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,I_(t,e,s,r,i)):(t=ba(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:so,n(o,r)&&t.ref===e.ref)return Pn(t,e,i)}return e.flags|=1,t=lr(s,r),t.ref=e.ref,t.return=e,e.child=t}function I_(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(so(s,r)&&t.ref===e.ref)if(Et=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(Et=!0);else return e.lanes=t.lanes,Pn(t,e,i)}return Yc(t,e,n,r,i)}function S_(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},ye(Ii,Ct),Ct|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,ye(Ii,Ct),Ct|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,ye(Ii,Ct),Ct|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,ye(Ii,Ct),Ct|=r;return pt(t,e,i,n),e.child}function A_(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Yc(t,e,n,r,i){var s=It(n)?zr:ut.current;return s=Mi(e,s),Pi(e,i),n=dd(t,e,n,r,s,i),r=fd(),t!==null&&!Et?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Pn(t,e,i)):(Ee&&r&&ed(e),e.flags|=1,pt(t,e,n,i),e.child)}function lm(t,e,n,r,i){if(It(n)){var s=!0;rl(e)}else s=!1;if(Pi(e,i),e.stateNode===null)Oa(t,e),w_(e,n,r),Qc(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,l=e.memoizedProps;o.props=l;var u=o.context,h=n.contextType;typeof h=="object"&&h!==null?h=Bt(h):(h=It(n)?zr:ut.current,h=Mi(e,h));var f=n.getDerivedStateFromProps,g=typeof f=="function"||typeof o.getSnapshotBeforeUpdate=="function";g||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==r||u!==h)&&nm(e,o,r,h),Hn=!1;var y=e.memoizedState;o.state=y,ll(e,r,o,i),u=e.memoizedState,l!==r||y!==u||Tt.current||Hn?(typeof f=="function"&&(Gc(e,n,f,r),u=e.memoizedState),(l=Hn||tm(e,n,l,r,y,u,h))?(g||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=u),o.props=r,o.state=u,o.context=h,r=l):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,Zy(t,e),l=e.memoizedProps,h=e.type===e.elementType?l:qt(e.type,l),o.props=h,g=e.pendingProps,y=o.context,u=n.contextType,typeof u=="object"&&u!==null?u=Bt(u):(u=It(n)?zr:ut.current,u=Mi(e,u));var k=n.getDerivedStateFromProps;(f=typeof k=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==g||y!==u)&&nm(e,o,r,u),Hn=!1,y=e.memoizedState,o.state=y,ll(e,r,o,i);var P=e.memoizedState;l!==g||y!==P||Tt.current||Hn?(typeof k=="function"&&(Gc(e,n,k,r),P=e.memoizedState),(h=Hn||tm(e,n,h,r,y,P,u)||!1)?(f||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,P,u),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,P,u)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&y===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&y===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=P),o.props=r,o.state=P,o.context=u,r=h):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&y===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&y===t.memoizedState||(e.flags|=1024),r=!1)}return Jc(t,e,n,r,s,i)}function Jc(t,e,n,r,i,s){A_(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&Kp(e,n,!1),Pn(t,e,s);r=e.stateNode,VT.current=e;var l=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=Ui(e,t.child,null,s),e.child=Ui(e,null,l,s)):pt(t,e,l,s),e.memoizedState=r.state,i&&Kp(e,n,!0),e.child}function k_(t){var e=t.stateNode;e.pendingContext?qp(t,e.pendingContext,e.pendingContext!==e.context):e.context&&qp(t,e.context,!1),ld(t,e.containerInfo)}function um(t,e,n,r,i){return bi(),nd(i),e.flags|=256,pt(t,e,n,r),e.child}var Zc={dehydrated:null,treeContext:null,retryLane:0};function eh(t){return{baseLanes:t,cachePool:null,transitions:null}}function R_(t,e,n){var r=e.pendingProps,i=Ie.current,s=!1,o=(e.flags&128)!==0,l;if((l=o)||(l=t!==null&&t.memoizedState===null?!1:(i&2)!==0),l?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),ye(Ie,i&1),t===null)return qc(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Hl(o,r,0,null),t=Ur(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=eh(n),e.memoizedState=Zc,t):gd(e,o));if(i=t.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return OT(t,e,o,r,l,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,l=i.sibling;var u={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=u,e.deletions=null):(r=lr(i,u),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?s=lr(l,s):(s=Ur(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?eh(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Zc,r}return s=t.child,t=s.sibling,r=lr(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function gd(t,e){return e=Hl({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function ga(t,e,n,r){return r!==null&&nd(r),Ui(e,t.child,null,n),t=gd(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function OT(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=nc(Error(b(422))),ga(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=Hl({mode:"visible",children:r.children},i,0,null),s=Ur(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&Ui(e,t.child,null,o),e.child.memoizedState=eh(o),e.memoizedState=Zc,s);if(!(e.mode&1))return ga(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,s=Error(b(419)),r=nc(s,r,void 0),ga(t,e,o,r)}if(l=(o&t.childLanes)!==0,Et||l){if(r=We,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,Cn(t,i),Xt(r,t,i,-1))}return Td(),r=nc(Error(b(421))),ga(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=KT.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,Pt=ir(i.nextSibling),Nt=e,Ee=!0,Gt=null,t!==null&&(bt[Ut++]=vn,bt[Ut++]=wn,bt[Ut++]=Br,vn=t.id,wn=t.overflow,Br=e),e=gd(e,r.children),e.flags|=4096,e)}function cm(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Kc(t.return,e,n)}function rc(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function C_(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(pt(t,e,r.children,n),r=Ie.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&cm(t,n,e);else if(t.tag===19)cm(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(ye(Ie,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&ul(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),rc(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&ul(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}rc(e,!0,n,null,s);break;case"together":rc(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Oa(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Pn(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Hr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(b(153));if(e.child!==null){for(t=e.child,n=lr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=lr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function LT(t,e,n){switch(e.tag){case 3:k_(e),bi();break;case 5:e_(e);break;case 1:It(e.type)&&rl(e);break;case 4:ld(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;ye(ol,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(ye(Ie,Ie.current&1),e.flags|=128,null):n&e.child.childLanes?R_(t,e,n):(ye(Ie,Ie.current&1),t=Pn(t,e,n),t!==null?t.sibling:null);ye(Ie,Ie.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return C_(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),ye(Ie,Ie.current),r)break;return null;case 22:case 23:return e.lanes=0,S_(t,e,n)}return Pn(t,e,n)}var P_,th,x_,N_;P_=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};th=function(){};x_=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,Lr(nn.current);var s=null;switch(n){case"input":i=Ic(t,i),r=Ic(t,r),s=[];break;case"select":i=Ae({},i,{value:void 0}),r=Ae({},r,{value:void 0}),s=[];break;case"textarea":i=kc(t,i),r=kc(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=tl)}Cc(n,r);var o;n=null;for(h in i)if(!r.hasOwnProperty(h)&&i.hasOwnProperty(h)&&i[h]!=null)if(h==="style"){var l=i[h];for(o in l)l.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else h!=="dangerouslySetInnerHTML"&&h!=="children"&&h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&h!=="autoFocus"&&(Js.hasOwnProperty(h)?s||(s=[]):(s=s||[]).push(h,null));for(h in r){var u=r[h];if(l=i!=null?i[h]:void 0,r.hasOwnProperty(h)&&u!==l&&(u!=null||l!=null))if(h==="style")if(l){for(o in l)!l.hasOwnProperty(o)||u&&u.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in u)u.hasOwnProperty(o)&&l[o]!==u[o]&&(n||(n={}),n[o]=u[o])}else n||(s||(s=[]),s.push(h,n)),n=u;else h==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,l=l?l.__html:void 0,u!=null&&l!==u&&(s=s||[]).push(h,u)):h==="children"?typeof u!="string"&&typeof u!="number"||(s=s||[]).push(h,""+u):h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&(Js.hasOwnProperty(h)?(u!=null&&h==="onScroll"&&ve("scroll",t),s||l===u||(s=[])):(s=s||[]).push(h,u))}n&&(s=s||[]).push("style",n);var h=s;(e.updateQueue=h)&&(e.flags|=4)}};N_=function(t,e,n,r){n!==r&&(e.flags|=4)};function ks(t,e){if(!Ee)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function it(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function MT(t,e,n){var r=e.pendingProps;switch(td(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return it(e),null;case 1:return It(e.type)&&nl(),it(e),null;case 3:return r=e.stateNode,Fi(),we(Tt),we(ut),cd(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(pa(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Gt!==null&&(uh(Gt),Gt=null))),th(t,e),it(e),null;case 5:ud(e);var i=Lr(co.current);if(n=e.type,t!==null&&e.stateNode!=null)x_(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(b(166));return it(e),null}if(t=Lr(nn.current),pa(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[en]=e,r[lo]=s,t=(e.mode&1)!==0,n){case"dialog":ve("cancel",r),ve("close",r);break;case"iframe":case"object":case"embed":ve("load",r);break;case"video":case"audio":for(i=0;i<Vs.length;i++)ve(Vs[i],r);break;case"source":ve("error",r);break;case"img":case"image":case"link":ve("error",r),ve("load",r);break;case"details":ve("toggle",r);break;case"input":vp(r,s),ve("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},ve("invalid",r);break;case"textarea":Ep(r,s),ve("invalid",r)}Cc(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var l=s[o];o==="children"?typeof l=="string"?r.textContent!==l&&(s.suppressHydrationWarning!==!0&&fa(r.textContent,l,t),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(s.suppressHydrationWarning!==!0&&fa(r.textContent,l,t),i=["children",""+l]):Js.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&ve("scroll",r)}switch(n){case"input":sa(r),wp(r,s,!0);break;case"textarea":sa(r),Tp(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=tl)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=sy(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[en]=e,t[lo]=r,P_(t,e,!1,!1),e.stateNode=t;e:{switch(o=Pc(n,r),n){case"dialog":ve("cancel",t),ve("close",t),i=r;break;case"iframe":case"object":case"embed":ve("load",t),i=r;break;case"video":case"audio":for(i=0;i<Vs.length;i++)ve(Vs[i],t);i=r;break;case"source":ve("error",t),i=r;break;case"img":case"image":case"link":ve("error",t),ve("load",t),i=r;break;case"details":ve("toggle",t),i=r;break;case"input":vp(t,r),i=Ic(t,r),ve("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=Ae({},r,{value:void 0}),ve("invalid",t);break;case"textarea":Ep(t,r),i=kc(t,r),ve("invalid",t);break;default:i=r}Cc(n,i),l=i;for(s in l)if(l.hasOwnProperty(s)){var u=l[s];s==="style"?ly(t,u):s==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&oy(t,u)):s==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&Zs(t,u):typeof u=="number"&&Zs(t,""+u):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Js.hasOwnProperty(s)?u!=null&&s==="onScroll"&&ve("scroll",t):u!=null&&jh(t,s,u,o))}switch(n){case"input":sa(t),wp(t,r,!1);break;case"textarea":sa(t),Tp(t);break;case"option":r.value!=null&&t.setAttribute("value",""+pr(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?Ai(t,!!r.multiple,s,!1):r.defaultValue!=null&&Ai(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=tl)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return it(e),null;case 6:if(t&&e.stateNode!=null)N_(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(b(166));if(n=Lr(co.current),Lr(nn.current),pa(e)){if(r=e.stateNode,n=e.memoizedProps,r[en]=e,(s=r.nodeValue!==n)&&(t=Nt,t!==null))switch(t.tag){case 3:fa(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&fa(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[en]=e,e.stateNode=r}return it(e),null;case 13:if(we(Ie),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Ee&&Pt!==null&&e.mode&1&&!(e.flags&128))Qy(),bi(),e.flags|=98560,s=!1;else if(s=pa(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(b(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(b(317));s[en]=e}else bi(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;it(e),s=!1}else Gt!==null&&(uh(Gt),Gt=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||Ie.current&1?be===0&&(be=3):Td())),e.updateQueue!==null&&(e.flags|=4),it(e),null);case 4:return Fi(),th(t,e),t===null&&oo(e.stateNode.containerInfo),it(e),null;case 10:return sd(e.type._context),it(e),null;case 17:return It(e.type)&&nl(),it(e),null;case 19:if(we(Ie),s=e.memoizedState,s===null)return it(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)ks(s,!1);else{if(be!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=ul(t),o!==null){for(e.flags|=128,ks(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return ye(Ie,Ie.current&1|2),e.child}t=t.sibling}s.tail!==null&&Ne()>zi&&(e.flags|=128,r=!0,ks(s,!1),e.lanes=4194304)}else{if(!r)if(t=ul(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),ks(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!Ee)return it(e),null}else 2*Ne()-s.renderingStartTime>zi&&n!==1073741824&&(e.flags|=128,r=!0,ks(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Ne(),e.sibling=null,n=Ie.current,ye(Ie,r?n&1|2:n&1),e):(it(e),null);case 22:case 23:return Ed(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?Ct&1073741824&&(it(e),e.subtreeFlags&6&&(e.flags|=8192)):it(e),null;case 24:return null;case 25:return null}throw Error(b(156,e.tag))}function bT(t,e){switch(td(e),e.tag){case 1:return It(e.type)&&nl(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Fi(),we(Tt),we(ut),cd(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return ud(e),null;case 13:if(we(Ie),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(b(340));bi()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return we(Ie),null;case 4:return Fi(),null;case 10:return sd(e.type._context),null;case 22:case 23:return Ed(),null;case 24:return null;default:return null}}var ya=!1,at=!1,UT=typeof WeakSet=="function"?WeakSet:Set,B=null;function Ti(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Pe(t,e,r)}else n.current=null}function nh(t,e,n){try{n()}catch(r){Pe(t,e,r)}}var hm=!1;function FT(t,e){if(Fc=Ja,t=My(),Zh(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,l=-1,u=-1,h=0,f=0,g=t,y=null;t:for(;;){for(var k;g!==n||i!==0&&g.nodeType!==3||(l=o+i),g!==s||r!==0&&g.nodeType!==3||(u=o+r),g.nodeType===3&&(o+=g.nodeValue.length),(k=g.firstChild)!==null;)y=g,g=k;for(;;){if(g===t)break t;if(y===n&&++h===i&&(l=o),y===s&&++f===r&&(u=o),(k=g.nextSibling)!==null)break;g=y,y=g.parentNode}g=k}n=l===-1||u===-1?null:{start:l,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(jc={focusedElem:t,selectionRange:n},Ja=!1,B=e;B!==null;)if(e=B,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,B=t;else for(;B!==null;){e=B;try{var P=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(P!==null){var D=P.memoizedProps,O=P.memoizedState,I=e.stateNode,E=I.getSnapshotBeforeUpdate(e.elementType===e.type?D:qt(e.type,D),O);I.__reactInternalSnapshotBeforeUpdate=E}break;case 3:var S=e.stateNode.containerInfo;S.nodeType===1?S.textContent="":S.nodeType===9&&S.documentElement&&S.removeChild(S.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(b(163))}}catch(V){Pe(e,e.return,V)}if(t=e.sibling,t!==null){t.return=e.return,B=t;break}B=e.return}return P=hm,hm=!1,P}function Hs(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&nh(e,n,s)}i=i.next}while(i!==r)}}function Bl(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function rh(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function D_(t){var e=t.alternate;e!==null&&(t.alternate=null,D_(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[en],delete e[lo],delete e[$c],delete e[ET],delete e[TT])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function V_(t){return t.tag===5||t.tag===3||t.tag===4}function dm(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||V_(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function ih(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=tl));else if(r!==4&&(t=t.child,t!==null))for(ih(t,e,n),t=t.sibling;t!==null;)ih(t,e,n),t=t.sibling}function sh(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(sh(t,e,n),t=t.sibling;t!==null;)sh(t,e,n),t=t.sibling}var Ge=null,Kt=!1;function zn(t,e,n){for(n=n.child;n!==null;)O_(t,e,n),n=n.sibling}function O_(t,e,n){if(tn&&typeof tn.onCommitFiberUnmount=="function")try{tn.onCommitFiberUnmount(Ol,n)}catch{}switch(n.tag){case 5:at||Ti(n,e);case 6:var r=Ge,i=Kt;Ge=null,zn(t,e,n),Ge=r,Kt=i,Ge!==null&&(Kt?(t=Ge,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Ge.removeChild(n.stateNode));break;case 18:Ge!==null&&(Kt?(t=Ge,n=n.stateNode,t.nodeType===8?Xu(t.parentNode,n):t.nodeType===1&&Xu(t,n),ro(t)):Xu(Ge,n.stateNode));break;case 4:r=Ge,i=Kt,Ge=n.stateNode.containerInfo,Kt=!0,zn(t,e,n),Ge=r,Kt=i;break;case 0:case 11:case 14:case 15:if(!at&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&nh(n,e,o),i=i.next}while(i!==r)}zn(t,e,n);break;case 1:if(!at&&(Ti(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){Pe(n,e,l)}zn(t,e,n);break;case 21:zn(t,e,n);break;case 22:n.mode&1?(at=(r=at)||n.memoizedState!==null,zn(t,e,n),at=r):zn(t,e,n);break;default:zn(t,e,n)}}function fm(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new UT),e.forEach(function(r){var i=GT.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Wt(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,l=o;e:for(;l!==null;){switch(l.tag){case 5:Ge=l.stateNode,Kt=!1;break e;case 3:Ge=l.stateNode.containerInfo,Kt=!0;break e;case 4:Ge=l.stateNode.containerInfo,Kt=!0;break e}l=l.return}if(Ge===null)throw Error(b(160));O_(s,o,i),Ge=null,Kt=!1;var u=i.alternate;u!==null&&(u.return=null),i.return=null}catch(h){Pe(i,e,h)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)L_(e,t),e=e.sibling}function L_(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Wt(e,t),Jt(t),r&4){try{Hs(3,t,t.return),Bl(3,t)}catch(D){Pe(t,t.return,D)}try{Hs(5,t,t.return)}catch(D){Pe(t,t.return,D)}}break;case 1:Wt(e,t),Jt(t),r&512&&n!==null&&Ti(n,n.return);break;case 5:if(Wt(e,t),Jt(t),r&512&&n!==null&&Ti(n,n.return),t.flags&32){var i=t.stateNode;try{Zs(i,"")}catch(D){Pe(t,t.return,D)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,l=t.type,u=t.updateQueue;if(t.updateQueue=null,u!==null)try{l==="input"&&s.type==="radio"&&s.name!=null&&ry(i,s),Pc(l,o);var h=Pc(l,s);for(o=0;o<u.length;o+=2){var f=u[o],g=u[o+1];f==="style"?ly(i,g):f==="dangerouslySetInnerHTML"?oy(i,g):f==="children"?Zs(i,g):jh(i,f,g,h)}switch(l){case"input":Sc(i,s);break;case"textarea":iy(i,s);break;case"select":var y=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var k=s.value;k!=null?Ai(i,!!s.multiple,k,!1):y!==!!s.multiple&&(s.defaultValue!=null?Ai(i,!!s.multiple,s.defaultValue,!0):Ai(i,!!s.multiple,s.multiple?[]:"",!1))}i[lo]=s}catch(D){Pe(t,t.return,D)}}break;case 6:if(Wt(e,t),Jt(t),r&4){if(t.stateNode===null)throw Error(b(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(D){Pe(t,t.return,D)}}break;case 3:if(Wt(e,t),Jt(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{ro(e.containerInfo)}catch(D){Pe(t,t.return,D)}break;case 4:Wt(e,t),Jt(t);break;case 13:Wt(e,t),Jt(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(vd=Ne())),r&4&&fm(t);break;case 22:if(f=n!==null&&n.memoizedState!==null,t.mode&1?(at=(h=at)||f,Wt(e,t),at=h):Wt(e,t),Jt(t),r&8192){if(h=t.memoizedState!==null,(t.stateNode.isHidden=h)&&!f&&t.mode&1)for(B=t,f=t.child;f!==null;){for(g=B=f;B!==null;){switch(y=B,k=y.child,y.tag){case 0:case 11:case 14:case 15:Hs(4,y,y.return);break;case 1:Ti(y,y.return);var P=y.stateNode;if(typeof P.componentWillUnmount=="function"){r=y,n=y.return;try{e=r,P.props=e.memoizedProps,P.state=e.memoizedState,P.componentWillUnmount()}catch(D){Pe(r,n,D)}}break;case 5:Ti(y,y.return);break;case 22:if(y.memoizedState!==null){mm(g);continue}}k!==null?(k.return=y,B=k):mm(g)}f=f.sibling}e:for(f=null,g=t;;){if(g.tag===5){if(f===null){f=g;try{i=g.stateNode,h?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(l=g.stateNode,u=g.memoizedProps.style,o=u!=null&&u.hasOwnProperty("display")?u.display:null,l.style.display=ay("display",o))}catch(D){Pe(t,t.return,D)}}}else if(g.tag===6){if(f===null)try{g.stateNode.nodeValue=h?"":g.memoizedProps}catch(D){Pe(t,t.return,D)}}else if((g.tag!==22&&g.tag!==23||g.memoizedState===null||g===t)&&g.child!==null){g.child.return=g,g=g.child;continue}if(g===t)break e;for(;g.sibling===null;){if(g.return===null||g.return===t)break e;f===g&&(f=null),g=g.return}f===g&&(f=null),g.sibling.return=g.return,g=g.sibling}}break;case 19:Wt(e,t),Jt(t),r&4&&fm(t);break;case 21:break;default:Wt(e,t),Jt(t)}}function Jt(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(V_(n)){var r=n;break e}n=n.return}throw Error(b(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Zs(i,""),r.flags&=-33);var s=dm(t);sh(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,l=dm(t);ih(t,l,o);break;default:throw Error(b(161))}}catch(u){Pe(t,t.return,u)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function jT(t,e,n){B=t,M_(t)}function M_(t,e,n){for(var r=(t.mode&1)!==0;B!==null;){var i=B,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||ya;if(!o){var l=i.alternate,u=l!==null&&l.memoizedState!==null||at;l=ya;var h=at;if(ya=o,(at=u)&&!h)for(B=i;B!==null;)o=B,u=o.child,o.tag===22&&o.memoizedState!==null?gm(i):u!==null?(u.return=o,B=u):gm(i);for(;s!==null;)B=s,M_(s),s=s.sibling;B=i,ya=l,at=h}pm(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,B=s):pm(t)}}function pm(t){for(;B!==null;){var e=B;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:at||Bl(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!at)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:qt(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Jp(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Jp(e,o,n)}break;case 5:var l=e.stateNode;if(n===null&&e.flags&4){n=l;var u=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var h=e.alternate;if(h!==null){var f=h.memoizedState;if(f!==null){var g=f.dehydrated;g!==null&&ro(g)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(b(163))}at||e.flags&512&&rh(e)}catch(y){Pe(e,e.return,y)}}if(e===t){B=null;break}if(n=e.sibling,n!==null){n.return=e.return,B=n;break}B=e.return}}function mm(t){for(;B!==null;){var e=B;if(e===t){B=null;break}var n=e.sibling;if(n!==null){n.return=e.return,B=n;break}B=e.return}}function gm(t){for(;B!==null;){var e=B;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Bl(4,e)}catch(u){Pe(e,n,u)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(u){Pe(e,i,u)}}var s=e.return;try{rh(e)}catch(u){Pe(e,s,u)}break;case 5:var o=e.return;try{rh(e)}catch(u){Pe(e,o,u)}}}catch(u){Pe(e,e.return,u)}if(e===t){B=null;break}var l=e.sibling;if(l!==null){l.return=e.return,B=l;break}B=e.return}}var zT=Math.ceil,dl=Ln.ReactCurrentDispatcher,yd=Ln.ReactCurrentOwner,jt=Ln.ReactCurrentBatchConfig,oe=0,We=null,Ve=null,Ye=0,Ct=0,Ii=Er(0),be=0,mo=null,Hr=0,$l=0,_d=0,Ws=null,vt=null,vd=0,zi=1/0,yn=null,fl=!1,oh=null,or=null,_a=!1,Jn=null,pl=0,qs=0,ah=null,La=-1,Ma=0;function mt(){return oe&6?Ne():La!==-1?La:La=Ne()}function ar(t){return t.mode&1?oe&2&&Ye!==0?Ye&-Ye:ST.transition!==null?(Ma===0&&(Ma=wy()),Ma):(t=ce,t!==0||(t=window.event,t=t===void 0?16:Ry(t.type)),t):1}function Xt(t,e,n,r){if(50<qs)throw qs=0,ah=null,Error(b(185));ko(t,n,r),(!(oe&2)||t!==We)&&(t===We&&(!(oe&2)&&($l|=n),be===4&&qn(t,Ye)),St(t,r),n===1&&oe===0&&!(e.mode&1)&&(zi=Ne()+500,Fl&&Tr()))}function St(t,e){var n=t.callbackNode;SE(t,e);var r=Ya(t,t===We?Ye:0);if(r===0)n!==null&&Ap(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&Ap(n),e===1)t.tag===0?IT(ym.bind(null,t)):qy(ym.bind(null,t)),vT(function(){!(oe&6)&&Tr()}),n=null;else{switch(Ey(r)){case 1:n=Wh;break;case 4:n=_y;break;case 16:n=Xa;break;case 536870912:n=vy;break;default:n=Xa}n=H_(n,b_.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function b_(t,e){if(La=-1,Ma=0,oe&6)throw Error(b(327));var n=t.callbackNode;if(xi()&&t.callbackNode!==n)return null;var r=Ya(t,t===We?Ye:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=ml(t,r);else{e=r;var i=oe;oe|=2;var s=F_();(We!==t||Ye!==e)&&(yn=null,zi=Ne()+500,br(t,e));do try{HT();break}catch(l){U_(t,l)}while(!0);id(),dl.current=s,oe=i,Ve!==null?e=0:(We=null,Ye=0,e=be)}if(e!==0){if(e===2&&(i=Oc(t),i!==0&&(r=i,e=lh(t,i))),e===1)throw n=mo,br(t,0),qn(t,r),St(t,Ne()),n;if(e===6)qn(t,r);else{if(i=t.current.alternate,!(r&30)&&!BT(i)&&(e=ml(t,r),e===2&&(s=Oc(t),s!==0&&(r=s,e=lh(t,s))),e===1))throw n=mo,br(t,0),qn(t,r),St(t,Ne()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(b(345));case 2:Nr(t,vt,yn);break;case 3:if(qn(t,r),(r&130023424)===r&&(e=vd+500-Ne(),10<e)){if(Ya(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){mt(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=Bc(Nr.bind(null,t,vt,yn),e);break}Nr(t,vt,yn);break;case 4:if(qn(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-Qt(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=Ne()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*zT(r/1960))-r,10<r){t.timeoutHandle=Bc(Nr.bind(null,t,vt,yn),r);break}Nr(t,vt,yn);break;case 5:Nr(t,vt,yn);break;default:throw Error(b(329))}}}return St(t,Ne()),t.callbackNode===n?b_.bind(null,t):null}function lh(t,e){var n=Ws;return t.current.memoizedState.isDehydrated&&(br(t,e).flags|=256),t=ml(t,e),t!==2&&(e=vt,vt=n,e!==null&&uh(e)),t}function uh(t){vt===null?vt=t:vt.push.apply(vt,t)}function BT(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!Yt(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function qn(t,e){for(e&=~_d,e&=~$l,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Qt(e),r=1<<n;t[n]=-1,e&=~r}}function ym(t){if(oe&6)throw Error(b(327));xi();var e=Ya(t,0);if(!(e&1))return St(t,Ne()),null;var n=ml(t,e);if(t.tag!==0&&n===2){var r=Oc(t);r!==0&&(e=r,n=lh(t,r))}if(n===1)throw n=mo,br(t,0),qn(t,e),St(t,Ne()),n;if(n===6)throw Error(b(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Nr(t,vt,yn),St(t,Ne()),null}function wd(t,e){var n=oe;oe|=1;try{return t(e)}finally{oe=n,oe===0&&(zi=Ne()+500,Fl&&Tr())}}function Wr(t){Jn!==null&&Jn.tag===0&&!(oe&6)&&xi();var e=oe;oe|=1;var n=jt.transition,r=ce;try{if(jt.transition=null,ce=1,t)return t()}finally{ce=r,jt.transition=n,oe=e,!(oe&6)&&Tr()}}function Ed(){Ct=Ii.current,we(Ii)}function br(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,_T(n)),Ve!==null)for(n=Ve.return;n!==null;){var r=n;switch(td(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&nl();break;case 3:Fi(),we(Tt),we(ut),cd();break;case 5:ud(r);break;case 4:Fi();break;case 13:we(Ie);break;case 19:we(Ie);break;case 10:sd(r.type._context);break;case 22:case 23:Ed()}n=n.return}if(We=t,Ve=t=lr(t.current,null),Ye=Ct=e,be=0,mo=null,_d=$l=Hr=0,vt=Ws=null,Or!==null){for(e=0;e<Or.length;e++)if(n=Or[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}Or=null}return t}function U_(t,e){do{var n=Ve;try{if(id(),Da.current=hl,cl){for(var r=Se.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}cl=!1}if($r=0,He=Le=Se=null,$s=!1,ho=0,yd.current=null,n===null||n.return===null){be=1,mo=e,Ve=null;break}e:{var s=t,o=n.return,l=n,u=e;if(e=Ye,l.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var h=u,f=l,g=f.tag;if(!(f.mode&1)&&(g===0||g===11||g===15)){var y=f.alternate;y?(f.updateQueue=y.updateQueue,f.memoizedState=y.memoizedState,f.lanes=y.lanes):(f.updateQueue=null,f.memoizedState=null)}var k=im(o);if(k!==null){k.flags&=-257,sm(k,o,l,s,e),k.mode&1&&rm(s,h,e),e=k,u=h;var P=e.updateQueue;if(P===null){var D=new Set;D.add(u),e.updateQueue=D}else P.add(u);break e}else{if(!(e&1)){rm(s,h,e),Td();break e}u=Error(b(426))}}else if(Ee&&l.mode&1){var O=im(o);if(O!==null){!(O.flags&65536)&&(O.flags|=256),sm(O,o,l,s,e),nd(ji(u,l));break e}}s=u=ji(u,l),be!==4&&(be=2),Ws===null?Ws=[s]:Ws.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var I=E_(s,u,e);Yp(s,I);break e;case 1:l=u;var E=s.type,S=s.stateNode;if(!(s.flags&128)&&(typeof E.getDerivedStateFromError=="function"||S!==null&&typeof S.componentDidCatch=="function"&&(or===null||!or.has(S)))){s.flags|=65536,e&=-e,s.lanes|=e;var V=T_(s,l,e);Yp(s,V);break e}}s=s.return}while(s!==null)}z_(n)}catch(j){e=j,Ve===n&&n!==null&&(Ve=n=n.return);continue}break}while(!0)}function F_(){var t=dl.current;return dl.current=hl,t===null?hl:t}function Td(){(be===0||be===3||be===2)&&(be=4),We===null||!(Hr&268435455)&&!($l&268435455)||qn(We,Ye)}function ml(t,e){var n=oe;oe|=2;var r=F_();(We!==t||Ye!==e)&&(yn=null,br(t,e));do try{$T();break}catch(i){U_(t,i)}while(!0);if(id(),oe=n,dl.current=r,Ve!==null)throw Error(b(261));return We=null,Ye=0,be}function $T(){for(;Ve!==null;)j_(Ve)}function HT(){for(;Ve!==null&&!mE();)j_(Ve)}function j_(t){var e=$_(t.alternate,t,Ct);t.memoizedProps=t.pendingProps,e===null?z_(t):Ve=e,yd.current=null}function z_(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=bT(n,e),n!==null){n.flags&=32767,Ve=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{be=6,Ve=null;return}}else if(n=MT(n,e,Ct),n!==null){Ve=n;return}if(e=e.sibling,e!==null){Ve=e;return}Ve=e=t}while(e!==null);be===0&&(be=5)}function Nr(t,e,n){var r=ce,i=jt.transition;try{jt.transition=null,ce=1,WT(t,e,n,r)}finally{jt.transition=i,ce=r}return null}function WT(t,e,n,r){do xi();while(Jn!==null);if(oe&6)throw Error(b(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(b(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(AE(t,s),t===We&&(Ve=We=null,Ye=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||_a||(_a=!0,H_(Xa,function(){return xi(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=jt.transition,jt.transition=null;var o=ce;ce=1;var l=oe;oe|=4,yd.current=null,FT(t,n),L_(n,t),hT(jc),Ja=!!Fc,jc=Fc=null,t.current=n,jT(n),gE(),oe=l,ce=o,jt.transition=s}else t.current=n;if(_a&&(_a=!1,Jn=t,pl=i),s=t.pendingLanes,s===0&&(or=null),vE(n.stateNode),St(t,Ne()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(fl)throw fl=!1,t=oh,oh=null,t;return pl&1&&t.tag!==0&&xi(),s=t.pendingLanes,s&1?t===ah?qs++:(qs=0,ah=t):qs=0,Tr(),null}function xi(){if(Jn!==null){var t=Ey(pl),e=jt.transition,n=ce;try{if(jt.transition=null,ce=16>t?16:t,Jn===null)var r=!1;else{if(t=Jn,Jn=null,pl=0,oe&6)throw Error(b(331));var i=oe;for(oe|=4,B=t.current;B!==null;){var s=B,o=s.child;if(B.flags&16){var l=s.deletions;if(l!==null){for(var u=0;u<l.length;u++){var h=l[u];for(B=h;B!==null;){var f=B;switch(f.tag){case 0:case 11:case 15:Hs(8,f,s)}var g=f.child;if(g!==null)g.return=f,B=g;else for(;B!==null;){f=B;var y=f.sibling,k=f.return;if(D_(f),f===h){B=null;break}if(y!==null){y.return=k,B=y;break}B=k}}}var P=s.alternate;if(P!==null){var D=P.child;if(D!==null){P.child=null;do{var O=D.sibling;D.sibling=null,D=O}while(D!==null)}}B=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,B=o;else e:for(;B!==null;){if(s=B,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Hs(9,s,s.return)}var I=s.sibling;if(I!==null){I.return=s.return,B=I;break e}B=s.return}}var E=t.current;for(B=E;B!==null;){o=B;var S=o.child;if(o.subtreeFlags&2064&&S!==null)S.return=o,B=S;else e:for(o=E;B!==null;){if(l=B,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:Bl(9,l)}}catch(j){Pe(l,l.return,j)}if(l===o){B=null;break e}var V=l.sibling;if(V!==null){V.return=l.return,B=V;break e}B=l.return}}if(oe=i,Tr(),tn&&typeof tn.onPostCommitFiberRoot=="function")try{tn.onPostCommitFiberRoot(Ol,t)}catch{}r=!0}return r}finally{ce=n,jt.transition=e}}return!1}function _m(t,e,n){e=ji(n,e),e=E_(t,e,1),t=sr(t,e,1),e=mt(),t!==null&&(ko(t,1,e),St(t,e))}function Pe(t,e,n){if(t.tag===3)_m(t,t,n);else for(;e!==null;){if(e.tag===3){_m(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(or===null||!or.has(r))){t=ji(n,t),t=T_(e,t,1),e=sr(e,t,1),t=mt(),e!==null&&(ko(e,1,t),St(e,t));break}}e=e.return}}function qT(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=mt(),t.pingedLanes|=t.suspendedLanes&n,We===t&&(Ye&n)===n&&(be===4||be===3&&(Ye&130023424)===Ye&&500>Ne()-vd?br(t,0):_d|=n),St(t,e)}function B_(t,e){e===0&&(t.mode&1?(e=la,la<<=1,!(la&130023424)&&(la=4194304)):e=1);var n=mt();t=Cn(t,e),t!==null&&(ko(t,e,n),St(t,n))}function KT(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),B_(t,n)}function GT(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(b(314))}r!==null&&r.delete(e),B_(t,n)}var $_;$_=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Tt.current)Et=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Et=!1,LT(t,e,n);Et=!!(t.flags&131072)}else Et=!1,Ee&&e.flags&1048576&&Ky(e,sl,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;Oa(t,e),t=e.pendingProps;var i=Mi(e,ut.current);Pi(e,n),i=dd(null,e,r,t,i,n);var s=fd();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,It(r)?(s=!0,rl(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,ad(e),i.updater=zl,e.stateNode=i,i._reactInternals=e,Qc(e,r,t,n),e=Jc(null,e,r,!0,s,n)):(e.tag=0,Ee&&s&&ed(e),pt(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(Oa(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=XT(r),t=qt(r,t),i){case 0:e=Yc(null,e,r,t,n);break e;case 1:e=lm(null,e,r,t,n);break e;case 11:e=om(null,e,r,t,n);break e;case 14:e=am(null,e,r,qt(r.type,t),n);break e}throw Error(b(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:qt(r,i),Yc(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:qt(r,i),lm(t,e,r,i,n);case 3:e:{if(k_(e),t===null)throw Error(b(387));r=e.pendingProps,s=e.memoizedState,i=s.element,Zy(t,e),ll(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=ji(Error(b(423)),e),e=um(t,e,r,n,i);break e}else if(r!==i){i=ji(Error(b(424)),e),e=um(t,e,r,n,i);break e}else for(Pt=ir(e.stateNode.containerInfo.firstChild),Nt=e,Ee=!0,Gt=null,n=Yy(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(bi(),r===i){e=Pn(t,e,n);break e}pt(t,e,r,n)}e=e.child}return e;case 5:return e_(e),t===null&&qc(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,zc(r,i)?o=null:s!==null&&zc(r,s)&&(e.flags|=32),A_(t,e),pt(t,e,o,n),e.child;case 6:return t===null&&qc(e),null;case 13:return R_(t,e,n);case 4:return ld(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Ui(e,null,r,n):pt(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:qt(r,i),om(t,e,r,i,n);case 7:return pt(t,e,e.pendingProps,n),e.child;case 8:return pt(t,e,e.pendingProps.children,n),e.child;case 12:return pt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,ye(ol,r._currentValue),r._currentValue=o,s!==null)if(Yt(s.value,o)){if(s.children===i.children&&!Tt.current){e=Pn(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var l=s.dependencies;if(l!==null){o=s.child;for(var u=l.firstContext;u!==null;){if(u.context===r){if(s.tag===1){u=An(-1,n&-n),u.tag=2;var h=s.updateQueue;if(h!==null){h=h.shared;var f=h.pending;f===null?u.next=u:(u.next=f.next,f.next=u),h.pending=u}}s.lanes|=n,u=s.alternate,u!==null&&(u.lanes|=n),Kc(s.return,n,e),l.lanes|=n;break}u=u.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(b(341));o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),Kc(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}pt(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,Pi(e,n),i=Bt(i),r=r(i),e.flags|=1,pt(t,e,r,n),e.child;case 14:return r=e.type,i=qt(r,e.pendingProps),i=qt(r.type,i),am(t,e,r,i,n);case 15:return I_(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:qt(r,i),Oa(t,e),e.tag=1,It(r)?(t=!0,rl(e)):t=!1,Pi(e,n),w_(e,r,i),Qc(e,r,i,n),Jc(null,e,r,!0,t,n);case 19:return C_(t,e,n);case 22:return S_(t,e,n)}throw Error(b(156,e.tag))};function H_(t,e){return yy(t,e)}function QT(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ft(t,e,n,r){return new QT(t,e,n,r)}function Id(t){return t=t.prototype,!(!t||!t.isReactComponent)}function XT(t){if(typeof t=="function")return Id(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Bh)return 11;if(t===$h)return 14}return 2}function lr(t,e){var n=t.alternate;return n===null?(n=Ft(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function ba(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")Id(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case fi:return Ur(n.children,i,s,e);case zh:o=8,i|=8;break;case vc:return t=Ft(12,n,e,i|2),t.elementType=vc,t.lanes=s,t;case wc:return t=Ft(13,n,e,i),t.elementType=wc,t.lanes=s,t;case Ec:return t=Ft(19,n,e,i),t.elementType=Ec,t.lanes=s,t;case ey:return Hl(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Jg:o=10;break e;case Zg:o=9;break e;case Bh:o=11;break e;case $h:o=14;break e;case $n:o=16,r=null;break e}throw Error(b(130,t==null?t:typeof t,""))}return e=Ft(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function Ur(t,e,n,r){return t=Ft(7,t,r,e),t.lanes=n,t}function Hl(t,e,n,r){return t=Ft(22,t,r,e),t.elementType=ey,t.lanes=n,t.stateNode={isHidden:!1},t}function ic(t,e,n){return t=Ft(6,t,null,e),t.lanes=n,t}function sc(t,e,n){return e=Ft(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function YT(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Fu(0),this.expirationTimes=Fu(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Fu(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Sd(t,e,n,r,i,s,o,l,u){return t=new YT(t,e,n,l,u),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Ft(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},ad(s),t}function JT(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:di,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function W_(t){if(!t)return mr;t=t._reactInternals;e:{if(Zr(t)!==t||t.tag!==1)throw Error(b(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(It(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(b(171))}if(t.tag===1){var n=t.type;if(It(n))return Wy(t,n,e)}return e}function q_(t,e,n,r,i,s,o,l,u){return t=Sd(n,r,!0,t,i,s,o,l,u),t.context=W_(null),n=t.current,r=mt(),i=ar(n),s=An(r,i),s.callback=e??null,sr(n,s,i),t.current.lanes=i,ko(t,i,r),St(t,r),t}function Wl(t,e,n,r){var i=e.current,s=mt(),o=ar(i);return n=W_(n),e.context===null?e.context=n:e.pendingContext=n,e=An(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=sr(i,e,o),t!==null&&(Xt(t,i,o,s),Na(t,i,o)),o}function gl(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function vm(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Ad(t,e){vm(t,e),(t=t.alternate)&&vm(t,e)}function ZT(){return null}var K_=typeof reportError=="function"?reportError:function(t){console.error(t)};function kd(t){this._internalRoot=t}ql.prototype.render=kd.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(b(409));Wl(t,e,null,null)};ql.prototype.unmount=kd.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Wr(function(){Wl(null,t,null,null)}),e[Rn]=null}};function ql(t){this._internalRoot=t}ql.prototype.unstable_scheduleHydration=function(t){if(t){var e=Sy();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Wn.length&&e!==0&&e<Wn[n].priority;n++);Wn.splice(n,0,t),n===0&&ky(t)}};function Rd(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Kl(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function wm(){}function eI(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var h=gl(o);s.call(h)}}var o=q_(e,r,t,0,null,!1,!1,"",wm);return t._reactRootContainer=o,t[Rn]=o.current,oo(t.nodeType===8?t.parentNode:t),Wr(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var h=gl(u);l.call(h)}}var u=Sd(t,0,!1,null,null,!1,!1,"",wm);return t._reactRootContainer=u,t[Rn]=u.current,oo(t.nodeType===8?t.parentNode:t),Wr(function(){Wl(e,u,n,r)}),u}function Gl(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var l=i;i=function(){var u=gl(o);l.call(u)}}Wl(e,o,t,i)}else o=eI(n,e,t,i,r);return gl(o)}Ty=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Ds(e.pendingLanes);n!==0&&(qh(e,n|1),St(e,Ne()),!(oe&6)&&(zi=Ne()+500,Tr()))}break;case 13:Wr(function(){var r=Cn(t,1);if(r!==null){var i=mt();Xt(r,t,1,i)}}),Ad(t,1)}};Kh=function(t){if(t.tag===13){var e=Cn(t,134217728);if(e!==null){var n=mt();Xt(e,t,134217728,n)}Ad(t,134217728)}};Iy=function(t){if(t.tag===13){var e=ar(t),n=Cn(t,e);if(n!==null){var r=mt();Xt(n,t,e,r)}Ad(t,e)}};Sy=function(){return ce};Ay=function(t,e){var n=ce;try{return ce=t,e()}finally{ce=n}};Nc=function(t,e,n){switch(e){case"input":if(Sc(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=Ul(r);if(!i)throw Error(b(90));ny(r),Sc(r,i)}}}break;case"textarea":iy(t,n);break;case"select":e=n.value,e!=null&&Ai(t,!!n.multiple,e,!1)}};hy=wd;dy=Wr;var tI={usingClientEntryPoint:!1,Events:[Co,yi,Ul,uy,cy,wd]},Rs={findFiberByHostInstance:Vr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},nI={bundleType:Rs.bundleType,version:Rs.version,rendererPackageName:Rs.rendererPackageName,rendererConfig:Rs.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Ln.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=my(t),t===null?null:t.stateNode},findFiberByHostInstance:Rs.findFiberByHostInstance||ZT,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var va=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!va.isDisabled&&va.supportsFiber)try{Ol=va.inject(nI),tn=va}catch{}}Vt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=tI;Vt.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Rd(e))throw Error(b(200));return JT(t,e,null,n)};Vt.createRoot=function(t,e){if(!Rd(t))throw Error(b(299));var n=!1,r="",i=K_;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=Sd(t,1,!1,null,null,n,!1,r,i),t[Rn]=e.current,oo(t.nodeType===8?t.parentNode:t),new kd(e)};Vt.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(b(188)):(t=Object.keys(t).join(","),Error(b(268,t)));return t=my(e),t=t===null?null:t.stateNode,t};Vt.flushSync=function(t){return Wr(t)};Vt.hydrate=function(t,e,n){if(!Kl(e))throw Error(b(200));return Gl(null,t,e,!0,n)};Vt.hydrateRoot=function(t,e,n){if(!Rd(t))throw Error(b(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=K_;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=q_(e,null,t,1,n??null,i,!1,s,o),t[Rn]=e.current,oo(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new ql(e)};Vt.render=function(t,e,n){if(!Kl(e))throw Error(b(200));return Gl(null,t,e,!1,n)};Vt.unmountComponentAtNode=function(t){if(!Kl(t))throw Error(b(40));return t._reactRootContainer?(Wr(function(){Gl(null,null,t,!1,function(){t._reactRootContainer=null,t[Rn]=null})}),!0):!1};Vt.unstable_batchedUpdates=wd;Vt.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!Kl(n))throw Error(b(200));if(t==null||t._reactInternals===void 0)throw Error(b(38));return Gl(t,e,n,!1,r)};Vt.version="18.3.1-next-f1338f8080-20240426";function G_(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(G_)}catch(t){console.error(t)}}G_(),Gg.exports=Vt;var rI=Gg.exports,Q_,Em=rI;Q_=Em.createRoot,Em.hydrateRoot;/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var iI={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sI=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase().trim(),Mn=(t,e)=>{const n=Z.forwardRef(({color:r="currentColor",size:i=24,strokeWidth:s=2,absoluteStrokeWidth:o,className:l="",children:u,...h},f)=>Z.createElement("svg",{ref:f,...iI,width:i,height:i,stroke:r,strokeWidth:o?Number(s)*24/Number(i):s,className:["lucide",`lucide-${sI(t)}`,l].join(" "),...h},[...e.map(([g,y])=>Z.createElement(g,y)),...Array.isArray(u)?u:[u]]));return n.displayName=`${t}`,n};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oI=Mn("BarChart2",[["line",{x1:"18",x2:"18",y1:"20",y2:"10",key:"1xfpm4"}],["line",{x1:"12",x2:"12",y1:"20",y2:"4",key:"be30l9"}],["line",{x1:"6",x2:"6",y1:"20",y2:"14",key:"1r4le6"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const aI=Mn("Clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lI=Mn("Home",[["path",{d:"m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"y5dka4"}],["polyline",{points:"9 22 9 12 15 12 15 22",key:"e2us08"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uI=Mn("LogOut",[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X_=Mn("Mic",[["path",{d:"M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z",key:"131961"}],["path",{d:"M19 10v2a7 7 0 0 1-14 0v-2",key:"1vc78b"}],["line",{x1:"12",x2:"12",y1:"19",y2:"22",key:"x3vr5v"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cI=Mn("Monitor",[["rect",{width:"20",height:"14",x:"2",y:"3",rx:"2",key:"48i651"}],["line",{x1:"8",x2:"16",y1:"21",y2:"21",key:"1svkeh"}],["line",{x1:"12",x2:"12",y1:"17",y2:"21",key:"vw1qmm"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hI=Mn("Settings",[["path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",key:"1qme2f"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tm=Mn("Trash2",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dI=Mn("UserPlus",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["line",{x1:"19",x2:"19",y1:"8",y2:"14",key:"1bvyxn"}],["line",{x1:"22",x2:"16",y1:"11",y2:"11",key:"1shjgl"}]]);var Im={};/**
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
 */const Y_=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},fI=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],l=t[n++],u=((i&7)<<18|(s&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},J_={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,l=o?t[i+1]:0,u=i+2<t.length,h=u?t[i+2]:0,f=s>>2,g=(s&3)<<4|l>>4;let y=(l&15)<<2|h>>6,k=h&63;u||(k=64,o||(y=64)),r.push(n[f],n[g],n[y],n[k])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Y_(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):fI(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],l=i<t.length?n[t.charAt(i)]:0;++i;const h=i<t.length?n[t.charAt(i)]:64;++i;const g=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||l==null||h==null||g==null)throw new pI;const y=s<<2|l>>4;if(r.push(y),h!==64){const k=l<<4&240|h>>2;if(r.push(k),g!==64){const P=h<<6&192|g;r.push(P)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class pI extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const mI=function(t){const e=Y_(t);return J_.encodeByteArray(e,!0)},yl=function(t){return mI(t).replace(/\./g,"")},Z_=function(t){try{return J_.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function gI(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const yI=()=>gI().__FIREBASE_DEFAULTS__,_I=()=>{if(typeof process>"u"||typeof Im>"u")return;const t=Im.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},vI=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Z_(t[1]);return e&&JSON.parse(e)},Ql=()=>{try{return yI()||_I()||vI()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},ev=t=>{var e,n;return(n=(e=Ql())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},wI=t=>{const e=ev(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},tv=()=>{var t;return(t=Ql())===null||t===void 0?void 0:t.config},nv=t=>{var e;return(e=Ql())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class EI{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function TI(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t);return[yl(JSON.stringify(n)),yl(JSON.stringify(o)),""].join(".")}/**
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
 */function ct(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function II(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ct())}function SI(){var t;const e=(t=Ql())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function AI(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function kI(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function RI(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function CI(){const t=ct();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function PI(){return!SI()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function xI(){try{return typeof indexedDB=="object"}catch{return!1}}function NI(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
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
 */const DI="FirebaseError";class bn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=DI,Object.setPrototypeOf(this,bn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,xo.prototype.create)}}class xo{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?VI(s,r):"Error",l=`${this.serviceName}: ${o} (${i}).`;return new bn(i,l,r)}}function VI(t,e){return t.replace(OI,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const OI=/\{\$([^}]+)}/g;function LI(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function _l(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(Sm(s)&&Sm(o)){if(!_l(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Sm(t){return t!==null&&typeof t=="object"}/**
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
 */function No(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function MI(t,e){const n=new bI(t,e);return n.subscribe.bind(n)}class bI{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");UI(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=oc),i.error===void 0&&(i.error=oc),i.complete===void 0&&(i.complete=oc);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function UI(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function oc(){}/**
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
 */function ht(t){return t&&t._delegate?t._delegate:t}class qr{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Dr="[DEFAULT]";/**
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
 */class FI{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new EI;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(zI(e))try{this.getOrInitializeService({instanceIdentifier:Dr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Dr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Dr){return this.instances.has(e)}getOptions(e=Dr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(s);r===l&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:jI(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Dr){return this.component?this.component.multipleInstances?e:Dr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function jI(t){return t===Dr?void 0:t}function zI(t){return t.instantiationMode==="EAGER"}/**
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
 */class BI{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new FI(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var ie;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ie||(ie={}));const $I={debug:ie.DEBUG,verbose:ie.VERBOSE,info:ie.INFO,warn:ie.WARN,error:ie.ERROR,silent:ie.SILENT},HI=ie.INFO,WI={[ie.DEBUG]:"log",[ie.VERBOSE]:"log",[ie.INFO]:"info",[ie.WARN]:"warn",[ie.ERROR]:"error"},qI=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=WI[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Cd{constructor(e){this.name=e,this._logLevel=HI,this._logHandler=qI,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ie))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?$I[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ie.DEBUG,...e),this._logHandler(this,ie.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ie.VERBOSE,...e),this._logHandler(this,ie.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ie.INFO,...e),this._logHandler(this,ie.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ie.WARN,...e),this._logHandler(this,ie.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ie.ERROR,...e),this._logHandler(this,ie.ERROR,...e)}}const KI=(t,e)=>e.some(n=>t instanceof n);let Am,km;function GI(){return Am||(Am=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function QI(){return km||(km=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const rv=new WeakMap,ch=new WeakMap,iv=new WeakMap,ac=new WeakMap,Pd=new WeakMap;function XI(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(ur(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&rv.set(n,t)}).catch(()=>{}),Pd.set(e,t),e}function YI(t){if(ch.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});ch.set(t,e)}let hh={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return ch.get(t);if(e==="objectStoreNames")return t.objectStoreNames||iv.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return ur(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function JI(t){hh=t(hh)}function ZI(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(lc(this),e,...n);return iv.set(r,e.sort?e.sort():[e]),ur(r)}:QI().includes(t)?function(...e){return t.apply(lc(this),e),ur(rv.get(this))}:function(...e){return ur(t.apply(lc(this),e))}}function eS(t){return typeof t=="function"?ZI(t):(t instanceof IDBTransaction&&YI(t),KI(t,GI())?new Proxy(t,hh):t)}function ur(t){if(t instanceof IDBRequest)return XI(t);if(ac.has(t))return ac.get(t);const e=eS(t);return e!==t&&(ac.set(t,e),Pd.set(e,t)),e}const lc=t=>Pd.get(t);function tS(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),l=ur(o);return r&&o.addEventListener("upgradeneeded",u=>{r(ur(o.result),u.oldVersion,u.newVersion,ur(o.transaction),u)}),n&&o.addEventListener("blocked",u=>n(u.oldVersion,u.newVersion,u)),l.then(u=>{s&&u.addEventListener("close",()=>s()),i&&u.addEventListener("versionchange",h=>i(h.oldVersion,h.newVersion,h))}).catch(()=>{}),l}const nS=["get","getKey","getAll","getAllKeys","count"],rS=["put","add","delete","clear"],uc=new Map;function Rm(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(uc.get(e))return uc.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=rS.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||nS.includes(n)))return;const s=async function(o,...l){const u=this.transaction(o,i?"readwrite":"readonly");let h=u.store;return r&&(h=h.index(l.shift())),(await Promise.all([h[n](...l),i&&u.done]))[0]};return uc.set(e,s),s}JI(t=>({...t,get:(e,n,r)=>Rm(e,n)||t.get(e,n,r),has:(e,n)=>!!Rm(e,n)||t.has(e,n)}));/**
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
 */class iS{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(sS(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function sS(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const dh="@firebase/app",Cm="0.10.13";/**
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
 */const xn=new Cd("@firebase/app"),oS="@firebase/app-compat",aS="@firebase/analytics-compat",lS="@firebase/analytics",uS="@firebase/app-check-compat",cS="@firebase/app-check",hS="@firebase/auth",dS="@firebase/auth-compat",fS="@firebase/database",pS="@firebase/data-connect",mS="@firebase/database-compat",gS="@firebase/functions",yS="@firebase/functions-compat",_S="@firebase/installations",vS="@firebase/installations-compat",wS="@firebase/messaging",ES="@firebase/messaging-compat",TS="@firebase/performance",IS="@firebase/performance-compat",SS="@firebase/remote-config",AS="@firebase/remote-config-compat",kS="@firebase/storage",RS="@firebase/storage-compat",CS="@firebase/firestore",PS="@firebase/vertexai-preview",xS="@firebase/firestore-compat",NS="firebase",DS="10.14.1";/**
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
 */const fh="[DEFAULT]",VS={[dh]:"fire-core",[oS]:"fire-core-compat",[lS]:"fire-analytics",[aS]:"fire-analytics-compat",[cS]:"fire-app-check",[uS]:"fire-app-check-compat",[hS]:"fire-auth",[dS]:"fire-auth-compat",[fS]:"fire-rtdb",[pS]:"fire-data-connect",[mS]:"fire-rtdb-compat",[gS]:"fire-fn",[yS]:"fire-fn-compat",[_S]:"fire-iid",[vS]:"fire-iid-compat",[wS]:"fire-fcm",[ES]:"fire-fcm-compat",[TS]:"fire-perf",[IS]:"fire-perf-compat",[SS]:"fire-rc",[AS]:"fire-rc-compat",[kS]:"fire-gcs",[RS]:"fire-gcs-compat",[CS]:"fire-fst",[xS]:"fire-fst-compat",[PS]:"fire-vertex","fire-js":"fire-js",[NS]:"fire-js-all"};/**
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
 */const vl=new Map,OS=new Map,ph=new Map;function Pm(t,e){try{t.container.addComponent(e)}catch(n){xn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Bi(t){const e=t.name;if(ph.has(e))return xn.debug(`There were multiple attempts to register component ${e}.`),!1;ph.set(e,t);for(const n of vl.values())Pm(n,t);for(const n of OS.values())Pm(n,t);return!0}function xd(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function En(t){return t.settings!==void 0}/**
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
 */const LS={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},cr=new xo("app","Firebase",LS);/**
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
 */class MS{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new qr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw cr.create("app-deleted",{appName:this._name})}}/**
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
 */const Zi=DS;function sv(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:fh,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw cr.create("bad-app-name",{appName:String(i)});if(n||(n=tv()),!n)throw cr.create("no-options");const s=vl.get(i);if(s){if(_l(n,s.options)&&_l(r,s.config))return s;throw cr.create("duplicate-app",{appName:i})}const o=new BI(i);for(const u of ph.values())o.addComponent(u);const l=new MS(n,r,o);return vl.set(i,l),l}function ov(t=fh){const e=vl.get(t);if(!e&&t===fh&&tv())return sv();if(!e)throw cr.create("no-app",{appName:t});return e}function hr(t,e,n){var r;let i=(r=VS[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const l=[`Unable to register library "${i}" with version "${e}":`];s&&l.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),xn.warn(l.join(" "));return}Bi(new qr(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const bS="firebase-heartbeat-database",US=1,go="firebase-heartbeat-store";let cc=null;function av(){return cc||(cc=tS(bS,US,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(go)}catch(n){console.warn(n)}}}}).catch(t=>{throw cr.create("idb-open",{originalErrorMessage:t.message})})),cc}async function FS(t){try{const n=(await av()).transaction(go),r=await n.objectStore(go).get(lv(t));return await n.done,r}catch(e){if(e instanceof bn)xn.warn(e.message);else{const n=cr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});xn.warn(n.message)}}}async function xm(t,e){try{const r=(await av()).transaction(go,"readwrite");await r.objectStore(go).put(e,lv(t)),await r.done}catch(n){if(n instanceof bn)xn.warn(n.message);else{const r=cr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});xn.warn(r.message)}}}function lv(t){return`${t.name}!${t.options.appId}`}/**
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
 */const jS=1024,zS=30*24*60*60*1e3;class BS{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new HS(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Nm();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s)?void 0:(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const l=new Date(o.date).valueOf();return Date.now()-l<=zS}),this._storage.overwrite(this._heartbeatsCache))}catch(r){xn.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Nm(),{heartbeatsToSend:r,unsentEntries:i}=$S(this._heartbeatsCache.heartbeats),s=yl(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(n){return xn.warn(n),""}}}function Nm(){return new Date().toISOString().substring(0,10)}function $S(t,e=jS){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),Dm(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Dm(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class HS{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return xI()?NI().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await FS(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return xm(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return xm(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Dm(t){return yl(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function WS(t){Bi(new qr("platform-logger",e=>new iS(e),"PRIVATE")),Bi(new qr("heartbeat",e=>new BS(e),"PRIVATE")),hr(dh,Cm,t),hr(dh,Cm,"esm2017"),hr("fire-js","")}WS("");var qS="firebase",KS="10.14.1";/**
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
 */hr(qS,KS,"app");function Nd(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function uv(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const GS=uv,cv=new xo("auth","Firebase",uv());/**
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
 */const wl=new Cd("@firebase/auth");function QS(t,...e){wl.logLevel<=ie.WARN&&wl.warn(`Auth (${Zi}): ${t}`,...e)}function Ua(t,...e){wl.logLevel<=ie.ERROR&&wl.error(`Auth (${Zi}): ${t}`,...e)}/**
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
 */function Nn(t,...e){throw Dd(t,...e)}function rn(t,...e){return Dd(t,...e)}function hv(t,e,n){const r=Object.assign(Object.assign({},GS()),{[e]:n});return new xo("auth","Firebase",r).create(e,{appName:t.name})}function dr(t){return hv(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Dd(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return cv.create(t,...e)}function G(t,e,...n){if(!t)throw Dd(e,...n)}function Tn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Ua(e),new Error(e)}function Dn(t,e){t||Tn(e)}/**
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
 */function mh(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function XS(){return Vm()==="http:"||Vm()==="https:"}function Vm(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function YS(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(XS()||kI()||"connection"in navigator)?navigator.onLine:!0}function JS(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class Do{constructor(e,n){this.shortDelay=e,this.longDelay=n,Dn(n>e,"Short delay should be less than long delay!"),this.isMobile=II()||RI()}get(){return YS()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Vd(t,e){Dn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class dv{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Tn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Tn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Tn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const ZS={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const e1=new Do(3e4,6e4);function Xl(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function es(t,e,n,r,i={}){return fv(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const l=No(Object.assign({key:t.config.apiKey},o)).slice(1),u=await t._getAdditionalHeaders();u["Content-Type"]="application/json",t.languageCode&&(u["X-Firebase-Locale"]=t.languageCode);const h=Object.assign({method:e,headers:u},s);return AI()||(h.referrerPolicy="no-referrer"),dv.fetch()(mv(t,t.config.apiHost,n,l),h)})}async function fv(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},ZS),e);try{const i=new t1(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw wa(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const l=s.ok?o.errorMessage:o.error.message,[u,h]=l.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw wa(t,"credential-already-in-use",o);if(u==="EMAIL_EXISTS")throw wa(t,"email-already-in-use",o);if(u==="USER_DISABLED")throw wa(t,"user-disabled",o);const f=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(h)throw hv(t,f,h);Nn(t,f)}}catch(i){if(i instanceof bn)throw i;Nn(t,"network-request-failed",{message:String(i)})}}async function pv(t,e,n,r,i={}){const s=await es(t,e,n,r,i);return"mfaPendingCredential"in s&&Nn(t,"multi-factor-auth-required",{_serverResponse:s}),s}function mv(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?Vd(t.config,i):`${t.config.apiScheme}://${i}`}class t1{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(rn(this.auth,"network-request-failed")),e1.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function wa(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=rn(t,e,r);return i.customData._tokenResponse=n,i}/**
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
 */async function n1(t,e){return es(t,"POST","/v1/accounts:delete",e)}async function gv(t,e){return es(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function Ks(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function r1(t,e=!1){const n=ht(t),r=await n.getIdToken(e),i=Od(r);G(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Ks(hc(i.auth_time)),issuedAtTime:Ks(hc(i.iat)),expirationTime:Ks(hc(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function hc(t){return Number(t)*1e3}function Od(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Ua("JWT malformed, contained fewer than 3 sections"),null;try{const i=Z_(n);return i?JSON.parse(i):(Ua("Failed to decode base64 JWT payload"),null)}catch(i){return Ua("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function Om(t){const e=Od(t);return G(e,"internal-error"),G(typeof e.exp<"u","internal-error"),G(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function yo(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof bn&&i1(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function i1({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class s1{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class gh{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ks(this.lastLoginAt),this.creationTime=Ks(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function El(t){var e;const n=t.auth,r=await t.getIdToken(),i=await yo(t,gv(n,{idToken:r}));G(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?yv(s.providerUserInfo):[],l=a1(t.providerData,o),u=t.isAnonymous,h=!(t.email&&s.passwordHash)&&!(l!=null&&l.length),f=u?h:!1,g={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:l,metadata:new gh(s.createdAt,s.lastLoginAt),isAnonymous:f};Object.assign(t,g)}async function o1(t){const e=ht(t);await El(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function a1(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function yv(t){return t.map(e=>{var{providerId:n}=e,r=Nd(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function l1(t,e){const n=await fv(t,{},async()=>{const r=No({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=mv(t,i,"/v1/token",`key=${s}`),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/x-www-form-urlencoded",dv.fetch()(o,{method:"POST",headers:l,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function u1(t,e){return es(t,"POST","/v2/accounts:revokeToken",Xl(t,e))}/**
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
 */class Ni{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){G(e.idToken,"internal-error"),G(typeof e.idToken<"u","internal-error"),G(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Om(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){G(e.length!==0,"internal-error");const n=Om(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(G(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await l1(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new Ni;return r&&(G(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(G(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(G(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Ni,this.toJSON())}_performRefresh(){return Tn("not implemented")}}/**
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
 */function Bn(t,e){G(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class In{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=Nd(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new s1(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new gh(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await yo(this,this.stsTokenManager.getToken(this.auth,e));return G(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return r1(this,e)}reload(){return o1(this)}_assign(e){this!==e&&(G(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new In(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){G(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await El(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(En(this.auth.app))return Promise.reject(dr(this.auth));const e=await this.getIdToken();return await yo(this,n1(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,l,u,h,f;const g=(r=n.displayName)!==null&&r!==void 0?r:void 0,y=(i=n.email)!==null&&i!==void 0?i:void 0,k=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,P=(o=n.photoURL)!==null&&o!==void 0?o:void 0,D=(l=n.tenantId)!==null&&l!==void 0?l:void 0,O=(u=n._redirectEventId)!==null&&u!==void 0?u:void 0,I=(h=n.createdAt)!==null&&h!==void 0?h:void 0,E=(f=n.lastLoginAt)!==null&&f!==void 0?f:void 0,{uid:S,emailVerified:V,isAnonymous:j,providerData:F,stsTokenManager:w}=n;G(S&&w,e,"internal-error");const m=Ni.fromJSON(this.name,w);G(typeof S=="string",e,"internal-error"),Bn(g,e.name),Bn(y,e.name),G(typeof V=="boolean",e,"internal-error"),G(typeof j=="boolean",e,"internal-error"),Bn(k,e.name),Bn(P,e.name),Bn(D,e.name),Bn(O,e.name),Bn(I,e.name),Bn(E,e.name);const v=new In({uid:S,auth:e,email:y,emailVerified:V,displayName:g,isAnonymous:j,photoURL:P,phoneNumber:k,tenantId:D,stsTokenManager:m,createdAt:I,lastLoginAt:E});return F&&Array.isArray(F)&&(v.providerData=F.map(T=>Object.assign({},T))),O&&(v._redirectEventId=O),v}static async _fromIdTokenResponse(e,n,r=!1){const i=new Ni;i.updateFromServerResponse(n);const s=new In({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await El(s),s}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];G(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?yv(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),l=new Ni;l.updateFromIdToken(r);const u=new In({uid:i.localId,auth:e,stsTokenManager:l,isAnonymous:o}),h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new gh(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(u,h),u}}/**
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
 */const Lm=new Map;function Sn(t){Dn(t instanceof Function,"Expected a class definition");let e=Lm.get(t);return e?(Dn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Lm.set(t,e),e)}/**
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
 */class _v{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}_v.type="NONE";const Mm=_v;/**
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
 */function Fa(t,e,n){return`firebase:${t}:${e}:${n}`}class Di{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Fa(this.userKey,i.apiKey,s),this.fullPersistenceKey=Fa("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?In._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Di(Sn(Mm),e,r);const i=(await Promise.all(n.map(async h=>{if(await h._isAvailable())return h}))).filter(h=>h);let s=i[0]||Sn(Mm);const o=Fa(r,e.config.apiKey,e.name);let l=null;for(const h of n)try{const f=await h._get(o);if(f){const g=In._fromJSON(e,f);h!==s&&(l=g),s=h;break}}catch{}const u=i.filter(h=>h._shouldAllowMigration);return!s._shouldAllowMigration||!u.length?new Di(s,e,r):(s=u[0],l&&await s._set(o,l.toJSON()),await Promise.all(n.map(async h=>{if(h!==s)try{await h._remove(o)}catch{}})),new Di(s,e,r))}}/**
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
 */function bm(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Tv(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(vv(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Sv(e))return"Blackberry";if(Av(e))return"Webos";if(wv(e))return"Safari";if((e.includes("chrome/")||Ev(e))&&!e.includes("edge/"))return"Chrome";if(Iv(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function vv(t=ct()){return/firefox\//i.test(t)}function wv(t=ct()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Ev(t=ct()){return/crios\//i.test(t)}function Tv(t=ct()){return/iemobile/i.test(t)}function Iv(t=ct()){return/android/i.test(t)}function Sv(t=ct()){return/blackberry/i.test(t)}function Av(t=ct()){return/webos/i.test(t)}function Ld(t=ct()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function c1(t=ct()){var e;return Ld(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function h1(){return CI()&&document.documentMode===10}function kv(t=ct()){return Ld(t)||Iv(t)||Av(t)||Sv(t)||/windows phone/i.test(t)||Tv(t)}/**
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
 */function Rv(t,e=[]){let n;switch(t){case"Browser":n=bm(ct());break;case"Worker":n=`${bm(ct())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Zi}/${r}`}/**
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
 */class d1{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,l)=>{try{const u=e(s);o(u)}catch(u){l(u)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function f1(t,e={}){return es(t,"GET","/v2/passwordPolicy",Xl(t,e))}/**
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
 */const p1=6;class m1{constructor(e){var n,r,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:p1,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,s,o,l;const u={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,u),this.validatePasswordCharacterOptions(e,u),u.isValid&&(u.isValid=(n=u.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),u.isValid&&(u.isValid=(r=u.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),u.isValid&&(u.isValid=(i=u.containsLowercaseLetter)!==null&&i!==void 0?i:!0),u.isValid&&(u.isValid=(s=u.containsUppercaseLetter)!==null&&s!==void 0?s:!0),u.isValid&&(u.isValid=(o=u.containsNumericCharacter)!==null&&o!==void 0?o:!0),u.isValid&&(u.isValid=(l=u.containsNonAlphanumericCharacter)!==null&&l!==void 0?l:!0),u}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
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
 */class g1{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Um(this),this.idTokenSubscription=new Um(this),this.beforeStateQueue=new d1(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=cv,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Sn(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await Di.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await gv(this,{idToken:e}),r=await In._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(En(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(l,l))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,l=i==null?void 0:i._redirectEventId,u=await this.tryRedirectSignIn(e);(!o||o===l)&&(u!=null&&u.user)&&(i=u.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return G(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await El(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=JS()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(En(this.app))return Promise.reject(dr(this));const n=e?ht(e):null;return n&&G(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&G(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return En(this.app)?Promise.reject(dr(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return En(this.app)?Promise.reject(dr(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Sn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await f1(this),n=new m1(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new xo("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await u1(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Sn(e)||this._popupRedirectResolver;G(n,this,"argument-error"),this.redirectPersistenceManager=await Di.create(this,[Sn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(G(l,this,"internal-error"),l.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const u=e.addObserver(n,r,i);return()=>{o=!0,u()}}else{const u=e.addObserver(n);return()=>{o=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return G(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Rv(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&QS(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Yl(t){return ht(t)}class Um{constructor(e){this.auth=e,this.observer=null,this.addObserver=MI(n=>this.observer=n)}get next(){return G(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Md={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function y1(t){Md=t}function _1(t){return Md.loadJS(t)}function v1(){return Md.gapiScript}function w1(t){return`__${t}${Math.floor(Math.random()*1e6)}`}/**
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
 */function E1(t,e){const n=xd(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(_l(s,e??{}))return i;Nn(i,"already-initialized")}return n.initialize({options:e})}function T1(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Sn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function I1(t,e,n){const r=Yl(t);G(r._canInitEmulator,r,"emulator-config-failed"),G(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,s=Cv(e),{host:o,port:l}=S1(e),u=l===null?"":`:${l}`;r.config.emulator={url:`${s}//${o}${u}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:l,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),A1()}function Cv(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function S1(t){const e=Cv(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:Fm(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:Fm(o)}}}function Fm(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function A1(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class Pv{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Tn("not implemented")}_getIdTokenResponse(e){return Tn("not implemented")}_linkToIdToken(e,n){return Tn("not implemented")}_getReauthenticationResolver(e){return Tn("not implemented")}}/**
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
 */async function Vi(t,e){return pv(t,"POST","/v1/accounts:signInWithIdp",Xl(t,e))}/**
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
 */const k1="http://localhost";class Kr extends Pv{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Kr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Nn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=Nd(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new Kr(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Vi(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Vi(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Vi(e,n)}buildRequest(){const e={requestUri:k1,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=No(n)}return e}}/**
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
 */class xv{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Vo extends xv{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Kn extends Vo{constructor(){super("facebook.com")}static credential(e){return Kr._fromParams({providerId:Kn.PROVIDER_ID,signInMethod:Kn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Kn.credentialFromTaggedObject(e)}static credentialFromError(e){return Kn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Kn.credential(e.oauthAccessToken)}catch{return null}}}Kn.FACEBOOK_SIGN_IN_METHOD="facebook.com";Kn.PROVIDER_ID="facebook.com";/**
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
 */class Gn extends Vo{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Kr._fromParams({providerId:Gn.PROVIDER_ID,signInMethod:Gn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Gn.credentialFromTaggedObject(e)}static credentialFromError(e){return Gn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Gn.credential(n,r)}catch{return null}}}Gn.GOOGLE_SIGN_IN_METHOD="google.com";Gn.PROVIDER_ID="google.com";/**
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
 */class Qn extends Vo{constructor(){super("github.com")}static credential(e){return Kr._fromParams({providerId:Qn.PROVIDER_ID,signInMethod:Qn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Qn.credentialFromTaggedObject(e)}static credentialFromError(e){return Qn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Qn.credential(e.oauthAccessToken)}catch{return null}}}Qn.GITHUB_SIGN_IN_METHOD="github.com";Qn.PROVIDER_ID="github.com";/**
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
 */class Xn extends Vo{constructor(){super("twitter.com")}static credential(e,n){return Kr._fromParams({providerId:Xn.PROVIDER_ID,signInMethod:Xn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Xn.credentialFromTaggedObject(e)}static credentialFromError(e){return Xn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Xn.credential(n,r)}catch{return null}}}Xn.TWITTER_SIGN_IN_METHOD="twitter.com";Xn.PROVIDER_ID="twitter.com";/**
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
 */async function R1(t,e){return pv(t,"POST","/v1/accounts:signUp",Xl(t,e))}/**
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
 */class gr{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await In._fromIdTokenResponse(e,r,i),o=jm(r);return new gr({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=jm(r);return new gr({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function jm(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */async function C1(t){var e;if(En(t.app))return Promise.reject(dr(t));const n=Yl(t);if(await n._initializationPromise,!((e=n.currentUser)===null||e===void 0)&&e.isAnonymous)return new gr({user:n.currentUser,providerId:null,operationType:"signIn"});const r=await R1(n,{returnSecureToken:!0}),i=await gr._fromIdTokenResponse(n,"signIn",r,!0);return await n._updateCurrentUser(i.user),i}/**
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
 */class Tl extends bn{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Tl.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new Tl(e,n,r,i)}}function Nv(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Tl._fromErrorAndOperation(t,s,e,r):s})}async function P1(t,e,n=!1){const r=await yo(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return gr._forOperation(t,"link",r)}/**
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
 */async function x1(t,e,n=!1){const{auth:r}=t;if(En(r.app))return Promise.reject(dr(r));const i="reauthenticate";try{const s=await yo(t,Nv(r,i,e,t),n);G(s.idToken,r,"internal-error");const o=Od(s.idToken);G(o,r,"internal-error");const{sub:l}=o;return G(t.uid===l,r,"user-mismatch"),gr._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&Nn(r,"user-mismatch"),s}}/**
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
 */async function N1(t,e,n=!1){if(En(t.app))return Promise.reject(dr(t));const r="signIn",i=await Nv(t,r,e),s=await gr._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}function D1(t,e,n,r){return ht(t).onIdTokenChanged(e,n,r)}function V1(t,e,n){return ht(t).beforeAuthStateChanged(e,n)}function O1(t,e,n,r){return ht(t).onAuthStateChanged(e,n,r)}const Il="__sak";/**
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
 */class Dv{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Il,"1"),this.storage.removeItem(Il),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const L1=1e3,M1=10;class Vv extends Dv{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=kv(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,u)=>{this.notifyListeners(o,u)});return}const r=e.key;n?this.detachListener():this.stopPolling();const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);h1()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,M1):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},L1)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Vv.type="LOCAL";const b1=Vv;/**
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
 */class Ov extends Dv{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Ov.type="SESSION";const Lv=Ov;/**
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
 */function U1(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Jl{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new Jl(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const l=Array.from(o).map(async h=>h(n.origin,s)),u=await U1(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:u})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Jl.receivers=[];/**
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
 */function bd(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class F1{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((l,u)=>{const h=bd("",20);i.port1.start();const f=setTimeout(()=>{u(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(g){const y=g;if(y.data.eventId===h)switch(y.data.status){case"ack":clearTimeout(f),s=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),l(y.data.response);break;default:clearTimeout(f),clearTimeout(s),u(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:h,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function sn(){return window}function j1(t){sn().location.href=t}/**
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
 */function Mv(){return typeof sn().WorkerGlobalScope<"u"&&typeof sn().importScripts=="function"}async function z1(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function B1(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function $1(){return Mv()?self:null}/**
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
 */const bv="firebaseLocalStorageDb",H1=1,Sl="firebaseLocalStorage",Uv="fbase_key";class Oo{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Zl(t,e){return t.transaction([Sl],e?"readwrite":"readonly").objectStore(Sl)}function W1(){const t=indexedDB.deleteDatabase(bv);return new Oo(t).toPromise()}function yh(){const t=indexedDB.open(bv,H1);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Sl,{keyPath:Uv})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Sl)?e(r):(r.close(),await W1(),e(await yh()))})})}async function zm(t,e,n){const r=Zl(t,!0).put({[Uv]:e,value:n});return new Oo(r).toPromise()}async function q1(t,e){const n=Zl(t,!1).get(e),r=await new Oo(n).toPromise();return r===void 0?null:r.value}function Bm(t,e){const n=Zl(t,!0).delete(e);return new Oo(n).toPromise()}const K1=800,G1=3;class Fv{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await yh(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>G1)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Mv()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Jl._getInstance($1()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await z1(),!this.activeServiceWorker)return;this.sender=new F1(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||B1()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await yh();return await zm(e,Il,"1"),await Bm(e,Il),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>zm(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>q1(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Bm(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=Zl(i,!1).getAll();return new Oo(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),K1)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Fv.type="LOCAL";const Q1=Fv;new Do(3e4,6e4);/**
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
 */function X1(t,e){return e?Sn(e):(G(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Ud extends Pv{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Vi(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Vi(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Vi(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function Y1(t){return N1(t.auth,new Ud(t),t.bypassAuthState)}function J1(t){const{auth:e,user:n}=t;return G(n,e,"internal-error"),x1(n,new Ud(t),t.bypassAuthState)}async function Z1(t){const{auth:e,user:n}=t;return G(n,e,"internal-error"),P1(n,new Ud(t),t.bypassAuthState)}/**
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
 */class jv{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:l}=e;if(o){this.reject(o);return}const u={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(u))}catch(h){this.reject(h)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Y1;case"linkViaPopup":case"linkViaRedirect":return Z1;case"reauthViaPopup":case"reauthViaRedirect":return J1;default:Nn(this.auth,"internal-error")}}resolve(e){Dn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Dn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const eA=new Do(2e3,1e4);class Si extends jv{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Si.currentPopupAction&&Si.currentPopupAction.cancel(),Si.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return G(e,this.auth,"internal-error"),e}async onExecution(){Dn(this.filter.length===1,"Popup operations only handle one event");const e=bd();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(rn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(rn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Si.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(rn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,eA.get())};e()}}Si.currentPopupAction=null;/**
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
 */const tA="pendingRedirect",ja=new Map;class nA extends jv{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=ja.get(this.auth._key());if(!e){try{const r=await rA(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}ja.set(this.auth._key(),e)}return this.bypassAuthState||ja.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function rA(t,e){const n=oA(e),r=sA(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function iA(t,e){ja.set(t._key(),e)}function sA(t){return Sn(t._redirectPersistence)}function oA(t){return Fa(tA,t.config.apiKey,t.name)}async function aA(t,e,n=!1){if(En(t.app))return Promise.reject(dr(t));const r=Yl(t),i=X1(r,e),o=await new nA(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const lA=10*60*1e3;class uA{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!cA(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!zv(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(rn(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=lA&&this.cachedEventUids.clear(),this.cachedEventUids.has($m(e))}saveEventToCache(e){this.cachedEventUids.add($m(e)),this.lastProcessedEventTime=Date.now()}}function $m(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function zv({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function cA(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return zv(t);default:return!1}}/**
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
 */async function hA(t,e={}){return es(t,"GET","/v1/projects",e)}/**
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
 */const dA=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,fA=/^https?/;async function pA(t){if(t.config.emulator)return;const{authorizedDomains:e}=await hA(t);for(const n of e)try{if(mA(n))return}catch{}Nn(t,"unauthorized-domain")}function mA(t){const e=mh(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!fA.test(n))return!1;if(dA.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const gA=new Do(3e4,6e4);function Hm(){const t=sn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function yA(t){return new Promise((e,n)=>{var r,i,s;function o(){Hm(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Hm(),n(rn(t,"network-request-failed"))},timeout:gA.get()})}if(!((i=(r=sn().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=sn().gapi)===null||s===void 0)&&s.load)o();else{const l=w1("iframefcb");return sn()[l]=()=>{gapi.load?o():n(rn(t,"network-request-failed"))},_1(`${v1()}?onload=${l}`).catch(u=>n(u))}}).catch(e=>{throw za=null,e})}let za=null;function _A(t){return za=za||yA(t),za}/**
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
 */const vA=new Do(5e3,15e3),wA="__/auth/iframe",EA="emulator/auth/iframe",TA={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},IA=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function SA(t){const e=t.config;G(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Vd(e,EA):`https://${t.config.authDomain}/${wA}`,r={apiKey:e.apiKey,appName:t.name,v:Zi},i=IA.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${No(r).slice(1)}`}async function AA(t){const e=await _A(t),n=sn().gapi;return G(n,t,"internal-error"),e.open({where:document.body,url:SA(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:TA,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=rn(t,"network-request-failed"),l=sn().setTimeout(()=>{s(o)},vA.get());function u(){sn().clearTimeout(l),i(r)}r.ping(u).then(u,()=>{s(o)})}))}/**
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
 */const kA={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},RA=500,CA=600,PA="_blank",xA="http://localhost";class Wm{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function NA(t,e,n,r=RA,i=CA){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const u=Object.assign(Object.assign({},kA),{width:r.toString(),height:i.toString(),top:s,left:o}),h=ct().toLowerCase();n&&(l=Ev(h)?PA:n),vv(h)&&(e=e||xA,u.scrollbars="yes");const f=Object.entries(u).reduce((y,[k,P])=>`${y}${k}=${P},`,"");if(c1(h)&&l!=="_self")return DA(e||"",l),new Wm(null);const g=window.open(e||"",l,f);G(g,t,"popup-blocked");try{g.focus()}catch{}return new Wm(g)}function DA(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const VA="__/auth/handler",OA="emulator/auth/handler",LA=encodeURIComponent("fac");async function qm(t,e,n,r,i,s){G(t.config.authDomain,t,"auth-domain-config-required"),G(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Zi,eventId:i};if(e instanceof xv){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",LI(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,g]of Object.entries({}))o[f]=g}if(e instanceof Vo){const f=e.getScopes().filter(g=>g!=="");f.length>0&&(o.scopes=f.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const f of Object.keys(l))l[f]===void 0&&delete l[f];const u=await t._getAppCheckToken(),h=u?`#${LA}=${encodeURIComponent(u)}`:"";return`${MA(t)}?${No(l).slice(1)}${h}`}function MA({config:t}){return t.emulator?Vd(t,OA):`https://${t.authDomain}/${VA}`}/**
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
 */const dc="webStorageSupport";class bA{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Lv,this._completeRedirectFn=aA,this._overrideRedirectResult=iA}async _openPopup(e,n,r,i){var s;Dn((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await qm(e,n,r,mh(),i);return NA(e,o,bd())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await qm(e,n,r,mh(),i);return j1(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(Dn(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await AA(e),r=new uA(e);return n.register("authEvent",i=>(G(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(dc,{type:dc},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[dc];o!==void 0&&n(!!o),Nn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=pA(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return kv()||wv()||Ld()}}const UA=bA;var Km="@firebase/auth",Gm="1.7.9";/**
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
 */class FA{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){G(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function jA(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function zA(t){Bi(new qr("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=r.options;G(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:o,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Rv(t)},h=new g1(r,i,s,u);return T1(h,n),h},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Bi(new qr("auth-internal",e=>{const n=Yl(e.getProvider("auth").getImmediate());return(r=>new FA(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),hr(Km,Gm,jA(t)),hr(Km,Gm,"esm2017")}/**
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
 */const BA=5*60,$A=nv("authIdTokenMaxAge")||BA;let Qm=null;const HA=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>$A)return;const i=n==null?void 0:n.token;Qm!==i&&(Qm=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function WA(t=ov()){const e=xd(t,"auth");if(e.isInitialized())return e.getImmediate();const n=E1(t,{popupRedirectResolver:UA,persistence:[Q1,b1,Lv]}),r=nv("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const o=HA(s.toString());V1(n,o,()=>o(n.currentUser)),D1(n,l=>o(l))}}const i=ev("auth");return i&&I1(n,`http://${i}`),n}function qA(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}y1({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=rn("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",qA().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});zA("Browser");var Xm=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Fr,Bv;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(w,m){function v(){}v.prototype=m.prototype,w.D=m.prototype,w.prototype=new v,w.prototype.constructor=w,w.C=function(T,A,R){for(var _=Array(arguments.length-2),Fe=2;Fe<arguments.length;Fe++)_[Fe-2]=arguments[Fe];return m.prototype[A].apply(T,_)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(w,m,v){v||(v=0);var T=Array(16);if(typeof m=="string")for(var A=0;16>A;++A)T[A]=m.charCodeAt(v++)|m.charCodeAt(v++)<<8|m.charCodeAt(v++)<<16|m.charCodeAt(v++)<<24;else for(A=0;16>A;++A)T[A]=m[v++]|m[v++]<<8|m[v++]<<16|m[v++]<<24;m=w.g[0],v=w.g[1],A=w.g[2];var R=w.g[3],_=m+(R^v&(A^R))+T[0]+3614090360&4294967295;m=v+(_<<7&4294967295|_>>>25),_=R+(A^m&(v^A))+T[1]+3905402710&4294967295,R=m+(_<<12&4294967295|_>>>20),_=A+(v^R&(m^v))+T[2]+606105819&4294967295,A=R+(_<<17&4294967295|_>>>15),_=v+(m^A&(R^m))+T[3]+3250441966&4294967295,v=A+(_<<22&4294967295|_>>>10),_=m+(R^v&(A^R))+T[4]+4118548399&4294967295,m=v+(_<<7&4294967295|_>>>25),_=R+(A^m&(v^A))+T[5]+1200080426&4294967295,R=m+(_<<12&4294967295|_>>>20),_=A+(v^R&(m^v))+T[6]+2821735955&4294967295,A=R+(_<<17&4294967295|_>>>15),_=v+(m^A&(R^m))+T[7]+4249261313&4294967295,v=A+(_<<22&4294967295|_>>>10),_=m+(R^v&(A^R))+T[8]+1770035416&4294967295,m=v+(_<<7&4294967295|_>>>25),_=R+(A^m&(v^A))+T[9]+2336552879&4294967295,R=m+(_<<12&4294967295|_>>>20),_=A+(v^R&(m^v))+T[10]+4294925233&4294967295,A=R+(_<<17&4294967295|_>>>15),_=v+(m^A&(R^m))+T[11]+2304563134&4294967295,v=A+(_<<22&4294967295|_>>>10),_=m+(R^v&(A^R))+T[12]+1804603682&4294967295,m=v+(_<<7&4294967295|_>>>25),_=R+(A^m&(v^A))+T[13]+4254626195&4294967295,R=m+(_<<12&4294967295|_>>>20),_=A+(v^R&(m^v))+T[14]+2792965006&4294967295,A=R+(_<<17&4294967295|_>>>15),_=v+(m^A&(R^m))+T[15]+1236535329&4294967295,v=A+(_<<22&4294967295|_>>>10),_=m+(A^R&(v^A))+T[1]+4129170786&4294967295,m=v+(_<<5&4294967295|_>>>27),_=R+(v^A&(m^v))+T[6]+3225465664&4294967295,R=m+(_<<9&4294967295|_>>>23),_=A+(m^v&(R^m))+T[11]+643717713&4294967295,A=R+(_<<14&4294967295|_>>>18),_=v+(R^m&(A^R))+T[0]+3921069994&4294967295,v=A+(_<<20&4294967295|_>>>12),_=m+(A^R&(v^A))+T[5]+3593408605&4294967295,m=v+(_<<5&4294967295|_>>>27),_=R+(v^A&(m^v))+T[10]+38016083&4294967295,R=m+(_<<9&4294967295|_>>>23),_=A+(m^v&(R^m))+T[15]+3634488961&4294967295,A=R+(_<<14&4294967295|_>>>18),_=v+(R^m&(A^R))+T[4]+3889429448&4294967295,v=A+(_<<20&4294967295|_>>>12),_=m+(A^R&(v^A))+T[9]+568446438&4294967295,m=v+(_<<5&4294967295|_>>>27),_=R+(v^A&(m^v))+T[14]+3275163606&4294967295,R=m+(_<<9&4294967295|_>>>23),_=A+(m^v&(R^m))+T[3]+4107603335&4294967295,A=R+(_<<14&4294967295|_>>>18),_=v+(R^m&(A^R))+T[8]+1163531501&4294967295,v=A+(_<<20&4294967295|_>>>12),_=m+(A^R&(v^A))+T[13]+2850285829&4294967295,m=v+(_<<5&4294967295|_>>>27),_=R+(v^A&(m^v))+T[2]+4243563512&4294967295,R=m+(_<<9&4294967295|_>>>23),_=A+(m^v&(R^m))+T[7]+1735328473&4294967295,A=R+(_<<14&4294967295|_>>>18),_=v+(R^m&(A^R))+T[12]+2368359562&4294967295,v=A+(_<<20&4294967295|_>>>12),_=m+(v^A^R)+T[5]+4294588738&4294967295,m=v+(_<<4&4294967295|_>>>28),_=R+(m^v^A)+T[8]+2272392833&4294967295,R=m+(_<<11&4294967295|_>>>21),_=A+(R^m^v)+T[11]+1839030562&4294967295,A=R+(_<<16&4294967295|_>>>16),_=v+(A^R^m)+T[14]+4259657740&4294967295,v=A+(_<<23&4294967295|_>>>9),_=m+(v^A^R)+T[1]+2763975236&4294967295,m=v+(_<<4&4294967295|_>>>28),_=R+(m^v^A)+T[4]+1272893353&4294967295,R=m+(_<<11&4294967295|_>>>21),_=A+(R^m^v)+T[7]+4139469664&4294967295,A=R+(_<<16&4294967295|_>>>16),_=v+(A^R^m)+T[10]+3200236656&4294967295,v=A+(_<<23&4294967295|_>>>9),_=m+(v^A^R)+T[13]+681279174&4294967295,m=v+(_<<4&4294967295|_>>>28),_=R+(m^v^A)+T[0]+3936430074&4294967295,R=m+(_<<11&4294967295|_>>>21),_=A+(R^m^v)+T[3]+3572445317&4294967295,A=R+(_<<16&4294967295|_>>>16),_=v+(A^R^m)+T[6]+76029189&4294967295,v=A+(_<<23&4294967295|_>>>9),_=m+(v^A^R)+T[9]+3654602809&4294967295,m=v+(_<<4&4294967295|_>>>28),_=R+(m^v^A)+T[12]+3873151461&4294967295,R=m+(_<<11&4294967295|_>>>21),_=A+(R^m^v)+T[15]+530742520&4294967295,A=R+(_<<16&4294967295|_>>>16),_=v+(A^R^m)+T[2]+3299628645&4294967295,v=A+(_<<23&4294967295|_>>>9),_=m+(A^(v|~R))+T[0]+4096336452&4294967295,m=v+(_<<6&4294967295|_>>>26),_=R+(v^(m|~A))+T[7]+1126891415&4294967295,R=m+(_<<10&4294967295|_>>>22),_=A+(m^(R|~v))+T[14]+2878612391&4294967295,A=R+(_<<15&4294967295|_>>>17),_=v+(R^(A|~m))+T[5]+4237533241&4294967295,v=A+(_<<21&4294967295|_>>>11),_=m+(A^(v|~R))+T[12]+1700485571&4294967295,m=v+(_<<6&4294967295|_>>>26),_=R+(v^(m|~A))+T[3]+2399980690&4294967295,R=m+(_<<10&4294967295|_>>>22),_=A+(m^(R|~v))+T[10]+4293915773&4294967295,A=R+(_<<15&4294967295|_>>>17),_=v+(R^(A|~m))+T[1]+2240044497&4294967295,v=A+(_<<21&4294967295|_>>>11),_=m+(A^(v|~R))+T[8]+1873313359&4294967295,m=v+(_<<6&4294967295|_>>>26),_=R+(v^(m|~A))+T[15]+4264355552&4294967295,R=m+(_<<10&4294967295|_>>>22),_=A+(m^(R|~v))+T[6]+2734768916&4294967295,A=R+(_<<15&4294967295|_>>>17),_=v+(R^(A|~m))+T[13]+1309151649&4294967295,v=A+(_<<21&4294967295|_>>>11),_=m+(A^(v|~R))+T[4]+4149444226&4294967295,m=v+(_<<6&4294967295|_>>>26),_=R+(v^(m|~A))+T[11]+3174756917&4294967295,R=m+(_<<10&4294967295|_>>>22),_=A+(m^(R|~v))+T[2]+718787259&4294967295,A=R+(_<<15&4294967295|_>>>17),_=v+(R^(A|~m))+T[9]+3951481745&4294967295,w.g[0]=w.g[0]+m&4294967295,w.g[1]=w.g[1]+(A+(_<<21&4294967295|_>>>11))&4294967295,w.g[2]=w.g[2]+A&4294967295,w.g[3]=w.g[3]+R&4294967295}r.prototype.u=function(w,m){m===void 0&&(m=w.length);for(var v=m-this.blockSize,T=this.B,A=this.h,R=0;R<m;){if(A==0)for(;R<=v;)i(this,w,R),R+=this.blockSize;if(typeof w=="string"){for(;R<m;)if(T[A++]=w.charCodeAt(R++),A==this.blockSize){i(this,T),A=0;break}}else for(;R<m;)if(T[A++]=w[R++],A==this.blockSize){i(this,T),A=0;break}}this.h=A,this.o+=m},r.prototype.v=function(){var w=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);w[0]=128;for(var m=1;m<w.length-8;++m)w[m]=0;var v=8*this.o;for(m=w.length-8;m<w.length;++m)w[m]=v&255,v/=256;for(this.u(w),w=Array(16),m=v=0;4>m;++m)for(var T=0;32>T;T+=8)w[v++]=this.g[m]>>>T&255;return w};function s(w,m){var v=l;return Object.prototype.hasOwnProperty.call(v,w)?v[w]:v[w]=m(w)}function o(w,m){this.h=m;for(var v=[],T=!0,A=w.length-1;0<=A;A--){var R=w[A]|0;T&&R==m||(v[A]=R,T=!1)}this.g=v}var l={};function u(w){return-128<=w&&128>w?s(w,function(m){return new o([m|0],0>m?-1:0)}):new o([w|0],0>w?-1:0)}function h(w){if(isNaN(w)||!isFinite(w))return g;if(0>w)return O(h(-w));for(var m=[],v=1,T=0;w>=v;T++)m[T]=w/v|0,v*=4294967296;return new o(m,0)}function f(w,m){if(w.length==0)throw Error("number format error: empty string");if(m=m||10,2>m||36<m)throw Error("radix out of range: "+m);if(w.charAt(0)=="-")return O(f(w.substring(1),m));if(0<=w.indexOf("-"))throw Error('number format error: interior "-" character');for(var v=h(Math.pow(m,8)),T=g,A=0;A<w.length;A+=8){var R=Math.min(8,w.length-A),_=parseInt(w.substring(A,A+R),m);8>R?(R=h(Math.pow(m,R)),T=T.j(R).add(h(_))):(T=T.j(v),T=T.add(h(_)))}return T}var g=u(0),y=u(1),k=u(16777216);t=o.prototype,t.m=function(){if(D(this))return-O(this).m();for(var w=0,m=1,v=0;v<this.g.length;v++){var T=this.i(v);w+=(0<=T?T:4294967296+T)*m,m*=4294967296}return w},t.toString=function(w){if(w=w||10,2>w||36<w)throw Error("radix out of range: "+w);if(P(this))return"0";if(D(this))return"-"+O(this).toString(w);for(var m=h(Math.pow(w,6)),v=this,T="";;){var A=V(v,m).g;v=I(v,A.j(m));var R=((0<v.g.length?v.g[0]:v.h)>>>0).toString(w);if(v=A,P(v))return R+T;for(;6>R.length;)R="0"+R;T=R+T}},t.i=function(w){return 0>w?0:w<this.g.length?this.g[w]:this.h};function P(w){if(w.h!=0)return!1;for(var m=0;m<w.g.length;m++)if(w.g[m]!=0)return!1;return!0}function D(w){return w.h==-1}t.l=function(w){return w=I(this,w),D(w)?-1:P(w)?0:1};function O(w){for(var m=w.g.length,v=[],T=0;T<m;T++)v[T]=~w.g[T];return new o(v,~w.h).add(y)}t.abs=function(){return D(this)?O(this):this},t.add=function(w){for(var m=Math.max(this.g.length,w.g.length),v=[],T=0,A=0;A<=m;A++){var R=T+(this.i(A)&65535)+(w.i(A)&65535),_=(R>>>16)+(this.i(A)>>>16)+(w.i(A)>>>16);T=_>>>16,R&=65535,_&=65535,v[A]=_<<16|R}return new o(v,v[v.length-1]&-2147483648?-1:0)};function I(w,m){return w.add(O(m))}t.j=function(w){if(P(this)||P(w))return g;if(D(this))return D(w)?O(this).j(O(w)):O(O(this).j(w));if(D(w))return O(this.j(O(w)));if(0>this.l(k)&&0>w.l(k))return h(this.m()*w.m());for(var m=this.g.length+w.g.length,v=[],T=0;T<2*m;T++)v[T]=0;for(T=0;T<this.g.length;T++)for(var A=0;A<w.g.length;A++){var R=this.i(T)>>>16,_=this.i(T)&65535,Fe=w.i(A)>>>16,je=w.i(A)&65535;v[2*T+2*A]+=_*je,E(v,2*T+2*A),v[2*T+2*A+1]+=R*je,E(v,2*T+2*A+1),v[2*T+2*A+1]+=_*Fe,E(v,2*T+2*A+1),v[2*T+2*A+2]+=R*Fe,E(v,2*T+2*A+2)}for(T=0;T<m;T++)v[T]=v[2*T+1]<<16|v[2*T];for(T=m;T<2*m;T++)v[T]=0;return new o(v,0)};function E(w,m){for(;(w[m]&65535)!=w[m];)w[m+1]+=w[m]>>>16,w[m]&=65535,m++}function S(w,m){this.g=w,this.h=m}function V(w,m){if(P(m))throw Error("division by zero");if(P(w))return new S(g,g);if(D(w))return m=V(O(w),m),new S(O(m.g),O(m.h));if(D(m))return m=V(w,O(m)),new S(O(m.g),m.h);if(30<w.g.length){if(D(w)||D(m))throw Error("slowDivide_ only works with positive integers.");for(var v=y,T=m;0>=T.l(w);)v=j(v),T=j(T);var A=F(v,1),R=F(T,1);for(T=F(T,2),v=F(v,2);!P(T);){var _=R.add(T);0>=_.l(w)&&(A=A.add(v),R=_),T=F(T,1),v=F(v,1)}return m=I(w,A.j(m)),new S(A,m)}for(A=g;0<=w.l(m);){for(v=Math.max(1,Math.floor(w.m()/m.m())),T=Math.ceil(Math.log(v)/Math.LN2),T=48>=T?1:Math.pow(2,T-48),R=h(v),_=R.j(m);D(_)||0<_.l(w);)v-=T,R=h(v),_=R.j(m);P(R)&&(R=y),A=A.add(R),w=I(w,_)}return new S(A,w)}t.A=function(w){return V(this,w).h},t.and=function(w){for(var m=Math.max(this.g.length,w.g.length),v=[],T=0;T<m;T++)v[T]=this.i(T)&w.i(T);return new o(v,this.h&w.h)},t.or=function(w){for(var m=Math.max(this.g.length,w.g.length),v=[],T=0;T<m;T++)v[T]=this.i(T)|w.i(T);return new o(v,this.h|w.h)},t.xor=function(w){for(var m=Math.max(this.g.length,w.g.length),v=[],T=0;T<m;T++)v[T]=this.i(T)^w.i(T);return new o(v,this.h^w.h)};function j(w){for(var m=w.g.length+1,v=[],T=0;T<m;T++)v[T]=w.i(T)<<1|w.i(T-1)>>>31;return new o(v,w.h)}function F(w,m){var v=m>>5;m%=32;for(var T=w.g.length-v,A=[],R=0;R<T;R++)A[R]=0<m?w.i(R+v)>>>m|w.i(R+v+1)<<32-m:w.i(R+v);return new o(A,w.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,Bv=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=h,o.fromString=f,Fr=o}).apply(typeof Xm<"u"?Xm:typeof self<"u"?self:typeof window<"u"?window:{});var Ea=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var $v,Os,Hv,Ba,_h,Wv,qv,Kv;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,c,d){return a==Array.prototype||a==Object.prototype||(a[c]=d.value),a};function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof Ea=="object"&&Ea];for(var c=0;c<a.length;++c){var d=a[c];if(d&&d.Math==Math)return d}throw Error("Cannot find global object")}var r=n(this);function i(a,c){if(c)e:{var d=r;a=a.split(".");for(var p=0;p<a.length-1;p++){var C=a[p];if(!(C in d))break e;d=d[C]}a=a[a.length-1],p=d[a],c=c(p),c!=p&&c!=null&&e(d,a,{configurable:!0,writable:!0,value:c})}}function s(a,c){a instanceof String&&(a+="");var d=0,p=!1,C={next:function(){if(!p&&d<a.length){var N=d++;return{value:c(N,a[N]),done:!1}}return p=!0,{done:!0,value:void 0}}};return C[Symbol.iterator]=function(){return C},C}i("Array.prototype.values",function(a){return a||function(){return s(this,function(c,d){return d})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},l=this||self;function u(a){var c=typeof a;return c=c!="object"?c:a?Array.isArray(a)?"array":c:"null",c=="array"||c=="object"&&typeof a.length=="number"}function h(a){var c=typeof a;return c=="object"&&a!=null||c=="function"}function f(a,c,d){return a.call.apply(a.bind,arguments)}function g(a,c,d){if(!a)throw Error();if(2<arguments.length){var p=Array.prototype.slice.call(arguments,2);return function(){var C=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(C,p),a.apply(c,C)}}return function(){return a.apply(c,arguments)}}function y(a,c,d){return y=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?f:g,y.apply(null,arguments)}function k(a,c){var d=Array.prototype.slice.call(arguments,1);return function(){var p=d.slice();return p.push.apply(p,arguments),a.apply(this,p)}}function P(a,c){function d(){}d.prototype=c.prototype,a.aa=c.prototype,a.prototype=new d,a.prototype.constructor=a,a.Qb=function(p,C,N){for(var z=Array(arguments.length-2),me=2;me<arguments.length;me++)z[me-2]=arguments[me];return c.prototype[C].apply(p,z)}}function D(a){const c=a.length;if(0<c){const d=Array(c);for(let p=0;p<c;p++)d[p]=a[p];return d}return[]}function O(a,c){for(let d=1;d<arguments.length;d++){const p=arguments[d];if(u(p)){const C=a.length||0,N=p.length||0;a.length=C+N;for(let z=0;z<N;z++)a[C+z]=p[z]}else a.push(p)}}class I{constructor(c,d){this.i=c,this.j=d,this.h=0,this.g=null}get(){let c;return 0<this.h?(this.h--,c=this.g,this.g=c.next,c.next=null):c=this.i(),c}}function E(a){return/^[\s\xa0]*$/.test(a)}function S(){var a=l.navigator;return a&&(a=a.userAgent)?a:""}function V(a){return V[" "](a),a}V[" "]=function(){};var j=S().indexOf("Gecko")!=-1&&!(S().toLowerCase().indexOf("webkit")!=-1&&S().indexOf("Edge")==-1)&&!(S().indexOf("Trident")!=-1||S().indexOf("MSIE")!=-1)&&S().indexOf("Edge")==-1;function F(a,c,d){for(const p in a)c.call(d,a[p],p,a)}function w(a,c){for(const d in a)c.call(void 0,a[d],d,a)}function m(a){const c={};for(const d in a)c[d]=a[d];return c}const v="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function T(a,c){let d,p;for(let C=1;C<arguments.length;C++){p=arguments[C];for(d in p)a[d]=p[d];for(let N=0;N<v.length;N++)d=v[N],Object.prototype.hasOwnProperty.call(p,d)&&(a[d]=p[d])}}function A(a){var c=1;a=a.split(":");const d=[];for(;0<c&&a.length;)d.push(a.shift()),c--;return a.length&&d.push(a.join(":")),d}function R(a){l.setTimeout(()=>{throw a},0)}function _(){var a=W;let c=null;return a.g&&(c=a.g,a.g=a.g.next,a.g||(a.h=null),c.next=null),c}class Fe{constructor(){this.h=this.g=null}add(c,d){const p=je.get();p.set(c,d),this.h?this.h.next=p:this.g=p,this.h=p}}var je=new I(()=>new Lt,a=>a.reset());class Lt{constructor(){this.next=this.g=this.h=null}set(c,d){this.h=c,this.g=d,this.next=null}reset(){this.next=this.g=this.h=null}}let ge,U=!1,W=new Fe,K=()=>{const a=l.Promise.resolve(void 0);ge=()=>{a.then(ue)}};var ue=()=>{for(var a;a=_();){try{a.h.call(a.g)}catch(d){R(d)}var c=je;c.j(a),100>c.h&&(c.h++,a.next=c.g,c.g=a)}U=!1};function re(){this.s=this.s,this.C=this.C}re.prototype.s=!1,re.prototype.ma=function(){this.s||(this.s=!0,this.N())},re.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function de(a,c){this.type=a,this.g=this.target=c,this.defaultPrevented=!1}de.prototype.h=function(){this.defaultPrevented=!0};var Re=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var a=!1,c=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const d=()=>{};l.addEventListener("test",d,c),l.removeEventListener("test",d,c)}catch{}return a}();function _t(a,c){if(de.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a){var d=this.type=a.type,p=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;if(this.target=a.target||a.srcElement,this.g=c,c=a.relatedTarget){if(j){e:{try{V(c.nodeName);var C=!0;break e}catch{}C=!1}C||(c=null)}}else d=="mouseover"?c=a.fromElement:d=="mouseout"&&(c=a.toElement);this.relatedTarget=c,p?(this.clientX=p.clientX!==void 0?p.clientX:p.pageX,this.clientY=p.clientY!==void 0?p.clientY:p.pageY,this.screenX=p.screenX||0,this.screenY=p.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=typeof a.pointerType=="string"?a.pointerType:kt[a.pointerType]||"",this.state=a.state,this.i=a,a.defaultPrevented&&_t.aa.h.call(this)}}P(_t,de);var kt={2:"touch",3:"pen",4:"mouse"};_t.prototype.h=function(){_t.aa.h.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var dt="closure_listenable_"+(1e6*Math.random()|0),Sr=0;function Ar(a,c,d,p,C){this.listener=a,this.proxy=null,this.src=c,this.type=d,this.capture=!!p,this.ha=C,this.key=++Sr,this.da=this.fa=!1}function hn(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function Mt(a){this.src=a,this.g={},this.h=0}Mt.prototype.add=function(a,c,d,p,C){var N=a.toString();a=this.g[N],a||(a=this.g[N]=[],this.h++);var z=te(a,c,p,C);return-1<z?(c=a[z],d||(c.fa=!1)):(c=new Ar(c,this.src,N,!!p,C),c.fa=d,a.push(c)),c};function J(a,c){var d=c.type;if(d in a.g){var p=a.g[d],C=Array.prototype.indexOf.call(p,c,void 0),N;(N=0<=C)&&Array.prototype.splice.call(p,C,1),N&&(hn(c),a.g[d].length==0&&(delete a.g[d],a.h--))}}function te(a,c,d,p){for(var C=0;C<a.length;++C){var N=a[C];if(!N.da&&N.listener==c&&N.capture==!!d&&N.ha==p)return C}return-1}var fe="closure_lm_"+(1e6*Math.random()|0),pe={};function Oe(a,c,d,p,C){if(Array.isArray(c)){for(var N=0;N<c.length;N++)Oe(a,c[N],d,p,C);return null}return d=os(d),a&&a[dt]?a.K(c,d,h(p)?!!p.capture:!1,C):qe(a,c,d,!1,p,C)}function qe(a,c,d,p,C,N){if(!c)throw Error("Invalid event type");var z=h(C)?!!C.capture:!!C,me=ri(a);if(me||(a[fe]=me=new Mt(a)),d=me.add(c,d,p,z,N),d.proxy)return d;if(p=zo(),d.proxy=p,p.src=a,p.listener=d,a.addEventListener)Re||(C=z),C===void 0&&(C=!1),a.addEventListener(c.toString(),p,C);else if(a.attachEvent)a.attachEvent(dn(c.toString()),p);else if(a.addListener&&a.removeListener)a.addListener(p);else throw Error("addEventListener and attachEvent are unavailable.");return d}function zo(){function a(d){return c.call(a.src,a.listener,d)}const c=ss;return a}function is(a,c,d,p,C){if(Array.isArray(c))for(var N=0;N<c.length;N++)is(a,c[N],d,p,C);else p=h(p)?!!p.capture:!!p,d=os(d),a&&a[dt]?(a=a.i,c=String(c).toString(),c in a.g&&(N=a.g[c],d=te(N,d,p,C),-1<d&&(hn(N[d]),Array.prototype.splice.call(N,d,1),N.length==0&&(delete a.g[c],a.h--)))):a&&(a=ri(a))&&(c=a.g[c.toString()],a=-1,c&&(a=te(c,d,p,C)),(d=-1<a?c[a]:null)&&ni(d))}function ni(a){if(typeof a!="number"&&a&&!a.da){var c=a.src;if(c&&c[dt])J(c.i,a);else{var d=a.type,p=a.proxy;c.removeEventListener?c.removeEventListener(d,p,a.capture):c.detachEvent?c.detachEvent(dn(d),p):c.addListener&&c.removeListener&&c.removeListener(p),(d=ri(c))?(J(d,a),d.h==0&&(d.src=null,c[fe]=null)):hn(a)}}}function dn(a){return a in pe?pe[a]:pe[a]="on"+a}function ss(a,c){if(a.da)a=!0;else{c=new _t(c,this);var d=a.listener,p=a.ha||a.src;a.fa&&ni(a),a=d.call(p,c)}return a}function ri(a){return a=a[fe],a instanceof Mt?a:null}var fn="__closure_events_fn_"+(1e9*Math.random()>>>0);function os(a){return typeof a=="function"?a:(a[fn]||(a[fn]=function(c){return a.handleEvent(c)}),a[fn])}function ze(){re.call(this),this.i=new Mt(this),this.M=this,this.F=null}P(ze,re),ze.prototype[dt]=!0,ze.prototype.removeEventListener=function(a,c,d,p){is(this,a,c,d,p)};function Be(a,c){var d,p=a.F;if(p)for(d=[];p;p=p.F)d.push(p);if(a=a.M,p=c.type||c,typeof c=="string")c=new de(c,a);else if(c instanceof de)c.target=c.target||a;else{var C=c;c=new de(p,a),T(c,C)}if(C=!0,d)for(var N=d.length-1;0<=N;N--){var z=c.g=d[N];C=pn(z,p,!0,c)&&C}if(z=c.g=a,C=pn(z,p,!0,c)&&C,C=pn(z,p,!1,c)&&C,d)for(N=0;N<d.length;N++)z=c.g=d[N],C=pn(z,p,!1,c)&&C}ze.prototype.N=function(){if(ze.aa.N.call(this),this.i){var a=this.i,c;for(c in a.g){for(var d=a.g[c],p=0;p<d.length;p++)hn(d[p]);delete a.g[c],a.h--}}this.F=null},ze.prototype.K=function(a,c,d,p){return this.i.add(String(a),c,!1,d,p)},ze.prototype.L=function(a,c,d,p){return this.i.add(String(a),c,!0,d,p)};function pn(a,c,d,p){if(c=a.i.g[String(c)],!c)return!0;c=c.concat();for(var C=!0,N=0;N<c.length;++N){var z=c[N];if(z&&!z.da&&z.capture==d){var me=z.listener,Ke=z.ha||z.src;z.fa&&J(a.i,z),C=me.call(Ke,p)!==!1&&C}}return C&&!p.defaultPrevented}function _f(a,c,d){if(typeof a=="function")d&&(a=y(a,d));else if(a&&typeof a.handleEvent=="function")a=y(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(c)?-1:l.setTimeout(a,c||0)}function vf(a){a.g=_f(()=>{a.g=null,a.i&&(a.i=!1,vf(a))},a.l);const c=a.h;a.h=null,a.m.apply(null,c)}class ow extends re{constructor(c,d){super(),this.m=c,this.l=d,this.h=null,this.i=!1,this.g=null}j(c){this.h=arguments,this.g?this.i=!0:vf(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function as(a){re.call(this),this.h=a,this.g={}}P(as,re);var wf=[];function Ef(a){F(a.g,function(c,d){this.g.hasOwnProperty(d)&&ni(c)},a),a.g={}}as.prototype.N=function(){as.aa.N.call(this),Ef(this)},as.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var _u=l.JSON.stringify,aw=l.JSON.parse,lw=class{stringify(a){return l.JSON.stringify(a,void 0)}parse(a){return l.JSON.parse(a,void 0)}};function vu(){}vu.prototype.h=null;function Tf(a){return a.h||(a.h=a.i())}function If(){}var ls={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function wu(){de.call(this,"d")}P(wu,de);function Eu(){de.call(this,"c")}P(Eu,de);var kr={},Sf=null;function Bo(){return Sf=Sf||new ze}kr.La="serverreachability";function Af(a){de.call(this,kr.La,a)}P(Af,de);function us(a){const c=Bo();Be(c,new Af(c))}kr.STAT_EVENT="statevent";function kf(a,c){de.call(this,kr.STAT_EVENT,a),this.stat=c}P(kf,de);function ft(a){const c=Bo();Be(c,new kf(c,a))}kr.Ma="timingevent";function Rf(a,c){de.call(this,kr.Ma,a),this.size=c}P(Rf,de);function cs(a,c){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){a()},c)}function hs(){this.g=!0}hs.prototype.xa=function(){this.g=!1};function uw(a,c,d,p,C,N){a.info(function(){if(a.g)if(N)for(var z="",me=N.split("&"),Ke=0;Ke<me.length;Ke++){var ae=me[Ke].split("=");if(1<ae.length){var tt=ae[0];ae=ae[1];var nt=tt.split("_");z=2<=nt.length&&nt[1]=="type"?z+(tt+"="+ae+"&"):z+(tt+"=redacted&")}}else z=null;else z=N;return"XMLHTTP REQ ("+p+") [attempt "+C+"]: "+c+`
`+d+`
`+z})}function cw(a,c,d,p,C,N,z){a.info(function(){return"XMLHTTP RESP ("+p+") [ attempt "+C+"]: "+c+`
`+d+`
`+N+" "+z})}function ii(a,c,d,p){a.info(function(){return"XMLHTTP TEXT ("+c+"): "+dw(a,d)+(p?" "+p:"")})}function hw(a,c){a.info(function(){return"TIMEOUT: "+c})}hs.prototype.info=function(){};function dw(a,c){if(!a.g)return c;if(!c)return null;try{var d=JSON.parse(c);if(d){for(a=0;a<d.length;a++)if(Array.isArray(d[a])){var p=d[a];if(!(2>p.length)){var C=p[1];if(Array.isArray(C)&&!(1>C.length)){var N=C[0];if(N!="noop"&&N!="stop"&&N!="close")for(var z=1;z<C.length;z++)C[z]=""}}}}return _u(d)}catch{return c}}var $o={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Cf={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Tu;function Ho(){}P(Ho,vu),Ho.prototype.g=function(){return new XMLHttpRequest},Ho.prototype.i=function(){return{}},Tu=new Ho;function Un(a,c,d,p){this.j=a,this.i=c,this.l=d,this.R=p||1,this.U=new as(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Pf}function Pf(){this.i=null,this.g="",this.h=!1}var xf={},Iu={};function Su(a,c,d){a.L=1,a.v=Go(mn(c)),a.m=d,a.P=!0,Nf(a,null)}function Nf(a,c){a.F=Date.now(),Wo(a),a.A=mn(a.v);var d=a.A,p=a.R;Array.isArray(p)||(p=[String(p)]),Wf(d.i,"t",p),a.C=0,d=a.j.J,a.h=new Pf,a.g=up(a.j,d?c:null,!a.m),0<a.O&&(a.M=new ow(y(a.Y,a,a.g),a.O)),c=a.U,d=a.g,p=a.ca;var C="readystatechange";Array.isArray(C)||(C&&(wf[0]=C.toString()),C=wf);for(var N=0;N<C.length;N++){var z=Oe(d,C[N],p||c.handleEvent,!1,c.h||c);if(!z)break;c.g[z.key]=z}c=a.H?m(a.H):{},a.m?(a.u||(a.u="POST"),c["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.A,a.u,a.m,c)):(a.u="GET",a.g.ea(a.A,a.u,null,c)),us(),uw(a.i,a.u,a.A,a.l,a.R,a.m)}Un.prototype.ca=function(a){a=a.target;const c=this.M;c&&gn(a)==3?c.j():this.Y(a)},Un.prototype.Y=function(a){try{if(a==this.g)e:{const nt=gn(this.g);var c=this.g.Ba();const ai=this.g.Z();if(!(3>nt)&&(nt!=3||this.g&&(this.h.h||this.g.oa()||Jf(this.g)))){this.J||nt!=4||c==7||(c==8||0>=ai?us(3):us(2)),Au(this);var d=this.g.Z();this.X=d;t:if(Df(this)){var p=Jf(this.g);a="";var C=p.length,N=gn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Rr(this),ds(this);var z="";break t}this.h.i=new l.TextDecoder}for(c=0;c<C;c++)this.h.h=!0,a+=this.h.i.decode(p[c],{stream:!(N&&c==C-1)});p.length=0,this.h.g+=a,this.C=0,z=this.h.g}else z=this.g.oa();if(this.o=d==200,cw(this.i,this.u,this.A,this.l,this.R,nt,d),this.o){if(this.T&&!this.K){t:{if(this.g){var me,Ke=this.g;if((me=Ke.g?Ke.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!E(me)){var ae=me;break t}}ae=null}if(d=ae)ii(this.i,this.l,d,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,ku(this,d);else{this.o=!1,this.s=3,ft(12),Rr(this),ds(this);break e}}if(this.P){d=!0;let Ht;for(;!this.J&&this.C<z.length;)if(Ht=fw(this,z),Ht==Iu){nt==4&&(this.s=4,ft(14),d=!1),ii(this.i,this.l,null,"[Incomplete Response]");break}else if(Ht==xf){this.s=4,ft(15),ii(this.i,this.l,z,"[Invalid Chunk]"),d=!1;break}else ii(this.i,this.l,Ht,null),ku(this,Ht);if(Df(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),nt!=4||z.length!=0||this.h.h||(this.s=1,ft(16),d=!1),this.o=this.o&&d,!d)ii(this.i,this.l,z,"[Invalid Chunked Response]"),Rr(this),ds(this);else if(0<z.length&&!this.W){this.W=!0;var tt=this.j;tt.g==this&&tt.ba&&!tt.M&&(tt.j.info("Great, no buffering proxy detected. Bytes received: "+z.length),Du(tt),tt.M=!0,ft(11))}}else ii(this.i,this.l,z,null),ku(this,z);nt==4&&Rr(this),this.o&&!this.J&&(nt==4?sp(this.j,this):(this.o=!1,Wo(this)))}else xw(this.g),d==400&&0<z.indexOf("Unknown SID")?(this.s=3,ft(12)):(this.s=0,ft(13)),Rr(this),ds(this)}}}catch{}finally{}};function Df(a){return a.g?a.u=="GET"&&a.L!=2&&a.j.Ca:!1}function fw(a,c){var d=a.C,p=c.indexOf(`
`,d);return p==-1?Iu:(d=Number(c.substring(d,p)),isNaN(d)?xf:(p+=1,p+d>c.length?Iu:(c=c.slice(p,p+d),a.C=p+d,c)))}Un.prototype.cancel=function(){this.J=!0,Rr(this)};function Wo(a){a.S=Date.now()+a.I,Vf(a,a.I)}function Vf(a,c){if(a.B!=null)throw Error("WatchDog timer not null");a.B=cs(y(a.ba,a),c)}function Au(a){a.B&&(l.clearTimeout(a.B),a.B=null)}Un.prototype.ba=function(){this.B=null;const a=Date.now();0<=a-this.S?(hw(this.i,this.A),this.L!=2&&(us(),ft(17)),Rr(this),this.s=2,ds(this)):Vf(this,this.S-a)};function ds(a){a.j.G==0||a.J||sp(a.j,a)}function Rr(a){Au(a);var c=a.M;c&&typeof c.ma=="function"&&c.ma(),a.M=null,Ef(a.U),a.g&&(c=a.g,a.g=null,c.abort(),c.ma())}function ku(a,c){try{var d=a.j;if(d.G!=0&&(d.g==a||Ru(d.h,a))){if(!a.K&&Ru(d.h,a)&&d.G==3){try{var p=d.Da.g.parse(c)}catch{p=null}if(Array.isArray(p)&&p.length==3){var C=p;if(C[0]==0){e:if(!d.u){if(d.g)if(d.g.F+3e3<a.F)ea(d),Jo(d);else break e;Nu(d),ft(18)}}else d.za=C[1],0<d.za-d.T&&37500>C[2]&&d.F&&d.v==0&&!d.C&&(d.C=cs(y(d.Za,d),6e3));if(1>=Mf(d.h)&&d.ca){try{d.ca()}catch{}d.ca=void 0}}else Pr(d,11)}else if((a.K||d.g==a)&&ea(d),!E(c))for(C=d.Da.g.parse(c),c=0;c<C.length;c++){let ae=C[c];if(d.T=ae[0],ae=ae[1],d.G==2)if(ae[0]=="c"){d.K=ae[1],d.ia=ae[2];const tt=ae[3];tt!=null&&(d.la=tt,d.j.info("VER="+d.la));const nt=ae[4];nt!=null&&(d.Aa=nt,d.j.info("SVER="+d.Aa));const ai=ae[5];ai!=null&&typeof ai=="number"&&0<ai&&(p=1.5*ai,d.L=p,d.j.info("backChannelRequestTimeoutMs_="+p)),p=d;const Ht=a.g;if(Ht){const na=Ht.g?Ht.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(na){var N=p.h;N.g||na.indexOf("spdy")==-1&&na.indexOf("quic")==-1&&na.indexOf("h2")==-1||(N.j=N.l,N.g=new Set,N.h&&(Cu(N,N.h),N.h=null))}if(p.D){const Vu=Ht.g?Ht.g.getResponseHeader("X-HTTP-Session-Id"):null;Vu&&(p.ya=Vu,_e(p.I,p.D,Vu))}}d.G=3,d.l&&d.l.ua(),d.ba&&(d.R=Date.now()-a.F,d.j.info("Handshake RTT: "+d.R+"ms")),p=d;var z=a;if(p.qa=lp(p,p.J?p.ia:null,p.W),z.K){bf(p.h,z);var me=z,Ke=p.L;Ke&&(me.I=Ke),me.B&&(Au(me),Wo(me)),p.g=z}else rp(p);0<d.i.length&&Zo(d)}else ae[0]!="stop"&&ae[0]!="close"||Pr(d,7);else d.G==3&&(ae[0]=="stop"||ae[0]=="close"?ae[0]=="stop"?Pr(d,7):xu(d):ae[0]!="noop"&&d.l&&d.l.ta(ae),d.v=0)}}us(4)}catch{}}var pw=class{constructor(a,c){this.g=a,this.map=c}};function Of(a){this.l=a||10,l.PerformanceNavigationTiming?(a=l.performance.getEntriesByType("navigation"),a=0<a.length&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Lf(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function Mf(a){return a.h?1:a.g?a.g.size:0}function Ru(a,c){return a.h?a.h==c:a.g?a.g.has(c):!1}function Cu(a,c){a.g?a.g.add(c):a.h=c}function bf(a,c){a.h&&a.h==c?a.h=null:a.g&&a.g.has(c)&&a.g.delete(c)}Of.prototype.cancel=function(){if(this.i=Uf(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function Uf(a){if(a.h!=null)return a.i.concat(a.h.D);if(a.g!=null&&a.g.size!==0){let c=a.i;for(const d of a.g.values())c=c.concat(d.D);return c}return D(a.i)}function mw(a){if(a.V&&typeof a.V=="function")return a.V();if(typeof Map<"u"&&a instanceof Map||typeof Set<"u"&&a instanceof Set)return Array.from(a.values());if(typeof a=="string")return a.split("");if(u(a)){for(var c=[],d=a.length,p=0;p<d;p++)c.push(a[p]);return c}c=[],d=0;for(p in a)c[d++]=a[p];return c}function gw(a){if(a.na&&typeof a.na=="function")return a.na();if(!a.V||typeof a.V!="function"){if(typeof Map<"u"&&a instanceof Map)return Array.from(a.keys());if(!(typeof Set<"u"&&a instanceof Set)){if(u(a)||typeof a=="string"){var c=[];a=a.length;for(var d=0;d<a;d++)c.push(d);return c}c=[],d=0;for(const p in a)c[d++]=p;return c}}}function Ff(a,c){if(a.forEach&&typeof a.forEach=="function")a.forEach(c,void 0);else if(u(a)||typeof a=="string")Array.prototype.forEach.call(a,c,void 0);else for(var d=gw(a),p=mw(a),C=p.length,N=0;N<C;N++)c.call(void 0,p[N],d&&d[N],a)}var jf=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function yw(a,c){if(a){a=a.split("&");for(var d=0;d<a.length;d++){var p=a[d].indexOf("="),C=null;if(0<=p){var N=a[d].substring(0,p);C=a[d].substring(p+1)}else N=a[d];c(N,C?decodeURIComponent(C.replace(/\+/g," ")):"")}}}function Cr(a){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,a instanceof Cr){this.h=a.h,qo(this,a.j),this.o=a.o,this.g=a.g,Ko(this,a.s),this.l=a.l;var c=a.i,d=new ms;d.i=c.i,c.g&&(d.g=new Map(c.g),d.h=c.h),zf(this,d),this.m=a.m}else a&&(c=String(a).match(jf))?(this.h=!1,qo(this,c[1]||"",!0),this.o=fs(c[2]||""),this.g=fs(c[3]||"",!0),Ko(this,c[4]),this.l=fs(c[5]||"",!0),zf(this,c[6]||"",!0),this.m=fs(c[7]||"")):(this.h=!1,this.i=new ms(null,this.h))}Cr.prototype.toString=function(){var a=[],c=this.j;c&&a.push(ps(c,Bf,!0),":");var d=this.g;return(d||c=="file")&&(a.push("//"),(c=this.o)&&a.push(ps(c,Bf,!0),"@"),a.push(encodeURIComponent(String(d)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),d=this.s,d!=null&&a.push(":",String(d))),(d=this.l)&&(this.g&&d.charAt(0)!="/"&&a.push("/"),a.push(ps(d,d.charAt(0)=="/"?ww:vw,!0))),(d=this.i.toString())&&a.push("?",d),(d=this.m)&&a.push("#",ps(d,Tw)),a.join("")};function mn(a){return new Cr(a)}function qo(a,c,d){a.j=d?fs(c,!0):c,a.j&&(a.j=a.j.replace(/:$/,""))}function Ko(a,c){if(c){if(c=Number(c),isNaN(c)||0>c)throw Error("Bad port number "+c);a.s=c}else a.s=null}function zf(a,c,d){c instanceof ms?(a.i=c,Iw(a.i,a.h)):(d||(c=ps(c,Ew)),a.i=new ms(c,a.h))}function _e(a,c,d){a.i.set(c,d)}function Go(a){return _e(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),a}function fs(a,c){return a?c?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function ps(a,c,d){return typeof a=="string"?(a=encodeURI(a).replace(c,_w),d&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function _w(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var Bf=/[#\/\?@]/g,vw=/[#\?:]/g,ww=/[#\?]/g,Ew=/[#\?@]/g,Tw=/#/g;function ms(a,c){this.h=this.g=null,this.i=a||null,this.j=!!c}function Fn(a){a.g||(a.g=new Map,a.h=0,a.i&&yw(a.i,function(c,d){a.add(decodeURIComponent(c.replace(/\+/g," ")),d)}))}t=ms.prototype,t.add=function(a,c){Fn(this),this.i=null,a=si(this,a);var d=this.g.get(a);return d||this.g.set(a,d=[]),d.push(c),this.h+=1,this};function $f(a,c){Fn(a),c=si(a,c),a.g.has(c)&&(a.i=null,a.h-=a.g.get(c).length,a.g.delete(c))}function Hf(a,c){return Fn(a),c=si(a,c),a.g.has(c)}t.forEach=function(a,c){Fn(this),this.g.forEach(function(d,p){d.forEach(function(C){a.call(c,C,p,this)},this)},this)},t.na=function(){Fn(this);const a=Array.from(this.g.values()),c=Array.from(this.g.keys()),d=[];for(let p=0;p<c.length;p++){const C=a[p];for(let N=0;N<C.length;N++)d.push(c[p])}return d},t.V=function(a){Fn(this);let c=[];if(typeof a=="string")Hf(this,a)&&(c=c.concat(this.g.get(si(this,a))));else{a=Array.from(this.g.values());for(let d=0;d<a.length;d++)c=c.concat(a[d])}return c},t.set=function(a,c){return Fn(this),this.i=null,a=si(this,a),Hf(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[c]),this.h+=1,this},t.get=function(a,c){return a?(a=this.V(a),0<a.length?String(a[0]):c):c};function Wf(a,c,d){$f(a,c),0<d.length&&(a.i=null,a.g.set(si(a,c),D(d)),a.h+=d.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],c=Array.from(this.g.keys());for(var d=0;d<c.length;d++){var p=c[d];const N=encodeURIComponent(String(p)),z=this.V(p);for(p=0;p<z.length;p++){var C=N;z[p]!==""&&(C+="="+encodeURIComponent(String(z[p]))),a.push(C)}}return this.i=a.join("&")};function si(a,c){return c=String(c),a.j&&(c=c.toLowerCase()),c}function Iw(a,c){c&&!a.j&&(Fn(a),a.i=null,a.g.forEach(function(d,p){var C=p.toLowerCase();p!=C&&($f(this,p),Wf(this,C,d))},a)),a.j=c}function Sw(a,c){const d=new hs;if(l.Image){const p=new Image;p.onload=k(jn,d,"TestLoadImage: loaded",!0,c,p),p.onerror=k(jn,d,"TestLoadImage: error",!1,c,p),p.onabort=k(jn,d,"TestLoadImage: abort",!1,c,p),p.ontimeout=k(jn,d,"TestLoadImage: timeout",!1,c,p),l.setTimeout(function(){p.ontimeout&&p.ontimeout()},1e4),p.src=a}else c(!1)}function Aw(a,c){const d=new hs,p=new AbortController,C=setTimeout(()=>{p.abort(),jn(d,"TestPingServer: timeout",!1,c)},1e4);fetch(a,{signal:p.signal}).then(N=>{clearTimeout(C),N.ok?jn(d,"TestPingServer: ok",!0,c):jn(d,"TestPingServer: server error",!1,c)}).catch(()=>{clearTimeout(C),jn(d,"TestPingServer: error",!1,c)})}function jn(a,c,d,p,C){try{C&&(C.onload=null,C.onerror=null,C.onabort=null,C.ontimeout=null),p(d)}catch{}}function kw(){this.g=new lw}function Rw(a,c,d){const p=d||"";try{Ff(a,function(C,N){let z=C;h(C)&&(z=_u(C)),c.push(p+N+"="+encodeURIComponent(z))})}catch(C){throw c.push(p+"type="+encodeURIComponent("_badmap")),C}}function Qo(a){this.l=a.Ub||null,this.j=a.eb||!1}P(Qo,vu),Qo.prototype.g=function(){return new Xo(this.l,this.j)},Qo.prototype.i=function(a){return function(){return a}}({});function Xo(a,c){ze.call(this),this.D=a,this.o=c,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}P(Xo,ze),t=Xo.prototype,t.open=function(a,c){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=a,this.A=c,this.readyState=1,ys(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const c={headers:this.u,method:this.B,credentials:this.m,cache:void 0};a&&(c.body=a),(this.D||l).fetch(new Request(this.A,c)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,gs(this)),this.readyState=0},t.Sa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,ys(this)),this.g&&(this.readyState=3,ys(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;qf(this)}else a.text().then(this.Ra.bind(this),this.ga.bind(this))};function qf(a){a.j.read().then(a.Pa.bind(a)).catch(a.ga.bind(a))}t.Pa=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var c=a.value?a.value:new Uint8Array(0);(c=this.v.decode(c,{stream:!a.done}))&&(this.response=this.responseText+=c)}a.done?gs(this):ys(this),this.readyState==3&&qf(this)}},t.Ra=function(a){this.g&&(this.response=this.responseText=a,gs(this))},t.Qa=function(a){this.g&&(this.response=a,gs(this))},t.ga=function(){this.g&&gs(this)};function gs(a){a.readyState=4,a.l=null,a.j=null,a.v=null,ys(a)}t.setRequestHeader=function(a,c){this.u.append(a,c)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],c=this.h.entries();for(var d=c.next();!d.done;)d=d.value,a.push(d[0]+": "+d[1]),d=c.next();return a.join(`\r
`)};function ys(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(Xo.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function Kf(a){let c="";return F(a,function(d,p){c+=p,c+=":",c+=d,c+=`\r
`}),c}function Pu(a,c,d){e:{for(p in d){var p=!1;break e}p=!0}p||(d=Kf(d),typeof a=="string"?d!=null&&encodeURIComponent(String(d)):_e(a,c,d))}function Ce(a){ze.call(this),this.headers=new Map,this.o=a||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}P(Ce,ze);var Cw=/^https?$/i,Pw=["POST","PUT"];t=Ce.prototype,t.Ha=function(a){this.J=a},t.ea=function(a,c,d,p){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);c=c?c.toUpperCase():"GET",this.D=a,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Tu.g(),this.v=this.o?Tf(this.o):Tf(Tu),this.g.onreadystatechange=y(this.Ea,this);try{this.B=!0,this.g.open(c,String(a),!0),this.B=!1}catch(N){Gf(this,N);return}if(a=d||"",d=new Map(this.headers),p)if(Object.getPrototypeOf(p)===Object.prototype)for(var C in p)d.set(C,p[C]);else if(typeof p.keys=="function"&&typeof p.get=="function")for(const N of p.keys())d.set(N,p.get(N));else throw Error("Unknown input type for opt_headers: "+String(p));p=Array.from(d.keys()).find(N=>N.toLowerCase()=="content-type"),C=l.FormData&&a instanceof l.FormData,!(0<=Array.prototype.indexOf.call(Pw,c,void 0))||p||C||d.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[N,z]of d)this.g.setRequestHeader(N,z);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Yf(this),this.u=!0,this.g.send(a),this.u=!1}catch(N){Gf(this,N)}};function Gf(a,c){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=c,a.m=5,Qf(a),Yo(a)}function Qf(a){a.A||(a.A=!0,Be(a,"complete"),Be(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=a||7,Be(this,"complete"),Be(this,"abort"),Yo(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Yo(this,!0)),Ce.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?Xf(this):this.bb())},t.bb=function(){Xf(this)};function Xf(a){if(a.h&&typeof o<"u"&&(!a.v[1]||gn(a)!=4||a.Z()!=2)){if(a.u&&gn(a)==4)_f(a.Ea,0,a);else if(Be(a,"readystatechange"),gn(a)==4){a.h=!1;try{const z=a.Z();e:switch(z){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var c=!0;break e;default:c=!1}var d;if(!(d=c)){var p;if(p=z===0){var C=String(a.D).match(jf)[1]||null;!C&&l.self&&l.self.location&&(C=l.self.location.protocol.slice(0,-1)),p=!Cw.test(C?C.toLowerCase():"")}d=p}if(d)Be(a,"complete"),Be(a,"success");else{a.m=6;try{var N=2<gn(a)?a.g.statusText:""}catch{N=""}a.l=N+" ["+a.Z()+"]",Qf(a)}}finally{Yo(a)}}}}function Yo(a,c){if(a.g){Yf(a);const d=a.g,p=a.v[0]?()=>{}:null;a.g=null,a.v=null,c||Be(a,"ready");try{d.onreadystatechange=p}catch{}}}function Yf(a){a.I&&(l.clearTimeout(a.I),a.I=null)}t.isActive=function(){return!!this.g};function gn(a){return a.g?a.g.readyState:0}t.Z=function(){try{return 2<gn(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(a){if(this.g){var c=this.g.responseText;return a&&c.indexOf(a)==0&&(c=c.substring(a.length)),aw(c)}};function Jf(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.H){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function xw(a){const c={};a=(a.g&&2<=gn(a)&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let p=0;p<a.length;p++){if(E(a[p]))continue;var d=A(a[p]);const C=d[0];if(d=d[1],typeof d!="string")continue;d=d.trim();const N=c[C]||[];c[C]=N,N.push(d)}w(c,function(p){return p.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function _s(a,c,d){return d&&d.internalChannelParams&&d.internalChannelParams[a]||c}function Zf(a){this.Aa=0,this.i=[],this.j=new hs,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=_s("failFast",!1,a),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=_s("baseRetryDelayMs",5e3,a),this.cb=_s("retryDelaySeedMs",1e4,a),this.Wa=_s("forwardChannelMaxRetries",2,a),this.wa=_s("forwardChannelRequestTimeoutMs",2e4,a),this.pa=a&&a.xmlHttpFactory||void 0,this.Xa=a&&a.Tb||void 0,this.Ca=a&&a.useFetchStreams||!1,this.L=void 0,this.J=a&&a.supportsCrossDomainXhr||!1,this.K="",this.h=new Of(a&&a.concurrentRequestLimit),this.Da=new kw,this.P=a&&a.fastHandshake||!1,this.O=a&&a.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=a&&a.Rb||!1,a&&a.xa&&this.j.xa(),a&&a.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&a&&a.detectBufferingProxy||!1,this.ja=void 0,a&&a.longPollingTimeout&&0<a.longPollingTimeout&&(this.ja=a.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=Zf.prototype,t.la=8,t.G=1,t.connect=function(a,c,d,p){ft(0),this.W=a,this.H=c||{},d&&p!==void 0&&(this.H.OSID=d,this.H.OAID=p),this.F=this.X,this.I=lp(this,null,this.W),Zo(this)};function xu(a){if(ep(a),a.G==3){var c=a.U++,d=mn(a.I);if(_e(d,"SID",a.K),_e(d,"RID",c),_e(d,"TYPE","terminate"),vs(a,d),c=new Un(a,a.j,c),c.L=2,c.v=Go(mn(d)),d=!1,l.navigator&&l.navigator.sendBeacon)try{d=l.navigator.sendBeacon(c.v.toString(),"")}catch{}!d&&l.Image&&(new Image().src=c.v,d=!0),d||(c.g=up(c.j,null),c.g.ea(c.v)),c.F=Date.now(),Wo(c)}ap(a)}function Jo(a){a.g&&(Du(a),a.g.cancel(),a.g=null)}function ep(a){Jo(a),a.u&&(l.clearTimeout(a.u),a.u=null),ea(a),a.h.cancel(),a.s&&(typeof a.s=="number"&&l.clearTimeout(a.s),a.s=null)}function Zo(a){if(!Lf(a.h)&&!a.s){a.s=!0;var c=a.Ga;ge||K(),U||(ge(),U=!0),W.add(c,a),a.B=0}}function Nw(a,c){return Mf(a.h)>=a.h.j-(a.s?1:0)?!1:a.s?(a.i=c.D.concat(a.i),!0):a.G==1||a.G==2||a.B>=(a.Va?0:a.Wa)?!1:(a.s=cs(y(a.Ga,a,c),op(a,a.B)),a.B++,!0)}t.Ga=function(a){if(this.s)if(this.s=null,this.G==1){if(!a){this.U=Math.floor(1e5*Math.random()),a=this.U++;const C=new Un(this,this.j,a);let N=this.o;if(this.S&&(N?(N=m(N),T(N,this.S)):N=this.S),this.m!==null||this.O||(C.H=N,N=null),this.P)e:{for(var c=0,d=0;d<this.i.length;d++){t:{var p=this.i[d];if("__data__"in p.map&&(p=p.map.__data__,typeof p=="string")){p=p.length;break t}p=void 0}if(p===void 0)break;if(c+=p,4096<c){c=d;break e}if(c===4096||d===this.i.length-1){c=d+1;break e}}c=1e3}else c=1e3;c=np(this,C,c),d=mn(this.I),_e(d,"RID",a),_e(d,"CVER",22),this.D&&_e(d,"X-HTTP-Session-Id",this.D),vs(this,d),N&&(this.O?c="headers="+encodeURIComponent(String(Kf(N)))+"&"+c:this.m&&Pu(d,this.m,N)),Cu(this.h,C),this.Ua&&_e(d,"TYPE","init"),this.P?(_e(d,"$req",c),_e(d,"SID","null"),C.T=!0,Su(C,d,null)):Su(C,d,c),this.G=2}}else this.G==3&&(a?tp(this,a):this.i.length==0||Lf(this.h)||tp(this))};function tp(a,c){var d;c?d=c.l:d=a.U++;const p=mn(a.I);_e(p,"SID",a.K),_e(p,"RID",d),_e(p,"AID",a.T),vs(a,p),a.m&&a.o&&Pu(p,a.m,a.o),d=new Un(a,a.j,d,a.B+1),a.m===null&&(d.H=a.o),c&&(a.i=c.D.concat(a.i)),c=np(a,d,1e3),d.I=Math.round(.5*a.wa)+Math.round(.5*a.wa*Math.random()),Cu(a.h,d),Su(d,p,c)}function vs(a,c){a.H&&F(a.H,function(d,p){_e(c,p,d)}),a.l&&Ff({},function(d,p){_e(c,p,d)})}function np(a,c,d){d=Math.min(a.i.length,d);var p=a.l?y(a.l.Na,a.l,a):null;e:{var C=a.i;let N=-1;for(;;){const z=["count="+d];N==-1?0<d?(N=C[0].g,z.push("ofs="+N)):N=0:z.push("ofs="+N);let me=!0;for(let Ke=0;Ke<d;Ke++){let ae=C[Ke].g;const tt=C[Ke].map;if(ae-=N,0>ae)N=Math.max(0,C[Ke].g-100),me=!1;else try{Rw(tt,z,"req"+ae+"_")}catch{p&&p(tt)}}if(me){p=z.join("&");break e}}}return a=a.i.splice(0,d),c.D=a,p}function rp(a){if(!a.g&&!a.u){a.Y=1;var c=a.Fa;ge||K(),U||(ge(),U=!0),W.add(c,a),a.v=0}}function Nu(a){return a.g||a.u||3<=a.v?!1:(a.Y++,a.u=cs(y(a.Fa,a),op(a,a.v)),a.v++,!0)}t.Fa=function(){if(this.u=null,ip(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var a=2*this.R;this.j.info("BP detection timer enabled: "+a),this.A=cs(y(this.ab,this),a)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,ft(10),Jo(this),ip(this))};function Du(a){a.A!=null&&(l.clearTimeout(a.A),a.A=null)}function ip(a){a.g=new Un(a,a.j,"rpc",a.Y),a.m===null&&(a.g.H=a.o),a.g.O=0;var c=mn(a.qa);_e(c,"RID","rpc"),_e(c,"SID",a.K),_e(c,"AID",a.T),_e(c,"CI",a.F?"0":"1"),!a.F&&a.ja&&_e(c,"TO",a.ja),_e(c,"TYPE","xmlhttp"),vs(a,c),a.m&&a.o&&Pu(c,a.m,a.o),a.L&&(a.g.I=a.L);var d=a.g;a=a.ia,d.L=1,d.v=Go(mn(c)),d.m=null,d.P=!0,Nf(d,a)}t.Za=function(){this.C!=null&&(this.C=null,Jo(this),Nu(this),ft(19))};function ea(a){a.C!=null&&(l.clearTimeout(a.C),a.C=null)}function sp(a,c){var d=null;if(a.g==c){ea(a),Du(a),a.g=null;var p=2}else if(Ru(a.h,c))d=c.D,bf(a.h,c),p=1;else return;if(a.G!=0){if(c.o)if(p==1){d=c.m?c.m.length:0,c=Date.now()-c.F;var C=a.B;p=Bo(),Be(p,new Rf(p,d)),Zo(a)}else rp(a);else if(C=c.s,C==3||C==0&&0<c.X||!(p==1&&Nw(a,c)||p==2&&Nu(a)))switch(d&&0<d.length&&(c=a.h,c.i=c.i.concat(d)),C){case 1:Pr(a,5);break;case 4:Pr(a,10);break;case 3:Pr(a,6);break;default:Pr(a,2)}}}function op(a,c){let d=a.Ta+Math.floor(Math.random()*a.cb);return a.isActive()||(d*=2),d*c}function Pr(a,c){if(a.j.info("Error code "+c),c==2){var d=y(a.fb,a),p=a.Xa;const C=!p;p=new Cr(p||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||qo(p,"https"),Go(p),C?Sw(p.toString(),d):Aw(p.toString(),d)}else ft(2);a.G=0,a.l&&a.l.sa(c),ap(a),ep(a)}t.fb=function(a){a?(this.j.info("Successfully pinged google.com"),ft(2)):(this.j.info("Failed to ping google.com"),ft(1))};function ap(a){if(a.G=0,a.ka=[],a.l){const c=Uf(a.h);(c.length!=0||a.i.length!=0)&&(O(a.ka,c),O(a.ka,a.i),a.h.i.length=0,D(a.i),a.i.length=0),a.l.ra()}}function lp(a,c,d){var p=d instanceof Cr?mn(d):new Cr(d);if(p.g!="")c&&(p.g=c+"."+p.g),Ko(p,p.s);else{var C=l.location;p=C.protocol,c=c?c+"."+C.hostname:C.hostname,C=+C.port;var N=new Cr(null);p&&qo(N,p),c&&(N.g=c),C&&Ko(N,C),d&&(N.l=d),p=N}return d=a.D,c=a.ya,d&&c&&_e(p,d,c),_e(p,"VER",a.la),vs(a,p),p}function up(a,c,d){if(c&&!a.J)throw Error("Can't create secondary domain capable XhrIo object.");return c=a.Ca&&!a.pa?new Ce(new Qo({eb:d})):new Ce(a.pa),c.Ha(a.J),c}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function cp(){}t=cp.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function ta(){}ta.prototype.g=function(a,c){return new Rt(a,c)};function Rt(a,c){ze.call(this),this.g=new Zf(c),this.l=a,this.h=c&&c.messageUrlParams||null,a=c&&c.messageHeaders||null,c&&c.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=c&&c.initMessageHeaders||null,c&&c.messageContentType&&(a?a["X-WebChannel-Content-Type"]=c.messageContentType:a={"X-WebChannel-Content-Type":c.messageContentType}),c&&c.va&&(a?a["X-WebChannel-Client-Profile"]=c.va:a={"X-WebChannel-Client-Profile":c.va}),this.g.S=a,(a=c&&c.Sb)&&!E(a)&&(this.g.m=a),this.v=c&&c.supportsCrossDomainXhr||!1,this.u=c&&c.sendRawJson||!1,(c=c&&c.httpSessionIdParam)&&!E(c)&&(this.g.D=c,a=this.h,a!==null&&c in a&&(a=this.h,c in a&&delete a[c])),this.j=new oi(this)}P(Rt,ze),Rt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Rt.prototype.close=function(){xu(this.g)},Rt.prototype.o=function(a){var c=this.g;if(typeof a=="string"){var d={};d.__data__=a,a=d}else this.u&&(d={},d.__data__=_u(a),a=d);c.i.push(new pw(c.Ya++,a)),c.G==3&&Zo(c)},Rt.prototype.N=function(){this.g.l=null,delete this.j,xu(this.g),delete this.g,Rt.aa.N.call(this)};function hp(a){wu.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var c=a.__sm__;if(c){e:{for(const d in c){a=d;break e}a=void 0}(this.i=a)&&(a=this.i,c=c!==null&&a in c?c[a]:void 0),this.data=c}else this.data=a}P(hp,wu);function dp(){Eu.call(this),this.status=1}P(dp,Eu);function oi(a){this.g=a}P(oi,cp),oi.prototype.ua=function(){Be(this.g,"a")},oi.prototype.ta=function(a){Be(this.g,new hp(a))},oi.prototype.sa=function(a){Be(this.g,new dp)},oi.prototype.ra=function(){Be(this.g,"b")},ta.prototype.createWebChannel=ta.prototype.g,Rt.prototype.send=Rt.prototype.o,Rt.prototype.open=Rt.prototype.m,Rt.prototype.close=Rt.prototype.close,Kv=function(){return new ta},qv=function(){return Bo()},Wv=kr,_h={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},$o.NO_ERROR=0,$o.TIMEOUT=8,$o.HTTP_ERROR=6,Ba=$o,Cf.COMPLETE="complete",Hv=Cf,If.EventType=ls,ls.OPEN="a",ls.CLOSE="b",ls.ERROR="c",ls.MESSAGE="d",ze.prototype.listen=ze.prototype.K,Os=If,Ce.prototype.listenOnce=Ce.prototype.L,Ce.prototype.getLastError=Ce.prototype.Ka,Ce.prototype.getLastErrorCode=Ce.prototype.Ba,Ce.prototype.getStatus=Ce.prototype.Z,Ce.prototype.getResponseJson=Ce.prototype.Oa,Ce.prototype.getResponseText=Ce.prototype.oa,Ce.prototype.send=Ce.prototype.ea,Ce.prototype.setWithCredentials=Ce.prototype.Ha,$v=Ce}).apply(typeof Ea<"u"?Ea:typeof self<"u"?self:typeof window<"u"?window:{});const Ym="@firebase/firestore";/**
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
 */class ot{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}ot.UNAUTHENTICATED=new ot(null),ot.GOOGLE_CREDENTIALS=new ot("google-credentials-uid"),ot.FIRST_PARTY=new ot("first-party-uid"),ot.MOCK_USER=new ot("mock-user");/**
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
 */let ts="10.14.0";/**
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
 */const Gr=new Cd("@firebase/firestore");function Cs(){return Gr.logLevel}function $(t,...e){if(Gr.logLevel<=ie.DEBUG){const n=e.map(Fd);Gr.debug(`Firestore (${ts}): ${t}`,...n)}}function Vn(t,...e){if(Gr.logLevel<=ie.ERROR){const n=e.map(Fd);Gr.error(`Firestore (${ts}): ${t}`,...n)}}function $i(t,...e){if(Gr.logLevel<=ie.WARN){const n=e.map(Fd);Gr.warn(`Firestore (${ts}): ${t}`,...n)}}function Fd(t){if(typeof t=="string")return t;try{/**
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
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
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
 */function Q(t="Unexpected state"){const e=`FIRESTORE (${ts}) INTERNAL ASSERTION FAILED: `+t;throw Vn(e),new Error(e)}function he(t,e){t||Q()}function Y(t,e){return t}/**
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
 */const M={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class H extends bn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class jr{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class Gv{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class KA{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(ot.UNAUTHENTICATED))}shutdown(){}}class GA{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class QA{constructor(e){this.t=e,this.currentUser=ot.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){he(this.o===void 0);let r=this.i;const i=u=>this.i!==r?(r=this.i,n(u)):Promise.resolve();let s=new jr;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new jr,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const u=s;e.enqueueRetryable(async()=>{await u.promise,await i(this.currentUser)})},l=u=>{$("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(u=>l(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?l(u):($("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new jr)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?($("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(he(typeof r.accessToken=="string"),new Gv(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return he(e===null||typeof e=="string"),new ot(e)}}class XA{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=ot.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class YA{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new XA(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(ot.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class JA{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class ZA{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){he(this.o===void 0);const r=s=>{s.error!=null&&$("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.R;return this.R=s.token,$("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{$("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):$("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(he(typeof n.token=="string"),this.R=n.token,new JA(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function ek(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */class Qv{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=ek(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function le(t,e){return t<e?-1:t>e?1:0}function Hi(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
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
 */class Ue{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new H(M.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new H(M.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new H(M.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new H(M.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Ue.fromMillis(Date.now())}static fromDate(e){return Ue.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new Ue(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?le(this.nanoseconds,e.nanoseconds):le(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class X{constructor(e){this.timestamp=e}static fromTimestamp(e){return new X(e)}static min(){return new X(new Ue(0,0))}static max(){return new X(new Ue(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class _o{constructor(e,n,r){n===void 0?n=0:n>e.length&&Q(),r===void 0?r=e.length-n:r>e.length-n&&Q(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return _o.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof _o?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class Te extends _o{construct(e,n,r){return new Te(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new H(M.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new Te(n)}static emptyPath(){return new Te([])}}const tk=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Xe extends _o{construct(e,n,r){return new Xe(e,n,r)}static isValidIdentifier(e){return tk.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Xe.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Xe(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new H(M.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const l=e[i];if(l==="\\"){if(i+1===e.length)throw new H(M.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[i+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new H(M.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,i+=2}else l==="`"?(o=!o,i++):l!=="."||o?(r+=l,i++):(s(),i++)}if(s(),o)throw new H(M.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Xe(n)}static emptyPath(){return new Xe([])}}/**
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
 */class q{constructor(e){this.path=e}static fromPath(e){return new q(Te.fromString(e))}static fromName(e){return new q(Te.fromString(e).popFirst(5))}static empty(){return new q(Te.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Te.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Te.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new q(new Te(e.slice()))}}function nk(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=X.fromTimestamp(r===1e9?new Ue(n+1,0):new Ue(n,r));return new yr(i,q.empty(),e)}function rk(t){return new yr(t.readTime,t.key,-1)}class yr{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new yr(X.min(),q.empty(),-1)}static max(){return new yr(X.max(),q.empty(),-1)}}function ik(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=q.comparator(t.documentKey,e.documentKey),n!==0?n:le(t.largestBatchId,e.largestBatchId))}/**
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
 */const sk="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class ok{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function Lo(t){if(t.code!==M.FAILED_PRECONDITION||t.message!==sk)throw t;$("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class L{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&Q(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new L((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof L?n:L.resolve(n)}catch(n){return L.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):L.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):L.reject(n)}static resolve(e){return new L((n,r)=>{n(e)})}static reject(e){return new L((n,r)=>{r(e)})}static waitFor(e){return new L((n,r)=>{let i=0,s=0,o=!1;e.forEach(l=>{++i,l.next(()=>{++s,o&&s===i&&n()},u=>r(u))}),o=!0,s===i&&n()})}static or(e){let n=L.resolve(!1);for(const r of e)n=n.next(i=>i?L.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new L((r,i)=>{const s=e.length,o=new Array(s);let l=0;for(let u=0;u<s;u++){const h=u;n(e[h]).next(f=>{o[h]=f,++l,l===s&&r(o)},f=>i(f))}})}static doWhile(e,n){return new L((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}function ak(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function Mo(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
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
 */class jd{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ie(r),this.se=r=>n.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}jd.oe=-1;function eu(t){return t==null}function Al(t){return t===0&&1/t==-1/0}function lk(t){return typeof t=="number"&&Number.isInteger(t)&&!Al(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */function Jm(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function ei(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function Xv(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class ke{constructor(e,n){this.comparator=e,this.root=n||Qe.EMPTY}insert(e,n){return new ke(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Qe.BLACK,null,null))}remove(e){return new ke(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Qe.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Ta(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Ta(this.root,e,this.comparator,!1)}getReverseIterator(){return new Ta(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Ta(this.root,e,this.comparator,!0)}}class Ta{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Qe{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??Qe.RED,this.left=i??Qe.EMPTY,this.right=s??Qe.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new Qe(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return Qe.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return Qe.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Qe.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Qe.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw Q();const e=this.left.check();if(e!==this.right.check())throw Q();return e+(this.isRed()?0:1)}}Qe.EMPTY=null,Qe.RED=!0,Qe.BLACK=!1;Qe.EMPTY=new class{constructor(){this.size=0}get key(){throw Q()}get value(){throw Q()}get color(){throw Q()}get left(){throw Q()}get right(){throw Q()}copy(e,n,r,i,s){return this}insert(e,n,r){return new Qe(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class Je{constructor(e){this.comparator=e,this.data=new ke(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Zm(this.data.getIterator())}getIteratorFrom(e){return new Zm(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof Je)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Je(this.comparator);return n.data=e,n}}class Zm{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class xt{constructor(e){this.fields=e,e.sort(Xe.comparator)}static empty(){return new xt([])}unionWith(e){let n=new Je(Xe.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new xt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Hi(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class Yv extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class et{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new Yv("Invalid base64 string: "+s):s}}(e);return new et(n)}static fromUint8Array(e){const n=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new et(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return le(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}et.EMPTY_BYTE_STRING=new et("");const uk=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function _r(t){if(he(!!t),typeof t=="string"){let e=0;const n=uk.exec(t);if(he(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:xe(t.seconds),nanos:xe(t.nanos)}}function xe(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Qr(t){return typeof t=="string"?et.fromBase64String(t):et.fromUint8Array(t)}/**
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
 */function zd(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Bd(t){const e=t.mapValue.fields.__previous_value__;return zd(e)?Bd(e):e}function vo(t){const e=_r(t.mapValue.fields.__local_write_time__.timestampValue);return new Ue(e.seconds,e.nanos)}/**
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
 */class ck{constructor(e,n,r,i,s,o,l,u,h){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=l,this.longPollingOptions=u,this.useFetchStreams=h}}class wo{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new wo("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof wo&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const Ia={mapValue:{}};function Xr(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?zd(t)?4:dk(t)?9007199254740991:hk(t)?10:11:Q()}function un(t,e){if(t===e)return!0;const n=Xr(t);if(n!==Xr(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return vo(t).isEqual(vo(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=_r(i.timestampValue),l=_r(s.timestampValue);return o.seconds===l.seconds&&o.nanos===l.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,s){return Qr(i.bytesValue).isEqual(Qr(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,s){return xe(i.geoPointValue.latitude)===xe(s.geoPointValue.latitude)&&xe(i.geoPointValue.longitude)===xe(s.geoPointValue.longitude)}(t,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return xe(i.integerValue)===xe(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=xe(i.doubleValue),l=xe(s.doubleValue);return o===l?Al(o)===Al(l):isNaN(o)&&isNaN(l)}return!1}(t,e);case 9:return Hi(t.arrayValue.values||[],e.arrayValue.values||[],un);case 10:case 11:return function(i,s){const o=i.mapValue.fields||{},l=s.mapValue.fields||{};if(Jm(o)!==Jm(l))return!1;for(const u in o)if(o.hasOwnProperty(u)&&(l[u]===void 0||!un(o[u],l[u])))return!1;return!0}(t,e);default:return Q()}}function Eo(t,e){return(t.values||[]).find(n=>un(n,e))!==void 0}function Wi(t,e){if(t===e)return 0;const n=Xr(t),r=Xr(e);if(n!==r)return le(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return le(t.booleanValue,e.booleanValue);case 2:return function(s,o){const l=xe(s.integerValue||s.doubleValue),u=xe(o.integerValue||o.doubleValue);return l<u?-1:l>u?1:l===u?0:isNaN(l)?isNaN(u)?0:-1:1}(t,e);case 3:return eg(t.timestampValue,e.timestampValue);case 4:return eg(vo(t),vo(e));case 5:return le(t.stringValue,e.stringValue);case 6:return function(s,o){const l=Qr(s),u=Qr(o);return l.compareTo(u)}(t.bytesValue,e.bytesValue);case 7:return function(s,o){const l=s.split("/"),u=o.split("/");for(let h=0;h<l.length&&h<u.length;h++){const f=le(l[h],u[h]);if(f!==0)return f}return le(l.length,u.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,o){const l=le(xe(s.latitude),xe(o.latitude));return l!==0?l:le(xe(s.longitude),xe(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return tg(t.arrayValue,e.arrayValue);case 10:return function(s,o){var l,u,h,f;const g=s.fields||{},y=o.fields||{},k=(l=g.value)===null||l===void 0?void 0:l.arrayValue,P=(u=y.value)===null||u===void 0?void 0:u.arrayValue,D=le(((h=k==null?void 0:k.values)===null||h===void 0?void 0:h.length)||0,((f=P==null?void 0:P.values)===null||f===void 0?void 0:f.length)||0);return D!==0?D:tg(k,P)}(t.mapValue,e.mapValue);case 11:return function(s,o){if(s===Ia.mapValue&&o===Ia.mapValue)return 0;if(s===Ia.mapValue)return 1;if(o===Ia.mapValue)return-1;const l=s.fields||{},u=Object.keys(l),h=o.fields||{},f=Object.keys(h);u.sort(),f.sort();for(let g=0;g<u.length&&g<f.length;++g){const y=le(u[g],f[g]);if(y!==0)return y;const k=Wi(l[u[g]],h[f[g]]);if(k!==0)return k}return le(u.length,f.length)}(t.mapValue,e.mapValue);default:throw Q()}}function eg(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return le(t,e);const n=_r(t),r=_r(e),i=le(n.seconds,r.seconds);return i!==0?i:le(n.nanos,r.nanos)}function tg(t,e){const n=t.values||[],r=e.values||[];for(let i=0;i<n.length&&i<r.length;++i){const s=Wi(n[i],r[i]);if(s)return s}return le(n.length,r.length)}function qi(t){return vh(t)}function vh(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=_r(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return Qr(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return q.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",i=!0;for(const s of n.values||[])i?i=!1:r+=",",r+=vh(s);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${vh(n.fields[o])}`;return i+"}"}(t.mapValue):Q()}function wh(t){return!!t&&"integerValue"in t}function $d(t){return!!t&&"arrayValue"in t}function ng(t){return!!t&&"nullValue"in t}function rg(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function $a(t){return!!t&&"mapValue"in t}function hk(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="__vector__"}function Gs(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return ei(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Gs(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Gs(t.arrayValue.values[n]);return e}return Object.assign({},t)}function dk(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class wt{constructor(e){this.value=e}static empty(){return new wt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!$a(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Gs(n)}setAll(e){let n=Xe.emptyPath(),r={},i=[];e.forEach((o,l)=>{if(!n.isImmediateParentOf(l)){const u=this.getFieldsMap(n);this.applyChanges(u,r,i),r={},i=[],n=l.popLast()}o?r[l.lastSegment()]=Gs(o):i.push(l.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());$a(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return un(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];$a(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){ei(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new wt(Gs(this.value))}}function Jv(t){const e=[];return ei(t.fields,(n,r)=>{const i=new Xe([n]);if($a(r)){const s=Jv(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new xt(e)}/**
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
 */class lt{constructor(e,n,r,i,s,o,l){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=l}static newInvalidDocument(e){return new lt(e,0,X.min(),X.min(),X.min(),wt.empty(),0)}static newFoundDocument(e,n,r,i){return new lt(e,1,n,X.min(),r,i,0)}static newNoDocument(e,n){return new lt(e,2,n,X.min(),X.min(),wt.empty(),0)}static newUnknownDocument(e,n){return new lt(e,3,n,X.min(),X.min(),wt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(X.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=wt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=wt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=X.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof lt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new lt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class kl{constructor(e,n){this.position=e,this.inclusive=n}}function ig(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=q.comparator(q.fromName(o.referenceValue),n.key):r=Wi(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function sg(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!un(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class Rl{constructor(e,n="asc"){this.field=e,this.dir=n}}function fk(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class Zv{}class Me extends Zv{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new mk(e,n,r):n==="array-contains"?new _k(e,r):n==="in"?new vk(e,r):n==="not-in"?new wk(e,r):n==="array-contains-any"?new Ek(e,r):new Me(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new gk(e,r):new yk(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Wi(n,this.value)):n!==null&&Xr(this.value)===Xr(n)&&this.matchesComparison(Wi(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return Q()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class cn extends Zv{constructor(e,n){super(),this.filters=e,this.op=n,this.ae=null}static create(e,n){return new cn(e,n)}matches(e){return e0(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function e0(t){return t.op==="and"}function t0(t){return pk(t)&&e0(t)}function pk(t){for(const e of t.filters)if(e instanceof cn)return!1;return!0}function Eh(t){if(t instanceof Me)return t.field.canonicalString()+t.op.toString()+qi(t.value);if(t0(t))return t.filters.map(e=>Eh(e)).join(",");{const e=t.filters.map(n=>Eh(n)).join(",");return`${t.op}(${e})`}}function n0(t,e){return t instanceof Me?function(r,i){return i instanceof Me&&r.op===i.op&&r.field.isEqual(i.field)&&un(r.value,i.value)}(t,e):t instanceof cn?function(r,i){return i instanceof cn&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,l)=>s&&n0(o,i.filters[l]),!0):!1}(t,e):void Q()}function r0(t){return t instanceof Me?function(n){return`${n.field.canonicalString()} ${n.op} ${qi(n.value)}`}(t):t instanceof cn?function(n){return n.op.toString()+" {"+n.getFilters().map(r0).join(" ,")+"}"}(t):"Filter"}class mk extends Me{constructor(e,n,r){super(e,n,r),this.key=q.fromName(r.referenceValue)}matches(e){const n=q.comparator(e.key,this.key);return this.matchesComparison(n)}}class gk extends Me{constructor(e,n){super(e,"in",n),this.keys=i0("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class yk extends Me{constructor(e,n){super(e,"not-in",n),this.keys=i0("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function i0(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>q.fromName(r.referenceValue))}class _k extends Me{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return $d(n)&&Eo(n.arrayValue,this.value)}}class vk extends Me{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Eo(this.value.arrayValue,n)}}class wk extends Me{constructor(e,n){super(e,"not-in",n)}matches(e){if(Eo(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Eo(this.value.arrayValue,n)}}class Ek extends Me{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!$d(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Eo(this.value.arrayValue,r))}}/**
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
 */class Tk{constructor(e,n=null,r=[],i=[],s=null,o=null,l=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=l,this.ue=null}}function og(t,e=null,n=[],r=[],i=null,s=null,o=null){return new Tk(t,e,n,r,i,s,o)}function Hd(t){const e=Y(t);if(e.ue===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Eh(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),eu(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>qi(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>qi(r)).join(",")),e.ue=n}return e.ue}function Wd(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!fk(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!n0(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!sg(t.startAt,e.startAt)&&sg(t.endAt,e.endAt)}function Th(t){return q.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
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
 */class tu{constructor(e,n=null,r=[],i=[],s=null,o="F",l=null,u=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=l,this.endAt=u,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function Ik(t,e,n,r,i,s,o,l){return new tu(t,e,n,r,i,s,o,l)}function qd(t){return new tu(t)}function ag(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function Sk(t){return t.collectionGroup!==null}function Qs(t){const e=Y(t);if(e.ce===null){e.ce=[];const n=new Set;for(const s of e.explicitOrderBy)e.ce.push(s),n.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let l=new Je(Xe.comparator);return o.filters.forEach(u=>{u.getFlattenedFilters().forEach(h=>{h.isInequality()&&(l=l.add(h.field))})}),l})(e).forEach(s=>{n.has(s.canonicalString())||s.isKeyField()||e.ce.push(new Rl(s,r))}),n.has(Xe.keyField().canonicalString())||e.ce.push(new Rl(Xe.keyField(),r))}return e.ce}function on(t){const e=Y(t);return e.le||(e.le=Ak(e,Qs(t))),e.le}function Ak(t,e){if(t.limitType==="F")return og(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new Rl(i.field,s)});const n=t.endAt?new kl(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new kl(t.startAt.position,t.startAt.inclusive):null;return og(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function Ih(t,e,n){return new tu(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function nu(t,e){return Wd(on(t),on(e))&&t.limitType===e.limitType}function s0(t){return`${Hd(on(t))}|lt:${t.limitType}`}function ui(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>r0(i)).join(", ")}]`),eu(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>qi(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>qi(i)).join(",")),`Target(${r})`}(on(t))}; limitType=${t.limitType})`}function ru(t,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):q.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(t,e)&&function(r,i){for(const s of Qs(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(t,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(t,e)&&function(r,i){return!(r.startAt&&!function(o,l,u){const h=ig(o,l,u);return o.inclusive?h<=0:h<0}(r.startAt,Qs(r),i)||r.endAt&&!function(o,l,u){const h=ig(o,l,u);return o.inclusive?h>=0:h>0}(r.endAt,Qs(r),i))}(t,e)}function kk(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function o0(t){return(e,n)=>{let r=!1;for(const i of Qs(t)){const s=Rk(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function Rk(t,e,n){const r=t.field.isKeyField()?q.comparator(e.key,n.key):function(s,o,l){const u=o.data.field(s),h=l.data.field(s);return u!==null&&h!==null?Wi(u,h):Q()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return Q()}}/**
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
 */class ns{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){ei(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return Xv(this.inner)}size(){return this.innerSize}}/**
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
 */const Ck=new ke(q.comparator);function On(){return Ck}const a0=new ke(q.comparator);function Ls(...t){let e=a0;for(const n of t)e=e.insert(n.key,n);return e}function l0(t){let e=a0;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Mr(){return Xs()}function u0(){return Xs()}function Xs(){return new ns(t=>t.toString(),(t,e)=>t.isEqual(e))}const Pk=new ke(q.comparator),xk=new Je(q.comparator);function ne(...t){let e=xk;for(const n of t)e=e.add(n);return e}const Nk=new Je(le);function Dk(){return Nk}/**
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
 */function Kd(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Al(e)?"-0":e}}function c0(t){return{integerValue:""+t}}function Vk(t,e){return lk(e)?c0(e):Kd(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
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
 */class iu{constructor(){this._=void 0}}function Ok(t,e,n){return t instanceof To?function(i,s){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&zd(s)&&(s=Bd(s)),s&&(o.fields.__previous_value__=s),{mapValue:o}}(n,e):t instanceof Io?d0(t,e):t instanceof So?f0(t,e):function(i,s){const o=h0(i,s),l=lg(o)+lg(i.Pe);return wh(o)&&wh(i.Pe)?c0(l):Kd(i.serializer,l)}(t,e)}function Lk(t,e,n){return t instanceof Io?d0(t,e):t instanceof So?f0(t,e):n}function h0(t,e){return t instanceof Cl?function(r){return wh(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class To extends iu{}class Io extends iu{constructor(e){super(),this.elements=e}}function d0(t,e){const n=p0(e);for(const r of t.elements)n.some(i=>un(i,r))||n.push(r);return{arrayValue:{values:n}}}class So extends iu{constructor(e){super(),this.elements=e}}function f0(t,e){let n=p0(e);for(const r of t.elements)n=n.filter(i=>!un(i,r));return{arrayValue:{values:n}}}class Cl extends iu{constructor(e,n){super(),this.serializer=e,this.Pe=n}}function lg(t){return xe(t.integerValue||t.doubleValue)}function p0(t){return $d(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
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
 */class Mk{constructor(e,n){this.field=e,this.transform=n}}function bk(t,e){return t.field.isEqual(e.field)&&function(r,i){return r instanceof Io&&i instanceof Io||r instanceof So&&i instanceof So?Hi(r.elements,i.elements,un):r instanceof Cl&&i instanceof Cl?un(r.Pe,i.Pe):r instanceof To&&i instanceof To}(t.transform,e.transform)}class Uk{constructor(e,n){this.version=e,this.transformResults=n}}class zt{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new zt}static exists(e){return new zt(void 0,e)}static updateTime(e){return new zt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Ha(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class su{}function m0(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new Gd(t.key,zt.none()):new bo(t.key,t.data,zt.none());{const n=t.data,r=wt.empty();let i=new Je(Xe.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new Ir(t.key,r,new xt(i.toArray()),zt.none())}}function Fk(t,e,n){t instanceof bo?function(i,s,o){const l=i.value.clone(),u=cg(i.fieldTransforms,s,o.transformResults);l.setAll(u),s.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):t instanceof Ir?function(i,s,o){if(!Ha(i.precondition,s))return void s.convertToUnknownDocument(o.version);const l=cg(i.fieldTransforms,s,o.transformResults),u=s.data;u.setAll(g0(i)),u.setAll(l),s.convertToFoundDocument(o.version,u).setHasCommittedMutations()}(t,e,n):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function Ys(t,e,n,r){return t instanceof bo?function(s,o,l,u){if(!Ha(s.precondition,o))return l;const h=s.value.clone(),f=hg(s.fieldTransforms,u,o);return h.setAll(f),o.convertToFoundDocument(o.version,h).setHasLocalMutations(),null}(t,e,n,r):t instanceof Ir?function(s,o,l,u){if(!Ha(s.precondition,o))return l;const h=hg(s.fieldTransforms,u,o),f=o.data;return f.setAll(g0(s)),f.setAll(h),o.convertToFoundDocument(o.version,f).setHasLocalMutations(),l===null?null:l.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(g=>g.field))}(t,e,n,r):function(s,o,l){return Ha(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):l}(t,e,n)}function jk(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=h0(r.transform,i||null);s!=null&&(n===null&&(n=wt.empty()),n.set(r.field,s))}return n||null}function ug(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&Hi(r,i,(s,o)=>bk(s,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class bo extends su{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Ir extends su{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function g0(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function cg(t,e,n){const r=new Map;he(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,l=e.data.field(s.field);r.set(s.field,Lk(o,l,n[i]))}return r}function hg(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,Ok(s,o,e))}return r}class Gd extends su{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class zk extends su{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class Bk{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&Fk(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Ys(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Ys(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=u0();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let l=this.applyToLocalView(o,s.mutatedFields);l=n.has(i.key)?null:l;const u=m0(o,l);u!==null&&r.set(i.key,u),o.isValidDocument()||o.convertToNoDocument(X.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),ne())}isEqual(e){return this.batchId===e.batchId&&Hi(this.mutations,e.mutations,(n,r)=>ug(n,r))&&Hi(this.baseMutations,e.baseMutations,(n,r)=>ug(n,r))}}class Qd{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){he(e.mutations.length===r.length);let i=function(){return Pk}();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new Qd(e,n,r,i)}}/**
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
 */class $k{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
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
 */class Hk{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
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
 */var De,se;function Wk(t){switch(t){default:return Q();case M.CANCELLED:case M.UNKNOWN:case M.DEADLINE_EXCEEDED:case M.RESOURCE_EXHAUSTED:case M.INTERNAL:case M.UNAVAILABLE:case M.UNAUTHENTICATED:return!1;case M.INVALID_ARGUMENT:case M.NOT_FOUND:case M.ALREADY_EXISTS:case M.PERMISSION_DENIED:case M.FAILED_PRECONDITION:case M.ABORTED:case M.OUT_OF_RANGE:case M.UNIMPLEMENTED:case M.DATA_LOSS:return!0}}function y0(t){if(t===void 0)return Vn("GRPC error has no .code"),M.UNKNOWN;switch(t){case De.OK:return M.OK;case De.CANCELLED:return M.CANCELLED;case De.UNKNOWN:return M.UNKNOWN;case De.DEADLINE_EXCEEDED:return M.DEADLINE_EXCEEDED;case De.RESOURCE_EXHAUSTED:return M.RESOURCE_EXHAUSTED;case De.INTERNAL:return M.INTERNAL;case De.UNAVAILABLE:return M.UNAVAILABLE;case De.UNAUTHENTICATED:return M.UNAUTHENTICATED;case De.INVALID_ARGUMENT:return M.INVALID_ARGUMENT;case De.NOT_FOUND:return M.NOT_FOUND;case De.ALREADY_EXISTS:return M.ALREADY_EXISTS;case De.PERMISSION_DENIED:return M.PERMISSION_DENIED;case De.FAILED_PRECONDITION:return M.FAILED_PRECONDITION;case De.ABORTED:return M.ABORTED;case De.OUT_OF_RANGE:return M.OUT_OF_RANGE;case De.UNIMPLEMENTED:return M.UNIMPLEMENTED;case De.DATA_LOSS:return M.DATA_LOSS;default:return Q()}}(se=De||(De={}))[se.OK=0]="OK",se[se.CANCELLED=1]="CANCELLED",se[se.UNKNOWN=2]="UNKNOWN",se[se.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",se[se.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",se[se.NOT_FOUND=5]="NOT_FOUND",se[se.ALREADY_EXISTS=6]="ALREADY_EXISTS",se[se.PERMISSION_DENIED=7]="PERMISSION_DENIED",se[se.UNAUTHENTICATED=16]="UNAUTHENTICATED",se[se.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",se[se.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",se[se.ABORTED=10]="ABORTED",se[se.OUT_OF_RANGE=11]="OUT_OF_RANGE",se[se.UNIMPLEMENTED=12]="UNIMPLEMENTED",se[se.INTERNAL=13]="INTERNAL",se[se.UNAVAILABLE=14]="UNAVAILABLE",se[se.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function qk(){return new TextEncoder}/**
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
 */const Kk=new Fr([4294967295,4294967295],0);function dg(t){const e=qk().encode(t),n=new Bv;return n.update(e),new Uint8Array(n.digest())}function fg(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new Fr([n,r],0),new Fr([i,s],0)]}class Xd{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new Ms(`Invalid padding: ${n}`);if(r<0)throw new Ms(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Ms(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new Ms(`Invalid padding when bitmap length is 0: ${n}`);this.Ie=8*e.length-n,this.Te=Fr.fromNumber(this.Ie)}Ee(e,n,r){let i=e.add(n.multiply(Fr.fromNumber(r)));return i.compare(Kk)===1&&(i=new Fr([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const n=dg(e),[r,i]=fg(n);for(let s=0;s<this.hashCount;s++){const o=this.Ee(r,i,s);if(!this.de(o))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new Xd(s,i,n);return r.forEach(l=>o.insert(l)),o}insert(e){if(this.Ie===0)return;const n=dg(e),[r,i]=fg(n);for(let s=0;s<this.hashCount;s++){const o=this.Ee(r,i,s);this.Ae(o)}}Ae(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class Ms extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class ou{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,Uo.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new ou(X.min(),i,new ke(le),On(),ne())}}class Uo{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new Uo(r,n,ne(),ne(),ne())}}/**
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
 */class Wa{constructor(e,n,r,i){this.Re=e,this.removedTargetIds=n,this.key=r,this.Ve=i}}class _0{constructor(e,n){this.targetId=e,this.me=n}}class v0{constructor(e,n,r=et.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class pg{constructor(){this.fe=0,this.ge=gg(),this.pe=et.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=ne(),n=ne(),r=ne();return this.ge.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:Q()}}),new Uo(this.pe,this.ye,e,n,r)}Ce(){this.we=!1,this.ge=gg()}Fe(e,n){this.we=!0,this.ge=this.ge.insert(e,n)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,he(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class Gk{constructor(e){this.Le=e,this.Be=new Map,this.ke=On(),this.qe=mg(),this.Qe=new ke(le)}Ke(e){for(const n of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(n,e.Ve):this.Ue(n,e.key,e.Ve);for(const n of e.removedTargetIds)this.Ue(n,e.key,e.Ve)}We(e){this.forEachTarget(e,n=>{const r=this.Ge(n);switch(e.state){case 0:this.ze(n)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.Ce(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(n);break;case 3:this.ze(n)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.ze(n)&&(this.je(n),r.De(e.resumeToken));break;default:Q()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Be.forEach((r,i)=>{this.ze(i)&&n(i)})}He(e){const n=e.targetId,r=e.me.count,i=this.Je(n);if(i){const s=i.target;if(Th(s))if(r===0){const o=new q(s.path);this.Ue(n,o,lt.newNoDocument(o,X.min()))}else he(r===1);else{const o=this.Ye(n);if(o!==r){const l=this.Ze(e),u=l?this.Xe(l,e,o):1;if(u!==0){this.je(n);const h=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(n,h)}}}}}Ze(e){const n=e.me.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=n;let o,l;try{o=Qr(r).toUint8Array()}catch(u){if(u instanceof Yv)return $i("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{l=new Xd(o,i,s)}catch(u){return $i(u instanceof Ms?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return l.Ie===0?null:l}Xe(e,n,r){return n.me.count===r-this.nt(e,n.targetId)?0:2}nt(e,n){const r=this.Le.getRemoteKeysForTarget(n);let i=0;return r.forEach(s=>{const o=this.Le.tt(),l=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;e.mightContain(l)||(this.Ue(n,s,null),i++)}),i}rt(e){const n=new Map;this.Be.forEach((s,o)=>{const l=this.Je(o);if(l){if(s.current&&Th(l.target)){const u=new q(l.target.path);this.ke.get(u)!==null||this.it(o,u)||this.Ue(o,u,lt.newNoDocument(u,e))}s.be&&(n.set(o,s.ve()),s.Ce())}});let r=ne();this.qe.forEach((s,o)=>{let l=!0;o.forEachWhile(u=>{const h=this.Je(u);return!h||h.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(s))}),this.ke.forEach((s,o)=>o.setReadTime(e));const i=new ou(e,n,this.Qe,this.ke,r);return this.ke=On(),this.qe=mg(),this.Qe=new ke(le),i}$e(e,n){if(!this.ze(e))return;const r=this.it(e,n.key)?2:0;this.Ge(e).Fe(n.key,r),this.ke=this.ke.insert(n.key,n),this.qe=this.qe.insert(n.key,this.st(n.key).add(e))}Ue(e,n,r){if(!this.ze(e))return;const i=this.Ge(e);this.it(e,n)?i.Fe(n,1):i.Me(n),this.qe=this.qe.insert(n,this.st(n).delete(e)),r&&(this.ke=this.ke.insert(n,r))}removeTarget(e){this.Be.delete(e)}Ye(e){const n=this.Ge(e).ve();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let n=this.Be.get(e);return n||(n=new pg,this.Be.set(e,n)),n}st(e){let n=this.qe.get(e);return n||(n=new Je(le),this.qe=this.qe.insert(e,n)),n}ze(e){const n=this.Je(e)!==null;return n||$("WatchChangeAggregator","Detected inactive target",e),n}Je(e){const n=this.Be.get(e);return n&&n.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new pg),this.Le.getRemoteKeysForTarget(e).forEach(n=>{this.Ue(e,n,null)})}it(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}}function mg(){return new ke(q.comparator)}function gg(){return new ke(q.comparator)}const Qk={asc:"ASCENDING",desc:"DESCENDING"},Xk={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},Yk={and:"AND",or:"OR"};class Jk{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Sh(t,e){return t.useProto3Json||eu(e)?e:{value:e}}function Pl(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function w0(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function Zk(t,e){return Pl(t,e.toTimestamp())}function an(t){return he(!!t),X.fromTimestamp(function(n){const r=_r(n);return new Ue(r.seconds,r.nanos)}(t))}function Yd(t,e){return Ah(t,e).canonicalString()}function Ah(t,e){const n=function(i){return new Te(["projects",i.projectId,"databases",i.database])}(t).child("documents");return e===void 0?n:n.child(e)}function E0(t){const e=Te.fromString(t);return he(k0(e)),e}function kh(t,e){return Yd(t.databaseId,e.path)}function fc(t,e){const n=E0(e);if(n.get(1)!==t.databaseId.projectId)throw new H(M.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new H(M.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new q(I0(n))}function T0(t,e){return Yd(t.databaseId,e)}function eR(t){const e=E0(t);return e.length===4?Te.emptyPath():I0(e)}function Rh(t){return new Te(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function I0(t){return he(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function yg(t,e,n){return{name:kh(t,e),fields:n.value.mapValue.fields}}function tR(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(h){return h==="NO_CHANGE"?0:h==="ADD"?1:h==="REMOVE"?2:h==="CURRENT"?3:h==="RESET"?4:Q()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(h,f){return h.useProto3Json?(he(f===void 0||typeof f=="string"),et.fromBase64String(f||"")):(he(f===void 0||f instanceof Buffer||f instanceof Uint8Array),et.fromUint8Array(f||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,l=o&&function(h){const f=h.code===void 0?M.UNKNOWN:y0(h.code);return new H(f,h.message||"")}(o);n=new v0(r,i,s,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=fc(t,r.document.name),s=an(r.document.updateTime),o=r.document.createTime?an(r.document.createTime):X.min(),l=new wt({mapValue:{fields:r.document.fields}}),u=lt.newFoundDocument(i,s,o,l),h=r.targetIds||[],f=r.removedTargetIds||[];n=new Wa(h,f,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=fc(t,r.document),s=r.readTime?an(r.readTime):X.min(),o=lt.newNoDocument(i,s),l=r.removedTargetIds||[];n=new Wa([],l,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=fc(t,r.document),s=r.removedTargetIds||[];n=new Wa([],s,i,null)}else{if(!("filter"in e))return Q();{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new Hk(i,s),l=r.targetId;n=new _0(l,o)}}return n}function nR(t,e){let n;if(e instanceof bo)n={update:yg(t,e.key,e.value)};else if(e instanceof Gd)n={delete:kh(t,e.key)};else if(e instanceof Ir)n={update:yg(t,e.key,e.data),updateMask:hR(e.fieldMask)};else{if(!(e instanceof zk))return Q();n={verify:kh(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,o){const l=o.transform;if(l instanceof To)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof Io)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof So)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof Cl)return{fieldPath:o.field.canonicalString(),increment:l.Pe};throw Q()}(0,r))),e.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:Zk(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:Q()}(t,e.precondition)),n}function rR(t,e){return t&&t.length>0?(he(e!==void 0),t.map(n=>function(i,s){let o=i.updateTime?an(i.updateTime):an(s);return o.isEqual(X.min())&&(o=an(s)),new Uk(o,i.transformResults||[])}(n,e))):[]}function iR(t,e){return{documents:[T0(t,e.path)]}}function sR(t,e){const n={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=T0(t,i);const s=function(h){if(h.length!==0)return A0(cn.create(h,"and"))}(e.filters);s&&(n.structuredQuery.where=s);const o=function(h){if(h.length!==0)return h.map(f=>function(y){return{field:ci(y.field),direction:lR(y.dir)}}(f))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const l=Sh(t,e.limit);return l!==null&&(n.structuredQuery.limit=l),e.startAt&&(n.structuredQuery.startAt=function(h){return{before:h.inclusive,values:h.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(h){return{before:!h.inclusive,values:h.position}}(e.endAt)),{_t:n,parent:i}}function oR(t){let e=eR(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){he(r===1);const f=n.from[0];f.allDescendants?i=f.collectionId:e=e.child(f.collectionId)}let s=[];n.where&&(s=function(g){const y=S0(g);return y instanceof cn&&t0(y)?y.getFilters():[y]}(n.where));let o=[];n.orderBy&&(o=function(g){return g.map(y=>function(P){return new Rl(hi(P.field),function(O){switch(O){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(P.direction))}(y))}(n.orderBy));let l=null;n.limit&&(l=function(g){let y;return y=typeof g=="object"?g.value:g,eu(y)?null:y}(n.limit));let u=null;n.startAt&&(u=function(g){const y=!!g.before,k=g.values||[];return new kl(k,y)}(n.startAt));let h=null;return n.endAt&&(h=function(g){const y=!g.before,k=g.values||[];return new kl(k,y)}(n.endAt)),Ik(e,i,o,s,l,"F",u,h)}function aR(t,e){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return Q()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function S0(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=hi(n.unaryFilter.field);return Me.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=hi(n.unaryFilter.field);return Me.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=hi(n.unaryFilter.field);return Me.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=hi(n.unaryFilter.field);return Me.create(o,"!=",{nullValue:"NULL_VALUE"});default:return Q()}}(t):t.fieldFilter!==void 0?function(n){return Me.create(hi(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return Q()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return cn.create(n.compositeFilter.filters.map(r=>S0(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return Q()}}(n.compositeFilter.op))}(t):Q()}function lR(t){return Qk[t]}function uR(t){return Xk[t]}function cR(t){return Yk[t]}function ci(t){return{fieldPath:t.canonicalString()}}function hi(t){return Xe.fromServerFormat(t.fieldPath)}function A0(t){return t instanceof Me?function(n){if(n.op==="=="){if(rg(n.value))return{unaryFilter:{field:ci(n.field),op:"IS_NAN"}};if(ng(n.value))return{unaryFilter:{field:ci(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(rg(n.value))return{unaryFilter:{field:ci(n.field),op:"IS_NOT_NAN"}};if(ng(n.value))return{unaryFilter:{field:ci(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:ci(n.field),op:uR(n.op),value:n.value}}}(t):t instanceof cn?function(n){const r=n.getFilters().map(i=>A0(i));return r.length===1?r[0]:{compositeFilter:{op:cR(n.op),filters:r}}}(t):Q()}function hR(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function k0(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class Zn{constructor(e,n,r,i,s=X.min(),o=X.min(),l=et.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=l,this.expectedCount=u}withSequenceNumber(e){return new Zn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Zn(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Zn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Zn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class dR{constructor(e){this.ct=e}}function fR(t){const e=oR({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Ih(e,e.limit,"L"):e}/**
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
 */class pR{constructor(){this.un=new mR}addToCollectionParentIndex(e,n){return this.un.add(n),L.resolve()}getCollectionParents(e,n){return L.resolve(this.un.getEntries(n))}addFieldIndex(e,n){return L.resolve()}deleteFieldIndex(e,n){return L.resolve()}deleteAllFieldIndexes(e){return L.resolve()}createTargetIndexes(e,n){return L.resolve()}getDocumentsMatchingTarget(e,n){return L.resolve(null)}getIndexType(e,n){return L.resolve(0)}getFieldIndexes(e,n){return L.resolve([])}getNextCollectionGroupToUpdate(e){return L.resolve(null)}getMinOffset(e,n){return L.resolve(yr.min())}getMinOffsetFromCollectionGroup(e,n){return L.resolve(yr.min())}updateCollectionGroup(e,n,r){return L.resolve()}updateIndexEntries(e,n){return L.resolve()}}class mR{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new Je(Te.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new Je(Te.comparator)).toArray()}}/**
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
 */class Ki{constructor(e){this.Ln=e}next(){return this.Ln+=2,this.Ln}static Bn(){return new Ki(0)}static kn(){return new Ki(-1)}}/**
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
 */class gR{constructor(){this.changes=new ns(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,lt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?L.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 *//**
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
 */class yR{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class _R{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&Ys(r.mutation,i,xt.empty(),Ue.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,ne()).next(()=>r))}getLocalViewOfDocuments(e,n,r=ne()){const i=Mr();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=Ls();return s.forEach((l,u)=>{o=o.insert(l,u.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=Mr();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,ne()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,l)=>{n.set(o,l)})})}computeViews(e,n,r,i){let s=On();const o=Xs(),l=function(){return Xs()}();return n.forEach((u,h)=>{const f=r.get(h.key);i.has(h.key)&&(f===void 0||f.mutation instanceof Ir)?s=s.insert(h.key,h):f!==void 0?(o.set(h.key,f.mutation.getFieldMask()),Ys(f.mutation,h,f.mutation.getFieldMask(),Ue.now())):o.set(h.key,xt.empty())}),this.recalculateAndSaveOverlays(e,s).next(u=>(u.forEach((h,f)=>o.set(h,f)),n.forEach((h,f)=>{var g;return l.set(h,new yR(f,(g=o.get(h))!==null&&g!==void 0?g:null))}),l))}recalculateAndSaveOverlays(e,n){const r=Xs();let i=new ke((o,l)=>o-l),s=ne();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const l of o)l.keys().forEach(u=>{const h=n.get(u);if(h===null)return;let f=r.get(u)||xt.empty();f=l.applyToLocalView(h,f),r.set(u,f);const g=(i.get(l.batchId)||ne()).add(u);i=i.insert(l.batchId,g)})}).next(()=>{const o=[],l=i.getReverseIterator();for(;l.hasNext();){const u=l.getNext(),h=u.key,f=u.value,g=u0();f.forEach(y=>{if(!s.has(y)){const k=m0(n.get(y),r.get(y));k!==null&&g.set(y,k),s=s.add(y)}}),o.push(this.documentOverlayCache.saveOverlays(e,h,g))}return L.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,i){return function(o){return q.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):Sk(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,i):this.getDocumentsMatchingCollectionQuery(e,n,r,i)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):L.resolve(Mr());let l=-1,u=s;return o.next(h=>L.forEach(h,(f,g)=>(l<g.largestBatchId&&(l=g.largestBatchId),s.get(f)?L.resolve():this.remoteDocumentCache.getEntry(e,f).next(y=>{u=u.insert(f,y)}))).next(()=>this.populateOverlays(e,h,s)).next(()=>this.computeViews(e,u,h,ne())).next(f=>({batchId:l,changes:l0(f)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new q(n)).next(r=>{let i=Ls();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r,i){const s=n.collectionGroup;let o=Ls();return this.indexManager.getCollectionParents(e,s).next(l=>L.forEach(l,u=>{const h=function(g,y){return new tu(y,null,g.explicitOrderBy.slice(),g.filters.slice(),g.limit,g.limitType,g.startAt,g.endAt)}(n,u.child(s));return this.getDocumentsMatchingCollectionQuery(e,h,r,i).next(f=>{f.forEach((g,y)=>{o=o.insert(g,y)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,s,i))).next(o=>{s.forEach((u,h)=>{const f=h.getKey();o.get(f)===null&&(o=o.insert(f,lt.newInvalidDocument(f)))});let l=Ls();return o.forEach((u,h)=>{const f=s.get(u);f!==void 0&&Ys(f.mutation,h,xt.empty(),Ue.now()),ru(n,h)&&(l=l.insert(u,h))}),l})}}/**
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
 */class vR{constructor(e){this.serializer=e,this.hr=new Map,this.Pr=new Map}getBundleMetadata(e,n){return L.resolve(this.hr.get(n))}saveBundleMetadata(e,n){return this.hr.set(n.id,function(i){return{id:i.id,version:i.version,createTime:an(i.createTime)}}(n)),L.resolve()}getNamedQuery(e,n){return L.resolve(this.Pr.get(n))}saveNamedQuery(e,n){return this.Pr.set(n.name,function(i){return{name:i.name,query:fR(i.bundledQuery),readTime:an(i.readTime)}}(n)),L.resolve()}}/**
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
 */class wR{constructor(){this.overlays=new ke(q.comparator),this.Ir=new Map}getOverlay(e,n){return L.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Mr();return L.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.ht(e,n,s)}),L.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.Ir.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.Ir.delete(r)),L.resolve()}getOverlaysForCollection(e,n,r){const i=Mr(),s=n.length+1,o=new q(n.child("")),l=this.overlays.getIteratorFrom(o);for(;l.hasNext();){const u=l.getNext().value,h=u.getKey();if(!n.isPrefixOf(h.path))break;h.path.length===s&&u.largestBatchId>r&&i.set(u.getKey(),u)}return L.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new ke((h,f)=>h-f);const o=this.overlays.getIterator();for(;o.hasNext();){const h=o.getNext().value;if(h.getKey().getCollectionGroup()===n&&h.largestBatchId>r){let f=s.get(h.largestBatchId);f===null&&(f=Mr(),s=s.insert(h.largestBatchId,f)),f.set(h.getKey(),h)}}const l=Mr(),u=s.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((h,f)=>l.set(h,f)),!(l.size()>=i)););return L.resolve(l)}ht(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.Ir.get(i.largestBatchId).delete(r.key);this.Ir.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new $k(n,r));let s=this.Ir.get(n);s===void 0&&(s=ne(),this.Ir.set(n,s)),this.Ir.set(n,s.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
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
 */class ER{constructor(){this.sessionToken=et.EMPTY_BYTE_STRING}getSessionToken(e){return L.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,L.resolve()}}/**
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
 */class Jd{constructor(){this.Tr=new Je($e.Er),this.dr=new Je($e.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(e,n){const r=new $e(e,n);this.Tr=this.Tr.add(r),this.dr=this.dr.add(r)}Rr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Vr(new $e(e,n))}mr(e,n){e.forEach(r=>this.removeReference(r,n))}gr(e){const n=new q(new Te([])),r=new $e(n,e),i=new $e(n,e+1),s=[];return this.dr.forEachInRange([r,i],o=>{this.Vr(o),s.push(o.key)}),s}pr(){this.Tr.forEach(e=>this.Vr(e))}Vr(e){this.Tr=this.Tr.delete(e),this.dr=this.dr.delete(e)}yr(e){const n=new q(new Te([])),r=new $e(n,e),i=new $e(n,e+1);let s=ne();return this.dr.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new $e(e,0),r=this.Tr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class $e{constructor(e,n){this.key=e,this.wr=n}static Er(e,n){return q.comparator(e.key,n.key)||le(e.wr,n.wr)}static Ar(e,n){return le(e.wr,n.wr)||q.comparator(e.key,n.key)}}/**
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
 */class TR{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Sr=1,this.br=new Je($e.Er)}checkEmpty(e){return L.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new Bk(s,n,r,i);this.mutationQueue.push(o);for(const l of i)this.br=this.br.add(new $e(l.key,s)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return L.resolve(o)}lookupMutationBatch(e,n){return L.resolve(this.Dr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.vr(r),s=i<0?0:i;return L.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return L.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(e){return L.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new $e(n,0),i=new $e(n,Number.POSITIVE_INFINITY),s=[];return this.br.forEachInRange([r,i],o=>{const l=this.Dr(o.wr);s.push(l)}),L.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new Je(le);return n.forEach(i=>{const s=new $e(i,0),o=new $e(i,Number.POSITIVE_INFINITY);this.br.forEachInRange([s,o],l=>{r=r.add(l.wr)})}),L.resolve(this.Cr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;q.isDocumentKey(s)||(s=s.child(""));const o=new $e(new q(s),0);let l=new Je(le);return this.br.forEachWhile(u=>{const h=u.key.path;return!!r.isPrefixOf(h)&&(h.length===i&&(l=l.add(u.wr)),!0)},o),L.resolve(this.Cr(l))}Cr(e){const n=[];return e.forEach(r=>{const i=this.Dr(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){he(this.Fr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.br;return L.forEach(n.mutations,i=>{const s=new $e(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.br=r})}On(e){}containsKey(e,n){const r=new $e(n,0),i=this.br.firstAfterOrEqual(r);return L.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,L.resolve()}Fr(e,n){return this.vr(e)}vr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Dr(e){const n=this.vr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class IR{constructor(e){this.Mr=e,this.docs=function(){return new ke(q.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.Mr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return L.resolve(r?r.document.mutableCopy():lt.newInvalidDocument(n))}getEntries(e,n){let r=On();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():lt.newInvalidDocument(i))}),L.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=On();const o=n.path,l=new q(o.child("")),u=this.docs.getIteratorFrom(l);for(;u.hasNext();){const{key:h,value:{document:f}}=u.getNext();if(!o.isPrefixOf(h.path))break;h.path.length>o.length+1||ik(rk(f),r)<=0||(i.has(f.key)||ru(n,f))&&(s=s.insert(f.key,f.mutableCopy()))}return L.resolve(s)}getAllFromCollectionGroup(e,n,r,i){Q()}Or(e,n){return L.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new SR(this)}getSize(e){return L.resolve(this.size)}}class SR extends gR{constructor(e){super(),this.cr=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.cr.addEntry(e,i)):this.cr.removeEntry(r)}),L.waitFor(n)}getFromCache(e,n){return this.cr.getEntry(e,n)}getAllFromCache(e,n){return this.cr.getEntries(e,n)}}/**
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
 */class AR{constructor(e){this.persistence=e,this.Nr=new ns(n=>Hd(n),Wd),this.lastRemoteSnapshotVersion=X.min(),this.highestTargetId=0,this.Lr=0,this.Br=new Jd,this.targetCount=0,this.kr=Ki.Bn()}forEachTarget(e,n){return this.Nr.forEach((r,i)=>n(i)),L.resolve()}getLastRemoteSnapshotVersion(e){return L.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return L.resolve(this.Lr)}allocateTargetId(e){return this.highestTargetId=this.kr.next(),L.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Lr&&(this.Lr=n),L.resolve()}Kn(e){this.Nr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.kr=new Ki(n),this.highestTargetId=n),e.sequenceNumber>this.Lr&&(this.Lr=e.sequenceNumber)}addTargetData(e,n){return this.Kn(n),this.targetCount+=1,L.resolve()}updateTargetData(e,n){return this.Kn(n),L.resolve()}removeTargetData(e,n){return this.Nr.delete(n.target),this.Br.gr(n.targetId),this.targetCount-=1,L.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.Nr.forEach((o,l)=>{l.sequenceNumber<=n&&r.get(l.targetId)===null&&(this.Nr.delete(o),s.push(this.removeMatchingKeysForTargetId(e,l.targetId)),i++)}),L.waitFor(s).next(()=>i)}getTargetCount(e){return L.resolve(this.targetCount)}getTargetData(e,n){const r=this.Nr.get(n)||null;return L.resolve(r)}addMatchingKeys(e,n,r){return this.Br.Rr(n,r),L.resolve()}removeMatchingKeys(e,n,r){this.Br.mr(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),L.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.Br.gr(n),L.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Br.yr(n);return L.resolve(r)}containsKey(e,n){return L.resolve(this.Br.containsKey(n))}}/**
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
 */class kR{constructor(e,n){this.qr={},this.overlays={},this.Qr=new jd(0),this.Kr=!1,this.Kr=!0,this.$r=new ER,this.referenceDelegate=e(this),this.Ur=new AR(this),this.indexManager=new pR,this.remoteDocumentCache=function(i){return new IR(i)}(r=>this.referenceDelegate.Wr(r)),this.serializer=new dR(n),this.Gr=new vR(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new wR,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.qr[e.toKey()];return r||(r=new TR(n,this.referenceDelegate),this.qr[e.toKey()]=r),r}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(e,n,r){$("MemoryPersistence","Starting transaction:",e);const i=new RR(this.Qr.next());return this.referenceDelegate.zr(),r(i).next(s=>this.referenceDelegate.jr(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Hr(e,n){return L.or(Object.values(this.qr).map(r=>()=>r.containsKey(e,n)))}}class RR extends ok{constructor(e){super(),this.currentSequenceNumber=e}}class Zd{constructor(e){this.persistence=e,this.Jr=new Jd,this.Yr=null}static Zr(e){return new Zd(e)}get Xr(){if(this.Yr)return this.Yr;throw Q()}addReference(e,n,r){return this.Jr.addReference(r,n),this.Xr.delete(r.toString()),L.resolve()}removeReference(e,n,r){return this.Jr.removeReference(r,n),this.Xr.add(r.toString()),L.resolve()}markPotentiallyOrphaned(e,n){return this.Xr.add(n.toString()),L.resolve()}removeTarget(e,n){this.Jr.gr(n.targetId).forEach(i=>this.Xr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.Xr.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}zr(){this.Yr=new Set}jr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return L.forEach(this.Xr,r=>{const i=q.fromPath(r);return this.ei(e,i).next(s=>{s||n.removeEntry(i,X.min())})}).next(()=>(this.Yr=null,n.apply(e)))}updateLimboDocument(e,n){return this.ei(e,n).next(r=>{r?this.Xr.delete(n.toString()):this.Xr.add(n.toString())})}Wr(e){return 0}ei(e,n){return L.or([()=>L.resolve(this.Jr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Hr(e,n)])}}/**
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
 */class ef{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.$i=r,this.Ui=i}static Wi(e,n){let r=ne(),i=ne();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new ef(e,n.fromCache,r,i)}}/**
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
 */class CR{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class PR{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return PI()?8:ak(ct())>0?6:4}()}initialize(e,n){this.Ji=e,this.indexManager=n,this.Gi=!0}getDocumentsMatchingQuery(e,n,r,i){const s={result:null};return this.Yi(e,n).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.Zi(e,n,i,r).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new CR;return this.Xi(e,n,o).next(l=>{if(s.result=l,this.zi)return this.es(e,n,o,l.size)})}).next(()=>s.result)}es(e,n,r,i){return r.documentReadCount<this.ji?(Cs()<=ie.DEBUG&&$("QueryEngine","SDK will not create cache indexes for query:",ui(n),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),L.resolve()):(Cs()<=ie.DEBUG&&$("QueryEngine","Query:",ui(n),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.Hi*i?(Cs()<=ie.DEBUG&&$("QueryEngine","The SDK decides to create cache indexes for query:",ui(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,on(n))):L.resolve())}Yi(e,n){if(ag(n))return L.resolve(null);let r=on(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=Ih(n,null,"F"),r=on(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=ne(...s);return this.Ji.getDocuments(e,o).next(l=>this.indexManager.getMinOffset(e,r).next(u=>{const h=this.ts(n,l);return this.ns(n,h,o,u.readTime)?this.Yi(e,Ih(n,null,"F")):this.rs(e,h,n,u)}))})))}Zi(e,n,r,i){return ag(n)||i.isEqual(X.min())?L.resolve(null):this.Ji.getDocuments(e,r).next(s=>{const o=this.ts(n,s);return this.ns(n,o,r,i)?L.resolve(null):(Cs()<=ie.DEBUG&&$("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),ui(n)),this.rs(e,o,n,nk(i,-1)).next(l=>l))})}ts(e,n){let r=new Je(o0(e));return n.forEach((i,s)=>{ru(e,s)&&(r=r.add(s))}),r}ns(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Xi(e,n,r){return Cs()<=ie.DEBUG&&$("QueryEngine","Using full collection scan to execute query:",ui(n)),this.Ji.getDocumentsMatchingQuery(e,n,yr.min(),r)}rs(e,n,r,i){return this.Ji.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
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
 */class xR{constructor(e,n,r,i){this.persistence=e,this.ss=n,this.serializer=i,this.os=new ke(le),this._s=new ns(s=>Hd(s),Wd),this.us=new Map,this.cs=e.getRemoteDocumentCache(),this.Ur=e.getTargetCache(),this.Gr=e.getBundleCache(),this.ls(r)}ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new _R(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.os))}}function NR(t,e,n,r){return new xR(t,e,n,r)}async function R0(t,e){const n=Y(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.ls(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],l=[];let u=ne();for(const h of i){o.push(h.batchId);for(const f of h.mutations)u=u.add(f.key)}for(const h of s){l.push(h.batchId);for(const f of h.mutations)u=u.add(f.key)}return n.localDocuments.getDocuments(r,u).next(h=>({hs:h,removedBatchIds:o,addedBatchIds:l}))})})}function DR(t,e){const n=Y(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.cs.newChangeBuffer({trackRemovals:!0});return function(l,u,h,f){const g=h.batch,y=g.keys();let k=L.resolve();return y.forEach(P=>{k=k.next(()=>f.getEntry(u,P)).next(D=>{const O=h.docVersions.get(P);he(O!==null),D.version.compareTo(O)<0&&(g.applyToRemoteDocument(D,h),D.isValidDocument()&&(D.setReadTime(h.commitVersion),f.addEntry(D)))})}),k.next(()=>l.mutationQueue.removeMutationBatch(u,g))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let u=ne();for(let h=0;h<l.mutationResults.length;++h)l.mutationResults[h].transformResults.length>0&&(u=u.add(l.batch.mutations[h].key));return u}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function C0(t){const e=Y(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Ur.getLastRemoteSnapshotVersion(n))}function VR(t,e){const n=Y(t),r=e.snapshotVersion;let i=n.os;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.cs.newChangeBuffer({trackRemovals:!0});i=n.os;const l=[];e.targetChanges.forEach((f,g)=>{const y=i.get(g);if(!y)return;l.push(n.Ur.removeMatchingKeys(s,f.removedDocuments,g).next(()=>n.Ur.addMatchingKeys(s,f.addedDocuments,g)));let k=y.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(g)!==null?k=k.withResumeToken(et.EMPTY_BYTE_STRING,X.min()).withLastLimboFreeSnapshotVersion(X.min()):f.resumeToken.approximateByteSize()>0&&(k=k.withResumeToken(f.resumeToken,r)),i=i.insert(g,k),function(D,O,I){return D.resumeToken.approximateByteSize()===0||O.snapshotVersion.toMicroseconds()-D.snapshotVersion.toMicroseconds()>=3e8?!0:I.addedDocuments.size+I.modifiedDocuments.size+I.removedDocuments.size>0}(y,k,f)&&l.push(n.Ur.updateTargetData(s,k))});let u=On(),h=ne();if(e.documentUpdates.forEach(f=>{e.resolvedLimboDocuments.has(f)&&l.push(n.persistence.referenceDelegate.updateLimboDocument(s,f))}),l.push(OR(s,o,e.documentUpdates).next(f=>{u=f.Ps,h=f.Is})),!r.isEqual(X.min())){const f=n.Ur.getLastRemoteSnapshotVersion(s).next(g=>n.Ur.setTargetsMetadata(s,s.currentSequenceNumber,r));l.push(f)}return L.waitFor(l).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,u,h)).next(()=>u)}).then(s=>(n.os=i,s))}function OR(t,e,n){let r=ne(),i=ne();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=On();return n.forEach((l,u)=>{const h=s.get(l);u.isFoundDocument()!==h.isFoundDocument()&&(i=i.add(l)),u.isNoDocument()&&u.version.isEqual(X.min())?(e.removeEntry(l,u.readTime),o=o.insert(l,u)):!h.isValidDocument()||u.version.compareTo(h.version)>0||u.version.compareTo(h.version)===0&&h.hasPendingWrites?(e.addEntry(u),o=o.insert(l,u)):$("LocalStore","Ignoring outdated watch update for ",l,". Current version:",h.version," Watch version:",u.version)}),{Ps:o,Is:i}})}function LR(t,e){const n=Y(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function MR(t,e){const n=Y(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Ur.getTargetData(r,e).next(s=>s?(i=s,L.resolve(i)):n.Ur.allocateTargetId(r).next(o=>(i=new Zn(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Ur.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.os.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.os=n.os.insert(r.targetId,r),n._s.set(e,r.targetId)),r})}async function Ch(t,e,n){const r=Y(t),i=r.os.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!Mo(o))throw o;$("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.os=r.os.remove(e),r._s.delete(i.target)}function _g(t,e,n){const r=Y(t);let i=X.min(),s=ne();return r.persistence.runTransaction("Execute query","readwrite",o=>function(u,h,f){const g=Y(u),y=g._s.get(f);return y!==void 0?L.resolve(g.os.get(y)):g.Ur.getTargetData(h,f)}(r,o,on(e)).next(l=>{if(l)return i=l.lastLimboFreeSnapshotVersion,r.Ur.getMatchingKeysForTargetId(o,l.targetId).next(u=>{s=u})}).next(()=>r.ss.getDocumentsMatchingQuery(o,e,n?i:X.min(),n?s:ne())).next(l=>(bR(r,kk(e),l),{documents:l,Ts:s})))}function bR(t,e,n){let r=t.us.get(e)||X.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.us.set(e,r)}class vg{constructor(){this.activeTargetIds=Dk()}fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Vs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class UR{constructor(){this.so=new vg,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.so.fs(e),this.oo[e]||"not-current"}updateQueryState(e,n,r){this.oo[e]=n}removeLocalQueryTarget(e){this.so.gs(e)}isLocalQueryTarget(e){return this.so.activeTargetIds.has(e)}clearQueryState(e){delete this.oo[e]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(e){return this.so.activeTargetIds.has(e)}start(){return this.so=new vg,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class FR{_o(e){}shutdown(){}}/**
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
 */class wg{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(e){this.ho.push(e)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){$("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ho)e(0)}lo(){$("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ho)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Sa=null;function pc(){return Sa===null?Sa=function(){return 268435456+Math.round(2147483648*Math.random())}():Sa++,"0x"+Sa.toString(16)}/**
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
 */const jR={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class zR{constructor(e){this.Io=e.Io,this.To=e.To}Eo(e){this.Ao=e}Ro(e){this.Vo=e}mo(e){this.fo=e}onMessage(e){this.po=e}close(){this.To()}send(e){this.Io(e)}yo(){this.Ao()}wo(){this.Vo()}So(e){this.fo(e)}bo(e){this.po(e)}}/**
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
 */const st="WebChannelConnection";class BR extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Do=r+"://"+n.host,this.vo=`projects/${i}/databases/${s}`,this.Co=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${s}`}get Fo(){return!1}Mo(n,r,i,s,o){const l=pc(),u=this.xo(n,r.toUriEncodedString());$("RestConnection",`Sending RPC '${n}' ${l}:`,u,i);const h={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(h,s,o),this.No(n,u,h,i).then(f=>($("RestConnection",`Received RPC '${n}' ${l}: `,f),f),f=>{throw $i("RestConnection",`RPC '${n}' ${l} failed with error: `,f,"url: ",u,"request:",i),f})}Lo(n,r,i,s,o,l){return this.Mo(n,r,i,s,o)}Oo(n,r,i){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+ts}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((s,o)=>n[o]=s),i&&i.headers.forEach((s,o)=>n[o]=s)}xo(n,r){const i=jR[n];return`${this.Do}/v1/${r}:${i}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}No(e,n,r,i){const s=pc();return new Promise((o,l)=>{const u=new $v;u.setWithCredentials(!0),u.listenOnce(Hv.COMPLETE,()=>{try{switch(u.getLastErrorCode()){case Ba.NO_ERROR:const f=u.getResponseJson();$(st,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(f)),o(f);break;case Ba.TIMEOUT:$(st,`RPC '${e}' ${s} timed out`),l(new H(M.DEADLINE_EXCEEDED,"Request time out"));break;case Ba.HTTP_ERROR:const g=u.getStatus();if($(st,`RPC '${e}' ${s} failed with status:`,g,"response text:",u.getResponseText()),g>0){let y=u.getResponseJson();Array.isArray(y)&&(y=y[0]);const k=y==null?void 0:y.error;if(k&&k.status&&k.message){const P=function(O){const I=O.toLowerCase().replace(/_/g,"-");return Object.values(M).indexOf(I)>=0?I:M.UNKNOWN}(k.status);l(new H(P,k.message))}else l(new H(M.UNKNOWN,"Server responded with status "+u.getStatus()))}else l(new H(M.UNAVAILABLE,"Connection failed."));break;default:Q()}}finally{$(st,`RPC '${e}' ${s} completed.`)}});const h=JSON.stringify(i);$(st,`RPC '${e}' ${s} sending request:`,i),u.send(n,"POST",h,r,15)})}Bo(e,n,r){const i=pc(),s=[this.Do,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=Kv(),l=qv(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},h=this.longPollingOptions.timeoutSeconds;h!==void 0&&(u.longPollingTimeout=Math.round(1e3*h)),this.useFetchStreams&&(u.useFetchStreams=!0),this.Oo(u.initMessageHeaders,n,r),u.encodeInitMessageHeaders=!0;const f=s.join("");$(st,`Creating RPC '${e}' stream ${i}: ${f}`,u);const g=o.createWebChannel(f,u);let y=!1,k=!1;const P=new zR({Io:O=>{k?$(st,`Not sending because RPC '${e}' stream ${i} is closed:`,O):(y||($(st,`Opening RPC '${e}' stream ${i} transport.`),g.open(),y=!0),$(st,`RPC '${e}' stream ${i} sending:`,O),g.send(O))},To:()=>g.close()}),D=(O,I,E)=>{O.listen(I,S=>{try{E(S)}catch(V){setTimeout(()=>{throw V},0)}})};return D(g,Os.EventType.OPEN,()=>{k||($(st,`RPC '${e}' stream ${i} transport opened.`),P.yo())}),D(g,Os.EventType.CLOSE,()=>{k||(k=!0,$(st,`RPC '${e}' stream ${i} transport closed`),P.So())}),D(g,Os.EventType.ERROR,O=>{k||(k=!0,$i(st,`RPC '${e}' stream ${i} transport errored:`,O),P.So(new H(M.UNAVAILABLE,"The operation could not be completed")))}),D(g,Os.EventType.MESSAGE,O=>{var I;if(!k){const E=O.data[0];he(!!E);const S=E,V=S.error||((I=S[0])===null||I===void 0?void 0:I.error);if(V){$(st,`RPC '${e}' stream ${i} received error:`,V);const j=V.status;let F=function(v){const T=De[v];if(T!==void 0)return y0(T)}(j),w=V.message;F===void 0&&(F=M.INTERNAL,w="Unknown error status: "+j+" with message "+V.message),k=!0,P.So(new H(F,w)),g.close()}else $(st,`RPC '${e}' stream ${i} received:`,E),P.bo(E)}}),D(l,Wv.STAT_EVENT,O=>{O.stat===_h.PROXY?$(st,`RPC '${e}' stream ${i} detected buffering proxy`):O.stat===_h.NOPROXY&&$(st,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{P.wo()},0),P}}function mc(){return typeof document<"u"?document:null}/**
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
 */function au(t){return new Jk(t,!0)}/**
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
 */class P0{constructor(e,n,r=1e3,i=1.5,s=6e4){this.ui=e,this.timerId=n,this.ko=r,this.qo=i,this.Qo=s,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(e){this.cancel();const n=Math.floor(this.Ko+this.zo()),r=Math.max(0,Date.now()-this.Uo),i=Math.max(0,n-r);i>0&&$("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Ko} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,i,()=>(this.Uo=Date.now(),e())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
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
 */class x0{constructor(e,n,r,i,s,o,l,u){this.ui=e,this.Ho=r,this.Jo=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=l,this.listener=u,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new P0(e,n)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(e){this.u_(),this.stream.send(e)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(e,n){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,e!==4?this.t_.reset():n&&n.code===M.RESOURCE_EXHAUSTED?(Vn(n.toString()),Vn("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):n&&n.code===M.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.mo(n)}l_(){}auth(){this.state=1;const e=this.h_(this.Yo),n=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Yo===n&&this.P_(r,i)},r=>{e(()=>{const i=new H(M.UNKNOWN,"Fetching auth token failed: "+r.message);return this.I_(i)})})}P_(e,n){const r=this.h_(this.Yo);this.stream=this.T_(e,n),this.stream.Eo(()=>{r(()=>this.listener.Eo())}),this.stream.Ro(()=>{r(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(i=>{r(()=>this.I_(i))}),this.stream.onMessage(i=>{r(()=>++this.e_==1?this.E_(i):this.onNext(i))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(e){return $("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}h_(e){return n=>{this.ui.enqueueAndForget(()=>this.Yo===e?n():($("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class $R extends x0{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}T_(e,n){return this.connection.Bo("Listen",e,n)}E_(e){return this.onNext(e)}onNext(e){this.t_.reset();const n=tR(this.serializer,e),r=function(s){if(!("targetChange"in s))return X.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?X.min():o.readTime?an(o.readTime):X.min()}(e);return this.listener.d_(n,r)}A_(e){const n={};n.database=Rh(this.serializer),n.addTarget=function(s,o){let l;const u=o.target;if(l=Th(u)?{documents:iR(s,u)}:{query:sR(s,u)._t},l.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){l.resumeToken=w0(s,o.resumeToken);const h=Sh(s,o.expectedCount);h!==null&&(l.expectedCount=h)}else if(o.snapshotVersion.compareTo(X.min())>0){l.readTime=Pl(s,o.snapshotVersion.toTimestamp());const h=Sh(s,o.expectedCount);h!==null&&(l.expectedCount=h)}return l}(this.serializer,e);const r=aR(this.serializer,e);r&&(n.labels=r),this.a_(n)}R_(e){const n={};n.database=Rh(this.serializer),n.removeTarget=e,this.a_(n)}}class HR extends x0{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(e,n){return this.connection.Bo("Write",e,n)}E_(e){return he(!!e.streamToken),this.lastStreamToken=e.streamToken,he(!e.writeResults||e.writeResults.length===0),this.listener.f_()}onNext(e){he(!!e.streamToken),this.lastStreamToken=e.streamToken,this.t_.reset();const n=rR(e.writeResults,e.commitTime),r=an(e.commitTime);return this.listener.g_(r,n)}p_(){const e={};e.database=Rh(this.serializer),this.a_(e)}m_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>nR(this.serializer,r))};this.a_(n)}}/**
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
 */class WR extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.y_=!1}w_(){if(this.y_)throw new H(M.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(e,n,r,i){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.Mo(e,Ah(n,r),i,s,o)).catch(s=>{throw s.name==="FirebaseError"?(s.code===M.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new H(M.UNKNOWN,s.toString())})}Lo(e,n,r,i,s){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,l])=>this.connection.Lo(e,Ah(n,r),i,o,l,s)).catch(o=>{throw o.name==="FirebaseError"?(o.code===M.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new H(M.UNKNOWN,o.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class qR{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(e){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.C_("Offline")))}set(e){this.x_(),this.S_=0,e==="Online"&&(this.D_=!1),this.C_(e)}C_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}F_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(Vn(n),this.D_=!1):$("OnlineStateTracker",n)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
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
 */class KR{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=s,this.k_._o(o=>{r.enqueueAndForget(async()=>{ti(this)&&($("RemoteStore","Restarting streams for network reachability change."),await async function(u){const h=Y(u);h.L_.add(4),await Fo(h),h.q_.set("Unknown"),h.L_.delete(4),await lu(h)}(this))})}),this.q_=new qR(r,i)}}async function lu(t){if(ti(t))for(const e of t.B_)await e(!0)}async function Fo(t){for(const e of t.B_)await e(!1)}function N0(t,e){const n=Y(t);n.N_.has(e.targetId)||(n.N_.set(e.targetId,e),sf(n)?rf(n):rs(n).r_()&&nf(n,e))}function tf(t,e){const n=Y(t),r=rs(n);n.N_.delete(e),r.r_()&&D0(n,e),n.N_.size===0&&(r.r_()?r.o_():ti(n)&&n.q_.set("Unknown"))}function nf(t,e){if(t.Q_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(X.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}rs(t).A_(e)}function D0(t,e){t.Q_.xe(e),rs(t).R_(e)}function rf(t){t.Q_=new Gk({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>t.N_.get(e)||null,tt:()=>t.datastore.serializer.databaseId}),rs(t).start(),t.q_.v_()}function sf(t){return ti(t)&&!rs(t).n_()&&t.N_.size>0}function ti(t){return Y(t).L_.size===0}function V0(t){t.Q_=void 0}async function GR(t){t.q_.set("Online")}async function QR(t){t.N_.forEach((e,n)=>{nf(t,e)})}async function XR(t,e){V0(t),sf(t)?(t.q_.M_(e),rf(t)):t.q_.set("Unknown")}async function YR(t,e,n){if(t.q_.set("Online"),e instanceof v0&&e.state===2&&e.cause)try{await async function(i,s){const o=s.cause;for(const l of s.targetIds)i.N_.has(l)&&(await i.remoteSyncer.rejectListen(l,o),i.N_.delete(l),i.Q_.removeTarget(l))}(t,e)}catch(r){$("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await xl(t,r)}else if(e instanceof Wa?t.Q_.Ke(e):e instanceof _0?t.Q_.He(e):t.Q_.We(e),!n.isEqual(X.min()))try{const r=await C0(t.localStore);n.compareTo(r)>=0&&await function(s,o){const l=s.Q_.rt(o);return l.targetChanges.forEach((u,h)=>{if(u.resumeToken.approximateByteSize()>0){const f=s.N_.get(h);f&&s.N_.set(h,f.withResumeToken(u.resumeToken,o))}}),l.targetMismatches.forEach((u,h)=>{const f=s.N_.get(u);if(!f)return;s.N_.set(u,f.withResumeToken(et.EMPTY_BYTE_STRING,f.snapshotVersion)),D0(s,u);const g=new Zn(f.target,u,h,f.sequenceNumber);nf(s,g)}),s.remoteSyncer.applyRemoteEvent(l)}(t,n)}catch(r){$("RemoteStore","Failed to raise snapshot:",r),await xl(t,r)}}async function xl(t,e,n){if(!Mo(e))throw e;t.L_.add(1),await Fo(t),t.q_.set("Offline"),n||(n=()=>C0(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{$("RemoteStore","Retrying IndexedDB access"),await n(),t.L_.delete(1),await lu(t)})}function O0(t,e){return e().catch(n=>xl(t,n,e))}async function uu(t){const e=Y(t),n=vr(e);let r=e.O_.length>0?e.O_[e.O_.length-1].batchId:-1;for(;JR(e);)try{const i=await LR(e.localStore,r);if(i===null){e.O_.length===0&&n.o_();break}r=i.batchId,ZR(e,i)}catch(i){await xl(e,i)}L0(e)&&M0(e)}function JR(t){return ti(t)&&t.O_.length<10}function ZR(t,e){t.O_.push(e);const n=vr(t);n.r_()&&n.V_&&n.m_(e.mutations)}function L0(t){return ti(t)&&!vr(t).n_()&&t.O_.length>0}function M0(t){vr(t).start()}async function eC(t){vr(t).p_()}async function tC(t){const e=vr(t);for(const n of t.O_)e.m_(n.mutations)}async function nC(t,e,n){const r=t.O_.shift(),i=Qd.from(r,e,n);await O0(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await uu(t)}async function rC(t,e){e&&vr(t).V_&&await async function(r,i){if(function(o){return Wk(o)&&o!==M.ABORTED}(i.code)){const s=r.O_.shift();vr(r).s_(),await O0(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await uu(r)}}(t,e),L0(t)&&M0(t)}async function Eg(t,e){const n=Y(t);n.asyncQueue.verifyOperationInProgress(),$("RemoteStore","RemoteStore received new credentials");const r=ti(n);n.L_.add(3),await Fo(n),r&&n.q_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.L_.delete(3),await lu(n)}async function iC(t,e){const n=Y(t);e?(n.L_.delete(2),await lu(n)):e||(n.L_.add(2),await Fo(n),n.q_.set("Unknown"))}function rs(t){return t.K_||(t.K_=function(n,r,i){const s=Y(n);return s.w_(),new $R(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Eo:GR.bind(null,t),Ro:QR.bind(null,t),mo:XR.bind(null,t),d_:YR.bind(null,t)}),t.B_.push(async e=>{e?(t.K_.s_(),sf(t)?rf(t):t.q_.set("Unknown")):(await t.K_.stop(),V0(t))})),t.K_}function vr(t){return t.U_||(t.U_=function(n,r,i){const s=Y(n);return s.w_(),new HR(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Eo:()=>Promise.resolve(),Ro:eC.bind(null,t),mo:rC.bind(null,t),f_:tC.bind(null,t),g_:nC.bind(null,t)}),t.B_.push(async e=>{e?(t.U_.s_(),await uu(t)):(await t.U_.stop(),t.O_.length>0&&($("RemoteStore",`Stopping write stream with ${t.O_.length} pending writes`),t.O_=[]))})),t.U_}/**
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
 */class of{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new jr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,l=new of(e,n,o,i,s);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new H(M.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function af(t,e){if(Vn("AsyncQueue",`${e}: ${t}`),Mo(t))return new H(M.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class Oi{constructor(e){this.comparator=e?(n,r)=>e(n,r)||q.comparator(n.key,r.key):(n,r)=>q.comparator(n.key,r.key),this.keyedMap=Ls(),this.sortedSet=new ke(this.comparator)}static emptySet(e){return new Oi(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Oi)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Oi;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
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
 */class Tg{constructor(){this.W_=new ke(q.comparator)}track(e){const n=e.doc.key,r=this.W_.get(n);r?e.type!==0&&r.type===3?this.W_=this.W_.insert(n,e):e.type===3&&r.type!==1?this.W_=this.W_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.W_=this.W_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.W_=this.W_.remove(n):e.type===1&&r.type===2?this.W_=this.W_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):Q():this.W_=this.W_.insert(n,e)}G_(){const e=[];return this.W_.inorderTraversal((n,r)=>{e.push(r)}),e}}class Gi{constructor(e,n,r,i,s,o,l,u,h){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=l,this.excludesMetadataChanges=u,this.hasCachedResults=h}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(l=>{o.push({type:0,doc:l})}),new Gi(e,n,Oi.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&nu(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
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
 */class sC{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some(e=>e.J_())}}class oC{constructor(){this.queries=Ig(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(n,r){const i=Y(n),s=i.queries;i.queries=Ig(),s.forEach((o,l)=>{for(const u of l.j_)u.onError(r)})})(this,new H(M.ABORTED,"Firestore shutting down"))}}function Ig(){return new ns(t=>s0(t),nu)}async function aC(t,e){const n=Y(t);let r=3;const i=e.query;let s=n.queries.get(i);s?!s.H_()&&e.J_()&&(r=2):(s=new sC,r=e.J_()?0:1);try{switch(r){case 0:s.z_=await n.onListen(i,!0);break;case 1:s.z_=await n.onListen(i,!1);break;case 2:await n.onFirstRemoteStoreListen(i)}}catch(o){const l=af(o,`Initialization of query '${ui(e.query)}' failed`);return void e.onError(l)}n.queries.set(i,s),s.j_.push(e),e.Z_(n.onlineState),s.z_&&e.X_(s.z_)&&lf(n)}async function lC(t,e){const n=Y(t),r=e.query;let i=3;const s=n.queries.get(r);if(s){const o=s.j_.indexOf(e);o>=0&&(s.j_.splice(o,1),s.j_.length===0?i=e.J_()?0:1:!s.H_()&&e.J_()&&(i=2))}switch(i){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function uC(t,e){const n=Y(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const l of o.j_)l.X_(i)&&(r=!0);o.z_=i}}r&&lf(n)}function cC(t,e,n){const r=Y(t),i=r.queries.get(e);if(i)for(const s of i.j_)s.onError(n);r.queries.delete(e)}function lf(t){t.Y_.forEach(e=>{e.next()})}var Ph,Sg;(Sg=Ph||(Ph={})).ea="default",Sg.Cache="cache";class hC{constructor(e,n,r){this.query=e,this.ta=n,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=r||{}}X_(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new Gi(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.na?this.ia(e)&&(this.ta.next(e),n=!0):this.sa(e,this.onlineState)&&(this.oa(e),n=!0),this.ra=e,n}onError(e){this.ta.error(e)}Z_(e){this.onlineState=e;let n=!1;return this.ra&&!this.na&&this.sa(this.ra,e)&&(this.oa(this.ra),n=!0),n}sa(e,n){if(!e.fromCache||!this.J_())return!0;const r=n!=="Offline";return(!this.options._a||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}ia(e){if(e.docChanges.length>0)return!0;const n=this.ra&&this.ra.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}oa(e){e=Gi.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.na=!0,this.ta.next(e)}J_(){return this.options.source!==Ph.Cache}}/**
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
 */class b0{constructor(e){this.key=e}}class U0{constructor(e){this.key=e}}class dC{constructor(e,n){this.query=e,this.Ta=n,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=ne(),this.mutatedKeys=ne(),this.Aa=o0(e),this.Ra=new Oi(this.Aa)}get Va(){return this.Ta}ma(e,n){const r=n?n.fa:new Tg,i=n?n.Ra:this.Ra;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,l=!1;const u=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,h=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((f,g)=>{const y=i.get(f),k=ru(this.query,g)?g:null,P=!!y&&this.mutatedKeys.has(y.key),D=!!k&&(k.hasLocalMutations||this.mutatedKeys.has(k.key)&&k.hasCommittedMutations);let O=!1;y&&k?y.data.isEqual(k.data)?P!==D&&(r.track({type:3,doc:k}),O=!0):this.ga(y,k)||(r.track({type:2,doc:k}),O=!0,(u&&this.Aa(k,u)>0||h&&this.Aa(k,h)<0)&&(l=!0)):!y&&k?(r.track({type:0,doc:k}),O=!0):y&&!k&&(r.track({type:1,doc:y}),O=!0,(u||h)&&(l=!0)),O&&(k?(o=o.add(k),s=D?s.add(f):s.delete(f)):(o=o.delete(f),s=s.delete(f)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const f=this.query.limitType==="F"?o.last():o.first();o=o.delete(f.key),s=s.delete(f.key),r.track({type:1,doc:f})}return{Ra:o,fa:r,ns:l,mutatedKeys:s}}ga(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,i){const s=this.Ra;this.Ra=e.Ra,this.mutatedKeys=e.mutatedKeys;const o=e.fa.G_();o.sort((f,g)=>function(k,P){const D=O=>{switch(O){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Q()}};return D(k)-D(P)}(f.type,g.type)||this.Aa(f.doc,g.doc)),this.pa(r),i=i!=null&&i;const l=n&&!i?this.ya():[],u=this.da.size===0&&this.current&&!i?1:0,h=u!==this.Ea;return this.Ea=u,o.length!==0||h?{snapshot:new Gi(this.query,e.Ra,s,o,e.mutatedKeys,u===0,h,!1,!!r&&r.resumeToken.approximateByteSize()>0),wa:l}:{wa:l}}Z_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new Tg,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(e){return!this.Ta.has(e)&&!!this.Ra.has(e)&&!this.Ra.get(e).hasLocalMutations}pa(e){e&&(e.addedDocuments.forEach(n=>this.Ta=this.Ta.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ta=this.Ta.delete(n)),this.current=e.current)}ya(){if(!this.current)return[];const e=this.da;this.da=ne(),this.Ra.forEach(r=>{this.Sa(r.key)&&(this.da=this.da.add(r.key))});const n=[];return e.forEach(r=>{this.da.has(r)||n.push(new U0(r))}),this.da.forEach(r=>{e.has(r)||n.push(new b0(r))}),n}ba(e){this.Ta=e.Ts,this.da=ne();const n=this.ma(e.documents);return this.applyChanges(n,!0)}Da(){return Gi.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}}class fC{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class pC{constructor(e){this.key=e,this.va=!1}}class mC{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.Ca={},this.Fa=new ns(l=>s0(l),nu),this.Ma=new Map,this.xa=new Set,this.Oa=new ke(q.comparator),this.Na=new Map,this.La=new Jd,this.Ba={},this.ka=new Map,this.qa=Ki.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function gC(t,e,n=!0){const r=H0(t);let i;const s=r.Fa.get(e);return s?(r.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.Da()):i=await F0(r,e,n,!0),i}async function yC(t,e){const n=H0(t);await F0(n,e,!0,!1)}async function F0(t,e,n,r){const i=await MR(t.localStore,on(e)),s=i.targetId,o=t.sharedClientState.addLocalQueryTarget(s,n);let l;return r&&(l=await _C(t,e,s,o==="current",i.resumeToken)),t.isPrimaryClient&&n&&N0(t.remoteStore,i),l}async function _C(t,e,n,r,i){t.Ka=(g,y,k)=>async function(D,O,I,E){let S=O.view.ma(I);S.ns&&(S=await _g(D.localStore,O.query,!1).then(({documents:w})=>O.view.ma(w,S)));const V=E&&E.targetChanges.get(O.targetId),j=E&&E.targetMismatches.get(O.targetId)!=null,F=O.view.applyChanges(S,D.isPrimaryClient,V,j);return kg(D,O.targetId,F.wa),F.snapshot}(t,g,y,k);const s=await _g(t.localStore,e,!0),o=new dC(e,s.Ts),l=o.ma(s.documents),u=Uo.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),h=o.applyChanges(l,t.isPrimaryClient,u);kg(t,n,h.wa);const f=new fC(e,n,o);return t.Fa.set(e,f),t.Ma.has(n)?t.Ma.get(n).push(e):t.Ma.set(n,[e]),h.snapshot}async function vC(t,e,n){const r=Y(t),i=r.Fa.get(e),s=r.Ma.get(i.targetId);if(s.length>1)return r.Ma.set(i.targetId,s.filter(o=>!nu(o,e))),void r.Fa.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await Ch(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),n&&tf(r.remoteStore,i.targetId),xh(r,i.targetId)}).catch(Lo)):(xh(r,i.targetId),await Ch(r.localStore,i.targetId,!0))}async function wC(t,e){const n=Y(t),r=n.Fa.get(e),i=n.Ma.get(r.targetId);n.isPrimaryClient&&i.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),tf(n.remoteStore,r.targetId))}async function EC(t,e,n){const r=CC(t);try{const i=await function(o,l){const u=Y(o),h=Ue.now(),f=l.reduce((k,P)=>k.add(P.key),ne());let g,y;return u.persistence.runTransaction("Locally write mutations","readwrite",k=>{let P=On(),D=ne();return u.cs.getEntries(k,f).next(O=>{P=O,P.forEach((I,E)=>{E.isValidDocument()||(D=D.add(I))})}).next(()=>u.localDocuments.getOverlayedDocuments(k,P)).next(O=>{g=O;const I=[];for(const E of l){const S=jk(E,g.get(E.key).overlayedDocument);S!=null&&I.push(new Ir(E.key,S,Jv(S.value.mapValue),zt.exists(!0)))}return u.mutationQueue.addMutationBatch(k,h,I,l)}).next(O=>{y=O;const I=O.applyToLocalDocumentSet(g,D);return u.documentOverlayCache.saveOverlays(k,O.batchId,I)})}).then(()=>({batchId:y.batchId,changes:l0(g)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(o,l,u){let h=o.Ba[o.currentUser.toKey()];h||(h=new ke(le)),h=h.insert(l,u),o.Ba[o.currentUser.toKey()]=h}(r,i.batchId,n),await jo(r,i.changes),await uu(r.remoteStore)}catch(i){const s=af(i,"Failed to persist write");n.reject(s)}}async function j0(t,e){const n=Y(t);try{const r=await VR(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.Na.get(s);o&&(he(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.va=!0:i.modifiedDocuments.size>0?he(o.va):i.removedDocuments.size>0&&(he(o.va),o.va=!1))}),await jo(n,r,e)}catch(r){await Lo(r)}}function Ag(t,e,n){const r=Y(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.Fa.forEach((s,o)=>{const l=o.view.Z_(e);l.snapshot&&i.push(l.snapshot)}),function(o,l){const u=Y(o);u.onlineState=l;let h=!1;u.queries.forEach((f,g)=>{for(const y of g.j_)y.Z_(l)&&(h=!0)}),h&&lf(u)}(r.eventManager,e),i.length&&r.Ca.d_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function TC(t,e,n){const r=Y(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.Na.get(e),s=i&&i.key;if(s){let o=new ke(q.comparator);o=o.insert(s,lt.newNoDocument(s,X.min()));const l=ne().add(s),u=new ou(X.min(),new Map,new ke(le),o,l);await j0(r,u),r.Oa=r.Oa.remove(s),r.Na.delete(e),uf(r)}else await Ch(r.localStore,e,!1).then(()=>xh(r,e,n)).catch(Lo)}async function IC(t,e){const n=Y(t),r=e.batch.batchId;try{const i=await DR(n.localStore,e);B0(n,r,null),z0(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await jo(n,i)}catch(i){await Lo(i)}}async function SC(t,e,n){const r=Y(t);try{const i=await function(o,l){const u=Y(o);return u.persistence.runTransaction("Reject batch","readwrite-primary",h=>{let f;return u.mutationQueue.lookupMutationBatch(h,l).next(g=>(he(g!==null),f=g.keys(),u.mutationQueue.removeMutationBatch(h,g))).next(()=>u.mutationQueue.performConsistencyCheck(h)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(h,f,l)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(h,f)).next(()=>u.localDocuments.getDocuments(h,f))})}(r.localStore,e);B0(r,e,n),z0(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await jo(r,i)}catch(i){await Lo(i)}}function z0(t,e){(t.ka.get(e)||[]).forEach(n=>{n.resolve()}),t.ka.delete(e)}function B0(t,e,n){const r=Y(t);let i=r.Ba[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.Ba[r.currentUser.toKey()]=i}}function xh(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Ma.get(e))t.Fa.delete(r),n&&t.Ca.$a(r,n);t.Ma.delete(e),t.isPrimaryClient&&t.La.gr(e).forEach(r=>{t.La.containsKey(r)||$0(t,r)})}function $0(t,e){t.xa.delete(e.path.canonicalString());const n=t.Oa.get(e);n!==null&&(tf(t.remoteStore,n),t.Oa=t.Oa.remove(e),t.Na.delete(n),uf(t))}function kg(t,e,n){for(const r of n)r instanceof b0?(t.La.addReference(r.key,e),AC(t,r)):r instanceof U0?($("SyncEngine","Document no longer in limbo: "+r.key),t.La.removeReference(r.key,e),t.La.containsKey(r.key)||$0(t,r.key)):Q()}function AC(t,e){const n=e.key,r=n.path.canonicalString();t.Oa.get(n)||t.xa.has(r)||($("SyncEngine","New document in limbo: "+n),t.xa.add(r),uf(t))}function uf(t){for(;t.xa.size>0&&t.Oa.size<t.maxConcurrentLimboResolutions;){const e=t.xa.values().next().value;t.xa.delete(e);const n=new q(Te.fromString(e)),r=t.qa.next();t.Na.set(r,new pC(n)),t.Oa=t.Oa.insert(n,r),N0(t.remoteStore,new Zn(on(qd(n.path)),r,"TargetPurposeLimboResolution",jd.oe))}}async function jo(t,e,n){const r=Y(t),i=[],s=[],o=[];r.Fa.isEmpty()||(r.Fa.forEach((l,u)=>{o.push(r.Ka(u,e,n).then(h=>{var f;if((h||n)&&r.isPrimaryClient){const g=h?!h.fromCache:(f=n==null?void 0:n.targetChanges.get(u.targetId))===null||f===void 0?void 0:f.current;r.sharedClientState.updateQueryState(u.targetId,g?"current":"not-current")}if(h){i.push(h);const g=ef.Wi(u.targetId,h);s.push(g)}}))}),await Promise.all(o),r.Ca.d_(i),await async function(u,h){const f=Y(u);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",g=>L.forEach(h,y=>L.forEach(y.$i,k=>f.persistence.referenceDelegate.addReference(g,y.targetId,k)).next(()=>L.forEach(y.Ui,k=>f.persistence.referenceDelegate.removeReference(g,y.targetId,k)))))}catch(g){if(!Mo(g))throw g;$("LocalStore","Failed to update sequence numbers: "+g)}for(const g of h){const y=g.targetId;if(!g.fromCache){const k=f.os.get(y),P=k.snapshotVersion,D=k.withLastLimboFreeSnapshotVersion(P);f.os=f.os.insert(y,D)}}}(r.localStore,s))}async function kC(t,e){const n=Y(t);if(!n.currentUser.isEqual(e)){$("SyncEngine","User change. New user:",e.toKey());const r=await R0(n.localStore,e);n.currentUser=e,function(s,o){s.ka.forEach(l=>{l.forEach(u=>{u.reject(new H(M.CANCELLED,o))})}),s.ka.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await jo(n,r.hs)}}function RC(t,e){const n=Y(t),r=n.Na.get(e);if(r&&r.va)return ne().add(r.key);{let i=ne();const s=n.Ma.get(e);if(!s)return i;for(const o of s){const l=n.Fa.get(o);i=i.unionWith(l.view.Va)}return i}}function H0(t){const e=Y(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=j0.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=RC.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=TC.bind(null,e),e.Ca.d_=uC.bind(null,e.eventManager),e.Ca.$a=cC.bind(null,e.eventManager),e}function CC(t){const e=Y(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=IC.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=SC.bind(null,e),e}class Nl{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=au(e.databaseInfo.databaseId),this.sharedClientState=this.Wa(e),this.persistence=this.Ga(e),await this.persistence.start(),this.localStore=this.za(e),this.gcScheduler=this.ja(e,this.localStore),this.indexBackfillerScheduler=this.Ha(e,this.localStore)}ja(e,n){return null}Ha(e,n){return null}za(e){return NR(this.persistence,new PR,e.initialUser,this.serializer)}Ga(e){return new kR(Zd.Zr,this.serializer)}Wa(e){return new UR}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Nl.provider={build:()=>new Nl};class Nh{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Ag(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=kC.bind(null,this.syncEngine),await iC(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new oC}()}createDatastore(e){const n=au(e.databaseInfo.databaseId),r=function(s){return new BR(s)}(e.databaseInfo);return function(s,o,l,u){return new WR(s,o,l,u)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,i,s,o,l){return new KR(r,i,s,o,l)}(this.localStore,this.datastore,e.asyncQueue,n=>Ag(this.syncEngine,n,0),function(){return wg.D()?new wg:new FR}())}createSyncEngine(e,n){return function(i,s,o,l,u,h,f){const g=new mC(i,s,o,l,u,h);return f&&(g.Qa=!0),g}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(i){const s=Y(i);$("RemoteStore","RemoteStore shutting down."),s.L_.add(5),await Fo(s),s.k_.shutdown(),s.q_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}Nh.provider={build:()=>new Nh};/**
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
 *//**
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
 */class PC{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ya(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ya(this.observer.error,e):Vn("Uncaught Error in snapshot listener:",e.toString()))}Za(){this.muted=!0}Ya(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */class xC{constructor(e,n,r,i,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=ot.UNAUTHENTICATED,this.clientId=Qv.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=s,this.authCredentials.start(r,async o=>{$("FirestoreClient","Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>($("FirestoreClient","Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new jr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=af(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function gc(t,e){t.asyncQueue.verifyOperationInProgress(),$("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await R0(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function Rg(t,e){t.asyncQueue.verifyOperationInProgress();const n=await NC(t);$("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>Eg(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>Eg(e.remoteStore,i)),t._onlineComponents=e}async function NC(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){$("FirestoreClient","Using user provided OfflineComponentProvider");try{await gc(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(i){return i.name==="FirebaseError"?i.code===M.FAILED_PRECONDITION||i.code===M.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(n))throw n;$i("Error using user provided cache. Falling back to memory cache: "+n),await gc(t,new Nl)}}else $("FirestoreClient","Using default OfflineComponentProvider"),await gc(t,new Nl);return t._offlineComponents}async function W0(t){return t._onlineComponents||(t._uninitializedComponentsProvider?($("FirestoreClient","Using user provided OnlineComponentProvider"),await Rg(t,t._uninitializedComponentsProvider._online)):($("FirestoreClient","Using default OnlineComponentProvider"),await Rg(t,new Nh))),t._onlineComponents}function DC(t){return W0(t).then(e=>e.syncEngine)}async function Cg(t){const e=await W0(t),n=e.eventManager;return n.onListen=gC.bind(null,e.syncEngine),n.onUnlisten=vC.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=yC.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=wC.bind(null,e.syncEngine),n}/**
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
 */function q0(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
 */const Pg=new Map;/**
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
 */function K0(t,e,n){if(!n)throw new H(M.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function VC(t,e,n,r){if(e===!0&&r===!0)throw new H(M.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function xg(t){if(!q.isDocumentKey(t))throw new H(M.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Ng(t){if(q.isDocumentKey(t))throw new H(M.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function cf(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":Q()}function ln(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new H(M.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=cf(t);throw new H(M.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */class Dg{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new H(M.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new H(M.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}VC("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=q0((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new H(M.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new H(M.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new H(M.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class cu{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Dg({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new H(M.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new H(M.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Dg(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new KA;switch(r.type){case"firstParty":return new YA(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new H(M.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=Pg.get(n);r&&($("ComponentProvider","Removing Datastore"),Pg.delete(n),r.terminate())}(this),Promise.resolve()}}function OC(t,e,n,r={}){var i;const s=(t=ln(t,cu))._getSettings(),o=`${e}:${n}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&$i("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let l,u;if(typeof r.mockUserToken=="string")l=r.mockUserToken,u=ot.MOCK_USER;else{l=TI(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const h=r.mockUserToken.sub||r.mockUserToken.user_id;if(!h)throw new H(M.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");u=new ot(h)}t._authCredentials=new GA(new Gv(l,u))}}/**
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
 */class hu{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new hu(this.firestore,e,this._query)}}class At{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new fr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new At(this.firestore,e,this._key)}}class fr extends hu{constructor(e,n,r){super(e,n,qd(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new At(this.firestore,null,new q(e))}withConverter(e){return new fr(this.firestore,e,this._path)}}function Ps(t,e,...n){if(t=ht(t),K0("collection","path",e),t instanceof cu){const r=Te.fromString(e,...n);return Ng(r),new fr(t,null,r)}{if(!(t instanceof At||t instanceof fr))throw new H(M.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Te.fromString(e,...n));return Ng(r),new fr(t.firestore,null,r)}}function er(t,e,...n){if(t=ht(t),arguments.length===1&&(e=Qv.newId()),K0("doc","path",e),t instanceof cu){const r=Te.fromString(e,...n);return xg(r),new At(t,null,new q(r))}{if(!(t instanceof At||t instanceof fr))throw new H(M.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Te.fromString(e,...n));return xg(r),new At(t.firestore,t instanceof fr?t.converter:null,new q(r))}}/**
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
 */class Vg{constructor(e=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new P0(this,"async_queue_retry"),this.Vu=()=>{const r=mc();r&&$("AsyncQueue","Visibility state changed to "+r.visibilityState),this.t_.jo()},this.mu=e;const n=mc();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.fu(),this.gu(e)}enterRestrictedMode(e){if(!this.Iu){this.Iu=!0,this.Au=e||!1;const n=mc();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Vu)}}enqueue(e){if(this.fu(),this.Iu)return new Promise(()=>{});const n=new jr;return this.gu(()=>this.Iu&&this.Au?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Pu.push(e),this.pu()))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(e){if(!Mo(e))throw e;$("AsyncQueue","Operation failed with retryable error: "+e)}this.Pu.length>0&&this.t_.Go(()=>this.pu())}}gu(e){const n=this.mu.then(()=>(this.du=!0,e().catch(r=>{this.Eu=r,this.du=!1;const i=function(o){let l=o.message||"";return o.stack&&(l=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),l}(r);throw Vn("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.du=!1,r))));return this.mu=n,n}enqueueAfterDelay(e,n,r){this.fu(),this.Ru.indexOf(e)>-1&&(n=0);const i=of.createAndSchedule(this,e,n,r,s=>this.yu(s));return this.Tu.push(i),i}fu(){this.Eu&&Q()}verifyOperationInProgress(){}async wu(){let e;do e=this.mu,await e;while(e!==this.mu)}Su(e){for(const n of this.Tu)if(n.timerId===e)return!0;return!1}bu(e){return this.wu().then(()=>{this.Tu.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.Tu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.wu()})}Du(e){this.Ru.push(e)}yu(e){const n=this.Tu.indexOf(e);this.Tu.splice(n,1)}}function Og(t){return function(n,r){if(typeof n!="object"||n===null)return!1;const i=n;for(const s of r)if(s in i&&typeof i[s]=="function")return!0;return!1}(t,["next","error","complete"])}class Yr extends cu{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=new Vg,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Vg(e),this._firestoreClient=void 0,await e}}}function LC(t,e){const n=typeof t=="object"?t:ov(),r=typeof t=="string"?t:"(default)",i=xd(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=wI("firestore");s&&OC(i,...s)}return i}function G0(t){if(t._terminated)throw new H(M.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||MC(t),t._firestoreClient}function MC(t){var e,n,r;const i=t._freezeSettings(),s=function(l,u,h,f){return new ck(l,u,h,f.host,f.ssl,f.experimentalForceLongPolling,f.experimentalAutoDetectLongPolling,q0(f.experimentalLongPollingOptions),f.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._componentsProvider||!((n=i.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._componentsProvider={_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider}),t._firestoreClient=new xC(t._authCredentials,t._appCheckCredentials,t._queue,s,t._componentsProvider&&function(l){const u=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(u),_online:u}}(t._componentsProvider))}/**
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
 */class Qi{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Qi(et.fromBase64String(e))}catch(n){throw new H(M.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Qi(et.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class du{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new H(M.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Xe(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class fu{constructor(e){this._methodName=e}}/**
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
 */class hf{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new H(M.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new H(M.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return le(this._lat,e._lat)||le(this._long,e._long)}}/**
 * @license
 * Copyright 2024 Google LLC
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
 */class df{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,i){if(r.length!==i.length)return!1;for(let s=0;s<r.length;++s)if(r[s]!==i[s])return!1;return!0}(this._values,e._values)}}/**
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
 */const bC=/^__.*__$/;class UC{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Ir(e,this.data,this.fieldMask,n,this.fieldTransforms):new bo(e,this.data,n,this.fieldTransforms)}}class Q0{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new Ir(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function X0(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Q()}}class ff{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.vu(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Cu(){return this.settings.Cu}Fu(e){return new ff(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Fu({path:r,xu:!1});return i.Ou(e),i}Nu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Fu({path:r,xu:!1});return i.vu(),i}Lu(e){return this.Fu({path:void 0,xu:!0})}Bu(e){return Dl(e,this.settings.methodName,this.settings.ku||!1,this.path,this.settings.qu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}vu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Ou(this.path.get(e))}Ou(e){if(e.length===0)throw this.Bu("Document fields must not be empty");if(X0(this.Cu)&&bC.test(e))throw this.Bu('Document fields cannot begin and end with "__"')}}class FC{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||au(e)}Qu(e,n,r,i=!1){return new ff({Cu:e,methodName:n,qu:r,path:Xe.emptyPath(),xu:!1,ku:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function pf(t){const e=t._freezeSettings(),n=au(t._databaseId);return new FC(t._databaseId,!!e.ignoreUndefinedProperties,n)}function Y0(t,e,n,r,i,s={}){const o=t.Qu(s.merge||s.mergeFields?2:0,e,n,i);gf("Data must be an object, but it was:",o,r);const l=J0(r,o);let u,h;if(s.merge)u=new xt(o.fieldMask),h=o.fieldTransforms;else if(s.mergeFields){const f=[];for(const g of s.mergeFields){const y=Dh(e,g,n);if(!o.contains(y))throw new H(M.INVALID_ARGUMENT,`Field '${y}' is specified in your field mask but missing from your input data.`);ew(f,y)||f.push(y)}u=new xt(f),h=o.fieldTransforms.filter(g=>u.covers(g.field))}else u=null,h=o.fieldTransforms;return new UC(new wt(l),u,h)}class pu extends fu{_toFieldTransform(e){if(e.Cu!==2)throw e.Cu===1?e.Bu(`${this._methodName}() can only appear at the top level of your update data`):e.Bu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof pu}}class mf extends fu{_toFieldTransform(e){return new Mk(e.path,new To)}isEqual(e){return e instanceof mf}}function jC(t,e,n,r){const i=t.Qu(1,e,n);gf("Data must be an object, but it was:",i,r);const s=[],o=wt.empty();ei(r,(u,h)=>{const f=yf(e,u,n);h=ht(h);const g=i.Nu(f);if(h instanceof pu)s.push(f);else{const y=mu(h,g);y!=null&&(s.push(f),o.set(f,y))}});const l=new xt(s);return new Q0(o,l,i.fieldTransforms)}function zC(t,e,n,r,i,s){const o=t.Qu(1,e,n),l=[Dh(e,r,n)],u=[i];if(s.length%2!=0)throw new H(M.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let y=0;y<s.length;y+=2)l.push(Dh(e,s[y])),u.push(s[y+1]);const h=[],f=wt.empty();for(let y=l.length-1;y>=0;--y)if(!ew(h,l[y])){const k=l[y];let P=u[y];P=ht(P);const D=o.Nu(k);if(P instanceof pu)h.push(k);else{const O=mu(P,D);O!=null&&(h.push(k),f.set(k,O))}}const g=new xt(h);return new Q0(f,g,o.fieldTransforms)}function mu(t,e){if(Z0(t=ht(t)))return gf("Unsupported field value:",e,t),J0(t,e);if(t instanceof fu)return function(r,i){if(!X0(i.Cu))throw i.Bu(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Bu(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.xu&&e.Cu!==4)throw e.Bu("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const l of r){let u=mu(l,i.Lu(o));u==null&&(u={nullValue:"NULL_VALUE"}),s.push(u),o++}return{arrayValue:{values:s}}}(t,e)}return function(r,i){if((r=ht(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return Vk(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=Ue.fromDate(r);return{timestampValue:Pl(i.serializer,s)}}if(r instanceof Ue){const s=new Ue(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Pl(i.serializer,s)}}if(r instanceof hf)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Qi)return{bytesValue:w0(i.serializer,r._byteString)};if(r instanceof At){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.Bu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:Yd(r.firestore._databaseId||i.databaseId,r._key.path)}}if(r instanceof df)return function(o,l){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:o.toArray().map(u=>{if(typeof u!="number")throw l.Bu("VectorValues must only contain numeric values.");return Kd(l.serializer,u)})}}}}}}(r,i);throw i.Bu(`Unsupported field value: ${cf(r)}`)}(t,e)}function J0(t,e){const n={};return Xv(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):ei(t,(r,i)=>{const s=mu(i,e.Mu(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function Z0(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Ue||t instanceof hf||t instanceof Qi||t instanceof At||t instanceof fu||t instanceof df)}function gf(t,e,n){if(!Z0(n)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(n)){const r=cf(n);throw r==="an object"?e.Bu(t+" a custom object"):e.Bu(t+" "+r)}}function Dh(t,e,n){if((e=ht(e))instanceof du)return e._internalPath;if(typeof e=="string")return yf(t,e);throw Dl("Field path arguments must be of type string or ",t,!1,void 0,n)}const BC=new RegExp("[~\\*/\\[\\]]");function yf(t,e,n){if(e.search(BC)>=0)throw Dl(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new du(...e.split("."))._internalPath}catch{throw Dl(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Dl(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let l=`Function ${e}() called with invalid data`;n&&(l+=" (via `toFirestore()`)"),l+=". ";let u="";return(s||o)&&(u+=" (found",s&&(u+=` in field ${r}`),o&&(u+=` in document ${i}`),u+=")"),new H(M.INVALID_ARGUMENT,l+t+u)}function ew(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class tw{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new At(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new $C(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(nw("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class $C extends tw{data(){return super.data()}}function nw(t,e){return typeof e=="string"?yf(t,e):e instanceof du?e._internalPath:e._delegate._internalPath}/**
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
 */function HC(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new H(M.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class WC{convertValue(e,n="none"){switch(Xr(e)){case 0:return null;case 1:return e.booleanValue;case 2:return xe(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Qr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw Q()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return ei(e,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertVectorValue(e){var n,r,i;const s=(i=(r=(n=e.fields)===null||n===void 0?void 0:n.value.arrayValue)===null||r===void 0?void 0:r.values)===null||i===void 0?void 0:i.map(o=>xe(o.doubleValue));return new df(s)}convertGeoPoint(e){return new hf(xe(e.latitude),xe(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=Bd(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(vo(e));default:return null}}convertTimestamp(e){const n=_r(e);return new Ue(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Te.fromString(e);he(k0(r));const i=new wo(r.get(1),r.get(3)),s=new q(r.popFirst(5));return i.isEqual(n)||Vn(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
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
 */function rw(t,e,n){let r;return r=t?t.toFirestore(e):e,r}/**
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
 */class bs{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class iw extends tw{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new qa(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(nw("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class qa extends iw{data(e={}){return super.data(e)}}class qC{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new bs(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new qa(this._firestore,this._userDataWriter,r.key,r,new bs(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new H(M.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(l=>{const u=new qa(i._firestore,i._userDataWriter,l.doc.key,l.doc,new bs(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);return l.doc,{type:"added",doc:u,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(l=>s||l.type!==3).map(l=>{const u=new qa(i._firestore,i._userDataWriter,l.doc.key,l.doc,new bs(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);let h=-1,f=-1;return l.type!==0&&(h=o.indexOf(l.doc.key),o=o.delete(l.doc.key)),l.type!==1&&(o=o.add(l.doc),f=o.indexOf(l.doc.key)),{type:KC(l.type),doc:u,oldIndex:h,newIndex:f}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function KC(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Q()}}class sw extends WC{constructor(e){super(),this.firestore=e}convertBytes(e){return new Qi(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new At(this.firestore,null,n)}}function Lg(t,e,n){t=ln(t,At);const r=ln(t.firestore,Yr),i=rw(t.converter,e);return gu(r,[Y0(pf(r),"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,zt.none())])}function GC(t,e,n,...r){t=ln(t,At);const i=ln(t.firestore,Yr),s=pf(i);let o;return o=typeof(e=ht(e))=="string"||e instanceof du?zC(s,"updateDoc",t._key,e,n,r):jC(s,"updateDoc",t._key,e),gu(i,[o.toMutation(t._key,zt.exists(!0))])}function Vh(t){return gu(ln(t.firestore,Yr),[new Gd(t._key,zt.none())])}function Mg(t,e){const n=ln(t.firestore,Yr),r=er(t),i=rw(t.converter,e);return gu(n,[Y0(pf(t.firestore),"addDoc",r._key,i,t.converter!==null,{}).toMutation(r._key,zt.exists(!1))]).then(()=>r)}function Aa(t,...e){var n,r,i;t=ht(t);let s={includeMetadataChanges:!1,source:"default"},o=0;typeof e[o]!="object"||Og(e[o])||(s=e[o],o++);const l={includeMetadataChanges:s.includeMetadataChanges,source:s.source};if(Og(e[o])){const g=e[o];e[o]=(n=g.next)===null||n===void 0?void 0:n.bind(g),e[o+1]=(r=g.error)===null||r===void 0?void 0:r.bind(g),e[o+2]=(i=g.complete)===null||i===void 0?void 0:i.bind(g)}let u,h,f;if(t instanceof At)h=ln(t.firestore,Yr),f=qd(t._key.path),u={next:g=>{e[o]&&e[o](QC(h,t,g))},error:e[o+1],complete:e[o+2]};else{const g=ln(t,hu);h=ln(g.firestore,Yr),f=g._query;const y=new sw(h);u={next:k=>{e[o]&&e[o](new qC(h,y,g,k))},error:e[o+1],complete:e[o+2]},HC(t._query)}return function(y,k,P,D){const O=new PC(D),I=new hC(k,O,P);return y.asyncQueue.enqueueAndForget(async()=>aC(await Cg(y),I)),()=>{O.Za(),y.asyncQueue.enqueueAndForget(async()=>lC(await Cg(y),I))}}(G0(h),f,l,u)}function gu(t,e){return function(r,i){const s=new jr;return r.asyncQueue.enqueueAndForget(async()=>EC(await DC(r),i,s)),s.promise}(G0(t),e)}function QC(t,e,n){const r=n.docs.get(e._key),i=new sw(t);return new iw(t,i,e._key,r,new bs(n.hasPendingWrites,n.fromCache),e.converter)}function XC(){return new mf("serverTimestamp")}(function(e,n=!0){(function(i){ts=i})(Zi),Bi(new qr("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),l=new Yr(new QA(r.getProvider("auth-internal")),new ZA(r.getProvider("app-check-internal")),function(h,f){if(!Object.prototype.hasOwnProperty.apply(h.options,["projectId"]))throw new H(M.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new wo(h.options.projectId,f)}(o,i),o);return s=Object.assign({useFetchStreams:n},s),l._setSettings(s),l},"PUBLIC").setMultipleInstances(!0)),hr(Ym,"4.7.3",e),hr(Ym,"4.7.3","esm2017")})();const YC={apiKey:"AIzaSyC2J9j3tcBw9lvkTzDPwsf7s3R9zbWLqD8",authDomain:"ptg-smart-queue.firebaseapp.com",projectId:"ptg-smart-queue",storageBucket:"ptg-smart-queue.firebasestorage.app",messagingSenderId:"351203200844",appId:"1:351203200844:web:11ff3e0a7a15539aaa09e9"},JC="AIzaSyC0LAlA62oyRusA9p5-qb26TbKlJI2yl7Y",yu="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/PTG_Energy_Logo.svg/200px-PTG_Energy_Logo.svg.png",yc=new Map;function ZC(t,e=24e3){const n=new ArrayBuffer(44+t.length),r=new DataView(n),i=(s,o)=>{for(let l=0;l<o.length;l++)r.setUint8(s+l,o.charCodeAt(l))};return i(0,"RIFF"),r.setUint32(4,36+t.length,!0),i(8,"WAVE"),i(12,"fmt "),r.setUint32(16,16,!0),r.setUint16(20,1,!0),r.setUint16(22,1,!0),r.setUint32(24,e,!0),r.setUint32(28,e*2,!0),r.setUint16(32,2,!0),r.setUint16(34,16,!0),i(36,"data"),r.setUint32(40,t.length,!0),new Uint8Array(n,44).set(new Uint8Array(t)),new Blob([n],{type:"audio/wav"})}const eP=Z.memo(({navigateTo:t})=>x.jsx("div",{className:"min-h-screen bg-gradient-to-br from-green-50 to-teal-100 flex items-center justify-center p-4",children:x.jsxs("div",{className:"max-w-4xl w-full text-center bg-white/40 backdrop-blur-xl p-12 rounded-[3rem] shadow-2xl border border-white/50",children:[x.jsx("img",{src:yu,style:{height:"150px",margin:"0 auto 32px"},alt:"Logo"}),x.jsx("h1",{className:"text-6xl font-black text-emerald-900 mb-4 tracking-tight",children:"PTG Smart Queue"}),x.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-8 mt-12",children:[x.jsxs("button",{onClick:()=>t("kiosk"),className:"bg-white p-8 rounded-[2rem] shadow-xl hover:shadow-emerald-200/50 transition-all group border-b-8 border-emerald-500",children:[x.jsx(dI,{size:48,className:"mx-auto text-emerald-500 mb-4"}),x.jsx("h2",{className:"text-xl font-bold text-gray-800",children:"Kiosk"})]}),x.jsxs("button",{onClick:()=>t("tv"),className:"bg-white p-8 rounded-[2rem] shadow-xl hover:shadow-teal-200/50 transition-all group border-b-8 border-teal-500",children:[x.jsx(cI,{size:48,className:"mx-auto text-teal-500 mb-4"}),x.jsx("h2",{className:"text-xl font-bold text-gray-800",children:"TV Display"})]}),x.jsxs("button",{onClick:()=>t("admin"),className:"bg-white p-8 rounded-[2rem] shadow-xl hover:shadow-green-200/50 transition-all group border-b-8 border-green-600",children:[x.jsx(hI,{size:48,className:"mx-auto text-green-600 mb-4"}),x.jsx("h2",{className:"text-xl font-bold text-gray-800",children:"Admin"})]})]})]})})),tP=({findTrip:t,addToQueue:e,navigateTo:n})=>{const[r,i]=Z.useState("internal"),[s,o]=Z.useState({plate:"",name:"",comp:"",b7:"",g91:"",e20:"",g95:""}),l=Z.useMemo(()=>t(s.plate),[s.plate,t]),u=h=>{h.preventDefault();const f={type:r,plateNumber:r==="internal"?(l==null?void 0:l.plate)||s.plate:s.name,station:r==="internal"&&(l==null?void 0:l.station)||"-",depot:r==="internal"&&(l==null?void 0:l.depot)||"-",company:r==="external"?s.comp:"",name:s.name,sourceTrip:r==="internal"&&l?{sheetId:l.sheetId,rowId:l.rowId}:null};if(r==="external"){const g=[];s.b7&&g.push(`B7:${s.b7}`),s.g91&&g.push(`91:${s.g91}`),f.fuelList=g.join(", ")||"-"}e(f),o({plate:"",name:"",comp:"",b7:"",g91:"",e20:"",g95:""})};return x.jsxs("div",{className:"min-h-screen bg-emerald-50 flex flex-col items-center justify-center p-4",children:[x.jsxs("div",{className:"bg-white p-10 rounded-[2.5rem] shadow-2xl w-full max-w-2xl text-center border border-emerald-100",children:[x.jsx("img",{src:yu,style:{height:"80px",margin:"0 auto 20px"}}),x.jsx("h2",{className:"text-2xl font-black text-emerald-800 mb-6 uppercase",children:"ลงทะเบียน"}),x.jsxs("div",{className:"flex bg-gray-50 border-b mb-6",children:[x.jsx("button",{onClick:()=>i("internal"),className:`flex-1 py-4 font-bold ${r==="internal"?"bg-emerald-600 text-white":"text-emerald-800"}`,children:"ภายใน"}),x.jsx("button",{onClick:()=>i("external"),className:`flex-1 py-4 font-bold ${r==="external"?"bg-teal-600 text-white":"text-teal-800"}`,children:"ภายนอก"})]}),x.jsxs("form",{onSubmit:u,className:"space-y-6 text-left",children:[r==="internal"?x.jsxs("div",{children:[x.jsx("input",{className:"w-full p-6 border-4 border-emerald-50 rounded-2xl text-4xl font-black text-center outline-none",value:s.plate,onChange:h=>o({...s,plate:h.target.value}),required:!0,placeholder:"เบอร์รถ"}),l&&x.jsxs("div",{className:"mt-4 p-4 bg-emerald-100 text-emerald-800 rounded-xl",children:[x.jsx("p",{className:"font-bold text-xl",children:l.plate}),x.jsx("p",{children:l.station})]})]}):x.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[x.jsx("input",{className:"border p-3 rounded-xl",placeholder:"ทะเบียน",value:s.name,onChange:h=>o({...s,name:h.target.value}),required:!0}),x.jsx("input",{className:"border p-3 rounded-xl",placeholder:"บริษัท",value:s.comp,onChange:h=>o({...s,comp:h.target.value}),required:!0})]}),x.jsx("button",{className:"w-full py-6 bg-emerald-600 text-white text-2xl font-bold rounded-2xl shadow-lg",children:"ออกบัตรคิว"})]})]}),x.jsxs("button",{onClick:()=>n("home"),className:"mt-8 text-emerald-600 font-bold flex gap-2",children:[x.jsx(lI,{})," กลับ"]})]})},nP=({queues:t,youtubeConfig:e,iframeRef:n})=>{var o,l;const r=t.filter(u=>u.status==="called").slice(0,3),i=t.filter(u=>u.status==="waiting").slice(0,10),s=((l=(o=e.playlist)==null?void 0:o[0])==null?void 0:l.id)||"jfKfPfyJRdk";return x.jsxs("div",{className:"h-screen bg-slate-950 text-white flex flex-col font-sans overflow-hidden relative",children:[x.jsxs("div",{className:"bg-emerald-900 p-4 flex justify-between items-center shadow-lg z-10 border-b-4 border-emerald-600",children:[x.jsxs("div",{className:"flex items-center gap-4",children:[x.jsx("img",{src:yu,style:{height:"60px"},className:"bg-white p-1 rounded-lg"}),x.jsx("h1",{className:"text-4xl font-black italic",children:"คิวรับน้ำมัน"})]}),x.jsxs("div",{className:"text-4xl font-mono bg-black/30 px-6 py-2 rounded-xl text-emerald-300",children:[x.jsx(aI,{className:"inline mr-3",size:36}),new Date().toLocaleTimeString("th-TH",{hour:"2-digit",minute:"2-digit"})]})]}),x.jsxs("div",{className:"flex-1 flex overflow-hidden",children:[x.jsxs("div",{className:"w-5/12 p-6 flex flex-col gap-4 bg-slate-900 border-r border-white/10",children:[x.jsxs("div",{className:"flex-1 space-y-4",children:[x.jsxs("h2",{className:"text-3xl font-black text-yellow-400 animate-pulse flex items-center gap-2",children:[x.jsx(X_,{})," กำลังเรียก"]}),r.map((u,h)=>x.jsxs("div",{className:`p-6 rounded-2xl border-l-[10px] flex flex-col justify-center shadow-xl ${h===0?"bg-emerald-900 border-yellow-400 scale-105":"bg-slate-800 border-slate-600 opacity-70"}`,children:[x.jsxs("div",{className:"flex justify-between items-center",children:[x.jsx("div",{className:"text-6xl font-black",children:u.type==="internal"?u.plateNumber:u.name}),x.jsx("div",{className:"text-xl bg-yellow-500 text-black px-4 py-1 rounded-full font-bold",children:"เชิญครับ"})]}),x.jsx("div",{className:"text-2xl text-emerald-300 text-right mt-2",children:u.type==="internal"?u.station:u.company})]},u.id))]}),x.jsxs("div",{className:"h-1/3 pt-4 border-t border-white/10",children:[x.jsx("h3",{className:"text-xl font-bold text-gray-400 mb-2",children:"คิวรอถัดไป"}),x.jsx("div",{className:"grid grid-cols-2 gap-2",children:i.map(u=>x.jsxs("div",{className:"bg-slate-800 p-3 rounded-xl flex justify-between items-center",children:[x.jsx("span",{className:"text-xl font-bold",children:u.plateNumber||u.name}),x.jsx("span",{className:"text-xs text-gray-400",children:u.station})]},u.id))})]})]}),x.jsxs("div",{className:"w-7/12 bg-black relative",children:[x.jsx("iframe",{ref:n,className:"w-full h-full",src:`https://www.youtube.com/embed/${s}?enablejsapi=1&autoplay=1&mute=0&controls=0&loop=1&playlist=${s}`,allow:"autoplay; encrypted-media"}),x.jsx("div",{className:"absolute bottom-0 w-full bg-red-700 py-4 text-white overflow-hidden whitespace-nowrap",children:x.jsx("div",{className:"animate-marquee text-3xl font-bold inline-block",children:"📢 เตรียมเอกสารให้พร้อม... ขับขี่ปลอดภัย... PTG Energy ยินดีให้บริการ..."})})]})]}),x.jsx("style",{children:".animate-marquee { animation: marquee 30s linear infinite; display: inline-block; } @keyframes marquee { 0% { transform: translateX(100%); } 100% { transform: translateX(-100%); } }"})]})},rP=({adminTab:t,setAdminTab:e,queues:n,callQueueAction:r,db:i,appId:s,sheets:o,activeSheetId:l,setActiveSheetId:u,youtubeConfig:h,history:f,voices:g,selectedVoiceURI:y,handleVoiceSelect:k,speak:P,isAiSpeaking:D,navigateTo:O,completeQueue:I,deleteHistory:E,loadVoices:S,useAiVoice:V,setUseAiVoice:j,selectedAiVoice:F,setSelectedAiVoice:w})=>{const m=()=>x.jsxs("div",{className:"space-y-6",children:[x.jsxs("div",{className:"flex justify-between items-center bg-white p-6 rounded-3xl shadow-sm border border-emerald-100",children:[x.jsxs("h2",{className:"text-2xl font-black text-emerald-900",children:["Queue Control (",n.length,")"]}),x.jsxs("div",{className:"flex items-center gap-4",children:[x.jsxs("label",{className:"text-xs font-bold text-gray-500 flex items-center gap-2 cursor-pointer",children:[x.jsx("input",{type:"checkbox",checked:V,onChange:_=>j(_.target.checked),className:"w-4 h-4 accent-emerald-600"})," ใช้เสียง AI (Gemini)"]}),V&&x.jsxs("select",{className:"border p-2 rounded text-sm bg-white",value:F,onChange:_=>w(_.target.value),children:[x.jsx("option",{value:"Aoede",children:"Aoede (หญิง)"}),x.jsx("option",{value:"Kore",children:"Kore (ชาย)"}),x.jsx("option",{value:"Zephyr",children:"Zephyr (เข้ม)"})]}),x.jsx("button",{onClick:()=>P("ทดสอบระบบเสียง"),className:"bg-emerald-100 text-emerald-700 p-2 rounded-lg text-xs font-bold hover:bg-emerald-200",disabled:D,children:"Test Sound"})]})]}),x.jsx("div",{className:"grid grid-cols-1 gap-4",children:n.map(_=>x.jsxs("div",{className:`bg-white p-6 rounded-2xl shadow border-l-8 flex justify-between items-center ${_.status==="called"?"border-emerald-500 bg-emerald-50":"border-gray-200"}`,children:[x.jsxs("div",{children:[x.jsxs("div",{className:"text-4xl font-black",children:[_.queueNumber," - ",_.plateNumber||_.name]}),x.jsx("div",{className:"text-gray-500",children:_.station||_.company})]}),x.jsxs("div",{className:"flex gap-2",children:[x.jsx("button",{onClick:()=>r(_),className:"bg-emerald-600 text-white p-4 rounded-xl shadow hover:scale-105 transition",children:x.jsx(X_,{size:24})}),x.jsx("button",{onClick:()=>Vh(er(i,"artifacts",s,"public","data","queues",_.id)),className:"bg-red-100 text-red-500 p-4 rounded-xl",children:x.jsx(Tm,{size:24})})]})]},_.id))})]}),v=()=>{var Lt,ge;const _=Z.useRef(),Fe=U=>{const W=U.target.files[0];if(!W||!window.XLSX)return;const K=new FileReader;K.onload=ue=>{try{const re=window.XLSX.read(new Uint8Array(ue.target.result),{type:"array"}),de=re.SheetNames.map((Re,_t)=>{const kt=window.XLSX.utils.sheet_to_json(re.Sheets[Re],{header:1});let dt=[],Sr=[],Ar=!1;return kt.forEach(hn=>{const Mt=Array.isArray(hn)?hn.map(J=>J?String(J).trim():""):[];if(!Ar&&(Mt.includes("Trip No.")||Mt.includes("ชื่อลูกค้า"))){Ar=!0,dt=Mt;return}Ar&&Mt.join("")&&Sr.push({id:Date.now()+Math.random(),cells:dt.map((J,te)=>Mt[te]||"")})}),Sr.length>0?{id:"s"+Date.now()+_t,name:Re,headers:dt,rows:Sr}:null}).filter(Boolean);de.length&&de.forEach(Re=>Lg(er(i,"artifacts",s,"public","data","sheets",Re.id),Re)),alert("นำเข้าสำเร็จ!")}catch{alert("Excel Error")}},K.readAsArrayBuffer(W)},je=o.find(U=>U.id===l)||o[0];return x.jsxs("div",{className:"bg-white p-8 rounded-3xl shadow",children:[x.jsxs("div",{className:"flex justify-between mb-4",children:[x.jsx("h2",{className:"text-xl font-bold",children:"ข้อมูลเที่ยวรถ"}),x.jsxs("div",{className:"flex gap-2",children:[x.jsx("input",{type:"file",ref:_,hidden:!0,onChange:Fe}),x.jsx("button",{onClick:()=>_.current.click(),className:"bg-blue-600 text-white px-4 py-2 rounded-lg",children:"Import"})]})]}),x.jsx("div",{className:"flex gap-2 mb-4 overflow-x-auto",children:o.map(U=>x.jsx("button",{onClick:()=>u(U.id),className:"px-4 py-2 border rounded-lg",children:U.name},U.id))}),x.jsx("div",{className:"overflow-auto border rounded-xl h-[500px]",children:x.jsxs("table",{className:"w-full text-sm text-left",children:[x.jsx("thead",{className:"bg-gray-100 sticky top-0",children:x.jsx("tr",{children:(Lt=je==null?void 0:je.headers)==null?void 0:Lt.map(U=>x.jsx("th",{className:"p-3",children:U},U))})}),x.jsx("tbody",{children:(ge=je==null?void 0:je.rows)==null?void 0:ge.map(U=>x.jsx("tr",{className:"border-b",children:U.cells.map((W,K)=>x.jsx("td",{className:"p-3",children:W},K))},U.id))})]})})]})},T=()=>{var Lt;const[_,Fe]=Z.useState(""),je=ge=>Lg(er(i,"artifacts",s,"public","data","config","youtube"),ge);return x.jsxs("div",{className:"bg-white p-8 rounded-3xl shadow",children:[x.jsx("h2",{className:"text-xl font-bold mb-4",children:"วิดีโอ TV"}),x.jsxs("div",{className:"flex gap-2 mb-4",children:[x.jsx("input",{className:"flex-1 border p-2 rounded",value:_,onChange:ge=>Fe(ge.target.value),placeholder:"Link"}),x.jsx("button",{onClick:()=>{var U;const ge=(U=_.match(/(?:youtu\.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/))==null?void 0:U[1];(ge==null?void 0:ge.length)===11&&je({...h,playlist:[...h.playlist||[],{id:ge,url:_}]})},className:"bg-blue-600 text-white px-4 rounded",children:"Add"})]}),x.jsx("div",{className:"grid grid-cols-4 gap-4",children:(Lt=h.playlist)==null?void 0:Lt.map(ge=>x.jsxs("div",{className:"relative",children:[x.jsx("img",{src:`https://img.youtube.com/vi/${ge.id}/mqdefault.jpg`,className:"w-full rounded-xl"}),x.jsx("button",{onClick:()=>je({...h,playlist:h.playlist.filter(U=>U.id!==ge.id)}),className:"absolute top-1 right-1 bg-white rounded-full p-1 text-red-500",children:x.jsx(Tm,{size:16})})]},ge.id))})]})},A=()=>x.jsxs("div",{className:"bg-white p-10 rounded-3xl shadow text-center",children:[x.jsx(oI,{className:"mx-auto text-emerald-500 mb-4",size:48}),x.jsx("h2",{className:"text-xl font-bold text-gray-500",children:"รายงานสถิติ (พร้อมใช้งาน)"})]}),R=()=>x.jsxs("div",{className:"bg-white p-10 rounded-3xl shadow",children:[x.jsxs("div",{className:"flex justify-between mb-4",children:[x.jsx("h2",{className:"text-xl font-bold",children:"ประวัติ"}),x.jsx("button",{onClick:E,className:"text-red-500",children:"ล้าง"})]}),x.jsxs("table",{className:"w-full text-left",children:[x.jsx("thead",{children:x.jsxs("tr",{className:"border-b",children:[x.jsx("th",{children:"เวลา"}),x.jsx("th",{children:"คิว"}),x.jsx("th",{children:"รายละเอียด"})]})}),x.jsx("tbody",{children:f.map(_=>x.jsxs("tr",{className:"border-b",children:[x.jsx("td",{className:"p-3",children:new Date(_.timestamp).toLocaleString()}),x.jsx("td",{className:"font-bold",children:_.queueNumber}),x.jsx("td",{children:_.type==="internal"?_.plateNumber:_.name})]},_.id))})]})]});return x.jsxs("div",{className:"min-h-screen bg-gray-50 flex flex-col font-sans",children:[x.jsxs("header",{className:"bg-white border-b-4 border-emerald-500 sticky top-0 z-50 px-6 py-4 flex justify-between items-center shadow-lg",children:[x.jsxs("div",{className:"flex items-center gap-4 cursor-pointer",onClick:()=>O("home"),children:[x.jsx("img",{src:yu,style:{height:"36px"},alt:"Logo"}),x.jsx("h1",{className:"text-2xl font-black text-emerald-900",children:"ADMIN"})]}),x.jsx("div",{className:"flex gap-2 bg-gray-100 p-1 rounded-2xl",children:["dashboard","trips","youtube","stats","history"].map(_=>x.jsx("button",{onClick:()=>e(_),className:`px-4 py-2 rounded-xl font-bold ${t===_?"bg-emerald-600 text-white":"text-gray-500"}`,children:_.toUpperCase()},_))}),x.jsx("button",{onClick:()=>O("home"),className:"text-red-500",children:x.jsx(uI,{})})]}),x.jsxs("main",{className:"flex-1 p-8 max-w-7xl mx-auto w-full",children:[t==="dashboard"&&x.jsx(m,{}),t==="trips"&&x.jsx(v,{}),t==="youtube"&&x.jsx(T,{}),t==="stats"&&x.jsx(A,{}),t==="history"&&x.jsx(R,{})]})]})};function iP(){const[t,e]=Z.useState(!1),[n,r]=Z.useState(null),[i,s]=Z.useState(null),[o]=Z.useState("main-station"),[l,u]=Z.useState("home"),[h,f]=Z.useState("dashboard"),[g,y]=Z.useState([]),[k,P]=Z.useState([]),[D,O]=Z.useState([]),[I,E]=Z.useState("default"),[S,V]=Z.useState({mode:"sequential",playlist:[]}),[j,F]=Z.useState(!1),[w,m]=Z.useState("Kore"),[v,T]=Z.useState(""),[A,R]=Z.useState([]),[_,Fe]=Z.useState(""),[je,Lt]=Z.useState(.8),[ge,U]=Z.useState(1),[W,K]=Z.useState(!0),ue=Z.useRef(null),re=Z.useCallback(J=>{window.location.hash=`#/${J}`},[]);Z.useEffect(()=>{if(!window.XLSX){const te=document.createElement("script");te.src="https://cdn.sheetjs.com/xlsx-0.20.1/package/dist/xlsx.full.min.js",te.async=!0,document.body.appendChild(te)}const J=()=>{const fe=window.location.hash.replace("#/","").replace("#","").split("/"),pe=fe[0]||"home";["kiosk","tv"].includes(pe)?u(pe):pe==="admin"||["dashboard","trips","stats","youtube","history"].includes(pe)?(u("admin"),f(fe[1]||(pe!=="admin"?pe:"dashboard"))):u("home")};J(),window.addEventListener("hashchange",J);try{const te=sv(YC),fe=WA(te),pe=LC(te);s(pe),C1(fe),O1(fe,Oe=>{Oe&&(r(Oe),e(!0))})}catch{e(!0)}return()=>window.removeEventListener("hashchange",J)},[]),Z.useEffect(()=>{if(!n||!i)return;const J=te=>({id:te.id,...te.data()});Aa(Ps(i,"artifacts",o,"public","data","queues"),te=>{y(te.docs.map(J).sort((fe,pe)=>{var Oe,qe;return(((Oe=fe.createdAt)==null?void 0:Oe.toMillis())||0)-(((qe=pe.createdAt)==null?void 0:qe.toMillis())||0)}))}),Aa(Ps(i,"artifacts",o,"public","data","history"),te=>{P(te.docs.map(J).sort((fe,pe)=>new Date(pe.completedAt)-new Date(fe.completedAt)))}),Aa(Ps(i,"artifacts",o,"public","data","sheets"),te=>{const fe=te.docs.map(J);fe.length>0&&(O(fe),E(pe=>fe.find(Oe=>Oe.id===pe)?pe:fe[0].id))}),Aa(er(i,"artifacts",o,"public","data","config","youtube"),te=>{te.exists()&&V(te.data())})},[n,i,o]);const de=Z.useCallback(()=>{const J=window.speechSynthesis.getVoices();J.length>0&&R(J)},[]);Z.useEffect(()=>{window.speechSynthesis.onvoiceschanged=de,de()},[de]);const Re=Z.useCallback(J=>{ue.current&&ue.current.contentWindow&&ue.current.contentWindow.postMessage(JSON.stringify({event:"command",func:"setVolume",args:[J]}),"*")},[]),_t=async J=>{var pe,Oe,qe,zo,is,ni;if(!J||j)return;const te=`${w}_${J}`,fe=dn=>{F(!0),Re(10);const ss=new Audio(dn);ss.onended=()=>{F(!1),Re(100)},ss.play().catch(()=>{F(!1),Re(100)})};if(yc.has(te)){fe(yc.get(te));return}if(!W){window.speechSynthesis.cancel();const dn=new SpeechSynthesisUtterance(J);dn.lang="th-TH",window.speechSynthesis.speak(dn);return}F(!0),Re(10);try{const ri=(ni=(is=(zo=(qe=(Oe=(pe=(await(await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-tts:generateContent?key=${JC}`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({contents:[{parts:[{text:J}]}],generationConfig:{responseModalities:["AUDIO"],speechConfig:{voiceConfig:{prebuiltVoiceConfig:{voiceName:w}}}}})})).json()).candidates)==null?void 0:pe[0])==null?void 0:Oe.content)==null?void 0:qe.parts)==null?void 0:zo.find(fn=>fn.inlineData))==null?void 0:is.inlineData)==null?void 0:ni.data;if(ri){const fn=window.atob(ri),os=new Uint8Array(fn.length);for(let pn=0;pn<fn.length;pn++)os[pn]=fn.charCodeAt(pn);const ze=ZC(os),Be=URL.createObjectURL(ze);yc.set(te,Be),fe(Be)}else F(!1),Re(100)}catch{F(!1),Re(100)}},kt=Z.useCallback(J=>{const te=(J==null?void 0:J.trim().toLowerCase())||"";if(!te)return null;for(const fe of D){const pe=fe.headers.findIndex(qe=>qe==null?void 0:qe.includes("เบอร์รถ"))>-1?fe.headers.findIndex(qe=>qe==null?void 0:qe.includes("เบอร์รถ")):2,Oe=fe.rows.find(qe=>String(qe.cells[pe]||"").toLowerCase().includes(te));if(Oe)return{plate:Oe.cells[pe],station:Oe.cells[1],depot:Oe.cells[4],sheetId:fe.id,rowId:Oe.id}}return null},[D]),dt=(J,te)=>{Mg(Ps(i,"artifacts",o,"public","data","queues"),{...te,createdAt:XC(),timestamp:new Date().toISOString(),status:"waiting",statusText:"รอเรียกคิว"}),alert("จองคิวสำเร็จ!")},Sr=async J=>{var pe;const fe=`เชิญรถเบอร์ ${(J.plateNumber||"").split("-")[0]} ปลายทาง ${(pe=J.station)==null?void 0:pe.split("-")[0]} รับตั๋วครับ`;await _t(fe),await GC(er(i,"artifacts",o,"public","data","queues",J.id),{status:"called",calledAt:new Date().toISOString()})},Ar=async J=>{i&&(await Mg(Ps(i,"artifacts",o,"public","data","history"),{...J,completedAt:new Date().toISOString()}),await Vh(er(i,"artifacts",o,"public","data","queues",J.id)))},hn=async()=>{confirm("ยืนยันล้างประวัติทั้งหมด?")&&k.forEach(J=>Vh(er(i,"artifacts",o,"public","data","history",J.id)))},Mt=J=>{Fe(J.target.value)};return t?l==="kiosk"?x.jsx(tP,{findTrip:kt,onQueue:dt,navigateTo:re}):l==="tv"?x.jsx(nP,{queues:g,youtubeConfig:S,iframeRef:ue}):l==="admin"?x.jsx(rP,{adminTab:h,setAdminTab:f,queues:g,callQueueAction:Sr,db:i,appId:o,sheets:D,activeSheetId:I,setActiveSheetId:E,youtubeConfig:S,history:k,navigateTo:re,useAiVoice:W,setUseAiVoice:K,selectedAiVoice:w,setSelectedAiVoice:m,speak:_t,isAiSpeaking:j,voices:A,selectedVoiceURI:_,handleVoiceSelect:Mt,completeQueue:Ar,deleteHistory:hn}):x.jsx(eP,{navigateTo:re}):x.jsx("div",{className:"h-screen flex items-center justify-center bg-emerald-50 text-emerald-600 font-bold text-2xl animate-pulse",children:"LOADING SYSTEM..."})}Q_(document.getElementById("root")).render(x.jsx(Z.StrictMode,{children:x.jsx(iP,{})}));
