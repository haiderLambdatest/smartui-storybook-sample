"use strict";(globalThis.webpackChunkfirecracker=globalThis.webpackChunkfirecracker||[]).push([[6022],{"./components/Calendar/CalendarHeader/index.js":(I,g,t)=>{t.r(g),t.d(g,{default:()=>C});var E=t("./node_modules/styled-jsx/style.js"),p=t.n(E),T=t("./node_modules/next/dist/compiled/react/index.js"),N=t("./node_modules/prop-types/index.js"),b=t.n(N),x=t("./node_modules/react-i18next/dist/es/index.js"),m=t("./components/Calendar/calendarHelpers.js"),P=T.createElement;function D({month:A,t:S}){return A&&P("div",{className:"jsx-2624485293 calendar-header oswald"},P(p(),{id:"2624485293"},[".calendar-header.jsx-2624485293{width:112px;}",".calendar-header__month.jsx-2624485293{font-weight:200;text-align:left;margin-top:0.25rem;margin-bottom:0.25rem;}"]),P("div",{className:"jsx-2624485293 calendar-header__month f7 f1 lh-none "},S(`fullMonth.${(0,m.numericToMonth)(A)}`)))}D.propTypes={month:b().string},D.defaultProps={month:null};const C=(0,x.withTranslation)()(D)},"./components/Calendar/CalendarMonthVisual/index.js":(I,g,t)=>{t.r(g),t.d(g,{default:()=>c});var E=t("./node_modules/styled-jsx/style.js"),p=t.n(E),T=t("./node_modules/next/dist/compiled/react/index.js"),N=t("./node_modules/prop-types/index.js"),b=t.n(N),x=t("./node_modules/react-i18next/dist/es/index.js"),m=t("./node_modules/classnames/index.js"),P=t.n(m),D=T.createElement;const C=({direction:y,handleOnClick:h})=>D("svg",{className:`pointer direction-arrow-${y}`,width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",onClick:h},D("rect",{x:"1.33398",y:"1.33325",width:"13.3333",height:"0.666667",fill:"black"}),D("path",{d:"M11.8626 7.66675L8.33403 4.13815L8.33403 14.6667L7.66737 14.6667L7.66737 4.13815L4.0007 7.66675L3.5293 7.19534L8.0007 3.00008L12.334 7.19534L11.8626 7.66675Z",fill:"black"}));C.displayName="DirectionArrow",C.propTypes={direction:b().string,handleOnClick:b().func},C.defaultProps={direction:"top",handleOnClick:()=>{}};const A=C;var S=t("./components/providers/StickyContext.js"),d=t("./components/Calendar/constants.js"),n=t("./components/providers/EmbedContext.js"),a=t("./components/Calendar/calendarHelpers.js"),e=t("./components/Calendar/CalendarHeader/index.js"),i=T.createElement;function o(y){const{numericDate:h,month:M,monthStartingWeekday:_,year:v,shadeClass:Y}=y,R=h===5&&+M==3&&v==="2024",V=h===1,B=P()({"first-day-of-month":V,"super-tuesday":R,[Y]:!0});return h&&Number.isInteger(_)&&i("div",{"data-testid":"calendar-month","data-number":h,className:"jsx-3058166655 "+p().dynamic([["2631932484",[_+1]]])+` calendar-day tc h1 w1 ${B}`},i(p(),{id:"2631932484",dynamic:[_+1]},[`.first-day-of-month.__jsx-style-dynamic-selector{grid-column-start:${_+1};}`]),i(p(),{id:"3058166655"},[".calendar-day.jsx-3058166655{line-height:16px;font-family:'Oswald',sans-serif;color:#555555;margin-top:6px;}",".election-date.jsx-3058166655{color:#ffffff;background:#555555;font-weight:bolder;}",".past-or-future-date.jsx-3058166655{color:#555555;background:#ebebeb;font-weight:bolder;}",".dark-shade.jsx-3058166655{color:#ffffff;background:#555555;font-weight:bolder;}",".light-shade.jsx-3058166655{color:#555555;background:#ebebeb;font-weight:bolder;}",".super-tuesday.jsx-3058166655{height:21px;margin-top:1px;border-top:solid #ffd60c;border-width:5px;}"]),h)}o.propTypes={month:b().string,monthStartingWeekday:b().number.isRequired,numericDate:b().number.isRequired,year:b().string},o.defaultProps={month:null,year:null};const r=o;var l=T.createElement;const f=({monthData:y,section:h,currentTime:M,t:_})=>{const{topM:v}=(0,S.useSticky)(),Y=(0,T.useRef)(null),{isEmbed:R}=(0,T.useContext)(n.default),{0:V,1:B}=(0,T.useState)({inView:!1,entry:null}),{inView:$,entry:J}=V;if((0,T.useEffect)(()=>{const k=new IntersectionObserver(U=>{const[L]=U;L.intersectionRatio<1?B({inView:!0,entry:L}):B({inView:!1,entry:null})},{threshold:1,rootMargin:"-150px 0px 0px 0px"});return k.observe(Y.current),()=>{k.disconnect()}},[]),!y)return null;const{dates:H}=y,W=(0,a.getCurrentEasternTime)(M),K=Object.keys(H),s=(0,a.getMonthNumber)(K[0]),u=(0,a.getYear)(K[0]),j=(0,a.monthStartingDay)(u,s),O=y.days,w=s>1,F=k=>{const U=O.includes(k.toString()),L=`${u}-${s}-${k.toString().padStart(2,"0")}`,G=W===L,q=L<W,tt=Object.keys(y.dates)[0]===L;switch(h){case d.CALENDAR_SECTION.UPCOMING:if(U&&q)return"light-shade";if(U)return"dark-shade";break;case d.CALENDAR_SECTION.NEXT:if(tt)return"dark-shade";if(G||U)return"light-shade";break;default:if(G)return"dark-shade";if(U)return"light-shade"}return""},X=Array((0,a.numberOfDaysInMonth)(u,s)).fill(0).map((k,U)=>{const L=U+1;return l(r,{numericDate:L,month:s,monthStartingWeekday:j,key:`${s}/${L}/${u}`,year:u,shadeClass:F(L)})}),Z=()=>{window.scrollTo({top:0,behavior:"smooth"})},z=$&&J.intersectionRatio<1?"enter":"leave",Q=()=>{document.querySelector("#past")?.scrollIntoView({behavior:"smooth"})};return l(T.Fragment,null,l(p(),{id:"1672090293",dynamic:[v]},[`.calendar-month.__jsx-style-dynamic-selector{top:${v}px;position:-webkit-sticky;position:sticky;}`,".calendar-month__grid.__jsx-style-dynamic-selector{display:grid;grid-template-columns:repeat(7,16px);width:112px;}",".back-to-top.__jsx-style-dynamic-selector{background:none;gap:4px;}",".enter.__jsx-style-dynamic-selector{-webkit-animation:fadeIn-__jsx-style-dynamic-selector 500ms;animation:fadeIn-__jsx-style-dynamic-selector 500ms;}",".leave.__jsx-style-dynamic-selector{-webkit-animation:fadeOut-__jsx-style-dynamic-selector 500ms;animation:fadeOut-__jsx-style-dynamic-selector 500ms;}","@-webkit-keyframes fadeIn-__jsx-style-dynamic-selector{from{opacity:0;}to{opacity:1;}}","@keyframes fadeIn-__jsx-style-dynamic-selector{from{opacity:0;}to{opacity:1;}}","@-webkit-keyframes fadeOut-__jsx-style-dynamic-selector{from{opacity:1;}to{opacity:0;}}","@keyframes fadeOut-__jsx-style-dynamic-selector{from{opacity:1;}to{opacity:0;}}",".calendar-month__grid.__jsx-style-dynamic-selector .direction-arrow-left{position:absolute;top:34px;-webkit-transform:rotate(270deg);-ms-transform:rotate(270deg);transform:rotate(270deg);}"]),l("div",{ref:Y,"data-testid":"calendar-month",className:p().dynamic([["1672090293",[v]]])+` calendar-month ${R?"":"sticky"}`},l(e.default,{month:s}),l("div",{className:p().dynamic([["1672090293",[v]]])+" calendar-month__grid f1 fw3"},w&&j!==0&&l(A,{direction:"left",handleOnClick:Q}),X),!R&&V&&J&&J.intersectionRatio<1&&l("button",{type:"button",onClick:Z,className:p().dynamic([["1672090293",[v]]])+" "+(P()("back-to-top oswald fw3 b-none f3 pa0 ma0 mt5 black df pointer",z)||"")},l("span",{className:p().dynamic([["1672090293",[v]]])},_("Back to top")),l(A,{direction:"top"}))))};f.propTypes={monthData:b().object,currentTime:b().string},f.defaultProps={monthData:null,currentTime:new Date().toISOString()};const c=(0,x.withTranslation)()(f)},"./components/Calendar/calendarHelpers.js":(I,g,t)=>{t.r(g),t.d(g,{calendarMonths:()=>a,dateIsToday:()=>y,formatElectionDateMonthDay:()=>K,formatOfficeName:()=>W,getCurrentDate:()=>V,getCurrentEasternTime:()=>B,getDayOfMonth:()=>e,getMonthNumber:()=>i,getStatesByDate:()=>Y,getUniqueElectionDates:()=>o,getUrlForPrimarySubPage:()=>r,getYear:()=>l,isDateBetween:()=>$,isElectionDate:()=>c,isFirstElectionDate:()=>f,isTodayAfterDate:()=>J,monthStartingDay:()=>h,numberOfDaysInMonth:()=>M,numericToMonth:()=>v,numericToThreeLetterMonth:()=>_});var E=t("./node_modules/dayjs/plugin/isToday.js"),p=t.n(E),T=t("./node_modules/dayjs/plugin/timezone.js"),N=t.n(T),b=t("./node_modules/dayjs/plugin/utc.js"),x=t.n(b),m=t("./node_modules/dayjs/plugin/weekday.js"),P=t.n(m),D=t("./node_modules/dayjs/plugin/isBetween.js"),C=t.n(D),A=t("./node_modules/lodash.kebabcase/index.js"),S=t.n(A),d=t("./lib/dayjsCustom.js"),n=t("./components/modules/PageHeader/utils.js");d.dayJsCustom.extend(p()),d.dayJsCustom.extend(N()),d.dayJsCustom.extend(x()),d.dayJsCustom.extend(P()),d.dayJsCustom.extend(C());const a={january:1,february:2,march:3,april:4,may:5,june:6,july:7,august:8,september:9,october:10,november:11,december:12},e=s=>(0,d.dayJsCustom)(s).format("D"),i=s=>(0,d.dayJsCustom)(s).format("MM"),o=s=>{if(!Array.isArray(s))return[];const u=s.map(j=>(0,d.dayJsCustom)(j).format("D"));return u.sort((j,O)=>j-O),[...new Set(u)]},r=(s,u,j)=>{const O=`/politics/${j}-primary-elections/`,w=S()(s.toLowerCase()),F=S()(u.toLowerCase());return`${O}${F}-${w}-results`},l=s=>s?(0,d.dayJsCustom)(s).format("YYYY"):null,f=(s,u)=>s.toString()===u[0],c=(s,u)=>u.includes(s.toString()),y=({date:s,year:u,month:j,day:O})=>{const w=s||`${u}-${j}-${O}`;return(0,d.dayJsCustom)(w).isToday()},h=(s,u)=>(0,d.dayJsCustom)(`${s}-${u}-01`).weekday(),M=(s,u)=>(0,d.dayJsCustom)(`${s}-${u}-01`).daysInMonth(),_=s=>(0,d.dayJsCustom)(`2022-${s}-01`).format("MMM").replace(/\./g,"").toUpperCase(),v=s=>(0,d.dayJsCustom)(`2022-${s}-01`).format("MMMM").toUpperCase(),Y=s=>{const u={};return s.forEach(j=>{const O=e(j.date);u[O]||(u[O]=[]),u[O].push(j)}),u},R=s=>(0,d.dayJsCustom)(s).tz("America/New_York").add(1,"day").startOf("day").add(12,"hour"),V=()=>(0,d.dayJsCustom)(),B=s=>d.dayJsCustom.utc(s).tz("America/New_York").format("YYYY-MM-DD"),$=(s,u)=>{const j=(0,d.dayJsCustom)(u).tz("America/New_York")||V(),O=(0,d.dayJsCustom)(s).tz("America/New_York"),w=R(s);return j.isBetween(O,w)},J=(s,u)=>{const j=(0,d.dayJsCustom)(u).tz("America/New_York")||V(),O=(0,d.dayJsCustom)(s).tz("America/New_York").add(1,"day").startOf("day");return j.isAfter(O)},H={"Lieutenant Governor":"Lt. Governor","Secretary of State":"Sec. of State"},W=s=>s?H[s]??s:null;function K(s){return s?(0,n.dateToLocal)(s).format("MMMM D"):null}},"./components/Calendar/constants.js":(I,g,t)=>{t.r(g),t.d(g,{CALENDAR_SECTION:()=>E,JUMP_LINK_TEXT:()=>p});const E={UPCOMING:"upcoming",TODAY:"today",PAST:"past",NEXT:"next",LAST:"last"},p={[E.PAST]:"Skip to Upcoming Dates",[E.UPCOMING]:"Skip to Past Dates",[E.TODAY]:"Skip to Past Dates"}},"./components/modules/PageHeader/utils.js":(I,g,t)=>{t.r(g),t.d(g,{afterThreeMonths:()=>d,beforeNextDayNoon:()=>D,dateToLocal:()=>P,formatElectionDate:()=>n,isLive:()=>A,onOrAfterElectionDay:()=>C,showLive:()=>S});var E=t("./node_modules/dayjs/plugin/timezone.js"),p=t.n(E),T=t("./node_modules/dayjs/plugin/utc.js"),N=t.n(T),b=t("./node_modules/dayjs/plugin/isSameOrAfter.js"),x=t.n(b),m=t("./lib/dayjsCustom.js");m.dayJsCustom.extend(p()),m.dayJsCustom.extend(N()),m.dayJsCustom.extend(x());const P=a=>m.dayJsCustom.tz(`${a} 00:00`,"America/New_York"),D=({currentTime:a,electionDate:e})=>{const o=P(e).add(1,"day").add(12,"hour"),r=a??(0,m.dayJsCustom)().toISOString();return m.dayJsCustom.utc(r).isBefore(o)},C=({currentTime:a,electionDate:e})=>{const i=P(e),o=a??(0,m.dayJsCustom)().toISOString();return m.dayJsCustom.utc(o).isSameOrAfter(i)},A=({electionDate:a,currentTime:e})=>a?C({currentTime:e,electionDate:a})&&D({currentTime:e,electionDate:a}):null;function S({currentTime:a,electionDate:e,lastModified:i,pollsCloseFormatted:o}){if(!e||!i)return!1;const r=P(e),l=a??(0,m.dayJsCustom)().toISOString(),f=m.dayJsCustom.utc(l),c=m.dayJsCustom.utc(i),y=f.subtract(24,"hour"),h=r.add(30,"day"),M=c.isSameOrAfter(y),_=f.isBefore(h),v=!o&&A({electionDate:e,currentTime:a,pollsCloseFormatted:o}),Y=C({currentTime:a,electionDate:e})&&!o&&M&&_;return v||Y}function d({currentTime:a,electionDate:e}){if(!e)return!1;const i=P(e),o=a??(0,m.dayJsCustom)().toISOString(),r=m.dayJsCustom.utc(o),l=i.add(3,"month");return r.isSameOrAfter(l)}function n(a){return a?P(a).format("MMMM D, YYYY"):null}},"./lib/dayjsCustom.js":(I,g,t)=>{t.r(g),t.d(g,{dayJsCustom:()=>P});var E=t("./node_modules/dayjs/dayjs.min.js"),p=t.n(E),T=t("./node_modules/dayjs/plugin/updateLocale.js"),N=t.n(T),b=t("./node_modules/dayjs/locale/es.js"),x=t.n(b);p().extend(N());const m={en:{monthsShort:["Jan.","Feb.","March","April","May","June","July","Aug.","Sept.","Oct.","Nov.","Dec."]},es:{monthsShort:["En.","Feb.","Mar.","Abr.","May.","Jun.","Jul.","Ag.","Sept.","Oct.","Nov.","Dic."],relativeTime:{future:"en %s",past:"hace %s",s:"pocos segundos",m:"un minuto",mm:"%d minutos",h:"una hora",hh:"%d horas",d:"un d\xEDa",dd:"%d dias",M:"un mes",MM:"%d meses",y:"un a\xF1o",yy:"%d a\xF1os"}}};Object.keys(m).forEach(D=>{p().updateLocale(D,m[D])});const P=p()},"./server/v2/modules/Grid/Grid.js":(I,g,t)=>{t.r(g),t.d(g,{default:()=>S});var E=t("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),p=t("./node_modules/dayjs/plugin/utc.js"),T=t.n(p),N=t("./node_modules/dayjs/plugin/timezone.js"),b=t.n(N),x=t("./lib/dayjsCustom.js");x.dayJsCustom.extend(T()),x.dayJsCustom.extend(b());const m=(d,n)=>x.dayJsCustom.utc(n).tz("America/New_York").isBefore(`${d}T12:00:00Z`,"day"),P=(d,n)=>x.dayJsCustom.utc(n).tz("America/New_York").isAfter(`${d}T12:00:00Z`,"day"),D=(d,n)=>x.dayJsCustom.utc(`${d}T08:00:00Z`).tz("America/New_York").isSame(x.dayJsCustom.utc(`${n}`),"day");var C=t("./components/Calendar/constants.js");const A={xl:{denseLimit:4,eventsLimit:3},lg:{denseLimit:2,eventsLimit:1},md:{denseLimit:3,eventsLimit:2},sm:{denseLimit:1,eventsLimit:1}};class S{constructor(n,a){(0,E.default)(this,"assignBreakPointAttribute",(e,i,o)=>(e.breakpoints||(e.breakpoints={}),e.breakpoints[o]||(e.breakpoints[o]={}),e.breakpoints[o][i]=!0,!0)),(0,E.default)(this,"isNextDateMulti",e=>e&&e.states&&e.states.length>1),(0,E.default)(this,"createDateObject",(e,i,o)=>{let r=e.date;return i[r]&&(r=`${r}-day${o} `),i[r]={},i[r].events=e?.states||[e],i[r].type=e.type,i[r].title=e.title||"",i[r].description=e.description||"",i[r].electionDate=e.date||"",i}),this.data=n,this.currentTime=a,this.buildSections()}getSectionsToShow(n){return n?Object.keys(this.sections.upcomingElections).length===0?[C.CALENDAR_SECTION.LAST]:[C.CALENDAR_SECTION.TODAY,C.CALENDAR_SECTION.NEXT]:[C.CALENDAR_SECTION.TODAY,C.CALENDAR_SECTION.UPCOMING,C.CALENDAR_SECTION.PAST]}processMultipleEventsInADate(n,a,e,i,o){const r=a.states.length;a.states.forEach((l,f)=>{const c=f+1;this.assignBreakPointAttribute(l,"isMulti",o);const y=c===r,h=c%n===0,M=c%n===1,_=r-c<n&&e,v=r-c<n&&!e||r<=n&&!e,Y=l.breakpoints[o].isFirst&&l.breakpoints[o].isLast&&!e;(y||h)&&(this.assignBreakPointAttribute(l,"isLast",o),this.assignBreakPointAttribute(l,"noBorderRight",o)),M&&(this.assignBreakPointAttribute(l,"isFirst",o),v?this.assignBreakPointAttribute(l,"noBorderBottom",o):_?this.assignBreakPointAttribute(l,"solidBottom",o):this.assignBreakPointAttribute(l,"dashedBottomBorder",o)),Y&&this.assignBreakPointAttribute(l,"noBorderBottom",o),o==="sm"&&y&&(i&&i!==a.date?this.assignBreakPointAttribute(l,"solidBottom",o):this.assignBreakPointAttribute(l,"noBorderBottom",o))})}buildUpcomingSection(n){return m(n.date,this.currentTime)?n.states:null}buildTodaySection(n){return D(n.date,this.currentTime)?n.states:null}buildPastSection(n){return P(n.date,this.currentTime)?n.states:null}sectionOutDates(n,a){let e=null;return a==="upcoming"?e=m:a==="past"?e=P:a==="today"&&(e=D),{name:n.name,dates:n.dates.filter(i=>e(i.date,this.currentTime))}}buildMonthSectionWithBreakPoints(n){let a=null,e={};return Object.keys(A).forEach((i,o)=>{let r=[];const l=n.dates.reduce((f,c,y)=>{const h=c?.states?.length||1,M=n.dates[y+1]??null,_=(M&&M.date)??null;a||(a=c.states?c.states[0]:c);const v=A[i],{eventsLimit:Y,denseLimit:R}=v;if(h>1)this.processMultipleEventsInADate(R,c,M,_,i),a=null,r=[];else{const V=c.states?c.states:[c];r.push(...V);const B=r[r.length-1];r.length<=Y&&(this.assignBreakPointAttribute(a,"isFirst",i),(this.isNextDateMulti(M)||!M||r.length===Y)&&(this.assignBreakPointAttribute(B,"isLast",i),this.assignBreakPointAttribute(B,"noBorderRight",i),M||this.assignBreakPointAttribute(a,"noBorderBottom",i))),r.length===Y&&(a=null,r=[])}return o===Object.keys(A).length-1&&h>0&&this.createDateObject(c,f,y),f},{});e=Object.keys(l).length===0?null:l}),e}buildMonth(n){const a=this.sectionOutDates(n,"upcoming"),e=this.sectionOutDates(n,"past"),i=this.sectionOutDates(n,"today"),o=new Set;return n.dates.forEach(({date:r})=>{if(m(r,this.currentTime)||P(r,this.currentTime)||D(r,this.currentTime)){const l=(+r.slice(8,10)).toString();o.add(l)}}),{upcomingElections:this.buildMonthSectionWithBreakPoints(a),pastElections:this.buildMonthSectionWithBreakPoints(e),todayElections:this.buildMonthSectionWithBreakPoints(i),monthDaysWithEvents:Array.from(o)}}buildSections(){const n={upcomingElections:{},pastElections:{},todayElections:{},nextElections:{},lastElections:{}};let a=1/0,e=-1/0,i=null,o=null;this.data.forEach(r=>{const l=this.buildMonth(r);Object.keys(n).forEach(f=>{l[f]&&(n[f][r.name]={dates:l[f],days:l.monthDaysWithEvents})}),l.upcomingElections&&Object.keys(l.upcomingElections).forEach(f=>{const c=new Date(f);c<a&&(a=c,i=r.name),c>e&&(e=c,o=r.name)})}),this.generateSingleDateSection(n,i,"nextElections"),this.generateSingleDateSection(n,o,"lastElections"),this.sections=n}generateSingleDateSection(n,a,e){if(a){const i=n.upcomingElections[a],o=Object.keys(i.dates),r=i.days,l=e==="nextElections"?o.sort((y,h)=>new Date(y)-new Date(h))[0]:o.sort((y,h)=>new Date(h)-new Date(y))[0],f={name:a,dates:this.data.find(y=>y.name===a).dates.filter(y=>y.date===l)},c=this.buildMonthSectionWithBreakPoints(f);n[e][a]={dates:c,days:r}}}}},"./server/v2/modules/Grid/mockInput.json":I=>{I.exports=JSON.parse(`[{"name":"january","dates":[{"type":"regular","date":"2024-01-15","states":[{"type":"state","name":"Iowa","linkText":"Iowa Results","linkUrl":"/politics/2024-primary-elections/iowa-president-results","planYourVoteText":"Plan Your IA Vote","planYourVoteUrl":"https://www.nbcnews.com/specials/plan-your-vote-2024-elections/index.html?language=english&state=IA","showDemDelegates":true,"showRepDelegates":true,"labels":[{"title":"Republican caucus"}]}]},{"type":"regular","date":"2024-01-23","states":[{"type":"state","name":"New Hampshire","labels":[{"title":"Presidential Primary"}],"planYourVoteText":"Plan your NH vote","planYourVoteUrl":"https://nbcnews.com","showDemDelegates":true,"showRepDelegates":true}]}]},{"name":"february","dates":[{"type":"regular","date":"2024-02-06","states":[{"type":"state","name":"Nevada","linkUrl":"/politics/2024-primary-elections/nevada-president-results","planYourVoteUrl":"https://www.nbcnews.com/specials/plan-your-vote-2024-elections/index.html?language=english&state=NV","labels":[{"title":"Presidential Primary"}],"planYourVoteText":"Plan your NV vote"}]},{"type":"regular","date":"2024-02-23","states":[{"type":"state","name":"South Carolina","labels":[{"title":"Democratic Presidential Primary"}],"planYourVoteText":"Plan your SC vote","planYourVoteUrl":"https://nbcnews.com"}]},{"type":"regular","date":"2024-02-24","states":[{"type":"state","name":"South Carolina","labels":[{"title":"Republican Presidential Primary"}],"planYourVoteText":"Plan your vote"}]},{"type":"regular","date":"2024-02-27","states":[{"type":"state","name":"Michigan","labels":[{"title":"Presidential Primary"}],"planYourVoteText":"Plan your MI vote"}]}]},{"name":"march","dates":[{"type":"regular","date":"2024-03-02","states":[{"type":"state","name":"Michigan","labels":[{"title":"Republican Presidential Caucus"}],"planYourVoteText":"Plan your vote"},{"type":"state","name":"Idaho","labels":[{"title":"Republican Presidential Caucus"}],"planYourVoteText":"Plan your ID vote"}]},{"type":"special","date":"2024-03-05","title":"Super Tuesday","description":"1,055/4,514 delegates at stake","states":[{"type":"state","name":"Alabama","linkText":"Alabama results","planYourVoteText":"Plan Your AL Vote","labels":[{"title":"Presidential Primary"},{"title":"House"}]},{"type":"state","name":"California","labels":[{"title":"Presidential Primary"},{"title":"Senate"},{"title":"House"}],"planYourVoteText":"Plan your CA vote"},{"type":"state","name":"Colorado","labels":[{"title":"Presidential Primary"}],"planYourVoteText":"Plan your CO vote"},{"type":"state","name":"Maine","labels":[{"title":"Presidential Primary"}],"planYourVoteText":"Plan your ME vote"},{"type":"state","name":"Massachusetts","labels":[{"title":"Presidential Primary"}],"planYourVoteText":"Plan your MA vote"},{"type":"state","name":"Minnesota","labels":[{"title":"Presidential Primary"}],"planYourVoteText":"Plan your vote"},{"type":"state","name":"North Carolina","labels":[{"title":"Presidential Primary"}],"planYourVoteText":"Plan your vote"},{"type":"state","name":"Oklahoma","labels":[{"title":"Presidential Primary"}],"planYourVoteText":"Plan your vote"},{"type":"state","name":"Tennessee","labels":[{"title":"Presidential Primary"}],"planYourVoteText":"Plan your vote"},{"type":"state","name":"Texas","labels":[{"title":"Presidential Primary"}],"planYourVoteText":"Plan your vote"},{"type":"state","name":"Vermont","labels":[{"title":"Presidential Primary"}],"planYourVoteText":"Plan your vote"},{"type":"state","name":"Virginia","labels":[{"title":"Presidential Primary"}],"planYourVoteText":"Plan your vote"},{"type":"state","name":"Arkansas","labels":[{"title":"Presidential Primary"}],"planYourVoteText":"Plan your vote"},{"type":"state","name":"Utah","labels":[{"title":"Presidential Primary"}],"planYourVoteText":"Plan your vote"},{"type":"state","name":"American Samoa","labels":[{"title":"Democratic Presidential Caucus"}],"planYourVoteText":"Plan your vote"}]},{"type":"regular","date":"2024-03-12","states":[{"type":"state","name":"Georgia","labels":[{"title":"Presidential Primary"}],"planYourVoteText":"Plan your vote"},{"type":"state","name":"Mississippi","labels":[{"title":"Presidential Primary"}],"planYourVoteText":"Plan your vote"},{"type":"state","name":"Washington","labels":[{"title":"Presidential Primary"}],"planYourVoteText":"Plan your vote"},{"type":"state","name":"Democrats Abroad","labels":[{"title":"Democratic Presidential Primary"}],"planYourVoteText":"Plan your vote"}]},{"type":"regular","date":"2024-03-17","states":[{"type":"state","name":"Puerto Rico","labels":[{"title":" Democratic Presidential Primary"}],"planYourVoteText":"Plan your vote"}]},{"type":"regular","date":"2024-03-19","states":[{"type":"state","name":"Florida","labels":[{"title":"Presidential Primary"}],"planYourVoteText":"Plan your vote"},{"type":"state","name":"Kansas","labels":[{"title":"Presidential Primary"}],"planYourVoteText":"Plan your vote"},{"type":"state","name":"Ohio","labels":[{"title":"Presidential Primary"}],"planYourVoteText":"Plan your vote"},{"type":"state","name":"Arizona","labels":[{"title":"Presidential Primary"}],"planYourVoteText":"Plan your vote"},{"type":"state","name":"Illinois","labels":[{"title":"Presidential Primary"}],"planYourVoteText":"Plan your vote"}]},{"type":"regular","date":"2024-03-23","states":[{"type":"state","name":"Louisiana","labels":[{"title":"Presidential Primary","url":" "}],"planYourVoteText":"Plan your vote"}]},{"type":"regular","date":"2024-03-25","states":[{"type":"other","title":"NY v. Donald J. Trump","description":"**Donald J. Trump** on trial in New York","linkText":"WATCH HERE","linkUrl":"https://www.nbcnews.com/"}]}]},{"name":"april","dates":[{"type":"regular","date":"2024-04-02","states":[{"type":"state","name":"Rhode Island","labels":[{"title":"Presidential Primary"}],"planYourVoteText":"Plan your vote"},{"type":"state","name":"Wisconsin","labels":[{"title":"Presidential Primary"}],"planYourVoteText":"Plan your vote"},{"type":"state","name":"Alabama","labels":[{"title":"Primary Runoff"}],"planYourVoteText":"Plan your vote"},{"type":"state","name":"Arkansas","labels":[{"title":"Primary Runoff"}],"planYourVoteText":"Plan your vote"},{"type":"state","name":"Delaware","labels":[{"title":"Presidential Primary"}],"planYourVoteText":"Plan your vote"},{"type":"state","name":"New York","labels":[{"title":"Presidential Primary"}],"planYourVoteText":"Plan your vote"},{"type":"state","name":"Mississippi","labels":[{"title":"Primary Runoff"}],"planYourVoteText":"Plan your vote"}]},{"type":"regular","date":"2024-04-06","states":[{"type":"state","name":"Alaska","labels":[{"title":"Democratic Presidential Caucus"}],"planYourVoteText":"Plan your vote"},{"type":"state","name":"Hawaii","labels":[{"title":"Democratic Presidential Caucus"}],"planYourVoteText":"Plan your vote"},{"type":"state","name":"North Dakota","labels":[{"title":"Democratic Presidential Caucus"}],"planYourVoteText":"Plan your vote"}]}]},{"name":"may","dates":[{"type":"regular","date":"2024-05-07","states":[{"type":"state","name":"Indiana","labels":[{"title":"Presidential Primary"},{"title":"House"},{"title":"Senate"},{"title":"Governor"}],"planYourVoteText":"Plan Your Vote","planYourVoteUrl":"https://nbcnews.com"}]},{"type":"regular","date":"2024-05-14","states":[{"type":"state","name":"Maryland","labels":[{"title":"Presidential Primary"}],"planYourVoteText":"Plan Your MD Vote","planYourVoteUrl":"https://nbcnews.com"},{"type":"state","name":"Nebraska","labels":[{"title":"Presidential Primary"}],"planYourVoteText":"Plan Your NE Vote"},{"type":"state","name":"West Virginia","labels":[{"title":"Presidential Primary"}],"planYourVoteUrl":"https://nbcnews.com","planYourVoteText":"Plan Your WV Vote"}]},{"type":"regular","date":"2024-05-21","states":[{"type":"state","name":"Georgia","labels":[{"title":"House"}],"planYourVoteText":"Plan Your GA Vote","planYourVoteUrl":"https://nbcnews.com"}]}]},{"name":"june","dates":[{"type":"regular","date":"2024-06-04","states":[{"type":"state","name":"Montana","labels":[{"title":"Presidential Primary"}],"planYourVoteText":"Plan Your MT Vote","planYourVoteUrl":"https://nbcnews.com"},{"type":"state","name":"New Mexico","labels":[{"title":"Presidential Primary"}],"planYourVoteUrl":"https://nbcnews.com","planYourVoteText":"Plan Your NM Vote"},{"type":"state","name":"South Dakota","labels":[{"title":"Presidential Primary"}],"planYourVoteUrl":"https://nbcnews.com","planYourVoteText":"Plan Your SD Vote"},{"type":"state","name":"New Jersey","labels":[{"title":"Presidential Primary"}],"planYourVoteText":"Plan Your NJ Vote","planYourVoteUrl":"https://nbcnews.com"}]}]},{"name":"july","dates":[{"type":"regular","date":"2024-07-15","states":[{"type":"other","title":"2024 RNC Convention","description":"<!--StartFragment-->\\n\\nRepublican Convention\\n\\n<!--EndFragment-->"}]},{"type":"regular","date":"2024-07-16","states":[{"type":"other","title":"2024 RNC Convention","description":"2024 RNC Convention"}]},{"type":"special","date":"2024-07-17","title":"2024 RNC Convention","description":"2024 RNC Convention","states":[{"type":"other","title":"2024 RNC Convention"}]},{"type":"regular","date":"2024-07-18","states":[{"type":"other","title":"2024 RNC Convention","description":"2024 RNC Convention"}]}]},{"name":"august","dates":[{"type":"regular","date":"2024-08-01","states":[{"type":"state","name":"Tennessee","labels":[{"title":"House"}],"planYourVoteUrl":"https://nbcnews.com","planYourVoteText":"Plan Your TN Vote"}]},{"type":"special","date":"2024-08-12","title":"My birthday","description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute ir","states":[{"type":"other","title":"Alexis' Birthday","description":"TLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis auteest","linkText":"Rewatch Debate","linkUrl":"https://www.nbcnews.com"}]},{"type":"special","date":"2024-08-19","title":"2024 DNC Convention","description":"Democratic National Convention"},{"type":"special","date":"2024-08-20","description":"Democratic National Convention","title":"2024 DNC Convention"},{"type":"special","date":"2024-08-21","title":"2024 DNC Convention","description":"Democratic National Convention"},{"type":"special","date":"2024-08-22","title":"2024 DNC Convention","description":"Democratic National Convention"}]},{"name":"september","dates":[]},{"name":"october","dates":[]},{"name":"november","dates":[{"type":"regular","date":"2024-11-05","states":[{"type":"other","title":"General Election","description":"The general election"}]}]},{"name":"december","dates":[]}]`)}}]);
