(globalThis.webpackChunkfirecracker=globalThis.webpackChunkfirecracker||[]).push([[4335,5452,3071,690,8309,4976,1808,9427,7046],{"./components/PrimaryDistrictResultsModule/PrimaryDistrictResultsModules.stories.js":(S,o,e)=>{"use strict";e.r(o),e.d(o,{Table:()=>h,__namedExportsOrder:()=>m,default:()=>$});var _=e("./node_modules/next/dist/compiled/react/index.js"),y=e("./node_modules/lodash.get/index.js"),n=e.n(y),s=e("./components/Module.js"),u=e("./components/ScrollableTable/Percent/index.js"),r=e("./components/ScrollableTable/Number/index.js"),f=e("./components/ScrollableTable/Column/index.js"),x=e("./components/ScrollableTable/FillerColumn/index.js"),v=e("./components/ScrollableTable/CellList/index.js"),P=e("./components/ScrollableTable/CellListHeading/index.js"),E=e("./components/ScrollableTable/CellListItems/index.js"),R=e("./components/ScrollableTable/CellListItem/index.js"),b=e("./components/ScrollableTable/Checkmark/index.js"),I=e("./components/ScrollableTable/ColumnGroup/index.js"),D=e("./components/ScrollableTable/CandidateName/index.js"),W=e("./components/ScrollableTable/ColorSquare/index.js"),N=e("./node_modules/styled-jsx/style.js"),G=e.n(N),a=_.createElement;const C=({children:i})=>a(_.Fragment,null,a(G(),{id:"2214391753"},[".split-grid{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;width:100%;}",".split-grid>.column-group:nth-child(1),.split-grid>.column-group:nth-child(3){-webkit-flex-basis:45%;-ms-flex-preferred-size:45%;flex-basis:45%;}",".split-grid>.column-group:nth-child(2){-webkit-flex-basis:10%;-ms-flex-preferred-size:10%;flex-basis:10%;}",".split-grid .column-group .column:first-child{-webkit-box-flex:1;-webkit-flex-grow:1;-ms-flex-positive:1;flex-grow:1;}",".split-grid .column-group .column:nth-child(3){-webkit-box-flex:0;-webkit-flex-grow:0;-ms-flex-positive:0;flex-grow:0;}","@media screen and (max-width:757px){.split-grid{-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}.split-grid>.column-group:nth-child(2){display:none;}.split-grid>.column-group:nth-child(3) ul{border-top:none;margin-top:0;}.split-grid .column-group .column:nth-child(1){width:60%;}.split-grid .column-group .column:nth-child(2),.split-grid .column-group .column:nth-child(3){width:20%;}}"]),a("div",{"data-testid":"split-grid",className:"jsx-2214391753 split-grid"},i));var c=_.createElement;const T=({percentOfExpectedVoteReceived:i,columns:t=[],hideModule:l})=>l||!t.length?null:c(s.default,null,c("div",{style:{maxWidth:"860px"},"data-testid":"primary-district-results-module"},c("div",{className:"tr founders-cond f5 ttu mv3"},i,"% expected vote in"),c(C,null,t.map((d,p)=>c(_.Fragment,{key:"columns"},c(I.default,null,c(f.default,null,c(v.default,null,c(P.default,{showOnMobile:p===0},"Candidate")),c(E.default,{minWidth:110},d.map(g=>{const A=n()(g,"firstName")||"",L=n()(g,"lastName")||"",z=n()(g,"isWinner")||!1,H=n()(g,"partyColor")||"#fff";return c(R.default,{key:`candidate-column__${A}-${L}`,hasBorder:!1},c("div",{className:"df items-center"},c(W.default,{color:H}),c(D.default,{firstName:A,lastName:L}),z&&c(b.default,{width:16})))}))),c(f.default,null,c(v.default,null,c(P.default,{alignment:"right",showOnMobile:p===0},"Percent")),c(E.default,{minWidth:80},d.map(g=>{const A=n()(g,"lastName")||"",L=n()(g,"totalPercentReceived")||0;return c(R.default,{key:`candidate-column__${A}-${L}`,hasBorder:!1,alignment:"right"},c("div",{className:"f4 founders-cond mr4"},c(u.default,{value:L})))}))),c(f.default,null,c(v.default,null,c(P.default,{alignment:"right",showOnMobile:p===0},"Votes")),c(E.default,{minWidth:80},d.map(g=>{const A=n()(g,"lastName")||"",L=n()(g,"totalVotesReceived")||0;return c(R.default,{key:`candidate-column__${A}-${L}`,alignment:"right",hasBorder:!1},c("div",{className:"number f2 tr"},c(r.default,{value:L})))})))),p===0&&c(I.default,null,c(x.default,{numberOfCellListItems:d.length,hasBorder:!1})))))));T.displayName="PrimaryDistrictResultsModule";const M=T,B=JSON.parse('{"percentIn":100,"columns":[[{"firstName":"Peter","lastName":"Thurston","isGain":false,"isIncumbent":false,"isWinner":true,"partyAbbreviation":"Dem","partyColor":"#308CEF","totalPercentReceived":69.5,"totalVotesReceived":237988},{"firstName":"Barry","lastName":"Sharief","isGain":false,"isIncumbent":false,"isWinner":false,"partyAbbreviation":"Dem","partyColor":"#C00594","totalPercentReceived":30.4,"totalVotesReceived":104194},{"firstName":"S","lastName":"Cherfilus-McCormick","isGain":false,"isIncumbent":false,"isWinner":false,"partyAbbreviation":"Dem","partyColor":"#84AD48","totalPercentReceived":6.7,"totalVotesReceived":5787},{"firstName":"D","lastName":"Holness","isGain":false,"isIncumbent":false,"isWinner":false,"partyAbbreviation":"Dem","partyColor":"#F96419","totalPercentReceived":6.7,"totalVotesReceived":5787},{"firstName":"E","lastName":"Dowling","isGain":false,"isIncumbent":false,"isWinner":false,"partyAbbreviation":"Dem","partyColor":"#7D78C3","totalPercentReceived":6.7,"totalVotesReceived":5787},{"firstName":"Blake","lastName":"DuBose","isGain":false,"isIncumbent":false,"isWinner":false,"partyAbbreviation":"Dem","partyColor":"#14866D","totalPercentReceived":6.7,"totalVotesReceived":5787}],[{"firstName":"O","lastName":"Hardy","isGain":false,"isIncumbent":false,"isWinner":false,"partyAbbreviation":"Dem","partyColor":"#730069","totalPercentReceived":6.7,"totalVotesReceived":5787},{"firstName":"P","lastName":"Jackson","isGain":false,"isIncumbent":false,"isWinner":false,"partyAbbreviation":"Dem","partyColor":"#EEB900","totalPercentReceived":6.7,"totalVotesReceived":5787},{"firstName":"P","lastName":"Taylor","isGain":false,"isIncumbent":false,"isWinner":false,"partyAbbreviation":"Dem","partyColor":"#50CDB1","totalPercentReceived":6.7,"totalVotesReceived":5787},{"firstName":"I","lastName":"Siddiqui","isGain":false,"isIncumbent":false,"isWinner":false,"partyAbbreviation":"Dem","partyColor":"#68A9EF","totalPercentReceived":6.7,"totalVotesReceived":5787},{"firstName":"E","lastName":"Morel","isGain":false,"isIncumbent":false,"isWinner":false,"partyAbbreviation":"Dem","partyColor":"#113F75","totalPercentReceived":6.7,"totalVotesReceived":5787}]]}');var F=_.createElement;const $={component:M,title:"Features/Results Tables/State/House (2021)"},h=()=>F(M,{columns:B.columns,percentOfExpectedVoteReceived:B.percentIn});h.displayName="Table",h.storyName="House (2021)";const m=["Table"]},"./components/Module.js":(S,o,e)=>{"use strict";e.r(o),e.d(o,{default:()=>f});var _=e("./node_modules/next/dist/compiled/react/index.js"),y=e("./node_modules/classnames/index.js"),n=e.n(y),s=e("./components/withErrorBoundary.js"),u=_.createElement;const r=({children:x,className:v,id:P=null,testId:E=null})=>u("div",{className:n()("module mb9",v),id:P,"data-testid":E},x);r.displayName="Module";const f=(0,s.default)(r)},"./components/ScrollableTable/CandidateName/index.js":(S,o,e)=>{"use strict";e.r(o),e.d(o,{default:()=>r});var _=e("./node_modules/styled-jsx/style.js"),y=e.n(_),n=e("./node_modules/next/dist/compiled/react/index.js"),s=n.createElement;const r=({firstName:f,lastName:x})=>{if(typeof f!="string"||typeof x!="string")return null;let v;return f?v=`${f.charAt(0)}. ${x}`:v=x,s(n.Fragment,null,s(y(),{id:"2671302789"},["div.cn.jsx-2671302789{padding:0 4px 0 6px;}"]),s("div",{className:"jsx-2671302789 publico-txt f3 cn"},v))}},"./components/ScrollableTable/CellList/index.js":(S,o,e)=>{"use strict";e.r(o),e.d(o,{default:()=>s});var _=e("./node_modules/next/dist/compiled/react/index.js"),y=_.createElement;const n=({children:u,testId:r=null})=>y("div",{className:"cell-list","data-testid":r},u);n.displayName="CellList";const s=n},"./components/ScrollableTable/CellListHeading/index.js":(S,o,e)=>{"use strict";e.r(o),e.d(o,{default:()=>x});var _=e("./node_modules/styled-jsx/style.js"),y=e.n(_),n=e("./node_modules/next/dist/compiled/react/index.js"),s=e("./node_modules/classnames/index.js"),u=e.n(s),r=n.createElement;const x=({alignment:v="left",showOnMobile:P=!1,allCaps:E=!1,fontClass:R="f3",height:b="20px",margin:I=null,children:D})=>{const W=u()({tr:v==="right",tc:v==="center",tl:v==="left",ttu:E,"dn db-m":!P,"with-margin":I}),N=I||"0";return r(n.Fragment,null,r(y(),{id:"3402969960",dynamic:[b,N]},[`.cell-list-heading.__jsx-style-dynamic-selector{height:${b};}`,`.with-margin.__jsx-style-dynamic-selector{margin:${N};}`]),r("div",{className:y().dynamic([["3402969960",[b,N]]])+` cell-list-heading founders-mono gray-80 ${R} ws-nowrap ${W}`},D))}},"./components/ScrollableTable/CellListItem/index.js":(S,o,e)=>{"use strict";e.r(o),e.d(o,{default:()=>x});var _=e("./node_modules/styled-jsx/style.js"),y=e.n(_),n=e("./node_modules/next/dist/compiled/react/index.js"),s=e("./node_modules/classnames/index.js"),u=e.n(s),r=n.createElement;const x=({alignment:v="left",className:P,hasBorder:E=!0,children:R,mediumBreakpoint:b=!1})=>{const I=u()({"justify-end":v==="right","justify-center":v==="center","justify-start":v==="left"},P),D=b?"1000px":"758px";return r(n.Fragment,null,r(y(),{id:"1258979055",dynamic:[E?"1px solid #ebebeb":"none",D]},[`li.__jsx-style-dynamic-selector{color:#2a2a2a;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;height:40px;border-bottom:${E?"1px solid #ebebeb":"none"};padding:0 0 0 0;}`,`@media screen and (min-width:${D}){li.__jsx-style-dynamic-selector{height:28px;}}`]),r("li",{"data-testid":"cell-list__item",className:y().dynamic([["1258979055",[E?"1px solid #ebebeb":"none",D]]])+` founders-mono f3 ${I}`},R))}},"./components/ScrollableTable/CellListItems/index.js":(S,o,e)=>{"use strict";e.r(o),e.d(o,{default:()=>P});var _=e("./node_modules/styled-jsx/style.js"),y=e.n(_),n=e("./node_modules/next/dist/compiled/react/index.js"),s=e("./node_modules/classnames/index.js"),u=e.n(s),r=e("./node_modules/prop-types/index.js"),f=e.n(r),x=n.createElement;const v=({className:E,minWidth:R,mediumMinWidth:b,children:I})=>{const D=b||R;return x(n.Fragment,null,x(y(),{id:"4014208607",dynamic:[R,D]},[`ul.__jsx-style-dynamic-selector{list-style:none;margin:0 0 2px;padding:3px 0 0;min-width:${R}px;border-top:1px solid #ccc;margin-top:2px;}`,`@media screen and (min-width:1000px){ul.__jsx-style-dynamic-selector{min-width:${D}px;}}`]),x("ul",{className:y().dynamic([["4014208607",[R,D]]])+" "+(u()("cell-list-items",E)||"")},I))};v.propTypes={className:f().string,minWidth:f().oneOfType([f().string,f().number]),mediumMinWidth:f().oneOfType([f().string,f().number]),children:f().node},v.defaultProps={className:null,minWidth:75,mediumMinWidth:null,children:null};const P=v},"./components/ScrollableTable/Checkmark/index.js":(S,o,e)=>{"use strict";e.r(o),e.d(o,{default:()=>s});var _=e("./node_modules/next/dist/compiled/react/index.js"),y=_.createElement;const n=({width:u=24,className:r})=>{const f=u-5;return y("svg",{className:r,width:u,height:f,viewBox:"0 0 24 20",fill:"none",xmlns:"http://www.w3.org/2000/svg"},y("rect",{width:"24",height:"20",fill:"#FFD60C"}),y("path",{d:"M4 9.24247L9.78523 15L19.8333 5",stroke:"#2A2A2A",strokeWidth:"3"}))};n.displayName="Checkmark";const s=n},"./components/ScrollableTable/ColorSquare/index.js":(S,o,e)=>{"use strict";e.r(o),e.d(o,{default:()=>x});var _=e("./node_modules/styled-jsx/style.js"),y=e.n(_),n=e("./node_modules/next/dist/compiled/react/index.js"),s=e("./node_modules/classnames/index.js"),u=e.n(s),r=n.createElement;const x=({bgClass:v,color:P,width:E=15,text:R})=>r(n.Fragment,null,r(y(),{id:"15657509",dynamic:[v?"":`background: ${P||"#ebebeb"};`,E,E,E]},[`div.__jsx-style-dynamic-selector{${v?"":`background: ${P||"#ebebeb"};`} height:${E}px;width:${E}px;line-height:${E}px;}`]),r("div",{className:y().dynamic([["15657509",[v?"":`background: ${P||"#ebebeb"};`,E,E,E]]])+" "+(u()(v,"color-square f1 flex-shrink-0 dib tc white")||"")},R))},"./components/ScrollableTable/Column/index.js":(S,o,e)=>{"use strict";e.r(o),e.d(o,{default:()=>r});var _=e("./node_modules/styled-jsx/style.js"),y=e.n(_),n=e("./node_modules/next/dist/compiled/react/index.js"),s=n.createElement;const r=({leftBorder:f,rightBorder:x,hideOnSmall:v,hideOnMedium:P,width:E,children:R,className:b=""})=>{const W=P?P?"dn db-l":"":v?"dn db-m":"";return s(n.Fragment,null,s(y(),{id:"1923281003",dynamic:[f?"border-left: 1px solid #f2f2f2;":"",x?"border-right: 1px solid #f2f2f2;":"",E?`width: ${E}px;`:""]},[`div.__jsx-style-dynamic-selector{${f?"border-left: 1px solid #f2f2f2;":""} ${x?"border-right: 1px solid #f2f2f2;":""} ${E?`width: ${E}px;`:""};}`]),s("div",{className:y().dynamic([["1923281003",[f?"border-left: 1px solid #f2f2f2;":"",x?"border-right: 1px solid #f2f2f2;":"",E?`width: ${E}px;`:""]]])+` column ${W} ${b}`},R))}},"./components/ScrollableTable/ColumnGroup/index.js":(S,o,e)=>{"use strict";e.r(o),e.d(o,{default:()=>r});var _=e("./node_modules/styled-jsx/style.js"),y=e.n(_),n=e("./node_modules/next/dist/compiled/react/index.js"),s=n.createElement;const r=({children:f})=>s(n.Fragment,null,s(y(),{id:"3384420229"},[".column-group.jsx-3384420229{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}",".column-group.jsx-3384420229>*:last-child{-webkit-box-flex:1;-webkit-flex-grow:1;-ms-flex-positive:1;flex-grow:1;}"]),s("div",{className:"jsx-3384420229 column-group"},f))},"./components/ScrollableTable/FillerColumn/index.js":(S,o,e)=>{"use strict";e.r(o),e.d(o,{default:()=>v});var _=e("./node_modules/next/dist/compiled/react/index.js"),y=e("./components/ScrollableTable/Column/index.js"),n=e("./components/ScrollableTable/CellList/index.js"),s=e("./components/ScrollableTable/CellListHeading/index.js"),u=e("./components/ScrollableTable/CellListItem/index.js"),r=e("./components/ScrollableTable/CellListItems/index.js"),f=_.createElement;const x=({numberOfCellListItems:P=0,minWidth:E=0,hasBorder:R=!0,hasHeading:b=!0,shouldExpand:I=!1,mediumBreakpoint:D=!1})=>{const W=Array.from(Array(P).keys());return f(y.default,{className:`${I?"flex-grow-1":""}`},f(n.default,null,b&&f(s.default,null),f(r.default,{minWidth:E},W.map((N,G)=>f(u.default,{mediumBreakpoint:D,key:G,hasBorder:R})))))};x.displayName="FillerColumn";const v=x},"./components/ScrollableTable/Number/index.js":(S,o,e)=>{"use strict";e.r(o),e.d(o,{default:()=>P});var _=e("./node_modules/styled-jsx/style.js"),y=e.n(_),n=e("./node_modules/next/dist/compiled/react/index.js"),s=e("./node_modules/prop-types/index.js"),u=e.n(s),r=e("./node_modules/d3-format/src/defaultLocale.js"),f=n.createElement;const x=(0,r.format)(","),v=({value:E,suffix:R})=>f(n.Fragment,null,f(y(),{id:"3437879980"},[".number.jsx-3437879980{color:#555;width:100%;}"]),f("div",{className:"jsx-3437879980 dib number f2 founders-mono"},x(E),R)),P=v;v.defaultProps={suffix:null},v.propTypes={value:u().number.isRequired,suffix:u().string}},"./components/ScrollableTable/Percent/index.js":(S,o,e)=>{"use strict";e.r(o),e.d(o,{default:()=>r});var _=e("./node_modules/styled-jsx/style.js"),y=e.n(_),n=e("./node_modules/next/dist/compiled/react/index.js"),s=n.createElement;const r=({value:f})=>s(n.Fragment,null,s(y(),{id:"998961378"},[".percent.jsx-998961378{display:inline-block;}"]),s("span",{className:"jsx-998961378 percent"},f,"%"))},"./components/withErrorBoundary.js":(S,o,e)=>{"use strict";e.r(o),e.d(o,{default:()=>x});var _=e("./node_modules/next/dist/compiled/react/index.js"),y=e("./node_modules/console-browserify/index.js"),n=_.createElement;class s extends _.Component{constructor(P){super(P),this.state={hasError:!1}}static getDerivedStateFromError(){return{hasError:!0}}componentDidCatch(P,E){y.error(P,E)}render(){return this.state.hasError?n("div",{className:"pv4 f2 founders-mono"},"Something went wrong. Please try again later."):this.props.children}}s.displayName="ErrorBoundary";const u=s;var r=_.createElement;const x=v=>P=>r(u,null,r(v,P))},"./node_modules/classnames/index.js":(S,o)=>{var e,_;/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(){"use strict";var y={}.hasOwnProperty;function n(){for(var r="",f=0;f<arguments.length;f++){var x=arguments[f];x&&(r=u(r,s(x)))}return r}function s(r){if(typeof r=="string"||typeof r=="number")return r;if(typeof r!="object")return"";if(Array.isArray(r))return n.apply(null,r);if(r.toString!==Object.prototype.toString&&!r.toString.toString().includes("[native code]"))return r.toString();var f="";for(var x in r)y.call(r,x)&&r[x]&&(f=u(f,x));return f}function u(r,f){return f?r?r+" "+f:r+f:r}S.exports?(n.default=n,S.exports=n):(e=[],_=function(){return n}.apply(o,e),_!==void 0&&(S.exports=_))})()},"./node_modules/client-only/index.js":()=>{},"./node_modules/d3-format/src/defaultLocale.js":(S,o,e)=>{"use strict";e.r(o),e.d(o,{default:()=>G,format:()=>W,formatPrefix:()=>N});var _=e("./node_modules/d3-format/src/exponent.js");function y(a,O){return function(C,c){for(var T=C.length,M=[],B=0,F=a[0],$=0;T>0&&F>0&&($+F+1>c&&(F=Math.max(1,c-$)),M.push(C.substring(T-=F,T+F)),!(($+=F+1)>c));)F=a[B=(B+1)%a.length];return M.reverse().join(O)}}function n(a){return function(O){return O.replace(/[0-9]/g,function(C){return a[+C]})}}var s=e("./node_modules/d3-format/src/formatSpecifier.js");function u(a){e:for(var O=a.length,C=1,c=-1,T;C<O;++C)switch(a[C]){case".":c=T=C;break;case"0":c===0&&(c=C),T=C;break;default:if(!+a[C])break e;c>0&&(c=0);break}return c>0?a.slice(0,c)+a.slice(T+1):a}var r=e("./node_modules/d3-format/src/formatDecimal.js"),f;function x(a,O){var C=(0,r.formatDecimalParts)(a,O);if(!C)return a+"";var c=C[0],T=C[1],M=T-(f=Math.max(-8,Math.min(8,Math.floor(T/3)))*3)+1,B=c.length;return M===B?c:M>B?c+new Array(M-B+1).join("0"):M>0?c.slice(0,M)+"."+c.slice(M):"0."+new Array(1-M).join("0")+(0,r.formatDecimalParts)(a,Math.max(0,O+M-1))[0]}function v(a,O){var C=(0,r.formatDecimalParts)(a,O);if(!C)return a+"";var c=C[0],T=C[1];return T<0?"0."+new Array(-T).join("0")+c:c.length>T+1?c.slice(0,T+1)+"."+c.slice(T+1):c+new Array(T-c.length+2).join("0")}const P={"%":(a,O)=>(a*100).toFixed(O),b:a=>Math.round(a).toString(2),c:a=>a+"",d:r.default,e:(a,O)=>a.toExponential(O),f:(a,O)=>a.toFixed(O),g:(a,O)=>a.toPrecision(O),o:a=>Math.round(a).toString(8),p:(a,O)=>v(a*100,O),r:v,s:x,X:a=>Math.round(a).toString(16).toUpperCase(),x:a=>Math.round(a).toString(16)};function E(a){return a}var R=Array.prototype.map,b=["y","z","a","f","p","n","\xB5","m","","k","M","G","T","P","E","Z","Y"];function I(a){var O=a.grouping===void 0||a.thousands===void 0?E:y(R.call(a.grouping,Number),a.thousands+""),C=a.currency===void 0?"":a.currency[0]+"",c=a.currency===void 0?"":a.currency[1]+"",T=a.decimal===void 0?".":a.decimal+"",M=a.numerals===void 0?E:n(R.call(a.numerals,String)),B=a.percent===void 0?"%":a.percent+"",F=a.minus===void 0?"\u2212":a.minus+"",$=a.nan===void 0?"NaN":a.nan+"";function h(i){i=(0,s.default)(i);var t=i.fill,l=i.align,d=i.sign,p=i.symbol,g=i.zero,A=i.width,L=i.comma,z=i.precision,H=i.trim,U=i.type;U==="n"?(L=!0,U="g"):P[U]||(z===void 0&&(z=12),H=!0,U="g"),(g||t==="0"&&l==="=")&&(g=!0,t="0",l="=");var ee=p==="$"?C:p==="#"&&/[boxX]/.test(U)?"0"+U.toLowerCase():"",te=p==="$"?c:/[%p]/.test(U)?B:"",Q=P[U],ne=/[defgprs%]/.test(U);z=z===void 0?6:/[gprs]/.test(U)?Math.max(1,Math.min(21,z)):Math.max(0,Math.min(20,z));function k(j){var V=ee,K=te,X,q,J;if(U==="c")K=Q(j)+K,j="";else{j=+j;var Y=j<0||1/j<0;if(j=isNaN(j)?$:Q(Math.abs(j),z),H&&(j=u(j)),Y&&+j==0&&d!=="+"&&(Y=!1),V=(Y?d==="("?d:F:d==="-"||d==="("?"":d)+V,K=(U==="s"?b[8+f/3]:"")+K+(Y&&d==="("?")":""),ne){for(X=-1,q=j.length;++X<q;)if(J=j.charCodeAt(X),48>J||J>57){K=(J===46?T+j.slice(X+1):j.slice(X))+K,j=j.slice(0,X);break}}}L&&!g&&(j=O(j,1/0));var Z=V.length+j.length+K.length,w=Z<A?new Array(A-Z+1).join(t):"";switch(L&&g&&(j=O(w+j,w.length?A-K.length:1/0),w=""),l){case"<":j=V+j+K+w;break;case"=":j=V+w+j+K;break;case"^":j=w.slice(0,Z=w.length>>1)+V+j+K+w.slice(Z);break;default:j=w+V+j+K;break}return M(j)}return k.toString=function(){return i+""},k}function m(i,t){var l=h((i=(0,s.default)(i),i.type="f",i)),d=Math.max(-8,Math.min(8,Math.floor((0,_.default)(t)/3)))*3,p=Math.pow(10,-d),g=b[8+d/3];return function(A){return l(p*A)+g}}return{format:h,formatPrefix:m}}var D,W,N;G({thousands:",",grouping:[3],currency:["$",""]});function G(a){return D=I(a),W=D.format,N=D.formatPrefix,D}},"./node_modules/d3-format/src/exponent.js":(S,o,e)=>{"use strict";e.r(o),e.d(o,{default:()=>y});var _=e("./node_modules/d3-format/src/formatDecimal.js");function y(n){return n=(0,_.formatDecimalParts)(Math.abs(n)),n?n[1]:NaN}},"./node_modules/d3-format/src/formatDecimal.js":(S,o,e)=>{"use strict";e.r(o),e.d(o,{default:()=>_,formatDecimalParts:()=>y});function _(n){return Math.abs(n=Math.round(n))>=1e21?n.toLocaleString("en").replace(/,/g,""):n.toString(10)}function y(n,s){if((u=(n=s?n.toExponential(s-1):n.toExponential()).indexOf("e"))<0)return null;var u,r=n.slice(0,u);return[r.length>1?r[0]+r.slice(2):r,+n.slice(u+1)]}},"./node_modules/d3-format/src/formatSpecifier.js":(S,o,e)=>{"use strict";e.r(o),e.d(o,{FormatSpecifier:()=>n,default:()=>y});var _=/^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;function y(s){if(!(u=_.exec(s)))throw new Error("invalid format: "+s);var u;return new n({fill:u[1],align:u[2],sign:u[3],symbol:u[4],zero:u[5],width:u[6],comma:u[7],precision:u[8]&&u[8].slice(1),trim:u[9],type:u[10]})}y.prototype=n.prototype;function n(s){this.fill=s.fill===void 0?" ":s.fill+"",this.align=s.align===void 0?">":s.align+"",this.sign=s.sign===void 0?"-":s.sign+"",this.symbol=s.symbol===void 0?"":s.symbol+"",this.zero=!!s.zero,this.width=s.width===void 0?void 0:+s.width,this.comma=!!s.comma,this.precision=s.precision===void 0?void 0:+s.precision,this.trim=!!s.trim,this.type=s.type===void 0?"":s.type+""}n.prototype.toString=function(){return this.fill+this.align+this.sign+this.symbol+(this.zero?"0":"")+(this.width===void 0?"":Math.max(1,this.width|0))+(this.comma?",":"")+(this.precision===void 0?"":"."+Math.max(0,this.precision|0))+(this.trim?"~":"")+this.type}},"./node_modules/prop-types/factoryWithThrowingShims.js":(S,o,e)=>{"use strict";var _=e("./node_modules/prop-types/lib/ReactPropTypesSecret.js");function y(){}function n(){}n.resetWarningCache=y,S.exports=function(){function s(f,x,v,P,E,R){if(R!==_){var b=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw b.name="Invariant Violation",b}}s.isRequired=s;function u(){return s}var r={array:s,bigint:s,bool:s,func:s,number:s,object:s,string:s,symbol:s,any:s,arrayOf:u,element:s,elementType:s,instanceOf:u,node:s,objectOf:u,oneOf:u,oneOfType:u,shape:u,exact:u,checkPropTypes:n,resetWarningCache:y};return r.PropTypes=r,r}},"./node_modules/prop-types/index.js":(S,o,e)=>{if(!1)var _,y;else S.exports=e("./node_modules/prop-types/factoryWithThrowingShims.js")()},"./node_modules/prop-types/lib/ReactPropTypesSecret.js":S=>{"use strict";var o="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";S.exports=o},"./node_modules/styled-jsx/dist/index/index.js":(S,o,e)=>{var _=e("./node_modules/process/browser.js"),y=e("./node_modules/console-browserify/index.js");e("./node_modules/client-only/index.js");var n=e("./node_modules/next/dist/compiled/react/index.js");function s(h){return h&&typeof h=="object"&&"default"in h?h:{default:h}}var u=s(n);function r(h,m){for(var i=0;i<m.length;i++){var t=m[i];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(h,t.key,t)}}function f(h,m,i){return m&&r(h.prototype,m),i&&r(h,i),h}var x=typeof _<"u"&&_.env&&!0,v=function(h){return Object.prototype.toString.call(h)==="[object String]"},P=function(){function h(i){var t=i===void 0?{}:i,l=t.name,d=l===void 0?"stylesheet":l,p=t.optimizeForSpeed,g=p===void 0?x:p;E(v(d),"`name` must be a string"),this._name=d,this._deletedRulePlaceholder="#"+d+"-deleted-rule____{}",E(typeof g=="boolean","`optimizeForSpeed` must be a boolean"),this._optimizeForSpeed=g,this._serverSheet=void 0,this._tags=[],this._injected=!1,this._rulesCount=0;var A=typeof window<"u"&&document.querySelector('meta[property="csp-nonce"]');this._nonce=A?A.getAttribute("content"):null}var m=h.prototype;return m.setOptimizeForSpeed=function(t){E(typeof t=="boolean","`setOptimizeForSpeed` accepts a boolean"),E(this._rulesCount===0,"optimizeForSpeed cannot be when rules have already been inserted"),this.flush(),this._optimizeForSpeed=t,this.inject()},m.isOptimizeForSpeed=function(){return this._optimizeForSpeed},m.inject=function(){var t=this;if(E(!this._injected,"sheet already injected"),this._injected=!0,typeof window<"u"&&this._optimizeForSpeed){this._tags[0]=this.makeStyleTag(this._name),this._optimizeForSpeed="insertRule"in this.getSheet(),this._optimizeForSpeed||(x||y.warn("StyleSheet: optimizeForSpeed mode not supported falling back to standard mode."),this.flush(),this._injected=!0);return}this._serverSheet={cssRules:[],insertRule:function(l,d){return typeof d=="number"?t._serverSheet.cssRules[d]={cssText:l}:t._serverSheet.cssRules.push({cssText:l}),d},deleteRule:function(l){t._serverSheet.cssRules[l]=null}}},m.getSheetForTag=function(t){if(t.sheet)return t.sheet;for(var l=0;l<document.styleSheets.length;l++)if(document.styleSheets[l].ownerNode===t)return document.styleSheets[l]},m.getSheet=function(){return this.getSheetForTag(this._tags[this._tags.length-1])},m.insertRule=function(t,l){if(E(v(t),"`insertRule` accepts only strings"),typeof window>"u")return typeof l!="number"&&(l=this._serverSheet.cssRules.length),this._serverSheet.insertRule(t,l),this._rulesCount++;if(this._optimizeForSpeed){var d=this.getSheet();typeof l!="number"&&(l=d.cssRules.length);try{d.insertRule(t,l)}catch{return x||y.warn(`StyleSheet: illegal rule: 

`+t+`

See https://stackoverflow.com/q/20007992 for more info`),-1}}else{var p=this._tags[l];this._tags.push(this.makeStyleTag(this._name,t,p))}return this._rulesCount++},m.replaceRule=function(t,l){if(this._optimizeForSpeed||typeof window>"u"){var d=typeof window<"u"?this.getSheet():this._serverSheet;if(l.trim()||(l=this._deletedRulePlaceholder),!d.cssRules[t])return t;d.deleteRule(t);try{d.insertRule(l,t)}catch{x||y.warn(`StyleSheet: illegal rule: 

`+l+`

See https://stackoverflow.com/q/20007992 for more info`),d.insertRule(this._deletedRulePlaceholder,t)}}else{var p=this._tags[t];E(p,"old rule at index `"+t+"` not found"),p.textContent=l}return t},m.deleteRule=function(t){if(typeof window>"u"){this._serverSheet.deleteRule(t);return}if(this._optimizeForSpeed)this.replaceRule(t,"");else{var l=this._tags[t];E(l,"rule at index `"+t+"` not found"),l.parentNode.removeChild(l),this._tags[t]=null}},m.flush=function(){this._injected=!1,this._rulesCount=0,typeof window<"u"?(this._tags.forEach(function(t){return t&&t.parentNode.removeChild(t)}),this._tags=[]):this._serverSheet.cssRules=[]},m.cssRules=function(){var t=this;return typeof window>"u"?this._serverSheet.cssRules:this._tags.reduce(function(l,d){return d?l=l.concat(Array.prototype.map.call(t.getSheetForTag(d).cssRules,function(p){return p.cssText===t._deletedRulePlaceholder?null:p})):l.push(null),l},[])},m.makeStyleTag=function(t,l,d){l&&E(v(l),"makeStyleTag accepts only strings as second parameter");var p=document.createElement("style");this._nonce&&p.setAttribute("nonce",this._nonce),p.type="text/css",p.setAttribute("data-"+t,""),l&&p.appendChild(document.createTextNode(l));var g=document.head||document.getElementsByTagName("head")[0];return d?g.insertBefore(p,d):g.appendChild(p),p},f(h,[{key:"length",get:function(){return this._rulesCount}}]),h}();function E(h,m){if(!h)throw new Error("StyleSheet: "+m+".")}function R(h){for(var m=5381,i=h.length;i;)m=m*33^h.charCodeAt(--i);return m>>>0}var b=R,I=function(h){return h.replace(/\/style/gi,"\\/style")},D={};function W(h,m){if(!m)return"jsx-"+h;var i=String(m),t=h+i;return D[t]||(D[t]="jsx-"+b(h+"-"+i)),D[t]}function N(h,m){var i=/__jsx-style-dynamic-selector/g;typeof window>"u"&&(m=I(m));var t=h+m;return D[t]||(D[t]=m.replace(i,h)),D[t]}function G(h,m){return m===void 0&&(m={}),h.map(function(i){var t=i[0],l=i[1];return u.default.createElement("style",{id:"__"+t,key:"__"+t,nonce:m.nonce?m.nonce:void 0,dangerouslySetInnerHTML:{__html:l}})})}var a=function(){function h(i){var t=i===void 0?{}:i,l=t.styleSheet,d=l===void 0?null:l,p=t.optimizeForSpeed,g=p===void 0?!1:p;this._sheet=d||new P({name:"styled-jsx",optimizeForSpeed:g}),this._sheet.inject(),d&&typeof g=="boolean"&&(this._sheet.setOptimizeForSpeed(g),this._optimizeForSpeed=this._sheet.isOptimizeForSpeed()),this._fromServer=void 0,this._indices={},this._instancesCounts={}}var m=h.prototype;return m.add=function(t){var l=this;this._optimizeForSpeed===void 0&&(this._optimizeForSpeed=Array.isArray(t.children),this._sheet.setOptimizeForSpeed(this._optimizeForSpeed),this._optimizeForSpeed=this._sheet.isOptimizeForSpeed()),typeof window<"u"&&!this._fromServer&&(this._fromServer=this.selectFromServer(),this._instancesCounts=Object.keys(this._fromServer).reduce(function(L,z){return L[z]=0,L},{}));var d=this.getIdAndRules(t),p=d.styleId,g=d.rules;if(p in this._instancesCounts){this._instancesCounts[p]+=1;return}var A=g.map(function(L){return l._sheet.insertRule(L)}).filter(function(L){return L!==-1});this._indices[p]=A,this._instancesCounts[p]=1},m.remove=function(t){var l=this,d=this.getIdAndRules(t).styleId;if(O(d in this._instancesCounts,"styleId: `"+d+"` not found"),this._instancesCounts[d]-=1,this._instancesCounts[d]<1){var p=this._fromServer&&this._fromServer[d];p?(p.parentNode.removeChild(p),delete this._fromServer[d]):(this._indices[d].forEach(function(g){return l._sheet.deleteRule(g)}),delete this._indices[d]),delete this._instancesCounts[d]}},m.update=function(t,l){this.add(l),this.remove(t)},m.flush=function(){this._sheet.flush(),this._sheet.inject(),this._fromServer=void 0,this._indices={},this._instancesCounts={}},m.cssRules=function(){var t=this,l=this._fromServer?Object.keys(this._fromServer).map(function(p){return[p,t._fromServer[p]]}):[],d=this._sheet.cssRules();return l.concat(Object.keys(this._indices).map(function(p){return[p,t._indices[p].map(function(g){return d[g].cssText}).join(t._optimizeForSpeed?"":`
`)]}).filter(function(p){return!!p[1]}))},m.styles=function(t){return G(this.cssRules(),t)},m.getIdAndRules=function(t){var l=t.children,d=t.dynamic,p=t.id;if(d){var g=W(p,d);return{styleId:g,rules:Array.isArray(l)?l.map(function(A){return N(g,A)}):[N(g,l)]}}return{styleId:W(p),rules:Array.isArray(l)?l:[l]}},m.selectFromServer=function(){var t=Array.prototype.slice.call(document.querySelectorAll('[id^="__jsx-"]'));return t.reduce(function(l,d){var p=d.id.slice(2);return l[p]=d,l},{})},h}();function O(h,m){if(!h)throw new Error("StyleSheetRegistry: "+m+".")}var C=n.createContext(null);C.displayName="StyleSheetContext";function c(){return new a}function T(h){var m=h.registry,i=h.children,t=n.useContext(C),l=n.useState(function(){return t||m||c()}),d=l[0];return u.default.createElement(C.Provider,{value:d},i)}function M(){return n.useContext(C)}var B=u.default.useInsertionEffect||u.default.useLayoutEffect,F=typeof window<"u"?c():void 0;function $(h){var m=F||M();return m?typeof window>"u"?(m.add(h),null):(B(function(){return m.add(h),function(){m.remove(h)}},[h.id,String(h.dynamic)]),null):null}$.dynamic=function(h){return h.map(function(m){var i=m[0],t=m[1];return W(i,t)}).join(" ")},o.StyleRegistry=T,o.createStyleRegistry=c,o.style=$,o.useStyleRegistry=M},"./node_modules/styled-jsx/style.js":(S,o,e)=>{S.exports=e("./node_modules/styled-jsx/dist/index/index.js").style}}]);
