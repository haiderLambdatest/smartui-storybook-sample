"use strict";(globalThis.webpackChunkfirecracker=globalThis.webpackChunkfirecracker||[]).push([[6722],{"./components/NationalCongressionalDistrictMap/2022/CongressionalDistrictMap.js":(ct,m,t)=>{t.r(m),t.d(m,{default:()=>Yt});var l=t("./node_modules/styled-jsx/style.js"),C=t.n(l),s=t("./node_modules/next/dist/compiled/react/index.js"),T=t("./node_modules/prop-types/index.js"),o=t.n(T),x=t("./node_modules/classnames/index.js"),h=t.n(x),U=t("./node_modules/lodash.kebabcase/index.js"),i=t.n(U),W=t("./node_modules/lodash.get/index.js"),e=t.n(W),P=t("./node_modules/d3-geo/src/projection/albersUsa.js"),I=t("./node_modules/react-i18next/dist/es/index.js"),n=t("./components/StripeSVGFillDef.js"),w=t("./components/ElectionMap/ElectionMap.js"),L=t("./components/hooks/useExternalClickListener.js"),S=t("./components/Tooltip.js"),b=t("./helpers/getPartyColor.js"),J=t("./components/StateMap/2022/StateMapTooltip/TooltipTable.js"),D=s.createElement;const B=({callStatus:g,candidates:F,districtName:y,percentOfVotesIn:K,stateName:Y})=>{const v=`${Y}, ${y}`,_=F.slice(0,2).map(O=>{const Z=`${O.percentTotalVote}%`,q=O.candidatePoliticalPartyName.toLowerCase(),z=(0,b.default)({party:q}),G=e()(O,"lastName",""),tt=e()(O,"totalVotes",""),Tt=["A","P","W"].includes(g),rt=e()(O,"isWinner",!1)&&Tt;return{colorHex:z,name:G,vote:tt,percentOfVoteFormatted:Z,percentOfVotesIn:K,isWinner:rt}});return D(J.default,{showTooltipClose:!1,heading:v,percentOfVotesIn:K,candidates:_,officeCode:"H"})};B.displayName="TooltipInfoWinnerCalled",B.propTypes={stateName:o().string,districtName:o().string,candidates:o().arrayOf(o().any),percentOfVotesIn:o().oneOfType([o().string,o().number]),callStatus:o().string},B.defaultProps={stateName:"",districtName:"",candidates:null,percentOfVotesIn:"",callStatus:""};const R=B;var d=t("./helpers/formatPollClosing.js"),E=t("./components/icons/CloseX.js"),M=s.createElement;const r=({children:g,className:F})=>M("div",{className:h()(F,"founders-cond f5 lh-none fw6 gray-100 ttu mr2")},g);r.displayName="StateName",r.propTypes={children:o().node},r.defaultProps={children:null};const ot=r;var p=t("./components/Link.js"),dt=t("./components/providers/BrandContext.js"),Nt=t("./helpers/stateNameUtilities.js"),c=s.createElement;const u=({t:g,closeCb:F,showTooltipClose:y,i18n:{language:K},feature:Y,districtData:v})=>{const ut=(0,s.useContext)(dt.default);if(!v)return null;const{STATEFP:_,DISTRICT_NAME:O}=Y.properties,Z=O,q=e()(v,"electionSeason",2020),z=e()(v,"pollsCloseTime",null),G=e()(v,"linkToStateSubPage",""),tt=(0,Nt.getStateNameByStateFipsId)(_),Tt=e()(v,"stateCode",""),rt=e()(v,"candidates",!1),at=e()(v,"percentOfVotesIn",!1),xt=e()(v,"callStatus",!1),Ot=e()(v,"raceHasStarted",!1),ft=(0,d.default)(z,"G",Tt),X=q==="2022"?G:`/politics/2020-elections/${i()(tt)}-house-results`,lt=ut==="noticias",Lt=lt?"https://www.nbcnews.com":"",it=Et=>!Et||typeof Et!="string"?"":K==="es"?Et.replace(/District/gi,"Distrito").replace(/Polls close at/gi,"Las urnas cierran:"):Et;return c(s.Fragment,null,c(C(),{id:"4026857249"},[".call-status.jsx-4026857249{background-color:#ffd60c;}",".closing-icon.jsx-4026857249{right:0;top:0;}",".border.jsx-4026857249{border-top:solid 1px #ccc;}","thead.jsx-4026857249 tr.jsx-4026857249 td.jsx-4026857249{padding-bottom:8px;vertical-align:bottom;}","tbody.jsx-4026857249 tr.jsx-4026857249:not(:last-child) td.jsx-4026857249{border-bottom:dashed 1px #cccccc;padding-bottom:4px;}","tbody.jsx-4026857249 tr.jsx-4026857249 td.jsx-4026857249{padding-top:4px;vertical-align:baseline;}","td.jsx-4026857249:not(:last-child){padding-right:8px;}",".swatch.jsx-4026857249{display:inline-block;width:15px;height:15px;margin-bottom:-1px;margin-right:5px;}","@media screen and (max-width:757px){.tooltip-width--mobile-only.jsx-4026857249{width:80vw;}}","@media screen and (min-width:758px){.call-status-wrapper.jsx-4026857249{margin-bottom:0;}.tooltip-data.jsx-4026857249{width:auto;}}"]),y&&c("div",{className:"jsx-4026857249 mb6-m"},c("span",{onClick:F,"data-testid":"close-btn",className:"jsx-4026857249 pointer closing-icon pa3 absolute"},c(E.default,null))),c(p.default,{href:lt?`${Lt}${X}`:X,className:h()({"pe-none":!y},"db no-underline"),"data-testid":"tooltip__link"},Ot&&c(R,{callStatus:xt,candidates:rt,districtName:it(Z),percentOfVotesIn:at,stateName:g(tt)}),!Ot&&c(s.Fragment,null,c("div",{className:"jsx-4026857249 mt2 mt0-m ws-nowrap"},c(ot,{className:"dib"},g(tt),", ",it(Z))),c("p",{className:"jsx-4026857249 publico-txt f3 lh-copy fw4 gray-100 mt2 mb1"},it(ft)," ET"))))};u.propTypes={showTooltipClose:o().bool,closeCb:o().func},u.defaultProps={showTooltipClose:!1,closeCb:()=>{}};const N=(0,I.withTranslation)()(u);var a=t("./components/NationalCongressionalDistrictMap/MapTooltip/ToolTipInfo/2022/TooltipInfo.js"),st=t("./components/NationalCongressionalDistrictMap/MapTooltip/ToolTipInfo/TooltipInfo.js"),Q=s.createElement;const H=({hoverRefElement:g,showTooltip:F,tooltipOptions:y,tooltipCloseCb:K,showTooltipClose:Y,isEmbed:v,useV2:ut,selectedFeature:_,fills:O})=>{if(!_||!g||!F)return null;const Z=()=>{K()},q=_.properties.GEOID;if(q.endsWith("ZZ"))return null;const z=e()(O,q,{});let G;ut?y.anchored?G=2023:G=2022:G=2020;const tt={2020:Q(N,{showTooltipClose:Y,closeCb:Z,districtData:z,feature:_}),2022:Q(a.default,{showTooltipClose:Y,rowData:z,isEmbed:v,onClose:Z}),2023:Q(st.default,{showTooltipClose:Y,rowData:z,isEmbed:v,onClose:Z})}[G];return Q(S.default,{id:"district-map","data-testid":"district-map__tooltip",hoveredElement:g,popperOptions:y},tt)};H.displayName="MapTooltip",H.propTypes={hoverRefElement:o().objectOf(o().any),showTooltip:o().bool,tooltipOptions:o().objectOf(o().any),isEmbed:o().bool,showTooltipClose:o().bool},H.defaultProps={hoverRefElement:null,showTooltip:!1,tooltipOptions:{},isEmbed:!1,showTooltipClose:!1};const et=H;var pt=t("./components/ElectionMap/TooltipLink.js"),ht=t("./components/hooks/useWindowSize.js"),nt=t("./components/NationalMap/2022/AccessibleTable.js"),mt=t("./components/TextByBreakpoint.js"),A=t("./components/MapKey.js"),k=s.createElement;const yt=({onClick:g,disabled:F})=>{const y=F?"#C0CFFF":"#2F61FF";return k("svg",{onClick:g,width:"34",height:"34",viewBox:"0 0 34 34",fill:"none",xmlns:"http://www.w3.org/2000/svg"},k("rect",{x:"1",y:"1",width:"32",height:"32",fill:"white",stroke:y}),k("path",{d:"M17 8L17 26",stroke:y,strokeWidth:"2",strokeLinecap:"round"}),k("line",{x1:"9",y1:"17",x2:"25",y2:"17",stroke:y,strokeWidth:"2",strokeLinecap:"round"}))};yt.displayName="ZoomInButtonSVG";const vt=yt;var jt=s.createElement;const It=({onClick:g,disabled:F})=>{const y=F?"#C0CFFF":"#2F61FF";return jt("svg",{onClick:g,width:"34",height:"34",viewBox:"0 0 34 34",fill:"none",xmlns:"http://www.w3.org/2000/svg"},jt("rect",{x:"1",y:"1",width:"32",height:"32",fill:"white",stroke:y}),jt("line",{x1:"9",y1:"17",x2:"25",y2:"17",stroke:y,strokeWidth:"2",strokeLinecap:"round"}))};It.displayName="ZoomOutButtonSVG";const St=It;var Dt=t("./components/ElectionMap/MapBoundingBox.js");const $=JSON.parse('{"10":[[-75.7900301793018,39.8388153101431],[-75.05063561675617,38.45143390982909]],"11":[[-77.11806895668957,38.99435963428633],[-76.90988990509905,38.79162154730547]],"12":[[-87.63470035600356,31.000809213282125],[-80.03257567895679,24.51490854927549]],"13":[[-85.60674924999249,35.000591132701324],[-80.84375612136121,30.35909162440624]],"15":[[-160.24970712717126,22.23238695135951],[-154.80833743387433,18.91727560534605]],"16":[[-117.24278650376503,49.00068691035909],[-111.04407577795777,41.988182656016555]],"17":[[-91.51472716237161,42.508772828518275],[-87.4947178902789,36.97041500324003]],"18":[[-88.09771928109281,41.760531838008376],[-84.78480092560925,37.77191769456694]],"19":[[-96.63306039630396,43.50012771146711],[-90.14002756307562,40.37830479583795]],"20":[[-102.05289432564325,40.0028957110471],[-94.59075211432113,36.99275055519555]],"21":[[-89.57291911219112,39.14641319952199],[-81.96720514115141,36.49707311372113]],"22":[[-94.04159013340133,33.01959948618486],[-88.81557807968079,28.929616299252984]],"23":[[-71.08446575455754,47.459533825428245],[-66.9819027206272,43.059430090190894]],"24":[[-79.48700299202991,39.72284225191251],[-75.05063561675617,37.91709878227782]],"25":[[-73.507239199792,42.88675909238091],[-69.92871308883089,41.23908260581605]],"26":[[-90.416403200532,48.190593622126215],[-82.4158668902689,41.696102361213605]],"27":[[-97.23965108111081,49.384686592055914],[-89.4903653503535,43.49926865177651]],"28":[[-91.64394174611746,34.99543677455774],[-88.09771928109281,30.180407208762084]],"29":[[-95.76804054400543,40.613687151061505],[-89.09913230512305,35.99538225441254]],"30":[[-116.05114089810897,49.00154597004969],[-104.04136319773197,44.35832834237342]],"31":[[-104.05213107971079,43.001014031230305],[-95.30861091290913,40.00031853197531]],"32":[[-120.00654287832877,42.0019276110661],[-114.04113626206261,35.00145019239192]],"33":[[-72.55607629166292,45.30587118110181],[-70.70400059130591,42.696906900759004]],"34":[[-75.56031536375363,41.357632843118424],[-73.8948829510295,38.928212038110374]],"35":[[-109.04842831788318,37.00048209241092],[-103.0004679397794,31.332406253852533]],"36":[[-79.7633786294863,45.01550900568005],[-71.85616396303963,40.502009391283906]],"37":[[-84.32178200052,36.5881334409244],[-75.45981513195132,33.85116926668266]],"38":[[-104.04854178571784,49.00068691035909],[-96.55768522245222,45.934702874618736]],"39":[[-84.82069386553866,41.97787393972939],[-80.52071966199662,38.40504468653686]],"40":[[-103.00405723377233,37.002200211792115],[-94.43282317863178,33.61664597114971]],"41":[[-124.55417836738366,46.26801803457034],[-116.46390970729706,41.99161889477894]],"42":[[-80.52071966199662,42.269954234532335],[-74.69529551145511,39.720265072840725]],"44":[[-71.85975325703257,42.019108804878044],[-71.12035869448694,41.15145851737517]],"45":[[-83.34908332843328,35.21535605535055],[-78.53942937789378,32.03425802107021]],"46":[[-104.05930966769667,45.9450115909059],[-96.43564922669226,42.484719157181566]],"47":[[-90.3087243807438,36.67833470843708],[-81.64775797577975,34.98255087919878]],"48":[[-106.64719063660635,36.50050935248352],[-93.5175532104321,25.840437651866516]],"49":[[-114.05190414404143,42.0019276110661],[-109.04124972989729,36.99790491333913]],"50":[[-73.43904261392613,45.01550900568005],[-71.49364526975269,42.726973989929895]],"51":[[-83.67570908179081,39.46598340442404],[-75.24086819838197,36.540885157941574]],"53":[[-124.73364306703067,49.00240502974029],[-116.9161607504075,45.54383071539715]],"54":[[-82.63840311783117,40.63859988208881],[-77.72107034750347,37.2015020600106]],"55":[[-92.88942676166761,47.07725226311263],[-86.82351991359913,42.49159163470634]],"56":[[-111.05843295392954,45.006059349083486],[-104.05213107971079,40.995109653686534]],"60":[[-170.84530299432993,-14.157381542325423],[-169.42394257312571,-14.373864584355843]],"66":[[144.62133533915335,13.652098761677614],[144.9587289744897,13.245763528025279]],"69":[[145.12024720417202,18.81247032309323],[146.0821779942799,14.110836636456362]],"72":[[-67.94024421674217,18.51609472983729],[-65.22314866408664,17.91217576734767]],"78":[[-65.08316619836198,18.38465859717597],[-64.57707574535745,17.679370591195905]],"01":[[-88.4745951503515,35.008322669916694],[-84.89247974539745,30.222501133601334]],"02":[[-179.13657211802118,69],[-130.03645,54.823784]],"04":[[-114.8128344705447,37.0039183311733],[-109.04483902389023,31.332406253852533]],"05":[[-94.61946646626465,36.49965029279292],[-89.65547287402873,33.00413641175411]],"06":[[-124.41060660766607,42.00965914828148],[-114.13445790587905,32.5342307609976]],"08":[[-109.05919619986199,41.00198213121131],[-102.04212644366443,36.99275055519555]],"09":[[-73.72618613336134,42.050894013430124],[-71.78796737717377,40.98480093739937]]}');var Rt=t("./components/ElectionMap/ZoomHandler.js"),Ct=t("./components/ElectionMap/constants.js"),Ht=t("./components/hooks/useTooltipState.js"),f=s.createElement;const At=({t:g,mapKeyText:F,showMapKey:y,fills:K,topojson:Y,showUXText:v,disableTooltips:ut,className:_,zoomable:O,i18n:{language:Z},isEmbed:q,hoverStroke:z,stroke:G,useTooltipsV2:tt,useStateOverviewLinks:Tt=!1,zoomedToState:rt,onStateClick:at})=>{const xt=(0,s.useRef)(null),Ot=Z==="es",{width:ft}=(0,ht.default)({trailing:!0}),X=ft<758,{0:lt,1:Lt}=(0,s.useState)(null),{0:it,1:Et}=(0,s.useState)(null),{0:Bt,1:Pt}=(0,s.useState)(null),{onStateInteraction:Ft,hoverElement:Gt,closeTooltip:bt,showTooltip:Wt,tooltipOptions:Zt}=(0,Ht.default)({isEmbed:q,isMobile:X,zoomable:O,container:xt}),zt=(0,s.useCallback)(()=>{bt(),Pt(null),at(null)},[bt,at]),{zoomHandler:Ut,zoomLevel:wt}=(0,Rt.useZoomHandler)(),Xt=(0,s.useMemo)(()=>{if(!rt)return null;const j=rt.padStart(2,"0");return new Dt.default($[j])},[rt]),Jt=(0,s.useCallback)(()=>{(!O||!X)&&(Pt(null),at(null),bt())},[bt,X,at,O]);(0,L.default)({onExternalClick:Jt,enabled:Wt,selector:".tooltip"});const Qt=j=>{if(!j||X)return null;const{GEOID:V}=j.properties,{linkToStateResultsPage:gt,linkToStateSubPage:Mt,electionSeason:oo,stateName:so}=e()(K,V,{}),Vt=Tt?gt:Mt;return Vt?oo==="2022"?Vt:`/politics/2020-elections/${i()(so)}-house-results`:null},kt=(0,s.useMemo)(()=>[{id:"congressional-districts",type:Ct.LAYER_TYPE.GEO,featureId:j=>j.properties.GEOID,source:Y,style:{hoverStroke:z,stroke:G,fill:j=>K[j.properties.GEOID]?.backgroundColorHex}},{id:"interactive",type:Ct.LAYER_TYPE.INTERACTIVE,featureId:j=>j.properties.GEOID,source:Y,onFeatureHover(j,V){X||(Pt(V),Ft(j,V))},onFeatureClick(j,V){const gt=V?.properties.STATEFP;at(gt),Pt(V),Ft(j,V)}},Ct.citiesLayer],[K,z,X,at,Ft,G,Y]);(0,s.useEffect)(()=>{const j=ft?ft-40:1/0,{width:V}=xt.current.getBoundingClientRect(),gt=1.65,Mt=Math.min(j,V);Lt(Mt),Et(Mt/gt)},[ft]);const _t=Qt(Bt),$t=wt>=60,Kt=wt<=1,qt=(0,s.useMemo)(()=>{const V=1260*(lt/960);return(0,P.default)().scale(V).translate([lt/2,it/2])},[lt,it]),to=!!lt&&!!it;return f(s.Fragment,null,f(C(),{id:"4052026378"},[".map-footer.jsx-4052026378{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;}",".button.jsx-4052026378{border:none;background:none;cursor:pointer;padding:0;margin:0;}",".button[disabled].jsx-4052026378{cursor:default;}"]),f("div",{"aria-hidden":"true","data-testid":"us-district-map",className:"jsx-4052026378 "+(h()("mt7 mb5 mt0-m relative",_)||"")},f(n.default,null),f("div",{ref:xt,className:"jsx-4052026378 us-national-map"},!ut&&f(et,{hoverRefElement:Gt,showTooltip:Wt,tooltipOptions:Zt,tooltipCloseCb:zt,showTooltipClose:X,isEmbed:q,useV2:tt,selectedFeature:Bt,fills:K}),to&&f(pt.default,{href:_t},f(w.default,{layers:kt,height:it,width:lt,selectedFeature:Bt,enableZoom:O,enableCompression:O,projection:qt,zoomHandler:Ut,zoomTo:Xt}))),O&&f("div",{className:"jsx-4052026378 map-footer"},f("div",{className:"jsx-4052026378 map-footer-legend"}),f("div",{className:"jsx-4052026378 map-zoom-controls"},f("button",{type:"button",onClick:()=>Ut.zoomIn(),disabled:$t,className:"jsx-4052026378 button"},f(vt,{disabled:$t})),f("button",{type:"button",onClick:()=>Ut.zoomOut(),disabled:Kt,className:"jsx-4052026378 button"},f(St,{disabled:Kt})))),v&&f("div",{className:`jsx-4052026378 instructions publico-txt ${Ot?"f1":"f2"} f3-m fs-italic gray-80 lh-title mt4 mt8-m tl`},f(mt.default,{s:g("BOP.hoverInstructionsMobile"),m:g("BOP.hoverInstructionsDesktop")})),y&&f(A.default,{text:F})),f(nt.default,{fills:K,type:"house"}))};At.propTypes={className:o().string,fills:o().objectOf(o().any).isRequired,topojson:o().objectOf(o().any).isRequired,mapKeyText:o().string,isEmbed:o().bool,showMapKey:o().bool,showUXText:o().bool,disableTooltips:o().bool,hoverStroke:o().string,stroke:o().string,useTooltipsV2:o().bool,zoomable:o().bool,onStateClick:o().func},At.defaultProps={className:null,isEmbed:!1,mapKeyText:null,showMapKey:!1,showUXText:!0,hoverStroke:void 0,stroke:void 0,disableTooltips:!0,useTooltipsV2:!1,zoomable:!1,onStateClick:()=>{}};const Yt=(0,I.withTranslation)()(At)},"./components/NationalCongressionalDistrictMap/MapTooltip/ToolTipInfo/2022/TooltipInfo.js":(ct,m,t)=>{t.r(m),t.d(m,{default:()=>Nt});var l=t("./node_modules/styled-jsx/style.js"),C=t.n(l),s=t("./node_modules/next/dist/compiled/react/index.js"),T=t("./node_modules/prop-types/index.js"),o=t.n(T),x=t("./node_modules/lodash.get/index.js"),h=t.n(x),U=t("./node_modules/lodash.isempty/index.js"),i=t.n(U),W=t("./node_modules/classnames/index.js"),e=t.n(W),P=t("./node_modules/react-i18next/dist/es/index.js"),I=t("./components/Link.js"),n=t("./components/providers/BrandContext.js"),w=t("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),L=t("./components/DistrictResultsModule/CandidateList/index.js"),S=t("./helpers/getPartyColor.js"),b=t("./helpers/constants.js"),J=t("./components/modules/NationalMapModule/NationalMapModule.props.js"),D=t("./components/modules/PageHeader/2022/StatewideRaceResults/helpers.js"),B=t("./helpers/stateNameUtilities.js"),R=t("./helpers/translateReplace.js"),d=s.createElement;function E(c,u){var N=Object.keys(c);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(c);u&&(a=a.filter(function(st){return Object.getOwnPropertyDescriptor(c,st).enumerable})),N.push.apply(N,a)}return N}function M(c){for(var u=1;u<arguments.length;u++){var N=arguments[u]!=null?arguments[u]:{};u%2?E(Object(N),!0).forEach(function(a){(0,w.default)(c,a,N[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(c,Object.getOwnPropertyDescriptors(N)):E(Object(N)).forEach(function(a){Object.defineProperty(c,a,Object.getOwnPropertyDescriptor(N,a))})}return c}function r({callStatus:c,candidates:u,electionSeason:N,isEmbed:a,pollsCloseFormatted:st,raceHasStarted:Q,stateName:H}){const{i18n:et}=(0,P.useTranslation)();if(!u||!H)return null;const pt=a?2:5,ht=u.slice(0,pt).map(A=>{const k=A.colorHex||(0,S.default)({party:A.candidatePoliticalPartyAbbreviation,electionSeason:N,electionType:b.ELECTION_TYPE.GENERAL,officeCode:b.OFFICE_CODES.HOUSE});return M(M({},A),{},{partyColor:k,partyAbbreviation:A.candidatePoliticalPartyAbbreviation,totalPercentReceived:A.percentTotalVote,totalVotesReceived:A.totalVotes,isIncumbent:A.incumbent})}),nt=(0,B.getStateAbbreviationByStateName)(H),mt=(0,D.isRunoff)({stateAbbr:nt,callStatusCode:c});return d(s.Fragment,null,d(C(),{id:"328442948"},[".tooltip.jsx-328442948{width:200px;}",".tooltip.polls-closed.jsx-328442948{width:330px;}",".tooltip.jsx-328442948 .characterization-container{margin-right:0;}",".tooltip.jsx-328442948 .candidate-list__item{width:100%;padding-left:0;padding-right:0;}",".tooltip.jsx-328442948 .total-percent{margin-right:0;}",".tooltip.jsx-328442948 .incumbent-label{margin-top:-6px;color:#555;font-size:10px;}",".tooltip.jsx-328442948 .color-square{margin-top:-1px;}",".tooltip.jsx-328442948 .call-status-container{margin-right:0;}","@media screen and (min-width:1240px){.tooltip.jsx-328442948 .with-more-candidates .candidate-list__item:nth-child(4){border-top:none;margin-top:0;padding-top:0;}}"]),d("div",{className:"jsx-328442948 "+(e()("tooltip ph2",{"polls-closed":!st||Q})||"")},Q?d(L.default,{items:ht,callStatus:c,isRunoff:mt,showAllCandidates:!0,showMinorPartyLabels:!1,stateAbbr:nt}):d("p",{className:"jsx-328442948 publico-txt f3 lh-copy fw4 gray-100 mt2 mb1"},(0,R.default)(et,st))))}r.propTypes={callStatus:o().string,candidates:o().arrayOf(J.NationalMapDataCandidate),electionSeason:o().string,isEmbed:o().bool,pollsCloseFormatted:o().string,raceHasStarted:o().bool,stateName:o().string},r.defaultProps={callStatus:"",candidates:[],electionSeason:null,isEmbed:!1,pollsCloseFormatted:null,raceHasStarted:!1,stateName:null};var ot=t("./components/icons/CloseX.js"),p=s.createElement;const dt=({t:c,isEmbed:u,onClose:N,rowData:a,showCloseButton:st})=>{const Q=(0,s.useContext)(n.default),{i18n:H}=(0,P.useTranslation)();if(!a||i()(a))return null;const et=h()(a,"candidates",[]),pt=h()(a,"percentOfVotesIn",!1),ht=h()(a,"callStatus",!1),nt=h()(a,"raceHasStarted",!1),mt=h()(a,"stateName",null),A=a?.additionalResults,k=a?.linkToStateSubPage??"",yt=(0,R.default)(H,a?.pollsCloseFormatted),vt=Q==="noticias",jt=vt?"https://www.nbcnews.com":"",St=A&&A.length>0&&Array.isArray(et)&&et.length?[et[0]]:et,Dt=u&&a?.mobileName?(0,R.default)(H,a.mobileName):(0,R.default)(H,a?.name);return p(s.Fragment,null,p(C(),{id:"2615330217"},[".call-status.jsx-2615330217{background-color:#ffd60c;}",".header.jsx-2615330217{border-bottom:dashed 1px #cccccc;}",".tooltip-v2--embed .total-votes{display:none;}",".tooltip-v2--embed .percent{padding-right:0;padding-left:4px;}",".tooltip__percent-of-votes-in.jsx-2615330217{margin-bottom:2px;}","@media screen and (max-width:757px){.tooltip-width--mobile-only.jsx-2615330217{width:80vw;}}","@media screen and (min-width:758px){.call-status-wrapper.jsx-2615330217{margin-bottom:0;}.tooltip-data.jsx-2615330217{width:auto;}}",".tooltip-v2--embed.tooltip-v2 .tooltip,.tooltip-v2--embed.tooltip-v2 .tooltip.polls-closed{width:220px;}",".tooltip-v2--embed.tooltip-v2 .header{padding-top:8px;}",".tooltip-v2--embed .tooltip > div > ul > li:last-child{padding-bottom:0;}","@media screen and (max-width:430px){.tooltip-ok--modifier .incumbent,.tooltip-ok--modifier .characterization-container{display:none;}.tooltip-ok--modifier .tooltip > div > ul > li{padding-bottom:0;}}","@media screen and (max-width:325px){.tooltip{display:none;}}"]),p("div",{className:"jsx-2615330217 container df items-start"},p(I.default,{href:vt?`${jt}${k}`:k,className:e()("tooltip-v2 db no-underline",{"tooltip-v2--embed":u,"tooltip-ok--modifier":a?.mobileName?.includes("OK")}),"data-testid":"tooltip__link"},p("div",{className:"jsx-2615330217 header mh2 df justify-between pt3 pb1 mb1 items-end"},p("div",{className:"jsx-2615330217 dib founders-cond f7 lh-none fw6 gray-100 ttu mr2"},Dt),p("div",{className:"jsx-2615330217 df items-end"},p("span",{className:"jsx-2615330217 tooltip__percent-of-votes-in lh-none fw4 founders-mono f2 ws-nowrap gray-80 dn db-m ws-nowrap dib"},nt?`${pt}% ${c("in")}`:null))),p(r,{callStatus:ht,candidates:St,isEmbed:u,raceHasStarted:nt,pollsCloseFormatted:yt,stateName:mt}),A&&A.map($=>{const Rt=u&&$?.mobileName?$.mobileName:$?.name,Ct=Array.isArray($.candidates)&&$.candidates.length?[$.candidates[0]]:[];return p("div",{key:$.raceID,className:"jsx-2615330217"},p("div",{className:"jsx-2615330217 header mh2 df justify-between pt3 pb1 mb1 items-end"},p("div",{className:"jsx-2615330217 dib founders-cond f7 lh-none fw6 gray-100 ttu mr2"},Rt),p("div",{className:"jsx-2615330217"},p("span",{className:"jsx-2615330217 tooltip__percent-of-votes-in lh-none fw4 founders-mono f2 ws-nowrap gray-80 dn db-m ws-nowrap dib"},nt?`${pt}% ${c("in")}`:null))),p(r,{callStatus:$.callStatus,candidates:Ct,isEmbed:u,raceHasStarted:$.raceHasStarted??!1,pollsCloseFormatted:$.pollsCloseFormatted,stateName:mt}))})),st&&p("button",{type:"button",onClick:N,className:"jsx-2615330217 close b-none bg-white pl3 pr2 lh-none pa0 pt1 pointer"},p(ot.default,null))))};dt.propTypes={isEmbed:o().bool,onClose:o().func,rowData:o().objectOf(o().any),showCloseButton:o().bool},dt.defaultProps={isEmbed:!1,onClose:()=>{},rowData:null,showCloseButton:!1};const Nt=(0,P.withTranslation)()(dt)},"./components/StateMap/2022/StateMapTooltip/TooltipTable.js":(ct,m,t)=>{t.r(m),t.d(m,{default:()=>L});var l=t("./node_modules/styled-jsx/style.js"),C=t.n(l),s=t("./node_modules/next/dist/compiled/react/index.js"),T=t("./node_modules/classnames/index.js"),o=t.n(T),x=t("./node_modules/lodash.kebabcase/index.js"),h=t.n(x),U=t("./node_modules/prop-types/index.js"),i=t.n(U),W=t("./node_modules/react-i18next/dist/es/index.js"),e=t("./components/VotesText.js"),P=t("./components/Checkmark.js"),I=t("./helpers/color.js"),n=s.createElement;const w=({t:S,showTooltipClose:b,heading:J,percentOfVotesIn:D,candidates:B,officeCode:R})=>{const d=B.length>6?B.slice(0,5):B,E=r=>r&&r.replace(/&quot;/g,'"'),M=R==="H";return n(s.Fragment,null,n(C(),{id:"2648320259"},[".border.jsx-2648320259{border-top:solid 1px #ccc;}","thead.jsx-2648320259 tr.jsx-2648320259 td.jsx-2648320259{padding-bottom:8px;vertical-align:bottom;}","tbody.jsx-2648320259 tr.jsx-2648320259:not(:last-child) td.jsx-2648320259{border-bottom:dashed 1px #cccccc;padding-bottom:4px;}","tbody.jsx-2648320259 tr.jsx-2648320259 td.jsx-2648320259{padding-top:4px;vertical-align:baseline;}","td.jsx-2648320259:not(:last-child){padding-right:8px;}",".swatch.jsx-2648320259{display:inline-block;width:15px;height:15px;margin-bottom:-1px;margin-right:5px;background:var(--candidate-color);}","@media screen and (max-width:757px){.tooltip-width--mobile-only.jsx-2648320259{width:80vw;}}","@media screen and (min-width:758px){.tooltip-data.jsx-2648320259{width:auto;}}"]),n("table",{className:"jsx-2648320259 "+(o()({"tooltip-width--mobile-only":b},"tooltip-data")||"")},n("thead",{className:"jsx-2648320259"},n("tr",{className:"jsx-2648320259"},n("td",{colSpan:"2",className:"jsx-2648320259"},n("div",{className:"jsx-2648320259 dib founders-cond f5 lh-none fw6 gray-100 ttu mr2"},J)),n("td",{className:"jsx-2648320259 tr"},n("span",{className:"jsx-2648320259 dn dib-m"},n("span",{className:"jsx-2648320259 tooltip__percent-of-votes-in lh-none ttu fw4 founders-mono f2 ws-nowrap gray-80 dn db-m ws-nowrap dib"},D==="0"||D===0?`0% ${S("expected vote in")}`:`${D}% ${S("In")}`))))),n("tbody",{className:"jsx-2648320259"},d.map((r,ot)=>n("tr",{key:`national-map-tooltip-${h()(r.name)}`,"data-testid":"tooltip-candidate",style:{"--candidate-color":(0,I.convertToHex)(r.colorHex)},className:"jsx-2648320259"},n("td",{"data-testid":"tooltip-candidate__info",className:"jsx-2648320259 publico-txt f3 lh-copy fw4 gray-100 lh-none"},n("span",{className:"jsx-2648320259 swatch"}),E(r.name)),n("td",{className:"jsx-2648320259 founders-cond f6 lh-none tr fw6 gray-100"},r.percentOfVoteFormatted,n(P.default,{nonpartisanWinner:!0,shouldDisplay:M&&r.isWinner})),n("td",{className:"jsx-2648320259"},n(e.default,{votes:r.vote,classes:"tr",showVotesLabel:ot===0&&r.vote===0})))))),n("div",{className:"jsx-2648320259 border tr db dn-m mr1 pt1"},n("span",{className:"jsx-2648320259 lh-none ttu fw4 founders-mono f2 ws-nowrap gray-80 dn db-m ws-nowrap dib"},`${D}% ${S("In")}`)))};w.propTypes={showTooltipClose:i().bool,heading:i().string,percentOfVotesIn:i().oneOfType([i().string,i().number]),candidates:i().arrayOf(i().shape({colorHex:i().string,isWinner:i().bool,name:i().string,party:i().string,percentOfVote:i().number,percentOfVoteFormatted:i().string,vote:i().number,voteFormatted:i().string})),officeCode:i().string},w.defaultProps={showTooltipClose:!1,heading:"",percentOfVotesIn:"",candidates:[],officeCode:""};const L=(0,W.withTranslation)()(w)},"./helpers/color.js":(ct,m,t)=>{t.r(m),t.d(m,{convertToHex:()=>l,hexToRgb:()=>C});function l(s){return s&&(s.startsWith("#")?s.toLowerCase():`#${s.replace("bg-","")}`.toLowerCase())}function C(s){const T=s.replace("#","");return(T.length===3?T.split("").map(x=>`${x}${x}`):T.split(/(\w{2})/).filter(Boolean)).map(x=>parseInt(x,16)).join(",")}},"./helpers/formatPollClosing.js":(ct,m,t)=>{t.r(m),t.d(m,{default:()=>x});var l=t("./data/usStates.js"),C=t("./helpers/getElectionTypes.js"),s=t("./helpers/timeUtilities.js"),T=t("./node_modules/console-browserify/index.js");const x=(h,U="",i,W)=>{const e=(0,s.getDate)(h),P=l.default.find(R=>R.abbr===U),I=e.hour()-12,n=e.minute(),w=e.format("MMM D"),L=n<10?`0${n}`:n,S=(0,C.isCaucusByElectionType)(i),b=W||S?"Caucus begins at":"Polls close at",J=W||S?"Caucus begins at":"Polls start closing at";if(!P)return`${b} ${I}:${L} P.M. `;const{timezones:D=["ET"]}=P;if(D.length||T.warn(`Add timezone array to ${P}!`),D&&D.length>1){const R=I-1;return`${J} ${R}:${L} P.M. ET, ${w}`}return`${b} ${I}:${L} P.M. ET, ${w}`}},"./helpers/getElectionTypes.js":(ct,m,t)=>{t.r(m),t.d(m,{default:()=>W,electionTypeMap:()=>C,electionTypeNames:()=>T,electionTypeParties:()=>s,getIsCaucusFromRaces:()=>i,getNameByElectionType:()=>h,getPartyByElectionType:()=>x,isCaucusByElectionType:()=>U});var l=t("./helpers/constants.js");const C={G:"General election",D:"Democratic primary",R:"Republican primary",E:"Democratic caucus",S:"Republican caucus"},s={[l.ELECTION_TYPE_CODES.GENERAL_ELECTION]:null,[l.ELECTION_TYPE_CODES.DEMOCRATIC_PRIMARY]:"Dem",[l.ELECTION_TYPE_CODES.DEMOCRATIC_CAUCUS]:"Dem",[l.ELECTION_TYPE_CODES.DEMOCRATIC_RUNOFF]:"Dem",[l.ELECTION_TYPE_CODES.DEMOCRATIC_SPECIAL_PRIMARY]:"Dem",[l.ELECTION_TYPE_CODES.DEMOCRATIC_SPECIAL_PRIMARY_RUNOFF]:"Dem",[l.ELECTION_TYPE_CODES.DEMOCRATIC_STATE_CONVENTION]:"Dem",[l.ELECTION_TYPE_CODES.DEMOCRATIC_FIREHOUSE_PRIMARY]:"Dem",[l.ELECTION_TYPE_CODES.REPUBLICAN_PRIMARY]:"Rep",[l.ELECTION_TYPE_CODES.REPUBLICAN_CAUCUS]:"Rep",[l.ELECTION_TYPE_CODES.REPUBLICAN_RUNOFF]:"Rep",[l.ELECTION_TYPE_CODES.REPUBLICAN_SPECIAL_PRIMARY]:"Rep",[l.ELECTION_TYPE_CODES.REPUBLICAN_SPECIAL_PRIMARY_RUNOFF]:"Rep",[l.ELECTION_TYPE_CODES.REPUBLICAN_STATE_CONVENTION]:"Rep",[l.ELECTION_TYPE_CODES.REPUBLICAN_FIREHOUSE_PRIMARY]:"Rep"},T={G:null,D:"primary",R:"primary",E:"caucus",S:"caucus"},o=e=>typeof e!="string"?"":C[e],x=e=>typeof e!="string"?null:s[e],h=e=>typeof e!="string"?null:T[e],U=e=>["E","S"].includes(e),i=e=>Array.isArray(e)?e.find(I=>U(I.election_type)):!1,W=o},"./helpers/timeUtilities.js":(ct,m,t)=>{t.r(m),t.d(m,{formatDuration:()=>J,getDate:()=>L,getDateNow:()=>S,getPollClosedFormatted:()=>R,isAfter:()=>B,isBefore:()=>D});var l=t("./node_modules/left-pad/index.js"),C=t.n(l),s=t("./node_modules/parse-iso-duration/index.js"),T=t.n(s),o=t("./node_modules/dayjs/plugin/utc.js"),x=t.n(o),h=t("./node_modules/dayjs/plugin/timezone.js"),U=t.n(h),i=t("./node_modules/dayjs/plugin/isSameOrAfter.js"),W=t.n(i),e=t("./lib/dayjsCustom.js"),P=t("./server/v2/helpers/getPollsCloseFormatted.js");e.dayJsCustom.extend(x()),e.dayJsCustom.extend(U()),e.dayJsCustom.extend(W());const I=d=>Math.floor(d/1e3%60),n=d=>Math.floor(d/(1e3*60)%60),w=d=>Math.floor(d/(1e3*60*60)%24),L=d=>(0,e.dayJsCustom)(d),S=()=>e.dayJsCustom.utc().tz("America/New_York"),b=d=>C()(String(d),2,"0"),J=d=>{let E;try{E=T()(d)}catch{return null}if(!E)return null;const M=w(E),r=n(E),ot=I(E);if(!M){const p=b(r),dt=b(ot);return`${p}:${dt}`}return`${b(M)}:${b(r)}:${b(ot)}`},D=(d,E="day")=>{const M=S(),r=L(d);return(0,e.dayJsCustom)(M).isBefore(r,E)},B=(d,E="day")=>{const M=S(),r=L(d);return(0,e.dayJsCustom)(M).isAfter(r,E)},R=(d,E,M)=>(0,P.default)({races:[{polls_close_utc:d}],electionDate:E,currentTime:M})}}]);
