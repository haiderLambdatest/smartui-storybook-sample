(globalThis.webpackChunkfirecracker=globalThis.webpackChunkfirecracker||[]).push([[6570,3437,7527,1073,3986,1925,2384],{"./components/HorizontalBarChart/HorizontalBarChart.stories.js":(C,m,l)=>{"use strict";l.r(m),l.d(m,{BeforeCall:()=>c,ZeroState:()=>S,__namedExportsOrder:()=>x,callMadeNationalNo:()=>g,callMadeNationalYes:()=>b,callMadeState:()=>R,default:()=>u});var y=l("./node_modules/next/dist/compiled/react/index.js"),f=l("./components/HorizontalBarChart/BallotMeasuresBarChart.js");const i=JSON.parse('{"ballotData":[{"declaredWinner":true,"ballotText":"Yes","totalPercentReceived":61.2,"totalVotesReceived":868502},{"declaredWinner":false,"ballotText":"No","totalPercentReceived":37.8,"totalVotesReceived":578961}],"zeroState":[{"declaredWinner":false,"ballotText":"Yes","totalPercentReceived":0,"totalVotesReceived":0},{"declaredWinner":false,"ballotText":"No","totalPercentReceived":0,"totalVotesReceived":0}],"noWins":[{"declaredWinner":false,"ballotText":"Yes","totalPercentReceived":37.8,"totalVotesReceived":578961},{"declaredWinner":true,"ballotText":"No","totalPercentReceived":61.2,"totalVotesReceived":868502}]}');var d=y.createElement;const u={component:f.default,title:"Global Components/Horizontal Bar Chart/Ballot Measure Bar Chart"},S=()=>d("div",null,d(f.default,{candidates:i.zeroState,percentIn:0,totalVotes:0,showTotalNumberOfVotes:!0}));S.displayName="ZeroState";const c=()=>d("div",null,d(f.default,{candidates:i.ballotData,percentIn:99,totalVotes:1447463,showTotalNumberOfVotes:!0}));c.displayName="BeforeCall";const R=()=>d("div",null,d(f.default,{candidates:i.ballotData,callStatus:"W",percentIn:99,totalVotes:1447463,showOnlyWinnerBar:!0}));R.displayName="callMadeState";const b=()=>d("div",null,d(f.default,{candidates:i.ballotData,callStatus:"W",percentIn:99,totalVotes:1447463,showTotalNumberOfVotes:!0}));b.displayName="callMadeNationalYes";const g=()=>d("div",null,d(f.default,{candidates:i.noWins,callStatus:"W",percentIn:99,totalVotes:1447463,showTotalNumberOfVotes:!0}));g.displayName="callMadeNationalNo";const x=["ZeroState","BeforeCall","callMadeState","callMadeNationalYes","callMadeNationalNo"]},"./components/Checkmark.js":(C,m,l)=>{"use strict";l.r(m),l.d(m,{default:()=>x});var y=l("./node_modules/styled-jsx/style.js"),f=l.n(y),i=l("./node_modules/classnames/index.js"),d=l.n(i),u=l("./node_modules/next/dist/compiled/react/index.js"),S=l("./node_modules/prop-types/index.js"),c=l.n(S),R=l("./node_modules/react-i18next/dist/es/index.js"),b=u.createElement;const g=({t:T,color:N,height:P,hasTransparentBackground:v,width:_,nonpartisanWinner:I,addMargin:B,shouldDisplay:M,hideOnMobile:k=!1,verticalAlign:j,className:W})=>{const p=v?"transparent":I?"#FFD60C":"#fff",z=d()({ml1:B,dib:M&&!k,"dib-m":M&&k});return b("span",{"data-test":"checkmark-wrapper",className:f().dynamic([["1491606757",[p,P||_,_,j,N]]])+" "+(W||"")},b(f(),{id:"1491606757",dynamic:[p,P||_,_,j,N]},[`.checkmark.__jsx-style-dynamic-selector{background-color:${p};height:${P||_};width:${_};vertical-align:${j};stroke:${N};}`]),b("svg",{"data-test":"checkmark","data-testid":"checkmark",viewBox:"0 0 14 14",strokeWidth:"2",role:"img","aria-label":T("Winner"),className:f().dynamic([["1491606757",[p,P||_,_,j,N]]])+` checkmark dn ${z}`},b("path",{fill:"none",d:"M12,3.5l-6.81,7L2,7.8",className:f().dynamic([["1491606757",[p,P||_,_,j,N]]])})))};g.displayName="Checkmark",g.propTypes={color:c().string,height:c().string,addMargin:c().bool,nonpartisanWinner:c().bool,width:c().string,shouldDisplay:c().bool,hideOnMobile:c().bool,verticalAlign:c().oneOf(["bottom","top","middle","unset","baseline"]),hasTransparentBackground:c().bool,className:c().string},g.defaultProps={color:"#2A2A2A",height:null,addMargin:!0,nonpartisanWinner:!1,width:"20px",shouldDisplay:!1,hideOnMobile:!1,verticalAlign:"bottom",hasTransparentBackground:!1,className:""};const x=(0,R.withTranslation)()(g)},"./components/HorizontalBarChart/BallotMeasuresBarChart.js":(C,m,l)=>{"use strict";l.r(m),l.d(m,{default:()=>W});var y=l("./node_modules/next/dist/compiled/react/index.js"),f=l("./node_modules/prop-types/index.js"),i=l.n(f),d=l("./node_modules/classnames/index.js"),u=l.n(d),S=l("./helpers/constants.js");const R=i().shape({declaredWinner:i().bool,ballotText:i().string,totalPercentReceived:i().number,totalVotesReceived:i().number});var b=l("./node_modules/styled-jsx/style.js"),g=l.n(b),x=l("./components/Checkmark.js"),T=y.createElement;const N=({label:F,color:p,value:z,isCalled:O,isWinner:A})=>{const s=`${z}%`;return T(y.Fragment,null,T(g(),{id:"2710050057"},[".hb-container{position:relative;height:30px;color:#2a2a2a;border-width:1px;border-style:solid;-webkit-flex:1 0;-ms-flex:1 0;flex:1 0;}",".hb-container.called{border-width:2px;color:#ffffff;}",".hb-colored-results-bar{position:absolute;top:0;z-index:-1;opacity:0.3;height:100%;-webkit-animation:barExpansion 1s linear,slideInFromLeft;animation:barExpansion 1s linear,slideInFromLeft;}",".hb-colored-results-bar.called{opacity:1;}",".hb-label-text{margin:1px 3px 0px 7px;}",".hb-percent-text{color:#555555;min-width:44px;}",".hb-percent-text.called{color:var(--winner-color);}","@-webkit-keyframes barExpansion{from{width:0%;}to{width:var(--full-width);}}","@keyframes barExpansion{from{width:0%;}to{width:var(--full-width);}}"]),T("div",{className:"jsx-2710050057 hb-outer-container df"},T("div",{style:{borderColor:p},className:"jsx-2710050057 "+(u()("hb-container mb2 ttu founders-cond f6 df",{called:O&&A})||"")},T("div",{className:"jsx-2710050057 hb-label-text"},F),O&&A&&T(x.default,{width:"22px",height:"22px",color:"#ffffff",shouldDisplay:!0,hasTransparentBackground:!0}),T("div",{style:{width:s,"--full-width":s,background:p},className:"jsx-2710050057 "+(u()("hb-colored-results-bar",{called:O&&A})||"")})),T("span",{style:{"--winner-color":p},className:"jsx-2710050057 "+(u()("hb-percent-text f6 dib mh4 founders-cond",{called:O&&A})||"")},s)))};N.propTypes={color:i().string,isCalled:i().bool,isWinner:i().bool,label:i().string,value:i().number},N.defaultProps={color:"#645FAA",isCalled:!1,isWinner:!1,label:null,value:0};const P=N;var v=y.createElement;const _=({label:F,color:p,value:z})=>{const O=`${z}%`;return v(y.Fragment,null,v(g(),{id:"2583359665"},[".hbs-container.called{position:relative;height:30px;border-width:2px;border-style:solid;color:#ffffff;-webkit-flex:1 0;-ms-flex:1 0;flex:1 0;}",".hbs-colored-results-bar.called{position:absolute;top:0;z-index:-1;opacity:1;height:100%;}",".hbs-label-text{margin:1px 3px 0px 7px;}",".hbs-percent-text{margin-right:7px;}"]),v("div",{className:"jsx-2583359665 hbs-outer-container df"},v("div",{style:{borderColor:p},className:"jsx-2583359665 hbs-container called mb2 ttu founders-cond f6 df justify-between"},v("div",{className:"jsx-2583359665 df"},v("div",{className:"jsx-2583359665 hbs-label-text"},F),v(x.default,{width:"22px",height:"22px",color:"#ffffff",shouldDisplay:!0,hasTransparentBackground:!0})),v("span",{className:"jsx-2583359665 hbs-percent-text f6 dib founders-cond white"},O),v("div",{style:{width:"100%",background:p},className:"jsx-2583359665 hbs-colored-results-bar called"}))))};_.propTypes={color:i().string,label:i().string,value:i().number},_.defaultProps={color:"#645FAA",label:null,value:0};const I=_;var B=y.createElement;const M={yes:"#9E0084",no:"#2AA78B",default:"#645FAA"},k=(F,p)=>F||M[p.toLowerCase()]||M.default,j=({callStatus:F,candidates:p,className:z,percentIn:O,showOnlyWinnerBar:A,showTotalNumberOfVotes:s,totalVotes:n})=>{if(!p)return null;const r=S.WINNING_CALL_STATUSES.includes(F),e=r&&A,t=p.find(E=>E.declaredWinner),o=()=>{if(!t)return null;const{ballotText:E,bgColor:w,totalPercentReceived:D}=t,L=k(w,E);return B(I,{color:L,value:D,label:E})},a=p.map(E=>{const{ballotText:w,bgColor:D,declaredWinner:L,totalPercentReceived:V}=E,U=k(D,w);return B(P,{color:U,value:V,label:w,isCalled:r,isWinner:L,key:w})}),h=e&&t?o():a;return B("div",{className:u()("hbc-container mb4",z,{called:r})},h,B("div",{className:"df justify-between"},O!=null&&B("div",{className:"hbc-percent-in gray-80 founders-cond f4 ttu"},`${O}% of expected vote in`),s&&n>0&&B("div",{className:"hbc-total-votes gray-80 founders-cond f4 mh4 ttu"},`${n.toLocaleString("en-US")} votes`)))};j.displayName="BallotMeasuresBarChart",j.propTypes={candidates:i().arrayOf(R),callStatus:i().string,className:i().string,percentIn:i().oneOfType([i().string,i().number]),showOnlyWinnerBar:i().bool,showTotalNumberOfVotes:i().bool,totalVotes:i().number},j.defaultProps={candidates:null,callStatus:null,className:null,percentIn:null,showOnlyWinnerBar:!1,showTotalNumberOfVotes:!1,totalVotes:0};const W=j},"./node_modules/classnames/index.js":(C,m)=>{var l,y;/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(){"use strict";var f={}.hasOwnProperty,i="[native code]";function d(){for(var u=[],S=0;S<arguments.length;S++){var c=arguments[S];if(c){var R=typeof c;if(R==="string"||R==="number")u.push(c);else if(Array.isArray(c)){if(c.length){var b=d.apply(null,c);b&&u.push(b)}}else if(R==="object"){if(c.toString!==Object.prototype.toString&&!c.toString.toString().includes("[native code]")){u.push(c.toString());continue}for(var g in c)f.call(c,g)&&c[g]&&u.push(g)}}}return u.join(" ")}C.exports?(d.default=d,C.exports=d):(l=[],y=function(){return d}.apply(m,l),y!==void 0&&(C.exports=y))})()},"./node_modules/client-only/index.js":()=>{},"./node_modules/prop-types/factoryWithThrowingShims.js":(C,m,l)=>{"use strict";var y=l("./node_modules/prop-types/lib/ReactPropTypesSecret.js");function f(){}function i(){}i.resetWarningCache=f,C.exports=function(){function d(c,R,b,g,x,T){if(T!==y){var N=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw N.name="Invariant Violation",N}}d.isRequired=d;function u(){return d}var S={array:d,bigint:d,bool:d,func:d,number:d,object:d,string:d,symbol:d,any:d,arrayOf:u,element:d,elementType:d,instanceOf:u,node:d,objectOf:u,oneOf:u,oneOfType:u,shape:u,exact:u,checkPropTypes:i,resetWarningCache:f};return S.PropTypes=S,S}},"./node_modules/prop-types/index.js":(C,m,l)=>{if(!1)var y,f;else C.exports=l("./node_modules/prop-types/factoryWithThrowingShims.js")()},"./node_modules/prop-types/lib/ReactPropTypesSecret.js":C=>{"use strict";var m="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";C.exports=m},"./node_modules/styled-jsx/dist/index/index.js":(C,m,l)=>{var y=l("./node_modules/process/browser.js"),f=l("./node_modules/console-browserify/index.js");l("./node_modules/client-only/index.js");var i=l("./node_modules/next/dist/compiled/react/index.js");function d(s){return s&&typeof s=="object"&&"default"in s?s:{default:s}}var u=d(i);function S(s,n){for(var r=0;r<n.length;r++){var e=n[r];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(s,e.key,e)}}function c(s,n,r){return n&&S(s.prototype,n),r&&S(s,r),s}var R=typeof y<"u"&&y.env&&!0,b=function(s){return Object.prototype.toString.call(s)==="[object String]"},g=function(){function s(r){var e=r===void 0?{}:r,t=e.name,o=t===void 0?"stylesheet":t,a=e.optimizeForSpeed,h=a===void 0?R:a;x(b(o),"`name` must be a string"),this._name=o,this._deletedRulePlaceholder="#"+o+"-deleted-rule____{}",x(typeof h=="boolean","`optimizeForSpeed` must be a boolean"),this._optimizeForSpeed=h,this._serverSheet=void 0,this._tags=[],this._injected=!1,this._rulesCount=0;var E=typeof window<"u"&&document.querySelector('meta[property="csp-nonce"]');this._nonce=E?E.getAttribute("content"):null}var n=s.prototype;return n.setOptimizeForSpeed=function(e){x(typeof e=="boolean","`setOptimizeForSpeed` accepts a boolean"),x(this._rulesCount===0,"optimizeForSpeed cannot be when rules have already been inserted"),this.flush(),this._optimizeForSpeed=e,this.inject()},n.isOptimizeForSpeed=function(){return this._optimizeForSpeed},n.inject=function(){var e=this;if(x(!this._injected,"sheet already injected"),this._injected=!0,typeof window<"u"&&this._optimizeForSpeed){this._tags[0]=this.makeStyleTag(this._name),this._optimizeForSpeed="insertRule"in this.getSheet(),this._optimizeForSpeed||(R||f.warn("StyleSheet: optimizeForSpeed mode not supported falling back to standard mode."),this.flush(),this._injected=!0);return}this._serverSheet={cssRules:[],insertRule:function(t,o){return typeof o=="number"?e._serverSheet.cssRules[o]={cssText:t}:e._serverSheet.cssRules.push({cssText:t}),o},deleteRule:function(t){e._serverSheet.cssRules[t]=null}}},n.getSheetForTag=function(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]},n.getSheet=function(){return this.getSheetForTag(this._tags[this._tags.length-1])},n.insertRule=function(e,t){if(x(b(e),"`insertRule` accepts only strings"),typeof window>"u")return typeof t!="number"&&(t=this._serverSheet.cssRules.length),this._serverSheet.insertRule(e,t),this._rulesCount++;if(this._optimizeForSpeed){var o=this.getSheet();typeof t!="number"&&(t=o.cssRules.length);try{o.insertRule(e,t)}catch{return R||f.warn(`StyleSheet: illegal rule: 

`+e+`

See https://stackoverflow.com/q/20007992 for more info`),-1}}else{var a=this._tags[t];this._tags.push(this.makeStyleTag(this._name,e,a))}return this._rulesCount++},n.replaceRule=function(e,t){if(this._optimizeForSpeed||typeof window>"u"){var o=typeof window<"u"?this.getSheet():this._serverSheet;if(t.trim()||(t=this._deletedRulePlaceholder),!o.cssRules[e])return e;o.deleteRule(e);try{o.insertRule(t,e)}catch{R||f.warn(`StyleSheet: illegal rule: 

`+t+`

See https://stackoverflow.com/q/20007992 for more info`),o.insertRule(this._deletedRulePlaceholder,e)}}else{var a=this._tags[e];x(a,"old rule at index `"+e+"` not found"),a.textContent=t}return e},n.deleteRule=function(e){if(typeof window>"u"){this._serverSheet.deleteRule(e);return}if(this._optimizeForSpeed)this.replaceRule(e,"");else{var t=this._tags[e];x(t,"rule at index `"+e+"` not found"),t.parentNode.removeChild(t),this._tags[e]=null}},n.flush=function(){this._injected=!1,this._rulesCount=0,typeof window<"u"?(this._tags.forEach(function(e){return e&&e.parentNode.removeChild(e)}),this._tags=[]):this._serverSheet.cssRules=[]},n.cssRules=function(){var e=this;return typeof window>"u"?this._serverSheet.cssRules:this._tags.reduce(function(t,o){return o?t=t.concat(Array.prototype.map.call(e.getSheetForTag(o).cssRules,function(a){return a.cssText===e._deletedRulePlaceholder?null:a})):t.push(null),t},[])},n.makeStyleTag=function(e,t,o){t&&x(b(t),"makeStyleTag accepts only strings as second parameter");var a=document.createElement("style");this._nonce&&a.setAttribute("nonce",this._nonce),a.type="text/css",a.setAttribute("data-"+e,""),t&&a.appendChild(document.createTextNode(t));var h=document.head||document.getElementsByTagName("head")[0];return o?h.insertBefore(a,o):h.appendChild(a),a},c(s,[{key:"length",get:function(){return this._rulesCount}}]),s}();function x(s,n){if(!s)throw new Error("StyleSheet: "+n+".")}function T(s){for(var n=5381,r=s.length;r;)n=n*33^s.charCodeAt(--r);return n>>>0}var N=T,P=function(s){return s.replace(/\/style/gi,"\\/style")},v={};function _(s,n){if(!n)return"jsx-"+s;var r=String(n),e=s+r;return v[e]||(v[e]="jsx-"+N(s+"-"+r)),v[e]}function I(s,n){var r=/__jsx-style-dynamic-selector/g;typeof window>"u"&&(n=P(n));var e=s+n;return v[e]||(v[e]=n.replace(r,s)),v[e]}function B(s,n){return n===void 0&&(n={}),s.map(function(r){var e=r[0],t=r[1];return u.default.createElement("style",{id:"__"+e,key:"__"+e,nonce:n.nonce?n.nonce:void 0,dangerouslySetInnerHTML:{__html:t}})})}var M=function(){function s(r){var e=r===void 0?{}:r,t=e.styleSheet,o=t===void 0?null:t,a=e.optimizeForSpeed,h=a===void 0?!1:a;this._sheet=o||new g({name:"styled-jsx",optimizeForSpeed:h}),this._sheet.inject(),o&&typeof h=="boolean"&&(this._sheet.setOptimizeForSpeed(h),this._optimizeForSpeed=this._sheet.isOptimizeForSpeed()),this._fromServer=void 0,this._indices={},this._instancesCounts={}}var n=s.prototype;return n.add=function(e){var t=this;this._optimizeForSpeed===void 0&&(this._optimizeForSpeed=Array.isArray(e.children),this._sheet.setOptimizeForSpeed(this._optimizeForSpeed),this._optimizeForSpeed=this._sheet.isOptimizeForSpeed()),typeof window<"u"&&!this._fromServer&&(this._fromServer=this.selectFromServer(),this._instancesCounts=Object.keys(this._fromServer).reduce(function(w,D){return w[D]=0,w},{}));var o=this.getIdAndRules(e),a=o.styleId,h=o.rules;if(a in this._instancesCounts){this._instancesCounts[a]+=1;return}var E=h.map(function(w){return t._sheet.insertRule(w)}).filter(function(w){return w!==-1});this._indices[a]=E,this._instancesCounts[a]=1},n.remove=function(e){var t=this,o=this.getIdAndRules(e).styleId;if(k(o in this._instancesCounts,"styleId: `"+o+"` not found"),this._instancesCounts[o]-=1,this._instancesCounts[o]<1){var a=this._fromServer&&this._fromServer[o];a?(a.parentNode.removeChild(a),delete this._fromServer[o]):(this._indices[o].forEach(function(h){return t._sheet.deleteRule(h)}),delete this._indices[o]),delete this._instancesCounts[o]}},n.update=function(e,t){this.add(t),this.remove(e)},n.flush=function(){this._sheet.flush(),this._sheet.inject(),this._fromServer=void 0,this._indices={},this._instancesCounts={}},n.cssRules=function(){var e=this,t=this._fromServer?Object.keys(this._fromServer).map(function(a){return[a,e._fromServer[a]]}):[],o=this._sheet.cssRules();return t.concat(Object.keys(this._indices).map(function(a){return[a,e._indices[a].map(function(h){return o[h].cssText}).join(e._optimizeForSpeed?"":`
`)]}).filter(function(a){return!!a[1]}))},n.styles=function(e){return B(this.cssRules(),e)},n.getIdAndRules=function(e){var t=e.children,o=e.dynamic,a=e.id;if(o){var h=_(a,o);return{styleId:h,rules:Array.isArray(t)?t.map(function(E){return I(h,E)}):[I(h,t)]}}return{styleId:_(a),rules:Array.isArray(t)?t:[t]}},n.selectFromServer=function(){var e=Array.prototype.slice.call(document.querySelectorAll('[id^="__jsx-"]'));return e.reduce(function(t,o){var a=o.id.slice(2);return t[a]=o,t},{})},s}();function k(s,n){if(!s)throw new Error("StyleSheetRegistry: "+n+".")}var j=i.createContext(null);j.displayName="StyleSheetContext";function W(){return new M}function F(s){var n=s.registry,r=s.children,e=i.useContext(j),t=i.useState(function(){return e||n||W()}),o=t[0];return u.default.createElement(j.Provider,{value:o},r)}function p(){return i.useContext(j)}var z=u.default.useInsertionEffect||u.default.useLayoutEffect,O=typeof window<"u"?W():void 0;function A(s){var n=O||p();return n?typeof window>"u"?(n.add(s),null):(z(function(){return n.add(s),function(){n.remove(s)}},[s.id,String(s.dynamic)]),null):null}A.dynamic=function(s){return s.map(function(n){var r=n[0],e=n[1];return _(r,e)}).join(" ")},m.StyleRegistry=F,m.createStyleRegistry=W,m.style=A,m.useStyleRegistry=p},"./node_modules/styled-jsx/style.js":(C,m,l)=>{C.exports=l("./node_modules/styled-jsx/dist/index/index.js").style}}]);
