(globalThis.webpackChunkfirecracker=globalThis.webpackChunkfirecracker||[]).push([[6929,2384,3437,7527,1073,3986],{"./components/VerticalBarChartWithAxis/BarChartKey.stories.js":(y,p,l)=>{"use strict";l.r(p),l.d(p,{BarChartKeyExample:()=>_,__namedExportsOrder:()=>f,default:()=>u});var S=l("./node_modules/next/dist/compiled/react/index.js"),c=l("./components/VerticalBarChartWithAxis/BarChartKey.js"),v=S.createElement;const u={component:c.default,title:"Global Components/Vertical Bar Charts/Vertical Bar Chart With Axis/ Bar Chart Key"},a={colors:["#004904","#05710F","#2EA835","#B5F6BE","#BCBCBC","#FFC695","#F96419","#DF5209","#973600"]},_=()=>v(c.default,{colors:a.colors,blockHeight:"10",individualBlockWidth:"15",scaleMin:"-10",scaleMax:"+10",title:"Difference from national average",unitOfMeasurementText:"percentage points"});_.displayName="BarChartKeyExample";const f=["BarChartKeyExample"]},"./components/VerticalBarChartWithAxis/BarChartKey.js":(y,p,l)=>{"use strict";l.r(p),l.d(p,{default:()=>g});var S=l("./node_modules/styled-jsx/style.js"),c=l.n(S),v=l("./node_modules/next/dist/compiled/react/index.js"),u=l("./node_modules/prop-types/index.js"),a=l.n(u),_=l("./node_modules/classnames/index.js"),f=l.n(_),C=l("./node_modules/react-i18next/dist/es/index.js"),h=v.createElement;const j=({t:w,blockHeight:m,blockWidth:R,className:x,colors:O,title:B,scaleMax:z,scaleMin:D,unitOfMeasurementText:M})=>{if(!O)return null;const F=O.map(b=>h("span",{className:"bck-color-block",style:{backgroundColor:b},key:b})),T=O.length,E=T*parseInt(R,10)+T;return h(v.Fragment,null,h(c(),{id:"2255312324",dynamic:[m,R,E]},[`.bck-color-block{display:inline-block;height:${m}px;width:${R}px;margin-right:1px;}`,`.bck-color-blocks{max-width:${E}px;}`]),h("div",{className:c().dynamic([["2255312324",[m,R,E]]])+" "+(f()("bar-chart-key founders-mono f2 fw4",x)||"")},B&&h("div",{className:c().dynamic([["2255312324",[m,R,E]]])+" bck-title mb1"},w(B)),h("div",{className:c().dynamic([["2255312324",[m,R,E]]])+" bck-color-blocks"},F,z&&D&&h("div",{className:c().dynamic([["2255312324",[m,R,E]]])+" bck-scale-text df justify-between"},h("div",{className:c().dynamic([["2255312324",[m,R,E]]])},D),h("div",{className:c().dynamic([["2255312324",[m,R,E]]])},"0"),h("div",{className:c().dynamic([["2255312324",[m,R,E]]])},z))),M&&h("div",{className:c().dynamic([["2255312324",[m,R,E]]])+" bck-units"},M)))};j.propTypes={blockHeight:a().oneOfType([a().string,a().number]),blockWidth:a().oneOfType([a().string,a().number]),className:a().string,colors:a().arrayOf(a().string),title:a().string,scaleMax:a().string,scaleMin:a().string,unitOfMeasurementText:a().string},j.defaultProps={blockHeight:"10",blockWidth:"15",className:null,colors:null,title:null,scaleMax:null,scaleMin:null,unitOfMeasurementText:null};const g=(0,C.withTranslation)()(j)},"./node_modules/classnames/index.js":(y,p)=>{var l,S;/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(){"use strict";var c={}.hasOwnProperty,v="[native code]";function u(){for(var a=[],_=0;_<arguments.length;_++){var f=arguments[_];if(f){var C=typeof f;if(C==="string"||C==="number")a.push(f);else if(Array.isArray(f)){if(f.length){var h=u.apply(null,f);h&&a.push(h)}}else if(C==="object"){if(f.toString!==Object.prototype.toString&&!f.toString.toString().includes("[native code]")){a.push(f.toString());continue}for(var j in f)c.call(f,j)&&f[j]&&a.push(j)}}}return a.join(" ")}y.exports?(u.default=u,y.exports=u):(l=[],S=function(){return u}.apply(p,l),S!==void 0&&(y.exports=S))})()},"./node_modules/client-only/index.js":()=>{},"./node_modules/prop-types/factoryWithThrowingShims.js":(y,p,l)=>{"use strict";var S=l("./node_modules/prop-types/lib/ReactPropTypesSecret.js");function c(){}function v(){}v.resetWarningCache=c,y.exports=function(){function u(f,C,h,j,g,w){if(w!==S){var m=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw m.name="Invariant Violation",m}}u.isRequired=u;function a(){return u}var _={array:u,bigint:u,bool:u,func:u,number:u,object:u,string:u,symbol:u,any:u,arrayOf:a,element:u,elementType:u,instanceOf:a,node:u,objectOf:a,oneOf:a,oneOfType:a,shape:a,exact:a,checkPropTypes:v,resetWarningCache:c};return _.PropTypes=_,_}},"./node_modules/prop-types/index.js":(y,p,l)=>{if(!1)var S,c;else y.exports=l("./node_modules/prop-types/factoryWithThrowingShims.js")()},"./node_modules/prop-types/lib/ReactPropTypesSecret.js":y=>{"use strict";var p="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";y.exports=p},"./node_modules/styled-jsx/dist/index/index.js":(y,p,l)=>{var S=l("./node_modules/process/browser.js"),c=l("./node_modules/console-browserify/index.js");l("./node_modules/client-only/index.js");var v=l("./node_modules/next/dist/compiled/react/index.js");function u(s){return s&&typeof s=="object"&&"default"in s?s:{default:s}}var a=u(v);function _(s,n){for(var r=0;r<n.length;r++){var e=n[r];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(s,e.key,e)}}function f(s,n,r){return n&&_(s.prototype,n),r&&_(s,r),s}var C=typeof S<"u"&&S.env&&!0,h=function(s){return Object.prototype.toString.call(s)==="[object String]"},j=function(){function s(r){var e=r===void 0?{}:r,t=e.name,i=t===void 0?"stylesheet":t,o=e.optimizeForSpeed,d=o===void 0?C:o;g(h(i),"`name` must be a string"),this._name=i,this._deletedRulePlaceholder="#"+i+"-deleted-rule____{}",g(typeof d=="boolean","`optimizeForSpeed` must be a boolean"),this._optimizeForSpeed=d,this._serverSheet=void 0,this._tags=[],this._injected=!1,this._rulesCount=0;var A=typeof window<"u"&&document.querySelector('meta[property="csp-nonce"]');this._nonce=A?A.getAttribute("content"):null}var n=s.prototype;return n.setOptimizeForSpeed=function(e){g(typeof e=="boolean","`setOptimizeForSpeed` accepts a boolean"),g(this._rulesCount===0,"optimizeForSpeed cannot be when rules have already been inserted"),this.flush(),this._optimizeForSpeed=e,this.inject()},n.isOptimizeForSpeed=function(){return this._optimizeForSpeed},n.inject=function(){var e=this;if(g(!this._injected,"sheet already injected"),this._injected=!0,typeof window<"u"&&this._optimizeForSpeed){this._tags[0]=this.makeStyleTag(this._name),this._optimizeForSpeed="insertRule"in this.getSheet(),this._optimizeForSpeed||(C||c.warn("StyleSheet: optimizeForSpeed mode not supported falling back to standard mode."),this.flush(),this._injected=!0);return}this._serverSheet={cssRules:[],insertRule:function(t,i){return typeof i=="number"?e._serverSheet.cssRules[i]={cssText:t}:e._serverSheet.cssRules.push({cssText:t}),i},deleteRule:function(t){e._serverSheet.cssRules[t]=null}}},n.getSheetForTag=function(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]},n.getSheet=function(){return this.getSheetForTag(this._tags[this._tags.length-1])},n.insertRule=function(e,t){if(g(h(e),"`insertRule` accepts only strings"),typeof window>"u")return typeof t!="number"&&(t=this._serverSheet.cssRules.length),this._serverSheet.insertRule(e,t),this._rulesCount++;if(this._optimizeForSpeed){var i=this.getSheet();typeof t!="number"&&(t=i.cssRules.length);try{i.insertRule(e,t)}catch{return C||c.warn(`StyleSheet: illegal rule: 

`+e+`

See https://stackoverflow.com/q/20007992 for more info`),-1}}else{var o=this._tags[t];this._tags.push(this.makeStyleTag(this._name,e,o))}return this._rulesCount++},n.replaceRule=function(e,t){if(this._optimizeForSpeed||typeof window>"u"){var i=typeof window<"u"?this.getSheet():this._serverSheet;if(t.trim()||(t=this._deletedRulePlaceholder),!i.cssRules[e])return e;i.deleteRule(e);try{i.insertRule(t,e)}catch{C||c.warn(`StyleSheet: illegal rule: 

`+t+`

See https://stackoverflow.com/q/20007992 for more info`),i.insertRule(this._deletedRulePlaceholder,e)}}else{var o=this._tags[e];g(o,"old rule at index `"+e+"` not found"),o.textContent=t}return e},n.deleteRule=function(e){if(typeof window>"u"){this._serverSheet.deleteRule(e);return}if(this._optimizeForSpeed)this.replaceRule(e,"");else{var t=this._tags[e];g(t,"rule at index `"+e+"` not found"),t.parentNode.removeChild(t),this._tags[e]=null}},n.flush=function(){this._injected=!1,this._rulesCount=0,typeof window<"u"?(this._tags.forEach(function(e){return e&&e.parentNode.removeChild(e)}),this._tags=[]):this._serverSheet.cssRules=[]},n.cssRules=function(){var e=this;return typeof window>"u"?this._serverSheet.cssRules:this._tags.reduce(function(t,i){return i?t=t.concat(Array.prototype.map.call(e.getSheetForTag(i).cssRules,function(o){return o.cssText===e._deletedRulePlaceholder?null:o})):t.push(null),t},[])},n.makeStyleTag=function(e,t,i){t&&g(h(t),"makeStyleTag accepts only strings as second parameter");var o=document.createElement("style");this._nonce&&o.setAttribute("nonce",this._nonce),o.type="text/css",o.setAttribute("data-"+e,""),t&&o.appendChild(document.createTextNode(t));var d=document.head||document.getElementsByTagName("head")[0];return i?d.insertBefore(o,i):d.appendChild(o),o},f(s,[{key:"length",get:function(){return this._rulesCount}}]),s}();function g(s,n){if(!s)throw new Error("StyleSheet: "+n+".")}function w(s){for(var n=5381,r=s.length;r;)n=n*33^s.charCodeAt(--r);return n>>>0}var m=w,R=function(s){return s.replace(/\/style/gi,"\\/style")},x={};function O(s,n){if(!n)return"jsx-"+s;var r=String(n),e=s+r;return x[e]||(x[e]="jsx-"+m(s+"-"+r)),x[e]}function B(s,n){var r=/__jsx-style-dynamic-selector/g;typeof window>"u"&&(n=R(n));var e=s+n;return x[e]||(x[e]=n.replace(r,s)),x[e]}function z(s,n){return n===void 0&&(n={}),s.map(function(r){var e=r[0],t=r[1];return a.default.createElement("style",{id:"__"+e,key:"__"+e,nonce:n.nonce?n.nonce:void 0,dangerouslySetInnerHTML:{__html:t}})})}var D=function(){function s(r){var e=r===void 0?{}:r,t=e.styleSheet,i=t===void 0?null:t,o=e.optimizeForSpeed,d=o===void 0?!1:o;this._sheet=i||new j({name:"styled-jsx",optimizeForSpeed:d}),this._sheet.inject(),i&&typeof d=="boolean"&&(this._sheet.setOptimizeForSpeed(d),this._optimizeForSpeed=this._sheet.isOptimizeForSpeed()),this._fromServer=void 0,this._indices={},this._instancesCounts={}}var n=s.prototype;return n.add=function(e){var t=this;this._optimizeForSpeed===void 0&&(this._optimizeForSpeed=Array.isArray(e.children),this._sheet.setOptimizeForSpeed(this._optimizeForSpeed),this._optimizeForSpeed=this._sheet.isOptimizeForSpeed()),typeof window<"u"&&!this._fromServer&&(this._fromServer=this.selectFromServer(),this._instancesCounts=Object.keys(this._fromServer).reduce(function(P,L){return P[L]=0,P},{}));var i=this.getIdAndRules(e),o=i.styleId,d=i.rules;if(o in this._instancesCounts){this._instancesCounts[o]+=1;return}var A=d.map(function(P){return t._sheet.insertRule(P)}).filter(function(P){return P!==-1});this._indices[o]=A,this._instancesCounts[o]=1},n.remove=function(e){var t=this,i=this.getIdAndRules(e).styleId;if(M(i in this._instancesCounts,"styleId: `"+i+"` not found"),this._instancesCounts[i]-=1,this._instancesCounts[i]<1){var o=this._fromServer&&this._fromServer[i];o?(o.parentNode.removeChild(o),delete this._fromServer[i]):(this._indices[i].forEach(function(d){return t._sheet.deleteRule(d)}),delete this._indices[i]),delete this._instancesCounts[i]}},n.update=function(e,t){this.add(t),this.remove(e)},n.flush=function(){this._sheet.flush(),this._sheet.inject(),this._fromServer=void 0,this._indices={},this._instancesCounts={}},n.cssRules=function(){var e=this,t=this._fromServer?Object.keys(this._fromServer).map(function(o){return[o,e._fromServer[o]]}):[],i=this._sheet.cssRules();return t.concat(Object.keys(this._indices).map(function(o){return[o,e._indices[o].map(function(d){return i[d].cssText}).join(e._optimizeForSpeed?"":`
`)]}).filter(function(o){return!!o[1]}))},n.styles=function(e){return z(this.cssRules(),e)},n.getIdAndRules=function(e){var t=e.children,i=e.dynamic,o=e.id;if(i){var d=O(o,i);return{styleId:d,rules:Array.isArray(t)?t.map(function(A){return B(d,A)}):[B(d,t)]}}return{styleId:O(o),rules:Array.isArray(t)?t:[t]}},n.selectFromServer=function(){var e=Array.prototype.slice.call(document.querySelectorAll('[id^="__jsx-"]'));return e.reduce(function(t,i){var o=i.id.slice(2);return t[o]=i,t},{})},s}();function M(s,n){if(!s)throw new Error("StyleSheetRegistry: "+n+".")}var F=v.createContext(null);F.displayName="StyleSheetContext";function T(){return new D}function E(s){var n=s.registry,r=s.children,e=v.useContext(F),t=v.useState(function(){return e||n||T()}),i=t[0];return a.default.createElement(F.Provider,{value:i},r)}function b(){return v.useContext(F)}var K=a.default.useInsertionEffect||a.default.useLayoutEffect,I=typeof window<"u"?T():void 0;function N(s){var n=I||b();return n?typeof window>"u"?(n.add(s),null):(K(function(){return n.add(s),function(){n.remove(s)}},[s.id,String(s.dynamic)]),null):null}N.dynamic=function(s){return s.map(function(n){var r=n[0],e=n[1];return O(r,e)}).join(" ")},p.StyleRegistry=E,p.createStyleRegistry=T,p.style=N,p.useStyleRegistry=b},"./node_modules/styled-jsx/style.js":(y,p,l)=>{y.exports=l("./node_modules/styled-jsx/dist/index/index.js").style}}]);
