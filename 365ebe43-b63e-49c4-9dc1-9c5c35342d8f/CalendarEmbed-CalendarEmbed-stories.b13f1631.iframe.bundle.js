"use strict";(globalThis.webpackChunkfirecracker=globalThis.webpackChunkfirecracker||[]).push([[6486],{"./components/CalendarEmbed/CalendarEmbed.stories.js":($,C,e)=>{e.r(C),e.d(C,{CalendarEmbedLast:()=>S,CalendarEmbedMultiEvents:()=>p,CalendarEmbedOneState:()=>l,__namedExportsOrder:()=>v,default:()=>I});var i=e("./node_modules/@babel/runtime/helpers/esm/extends.js"),x=e("./node_modules/next/dist/compiled/react/index.js"),g=e("./node_modules/styled-jsx/style.js"),j=e.n(g),t=e("./components/DebugInfo/index.js"),L=e("./components/providers/EmbedContext.js"),h=e("./components/Calendar/CalendarSections.js"),y=e("./components/providers/BrandContext.js"),o=e("./helpers/isTelemundo.js"),c=e("./components/providers/StickyContext.js"),n=x.createElement;function s(a){const{debugInfo:r,isEmbed:d,brand:E,stateLevelDelegates:P,currentTime:B,electionType:k,electionSeason:U,statesWhiteList:G,sectionsToShow:b,calendarSections:O}=a,A=(0,x.useMemo)(()=>({isEmbed:!0,useLinkTarget:(0,o.default)(E)}),[E]);return n(x.Fragment,null,n(j(),{id:"4222055135"},[".debug{margin:20px;}",".hasBorders{border-top:solid 1px #ccc;border-bottom:solid 1px #ccc;padding:4px 0;}",".calendar-embed__heading-container{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}",".calendar-embed__heading{margin:20px 16px 10px 0;}",".calendar-embed__heading-container>a{margin-bottom:4px;}",".calendar-embed__content{margin-bottom:4px;}","@media screen and (min-width:758px){.calendar-embed__heading-container{-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;}.calendar-embed__heading-container>a{padding-top:38px;}\xE5 .hasBorders{padding-bottom:12px;}}"]),n(y.default.Provider,{value:E},n(L.default.Provider,{value:A},n(c.StickyProvider,{isEmbed:!0},n(h.default,{calendarSections:O,stateLevelDelegates:P,currentTime:B,electionType:k,electionSeason:U,showAds:!1,statesWhiteList:G,sectionsToShow:b,isEmbed:!0}),n("main",{className:"jsx-4222055135 overflow-hidden"},!d&&n(t.default,r))))))}var N=e("./server/v2/modules/Grid/Grid.js"),D=e("./server/v2/modules/Grid/mockInput.json"),R=e("./components/Calendar/delegatesMock.json"),T=e("./data/whitelist/state-results-pages-whitelist.json"),f=e("./components/Calendar/constants.js"),u=x.createElement;const M={component:s,title:"Embeds/Calendar",argTypes:{date:{control:{type:"text"}}}},m={stateLevelDelegates:R,statesWhiteList:T,year:2024,electionType:"primary",currentTime:"2024-02-06T00:00:00-05:00"},l=a=>{const{date:r}=a,d=new N.default(D,`${r}T08:41:53-04:00`);return u("div",null,u(s,(0,i.default)({},a,m,{sectionsToShow:[f.CALENDAR_SECTION.NEXT],isEmbed:!0,calendarSections:d.sections})))};l.displayName="CalendarEmbedOneState",l.args={date:"2024-02-06"};const p=a=>{const{date:r}=a,d=`${r}T08:41:53-04:00`,E=new N.default(D,d);return u("div",null,u(s,(0,i.default)({},a,m,{currentTime:d,sectionsToShow:[f.CALENDAR_SECTION.TODAY,f.CALENDAR_SECTION.NEXT],isEmbed:!0,calendarSections:E.sections})))};p.displayName="CalendarEmbedMultiEvents",p.args={date:"2024-03-02"};const S=a=>{const{date:r}=a,d=new N.default(D,`${r}T08:41:53-04:00`);return u("div",null,u(s,(0,i.default)({},a,m,{sectionsToShow:[f.CALENDAR_SECTION.LAST],isEmbed:!0,calendarSections:d.sections})))};S.displayName="CalendarEmbedLast",S.args={date:"2024-11-02"};const I=M,v=["CalendarEmbedOneState","CalendarEmbedMultiEvents","CalendarEmbedLast"]},"./components/Calendar/CalendarSections.js":($,C,e)=>{e.r(C),e.d(C,{default:()=>M});var i=e("./node_modules/next/dist/compiled/react/index.js"),x=e("./node_modules/prop-types/index.js"),g=e.n(x),j=e("./components/Calendar/CalendarMonthEntries/CalendarMonthEntries.js"),t=e("./components/Calendar/constants.js"),L=e("./node_modules/styled-jsx/style.js"),h=e.n(L),y=e("./node_modules/react-i18next/dist/es/index.js"),o=e("./components/Link.js"),c=e("./components/providers/EmbedContext.js"),n=i.createElement;const s=({enabled:m,jumpText:l,sectionToScroll:p})=>m!==!0?null:n(o.default,{href:`#${p}`,className:"link-back oswald f3 underline fw4 df items-center pointer"},l,n(h(),{id:"877188041"},["html{-webkit-scroll-behavior:smooth;-moz-scroll-behavior:smooth;-ms-scroll-behavior:smooth;scroll-behavior:smooth;}",".link-back{border:none;line-height:16px;-webkit-letter-spacing:0.2px;-moz-letter-spacing:0.2px;-ms-letter-spacing:0.2px;letter-spacing:0.2px;padding:0 20px;margin-top:6px;background:none;color:var(--jump-link-color,#3061ff);}",".link-back:hover{cursor:pointer;}"]));s.displayName="JumpButton";const N=({enabled:m,section:l,showButton:p,sectionToScroll:S,children:I,t:v,i18n:{language:a}})=>{const{isEmbed:r}=(0,i.useContext)(c.default);if(m===!1)return null;const d={[t.CALENDAR_SECTION.TODAY]:"Today",[t.CALENDAR_SECTION.UPCOMING]:"Upcoming",[t.CALENDAR_SECTION.PAST]:"Past",[t.CALENDAR_SECTION.NEXT]:"Next Election Day",[t.CALENDAR_SECTION.LAST]:"Last Election Day"}[l],E=a==="es"?"https://www.telemundo.com/noticias/noticias-telemundo/elecciones-estados-unidos-2024/calendario":"https://www.nbcnews.com/politics/2024-primary-elections/calendar";return n(i.Fragment,null,n(h(),{id:"2834954669"},[".base.jsx-2834954669{padding:6px;margin-bottom:5px;}",".section-title.jsx-2834954669{line-height:35.57px;}",".past.jsx-2834954669,.upcoming.jsx-2834954669,.next.jsx-2834954669,.last.jsx-2834954669{background:#f2f2f2;color:black;}",".today.jsx-2834954669{background:#fa3a3a;color:white;--jump-link-color:white;}",".full-calendar.jsx-2834954669{border:none;line-height:16px;-webkit-letter-spacing:0.2px;-moz-letter-spacing:0.2px;-ms-letter-spacing:0.2px;letter-spacing:0.2px;padding-left:20px;margin-top:6px;background:none;color:var(--jump-link-color,#3061ff);font-size:14px;}",".link-back.jsx-2834954669:hover{cursor:pointer;}",".callout-arrow.jsx-2834954669{margin:0 6px;margin-bottom:-1px;}",".today.jsx-2834954669 .callout-arrow.jsx-2834954669{fill:#fff;}"]),n("div",{className:`jsx-2834954669 base oswald ${l} items-center df justify-left`},n("span",{className:"jsx-2834954669 f7 fw6 ttc section-title"},v(d)),r?n(o.default,{href:E,"data-icid":"elections_calendar_embed"},n("span",{className:"jsx-2834954669 full-calendar fw3 underline"},v("FULL CALENDAR")),n("svg",{width:"14",height:"13",viewBox:"0 0 14 13",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",className:"jsx-2834954669 callout-arrow clear-blue"},n("path",{d:"M7.875 9.63777L10.9625 6.77079L1.75 6.77079L1.75 6.22913L10.9625 6.22913L7.875 3.24996L8.28748 2.86694L11.9583 6.49996L8.28748 10.0208L7.875 9.63777Z",className:"jsx-2834954669"}))):n(s,{enabled:p,jumpText:v(t.JUMP_LINK_TEXT[l]),sectionToScroll:S})),I)},D=(0,y.withTranslation)()(N);var R=e("./components/MobileAd.js"),T=i.createElement;const f=(m,l)=>l[`${m}Elections`]&&Object.keys(l[`${m}Elections`]).length>0,u=({stateLevelDelegates:m,currentTime:l,electionType:p,electionSeason:S,showAds:I,statesWhiteList:v,sectionsToShow:a,calendarSections:r})=>{const{isEmbed:d}=(0,i.useContext)(c.default),E=f(t.CALENDAR_SECTION.UPCOMING,r),P=f(t.CALENDAR_SECTION.PAST,r),B=f(t.CALENDAR_SECTION.TODAY,r),k=b=>{const O=r[`${b}Elections`];return Object.keys(O).map(A=>{const w=O[A];return w?T(j.default,{key:`${A}-${b}`,monthData:w,stateLevelDelegates:m,statesWhiteList:v,year:+S,electionType:p,currentTime:l,section:b,isEmbed:d}):null})},U={[t.CALENDAR_SECTION.TODAY]:{section:t.CALENDAR_SECTION.TODAY,enabled:B,sectionToScroll:t.CALENDAR_SECTION.PAST,showButton:P},[t.CALENDAR_SECTION.UPCOMING]:{section:t.CALENDAR_SECTION.UPCOMING,enabled:E,sectionToScroll:t.CALENDAR_SECTION.PAST,showButton:P},[t.CALENDAR_SECTION.PAST]:{section:t.CALENDAR_SECTION.PAST,enabled:P,sectionToScroll:t.CALENDAR_SECTION.UPCOMING,showButton:E},[t.CALENDAR_SECTION.NEXT]:{section:t.CALENDAR_SECTION.NEXT,enabled:!0,sectionToScroll:null,showButton:!1},[t.CALENDAR_SECTION.LAST]:{section:t.CALENDAR_SECTION.LAST,enabled:!0,sectionToScroll:null,showButton:!1}},G=a.map((b,O)=>{const{section:A,enabled:w,sectionToScroll:W,showButton:X}=U[b],K=O===a.length-1;return T(i.Fragment,{key:b},K&&I&&T(R.default,null),T("div",{id:A,className:"calendar-section gray-100"},T(D,{enabled:w,section:A,sectionToScroll:W,showButton:X,isEmbed:d},k(A))))});return T("div",{className:"calendar-content__container"},G)};u.displayName="CalendarSections",u.propTypes={sectionsToShow:g().arrayOf(g().string)},u.defaultProps={sectionsToShow:[t.CALENDAR_SECTION.TODAY,t.CALENDAR_SECTION.UPCOMING,t.CALENDAR_SECTION.PAST]};const M=u},"./components/MobileAd.js":($,C,e)=>{e.r(C),e.d(C,{default:()=>y});var i=e("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),x=e("./node_modules/next/dist/compiled/react/index.js"),g=e("./components/Ad.js"),j=x.createElement;function t(o,c){var n=Object.keys(o);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(o);c&&(s=s.filter(function(N){return Object.getOwnPropertyDescriptor(o,N).enumerable})),n.push.apply(n,s)}return n}function L(o){for(var c=1;c<arguments.length;c++){var n=arguments[c]!=null?arguments[c]:{};c%2?t(Object(n),!0).forEach(function(s){(0,i.default)(o,s,n[s])}):Object.getOwnPropertyDescriptors?Object.defineProperties(o,Object.getOwnPropertyDescriptors(n)):t(Object(n)).forEach(function(s){Object.defineProperty(o,s,Object.getOwnPropertyDescriptor(n,s))})}return o}const h=({styles:o})=>j("div",{className:"db dn-m mb6 ph4 tc ads","data-testid":"mobile-ad",style:o?L({},o):{}},j(g.default,{slot:"boxinline"}));h.displayName="MobileAd";const y=h}}]);
