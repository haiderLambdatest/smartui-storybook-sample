"use strict";(globalThis.webpackChunkfirecracker=globalThis.webpackChunkfirecracker||[]).push([[3208],{"./components/buttons/CloseButton.js":(y,n,a)=>{a.r(n),a.d(n,{default:()=>D});var b=a("./node_modules/styled-jsx/style.js"),e=a.n(b),s=a("./node_modules/next/dist/compiled/react/index.js"),h=a("./node_modules/prop-types/index.js"),t=a.n(h),l=a("./node_modules/classnames/index.js"),f=a.n(l),x=a("./components/icons/CloseIcon.js"),m=s.createElement;function D({className:O,onClose:A}){return m(s.Fragment,null,m(e(),{id:"394570524"},["button.jsx-394570524{width:32px;height:32px;background:#fff;border:1px solid #2a2a2a;pointer-events:all;}","button.jsx-394570524:hover{background:#ebebeb;}"]),m("button",{"aria-label":"Close",type:"button",onClick:A,className:"jsx-394570524 "+(f()("df ma0 pa0 items-center justify-center gray-100 pointer",O)||"")},m(x.default,null)))}D.propTypes={className:t().string,onClose:t().func},D.defaultProps={className:void 0,onClose:void 0}},"./components/icons/Check.js":(y,n,a)=>{a.r(n),a.d(n,{default:()=>s});var b=a("./node_modules/next/dist/compiled/react/index.js"),e=b.createElement;function s({className:h}){return e("svg",{className:h,width:"7",height:"6",viewBox:"0 0 7 6",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e("path",{d:"M1.00781 3.27225L3.20011 4.99951L5.99219 1",stroke:"currentColor"}))}s.displayName="Check"},"./components/icons/CloseIcon.js":(y,n,a)=>{a.r(n),a.d(n,{default:()=>s});var b=a("./node_modules/next/dist/compiled/react/index.js"),e=b.createElement;function s(){return e("svg",{className:"db",width:"12",height:"13",viewBox:"0 0 13 13",xmlns:"http://www.w3.org/2000/svg"},e("line",{x1:"3.18198",y1:"3.18198",x2:"9.54594",y2:"9.54594",stroke:"currentColor"}),e("line",{x1:"3.18198",y1:"9.54594",x2:"9.54594",y2:"3.18198",stroke:"currentColor"}))}s.displayName="CloseIcon"},"./components/modules/DelegateTrackerBarCharts/Overlay/Overlay.js":(y,n,a)=>{a.r(n),a.d(n,{default:()=>R});var b=a("./node_modules/styled-jsx/style.js"),e=a.n(b),s=a("./node_modules/next/dist/compiled/react/index.js"),h=a("./node_modules/prop-types/index.js"),t=a.n(h),l=a("./node_modules/classnames/index.js"),f=a.n(l),x=a("./components/modules/DelegateTrackerBarCharts/utils.js"),m=a("./components/buttons/CloseButton.js"),D=a("./components/Headshot/Headshot.js"),O=a("./components/modules/ResultsSummary/Bar.js"),A=s.createElement;function P({candidateColor:E,delegatesAwarded:M,delegatesNeeded:T}){const o=M?Math.min(T/M,1).toFixed(4)*100:100,r=Math.min(M/T,1)*100;return A(s.Fragment,null,A(e(),{id:"3286670144"},[".container.jsx-3286670144{width:var(--bar-width,40px);}",".overlay-indicator.jsx-3286670144{position:absolute;left:0;top:-6px;bottom:-6px;width:calc(var(--overlay-width) + 1px);border-right:1px dashed #000;opacity:0.6;}",".overlay-indicator.jsx-3286670144::before,.overlay-indicator.jsx-3286670144::after{content:'';position:absolute;right:-2.5px;border-left:2px solid transparent;border-right:2px solid transparent;}",".overlay-indicator.jsx-3286670144::before{top:0;border-top:3px solid #000;}",".overlay-indicator.jsx-3286670144::after{bottom:0;border-bottom:3px solid #000;}"]),A("div",{style:{"--bar-width":M>T?"50px":void 0,"--overlay-width":`${o}%`,"--bar-color":E,"--bar-height":"7px"},className:"jsx-3286670144 container relative mb5"},A(O.default,{percentInFormatted:`${r}%`}),A("div",{className:"jsx-3286670144 overlay-indicator z-1"})))}P.propTypes={candidateColor:t().string.isRequired,delegatesAwarded:t().number.isRequired,delegatesNeeded:t().number.isRequired};var S=a("./components/Checkmark.js"),B=a("./components/icons/Check.js"),N=a("./helpers/color.js"),i=s.createElement;function I({candidate:E,candidateColor:M,delegatesByState:T}){const{data:o,hasZeros:r,hasWin:u,hasLoss:g}=(0,s.useMemo)(()=>(0,x.getStateResultsByCandidate)({candidate:E,delegatesByState:T}),[E,T]);return i(s.Fragment,null,i(e(),{id:"1406262631"},[".grid.jsx-1406262631{gap:1px;}",".state.jsx-1406262631{-webkit-flex:0 0 auto;-ms-flex:0 0 auto;flex:0 0 auto;width:21px;border-radius:1px;border:1px solid #ebebeb;padding:8px 1px 2px;line-height:1.15;}",".state[data-total='0'].jsx-1406262631:not(.zeros){background:rgba(0,0,0,0.1667);border-color:rgba(0,0,0,0.1667);opacity:0.4;}",".winner.jsx-1406262631{border-color:rgba(var(--candidate-color),0.3);}",".winner.jsx-1406262631::before{content:'';position:absolute;top:0;bottom:0;left:0;right:0;background:rgb(var(--candidate-color));opacity:0.2;}",".state.jsx-1406262631 .winner-check{top:3px;left:50%;-webkit-transform:translateX(-50%);-ms-transform:translateX(-50%);transform:translateX(-50%);}",".state-name.jsx-1406262631{font-weight:500;}",".legend.jsx-1406262631{gap:0 4px;}",".legend.jsx-1406262631>span.jsx-1406262631:not(:last-child){padding-right:6px;border-right:1px solid #f0f0f0;}",".dot.jsx-1406262631::before{content:'';width:8px;height:8px;background:#ccc;border-radius:50%;display:inline-block;margin-right:2px;}",".legend-win.jsx-1406262631::before{background:rgba(var(--candidate-color),0.3);}"]),i("div",{style:{"--candidate-color":(0,N.hexToRgb)(M)},className:"jsx-1406262631"},i("div",{className:"jsx-1406262631 grid df flex-wrap mh-auto mb2"},o.map(({isWinner:c,isZero:C,total:_,totalDisplayValue:v,stateCode:p})=>i("div",{"data-total":_,key:p,className:"jsx-1406262631 "+(f()("state df f2 flex-column items-center relative z-0",{winner:c,zeros:C})||"")},c&&i(B.default,{className:"winner-check absolute"}),i("span",{className:"jsx-1406262631 state-name"},p),i("span",{className:"jsx-1406262631 delegates fw3"},v)))),i("div",{className:"jsx-1406262631 legend fw4 f1 lh-none df items-center"},r&&i("span",{className:"jsx-1406262631"},"\u2014 Upcoming race"),g&&i("span",{className:"jsx-1406262631 dot df items-center legend-loss"},"No delegates awarded"),u&&i("span",{className:"jsx-1406262631 dot df items-center legend-win"},"Winner"))))}I.propTypes={candidate:t().shape(x.delegateTrackerBarChartCandidate).isRequired,candidateColor:t().string.isRequired,delegatesByState:t().object.isRequired};var d=s.createElement;function R({candidate:E,delegatesByState:M,delegatesNeeded:T,isTouch:o,onClose:r,party:u,showSuperDelegates:g}){const c=g?E.allDelegatesAwarded:E.delegatesAwarded;return d(s.Fragment,null,d(e(),{id:"3770508197"},[".container.jsx-3770508197{border-radius:2px;box-shadow:4px 4px 5px 0 rgba(0,0,0,0.1);width:329px;border:1px solid rgba(0,0,0,0.2);}",".touch.jsx-3770508197{width:339px;}",".close-column.jsx-3770508197 .close-button{border-color:#ccc;}",".candidate-column.jsx-3770508197{-webkit-flex:0 0 auto;-ms-flex:0 0 auto;flex:0 0 auto;width:84px;}",".grid-column.jsx-3770508197{-webkit-flex:1 1 auto;-ms-flex:1 1 auto;flex:1 1 auto;}",".close-column.jsx-3770508197{pointer-events:all;-webkit-flex:0 0 auto;-ms-flex:0 0 auto;flex:0 0 auto;width:32px;}"]),d("div",{className:"jsx-3770508197 "+(f()("container bg-white ph1 pv3 oswald df",{touch:o})||"")},d("div",{className:"jsx-3770508197 candidate-column df items-center justify-center flex-column"},d(D.default,{candidateColor:E.colorHex,className:"mb3",width:70,height:80,backgroundHeight:70,headshotUrl:E.headshotUrl}),d("span",{className:"jsx-3770508197 f4 lh-none fw4 mb3 tc"},E.name),d("div",{className:"jsx-3770508197 mb2 df items-center"},E.isWinner&&d(S.default,{height:"16px",width:"16px",className:"mr1 df items-center",nonpartisanWinner:!0,shouldDisplay:!0,addMargin:!1}),d("span",{className:"jsx-3770508197"},c.toLocaleString())),d(P,{candidateColor:E.colorHex,delegatesAwarded:c,delegatesNeeded:T,party:u}),d("span",{className:"jsx-3770508197 fw3 f2 lh-title tc gray-80"},T.toLocaleString()," delegates to win nomination")),d("div",{className:"jsx-3770508197 grid-column ml2"},d(I,{candidate:E,candidateColor:E.colorHex,delegatesByState:M})),o&&d("div",{className:"jsx-3770508197 close-column ml2"},d(m.default,{className:"close-button",onClose:r}))))}R.propTypes={candidate:t().shape(x.delegateTrackerBarChartCandidate).isRequired,delegatesByState:t().object.isRequired,delegatesNeeded:t().number.isRequired,isTouch:t().bool,onClose:t().func,showSuperDelegates:t().bool},R.defaultProps={isTouch:!1,onClose:void 0,showSuperDelegates:!1}},"./components/modules/DelegateTrackerBarCharts/utils.js":(y,n,a)=>{a.r(n),a.d(n,{CANDIDATE_HEADSHOT_DIMENSIONS:()=>i,CANDIDATE_HEADSHOT_EMBED_DIMENSIONS:()=>I,EMBED_TYPE:()=>d,PARTY_TO_NAME:()=>B,PARTY_TO_PLURAL:()=>N,delegateBarChart:()=>S,delegateTrackerBarChartCandidate:()=>P,getStateResultsByCandidate:()=>M,useOverlayInteraction:()=>T});var b=a("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),e=a("./node_modules/prop-types/index.js"),s=a.n(e),h=a("./node_modules/lodash-es/sortBy.js"),t=a("./node_modules/next/dist/compiled/react/index.js"),l=a("./node_modules/@floating-ui/react/dist/floating-ui.react.mjs"),f=a("./node_modules/@floating-ui/dom/dist/floating-ui.dom.mjs"),x=a("./node_modules/@floating-ui/core/dist/floating-ui.core.mjs"),m=a("./helpers/constants.js"),D=a("./data/StatesForGeneralElection.js");function O(o,r){var u=Object.keys(o);if(Object.getOwnPropertySymbols){var g=Object.getOwnPropertySymbols(o);r&&(g=g.filter(function(c){return Object.getOwnPropertyDescriptor(o,c).enumerable})),u.push.apply(u,g)}return u}function A(o){for(var r=1;r<arguments.length;r++){var u=arguments[r]!=null?arguments[r]:{};r%2?O(Object(u),!0).forEach(function(g){(0,b.default)(o,g,u[g])}):Object.getOwnPropertyDescriptors?Object.defineProperties(o,Object.getOwnPropertyDescriptors(u)):O(Object(u)).forEach(function(g){Object.defineProperty(o,g,Object.getOwnPropertyDescriptor(u,g))})}return o}const P={allDelegatesAwarded:s().number.isRequired,delegatesAwarded:s().number.isRequired,colorHex:s().string.isRequired,headshotUrl:s().string.isRequired,isDroppedOut:s().bool.isRequired,isIncumbent:s().bool.isRequired,isWinner:s().bool.isRequired,firstName:s().string.isRequired,lastName:s().string.isRequired,name:s().string.isRequired,superDelegatesAwarded:s().number.isRequired},S={candidates:s().arrayOf(s().shape(P)).isRequired,className:s().string,delegatesNeeded:s().number.isRequired,longestName:s().string,party:s().oneOf(Object.values(m.DELEGATE_PARTY)).isRequired,showSuperDelegates:s().bool},B={[m.DELEGATE_PARTY.DEM]:"Democratic",[m.DELEGATE_PARTY.REP]:"Republican"},N={[m.DELEGATE_PARTY.DEM]:"Democrats",[m.DELEGATE_PARTY.REP]:"Republicans"},i={backgroundHeight:32,height:42,width:32},I={backgroundHeight:40,height:50,width:40},d={TRUNCATED:"truncated",DEFAULT:"default"},R=(0,h.default)(D.territories.concat(D.default).map(o=>o.abbr)),E={[m.DELEGATE_PARTY.DEM]:R,[m.DELEGATE_PARTY.REP]:R.filter(o=>o!=="DA")};function M({candidate:o,delegatesByState:r,showSuperDelegates:u}){return E[r.party].reduce((c,C)=>{const _=r.races.filter(j=>j.stateAbbr===C);if(!_.length)return c.data.push({isWinner:!1,isZero:!0,stateCode:C,total:0,totalDisplayValue:"\u2014"}),c;const v=_.flatMap(j=>Object.values(j.candidateResultsByLastName)).filter(j=>j.name===o.name);if(!v)return c.data.push({isWinner:!1,isZero:!1,stateCode:C,total:0,totalDisplayValue:0}),c;const p=A({},v[0]);v.slice(1).forEach(j=>{const{isWinner:w,delegatesAwarded:K,allDelegatesAwarded:G,totalSuperDelegatesAwarded:V,superDelegatesAwarded:$}=j;w&&(p.isWinner=!0),p.delegatesAwarded+=K,p.allDelegatesAwarded+=G,p.totalSuperDelegatesAwarded+=V,p.superDelegatesAwarded+=$});const{isWinner:U,delegatesAwarded:H,allDelegatesAwarded:Y,totalSuperDelegatesAwarded:k}=p,L=Object.values(v).every(j=>!j.allDelegatesAwarded),W=u?Y+k:H,F=L?"\u2014":W;return c.data.push({isWinner:U,isZero:L,stateCode:C,total:W,totalDisplayValue:F}),{data:c.data,hasZeros:c.hasZeros||L,hasWin:c.hasWin||U,hasLoss:c.hasLoss||!L&&!W}},{data:[],hasZeros:!1,hasWin:!1,hasLoss:!1})}function T({candidates:o,enabled:r}){const{0:u,1:g}=(0,t.useState)(null),{0:c,1:C}=(0,t.useState)(null),_=(0,t.useCallback)(()=>g(null),[]),v=(0,t.useMemo)(()=>r&&u?o.find(w=>w.name===u):null,[u,o,r]),{context:p,refs:U,floatingStyles:H}=(0,l.useFloating)({open:v,onOpenChange(w,K){if(!w){g(null);return}const G=K.target?.closest?.("[data-candidate-name]")?.dataset.candidateName??null;C(K.type==="click"),g(G)},placement:"bottom",whileElementsMounted:f.autoUpdate,middleware:[(0,f.flip)(),(0,x.offset)(10),(0,f.shift)({crossAxis:!0})]}),Y=(0,l.useDismiss)(p),k=(0,l.useHover)(p,{enabled:r,mouseOnly:!0,move:!0}),L=(0,l.useClick)(p,{enabled:r,ignoreMouse:!0,toggle:!1}),W=(0,l.useClientPoint)(p,{enabled:r}),{getFloatingProps:F,getReferenceProps:j}=(0,l.useInteractions)([Y,k,L,W]);return{isTouch:c,activeCandidate:v,getFloatingProps:F,getReferenceProps:j,onClose:_,refs:U,floatingStyles:H}}},"./components/modules/ResultsSummary/Bar.js":(y,n,a)=>{a.r(n),a.d(n,{default:()=>D});var b=a("./node_modules/styled-jsx/style.js"),e=a.n(b),s=a("./node_modules/classnames/index.js"),h=a.n(s),t=a("./node_modules/next/dist/compiled/react/index.js"),l=a("./node_modules/prop-types/index.js"),f=a.n(l),x=a("./components/modules/ResultsSummary/constants.js"),m=t.createElement;function D({animationDelayMs:O,animateInitialValue:A,"aria-label":P,className:S,isAnimated:B,percentInFormatted:N}){const{0:i,1:I}=(0,t.useState)(A?"0%":N);(0,t.useEffect)(()=>{I(N)},[N]);const d=h()("bar relative overflow-hidden",S,{border:i!=="0%"&&i!=="100%",animate:B});return m(t.Fragment,null,m(e(),{id:"1635479720",dynamic:[x.ANIMATION_TIMEOUT_MS,O]},[".bar.__jsx-style-dynamic-selector{height:var(--bar-height,3px);background:var(--bar-bg,#dedede);}",".bar.__jsx-style-dynamic-selector::after{content:'';background:var(--bar-color,#ffd60c);z-index:1;position:absolute;top:0;bottom:0;left:0;width:var(--percent-in);}",`.animate.__jsx-style-dynamic-selector::after{-webkit-transition:width ${x.ANIMATION_TIMEOUT_MS}ms ease-in-out;transition:width ${x.ANIMATION_TIMEOUT_MS}ms ease-in-out;-webkit-transition-delay:${O}ms;transition-delay:${O}ms;}`,".border.__jsx-style-dynamic-selector::after{border-right:1px solid #fff;}"]),m("div",{role:"meter","aria-label":P,"aria-valuemin":0,"aria-valuemax":100,"aria-valuenow":i?.slice(0,-1)??0,style:{"--percent-in":i},className:e().dynamic([["1635479720",[x.ANIMATION_TIMEOUT_MS,O]]])+" "+(d||"")}))}D.propTypes={animationDelayMs:f().number,animateInitialValue:f().bool,"aria-label":f().string,className:f().string,isAnimated:f().bool,percentInFormatted:f().string.isRequired},D.defaultProps={animationDelayMs:0,animateInitialValue:!1,"aria-label":null,className:null,isAnimated:!0}},"./components/modules/ResultsSummary/constants.js":(y,n,a)=>{a.r(n),a.d(n,{ANIMATION_TIMEOUT_MS:()=>b,LAYOUT:()=>e,POLLS_TEXT:()=>h,RACE_CALL_HEADSHOT_DIMENSIONS:()=>s});const b=300,e={PRESIDENTIAL:"presidential",DEFAULT:"default"},s={backgroundHeight:45,height:53,width:45},h={ENTRANCE_POLLS:"Entrance Polls",EXIT_POLLS:"Exit Polls"}},"./data/StatesForGeneralElection.js":(y,n,a)=>{a.r(n),a.d(n,{default:()=>l,filteredStatesByYear:()=>s,territories:()=>h});var b=a("./node_modules/lodash.kebabcase/index.js"),e=a.n(b);const s={2022:["DC"]},h=[{abbr:"AS",name:"A. Samoa",slug:e()("American Samoa")},{abbr:"DA",name:"Dem. Abroad",slug:e()("Democrats Abroad")},{abbr:"GU",name:"Guam",slug:e()("Guam")},{abbr:"PR",name:"Puerto Rico",slug:e()("Puerto Rico")},{abbr:"VI",name:"Virgin Islands",slug:e()("Virgin Islands")},{abbr:"MP",name:"N. Mariana Is.",slug:e()("Northern Mariana Islands")}],l=[{abbr:"AL",name:"Alabama",slug:e()("Alabama")},{abbr:"AK",name:"Alaska",slug:e()("Alaska")},{abbr:"AZ",name:"Arizona",slug:e()("Arizona")},{abbr:"AR",name:"Arkansas",slug:e()("Arkansas")},{abbr:"CA",name:"California",slug:e()("California")},{abbr:"CO",name:"Colorado",slug:e()("Colorado")},{abbr:"CT",name:"Connecticut",slug:e()("Connecticut")},{abbr:"DE",name:"Delaware",slug:e()("Delaware")},{abbr:"DC",name:"D.C.",slug:e()("District of Columbia")},{abbr:"FL",name:"Florida",slug:e()("Florida")},{abbr:"GA",name:"Georgia",slug:e()("Georgia")},{abbr:"HI",name:"Hawaii",slug:e()("Hawaii")},{abbr:"ID",name:"Idaho",slug:e()("Idaho")},{abbr:"IL",name:"Illinois",slug:e()("Illinois")},{abbr:"IN",name:"Indiana",slug:e()("Indiana")},{abbr:"IA",name:"Iowa",slug:e()("Iowa")},{abbr:"KS",name:"Kansas",slug:e()("Kansas")},{abbr:"KY",name:"Kentucky",slug:e()("Kentucky")},{abbr:"LA",name:"Louisiana",slug:e()("Louisiana")},{abbr:"ME",name:"Maine",slug:e()("Maine")},{abbr:"MD",name:"Maryland",slug:e()("Maryland")},{abbr:"MA",name:"Massachusetts",slug:e()("Massachusetts")},{abbr:"MI",name:"Michigan",slug:e()("Michigan")},{abbr:"MN",name:"Minnesota",slug:e()("Minnesota")},{abbr:"MS",name:"Mississippi",slug:e()("Mississippi")},{abbr:"MO",name:"Missouri",slug:e()("Missouri")},{abbr:"MT",name:"Montana",slug:e()("Montana")},{abbr:"NE",name:"Nebraska",slug:e()("Nebraska")},{abbr:"NV",name:"Nevada",slug:e()("Nevada")},{abbr:"NH",name:"New Hampshire",slug:e()("New Hampshire")},{abbr:"NJ",name:"New Jersey",slug:e()("New Jersey")},{abbr:"NM",name:"New Mexico",slug:e()("New Mexico")},{abbr:"NY",name:"New York",slug:e()("New York")},{abbr:"NC",name:"North Carolina",slug:e()("North Carolina")},{abbr:"ND",name:"North Dakota",slug:e()("North Dakota")},{abbr:"OH",name:"Ohio",slug:e()("Ohio")},{abbr:"OK",name:"Oklahoma",slug:e()("Oklahoma")},{abbr:"OR",name:"Oregon",slug:e()("Oregon")},{abbr:"PA",name:"Pennsylvania",slug:e()("Pennsylvania")},{abbr:"RI",name:"Rhode Island",slug:e()("Rhode Island")},{abbr:"SC",name:"South Carolina",slug:e()("South Carolina")},{abbr:"SD",name:"South Dakota",slug:e()("South Dakota")},{abbr:"TN",name:"Tennessee",slug:e()("Tennessee")},{abbr:"TX",name:"Texas",slug:e()("Texas")},{abbr:"UT",name:"Utah",slug:e()("Utah")},{abbr:"VT",name:"Vermont",slug:e()("Vermont")},{abbr:"VA",name:"Virginia",slug:e()("Virginia")},{abbr:"WA",name:"Washington",slug:e()("Washington")},{abbr:"WV",name:"West Virginia",slug:e()("West Virginia")},{abbr:"WI",name:"Wisconsin",slug:e()("Wisconsin")},{abbr:"WY",name:"Wyoming",slug:e()("Wyoming")}]},"./helpers/color.js":(y,n,a)=>{a.r(n),a.d(n,{convertToHex:()=>b,hexToRgb:()=>e});function b(s){return s&&(s.startsWith("#")?s.toLowerCase():`#${s.replace("bg-","")}`.toLowerCase())}function e(s){const h=s.replace("#","");return(h.length===3?h.split("").map(l=>`${l}${l}`):h.split(/(\w{2})/).filter(Boolean)).map(l=>parseInt(l,16)).join(",")}}}]);
