"use strict";(globalThis.webpackChunkfirecracker=globalThis.webpackChunkfirecracker||[]).push([[1807],{"./components/Candidate/Candidate.js":(M,o,s)=>{s.r(o),s.d(o,{default:()=>y});var i=s("./node_modules/styled-jsx/style.js"),n=s.n(i),e=s("./node_modules/next/dist/compiled/react/index.js"),c=s("./node_modules/prop-types/index.js"),t=s.n(c),r=s("./node_modules/classnames/index.js"),m=s.n(r),E=s("./components/CandidateTile.js"),d=s("./components/Headshot/2020/index.js"),u=e.createElement;const p=({backgroundHeight:j,backgroundWidth:O,candidateColor:g,candidateName:x,headshotUrl:T,party:P,lineHeight:v,height:C,width:f})=>{const L=m()({"candidate-circle":!T,"dif relative justify-center candidate-outline":T});return u("div",{className:n().dynamic([["1947762178",[j||C,O||f,g&&!P?`#${g}`:"#ebebeb",f/2]]])+" di headshot-wrapper relative z-0"},u(n(),{id:"1947762178",dynamic:[j||C,O||f,g&&!P?`#${g}`:"#ebebeb",f/2]},[`.headshot-wrapper.__jsx-style-dynamic-selector .headshot::before{content:'';position:absolute;bottom:0;left:0;z-index:-1;height:${j||C}px;width:${O||f}px;background-color:${g&&!P?`#${g}`:"#ebebeb"};border-radius:50%;}`,`.headshot-wrapper.__jsx-style-dynamic-selector .headshot{border-radius:${f/2}px;}`]),T&&u(d.default,{headshotUrl:T,altText:x,height:C,width:f,classes:"relative",useFallback:!1}),P&&u(E.default,{party:P,bgColor:g,fontStyle:"founders-cond",className:L,lineHeight:v}))};p.displayName="Candidate",p.propTypes={backgroundHeight:t().number,backgroundWidth:t().number,candidateColor:t().string,candidateName:t().string,headshotUrl:t().string,height:t().number,party:t().string,lineHeight:t().string,width:t().number},p.defaultProps={backgroundHeight:null,backgroundWidth:null,candidateColor:"",candidateName:"",headshotUrl:"",height:60,party:"",lineHeight:"16px",width:60};const y=p},"./components/CandidateTile.js":(M,o,s)=>{s.r(o),s.d(o,{default:()=>u});var i=s("./node_modules/styled-jsx/style.js"),n=s.n(i),e=s("./node_modules/next/dist/compiled/react/index.js"),c=s("./node_modules/prop-types/index.js"),t=s.n(c),r=s("./node_modules/classnames/index.js"),m=s.n(r),E=e.createElement;const d=({party:p,bgColor:y,fontStyle:j,className:O,lineHeight:g})=>{const x=p&&p.charAt(0);return E(e.Fragment,null,E(n(),{id:"3553201318"},[".candidate-outline.jsx-3553201318{bottom:20px;left:42px;outline:1.5px solid #ffffff;}",".candidate-circle.jsx-3553201318{border-radius:50%;}"]),E("span",{style:{lineHeight:g},className:"jsx-3553201318 "+(m()(`tile f1 lh-none white ttu tc dib w1 h1 bg-${y}`,j,O)||"")},x))};d.propTypes={party:t().string,bgColor:t().string,fontStyle:t().string,className:t().string,lineHeight:t().string},d.defaultProps={party:"",bgColor:"595959",fontStyle:"founders-mono",className:null,lineHeight:"16px"};const u=d},"./components/Checkmark.js":(M,o,s)=>{s.r(o),s.d(o,{default:()=>p});var i=s("./node_modules/styled-jsx/style.js"),n=s.n(i),e=s("./node_modules/classnames/index.js"),c=s.n(e),t=s("./node_modules/next/dist/compiled/react/index.js"),r=s("./node_modules/prop-types/index.js"),m=s.n(r),E=s("./node_modules/react-i18next/dist/es/index.js"),d=t.createElement;const u=({t:y,color:j,height:O,hasTransparentBackground:g,width:x,nonpartisanWinner:T,addMargin:P,shouldDisplay:v,hideOnMobile:C=!1,verticalAlign:f,className:L})=>{const h=g?"transparent":T?"#FFD60C":"#fff",S=c()({ml1:P,dib:v&&!C,"dib-m":v&&C});return d("span",{"data-test":"checkmark-wrapper",className:n().dynamic([["1491606757",[h,O||x,x,f,j]]])+" "+(L||"")},d(n(),{id:"1491606757",dynamic:[h,O||x,x,f,j]},[`.checkmark.__jsx-style-dynamic-selector{background-color:${h};height:${O||x};width:${x};vertical-align:${f};stroke:${j};}`]),d("svg",{"data-test":"checkmark","data-testid":"checkmark",viewBox:"0 0 14 14",strokeWidth:"2",role:"img","aria-label":y("Winner"),className:n().dynamic([["1491606757",[h,O||x,x,f,j]]])+` checkmark dn ${S}`},d("path",{fill:"none",d:"M12,3.5l-6.81,7L2,7.8",className:n().dynamic([["1491606757",[h,O||x,x,f,j]]])})))};u.displayName="Checkmark",u.propTypes={color:m().string,height:m().string,addMargin:m().bool,nonpartisanWinner:m().bool,width:m().string,shouldDisplay:m().bool,hideOnMobile:m().bool,verticalAlign:m().oneOf(["bottom","top","middle","unset","baseline"]),hasTransparentBackground:m().bool,className:m().string},u.defaultProps={color:"#2A2A2A",height:null,addMargin:!0,nonpartisanWinner:!1,width:"20px",shouldDisplay:!1,hideOnMobile:!1,verticalAlign:"bottom",hasTransparentBackground:!1,className:""};const p=(0,E.withTranslation)()(u)},"./components/DistrictResultsModule/CandidateList/index.js":(M,o,s)=>{s.r(o),s.d(o,{default:()=>X});var i=s("./node_modules/styled-jsx/style.js"),n=s.n(i),e=s("./node_modules/lodash.get/index.js"),c=s.n(e),t=s("./node_modules/next/dist/compiled/react/index.js"),r=s("./node_modules/prop-types/index.js"),m=s.n(r),E=s("./node_modules/classnames/index.js"),d=s.n(E),u=s("./node_modules/next/amp.js"),p=s("./node_modules/react-i18next/dist/es/index.js"),y=s("./components/ScrollableTable/CandidateName/index.js"),j=s("./components/Candidate/Candidate.js"),O=s("./components/Checkmark.js"),g=s("./components/GainFlag.js"),x=t.createElement;const P=({alignment:R,children:N,classes:B})=>{let U;return R==="right"?U="justify-end":R==="center"?U="justify-center":U="justify-start",x(t.Fragment,null,x(n(),{id:"3509604607"},["li.jsx-3509604607{color:#2a2a2a;width:100%;}","@media screen and (min-width:1240px){li.jsx-3509604607{width:325px;}}"]),x("li",{className:"jsx-3509604607 "+(d()("df pa0 pb2 items-start justify-between founders-mono f3",U,B)||"")},N))};var v=s("./components/modules/PageHeader/2022/StatewideRaceResults/CandidateToggle.js"),C=t.createElement;const f=({isIncumbent:R,partyAbbreviation:N,t:B})=>{const U=N!==""&&N!=="Dem"&&N!=="Rep";if(!R&&!U)return null;let $="";return R&&U?$=`${N}/INCUMBENT`:R?$="INCUMBENT":U&&($=N),C("div",{className:"incumbent-label f2 ttu ml5"},B($))};f.displayName="IncumbentLabel";const L=(0,p.withTranslation)()(f);var A=s("./components/ScrollableTable/Number/index.js"),h=s("./components/ScrollableTable/Percent/index.js"),S=s("./helpers/pluralize.js"),K=s("./helpers/getCallStatus.js"),I=s("./helpers/constants.js");const F=["dem","rep","gop"];function b(R){return typeof R!="string"?!1:F.includes(R.toLowerCase())}var _=t.createElement;const z=[I.CALL_STATUSES.RUNOFF,I.CALL_STATUSES.ADVANCE,I.CALL_STATUSES.MULTIPLE_WINNERS,I.CALL_STATUSES.TOO_CLOSE_TO_CALL,I.CALL_STATUSES.TOO_EARLY_TO_CALL],V=[I.CALL_STATUSES.TOO_CLOSE_TO_CALL,I.CALL_STATUSES.TOO_EARLY_TO_CALL],H=({t:R,showAllCandidates:N,callStatus:B,stateAbbr:U,isRunoff:$,items:Y=[],showMinorPartyLabels:ts,showVoteSuffix:ns})=>{const k=(0,u.useAmp)(),as=N||!!k,{0:Z,1:ls}=(0,t.useState)(as),q=I.MULTI_WINNER_STATES.includes(U),W=$||B===I.CALL_STATUSES.MULTIPLE_WINNERS?Y.filter(D=>I.ADVANCING_CANDIDATE_CALL_STATUSES.includes(D.callStatus)):[],a=(D=>D==="AK"&&W.length>0?W.length:2)(U),ds=!N&&Y.length>a&&!k,os=Z?1e3:a,rs=Y.slice(0,os),is=!!B&&z.includes(B),cs=(D=>{const G=D==="AK"?4:2;return W.length===G})(U),l=W.length%2===0?0:1;return _(t.Fragment,null,_(n(),{id:"3855924841",dynamic:[a+1+l,a+2+l,a+1+l]},["ul.__jsx-style-dynamic-selector{list-style:none;margin:0 0;width:100%;}",".number.__jsx-style-dynamic-selector{min-width:65px;}",".incumbent.__jsx-style-dynamic-selector{margin-left:2px;}",".cn-wrapper.__jsx-style-dynamic-selector div.cn{padding-left:0;}","@media screen and (min-width:1240px){ul.__jsx-style-dynamic-selector > li:nth-child(odd){padding-right:30px;}ul.__jsx-style-dynamic-selector > li:nth-child(even){padding-left:30px;}}","button.__jsx-style-dynamic-selector{outline:none;border:none;background:none;cursor:pointer;}",".call-status.__jsx-style-dynamic-selector .checkmark{display:block;}",".call-status.__jsx-style-dynamic-selector .gain{margin-left:1px;padding:1px 4px;}",".characterization.__jsx-style-dynamic-selector{background:#ffd60c;padding:3px 10px 2px;}",".characterization-container.__jsx-style-dynamic-selector{margin-top:10px;}",".characterization-container[data-advancing='0'].__jsx-style-dynamic-selector .characterization.__jsx-style-dynamic-selector{-webkit-flex:1;-ms-flex:1;flex:1;}",".runoff-advancing.__jsx-style-dynamic-selector{color:#ffd60c;padding:3px 10px 2px;border-left:1px solid #fff;}",".show-button.is-open .chevron{-webkit-transform:rotate(180deg);-ms-transform:rotate(180deg);transform:rotate(180deg);}",`.with-more-candidates.__jsx-style-dynamic-selector .candidate-list__item:nth-child( ${a+1+l} ){border-top:1px solid #cccc;margin-top:8px;padding-top:16px;}`,".empty-item.__jsx-style-dynamic-selector{border:none;}",`@media screen and (min-width:1240px){.characterization-container[data-advancing='1'].__jsx-style-dynamic-selector{width:calc(50% - 4px);}.with-more-candidates.__jsx-style-dynamic-selector .candidate-list__item:nth-child( ${a+2+l} ){border-top:1px solid #cccc;margin-top:8px;padding-top:16px;}.with-more-candidates.__jsx-style-dynamic-selector .candidate-list__item:nth-child( ${a+1+l} ):last-child::after{content:'';border-top:1px solid #cccc;top:-1px;left:100%;width:100%;position:absolute;}}`]),_("div",{className:n().dynamic([["3855924841",[a+1+l,a+2+l,a+1+l]]])+" flex-grow-1"},is&&_("div",{"data-advancing":W.length,className:n().dynamic([["3855924841",[a+1+l,a+2+l,a+1+l]]])+" characterization-container founders-mono f2 lh-none ls-tighter ttu mr2-xl df"},!q&&_("div",{className:n().dynamic([["3855924841",[a+1+l,a+2+l,a+1+l]]])+" characterization df items-center gray-100"},R($?"Runoff":K.callStatusMapping[B])),q&&V.includes(B)&&_("div",{className:n().dynamic([["3855924841",[a+1+l,a+2+l,a+1+l]]])+" characterization df items-center gray-100"},R(K.callStatusMapping[B])),W.length>0&&_("div",{className:n().dynamic([["3855924841",[a+1+l,a+2+l,a+1+l]]])+" runoff-advancing bg-gray-100 flex-1"},R("Advancing")," ",R((0,S.default)("candidate",W.length)))),_("ul",{"data-advancing":W.length,className:n().dynamic([["3855924841",[a+1+l,a+2+l,a+1+l]]])+" "+(d()("df pa0 pt2 flex-column flex-row-l flex-wrap",{"with-more-candidates":cs||U==="AK"&&W.length})||"")},rs.map((D,G)=>{const J=c()(D,"firstName")||"",Q=c()(D,"lastName")||"",w=c()(D,"partyAbbreviation")||"",ms=c()(D,"isWinner")||!1,us=c()(D,"isGain")||!1,Es=c()(D,"totalPercentReceived")||0,ss=c()(D,"totalVotesReceived")||0,_s=c()(D,"partyColor")||"#fff",fs=c()(D,"isIncumbent")||!1,ps=ts||b(w)?w:"",es=W.length>0&&W.indexOf(D)===W.length-1;return _(t.Fragment,{key:`candidateListItem-${J}-${Q}`},_(P,{classes:d()("candidate-list__item relative",{"last-advance":es&&G%2!==0&&U==="AK"})},_("div",{className:n().dynamic([["3855924841",[a+1+l,a+2+l,a+1+l]]])+" df flex-column"},_("div",{className:n().dynamic([["3855924841",[a+1+l,a+2+l,a+1+l]]])+" df"},_("div",{className:n().dynamic([["3855924841",[a+1+l,a+2+l,a+1+l]]])+" mr2 color-square"},_(j.default,{candidateColor:_s.substring(1),party:w})),_("div",{className:n().dynamic([["3855924841",[a+1+l,a+2+l,a+1+l]]])+" df items-center flex-wrap"},_("div",{className:n().dynamic([["3855924841",[a+1+l,a+2+l,a+1+l]]])+" cn-wrapper df items-center mr1 mb2"},_(y.default,{firstName:J,lastName:Q})),_("div",{className:n().dynamic([["3855924841",[a+1+l,a+2+l,a+1+l]]])+" call-status df items-center mb2"},ms&&_(O.default,{"aria-hidden":"true",width:"14px",height:"14px",verticalAlign:"middle",nonpartisanWinner:!0,shouldDisplay:!0,addMargin:!1}),us&&_(g.default,{className:"gain lh-none ml-2 mr3 py-1",textColor:"gray-100",bgColor:"bg-FFD60C",isGain:!0,useV2:!0})))),_("div",{className:n().dynamic([["3855924841",[a+1+l,a+2+l,a+1+l]]])+" incumbent"},_(L,{isIncumbent:fs,partyAbbreviation:ps}))),_("div",{className:n().dynamic([["3855924841",[a+1+l,a+2+l,a+1+l]]])+" df items-center"},_("div",{className:n().dynamic([["3855924841",[a+1+l,a+2+l,a+1+l]]])+" total-percent f4 founders-cond mr4"},_(h.default,{value:Es})),_("div",{className:n().dynamic([["3855924841",[a+1+l,a+2+l,a+1+l]]])+" total-votes number f2 tr"},_(A.default,{value:ss,suffix:ns&&ss===0?" votes":null})))),es&&G%2===0&&U==="AK"&&_(P,{classes:"candidate-list__item relative empty-item",key:`after-${J}-${Q}-empty`}))})),ds&&_("div",{className:n().dynamic([["3855924841",[a+1+l,a+2+l,a+1+l]]])+" "+(d()("tr mb1 show-button",{"is-open":Z})||"")},_(v.default,{className:"ml-auto mr2",onClick:()=>ls(D=>!D),showAll:Z}))))};H.defaultProps={showAllCandidates:!1,isRunoff:!1,showMinorPartyLabels:!0,showVoteSuffix:!1},H.propTypes={showAllCandidates:m().bool,callStatus:m().string.isRequired,isRunoff:m().bool,showMinorPartyLabels:m().bool,showVoteSuffix:m().bool};const X=(0,p.withTranslation)()(H)},"./components/DistrictResultsModule/DistrictInfo/index.js":(M,o,s)=>{s.r(o),s.d(o,{default:()=>r});var i=s("./node_modules/styled-jsx/style.js"),n=s.n(i),e=s("./node_modules/next/dist/compiled/react/index.js"),c=e.createElement;const r=({children:m})=>c(e.Fragment,null,c(n(),{id:"2569509826"},["div.jsx-2569509826{min-width:60px;}","@media screen and (min-width:758px){div.jsx-2569509826{max-width:100px;width:100%;}}"]),c("div",{className:"jsx-2569509826 founders-cond pr2 pt2 f5 flex-shrink-0"},m))},"./components/DistrictResultsModule/DistrictPercentIn/index.js":(M,o,s)=>{s.r(o),s.d(o,{default:()=>E});var i=s("./node_modules/styled-jsx/style.js"),n=s.n(i),e=s("./node_modules/next/dist/compiled/react/index.js"),c=s("./node_modules/react-i18next/dist/es/index.js"),t=s("./components/ScrollableTable/Percent/index.js"),r=e.createElement;const m=({percentIn:d,t:u,i18n:{language:p}})=>{const y=p==="es"?"f1 pr1":"f2 pr2";return r(e.Fragment,null,r(n(),{id:"3181654362"},["div.jsx-3181654362{border-left:1px solid #ebebeb;width:80px;}"]),r("div",{className:`jsx-3181654362 dn db-xl founders-mono ${y} pt2 tr ws-nowrap flex-shrink-0`},r(t.default,{value:d})," ",u("in")))},E=(0,c.withTranslation)()(m)},"./components/DistrictResultsModule/Row/index.js":(M,o,s)=>{s.r(o),s.d(o,{default:()=>E});var i=s("./node_modules/styled-jsx/style.js"),n=s.n(i),e=s("./node_modules/next/dist/compiled/react/index.js"),c=s("./node_modules/classnames/index.js"),t=s.n(c),r=e.createElement;const E=({borderColor:d="#ccc",alignCenter:u,alignBottom:p,split:y,children:j,classes:O,testId:g=null})=>{const x=t()("df",O,{"items-center":u,"items-end":p,"justify-between":y});return r(e.Fragment,null,r(n(),{id:"1102595911",dynamic:[d,d]},[`div.__jsx-style-dynamic-selector{border-bottom:1px solid ${d};}`,"div.__jsx-style-dynamic-selector:first-child{border-bottom:none;}",`@media screen and (min-width:758px){div.__jsx-style-dynamic-selector:first-child{border-bottom:1px solid ${d};}}`]),r("div",{"data-testid":g,className:n().dynamic([["1102595911",[d,d]]])+" "+(x||"")},j))}},"./components/GainFlag.js":(M,o,s)=>{s.r(o),s.d(o,{default:()=>p});var i=s("./node_modules/styled-jsx/style.js"),n=s.n(i),e=s("./node_modules/next/dist/compiled/react/index.js"),c=s("./node_modules/prop-types/index.js"),t=s.n(c),r=s("./node_modules/classnames/index.js"),m=s.n(r),E=s("./node_modules/react-i18next/dist/es/index.js"),d=e.createElement;const u=({t:y,party:j,isGain:O,className:g,textColor:x,bgColor:T,fontSize:P,useV2:v})=>{if(!O)return null;const C=m()(`gain-flag-v2 dib founders-mono ttu ${x} ${T} ${P}`,g);return d(e.Fragment,null,d(n(),{id:"3577151567"},[".gain-flag-v2.jsx-3577151567{padding:2px 4px;}",".letter-spacing-2.jsx-3577151567{-webkit-letter-spacing:0.2em;-moz-letter-spacing:0.2em;-ms-letter-spacing:0.2em;letter-spacing:0.2em;}",".ml-2.jsx-3577151567{margin-left:2px;}"]),v?d("div",{className:`jsx-3577151567 gain-flag-v2 ${C}`},d("span",{className:"jsx-3577151567 letter-spacing-2"},"+"),d("span",{className:"jsx-3577151567"},y("Gain"))):d("span",{className:`jsx-3577151567 gain-flag ${C}`},"+ ",y(j)," ",y("Gain")))};u.propTypes={party:t().string,isGain:t().bool,className:t().string,textColor:t().string,bgColor:t().string,fontSize:t().string,useV2:t().bool},u.defaultProps={party:null,isGain:!1,className:null,textColor:"FFD60C",bgColor:"bg-black",fontSize:"f2",useV2:!1};const p=(0,E.withTranslation)()(u)},"./components/Headshot/2020/index.js":(M,o,s)=>{s.r(o),s.d(o,{default:()=>x});var i=s("./node_modules/next/dist/compiled/react/index.js"),n=s("./node_modules/prop-types/index.js"),e=s.n(n),c=s("./node_modules/next/amp.js"),t=s("./node_modules/styled-jsx/style.js"),r=s.n(t),m=s("./helpers/getHeadshotUrl.js"),E=i.createElement;const d=({headshotUrl:T,altText:P,height:v,width:C,classes:f="gray-square",fileExtension:L="jpg",useFallback:A})=>{const h=`${m.headshotBaseUrl}/2020/candidate_fallback.${L}`;return E(i.Fragment,null,E(r(),{id:"884119781"},[".headshot--amp{position:relative;}",".headshot--amp amp-img img{object-fit:cover;}",".headshot.gray-square{background-color:#f1f1f1;}",".headshot.rounded-bottom amp-img{border-radius:0 0 50% 50%;}",".border-radius-50 amp-img img{border-radius:50%;}"]),E(r(),{id:"3624786546",dynamic:[v,C]},[`.headshot--amp.__jsx-style-dynamic-selector{height:${v}px;width:${C}px;}`,".border-radius-50.__jsx-style-dynamic-selector{border-radius:50%;}"]),E("div",{className:"jsx-884119781 "+r().dynamic([["3624786546",[v,C]]])+` headshot headshot--amp ${f}`},A?E("amp-img",{alt:P,layout:"fill",height:v,src:T||h,class:"jsx-884119781 "+r().dynamic([["3624786546",[v,C]]])},E("amp-img",{alt:P,layout:"fill",height:v,src:h,class:"jsx-884119781 "+r().dynamic([["3624786546",[v,C]]])})):E("amp-img",{alt:P,layout:"fill",height:v,src:T,class:"jsx-884119781 "+r().dynamic([["3624786546",[v,C]]])})))};d.propTypes={headshotUrl:e().string.isRequired,altText:e().string,height:e().oneOfType([e().string,e().number]),width:e().oneOfType([e().string,e().number]),useFallback:e().bool},d.defaultProps={altText:"",height:"50",width:"50",useFallback:!0};const u=d;var p=i.createElement;const y=({headshotUrl:T="",height:P,width:v,classes:C="gray-square",fileExtension:f="jpg",useFallback:L})=>{const A=`${m.headshotBaseUrl}/2020/candidate_fallback.${f}`,h=L?`url('${T}'), url('${A}')`:`url('${T}')`;return p(i.Fragment,null,p(r(),{id:"2818745285",dynamic:[h,P,v]},[`.headshot.__jsx-style-dynamic-selector{background-image:${h};height:${P}px;width:${v}px;}`,".headshot.gray-square.__jsx-style-dynamic-selector{background-color:#f1f1f1;}",".headshot.rounded-bottom.__jsx-style-dynamic-selector{border-radius:0 0 50% 50%;}",".border-radius-50.__jsx-style-dynamic-selector{border-radius:50%;}"]),p("div",{"data-test":"headshot",className:r().dynamic([["2818745285",[h,P,v]]])+` headshot ${C}`}))};y.propTypes={headshotUrl:e().string.isRequired,height:e().oneOfType([e().string,e().number]),width:e().oneOfType([e().string,e().number]),useFallback:e().bool},y.defaultProps={height:"50",width:"50",useFallback:!0};const j=y;var O=i.createElement;const g=T=>(0,c.useAmp)()?O(u,T):O(j,T);g.displayName="Headshot",g.propTypes={headshotUrl:e().string.isRequired,altText:e().string,height:e().oneOfType([e().string,e().number]),width:e().oneOfType([e().string,e().number])},g.defaultProps={altText:"",height:"50",width:"50"};const x=g},"./components/Module.js":(M,o,s)=>{s.r(o),s.d(o,{default:()=>m});var i=s("./node_modules/next/dist/compiled/react/index.js"),n=s("./node_modules/classnames/index.js"),e=s.n(n),c=s("./components/withErrorBoundary.js"),t=i.createElement;const r=({children:E,className:d,id:u=null,testId:p=null})=>t("div",{className:e()("module mb9",d),id:u,"data-testid":p},E);r.displayName="Module";const m=(0,c.default)(r)},"./components/ScrollableTable/CandidateName/index.js":(M,o,s)=>{s.r(o),s.d(o,{default:()=>r});var i=s("./node_modules/styled-jsx/style.js"),n=s.n(i),e=s("./node_modules/next/dist/compiled/react/index.js"),c=e.createElement;const r=({firstName:m,lastName:E})=>{if(typeof m!="string"||typeof E!="string")return null;let d;return m?d=`${m.charAt(0)}. ${E}`:d=E,c(e.Fragment,null,c(n(),{id:"2671302789"},["div.cn.jsx-2671302789{padding:0 4px 0 6px;}"]),c("div",{className:"jsx-2671302789 publico-txt f3 cn"},d))}},"./components/ScrollableTable/Number/index.js":(M,o,s)=>{s.r(o),s.d(o,{default:()=>u});var i=s("./node_modules/styled-jsx/style.js"),n=s.n(i),e=s("./node_modules/next/dist/compiled/react/index.js"),c=s("./node_modules/prop-types/index.js"),t=s.n(c),r=s("./node_modules/d3-format/src/defaultLocale.js"),m=e.createElement;const E=(0,r.format)(","),d=({value:p,suffix:y})=>m(e.Fragment,null,m(n(),{id:"3437879980"},[".number.jsx-3437879980{color:#555;width:100%;}"]),m("div",{className:"jsx-3437879980 dib number f2 founders-mono"},E(p),y)),u=d;d.defaultProps={suffix:null},d.propTypes={value:t().number.isRequired,suffix:t().string}},"./components/ScrollableTable/Percent/index.js":(M,o,s)=>{s.r(o),s.d(o,{default:()=>r});var i=s("./node_modules/styled-jsx/style.js"),n=s.n(i),e=s("./node_modules/next/dist/compiled/react/index.js"),c=e.createElement;const r=({value:m})=>c(e.Fragment,null,c(n(),{id:"998961378"},[".percent.jsx-998961378{display:inline-block;}"]),c("span",{className:"jsx-998961378 percent"},m,"%"))},"./components/modules/PageHeader/2022/StatewideRaceResults/CandidateToggle.js":(M,o,s)=>{s.r(o),s.d(o,{default:()=>p});var i=s("./node_modules/styled-jsx/style.js"),n=s.n(i),e=s("./node_modules/next/dist/compiled/react/index.js"),c=s("./node_modules/prop-types/index.js"),t=s.n(c),r=s("./node_modules/classnames/index.js"),m=s.n(r),E=s("./node_modules/react-i18next/dist/es/index.js"),d=e.createElement;const u=({t:y,advancingCount:j,className:O,isRunoff:g,showAll:x,onClick:T})=>{let P=`- ${y("fewer candidates")}`;return g&&j===1?P=`- ${y("advancing candidate")}`:g&&j>1&&(P=`- ${y("advancing candidates")}`),d(e.Fragment,null,d(n(),{id:"1630818092"},[".header-candidate-toggle{outline:none;border:none;background:none;color:#3061ff;cursor:pointer;}"]),d("button",{onClick:T,type:"button",className:"jsx-1630818092 "+(m()("header-candidate-toggle f2 founders-mono tl ma0 pa0",O)||"")},x?P:`+ ${y("all candidates")}`))};u.propTypes={advancingCount:t().number,className:t().string,isRunoff:t().bool,onClick:t().func,showAll:t().bool},u.defaultProps={advancingCount:0,className:null,isRunoff:!1,onClick:()=>{},showAll:!1};const p=(0,E.withTranslation)()(u)},"./components/withErrorBoundary.js":(M,o,s)=>{s.r(o),s.d(o,{default:()=>E});var i=s("./node_modules/next/dist/compiled/react/index.js"),n=s("./node_modules/console-browserify/index.js"),e=i.createElement;class c extends i.Component{constructor(u){super(u),this.state={hasError:!1}}static getDerivedStateFromError(){return{hasError:!0}}componentDidCatch(u,p){n.error(u,p)}render(){return this.state.hasError?e("div",{className:"pv4 f2 founders-mono"},"Something went wrong. Please try again later."):this.props.children}}c.displayName="ErrorBoundary";const t=c;var r=i.createElement;const E=d=>u=>r(t,null,r(d,u))},"./helpers/getCallStatus.js":(M,o,s)=>{s.r(o),s.d(o,{callStatusMapping:()=>i,default:()=>c,getPresidentWinningCallStatus:()=>e});const i={A:"Apparent winner",C:"Too close to call",E:"Too early to call",O:"Runoff",M:"Runoff",P:"Projected winner",W:"Winner",V:"Advance"},n=t=>typeof t!="string"?"":i[t]||"",e=(t,r)=>{switch(t){case"A":return"Apparent President-Elect";case"P":case"W":return r?"President Re-Elected":"President-Elect";default:return null}},c=n},"./helpers/getHeadshotUrl.js":(M,o,s)=>{s.r(o),s.d(o,{default:()=>C,getCorrectStateAbbr:()=>T,headshotBaseUrl:()=>n});var i=s("./helpers/constants.js");const n="https://media-cldnry.s-nbcnews.com/image/upload/firecracker/headshots",{ATTORNEY_GENERAL:e,GOVERNOR:c,LT_GOVERNOR:t,PRESIDENT:r,PRES_PRE_VIABILITY:m,PRESIDENT_SPECIAL:E,SENATE:d,SENATE_SPECIAL:u,SECRETARY_OF_STATE:p,STATE_SENATE:y,MAYOR:j,SUPREME_COURT:O}=i.OFFICE_CODES,g={[e]:"A00",[c]:"G00",[t]:"L00",[r]:"P00",[E]:"P00",[m]:"P00",[d]:"S00",[u]:"S00",[p]:"SS0",[y]:"Z20",[j]:"M00",[O]:"B00"},x=["dem","rep"],T=({electionSeason:f,electionType:L,stateCode:A,officeCode:h})=>f==="2022"&&L===i.ELECTION_TYPE.PRIMARY&&A==="A0"&&h===i.OFFICE_CODES.STATE_SENATE?"AZ":f==="2022"&&A==="LC"&&h===i.OFFICE_CODES.MAYOR?"CA":f==="2023"&&A==="HU"&&h===i.OFFICE_CODES.MAYOR?"TX":f==="2023"&&A==="PL"&&h===i.OFFICE_CODES.MAYOR?"PA":A,P=(f,L,A,h,S,K,I,F)=>{if(A==="H"){const _=`${(I||"00").padStart(2,"0")}`;return`${n}/${f}/${L}_${A}${_}_${h}_${S}_${K}.${F}`}return`${n}/${f}/${L}_${g[A]}_${h}_${S}_${K}.${F}`},C=f=>{if(Object.keys(f).filter($=>typeof f[$]!="string").length>0)return null;const{party:L,firstName:A,lastName:h,officeCode:S,electionDate:K,stateCode:I,jcodeString:F,electionType:b}=f,_=T({electionSeason:K,electionType:b,stateCode:I,officeCode:S});if(K==="2022"&&b===i.ELECTION_TYPE.PRIMARY&&I==="AK"&&S===i.OFFICE_CODES.SENATE&&A==="Dave"&&h==="Darden")return null;const z=K.slice(0,4),V=x.includes(L.slice(0,3).toLowerCase())?L.slice(0,1).toUpperCase():"I",H=A.slice(0,1).toUpperCase(),X=h.replace(/[-']/g," ").split(" ").join("").toUpperCase(),N=["P","PV","P2"].includes(S)?"US":_,B=f.fileFormat||(z==="2019"?"png":"jpg");return P(z,N,S,V,H,X,F,B)}},"./helpers/pluralize.js":(M,o,s)=>{s.r(o),s.d(o,{default:()=>t});var i=s("./node_modules/lodash.get/index.js"),n=s.n(i);const e=[{singular:"seat",plural:"seats"},{singular:"race",plural:"races"},{singular:"is",plural:"are"},{singular:"wins",plural:"win"},{singular:"advances",plural:"advance"},{singular:"day",plural:"days"},{singular:"delegate",plural:"delegates"},{singular:"primary",plural:"primaries"},{singular:"race",plural:"races"},{singular:"candidate",plural:"candidates"},{singular:"republican",plural:"republicans"},{singular:"democrat",plural:"democrats"},{singular:"advances",plural:"advance"},{singular:"municipality",plural:"municipalities"},{singular:"legislative district",plural:"legislative districts"},{singular:"congressional district",plural:"congressional districts"},{singular:"township",plural:"townships"},{singular:"district",plural:"districts"},{singular:"ward",plural:"wards"},{singular:"county",plural:"counties"},{singular:"superdelegate",plural:"superdelegates"}],t=(r,m)=>{if(m===1)return r;const E=e.find(({singular:d})=>d===r);return n()(E,"plural",r)}}}]);
