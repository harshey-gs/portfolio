(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const c of a)if(c.type==="childList")for(const u of c.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&r(u)}).observe(document,{childList:!0,subtree:!0});function n(a){const c={};return a.integrity&&(c.integrity=a.integrity),a.referrerPolicy&&(c.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?c.credentials="include":a.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function r(a){if(a.ep)return;a.ep=!0;const c=n(a);fetch(a.href,c)}})();function mg(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var Ou={exports:{}},ra={},Bu={exports:{}},St={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var rm;function Ex(){if(rm)return St;rm=1;var s=Symbol.for("react.element"),e=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),c=Symbol.for("react.provider"),u=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),g=Symbol.for("react.memo"),_=Symbol.for("react.lazy"),x=Symbol.iterator;function y(M){return M===null||typeof M!="object"?null:(M=x&&M[x]||M["@@iterator"],typeof M=="function"?M:null)}var E={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},T=Object.assign,P={};function S(M,k,J){this.props=M,this.context=k,this.refs=P,this.updater=J||E}S.prototype.isReactComponent={},S.prototype.setState=function(M,k){if(typeof M!="object"&&typeof M!="function"&&M!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,M,k,"setState")},S.prototype.forceUpdate=function(M){this.updater.enqueueForceUpdate(this,M,"forceUpdate")};function v(){}v.prototype=S.prototype;function U(M,k,J){this.props=M,this.context=k,this.refs=P,this.updater=J||E}var L=U.prototype=new v;L.constructor=U,T(L,S.prototype),L.isPureReactComponent=!0;var A=Array.isArray,Q=Object.prototype.hasOwnProperty,O={current:null},B={key:!0,ref:!0,__self:!0,__source:!0};function Z(M,k,J){var z,W={},te=null,K=null;if(k!=null)for(z in k.ref!==void 0&&(K=k.ref),k.key!==void 0&&(te=""+k.key),k)Q.call(k,z)&&!B.hasOwnProperty(z)&&(W[z]=k[z]);var ue=arguments.length-2;if(ue===1)W.children=J;else if(1<ue){for(var he=Array(ue),Me=0;Me<ue;Me++)he[Me]=arguments[Me+2];W.children=he}if(M&&M.defaultProps)for(z in ue=M.defaultProps,ue)W[z]===void 0&&(W[z]=ue[z]);return{$$typeof:s,type:M,key:te,ref:K,props:W,_owner:O.current}}function I(M,k){return{$$typeof:s,type:M.type,key:k,ref:M.ref,props:M.props,_owner:M._owner}}function D(M){return typeof M=="object"&&M!==null&&M.$$typeof===s}function G(M){var k={"=":"=0",":":"=2"};return"$"+M.replace(/[=:]/g,function(J){return k[J]})}var ae=/\/+/g;function ie(M,k){return typeof M=="object"&&M!==null&&M.key!=null?G(""+M.key):k.toString(36)}function ve(M,k,J,z,W){var te=typeof M;(te==="undefined"||te==="boolean")&&(M=null);var K=!1;if(M===null)K=!0;else switch(te){case"string":case"number":K=!0;break;case"object":switch(M.$$typeof){case s:case e:K=!0}}if(K)return K=M,W=W(K),M=z===""?"."+ie(K,0):z,A(W)?(J="",M!=null&&(J=M.replace(ae,"$&/")+"/"),ve(W,k,J,"",function(Me){return Me})):W!=null&&(D(W)&&(W=I(W,J+(!W.key||K&&K.key===W.key?"":(""+W.key).replace(ae,"$&/")+"/")+M)),k.push(W)),1;if(K=0,z=z===""?".":z+":",A(M))for(var ue=0;ue<M.length;ue++){te=M[ue];var he=z+ie(te,ue);K+=ve(te,k,J,he,W)}else if(he=y(M),typeof he=="function")for(M=he.call(M),ue=0;!(te=M.next()).done;)te=te.value,he=z+ie(te,ue++),K+=ve(te,k,J,he,W);else if(te==="object")throw k=String(M),Error("Objects are not valid as a React child (found: "+(k==="[object Object]"?"object with keys {"+Object.keys(M).join(", ")+"}":k)+"). If you meant to render a collection of children, use an array instead.");return K}function ge(M,k,J){if(M==null)return M;var z=[],W=0;return ve(M,z,"","",function(te){return k.call(J,te,W++)}),z}function de(M){if(M._status===-1){var k=M._result;k=k(),k.then(function(J){(M._status===0||M._status===-1)&&(M._status=1,M._result=J)},function(J){(M._status===0||M._status===-1)&&(M._status=2,M._result=J)}),M._status===-1&&(M._status=0,M._result=k)}if(M._status===1)return M._result.default;throw M._result}var pe={current:null},j={transition:null},me={ReactCurrentDispatcher:pe,ReactCurrentBatchConfig:j,ReactCurrentOwner:O};function C(){throw Error("act(...) is not supported in production builds of React.")}return St.Children={map:ge,forEach:function(M,k,J){ge(M,function(){k.apply(this,arguments)},J)},count:function(M){var k=0;return ge(M,function(){k++}),k},toArray:function(M){return ge(M,function(k){return k})||[]},only:function(M){if(!D(M))throw Error("React.Children.only expected to receive a single React element child.");return M}},St.Component=S,St.Fragment=n,St.Profiler=a,St.PureComponent=U,St.StrictMode=r,St.Suspense=p,St.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=me,St.act=C,St.cloneElement=function(M,k,J){if(M==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+M+".");var z=T({},M.props),W=M.key,te=M.ref,K=M._owner;if(k!=null){if(k.ref!==void 0&&(te=k.ref,K=O.current),k.key!==void 0&&(W=""+k.key),M.type&&M.type.defaultProps)var ue=M.type.defaultProps;for(he in k)Q.call(k,he)&&!B.hasOwnProperty(he)&&(z[he]=k[he]===void 0&&ue!==void 0?ue[he]:k[he])}var he=arguments.length-2;if(he===1)z.children=J;else if(1<he){ue=Array(he);for(var Me=0;Me<he;Me++)ue[Me]=arguments[Me+2];z.children=ue}return{$$typeof:s,type:M.type,key:W,ref:te,props:z,_owner:K}},St.createContext=function(M){return M={$$typeof:u,_currentValue:M,_currentValue2:M,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},M.Provider={$$typeof:c,_context:M},M.Consumer=M},St.createElement=Z,St.createFactory=function(M){var k=Z.bind(null,M);return k.type=M,k},St.createRef=function(){return{current:null}},St.forwardRef=function(M){return{$$typeof:f,render:M}},St.isValidElement=D,St.lazy=function(M){return{$$typeof:_,_payload:{_status:-1,_result:M},_init:de}},St.memo=function(M,k){return{$$typeof:g,type:M,compare:k===void 0?null:k}},St.startTransition=function(M){var k=j.transition;j.transition={};try{M()}finally{j.transition=k}},St.unstable_act=C,St.useCallback=function(M,k){return pe.current.useCallback(M,k)},St.useContext=function(M){return pe.current.useContext(M)},St.useDebugValue=function(){},St.useDeferredValue=function(M){return pe.current.useDeferredValue(M)},St.useEffect=function(M,k){return pe.current.useEffect(M,k)},St.useId=function(){return pe.current.useId()},St.useImperativeHandle=function(M,k,J){return pe.current.useImperativeHandle(M,k,J)},St.useInsertionEffect=function(M,k){return pe.current.useInsertionEffect(M,k)},St.useLayoutEffect=function(M,k){return pe.current.useLayoutEffect(M,k)},St.useMemo=function(M,k){return pe.current.useMemo(M,k)},St.useReducer=function(M,k,J){return pe.current.useReducer(M,k,J)},St.useRef=function(M){return pe.current.useRef(M)},St.useState=function(M){return pe.current.useState(M)},St.useSyncExternalStore=function(M,k,J){return pe.current.useSyncExternalStore(M,k,J)},St.useTransition=function(){return pe.current.useTransition()},St.version="18.3.1",St}var sm;function xf(){return sm||(sm=1,Bu.exports=Ex()),Bu.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var om;function wx(){if(om)return ra;om=1;var s=xf(),e=Symbol.for("react.element"),n=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,a=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function u(f,p,g){var _,x={},y=null,E=null;g!==void 0&&(y=""+g),p.key!==void 0&&(y=""+p.key),p.ref!==void 0&&(E=p.ref);for(_ in p)r.call(p,_)&&!c.hasOwnProperty(_)&&(x[_]=p[_]);if(f&&f.defaultProps)for(_ in p=f.defaultProps,p)x[_]===void 0&&(x[_]=p[_]);return{$$typeof:e,type:f,key:y,ref:E,props:x,_owner:a.current}}return ra.Fragment=n,ra.jsx=u,ra.jsxs=u,ra}var am;function Tx(){return am||(am=1,Ou.exports=wx()),Ou.exports}var h=Tx(),pt=xf();const bx=mg(pt);var yl={},Hu={exports:{}},Hn={},Vu={exports:{}},ju={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var lm;function Cx(){return lm||(lm=1,(function(s){function e(j,me){var C=j.length;j.push(me);e:for(;0<C;){var M=C-1>>>1,k=j[M];if(0<a(k,me))j[M]=me,j[C]=k,C=M;else break e}}function n(j){return j.length===0?null:j[0]}function r(j){if(j.length===0)return null;var me=j[0],C=j.pop();if(C!==me){j[0]=C;e:for(var M=0,k=j.length,J=k>>>1;M<J;){var z=2*(M+1)-1,W=j[z],te=z+1,K=j[te];if(0>a(W,C))te<k&&0>a(K,W)?(j[M]=K,j[te]=C,M=te):(j[M]=W,j[z]=C,M=z);else if(te<k&&0>a(K,C))j[M]=K,j[te]=C,M=te;else break e}}return me}function a(j,me){var C=j.sortIndex-me.sortIndex;return C!==0?C:j.id-me.id}if(typeof performance=="object"&&typeof performance.now=="function"){var c=performance;s.unstable_now=function(){return c.now()}}else{var u=Date,f=u.now();s.unstable_now=function(){return u.now()-f}}var p=[],g=[],_=1,x=null,y=3,E=!1,T=!1,P=!1,S=typeof setTimeout=="function"?setTimeout:null,v=typeof clearTimeout=="function"?clearTimeout:null,U=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function L(j){for(var me=n(g);me!==null;){if(me.callback===null)r(g);else if(me.startTime<=j)r(g),me.sortIndex=me.expirationTime,e(p,me);else break;me=n(g)}}function A(j){if(P=!1,L(j),!T)if(n(p)!==null)T=!0,de(Q);else{var me=n(g);me!==null&&pe(A,me.startTime-j)}}function Q(j,me){T=!1,P&&(P=!1,v(Z),Z=-1),E=!0;var C=y;try{for(L(me),x=n(p);x!==null&&(!(x.expirationTime>me)||j&&!G());){var M=x.callback;if(typeof M=="function"){x.callback=null,y=x.priorityLevel;var k=M(x.expirationTime<=me);me=s.unstable_now(),typeof k=="function"?x.callback=k:x===n(p)&&r(p),L(me)}else r(p);x=n(p)}if(x!==null)var J=!0;else{var z=n(g);z!==null&&pe(A,z.startTime-me),J=!1}return J}finally{x=null,y=C,E=!1}}var O=!1,B=null,Z=-1,I=5,D=-1;function G(){return!(s.unstable_now()-D<I)}function ae(){if(B!==null){var j=s.unstable_now();D=j;var me=!0;try{me=B(!0,j)}finally{me?ie():(O=!1,B=null)}}else O=!1}var ie;if(typeof U=="function")ie=function(){U(ae)};else if(typeof MessageChannel<"u"){var ve=new MessageChannel,ge=ve.port2;ve.port1.onmessage=ae,ie=function(){ge.postMessage(null)}}else ie=function(){S(ae,0)};function de(j){B=j,O||(O=!0,ie())}function pe(j,me){Z=S(function(){j(s.unstable_now())},me)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(j){j.callback=null},s.unstable_continueExecution=function(){T||E||(T=!0,de(Q))},s.unstable_forceFrameRate=function(j){0>j||125<j?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):I=0<j?Math.floor(1e3/j):5},s.unstable_getCurrentPriorityLevel=function(){return y},s.unstable_getFirstCallbackNode=function(){return n(p)},s.unstable_next=function(j){switch(y){case 1:case 2:case 3:var me=3;break;default:me=y}var C=y;y=me;try{return j()}finally{y=C}},s.unstable_pauseExecution=function(){},s.unstable_requestPaint=function(){},s.unstable_runWithPriority=function(j,me){switch(j){case 1:case 2:case 3:case 4:case 5:break;default:j=3}var C=y;y=j;try{return me()}finally{y=C}},s.unstable_scheduleCallback=function(j,me,C){var M=s.unstable_now();switch(typeof C=="object"&&C!==null?(C=C.delay,C=typeof C=="number"&&0<C?M+C:M):C=M,j){case 1:var k=-1;break;case 2:k=250;break;case 5:k=1073741823;break;case 4:k=1e4;break;default:k=5e3}return k=C+k,j={id:_++,callback:me,priorityLevel:j,startTime:C,expirationTime:k,sortIndex:-1},C>M?(j.sortIndex=C,e(g,j),n(p)===null&&j===n(g)&&(P?(v(Z),Z=-1):P=!0,pe(A,C-M))):(j.sortIndex=k,e(p,j),T||E||(T=!0,de(Q))),j},s.unstable_shouldYield=G,s.unstable_wrapCallback=function(j){var me=y;return function(){var C=y;y=me;try{return j.apply(this,arguments)}finally{y=C}}}})(ju)),ju}var cm;function Ax(){return cm||(cm=1,Vu.exports=Cx()),Vu.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var um;function Rx(){if(um)return Hn;um=1;var s=xf(),e=Ax();function n(t){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+t,o=1;o<arguments.length;o++)i+="&args[]="+encodeURIComponent(arguments[o]);return"Minified React error #"+t+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var r=new Set,a={};function c(t,i){u(t,i),u(t+"Capture",i)}function u(t,i){for(a[t]=i,t=0;t<i.length;t++)r.add(i[t])}var f=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),p=Object.prototype.hasOwnProperty,g=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,_={},x={};function y(t){return p.call(x,t)?!0:p.call(_,t)?!1:g.test(t)?x[t]=!0:(_[t]=!0,!1)}function E(t,i,o,l){if(o!==null&&o.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return l?!1:o!==null?!o.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function T(t,i,o,l){if(i===null||typeof i>"u"||E(t,i,o,l))return!0;if(l)return!1;if(o!==null)switch(o.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function P(t,i,o,l,d,m,w){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=l,this.attributeNamespace=d,this.mustUseProperty=o,this.propertyName=t,this.type=i,this.sanitizeURL=m,this.removeEmptyString=w}var S={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){S[t]=new P(t,0,!1,t,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var i=t[0];S[i]=new P(i,1,!1,t[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(t){S[t]=new P(t,2,!1,t.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){S[t]=new P(t,2,!1,t,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){S[t]=new P(t,3,!1,t.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(t){S[t]=new P(t,3,!0,t,null,!1,!1)}),["capture","download"].forEach(function(t){S[t]=new P(t,4,!1,t,null,!1,!1)}),["cols","rows","size","span"].forEach(function(t){S[t]=new P(t,6,!1,t,null,!1,!1)}),["rowSpan","start"].forEach(function(t){S[t]=new P(t,5,!1,t.toLowerCase(),null,!1,!1)});var v=/[\-:]([a-z])/g;function U(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var i=t.replace(v,U);S[i]=new P(i,1,!1,t,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var i=t.replace(v,U);S[i]=new P(i,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(t){var i=t.replace(v,U);S[i]=new P(i,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(t){S[t]=new P(t,1,!1,t.toLowerCase(),null,!1,!1)}),S.xlinkHref=new P("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(t){S[t]=new P(t,1,!1,t.toLowerCase(),null,!0,!0)});function L(t,i,o,l){var d=S.hasOwnProperty(i)?S[i]:null;(d!==null?d.type!==0:l||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(T(i,o,d,l)&&(o=null),l||d===null?y(i)&&(o===null?t.removeAttribute(i):t.setAttribute(i,""+o)):d.mustUseProperty?t[d.propertyName]=o===null?d.type===3?!1:"":o:(i=d.attributeName,l=d.attributeNamespace,o===null?t.removeAttribute(i):(d=d.type,o=d===3||d===4&&o===!0?"":""+o,l?t.setAttributeNS(l,i,o):t.setAttribute(i,o))))}var A=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Q=Symbol.for("react.element"),O=Symbol.for("react.portal"),B=Symbol.for("react.fragment"),Z=Symbol.for("react.strict_mode"),I=Symbol.for("react.profiler"),D=Symbol.for("react.provider"),G=Symbol.for("react.context"),ae=Symbol.for("react.forward_ref"),ie=Symbol.for("react.suspense"),ve=Symbol.for("react.suspense_list"),ge=Symbol.for("react.memo"),de=Symbol.for("react.lazy"),pe=Symbol.for("react.offscreen"),j=Symbol.iterator;function me(t){return t===null||typeof t!="object"?null:(t=j&&t[j]||t["@@iterator"],typeof t=="function"?t:null)}var C=Object.assign,M;function k(t){if(M===void 0)try{throw Error()}catch(o){var i=o.stack.trim().match(/\n( *(at )?)/);M=i&&i[1]||""}return`
`+M+t}var J=!1;function z(t,i){if(!t||J)return"";J=!0;var o=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(le){var l=le}Reflect.construct(t,[],i)}else{try{i.call()}catch(le){l=le}t.call(i.prototype)}else{try{throw Error()}catch(le){l=le}t()}}catch(le){if(le&&l&&typeof le.stack=="string"){for(var d=le.stack.split(`
`),m=l.stack.split(`
`),w=d.length-1,F=m.length-1;1<=w&&0<=F&&d[w]!==m[F];)F--;for(;1<=w&&0<=F;w--,F--)if(d[w]!==m[F]){if(w!==1||F!==1)do if(w--,F--,0>F||d[w]!==m[F]){var V=`
`+d[w].replace(" at new "," at ");return t.displayName&&V.includes("<anonymous>")&&(V=V.replace("<anonymous>",t.displayName)),V}while(1<=w&&0<=F);break}}}finally{J=!1,Error.prepareStackTrace=o}return(t=t?t.displayName||t.name:"")?k(t):""}function W(t){switch(t.tag){case 5:return k(t.type);case 16:return k("Lazy");case 13:return k("Suspense");case 19:return k("SuspenseList");case 0:case 2:case 15:return t=z(t.type,!1),t;case 11:return t=z(t.type.render,!1),t;case 1:return t=z(t.type,!0),t;default:return""}}function te(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case B:return"Fragment";case O:return"Portal";case I:return"Profiler";case Z:return"StrictMode";case ie:return"Suspense";case ve:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case G:return(t.displayName||"Context")+".Consumer";case D:return(t._context.displayName||"Context")+".Provider";case ae:var i=t.render;return t=t.displayName,t||(t=i.displayName||i.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case ge:return i=t.displayName||null,i!==null?i:te(t.type)||"Memo";case de:i=t._payload,t=t._init;try{return te(t(i))}catch{}}return null}function K(t){var i=t.type;switch(t.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=i.render,t=t.displayName||t.name||"",i.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return te(i);case 8:return i===Z?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function ue(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function he(t){var i=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function Me(t){var i=he(t)?"checked":"value",o=Object.getOwnPropertyDescriptor(t.constructor.prototype,i),l=""+t[i];if(!t.hasOwnProperty(i)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var d=o.get,m=o.set;return Object.defineProperty(t,i,{configurable:!0,get:function(){return d.call(this)},set:function(w){l=""+w,m.call(this,w)}}),Object.defineProperty(t,i,{enumerable:o.enumerable}),{getValue:function(){return l},setValue:function(w){l=""+w},stopTracking:function(){t._valueTracker=null,delete t[i]}}}}function De(t){t._valueTracker||(t._valueTracker=Me(t))}function xe(t){if(!t)return!1;var i=t._valueTracker;if(!i)return!0;var o=i.getValue(),l="";return t&&(l=he(t)?t.checked?"true":"false":t.value),t=l,t!==o?(i.setValue(t),!0):!1}function Le(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function H(t,i){var o=i.checked;return C({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:o??t._wrapperState.initialChecked})}function mt(t,i){var o=i.defaultValue==null?"":i.defaultValue,l=i.checked!=null?i.checked:i.defaultChecked;o=ue(i.value!=null?i.value:o),t._wrapperState={initialChecked:l,initialValue:o,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function et(t,i){i=i.checked,i!=null&&L(t,"checked",i,!1)}function Ge(t,i){et(t,i);var o=ue(i.value),l=i.type;if(o!=null)l==="number"?(o===0&&t.value===""||t.value!=o)&&(t.value=""+o):t.value!==""+o&&(t.value=""+o);else if(l==="submit"||l==="reset"){t.removeAttribute("value");return}i.hasOwnProperty("value")?ot(t,i.type,o):i.hasOwnProperty("defaultValue")&&ot(t,i.type,ue(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(t.defaultChecked=!!i.defaultChecked)}function He(t,i,o){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var l=i.type;if(!(l!=="submit"&&l!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+t._wrapperState.initialValue,o||i===t.value||(t.value=i),t.defaultValue=i}o=t.name,o!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,o!==""&&(t.name=o)}function ot(t,i,o){(i!=="number"||Le(t.ownerDocument)!==t)&&(o==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+o&&(t.defaultValue=""+o))}var Fe=Array.isArray;function N(t,i,o,l){if(t=t.options,i){i={};for(var d=0;d<o.length;d++)i["$"+o[d]]=!0;for(o=0;o<t.length;o++)d=i.hasOwnProperty("$"+t[o].value),t[o].selected!==d&&(t[o].selected=d),d&&l&&(t[o].defaultSelected=!0)}else{for(o=""+ue(o),i=null,d=0;d<t.length;d++){if(t[d].value===o){t[d].selected=!0,l&&(t[d].defaultSelected=!0);return}i!==null||t[d].disabled||(i=t[d])}i!==null&&(i.selected=!0)}}function b(t,i){if(i.dangerouslySetInnerHTML!=null)throw Error(n(91));return C({},i,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function ne(t,i){var o=i.value;if(o==null){if(o=i.children,i=i.defaultValue,o!=null){if(i!=null)throw Error(n(92));if(Fe(o)){if(1<o.length)throw Error(n(93));o=o[0]}i=o}i==null&&(i=""),o=i}t._wrapperState={initialValue:ue(o)}}function ye(t,i){var o=ue(i.value),l=ue(i.defaultValue);o!=null&&(o=""+o,o!==t.value&&(t.value=o),i.defaultValue==null&&t.defaultValue!==o&&(t.defaultValue=o)),l!=null&&(t.defaultValue=""+l)}function Ee(t){var i=t.textContent;i===t._wrapperState.initialValue&&i!==""&&i!==null&&(t.value=i)}function _e(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Xe(t,i){return t==null||t==="http://www.w3.org/1999/xhtml"?_e(i):t==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Ie,Be=(function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,o,l,d){MSApp.execUnsafeLocalFunction(function(){return t(i,o,l,d)})}:t})(function(t,i){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=i;else{for(Ie=Ie||document.createElement("div"),Ie.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=Ie.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;i.firstChild;)t.appendChild(i.firstChild)}});function dt(t,i){if(i){var o=t.firstChild;if(o&&o===t.lastChild&&o.nodeType===3){o.nodeValue=i;return}}t.textContent=i}var Ae={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Ve=["Webkit","ms","Moz","O"];Object.keys(Ae).forEach(function(t){Ve.forEach(function(i){i=i+t.charAt(0).toUpperCase()+t.substring(1),Ae[i]=Ae[t]})});function nt(t,i,o){return i==null||typeof i=="boolean"||i===""?"":o||typeof i!="number"||i===0||Ae.hasOwnProperty(t)&&Ae[t]?(""+i).trim():i+"px"}function st(t,i){t=t.style;for(var o in i)if(i.hasOwnProperty(o)){var l=o.indexOf("--")===0,d=nt(o,i[o],l);o==="float"&&(o="cssFloat"),l?t.setProperty(o,d):t[o]=d}}var je=C({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function xt(t,i){if(i){if(je[t]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(n(137,t));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(n(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(n(61))}if(i.style!=null&&typeof i.style!="object")throw Error(n(62))}}function ht(t,i){if(t.indexOf("-")===-1)return typeof i.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Tt=null;function q(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Ne=null,fe=null,Se=null;function ke(t){if(t=jo(t)){if(typeof Ne!="function")throw Error(n(280));var i=t.stateNode;i&&(i=Ua(i),Ne(t.stateNode,t.type,i))}}function Ue(t){fe?Se?Se.push(t):Se=[t]:fe=t}function ut(){if(fe){var t=fe,i=Se;if(Se=fe=null,ke(t),i)for(t=0;t<i.length;t++)ke(i[t])}}function It(t,i){return t(i)}function Kt(){}var ze=!1;function at(t,i,o){if(ze)return t(i,o);ze=!0;try{return It(t,i,o)}finally{ze=!1,(fe!==null||Se!==null)&&(Kt(),ut())}}function _t(t,i){var o=t.stateNode;if(o===null)return null;var l=Ua(o);if(l===null)return null;o=l[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(t=t.type,l=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!l;break e;default:t=!1}if(t)return null;if(o&&typeof o!="function")throw Error(n(231,i,typeof o));return o}var Vt=!1;if(f)try{var Nt={};Object.defineProperty(Nt,"passive",{get:function(){Vt=!0}}),window.addEventListener("test",Nt,Nt),window.removeEventListener("test",Nt,Nt)}catch{Vt=!1}function pn(t,i,o,l,d,m,w,F,V){var le=Array.prototype.slice.call(arguments,3);try{i.apply(o,le)}catch(Ce){this.onError(Ce)}}var Gn=!1,Wn=null,mn=!1,Ut=null,Ui={onError:function(t){Gn=!0,Wn=t}};function pi(t,i,o,l,d,m,w,F,V){Gn=!1,Wn=null,pn.apply(Ui,arguments)}function mi(t,i,o,l,d,m,w,F,V){if(pi.apply(this,arguments),Gn){if(Gn){var le=Wn;Gn=!1,Wn=null}else throw Error(n(198));mn||(mn=!0,Ut=le)}}function gn(t){var i=t,o=t;if(t.alternate)for(;i.return;)i=i.return;else{t=i;do i=t,(i.flags&4098)!==0&&(o=i.return),t=i.return;while(t)}return i.tag===3?o:null}function gi(t){if(t.tag===13){var i=t.memoizedState;if(i===null&&(t=t.alternate,t!==null&&(i=t.memoizedState)),i!==null)return i.dehydrated}return null}function vi(t){if(gn(t)!==t)throw Error(n(188))}function xi(t){var i=t.alternate;if(!i){if(i=gn(t),i===null)throw Error(n(188));return i!==t?null:t}for(var o=t,l=i;;){var d=o.return;if(d===null)break;var m=d.alternate;if(m===null){if(l=d.return,l!==null){o=l;continue}break}if(d.child===m.child){for(m=d.child;m;){if(m===o)return vi(d),t;if(m===l)return vi(d),i;m=m.sibling}throw Error(n(188))}if(o.return!==l.return)o=d,l=m;else{for(var w=!1,F=d.child;F;){if(F===o){w=!0,o=d,l=m;break}if(F===l){w=!0,l=d,o=m;break}F=F.sibling}if(!w){for(F=m.child;F;){if(F===o){w=!0,o=m,l=d;break}if(F===l){w=!0,l=m,o=d;break}F=F.sibling}if(!w)throw Error(n(189))}}if(o.alternate!==l)throw Error(n(190))}if(o.tag!==3)throw Error(n(188));return o.stateNode.current===o?t:i}function R(t){return t=xi(t),t!==null?Y(t):null}function Y(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var i=Y(t);if(i!==null)return i;t=t.sibling}return null}var se=e.unstable_scheduleCallback,oe=e.unstable_cancelCallback,$=e.unstable_shouldYield,be=e.unstable_requestPaint,we=e.unstable_now,Ke=e.unstable_getCurrentPriorityLevel,Ye=e.unstable_ImmediatePriority,lt=e.unstable_UserBlockingPriority,ct=e.unstable_NormalPriority,Ze=e.unstable_LowPriority,Et=e.unstable_IdlePriority,Dt=null,wt=null;function _n(t){if(wt&&typeof wt.onCommitFiberRoot=="function")try{wt.onCommitFiberRoot(Dt,t,void 0,(t.current.flags&128)===128)}catch{}}var gt=Math.clz32?Math.clz32:At,tt=Math.log,_i=Math.LN2;function At(t){return t>>>=0,t===0?32:31-(tt(t)/_i|0)|0}var yn=64,yi=4194304;function sn(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Fi(t,i){var o=t.pendingLanes;if(o===0)return 0;var l=0,d=t.suspendedLanes,m=t.pingedLanes,w=o&268435455;if(w!==0){var F=w&~d;F!==0?l=sn(F):(m&=w,m!==0&&(l=sn(m)))}else w=o&~d,w!==0?l=sn(w):m!==0&&(l=sn(m));if(l===0)return 0;if(i!==0&&i!==l&&(i&d)===0&&(d=l&-l,m=i&-i,d>=m||d===16&&(m&4194240)!==0))return i;if((l&4)!==0&&(l|=o&16),i=t.entangledLanes,i!==0)for(t=t.entanglements,i&=l;0<i;)o=31-gt(i),d=1<<o,l|=t[o],i&=~d;return l}function Bt(t,i){switch(t){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ti(t,i){for(var o=t.suspendedLanes,l=t.pingedLanes,d=t.expirationTimes,m=t.pendingLanes;0<m;){var w=31-gt(m),F=1<<w,V=d[w];V===-1?((F&o)===0||(F&l)!==0)&&(d[w]=Bt(F,i)):V<=i&&(t.expiredLanes|=F),m&=~F}}function Wi(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function An(){var t=yn;return yn<<=1,(yn&4194240)===0&&(yn=64),t}function ni(t){for(var i=[],o=0;31>o;o++)i.push(t);return i}function Un(t,i,o){t.pendingLanes|=i,i!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,i=31-gt(i),t[i]=o}function _a(t,i){var o=t.pendingLanes&~i;t.pendingLanes=i,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=i,t.mutableReadLanes&=i,t.entangledLanes&=i,i=t.entanglements;var l=t.eventTimes;for(t=t.expirationTimes;0<o;){var d=31-gt(o),m=1<<d;i[d]=0,l[d]=-1,t[d]=-1,o&=~m}}function lc(t,i){var o=t.entangledLanes|=i;for(t=t.entanglements;o;){var l=31-gt(o),d=1<<l;d&i|t[l]&i&&(t[l]|=i),o&=~d}}var Ft=0;function Ff(t){return t&=-t,1<t?4<t?(t&268435455)!==0?16:536870912:4:1}var zf,cc,kf,Of,Bf,uc=!1,ya=[],pr=null,mr=null,gr=null,Co=new Map,Ao=new Map,vr=[],W0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Hf(t,i){switch(t){case"focusin":case"focusout":pr=null;break;case"dragenter":case"dragleave":mr=null;break;case"mouseover":case"mouseout":gr=null;break;case"pointerover":case"pointerout":Co.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ao.delete(i.pointerId)}}function Ro(t,i,o,l,d,m){return t===null||t.nativeEvent!==m?(t={blockedOn:i,domEventName:o,eventSystemFlags:l,nativeEvent:m,targetContainers:[d]},i!==null&&(i=jo(i),i!==null&&cc(i)),t):(t.eventSystemFlags|=l,i=t.targetContainers,d!==null&&i.indexOf(d)===-1&&i.push(d),t)}function X0(t,i,o,l,d){switch(i){case"focusin":return pr=Ro(pr,t,i,o,l,d),!0;case"dragenter":return mr=Ro(mr,t,i,o,l,d),!0;case"mouseover":return gr=Ro(gr,t,i,o,l,d),!0;case"pointerover":var m=d.pointerId;return Co.set(m,Ro(Co.get(m)||null,t,i,o,l,d)),!0;case"gotpointercapture":return m=d.pointerId,Ao.set(m,Ro(Ao.get(m)||null,t,i,o,l,d)),!0}return!1}function Vf(t){var i=qr(t.target);if(i!==null){var o=gn(i);if(o!==null){if(i=o.tag,i===13){if(i=gi(o),i!==null){t.blockedOn=i,Bf(t.priority,function(){kf(o)});return}}else if(i===3&&o.stateNode.current.memoizedState.isDehydrated){t.blockedOn=o.tag===3?o.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Sa(t){if(t.blockedOn!==null)return!1;for(var i=t.targetContainers;0<i.length;){var o=fc(t.domEventName,t.eventSystemFlags,i[0],t.nativeEvent);if(o===null){o=t.nativeEvent;var l=new o.constructor(o.type,o);Tt=l,o.target.dispatchEvent(l),Tt=null}else return i=jo(o),i!==null&&cc(i),t.blockedOn=o,!1;i.shift()}return!0}function jf(t,i,o){Sa(t)&&o.delete(i)}function q0(){uc=!1,pr!==null&&Sa(pr)&&(pr=null),mr!==null&&Sa(mr)&&(mr=null),gr!==null&&Sa(gr)&&(gr=null),Co.forEach(jf),Ao.forEach(jf)}function Po(t,i){t.blockedOn===i&&(t.blockedOn=null,uc||(uc=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,q0)))}function Do(t){function i(d){return Po(d,t)}if(0<ya.length){Po(ya[0],t);for(var o=1;o<ya.length;o++){var l=ya[o];l.blockedOn===t&&(l.blockedOn=null)}}for(pr!==null&&Po(pr,t),mr!==null&&Po(mr,t),gr!==null&&Po(gr,t),Co.forEach(i),Ao.forEach(i),o=0;o<vr.length;o++)l=vr[o],l.blockedOn===t&&(l.blockedOn=null);for(;0<vr.length&&(o=vr[0],o.blockedOn===null);)Vf(o),o.blockedOn===null&&vr.shift()}var Ms=A.ReactCurrentBatchConfig,Ma=!0;function Y0(t,i,o,l){var d=Ft,m=Ms.transition;Ms.transition=null;try{Ft=1,dc(t,i,o,l)}finally{Ft=d,Ms.transition=m}}function $0(t,i,o,l){var d=Ft,m=Ms.transition;Ms.transition=null;try{Ft=4,dc(t,i,o,l)}finally{Ft=d,Ms.transition=m}}function dc(t,i,o,l){if(Ma){var d=fc(t,i,o,l);if(d===null)Rc(t,i,l,Ea,o),Hf(t,l);else if(X0(d,t,i,o,l))l.stopPropagation();else if(Hf(t,l),i&4&&-1<W0.indexOf(t)){for(;d!==null;){var m=jo(d);if(m!==null&&zf(m),m=fc(t,i,o,l),m===null&&Rc(t,i,l,Ea,o),m===d)break;d=m}d!==null&&l.stopPropagation()}else Rc(t,i,l,null,o)}}var Ea=null;function fc(t,i,o,l){if(Ea=null,t=q(l),t=qr(t),t!==null)if(i=gn(t),i===null)t=null;else if(o=i.tag,o===13){if(t=gi(i),t!==null)return t;t=null}else if(o===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;t=null}else i!==t&&(t=null);return Ea=t,null}function Gf(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Ke()){case Ye:return 1;case lt:return 4;case ct:case Ze:return 16;case Et:return 536870912;default:return 16}default:return 16}}var xr=null,hc=null,wa=null;function Wf(){if(wa)return wa;var t,i=hc,o=i.length,l,d="value"in xr?xr.value:xr.textContent,m=d.length;for(t=0;t<o&&i[t]===d[t];t++);var w=o-t;for(l=1;l<=w&&i[o-l]===d[m-l];l++);return wa=d.slice(t,1<l?1-l:void 0)}function Ta(t){var i=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&i===13&&(t=13)):t=i,t===10&&(t=13),32<=t||t===13?t:0}function ba(){return!0}function Xf(){return!1}function Xn(t){function i(o,l,d,m,w){this._reactName=o,this._targetInst=d,this.type=l,this.nativeEvent=m,this.target=w,this.currentTarget=null;for(var F in t)t.hasOwnProperty(F)&&(o=t[F],this[F]=o?o(m):m[F]);return this.isDefaultPrevented=(m.defaultPrevented!=null?m.defaultPrevented:m.returnValue===!1)?ba:Xf,this.isPropagationStopped=Xf,this}return C(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var o=this.nativeEvent;o&&(o.preventDefault?o.preventDefault():typeof o.returnValue!="unknown"&&(o.returnValue=!1),this.isDefaultPrevented=ba)},stopPropagation:function(){var o=this.nativeEvent;o&&(o.stopPropagation?o.stopPropagation():typeof o.cancelBubble!="unknown"&&(o.cancelBubble=!0),this.isPropagationStopped=ba)},persist:function(){},isPersistent:ba}),i}var Es={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},pc=Xn(Es),Lo=C({},Es,{view:0,detail:0}),K0=Xn(Lo),mc,gc,Io,Ca=C({},Lo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:xc,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Io&&(Io&&t.type==="mousemove"?(mc=t.screenX-Io.screenX,gc=t.screenY-Io.screenY):gc=mc=0,Io=t),mc)},movementY:function(t){return"movementY"in t?t.movementY:gc}}),qf=Xn(Ca),Z0=C({},Ca,{dataTransfer:0}),Q0=Xn(Z0),J0=C({},Lo,{relatedTarget:0}),vc=Xn(J0),ev=C({},Es,{animationName:0,elapsedTime:0,pseudoElement:0}),tv=Xn(ev),nv=C({},Es,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),iv=Xn(nv),rv=C({},Es,{data:0}),Yf=Xn(rv),sv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},ov={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},av={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function lv(t){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(t):(t=av[t])?!!i[t]:!1}function xc(){return lv}var cv=C({},Lo,{key:function(t){if(t.key){var i=sv[t.key]||t.key;if(i!=="Unidentified")return i}return t.type==="keypress"?(t=Ta(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?ov[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:xc,charCode:function(t){return t.type==="keypress"?Ta(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Ta(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),uv=Xn(cv),dv=C({},Ca,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),$f=Xn(dv),fv=C({},Lo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:xc}),hv=Xn(fv),pv=C({},Es,{propertyName:0,elapsedTime:0,pseudoElement:0}),mv=Xn(pv),gv=C({},Ca,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),vv=Xn(gv),xv=[9,13,27,32],_c=f&&"CompositionEvent"in window,No=null;f&&"documentMode"in document&&(No=document.documentMode);var _v=f&&"TextEvent"in window&&!No,Kf=f&&(!_c||No&&8<No&&11>=No),Zf=" ",Qf=!1;function Jf(t,i){switch(t){case"keyup":return xv.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function eh(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var ws=!1;function yv(t,i){switch(t){case"compositionend":return eh(i);case"keypress":return i.which!==32?null:(Qf=!0,Zf);case"textInput":return t=i.data,t===Zf&&Qf?null:t;default:return null}}function Sv(t,i){if(ws)return t==="compositionend"||!_c&&Jf(t,i)?(t=Wf(),wa=hc=xr=null,ws=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return Kf&&i.locale!=="ko"?null:i.data;default:return null}}var Mv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function th(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i==="input"?!!Mv[t.type]:i==="textarea"}function nh(t,i,o,l){Ue(l),i=La(i,"onChange"),0<i.length&&(o=new pc("onChange","change",null,o,l),t.push({event:o,listeners:i}))}var Uo=null,Fo=null;function Ev(t){yh(t,0)}function Aa(t){var i=Rs(t);if(xe(i))return t}function wv(t,i){if(t==="change")return i}var ih=!1;if(f){var yc;if(f){var Sc="oninput"in document;if(!Sc){var rh=document.createElement("div");rh.setAttribute("oninput","return;"),Sc=typeof rh.oninput=="function"}yc=Sc}else yc=!1;ih=yc&&(!document.documentMode||9<document.documentMode)}function sh(){Uo&&(Uo.detachEvent("onpropertychange",oh),Fo=Uo=null)}function oh(t){if(t.propertyName==="value"&&Aa(Fo)){var i=[];nh(i,Fo,t,q(t)),at(Ev,i)}}function Tv(t,i,o){t==="focusin"?(sh(),Uo=i,Fo=o,Uo.attachEvent("onpropertychange",oh)):t==="focusout"&&sh()}function bv(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Aa(Fo)}function Cv(t,i){if(t==="click")return Aa(i)}function Av(t,i){if(t==="input"||t==="change")return Aa(i)}function Rv(t,i){return t===i&&(t!==0||1/t===1/i)||t!==t&&i!==i}var Si=typeof Object.is=="function"?Object.is:Rv;function zo(t,i){if(Si(t,i))return!0;if(typeof t!="object"||t===null||typeof i!="object"||i===null)return!1;var o=Object.keys(t),l=Object.keys(i);if(o.length!==l.length)return!1;for(l=0;l<o.length;l++){var d=o[l];if(!p.call(i,d)||!Si(t[d],i[d]))return!1}return!0}function ah(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function lh(t,i){var o=ah(t);t=0;for(var l;o;){if(o.nodeType===3){if(l=t+o.textContent.length,t<=i&&l>=i)return{node:o,offset:i-t};t=l}e:{for(;o;){if(o.nextSibling){o=o.nextSibling;break e}o=o.parentNode}o=void 0}o=ah(o)}}function ch(t,i){return t&&i?t===i?!0:t&&t.nodeType===3?!1:i&&i.nodeType===3?ch(t,i.parentNode):"contains"in t?t.contains(i):t.compareDocumentPosition?!!(t.compareDocumentPosition(i)&16):!1:!1}function uh(){for(var t=window,i=Le();i instanceof t.HTMLIFrameElement;){try{var o=typeof i.contentWindow.location.href=="string"}catch{o=!1}if(o)t=i.contentWindow;else break;i=Le(t.document)}return i}function Mc(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i&&(i==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||i==="textarea"||t.contentEditable==="true")}function Pv(t){var i=uh(),o=t.focusedElem,l=t.selectionRange;if(i!==o&&o&&o.ownerDocument&&ch(o.ownerDocument.documentElement,o)){if(l!==null&&Mc(o)){if(i=l.start,t=l.end,t===void 0&&(t=i),"selectionStart"in o)o.selectionStart=i,o.selectionEnd=Math.min(t,o.value.length);else if(t=(i=o.ownerDocument||document)&&i.defaultView||window,t.getSelection){t=t.getSelection();var d=o.textContent.length,m=Math.min(l.start,d);l=l.end===void 0?m:Math.min(l.end,d),!t.extend&&m>l&&(d=l,l=m,m=d),d=lh(o,m);var w=lh(o,l);d&&w&&(t.rangeCount!==1||t.anchorNode!==d.node||t.anchorOffset!==d.offset||t.focusNode!==w.node||t.focusOffset!==w.offset)&&(i=i.createRange(),i.setStart(d.node,d.offset),t.removeAllRanges(),m>l?(t.addRange(i),t.extend(w.node,w.offset)):(i.setEnd(w.node,w.offset),t.addRange(i)))}}for(i=[],t=o;t=t.parentNode;)t.nodeType===1&&i.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<i.length;o++)t=i[o],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var Dv=f&&"documentMode"in document&&11>=document.documentMode,Ts=null,Ec=null,ko=null,wc=!1;function dh(t,i,o){var l=o.window===o?o.document:o.nodeType===9?o:o.ownerDocument;wc||Ts==null||Ts!==Le(l)||(l=Ts,"selectionStart"in l&&Mc(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),ko&&zo(ko,l)||(ko=l,l=La(Ec,"onSelect"),0<l.length&&(i=new pc("onSelect","select",null,i,o),t.push({event:i,listeners:l}),i.target=Ts)))}function Ra(t,i){var o={};return o[t.toLowerCase()]=i.toLowerCase(),o["Webkit"+t]="webkit"+i,o["Moz"+t]="moz"+i,o}var bs={animationend:Ra("Animation","AnimationEnd"),animationiteration:Ra("Animation","AnimationIteration"),animationstart:Ra("Animation","AnimationStart"),transitionend:Ra("Transition","TransitionEnd")},Tc={},fh={};f&&(fh=document.createElement("div").style,"AnimationEvent"in window||(delete bs.animationend.animation,delete bs.animationiteration.animation,delete bs.animationstart.animation),"TransitionEvent"in window||delete bs.transitionend.transition);function Pa(t){if(Tc[t])return Tc[t];if(!bs[t])return t;var i=bs[t],o;for(o in i)if(i.hasOwnProperty(o)&&o in fh)return Tc[t]=i[o];return t}var hh=Pa("animationend"),ph=Pa("animationiteration"),mh=Pa("animationstart"),gh=Pa("transitionend"),vh=new Map,xh="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function _r(t,i){vh.set(t,i),c(i,[t])}for(var bc=0;bc<xh.length;bc++){var Cc=xh[bc],Lv=Cc.toLowerCase(),Iv=Cc[0].toUpperCase()+Cc.slice(1);_r(Lv,"on"+Iv)}_r(hh,"onAnimationEnd"),_r(ph,"onAnimationIteration"),_r(mh,"onAnimationStart"),_r("dblclick","onDoubleClick"),_r("focusin","onFocus"),_r("focusout","onBlur"),_r(gh,"onTransitionEnd"),u("onMouseEnter",["mouseout","mouseover"]),u("onMouseLeave",["mouseout","mouseover"]),u("onPointerEnter",["pointerout","pointerover"]),u("onPointerLeave",["pointerout","pointerover"]),c("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),c("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),c("onBeforeInput",["compositionend","keypress","textInput","paste"]),c("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),c("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),c("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Oo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Nv=new Set("cancel close invalid load scroll toggle".split(" ").concat(Oo));function _h(t,i,o){var l=t.type||"unknown-event";t.currentTarget=o,mi(l,i,void 0,t),t.currentTarget=null}function yh(t,i){i=(i&4)!==0;for(var o=0;o<t.length;o++){var l=t[o],d=l.event;l=l.listeners;e:{var m=void 0;if(i)for(var w=l.length-1;0<=w;w--){var F=l[w],V=F.instance,le=F.currentTarget;if(F=F.listener,V!==m&&d.isPropagationStopped())break e;_h(d,F,le),m=V}else for(w=0;w<l.length;w++){if(F=l[w],V=F.instance,le=F.currentTarget,F=F.listener,V!==m&&d.isPropagationStopped())break e;_h(d,F,le),m=V}}}if(mn)throw t=Ut,mn=!1,Ut=null,t}function Wt(t,i){var o=i[Uc];o===void 0&&(o=i[Uc]=new Set);var l=t+"__bubble";o.has(l)||(Sh(i,t,2,!1),o.add(l))}function Ac(t,i,o){var l=0;i&&(l|=4),Sh(o,t,l,i)}var Da="_reactListening"+Math.random().toString(36).slice(2);function Bo(t){if(!t[Da]){t[Da]=!0,r.forEach(function(o){o!=="selectionchange"&&(Nv.has(o)||Ac(o,!1,t),Ac(o,!0,t))});var i=t.nodeType===9?t:t.ownerDocument;i===null||i[Da]||(i[Da]=!0,Ac("selectionchange",!1,i))}}function Sh(t,i,o,l){switch(Gf(i)){case 1:var d=Y0;break;case 4:d=$0;break;default:d=dc}o=d.bind(null,i,o,t),d=void 0,!Vt||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(d=!0),l?d!==void 0?t.addEventListener(i,o,{capture:!0,passive:d}):t.addEventListener(i,o,!0):d!==void 0?t.addEventListener(i,o,{passive:d}):t.addEventListener(i,o,!1)}function Rc(t,i,o,l,d){var m=l;if((i&1)===0&&(i&2)===0&&l!==null)e:for(;;){if(l===null)return;var w=l.tag;if(w===3||w===4){var F=l.stateNode.containerInfo;if(F===d||F.nodeType===8&&F.parentNode===d)break;if(w===4)for(w=l.return;w!==null;){var V=w.tag;if((V===3||V===4)&&(V=w.stateNode.containerInfo,V===d||V.nodeType===8&&V.parentNode===d))return;w=w.return}for(;F!==null;){if(w=qr(F),w===null)return;if(V=w.tag,V===5||V===6){l=m=w;continue e}F=F.parentNode}}l=l.return}at(function(){var le=m,Ce=q(o),Re=[];e:{var Te=vh.get(t);if(Te!==void 0){var We=pc,$e=t;switch(t){case"keypress":if(Ta(o)===0)break e;case"keydown":case"keyup":We=uv;break;case"focusin":$e="focus",We=vc;break;case"focusout":$e="blur",We=vc;break;case"beforeblur":case"afterblur":We=vc;break;case"click":if(o.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":We=qf;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":We=Q0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":We=hv;break;case hh:case ph:case mh:We=tv;break;case gh:We=mv;break;case"scroll":We=K0;break;case"wheel":We=vv;break;case"copy":case"cut":case"paste":We=iv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":We=$f}var Qe=(i&4)!==0,Qt=!Qe&&t==="scroll",ee=Qe?Te!==null?Te+"Capture":null:Te;Qe=[];for(var X=le,re;X!==null;){re=X;var Pe=re.stateNode;if(re.tag===5&&Pe!==null&&(re=Pe,ee!==null&&(Pe=_t(X,ee),Pe!=null&&Qe.push(Ho(X,Pe,re)))),Qt)break;X=X.return}0<Qe.length&&(Te=new We(Te,$e,null,o,Ce),Re.push({event:Te,listeners:Qe}))}}if((i&7)===0){e:{if(Te=t==="mouseover"||t==="pointerover",We=t==="mouseout"||t==="pointerout",Te&&o!==Tt&&($e=o.relatedTarget||o.fromElement)&&(qr($e)||$e[Xi]))break e;if((We||Te)&&(Te=Ce.window===Ce?Ce:(Te=Ce.ownerDocument)?Te.defaultView||Te.parentWindow:window,We?($e=o.relatedTarget||o.toElement,We=le,$e=$e?qr($e):null,$e!==null&&(Qt=gn($e),$e!==Qt||$e.tag!==5&&$e.tag!==6)&&($e=null)):(We=null,$e=le),We!==$e)){if(Qe=qf,Pe="onMouseLeave",ee="onMouseEnter",X="mouse",(t==="pointerout"||t==="pointerover")&&(Qe=$f,Pe="onPointerLeave",ee="onPointerEnter",X="pointer"),Qt=We==null?Te:Rs(We),re=$e==null?Te:Rs($e),Te=new Qe(Pe,X+"leave",We,o,Ce),Te.target=Qt,Te.relatedTarget=re,Pe=null,qr(Ce)===le&&(Qe=new Qe(ee,X+"enter",$e,o,Ce),Qe.target=re,Qe.relatedTarget=Qt,Pe=Qe),Qt=Pe,We&&$e)t:{for(Qe=We,ee=$e,X=0,re=Qe;re;re=Cs(re))X++;for(re=0,Pe=ee;Pe;Pe=Cs(Pe))re++;for(;0<X-re;)Qe=Cs(Qe),X--;for(;0<re-X;)ee=Cs(ee),re--;for(;X--;){if(Qe===ee||ee!==null&&Qe===ee.alternate)break t;Qe=Cs(Qe),ee=Cs(ee)}Qe=null}else Qe=null;We!==null&&Mh(Re,Te,We,Qe,!1),$e!==null&&Qt!==null&&Mh(Re,Qt,$e,Qe,!0)}}e:{if(Te=le?Rs(le):window,We=Te.nodeName&&Te.nodeName.toLowerCase(),We==="select"||We==="input"&&Te.type==="file")var Je=wv;else if(th(Te))if(ih)Je=Av;else{Je=bv;var it=Tv}else(We=Te.nodeName)&&We.toLowerCase()==="input"&&(Te.type==="checkbox"||Te.type==="radio")&&(Je=Cv);if(Je&&(Je=Je(t,le))){nh(Re,Je,o,Ce);break e}it&&it(t,Te,le),t==="focusout"&&(it=Te._wrapperState)&&it.controlled&&Te.type==="number"&&ot(Te,"number",Te.value)}switch(it=le?Rs(le):window,t){case"focusin":(th(it)||it.contentEditable==="true")&&(Ts=it,Ec=le,ko=null);break;case"focusout":ko=Ec=Ts=null;break;case"mousedown":wc=!0;break;case"contextmenu":case"mouseup":case"dragend":wc=!1,dh(Re,o,Ce);break;case"selectionchange":if(Dv)break;case"keydown":case"keyup":dh(Re,o,Ce)}var rt;if(_c)e:{switch(t){case"compositionstart":var ft="onCompositionStart";break e;case"compositionend":ft="onCompositionEnd";break e;case"compositionupdate":ft="onCompositionUpdate";break e}ft=void 0}else ws?Jf(t,o)&&(ft="onCompositionEnd"):t==="keydown"&&o.keyCode===229&&(ft="onCompositionStart");ft&&(Kf&&o.locale!=="ko"&&(ws||ft!=="onCompositionStart"?ft==="onCompositionEnd"&&ws&&(rt=Wf()):(xr=Ce,hc="value"in xr?xr.value:xr.textContent,ws=!0)),it=La(le,ft),0<it.length&&(ft=new Yf(ft,t,null,o,Ce),Re.push({event:ft,listeners:it}),rt?ft.data=rt:(rt=eh(o),rt!==null&&(ft.data=rt)))),(rt=_v?yv(t,o):Sv(t,o))&&(le=La(le,"onBeforeInput"),0<le.length&&(Ce=new Yf("onBeforeInput","beforeinput",null,o,Ce),Re.push({event:Ce,listeners:le}),Ce.data=rt))}yh(Re,i)})}function Ho(t,i,o){return{instance:t,listener:i,currentTarget:o}}function La(t,i){for(var o=i+"Capture",l=[];t!==null;){var d=t,m=d.stateNode;d.tag===5&&m!==null&&(d=m,m=_t(t,o),m!=null&&l.unshift(Ho(t,m,d)),m=_t(t,i),m!=null&&l.push(Ho(t,m,d))),t=t.return}return l}function Cs(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Mh(t,i,o,l,d){for(var m=i._reactName,w=[];o!==null&&o!==l;){var F=o,V=F.alternate,le=F.stateNode;if(V!==null&&V===l)break;F.tag===5&&le!==null&&(F=le,d?(V=_t(o,m),V!=null&&w.unshift(Ho(o,V,F))):d||(V=_t(o,m),V!=null&&w.push(Ho(o,V,F)))),o=o.return}w.length!==0&&t.push({event:i,listeners:w})}var Uv=/\r\n?/g,Fv=/\u0000|\uFFFD/g;function Eh(t){return(typeof t=="string"?t:""+t).replace(Uv,`
`).replace(Fv,"")}function Ia(t,i,o){if(i=Eh(i),Eh(t)!==i&&o)throw Error(n(425))}function Na(){}var Pc=null,Dc=null;function Lc(t,i){return t==="textarea"||t==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var Ic=typeof setTimeout=="function"?setTimeout:void 0,zv=typeof clearTimeout=="function"?clearTimeout:void 0,wh=typeof Promise=="function"?Promise:void 0,kv=typeof queueMicrotask=="function"?queueMicrotask:typeof wh<"u"?function(t){return wh.resolve(null).then(t).catch(Ov)}:Ic;function Ov(t){setTimeout(function(){throw t})}function Nc(t,i){var o=i,l=0;do{var d=o.nextSibling;if(t.removeChild(o),d&&d.nodeType===8)if(o=d.data,o==="/$"){if(l===0){t.removeChild(d),Do(i);return}l--}else o!=="$"&&o!=="$?"&&o!=="$!"||l++;o=d}while(o);Do(i)}function yr(t){for(;t!=null;t=t.nextSibling){var i=t.nodeType;if(i===1||i===3)break;if(i===8){if(i=t.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return t}function Th(t){t=t.previousSibling;for(var i=0;t;){if(t.nodeType===8){var o=t.data;if(o==="$"||o==="$!"||o==="$?"){if(i===0)return t;i--}else o==="/$"&&i++}t=t.previousSibling}return null}var As=Math.random().toString(36).slice(2),zi="__reactFiber$"+As,Vo="__reactProps$"+As,Xi="__reactContainer$"+As,Uc="__reactEvents$"+As,Bv="__reactListeners$"+As,Hv="__reactHandles$"+As;function qr(t){var i=t[zi];if(i)return i;for(var o=t.parentNode;o;){if(i=o[Xi]||o[zi]){if(o=i.alternate,i.child!==null||o!==null&&o.child!==null)for(t=Th(t);t!==null;){if(o=t[zi])return o;t=Th(t)}return i}t=o,o=t.parentNode}return null}function jo(t){return t=t[zi]||t[Xi],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Rs(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(n(33))}function Ua(t){return t[Vo]||null}var Fc=[],Ps=-1;function Sr(t){return{current:t}}function Xt(t){0>Ps||(t.current=Fc[Ps],Fc[Ps]=null,Ps--)}function jt(t,i){Ps++,Fc[Ps]=t.current,t.current=i}var Mr={},Sn=Sr(Mr),Fn=Sr(!1),Yr=Mr;function Ds(t,i){var o=t.type.contextTypes;if(!o)return Mr;var l=t.stateNode;if(l&&l.__reactInternalMemoizedUnmaskedChildContext===i)return l.__reactInternalMemoizedMaskedChildContext;var d={},m;for(m in o)d[m]=i[m];return l&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=d),d}function zn(t){return t=t.childContextTypes,t!=null}function Fa(){Xt(Fn),Xt(Sn)}function bh(t,i,o){if(Sn.current!==Mr)throw Error(n(168));jt(Sn,i),jt(Fn,o)}function Ch(t,i,o){var l=t.stateNode;if(i=i.childContextTypes,typeof l.getChildContext!="function")return o;l=l.getChildContext();for(var d in l)if(!(d in i))throw Error(n(108,K(t)||"Unknown",d));return C({},o,l)}function za(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Mr,Yr=Sn.current,jt(Sn,t),jt(Fn,Fn.current),!0}function Ah(t,i,o){var l=t.stateNode;if(!l)throw Error(n(169));o?(t=Ch(t,i,Yr),l.__reactInternalMemoizedMergedChildContext=t,Xt(Fn),Xt(Sn),jt(Sn,t)):Xt(Fn),jt(Fn,o)}var qi=null,ka=!1,zc=!1;function Rh(t){qi===null?qi=[t]:qi.push(t)}function Vv(t){ka=!0,Rh(t)}function Er(){if(!zc&&qi!==null){zc=!0;var t=0,i=Ft;try{var o=qi;for(Ft=1;t<o.length;t++){var l=o[t];do l=l(!0);while(l!==null)}qi=null,ka=!1}catch(d){throw qi!==null&&(qi=qi.slice(t+1)),se(Ye,Er),d}finally{Ft=i,zc=!1}}return null}var Ls=[],Is=0,Oa=null,Ba=0,ii=[],ri=0,$r=null,Yi=1,$i="";function Kr(t,i){Ls[Is++]=Ba,Ls[Is++]=Oa,Oa=t,Ba=i}function Ph(t,i,o){ii[ri++]=Yi,ii[ri++]=$i,ii[ri++]=$r,$r=t;var l=Yi;t=$i;var d=32-gt(l)-1;l&=~(1<<d),o+=1;var m=32-gt(i)+d;if(30<m){var w=d-d%5;m=(l&(1<<w)-1).toString(32),l>>=w,d-=w,Yi=1<<32-gt(i)+d|o<<d|l,$i=m+t}else Yi=1<<m|o<<d|l,$i=t}function kc(t){t.return!==null&&(Kr(t,1),Ph(t,1,0))}function Oc(t){for(;t===Oa;)Oa=Ls[--Is],Ls[Is]=null,Ba=Ls[--Is],Ls[Is]=null;for(;t===$r;)$r=ii[--ri],ii[ri]=null,$i=ii[--ri],ii[ri]=null,Yi=ii[--ri],ii[ri]=null}var qn=null,Yn=null,qt=!1,Mi=null;function Dh(t,i){var o=li(5,null,null,0);o.elementType="DELETED",o.stateNode=i,o.return=t,i=t.deletions,i===null?(t.deletions=[o],t.flags|=16):i.push(o)}function Lh(t,i){switch(t.tag){case 5:var o=t.type;return i=i.nodeType!==1||o.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(t.stateNode=i,qn=t,Yn=yr(i.firstChild),!0):!1;case 6:return i=t.pendingProps===""||i.nodeType!==3?null:i,i!==null?(t.stateNode=i,qn=t,Yn=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(o=$r!==null?{id:Yi,overflow:$i}:null,t.memoizedState={dehydrated:i,treeContext:o,retryLane:1073741824},o=li(18,null,null,0),o.stateNode=i,o.return=t,t.child=o,qn=t,Yn=null,!0):!1;default:return!1}}function Bc(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Hc(t){if(qt){var i=Yn;if(i){var o=i;if(!Lh(t,i)){if(Bc(t))throw Error(n(418));i=yr(o.nextSibling);var l=qn;i&&Lh(t,i)?Dh(l,o):(t.flags=t.flags&-4097|2,qt=!1,qn=t)}}else{if(Bc(t))throw Error(n(418));t.flags=t.flags&-4097|2,qt=!1,qn=t}}}function Ih(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;qn=t}function Ha(t){if(t!==qn)return!1;if(!qt)return Ih(t),qt=!0,!1;var i;if((i=t.tag!==3)&&!(i=t.tag!==5)&&(i=t.type,i=i!=="head"&&i!=="body"&&!Lc(t.type,t.memoizedProps)),i&&(i=Yn)){if(Bc(t))throw Nh(),Error(n(418));for(;i;)Dh(t,i),i=yr(i.nextSibling)}if(Ih(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(n(317));e:{for(t=t.nextSibling,i=0;t;){if(t.nodeType===8){var o=t.data;if(o==="/$"){if(i===0){Yn=yr(t.nextSibling);break e}i--}else o!=="$"&&o!=="$!"&&o!=="$?"||i++}t=t.nextSibling}Yn=null}}else Yn=qn?yr(t.stateNode.nextSibling):null;return!0}function Nh(){for(var t=Yn;t;)t=yr(t.nextSibling)}function Ns(){Yn=qn=null,qt=!1}function Vc(t){Mi===null?Mi=[t]:Mi.push(t)}var jv=A.ReactCurrentBatchConfig;function Go(t,i,o){if(t=o.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(o._owner){if(o=o._owner,o){if(o.tag!==1)throw Error(n(309));var l=o.stateNode}if(!l)throw Error(n(147,t));var d=l,m=""+t;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===m?i.ref:(i=function(w){var F=d.refs;w===null?delete F[m]:F[m]=w},i._stringRef=m,i)}if(typeof t!="string")throw Error(n(284));if(!o._owner)throw Error(n(290,t))}return t}function Va(t,i){throw t=Object.prototype.toString.call(i),Error(n(31,t==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":t))}function Uh(t){var i=t._init;return i(t._payload)}function Fh(t){function i(ee,X){if(t){var re=ee.deletions;re===null?(ee.deletions=[X],ee.flags|=16):re.push(X)}}function o(ee,X){if(!t)return null;for(;X!==null;)i(ee,X),X=X.sibling;return null}function l(ee,X){for(ee=new Map;X!==null;)X.key!==null?ee.set(X.key,X):ee.set(X.index,X),X=X.sibling;return ee}function d(ee,X){return ee=Dr(ee,X),ee.index=0,ee.sibling=null,ee}function m(ee,X,re){return ee.index=re,t?(re=ee.alternate,re!==null?(re=re.index,re<X?(ee.flags|=2,X):re):(ee.flags|=2,X)):(ee.flags|=1048576,X)}function w(ee){return t&&ee.alternate===null&&(ee.flags|=2),ee}function F(ee,X,re,Pe){return X===null||X.tag!==6?(X=Iu(re,ee.mode,Pe),X.return=ee,X):(X=d(X,re),X.return=ee,X)}function V(ee,X,re,Pe){var Je=re.type;return Je===B?Ce(ee,X,re.props.children,Pe,re.key):X!==null&&(X.elementType===Je||typeof Je=="object"&&Je!==null&&Je.$$typeof===de&&Uh(Je)===X.type)?(Pe=d(X,re.props),Pe.ref=Go(ee,X,re),Pe.return=ee,Pe):(Pe=fl(re.type,re.key,re.props,null,ee.mode,Pe),Pe.ref=Go(ee,X,re),Pe.return=ee,Pe)}function le(ee,X,re,Pe){return X===null||X.tag!==4||X.stateNode.containerInfo!==re.containerInfo||X.stateNode.implementation!==re.implementation?(X=Nu(re,ee.mode,Pe),X.return=ee,X):(X=d(X,re.children||[]),X.return=ee,X)}function Ce(ee,X,re,Pe,Je){return X===null||X.tag!==7?(X=rs(re,ee.mode,Pe,Je),X.return=ee,X):(X=d(X,re),X.return=ee,X)}function Re(ee,X,re){if(typeof X=="string"&&X!==""||typeof X=="number")return X=Iu(""+X,ee.mode,re),X.return=ee,X;if(typeof X=="object"&&X!==null){switch(X.$$typeof){case Q:return re=fl(X.type,X.key,X.props,null,ee.mode,re),re.ref=Go(ee,null,X),re.return=ee,re;case O:return X=Nu(X,ee.mode,re),X.return=ee,X;case de:var Pe=X._init;return Re(ee,Pe(X._payload),re)}if(Fe(X)||me(X))return X=rs(X,ee.mode,re,null),X.return=ee,X;Va(ee,X)}return null}function Te(ee,X,re,Pe){var Je=X!==null?X.key:null;if(typeof re=="string"&&re!==""||typeof re=="number")return Je!==null?null:F(ee,X,""+re,Pe);if(typeof re=="object"&&re!==null){switch(re.$$typeof){case Q:return re.key===Je?V(ee,X,re,Pe):null;case O:return re.key===Je?le(ee,X,re,Pe):null;case de:return Je=re._init,Te(ee,X,Je(re._payload),Pe)}if(Fe(re)||me(re))return Je!==null?null:Ce(ee,X,re,Pe,null);Va(ee,re)}return null}function We(ee,X,re,Pe,Je){if(typeof Pe=="string"&&Pe!==""||typeof Pe=="number")return ee=ee.get(re)||null,F(X,ee,""+Pe,Je);if(typeof Pe=="object"&&Pe!==null){switch(Pe.$$typeof){case Q:return ee=ee.get(Pe.key===null?re:Pe.key)||null,V(X,ee,Pe,Je);case O:return ee=ee.get(Pe.key===null?re:Pe.key)||null,le(X,ee,Pe,Je);case de:var it=Pe._init;return We(ee,X,re,it(Pe._payload),Je)}if(Fe(Pe)||me(Pe))return ee=ee.get(re)||null,Ce(X,ee,Pe,Je,null);Va(X,Pe)}return null}function $e(ee,X,re,Pe){for(var Je=null,it=null,rt=X,ft=X=0,fn=null;rt!==null&&ft<re.length;ft++){rt.index>ft?(fn=rt,rt=null):fn=rt.sibling;var Rt=Te(ee,rt,re[ft],Pe);if(Rt===null){rt===null&&(rt=fn);break}t&&rt&&Rt.alternate===null&&i(ee,rt),X=m(Rt,X,ft),it===null?Je=Rt:it.sibling=Rt,it=Rt,rt=fn}if(ft===re.length)return o(ee,rt),qt&&Kr(ee,ft),Je;if(rt===null){for(;ft<re.length;ft++)rt=Re(ee,re[ft],Pe),rt!==null&&(X=m(rt,X,ft),it===null?Je=rt:it.sibling=rt,it=rt);return qt&&Kr(ee,ft),Je}for(rt=l(ee,rt);ft<re.length;ft++)fn=We(rt,ee,ft,re[ft],Pe),fn!==null&&(t&&fn.alternate!==null&&rt.delete(fn.key===null?ft:fn.key),X=m(fn,X,ft),it===null?Je=fn:it.sibling=fn,it=fn);return t&&rt.forEach(function(Lr){return i(ee,Lr)}),qt&&Kr(ee,ft),Je}function Qe(ee,X,re,Pe){var Je=me(re);if(typeof Je!="function")throw Error(n(150));if(re=Je.call(re),re==null)throw Error(n(151));for(var it=Je=null,rt=X,ft=X=0,fn=null,Rt=re.next();rt!==null&&!Rt.done;ft++,Rt=re.next()){rt.index>ft?(fn=rt,rt=null):fn=rt.sibling;var Lr=Te(ee,rt,Rt.value,Pe);if(Lr===null){rt===null&&(rt=fn);break}t&&rt&&Lr.alternate===null&&i(ee,rt),X=m(Lr,X,ft),it===null?Je=Lr:it.sibling=Lr,it=Lr,rt=fn}if(Rt.done)return o(ee,rt),qt&&Kr(ee,ft),Je;if(rt===null){for(;!Rt.done;ft++,Rt=re.next())Rt=Re(ee,Rt.value,Pe),Rt!==null&&(X=m(Rt,X,ft),it===null?Je=Rt:it.sibling=Rt,it=Rt);return qt&&Kr(ee,ft),Je}for(rt=l(ee,rt);!Rt.done;ft++,Rt=re.next())Rt=We(rt,ee,ft,Rt.value,Pe),Rt!==null&&(t&&Rt.alternate!==null&&rt.delete(Rt.key===null?ft:Rt.key),X=m(Rt,X,ft),it===null?Je=Rt:it.sibling=Rt,it=Rt);return t&&rt.forEach(function(Mx){return i(ee,Mx)}),qt&&Kr(ee,ft),Je}function Qt(ee,X,re,Pe){if(typeof re=="object"&&re!==null&&re.type===B&&re.key===null&&(re=re.props.children),typeof re=="object"&&re!==null){switch(re.$$typeof){case Q:e:{for(var Je=re.key,it=X;it!==null;){if(it.key===Je){if(Je=re.type,Je===B){if(it.tag===7){o(ee,it.sibling),X=d(it,re.props.children),X.return=ee,ee=X;break e}}else if(it.elementType===Je||typeof Je=="object"&&Je!==null&&Je.$$typeof===de&&Uh(Je)===it.type){o(ee,it.sibling),X=d(it,re.props),X.ref=Go(ee,it,re),X.return=ee,ee=X;break e}o(ee,it);break}else i(ee,it);it=it.sibling}re.type===B?(X=rs(re.props.children,ee.mode,Pe,re.key),X.return=ee,ee=X):(Pe=fl(re.type,re.key,re.props,null,ee.mode,Pe),Pe.ref=Go(ee,X,re),Pe.return=ee,ee=Pe)}return w(ee);case O:e:{for(it=re.key;X!==null;){if(X.key===it)if(X.tag===4&&X.stateNode.containerInfo===re.containerInfo&&X.stateNode.implementation===re.implementation){o(ee,X.sibling),X=d(X,re.children||[]),X.return=ee,ee=X;break e}else{o(ee,X);break}else i(ee,X);X=X.sibling}X=Nu(re,ee.mode,Pe),X.return=ee,ee=X}return w(ee);case de:return it=re._init,Qt(ee,X,it(re._payload),Pe)}if(Fe(re))return $e(ee,X,re,Pe);if(me(re))return Qe(ee,X,re,Pe);Va(ee,re)}return typeof re=="string"&&re!==""||typeof re=="number"?(re=""+re,X!==null&&X.tag===6?(o(ee,X.sibling),X=d(X,re),X.return=ee,ee=X):(o(ee,X),X=Iu(re,ee.mode,Pe),X.return=ee,ee=X),w(ee)):o(ee,X)}return Qt}var Us=Fh(!0),zh=Fh(!1),ja=Sr(null),Ga=null,Fs=null,jc=null;function Gc(){jc=Fs=Ga=null}function Wc(t){var i=ja.current;Xt(ja),t._currentValue=i}function Xc(t,i,o){for(;t!==null;){var l=t.alternate;if((t.childLanes&i)!==i?(t.childLanes|=i,l!==null&&(l.childLanes|=i)):l!==null&&(l.childLanes&i)!==i&&(l.childLanes|=i),t===o)break;t=t.return}}function zs(t,i){Ga=t,jc=Fs=null,t=t.dependencies,t!==null&&t.firstContext!==null&&((t.lanes&i)!==0&&(kn=!0),t.firstContext=null)}function si(t){var i=t._currentValue;if(jc!==t)if(t={context:t,memoizedValue:i,next:null},Fs===null){if(Ga===null)throw Error(n(308));Fs=t,Ga.dependencies={lanes:0,firstContext:t}}else Fs=Fs.next=t;return i}var Zr=null;function qc(t){Zr===null?Zr=[t]:Zr.push(t)}function kh(t,i,o,l){var d=i.interleaved;return d===null?(o.next=o,qc(i)):(o.next=d.next,d.next=o),i.interleaved=o,Ki(t,l)}function Ki(t,i){t.lanes|=i;var o=t.alternate;for(o!==null&&(o.lanes|=i),o=t,t=t.return;t!==null;)t.childLanes|=i,o=t.alternate,o!==null&&(o.childLanes|=i),o=t,t=t.return;return o.tag===3?o.stateNode:null}var wr=!1;function Yc(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Oh(t,i){t=t.updateQueue,i.updateQueue===t&&(i.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Zi(t,i){return{eventTime:t,lane:i,tag:0,payload:null,callback:null,next:null}}function Tr(t,i,o){var l=t.updateQueue;if(l===null)return null;if(l=l.shared,(bt&2)!==0){var d=l.pending;return d===null?i.next=i:(i.next=d.next,d.next=i),l.pending=i,Ki(t,o)}return d=l.interleaved,d===null?(i.next=i,qc(l)):(i.next=d.next,d.next=i),l.interleaved=i,Ki(t,o)}function Wa(t,i,o){if(i=i.updateQueue,i!==null&&(i=i.shared,(o&4194240)!==0)){var l=i.lanes;l&=t.pendingLanes,o|=l,i.lanes=o,lc(t,o)}}function Bh(t,i){var o=t.updateQueue,l=t.alternate;if(l!==null&&(l=l.updateQueue,o===l)){var d=null,m=null;if(o=o.firstBaseUpdate,o!==null){do{var w={eventTime:o.eventTime,lane:o.lane,tag:o.tag,payload:o.payload,callback:o.callback,next:null};m===null?d=m=w:m=m.next=w,o=o.next}while(o!==null);m===null?d=m=i:m=m.next=i}else d=m=i;o={baseState:l.baseState,firstBaseUpdate:d,lastBaseUpdate:m,shared:l.shared,effects:l.effects},t.updateQueue=o;return}t=o.lastBaseUpdate,t===null?o.firstBaseUpdate=i:t.next=i,o.lastBaseUpdate=i}function Xa(t,i,o,l){var d=t.updateQueue;wr=!1;var m=d.firstBaseUpdate,w=d.lastBaseUpdate,F=d.shared.pending;if(F!==null){d.shared.pending=null;var V=F,le=V.next;V.next=null,w===null?m=le:w.next=le,w=V;var Ce=t.alternate;Ce!==null&&(Ce=Ce.updateQueue,F=Ce.lastBaseUpdate,F!==w&&(F===null?Ce.firstBaseUpdate=le:F.next=le,Ce.lastBaseUpdate=V))}if(m!==null){var Re=d.baseState;w=0,Ce=le=V=null,F=m;do{var Te=F.lane,We=F.eventTime;if((l&Te)===Te){Ce!==null&&(Ce=Ce.next={eventTime:We,lane:0,tag:F.tag,payload:F.payload,callback:F.callback,next:null});e:{var $e=t,Qe=F;switch(Te=i,We=o,Qe.tag){case 1:if($e=Qe.payload,typeof $e=="function"){Re=$e.call(We,Re,Te);break e}Re=$e;break e;case 3:$e.flags=$e.flags&-65537|128;case 0:if($e=Qe.payload,Te=typeof $e=="function"?$e.call(We,Re,Te):$e,Te==null)break e;Re=C({},Re,Te);break e;case 2:wr=!0}}F.callback!==null&&F.lane!==0&&(t.flags|=64,Te=d.effects,Te===null?d.effects=[F]:Te.push(F))}else We={eventTime:We,lane:Te,tag:F.tag,payload:F.payload,callback:F.callback,next:null},Ce===null?(le=Ce=We,V=Re):Ce=Ce.next=We,w|=Te;if(F=F.next,F===null){if(F=d.shared.pending,F===null)break;Te=F,F=Te.next,Te.next=null,d.lastBaseUpdate=Te,d.shared.pending=null}}while(!0);if(Ce===null&&(V=Re),d.baseState=V,d.firstBaseUpdate=le,d.lastBaseUpdate=Ce,i=d.shared.interleaved,i!==null){d=i;do w|=d.lane,d=d.next;while(d!==i)}else m===null&&(d.shared.lanes=0);es|=w,t.lanes=w,t.memoizedState=Re}}function Hh(t,i,o){if(t=i.effects,i.effects=null,t!==null)for(i=0;i<t.length;i++){var l=t[i],d=l.callback;if(d!==null){if(l.callback=null,l=o,typeof d!="function")throw Error(n(191,d));d.call(l)}}}var Wo={},ki=Sr(Wo),Xo=Sr(Wo),qo=Sr(Wo);function Qr(t){if(t===Wo)throw Error(n(174));return t}function $c(t,i){switch(jt(qo,i),jt(Xo,t),jt(ki,Wo),t=i.nodeType,t){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:Xe(null,"");break;default:t=t===8?i.parentNode:i,i=t.namespaceURI||null,t=t.tagName,i=Xe(i,t)}Xt(ki),jt(ki,i)}function ks(){Xt(ki),Xt(Xo),Xt(qo)}function Vh(t){Qr(qo.current);var i=Qr(ki.current),o=Xe(i,t.type);i!==o&&(jt(Xo,t),jt(ki,o))}function Kc(t){Xo.current===t&&(Xt(ki),Xt(Xo))}var Yt=Sr(0);function qa(t){for(var i=t;i!==null;){if(i.tag===13){var o=i.memoizedState;if(o!==null&&(o=o.dehydrated,o===null||o.data==="$?"||o.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var Zc=[];function Qc(){for(var t=0;t<Zc.length;t++)Zc[t]._workInProgressVersionPrimary=null;Zc.length=0}var Ya=A.ReactCurrentDispatcher,Jc=A.ReactCurrentBatchConfig,Jr=0,$t=null,on=null,un=null,$a=!1,Yo=!1,$o=0,Gv=0;function Mn(){throw Error(n(321))}function eu(t,i){if(i===null)return!1;for(var o=0;o<i.length&&o<t.length;o++)if(!Si(t[o],i[o]))return!1;return!0}function tu(t,i,o,l,d,m){if(Jr=m,$t=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,Ya.current=t===null||t.memoizedState===null?Yv:$v,t=o(l,d),Yo){m=0;do{if(Yo=!1,$o=0,25<=m)throw Error(n(301));m+=1,un=on=null,i.updateQueue=null,Ya.current=Kv,t=o(l,d)}while(Yo)}if(Ya.current=Qa,i=on!==null&&on.next!==null,Jr=0,un=on=$t=null,$a=!1,i)throw Error(n(300));return t}function nu(){var t=$o!==0;return $o=0,t}function Oi(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return un===null?$t.memoizedState=un=t:un=un.next=t,un}function oi(){if(on===null){var t=$t.alternate;t=t!==null?t.memoizedState:null}else t=on.next;var i=un===null?$t.memoizedState:un.next;if(i!==null)un=i,on=t;else{if(t===null)throw Error(n(310));on=t,t={memoizedState:on.memoizedState,baseState:on.baseState,baseQueue:on.baseQueue,queue:on.queue,next:null},un===null?$t.memoizedState=un=t:un=un.next=t}return un}function Ko(t,i){return typeof i=="function"?i(t):i}function iu(t){var i=oi(),o=i.queue;if(o===null)throw Error(n(311));o.lastRenderedReducer=t;var l=on,d=l.baseQueue,m=o.pending;if(m!==null){if(d!==null){var w=d.next;d.next=m.next,m.next=w}l.baseQueue=d=m,o.pending=null}if(d!==null){m=d.next,l=l.baseState;var F=w=null,V=null,le=m;do{var Ce=le.lane;if((Jr&Ce)===Ce)V!==null&&(V=V.next={lane:0,action:le.action,hasEagerState:le.hasEagerState,eagerState:le.eagerState,next:null}),l=le.hasEagerState?le.eagerState:t(l,le.action);else{var Re={lane:Ce,action:le.action,hasEagerState:le.hasEagerState,eagerState:le.eagerState,next:null};V===null?(F=V=Re,w=l):V=V.next=Re,$t.lanes|=Ce,es|=Ce}le=le.next}while(le!==null&&le!==m);V===null?w=l:V.next=F,Si(l,i.memoizedState)||(kn=!0),i.memoizedState=l,i.baseState=w,i.baseQueue=V,o.lastRenderedState=l}if(t=o.interleaved,t!==null){d=t;do m=d.lane,$t.lanes|=m,es|=m,d=d.next;while(d!==t)}else d===null&&(o.lanes=0);return[i.memoizedState,o.dispatch]}function ru(t){var i=oi(),o=i.queue;if(o===null)throw Error(n(311));o.lastRenderedReducer=t;var l=o.dispatch,d=o.pending,m=i.memoizedState;if(d!==null){o.pending=null;var w=d=d.next;do m=t(m,w.action),w=w.next;while(w!==d);Si(m,i.memoizedState)||(kn=!0),i.memoizedState=m,i.baseQueue===null&&(i.baseState=m),o.lastRenderedState=m}return[m,l]}function jh(){}function Gh(t,i){var o=$t,l=oi(),d=i(),m=!Si(l.memoizedState,d);if(m&&(l.memoizedState=d,kn=!0),l=l.queue,su(qh.bind(null,o,l,t),[t]),l.getSnapshot!==i||m||un!==null&&un.memoizedState.tag&1){if(o.flags|=2048,Zo(9,Xh.bind(null,o,l,d,i),void 0,null),dn===null)throw Error(n(349));(Jr&30)!==0||Wh(o,i,d)}return d}function Wh(t,i,o){t.flags|=16384,t={getSnapshot:i,value:o},i=$t.updateQueue,i===null?(i={lastEffect:null,stores:null},$t.updateQueue=i,i.stores=[t]):(o=i.stores,o===null?i.stores=[t]:o.push(t))}function Xh(t,i,o,l){i.value=o,i.getSnapshot=l,Yh(i)&&$h(t)}function qh(t,i,o){return o(function(){Yh(i)&&$h(t)})}function Yh(t){var i=t.getSnapshot;t=t.value;try{var o=i();return!Si(t,o)}catch{return!0}}function $h(t){var i=Ki(t,1);i!==null&&bi(i,t,1,-1)}function Kh(t){var i=Oi();return typeof t=="function"&&(t=t()),i.memoizedState=i.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ko,lastRenderedState:t},i.queue=t,t=t.dispatch=qv.bind(null,$t,t),[i.memoizedState,t]}function Zo(t,i,o,l){return t={tag:t,create:i,destroy:o,deps:l,next:null},i=$t.updateQueue,i===null?(i={lastEffect:null,stores:null},$t.updateQueue=i,i.lastEffect=t.next=t):(o=i.lastEffect,o===null?i.lastEffect=t.next=t:(l=o.next,o.next=t,t.next=l,i.lastEffect=t)),t}function Zh(){return oi().memoizedState}function Ka(t,i,o,l){var d=Oi();$t.flags|=t,d.memoizedState=Zo(1|i,o,void 0,l===void 0?null:l)}function Za(t,i,o,l){var d=oi();l=l===void 0?null:l;var m=void 0;if(on!==null){var w=on.memoizedState;if(m=w.destroy,l!==null&&eu(l,w.deps)){d.memoizedState=Zo(i,o,m,l);return}}$t.flags|=t,d.memoizedState=Zo(1|i,o,m,l)}function Qh(t,i){return Ka(8390656,8,t,i)}function su(t,i){return Za(2048,8,t,i)}function Jh(t,i){return Za(4,2,t,i)}function ep(t,i){return Za(4,4,t,i)}function tp(t,i){if(typeof i=="function")return t=t(),i(t),function(){i(null)};if(i!=null)return t=t(),i.current=t,function(){i.current=null}}function np(t,i,o){return o=o!=null?o.concat([t]):null,Za(4,4,tp.bind(null,i,t),o)}function ou(){}function ip(t,i){var o=oi();i=i===void 0?null:i;var l=o.memoizedState;return l!==null&&i!==null&&eu(i,l[1])?l[0]:(o.memoizedState=[t,i],t)}function rp(t,i){var o=oi();i=i===void 0?null:i;var l=o.memoizedState;return l!==null&&i!==null&&eu(i,l[1])?l[0]:(t=t(),o.memoizedState=[t,i],t)}function sp(t,i,o){return(Jr&21)===0?(t.baseState&&(t.baseState=!1,kn=!0),t.memoizedState=o):(Si(o,i)||(o=An(),$t.lanes|=o,es|=o,t.baseState=!0),i)}function Wv(t,i){var o=Ft;Ft=o!==0&&4>o?o:4,t(!0);var l=Jc.transition;Jc.transition={};try{t(!1),i()}finally{Ft=o,Jc.transition=l}}function op(){return oi().memoizedState}function Xv(t,i,o){var l=Rr(t);if(o={lane:l,action:o,hasEagerState:!1,eagerState:null,next:null},ap(t))lp(i,o);else if(o=kh(t,i,o,l),o!==null){var d=Pn();bi(o,t,l,d),cp(o,i,l)}}function qv(t,i,o){var l=Rr(t),d={lane:l,action:o,hasEagerState:!1,eagerState:null,next:null};if(ap(t))lp(i,d);else{var m=t.alternate;if(t.lanes===0&&(m===null||m.lanes===0)&&(m=i.lastRenderedReducer,m!==null))try{var w=i.lastRenderedState,F=m(w,o);if(d.hasEagerState=!0,d.eagerState=F,Si(F,w)){var V=i.interleaved;V===null?(d.next=d,qc(i)):(d.next=V.next,V.next=d),i.interleaved=d;return}}catch{}finally{}o=kh(t,i,d,l),o!==null&&(d=Pn(),bi(o,t,l,d),cp(o,i,l))}}function ap(t){var i=t.alternate;return t===$t||i!==null&&i===$t}function lp(t,i){Yo=$a=!0;var o=t.pending;o===null?i.next=i:(i.next=o.next,o.next=i),t.pending=i}function cp(t,i,o){if((o&4194240)!==0){var l=i.lanes;l&=t.pendingLanes,o|=l,i.lanes=o,lc(t,o)}}var Qa={readContext:si,useCallback:Mn,useContext:Mn,useEffect:Mn,useImperativeHandle:Mn,useInsertionEffect:Mn,useLayoutEffect:Mn,useMemo:Mn,useReducer:Mn,useRef:Mn,useState:Mn,useDebugValue:Mn,useDeferredValue:Mn,useTransition:Mn,useMutableSource:Mn,useSyncExternalStore:Mn,useId:Mn,unstable_isNewReconciler:!1},Yv={readContext:si,useCallback:function(t,i){return Oi().memoizedState=[t,i===void 0?null:i],t},useContext:si,useEffect:Qh,useImperativeHandle:function(t,i,o){return o=o!=null?o.concat([t]):null,Ka(4194308,4,tp.bind(null,i,t),o)},useLayoutEffect:function(t,i){return Ka(4194308,4,t,i)},useInsertionEffect:function(t,i){return Ka(4,2,t,i)},useMemo:function(t,i){var o=Oi();return i=i===void 0?null:i,t=t(),o.memoizedState=[t,i],t},useReducer:function(t,i,o){var l=Oi();return i=o!==void 0?o(i):i,l.memoizedState=l.baseState=i,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:i},l.queue=t,t=t.dispatch=Xv.bind(null,$t,t),[l.memoizedState,t]},useRef:function(t){var i=Oi();return t={current:t},i.memoizedState=t},useState:Kh,useDebugValue:ou,useDeferredValue:function(t){return Oi().memoizedState=t},useTransition:function(){var t=Kh(!1),i=t[0];return t=Wv.bind(null,t[1]),Oi().memoizedState=t,[i,t]},useMutableSource:function(){},useSyncExternalStore:function(t,i,o){var l=$t,d=Oi();if(qt){if(o===void 0)throw Error(n(407));o=o()}else{if(o=i(),dn===null)throw Error(n(349));(Jr&30)!==0||Wh(l,i,o)}d.memoizedState=o;var m={value:o,getSnapshot:i};return d.queue=m,Qh(qh.bind(null,l,m,t),[t]),l.flags|=2048,Zo(9,Xh.bind(null,l,m,o,i),void 0,null),o},useId:function(){var t=Oi(),i=dn.identifierPrefix;if(qt){var o=$i,l=Yi;o=(l&~(1<<32-gt(l)-1)).toString(32)+o,i=":"+i+"R"+o,o=$o++,0<o&&(i+="H"+o.toString(32)),i+=":"}else o=Gv++,i=":"+i+"r"+o.toString(32)+":";return t.memoizedState=i},unstable_isNewReconciler:!1},$v={readContext:si,useCallback:ip,useContext:si,useEffect:su,useImperativeHandle:np,useInsertionEffect:Jh,useLayoutEffect:ep,useMemo:rp,useReducer:iu,useRef:Zh,useState:function(){return iu(Ko)},useDebugValue:ou,useDeferredValue:function(t){var i=oi();return sp(i,on.memoizedState,t)},useTransition:function(){var t=iu(Ko)[0],i=oi().memoizedState;return[t,i]},useMutableSource:jh,useSyncExternalStore:Gh,useId:op,unstable_isNewReconciler:!1},Kv={readContext:si,useCallback:ip,useContext:si,useEffect:su,useImperativeHandle:np,useInsertionEffect:Jh,useLayoutEffect:ep,useMemo:rp,useReducer:ru,useRef:Zh,useState:function(){return ru(Ko)},useDebugValue:ou,useDeferredValue:function(t){var i=oi();return on===null?i.memoizedState=t:sp(i,on.memoizedState,t)},useTransition:function(){var t=ru(Ko)[0],i=oi().memoizedState;return[t,i]},useMutableSource:jh,useSyncExternalStore:Gh,useId:op,unstable_isNewReconciler:!1};function Ei(t,i){if(t&&t.defaultProps){i=C({},i),t=t.defaultProps;for(var o in t)i[o]===void 0&&(i[o]=t[o]);return i}return i}function au(t,i,o,l){i=t.memoizedState,o=o(l,i),o=o==null?i:C({},i,o),t.memoizedState=o,t.lanes===0&&(t.updateQueue.baseState=o)}var Ja={isMounted:function(t){return(t=t._reactInternals)?gn(t)===t:!1},enqueueSetState:function(t,i,o){t=t._reactInternals;var l=Pn(),d=Rr(t),m=Zi(l,d);m.payload=i,o!=null&&(m.callback=o),i=Tr(t,m,d),i!==null&&(bi(i,t,d,l),Wa(i,t,d))},enqueueReplaceState:function(t,i,o){t=t._reactInternals;var l=Pn(),d=Rr(t),m=Zi(l,d);m.tag=1,m.payload=i,o!=null&&(m.callback=o),i=Tr(t,m,d),i!==null&&(bi(i,t,d,l),Wa(i,t,d))},enqueueForceUpdate:function(t,i){t=t._reactInternals;var o=Pn(),l=Rr(t),d=Zi(o,l);d.tag=2,i!=null&&(d.callback=i),i=Tr(t,d,l),i!==null&&(bi(i,t,l,o),Wa(i,t,l))}};function up(t,i,o,l,d,m,w){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(l,m,w):i.prototype&&i.prototype.isPureReactComponent?!zo(o,l)||!zo(d,m):!0}function dp(t,i,o){var l=!1,d=Mr,m=i.contextType;return typeof m=="object"&&m!==null?m=si(m):(d=zn(i)?Yr:Sn.current,l=i.contextTypes,m=(l=l!=null)?Ds(t,d):Mr),i=new i(o,m),t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=Ja,t.stateNode=i,i._reactInternals=t,l&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=d,t.__reactInternalMemoizedMaskedChildContext=m),i}function fp(t,i,o,l){t=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(o,l),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(o,l),i.state!==t&&Ja.enqueueReplaceState(i,i.state,null)}function lu(t,i,o,l){var d=t.stateNode;d.props=o,d.state=t.memoizedState,d.refs={},Yc(t);var m=i.contextType;typeof m=="object"&&m!==null?d.context=si(m):(m=zn(i)?Yr:Sn.current,d.context=Ds(t,m)),d.state=t.memoizedState,m=i.getDerivedStateFromProps,typeof m=="function"&&(au(t,i,m,o),d.state=t.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(i=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),i!==d.state&&Ja.enqueueReplaceState(d,d.state,null),Xa(t,o,d,l),d.state=t.memoizedState),typeof d.componentDidMount=="function"&&(t.flags|=4194308)}function Os(t,i){try{var o="",l=i;do o+=W(l),l=l.return;while(l);var d=o}catch(m){d=`
Error generating stack: `+m.message+`
`+m.stack}return{value:t,source:i,stack:d,digest:null}}function cu(t,i,o){return{value:t,source:null,stack:o??null,digest:i??null}}function uu(t,i){try{console.error(i.value)}catch(o){setTimeout(function(){throw o})}}var Zv=typeof WeakMap=="function"?WeakMap:Map;function hp(t,i,o){o=Zi(-1,o),o.tag=3,o.payload={element:null};var l=i.value;return o.callback=function(){ol||(ol=!0,Tu=l),uu(t,i)},o}function pp(t,i,o){o=Zi(-1,o),o.tag=3;var l=t.type.getDerivedStateFromError;if(typeof l=="function"){var d=i.value;o.payload=function(){return l(d)},o.callback=function(){uu(t,i)}}var m=t.stateNode;return m!==null&&typeof m.componentDidCatch=="function"&&(o.callback=function(){uu(t,i),typeof l!="function"&&(Cr===null?Cr=new Set([this]):Cr.add(this));var w=i.stack;this.componentDidCatch(i.value,{componentStack:w!==null?w:""})}),o}function mp(t,i,o){var l=t.pingCache;if(l===null){l=t.pingCache=new Zv;var d=new Set;l.set(i,d)}else d=l.get(i),d===void 0&&(d=new Set,l.set(i,d));d.has(o)||(d.add(o),t=dx.bind(null,t,i,o),i.then(t,t))}function gp(t){do{var i;if((i=t.tag===13)&&(i=t.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return t;t=t.return}while(t!==null);return null}function vp(t,i,o,l,d){return(t.mode&1)===0?(t===i?t.flags|=65536:(t.flags|=128,o.flags|=131072,o.flags&=-52805,o.tag===1&&(o.alternate===null?o.tag=17:(i=Zi(-1,1),i.tag=2,Tr(o,i,1))),o.lanes|=1),t):(t.flags|=65536,t.lanes=d,t)}var Qv=A.ReactCurrentOwner,kn=!1;function Rn(t,i,o,l){i.child=t===null?zh(i,null,o,l):Us(i,t.child,o,l)}function xp(t,i,o,l,d){o=o.render;var m=i.ref;return zs(i,d),l=tu(t,i,o,l,m,d),o=nu(),t!==null&&!kn?(i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~d,Qi(t,i,d)):(qt&&o&&kc(i),i.flags|=1,Rn(t,i,l,d),i.child)}function _p(t,i,o,l,d){if(t===null){var m=o.type;return typeof m=="function"&&!Lu(m)&&m.defaultProps===void 0&&o.compare===null&&o.defaultProps===void 0?(i.tag=15,i.type=m,yp(t,i,m,l,d)):(t=fl(o.type,null,l,i,i.mode,d),t.ref=i.ref,t.return=i,i.child=t)}if(m=t.child,(t.lanes&d)===0){var w=m.memoizedProps;if(o=o.compare,o=o!==null?o:zo,o(w,l)&&t.ref===i.ref)return Qi(t,i,d)}return i.flags|=1,t=Dr(m,l),t.ref=i.ref,t.return=i,i.child=t}function yp(t,i,o,l,d){if(t!==null){var m=t.memoizedProps;if(zo(m,l)&&t.ref===i.ref)if(kn=!1,i.pendingProps=l=m,(t.lanes&d)!==0)(t.flags&131072)!==0&&(kn=!0);else return i.lanes=t.lanes,Qi(t,i,d)}return du(t,i,o,l,d)}function Sp(t,i,o){var l=i.pendingProps,d=l.children,m=t!==null?t.memoizedState:null;if(l.mode==="hidden")if((i.mode&1)===0)i.memoizedState={baseLanes:0,cachePool:null,transitions:null},jt(Hs,$n),$n|=o;else{if((o&1073741824)===0)return t=m!==null?m.baseLanes|o:o,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:t,cachePool:null,transitions:null},i.updateQueue=null,jt(Hs,$n),$n|=t,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},l=m!==null?m.baseLanes:o,jt(Hs,$n),$n|=l}else m!==null?(l=m.baseLanes|o,i.memoizedState=null):l=o,jt(Hs,$n),$n|=l;return Rn(t,i,d,o),i.child}function Mp(t,i){var o=i.ref;(t===null&&o!==null||t!==null&&t.ref!==o)&&(i.flags|=512,i.flags|=2097152)}function du(t,i,o,l,d){var m=zn(o)?Yr:Sn.current;return m=Ds(i,m),zs(i,d),o=tu(t,i,o,l,m,d),l=nu(),t!==null&&!kn?(i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~d,Qi(t,i,d)):(qt&&l&&kc(i),i.flags|=1,Rn(t,i,o,d),i.child)}function Ep(t,i,o,l,d){if(zn(o)){var m=!0;za(i)}else m=!1;if(zs(i,d),i.stateNode===null)tl(t,i),dp(i,o,l),lu(i,o,l,d),l=!0;else if(t===null){var w=i.stateNode,F=i.memoizedProps;w.props=F;var V=w.context,le=o.contextType;typeof le=="object"&&le!==null?le=si(le):(le=zn(o)?Yr:Sn.current,le=Ds(i,le));var Ce=o.getDerivedStateFromProps,Re=typeof Ce=="function"||typeof w.getSnapshotBeforeUpdate=="function";Re||typeof w.UNSAFE_componentWillReceiveProps!="function"&&typeof w.componentWillReceiveProps!="function"||(F!==l||V!==le)&&fp(i,w,l,le),wr=!1;var Te=i.memoizedState;w.state=Te,Xa(i,l,w,d),V=i.memoizedState,F!==l||Te!==V||Fn.current||wr?(typeof Ce=="function"&&(au(i,o,Ce,l),V=i.memoizedState),(F=wr||up(i,o,F,l,Te,V,le))?(Re||typeof w.UNSAFE_componentWillMount!="function"&&typeof w.componentWillMount!="function"||(typeof w.componentWillMount=="function"&&w.componentWillMount(),typeof w.UNSAFE_componentWillMount=="function"&&w.UNSAFE_componentWillMount()),typeof w.componentDidMount=="function"&&(i.flags|=4194308)):(typeof w.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=l,i.memoizedState=V),w.props=l,w.state=V,w.context=le,l=F):(typeof w.componentDidMount=="function"&&(i.flags|=4194308),l=!1)}else{w=i.stateNode,Oh(t,i),F=i.memoizedProps,le=i.type===i.elementType?F:Ei(i.type,F),w.props=le,Re=i.pendingProps,Te=w.context,V=o.contextType,typeof V=="object"&&V!==null?V=si(V):(V=zn(o)?Yr:Sn.current,V=Ds(i,V));var We=o.getDerivedStateFromProps;(Ce=typeof We=="function"||typeof w.getSnapshotBeforeUpdate=="function")||typeof w.UNSAFE_componentWillReceiveProps!="function"&&typeof w.componentWillReceiveProps!="function"||(F!==Re||Te!==V)&&fp(i,w,l,V),wr=!1,Te=i.memoizedState,w.state=Te,Xa(i,l,w,d);var $e=i.memoizedState;F!==Re||Te!==$e||Fn.current||wr?(typeof We=="function"&&(au(i,o,We,l),$e=i.memoizedState),(le=wr||up(i,o,le,l,Te,$e,V)||!1)?(Ce||typeof w.UNSAFE_componentWillUpdate!="function"&&typeof w.componentWillUpdate!="function"||(typeof w.componentWillUpdate=="function"&&w.componentWillUpdate(l,$e,V),typeof w.UNSAFE_componentWillUpdate=="function"&&w.UNSAFE_componentWillUpdate(l,$e,V)),typeof w.componentDidUpdate=="function"&&(i.flags|=4),typeof w.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof w.componentDidUpdate!="function"||F===t.memoizedProps&&Te===t.memoizedState||(i.flags|=4),typeof w.getSnapshotBeforeUpdate!="function"||F===t.memoizedProps&&Te===t.memoizedState||(i.flags|=1024),i.memoizedProps=l,i.memoizedState=$e),w.props=l,w.state=$e,w.context=V,l=le):(typeof w.componentDidUpdate!="function"||F===t.memoizedProps&&Te===t.memoizedState||(i.flags|=4),typeof w.getSnapshotBeforeUpdate!="function"||F===t.memoizedProps&&Te===t.memoizedState||(i.flags|=1024),l=!1)}return fu(t,i,o,l,m,d)}function fu(t,i,o,l,d,m){Mp(t,i);var w=(i.flags&128)!==0;if(!l&&!w)return d&&Ah(i,o,!1),Qi(t,i,m);l=i.stateNode,Qv.current=i;var F=w&&typeof o.getDerivedStateFromError!="function"?null:l.render();return i.flags|=1,t!==null&&w?(i.child=Us(i,t.child,null,m),i.child=Us(i,null,F,m)):Rn(t,i,F,m),i.memoizedState=l.state,d&&Ah(i,o,!0),i.child}function wp(t){var i=t.stateNode;i.pendingContext?bh(t,i.pendingContext,i.pendingContext!==i.context):i.context&&bh(t,i.context,!1),$c(t,i.containerInfo)}function Tp(t,i,o,l,d){return Ns(),Vc(d),i.flags|=256,Rn(t,i,o,l),i.child}var hu={dehydrated:null,treeContext:null,retryLane:0};function pu(t){return{baseLanes:t,cachePool:null,transitions:null}}function bp(t,i,o){var l=i.pendingProps,d=Yt.current,m=!1,w=(i.flags&128)!==0,F;if((F=w)||(F=t!==null&&t.memoizedState===null?!1:(d&2)!==0),F?(m=!0,i.flags&=-129):(t===null||t.memoizedState!==null)&&(d|=1),jt(Yt,d&1),t===null)return Hc(i),t=i.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?((i.mode&1)===0?i.lanes=1:t.data==="$!"?i.lanes=8:i.lanes=1073741824,null):(w=l.children,t=l.fallback,m?(l=i.mode,m=i.child,w={mode:"hidden",children:w},(l&1)===0&&m!==null?(m.childLanes=0,m.pendingProps=w):m=hl(w,l,0,null),t=rs(t,l,o,null),m.return=i,t.return=i,m.sibling=t,i.child=m,i.child.memoizedState=pu(o),i.memoizedState=hu,t):mu(i,w));if(d=t.memoizedState,d!==null&&(F=d.dehydrated,F!==null))return Jv(t,i,w,l,F,d,o);if(m){m=l.fallback,w=i.mode,d=t.child,F=d.sibling;var V={mode:"hidden",children:l.children};return(w&1)===0&&i.child!==d?(l=i.child,l.childLanes=0,l.pendingProps=V,i.deletions=null):(l=Dr(d,V),l.subtreeFlags=d.subtreeFlags&14680064),F!==null?m=Dr(F,m):(m=rs(m,w,o,null),m.flags|=2),m.return=i,l.return=i,l.sibling=m,i.child=l,l=m,m=i.child,w=t.child.memoizedState,w=w===null?pu(o):{baseLanes:w.baseLanes|o,cachePool:null,transitions:w.transitions},m.memoizedState=w,m.childLanes=t.childLanes&~o,i.memoizedState=hu,l}return m=t.child,t=m.sibling,l=Dr(m,{mode:"visible",children:l.children}),(i.mode&1)===0&&(l.lanes=o),l.return=i,l.sibling=null,t!==null&&(o=i.deletions,o===null?(i.deletions=[t],i.flags|=16):o.push(t)),i.child=l,i.memoizedState=null,l}function mu(t,i){return i=hl({mode:"visible",children:i},t.mode,0,null),i.return=t,t.child=i}function el(t,i,o,l){return l!==null&&Vc(l),Us(i,t.child,null,o),t=mu(i,i.pendingProps.children),t.flags|=2,i.memoizedState=null,t}function Jv(t,i,o,l,d,m,w){if(o)return i.flags&256?(i.flags&=-257,l=cu(Error(n(422))),el(t,i,w,l)):i.memoizedState!==null?(i.child=t.child,i.flags|=128,null):(m=l.fallback,d=i.mode,l=hl({mode:"visible",children:l.children},d,0,null),m=rs(m,d,w,null),m.flags|=2,l.return=i,m.return=i,l.sibling=m,i.child=l,(i.mode&1)!==0&&Us(i,t.child,null,w),i.child.memoizedState=pu(w),i.memoizedState=hu,m);if((i.mode&1)===0)return el(t,i,w,null);if(d.data==="$!"){if(l=d.nextSibling&&d.nextSibling.dataset,l)var F=l.dgst;return l=F,m=Error(n(419)),l=cu(m,l,void 0),el(t,i,w,l)}if(F=(w&t.childLanes)!==0,kn||F){if(l=dn,l!==null){switch(w&-w){case 4:d=2;break;case 16:d=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:d=32;break;case 536870912:d=268435456;break;default:d=0}d=(d&(l.suspendedLanes|w))!==0?0:d,d!==0&&d!==m.retryLane&&(m.retryLane=d,Ki(t,d),bi(l,t,d,-1))}return Du(),l=cu(Error(n(421))),el(t,i,w,l)}return d.data==="$?"?(i.flags|=128,i.child=t.child,i=fx.bind(null,t),d._reactRetry=i,null):(t=m.treeContext,Yn=yr(d.nextSibling),qn=i,qt=!0,Mi=null,t!==null&&(ii[ri++]=Yi,ii[ri++]=$i,ii[ri++]=$r,Yi=t.id,$i=t.overflow,$r=i),i=mu(i,l.children),i.flags|=4096,i)}function Cp(t,i,o){t.lanes|=i;var l=t.alternate;l!==null&&(l.lanes|=i),Xc(t.return,i,o)}function gu(t,i,o,l,d){var m=t.memoizedState;m===null?t.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:l,tail:o,tailMode:d}:(m.isBackwards=i,m.rendering=null,m.renderingStartTime=0,m.last=l,m.tail=o,m.tailMode=d)}function Ap(t,i,o){var l=i.pendingProps,d=l.revealOrder,m=l.tail;if(Rn(t,i,l.children,o),l=Yt.current,(l&2)!==0)l=l&1|2,i.flags|=128;else{if(t!==null&&(t.flags&128)!==0)e:for(t=i.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Cp(t,o,i);else if(t.tag===19)Cp(t,o,i);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===i)break e;for(;t.sibling===null;){if(t.return===null||t.return===i)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}l&=1}if(jt(Yt,l),(i.mode&1)===0)i.memoizedState=null;else switch(d){case"forwards":for(o=i.child,d=null;o!==null;)t=o.alternate,t!==null&&qa(t)===null&&(d=o),o=o.sibling;o=d,o===null?(d=i.child,i.child=null):(d=o.sibling,o.sibling=null),gu(i,!1,d,o,m);break;case"backwards":for(o=null,d=i.child,i.child=null;d!==null;){if(t=d.alternate,t!==null&&qa(t)===null){i.child=d;break}t=d.sibling,d.sibling=o,o=d,d=t}gu(i,!0,o,null,m);break;case"together":gu(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function tl(t,i){(i.mode&1)===0&&t!==null&&(t.alternate=null,i.alternate=null,i.flags|=2)}function Qi(t,i,o){if(t!==null&&(i.dependencies=t.dependencies),es|=i.lanes,(o&i.childLanes)===0)return null;if(t!==null&&i.child!==t.child)throw Error(n(153));if(i.child!==null){for(t=i.child,o=Dr(t,t.pendingProps),i.child=o,o.return=i;t.sibling!==null;)t=t.sibling,o=o.sibling=Dr(t,t.pendingProps),o.return=i;o.sibling=null}return i.child}function ex(t,i,o){switch(i.tag){case 3:wp(i),Ns();break;case 5:Vh(i);break;case 1:zn(i.type)&&za(i);break;case 4:$c(i,i.stateNode.containerInfo);break;case 10:var l=i.type._context,d=i.memoizedProps.value;jt(ja,l._currentValue),l._currentValue=d;break;case 13:if(l=i.memoizedState,l!==null)return l.dehydrated!==null?(jt(Yt,Yt.current&1),i.flags|=128,null):(o&i.child.childLanes)!==0?bp(t,i,o):(jt(Yt,Yt.current&1),t=Qi(t,i,o),t!==null?t.sibling:null);jt(Yt,Yt.current&1);break;case 19:if(l=(o&i.childLanes)!==0,(t.flags&128)!==0){if(l)return Ap(t,i,o);i.flags|=128}if(d=i.memoizedState,d!==null&&(d.rendering=null,d.tail=null,d.lastEffect=null),jt(Yt,Yt.current),l)break;return null;case 22:case 23:return i.lanes=0,Sp(t,i,o)}return Qi(t,i,o)}var Rp,vu,Pp,Dp;Rp=function(t,i){for(var o=i.child;o!==null;){if(o.tag===5||o.tag===6)t.appendChild(o.stateNode);else if(o.tag!==4&&o.child!==null){o.child.return=o,o=o.child;continue}if(o===i)break;for(;o.sibling===null;){if(o.return===null||o.return===i)return;o=o.return}o.sibling.return=o.return,o=o.sibling}},vu=function(){},Pp=function(t,i,o,l){var d=t.memoizedProps;if(d!==l){t=i.stateNode,Qr(ki.current);var m=null;switch(o){case"input":d=H(t,d),l=H(t,l),m=[];break;case"select":d=C({},d,{value:void 0}),l=C({},l,{value:void 0}),m=[];break;case"textarea":d=b(t,d),l=b(t,l),m=[];break;default:typeof d.onClick!="function"&&typeof l.onClick=="function"&&(t.onclick=Na)}xt(o,l);var w;o=null;for(le in d)if(!l.hasOwnProperty(le)&&d.hasOwnProperty(le)&&d[le]!=null)if(le==="style"){var F=d[le];for(w in F)F.hasOwnProperty(w)&&(o||(o={}),o[w]="")}else le!=="dangerouslySetInnerHTML"&&le!=="children"&&le!=="suppressContentEditableWarning"&&le!=="suppressHydrationWarning"&&le!=="autoFocus"&&(a.hasOwnProperty(le)?m||(m=[]):(m=m||[]).push(le,null));for(le in l){var V=l[le];if(F=d!=null?d[le]:void 0,l.hasOwnProperty(le)&&V!==F&&(V!=null||F!=null))if(le==="style")if(F){for(w in F)!F.hasOwnProperty(w)||V&&V.hasOwnProperty(w)||(o||(o={}),o[w]="");for(w in V)V.hasOwnProperty(w)&&F[w]!==V[w]&&(o||(o={}),o[w]=V[w])}else o||(m||(m=[]),m.push(le,o)),o=V;else le==="dangerouslySetInnerHTML"?(V=V?V.__html:void 0,F=F?F.__html:void 0,V!=null&&F!==V&&(m=m||[]).push(le,V)):le==="children"?typeof V!="string"&&typeof V!="number"||(m=m||[]).push(le,""+V):le!=="suppressContentEditableWarning"&&le!=="suppressHydrationWarning"&&(a.hasOwnProperty(le)?(V!=null&&le==="onScroll"&&Wt("scroll",t),m||F===V||(m=[])):(m=m||[]).push(le,V))}o&&(m=m||[]).push("style",o);var le=m;(i.updateQueue=le)&&(i.flags|=4)}},Dp=function(t,i,o,l){o!==l&&(i.flags|=4)};function Qo(t,i){if(!qt)switch(t.tailMode){case"hidden":i=t.tail;for(var o=null;i!==null;)i.alternate!==null&&(o=i),i=i.sibling;o===null?t.tail=null:o.sibling=null;break;case"collapsed":o=t.tail;for(var l=null;o!==null;)o.alternate!==null&&(l=o),o=o.sibling;l===null?i||t.tail===null?t.tail=null:t.tail.sibling=null:l.sibling=null}}function En(t){var i=t.alternate!==null&&t.alternate.child===t.child,o=0,l=0;if(i)for(var d=t.child;d!==null;)o|=d.lanes|d.childLanes,l|=d.subtreeFlags&14680064,l|=d.flags&14680064,d.return=t,d=d.sibling;else for(d=t.child;d!==null;)o|=d.lanes|d.childLanes,l|=d.subtreeFlags,l|=d.flags,d.return=t,d=d.sibling;return t.subtreeFlags|=l,t.childLanes=o,i}function tx(t,i,o){var l=i.pendingProps;switch(Oc(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return En(i),null;case 1:return zn(i.type)&&Fa(),En(i),null;case 3:return l=i.stateNode,ks(),Xt(Fn),Xt(Sn),Qc(),l.pendingContext&&(l.context=l.pendingContext,l.pendingContext=null),(t===null||t.child===null)&&(Ha(i)?i.flags|=4:t===null||t.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,Mi!==null&&(Au(Mi),Mi=null))),vu(t,i),En(i),null;case 5:Kc(i);var d=Qr(qo.current);if(o=i.type,t!==null&&i.stateNode!=null)Pp(t,i,o,l,d),t.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!l){if(i.stateNode===null)throw Error(n(166));return En(i),null}if(t=Qr(ki.current),Ha(i)){l=i.stateNode,o=i.type;var m=i.memoizedProps;switch(l[zi]=i,l[Vo]=m,t=(i.mode&1)!==0,o){case"dialog":Wt("cancel",l),Wt("close",l);break;case"iframe":case"object":case"embed":Wt("load",l);break;case"video":case"audio":for(d=0;d<Oo.length;d++)Wt(Oo[d],l);break;case"source":Wt("error",l);break;case"img":case"image":case"link":Wt("error",l),Wt("load",l);break;case"details":Wt("toggle",l);break;case"input":mt(l,m),Wt("invalid",l);break;case"select":l._wrapperState={wasMultiple:!!m.multiple},Wt("invalid",l);break;case"textarea":ne(l,m),Wt("invalid",l)}xt(o,m),d=null;for(var w in m)if(m.hasOwnProperty(w)){var F=m[w];w==="children"?typeof F=="string"?l.textContent!==F&&(m.suppressHydrationWarning!==!0&&Ia(l.textContent,F,t),d=["children",F]):typeof F=="number"&&l.textContent!==""+F&&(m.suppressHydrationWarning!==!0&&Ia(l.textContent,F,t),d=["children",""+F]):a.hasOwnProperty(w)&&F!=null&&w==="onScroll"&&Wt("scroll",l)}switch(o){case"input":De(l),He(l,m,!0);break;case"textarea":De(l),Ee(l);break;case"select":case"option":break;default:typeof m.onClick=="function"&&(l.onclick=Na)}l=d,i.updateQueue=l,l!==null&&(i.flags|=4)}else{w=d.nodeType===9?d:d.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=_e(o)),t==="http://www.w3.org/1999/xhtml"?o==="script"?(t=w.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof l.is=="string"?t=w.createElement(o,{is:l.is}):(t=w.createElement(o),o==="select"&&(w=t,l.multiple?w.multiple=!0:l.size&&(w.size=l.size))):t=w.createElementNS(t,o),t[zi]=i,t[Vo]=l,Rp(t,i,!1,!1),i.stateNode=t;e:{switch(w=ht(o,l),o){case"dialog":Wt("cancel",t),Wt("close",t),d=l;break;case"iframe":case"object":case"embed":Wt("load",t),d=l;break;case"video":case"audio":for(d=0;d<Oo.length;d++)Wt(Oo[d],t);d=l;break;case"source":Wt("error",t),d=l;break;case"img":case"image":case"link":Wt("error",t),Wt("load",t),d=l;break;case"details":Wt("toggle",t),d=l;break;case"input":mt(t,l),d=H(t,l),Wt("invalid",t);break;case"option":d=l;break;case"select":t._wrapperState={wasMultiple:!!l.multiple},d=C({},l,{value:void 0}),Wt("invalid",t);break;case"textarea":ne(t,l),d=b(t,l),Wt("invalid",t);break;default:d=l}xt(o,d),F=d;for(m in F)if(F.hasOwnProperty(m)){var V=F[m];m==="style"?st(t,V):m==="dangerouslySetInnerHTML"?(V=V?V.__html:void 0,V!=null&&Be(t,V)):m==="children"?typeof V=="string"?(o!=="textarea"||V!=="")&&dt(t,V):typeof V=="number"&&dt(t,""+V):m!=="suppressContentEditableWarning"&&m!=="suppressHydrationWarning"&&m!=="autoFocus"&&(a.hasOwnProperty(m)?V!=null&&m==="onScroll"&&Wt("scroll",t):V!=null&&L(t,m,V,w))}switch(o){case"input":De(t),He(t,l,!1);break;case"textarea":De(t),Ee(t);break;case"option":l.value!=null&&t.setAttribute("value",""+ue(l.value));break;case"select":t.multiple=!!l.multiple,m=l.value,m!=null?N(t,!!l.multiple,m,!1):l.defaultValue!=null&&N(t,!!l.multiple,l.defaultValue,!0);break;default:typeof d.onClick=="function"&&(t.onclick=Na)}switch(o){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break e;case"img":l=!0;break e;default:l=!1}}l&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return En(i),null;case 6:if(t&&i.stateNode!=null)Dp(t,i,t.memoizedProps,l);else{if(typeof l!="string"&&i.stateNode===null)throw Error(n(166));if(o=Qr(qo.current),Qr(ki.current),Ha(i)){if(l=i.stateNode,o=i.memoizedProps,l[zi]=i,(m=l.nodeValue!==o)&&(t=qn,t!==null))switch(t.tag){case 3:Ia(l.nodeValue,o,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Ia(l.nodeValue,o,(t.mode&1)!==0)}m&&(i.flags|=4)}else l=(o.nodeType===9?o:o.ownerDocument).createTextNode(l),l[zi]=i,i.stateNode=l}return En(i),null;case 13:if(Xt(Yt),l=i.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(qt&&Yn!==null&&(i.mode&1)!==0&&(i.flags&128)===0)Nh(),Ns(),i.flags|=98560,m=!1;else if(m=Ha(i),l!==null&&l.dehydrated!==null){if(t===null){if(!m)throw Error(n(318));if(m=i.memoizedState,m=m!==null?m.dehydrated:null,!m)throw Error(n(317));m[zi]=i}else Ns(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;En(i),m=!1}else Mi!==null&&(Au(Mi),Mi=null),m=!0;if(!m)return i.flags&65536?i:null}return(i.flags&128)!==0?(i.lanes=o,i):(l=l!==null,l!==(t!==null&&t.memoizedState!==null)&&l&&(i.child.flags|=8192,(i.mode&1)!==0&&(t===null||(Yt.current&1)!==0?an===0&&(an=3):Du())),i.updateQueue!==null&&(i.flags|=4),En(i),null);case 4:return ks(),vu(t,i),t===null&&Bo(i.stateNode.containerInfo),En(i),null;case 10:return Wc(i.type._context),En(i),null;case 17:return zn(i.type)&&Fa(),En(i),null;case 19:if(Xt(Yt),m=i.memoizedState,m===null)return En(i),null;if(l=(i.flags&128)!==0,w=m.rendering,w===null)if(l)Qo(m,!1);else{if(an!==0||t!==null&&(t.flags&128)!==0)for(t=i.child;t!==null;){if(w=qa(t),w!==null){for(i.flags|=128,Qo(m,!1),l=w.updateQueue,l!==null&&(i.updateQueue=l,i.flags|=4),i.subtreeFlags=0,l=o,o=i.child;o!==null;)m=o,t=l,m.flags&=14680066,w=m.alternate,w===null?(m.childLanes=0,m.lanes=t,m.child=null,m.subtreeFlags=0,m.memoizedProps=null,m.memoizedState=null,m.updateQueue=null,m.dependencies=null,m.stateNode=null):(m.childLanes=w.childLanes,m.lanes=w.lanes,m.child=w.child,m.subtreeFlags=0,m.deletions=null,m.memoizedProps=w.memoizedProps,m.memoizedState=w.memoizedState,m.updateQueue=w.updateQueue,m.type=w.type,t=w.dependencies,m.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),o=o.sibling;return jt(Yt,Yt.current&1|2),i.child}t=t.sibling}m.tail!==null&&we()>Vs&&(i.flags|=128,l=!0,Qo(m,!1),i.lanes=4194304)}else{if(!l)if(t=qa(w),t!==null){if(i.flags|=128,l=!0,o=t.updateQueue,o!==null&&(i.updateQueue=o,i.flags|=4),Qo(m,!0),m.tail===null&&m.tailMode==="hidden"&&!w.alternate&&!qt)return En(i),null}else 2*we()-m.renderingStartTime>Vs&&o!==1073741824&&(i.flags|=128,l=!0,Qo(m,!1),i.lanes=4194304);m.isBackwards?(w.sibling=i.child,i.child=w):(o=m.last,o!==null?o.sibling=w:i.child=w,m.last=w)}return m.tail!==null?(i=m.tail,m.rendering=i,m.tail=i.sibling,m.renderingStartTime=we(),i.sibling=null,o=Yt.current,jt(Yt,l?o&1|2:o&1),i):(En(i),null);case 22:case 23:return Pu(),l=i.memoizedState!==null,t!==null&&t.memoizedState!==null!==l&&(i.flags|=8192),l&&(i.mode&1)!==0?($n&1073741824)!==0&&(En(i),i.subtreeFlags&6&&(i.flags|=8192)):En(i),null;case 24:return null;case 25:return null}throw Error(n(156,i.tag))}function nx(t,i){switch(Oc(i),i.tag){case 1:return zn(i.type)&&Fa(),t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 3:return ks(),Xt(Fn),Xt(Sn),Qc(),t=i.flags,(t&65536)!==0&&(t&128)===0?(i.flags=t&-65537|128,i):null;case 5:return Kc(i),null;case 13:if(Xt(Yt),t=i.memoizedState,t!==null&&t.dehydrated!==null){if(i.alternate===null)throw Error(n(340));Ns()}return t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 19:return Xt(Yt),null;case 4:return ks(),null;case 10:return Wc(i.type._context),null;case 22:case 23:return Pu(),null;case 24:return null;default:return null}}var nl=!1,wn=!1,ix=typeof WeakSet=="function"?WeakSet:Set,qe=null;function Bs(t,i){var o=t.ref;if(o!==null)if(typeof o=="function")try{o(null)}catch(l){Zt(t,i,l)}else o.current=null}function xu(t,i,o){try{o()}catch(l){Zt(t,i,l)}}var Lp=!1;function rx(t,i){if(Pc=Ma,t=uh(),Mc(t)){if("selectionStart"in t)var o={start:t.selectionStart,end:t.selectionEnd};else e:{o=(o=t.ownerDocument)&&o.defaultView||window;var l=o.getSelection&&o.getSelection();if(l&&l.rangeCount!==0){o=l.anchorNode;var d=l.anchorOffset,m=l.focusNode;l=l.focusOffset;try{o.nodeType,m.nodeType}catch{o=null;break e}var w=0,F=-1,V=-1,le=0,Ce=0,Re=t,Te=null;t:for(;;){for(var We;Re!==o||d!==0&&Re.nodeType!==3||(F=w+d),Re!==m||l!==0&&Re.nodeType!==3||(V=w+l),Re.nodeType===3&&(w+=Re.nodeValue.length),(We=Re.firstChild)!==null;)Te=Re,Re=We;for(;;){if(Re===t)break t;if(Te===o&&++le===d&&(F=w),Te===m&&++Ce===l&&(V=w),(We=Re.nextSibling)!==null)break;Re=Te,Te=Re.parentNode}Re=We}o=F===-1||V===-1?null:{start:F,end:V}}else o=null}o=o||{start:0,end:0}}else o=null;for(Dc={focusedElem:t,selectionRange:o},Ma=!1,qe=i;qe!==null;)if(i=qe,t=i.child,(i.subtreeFlags&1028)!==0&&t!==null)t.return=i,qe=t;else for(;qe!==null;){i=qe;try{var $e=i.alternate;if((i.flags&1024)!==0)switch(i.tag){case 0:case 11:case 15:break;case 1:if($e!==null){var Qe=$e.memoizedProps,Qt=$e.memoizedState,ee=i.stateNode,X=ee.getSnapshotBeforeUpdate(i.elementType===i.type?Qe:Ei(i.type,Qe),Qt);ee.__reactInternalSnapshotBeforeUpdate=X}break;case 3:var re=i.stateNode.containerInfo;re.nodeType===1?re.textContent="":re.nodeType===9&&re.documentElement&&re.removeChild(re.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(n(163))}}catch(Pe){Zt(i,i.return,Pe)}if(t=i.sibling,t!==null){t.return=i.return,qe=t;break}qe=i.return}return $e=Lp,Lp=!1,$e}function Jo(t,i,o){var l=i.updateQueue;if(l=l!==null?l.lastEffect:null,l!==null){var d=l=l.next;do{if((d.tag&t)===t){var m=d.destroy;d.destroy=void 0,m!==void 0&&xu(i,o,m)}d=d.next}while(d!==l)}}function il(t,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var o=i=i.next;do{if((o.tag&t)===t){var l=o.create;o.destroy=l()}o=o.next}while(o!==i)}}function _u(t){var i=t.ref;if(i!==null){var o=t.stateNode;switch(t.tag){case 5:t=o;break;default:t=o}typeof i=="function"?i(t):i.current=t}}function Ip(t){var i=t.alternate;i!==null&&(t.alternate=null,Ip(i)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(i=t.stateNode,i!==null&&(delete i[zi],delete i[Vo],delete i[Uc],delete i[Bv],delete i[Hv])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Np(t){return t.tag===5||t.tag===3||t.tag===4}function Up(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Np(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function yu(t,i,o){var l=t.tag;if(l===5||l===6)t=t.stateNode,i?o.nodeType===8?o.parentNode.insertBefore(t,i):o.insertBefore(t,i):(o.nodeType===8?(i=o.parentNode,i.insertBefore(t,o)):(i=o,i.appendChild(t)),o=o._reactRootContainer,o!=null||i.onclick!==null||(i.onclick=Na));else if(l!==4&&(t=t.child,t!==null))for(yu(t,i,o),t=t.sibling;t!==null;)yu(t,i,o),t=t.sibling}function Su(t,i,o){var l=t.tag;if(l===5||l===6)t=t.stateNode,i?o.insertBefore(t,i):o.appendChild(t);else if(l!==4&&(t=t.child,t!==null))for(Su(t,i,o),t=t.sibling;t!==null;)Su(t,i,o),t=t.sibling}var vn=null,wi=!1;function br(t,i,o){for(o=o.child;o!==null;)Fp(t,i,o),o=o.sibling}function Fp(t,i,o){if(wt&&typeof wt.onCommitFiberUnmount=="function")try{wt.onCommitFiberUnmount(Dt,o)}catch{}switch(o.tag){case 5:wn||Bs(o,i);case 6:var l=vn,d=wi;vn=null,br(t,i,o),vn=l,wi=d,vn!==null&&(wi?(t=vn,o=o.stateNode,t.nodeType===8?t.parentNode.removeChild(o):t.removeChild(o)):vn.removeChild(o.stateNode));break;case 18:vn!==null&&(wi?(t=vn,o=o.stateNode,t.nodeType===8?Nc(t.parentNode,o):t.nodeType===1&&Nc(t,o),Do(t)):Nc(vn,o.stateNode));break;case 4:l=vn,d=wi,vn=o.stateNode.containerInfo,wi=!0,br(t,i,o),vn=l,wi=d;break;case 0:case 11:case 14:case 15:if(!wn&&(l=o.updateQueue,l!==null&&(l=l.lastEffect,l!==null))){d=l=l.next;do{var m=d,w=m.destroy;m=m.tag,w!==void 0&&((m&2)!==0||(m&4)!==0)&&xu(o,i,w),d=d.next}while(d!==l)}br(t,i,o);break;case 1:if(!wn&&(Bs(o,i),l=o.stateNode,typeof l.componentWillUnmount=="function"))try{l.props=o.memoizedProps,l.state=o.memoizedState,l.componentWillUnmount()}catch(F){Zt(o,i,F)}br(t,i,o);break;case 21:br(t,i,o);break;case 22:o.mode&1?(wn=(l=wn)||o.memoizedState!==null,br(t,i,o),wn=l):br(t,i,o);break;default:br(t,i,o)}}function zp(t){var i=t.updateQueue;if(i!==null){t.updateQueue=null;var o=t.stateNode;o===null&&(o=t.stateNode=new ix),i.forEach(function(l){var d=hx.bind(null,t,l);o.has(l)||(o.add(l),l.then(d,d))})}}function Ti(t,i){var o=i.deletions;if(o!==null)for(var l=0;l<o.length;l++){var d=o[l];try{var m=t,w=i,F=w;e:for(;F!==null;){switch(F.tag){case 5:vn=F.stateNode,wi=!1;break e;case 3:vn=F.stateNode.containerInfo,wi=!0;break e;case 4:vn=F.stateNode.containerInfo,wi=!0;break e}F=F.return}if(vn===null)throw Error(n(160));Fp(m,w,d),vn=null,wi=!1;var V=d.alternate;V!==null&&(V.return=null),d.return=null}catch(le){Zt(d,i,le)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)kp(i,t),i=i.sibling}function kp(t,i){var o=t.alternate,l=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Ti(i,t),Bi(t),l&4){try{Jo(3,t,t.return),il(3,t)}catch(Qe){Zt(t,t.return,Qe)}try{Jo(5,t,t.return)}catch(Qe){Zt(t,t.return,Qe)}}break;case 1:Ti(i,t),Bi(t),l&512&&o!==null&&Bs(o,o.return);break;case 5:if(Ti(i,t),Bi(t),l&512&&o!==null&&Bs(o,o.return),t.flags&32){var d=t.stateNode;try{dt(d,"")}catch(Qe){Zt(t,t.return,Qe)}}if(l&4&&(d=t.stateNode,d!=null)){var m=t.memoizedProps,w=o!==null?o.memoizedProps:m,F=t.type,V=t.updateQueue;if(t.updateQueue=null,V!==null)try{F==="input"&&m.type==="radio"&&m.name!=null&&et(d,m),ht(F,w);var le=ht(F,m);for(w=0;w<V.length;w+=2){var Ce=V[w],Re=V[w+1];Ce==="style"?st(d,Re):Ce==="dangerouslySetInnerHTML"?Be(d,Re):Ce==="children"?dt(d,Re):L(d,Ce,Re,le)}switch(F){case"input":Ge(d,m);break;case"textarea":ye(d,m);break;case"select":var Te=d._wrapperState.wasMultiple;d._wrapperState.wasMultiple=!!m.multiple;var We=m.value;We!=null?N(d,!!m.multiple,We,!1):Te!==!!m.multiple&&(m.defaultValue!=null?N(d,!!m.multiple,m.defaultValue,!0):N(d,!!m.multiple,m.multiple?[]:"",!1))}d[Vo]=m}catch(Qe){Zt(t,t.return,Qe)}}break;case 6:if(Ti(i,t),Bi(t),l&4){if(t.stateNode===null)throw Error(n(162));d=t.stateNode,m=t.memoizedProps;try{d.nodeValue=m}catch(Qe){Zt(t,t.return,Qe)}}break;case 3:if(Ti(i,t),Bi(t),l&4&&o!==null&&o.memoizedState.isDehydrated)try{Do(i.containerInfo)}catch(Qe){Zt(t,t.return,Qe)}break;case 4:Ti(i,t),Bi(t);break;case 13:Ti(i,t),Bi(t),d=t.child,d.flags&8192&&(m=d.memoizedState!==null,d.stateNode.isHidden=m,!m||d.alternate!==null&&d.alternate.memoizedState!==null||(wu=we())),l&4&&zp(t);break;case 22:if(Ce=o!==null&&o.memoizedState!==null,t.mode&1?(wn=(le=wn)||Ce,Ti(i,t),wn=le):Ti(i,t),Bi(t),l&8192){if(le=t.memoizedState!==null,(t.stateNode.isHidden=le)&&!Ce&&(t.mode&1)!==0)for(qe=t,Ce=t.child;Ce!==null;){for(Re=qe=Ce;qe!==null;){switch(Te=qe,We=Te.child,Te.tag){case 0:case 11:case 14:case 15:Jo(4,Te,Te.return);break;case 1:Bs(Te,Te.return);var $e=Te.stateNode;if(typeof $e.componentWillUnmount=="function"){l=Te,o=Te.return;try{i=l,$e.props=i.memoizedProps,$e.state=i.memoizedState,$e.componentWillUnmount()}catch(Qe){Zt(l,o,Qe)}}break;case 5:Bs(Te,Te.return);break;case 22:if(Te.memoizedState!==null){Hp(Re);continue}}We!==null?(We.return=Te,qe=We):Hp(Re)}Ce=Ce.sibling}e:for(Ce=null,Re=t;;){if(Re.tag===5){if(Ce===null){Ce=Re;try{d=Re.stateNode,le?(m=d.style,typeof m.setProperty=="function"?m.setProperty("display","none","important"):m.display="none"):(F=Re.stateNode,V=Re.memoizedProps.style,w=V!=null&&V.hasOwnProperty("display")?V.display:null,F.style.display=nt("display",w))}catch(Qe){Zt(t,t.return,Qe)}}}else if(Re.tag===6){if(Ce===null)try{Re.stateNode.nodeValue=le?"":Re.memoizedProps}catch(Qe){Zt(t,t.return,Qe)}}else if((Re.tag!==22&&Re.tag!==23||Re.memoizedState===null||Re===t)&&Re.child!==null){Re.child.return=Re,Re=Re.child;continue}if(Re===t)break e;for(;Re.sibling===null;){if(Re.return===null||Re.return===t)break e;Ce===Re&&(Ce=null),Re=Re.return}Ce===Re&&(Ce=null),Re.sibling.return=Re.return,Re=Re.sibling}}break;case 19:Ti(i,t),Bi(t),l&4&&zp(t);break;case 21:break;default:Ti(i,t),Bi(t)}}function Bi(t){var i=t.flags;if(i&2){try{e:{for(var o=t.return;o!==null;){if(Np(o)){var l=o;break e}o=o.return}throw Error(n(160))}switch(l.tag){case 5:var d=l.stateNode;l.flags&32&&(dt(d,""),l.flags&=-33);var m=Up(t);Su(t,m,d);break;case 3:case 4:var w=l.stateNode.containerInfo,F=Up(t);yu(t,F,w);break;default:throw Error(n(161))}}catch(V){Zt(t,t.return,V)}t.flags&=-3}i&4096&&(t.flags&=-4097)}function sx(t,i,o){qe=t,Op(t)}function Op(t,i,o){for(var l=(t.mode&1)!==0;qe!==null;){var d=qe,m=d.child;if(d.tag===22&&l){var w=d.memoizedState!==null||nl;if(!w){var F=d.alternate,V=F!==null&&F.memoizedState!==null||wn;F=nl;var le=wn;if(nl=w,(wn=V)&&!le)for(qe=d;qe!==null;)w=qe,V=w.child,w.tag===22&&w.memoizedState!==null?Vp(d):V!==null?(V.return=w,qe=V):Vp(d);for(;m!==null;)qe=m,Op(m),m=m.sibling;qe=d,nl=F,wn=le}Bp(t)}else(d.subtreeFlags&8772)!==0&&m!==null?(m.return=d,qe=m):Bp(t)}}function Bp(t){for(;qe!==null;){var i=qe;if((i.flags&8772)!==0){var o=i.alternate;try{if((i.flags&8772)!==0)switch(i.tag){case 0:case 11:case 15:wn||il(5,i);break;case 1:var l=i.stateNode;if(i.flags&4&&!wn)if(o===null)l.componentDidMount();else{var d=i.elementType===i.type?o.memoizedProps:Ei(i.type,o.memoizedProps);l.componentDidUpdate(d,o.memoizedState,l.__reactInternalSnapshotBeforeUpdate)}var m=i.updateQueue;m!==null&&Hh(i,m,l);break;case 3:var w=i.updateQueue;if(w!==null){if(o=null,i.child!==null)switch(i.child.tag){case 5:o=i.child.stateNode;break;case 1:o=i.child.stateNode}Hh(i,w,o)}break;case 5:var F=i.stateNode;if(o===null&&i.flags&4){o=F;var V=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":V.autoFocus&&o.focus();break;case"img":V.src&&(o.src=V.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var le=i.alternate;if(le!==null){var Ce=le.memoizedState;if(Ce!==null){var Re=Ce.dehydrated;Re!==null&&Do(Re)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(n(163))}wn||i.flags&512&&_u(i)}catch(Te){Zt(i,i.return,Te)}}if(i===t){qe=null;break}if(o=i.sibling,o!==null){o.return=i.return,qe=o;break}qe=i.return}}function Hp(t){for(;qe!==null;){var i=qe;if(i===t){qe=null;break}var o=i.sibling;if(o!==null){o.return=i.return,qe=o;break}qe=i.return}}function Vp(t){for(;qe!==null;){var i=qe;try{switch(i.tag){case 0:case 11:case 15:var o=i.return;try{il(4,i)}catch(V){Zt(i,o,V)}break;case 1:var l=i.stateNode;if(typeof l.componentDidMount=="function"){var d=i.return;try{l.componentDidMount()}catch(V){Zt(i,d,V)}}var m=i.return;try{_u(i)}catch(V){Zt(i,m,V)}break;case 5:var w=i.return;try{_u(i)}catch(V){Zt(i,w,V)}}}catch(V){Zt(i,i.return,V)}if(i===t){qe=null;break}var F=i.sibling;if(F!==null){F.return=i.return,qe=F;break}qe=i.return}}var ox=Math.ceil,rl=A.ReactCurrentDispatcher,Mu=A.ReactCurrentOwner,ai=A.ReactCurrentBatchConfig,bt=0,dn=null,tn=null,xn=0,$n=0,Hs=Sr(0),an=0,ea=null,es=0,sl=0,Eu=0,ta=null,On=null,wu=0,Vs=1/0,Ji=null,ol=!1,Tu=null,Cr=null,al=!1,Ar=null,ll=0,na=0,bu=null,cl=-1,ul=0;function Pn(){return(bt&6)!==0?we():cl!==-1?cl:cl=we()}function Rr(t){return(t.mode&1)===0?1:(bt&2)!==0&&xn!==0?xn&-xn:jv.transition!==null?(ul===0&&(ul=An()),ul):(t=Ft,t!==0||(t=window.event,t=t===void 0?16:Gf(t.type)),t)}function bi(t,i,o,l){if(50<na)throw na=0,bu=null,Error(n(185));Un(t,o,l),((bt&2)===0||t!==dn)&&(t===dn&&((bt&2)===0&&(sl|=o),an===4&&Pr(t,xn)),Bn(t,l),o===1&&bt===0&&(i.mode&1)===0&&(Vs=we()+500,ka&&Er()))}function Bn(t,i){var o=t.callbackNode;ti(t,i);var l=Fi(t,t===dn?xn:0);if(l===0)o!==null&&oe(o),t.callbackNode=null,t.callbackPriority=0;else if(i=l&-l,t.callbackPriority!==i){if(o!=null&&oe(o),i===1)t.tag===0?Vv(Gp.bind(null,t)):Rh(Gp.bind(null,t)),kv(function(){(bt&6)===0&&Er()}),o=null;else{switch(Ff(l)){case 1:o=Ye;break;case 4:o=lt;break;case 16:o=ct;break;case 536870912:o=Et;break;default:o=ct}o=Qp(o,jp.bind(null,t))}t.callbackPriority=i,t.callbackNode=o}}function jp(t,i){if(cl=-1,ul=0,(bt&6)!==0)throw Error(n(327));var o=t.callbackNode;if(js()&&t.callbackNode!==o)return null;var l=Fi(t,t===dn?xn:0);if(l===0)return null;if((l&30)!==0||(l&t.expiredLanes)!==0||i)i=dl(t,l);else{i=l;var d=bt;bt|=2;var m=Xp();(dn!==t||xn!==i)&&(Ji=null,Vs=we()+500,ns(t,i));do try{cx();break}catch(F){Wp(t,F)}while(!0);Gc(),rl.current=m,bt=d,tn!==null?i=0:(dn=null,xn=0,i=an)}if(i!==0){if(i===2&&(d=Wi(t),d!==0&&(l=d,i=Cu(t,d))),i===1)throw o=ea,ns(t,0),Pr(t,l),Bn(t,we()),o;if(i===6)Pr(t,l);else{if(d=t.current.alternate,(l&30)===0&&!ax(d)&&(i=dl(t,l),i===2&&(m=Wi(t),m!==0&&(l=m,i=Cu(t,m))),i===1))throw o=ea,ns(t,0),Pr(t,l),Bn(t,we()),o;switch(t.finishedWork=d,t.finishedLanes=l,i){case 0:case 1:throw Error(n(345));case 2:is(t,On,Ji);break;case 3:if(Pr(t,l),(l&130023424)===l&&(i=wu+500-we(),10<i)){if(Fi(t,0)!==0)break;if(d=t.suspendedLanes,(d&l)!==l){Pn(),t.pingedLanes|=t.suspendedLanes&d;break}t.timeoutHandle=Ic(is.bind(null,t,On,Ji),i);break}is(t,On,Ji);break;case 4:if(Pr(t,l),(l&4194240)===l)break;for(i=t.eventTimes,d=-1;0<l;){var w=31-gt(l);m=1<<w,w=i[w],w>d&&(d=w),l&=~m}if(l=d,l=we()-l,l=(120>l?120:480>l?480:1080>l?1080:1920>l?1920:3e3>l?3e3:4320>l?4320:1960*ox(l/1960))-l,10<l){t.timeoutHandle=Ic(is.bind(null,t,On,Ji),l);break}is(t,On,Ji);break;case 5:is(t,On,Ji);break;default:throw Error(n(329))}}}return Bn(t,we()),t.callbackNode===o?jp.bind(null,t):null}function Cu(t,i){var o=ta;return t.current.memoizedState.isDehydrated&&(ns(t,i).flags|=256),t=dl(t,i),t!==2&&(i=On,On=o,i!==null&&Au(i)),t}function Au(t){On===null?On=t:On.push.apply(On,t)}function ax(t){for(var i=t;;){if(i.flags&16384){var o=i.updateQueue;if(o!==null&&(o=o.stores,o!==null))for(var l=0;l<o.length;l++){var d=o[l],m=d.getSnapshot;d=d.value;try{if(!Si(m(),d))return!1}catch{return!1}}}if(o=i.child,i.subtreeFlags&16384&&o!==null)o.return=i,i=o;else{if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function Pr(t,i){for(i&=~Eu,i&=~sl,t.suspendedLanes|=i,t.pingedLanes&=~i,t=t.expirationTimes;0<i;){var o=31-gt(i),l=1<<o;t[o]=-1,i&=~l}}function Gp(t){if((bt&6)!==0)throw Error(n(327));js();var i=Fi(t,0);if((i&1)===0)return Bn(t,we()),null;var o=dl(t,i);if(t.tag!==0&&o===2){var l=Wi(t);l!==0&&(i=l,o=Cu(t,l))}if(o===1)throw o=ea,ns(t,0),Pr(t,i),Bn(t,we()),o;if(o===6)throw Error(n(345));return t.finishedWork=t.current.alternate,t.finishedLanes=i,is(t,On,Ji),Bn(t,we()),null}function Ru(t,i){var o=bt;bt|=1;try{return t(i)}finally{bt=o,bt===0&&(Vs=we()+500,ka&&Er())}}function ts(t){Ar!==null&&Ar.tag===0&&(bt&6)===0&&js();var i=bt;bt|=1;var o=ai.transition,l=Ft;try{if(ai.transition=null,Ft=1,t)return t()}finally{Ft=l,ai.transition=o,bt=i,(bt&6)===0&&Er()}}function Pu(){$n=Hs.current,Xt(Hs)}function ns(t,i){t.finishedWork=null,t.finishedLanes=0;var o=t.timeoutHandle;if(o!==-1&&(t.timeoutHandle=-1,zv(o)),tn!==null)for(o=tn.return;o!==null;){var l=o;switch(Oc(l),l.tag){case 1:l=l.type.childContextTypes,l!=null&&Fa();break;case 3:ks(),Xt(Fn),Xt(Sn),Qc();break;case 5:Kc(l);break;case 4:ks();break;case 13:Xt(Yt);break;case 19:Xt(Yt);break;case 10:Wc(l.type._context);break;case 22:case 23:Pu()}o=o.return}if(dn=t,tn=t=Dr(t.current,null),xn=$n=i,an=0,ea=null,Eu=sl=es=0,On=ta=null,Zr!==null){for(i=0;i<Zr.length;i++)if(o=Zr[i],l=o.interleaved,l!==null){o.interleaved=null;var d=l.next,m=o.pending;if(m!==null){var w=m.next;m.next=d,l.next=w}o.pending=l}Zr=null}return t}function Wp(t,i){do{var o=tn;try{if(Gc(),Ya.current=Qa,$a){for(var l=$t.memoizedState;l!==null;){var d=l.queue;d!==null&&(d.pending=null),l=l.next}$a=!1}if(Jr=0,un=on=$t=null,Yo=!1,$o=0,Mu.current=null,o===null||o.return===null){an=1,ea=i,tn=null;break}e:{var m=t,w=o.return,F=o,V=i;if(i=xn,F.flags|=32768,V!==null&&typeof V=="object"&&typeof V.then=="function"){var le=V,Ce=F,Re=Ce.tag;if((Ce.mode&1)===0&&(Re===0||Re===11||Re===15)){var Te=Ce.alternate;Te?(Ce.updateQueue=Te.updateQueue,Ce.memoizedState=Te.memoizedState,Ce.lanes=Te.lanes):(Ce.updateQueue=null,Ce.memoizedState=null)}var We=gp(w);if(We!==null){We.flags&=-257,vp(We,w,F,m,i),We.mode&1&&mp(m,le,i),i=We,V=le;var $e=i.updateQueue;if($e===null){var Qe=new Set;Qe.add(V),i.updateQueue=Qe}else $e.add(V);break e}else{if((i&1)===0){mp(m,le,i),Du();break e}V=Error(n(426))}}else if(qt&&F.mode&1){var Qt=gp(w);if(Qt!==null){(Qt.flags&65536)===0&&(Qt.flags|=256),vp(Qt,w,F,m,i),Vc(Os(V,F));break e}}m=V=Os(V,F),an!==4&&(an=2),ta===null?ta=[m]:ta.push(m),m=w;do{switch(m.tag){case 3:m.flags|=65536,i&=-i,m.lanes|=i;var ee=hp(m,V,i);Bh(m,ee);break e;case 1:F=V;var X=m.type,re=m.stateNode;if((m.flags&128)===0&&(typeof X.getDerivedStateFromError=="function"||re!==null&&typeof re.componentDidCatch=="function"&&(Cr===null||!Cr.has(re)))){m.flags|=65536,i&=-i,m.lanes|=i;var Pe=pp(m,F,i);Bh(m,Pe);break e}}m=m.return}while(m!==null)}Yp(o)}catch(Je){i=Je,tn===o&&o!==null&&(tn=o=o.return);continue}break}while(!0)}function Xp(){var t=rl.current;return rl.current=Qa,t===null?Qa:t}function Du(){(an===0||an===3||an===2)&&(an=4),dn===null||(es&268435455)===0&&(sl&268435455)===0||Pr(dn,xn)}function dl(t,i){var o=bt;bt|=2;var l=Xp();(dn!==t||xn!==i)&&(Ji=null,ns(t,i));do try{lx();break}catch(d){Wp(t,d)}while(!0);if(Gc(),bt=o,rl.current=l,tn!==null)throw Error(n(261));return dn=null,xn=0,an}function lx(){for(;tn!==null;)qp(tn)}function cx(){for(;tn!==null&&!$();)qp(tn)}function qp(t){var i=Zp(t.alternate,t,$n);t.memoizedProps=t.pendingProps,i===null?Yp(t):tn=i,Mu.current=null}function Yp(t){var i=t;do{var o=i.alternate;if(t=i.return,(i.flags&32768)===0){if(o=tx(o,i,$n),o!==null){tn=o;return}}else{if(o=nx(o,i),o!==null){o.flags&=32767,tn=o;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{an=6,tn=null;return}}if(i=i.sibling,i!==null){tn=i;return}tn=i=t}while(i!==null);an===0&&(an=5)}function is(t,i,o){var l=Ft,d=ai.transition;try{ai.transition=null,Ft=1,ux(t,i,o,l)}finally{ai.transition=d,Ft=l}return null}function ux(t,i,o,l){do js();while(Ar!==null);if((bt&6)!==0)throw Error(n(327));o=t.finishedWork;var d=t.finishedLanes;if(o===null)return null;if(t.finishedWork=null,t.finishedLanes=0,o===t.current)throw Error(n(177));t.callbackNode=null,t.callbackPriority=0;var m=o.lanes|o.childLanes;if(_a(t,m),t===dn&&(tn=dn=null,xn=0),(o.subtreeFlags&2064)===0&&(o.flags&2064)===0||al||(al=!0,Qp(ct,function(){return js(),null})),m=(o.flags&15990)!==0,(o.subtreeFlags&15990)!==0||m){m=ai.transition,ai.transition=null;var w=Ft;Ft=1;var F=bt;bt|=4,Mu.current=null,rx(t,o),kp(o,t),Pv(Dc),Ma=!!Pc,Dc=Pc=null,t.current=o,sx(o),be(),bt=F,Ft=w,ai.transition=m}else t.current=o;if(al&&(al=!1,Ar=t,ll=d),m=t.pendingLanes,m===0&&(Cr=null),_n(o.stateNode),Bn(t,we()),i!==null)for(l=t.onRecoverableError,o=0;o<i.length;o++)d=i[o],l(d.value,{componentStack:d.stack,digest:d.digest});if(ol)throw ol=!1,t=Tu,Tu=null,t;return(ll&1)!==0&&t.tag!==0&&js(),m=t.pendingLanes,(m&1)!==0?t===bu?na++:(na=0,bu=t):na=0,Er(),null}function js(){if(Ar!==null){var t=Ff(ll),i=ai.transition,o=Ft;try{if(ai.transition=null,Ft=16>t?16:t,Ar===null)var l=!1;else{if(t=Ar,Ar=null,ll=0,(bt&6)!==0)throw Error(n(331));var d=bt;for(bt|=4,qe=t.current;qe!==null;){var m=qe,w=m.child;if((qe.flags&16)!==0){var F=m.deletions;if(F!==null){for(var V=0;V<F.length;V++){var le=F[V];for(qe=le;qe!==null;){var Ce=qe;switch(Ce.tag){case 0:case 11:case 15:Jo(8,Ce,m)}var Re=Ce.child;if(Re!==null)Re.return=Ce,qe=Re;else for(;qe!==null;){Ce=qe;var Te=Ce.sibling,We=Ce.return;if(Ip(Ce),Ce===le){qe=null;break}if(Te!==null){Te.return=We,qe=Te;break}qe=We}}}var $e=m.alternate;if($e!==null){var Qe=$e.child;if(Qe!==null){$e.child=null;do{var Qt=Qe.sibling;Qe.sibling=null,Qe=Qt}while(Qe!==null)}}qe=m}}if((m.subtreeFlags&2064)!==0&&w!==null)w.return=m,qe=w;else e:for(;qe!==null;){if(m=qe,(m.flags&2048)!==0)switch(m.tag){case 0:case 11:case 15:Jo(9,m,m.return)}var ee=m.sibling;if(ee!==null){ee.return=m.return,qe=ee;break e}qe=m.return}}var X=t.current;for(qe=X;qe!==null;){w=qe;var re=w.child;if((w.subtreeFlags&2064)!==0&&re!==null)re.return=w,qe=re;else e:for(w=X;qe!==null;){if(F=qe,(F.flags&2048)!==0)try{switch(F.tag){case 0:case 11:case 15:il(9,F)}}catch(Je){Zt(F,F.return,Je)}if(F===w){qe=null;break e}var Pe=F.sibling;if(Pe!==null){Pe.return=F.return,qe=Pe;break e}qe=F.return}}if(bt=d,Er(),wt&&typeof wt.onPostCommitFiberRoot=="function")try{wt.onPostCommitFiberRoot(Dt,t)}catch{}l=!0}return l}finally{Ft=o,ai.transition=i}}return!1}function $p(t,i,o){i=Os(o,i),i=hp(t,i,1),t=Tr(t,i,1),i=Pn(),t!==null&&(Un(t,1,i),Bn(t,i))}function Zt(t,i,o){if(t.tag===3)$p(t,t,o);else for(;i!==null;){if(i.tag===3){$p(i,t,o);break}else if(i.tag===1){var l=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(Cr===null||!Cr.has(l))){t=Os(o,t),t=pp(i,t,1),i=Tr(i,t,1),t=Pn(),i!==null&&(Un(i,1,t),Bn(i,t));break}}i=i.return}}function dx(t,i,o){var l=t.pingCache;l!==null&&l.delete(i),i=Pn(),t.pingedLanes|=t.suspendedLanes&o,dn===t&&(xn&o)===o&&(an===4||an===3&&(xn&130023424)===xn&&500>we()-wu?ns(t,0):Eu|=o),Bn(t,i)}function Kp(t,i){i===0&&((t.mode&1)===0?i=1:(i=yi,yi<<=1,(yi&130023424)===0&&(yi=4194304)));var o=Pn();t=Ki(t,i),t!==null&&(Un(t,i,o),Bn(t,o))}function fx(t){var i=t.memoizedState,o=0;i!==null&&(o=i.retryLane),Kp(t,o)}function hx(t,i){var o=0;switch(t.tag){case 13:var l=t.stateNode,d=t.memoizedState;d!==null&&(o=d.retryLane);break;case 19:l=t.stateNode;break;default:throw Error(n(314))}l!==null&&l.delete(i),Kp(t,o)}var Zp;Zp=function(t,i,o){if(t!==null)if(t.memoizedProps!==i.pendingProps||Fn.current)kn=!0;else{if((t.lanes&o)===0&&(i.flags&128)===0)return kn=!1,ex(t,i,o);kn=(t.flags&131072)!==0}else kn=!1,qt&&(i.flags&1048576)!==0&&Ph(i,Ba,i.index);switch(i.lanes=0,i.tag){case 2:var l=i.type;tl(t,i),t=i.pendingProps;var d=Ds(i,Sn.current);zs(i,o),d=tu(null,i,l,t,d,o);var m=nu();return i.flags|=1,typeof d=="object"&&d!==null&&typeof d.render=="function"&&d.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,zn(l)?(m=!0,za(i)):m=!1,i.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,Yc(i),d.updater=Ja,i.stateNode=d,d._reactInternals=i,lu(i,l,t,o),i=fu(null,i,l,!0,m,o)):(i.tag=0,qt&&m&&kc(i),Rn(null,i,d,o),i=i.child),i;case 16:l=i.elementType;e:{switch(tl(t,i),t=i.pendingProps,d=l._init,l=d(l._payload),i.type=l,d=i.tag=mx(l),t=Ei(l,t),d){case 0:i=du(null,i,l,t,o);break e;case 1:i=Ep(null,i,l,t,o);break e;case 11:i=xp(null,i,l,t,o);break e;case 14:i=_p(null,i,l,Ei(l.type,t),o);break e}throw Error(n(306,l,""))}return i;case 0:return l=i.type,d=i.pendingProps,d=i.elementType===l?d:Ei(l,d),du(t,i,l,d,o);case 1:return l=i.type,d=i.pendingProps,d=i.elementType===l?d:Ei(l,d),Ep(t,i,l,d,o);case 3:e:{if(wp(i),t===null)throw Error(n(387));l=i.pendingProps,m=i.memoizedState,d=m.element,Oh(t,i),Xa(i,l,null,o);var w=i.memoizedState;if(l=w.element,m.isDehydrated)if(m={element:l,isDehydrated:!1,cache:w.cache,pendingSuspenseBoundaries:w.pendingSuspenseBoundaries,transitions:w.transitions},i.updateQueue.baseState=m,i.memoizedState=m,i.flags&256){d=Os(Error(n(423)),i),i=Tp(t,i,l,o,d);break e}else if(l!==d){d=Os(Error(n(424)),i),i=Tp(t,i,l,o,d);break e}else for(Yn=yr(i.stateNode.containerInfo.firstChild),qn=i,qt=!0,Mi=null,o=zh(i,null,l,o),i.child=o;o;)o.flags=o.flags&-3|4096,o=o.sibling;else{if(Ns(),l===d){i=Qi(t,i,o);break e}Rn(t,i,l,o)}i=i.child}return i;case 5:return Vh(i),t===null&&Hc(i),l=i.type,d=i.pendingProps,m=t!==null?t.memoizedProps:null,w=d.children,Lc(l,d)?w=null:m!==null&&Lc(l,m)&&(i.flags|=32),Mp(t,i),Rn(t,i,w,o),i.child;case 6:return t===null&&Hc(i),null;case 13:return bp(t,i,o);case 4:return $c(i,i.stateNode.containerInfo),l=i.pendingProps,t===null?i.child=Us(i,null,l,o):Rn(t,i,l,o),i.child;case 11:return l=i.type,d=i.pendingProps,d=i.elementType===l?d:Ei(l,d),xp(t,i,l,d,o);case 7:return Rn(t,i,i.pendingProps,o),i.child;case 8:return Rn(t,i,i.pendingProps.children,o),i.child;case 12:return Rn(t,i,i.pendingProps.children,o),i.child;case 10:e:{if(l=i.type._context,d=i.pendingProps,m=i.memoizedProps,w=d.value,jt(ja,l._currentValue),l._currentValue=w,m!==null)if(Si(m.value,w)){if(m.children===d.children&&!Fn.current){i=Qi(t,i,o);break e}}else for(m=i.child,m!==null&&(m.return=i);m!==null;){var F=m.dependencies;if(F!==null){w=m.child;for(var V=F.firstContext;V!==null;){if(V.context===l){if(m.tag===1){V=Zi(-1,o&-o),V.tag=2;var le=m.updateQueue;if(le!==null){le=le.shared;var Ce=le.pending;Ce===null?V.next=V:(V.next=Ce.next,Ce.next=V),le.pending=V}}m.lanes|=o,V=m.alternate,V!==null&&(V.lanes|=o),Xc(m.return,o,i),F.lanes|=o;break}V=V.next}}else if(m.tag===10)w=m.type===i.type?null:m.child;else if(m.tag===18){if(w=m.return,w===null)throw Error(n(341));w.lanes|=o,F=w.alternate,F!==null&&(F.lanes|=o),Xc(w,o,i),w=m.sibling}else w=m.child;if(w!==null)w.return=m;else for(w=m;w!==null;){if(w===i){w=null;break}if(m=w.sibling,m!==null){m.return=w.return,w=m;break}w=w.return}m=w}Rn(t,i,d.children,o),i=i.child}return i;case 9:return d=i.type,l=i.pendingProps.children,zs(i,o),d=si(d),l=l(d),i.flags|=1,Rn(t,i,l,o),i.child;case 14:return l=i.type,d=Ei(l,i.pendingProps),d=Ei(l.type,d),_p(t,i,l,d,o);case 15:return yp(t,i,i.type,i.pendingProps,o);case 17:return l=i.type,d=i.pendingProps,d=i.elementType===l?d:Ei(l,d),tl(t,i),i.tag=1,zn(l)?(t=!0,za(i)):t=!1,zs(i,o),dp(i,l,d),lu(i,l,d,o),fu(null,i,l,!0,t,o);case 19:return Ap(t,i,o);case 22:return Sp(t,i,o)}throw Error(n(156,i.tag))};function Qp(t,i){return se(t,i)}function px(t,i,o,l){this.tag=t,this.key=o,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function li(t,i,o,l){return new px(t,i,o,l)}function Lu(t){return t=t.prototype,!(!t||!t.isReactComponent)}function mx(t){if(typeof t=="function")return Lu(t)?1:0;if(t!=null){if(t=t.$$typeof,t===ae)return 11;if(t===ge)return 14}return 2}function Dr(t,i){var o=t.alternate;return o===null?(o=li(t.tag,i,t.key,t.mode),o.elementType=t.elementType,o.type=t.type,o.stateNode=t.stateNode,o.alternate=t,t.alternate=o):(o.pendingProps=i,o.type=t.type,o.flags=0,o.subtreeFlags=0,o.deletions=null),o.flags=t.flags&14680064,o.childLanes=t.childLanes,o.lanes=t.lanes,o.child=t.child,o.memoizedProps=t.memoizedProps,o.memoizedState=t.memoizedState,o.updateQueue=t.updateQueue,i=t.dependencies,o.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},o.sibling=t.sibling,o.index=t.index,o.ref=t.ref,o}function fl(t,i,o,l,d,m){var w=2;if(l=t,typeof t=="function")Lu(t)&&(w=1);else if(typeof t=="string")w=5;else e:switch(t){case B:return rs(o.children,d,m,i);case Z:w=8,d|=8;break;case I:return t=li(12,o,i,d|2),t.elementType=I,t.lanes=m,t;case ie:return t=li(13,o,i,d),t.elementType=ie,t.lanes=m,t;case ve:return t=li(19,o,i,d),t.elementType=ve,t.lanes=m,t;case pe:return hl(o,d,m,i);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case D:w=10;break e;case G:w=9;break e;case ae:w=11;break e;case ge:w=14;break e;case de:w=16,l=null;break e}throw Error(n(130,t==null?t:typeof t,""))}return i=li(w,o,i,d),i.elementType=t,i.type=l,i.lanes=m,i}function rs(t,i,o,l){return t=li(7,t,l,i),t.lanes=o,t}function hl(t,i,o,l){return t=li(22,t,l,i),t.elementType=pe,t.lanes=o,t.stateNode={isHidden:!1},t}function Iu(t,i,o){return t=li(6,t,null,i),t.lanes=o,t}function Nu(t,i,o){return i=li(4,t.children!==null?t.children:[],t.key,i),i.lanes=o,i.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},i}function gx(t,i,o,l,d){this.tag=i,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ni(0),this.expirationTimes=ni(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ni(0),this.identifierPrefix=l,this.onRecoverableError=d,this.mutableSourceEagerHydrationData=null}function Uu(t,i,o,l,d,m,w,F,V){return t=new gx(t,i,o,F,V),i===1?(i=1,m===!0&&(i|=8)):i=0,m=li(3,null,null,i),t.current=m,m.stateNode=t,m.memoizedState={element:l,isDehydrated:o,cache:null,transitions:null,pendingSuspenseBoundaries:null},Yc(m),t}function vx(t,i,o){var l=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:O,key:l==null?null:""+l,children:t,containerInfo:i,implementation:o}}function Jp(t){if(!t)return Mr;t=t._reactInternals;e:{if(gn(t)!==t||t.tag!==1)throw Error(n(170));var i=t;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(zn(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(n(171))}if(t.tag===1){var o=t.type;if(zn(o))return Ch(t,o,i)}return i}function em(t,i,o,l,d,m,w,F,V){return t=Uu(o,l,!0,t,d,m,w,F,V),t.context=Jp(null),o=t.current,l=Pn(),d=Rr(o),m=Zi(l,d),m.callback=i??null,Tr(o,m,d),t.current.lanes=d,Un(t,d,l),Bn(t,l),t}function pl(t,i,o,l){var d=i.current,m=Pn(),w=Rr(d);return o=Jp(o),i.context===null?i.context=o:i.pendingContext=o,i=Zi(m,w),i.payload={element:t},l=l===void 0?null:l,l!==null&&(i.callback=l),t=Tr(d,i,w),t!==null&&(bi(t,d,w,m),Wa(t,d,w)),w}function ml(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function tm(t,i){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var o=t.retryLane;t.retryLane=o!==0&&o<i?o:i}}function Fu(t,i){tm(t,i),(t=t.alternate)&&tm(t,i)}function xx(){return null}var nm=typeof reportError=="function"?reportError:function(t){console.error(t)};function zu(t){this._internalRoot=t}gl.prototype.render=zu.prototype.render=function(t){var i=this._internalRoot;if(i===null)throw Error(n(409));pl(t,i,null,null)},gl.prototype.unmount=zu.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var i=t.containerInfo;ts(function(){pl(null,t,null,null)}),i[Xi]=null}};function gl(t){this._internalRoot=t}gl.prototype.unstable_scheduleHydration=function(t){if(t){var i=Of();t={blockedOn:null,target:t,priority:i};for(var o=0;o<vr.length&&i!==0&&i<vr[o].priority;o++);vr.splice(o,0,t),o===0&&Vf(t)}};function ku(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function vl(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function im(){}function _x(t,i,o,l,d){if(d){if(typeof l=="function"){var m=l;l=function(){var le=ml(w);m.call(le)}}var w=em(i,l,t,0,null,!1,!1,"",im);return t._reactRootContainer=w,t[Xi]=w.current,Bo(t.nodeType===8?t.parentNode:t),ts(),w}for(;d=t.lastChild;)t.removeChild(d);if(typeof l=="function"){var F=l;l=function(){var le=ml(V);F.call(le)}}var V=Uu(t,0,!1,null,null,!1,!1,"",im);return t._reactRootContainer=V,t[Xi]=V.current,Bo(t.nodeType===8?t.parentNode:t),ts(function(){pl(i,V,o,l)}),V}function xl(t,i,o,l,d){var m=o._reactRootContainer;if(m){var w=m;if(typeof d=="function"){var F=d;d=function(){var V=ml(w);F.call(V)}}pl(i,w,t,d)}else w=_x(o,i,t,d,l);return ml(w)}zf=function(t){switch(t.tag){case 3:var i=t.stateNode;if(i.current.memoizedState.isDehydrated){var o=sn(i.pendingLanes);o!==0&&(lc(i,o|1),Bn(i,we()),(bt&6)===0&&(Vs=we()+500,Er()))}break;case 13:ts(function(){var l=Ki(t,1);if(l!==null){var d=Pn();bi(l,t,1,d)}}),Fu(t,1)}},cc=function(t){if(t.tag===13){var i=Ki(t,134217728);if(i!==null){var o=Pn();bi(i,t,134217728,o)}Fu(t,134217728)}},kf=function(t){if(t.tag===13){var i=Rr(t),o=Ki(t,i);if(o!==null){var l=Pn();bi(o,t,i,l)}Fu(t,i)}},Of=function(){return Ft},Bf=function(t,i){var o=Ft;try{return Ft=t,i()}finally{Ft=o}},Ne=function(t,i,o){switch(i){case"input":if(Ge(t,o),i=o.name,o.type==="radio"&&i!=null){for(o=t;o.parentNode;)o=o.parentNode;for(o=o.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<o.length;i++){var l=o[i];if(l!==t&&l.form===t.form){var d=Ua(l);if(!d)throw Error(n(90));xe(l),Ge(l,d)}}}break;case"textarea":ye(t,o);break;case"select":i=o.value,i!=null&&N(t,!!o.multiple,i,!1)}},It=Ru,Kt=ts;var yx={usingClientEntryPoint:!1,Events:[jo,Rs,Ua,Ue,ut,Ru]},ia={findFiberByHostInstance:qr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Sx={bundleType:ia.bundleType,version:ia.version,rendererPackageName:ia.rendererPackageName,rendererConfig:ia.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:A.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=R(t),t===null?null:t.stateNode},findFiberByHostInstance:ia.findFiberByHostInstance||xx,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var _l=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!_l.isDisabled&&_l.supportsFiber)try{Dt=_l.inject(Sx),wt=_l}catch{}}return Hn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=yx,Hn.createPortal=function(t,i){var o=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!ku(i))throw Error(n(200));return vx(t,i,null,o)},Hn.createRoot=function(t,i){if(!ku(t))throw Error(n(299));var o=!1,l="",d=nm;return i!=null&&(i.unstable_strictMode===!0&&(o=!0),i.identifierPrefix!==void 0&&(l=i.identifierPrefix),i.onRecoverableError!==void 0&&(d=i.onRecoverableError)),i=Uu(t,1,!1,null,null,o,!1,l,d),t[Xi]=i.current,Bo(t.nodeType===8?t.parentNode:t),new zu(i)},Hn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var i=t._reactInternals;if(i===void 0)throw typeof t.render=="function"?Error(n(188)):(t=Object.keys(t).join(","),Error(n(268,t)));return t=R(i),t=t===null?null:t.stateNode,t},Hn.flushSync=function(t){return ts(t)},Hn.hydrate=function(t,i,o){if(!vl(i))throw Error(n(200));return xl(null,t,i,!0,o)},Hn.hydrateRoot=function(t,i,o){if(!ku(t))throw Error(n(405));var l=o!=null&&o.hydratedSources||null,d=!1,m="",w=nm;if(o!=null&&(o.unstable_strictMode===!0&&(d=!0),o.identifierPrefix!==void 0&&(m=o.identifierPrefix),o.onRecoverableError!==void 0&&(w=o.onRecoverableError)),i=em(i,null,t,1,o??null,d,!1,m,w),t[Xi]=i.current,Bo(t),l)for(t=0;t<l.length;t++)o=l[t],d=o._getVersion,d=d(o._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[o,d]:i.mutableSourceEagerHydrationData.push(o,d);return new gl(i)},Hn.render=function(t,i,o){if(!vl(i))throw Error(n(200));return xl(null,t,i,!1,o)},Hn.unmountComponentAtNode=function(t){if(!vl(t))throw Error(n(40));return t._reactRootContainer?(ts(function(){xl(null,null,t,!1,function(){t._reactRootContainer=null,t[Xi]=null})}),!0):!1},Hn.unstable_batchedUpdates=Ru,Hn.unstable_renderSubtreeIntoContainer=function(t,i,o,l){if(!vl(o))throw Error(n(200));if(t==null||t._reactInternals===void 0)throw Error(n(38));return xl(t,i,o,!1,l)},Hn.version="18.3.1-next-f1338f8080-20240426",Hn}var dm;function Px(){if(dm)return Hu.exports;dm=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),Hu.exports=Rx(),Hu.exports}var fm;function Dx(){if(fm)return yl;fm=1;var s=Px();return yl.createRoot=s.createRoot,yl.hydrateRoot=s.hydrateRoot,yl}var Lx=Dx();const Ix=mg(Lx);/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const _f="170",Nx=0,hm=1,Ux=2,gg=1,Fx=2,or=3,Xr=0,jn=1,ar=2,Vr=0,co=1,pm=2,mm=3,gm=4,zx=5,ms=100,kx=101,Ox=102,Bx=103,Hx=104,Vx=200,jx=201,Gx=202,Wx=203,wd=204,Td=205,Xx=206,qx=207,Yx=208,$x=209,Kx=210,Zx=211,Qx=212,Jx=213,e_=214,bd=0,Cd=1,Ad=2,ho=3,Rd=4,Pd=5,Dd=6,Ld=7,vg=0,t_=1,n_=2,jr=0,i_=1,r_=2,s_=3,o_=4,a_=5,l_=6,c_=7,xg=300,po=301,mo=302,Id=303,Nd=304,nc=306,Ud=1e3,xs=1001,Fd=1002,Jn=1003,u_=1004,Sl=1005,hi=1006,Gu=1007,_s=1008,Gi=1009,_g=1010,yg=1011,pa=1012,yf=1013,Ss=1014,cr=1015,yo=1016,Sf=1017,Mf=1018,go=1020,Sg=35902,Mg=1021,Eg=1022,Li=1023,wg=1024,Tg=1025,uo=1026,vo=1027,Ef=1028,wf=1029,bg=1030,Tf=1031,bf=1033,Yl=33776,$l=33777,Kl=33778,Zl=33779,zd=35840,kd=35841,Od=35842,Bd=35843,Hd=36196,Vd=37492,jd=37496,Gd=37808,Wd=37809,Xd=37810,qd=37811,Yd=37812,$d=37813,Kd=37814,Zd=37815,Qd=37816,Jd=37817,ef=37818,tf=37819,nf=37820,rf=37821,Ql=36492,sf=36494,of=36495,Cg=36283,af=36284,lf=36285,cf=36286,d_=3200,f_=3201,h_=0,p_=1,Br="",di="srgb",So="srgb-linear",ic="linear",zt="srgb",Gs=7680,vm=519,m_=512,g_=513,v_=514,Ag=515,x_=516,__=517,y_=518,S_=519,uf=35044,xm="300 es",ur=2e3,ec=2001;class Mo{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(n)===-1&&r[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const r=this._listeners;return r[e]!==void 0&&r[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const a=this._listeners[e];if(a!==void 0){const c=a.indexOf(n);c!==-1&&a.splice(c,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const r=this._listeners[e.type];if(r!==void 0){e.target=this;const a=r.slice(0);for(let c=0,u=a.length;c<u;c++)a[c].call(this,e);e.target=null}}}const Tn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Wu=Math.PI/180,df=180/Math.PI;function Gr(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Tn[s&255]+Tn[s>>8&255]+Tn[s>>16&255]+Tn[s>>24&255]+"-"+Tn[e&255]+Tn[e>>8&255]+"-"+Tn[e>>16&15|64]+Tn[e>>24&255]+"-"+Tn[n&63|128]+Tn[n>>8&255]+"-"+Tn[n>>16&255]+Tn[n>>24&255]+Tn[r&255]+Tn[r>>8&255]+Tn[r>>16&255]+Tn[r>>24&255]).toLowerCase()}function In(s,e,n){return Math.max(e,Math.min(n,s))}function M_(s,e){return(s%e+e)%e}function Xu(s,e,n){return(1-n)*s+n*e}function ji(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function kt(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}class Lt{constructor(e=0,n=0){Lt.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,r=this.y,a=e.elements;return this.x=a[0]*n+a[3]*r+a[6],this.y=a[1]*n+a[4]*r+a[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(n,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const r=this.dot(e)/n;return Math.acos(In(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,r=this.y-e.y;return n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const r=Math.cos(n),a=Math.sin(n),c=this.x-e.x,u=this.y-e.y;return this.x=c*r-u*a+e.x,this.y=c*a+u*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class vt{constructor(e,n,r,a,c,u,f,p,g){vt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,r,a,c,u,f,p,g)}set(e,n,r,a,c,u,f,p,g){const _=this.elements;return _[0]=e,_[1]=a,_[2]=f,_[3]=n,_[4]=c,_[5]=p,_[6]=r,_[7]=u,_[8]=g,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,r=e.elements;return n[0]=r[0],n[1]=r[1],n[2]=r[2],n[3]=r[3],n[4]=r[4],n[5]=r[5],n[6]=r[6],n[7]=r[7],n[8]=r[8],this}extractBasis(e,n,r){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const r=e.elements,a=n.elements,c=this.elements,u=r[0],f=r[3],p=r[6],g=r[1],_=r[4],x=r[7],y=r[2],E=r[5],T=r[8],P=a[0],S=a[3],v=a[6],U=a[1],L=a[4],A=a[7],Q=a[2],O=a[5],B=a[8];return c[0]=u*P+f*U+p*Q,c[3]=u*S+f*L+p*O,c[6]=u*v+f*A+p*B,c[1]=g*P+_*U+x*Q,c[4]=g*S+_*L+x*O,c[7]=g*v+_*A+x*B,c[2]=y*P+E*U+T*Q,c[5]=y*S+E*L+T*O,c[8]=y*v+E*A+T*B,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],r=e[1],a=e[2],c=e[3],u=e[4],f=e[5],p=e[6],g=e[7],_=e[8];return n*u*_-n*f*g-r*c*_+r*f*p+a*c*g-a*u*p}invert(){const e=this.elements,n=e[0],r=e[1],a=e[2],c=e[3],u=e[4],f=e[5],p=e[6],g=e[7],_=e[8],x=_*u-f*g,y=f*p-_*c,E=g*c-u*p,T=n*x+r*y+a*E;if(T===0)return this.set(0,0,0,0,0,0,0,0,0);const P=1/T;return e[0]=x*P,e[1]=(a*g-_*r)*P,e[2]=(f*r-a*u)*P,e[3]=y*P,e[4]=(_*n-a*p)*P,e[5]=(a*c-f*n)*P,e[6]=E*P,e[7]=(r*p-g*n)*P,e[8]=(u*n-r*c)*P,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,r,a,c,u,f){const p=Math.cos(c),g=Math.sin(c);return this.set(r*p,r*g,-r*(p*u+g*f)+u+e,-a*g,a*p,-a*(-g*u+p*f)+f+n,0,0,1),this}scale(e,n){return this.premultiply(qu.makeScale(e,n)),this}rotate(e){return this.premultiply(qu.makeRotation(-e)),this}translate(e,n){return this.premultiply(qu.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,-r,0,r,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,r=e.elements;for(let a=0;a<9;a++)if(n[a]!==r[a])return!1;return!0}fromArray(e,n=0){for(let r=0;r<9;r++)this.elements[r]=e[r+n];return this}toArray(e=[],n=0){const r=this.elements;return e[n]=r[0],e[n+1]=r[1],e[n+2]=r[2],e[n+3]=r[3],e[n+4]=r[4],e[n+5]=r[5],e[n+6]=r[6],e[n+7]=r[7],e[n+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const qu=new vt;function Rg(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function tc(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function E_(){const s=tc("canvas");return s.style.display="block",s}const _m={};function ua(s){s in _m||(_m[s]=!0,console.warn(s))}function w_(s,e,n){return new Promise(function(r,a){function c(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:a();break;case s.TIMEOUT_EXPIRED:setTimeout(c,n);break;default:r()}}setTimeout(c,n)})}function T_(s){const e=s.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function b_(s){const e=s.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Ct={enabled:!0,workingColorSpace:So,spaces:{},convert:function(s,e,n){return this.enabled===!1||e===n||!e||!n||(this.spaces[e].transfer===zt&&(s.r=dr(s.r),s.g=dr(s.g),s.b=dr(s.b)),this.spaces[e].primaries!==this.spaces[n].primaries&&(s.applyMatrix3(this.spaces[e].toXYZ),s.applyMatrix3(this.spaces[n].fromXYZ)),this.spaces[n].transfer===zt&&(s.r=fo(s.r),s.g=fo(s.g),s.b=fo(s.b))),s},fromWorkingColorSpace:function(s,e){return this.convert(s,this.workingColorSpace,e)},toWorkingColorSpace:function(s,e){return this.convert(s,e,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Br?ic:this.spaces[s].transfer},getLuminanceCoefficients:function(s,e=this.workingColorSpace){return s.fromArray(this.spaces[e].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,e,n){return s.copy(this.spaces[e].toXYZ).multiply(this.spaces[n].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}};function dr(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function fo(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}const ym=[.64,.33,.3,.6,.15,.06],Sm=[.2126,.7152,.0722],Mm=[.3127,.329],Em=new vt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),wm=new vt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Ct.define({[So]:{primaries:ym,whitePoint:Mm,transfer:ic,toXYZ:Em,fromXYZ:wm,luminanceCoefficients:Sm,workingColorSpaceConfig:{unpackColorSpace:di},outputColorSpaceConfig:{drawingBufferColorSpace:di}},[di]:{primaries:ym,whitePoint:Mm,transfer:zt,toXYZ:Em,fromXYZ:wm,luminanceCoefficients:Sm,outputColorSpaceConfig:{drawingBufferColorSpace:di}}});let Ws;class C_{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Ws===void 0&&(Ws=tc("canvas")),Ws.width=e.width,Ws.height=e.height;const r=Ws.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),n=Ws}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=tc("canvas");n.width=e.width,n.height=e.height;const r=n.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const a=r.getImageData(0,0,e.width,e.height),c=a.data;for(let u=0;u<c.length;u++)c[u]=dr(c[u]/255)*255;return r.putImageData(a,0,0),n}else if(e.data){const n=e.data.slice(0);for(let r=0;r<n.length;r++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[r]=Math.floor(dr(n[r]/255)*255):n[r]=dr(n[r]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let A_=0;class Pg{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:A_++}),this.uuid=Gr(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},a=this.data;if(a!==null){let c;if(Array.isArray(a)){c=[];for(let u=0,f=a.length;u<f;u++)a[u].isDataTexture?c.push(Yu(a[u].image)):c.push(Yu(a[u]))}else c=Yu(a);r.url=c}return n||(e.images[this.uuid]=r),r}}function Yu(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?C_.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let R_=0;class Nn extends Mo{constructor(e=Nn.DEFAULT_IMAGE,n=Nn.DEFAULT_MAPPING,r=xs,a=xs,c=hi,u=_s,f=Li,p=Gi,g=Nn.DEFAULT_ANISOTROPY,_=Br){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:R_++}),this.uuid=Gr(),this.name="",this.source=new Pg(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=r,this.wrapT=a,this.magFilter=c,this.minFilter=u,this.anisotropy=g,this.format=f,this.internalFormat=null,this.type=p,this.offset=new Lt(0,0),this.repeat=new Lt(1,1),this.center=new Lt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new vt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=_,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),n||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==xg)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ud:e.x=e.x-Math.floor(e.x);break;case xs:e.x=e.x<0?0:1;break;case Fd:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ud:e.y=e.y-Math.floor(e.y);break;case xs:e.y=e.y<0?0:1;break;case Fd:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Nn.DEFAULT_IMAGE=null;Nn.DEFAULT_MAPPING=xg;Nn.DEFAULT_ANISOTROPY=1;class en{constructor(e=0,n=0,r=0,a=1){en.prototype.isVector4=!0,this.x=e,this.y=n,this.z=r,this.w=a}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,r,a){return this.x=e,this.y=n,this.z=r,this.w=a,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,r=this.y,a=this.z,c=this.w,u=e.elements;return this.x=u[0]*n+u[4]*r+u[8]*a+u[12]*c,this.y=u[1]*n+u[5]*r+u[9]*a+u[13]*c,this.z=u[2]*n+u[6]*r+u[10]*a+u[14]*c,this.w=u[3]*n+u[7]*r+u[11]*a+u[15]*c,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,r,a,c;const p=e.elements,g=p[0],_=p[4],x=p[8],y=p[1],E=p[5],T=p[9],P=p[2],S=p[6],v=p[10];if(Math.abs(_-y)<.01&&Math.abs(x-P)<.01&&Math.abs(T-S)<.01){if(Math.abs(_+y)<.1&&Math.abs(x+P)<.1&&Math.abs(T+S)<.1&&Math.abs(g+E+v-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const L=(g+1)/2,A=(E+1)/2,Q=(v+1)/2,O=(_+y)/4,B=(x+P)/4,Z=(T+S)/4;return L>A&&L>Q?L<.01?(r=0,a=.707106781,c=.707106781):(r=Math.sqrt(L),a=O/r,c=B/r):A>Q?A<.01?(r=.707106781,a=0,c=.707106781):(a=Math.sqrt(A),r=O/a,c=Z/a):Q<.01?(r=.707106781,a=.707106781,c=0):(c=Math.sqrt(Q),r=B/c,a=Z/c),this.set(r,a,c,n),this}let U=Math.sqrt((S-T)*(S-T)+(x-P)*(x-P)+(y-_)*(y-_));return Math.abs(U)<.001&&(U=1),this.x=(S-T)/U,this.y=(x-P)/U,this.z=(y-_)/U,this.w=Math.acos((g+E+v-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(n,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this.z=e.z+(n.z-e.z)*r,this.w=e.w+(n.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class P_ extends Mo{constructor(e=1,n=1,r={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new en(0,0,e,n),this.scissorTest=!1,this.viewport=new en(0,0,e,n);const a={width:e,height:n,depth:1};r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:hi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},r);const c=new Nn(a,r.mapping,r.wrapS,r.wrapT,r.magFilter,r.minFilter,r.format,r.type,r.anisotropy,r.colorSpace);c.flipY=!1,c.generateMipmaps=r.generateMipmaps,c.internalFormat=r.internalFormat,this.textures=[];const u=r.count;for(let f=0;f<u;f++)this.textures[f]=c.clone(),this.textures[f].isRenderTargetTexture=!0;this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this.depthTexture=r.depthTexture,this.samples=r.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,n,r=1){if(this.width!==e||this.height!==n||this.depth!==r){this.width=e,this.height=n,this.depth=r;for(let a=0,c=this.textures.length;a<c;a++)this.textures[a].image.width=e,this.textures[a].image.height=n,this.textures[a].image.depth=r;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let r=0,a=e.textures.length;r<a;r++)this.textures[r]=e.textures[r].clone(),this.textures[r].isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new Pg(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ii extends P_{constructor(e=1,n=1,r={}){super(e,n,r),this.isWebGLRenderTarget=!0}}class Dg extends Nn{constructor(e=null,n=1,r=1,a=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:r,depth:a},this.magFilter=Jn,this.minFilter=Jn,this.wrapR=xs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class D_ extends Nn{constructor(e=null,n=1,r=1,a=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:r,depth:a},this.magFilter=Jn,this.minFilter=Jn,this.wrapR=xs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ga{constructor(e=0,n=0,r=0,a=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=r,this._w=a}static slerpFlat(e,n,r,a,c,u,f){let p=r[a+0],g=r[a+1],_=r[a+2],x=r[a+3];const y=c[u+0],E=c[u+1],T=c[u+2],P=c[u+3];if(f===0){e[n+0]=p,e[n+1]=g,e[n+2]=_,e[n+3]=x;return}if(f===1){e[n+0]=y,e[n+1]=E,e[n+2]=T,e[n+3]=P;return}if(x!==P||p!==y||g!==E||_!==T){let S=1-f;const v=p*y+g*E+_*T+x*P,U=v>=0?1:-1,L=1-v*v;if(L>Number.EPSILON){const Q=Math.sqrt(L),O=Math.atan2(Q,v*U);S=Math.sin(S*O)/Q,f=Math.sin(f*O)/Q}const A=f*U;if(p=p*S+y*A,g=g*S+E*A,_=_*S+T*A,x=x*S+P*A,S===1-f){const Q=1/Math.sqrt(p*p+g*g+_*_+x*x);p*=Q,g*=Q,_*=Q,x*=Q}}e[n]=p,e[n+1]=g,e[n+2]=_,e[n+3]=x}static multiplyQuaternionsFlat(e,n,r,a,c,u){const f=r[a],p=r[a+1],g=r[a+2],_=r[a+3],x=c[u],y=c[u+1],E=c[u+2],T=c[u+3];return e[n]=f*T+_*x+p*E-g*y,e[n+1]=p*T+_*y+g*x-f*E,e[n+2]=g*T+_*E+f*y-p*x,e[n+3]=_*T-f*x-p*y-g*E,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,r,a){return this._x=e,this._y=n,this._z=r,this._w=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const r=e._x,a=e._y,c=e._z,u=e._order,f=Math.cos,p=Math.sin,g=f(r/2),_=f(a/2),x=f(c/2),y=p(r/2),E=p(a/2),T=p(c/2);switch(u){case"XYZ":this._x=y*_*x+g*E*T,this._y=g*E*x-y*_*T,this._z=g*_*T+y*E*x,this._w=g*_*x-y*E*T;break;case"YXZ":this._x=y*_*x+g*E*T,this._y=g*E*x-y*_*T,this._z=g*_*T-y*E*x,this._w=g*_*x+y*E*T;break;case"ZXY":this._x=y*_*x-g*E*T,this._y=g*E*x+y*_*T,this._z=g*_*T+y*E*x,this._w=g*_*x-y*E*T;break;case"ZYX":this._x=y*_*x-g*E*T,this._y=g*E*x+y*_*T,this._z=g*_*T-y*E*x,this._w=g*_*x+y*E*T;break;case"YZX":this._x=y*_*x+g*E*T,this._y=g*E*x+y*_*T,this._z=g*_*T-y*E*x,this._w=g*_*x-y*E*T;break;case"XZY":this._x=y*_*x-g*E*T,this._y=g*E*x-y*_*T,this._z=g*_*T+y*E*x,this._w=g*_*x+y*E*T;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+u)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const r=n/2,a=Math.sin(r);return this._x=e.x*a,this._y=e.y*a,this._z=e.z*a,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,r=n[0],a=n[4],c=n[8],u=n[1],f=n[5],p=n[9],g=n[2],_=n[6],x=n[10],y=r+f+x;if(y>0){const E=.5/Math.sqrt(y+1);this._w=.25/E,this._x=(_-p)*E,this._y=(c-g)*E,this._z=(u-a)*E}else if(r>f&&r>x){const E=2*Math.sqrt(1+r-f-x);this._w=(_-p)/E,this._x=.25*E,this._y=(a+u)/E,this._z=(c+g)/E}else if(f>x){const E=2*Math.sqrt(1+f-r-x);this._w=(c-g)/E,this._x=(a+u)/E,this._y=.25*E,this._z=(p+_)/E}else{const E=2*Math.sqrt(1+x-r-f);this._w=(u-a)/E,this._x=(c+g)/E,this._y=(p+_)/E,this._z=.25*E}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let r=e.dot(n)+1;return r<Number.EPSILON?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(In(this.dot(e),-1,1)))}rotateTowards(e,n){const r=this.angleTo(e);if(r===0)return this;const a=Math.min(1,n/r);return this.slerp(e,a),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const r=e._x,a=e._y,c=e._z,u=e._w,f=n._x,p=n._y,g=n._z,_=n._w;return this._x=r*_+u*f+a*g-c*p,this._y=a*_+u*p+c*f-r*g,this._z=c*_+u*g+r*p-a*f,this._w=u*_-r*f-a*p-c*g,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const r=this._x,a=this._y,c=this._z,u=this._w;let f=u*e._w+r*e._x+a*e._y+c*e._z;if(f<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,f=-f):this.copy(e),f>=1)return this._w=u,this._x=r,this._y=a,this._z=c,this;const p=1-f*f;if(p<=Number.EPSILON){const E=1-n;return this._w=E*u+n*this._w,this._x=E*r+n*this._x,this._y=E*a+n*this._y,this._z=E*c+n*this._z,this.normalize(),this}const g=Math.sqrt(p),_=Math.atan2(g,f),x=Math.sin((1-n)*_)/g,y=Math.sin(n*_)/g;return this._w=u*x+this._w*y,this._x=r*x+this._x*y,this._y=a*x+this._y*y,this._z=c*x+this._z*y,this._onChangeCallback(),this}slerpQuaternions(e,n,r){return this.copy(e).slerp(n,r)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),r=Math.random(),a=Math.sqrt(1-r),c=Math.sqrt(r);return this.set(a*Math.sin(e),a*Math.cos(e),c*Math.sin(n),c*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class ce{constructor(e=0,n=0,r=0){ce.prototype.isVector3=!0,this.x=e,this.y=n,this.z=r}set(e,n,r){return r===void 0&&(r=this.z),this.x=e,this.y=n,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Tm.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Tm.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,r=this.y,a=this.z,c=e.elements;return this.x=c[0]*n+c[3]*r+c[6]*a,this.y=c[1]*n+c[4]*r+c[7]*a,this.z=c[2]*n+c[5]*r+c[8]*a,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,r=this.y,a=this.z,c=e.elements,u=1/(c[3]*n+c[7]*r+c[11]*a+c[15]);return this.x=(c[0]*n+c[4]*r+c[8]*a+c[12])*u,this.y=(c[1]*n+c[5]*r+c[9]*a+c[13])*u,this.z=(c[2]*n+c[6]*r+c[10]*a+c[14])*u,this}applyQuaternion(e){const n=this.x,r=this.y,a=this.z,c=e.x,u=e.y,f=e.z,p=e.w,g=2*(u*a-f*r),_=2*(f*n-c*a),x=2*(c*r-u*n);return this.x=n+p*g+u*x-f*_,this.y=r+p*_+f*g-c*x,this.z=a+p*x+c*_-u*g,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,r=this.y,a=this.z,c=e.elements;return this.x=c[0]*n+c[4]*r+c[8]*a,this.y=c[1]*n+c[5]*r+c[9]*a,this.z=c[2]*n+c[6]*r+c[10]*a,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(n,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this.z=e.z+(n.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const r=e.x,a=e.y,c=e.z,u=n.x,f=n.y,p=n.z;return this.x=a*p-c*f,this.y=c*u-r*p,this.z=r*f-a*u,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const r=e.dot(this)/n;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return $u.copy(this).projectOnVector(e),this.sub($u)}reflect(e){return this.sub($u.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const r=this.dot(e)/n;return Math.acos(In(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,r=this.y-e.y,a=this.z-e.z;return n*n+r*r+a*a}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,r){const a=Math.sin(n)*e;return this.x=a*Math.sin(r),this.y=Math.cos(n)*e,this.z=a*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,r){return this.x=e*Math.sin(n),this.y=r,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),a=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=r,this.z=a,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,r=Math.sqrt(1-n*n);return this.x=r*Math.cos(e),this.y=n,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const $u=new ce,Tm=new ga;class va{constructor(e=new ce(1/0,1/0,1/0),n=new ce(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,r=e.length;n<r;n+=3)this.expandByPoint(Ci.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,r=e.count;n<r;n++)this.expandByPoint(Ci.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,r=e.length;n<r;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const r=Ci.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const c=r.getAttribute("position");if(n===!0&&c!==void 0&&e.isInstancedMesh!==!0)for(let u=0,f=c.count;u<f;u++)e.isMesh===!0?e.getVertexPosition(u,Ci):Ci.fromBufferAttribute(c,u),Ci.applyMatrix4(e.matrixWorld),this.expandByPoint(Ci);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ml.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),Ml.copy(r.boundingBox)),Ml.applyMatrix4(e.matrixWorld),this.union(Ml)}const a=e.children;for(let c=0,u=a.length;c<u;c++)this.expandByObject(a[c],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Ci),Ci.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,r;return e.normal.x>0?(n=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),n<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(sa),El.subVectors(this.max,sa),Xs.subVectors(e.a,sa),qs.subVectors(e.b,sa),Ys.subVectors(e.c,sa),Ir.subVectors(qs,Xs),Nr.subVectors(Ys,qs),ss.subVectors(Xs,Ys);let n=[0,-Ir.z,Ir.y,0,-Nr.z,Nr.y,0,-ss.z,ss.y,Ir.z,0,-Ir.x,Nr.z,0,-Nr.x,ss.z,0,-ss.x,-Ir.y,Ir.x,0,-Nr.y,Nr.x,0,-ss.y,ss.x,0];return!Ku(n,Xs,qs,Ys,El)||(n=[1,0,0,0,1,0,0,0,1],!Ku(n,Xs,qs,Ys,El))?!1:(wl.crossVectors(Ir,Nr),n=[wl.x,wl.y,wl.z],Ku(n,Xs,qs,Ys,El))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ci).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ci).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(er[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),er[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),er[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),er[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),er[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),er[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),er[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),er[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(er),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const er=[new ce,new ce,new ce,new ce,new ce,new ce,new ce,new ce],Ci=new ce,Ml=new va,Xs=new ce,qs=new ce,Ys=new ce,Ir=new ce,Nr=new ce,ss=new ce,sa=new ce,El=new ce,wl=new ce,os=new ce;function Ku(s,e,n,r,a){for(let c=0,u=s.length-3;c<=u;c+=3){os.fromArray(s,c);const f=a.x*Math.abs(os.x)+a.y*Math.abs(os.y)+a.z*Math.abs(os.z),p=e.dot(os),g=n.dot(os),_=r.dot(os);if(Math.max(-Math.max(p,g,_),Math.min(p,g,_))>f)return!1}return!0}const L_=new va,oa=new ce,Zu=new ce;class Cf{constructor(e=new ce,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const r=this.center;n!==void 0?r.copy(n):L_.setFromPoints(e).getCenter(r);let a=0;for(let c=0,u=e.length;c<u;c++)a=Math.max(a,r.distanceToSquared(e[c]));return this.radius=Math.sqrt(a),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const r=this.center.distanceToSquared(e);return n.copy(e),r>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;oa.subVectors(e,this.center);const n=oa.lengthSq();if(n>this.radius*this.radius){const r=Math.sqrt(n),a=(r-this.radius)*.5;this.center.addScaledVector(oa,a/r),this.radius+=a}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Zu.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(oa.copy(e.center).add(Zu)),this.expandByPoint(oa.copy(e.center).sub(Zu))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const tr=new ce,Qu=new ce,Tl=new ce,Ur=new ce,Ju=new ce,bl=new ce,ed=new ce;class I_{constructor(e=new ce,n=new ce(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,tr)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const r=n.dot(this.direction);return r<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=tr.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(tr.copy(this.origin).addScaledVector(this.direction,n),tr.distanceToSquared(e))}distanceSqToSegment(e,n,r,a){Qu.copy(e).add(n).multiplyScalar(.5),Tl.copy(n).sub(e).normalize(),Ur.copy(this.origin).sub(Qu);const c=e.distanceTo(n)*.5,u=-this.direction.dot(Tl),f=Ur.dot(this.direction),p=-Ur.dot(Tl),g=Ur.lengthSq(),_=Math.abs(1-u*u);let x,y,E,T;if(_>0)if(x=u*p-f,y=u*f-p,T=c*_,x>=0)if(y>=-T)if(y<=T){const P=1/_;x*=P,y*=P,E=x*(x+u*y+2*f)+y*(u*x+y+2*p)+g}else y=c,x=Math.max(0,-(u*y+f)),E=-x*x+y*(y+2*p)+g;else y=-c,x=Math.max(0,-(u*y+f)),E=-x*x+y*(y+2*p)+g;else y<=-T?(x=Math.max(0,-(-u*c+f)),y=x>0?-c:Math.min(Math.max(-c,-p),c),E=-x*x+y*(y+2*p)+g):y<=T?(x=0,y=Math.min(Math.max(-c,-p),c),E=y*(y+2*p)+g):(x=Math.max(0,-(u*c+f)),y=x>0?c:Math.min(Math.max(-c,-p),c),E=-x*x+y*(y+2*p)+g);else y=u>0?-c:c,x=Math.max(0,-(u*y+f)),E=-x*x+y*(y+2*p)+g;return r&&r.copy(this.origin).addScaledVector(this.direction,x),a&&a.copy(Qu).addScaledVector(Tl,y),E}intersectSphere(e,n){tr.subVectors(e.center,this.origin);const r=tr.dot(this.direction),a=tr.dot(tr)-r*r,c=e.radius*e.radius;if(a>c)return null;const u=Math.sqrt(c-a),f=r-u,p=r+u;return p<0?null:f<0?this.at(p,n):this.at(f,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/n;return r>=0?r:null}intersectPlane(e,n){const r=this.distanceToPlane(e);return r===null?null:this.at(r,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let r,a,c,u,f,p;const g=1/this.direction.x,_=1/this.direction.y,x=1/this.direction.z,y=this.origin;return g>=0?(r=(e.min.x-y.x)*g,a=(e.max.x-y.x)*g):(r=(e.max.x-y.x)*g,a=(e.min.x-y.x)*g),_>=0?(c=(e.min.y-y.y)*_,u=(e.max.y-y.y)*_):(c=(e.max.y-y.y)*_,u=(e.min.y-y.y)*_),r>u||c>a||((c>r||isNaN(r))&&(r=c),(u<a||isNaN(a))&&(a=u),x>=0?(f=(e.min.z-y.z)*x,p=(e.max.z-y.z)*x):(f=(e.max.z-y.z)*x,p=(e.min.z-y.z)*x),r>p||f>a)||((f>r||r!==r)&&(r=f),(p<a||a!==a)&&(a=p),a<0)?null:this.at(r>=0?r:a,n)}intersectsBox(e){return this.intersectBox(e,tr)!==null}intersectTriangle(e,n,r,a,c){Ju.subVectors(n,e),bl.subVectors(r,e),ed.crossVectors(Ju,bl);let u=this.direction.dot(ed),f;if(u>0){if(a)return null;f=1}else if(u<0)f=-1,u=-u;else return null;Ur.subVectors(this.origin,e);const p=f*this.direction.dot(bl.crossVectors(Ur,bl));if(p<0)return null;const g=f*this.direction.dot(Ju.cross(Ur));if(g<0||p+g>u)return null;const _=-f*Ur.dot(ed);return _<0?null:this.at(_/u,c)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class rn{constructor(e,n,r,a,c,u,f,p,g,_,x,y,E,T,P,S){rn.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,r,a,c,u,f,p,g,_,x,y,E,T,P,S)}set(e,n,r,a,c,u,f,p,g,_,x,y,E,T,P,S){const v=this.elements;return v[0]=e,v[4]=n,v[8]=r,v[12]=a,v[1]=c,v[5]=u,v[9]=f,v[13]=p,v[2]=g,v[6]=_,v[10]=x,v[14]=y,v[3]=E,v[7]=T,v[11]=P,v[15]=S,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new rn().fromArray(this.elements)}copy(e){const n=this.elements,r=e.elements;return n[0]=r[0],n[1]=r[1],n[2]=r[2],n[3]=r[3],n[4]=r[4],n[5]=r[5],n[6]=r[6],n[7]=r[7],n[8]=r[8],n[9]=r[9],n[10]=r[10],n[11]=r[11],n[12]=r[12],n[13]=r[13],n[14]=r[14],n[15]=r[15],this}copyPosition(e){const n=this.elements,r=e.elements;return n[12]=r[12],n[13]=r[13],n[14]=r[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,r){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(e,n,r){return this.set(e.x,n.x,r.x,0,e.y,n.y,r.y,0,e.z,n.z,r.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,r=e.elements,a=1/$s.setFromMatrixColumn(e,0).length(),c=1/$s.setFromMatrixColumn(e,1).length(),u=1/$s.setFromMatrixColumn(e,2).length();return n[0]=r[0]*a,n[1]=r[1]*a,n[2]=r[2]*a,n[3]=0,n[4]=r[4]*c,n[5]=r[5]*c,n[6]=r[6]*c,n[7]=0,n[8]=r[8]*u,n[9]=r[9]*u,n[10]=r[10]*u,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,r=e.x,a=e.y,c=e.z,u=Math.cos(r),f=Math.sin(r),p=Math.cos(a),g=Math.sin(a),_=Math.cos(c),x=Math.sin(c);if(e.order==="XYZ"){const y=u*_,E=u*x,T=f*_,P=f*x;n[0]=p*_,n[4]=-p*x,n[8]=g,n[1]=E+T*g,n[5]=y-P*g,n[9]=-f*p,n[2]=P-y*g,n[6]=T+E*g,n[10]=u*p}else if(e.order==="YXZ"){const y=p*_,E=p*x,T=g*_,P=g*x;n[0]=y+P*f,n[4]=T*f-E,n[8]=u*g,n[1]=u*x,n[5]=u*_,n[9]=-f,n[2]=E*f-T,n[6]=P+y*f,n[10]=u*p}else if(e.order==="ZXY"){const y=p*_,E=p*x,T=g*_,P=g*x;n[0]=y-P*f,n[4]=-u*x,n[8]=T+E*f,n[1]=E+T*f,n[5]=u*_,n[9]=P-y*f,n[2]=-u*g,n[6]=f,n[10]=u*p}else if(e.order==="ZYX"){const y=u*_,E=u*x,T=f*_,P=f*x;n[0]=p*_,n[4]=T*g-E,n[8]=y*g+P,n[1]=p*x,n[5]=P*g+y,n[9]=E*g-T,n[2]=-g,n[6]=f*p,n[10]=u*p}else if(e.order==="YZX"){const y=u*p,E=u*g,T=f*p,P=f*g;n[0]=p*_,n[4]=P-y*x,n[8]=T*x+E,n[1]=x,n[5]=u*_,n[9]=-f*_,n[2]=-g*_,n[6]=E*x+T,n[10]=y-P*x}else if(e.order==="XZY"){const y=u*p,E=u*g,T=f*p,P=f*g;n[0]=p*_,n[4]=-x,n[8]=g*_,n[1]=y*x+P,n[5]=u*_,n[9]=E*x-T,n[2]=T*x-E,n[6]=f*_,n[10]=P*x+y}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(N_,e,U_)}lookAt(e,n,r){const a=this.elements;return Kn.subVectors(e,n),Kn.lengthSq()===0&&(Kn.z=1),Kn.normalize(),Fr.crossVectors(r,Kn),Fr.lengthSq()===0&&(Math.abs(r.z)===1?Kn.x+=1e-4:Kn.z+=1e-4,Kn.normalize(),Fr.crossVectors(r,Kn)),Fr.normalize(),Cl.crossVectors(Kn,Fr),a[0]=Fr.x,a[4]=Cl.x,a[8]=Kn.x,a[1]=Fr.y,a[5]=Cl.y,a[9]=Kn.y,a[2]=Fr.z,a[6]=Cl.z,a[10]=Kn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const r=e.elements,a=n.elements,c=this.elements,u=r[0],f=r[4],p=r[8],g=r[12],_=r[1],x=r[5],y=r[9],E=r[13],T=r[2],P=r[6],S=r[10],v=r[14],U=r[3],L=r[7],A=r[11],Q=r[15],O=a[0],B=a[4],Z=a[8],I=a[12],D=a[1],G=a[5],ae=a[9],ie=a[13],ve=a[2],ge=a[6],de=a[10],pe=a[14],j=a[3],me=a[7],C=a[11],M=a[15];return c[0]=u*O+f*D+p*ve+g*j,c[4]=u*B+f*G+p*ge+g*me,c[8]=u*Z+f*ae+p*de+g*C,c[12]=u*I+f*ie+p*pe+g*M,c[1]=_*O+x*D+y*ve+E*j,c[5]=_*B+x*G+y*ge+E*me,c[9]=_*Z+x*ae+y*de+E*C,c[13]=_*I+x*ie+y*pe+E*M,c[2]=T*O+P*D+S*ve+v*j,c[6]=T*B+P*G+S*ge+v*me,c[10]=T*Z+P*ae+S*de+v*C,c[14]=T*I+P*ie+S*pe+v*M,c[3]=U*O+L*D+A*ve+Q*j,c[7]=U*B+L*G+A*ge+Q*me,c[11]=U*Z+L*ae+A*de+Q*C,c[15]=U*I+L*ie+A*pe+Q*M,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],r=e[4],a=e[8],c=e[12],u=e[1],f=e[5],p=e[9],g=e[13],_=e[2],x=e[6],y=e[10],E=e[14],T=e[3],P=e[7],S=e[11],v=e[15];return T*(+c*p*x-a*g*x-c*f*y+r*g*y+a*f*E-r*p*E)+P*(+n*p*E-n*g*y+c*u*y-a*u*E+a*g*_-c*p*_)+S*(+n*g*x-n*f*E-c*u*x+r*u*E+c*f*_-r*g*_)+v*(-a*f*_-n*p*x+n*f*y+a*u*x-r*u*y+r*p*_)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,r){const a=this.elements;return e.isVector3?(a[12]=e.x,a[13]=e.y,a[14]=e.z):(a[12]=e,a[13]=n,a[14]=r),this}invert(){const e=this.elements,n=e[0],r=e[1],a=e[2],c=e[3],u=e[4],f=e[5],p=e[6],g=e[7],_=e[8],x=e[9],y=e[10],E=e[11],T=e[12],P=e[13],S=e[14],v=e[15],U=x*S*g-P*y*g+P*p*E-f*S*E-x*p*v+f*y*v,L=T*y*g-_*S*g-T*p*E+u*S*E+_*p*v-u*y*v,A=_*P*g-T*x*g+T*f*E-u*P*E-_*f*v+u*x*v,Q=T*x*p-_*P*p-T*f*y+u*P*y+_*f*S-u*x*S,O=n*U+r*L+a*A+c*Q;if(O===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const B=1/O;return e[0]=U*B,e[1]=(P*y*c-x*S*c-P*a*E+r*S*E+x*a*v-r*y*v)*B,e[2]=(f*S*c-P*p*c+P*a*g-r*S*g-f*a*v+r*p*v)*B,e[3]=(x*p*c-f*y*c-x*a*g+r*y*g+f*a*E-r*p*E)*B,e[4]=L*B,e[5]=(_*S*c-T*y*c+T*a*E-n*S*E-_*a*v+n*y*v)*B,e[6]=(T*p*c-u*S*c-T*a*g+n*S*g+u*a*v-n*p*v)*B,e[7]=(u*y*c-_*p*c+_*a*g-n*y*g-u*a*E+n*p*E)*B,e[8]=A*B,e[9]=(T*x*c-_*P*c-T*r*E+n*P*E+_*r*v-n*x*v)*B,e[10]=(u*P*c-T*f*c+T*r*g-n*P*g-u*r*v+n*f*v)*B,e[11]=(_*f*c-u*x*c-_*r*g+n*x*g+u*r*E-n*f*E)*B,e[12]=Q*B,e[13]=(_*P*a-T*x*a+T*r*y-n*P*y-_*r*S+n*x*S)*B,e[14]=(T*f*a-u*P*a-T*r*p+n*P*p+u*r*S-n*f*S)*B,e[15]=(u*x*a-_*f*a+_*r*p-n*x*p-u*r*y+n*f*y)*B,this}scale(e){const n=this.elements,r=e.x,a=e.y,c=e.z;return n[0]*=r,n[4]*=a,n[8]*=c,n[1]*=r,n[5]*=a,n[9]*=c,n[2]*=r,n[6]*=a,n[10]*=c,n[3]*=r,n[7]*=a,n[11]*=c,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],a=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,r,a))}makeTranslation(e,n,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,r,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,n,-r,0,0,r,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,0,r,0,0,1,0,0,-r,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,-r,0,0,r,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const r=Math.cos(n),a=Math.sin(n),c=1-r,u=e.x,f=e.y,p=e.z,g=c*u,_=c*f;return this.set(g*u+r,g*f-a*p,g*p+a*f,0,g*f+a*p,_*f+r,_*p-a*u,0,g*p-a*f,_*p+a*u,c*p*p+r,0,0,0,0,1),this}makeScale(e,n,r){return this.set(e,0,0,0,0,n,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,n,r,a,c,u){return this.set(1,r,c,0,e,1,u,0,n,a,1,0,0,0,0,1),this}compose(e,n,r){const a=this.elements,c=n._x,u=n._y,f=n._z,p=n._w,g=c+c,_=u+u,x=f+f,y=c*g,E=c*_,T=c*x,P=u*_,S=u*x,v=f*x,U=p*g,L=p*_,A=p*x,Q=r.x,O=r.y,B=r.z;return a[0]=(1-(P+v))*Q,a[1]=(E+A)*Q,a[2]=(T-L)*Q,a[3]=0,a[4]=(E-A)*O,a[5]=(1-(y+v))*O,a[6]=(S+U)*O,a[7]=0,a[8]=(T+L)*B,a[9]=(S-U)*B,a[10]=(1-(y+P))*B,a[11]=0,a[12]=e.x,a[13]=e.y,a[14]=e.z,a[15]=1,this}decompose(e,n,r){const a=this.elements;let c=$s.set(a[0],a[1],a[2]).length();const u=$s.set(a[4],a[5],a[6]).length(),f=$s.set(a[8],a[9],a[10]).length();this.determinant()<0&&(c=-c),e.x=a[12],e.y=a[13],e.z=a[14],Ai.copy(this);const g=1/c,_=1/u,x=1/f;return Ai.elements[0]*=g,Ai.elements[1]*=g,Ai.elements[2]*=g,Ai.elements[4]*=_,Ai.elements[5]*=_,Ai.elements[6]*=_,Ai.elements[8]*=x,Ai.elements[9]*=x,Ai.elements[10]*=x,n.setFromRotationMatrix(Ai),r.x=c,r.y=u,r.z=f,this}makePerspective(e,n,r,a,c,u,f=ur){const p=this.elements,g=2*c/(n-e),_=2*c/(r-a),x=(n+e)/(n-e),y=(r+a)/(r-a);let E,T;if(f===ur)E=-(u+c)/(u-c),T=-2*u*c/(u-c);else if(f===ec)E=-u/(u-c),T=-u*c/(u-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+f);return p[0]=g,p[4]=0,p[8]=x,p[12]=0,p[1]=0,p[5]=_,p[9]=y,p[13]=0,p[2]=0,p[6]=0,p[10]=E,p[14]=T,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(e,n,r,a,c,u,f=ur){const p=this.elements,g=1/(n-e),_=1/(r-a),x=1/(u-c),y=(n+e)*g,E=(r+a)*_;let T,P;if(f===ur)T=(u+c)*x,P=-2*x;else if(f===ec)T=c*x,P=-1*x;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+f);return p[0]=2*g,p[4]=0,p[8]=0,p[12]=-y,p[1]=0,p[5]=2*_,p[9]=0,p[13]=-E,p[2]=0,p[6]=0,p[10]=P,p[14]=-T,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(e){const n=this.elements,r=e.elements;for(let a=0;a<16;a++)if(n[a]!==r[a])return!1;return!0}fromArray(e,n=0){for(let r=0;r<16;r++)this.elements[r]=e[r+n];return this}toArray(e=[],n=0){const r=this.elements;return e[n]=r[0],e[n+1]=r[1],e[n+2]=r[2],e[n+3]=r[3],e[n+4]=r[4],e[n+5]=r[5],e[n+6]=r[6],e[n+7]=r[7],e[n+8]=r[8],e[n+9]=r[9],e[n+10]=r[10],e[n+11]=r[11],e[n+12]=r[12],e[n+13]=r[13],e[n+14]=r[14],e[n+15]=r[15],e}}const $s=new ce,Ai=new rn,N_=new ce(0,0,0),U_=new ce(1,1,1),Fr=new ce,Cl=new ce,Kn=new ce,bm=new rn,Cm=new ga;class fr{constructor(e=0,n=0,r=0,a=fr.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=r,this._order=a}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,r,a=this._order){return this._x=e,this._y=n,this._z=r,this._order=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,r=!0){const a=e.elements,c=a[0],u=a[4],f=a[8],p=a[1],g=a[5],_=a[9],x=a[2],y=a[6],E=a[10];switch(n){case"XYZ":this._y=Math.asin(In(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(-_,E),this._z=Math.atan2(-u,c)):(this._x=Math.atan2(y,g),this._z=0);break;case"YXZ":this._x=Math.asin(-In(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(f,E),this._z=Math.atan2(p,g)):(this._y=Math.atan2(-x,c),this._z=0);break;case"ZXY":this._x=Math.asin(In(y,-1,1)),Math.abs(y)<.9999999?(this._y=Math.atan2(-x,E),this._z=Math.atan2(-u,g)):(this._y=0,this._z=Math.atan2(p,c));break;case"ZYX":this._y=Math.asin(-In(x,-1,1)),Math.abs(x)<.9999999?(this._x=Math.atan2(y,E),this._z=Math.atan2(p,c)):(this._x=0,this._z=Math.atan2(-u,g));break;case"YZX":this._z=Math.asin(In(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-_,g),this._y=Math.atan2(-x,c)):(this._x=0,this._y=Math.atan2(f,E));break;case"XZY":this._z=Math.asin(-In(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(y,g),this._y=Math.atan2(f,c)):(this._x=Math.atan2(-_,E),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,r){return bm.makeRotationFromQuaternion(e),this.setFromRotationMatrix(bm,n,r)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return Cm.setFromEuler(this),this.setFromQuaternion(Cm,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}fr.DEFAULT_ORDER="XYZ";let Lg=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},F_=0;const Am=new ce,Ks=new ga,nr=new rn,Al=new ce,aa=new ce,z_=new ce,k_=new ga,Rm=new ce(1,0,0),Pm=new ce(0,1,0),Dm=new ce(0,0,1),Lm={type:"added"},O_={type:"removed"},Zs={type:"childadded",child:null},td={type:"childremoved",child:null};class ei extends Mo{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:F_++}),this.uuid=Gr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ei.DEFAULT_UP.clone();const e=new ce,n=new fr,r=new ga,a=new ce(1,1,1);function c(){r.setFromEuler(n,!1)}function u(){n.setFromQuaternion(r,void 0,!1)}n._onChange(c),r._onChange(u),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:a},modelViewMatrix:{value:new rn},normalMatrix:{value:new vt}}),this.matrix=new rn,this.matrixWorld=new rn,this.matrixAutoUpdate=ei.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ei.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Lg,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Ks.setFromAxisAngle(e,n),this.quaternion.multiply(Ks),this}rotateOnWorldAxis(e,n){return Ks.setFromAxisAngle(e,n),this.quaternion.premultiply(Ks),this}rotateX(e){return this.rotateOnAxis(Rm,e)}rotateY(e){return this.rotateOnAxis(Pm,e)}rotateZ(e){return this.rotateOnAxis(Dm,e)}translateOnAxis(e,n){return Am.copy(e).applyQuaternion(this.quaternion),this.position.add(Am.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Rm,e)}translateY(e){return this.translateOnAxis(Pm,e)}translateZ(e){return this.translateOnAxis(Dm,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(nr.copy(this.matrixWorld).invert())}lookAt(e,n,r){e.isVector3?Al.copy(e):Al.set(e,n,r);const a=this.parent;this.updateWorldMatrix(!0,!1),aa.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?nr.lookAt(aa,Al,this.up):nr.lookAt(Al,aa,this.up),this.quaternion.setFromRotationMatrix(nr),a&&(nr.extractRotation(a.matrixWorld),Ks.setFromRotationMatrix(nr),this.quaternion.premultiply(Ks.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Lm),Zs.child=e,this.dispatchEvent(Zs),Zs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(O_),td.child=e,this.dispatchEvent(td),td.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),nr.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),nr.multiply(e.parent.matrixWorld)),e.applyMatrix4(nr),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Lm),Zs.child=e,this.dispatchEvent(Zs),Zs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let r=0,a=this.children.length;r<a;r++){const u=this.children[r].getObjectByProperty(e,n);if(u!==void 0)return u}}getObjectsByProperty(e,n,r=[]){this[e]===n&&r.push(this);const a=this.children;for(let c=0,u=a.length;c<u;c++)a[c].getObjectsByProperty(e,n,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(aa,e,z_),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(aa,k_,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let r=0,a=n.length;r<a;r++)n[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let r=0,a=n.length;r<a;r++)n[r].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let r=0,a=n.length;r<a;r++)n[r].updateMatrixWorld(e)}updateWorldMatrix(e,n){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const a=this.children;for(let c=0,u=a.length;c<u;c++)a[c].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",r={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const a={};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.castShadow===!0&&(a.castShadow=!0),this.receiveShadow===!0&&(a.receiveShadow=!0),this.visible===!1&&(a.visible=!1),this.frustumCulled===!1&&(a.frustumCulled=!1),this.renderOrder!==0&&(a.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(a.userData=this.userData),a.layers=this.layers.mask,a.matrix=this.matrix.toArray(),a.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(a.matrixAutoUpdate=!1),this.isInstancedMesh&&(a.type="InstancedMesh",a.count=this.count,a.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(a.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(a.type="BatchedMesh",a.perObjectFrustumCulled=this.perObjectFrustumCulled,a.sortObjects=this.sortObjects,a.drawRanges=this._drawRanges,a.reservedRanges=this._reservedRanges,a.visibility=this._visibility,a.active=this._active,a.bounds=this._bounds.map(f=>({boxInitialized:f.boxInitialized,boxMin:f.box.min.toArray(),boxMax:f.box.max.toArray(),sphereInitialized:f.sphereInitialized,sphereRadius:f.sphere.radius,sphereCenter:f.sphere.center.toArray()})),a.maxInstanceCount=this._maxInstanceCount,a.maxVertexCount=this._maxVertexCount,a.maxIndexCount=this._maxIndexCount,a.geometryInitialized=this._geometryInitialized,a.geometryCount=this._geometryCount,a.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(a.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(a.boundingSphere={center:a.boundingSphere.center.toArray(),radius:a.boundingSphere.radius}),this.boundingBox!==null&&(a.boundingBox={min:a.boundingBox.min.toArray(),max:a.boundingBox.max.toArray()}));function c(f,p){return f[p.uuid]===void 0&&(f[p.uuid]=p.toJSON(e)),p.uuid}if(this.isScene)this.background&&(this.background.isColor?a.background=this.background.toJSON():this.background.isTexture&&(a.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(a.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){a.geometry=c(e.geometries,this.geometry);const f=this.geometry.parameters;if(f!==void 0&&f.shapes!==void 0){const p=f.shapes;if(Array.isArray(p))for(let g=0,_=p.length;g<_;g++){const x=p[g];c(e.shapes,x)}else c(e.shapes,p)}}if(this.isSkinnedMesh&&(a.bindMode=this.bindMode,a.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(e.skeletons,this.skeleton),a.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const f=[];for(let p=0,g=this.material.length;p<g;p++)f.push(c(e.materials,this.material[p]));a.material=f}else a.material=c(e.materials,this.material);if(this.children.length>0){a.children=[];for(let f=0;f<this.children.length;f++)a.children.push(this.children[f].toJSON(e).object)}if(this.animations.length>0){a.animations=[];for(let f=0;f<this.animations.length;f++){const p=this.animations[f];a.animations.push(c(e.animations,p))}}if(n){const f=u(e.geometries),p=u(e.materials),g=u(e.textures),_=u(e.images),x=u(e.shapes),y=u(e.skeletons),E=u(e.animations),T=u(e.nodes);f.length>0&&(r.geometries=f),p.length>0&&(r.materials=p),g.length>0&&(r.textures=g),_.length>0&&(r.images=_),x.length>0&&(r.shapes=x),y.length>0&&(r.skeletons=y),E.length>0&&(r.animations=E),T.length>0&&(r.nodes=T)}return r.object=a,r;function u(f){const p=[];for(const g in f){const _=f[g];delete _.metadata,p.push(_)}return p}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let r=0;r<e.children.length;r++){const a=e.children[r];this.add(a.clone())}return this}}ei.DEFAULT_UP=new ce(0,1,0);ei.DEFAULT_MATRIX_AUTO_UPDATE=!0;ei.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ri=new ce,ir=new ce,nd=new ce,rr=new ce,Qs=new ce,Js=new ce,Im=new ce,id=new ce,rd=new ce,sd=new ce,od=new en,ad=new en,ld=new en;class Di{constructor(e=new ce,n=new ce,r=new ce){this.a=e,this.b=n,this.c=r}static getNormal(e,n,r,a){a.subVectors(r,n),Ri.subVectors(e,n),a.cross(Ri);const c=a.lengthSq();return c>0?a.multiplyScalar(1/Math.sqrt(c)):a.set(0,0,0)}static getBarycoord(e,n,r,a,c){Ri.subVectors(a,n),ir.subVectors(r,n),nd.subVectors(e,n);const u=Ri.dot(Ri),f=Ri.dot(ir),p=Ri.dot(nd),g=ir.dot(ir),_=ir.dot(nd),x=u*g-f*f;if(x===0)return c.set(0,0,0),null;const y=1/x,E=(g*p-f*_)*y,T=(u*_-f*p)*y;return c.set(1-E-T,T,E)}static containsPoint(e,n,r,a){return this.getBarycoord(e,n,r,a,rr)===null?!1:rr.x>=0&&rr.y>=0&&rr.x+rr.y<=1}static getInterpolation(e,n,r,a,c,u,f,p){return this.getBarycoord(e,n,r,a,rr)===null?(p.x=0,p.y=0,"z"in p&&(p.z=0),"w"in p&&(p.w=0),null):(p.setScalar(0),p.addScaledVector(c,rr.x),p.addScaledVector(u,rr.y),p.addScaledVector(f,rr.z),p)}static getInterpolatedAttribute(e,n,r,a,c,u){return od.setScalar(0),ad.setScalar(0),ld.setScalar(0),od.fromBufferAttribute(e,n),ad.fromBufferAttribute(e,r),ld.fromBufferAttribute(e,a),u.setScalar(0),u.addScaledVector(od,c.x),u.addScaledVector(ad,c.y),u.addScaledVector(ld,c.z),u}static isFrontFacing(e,n,r,a){return Ri.subVectors(r,n),ir.subVectors(e,n),Ri.cross(ir).dot(a)<0}set(e,n,r){return this.a.copy(e),this.b.copy(n),this.c.copy(r),this}setFromPointsAndIndices(e,n,r,a){return this.a.copy(e[n]),this.b.copy(e[r]),this.c.copy(e[a]),this}setFromAttributeAndIndices(e,n,r,a){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,a),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ri.subVectors(this.c,this.b),ir.subVectors(this.a,this.b),Ri.cross(ir).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Di.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return Di.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,r,a,c){return Di.getInterpolation(e,this.a,this.b,this.c,n,r,a,c)}containsPoint(e){return Di.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Di.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const r=this.a,a=this.b,c=this.c;let u,f;Qs.subVectors(a,r),Js.subVectors(c,r),id.subVectors(e,r);const p=Qs.dot(id),g=Js.dot(id);if(p<=0&&g<=0)return n.copy(r);rd.subVectors(e,a);const _=Qs.dot(rd),x=Js.dot(rd);if(_>=0&&x<=_)return n.copy(a);const y=p*x-_*g;if(y<=0&&p>=0&&_<=0)return u=p/(p-_),n.copy(r).addScaledVector(Qs,u);sd.subVectors(e,c);const E=Qs.dot(sd),T=Js.dot(sd);if(T>=0&&E<=T)return n.copy(c);const P=E*g-p*T;if(P<=0&&g>=0&&T<=0)return f=g/(g-T),n.copy(r).addScaledVector(Js,f);const S=_*T-E*x;if(S<=0&&x-_>=0&&E-T>=0)return Im.subVectors(c,a),f=(x-_)/(x-_+(E-T)),n.copy(a).addScaledVector(Im,f);const v=1/(S+P+y);return u=P*v,f=y*v,n.copy(r).addScaledVector(Qs,u).addScaledVector(Js,f)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Ig={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},zr={h:0,s:0,l:0},Rl={h:0,s:0,l:0};function cd(s,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?s+(e-s)*6*n:n<1/2?e:n<2/3?s+(e-s)*6*(2/3-n):s}class Ot{constructor(e,n,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,r)}set(e,n,r){if(n===void 0&&r===void 0){const a=e;a&&a.isColor?this.copy(a):typeof a=="number"?this.setHex(a):typeof a=="string"&&this.setStyle(a)}else this.setRGB(e,n,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=di){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ct.toWorkingColorSpace(this,n),this}setRGB(e,n,r,a=Ct.workingColorSpace){return this.r=e,this.g=n,this.b=r,Ct.toWorkingColorSpace(this,a),this}setHSL(e,n,r,a=Ct.workingColorSpace){if(e=M_(e,1),n=In(n,0,1),r=In(r,0,1),n===0)this.r=this.g=this.b=r;else{const c=r<=.5?r*(1+n):r+n-r*n,u=2*r-c;this.r=cd(u,c,e+1/3),this.g=cd(u,c,e),this.b=cd(u,c,e-1/3)}return Ct.toWorkingColorSpace(this,a),this}setStyle(e,n=di){function r(c){c!==void 0&&parseFloat(c)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let a;if(a=/^(\w+)\(([^\)]*)\)/.exec(e)){let c;const u=a[1],f=a[2];switch(u){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return r(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,n);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return r(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,n);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return r(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(a=/^\#([A-Fa-f\d]+)$/.exec(e)){const c=a[1],u=c.length;if(u===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,n);if(u===6)return this.setHex(parseInt(c,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=di){const r=Ig[e.toLowerCase()];return r!==void 0?this.setHex(r,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=dr(e.r),this.g=dr(e.g),this.b=dr(e.b),this}copyLinearToSRGB(e){return this.r=fo(e.r),this.g=fo(e.g),this.b=fo(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=di){return Ct.fromWorkingColorSpace(bn.copy(this),e),Math.round(In(bn.r*255,0,255))*65536+Math.round(In(bn.g*255,0,255))*256+Math.round(In(bn.b*255,0,255))}getHexString(e=di){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=Ct.workingColorSpace){Ct.fromWorkingColorSpace(bn.copy(this),n);const r=bn.r,a=bn.g,c=bn.b,u=Math.max(r,a,c),f=Math.min(r,a,c);let p,g;const _=(f+u)/2;if(f===u)p=0,g=0;else{const x=u-f;switch(g=_<=.5?x/(u+f):x/(2-u-f),u){case r:p=(a-c)/x+(a<c?6:0);break;case a:p=(c-r)/x+2;break;case c:p=(r-a)/x+4;break}p/=6}return e.h=p,e.s=g,e.l=_,e}getRGB(e,n=Ct.workingColorSpace){return Ct.fromWorkingColorSpace(bn.copy(this),n),e.r=bn.r,e.g=bn.g,e.b=bn.b,e}getStyle(e=di){Ct.fromWorkingColorSpace(bn.copy(this),e);const n=bn.r,r=bn.g,a=bn.b;return e!==di?`color(${e} ${n.toFixed(3)} ${r.toFixed(3)} ${a.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(r*255)},${Math.round(a*255)})`}offsetHSL(e,n,r){return this.getHSL(zr),this.setHSL(zr.h+e,zr.s+n,zr.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,r){return this.r=e.r+(n.r-e.r)*r,this.g=e.g+(n.g-e.g)*r,this.b=e.b+(n.b-e.b)*r,this}lerpHSL(e,n){this.getHSL(zr),e.getHSL(Rl);const r=Xu(zr.h,Rl.h,n),a=Xu(zr.s,Rl.s,n),c=Xu(zr.l,Rl.l,n);return this.setHSL(r,a,c),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,r=this.g,a=this.b,c=e.elements;return this.r=c[0]*n+c[3]*r+c[6]*a,this.g=c[1]*n+c[4]*r+c[7]*a,this.b=c[2]*n+c[5]*r+c[8]*a,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const bn=new Ot;Ot.NAMES=Ig;let B_=0;class rc extends Mo{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:B_++}),this.uuid=Gr(),this.name="",this.blending=co,this.side=Xr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=wd,this.blendDst=Td,this.blendEquation=ms,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ot(0,0,0),this.blendAlpha=0,this.depthFunc=ho,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=vm,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Gs,this.stencilZFail=Gs,this.stencilZPass=Gs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const r=e[n];if(r===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const a=this[n];if(a===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}a&&a.isColor?a.set(r):a&&a.isVector3&&r&&r.isVector3?a.copy(r):this[n]=r}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const r={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==co&&(r.blending=this.blending),this.side!==Xr&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==wd&&(r.blendSrc=this.blendSrc),this.blendDst!==Td&&(r.blendDst=this.blendDst),this.blendEquation!==ms&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==ho&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==vm&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Gs&&(r.stencilFail=this.stencilFail),this.stencilZFail!==Gs&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==Gs&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function a(c){const u=[];for(const f in c){const p=c[f];delete p.metadata,u.push(p)}return u}if(n){const c=a(e.textures),u=a(e.images);c.length>0&&(r.textures=c),u.length>0&&(r.images=u)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let r=null;if(n!==null){const a=n.length;r=new Array(a);for(let c=0;c!==a;++c)r[c]=n[c].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Ng extends rc{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new Ot(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new fr,this.combine=vg,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const lr=H_();function H_(){const s=new ArrayBuffer(4),e=new Float32Array(s),n=new Uint32Array(s),r=new Uint32Array(512),a=new Uint32Array(512);for(let p=0;p<256;++p){const g=p-127;g<-27?(r[p]=0,r[p|256]=32768,a[p]=24,a[p|256]=24):g<-14?(r[p]=1024>>-g-14,r[p|256]=1024>>-g-14|32768,a[p]=-g-1,a[p|256]=-g-1):g<=15?(r[p]=g+15<<10,r[p|256]=g+15<<10|32768,a[p]=13,a[p|256]=13):g<128?(r[p]=31744,r[p|256]=64512,a[p]=24,a[p|256]=24):(r[p]=31744,r[p|256]=64512,a[p]=13,a[p|256]=13)}const c=new Uint32Array(2048),u=new Uint32Array(64),f=new Uint32Array(64);for(let p=1;p<1024;++p){let g=p<<13,_=0;for(;(g&8388608)===0;)g<<=1,_-=8388608;g&=-8388609,_+=947912704,c[p]=g|_}for(let p=1024;p<2048;++p)c[p]=939524096+(p-1024<<13);for(let p=1;p<31;++p)u[p]=p<<23;u[31]=1199570944,u[32]=2147483648;for(let p=33;p<63;++p)u[p]=2147483648+(p-32<<23);u[63]=3347054592;for(let p=1;p<64;++p)p!==32&&(f[p]=1024);return{floatView:e,uint32View:n,baseTable:r,shiftTable:a,mantissaTable:c,exponentTable:u,offsetTable:f}}function V_(s){Math.abs(s)>65504&&console.warn("THREE.DataUtils.toHalfFloat(): Value out of range."),s=In(s,-65504,65504),lr.floatView[0]=s;const e=lr.uint32View[0],n=e>>23&511;return lr.baseTable[n]+((e&8388607)>>lr.shiftTable[n])}function j_(s){const e=s>>10;return lr.uint32View[0]=lr.mantissaTable[lr.offsetTable[e]+(s&1023)]+lr.exponentTable[e],lr.floatView[0]}const G_={toHalfFloat:V_,fromHalfFloat:j_},nn=new ce,Pl=new Lt;class Ni{constructor(e,n,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=r,this.usage=uf,this.updateRanges=[],this.gpuType=cr,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,r){e*=this.itemSize,r*=n.itemSize;for(let a=0,c=this.itemSize;a<c;a++)this.array[e+a]=n.array[r+a];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,r=this.count;n<r;n++)Pl.fromBufferAttribute(this,n),Pl.applyMatrix3(e),this.setXY(n,Pl.x,Pl.y);else if(this.itemSize===3)for(let n=0,r=this.count;n<r;n++)nn.fromBufferAttribute(this,n),nn.applyMatrix3(e),this.setXYZ(n,nn.x,nn.y,nn.z);return this}applyMatrix4(e){for(let n=0,r=this.count;n<r;n++)nn.fromBufferAttribute(this,n),nn.applyMatrix4(e),this.setXYZ(n,nn.x,nn.y,nn.z);return this}applyNormalMatrix(e){for(let n=0,r=this.count;n<r;n++)nn.fromBufferAttribute(this,n),nn.applyNormalMatrix(e),this.setXYZ(n,nn.x,nn.y,nn.z);return this}transformDirection(e){for(let n=0,r=this.count;n<r;n++)nn.fromBufferAttribute(this,n),nn.transformDirection(e),this.setXYZ(n,nn.x,nn.y,nn.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let r=this.array[e*this.itemSize+n];return this.normalized&&(r=ji(r,this.array)),r}setComponent(e,n,r){return this.normalized&&(r=kt(r,this.array)),this.array[e*this.itemSize+n]=r,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=ji(n,this.array)),n}setX(e,n){return this.normalized&&(n=kt(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=ji(n,this.array)),n}setY(e,n){return this.normalized&&(n=kt(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=ji(n,this.array)),n}setZ(e,n){return this.normalized&&(n=kt(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=ji(n,this.array)),n}setW(e,n){return this.normalized&&(n=kt(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,r){return e*=this.itemSize,this.normalized&&(n=kt(n,this.array),r=kt(r,this.array)),this.array[e+0]=n,this.array[e+1]=r,this}setXYZ(e,n,r,a){return e*=this.itemSize,this.normalized&&(n=kt(n,this.array),r=kt(r,this.array),a=kt(a,this.array)),this.array[e+0]=n,this.array[e+1]=r,this.array[e+2]=a,this}setXYZW(e,n,r,a,c){return e*=this.itemSize,this.normalized&&(n=kt(n,this.array),r=kt(r,this.array),a=kt(a,this.array),c=kt(c,this.array)),this.array[e+0]=n,this.array[e+1]=r,this.array[e+2]=a,this.array[e+3]=c,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==uf&&(e.usage=this.usage),e}}class Ug extends Ni{constructor(e,n,r){super(new Uint16Array(e),n,r)}}class Fg extends Ni{constructor(e,n,r){super(new Uint32Array(e),n,r)}}class Wr extends Ni{constructor(e,n,r){super(new Float32Array(e),n,r)}}let W_=0;const ci=new rn,ud=new ei,eo=new ce,Zn=new va,la=new va,hn=new ce;class hr extends Mo{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:W_++}),this.uuid=Gr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Rg(e)?Fg:Ug)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,r=0){this.groups.push({start:e,count:n,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const c=new vt().getNormalMatrix(e);r.applyNormalMatrix(c),r.needsUpdate=!0}const a=this.attributes.tangent;return a!==void 0&&(a.transformDirection(e),a.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return ci.makeRotationFromQuaternion(e),this.applyMatrix4(ci),this}rotateX(e){return ci.makeRotationX(e),this.applyMatrix4(ci),this}rotateY(e){return ci.makeRotationY(e),this.applyMatrix4(ci),this}rotateZ(e){return ci.makeRotationZ(e),this.applyMatrix4(ci),this}translate(e,n,r){return ci.makeTranslation(e,n,r),this.applyMatrix4(ci),this}scale(e,n,r){return ci.makeScale(e,n,r),this.applyMatrix4(ci),this}lookAt(e){return ud.lookAt(e),ud.updateMatrix(),this.applyMatrix4(ud.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(eo).negate(),this.translate(eo.x,eo.y,eo.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const r=[];for(let a=0,c=e.length;a<c;a++){const u=e[a];r.push(u.x,u.y,u.z||0)}this.setAttribute("position",new Wr(r,3))}else{for(let r=0,a=n.count;r<a;r++){const c=e[r];n.setXYZ(r,c.x,c.y,c.z||0)}e.length>n.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new va);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new ce(-1/0,-1/0,-1/0),new ce(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let r=0,a=n.length;r<a;r++){const c=n[r];Zn.setFromBufferAttribute(c),this.morphTargetsRelative?(hn.addVectors(this.boundingBox.min,Zn.min),this.boundingBox.expandByPoint(hn),hn.addVectors(this.boundingBox.max,Zn.max),this.boundingBox.expandByPoint(hn)):(this.boundingBox.expandByPoint(Zn.min),this.boundingBox.expandByPoint(Zn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Cf);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new ce,1/0);return}if(e){const r=this.boundingSphere.center;if(Zn.setFromBufferAttribute(e),n)for(let c=0,u=n.length;c<u;c++){const f=n[c];la.setFromBufferAttribute(f),this.morphTargetsRelative?(hn.addVectors(Zn.min,la.min),Zn.expandByPoint(hn),hn.addVectors(Zn.max,la.max),Zn.expandByPoint(hn)):(Zn.expandByPoint(la.min),Zn.expandByPoint(la.max))}Zn.getCenter(r);let a=0;for(let c=0,u=e.count;c<u;c++)hn.fromBufferAttribute(e,c),a=Math.max(a,r.distanceToSquared(hn));if(n)for(let c=0,u=n.length;c<u;c++){const f=n[c],p=this.morphTargetsRelative;for(let g=0,_=f.count;g<_;g++)hn.fromBufferAttribute(f,g),p&&(eo.fromBufferAttribute(e,g),hn.add(eo)),a=Math.max(a,r.distanceToSquared(hn))}this.boundingSphere.radius=Math.sqrt(a),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=n.position,a=n.normal,c=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ni(new Float32Array(4*r.count),4));const u=this.getAttribute("tangent"),f=[],p=[];for(let Z=0;Z<r.count;Z++)f[Z]=new ce,p[Z]=new ce;const g=new ce,_=new ce,x=new ce,y=new Lt,E=new Lt,T=new Lt,P=new ce,S=new ce;function v(Z,I,D){g.fromBufferAttribute(r,Z),_.fromBufferAttribute(r,I),x.fromBufferAttribute(r,D),y.fromBufferAttribute(c,Z),E.fromBufferAttribute(c,I),T.fromBufferAttribute(c,D),_.sub(g),x.sub(g),E.sub(y),T.sub(y);const G=1/(E.x*T.y-T.x*E.y);isFinite(G)&&(P.copy(_).multiplyScalar(T.y).addScaledVector(x,-E.y).multiplyScalar(G),S.copy(x).multiplyScalar(E.x).addScaledVector(_,-T.x).multiplyScalar(G),f[Z].add(P),f[I].add(P),f[D].add(P),p[Z].add(S),p[I].add(S),p[D].add(S))}let U=this.groups;U.length===0&&(U=[{start:0,count:e.count}]);for(let Z=0,I=U.length;Z<I;++Z){const D=U[Z],G=D.start,ae=D.count;for(let ie=G,ve=G+ae;ie<ve;ie+=3)v(e.getX(ie+0),e.getX(ie+1),e.getX(ie+2))}const L=new ce,A=new ce,Q=new ce,O=new ce;function B(Z){Q.fromBufferAttribute(a,Z),O.copy(Q);const I=f[Z];L.copy(I),L.sub(Q.multiplyScalar(Q.dot(I))).normalize(),A.crossVectors(O,I);const G=A.dot(p[Z])<0?-1:1;u.setXYZW(Z,L.x,L.y,L.z,G)}for(let Z=0,I=U.length;Z<I;++Z){const D=U[Z],G=D.start,ae=D.count;for(let ie=G,ve=G+ae;ie<ve;ie+=3)B(e.getX(ie+0)),B(e.getX(ie+1)),B(e.getX(ie+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new Ni(new Float32Array(n.count*3),3),this.setAttribute("normal",r);else for(let y=0,E=r.count;y<E;y++)r.setXYZ(y,0,0,0);const a=new ce,c=new ce,u=new ce,f=new ce,p=new ce,g=new ce,_=new ce,x=new ce;if(e)for(let y=0,E=e.count;y<E;y+=3){const T=e.getX(y+0),P=e.getX(y+1),S=e.getX(y+2);a.fromBufferAttribute(n,T),c.fromBufferAttribute(n,P),u.fromBufferAttribute(n,S),_.subVectors(u,c),x.subVectors(a,c),_.cross(x),f.fromBufferAttribute(r,T),p.fromBufferAttribute(r,P),g.fromBufferAttribute(r,S),f.add(_),p.add(_),g.add(_),r.setXYZ(T,f.x,f.y,f.z),r.setXYZ(P,p.x,p.y,p.z),r.setXYZ(S,g.x,g.y,g.z)}else for(let y=0,E=n.count;y<E;y+=3)a.fromBufferAttribute(n,y+0),c.fromBufferAttribute(n,y+1),u.fromBufferAttribute(n,y+2),_.subVectors(u,c),x.subVectors(a,c),_.cross(x),r.setXYZ(y+0,_.x,_.y,_.z),r.setXYZ(y+1,_.x,_.y,_.z),r.setXYZ(y+2,_.x,_.y,_.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,r=e.count;n<r;n++)hn.fromBufferAttribute(e,n),hn.normalize(),e.setXYZ(n,hn.x,hn.y,hn.z)}toNonIndexed(){function e(f,p){const g=f.array,_=f.itemSize,x=f.normalized,y=new g.constructor(p.length*_);let E=0,T=0;for(let P=0,S=p.length;P<S;P++){f.isInterleavedBufferAttribute?E=p[P]*f.data.stride+f.offset:E=p[P]*_;for(let v=0;v<_;v++)y[T++]=g[E++]}return new Ni(y,_,x)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new hr,r=this.index.array,a=this.attributes;for(const f in a){const p=a[f],g=e(p,r);n.setAttribute(f,g)}const c=this.morphAttributes;for(const f in c){const p=[],g=c[f];for(let _=0,x=g.length;_<x;_++){const y=g[_],E=e(y,r);p.push(E)}n.morphAttributes[f]=p}n.morphTargetsRelative=this.morphTargetsRelative;const u=this.groups;for(let f=0,p=u.length;f<p;f++){const g=u[f];n.addGroup(g.start,g.count,g.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const p=this.parameters;for(const g in p)p[g]!==void 0&&(e[g]=p[g]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const r=this.attributes;for(const p in r){const g=r[p];e.data.attributes[p]=g.toJSON(e.data)}const a={};let c=!1;for(const p in this.morphAttributes){const g=this.morphAttributes[p],_=[];for(let x=0,y=g.length;x<y;x++){const E=g[x];_.push(E.toJSON(e.data))}_.length>0&&(a[p]=_,c=!0)}c&&(e.data.morphAttributes=a,e.data.morphTargetsRelative=this.morphTargetsRelative);const u=this.groups;u.length>0&&(e.data.groups=JSON.parse(JSON.stringify(u)));const f=this.boundingSphere;return f!==null&&(e.data.boundingSphere={center:f.center.toArray(),radius:f.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone(n));const a=e.attributes;for(const g in a){const _=a[g];this.setAttribute(g,_.clone(n))}const c=e.morphAttributes;for(const g in c){const _=[],x=c[g];for(let y=0,E=x.length;y<E;y++)_.push(x[y].clone(n));this.morphAttributes[g]=_}this.morphTargetsRelative=e.morphTargetsRelative;const u=e.groups;for(let g=0,_=u.length;g<_;g++){const x=u[g];this.addGroup(x.start,x.count,x.materialIndex)}const f=e.boundingBox;f!==null&&(this.boundingBox=f.clone());const p=e.boundingSphere;return p!==null&&(this.boundingSphere=p.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Nm=new rn,as=new I_,Dl=new Cf,Um=new ce,Ll=new ce,Il=new ce,Nl=new ce,dd=new ce,Ul=new ce,Fm=new ce,Fl=new ce;class Cn extends ei{constructor(e=new hr,n=new Ng){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,r=Object.keys(n);if(r.length>0){const a=n[r[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,u=a.length;c<u;c++){const f=a[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=c}}}}getVertexPosition(e,n){const r=this.geometry,a=r.attributes.position,c=r.morphAttributes.position,u=r.morphTargetsRelative;n.fromBufferAttribute(a,e);const f=this.morphTargetInfluences;if(c&&f){Ul.set(0,0,0);for(let p=0,g=c.length;p<g;p++){const _=f[p],x=c[p];_!==0&&(dd.fromBufferAttribute(x,e),u?Ul.addScaledVector(dd,_):Ul.addScaledVector(dd.sub(n),_))}n.add(Ul)}return n}raycast(e,n){const r=this.geometry,a=this.material,c=this.matrixWorld;a!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),Dl.copy(r.boundingSphere),Dl.applyMatrix4(c),as.copy(e.ray).recast(e.near),!(Dl.containsPoint(as.origin)===!1&&(as.intersectSphere(Dl,Um)===null||as.origin.distanceToSquared(Um)>(e.far-e.near)**2))&&(Nm.copy(c).invert(),as.copy(e.ray).applyMatrix4(Nm),!(r.boundingBox!==null&&as.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,n,as)))}_computeIntersections(e,n,r){let a;const c=this.geometry,u=this.material,f=c.index,p=c.attributes.position,g=c.attributes.uv,_=c.attributes.uv1,x=c.attributes.normal,y=c.groups,E=c.drawRange;if(f!==null)if(Array.isArray(u))for(let T=0,P=y.length;T<P;T++){const S=y[T],v=u[S.materialIndex],U=Math.max(S.start,E.start),L=Math.min(f.count,Math.min(S.start+S.count,E.start+E.count));for(let A=U,Q=L;A<Q;A+=3){const O=f.getX(A),B=f.getX(A+1),Z=f.getX(A+2);a=zl(this,v,e,r,g,_,x,O,B,Z),a&&(a.faceIndex=Math.floor(A/3),a.face.materialIndex=S.materialIndex,n.push(a))}}else{const T=Math.max(0,E.start),P=Math.min(f.count,E.start+E.count);for(let S=T,v=P;S<v;S+=3){const U=f.getX(S),L=f.getX(S+1),A=f.getX(S+2);a=zl(this,u,e,r,g,_,x,U,L,A),a&&(a.faceIndex=Math.floor(S/3),n.push(a))}}else if(p!==void 0)if(Array.isArray(u))for(let T=0,P=y.length;T<P;T++){const S=y[T],v=u[S.materialIndex],U=Math.max(S.start,E.start),L=Math.min(p.count,Math.min(S.start+S.count,E.start+E.count));for(let A=U,Q=L;A<Q;A+=3){const O=A,B=A+1,Z=A+2;a=zl(this,v,e,r,g,_,x,O,B,Z),a&&(a.faceIndex=Math.floor(A/3),a.face.materialIndex=S.materialIndex,n.push(a))}}else{const T=Math.max(0,E.start),P=Math.min(p.count,E.start+E.count);for(let S=T,v=P;S<v;S+=3){const U=S,L=S+1,A=S+2;a=zl(this,u,e,r,g,_,x,U,L,A),a&&(a.faceIndex=Math.floor(S/3),n.push(a))}}}}function X_(s,e,n,r,a,c,u,f){let p;if(e.side===jn?p=r.intersectTriangle(u,c,a,!0,f):p=r.intersectTriangle(a,c,u,e.side===Xr,f),p===null)return null;Fl.copy(f),Fl.applyMatrix4(s.matrixWorld);const g=n.ray.origin.distanceTo(Fl);return g<n.near||g>n.far?null:{distance:g,point:Fl.clone(),object:s}}function zl(s,e,n,r,a,c,u,f,p,g){s.getVertexPosition(f,Ll),s.getVertexPosition(p,Il),s.getVertexPosition(g,Nl);const _=X_(s,e,n,r,Ll,Il,Nl,Fm);if(_){const x=new ce;Di.getBarycoord(Fm,Ll,Il,Nl,x),a&&(_.uv=Di.getInterpolatedAttribute(a,f,p,g,x,new Lt)),c&&(_.uv1=Di.getInterpolatedAttribute(c,f,p,g,x,new Lt)),u&&(_.normal=Di.getInterpolatedAttribute(u,f,p,g,x,new ce),_.normal.dot(r.direction)>0&&_.normal.multiplyScalar(-1));const y={a:f,b:p,c:g,normal:new ce,materialIndex:0};Di.getNormal(Ll,Il,Nl,y.normal),_.face=y,_.barycoord=x}return _}class Eo extends hr{constructor(e=1,n=1,r=1,a=1,c=1,u=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:r,widthSegments:a,heightSegments:c,depthSegments:u};const f=this;a=Math.floor(a),c=Math.floor(c),u=Math.floor(u);const p=[],g=[],_=[],x=[];let y=0,E=0;T("z","y","x",-1,-1,r,n,e,u,c,0),T("z","y","x",1,-1,r,n,-e,u,c,1),T("x","z","y",1,1,e,r,n,a,u,2),T("x","z","y",1,-1,e,r,-n,a,u,3),T("x","y","z",1,-1,e,n,r,a,c,4),T("x","y","z",-1,-1,e,n,-r,a,c,5),this.setIndex(p),this.setAttribute("position",new Wr(g,3)),this.setAttribute("normal",new Wr(_,3)),this.setAttribute("uv",new Wr(x,2));function T(P,S,v,U,L,A,Q,O,B,Z,I){const D=A/B,G=Q/Z,ae=A/2,ie=Q/2,ve=O/2,ge=B+1,de=Z+1;let pe=0,j=0;const me=new ce;for(let C=0;C<de;C++){const M=C*G-ie;for(let k=0;k<ge;k++){const J=k*D-ae;me[P]=J*U,me[S]=M*L,me[v]=ve,g.push(me.x,me.y,me.z),me[P]=0,me[S]=0,me[v]=O>0?1:-1,_.push(me.x,me.y,me.z),x.push(k/B),x.push(1-C/Z),pe+=1}}for(let C=0;C<Z;C++)for(let M=0;M<B;M++){const k=y+M+ge*C,J=y+M+ge*(C+1),z=y+(M+1)+ge*(C+1),W=y+(M+1)+ge*C;p.push(k,J,W),p.push(J,z,W),j+=6}f.addGroup(E,j,I),E+=j,y+=pe}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Eo(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function xo(s){const e={};for(const n in s){e[n]={};for(const r in s[n]){const a=s[n][r];a&&(a.isColor||a.isMatrix3||a.isMatrix4||a.isVector2||a.isVector3||a.isVector4||a.isTexture||a.isQuaternion)?a.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][r]=null):e[n][r]=a.clone():Array.isArray(a)?e[n][r]=a.slice():e[n][r]=a}}return e}function Ln(s){const e={};for(let n=0;n<s.length;n++){const r=xo(s[n]);for(const a in r)e[a]=r[a]}return e}function q_(s){const e=[];for(let n=0;n<s.length;n++)e.push(s[n].clone());return e}function zg(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ct.workingColorSpace}const Y_={clone:xo,merge:Ln};var $_=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,K_=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Vn extends rc{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=$_,this.fragmentShader=K_,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=xo(e.uniforms),this.uniformsGroups=q_(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const a in this.uniforms){const u=this.uniforms[a].value;u&&u.isTexture?n.uniforms[a]={type:"t",value:u.toJSON(e).uuid}:u&&u.isColor?n.uniforms[a]={type:"c",value:u.getHex()}:u&&u.isVector2?n.uniforms[a]={type:"v2",value:u.toArray()}:u&&u.isVector3?n.uniforms[a]={type:"v3",value:u.toArray()}:u&&u.isVector4?n.uniforms[a]={type:"v4",value:u.toArray()}:u&&u.isMatrix3?n.uniforms[a]={type:"m3",value:u.toArray()}:u&&u.isMatrix4?n.uniforms[a]={type:"m4",value:u.toArray()}:n.uniforms[a]={value:u}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const r={};for(const a in this.extensions)this.extensions[a]===!0&&(r[a]=!0);return Object.keys(r).length>0&&(n.extensions=r),n}}class kg extends ei{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new rn,this.projectionMatrix=new rn,this.projectionMatrixInverse=new rn,this.coordinateSystem=ur}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const kr=new ce,zm=new Lt,km=new Lt;class fi extends kg{constructor(e=50,n=1,r=.1,a=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=a,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=df*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Wu*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return df*2*Math.atan(Math.tan(Wu*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,r){kr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(kr.x,kr.y).multiplyScalar(-e/kr.z),kr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(kr.x,kr.y).multiplyScalar(-e/kr.z)}getViewSize(e,n){return this.getViewBounds(e,zm,km),n.subVectors(km,zm)}setViewOffset(e,n,r,a,c,u){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=r,this.view.offsetY=a,this.view.width=c,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Wu*.5*this.fov)/this.zoom,r=2*n,a=this.aspect*r,c=-.5*a;const u=this.view;if(this.view!==null&&this.view.enabled){const p=u.fullWidth,g=u.fullHeight;c+=u.offsetX*a/p,n-=u.offsetY*r/g,a*=u.width/p,r*=u.height/g}const f=this.filmOffset;f!==0&&(c+=e*f/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+a,n,n-r,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const to=-90,no=1;class Z_ extends ei{constructor(e,n,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const a=new fi(to,no,e,n);a.layers=this.layers,this.add(a);const c=new fi(to,no,e,n);c.layers=this.layers,this.add(c);const u=new fi(to,no,e,n);u.layers=this.layers,this.add(u);const f=new fi(to,no,e,n);f.layers=this.layers,this.add(f);const p=new fi(to,no,e,n);p.layers=this.layers,this.add(p);const g=new fi(to,no,e,n);g.layers=this.layers,this.add(g)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[r,a,c,u,f,p]=n;for(const g of n)this.remove(g);if(e===ur)r.up.set(0,1,0),r.lookAt(1,0,0),a.up.set(0,1,0),a.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),u.up.set(0,0,1),u.lookAt(0,-1,0),f.up.set(0,1,0),f.lookAt(0,0,1),p.up.set(0,1,0),p.lookAt(0,0,-1);else if(e===ec)r.up.set(0,-1,0),r.lookAt(-1,0,0),a.up.set(0,-1,0),a.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),u.up.set(0,0,-1),u.lookAt(0,-1,0),f.up.set(0,-1,0),f.lookAt(0,0,1),p.up.set(0,-1,0),p.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const g of n)this.add(g),g.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:a}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[c,u,f,p,g,_]=this.children,x=e.getRenderTarget(),y=e.getActiveCubeFace(),E=e.getActiveMipmapLevel(),T=e.xr.enabled;e.xr.enabled=!1;const P=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0,a),e.render(n,c),e.setRenderTarget(r,1,a),e.render(n,u),e.setRenderTarget(r,2,a),e.render(n,f),e.setRenderTarget(r,3,a),e.render(n,p),e.setRenderTarget(r,4,a),e.render(n,g),r.texture.generateMipmaps=P,e.setRenderTarget(r,5,a),e.render(n,_),e.setRenderTarget(x,y,E),e.xr.enabled=T,r.texture.needsPMREMUpdate=!0}}class Og extends Nn{constructor(e,n,r,a,c,u,f,p,g,_){e=e!==void 0?e:[],n=n!==void 0?n:po,super(e,n,r,a,c,u,f,p,g,_),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Q_ extends Ii{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},a=[r,r,r,r,r,r];this.texture=new Og(a,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:hi}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},a=new Eo(5,5,5),c=new Vn({name:"CubemapFromEquirect",uniforms:xo(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:jn,blending:Vr});c.uniforms.tEquirect.value=n;const u=new Cn(a,c),f=n.minFilter;return n.minFilter===_s&&(n.minFilter=hi),new Z_(1,10,this).update(e,u),n.minFilter=f,u.geometry.dispose(),u.material.dispose(),this}clear(e,n,r,a){const c=e.getRenderTarget();for(let u=0;u<6;u++)e.setRenderTarget(this,u),e.clear(n,r,a);e.setRenderTarget(c)}}const fd=new ce,J_=new ce,ey=new vt;class hs{constructor(e=new ce(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,r,a){return this.normal.set(e,n,r),this.constant=a,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,r){const a=fd.subVectors(r,n).cross(J_.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(a,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const r=e.delta(fd),a=this.normal.dot(r);if(a===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const c=-(e.start.dot(this.normal)+this.constant)/a;return c<0||c>1?null:n.copy(e.start).addScaledVector(r,c)}intersectsLine(e){const n=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return n<0&&r>0||r<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const r=n||ey.getNormalMatrix(e),a=this.coplanarPoint(fd).applyMatrix4(e),c=this.normal.applyMatrix3(r).normalize();return this.constant=-a.dot(c),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ls=new Cf,kl=new ce;class Bg{constructor(e=new hs,n=new hs,r=new hs,a=new hs,c=new hs,u=new hs){this.planes=[e,n,r,a,c,u]}set(e,n,r,a,c,u){const f=this.planes;return f[0].copy(e),f[1].copy(n),f[2].copy(r),f[3].copy(a),f[4].copy(c),f[5].copy(u),this}copy(e){const n=this.planes;for(let r=0;r<6;r++)n[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,n=ur){const r=this.planes,a=e.elements,c=a[0],u=a[1],f=a[2],p=a[3],g=a[4],_=a[5],x=a[6],y=a[7],E=a[8],T=a[9],P=a[10],S=a[11],v=a[12],U=a[13],L=a[14],A=a[15];if(r[0].setComponents(p-c,y-g,S-E,A-v).normalize(),r[1].setComponents(p+c,y+g,S+E,A+v).normalize(),r[2].setComponents(p+u,y+_,S+T,A+U).normalize(),r[3].setComponents(p-u,y-_,S-T,A-U).normalize(),r[4].setComponents(p-f,y-x,S-P,A-L).normalize(),n===ur)r[5].setComponents(p+f,y+x,S+P,A+L).normalize();else if(n===ec)r[5].setComponents(f,x,P,L).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ls.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),ls.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ls)}intersectsSprite(e){return ls.center.set(0,0,0),ls.radius=.7071067811865476,ls.applyMatrix4(e.matrixWorld),this.intersectsSphere(ls)}intersectsSphere(e){const n=this.planes,r=e.center,a=-e.radius;for(let c=0;c<6;c++)if(n[c].distanceToPoint(r)<a)return!1;return!0}intersectsBox(e){const n=this.planes;for(let r=0;r<6;r++){const a=n[r];if(kl.x=a.normal.x>0?e.max.x:e.min.x,kl.y=a.normal.y>0?e.max.y:e.min.y,kl.z=a.normal.z>0?e.max.z:e.min.z,a.distanceToPoint(kl)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let r=0;r<6;r++)if(n[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Hg(){let s=null,e=!1,n=null,r=null;function a(c,u){n(c,u),r=s.requestAnimationFrame(a)}return{start:function(){e!==!0&&n!==null&&(r=s.requestAnimationFrame(a),e=!0)},stop:function(){s.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(c){n=c},setContext:function(c){s=c}}}function ty(s){const e=new WeakMap;function n(f,p){const g=f.array,_=f.usage,x=g.byteLength,y=s.createBuffer();s.bindBuffer(p,y),s.bufferData(p,g,_),f.onUploadCallback();let E;if(g instanceof Float32Array)E=s.FLOAT;else if(g instanceof Uint16Array)f.isFloat16BufferAttribute?E=s.HALF_FLOAT:E=s.UNSIGNED_SHORT;else if(g instanceof Int16Array)E=s.SHORT;else if(g instanceof Uint32Array)E=s.UNSIGNED_INT;else if(g instanceof Int32Array)E=s.INT;else if(g instanceof Int8Array)E=s.BYTE;else if(g instanceof Uint8Array)E=s.UNSIGNED_BYTE;else if(g instanceof Uint8ClampedArray)E=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+g);return{buffer:y,type:E,bytesPerElement:g.BYTES_PER_ELEMENT,version:f.version,size:x}}function r(f,p,g){const _=p.array,x=p.updateRanges;if(s.bindBuffer(g,f),x.length===0)s.bufferSubData(g,0,_);else{x.sort((E,T)=>E.start-T.start);let y=0;for(let E=1;E<x.length;E++){const T=x[y],P=x[E];P.start<=T.start+T.count+1?T.count=Math.max(T.count,P.start+P.count-T.start):(++y,x[y]=P)}x.length=y+1;for(let E=0,T=x.length;E<T;E++){const P=x[E];s.bufferSubData(g,P.start*_.BYTES_PER_ELEMENT,_,P.start,P.count)}p.clearUpdateRanges()}p.onUploadCallback()}function a(f){return f.isInterleavedBufferAttribute&&(f=f.data),e.get(f)}function c(f){f.isInterleavedBufferAttribute&&(f=f.data);const p=e.get(f);p&&(s.deleteBuffer(p.buffer),e.delete(f))}function u(f,p){if(f.isInterleavedBufferAttribute&&(f=f.data),f.isGLBufferAttribute){const _=e.get(f);(!_||_.version<f.version)&&e.set(f,{buffer:f.buffer,type:f.type,bytesPerElement:f.elementSize,version:f.version});return}const g=e.get(f);if(g===void 0)e.set(f,n(f,p));else if(g.version<f.version){if(g.size!==f.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(g.buffer,f,p),g.version=f.version}}return{get:a,remove:c,update:u}}class xa extends hr{constructor(e=1,n=1,r=1,a=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:r,heightSegments:a};const c=e/2,u=n/2,f=Math.floor(r),p=Math.floor(a),g=f+1,_=p+1,x=e/f,y=n/p,E=[],T=[],P=[],S=[];for(let v=0;v<_;v++){const U=v*y-u;for(let L=0;L<g;L++){const A=L*x-c;T.push(A,-U,0),P.push(0,0,1),S.push(L/f),S.push(1-v/p)}}for(let v=0;v<p;v++)for(let U=0;U<f;U++){const L=U+g*v,A=U+g*(v+1),Q=U+1+g*(v+1),O=U+1+g*v;E.push(L,A,O),E.push(A,Q,O)}this.setIndex(E),this.setAttribute("position",new Wr(T,3)),this.setAttribute("normal",new Wr(P,3)),this.setAttribute("uv",new Wr(S,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new xa(e.width,e.height,e.widthSegments,e.heightSegments)}}var ny=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,iy=`#ifdef USE_ALPHAHASH
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
#endif`,ry=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,sy=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,oy=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,ay=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,ly=`#ifdef USE_AOMAP
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
#endif`,cy=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,uy=`#ifdef USE_BATCHING
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
#endif`,dy=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,fy=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,hy=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,py=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,my=`#ifdef USE_IRIDESCENCE
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
#endif`,gy=`#ifdef USE_BUMPMAP
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
#endif`,vy=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,xy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,_y=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,yy=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Sy=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,My=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Ey=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,wy=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Ty=`#define PI 3.141592653589793
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
} // validated`,by=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Cy=`vec3 transformedNormal = objectNormal;
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
#endif`,Ay=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Ry=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Py=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Dy=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Ly="gl_FragColor = linearToOutputTexel( gl_FragColor );",Iy=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Ny=`#ifdef USE_ENVMAP
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
#endif`,Uy=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Fy=`#ifdef USE_ENVMAP
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
#endif`,zy=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,ky=`#ifdef USE_ENVMAP
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
#endif`,Oy=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,By=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Hy=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Vy=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,jy=`#ifdef USE_GRADIENTMAP
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
}`,Gy=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Wy=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Xy=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,qy=`uniform bool receiveShadow;
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
#endif`,Yy=`#ifdef USE_ENVMAP
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
#endif`,$y=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Ky=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Zy=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Qy=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Jy=`PhysicalMaterial material;
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
#endif`,e1=`struct PhysicalMaterial {
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
}`,t1=`
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
#endif`,n1=`#if defined( RE_IndirectDiffuse )
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
#endif`,i1=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,r1=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,s1=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,o1=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,a1=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,l1=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,c1=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,u1=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,d1=`#if defined( USE_POINTS_UV )
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
#endif`,f1=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,h1=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,p1=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,m1=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,g1=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,v1=`#ifdef USE_MORPHTARGETS
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
#endif`,x1=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,_1=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,y1=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,S1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,M1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,E1=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,w1=`#ifdef USE_NORMALMAP
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
#endif`,T1=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,b1=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,C1=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,A1=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,R1=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,P1=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,D1=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,L1=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,I1=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,N1=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,U1=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,F1=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,z1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,k1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,O1=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,B1=`float getShadowMask() {
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
}`,H1=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,V1=`#ifdef USE_SKINNING
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
#endif`,j1=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,G1=`#ifdef USE_SKINNING
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
#endif`,W1=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,X1=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,q1=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Y1=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,$1=`#ifdef USE_TRANSMISSION
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
#endif`,K1=`#ifdef USE_TRANSMISSION
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
#endif`,Z1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Q1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,J1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,eS=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const tS=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,nS=`uniform sampler2D t2D;
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
}`,iS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,rS=`#ifdef ENVMAP_TYPE_CUBE
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
}`,sS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,oS=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,aS=`#include <common>
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
}`,lS=`#if DEPTH_PACKING == 3200
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
}`,cS=`#define DISTANCE
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
}`,uS=`#define DISTANCE
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
}`,dS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,fS=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,hS=`uniform float scale;
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
}`,pS=`uniform vec3 diffuse;
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
}`,mS=`#include <common>
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
}`,gS=`uniform vec3 diffuse;
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
}`,vS=`#define LAMBERT
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
}`,xS=`#define LAMBERT
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
}`,_S=`#define MATCAP
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
}`,yS=`#define MATCAP
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
}`,SS=`#define NORMAL
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
}`,MS=`#define NORMAL
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
}`,ES=`#define PHONG
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
}`,wS=`#define PHONG
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
}`,TS=`#define STANDARD
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
}`,bS=`#define STANDARD
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
}`,CS=`#define TOON
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
}`,AS=`#define TOON
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
}`,RS=`uniform float size;
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
}`,PS=`uniform vec3 diffuse;
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
}`,DS=`#include <common>
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
}`,LS=`uniform vec3 color;
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
}`,IS=`uniform float rotation;
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
}`,NS=`uniform vec3 diffuse;
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
}`,yt={alphahash_fragment:ny,alphahash_pars_fragment:iy,alphamap_fragment:ry,alphamap_pars_fragment:sy,alphatest_fragment:oy,alphatest_pars_fragment:ay,aomap_fragment:ly,aomap_pars_fragment:cy,batching_pars_vertex:uy,batching_vertex:dy,begin_vertex:fy,beginnormal_vertex:hy,bsdfs:py,iridescence_fragment:my,bumpmap_pars_fragment:gy,clipping_planes_fragment:vy,clipping_planes_pars_fragment:xy,clipping_planes_pars_vertex:_y,clipping_planes_vertex:yy,color_fragment:Sy,color_pars_fragment:My,color_pars_vertex:Ey,color_vertex:wy,common:Ty,cube_uv_reflection_fragment:by,defaultnormal_vertex:Cy,displacementmap_pars_vertex:Ay,displacementmap_vertex:Ry,emissivemap_fragment:Py,emissivemap_pars_fragment:Dy,colorspace_fragment:Ly,colorspace_pars_fragment:Iy,envmap_fragment:Ny,envmap_common_pars_fragment:Uy,envmap_pars_fragment:Fy,envmap_pars_vertex:zy,envmap_physical_pars_fragment:Yy,envmap_vertex:ky,fog_vertex:Oy,fog_pars_vertex:By,fog_fragment:Hy,fog_pars_fragment:Vy,gradientmap_pars_fragment:jy,lightmap_pars_fragment:Gy,lights_lambert_fragment:Wy,lights_lambert_pars_fragment:Xy,lights_pars_begin:qy,lights_toon_fragment:$y,lights_toon_pars_fragment:Ky,lights_phong_fragment:Zy,lights_phong_pars_fragment:Qy,lights_physical_fragment:Jy,lights_physical_pars_fragment:e1,lights_fragment_begin:t1,lights_fragment_maps:n1,lights_fragment_end:i1,logdepthbuf_fragment:r1,logdepthbuf_pars_fragment:s1,logdepthbuf_pars_vertex:o1,logdepthbuf_vertex:a1,map_fragment:l1,map_pars_fragment:c1,map_particle_fragment:u1,map_particle_pars_fragment:d1,metalnessmap_fragment:f1,metalnessmap_pars_fragment:h1,morphinstance_vertex:p1,morphcolor_vertex:m1,morphnormal_vertex:g1,morphtarget_pars_vertex:v1,morphtarget_vertex:x1,normal_fragment_begin:_1,normal_fragment_maps:y1,normal_pars_fragment:S1,normal_pars_vertex:M1,normal_vertex:E1,normalmap_pars_fragment:w1,clearcoat_normal_fragment_begin:T1,clearcoat_normal_fragment_maps:b1,clearcoat_pars_fragment:C1,iridescence_pars_fragment:A1,opaque_fragment:R1,packing:P1,premultiplied_alpha_fragment:D1,project_vertex:L1,dithering_fragment:I1,dithering_pars_fragment:N1,roughnessmap_fragment:U1,roughnessmap_pars_fragment:F1,shadowmap_pars_fragment:z1,shadowmap_pars_vertex:k1,shadowmap_vertex:O1,shadowmask_pars_fragment:B1,skinbase_vertex:H1,skinning_pars_vertex:V1,skinning_vertex:j1,skinnormal_vertex:G1,specularmap_fragment:W1,specularmap_pars_fragment:X1,tonemapping_fragment:q1,tonemapping_pars_fragment:Y1,transmission_fragment:$1,transmission_pars_fragment:K1,uv_pars_fragment:Z1,uv_pars_vertex:Q1,uv_vertex:J1,worldpos_vertex:eS,background_vert:tS,background_frag:nS,backgroundCube_vert:iS,backgroundCube_frag:rS,cube_vert:sS,cube_frag:oS,depth_vert:aS,depth_frag:lS,distanceRGBA_vert:cS,distanceRGBA_frag:uS,equirect_vert:dS,equirect_frag:fS,linedashed_vert:hS,linedashed_frag:pS,meshbasic_vert:mS,meshbasic_frag:gS,meshlambert_vert:vS,meshlambert_frag:xS,meshmatcap_vert:_S,meshmatcap_frag:yS,meshnormal_vert:SS,meshnormal_frag:MS,meshphong_vert:ES,meshphong_frag:wS,meshphysical_vert:TS,meshphysical_frag:bS,meshtoon_vert:CS,meshtoon_frag:AS,points_vert:RS,points_frag:PS,shadow_vert:DS,shadow_frag:LS,sprite_vert:IS,sprite_frag:NS},Oe={common:{diffuse:{value:new Ot(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new vt},alphaMap:{value:null},alphaMapTransform:{value:new vt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new vt}},envmap:{envMap:{value:null},envMapRotation:{value:new vt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new vt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new vt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new vt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new vt},normalScale:{value:new Lt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new vt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new vt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new vt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new vt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ot(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ot(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new vt},alphaTest:{value:0},uvTransform:{value:new vt}},sprite:{diffuse:{value:new Ot(16777215)},opacity:{value:1},center:{value:new Lt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new vt},alphaMap:{value:null},alphaMapTransform:{value:new vt},alphaTest:{value:0}}},Vi={basic:{uniforms:Ln([Oe.common,Oe.specularmap,Oe.envmap,Oe.aomap,Oe.lightmap,Oe.fog]),vertexShader:yt.meshbasic_vert,fragmentShader:yt.meshbasic_frag},lambert:{uniforms:Ln([Oe.common,Oe.specularmap,Oe.envmap,Oe.aomap,Oe.lightmap,Oe.emissivemap,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.fog,Oe.lights,{emissive:{value:new Ot(0)}}]),vertexShader:yt.meshlambert_vert,fragmentShader:yt.meshlambert_frag},phong:{uniforms:Ln([Oe.common,Oe.specularmap,Oe.envmap,Oe.aomap,Oe.lightmap,Oe.emissivemap,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.fog,Oe.lights,{emissive:{value:new Ot(0)},specular:{value:new Ot(1118481)},shininess:{value:30}}]),vertexShader:yt.meshphong_vert,fragmentShader:yt.meshphong_frag},standard:{uniforms:Ln([Oe.common,Oe.envmap,Oe.aomap,Oe.lightmap,Oe.emissivemap,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.roughnessmap,Oe.metalnessmap,Oe.fog,Oe.lights,{emissive:{value:new Ot(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:yt.meshphysical_vert,fragmentShader:yt.meshphysical_frag},toon:{uniforms:Ln([Oe.common,Oe.aomap,Oe.lightmap,Oe.emissivemap,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.gradientmap,Oe.fog,Oe.lights,{emissive:{value:new Ot(0)}}]),vertexShader:yt.meshtoon_vert,fragmentShader:yt.meshtoon_frag},matcap:{uniforms:Ln([Oe.common,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.fog,{matcap:{value:null}}]),vertexShader:yt.meshmatcap_vert,fragmentShader:yt.meshmatcap_frag},points:{uniforms:Ln([Oe.points,Oe.fog]),vertexShader:yt.points_vert,fragmentShader:yt.points_frag},dashed:{uniforms:Ln([Oe.common,Oe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:yt.linedashed_vert,fragmentShader:yt.linedashed_frag},depth:{uniforms:Ln([Oe.common,Oe.displacementmap]),vertexShader:yt.depth_vert,fragmentShader:yt.depth_frag},normal:{uniforms:Ln([Oe.common,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,{opacity:{value:1}}]),vertexShader:yt.meshnormal_vert,fragmentShader:yt.meshnormal_frag},sprite:{uniforms:Ln([Oe.sprite,Oe.fog]),vertexShader:yt.sprite_vert,fragmentShader:yt.sprite_frag},background:{uniforms:{uvTransform:{value:new vt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:yt.background_vert,fragmentShader:yt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new vt}},vertexShader:yt.backgroundCube_vert,fragmentShader:yt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:yt.cube_vert,fragmentShader:yt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:yt.equirect_vert,fragmentShader:yt.equirect_frag},distanceRGBA:{uniforms:Ln([Oe.common,Oe.displacementmap,{referencePosition:{value:new ce},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:yt.distanceRGBA_vert,fragmentShader:yt.distanceRGBA_frag},shadow:{uniforms:Ln([Oe.lights,Oe.fog,{color:{value:new Ot(0)},opacity:{value:1}}]),vertexShader:yt.shadow_vert,fragmentShader:yt.shadow_frag}};Vi.physical={uniforms:Ln([Vi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new vt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new vt},clearcoatNormalScale:{value:new Lt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new vt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new vt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new vt},sheen:{value:0},sheenColor:{value:new Ot(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new vt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new vt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new vt},transmissionSamplerSize:{value:new Lt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new vt},attenuationDistance:{value:0},attenuationColor:{value:new Ot(0)},specularColor:{value:new Ot(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new vt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new vt},anisotropyVector:{value:new Lt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new vt}}]),vertexShader:yt.meshphysical_vert,fragmentShader:yt.meshphysical_frag};const Ol={r:0,b:0,g:0},cs=new fr,US=new rn;function FS(s,e,n,r,a,c,u){const f=new Ot(0);let p=c===!0?0:1,g,_,x=null,y=0,E=null;function T(U){let L=U.isScene===!0?U.background:null;return L&&L.isTexture&&(L=(U.backgroundBlurriness>0?n:e).get(L)),L}function P(U){let L=!1;const A=T(U);A===null?v(f,p):A&&A.isColor&&(v(A,1),L=!0);const Q=s.xr.getEnvironmentBlendMode();Q==="additive"?r.buffers.color.setClear(0,0,0,1,u):Q==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,u),(s.autoClear||L)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function S(U,L){const A=T(L);A&&(A.isCubeTexture||A.mapping===nc)?(_===void 0&&(_=new Cn(new Eo(1,1,1),new Vn({name:"BackgroundCubeMaterial",uniforms:xo(Vi.backgroundCube.uniforms),vertexShader:Vi.backgroundCube.vertexShader,fragmentShader:Vi.backgroundCube.fragmentShader,side:jn,depthTest:!1,depthWrite:!1,fog:!1})),_.geometry.deleteAttribute("normal"),_.geometry.deleteAttribute("uv"),_.onBeforeRender=function(Q,O,B){this.matrixWorld.copyPosition(B.matrixWorld)},Object.defineProperty(_.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),a.update(_)),cs.copy(L.backgroundRotation),cs.x*=-1,cs.y*=-1,cs.z*=-1,A.isCubeTexture&&A.isRenderTargetTexture===!1&&(cs.y*=-1,cs.z*=-1),_.material.uniforms.envMap.value=A,_.material.uniforms.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,_.material.uniforms.backgroundBlurriness.value=L.backgroundBlurriness,_.material.uniforms.backgroundIntensity.value=L.backgroundIntensity,_.material.uniforms.backgroundRotation.value.setFromMatrix4(US.makeRotationFromEuler(cs)),_.material.toneMapped=Ct.getTransfer(A.colorSpace)!==zt,(x!==A||y!==A.version||E!==s.toneMapping)&&(_.material.needsUpdate=!0,x=A,y=A.version,E=s.toneMapping),_.layers.enableAll(),U.unshift(_,_.geometry,_.material,0,0,null)):A&&A.isTexture&&(g===void 0&&(g=new Cn(new xa(2,2),new Vn({name:"BackgroundMaterial",uniforms:xo(Vi.background.uniforms),vertexShader:Vi.background.vertexShader,fragmentShader:Vi.background.fragmentShader,side:Xr,depthTest:!1,depthWrite:!1,fog:!1})),g.geometry.deleteAttribute("normal"),Object.defineProperty(g.material,"map",{get:function(){return this.uniforms.t2D.value}}),a.update(g)),g.material.uniforms.t2D.value=A,g.material.uniforms.backgroundIntensity.value=L.backgroundIntensity,g.material.toneMapped=Ct.getTransfer(A.colorSpace)!==zt,A.matrixAutoUpdate===!0&&A.updateMatrix(),g.material.uniforms.uvTransform.value.copy(A.matrix),(x!==A||y!==A.version||E!==s.toneMapping)&&(g.material.needsUpdate=!0,x=A,y=A.version,E=s.toneMapping),g.layers.enableAll(),U.unshift(g,g.geometry,g.material,0,0,null))}function v(U,L){U.getRGB(Ol,zg(s)),r.buffers.color.setClear(Ol.r,Ol.g,Ol.b,L,u)}return{getClearColor:function(){return f},setClearColor:function(U,L=1){f.set(U),p=L,v(f,p)},getClearAlpha:function(){return p},setClearAlpha:function(U){p=U,v(f,p)},render:P,addToRenderList:S}}function zS(s,e){const n=s.getParameter(s.MAX_VERTEX_ATTRIBS),r={},a=y(null);let c=a,u=!1;function f(D,G,ae,ie,ve){let ge=!1;const de=x(ie,ae,G);c!==de&&(c=de,g(c.object)),ge=E(D,ie,ae,ve),ge&&T(D,ie,ae,ve),ve!==null&&e.update(ve,s.ELEMENT_ARRAY_BUFFER),(ge||u)&&(u=!1,A(D,G,ae,ie),ve!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(ve).buffer))}function p(){return s.createVertexArray()}function g(D){return s.bindVertexArray(D)}function _(D){return s.deleteVertexArray(D)}function x(D,G,ae){const ie=ae.wireframe===!0;let ve=r[D.id];ve===void 0&&(ve={},r[D.id]=ve);let ge=ve[G.id];ge===void 0&&(ge={},ve[G.id]=ge);let de=ge[ie];return de===void 0&&(de=y(p()),ge[ie]=de),de}function y(D){const G=[],ae=[],ie=[];for(let ve=0;ve<n;ve++)G[ve]=0,ae[ve]=0,ie[ve]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:G,enabledAttributes:ae,attributeDivisors:ie,object:D,attributes:{},index:null}}function E(D,G,ae,ie){const ve=c.attributes,ge=G.attributes;let de=0;const pe=ae.getAttributes();for(const j in pe)if(pe[j].location>=0){const C=ve[j];let M=ge[j];if(M===void 0&&(j==="instanceMatrix"&&D.instanceMatrix&&(M=D.instanceMatrix),j==="instanceColor"&&D.instanceColor&&(M=D.instanceColor)),C===void 0||C.attribute!==M||M&&C.data!==M.data)return!0;de++}return c.attributesNum!==de||c.index!==ie}function T(D,G,ae,ie){const ve={},ge=G.attributes;let de=0;const pe=ae.getAttributes();for(const j in pe)if(pe[j].location>=0){let C=ge[j];C===void 0&&(j==="instanceMatrix"&&D.instanceMatrix&&(C=D.instanceMatrix),j==="instanceColor"&&D.instanceColor&&(C=D.instanceColor));const M={};M.attribute=C,C&&C.data&&(M.data=C.data),ve[j]=M,de++}c.attributes=ve,c.attributesNum=de,c.index=ie}function P(){const D=c.newAttributes;for(let G=0,ae=D.length;G<ae;G++)D[G]=0}function S(D){v(D,0)}function v(D,G){const ae=c.newAttributes,ie=c.enabledAttributes,ve=c.attributeDivisors;ae[D]=1,ie[D]===0&&(s.enableVertexAttribArray(D),ie[D]=1),ve[D]!==G&&(s.vertexAttribDivisor(D,G),ve[D]=G)}function U(){const D=c.newAttributes,G=c.enabledAttributes;for(let ae=0,ie=G.length;ae<ie;ae++)G[ae]!==D[ae]&&(s.disableVertexAttribArray(ae),G[ae]=0)}function L(D,G,ae,ie,ve,ge,de){de===!0?s.vertexAttribIPointer(D,G,ae,ve,ge):s.vertexAttribPointer(D,G,ae,ie,ve,ge)}function A(D,G,ae,ie){P();const ve=ie.attributes,ge=ae.getAttributes(),de=G.defaultAttributeValues;for(const pe in ge){const j=ge[pe];if(j.location>=0){let me=ve[pe];if(me===void 0&&(pe==="instanceMatrix"&&D.instanceMatrix&&(me=D.instanceMatrix),pe==="instanceColor"&&D.instanceColor&&(me=D.instanceColor)),me!==void 0){const C=me.normalized,M=me.itemSize,k=e.get(me);if(k===void 0)continue;const J=k.buffer,z=k.type,W=k.bytesPerElement,te=z===s.INT||z===s.UNSIGNED_INT||me.gpuType===yf;if(me.isInterleavedBufferAttribute){const K=me.data,ue=K.stride,he=me.offset;if(K.isInstancedInterleavedBuffer){for(let Me=0;Me<j.locationSize;Me++)v(j.location+Me,K.meshPerAttribute);D.isInstancedMesh!==!0&&ie._maxInstanceCount===void 0&&(ie._maxInstanceCount=K.meshPerAttribute*K.count)}else for(let Me=0;Me<j.locationSize;Me++)S(j.location+Me);s.bindBuffer(s.ARRAY_BUFFER,J);for(let Me=0;Me<j.locationSize;Me++)L(j.location+Me,M/j.locationSize,z,C,ue*W,(he+M/j.locationSize*Me)*W,te)}else{if(me.isInstancedBufferAttribute){for(let K=0;K<j.locationSize;K++)v(j.location+K,me.meshPerAttribute);D.isInstancedMesh!==!0&&ie._maxInstanceCount===void 0&&(ie._maxInstanceCount=me.meshPerAttribute*me.count)}else for(let K=0;K<j.locationSize;K++)S(j.location+K);s.bindBuffer(s.ARRAY_BUFFER,J);for(let K=0;K<j.locationSize;K++)L(j.location+K,M/j.locationSize,z,C,M*W,M/j.locationSize*K*W,te)}}else if(de!==void 0){const C=de[pe];if(C!==void 0)switch(C.length){case 2:s.vertexAttrib2fv(j.location,C);break;case 3:s.vertexAttrib3fv(j.location,C);break;case 4:s.vertexAttrib4fv(j.location,C);break;default:s.vertexAttrib1fv(j.location,C)}}}}U()}function Q(){Z();for(const D in r){const G=r[D];for(const ae in G){const ie=G[ae];for(const ve in ie)_(ie[ve].object),delete ie[ve];delete G[ae]}delete r[D]}}function O(D){if(r[D.id]===void 0)return;const G=r[D.id];for(const ae in G){const ie=G[ae];for(const ve in ie)_(ie[ve].object),delete ie[ve];delete G[ae]}delete r[D.id]}function B(D){for(const G in r){const ae=r[G];if(ae[D.id]===void 0)continue;const ie=ae[D.id];for(const ve in ie)_(ie[ve].object),delete ie[ve];delete ae[D.id]}}function Z(){I(),u=!0,c!==a&&(c=a,g(c.object))}function I(){a.geometry=null,a.program=null,a.wireframe=!1}return{setup:f,reset:Z,resetDefaultState:I,dispose:Q,releaseStatesOfGeometry:O,releaseStatesOfProgram:B,initAttributes:P,enableAttribute:S,disableUnusedAttributes:U}}function kS(s,e,n){let r;function a(g){r=g}function c(g,_){s.drawArrays(r,g,_),n.update(_,r,1)}function u(g,_,x){x!==0&&(s.drawArraysInstanced(r,g,_,x),n.update(_,r,x))}function f(g,_,x){if(x===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,g,0,_,0,x);let E=0;for(let T=0;T<x;T++)E+=_[T];n.update(E,r,1)}function p(g,_,x,y){if(x===0)return;const E=e.get("WEBGL_multi_draw");if(E===null)for(let T=0;T<g.length;T++)u(g[T],_[T],y[T]);else{E.multiDrawArraysInstancedWEBGL(r,g,0,_,0,y,0,x);let T=0;for(let P=0;P<x;P++)T+=_[P]*y[P];n.update(T,r,1)}}this.setMode=a,this.render=c,this.renderInstances=u,this.renderMultiDraw=f,this.renderMultiDrawInstances=p}function OS(s,e,n,r){let a;function c(){if(a!==void 0)return a;if(e.has("EXT_texture_filter_anisotropic")===!0){const B=e.get("EXT_texture_filter_anisotropic");a=s.getParameter(B.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else a=0;return a}function u(B){return!(B!==Li&&r.convert(B)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function f(B){const Z=B===yo&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(B!==Gi&&r.convert(B)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&B!==cr&&!Z)}function p(B){if(B==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";B="mediump"}return B==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let g=n.precision!==void 0?n.precision:"highp";const _=p(g);_!==g&&(console.warn("THREE.WebGLRenderer:",g,"not supported, using",_,"instead."),g=_);const x=n.logarithmicDepthBuffer===!0,y=n.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),E=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),T=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),P=s.getParameter(s.MAX_TEXTURE_SIZE),S=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),v=s.getParameter(s.MAX_VERTEX_ATTRIBS),U=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),L=s.getParameter(s.MAX_VARYING_VECTORS),A=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),Q=T>0,O=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:p,textureFormatReadable:u,textureTypeReadable:f,precision:g,logarithmicDepthBuffer:x,reverseDepthBuffer:y,maxTextures:E,maxVertexTextures:T,maxTextureSize:P,maxCubemapSize:S,maxAttributes:v,maxVertexUniforms:U,maxVaryings:L,maxFragmentUniforms:A,vertexTextures:Q,maxSamples:O}}function BS(s){const e=this;let n=null,r=0,a=!1,c=!1;const u=new hs,f=new vt,p={value:null,needsUpdate:!1};this.uniform=p,this.numPlanes=0,this.numIntersection=0,this.init=function(x,y){const E=x.length!==0||y||r!==0||a;return a=y,r=x.length,E},this.beginShadows=function(){c=!0,_(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(x,y){n=_(x,y,0)},this.setState=function(x,y,E){const T=x.clippingPlanes,P=x.clipIntersection,S=x.clipShadows,v=s.get(x);if(!a||T===null||T.length===0||c&&!S)c?_(null):g();else{const U=c?0:r,L=U*4;let A=v.clippingState||null;p.value=A,A=_(T,y,L,E);for(let Q=0;Q!==L;++Q)A[Q]=n[Q];v.clippingState=A,this.numIntersection=P?this.numPlanes:0,this.numPlanes+=U}};function g(){p.value!==n&&(p.value=n,p.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function _(x,y,E,T){const P=x!==null?x.length:0;let S=null;if(P!==0){if(S=p.value,T!==!0||S===null){const v=E+P*4,U=y.matrixWorldInverse;f.getNormalMatrix(U),(S===null||S.length<v)&&(S=new Float32Array(v));for(let L=0,A=E;L!==P;++L,A+=4)u.copy(x[L]).applyMatrix4(U,f),u.normal.toArray(S,A),S[A+3]=u.constant}p.value=S,p.needsUpdate=!0}return e.numPlanes=P,e.numIntersection=0,S}}function HS(s){let e=new WeakMap;function n(u,f){return f===Id?u.mapping=po:f===Nd&&(u.mapping=mo),u}function r(u){if(u&&u.isTexture){const f=u.mapping;if(f===Id||f===Nd)if(e.has(u)){const p=e.get(u).texture;return n(p,u.mapping)}else{const p=u.image;if(p&&p.height>0){const g=new Q_(p.height);return g.fromEquirectangularTexture(s,u),e.set(u,g),u.addEventListener("dispose",a),n(g.texture,u.mapping)}else return null}}return u}function a(u){const f=u.target;f.removeEventListener("dispose",a);const p=e.get(f);p!==void 0&&(e.delete(f),p.dispose())}function c(){e=new WeakMap}return{get:r,dispose:c}}class Vg extends kg{constructor(e=-1,n=1,r=1,a=-1,c=.1,u=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=r,this.bottom=a,this.near=c,this.far=u,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,r,a,c,u){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=r,this.view.offsetY=a,this.view.width=c,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,a=(this.top+this.bottom)/2;let c=r-e,u=r+e,f=a+n,p=a-n;if(this.view!==null&&this.view.enabled){const g=(this.right-this.left)/this.view.fullWidth/this.zoom,_=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=g*this.view.offsetX,u=c+g*this.view.width,f-=_*this.view.offsetY,p=f-_*this.view.height}this.projectionMatrix.makeOrthographic(c,u,f,p,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const oo=4,Om=[.125,.215,.35,.446,.526,.582],gs=20,hd=new Vg,Bm=new Ot;let pd=null,md=0,gd=0,vd=!1;const ps=(1+Math.sqrt(5))/2,io=1/ps,Hm=[new ce(-ps,io,0),new ce(ps,io,0),new ce(-io,0,ps),new ce(io,0,ps),new ce(0,ps,-io),new ce(0,ps,io),new ce(-1,1,-1),new ce(1,1,-1),new ce(-1,1,1),new ce(1,1,1)];class Vm{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,r=.1,a=100){pd=this._renderer.getRenderTarget(),md=this._renderer.getActiveCubeFace(),gd=this._renderer.getActiveMipmapLevel(),vd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,r,a,c),n>0&&this._blur(c,0,0,n),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Wm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Gm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(pd,md,gd),this._renderer.xr.enabled=vd,e.scissorTest=!1,Bl(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===po||e.mapping===mo?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),pd=this._renderer.getRenderTarget(),md=this._renderer.getActiveCubeFace(),gd=this._renderer.getActiveMipmapLevel(),vd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=n||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,r={magFilter:hi,minFilter:hi,generateMipmaps:!1,type:yo,format:Li,colorSpace:So,depthBuffer:!1},a=jm(e,n,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=jm(e,n,r);const{_lodMax:c}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=VS(c)),this._blurMaterial=jS(c,e,n)}return a}_compileMaterial(e){const n=new Cn(this._lodPlanes[0],e);this._renderer.compile(n,hd)}_sceneToCubeUV(e,n,r,a){const f=new fi(90,1,n,r),p=[1,-1,1,1,1,1],g=[1,1,1,-1,-1,-1],_=this._renderer,x=_.autoClear,y=_.toneMapping;_.getClearColor(Bm),_.toneMapping=jr,_.autoClear=!1;const E=new Ng({name:"PMREM.Background",side:jn,depthWrite:!1,depthTest:!1}),T=new Cn(new Eo,E);let P=!1;const S=e.background;S?S.isColor&&(E.color.copy(S),e.background=null,P=!0):(E.color.copy(Bm),P=!0);for(let v=0;v<6;v++){const U=v%3;U===0?(f.up.set(0,p[v],0),f.lookAt(g[v],0,0)):U===1?(f.up.set(0,0,p[v]),f.lookAt(0,g[v],0)):(f.up.set(0,p[v],0),f.lookAt(0,0,g[v]));const L=this._cubeSize;Bl(a,U*L,v>2?L:0,L,L),_.setRenderTarget(a),P&&_.render(T,f),_.render(e,f)}T.geometry.dispose(),T.material.dispose(),_.toneMapping=y,_.autoClear=x,e.background=S}_textureToCubeUV(e,n){const r=this._renderer,a=e.mapping===po||e.mapping===mo;a?(this._cubemapMaterial===null&&(this._cubemapMaterial=Wm()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Gm());const c=a?this._cubemapMaterial:this._equirectMaterial,u=new Cn(this._lodPlanes[0],c),f=c.uniforms;f.envMap.value=e;const p=this._cubeSize;Bl(n,0,0,3*p,2*p),r.setRenderTarget(n),r.render(u,hd)}_applyPMREM(e){const n=this._renderer,r=n.autoClear;n.autoClear=!1;const a=this._lodPlanes.length;for(let c=1;c<a;c++){const u=Math.sqrt(this._sigmas[c]*this._sigmas[c]-this._sigmas[c-1]*this._sigmas[c-1]),f=Hm[(a-c-1)%Hm.length];this._blur(e,c-1,c,u,f)}n.autoClear=r}_blur(e,n,r,a,c){const u=this._pingPongRenderTarget;this._halfBlur(e,u,n,r,a,"latitudinal",c),this._halfBlur(u,e,r,r,a,"longitudinal",c)}_halfBlur(e,n,r,a,c,u,f){const p=this._renderer,g=this._blurMaterial;u!=="latitudinal"&&u!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const _=3,x=new Cn(this._lodPlanes[a],g),y=g.uniforms,E=this._sizeLods[r]-1,T=isFinite(c)?Math.PI/(2*E):2*Math.PI/(2*gs-1),P=c/T,S=isFinite(c)?1+Math.floor(_*P):gs;S>gs&&console.warn(`sigmaRadians, ${c}, is too large and will clip, as it requested ${S} samples when the maximum is set to ${gs}`);const v=[];let U=0;for(let B=0;B<gs;++B){const Z=B/P,I=Math.exp(-Z*Z/2);v.push(I),B===0?U+=I:B<S&&(U+=2*I)}for(let B=0;B<v.length;B++)v[B]=v[B]/U;y.envMap.value=e.texture,y.samples.value=S,y.weights.value=v,y.latitudinal.value=u==="latitudinal",f&&(y.poleAxis.value=f);const{_lodMax:L}=this;y.dTheta.value=T,y.mipInt.value=L-r;const A=this._sizeLods[a],Q=3*A*(a>L-oo?a-L+oo:0),O=4*(this._cubeSize-A);Bl(n,Q,O,3*A,2*A),p.setRenderTarget(n),p.render(x,hd)}}function VS(s){const e=[],n=[],r=[];let a=s;const c=s-oo+1+Om.length;for(let u=0;u<c;u++){const f=Math.pow(2,a);n.push(f);let p=1/f;u>s-oo?p=Om[u-s+oo-1]:u===0&&(p=0),r.push(p);const g=1/(f-2),_=-g,x=1+g,y=[_,_,x,_,x,x,_,_,x,x,_,x],E=6,T=6,P=3,S=2,v=1,U=new Float32Array(P*T*E),L=new Float32Array(S*T*E),A=new Float32Array(v*T*E);for(let O=0;O<E;O++){const B=O%3*2/3-1,Z=O>2?0:-1,I=[B,Z,0,B+2/3,Z,0,B+2/3,Z+1,0,B,Z,0,B+2/3,Z+1,0,B,Z+1,0];U.set(I,P*T*O),L.set(y,S*T*O);const D=[O,O,O,O,O,O];A.set(D,v*T*O)}const Q=new hr;Q.setAttribute("position",new Ni(U,P)),Q.setAttribute("uv",new Ni(L,S)),Q.setAttribute("faceIndex",new Ni(A,v)),e.push(Q),a>oo&&a--}return{lodPlanes:e,sizeLods:n,sigmas:r}}function jm(s,e,n){const r=new Ii(s,e,n);return r.texture.mapping=nc,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function Bl(s,e,n,r,a){s.viewport.set(e,n,r,a),s.scissor.set(e,n,r,a)}function jS(s,e,n){const r=new Float32Array(gs),a=new ce(0,1,0);return new Vn({name:"SphericalGaussianBlur",defines:{n:gs,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:a}},vertexShader:Af(),fragmentShader:`

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
		`,blending:Vr,depthTest:!1,depthWrite:!1})}function Gm(){return new Vn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Af(),fragmentShader:`

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
		`,blending:Vr,depthTest:!1,depthWrite:!1})}function Wm(){return new Vn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Af(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Vr,depthTest:!1,depthWrite:!1})}function Af(){return`

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
	`}function GS(s){let e=new WeakMap,n=null;function r(f){if(f&&f.isTexture){const p=f.mapping,g=p===Id||p===Nd,_=p===po||p===mo;if(g||_){let x=e.get(f);const y=x!==void 0?x.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==y)return n===null&&(n=new Vm(s)),x=g?n.fromEquirectangular(f,x):n.fromCubemap(f,x),x.texture.pmremVersion=f.pmremVersion,e.set(f,x),x.texture;if(x!==void 0)return x.texture;{const E=f.image;return g&&E&&E.height>0||_&&E&&a(E)?(n===null&&(n=new Vm(s)),x=g?n.fromEquirectangular(f):n.fromCubemap(f),x.texture.pmremVersion=f.pmremVersion,e.set(f,x),f.addEventListener("dispose",c),x.texture):null}}}return f}function a(f){let p=0;const g=6;for(let _=0;_<g;_++)f[_]!==void 0&&p++;return p===g}function c(f){const p=f.target;p.removeEventListener("dispose",c);const g=e.get(p);g!==void 0&&(e.delete(p),g.dispose())}function u(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:r,dispose:u}}function WS(s){const e={};function n(r){if(e[r]!==void 0)return e[r];let a;switch(r){case"WEBGL_depth_texture":a=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":a=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":a=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":a=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:a=s.getExtension(r)}return e[r]=a,a}return{has:function(r){return n(r)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(r){const a=n(r);return a===null&&ua("THREE.WebGLRenderer: "+r+" extension not supported."),a}}}function XS(s,e,n,r){const a={},c=new WeakMap;function u(x){const y=x.target;y.index!==null&&e.remove(y.index);for(const T in y.attributes)e.remove(y.attributes[T]);for(const T in y.morphAttributes){const P=y.morphAttributes[T];for(let S=0,v=P.length;S<v;S++)e.remove(P[S])}y.removeEventListener("dispose",u),delete a[y.id];const E=c.get(y);E&&(e.remove(E),c.delete(y)),r.releaseStatesOfGeometry(y),y.isInstancedBufferGeometry===!0&&delete y._maxInstanceCount,n.memory.geometries--}function f(x,y){return a[y.id]===!0||(y.addEventListener("dispose",u),a[y.id]=!0,n.memory.geometries++),y}function p(x){const y=x.attributes;for(const T in y)e.update(y[T],s.ARRAY_BUFFER);const E=x.morphAttributes;for(const T in E){const P=E[T];for(let S=0,v=P.length;S<v;S++)e.update(P[S],s.ARRAY_BUFFER)}}function g(x){const y=[],E=x.index,T=x.attributes.position;let P=0;if(E!==null){const U=E.array;P=E.version;for(let L=0,A=U.length;L<A;L+=3){const Q=U[L+0],O=U[L+1],B=U[L+2];y.push(Q,O,O,B,B,Q)}}else if(T!==void 0){const U=T.array;P=T.version;for(let L=0,A=U.length/3-1;L<A;L+=3){const Q=L+0,O=L+1,B=L+2;y.push(Q,O,O,B,B,Q)}}else return;const S=new(Rg(y)?Fg:Ug)(y,1);S.version=P;const v=c.get(x);v&&e.remove(v),c.set(x,S)}function _(x){const y=c.get(x);if(y){const E=x.index;E!==null&&y.version<E.version&&g(x)}else g(x);return c.get(x)}return{get:f,update:p,getWireframeAttribute:_}}function qS(s,e,n){let r;function a(y){r=y}let c,u;function f(y){c=y.type,u=y.bytesPerElement}function p(y,E){s.drawElements(r,E,c,y*u),n.update(E,r,1)}function g(y,E,T){T!==0&&(s.drawElementsInstanced(r,E,c,y*u,T),n.update(E,r,T))}function _(y,E,T){if(T===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,E,0,c,y,0,T);let S=0;for(let v=0;v<T;v++)S+=E[v];n.update(S,r,1)}function x(y,E,T,P){if(T===0)return;const S=e.get("WEBGL_multi_draw");if(S===null)for(let v=0;v<y.length;v++)g(y[v]/u,E[v],P[v]);else{S.multiDrawElementsInstancedWEBGL(r,E,0,c,y,0,P,0,T);let v=0;for(let U=0;U<T;U++)v+=E[U]*P[U];n.update(v,r,1)}}this.setMode=a,this.setIndex=f,this.render=p,this.renderInstances=g,this.renderMultiDraw=_,this.renderMultiDrawInstances=x}function YS(s){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function r(c,u,f){switch(n.calls++,u){case s.TRIANGLES:n.triangles+=f*(c/3);break;case s.LINES:n.lines+=f*(c/2);break;case s.LINE_STRIP:n.lines+=f*(c-1);break;case s.LINE_LOOP:n.lines+=f*c;break;case s.POINTS:n.points+=f*c;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",u);break}}function a(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:a,update:r}}function $S(s,e,n){const r=new WeakMap,a=new en;function c(u,f,p){const g=u.morphTargetInfluences,_=f.morphAttributes.position||f.morphAttributes.normal||f.morphAttributes.color,x=_!==void 0?_.length:0;let y=r.get(f);if(y===void 0||y.count!==x){let D=function(){Z.dispose(),r.delete(f),f.removeEventListener("dispose",D)};var E=D;y!==void 0&&y.texture.dispose();const T=f.morphAttributes.position!==void 0,P=f.morphAttributes.normal!==void 0,S=f.morphAttributes.color!==void 0,v=f.morphAttributes.position||[],U=f.morphAttributes.normal||[],L=f.morphAttributes.color||[];let A=0;T===!0&&(A=1),P===!0&&(A=2),S===!0&&(A=3);let Q=f.attributes.position.count*A,O=1;Q>e.maxTextureSize&&(O=Math.ceil(Q/e.maxTextureSize),Q=e.maxTextureSize);const B=new Float32Array(Q*O*4*x),Z=new Dg(B,Q,O,x);Z.type=cr,Z.needsUpdate=!0;const I=A*4;for(let G=0;G<x;G++){const ae=v[G],ie=U[G],ve=L[G],ge=Q*O*4*G;for(let de=0;de<ae.count;de++){const pe=de*I;T===!0&&(a.fromBufferAttribute(ae,de),B[ge+pe+0]=a.x,B[ge+pe+1]=a.y,B[ge+pe+2]=a.z,B[ge+pe+3]=0),P===!0&&(a.fromBufferAttribute(ie,de),B[ge+pe+4]=a.x,B[ge+pe+5]=a.y,B[ge+pe+6]=a.z,B[ge+pe+7]=0),S===!0&&(a.fromBufferAttribute(ve,de),B[ge+pe+8]=a.x,B[ge+pe+9]=a.y,B[ge+pe+10]=a.z,B[ge+pe+11]=ve.itemSize===4?a.w:1)}}y={count:x,texture:Z,size:new Lt(Q,O)},r.set(f,y),f.addEventListener("dispose",D)}if(u.isInstancedMesh===!0&&u.morphTexture!==null)p.getUniforms().setValue(s,"morphTexture",u.morphTexture,n);else{let T=0;for(let S=0;S<g.length;S++)T+=g[S];const P=f.morphTargetsRelative?1:1-T;p.getUniforms().setValue(s,"morphTargetBaseInfluence",P),p.getUniforms().setValue(s,"morphTargetInfluences",g)}p.getUniforms().setValue(s,"morphTargetsTexture",y.texture,n),p.getUniforms().setValue(s,"morphTargetsTextureSize",y.size)}return{update:c}}function KS(s,e,n,r){let a=new WeakMap;function c(p){const g=r.render.frame,_=p.geometry,x=e.get(p,_);if(a.get(x)!==g&&(e.update(x),a.set(x,g)),p.isInstancedMesh&&(p.hasEventListener("dispose",f)===!1&&p.addEventListener("dispose",f),a.get(p)!==g&&(n.update(p.instanceMatrix,s.ARRAY_BUFFER),p.instanceColor!==null&&n.update(p.instanceColor,s.ARRAY_BUFFER),a.set(p,g))),p.isSkinnedMesh){const y=p.skeleton;a.get(y)!==g&&(y.update(),a.set(y,g))}return x}function u(){a=new WeakMap}function f(p){const g=p.target;g.removeEventListener("dispose",f),n.remove(g.instanceMatrix),g.instanceColor!==null&&n.remove(g.instanceColor)}return{update:c,dispose:u}}class jg extends Nn{constructor(e,n,r,a,c,u,f,p,g,_=uo){if(_!==uo&&_!==vo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");r===void 0&&_===uo&&(r=Ss),r===void 0&&_===vo&&(r=go),super(null,a,c,u,f,p,_,r,g),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=f!==void 0?f:Jn,this.minFilter=p!==void 0?p:Jn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const Gg=new Nn,Xm=new jg(1,1),Wg=new Dg,Xg=new D_,qg=new Og,qm=[],Ym=[],$m=new Float32Array(16),Km=new Float32Array(9),Zm=new Float32Array(4);function wo(s,e,n){const r=s[0];if(r<=0||r>0)return s;const a=e*n;let c=qm[a];if(c===void 0&&(c=new Float32Array(a),qm[a]=c),e!==0){r.toArray(c,0);for(let u=1,f=0;u!==e;++u)f+=n,s[u].toArray(c,f)}return c}function ln(s,e){if(s.length!==e.length)return!1;for(let n=0,r=s.length;n<r;n++)if(s[n]!==e[n])return!1;return!0}function cn(s,e){for(let n=0,r=e.length;n<r;n++)s[n]=e[n]}function sc(s,e){let n=Ym[e];n===void 0&&(n=new Int32Array(e),Ym[e]=n);for(let r=0;r!==e;++r)n[r]=s.allocateTextureUnit();return n}function ZS(s,e){const n=this.cache;n[0]!==e&&(s.uniform1f(this.addr,e),n[0]=e)}function QS(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(ln(n,e))return;s.uniform2fv(this.addr,e),cn(n,e)}}function JS(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(ln(n,e))return;s.uniform3fv(this.addr,e),cn(n,e)}}function eM(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(ln(n,e))return;s.uniform4fv(this.addr,e),cn(n,e)}}function tM(s,e){const n=this.cache,r=e.elements;if(r===void 0){if(ln(n,e))return;s.uniformMatrix2fv(this.addr,!1,e),cn(n,e)}else{if(ln(n,r))return;Zm.set(r),s.uniformMatrix2fv(this.addr,!1,Zm),cn(n,r)}}function nM(s,e){const n=this.cache,r=e.elements;if(r===void 0){if(ln(n,e))return;s.uniformMatrix3fv(this.addr,!1,e),cn(n,e)}else{if(ln(n,r))return;Km.set(r),s.uniformMatrix3fv(this.addr,!1,Km),cn(n,r)}}function iM(s,e){const n=this.cache,r=e.elements;if(r===void 0){if(ln(n,e))return;s.uniformMatrix4fv(this.addr,!1,e),cn(n,e)}else{if(ln(n,r))return;$m.set(r),s.uniformMatrix4fv(this.addr,!1,$m),cn(n,r)}}function rM(s,e){const n=this.cache;n[0]!==e&&(s.uniform1i(this.addr,e),n[0]=e)}function sM(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(ln(n,e))return;s.uniform2iv(this.addr,e),cn(n,e)}}function oM(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(ln(n,e))return;s.uniform3iv(this.addr,e),cn(n,e)}}function aM(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(ln(n,e))return;s.uniform4iv(this.addr,e),cn(n,e)}}function lM(s,e){const n=this.cache;n[0]!==e&&(s.uniform1ui(this.addr,e),n[0]=e)}function cM(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(ln(n,e))return;s.uniform2uiv(this.addr,e),cn(n,e)}}function uM(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(ln(n,e))return;s.uniform3uiv(this.addr,e),cn(n,e)}}function dM(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(ln(n,e))return;s.uniform4uiv(this.addr,e),cn(n,e)}}function fM(s,e,n){const r=this.cache,a=n.allocateTextureUnit();r[0]!==a&&(s.uniform1i(this.addr,a),r[0]=a);let c;this.type===s.SAMPLER_2D_SHADOW?(Xm.compareFunction=Ag,c=Xm):c=Gg,n.setTexture2D(e||c,a)}function hM(s,e,n){const r=this.cache,a=n.allocateTextureUnit();r[0]!==a&&(s.uniform1i(this.addr,a),r[0]=a),n.setTexture3D(e||Xg,a)}function pM(s,e,n){const r=this.cache,a=n.allocateTextureUnit();r[0]!==a&&(s.uniform1i(this.addr,a),r[0]=a),n.setTextureCube(e||qg,a)}function mM(s,e,n){const r=this.cache,a=n.allocateTextureUnit();r[0]!==a&&(s.uniform1i(this.addr,a),r[0]=a),n.setTexture2DArray(e||Wg,a)}function gM(s){switch(s){case 5126:return ZS;case 35664:return QS;case 35665:return JS;case 35666:return eM;case 35674:return tM;case 35675:return nM;case 35676:return iM;case 5124:case 35670:return rM;case 35667:case 35671:return sM;case 35668:case 35672:return oM;case 35669:case 35673:return aM;case 5125:return lM;case 36294:return cM;case 36295:return uM;case 36296:return dM;case 35678:case 36198:case 36298:case 36306:case 35682:return fM;case 35679:case 36299:case 36307:return hM;case 35680:case 36300:case 36308:case 36293:return pM;case 36289:case 36303:case 36311:case 36292:return mM}}function vM(s,e){s.uniform1fv(this.addr,e)}function xM(s,e){const n=wo(e,this.size,2);s.uniform2fv(this.addr,n)}function _M(s,e){const n=wo(e,this.size,3);s.uniform3fv(this.addr,n)}function yM(s,e){const n=wo(e,this.size,4);s.uniform4fv(this.addr,n)}function SM(s,e){const n=wo(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,n)}function MM(s,e){const n=wo(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,n)}function EM(s,e){const n=wo(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,n)}function wM(s,e){s.uniform1iv(this.addr,e)}function TM(s,e){s.uniform2iv(this.addr,e)}function bM(s,e){s.uniform3iv(this.addr,e)}function CM(s,e){s.uniform4iv(this.addr,e)}function AM(s,e){s.uniform1uiv(this.addr,e)}function RM(s,e){s.uniform2uiv(this.addr,e)}function PM(s,e){s.uniform3uiv(this.addr,e)}function DM(s,e){s.uniform4uiv(this.addr,e)}function LM(s,e,n){const r=this.cache,a=e.length,c=sc(n,a);ln(r,c)||(s.uniform1iv(this.addr,c),cn(r,c));for(let u=0;u!==a;++u)n.setTexture2D(e[u]||Gg,c[u])}function IM(s,e,n){const r=this.cache,a=e.length,c=sc(n,a);ln(r,c)||(s.uniform1iv(this.addr,c),cn(r,c));for(let u=0;u!==a;++u)n.setTexture3D(e[u]||Xg,c[u])}function NM(s,e,n){const r=this.cache,a=e.length,c=sc(n,a);ln(r,c)||(s.uniform1iv(this.addr,c),cn(r,c));for(let u=0;u!==a;++u)n.setTextureCube(e[u]||qg,c[u])}function UM(s,e,n){const r=this.cache,a=e.length,c=sc(n,a);ln(r,c)||(s.uniform1iv(this.addr,c),cn(r,c));for(let u=0;u!==a;++u)n.setTexture2DArray(e[u]||Wg,c[u])}function FM(s){switch(s){case 5126:return vM;case 35664:return xM;case 35665:return _M;case 35666:return yM;case 35674:return SM;case 35675:return MM;case 35676:return EM;case 5124:case 35670:return wM;case 35667:case 35671:return TM;case 35668:case 35672:return bM;case 35669:case 35673:return CM;case 5125:return AM;case 36294:return RM;case 36295:return PM;case 36296:return DM;case 35678:case 36198:case 36298:case 36306:case 35682:return LM;case 35679:case 36299:case 36307:return IM;case 35680:case 36300:case 36308:case 36293:return NM;case 36289:case 36303:case 36311:case 36292:return UM}}class zM{constructor(e,n,r){this.id=e,this.addr=r,this.cache=[],this.type=n.type,this.setValue=gM(n.type)}}class kM{constructor(e,n,r){this.id=e,this.addr=r,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=FM(n.type)}}class OM{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,r){const a=this.seq;for(let c=0,u=a.length;c!==u;++c){const f=a[c];f.setValue(e,n[f.id],r)}}}const xd=/(\w+)(\])?(\[|\.)?/g;function Qm(s,e){s.seq.push(e),s.map[e.id]=e}function BM(s,e,n){const r=s.name,a=r.length;for(xd.lastIndex=0;;){const c=xd.exec(r),u=xd.lastIndex;let f=c[1];const p=c[2]==="]",g=c[3];if(p&&(f=f|0),g===void 0||g==="["&&u+2===a){Qm(n,g===void 0?new zM(f,s,e):new kM(f,s,e));break}else{let x=n.map[f];x===void 0&&(x=new OM(f),Qm(n,x)),n=x}}}class Jl{constructor(e,n){this.seq=[],this.map={};const r=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let a=0;a<r;++a){const c=e.getActiveUniform(n,a),u=e.getUniformLocation(n,c.name);BM(c,u,this)}}setValue(e,n,r,a){const c=this.map[n];c!==void 0&&c.setValue(e,r,a)}setOptional(e,n,r){const a=n[r];a!==void 0&&this.setValue(e,r,a)}static upload(e,n,r,a){for(let c=0,u=n.length;c!==u;++c){const f=n[c],p=r[f.id];p.needsUpdate!==!1&&f.setValue(e,p.value,a)}}static seqWithValue(e,n){const r=[];for(let a=0,c=e.length;a!==c;++a){const u=e[a];u.id in n&&r.push(u)}return r}}function Jm(s,e,n){const r=s.createShader(e);return s.shaderSource(r,n),s.compileShader(r),r}const HM=37297;let VM=0;function jM(s,e){const n=s.split(`
`),r=[],a=Math.max(e-6,0),c=Math.min(e+6,n.length);for(let u=a;u<c;u++){const f=u+1;r.push(`${f===e?">":" "} ${f}: ${n[u]}`)}return r.join(`
`)}const eg=new vt;function GM(s){Ct._getMatrix(eg,Ct.workingColorSpace,s);const e=`mat3( ${eg.elements.map(n=>n.toFixed(4))} )`;switch(Ct.getTransfer(s)){case ic:return[e,"LinearTransferOETF"];case zt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function tg(s,e,n){const r=s.getShaderParameter(e,s.COMPILE_STATUS),a=s.getShaderInfoLog(e).trim();if(r&&a==="")return"";const c=/ERROR: 0:(\d+)/.exec(a);if(c){const u=parseInt(c[1]);return n.toUpperCase()+`

`+a+`

`+jM(s.getShaderSource(e),u)}else return a}function WM(s,e){const n=GM(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}function XM(s,e){let n;switch(e){case i_:n="Linear";break;case r_:n="Reinhard";break;case s_:n="Cineon";break;case o_:n="ACESFilmic";break;case l_:n="AgX";break;case c_:n="Neutral";break;case a_:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+s+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const Hl=new ce;function qM(){Ct.getLuminanceCoefficients(Hl);const s=Hl.x.toFixed(4),e=Hl.y.toFixed(4),n=Hl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function YM(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(da).join(`
`)}function $M(s){const e=[];for(const n in s){const r=s[n];r!==!1&&e.push("#define "+n+" "+r)}return e.join(`
`)}function KM(s,e){const n={},r=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let a=0;a<r;a++){const c=s.getActiveAttrib(e,a),u=c.name;let f=1;c.type===s.FLOAT_MAT2&&(f=2),c.type===s.FLOAT_MAT3&&(f=3),c.type===s.FLOAT_MAT4&&(f=4),n[u]={type:c.type,location:s.getAttribLocation(e,u),locationSize:f}}return n}function da(s){return s!==""}function ng(s,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function ig(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const ZM=/^[ \t]*#include +<([\w\d./]+)>/gm;function ff(s){return s.replace(ZM,JM)}const QM=new Map;function JM(s,e){let n=yt[e];if(n===void 0){const r=QM.get(e);if(r!==void 0)n=yt[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return ff(n)}const e2=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function rg(s){return s.replace(e2,t2)}function t2(s,e,n,r){let a="";for(let c=parseInt(e);c<parseInt(n);c++)a+=r.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return a}function sg(s){let e=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function n2(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===gg?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===Fx?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===or&&(e="SHADOWMAP_TYPE_VSM"),e}function i2(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case po:case mo:e="ENVMAP_TYPE_CUBE";break;case nc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function r2(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case mo:e="ENVMAP_MODE_REFRACTION";break}return e}function s2(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case vg:e="ENVMAP_BLENDING_MULTIPLY";break;case t_:e="ENVMAP_BLENDING_MIX";break;case n_:e="ENVMAP_BLENDING_ADD";break}return e}function o2(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:r,maxMip:n}}function a2(s,e,n,r){const a=s.getContext(),c=n.defines;let u=n.vertexShader,f=n.fragmentShader;const p=n2(n),g=i2(n),_=r2(n),x=s2(n),y=o2(n),E=YM(n),T=$M(c),P=a.createProgram();let S,v,U=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(S=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,T].filter(da).join(`
`),S.length>0&&(S+=`
`),v=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,T].filter(da).join(`
`),v.length>0&&(v+=`
`)):(S=[sg(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,T,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+_:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+p:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(da).join(`
`),v=[sg(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,T,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+g:"",n.envMap?"#define "+_:"",n.envMap?"#define "+x:"",y?"#define CUBEUV_TEXEL_WIDTH "+y.texelWidth:"",y?"#define CUBEUV_TEXEL_HEIGHT "+y.texelHeight:"",y?"#define CUBEUV_MAX_MIP "+y.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+p:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==jr?"#define TONE_MAPPING":"",n.toneMapping!==jr?yt.tonemapping_pars_fragment:"",n.toneMapping!==jr?XM("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",yt.colorspace_pars_fragment,WM("linearToOutputTexel",n.outputColorSpace),qM(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(da).join(`
`)),u=ff(u),u=ng(u,n),u=ig(u,n),f=ff(f),f=ng(f,n),f=ig(f,n),u=rg(u),f=rg(f),n.isRawShaderMaterial!==!0&&(U=`#version 300 es
`,S=[E,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+S,v=["#define varying in",n.glslVersion===xm?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===xm?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);const L=U+S+u,A=U+v+f,Q=Jm(a,a.VERTEX_SHADER,L),O=Jm(a,a.FRAGMENT_SHADER,A);a.attachShader(P,Q),a.attachShader(P,O),n.index0AttributeName!==void 0?a.bindAttribLocation(P,0,n.index0AttributeName):n.morphTargets===!0&&a.bindAttribLocation(P,0,"position"),a.linkProgram(P);function B(G){if(s.debug.checkShaderErrors){const ae=a.getProgramInfoLog(P).trim(),ie=a.getShaderInfoLog(Q).trim(),ve=a.getShaderInfoLog(O).trim();let ge=!0,de=!0;if(a.getProgramParameter(P,a.LINK_STATUS)===!1)if(ge=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(a,P,Q,O);else{const pe=tg(a,Q,"vertex"),j=tg(a,O,"fragment");console.error("THREE.WebGLProgram: Shader Error "+a.getError()+" - VALIDATE_STATUS "+a.getProgramParameter(P,a.VALIDATE_STATUS)+`

Material Name: `+G.name+`
Material Type: `+G.type+`

Program Info Log: `+ae+`
`+pe+`
`+j)}else ae!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ae):(ie===""||ve==="")&&(de=!1);de&&(G.diagnostics={runnable:ge,programLog:ae,vertexShader:{log:ie,prefix:S},fragmentShader:{log:ve,prefix:v}})}a.deleteShader(Q),a.deleteShader(O),Z=new Jl(a,P),I=KM(a,P)}let Z;this.getUniforms=function(){return Z===void 0&&B(this),Z};let I;this.getAttributes=function(){return I===void 0&&B(this),I};let D=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return D===!1&&(D=a.getProgramParameter(P,HM)),D},this.destroy=function(){r.releaseStatesOfProgram(this),a.deleteProgram(P),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=VM++,this.cacheKey=e,this.usedTimes=1,this.program=P,this.vertexShader=Q,this.fragmentShader=O,this}let l2=0;class c2{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,r=e.fragmentShader,a=this._getShaderStage(n),c=this._getShaderStage(r),u=this._getShaderCacheForMaterial(e);return u.has(a)===!1&&(u.add(a),a.usedTimes++),u.has(c)===!1&&(u.add(c),c.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const r of n)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let r=n.get(e);return r===void 0&&(r=new Set,n.set(e,r)),r}_getShaderStage(e){const n=this.shaderCache;let r=n.get(e);return r===void 0&&(r=new u2(e),n.set(e,r)),r}}class u2{constructor(e){this.id=l2++,this.code=e,this.usedTimes=0}}function d2(s,e,n,r,a,c,u){const f=new Lg,p=new c2,g=new Set,_=[],x=a.logarithmicDepthBuffer,y=a.vertexTextures;let E=a.precision;const T={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function P(I){return g.add(I),I===0?"uv":`uv${I}`}function S(I,D,G,ae,ie){const ve=ae.fog,ge=ie.geometry,de=I.isMeshStandardMaterial?ae.environment:null,pe=(I.isMeshStandardMaterial?n:e).get(I.envMap||de),j=pe&&pe.mapping===nc?pe.image.height:null,me=T[I.type];I.precision!==null&&(E=a.getMaxPrecision(I.precision),E!==I.precision&&console.warn("THREE.WebGLProgram.getParameters:",I.precision,"not supported, using",E,"instead."));const C=ge.morphAttributes.position||ge.morphAttributes.normal||ge.morphAttributes.color,M=C!==void 0?C.length:0;let k=0;ge.morphAttributes.position!==void 0&&(k=1),ge.morphAttributes.normal!==void 0&&(k=2),ge.morphAttributes.color!==void 0&&(k=3);let J,z,W,te;if(me){const ze=Vi[me];J=ze.vertexShader,z=ze.fragmentShader}else J=I.vertexShader,z=I.fragmentShader,p.update(I),W=p.getVertexShaderID(I),te=p.getFragmentShaderID(I);const K=s.getRenderTarget(),ue=s.state.buffers.depth.getReversed(),he=ie.isInstancedMesh===!0,Me=ie.isBatchedMesh===!0,De=!!I.map,xe=!!I.matcap,Le=!!pe,H=!!I.aoMap,mt=!!I.lightMap,et=!!I.bumpMap,Ge=!!I.normalMap,He=!!I.displacementMap,ot=!!I.emissiveMap,Fe=!!I.metalnessMap,N=!!I.roughnessMap,b=I.anisotropy>0,ne=I.clearcoat>0,ye=I.dispersion>0,Ee=I.iridescence>0,_e=I.sheen>0,Xe=I.transmission>0,Ie=b&&!!I.anisotropyMap,Be=ne&&!!I.clearcoatMap,dt=ne&&!!I.clearcoatNormalMap,Ae=ne&&!!I.clearcoatRoughnessMap,Ve=Ee&&!!I.iridescenceMap,nt=Ee&&!!I.iridescenceThicknessMap,st=_e&&!!I.sheenColorMap,je=_e&&!!I.sheenRoughnessMap,xt=!!I.specularMap,ht=!!I.specularColorMap,Tt=!!I.specularIntensityMap,q=Xe&&!!I.transmissionMap,Ne=Xe&&!!I.thicknessMap,fe=!!I.gradientMap,Se=!!I.alphaMap,ke=I.alphaTest>0,Ue=!!I.alphaHash,ut=!!I.extensions;let It=jr;I.toneMapped&&(K===null||K.isXRRenderTarget===!0)&&(It=s.toneMapping);const Kt={shaderID:me,shaderType:I.type,shaderName:I.name,vertexShader:J,fragmentShader:z,defines:I.defines,customVertexShaderID:W,customFragmentShaderID:te,isRawShaderMaterial:I.isRawShaderMaterial===!0,glslVersion:I.glslVersion,precision:E,batching:Me,batchingColor:Me&&ie._colorsTexture!==null,instancing:he,instancingColor:he&&ie.instanceColor!==null,instancingMorph:he&&ie.morphTexture!==null,supportsVertexTextures:y,outputColorSpace:K===null?s.outputColorSpace:K.isXRRenderTarget===!0?K.texture.colorSpace:So,alphaToCoverage:!!I.alphaToCoverage,map:De,matcap:xe,envMap:Le,envMapMode:Le&&pe.mapping,envMapCubeUVHeight:j,aoMap:H,lightMap:mt,bumpMap:et,normalMap:Ge,displacementMap:y&&He,emissiveMap:ot,normalMapObjectSpace:Ge&&I.normalMapType===p_,normalMapTangentSpace:Ge&&I.normalMapType===h_,metalnessMap:Fe,roughnessMap:N,anisotropy:b,anisotropyMap:Ie,clearcoat:ne,clearcoatMap:Be,clearcoatNormalMap:dt,clearcoatRoughnessMap:Ae,dispersion:ye,iridescence:Ee,iridescenceMap:Ve,iridescenceThicknessMap:nt,sheen:_e,sheenColorMap:st,sheenRoughnessMap:je,specularMap:xt,specularColorMap:ht,specularIntensityMap:Tt,transmission:Xe,transmissionMap:q,thicknessMap:Ne,gradientMap:fe,opaque:I.transparent===!1&&I.blending===co&&I.alphaToCoverage===!1,alphaMap:Se,alphaTest:ke,alphaHash:Ue,combine:I.combine,mapUv:De&&P(I.map.channel),aoMapUv:H&&P(I.aoMap.channel),lightMapUv:mt&&P(I.lightMap.channel),bumpMapUv:et&&P(I.bumpMap.channel),normalMapUv:Ge&&P(I.normalMap.channel),displacementMapUv:He&&P(I.displacementMap.channel),emissiveMapUv:ot&&P(I.emissiveMap.channel),metalnessMapUv:Fe&&P(I.metalnessMap.channel),roughnessMapUv:N&&P(I.roughnessMap.channel),anisotropyMapUv:Ie&&P(I.anisotropyMap.channel),clearcoatMapUv:Be&&P(I.clearcoatMap.channel),clearcoatNormalMapUv:dt&&P(I.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ae&&P(I.clearcoatRoughnessMap.channel),iridescenceMapUv:Ve&&P(I.iridescenceMap.channel),iridescenceThicknessMapUv:nt&&P(I.iridescenceThicknessMap.channel),sheenColorMapUv:st&&P(I.sheenColorMap.channel),sheenRoughnessMapUv:je&&P(I.sheenRoughnessMap.channel),specularMapUv:xt&&P(I.specularMap.channel),specularColorMapUv:ht&&P(I.specularColorMap.channel),specularIntensityMapUv:Tt&&P(I.specularIntensityMap.channel),transmissionMapUv:q&&P(I.transmissionMap.channel),thicknessMapUv:Ne&&P(I.thicknessMap.channel),alphaMapUv:Se&&P(I.alphaMap.channel),vertexTangents:!!ge.attributes.tangent&&(Ge||b),vertexColors:I.vertexColors,vertexAlphas:I.vertexColors===!0&&!!ge.attributes.color&&ge.attributes.color.itemSize===4,pointsUvs:ie.isPoints===!0&&!!ge.attributes.uv&&(De||Se),fog:!!ve,useFog:I.fog===!0,fogExp2:!!ve&&ve.isFogExp2,flatShading:I.flatShading===!0,sizeAttenuation:I.sizeAttenuation===!0,logarithmicDepthBuffer:x,reverseDepthBuffer:ue,skinning:ie.isSkinnedMesh===!0,morphTargets:ge.morphAttributes.position!==void 0,morphNormals:ge.morphAttributes.normal!==void 0,morphColors:ge.morphAttributes.color!==void 0,morphTargetsCount:M,morphTextureStride:k,numDirLights:D.directional.length,numPointLights:D.point.length,numSpotLights:D.spot.length,numSpotLightMaps:D.spotLightMap.length,numRectAreaLights:D.rectArea.length,numHemiLights:D.hemi.length,numDirLightShadows:D.directionalShadowMap.length,numPointLightShadows:D.pointShadowMap.length,numSpotLightShadows:D.spotShadowMap.length,numSpotLightShadowsWithMaps:D.numSpotLightShadowsWithMaps,numLightProbes:D.numLightProbes,numClippingPlanes:u.numPlanes,numClipIntersection:u.numIntersection,dithering:I.dithering,shadowMapEnabled:s.shadowMap.enabled&&G.length>0,shadowMapType:s.shadowMap.type,toneMapping:It,decodeVideoTexture:De&&I.map.isVideoTexture===!0&&Ct.getTransfer(I.map.colorSpace)===zt,decodeVideoTextureEmissive:ot&&I.emissiveMap.isVideoTexture===!0&&Ct.getTransfer(I.emissiveMap.colorSpace)===zt,premultipliedAlpha:I.premultipliedAlpha,doubleSided:I.side===ar,flipSided:I.side===jn,useDepthPacking:I.depthPacking>=0,depthPacking:I.depthPacking||0,index0AttributeName:I.index0AttributeName,extensionClipCullDistance:ut&&I.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ut&&I.extensions.multiDraw===!0||Me)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:I.customProgramCacheKey()};return Kt.vertexUv1s=g.has(1),Kt.vertexUv2s=g.has(2),Kt.vertexUv3s=g.has(3),g.clear(),Kt}function v(I){const D=[];if(I.shaderID?D.push(I.shaderID):(D.push(I.customVertexShaderID),D.push(I.customFragmentShaderID)),I.defines!==void 0)for(const G in I.defines)D.push(G),D.push(I.defines[G]);return I.isRawShaderMaterial===!1&&(U(D,I),L(D,I),D.push(s.outputColorSpace)),D.push(I.customProgramCacheKey),D.join()}function U(I,D){I.push(D.precision),I.push(D.outputColorSpace),I.push(D.envMapMode),I.push(D.envMapCubeUVHeight),I.push(D.mapUv),I.push(D.alphaMapUv),I.push(D.lightMapUv),I.push(D.aoMapUv),I.push(D.bumpMapUv),I.push(D.normalMapUv),I.push(D.displacementMapUv),I.push(D.emissiveMapUv),I.push(D.metalnessMapUv),I.push(D.roughnessMapUv),I.push(D.anisotropyMapUv),I.push(D.clearcoatMapUv),I.push(D.clearcoatNormalMapUv),I.push(D.clearcoatRoughnessMapUv),I.push(D.iridescenceMapUv),I.push(D.iridescenceThicknessMapUv),I.push(D.sheenColorMapUv),I.push(D.sheenRoughnessMapUv),I.push(D.specularMapUv),I.push(D.specularColorMapUv),I.push(D.specularIntensityMapUv),I.push(D.transmissionMapUv),I.push(D.thicknessMapUv),I.push(D.combine),I.push(D.fogExp2),I.push(D.sizeAttenuation),I.push(D.morphTargetsCount),I.push(D.morphAttributeCount),I.push(D.numDirLights),I.push(D.numPointLights),I.push(D.numSpotLights),I.push(D.numSpotLightMaps),I.push(D.numHemiLights),I.push(D.numRectAreaLights),I.push(D.numDirLightShadows),I.push(D.numPointLightShadows),I.push(D.numSpotLightShadows),I.push(D.numSpotLightShadowsWithMaps),I.push(D.numLightProbes),I.push(D.shadowMapType),I.push(D.toneMapping),I.push(D.numClippingPlanes),I.push(D.numClipIntersection),I.push(D.depthPacking)}function L(I,D){f.disableAll(),D.supportsVertexTextures&&f.enable(0),D.instancing&&f.enable(1),D.instancingColor&&f.enable(2),D.instancingMorph&&f.enable(3),D.matcap&&f.enable(4),D.envMap&&f.enable(5),D.normalMapObjectSpace&&f.enable(6),D.normalMapTangentSpace&&f.enable(7),D.clearcoat&&f.enable(8),D.iridescence&&f.enable(9),D.alphaTest&&f.enable(10),D.vertexColors&&f.enable(11),D.vertexAlphas&&f.enable(12),D.vertexUv1s&&f.enable(13),D.vertexUv2s&&f.enable(14),D.vertexUv3s&&f.enable(15),D.vertexTangents&&f.enable(16),D.anisotropy&&f.enable(17),D.alphaHash&&f.enable(18),D.batching&&f.enable(19),D.dispersion&&f.enable(20),D.batchingColor&&f.enable(21),I.push(f.mask),f.disableAll(),D.fog&&f.enable(0),D.useFog&&f.enable(1),D.flatShading&&f.enable(2),D.logarithmicDepthBuffer&&f.enable(3),D.reverseDepthBuffer&&f.enable(4),D.skinning&&f.enable(5),D.morphTargets&&f.enable(6),D.morphNormals&&f.enable(7),D.morphColors&&f.enable(8),D.premultipliedAlpha&&f.enable(9),D.shadowMapEnabled&&f.enable(10),D.doubleSided&&f.enable(11),D.flipSided&&f.enable(12),D.useDepthPacking&&f.enable(13),D.dithering&&f.enable(14),D.transmission&&f.enable(15),D.sheen&&f.enable(16),D.opaque&&f.enable(17),D.pointsUvs&&f.enable(18),D.decodeVideoTexture&&f.enable(19),D.decodeVideoTextureEmissive&&f.enable(20),D.alphaToCoverage&&f.enable(21),I.push(f.mask)}function A(I){const D=T[I.type];let G;if(D){const ae=Vi[D];G=Y_.clone(ae.uniforms)}else G=I.uniforms;return G}function Q(I,D){let G;for(let ae=0,ie=_.length;ae<ie;ae++){const ve=_[ae];if(ve.cacheKey===D){G=ve,++G.usedTimes;break}}return G===void 0&&(G=new a2(s,D,I,c),_.push(G)),G}function O(I){if(--I.usedTimes===0){const D=_.indexOf(I);_[D]=_[_.length-1],_.pop(),I.destroy()}}function B(I){p.remove(I)}function Z(){p.dispose()}return{getParameters:S,getProgramCacheKey:v,getUniforms:A,acquireProgram:Q,releaseProgram:O,releaseShaderCache:B,programs:_,dispose:Z}}function f2(){let s=new WeakMap;function e(u){return s.has(u)}function n(u){let f=s.get(u);return f===void 0&&(f={},s.set(u,f)),f}function r(u){s.delete(u)}function a(u,f,p){s.get(u)[f]=p}function c(){s=new WeakMap}return{has:e,get:n,remove:r,update:a,dispose:c}}function h2(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function og(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function ag(){const s=[];let e=0;const n=[],r=[],a=[];function c(){e=0,n.length=0,r.length=0,a.length=0}function u(x,y,E,T,P,S){let v=s[e];return v===void 0?(v={id:x.id,object:x,geometry:y,material:E,groupOrder:T,renderOrder:x.renderOrder,z:P,group:S},s[e]=v):(v.id=x.id,v.object=x,v.geometry=y,v.material=E,v.groupOrder=T,v.renderOrder=x.renderOrder,v.z=P,v.group=S),e++,v}function f(x,y,E,T,P,S){const v=u(x,y,E,T,P,S);E.transmission>0?r.push(v):E.transparent===!0?a.push(v):n.push(v)}function p(x,y,E,T,P,S){const v=u(x,y,E,T,P,S);E.transmission>0?r.unshift(v):E.transparent===!0?a.unshift(v):n.unshift(v)}function g(x,y){n.length>1&&n.sort(x||h2),r.length>1&&r.sort(y||og),a.length>1&&a.sort(y||og)}function _(){for(let x=e,y=s.length;x<y;x++){const E=s[x];if(E.id===null)break;E.id=null,E.object=null,E.geometry=null,E.material=null,E.group=null}}return{opaque:n,transmissive:r,transparent:a,init:c,push:f,unshift:p,finish:_,sort:g}}function p2(){let s=new WeakMap;function e(r,a){const c=s.get(r);let u;return c===void 0?(u=new ag,s.set(r,[u])):a>=c.length?(u=new ag,c.push(u)):u=c[a],u}function n(){s=new WeakMap}return{get:e,dispose:n}}function m2(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new ce,color:new Ot};break;case"SpotLight":n={position:new ce,direction:new ce,color:new Ot,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new ce,color:new Ot,distance:0,decay:0};break;case"HemisphereLight":n={direction:new ce,skyColor:new Ot,groundColor:new Ot};break;case"RectAreaLight":n={color:new Ot,position:new ce,halfWidth:new ce,halfHeight:new ce};break}return s[e.id]=n,n}}}function g2(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Lt};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Lt};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Lt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=n,n}}}let v2=0;function x2(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function _2(s){const e=new m2,n=g2(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let g=0;g<9;g++)r.probe.push(new ce);const a=new ce,c=new rn,u=new rn;function f(g){let _=0,x=0,y=0;for(let I=0;I<9;I++)r.probe[I].set(0,0,0);let E=0,T=0,P=0,S=0,v=0,U=0,L=0,A=0,Q=0,O=0,B=0;g.sort(x2);for(let I=0,D=g.length;I<D;I++){const G=g[I],ae=G.color,ie=G.intensity,ve=G.distance,ge=G.shadow&&G.shadow.map?G.shadow.map.texture:null;if(G.isAmbientLight)_+=ae.r*ie,x+=ae.g*ie,y+=ae.b*ie;else if(G.isLightProbe){for(let de=0;de<9;de++)r.probe[de].addScaledVector(G.sh.coefficients[de],ie);B++}else if(G.isDirectionalLight){const de=e.get(G);if(de.color.copy(G.color).multiplyScalar(G.intensity),G.castShadow){const pe=G.shadow,j=n.get(G);j.shadowIntensity=pe.intensity,j.shadowBias=pe.bias,j.shadowNormalBias=pe.normalBias,j.shadowRadius=pe.radius,j.shadowMapSize=pe.mapSize,r.directionalShadow[E]=j,r.directionalShadowMap[E]=ge,r.directionalShadowMatrix[E]=G.shadow.matrix,U++}r.directional[E]=de,E++}else if(G.isSpotLight){const de=e.get(G);de.position.setFromMatrixPosition(G.matrixWorld),de.color.copy(ae).multiplyScalar(ie),de.distance=ve,de.coneCos=Math.cos(G.angle),de.penumbraCos=Math.cos(G.angle*(1-G.penumbra)),de.decay=G.decay,r.spot[P]=de;const pe=G.shadow;if(G.map&&(r.spotLightMap[Q]=G.map,Q++,pe.updateMatrices(G),G.castShadow&&O++),r.spotLightMatrix[P]=pe.matrix,G.castShadow){const j=n.get(G);j.shadowIntensity=pe.intensity,j.shadowBias=pe.bias,j.shadowNormalBias=pe.normalBias,j.shadowRadius=pe.radius,j.shadowMapSize=pe.mapSize,r.spotShadow[P]=j,r.spotShadowMap[P]=ge,A++}P++}else if(G.isRectAreaLight){const de=e.get(G);de.color.copy(ae).multiplyScalar(ie),de.halfWidth.set(G.width*.5,0,0),de.halfHeight.set(0,G.height*.5,0),r.rectArea[S]=de,S++}else if(G.isPointLight){const de=e.get(G);if(de.color.copy(G.color).multiplyScalar(G.intensity),de.distance=G.distance,de.decay=G.decay,G.castShadow){const pe=G.shadow,j=n.get(G);j.shadowIntensity=pe.intensity,j.shadowBias=pe.bias,j.shadowNormalBias=pe.normalBias,j.shadowRadius=pe.radius,j.shadowMapSize=pe.mapSize,j.shadowCameraNear=pe.camera.near,j.shadowCameraFar=pe.camera.far,r.pointShadow[T]=j,r.pointShadowMap[T]=ge,r.pointShadowMatrix[T]=G.shadow.matrix,L++}r.point[T]=de,T++}else if(G.isHemisphereLight){const de=e.get(G);de.skyColor.copy(G.color).multiplyScalar(ie),de.groundColor.copy(G.groundColor).multiplyScalar(ie),r.hemi[v]=de,v++}}S>0&&(s.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Oe.LTC_FLOAT_1,r.rectAreaLTC2=Oe.LTC_FLOAT_2):(r.rectAreaLTC1=Oe.LTC_HALF_1,r.rectAreaLTC2=Oe.LTC_HALF_2)),r.ambient[0]=_,r.ambient[1]=x,r.ambient[2]=y;const Z=r.hash;(Z.directionalLength!==E||Z.pointLength!==T||Z.spotLength!==P||Z.rectAreaLength!==S||Z.hemiLength!==v||Z.numDirectionalShadows!==U||Z.numPointShadows!==L||Z.numSpotShadows!==A||Z.numSpotMaps!==Q||Z.numLightProbes!==B)&&(r.directional.length=E,r.spot.length=P,r.rectArea.length=S,r.point.length=T,r.hemi.length=v,r.directionalShadow.length=U,r.directionalShadowMap.length=U,r.pointShadow.length=L,r.pointShadowMap.length=L,r.spotShadow.length=A,r.spotShadowMap.length=A,r.directionalShadowMatrix.length=U,r.pointShadowMatrix.length=L,r.spotLightMatrix.length=A+Q-O,r.spotLightMap.length=Q,r.numSpotLightShadowsWithMaps=O,r.numLightProbes=B,Z.directionalLength=E,Z.pointLength=T,Z.spotLength=P,Z.rectAreaLength=S,Z.hemiLength=v,Z.numDirectionalShadows=U,Z.numPointShadows=L,Z.numSpotShadows=A,Z.numSpotMaps=Q,Z.numLightProbes=B,r.version=v2++)}function p(g,_){let x=0,y=0,E=0,T=0,P=0;const S=_.matrixWorldInverse;for(let v=0,U=g.length;v<U;v++){const L=g[v];if(L.isDirectionalLight){const A=r.directional[x];A.direction.setFromMatrixPosition(L.matrixWorld),a.setFromMatrixPosition(L.target.matrixWorld),A.direction.sub(a),A.direction.transformDirection(S),x++}else if(L.isSpotLight){const A=r.spot[E];A.position.setFromMatrixPosition(L.matrixWorld),A.position.applyMatrix4(S),A.direction.setFromMatrixPosition(L.matrixWorld),a.setFromMatrixPosition(L.target.matrixWorld),A.direction.sub(a),A.direction.transformDirection(S),E++}else if(L.isRectAreaLight){const A=r.rectArea[T];A.position.setFromMatrixPosition(L.matrixWorld),A.position.applyMatrix4(S),u.identity(),c.copy(L.matrixWorld),c.premultiply(S),u.extractRotation(c),A.halfWidth.set(L.width*.5,0,0),A.halfHeight.set(0,L.height*.5,0),A.halfWidth.applyMatrix4(u),A.halfHeight.applyMatrix4(u),T++}else if(L.isPointLight){const A=r.point[y];A.position.setFromMatrixPosition(L.matrixWorld),A.position.applyMatrix4(S),y++}else if(L.isHemisphereLight){const A=r.hemi[P];A.direction.setFromMatrixPosition(L.matrixWorld),A.direction.transformDirection(S),P++}}}return{setup:f,setupView:p,state:r}}function lg(s){const e=new _2(s),n=[],r=[];function a(_){g.camera=_,n.length=0,r.length=0}function c(_){n.push(_)}function u(_){r.push(_)}function f(){e.setup(n)}function p(_){e.setupView(n,_)}const g={lightsArray:n,shadowsArray:r,camera:null,lights:e,transmissionRenderTarget:{}};return{init:a,state:g,setupLights:f,setupLightsView:p,pushLight:c,pushShadow:u}}function y2(s){let e=new WeakMap;function n(a,c=0){const u=e.get(a);let f;return u===void 0?(f=new lg(s),e.set(a,[f])):c>=u.length?(f=new lg(s),u.push(f)):f=u[c],f}function r(){e=new WeakMap}return{get:n,dispose:r}}class S2 extends rc{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=d_,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class M2 extends rc{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const E2=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,w2=`uniform sampler2D shadow_pass;
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
}`;function T2(s,e,n){let r=new Bg;const a=new Lt,c=new Lt,u=new en,f=new S2({depthPacking:f_}),p=new M2,g={},_=n.maxTextureSize,x={[Xr]:jn,[jn]:Xr,[ar]:ar},y=new Vn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Lt},radius:{value:4}},vertexShader:E2,fragmentShader:w2}),E=y.clone();E.defines.HORIZONTAL_PASS=1;const T=new hr;T.setAttribute("position",new Ni(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const P=new Cn(T,y),S=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=gg;let v=this.type;this.render=function(O,B,Z){if(S.enabled===!1||S.autoUpdate===!1&&S.needsUpdate===!1||O.length===0)return;const I=s.getRenderTarget(),D=s.getActiveCubeFace(),G=s.getActiveMipmapLevel(),ae=s.state;ae.setBlending(Vr),ae.buffers.color.setClear(1,1,1,1),ae.buffers.depth.setTest(!0),ae.setScissorTest(!1);const ie=v!==or&&this.type===or,ve=v===or&&this.type!==or;for(let ge=0,de=O.length;ge<de;ge++){const pe=O[ge],j=pe.shadow;if(j===void 0){console.warn("THREE.WebGLShadowMap:",pe,"has no shadow.");continue}if(j.autoUpdate===!1&&j.needsUpdate===!1)continue;a.copy(j.mapSize);const me=j.getFrameExtents();if(a.multiply(me),c.copy(j.mapSize),(a.x>_||a.y>_)&&(a.x>_&&(c.x=Math.floor(_/me.x),a.x=c.x*me.x,j.mapSize.x=c.x),a.y>_&&(c.y=Math.floor(_/me.y),a.y=c.y*me.y,j.mapSize.y=c.y)),j.map===null||ie===!0||ve===!0){const M=this.type!==or?{minFilter:Jn,magFilter:Jn}:{};j.map!==null&&j.map.dispose(),j.map=new Ii(a.x,a.y,M),j.map.texture.name=pe.name+".shadowMap",j.camera.updateProjectionMatrix()}s.setRenderTarget(j.map),s.clear();const C=j.getViewportCount();for(let M=0;M<C;M++){const k=j.getViewport(M);u.set(c.x*k.x,c.y*k.y,c.x*k.z,c.y*k.w),ae.viewport(u),j.updateMatrices(pe,M),r=j.getFrustum(),A(B,Z,j.camera,pe,this.type)}j.isPointLightShadow!==!0&&this.type===or&&U(j,Z),j.needsUpdate=!1}v=this.type,S.needsUpdate=!1,s.setRenderTarget(I,D,G)};function U(O,B){const Z=e.update(P);y.defines.VSM_SAMPLES!==O.blurSamples&&(y.defines.VSM_SAMPLES=O.blurSamples,E.defines.VSM_SAMPLES=O.blurSamples,y.needsUpdate=!0,E.needsUpdate=!0),O.mapPass===null&&(O.mapPass=new Ii(a.x,a.y)),y.uniforms.shadow_pass.value=O.map.texture,y.uniforms.resolution.value=O.mapSize,y.uniforms.radius.value=O.radius,s.setRenderTarget(O.mapPass),s.clear(),s.renderBufferDirect(B,null,Z,y,P,null),E.uniforms.shadow_pass.value=O.mapPass.texture,E.uniforms.resolution.value=O.mapSize,E.uniforms.radius.value=O.radius,s.setRenderTarget(O.map),s.clear(),s.renderBufferDirect(B,null,Z,E,P,null)}function L(O,B,Z,I){let D=null;const G=Z.isPointLight===!0?O.customDistanceMaterial:O.customDepthMaterial;if(G!==void 0)D=G;else if(D=Z.isPointLight===!0?p:f,s.localClippingEnabled&&B.clipShadows===!0&&Array.isArray(B.clippingPlanes)&&B.clippingPlanes.length!==0||B.displacementMap&&B.displacementScale!==0||B.alphaMap&&B.alphaTest>0||B.map&&B.alphaTest>0){const ae=D.uuid,ie=B.uuid;let ve=g[ae];ve===void 0&&(ve={},g[ae]=ve);let ge=ve[ie];ge===void 0&&(ge=D.clone(),ve[ie]=ge,B.addEventListener("dispose",Q)),D=ge}if(D.visible=B.visible,D.wireframe=B.wireframe,I===or?D.side=B.shadowSide!==null?B.shadowSide:B.side:D.side=B.shadowSide!==null?B.shadowSide:x[B.side],D.alphaMap=B.alphaMap,D.alphaTest=B.alphaTest,D.map=B.map,D.clipShadows=B.clipShadows,D.clippingPlanes=B.clippingPlanes,D.clipIntersection=B.clipIntersection,D.displacementMap=B.displacementMap,D.displacementScale=B.displacementScale,D.displacementBias=B.displacementBias,D.wireframeLinewidth=B.wireframeLinewidth,D.linewidth=B.linewidth,Z.isPointLight===!0&&D.isMeshDistanceMaterial===!0){const ae=s.properties.get(D);ae.light=Z}return D}function A(O,B,Z,I,D){if(O.visible===!1)return;if(O.layers.test(B.layers)&&(O.isMesh||O.isLine||O.isPoints)&&(O.castShadow||O.receiveShadow&&D===or)&&(!O.frustumCulled||r.intersectsObject(O))){O.modelViewMatrix.multiplyMatrices(Z.matrixWorldInverse,O.matrixWorld);const ie=e.update(O),ve=O.material;if(Array.isArray(ve)){const ge=ie.groups;for(let de=0,pe=ge.length;de<pe;de++){const j=ge[de],me=ve[j.materialIndex];if(me&&me.visible){const C=L(O,me,I,D);O.onBeforeShadow(s,O,B,Z,ie,C,j),s.renderBufferDirect(Z,null,ie,C,O,j),O.onAfterShadow(s,O,B,Z,ie,C,j)}}}else if(ve.visible){const ge=L(O,ve,I,D);O.onBeforeShadow(s,O,B,Z,ie,ge,null),s.renderBufferDirect(Z,null,ie,ge,O,null),O.onAfterShadow(s,O,B,Z,ie,ge,null)}}const ae=O.children;for(let ie=0,ve=ae.length;ie<ve;ie++)A(ae[ie],B,Z,I,D)}function Q(O){O.target.removeEventListener("dispose",Q);for(const Z in g){const I=g[Z],D=O.target.uuid;D in I&&(I[D].dispose(),delete I[D])}}}const b2={[bd]:Cd,[Ad]:Dd,[Rd]:Ld,[ho]:Pd,[Cd]:bd,[Dd]:Ad,[Ld]:Rd,[Pd]:ho};function C2(s,e){function n(){let q=!1;const Ne=new en;let fe=null;const Se=new en(0,0,0,0);return{setMask:function(ke){fe!==ke&&!q&&(s.colorMask(ke,ke,ke,ke),fe=ke)},setLocked:function(ke){q=ke},setClear:function(ke,Ue,ut,It,Kt){Kt===!0&&(ke*=It,Ue*=It,ut*=It),Ne.set(ke,Ue,ut,It),Se.equals(Ne)===!1&&(s.clearColor(ke,Ue,ut,It),Se.copy(Ne))},reset:function(){q=!1,fe=null,Se.set(-1,0,0,0)}}}function r(){let q=!1,Ne=!1,fe=null,Se=null,ke=null;return{setReversed:function(Ue){if(Ne!==Ue){const ut=e.get("EXT_clip_control");Ne?ut.clipControlEXT(ut.LOWER_LEFT_EXT,ut.ZERO_TO_ONE_EXT):ut.clipControlEXT(ut.LOWER_LEFT_EXT,ut.NEGATIVE_ONE_TO_ONE_EXT);const It=ke;ke=null,this.setClear(It)}Ne=Ue},getReversed:function(){return Ne},setTest:function(Ue){Ue?K(s.DEPTH_TEST):ue(s.DEPTH_TEST)},setMask:function(Ue){fe!==Ue&&!q&&(s.depthMask(Ue),fe=Ue)},setFunc:function(Ue){if(Ne&&(Ue=b2[Ue]),Se!==Ue){switch(Ue){case bd:s.depthFunc(s.NEVER);break;case Cd:s.depthFunc(s.ALWAYS);break;case Ad:s.depthFunc(s.LESS);break;case ho:s.depthFunc(s.LEQUAL);break;case Rd:s.depthFunc(s.EQUAL);break;case Pd:s.depthFunc(s.GEQUAL);break;case Dd:s.depthFunc(s.GREATER);break;case Ld:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}Se=Ue}},setLocked:function(Ue){q=Ue},setClear:function(Ue){ke!==Ue&&(Ne&&(Ue=1-Ue),s.clearDepth(Ue),ke=Ue)},reset:function(){q=!1,fe=null,Se=null,ke=null,Ne=!1}}}function a(){let q=!1,Ne=null,fe=null,Se=null,ke=null,Ue=null,ut=null,It=null,Kt=null;return{setTest:function(ze){q||(ze?K(s.STENCIL_TEST):ue(s.STENCIL_TEST))},setMask:function(ze){Ne!==ze&&!q&&(s.stencilMask(ze),Ne=ze)},setFunc:function(ze,at,_t){(fe!==ze||Se!==at||ke!==_t)&&(s.stencilFunc(ze,at,_t),fe=ze,Se=at,ke=_t)},setOp:function(ze,at,_t){(Ue!==ze||ut!==at||It!==_t)&&(s.stencilOp(ze,at,_t),Ue=ze,ut=at,It=_t)},setLocked:function(ze){q=ze},setClear:function(ze){Kt!==ze&&(s.clearStencil(ze),Kt=ze)},reset:function(){q=!1,Ne=null,fe=null,Se=null,ke=null,Ue=null,ut=null,It=null,Kt=null}}}const c=new n,u=new r,f=new a,p=new WeakMap,g=new WeakMap;let _={},x={},y=new WeakMap,E=[],T=null,P=!1,S=null,v=null,U=null,L=null,A=null,Q=null,O=null,B=new Ot(0,0,0),Z=0,I=!1,D=null,G=null,ae=null,ie=null,ve=null;const ge=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let de=!1,pe=0;const j=s.getParameter(s.VERSION);j.indexOf("WebGL")!==-1?(pe=parseFloat(/^WebGL (\d)/.exec(j)[1]),de=pe>=1):j.indexOf("OpenGL ES")!==-1&&(pe=parseFloat(/^OpenGL ES (\d)/.exec(j)[1]),de=pe>=2);let me=null,C={};const M=s.getParameter(s.SCISSOR_BOX),k=s.getParameter(s.VIEWPORT),J=new en().fromArray(M),z=new en().fromArray(k);function W(q,Ne,fe,Se){const ke=new Uint8Array(4),Ue=s.createTexture();s.bindTexture(q,Ue),s.texParameteri(q,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(q,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let ut=0;ut<fe;ut++)q===s.TEXTURE_3D||q===s.TEXTURE_2D_ARRAY?s.texImage3D(Ne,0,s.RGBA,1,1,Se,0,s.RGBA,s.UNSIGNED_BYTE,ke):s.texImage2D(Ne+ut,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,ke);return Ue}const te={};te[s.TEXTURE_2D]=W(s.TEXTURE_2D,s.TEXTURE_2D,1),te[s.TEXTURE_CUBE_MAP]=W(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),te[s.TEXTURE_2D_ARRAY]=W(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),te[s.TEXTURE_3D]=W(s.TEXTURE_3D,s.TEXTURE_3D,1,1),c.setClear(0,0,0,1),u.setClear(1),f.setClear(0),K(s.DEPTH_TEST),u.setFunc(ho),et(!1),Ge(hm),K(s.CULL_FACE),H(Vr);function K(q){_[q]!==!0&&(s.enable(q),_[q]=!0)}function ue(q){_[q]!==!1&&(s.disable(q),_[q]=!1)}function he(q,Ne){return x[q]!==Ne?(s.bindFramebuffer(q,Ne),x[q]=Ne,q===s.DRAW_FRAMEBUFFER&&(x[s.FRAMEBUFFER]=Ne),q===s.FRAMEBUFFER&&(x[s.DRAW_FRAMEBUFFER]=Ne),!0):!1}function Me(q,Ne){let fe=E,Se=!1;if(q){fe=y.get(Ne),fe===void 0&&(fe=[],y.set(Ne,fe));const ke=q.textures;if(fe.length!==ke.length||fe[0]!==s.COLOR_ATTACHMENT0){for(let Ue=0,ut=ke.length;Ue<ut;Ue++)fe[Ue]=s.COLOR_ATTACHMENT0+Ue;fe.length=ke.length,Se=!0}}else fe[0]!==s.BACK&&(fe[0]=s.BACK,Se=!0);Se&&s.drawBuffers(fe)}function De(q){return T!==q?(s.useProgram(q),T=q,!0):!1}const xe={[ms]:s.FUNC_ADD,[kx]:s.FUNC_SUBTRACT,[Ox]:s.FUNC_REVERSE_SUBTRACT};xe[Bx]=s.MIN,xe[Hx]=s.MAX;const Le={[Vx]:s.ZERO,[jx]:s.ONE,[Gx]:s.SRC_COLOR,[wd]:s.SRC_ALPHA,[Kx]:s.SRC_ALPHA_SATURATE,[Yx]:s.DST_COLOR,[Xx]:s.DST_ALPHA,[Wx]:s.ONE_MINUS_SRC_COLOR,[Td]:s.ONE_MINUS_SRC_ALPHA,[$x]:s.ONE_MINUS_DST_COLOR,[qx]:s.ONE_MINUS_DST_ALPHA,[Zx]:s.CONSTANT_COLOR,[Qx]:s.ONE_MINUS_CONSTANT_COLOR,[Jx]:s.CONSTANT_ALPHA,[e_]:s.ONE_MINUS_CONSTANT_ALPHA};function H(q,Ne,fe,Se,ke,Ue,ut,It,Kt,ze){if(q===Vr){P===!0&&(ue(s.BLEND),P=!1);return}if(P===!1&&(K(s.BLEND),P=!0),q!==zx){if(q!==S||ze!==I){if((v!==ms||A!==ms)&&(s.blendEquation(s.FUNC_ADD),v=ms,A=ms),ze)switch(q){case co:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case pm:s.blendFunc(s.ONE,s.ONE);break;case mm:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case gm:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",q);break}else switch(q){case co:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case pm:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case mm:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case gm:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",q);break}U=null,L=null,Q=null,O=null,B.set(0,0,0),Z=0,S=q,I=ze}return}ke=ke||Ne,Ue=Ue||fe,ut=ut||Se,(Ne!==v||ke!==A)&&(s.blendEquationSeparate(xe[Ne],xe[ke]),v=Ne,A=ke),(fe!==U||Se!==L||Ue!==Q||ut!==O)&&(s.blendFuncSeparate(Le[fe],Le[Se],Le[Ue],Le[ut]),U=fe,L=Se,Q=Ue,O=ut),(It.equals(B)===!1||Kt!==Z)&&(s.blendColor(It.r,It.g,It.b,Kt),B.copy(It),Z=Kt),S=q,I=!1}function mt(q,Ne){q.side===ar?ue(s.CULL_FACE):K(s.CULL_FACE);let fe=q.side===jn;Ne&&(fe=!fe),et(fe),q.blending===co&&q.transparent===!1?H(Vr):H(q.blending,q.blendEquation,q.blendSrc,q.blendDst,q.blendEquationAlpha,q.blendSrcAlpha,q.blendDstAlpha,q.blendColor,q.blendAlpha,q.premultipliedAlpha),u.setFunc(q.depthFunc),u.setTest(q.depthTest),u.setMask(q.depthWrite),c.setMask(q.colorWrite);const Se=q.stencilWrite;f.setTest(Se),Se&&(f.setMask(q.stencilWriteMask),f.setFunc(q.stencilFunc,q.stencilRef,q.stencilFuncMask),f.setOp(q.stencilFail,q.stencilZFail,q.stencilZPass)),ot(q.polygonOffset,q.polygonOffsetFactor,q.polygonOffsetUnits),q.alphaToCoverage===!0?K(s.SAMPLE_ALPHA_TO_COVERAGE):ue(s.SAMPLE_ALPHA_TO_COVERAGE)}function et(q){D!==q&&(q?s.frontFace(s.CW):s.frontFace(s.CCW),D=q)}function Ge(q){q!==Nx?(K(s.CULL_FACE),q!==G&&(q===hm?s.cullFace(s.BACK):q===Ux?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):ue(s.CULL_FACE),G=q}function He(q){q!==ae&&(de&&s.lineWidth(q),ae=q)}function ot(q,Ne,fe){q?(K(s.POLYGON_OFFSET_FILL),(ie!==Ne||ve!==fe)&&(s.polygonOffset(Ne,fe),ie=Ne,ve=fe)):ue(s.POLYGON_OFFSET_FILL)}function Fe(q){q?K(s.SCISSOR_TEST):ue(s.SCISSOR_TEST)}function N(q){q===void 0&&(q=s.TEXTURE0+ge-1),me!==q&&(s.activeTexture(q),me=q)}function b(q,Ne,fe){fe===void 0&&(me===null?fe=s.TEXTURE0+ge-1:fe=me);let Se=C[fe];Se===void 0&&(Se={type:void 0,texture:void 0},C[fe]=Se),(Se.type!==q||Se.texture!==Ne)&&(me!==fe&&(s.activeTexture(fe),me=fe),s.bindTexture(q,Ne||te[q]),Se.type=q,Se.texture=Ne)}function ne(){const q=C[me];q!==void 0&&q.type!==void 0&&(s.bindTexture(q.type,null),q.type=void 0,q.texture=void 0)}function ye(){try{s.compressedTexImage2D.apply(s,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function Ee(){try{s.compressedTexImage3D.apply(s,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function _e(){try{s.texSubImage2D.apply(s,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function Xe(){try{s.texSubImage3D.apply(s,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function Ie(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function Be(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function dt(){try{s.texStorage2D.apply(s,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function Ae(){try{s.texStorage3D.apply(s,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function Ve(){try{s.texImage2D.apply(s,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function nt(){try{s.texImage3D.apply(s,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function st(q){J.equals(q)===!1&&(s.scissor(q.x,q.y,q.z,q.w),J.copy(q))}function je(q){z.equals(q)===!1&&(s.viewport(q.x,q.y,q.z,q.w),z.copy(q))}function xt(q,Ne){let fe=g.get(Ne);fe===void 0&&(fe=new WeakMap,g.set(Ne,fe));let Se=fe.get(q);Se===void 0&&(Se=s.getUniformBlockIndex(Ne,q.name),fe.set(q,Se))}function ht(q,Ne){const Se=g.get(Ne).get(q);p.get(Ne)!==Se&&(s.uniformBlockBinding(Ne,Se,q.__bindingPointIndex),p.set(Ne,Se))}function Tt(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),u.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),_={},me=null,C={},x={},y=new WeakMap,E=[],T=null,P=!1,S=null,v=null,U=null,L=null,A=null,Q=null,O=null,B=new Ot(0,0,0),Z=0,I=!1,D=null,G=null,ae=null,ie=null,ve=null,J.set(0,0,s.canvas.width,s.canvas.height),z.set(0,0,s.canvas.width,s.canvas.height),c.reset(),u.reset(),f.reset()}return{buffers:{color:c,depth:u,stencil:f},enable:K,disable:ue,bindFramebuffer:he,drawBuffers:Me,useProgram:De,setBlending:H,setMaterial:mt,setFlipSided:et,setCullFace:Ge,setLineWidth:He,setPolygonOffset:ot,setScissorTest:Fe,activeTexture:N,bindTexture:b,unbindTexture:ne,compressedTexImage2D:ye,compressedTexImage3D:Ee,texImage2D:Ve,texImage3D:nt,updateUBOMapping:xt,uniformBlockBinding:ht,texStorage2D:dt,texStorage3D:Ae,texSubImage2D:_e,texSubImage3D:Xe,compressedTexSubImage2D:Ie,compressedTexSubImage3D:Be,scissor:st,viewport:je,reset:Tt}}function cg(s,e,n,r){const a=A2(r);switch(n){case Mg:return s*e;case wg:return s*e;case Tg:return s*e*2;case Ef:return s*e/a.components*a.byteLength;case wf:return s*e/a.components*a.byteLength;case bg:return s*e*2/a.components*a.byteLength;case Tf:return s*e*2/a.components*a.byteLength;case Eg:return s*e*3/a.components*a.byteLength;case Li:return s*e*4/a.components*a.byteLength;case bf:return s*e*4/a.components*a.byteLength;case Yl:case $l:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Kl:case Zl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case kd:case Bd:return Math.max(s,16)*Math.max(e,8)/4;case zd:case Od:return Math.max(s,8)*Math.max(e,8)/2;case Hd:case Vd:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case jd:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Gd:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Wd:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case Xd:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case qd:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case Yd:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case $d:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case Kd:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case Zd:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case Qd:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case Jd:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case ef:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case tf:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case nf:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case rf:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case Ql:case sf:case of:return Math.ceil(s/4)*Math.ceil(e/4)*16;case Cg:case af:return Math.ceil(s/4)*Math.ceil(e/4)*8;case lf:case cf:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function A2(s){switch(s){case Gi:case _g:return{byteLength:1,components:1};case pa:case yg:case yo:return{byteLength:2,components:1};case Sf:case Mf:return{byteLength:2,components:4};case Ss:case yf:case cr:return{byteLength:4,components:1};case Sg:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}function R2(s,e,n,r,a,c,u){const f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),g=new Lt,_=new WeakMap;let x;const y=new WeakMap;let E=!1;try{E=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function T(N,b){return E?new OffscreenCanvas(N,b):tc("canvas")}function P(N,b,ne){let ye=1;const Ee=Fe(N);if((Ee.width>ne||Ee.height>ne)&&(ye=ne/Math.max(Ee.width,Ee.height)),ye<1)if(typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&N instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&N instanceof ImageBitmap||typeof VideoFrame<"u"&&N instanceof VideoFrame){const _e=Math.floor(ye*Ee.width),Xe=Math.floor(ye*Ee.height);x===void 0&&(x=T(_e,Xe));const Ie=b?T(_e,Xe):x;return Ie.width=_e,Ie.height=Xe,Ie.getContext("2d").drawImage(N,0,0,_e,Xe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Ee.width+"x"+Ee.height+") to ("+_e+"x"+Xe+")."),Ie}else return"data"in N&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Ee.width+"x"+Ee.height+")."),N;return N}function S(N){return N.generateMipmaps}function v(N){s.generateMipmap(N)}function U(N){return N.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:N.isWebGL3DRenderTarget?s.TEXTURE_3D:N.isWebGLArrayRenderTarget||N.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function L(N,b,ne,ye,Ee=!1){if(N!==null){if(s[N]!==void 0)return s[N];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+N+"'")}let _e=b;if(b===s.RED&&(ne===s.FLOAT&&(_e=s.R32F),ne===s.HALF_FLOAT&&(_e=s.R16F),ne===s.UNSIGNED_BYTE&&(_e=s.R8)),b===s.RED_INTEGER&&(ne===s.UNSIGNED_BYTE&&(_e=s.R8UI),ne===s.UNSIGNED_SHORT&&(_e=s.R16UI),ne===s.UNSIGNED_INT&&(_e=s.R32UI),ne===s.BYTE&&(_e=s.R8I),ne===s.SHORT&&(_e=s.R16I),ne===s.INT&&(_e=s.R32I)),b===s.RG&&(ne===s.FLOAT&&(_e=s.RG32F),ne===s.HALF_FLOAT&&(_e=s.RG16F),ne===s.UNSIGNED_BYTE&&(_e=s.RG8)),b===s.RG_INTEGER&&(ne===s.UNSIGNED_BYTE&&(_e=s.RG8UI),ne===s.UNSIGNED_SHORT&&(_e=s.RG16UI),ne===s.UNSIGNED_INT&&(_e=s.RG32UI),ne===s.BYTE&&(_e=s.RG8I),ne===s.SHORT&&(_e=s.RG16I),ne===s.INT&&(_e=s.RG32I)),b===s.RGB_INTEGER&&(ne===s.UNSIGNED_BYTE&&(_e=s.RGB8UI),ne===s.UNSIGNED_SHORT&&(_e=s.RGB16UI),ne===s.UNSIGNED_INT&&(_e=s.RGB32UI),ne===s.BYTE&&(_e=s.RGB8I),ne===s.SHORT&&(_e=s.RGB16I),ne===s.INT&&(_e=s.RGB32I)),b===s.RGBA_INTEGER&&(ne===s.UNSIGNED_BYTE&&(_e=s.RGBA8UI),ne===s.UNSIGNED_SHORT&&(_e=s.RGBA16UI),ne===s.UNSIGNED_INT&&(_e=s.RGBA32UI),ne===s.BYTE&&(_e=s.RGBA8I),ne===s.SHORT&&(_e=s.RGBA16I),ne===s.INT&&(_e=s.RGBA32I)),b===s.RGB&&ne===s.UNSIGNED_INT_5_9_9_9_REV&&(_e=s.RGB9_E5),b===s.RGBA){const Xe=Ee?ic:Ct.getTransfer(ye);ne===s.FLOAT&&(_e=s.RGBA32F),ne===s.HALF_FLOAT&&(_e=s.RGBA16F),ne===s.UNSIGNED_BYTE&&(_e=Xe===zt?s.SRGB8_ALPHA8:s.RGBA8),ne===s.UNSIGNED_SHORT_4_4_4_4&&(_e=s.RGBA4),ne===s.UNSIGNED_SHORT_5_5_5_1&&(_e=s.RGB5_A1)}return(_e===s.R16F||_e===s.R32F||_e===s.RG16F||_e===s.RG32F||_e===s.RGBA16F||_e===s.RGBA32F)&&e.get("EXT_color_buffer_float"),_e}function A(N,b){let ne;return N?b===null||b===Ss||b===go?ne=s.DEPTH24_STENCIL8:b===cr?ne=s.DEPTH32F_STENCIL8:b===pa&&(ne=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===Ss||b===go?ne=s.DEPTH_COMPONENT24:b===cr?ne=s.DEPTH_COMPONENT32F:b===pa&&(ne=s.DEPTH_COMPONENT16),ne}function Q(N,b){return S(N)===!0||N.isFramebufferTexture&&N.minFilter!==Jn&&N.minFilter!==hi?Math.log2(Math.max(b.width,b.height))+1:N.mipmaps!==void 0&&N.mipmaps.length>0?N.mipmaps.length:N.isCompressedTexture&&Array.isArray(N.image)?b.mipmaps.length:1}function O(N){const b=N.target;b.removeEventListener("dispose",O),Z(b),b.isVideoTexture&&_.delete(b)}function B(N){const b=N.target;b.removeEventListener("dispose",B),D(b)}function Z(N){const b=r.get(N);if(b.__webglInit===void 0)return;const ne=N.source,ye=y.get(ne);if(ye){const Ee=ye[b.__cacheKey];Ee.usedTimes--,Ee.usedTimes===0&&I(N),Object.keys(ye).length===0&&y.delete(ne)}r.remove(N)}function I(N){const b=r.get(N);s.deleteTexture(b.__webglTexture);const ne=N.source,ye=y.get(ne);delete ye[b.__cacheKey],u.memory.textures--}function D(N){const b=r.get(N);if(N.depthTexture&&(N.depthTexture.dispose(),r.remove(N.depthTexture)),N.isWebGLCubeRenderTarget)for(let ye=0;ye<6;ye++){if(Array.isArray(b.__webglFramebuffer[ye]))for(let Ee=0;Ee<b.__webglFramebuffer[ye].length;Ee++)s.deleteFramebuffer(b.__webglFramebuffer[ye][Ee]);else s.deleteFramebuffer(b.__webglFramebuffer[ye]);b.__webglDepthbuffer&&s.deleteRenderbuffer(b.__webglDepthbuffer[ye])}else{if(Array.isArray(b.__webglFramebuffer))for(let ye=0;ye<b.__webglFramebuffer.length;ye++)s.deleteFramebuffer(b.__webglFramebuffer[ye]);else s.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&s.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&s.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let ye=0;ye<b.__webglColorRenderbuffer.length;ye++)b.__webglColorRenderbuffer[ye]&&s.deleteRenderbuffer(b.__webglColorRenderbuffer[ye]);b.__webglDepthRenderbuffer&&s.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const ne=N.textures;for(let ye=0,Ee=ne.length;ye<Ee;ye++){const _e=r.get(ne[ye]);_e.__webglTexture&&(s.deleteTexture(_e.__webglTexture),u.memory.textures--),r.remove(ne[ye])}r.remove(N)}let G=0;function ae(){G=0}function ie(){const N=G;return N>=a.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+N+" texture units while this GPU supports only "+a.maxTextures),G+=1,N}function ve(N){const b=[];return b.push(N.wrapS),b.push(N.wrapT),b.push(N.wrapR||0),b.push(N.magFilter),b.push(N.minFilter),b.push(N.anisotropy),b.push(N.internalFormat),b.push(N.format),b.push(N.type),b.push(N.generateMipmaps),b.push(N.premultiplyAlpha),b.push(N.flipY),b.push(N.unpackAlignment),b.push(N.colorSpace),b.join()}function ge(N,b){const ne=r.get(N);if(N.isVideoTexture&&He(N),N.isRenderTargetTexture===!1&&N.version>0&&ne.__version!==N.version){const ye=N.image;if(ye===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ye.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{z(ne,N,b);return}}n.bindTexture(s.TEXTURE_2D,ne.__webglTexture,s.TEXTURE0+b)}function de(N,b){const ne=r.get(N);if(N.version>0&&ne.__version!==N.version){z(ne,N,b);return}n.bindTexture(s.TEXTURE_2D_ARRAY,ne.__webglTexture,s.TEXTURE0+b)}function pe(N,b){const ne=r.get(N);if(N.version>0&&ne.__version!==N.version){z(ne,N,b);return}n.bindTexture(s.TEXTURE_3D,ne.__webglTexture,s.TEXTURE0+b)}function j(N,b){const ne=r.get(N);if(N.version>0&&ne.__version!==N.version){W(ne,N,b);return}n.bindTexture(s.TEXTURE_CUBE_MAP,ne.__webglTexture,s.TEXTURE0+b)}const me={[Ud]:s.REPEAT,[xs]:s.CLAMP_TO_EDGE,[Fd]:s.MIRRORED_REPEAT},C={[Jn]:s.NEAREST,[u_]:s.NEAREST_MIPMAP_NEAREST,[Sl]:s.NEAREST_MIPMAP_LINEAR,[hi]:s.LINEAR,[Gu]:s.LINEAR_MIPMAP_NEAREST,[_s]:s.LINEAR_MIPMAP_LINEAR},M={[m_]:s.NEVER,[S_]:s.ALWAYS,[g_]:s.LESS,[Ag]:s.LEQUAL,[v_]:s.EQUAL,[y_]:s.GEQUAL,[x_]:s.GREATER,[__]:s.NOTEQUAL};function k(N,b){if(b.type===cr&&e.has("OES_texture_float_linear")===!1&&(b.magFilter===hi||b.magFilter===Gu||b.magFilter===Sl||b.magFilter===_s||b.minFilter===hi||b.minFilter===Gu||b.minFilter===Sl||b.minFilter===_s)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(N,s.TEXTURE_WRAP_S,me[b.wrapS]),s.texParameteri(N,s.TEXTURE_WRAP_T,me[b.wrapT]),(N===s.TEXTURE_3D||N===s.TEXTURE_2D_ARRAY)&&s.texParameteri(N,s.TEXTURE_WRAP_R,me[b.wrapR]),s.texParameteri(N,s.TEXTURE_MAG_FILTER,C[b.magFilter]),s.texParameteri(N,s.TEXTURE_MIN_FILTER,C[b.minFilter]),b.compareFunction&&(s.texParameteri(N,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(N,s.TEXTURE_COMPARE_FUNC,M[b.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===Jn||b.minFilter!==Sl&&b.minFilter!==_s||b.type===cr&&e.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||r.get(b).__currentAnisotropy){const ne=e.get("EXT_texture_filter_anisotropic");s.texParameterf(N,ne.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,a.getMaxAnisotropy())),r.get(b).__currentAnisotropy=b.anisotropy}}}function J(N,b){let ne=!1;N.__webglInit===void 0&&(N.__webglInit=!0,b.addEventListener("dispose",O));const ye=b.source;let Ee=y.get(ye);Ee===void 0&&(Ee={},y.set(ye,Ee));const _e=ve(b);if(_e!==N.__cacheKey){Ee[_e]===void 0&&(Ee[_e]={texture:s.createTexture(),usedTimes:0},u.memory.textures++,ne=!0),Ee[_e].usedTimes++;const Xe=Ee[N.__cacheKey];Xe!==void 0&&(Ee[N.__cacheKey].usedTimes--,Xe.usedTimes===0&&I(b)),N.__cacheKey=_e,N.__webglTexture=Ee[_e].texture}return ne}function z(N,b,ne){let ye=s.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(ye=s.TEXTURE_2D_ARRAY),b.isData3DTexture&&(ye=s.TEXTURE_3D);const Ee=J(N,b),_e=b.source;n.bindTexture(ye,N.__webglTexture,s.TEXTURE0+ne);const Xe=r.get(_e);if(_e.version!==Xe.__version||Ee===!0){n.activeTexture(s.TEXTURE0+ne);const Ie=Ct.getPrimaries(Ct.workingColorSpace),Be=b.colorSpace===Br?null:Ct.getPrimaries(b.colorSpace),dt=b.colorSpace===Br||Ie===Be?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,b.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,b.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,dt);let Ae=P(b.image,!1,a.maxTextureSize);Ae=ot(b,Ae);const Ve=c.convert(b.format,b.colorSpace),nt=c.convert(b.type);let st=L(b.internalFormat,Ve,nt,b.colorSpace,b.isVideoTexture);k(ye,b);let je;const xt=b.mipmaps,ht=b.isVideoTexture!==!0,Tt=Xe.__version===void 0||Ee===!0,q=_e.dataReady,Ne=Q(b,Ae);if(b.isDepthTexture)st=A(b.format===vo,b.type),Tt&&(ht?n.texStorage2D(s.TEXTURE_2D,1,st,Ae.width,Ae.height):n.texImage2D(s.TEXTURE_2D,0,st,Ae.width,Ae.height,0,Ve,nt,null));else if(b.isDataTexture)if(xt.length>0){ht&&Tt&&n.texStorage2D(s.TEXTURE_2D,Ne,st,xt[0].width,xt[0].height);for(let fe=0,Se=xt.length;fe<Se;fe++)je=xt[fe],ht?q&&n.texSubImage2D(s.TEXTURE_2D,fe,0,0,je.width,je.height,Ve,nt,je.data):n.texImage2D(s.TEXTURE_2D,fe,st,je.width,je.height,0,Ve,nt,je.data);b.generateMipmaps=!1}else ht?(Tt&&n.texStorage2D(s.TEXTURE_2D,Ne,st,Ae.width,Ae.height),q&&n.texSubImage2D(s.TEXTURE_2D,0,0,0,Ae.width,Ae.height,Ve,nt,Ae.data)):n.texImage2D(s.TEXTURE_2D,0,st,Ae.width,Ae.height,0,Ve,nt,Ae.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){ht&&Tt&&n.texStorage3D(s.TEXTURE_2D_ARRAY,Ne,st,xt[0].width,xt[0].height,Ae.depth);for(let fe=0,Se=xt.length;fe<Se;fe++)if(je=xt[fe],b.format!==Li)if(Ve!==null)if(ht){if(q)if(b.layerUpdates.size>0){const ke=cg(je.width,je.height,b.format,b.type);for(const Ue of b.layerUpdates){const ut=je.data.subarray(Ue*ke/je.data.BYTES_PER_ELEMENT,(Ue+1)*ke/je.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,fe,0,0,Ue,je.width,je.height,1,Ve,ut)}b.clearLayerUpdates()}else n.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,fe,0,0,0,je.width,je.height,Ae.depth,Ve,je.data)}else n.compressedTexImage3D(s.TEXTURE_2D_ARRAY,fe,st,je.width,je.height,Ae.depth,0,je.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ht?q&&n.texSubImage3D(s.TEXTURE_2D_ARRAY,fe,0,0,0,je.width,je.height,Ae.depth,Ve,nt,je.data):n.texImage3D(s.TEXTURE_2D_ARRAY,fe,st,je.width,je.height,Ae.depth,0,Ve,nt,je.data)}else{ht&&Tt&&n.texStorage2D(s.TEXTURE_2D,Ne,st,xt[0].width,xt[0].height);for(let fe=0,Se=xt.length;fe<Se;fe++)je=xt[fe],b.format!==Li?Ve!==null?ht?q&&n.compressedTexSubImage2D(s.TEXTURE_2D,fe,0,0,je.width,je.height,Ve,je.data):n.compressedTexImage2D(s.TEXTURE_2D,fe,st,je.width,je.height,0,je.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ht?q&&n.texSubImage2D(s.TEXTURE_2D,fe,0,0,je.width,je.height,Ve,nt,je.data):n.texImage2D(s.TEXTURE_2D,fe,st,je.width,je.height,0,Ve,nt,je.data)}else if(b.isDataArrayTexture)if(ht){if(Tt&&n.texStorage3D(s.TEXTURE_2D_ARRAY,Ne,st,Ae.width,Ae.height,Ae.depth),q)if(b.layerUpdates.size>0){const fe=cg(Ae.width,Ae.height,b.format,b.type);for(const Se of b.layerUpdates){const ke=Ae.data.subarray(Se*fe/Ae.data.BYTES_PER_ELEMENT,(Se+1)*fe/Ae.data.BYTES_PER_ELEMENT);n.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,Se,Ae.width,Ae.height,1,Ve,nt,ke)}b.clearLayerUpdates()}else n.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,Ae.width,Ae.height,Ae.depth,Ve,nt,Ae.data)}else n.texImage3D(s.TEXTURE_2D_ARRAY,0,st,Ae.width,Ae.height,Ae.depth,0,Ve,nt,Ae.data);else if(b.isData3DTexture)ht?(Tt&&n.texStorage3D(s.TEXTURE_3D,Ne,st,Ae.width,Ae.height,Ae.depth),q&&n.texSubImage3D(s.TEXTURE_3D,0,0,0,0,Ae.width,Ae.height,Ae.depth,Ve,nt,Ae.data)):n.texImage3D(s.TEXTURE_3D,0,st,Ae.width,Ae.height,Ae.depth,0,Ve,nt,Ae.data);else if(b.isFramebufferTexture){if(Tt)if(ht)n.texStorage2D(s.TEXTURE_2D,Ne,st,Ae.width,Ae.height);else{let fe=Ae.width,Se=Ae.height;for(let ke=0;ke<Ne;ke++)n.texImage2D(s.TEXTURE_2D,ke,st,fe,Se,0,Ve,nt,null),fe>>=1,Se>>=1}}else if(xt.length>0){if(ht&&Tt){const fe=Fe(xt[0]);n.texStorage2D(s.TEXTURE_2D,Ne,st,fe.width,fe.height)}for(let fe=0,Se=xt.length;fe<Se;fe++)je=xt[fe],ht?q&&n.texSubImage2D(s.TEXTURE_2D,fe,0,0,Ve,nt,je):n.texImage2D(s.TEXTURE_2D,fe,st,Ve,nt,je);b.generateMipmaps=!1}else if(ht){if(Tt){const fe=Fe(Ae);n.texStorage2D(s.TEXTURE_2D,Ne,st,fe.width,fe.height)}q&&n.texSubImage2D(s.TEXTURE_2D,0,0,0,Ve,nt,Ae)}else n.texImage2D(s.TEXTURE_2D,0,st,Ve,nt,Ae);S(b)&&v(ye),Xe.__version=_e.version,b.onUpdate&&b.onUpdate(b)}N.__version=b.version}function W(N,b,ne){if(b.image.length!==6)return;const ye=J(N,b),Ee=b.source;n.bindTexture(s.TEXTURE_CUBE_MAP,N.__webglTexture,s.TEXTURE0+ne);const _e=r.get(Ee);if(Ee.version!==_e.__version||ye===!0){n.activeTexture(s.TEXTURE0+ne);const Xe=Ct.getPrimaries(Ct.workingColorSpace),Ie=b.colorSpace===Br?null:Ct.getPrimaries(b.colorSpace),Be=b.colorSpace===Br||Xe===Ie?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,b.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,b.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Be);const dt=b.isCompressedTexture||b.image[0].isCompressedTexture,Ae=b.image[0]&&b.image[0].isDataTexture,Ve=[];for(let Se=0;Se<6;Se++)!dt&&!Ae?Ve[Se]=P(b.image[Se],!0,a.maxCubemapSize):Ve[Se]=Ae?b.image[Se].image:b.image[Se],Ve[Se]=ot(b,Ve[Se]);const nt=Ve[0],st=c.convert(b.format,b.colorSpace),je=c.convert(b.type),xt=L(b.internalFormat,st,je,b.colorSpace),ht=b.isVideoTexture!==!0,Tt=_e.__version===void 0||ye===!0,q=Ee.dataReady;let Ne=Q(b,nt);k(s.TEXTURE_CUBE_MAP,b);let fe;if(dt){ht&&Tt&&n.texStorage2D(s.TEXTURE_CUBE_MAP,Ne,xt,nt.width,nt.height);for(let Se=0;Se<6;Se++){fe=Ve[Se].mipmaps;for(let ke=0;ke<fe.length;ke++){const Ue=fe[ke];b.format!==Li?st!==null?ht?q&&n.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Se,ke,0,0,Ue.width,Ue.height,st,Ue.data):n.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Se,ke,xt,Ue.width,Ue.height,0,Ue.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ht?q&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Se,ke,0,0,Ue.width,Ue.height,st,je,Ue.data):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Se,ke,xt,Ue.width,Ue.height,0,st,je,Ue.data)}}}else{if(fe=b.mipmaps,ht&&Tt){fe.length>0&&Ne++;const Se=Fe(Ve[0]);n.texStorage2D(s.TEXTURE_CUBE_MAP,Ne,xt,Se.width,Se.height)}for(let Se=0;Se<6;Se++)if(Ae){ht?q&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0,0,0,Ve[Se].width,Ve[Se].height,st,je,Ve[Se].data):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0,xt,Ve[Se].width,Ve[Se].height,0,st,je,Ve[Se].data);for(let ke=0;ke<fe.length;ke++){const ut=fe[ke].image[Se].image;ht?q&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Se,ke+1,0,0,ut.width,ut.height,st,je,ut.data):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Se,ke+1,xt,ut.width,ut.height,0,st,je,ut.data)}}else{ht?q&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0,0,0,st,je,Ve[Se]):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0,xt,st,je,Ve[Se]);for(let ke=0;ke<fe.length;ke++){const Ue=fe[ke];ht?q&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Se,ke+1,0,0,st,je,Ue.image[Se]):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Se,ke+1,xt,st,je,Ue.image[Se])}}}S(b)&&v(s.TEXTURE_CUBE_MAP),_e.__version=Ee.version,b.onUpdate&&b.onUpdate(b)}N.__version=b.version}function te(N,b,ne,ye,Ee,_e){const Xe=c.convert(ne.format,ne.colorSpace),Ie=c.convert(ne.type),Be=L(ne.internalFormat,Xe,Ie,ne.colorSpace),dt=r.get(b),Ae=r.get(ne);if(Ae.__renderTarget=b,!dt.__hasExternalTextures){const Ve=Math.max(1,b.width>>_e),nt=Math.max(1,b.height>>_e);Ee===s.TEXTURE_3D||Ee===s.TEXTURE_2D_ARRAY?n.texImage3D(Ee,_e,Be,Ve,nt,b.depth,0,Xe,Ie,null):n.texImage2D(Ee,_e,Be,Ve,nt,0,Xe,Ie,null)}n.bindFramebuffer(s.FRAMEBUFFER,N),Ge(b)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,ye,Ee,Ae.__webglTexture,0,et(b)):(Ee===s.TEXTURE_2D||Ee>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&Ee<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,ye,Ee,Ae.__webglTexture,_e),n.bindFramebuffer(s.FRAMEBUFFER,null)}function K(N,b,ne){if(s.bindRenderbuffer(s.RENDERBUFFER,N),b.depthBuffer){const ye=b.depthTexture,Ee=ye&&ye.isDepthTexture?ye.type:null,_e=A(b.stencilBuffer,Ee),Xe=b.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ie=et(b);Ge(b)?f.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Ie,_e,b.width,b.height):ne?s.renderbufferStorageMultisample(s.RENDERBUFFER,Ie,_e,b.width,b.height):s.renderbufferStorage(s.RENDERBUFFER,_e,b.width,b.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Xe,s.RENDERBUFFER,N)}else{const ye=b.textures;for(let Ee=0;Ee<ye.length;Ee++){const _e=ye[Ee],Xe=c.convert(_e.format,_e.colorSpace),Ie=c.convert(_e.type),Be=L(_e.internalFormat,Xe,Ie,_e.colorSpace),dt=et(b);ne&&Ge(b)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,dt,Be,b.width,b.height):Ge(b)?f.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,dt,Be,b.width,b.height):s.renderbufferStorage(s.RENDERBUFFER,Be,b.width,b.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function ue(N,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(s.FRAMEBUFFER,N),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ye=r.get(b.depthTexture);ye.__renderTarget=b,(!ye.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),ge(b.depthTexture,0);const Ee=ye.__webglTexture,_e=et(b);if(b.depthTexture.format===uo)Ge(b)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,Ee,0,_e):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,Ee,0);else if(b.depthTexture.format===vo)Ge(b)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,Ee,0,_e):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,Ee,0);else throw new Error("Unknown depthTexture format")}function he(N){const b=r.get(N),ne=N.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==N.depthTexture){const ye=N.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),ye){const Ee=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,ye.removeEventListener("dispose",Ee)};ye.addEventListener("dispose",Ee),b.__depthDisposeCallback=Ee}b.__boundDepthTexture=ye}if(N.depthTexture&&!b.__autoAllocateDepthBuffer){if(ne)throw new Error("target.depthTexture not supported in Cube render targets");ue(b.__webglFramebuffer,N)}else if(ne){b.__webglDepthbuffer=[];for(let ye=0;ye<6;ye++)if(n.bindFramebuffer(s.FRAMEBUFFER,b.__webglFramebuffer[ye]),b.__webglDepthbuffer[ye]===void 0)b.__webglDepthbuffer[ye]=s.createRenderbuffer(),K(b.__webglDepthbuffer[ye],N,!1);else{const Ee=N.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,_e=b.__webglDepthbuffer[ye];s.bindRenderbuffer(s.RENDERBUFFER,_e),s.framebufferRenderbuffer(s.FRAMEBUFFER,Ee,s.RENDERBUFFER,_e)}}else if(n.bindFramebuffer(s.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=s.createRenderbuffer(),K(b.__webglDepthbuffer,N,!1);else{const ye=N.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ee=b.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,Ee),s.framebufferRenderbuffer(s.FRAMEBUFFER,ye,s.RENDERBUFFER,Ee)}n.bindFramebuffer(s.FRAMEBUFFER,null)}function Me(N,b,ne){const ye=r.get(N);b!==void 0&&te(ye.__webglFramebuffer,N,N.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),ne!==void 0&&he(N)}function De(N){const b=N.texture,ne=r.get(N),ye=r.get(b);N.addEventListener("dispose",B);const Ee=N.textures,_e=N.isWebGLCubeRenderTarget===!0,Xe=Ee.length>1;if(Xe||(ye.__webglTexture===void 0&&(ye.__webglTexture=s.createTexture()),ye.__version=b.version,u.memory.textures++),_e){ne.__webglFramebuffer=[];for(let Ie=0;Ie<6;Ie++)if(b.mipmaps&&b.mipmaps.length>0){ne.__webglFramebuffer[Ie]=[];for(let Be=0;Be<b.mipmaps.length;Be++)ne.__webglFramebuffer[Ie][Be]=s.createFramebuffer()}else ne.__webglFramebuffer[Ie]=s.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){ne.__webglFramebuffer=[];for(let Ie=0;Ie<b.mipmaps.length;Ie++)ne.__webglFramebuffer[Ie]=s.createFramebuffer()}else ne.__webglFramebuffer=s.createFramebuffer();if(Xe)for(let Ie=0,Be=Ee.length;Ie<Be;Ie++){const dt=r.get(Ee[Ie]);dt.__webglTexture===void 0&&(dt.__webglTexture=s.createTexture(),u.memory.textures++)}if(N.samples>0&&Ge(N)===!1){ne.__webglMultisampledFramebuffer=s.createFramebuffer(),ne.__webglColorRenderbuffer=[],n.bindFramebuffer(s.FRAMEBUFFER,ne.__webglMultisampledFramebuffer);for(let Ie=0;Ie<Ee.length;Ie++){const Be=Ee[Ie];ne.__webglColorRenderbuffer[Ie]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,ne.__webglColorRenderbuffer[Ie]);const dt=c.convert(Be.format,Be.colorSpace),Ae=c.convert(Be.type),Ve=L(Be.internalFormat,dt,Ae,Be.colorSpace,N.isXRRenderTarget===!0),nt=et(N);s.renderbufferStorageMultisample(s.RENDERBUFFER,nt,Ve,N.width,N.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ie,s.RENDERBUFFER,ne.__webglColorRenderbuffer[Ie])}s.bindRenderbuffer(s.RENDERBUFFER,null),N.depthBuffer&&(ne.__webglDepthRenderbuffer=s.createRenderbuffer(),K(ne.__webglDepthRenderbuffer,N,!0)),n.bindFramebuffer(s.FRAMEBUFFER,null)}}if(_e){n.bindTexture(s.TEXTURE_CUBE_MAP,ye.__webglTexture),k(s.TEXTURE_CUBE_MAP,b);for(let Ie=0;Ie<6;Ie++)if(b.mipmaps&&b.mipmaps.length>0)for(let Be=0;Be<b.mipmaps.length;Be++)te(ne.__webglFramebuffer[Ie][Be],N,b,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Ie,Be);else te(ne.__webglFramebuffer[Ie],N,b,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Ie,0);S(b)&&v(s.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Xe){for(let Ie=0,Be=Ee.length;Ie<Be;Ie++){const dt=Ee[Ie],Ae=r.get(dt);n.bindTexture(s.TEXTURE_2D,Ae.__webglTexture),k(s.TEXTURE_2D,dt),te(ne.__webglFramebuffer,N,dt,s.COLOR_ATTACHMENT0+Ie,s.TEXTURE_2D,0),S(dt)&&v(s.TEXTURE_2D)}n.unbindTexture()}else{let Ie=s.TEXTURE_2D;if((N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(Ie=N.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),n.bindTexture(Ie,ye.__webglTexture),k(Ie,b),b.mipmaps&&b.mipmaps.length>0)for(let Be=0;Be<b.mipmaps.length;Be++)te(ne.__webglFramebuffer[Be],N,b,s.COLOR_ATTACHMENT0,Ie,Be);else te(ne.__webglFramebuffer,N,b,s.COLOR_ATTACHMENT0,Ie,0);S(b)&&v(Ie),n.unbindTexture()}N.depthBuffer&&he(N)}function xe(N){const b=N.textures;for(let ne=0,ye=b.length;ne<ye;ne++){const Ee=b[ne];if(S(Ee)){const _e=U(N),Xe=r.get(Ee).__webglTexture;n.bindTexture(_e,Xe),v(_e),n.unbindTexture()}}}const Le=[],H=[];function mt(N){if(N.samples>0){if(Ge(N)===!1){const b=N.textures,ne=N.width,ye=N.height;let Ee=s.COLOR_BUFFER_BIT;const _e=N.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Xe=r.get(N),Ie=b.length>1;if(Ie)for(let Be=0;Be<b.length;Be++)n.bindFramebuffer(s.FRAMEBUFFER,Xe.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Be,s.RENDERBUFFER,null),n.bindFramebuffer(s.FRAMEBUFFER,Xe.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Be,s.TEXTURE_2D,null,0);n.bindFramebuffer(s.READ_FRAMEBUFFER,Xe.__webglMultisampledFramebuffer),n.bindFramebuffer(s.DRAW_FRAMEBUFFER,Xe.__webglFramebuffer);for(let Be=0;Be<b.length;Be++){if(N.resolveDepthBuffer&&(N.depthBuffer&&(Ee|=s.DEPTH_BUFFER_BIT),N.stencilBuffer&&N.resolveStencilBuffer&&(Ee|=s.STENCIL_BUFFER_BIT)),Ie){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Xe.__webglColorRenderbuffer[Be]);const dt=r.get(b[Be]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,dt,0)}s.blitFramebuffer(0,0,ne,ye,0,0,ne,ye,Ee,s.NEAREST),p===!0&&(Le.length=0,H.length=0,Le.push(s.COLOR_ATTACHMENT0+Be),N.depthBuffer&&N.resolveDepthBuffer===!1&&(Le.push(_e),H.push(_e),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,H)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Le))}if(n.bindFramebuffer(s.READ_FRAMEBUFFER,null),n.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),Ie)for(let Be=0;Be<b.length;Be++){n.bindFramebuffer(s.FRAMEBUFFER,Xe.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Be,s.RENDERBUFFER,Xe.__webglColorRenderbuffer[Be]);const dt=r.get(b[Be]).__webglTexture;n.bindFramebuffer(s.FRAMEBUFFER,Xe.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Be,s.TEXTURE_2D,dt,0)}n.bindFramebuffer(s.DRAW_FRAMEBUFFER,Xe.__webglMultisampledFramebuffer)}else if(N.depthBuffer&&N.resolveDepthBuffer===!1&&p){const b=N.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[b])}}}function et(N){return Math.min(a.maxSamples,N.samples)}function Ge(N){const b=r.get(N);return N.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function He(N){const b=u.render.frame;_.get(N)!==b&&(_.set(N,b),N.update())}function ot(N,b){const ne=N.colorSpace,ye=N.format,Ee=N.type;return N.isCompressedTexture===!0||N.isVideoTexture===!0||ne!==So&&ne!==Br&&(Ct.getTransfer(ne)===zt?(ye!==Li||Ee!==Gi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",ne)),b}function Fe(N){return typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement?(g.width=N.naturalWidth||N.width,g.height=N.naturalHeight||N.height):typeof VideoFrame<"u"&&N instanceof VideoFrame?(g.width=N.displayWidth,g.height=N.displayHeight):(g.width=N.width,g.height=N.height),g}this.allocateTextureUnit=ie,this.resetTextureUnits=ae,this.setTexture2D=ge,this.setTexture2DArray=de,this.setTexture3D=pe,this.setTextureCube=j,this.rebindTextures=Me,this.setupRenderTarget=De,this.updateRenderTargetMipmap=xe,this.updateMultisampleRenderTarget=mt,this.setupDepthRenderbuffer=he,this.setupFrameBufferTexture=te,this.useMultisampledRTT=Ge}function P2(s,e){function n(r,a=Br){let c;const u=Ct.getTransfer(a);if(r===Gi)return s.UNSIGNED_BYTE;if(r===Sf)return s.UNSIGNED_SHORT_4_4_4_4;if(r===Mf)return s.UNSIGNED_SHORT_5_5_5_1;if(r===Sg)return s.UNSIGNED_INT_5_9_9_9_REV;if(r===_g)return s.BYTE;if(r===yg)return s.SHORT;if(r===pa)return s.UNSIGNED_SHORT;if(r===yf)return s.INT;if(r===Ss)return s.UNSIGNED_INT;if(r===cr)return s.FLOAT;if(r===yo)return s.HALF_FLOAT;if(r===Mg)return s.ALPHA;if(r===Eg)return s.RGB;if(r===Li)return s.RGBA;if(r===wg)return s.LUMINANCE;if(r===Tg)return s.LUMINANCE_ALPHA;if(r===uo)return s.DEPTH_COMPONENT;if(r===vo)return s.DEPTH_STENCIL;if(r===Ef)return s.RED;if(r===wf)return s.RED_INTEGER;if(r===bg)return s.RG;if(r===Tf)return s.RG_INTEGER;if(r===bf)return s.RGBA_INTEGER;if(r===Yl||r===$l||r===Kl||r===Zl)if(u===zt)if(c=e.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(r===Yl)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===$l)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Kl)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Zl)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=e.get("WEBGL_compressed_texture_s3tc"),c!==null){if(r===Yl)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===$l)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Kl)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Zl)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===zd||r===kd||r===Od||r===Bd)if(c=e.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(r===zd)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===kd)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Od)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Bd)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Hd||r===Vd||r===jd)if(c=e.get("WEBGL_compressed_texture_etc"),c!==null){if(r===Hd||r===Vd)return u===zt?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(r===jd)return u===zt?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Gd||r===Wd||r===Xd||r===qd||r===Yd||r===$d||r===Kd||r===Zd||r===Qd||r===Jd||r===ef||r===tf||r===nf||r===rf)if(c=e.get("WEBGL_compressed_texture_astc"),c!==null){if(r===Gd)return u===zt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Wd)return u===zt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Xd)return u===zt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===qd)return u===zt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Yd)return u===zt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===$d)return u===zt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Kd)return u===zt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Zd)return u===zt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Qd)return u===zt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Jd)return u===zt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===ef)return u===zt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===tf)return u===zt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===nf)return u===zt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===rf)return u===zt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Ql||r===sf||r===of)if(c=e.get("EXT_texture_compression_bptc"),c!==null){if(r===Ql)return u===zt?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===sf)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===of)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Cg||r===af||r===lf||r===cf)if(c=e.get("EXT_texture_compression_rgtc"),c!==null){if(r===Ql)return c.COMPRESSED_RED_RGTC1_EXT;if(r===af)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===lf)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===cf)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===go?s.UNSIGNED_INT_24_8:s[r]!==void 0?s[r]:null}return{convert:n}}class D2 extends fi{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Vl extends ei{constructor(){super(),this.isGroup=!0,this.type="Group"}}const L2={type:"move"};class _d{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Vl,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Vl,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new ce,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new ce),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Vl,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new ce,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new ce),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const r of e.hand.values())this._getHandJoint(n,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,r){let a=null,c=null,u=null;const f=this._targetRay,p=this._grip,g=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(g&&e.hand){u=!0;for(const P of e.hand.values()){const S=n.getJointPose(P,r),v=this._getHandJoint(g,P);S!==null&&(v.matrix.fromArray(S.transform.matrix),v.matrix.decompose(v.position,v.rotation,v.scale),v.matrixWorldNeedsUpdate=!0,v.jointRadius=S.radius),v.visible=S!==null}const _=g.joints["index-finger-tip"],x=g.joints["thumb-tip"],y=_.position.distanceTo(x.position),E=.02,T=.005;g.inputState.pinching&&y>E+T?(g.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!g.inputState.pinching&&y<=E-T&&(g.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else p!==null&&e.gripSpace&&(c=n.getPose(e.gripSpace,r),c!==null&&(p.matrix.fromArray(c.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,c.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(c.linearVelocity)):p.hasLinearVelocity=!1,c.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(c.angularVelocity)):p.hasAngularVelocity=!1));f!==null&&(a=n.getPose(e.targetRaySpace,r),a===null&&c!==null&&(a=c),a!==null&&(f.matrix.fromArray(a.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,a.linearVelocity?(f.hasLinearVelocity=!0,f.linearVelocity.copy(a.linearVelocity)):f.hasLinearVelocity=!1,a.angularVelocity?(f.hasAngularVelocity=!0,f.angularVelocity.copy(a.angularVelocity)):f.hasAngularVelocity=!1,this.dispatchEvent(L2)))}return f!==null&&(f.visible=a!==null),p!==null&&(p.visible=c!==null),g!==null&&(g.visible=u!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const r=new Vl;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[n.jointName]=r,e.add(r)}return e.joints[n.jointName]}}const I2=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,N2=`
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

}`;class U2{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n,r){if(this.texture===null){const a=new Nn,c=e.properties.get(a);c.__webglTexture=n.texture,(n.depthNear!=r.depthNear||n.depthFar!=r.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=a}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,r=new Vn({vertexShader:I2,fragmentShader:N2,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Cn(new xa(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class F2 extends Mo{constructor(e,n){super();const r=this;let a=null,c=1,u=null,f="local-floor",p=1,g=null,_=null,x=null,y=null,E=null,T=null;const P=new U2,S=n.getContextAttributes();let v=null,U=null;const L=[],A=[],Q=new Lt;let O=null;const B=new fi;B.viewport=new en;const Z=new fi;Z.viewport=new en;const I=[B,Z],D=new D2;let G=null,ae=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(z){let W=L[z];return W===void 0&&(W=new _d,L[z]=W),W.getTargetRaySpace()},this.getControllerGrip=function(z){let W=L[z];return W===void 0&&(W=new _d,L[z]=W),W.getGripSpace()},this.getHand=function(z){let W=L[z];return W===void 0&&(W=new _d,L[z]=W),W.getHandSpace()};function ie(z){const W=A.indexOf(z.inputSource);if(W===-1)return;const te=L[W];te!==void 0&&(te.update(z.inputSource,z.frame,g||u),te.dispatchEvent({type:z.type,data:z.inputSource}))}function ve(){a.removeEventListener("select",ie),a.removeEventListener("selectstart",ie),a.removeEventListener("selectend",ie),a.removeEventListener("squeeze",ie),a.removeEventListener("squeezestart",ie),a.removeEventListener("squeezeend",ie),a.removeEventListener("end",ve),a.removeEventListener("inputsourceschange",ge);for(let z=0;z<L.length;z++){const W=A[z];W!==null&&(A[z]=null,L[z].disconnect(W))}G=null,ae=null,P.reset(),e.setRenderTarget(v),E=null,y=null,x=null,a=null,U=null,J.stop(),r.isPresenting=!1,e.setPixelRatio(O),e.setSize(Q.width,Q.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(z){c=z,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(z){f=z,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return g||u},this.setReferenceSpace=function(z){g=z},this.getBaseLayer=function(){return y!==null?y:E},this.getBinding=function(){return x},this.getFrame=function(){return T},this.getSession=function(){return a},this.setSession=async function(z){if(a=z,a!==null){if(v=e.getRenderTarget(),a.addEventListener("select",ie),a.addEventListener("selectstart",ie),a.addEventListener("selectend",ie),a.addEventListener("squeeze",ie),a.addEventListener("squeezestart",ie),a.addEventListener("squeezeend",ie),a.addEventListener("end",ve),a.addEventListener("inputsourceschange",ge),S.xrCompatible!==!0&&await n.makeXRCompatible(),O=e.getPixelRatio(),e.getSize(Q),a.renderState.layers===void 0){const W={antialias:S.antialias,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:c};E=new XRWebGLLayer(a,n,W),a.updateRenderState({baseLayer:E}),e.setPixelRatio(1),e.setSize(E.framebufferWidth,E.framebufferHeight,!1),U=new Ii(E.framebufferWidth,E.framebufferHeight,{format:Li,type:Gi,colorSpace:e.outputColorSpace,stencilBuffer:S.stencil})}else{let W=null,te=null,K=null;S.depth&&(K=S.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,W=S.stencil?vo:uo,te=S.stencil?go:Ss);const ue={colorFormat:n.RGBA8,depthFormat:K,scaleFactor:c};x=new XRWebGLBinding(a,n),y=x.createProjectionLayer(ue),a.updateRenderState({layers:[y]}),e.setPixelRatio(1),e.setSize(y.textureWidth,y.textureHeight,!1),U=new Ii(y.textureWidth,y.textureHeight,{format:Li,type:Gi,depthTexture:new jg(y.textureWidth,y.textureHeight,te,void 0,void 0,void 0,void 0,void 0,void 0,W),stencilBuffer:S.stencil,colorSpace:e.outputColorSpace,samples:S.antialias?4:0,resolveDepthBuffer:y.ignoreDepthValues===!1})}U.isXRRenderTarget=!0,this.setFoveation(p),g=null,u=await a.requestReferenceSpace(f),J.setContext(a),J.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(a!==null)return a.environmentBlendMode},this.getDepthTexture=function(){return P.getDepthTexture()};function ge(z){for(let W=0;W<z.removed.length;W++){const te=z.removed[W],K=A.indexOf(te);K>=0&&(A[K]=null,L[K].disconnect(te))}for(let W=0;W<z.added.length;W++){const te=z.added[W];let K=A.indexOf(te);if(K===-1){for(let he=0;he<L.length;he++)if(he>=A.length){A.push(te),K=he;break}else if(A[he]===null){A[he]=te,K=he;break}if(K===-1)break}const ue=L[K];ue&&ue.connect(te)}}const de=new ce,pe=new ce;function j(z,W,te){de.setFromMatrixPosition(W.matrixWorld),pe.setFromMatrixPosition(te.matrixWorld);const K=de.distanceTo(pe),ue=W.projectionMatrix.elements,he=te.projectionMatrix.elements,Me=ue[14]/(ue[10]-1),De=ue[14]/(ue[10]+1),xe=(ue[9]+1)/ue[5],Le=(ue[9]-1)/ue[5],H=(ue[8]-1)/ue[0],mt=(he[8]+1)/he[0],et=Me*H,Ge=Me*mt,He=K/(-H+mt),ot=He*-H;if(W.matrixWorld.decompose(z.position,z.quaternion,z.scale),z.translateX(ot),z.translateZ(He),z.matrixWorld.compose(z.position,z.quaternion,z.scale),z.matrixWorldInverse.copy(z.matrixWorld).invert(),ue[10]===-1)z.projectionMatrix.copy(W.projectionMatrix),z.projectionMatrixInverse.copy(W.projectionMatrixInverse);else{const Fe=Me+He,N=De+He,b=et-ot,ne=Ge+(K-ot),ye=xe*De/N*Fe,Ee=Le*De/N*Fe;z.projectionMatrix.makePerspective(b,ne,ye,Ee,Fe,N),z.projectionMatrixInverse.copy(z.projectionMatrix).invert()}}function me(z,W){W===null?z.matrixWorld.copy(z.matrix):z.matrixWorld.multiplyMatrices(W.matrixWorld,z.matrix),z.matrixWorldInverse.copy(z.matrixWorld).invert()}this.updateCamera=function(z){if(a===null)return;let W=z.near,te=z.far;P.texture!==null&&(P.depthNear>0&&(W=P.depthNear),P.depthFar>0&&(te=P.depthFar)),D.near=Z.near=B.near=W,D.far=Z.far=B.far=te,(G!==D.near||ae!==D.far)&&(a.updateRenderState({depthNear:D.near,depthFar:D.far}),G=D.near,ae=D.far),B.layers.mask=z.layers.mask|2,Z.layers.mask=z.layers.mask|4,D.layers.mask=B.layers.mask|Z.layers.mask;const K=z.parent,ue=D.cameras;me(D,K);for(let he=0;he<ue.length;he++)me(ue[he],K);ue.length===2?j(D,B,Z):D.projectionMatrix.copy(B.projectionMatrix),C(z,D,K)};function C(z,W,te){te===null?z.matrix.copy(W.matrixWorld):(z.matrix.copy(te.matrixWorld),z.matrix.invert(),z.matrix.multiply(W.matrixWorld)),z.matrix.decompose(z.position,z.quaternion,z.scale),z.updateMatrixWorld(!0),z.projectionMatrix.copy(W.projectionMatrix),z.projectionMatrixInverse.copy(W.projectionMatrixInverse),z.isPerspectiveCamera&&(z.fov=df*2*Math.atan(1/z.projectionMatrix.elements[5]),z.zoom=1)}this.getCamera=function(){return D},this.getFoveation=function(){if(!(y===null&&E===null))return p},this.setFoveation=function(z){p=z,y!==null&&(y.fixedFoveation=z),E!==null&&E.fixedFoveation!==void 0&&(E.fixedFoveation=z)},this.hasDepthSensing=function(){return P.texture!==null},this.getDepthSensingMesh=function(){return P.getMesh(D)};let M=null;function k(z,W){if(_=W.getViewerPose(g||u),T=W,_!==null){const te=_.views;E!==null&&(e.setRenderTargetFramebuffer(U,E.framebuffer),e.setRenderTarget(U));let K=!1;te.length!==D.cameras.length&&(D.cameras.length=0,K=!0);for(let he=0;he<te.length;he++){const Me=te[he];let De=null;if(E!==null)De=E.getViewport(Me);else{const Le=x.getViewSubImage(y,Me);De=Le.viewport,he===0&&(e.setRenderTargetTextures(U,Le.colorTexture,y.ignoreDepthValues?void 0:Le.depthStencilTexture),e.setRenderTarget(U))}let xe=I[he];xe===void 0&&(xe=new fi,xe.layers.enable(he),xe.viewport=new en,I[he]=xe),xe.matrix.fromArray(Me.transform.matrix),xe.matrix.decompose(xe.position,xe.quaternion,xe.scale),xe.projectionMatrix.fromArray(Me.projectionMatrix),xe.projectionMatrixInverse.copy(xe.projectionMatrix).invert(),xe.viewport.set(De.x,De.y,De.width,De.height),he===0&&(D.matrix.copy(xe.matrix),D.matrix.decompose(D.position,D.quaternion,D.scale)),K===!0&&D.cameras.push(xe)}const ue=a.enabledFeatures;if(ue&&ue.includes("depth-sensing")){const he=x.getDepthInformation(te[0]);he&&he.isValid&&he.texture&&P.init(e,he,a.renderState)}}for(let te=0;te<L.length;te++){const K=A[te],ue=L[te];K!==null&&ue!==void 0&&ue.update(K,W,g||u)}M&&M(z,W),W.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:W}),T=null}const J=new Hg;J.setAnimationLoop(k),this.setAnimationLoop=function(z){M=z},this.dispose=function(){}}}const us=new fr,z2=new rn;function k2(s,e){function n(S,v){S.matrixAutoUpdate===!0&&S.updateMatrix(),v.value.copy(S.matrix)}function r(S,v){v.color.getRGB(S.fogColor.value,zg(s)),v.isFog?(S.fogNear.value=v.near,S.fogFar.value=v.far):v.isFogExp2&&(S.fogDensity.value=v.density)}function a(S,v,U,L,A){v.isMeshBasicMaterial||v.isMeshLambertMaterial?c(S,v):v.isMeshToonMaterial?(c(S,v),x(S,v)):v.isMeshPhongMaterial?(c(S,v),_(S,v)):v.isMeshStandardMaterial?(c(S,v),y(S,v),v.isMeshPhysicalMaterial&&E(S,v,A)):v.isMeshMatcapMaterial?(c(S,v),T(S,v)):v.isMeshDepthMaterial?c(S,v):v.isMeshDistanceMaterial?(c(S,v),P(S,v)):v.isMeshNormalMaterial?c(S,v):v.isLineBasicMaterial?(u(S,v),v.isLineDashedMaterial&&f(S,v)):v.isPointsMaterial?p(S,v,U,L):v.isSpriteMaterial?g(S,v):v.isShadowMaterial?(S.color.value.copy(v.color),S.opacity.value=v.opacity):v.isShaderMaterial&&(v.uniformsNeedUpdate=!1)}function c(S,v){S.opacity.value=v.opacity,v.color&&S.diffuse.value.copy(v.color),v.emissive&&S.emissive.value.copy(v.emissive).multiplyScalar(v.emissiveIntensity),v.map&&(S.map.value=v.map,n(v.map,S.mapTransform)),v.alphaMap&&(S.alphaMap.value=v.alphaMap,n(v.alphaMap,S.alphaMapTransform)),v.bumpMap&&(S.bumpMap.value=v.bumpMap,n(v.bumpMap,S.bumpMapTransform),S.bumpScale.value=v.bumpScale,v.side===jn&&(S.bumpScale.value*=-1)),v.normalMap&&(S.normalMap.value=v.normalMap,n(v.normalMap,S.normalMapTransform),S.normalScale.value.copy(v.normalScale),v.side===jn&&S.normalScale.value.negate()),v.displacementMap&&(S.displacementMap.value=v.displacementMap,n(v.displacementMap,S.displacementMapTransform),S.displacementScale.value=v.displacementScale,S.displacementBias.value=v.displacementBias),v.emissiveMap&&(S.emissiveMap.value=v.emissiveMap,n(v.emissiveMap,S.emissiveMapTransform)),v.specularMap&&(S.specularMap.value=v.specularMap,n(v.specularMap,S.specularMapTransform)),v.alphaTest>0&&(S.alphaTest.value=v.alphaTest);const U=e.get(v),L=U.envMap,A=U.envMapRotation;L&&(S.envMap.value=L,us.copy(A),us.x*=-1,us.y*=-1,us.z*=-1,L.isCubeTexture&&L.isRenderTargetTexture===!1&&(us.y*=-1,us.z*=-1),S.envMapRotation.value.setFromMatrix4(z2.makeRotationFromEuler(us)),S.flipEnvMap.value=L.isCubeTexture&&L.isRenderTargetTexture===!1?-1:1,S.reflectivity.value=v.reflectivity,S.ior.value=v.ior,S.refractionRatio.value=v.refractionRatio),v.lightMap&&(S.lightMap.value=v.lightMap,S.lightMapIntensity.value=v.lightMapIntensity,n(v.lightMap,S.lightMapTransform)),v.aoMap&&(S.aoMap.value=v.aoMap,S.aoMapIntensity.value=v.aoMapIntensity,n(v.aoMap,S.aoMapTransform))}function u(S,v){S.diffuse.value.copy(v.color),S.opacity.value=v.opacity,v.map&&(S.map.value=v.map,n(v.map,S.mapTransform))}function f(S,v){S.dashSize.value=v.dashSize,S.totalSize.value=v.dashSize+v.gapSize,S.scale.value=v.scale}function p(S,v,U,L){S.diffuse.value.copy(v.color),S.opacity.value=v.opacity,S.size.value=v.size*U,S.scale.value=L*.5,v.map&&(S.map.value=v.map,n(v.map,S.uvTransform)),v.alphaMap&&(S.alphaMap.value=v.alphaMap,n(v.alphaMap,S.alphaMapTransform)),v.alphaTest>0&&(S.alphaTest.value=v.alphaTest)}function g(S,v){S.diffuse.value.copy(v.color),S.opacity.value=v.opacity,S.rotation.value=v.rotation,v.map&&(S.map.value=v.map,n(v.map,S.mapTransform)),v.alphaMap&&(S.alphaMap.value=v.alphaMap,n(v.alphaMap,S.alphaMapTransform)),v.alphaTest>0&&(S.alphaTest.value=v.alphaTest)}function _(S,v){S.specular.value.copy(v.specular),S.shininess.value=Math.max(v.shininess,1e-4)}function x(S,v){v.gradientMap&&(S.gradientMap.value=v.gradientMap)}function y(S,v){S.metalness.value=v.metalness,v.metalnessMap&&(S.metalnessMap.value=v.metalnessMap,n(v.metalnessMap,S.metalnessMapTransform)),S.roughness.value=v.roughness,v.roughnessMap&&(S.roughnessMap.value=v.roughnessMap,n(v.roughnessMap,S.roughnessMapTransform)),v.envMap&&(S.envMapIntensity.value=v.envMapIntensity)}function E(S,v,U){S.ior.value=v.ior,v.sheen>0&&(S.sheenColor.value.copy(v.sheenColor).multiplyScalar(v.sheen),S.sheenRoughness.value=v.sheenRoughness,v.sheenColorMap&&(S.sheenColorMap.value=v.sheenColorMap,n(v.sheenColorMap,S.sheenColorMapTransform)),v.sheenRoughnessMap&&(S.sheenRoughnessMap.value=v.sheenRoughnessMap,n(v.sheenRoughnessMap,S.sheenRoughnessMapTransform))),v.clearcoat>0&&(S.clearcoat.value=v.clearcoat,S.clearcoatRoughness.value=v.clearcoatRoughness,v.clearcoatMap&&(S.clearcoatMap.value=v.clearcoatMap,n(v.clearcoatMap,S.clearcoatMapTransform)),v.clearcoatRoughnessMap&&(S.clearcoatRoughnessMap.value=v.clearcoatRoughnessMap,n(v.clearcoatRoughnessMap,S.clearcoatRoughnessMapTransform)),v.clearcoatNormalMap&&(S.clearcoatNormalMap.value=v.clearcoatNormalMap,n(v.clearcoatNormalMap,S.clearcoatNormalMapTransform),S.clearcoatNormalScale.value.copy(v.clearcoatNormalScale),v.side===jn&&S.clearcoatNormalScale.value.negate())),v.dispersion>0&&(S.dispersion.value=v.dispersion),v.iridescence>0&&(S.iridescence.value=v.iridescence,S.iridescenceIOR.value=v.iridescenceIOR,S.iridescenceThicknessMinimum.value=v.iridescenceThicknessRange[0],S.iridescenceThicknessMaximum.value=v.iridescenceThicknessRange[1],v.iridescenceMap&&(S.iridescenceMap.value=v.iridescenceMap,n(v.iridescenceMap,S.iridescenceMapTransform)),v.iridescenceThicknessMap&&(S.iridescenceThicknessMap.value=v.iridescenceThicknessMap,n(v.iridescenceThicknessMap,S.iridescenceThicknessMapTransform))),v.transmission>0&&(S.transmission.value=v.transmission,S.transmissionSamplerMap.value=U.texture,S.transmissionSamplerSize.value.set(U.width,U.height),v.transmissionMap&&(S.transmissionMap.value=v.transmissionMap,n(v.transmissionMap,S.transmissionMapTransform)),S.thickness.value=v.thickness,v.thicknessMap&&(S.thicknessMap.value=v.thicknessMap,n(v.thicknessMap,S.thicknessMapTransform)),S.attenuationDistance.value=v.attenuationDistance,S.attenuationColor.value.copy(v.attenuationColor)),v.anisotropy>0&&(S.anisotropyVector.value.set(v.anisotropy*Math.cos(v.anisotropyRotation),v.anisotropy*Math.sin(v.anisotropyRotation)),v.anisotropyMap&&(S.anisotropyMap.value=v.anisotropyMap,n(v.anisotropyMap,S.anisotropyMapTransform))),S.specularIntensity.value=v.specularIntensity,S.specularColor.value.copy(v.specularColor),v.specularColorMap&&(S.specularColorMap.value=v.specularColorMap,n(v.specularColorMap,S.specularColorMapTransform)),v.specularIntensityMap&&(S.specularIntensityMap.value=v.specularIntensityMap,n(v.specularIntensityMap,S.specularIntensityMapTransform))}function T(S,v){v.matcap&&(S.matcap.value=v.matcap)}function P(S,v){const U=e.get(v).light;S.referencePosition.value.setFromMatrixPosition(U.matrixWorld),S.nearDistance.value=U.shadow.camera.near,S.farDistance.value=U.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:a}}function O2(s,e,n,r){let a={},c={},u=[];const f=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function p(U,L){const A=L.program;r.uniformBlockBinding(U,A)}function g(U,L){let A=a[U.id];A===void 0&&(T(U),A=_(U),a[U.id]=A,U.addEventListener("dispose",S));const Q=L.program;r.updateUBOMapping(U,Q);const O=e.render.frame;c[U.id]!==O&&(y(U),c[U.id]=O)}function _(U){const L=x();U.__bindingPointIndex=L;const A=s.createBuffer(),Q=U.__size,O=U.usage;return s.bindBuffer(s.UNIFORM_BUFFER,A),s.bufferData(s.UNIFORM_BUFFER,Q,O),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,L,A),A}function x(){for(let U=0;U<f;U++)if(u.indexOf(U)===-1)return u.push(U),U;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function y(U){const L=a[U.id],A=U.uniforms,Q=U.__cache;s.bindBuffer(s.UNIFORM_BUFFER,L);for(let O=0,B=A.length;O<B;O++){const Z=Array.isArray(A[O])?A[O]:[A[O]];for(let I=0,D=Z.length;I<D;I++){const G=Z[I];if(E(G,O,I,Q)===!0){const ae=G.__offset,ie=Array.isArray(G.value)?G.value:[G.value];let ve=0;for(let ge=0;ge<ie.length;ge++){const de=ie[ge],pe=P(de);typeof de=="number"||typeof de=="boolean"?(G.__data[0]=de,s.bufferSubData(s.UNIFORM_BUFFER,ae+ve,G.__data)):de.isMatrix3?(G.__data[0]=de.elements[0],G.__data[1]=de.elements[1],G.__data[2]=de.elements[2],G.__data[3]=0,G.__data[4]=de.elements[3],G.__data[5]=de.elements[4],G.__data[6]=de.elements[5],G.__data[7]=0,G.__data[8]=de.elements[6],G.__data[9]=de.elements[7],G.__data[10]=de.elements[8],G.__data[11]=0):(de.toArray(G.__data,ve),ve+=pe.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,ae,G.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function E(U,L,A,Q){const O=U.value,B=L+"_"+A;if(Q[B]===void 0)return typeof O=="number"||typeof O=="boolean"?Q[B]=O:Q[B]=O.clone(),!0;{const Z=Q[B];if(typeof O=="number"||typeof O=="boolean"){if(Z!==O)return Q[B]=O,!0}else if(Z.equals(O)===!1)return Z.copy(O),!0}return!1}function T(U){const L=U.uniforms;let A=0;const Q=16;for(let B=0,Z=L.length;B<Z;B++){const I=Array.isArray(L[B])?L[B]:[L[B]];for(let D=0,G=I.length;D<G;D++){const ae=I[D],ie=Array.isArray(ae.value)?ae.value:[ae.value];for(let ve=0,ge=ie.length;ve<ge;ve++){const de=ie[ve],pe=P(de),j=A%Q,me=j%pe.boundary,C=j+me;A+=me,C!==0&&Q-C<pe.storage&&(A+=Q-C),ae.__data=new Float32Array(pe.storage/Float32Array.BYTES_PER_ELEMENT),ae.__offset=A,A+=pe.storage}}}const O=A%Q;return O>0&&(A+=Q-O),U.__size=A,U.__cache={},this}function P(U){const L={boundary:0,storage:0};return typeof U=="number"||typeof U=="boolean"?(L.boundary=4,L.storage=4):U.isVector2?(L.boundary=8,L.storage=8):U.isVector3||U.isColor?(L.boundary=16,L.storage=12):U.isVector4?(L.boundary=16,L.storage=16):U.isMatrix3?(L.boundary=48,L.storage=48):U.isMatrix4?(L.boundary=64,L.storage=64):U.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",U),L}function S(U){const L=U.target;L.removeEventListener("dispose",S);const A=u.indexOf(L.__bindingPointIndex);u.splice(A,1),s.deleteBuffer(a[L.id]),delete a[L.id],delete c[L.id]}function v(){for(const U in a)s.deleteBuffer(a[U]);u=[],a={},c={}}return{bind:p,update:g,dispose:v}}class B2{constructor(e={}){const{canvas:n=E_(),context:r=null,depth:a=!0,stencil:c=!1,alpha:u=!1,antialias:f=!1,premultipliedAlpha:p=!0,preserveDrawingBuffer:g=!1,powerPreference:_="default",failIfMajorPerformanceCaveat:x=!1,reverseDepthBuffer:y=!1}=e;this.isWebGLRenderer=!0;let E;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");E=r.getContextAttributes().alpha}else E=u;const T=new Uint32Array(4),P=new Int32Array(4);let S=null,v=null;const U=[],L=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=di,this.toneMapping=jr,this.toneMappingExposure=1;const A=this;let Q=!1,O=0,B=0,Z=null,I=-1,D=null;const G=new en,ae=new en;let ie=null;const ve=new Ot(0);let ge=0,de=n.width,pe=n.height,j=1,me=null,C=null;const M=new en(0,0,de,pe),k=new en(0,0,de,pe);let J=!1;const z=new Bg;let W=!1,te=!1;const K=new rn,ue=new rn,he=new ce,Me=new en,De={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let xe=!1;function Le(){return Z===null?j:1}let H=r;function mt(R,Y){return n.getContext(R,Y)}try{const R={alpha:!0,depth:a,stencil:c,antialias:f,premultipliedAlpha:p,preserveDrawingBuffer:g,powerPreference:_,failIfMajorPerformanceCaveat:x};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${_f}`),n.addEventListener("webglcontextlost",Se,!1),n.addEventListener("webglcontextrestored",ke,!1),n.addEventListener("webglcontextcreationerror",Ue,!1),H===null){const Y="webgl2";if(H=mt(Y,R),H===null)throw mt(Y)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let et,Ge,He,ot,Fe,N,b,ne,ye,Ee,_e,Xe,Ie,Be,dt,Ae,Ve,nt,st,je,xt,ht,Tt,q;function Ne(){et=new WS(H),et.init(),ht=new P2(H,et),Ge=new OS(H,et,e,ht),He=new C2(H,et),Ge.reverseDepthBuffer&&y&&He.buffers.depth.setReversed(!0),ot=new YS(H),Fe=new f2,N=new R2(H,et,He,Fe,Ge,ht,ot),b=new HS(A),ne=new GS(A),ye=new ty(H),Tt=new zS(H,ye),Ee=new XS(H,ye,ot,Tt),_e=new KS(H,Ee,ye,ot),st=new $S(H,Ge,N),Ae=new BS(Fe),Xe=new d2(A,b,ne,et,Ge,Tt,Ae),Ie=new k2(A,Fe),Be=new p2,dt=new y2(et),nt=new FS(A,b,ne,He,_e,E,p),Ve=new T2(A,_e,Ge),q=new O2(H,ot,Ge,He),je=new kS(H,et,ot),xt=new qS(H,et,ot),ot.programs=Xe.programs,A.capabilities=Ge,A.extensions=et,A.properties=Fe,A.renderLists=Be,A.shadowMap=Ve,A.state=He,A.info=ot}Ne();const fe=new F2(A,H);this.xr=fe,this.getContext=function(){return H},this.getContextAttributes=function(){return H.getContextAttributes()},this.forceContextLoss=function(){const R=et.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=et.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return j},this.setPixelRatio=function(R){R!==void 0&&(j=R,this.setSize(de,pe,!1))},this.getSize=function(R){return R.set(de,pe)},this.setSize=function(R,Y,se=!0){if(fe.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}de=R,pe=Y,n.width=Math.floor(R*j),n.height=Math.floor(Y*j),se===!0&&(n.style.width=R+"px",n.style.height=Y+"px"),this.setViewport(0,0,R,Y)},this.getDrawingBufferSize=function(R){return R.set(de*j,pe*j).floor()},this.setDrawingBufferSize=function(R,Y,se){de=R,pe=Y,j=se,n.width=Math.floor(R*se),n.height=Math.floor(Y*se),this.setViewport(0,0,R,Y)},this.getCurrentViewport=function(R){return R.copy(G)},this.getViewport=function(R){return R.copy(M)},this.setViewport=function(R,Y,se,oe){R.isVector4?M.set(R.x,R.y,R.z,R.w):M.set(R,Y,se,oe),He.viewport(G.copy(M).multiplyScalar(j).round())},this.getScissor=function(R){return R.copy(k)},this.setScissor=function(R,Y,se,oe){R.isVector4?k.set(R.x,R.y,R.z,R.w):k.set(R,Y,se,oe),He.scissor(ae.copy(k).multiplyScalar(j).round())},this.getScissorTest=function(){return J},this.setScissorTest=function(R){He.setScissorTest(J=R)},this.setOpaqueSort=function(R){me=R},this.setTransparentSort=function(R){C=R},this.getClearColor=function(R){return R.copy(nt.getClearColor())},this.setClearColor=function(){nt.setClearColor.apply(nt,arguments)},this.getClearAlpha=function(){return nt.getClearAlpha()},this.setClearAlpha=function(){nt.setClearAlpha.apply(nt,arguments)},this.clear=function(R=!0,Y=!0,se=!0){let oe=0;if(R){let $=!1;if(Z!==null){const be=Z.texture.format;$=be===bf||be===Tf||be===wf}if($){const be=Z.texture.type,we=be===Gi||be===Ss||be===pa||be===go||be===Sf||be===Mf,Ke=nt.getClearColor(),Ye=nt.getClearAlpha(),lt=Ke.r,ct=Ke.g,Ze=Ke.b;we?(T[0]=lt,T[1]=ct,T[2]=Ze,T[3]=Ye,H.clearBufferuiv(H.COLOR,0,T)):(P[0]=lt,P[1]=ct,P[2]=Ze,P[3]=Ye,H.clearBufferiv(H.COLOR,0,P))}else oe|=H.COLOR_BUFFER_BIT}Y&&(oe|=H.DEPTH_BUFFER_BIT),se&&(oe|=H.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),H.clear(oe)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",Se,!1),n.removeEventListener("webglcontextrestored",ke,!1),n.removeEventListener("webglcontextcreationerror",Ue,!1),Be.dispose(),dt.dispose(),Fe.dispose(),b.dispose(),ne.dispose(),_e.dispose(),Tt.dispose(),q.dispose(),Xe.dispose(),fe.dispose(),fe.removeEventListener("sessionstart",Vt),fe.removeEventListener("sessionend",Nt),pn.stop()};function Se(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),Q=!0}function ke(){console.log("THREE.WebGLRenderer: Context Restored."),Q=!1;const R=ot.autoReset,Y=Ve.enabled,se=Ve.autoUpdate,oe=Ve.needsUpdate,$=Ve.type;Ne(),ot.autoReset=R,Ve.enabled=Y,Ve.autoUpdate=se,Ve.needsUpdate=oe,Ve.type=$}function Ue(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function ut(R){const Y=R.target;Y.removeEventListener("dispose",ut),It(Y)}function It(R){Kt(R),Fe.remove(R)}function Kt(R){const Y=Fe.get(R).programs;Y!==void 0&&(Y.forEach(function(se){Xe.releaseProgram(se)}),R.isShaderMaterial&&Xe.releaseShaderCache(R))}this.renderBufferDirect=function(R,Y,se,oe,$,be){Y===null&&(Y=De);const we=$.isMesh&&$.matrixWorld.determinant()<0,Ke=gi(R,Y,se,oe,$);He.setMaterial(oe,we);let Ye=se.index,lt=1;if(oe.wireframe===!0){if(Ye=Ee.getWireframeAttribute(se),Ye===void 0)return;lt=2}const ct=se.drawRange,Ze=se.attributes.position;let Et=ct.start*lt,Dt=(ct.start+ct.count)*lt;be!==null&&(Et=Math.max(Et,be.start*lt),Dt=Math.min(Dt,(be.start+be.count)*lt)),Ye!==null?(Et=Math.max(Et,0),Dt=Math.min(Dt,Ye.count)):Ze!=null&&(Et=Math.max(Et,0),Dt=Math.min(Dt,Ze.count));const wt=Dt-Et;if(wt<0||wt===1/0)return;Tt.setup($,oe,Ke,se,Ye);let _n,gt=je;if(Ye!==null&&(_n=ye.get(Ye),gt=xt,gt.setIndex(_n)),$.isMesh)oe.wireframe===!0?(He.setLineWidth(oe.wireframeLinewidth*Le()),gt.setMode(H.LINES)):gt.setMode(H.TRIANGLES);else if($.isLine){let tt=oe.linewidth;tt===void 0&&(tt=1),He.setLineWidth(tt*Le()),$.isLineSegments?gt.setMode(H.LINES):$.isLineLoop?gt.setMode(H.LINE_LOOP):gt.setMode(H.LINE_STRIP)}else $.isPoints?gt.setMode(H.POINTS):$.isSprite&&gt.setMode(H.TRIANGLES);if($.isBatchedMesh)if($._multiDrawInstances!==null)gt.renderMultiDrawInstances($._multiDrawStarts,$._multiDrawCounts,$._multiDrawCount,$._multiDrawInstances);else if(et.get("WEBGL_multi_draw"))gt.renderMultiDraw($._multiDrawStarts,$._multiDrawCounts,$._multiDrawCount);else{const tt=$._multiDrawStarts,_i=$._multiDrawCounts,At=$._multiDrawCount,yn=Ye?ye.get(Ye).bytesPerElement:1,yi=Fe.get(oe).currentProgram.getUniforms();for(let sn=0;sn<At;sn++)yi.setValue(H,"_gl_DrawID",sn),gt.render(tt[sn]/yn,_i[sn])}else if($.isInstancedMesh)gt.renderInstances(Et,wt,$.count);else if(se.isInstancedBufferGeometry){const tt=se._maxInstanceCount!==void 0?se._maxInstanceCount:1/0,_i=Math.min(se.instanceCount,tt);gt.renderInstances(Et,wt,_i)}else gt.render(Et,wt)};function ze(R,Y,se){R.transparent===!0&&R.side===ar&&R.forceSinglePass===!1?(R.side=jn,R.needsUpdate=!0,pi(R,Y,se),R.side=Xr,R.needsUpdate=!0,pi(R,Y,se),R.side=ar):pi(R,Y,se)}this.compile=function(R,Y,se=null){se===null&&(se=R),v=dt.get(se),v.init(Y),L.push(v),se.traverseVisible(function($){$.isLight&&$.layers.test(Y.layers)&&(v.pushLight($),$.castShadow&&v.pushShadow($))}),R!==se&&R.traverseVisible(function($){$.isLight&&$.layers.test(Y.layers)&&(v.pushLight($),$.castShadow&&v.pushShadow($))}),v.setupLights();const oe=new Set;return R.traverse(function($){if(!($.isMesh||$.isPoints||$.isLine||$.isSprite))return;const be=$.material;if(be)if(Array.isArray(be))for(let we=0;we<be.length;we++){const Ke=be[we];ze(Ke,se,$),oe.add(Ke)}else ze(be,se,$),oe.add(be)}),L.pop(),v=null,oe},this.compileAsync=function(R,Y,se=null){const oe=this.compile(R,Y,se);return new Promise($=>{function be(){if(oe.forEach(function(we){Fe.get(we).currentProgram.isReady()&&oe.delete(we)}),oe.size===0){$(R);return}setTimeout(be,10)}et.get("KHR_parallel_shader_compile")!==null?be():setTimeout(be,10)})};let at=null;function _t(R){at&&at(R)}function Vt(){pn.stop()}function Nt(){pn.start()}const pn=new Hg;pn.setAnimationLoop(_t),typeof self<"u"&&pn.setContext(self),this.setAnimationLoop=function(R){at=R,fe.setAnimationLoop(R),R===null?pn.stop():pn.start()},fe.addEventListener("sessionstart",Vt),fe.addEventListener("sessionend",Nt),this.render=function(R,Y){if(Y!==void 0&&Y.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(Q===!0)return;if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),Y.parent===null&&Y.matrixWorldAutoUpdate===!0&&Y.updateMatrixWorld(),fe.enabled===!0&&fe.isPresenting===!0&&(fe.cameraAutoUpdate===!0&&fe.updateCamera(Y),Y=fe.getCamera()),R.isScene===!0&&R.onBeforeRender(A,R,Y,Z),v=dt.get(R,L.length),v.init(Y),L.push(v),ue.multiplyMatrices(Y.projectionMatrix,Y.matrixWorldInverse),z.setFromProjectionMatrix(ue),te=this.localClippingEnabled,W=Ae.init(this.clippingPlanes,te),S=Be.get(R,U.length),S.init(),U.push(S),fe.enabled===!0&&fe.isPresenting===!0){const be=A.xr.getDepthSensingMesh();be!==null&&Gn(be,Y,-1/0,A.sortObjects)}Gn(R,Y,0,A.sortObjects),S.finish(),A.sortObjects===!0&&S.sort(me,C),xe=fe.enabled===!1||fe.isPresenting===!1||fe.hasDepthSensing()===!1,xe&&nt.addToRenderList(S,R),this.info.render.frame++,W===!0&&Ae.beginShadows();const se=v.state.shadowsArray;Ve.render(se,R,Y),W===!0&&Ae.endShadows(),this.info.autoReset===!0&&this.info.reset();const oe=S.opaque,$=S.transmissive;if(v.setupLights(),Y.isArrayCamera){const be=Y.cameras;if($.length>0)for(let we=0,Ke=be.length;we<Ke;we++){const Ye=be[we];mn(oe,$,R,Ye)}xe&&nt.render(R);for(let we=0,Ke=be.length;we<Ke;we++){const Ye=be[we];Wn(S,R,Ye,Ye.viewport)}}else $.length>0&&mn(oe,$,R,Y),xe&&nt.render(R),Wn(S,R,Y);Z!==null&&(N.updateMultisampleRenderTarget(Z),N.updateRenderTargetMipmap(Z)),R.isScene===!0&&R.onAfterRender(A,R,Y),Tt.resetDefaultState(),I=-1,D=null,L.pop(),L.length>0?(v=L[L.length-1],W===!0&&Ae.setGlobalState(A.clippingPlanes,v.state.camera)):v=null,U.pop(),U.length>0?S=U[U.length-1]:S=null};function Gn(R,Y,se,oe){if(R.visible===!1)return;if(R.layers.test(Y.layers)){if(R.isGroup)se=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(Y);else if(R.isLight)v.pushLight(R),R.castShadow&&v.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||z.intersectsSprite(R)){oe&&Me.setFromMatrixPosition(R.matrixWorld).applyMatrix4(ue);const we=_e.update(R),Ke=R.material;Ke.visible&&S.push(R,we,Ke,se,Me.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||z.intersectsObject(R))){const we=_e.update(R),Ke=R.material;if(oe&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),Me.copy(R.boundingSphere.center)):(we.boundingSphere===null&&we.computeBoundingSphere(),Me.copy(we.boundingSphere.center)),Me.applyMatrix4(R.matrixWorld).applyMatrix4(ue)),Array.isArray(Ke)){const Ye=we.groups;for(let lt=0,ct=Ye.length;lt<ct;lt++){const Ze=Ye[lt],Et=Ke[Ze.materialIndex];Et&&Et.visible&&S.push(R,we,Et,se,Me.z,Ze)}}else Ke.visible&&S.push(R,we,Ke,se,Me.z,null)}}const be=R.children;for(let we=0,Ke=be.length;we<Ke;we++)Gn(be[we],Y,se,oe)}function Wn(R,Y,se,oe){const $=R.opaque,be=R.transmissive,we=R.transparent;v.setupLightsView(se),W===!0&&Ae.setGlobalState(A.clippingPlanes,se),oe&&He.viewport(G.copy(oe)),$.length>0&&Ut($,Y,se),be.length>0&&Ut(be,Y,se),we.length>0&&Ut(we,Y,se),He.buffers.depth.setTest(!0),He.buffers.depth.setMask(!0),He.buffers.color.setMask(!0),He.setPolygonOffset(!1)}function mn(R,Y,se,oe){if((se.isScene===!0?se.overrideMaterial:null)!==null)return;v.state.transmissionRenderTarget[oe.id]===void 0&&(v.state.transmissionRenderTarget[oe.id]=new Ii(1,1,{generateMipmaps:!0,type:et.has("EXT_color_buffer_half_float")||et.has("EXT_color_buffer_float")?yo:Gi,minFilter:_s,samples:4,stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ct.workingColorSpace}));const be=v.state.transmissionRenderTarget[oe.id],we=oe.viewport||G;be.setSize(we.z,we.w);const Ke=A.getRenderTarget();A.setRenderTarget(be),A.getClearColor(ve),ge=A.getClearAlpha(),ge<1&&A.setClearColor(16777215,.5),A.clear(),xe&&nt.render(se);const Ye=A.toneMapping;A.toneMapping=jr;const lt=oe.viewport;if(oe.viewport!==void 0&&(oe.viewport=void 0),v.setupLightsView(oe),W===!0&&Ae.setGlobalState(A.clippingPlanes,oe),Ut(R,se,oe),N.updateMultisampleRenderTarget(be),N.updateRenderTargetMipmap(be),et.has("WEBGL_multisampled_render_to_texture")===!1){let ct=!1;for(let Ze=0,Et=Y.length;Ze<Et;Ze++){const Dt=Y[Ze],wt=Dt.object,_n=Dt.geometry,gt=Dt.material,tt=Dt.group;if(gt.side===ar&&wt.layers.test(oe.layers)){const _i=gt.side;gt.side=jn,gt.needsUpdate=!0,Ui(wt,se,oe,_n,gt,tt),gt.side=_i,gt.needsUpdate=!0,ct=!0}}ct===!0&&(N.updateMultisampleRenderTarget(be),N.updateRenderTargetMipmap(be))}A.setRenderTarget(Ke),A.setClearColor(ve,ge),lt!==void 0&&(oe.viewport=lt),A.toneMapping=Ye}function Ut(R,Y,se){const oe=Y.isScene===!0?Y.overrideMaterial:null;for(let $=0,be=R.length;$<be;$++){const we=R[$],Ke=we.object,Ye=we.geometry,lt=oe===null?we.material:oe,ct=we.group;Ke.layers.test(se.layers)&&Ui(Ke,Y,se,Ye,lt,ct)}}function Ui(R,Y,se,oe,$,be){R.onBeforeRender(A,Y,se,oe,$,be),R.modelViewMatrix.multiplyMatrices(se.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),$.onBeforeRender(A,Y,se,oe,R,be),$.transparent===!0&&$.side===ar&&$.forceSinglePass===!1?($.side=jn,$.needsUpdate=!0,A.renderBufferDirect(se,Y,oe,$,R,be),$.side=Xr,$.needsUpdate=!0,A.renderBufferDirect(se,Y,oe,$,R,be),$.side=ar):A.renderBufferDirect(se,Y,oe,$,R,be),R.onAfterRender(A,Y,se,oe,$,be)}function pi(R,Y,se){Y.isScene!==!0&&(Y=De);const oe=Fe.get(R),$=v.state.lights,be=v.state.shadowsArray,we=$.state.version,Ke=Xe.getParameters(R,$.state,be,Y,se),Ye=Xe.getProgramCacheKey(Ke);let lt=oe.programs;oe.environment=R.isMeshStandardMaterial?Y.environment:null,oe.fog=Y.fog,oe.envMap=(R.isMeshStandardMaterial?ne:b).get(R.envMap||oe.environment),oe.envMapRotation=oe.environment!==null&&R.envMap===null?Y.environmentRotation:R.envMapRotation,lt===void 0&&(R.addEventListener("dispose",ut),lt=new Map,oe.programs=lt);let ct=lt.get(Ye);if(ct!==void 0){if(oe.currentProgram===ct&&oe.lightsStateVersion===we)return gn(R,Ke),ct}else Ke.uniforms=Xe.getUniforms(R),R.onBeforeCompile(Ke,A),ct=Xe.acquireProgram(Ke,Ye),lt.set(Ye,ct),oe.uniforms=Ke.uniforms;const Ze=oe.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(Ze.clippingPlanes=Ae.uniform),gn(R,Ke),oe.needsLights=xi(R),oe.lightsStateVersion=we,oe.needsLights&&(Ze.ambientLightColor.value=$.state.ambient,Ze.lightProbe.value=$.state.probe,Ze.directionalLights.value=$.state.directional,Ze.directionalLightShadows.value=$.state.directionalShadow,Ze.spotLights.value=$.state.spot,Ze.spotLightShadows.value=$.state.spotShadow,Ze.rectAreaLights.value=$.state.rectArea,Ze.ltc_1.value=$.state.rectAreaLTC1,Ze.ltc_2.value=$.state.rectAreaLTC2,Ze.pointLights.value=$.state.point,Ze.pointLightShadows.value=$.state.pointShadow,Ze.hemisphereLights.value=$.state.hemi,Ze.directionalShadowMap.value=$.state.directionalShadowMap,Ze.directionalShadowMatrix.value=$.state.directionalShadowMatrix,Ze.spotShadowMap.value=$.state.spotShadowMap,Ze.spotLightMatrix.value=$.state.spotLightMatrix,Ze.spotLightMap.value=$.state.spotLightMap,Ze.pointShadowMap.value=$.state.pointShadowMap,Ze.pointShadowMatrix.value=$.state.pointShadowMatrix),oe.currentProgram=ct,oe.uniformsList=null,ct}function mi(R){if(R.uniformsList===null){const Y=R.currentProgram.getUniforms();R.uniformsList=Jl.seqWithValue(Y.seq,R.uniforms)}return R.uniformsList}function gn(R,Y){const se=Fe.get(R);se.outputColorSpace=Y.outputColorSpace,se.batching=Y.batching,se.batchingColor=Y.batchingColor,se.instancing=Y.instancing,se.instancingColor=Y.instancingColor,se.instancingMorph=Y.instancingMorph,se.skinning=Y.skinning,se.morphTargets=Y.morphTargets,se.morphNormals=Y.morphNormals,se.morphColors=Y.morphColors,se.morphTargetsCount=Y.morphTargetsCount,se.numClippingPlanes=Y.numClippingPlanes,se.numIntersection=Y.numClipIntersection,se.vertexAlphas=Y.vertexAlphas,se.vertexTangents=Y.vertexTangents,se.toneMapping=Y.toneMapping}function gi(R,Y,se,oe,$){Y.isScene!==!0&&(Y=De),N.resetTextureUnits();const be=Y.fog,we=oe.isMeshStandardMaterial?Y.environment:null,Ke=Z===null?A.outputColorSpace:Z.isXRRenderTarget===!0?Z.texture.colorSpace:So,Ye=(oe.isMeshStandardMaterial?ne:b).get(oe.envMap||we),lt=oe.vertexColors===!0&&!!se.attributes.color&&se.attributes.color.itemSize===4,ct=!!se.attributes.tangent&&(!!oe.normalMap||oe.anisotropy>0),Ze=!!se.morphAttributes.position,Et=!!se.morphAttributes.normal,Dt=!!se.morphAttributes.color;let wt=jr;oe.toneMapped&&(Z===null||Z.isXRRenderTarget===!0)&&(wt=A.toneMapping);const _n=se.morphAttributes.position||se.morphAttributes.normal||se.morphAttributes.color,gt=_n!==void 0?_n.length:0,tt=Fe.get(oe),_i=v.state.lights;if(W===!0&&(te===!0||R!==D)){const An=R===D&&oe.id===I;Ae.setState(oe,R,An)}let At=!1;oe.version===tt.__version?(tt.needsLights&&tt.lightsStateVersion!==_i.state.version||tt.outputColorSpace!==Ke||$.isBatchedMesh&&tt.batching===!1||!$.isBatchedMesh&&tt.batching===!0||$.isBatchedMesh&&tt.batchingColor===!0&&$.colorTexture===null||$.isBatchedMesh&&tt.batchingColor===!1&&$.colorTexture!==null||$.isInstancedMesh&&tt.instancing===!1||!$.isInstancedMesh&&tt.instancing===!0||$.isSkinnedMesh&&tt.skinning===!1||!$.isSkinnedMesh&&tt.skinning===!0||$.isInstancedMesh&&tt.instancingColor===!0&&$.instanceColor===null||$.isInstancedMesh&&tt.instancingColor===!1&&$.instanceColor!==null||$.isInstancedMesh&&tt.instancingMorph===!0&&$.morphTexture===null||$.isInstancedMesh&&tt.instancingMorph===!1&&$.morphTexture!==null||tt.envMap!==Ye||oe.fog===!0&&tt.fog!==be||tt.numClippingPlanes!==void 0&&(tt.numClippingPlanes!==Ae.numPlanes||tt.numIntersection!==Ae.numIntersection)||tt.vertexAlphas!==lt||tt.vertexTangents!==ct||tt.morphTargets!==Ze||tt.morphNormals!==Et||tt.morphColors!==Dt||tt.toneMapping!==wt||tt.morphTargetsCount!==gt)&&(At=!0):(At=!0,tt.__version=oe.version);let yn=tt.currentProgram;At===!0&&(yn=pi(oe,Y,$));let yi=!1,sn=!1,Fi=!1;const Bt=yn.getUniforms(),ti=tt.uniforms;if(He.useProgram(yn.program)&&(yi=!0,sn=!0,Fi=!0),oe.id!==I&&(I=oe.id,sn=!0),yi||D!==R){He.buffers.depth.getReversed()?(K.copy(R.projectionMatrix),T_(K),b_(K),Bt.setValue(H,"projectionMatrix",K)):Bt.setValue(H,"projectionMatrix",R.projectionMatrix),Bt.setValue(H,"viewMatrix",R.matrixWorldInverse);const ni=Bt.map.cameraPosition;ni!==void 0&&ni.setValue(H,he.setFromMatrixPosition(R.matrixWorld)),Ge.logarithmicDepthBuffer&&Bt.setValue(H,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(oe.isMeshPhongMaterial||oe.isMeshToonMaterial||oe.isMeshLambertMaterial||oe.isMeshBasicMaterial||oe.isMeshStandardMaterial||oe.isShaderMaterial)&&Bt.setValue(H,"isOrthographic",R.isOrthographicCamera===!0),D!==R&&(D=R,sn=!0,Fi=!0)}if($.isSkinnedMesh){Bt.setOptional(H,$,"bindMatrix"),Bt.setOptional(H,$,"bindMatrixInverse");const An=$.skeleton;An&&(An.boneTexture===null&&An.computeBoneTexture(),Bt.setValue(H,"boneTexture",An.boneTexture,N))}$.isBatchedMesh&&(Bt.setOptional(H,$,"batchingTexture"),Bt.setValue(H,"batchingTexture",$._matricesTexture,N),Bt.setOptional(H,$,"batchingIdTexture"),Bt.setValue(H,"batchingIdTexture",$._indirectTexture,N),Bt.setOptional(H,$,"batchingColorTexture"),$._colorsTexture!==null&&Bt.setValue(H,"batchingColorTexture",$._colorsTexture,N));const Wi=se.morphAttributes;if((Wi.position!==void 0||Wi.normal!==void 0||Wi.color!==void 0)&&st.update($,se,yn),(sn||tt.receiveShadow!==$.receiveShadow)&&(tt.receiveShadow=$.receiveShadow,Bt.setValue(H,"receiveShadow",$.receiveShadow)),oe.isMeshGouraudMaterial&&oe.envMap!==null&&(ti.envMap.value=Ye,ti.flipEnvMap.value=Ye.isCubeTexture&&Ye.isRenderTargetTexture===!1?-1:1),oe.isMeshStandardMaterial&&oe.envMap===null&&Y.environment!==null&&(ti.envMapIntensity.value=Y.environmentIntensity),sn&&(Bt.setValue(H,"toneMappingExposure",A.toneMappingExposure),tt.needsLights&&vi(ti,Fi),be&&oe.fog===!0&&Ie.refreshFogUniforms(ti,be),Ie.refreshMaterialUniforms(ti,oe,j,pe,v.state.transmissionRenderTarget[R.id]),Jl.upload(H,mi(tt),ti,N)),oe.isShaderMaterial&&oe.uniformsNeedUpdate===!0&&(Jl.upload(H,mi(tt),ti,N),oe.uniformsNeedUpdate=!1),oe.isSpriteMaterial&&Bt.setValue(H,"center",$.center),Bt.setValue(H,"modelViewMatrix",$.modelViewMatrix),Bt.setValue(H,"normalMatrix",$.normalMatrix),Bt.setValue(H,"modelMatrix",$.matrixWorld),oe.isShaderMaterial||oe.isRawShaderMaterial){const An=oe.uniformsGroups;for(let ni=0,Un=An.length;ni<Un;ni++){const _a=An[ni];q.update(_a,yn),q.bind(_a,yn)}}return yn}function vi(R,Y){R.ambientLightColor.needsUpdate=Y,R.lightProbe.needsUpdate=Y,R.directionalLights.needsUpdate=Y,R.directionalLightShadows.needsUpdate=Y,R.pointLights.needsUpdate=Y,R.pointLightShadows.needsUpdate=Y,R.spotLights.needsUpdate=Y,R.spotLightShadows.needsUpdate=Y,R.rectAreaLights.needsUpdate=Y,R.hemisphereLights.needsUpdate=Y}function xi(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return O},this.getActiveMipmapLevel=function(){return B},this.getRenderTarget=function(){return Z},this.setRenderTargetTextures=function(R,Y,se){Fe.get(R.texture).__webglTexture=Y,Fe.get(R.depthTexture).__webglTexture=se;const oe=Fe.get(R);oe.__hasExternalTextures=!0,oe.__autoAllocateDepthBuffer=se===void 0,oe.__autoAllocateDepthBuffer||et.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),oe.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(R,Y){const se=Fe.get(R);se.__webglFramebuffer=Y,se.__useDefaultFramebuffer=Y===void 0},this.setRenderTarget=function(R,Y=0,se=0){Z=R,O=Y,B=se;let oe=!0,$=null,be=!1,we=!1;if(R){const Ye=Fe.get(R);if(Ye.__useDefaultFramebuffer!==void 0)He.bindFramebuffer(H.FRAMEBUFFER,null),oe=!1;else if(Ye.__webglFramebuffer===void 0)N.setupRenderTarget(R);else if(Ye.__hasExternalTextures)N.rebindTextures(R,Fe.get(R.texture).__webglTexture,Fe.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const Ze=R.depthTexture;if(Ye.__boundDepthTexture!==Ze){if(Ze!==null&&Fe.has(Ze)&&(R.width!==Ze.image.width||R.height!==Ze.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");N.setupDepthRenderbuffer(R)}}const lt=R.texture;(lt.isData3DTexture||lt.isDataArrayTexture||lt.isCompressedArrayTexture)&&(we=!0);const ct=Fe.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(ct[Y])?$=ct[Y][se]:$=ct[Y],be=!0):R.samples>0&&N.useMultisampledRTT(R)===!1?$=Fe.get(R).__webglMultisampledFramebuffer:Array.isArray(ct)?$=ct[se]:$=ct,G.copy(R.viewport),ae.copy(R.scissor),ie=R.scissorTest}else G.copy(M).multiplyScalar(j).floor(),ae.copy(k).multiplyScalar(j).floor(),ie=J;if(He.bindFramebuffer(H.FRAMEBUFFER,$)&&oe&&He.drawBuffers(R,$),He.viewport(G),He.scissor(ae),He.setScissorTest(ie),be){const Ye=Fe.get(R.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_CUBE_MAP_POSITIVE_X+Y,Ye.__webglTexture,se)}else if(we){const Ye=Fe.get(R.texture),lt=Y||0;H.framebufferTextureLayer(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,Ye.__webglTexture,se||0,lt)}I=-1},this.readRenderTargetPixels=function(R,Y,se,oe,$,be,we){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ke=Fe.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&we!==void 0&&(Ke=Ke[we]),Ke){He.bindFramebuffer(H.FRAMEBUFFER,Ke);try{const Ye=R.texture,lt=Ye.format,ct=Ye.type;if(!Ge.textureFormatReadable(lt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ge.textureTypeReadable(ct)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Y>=0&&Y<=R.width-oe&&se>=0&&se<=R.height-$&&H.readPixels(Y,se,oe,$,ht.convert(lt),ht.convert(ct),be)}finally{const Ye=Z!==null?Fe.get(Z).__webglFramebuffer:null;He.bindFramebuffer(H.FRAMEBUFFER,Ye)}}},this.readRenderTargetPixelsAsync=async function(R,Y,se,oe,$,be,we){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ke=Fe.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&we!==void 0&&(Ke=Ke[we]),Ke){const Ye=R.texture,lt=Ye.format,ct=Ye.type;if(!Ge.textureFormatReadable(lt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ge.textureTypeReadable(ct))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(Y>=0&&Y<=R.width-oe&&se>=0&&se<=R.height-$){He.bindFramebuffer(H.FRAMEBUFFER,Ke);const Ze=H.createBuffer();H.bindBuffer(H.PIXEL_PACK_BUFFER,Ze),H.bufferData(H.PIXEL_PACK_BUFFER,be.byteLength,H.STREAM_READ),H.readPixels(Y,se,oe,$,ht.convert(lt),ht.convert(ct),0);const Et=Z!==null?Fe.get(Z).__webglFramebuffer:null;He.bindFramebuffer(H.FRAMEBUFFER,Et);const Dt=H.fenceSync(H.SYNC_GPU_COMMANDS_COMPLETE,0);return H.flush(),await w_(H,Dt,4),H.bindBuffer(H.PIXEL_PACK_BUFFER,Ze),H.getBufferSubData(H.PIXEL_PACK_BUFFER,0,be),H.deleteBuffer(Ze),H.deleteSync(Dt),be}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(R,Y=null,se=0){R.isTexture!==!0&&(ua("WebGLRenderer: copyFramebufferToTexture function signature has changed."),Y=arguments[0]||null,R=arguments[1]);const oe=Math.pow(2,-se),$=Math.floor(R.image.width*oe),be=Math.floor(R.image.height*oe),we=Y!==null?Y.x:0,Ke=Y!==null?Y.y:0;N.setTexture2D(R,0),H.copyTexSubImage2D(H.TEXTURE_2D,se,0,0,we,Ke,$,be),He.unbindTexture()},this.copyTextureToTexture=function(R,Y,se=null,oe=null,$=0){R.isTexture!==!0&&(ua("WebGLRenderer: copyTextureToTexture function signature has changed."),oe=arguments[0]||null,R=arguments[1],Y=arguments[2],$=arguments[3]||0,se=null);let be,we,Ke,Ye,lt,ct,Ze,Et,Dt;const wt=R.isCompressedTexture?R.mipmaps[$]:R.image;se!==null?(be=se.max.x-se.min.x,we=se.max.y-se.min.y,Ke=se.isBox3?se.max.z-se.min.z:1,Ye=se.min.x,lt=se.min.y,ct=se.isBox3?se.min.z:0):(be=wt.width,we=wt.height,Ke=wt.depth||1,Ye=0,lt=0,ct=0),oe!==null?(Ze=oe.x,Et=oe.y,Dt=oe.z):(Ze=0,Et=0,Dt=0);const _n=ht.convert(Y.format),gt=ht.convert(Y.type);let tt;Y.isData3DTexture?(N.setTexture3D(Y,0),tt=H.TEXTURE_3D):Y.isDataArrayTexture||Y.isCompressedArrayTexture?(N.setTexture2DArray(Y,0),tt=H.TEXTURE_2D_ARRAY):(N.setTexture2D(Y,0),tt=H.TEXTURE_2D),H.pixelStorei(H.UNPACK_FLIP_Y_WEBGL,Y.flipY),H.pixelStorei(H.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Y.premultiplyAlpha),H.pixelStorei(H.UNPACK_ALIGNMENT,Y.unpackAlignment);const _i=H.getParameter(H.UNPACK_ROW_LENGTH),At=H.getParameter(H.UNPACK_IMAGE_HEIGHT),yn=H.getParameter(H.UNPACK_SKIP_PIXELS),yi=H.getParameter(H.UNPACK_SKIP_ROWS),sn=H.getParameter(H.UNPACK_SKIP_IMAGES);H.pixelStorei(H.UNPACK_ROW_LENGTH,wt.width),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,wt.height),H.pixelStorei(H.UNPACK_SKIP_PIXELS,Ye),H.pixelStorei(H.UNPACK_SKIP_ROWS,lt),H.pixelStorei(H.UNPACK_SKIP_IMAGES,ct);const Fi=R.isDataArrayTexture||R.isData3DTexture,Bt=Y.isDataArrayTexture||Y.isData3DTexture;if(R.isRenderTargetTexture||R.isDepthTexture){const ti=Fe.get(R),Wi=Fe.get(Y),An=Fe.get(ti.__renderTarget),ni=Fe.get(Wi.__renderTarget);He.bindFramebuffer(H.READ_FRAMEBUFFER,An.__webglFramebuffer),He.bindFramebuffer(H.DRAW_FRAMEBUFFER,ni.__webglFramebuffer);for(let Un=0;Un<Ke;Un++)Fi&&H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,Fe.get(R).__webglTexture,$,ct+Un),R.isDepthTexture?(Bt&&H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,Fe.get(Y).__webglTexture,$,Dt+Un),H.blitFramebuffer(Ye,lt,be,we,Ze,Et,be,we,H.DEPTH_BUFFER_BIT,H.NEAREST)):Bt?H.copyTexSubImage3D(tt,$,Ze,Et,Dt+Un,Ye,lt,be,we):H.copyTexSubImage2D(tt,$,Ze,Et,Dt+Un,Ye,lt,be,we);He.bindFramebuffer(H.READ_FRAMEBUFFER,null),He.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else Bt?R.isDataTexture||R.isData3DTexture?H.texSubImage3D(tt,$,Ze,Et,Dt,be,we,Ke,_n,gt,wt.data):Y.isCompressedArrayTexture?H.compressedTexSubImage3D(tt,$,Ze,Et,Dt,be,we,Ke,_n,wt.data):H.texSubImage3D(tt,$,Ze,Et,Dt,be,we,Ke,_n,gt,wt):R.isDataTexture?H.texSubImage2D(H.TEXTURE_2D,$,Ze,Et,be,we,_n,gt,wt.data):R.isCompressedTexture?H.compressedTexSubImage2D(H.TEXTURE_2D,$,Ze,Et,wt.width,wt.height,_n,wt.data):H.texSubImage2D(H.TEXTURE_2D,$,Ze,Et,be,we,_n,gt,wt);H.pixelStorei(H.UNPACK_ROW_LENGTH,_i),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,At),H.pixelStorei(H.UNPACK_SKIP_PIXELS,yn),H.pixelStorei(H.UNPACK_SKIP_ROWS,yi),H.pixelStorei(H.UNPACK_SKIP_IMAGES,sn),$===0&&Y.generateMipmaps&&H.generateMipmap(tt),He.unbindTexture()},this.copyTextureToTexture3D=function(R,Y,se=null,oe=null,$=0){return R.isTexture!==!0&&(ua("WebGLRenderer: copyTextureToTexture3D function signature has changed."),se=arguments[0]||null,oe=arguments[1]||null,R=arguments[2],Y=arguments[3],$=arguments[4]||0),ua('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(R,Y,se,oe,$)},this.initRenderTarget=function(R){Fe.get(R).__webglFramebuffer===void 0&&N.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?N.setTextureCube(R,0):R.isData3DTexture?N.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?N.setTexture2DArray(R,0):N.setTexture2D(R,0),He.unbindTexture()},this.resetState=function(){O=0,B=0,Z=null,He.reset(),Tt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ur}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorspace=Ct._getDrawingBufferColorSpace(e),n.unpackColorSpace=Ct._getUnpackColorSpace()}}class jl extends ei{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new fr,this.environmentIntensity=1,this.environmentRotation=new fr,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class H2{constructor(e,n){this.isInterleavedBuffer=!0,this.array=e,this.stride=n,this.count=e!==void 0?e.length/n:0,this.usage=uf,this.updateRanges=[],this.version=0,this.uuid=Gr()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,n,r){e*=this.stride,r*=n.stride;for(let a=0,c=this.stride;a<c;a++)this.array[e+a]=n.array[r+a];return this}set(e,n=0){return this.array.set(e,n),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Gr()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const n=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),r=new this.constructor(n,this.stride);return r.setUsage(this.usage),r}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Gr()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Dn=new ce;class ao{constructor(e,n,r,a=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=n,this.offset=r,this.normalized=a}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let n=0,r=this.data.count;n<r;n++)Dn.fromBufferAttribute(this,n),Dn.applyMatrix4(e),this.setXYZ(n,Dn.x,Dn.y,Dn.z);return this}applyNormalMatrix(e){for(let n=0,r=this.count;n<r;n++)Dn.fromBufferAttribute(this,n),Dn.applyNormalMatrix(e),this.setXYZ(n,Dn.x,Dn.y,Dn.z);return this}transformDirection(e){for(let n=0,r=this.count;n<r;n++)Dn.fromBufferAttribute(this,n),Dn.transformDirection(e),this.setXYZ(n,Dn.x,Dn.y,Dn.z);return this}getComponent(e,n){let r=this.array[e*this.data.stride+this.offset+n];return this.normalized&&(r=ji(r,this.array)),r}setComponent(e,n,r){return this.normalized&&(r=kt(r,this.array)),this.data.array[e*this.data.stride+this.offset+n]=r,this}setX(e,n){return this.normalized&&(n=kt(n,this.array)),this.data.array[e*this.data.stride+this.offset]=n,this}setY(e,n){return this.normalized&&(n=kt(n,this.array)),this.data.array[e*this.data.stride+this.offset+1]=n,this}setZ(e,n){return this.normalized&&(n=kt(n,this.array)),this.data.array[e*this.data.stride+this.offset+2]=n,this}setW(e,n){return this.normalized&&(n=kt(n,this.array)),this.data.array[e*this.data.stride+this.offset+3]=n,this}getX(e){let n=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(n=ji(n,this.array)),n}getY(e){let n=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(n=ji(n,this.array)),n}getZ(e){let n=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(n=ji(n,this.array)),n}getW(e){let n=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(n=ji(n,this.array)),n}setXY(e,n,r){return e=e*this.data.stride+this.offset,this.normalized&&(n=kt(n,this.array),r=kt(r,this.array)),this.data.array[e+0]=n,this.data.array[e+1]=r,this}setXYZ(e,n,r,a){return e=e*this.data.stride+this.offset,this.normalized&&(n=kt(n,this.array),r=kt(r,this.array),a=kt(a,this.array)),this.data.array[e+0]=n,this.data.array[e+1]=r,this.data.array[e+2]=a,this}setXYZW(e,n,r,a,c){return e=e*this.data.stride+this.offset,this.normalized&&(n=kt(n,this.array),r=kt(r,this.array),a=kt(a,this.array),c=kt(c,this.array)),this.data.array[e+0]=n,this.data.array[e+1]=r,this.data.array[e+2]=a,this.data.array[e+3]=c,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const n=[];for(let r=0;r<this.count;r++){const a=r*this.data.stride+this.offset;for(let c=0;c<this.itemSize;c++)n.push(this.data.array[a+c])}return new Ni(new this.array.constructor(n),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new ao(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const n=[];for(let r=0;r<this.count;r++){const a=r*this.data.stride+this.offset;for(let c=0;c<this.itemSize;c++)n.push(this.data.array[a+c])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:n,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class V2 extends Nn{constructor(e=null,n=1,r=1,a,c,u,f,p,g=Jn,_=Jn,x,y){super(null,u,f,p,g,_,a,c,x,y),this.isDataTexture=!0,this.image={data:e,width:n,height:r},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class j2 extends hr{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){const e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}}class G2 extends H2{constructor(e,n,r=1){super(e,n),this.isInstancedInterleavedBuffer=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}clone(e){const n=super.clone(e);return n.meshPerAttribute=this.meshPerAttribute,n}toJSON(e){const n=super.toJSON(e);return n.isInstancedInterleavedBuffer=!0,n.meshPerAttribute=this.meshPerAttribute,n}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:_f}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=_f);const Gl={top:"#E2A8AE",horizon:"#F8A68E",glow:"#FFCB8C"},ug={cycle:!1,time:18,length:90},ui={cloudDirection:"right",cloudSpeed:3,flowers:3.7,grass:5,horizon:50,seed:7,voxelSize:10,depthBlur:4.9,haze:5,hover:10,wind:10,speed:10},W2=Math.PI/180,hf=1,lo=.47,Yg=.036,dg=40,fg=14,X2=0,sr=1,hg=2,q2=3;function Pt(s){const e=parseInt(s.slice(1),16);return[(e>>16&255)/255,(e>>8&255)/255,(e&255)/255]}const Gt={sun:Pt("#FFF7E8"),grassDark:Pt("#172604"),grassMid:Pt("#4A700E"),grassLight:Pt("#8AAA18"),grassTip:Pt("#CACC34"),rim:Pt("#F4D040"),groundDark:Pt("#162404"),groundMid:Pt("#34500E"),groundFar:Pt("#647616"),dapple:Pt("#B09A1C"),dirt:Pt("#74491E"),dirtDark:Pt("#4E3212"),turf:Pt("#6A8216"),turf2:Pt("#A4A026"),stem:Pt("#4A8C24"),leaf:Pt("#2C5A16"),hazeGold:Pt("#E2A832"),hazeSun:Pt("#F7944A")},ro={top:Pt("#5E9BE6"),horizon:Pt("#BCD9F2"),glow:Pt("#FFF4DC")},ca={top:Pt("#060A20"),horizon:Pt("#1A2350"),glow:Pt("#9DB0F0")},Y2=[1.1,1.1,1.08],$2=[.22,.27,.46],K2=[1.04,1.04,1.04],Z2=[.3,.34,.5],Wl=["#E0402C","#F08030","#F08AB0","#D04A9A","#3C6AE0","#7A4AD0","#F6F0EA","#F2C83A"],yd=[[.118,.655,.04,.735,"#D8352A","#F08030"],[.03,.69,.036,.765,"#F07A30","#F2C83A"],[.3,.728,.05,.83,"#F6F0EE","#F2C83A"],[.847,.69,.022,.745,"#E0508A","#F2C83A"],[.905,.655,.038,.74,"#F0507A","#F2C83A"],[.935,.74,.046,.85,"#F6B83A","#E09A2A"],[.69,.79,.07,.975,"#FFF4EC","#F4C24A"]],Q2=[[.45,1,.068,1.16,"#E890B0","#F2C83A"],[.95,.965,.068,1.16,"#F6C040","#E09A2A"]],J2=[[.075,.603,.018,.64,"#D88AB8","#F2C83A"],[.45,.598,.021,.64,"#3A5AE0","#F2C83A"],[.67,.603,.018,.642,"#D83030","#F2C83A"],[.63,.632,.019,.672,"#F4F0EA","#F2C83A"],[.2,.62,.018,.66,"#F08030","#F2C83A"],[.88,.598,.016,.632,"#F2E6D2","#F2C83A"],[.94,.62,.016,.655,"#F2C83A","#E86A2A"],[.61,.567,.012,.592,"#E86A2A","#F2C83A"],[.4,.575,.013,.6,"#7A4AD0","#F2C83A"]],pg=[{ax:1,color:"#F8D4B8",blocks:[[.83,.024,1.04,.127],[.74,.078,.8,.098],[.69,.098,.83,.127],[.615,.122,.82,.18],[.82,.122,.995,.17],[.67,.17,.99,.21]]},{ax:.3,color:"#F4B0BA",blocks:[[.19,.255,.415,.288],[.235,.243,.3,.256],[.27,.232,.37,.256],[.36,.246,.4,.256]]},{ax:.83,color:"#FAF2F2",blocks:[[.7,.318,.965,.352],[.72,.308,.79,.319],[.76,.296,.86,.319],[.86,.302,.93,.319],[.93,.311,.952,.319]]}],eE=[{min:1,def:2,ax:.5,dy:-.13,scale:.8},{min:1.5,def:1,ax:.66,dy:.05,scale:.9},{min:2.2,def:2,ax:.18,dy:-.18,scale:.7}],Jt=(s,e,n)=>Math.min(n,Math.max(e,Number.isFinite(s)?s:e)),Pi=(s,e,n)=>[s[0]+(e[0]-s[0])*n,s[1]+(e[1]-s[1])*n,s[2]+(e[2]-s[2])*n],fa=(s,e)=>[s[0]*e,s[1]*e,s[2]*e];function Sd(s,e){if(typeof s!="string")return e;let n=s.trim();const r=/^var\(\s*--[^,]+,\s*(.+)\)$/.exec(n);if(r&&(n=r[1].trim()),n[0]==="#"){let c=n.slice(1);(c.length===3||c.length===4)&&(c=c.split("").map(f=>f+f).join(""));const u=parseInt(c.slice(0,6),16);return c.length>=6&&!isNaN(u)?[(u>>16&255)/255,(u>>8&255)/255,(u&255)/255]:e}const a=/rgba?\(([^)]+)\)/i.exec(n);if(a){const c=a[1].split(/[\s,/]+/).filter(Boolean).map(parseFloat);if(c.length>=3&&c.slice(0,3).every(Number.isFinite))return[c[0]/255,c[1]/255,c[2]/255]}return e}function tE(s){return()=>{s|=0,s=s+1831565813|0;let e=Math.imul(s^s>>>15,1|s);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}function $g(s){const e=Jt((s-.6)/1.4,0,1);return 50-14*e*e*(3-2*e)}function Qn(s,e,n,r,a,c,u,f,p,g,_,x,y){s.push(e,n,r,a,c,u,f[0],f[1],f[2],p,g,_,x,y)}function nE(s,e,n){const r=tE(Math.round(Jt(n.seed,0,9999))*9973+17),a=s/e,c=Jt(n.horizon,30,70)/100,u=.5/Math.tan($g(a)*W2/2),f=Math.pow(2,(Jt(n.voxelSize,0,10)-5)/5),p=Yg*f,g=Jt(n.grass,0,10)/5,_=Jt(n.flowers,0,10)/5,x=Math.pow(Math.max(1,a/.5),.8),y=C=>C<=lo?C*c/lo:c+(C-lo)*(1-c)/(1-lo),E=C=>u*hf/Math.max(1e-4,C-c),T=(C,M)=>(C-a/2)/u*M,P=C=>a/2/u*C,S=(C,M)=>hf-(C-c)/u*M,v=(C,M)=>C/u*M,U=E(1),L=[],A=[],Q=[],O=[],B=C=>C<U*.94?Q:C<U*1.3?A:L,Z=(C,M,k,J,z,W,te=0)=>{const K=W?.3+r()*.7:r(),ue=Pi(Gt.grassMid,Gt.grassLight,.1+K*.6),he=(r()-.5)*.5;for(let Me=0;Me<z;Me++){const De=z>1?Me/(z-1):1;let xe=Pi(Gt.grassDark,ue,Math.min(1,.3+De*1.1));Me===z-1?xe=Pi(xe,Gt.grassTip,.55):Me===z-2&&(xe=Pi(xe,Gt.grassTip,.2));const Le=r();Le<.18?xe=fa(xe,.78):Le<.28&&(xe=Pi(xe,Gt.grassTip,.35)),Qn(C,M+Math.round(Me*he)*J*.8,te+(Me+.5)*J,-k,J*.8,J,J*.35,xe,De,M,-k,(Me+.5)*J,X2)}},I=.07*U,D=.17*U,G=U/.39,ae=r()*6.28,ie=r()*6.28;if(g>0){const C=u*Math.min(e,900),M=Math.sqrt(g);let k=U*.6;for(;k<48;){const z=p*Math.max(1,k/14),W=Math.max(.8*z*k,2*k*k/C)/M,te=z*1.5/M,K=P(k)+z*4,ue=k/U;for(let he=-K+r()*te;he<K;he+=te*(.6+r()*.8)){const Me=k+r()*W,De=.5+.5*Math.sin(he*2.3+Me*.9+ae)*Math.sin(he*.7-Me*1.7+ie),xe=(.22+.1/ue)*(.55+.45*r())*(.7+.6*De);let Le=Math.max(1,Math.round(xe/z));if(Me<G*(.85+r()*.3)&&Math.abs(he-I)<D+(r()-.5)*.12*U){if(r()>.08)continue;Le=1+Math.floor(r()*2)}Z(B(Me),he,Me,z,Le,!1)}k+=W}const J=(z,W,te,K,ue)=>{for(let he=0;he<z;he++){const Me=U*(.5+r()*.35),De=W+(te-W)*((he+r()*.8)/z),xe=v((.05+r()*.03)*.5*f,Me),Le=S(y(K+r()*(ue-K)),Me);Z(Q,T(De*a,Me),Me,xe,Math.max(3,Math.round(Le/xe)),!0)}};J(Math.round(11*x*M),0,.3,.72,.8),J(Math.round(8*x*M),.66,1,.84,.9)}const ve=(C,M,k,J,z,W,te)=>{const K=B(M),ue=-M,he=J*.55,Me=Math.max(1,Math.round(k/he)),De=k/Me,xe=Pi(Gt.stem,Gt.grassDark,r()*.25);for(let ot=0;ot<Me;ot++){const Fe=(ot+.5)*De;Qn(K,C,Fe,ue,he,De,he,ot%2?fa(xe,.9):xe,0,C,ue,Fe,sr)}if(te&&Me>2){const ot=Math.max(1,Math.floor(Me*.3)),Fe=Math.max(ot+1,Math.floor(Me*.55));Qn(K,C-he*1.05,(ot+.5)*De,ue,he*1.1,he*.9,he*1.1,Gt.leaf,0,C,ue,(ot+.5)*De,sr),Qn(K,C+he*1.05,(Fe+.5)*De,ue,he*1.1,he*.9,he*1.1,Gt.leaf,0,C,ue,(Fe+.5)*De,sr);for(let N=0;N<3;N++){const b=C+(N-1)*he*1.15,ne=ue+(r()-.5)*he*1.4,ye=he*(.9+r()*1.4);Qn(K,b,ye/2,ne,he*1.1,ye,he*1.1,fa(Gt.leaf,.75+r()*.3),0,C,ue,ye/2,sr)}}const Le=k+J*.5,H=()=>Pi(z,[1,1,1],(r()-.5)*.12),mt=J*.8,et=mt*.82,Ge=mt*.57,He=[[-mt,0,0],[mt,0,0],[0,et,-Ge],[0,-et,Ge]];for(const[ot,Fe,N]of He)Qn(K,C+ot,Le+Fe,ue+N,J,J,J,H(),0,C,ue,Le,sr);Qn(K,C,Le+J*.05,ue+J*.5,J*.75,J*.75,J*.75,W,0,C,ue,Le,sr)},ge=(C,M,k)=>{const J=E(y(C[3])),z=v(C[2]*.5*M,J),W=Math.max(z*1.5,S(y(C[1]),J)-z*.5);ve(T(C[0]*a,J),J,W,z,Pt(C[4]),Pt(C[5]),k)};if(_>0){for(const J of yd)ge(J,f,!0);for(const J of Q2)ge(J,f,!0);for(const J of J2)ge(J,f*1.35,r()<.5);for(let J=1;J<Math.floor(a/.9);J++){const z=yd[J*3%yd.length];ge([(J+.4+r()*.3)/Math.floor(a/.9+1),z[1],z[2]*.8,z[3],z[4],z[5]],f,!0)}const C=()=>Wl[Math.floor(r()*Wl.length)],M=Math.round(16*_*x);for(let J=0;J<M;J++){const z=.56+r()*.12,W=C(),te=W==="#F2C83A"?"#E86A2A":"#F2C83A";ge([r(),z,(.011+r()*.008)*(1+(z-.56)*4),z+.028+r()*.02,W,te],f,r()<.4)}const k=Math.round(70*_*x);for(let J=0;J<k;J++){const z=E(y(.502+Math.pow(r(),1.6)*.1)),W=p*Math.max(1,z/14),te=(r()*2-1)*P(z),K=W*(2+Math.floor(r()*4));Qn(L,te,K/2,-z,W*.5,K,W*.5,Gt.stem,0,te,-z,K/2,sr),Qn(L,te,K+W,-z,W*2.2,W*1.8,W*2.2,Pt(C()),0,te,-z,K+W,sr)}}const de=(C,M,k,J,z)=>{const W=E(y(k)),te=S(y(J),W),K=te/z,ue=K*3,he=C<=0?-P(W)*1.1:T(C*a,W),Me=M>=1?P(W)*1.1:T(M*a,W);for(let xe=he;xe<Me;xe+=K)Qn(L,xe+K/2,te/2,-W-ue/2,K,te,ue,Gt.dirt,8/K,0,0,0,hg);const De=K/5;for(let xe=he;xe<Me;xe+=De*(.5+r()*.7))if(Z(L,xe,W+r()*De*3,De,1+Math.floor(r()*5),!0,te),_>0&&r()<.05){const Le=xe+De/2;Qn(L,Le,te+De*2.2,-W-De,De*1.8,De*1.5,De*1.8,Pt(Wl[Math.floor(r()*Wl.length)]),0,Le,-W,De*2.2,sr)}};de(.62,1,.494,.438,4),de(.48,1,.508,.471,2),de(0,.23,.51,.476,2);{const M=P(170)*1.1,k=2.4;for(let J=-M;J<M;J+=k){const z=(J+M)/(2*M),W=Math.max(0,1-z*1.8);let te=1+(Math.sin(J*.09+ae)+r()*.8>.6?1:0);r()<.06+W*.2&&(te+=1);const K=te*k;Qn(L,J+k/2,K/2,-170-r()*10,k,K,k*3,Gt.dirt,8/k,0,0,0,hg)}}let pe=0;const j=(C,M,k,J)=>{const z=dg,W=M*a,te=.85+r()*.3,K=Pt(C.color),ue=C.blocks.map(Le=>[W+(Le[0]-C.ax)*.5*J,y(Le[1]+k),W+(Le[2]-C.ax)*.5*J,y(Le[3]+k)]),he=Math.min(...ue.map(Le=>Le[0])),Me=Math.max(...ue.map(Le=>Le[2])),De=v(Me-he,z),xe=T((he+Me)/2,z);pe=Math.max(pe,De);for(const Le of ue){const H=T(Le[0],z),mt=T(Le[2],z),et=S(Le[1],z),Ge=S(Le[3],z),He=De*(.6+r()*.5);Qn(O,(H+mt)/2,(et+Ge)/2,-z-He/2,mt-H,et-Ge,He,K,0,xe,te,0,q2)}};for(const C of pg)j(C,C.ax,0,1);for(const C of eE)a>=C.min&&j(pg[C.def],C.ax,C.dy,C.scale);const me=P(dg);return{main:L,soft:A,clouds:O,near:Q,tile:p*1.6,cloudHalf:me,cloudWrap:me+pe*.6}}const Rf=`
float h21(vec2 p) { p = fract(p * vec2(123.34, 456.21)); p += dot(p, p + 45.32); return fract(p.x * p.y); }
float vn(vec2 p) {
    vec2 i = floor(p), f = fract(p);
    f = f * f * (3.0 - 2.0 * f);
    return mix(mix(h21(i), h21(i + vec2(1.0, 0.0)), f.x), mix(h21(i + vec2(0.0, 1.0)), h21(i + vec2(1.0, 1.0)), f.x), f.y);
}
float fbm(vec2 p) { float s = 0.0, a = 0.5; for (int i = 0; i < 5; i++) { s += a * vn(p); p = p * 2.03 + 17.1; a *= 0.5; } return s; }
`,Kg=`
uniform vec3 uGlow;
uniform vec3 uLight;
uniform float uKeyDir;
uniform vec3 uHazeA;
uniform vec3 uHazeB;
uniform float uHazeK;
uniform vec2 uSunNdc;
uniform float uAspect;
float sunNear(vec2 ndc) { return exp(-length((ndc - uSunNdc) * vec2(uAspect, 1.0)) * 1.3); }
vec3 hazeOf(vec3 col, float depth, float sunP) {
    float fog = 1.0 - exp(-depth * uHazeK);
    return mix(col, mix(uHazeA, uHazeB, sunP), fog);
}
`,iE=`
attribute vec3 aCenter;
attribute vec3 aSize;
attribute vec4 aColor;
attribute vec4 aBend;
uniform float uTime;
uniform float uWind;
uniform float uAspect;
uniform sampler2D uPush;
uniform float uCloudShift;
uniform float uCloudWrap;
varying vec3 vColor;
varying vec3 vN;
varying vec3 vLocal;
varying vec3 vSize;
varying float vTip;
varying float vKind;
varying float vDepth;
varying vec3 vClip;
void main() {
    float kind = aBend.w;
    vec3 p = aCenter + position * aSize;
    if (kind < 1.5) {
        float h = aBend.z;
        vec2 r = aBend.xy;
        float s = sin(uTime * 0.7 - r.x * 0.32 - r.y * 0.04);
        float gust = s > 0.0 ? s * s * s : 0.0;
        float sway = sin(uTime * 2.1 + r.x * 3.7 + r.y * 2.9);
        float lean = uWind * (0.11 * gust + 0.022 * sway);
        vec4 rc = projectionMatrix * viewMatrix * vec4(r.x, h, r.y, 1.0);
        lean += texture2D(uPush, rc.xy / rc.w * 0.5 + 0.5).r;
        p.x += lean * h;
        p.y -= 0.5 * lean * lean * h;
    } else if (kind > 2.5) {
        float cx = aBend.x;
        float nx = mod(cx + uCloudShift * aBend.y + uCloudWrap, 2.0 * uCloudWrap) - uCloudWrap;
        p.x += nx - cx;
    }
    vec4 mv = viewMatrix * vec4(p, 1.0);
    gl_Position = projectionMatrix * mv;
    vColor = aColor.rgb;
    vTip = aColor.a;
    vKind = kind;
    vN = normal;
    vLocal = position;
    vSize = aSize;
    vDepth = -mv.z;
    vClip = gl_Position.xyw;
}
`,rE=`
uniform vec3 uRim;
uniform float uRimK;
uniform vec3 uCloudLight;
uniform float uCloudWhite;
uniform vec3 uDirt;
uniform vec3 uDirt2;
uniform vec3 uTurf;
uniform vec3 uTurf2;
varying vec3 vColor;
varying vec3 vN;
varying vec3 vLocal;
varying vec3 vSize;
varying float vTip;
varying float vKind;
varying float vDepth;
varying vec3 vClip;
${Rf}
${Kg}
void main() {
    vec3 n = vN;
    vec3 col = vColor;
    float sunP = sunNear(vClip.xy / vClip.z);
    if (vKind > 2.5) {
        col = mix(col, vec3(1.0), uCloudWhite);
        vec3 top = mix(col, vec3(1.0), 0.45);
        vec3 under = col * mix(vec3(0.88, 0.66, 0.56), vec3(0.86, 0.88, 0.94), uCloudWhite);
        float lit = 0.5 + 0.5 * n.x * uKeyDir;
        if (n.y < -0.5) col = under;
        else if (abs(n.x) > 0.5) col = mix(mix(col, under, 0.5), mix(col, top, 0.4), lit);
        else col = mix(mix(col, under, 0.3), mix(col, top, 0.3), vLocal.y + 0.5);
        gl_FragColor = vec4(mix(col * uCloudLight, uHazeA, 0.08), 1.0);
        return;
    }
    if (vKind > 1.5) {
        vec3 lp = (vLocal + 0.5) * vSize * vTip;
        vec2 uv = abs(n.y) > 0.5 ? lp.xz : (abs(n.x) > 0.5 ? lp.zy : lp.xy);
        vec2 tx = floor(uv);
        float hs = h21(tx + n.xz * 31.0);
        float lip = 1.0 + floor(h21(vec2(tx.x, 7.0)) * 2.5);
        bool turf = n.y > 0.5 || (vSize.y * vTip - lp.y) < lip;
        col = turf ? mix(uTurf, uTurf2, hs) : mix(uDirt, uDirt2, hs);
    }
    float side = abs(n.x) > 0.5 ? 0.5 + 0.5 * n.x * uKeyDir : 0.0;
    float face = n.y > 0.5 ? 0.95 : (abs(n.x) > 0.5 ? mix(0.55, 0.88, side) : 0.68);
    col *= face;
    col = mix(col, col * uGlow * 1.3, max(n.y, 0.0) * 0.2 + side * 0.25);
    col *= uLight;
    if (vKind < 0.5) col += uRim * uRimK * pow(vTip, 2.0) * (0.04 + 0.3 * sunP + 0.5 * smoothstep(5.0, 25.0, vDepth));
    gl_FragColor = vec4(hazeOf(col, vDepth, sunP), 1.0);
}
`,sE=`
varying vec3 vW;
varying float vDepth;
varying vec3 vClip;
void main() {
    vec4 wp = modelMatrix * vec4(position, 1.0);
    vW = wp.xyz;
    vec4 mv = viewMatrix * wp;
    gl_Position = projectionMatrix * mv;
    vDepth = -mv.z;
    vClip = gl_Position.xyw;
}
`,oE=`
uniform float uTile;
uniform vec3 uGDark;
uniform vec3 uGMid;
uniform vec3 uGFar;
uniform vec3 uDapple;
varying vec3 vW;
varying float vDepth;
varying vec3 vClip;
${Rf}
${Kg}
void main() {
    float d = -vW.z;
    vec2 cell = floor(vW.xz / uTile);
    float hs = h21(cell);
    float chk = mod(cell.x + cell.y, 2.0);
    vec3 tile = mix(uGDark, uGMid, chk * 0.45 + hs * 0.55);
    float dap = smoothstep(0.5, 0.68, vn(cell * 0.16 + 11.0));
    tile = mix(tile, uDapple * (0.75 + 0.45 * hs), dap * 0.6);
    vec3 far = mix(uGMid, uGFar, smoothstep(3.0, 30.0, d));
    vec3 col = mix(far, tile, clamp(1.4 - d / 14.0, 0.0, 1.0));
    col = mix(col, col * uGlow * 1.3, 0.25) * uLight;
    float sunP = sunNear(vClip.xy / vClip.z);
    gl_FragColor = vec4(hazeOf(col, vDepth, sunP), 1.0);
}
`,Xl=`
varying vec2 vUv;
void main() { vUv = position.xy * 0.5 + 0.5; gl_Position = vec4(position.xy, 0.0, 1.0); }
`,aE=`
uniform float uAspect;
uniform float uHy;
uniform vec3 uTop;
uniform vec3 uHor;
uniform vec3 uGlow;
uniform vec3 uSun;
uniform vec2 uSunPos;
uniform float uSunSize;
uniform float uSunK;
uniform vec2 uMoonPos;
uniform float uMoonK;
uniform float uGold;
uniform float uNight;
uniform float uTime;
uniform float uClock;
varying vec2 vUv;
${Rf}
void main() {
    vec2 p = vec2(vUv.x * uAspect, 1.0 - vUv.y);
    float t = clamp(p.y / uHy, 0.0, 1.0);
    vec3 peach = mix(mix(uTop, uHor, 0.5), uGlow, 0.12 * uGold);
    vec3 c = mix(uTop, peach, smoothstep(0.0, 0.42, t));
    c = mix(c, uHor, smoothstep(0.5, 0.95, t));
    c = mix(c, c * vec3(0.95, 0.97, 1.06), (1.0 - t) * vUv.x * 0.7 * uGold);
    vec2 q = p - uSunPos;
    float g1 = exp(-dot(q * vec2(4.0, 6.0), q * vec2(4.0, 6.0)));
    float g2 = exp(-length(q * vec2(1.6, 3.0)) * 3.2);
    float pinkB = smoothstep(0.62, 0.8, t) * (1.0 - smoothstep(0.9, 1.0, t)) * smoothstep(0.25, 0.9, vUv.x) * uGold;
    c = mix(c, mix(uHor, vec3(0.96, 0.56, 0.58), 0.45), pinkB * 0.6);
    c = mix(c, uGlow, clamp((g1 * 0.6 + g2 * 0.3) * uSunK, 0.0, 1.0));
    c = mix(c, mix(uGlow, uSun, 0.6), exp(-length(q * vec2(1.0, 1.7)) * 10.0) * 0.85 * uSunK);
    vec2 sg = p * 110.0;
    vec2 cell = floor(sg);
    float hs = h21(cell);
    vec2 sd = abs(fract(sg) - (vec2(h21(cell + 3.1), h21(cell + 7.7)) * 0.6 + 0.2));
    float star = step(0.982, hs) * step(max(sd.x, sd.y), 0.07 + 0.09 * h21(cell + 1.7));
    star *= 0.55 + 0.45 * sin(uClock * (1.5 + hs * 3.0) + hs * 40.0);
    c += vec3(0.92, 0.95, 1.0) * star * uNight * (1.0 - smoothstep(0.55, 0.95, t));
    vec2 sp = vec2(p.x * 1.3 + uTime * 0.004, p.y * 15.0);
    float n = fbm(sp + fbm(sp * 0.5) * 1.6);
    float band = smoothstep(0.12, 0.3, t) * (1.0 - smoothstep(0.86, 1.0, t));
    vec3 wisp = mix(mix(uHor, vec3(1.0, 0.88, 0.8), 0.45), uGlow, g2);
    c = mix(c, wisp, smoothstep(0.55, 0.8, n) * band * 0.4 * (1.0 - 0.7 * uNight));
    vec2 mq = p - uMoonPos;
    vec2 msq = abs(mq) - vec2(uSunSize * 0.42);
    float mbox = max(msq.x, msq.y);
    float moonM = (1.0 - smoothstep(-0.0015, 0.0015, mbox)) * uMoonK;
    float sea = step(0.7, h21(floor((mq / (uSunSize * 0.84) + 0.5) * 6.0) + 5.0)) * 0.16;
    c += vec3(0.55, 0.65, 1.0) * exp(-max(mbox, 0.0) / 0.03) * 0.25 * uMoonK;
    c = mix(c, vec3(0.9, 0.93, 1.0) - sea, moonM);
    vec2 sq = abs(q) - vec2(uSunSize * 0.5);
    float box = max(sq.x, sq.y);
    float sunM = 1.0 - smoothstep(-0.0015, 0.0015, box);
    c += uGlow * exp(-max(box, 0.0) / 0.014) * 0.35 * uSunK;
    c = mix(c, uSun, sunM);
    c = mix(c, mix(uHor, uGlow, 0.5), step(uHy, p.y));
    c += (h21(gl_FragCoord.xy) - 0.5) / 255.0;
    gl_FragColor = vec4(c, 1.0);
}
`,lE=`
uniform sampler2D tMap;
uniform vec2 uStep;
varying vec2 vUv;
void main() {
    vec4 s = vec4(0.0);
    float w = 0.0;
    for (int i = -6; i <= 6; i++) {
        float fi = float(i);
        float k = exp(-fi * fi / 18.0);
        s += texture2D(tMap, vUv + uStep * fi) * k;
        w += k;
    }
    gl_FragColor = s / w;
}
`,cE=`
uniform sampler2D tMap;
varying vec2 vUv;
void main() { gl_FragColor = texture2D(tMap, vUv); }
`,uE=`
uniform float uAspect;
uniform float uHy;
uniform vec2 uSunPos;
uniform vec2 uMoonPos;
uniform float uMoonK;
uniform vec3 uGlow;
uniform float uGlowK;
varying vec2 vUv;
void main() {
    vec2 p = vec2(vUv.x * uAspect, 1.0 - vUv.y);
    vec2 q = p - uSunPos;
    float r = length(q * vec2(0.8, 1.0));
    float g = 0.28 * exp(-r * r / 0.004) + 0.12 * exp(-r / 0.12)
            + 0.18 * exp(-abs(p.y - uHy) / 0.025) * exp(-abs(q.x) / 0.35) * exp(-max(abs(q.y) - 0.08, 0.0) / 0.1);
    vec2 mq = p - uMoonPos;
    float mr = length(mq);
    float gm = (0.16 * exp(-mr * mr / 0.003) + 0.05 * exp(-mr / 0.1)) * uMoonK;
    vec3 glow = uGlow * g * uGlowK + vec3(0.55, 0.65, 1.0) * gm;
    vec2 v = vUv - 0.5;
    float vig = smoothstep(0.35, 0.95, length(v * vec2(1.0, 1.15)) * 1.2) * 0.14;
    gl_FragColor = vec4(glow * (1.0 - vig) + vec3(0.12, 0.03, 0.0) * vig, vig);
}
`,Md=[0,1,2,4],dE=[0,1,3,4];function ql(s,e,n){const r=new j2;r.setAttribute("position",s.getAttribute("position").clone()),r.setAttribute("normal",s.getAttribute("normal").clone());const a=s.getIndex().array,c=[];for(const f of e)for(let p=0;p<6;p++)c.push(a[f*6+p]);r.setIndex(c);const u=new G2(new Float32Array(n),fg);return r.setAttribute("aCenter",new ao(u,3,0)),r.setAttribute("aSize",new ao(u,3,3)),r.setAttribute("aColor",new ao(u,4,6)),r.setAttribute("aBend",new ao(u,4,10)),r.instanceCount=n.length/fg,r}const Hi=s=>new ce(s[0],s[1],s[2]),ds=(s,e)=>s.value.set(e[0],e[1],e[2]),ha=(s,e,n)=>{const r=Jt((n-s)/(e-s),0,1);return r*r*(3-2*r)},fE=(s,e,n,r,a,c)=>[s[0]*r+e[0]*a+n[0]*c,s[1]*r+e[1]*a+n[1]*c,s[2]*r+e[2]*a+n[2]*c];function hE(s){const e=(s-6)/24*Math.PI*2,n=Math.sin(e),r=ha(.12,.5,n),a=(1-r)*ha(-.2,0,n);return{th:e,e:n,day:r,gold:a,night:1-r-a}}const Or=28,pE=1.4,mE=.22;function gE(s={}){const{flowers:e=ui.flowers,grass:n=ui.grass,horizon:r=ui.horizon,seed:a=ui.seed,voxelSize:c=ui.voxelSize,depthBlur:u=ui.depthBlur,haze:f=ui.haze,hover:p=ui.hover,wind:g=ui.wind,speed:_=ui.speed,cloudDirection:x=ui.cloudDirection,cloudSpeed:y=ui.cloudSpeed,style:E}=s,T={...Gl,...s.sky},P={...ug,...s.day},S=pt.useRef(null),v=pt.useRef(null),U={flowers:e,grass:n,horizon:r,seed:a,voxelSize:c,depthBlur:u,haze:f,hover:p,wind:g,speed:_,cloudDirection:x,cloudSpeed:y,sky:T,day:P},L=pt.useRef(U);return L.current=U,pt.useEffect(()=>{const A=S.current,Q=v.current;if(!A||!Q)return;let O;try{O=new B2({canvas:Q,antialias:!0,alpha:!1,powerPreference:"high-performance"})}catch{return}O.autoClear=!1;const B=new fi(50,1,.05,8e3);B.position.set(0,hf,0);const Z=new Vg(-1,1,1,-1,0,1),I={uTime:{value:0},uWind:{value:1},uAspect:{value:1},uGlow:{value:new ce},uLight:{value:new ce(1,1,1)},uKeyDir:{value:-1},uHazeA:{value:new ce},uHazeB:{value:new ce},uHazeK:{value:.0085},uSunNdc:{value:new Lt}},D=new Vn({vertexShader:iE,fragmentShader:rE,uniforms:{...I,uPush:{value:null},uCloudShift:{value:0},uCloudWrap:{value:100},uRim:{value:Hi(Gt.rim)},uRimK:{value:1},uCloudLight:{value:new ce(1,1,1)},uCloudWhite:{value:0},uDirt:{value:Hi(Gt.dirt)},uDirt2:{value:Hi(Gt.dirtDark)},uTurf:{value:Hi(Gt.turf)},uTurf2:{value:Hi(Gt.turf2)}}}),G=new Vn({vertexShader:sE,fragmentShader:oE,uniforms:{...I,uTile:{value:Yg*1.6},uGDark:{value:Hi(Gt.groundDark)},uGMid:{value:Hi(Gt.groundMid)},uGFar:{value:Hi(Gt.groundFar)},uDapple:{value:Hi(Gt.dapple)}}}),ae=new Vn({vertexShader:Xl,fragmentShader:aE,depthTest:!1,depthWrite:!1,uniforms:{uAspect:I.uAspect,uGlow:I.uGlow,uTime:I.uTime,uClock:{value:0},uHy:{value:.47},uTop:{value:new ce},uHor:{value:new ce},uSun:{value:Hi(Gt.sun)},uSunPos:{value:new Lt},uSunSize:{value:.065},uSunK:{value:1},uMoonPos:{value:new Lt},uMoonK:{value:0},uGold:{value:1},uNight:{value:0}}}),ie=new Vn({vertexShader:Xl,fragmentShader:lE,depthTest:!1,depthWrite:!1,uniforms:{tMap:{value:null},uStep:{value:new Lt}}}),ve=new Vn({vertexShader:Xl,fragmentShader:cE,depthTest:!1,depthWrite:!1,transparent:!0,premultipliedAlpha:!0,uniforms:{tMap:{value:null}}}),ge=new Vn({vertexShader:Xl,fragmentShader:uE,depthTest:!1,depthWrite:!1,transparent:!0,premultipliedAlpha:!0,uniforms:{uAspect:I.uAspect,uGlow:I.uGlow,uHy:ae.uniforms.uHy,uSunPos:ae.uniforms.uSunPos,uMoonPos:ae.uniforms.uMoonPos,uMoonK:ae.uniforms.uMoonK,uGlowK:{value:1}}}),de=new hr;de.setAttribute("position",new Wr([-1,-1,0,3,-1,0,-1,3,0],3));const pe=new Cn(de,ve);pe.frustumCulled=!1;const j=new jl;j.add(pe);const me=new Cn(de,ae);me.frustumCulled=!1,me.renderOrder=-1;const C=new xa(8e3,8e3).rotateX(-Math.PI/2).translate(0,0,-3950),M=new Cn(C,G);M.frustumCulled=!1;const k=new jl;k.add(me,M);const J=new jl,z=new jl,W=new Eo(1,1,1);let te=[];const K={depthBuffer:!0,type:Gi},ue=new Ii(1,1,{...K,samples:4}),he=new Ii(1,1,{depthBuffer:!1}),Me=new Ii(1,1,K),De=new Ii(1,1,{depthBuffer:!1}),xe={x:0,y:0,sx:0,sy:0,vx:0,inside:!1,down:!1,over:0,press:0};let Le=0,H=new Float32Array(0),mt=new Float32Array(0),et=new Uint16Array(0),Ge=null,He=!1;const ot=ze=>{const at=Math.round(Jt(Or*ze,8,96));at!==Le&&(Le=at,H=new Float32Array(Le*Or),mt=new Float32Array(Le*Or),et=new Uint16Array(Le*Or),Ge==null||Ge.dispose(),Ge=new V2(et,Le,Or,Ef,yo),Ge.minFilter=hi,Ge.magFilter=hi,Ge.needsUpdate=!0,D.uniforms.uPush.value=Ge,He=!1)},Fe=(ze,at,_t)=>{const Vt=1-Math.exp(-ze/.06),Nt=xe.sx+(xe.x-xe.sx)*Vt,pn=xe.sy+(xe.y-xe.sy)*Vt,Gn=ze>0?(Nt-xe.sx)/ze:0;xe.vx+=(Gn-xe.vx)*(1-Math.exp(-ze/.08)),xe.sx=Nt,xe.sy=pn;const Wn=xe.over*at;if(!Ge||He&&Wn<.001)return;const mn=.22+.12*xe.press,Ut=1/(mn*mn),Ui=.2*(1+.8*xe.press),pi=Jt(xe.vx*_t*.035,-.22,.22),mi=pE*Math.PI*2,gn=Math.max(1,Math.ceil(ze*120)),gi=ze/gn;let vi=0;for(let xi=0;xi<Or;xi++){const R=(xi+.5)/Or*2-1-pn;for(let Y=0;Y<Le;Y++){const se=xi*Le+Y;let oe=0;if(Wn>.001){const we=((Y+.5)/Le*2-1-Nt)*_t;oe=Math.exp(-(we*we+R*R)*Ut)*Wn*(Ui*we/Math.sqrt(we*we+.004)+pi)}let $=H[se],be=mt[se];for(let we=0;we<gn;we++)be+=(mi*mi*(oe-$)-2*mE*mi*be)*gi,$+=be*gi;H[se]=$,mt[se]=be,et[se]=G_.toHalfFloat($),vi+=Math.abs($)+Math.abs(be)}}Ge.needsUpdate=!0,He=vi<1e-4*Le*Or};let N=0,b=0,ne=1;const ye=()=>{if(N=A.clientWidth,b=A.clientHeight,ne=Math.min(2,window.devicePixelRatio||1),N<2||b<2)return;O.setPixelRatio(ne),O.setSize(N,b,!1);const ze=Math.round(N*ne),at=Math.round(b*ne);ue.setSize(ze,at),he.setSize(ze,at),Me.setSize(Math.ceil(ze/2),Math.ceil(at/2)),De.setSize(Math.ceil(ze/2),Math.ceil(at/2)),ot(N/b)};ye();const Ee=typeof ResizeObserver<"u"?new ResizeObserver(ye):null;Ee==null||Ee.observe(A);let _e=!0;const Xe=typeof IntersectionObserver<"u"?new IntersectionObserver(ze=>_e=ze.some(at=>at.isIntersecting),{rootMargin:"128px"}):null;Xe==null||Xe.observe(A);const Ie=ze=>{const at=A.getBoundingClientRect();xe.x=(ze.clientX-at.left)/at.width*2-1,xe.y=1-(ze.clientY-at.top)/at.height*2,xe.inside||(xe.sx=xe.x,xe.sy=xe.y,xe.vx=0),xe.inside=!0},Be=ze=>{Ie(ze),xe.down=!0},dt=()=>xe.down=!1,Ae=()=>xe.inside=!1;A.addEventListener("pointermove",Ie),A.addEventListener("pointerdown",Be),A.addEventListener("pointerleave",Ae),window.addEventListener("pointerup",dt),window.addEventListener("pointercancel",dt);const Ve=typeof window.matchMedia=="function"&&window.matchMedia("(prefers-reduced-motion: reduce)").matches;let nt="",st=-1e9,je={aspect:1,h:lo,cloudHalf:1,cloudWrap:100};const xt=(ze,at)=>{const _t=L.current,Vt=nE(N,b,_t);for(const Nt of te)Nt.removeFromParent(),Nt.geometry.dispose();te=[new Cn(ql(W,Md,Vt.main),D),new Cn(ql(W,Md,Vt.soft),D),new Cn(ql(W,dE,Vt.clouds),D),new Cn(ql(W,Md,Vt.near),D)];for(const Nt of te)Nt.frustumCulled=!1;k.add(te[0],te[2]),J.add(te[1]),z.add(te[3]),G.uniforms.uTile.value=Vt.tile,je={aspect:N/b,h:Jt(_t.horizon,30,70)/100,cloudHalf:Vt.cloudHalf,cloudWrap:Vt.cloudWrap},nt=ze,st=at},ht=(ze,at,_t)=>{const Vt=_t/6;pe.material=ie,ie.uniforms.tMap.value=ze.texture,ie.uniforms.uStep.value.set(Vt/ze.width,0),O.setRenderTarget(at),O.render(j,Z),ie.uniforms.tMap.value=at.texture,ie.uniforms.uStep.value.set(0,Vt/ze.height),O.setRenderTarget(ze),O.render(j,Z)},Tt=(ze,at,_t,Vt)=>{O.setRenderTarget(at),O.setClearColor(0,0),O.clear(!0,!0,!1),O.render(ze,B),Vt>.3&&ht(at,_t,Vt),O.setRenderTarget(null),pe.material=ve,ve.uniforms.tMap.value=at.texture,O.render(j,Z)};let q=0,Ne=0,fe=0,Se=ug.time,ke=Number.NaN,Ue=-1,ut=-1,It=0;const Kt=ze=>{It=requestAnimationFrame(Kt);const at=ut<0?0:Math.min(.05,(ze-ut)/1e3);if(ut=ze,!_e||N<2||b<2)return;const _t=L.current,Vt=[N,b,_t.flowers,_t.grass,_t.horizon,_t.seed,_t.voxelSize].join("|");Vt!==nt&&(nt===""||ze-st>160)&&xt(Vt,ze);const Nt=N/b,pn=je.h,Gn=Ve?0:Jt(_t.hover,0,10)/5,Wn=1-Math.exp(-at/.35);if(xe.over+=((xe.inside?1:0)-xe.over)*Wn,xe.press+=((xe.down&&xe.inside?1:0)-xe.press)*(1-Math.exp(-at/.15)),Fe(at,Gn,Nt),B.fov=$g(je.aspect),B.aspect=Nt,B.setViewOffset(N,b,0,(.5-pn)*b,N,b),B.updateProjectionMatrix(),!Ve){q+=at*Jt(_t.speed,0,10)/5,Ne+=at;const ct=_t.cloudDirection==="left"?-1:1;fe+=ct*Jt(_t.cloudSpeed,0,10)*.006*2*je.cloudHalf*at}const mn=_t.day;mn.time!==ke&&(Se=Jt(mn.time,0,24),ke=mn.time),mn.cycle?Ve||(Se=(Se+at*24/Jt(mn.length,5,3600))%24):Se=Jt(mn.time,0,24);const Ut=hE(Se),Ui=pn-.041*pn/lo-.0325,pi=Ui-.13,mi=Nt/2-.03,gn=[Nt/2+Math.cos(Ut.th)*mi,Ui-Math.sin(Ut.th)*pi],gi=[Nt/2-Math.cos(Ut.th)*mi,Ui+Math.sin(Ut.th)*pi],vi=ha(-.12,.02,Ut.e),xi=ha(.06,.22,-Ut.e),R=Ut.e>-.3?gn:gi;Ue+=(Jt((R[0]-Nt/2)/(Nt/2),-1,1)-Ue)*(1-Math.exp(-at/.8)),at===0&&(Ue=Jt((R[0]-Nt/2)/(Nt/2),-1,1));const Y=_t.sky,se=Sd(Y.top,Pt(Gl.top)),oe=Sd(Y.horizon,Pt(Gl.horizon)),$=Sd(Y.glow,Pt(Gl.glow)),be=(ct,Ze,Et)=>fE(ct,Ze,Et,Ut.day,Ut.gold,Ut.night),we=be(ro.top,se,ca.top),Ke=be(ro.horizon,oe,ca.horizon),Ye=be(ro.glow,$,ca.glow);I.uTime.value=q,I.uWind.value=Jt(_t.wind,0,10)/5,I.uAspect.value=Nt,ds(I.uGlow,Ye),ds(I.uLight,be(Y2,[1,1,1],$2)),I.uKeyDir.value=Ue,ds(I.uHazeA,be(Pi(ro.horizon,[.86,.9,.95],.3),Pi(oe,Gt.hazeGold,.7),fa(ca.horizon,.9))),ds(I.uHazeB,be(Pi(ro.glow,ro.horizon,.5),Pi($,Gt.hazeSun,.55),fa(ca.glow,.35))),I.uHazeK.value=.0017*Jt(_t.haze,0,10),I.uSunNdc.value.set(R[0]/Nt*2-1,1-2*R[1]),D.uniforms.uCloudShift.value=fe,D.uniforms.uCloudWrap.value=je.cloudWrap,D.uniforms.uRimK.value=vi*(1-.5*Ut.day)+.15*xi*ha(-.3,-.5,Ut.e),ds(D.uniforms.uCloudLight,be(K2,[1,1,1],Z2)),D.uniforms.uCloudWhite.value=Ut.day*.8+Ut.night*.6,ae.uniforms.uHy.value=pn,ds(ae.uniforms.uTop,we),ds(ae.uniforms.uHor,Ke),ae.uniforms.uSunPos.value.set(gn[0],gn[1]),ae.uniforms.uMoonPos.value.set(gi[0],gi[1]),ae.uniforms.uSunK.value=vi*(1-.4*Ut.day),ae.uniforms.uMoonK.value=xi,ae.uniforms.uGold.value=Ut.gold,ae.uniforms.uNight.value=Ut.night,ae.uniforms.uClock.value=Ne,ge.uniforms.uGlowK.value=(.9+.1*Math.cos(q*.8))*vi*(1-.6*Ut.day);const lt=Jt(_t.depthBlur,0,10)/5*b*ne;O.setRenderTarget(null),O.setClearColor(0,1),O.clear(),O.render(k,B),Tt(J,ue,he,lt*.005),Tt(z,Me,De,lt*.022*.5),pe.material=ge,O.render(j,Z)};return It=requestAnimationFrame(Kt),()=>{cancelAnimationFrame(It),Ee==null||Ee.disconnect(),Xe==null||Xe.disconnect(),A.removeEventListener("pointermove",Ie),A.removeEventListener("pointerdown",Be),A.removeEventListener("pointerleave",Ae),window.removeEventListener("pointerup",dt),window.removeEventListener("pointercancel",dt);for(const ze of te)ze.geometry.dispose();for(const ze of[W,de,C])ze.dispose();for(const ze of[D,G,ae,ie,ve,ge])ze.dispose();for(const ze of[ue,he,Me,De])ze.dispose();Ge==null||Ge.dispose(),O.dispose()}},[]),h.jsx("div",{ref:S,style:{width:"100%",height:"100%",...E,position:"relative",overflow:"hidden",background:`linear-gradient(${T.top}, ${T.horizon} ${r}%, #2E4410 ${r}%)`},children:h.jsx("canvas",{ref:v,style:{position:"absolute",inset:0,width:"100%",height:"100%",display:"block"}})})}/**
 * @license lucide-react v1.70.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vE=s=>s==null?void 0:s.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license lucide-react v1.70.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */function xE(s,e,n=[]){if(e==null)throw new Error("[lucide]: iconNode is required when icon name is used");return{name:vE(s),size:24,node:e,...n.length>0?{aliases:n}:{}}}/**
 * @license lucide-react v1.70.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _E=s=>{let e="",n=!1;for(const r of s){if(r==="-"||r==="_"||r<=" "){n=e.length>0;continue}e.length===0?e+=r.toLowerCase():e+=n?r.toUpperCase():r,n=!1}return e};/**
 * @license lucide-react v1.70.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yE=s=>{const e=_E(s);return e.charAt(0).toUpperCase()+e.slice(1)};/**
 * @license lucide-react v1.70.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pf=(...s)=>s.filter((e,n,r)=>!!e&&e.trim()!==""&&r.indexOf(e)===n).join(" ").trim();/**
 * @license lucide-react v1.70.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fs={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};/**
 * @license lucide-react v1.70.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */function Ed(s){return s!=null}function SE(s,e={}){var y,E;const n=e.attributeNames??{},r=T=>n[T]??T,a=s.size??s.width??fs.width,c=s.size??s.height??fs.height,u=((y=s.aliases)==null?void 0:y.filter(T=>typeof T=="string"&&T.trim()!=="").map(T=>`lucide-${T}`))??[],f=[...s.name?[`lucide-${s.name}`]:[],...u],p=((E=e.className)==null?void 0:E.split(" ").filter(Boolean))??[],g=e.includeDefaultClasses===!1?pf(...p):pf("lucide",...f,...p),_=e.absoluteStrokeWidth?Number(e.strokeWidth??fs["stroke-width"])*Number(s.size??s.width??fs.width)/Number(e.size??e.width??fs.width):e.strokeWidth??fs["stroke-width"];return["svg",{...Object.entries(fs).reduce((T,[P,S])=>(T[r(P)]=S,T),{}),..."color"in e&&e.color&&{[r("stroke")]:e.color},..."size"in e&&Ed(e.size)&&{[r("width")]:e.size,[r("height")]:e.size},..."width"in e&&Ed(e.width)&&{[r("width")]:e.width},..."height"in e&&Ed(e.height)&&{[r("height")]:e.height},[r("stroke-width")]:_,...g&&{[r("class")]:g},[r("viewBox")]:`0 0 ${a} ${c}`,...e.hasA11yProp===!1?{[r("aria-hidden")]:"true"}:{},..."attributes"in e&&e.attributes},s.node.map(T=>{const[P,S,v]=T,U=e.nonScalingStroke?{[r("vector-effect")]:"non-scaling-stroke",...S}:S;return v?[P,U,v]:[P,U]})]}/**
 * @license lucide-react v1.70.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */function ME(s,e={}){return SE(s,{...e,attributeNames:{...e.attributeNames,class:"className","stroke-width":"strokeWidth","stroke-linecap":"strokeLinecap","stroke-linejoin":"strokeLinejoin","vector-effect":"vectorEffect"}})}/**
 * @license lucide-react v1.70.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const EE=s=>{for(const e in s)if(e.startsWith("aria-")||e==="role"||e==="title")return!0;return!1},wE=pt.createContext({}),TE=()=>pt.useContext(wE),bE=pt.forwardRef(({color:s,size:e,width:n,height:r,strokeWidth:a,absoluteStrokeWidth:c,nonScalingStroke:u,className:f="",children:p,iconNode:g=[],icon:_={node:g,aliases:[],size:24},...x},y)=>{const{size:E=24,strokeWidth:T=2,absoluteStrokeWidth:P=!1,nonScalingStroke:S=!1,color:v="currentColor",className:U=""}=TE()??{},L=!!p||EE(x),[A,Q,O=[]]=ME(_,{color:s??v,width:n??e??E,height:r??e??E,strokeWidth:a??T,absoluteStrokeWidth:c??P,nonScalingStroke:u??S,className:pf(U,f),hasA11yProp:L,attributes:x});return pt.createElement(A,{ref:y,...Q},[...O.map(([B,Z])=>pt.createElement(B,Z)),...Array.isArray(p)?p:[p]])});/**
 * @license lucide-react v1.70.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */function Mt(s,e=[],n=[]){const r=typeof s=="string"?xE(s,e,n):s,a=pt.forwardRef(({className:c,...u},f)=>pt.createElement(bE,{ref:f,icon:r,className:c,...u}));return r.name&&(a.displayName=yE(r.name)),a}/**
 * @license lucide-react v1.70.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zg={name:"arrow-right",size:24,node:[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]};Zg.node;const mf=Mt(Zg);/**
 * @license lucide-react v1.70.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qg={name:"arrow-up",size:24,node:[["path",{d:"m5 12 7-7 7 7",key:"hav0vg"}],["path",{d:"M12 19V5",key:"x0mq9r"}]]};Qg.node;const CE=Mt(Qg);/**
 * @license lucide-react v1.70.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jg={name:"briefcase",size:24,node:[["path",{d:"M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16",key:"jecpp"}],["rect",{width:"20",height:"14",x:"2",y:"6",rx:"2",key:"i6l2r4"}]]};Jg.node;const e0=Mt(Jg);/**
 * @license lucide-react v1.70.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const t0={name:"check",size:24,node:[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]};t0.node;const ys=Mt(t0);/**
 * @license lucide-react v1.70.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const n0={name:"chevron-right",size:24,node:[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]};n0.node;const AE=Mt(n0);/**
 * @license lucide-react v1.70.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const i0={name:"circle-check-big",size:24,node:[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335",key:"yps3ct"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]],aliases:["check-circle"]};i0.node;const r0=Mt(i0);/**
 * @license lucide-react v1.70.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const s0={name:"circle-check",size:24,node:[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m16 9-5.5 5.5L8 12",key:"xofnsj"}]],aliases:["check-circle-2"]};s0.node;const gf=Mt(s0);/**
 * @license lucide-react v1.70.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const o0={name:"code-xml",size:24,node:[["path",{d:"m18 16 4-4-4-4",key:"1inbqp"}],["path",{d:"m6 8-4 4 4 4",key:"15zrgr"}],["path",{d:"m14.5 4-5 16",key:"e7oirm"}]],aliases:["code-2"]};o0.node;const RE=Mt(o0);/**
 * @license lucide-react v1.70.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const a0={name:"code",size:24,node:[["path",{d:"m16 18 6-6-6-6",key:"eg8j8"}],["path",{d:"m8 6-6 6 6 6",key:"ppft3o"}]]};a0.node;const PE=Mt(a0);/**
 * @license lucide-react v1.70.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l0={name:"copy",size:24,node:[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]]};l0.node;const ma=Mt(l0);/**
 * @license lucide-react v1.70.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const c0={name:"cpu",size:24,node:[["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M17 20v2",key:"1rnc9c"}],["path",{d:"M17 2v2",key:"11trls"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M2 17h2",key:"7oei6x"}],["path",{d:"M2 7h2",key:"asdhe0"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"M20 17h2",key:"1fpfkl"}],["path",{d:"M20 7h2",key:"1o8tra"}],["path",{d:"M7 20v2",key:"4gnj0m"}],["path",{d:"M7 2v2",key:"1i4yhu"}],["rect",{x:"4",y:"4",width:"16",height:"16",rx:"2",key:"1vbyd7"}],["rect",{x:"8",y:"8",width:"8",height:"8",rx:"1",key:"z9xiuo"}]]};c0.node;const _o=Mt(c0);/**
 * @license lucide-react v1.70.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u0={name:"download",size:24,node:[["path",{d:"M12 15V3",key:"m9g1x1"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["path",{d:"m7 10 5 5 5-5",key:"brsn70"}]]};u0.node;const DE=Mt(u0);/**
 * @license lucide-react v1.70.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d0={name:"external-link",size:24,node:[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]]};d0.node;const vf=Mt(d0);/**
 * @license lucide-react v1.70.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f0={name:"file-text",size:24,node:[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",key:"1oefj6"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5",key:"wfsgrz"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]]};f0.node;const oc=Mt(f0);/**
 * @license lucide-react v1.70.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h0={name:"folder-git-2",size:24,node:[["path",{d:"M18 19a5 5 0 0 1-5-5v8",key:"sz5oeg"}],["path",{d:"M9 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v5",key:"1w6njk"}],["circle",{cx:"13",cy:"12",r:"2",key:"1j92g6"}],["circle",{cx:"20",cy:"19",r:"2",key:"1obnsp"}]]};h0.node;const Pf=Mt(h0);/**
 * @license lucide-react v1.70.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p0={name:"graduation-cap",size:24,node:[["path",{d:"M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z",key:"j76jl0"}],["path",{d:"M22 10v6",key:"1lu8f3"}],["path",{d:"M6 12.5V16a6 3 0 0 0 12 0v-3.5",key:"1r8lef"}]]};p0.node;const m0=Mt(p0);/**
 * @license lucide-react v1.70.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g0={name:"laptop",size:24,node:[["path",{d:"M18 5a2 2 0 0 1 2 2v8.526a2 2 0 0 0 .212.897l1.068 2.127a1 1 0 0 1-.9 1.45H3.62a1 1 0 0 1-.9-1.45l1.068-2.127A2 2 0 0 0 4 15.526V7a2 2 0 0 1 2-2z",key:"1pdavp"}],["path",{d:"M20.054 15.987H3.946",key:"14rxg9"}]]};g0.node;const LE=Mt(g0);/**
 * @license lucide-react v1.70.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v0={name:"layers",size:24,node:[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",key:"zw3jo"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",key:"1wduqc"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",key:"kqbvx6"}]],aliases:["layers-3"]};v0.node;const x0=Mt(v0);/**
 * @license lucide-react v1.70.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _0={name:"mail",size:24,node:[["path",{d:"m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7",key:"132q7q"}],["rect",{x:"2",y:"4",width:"20",height:"16",rx:"2",key:"izxlao"}]]};_0.node;const To=Mt(_0);/**
 * @license lucide-react v1.70.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y0={name:"map-pin",size:24,node:[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]]};y0.node;const Df=Mt(y0);/**
 * @license lucide-react v1.70.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S0={name:"maximize-2",size:24,node:[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"m21 3-7 7",key:"1l2asr"}],["path",{d:"m3 21 7-7",key:"tjx5ai"}],["path",{d:"M9 21H3v-6",key:"wtvkvv"}]]};S0.node;const IE=Mt(S0);/**
 * @license lucide-react v1.70.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M0={name:"minimize-2",size:24,node:[["path",{d:"m14 10 7-7",key:"oa77jy"}],["path",{d:"M20 10h-6V4",key:"mjg0md"}],["path",{d:"m3 21 7-7",key:"tjx5ai"}],["path",{d:"M4 14h6v6",key:"rmj7iw"}]]};M0.node;const NE=Mt(M0);/**
 * @license lucide-react v1.70.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E0={name:"minus",size:24,node:[["path",{d:"M5 12h14",key:"1ays0h"}]]};E0.node;const UE=Mt(E0);/**
 * @license lucide-react v1.70.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w0={name:"moon",size:24,node:[["path",{d:"M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401",key:"kfwtm"}]]};w0.node;const FE=Mt(w0);/**
 * @license lucide-react v1.70.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const T0={name:"phone",size:24,node:[["path",{d:"M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384",key:"9njp5v"}]]};T0.node;const b0=Mt(T0);/**
 * @license lucide-react v1.70.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C0={name:"printer",size:24,node:[["path",{d:"M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2",key:"143wyd"}],["path",{d:"M6 9V3a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v6",key:"1itne7"}],["rect",{x:"6",y:"14",width:"12",height:"8",rx:"1",key:"1ue0tg"}]]};C0.node;const zE=Mt(C0);/**
 * @license lucide-react v1.70.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A0={name:"rotate-ccw",size:24,node:[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]]};A0.node;const kE=Mt(A0);/**
 * @license lucide-react v1.70.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const R0={name:"send",size:24,node:[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",key:"1ffxy3"}],["path",{d:"m21.854 2.147-10.94 10.939",key:"12cjpa"}]]};R0.node;const Lf=Mt(R0);/**
 * @license lucide-react v1.70.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const P0={name:"sliders-vertical",size:24,node:[["path",{d:"M10 8h4",key:"1sr2af"}],["path",{d:"M12 21v-9",key:"17s77i"}],["path",{d:"M12 8V3",key:"13r4qs"}],["path",{d:"M17 16h4",key:"h1uq16"}],["path",{d:"M19 12V3",key:"o1uvq1"}],["path",{d:"M19 21v-5",key:"qua636"}],["path",{d:"M3 14h4",key:"bcjad9"}],["path",{d:"M5 10V3",key:"cb8scm"}],["path",{d:"M5 21v-7",key:"1w1uti"}]],aliases:["sliders"]};P0.node;const ac=Mt(P0);/**
 * @license lucide-react v1.70.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const D0={name:"sparkles",size:24,node:[["path",{d:"M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",key:"1s2grr"}],["path",{d:"M20 2v4",key:"1rf3ol"}],["path",{d:"M22 4h-4",key:"gwowj6"}],["circle",{cx:"4",cy:"20",r:"2",key:"6kqj1y"}]],aliases:["stars"]};D0.node;const bo=Mt(D0);/**
 * @license lucide-react v1.70.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L0={name:"sun",size:24,node:[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]]};L0.node;const OE=Mt(L0);/**
 * @license lucide-react v1.70.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const I0={name:"sunset",size:24,node:[["path",{d:"M12 10V2",key:"16sf7g"}],["path",{d:"m4.93 10.93 1.41 1.41",key:"2a7f42"}],["path",{d:"M2 18h2",key:"j10viu"}],["path",{d:"M20 18h2",key:"wocana"}],["path",{d:"m19.07 10.93-1.41 1.41",key:"15zs5n"}],["path",{d:"M22 22H2",key:"19qnx5"}],["path",{d:"m16 6-4 4-4-4",key:"6wukr"}],["path",{d:"M16 18a4 4 0 0 0-8 0",key:"1lzouq"}]]};I0.node;const N0=Mt(I0);/**
 * @license lucide-react v1.70.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const U0={name:"terminal",size:24,node:[["path",{d:"M12 19h8",key:"baeox8"}],["path",{d:"m4 17 6-6-6-6",key:"1yngyt"}]]};U0.node;const F0=Mt(U0);/**
 * @license lucide-react v1.70.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z0={name:"user",size:24,node:[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]};z0.node;const If=Mt(z0);/**
 * @license lucide-react v1.70.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k0={name:"wind",size:24,node:[["path",{d:"M12.8 19.6A2 2 0 1 0 14 16H2",key:"148xed"}],["path",{d:"M17.5 8a2.5 2.5 0 1 1 2 4H2",key:"1u4tom"}],["path",{d:"M9.8 4.4A2 2 0 1 1 11 8H2",key:"75valh"}]]};k0.node;const BE=Mt(k0);/**
 * @license lucide-react v1.70.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O0={name:"wrench",size:24,node:[["path",{d:"M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.106-3.105c.32-.322.863-.22.983.218a6 6 0 0 1-8.259 7.057l-7.91 7.91a1 1 0 0 1-2.999-3l7.91-7.91a6 6 0 0 1 7.057-8.259c.438.12.54.662.219.984z",key:"1ngwbx"}]]};O0.node;const HE=Mt(O0);/**
 * @license lucide-react v1.70.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B0={name:"x",size:24,node:[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]};B0.node;const VE=Mt(B0);/**
 * @license lucide-react v1.70.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H0={name:"zap",size:24,node:[["path",{d:"M15.914 4a1.5 1.5 0 00-2.474-1.561l-9 9A1.5 1.5 0 005.5 14h4.002a.5.5 0 01.471.666L8.086 20a1.5 1.5 0 002.475 1.56l9-9A1.5 1.5 0 0018.5 10h-3.997a.5.5 0 01-.472-.667z",key:"1v7up4"}]]};H0.node;const jE=Mt(H0),Ht={name:"Harshitha G S",title:"ECE Engineer & Full-Stack Developer",email:"harshitha.gemburu9705@gmail.com",phone:"+91 9743791172",phoneDisplay:"+91 97437 91172",location:"Shikaripura, Shimoga / Davangere, Karnataka",address:"Mudigoudru Keri, 53/1 Near PLD Bank, Shikaripura - 577427, Shimoga (D)",linkedin:"https://linkedin.com/in/harshitha-gs",github:"https://github.com/harshitha-gs",summary:"I am an Electronics and Communication Engineering (ECE) student passionate about bridging hardware and software. With hands-on experience in VLSI chip design, Embedded IoT with Edge AI, and full-stack MERN web engineering, I craft resilient end-to-end solutions from gate-level circuits to scalable web platforms."},V0=[{institution:"GM University",degree:"UG - Bachelor of Technology in Electronics & Communication Engineering (ECE)",period:"Aug 2023 – Present",score:"CGPA: 6.99",location:"Davangere, Karnataka",status:"Currently Pursuing (3rd Year)",highlights:["Core Coursework: VLSI Design, Microcontrollers & Embedded Systems, Digital Signal Processing, Power Electronics, Analog Circuits.","Active participant in technical symposiums, hardware hackathons, and semiconductor workshops."]},{institution:"Akshara PU College",degree:"Pre-University Course (PUC / 12th Grade) - PCMC",period:"Completed 2023",score:"Score: 88.33%",location:"Shikaripura, Karnataka",status:"Distinction",highlights:["Strong foundation in Physics, Chemistry, Mathematics, and Computer Science."]},{institution:"Banasiri Lions Educational Society(R)",degree:"Secondary School Leaving Certificate (SSLC / 10th Grade)",period:"Completed 2021",score:"Score: 87.04%",location:"Shikaripura, Karnataka",status:"Distinction",highlights:["Academic excellence with leadership roles in science exhibitions and school cultural events."]}],Nf=[{role:"Web Development Intern",company:"Amdox Technologies",period:"Mar 2026 – May 2026",type:"Remote Internship",description:"Engineered robust web applications combining responsive frontend experiences with secure backend data pipelines.",responsibilities:["Spearheaded the development of a modern Job Listing Portal featuring secure user authentication, role-based job management, and dynamic applicant tracking.","Engineered a high-integrity Certificate Verification System allowing instant validation, search, and tamper-resistant digital certificate downloads using unique IDs.","Optimized client-side rendering times by 35% through modular React architecture and efficient state management."],tech:["React.js","Node.js","Express.js","MongoDB","REST APIs","Tailwind CSS","JWT Auth"]}],Hr=[{id:"smart-agri-edge-ai",title:"AIoT Smart Agriculture with Edge AI & Digital Twin",period:"May 2026 – Jun 2026",category:"Embedded & IoT",featured:!0,badge:"Hardware + Edge AI",tagline:"Intelligent autonomous irrigation backed by cloud digital twins",description:"An automated smart agriculture ecosystem monitoring real-time soil moisture, temperature, and ambient humidity. Deploys Edge AI inference on ESP32 microcontrollers to predict crop water stress and trigger automated solenoid valve irrigation, while syncing sensor telemetry to a cloud-based Digital Twin dashboard.",technologies:["ESP32","Edge AI","Digital Twin","IoT Sensors","Cloud Computing","Wi-Fi Telemetry","Embedded C"],deliverables:["Low-latency Edge AI thresholding algorithm running directly on microcontrollers.","Bidirectional Digital Twin mirror syncing hardware telemetry to a cloud visual dashboard.","Substantial 40% reduction in water wastage verified during prototype testing."],codeSnippet:`// ESP32 Edge AI Telemetry Loop
void loop() {
  float soilMoist = readSoilSensor();
  float temp = dht.readTemperature();
  float humidity = dht.readHumidity();
  
  // Edge AI inference: compute irrigation index
  float irrigationScore = edgeAI_Model(soilMoist, temp, humidity);
  if (irrigationScore > THRESHOLD) {
    digitalWrite(PUMP_RELAY_PIN, HIGH);
    sendDigitalTwinUpdate("IRRIGATION_ACTIVE", irrigationScore);
  } else {
    digitalWrite(PUMP_RELAY_PIN, LOW);
  }
  delay(5000);
}`},{id:"lfsr-flip-flops",title:"4-Bit LFSR using D Flip-Flops",period:"May 2026 – Jul 2026",category:"VLSI & Digital",featured:!0,badge:"VLSI / Verilog",tagline:"Pseudo-random binary sequence generator implemented in Verilog",description:"Implemented a 4-bit Linear Feedback Shift Register (LFSR) architecture utilizing D flip-flops coupled with XOR feedback logic to generate maximal-length pseudo-random binary sequences (PRBS). Simulated and synthesized in Cadence EDA tools to analyze timing closure, propagation delays, and silicon gate count.",technologies:["Verilog HDL","Cadence Virtuoso","Digital Logic","PRBS Generation","EDA Simulation"],deliverables:["Designed maximal-length primitive polynomial feedback (x^4 + x^3 + 1).","Achieved zero glitch propagation across Cadence timing simulation waveforms.","Foundational hardware primitive for Built-In Self-Test (BIST) and data scrambling."],codeSnippet:`// 4-bit LFSR Verilog Module
module lfsr_4bit (
    input wire clk,
    input wire rst_n,
    output reg [3:0] q
);
  wire feedback;
  // Polynomial: x^4 + x^3 + 1
  assign feedback = q[3] ^ q[2];

  always @(posedge clk or negedge rst_n) begin
    if (!rst_n)
      q <= 4'b1001; // Seed non-zero state
    else
      q <= {q[2:0], feedback};
  end
endmodule`},{id:"verificate",title:"Verificate – Tamper-Proof Certificate Verification System",period:"Apr 2026 – May 2026",category:"Full-Stack Web",featured:!0,badge:"MERN Stack",tagline:"Instant cryptographic credential validation using unique IDs",description:"A secure, web-based certificate verification platform designed to eliminate credential fraud. Features an administrative portal for issuing verified certificates with unique hashes, a public instant-lookup search engine, and automated PDF export with verifiable QR codes.",technologies:["React.js","Node.js","Express.js","MongoDB","Crypto Hashes","Tailwind CSS","REST APIs"],deliverables:["Sub-second verification queries powered by indexed MongoDB collections.","Tamper-proof certificate identification tokens with cryptographic checksums.","Responsive recruiter-friendly UI with single-click PDF export & verification sharing."],codeSnippet:`// Express API: Certificate Verification
router.get('/verify/:certId', async (req, res) => {
  try {
    const cert = await Certificate.findOne({ certificateId: req.params.certId });
    if (!cert) {
      return res.status(404).json({ valid: false, message: 'Certificate Not Found' });
    }
    const isAuthentic = verifyHash(cert.data, cert.signature);
    return res.json({ valid: isAuthentic, details: cert });
  } catch (err) {
    res.status(500).json({ error: 'Verification failed' });
  }
});`},{id:"spark-careers",title:"Spark-Careers – Modern Startup Job Listing Portal",period:"Mar 2026 – Apr 2026",category:"Full-Stack Web",featured:!1,badge:"MERN Stack",tagline:"Tech-startup career platform with streamlined candidate tracking",description:"Engineered a polished tech-startup job board featuring high-conversion landing pages, real-time job filtering, rich search parameters (location, salary, experience), employer job creation dashboards, and frictionless candidate application submission.",technologies:["MERN Stack","Tailwind CSS","State Management","RESTful Architecture","SPA"],deliverables:["Dynamic filtering system capable of multi-criteria query narrowing without page reloads.","Employer CTA pipeline for posting listings and reviewing candidate profiles.","Mobile-first responsive architecture tested across all viewport dimensions."]},{id:"triac-dimmer",title:"TRIAC-Based Dimmer Circuit AC Lamp Control",period:"Mar 2026 – May 2026",category:"Hardware & Circuits",featured:!1,badge:"Power Electronics",tagline:"Phase angle modulated AC lamp brightness control simulated in Multisim",description:"Designed and simulated a high-efficiency solid-state dimmer circuit for controlling incandescent and AC load illumination. Utilized a DIAC triggering network coupled with an adjustable RC phase delay to govern the TRIAC firing angle across the 230V AC waveform.",technologies:["NI Multisim","TRIAC & DIAC","Power Electronics","RC Timing","Circuit Simulation"],deliverables:["Precise firing angle modulation spanning 15° to 165° of the AC sinusoidal half-cycle.","Snubber circuit integration to suppress inductive voltage spikes and dV/dt transients.","Analyzed power factor, harmonic distortion, and thermal dissipation thresholds."]},{id:"arduino-door-lock",title:"Password-Based Smart Door Lock System",period:"Oct 2025 – Nov 2025",category:"Embedded & IoT",featured:!1,badge:"Embedded C / Arduino",tagline:"Secure passcode keypad access control with servo deadbolt actuation",description:"Constructed a standalone physical security access control system using an Arduino UNO, 4x4 matrix keypad, 16x2 LCD screen, and SG90 servomotor. Users authenticate with a secure 4-digit PIN ('1234') to engage the servo mechanical lock with visual and audible feedback.",technologies:["Arduino UNO","Embedded C","HMI Keypad","Servomotor","LCD Display","Security Logic"],deliverables:["Non-blocking keypad scanning routine with anti-tamper timeout lockouts.","Real-time status prompts on a 16x2 I2C LCD screen accompanied by dual-color LED signals.","Smooth PWM servomotor motion profile ensuring zero mechanical gear strain."]}],vs=[{title:"Hardware & VLSI Design",icon:"Cpu",description:"Digital logic, RTL modeling, and semiconductor circuit analysis",skills:[{name:"Verilog HDL",level:85,tag:"RTL & Digital"},{name:"Cadence Virtuoso / Tools",level:80,tag:"VLSI EDA"},{name:"Embedded C",level:88,tag:"Firmware"},{name:"Arduino & ESP32",level:90,tag:"Microcontrollers"},{name:"NI Multisim",level:82,tag:"Circuit Simulation"},{name:"LabVIEW",level:75,tag:"Instrumentation"},{name:"Sensors & Actuators",level:88,tag:"IoT & HMI"},{name:"Power Electronics",level:80,tag:"TRIAC / DIAC"}]},{title:"Software & Full-Stack Web",icon:"Code",description:"Scalable web architectures and algorithmic programming",skills:[{name:"Python",level:85,tag:"Core & Scripting"},{name:"React.js",level:88,tag:"Frontend UI"},{name:"JavaScript (ES6+)",level:88,tag:"Web Core"},{name:"HTML5 & CSS3",level:92,tag:"Semantic & Responsive"},{name:"Node.js & Express",level:82,tag:"Backend APIs"},{name:"MongoDB",level:80,tag:"Database"},{name:"Tailwind CSS",level:88,tag:"Modern Styling"},{name:"RESTful APIs",level:85,tag:"Architecture"}]},{title:"Developer Tools & Platforms",icon:"Wrench",description:"Version control, workflow efficiency, and environments",skills:[{name:"Git & GitHub",level:88,tag:"Version Control"},{name:"VS Code",level:92,tag:"Primary IDE"},{name:"Linux / Windows CLI",level:82,tag:"Shell Scripting"},{name:"Postman",level:85,tag:"API Testing"},{name:"Digital Twin Platforms",level:78,tag:"AIoT"},{name:"Edge AI Toolchains",level:76,tag:"TinyML"}]},{title:"Soft Skills & Languages",icon:"Sparkles",description:"Interpersonal communication and multilingual agility",skills:[{name:"Teamwork & Collaboration",level:95,tag:"Soft Skill"},{name:"Adaptability & Quick Learning",level:95,tag:"Soft Skill"},{name:"Active Listening",level:90,tag:"Communication"},{name:"English",level:90,tag:"Professional Proficiency"},{name:"Kannada",level:98,tag:"Native Tongue"},{name:"Hindi",level:85,tag:"Conversational"}]}],j0=[{id:"rtl-soc-signoff",title:'30 Hours Bootcamp: "RTL, IP Integration, and SoC Signoff"',issuer:"NIELIT & SoCTeamup Semiconductors",date:"Sep 2026",credential:"Verified Certificate",description:"Comprehensive semiconductor intensive covering Register-Transfer Level (RTL) coding best practices, Intellectual Property (IP) block integration, synthesis constraints, static timing analysis (STA), and System-on-Chip (SoC) signoff validation.",skillsGained:["RTL Integration","SoC Signoff","Static Timing Analysis","Verilog Modeling"]},{id:"web-design-dev",title:"Web Design and Development Certification",issuer:"x-workz Bangalore & CIGSRD GM University",date:"Mar 2025",credential:"Verified Certificate",description:"Hands-on program mastering modern web standards, semantic HTML, responsive CSS design patterns, client-side JavaScript architecture, and API consumption.",skillsGained:["Responsive Web Design","DOM Manipulation","Modern JavaScript","Component Architecture"]},{id:"samavesha-event",title:"Samavesha Episode-7 Event Organisation",issuer:"I-STEM (Indian Science, Technology & Engineering Facilities Map)",date:"Nov 2024",credential:"Verified Leadership & Organization",description:"Recognized for leadership and coordination in organizing Samavesha Episode-7 under the national I-STEM initiative fostering research facility accessibility and industry-academia synergy.",skillsGained:["Technical Event Management","Public Communication","Team Coordination"]}];function GE({viewMode:s,setViewMode:e,dayTime:n,setDayTime:r,activeWindowCount:a,onOpenWindow:c}){const[u,f]=pt.useState(""),[p,g]=pt.useState("");return pt.useEffect(()=>{const _=()=>{const y=new Date;f(y.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit",second:"2-digit"})),g(y.toLocaleDateString([],{weekday:"short",month:"short",day:"numeric"}))};_();const x=setInterval(_,1e3);return()=>clearInterval(x)},[]),h.jsxs("header",{style:{position:"fixed",top:0,left:0,right:0,height:"42px",background:"rgba(11, 15, 23, 0.78)",backdropFilter:"blur(20px)",WebkitBackdropFilter:"blur(20px)",borderBottom:"1px solid rgba(255, 255, 255, 0.1)",zIndex:50,display:"flex",alignItems:"center",justifyContent:"space-between",padding:"0 16px",fontSize:"0.82rem",userSelect:"none",color:"var(--text-secondary)"},children:[h.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"16px"},children:[h.jsxs("div",{onClick:()=>c&&c("about"),style:{display:"flex",alignItems:"center",gap:"8px",color:"#fff",fontWeight:700,cursor:"pointer",padding:"4px 8px",borderRadius:"6px",transition:"background 0.15s ease"},className:"hover:bg-white/10",title:"Harshitha G S - ECE Portfolio OS",children:[h.jsx("span",{style:{fontSize:"1.05rem"},children:"🌸"}),h.jsx("span",{style:{letterSpacing:"-0.01em"},children:"Harshitha G S"}),h.jsx("span",{style:{fontSize:"0.68rem",padding:"2px 6px",borderRadius:"4px",background:"rgba(245, 158, 11, 0.2)",color:"#fbbf24",fontWeight:600,border:"1px solid rgba(245, 158, 11, 0.3)"},children:"ECE v2.0"})]}),h.jsx("div",{style:{display:"flex",alignItems:"center",gap:"4px"},className:"hidden sm:flex",children:["projects","about","skills","resume","contact"].map(_=>h.jsx("button",{onClick:()=>{if(s==="flow"){const x=_==="resume"?"certifications":_,y=document.getElementById(x);y&&y.scrollIntoView({behavior:"smooth"})}else c&&c(_)},style:{background:"transparent",border:"none",color:"rgba(255, 255, 255, 0.7)",padding:"4px 10px",borderRadius:"6px",fontSize:"0.8rem",cursor:"pointer",textTransform:"capitalize",transition:"all 0.15s"},onMouseEnter:x=>{x.currentTarget.style.color="#fff",x.currentTarget.style.background="rgba(255, 255, 255, 0.08)"},onMouseLeave:x=>{x.currentTarget.style.color="rgba(255, 255, 255, 0.7)",x.currentTarget.style.background="transparent"},children:_},_))})]}),h.jsxs("div",{className:"hidden md:flex",style:{alignItems:"center",gap:"8px",background:"rgba(16, 185, 129, 0.12)",border:"1px solid rgba(16, 185, 129, 0.25)",padding:"3px 12px",borderRadius:"999px",fontSize:"0.75rem",color:"#34d399"},children:[h.jsx("span",{style:{width:"6px",height:"6px",borderRadius:"50%",background:"#10b981",boxShadow:"0 0 8px #10b981"}}),h.jsx("span",{children:"Open to ECE & Web Internships"})]}),h.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"12px"},children:[h.jsxs("div",{style:{display:"flex",alignItems:"center",background:"rgba(255, 255, 255, 0.06)",borderRadius:"8px",padding:"2px",border:"1px solid rgba(255, 255, 255, 0.08)"},title:"Meadow Sky Time of Day",children:[h.jsx("button",{onClick:()=>r(18),style:{background:n===18?"rgba(245, 158, 11, 0.3)":"transparent",border:"none",padding:"4px 6px",borderRadius:"6px",cursor:"pointer",color:n===18?"#fbbf24":"rgba(255, 255, 255, 0.5)",display:"flex",alignItems:"center"},title:"Golden Sunset (18h)",children:h.jsx(N0,{size:14})}),h.jsx("button",{onClick:()=>r(12),style:{background:n===12?"rgba(56, 189, 248, 0.3)":"transparent",border:"none",padding:"4px 6px",borderRadius:"6px",cursor:"pointer",color:n===12?"#38bdf8":"rgba(255, 255, 255, 0.5)",display:"flex",alignItems:"center"},title:"High Noon Sky (12h)",children:h.jsx(OE,{size:14})}),h.jsx("button",{onClick:()=>r(0),style:{background:n===0?"rgba(167, 139, 250, 0.3)":"transparent",border:"none",padding:"4px 6px",borderRadius:"6px",cursor:"pointer",color:n===0?"#c084fc":"rgba(255, 255, 255, 0.5)",display:"flex",alignItems:"center"},title:"Starry Night (0h)",children:h.jsx(FE,{size:14})})]}),h.jsx("button",{onClick:()=>e(s==="desktop"?"flow":"desktop"),style:{background:"rgba(255, 255, 255, 0.08)",border:"1px solid rgba(255, 255, 255, 0.15)",color:"#fff",padding:"4px 10px",borderRadius:"8px",fontSize:"0.76rem",fontWeight:500,cursor:"pointer",display:"flex",alignItems:"center",gap:"6px"},title:s==="desktop"?"Switch to Scroll Flow View":"Switch to Desktop OS View",children:s==="desktop"?h.jsxs(h.Fragment,{children:[h.jsx(x0,{size:13,style:{color:"#fbbf24"}}),h.jsx("span",{className:"hidden sm:inline",children:"Scroll View"})]}):h.jsxs(h.Fragment,{children:[h.jsx(LE,{size:13,style:{color:"#38bdf8"}}),h.jsx("span",{className:"hidden sm:inline",children:"Desktop OS"})]})}),h.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"6px",fontSize:"0.78rem",fontFamily:"var(--font-mono)",color:"rgba(255, 255, 255, 0.85)",letterSpacing:"0.02em"},children:[h.jsx("span",{className:"hidden lg:inline",style:{color:"rgba(255, 255, 255, 0.5)"},children:p}),h.jsx("span",{children:u})]})]})]})}function WE({onOpenWindow:s}){const e=[{id:"projects",label:"Projects.dir",icon:Pf,color:"#f59e0b",badge:"6 items"},{id:"about",label:"About_Harshitha",icon:If,color:"#38bdf8",badge:"Profile"},{id:"skills",label:"Tech_Skills.stack",icon:_o,color:"#10b981",badge:"VLSI & Web"},{id:"resume",label:"Resume_Harshitha.pdf",icon:oc,color:"#a855f7",badge:"Education"},{id:"contact",label:"Contact_Me.msg",icon:To,color:"#f43f5e",badge:"Available"},{id:"meadow",label:"Meadow_Lab.3d",icon:ac,color:"#fb923c",badge:"Three.js"}];return h.jsx("div",{style:{position:"absolute",top:"64px",left:"24px",display:"flex",flexDirection:"column",gap:"20px",zIndex:10,pointerEvents:"auto"},children:e.map(n=>{const r=n.icon;return h.jsxs("div",{onClick:()=>s(n.id),style:{display:"flex",flexDirection:"column",alignItems:"center",width:"84px",cursor:"pointer",userSelect:"none",padding:"8px 4px",borderRadius:"10px",transition:"all 0.2s cubic-bezier(0.16, 1, 0.3, 1)"},className:"group",onMouseEnter:a=>{a.currentTarget.style.background="rgba(255, 255, 255, 0.1)"},onMouseLeave:a=>{a.currentTarget.style.background="transparent"},children:[h.jsx("div",{style:{width:"52px",height:"52px",borderRadius:"14px",background:"rgba(16, 21, 30, 0.72)",backdropFilter:"blur(16px)",WebkitBackdropFilter:"blur(16px)",border:"1px solid rgba(255, 255, 255, 0.16)",display:"flex",alignItems:"center",justifyContent:"center",boxShadow:"0 8px 20px -3px rgba(0, 0, 0, 0.4)",transition:"transform 0.2s ease, box-shadow 0.2s ease"},onMouseEnter:a=>{a.currentTarget.style.transform="translateY(-3px)",a.currentTarget.style.boxShadow=`0 12px 25px -4px ${n.color}44, 0 0 15px ${n.color}22`},onMouseLeave:a=>{a.currentTarget.style.transform="translateY(0)",a.currentTarget.style.boxShadow="0 8px 20px -3px rgba(0, 0, 0, 0.4)"},children:h.jsx(r,{size:26,style:{color:n.color}})}),h.jsx("span",{style:{marginTop:"6px",fontSize:"0.72rem",color:"#fff",textAlign:"center",fontWeight:500,textShadow:"0 2px 4px rgba(0, 0, 0, 0.8)",letterSpacing:"-0.01em",maxWidth:"82px",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:n.label})]},n.id)})})}function so({id:s,title:e,icon:n,badge:r,isOpen:a,isMinimized:c,zIndex:u,initialPosition:f={x:80,y:70},initialSize:p={width:780,height:560},onClose:g,onMinimize:_,onFocus:x,children:y}){const[E,T]=pt.useState(f),[P,S]=pt.useState(p),[v,U]=pt.useState(!1),[L,A]=pt.useState(!1),Q=pt.useRef({startX:0,startY:0,initialX:0,initialY:0}),O=pt.useRef(null);pt.useEffect(()=>{if(typeof window<"u"){const I=window.innerWidth,D=window.innerHeight;if(I<768)U(!0);else{const G=Math.max(20,I-P.width-20),ae=Math.max(50,D-P.height-80);T(ie=>({x:Math.min(ie.x,G),y:Math.min(ie.y,ae)}))}}},[P]);const B=I=>{if(x(),v)return;A(!0),Q.current={startX:I.clientX,startY:I.clientY,initialX:E.x,initialY:E.y};const D=ae=>{const ie=ae.clientX-Q.current.startX,ve=ae.clientY-Q.current.startY,ge=Math.max(10,Math.min(window.innerWidth-100,Q.current.initialX+ie)),de=Math.max(45,Math.min(window.innerHeight-80,Q.current.initialY+ve));T({x:ge,y:de})},G=()=>{A(!1),window.removeEventListener("pointermove",D),window.removeEventListener("pointerup",G)};window.addEventListener("pointermove",D),window.addEventListener("pointerup",G)};if(!a||c)return null;const Z=v?{position:"fixed",top:"46px",left:"12px",right:"12px",bottom:"84px",width:"calc(100vw - 24px)",height:"calc(100vh - 130px)",zIndex:u}:{position:"fixed",left:`${E.x}px`,top:`${E.y}px`,width:`min(${P.width}px, calc(100vw - 24px))`,height:`min(${P.height}px, calc(100vh - 140px))`,zIndex:u};return h.jsxs("div",{ref:O,onClick:x,style:{...Z,display:"flex",flexDirection:"column",borderRadius:"16px",background:"rgba(17, 22, 31, 0.88)",backdropFilter:"blur(30px) saturate(180%)",WebkitBackdropFilter:"blur(30px) saturate(180%)",border:"1px solid rgba(255, 255, 255, 0.16)",boxShadow:u>20?"0 30px 70px -10px rgba(0, 0, 0, 0.75), 0 0 0 1px rgba(255, 255, 255, 0.15), 0 0 40px rgba(245, 158, 11, 0.08)":"0 20px 50px -10px rgba(0, 0, 0, 0.6), 0 0 0 1px rgba(255, 255, 255, 0.1)",overflow:"hidden",transition:L?"none":"box-shadow 0.2s ease, transform 0.2s ease"},className:"animate-fade-in",children:[h.jsxs("div",{className:"window-titlebar",onPointerDown:B,style:{cursor:v?"default":L?"grabbing":"grab"},children:[h.jsxs("div",{className:"traffic-dots",children:[h.jsx("button",{onClick:I=>{I.stopPropagation(),g()},className:"traffic-dot dot-red",title:"Close",children:h.jsx(VE,{size:8})}),h.jsx("button",{onClick:I=>{I.stopPropagation(),_()},className:"traffic-dot dot-yellow",title:"Minimize",children:h.jsx(UE,{size:8})}),h.jsx("button",{onClick:I=>{I.stopPropagation(),U(!v)},className:"traffic-dot dot-green",title:v?"Restore":"Maximize",children:v?h.jsx(NE,{size:8}):h.jsx(IE,{size:8})})]}),h.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px",fontSize:"0.85rem",fontWeight:600,color:"#fff",letterSpacing:"-0.01em"},children:[n&&h.jsx("span",{style:{display:"flex",alignItems:"center"},children:n}),h.jsx("span",{children:e}),r&&h.jsx("span",{style:{fontSize:"0.68rem",padding:"1px 7px",borderRadius:"999px",background:"rgba(255, 255, 255, 0.1)",color:"rgba(255, 255, 255, 0.7)",fontWeight:500},children:r})]}),h.jsx("div",{style:{width:"45px"}})]}),h.jsx("div",{style:{flex:1,overflowY:"auto",overflowX:"hidden",padding:"20px 24px",position:"relative",color:"var(--text-primary)"},children:y})]})}function XE({onOpenWindow:s,onViewScroll:e}){return h.jsx("div",{style:{position:"absolute",top:"12%",right:"4%",maxWidth:"560px",width:"calc(100% - 32px)",zIndex:15,pointerEvents:"auto"},className:"hidden md:block animate-fade-in",children:h.jsxs("div",{className:"glass-panel",style:{padding:"28px 32px",background:"rgba(14, 18, 26, 0.76)",backdropFilter:"blur(28px) saturate(180%)",WebkitBackdropFilter:"blur(28px) saturate(180%)",border:"1px solid rgba(255, 255, 255, 0.16)",borderRadius:"24px",boxShadow:"0 25px 60px -15px rgba(0, 0, 0, 0.65), 0 0 35px rgba(245, 158, 11, 0.1)"},children:[h.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:"16px"},children:[h.jsxs("div",{className:"badge-pill badge-pill-gold",children:[h.jsx(bo,{size:12}),h.jsx("span",{children:"ECE Engineering Student & Web Developer"})]}),h.jsx("span",{style:{fontSize:"0.72rem",color:"rgba(255, 255, 255, 0.45)",fontFamily:"var(--font-mono)"},children:"GM University, Davangere"})]}),h.jsxs("h1",{style:{fontSize:"2.2rem",fontWeight:800,lineHeight:1.15,letterSpacing:"-0.03em",marginBottom:"12px",color:"#fff"},children:["Engineering the Future in"," ",h.jsx("span",{style:{background:"linear-gradient(135deg, #fbbf24 0%, #f97316 50%, #ec4899 100%)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",display:"inline-block"},children:"Silicon & Code."})]}),h.jsxs("p",{style:{fontSize:"0.94rem",lineHeight:1.6,color:"rgba(255, 255, 255, 0.78)",marginBottom:"20px"},children:["Hi, I'm ",h.jsx("strong",{style:{color:"#fff"},children:"Harshitha G S"}),". I bridge hardware and software — designing VLSI digital circuits with Verilog, autonomous IoT with Edge AI & ESP32, and high-performance MERN web platforms."]}),h.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:"8px",marginBottom:"24px"},children:[h.jsxs("span",{className:"badge-pill",children:[h.jsx(_o,{size:12,style:{color:"#fbbf24"}}),h.jsx("span",{children:"VLSI & Verilog"})]}),h.jsxs("span",{className:"badge-pill",children:[h.jsx(F0,{size:12,style:{color:"#34d399"}}),h.jsx("span",{children:"Embedded C & IoT"})]}),h.jsxs("span",{className:"badge-pill",children:[h.jsx(RE,{size:12,style:{color:"#38bdf8"}}),h.jsx("span",{children:"MERN Full-Stack"})]}),h.jsx("span",{className:"badge-pill badge-pill-sky",children:h.jsx("span",{children:"Amdox Tech Intern"})})]}),h.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"12px",flexWrap:"wrap"},children:[h.jsxs("button",{onClick:()=>s("projects"),className:"glass-button glass-button-primary",style:{padding:"10px 20px"},children:[h.jsx("span",{children:"Explore 6 Projects"}),h.jsx(mf,{size:15})]}),h.jsxs("button",{onClick:()=>s("resume"),className:"glass-button",style:{padding:"10px 18px"},children:[h.jsx(DE,{size:15}),h.jsx("span",{children:"View Resume"})]}),h.jsxs("button",{onClick:()=>s("contact"),className:"glass-button",style:{padding:"10px 18px"},children:[h.jsx(Lf,{size:15}),h.jsx("span",{children:"Contact Me"})]})]}),h.jsx("div",{style:{marginTop:"18px",paddingTop:"14px",borderTop:"1px solid rgba(255, 255, 255, 0.08)",display:"flex",alignItems:"center",gap:"8px",fontSize:"0.74rem",color:"rgba(255, 255, 255, 0.45)",fontFamily:"var(--font-mono)"},children:h.jsx("span",{children:"🌾 Tip: Move your cursor across the background meadow to part the 3D grass & flowers."})})]})})}function qE({openWindows:s,onOpenWindow:e,viewMode:n,setViewMode:r}){const[a,c]=pt.useState(null),u=[{id:"projects",label:"Projects",icon:Pf,color:"#f59e0b",badge:"6"},{id:"about",label:"About Me",icon:If,color:"#38bdf8"},{id:"skills",label:"Skills",icon:_o,color:"#10b981"},{id:"resume",label:"Resume",icon:oc,color:"#a855f7"},{id:"contact",label:"Contact",icon:To,color:"#f43f5e"},{id:"meadow",label:"3D Meadow",icon:ac,color:"#fb923c"}];return h.jsxs("div",{style:{position:"fixed",bottom:"16px",left:"50%",transform:"translateX(-50%)",zIndex:40,display:"flex",alignItems:"center",gap:"8px",padding:"8px 14px",background:"rgba(16, 20, 28, 0.75)",backdropFilter:"blur(25px) saturate(160%)",WebkitBackdropFilter:"blur(25px) saturate(160%)",border:"1px solid rgba(255, 255, 255, 0.16)",borderRadius:"24px",boxShadow:"0 20px 40px -10px rgba(0, 0, 0, 0.6), 0 0 20px rgba(245, 158, 11, 0.08), 0 0 0 1px rgba(255, 255, 255, 0.08)"},children:[u.map((f,p)=>{var T;const g=f.icon,_=(T=s[f.id])==null?void 0:T.isOpen,x=a===p,y=Math.abs((a??-99)-p)===1;let E=1;return x?E=1.25:y&&(E=1.1),h.jsxs("div",{onMouseEnter:()=>c(p),onMouseLeave:()=>c(null),onClick:()=>e(f.id),style:{position:"relative",display:"flex",flexDirection:"column",alignItems:"center",cursor:"pointer",userSelect:"none"},children:[x&&h.jsx("div",{style:{position:"absolute",top:"-36px",background:"rgba(11, 15, 23, 0.95)",backdropFilter:"blur(10px)",border:"1px solid rgba(255, 255, 255, 0.15)",color:"#fff",fontSize:"0.72rem",fontWeight:600,padding:"3px 9px",borderRadius:"6px",whiteSpace:"nowrap",pointerEvents:"none",boxShadow:"0 4px 12px rgba(0, 0, 0, 0.4)"},className:"animate-fade-in",children:f.label}),h.jsxs("div",{style:{width:"46px",height:"46px",borderRadius:"14px",background:_?"linear-gradient(135deg, rgba(255, 255, 255, 0.18) 0%, rgba(255, 255, 255, 0.08) 100%)":"rgba(255, 255, 255, 0.06)",border:_?`1px solid ${f.color}88`:"1px solid rgba(255, 255, 255, 0.1)",display:"flex",alignItems:"center",justifyContent:"center",transform:`scale(${E}) translateY(${x?"-6px":"0"})`,transition:"transform 0.18s cubic-bezier(0.16, 1, 0.3, 1), background 0.2s",boxShadow:x?`0 10px 20px -5px ${f.color}55, 0 0 15px ${f.color}33`:"none"},children:[h.jsx(g,{size:22,style:{color:f.color}}),f.badge&&h.jsx("span",{style:{position:"absolute",top:"-4px",right:"-4px",background:"#f59e0b",color:"#000",fontSize:"0.62rem",fontWeight:700,width:"16px",height:"16px",borderRadius:"50%",display:"flex",alignItems:"center",justifyContent:"center",boxShadow:"0 2px 6px rgba(0, 0, 0, 0.5)"},children:f.badge})]}),h.jsx("div",{style:{width:"4px",height:"4px",borderRadius:"50%",marginTop:"4px",background:_?f.color:"transparent",boxShadow:_?`0 0 6px ${f.color}`:"none",transition:"all 0.2s ease"}})]},f.id)}),h.jsx("div",{style:{width:"1px",height:"28px",background:"rgba(255, 255, 255, 0.12)",margin:"0 4px"}}),h.jsxs("div",{onClick:()=>r(n==="desktop"?"flow":"desktop"),style:{display:"flex",flexDirection:"column",alignItems:"center",cursor:"pointer"},title:"Toggle Scroll View",children:[h.jsx("div",{style:{width:"44px",height:"44px",borderRadius:"14px",background:"rgba(245, 158, 11, 0.12)",border:"1px solid rgba(245, 158, 11, 0.3)",display:"flex",alignItems:"center",justifyContent:"center",transition:"transform 0.18s ease"},onMouseEnter:f=>f.currentTarget.style.transform="scale(1.15) translateY(-4px)",onMouseLeave:f=>f.currentTarget.style.transform="scale(1) translateY(0)",children:h.jsx(x0,{size:20,style:{color:"#fbbf24"}})}),h.jsx("div",{style:{width:"4px",height:"4px",marginTop:"4px"}})]})]})}var Uf={};(function s(e,n,r,a){var c=!!(e.Worker&&e.Blob&&e.Promise&&e.OffscreenCanvas&&e.OffscreenCanvasRenderingContext2D&&e.HTMLCanvasElement&&e.HTMLCanvasElement.prototype.transferControlToOffscreen&&e.URL&&e.URL.createObjectURL),u=typeof Path2D=="function"&&typeof DOMMatrix=="function",f=(function(){if(!e.OffscreenCanvas)return!1;try{var C=new OffscreenCanvas(1,1),M=C.getContext("2d");M.fillRect(0,0,1,1);var k=C.transferToImageBitmap();M.createPattern(k,"no-repeat")}catch{return!1}return!0})();function p(){}function g(C){var M=n.exports.Promise,k=M!==void 0?M:e.Promise;return typeof k=="function"?new k(C):(C(p,p),null)}var _=(function(C,M){return{transform:function(k){if(C)return k;if(M.has(k))return M.get(k);var J=new OffscreenCanvas(k.width,k.height),z=J.getContext("2d");return z.drawImage(k,0,0),M.set(k,J),J},clear:function(){M.clear()}}})(f,new Map),x=(function(){var C=Math.floor(16.666666666666668),M,k,J={},z=0;return typeof requestAnimationFrame=="function"&&typeof cancelAnimationFrame=="function"?(M=function(W){var te=Math.random();return J[te]=requestAnimationFrame(function K(ue){z===ue||z+C-1<ue?(z=ue,delete J[te],W()):J[te]=requestAnimationFrame(K)}),te},k=function(W){J[W]&&cancelAnimationFrame(J[W])}):(M=function(W){return setTimeout(W,C)},k=function(W){return clearTimeout(W)}),{frame:M,cancel:k}})(),y=(function(){var C,M,k={};function J(z){function W(te,K){z.postMessage({options:te||{},callback:K})}z.init=function(K){var ue=K.transferControlToOffscreen();z.postMessage({canvas:ue},[ue])},z.fire=function(K,ue,he){if(M)return W(K,null),M;var Me=Math.random().toString(36).slice(2);return M=g(function(De){function xe(Le){Le.data.callback===Me&&(delete k[Me],z.removeEventListener("message",xe),M=null,_.clear(),he(),De())}z.addEventListener("message",xe),W(K,Me),k[Me]=xe.bind(null,{data:{callback:Me}})}),M},z.reset=function(){z.postMessage({reset:!0});for(var K in k)k[K](),delete k[K]}}return function(){if(C)return C;if(!r&&c){var z=["var CONFETTI, SIZE = {}, module = {};","("+s.toString()+")(this, module, true, SIZE);","onmessage = function(msg) {","  if (msg.data.options) {","    CONFETTI(msg.data.options).then(function () {","      if (msg.data.callback) {","        postMessage({ callback: msg.data.callback });","      }","    });","  } else if (msg.data.reset) {","    CONFETTI && CONFETTI.reset();","  } else if (msg.data.resize) {","    SIZE.width = msg.data.resize.width;","    SIZE.height = msg.data.resize.height;","  } else if (msg.data.canvas) {","    SIZE.width = msg.data.canvas.width;","    SIZE.height = msg.data.canvas.height;","    CONFETTI = module.exports.create(msg.data.canvas);","  }","}"].join(`
`);try{C=new Worker(URL.createObjectURL(new Blob([z])))}catch(W){return typeof console<"u"&&typeof console.warn=="function"&&console.warn("🎊 Could not load worker",W),null}J(C)}return C}})(),E={particleCount:50,angle:90,spread:45,startVelocity:45,decay:.9,gravity:1,drift:0,ticks:200,x:.5,y:.5,shapes:["square","circle"],zIndex:100,colors:["#26ccff","#a25afd","#ff5e7e","#88ff5a","#fcff42","#ffa62d","#ff36ff"],disableForReducedMotion:!1,scalar:1};function T(C,M){return M?M(C):C}function P(C){return C!=null}function S(C,M,k){return T(C&&P(C[M])?C[M]:E[M],k)}function v(C){return C<0?0:Math.floor(C)}function U(C,M){return Math.floor(Math.random()*(M-C))+C}function L(C){return parseInt(C,16)}function A(C){return C.map(Q)}function Q(C){var M=String(C).replace(/[^0-9a-f]/gi,"");return M.length<6&&(M=M[0]+M[0]+M[1]+M[1]+M[2]+M[2]),{r:L(M.substring(0,2)),g:L(M.substring(2,4)),b:L(M.substring(4,6))}}function O(C){var M=S(C,"origin",Object);return M.x=S(M,"x",Number),M.y=S(M,"y",Number),M}function B(C){C.width=document.documentElement.clientWidth,C.height=document.documentElement.clientHeight}function Z(C){var M=C.getBoundingClientRect();C.width=M.width,C.height=M.height}function I(C){var M=document.createElement("canvas");return M.style.position="fixed",M.style.top="0px",M.style.left="0px",M.style.pointerEvents="none",M.style.zIndex=C,M}function D(C,M,k,J,z,W,te,K,ue){C.save(),C.translate(M,k),C.rotate(W),C.scale(J,z),C.arc(0,0,1,te,K,ue),C.restore()}function G(C){var M=C.angle*(Math.PI/180),k=C.spread*(Math.PI/180);return{x:C.x,y:C.y,wobble:Math.random()*10,wobbleSpeed:Math.min(.11,Math.random()*.1+.05),velocity:C.startVelocity*.5+Math.random()*C.startVelocity,angle2D:-M+(.5*k-Math.random()*k),tiltAngle:(Math.random()*(.75-.25)+.25)*Math.PI,color:C.color,shape:C.shape,tick:0,totalTicks:C.ticks,decay:C.decay,drift:C.drift,random:Math.random()+2,tiltSin:0,tiltCos:0,wobbleX:0,wobbleY:0,gravity:C.gravity*3,ovalScalar:.6,scalar:C.scalar,flat:C.flat}}function ae(C,M){M.x+=Math.cos(M.angle2D)*M.velocity+M.drift,M.y+=Math.sin(M.angle2D)*M.velocity+M.gravity,M.velocity*=M.decay,M.flat?(M.wobble=0,M.wobbleX=M.x+10*M.scalar,M.wobbleY=M.y+10*M.scalar,M.tiltSin=0,M.tiltCos=0,M.random=1):(M.wobble+=M.wobbleSpeed,M.wobbleX=M.x+10*M.scalar*Math.cos(M.wobble),M.wobbleY=M.y+10*M.scalar*Math.sin(M.wobble),M.tiltAngle+=.1,M.tiltSin=Math.sin(M.tiltAngle),M.tiltCos=Math.cos(M.tiltAngle),M.random=Math.random()+2);var k=M.tick++/M.totalTicks,J=M.x+M.random*M.tiltCos,z=M.y+M.random*M.tiltSin,W=M.wobbleX+M.random*M.tiltCos,te=M.wobbleY+M.random*M.tiltSin;if(C.fillStyle="rgba("+M.color.r+", "+M.color.g+", "+M.color.b+", "+(1-k)+")",C.beginPath(),u&&M.shape.type==="path"&&typeof M.shape.path=="string"&&Array.isArray(M.shape.matrix))C.fill(pe(M.shape.path,M.shape.matrix,M.x,M.y,Math.abs(W-J)*.1,Math.abs(te-z)*.1,Math.PI/10*M.wobble));else if(M.shape.type==="bitmap"){var K=Math.PI/10*M.wobble,ue=Math.abs(W-J)*.1,he=Math.abs(te-z)*.1,Me=M.shape.bitmap.width*M.scalar,De=M.shape.bitmap.height*M.scalar,xe=new DOMMatrix([Math.cos(K)*ue,Math.sin(K)*ue,-Math.sin(K)*he,Math.cos(K)*he,M.x,M.y]);xe.multiplySelf(new DOMMatrix(M.shape.matrix));var Le=C.createPattern(_.transform(M.shape.bitmap),"no-repeat");Le.setTransform(xe),C.globalAlpha=1-k,C.fillStyle=Le,C.fillRect(M.x-Me/2,M.y-De/2,Me,De),C.globalAlpha=1}else if(M.shape==="circle")C.ellipse?C.ellipse(M.x,M.y,Math.abs(W-J)*M.ovalScalar,Math.abs(te-z)*M.ovalScalar,Math.PI/10*M.wobble,0,2*Math.PI):D(C,M.x,M.y,Math.abs(W-J)*M.ovalScalar,Math.abs(te-z)*M.ovalScalar,Math.PI/10*M.wobble,0,2*Math.PI);else if(M.shape==="star")for(var H=Math.PI/2*3,mt=4*M.scalar,et=8*M.scalar,Ge=M.x,He=M.y,ot=5,Fe=Math.PI/ot;ot--;)Ge=M.x+Math.cos(H)*et,He=M.y+Math.sin(H)*et,C.lineTo(Ge,He),H+=Fe,Ge=M.x+Math.cos(H)*mt,He=M.y+Math.sin(H)*mt,C.lineTo(Ge,He),H+=Fe;else C.moveTo(Math.floor(M.x),Math.floor(M.y)),C.lineTo(Math.floor(M.wobbleX),Math.floor(z)),C.lineTo(Math.floor(W),Math.floor(te)),C.lineTo(Math.floor(J),Math.floor(M.wobbleY));return C.closePath(),C.fill(),M.tick<M.totalTicks}function ie(C,M,k,J,z){var W=M.slice(),te=C.getContext("2d"),K,ue,he=g(function(Me){function De(){K=ue=null,te.clearRect(0,0,J.width,J.height),_.clear(),z(),Me()}function xe(){r&&!(J.width===a.width&&J.height===a.height)&&(J.width=C.width=a.width,J.height=C.height=a.height),!J.width&&!J.height&&(k(C),J.width=C.width,J.height=C.height),te.clearRect(0,0,J.width,J.height),W=W.filter(function(Le){return ae(te,Le)}),W.length?K=x.frame(xe):De()}K=x.frame(xe),ue=De});return{addFettis:function(Me){return W=W.concat(Me),he},canvas:C,promise:he,reset:function(){K&&x.cancel(K),ue&&ue()}}}function ve(C,M){var k=!C,J=!!S(M||{},"resize"),z=!1,W=S(M,"disableForReducedMotion",Boolean),te=c&&!!S(M||{},"useWorker"),K=te?y():null,ue=k?B:Z,he=C&&K?!!C.__confetti_initialized:!1,Me=typeof matchMedia=="function"&&matchMedia("(prefers-reduced-motion)").matches,De;function xe(H,mt,et){for(var Ge=S(H,"particleCount",v),He=S(H,"angle",Number),ot=S(H,"spread",Number),Fe=S(H,"startVelocity",Number),N=S(H,"decay",Number),b=S(H,"gravity",Number),ne=S(H,"drift",Number),ye=S(H,"colors",A),Ee=S(H,"ticks",Number),_e=S(H,"shapes"),Xe=S(H,"scalar"),Ie=!!S(H,"flat"),Be=O(H),dt=Ge,Ae=[],Ve=C.width*Be.x,nt=C.height*Be.y;dt--;)Ae.push(G({x:Ve,y:nt,angle:He,spread:ot,startVelocity:Fe,color:ye[dt%ye.length],shape:_e[U(0,_e.length)],ticks:Ee,decay:N,gravity:b,drift:ne,scalar:Xe,flat:Ie}));return De?De.addFettis(Ae):(De=ie(C,Ae,ue,mt,et),De.promise)}function Le(H){var mt=W||S(H,"disableForReducedMotion",Boolean),et=S(H,"zIndex",Number);if(mt&&Me)return g(function(Fe){Fe()});k&&De?C=De.canvas:k&&!C&&(C=I(et),document.body.appendChild(C)),J&&!he&&ue(C);var Ge={width:C.width,height:C.height};K&&!he&&K.init(C),he=!0,K&&(C.__confetti_initialized=!0);function He(){if(K){var Fe={getBoundingClientRect:function(){if(!k)return C.getBoundingClientRect()}};ue(Fe),K.postMessage({resize:{width:Fe.width,height:Fe.height}});return}Ge.width=Ge.height=null}function ot(){De=null,J&&(z=!1,e.removeEventListener("resize",He)),k&&C&&(document.body.contains(C)&&document.body.removeChild(C),C=null,he=!1)}return J&&!z&&(z=!0,e.addEventListener("resize",He,!1)),K?K.fire(H,Ge,ot):xe(H,Ge,ot)}return Le.reset=function(){K&&K.reset(),De&&De.reset()},Le}var ge;function de(){return ge||(ge=ve(null,{useWorker:!0,resize:!0})),ge}function pe(C,M,k,J,z,W,te){var K=new Path2D(C),ue=new Path2D;ue.addPath(K,new DOMMatrix(M));var he=new Path2D;return he.addPath(ue,new DOMMatrix([Math.cos(te)*z,Math.sin(te)*z,-Math.sin(te)*W,Math.cos(te)*W,k,J])),he}function j(C){if(!u)throw new Error("path confetti are not supported in this browser");var M,k;typeof C=="string"?M=C:(M=C.path,k=C.matrix);var J=new Path2D(M),z=document.createElement("canvas"),W=z.getContext("2d");if(!k){for(var te=1e3,K=te,ue=te,he=0,Me=0,De,xe,Le=0;Le<te;Le+=2)for(var H=0;H<te;H+=2)W.isPointInPath(J,Le,H,"nonzero")&&(K=Math.min(K,Le),ue=Math.min(ue,H),he=Math.max(he,Le),Me=Math.max(Me,H));De=he-K,xe=Me-ue;var mt=10,et=Math.min(mt/De,mt/xe);k=[et,0,0,et,-Math.round(De/2+K)*et,-Math.round(xe/2+ue)*et]}return{type:"path",path:M,matrix:k}}function me(C){var M,k=1,J="#000000",z='"Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji", "EmojiOne Color", "Android Emoji", "Twemoji Mozilla", "system emoji", sans-serif';typeof C=="string"?M=C:(M=C.text,k="scalar"in C?C.scalar:k,z="fontFamily"in C?C.fontFamily:z,J="color"in C?C.color:J);var W=10*k,te=""+W+"px "+z,K=new OffscreenCanvas(W,W),ue=K.getContext("2d");ue.font=te;var he=ue.measureText(M),Me=Math.ceil(he.actualBoundingBoxRight+he.actualBoundingBoxLeft),De=Math.ceil(he.actualBoundingBoxAscent+he.actualBoundingBoxDescent),xe=2,Le=he.actualBoundingBoxLeft+xe,H=he.actualBoundingBoxAscent+xe;Me+=xe+xe,De+=xe+xe,K=new OffscreenCanvas(Me,De),ue=K.getContext("2d"),ue.font=te,ue.fillStyle=J,ue.fillText(M,Le,H);var mt=1/k;return{type:"bitmap",bitmap:K.transferToImageBitmap(),matrix:[mt,0,0,mt,-Me*mt/2,-De*mt/2]}}n.exports=function(){return de().apply(this,arguments)},n.exports.reset=function(){de().reset()},n.exports.create=ve,n.exports.shapeFromPath=j,n.exports.shapeFromText=me})((function(){return typeof window<"u"?window:typeof self<"u"?self:this||{}})(),Uf,!1);const G0=Uf.exports;Uf.exports.create;function YE({onNotify:s,onSwitchToDesktop:e}){const[n,r]=pt.useState("All"),[a,c]=pt.useState(0),[u,f]=pt.useState(""),[p,g]=pt.useState({name:"",email:"",subject:"",message:""}),[_,x]=pt.useState(!1),[y,E]=pt.useState(!1),T=["All","Embedded & IoT","VLSI & Digital","Full-Stack Web","Hardware & Circuits"],P=n==="All"?Hr:Hr.filter(L=>L.category===n),S=(L,A)=>{navigator.clipboard.writeText(L),f(A),s&&s(`${A} copied to clipboard!`),setTimeout(()=>f(""),2e3)},v=L=>{L.preventDefault(),!(!p.name||!p.email||!p.message)&&(x(!0),setTimeout(()=>{x(!1),E(!0);try{G0({particleCount:120,spread:80,origin:{y:.6}})}catch{}s&&s("Message sent successfully! Harshitha will reply soon.")},800))},U=L=>{const A=document.getElementById(L);A&&A.scrollIntoView({behavior:"smooth"})};return h.jsxs("div",{style:{position:"relative",width:"100%",minHeight:"100vh",zIndex:10},children:[h.jsx("section",{id:"hero",style:{minHeight:"100vh",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",padding:"120px 24px 60px",textAlign:"center",position:"relative"},children:h.jsxs("div",{style:{maxWidth:"840px",background:"rgba(11, 15, 23, 0.72)",backdropFilter:"blur(28px) saturate(180%)",WebkitBackdropFilter:"blur(28px) saturate(180%)",border:"1px solid rgba(255, 255, 255, 0.16)",borderRadius:"28px",padding:"48px 36px",boxShadow:"0 30px 70px -10px rgba(0, 0, 0, 0.7), 0 0 40px rgba(245, 158, 11, 0.12)"},className:"animate-fade-in",children:[h.jsxs("div",{style:{display:"inline-flex",alignItems:"center",gap:"8px",padding:"6px 14px",borderRadius:"999px",background:"rgba(245, 158, 11, 0.15)",border:"1px solid rgba(245, 158, 11, 0.35)",color:"#fbbf24",fontSize:"0.82rem",fontWeight:600,marginBottom:"20px"},children:[h.jsx(bo,{size:14}),h.jsx("span",{children:"ECE Engineering Student • GM University"})]}),h.jsxs("h1",{style:{fontSize:"clamp(2.2rem, 5vw, 3.6rem)",fontWeight:800,lineHeight:1.15,letterSpacing:"-0.03em",marginBottom:"16px",color:"#fff"},children:["Bridging Silicon & Software: ",h.jsx("br",{}),h.jsx("span",{style:{background:"linear-gradient(135deg, #fbbf24 0%, #f97316 45%, #ec4899 100%)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",display:"inline-block"},children:"Hardware to Cloud."})]}),h.jsxs("p",{style:{fontSize:"clamp(0.95rem, 2vw, 1.12rem)",color:"rgba(255, 255, 255, 0.82)",lineHeight:1.6,maxWidth:"680px",margin:"0 auto 28px"},children:["I am ",h.jsx("strong",{style:{color:"#fff"},children:"Harshitha G S"}),", an Electronics and Communication Engineering student with proven hands-on experience in ",h.jsx("strong",{children:"VLSI & Verilog"}),", ",h.jsx("strong",{children:"Edge AI & Embedded IoT"}),", and ",h.jsx("strong",{children:"Full-Stack MERN Web Development"}),"."]}),h.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",gap:"14px",flexWrap:"wrap",marginBottom:"32px"},children:[h.jsxs("button",{onClick:()=>U("projects"),className:"glass-button glass-button-primary",style:{padding:"12px 24px",fontSize:"0.94rem"},children:[h.jsx("span",{children:"Explore Projects (6)"}),h.jsx(mf,{size:16})]}),h.jsx("button",{onClick:()=>U("about"),className:"glass-button",style:{padding:"12px 22px",fontSize:"0.94rem"},children:h.jsx("span",{children:"About My Journey"})}),h.jsxs("button",{onClick:()=>U("contact"),className:"glass-button",style:{padding:"12px 22px",fontSize:"0.94rem"},children:[h.jsx(Lf,{size:15}),h.jsx("span",{children:"Contact Me"})]})]}),h.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(130px, 1fr))",gap:"12px",paddingTop:"20px",borderTop:"1px solid rgba(255, 255, 255, 0.1)"},children:[h.jsxs("div",{children:[h.jsx("div",{style:{fontSize:"1.4rem",fontWeight:800,color:"#fbbf24"},children:"6+"}),h.jsx("div",{style:{fontSize:"0.74rem",color:"rgba(255, 255, 255, 0.6)"},children:"Engineered Projects"})]}),h.jsxs("div",{children:[h.jsx("div",{style:{fontSize:"1.4rem",fontWeight:800,color:"#38bdf8"},children:"Internship"}),h.jsx("div",{style:{fontSize:"0.74rem",color:"rgba(255, 255, 255, 0.6)"},children:"Amdox Technologies"})]}),h.jsxs("div",{children:[h.jsx("div",{style:{fontSize:"1.4rem",fontWeight:800,color:"#10b981"},children:"88.3%"}),h.jsx("div",{style:{fontSize:"0.74rem",color:"rgba(255, 255, 255, 0.6)"},children:"PUC Academic Score"})]}),h.jsxs("div",{children:[h.jsx("div",{style:{fontSize:"1.4rem",fontWeight:800,color:"#a855f7"},children:"3+"}),h.jsx("div",{style:{fontSize:"0.74rem",color:"rgba(255, 255, 255, 0.6)"},children:"Bootcamps & Certs"})]})]})]})}),h.jsxs("section",{id:"about",style:{padding:"80px 24px",maxWidth:"1100px",margin:"0 auto",position:"relative"},children:[h.jsxs("div",{style:{textAlign:"center",marginBottom:"44px"},children:[h.jsx("span",{className:"badge-pill badge-pill-sky",style:{marginBottom:"10px"},children:"Background & Experience"}),h.jsx("h2",{style:{fontSize:"2.2rem",fontWeight:800,color:"#fff",letterSpacing:"-0.02em"},children:"About Harshitha G S"}),h.jsx("p",{style:{color:"rgba(255, 255, 255, 0.7)",fontSize:"0.94rem",maxWidth:"600px",margin:"8px auto 0"},children:"Committed to engineering excellence across hardware microarchitectures and responsive web software."})]}),h.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(320px, 1fr))",gap:"24px"},children:[h.jsxs("div",{className:"glass-panel",style:{padding:"28px"},children:[h.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"16px",marginBottom:"18px"},children:[h.jsx("div",{style:{width:"64px",height:"64px",borderRadius:"18px",background:"linear-gradient(135deg, #f59e0b 0%, #ea580c 100%)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"1.6rem",fontWeight:800,color:"#000"},children:"HG"}),h.jsxs("div",{children:[h.jsx("h3",{style:{fontSize:"1.25rem",fontWeight:700,color:"#fff"},children:Ht.name}),h.jsx("p",{style:{color:"#fbbf24",fontSize:"0.86rem",fontWeight:600},children:Ht.title}),h.jsxs("p",{style:{color:"rgba(255, 255, 255, 0.6)",fontSize:"0.78rem"},children:["📍 ",Ht.location]})]})]}),h.jsx("p",{style:{fontSize:"0.9rem",lineHeight:1.65,color:"rgba(255, 255, 255, 0.8)",marginBottom:"16px"},children:Ht.summary}),h.jsxs("div",{style:{borderTop:"1px solid rgba(255, 255, 255, 0.1)",paddingTop:"16px"},children:[h.jsx("div",{style:{fontSize:"0.84rem",fontWeight:600,color:"#fbbf24",marginBottom:"8px"},children:"🗣️ Multilingual Agility:"}),h.jsxs("div",{style:{display:"flex",gap:"8px",flexWrap:"wrap"},children:[h.jsx("span",{className:"badge-pill",children:"English (Professional)"}),h.jsx("span",{className:"badge-pill",children:"Kannada (Native)"}),h.jsx("span",{className:"badge-pill",children:"Hindi (Conversational)"})]})]})]}),h.jsxs("div",{className:"glass-panel",style:{padding:"28px"},children:[h.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"10px",marginBottom:"16px"},children:[h.jsx(e0,{size:20,style:{color:"#38bdf8"}}),h.jsx("h3",{style:{fontSize:"1.15rem",fontWeight:700,color:"#fff"},children:"Professional Experience"})]}),Nf.map((L,A)=>h.jsxs("div",{style:{background:"rgba(255, 255, 255, 0.04)",padding:"18px",borderRadius:"14px",border:"1px solid rgba(56, 189, 248, 0.2)"},children:[h.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:"6px"},children:[h.jsxs("div",{children:[h.jsx("h4",{style:{fontSize:"1rem",fontWeight:700,color:"#fff"},children:L.role}),h.jsxs("p",{style:{color:"#38bdf8",fontSize:"0.84rem"},children:[L.company," • ",L.type]})]}),h.jsx("span",{className:"badge-pill badge-pill-sky",style:{fontSize:"0.7rem"},children:L.period})]}),h.jsx("p",{style:{fontSize:"0.84rem",color:"rgba(255, 255, 255, 0.75)",marginBottom:"12px",lineHeight:1.5},children:L.description}),h.jsx("ul",{style:{listStyle:"none",display:"flex",flexDirection:"column",gap:"6px",marginBottom:"12px"},children:L.responsibilities.map((Q,O)=>h.jsxs("li",{style:{fontSize:"0.82rem",color:"rgba(255, 255, 255, 0.8)",display:"flex",alignItems:"flex-start",gap:"8px"},children:[h.jsx(gf,{size:13,style:{color:"#38bdf8",marginTop:"3px",flexShrink:0}}),h.jsx("span",{children:Q})]},O))}),h.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:"5px"},children:L.tech.map((Q,O)=>h.jsx("span",{style:{fontSize:"0.68rem",padding:"2px 7px",borderRadius:"4px",background:"rgba(255, 255, 255, 0.08)",color:"rgba(255, 255, 255, 0.8)"},children:Q},O))})]},A))]})]}),h.jsx("div",{style:{marginTop:"28px"},children:h.jsxs("div",{className:"glass-panel",style:{padding:"28px"},children:[h.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"10px",marginBottom:"20px"},children:[h.jsx(m0,{size:20,style:{color:"#a855f7"}}),h.jsx("h3",{style:{fontSize:"1.15rem",fontWeight:700,color:"#fff"},children:"Academic Journey"})]}),h.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(280px, 1fr))",gap:"16px"},children:V0.map((L,A)=>h.jsxs("div",{className:"glass-card",style:{padding:"18px",borderLeft:"3px solid #a855f7"},children:[h.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"4px"},children:[h.jsx("h4",{style:{fontSize:"0.94rem",fontWeight:700,color:"#fff"},children:L.institution}),h.jsx("span",{style:{fontSize:"0.74rem",fontFamily:"var(--font-mono)",fontWeight:700,color:"#c084fc"},children:L.score})]}),h.jsx("p",{style:{color:"rgba(255, 255, 255, 0.8)",fontSize:"0.82rem",marginBottom:"4px"},children:L.degree}),h.jsxs("p",{style:{fontSize:"0.74rem",color:"rgba(255, 255, 255, 0.5)"},children:["📍 ",L.location," • ",L.period]})]},A))})]})})]}),h.jsxs("section",{id:"skills",style:{padding:"80px 24px",maxWidth:"1100px",margin:"0 auto",position:"relative"},children:[h.jsxs("div",{style:{textAlign:"center",marginBottom:"40px"},children:[h.jsx("span",{className:"badge-pill badge-pill-emerald",style:{marginBottom:"10px"},children:"Capabilities & Toolchains"}),h.jsx("h2",{style:{fontSize:"2.2rem",fontWeight:800,color:"#fff",letterSpacing:"-0.02em"},children:"Technical Competencies"}),h.jsx("p",{style:{color:"rgba(255, 255, 255, 0.7)",fontSize:"0.94rem",maxWidth:"600px",margin:"8px auto 0"},children:"From transistor-level modeling and hardware simulation to full-stack cloud software engineering."})]}),h.jsx("div",{style:{display:"flex",justifyContent:"center",gap:"10px",flexWrap:"wrap",marginBottom:"28px"},children:vs.map((L,A)=>{const Q=a===A;return h.jsx("button",{onClick:()=>c(A),style:{background:Q?"rgba(245, 158, 11, 0.25)":"rgba(255, 255, 255, 0.05)",border:Q?"1px solid #f59e0b":"1px solid rgba(255, 255, 255, 0.1)",color:Q?"#fbbf24":"rgba(255, 255, 255, 0.7)",padding:"9px 18px",borderRadius:"12px",fontSize:"0.86rem",fontWeight:Q?600:500,cursor:"pointer",transition:"all 0.15s ease"},children:L.title},A)})}),h.jsx("div",{className:"glass-panel",style:{padding:"28px"},children:h.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(260px, 1fr))",gap:"16px"},children:vs[a].skills.map((L,A)=>h.jsxs("div",{className:"glass-card",style:{padding:"16px"},children:[h.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"8px"},children:[h.jsx("span",{style:{fontWeight:600,fontSize:"0.92rem",color:"#fff"},children:L.name}),h.jsx("span",{style:{fontSize:"0.7rem",color:"#fbbf24",background:"rgba(245, 158, 11, 0.15)",padding:"2px 6px",borderRadius:"4px"},children:L.tag})]}),h.jsx("div",{style:{width:"100%",height:"6px",borderRadius:"999px",background:"rgba(255, 255, 255, 0.1)",overflow:"hidden"},children:h.jsx("div",{style:{width:`${L.level}%`,height:"100%",background:"linear-gradient(90deg, #f59e0b, #ec4899)",borderRadius:"999px"}})})]},A))})})]}),h.jsxs("section",{id:"projects",style:{padding:"80px 24px",maxWidth:"1200px",margin:"0 auto",position:"relative"},children:[h.jsxs("div",{style:{textAlign:"center",marginBottom:"40px"},children:[h.jsx("span",{className:"badge-pill badge-pill-gold",style:{marginBottom:"10px"},children:"Featured Engineering"}),h.jsx("h2",{style:{fontSize:"2.2rem",fontWeight:800,color:"#fff",letterSpacing:"-0.02em"},children:"Academic & Industry Projects"}),h.jsx("p",{style:{color:"rgba(255, 255, 255, 0.7)",fontSize:"0.94rem",maxWidth:"600px",margin:"8px auto 0"},children:"Real-world applications spanning VLSI design, AIoT smart agriculture, power electronics, and full-stack platforms."})]}),h.jsx("div",{style:{display:"flex",justifyContent:"center",gap:"8px",flexWrap:"wrap",marginBottom:"32px"},children:T.map(L=>{const A=n===L;return h.jsx("button",{onClick:()=>r(L),style:{background:A?"rgba(245, 158, 11, 0.25)":"rgba(255, 255, 255, 0.05)",border:A?"1px solid #f59e0b":"1px solid rgba(255, 255, 255, 0.1)",color:A?"#fbbf24":"rgba(255, 255, 255, 0.7)",padding:"8px 16px",borderRadius:"10px",fontSize:"0.82rem",fontWeight:A?600:400,cursor:"pointer"},children:L},L)})}),h.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(340px, 1fr))",gap:"20px"},children:P.map(L=>h.jsxs("div",{className:"glass-panel",style:{padding:"24px",display:"flex",flexDirection:"column",justifyContent:"space-between",transition:"transform 0.2s ease, border-color 0.2s ease"},children:[h.jsxs("div",{children:[h.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"10px"},children:[h.jsx("span",{className:"badge-pill badge-pill-gold",children:L.badge}),h.jsx("span",{style:{fontSize:"0.72rem",fontFamily:"var(--font-mono)",color:"rgba(255, 255, 255, 0.45)"},children:L.period})]}),h.jsx("h3",{style:{fontSize:"1.2rem",fontWeight:700,color:"#fff",marginBottom:"8px"},children:L.title}),h.jsx("p",{style:{fontSize:"0.86rem",color:"rgba(255, 255, 255, 0.76)",lineHeight:1.6,marginBottom:"14px"},children:L.description}),L.deliverables&&h.jsxs("div",{style:{marginBottom:"14px"},children:[h.jsx("div",{style:{fontSize:"0.78rem",fontWeight:600,color:"#fbbf24",marginBottom:"6px"},children:"Key Deliverables:"}),h.jsx("ul",{style:{listStyle:"none",display:"flex",flexDirection:"column",gap:"4px"},children:L.deliverables.slice(0,2).map((A,Q)=>h.jsxs("li",{style:{fontSize:"0.8rem",color:"rgba(255, 255, 255, 0.75)",display:"flex",alignItems:"flex-start",gap:"6px"},children:[h.jsx(gf,{size:13,style:{color:"#10b981",marginTop:"3px",flexShrink:0}}),h.jsx("span",{children:A})]},Q))})]})]}),h.jsxs("div",{children:[h.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:"5px",marginBottom:"16px"},children:L.technologies.map((A,Q)=>h.jsx("span",{style:{fontSize:"0.7rem",fontFamily:"var(--font-mono)",padding:"2px 8px",borderRadius:"6px",background:"rgba(255, 255, 255, 0.08)",color:"rgba(255, 255, 255, 0.85)"},children:A},Q))}),h.jsxs("button",{onClick:()=>U("contact"),className:"glass-button",style:{width:"100%",fontSize:"0.82rem",padding:"8px"},children:[h.jsx("span",{children:"Discuss Technical Details"}),h.jsx(mf,{size:13})]})]})]},L.id))})]}),h.jsxs("section",{id:"certifications",style:{padding:"80px 24px",maxWidth:"1100px",margin:"0 auto",position:"relative"},children:[h.jsxs("div",{style:{textAlign:"center",marginBottom:"40px"},children:[h.jsx("span",{className:"badge-pill badge-pill-sky",style:{marginBottom:"10px"},children:"Verified Accreditations"}),h.jsx("h2",{style:{fontSize:"2.2rem",fontWeight:800,color:"#fff",letterSpacing:"-0.02em"},children:"Certifications & Leadership"})]}),h.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(300px, 1fr))",gap:"18px"},children:j0.map(L=>h.jsxs("div",{className:"glass-panel",style:{padding:"24px",borderLeft:"4px solid #f59e0b"},children:[h.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:"8px"},children:[h.jsx("span",{className:"badge-pill badge-pill-gold",style:{fontSize:"0.7rem"},children:L.credential}),h.jsx("span",{style:{fontSize:"0.74rem",fontFamily:"var(--font-mono)",color:"rgba(255, 255, 255, 0.5)"},children:L.date})]}),h.jsx("h4",{style:{fontSize:"1.05rem",fontWeight:700,color:"#fff",marginBottom:"4px"},children:L.title}),h.jsx("p",{style:{color:"#38bdf8",fontSize:"0.84rem",fontWeight:500,marginBottom:"10px"},children:L.issuer}),h.jsx("p",{style:{fontSize:"0.82rem",color:"rgba(255, 255, 255, 0.72)",lineHeight:1.5,marginBottom:"12px"},children:L.description}),h.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:"5px"},children:L.skillsGained.map((A,Q)=>h.jsx("span",{className:"badge-pill",style:{fontSize:"0.68rem"},children:A},Q))})]},L.id))})]}),h.jsxs("section",{id:"contact",style:{padding:"80px 24px 120px",maxWidth:"1000px",margin:"0 auto",position:"relative"},children:[h.jsxs("div",{style:{textAlign:"center",marginBottom:"40px"},children:[h.jsx("span",{className:"badge-pill badge-pill-emerald",style:{marginBottom:"10px"},children:"Get in Touch"}),h.jsx("h2",{style:{fontSize:"2.2rem",fontWeight:800,color:"#fff",letterSpacing:"-0.02em"},children:"Contact Harshitha"}),h.jsx("p",{style:{color:"rgba(255, 255, 255, 0.7)",fontSize:"0.94rem",maxWidth:"560px",margin:"8px auto 0"},children:"Let's discuss opportunities, internships, hardware projects, or innovative web development."})]}),h.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(300px, 1fr))",gap:"24px"},children:[h.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"14px"},children:[h.jsxs("div",{className:"glass-panel",style:{padding:"20px",display:"flex",alignItems:"center",justifyContent:"space-between"},children:[h.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"12px"},children:[h.jsx("div",{style:{width:"42px",height:"42px",borderRadius:"10px",background:"rgba(244, 63, 94, 0.15)",display:"flex",alignItems:"center",justifyContent:"center",color:"#f43f5e"},children:h.jsx(To,{size:18})}),h.jsxs("div",{children:[h.jsx("div",{style:{fontSize:"0.74rem",color:"rgba(255, 255, 255, 0.5)"},children:"Direct Email"}),h.jsx("div",{style:{fontSize:"0.86rem",fontWeight:600,color:"#fff"},children:Ht.email})]})]}),h.jsxs("button",{onClick:()=>S(Ht.email,"Email"),className:"glass-button",style:{padding:"6px 10px",fontSize:"0.74rem"},children:[u==="Email"?h.jsx(ys,{size:12}):h.jsx(ma,{size:12}),h.jsx("span",{children:u==="Email"?"Copied":"Copy"})]})]}),h.jsxs("div",{className:"glass-panel",style:{padding:"20px",display:"flex",alignItems:"center",justifyContent:"space-between"},children:[h.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"12px"},children:[h.jsx("div",{style:{width:"42px",height:"42px",borderRadius:"10px",background:"rgba(16, 185, 129, 0.15)",display:"flex",alignItems:"center",justifyContent:"center",color:"#10b981"},children:h.jsx(b0,{size:18})}),h.jsxs("div",{children:[h.jsx("div",{style:{fontSize:"0.74rem",color:"rgba(255, 255, 255, 0.5)"},children:"Phone"}),h.jsx("div",{style:{fontSize:"0.86rem",fontWeight:600,color:"#fff"},children:Ht.phoneDisplay})]})]}),h.jsxs("button",{onClick:()=>S(Ht.phone,"Phone"),className:"glass-button",style:{padding:"6px 10px",fontSize:"0.74rem"},children:[u==="Phone"?h.jsx(ys,{size:12}):h.jsx(ma,{size:12}),h.jsx("span",{children:u==="Phone"?"Copied":"Copy"})]})]}),h.jsxs("div",{className:"glass-panel",style:{padding:"20px",display:"flex",alignItems:"center",gap:"12px"},children:[h.jsx("div",{style:{width:"42px",height:"42px",borderRadius:"10px",background:"rgba(245, 158, 11, 0.15)",display:"flex",alignItems:"center",justifyContent:"center",color:"#f59e0b"},children:h.jsx(Df,{size:18})}),h.jsxs("div",{children:[h.jsx("div",{style:{fontSize:"0.74rem",color:"rgba(255, 255, 255, 0.5)"},children:"Location"}),h.jsx("div",{style:{fontSize:"0.84rem",color:"#fff"},children:Ht.address})]})]})]}),h.jsx("div",{className:"glass-panel",style:{padding:"28px"},children:y?h.jsxs("div",{style:{textAlign:"center",padding:"30px 10px"},children:[h.jsx("div",{style:{width:"50px",height:"50px",borderRadius:"50%",background:"rgba(16, 185, 129, 0.2)",border:"2px solid #10b981",margin:"0 auto 12px",display:"flex",alignItems:"center",justifyContent:"center",color:"#10b981"},children:h.jsx(ys,{size:26})}),h.jsx("h4",{style:{fontSize:"1.2rem",fontWeight:700,color:"#fff",marginBottom:"6px"},children:"Message Sent!"}),h.jsx("p",{style:{fontSize:"0.86rem",color:"rgba(255, 255, 255, 0.75)",marginBottom:"16px"},children:"Thank you for reaching out. Harshitha will respond to you directly."}),h.jsx("button",{onClick:()=>{E(!1),g({name:"",email:"",subject:"",message:""})},className:"glass-button",style:{fontSize:"0.8rem"},children:"Send Another"})]}):h.jsxs("form",{onSubmit:v,style:{display:"flex",flexDirection:"column",gap:"14px"},children:[h.jsx("h4",{style:{fontSize:"1rem",fontWeight:700,color:"#fff"},children:"Send a Message"}),h.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"10px"},children:[h.jsx("input",{type:"text",required:!0,placeholder:"Your Name *",value:p.name,onChange:L=>g({...p,name:L.target.value}),style:{padding:"10px 14px",background:"rgba(0,0,0,0.4)",border:"1px solid rgba(255,255,255,0.15)",borderRadius:"8px",color:"#fff",fontSize:"0.84rem",outline:"none"}}),h.jsx("input",{type:"email",required:!0,placeholder:"Your Email *",value:p.email,onChange:L=>g({...p,email:L.target.value}),style:{padding:"10px 14px",background:"rgba(0,0,0,0.4)",border:"1px solid rgba(255,255,255,0.15)",borderRadius:"8px",color:"#fff",fontSize:"0.84rem",outline:"none"}})]}),h.jsx("input",{type:"text",placeholder:"Subject",value:p.subject,onChange:L=>g({...p,subject:L.target.value}),style:{padding:"10px 14px",background:"rgba(0,0,0,0.4)",border:"1px solid rgba(255,255,255,0.15)",borderRadius:"8px",color:"#fff",fontSize:"0.84rem",outline:"none"}}),h.jsx("textarea",{required:!0,rows:4,placeholder:"Your Message *",value:p.message,onChange:L=>g({...p,message:L.target.value}),style:{padding:"10px 14px",background:"rgba(0,0,0,0.4)",border:"1px solid rgba(255,255,255,0.15)",borderRadius:"8px",color:"#fff",fontSize:"0.84rem",outline:"none",resize:"vertical"}}),h.jsx("button",{type:"submit",disabled:_,className:"glass-button glass-button-primary",style:{padding:"12px"},children:_?"Sending...":"Send Message to Harshitha"})]})})]})]}),h.jsxs("footer",{style:{borderTop:"1px solid rgba(255, 255, 255, 0.1)",background:"rgba(11, 15, 23, 0.85)",backdropFilter:"blur(16px)",padding:"24px",textAlign:"center",color:"rgba(255, 255, 255, 0.6)",fontSize:"0.82rem"},children:[h.jsxs("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",gap:"16px",marginBottom:"10px"},children:[h.jsx("button",{onClick:e,className:"glass-button",style:{fontSize:"0.74rem",padding:"6px 12px"},children:h.jsx("span",{children:"Switch to 3D Desktop OS View"})}),h.jsxs("button",{onClick:()=>U("hero"),className:"glass-button",style:{fontSize:"0.74rem",padding:"6px 12px"},children:[h.jsx(CE,{size:12}),h.jsx("span",{children:"Back to Top"})]})]}),h.jsx("p",{children:"© 2026 Harshitha G S • Electronics & Communication Engineering • Built with React & Three.js"})]})]})}function $E({onOpenWindow:s,onNotify:e}){return h.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"28px"},children:[h.jsxs("div",{className:"glass-card",style:{padding:"24px",display:"flex",flexDirection:"row",alignItems:"center",gap:"24px",flexWrap:"wrap"},children:[h.jsx("div",{style:{width:"84px",height:"84px",borderRadius:"24px",background:"linear-gradient(135deg, #f59e0b 0%, #ea580c 100%)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"2rem",fontWeight:800,color:"#000",boxShadow:"0 10px 25px -5px rgba(245, 158, 11, 0.4)",border:"2px solid rgba(255, 255, 255, 0.2)"},children:"HG"}),h.jsxs("div",{style:{flex:1,minWidth:"220px"},children:[h.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px",marginBottom:"4px"},children:[h.jsx("h2",{style:{fontSize:"1.5rem",fontWeight:700,color:"#fff"},children:Ht.name}),h.jsx("span",{className:"badge-pill badge-pill-emerald",children:"Open for Roles"})]}),h.jsx("p",{style:{color:"#fbbf24",fontWeight:600,fontSize:"0.92rem",marginBottom:"6px"},children:Ht.title}),h.jsxs("p",{style:{color:"rgba(255, 255, 255, 0.7)",fontSize:"0.84rem",display:"flex",alignItems:"center",gap:"6px"},children:[h.jsx(Df,{size:14,style:{color:"#f59e0b"}}),h.jsx("span",{children:Ht.location})]})]}),h.jsx("div",{style:{display:"flex",gap:"8px"},children:h.jsxs("button",{onClick:()=>s("contact"),className:"glass-button glass-button-primary",style:{padding:"8px 16px",fontSize:"0.82rem"},children:[h.jsx(To,{size:14}),h.jsx("span",{children:"Message"})]})})]}),h.jsxs("div",{children:[h.jsxs("h3",{style:{fontSize:"1rem",fontWeight:600,color:"#fff",marginBottom:"10px",display:"flex",alignItems:"center",gap:"8px"},children:[h.jsx(bo,{size:16,style:{color:"#f59e0b"}}),h.jsx("span",{children:"Professional Summary"})]}),h.jsx("p",{style:{fontSize:"0.9rem",lineHeight:1.7,color:"rgba(255, 255, 255, 0.8)",background:"rgba(255, 255, 255, 0.03)",padding:"16px 20px",borderRadius:"12px",border:"1px solid rgba(255, 255, 255, 0.06)"},children:Ht.summary})]}),h.jsxs("div",{children:[h.jsxs("h3",{style:{fontSize:"1rem",fontWeight:600,color:"#fff",marginBottom:"14px",display:"flex",alignItems:"center",gap:"8px"},children:[h.jsx(e0,{size:16,style:{color:"#38bdf8"}}),h.jsx("span",{children:"Professional Experience"})]}),h.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"14px"},children:Nf.map((n,r)=>h.jsxs("div",{className:"glass-card",style:{padding:"20px",borderLeft:"3px solid #38bdf8"},children:[h.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",flexWrap:"wrap",gap:"8px",marginBottom:"10px"},children:[h.jsxs("div",{children:[h.jsx("h4",{style:{fontSize:"1.05rem",fontWeight:700,color:"#fff"},children:n.role}),h.jsxs("p",{style:{color:"#38bdf8",fontSize:"0.86rem",fontWeight:500},children:[n.company," • ",h.jsx("span",{style:{color:"rgba(255, 255, 255, 0.6)"},children:n.type})]})]}),h.jsx("span",{style:{fontSize:"0.74rem",fontFamily:"var(--font-mono)",padding:"3px 9px",borderRadius:"6px",background:"rgba(56, 189, 248, 0.12)",color:"#7dd3fc",border:"1px solid rgba(56, 189, 248, 0.25)"},children:n.period})]}),h.jsx("p",{style:{fontSize:"0.86rem",color:"rgba(255, 255, 255, 0.75)",marginBottom:"12px",lineHeight:1.5},children:n.description}),h.jsx("ul",{style:{listStyle:"none",display:"flex",flexDirection:"column",gap:"8px",marginBottom:"14px"},children:n.responsibilities.map((a,c)=>h.jsxs("li",{style:{fontSize:"0.83rem",color:"rgba(255, 255, 255, 0.8)",display:"flex",alignItems:"flex-start",gap:"8px",lineHeight:1.5},children:[h.jsx(gf,{size:14,style:{color:"#38bdf8",marginTop:"3px",flexShrink:0}}),h.jsx("span",{children:a})]},c))}),h.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:"6px"},children:n.tech.map((a,c)=>h.jsx("span",{className:"badge-pill",style:{fontSize:"0.7rem"},children:a},c))})]},r))})]}),h.jsxs("div",{children:[h.jsxs("h3",{style:{fontSize:"1rem",fontWeight:600,color:"#fff",marginBottom:"14px",display:"flex",alignItems:"center",gap:"8px"},children:[h.jsx(m0,{size:16,style:{color:"#a855f7"}}),h.jsx("span",{children:"Academic Background"})]}),h.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"14px"},children:V0.map((n,r)=>h.jsxs("div",{className:"glass-card",style:{padding:"18px",borderLeft:"3px solid #a855f7"},children:[h.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",flexWrap:"wrap",gap:"8px",marginBottom:"6px"},children:[h.jsxs("div",{children:[h.jsx("h4",{style:{fontSize:"0.98rem",fontWeight:700,color:"#fff"},children:n.institution}),h.jsx("p",{style:{color:"rgba(255, 255, 255, 0.8)",fontSize:"0.85rem"},children:n.degree})]}),h.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[h.jsx("span",{style:{fontSize:"0.74rem",fontFamily:"var(--font-mono)",fontWeight:700,padding:"3px 8px",borderRadius:"6px",background:"rgba(168, 85, 247, 0.15)",color:"#c084fc",border:"1px solid rgba(168, 85, 247, 0.3)"},children:n.score}),h.jsx("span",{style:{fontSize:"0.72rem",color:"rgba(255, 255, 255, 0.5)",fontFamily:"var(--font-mono)"},children:n.period})]})]}),h.jsxs("p",{style:{fontSize:"0.78rem",color:"rgba(255, 255, 255, 0.5)",marginBottom:"8px"},children:["📍 ",n.location," • ",n.status]}),n.highlights&&h.jsx("ul",{style:{listStyle:"none",display:"flex",flexDirection:"column",gap:"4px"},children:n.highlights.map((a,c)=>h.jsxs("li",{style:{fontSize:"0.8rem",color:"rgba(255, 255, 255, 0.7)",lineHeight:1.4},children:["• ",a]},c))})]},r))})]}),h.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(260px, 1fr))",gap:"16px"},children:[h.jsxs("div",{className:"glass-card",style:{padding:"16px"},children:[h.jsx("h4",{style:{fontSize:"0.88rem",fontWeight:600,color:"#fbbf24",marginBottom:"10px"},children:"🗣️ Spoken Languages"}),h.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"8px",fontSize:"0.84rem"},children:[h.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[h.jsx("span",{children:"English"}),h.jsx("span",{style:{color:"rgba(255, 255, 255, 0.5)"},children:"Professional Working"})]}),h.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[h.jsx("span",{children:"Kannada"}),h.jsx("span",{style:{color:"#fbbf24"},children:"Native / Fluent"})]}),h.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[h.jsx("span",{children:"Hindi"}),h.jsx("span",{style:{color:"rgba(255, 255, 255, 0.5)"},children:"Conversational"})]})]})]}),h.jsxs("div",{className:"glass-card",style:{padding:"16px"},children:[h.jsx("h4",{style:{fontSize:"0.88rem",fontWeight:600,color:"#34d399",marginBottom:"10px"},children:"🤝 Soft Competencies"}),h.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:"6px"},children:[h.jsx("span",{className:"badge-pill badge-pill-emerald",children:"Teamwork & Leadership"}),h.jsx("span",{className:"badge-pill badge-pill-emerald",children:"Active Listening"}),h.jsx("span",{className:"badge-pill badge-pill-emerald",children:"Rapid Adaptability"}),h.jsx("span",{className:"badge-pill badge-pill-emerald",children:"Analytical Problem Solving"})]})]})]})]})}function KE({onOpenWindow:s,onNotify:e}){const[n,r]=pt.useState("All"),[a,c]=pt.useState(Hr[0]),[u,f]=pt.useState(!1),p=["All","Embedded & IoT","VLSI & Digital","Full-Stack Web","Hardware & Circuits"],g=n==="All"?Hr:Hr.filter(x=>x.category===n),_=x=>{navigator.clipboard.writeText(x),f(!0),e&&e("Code snippet copied to clipboard!"),setTimeout(()=>f(!1),2e3)};return h.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"22px"},children:[h.jsx("div",{style:{display:"flex",gap:"8px",overflowX:"auto",paddingBottom:"4px",scrollbarWidth:"none"},children:p.map(x=>{const y=x==="All"?Hr.length:Hr.filter(T=>T.category===x).length,E=n===x;return h.jsxs("button",{onClick:()=>r(x),style:{background:E?"rgba(245, 158, 11, 0.2)":"rgba(255, 255, 255, 0.05)",border:E?"1px solid rgba(245, 158, 11, 0.45)":"1px solid rgba(255, 255, 255, 0.1)",color:E?"#fbbf24":"rgba(255, 255, 255, 0.7)",padding:"7px 14px",borderRadius:"10px",fontSize:"0.82rem",fontWeight:E?600:400,cursor:"pointer",whiteSpace:"nowrap",transition:"all 0.18s ease",display:"flex",alignItems:"center",gap:"6px"},children:[h.jsx("span",{children:x}),h.jsx("span",{style:{fontSize:"0.7rem",padding:"1px 5px",borderRadius:"999px",background:E?"#f59e0b":"rgba(255, 255, 255, 0.12)",color:E?"#000":"rgba(255, 255, 255, 0.6)",fontWeight:700},children:y})]},x)})}),h.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(320px, 1fr))",gap:"16px"},children:g.map(x=>{const y=a.id===x.id;return h.jsxs("div",{onClick:()=>c(x),className:"glass-card",style:{padding:"20px",cursor:"pointer",border:y?"1px solid rgba(245, 158, 11, 0.6)":"1px solid rgba(255, 255, 255, 0.1)",background:y?"rgba(245, 158, 11, 0.08)":"rgba(255, 255, 255, 0.04)",boxShadow:y?"0 0 25px rgba(245, 158, 11, 0.15)":"none",display:"flex",flexDirection:"column",justifyContent:"space-between"},children:[h.jsxs("div",{children:[h.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:"10px"},children:[h.jsx("span",{className:x.category.includes("VLSI")?"badge-pill badge-pill-gold":x.category.includes("Embedded")?"badge-pill badge-pill-emerald":"badge-pill badge-pill-sky",children:x.badge||x.category}),h.jsx("span",{style:{fontSize:"0.72rem",fontFamily:"var(--font-mono)",color:"rgba(255, 255, 255, 0.45)"},children:x.period})]}),h.jsx("h3",{style:{fontSize:"1.08rem",fontWeight:700,color:"#fff",marginBottom:"6px",lineHeight:1.3},children:x.title}),h.jsx("p",{style:{fontSize:"0.84rem",color:"rgba(255, 255, 255, 0.72)",lineHeight:1.5,marginBottom:"14px"},children:x.description})]}),h.jsxs("div",{children:[h.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:"5px",marginBottom:"14px"},children:[x.technologies.slice(0,5).map((E,T)=>h.jsx("span",{style:{fontSize:"0.7rem",fontFamily:"var(--font-mono)",padding:"2px 8px",borderRadius:"6px",background:"rgba(255, 255, 255, 0.07)",border:"1px solid rgba(255, 255, 255, 0.1)",color:"rgba(255, 255, 255, 0.8)"},children:E},T)),x.technologies.length>5&&h.jsxs("span",{style:{fontSize:"0.68rem",padding:"2px 6px",borderRadius:"6px",background:"rgba(255, 255, 255, 0.04)",color:"rgba(255, 255, 255, 0.5)"},children:["+",x.technologies.length-5]})]}),h.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",paddingTop:"10px",borderTop:"1px solid rgba(255, 255, 255, 0.08)",fontSize:"0.78rem",color:y?"#fbbf24":"rgba(255, 255, 255, 0.6)"},children:[h.jsx("span",{style:{fontWeight:500},children:y?"Currently Viewing":"Click to Inspect"}),h.jsx(AE,{size:14})]})]})]},x.id)})}),a&&h.jsxs("div",{className:"glass-panel",style:{padding:"24px",background:"rgba(22, 27, 36, 0.95)",border:"1px solid rgba(245, 158, 11, 0.35)",boxShadow:"0 15px 35px -5px rgba(0, 0, 0, 0.5)"},children:[h.jsxs("div",{style:{display:"flex",alignItems:"flex-start",justifyContent:"space-between",flexWrap:"wrap",gap:"12px",marginBottom:"16px"},children:[h.jsxs("div",{children:[h.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px",marginBottom:"6px"},children:[h.jsx("span",{className:"badge-pill badge-pill-gold",children:"Detailed Blueprint"}),h.jsx("span",{style:{fontSize:"0.74rem",fontFamily:"var(--font-mono)",color:"rgba(255, 255, 255, 0.5)"},children:a.period})]}),h.jsx("h3",{style:{fontSize:"1.35rem",fontWeight:800,color:"#fff"},children:a.title})]}),h.jsxs("button",{onClick:()=>s("contact"),className:"glass-button glass-button-primary",style:{fontSize:"0.8rem",padding:"6px 14px"},children:[h.jsx("span",{children:"Inquire About Project"}),h.jsx(vf,{size:13})]})]}),h.jsx("p",{style:{fontSize:"0.9rem",color:"rgba(255, 255, 255, 0.85)",lineHeight:1.6,marginBottom:"18px"},children:a.description}),a.deliverables&&h.jsxs("div",{style:{marginBottom:"18px"},children:[h.jsx("h4",{style:{fontSize:"0.85rem",fontWeight:600,color:"#fbbf24",marginBottom:"10px"},children:"⭐ Engineering Highlights & Validations:"}),h.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"8px"},children:a.deliverables.map((x,y)=>h.jsxs("div",{style:{display:"flex",alignItems:"flex-start",gap:"8px",fontSize:"0.84rem",color:"rgba(255, 255, 255, 0.8)"},children:[h.jsx(r0,{size:15,style:{color:"#10b981",flexShrink:0,marginTop:"2px"}}),h.jsx("span",{children:x})]},y))})]}),a.codeSnippet&&h.jsxs("div",{style:{marginTop:"14px"},children:[h.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"8px 12px",background:"rgba(0, 0, 0, 0.4)",borderTopLeftRadius:"10px",borderTopRightRadius:"10px",border:"1px solid rgba(255, 255, 255, 0.1)",borderBottom:"none"},children:[h.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"6px",fontSize:"0.74rem",color:"rgba(255, 255, 255, 0.6)"},children:[h.jsx(F0,{size:13}),h.jsx("span",{children:"Architecture Source / Firmware Snippet"})]}),h.jsxs("button",{onClick:()=>_(a.codeSnippet),style:{background:"transparent",border:"none",color:u?"#10b981":"rgba(255, 255, 255, 0.6)",cursor:"pointer",fontSize:"0.72rem",display:"flex",alignItems:"center",gap:"4px"},children:[u?h.jsx(ys,{size:12}):h.jsx(ma,{size:12}),h.jsx("span",{children:u?"Copied!":"Copy Code"})]})]}),h.jsx("pre",{style:{margin:0,padding:"14px 16px",background:"#0a0d14",border:"1px solid rgba(255, 255, 255, 0.1)",borderBottomLeftRadius:"10px",borderBottomRightRadius:"10px",fontFamily:"var(--font-mono)",fontSize:"0.78rem",lineHeight:1.55,color:"#93c5fd",overflowX:"auto"},children:h.jsx("code",{children:a.codeSnippet})})]})]})]})}function ZE(){const[s,e]=pt.useState(0),n={Cpu:_o,Code:PE,Wrench:HE,Sparkles:bo};return h.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"24px"},children:[h.jsxs("div",{className:"glass-card",style:{padding:"20px 24px",background:"linear-gradient(135deg, rgba(245, 158, 11, 0.1) 0%, rgba(56, 189, 248, 0.1) 100%)",border:"1px solid rgba(255, 255, 255, 0.14)"},children:[h.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px",marginBottom:"8px"},children:[h.jsx(jE,{size:16,style:{color:"#fbbf24"}}),h.jsx("h3",{style:{fontSize:"0.98rem",fontWeight:700,color:"#fff"},children:"The Hardware-to-Cloud Dual Engine"})]}),h.jsx("p",{style:{fontSize:"0.84rem",color:"rgba(255, 255, 255, 0.8)",lineHeight:1.5,marginBottom:"16px"},children:"Unlike traditional software-only developers, Harshitha's ECE engineering background empowers her to understand systems at both the physical silicon/sensor level and the distributed web layer."}),h.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(130px, 1fr))",gap:"8px"},children:[{step:"01. RTL & Silicon",label:"Verilog & Cadence",color:"#fbbf24"},{step:"02. Analog & Circuits",label:"Multisim & TRIAC",color:"#f97316"},{step:"03. Microcontrollers",label:"ESP32 & Embedded C",color:"#34d399"},{step:"04. Backend & APIs",label:"Node & Express",color:"#38bdf8"},{step:"05. Interactive UI",label:"React.js & Three.js",color:"#a855f7"}].map((r,a)=>h.jsxs("div",{style:{background:"rgba(0, 0, 0, 0.3)",padding:"10px 12px",borderRadius:"8px",borderTop:`2px solid ${r.color}`},children:[h.jsx("div",{style:{fontSize:"0.68rem",fontFamily:"var(--font-mono)",color:r.color},children:r.step}),h.jsx("div",{style:{fontSize:"0.78rem",fontWeight:600,color:"#fff",marginTop:"2px"},children:r.label})]},a))})]}),h.jsx("div",{style:{display:"flex",gap:"8px",overflowX:"auto",paddingBottom:"4px"},children:vs.map((r,a)=>{const c=n[r.icon]||_o,u=s===a;return h.jsxs("button",{onClick:()=>e(a),style:{display:"flex",alignItems:"center",gap:"8px",background:u?"rgba(245, 158, 11, 0.2)":"rgba(255, 255, 255, 0.05)",border:u?"1px solid rgba(245, 158, 11, 0.5)":"1px solid rgba(255, 255, 255, 0.1)",color:u?"#fbbf24":"rgba(255, 255, 255, 0.7)",padding:"8px 16px",borderRadius:"10px",fontSize:"0.82rem",fontWeight:u?600:500,cursor:"pointer",whiteSpace:"nowrap",transition:"all 0.15s ease"},children:[h.jsx(c,{size:15}),h.jsx("span",{children:r.title})]},a)})}),vs[s]&&h.jsxs("div",{className:"glass-card",style:{padding:"24px"},children:[h.jsxs("div",{style:{marginBottom:"18px"},children:[h.jsx("h4",{style:{fontSize:"1.1rem",fontWeight:700,color:"#fff"},children:vs[s].title}),h.jsx("p",{style:{fontSize:"0.82rem",color:"rgba(255, 255, 255, 0.6)"},children:vs[s].description})]}),h.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(280px, 1fr))",gap:"16px"},children:vs[s].skills.map((r,a)=>h.jsxs("div",{style:{background:"rgba(255, 255, 255, 0.03)",padding:"14px 16px",borderRadius:"10px",border:"1px solid rgba(255, 255, 255, 0.07)"},children:[h.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"8px"},children:[h.jsx("span",{style:{fontWeight:600,fontSize:"0.9rem",color:"#fff"},children:r.name}),h.jsx("span",{style:{fontSize:"0.7rem",fontFamily:"var(--font-mono)",padding:"2px 6px",borderRadius:"4px",background:"rgba(255, 255, 255, 0.08)",color:"#fbbf24"},children:r.tag})]}),h.jsx("div",{style:{width:"100%",height:"6px",borderRadius:"999px",background:"rgba(255, 255, 255, 0.1)",overflow:"hidden"},children:h.jsx("div",{style:{width:`${r.level}%`,height:"100%",borderRadius:"999px",background:"linear-gradient(90deg, #f59e0b, #f97316)",transition:"width 0.8s cubic-bezier(0.16, 1, 0.3, 1)"}})})]},a))})]})]})}function QE({onNotify:s}){const e=()=>{window.print(),s&&s("Print dialog opened! You can save as PDF.")};return h.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"20px"},children:[h.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap",gap:"12px",paddingBottom:"16px",borderBottom:"1px solid rgba(255, 255, 255, 0.1)"},children:[h.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[h.jsx(oc,{size:18,style:{color:"#a855f7"}}),h.jsx("span",{style:{fontSize:"0.92rem",fontWeight:600,color:"#fff"},children:"Curriculum Vitae • Harshitha G S"}),h.jsx("span",{className:"badge-pill badge-pill-emerald",children:"Verified Resume"})]}),h.jsx("div",{style:{display:"flex",gap:"8px"},children:h.jsxs("button",{onClick:e,className:"glass-button glass-button-primary",style:{padding:"8px 14px",fontSize:"0.8rem"},children:[h.jsx(zE,{size:14}),h.jsx("span",{children:"Print / Save as PDF"})]})})]}),h.jsxs("div",{id:"printable-resume",style:{background:"#ffffff",color:"#1a1a1a",padding:"40px 48px",borderRadius:"12px",boxShadow:"0 20px 40px rgba(0, 0, 0, 0.4)",fontFamily:"serif",lineHeight:1.45},children:[h.jsxs("div",{style:{textAlign:"center",borderBottom:"2px solid #222",paddingBottom:"12px",marginBottom:"16px"},children:[h.jsx("h1",{style:{fontSize:"2rem",letterSpacing:"2px",fontWeight:800,textTransform:"uppercase",margin:"0 0 6px 0",fontFamily:"serif"},children:"HARSHITHA G S"}),h.jsxs("div",{style:{fontSize:"0.82rem",color:"#333",display:"flex",justifyContent:"center",flexWrap:"wrap",gap:"14px",fontFamily:"sans-serif"},children:[h.jsx("span",{children:Ht.email}),h.jsx("span",{children:"•"}),h.jsx("span",{children:Ht.phone}),h.jsx("span",{children:"•"}),h.jsx("span",{children:Ht.location}),h.jsx("span",{children:"•"}),h.jsx("a",{href:Ht.linkedin,target:"_blank",rel:"noreferrer",style:{color:"#0066cc",textDecoration:"none"},children:"LinkedIn"}),h.jsx("span",{children:"•"}),h.jsx("a",{href:Ht.github,target:"_blank",rel:"noreferrer",style:{color:"#0066cc",textDecoration:"none"},children:"GitHub"})]}),h.jsx("div",{style:{fontSize:"0.78rem",color:"#555",marginTop:"4px",fontFamily:"sans-serif"},children:Ht.address})]}),h.jsxs("div",{style:{marginBottom:"16px"},children:[h.jsx("h2",{style:{fontSize:"0.95rem",fontWeight:800,textTransform:"uppercase",letterSpacing:"1px",borderBottom:"1px solid #444",paddingBottom:"3px",margin:"0 0 6px 0",fontFamily:"sans-serif"},children:"SUMMARY"}),h.jsx("p",{style:{fontSize:"0.86rem",color:"#222",margin:0,fontFamily:"serif"},children:Ht.summary})]}),h.jsxs("div",{style:{marginBottom:"16px"},children:[h.jsx("h2",{style:{fontSize:"0.95rem",fontWeight:800,textTransform:"uppercase",letterSpacing:"1px",borderBottom:"1px solid #444",paddingBottom:"3px",margin:"0 0 8px 0",fontFamily:"sans-serif"},children:"EDUCATION"}),h.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"8px"},children:[h.jsxs("div",{children:[h.jsxs("div",{style:{display:"flex",justifyContent:"space-between",fontWeight:700,fontSize:"0.88rem"},children:[h.jsx("span",{children:"UG ECE"}),h.jsx("span",{children:"Aug 2023 – Present"})]}),h.jsxs("div",{style:{display:"flex",justifyContent:"space-between",fontSize:"0.84rem",fontStyle:"italic"},children:[h.jsx("span",{children:"GM University"}),h.jsx("span",{style:{fontWeight:600},children:"CGPA: 6.99"})]})]}),h.jsxs("div",{children:[h.jsxs("div",{style:{display:"flex",justifyContent:"space-between",fontWeight:700,fontSize:"0.88rem"},children:[h.jsx("span",{children:"Pre-University Course (PUC / 12th)"}),h.jsx("span",{children:"Completed"})]}),h.jsxs("div",{style:{display:"flex",justifyContent:"space-between",fontSize:"0.84rem",fontStyle:"italic"},children:[h.jsx("span",{children:"Akshara PU College Shikaripura"}),h.jsx("span",{style:{fontWeight:600},children:"CGPA: 88.33%"})]})]}),h.jsxs("div",{children:[h.jsxs("div",{style:{display:"flex",justifyContent:"space-between",fontWeight:700,fontSize:"0.88rem"},children:[h.jsx("span",{children:"SSLC / 10th Grade"}),h.jsx("span",{children:"Completed"})]}),h.jsxs("div",{style:{display:"flex",justifyContent:"space-between",fontSize:"0.84rem",fontStyle:"italic"},children:[h.jsx("span",{children:"Banasiri Lions Educational Society(R) Shikaripura"}),h.jsx("span",{style:{fontWeight:600},children:"CGPA: 87.04%"})]})]})]})]}),h.jsxs("div",{style:{marginBottom:"16px"},children:[h.jsx("h2",{style:{fontSize:"0.95rem",fontWeight:800,textTransform:"uppercase",letterSpacing:"1px",borderBottom:"1px solid #444",paddingBottom:"3px",margin:"0 0 8px 0",fontFamily:"sans-serif"},children:"PROFESSIONAL EXPERIENCE"}),Nf.map((n,r)=>h.jsxs("div",{style:{marginBottom:"8px"},children:[h.jsxs("div",{style:{display:"flex",justifyContent:"space-between",fontWeight:700,fontSize:"0.88rem"},children:[h.jsxs("span",{children:[n.role," @ ",n.company]}),h.jsx("span",{children:n.period})]}),h.jsx("div",{style:{fontSize:"0.82rem",color:"#555",fontStyle:"italic",marginBottom:"4px"},children:n.type}),h.jsxs("ul",{style:{margin:"0 0 4px 18px",padding:0,fontSize:"0.84rem"},children:[h.jsx("li",{children:"Developed a Job Listing Portal with secure authentication, job management, and candidate tracking."}),h.jsx("li",{children:"Built a Certificate Verification System for certificate search, instant validation, and download using unique IDs."})]})]},r))]}),h.jsxs("div",{style:{marginBottom:"16px"},children:[h.jsx("h2",{style:{fontSize:"0.95rem",fontWeight:800,textTransform:"uppercase",letterSpacing:"1px",borderBottom:"1px solid #444",paddingBottom:"3px",margin:"0 0 8px 0",fontFamily:"sans-serif"},children:"PROJECTS"}),h.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"10px"},children:Hr.map(n=>h.jsxs("div",{children:[h.jsxs("div",{style:{display:"flex",justifyContent:"space-between",fontWeight:700,fontSize:"0.88rem"},children:[h.jsx("span",{children:n.title}),h.jsx("span",{style:{fontWeight:400,fontSize:"0.82rem"},children:n.period})]}),h.jsxs("div",{style:{fontSize:"0.8rem",color:"#444",fontStyle:"italic",marginBottom:"2px"},children:["Tech: ",n.technologies.join(", ")]}),h.jsxs("div",{style:{fontSize:"0.83rem",color:"#222"},children:["• ",n.description]})]},n.id))})]}),h.jsxs("div",{style:{marginBottom:"16px"},children:[h.jsx("h2",{style:{fontSize:"0.95rem",fontWeight:800,textTransform:"uppercase",letterSpacing:"1px",borderBottom:"1px solid #444",paddingBottom:"3px",margin:"0 0 6px 0",fontFamily:"sans-serif"},children:"TECHNICAL SKILLS"}),h.jsxs("div",{style:{fontSize:"0.84rem",lineHeight:1.6,fontFamily:"serif"},children:[h.jsxs("div",{children:[h.jsx("strong",{children:"Technical Skills:"})," Python • HTML • CSS • MERN • Embedded C • Verilog"]}),h.jsxs("div",{children:[h.jsx("strong",{children:"Tools:"})," GitHub • LabVIEW • Cadence • Multisim"]}),h.jsxs("div",{children:[h.jsx("strong",{children:"Soft Skills:"})," Teamwork • Adaptability • Active Listening"]}),h.jsxs("div",{children:[h.jsx("strong",{children:"Languages:"})," English • Kannada • Hindi"]})]})]}),h.jsxs("div",{children:[h.jsx("h2",{style:{fontSize:"0.95rem",fontWeight:800,textTransform:"uppercase",letterSpacing:"1px",borderBottom:"1px solid #444",paddingBottom:"3px",margin:"0 0 8px 0",fontFamily:"sans-serif"},children:"CERTIFICATIONS"}),h.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"8px"},children:j0.map(n=>h.jsxs("div",{children:[h.jsxs("div",{style:{display:"flex",justifyContent:"space-between",fontWeight:700,fontSize:"0.86rem"},children:[h.jsx("span",{children:n.title}),h.jsx("span",{children:n.date})]}),h.jsx("div",{style:{fontSize:"0.82rem",color:"#555",fontStyle:"italic"},children:n.issuer})]},n.id))})]})]})]})}function JE({size:s=16,style:e={}}){return h.jsx("svg",{width:s,height:s,viewBox:"0 0 24 24",fill:"currentColor",style:e,children:h.jsx("path",{d:"M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.69 1.69 0 1 0 0-3.38 1.69 1.69 0 0 0 0 3.38m1.4 9.74V9.97H5.06v8.53h2.8z"})})}function ew({size:s=16,style:e={}}){return h.jsx("svg",{width:s,height:s,viewBox:"0 0 24 24",fill:"currentColor",style:e,children:h.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"})})}function tw({onNotify:s}){const[e,n]=pt.useState({name:"",email:"",subject:"",message:""}),[r,a]=pt.useState(!1),[c,u]=pt.useState(!1),[f,p]=pt.useState(""),g=(x,y)=>{navigator.clipboard.writeText(x),p(y),s&&s(`${y} copied to clipboard!`),setTimeout(()=>p(""),2500)},_=x=>{x.preventDefault(),!(!e.name||!e.email||!e.message)&&(a(!0),setTimeout(()=>{a(!1),u(!0);try{G0({particleCount:100,spread:70,origin:{y:.6}})}catch{}s&&s("Message sent successfully! Harshitha will reply shortly.")},900))};return h.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"24px"},children:[h.jsxs("div",{children:[h.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px",marginBottom:"6px"},children:[h.jsx(bo,{size:16,style:{color:"#f59e0b"}}),h.jsx("h3",{style:{fontSize:"1.25rem",fontWeight:700,color:"#fff"},children:"Let's Collaborate or Connect"})]}),h.jsx("p",{style:{fontSize:"0.86rem",color:"rgba(255, 255, 255, 0.72)",lineHeight:1.5},children:"Whether you're looking for an ECE intern in VLSI / Embedded Systems, a MERN stack developer, or want to discuss an innovative project, feel free to drop a message!"})]}),h.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(290px, 1fr))",gap:"20px"},children:[h.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"14px"},children:[h.jsxs("div",{className:"glass-card",style:{padding:"16px",display:"flex",alignItems:"center",justifyContent:"space-between"},children:[h.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"12px"},children:[h.jsx("div",{style:{width:"40px",height:"40px",borderRadius:"10px",background:"rgba(244, 63, 94, 0.15)",border:"1px solid rgba(244, 63, 94, 0.3)",display:"flex",alignItems:"center",justifyContent:"center",color:"#f43f5e"},children:h.jsx(To,{size:18})}),h.jsxs("div",{children:[h.jsx("div",{style:{fontSize:"0.74rem",color:"rgba(255, 255, 255, 0.5)"},children:"Direct Email"}),h.jsx("div",{style:{fontSize:"0.84rem",fontWeight:600,color:"#fff"},children:Ht.email})]})]}),h.jsxs("button",{onClick:()=>g(Ht.email,"Email"),style:{background:"rgba(255, 255, 255, 0.08)",border:"1px solid rgba(255, 255, 255, 0.15)",color:f==="Email"?"#10b981":"#fff",padding:"6px 10px",borderRadius:"8px",cursor:"pointer",fontSize:"0.74rem",display:"flex",alignItems:"center",gap:"4px"},title:"Copy Email",children:[f==="Email"?h.jsx(ys,{size:13}):h.jsx(ma,{size:13}),h.jsx("span",{children:f==="Email"?"Copied":"Copy"})]})]}),h.jsxs("div",{className:"glass-card",style:{padding:"16px",display:"flex",alignItems:"center",justifyContent:"space-between"},children:[h.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"12px"},children:[h.jsx("div",{style:{width:"40px",height:"40px",borderRadius:"10px",background:"rgba(16, 185, 129, 0.15)",border:"1px solid rgba(16, 185, 129, 0.3)",display:"flex",alignItems:"center",justifyContent:"center",color:"#10b981"},children:h.jsx(b0,{size:18})}),h.jsxs("div",{children:[h.jsx("div",{style:{fontSize:"0.74rem",color:"rgba(255, 255, 255, 0.5)"},children:"Phone Number"}),h.jsx("div",{style:{fontSize:"0.84rem",fontWeight:600,color:"#fff"},children:Ht.phoneDisplay})]})]}),h.jsxs("button",{onClick:()=>g(Ht.phone,"Phone"),style:{background:"rgba(255, 255, 255, 0.08)",border:"1px solid rgba(255, 255, 255, 0.15)",color:f==="Phone"?"#10b981":"#fff",padding:"6px 10px",borderRadius:"8px",cursor:"pointer",fontSize:"0.74rem",display:"flex",alignItems:"center",gap:"4px"},title:"Copy Phone",children:[f==="Phone"?h.jsx(ys,{size:13}):h.jsx(ma,{size:13}),h.jsx("span",{children:f==="Phone"?"Copied":"Copy"})]})]}),h.jsxs("div",{className:"glass-card",style:{padding:"16px",display:"flex",alignItems:"center",gap:"12px"},children:[h.jsx("div",{style:{width:"40px",height:"40px",borderRadius:"10px",background:"rgba(245, 158, 11, 0.15)",border:"1px solid rgba(245, 158, 11, 0.3)",display:"flex",alignItems:"center",justifyContent:"center",color:"#f59e0b",flexShrink:0},children:h.jsx(Df,{size:18})}),h.jsxs("div",{children:[h.jsx("div",{style:{fontSize:"0.74rem",color:"rgba(255, 255, 255, 0.5)"},children:"Location"}),h.jsx("div",{style:{fontSize:"0.82rem",fontWeight:500,color:"#fff",lineHeight:1.4},children:Ht.address})]})]}),h.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"10px"},children:[h.jsxs("a",{href:Ht.linkedin,target:"_blank",rel:"noreferrer",className:"glass-card",style:{padding:"12px",display:"flex",alignItems:"center",gap:"8px",textDecoration:"none",color:"#fff",fontSize:"0.82rem",fontWeight:500},children:[h.jsx(JE,{size:16,style:{color:"#0077b5"}}),h.jsx("span",{children:"LinkedIn"}),h.jsx(vf,{size:12,style:{marginLeft:"auto",opacity:.5}})]}),h.jsxs("a",{href:Ht.github,target:"_blank",rel:"noreferrer",className:"glass-card",style:{padding:"12px",display:"flex",alignItems:"center",gap:"8px",textDecoration:"none",color:"#fff",fontSize:"0.82rem",fontWeight:500},children:[h.jsx(ew,{size:16,style:{color:"#fbbf24"}}),h.jsx("span",{children:"GitHub"}),h.jsx(vf,{size:12,style:{marginLeft:"auto",opacity:.5}})]})]})]}),h.jsx("div",{className:"glass-card",style:{padding:"22px"},children:c?h.jsxs("div",{style:{textAlign:"center",padding:"30px 10px",display:"flex",flexDirection:"column",alignItems:"center",gap:"12px"},className:"animate-fade-in",children:[h.jsx("div",{style:{width:"54px",height:"54px",borderRadius:"50%",background:"rgba(16, 185, 129, 0.2)",border:"2px solid #10b981",display:"flex",alignItems:"center",justifyContent:"center",color:"#10b981"},children:h.jsx(ys,{size:28})}),h.jsxs("h4",{style:{fontSize:"1.2rem",fontWeight:700,color:"#fff"},children:["Thank You, ",e.name,"!"]}),h.jsx("p",{style:{fontSize:"0.86rem",color:"rgba(255, 255, 255, 0.75)",maxWidth:"320px"},children:"Your message has been dispatched to Harshitha's inbox. She will get back to you promptly."}),h.jsx("button",{onClick:()=>{u(!1),n({name:"",email:"",subject:"",message:""})},className:"glass-button",style:{marginTop:"8px",fontSize:"0.8rem"},children:"Send Another Message"})]}):h.jsxs("form",{onSubmit:_,style:{display:"flex",flexDirection:"column",gap:"14px"},children:[h.jsx("h4",{style:{fontSize:"0.98rem",fontWeight:600,color:"#fff",marginBottom:"2px"},children:"Send a Direct Message"}),h.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"10px"},children:[h.jsxs("div",{children:[h.jsx("label",{style:{display:"block",fontSize:"0.74rem",color:"rgba(255, 255, 255, 0.6)",marginBottom:"4px"},children:"Your Name *"}),h.jsx("input",{type:"text",required:!0,value:e.name,onChange:x=>n({...e,name:x.target.value}),placeholder:"e.g. Rahul Sharma",style:{width:"100%",padding:"9px 12px",background:"rgba(0, 0, 0, 0.4)",border:"1px solid rgba(255, 255, 255, 0.14)",borderRadius:"8px",color:"#fff",fontSize:"0.84rem",outline:"none"}})]}),h.jsxs("div",{children:[h.jsx("label",{style:{display:"block",fontSize:"0.74rem",color:"rgba(255, 255, 255, 0.6)",marginBottom:"4px"},children:"Your Email *"}),h.jsx("input",{type:"email",required:!0,value:e.email,onChange:x=>n({...e,email:x.target.value}),placeholder:"name@company.com",style:{width:"100%",padding:"9px 12px",background:"rgba(0, 0, 0, 0.4)",border:"1px solid rgba(255, 255, 255, 0.14)",borderRadius:"8px",color:"#fff",fontSize:"0.84rem",outline:"none"}})]})]}),h.jsxs("div",{children:[h.jsx("label",{style:{display:"block",fontSize:"0.74rem",color:"rgba(255, 255, 255, 0.6)",marginBottom:"4px"},children:"Subject"}),h.jsx("input",{type:"text",value:e.subject,onChange:x=>n({...e,subject:x.target.value}),placeholder:"Internship opportunity / Collaboration",style:{width:"100%",padding:"9px 12px",background:"rgba(0, 0, 0, 0.4)",border:"1px solid rgba(255, 255, 255, 0.14)",borderRadius:"8px",color:"#fff",fontSize:"0.84rem",outline:"none"}})]}),h.jsxs("div",{children:[h.jsx("label",{style:{display:"block",fontSize:"0.74rem",color:"rgba(255, 255, 255, 0.6)",marginBottom:"4px"},children:"Your Message *"}),h.jsx("textarea",{required:!0,rows:4,value:e.message,onChange:x=>n({...e,message:x.target.value}),placeholder:"Hi Harshitha, we reviewed your projects and would love to connect...",style:{width:"100%",padding:"9px 12px",background:"rgba(0, 0, 0, 0.4)",border:"1px solid rgba(255, 255, 255, 0.14)",borderRadius:"8px",color:"#fff",fontSize:"0.84rem",outline:"none",resize:"vertical"}})]}),h.jsx("button",{type:"submit",disabled:r,className:"glass-button glass-button-primary",style:{width:"100%",padding:"11px",marginTop:"4px"},children:r?h.jsx("span",{children:"Sending message..."}):h.jsxs(h.Fragment,{children:[h.jsx(Lf,{size:15}),h.jsx("span",{children:"Send Message to Harshitha"})]})})]})})]})]})}function nw({meadowConfig:s,setMeadowConfig:e}){const n=()=>{e({wind:10,grass:5,flowers:3.7,cloudSpeed:3,dayTime:18,dayCycle:!1})};return h.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"22px"},children:[h.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between"},children:[h.jsxs("div",{children:[h.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px",marginBottom:"4px"},children:[h.jsx(ac,{size:18,style:{color:"#fb923c"}}),h.jsx("h3",{style:{fontSize:"1.15rem",fontWeight:700,color:"#fff"},children:"3D Voxel Meadow Lab"})]}),h.jsx("p",{style:{fontSize:"0.82rem",color:"rgba(255, 255, 255, 0.7)"},children:"Adjust physical and environmental parameters of the live Three.js sunset meadow in real time."})]}),h.jsxs("button",{onClick:n,className:"glass-button",style:{padding:"6px 12px",fontSize:"0.76rem"},children:[h.jsx(kE,{size:12}),h.jsx("span",{children:"Reset Defaults"})]})]}),h.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(260px, 1fr))",gap:"16px"},children:[h.jsxs("div",{className:"glass-card",style:{padding:"16px"},children:[h.jsxs("div",{style:{display:"flex",justifyContent:"space-between",marginBottom:"8px"},children:[h.jsxs("label",{style:{fontSize:"0.84rem",fontWeight:600,color:"#fbbf24",display:"flex",alignItems:"center",gap:"6px"},children:[h.jsx(N0,{size:14}),h.jsxs("span",{children:["Time of Day: ",s.dayTime,":00 hrs"]})]}),h.jsx("span",{style:{fontSize:"0.74rem",fontFamily:"var(--font-mono)",color:"rgba(255, 255, 255, 0.5)"},children:s.dayTime===18?"Sunset":s.dayTime===12?"Noon":s.dayTime===0?"Night":"Custom"})]}),h.jsx("input",{type:"range",min:"0",max:"24",step:"0.5",value:s.dayTime,onChange:r=>e(a=>({...a,dayTime:parseFloat(r.target.value)})),style:{width:"100%",accentColor:"#f59e0b",cursor:"pointer"}}),h.jsxs("div",{style:{display:"flex",justifyContent:"space-between",marginTop:"8px",fontSize:"0.7rem",color:"rgba(255, 255, 255, 0.4)"},children:[h.jsx("span",{children:"00:00 (Moon)"}),h.jsx("span",{children:"12:00 (Sun)"}),h.jsx("span",{children:"18:00 (Sunset)"}),h.jsx("span",{children:"24:00"})]})]}),h.jsxs("div",{className:"glass-card",style:{padding:"16px"},children:[h.jsxs("div",{style:{display:"flex",justifyContent:"space-between",marginBottom:"8px"},children:[h.jsxs("label",{style:{fontSize:"0.84rem",fontWeight:600,color:"#38bdf8",display:"flex",alignItems:"center",gap:"6px"},children:[h.jsx(BE,{size:14}),h.jsx("span",{children:"Wind Gust Intensity"})]}),h.jsxs("span",{style:{fontSize:"0.74rem",fontFamily:"var(--font-mono)",color:"#38bdf8"},children:[s.wind," / 10"]})]}),h.jsx("input",{type:"range",min:"0",max:"10",step:"0.5",value:s.wind,onChange:r=>e(a=>({...a,wind:parseFloat(r.target.value)})),style:{width:"100%",accentColor:"#38bdf8",cursor:"pointer"}})]}),h.jsxs("div",{className:"glass-card",style:{padding:"16px"},children:[h.jsxs("div",{style:{display:"flex",justifyContent:"space-between",marginBottom:"8px"},children:[h.jsxs("label",{style:{fontSize:"0.84rem",fontWeight:600,color:"#f43f5e",display:"flex",alignItems:"center",gap:"6px"},children:[h.jsx(bo,{size:14}),h.jsx("span",{children:"Voxel Flower Blooms"})]}),h.jsxs("span",{style:{fontSize:"0.74rem",fontFamily:"var(--font-mono)",color:"#f43f5e"},children:[s.flowers," / 10"]})]}),h.jsx("input",{type:"range",min:"0",max:"10",step:"0.5",value:s.flowers,onChange:r=>e(a=>({...a,flowers:parseFloat(r.target.value)})),style:{width:"100%",accentColor:"#f43f5e",cursor:"pointer"}})]}),h.jsxs("div",{className:"glass-card",style:{padding:"16px"},children:[h.jsxs("div",{style:{display:"flex",justifyContent:"space-between",marginBottom:"8px"},children:[h.jsxs("label",{style:{fontSize:"0.84rem",fontWeight:600,color:"#10b981",display:"flex",alignItems:"center",gap:"6px"},children:[h.jsx("span",{children:"🌾"}),h.jsx("span",{children:"Grass Blade Density"})]}),h.jsxs("span",{style:{fontSize:"0.74rem",fontFamily:"var(--font-mono)",color:"#10b981"},children:[s.grass," / 10"]})]}),h.jsx("input",{type:"range",min:"1",max:"10",step:"0.5",value:s.grass,onChange:r=>e(a=>({...a,grass:parseFloat(r.target.value)})),style:{width:"100%",accentColor:"#10b981",cursor:"pointer"}})]})]})]})}function iw(){const[s,e]=pt.useState("desktop"),[n,r]=pt.useState(20),[a,c]=pt.useState({wind:10,grass:5,flowers:3.7,cloudSpeed:3,dayTime:18,dayCycle:!1}),[u,f]=pt.useState({projects:{isOpen:!0,isMinimized:!1,zIndex:10,initialPosition:{x:70,y:65},initialSize:{width:840,height:580}},about:{isOpen:!1,isMinimized:!1,zIndex:11,initialPosition:{x:120,y:75},initialSize:{width:780,height:560}},skills:{isOpen:!1,isMinimized:!1,zIndex:12,initialPosition:{x:180,y:90},initialSize:{width:780,height:560}},resume:{isOpen:!1,isMinimized:!1,zIndex:13,initialPosition:{x:200,y:70},initialSize:{width:820,height:620}},contact:{isOpen:!1,isMinimized:!1,zIndex:14,initialPosition:{x:160,y:90},initialSize:{width:760,height:540}},meadow:{isOpen:!1,isMinimized:!1,zIndex:15,initialPosition:{x:220,y:100},initialSize:{width:680,height:480}}}),[p,g]=pt.useState([]),_=v=>{const U=Date.now()+Math.random();g(L=>[...L,{id:U,message:v}]),setTimeout(()=>{g(L=>L.filter(A=>A.id!==U))},3500)};pt.useEffect(()=>{typeof window<"u"&&window.innerWidth<768&&e("flow")},[]);const x=v=>{r(U=>{const L=U+1;return f(A=>({...A,[v]:{...A[v],isOpen:!0,isMinimized:!1,zIndex:L}})),L})},y=v=>{x(v)},E=v=>{f(U=>({...U,[v]:{...U[v],isOpen:!1}}))},T=v=>{f(U=>({...U,[v]:{...U[v],isMinimized:!0}}))},P=v=>{var U,L;(U=u[v])!=null&&U.isOpen&&!((L=u[v])!=null&&L.isMinimized)?T(v):x(v)},S=Object.values(u).filter(v=>v.isOpen&&!v.isMinimized).length;return h.jsxs("div",{style:{position:"relative",width:"100vw",minHeight:"100vh",overflowX:"hidden",background:"#0b0f17"},children:[h.jsx("div",{style:{position:"fixed",inset:0,zIndex:1,pointerEvents:s==="desktop"?"auto":"none",opacity:s==="flow"?.35:1,transition:"opacity 0.4s ease"},children:h.jsx(gE,{flowers:a.flowers,grass:a.grass,wind:a.wind,speed:10,cloudSpeed:a.cloudSpeed,day:{cycle:a.dayCycle,time:a.dayTime,length:90}})}),h.jsx(GE,{viewMode:s,setViewMode:e,dayTime:a.dayTime,setDayTime:v=>c(U=>({...U,dayTime:v})),activeWindowCount:S,onOpenWindow:y}),s==="desktop"&&h.jsxs("main",{style:{position:"relative",width:"100%",height:"100vh",zIndex:10},children:[h.jsx(WE,{onOpenWindow:y}),h.jsx(XE,{onOpenWindow:y,onViewScroll:()=>e("flow")}),h.jsx(so,{id:"projects",title:"Projects & Engineering Blueprints",badge:"6 Projects",icon:h.jsx(Pf,{size:16,style:{color:"#f59e0b"}}),isOpen:u.projects.isOpen,isMinimized:u.projects.isMinimized,zIndex:u.projects.zIndex,initialPosition:u.projects.initialPosition,initialSize:u.projects.initialSize,onClose:()=>E("projects"),onMinimize:()=>T("projects"),onFocus:()=>x("projects"),children:h.jsx(KE,{onOpenWindow:y,onNotify:_})}),h.jsx(so,{id:"about",title:"About Harshitha G S — Profile & Experience",badge:"ECE Engineer",icon:h.jsx(If,{size:16,style:{color:"#38bdf8"}}),isOpen:u.about.isOpen,isMinimized:u.about.isMinimized,zIndex:u.about.zIndex,initialPosition:u.about.initialPosition,initialSize:u.about.initialSize,onClose:()=>E("about"),onMinimize:()=>T("about"),onFocus:()=>x("about"),children:h.jsx($E,{onOpenWindow:y,onNotify:_})}),h.jsx(so,{id:"skills",title:"Technical Skills & Hardware-Software Stack",badge:"VLSI & MERN",icon:h.jsx(_o,{size:16,style:{color:"#10b981"}}),isOpen:u.skills.isOpen,isMinimized:u.skills.isMinimized,zIndex:u.skills.zIndex,initialPosition:u.skills.initialPosition,initialSize:u.skills.initialSize,onClose:()=>E("skills"),onMinimize:()=>T("skills"),onFocus:()=>x("skills"),children:h.jsx(ZE,{})}),h.jsx(so,{id:"resume",title:"Curriculum Vitae — Verified Credentials",badge:"Printable",icon:h.jsx(oc,{size:16,style:{color:"#a855f7"}}),isOpen:u.resume.isOpen,isMinimized:u.resume.isMinimized,zIndex:u.resume.zIndex,initialPosition:u.resume.initialPosition,initialSize:u.resume.initialSize,onClose:()=>E("resume"),onMinimize:()=>T("resume"),onFocus:()=>x("resume"),children:h.jsx(QE,{onNotify:_})}),h.jsx(so,{id:"contact",title:"Get in Touch — Message & Contacts",badge:"Available for Hire",icon:h.jsx(To,{size:16,style:{color:"#f43f5e"}}),isOpen:u.contact.isOpen,isMinimized:u.contact.isMinimized,zIndex:u.contact.zIndex,initialPosition:u.contact.initialPosition,initialSize:u.contact.initialSize,onClose:()=>E("contact"),onMinimize:()=>T("contact"),onFocus:()=>x("contact"),children:h.jsx(tw,{onNotify:_})}),h.jsx(so,{id:"meadow",title:"3D Sunset Meadow Physical Controls",badge:"Three.js Lab",icon:h.jsx(ac,{size:16,style:{color:"#fb923c"}}),isOpen:u.meadow.isOpen,isMinimized:u.meadow.isMinimized,zIndex:u.meadow.zIndex,initialPosition:u.meadow.initialPosition,initialSize:u.meadow.initialSize,onClose:()=>E("meadow"),onMinimize:()=>T("meadow"),onFocus:()=>x("meadow"),children:h.jsx(nw,{meadowConfig:a,setMeadowConfig:c})}),h.jsx(qE,{openWindows:u,onOpenWindow:P,viewMode:s,setViewMode:e})]}),s==="flow"&&h.jsx(YE,{onNotify:_,onSwitchToDesktop:()=>e("desktop")}),h.jsx("div",{className:"toast-container",children:p.map(v=>h.jsxs("div",{className:"toast-item",children:[h.jsx(r0,{size:16,style:{color:"#10b981"}}),h.jsx("span",{children:v.message})]},v.id))})]})}Ix.createRoot(document.getElementById("root")).render(h.jsx(bx.StrictMode,{children:h.jsx(iw,{})}));
