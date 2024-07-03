"use strict";(globalThis.webpackChunkfirecracker=globalThis.webpackChunkfirecracker||[]).push([[3557],{"./components/CountyResultsModule/index.js":(b,d,e)=>{e.r(d),e.d(d,{default:()=>ae});var _=e("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),a=e("./node_modules/next/dist/compiled/react/index.js"),o=e("./node_modules/prop-types/index.js"),n=e.n(o),r=e("./node_modules/next/amp.js"),c=e.n(r),u=e("./node_modules/lodash.get/index.js"),s=e.n(u),m=e("./node_modules/classnames/index.js"),p=e.n(m),E=e("./helpers/getPluralReportingTypeString.js"),y=e("./components/hooks/useShowAllToggle.js"),j=e("./components/ToggleButton.js"),C=e("./components/ScrollableTable/AmpCollapsibleWrapper/index.js"),D=e("./components/ScrollableTable/ColorBlock/index.js"),l=e("./components/ScrollableTable/Column/index.js"),x=e("./components/ScrollableTable/ColumnGroup/index.js"),R=e("./components/ScrollableTable/ColumnHeading/index.js"),N=e("./components/ScrollableTable/CandidateColumn/index.js"),F=e("./components/ScrollableTable/CandidateHeader/index.js"),h=e("./components/ScrollableTable/CellList/index.js"),L=e("./components/ScrollableTable/CellListHeading/index.js"),A=e("./components/ScrollableTable/CellListItem/index.js"),B=e("./components/ScrollableTable/CellListItems/index.js"),le=e("./components/ScrollableTable/CountyLabel/index.js"),w=e("./components/ScrollableTable/FillerColumn/index.js"),te=e("./components/ScrollableTable/Grid/index.js"),se=e("./components/ScrollableTable/Number/index.js"),H=e("./components/ScrollableTable/Percent/index.js"),ne=e("./components/ScrollableTable/ScrollableGrid/index.js"),oe=e("./components/Module.js"),t=a.createElement;function V(O,T){var f=Object.keys(O);if(Object.getOwnPropertySymbols){var P=Object.getOwnPropertySymbols(O);T&&(P=P.filter(function(g){return Object.getOwnPropertyDescriptor(O,g).enumerable})),f.push.apply(f,P)}return f}function G(O){for(var T=1;T<arguments.length;T++){var f=arguments[T]!=null?arguments[T]:{};T%2?V(Object(f),!0).forEach(function(P){(0,_.default)(O,P,f[P])}):Object.getOwnPropertyDescriptors?Object.defineProperties(O,Object.getOwnPropertyDescriptors(f)):V(Object(f)).forEach(function(P){Object.defineProperty(O,P,Object.getOwnPropertyDescriptor(f,P))})}return O}const I=({electionSeason:O,className:T,countiesPercentIn:f,candidateResults:P,defaultNumberOfRows:g,percentOfExpectedVoteReceived:U,hideModule:de,showCandidateParty:re,reportingType:ie,isPresDistricts:X,id:Y,useCandidateColor:_e,isMapHidden:z})=>{const v=(0,r.useAmp)(),ce=v||!1,{anchor:ue,showAllRows:Z,onToggle:me}=(0,y.default)({id:Y,defaultValue:ce});if(de)return null;const J=Z?1e3:g,K=f.slice(0,J),Ee=P.map(i=>G(G({},i),{},{countyResults:i.countyResults.slice(0,J)})),fe=!v&&f.length>g,Q=X?"District":ie,S=(0,E.default)(Q),k=U!==null;return t(oe.default,null,t("div",{className:p()(`${T} relative`,{"-mt7":!v&&!z,mt2:v,"mt8 mt0-m":!v&&z}),"data-testid":"county-results-module"},ue,t(C.default,{defaultNumberOfRows:g,pluralReportingText:S,id:Y},t(te.default,null,t(l.default,null,t(R.default,null,k&&t("div",{className:"dn-m df items-end lh-none h-100","data-testid":"county-results__expected-vote-recieved"},U,"%",t("br",null),"expected",t("br",null),"vote in")),t(h.default,null,t(L.default,null,Q),t(B.default,{minWidth:80},K.map(i=>t(A.default,{key:`countyResultsModule-${i.name}-${i.percentIn}`},t(le.default,{countyName:i.name,percentOfVotesIn:i.percentIn})))))),t(ne.default,null,Ee.map(i=>{const W=s()(i,"fullName")||"",pe=s()(i,"headshotUrl")||"",Pe=s()(i,"partyAbbreviation")||"",xe=s()(i,"declaredWinner")||!1,$=s()(i,"countyResults")||[],q=$.length,Oe=s()(i,"totalPercentReceived")||0,be=s()(i,"totalVotesReceived")||0,ee=s()(i,"partyColor")||"#fff",je=s()(i,"isIncumbent")||!1;return t(N.default,{key:`candidateColumn-${W}-${q}`},t(F.default,{electionSeason:O,isIncumbent:je,fullName:W,headshotUrl:pe,partyAbbreviation:Pe,percentOfVotesReceived:Oe,numberOfVotesReceived:be,declaredWinner:xe,isPresDistricts:X,partyColor:_e?ee:null,showParty:re}),t(x.default,null,t(l.default,null,t(h.default,null,t(L.default,{alignment:"center"},"Percent"),t(B.default,null,$.map(M=>{const Te=M.isLeading?ee:"#fff";return t(A.default,{alignment:"center",key:`${W}-${M.countyName}-${M.votesReceived}`},t(D.default,{color:Te},t(H.default,{value:M.percentOfVote})))})))),t(l.default,null,t(h.default,null,t(L.default,{alignment:"center"},"Votes"),t(B.default,null,$.map(M=>t(A.default,{key:`votes-${W}-${M.countyName}`},t("div",{className:"pr5 tr w-100"},t(se.default,{value:M.votesReceived}))))))),t(w.default,{numberOfCellListItems:q})))}),t(N.default,null,t(F.default,null),t(x.default,null,t(w.default,{numberOfCellListItems:K.length})))),t(l.default,{leftBorder:!0,hideOnSmall:!0},t(R.default,{alignment:"right"},k&&t("div",{className:"pl4","data-testid":"county-results__expected-vote-recieved"},U,"%",t("br",null),"expected",t("br",null),"vote in")),t(h.default,null,t(L.default,{alignment:"right"},"% in"),t(B.default,null,K.map(i=>t(A.default,{alignment:"right",key:`${i.name}-${i.percentIn}`},t("span",{className:"f2"},t(H.default,{value:i.percentIn})," in")))))))),fe&&t(j.default,{onClick:me,toggled:Z,displayMoreText:`Show all ${S}`,displayLessText:`Show fewer ${S}`})))};I.displayName="CountyResultsModule",I.propTypes={className:n().string,countiesPercentIn:n().arrayOf(n().any),candidateResults:n().arrayOf(n().any).isRequired,electionSeason:n().string,defaultNumberOfRows:n().number,percentOfExpectedVoteReceived:n().number,isPresDistricts:n().bool,reportingType:n().string,id:n().string,showCandidateParty:n().bool,useCandidateColor:n().bool,isMapHidden:n().bool},I.defaultProps={className:null,countiesPercentIn:[],electionSeason:null,defaultNumberOfRows:20,percentOfExpectedVoteReceived:null,showCandidateParty:!0,isPresDistricts:!1,reportingType:"County",id:"county-results",useCandidateColor:!1,isMapHidden:!1};const ae=I},"./components/LinklessButton.js":(b,d,e)=>{e.r(d),e.d(d,{default:()=>p});var _=e("./node_modules/styled-jsx/style.js"),a=e.n(_),o=e("./node_modules/next/dist/compiled/react/index.js"),n=e("./node_modules/prop-types/index.js"),r=e.n(n),c=e("./node_modules/classnames/index.js"),u=e.n(c),s=o.createElement;const m=({children:E,classes:y,onClick:j,isBlock:C})=>{const{0:D,1:l}=(0,o.useState)(!1),x=u()({db:C,dib:!C},"button-press founders-cond lh-none f4 fw6 ttu",{"clear-blue bg-white":!D,"white bg-clear-blue":D},y);return s(o.Fragment,null,s(a(),{id:"1765211304"},[".button-press.jsx-1765211304{border:1px solid #3061ff;-webkit-transition:background-position ease 0.2s;transition:background-position ease 0.2s;background-position:-600px 0;background-repeat:no-repeat;background-image:linear-gradient(35deg,#3061ff 50%,transparent 0);cursor:pointer;}",".button-press.jsx-1765211304:hover{background-size:325% 100%;background-position:0 0;color:#fff;}"]),s("button",{type:"button","data-testid":"button-press",onClick:R=>{l(!D),j(R)},className:"jsx-1765211304 "+(x||"")},E))};m.propTypes={isBlock:r().bool,onClick:r().func.isRequired},m.defaultProps={isBlock:!1};const p=m},"./components/ScrollableTable/AmpCollapsibleWrapper/index.js":(b,d,e)=>{e.r(d),e.d(d,{default:()=>p});var _=e("./node_modules/styled-jsx/style.js"),a=e.n(_),o=e("./node_modules/next/dist/compiled/react/index.js"),n=e("./node_modules/prop-types/index.js"),r=e.n(n),c=e("./node_modules/next/amp.js"),u=e.n(c),s=o.createElement;const m=({children:E,defaultNumberOfRows:y,pluralReportingText:j,id:C})=>{if(!(0,c.useAmp)())return E;const l=`list__${C}`.replace(/~/g,"-"),x=`n+${y}`;return s(o.Fragment,null,s(a(),{id:"3461488427"},[".toggle-button.jsx-3461488427{margin:20px auto 0;width:100%;min-width:300px;padding:10px;border:solid 1px blue;border-radius:0;-webkit-appearance:none;-moz-appearance:none;}"]),s(a(),{id:"1265597997",dynamic:[l,x]},[`#${l}.amp-list .cell-list ul>li:nth-child(${x}){display:none;}`]),s(a(),{id:"4141916197",dynamic:[l,l,l,l,l,l,l,l]},[`#list-controls.${l} #${l} .cell-list ul>li{display:block;}`,`#list-controls.${l} #${l}--hidebutton{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}`,`#list-controls:not(.${l}) #${l}--hidebutton{display:none;}`,`#list-controls.${l} #${l}--showbutton{display:none;}`]),s("div",{id:l,className:"jsx-3461488427 "+a().dynamic([["1265597997",[l,x]],["4141916197",[l,l,l,l,l,l,l,l]]])+" amp-list"},E),s("button",{type:"button",id:`${l}--showbutton`,on:`tap:AMP.setState({ showList: true, ampCollapsibleWrapperClass: 'showList ${l}' })`,className:"jsx-3461488427 "+a().dynamic([["1265597997",[l,x]],["4141916197",[l,l,l,l,l,l,l,l]]])+" toggle-button clear-blue bg-white df flex-row founders-cond justify-center lh-none f4 fw6 ttu"},`Show all ${j}`),s("button",{type:"button",id:`${l}--hidebutton`,on:"tap:AMP.setState({ showList: false, ampCollapsibleWrapperClass: '' })",className:"jsx-3461488427 "+a().dynamic([["1265597997",[l,x]],["4141916197",[l,l,l,l,l,l,l,l]]])+" toggle-button white bg-clear-blue df flex-row founders-cond justify-center lh-none f4 fw6 ttu"},`Hide all ${j}`))},p=m;m.propTypes={children:r().node.isRequired,defaultNumberOfRows:r().number,pluralReportingText:r().string},m.defaultProps={defaultNumberOfRows:20,pluralReportingText:"Counties"}},"./components/ScrollableTable/ColorBlock/index.js":(b,d,e)=>{e.r(d),e.d(d,{default:()=>u});var _=e("./node_modules/styled-jsx/style.js"),a=e.n(_),o=e("./node_modules/next/dist/compiled/react/index.js"),n=e("./components/ScrollableTable/Checkmark/index.js"),r=o.createElement;const u=({color:s,children:m,isWinner:p})=>{let E;return s==="#fff"?E="#2a2a2a":E="#fff",r(o.Fragment,null,r(a(),{id:"2553278885"},[".color-block{padding:9px 6px;position:relative;min-width:66px;}",".cb-checkmark{position:absolute;top:-4px;left:-1px;}","@media screen and (min-width:758px){.color-block{padding:3px 6px;}}"]),r(a(),{id:"2870685770",dynamic:[E,s]},[`.color-block.__jsx-style-dynamic-selector{color:${E};background:${s};}`]),r("div",{className:"jsx-2553278885 "+a().dynamic([["2870685770",[E,s]]])+" color-block ls-normal f4 fw6 founders-cond tr"},p&&r("div",{className:"jsx-2553278885 "+a().dynamic([["2870685770",[E,s]]])+" cb-checkmark"},r(n.default,{width:16})),m))}},"./components/ScrollableTable/CountyLabel/index.js":(b,d,e)=>{e.r(d),e.d(d,{default:()=>r});var _=e("./node_modules/next/dist/compiled/react/index.js"),a=e("./components/ScrollableTable/Percent/index.js"),o=_.createElement;const n=({countyName:c,percentOfVotesIn:u,hideClass:s="dn-m"})=>o("div",{className:"county-label publico-txt truncate f3 pr2 pr9-m ls-normal"},c,o("span",{className:`db ${s} mt1 founders-mono gray-80 f1`},o(a.default,{value:u})," in"));n.displayName="CountyLabel";const r=n},"./components/ScrollableTable/ScrollableGrid/index.js":(b,d,e)=>{e.r(d),e.d(d,{default:()=>c});var _=e("./node_modules/styled-jsx/style.js"),a=e.n(_),o=e("./node_modules/next/dist/compiled/react/index.js"),n=o.createElement;const c=({children:u,minWidth:s="420px"})=>n(o.Fragment,null,n(a(),{id:"3624211105",dynamic:[s]},[`.scroll-container.__jsx-style-dynamic-selector{min-width:${s};}`]),n(a(),{id:"1526806201"},[".scrollable-grid{overflow-x:scroll;-webkit-box-flex:1;-webkit-flex-grow:1;-ms-flex-positive:1;flex-grow:1;}",".scrollable-grid::-webkit-scrollbar{-webkit-appearance:none;height:8px;}",".scrollable-grid::-webkit-scrollbar-thumb{border-radius:8px;background-color:rgba(0,0,0,0.5);-webkit-box-shadow:0 0 1px rgba(255,255,255,0.5);}",".scroll-container{width:100%;min-width:420px;margin-bottom:8px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}",".scroll-container>*:last-child{-webkit-box-flex:1;-webkit-flex-grow:1;-ms-flex-positive:1;flex-grow:1;}"]),n("div",{className:"jsx-1526806201 "+a().dynamic([["3624211105",[s]]])+" scrollable-grid"},n("div",{className:"jsx-1526806201 "+a().dynamic([["3624211105",[s]]])+" scroll-container"},u)))},"./components/ToggleButton.js":(b,d,e)=>{e.r(d),e.d(d,{default:()=>p});var _=e("./node_modules/styled-jsx/style.js"),a=e.n(_),o=e("./node_modules/next/dist/compiled/react/index.js"),n=e("./node_modules/classnames/index.js"),r=e.n(n),c=e("./components/icons/Chevron.js"),u=e("./components/LinklessButton.js"),s=o.createElement;const p=({classes:E,onClick:y,toggled:j,displayMoreText:C,displayLessText:D})=>s(o.Fragment,null,s(a(),{id:"3204447588"},[".toggle-button.jsx-3204447588{margin:20px auto 0;max-width:var(--toggle-button-max-width,430px);}",".toggle-button.is-open .chevron{-webkit-transform:rotate(180deg);-ms-transform:rotate(180deg);transform:rotate(180deg);}"]),s("div",{className:"jsx-3204447588 "+(r()("toggle-button",E,{"is-open":j})||"")},s(u.default,{onClick:y,classes:"w-100 pv2"},s("div",{"data-testid":"toggle-button",className:"jsx-3204447588 df flex-row founders-cond justify-center lh-none f4 fw6 ttu"},s("span",{className:"jsx-3204447588 pr1"},j?D:C),s("span",{className:"jsx-3204447588"},s(c.default,{color:"#3061FF"}))))))},"./components/hooks/useShowAllToggle.js":(b,d,e)=>{e.r(d),e.d(d,{default:()=>o});var _=e("./node_modules/next/dist/compiled/react/index.js"),a=_.createElement;function o({id:n,defaultValue:r=!1}){const{0:c,1:u}=(0,_.useState)(r),s=(0,_.useCallback)(()=>{u(m=>(m&&document.getElementById(n)?.scrollIntoView?.(),!m))},[n]);return{showAllRows:c,onToggle:s,anchor:a("div",{id:n,className:"absolute",style:{top:-200}})}}},"./components/icons/Chevron.js":(b,d,e)=>{e.r(d),e.d(d,{default:()=>s});var _=e("./node_modules/styled-jsx/style.js"),a=e.n(_),o=e("./node_modules/next/dist/compiled/react/index.js"),n=e("./node_modules/prop-types/index.js"),r=e.n(n),c=o.createElement;const u=({width:m,height:p})=>c(o.Fragment,null,c(a(),{id:"3286215947"},[".chevron.jsx-3286215947{-webkit-transition:-webkit-transform 100ms linear;-webkit-transition:transform 100ms linear;transition:transform 100ms linear;}",".chevron.jsx-3286215947 path.jsx-3286215947{fill:currentColor;}"]),c("svg",{width:m,height:p,viewBox:"0 0 12 8",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"jsx-3286215947 chevron"},c("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M12 2.06206L5.95831 8L0 2.14401L1.55988 0.58195L5.95831 4.90485L8.19922 2.70243L10.4401 0.5L12 2.06206Z",className:"jsx-3286215947"})));u.propTypes={width:r().string,height:r().string},u.defaultProps={width:"11",height:"7"};const s=u},"./helpers/getPluralReportingTypeString.js":(b,d,e)=>{e.r(d),e.d(d,{default:()=>a});const a=o=>{if(typeof o!="string")return"";const n=o.slice(-1)==="y",r=o.slice(-2)==="sh";return n?`${o.slice(0,-1)}ies`:r?`${o}es`:`${o}s`}}}]);
