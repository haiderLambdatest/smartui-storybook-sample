"use strict";(globalThis.webpackChunkfirecracker=globalThis.webpackChunkfirecracker||[]).push([[7020],{"./components/MapTooltip/MapTooltipAttorneyGeneral.stories.js":(h,T,n)=>{n.r(T),n.d(T,{AttorneyGeneralBeforePollsClose:()=>c,AttorneyGeneralDuring:()=>y,AttorneyGeneralTooEarly:()=>u,AttorneyGeneralWinner:()=>E,AttorneyGeneralZeros:()=>p,__namedExportsOrder:()=>M,default:()=>D});var f=n("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),A=n("./node_modules/styled-jsx/style.js"),C=n.n(A),i=n("./node_modules/next/dist/compiled/react/index.js"),l=n("./components/MapTooltip/mocks.json"),_=n("./helpers/constants.js"),P=n("./server/v2/helpers/geography.js"),d=n("./components/MapTooltip/wrappers/NationalMapTooltip.js"),g=n("./components/ElectionMap/TooltipContainer.js"),t=i.createElement;function m(e,o){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);o&&(r=r.filter(function(O){return Object.getOwnPropertyDescriptor(e,O).enumerable})),s.push.apply(s,r)}return s}function a(e){for(var o=1;o<arguments.length;o++){var s=arguments[o]!=null?arguments[o]:{};o%2?m(Object(s),!0).forEach(function(r){(0,f.default)(e,r,s[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):m(Object(s)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(s,r))})}return e}function j({children:e,isMobile:o,mapWidth:s}){const r=(0,i.useRef)(),{0:O,1:G}=(0,i.useState)(!1);return(0,i.useEffect)(()=>{G(!0)},[]),t(i.Fragment,null,t("div",{ref:r}),O&&t(g.default,{mapWidth:s,isMobile:o,hoverElement:r.current,isOpen:!0},e))}const D={decorators:[(e,{args:o})=>t("div",{style:{minHeight:"100vh"},className:"jsx-1516047437"},t(C(),{id:"1516047437"},[".container{pointer-events:all !important;}"]),t(j,o,t(e,{className:"jsx-1516047437"})))],args:{callStatusCode:"",currentTime:"2024-11-05T10:00:00",officeCode:_.OFFICE_CODES.ATTORNEY_GENERAL,geography:P.REPORTING_TYPE.STATES,electionTypeCode:_.ELECTION_TYPE_CODES.GENERAL_ELECTION,stateCode:"FL",mapWidth:375,isMobile:!0,useLinkStyle:!0,pollsCloseFormatted:"",pollsCloseUTC:"2024-11-06T01:00:00"},title:"Global Components/Tooltip/Map/Attorney General",parameters:{layout:"fullscreen"}},c=e=>t(d.default,e);c.displayName="AttorneyGeneralBeforePollsClose",c.args=a(a({},l.zeros),{},{pollsCloseFormatted:"Election on Nov 5",pollsCloseUTC:"2024-11-06T01:00:00"});const p=e=>t(d.default,e);p.displayName="AttorneyGeneralZeros",p.args=a(a({},l.zeros),{},{candidates:l.attorneyGeneralCandidatesZeros});const y=e=>t(d.default,e);y.displayName="AttorneyGeneralDuring",y.args=a(a({},l.during),{},{candidates:l.attorneyGeneralCandidatesDuring});const E=e=>t(d.default,e);E.displayName="AttorneyGeneralWinner",E.args=a(a({},l.winner),{},{candidates:l.attorneyGeneralCandidatesWinner});const u=e=>t(d.default,e);u.displayName="AttorneyGeneralTooEarly",u.args=a(a({},l.during),{},{candidates:l.attorneyGeneralCandidatesDuring,callStatusCode:_.CALL_STATUSES.TOO_EARLY_TO_CALL});const M=["AttorneyGeneralBeforePollsClose","AttorneyGeneralZeros","AttorneyGeneralDuring","AttorneyGeneralWinner","AttorneyGeneralTooEarly"]}}]);
