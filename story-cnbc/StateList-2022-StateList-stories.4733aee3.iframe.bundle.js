"use strict";(globalThis.webpackChunkfirecracker=globalThis.webpackChunkfirecracker||[]).push([[8343],{"./components/StateList/2022/StateList.stories.js":(D,n,t)=>{t.r(n),t.d(n,{StateListFooter:()=>i,StateListNav:()=>f,__namedExportsOrder:()=>E,default:()=>y});var _=t("./node_modules/styled-jsx/style.js"),d=t.n(_),a=t("./node_modules/next/dist/compiled/react/index.js"),h=t("./components/stories/data/whitelist.json"),p=t("./components/StateList/2022/StateList.js"),l=a.createElement;const y={component:p.default,title:"Features/Nav/State List",argTypes:{location:{options:["footer","dropdown"],control:{type:"select"}},isEmbedded:{control:"boolean"}},args:{whiteList:h,liveResultsList:"",location:"footer",isEmbedded:!1}},i=r=>l("div",{className:"state-list-footer-section mt2"},l(p.default,r));i.displayName="StateListFooter";const f=r=>l("div",{className:"jsx-4197968515"},l(d(),{id:"4197968515"},[".state-nav.jsx-4197968515{height:100%;padding:15px 0;text-align:center;width:100%;}","@media screen and (min-width:758px){.state-nav.jsx-4197968515{height:275px;padding-bottom:0;padding-top:0;text-align:left;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}}","@media screen and (min-width:1000px){.state-nav.jsx-4197968515{margin:0 auto;width:900px;height:300px;}}","@media screen and (min-width:1240px){.state-nav.jsx-4197968515{margin:0 auto;padding-top:15px;padding-bottom:15px;width:1180px;height:250px;}}"]),l("nav",{className:"jsx-4197968515 state-nav db flex-row overflow-y-scroll overflow-y-hidden-m"},l(p.default,r)));f.displayName="StateListNav",f.args={location:"dropdown"};const E=["StateListFooter","StateListNav"]},"./components/StateList/2022/StateList.js":(D,n,t)=>{t.r(n),t.d(n,{default:()=>b});var _=t("./node_modules/@babel/runtime/helpers/esm/extends.js"),d=t("./node_modules/styled-jsx/style.js"),a=t.n(d),h=t("./node_modules/next/dist/compiled/react/index.js"),p=t("./node_modules/classnames/index.js"),l=t.n(p),y=t("./node_modules/prop-types/index.js"),i=t.n(y),f=t("./node_modules/react-i18next/dist/es/index.js"),E=t("./components/navigation/BlinkingDot.js"),r=t("./components/Link.js"),x=t("./helpers/removeDotsFromString.js"),O=t("./helpers/constants.js"),I=t("./lib/getIcidString.js"),P=t("./helpers/formatStateListJson.js"),N=t("./components/providers/BrandContext.js"),s=h.createElement;const u=({t:k,whiteList:w,liveResultsList:j,location:v,isEmbedded:M,electionSeason:S,electionType:T})=>{const L=S||"2020",U=(0,P.formatDesktopStatesGeneralElection)({whiteList:w,electionSeason:L,liveResultsList:j}),A=(0,P.formatMobileStatesGeneralElection)({whiteList:w,electionSeason:L,liveResultsList:j}),c=(0,h.useContext)(N.default)==="noticias",W=c?"https://www.telemundo.com":"https://www.nbcnews.com",K=`/noticias/elecciones-estados-unidos-${S}/resultados-`,C=e=>e?c?`${W}${K}${e.split("/").pop().replace("-results","")}`:e:"#",$=T===O.ELECTION_TYPE.GENERAL?"":` ${T}`,o=M?"600px":"768px",g=M&&!c?{target:"_parent"}:{};v===O.STATE_LIST_LOCATIONS.DROPDOWN&&(g["data-icid"]=I.STRING_NAV);const R=v==="footer"?`${L}${$} elections by state`:"";return s("div",{className:a().dynamic([["2107094720",[o]]])+` state-list state-list__${v}`},s(a(),{id:"2107094720",dynamic:[o]},[".state-link{color:inherit;}",".state-list{width:100%;}",".state-list__footer,.state-list__footer-full-width{height:585px;width:100%;}",".state-list__footer .mobile-state-links,.state-list__footer-full-width .mobile-state-links{display:none;}",".state-list__footer .desktop-state-links,.state-list__footer-full-width .desktop-state-links{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}",".state-list__footer .desktop-state-links .item-link,.state-list__footer-full-width .desktop-state-links .item-link{font-size:18px;width:50%;}",".mobile-state-links{display:block;height:100%;}",".desktop-state-links{display:none;height:100%;}","@media screen and (min-width:450px){.state-list__footer,.state-list__footer-full-width{height:500px;}.state-list__footer .desktop-state-links .item-link,.state-list__footer-full-width .desktop-state-links .item-link{width:29%;}}",`@media screen and (min-width:${o}){.state-list__footer,.state-list__footer-full-width{height:250px;margin-left:12px;width:100%;}.state-list__footer .desktop-state-links,.state-list__footer-full-width .desktop-state-links{padding-left:0;}.state-list__footer .desktop-state-links .item-link,.state-list__footer-full-width .desktop-state-links .item-link{width:20%;}.mobile-state-links{display:none;padding-left:16px;}.desktop-state-links{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;width:100%;}.item-link{width:20%;font-size:16px;}.standard-links__bottom-decoration{display:none;}.state-dropdown::after{display:none;}}`,"@media screen and (min-width:1000px){.state-list__footer,.state-list__footer-full-width{height:290px;width:100%;}.state-list__footer .item-link,.state-list__footer-full-width .item-link{width:19%;}.item-link{width:14%;}}","@media screen and (min-width:1240px){.state-list__footer,.state-list__footer-full-width{width:100%;height:210px;}.state-list__footer-full-width .desktop-state-links .item-link{width:11%;}.state-list__footer .desktop-state-links .item-link{width:17%;}.item-link{width:14%;}}"]),s("ul",{title:R,className:a().dynamic([["2107094720",[o]]])+" mobile-state-links overflow-y-auto lst-none pl0 pb7"},A.activeStates.map(e=>{const m=l()({"live red":e.live});return s("li",{key:e.name,"data-testid":"stateList__mobile-state",className:a().dynamic([["2107094720",[o]]])+` item-link active-state founders-cond fw6 f6 lh-copy ${m}`},s(r.default,(0,_.default)({target:c?"_blank":null,className:"state-link link",href:`${e.url?C(e.url):"#"}`},g),s(E.default,{classes:"bg-red mr1",shouldShow:e.live}),k((0,x.default)(e.name))))}),A.inactiveStates.map(e=>s("li",{key:e.name,"data-testid":"stateList__mobile-state",className:a().dynamic([["2107094720",[o]]])+" item-link founders-cond fw6 f6 lh-copy gray-40"},k((0,x.default)(e.name))))),s("ul",{title:R,className:a().dynamic([["2107094720",[o]]])+" desktop-state-links df flex-column flex-wrap lst-none pl4"},U.map(e=>{const{active:m,live:B}=e,F=l()({"active-state":m,"live red":B&&m});return s("li",{"data-testid":"stateList__desktop-state",key:e.name,className:a().dynamic([["2107094720",[o]]])+` item-link founders-cond fw6 lh-title ${F}`},m&&s(r.default,(0,_.default)({target:c?"_blank":null,className:"link state-link",href:`${e.url?C(e.url):"#"}`,"data-testid":"stateList__desktop-link-active"},g),s(E.default,{classes:"bg-red mr1",shouldShow:B}),k((0,x.default)(e.name))),!m&&s("span",{"data-testid":"stateList__desktop-link-inactive",className:a().dynamic([["2107094720",[o]]])+" gray-40"},k((0,x.default)(e.name))))})))};u.displayName="StateList",u.propTypes={whiteList:i().oneOfType([i().arrayOf(i().string),i().string]),liveResultsList:i().string,location:i().string,electionSeason:i().string,electionType:i().string},u.defaultProps={whiteList:null,liveResultsList:"",location:"",electionSeason:"2020",electionType:"primary"};const b=(0,f.withTranslation)()(u)},"./helpers/removeDotsFromString.js":(D,n,t)=>{t.r(n),t.d(n,{default:()=>_});function _(d){return d&&typeof d=="string"?d.replace(/\./g,""):""}}}]);
