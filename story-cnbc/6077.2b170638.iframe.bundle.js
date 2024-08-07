"use strict";(globalThis.webpackChunkfirecracker=globalThis.webpackChunkfirecracker||[]).push([[6077],{"./components/DonutChart/DonutChart.js":(j,o,e)=>{e.r(o),e.d(o,{default:()=>T});var i=e("./node_modules/styled-jsx/style.js"),n=e.n(i),r=e("./node_modules/prop-types/index.js"),c=e.n(r),m=e("./node_modules/next/dist/compiled/react/index.js"),C=e("./node_modules/classnames/index.js"),N=e.n(C),S=e("./node_modules/react-i18next/dist/es/index.js"),y=e("./components/DonutChart/DonutChart.props.js"),d=m.createElement;const O=({t:M,i18n:b,values:A,label:f,className:_,chartSize:u,strokeWidth:l})=>{if(!Array.isArray(A))return null;const s=(u-l)/2,a=2*3.14*s,E=v=>v>0?(v*a/100).toFixed(2):0,D=A.some(v=>v.value),p=A.length===1&&A[0].value===100,P=b.language==="es",g=E(.5),{circles:B,dashedLines:R}=A.reduce((v,L)=>{if(!L.value)return v;const x=E(L.value);return v.circles.push(d("circle",{className:"donut-slice",cx:u/2,cy:u/2,key:L.description,r:s,stroke:L.color,strokeWidth:l,strokeDasharray:`${x} ${a}`,strokeDashoffset:-v.offset,fill:"none"})),g<x&&v.dashedLines.push(x-g,g),v.offset+=parseFloat(x),v},{circles:[],offset:0,dashedLines:[g]}),F=R.filter(v=>v>0).concat(a).join(" ");return d(m.Fragment,null,d(n(),{id:"3371568245"},[".donut-chart svg{-webkit-transform:rotate(-90deg);-ms-transform:rotate(-90deg);transform:rotate(-90deg);}",".white-rings{stroke:#fff;}",".unfilled-ring{stroke:#ccc;}",".lh-90{line-height:90%;}"]),d(n(),{id:"3042449187",dynamic:[u,u]},[`.donut-chart.__jsx-style-dynamic-selector{height:${u}px;width:${u}px;}`]),d("div",{className:"jsx-3371568245 "+n().dynamic([["3042449187",[u,u]]])+" "+(N()("donut-chart df items-center justify-center relative",_)||"")},d("svg",{viewBox:`0 0 ${u} ${u}`,className:"jsx-3371568245 "+n().dynamic([["3042449187",[u,u]]])},d("circle",{cx:u/2,cy:u/2,r:s,strokeWidth:l,fill:"none",className:"jsx-3371568245 "+n().dynamic([["3042449187",[u,u]]])+" unfilled-ring"}),B,D&&!p&&d("circle",{cx:u/2,cy:u/2,r:s,strokeWidth:l,strokeDashoffset:0,strokeDasharray:F,fill:"none",className:"jsx-3371568245 "+n().dynamic([["3042449187",[u,u]]])+" white-rings"})),d("div",{className:"jsx-3371568245 "+n().dynamic([["3042449187",[u,u]]])+" "+(N()("label tc founders-cond fw6 pa1 absolute",{"f3 lh-90 gray-100":!P,"f2 lh-none":P})||"")},M(f))))};O.propTypes={chartSize:c().number,className:c().string,label:c().string,strokeWidth:c().number,values:y.DonutSlices},O.defaultProps={chartSize:76,className:null,label:"",strokeWidth:4,values:null};const T=(0,S.withTranslation)()(O)},"./components/DonutChart/DonutChart.props.js":(j,o,e)=>{e.r(o),e.d(o,{DonutSlice:()=>r,DonutSlices:()=>c});var i=e("./node_modules/prop-types/index.js"),n=e.n(i);const r=n().shape({description:n().string,color:n().string,value:n().number}),c=n().arrayOf(r)},"./components/Link.js":(j,o,e)=>{e.r(o),e.d(o,{default:()=>_});var i=e("./node_modules/@babel/runtime/helpers/esm/extends.js"),n=e("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),r=e("./node_modules/next/dist/compiled/react/index.js"),c=e("./node_modules/prop-types/index.js"),m=e.n(c),C=e("./node_modules/classnames/index.js"),N=e.n(C),S=e("./helpers/isExternalUrl.js"),y=e("./components/providers/EmbedContext.js"),d=e("./components/providers/BrandContext.js");const T=u=>u?!/^https?:\/\/|^\/\/|^mailto:/i.test(u):!1;var M=e("./helpers/isTelemundo.js");const b=["linkText","children","accessibleOnly","href","className","data-icid"];var A=r.createElement;const f=u=>{let{linkText:l,children:t,accessibleOnly:s,href:a,className:E,"data-icid":D}=u,p=(0,n.default)(u,b);const{isEmbed:P,isPartner:g,isInSpanish:B,useLinkTarget:R}=(0,r.useContext)(y.default),F=(0,r.useContext)(d.default),v=N()({"show-on-tab":s},E),L=P||g&&B,x=g&&!B;(0,S.default)(a)&&Object.assign(p,{rel:"nofollow"}),R&&p?.target||(L&&Object.assign(p,{target:"_parent"}),x&&Object.assign(p,{target:"_blank"}));const Y=(0,M.default)(F)&&T(a)?`https://www.nbcnews.com${a}`:a,V={[g?"data-cid":"data-icid"]:D};return A("a",(0,i.default)({},p,{href:Y,className:v},V),l||t)};f.displayName="Link",f.propTypes={href:m().string,linkText:m().string,className:m().string,accessibleOnly:m().bool},f.defaultProps={href:null,linkText:null,className:null,accessibleOnly:!1};const _=f},"./components/NationalCartogram/NationalCartogram.js":(j,o,e)=>{e.r(o),e.d(o,{default:()=>E});var i=e("./node_modules/styled-jsx/style.js"),n=e.n(i),r=e("./node_modules/prop-types/index.js"),c=e.n(r),m=e("./node_modules/next/dist/compiled/react/index.js"),C=e("./node_modules/next/amp.js"),N=e("./node_modules/classnames/index.js"),S=e.n(N);const y=JSON.parse('["ME","AK","VT","NH","WA","ID","MT","ND","MN","MI","NY","MA","RI","OR","UT","WY","SD","IA","WI","OH","PA","NJ","CT","CA","NV","CO","NE","IL","IN","WV","VA","MD","DE","AZ","NM","KS","MO","KY","TN","SC","NC","DC","HI","OK","LA","AR","MS","AL","GA","TX","FL"]');var d=e("./components/hooks/useWindowSize.js"),O=e("./components/Tooltip.js"),T=e("./node_modules/d3-format/src/defaultLocale.js"),M=e("./components/ScrollableTable/ColorSquare/index.js"),b=e("./components/Link.js"),A=e("./components/NationalCartogram/NationalCartogram.props.js"),f=m.createElement;const _=m.forwardRef(({data:D,electionSeason:p,activeFilter:P},g)=>{const{stateName:B,comparison:R,resultsUrl:F,ballotReturnedData:v}=D||{},L=W=>`${(Math.round(W*100)/100).toFixed(1)}%`,x=(0,T.format)(","),Y=v?.[P]?.values,V=R?.[p]?.earlyAbsentee;return f(m.Fragment,null,f(n(),{id:"2176287844"},[".donut-tooltip__header{border-bottom:dashed 1px #ccc;min-width:300px;}",".closing-icon{right:0;top:0;}"]),f("div",{ref:g,className:"jsx-2176287844 donut-tooltip"},f(b.default,{href:F,className:"db no-underline"},f("div",{className:"jsx-2176287844 donut-tooltip__header df justify-between items-baseline pb2"},f("span",{className:"jsx-2176287844 uppercase founders-cond f6 gray-10 mr2 black"},B),f("span",{className:"jsx-2176287844 founders-mono f4 gray-80 self-end"},x(V),"\xA0ballots")),f("div",{className:"jsx-2176287844 donut-tooltip__body mt5"},Array.isArray(Y)&&Y.map(W=>f("div",{key:W.description,className:"jsx-2176287844 df aligncenter justify-between mt2"},f("div",{className:"jsx-2176287844 df items-center"},f(M.default,{color:W.color,width:16}),f("span",{className:"jsx-2176287844 publico-txt f4 gray-80 ml2"},W.description)),f("span",{className:"jsx-2176287844 black f5 founders-cond self-end"},L(W.value))))))))});_.propTypes={activeFilter:c().number,electionSeason:c().string,data:A.NationalCartogramClientData},_.defaultProps={activeFilter:0,electionSeason:"2022",data:null};const u=_;var l=e("./components/DonutChart/DonutChart.js");const t=l.default;var s=m.createElement;const a=({activeFilter:D,enableDC:p,nationalData:P,electionSeason:g})=>{let B=y;p||(B=y.filter(h=>h!=="DC"));const{width:R}=(0,d.default)(),{0:F,1:v}=(0,m.useState)(null),{0:L,1:x}=(0,m.useState)(!1),{0:Y,1:V}=(0,m.useState)({}),W=(0,m.useRef)(null),X=(0,C.useAmp)(),$=()=>R<758;function G(h){let I=!1,U=!1;try{I=h.relatedTarget&&W.current&&W.current.contains(h.relatedTarget),U=!!h.relatedTarget?.closest(".us-cartogram__grid__item")}catch{}I&&$()||U&&$()||setTimeout(()=>{x(!1),V({})},0)}const J={modifiers:[{name:"offset",options:{offset:[0,25]}}]},Z=h=>{const I={top:h.clientY,right:h.clientX,bottom:h.clientY,left:h.clientX,height:0,width:0};return{getBoundingClientRect(){return I}}},Q=h=>{const I=Z(h);v(I)},k=h=>{$()&&v(h.target)};function w(h,I){return V(I),x(!0),h.clientX&&h.clientY?Q(h):k(h)}function q(h){$()&&!X&&h.preventDefault()}const ee=B.some(h=>{const I=P[h]||{},{values:U}=I;return!Array.isArray(U)||!U.length});return s(m.Fragment,null,s(n(),{id:"545442312"},[".us-cartogram__grid{display:grid;grid-template-columns:repeat(11,1fr);grid-template-rows:repeat(8,1fr);grid-gap:3px;max-width:800px;}",".us-cartogram__grid__item[data-attr='ME']{grid-column-start:11;}",".us-cartogram__grid__item[data-attr='VT']{grid-column-start:10;}",".us-cartogram__grid__item[data-attr='MI']{grid-column-start:7;}",".us-cartogram__grid__item[data-attr='NY']{grid-column-start:9;}",".us-cartogram__grid__item[data-attr='CA']{grid-column-start:1;}",".us-cartogram__grid__item[data-attr='AZ']{grid-column-start:2;}",".us-cartogram__grid__item[data-attr='HI']{grid-column-start:1;}",".us-cartogram__grid__item[data-attr='OK']{grid-column-start:4;}",".us-cartogram__grid__item[data-attr='TX']{grid-column-start:4;}",".us-cartogram__grid__item[data-attr='FL']{grid-column-start:9;}",".us-cartogram__no-data{grid-row-start:8;grid-column:5 / span 4;-webkit-align-self:center;-ms-flex-item-align:center;align-self:center;}",".us-cartogram__grid__item{justify-self:stretch;max-width:64px;}",".us-cartogram__grid .us-cartogram__grid__item .donut-chart,.us-cartogram__grid .us-cartogram__grid__item .donut-chart svg{width:100%;height:100%;}","@media screen and (min-width:758px){.us-cartogram__grid{grid-gap:6px;}.us-cartogram__grid .us-cartogram__grid__item .label{font-size:20px;}}"]),!X&&L&&s(O.default,{id:"national-cartogram__tooltip","data-testid":"national-cartogram__tooltip",hoveredElement:F,popperOptions:J},s(u,{activeFilter:D,electionSeason:g,ref:W,data:Y})),s("div",{"data-testid":"us-cartogram__grid",className:"jsx-545442312 us-cartogram__grid w-100"},B.map(h=>{const I=P[h]||{},{resultsUrl:U}=I,H=I?.ballotReturnedData?.[D]?.values??[],z=!Array.isArray(H)||!H.length,te=`${h}${z?"*":""}`;return s(b.default,{className:S()("us-cartogram__grid__item db",{"no-data":z}),"data-attr":h,key:`us-cartogram__grid--${h}`,onMouseOver:z?null:K=>w(K,I),onMouseLeave:z?null:K=>G(K),onClick:z?null:K=>q(K),onFocus:z?null:K=>w(K,I),onBlur:z?null:K=>G(K),href:U},s(t,{strokeWidth:6,label:te,chartSize:64,values:H}))}),ee&&s("div",{className:"jsx-545442312 us-cartogram__no-data founders-mono f1 lh-copy tc mh1"},"*Data not available")))};a.propTypes={activeFilter:c().number,electionSeason:c().string,enableDC:c().bool,nationalData:c().objectOf(A.NationalCartogramClientData)},a.defaultProps={activeFilter:0,electionSeason:"2022",enableDC:!1,nationalData:{}};const E=a},"./components/NationalCartogram/NationalCartogram.props.js":(j,o,e)=>{e.r(o),e.d(o,{NationalCartogramBallotData:()=>m,NationalCartogramClientData:()=>C,NationalCartogramComparison:()=>c});var i=e("./node_modules/prop-types/index.js"),n=e.n(i),r=e("./components/DonutChart/DonutChart.props.js");const c=n().shape({absentee:n().number,ballotRequests:n().number,early:n().number,earlyAbsentee:n().number,ballotRequestsPercentChange:n().number,earlyAbsenteePercentChange:n().number}),m=n().shape({name:n().string,values:r.DonutSlices}),C=n().shape({ballotReturnedData:n().arrayOf(m),ballotSentData:n().arrayOf(m),comparison:n().objectOf(c),stateName:n().string,totalBallots:n().number,resultsUrl:n().string})},"./components/ScrollableTable/ColorSquare/index.js":(j,o,e)=>{e.r(o),e.d(o,{default:()=>S});var i=e("./node_modules/styled-jsx/style.js"),n=e.n(i),r=e("./node_modules/next/dist/compiled/react/index.js"),c=e("./node_modules/classnames/index.js"),m=e.n(c),C=r.createElement;const S=({bgClass:y,color:d,width:O=15,text:T})=>C(r.Fragment,null,C(n(),{id:"15657509",dynamic:[y?"":`background: ${d||"#ebebeb"};`,O,O,O]},[`div.__jsx-style-dynamic-selector{${y?"":`background: ${d||"#ebebeb"};`} height:${O}px;width:${O}px;line-height:${O}px;}`]),C("div",{className:n().dynamic([["15657509",[y?"":`background: ${d||"#ebebeb"};`,O,O,O]]])+" "+(m()(y,"color-square f1 flex-shrink-0 dib tc white")||"")},T))},"./components/Tooltip.js":(j,o,e)=>{e.r(o),e.d(o,{default:()=>u});var i=e("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),n=e("./node_modules/@babel/runtime/helpers/esm/extends.js"),r=e("./node_modules/next/dist/compiled/react/index.js"),c=e("./node_modules/prop-types/index.js"),m=e.n(c),C=e("./node_modules/next/dist/compiled/react-dom/index.js"),N=e("./node_modules/react-popper/lib/esm/usePopper.js"),S=e("./node_modules/classnames/index.js"),y=e.n(S);function d(l){const t=document.createElement("div");return t.setAttribute("id",l),t}function O(l){document.body.insertBefore(l,document.body.lastElementChild.nextElementSibling)}function T(l){const t=(0,r.useRef)(null);(0,r.useEffect)(function(){const E=document.querySelector(`#${l}`),D=E||d(l);return E||O(D),D.appendChild(t.current),function(){t.current.remove(),D.childNodes.length===-1&&D.remove()}},[]);function s(){return t.current||(t.current=document.createElement("div")),t.current}return s()}const M=T,b=["id","children","hoveredElement","popperOptions"];var A=r.createElement;const f=({children:l,refElement:t,popperOptions:s})=>{const[a,E]=r.useState(null),{styles:D,attributes:p}=(0,N.usePopper)(t,a,s);return A("div",(0,n.default)({className:y()("tooltip bg-white b-gray-40 b-solid bw-1px",s.anchored?"pa4 w-100":"pa2"),ref:E,style:D.popper},p.popper),l)};f.displayName="TooltipWrapper";const _=l=>{let{id:t,children:s,hoveredElement:a,popperOptions:E}=l,D=(0,i.default)(l,b);const p=M(t);return typeof window<"u"&&window.document&&window.document.createElement?(0,C.createPortal)(A(f,(0,n.default)({refElement:a,popperOptions:E},D),s),p):null};_.propTypes={children:m().node,hoveredElement:m().objectOf(m().any),popperOptions:m().objectOf(m().any)},_.defaultProps={children:null,hoveredElement:null,popperOptions:{}};const u=_},"./components/hooks/useWindowSize.js":(j,o,e)=>{e.r(o),e.d(o,{default:()=>m});var i=e("./node_modules/next/dist/compiled/react/index.js"),n=e("./node_modules/lodash.debounce/index.js"),r=e.n(n);function c({trailing:C=!1}={}){const{0:N,1:S}=(0,i.useState)({width:void 0,height:void 0});return(0,i.useEffect)(()=>{const y={leading:!0,trailing:C},d=r()(()=>{S({width:window.innerWidth,height:window.innerHeight})},200,y);return window.addEventListener("resize",d),d(),()=>window.removeEventListener("resize",d)},[]),N}const m=c},"./components/providers/BrandContext.js":(j,o,e)=>{e.r(o),e.d(o,{default:()=>n});var i=e("./node_modules/next/dist/compiled/react/index.js");const n=i.createContext("news")},"./components/providers/EmbedContext.js":(j,o,e)=>{e.r(o),e.d(o,{default:()=>n});var i=e("./node_modules/next/dist/compiled/react/index.js");const n=i.createContext({isEmbed:!1,isPartner:!1,isInSpanish:!1,useLinkTarget:!1})},"./data/partyColors.js":(j,o,e)=>{e.r(o),e.d(o,{default:()=>i});const i={default:{dem:"#0471E6",rep:"#DE3535",grn:"#7A7A7A",con:"#7A7A7A",rp:"#7A7A7A",wf:"#7A7A7A",ind:"#595959",lib:"#A99369",oth:"#7A7A7A",weq:"black",yes:"#9E0084",no:"#2AA78B",ballotyes:"#9E0084",ballotno:"#2AA78B",iap:"salmon",npa:"brown",non:"green",for:"green",agn:"red",uncalled:"#e6e6e6",default:"#595959",other:"#7A7A7A",undecided:"#EBEBEB"},2022:{dem:"#009AF4",rep:"#D42F37",yes:"#9E0084",no:"#2AA78B",uncalled:"#e6e6e6",default:"#5C5C5C",other:"#7A7A7A",undecided:"#EBEBEB"},2023:{dem:"#009AF4",rep:"#D42F37",yes:"#F96419",no:"#645FAA",uncalled:"#e6e6e6",default:"#5C5C5C",other:"#7A7A7A",undecided:"#EBEBEB"},2024:{dem:"#0487E6",rep:"#DD2929",yes:"#F96419",no:"#645FAA",uncalled:"#BEBEBE",default:"#959595",other:"#7A7A7A",undecided:"#BEBEBE"}}},"./data/usStates.js":(j,o,e)=>{e.r(o),e.d(o,{default:()=>i});const i=[{abbr:"DA",name:"Democrats Abroad",fips:"0000"},{abbr:"AK",name:"Alaska",fips:"02",region:"arctic",timezones:["AT"],isLegislativeDistrict:!0,reportingType:"Legislative District"},{abbr:"AL",name:"Alabama",fips:"01",region:"south",timezones:["CT"]},{abbr:"AZ",name:"Arizona",fips:"04",region:"southwest",timezones:["MT"]},{abbr:"AR",name:"Arkansas",fips:"05",region:"south",timezones:["CT"]},{abbr:"CA",name:"California",fips:"06",region:"west",timezones:["PT"]},{abbr:"CO",name:"Colorado",fips:"08",region:"rockies",timezones:["MT"]},{abbr:"CT",name:"Connecticut",fips:"09",region:"new england",timezones:["ET"],isTownship:"true",reportingType:"Township"},{abbr:"DE",name:"Delaware",fips:"10",region:"northeast",timezones:["ET"]},{abbr:"DC",name:"District of Columbia",fips:"11",region:"midatlantic",timezones:["ET"],isWard:"true",reportingType:"Ward"},{abbr:"FL",name:"Florida",fips:"12",region:"southeast",timezones:["ET"]},{abbr:"GA",name:"Georgia",fips:"13",region:"south",timezones:["ET"]},{abbr:"HI",name:"Hawaii",fips:"15",region:"pacific",timezones:["HT"]},{abbr:"ID",name:"Idaho",fips:"16",region:"rockies",timezones:["MT","PT"]},{abbr:"IL",name:"Illinois",fips:"17",region:"midwest",timezones:["CT"]},{abbr:"IN",name:"Indiana",fips:"18",region:"arctic",timezones:["ET","CT"]},{abbr:"IA",name:"Iowa",fips:"19",region:"midwest",timezones:["CT"]},{abbr:"KS",name:"Kansas",fips:"20",region:"",timezones:["CT","MT"]},{abbr:"KY",name:"Kentucky",fips:"21",region:"",timezones:["ET","CT"]},{abbr:"LA",name:"Louisiana",fips:"22",region:"south",timezones:["CT"],reportingType:"Parish"},{abbr:"ME",name:"Maine",fips:"23",region:"northeast",timezones:["ET"],isTownship:"true",reportingType:"Township"},{abbr:"MD",name:"Maryland",fips:"24",region:"",timezones:["ET"]},{abbr:"MA",name:"Massachusetts",fips:"25",region:"new england",timezones:["ET"],isTownship:"true",reportingType:"Township"},{abbr:"MI",name:"Michigan",fips:"26",region:"midwest",timezones:["ET","CT"]},{abbr:"MN",name:"Minnesota",fips:"27",region:"midwest",timezones:["CT"]},{abbr:"MS",name:"Mississippi",fips:"28",region:"south",timezones:["ET"]},{abbr:"MO",name:"Missouri",fips:"29",region:"midwest",timezones:["CT"]},{abbr:"MT",name:"Montana",fips:"30",region:"",timezones:["MT"]},{abbr:"NE",name:"Nebraska",fips:"31",region:"",timezones:["CT","MT"]},{abbr:"NV",name:"Nevada",fips:"32",region:"west",timezones:["PT"]},{abbr:"NH",name:"New Hampshire",fips:"33",region:"new england",timezones:["ET"],isTownship:"true",reportingType:"Township"},{abbr:"NJ",name:"New Jersey",fips:"34",region:"northeast",timezones:["ET"]},{abbr:"NM",name:"New Mexico",fips:"35",region:"southwest",timezones:["MT"]},{abbr:"NY",name:"New York",fips:"36",region:"north east",timezones:["ET"]},{abbr:"NC",name:"North Carolina",fips:"37",region:"south east",timezones:["ET"]},{abbr:"ND",name:"North Dakota",fips:"38",region:"",timezones:["CT","MT"]},{abbr:"OH",name:"Ohio",fips:"39",region:"",timezones:["ET"]},{abbr:"OK",name:"Oklahoma",fips:"40",region:"",timezones:["CT"]},{abbr:"OR",name:"Oregon",fips:"41",region:"west",timezones:["PT"]},{abbr:"PA",name:"Pennsylvania",fips:"42",region:"",timezones:["ET"]},{abbr:"RI",name:"Rhode Island",fips:"44",region:"new england",timezones:["ET"],isMunicipality:!0,reportingType:"Municipality"},{abbr:"SC",name:"South Carolina",fips:"45",region:"south",timezones:["ET"]},{abbr:"SD",name:"South Dakota",fips:"46",region:"",timezones:["CT","MT"]},{abbr:"TN",name:"Tennessee",fips:"47",region:"south",timezones:["CT","ET"]},{abbr:"TX",name:"Texas",fips:"48",region:"south",timezones:["CT"]},{abbr:"UT",name:"Utah",fips:"49",region:"",timezones:["MT"]},{abbr:"VT",name:"Vermont",fips:"50",region:"new england",timezones:["ET"],isTownship:"true",reportingType:"Township"},{abbr:"VA",name:"Virginia",fips:"51",region:"",timezones:["ET"]},{abbr:"WA",name:"Washington",fips:"53",region:"west",timezones:["PT"]},{abbr:"WV",name:"West Virginia",fips:"54",region:"",timezones:["ET"]},{abbr:"WI",name:"Wisconsin",fips:"55",region:"",timezones:["CT"]},{abbr:"WY",name:"Wyoming",fips:"56",region:"",timezones:["MT"]},{abbr:"AS",name:"American Samoa",fips:"60"},{abbr:"GU",name:"Guam",fips:"66"},{abbr:"MP",name:"Northern Mariana Islands",fips:"69"},{abbr:"PR",name:"Puerto Rico",fips:"72",region:"",timezones:["AST"]},{abbr:"VI",name:"Virgin Islands",fips:"78"},{abbr:"LC",name:"Los Angeles",fips:"06037"},{abbr:"SF",name:"San Francisco",fips:"06075"},{abbr:"CH",name:"Chicago",fips:"0000"},{abbr:"PL",name:"Philadelphia",fips:"0000"},{abbr:"HU",name:"Houston",fips:"0000"}]},"./helpers/determineOfficeType.js":(j,o,e)=>{e.r(o),e.d(o,{default:()=>y,determineRunoffStatusFromRaceId:()=>C,getOfficeCodeFromRaceId:()=>m,getStateOfficeLink:()=>S,normalizeOfficeName:()=>N});var i=e("./node_modules/lodash.kebabcase/index.js"),n=e.n(i),r=e("./helpers/constants.js"),c=e("./server/v2/helpers/officeCodeToSlug.js");const m=d=>d.substring(d.lastIndexOf("~")+1),C=d=>d.match(/\d{4}-\d{2}-\d{2}W/),N=d=>typeof d!="string"?null:d.toLowerCase().replace(" special",""),S=({officeCode:d,stateNameSlug:O,isRunoff:T=!1,electionType:M,electionTypeCode:b,electionSeason:A="2020"})=>{const f=d?c.default[d]:"",_=r.PRIMARY_ELECTION_TYPE_CODES.includes(b)||M===r.ELECTION_TYPE.PRIMARY?"primary":"",u=d===r.OFFICE_CODES.SENATE_SPECIAL||r.SPECIAL_ELECTION_TYPE_CODES.includes(b)||M===r.ELECTION_TYPES?"special":"",l=T||r.RUNOFF_ELECTION_TYPE_CODES.includes(b)?"runoff":"",t=n()(`${A}-${_}-${u}-elections`),s=n()(`${O}-${f}-${l}-results`);return`/politics/${t}/${s}`};function y(d,O=!0){if(typeof d!="string")return"";switch(d){case r.OFFICE_CODES.GOVERNOR:return"Governor";case r.OFFICE_CODES.HOUSE:return"House";case r.OFFICE_CODES.PRESIDENT:return"President";case r.OFFICE_CODES.SENATE:return"Senate";case r.OFFICE_CODES.SENATE_SPECIAL:return O?"Senate Special":"Senate";case r.OFFICE_CODES.ATTORNEY_GENERAL:return"Attorney General";case r.OFFICE_CODES.LT_GOVERNOR:return"Lieutenant Governor";case r.OFFICE_CODES.SECRETARY_OF_STATE:return"Secretary of State";case r.OFFICE_CODES.DISTRICT_ATTORNEY:return"District Attorney";case r.OFFICE_CODES.SUPREME_COURT:return"State Supreme Court";case r.OFFICE_CODES.MAYOR:return"Mayor";default:return""}}},"./helpers/getPartyColor.js":(j,o,e)=>{e.r(o),e.d(o,{default:()=>O});var i=e("./node_modules/lodash.get/index.js"),n=e.n(i),r=e("./data/partyColors.js"),c=e("./data/primaryColors.json"),m=e("./helpers/constants.js"),C=e("./helpers/isPrimaryElection.js");const N=["dem","rep"],S=["ind","npa","npt"],y=({normalizedParty:T,order:M,officeCode:b,useHousePrimaryColors:A,useFullColorPalette:f,electionSeason:_,electionTypeCode:u,stateAbbr:l})=>{const[t]=c.default;if(!T||typeof T!="string"||!M||typeof M!="number"||!b||typeof b!="string")return t;const s=m.OFFICE_NAMES[b]||"";let a="other",E="other";f&&T==="nonpartisan"?E=b:!f&&s.includes("president")?a="president":s==="house"&&(a=A&&!f?"house":"other",E=f?"other":"house");const D=n()(c,["season",_,b,l,u]),p=n()(c,["season",_,E,T]),P=n()(c,[a,T]),g=M-1,B=n()(D||p||P,[g]),R=n()(c,["season",_,E,"default",T]);return B||R||t},O=({party:T,order:M,officeCode:b,electionSeason:A,electionType:f,electionTypeCode:_="",stateAbbr:u,onlySupportMajorParties:l=!0,useHousePrimaryColors:t=!1,useFullColorPalette:s=!1})=>{const{default:{default:a}}=r.default,D=A&&n()(r.default,[A,"default"])||a;if(!T||typeof T!="string")return D;let p=T.toLowerCase();if(p==="gop"?p="rep":S.includes(p)&&(p="nonpartisan"),(0,C.default)(_)||f===m.ELECTION_TYPE.PRIMARY||s)return y({electionTypeCode:_,normalizedParty:p,order:M,officeCode:b,useHousePrimaryColors:t,useFullColorPalette:s,electionSeason:A,stateAbbr:u});if(l&&!N.includes(p))return D;const P=A&&n()(r.default,[A,p]),g=n()(r.default,["default",p],null);return P||g||D}},"./helpers/isExternalUrl.js":(j,o,e)=>{e.r(o),e.d(o,{default:()=>n});const n=r=>r?!/(^[#/])|((nbcnews|today|msnbc)\.com)/.test(r):!1},"./helpers/isPrimaryElection.js":(j,o,e)=>{e.r(o),e.d(o,{default:()=>c});var i=e("./helpers/constants.js"),n=e("./node_modules/console-browserify/index.js");const c=(m="")=>typeof m!="string"?(n.warn("isPrimaryElection expects a type of string"),!1):i.PRIMARY_ELECTION_TYPE_CODES.includes(m)},"./helpers/isTelemundo.js":(j,o,e)=>{e.r(o),e.d(o,{default:()=>r});var i=e("./helpers/constants.js");const r=c=>c===i.BRANDS.TELEMUNDO},"./helpers/stateNameUtilities.js":(j,o,e)=>{e.r(o),e.d(o,{getFipsIDFromStateName:()=>b,getStateAbbreviationByStateFipsId:()=>u,getStateAbbreviationByStateName:()=>l,getStateNameByStateAbbreviation:()=>f,getStateNameByStateFipsId:()=>A,getStateNameSlugByStateAbbreviation:()=>_,usStateAbbreviations:()=>M,usStateNames:()=>d,usStatesByStateAbbreviation:()=>T,usStatesByStateName:()=>O});var i=e("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),n=e("./node_modules/lodash.get/index.js"),r=e.n(n),c=e("./node_modules/lodash.kebabcase/index.js"),m=e.n(c),C=e("./data/usStates.js");function N(t,s){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var E=Object.getOwnPropertySymbols(t);s&&(E=E.filter(function(D){return Object.getOwnPropertyDescriptor(t,D).enumerable})),a.push.apply(a,E)}return a}function S(t){for(var s=1;s<arguments.length;s++){var a=arguments[s]!=null?arguments[s]:{};s%2?N(Object(a),!0).forEach(function(E){(0,i.default)(t,E,a[E])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):N(Object(a)).forEach(function(E){Object.defineProperty(t,E,Object.getOwnPropertyDescriptor(a,E))})}return t}const y=C.default.reduce((t,s)=>{const{fips:a}=s;return t[a]=S({},s),t},{}),d=C.default.reduce((t,s)=>{const{name:a}=s;return t=[...t,a],t},[]),O=C.default.reduce((t,s)=>{const{name:a}=s;return t[a]=S({},s),t},{}),T=C.default.reduce((t,s)=>{const{abbr:a}=s;return t[a]=S({},s),t},{}),M=C.default.reduce((t,s)=>{const{abbr:a}=s;return t=[...t,a],t},[]),b=t=>{const s=O[t];return r()(s,"fips","")},A=t=>{const s=y[t];return r()(s,"name","")},f=t=>{const s=T[t];return r()(s,"name","")},_=t=>m()(f(t)),u=t=>{const s=y[t];return r()(s,"abbr","")},l=t=>{const s=C.default.find(E=>E.name.toLowerCase()===t.toLowerCase());return r()(s,"abbr","")}},"./server/v2/config/earlyVotingOrder.js":(j,o,e)=>{e.r(o),e.d(o,{default:()=>n});const n=["party registration","age","gender","vote type"]},"./server/v2/format/formatEarlyVoteData.js":(j,o,e)=>{e.r(o),e.d(o,{default:()=>u});var i=e("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),n=e("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),r=e("./node_modules/lodash.get/index.js"),c=e.n(r),m=e("./data/usStates.js"),C=e("./helpers/stateNameUtilities.js"),N=e("./helpers/determineOfficeType.js"),S=e("./helpers/constants.js"),y=e("./helpers/getPartyColor.js"),d=e("./server/v2/config/earlyVotingOrder.js");const O=["ballotSentData","ballotReturnedData"];function T(l,t){var s=Object.keys(l);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(l);t&&(a=a.filter(function(E){return Object.getOwnPropertyDescriptor(l,E).enumerable})),s.push.apply(s,a)}return s}function M(l){for(var t=1;t<arguments.length;t++){var s=arguments[t]!=null?arguments[t]:{};t%2?T(Object(s),!0).forEach(function(a){(0,i.default)(l,a,s[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(l,Object.getOwnPropertyDescriptors(s)):T(Object(s)).forEach(function(a){Object.defineProperty(l,a,Object.getOwnPropertyDescriptor(s,a))})}return l}const b={dem:"#0471E6",rep:"#DE3535",gop:"#DE3535",other:"#ccc",unknown:"#ccc","18-29":"#DF5209","30-39":"#C00594","40-49":"#84AD48","50-64":"#EEB900","65 or over":"#14866D",men:"#05710F",women:"#645FAA","mail-in":"#F96419","in-person":"#DB0E9C"},A=l=>t=>{if(!t&&!t.values)return t;let s=()=>!0;const a=t.name.toLowerCase(),E=a==="party registration",D=a==="age";return a==="vote type"?s=P=>P.value>0:t.values.every(({value:P})=>P<=0)&&(s=()=>!1),t.values=t.values.filter(s).map(P=>{let{description:g}=P;const B=g.toLowerCase();let R=b[B]||b.other;return E&&(R=(0,y.default)({party:g,electionSeason:l,onlySupportMajorParties:!0})),g==="Dem"&&(g="DEM"),g==="Rep"&&(g="GOP"),D&&B==="other"&&(g="Unknown"),{value:P.value,color:R,description:g}}),t},f=(l,t)=>d.default.indexOf(l.name.toLowerCase())-d.default.indexOf(t.name.toLowerCase());function _(l,t,s=!1){const a=s?()=>!0:P=>P.values&&P.values.length,{ballotSentData:E,ballotReturnedData:D}=l,p=(0,n.default)(l,O);return p.ballotSentData=E?E.map(A(t)).filter(a).sort(f):[],p.ballotReturnedData=D?D.map(A(t)).filter(a).sort(f):[],p}function u({earlyVoteData:l,stateAbbr:t,electionSeason:s,useAllowlist:a=!0,allowlist:E=[]}){if(s>=2022&&t==="US"){const D=m.default.reduce((g,{abbr:B})=>{const R=(0,C.getStateNameSlugByStateAbbreviation)(B),F=(0,N.getStateOfficeLink)({electionSeason:s,electionType:S.ELECTION_TYPE.GENERAL,stateNameSlug:R});return g[B]={stateName:(0,C.getStateNameByStateAbbreviation)(B),totalBallots:0,resultsUrl:!a||E.includes(F)?F:null},g},{});let p=null;const P=Array.isArray(l.data)?l.data.reduce((g,B)=>{const R=Object.entries(B);if(!R.length)return g;const[F,v]=R[0];if(!v)return g;const L=_(v,s,!0);return F==="US"?p=L:g[F]=M(M(M({},g[F]),L),{},{totalBallots:c()(L,"comparison.earlyAbsentee",0)}),g},D):D;return{national:p,states:P,lastModified:l.lastModified||null}}return _(l,s)}},"./server/v2/helpers/officeCodeToSlug.js":(j,o,e)=>{e.r(o),e.d(o,{default:()=>r});var i=e("./helpers/constants.js");const r={[i.OFFICE_CODES.ATTORNEY_GENERAL]:"attorney-general",[i.OFFICE_CODES.GOVERNOR]:"governor",[i.OFFICE_CODES.HOUSE]:"house",[i.OFFICE_CODES.LT_GOVERNOR]:"lieutenant-governor",[i.OFFICE_CODES.PRESIDENT]:"president",[i.OFFICE_CODES.SECRETARY_OF_STATE]:"secretary-of-state",[i.OFFICE_CODES.SENATE]:"senate",[i.OFFICE_CODES.MAYOR]:"mayor",[i.OFFICE_CODES.DISTRICT_ATTORNEY]:"district-attorney",[i.OFFICE_CODES.SUPREME_COURT]:"state-supreme-court",[i.OFFICE_CODES.STATE_SENATE]:"state-senate",[i.OFFICE_CODES.SENATE_SPECIAL]:"senate"}},"./data/primaryColors.json":j=>{j.exports=JSON.parse('{"president":{"dem":["#3899E7","#A861B5","#84AD48","#DD7026","#697BB6","#3A766F","#6C4682","#F1A410","#89D0E0","#414E7D","#8DB0D9","#8D438B","#738754","#90E0AD","#B8983B","#46A695"],"rep":["#DE3535","#750C0C","#CD7575","#A80101","#9B7777","#470000"]},"house":{"dem":["#308CEF","#C00594","#84AD48","#F96419","#7D78C3","#14866D","#730069","#EEB900","#50CDB1","#68A9EF","#113F75"],"rep":["#DE3535","#6D0000","#EEB8B8","#BB2323","#EE6868","#952727"]},"other":{"dem":["#388FC2","#213F64","#839EBE","#2D5D98","#5F7887","#011521","#285F7F","#5D8CA9","#3A719C","#1F4C83","#3F82AA","#05334F"],"rep":["#DE3535","#750C0C","#CD7575","#A80101","#9B7777","#470000"]},"default":["#595959"],"season":{"2022":{"house":{"dem":[],"rep":[],"default":{"rep":"#D42F37","dem":"#009AF4"}},"other":{"dem":["#009AF4","#8567E6","#20A4A8","#1F69AB","#8A8FBF"],"rep":["#D42F37","#D77F2D","#A23D69","#BD84A3","#CE5883"],"default":{"rep":"#5C5C5C","dem":"#5C5C5C","yes":"#9E0084","no":"#2AA78B"}}},"2023":{"B":{"WI":{"G":["#CD7575","#6873AE"]}},"M":{"CH":{"W":["#5F7887","#839EBE"]}}},"2024":{"other":{"dem":["#0487E6","#034B8F","#00CBAC","#8370F1","#79AF2D","#F1A410","#278685","#8D43AB","#73718B","#8DB0D9","#B89846","#80DAEE","#738754","#90EDAD","#41D7ED"],"rep":["#DD2929","#8F1B1B","#F69696","#E38B39","#B84C96","#FF6000","#9F8383","#BC8604","#DEB703","#E26D99","#D8A084","#877354","#470000","#BB37FF","#8A3752"],"default":{"rep":"#959595","dem":"#959595","yes":"#F96419","no":"#645FAA","other":"#959595"}}}}}')}}]);
