"use strict";(globalThis.webpackChunkfirecracker=globalThis.webpackChunkfirecracker||[]).push([[9789],{"./components/ResultsMap2022/ResultsMap2022.stories.js":(J,u,e)=>{e.r(u),e.d(u,{MidtermMap:()=>Ne,__namedExportsOrder:()=>Re,default:()=>Pe});var n=e("./node_modules/styled-jsx/style.js"),o=e.n(n),t=e("./node_modules/next/dist/compiled/react/index.js"),j=e("./node_modules/lodash.startcase/index.js"),i=e.n(j),l=e("./node_modules/lodash.kebabcase/index.js"),x=e.n(l),h=e("./server/v2/helpers/__tests__/data/national-composition.json"),y=e("./server/v2/format/__tests__/data/calendarRecircMock.json"),T=e("./node_modules/prop-types/index.js"),s=e.n(T),p=e("./node_modules/classnames/index.js"),d=e.n(p),c=e("./node_modules/dayjs/plugin/utc.js"),M=e.n(c),C=e("./node_modules/dayjs/plugin/timezone.js"),I=e.n(C),$=e("./node_modules/react-i18next/dist/es/index.js"),F=e("./components/props/topoJson.propsShape.js"),P=e("./components/Tabs/2022/index.js"),S=e("./components/Tabs/2022/Tab/index.js"),H=e("./lib/dayjsCustom.js"),E=e("./components/NationalMap/USNationalMap.js"),Y=e("./components/NationalCongressionalDistrictMap/CongressionalDistrictMap.js"),k=e("./components/Checkmark.js"),q=e("./components/ResultsMap2022/OfficeScore.js"),Q=e("./server/v2/normalize/normalizePartyAbbreviation.js"),G=e("./helpers/getPartyColor.js"),N=t.createElement;function z(O){const{currentDem:f,currentRep:w,officeType:U,className:K,children:V,electionSeason:L,winnerParty:b,projectionMsg:v,hideMajorityCall:A,doNudge:Z}=O,W=b&&(0,Q.default)(b).toLowerCase(),m=W&&(0,G.default)({party:W,electionSeason:L,onlySupportMajorParties:!0}),B=W==="dem",ye=W==="rep";let te;A?te="justify-center":B?te="justify-start":ye?te="justify-end":te="justify-center";let X;const le=U.toLowerCase();le==="senate"?X=50:le==="house"&&(X=218);const de=b?.toLowerCase()==="rep"?"GOP":b,ce=N("div",{className:"majority-call-container dib self-end"},N("div",{className:d()("majority-call ttu win founders-cond f5 lh-none fw6 df justify-center",K)},N("span",{className:"win-party white df items-center",style:{background:m??"#555"}},de),N("span",{className:"win-text bg-FFD60C df items-center"},N(k.default,{shouldDisplay:!0,width:"20px",hasTransparentBackground:!0}),V)));return N(t.Fragment,null,N(o(),{id:"2996297994"},[".majority-watch.jsx-2996297994 .majority-call{margin-top:10px;}",".majority-watch.jsx-2996297994 .win .checkmark{margin-right:2px;}",".majority-watch.jsx-2996297994 .win-party{padding:3px 8px 4px;}",".majority-watch.jsx-2996297994 .win-text{padding:3px 10px 4px 4px;}",".majority-watch.jsx-2996297994 .winner-banner{margin-top:10px;}"]),N("div",{className:"jsx-2996297994 "+(d()("df","majority-watch",te,{mapNudge:Z})||"")},!A&&B&&ce,N(q.default,{currentDem:f,currentRep:w,officeType:U,halfTotal:X,projectionMsg:v}),!A&&ye&&ce))}z.propTypes={currentDem:s().number,currentRep:s().number,doNudge:s().bool,officeType:s().string,children:s().node,className:s().string,winnerParty:s().string,electionSeason:s().string,projectionMsg:s().string,hideMajorityCall:s().bool},z.defaultProps={currentDem:null,currentRep:null,doNudge:!1,officeType:null,children:null,className:null,winnerParty:null,electionSeason:null,projectionMsg:null,hideMajorityCall:!1};var ee=e("./server/v2/helpers/libraries/colorLibrary.js"),R=t.createElement;const ne=({t:O,isRunoffLegend:f})=>{const b="7%",v="8%",A="63.9%",Z=R("div",{className:"f2 color-description publico-txt"},R("div",null,O("PollsClosed"),R("span",{className:"dn di-m"},".")),R("div",{className:"dn db-m"},O("Check for results"))),W=R("div",{className:"f2 color-description publico-txt"},R("div",null,O("Runoff")),R("div",{className:"dn db-m"},O("December 6"))),m=f?W:Z,B=f?ee.default.getColorByName("color:runoff"):ee.default.getColorByName("color:polls-closed");return R(t.Fragment,null,R(o(),{id:"4264626820",dynamic:[A,75,b,7,150,B,28,v,7]},[`.legend-container.__jsx-style-dynamic-selector{position:relative;left:calc(${A} - 75px);bottom:calc(${b} + 7px);height:14px;width:150px;color:#555;pointer-events:none;}`,`.color-block.__jsx-style-dynamic-selector{height:100%;width:4px;background-color:${B};margin-right:4px;}`,`@media screen and (min-width:758px){.legend-container.__jsx-style-dynamic-selector{height:28px;bottom:calc(${v} + 7px);}}`]),R("div",{className:o().dynamic([["4264626820",[A,75,b,7,150,B,28,v,7]]])+" legend-container df flex-row justify-center"},R("div",{className:o().dynamic([["4264626820",[A,75,b,7,150,B,28,v,7]]])+" color-block"}),m))},oe=(0,$.withTranslation)()(ne);var r=t.createElement;function D({desktopTitle:O,mobileTitle:f,electionSeason:w,winnerParty:U}){const K=U&&(0,Q.default)(U).toLowerCase(),V=K&&(0,G.default)({party:K,electionSeason:w,onlySupportMajorParties:!0}),L=K?r("div",{className:"map-embed-tab__call ml1",style:{background:V}},r(k.default,{color:"#fff",hasTransparentBackground:!0,shouldDisplay:!0,width:"20px",height:"20px"})):null;return r(t.Fragment,null,r(o(),{id:"2534038215"},[".map-embed-tab--desktop{display:none;}",".map-embed-tab__call{border-radius:50%;fill:#fff;}",".map-embed-tab__call .checkmark{display:block;margin:0;}",".tab-bar__button:hover{opacity:0.7;}","@media screen and (min-width:415px){.map-embed-tab--desktop{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}.map-embed-tab--mobile{display:none;}}"]),r("div",{className:"jsx-2534038215 map-embed-tab--desktop"},O,L),r("div",{className:"jsx-2534038215 map-embed-tab--mobile df"},f,L))}D.propTypes={electionSeason:s().string,desktopTitle:s().string.isRequired,mobileTitle:s().string.isRequired,winnerParty:s().string},D.defaultProps={electionSeason:"2022",winnerParty:null};var _=e("./components/RefreshIcon.js"),se=t.createElement;const pe=O=>{const{t:f,lastUpdatedTime:w}=O;return w?se(t.Fragment,null,se(o(),{id:"1505182576"},[".last-updated-msg.jsx-1505182576 .text-part.jsx-1505182576{padding-left:5px;}",".last-updated-msg.jsx-1505182576 .refresh-icon{position:relative;top:1px;}",".last-updated-msg.jsx-1505182576 .text-part.short-text.jsx-1505182576{display:none;}","@media screen and (max-width:425px){.last-updated-msg.jsx-1505182576 .text-part.full-text.jsx-1505182576{display:none;}.last-updated-msg.jsx-1505182576 .text-part.short-text.jsx-1505182576{display:inline;}}"]),se("div",{className:"jsx-1505182576 last-updated-msg"},se(_.default,{isUpdating:!1,key:w}),se("span",{className:"jsx-1505182576 text-part full-text"},f("Last update")," ",w),se("span",{className:"jsx-1505182576 text-part short-text"},f("Updated")," ",w))):null};pe.propTypes={lastUpdatedTime:s().string},pe.defaultProps={lastUpdatedTime:null};const fe=(0,$.withTranslation)()(pe);var xe=e("./components/Link.js"),he=e("./lib/getIcidString.js"),ae=e("./helpers/constants.js"),a=t.createElement;H.dayJsCustom.extend(M()),H.dayJsCustom.extend(I());const be=O=>{const{t:f,disableTooltips:w,electionSeason:U,electionType:K,topojson:V,governorResults:L,houseResults:b,senateResults:v,stateExclusionList:A,initialOfficeType:Z,onChange:W,cmsEmbedData:m}=O,B={SENATE:"senate",HOUSE:"house",GOVERNOR:"governor"},te=(v?.allRaces?.results||[]).some(g=>g.callStatus===ae.CALL_STATUSES.RUNOFF||g.callStatus===ae.CALL_STATUSES.ADVANCE),X=[];m?.hideSenateMap||X.push("senate"),m?.hideHouseMap||X.push("house"),m?.hideGovernorMap||X.push("governor");const le=X.includes(Z)?Z:X[0],{0:de,1:ce}=(0,t.useState)(le||"senate"),{0:Se,1:De}=(0,t.useState)(de);if(!b&&!v&&!L)return null;le!==Z&&W&&W(de);function we(g){De(g.toLowerCase()),ce(g.toLowerCase()),W&&W(g,Se)}const Le=()=>{const g=window.location.hash.slice(1);return X.includes(g)?g:null},ue=v?.nationalCallStatus?.party??null,me=b?.nationalCallStatus?.party??null,Ue=m?.senate?.nationalCallStatus?.[ue?.toLowerCase()]||"control",Ae=m?.house?.nationalCallStatus?.[me?.toLowerCase()]||"control",ie=[];m?.hideSenateMap||ie.push({title:a(D,{desktopTitle:f("Senate results"),mobileTitle:f("Senate"),electionSeason:U,winnerParty:ue}),value:B.SENATE}),m?.hideHouseMap||ie.push({title:a(D,{desktopTitle:f("House results"),mobileTitle:f("House"),electionSeason:U,winnerParty:me}),value:B.HOUSE}),m?.hideGovernorMap||ie.push({title:a(D,{desktopTitle:f("Governor results"),mobileTitle:f("Governor")}),value:B.GOVERNOR});const Be=b?.overview||{},{margin:je,isHouseReleased:We}=Be,Ie=We&&je>0?`${f("Projection")} +/- ${je}`:null,$e=Object.values(v?.usSenateMapFills??{}).some(g=>g.isPollsClosed&&!g.declaredWinnerPartyAbbreviation),Fe=Object.values(b?.houseMapData??{}).some(g=>g.isPollsClosed&&!g.hasWinner),He=Object.values(L?.raceMapData??{}).some(g=>g.isPollsClosed&&!g.declaredWinnerPartyAbbreviation);return a(t.Fragment,null,a(o(),{id:"4040677472"},["#us-national-map-general-elections rect{fill:none;}",".map-tabs .tab-bar{width:100%;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}",".map-tabs .tab-bar__button{padding:2px 10px 4px;}"]),a(o(),{id:"2662321830"},[".results-map-2022.jsx-856269423 .map-tabs .tab-bar{width:100%;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;padding-left:45px;padding-right:45px;}",".results-map-2022.jsx-856269423 .majority-watch.mapNudge{position:relative;margin-top:-16px;top:16px;}",".results-map-2022.jsx-856269423 .single-results-map{margin-top:0;margin-bottom:0;padding-right:3%;}",".full-results-link.jsx-856269423 a{-webkit-text-decoration:none;text-decoration:none;}",".full-results-link.jsx-856269423:hover{opacity:0.7;}",".results-map-2022.jsx-856269423 .state-abbreviation text,.results-map-2022.jsx-856269423 .additional-feature__text{font-size:14px;-webkit-transform:translateY(4px);-ms-transform:translateY(4px);transform:translateY(4px);}",".results-map-2022.jsx-856269423 .state-path--effect:hover{stroke-width:5;}",".results-map-2022.jsx-856269423 .tab-bar__button{overflow:visible;}",".results-map-2022.jsx-856269423 .full-results-link .short-text{display:none;}",".results-map-2022.jsx-856269423 .house-results-map{margin:24px auto 0 auto;}","@media screen and (min-width:758px){.results-map-2022.jsx-856269423 .majority-watch.mapNudge{margin-top:-24px;position:relative;top:24px;}.results-map-2022.jsx-856269423 .state-path--effect:hover{stroke-width:3;}}","@media screen and (max-width:620px){.results-map-2022.jsx-856269423 .state-abbreviation text,.results-map-2022.jsx-856269423 .additional-feature__text{font-size:20px;}}","@media screen and (max-width:500px){.results-map-2022.jsx-856269423 .state-abbreviation text,.results-map-2022.jsx-856269423 .additional-feature__text{font-size:22px;}}","@media screen and (max-width:506px){.results-map-2022.jsx-856269423 .map-tabs .tab-bar{padding-left:5px;padding-right:5px;}}","@media screen and (max-width:420px){.results-map-2022.jsx-856269423 .state-abbreviation text,.results-map-2022.jsx-856269423 .additional-feature__text{font-size:24px;}}","@media screen and (max-width:390px){.results-map-2022.jsx-856269423 .majority-watch{margin-bottom:10px;}.results-map-2022.jsx-856269423 .full-results-link .full-text{display:none;}.results-map-2022.jsx-856269423 .full-results-link .short-text{display:inline;}}","@media screen and (max-width:370px){.results-map-2022.jsx-856269423 .majority-watch{-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}}","@media screen and (max-width:320px){.results-map-2022.jsx-856269423 .legend-container{bottom:6%;height:12px;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;left:calc(63.9% - 72px);}.results-map-2022.jsx-856269423 .legend-container > div:first-child{margin-right:2px;}.results-map-2022.jsx-856269423 .legend-container > div:last-child{font-size:0.625rem;}}"]),a("div",{className:"jsx-856269423 results-map-2022"},a(P.default,{id:"results-map",className:"map-tabs",options:ie,hideTabBar:ie.length<=0,useTabBarAnimations:!1,onChange:g=>we(g),onTabMount:Le},!m?.hideSenateMap&&a(S.default,{className:"map-tab",value:B.SENATE},a(z,{currentDem:v?.senateOverview?.demTotalSeats,currentRep:v?.senateOverview?.repTotalSeats,officeType:"senate",doNudge:!ue,electionSeason:U,winnerParty:ue,hideMajorityCall:m?.hideCallForSenateControl},Ue),a(E.default,{className:d()("senate-results-map","single-results-map"),id:"senate-leadup-map",fills:v?.usSenateMapFills,topojson:V?.statewide,showMapKey:!1,height:500,width:825,showUXText:!1,disableTooltips:w,electionType:K,stateExclusionList:A,useTooltipsV2:!0,isEmbed:!0,type:"senate"}),$e&&a(oe,{isRunoffLegend:te}),a("div",{className:"jsx-856269423 df flex-row justify-between"},a("div",{className:"jsx-856269423 founders-mono f2 f3-m fw4 gray-80"},m?.showTimestamp&&v?.lastUpdatedTimePretty&&a(fe,{lastUpdatedTime:v?.lastUpdatedTimePretty})),a("div",{className:"jsx-856269423 full-results-link founders-mono f2 clear-blue"},!m?.senate?.hidden&&a(xe.default,{className:"clear-blue",href:`${m?.senate?.linkUrl}${(0,he.getElectionUSMapIcidString)()}`},a("span",{className:"jsx-856269423 full-text"},m?.senate?.linkText),a("span",{className:"jsx-856269423 short-text"},f("All results")," >"))))),!m?.hideHouseMap&&a(S.default,{value:B.HOUSE},a(z,{currentDem:b?.houseBarData?.overview?.demTotalSeats,currentRep:b?.houseBarData?.overview?.repTotalSeats,officeType:"house",electionSeason:U,winnerParty:me,doNudge:!me,projectionMsg:Ie,hideMajorityCall:m?.hideCallForHouseControl},Ae),a(Y.default,{className:d()("house-results-map","single-results-map"),id:"house-results-map",fills:b?.houseMapData,topojson:V?.house,showMapKey:!1,height:500,width:825,showUXText:!1,disableTooltips:w,electionType:K,stateExclusionList:A,useTooltipsV2:!0,isEmbed:!0}),Fe&&a(oe,null),a("div",{className:"jsx-856269423 df flex-row justify-between"},a("div",{className:"jsx-856269423 founders-mono f2 f3-m fw4 gray-80"},m?.showTimestamp&&b?.lastUpdatedTimePretty&&a(fe,{lastUpdatedTime:b?.lastUpdatedTimePretty})),a("div",{className:"jsx-856269423 full-results-link founders-mono f2 clear-blue"},!m?.house?.hidden&&a(xe.default,{className:"clear-blue",href:`${m?.house?.linkUrl}${(0,he.getElectionUSMapIcidString)()}`},a("span",{className:"jsx-856269423 full-text"},m?.house?.linkText),a("span",{className:"jsx-856269423 short-text"},f("All results")," >"))))),!m?.hideGovernorMap&&a(S.default,{value:B.GOVERNOR},a(z,{currentDem:L?.results?.overview?.demSeatsWon,currentRep:L?.results?.overview?.repSeatsWon,officeType:"governor",electionSeason:U,hideMajorityCall:!0,doNudge:!0}),a(E.default,{className:"single-results-map governor-results-map",id:"governor-results-map",fills:L?.raceMapData,topojson:V?.statewide,showMapKey:!1,height:500,width:825,showUXText:!1,disableTooltips:w,electionType:K,stateExclusionList:A,useTooltipsV2:!0,isEmbed:!0,type:"governor"}),He&&a(oe,null),a("div",{className:"jsx-856269423 df flex-row justify-between"},a("div",{className:"jsx-856269423 founders-mono f2 f3-m fw4 gray-80"},m?.showTimestamp&&L?.lastUpdatedTimePretty&&a(fe,{lastUpdatedTime:L?.lastUpdatedTimePretty})),a("div",{className:"jsx-856269423 full-results-link founders-mono f2 clear-blue"},!m?.governor?.hidden&&a(xe.default,{className:"clear-blue",href:`${m?.governor?.linkUrl}${(0,he.getElectionUSMapIcidString)()}`},a("span",{className:"jsx-856269423 full-text"},m?.governor?.linkText),a("span",{className:"jsx-856269423 short-text"},f("All results")," >"))))))))};be.propTypes={topojson:s().objectOf(F.TopoJSONTopology),disableTooltips:s().bool,electionSeason:s().string,electionType:s().string,governorResults:s().object,houseResults:s().object,senateResults:s().object,onChange:s().func,cmsEmbedData:s().object.isRequired},be.defaultProps={disableTooltips:!1,electionSeason:"2022",electionType:"primary",topojson:null,governorResults:null,houseResults:null,senateResults:null,onChange:null};const ve=(0,$.withTranslation)()(be);var Te=e("./server/v2/helpers/choroplethUtilities.js"),Ce=e("./data/topojson/states-10m.json"),Ee=e("./data/topojson/ushouse/us-district-map-simplified.json"),Me=e("./helpers/stateNameUtilities.js"),Oe=e("./server/v2/helpers/officeCodeToSlug.js"),re=t.createElement;const ge=Object.keys(h).reduce((O,f)=>Object.assign(O,{[i()(ae.OFFICE_NAMES[f])]:f}),{}),Pe={component:ve,title:"Embeds/Results Map 2022",argTypes:{selectedOfficeCode:{control:{type:"select"},options:ge},allowlist:{name:"States with Links",control:{type:"multi-select"},options:Me.usStateNames}},args:{selectedOfficeCode:ae.OFFICE_CODES.HOUSE,allowlist:["California","New York","Oregon"]}},Ne=({selectedOfficeCode:O,allowlist:f})=>{const w={statewide:Ce,house:Ee},U=["governor","house","senate"],K=O===ae.OFFICE_CODES.HOUSE,V={};U.forEach(b=>{const v=ae.OFFICE_CODES[b.toUpperCase()],A=(0,Te.getRaceMapFills)({electionSeason:"2022",officeCode:v,electionType:"primary",months:y.months,composition:h[v],allowlist:f.flatMap(Z=>Object.values(ge).map(W=>`/politics/2022-primary-elections/${x()(Z)}-${Oe.default[W]}-results`))});V[v]=A});const L={lastModified:null,senate:{linkText:"All Senate results >",linkUrl:"https://develop-election-results.dev.nbcnewstools.net/politics/2022-elections/senate-results",hidden:!1},house:{linkText:"All House results >",linkUrl:"https://develop-election-results.dev.nbcnewstools.net/politics/2022-elections/house-results",hidden:!1},governor:{linkText:"All Governor results >",linkUrl:"https://develop-election-results.dev.nbcnewstools.net/politics/2022-elections/governor-results",hidden:!1},hideCallForSenateControl:!1,hideCallForHouseControl:!1,hideSenateMap:!1,hideHouseMap:!1,hideGovernorMap:!1,showTimestamp:!0};return re(t.Fragment,null,re(o(),{id:"964822437"},[".container.jsx-964822437{max-width:1240px;}"]),re("div",{className:"jsx-964822437 container"},re(ve,{disableTooltips:!0,cmsEmbedData:L,electionType:"primary",officeCode:O,fills:V,topojson:w,isDistricts:K})))},Re=["MidtermMap"]},"./components/RefreshIcon.js":(J,u,e)=>{e.r(u),e.d(u,{default:()=>h});var n=e("./node_modules/styled-jsx/style.js"),o=e.n(n),t=e("./node_modules/next/dist/compiled/react/index.js"),j=e("./node_modules/classnames/index.js"),i=e.n(j),l=t.createElement;const x=({isUpdating:y,color:T,size:s,classes:p})=>l(t.Fragment,null,l(o(),{id:"404944366"},["@-webkit-keyframes spin-jsx-404944366{100%{-webkit-transform:rotate(360deg);-ms-transform:rotate(360deg);transform:rotate(360deg);}}","@keyframes spin-jsx-404944366{100%{-webkit-transform:rotate(360deg);-ms-transform:rotate(360deg);transform:rotate(360deg);}}","[data-update-toggle].jsx-404944366{-webkit-animation-name:spin-jsx-404944366;animation-name:spin-jsx-404944366;-webkit-animation-fill-mode:both;animation-fill-mode:both;-webkit-animation-duration:2s;animation-duration:2s;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite;-webkit-animation-timing-function:linear;animation-timing-function:linear;-webkit-animation-play-state:paused;animation-play-state:paused;}",".updating-animation.jsx-404944366{-webkit-animation-play-state:running;animation-play-state:running;}"]),l("svg",{width:s,height:s,viewBox:"0 0 10 10",fill:"none",xmlns:"http://www.w3.org/2000/svg","data-update-toggle":!0,className:"jsx-404944366 "+(i()(p,"refresh-icon",{"updating-animation":y})||"")},l("path",{d:"M9.63359 0.816406L8.61797 1.83203C7.73906 0.953125 6.52812 0.40625 5.2 0.40625C2.60234 0.40625 0.473437 2.45703 0.35625 5.01562C0.336719 5.15234 0.453906 5.25 0.590625 5.25H1.1375C1.25469 5.25 1.35234 5.17188 1.37187 5.03516C1.48906 3.02344 3.14922 1.42188 5.2 1.42188C6.25469 1.42188 7.21172 1.85156 7.89531 2.55469L6.84062 3.60938C6.68437 3.76562 6.80156 4 6.99687 4H9.80937C9.92656 4 10.0437 3.90234 10.0437 3.76562V0.972656C10.0437 0.777344 9.78984 0.660156 9.63359 0.816406ZM9.78984 5.25H9.24297C9.12578 5.25 9.02812 5.34766 9.00859 5.48438C8.89141 7.49609 7.23125 9.07812 5.2 9.07812C4.12578 9.07812 3.16875 8.66797 2.48516 7.96484L3.53984 6.91016C3.69609 6.75391 3.57891 6.5 3.38359 6.5H0.590625C0.453906 6.5 0.35625 6.61719 0.35625 6.73438V9.54688C0.35625 9.74219 0.590625 9.85938 0.746875 9.70312L1.7625 8.6875C2.64141 9.56641 3.85234 10.0938 5.2 10.0938C7.77812 10.0938 9.90703 8.0625 10.0242 5.50391C10.0437 5.36719 9.92656 5.25 9.78984 5.25Z",fill:T,className:"jsx-404944366"})));x.defaultProps={color:"#555555",size:"10",classes:""};const h=x},"./components/ResultsMap2022/OfficeScore.js":(J,u,e)=>{e.r(u),e.d(u,{default:()=>h});var n=e("./node_modules/styled-jsx/style.js"),o=e.n(n),t=e("./node_modules/next/dist/compiled/react/index.js"),j=e("./node_modules/prop-types/index.js"),i=e.n(j),l=t.createElement;const x=y=>{const{officeType:T,currentDem:s,currentRep:p,halfTotal:d,projectionMsg:c}=y;return T?l(t.Fragment,null,l(o(),{id:"4063984610",dynamic:[d||"",c||""]},[".office-score.__jsx-style-dynamic-selector{padding:5px;}",".halftotal.__jsx-style-dynamic-selector{height:12px;}",".dem-count.__jsx-style-dynamic-selector{color:#009af4;}",".rep-count.__jsx-style-dynamic-selector{color:#d42f37;}",".party-counts.__jsx-style-dynamic-selector{position:relative;margin-top:2px;font-size:18px;}",".party-count.__jsx-style-dynamic-selector{padding:0px 5px;font-size:24px;}",".dem-count.__jsx-style-dynamic-selector{padding-right:8px;}",".rep-count.__jsx-style-dynamic-selector{padding-left:8px;}",".separator.__jsx-style-dynamic-selector{border-left:solid #999 1px;top:2px;font-size:12px;bottom:0;position:absolute;}",`.separator.__jsx-style-dynamic-selector::before{content:"${d||""}";position:absolute;font-family:FoundersGroteskMono,Courier,Courier New,monospace;color:#555;-webkit-letter-spacing:-.04em;-moz-letter-spacing:-.04em;-ms-letter-spacing:-.04em;letter-spacing:-.04em;bottom:24px;font-weight:400;font-size:10px;left:-51px;width:100px;text-align:center;}`,`.separator.__jsx-style-dynamic-selector::after{content:"${c||""}";position:absolute;font-family:FoundersGroteskMono,Courier,Courier New,monospace;color:#555;-webkit-letter-spacing:-.04em;-moz-letter-spacing:-.04em;-ms-letter-spacing:-.04em;letter-spacing:-.04em;top:26px;font-weight:400;font-size:10px;left:-101px;width:200px;text-align:center;}`]),l("div",{className:o().dynamic([["4063984610",[d||"",c||""]]])+" office-score dib lh-none tc"},l("div",{className:o().dynamic([["4063984610",[d||"",c||""]]])+" halftotal founders-mono f2 f3-m fw4 gray-80 ttu"}),l("div",{className:o().dynamic([["4063984610",[d||"",c||""]]])+" party-counts founders-cond f5 f5-m fw6 ttu"},l("span",{className:o().dynamic([["4063984610",[d||"",c||""]]])+" gray-100 party-label dem-label"},"dem"),l("span",{className:o().dynamic([["4063984610",[d||"",c||""]]])+" party-count dem-count"},s),l("span",{className:o().dynamic([["4063984610",[d||"",c||""]]])+" separator"}),l("span",{className:o().dynamic([["4063984610",[d||"",c||""]]])+" party-count rep-count"},p),l("span",{className:o().dynamic([["4063984610",[d||"",c||""]]])+" gray-100 party-label rep-label"},"gop")))):null};x.propTypes={officeType:i().string.isRequired,currentDem:i().oneOfType([i().string,i().number]).isRequired,currentRep:i().oneOfType([i().string,i().number]).isRequired,halfTotal:i().number,projectionMsg:i().string},x.defaultProps={halfTotal:null,projectionMsg:null};const h=x},"./components/Tabs/2022/Tab/index.js":(J,u,e)=>{e.r(u),e.d(u,{default:()=>T});var n=e("./node_modules/next/dist/compiled/react/index.js"),o=e("./node_modules/prop-types/index.js"),t=e.n(o),j=e("./node_modules/next/amp.js"),i=e("./node_modules/classnames/index.js"),l=e.n(i),x=e("./components/Tabs/2022/TabContext.js"),h=n.createElement;function y({children:s,className:p,value:d}){const{ampId:c,id:M,index:C,isActive:I,mobileOnly:$}=(0,x.useTabContext)({value:d});return(0,j.useAmp)()?h("div",{className:l()("tab",p,{dn:!I}),"data-value":d,id:`tabpanel-${M}-${C}`,role:"tabpanel","aria-labelledby":`tab-${M}-${C}`,"data-amp-bind-class":`${c}Selected == '${d}' ? 'tab ${p}' : 'tab ${p} dn'`},s):h("div",{className:l()("tab",p),"data-value":d,id:`tabpanel-${M}-${C}`,role:"tabpanel","aria-labelledby":`tab-${M}-${C}`,"aria-hidden":!I&&!$},s)}y.displayName="Tab",y.propTypes={children:t().node,className:t().string,value:t().string.isRequired},y.defaultProps={children:null,className:null};const T=y},"./components/Tabs/2022/TabBar/TabBar.js":(J,u,e)=>{e.r(u),e.d(u,{default:()=>d});var n=e("./node_modules/styled-jsx/style.js"),o=e.n(n),t=e("./node_modules/next/dist/compiled/react/index.js"),j=e("./node_modules/classnames/index.js"),i=e.n(j),l=e("./node_modules/prop-types/index.js"),x=e.n(l),h=e("./node_modules/next/amp.js"),y=e.n(h),T=e("./components/Tabs/2022/TabContext.js"),s=e("./components/hooks/useResizeObserver.js"),p=t.createElement;function d({useAnimations:c,onChange:M,onTabMount:C,classNames:I}){const $=(0,h.useAmp)(),{currentValue:F,options:P,setCurrentValue:S,ampId:H,id:E,mobileOnly:Y}=(0,t.useContext)(T.TabContext),k=(0,t.useRef)(null),{0:q,1:Q}=(0,t.useState)(P?.map(()=>0)??[]),{0:G,1:N}=(0,t.useState)(P?.map(()=>0)??[]),z=(0,t.useCallback)(()=>{if(!k.current||!c)return;const r=k.current.querySelectorAll(".tab-bar__button");Q(Array.from(r).map(D=>D.offsetWidth)),N(Array.from(r).map(D=>D.offsetLeft))},[c]);if((0,t.useEffect)(()=>{!k.current||!c||z()},[P,c]),(0,s.default)({container:k,onResize:z}),(0,t.useEffect)(()=>{if(C){const r=C();P.map(_=>_.value).includes(r)&&S(r)}},[]),!P.length)return null;const ee=P.findIndex(r=>r.value===F),R=q?.[ee]??0,ne=G?.[ee]??0,oe=r=>{S(r),M&&M(r)};return p(t.Fragment,null,p(o(),{id:"1909526782"},[".tab-bar{border:1px solid #ccc;height:32px;border-radius:16px;padding:1px;background:#f2f2f2;}",".tab-bar__button{cursor:pointer;outline:none;background:none;height:28px;padding:2px 16px 4px;border-radius:14px;border:1px solid transparent;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;}",".tab-bar__button.is-active{background:#fff;border-color:#ccc;}",".tab-bar__active{z-index:-1;position:absolute;left:0;background:#fff;border:1px solid #ccc;height:28px;border-radius:14px;-webkit-transform:translateX(var(--offset,0));-ms-transform:translateX(var(--offset,0));transform:translateX(var(--offset,0));-webkit-transition: 250ms ease-in-out -webkit-transform, 250ms ease-in width;-webkit-transition: 250ms ease-in-out transform, 250ms ease-in width;transition: 250ms ease-in-out transform, 250ms ease-in width;}"]),p("div",{className:"jsx-1909526782 "+(i()("tab-bar-container df justify-around",{"dn-m":Y})||"")},$?p("amp-selector",{id:`${H}Selector`,on:`select:AMP.setState({ '${H}Selected': event.targetOption })`,class:"jsx-1909526782 tab-bar gray-20 df items-center relative z-0"},P.map((r,D)=>p("button",{id:`tab-${E}-${D}`,type:"button",key:r.value,option:r.value,selected:r.value===F,role:"tab","data-amp-bind-class":`${H}Selected == '${r.value}' ? 'tab-bar__button founders-cond f5 lh-none pb2 pt1 is-active' : 'tab-bar__button founders-cond f5 lh-none pb2 pt1'`,className:"jsx-1909526782 "+(i()("tab-bar__button founders-cond f5 lh-none pb2 pt1",{"is-active":F===r.value})||"")},r.title??r.value))):p("div",{ref:k,className:`jsx-1909526782 tab-bar gray-20 df items-center relative z-0 ${I}`},c&&p("div",{style:{width:R,"--offset":`${ne}px`},className:"jsx-1909526782 "+(i()("tab-bar__active",{dn:!R})||"")}),P.map((r,D)=>{const _=r.value===F;return p("button",{id:`tab-${E}-${D}`,type:"button",onClick:()=>oe(r.value),key:r.value,role:"tab","aria-selected":_,"aria-controls":`tabpanel-${E}-${D}`,"data-tab-value":r.value,className:"jsx-1909526782 "+(i()("tab-bar__button founders-cond f5 lh-none pb2 pt1",{black:_,"gray-80":!_,"is-active":_&&!c})||"")},r.title??r.value)}))))}d.propTypes={useAnimations:x().bool,onChange:x().func,onTabMount:x().func,classNames:x().string},d.defaultProps={useAnimations:!0,onChange:null,onTabMount:null,classNames:null}},"./components/Tabs/2022/TabContext.js":(J,u,e)=>{e.r(u),e.d(u,{TabContext:()=>i,TabContextProvider:()=>x,useTabContext:()=>l});var n=e("./node_modules/next/dist/compiled/react/index.js"),o=e("./node_modules/lodash.snakecase/index.js"),t=e.n(o),j=n.createElement;const i=(0,n.createContext)({currentValue:null,id:null,options:[],setCurrentValue(){}});function l({value:h=null}={}){const{currentValue:y,id:T,ampId:s,options:p,setCurrentValue:d,mobileOnly:c}=(0,n.useContext)(i),M=h===y,C=p.findIndex(I=>I.value===h);return{currentValue:y,id:T,ampId:s,mobileOnly:c,options:p,setCurrentValue:d,isActive:M,index:C}}function x({options:h,id:y,children:T,defaultValue:s,mobileOnly:p}){const d=h[0]?.value??null,{0:c,1:M}=(0,n.useState)(s||d),C=(0,n.useMemo)(()=>({currentValue:c,setCurrentValue:M,options:h,mobileOnly:p,id:y,ampId:t()(y)}),[c,h,p,y]);return j(i.Provider,{value:C},T)}x.displayName="TabContextProvider"},"./components/Tabs/2022/Tabs.js":(J,u,e)=>{e.r(u),e.d(u,{default:()=>F});var n=e("./node_modules/next/dist/compiled/react/index.js"),o=e("./node_modules/prop-types/index.js"),t=e.n(o),j=e("./node_modules/classnames/index.js"),i=e.n(j),l=e("./components/Tabs/2022/TabContext.js"),x=e("./components/Tabs/2022/TabBar/TabBar.js");const h=x.default;var y=e("./node_modules/styled-jsx/style.js"),T=e.n(y),s=e("./node_modules/next/amp.js"),p=e("./components/hooks/useResizeObserver.js"),d=e("./helpers/MobileDetection.js"),c=n.createElement;function M({children:P}){const{currentValue:S,mobileOnly:H}=(0,n.useContext)(l.TabContext),E=(0,n.useRef)(null),Y=(0,s.useAmp)(),{0:k,1:q}=(0,n.useState)(!1);(0,n.useEffect)(()=>{q(!d.default.Safari()&&!d.default.iOS())},[]),(0,n.useEffect)(()=>{if(!E.current)return;const G=E.current.querySelector(`.tab[data-value="${S}"]`);setTimeout(()=>{E.current.scrollLeft=G?.offsetLeft??0},0)},[S]);const Q=(0,n.useCallback)(G=>{const N=G?.[0]?.target;if(!E.current||!N)return;const z=N.querySelector('.tab[aria-hidden="false"]');E.current.scroll({left:z?.offsetLeft??0,behavior:"instant"})},[]);return(0,p.default)({container:E,onResize:Q}),c(n.Fragment,null,c(T(),{id:"417804429"},[".tabs-container{overflow:hidden;}",".tabs-container.smooth{-webkit-scroll-behavior:smooth;-moz-scroll-behavior:smooth;-ms-scroll-behavior:smooth;scroll-behavior:smooth;}",".tabs-container .tab{-webkit-flex:0 0 100%;-ms-flex:0 0 100%;flex:0 0 100%;width:100%;}",".tabs-container.desktop .tab+.tab{margin-left:20px;}","@media screen and (min-width:758px){.tabs-container.desktop.mobile-only .tab+.tab{margin-left:0;}}"]),c("div",{ref:E,className:"jsx-417804429 "+(i()("tabs-container relative df",{desktop:!Y,smooth:k,"mobile-only flex-column-m":H})||"")},P))}M.propTypes={children:t().node},M.defaultProps={children:null};var C=n.createElement;function I({children:P}){const{currentValue:S,mobileOnly:H}=(0,n.useContext)(l.TabContext),E=(0,n.useRef)(null),Y=(0,s.useAmp)();return C(n.Fragment,null,C(T(),{id:"3061277544"},[".static-tabs.desktop .tab{display:none;}","@media screen and (min-width:758px){.static-tabs.mobile-only .tab+.tab{margin-left:0;}}"]),C(T(),{id:"3723938349",dynamic:[S]},[`.static-tabs.desktop.__jsx-style-dynamic-selector .tab[data-value='${S}']{display:block;}`,"@media screen and (min-width:758px){.static-tabs.mobile-only.__jsx-style-dynamic-selector .tab{display:block;}}"]),C("div",{ref:E,className:"jsx-3061277544 "+T().dynamic([["3723938349",[S]]])+" "+(i()("static-tabs",{desktop:!Y,"mobile-only flex-column-m":H})||"")},P))}I.propTypes={children:t().node},I.defaultProps={children:null};var $=n.createElement;function F({children:P,className:S,defaultValue:H,id:E,options:Y,mobileOnly:k,useAnimations:q,headbox:Q,useTabBarAnimations:G,onChange:N,hideTabBar:z,onTabMount:ee,classNames:R}){const ne=q?M:I;return $(l.TabContextProvider,{options:Y,id:E,defaultValue:H,mobileOnly:k},$("div",{className:i()("tabs",S),role:"tablist"},!z&&$(h,{useAnimations:G,onChange:N,onTabMount:ee,classNames:R}),Q,$(ne,null,P)))}F.displayName="Tabs",F.propTypes={children:t().node,className:t().string,defaultValue:t().string,id:t().string.isRequired,mobileOnly:t().bool,useAnimations:t().bool,useTabBarAnimations:t().bool,onChange:t().func,headbox:t().element,hideTabBar:t().bool,onTabMount:t().func,classNames:t().string},F.defaultProps={children:null,className:null,defaultValue:null,mobileOnly:!1,useAnimations:!0,useTabBarAnimations:!0,onChange:null,headbox:null,hideTabBar:!1,onTabMount:null,classNames:null}},"./components/Tabs/2022/index.js":(J,u,e)=>{e.r(u),e.d(u,{default:()=>o});var n=e("./components/Tabs/2022/Tabs.js");const o=n.default},"./components/hooks/useResizeObserver.js":(J,u,e)=>{e.r(u),e.d(u,{default:()=>o});var n=e("./node_modules/next/dist/compiled/react/index.js");function o({container:t,onResize:j}){(0,n.useEffect)(()=>{if(!t.current)return;const i=new ResizeObserver(j);return i.observe(t.current),()=>{i.disconnect()}},[j])}},"./server/v2/helpers/libraries/colorLibrary.js":(J,u,e)=>{e.r(u),e.d(u,{ColorLibrary:()=>o,default:()=>j});const n={"color:polls-closed":"#EBDB86","color:runoff":"#FFD60C","color:default":"#595959"};class o{constructor({colorIndex:l=n}={}){this.colorIndex=l,this.colorIndex["color:default"]||(this.colorIndex["color:default"]=n["color:default"])}getColorByUrn(l){return this.colorIndex[l]||this.colorIndex["color:default"]}getColorByName(l){return this.getColorByUrn(l)}}const j=new o}}]);
