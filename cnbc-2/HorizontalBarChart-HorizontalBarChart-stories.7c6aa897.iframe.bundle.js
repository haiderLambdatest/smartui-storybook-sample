(globalThis.webpackChunkfirecracker=globalThis.webpackChunkfirecracker||[]).push([[374,5452,3071,690,8309,4976,1808,9427,7046],{"./components/HorizontalBarChart/HorizontalBarChart.stories.js":(x,y,i)=>{"use strict";i.r(y),i.d(y,{BeforeCall:()=>u,ZeroState:()=>d,__namedExportsOrder:()=>g,callMadeNationalNo:()=>N,callMadeNationalYes:()=>C,callMadeState:()=>_,default:()=>f});var v=i("./node_modules/next/dist/compiled/react/index.js"),h=i("./components/HorizontalBarChart/BallotMeasuresBarChart.js");const a=JSON.parse('{"ballotData":[{"declaredWinner":true,"ballotText":"Yes","totalPercentReceived":61.2,"totalVotesReceived":868502},{"declaredWinner":false,"ballotText":"No","totalPercentReceived":37.8,"totalVotesReceived":578961}],"zeroState":[{"declaredWinner":false,"ballotText":"Yes","totalPercentReceived":0,"totalVotesReceived":0},{"declaredWinner":false,"ballotText":"No","totalPercentReceived":0,"totalVotesReceived":0}],"noWins":[{"declaredWinner":false,"ballotText":"Yes","totalPercentReceived":37.8,"totalVotesReceived":578961},{"declaredWinner":true,"ballotText":"No","totalPercentReceived":61.2,"totalVotesReceived":868502}]}');var c=v.createElement;const f={component:h.default,title:"Global Components/Horizontal Bar Chart/Ballot Measure Bar Chart"},d=()=>c("div",null,c(h.default,{candidates:a.zeroState,percentIn:0,totalVotes:0,showTotalNumberOfVotes:!0}));d.displayName="ZeroState";const u=()=>c("div",null,c(h.default,{candidates:a.ballotData,percentIn:99,totalVotes:1447463,showTotalNumberOfVotes:!0}));u.displayName="BeforeCall";const _=()=>c("div",null,c(h.default,{candidates:a.ballotData,callStatus:"W",percentIn:99,totalVotes:1447463,showOnlyWinnerBar:!0}));_.displayName="callMadeState";const C=()=>c("div",null,c(h.default,{candidates:a.ballotData,callStatus:"W",percentIn:99,totalVotes:1447463,showTotalNumberOfVotes:!0}));C.displayName="callMadeNationalYes";const N=()=>c("div",null,c(h.default,{candidates:a.noWins,callStatus:"W",percentIn:99,totalVotes:1447463,showTotalNumberOfVotes:!0}));N.displayName="callMadeNationalNo";const g=["ZeroState","BeforeCall","callMadeState","callMadeNationalYes","callMadeNationalNo"]},"./components/Checkmark.js":(x,y,i)=>{"use strict";i.r(y),i.d(y,{default:()=>g});var v=i("./node_modules/styled-jsx/style.js"),h=i.n(v),a=i("./node_modules/classnames/index.js"),c=i.n(a),f=i("./node_modules/next/dist/compiled/react/index.js"),d=i("./node_modules/prop-types/index.js"),u=i.n(d),_=i("./node_modules/react-i18next/dist/es/index.js"),C=f.createElement;const N=({t:j,color:T,height:P,hasTransparentBackground:S,width:b,nonpartisanWinner:I,addMargin:w,shouldDisplay:M,hideOnMobile:k=!1,verticalAlign:R,className:W})=>{const m=S?"transparent":I?"#FFD60C":"#fff",z=c()({ml1:w,dib:M&&!k,"dib-m":M&&k});return C("span",{"data-test":"checkmark-wrapper",className:h().dynamic([["1491606757",[m,P||b,b,R,T]]])+" "+(W||"")},C(h(),{id:"1491606757",dynamic:[m,P||b,b,R,T]},[`.checkmark.__jsx-style-dynamic-selector{background-color:${m};height:${P||b};width:${b};vertical-align:${R};stroke:${T};}`]),C("svg",{"data-test":"checkmark","data-testid":"checkmark",viewBox:"0 0 14 14",strokeWidth:"2",role:"img","aria-label":j("Winner"),className:h().dynamic([["1491606757",[m,P||b,b,R,T]]])+` checkmark dn ${z}`},C("path",{fill:"none",d:"M12,3.5l-6.81,7L2,7.8",className:h().dynamic([["1491606757",[m,P||b,b,R,T]]])})))};N.displayName="Checkmark",N.propTypes={color:u().string,height:u().string,addMargin:u().bool,nonpartisanWinner:u().bool,width:u().string,shouldDisplay:u().bool,hideOnMobile:u().bool,verticalAlign:u().oneOf(["bottom","top","middle","unset","baseline"]),hasTransparentBackground:u().bool,className:u().string},N.defaultProps={color:"#2A2A2A",height:null,addMargin:!0,nonpartisanWinner:!1,width:"20px",shouldDisplay:!1,hideOnMobile:!1,verticalAlign:"bottom",hasTransparentBackground:!1,className:""};const g=(0,_.withTranslation)()(N)},"./components/HorizontalBarChart/BallotMeasuresBarChart.js":(x,y,i)=>{"use strict";i.r(y),i.d(y,{default:()=>W});var v=i("./node_modules/next/dist/compiled/react/index.js"),h=i("./node_modules/prop-types/index.js"),a=i.n(h),c=i("./node_modules/classnames/index.js"),f=i.n(c),d=i("./helpers/constants.js");const _=a().shape({declaredWinner:a().bool,ballotText:a().string,totalPercentReceived:a().number,totalVotesReceived:a().number});var C=i("./node_modules/styled-jsx/style.js"),N=i.n(C),g=i("./components/Checkmark.js"),j=v.createElement;const T=({label:F,color:m,value:z,isCalled:O,isWinner:A})=>{const s=`${z}%`;return j(v.Fragment,null,j(N(),{id:"2710050057"},[".hb-container{position:relative;height:30px;color:#2a2a2a;border-width:1px;border-style:solid;-webkit-flex:1 0;-ms-flex:1 0;flex:1 0;}",".hb-container.called{border-width:2px;color:#ffffff;}",".hb-colored-results-bar{position:absolute;top:0;z-index:-1;opacity:0.3;height:100%;-webkit-animation:barExpansion 1s linear,slideInFromLeft;animation:barExpansion 1s linear,slideInFromLeft;}",".hb-colored-results-bar.called{opacity:1;}",".hb-label-text{margin:1px 3px 0px 7px;}",".hb-percent-text{color:#555555;min-width:44px;}",".hb-percent-text.called{color:var(--winner-color);}","@-webkit-keyframes barExpansion{from{width:0%;}to{width:var(--full-width);}}","@keyframes barExpansion{from{width:0%;}to{width:var(--full-width);}}"]),j("div",{className:"jsx-2710050057 hb-outer-container df"},j("div",{style:{borderColor:m},className:"jsx-2710050057 "+(f()("hb-container mb2 ttu founders-cond f6 df",{called:O&&A})||"")},j("div",{className:"jsx-2710050057 hb-label-text"},F),O&&A&&j(g.default,{width:"22px",height:"22px",color:"#ffffff",shouldDisplay:!0,hasTransparentBackground:!0}),j("div",{style:{width:s,"--full-width":s,background:m},className:"jsx-2710050057 "+(f()("hb-colored-results-bar",{called:O&&A})||"")})),j("span",{style:{"--winner-color":m},className:"jsx-2710050057 "+(f()("hb-percent-text f6 dib mh4 founders-cond",{called:O&&A})||"")},s)))};T.propTypes={color:a().string,isCalled:a().bool,isWinner:a().bool,label:a().string,value:a().number},T.defaultProps={color:"#645FAA",isCalled:!1,isWinner:!1,label:null,value:0};const P=T;var S=v.createElement;const b=({label:F,color:m,value:z})=>{const O=`${z}%`;return S(v.Fragment,null,S(N(),{id:"2583359665"},[".hbs-container.called{position:relative;height:30px;border-width:2px;border-style:solid;color:#ffffff;-webkit-flex:1 0;-ms-flex:1 0;flex:1 0;}",".hbs-colored-results-bar.called{position:absolute;top:0;z-index:-1;opacity:1;height:100%;}",".hbs-label-text{margin:1px 3px 0px 7px;}",".hbs-percent-text{margin-right:7px;}"]),S("div",{className:"jsx-2583359665 hbs-outer-container df"},S("div",{style:{borderColor:m},className:"jsx-2583359665 hbs-container called mb2 ttu founders-cond f6 df justify-between"},S("div",{className:"jsx-2583359665 df"},S("div",{className:"jsx-2583359665 hbs-label-text"},F),S(g.default,{width:"22px",height:"22px",color:"#ffffff",shouldDisplay:!0,hasTransparentBackground:!0})),S("span",{className:"jsx-2583359665 hbs-percent-text f6 dib founders-cond white"},O),S("div",{style:{width:"100%",background:m},className:"jsx-2583359665 hbs-colored-results-bar called"}))))};b.propTypes={color:a().string,label:a().string,value:a().number},b.defaultProps={color:"#645FAA",label:null,value:0};const I=b;var w=v.createElement;const M={yes:"#9E0084",no:"#2AA78B",default:"#645FAA"},k=(F,m)=>F||M[m.toLowerCase()]||M.default,R=({callStatus:F,candidates:m,className:z,percentIn:O,showOnlyWinnerBar:A,showTotalNumberOfVotes:s,totalVotes:n})=>{if(!m)return null;const r=d.WINNING_CALL_STATUSES.includes(F),e=r&&A,t=m.find(E=>E.declaredWinner),o=()=>{if(!t)return null;const{ballotText:E,bgColor:B,totalPercentReceived:D}=t,L=k(B,E);return w(I,{color:L,value:D,label:E})},l=m.map(E=>{const{ballotText:B,bgColor:D,declaredWinner:L,totalPercentReceived:V}=E,U=k(D,B);return w(P,{color:U,value:V,label:B,isCalled:r,isWinner:L,key:B})}),p=e&&t?o():l;return w("div",{className:f()("hbc-container mb4",z,{called:r})},p,w("div",{className:"df justify-between"},O!=null&&w("div",{className:"hbc-percent-in gray-80 founders-cond f4 ttu"},`${O}% of expected vote in`),s&&n>0&&w("div",{className:"hbc-total-votes gray-80 founders-cond f4 mh4 ttu"},`${n.toLocaleString("en-US")} votes`)))};R.displayName="BallotMeasuresBarChart",R.propTypes={candidates:a().arrayOf(_),callStatus:a().string,className:a().string,percentIn:a().oneOfType([a().string,a().number]),showOnlyWinnerBar:a().bool,showTotalNumberOfVotes:a().bool,totalVotes:a().number},R.defaultProps={candidates:null,callStatus:null,className:null,percentIn:null,showOnlyWinnerBar:!1,showTotalNumberOfVotes:!1,totalVotes:0};const W=R},"./node_modules/classnames/index.js":(x,y)=>{var i,v;/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(){"use strict";var h={}.hasOwnProperty;function a(){for(var d="",u=0;u<arguments.length;u++){var _=arguments[u];_&&(d=f(d,c(_)))}return d}function c(d){if(typeof d=="string"||typeof d=="number")return d;if(typeof d!="object")return"";if(Array.isArray(d))return a.apply(null,d);if(d.toString!==Object.prototype.toString&&!d.toString.toString().includes("[native code]"))return d.toString();var u="";for(var _ in d)h.call(d,_)&&d[_]&&(u=f(u,_));return u}function f(d,u){return u?d?d+" "+u:d+u:d}x.exports?(a.default=a,x.exports=a):(i=[],v=function(){return a}.apply(y,i),v!==void 0&&(x.exports=v))})()},"./node_modules/client-only/index.js":()=>{},"./node_modules/prop-types/factoryWithThrowingShims.js":(x,y,i)=>{"use strict";var v=i("./node_modules/prop-types/lib/ReactPropTypesSecret.js");function h(){}function a(){}a.resetWarningCache=h,x.exports=function(){function c(u,_,C,N,g,j){if(j!==v){var T=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw T.name="Invariant Violation",T}}c.isRequired=c;function f(){return c}var d={array:c,bigint:c,bool:c,func:c,number:c,object:c,string:c,symbol:c,any:c,arrayOf:f,element:c,elementType:c,instanceOf:f,node:c,objectOf:f,oneOf:f,oneOfType:f,shape:f,exact:f,checkPropTypes:a,resetWarningCache:h};return d.PropTypes=d,d}},"./node_modules/prop-types/index.js":(x,y,i)=>{if(!1)var v,h;else x.exports=i("./node_modules/prop-types/factoryWithThrowingShims.js")()},"./node_modules/prop-types/lib/ReactPropTypesSecret.js":x=>{"use strict";var y="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";x.exports=y},"./node_modules/styled-jsx/dist/index/index.js":(x,y,i)=>{var v=i("./node_modules/process/browser.js"),h=i("./node_modules/console-browserify/index.js");i("./node_modules/client-only/index.js");var a=i("./node_modules/next/dist/compiled/react/index.js");function c(s){return s&&typeof s=="object"&&"default"in s?s:{default:s}}var f=c(a);function d(s,n){for(var r=0;r<n.length;r++){var e=n[r];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(s,e.key,e)}}function u(s,n,r){return n&&d(s.prototype,n),r&&d(s,r),s}var _=typeof v<"u"&&v.env&&!0,C=function(s){return Object.prototype.toString.call(s)==="[object String]"},N=function(){function s(r){var e=r===void 0?{}:r,t=e.name,o=t===void 0?"stylesheet":t,l=e.optimizeForSpeed,p=l===void 0?_:l;g(C(o),"`name` must be a string"),this._name=o,this._deletedRulePlaceholder="#"+o+"-deleted-rule____{}",g(typeof p=="boolean","`optimizeForSpeed` must be a boolean"),this._optimizeForSpeed=p,this._serverSheet=void 0,this._tags=[],this._injected=!1,this._rulesCount=0;var E=typeof window<"u"&&document.querySelector('meta[property="csp-nonce"]');this._nonce=E?E.getAttribute("content"):null}var n=s.prototype;return n.setOptimizeForSpeed=function(e){g(typeof e=="boolean","`setOptimizeForSpeed` accepts a boolean"),g(this._rulesCount===0,"optimizeForSpeed cannot be when rules have already been inserted"),this.flush(),this._optimizeForSpeed=e,this.inject()},n.isOptimizeForSpeed=function(){return this._optimizeForSpeed},n.inject=function(){var e=this;if(g(!this._injected,"sheet already injected"),this._injected=!0,typeof window<"u"&&this._optimizeForSpeed){this._tags[0]=this.makeStyleTag(this._name),this._optimizeForSpeed="insertRule"in this.getSheet(),this._optimizeForSpeed||(_||h.warn("StyleSheet: optimizeForSpeed mode not supported falling back to standard mode."),this.flush(),this._injected=!0);return}this._serverSheet={cssRules:[],insertRule:function(t,o){return typeof o=="number"?e._serverSheet.cssRules[o]={cssText:t}:e._serverSheet.cssRules.push({cssText:t}),o},deleteRule:function(t){e._serverSheet.cssRules[t]=null}}},n.getSheetForTag=function(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]},n.getSheet=function(){return this.getSheetForTag(this._tags[this._tags.length-1])},n.insertRule=function(e,t){if(g(C(e),"`insertRule` accepts only strings"),typeof window>"u")return typeof t!="number"&&(t=this._serverSheet.cssRules.length),this._serverSheet.insertRule(e,t),this._rulesCount++;if(this._optimizeForSpeed){var o=this.getSheet();typeof t!="number"&&(t=o.cssRules.length);try{o.insertRule(e,t)}catch{return _||h.warn(`StyleSheet: illegal rule: 

`+e+`

See https://stackoverflow.com/q/20007992 for more info`),-1}}else{var l=this._tags[t];this._tags.push(this.makeStyleTag(this._name,e,l))}return this._rulesCount++},n.replaceRule=function(e,t){if(this._optimizeForSpeed||typeof window>"u"){var o=typeof window<"u"?this.getSheet():this._serverSheet;if(t.trim()||(t=this._deletedRulePlaceholder),!o.cssRules[e])return e;o.deleteRule(e);try{o.insertRule(t,e)}catch{_||h.warn(`StyleSheet: illegal rule: 

`+t+`

See https://stackoverflow.com/q/20007992 for more info`),o.insertRule(this._deletedRulePlaceholder,e)}}else{var l=this._tags[e];g(l,"old rule at index `"+e+"` not found"),l.textContent=t}return e},n.deleteRule=function(e){if(typeof window>"u"){this._serverSheet.deleteRule(e);return}if(this._optimizeForSpeed)this.replaceRule(e,"");else{var t=this._tags[e];g(t,"rule at index `"+e+"` not found"),t.parentNode.removeChild(t),this._tags[e]=null}},n.flush=function(){this._injected=!1,this._rulesCount=0,typeof window<"u"?(this._tags.forEach(function(e){return e&&e.parentNode.removeChild(e)}),this._tags=[]):this._serverSheet.cssRules=[]},n.cssRules=function(){var e=this;return typeof window>"u"?this._serverSheet.cssRules:this._tags.reduce(function(t,o){return o?t=t.concat(Array.prototype.map.call(e.getSheetForTag(o).cssRules,function(l){return l.cssText===e._deletedRulePlaceholder?null:l})):t.push(null),t},[])},n.makeStyleTag=function(e,t,o){t&&g(C(t),"makeStyleTag accepts only strings as second parameter");var l=document.createElement("style");this._nonce&&l.setAttribute("nonce",this._nonce),l.type="text/css",l.setAttribute("data-"+e,""),t&&l.appendChild(document.createTextNode(t));var p=document.head||document.getElementsByTagName("head")[0];return o?p.insertBefore(l,o):p.appendChild(l),l},u(s,[{key:"length",get:function(){return this._rulesCount}}]),s}();function g(s,n){if(!s)throw new Error("StyleSheet: "+n+".")}function j(s){for(var n=5381,r=s.length;r;)n=n*33^s.charCodeAt(--r);return n>>>0}var T=j,P=function(s){return s.replace(/\/style/gi,"\\/style")},S={};function b(s,n){if(!n)return"jsx-"+s;var r=String(n),e=s+r;return S[e]||(S[e]="jsx-"+T(s+"-"+r)),S[e]}function I(s,n){var r=/__jsx-style-dynamic-selector/g;typeof window>"u"&&(n=P(n));var e=s+n;return S[e]||(S[e]=n.replace(r,s)),S[e]}function w(s,n){return n===void 0&&(n={}),s.map(function(r){var e=r[0],t=r[1];return f.default.createElement("style",{id:"__"+e,key:"__"+e,nonce:n.nonce?n.nonce:void 0,dangerouslySetInnerHTML:{__html:t}})})}var M=function(){function s(r){var e=r===void 0?{}:r,t=e.styleSheet,o=t===void 0?null:t,l=e.optimizeForSpeed,p=l===void 0?!1:l;this._sheet=o||new N({name:"styled-jsx",optimizeForSpeed:p}),this._sheet.inject(),o&&typeof p=="boolean"&&(this._sheet.setOptimizeForSpeed(p),this._optimizeForSpeed=this._sheet.isOptimizeForSpeed()),this._fromServer=void 0,this._indices={},this._instancesCounts={}}var n=s.prototype;return n.add=function(e){var t=this;this._optimizeForSpeed===void 0&&(this._optimizeForSpeed=Array.isArray(e.children),this._sheet.setOptimizeForSpeed(this._optimizeForSpeed),this._optimizeForSpeed=this._sheet.isOptimizeForSpeed()),typeof window<"u"&&!this._fromServer&&(this._fromServer=this.selectFromServer(),this._instancesCounts=Object.keys(this._fromServer).reduce(function(B,D){return B[D]=0,B},{}));var o=this.getIdAndRules(e),l=o.styleId,p=o.rules;if(l in this._instancesCounts){this._instancesCounts[l]+=1;return}var E=p.map(function(B){return t._sheet.insertRule(B)}).filter(function(B){return B!==-1});this._indices[l]=E,this._instancesCounts[l]=1},n.remove=function(e){var t=this,o=this.getIdAndRules(e).styleId;if(k(o in this._instancesCounts,"styleId: `"+o+"` not found"),this._instancesCounts[o]-=1,this._instancesCounts[o]<1){var l=this._fromServer&&this._fromServer[o];l?(l.parentNode.removeChild(l),delete this._fromServer[o]):(this._indices[o].forEach(function(p){return t._sheet.deleteRule(p)}),delete this._indices[o]),delete this._instancesCounts[o]}},n.update=function(e,t){this.add(t),this.remove(e)},n.flush=function(){this._sheet.flush(),this._sheet.inject(),this._fromServer=void 0,this._indices={},this._instancesCounts={}},n.cssRules=function(){var e=this,t=this._fromServer?Object.keys(this._fromServer).map(function(l){return[l,e._fromServer[l]]}):[],o=this._sheet.cssRules();return t.concat(Object.keys(this._indices).map(function(l){return[l,e._indices[l].map(function(p){return o[p].cssText}).join(e._optimizeForSpeed?"":`
`)]}).filter(function(l){return!!l[1]}))},n.styles=function(e){return w(this.cssRules(),e)},n.getIdAndRules=function(e){var t=e.children,o=e.dynamic,l=e.id;if(o){var p=b(l,o);return{styleId:p,rules:Array.isArray(t)?t.map(function(E){return I(p,E)}):[I(p,t)]}}return{styleId:b(l),rules:Array.isArray(t)?t:[t]}},n.selectFromServer=function(){var e=Array.prototype.slice.call(document.querySelectorAll('[id^="__jsx-"]'));return e.reduce(function(t,o){var l=o.id.slice(2);return t[l]=o,t},{})},s}();function k(s,n){if(!s)throw new Error("StyleSheetRegistry: "+n+".")}var R=a.createContext(null);R.displayName="StyleSheetContext";function W(){return new M}function F(s){var n=s.registry,r=s.children,e=a.useContext(R),t=a.useState(function(){return e||n||W()}),o=t[0];return f.default.createElement(R.Provider,{value:o},r)}function m(){return a.useContext(R)}var z=f.default.useInsertionEffect||f.default.useLayoutEffect,O=typeof window<"u"?W():void 0;function A(s){var n=O||m();return n?typeof window>"u"?(n.add(s),null):(z(function(){return n.add(s),function(){n.remove(s)}},[s.id,String(s.dynamic)]),null):null}A.dynamic=function(s){return s.map(function(n){var r=n[0],e=n[1];return b(r,e)}).join(" ")},y.StyleRegistry=F,y.createStyleRegistry=W,y.style=A,y.useStyleRegistry=m},"./node_modules/styled-jsx/style.js":(x,y,i)=>{x.exports=i("./node_modules/styled-jsx/dist/index/index.js").style}}]);
