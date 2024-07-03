"use strict";(globalThis.webpackChunkfirecracker=globalThis.webpackChunkfirecracker||[]).push([[312],{"./components/NationalCongressionalDistrictMap/CongressionalDistrictMap.js":(ot,p,t)=>{t.r(p),t.d(p,{default:()=>Vt});var l=t("./node_modules/styled-jsx/style.js"),u=t.n(l),s=t("./node_modules/next/dist/compiled/react/index.js"),E=t("./node_modules/prop-types/index.js"),o=t.n(E),C=t("./node_modules/classnames/index.js"),d=t.n(C),P=t("./node_modules/lodash.kebabcase/index.js"),n=t.n(P),F=t("./node_modules/lodash.get/index.js"),e=t.n(F),g=t("./node_modules/d3-geo/src/projection/albersUsa.js"),M=t("./node_modules/react-i18next/dist/es/index.js"),a=t("./components/StripeSVGFillDef.js"),D=t("./components/ElectionMap/ElectionMap.js"),R=t("./components/hooks/useExternalClickListener.js"),x=t("./components/Tooltip.js"),y=t("./helpers/getPartyColor.js"),K=t("./components/StateMap/2022/StateMapTooltip/TooltipTable.js"),O=s.createElement;const N=({callStatus:I,candidates:$,districtName:b,percentOfVotesIn:H,stateName:Y})=>{const S=`${Y}, ${b}`,k=$.slice(0,2).map(A=>{const z=`${A.percentTotalVote}%`,q=A.candidatePoliticalPartyName.toLowerCase(),J=(0,y.default)({party:q}),G=e()(A,"lastName",""),tt=e()(A,"totalVotes",""),yt=["A","P","W"].includes(I),ct=e()(A,"isWinner",!1)&&yt;return{colorHex:J,name:G,vote:tt,percentOfVoteFormatted:z,percentOfVotesIn:H,isWinner:ct}});return O(K.default,{showTooltipClose:!1,heading:S,percentOfVotesIn:H,candidates:k,officeCode:"H"})};N.displayName="TooltipInfoWinnerCalled",N.propTypes={stateName:o().string,districtName:o().string,candidates:o().arrayOf(o().any),percentOfVotesIn:o().oneOfType([o().string,o().number]),callStatus:o().string},N.defaultProps={stateName:"",districtName:"",candidates:null,percentOfVotesIn:"",callStatus:""};const U=N;var r=t("./helpers/formatPollClosing.js"),T=t("./components/icons/CloseX.js"),L=s.createElement;const c=({children:I,className:$})=>L("div",{className:d()($,"founders-cond f5 lh-none fw6 gray-100 ttu mr2")},I);c.displayName="StateName",c.propTypes={children:o().node},c.defaultProps={children:null};const st=c;var f=t("./components/Link.js"),rt=t("./components/providers/BrandContext.js"),Nt=t("./helpers/stateNameUtilities.js"),m=s.createElement;const j=({t:I,closeCb:$,showTooltipClose:b,i18n:{language:H},feature:Y,districtData:S})=>{const ut=(0,s.useContext)(rt.default);if(!S)return null;const{STATEFP:k,DISTRICT_NAME:A}=Y.properties,z=A,q=e()(S,"electionSeason",2020),J=e()(S,"pollsCloseTime",null),G=e()(S,"linkToStateSubPage",""),tt=(0,Nt.getStateNameByStateFipsId)(k),yt=e()(S,"stateCode",""),ct=e()(S,"candidates",!1),lt=e()(S,"percentOfVotesIn",!1),Tt=e()(S,"callStatus",!1),vt=e()(S,"raceHasStarted",!1),ft=(0,r.default)(J,"G",yt),Z=q==="2022"?G:`/politics/2020-elections/${n()(tt)}-house-results`,it=ut==="noticias",Lt=it?"https://www.nbcnews.com":"",dt=Et=>!Et||typeof Et!="string"?"":H==="es"?Et.replace(/District/gi,"Distrito").replace(/Polls close at/gi,"Las urnas cierran:"):Et;return m(s.Fragment,null,m(u(),{id:"4026857249"},[".call-status.jsx-4026857249{background-color:#ffd60c;}",".closing-icon.jsx-4026857249{right:0;top:0;}",".border.jsx-4026857249{border-top:solid 1px #ccc;}","thead.jsx-4026857249 tr.jsx-4026857249 td.jsx-4026857249{padding-bottom:8px;vertical-align:bottom;}","tbody.jsx-4026857249 tr.jsx-4026857249:not(:last-child) td.jsx-4026857249{border-bottom:dashed 1px #cccccc;padding-bottom:4px;}","tbody.jsx-4026857249 tr.jsx-4026857249 td.jsx-4026857249{padding-top:4px;vertical-align:baseline;}","td.jsx-4026857249:not(:last-child){padding-right:8px;}",".swatch.jsx-4026857249{display:inline-block;width:15px;height:15px;margin-bottom:-1px;margin-right:5px;}","@media screen and (max-width:757px){.tooltip-width--mobile-only.jsx-4026857249{width:80vw;}}","@media screen and (min-width:758px){.call-status-wrapper.jsx-4026857249{margin-bottom:0;}.tooltip-data.jsx-4026857249{width:auto;}}"]),b&&m("div",{className:"jsx-4026857249 mb6-m"},m("span",{onClick:$,"data-testid":"close-btn",className:"jsx-4026857249 pointer closing-icon pa3 absolute"},m(T.default,null))),m(f.default,{href:it?`${Lt}${Z}`:Z,className:d()({"pe-none":!b},"db no-underline"),"data-testid":"tooltip__link"},vt&&m(U,{callStatus:Tt,candidates:ct,districtName:dt(z),percentOfVotesIn:lt,stateName:I(tt)}),!vt&&m(s.Fragment,null,m("div",{className:"jsx-4026857249 mt2 mt0-m ws-nowrap"},m(st,{className:"dib"},I(tt),", ",dt(z))),m("p",{className:"jsx-4026857249 publico-txt f3 lh-copy fw4 gray-100 mt2 mb1"},dt(ft)," ET"))))};j.propTypes={showTooltipClose:o().bool,closeCb:o().func},j.defaultProps={showTooltipClose:!1,closeCb:()=>{}};const B=(0,M.withTranslation)()(j);var i=t("./components/NationalCongressionalDistrictMap/MapTooltip/ToolTipInfo/2022/TooltipInfo.js"),et=t("./components/NationalCongressionalDistrictMap/MapTooltip/ToolTipInfo/TooltipInfo.js"),X=s.createElement;const V=({hoverRefElement:I,showTooltip:$,tooltipOptions:b,tooltipCloseCb:H,showTooltipClose:Y,isEmbed:S,useV2:ut,selectedFeature:k,fills:A})=>{if(!k||!I||!$)return null;const z=()=>{H()},q=k.properties.GEOID;if(q.endsWith("ZZ"))return null;const J=e()(A,q,{});let G;ut?b.anchored?G=2023:G=2022:G=2020;const tt={2020:X(B,{showTooltipClose:Y,closeCb:z,districtData:J,feature:k}),2022:X(i.default,{showTooltipClose:Y,rowData:J,isEmbed:S,onClose:z}),2023:X(et.default,{showTooltipClose:Y,rowData:J,isEmbed:S,onClose:z})}[G];return X(x.default,{id:"district-map","data-testid":"district-map__tooltip",hoveredElement:I,popperOptions:b},tt)};V.displayName="MapTooltip",V.propTypes={hoverRefElement:o().objectOf(o().any),showTooltip:o().bool,tooltipOptions:o().objectOf(o().any),isEmbed:o().bool,showTooltipClose:o().bool},V.defaultProps={hoverRefElement:null,showTooltip:!1,tooltipOptions:{},isEmbed:!1,showTooltipClose:!1};const nt=V;var pt=t("./components/ElectionMap/TooltipLink.js"),jt=t("./components/hooks/useWindowSize.js"),at=t("./components/NationalMap/AccessibleTable.js"),mt=t("./components/TextByBreakpoint.js"),W=t("./components/MapKey.js"),Q=s.createElement;const xt=({onClick:I,disabled:$})=>{const b=$?"#C0CFFF":"#2F61FF";return Q("svg",{onClick:I,width:"34",height:"34",viewBox:"0 0 34 34",fill:"none",xmlns:"http://www.w3.org/2000/svg"},Q("rect",{x:"1",y:"1",width:"32",height:"32",fill:"white",stroke:b}),Q("path",{d:"M17 8L17 26",stroke:b,strokeWidth:"2",strokeLinecap:"round"}),Q("line",{x1:"9",y1:"17",x2:"25",y2:"17",stroke:b,strokeWidth:"2",strokeLinecap:"round"}))};xt.displayName="ZoomInButtonSVG";const Ot=xt;var Ct=s.createElement;const It=({onClick:I,disabled:$})=>{const b=$?"#C0CFFF":"#2F61FF";return Ct("svg",{onClick:I,width:"34",height:"34",viewBox:"0 0 34 34",fill:"none",xmlns:"http://www.w3.org/2000/svg"},Ct("rect",{x:"1",y:"1",width:"32",height:"32",fill:"white",stroke:b}),Ct("line",{x1:"9",y1:"17",x2:"25",y2:"17",stroke:b,strokeWidth:"2",strokeLinecap:"round"}))};It.displayName="ZoomOutButtonSVG";const bt=It;var St=t("./components/ElectionMap/MapBoundingBox.js");const w=JSON.parse('{"10":[[-75.7900301793018,39.8388153101431],[-75.05063561675617,38.45143390982909]],"11":[[-77.11806895668957,38.99435963428633],[-76.90988990509905,38.79162154730547]],"12":[[-87.63470035600356,31.000809213282125],[-80.03257567895679,24.51490854927549]],"13":[[-85.60674924999249,35.000591132701324],[-80.84375612136121,30.35909162440624]],"15":[[-160.24970712717126,22.23238695135951],[-154.80833743387433,18.91727560534605]],"16":[[-117.24278650376503,49.00068691035909],[-111.04407577795777,41.988182656016555]],"17":[[-91.51472716237161,42.508772828518275],[-87.4947178902789,36.97041500324003]],"18":[[-88.09771928109281,41.760531838008376],[-84.78480092560925,37.77191769456694]],"19":[[-96.63306039630396,43.50012771146711],[-90.14002756307562,40.37830479583795]],"20":[[-102.05289432564325,40.0028957110471],[-94.59075211432113,36.99275055519555]],"21":[[-89.57291911219112,39.14641319952199],[-81.96720514115141,36.49707311372113]],"22":[[-94.04159013340133,33.01959948618486],[-88.81557807968079,28.929616299252984]],"23":[[-71.08446575455754,47.459533825428245],[-66.9819027206272,43.059430090190894]],"24":[[-79.48700299202991,39.72284225191251],[-75.05063561675617,37.91709878227782]],"25":[[-73.507239199792,42.88675909238091],[-69.92871308883089,41.23908260581605]],"26":[[-90.416403200532,48.190593622126215],[-82.4158668902689,41.696102361213605]],"27":[[-97.23965108111081,49.384686592055914],[-89.4903653503535,43.49926865177651]],"28":[[-91.64394174611746,34.99543677455774],[-88.09771928109281,30.180407208762084]],"29":[[-95.76804054400543,40.613687151061505],[-89.09913230512305,35.99538225441254]],"30":[[-116.05114089810897,49.00154597004969],[-104.04136319773197,44.35832834237342]],"31":[[-104.05213107971079,43.001014031230305],[-95.30861091290913,40.00031853197531]],"32":[[-120.00654287832877,42.0019276110661],[-114.04113626206261,35.00145019239192]],"33":[[-72.55607629166292,45.30587118110181],[-70.70400059130591,42.696906900759004]],"34":[[-75.56031536375363,41.357632843118424],[-73.8948829510295,38.928212038110374]],"35":[[-109.04842831788318,37.00048209241092],[-103.0004679397794,31.332406253852533]],"36":[[-79.7633786294863,45.01550900568005],[-71.85616396303963,40.502009391283906]],"37":[[-84.32178200052,36.5881334409244],[-75.45981513195132,33.85116926668266]],"38":[[-104.04854178571784,49.00068691035909],[-96.55768522245222,45.934702874618736]],"39":[[-84.82069386553866,41.97787393972939],[-80.52071966199662,38.40504468653686]],"40":[[-103.00405723377233,37.002200211792115],[-94.43282317863178,33.61664597114971]],"41":[[-124.55417836738366,46.26801803457034],[-116.46390970729706,41.99161889477894]],"42":[[-80.52071966199662,42.269954234532335],[-74.69529551145511,39.720265072840725]],"44":[[-71.85975325703257,42.019108804878044],[-71.12035869448694,41.15145851737517]],"45":[[-83.34908332843328,35.21535605535055],[-78.53942937789378,32.03425802107021]],"46":[[-104.05930966769667,45.9450115909059],[-96.43564922669226,42.484719157181566]],"47":[[-90.3087243807438,36.67833470843708],[-81.64775797577975,34.98255087919878]],"48":[[-106.64719063660635,36.50050935248352],[-93.5175532104321,25.840437651866516]],"49":[[-114.05190414404143,42.0019276110661],[-109.04124972989729,36.99790491333913]],"50":[[-73.43904261392613,45.01550900568005],[-71.49364526975269,42.726973989929895]],"51":[[-83.67570908179081,39.46598340442404],[-75.24086819838197,36.540885157941574]],"53":[[-124.73364306703067,49.00240502974029],[-116.9161607504075,45.54383071539715]],"54":[[-82.63840311783117,40.63859988208881],[-77.72107034750347,37.2015020600106]],"55":[[-92.88942676166761,47.07725226311263],[-86.82351991359913,42.49159163470634]],"56":[[-111.05843295392954,45.006059349083486],[-104.05213107971079,40.995109653686534]],"60":[[-170.84530299432993,-14.157381542325423],[-169.42394257312571,-14.373864584355843]],"66":[[144.62133533915335,13.652098761677614],[144.9587289744897,13.245763528025279]],"69":[[145.12024720417202,18.81247032309323],[146.0821779942799,14.110836636456362]],"72":[[-67.94024421674217,18.51609472983729],[-65.22314866408664,17.91217576734767]],"78":[[-65.08316619836198,18.38465859717597],[-64.57707574535745,17.679370591195905]],"01":[[-88.4745951503515,35.008322669916694],[-84.89247974539745,30.222501133601334]],"02":[[-179.13657211802118,69],[-130.03645,54.823784]],"04":[[-114.8128344705447,37.0039183311733],[-109.04483902389023,31.332406253852533]],"05":[[-94.61946646626465,36.49965029279292],[-89.65547287402873,33.00413641175411]],"06":[[-124.41060660766607,42.00965914828148],[-114.13445790587905,32.5342307609976]],"08":[[-109.05919619986199,41.00198213121131],[-102.04212644366443,36.99275055519555]],"09":[[-73.72618613336134,42.050894013430124],[-71.78796737717377,40.98480093739937]]}');var At=t("./components/ElectionMap/ZoomHandler.js"),ht=t("./components/ElectionMap/constants.js"),_t=t("./components/hooks/useTooltipState.js"),h=s.createElement;const Rt=({t:I,mapKeyText:$,showMapKey:b,fills:H,topojson:Y,showUXText:S,disableTooltips:ut,className:k,zoomable:A,i18n:{language:z},isEmbed:q,hoverStroke:J,stroke:G,useTooltipsV2:tt,useStateOverviewLinks:yt=!1,zoomedToState:ct,onStateClick:lt})=>{const Tt=(0,s.useRef)(null),vt=z==="es",{width:ft}=(0,jt.default)({trailing:!0}),Z=ft<758,{0:it,1:Lt}=(0,s.useState)(null),{0:dt,1:Et}=(0,s.useState)(null),{0:Bt,1:Pt}=(0,s.useState)(null),{onStateInteraction:Ft,hoverElement:Yt,closeTooltip:Mt,showTooltip:Wt,tooltipOptions:Gt}=(0,_t.default)({isEmbed:q,isMobile:Z,zoomable:A,container:Tt}),zt=(0,s.useCallback)(()=>{Mt(),Pt(null),lt(null)},[Mt,lt]),{zoomHandler:Ut,zoomLevel:Kt}=(0,At.useZoomHandler)(),Jt=(0,s.useMemo)(()=>{if(!ct)return null;const v=ct.padStart(2,"0");return new St.default(w[v])},[ct]),Zt=(0,s.useCallback)(()=>{(!A||!Z)&&(Pt(null),lt(null),Mt())},[Mt,Z,lt,A]);(0,R.default)({onExternalClick:Zt,enabled:Wt,selector:".tooltip"});const Xt=v=>{if(!v||Z)return null;const{GEOID:_}=v.properties,{linkToStateResultsPage:gt,linkToStateSubPage:Dt,electionSeason:oo,stateName:so}=e()(H,_,{}),Ht=yt?gt:Dt;return Ht?oo==="2022"?Ht:`/politics/2020-elections/${n()(so)}-house-results`:null},Qt=(0,s.useMemo)(()=>[{id:"congressional-districts",type:ht.LAYER_TYPE.GEO,featureId:v=>v.properties.GEOID,source:Y,style:{hoverStroke:J,stroke:G,fill:v=>H[v.properties.GEOID]?.backgroundColorHex}},{id:"interactive",type:ht.LAYER_TYPE.INTERACTIVE,featureId:v=>v.properties.GEOID,source:Y,onFeatureHover(v,_){Z||(Pt(_),Ft(v,_))},onFeatureClick(v,_){const gt=_?.properties.STATEFP;lt(gt),Pt(_),Ft(v,_)}},ht.citiesLayer],[H,J,Z,lt,Ft,G,Y]);(0,s.useEffect)(()=>{const v=ft?ft-40:1/0,{width:_}=Tt.current.getBoundingClientRect(),gt=1.65,Dt=Math.min(v,_);Lt(Dt),Et(Dt/gt)},[ft]);const kt=Xt(Bt),$t=Kt>=60,wt=Kt<=1,qt=(0,s.useMemo)(()=>{const _=1260*(it/960);return(0,g.default)().scale(_).translate([it/2,dt/2])},[it,dt]),to=!!it&&!!dt;return h(s.Fragment,null,h(u(),{id:"4052026378"},[".map-footer.jsx-4052026378{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;}",".button.jsx-4052026378{border:none;background:none;cursor:pointer;padding:0;margin:0;}",".button[disabled].jsx-4052026378{cursor:default;}"]),h("div",{"aria-hidden":"true","data-testid":"us-district-map",className:"jsx-4052026378 "+(d()("mt7 mb5 mt0-m relative",k)||"")},h(a.default,null),h("div",{ref:Tt,className:"jsx-4052026378 us-national-map"},!ut&&h(nt,{hoverRefElement:Yt,showTooltip:Wt,tooltipOptions:Gt,tooltipCloseCb:zt,showTooltipClose:Z,isEmbed:q,useV2:tt,selectedFeature:Bt,fills:H}),to&&h(pt.default,{href:kt},h(D.default,{layers:Qt,height:dt,width:it,selectedFeature:Bt,enableZoom:A,enableCompression:A,projection:qt,zoomHandler:Ut,zoomTo:Jt}))),A&&h("div",{className:"jsx-4052026378 map-footer"},h("div",{className:"jsx-4052026378 map-footer-legend"}),h("div",{className:"jsx-4052026378 map-zoom-controls"},h("button",{type:"button",onClick:()=>Ut.zoomIn(),disabled:$t,className:"jsx-4052026378 button"},h(Ot,{disabled:$t})),h("button",{type:"button",onClick:()=>Ut.zoomOut(),disabled:wt,className:"jsx-4052026378 button"},h(bt,{disabled:wt})))),S&&h("div",{className:`jsx-4052026378 instructions publico-txt ${vt?"f1":"f2"} f3-m fs-italic gray-80 lh-title mt4 mt8-m tl`},h(mt.default,{s:I("BOP.hoverInstructionsMobile"),m:I("BOP.hoverInstructionsDesktop")})),b&&h(W.default,{text:$})),h(at.default,{fills:H,type:"house"}))};Rt.propTypes={className:o().string,fills:o().objectOf(o().any).isRequired,topojson:o().objectOf(o().any).isRequired,mapKeyText:o().string,isEmbed:o().bool,showMapKey:o().bool,showUXText:o().bool,disableTooltips:o().bool,hoverStroke:o().string,stroke:o().string,useTooltipsV2:o().bool,zoomable:o().bool,onStateClick:o().func},Rt.defaultProps={className:null,isEmbed:!1,mapKeyText:null,showMapKey:!1,showUXText:!0,hoverStroke:void 0,stroke:void 0,disableTooltips:!0,useTooltipsV2:!1,zoomable:!1,onStateClick:()=>{}};const Vt=(0,M.withTranslation)()(Rt)},"./components/NationalCongressionalDistrictMap/MapTooltip/ToolTipInfo/2022/TooltipInfo.js":(ot,p,t)=>{t.r(p),t.d(p,{default:()=>Nt});var l=t("./node_modules/styled-jsx/style.js"),u=t.n(l),s=t("./node_modules/next/dist/compiled/react/index.js"),E=t("./node_modules/prop-types/index.js"),o=t.n(E),C=t("./node_modules/lodash.get/index.js"),d=t.n(C),P=t("./node_modules/lodash.isempty/index.js"),n=t.n(P),F=t("./node_modules/classnames/index.js"),e=t.n(F),g=t("./node_modules/react-i18next/dist/es/index.js"),M=t("./components/Link.js"),a=t("./components/providers/BrandContext.js"),D=t("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),R=t("./components/DistrictResultsModule/CandidateList/index.js"),x=t("./helpers/getPartyColor.js"),y=t("./helpers/constants.js"),K=t("./components/modules/NationalMapModule/NationalMapModule.props.js"),O=t("./components/modules/PageHeader/2022/StatewideRaceResults/helpers.js"),N=t("./helpers/stateNameUtilities.js"),U=t("./helpers/translateReplace.js"),r=s.createElement;function T(m,j){var B=Object.keys(m);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(m);j&&(i=i.filter(function(et){return Object.getOwnPropertyDescriptor(m,et).enumerable})),B.push.apply(B,i)}return B}function L(m){for(var j=1;j<arguments.length;j++){var B=arguments[j]!=null?arguments[j]:{};j%2?T(Object(B),!0).forEach(function(i){(0,D.default)(m,i,B[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(m,Object.getOwnPropertyDescriptors(B)):T(Object(B)).forEach(function(i){Object.defineProperty(m,i,Object.getOwnPropertyDescriptor(B,i))})}return m}function c({callStatus:m,candidates:j,electionSeason:B,isEmbed:i,pollsCloseFormatted:et,raceHasStarted:X,stateName:V}){const{i18n:nt}=(0,g.useTranslation)();if(!j||!V)return null;const pt=i?2:5,jt=j.slice(0,pt).map(W=>{const Q=W.colorHex||(0,x.default)({party:W.candidatePoliticalPartyAbbreviation,electionSeason:B,electionType:y.ELECTION_TYPE.GENERAL,officeCode:y.OFFICE_CODES.HOUSE});return L(L({},W),{},{partyColor:Q,partyAbbreviation:W.candidatePoliticalPartyAbbreviation,totalPercentReceived:W.percentTotalVote,totalVotesReceived:W.totalVotes,isIncumbent:W.incumbent})}),at=(0,N.getStateAbbreviationByStateName)(V),mt=(0,O.isRunoff)({stateAbbr:at,callStatusCode:m});return r(s.Fragment,null,r(u(),{id:"328442948"},[".tooltip.jsx-328442948{width:200px;}",".tooltip.polls-closed.jsx-328442948{width:330px;}",".tooltip.jsx-328442948 .characterization-container{margin-right:0;}",".tooltip.jsx-328442948 .candidate-list__item{width:100%;padding-left:0;padding-right:0;}",".tooltip.jsx-328442948 .total-percent{margin-right:0;}",".tooltip.jsx-328442948 .incumbent-label{margin-top:-6px;color:#555;font-size:10px;}",".tooltip.jsx-328442948 .color-square{margin-top:-1px;}",".tooltip.jsx-328442948 .call-status-container{margin-right:0;}","@media screen and (min-width:1240px){.tooltip.jsx-328442948 .with-more-candidates .candidate-list__item:nth-child(4){border-top:none;margin-top:0;padding-top:0;}}"]),r("div",{className:"jsx-328442948 "+(e()("tooltip ph2",{"polls-closed":!et||X})||"")},X?r(R.default,{items:jt,callStatus:m,isRunoff:mt,showAllCandidates:!0,showMinorPartyLabels:!1,stateAbbr:at}):r("p",{className:"jsx-328442948 publico-txt f3 lh-copy fw4 gray-100 mt2 mb1"},(0,U.default)(nt,et))))}c.propTypes={callStatus:o().string,candidates:o().arrayOf(K.NationalMapDataCandidate),electionSeason:o().string,isEmbed:o().bool,pollsCloseFormatted:o().string,raceHasStarted:o().bool,stateName:o().string},c.defaultProps={callStatus:"",candidates:[],electionSeason:null,isEmbed:!1,pollsCloseFormatted:null,raceHasStarted:!1,stateName:null};var st=t("./components/icons/CloseX.js"),f=s.createElement;const rt=({t:m,isEmbed:j,onClose:B,rowData:i,showCloseButton:et})=>{const X=(0,s.useContext)(a.default),{i18n:V}=(0,g.useTranslation)();if(!i||n()(i))return null;const nt=d()(i,"candidates",[]),pt=d()(i,"percentOfVotesIn",!1),jt=d()(i,"callStatus",!1),at=d()(i,"raceHasStarted",!1),mt=d()(i,"stateName",null),W=i?.additionalResults,Q=i?.linkToStateSubPage??"",xt=(0,U.default)(V,i?.pollsCloseFormatted),Ot=X==="noticias",Ct=Ot?"https://www.nbcnews.com":"",bt=W&&W.length>0&&Array.isArray(nt)&&nt.length?[nt[0]]:nt,St=j&&i?.mobileName?(0,U.default)(V,i.mobileName):(0,U.default)(V,i?.name);return f(s.Fragment,null,f(u(),{id:"2615330217"},[".call-status.jsx-2615330217{background-color:#ffd60c;}",".header.jsx-2615330217{border-bottom:dashed 1px #cccccc;}",".tooltip-v2--embed .total-votes{display:none;}",".tooltip-v2--embed .percent{padding-right:0;padding-left:4px;}",".tooltip__percent-of-votes-in.jsx-2615330217{margin-bottom:2px;}","@media screen and (max-width:757px){.tooltip-width--mobile-only.jsx-2615330217{width:80vw;}}","@media screen and (min-width:758px){.call-status-wrapper.jsx-2615330217{margin-bottom:0;}.tooltip-data.jsx-2615330217{width:auto;}}",".tooltip-v2--embed.tooltip-v2 .tooltip,.tooltip-v2--embed.tooltip-v2 .tooltip.polls-closed{width:220px;}",".tooltip-v2--embed.tooltip-v2 .header{padding-top:8px;}",".tooltip-v2--embed .tooltip > div > ul > li:last-child{padding-bottom:0;}","@media screen and (max-width:430px){.tooltip-ok--modifier .incumbent,.tooltip-ok--modifier .characterization-container{display:none;}.tooltip-ok--modifier .tooltip > div > ul > li{padding-bottom:0;}}","@media screen and (max-width:325px){.tooltip{display:none;}}"]),f("div",{className:"jsx-2615330217 container df items-start"},f(M.default,{href:Ot?`${Ct}${Q}`:Q,className:e()("tooltip-v2 db no-underline",{"tooltip-v2--embed":j,"tooltip-ok--modifier":i?.mobileName?.includes("OK")}),"data-testid":"tooltip__link"},f("div",{className:"jsx-2615330217 header mh2 df justify-between pt3 pb1 mb1 items-end"},f("div",{className:"jsx-2615330217 dib founders-cond f7 lh-none fw6 gray-100 ttu mr2"},St),f("div",{className:"jsx-2615330217 df items-end"},f("span",{className:"jsx-2615330217 tooltip__percent-of-votes-in lh-none fw4 founders-mono f2 ws-nowrap gray-80 dn db-m ws-nowrap dib"},at?`${pt}% ${m("in")}`:null))),f(c,{callStatus:jt,candidates:bt,isEmbed:j,raceHasStarted:at,pollsCloseFormatted:xt,stateName:mt}),W&&W.map(w=>{const At=j&&w?.mobileName?w.mobileName:w?.name,ht=Array.isArray(w.candidates)&&w.candidates.length?[w.candidates[0]]:[];return f("div",{key:w.raceID,className:"jsx-2615330217"},f("div",{className:"jsx-2615330217 header mh2 df justify-between pt3 pb1 mb1 items-end"},f("div",{className:"jsx-2615330217 dib founders-cond f7 lh-none fw6 gray-100 ttu mr2"},At),f("div",{className:"jsx-2615330217"},f("span",{className:"jsx-2615330217 tooltip__percent-of-votes-in lh-none fw4 founders-mono f2 ws-nowrap gray-80 dn db-m ws-nowrap dib"},at?`${pt}% ${m("in")}`:null))),f(c,{callStatus:w.callStatus,candidates:ht,isEmbed:j,raceHasStarted:w.raceHasStarted??!1,pollsCloseFormatted:w.pollsCloseFormatted,stateName:mt}))})),et&&f("button",{type:"button",onClick:B,className:"jsx-2615330217 close b-none bg-white pl3 pr2 lh-none pa0 pt1 pointer"},f(st.default,null))))};rt.propTypes={isEmbed:o().bool,onClose:o().func,rowData:o().objectOf(o().any),showCloseButton:o().bool},rt.defaultProps={isEmbed:!1,onClose:()=>{},rowData:null,showCloseButton:!1};const Nt=(0,g.withTranslation)()(rt)},"./components/StateMap/2022/StateMapTooltip/TooltipTable.js":(ot,p,t)=>{t.r(p),t.d(p,{default:()=>R});var l=t("./node_modules/styled-jsx/style.js"),u=t.n(l),s=t("./node_modules/next/dist/compiled/react/index.js"),E=t("./node_modules/classnames/index.js"),o=t.n(E),C=t("./node_modules/lodash.kebabcase/index.js"),d=t.n(C),P=t("./node_modules/prop-types/index.js"),n=t.n(P),F=t("./node_modules/react-i18next/dist/es/index.js"),e=t("./components/VotesText.js"),g=t("./components/Checkmark.js"),M=t("./helpers/color.js"),a=s.createElement;const D=({t:x,showTooltipClose:y,heading:K,percentOfVotesIn:O,candidates:N,officeCode:U})=>{const r=N.length>6?N.slice(0,5):N,T=c=>c&&c.replace(/&quot;/g,'"'),L=U==="H";return a(s.Fragment,null,a(u(),{id:"2648320259"},[".border.jsx-2648320259{border-top:solid 1px #ccc;}","thead.jsx-2648320259 tr.jsx-2648320259 td.jsx-2648320259{padding-bottom:8px;vertical-align:bottom;}","tbody.jsx-2648320259 tr.jsx-2648320259:not(:last-child) td.jsx-2648320259{border-bottom:dashed 1px #cccccc;padding-bottom:4px;}","tbody.jsx-2648320259 tr.jsx-2648320259 td.jsx-2648320259{padding-top:4px;vertical-align:baseline;}","td.jsx-2648320259:not(:last-child){padding-right:8px;}",".swatch.jsx-2648320259{display:inline-block;width:15px;height:15px;margin-bottom:-1px;margin-right:5px;background:var(--candidate-color);}","@media screen and (max-width:757px){.tooltip-width--mobile-only.jsx-2648320259{width:80vw;}}","@media screen and (min-width:758px){.tooltip-data.jsx-2648320259{width:auto;}}"]),a("table",{className:"jsx-2648320259 "+(o()({"tooltip-width--mobile-only":y},"tooltip-data")||"")},a("thead",{className:"jsx-2648320259"},a("tr",{className:"jsx-2648320259"},a("td",{colSpan:"2",className:"jsx-2648320259"},a("div",{className:"jsx-2648320259 dib founders-cond f5 lh-none fw6 gray-100 ttu mr2"},K)),a("td",{className:"jsx-2648320259 tr"},a("span",{className:"jsx-2648320259 dn dib-m"},a("span",{className:"jsx-2648320259 tooltip__percent-of-votes-in lh-none ttu fw4 founders-mono f2 ws-nowrap gray-80 dn db-m ws-nowrap dib"},O==="0"||O===0?`0% ${x("expected vote in")}`:`${O}% ${x("In")}`))))),a("tbody",{className:"jsx-2648320259"},r.map((c,st)=>a("tr",{key:`national-map-tooltip-${d()(c.name)}`,"data-testid":"tooltip-candidate",style:{"--candidate-color":(0,M.convertToHex)(c.colorHex)},className:"jsx-2648320259"},a("td",{"data-testid":"tooltip-candidate__info",className:"jsx-2648320259 publico-txt f3 lh-copy fw4 gray-100 lh-none"},a("span",{className:"jsx-2648320259 swatch"}),T(c.name)),a("td",{className:"jsx-2648320259 founders-cond f6 lh-none tr fw6 gray-100"},c.percentOfVoteFormatted,a(g.default,{nonpartisanWinner:!0,shouldDisplay:L&&c.isWinner})),a("td",{className:"jsx-2648320259"},a(e.default,{votes:c.vote,classes:"tr",showVotesLabel:st===0&&c.vote===0})))))),a("div",{className:"jsx-2648320259 border tr db dn-m mr1 pt1"},a("span",{className:"jsx-2648320259 lh-none ttu fw4 founders-mono f2 ws-nowrap gray-80 dn db-m ws-nowrap dib"},`${O}% ${x("In")}`)))};D.propTypes={showTooltipClose:n().bool,heading:n().string,percentOfVotesIn:n().oneOfType([n().string,n().number]),candidates:n().arrayOf(n().shape({colorHex:n().string,isWinner:n().bool,name:n().string,party:n().string,percentOfVote:n().number,percentOfVoteFormatted:n().string,vote:n().number,voteFormatted:n().string})),officeCode:n().string},D.defaultProps={showTooltipClose:!1,heading:"",percentOfVotesIn:"",candidates:[],officeCode:""};const R=(0,F.withTranslation)()(D)},"./helpers/color.js":(ot,p,t)=>{t.r(p),t.d(p,{convertToHex:()=>l,hexToRgb:()=>u});function l(s){return s&&(s.startsWith("#")?s.toLowerCase():`#${s.replace("bg-","")}`.toLowerCase())}function u(s){const E=s.replace("#","");return(E.length===3?E.split("").map(C=>`${C}${C}`):E.split(/(\w{2})/).filter(Boolean)).map(C=>parseInt(C,16)).join(",")}},"./helpers/formatPollClosing.js":(ot,p,t)=>{t.r(p),t.d(p,{default:()=>C});var l=t("./data/usStates.js"),u=t("./helpers/getElectionTypes.js"),s=t("./helpers/timeUtilities.js"),E=t("./node_modules/console-browserify/index.js");const C=(d,P="",n,F)=>{const e=(0,s.getDate)(d),g=l.default.find(U=>U.abbr===P),M=e.hour()-12,a=e.minute(),D=e.format("MMM D"),R=a<10?`0${a}`:a,x=(0,u.isCaucusByElectionType)(n),y=F||x?"Caucus begins at":"Polls close at",K=F||x?"Caucus begins at":"Polls start closing at";if(!g)return`${y} ${M}:${R} P.M. `;const{timezones:O=["ET"]}=g;if(O.length||E.warn(`Add timezone array to ${g}!`),O&&O.length>1){const U=M-1;return`${K} ${U}:${R} P.M. ET, ${D}`}return`${y} ${M}:${R} P.M. ET, ${D}`}},"./helpers/getElectionTypes.js":(ot,p,t)=>{t.r(p),t.d(p,{default:()=>F,electionTypeMap:()=>u,electionTypeNames:()=>E,electionTypeParties:()=>s,getIsCaucusFromRaces:()=>n,getNameByElectionType:()=>d,getPartyByElectionType:()=>C,isCaucusByElectionType:()=>P});var l=t("./helpers/constants.js");const u={G:"General election",D:"Democratic primary",R:"Republican primary",E:"Democratic caucus",S:"Republican caucus"},s={[l.ELECTION_TYPE_CODES.GENERAL_ELECTION]:null,[l.ELECTION_TYPE_CODES.DEMOCRATIC_PRIMARY]:"Dem",[l.ELECTION_TYPE_CODES.DEMOCRATIC_CAUCUS]:"Dem",[l.ELECTION_TYPE_CODES.DEMOCRATIC_RUNOFF]:"Dem",[l.ELECTION_TYPE_CODES.DEMOCRATIC_SPECIAL_PRIMARY]:"Dem",[l.ELECTION_TYPE_CODES.DEMOCRATIC_SPECIAL_PRIMARY_RUNOFF]:"Dem",[l.ELECTION_TYPE_CODES.DEMOCRATIC_STATE_CONVENTION]:"Dem",[l.ELECTION_TYPE_CODES.DEMOCRATIC_FIREHOUSE_PRIMARY]:"Dem",[l.ELECTION_TYPE_CODES.REPUBLICAN_PRIMARY]:"Rep",[l.ELECTION_TYPE_CODES.REPUBLICAN_CAUCUS]:"Rep",[l.ELECTION_TYPE_CODES.REPUBLICAN_RUNOFF]:"Rep",[l.ELECTION_TYPE_CODES.REPUBLICAN_SPECIAL_PRIMARY]:"Rep",[l.ELECTION_TYPE_CODES.REPUBLICAN_SPECIAL_PRIMARY_RUNOFF]:"Rep",[l.ELECTION_TYPE_CODES.REPUBLICAN_STATE_CONVENTION]:"Rep",[l.ELECTION_TYPE_CODES.REPUBLICAN_FIREHOUSE_PRIMARY]:"Rep"},E={G:null,D:"primary",R:"primary",E:"caucus",S:"caucus"},o=e=>typeof e!="string"?"":u[e],C=e=>typeof e!="string"?null:s[e],d=e=>typeof e!="string"?null:E[e],P=e=>["E","S"].includes(e),n=e=>Array.isArray(e)?e.find(M=>P(M.election_type)):!1,F=o},"./helpers/timeUtilities.js":(ot,p,t)=>{t.r(p),t.d(p,{formatDuration:()=>K,getDate:()=>R,getDateNow:()=>x,getPollClosedFormatted:()=>U,isAfter:()=>N,isBefore:()=>O});var l=t("./node_modules/left-pad/index.js"),u=t.n(l),s=t("./node_modules/parse-iso-duration/index.js"),E=t.n(s),o=t("./node_modules/dayjs/plugin/utc.js"),C=t.n(o),d=t("./node_modules/dayjs/plugin/timezone.js"),P=t.n(d),n=t("./node_modules/dayjs/plugin/isSameOrAfter.js"),F=t.n(n),e=t("./lib/dayjsCustom.js"),g=t("./server/v2/helpers/getPollsCloseFormatted.js");e.dayJsCustom.extend(C()),e.dayJsCustom.extend(P()),e.dayJsCustom.extend(F());const M=r=>Math.floor(r/1e3%60),a=r=>Math.floor(r/(1e3*60)%60),D=r=>Math.floor(r/(1e3*60*60)%24),R=r=>(0,e.dayJsCustom)(r),x=()=>e.dayJsCustom.utc().tz("America/New_York"),y=r=>u()(String(r),2,"0"),K=r=>{let T;try{T=E()(r)}catch{return null}if(!T)return null;const L=D(T),c=a(T),st=M(T);if(!L){const f=y(c),rt=y(st);return`${f}:${rt}`}return`${y(L)}:${y(c)}:${y(st)}`},O=(r,T="day")=>{const L=x(),c=R(r);return(0,e.dayJsCustom)(L).isBefore(c,T)},N=(r,T="day")=>{const L=x(),c=R(r);return(0,e.dayJsCustom)(L).isAfter(c,T)},U=(r,T,L)=>(0,g.default)({races:[{polls_close_utc:r}],electionDate:T,currentTime:L})},"./lib/dayjsCustom.js":(ot,p,t)=>{t.r(p),t.d(p,{dayJsCustom:()=>P});var l=t("./node_modules/dayjs/dayjs.min.js"),u=t.n(l),s=t("./node_modules/dayjs/plugin/updateLocale.js"),E=t.n(s),o=t("./node_modules/dayjs/locale/es.js"),C=t.n(o);u().extend(E());const d={en:{monthsShort:["Jan.","Feb.","March","April","May","June","July","Aug.","Sept.","Oct.","Nov.","Dec."]},es:{monthsShort:["En.","Feb.","Mar.","Abr.","May.","Jun.","Jul.","Ag.","Sept.","Oct.","Nov.","Dic."],relativeTime:{future:"en %s",past:"hace %s",s:"pocos segundos",m:"un minuto",mm:"%d minutos",h:"una hora",hh:"%d horas",d:"un d\xEDa",dd:"%d dias",M:"un mes",MM:"%d meses",y:"un a\xF1o",yy:"%d a\xF1os"}}};Object.keys(d).forEach(n=>{u().updateLocale(n,d[n])});const P=u()},"./server/v2/helpers/getPollsCloseFormatted.js":(ot,p,t)=>{t.r(p),t.d(p,{default:()=>F,isSplitPollsCloseState:()=>n});var l=t("./node_modules/dayjs/plugin/utc.js"),u=t.n(l),s=t("./node_modules/dayjs/plugin/timezone.js"),E=t.n(s),o=t("./node_modules/dayjs/plugin/isSameOrAfter.js"),C=t.n(o),d=t("./lib/dayjsCustom.js");d.dayJsCustom.extend(u()),d.dayJsCustom.extend(E()),d.dayJsCustom.extend(C());const P=["AL","AK","NH","FL","MI","KS","IN","ID","ND","OR","KY","TX","SD"];function n(e){return P.includes(e)}function F({races:e,electionDate:g,currentTime:M,stateCode:a}){const D=Array.from(new Set(e.map(N=>N.polls_close_utc).filter(Boolean))).sort();if(!D.length)return null;const R=D[0],x=d.dayJsCustom.utc(M).tz("America/New_York"),y=d.dayJsCustom.utc(g).hour(12).tz("America/New_York"),K=d.dayJsCustom.utc(R).tz("America/New_York");if(x.isSameOrAfter(K))return null;if(x.isBefore(y,"day"))return`Election on ${y.format("MMM D")}`;const O=`${K.format("h:mm A")} ET`;return D.length>1?`Polls begin to close today at ${O}`:n(a)?`Polls begin closing at ${K.subtract(1,"hour").format("h:mm A")} ET`:`Polls close at ${O}`}}}]);
