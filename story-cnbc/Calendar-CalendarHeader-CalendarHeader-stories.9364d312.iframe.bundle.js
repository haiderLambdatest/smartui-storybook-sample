(globalThis.webpackChunkfirecracker=globalThis.webpackChunkfirecracker||[]).push([[1768,2384],{"./components/Calendar/CalendarHeader/CalendarHeader.stories.js":(j,c,i)=>{"use strict";i.r(c),i.d(c,{HeaderWithDoubleDigitDay:()=>v,HeaderWithSingleDigitDay:()=>_,__namedExportsOrder:()=>m,default:()=>D});var g=i("./node_modules/next/dist/compiled/react/index.js"),f=i("./components/Calendar/CalendarHeader/index.js"),h=g.createElement;const u={component:f.default,title:"Features/Calendar/Calendar Header",decorators:[p=>h("div",{className:"calendary-storybook m-auto"},h(p,null))]},_=()=>h("div",null,h(f.default,{month:"5"}));_.displayName="HeaderWithSingleDigitDay";const v=()=>h("div",null,h(f.default,{month:"5"}));v.displayName="HeaderWithDoubleDigitDay";const D=u,m=["HeaderWithSingleDigitDay","HeaderWithDoubleDigitDay"]},"./components/Calendar/CalendarHeader/index.js":(j,c,i)=>{"use strict";i.r(c),i.d(c,{default:()=>O});var g=i("./node_modules/styled-jsx/style.js"),f=i.n(g),h=i("./node_modules/next/dist/compiled/react/index.js"),u=i("./node_modules/prop-types/index.js"),_=i.n(u),v=i("./node_modules/react-i18next/dist/es/index.js"),D=i("./components/Calendar/calendarHelpers.js"),m=h.createElement;function p({month:S,t:R}){return S&&m("div",{className:"jsx-2624485293 calendar-header oswald"},m(f(),{id:"2624485293"},[".calendar-header.jsx-2624485293{width:112px;}",".calendar-header__month.jsx-2624485293{font-weight:200;text-align:left;margin-top:0.25rem;margin-bottom:0.25rem;}"]),m("div",{className:"jsx-2624485293 calendar-header__month f7 f1 lh-none "},R((0,D.numericToMonth)(S))))}p.propTypes={month:_().string},p.defaultProps={month:null};const O=(0,v.withTranslation)()(p)},"./components/Calendar/calendarHelpers.js":(j,c,i)=>{"use strict";i.r(c),i.d(c,{calendarMonths:()=>I,dateIsToday:()=>P,formatOfficeName:()=>n,getCurrentDate:()=>r,getDayOfMonth:()=>C,getMonthNumber:()=>T,getStatesByDate:()=>L,getUniqueElectionDates:()=>A,getUrlForPrimarySubPage:()=>W,getYear:()=>b,isDateBetween:()=>a,isElectionDate:()=>M,isFirstElectionDate:()=>B,monthStartingDay:()=>z,numberOfDaysInMonth:()=>F,numericToMonth:()=>x,numericToThreeLetterMonth:()=>U});var g=i("./node_modules/dayjs/plugin/isToday.js"),f=i.n(g),h=i("./node_modules/dayjs/plugin/timezone.js"),u=i.n(h),_=i("./node_modules/dayjs/plugin/utc.js"),v=i.n(_),D=i("./node_modules/dayjs/plugin/weekday.js"),m=i.n(D),p=i("./node_modules/dayjs/plugin/isBetween.js"),O=i.n(p),S=i("./node_modules/lodash.kebabcase/index.js"),R=i.n(S),l=i("./lib/dayjsCustom.js");l.dayJsCustom.extend(f()),l.dayJsCustom.extend(u()),l.dayJsCustom.extend(v()),l.dayJsCustom.extend(m()),l.dayJsCustom.extend(O());const I={january:1,february:2,march:3,april:4,may:5,june:6,july:7,august:8,september:9,october:10,november:11,december:12},C=t=>(0,l.dayJsCustom)(t).format("D"),T=t=>(0,l.dayJsCustom)(t).format("MM"),A=t=>{if(!Array.isArray(t))return[];const s=t.map(d=>(0,l.dayJsCustom)(d).format("D"));return s.sort((d,y)=>d-y),[...new Set(s)]},W=(t,s,d)=>{const y=`/politics/${d}-primary-elections/`,E=R()(t.toLowerCase()),w=R()(s.toLowerCase());return`${y}${w}-${E}-results`},b=t=>t?(0,l.dayJsCustom)(t).format("YYYY"):null,B=(t,s)=>t.toString()===s[0],M=(t,s)=>s.includes(t.toString()),P=({date:t,year:s,month:d,day:y})=>{const E=t||`${s}-${d}-${y}`;return(0,l.dayJsCustom)(E).isToday()},z=(t,s)=>(0,l.dayJsCustom)(`${t}-${s}-01`).weekday(),F=(t,s)=>(0,l.dayJsCustom)(`${t}-${s}-01`).daysInMonth(),U=t=>(0,l.dayJsCustom)(`2022-${t}-01`).format("MMM").replace(/\./g,"").toUpperCase(),x=t=>(0,l.dayJsCustom)(`2022-${t}-01`).format("MMMM").toUpperCase(),L=t=>{const s={};return t.forEach(d=>{const y=C(d.date);s[y]||(s[y]=[]),s[y].push(d)}),s},o=t=>(0,l.dayJsCustom)(t).tz("America/New_York").add(1,"day").startOf("day").add(12,"hour"),r=()=>(0,l.dayJsCustom)(),a=(t,s)=>{const d=(0,l.dayJsCustom)(s).tz("America/New_York")||r(),y=(0,l.dayJsCustom)(t).tz("America/New_York"),E=o(t);return d.isBetween(y,E)},e={"Lieutenant Governor":"Lt. Governor","Secretary of State":"Sec. of State"},n=t=>t?e[t]??t:null},"./lib/dayjsCustom.js":(j,c,i)=>{"use strict";i.r(c),i.d(c,{dayJsCustom:()=>m});var g=i("./node_modules/dayjs/dayjs.min.js"),f=i.n(g),h=i("./node_modules/dayjs/plugin/updateLocale.js"),u=i.n(h),_=i("./node_modules/dayjs/locale/es.js"),v=i.n(_);f().extend(u());const D={en:{monthsShort:["Jan.","Feb.","March","April","May","June","July","Aug.","Sept.","Oct.","Nov.","Dec."]},es:{monthsShort:["En.","Feb.","Mar.","Abr.","May.","Jun.","Jul.","Ag.","Sept.","Oct.","Nov.","Dic."],relativeTime:{future:"en %s",past:"hace %s",s:"pocos segundos",m:"un minuto",mm:"%d minutos",h:"una hora",hh:"%d horas",d:"un d\xEDa",dd:"%d dias",M:"un mes",MM:"%d meses",y:"un a\xF1o",yy:"%d a\xF1os"}}};Object.keys(D).forEach(p=>{f().updateLocale(p,D[p])});const m=f()},"./node_modules/client-only/index.js":()=>{},"./node_modules/prop-types/factoryWithThrowingShims.js":(j,c,i)=>{"use strict";var g=i("./node_modules/prop-types/lib/ReactPropTypesSecret.js");function f(){}function h(){}h.resetWarningCache=f,j.exports=function(){function u(D,m,p,O,S,R){if(R!==g){var l=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw l.name="Invariant Violation",l}}u.isRequired=u;function _(){return u}var v={array:u,bigint:u,bool:u,func:u,number:u,object:u,string:u,symbol:u,any:u,arrayOf:_,element:u,elementType:u,instanceOf:_,node:u,objectOf:_,oneOf:_,oneOfType:_,shape:_,exact:_,checkPropTypes:h,resetWarningCache:f};return v.PropTypes=v,v}},"./node_modules/prop-types/index.js":(j,c,i)=>{if(!1)var g,f;else j.exports=i("./node_modules/prop-types/factoryWithThrowingShims.js")()},"./node_modules/prop-types/lib/ReactPropTypesSecret.js":j=>{"use strict";var c="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";j.exports=c},"./node_modules/styled-jsx/dist/index/index.js":(j,c,i)=>{var g=i("./node_modules/process/browser.js"),f=i("./node_modules/console-browserify/index.js");i("./node_modules/client-only/index.js");var h=i("./node_modules/next/dist/compiled/react/index.js");function u(o){return o&&typeof o=="object"&&"default"in o?o:{default:o}}var _=u(h);function v(o,r){for(var a=0;a<r.length;a++){var e=r[a];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(o,e.key,e)}}function D(o,r,a){return r&&v(o.prototype,r),a&&v(o,a),o}var m=typeof g<"u"&&g.env&&!0,p=function(o){return Object.prototype.toString.call(o)==="[object String]"},O=function(){function o(a){var e=a===void 0?{}:a,n=e.name,t=n===void 0?"stylesheet":n,s=e.optimizeForSpeed,d=s===void 0?m:s;S(p(t),"`name` must be a string"),this._name=t,this._deletedRulePlaceholder="#"+t+"-deleted-rule____{}",S(typeof d=="boolean","`optimizeForSpeed` must be a boolean"),this._optimizeForSpeed=d,this._serverSheet=void 0,this._tags=[],this._injected=!1,this._rulesCount=0;var y=typeof window<"u"&&document.querySelector('meta[property="csp-nonce"]');this._nonce=y?y.getAttribute("content"):null}var r=o.prototype;return r.setOptimizeForSpeed=function(e){S(typeof e=="boolean","`setOptimizeForSpeed` accepts a boolean"),S(this._rulesCount===0,"optimizeForSpeed cannot be when rules have already been inserted"),this.flush(),this._optimizeForSpeed=e,this.inject()},r.isOptimizeForSpeed=function(){return this._optimizeForSpeed},r.inject=function(){var e=this;if(S(!this._injected,"sheet already injected"),this._injected=!0,typeof window<"u"&&this._optimizeForSpeed){this._tags[0]=this.makeStyleTag(this._name),this._optimizeForSpeed="insertRule"in this.getSheet(),this._optimizeForSpeed||(m||f.warn("StyleSheet: optimizeForSpeed mode not supported falling back to standard mode."),this.flush(),this._injected=!0);return}this._serverSheet={cssRules:[],insertRule:function(n,t){return typeof t=="number"?e._serverSheet.cssRules[t]={cssText:n}:e._serverSheet.cssRules.push({cssText:n}),t},deleteRule:function(n){e._serverSheet.cssRules[n]=null}}},r.getSheetForTag=function(e){if(e.sheet)return e.sheet;for(var n=0;n<document.styleSheets.length;n++)if(document.styleSheets[n].ownerNode===e)return document.styleSheets[n]},r.getSheet=function(){return this.getSheetForTag(this._tags[this._tags.length-1])},r.insertRule=function(e,n){if(S(p(e),"`insertRule` accepts only strings"),typeof window>"u")return typeof n!="number"&&(n=this._serverSheet.cssRules.length),this._serverSheet.insertRule(e,n),this._rulesCount++;if(this._optimizeForSpeed){var t=this.getSheet();typeof n!="number"&&(n=t.cssRules.length);try{t.insertRule(e,n)}catch{return m||f.warn(`StyleSheet: illegal rule: 

`+e+`

See https://stackoverflow.com/q/20007992 for more info`),-1}}else{var s=this._tags[n];this._tags.push(this.makeStyleTag(this._name,e,s))}return this._rulesCount++},r.replaceRule=function(e,n){if(this._optimizeForSpeed||typeof window>"u"){var t=typeof window<"u"?this.getSheet():this._serverSheet;if(n.trim()||(n=this._deletedRulePlaceholder),!t.cssRules[e])return e;t.deleteRule(e);try{t.insertRule(n,e)}catch{m||f.warn(`StyleSheet: illegal rule: 

`+n+`

See https://stackoverflow.com/q/20007992 for more info`),t.insertRule(this._deletedRulePlaceholder,e)}}else{var s=this._tags[e];S(s,"old rule at index `"+e+"` not found"),s.textContent=n}return e},r.deleteRule=function(e){if(typeof window>"u"){this._serverSheet.deleteRule(e);return}if(this._optimizeForSpeed)this.replaceRule(e,"");else{var n=this._tags[e];S(n,"rule at index `"+e+"` not found"),n.parentNode.removeChild(n),this._tags[e]=null}},r.flush=function(){this._injected=!1,this._rulesCount=0,typeof window<"u"?(this._tags.forEach(function(e){return e&&e.parentNode.removeChild(e)}),this._tags=[]):this._serverSheet.cssRules=[]},r.cssRules=function(){var e=this;return typeof window>"u"?this._serverSheet.cssRules:this._tags.reduce(function(n,t){return t?n=n.concat(Array.prototype.map.call(e.getSheetForTag(t).cssRules,function(s){return s.cssText===e._deletedRulePlaceholder?null:s})):n.push(null),n},[])},r.makeStyleTag=function(e,n,t){n&&S(p(n),"makeStyleTag accepts only strings as second parameter");var s=document.createElement("style");this._nonce&&s.setAttribute("nonce",this._nonce),s.type="text/css",s.setAttribute("data-"+e,""),n&&s.appendChild(document.createTextNode(n));var d=document.head||document.getElementsByTagName("head")[0];return t?d.insertBefore(s,t):d.appendChild(s),s},D(o,[{key:"length",get:function(){return this._rulesCount}}]),o}();function S(o,r){if(!o)throw new Error("StyleSheet: "+r+".")}function R(o){for(var r=5381,a=o.length;a;)r=r*33^o.charCodeAt(--a);return r>>>0}var l=R,I=function(o){return o.replace(/\/style/gi,"\\/style")},C={};function T(o,r){if(!r)return"jsx-"+o;var a=String(r),e=o+a;return C[e]||(C[e]="jsx-"+l(o+"-"+a)),C[e]}function A(o,r){var a=/__jsx-style-dynamic-selector/g;typeof window>"u"&&(r=I(r));var e=o+r;return C[e]||(C[e]=r.replace(a,o)),C[e]}function W(o,r){return r===void 0&&(r={}),o.map(function(a){var e=a[0],n=a[1];return _.default.createElement("style",{id:"__"+e,key:"__"+e,nonce:r.nonce?r.nonce:void 0,dangerouslySetInnerHTML:{__html:n}})})}var b=function(){function o(a){var e=a===void 0?{}:a,n=e.styleSheet,t=n===void 0?null:n,s=e.optimizeForSpeed,d=s===void 0?!1:s;this._sheet=t||new O({name:"styled-jsx",optimizeForSpeed:d}),this._sheet.inject(),t&&typeof d=="boolean"&&(this._sheet.setOptimizeForSpeed(d),this._optimizeForSpeed=this._sheet.isOptimizeForSpeed()),this._fromServer=void 0,this._indices={},this._instancesCounts={}}var r=o.prototype;return r.add=function(e){var n=this;this._optimizeForSpeed===void 0&&(this._optimizeForSpeed=Array.isArray(e.children),this._sheet.setOptimizeForSpeed(this._optimizeForSpeed),this._optimizeForSpeed=this._sheet.isOptimizeForSpeed()),typeof window<"u"&&!this._fromServer&&(this._fromServer=this.selectFromServer(),this._instancesCounts=Object.keys(this._fromServer).reduce(function(E,w){return E[w]=0,E},{}));var t=this.getIdAndRules(e),s=t.styleId,d=t.rules;if(s in this._instancesCounts){this._instancesCounts[s]+=1;return}var y=d.map(function(E){return n._sheet.insertRule(E)}).filter(function(E){return E!==-1});this._indices[s]=y,this._instancesCounts[s]=1},r.remove=function(e){var n=this,t=this.getIdAndRules(e).styleId;if(B(t in this._instancesCounts,"styleId: `"+t+"` not found"),this._instancesCounts[t]-=1,this._instancesCounts[t]<1){var s=this._fromServer&&this._fromServer[t];s?(s.parentNode.removeChild(s),delete this._fromServer[t]):(this._indices[t].forEach(function(d){return n._sheet.deleteRule(d)}),delete this._indices[t]),delete this._instancesCounts[t]}},r.update=function(e,n){this.add(n),this.remove(e)},r.flush=function(){this._sheet.flush(),this._sheet.inject(),this._fromServer=void 0,this._indices={},this._instancesCounts={}},r.cssRules=function(){var e=this,n=this._fromServer?Object.keys(this._fromServer).map(function(s){return[s,e._fromServer[s]]}):[],t=this._sheet.cssRules();return n.concat(Object.keys(this._indices).map(function(s){return[s,e._indices[s].map(function(d){return t[d].cssText}).join(e._optimizeForSpeed?"":`
`)]}).filter(function(s){return!!s[1]}))},r.styles=function(e){return W(this.cssRules(),e)},r.getIdAndRules=function(e){var n=e.children,t=e.dynamic,s=e.id;if(t){var d=T(s,t);return{styleId:d,rules:Array.isArray(n)?n.map(function(y){return A(d,y)}):[A(d,n)]}}return{styleId:T(s),rules:Array.isArray(n)?n:[n]}},r.selectFromServer=function(){var e=Array.prototype.slice.call(document.querySelectorAll('[id^="__jsx-"]'));return e.reduce(function(n,t){var s=t.id.slice(2);return n[s]=t,n},{})},o}();function B(o,r){if(!o)throw new Error("StyleSheetRegistry: "+r+".")}var M=h.createContext(null);M.displayName="StyleSheetContext";function P(){return new b}function z(o){var r=o.registry,a=o.children,e=h.useContext(M),n=h.useState(function(){return e||r||P()}),t=n[0];return _.default.createElement(M.Provider,{value:t},a)}function F(){return h.useContext(M)}var U=_.default.useInsertionEffect||_.default.useLayoutEffect,x=typeof window<"u"?P():void 0;function L(o){var r=x||F();return r?typeof window>"u"?(r.add(o),null):(U(function(){return r.add(o),function(){r.remove(o)}},[o.id,String(o.dynamic)]),null):null}L.dynamic=function(o){return o.map(function(r){var a=r[0],e=r[1];return T(a,e)}).join(" ")},c.StyleRegistry=z,c.createStyleRegistry=P,c.style=L,c.useStyleRegistry=F},"./node_modules/styled-jsx/style.js":(j,c,i)=>{j.exports=i("./node_modules/styled-jsx/dist/index/index.js").style}}]);
