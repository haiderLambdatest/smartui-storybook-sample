"use strict";(globalThis.webpackChunkfirecracker=globalThis.webpackChunkfirecracker||[]).push([[2735],{"./components/GridTable/index.js":(K,y,s)=>{s.r(y),s.d(y,{default:()=>b});var O=s("./node_modules/styled-jsx/style.js"),a=s.n(O),d=s("./node_modules/next/dist/compiled/react/index.js"),i=s("./node_modules/prop-types/index.js"),x=s.n(i),t=d.createElement;const M=({additionalRows:E,children:N,columnSize:_,numberOfRows:v,numberOfColumns:C,flow:I})=>N?t(d.Fragment,null,t(a(),{id:"1838094312",dynamic:[v?`repeat(${v}, minmax(min-content, max-content))`:"auto",E??"",I]},[`.grid-table.__jsx-style-dynamic-selector{display:grid;grid-template-rows:${v?`repeat(${v}, minmax(min-content, max-content))`:"auto"} ${E??""};grid-auto-flow:${I};}`]),t(a(),{id:"2935325418",dynamic:[C,_]},[`.grid-table.__jsx-style-dynamic-selector{grid-template-columns:repeat(${C},${_});}`]),t("div",{className:a().dynamic([["1838094312",[v?`repeat(${v}, minmax(min-content, max-content))`:"auto",E??"",I]],["2935325418",[C,_]]])+" grid-table"},N)):null;M.propTypes={additionalRows:x().string,children:x().node,columnSize:x().string,numberOfColumns:x().oneOfType([x().number,x().oneOf(["auto-fit","auto-fill"])]),numberOfRows:x().number,flow:x().oneOf(["column","row"])},M.defaultProps={additionalRows:null,children:null,columnSize:"1fr",numberOfColumns:"auto-fit",numberOfRows:null,flow:"row"};const b=M},"./components/VoteModesResultsModuleV2/VoteModes.propsShape.js":(K,y,s)=>{s.r(y),s.d(y,{Mode:()=>d,PartyModes:()=>i});var O=s("./node_modules/prop-types/index.js"),a=s.n(O);const d=a().shape({typeOfVote:a().string,totalVotes:a().string,totalVotePercent:a().string,candidates:a().arrayOf(a().shape({name:a().string,party:a().string,votes:a().string,votePercent:a().string})),counties:a().arrayOf(a().shape({name:a().string,votes:a().string,votePercent:a().string}))}),i=a().shape({modes:a().arrayOf(d),party:a().string,totalPercentIn:a().string})},"./components/VoteModesResultsModuleV2/VoteModesTable.js":(K,y,s)=>{s.r(y),s.d(y,{default:()=>ue});var O=s("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),a=s("./node_modules/styled-jsx/style.js"),d=s.n(a),i=s("./node_modules/next/dist/compiled/react/index.js"),x=s("./node_modules/prop-types/index.js"),t=s.n(x),M=s("./node_modules/classnames/index.js"),b=s.n(M),E=s("./node_modules/next/amp.js"),N=s("./components/icons/Chevron.js"),_=s("./components/GridTable/index.js"),v=i.createElement;const C=({isLastItem:o,name:e,lastName:l,votePercent:n})=>!e||!n?null:v("span",{className:"dib data-item publico-txt f3 fw4 mr1 lh-copy gray-100",style:{display:"inline-block"}},v("span",{className:"mr1",style:{wordBreak:"break-word"}},l||e),v("span",{className:"data-item__percent founders-cond f3 fw6 mv1 mr1"},o?n:`${n}, `));C.displayName="DataItem",C.propTypes={isLastItem:t().bool,lastName:t().string,name:t().string,votePercent:t().string},C.defaultProps={isLastItem:!1,lastName:null,name:null,votePercent:null};const I=C;var w=i.createElement;const U=({data:o,column:e,isLastColumn:l,rowSpan:n,className:u})=>{const m=o.map((p,P)=>w(I,{name:p.name,lastName:p.lastName,votePercent:p.votePercent,key:p.name,isLastItem:o.length-1===P}));return w(i.Fragment,null,w(d(),{id:"1267981367"},[".vote-modes-table__last-cell.jsx-1267981367{min-width:0;}",".vote-modes-table__last-cell.jsx-1267981367:not([data-grid-column='1']){padding-left:16px;}",".last-column.jsx-1267981367{border-right:0;}"]),w(d(),{id:"141480165",dynamic:[e,n]},[`.vote-modes-table__last-cell.__jsx-style-dynamic-selector{grid-column-start:${e};grid-row:auto / span ${n};}`]),w("div",{"data-grid-column":e,className:"jsx-1267981367 "+d().dynamic([["141480165",[e,n]]])+" "+(b()("vote-modes-table__last-cell founders-mono f2 fw4 gray-80 pv1 pr1 ttc items-start right-decoration",{"last-column":l},u)||"")},w("div",{className:"jsx-1267981367 "+d().dynamic([["141480165",[e,n]]])+" mr1 mt1"},m)))};U.propTypes={column:t().number,isLastColumn:t().bool,className:t().string},U.defaultProps={column:"auto",isLastColumn:!1,className:null};const se=U;var T=i.createElement;const F=({tableType:o,bubbleWidth:e,column:l,isLastColumn:n,isGeneral:u,showAll:m,isZeroState:p})=>o?T(i.Fragment,null,T(d(),{id:"163694478"},[".vote-modes-table__subheading.jsx-163694478{padding-bottom:5px;text-transform:uppercase;}",".vote-modes-table__subheading.jsx-163694478:not([data-grid-column='1']){padding-left:16px;}",".last-column.jsx-163694478{border-right:0;}",".vote-modes-table__subheading-text.jsx-163694478{border-bottom:1px solid #ebebeb;-webkit-flex:1;-ms-flex:1;flex:1;}","@media screen and (min-width:758px){.vote-modes-table__subheading.jsx-163694478{padding-right:10px;}.vote-modes-table__subheading.jsx-163694478{text-transform:capitalize;font-size:12px;}}"]),T("div",{style:{gridColumnStart:l},"data-grid-column":l,className:"jsx-163694478 "+(b()("vote-modes-table__subheading df founders-mono f1 fw4 gray-80 ttc items-end right-decoration",{"last-column":n})||"")},!!e&&T("div",{style:{width:e},className:"jsx-163694478 bubble-placeholder mr2 dn di-m"}),T("div",{className:"jsx-163694478 "+(b()("vote-modes-table__subheading-text pb1 mr1",{"dn df-m":u&&!m&&!p})||"")},o),u&&!m&&!p&&T("div",{className:"jsx-163694478 vote-modes-table__subheading-text pb1 mr1 df flex-column dn-m"},"Top ",o))):null;F.propTypes={bubbleWidth:t().number,column:t().oneOfType([t().number,t().string]),isLastColumn:t().bool,tableType:t().string},F.defaultProps={bubbleWidth:0,column:"auto",isLastColumn:!1,tableType:null};const oe=F;var ne=s("./components/VoteModesResultsModuleV2/VoteModesTableCell.js"),ae=s("./components/CandidateTile.js"),j=i.createElement;const H=({bgColor:o,bubbleWidth:e,column:l,isGeneral:n,isLastIdx:u,lastName:m,name:p,party:P,selected:R})=>j(i.Fragment,null,j(d(),{id:"1939137365"},[".top-cand.jsx-1939137365{-webkit-flex:0;-ms-flex:0;flex:0;}",".top-cand.jsx-1939137365:not([data-grid-column='1']){padding-left:16px;}",".top-cand__text.jsx-1939137365{border-bottom:1px solid #ebebeb;margin-bottom:10px;text-transform:uppercase;font-size:10px;}","@media screen and (min-width:758px){.top-cand.jsx-1939137365:not([data-grid-column='1']){padding-left:8px;}.top-cand__text.jsx-1939137365{text-transform:capitalize;font-size:12px;border-bottom:none;margin-bottom:0;}}"]),j(d(),{id:"1003180744",dynamic:[e]},[`@media screen and (min-width:758px){.top-cand.__jsx-style-dynamic-selector{margin-left:${e}px;}}`]),j("div",{"data-grid-column":l,className:"jsx-1939137365 "+d().dynamic([["1003180744",[e]]])+" "+(b()("top-cand ph2",{"right-decoration":!u,"dn df-m flex-column mb3":R&&n})||"")},j("div",{className:"jsx-1939137365 "+d().dynamic([["1003180744",[e]]])+" top-cand__text founders-mono f2-m fw4 gray-80 pb1"},"Top Candidate"),j("div",{className:"jsx-1939137365 "+d().dynamic([["1003180744",[e]]])+" df flex-row items-center"},j("div",{className:"jsx-1939137365 "+d().dynamic([["1003180744",[e]]])+" "+(b()("top-cand__name publico-txt f3 fw4 mr1 lh-copy gray-100",{"dn df-m":n})||"")},p),n&&j(i.Fragment,null,j("div",{className:"jsx-1939137365 "+d().dynamic([["1003180744",[e]]])+" top-cand__name publico-txt f3 fw4 mr1 lh-copy gray-100 df dn-m"},m),j(ae.default,{party:P,bgColor:o})))));H.propTypes={bgColor:t().string,bubbleWidth:t().number,column:t().number,isLastIdx:t().bool,lastName:t().string,name:t().string,party:t().string,isGeneral:t().bool},H.defaultProps={bgColor:null,bubbleWidth:null,column:null,isLastIdx:!1,lastName:null,name:null,party:null,isGeneral:!1};const le=H;var de=s("./components/VoteModeBubbles/VoteModeBubbles.js");const re=de.default;var Q=s("./components/VoteModeBubbles/VoteModeBubbles.propsShape.js"),h=i.createElement;const z=({typeOfVote:o,totalVotes:e,totalVotePercent:l,isLastIdx:n,bubbles:u,bubbleWidth:m,selected:p})=>{const P=o.charAt(0).toUpperCase()+o.slice(1).toLowerCase();return h(i.Fragment,null,h(d(),{id:"3908375812"},[".type.jsx-3908375812{max-width:90px;font-size:18px;}",".vote-count.jsx-3908375812{-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}","@media screen and (min-width:758px){.header.jsx-3908375812{text-transform:unset;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;}.type.jsx-3908375812{max-width:unset;text-align:left;font-size:24px;}.vote-count.jsx-3908375812{-webkit-align-items:start;-webkit-box-align:start;-ms-flex-align:start;align-items:start;}}","@media screen and (min-width:1000px){.type.jsx-3908375812{max-width:90px;}.total-votes__text.jsx-3908375812{font-size:28px;}}","@media screen and (min-width:1240px){.type.jsx-3908375812{max-width:unset;}.vote-count.jsx-3908375812{-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-align-items:baseline;-webkit-box-align:baseline;-ms-flex-align:baseline;align-items:baseline;}}"]),h("div",{className:"jsx-3908375812 "+(b()("header df flex-column pl1 pl0-m pv2 mv2 tc pr1 ttu items-center",{"right-decoration":!n})||"")},u&&h(re,{className:"mr2-m mb3 mb0-m",bubbles:u,bubbleWidth:m,selected:p}),h("div",{className:"jsx-3908375812 df flex-column"},h("div",{className:"jsx-3908375812 type f7 fw6 gray-100"},P),h("div",{className:"jsx-3908375812 vote-count df"},e&&h("div",{className:"jsx-3908375812 total-votes__text f7 f8-m gray-100 mr1 mb1"},e,h("span",{className:"jsx-3908375812 f1 f4-m fw6 gray-80 ml1"},"votes")),l&&h("div",{className:"jsx-3908375812 founders-mono f2 fw4 gray-80 mr1 mb1"},"(",l,")")))))};z.propTypes={bubbles:Q.default,typeOfVote:t().string,totalVotes:t().string,totalVotePercent:t().string,isLastIdx:t().bool},z.defaultProps={bubbles:null,typeOfVote:"",totalVotes:"",totalVotePercent:"",isLastIdx:!1};const ie=z;var k=s("./components/VoteModesResultsModuleV2/VoteModes.propsShape.js"),D=i.createElement;const G=({bubbleWidth:o,bubbles:e,mode:l,isLastIdx:n,selected:u,column:m,isGeneral:p})=>{const{typeOfVote:P,totalVotes:R,totalVotePercent:W}=l,B=l.candidates[0],{name:$,votes:Y,party:X,bgColor:r,lastName:c}=B,f=Y==="0";return D(i.Fragment,null,D(d(),{id:"4240781196"},["@media screen and (min-width:758px){.vote-modes-table__header.jsx-4240781196:not(:first-child){padding-left:16px;}}"]),D("div",{style:{gridColumnStart:m},className:"jsx-4240781196 vote-modes-table__header founders-cond lh-none"},D(ie,{typeOfVote:P,totalVotes:R,totalVotePercent:W,isLastIdx:n,bubbles:e,bubbleWidth:o,selected:u}),(!u||p)&&!f&&D(le,{bgColor:r,bubbleWidth:o,column:m,isGeneral:p,isLastIdx:n,lastName:c,name:$,party:X,selected:u})))};G.propTypes={bubbles:Q.default,column:t().oneOfType([t().number,t().string]),mode:k.Mode,isLastIdx:t().bool,isGeneral:t().bool},G.defaultProps={bubbles:null,column:"auto",mode:{},isLastIdx:!1,isGeneral:!1};const me=G;var ce=s("./helpers/circlePacking.js"),g=i.createElement;function q(o,e){var l=Object.keys(o);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(o);e&&(n=n.filter(function(u){return Object.getOwnPropertyDescriptor(o,u).enumerable})),l.push.apply(l,n)}return l}function ee(o){for(var e=1;e<arguments.length;e++){var l=arguments[e]!=null?arguments[e]:{};e%2?q(Object(l),!0).forEach(function(n){(0,O.default)(o,n,l[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(o,Object.getOwnPropertyDescriptors(l)):q(Object(l)).forEach(function(n){Object.defineProperty(o,n,Object.getOwnPropertyDescriptor(l,n))})}return o}const Z=({modes:o,tableType:e,party:l,isGeneral:n})=>{const u=(0,E.useAmp)(),{0:m,1:p}=(0,i.useState)({});if(!o)return null;const P=r=>{const{value:c}=r.currentTarget;p(f=>ee(ee({},f),{},{[c]:!f[c]})),document.getElementById(`vote-modes-table-${l}`).scrollIntoView()},R=r=>r.votePercent==="0%",W=r=>{const c={},f=r.findIndex(A=>R(A)),V=f===-1?10:Math.min(f,10);return c.displayedItems=r.slice(0,V)||[],c.remainingItems=r.slice(V)||[],c},B=Math.max(...o.reduce((r,c)=>{const f=c[e];if(!f)return r;const V=W(f);return r.push(V.displayedItems.length),r},[]));let $=!1;const Y=o.map((r,c)=>{const f=(0,ce.getMaxWidth)(r.bubbles),V=r.totalVotePercent==="0%",A=g(me,{bubbleWidth:f,bubbles:r.bubbles,mode:r,isLastIdx:o.length-1===c,column:c+1,key:r.typeOfVote,selected:e,isGeneral:n}),pe=g(oe,{bubbleWidth:f,column:c+1,isLastColumn:o.length-1===c,tableType:e,isGeneral:n,showAll:m[e],isZeroState:V});if(!e)return[A];const te=r[e];if(!te)return[A];const S=W(te),fe=S.displayedItems.map((L,J)=>g(ne.default,{bubble:r.bubbles?.[e].circles[J],bubbleWidth:f,name:L.name,party:L.party,percent:L.votePercent,voteCount:L.votes,column:c+1,key:`${L.name}-${r.typeOfVote}`,isLastColumn:o.length-1===c,isGeneral:n&&e==="candidates",bgColor:L.bgColor,lastName:L.lastName,className:b()({"dn df-m":J>=3&&!m[e],df:J<3||m[e]})})),xe=B-S.displayedItems.length,be=g(se,{column:c+1,rowSpan:xe+1,isLastColumn:o.length-1===c,data:S.remainingItems,className:b()({"dn df-m":!m[e]&&!V,df:m[e]||V})});return $=S.remainingItems.length>0&&!V,[A,pe,fe,be]}),X=B+2;return g(i.Fragment,null,g(d(),{id:"3511590901"},[".vote-modes-table .is-open .chevron{-webkit-transform:scaleY(-1);-ms-transform:scaleY(-1);transform:scaleY(-1);}",".toggle-button.jsx-3511590901{border-top:1px solid #ebebeb;}"]),g("div",{id:`vote-modes-table-${l}`,style:{flex:1},className:"jsx-3511590901 vote-modes-table"},g(_.default,{additionalRows:"1fr",flow:"column",numberOfRows:X,numberOfColumns:o.length},Y),!u&&e&&(B>3||$)&&g("div",{className:"jsx-3511590901 toggle-button dn-m tc df flex-row founders-cond justify-center lh-none mv4 f4 fw6"},g("button",{type:"button",style:{border:"none",backgroundColor:"transparent",margin:"4px auto 0"},onClick:P,value:e,className:"jsx-3511590901 "+(b()("ttu gray-100 pointer",{"is-open":m[e]})||"")},g("span",{className:"jsx-3511590901 pr2"},m[e]?`Hide all ${e}`:`Show all ${e}`),g("span",{className:"jsx-3511590901"},g(N.default,{width:"12",height:"8"}))))))};Z.propTypes={modes:t().arrayOf(k.Mode),party:t().string,tableType:t().oneOf(["candidates","counties"]),isGeneral:t().bool},Z.defaultProps={modes:null,party:"",tableType:null,isGeneral:!1};const ue=Z},"./components/icons/Chevron.js":(K,y,s)=>{s.r(y),s.d(y,{default:()=>b});var O=s("./node_modules/styled-jsx/style.js"),a=s.n(O),d=s("./node_modules/next/dist/compiled/react/index.js"),i=s("./node_modules/prop-types/index.js"),x=s.n(i),t=d.createElement;const M=({width:E,height:N})=>t(d.Fragment,null,t(a(),{id:"3286215947"},[".chevron.jsx-3286215947{-webkit-transition:-webkit-transform 100ms linear;-webkit-transition:transform 100ms linear;transition:transform 100ms linear;}",".chevron.jsx-3286215947 path.jsx-3286215947{fill:currentColor;}"]),t("svg",{width:E,height:N,viewBox:"0 0 12 8",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"jsx-3286215947 chevron"},t("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M12 2.06206L5.95831 8L0 2.14401L1.55988 0.58195L5.95831 4.90485L8.19922 2.70243L10.4401 0.5L12 2.06206Z",className:"jsx-3286215947"})));M.propTypes={width:x().string,height:x().string},M.defaultProps={width:"11",height:"7"};const b=M}}]);
