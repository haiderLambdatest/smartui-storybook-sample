(globalThis.webpackChunkfirecracker=globalThis.webpackChunkfirecracker||[]).push([[9823],{"./components/Marquee/Modules/NationalResults.stories.js":(C,n,e)=>{"use strict";e.r(n),e.d(n,{NationalResultsFourCandidates:()=>l,NationalResultsThreeCandidates:()=>j,NationalResultsTwoCandidates:()=>O,__namedExportsOrder:()=>E,default:()=>x});var i=e("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),t=e("./node_modules/next/dist/compiled/react/index.js"),m=e("./node_modules/lodash-es/orderBy.js"),f=e("./components/Marquee/Modules/NationalResults.js"),a=t.createElement;function g(d,o){var u=Object.keys(d);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(d);o&&(p=p.filter(function(_){return Object.getOwnPropertyDescriptor(d,_).enumerable})),u.push.apply(u,p)}return u}function s(d){for(var o=1;o<arguments.length;o++){var u=arguments[o]!=null?arguments[o]:{};o%2?g(Object(u),!0).forEach(function(p){(0,i.default)(d,p,u[p])}):Object.getOwnPropertyDescriptors?Object.defineProperties(d,Object.getOwnPropertyDescriptors(u)):g(Object(u)).forEach(function(p){Object.defineProperty(d,p,Object.getOwnPropertyDescriptor(u,p))})}return d}const D=[{name:"Vivek Ramaswamy",firstName:"Vivek",colorHex:"#E38B39",lastName:"Ramaswamy",allDelegatesAwarded:5,delegatesAwarded:5,isDroppedOut:!1,isIncumbent:!1,isWinner:!1,superDelegatesAwarded:0},{name:"Nikki Haley",colorHex:"#F69696",firstName:"Nikki",lastName:"Haley",allDelegatesAwarded:105,delegatesAwarded:105,isDroppedOut:!1,isIncumbent:!1,isWinner:!1,superDelegatesAwarded:0},{name:"Ron DeSantis",firstName:"Ron",lastName:"DeSantis",colorHex:"#8F1B1B",allDelegatesAwarded:1,delegatesAwarded:1,isDroppedOut:!1,isIncumbent:!1,isWinner:!1,superDelegatesAwarded:0},{name:"Donald Trump",firstName:"Donald",lastName:"Trump",colorHex:"#FF0000",allDelegatesAwarded:424,delegatesAwarded:424,isDroppedOut:!1,isIncumbent:!1,isWinner:!0,superDelegatesAwarded:0}],P=(0,m.default)(D,"allDelegatesAwarded","desc"),c={linkText:"All candidates",linkUrl:"https://en.wikipedia.org/wiki/Axe_throwing"},M={delegatesNeeded:1236,isZero:!1,party:"rep"},x={component:f.default,title:"Marquee/NationalResults"},l=d=>a(f.default,d);l.displayName="NationalResultsFourCandidates",l.args=s(s({},c),{},{race:s(s({},M),{},{candidates:P.slice(0,4)})});const j=d=>a(f.default,d);j.displayName="NationalResultsThreeCandidates",j.args=s(s({},c),{},{race:s(s({},M),{},{candidates:P.slice(0,3)})});const O=d=>a(f.default,d);O.displayName="NationalResultsTwoCandidates",O.args=s(s({},c),{},{race:s(s({},M),{},{candidates:P.slice(0,2)})});const E=["NationalResultsFourCandidates","NationalResultsThreeCandidates","NationalResultsTwoCandidates"]},"./components/Calendar/CalendarMonthEntries/CallOutText/CallOutText.js":(C,n,e)=>{"use strict";e.r(n),e.d(n,{default:()=>j});var i=e("./node_modules/styled-jsx/style.js"),t=e.n(i),m=e("./node_modules/next/dist/compiled/react/index.js"),f=e("./node_modules/classnames/index.js"),a=e.n(f),g=e("./node_modules/prop-types/index.js"),s=e.n(g),D=e("./components/Link.js"),P=e("./components/Calendar/calendarHelpers.js");const c=O=>typeof O!="string"||!O,M=(O,E)=>{let d=null,o=null;const{linkUrl:u=null,linkText:p=null,planYourVoteUrl:_=null,planYourVoteText:y=null}=O;return o=E?p:y,d=E?u:_,{text:o,link:d}};var x=m.createElement;const l=({event:O,date:E,currentTime:d,statesWhiteList:o,className:u,icidString:p})=>{const{linkUrl:_,linkText:y,type:R}=O,h=E&&d?(0,P.isDateBetween)(E,d):!1,A=!c(y)&&!c(_),{text:U,link:N}=M(O,A);return R==="state"&&A&&!o?.includes(_)||c(U)||c(N)?null:x("div",{"data-testid":"callout-text",className:"jsx-3116304872 "+(a()(u,"df items-center call-out  tl oswald fw3 f3 ")||"")},x(t(),{id:"3116304872"},[".call-out.jsx-3116304872{line-height:16px;}",".callout-arrow.jsx-3116304872{margin:0px 6px;}"]),x(D.default,{"data-icid":p,href:N,className:`callout-calendar items-center df mr1 link ${h?"red":"clear-blue"}`},U,x("svg",{width:"14",height:"13",viewBox:"0 0 14 13",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",className:`jsx-3116304872 callout-arrow ${h?"red":"clear-blue"}`},x("path",{d:"M7.875 9.63777L10.9625 6.77079L1.75 6.77079L1.75 6.22913L10.9625 6.22913L7.875 3.24996L8.28748 2.86694L11.9583 6.49996L8.28748 10.0208L7.875 9.63777Z",className:"jsx-3116304872"}))))};l.displayName="CallOutText";const j=l;l.propTypes={date:s().string,currentTime:s().string,event:s().object.isRequired,icidString:s().string.isRequired,statesWhiteList:s().array},l.defaultProps={date:void 0,currentTime:void 0,statesWhiteList:void 0}},"./components/Calendar/calendarHelpers.js":(C,n,e)=>{"use strict";e.r(n),e.d(n,{calendarMonths:()=>j,dateIsToday:()=>y,formatOfficeName:()=>L,getCurrentDate:()=>K,getDayOfMonth:()=>O,getMonthNumber:()=>E,getStatesByDate:()=>N,getUniqueElectionDates:()=>d,getUrlForPrimarySubPage:()=>o,getYear:()=>u,isDateBetween:()=>S,isElectionDate:()=>_,isFirstElectionDate:()=>p,monthStartingDay:()=>R,numberOfDaysInMonth:()=>h,numericToMonth:()=>U,numericToThreeLetterMonth:()=>A});var i=e("./node_modules/dayjs/plugin/isToday.js"),t=e.n(i),m=e("./node_modules/dayjs/plugin/timezone.js"),f=e.n(m),a=e("./node_modules/dayjs/plugin/utc.js"),g=e.n(a),s=e("./node_modules/dayjs/plugin/weekday.js"),D=e.n(s),P=e("./node_modules/dayjs/plugin/isBetween.js"),c=e.n(P),M=e("./node_modules/lodash.kebabcase/index.js"),x=e.n(M),l=e("./lib/dayjsCustom.js");l.dayJsCustom.extend(t()),l.dayJsCustom.extend(f()),l.dayJsCustom.extend(g()),l.dayJsCustom.extend(D()),l.dayJsCustom.extend(c());const j={january:1,february:2,march:3,april:4,may:5,june:6,july:7,august:8,september:9,october:10,november:11,december:12},O=r=>(0,l.dayJsCustom)(r).format("D"),E=r=>(0,l.dayJsCustom)(r).format("MM"),d=r=>{if(!Array.isArray(r))return[];const T=r.map(I=>(0,l.dayJsCustom)(I).format("D"));return T.sort((I,B)=>I-B),[...new Set(T)]},o=(r,T,I)=>{const B=`/politics/${I}-primary-elections/`,b=x()(r.toLowerCase()),F=x()(T.toLowerCase());return`${B}${F}-${b}-results`},u=r=>r?(0,l.dayJsCustom)(r).format("YYYY"):null,p=(r,T)=>r.toString()===T[0],_=(r,T)=>T.includes(r.toString()),y=({date:r,year:T,month:I,day:B})=>{const b=r||`${T}-${I}-${B}`;return(0,l.dayJsCustom)(b).isToday()},R=(r,T)=>(0,l.dayJsCustom)(`${r}-${T}-01`).weekday(),h=(r,T)=>(0,l.dayJsCustom)(`${r}-${T}-01`).daysInMonth(),A=r=>(0,l.dayJsCustom)(`2022-${r}-01`).format("MMM").replace(/\./g,"").toUpperCase(),U=r=>(0,l.dayJsCustom)(`2022-${r}-01`).format("MMMM").toUpperCase(),N=r=>{const T={};return r.forEach(I=>{const B=O(I.date);T[B]||(T[B]=[]),T[B].push(I)}),T},v=r=>(0,l.dayJsCustom)(r).tz("America/New_York").add(1,"day").startOf("day").add(12,"hour"),K=()=>(0,l.dayJsCustom)(),S=(r,T)=>{const I=(0,l.dayJsCustom)(T).tz("America/New_York")||K(),B=(0,l.dayJsCustom)(r).tz("America/New_York"),b=v(r);return I.isBetween(B,b)},W={"Lieutenant Governor":"Lt. Governor","Secretary of State":"Sec. of State"},L=r=>r?W[r]??r:null},"./components/Checkmark.js":(C,n,e)=>{"use strict";e.r(n),e.d(n,{default:()=>M});var i=e("./node_modules/styled-jsx/style.js"),t=e.n(i),m=e("./node_modules/classnames/index.js"),f=e.n(m),a=e("./node_modules/next/dist/compiled/react/index.js"),g=e("./node_modules/prop-types/index.js"),s=e.n(g),D=e("./node_modules/react-i18next/dist/es/index.js"),P=a.createElement;const c=({t:x,color:l,height:j,hasTransparentBackground:O,width:E,nonpartisanWinner:d,addMargin:o,shouldDisplay:u,hideOnMobile:p=!1,verticalAlign:_,className:y})=>{const h=O?"transparent":d?"#FFD60C":"#fff",A=f()({ml1:o,dib:u&&!p,"dib-m":u&&p});return P("span",{"data-test":"checkmark-wrapper",className:t().dynamic([["1491606757",[h,j||E,E,_,l]]])+" "+(y||"")},P(t(),{id:"1491606757",dynamic:[h,j||E,E,_,l]},[`.checkmark.__jsx-style-dynamic-selector{background-color:${h};height:${j||E};width:${E};vertical-align:${_};stroke:${l};}`]),P("svg",{"data-test":"checkmark","data-testid":"checkmark",viewBox:"0 0 14 14",strokeWidth:"2",role:"img","aria-label":x("Winner"),className:t().dynamic([["1491606757",[h,j||E,E,_,l]]])+` checkmark dn ${A}`},P("path",{fill:"none",d:"M12,3.5l-6.81,7L2,7.8",className:t().dynamic([["1491606757",[h,j||E,E,_,l]]])})))};c.displayName="Checkmark",c.propTypes={color:s().string,height:s().string,addMargin:s().bool,nonpartisanWinner:s().bool,width:s().string,shouldDisplay:s().bool,hideOnMobile:s().bool,verticalAlign:s().oneOf(["bottom","top","middle","unset","baseline"]),hasTransparentBackground:s().bool,className:s().string},c.defaultProps={color:"#2A2A2A",height:null,addMargin:!0,nonpartisanWinner:!1,width:"20px",shouldDisplay:!1,hideOnMobile:!1,verticalAlign:"bottom",hasTransparentBackground:!1,className:""};const M=(0,D.withTranslation)()(c)},"./components/Link.js":(C,n,e)=>{"use strict";e.r(n),e.d(n,{default:()=>d});var i=e("./node_modules/@babel/runtime/helpers/esm/extends.js"),t=e("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),m=e("./node_modules/next/dist/compiled/react/index.js"),f=e("./node_modules/prop-types/index.js"),a=e.n(f),g=e("./node_modules/classnames/index.js"),s=e.n(g),D=e("./helpers/isExternalUrl.js"),P=e("./components/providers/EmbedContext.js"),c=e("./components/providers/BrandContext.js");const x=o=>o?!/^https?:\/\/|^\/\/|^mailto:/i.test(o):!1;var l=e("./helpers/isTelemundo.js");const j=["linkText","children","accessibleOnly","href","className","data-icid"];var O=m.createElement;const E=o=>{let{linkText:u,children:p,accessibleOnly:_,href:y,className:R,"data-icid":h}=o,A=(0,t.default)(o,j);const{isEmbed:U,isPartner:N,isInSpanish:v,useLinkTarget:K}=(0,m.useContext)(P.default),S=(0,m.useContext)(c.default),W=s()({"show-on-tab":_},R),L=U||N&&v,r=N&&!v;(0,D.default)(y)&&Object.assign(A,{rel:"nofollow"}),K&&A?.target||(L&&Object.assign(A,{target:"_parent"}),r&&Object.assign(A,{target:"_blank"}));const T=(0,l.default)(S)&&x(y)?`https://www.nbcnews.com${y}`:y,I={[N?"data-cid":"data-icid"]:h};return O("a",(0,i.default)({},A,{href:T,className:W},I),u||p)};E.displayName="Link",E.propTypes={href:a().string,linkText:a().string,className:a().string,accessibleOnly:a().bool},E.defaultProps={href:null,linkText:null,className:null,accessibleOnly:!1};const d=E},"./components/Marquee/Modules/NationalResults.js":(C,n,e)=>{"use strict";e.r(n),e.d(n,{default:()=>_});var i=e("./node_modules/styled-jsx/style.js"),t=e.n(i),m=e("./node_modules/next/dist/compiled/react/index.js"),f=e("./node_modules/prop-types/index.js"),a=e.n(f),g=e("./node_modules/classnames/index.js"),s=e.n(g),D=e("./node_modules/next/amp.js"),P=e.n(D),c=e("./node_modules/react-i18next/dist/es/index.js"),M=e("./components/Marquee/shared/RaceDetails.js"),x=e("./components/modules/ResultsSummary/Bar.js"),l=e("./components/Checkmark.js"),j=e("./components/Calendar/CalendarMonthEntries/CallOutText/CallOutText.js"),O=e("./components/Marquee/constants.js"),E=e("./components/modules/ResultsSummary/CallStrip.js"),d=e("./components/Link.js"),o=m.createElement;const u=(y,R)=>`${Math.round(y/R*100)}%`,p=({race:y,linkText:R,linkUrl:h,icidString:A,t:U})=>{const N=(0,D.useAmp)(),{candidates:v,delegatesNeeded:K}=y,S=Math.max(K,...v.map(L=>L.delegatesAwarded)),W=v.find(L=>L.isWinner);return o(m.Fragment,null,o(t(),{id:"4164145069",dynamic:[v.length===2?"span 2":"auto"]},[".container.__jsx-style-dynamic-selector{gap:8px;}",".candidates-grid.__jsx-style-dynamic-selector{display:grid;grid-template-columns:repeat(2,minmax(90px,auto));grid-column-gap:8px;grid-row-gap:22px;margin-top:10px;}",".description-container.__jsx-style-dynamic-selector{gap:4px;}",".candidates-grid.__jsx-style-dynamic-selector .candidate{--bar-height:4px;}",".candidates-grid.__jsx-style-dynamic-selector .candidate [data-test='checkmark-wrapper']{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}",".candidates-grid.__jsx-style-dynamic-selector .candidate .checkmark{padding:0 1px;}",".candidates-grid.__jsx-style-dynamic-selector .candidate-name-dot{gap:3px;margin-bottom:4px;}",".candidates-grid.__jsx-style-dynamic-selector .candidate-dot{width:9px;height:9px;border-radius:50%;background:var(--bar-color,#c4ccd6);}",`.candidates-grid.__jsx-style-dynamic-selector .candidate:nth-child(1n){grid-column:${v.length===2?"span 2":"auto"};}`,".description-container.__jsx-style-dynamic-selector a[href]:not([href='']):hover .title,.national.__jsx-style-dynamic-selector .candidates:hover+.description-container.__jsx-style-dynamic-selector .title{color:#3061ff;-webkit-text-decoration:underline;text-decoration:underline;}",".description-container.__jsx-style-dynamic-selector .description,.container.__jsx-style-dynamic-selector .candidates{-webkit-text-decoration:none;text-decoration:none;color:#000;}",".candidates-grid.__jsx-style-dynamic-selector .bar.addMinWidth::after{min-width:1px;}","@media screen and (max-width:758px){.candidates-grid.__jsx-style-dynamic-selector{grid-auto-columns:minmax(110px,auto);}}","@media screen and (max-width:354px){.candidates-grid.__jsx-style-dynamic-selector{grid-template-columns:repeat(2,1fr);}}"]),o("div",{className:t().dynamic([["4164145069",[v.length===2?"span 2":"auto"]]])+" oswald df container h-100 national flex-row-reverse"},o(d.default,{className:"candidates",href:h},o("div",{className:t().dynamic([["4164145069",[v.length===2?"span 2":"auto"]]])+" candidates-grid flex-1"},v.map(L=>o("div",{key:L.lastName,style:{"--bar-color":L.colorHex},className:t().dynamic([["4164145069",[v.length===2?"span 2":"auto"]]])+" df items-start candidate flex-column"},o("div",{className:t().dynamic([["4164145069",[v.length===2?"span 2":"auto"]]])+" df items-center candidate-name-dot"},o("div",{className:t().dynamic([["4164145069",[v.length===2?"span 2":"auto"]]])+" candidate-dot"}),o("span",{className:t().dynamic([["4164145069",[v.length===2?"span 2":"auto"]]])+" f2"},L.lastName," ",L.delegatesAwarded),L.isWinner&&o(l.default,{shouldDisplay:!0,nonpartisanWinner:!0,width:"11px",height:"11px"})),o(x.default,{isAnimated:!0,animationDelayMs:250,animateInitialValue:!N,className:s()({addMinWidth:L.delegatesAwarded>=1},"w-100 mr1"),"aria-label":"Percent of delegates received",percentInFormatted:u(L.delegatesAwarded,S)}))))),o("div",{className:t().dynamic([["4164145069",[v.length===2?"span 2":"auto"]]])+" df flex-column justify-center pt2 description-container"},o(d.default,{className:"description df ",href:h},o(M.default,{callStatusCode:W?E.PRESIDENTIAL_CANDIDATE_CALL_STATUS:void 0,title:U("National Leaders"),subTitle:U("Republican Delegates"),type:O.RACE_TYPE.NATIONAL,callOutEvent:{linkText:R,linkUrl:h},neededTotal:K,icidString:A,winners:W?[W]:[]})),R&&h&&o(j.default,{event:{linkText:R,linkUrl:h},className:" underline clear-blue fw3 f3 h1",icidString:A}))))};p.propTypes={icidString:a().string,linkText:a().string,linkUrl:a().string,race:a().object.isRequired};const _=(0,c.withTranslation)()(p)},"./components/Marquee/constants.js":(C,n,e)=>{"use strict";e.r(n),e.d(n,{DESKTOP_PARTY_NAME:()=>t,DIRECTION:()=>m,RACE_TYPE:()=>i});const i={NATIONAL:"national",STATE:"state"},t={rep:"Republican",dem:"Democratic"},m={LEFT:"left",RIGHT:"right"}},"./components/Marquee/shared/RaceDetails.js":(C,n,e)=>{"use strict";e.r(n),e.d(n,{default:()=>x});var i=e("./node_modules/styled-jsx/style.js"),t=e.n(i),m=e("./node_modules/next/dist/compiled/react/index.js"),f=e("./node_modules/prop-types/index.js"),a=e.n(f),g=e("./node_modules/react-i18next/dist/es/index.js"),s=e("./components/modules/ResultsSummary/CallStrip.js"),D=e("./components/Marquee/constants.js"),P=e("./components/props/candidate.propsShape.js"),c=m.createElement;const M=({t:l,allowMultiWinners:j,callStatusCode:O,percentInFormatted:E,pollsCloseFormatted:d,pollsCloseUTC:o,winners:u,title:p,subTitle:_,type:y,neededTotal:R})=>c(m.Fragment,null,c(t(),{id:"2956504270"},[".race-details.jsx-2956504270{gap:3px;}",".race-details.jsx-2956504270 .status{font-size:11px;padding:2px 3px 1px;}",".race-details.jsx-2956504270 .status.has-delegates-text{padding:2.5px 3px;}",".race-details.jsx-2956504270 .status .checkmark{height:12px;width:12px;}",".title.jsx-2956504270{width:-webkit-max-content;width:-moz-max-content;width:max-content;}"]),c("div",{className:"jsx-2956504270 df flex-column race-details lh-subtitle"},c("div",{className:"jsx-2956504270 df"},c(s.default,{callStatusCode:O,allowMultiWinners:j,pollsCloseFormatted:d,pollsCloseUTC:o,winners:u,delegatesNeededToWin:R?.toLocaleString()})),c("span",{className:"jsx-2956504270 title ttu fw5 f4"},p),c("span",{className:"jsx-2956504270 subtitle ttu fw3 f2"},_),y===D.RACE_TYPE.STATE&&c("span",{className:"jsx-2956504270 percent f2 fw5"},E," ",l("in"))));M.propTypes={allowMultiWinners:a().bool,callStatusCode:a().string,percentInFormatted:a().string,pollsCloseFormatted:a().string,pollsCloseUTC:a().string,title:a().string.isRequired,subTitle:a().node.isRequired,type:a().oneOf(Object.values(D.RACE_TYPE)).isRequired,neededTotal:a().number,winners:a().arrayOf(P.default).isRequired},M.defaultProps={allowMultiWinners:!1,callStatusCode:"",percentInFormatted:void 0,pollsCloseFormatted:void 0,pollsCloseUTC:void 0,neededTotal:null};const x=(0,g.withTranslation)()(M)},"./components/modules/ResultsSummary/Bar.js":(C,n,e)=>{"use strict";e.r(n),e.d(n,{default:()=>c});var i=e("./node_modules/styled-jsx/style.js"),t=e.n(i),m=e("./node_modules/classnames/index.js"),f=e.n(m),a=e("./node_modules/next/dist/compiled/react/index.js"),g=e("./node_modules/prop-types/index.js"),s=e.n(g),D=e("./components/modules/ResultsSummary/constants.js"),P=a.createElement;function c({animationDelayMs:M,animateInitialValue:x,"aria-label":l,className:j,isAnimated:O,percentInFormatted:E}){const{0:d,1:o}=(0,a.useState)(x?"0%":E);(0,a.useEffect)(()=>{o(E)},[E]);const u=f()("bar relative overflow-hidden",j,{border:d!=="0%"&&d!=="100%",animate:O});return P(a.Fragment,null,P(t(),{id:"1635479720",dynamic:[D.ANIMATION_TIMEOUT_MS,M]},[".bar.__jsx-style-dynamic-selector{height:var(--bar-height,3px);background:var(--bar-bg,#dedede);}",".bar.__jsx-style-dynamic-selector::after{content:'';background:var(--bar-color,#ffd60c);z-index:1;position:absolute;top:0;bottom:0;left:0;width:var(--percent-in);}",`.animate.__jsx-style-dynamic-selector::after{-webkit-transition:width ${D.ANIMATION_TIMEOUT_MS}ms ease-in-out;transition:width ${D.ANIMATION_TIMEOUT_MS}ms ease-in-out;-webkit-transition-delay:${M}ms;transition-delay:${M}ms;}`,".border.__jsx-style-dynamic-selector::after{border-right:1px solid #fff;}"]),P("div",{role:"meter","aria-label":l,"aria-valuemin":0,"aria-valuemax":100,"aria-valuenow":d?.slice(0,-1)??0,style:{"--percent-in":d},className:t().dynamic([["1635479720",[D.ANIMATION_TIMEOUT_MS,M]]])+" "+(u||"")}))}c.propTypes={animationDelayMs:s().number,animateInitialValue:s().bool,"aria-label":s().string,className:s().string,isAnimated:s().bool,percentInFormatted:s().string.isRequired},c.defaultProps={animationDelayMs:0,animateInitialValue:!1,"aria-label":null,className:null,isAnimated:!0}},"./components/modules/ResultsSummary/CallStrip.js":(C,n,e)=>{"use strict";e.r(n),e.d(n,{PRESIDENTIAL_CANDIDATE_CALL_STATUS:()=>O,default:()=>o});var i=e("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),t=e("./node_modules/next/dist/compiled/react/index.js"),m=e("./node_modules/classnames/index.js"),f=e.n(m),a=e("./node_modules/next/amp.js"),g=e.n(a),s=e("./node_modules/react-i18next/dist/es/index.js"),D=e("./helpers/getCallStatus.js"),P=e("./components/Checkmark.js"),c=e("./components/modules/ResultsSummary/utils.js"),M=e("./components/providers/PageContext.js"),x=t.createElement;function l(u,p){var _=Object.keys(u);if(Object.getOwnPropertySymbols){var y=Object.getOwnPropertySymbols(u);p&&(y=y.filter(function(R){return Object.getOwnPropertyDescriptor(u,R).enumerable})),_.push.apply(_,y)}return _}function j(u){for(var p=1;p<arguments.length;p++){var _=arguments[p]!=null?arguments[p]:{};p%2?l(Object(_),!0).forEach(function(y){(0,i.default)(u,y,_[y])}):Object.getOwnPropertyDescriptors?Object.defineProperties(u,Object.getOwnPropertyDescriptors(_)):l(Object(_)).forEach(function(y){Object.defineProperty(u,y,Object.getOwnPropertyDescriptor(_,y))})}return u}const O="presidential-candidate-nominated",E=j(j({},D.callStatusMapping),{},{[O]:"Presumptive Nominee",O:"Advancing to Runoff",M:"Advancing to General Election"}),d=({t:u,allowMultiWinners:p,callStatusCode:_,pollsCloseFormatted:y,pollsCloseUTC:R,winners:h,delegatesNeededToWin:A})=>{const{hidePollsClose:U}=(0,t.useContext)(M.default),N=(0,a.useAmp)(),v=(0,c.goesToRunoff)({allowMultiWinners:p,callStatusCode:_}),K=(0,c.useCountdown)({pollsCloseUTC:R});let S=E[_];const W=!v&&h.length>0,L=!_&&y;if(L&&U||(L?S=N?y:K??y:!W&&A&&(S=`${A} ${u("Needed To Win")}`),!S))return null;const r=f()("status ph2 pv1 f3 df items-center lh-none ttu",{"bg-midnight-blue white":!_&&y,"bg-FFD60C":_,"has-delegates-text bg-FFD60C":!W&&A});return x("div",{className:r},u(S),x(P.default,{nonpartisanWinner:!0,shouldDisplay:W,width:"16px",height:"16px"}))};d.displayName="CallStrip",d.defaultProps={delegatesNeededToWin:null};const o=(0,s.withTranslation)()(d)},"./components/modules/ResultsSummary/constants.js":(C,n,e)=>{"use strict";e.r(n),e.d(n,{ANIMATION_TIMEOUT_MS:()=>i,LAYOUT:()=>t,POLLS_TEXT:()=>f,RACE_CALL_HEADSHOT_DIMENSIONS:()=>m});const i=300,t={PRESIDENTIAL:"presidential",DEFAULT:"default"},m={backgroundHeight:45,height:53,width:45},f={ENTRANCE_POLLS:"Entrance Polls",EXIT_POLLS:"Exit Polls"}},"./components/props/candidate.propsShape.js":(C,n,e)=>{"use strict";e.r(n),e.d(n,{default:()=>a,horseRaceCandidate:()=>m});var i=e("./node_modules/prop-types/index.js"),t=e.n(i);const m=t().shape({color:t().string.isRequired,displayName:t().string.isRequired,displayParty:t().string.isRequired,percent:t().number.isRequired}),a=t().shape({callStatus:t().string,code:t().number,bgColor:t().string.isRequired,percentVote:t().number,formattedPercentVote:t().string.isRequired,headshotUrl:t().string,isIncumbent:t().bool.isRequired,isWinner:t().bool.isRequired,name:t().string.isRequired,party:t().string,votes:t().number.isRequired})},"./components/providers/BrandContext.js":(C,n,e)=>{"use strict";e.r(n),e.d(n,{default:()=>t});var i=e("./node_modules/next/dist/compiled/react/index.js");const t=i.createContext("news")},"./components/providers/EmbedContext.js":(C,n,e)=>{"use strict";e.r(n),e.d(n,{default:()=>t});var i=e("./node_modules/next/dist/compiled/react/index.js");const t=i.createContext({isEmbed:!1,isPartner:!1,isInSpanish:!1,useLinkTarget:!1})},"./components/providers/PageContext.js":(C,n,e)=>{"use strict";e.r(n),e.d(n,{default:()=>m});var i=e("./node_modules/next/dist/compiled/react/index.js");const m=(0,i.createContext)({url:"",datePublished:"",electionSeason:"",electionType:"",hidePollsClose:!1})},"./helpers/getCallStatus.js":(C,n,e)=>{"use strict";e.r(n),e.d(n,{callStatusMapping:()=>i,default:()=>f,getPresidentWinningCallStatus:()=>m});const i={A:"Apparent winner",C:"Too close to call",E:"Too early to call",O:"Runoff",M:"Runoff",P:"Projected winner",W:"Winner",V:"Advance"},t=a=>typeof a!="string"?"":i[a]||"",m=(a,g)=>{switch(a){case"A":return"Apparent President-Elect";case"P":case"W":return g?"President Re-Elected":"President-Elect";default:return null}},f=t},"./helpers/isExternalUrl.js":(C,n,e)=>{"use strict";e.r(n),e.d(n,{default:()=>t});const t=m=>m?!/(^[#/])|((nbcnews|today|msnbc)\.com)/.test(m):!1},"./helpers/isTelemundo.js":(C,n,e)=>{"use strict";e.r(n),e.d(n,{default:()=>m});var i=e("./helpers/constants.js");const m=f=>f===i.BRANDS.TELEMUNDO},"./node_modules/classnames/index.js":(C,n)=>{var e,i;/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(){"use strict";var t={}.hasOwnProperty,m="[native code]";function f(){for(var a=[],g=0;g<arguments.length;g++){var s=arguments[g];if(s){var D=typeof s;if(D==="string"||D==="number")a.push(s);else if(Array.isArray(s)){if(s.length){var P=f.apply(null,s);P&&a.push(P)}}else if(D==="object"){if(s.toString!==Object.prototype.toString&&!s.toString.toString().includes("[native code]")){a.push(s.toString());continue}for(var c in s)t.call(s,c)&&s[c]&&a.push(c)}}}return a.join(" ")}C.exports?(f.default=f,C.exports=f):(e=[],i=function(){return f}.apply(n,e),i!==void 0&&(C.exports=i))})()}}]);
