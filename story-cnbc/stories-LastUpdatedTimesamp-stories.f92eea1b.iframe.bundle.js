(globalThis.webpackChunkfirecracker=globalThis.webpackChunkfirecracker||[]).push([[128,2384,3437,7527,1073,3986],{"./components/stories/LastUpdatedTimesamp.stories.js":(y,h,a)=>{"use strict";a.r(h),a.d(h,{LastUpdatedTimestamp:()=>l,__namedExportsOrder:()=>c,default:()=>u});var m=a("./node_modules/next/dist/compiled/react/index.js"),_=a("./components/LastUpdatedTimestamp.js"),p=m.createElement;const u={component:_.default,title:"Global Components/Text/Last Updated Timestamp",argTypes:{className:{control:{type:"text"}},timestamp:{control:{type:"text"}}},args:{timestamp:"Feb. 8, 5:20 PM ET"}},l=({timestamp:d,className:v})=>p(_.default,{className:v},d);l.displayName="LastUpdatedTimestamp";const c=["LastUpdatedTimestamp"]},"./components/LastUpdatedTimestamp.js":(y,h,a)=>{"use strict";a.r(h),a.d(h,{default:()=>v});var m=a("./node_modules/next/dist/compiled/react/index.js"),_=a("./node_modules/prop-types/index.js"),p=a.n(_),u=a("./node_modules/react-i18next/dist/es/index.js"),l=a("./components/RefreshIcon.js"),c=m.createElement;const d=({fontSize:R,children:g,className:S,t:E,withIcon:C})=>{const{0:F,1:j}=(0,m.useState)(!1);return(0,m.useEffect)(()=>{if(!g)return;j(!0);let T;const P=window.requestAnimationFrame(()=>{T=setTimeout(()=>j(!1),5e3)});return()=>{cancelAnimationFrame(P),clearTimeout(T)}},[g]),g?c("div",{className:`last-updated-timestamp founders-mono gray-80 lh-none df items-center ${R} ${S}`},C&&c(l.default,{isUpdating:F}),c("span",{className:"pl1"},E("Last update")," ",c("span",{className:"timestamp"},g))):null};d.displayName="LastUpdatedTimestamp",d.propTypes={children:p().node,className:p().string,withIcon:p().bool,fontSize:p().string},d.defaultProps={children:null,className:"",withIcon:!0,fontSize:"f3"};const v=(0,u.withTranslation)()(d)},"./components/RefreshIcon.js":(y,h,a)=>{"use strict";a.r(h),a.d(h,{default:()=>v});var m=a("./node_modules/styled-jsx/style.js"),_=a.n(m),p=a("./node_modules/next/dist/compiled/react/index.js"),u=a("./node_modules/classnames/index.js"),l=a.n(u),c=p.createElement;const d=({isUpdating:R,color:g,size:S,classes:E})=>c(p.Fragment,null,c(_(),{id:"404944366"},["@-webkit-keyframes spin-jsx-404944366{100%{-webkit-transform:rotate(360deg);-ms-transform:rotate(360deg);transform:rotate(360deg);}}","@keyframes spin-jsx-404944366{100%{-webkit-transform:rotate(360deg);-ms-transform:rotate(360deg);transform:rotate(360deg);}}","[data-update-toggle].jsx-404944366{-webkit-animation-name:spin-jsx-404944366;animation-name:spin-jsx-404944366;-webkit-animation-fill-mode:both;animation-fill-mode:both;-webkit-animation-duration:2s;animation-duration:2s;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite;-webkit-animation-timing-function:linear;animation-timing-function:linear;-webkit-animation-play-state:paused;animation-play-state:paused;}",".updating-animation.jsx-404944366{-webkit-animation-play-state:running;animation-play-state:running;}"]),c("svg",{width:S,height:S,viewBox:"0 0 10 10",fill:"none",xmlns:"http://www.w3.org/2000/svg","data-update-toggle":!0,className:"jsx-404944366 "+(l()(E,"refresh-icon",{"updating-animation":R})||"")},c("path",{d:"M9.63359 0.816406L8.61797 1.83203C7.73906 0.953125 6.52812 0.40625 5.2 0.40625C2.60234 0.40625 0.473437 2.45703 0.35625 5.01562C0.336719 5.15234 0.453906 5.25 0.590625 5.25H1.1375C1.25469 5.25 1.35234 5.17188 1.37187 5.03516C1.48906 3.02344 3.14922 1.42188 5.2 1.42188C6.25469 1.42188 7.21172 1.85156 7.89531 2.55469L6.84062 3.60938C6.68437 3.76562 6.80156 4 6.99687 4H9.80937C9.92656 4 10.0437 3.90234 10.0437 3.76562V0.972656C10.0437 0.777344 9.78984 0.660156 9.63359 0.816406ZM9.78984 5.25H9.24297C9.12578 5.25 9.02812 5.34766 9.00859 5.48438C8.89141 7.49609 7.23125 9.07812 5.2 9.07812C4.12578 9.07812 3.16875 8.66797 2.48516 7.96484L3.53984 6.91016C3.69609 6.75391 3.57891 6.5 3.38359 6.5H0.590625C0.453906 6.5 0.35625 6.61719 0.35625 6.73438V9.54688C0.35625 9.74219 0.590625 9.85938 0.746875 9.70312L1.7625 8.6875C2.64141 9.56641 3.85234 10.0938 5.2 10.0938C7.77812 10.0938 9.90703 8.0625 10.0242 5.50391C10.0437 5.36719 9.92656 5.25 9.78984 5.25Z",fill:g,className:"jsx-404944366"})));d.defaultProps={color:"#555555",size:"10",classes:""};const v=d},"./node_modules/classnames/index.js":(y,h)=>{var a,m;/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(){"use strict";var _={}.hasOwnProperty,p="[native code]";function u(){for(var l=[],c=0;c<arguments.length;c++){var d=arguments[c];if(d){var v=typeof d;if(v==="string"||v==="number")l.push(d);else if(Array.isArray(d)){if(d.length){var R=u.apply(null,d);R&&l.push(R)}}else if(v==="object"){if(d.toString!==Object.prototype.toString&&!d.toString.toString().includes("[native code]")){l.push(d.toString());continue}for(var g in d)_.call(d,g)&&d[g]&&l.push(g)}}}return l.join(" ")}y.exports?(u.default=u,y.exports=u):(a=[],m=function(){return u}.apply(h,a),m!==void 0&&(y.exports=m))})()},"./node_modules/client-only/index.js":()=>{},"./node_modules/prop-types/factoryWithThrowingShims.js":(y,h,a)=>{"use strict";var m=a("./node_modules/prop-types/lib/ReactPropTypesSecret.js");function _(){}function p(){}p.resetWarningCache=_,y.exports=function(){function u(d,v,R,g,S,E){if(E!==m){var C=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw C.name="Invariant Violation",C}}u.isRequired=u;function l(){return u}var c={array:u,bigint:u,bool:u,func:u,number:u,object:u,string:u,symbol:u,any:u,arrayOf:l,element:u,elementType:u,instanceOf:l,node:u,objectOf:l,oneOf:l,oneOfType:l,shape:l,exact:l,checkPropTypes:p,resetWarningCache:_};return c.PropTypes=c,c}},"./node_modules/prop-types/index.js":(y,h,a)=>{if(!1)var m,_;else y.exports=a("./node_modules/prop-types/factoryWithThrowingShims.js")()},"./node_modules/prop-types/lib/ReactPropTypesSecret.js":y=>{"use strict";var h="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";y.exports=h},"./node_modules/styled-jsx/dist/index/index.js":(y,h,a)=>{var m=a("./node_modules/process/browser.js"),_=a("./node_modules/console-browserify/index.js");a("./node_modules/client-only/index.js");var p=a("./node_modules/next/dist/compiled/react/index.js");function u(s){return s&&typeof s=="object"&&"default"in s?s:{default:s}}var l=u(p);function c(s,n){for(var i=0;i<n.length;i++){var e=n[i];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(s,e.key,e)}}function d(s,n,i){return n&&c(s.prototype,n),i&&c(s,i),s}var v=typeof m<"u"&&m.env&&!0,R=function(s){return Object.prototype.toString.call(s)==="[object String]"},g=function(){function s(i){var e=i===void 0?{}:i,t=e.name,r=t===void 0?"stylesheet":t,o=e.optimizeForSpeed,f=o===void 0?v:o;S(R(r),"`name` must be a string"),this._name=r,this._deletedRulePlaceholder="#"+r+"-deleted-rule____{}",S(typeof f=="boolean","`optimizeForSpeed` must be a boolean"),this._optimizeForSpeed=f,this._serverSheet=void 0,this._tags=[],this._injected=!1,this._rulesCount=0;var w=typeof window<"u"&&document.querySelector('meta[property="csp-nonce"]');this._nonce=w?w.getAttribute("content"):null}var n=s.prototype;return n.setOptimizeForSpeed=function(e){S(typeof e=="boolean","`setOptimizeForSpeed` accepts a boolean"),S(this._rulesCount===0,"optimizeForSpeed cannot be when rules have already been inserted"),this.flush(),this._optimizeForSpeed=e,this.inject()},n.isOptimizeForSpeed=function(){return this._optimizeForSpeed},n.inject=function(){var e=this;if(S(!this._injected,"sheet already injected"),this._injected=!0,typeof window<"u"&&this._optimizeForSpeed){this._tags[0]=this.makeStyleTag(this._name),this._optimizeForSpeed="insertRule"in this.getSheet(),this._optimizeForSpeed||(v||_.warn("StyleSheet: optimizeForSpeed mode not supported falling back to standard mode."),this.flush(),this._injected=!0);return}this._serverSheet={cssRules:[],insertRule:function(t,r){return typeof r=="number"?e._serverSheet.cssRules[r]={cssText:t}:e._serverSheet.cssRules.push({cssText:t}),r},deleteRule:function(t){e._serverSheet.cssRules[t]=null}}},n.getSheetForTag=function(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]},n.getSheet=function(){return this.getSheetForTag(this._tags[this._tags.length-1])},n.insertRule=function(e,t){if(S(R(e),"`insertRule` accepts only strings"),typeof window>"u")return typeof t!="number"&&(t=this._serverSheet.cssRules.length),this._serverSheet.insertRule(e,t),this._rulesCount++;if(this._optimizeForSpeed){var r=this.getSheet();typeof t!="number"&&(t=r.cssRules.length);try{r.insertRule(e,t)}catch{return v||_.warn(`StyleSheet: illegal rule: 

`+e+`

See https://stackoverflow.com/q/20007992 for more info`),-1}}else{var o=this._tags[t];this._tags.push(this.makeStyleTag(this._name,e,o))}return this._rulesCount++},n.replaceRule=function(e,t){if(this._optimizeForSpeed||typeof window>"u"){var r=typeof window<"u"?this.getSheet():this._serverSheet;if(t.trim()||(t=this._deletedRulePlaceholder),!r.cssRules[e])return e;r.deleteRule(e);try{r.insertRule(t,e)}catch{v||_.warn(`StyleSheet: illegal rule: 

`+t+`

See https://stackoverflow.com/q/20007992 for more info`),r.insertRule(this._deletedRulePlaceholder,e)}}else{var o=this._tags[e];S(o,"old rule at index `"+e+"` not found"),o.textContent=t}return e},n.deleteRule=function(e){if(typeof window>"u"){this._serverSheet.deleteRule(e);return}if(this._optimizeForSpeed)this.replaceRule(e,"");else{var t=this._tags[e];S(t,"rule at index `"+e+"` not found"),t.parentNode.removeChild(t),this._tags[e]=null}},n.flush=function(){this._injected=!1,this._rulesCount=0,typeof window<"u"?(this._tags.forEach(function(e){return e&&e.parentNode.removeChild(e)}),this._tags=[]):this._serverSheet.cssRules=[]},n.cssRules=function(){var e=this;return typeof window>"u"?this._serverSheet.cssRules:this._tags.reduce(function(t,r){return r?t=t.concat(Array.prototype.map.call(e.getSheetForTag(r).cssRules,function(o){return o.cssText===e._deletedRulePlaceholder?null:o})):t.push(null),t},[])},n.makeStyleTag=function(e,t,r){t&&S(R(t),"makeStyleTag accepts only strings as second parameter");var o=document.createElement("style");this._nonce&&o.setAttribute("nonce",this._nonce),o.type="text/css",o.setAttribute("data-"+e,""),t&&o.appendChild(document.createTextNode(t));var f=document.head||document.getElementsByTagName("head")[0];return r?f.insertBefore(o,r):f.appendChild(o),o},d(s,[{key:"length",get:function(){return this._rulesCount}}]),s}();function S(s,n){if(!s)throw new Error("StyleSheet: "+n+".")}function E(s){for(var n=5381,i=s.length;i;)n=n*33^s.charCodeAt(--i);return n>>>0}var C=E,F=function(s){return s.replace(/\/style/gi,"\\/style")},j={};function T(s,n){if(!n)return"jsx-"+s;var i=String(n),e=s+i;return j[e]||(j[e]="jsx-"+C(s+"-"+i)),j[e]}function P(s,n){var i=/__jsx-style-dynamic-selector/g;typeof window>"u"&&(n=F(n));var e=s+n;return j[e]||(j[e]=n.replace(i,s)),j[e]}function D(s,n){return n===void 0&&(n={}),s.map(function(i){var e=i[0],t=i[1];return l.default.createElement("style",{id:"__"+e,key:"__"+e,nonce:n.nonce?n.nonce:void 0,dangerouslySetInnerHTML:{__html:t}})})}var I=function(){function s(i){var e=i===void 0?{}:i,t=e.styleSheet,r=t===void 0?null:t,o=e.optimizeForSpeed,f=o===void 0?!1:o;this._sheet=r||new g({name:"styled-jsx",optimizeForSpeed:f}),this._sheet.inject(),r&&typeof f=="boolean"&&(this._sheet.setOptimizeForSpeed(f),this._optimizeForSpeed=this._sheet.isOptimizeForSpeed()),this._fromServer=void 0,this._indices={},this._instancesCounts={}}var n=s.prototype;return n.add=function(e){var t=this;this._optimizeForSpeed===void 0&&(this._optimizeForSpeed=Array.isArray(e.children),this._sheet.setOptimizeForSpeed(this._optimizeForSpeed),this._optimizeForSpeed=this._sheet.isOptimizeForSpeed()),typeof window<"u"&&!this._fromServer&&(this._fromServer=this.selectFromServer(),this._instancesCounts=Object.keys(this._fromServer).reduce(function(O,W){return O[W]=0,O},{}));var r=this.getIdAndRules(e),o=r.styleId,f=r.rules;if(o in this._instancesCounts){this._instancesCounts[o]+=1;return}var w=f.map(function(O){return t._sheet.insertRule(O)}).filter(function(O){return O!==-1});this._indices[o]=w,this._instancesCounts[o]=1},n.remove=function(e){var t=this,r=this.getIdAndRules(e).styleId;if(U(r in this._instancesCounts,"styleId: `"+r+"` not found"),this._instancesCounts[r]-=1,this._instancesCounts[r]<1){var o=this._fromServer&&this._fromServer[r];o?(o.parentNode.removeChild(o),delete this._fromServer[r]):(this._indices[r].forEach(function(f){return t._sheet.deleteRule(f)}),delete this._indices[r]),delete this._instancesCounts[r]}},n.update=function(e,t){this.add(t),this.remove(e)},n.flush=function(){this._sheet.flush(),this._sheet.inject(),this._fromServer=void 0,this._indices={},this._instancesCounts={}},n.cssRules=function(){var e=this,t=this._fromServer?Object.keys(this._fromServer).map(function(o){return[o,e._fromServer[o]]}):[],r=this._sheet.cssRules();return t.concat(Object.keys(this._indices).map(function(o){return[o,e._indices[o].map(function(f){return r[f].cssText}).join(e._optimizeForSpeed?"":`
`)]}).filter(function(o){return!!o[1]}))},n.styles=function(e){return D(this.cssRules(),e)},n.getIdAndRules=function(e){var t=e.children,r=e.dynamic,o=e.id;if(r){var f=T(o,r);return{styleId:f,rules:Array.isArray(t)?t.map(function(w){return P(f,w)}):[P(f,t)]}}return{styleId:T(o),rules:Array.isArray(t)?t:[t]}},n.selectFromServer=function(){var e=Array.prototype.slice.call(document.querySelectorAll('[id^="__jsx-"]'));return e.reduce(function(t,r){var o=r.id.slice(2);return t[o]=r,t},{})},s}();function U(s,n){if(!s)throw new Error("StyleSheetRegistry: "+n+".")}var x=p.createContext(null);x.displayName="StyleSheetContext";function A(){return new I}function M(s){var n=s.registry,i=s.children,e=p.useContext(x),t=p.useState(function(){return e||n||A()}),r=t[0];return l.default.createElement(x.Provider,{value:r},i)}function b(){return p.useContext(x)}var N=l.default.useInsertionEffect||l.default.useLayoutEffect,z=typeof window<"u"?A():void 0;function L(s){var n=z||b();return n?typeof window>"u"?(n.add(s),null):(N(function(){return n.add(s),function(){n.remove(s)}},[s.id,String(s.dynamic)]),null):null}L.dynamic=function(s){return s.map(function(n){var i=n[0],e=n[1];return T(i,e)}).join(" ")},h.StyleRegistry=M,h.createStyleRegistry=A,h.style=L,h.useStyleRegistry=b},"./node_modules/styled-jsx/style.js":(y,h,a)=>{y.exports=a("./node_modules/styled-jsx/dist/index/index.js").style}}]);
