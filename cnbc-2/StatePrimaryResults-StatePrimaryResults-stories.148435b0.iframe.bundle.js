"use strict";(globalThis.webpackChunkfirecracker=globalThis.webpackChunkfirecracker||[]).push([[3014],{"./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js":(x,s,e)=>{e.r(s),e.d(s,{default:()=>r});function l(t,a){if(t==null)return{};var d={},o=Object.keys(t),n,i;for(i=0;i<o.length;i++)n=o[i],!(a.indexOf(n)>=0)&&(d[n]=t[n]);return d}function r(t,a){if(t==null)return{};var d=l(t,a),o,n;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)o=i[n],!(a.indexOf(o)>=0)&&Object.prototype.propertyIsEnumerable.call(t,o)&&(d[o]=t[o])}return d}},"./components/StatePrimaryResults/StatePrimaryResults.stories.js":(x,s,e)=>{e.r(s),e.d(s,{AssumedWinner:()=>j,MultipleCandidates:()=>L,SingleCandidates:()=>T,__namedExportsOrder:()=>R,default:()=>M});var l=e("./node_modules/@babel/runtime/helpers/esm/extends.js"),r=e("./node_modules/next/dist/compiled/react/index.js"),t=e("./node_modules/prop-types/index.js"),a=e.n(t),d=e("./components/StatePrimaryResults/StatePrimaryCandidatesList.js"),o=e("./components/Button.js"),n=e("./components/TextByBreakpoint.js"),i=e("./components/Module.js"),E=e("./components/ModuleHeading.js"),c=e("./components/ModuleDescription.js"),_=e("./components/ModuleSection.js"),p=e("./components/ModuleSectionHeader.js"),m=r.createElement;const u=({title:D,dek:B,demCandidates:A,demResultsText:U,demDelegates:g,repCandidates:y,repResultsText:W,repDelegates:K,demLinkText:I,demLinkUrl:N,repLinkText:S,repLinkUrl:F})=>{const H=()=>m(n.default,{s:`${g} Del.`,m:`${g} Delegates`}),$=()=>m(n.default,{s:`${K} Del.`,m:`${K} Delegates`});return m(i.default,null,m(E.default,null,D),m(c.default,null,B),m(_.default,null,m(p.default,{headingText:"Democratic Primary",subHeadingText:H,linkText:I,linkUrl:N}),m("div",{className:"mt2"},m(d.default,{candidates:A,text:U}))),m(_.default,null,m(p.default,{headingText:"Republican Primary",subHeadingText:$,linkText:S,linkUrl:F}),m("div",{className:"mt2"},m(d.default,{candidates:y,text:W}))),m("div",{className:"dn-m"},m(o.default,{text:I,url:N,isBlock:!0})))};u.displayName="StatePrimaryResults",u.propTypes={title:a().string,dek:a().string,demCandidates:a().arrayOf(a().object),demResultsText:a().string,repCandidates:a().arrayOf(a().object),repResultsText:a().string,demLinkText:a().string,demLinkUrl:a().string,repLinkText:a().string,repLinkUrl:a().string},u.defaultProps={title:"Primary election results",dek:null,demCandidates:[],demResultsText:null,repCandidates:[],repResultsText:null,demLinkText:null,demLinkUrl:null,repLinkText:null,repLinkUrl:null};const f=u;var O=e("./components/StatePrimaryResults/mock.json"),P=r.createElement;const{demCandidates:C,repCandidates:h,assumedWinner:v}=O,M={component:f,title:"Features/State Primary Results",args:{demLinkText:"Full California Primary Results",demLinkUrl:"https://www.nbcnews.com/politics/2020-primary-elections/california-results#jump-link__presidential-Dem",repLinkText:"Full California Primary Results",repLinkUrl:"https://www.nbcnews.com/politics/2020-primary-elections/california-results#jump-link__presidential-Rep"},parameters:{controls:{exclude:["title","dek","demCandidates","repCandidates"]}}},L=D=>P(f,(0,l.default)({title:"California Primary election results",dek:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",demCandidates:C,demDelegates:"415",repCandidates:h,repDelegates:"19"},D));L.displayName="MultipleCandidates";const T=D=>P(f,(0,l.default)({title:"California Primary election results",dek:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",demCandidates:C.slice(0,1),demDelegates:"415",repCandidates:h.slice(0,1),repDelegates:"19"},D));T.displayName="SingleCandidates",T.args={demResultsText:null,repResultsText:"This is some sample text"};const j=D=>P(f,(0,l.default)({title:"California Primary election results",dek:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",demCandidates:C,demDelegates:"415",repCandidates:v,repDelegates:"19"},D));j.displayName="AssumedWinner",j.args={demResultsText:null,repResultsText:"This is some sample text"};const R=["MultipleCandidates","SingleCandidates","AssumedWinner"]},"./components/Arrow.js":(x,s,e)=>{e.r(s),e.d(s,{default:()=>R});var l=e("./node_modules/next/dist/compiled/react/index.js"),r=e("./node_modules/prop-types/index.js"),t=e.n(r),a=l.createElement;const d=()=>a("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M15 7.5C15 11.6421 11.6421 15 7.5 15C3.35786 15 0 11.6421 0 7.5C0 3.35786 3.35786 0 7.5 0C11.6421 0 15 3.35786 15 7.5ZM5.40581 11.1314C5.16173 10.8873 5.16173 10.4915 5.40581 10.2475L7.93053 7.72275L5.40581 5.19803C5.16173 4.95395 5.16173 4.55822 5.40581 4.31414C5.64988 4.07007 6.04561 4.07007 6.28969 4.31414L9.69829 7.72275L6.28969 11.1314C6.04561 11.3754 5.64988 11.3754 5.40581 11.1314Z",fill:"white"});d.displayName="OneColorNegative";const o=d;var n=l.createElement;const i=()=>n("path",{id:"arrow-link",fillRule:"evenodd",clipRule:"evenodd",d:"M15 7.5C15 11.6421 11.6421 15 7.5 15C3.35786 15 0 11.6421 0 7.5C0 3.35786 3.35786 0 7.5 0C11.6421 0 15 3.35786 15 7.5ZM5.40581 11.1314C5.16173 10.8873 5.16173 10.4915 5.40581 10.2475L7.93053 7.72275L5.40581 5.19803C5.16173 4.95395 5.16173 4.55822 5.40581 4.31414C5.64988 4.07007 6.04561 4.07007 6.28969 4.31414L9.69829 7.72275L6.28969 11.1314C6.04561 11.3754 5.64988 11.3754 5.40581 11.1314Z",fill:"#102039"});i.displayName="OneColorPositive";const E=i;var c=l.createElement;const _=()=>c("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M1.56206 3.74642e-06L7.5 6.05952L1.64401 12.0354L0.0819497 10.4709L4.40485 6.05951L2.20243 3.812L-4.57699e-07 1.56448L1.56206 3.74642e-06Z",fill:"#3061FF"});_.displayName="NoColorBlue";const p=_;var m=l.createElement;const u=()=>m("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M1.56206 3.74642e-06L7.5 6.05952L1.64401 12.0354L0.0819497 10.4709L4.40485 6.05951L2.20243 3.812L-4.57699e-07 1.56448L1.56206 3.74642e-06Z",fill:"#555555"});u.displayName="NoColor";const f=u;var O=l.createElement;const P=()=>O("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M1.56206 3.74642e-06L7.5 6.05952L1.64401 12.0354L0.0819497 10.4709L4.40485 6.05951L2.20243 3.812L-4.57699e-07 1.56448L1.56206 3.74642e-06Z",fill:"currentColor"});P.displayName="inheritColor";const C=P;var h=l.createElement;const v=()=>h("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M5.93794 12L4.4984e-07 5.95831L5.85599 1.24119e-07L7.41805 1.55988L3.09515 5.95831L7.5 10.4401L5.93794 12Z",fill:"#3061FF"});v.displayName="LeftPointingNoColorBlue";const M=v;var L=l.createElement;const T={noColor:f(),inheritColor:C(),oneColorNegative:o(),oneColorPositive:E(),noColorBlue:p(),leftPointingNoColorBlue:M()},j=({className:D,style:B,type:A,width:U="15",height:g="15",viewBox:y="0 0 15 15"})=>L("div",{className:D,style:B},L("svg",{width:U,height:g,viewBox:y,fill:"none",xmlns:"http://www.w3.org/2000/svg"},(()=>T[A])()));j.displayName="Arrow",j.propTypes={className:t().string,style:t().object,type:t().oneOf(Object.keys(T)).isRequired,width:t().string,height:t().string,viewBox:t().string};const R=j},"./components/Button.js":(x,s,e)=>{e.r(s),e.d(s,{default:()=>u});var l=e("./node_modules/@babel/runtime/helpers/esm/extends.js"),r=e("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),t=e("./node_modules/styled-jsx/style.js"),a=e.n(t),d=e("./node_modules/next/dist/compiled/react/index.js"),o=e("./node_modules/prop-types/index.js"),n=e.n(o),i=e("./node_modules/classnames/index.js"),E=e.n(i),c=e("./components/Link.js");const _=["text","url","isBlock"];var p=d.createElement;const m=f=>{let{text:O,url:P,isBlock:C}=f,h=(0,r.default)(f,_);if(!O||!P)return null;const v=E()({db:C,dib:!C});return p(d.Fragment,null,p(a(),{id:"4203452410"},[".animated-button{border:1px solid #3061ff;color:#3061ff;-webkit-transition:background-position ease 0.2s;transition:background-position ease 0.2s;background-position:-600px 0;background-repeat:no-repeat;background-image:linear-gradient(35deg,#3061ff 50%,transparent 0);}",".animated-button:hover{background-size:325% 100%;background-position:0 0;color:#fff;}"]),p(c.default,(0,l.default)({className:`animated-button founders-cond fw4 f4 lh-none ttu tc pv4 ph1 ph2-m link ${v}`,href:P,"data-testid":"button"},h),O))};m.propTypes={text:n().string.isRequired,url:n().string.isRequired,isBlock:n().bool},m.defaultProps={isBlock:!1};const u=m},"./components/Headline.js":(x,s,e)=>{e.r(s),e.d(s,{default:()=>_});var l=e("./node_modules/@babel/runtime/helpers/esm/extends.js"),r=e("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),t=e("./node_modules/styled-jsx/style.js"),a=e.n(t),d=e("./node_modules/next/dist/compiled/react/index.js"),o=e("./node_modules/prop-types/index.js"),n=e.n(o);const i=["font","size","tag","margin","children","className"];var E=d.createElement;const c=p=>{let{font:m,size:u,tag:f,margin:O,children:P,className:C}=p,h=(0,r.default)(p,i);const v=f||`h${u}`,M=O;return P?E(d.Fragment,null,E(a(),{id:"747869921"},[".headline.jsx-747869921{color:#2a2a2a;}",".headline__h1.jsx-747869921{font-size:48px;}",".headline__h2.jsx-747869921{font-size:40px;}",".headline__h3.jsx-747869921{font-size:32px;}",".headline__h4.jsx-747869921{font-size:24px;}",".headline__h5.jsx-747869921{font-size:20px;}",".headline__h6.jsx-747869921{font-size:18px;}"]),E(v,(0,l.default)({"data-testid":"headline"},h,{className:"jsx-747869921 "+(h&&h.className!=null&&h.className||`${m} fw6 lh-none headline headline__h${u} ${M} ${C}`)}),P)):null};c.propTypes={size:n().number,margin:n().string,className:n().string,children:n().oneOfType([n().arrayOf(n().node),n().node]).isRequired,tag:n().string,font:n().string},c.defaultProps={size:1,tag:null,margin:"mv4",className:"",font:"founders-cond"};const _=c},"./components/Link.js":(x,s,e)=>{e.r(s),e.d(s,{default:()=>O});var l=e("./node_modules/@babel/runtime/helpers/esm/extends.js"),r=e("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),t=e("./node_modules/next/dist/compiled/react/index.js"),a=e("./node_modules/prop-types/index.js"),d=e.n(a),o=e("./node_modules/classnames/index.js"),n=e.n(o),i=e("./helpers/isExternalUrl.js"),E=e("./components/providers/EmbedContext.js"),c=e("./components/providers/BrandContext.js"),_=e("./helpers/isRelativeUrl.js"),p=e("./helpers/isTelemundo.js");const m=["linkText","children","accessibleOnly","href","className","data-icid"];var u=t.createElement;const f=P=>{let{linkText:C,children:h,accessibleOnly:v,href:M,className:L,"data-icid":T}=P,j=(0,r.default)(P,m);const{isEmbed:R,isPartner:D,isInSpanish:B,useLinkTarget:A}=(0,t.useContext)(E.default),U=(0,t.useContext)(c.default),g=n()({"show-on-tab":v},L),y=R||D&&B,W=D&&!B;(0,i.default)(M)&&Object.assign(j,{rel:"nofollow"}),A&&j?.target||(y&&Object.assign(j,{target:"_parent"}),W&&Object.assign(j,{target:"_blank"}));const K=(0,p.default)(U)&&(0,_.default)(M)?`https://www.nbcnews.com${M}`:M,I={[D?"data-cid":"data-icid"]:T};return u("a",(0,l.default)({},j,{href:K,className:g},I),C||h)};f.displayName="Link",f.propTypes={href:d().string,linkText:d().string,className:d().string,accessibleOnly:d().bool},f.defaultProps={href:null,linkText:null,className:null,accessibleOnly:!1};const O=f},"./components/Module.js":(x,s,e)=>{e.r(s),e.d(s,{default:()=>n});var l=e("./node_modules/next/dist/compiled/react/index.js"),r=e("./node_modules/classnames/index.js"),t=e.n(r),a=e("./components/withErrorBoundary.js"),d=l.createElement;const o=({children:i,className:E,id:c=null,testId:_=null})=>d("div",{className:t()("module mb9",E),id:c,"data-testid":_},i);o.displayName="Module";const n=(0,a.default)(o)},"./components/ModuleDescription.js":(x,s,e)=>{e.r(s),e.d(s,{default:()=>o});var l=e("./node_modules/next/dist/compiled/react/index.js"),r=e("./node_modules/prop-types/index.js"),t=e.n(r),a=l.createElement;const d=({children:n,fontSize:i,fontColor:E,margin:c,className:_})=>a("p",{className:`module-description publico-txt lh-copy fw4 ${i} ${E} ${c} ${_}`},n);d.displayName="ModuleDescription",d.propTypes={fontSize:t().string,fontColor:t().string,margin:t().string},d.defaultProps={fontSize:"f4",fontColor:"gray-80",margin:"ma0"};const o=d},"./components/ModuleHeading.js":(x,s,e)=>{e.r(s),e.d(s,{default:()=>i});var l=e("./node_modules/styled-jsx/style.js"),r=e.n(l),t=e("./node_modules/next/dist/compiled/react/index.js"),a=e("./node_modules/prop-types/index.js"),d=e.n(a),o=t.createElement;const n=({children:E,fontSize:c,className:_})=>o(t.Fragment,null,o(r(),{id:"1411094337"},[".module-heading.jsx-1411094337{color:#2a2a2a;margin:0 0 8px;}",".font-40.jsx-1411094337{font-size:40px;}"]),o("h2",{className:`jsx-1411094337 module-heading founders-cond fw6 lh-none ${c} ${_}`},E));n.propTypes={fontSize:d().string},n.defaultProps={fontSize:"font-40"};const i=n},"./components/ModuleSection.js":(x,s,e)=>{e.r(s),e.d(s,{default:()=>o});var l=e("./node_modules/styled-jsx/style.js"),r=e.n(l),t=e("./node_modules/next/dist/compiled/react/index.js"),a=t.createElement;const o=({children:n})=>a(t.Fragment,null,a(r(),{id:"495929799"},[".module-section.jsx-495929799{padding:24px 0 16px;}"]),a("section",{className:"jsx-495929799 module-section"},n))},"./components/ModuleSectionHeader.js":(x,s,e)=>{e.r(s),e.d(s,{default:()=>n});var l=e("./node_modules/styled-jsx/style.js"),r=e.n(l),t=e("./node_modules/next/dist/compiled/react/index.js"),a=e("./components/SectionHeader.js"),d=t.createElement;const n=({headingText:i,subHeadingText:E=null,linkText:c,linkUrl:_,showLinkOnMobile:p})=>d(t.Fragment,null,d(r(),{id:"611549098"},[]),d("header",{className:"jsx-611549098 module-section-header"},d(a.default,{headlineText:i,subHeadlineText:E,linkText:c,linkUrl:_,showLinkOnMobile:p,arrowViewBox:"0 0 4 15"})))},"./components/SectionHeader.js":(x,s,e)=>{e.r(s),e.d(s,{default:()=>O});var l=e("./node_modules/@babel/runtime/helpers/esm/extends.js"),r=e("./node_modules/styled-jsx/style.js"),t=e.n(r),a=e("./node_modules/next/dist/compiled/react/index.js"),d=e("./node_modules/prop-types/index.js"),o=e.n(d),n=e("./node_modules/classnames/index.js"),i=e.n(n),E=e("./node_modules/react-i18next/dist/es/index.js"),c=e("./components/Headline.js"),_=e("./components/Arrow.js"),p=e("./components/icons/ChevronCircleTransparent.js"),m=e("./components/Link.js"),u=a.createElement;const f=({i18n:{language:P},headlineText:C,subHeadlineText:h,linkText:v,linkUrl:M,useHorizontalRule:L,arrowViewBox:T,targetParent:j,showLinkOnMobile:R,headlineSize:D,headlineTag:B,hasLinkWithChevron:A,font:U})=>{if(!C)return null;const g=i()({"df ws-nowrap":R,"dn df-m":!R}),y={href:M};j&&(y.target="_parent"),P==="es"&&(y.target="_blank");const W=u(m.default,(0,l.default)({className:`section-header__link link-hover link-transition founders-cond f4 lh-none fw6 gray-80 ttu link ${g}`,"data-test":"section-header__link"},y),v,u(_.default,{type:"noColor",style:{marginTop:"2px",marginLeft:"5px"},viewBox:T})),K=u(m.default,(0,l.default)({className:`section-header__link sh-chevron-link founders-cond fw6 lh-none headline black mt0 mb0 pt3 f6 link ${g}`,"data-test":"section-header__link"},y),v,u("span",{className:"pl2 sh-chevron"},u(p.default,{className:"lr-link link-icon"})));return u(a.Fragment,null,u(t(),{id:"550142223"},[".section-header--hr{border-bottom:solid 1px #999;}",".sh-chevron{padding-top:3px;}",".sh-chevron-link:hover{color:#3061ff;opacity:1;-webkit-transition:none;transition:none;}",".sh-chevron-link:hover svg{fill:#3061ff;stroke:white;}"]),u("div",{"data-test":"section-header",className:`jsx-550142223 section-header df flex-wrap justify-between items-center mb1 ${i()({"section-header--hr":L})}`},u(c.default,{size:D,tag:B,margin:"section-header__headline mt0 mb2","data-test":"section-header__headline",font:U},C,h&&u("span",{"data-test":"section-header__sub-headline",className:"jsx-550142223 founders-cond f4 lh-none fw6 gray-80 ttu ml2"},"/ ",h())),M&&v&&(A?K:W)))};f.propTypes={headlineTag:o().string,headlineText:o().string,subHeadlineText:o().func,linkText:o().string,linkUrl:o().string,useHorizontalRule:o().bool,arrowViewBox:o().string,targetParent:o().bool,showLinkOnMobile:o().bool,headlineSize:o().number,hasLinkWithChevron:o().bool,font:o().string},f.defaultProps={headlineText:"",subHeadlineText:null,linkText:"",linkUrl:"",useHorizontalRule:!0,arrowViewBox:"0 0 15 15",targetParent:!1,showLinkOnMobile:!1,headlineSize:3,hasLinkWithChevron:!1,font:"founders-cond"};const O=(0,E.withTranslation)()(f)},"./components/TextByBreakpoint.js":(x,s,e)=>{e.r(s),e.d(s,{default:()=>E});var l=e("./node_modules/next/dist/compiled/react/index.js"),r=e("./node_modules/prop-types/index.js"),t=e.n(r),a=e("./node_modules/classnames/index.js"),d=e.n(a),o=e("./node_modules/react-i18next/dist/es/index.js"),n=l.createElement;const i=({t:c,s:_,m:p,l:m,xl:u,wrappingElement:f,displayType:O,className:P})=>{if(!_&&!p&&!m&&!u)return null;const C=f,h=O!=="dib"?"dib":O,v=d()({[O]:_,"dn-m":p,"dn-l":m,"dn-xl":u},P),M=d()({dn:_,[`${h}-m`]:p,"dn-l":m,"dn-xl":u},P),L=d()({dn:_,"dn-m":p,[`${h}-l`]:m,"dn-xl":u},P),T=d()({dn:_,"dn-m":p,"dn-l":m,[`${h}-xl`]:u},P);return n(l.Fragment,null,_&&n(C,{"data-testid":"text--s",className:v},c(_)),p&&n(C,{"data-testid":"text--m",className:M},c(p)),m&&n(C,{"data-testid":"text--l",className:L},c(m)),u&&n(C,{"data-testid":"text--xl",className:T},c(u)))};i.propTypes={className:t().string,s:t().string,m:t().string,l:t().string,xl:t().string,wrappingElement:t().string,displayType:t().oneOf(["dib","di","db","df"])},i.defaultProps={className:null,s:"",m:"",l:"",xl:"",wrappingElement:"span",displayType:"dib"};const E=(0,o.withTranslation)()(i)},"./components/icons/ChevronCircleTransparent.js":(x,s,e)=>{e.r(s),e.d(s,{default:()=>n});var l=e("./node_modules/next/dist/compiled/react/index.js"),r=e("./node_modules/classnames/index.js"),t=e.n(r),a=e("./node_modules/prop-types/index.js"),d=e.n(a),o=l.createElement;function n({className:i}){return o("svg",{className:t()("chevron-transparent",i),width:"18",height:"18",viewBox:"0 0 18 18",fill:"none",xmlns:"http://www.w3.org/2000/svg"},o("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M9 17C13.4183 17 17 13.4183 17 9C17 4.58172 13.4183 1 9 1C4.58172 1 1 4.58172 1 9C1 13.4183 4.58172 17 9 17Z",stroke:"#3061FF"}),o("path",{className:"arrow",fillRule:"evenodd",clipRule:"evenodd",d:"M7.19461 11.9307C6.93426 12.191 6.93426 12.6131 7.19461 12.8735C7.45496 13.1338 7.87707 13.1338 8.13742 12.8735L11.7733 9.23762L8.13742 5.60178C7.87707 5.34143 7.45496 5.34143 7.19461 5.60178C6.93426 5.86213 6.93426 6.28424 7.19461 6.54458L9.88765 9.23762L7.19461 11.9307Z",fill:"#3061FF"}))}n.displayName="ChevronCircleTransparent",n.defaultProps={className:null},n.propTypes={className:d().string}},"./components/providers/BrandContext.js":(x,s,e)=>{e.r(s),e.d(s,{default:()=>r});var l=e("./node_modules/next/dist/compiled/react/index.js");const r=l.createContext("news")},"./components/providers/EmbedContext.js":(x,s,e)=>{e.r(s),e.d(s,{default:()=>r});var l=e("./node_modules/next/dist/compiled/react/index.js");const r=l.createContext({isEmbed:!1,isPartner:!1,isInSpanish:!1,useLinkTarget:!1})},"./components/withErrorBoundary.js":(x,s,e)=>{e.r(s),e.d(s,{default:()=>i});var l=e("./node_modules/next/dist/compiled/react/index.js"),r=e("./node_modules/console-browserify/index.js"),t=l.createElement;class a extends l.Component{constructor(c){super(c),this.state={hasError:!1}}static getDerivedStateFromError(){return{hasError:!0}}componentDidCatch(c,_){r.error(c,_)}render(){return this.state.hasError?t("div",{className:"pv4 f2 founders-mono"},"Something went wrong. Please try again later."):this.props.children}}a.displayName="ErrorBoundary";const d=a;var o=l.createElement;const i=E=>c=>o(d,null,o(E,c))},"./helpers/isExternalUrl.js":(x,s,e)=>{e.r(s),e.d(s,{default:()=>r});const r=t=>t?!/(^[#/])|((nbcnews|today|msnbc)\.com)/.test(t):!1},"./helpers/isRelativeUrl.js":(x,s,e)=>{e.r(s),e.d(s,{default:()=>r});const r=t=>t?!/^https?:\/\/|^\/\/|^mailto:|^#/i.test(t):!1},"./helpers/isTelemundo.js":(x,s,e)=>{e.r(s),e.d(s,{default:()=>t});var l=e("./helpers/constants.js");const t=a=>a===l.BRANDS.TELEMUNDO}}]);
