"use strict";(globalThis.webpackChunkfirecracker=globalThis.webpackChunkfirecracker||[]).push([[3799],{"./components/modules/SuperTuesday/stories/DemocraticPresidentialLinks.stories.js":(u,e,s)=>{s.r(e),s.d(e,{DemocraticLinks:()=>r,__namedExportsOrder:()=>M,default:()=>U});var n=s("./node_modules/next/dist/compiled/react/index.js"),l=s("./node_modules/styled-jsx/style.js"),t=s.n(l),p=s("./node_modules/prop-types/index.js"),a=s.n(p),v=s("./node_modules/react-i18next/dist/es/index.js"),T=s("./components/Link.js"),P=s("./components/icons/ChevronThinRight.js"),x=s("./helpers/isTelemundo.js"),O=s("./helpers/isRelativeUrl.js"),D=s("./components/providers/BrandContext.js"),o=n.createElement;function j({links:c}){const{t:m}=(0,v.useTranslation)(),y=(0,n.useContext)(D.default);return o(n.Fragment,null,o(t(),{id:"3366103780"},["ul.jsx-3366103780{-webkit-column-count:2;column-count:2;}","li.jsx-3366103780{line-height:28px;}",".container.jsx-3366103780 svg{top:1px;height:9px;width:5px;}","@media screen and (min-width:758px){ul.jsx-3366103780{-webkit-column-count:4;column-count:4;}}"]),o("div",{className:"jsx-3366103780 container db df-m oswald"},o("ul",{className:"jsx-3366103780 ma0 pa0 lst-none container lh-none"},c.map(({href:i,stateName:f})=>{if(!i)return null;const B=(0,x.default)(y)&&(0,O.default)(i)?`https://www.nbcnews.com${i}`:i;return o("li",{key:f,className:"jsx-3366103780 ws-nowrap f4 fw3"},o(T.default,{className:"link gray-100 underline",href:B},o("span",{className:"jsx-3366103780"},m(f)),o(P.default,{className:"ml1 relative"})))}))))}j.propTypes={links:a().arrayOf(a().shape({href:a().string,stateName:a().string.isRequired})).isRequired};var L=s("./components/modules/SuperTuesday/stories/mocks.json"),E=s("./components/GridLayout/GridMain.js"),C=s("./components/GridLayout/GridContent.js"),h=s("./components/stories/helpers/BreakpointIndicator.js"),R=s("./components/GridLayout/GridRail.js"),d=n.createElement;const U={title:"Features/Super Tuesday/Democratic Links",component:j,decorators:[c=>d(E.default,null,d(C.default,null,d(h.default,null),d(c,null)),d(R.default,null))],args:{links:L.links,title:"Democratic presidential primaries"}},r=c=>d(j,c);r.displayName="DemocraticLinks";const M=["DemocraticLinks"]},"./components/Link.js":(u,e,s)=>{s.r(e),s.d(e,{default:()=>C});var n=s("./node_modules/@babel/runtime/helpers/esm/extends.js"),l=s("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),t=s("./node_modules/next/dist/compiled/react/index.js"),p=s("./node_modules/prop-types/index.js"),a=s.n(p),v=s("./node_modules/classnames/index.js"),T=s.n(v),P=s("./helpers/isExternalUrl.js"),x=s("./components/providers/EmbedContext.js"),O=s("./components/providers/BrandContext.js"),D=s("./helpers/isRelativeUrl.js"),o=s("./helpers/isTelemundo.js");const j=["linkText","children","accessibleOnly","href","className","data-icid"];var L=t.createElement;const E=h=>{let{linkText:R,children:d,accessibleOnly:U,href:r,className:M,"data-icid":c}=h,m=(0,l.default)(h,j);const{isEmbed:y,isPartner:i,isInSpanish:f,useLinkTarget:B}=(0,t.useContext)(x.default),A=(0,t.useContext)(O.default),g=T()({"show-on-tab":U},M),W=y||i&&f,I=i&&!f;(0,P.default)(r)&&Object.assign(m,{rel:"nofollow"}),B&&m?.target||(W&&Object.assign(m,{target:"_parent"}),I&&Object.assign(m,{target:"_blank"}));const K=(0,o.default)(A)&&(0,D.default)(r)?`https://www.nbcnews.com${r}`:r,_={[i?"data-cid":"data-icid"]:c};return L("a",(0,n.default)({},m,{href:K,className:g},_),R||d)};E.displayName="Link",E.propTypes={href:a().string,linkText:a().string,className:a().string,accessibleOnly:a().bool},E.defaultProps={href:null,linkText:null,className:null,accessibleOnly:!1};const C=E},"./components/providers/BrandContext.js":(u,e,s)=>{s.r(e),s.d(e,{default:()=>l});var n=s("./node_modules/next/dist/compiled/react/index.js");const l=n.createContext("news")},"./components/providers/EmbedContext.js":(u,e,s)=>{s.r(e),s.d(e,{default:()=>l});var n=s("./node_modules/next/dist/compiled/react/index.js");const l=n.createContext({isEmbed:!1,isPartner:!1,isInSpanish:!1,useLinkTarget:!1})},"./helpers/isExternalUrl.js":(u,e,s)=>{s.r(e),s.d(e,{default:()=>l});const l=t=>t?!/(^[#/])|((nbcnews|today|msnbc)\.com)/.test(t):!1},"./helpers/isRelativeUrl.js":(u,e,s)=>{s.r(e),s.d(e,{default:()=>l});const l=t=>t?!/^https?:\/\/|^\/\/|^mailto:|^#/i.test(t):!1},"./helpers/isTelemundo.js":(u,e,s)=>{s.r(e),s.d(e,{default:()=>t});var n=s("./helpers/constants.js");const t=p=>p===n.BRANDS.TELEMUNDO}}]);
