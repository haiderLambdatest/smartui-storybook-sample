(globalThis.webpackChunkfirecracker=globalThis.webpackChunkfirecracker||[]).push([[266,5452,3071,690,8309,4976,1808,9427,7046],{"./components/stories/CandidateTile.stories.js":(y,p,u)=>{"use strict";u.r(p),u.d(p,{CandidateTile:()=>a,__namedExportsOrder:()=>l,default:()=>d});var S=u("./node_modules/next/dist/compiled/react/index.js"),m=u("./components/CandidateTile.js"),f=S.createElement;const d={component:m.default,title:"Global Components/Candidates/Candidate Tile",argTypes:{bgColor:{options:{default:"595959","0471E6":"0471E6",DE3535:"DE3535",F96419:"F96419","645FAA":"645FAA"},control:{type:"select"}},className:{control:{type:"text"}}},args:{bgColor:"595959"}},a=h=>f(m.default,h);a.displayName="CandidateTile",a.args={party:"Dem",className:null};const l=["CandidateTile"]},"./components/CandidateTile.js":(y,p,u)=>{"use strict";u.r(p),u.d(p,{default:()=>O});var S=u("./node_modules/styled-jsx/style.js"),m=u.n(S),f=u("./node_modules/next/dist/compiled/react/index.js"),d=u("./node_modules/prop-types/index.js"),a=u.n(d),l=u("./node_modules/classnames/index.js"),h=u.n(l),_=f.createElement;const g=({party:v,bgColor:T,fontStyle:E,className:P,lineHeight:R,width:F,height:b,tileRadius:x})=>{const w=v&&v.charAt(0);return _(f.Fragment,null,_(m(),{id:"3553201318"},[".candidate-outline.jsx-3553201318{bottom:20px;left:42px;outline:1.5px solid #ffffff;}",".candidate-circle.jsx-3553201318{border-radius:50%;}"]),_("span",{style:{lineHeight:R,width:F,height:b,borderRadius:x},className:"jsx-3553201318 "+(h()(`tile f1 lh-none white ttu tc dib bg-${T}`,E,P)||"")},w))};g.propTypes={party:a().string,bgColor:a().string,fontStyle:a().string,className:a().string,lineHeight:a().string,width:a().string,height:a().string,tileRadius:a().string},g.defaultProps={party:"",bgColor:"595959",fontStyle:"founders-mono",className:null,lineHeight:"16px",width:"1rem",height:"1rem",tileRadius:"0"};const O=g},"./node_modules/classnames/index.js":(y,p)=>{var u,S;/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(){"use strict";var m={}.hasOwnProperty;function f(){for(var l="",h=0;h<arguments.length;h++){var _=arguments[h];_&&(l=a(l,d(_)))}return l}function d(l){if(typeof l=="string"||typeof l=="number")return l;if(typeof l!="object")return"";if(Array.isArray(l))return f.apply(null,l);if(l.toString!==Object.prototype.toString&&!l.toString.toString().includes("[native code]"))return l.toString();var h="";for(var _ in l)m.call(l,_)&&l[_]&&(h=a(h,_));return h}function a(l,h){return h?l?l+" "+h:l+h:l}y.exports?(f.default=f,y.exports=f):(u=[],S=function(){return f}.apply(p,u),S!==void 0&&(y.exports=S))})()},"./node_modules/client-only/index.js":()=>{},"./node_modules/prop-types/factoryWithThrowingShims.js":(y,p,u)=>{"use strict";var S=u("./node_modules/prop-types/lib/ReactPropTypesSecret.js");function m(){}function f(){}f.resetWarningCache=m,y.exports=function(){function d(h,_,g,O,v,T){if(T!==S){var E=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw E.name="Invariant Violation",E}}d.isRequired=d;function a(){return d}var l={array:d,bigint:d,bool:d,func:d,number:d,object:d,string:d,symbol:d,any:d,arrayOf:a,element:d,elementType:d,instanceOf:a,node:d,objectOf:a,oneOf:a,oneOfType:a,shape:a,exact:a,checkPropTypes:f,resetWarningCache:m};return l.PropTypes=l,l}},"./node_modules/prop-types/index.js":(y,p,u)=>{if(!1)var S,m;else y.exports=u("./node_modules/prop-types/factoryWithThrowingShims.js")()},"./node_modules/prop-types/lib/ReactPropTypesSecret.js":y=>{"use strict";var p="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";y.exports=p},"./node_modules/styled-jsx/dist/index/index.js":(y,p,u)=>{var S=u("./node_modules/process/browser.js"),m=u("./node_modules/console-browserify/index.js");u("./node_modules/client-only/index.js");var f=u("./node_modules/next/dist/compiled/react/index.js");function d(s){return s&&typeof s=="object"&&"default"in s?s:{default:s}}var a=d(f);function l(s,n){for(var r=0;r<n.length;r++){var e=n[r];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(s,e.key,e)}}function h(s,n,r){return n&&l(s.prototype,n),r&&l(s,r),s}var _=typeof S<"u"&&S.env&&!0,g=function(s){return Object.prototype.toString.call(s)==="[object String]"},O=function(){function s(r){var e=r===void 0?{}:r,t=e.name,i=t===void 0?"stylesheet":t,o=e.optimizeForSpeed,c=o===void 0?_:o;v(g(i),"`name` must be a string"),this._name=i,this._deletedRulePlaceholder="#"+i+"-deleted-rule____{}",v(typeof c=="boolean","`optimizeForSpeed` must be a boolean"),this._optimizeForSpeed=c,this._serverSheet=void 0,this._tags=[],this._injected=!1,this._rulesCount=0;var j=typeof window<"u"&&document.querySelector('meta[property="csp-nonce"]');this._nonce=j?j.getAttribute("content"):null}var n=s.prototype;return n.setOptimizeForSpeed=function(e){v(typeof e=="boolean","`setOptimizeForSpeed` accepts a boolean"),v(this._rulesCount===0,"optimizeForSpeed cannot be when rules have already been inserted"),this.flush(),this._optimizeForSpeed=e,this.inject()},n.isOptimizeForSpeed=function(){return this._optimizeForSpeed},n.inject=function(){var e=this;if(v(!this._injected,"sheet already injected"),this._injected=!0,typeof window<"u"&&this._optimizeForSpeed){this._tags[0]=this.makeStyleTag(this._name),this._optimizeForSpeed="insertRule"in this.getSheet(),this._optimizeForSpeed||(_||m.warn("StyleSheet: optimizeForSpeed mode not supported falling back to standard mode."),this.flush(),this._injected=!0);return}this._serverSheet={cssRules:[],insertRule:function(t,i){return typeof i=="number"?e._serverSheet.cssRules[i]={cssText:t}:e._serverSheet.cssRules.push({cssText:t}),i},deleteRule:function(t){e._serverSheet.cssRules[t]=null}}},n.getSheetForTag=function(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]},n.getSheet=function(){return this.getSheetForTag(this._tags[this._tags.length-1])},n.insertRule=function(e,t){if(v(g(e),"`insertRule` accepts only strings"),typeof window>"u")return typeof t!="number"&&(t=this._serverSheet.cssRules.length),this._serverSheet.insertRule(e,t),this._rulesCount++;if(this._optimizeForSpeed){var i=this.getSheet();typeof t!="number"&&(t=i.cssRules.length);try{i.insertRule(e,t)}catch{return _||m.warn(`StyleSheet: illegal rule: 

`+e+`

See https://stackoverflow.com/q/20007992 for more info`),-1}}else{var o=this._tags[t];this._tags.push(this.makeStyleTag(this._name,e,o))}return this._rulesCount++},n.replaceRule=function(e,t){if(this._optimizeForSpeed||typeof window>"u"){var i=typeof window<"u"?this.getSheet():this._serverSheet;if(t.trim()||(t=this._deletedRulePlaceholder),!i.cssRules[e])return e;i.deleteRule(e);try{i.insertRule(t,e)}catch{_||m.warn(`StyleSheet: illegal rule: 

`+t+`

See https://stackoverflow.com/q/20007992 for more info`),i.insertRule(this._deletedRulePlaceholder,e)}}else{var o=this._tags[e];v(o,"old rule at index `"+e+"` not found"),o.textContent=t}return e},n.deleteRule=function(e){if(typeof window>"u"){this._serverSheet.deleteRule(e);return}if(this._optimizeForSpeed)this.replaceRule(e,"");else{var t=this._tags[e];v(t,"rule at index `"+e+"` not found"),t.parentNode.removeChild(t),this._tags[e]=null}},n.flush=function(){this._injected=!1,this._rulesCount=0,typeof window<"u"?(this._tags.forEach(function(e){return e&&e.parentNode.removeChild(e)}),this._tags=[]):this._serverSheet.cssRules=[]},n.cssRules=function(){var e=this;return typeof window>"u"?this._serverSheet.cssRules:this._tags.reduce(function(t,i){return i?t=t.concat(Array.prototype.map.call(e.getSheetForTag(i).cssRules,function(o){return o.cssText===e._deletedRulePlaceholder?null:o})):t.push(null),t},[])},n.makeStyleTag=function(e,t,i){t&&v(g(t),"makeStyleTag accepts only strings as second parameter");var o=document.createElement("style");this._nonce&&o.setAttribute("nonce",this._nonce),o.type="text/css",o.setAttribute("data-"+e,""),t&&o.appendChild(document.createTextNode(t));var c=document.head||document.getElementsByTagName("head")[0];return i?c.insertBefore(o,i):c.appendChild(o),o},h(s,[{key:"length",get:function(){return this._rulesCount}}]),s}();function v(s,n){if(!s)throw new Error("StyleSheet: "+n+".")}function T(s){for(var n=5381,r=s.length;r;)n=n*33^s.charCodeAt(--r);return n>>>0}var E=T,P=function(s){return s.replace(/\/style/gi,"\\/style")},R={};function F(s,n){if(!n)return"jsx-"+s;var r=String(n),e=s+r;return R[e]||(R[e]="jsx-"+E(s+"-"+r)),R[e]}function b(s,n){var r=/__jsx-style-dynamic-selector/g;typeof window>"u"&&(n=P(n));var e=s+n;return R[e]||(R[e]=n.replace(r,s)),R[e]}function x(s,n){return n===void 0&&(n={}),s.map(function(r){var e=r[0],t=r[1];return a.default.createElement("style",{id:"__"+e,key:"__"+e,nonce:n.nonce?n.nonce:void 0,dangerouslySetInnerHTML:{__html:t}})})}var w=function(){function s(r){var e=r===void 0?{}:r,t=e.styleSheet,i=t===void 0?null:t,o=e.optimizeForSpeed,c=o===void 0?!1:o;this._sheet=i||new O({name:"styled-jsx",optimizeForSpeed:c}),this._sheet.inject(),i&&typeof c=="boolean"&&(this._sheet.setOptimizeForSpeed(c),this._optimizeForSpeed=this._sheet.isOptimizeForSpeed()),this._fromServer=void 0,this._indices={},this._instancesCounts={}}var n=s.prototype;return n.add=function(e){var t=this;this._optimizeForSpeed===void 0&&(this._optimizeForSpeed=Array.isArray(e.children),this._sheet.setOptimizeForSpeed(this._optimizeForSpeed),this._optimizeForSpeed=this._sheet.isOptimizeForSpeed()),typeof window<"u"&&!this._fromServer&&(this._fromServer=this.selectFromServer(),this._instancesCounts=Object.keys(this._fromServer).reduce(function(C,L){return C[L]=0,C},{}));var i=this.getIdAndRules(e),o=i.styleId,c=i.rules;if(o in this._instancesCounts){this._instancesCounts[o]+=1;return}var j=c.map(function(C){return t._sheet.insertRule(C)}).filter(function(C){return C!==-1});this._indices[o]=j,this._instancesCounts[o]=1},n.remove=function(e){var t=this,i=this.getIdAndRules(e).styleId;if(N(i in this._instancesCounts,"styleId: `"+i+"` not found"),this._instancesCounts[i]-=1,this._instancesCounts[i]<1){var o=this._fromServer&&this._fromServer[i];o?(o.parentNode.removeChild(o),delete this._fromServer[i]):(this._indices[i].forEach(function(c){return t._sheet.deleteRule(c)}),delete this._indices[i]),delete this._instancesCounts[i]}},n.update=function(e,t){this.add(t),this.remove(e)},n.flush=function(){this._sheet.flush(),this._sheet.inject(),this._fromServer=void 0,this._indices={},this._instancesCounts={}},n.cssRules=function(){var e=this,t=this._fromServer?Object.keys(this._fromServer).map(function(o){return[o,e._fromServer[o]]}):[],i=this._sheet.cssRules();return t.concat(Object.keys(this._indices).map(function(o){return[o,e._indices[o].map(function(c){return i[c].cssText}).join(e._optimizeForSpeed?"":`
`)]}).filter(function(o){return!!o[1]}))},n.styles=function(e){return x(this.cssRules(),e)},n.getIdAndRules=function(e){var t=e.children,i=e.dynamic,o=e.id;if(i){var c=F(o,i);return{styleId:c,rules:Array.isArray(t)?t.map(function(j){return b(c,j)}):[b(c,t)]}}return{styleId:F(o),rules:Array.isArray(t)?t:[t]}},n.selectFromServer=function(){var e=Array.prototype.slice.call(document.querySelectorAll('[id^="__jsx-"]'));return e.reduce(function(t,i){var o=i.id.slice(2);return t[o]=i,t},{})},s}();function N(s,n){if(!s)throw new Error("StyleSheetRegistry: "+n+".")}var A=f.createContext(null);A.displayName="StyleSheetContext";function z(){return new w}function W(s){var n=s.registry,r=s.children,e=f.useContext(A),t=f.useState(function(){return e||n||z()}),i=t[0];return a.default.createElement(A.Provider,{value:i},r)}function D(){return f.useContext(A)}var B=a.default.useInsertionEffect||a.default.useLayoutEffect,I=typeof window<"u"?z():void 0;function M(s){var n=I||D();return n?typeof window>"u"?(n.add(s),null):(B(function(){return n.add(s),function(){n.remove(s)}},[s.id,String(s.dynamic)]),null):null}M.dynamic=function(s){return s.map(function(n){var r=n[0],e=n[1];return F(r,e)}).join(" ")},p.StyleRegistry=W,p.createStyleRegistry=z,p.style=M,p.useStyleRegistry=D},"./node_modules/styled-jsx/style.js":(y,p,u)=>{y.exports=u("./node_modules/styled-jsx/dist/index/index.js").style}}]);
