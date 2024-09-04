"use strict";(globalThis.webpackChunkfirecracker=globalThis.webpackChunkfirecracker||[]).push([[9284],{"./components/DonutChart/DonutChart.js":(T,s,t)=>{t.r(s),t.d(s,{default:()=>U});var E=t("./node_modules/styled-jsx/style.js"),e=t.n(E),u=t("./node_modules/prop-types/index.js"),c=t.n(u),l=t("./node_modules/next/dist/compiled/react/index.js"),y=t("./node_modules/classnames/index.js"),N=t.n(y),L=t("./node_modules/react-i18next/dist/es/index.js"),B=t("./components/DonutChart/DonutChart.props.js"),_=l.createElement;const O=({t:P,i18n:x,values:A,label:f,className:v,chartSize:d,strokeWidth:o})=>{if(!Array.isArray(A))return null;const n=(d-o)/2,i=2*3.14*n,D=h=>h>0?(h*i/100).toFixed(2):0,m=A.some(h=>h.value),C=A.length===1&&A[0].value===100,p=x.language==="es",r=D(.5),{circles:j,dashedLines:M}=A.reduce((h,I)=>{if(!I.value)return h;const F=D(I.value);return h.circles.push(_("circle",{className:"donut-slice",cx:d/2,cy:d/2,key:I.description,r:n,stroke:I.color,strokeWidth:o,strokeDasharray:`${F} ${i}`,strokeDashoffset:-h.offset,fill:"none"})),r<F&&h.dashedLines.push(F-r,r),h.offset+=parseFloat(F),h},{circles:[],offset:0,dashedLines:[r]}),R=M.filter(h=>h>0).concat(i).join(" ");return _(l.Fragment,null,_(e(),{id:"3371568245"},[".donut-chart svg{-webkit-transform:rotate(-90deg);-ms-transform:rotate(-90deg);transform:rotate(-90deg);}",".white-rings{stroke:#fff;}",".unfilled-ring{stroke:#ccc;}",".lh-90{line-height:90%;}"]),_(e(),{id:"3042449187",dynamic:[d,d]},[`.donut-chart.__jsx-style-dynamic-selector{height:${d}px;width:${d}px;}`]),_("div",{className:"jsx-3371568245 "+e().dynamic([["3042449187",[d,d]]])+" "+(N()("donut-chart df items-center justify-center relative",v)||"")},_("svg",{viewBox:`0 0 ${d} ${d}`,className:"jsx-3371568245 "+e().dynamic([["3042449187",[d,d]]])},_("circle",{cx:d/2,cy:d/2,r:n,strokeWidth:o,fill:"none",className:"jsx-3371568245 "+e().dynamic([["3042449187",[d,d]]])+" unfilled-ring"}),j,m&&!C&&_("circle",{cx:d/2,cy:d/2,r:n,strokeWidth:o,strokeDashoffset:0,strokeDasharray:R,fill:"none",className:"jsx-3371568245 "+e().dynamic([["3042449187",[d,d]]])+" white-rings"})),_("div",{className:"jsx-3371568245 "+e().dynamic([["3042449187",[d,d]]])+" "+(N()("label tc founders-cond fw6 pa1 absolute",{"f3 lh-90 gray-100":!p,"f2 lh-none":p})||"")},P(f))))};O.propTypes={chartSize:c().number,className:c().string,label:c().string,strokeWidth:c().number,values:B.DonutSlices},O.defaultProps={chartSize:76,className:null,label:"",strokeWidth:4,values:null};const U=(0,L.withTranslation)()(O)},"./components/DonutChart/DonutChart.props.js":(T,s,t)=>{t.r(s),t.d(s,{DonutSlice:()=>u,DonutSlices:()=>c});var E=t("./node_modules/prop-types/index.js"),e=t.n(E);const u=e().shape({description:e().string,color:e().string,value:e().number}),c=e().arrayOf(u)},"./components/Link.js":(T,s,t)=>{t.r(s),t.d(s,{default:()=>f});var E=t("./node_modules/@babel/runtime/helpers/esm/extends.js"),e=t("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),u=t("./node_modules/next/dist/compiled/react/index.js"),c=t("./node_modules/prop-types/index.js"),l=t.n(c),y=t("./node_modules/classnames/index.js"),N=t.n(y),L=t("./helpers/isExternalUrl.js"),B=t("./components/providers/EmbedContext.js"),_=t("./components/providers/BrandContext.js"),O=t("./helpers/isRelativeUrl.js"),U=t("./helpers/isTelemundo.js");const P=["linkText","children","accessibleOnly","href","className","data-icid"];var x=u.createElement;const A=v=>{let{linkText:d,children:o,accessibleOnly:a,href:n,className:i,"data-icid":D}=v,m=(0,e.default)(v,P);const{isEmbed:C,isPartner:p,isInSpanish:r,useLinkTarget:j}=(0,u.useContext)(B.default),M=(0,u.useContext)(_.default),R=N()({"show-on-tab":a},i),h=C||p&&r,I=p&&!r;(0,L.default)(n)&&Object.assign(m,{rel:"nofollow"}),j&&m?.target||(h&&Object.assign(m,{target:"_parent"}),I&&Object.assign(m,{target:"_blank"}));const F=(0,U.default)(M)&&(0,O.default)(n)?`https://www.nbcnews.com${n}`:n,X={[p?"data-cid":"data-icid"]:D};return x("a",(0,E.default)({},m,{href:F,className:R},X),d||o)};A.displayName="Link",A.propTypes={href:l().string,linkText:l().string,className:l().string,accessibleOnly:l().bool},A.defaultProps={href:null,linkText:null,className:null,accessibleOnly:!1};const f=A},"./components/NationalCartogram/NationalCartogram.js":(T,s,t)=>{t.r(s),t.d(s,{default:()=>D});var E=t("./node_modules/styled-jsx/style.js"),e=t.n(E),u=t("./node_modules/prop-types/index.js"),c=t.n(u),l=t("./node_modules/next/dist/compiled/react/index.js"),y=t("./node_modules/next/amp.js"),N=t("./node_modules/classnames/index.js"),L=t.n(N);const B=JSON.parse('["ME","AK","VT","NH","WA","ID","MT","ND","MN","MI","NY","MA","RI","OR","UT","WY","SD","IA","WI","OH","PA","NJ","CT","CA","NV","CO","NE","IL","IN","WV","VA","MD","DE","AZ","NM","KS","MO","KY","TN","SC","NC","DC","HI","OK","LA","AR","MS","AL","GA","TX","FL"]');var _=t("./components/hooks/useWindowSize.js"),O=t("./components/Tooltip.js"),U=t("./node_modules/d3-format/src/defaultLocale.js"),P=t("./components/ScrollableTable/ColorSquare/index.js"),x=t("./components/Link.js"),A=t("./components/NationalCartogram/NationalCartogram.props.js"),f=l.createElement;const v=l.forwardRef(({data:m,electionSeason:C,activeFilter:p},r)=>{const{stateName:j,comparison:M,resultsUrl:R,ballotReturnedData:h}=m||{},I=K=>`${(Math.round(K*100)/100).toFixed(1)}%`,F=(0,U.format)(","),X=h?.[p]?.values,Y=M?.[C]?.earlyAbsentee;return f(l.Fragment,null,f(e(),{id:"2176287844"},[".donut-tooltip__header{border-bottom:dashed 1px #ccc;min-width:300px;}",".closing-icon{right:0;top:0;}"]),f("div",{ref:r,className:"jsx-2176287844 donut-tooltip"},f(x.default,{href:R,className:"db no-underline"},f("div",{className:"jsx-2176287844 donut-tooltip__header df justify-between items-baseline pb2"},f("span",{className:"jsx-2176287844 uppercase founders-cond f6 gray-10 mr2 black"},j),f("span",{className:"jsx-2176287844 founders-mono f4 gray-80 self-end"},F(Y),"\xA0ballots")),f("div",{className:"jsx-2176287844 donut-tooltip__body mt5"},Array.isArray(X)&&X.map(K=>f("div",{key:K.description,className:"jsx-2176287844 df aligncenter justify-between mt2"},f("div",{className:"jsx-2176287844 df items-center"},f(P.default,{color:K.color,width:16}),f("span",{className:"jsx-2176287844 publico-txt f4 gray-80 ml2"},K.description)),f("span",{className:"jsx-2176287844 black f5 founders-cond self-end"},I(K.value))))))))});v.propTypes={activeFilter:c().number,electionSeason:c().string,data:A.NationalCartogramClientData},v.defaultProps={activeFilter:0,electionSeason:"2022",data:null};const d=v;var o=t("./components/DonutChart/DonutChart.js");const a=o.default;var n=l.createElement;const i=({activeFilter:m,enableDC:C,nationalData:p,electionSeason:r})=>{let j=B;C||(j=B.filter(g=>g!=="DC"));const{width:M}=(0,_.default)(),{0:R,1:h}=(0,l.useState)(null),{0:I,1:F}=(0,l.useState)(!1),{0:X,1:Y}=(0,l.useState)({}),K=(0,l.useRef)(null),G=(0,y.useAmp)(),V=()=>M<758;function J(g){let W=!1,b=!1;try{W=g.relatedTarget&&K.current&&K.current.contains(g.relatedTarget),b=!!g.relatedTarget?.closest(".us-cartogram__grid__item")}catch{}W&&V()||b&&V()||setTimeout(()=>{F(!1),Y({})},0)}const Q={modifiers:[{name:"offset",options:{offset:[0,25]}}]},z=g=>{const W={top:g.clientY,right:g.clientX,bottom:g.clientY,left:g.clientX,height:0,width:0};return{getBoundingClientRect(){return W}}},w=g=>{const W=z(g);h(W)},k=g=>{V()&&h(g.target)};function Z(g,W){return Y(W),F(!0),g.clientX&&g.clientY?w(g):k(g)}function q(g){V()&&!G&&g.preventDefault()}const tt=j.some(g=>{const W=p[g]||{},{values:b}=W;return!Array.isArray(b)||!b.length});return n(l.Fragment,null,n(e(),{id:"545442312"},[".us-cartogram__grid{display:grid;grid-template-columns:repeat(11,1fr);grid-template-rows:repeat(8,1fr);grid-gap:3px;max-width:800px;}",".us-cartogram__grid__item[data-attr='ME']{grid-column-start:11;}",".us-cartogram__grid__item[data-attr='VT']{grid-column-start:10;}",".us-cartogram__grid__item[data-attr='MI']{grid-column-start:7;}",".us-cartogram__grid__item[data-attr='NY']{grid-column-start:9;}",".us-cartogram__grid__item[data-attr='CA']{grid-column-start:1;}",".us-cartogram__grid__item[data-attr='AZ']{grid-column-start:2;}",".us-cartogram__grid__item[data-attr='HI']{grid-column-start:1;}",".us-cartogram__grid__item[data-attr='OK']{grid-column-start:4;}",".us-cartogram__grid__item[data-attr='TX']{grid-column-start:4;}",".us-cartogram__grid__item[data-attr='FL']{grid-column-start:9;}",".us-cartogram__no-data{grid-row-start:8;grid-column:5 / span 4;-webkit-align-self:center;-ms-flex-item-align:center;align-self:center;}",".us-cartogram__grid__item{justify-self:stretch;max-width:64px;}",".us-cartogram__grid .us-cartogram__grid__item .donut-chart,.us-cartogram__grid .us-cartogram__grid__item .donut-chart svg{width:100%;height:100%;}","@media screen and (min-width:758px){.us-cartogram__grid{grid-gap:6px;}.us-cartogram__grid .us-cartogram__grid__item .label{font-size:20px;}}"]),!G&&I&&n(O.default,{id:"national-cartogram__tooltip","data-testid":"national-cartogram__tooltip",hoveredElement:R,popperOptions:Q},n(d,{activeFilter:m,electionSeason:r,ref:K,data:X})),n("div",{"data-testid":"us-cartogram__grid",className:"jsx-545442312 us-cartogram__grid w-100"},j.map(g=>{const W=p[g]||{},{resultsUrl:b}=W,H=W?.ballotReturnedData?.[m]?.values??[],$=!Array.isArray(H)||!H.length,et=`${g}${$?"*":""}`;return n(x.default,{className:L()("us-cartogram__grid__item db",{"no-data":$}),"data-attr":g,key:`us-cartogram__grid--${g}`,onMouseOver:$?null:S=>Z(S,W),onMouseLeave:$?null:S=>J(S),onClick:$?null:S=>q(S),onFocus:$?null:S=>Z(S,W),onBlur:$?null:S=>J(S),href:b},n(a,{strokeWidth:6,label:et,chartSize:64,values:H}))}),tt&&n("div",{className:"jsx-545442312 us-cartogram__no-data founders-mono f1 lh-copy tc mh1"},"*Data not available")))};i.propTypes={activeFilter:c().number,electionSeason:c().string,enableDC:c().bool,nationalData:c().objectOf(A.NationalCartogramClientData)},i.defaultProps={activeFilter:0,electionSeason:"2022",enableDC:!1,nationalData:{}};const D=i},"./components/NationalCartogram/NationalCartogram.props.js":(T,s,t)=>{t.r(s),t.d(s,{NationalCartogramBallotData:()=>l,NationalCartogramClientData:()=>y,NationalCartogramComparison:()=>c});var E=t("./node_modules/prop-types/index.js"),e=t.n(E),u=t("./components/DonutChart/DonutChart.props.js");const c=e().shape({absentee:e().number,ballotRequests:e().number,early:e().number,earlyAbsentee:e().number,ballotRequestsPercentChange:e().number,earlyAbsenteePercentChange:e().number}),l=e().shape({name:e().string,values:u.DonutSlices}),y=e().shape({ballotReturnedData:e().arrayOf(l),ballotSentData:e().arrayOf(l),comparison:e().objectOf(c),stateName:e().string,totalBallots:e().number,resultsUrl:e().string})},"./components/ScrollableTable/ColorSquare/index.js":(T,s,t)=>{t.r(s),t.d(s,{default:()=>L});var E=t("./node_modules/styled-jsx/style.js"),e=t.n(E),u=t("./node_modules/next/dist/compiled/react/index.js"),c=t("./node_modules/classnames/index.js"),l=t.n(c),y=u.createElement;const L=({bgClass:B,color:_,width:O=15,text:U})=>y(u.Fragment,null,y(e(),{id:"15657509",dynamic:[B?"":`background: ${_||"#ebebeb"};`,O,O,O]},[`div.__jsx-style-dynamic-selector{${B?"":`background: ${_||"#ebebeb"};`} height:${O}px;width:${O}px;line-height:${O}px;}`]),y("div",{className:e().dynamic([["15657509",[B?"":`background: ${_||"#ebebeb"};`,O,O,O]]])+" "+(l()(B,"color-square f1 flex-shrink-0 dib tc white")||"")},U))},"./components/Tooltip.js":(T,s,t)=>{t.r(s),t.d(s,{default:()=>d});var E=t("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),e=t("./node_modules/@babel/runtime/helpers/esm/extends.js"),u=t("./node_modules/next/dist/compiled/react/index.js"),c=t("./node_modules/prop-types/index.js"),l=t.n(c),y=t("./node_modules/next/dist/compiled/react-dom/index.js"),N=t("./node_modules/react-popper/lib/esm/usePopper.js"),L=t("./node_modules/classnames/index.js"),B=t.n(L);function _(o){const a=document.createElement("div");return a.setAttribute("id",o),a}function O(o){document.body.insertBefore(o,document.body.lastElementChild.nextElementSibling)}function U(o){const a=(0,u.useRef)(null);(0,u.useEffect)(function(){const D=document.querySelector(`#${o}`),m=D||_(o);return D||O(m),m.appendChild(a.current),function(){a.current.remove(),m.childNodes.length===-1&&m.remove()}},[]);function n(){return a.current||(a.current=document.createElement("div")),a.current}return n()}const P=U,x=["id","children","hoveredElement","popperOptions"];var A=u.createElement;const f=({children:o,refElement:a,popperOptions:n})=>{const[i,D]=u.useState(null),{styles:m,attributes:C}=(0,N.usePopper)(a,i,n);return A("div",(0,e.default)({className:B()("tooltip bg-white b-gray-40 b-solid bw-1px",n.anchored?"pa4 w-100":"pa2"),ref:D,style:m.popper},C.popper),o)};f.displayName="TooltipWrapper";const v=o=>{let{id:a,children:n,hoveredElement:i,popperOptions:D}=o,m=(0,E.default)(o,x);const C=P(a);return typeof window<"u"&&window.document&&window.document.createElement?(0,y.createPortal)(A(f,(0,e.default)({refElement:i,popperOptions:D},m),n),C):null};v.propTypes={children:l().node,hoveredElement:l().objectOf(l().any),popperOptions:l().objectOf(l().any)},v.defaultProps={children:null,hoveredElement:null,popperOptions:{}};const d=v},"./components/hooks/useWindowSize.js":(T,s,t)=>{t.r(s),t.d(s,{default:()=>l});var E=t("./node_modules/next/dist/compiled/react/index.js"),e=t("./node_modules/lodash.debounce/index.js"),u=t.n(e);function c({trailing:y=!1}={}){const{0:N,1:L}=(0,E.useState)({width:void 0,height:void 0});return(0,E.useEffect)(()=>{const B={leading:!0,trailing:y},_=u()(()=>{L({width:window.innerWidth,height:window.innerHeight})},200,B);return window.addEventListener("resize",_),_(),()=>window.removeEventListener("resize",_)},[]),N}const l=c},"./components/providers/BrandContext.js":(T,s,t)=>{t.r(s),t.d(s,{default:()=>e});var E=t("./node_modules/next/dist/compiled/react/index.js");const e=E.createContext("news")},"./components/providers/EmbedContext.js":(T,s,t)=>{t.r(s),t.d(s,{default:()=>e});var E=t("./node_modules/next/dist/compiled/react/index.js");const e=E.createContext({isEmbed:!1,isPartner:!1,isInSpanish:!1,useLinkTarget:!1})},"./data/partyColors.js":(T,s,t)=>{t.r(s),t.d(s,{default:()=>E});const E={default:{dem:"#0471E6",rep:"#DE3535",grn:"#7A7A7A",con:"#7A7A7A",rp:"#7A7A7A",wf:"#7A7A7A",ind:"#595959",lib:"#A99369",oth:"#7A7A7A",weq:"black",yes:"#9E0084",no:"#2AA78B",ballotyes:"#9E0084",ballotno:"#2AA78B",iap:"salmon",npa:"brown",non:"green",for:"green",agn:"red",uncalled:"#e6e6e6",default:"#595959",other:"#7A7A7A",undecided:"#EBEBEB"},2022:{dem:"#009AF4",rep:"#D42F37",yes:"#9E0084",no:"#2AA78B",uncalled:"#e6e6e6",default:"#5C5C5C",other:"#7A7A7A",undecided:"#EBEBEB"},2023:{dem:"#009AF4",rep:"#D42F37",yes:"#F96419",no:"#645FAA",uncalled:"#e6e6e6",default:"#5C5C5C",other:"#7A7A7A",undecided:"#EBEBEB"},2024:{dem:"#0487E6",rep:"#DD2929",yes:"#F96419",no:"#645FAA",uncalled:"#BEBEBE",default:"#959595",other:"#7A7A7A",undecided:"#BEBEBE"}}},"./helpers/getPartyColor.js":(T,s,t)=>{t.r(s),t.d(s,{default:()=>U});var E=t("./node_modules/lodash.get/index.js"),e=t.n(E),u=t("./data/partyColors.js"),c=t("./data/primaryColors.json"),l=t("./helpers/constants.js"),y=t("./helpers/isPrimaryElection.js"),N=t("./server/v2/format/formatNationalRacesToWatchData.js");const L=["dem","rep"],B=["ind","npa","npt"],_=({normalizedParty:P,order:x,officeCode:A,useHousePrimaryColors:f,useFullColorPalette:v,electionSeason:d,electionTypeCode:o,stateAbbr:a})=>{const[n]=c.default;if(!P||typeof P!="string"||!x||typeof x!="number"||!A||typeof A!="string")return n;const i=l.OFFICE_NAMES[A]||"";let D="other",m="other";v&&P==="nonpartisan"?m=A:!v&&i.includes("president")?D="president":i==="house"&&(D=f&&!v?"house":"other",m=v?"other":"house");const C=e()(c,["season",d,A,a,o]),p=e()(c,["season",d,m,P]),r=e()(c,[D,P]),j=x-1,M=e()(C||p||r,[j]),R=e()(c,["season",d,m,"default",P]);return M||R||n},U=({party:P,order:x,officeCode:A,electionSeason:f,electionType:v,electionTypeCode:d="",stateAbbr:o,onlySupportMajorParties:a=!0,useHousePrimaryColors:n=!1,useFullColorPalette:i=!1,isGain:D})=>{const{default:{default:m}}=u.default,p=f&&e()(u.default,[f,"default"])||m;if(!P||typeof P!="string")return p;let r=P.toLowerCase();r==="gop"?r="rep":B.includes(r)&&(r="nonpartisan");const j=L.includes(r);if(D&&l.ELECTION_TYPE.GENERAL===d&&f>=2024&&j)return N.MAP_COLORS_FLIP_BY_PARTY[r];if((0,y.default)(d)||v===l.ELECTION_TYPE.PRIMARY||i)return _({electionTypeCode:d,normalizedParty:r,order:x,officeCode:A,useHousePrimaryColors:n,useFullColorPalette:i,electionSeason:f,stateAbbr:o});if(a&&!L.includes(r))return p;const R=f&&e()(u.default,[f,r]),h=e()(u.default,["default",r],null);return R||h||p}},"./helpers/isExternalUrl.js":(T,s,t)=>{t.r(s),t.d(s,{default:()=>e});const e=u=>u?!/(^[#/])|((nbcnews|today|msnbc)\.com)/.test(u):!1},"./helpers/isPrimaryElection.js":(T,s,t)=>{t.r(s),t.d(s,{default:()=>c});var E=t("./helpers/constants.js"),e=t("./node_modules/console-browserify/index.js");const c=(l="")=>typeof l!="string"?(e.warn("isPrimaryElection expects a type of string"),!1):E.PRIMARY_ELECTION_TYPE_CODES.includes(l)},"./helpers/isRelativeUrl.js":(T,s,t)=>{t.r(s),t.d(s,{default:()=>e});const e=u=>u?!/^https?:\/\/|^\/\/|^mailto:|^#/i.test(u):!1},"./helpers/isTelemundo.js":(T,s,t)=>{t.r(s),t.d(s,{default:()=>u});var E=t("./helpers/constants.js");const u=c=>c===E.BRANDS.TELEMUNDO},"./server/v2/config/earlyVotingOrder.js":(T,s,t)=>{t.r(s),t.d(s,{default:()=>e});const e=["party registration","age","gender","vote type"]},"./server/v2/format/formatEarlyVoteData.js":(T,s,t)=>{t.r(s),t.d(s,{default:()=>d});var E=t("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),e=t("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),u=t("./node_modules/lodash.get/index.js"),c=t.n(u),l=t("./data/usStates.js"),y=t("./helpers/stateNameUtilities.js"),N=t("./helpers/determineOfficeType.js"),L=t("./helpers/constants.js"),B=t("./helpers/getPartyColor.js"),_=t("./server/v2/config/earlyVotingOrder.js");const O=["ballotSentData","ballotReturnedData"];function U(o,a){var n=Object.keys(o);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(o);a&&(i=i.filter(function(D){return Object.getOwnPropertyDescriptor(o,D).enumerable})),n.push.apply(n,i)}return n}function P(o){for(var a=1;a<arguments.length;a++){var n=arguments[a]!=null?arguments[a]:{};a%2?U(Object(n),!0).forEach(function(i){(0,E.default)(o,i,n[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(o,Object.getOwnPropertyDescriptors(n)):U(Object(n)).forEach(function(i){Object.defineProperty(o,i,Object.getOwnPropertyDescriptor(n,i))})}return o}const x={dem:"#0471E6",rep:"#DE3535",gop:"#DE3535",other:"#ccc",unknown:"#ccc","18-29":"#DF5209","30-39":"#C00594","40-49":"#84AD48","50-64":"#EEB900","65 or over":"#14866D",men:"#05710F",women:"#645FAA","mail-in":"#F96419","in-person":"#DB0E9C"},A=o=>a=>{if(!a&&!a.values)return a;let n=()=>!0;const i=a.name.toLowerCase(),D=i==="party registration",m=i==="age";return i==="vote type"?n=p=>p.value>0:a.values.every(({value:p})=>p<=0)&&(n=()=>!1),a.values=a.values.filter(n).map(p=>{let{description:r}=p;const j=r.toLowerCase();let M=x[j]||x.other;return D&&(M=(0,B.default)({party:r,electionSeason:o,onlySupportMajorParties:!0})),r==="Dem"&&(r="DEM"),r==="Rep"&&(r="GOP"),m&&j==="other"&&(r="Unknown"),{value:p.value,color:M,description:r}}),a},f=(o,a)=>_.default.indexOf(o.name.toLowerCase())-_.default.indexOf(a.name.toLowerCase());function v(o,a,n=!1){const i=n?()=>!0:p=>p.values&&p.values.length,{ballotSentData:D,ballotReturnedData:m}=o,C=(0,e.default)(o,O);return C.ballotSentData=D?D.map(A(a)).filter(i).sort(f):[],C.ballotReturnedData=m?m.map(A(a)).filter(i).sort(f):[],C}function d({earlyVoteData:o,stateAbbr:a,electionSeason:n,useAllowlist:i=!0,allowlist:D=[]}){if(n>=2022&&a==="US"){const m=l.default.reduce((r,{abbr:j})=>{const M=(0,y.getStateNameSlugByStateAbbreviation)(j),R=(0,N.getStateOfficeLink)({electionSeason:n,electionType:L.ELECTION_TYPE.GENERAL,stateNameSlug:M});return r[j]={stateName:(0,y.getStateNameByStateAbbreviation)(j),totalBallots:0,resultsUrl:!i||D.includes(R)?R:null},r},{});let C=null;const p=Array.isArray(o.data)?o.data.reduce((r,j)=>{const M=Object.entries(j);if(!M.length)return r;const[R,h]=M[0];if(!h)return r;const I=v(h,n,!0);return R==="US"?C=I:r[R]=P(P(P({},r[R]),I),{},{totalBallots:c()(I,"comparison.earlyAbsentee",0)}),r},m):m;return{national:C,states:p,lastModified:o.lastModified||null}}return v(o,n)}},"./data/primaryColors.json":T=>{T.exports=JSON.parse('{"president":{"dem":["#3899E7","#A861B5","#84AD48","#DD7026","#697BB6","#3A766F","#6C4682","#F1A410","#89D0E0","#414E7D","#8DB0D9","#8D438B","#738754","#90E0AD","#B8983B","#46A695"],"rep":["#DE3535","#750C0C","#CD7575","#A80101","#9B7777","#470000"]},"house":{"dem":["#308CEF","#C00594","#84AD48","#F96419","#7D78C3","#14866D","#730069","#EEB900","#50CDB1","#68A9EF","#113F75"],"rep":["#DE3535","#6D0000","#EEB8B8","#BB2323","#EE6868","#952727"]},"other":{"dem":["#388FC2","#213F64","#839EBE","#2D5D98","#5F7887","#011521","#285F7F","#5D8CA9","#3A719C","#1F4C83","#3F82AA","#05334F"],"rep":["#DE3535","#750C0C","#CD7575","#A80101","#9B7777","#470000"]},"default":["#595959"],"season":{"2022":{"house":{"dem":[],"rep":[],"default":{"rep":"#D42F37","dem":"#009AF4"}},"other":{"dem":["#009AF4","#8567E6","#20A4A8","#1F69AB","#8A8FBF"],"rep":["#D42F37","#D77F2D","#A23D69","#BD84A3","#CE5883"],"default":{"rep":"#5C5C5C","dem":"#5C5C5C","yes":"#9E0084","no":"#2AA78B"}}},"2023":{"B":{"WI":{"G":["#CD7575","#6873AE"]}},"M":{"CH":{"W":["#5F7887","#839EBE"]}}},"2024":{"other":{"dem":["#0487E6","#034B8F","#00CBAC","#8370F1","#79AF2D","#F1A410","#278685","#8D43AB","#73718B","#8DB0D9","#B89846","#80DAEE","#738754","#90EDAD","#41D7ED"],"rep":["#DD2929","#8F1B1B","#F69696","#E38B39","#B84C96","#FF6000","#9F8383","#BC8604","#DEB703","#E26D99","#D8A084","#877354","#470000","#BB37FF","#8A3752"],"default":{"rep":"#959595","dem":"#959595","yes":"#F96419","no":"#645FAA","other":"#959595"}}}}}')}}]);
