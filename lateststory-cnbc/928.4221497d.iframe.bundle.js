"use strict";(globalThis.webpackChunkfirecracker=globalThis.webpackChunkfirecracker||[]).push([[928],{"./components/DistrictResultsModule/CandidateList/index.js":(C,d,e)=>{e.r(d),e.d(d,{default:()=>te});var m=e("./node_modules/styled-jsx/style.js"),n=e.n(m),o=e("./node_modules/lodash.get/index.js"),a=e.n(o),i=e("./node_modules/next/dist/compiled/react/index.js"),y=e("./node_modules/prop-types/index.js"),c=e.n(y),h=e("./node_modules/classnames/index.js"),u=e.n(h),T=e("./node_modules/next/amp.js"),L=e("./node_modules/react-i18next/dist/es/index.js"),j=e("./components/ScrollableTable/CandidateName/index.js"),O=e("./components/Candidate/Candidate.js"),D=e("./components/Checkmark.js"),M=e("./components/GainFlag.js"),_=i.createElement;const P=({alignment:f,children:E,classes:v})=>{let p;return f==="right"?p="justify-end":f==="center"?p="justify-center":p="justify-start",_(i.Fragment,null,_(n(),{id:"3509604607"},["li.jsx-3509604607{color:#2a2a2a;width:100%;}","@media screen and (min-width:1240px){li.jsx-3509604607{width:325px;}}"]),_("li",{className:"jsx-3509604607 "+(u()("df pa0 pb2 items-start justify-between founders-mono f3",p,v)||"")},E))};var G=e("./components/modules/PageHeader/2022/StatewideRaceResults/CandidateToggle.js"),w=i.createElement;const b=({isIncumbent:f,partyAbbreviation:E,t:v})=>{const p=E!==""&&E!=="Dem"&&E!=="Rep";if(!f&&!p)return null;let A="";return f&&p?A=`${E}/INCUMBENT`:f?A="INCUMBENT":p&&(A=E),w("div",{className:"incumbent-label f2 ttu ml5"},v(A))};b.displayName="IncumbentLabel";const H=(0,L.withTranslation)()(b);var Y=e("./components/ScrollableTable/Number/index.js"),J=e("./components/ScrollableTable/Percent/index.js"),Q=e("./helpers/pluralize.js"),F=e("./helpers/getCallStatus.js"),x=e("./helpers/constants.js");const Z=["dem","rep","gop"];function k(f){return typeof f!="string"?!1:Z.includes(f.toLowerCase())}var l=i.createElement;const q=[x.CALL_STATUSES.RUNOFF,x.CALL_STATUSES.ADVANCE,x.CALL_STATUSES.MULTIPLE_WINNERS,x.CALL_STATUSES.TOO_CLOSE_TO_CALL,x.CALL_STATUSES.TOO_EARLY_TO_CALL],ee=[x.CALL_STATUSES.TOO_CLOSE_TO_CALL,x.CALL_STATUSES.TOO_EARLY_TO_CALL],R=({t:f,showAllCandidates:E,callStatus:v,stateAbbr:p,isRunoff:A,items:S=[],showMinorPartyLabels:se,showVoteSuffix:ne})=>{const $=(0,T.useAmp)(),ae=E||!!$,{0:U,1:le}=(0,i.useState)(ae),z=x.MULTI_WINNER_STATES.includes(p),g=A||v===x.CALL_STATUSES.MULTIPLE_WINNERS?S.filter(r=>x.ADVANCING_CANDIDATE_CALL_STATUSES.includes(r.callStatus)):[],t=(r=>r==="AK"&&g.length>0?g.length:2)(p),de=!E&&S.length>t&&!$,oe=U?1e3:t,ie=S.slice(0,oe),ce=!!v&&q.includes(v),re=(r=>{const N=r==="AK"?4:2;return g.length===N})(p),s=g.length%2===0?0:1;return l(i.Fragment,null,l(n(),{id:"3855924841",dynamic:[t+1+s,t+2+s,t+1+s]},["ul.__jsx-style-dynamic-selector{list-style:none;margin:0 0;width:100%;}",".number.__jsx-style-dynamic-selector{min-width:65px;}",".incumbent.__jsx-style-dynamic-selector{margin-left:2px;}",".cn-wrapper.__jsx-style-dynamic-selector div.cn{padding-left:0;}","@media screen and (min-width:1240px){ul.__jsx-style-dynamic-selector > li:nth-child(odd){padding-right:30px;}ul.__jsx-style-dynamic-selector > li:nth-child(even){padding-left:30px;}}","button.__jsx-style-dynamic-selector{outline:none;border:none;background:none;cursor:pointer;}",".call-status.__jsx-style-dynamic-selector .checkmark{display:block;}",".call-status.__jsx-style-dynamic-selector .gain{margin-left:1px;padding:1px 4px;}",".characterization.__jsx-style-dynamic-selector{background:#ffd60c;padding:3px 10px 2px;}",".characterization-container.__jsx-style-dynamic-selector{margin-top:10px;}",".characterization-container[data-advancing='0'].__jsx-style-dynamic-selector .characterization.__jsx-style-dynamic-selector{-webkit-flex:1;-ms-flex:1;flex:1;}",".runoff-advancing.__jsx-style-dynamic-selector{color:#ffd60c;padding:3px 10px 2px;border-left:1px solid #fff;}",".show-button.is-open .chevron{-webkit-transform:rotate(180deg);-ms-transform:rotate(180deg);transform:rotate(180deg);}",`.with-more-candidates.__jsx-style-dynamic-selector .candidate-list__item:nth-child( ${t+1+s} ){border-top:1px solid #cccc;margin-top:8px;padding-top:16px;}`,".empty-item.__jsx-style-dynamic-selector{border:none;}",`@media screen and (min-width:1240px){.characterization-container[data-advancing='1'].__jsx-style-dynamic-selector{width:calc(50% - 4px);}.with-more-candidates.__jsx-style-dynamic-selector .candidate-list__item:nth-child( ${t+2+s} ){border-top:1px solid #cccc;margin-top:8px;padding-top:16px;}.with-more-candidates.__jsx-style-dynamic-selector .candidate-list__item:nth-child( ${t+1+s} ):last-child::after{content:'';border-top:1px solid #cccc;top:-1px;left:100%;width:100%;position:absolute;}}`]),l("div",{className:n().dynamic([["3855924841",[t+1+s,t+2+s,t+1+s]]])+" flex-grow-1"},ce&&l("div",{"data-advancing":g.length,className:n().dynamic([["3855924841",[t+1+s,t+2+s,t+1+s]]])+" characterization-container founders-mono f2 lh-none ls-tighter ttu mr2-xl df"},!z&&l("div",{className:n().dynamic([["3855924841",[t+1+s,t+2+s,t+1+s]]])+" characterization df items-center gray-100"},f(A?"Runoff":F.callStatusMapping[v])),z&&ee.includes(v)&&l("div",{className:n().dynamic([["3855924841",[t+1+s,t+2+s,t+1+s]]])+" characterization df items-center gray-100"},f(F.callStatusMapping[v])),g.length>0&&l("div",{className:n().dynamic([["3855924841",[t+1+s,t+2+s,t+1+s]]])+" runoff-advancing bg-gray-100 flex-1"},f("Advancing")," ",f((0,Q.default)("candidate",g.length)))),l("ul",{"data-advancing":g.length,className:n().dynamic([["3855924841",[t+1+s,t+2+s,t+1+s]]])+" "+(u()("df pa0 pt2 flex-column flex-row-l flex-wrap",{"with-more-candidates":re||p==="AK"&&g.length})||"")},ie.map((r,N)=>{const I=a()(r,"firstName")||"",K=a()(r,"lastName")||"",W=a()(r,"partyAbbreviation")||"",me=a()(r,"isWinner")||!1,ue=a()(r,"isGain")||!1,fe=a()(r,"totalPercentReceived")||0,V=a()(r,"totalVotesReceived")||0,pe=a()(r,"partyColor")||"#fff",ye=a()(r,"isIncumbent")||!1,ge=se||k(W)?W:"",X=g.length>0&&g.indexOf(r)===g.length-1;return l(i.Fragment,{key:`candidateListItem-${I}-${K}`},l(P,{classes:u()("candidate-list__item relative",{"last-advance":X&&N%2!==0&&p==="AK"})},l("div",{className:n().dynamic([["3855924841",[t+1+s,t+2+s,t+1+s]]])+" df flex-column"},l("div",{className:n().dynamic([["3855924841",[t+1+s,t+2+s,t+1+s]]])+" df"},l("div",{className:n().dynamic([["3855924841",[t+1+s,t+2+s,t+1+s]]])+" mr2 color-square"},l(O.default,{candidateColor:pe.substring(1),party:W})),l("div",{className:n().dynamic([["3855924841",[t+1+s,t+2+s,t+1+s]]])+" df items-center flex-wrap"},l("div",{className:n().dynamic([["3855924841",[t+1+s,t+2+s,t+1+s]]])+" cn-wrapper df items-center mr1 mb2"},l(j.default,{firstName:I,lastName:K})),l("div",{className:n().dynamic([["3855924841",[t+1+s,t+2+s,t+1+s]]])+" call-status df items-center mb2"},me&&l(D.default,{"aria-hidden":"true",width:"14px",height:"14px",verticalAlign:"middle",nonpartisanWinner:!0,shouldDisplay:!0,addMargin:!1}),ue&&l(M.default,{className:"gain lh-none ml-2 mr3 py-1",textColor:"gray-100",bgColor:"bg-FFD60C",isGain:!0,useV2:!0})))),l("div",{className:n().dynamic([["3855924841",[t+1+s,t+2+s,t+1+s]]])+" incumbent"},l(H,{isIncumbent:ye,partyAbbreviation:ge}))),l("div",{className:n().dynamic([["3855924841",[t+1+s,t+2+s,t+1+s]]])+" df items-center"},l("div",{className:n().dynamic([["3855924841",[t+1+s,t+2+s,t+1+s]]])+" total-percent f4 founders-cond mr4"},l(J.default,{value:fe})),l("div",{className:n().dynamic([["3855924841",[t+1+s,t+2+s,t+1+s]]])+" total-votes number f2 tr"},l(Y.default,{value:V,suffix:ne&&V===0?" votes":null})))),X&&N%2===0&&p==="AK"&&l(P,{classes:"candidate-list__item relative empty-item",key:`after-${I}-${K}-empty`}))})),de&&l("div",{className:n().dynamic([["3855924841",[t+1+s,t+2+s,t+1+s]]])+" "+(u()("tr mb1 show-button",{"is-open":U})||"")},l(G.default,{className:"ml-auto mr2",onClick:()=>le(r=>!r),showAll:U}))))};R.defaultProps={showAllCandidates:!1,isRunoff:!1,showMinorPartyLabels:!0,showVoteSuffix:!1},R.propTypes={showAllCandidates:c().bool,callStatus:c().string.isRequired,isRunoff:c().bool,showMinorPartyLabels:c().bool,showVoteSuffix:c().bool};const te=(0,L.withTranslation)()(R)},"./components/ScrollableTable/CandidateName/index.js":(C,d,e)=>{e.r(d),e.d(d,{default:()=>y});var m=e("./node_modules/styled-jsx/style.js"),n=e.n(m),o=e("./node_modules/next/dist/compiled/react/index.js"),a=o.createElement;const y=({firstName:c,lastName:h})=>{if(typeof c!="string"||typeof h!="string")return null;let u;return c?u=`${c.charAt(0)}. ${h}`:u=h,a(o.Fragment,null,a(n(),{id:"2671302789"},["div.cn.jsx-2671302789{padding:0 4px 0 6px;}"]),a("div",{className:"jsx-2671302789 publico-txt f3 cn"},u))}},"./components/ScrollableTable/Number/index.js":(C,d,e)=>{e.r(d),e.d(d,{default:()=>T});var m=e("./node_modules/styled-jsx/style.js"),n=e.n(m),o=e("./node_modules/next/dist/compiled/react/index.js"),a=e("./node_modules/prop-types/index.js"),i=e.n(a),y=e("./node_modules/d3-format/src/defaultLocale.js"),c=o.createElement;const h=(0,y.format)(","),u=({value:L,suffix:j})=>c(o.Fragment,null,c(n(),{id:"3437879980"},[".number.jsx-3437879980{color:#555;width:100%;}"]),c("div",{className:"jsx-3437879980 dib number f2 founders-mono"},h(L),j)),T=u;u.defaultProps={suffix:null},u.propTypes={value:i().number.isRequired,suffix:i().string}},"./components/ScrollableTable/Percent/index.js":(C,d,e)=>{e.r(d),e.d(d,{default:()=>y});var m=e("./node_modules/styled-jsx/style.js"),n=e.n(m),o=e("./node_modules/next/dist/compiled/react/index.js"),a=o.createElement;const y=({value:c})=>a(o.Fragment,null,a(n(),{id:"998961378"},[".percent.jsx-998961378{display:inline-block;}"]),a("span",{className:"jsx-998961378 percent"},c,"%"))},"./components/icons/CloseX.js":(C,d,e)=>{e.r(d),e.d(d,{default:()=>a});var m=e("./node_modules/next/dist/compiled/react/index.js"),n=m.createElement;const o=()=>n("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none"},n("path",{d:"M0.848371 22.9103L22.9101 0.848531",stroke:"#3061FF"}),n("path",{d:"M0.848371 0.848528L22.9101 22.9103",stroke:"#3061FF"}));o.displayName="CloseX";const a=o},"./components/modules/NationalMapModule/NationalMapModule.props.js":(C,d,e)=>{e.r(d),e.d(d,{NationalMapDataCandidate:()=>o});var m=e("./node_modules/prop-types/index.js"),n=e.n(m);const o=n().shape({callStatus:n().string,candidatePoliticalPartyAbbreviation:n().string,candidatePoliticalPartyName:n().string,firstName:n().string,lastName:n().string,incumbent:n().bool,isWinner:n().bool,percentTotalVote:n().number,totalVotes:n().number})},"./components/modules/PageHeader/2022/StatewideRaceResults/CandidateToggle.js":(C,d,e)=>{e.r(d),e.d(d,{default:()=>L});var m=e("./node_modules/styled-jsx/style.js"),n=e.n(m),o=e("./node_modules/next/dist/compiled/react/index.js"),a=e("./node_modules/prop-types/index.js"),i=e.n(a),y=e("./node_modules/classnames/index.js"),c=e.n(y),h=e("./node_modules/react-i18next/dist/es/index.js"),u=o.createElement;const T=({t:j,advancingCount:O,className:D,isRunoff:M,showAll:_,onClick:B})=>{let P=`- ${j("fewer candidates")}`;return M&&O===1?P=`- ${j("advancing candidate")}`:M&&O>1&&(P=`- ${j("advancing candidates")}`),u(o.Fragment,null,u(n(),{id:"1630818092"},[".header-candidate-toggle{outline:none;border:none;background:none;color:#3061ff;cursor:pointer;}"]),u("button",{onClick:B,type:"button",className:"jsx-1630818092 "+(c()("header-candidate-toggle f2 founders-mono tl ma0 pa0",D)||"")},_?P:`+ ${j("all candidates")}`))};T.propTypes={advancingCount:i().number,className:i().string,isRunoff:i().bool,onClick:i().func,showAll:i().bool},T.defaultProps={advancingCount:0,className:null,isRunoff:!1,onClick:()=>{},showAll:!1};const L=(0,h.withTranslation)()(T)},"./helpers/pluralize.js":(C,d,e)=>{e.r(d),e.d(d,{SINGULAR_TO_PLURAL:()=>m,default:()=>n});const m={seat:"seats",race:"races",is:"are",wins:"win",advances:"advance",day:"days",delegate:"delegates",primary:"primaries",candidate:"candidates",republican:"republicans",democrat:"democrats",municipality:"municipalities","legislative district":"legislative districts","congressional district":"congressional districts",township:"townships",district:"districts",ward:"wards",county:"counties",superdelegate:"superdelegates",vote:"votes"};function n(o,a){return a===1?o:m[o]??o}},"./helpers/translateReplace.js":(C,d,e)=>{e.r(d),e.d(d,{default:()=>n});const n=(o,a)=>{if(!a||typeof a!="string")return a;const i=["Polls close at","Polls begin to close today at","Election on","Polls closed","Seat","House"];if(o?.language==="es"&&i.find(y=>a.includes(y))){const y=i.find(c=>a.includes(c));return a.replace(y,o.t(y))}return a}}}]);
