(globalThis.webpackChunkfirecracker=globalThis.webpackChunkfirecracker||[]).push([[4250,2384,3437,3598,6281,3919,2713,1587,6199,2921,4382,7527,1073,3986],{"./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js":(_,u,n)=>{"use strict";n.r(u),n.d(u,{default:()=>p});function y(c,d){if(c==null)return{};var a={},m=Object.keys(c),f,h;for(h=0;h<m.length;h++)f=m[h],!(d.indexOf(f)>=0)&&(a[f]=c[f]);return a}function p(c,d){if(c==null)return{};var a=y(c,d),m,f;if(Object.getOwnPropertySymbols){var h=Object.getOwnPropertySymbols(c);for(f=0;f<h.length;f++)m=h[f],!(d.indexOf(m)>=0)&&Object.prototype.propertyIsEnumerable.call(c,m)&&(a[m]=c[m])}return a}},"./components/Marquee/Modules/HeadlineTextModule.stories.js":(_,u,n)=>{"use strict";n.r(u),n.d(u,{CountdownMarqueeModuleNew:()=>h,__namedExportsOrder:()=>S,default:()=>f});var y=n("./node_modules/styled-jsx/style.js"),p=n.n(y),c=n("./node_modules/next/dist/compiled/react/index.js"),d=n("./components/Marquee/Modules/HeadlineTextModule.js");const a=JSON.parse('{"type":"headlineAndText","title":"Headline Text","text":"Lorem ipsum dolor sit amet","link":"https://nbcnews.com"}');var m=c.createElement;const f={component:d.default,title:"Marquee/Headline Text Module"},h=()=>m("div",{className:"jsx-836778476"},m(p(),{id:"836778476"},[".container.jsx-836778476{width:140px;height:90px;border:solid 1px black;}"]),m("div",{className:"jsx-836778476 container"},m(d.default,{slotInfo:a})),"NOTE: black border is to show boundaries of element on a white background, They are not present in actual component");h.displayName="CountdownMarqueeModuleNew";const S=["CountdownMarqueeModuleNew"]},"./components/Link.js":(_,u,n)=>{"use strict";n.r(u),n.d(u,{default:()=>C});var y=n("./node_modules/@babel/runtime/helpers/esm/extends.js"),p=n("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),c=n("./node_modules/next/dist/compiled/react/index.js"),d=n("./node_modules/prop-types/index.js"),a=n.n(d),m=n("./node_modules/classnames/index.js"),f=n.n(m),h=n("./helpers/isExternalUrl.js"),S=n("./components/providers/EmbedContext.js"),j=n("./components/providers/BrandContext.js");const O=b=>b?!/^https?:\/\/|^\/\/|^mailto:/i.test(b):!1;var E=n("./helpers/isTelemundo.js");const w=["linkText","children","accessibleOnly","href","className","data-icid"];var x=c.createElement;const R=b=>{let{linkText:z,children:I,accessibleOnly:A,href:T,className:W,"data-icid":L}=b,P=(0,p.default)(b,w);const{isEmbed:D,isPartner:F,isInSpanish:i,useLinkTarget:s}=(0,c.useContext)(S.default),r=(0,c.useContext)(j.default),e=f()({"show-on-tab":A},W),t=D||F&&i,o=F&&!i;(0,h.default)(T)&&Object.assign(P,{rel:"nofollow"}),s&&P?.target||(t&&Object.assign(P,{target:"_parent"}),o&&Object.assign(P,{target:"_blank"}));const l=(0,E.default)(r)&&O(T)?`https://www.nbcnews.com${T}`:T,v={[F?"data-cid":"data-icid"]:L};return x("a",(0,y.default)({},P,{href:l,className:e},v),z||I)};R.displayName="Link",R.propTypes={href:a().string,linkText:a().string,className:a().string,accessibleOnly:a().bool},R.defaultProps={href:null,linkText:null,className:null,accessibleOnly:!1};const C=R},"./components/Marquee/Modules/HeadlineTextModule.js":(_,u,n)=>{"use strict";n.r(u),n.d(u,{default:()=>j});var y=n("./node_modules/styled-jsx/style.js"),p=n.n(y),c=n("./node_modules/next/dist/compiled/react/index.js"),d=n("./node_modules/prop-types/index.js"),a=n.n(d),m=n("./components/Link.js"),f=n("./components/icons/ChevronThinRight.js"),h=c.createElement;const S=({slotInfo:g,icidString:O})=>{const{title:E,text:w,link:x,showChevron:R=!0,buttonText:C}=g;return h(c.Fragment,null,h(p(),{id:"2508688525"},[".htm-title.jsx-2508688525{line-height:1rem;}",".title.jsx-2508688525 svg.jsx-2508688525{margin:4px -10px 0 4px;}",".cta-button.jsx-2508688525{border-radius:2px;padding:0 16px 0 16px;line-height:16px;background-color:#102039;}",".htm-link{-webkit-text-decoration:none;text-decoration:none;width:140px;height:90px;}",".htm-link:hover .htm-title{-webkit-text-decoration:underline;text-decoration:underline;-webkit-text-decoration-thickness:1.5px;text-decoration-thickness:1.5px;}",".htm-link .chevron{margin-top:2px;height:10px;width:12px;}"]),x&&h(m.default,{href:x,className:"htm-link df flex-column justify-center items-center ph2","data-icid":O},h("div",{className:"jsx-2508688525 df flex-row justify-center items-center mb1"},h("p",{className:"jsx-2508688525 clear-blue htm-title oswald fw6 f4 ma0 tc ttu items-center"},E),R&&h(f.default,{className:"chevron"})),h("p",{className:"jsx-2508688525 text tc ttu gray-100 oswald f3 fw4 mt0 mb1 lh-none"},w),C&&h("div",{className:"jsx-2508688525"},h("div",{type:"button",className:"jsx-2508688525 cta-button white f2 oswald fw4 ttu b-none br-50"},C))),!x&&h("div",{className:"jsx-2508688525 ph2 w-100"},h("p",{className:"jsx-2508688525 clear-blue htm-title oswald fw6 f4 mt0 mb1 tc ttu items-center "},E),h("p",{className:"jsx-2508688525 tc gray-100 oswald f3 fw4 mt0 mb0 lh-none"}," ",w," ")))};S.propTypes={slotInfo:a().shape({text:a().string,title:a().string,link:a().string,showChevron:a().bool,buttonText:a().string}).isRequired};const j=S},"./components/icons/ChevronThinRight.js":(_,u,n)=>{"use strict";n.r(u),n.d(u,{default:()=>d});var y=n("./node_modules/next/dist/compiled/react/index.js"),p=y.createElement;const c=({className:a})=>p("svg",{className:`chevron-thin-right ${a}`,width:"6",height:"10",viewBox:"0 0 13 22",fill:"none",xmlns:"http://www.w3.org/2000/svg"},p("path",{fill:"currentColor",fillRule:"evenodd",clipRule:"evenodd",d:"M9.85519 10.8005L0.571793 1.70003L2.00001 0.299957L12.7116 10.8005L2.00001 21.301L0.571794 19.901L9.85519 10.8005Z"}));c.displayName="ChevronThinRight";const d=c},"./components/providers/BrandContext.js":(_,u,n)=>{"use strict";n.r(u),n.d(u,{default:()=>p});var y=n("./node_modules/next/dist/compiled/react/index.js");const p=y.createContext("news")},"./components/providers/EmbedContext.js":(_,u,n)=>{"use strict";n.r(u),n.d(u,{default:()=>p});var y=n("./node_modules/next/dist/compiled/react/index.js");const p=y.createContext({isEmbed:!1,isPartner:!1,isInSpanish:!1,useLinkTarget:!1})},"./helpers/isExternalUrl.js":(_,u,n)=>{"use strict";n.r(u),n.d(u,{default:()=>p});const p=c=>c?!/(^[#/])|((nbcnews|today|msnbc)\.com)/.test(c):!1},"./helpers/isTelemundo.js":(_,u,n)=>{"use strict";n.r(u),n.d(u,{default:()=>c});var y=n("./helpers/constants.js");const c=d=>d===y.BRANDS.TELEMUNDO},"./node_modules/classnames/index.js":(_,u)=>{var n,y;/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(){"use strict";var p={}.hasOwnProperty,c="[native code]";function d(){for(var a=[],m=0;m<arguments.length;m++){var f=arguments[m];if(f){var h=typeof f;if(h==="string"||h==="number")a.push(f);else if(Array.isArray(f)){if(f.length){var S=d.apply(null,f);S&&a.push(S)}}else if(h==="object"){if(f.toString!==Object.prototype.toString&&!f.toString.toString().includes("[native code]")){a.push(f.toString());continue}for(var j in f)p.call(f,j)&&f[j]&&a.push(j)}}}return a.join(" ")}_.exports?(d.default=d,_.exports=d):(n=[],y=function(){return d}.apply(u,n),y!==void 0&&(_.exports=y))})()},"./node_modules/client-only/index.js":()=>{},"./node_modules/prop-types/factoryWithThrowingShims.js":(_,u,n)=>{"use strict";var y=n("./node_modules/prop-types/lib/ReactPropTypesSecret.js");function p(){}function c(){}c.resetWarningCache=p,_.exports=function(){function d(f,h,S,j,g,O){if(O!==y){var E=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw E.name="Invariant Violation",E}}d.isRequired=d;function a(){return d}var m={array:d,bigint:d,bool:d,func:d,number:d,object:d,string:d,symbol:d,any:d,arrayOf:a,element:d,elementType:d,instanceOf:a,node:d,objectOf:a,oneOf:a,oneOfType:a,shape:a,exact:a,checkPropTypes:c,resetWarningCache:p};return m.PropTypes=m,m}},"./node_modules/prop-types/index.js":(_,u,n)=>{if(!1)var y,p;else _.exports=n("./node_modules/prop-types/factoryWithThrowingShims.js")()},"./node_modules/prop-types/lib/ReactPropTypesSecret.js":_=>{"use strict";var u="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";_.exports=u},"./node_modules/styled-jsx/dist/index/index.js":(_,u,n)=>{var y=n("./node_modules/process/browser.js"),p=n("./node_modules/console-browserify/index.js");n("./node_modules/client-only/index.js");var c=n("./node_modules/next/dist/compiled/react/index.js");function d(i){return i&&typeof i=="object"&&"default"in i?i:{default:i}}var a=d(c);function m(i,s){for(var r=0;r<s.length;r++){var e=s[r];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(i,e.key,e)}}function f(i,s,r){return s&&m(i.prototype,s),r&&m(i,r),i}var h=typeof y<"u"&&y.env&&!0,S=function(i){return Object.prototype.toString.call(i)==="[object String]"},j=function(){function i(r){var e=r===void 0?{}:r,t=e.name,o=t===void 0?"stylesheet":t,l=e.optimizeForSpeed,v=l===void 0?h:l;g(S(o),"`name` must be a string"),this._name=o,this._deletedRulePlaceholder="#"+o+"-deleted-rule____{}",g(typeof v=="boolean","`optimizeForSpeed` must be a boolean"),this._optimizeForSpeed=v,this._serverSheet=void 0,this._tags=[],this._injected=!1,this._rulesCount=0;var M=typeof window<"u"&&document.querySelector('meta[property="csp-nonce"]');this._nonce=M?M.getAttribute("content"):null}var s=i.prototype;return s.setOptimizeForSpeed=function(e){g(typeof e=="boolean","`setOptimizeForSpeed` accepts a boolean"),g(this._rulesCount===0,"optimizeForSpeed cannot be when rules have already been inserted"),this.flush(),this._optimizeForSpeed=e,this.inject()},s.isOptimizeForSpeed=function(){return this._optimizeForSpeed},s.inject=function(){var e=this;if(g(!this._injected,"sheet already injected"),this._injected=!0,typeof window<"u"&&this._optimizeForSpeed){this._tags[0]=this.makeStyleTag(this._name),this._optimizeForSpeed="insertRule"in this.getSheet(),this._optimizeForSpeed||(h||p.warn("StyleSheet: optimizeForSpeed mode not supported falling back to standard mode."),this.flush(),this._injected=!0);return}this._serverSheet={cssRules:[],insertRule:function(t,o){return typeof o=="number"?e._serverSheet.cssRules[o]={cssText:t}:e._serverSheet.cssRules.push({cssText:t}),o},deleteRule:function(t){e._serverSheet.cssRules[t]=null}}},s.getSheetForTag=function(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]},s.getSheet=function(){return this.getSheetForTag(this._tags[this._tags.length-1])},s.insertRule=function(e,t){if(g(S(e),"`insertRule` accepts only strings"),typeof window>"u")return typeof t!="number"&&(t=this._serverSheet.cssRules.length),this._serverSheet.insertRule(e,t),this._rulesCount++;if(this._optimizeForSpeed){var o=this.getSheet();typeof t!="number"&&(t=o.cssRules.length);try{o.insertRule(e,t)}catch{return h||p.warn(`StyleSheet: illegal rule: 

`+e+`

See https://stackoverflow.com/q/20007992 for more info`),-1}}else{var l=this._tags[t];this._tags.push(this.makeStyleTag(this._name,e,l))}return this._rulesCount++},s.replaceRule=function(e,t){if(this._optimizeForSpeed||typeof window>"u"){var o=typeof window<"u"?this.getSheet():this._serverSheet;if(t.trim()||(t=this._deletedRulePlaceholder),!o.cssRules[e])return e;o.deleteRule(e);try{o.insertRule(t,e)}catch{h||p.warn(`StyleSheet: illegal rule: 

`+t+`

See https://stackoverflow.com/q/20007992 for more info`),o.insertRule(this._deletedRulePlaceholder,e)}}else{var l=this._tags[e];g(l,"old rule at index `"+e+"` not found"),l.textContent=t}return e},s.deleteRule=function(e){if(typeof window>"u"){this._serverSheet.deleteRule(e);return}if(this._optimizeForSpeed)this.replaceRule(e,"");else{var t=this._tags[e];g(t,"rule at index `"+e+"` not found"),t.parentNode.removeChild(t),this._tags[e]=null}},s.flush=function(){this._injected=!1,this._rulesCount=0,typeof window<"u"?(this._tags.forEach(function(e){return e&&e.parentNode.removeChild(e)}),this._tags=[]):this._serverSheet.cssRules=[]},s.cssRules=function(){var e=this;return typeof window>"u"?this._serverSheet.cssRules:this._tags.reduce(function(t,o){return o?t=t.concat(Array.prototype.map.call(e.getSheetForTag(o).cssRules,function(l){return l.cssText===e._deletedRulePlaceholder?null:l})):t.push(null),t},[])},s.makeStyleTag=function(e,t,o){t&&g(S(t),"makeStyleTag accepts only strings as second parameter");var l=document.createElement("style");this._nonce&&l.setAttribute("nonce",this._nonce),l.type="text/css",l.setAttribute("data-"+e,""),t&&l.appendChild(document.createTextNode(t));var v=document.head||document.getElementsByTagName("head")[0];return o?v.insertBefore(l,o):v.appendChild(l),l},f(i,[{key:"length",get:function(){return this._rulesCount}}]),i}();function g(i,s){if(!i)throw new Error("StyleSheet: "+s+".")}function O(i){for(var s=5381,r=i.length;r;)s=s*33^i.charCodeAt(--r);return s>>>0}var E=O,w=function(i){return i.replace(/\/style/gi,"\\/style")},x={};function R(i,s){if(!s)return"jsx-"+i;var r=String(s),e=i+r;return x[e]||(x[e]="jsx-"+E(i+"-"+r)),x[e]}function C(i,s){var r=/__jsx-style-dynamic-selector/g;typeof window>"u"&&(s=w(s));var e=i+s;return x[e]||(x[e]=s.replace(r,i)),x[e]}function b(i,s){return s===void 0&&(s={}),i.map(function(r){var e=r[0],t=r[1];return a.default.createElement("style",{id:"__"+e,key:"__"+e,nonce:s.nonce?s.nonce:void 0,dangerouslySetInnerHTML:{__html:t}})})}var z=function(){function i(r){var e=r===void 0?{}:r,t=e.styleSheet,o=t===void 0?null:t,l=e.optimizeForSpeed,v=l===void 0?!1:l;this._sheet=o||new j({name:"styled-jsx",optimizeForSpeed:v}),this._sheet.inject(),o&&typeof v=="boolean"&&(this._sheet.setOptimizeForSpeed(v),this._optimizeForSpeed=this._sheet.isOptimizeForSpeed()),this._fromServer=void 0,this._indices={},this._instancesCounts={}}var s=i.prototype;return s.add=function(e){var t=this;this._optimizeForSpeed===void 0&&(this._optimizeForSpeed=Array.isArray(e.children),this._sheet.setOptimizeForSpeed(this._optimizeForSpeed),this._optimizeForSpeed=this._sheet.isOptimizeForSpeed()),typeof window<"u"&&!this._fromServer&&(this._fromServer=this.selectFromServer(),this._instancesCounts=Object.keys(this._fromServer).reduce(function(N,U){return N[U]=0,N},{}));var o=this.getIdAndRules(e),l=o.styleId,v=o.rules;if(l in this._instancesCounts){this._instancesCounts[l]+=1;return}var M=v.map(function(N){return t._sheet.insertRule(N)}).filter(function(N){return N!==-1});this._indices[l]=M,this._instancesCounts[l]=1},s.remove=function(e){var t=this,o=this.getIdAndRules(e).styleId;if(I(o in this._instancesCounts,"styleId: `"+o+"` not found"),this._instancesCounts[o]-=1,this._instancesCounts[o]<1){var l=this._fromServer&&this._fromServer[o];l?(l.parentNode.removeChild(l),delete this._fromServer[o]):(this._indices[o].forEach(function(v){return t._sheet.deleteRule(v)}),delete this._indices[o]),delete this._instancesCounts[o]}},s.update=function(e,t){this.add(t),this.remove(e)},s.flush=function(){this._sheet.flush(),this._sheet.inject(),this._fromServer=void 0,this._indices={},this._instancesCounts={}},s.cssRules=function(){var e=this,t=this._fromServer?Object.keys(this._fromServer).map(function(l){return[l,e._fromServer[l]]}):[],o=this._sheet.cssRules();return t.concat(Object.keys(this._indices).map(function(l){return[l,e._indices[l].map(function(v){return o[v].cssText}).join(e._optimizeForSpeed?"":`
`)]}).filter(function(l){return!!l[1]}))},s.styles=function(e){return b(this.cssRules(),e)},s.getIdAndRules=function(e){var t=e.children,o=e.dynamic,l=e.id;if(o){var v=R(l,o);return{styleId:v,rules:Array.isArray(t)?t.map(function(M){return C(v,M)}):[C(v,t)]}}return{styleId:R(l),rules:Array.isArray(t)?t:[t]}},s.selectFromServer=function(){var e=Array.prototype.slice.call(document.querySelectorAll('[id^="__jsx-"]'));return e.reduce(function(t,o){var l=o.id.slice(2);return t[l]=o,t},{})},i}();function I(i,s){if(!i)throw new Error("StyleSheetRegistry: "+s+".")}var A=c.createContext(null);A.displayName="StyleSheetContext";function T(){return new z}function W(i){var s=i.registry,r=i.children,e=c.useContext(A),t=c.useState(function(){return e||s||T()}),o=t[0];return a.default.createElement(A.Provider,{value:o},r)}function L(){return c.useContext(A)}var P=a.default.useInsertionEffect||a.default.useLayoutEffect,D=typeof window<"u"?T():void 0;function F(i){var s=D||L();return s?typeof window>"u"?(s.add(i),null):(P(function(){return s.add(i),function(){s.remove(i)}},[i.id,String(i.dynamic)]),null):null}F.dynamic=function(i){return i.map(function(s){var r=s[0],e=s[1];return R(r,e)}).join(" ")},u.StyleRegistry=W,u.createStyleRegistry=T,u.style=F,u.useStyleRegistry=L},"./node_modules/styled-jsx/style.js":(_,u,n)=>{_.exports=n("./node_modules/styled-jsx/dist/index/index.js").style}}]);
