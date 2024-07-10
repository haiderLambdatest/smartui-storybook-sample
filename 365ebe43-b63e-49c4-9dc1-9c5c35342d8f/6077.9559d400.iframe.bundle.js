"use strict";(globalThis.webpackChunkfirecracker=globalThis.webpackChunkfirecracker||[]).push([[6077],{"./components/DonutChart/DonutChart.js":(v,a,e)=>{e.r(a),e.d(a,{default:()=>g});var i=e("./node_modules/styled-jsx/style.js"),n=e.n(i),o=e("./node_modules/prop-types/index.js"),u=e.n(o),m=e("./node_modules/next/dist/compiled/react/index.js"),T=e("./node_modules/classnames/index.js"),R=e.n(T),B=e("./node_modules/react-i18next/dist/es/index.js"),y=e("./components/DonutChart/DonutChart.props.js"),d=m.createElement;const C=({t:M,i18n:b,values:D,label:p,className:P,chartSize:E,strokeWidth:l})=>{if(!Array.isArray(D))return null;const s=(E-l)/2,r=2*3.14*s,c=j=>j>0?(j*r/100).toFixed(2):0,f=D.some(j=>j.value),O=D.length===1&&D[0].value===100,h=b.language==="es",_=c(.5),{circles:I,dashedLines:S}=D.reduce((j,L)=>{if(!L.value)return j;const W=c(L.value);return j.circles.push(d("circle",{className:"donut-slice",cx:E/2,cy:E/2,key:L.description,r:s,stroke:L.color,strokeWidth:l,strokeDasharray:`${W} ${r}`,strokeDashoffset:-j.offset,fill:"none"})),_<W&&j.dashedLines.push(W-_,_),j.offset+=parseFloat(W),j},{circles:[],offset:0,dashedLines:[_]}),F=S.filter(j=>j>0).concat(r).join(" ");return d(m.Fragment,null,d(n(),{id:"3371568245"},[".donut-chart svg{-webkit-transform:rotate(-90deg);-ms-transform:rotate(-90deg);transform:rotate(-90deg);}",".white-rings{stroke:#fff;}",".unfilled-ring{stroke:#ccc;}",".lh-90{line-height:90%;}"]),d(n(),{id:"3042449187",dynamic:[E,E]},[`.donut-chart.__jsx-style-dynamic-selector{height:${E}px;width:${E}px;}`]),d("div",{className:"jsx-3371568245 "+n().dynamic([["3042449187",[E,E]]])+" "+(R()("donut-chart df items-center justify-center relative",P)||"")},d("svg",{viewBox:`0 0 ${E} ${E}`,className:"jsx-3371568245 "+n().dynamic([["3042449187",[E,E]]])},d("circle",{cx:E/2,cy:E/2,r:s,strokeWidth:l,fill:"none",className:"jsx-3371568245 "+n().dynamic([["3042449187",[E,E]]])+" unfilled-ring"}),I,f&&!O&&d("circle",{cx:E/2,cy:E/2,r:s,strokeWidth:l,strokeDashoffset:0,strokeDasharray:F,fill:"none",className:"jsx-3371568245 "+n().dynamic([["3042449187",[E,E]]])+" white-rings"})),d("div",{className:"jsx-3371568245 "+n().dynamic([["3042449187",[E,E]]])+" "+(R()("label tc founders-cond fw6 pa1 absolute",{"f3 lh-90 gray-100":!h,"f2 lh-none":h})||"")},M(p))))};C.propTypes={chartSize:u().number,className:u().string,label:u().string,strokeWidth:u().number,values:y.DonutSlices},C.defaultProps={chartSize:76,className:null,label:"",strokeWidth:4,values:null};const g=(0,B.withTranslation)()(C)},"./components/DonutChart/DonutChart.props.js":(v,a,e)=>{e.r(a),e.d(a,{DonutSlice:()=>o,DonutSlices:()=>u});var i=e("./node_modules/prop-types/index.js"),n=e.n(i);const o=n().shape({description:n().string,color:n().string,value:n().number}),u=n().arrayOf(o)},"./components/Link.js":(v,a,e)=>{e.r(a),e.d(a,{default:()=>p});var i=e("./node_modules/@babel/runtime/helpers/esm/extends.js"),n=e("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),o=e("./node_modules/next/dist/compiled/react/index.js"),u=e("./node_modules/prop-types/index.js"),m=e.n(u),T=e("./node_modules/classnames/index.js"),R=e.n(T),B=e("./helpers/isExternalUrl.js"),y=e("./components/providers/EmbedContext.js"),d=e("./components/providers/BrandContext.js"),C=e("./helpers/isRelativeUrl.js"),g=e("./helpers/isTelemundo.js");const M=["linkText","children","accessibleOnly","href","className","data-icid"];var b=o.createElement;const D=P=>{let{linkText:E,children:l,accessibleOnly:t,href:s,className:r,"data-icid":c}=P,f=(0,n.default)(P,M);const{isEmbed:O,isPartner:h,isInSpanish:_,useLinkTarget:I}=(0,o.useContext)(y.default),S=(0,o.useContext)(d.default),F=R()({"show-on-tab":t},r),j=O||h&&_,L=h&&!_;(0,B.default)(s)&&Object.assign(f,{rel:"nofollow"}),I&&f?.target||(j&&Object.assign(f,{target:"_parent"}),L&&Object.assign(f,{target:"_blank"}));const W=(0,g.default)(S)&&(0,C.default)(s)?`https://www.nbcnews.com${s}`:s,Y={[h?"data-cid":"data-icid"]:c};return b("a",(0,i.default)({},f,{href:W,className:F},Y),E||l)};D.displayName="Link",D.propTypes={href:m().string,linkText:m().string,className:m().string,accessibleOnly:m().bool},D.defaultProps={href:null,linkText:null,className:null,accessibleOnly:!1};const p=D},"./components/NationalCartogram/NationalCartogram.js":(v,a,e)=>{e.r(a),e.d(a,{default:()=>c});var i=e("./node_modules/styled-jsx/style.js"),n=e.n(i),o=e("./node_modules/prop-types/index.js"),u=e.n(o),m=e("./node_modules/next/dist/compiled/react/index.js"),T=e("./node_modules/next/amp.js"),R=e("./node_modules/classnames/index.js"),B=e.n(R);const y=JSON.parse('["ME","AK","VT","NH","WA","ID","MT","ND","MN","MI","NY","MA","RI","OR","UT","WY","SD","IA","WI","OH","PA","NJ","CT","CA","NV","CO","NE","IL","IN","WV","VA","MD","DE","AZ","NM","KS","MO","KY","TN","SC","NC","DC","HI","OK","LA","AR","MS","AL","GA","TX","FL"]');var d=e("./components/hooks/useWindowSize.js"),C=e("./components/Tooltip.js"),g=e("./node_modules/d3-format/src/defaultLocale.js"),M=e("./components/ScrollableTable/ColorSquare/index.js"),b=e("./components/Link.js"),D=e("./components/NationalCartogram/NationalCartogram.props.js"),p=m.createElement;const P=m.forwardRef(({data:f,electionSeason:O,activeFilter:h},_)=>{const{stateName:I,comparison:S,resultsUrl:F,ballotReturnedData:j}=f||{},L=x=>`${(Math.round(x*100)/100).toFixed(1)}%`,W=(0,g.format)(","),Y=j?.[h]?.values,V=S?.[O]?.earlyAbsentee;return p(m.Fragment,null,p(n(),{id:"2176287844"},[".donut-tooltip__header{border-bottom:dashed 1px #ccc;min-width:300px;}",".closing-icon{right:0;top:0;}"]),p("div",{ref:_,className:"jsx-2176287844 donut-tooltip"},p(b.default,{href:F,className:"db no-underline"},p("div",{className:"jsx-2176287844 donut-tooltip__header df justify-between items-baseline pb2"},p("span",{className:"jsx-2176287844 uppercase founders-cond f6 gray-10 mr2 black"},I),p("span",{className:"jsx-2176287844 founders-mono f4 gray-80 self-end"},W(V),"\xA0ballots")),p("div",{className:"jsx-2176287844 donut-tooltip__body mt5"},Array.isArray(Y)&&Y.map(x=>p("div",{key:x.description,className:"jsx-2176287844 df aligncenter justify-between mt2"},p("div",{className:"jsx-2176287844 df items-center"},p(M.default,{color:x.color,width:16}),p("span",{className:"jsx-2176287844 publico-txt f4 gray-80 ml2"},x.description)),p("span",{className:"jsx-2176287844 black f5 founders-cond self-end"},L(x.value))))))))});P.propTypes={activeFilter:u().number,electionSeason:u().string,data:D.NationalCartogramClientData},P.defaultProps={activeFilter:0,electionSeason:"2022",data:null};const E=P;var l=e("./components/DonutChart/DonutChart.js");const t=l.default;var s=m.createElement;const r=({activeFilter:f,enableDC:O,nationalData:h,electionSeason:_})=>{let I=y;O||(I=y.filter(A=>A!=="DC"));const{width:S}=(0,d.default)(),{0:F,1:j}=(0,m.useState)(null),{0:L,1:W}=(0,m.useState)(!1),{0:Y,1:V}=(0,m.useState)({}),x=(0,m.useRef)(null),X=(0,T.useAmp)(),$=()=>S<758;function G(A){let N=!1,U=!1;try{N=A.relatedTarget&&x.current&&x.current.contains(A.relatedTarget),U=!!A.relatedTarget?.closest(".us-cartogram__grid__item")}catch{}N&&$()||U&&$()||setTimeout(()=>{W(!1),V({})},0)}const J={modifiers:[{name:"offset",options:{offset:[0,25]}}]},Z=A=>{const N={top:A.clientY,right:A.clientX,bottom:A.clientY,left:A.clientX,height:0,width:0};return{getBoundingClientRect(){return N}}},Q=A=>{const N=Z(A);j(N)},k=A=>{$()&&j(A.target)};function w(A,N){return V(N),W(!0),A.clientX&&A.clientY?Q(A):k(A)}function q(A){$()&&!X&&A.preventDefault()}const ee=I.some(A=>{const N=h[A]||{},{values:U}=N;return!Array.isArray(U)||!U.length});return s(m.Fragment,null,s(n(),{id:"545442312"},[".us-cartogram__grid{display:grid;grid-template-columns:repeat(11,1fr);grid-template-rows:repeat(8,1fr);grid-gap:3px;max-width:800px;}",".us-cartogram__grid__item[data-attr='ME']{grid-column-start:11;}",".us-cartogram__grid__item[data-attr='VT']{grid-column-start:10;}",".us-cartogram__grid__item[data-attr='MI']{grid-column-start:7;}",".us-cartogram__grid__item[data-attr='NY']{grid-column-start:9;}",".us-cartogram__grid__item[data-attr='CA']{grid-column-start:1;}",".us-cartogram__grid__item[data-attr='AZ']{grid-column-start:2;}",".us-cartogram__grid__item[data-attr='HI']{grid-column-start:1;}",".us-cartogram__grid__item[data-attr='OK']{grid-column-start:4;}",".us-cartogram__grid__item[data-attr='TX']{grid-column-start:4;}",".us-cartogram__grid__item[data-attr='FL']{grid-column-start:9;}",".us-cartogram__no-data{grid-row-start:8;grid-column:5 / span 4;-webkit-align-self:center;-ms-flex-item-align:center;align-self:center;}",".us-cartogram__grid__item{justify-self:stretch;max-width:64px;}",".us-cartogram__grid .us-cartogram__grid__item .donut-chart,.us-cartogram__grid .us-cartogram__grid__item .donut-chart svg{width:100%;height:100%;}","@media screen and (min-width:758px){.us-cartogram__grid{grid-gap:6px;}.us-cartogram__grid .us-cartogram__grid__item .label{font-size:20px;}}"]),!X&&L&&s(C.default,{id:"national-cartogram__tooltip","data-testid":"national-cartogram__tooltip",hoveredElement:F,popperOptions:J},s(E,{activeFilter:f,electionSeason:_,ref:x,data:Y})),s("div",{"data-testid":"us-cartogram__grid",className:"jsx-545442312 us-cartogram__grid w-100"},I.map(A=>{const N=h[A]||{},{resultsUrl:U}=N,H=N?.ballotReturnedData?.[f]?.values??[],z=!Array.isArray(H)||!H.length,te=`${A}${z?"*":""}`;return s(b.default,{className:B()("us-cartogram__grid__item db",{"no-data":z}),"data-attr":A,key:`us-cartogram__grid--${A}`,onMouseOver:z?null:K=>w(K,N),onMouseLeave:z?null:K=>G(K),onClick:z?null:K=>q(K),onFocus:z?null:K=>w(K,N),onBlur:z?null:K=>G(K),href:U},s(t,{strokeWidth:6,label:te,chartSize:64,values:H}))}),ee&&s("div",{className:"jsx-545442312 us-cartogram__no-data founders-mono f1 lh-copy tc mh1"},"*Data not available")))};r.propTypes={activeFilter:u().number,electionSeason:u().string,enableDC:u().bool,nationalData:u().objectOf(D.NationalCartogramClientData)},r.defaultProps={activeFilter:0,electionSeason:"2022",enableDC:!1,nationalData:{}};const c=r},"./components/NationalCartogram/NationalCartogram.props.js":(v,a,e)=>{e.r(a),e.d(a,{NationalCartogramBallotData:()=>m,NationalCartogramClientData:()=>T,NationalCartogramComparison:()=>u});var i=e("./node_modules/prop-types/index.js"),n=e.n(i),o=e("./components/DonutChart/DonutChart.props.js");const u=n().shape({absentee:n().number,ballotRequests:n().number,early:n().number,earlyAbsentee:n().number,ballotRequestsPercentChange:n().number,earlyAbsenteePercentChange:n().number}),m=n().shape({name:n().string,values:o.DonutSlices}),T=n().shape({ballotReturnedData:n().arrayOf(m),ballotSentData:n().arrayOf(m),comparison:n().objectOf(u),stateName:n().string,totalBallots:n().number,resultsUrl:n().string})},"./components/ScrollableTable/ColorSquare/index.js":(v,a,e)=>{e.r(a),e.d(a,{default:()=>B});var i=e("./node_modules/styled-jsx/style.js"),n=e.n(i),o=e("./node_modules/next/dist/compiled/react/index.js"),u=e("./node_modules/classnames/index.js"),m=e.n(u),T=o.createElement;const B=({bgClass:y,color:d,width:C=15,text:g})=>T(o.Fragment,null,T(n(),{id:"15657509",dynamic:[y?"":`background: ${d||"#ebebeb"};`,C,C,C]},[`div.__jsx-style-dynamic-selector{${y?"":`background: ${d||"#ebebeb"};`} height:${C}px;width:${C}px;line-height:${C}px;}`]),T("div",{className:n().dynamic([["15657509",[y?"":`background: ${d||"#ebebeb"};`,C,C,C]]])+" "+(m()(y,"color-square f1 flex-shrink-0 dib tc white")||"")},g))},"./components/Tooltip.js":(v,a,e)=>{e.r(a),e.d(a,{default:()=>E});var i=e("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),n=e("./node_modules/@babel/runtime/helpers/esm/extends.js"),o=e("./node_modules/next/dist/compiled/react/index.js"),u=e("./node_modules/prop-types/index.js"),m=e.n(u),T=e("./node_modules/next/dist/compiled/react-dom/index.js"),R=e("./node_modules/react-popper/lib/esm/usePopper.js"),B=e("./node_modules/classnames/index.js"),y=e.n(B);function d(l){const t=document.createElement("div");return t.setAttribute("id",l),t}function C(l){document.body.insertBefore(l,document.body.lastElementChild.nextElementSibling)}function g(l){const t=(0,o.useRef)(null);(0,o.useEffect)(function(){const c=document.querySelector(`#${l}`),f=c||d(l);return c||C(f),f.appendChild(t.current),function(){t.current.remove(),f.childNodes.length===-1&&f.remove()}},[]);function s(){return t.current||(t.current=document.createElement("div")),t.current}return s()}const M=g,b=["id","children","hoveredElement","popperOptions"];var D=o.createElement;const p=({children:l,refElement:t,popperOptions:s})=>{const[r,c]=o.useState(null),{styles:f,attributes:O}=(0,R.usePopper)(t,r,s);return D("div",(0,n.default)({className:y()("tooltip bg-white b-gray-40 b-solid bw-1px",s.anchored?"pa4 w-100":"pa2"),ref:c,style:f.popper},O.popper),l)};p.displayName="TooltipWrapper";const P=l=>{let{id:t,children:s,hoveredElement:r,popperOptions:c}=l,f=(0,i.default)(l,b);const O=M(t);return typeof window<"u"&&window.document&&window.document.createElement?(0,T.createPortal)(D(p,(0,n.default)({refElement:r,popperOptions:c},f),s),O):null};P.propTypes={children:m().node,hoveredElement:m().objectOf(m().any),popperOptions:m().objectOf(m().any)},P.defaultProps={children:null,hoveredElement:null,popperOptions:{}};const E=P},"./components/hooks/useWindowSize.js":(v,a,e)=>{e.r(a),e.d(a,{default:()=>m});var i=e("./node_modules/next/dist/compiled/react/index.js"),n=e("./node_modules/lodash.debounce/index.js"),o=e.n(n);function u({trailing:T=!1}={}){const{0:R,1:B}=(0,i.useState)({width:void 0,height:void 0});return(0,i.useEffect)(()=>{const y={leading:!0,trailing:T},d=o()(()=>{B({width:window.innerWidth,height:window.innerHeight})},200,y);return window.addEventListener("resize",d),d(),()=>window.removeEventListener("resize",d)},[]),R}const m=u},"./components/providers/BrandContext.js":(v,a,e)=>{e.r(a),e.d(a,{default:()=>n});var i=e("./node_modules/next/dist/compiled/react/index.js");const n=i.createContext("news")},"./components/providers/EmbedContext.js":(v,a,e)=>{e.r(a),e.d(a,{default:()=>n});var i=e("./node_modules/next/dist/compiled/react/index.js");const n=i.createContext({isEmbed:!1,isPartner:!1,isInSpanish:!1,useLinkTarget:!1})},"./data/partyColors.js":(v,a,e)=>{e.r(a),e.d(a,{default:()=>i});const i={default:{dem:"#0471E6",rep:"#DE3535",grn:"#7A7A7A",con:"#7A7A7A",rp:"#7A7A7A",wf:"#7A7A7A",ind:"#595959",lib:"#A99369",oth:"#7A7A7A",weq:"black",yes:"#9E0084",no:"#2AA78B",ballotyes:"#9E0084",ballotno:"#2AA78B",iap:"salmon",npa:"brown",non:"green",for:"green",agn:"red",uncalled:"#e6e6e6",default:"#595959",other:"#7A7A7A",undecided:"#EBEBEB"},2022:{dem:"#009AF4",rep:"#D42F37",yes:"#9E0084",no:"#2AA78B",uncalled:"#e6e6e6",default:"#5C5C5C",other:"#7A7A7A",undecided:"#EBEBEB"},2023:{dem:"#009AF4",rep:"#D42F37",yes:"#F96419",no:"#645FAA",uncalled:"#e6e6e6",default:"#5C5C5C",other:"#7A7A7A",undecided:"#EBEBEB"},2024:{dem:"#0487E6",rep:"#DD2929",yes:"#F96419",no:"#645FAA",uncalled:"#BEBEBE",default:"#959595",other:"#7A7A7A",undecided:"#BEBEBE"}}},"./data/usStates.js":(v,a,e)=>{e.r(a),e.d(a,{default:()=>i});const i=[{abbr:"DA",name:"Democrats Abroad",fips:"0000"},{abbr:"AK",name:"Alaska",fips:"02",region:"arctic",timezones:["AT"],isLegislativeDistrict:!0,reportingType:"Legislative District"},{abbr:"AL",name:"Alabama",fips:"01",region:"south",timezones:["CT"]},{abbr:"AZ",name:"Arizona",fips:"04",region:"southwest",timezones:["MT"]},{abbr:"AR",name:"Arkansas",fips:"05",region:"south",timezones:["CT"]},{abbr:"CA",name:"California",fips:"06",region:"west",timezones:["PT"]},{abbr:"CO",name:"Colorado",fips:"08",region:"rockies",timezones:["MT"]},{abbr:"CT",name:"Connecticut",fips:"09",region:"new england",timezones:["ET"],isTownship:"true",reportingType:"Township"},{abbr:"DE",name:"Delaware",fips:"10",region:"northeast",timezones:["ET"]},{abbr:"DC",name:"District of Columbia",fips:"11",region:"midatlantic",timezones:["ET"],isWard:"true",reportingType:"Ward"},{abbr:"FL",name:"Florida",fips:"12",region:"southeast",timezones:["ET"]},{abbr:"GA",name:"Georgia",fips:"13",region:"south",timezones:["ET"]},{abbr:"HI",name:"Hawaii",fips:"15",region:"pacific",timezones:["HT"]},{abbr:"ID",name:"Idaho",fips:"16",region:"rockies",timezones:["MT","PT"]},{abbr:"IL",name:"Illinois",fips:"17",region:"midwest",timezones:["CT"]},{abbr:"IN",name:"Indiana",fips:"18",region:"arctic",timezones:["ET","CT"]},{abbr:"IA",name:"Iowa",fips:"19",region:"midwest",timezones:["CT"]},{abbr:"KS",name:"Kansas",fips:"20",region:"",timezones:["CT","MT"]},{abbr:"KY",name:"Kentucky",fips:"21",region:"",timezones:["ET","CT"]},{abbr:"LA",name:"Louisiana",fips:"22",region:"south",timezones:["CT"],reportingType:"Parish"},{abbr:"ME",name:"Maine",fips:"23",region:"northeast",timezones:["ET"],isTownship:"true",reportingType:"Township"},{abbr:"MD",name:"Maryland",fips:"24",region:"",timezones:["ET"]},{abbr:"MA",name:"Massachusetts",fips:"25",region:"new england",timezones:["ET"],isTownship:"true",reportingType:"Township"},{abbr:"MI",name:"Michigan",fips:"26",region:"midwest",timezones:["ET","CT"]},{abbr:"MN",name:"Minnesota",fips:"27",region:"midwest",timezones:["CT"]},{abbr:"MS",name:"Mississippi",fips:"28",region:"south",timezones:["ET"]},{abbr:"MO",name:"Missouri",fips:"29",region:"midwest",timezones:["CT"]},{abbr:"MT",name:"Montana",fips:"30",region:"",timezones:["MT"]},{abbr:"NE",name:"Nebraska",fips:"31",region:"",timezones:["CT","MT"]},{abbr:"NV",name:"Nevada",fips:"32",region:"west",timezones:["PT"]},{abbr:"NH",name:"New Hampshire",fips:"33",region:"new england",timezones:["ET"],isTownship:"true",reportingType:"Township"},{abbr:"NJ",name:"New Jersey",fips:"34",region:"northeast",timezones:["ET"]},{abbr:"NM",name:"New Mexico",fips:"35",region:"southwest",timezones:["MT"]},{abbr:"NY",name:"New York",fips:"36",region:"north east",timezones:["ET"]},{abbr:"NC",name:"North Carolina",fips:"37",region:"south east",timezones:["ET"]},{abbr:"ND",name:"North Dakota",fips:"38",region:"",timezones:["CT","MT"]},{abbr:"OH",name:"Ohio",fips:"39",region:"",timezones:["ET"]},{abbr:"OK",name:"Oklahoma",fips:"40",region:"",timezones:["CT"]},{abbr:"OR",name:"Oregon",fips:"41",region:"west",timezones:["PT"]},{abbr:"PA",name:"Pennsylvania",fips:"42",region:"",timezones:["ET"]},{abbr:"RI",name:"Rhode Island",fips:"44",region:"new england",timezones:["ET"],isMunicipality:!0,reportingType:"Municipality"},{abbr:"SC",name:"South Carolina",fips:"45",region:"south",timezones:["ET"]},{abbr:"SD",name:"South Dakota",fips:"46",region:"",timezones:["CT","MT"]},{abbr:"TN",name:"Tennessee",fips:"47",region:"south",timezones:["CT","ET"]},{abbr:"TX",name:"Texas",fips:"48",region:"south",timezones:["CT"]},{abbr:"UT",name:"Utah",fips:"49",region:"",timezones:["MT"]},{abbr:"VT",name:"Vermont",fips:"50",region:"new england",timezones:["ET"],isTownship:"true",reportingType:"Township"},{abbr:"VA",name:"Virginia",fips:"51",region:"",timezones:["ET"]},{abbr:"WA",name:"Washington",fips:"53",region:"west",timezones:["PT"]},{abbr:"WV",name:"West Virginia",fips:"54",region:"",timezones:["ET"]},{abbr:"WI",name:"Wisconsin",fips:"55",region:"",timezones:["CT"]},{abbr:"WY",name:"Wyoming",fips:"56",region:"",timezones:["MT"]},{abbr:"AS",name:"American Samoa",fips:"60"},{abbr:"GU",name:"Guam",fips:"66"},{abbr:"MP",name:"Northern Mariana Islands",fips:"69"},{abbr:"PR",name:"Puerto Rico",fips:"72",region:"",timezones:["AST"]},{abbr:"VI",name:"Virgin Islands",fips:"78"},{abbr:"LC",name:"Los Angeles",fips:"06037"},{abbr:"SF",name:"San Francisco",fips:"06075"},{abbr:"CH",name:"Chicago",fips:"0000"},{abbr:"PL",name:"Philadelphia",fips:"0000"},{abbr:"HU",name:"Houston",fips:"0000"}]},"./helpers/determineOfficeType.js":(v,a,e)=>{e.r(a),e.d(a,{default:()=>y,determineRunoffStatusFromRaceId:()=>T,getOfficeCodeFromRaceId:()=>m,getStateOfficeLink:()=>B,normalizeOfficeName:()=>R});var i=e("./node_modules/lodash.kebabcase/index.js"),n=e.n(i),o=e("./helpers/constants.js"),u=e("./server/v2/helpers/officeCodeToSlug.js");const m=d=>d.substring(d.lastIndexOf("~")+1),T=d=>d.match(/\d{4}-\d{2}-\d{2}W/),R=d=>typeof d!="string"?null:d.toLowerCase().replace(" special",""),B=({officeCode:d,stateNameSlug:C,isRunoff:g=!1,electionType:M,electionTypeCode:b,electionSeason:D="2020"})=>{const p=d?u.default[d]:"",P=o.PRIMARY_ELECTION_TYPE_CODES.includes(b)||M===o.ELECTION_TYPE.PRIMARY?"primary":"",E=d===o.OFFICE_CODES.SENATE_SPECIAL||o.SPECIAL_ELECTION_TYPE_CODES.includes(b)||M===o.ELECTION_TYPES?"special":"",l=g||o.RUNOFF_ELECTION_TYPE_CODES.includes(b)?"runoff":"",t=n()(`${D}-${P}-${E}-elections`),s=n()(`${C}-${p}-${l}-results`);return`/politics/${t}/${s}`};function y(d,C=!0,g=!1){if(typeof d!="string")return"";switch(d){case o.OFFICE_CODES.GOVERNOR:return"Governor";case o.OFFICE_CODES.HOUSE:return"House";case o.OFFICE_CODES.PRESIDENT:return"President";case o.OFFICE_CODES.SENATE:return"Senate";case o.OFFICE_CODES.SENATE_SPECIAL:return C?"Senate Special":"Senate";case o.OFFICE_CODES.ATTORNEY_GENERAL:return g?"Atty. Gen":"Attorney General";case o.OFFICE_CODES.LT_GOVERNOR:return g?"Lt. Gov":"Lieutenant Governor";case o.OFFICE_CODES.SECRETARY_OF_STATE:return g?"Sec. of State":"Secretary of State";case o.OFFICE_CODES.DISTRICT_ATTORNEY:return"District Attorney";case o.OFFICE_CODES.SUPREME_COURT:return"State Supreme Court";case o.OFFICE_CODES.MAYOR:return"Mayor";default:return""}}},"./helpers/getPartyColor.js":(v,a,e)=>{e.r(a),e.d(a,{default:()=>C});var i=e("./node_modules/lodash.get/index.js"),n=e.n(i),o=e("./data/partyColors.js"),u=e("./data/primaryColors.json"),m=e("./helpers/constants.js"),T=e("./helpers/isPrimaryElection.js");const R=["dem","rep"],B=["ind","npa","npt"],y=({normalizedParty:g,order:M,officeCode:b,useHousePrimaryColors:D,useFullColorPalette:p,electionSeason:P,electionTypeCode:E,stateAbbr:l})=>{const[t]=u.default;if(!g||typeof g!="string"||!M||typeof M!="number"||!b||typeof b!="string")return t;const s=m.OFFICE_NAMES[b]||"";let r="other",c="other";p&&g==="nonpartisan"?c=b:!p&&s.includes("president")?r="president":s==="house"&&(r=D&&!p?"house":"other",c=p?"other":"house");const f=n()(u,["season",P,b,l,E]),O=n()(u,["season",P,c,g]),h=n()(u,[r,g]),_=M-1,I=n()(f||O||h,[_]),S=n()(u,["season",P,c,"default",g]);return I||S||t},C=({party:g,order:M,officeCode:b,electionSeason:D,electionType:p,electionTypeCode:P="",stateAbbr:E,onlySupportMajorParties:l=!0,useHousePrimaryColors:t=!1,useFullColorPalette:s=!1})=>{const{default:{default:r}}=o.default,f=D&&n()(o.default,[D,"default"])||r;if(!g||typeof g!="string")return f;let O=g.toLowerCase();if(O==="gop"?O="rep":B.includes(O)&&(O="nonpartisan"),(0,T.default)(P)||p===m.ELECTION_TYPE.PRIMARY||s)return y({electionTypeCode:P,normalizedParty:O,order:M,officeCode:b,useHousePrimaryColors:t,useFullColorPalette:s,electionSeason:D,stateAbbr:E});if(l&&!R.includes(O))return f;const h=D&&n()(o.default,[D,O]),_=n()(o.default,["default",O],null);return h||_||f}},"./helpers/isExternalUrl.js":(v,a,e)=>{e.r(a),e.d(a,{default:()=>n});const n=o=>o?!/(^[#/])|((nbcnews|today|msnbc)\.com)/.test(o):!1},"./helpers/isPrimaryElection.js":(v,a,e)=>{e.r(a),e.d(a,{default:()=>u});var i=e("./helpers/constants.js"),n=e("./node_modules/console-browserify/index.js");const u=(m="")=>typeof m!="string"?(n.warn("isPrimaryElection expects a type of string"),!1):i.PRIMARY_ELECTION_TYPE_CODES.includes(m)},"./helpers/isRelativeUrl.js":(v,a,e)=>{e.r(a),e.d(a,{default:()=>n});const n=o=>o?!/^https?:\/\/|^\/\/|^mailto:|^#/i.test(o):!1},"./helpers/isTelemundo.js":(v,a,e)=>{e.r(a),e.d(a,{default:()=>o});var i=e("./helpers/constants.js");const o=u=>u===i.BRANDS.TELEMUNDO},"./helpers/stateNameUtilities.js":(v,a,e)=>{e.r(a),e.d(a,{getFipsIDFromStateName:()=>b,getStateAbbreviationByStateFipsId:()=>E,getStateAbbreviationByStateName:()=>l,getStateNameByStateAbbreviation:()=>p,getStateNameByStateFipsId:()=>D,getStateNameSlugByStateAbbreviation:()=>P,usStateAbbreviations:()=>M,usStateNames:()=>d,usStatesByStateAbbreviation:()=>g,usStatesByStateName:()=>C});var i=e("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),n=e("./node_modules/lodash.get/index.js"),o=e.n(n),u=e("./node_modules/lodash.kebabcase/index.js"),m=e.n(u),T=e("./data/usStates.js");function R(t,s){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(t);s&&(c=c.filter(function(f){return Object.getOwnPropertyDescriptor(t,f).enumerable})),r.push.apply(r,c)}return r}function B(t){for(var s=1;s<arguments.length;s++){var r=arguments[s]!=null?arguments[s]:{};s%2?R(Object(r),!0).forEach(function(c){(0,i.default)(t,c,r[c])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):R(Object(r)).forEach(function(c){Object.defineProperty(t,c,Object.getOwnPropertyDescriptor(r,c))})}return t}const y=T.default.reduce((t,s)=>{const{fips:r}=s;return t[r]=B({},s),t},{}),d=T.default.reduce((t,s)=>{const{name:r}=s;return t=[...t,r],t},[]),C=T.default.reduce((t,s)=>{const{name:r}=s;return t[r]=B({},s),t},{}),g=T.default.reduce((t,s)=>{const{abbr:r}=s;return t[r]=B({},s),t},{}),M=T.default.reduce((t,s)=>{const{abbr:r}=s;return t=[...t,r],t},[]),b=t=>{const s=C[t];return o()(s,"fips","")},D=t=>{const s=y[t];return o()(s,"name","")},p=t=>{const s=g[t];return o()(s,"name","")},P=t=>m()(p(t)),E=t=>{const s=y[t];return o()(s,"abbr","")},l=t=>{const s=T.default.find(c=>c.name.toLowerCase()===t.toLowerCase());return o()(s,"abbr","")}},"./server/v2/config/earlyVotingOrder.js":(v,a,e)=>{e.r(a),e.d(a,{default:()=>n});const n=["party registration","age","gender","vote type"]},"./server/v2/format/formatEarlyVoteData.js":(v,a,e)=>{e.r(a),e.d(a,{default:()=>E});var i=e("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),n=e("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),o=e("./node_modules/lodash.get/index.js"),u=e.n(o),m=e("./data/usStates.js"),T=e("./helpers/stateNameUtilities.js"),R=e("./helpers/determineOfficeType.js"),B=e("./helpers/constants.js"),y=e("./helpers/getPartyColor.js"),d=e("./server/v2/config/earlyVotingOrder.js");const C=["ballotSentData","ballotReturnedData"];function g(l,t){var s=Object.keys(l);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(l);t&&(r=r.filter(function(c){return Object.getOwnPropertyDescriptor(l,c).enumerable})),s.push.apply(s,r)}return s}function M(l){for(var t=1;t<arguments.length;t++){var s=arguments[t]!=null?arguments[t]:{};t%2?g(Object(s),!0).forEach(function(r){(0,i.default)(l,r,s[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(l,Object.getOwnPropertyDescriptors(s)):g(Object(s)).forEach(function(r){Object.defineProperty(l,r,Object.getOwnPropertyDescriptor(s,r))})}return l}const b={dem:"#0471E6",rep:"#DE3535",gop:"#DE3535",other:"#ccc",unknown:"#ccc","18-29":"#DF5209","30-39":"#C00594","40-49":"#84AD48","50-64":"#EEB900","65 or over":"#14866D",men:"#05710F",women:"#645FAA","mail-in":"#F96419","in-person":"#DB0E9C"},D=l=>t=>{if(!t&&!t.values)return t;let s=()=>!0;const r=t.name.toLowerCase(),c=r==="party registration",f=r==="age";return r==="vote type"?s=h=>h.value>0:t.values.every(({value:h})=>h<=0)&&(s=()=>!1),t.values=t.values.filter(s).map(h=>{let{description:_}=h;const I=_.toLowerCase();let S=b[I]||b.other;return c&&(S=(0,y.default)({party:_,electionSeason:l,onlySupportMajorParties:!0})),_==="Dem"&&(_="DEM"),_==="Rep"&&(_="GOP"),f&&I==="other"&&(_="Unknown"),{value:h.value,color:S,description:_}}),t},p=(l,t)=>d.default.indexOf(l.name.toLowerCase())-d.default.indexOf(t.name.toLowerCase());function P(l,t,s=!1){const r=s?()=>!0:h=>h.values&&h.values.length,{ballotSentData:c,ballotReturnedData:f}=l,O=(0,n.default)(l,C);return O.ballotSentData=c?c.map(D(t)).filter(r).sort(p):[],O.ballotReturnedData=f?f.map(D(t)).filter(r).sort(p):[],O}function E({earlyVoteData:l,stateAbbr:t,electionSeason:s,useAllowlist:r=!0,allowlist:c=[]}){if(s>=2022&&t==="US"){const f=m.default.reduce((_,{abbr:I})=>{const S=(0,T.getStateNameSlugByStateAbbreviation)(I),F=(0,R.getStateOfficeLink)({electionSeason:s,electionType:B.ELECTION_TYPE.GENERAL,stateNameSlug:S});return _[I]={stateName:(0,T.getStateNameByStateAbbreviation)(I),totalBallots:0,resultsUrl:!r||c.includes(F)?F:null},_},{});let O=null;const h=Array.isArray(l.data)?l.data.reduce((_,I)=>{const S=Object.entries(I);if(!S.length)return _;const[F,j]=S[0];if(!j)return _;const L=P(j,s,!0);return F==="US"?O=L:_[F]=M(M(M({},_[F]),L),{},{totalBallots:u()(L,"comparison.earlyAbsentee",0)}),_},f):f;return{national:O,states:h,lastModified:l.lastModified||null}}return P(l,s)}},"./server/v2/helpers/officeCodeToSlug.js":(v,a,e)=>{e.r(a),e.d(a,{default:()=>o});var i=e("./helpers/constants.js");const o={[i.OFFICE_CODES.ATTORNEY_GENERAL]:"attorney-general",[i.OFFICE_CODES.GOVERNOR]:"governor",[i.OFFICE_CODES.HOUSE]:"house",[i.OFFICE_CODES.LT_GOVERNOR]:"lieutenant-governor",[i.OFFICE_CODES.PRESIDENT]:"president",[i.OFFICE_CODES.SECRETARY_OF_STATE]:"secretary-of-state",[i.OFFICE_CODES.SENATE]:"senate",[i.OFFICE_CODES.MAYOR]:"mayor",[i.OFFICE_CODES.DISTRICT_ATTORNEY]:"district-attorney",[i.OFFICE_CODES.SUPREME_COURT]:"state-supreme-court",[i.OFFICE_CODES.STATE_SENATE]:"state-senate",[i.OFFICE_CODES.SENATE_SPECIAL]:"senate"}},"./data/primaryColors.json":v=>{v.exports=JSON.parse('{"president":{"dem":["#3899E7","#A861B5","#84AD48","#DD7026","#697BB6","#3A766F","#6C4682","#F1A410","#89D0E0","#414E7D","#8DB0D9","#8D438B","#738754","#90E0AD","#B8983B","#46A695"],"rep":["#DE3535","#750C0C","#CD7575","#A80101","#9B7777","#470000"]},"house":{"dem":["#308CEF","#C00594","#84AD48","#F96419","#7D78C3","#14866D","#730069","#EEB900","#50CDB1","#68A9EF","#113F75"],"rep":["#DE3535","#6D0000","#EEB8B8","#BB2323","#EE6868","#952727"]},"other":{"dem":["#388FC2","#213F64","#839EBE","#2D5D98","#5F7887","#011521","#285F7F","#5D8CA9","#3A719C","#1F4C83","#3F82AA","#05334F"],"rep":["#DE3535","#750C0C","#CD7575","#A80101","#9B7777","#470000"]},"default":["#595959"],"season":{"2022":{"house":{"dem":[],"rep":[],"default":{"rep":"#D42F37","dem":"#009AF4"}},"other":{"dem":["#009AF4","#8567E6","#20A4A8","#1F69AB","#8A8FBF"],"rep":["#D42F37","#D77F2D","#A23D69","#BD84A3","#CE5883"],"default":{"rep":"#5C5C5C","dem":"#5C5C5C","yes":"#9E0084","no":"#2AA78B"}}},"2023":{"B":{"WI":{"G":["#CD7575","#6873AE"]}},"M":{"CH":{"W":["#5F7887","#839EBE"]}}},"2024":{"other":{"dem":["#0487E6","#034B8F","#00CBAC","#8370F1","#79AF2D","#F1A410","#278685","#8D43AB","#73718B","#8DB0D9","#B89846","#80DAEE","#738754","#90EDAD","#41D7ED"],"rep":["#DD2929","#8F1B1B","#F69696","#E38B39","#B84C96","#FF6000","#9F8383","#BC8604","#DEB703","#E26D99","#D8A084","#877354","#470000","#BB37FF","#8A3752"],"default":{"rep":"#959595","dem":"#959595","yes":"#F96419","no":"#645FAA","other":"#959595"}}}}}')}}]);
