"use strict";(globalThis.webpackChunkfirecracker=globalThis.webpackChunkfirecracker||[]).push([[8986],{"./components/Headshot/Headshot.js":(B,m,e)=>{e.r(m),e.d(m,{default:()=>P});var f=e("./node_modules/styled-jsx/style.js"),n=e.n(f),l=e("./node_modules/next/dist/compiled/react/index.js"),p=e("./node_modules/prop-types/index.js"),s=e.n(p),A=e("./node_modules/classnames/index.js"),d=e.n(A),h=e("./node_modules/next/amp.js"),C=e.n(h),j=e("./components/ResponsiveImage.js"),v=e("./helpers/getHeadshotUrl.js"),E=l.createElement;const u=`${v.headshotBaseUrl}/candidate_fallback_light.png`;function P({candidateColor:c,className:O,headshotUrl:y,backgroundHeight:I,backgroundWidth:a,height:i,width:t,alt:b,useInlineStyles:K}){const o=(0,h.useAmp)();return E(l.Fragment,null,E(n(),{id:"3375707309"},[".headshot-container{border-radius:calc(var(--width) / 2);}",".headshot-container::before{content:'';position:absolute;bottom:0;left:0;z-index:-1;height:var(--background-height);width:var(--background-width);background-color:var(--background-color);border-radius:50%;}",".headshot-container img{overflow:hidden;border-radius:calc(var(--width) / 2);width:var(--width);height:var(--height);object-fit:cover;}",".headshot-container.amp{width:var(--width);height:var(--height);}"]),E(n(),{id:"3279140582",dynamic:[t,i,a||t,I||i,c]},[`.headshot-container.__jsx-style-dynamic-selector{--width:${t}px;--height:${i}px;--background-width:${a||t}px;--background-height:${I||i}px;--background-color:${c};}`]),E("div",{style:K?{"--width":`${t}px`,"--height":`${i}px`,"--background-width":`${a||t}px`,"--background-height":`${I||i}px`,"--background-color":`${c}`}:null,"data-nosnippet":!0,className:"jsx-3375707309 "+n().dynamic([["3279140582",[t,i,a||t,I||i,c]]])+" "+(d()("headshot-container relative z-0",O,{amp:o})||"")},E(j.default,{"aria-hidden":!0,alt:b,className:"headshot db",src:y,defaultImageSize:"2x",fallbackSrc:u,width:t,height:i,transformations:`f_auto,q_auto,w_${t*3},h_${i*3},c_fit`,useAmpImage:!0})))}P.propTypes={backgroundHeight:s().number,backgroundWidth:s().number,candidateColor:s().string,className:s().string,headshotUrl:s().string.isRequired,height:s().number.isRequired,width:s().number.isRequired,alt:s().string,useInlineStyles:s().bool},P.defaultProps={backgroundHeight:void 0,backgroundWidth:void 0,candidateColor:"#ebebeb",className:void 0,alt:"Candidate headshot",useInlineStyles:!1}},"./components/ResponsiveImage.js":(B,m,e)=>{e.r(m),e.d(m,{default:()=>I});var f=e("./node_modules/@babel/runtime/helpers/esm/extends.js"),n=e("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),l=e("./node_modules/styled-jsx/style.js"),p=e.n(l),s=e("./node_modules/next/dist/compiled/react/index.js"),A=e("./node_modules/prop-types/index.js"),d=e.n(A),h=e("./node_modules/next/amp.js"),C=e("./node_modules/classnames/index.js"),j=e.n(C);function v(a){return a?.includes("media-cldnry")||a?.includes("cloudinary.com")}function E(a,i){return v(a)&&i?a.replace("/image/upload/",`/image/upload/${i}/`):a}const u=new RegExp("/(t_[^/]+)/"),P=(a,i,t="best")=>{const b=`/t_${i},f_auto,q_auto:${t}/`;return u.test(a)?a.replace(u,b):a.replace("/image/upload/",`/image/upload${b}`)},c=(a,i)=>v(a)?P(a,i):a,O=["className","src","defaultImageSize","transformations","fallbackSrc","useAmpImage"];var y=s.createElement;function I(a){let{className:i,src:t,defaultImageSize:b,transformations:K,fallbackSrc:o,useAmpImage:_}=a,x=(0,n.default)(a,O);const N=(0,h.useAmp)(),{0:S,1:L}=(0,s.useState)(t),D=(0,s.useRef)(t),M=(0,s.useRef)(null);(0,s.useEffect)(()=>{D.current!==t&&(D.current=t,L(t))},[t]);const R=E(S,K),g=(0,s.useMemo)(()=>({"1x":R,"2x":E(R,"dpr_2.0"),"3x":E(R,"dpr_3.0")}),[R]);if((0,s.useEffect)(()=>{M.current&&(M.current.src=g[b],M.current.srcset=`${g["2x"]} 2x, ${g["3x"]} 3x`)},[]),!S)return null;const H=()=>{o&&L(o)};if(N&&_){const T=E(o,K);return y(s.Fragment,null,y(p(),{id:"789105330",dynamic:[x.width,x.height]},[`amp-img.__jsx-style-dynamic-selector{width:${x.width}px;height:${x.height}px;}`]),y("amp-img",(0,f.default)({},x,{"data-testid":"image",layout:"responsive",src:g[b],srcSet:`${g["2x"]} 2x, ${g["3x"]} 3x`,noloading:"",class:p().dynamic([["789105330",[x.width,x.height]]])+" "+(j()("db",i)||"")}),y("amp-img",(0,f.default)({},x,{fallback:"",layout:"responsive","data-testid":"image",src:T,noloading:"",class:p().dynamic([["789105330",[x.width,x.height]]])+" "+(i||"")}))))}return y(s.Fragment,null,y(p(),{id:"1021350832"},["img.jsx-1021350832{font-size:0;}"]),y("img",(0,f.default)({},x,{ref:M,"data-testid":"image",onError:H,src:g[b],srcSet:`${g["2x"]} 2x, ${g["3x"]} 3x`,className:"jsx-1021350832 "+(i||"")})))}I.propTypes={fallbackSrc:d().string,src:d().string,defaultImageSize:d().oneOf(["1x","2x","3x"]),transformations:d().string,useAmpImage:d().bool},I.defaultProps={fallbackSrc:null,src:null,defaultImageSize:"1x",transformations:null,useAmpImage:!1}},"./components/modules/ResultsSummary/Bar.js":(B,m,e)=>{e.r(m),e.d(m,{default:()=>j});var f=e("./node_modules/styled-jsx/style.js"),n=e.n(f),l=e("./node_modules/classnames/index.js"),p=e.n(l),s=e("./node_modules/next/dist/compiled/react/index.js"),A=e("./node_modules/prop-types/index.js"),d=e.n(A),h=e("./components/modules/ResultsSummary/constants.js"),C=s.createElement;function j({animationDelayMs:v,animateInitialValue:E,"aria-label":u,className:P,isAnimated:c,percentInFormatted:O}){const{0:y,1:I}=(0,s.useState)(E?"0%":O);(0,s.useEffect)(()=>{I(O)},[O]);const a=p()("bar relative overflow-hidden",P,{border:y!=="0%"&&y!=="100%",animate:c});return C(s.Fragment,null,C(n(),{id:"1635479720",dynamic:[h.ANIMATION_TIMEOUT_MS,v]},[".bar.__jsx-style-dynamic-selector{height:var(--bar-height,3px);background:var(--bar-bg,#dedede);}",".bar.__jsx-style-dynamic-selector::after{content:'';background:var(--bar-color,#ffd60c);z-index:1;position:absolute;top:0;bottom:0;left:0;width:var(--percent-in);}",`.animate.__jsx-style-dynamic-selector::after{-webkit-transition:width ${h.ANIMATION_TIMEOUT_MS}ms ease-in-out;transition:width ${h.ANIMATION_TIMEOUT_MS}ms ease-in-out;-webkit-transition-delay:${v}ms;transition-delay:${v}ms;}`,".border.__jsx-style-dynamic-selector::after{border-right:1px solid #fff;}"]),C("div",{role:"meter","aria-label":u,"aria-valuemin":0,"aria-valuemax":100,"aria-valuenow":y?.slice(0,-1)??0,style:{"--percent-in":y},className:n().dynamic([["1635479720",[h.ANIMATION_TIMEOUT_MS,v]]])+" "+(a||"")}))}j.propTypes={animationDelayMs:d().number,animateInitialValue:d().bool,"aria-label":d().string,className:d().string,isAnimated:d().bool,percentInFormatted:d().string.isRequired},j.defaultProps={animationDelayMs:0,animateInitialValue:!1,"aria-label":null,className:null,isAnimated:!0}},"./components/modules/ResultsSummary/CandidateRow.js":(B,m,e)=>{e.r(m),e.d(m,{default:()=>_});var f=e("./node_modules/styled-jsx/style.js"),n=e.n(f),l=e("./node_modules/next/dist/compiled/react/index.js"),p=e("./node_modules/prop-types/index.js"),s=e.n(p),A=e("./node_modules/classnames/index.js"),d=e.n(A),h=e("./node_modules/next/amp.js"),C=e("./components/NumberChange/NumberChangeFlyout.js"),j=e("./components/modules/ResultsSummary/Bar.js"),v=e("./components/Headshot/Headshot.js"),E=e("./components/Checkmark.js"),u=e("./components/modules/ResultsSummary/utils.js"),P=e("./components/providers/RaceContext.js"),c=l.createElement;function O({callStatusCode:x,candidateColor:N,headshotUrl:S,isIncumbent:L,isWinner:D,longestName:M,displayName:R,name:g,useInlineHeadshotStyles:H,showHeadshot:T}){const{allowMultiWinners:$,id:F}=(0,l.useContext)(P.default),W=D||(0,u.goesToRunoff)({allowMultiWinners:$,callStatusCode:x});return c(l.Fragment,null,c(n(),{id:"927782092"},[".advancing.jsx-927782092{background:var(--candidate-color);color:#fff;}",".placeholder-name.jsx-927782092{height:0;color:transparent;}",".headshot.jsx-927782092{height:32px;}"]),c("div",{role:"cell","aria-labelledby":(0,u.getColumnHeaderId)({id:F,type:u.COLUMN_HEADER_TYPE.CANDIDATE}),className:"jsx-927782092 "+(d()("candidate relative df items-center pl2 pr4 pv2",{advancing:W})||"")},T&&c("div",{className:"jsx-927782092 headshot mr2 df items-end"},c(v.default,{candidateColor:W?"#fff":N,candidateName:g,headshotUrl:S,backgroundHeight:32,height:37,width:32,useInlineStyles:H})),c("div",{className:"jsx-927782092 df flex-column"},c("div",{className:"jsx-927782092 df items-center"},c("span",{className:"jsx-927782092"},R||g),D&&c(E.default,{className:"ml1",nonpartisanWinner:!0,shouldDisplay:!0,width:"16px"})),c("span",{"aria-hidden":!0,className:"jsx-927782092 placeholder-name overflow-hidden"},M),L&&c("span",{className:"jsx-927782092 "+(d()("fw3",W?"white":"gray-80")||"")},"Incumbent"))))}O.propTypes={callStatusCode:s().string.isRequired,candidateColor:s().string.isRequired,displayName:s().node,headshotUrl:s().string.isRequired,isIncumbent:s().bool,isWinner:s().bool,longestName:s().node,name:s().string.isRequired,useInlineHeadshotStyles:s().bool,showHeadshot:s().bool},O.defaultProps={displayName:void 0,isIncumbent:!1,isWinner:!1,longestName:void 0,useInlineHeadshotStyles:void 0,showHeadshot:!0};var y=e("./components/NumberChange/NumberChangeAnimation.js"),I=e("./components/NumberChange/NumberChangeHighlight.js"),a=l.createElement;const i=(x,N)=>N==null?x.toLocaleString():x.toFixed(N).toLocaleString();function t({animationDelayMs:x,animateInitialValue:N,backgroundColor:S,className:L,isAnimated:D,isPercent:M,prefix:R,role:g,toFixed:H,type:T,value:$}){const{id:F}=(0,l.useContext)(P.default),W=g==="cell"&&T?(0,u.getColumnHeaderId)({id:F,type:T}):null;return D?a(l.Fragment,null,a(n(),{id:"1388494888"},[".number-cell.number-change .number-change-bg{left:-2px;right:-2px;top:-2px;bottom:-2px;}"]),a(I.default,{className:d()("number-cell tr",L),backgroundColor:S,value:$},a(y.default,{value:$,animateInitialValue:N,durationMs:500,animationDelayMs:x},z=>a("span",{role:g,"aria-labelledby":W,className:"jsx-1388494888"},R,i(z,H),M?"%":"")))):a("div",{className:d()("number-cell tr",L)},a("span",{role:g,"aria-labelledby":W},R,i($,H),M?"%":""))}t.propTypes={animationDelayMs:s().number,animateInitialValue:s().bool,backgroundColor:s().string.isRequired,className:s().string,isAnimated:s().bool,isPercent:s().bool,prefix:s().string,role:s().string,toFixed:s().number,type:s().oneOf(Object.values(u.COLUMN_HEADER_TYPE)),value:s().number.isRequired},t.defaultProps={animationDelayMs:void 0,animateInitialValue:void 0,className:null,isAnimated:!0,isPercent:!1,prefix:null,toFixed:void 0,role:"cell",type:null};var b=e("./components/modules/ResultsSummary/constants.js"),K=e("./components/providers/PageContext.js"),o=l.createElement;function _({colorHex:x,callStatus:N,delegates:S,displayName:L,formattedPercentVote:D,headshotUrl:M,"aria-rowindex":R,isAnimated:g,isIncumbent:H,isOverflowCandidate:T,isWinner:$,layout:F,longestName:W,name:z,percentVote:Y,votes:X,useInlineHeadshotStyles:J}){const{electionSeason:Q}=(0,l.useContext)(K.default),{id:Z,officeCode:w,electionTypeCode:k,stateAbbr:q}=(0,l.useContext)(P.default),V=(0,h.useAmp)(),r=x,G=F===b.LAYOUT.PRESIDENTIAL,ee=(0,u.showDelegateCount)({electionSeason:Q,stateAbbr:q,officeCode:w,electionTypeCode:k}),U=g&&!V;return o(l.Fragment,null,o(n(),{id:"1163061356"},[".row.jsx-1163061356{--bar-height:12px;}",".row.jsx-1163061356>*{position:relative;}",".row.jsx-1163061356:not(:last-child)>*::after{content:'';position:absolute;bottom:0;left:0;right:calc(-1 * var(--column-gap));height:1px;background:#dedede;}",".row.jsx-1163061356:not(:last-child)>*:last-child::after{right:0;}",".presidential.jsx-1163061356 .bar{margin-top:2px;}",".presidential.jsx-1163061356>*{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}",".presidential.jsx-1163061356 .percent{width:43px;-webkit-flex:0 0 43px;-ms-flex:0 0 43px;flex:0 0 43px;}"]),o(n(),{id:"2965516424",dynamic:[r,r]},[`.row.__jsx-style-dynamic-selector{--candidate-color:${r};--bar-color:${r};}`]),o("div",{"aria-rowindex":V?void 0:R,role:"row",className:"jsx-1163061356 "+n().dynamic([["2965516424",[r,r]]])+" "+(d()("row relative dc",{presidential:G})||"")},o(O,{callStatusCode:N,candidateColor:r,headshotUrl:M,isIncumbent:H,isWinner:$,longestName:W,displayName:L,name:z,useInlineHeadshotStyles:J}),G?o(l.Fragment,null,ee&&o("div",{className:"jsx-1163061356 "+n().dynamic([["2965516424",[r,r]]])+" justify-end"},o(t,{isAnimated:U,backgroundColor:r,className:"fw3 justify-end",value:S??0,prefix:S?"+":null,type:u.COLUMN_HEADER_TYPE.DELEGATES})),o("div",{className:"jsx-1163061356 "+n().dynamic([["2965516424",[r,r]]])+" justify-end"},o(t,{isAnimated:U,animationDelayMs:T?250:0,backgroundColor:r,className:"fw3",value:X||0,type:u.COLUMN_HEADER_TYPE.VOTES})),o("div",{role:"cell","aria-labelledby":(0,u.getColumnHeaderId)({id:Z,type:u.COLUMN_HEADER_TYPE.PERCENTAGE}),className:"jsx-1163061356 "+n().dynamic([["2965516424",[r,r]]])+" df items-center justify-end"},o(j.default,{isAnimated:U,animationDelayMs:T?250:0,animateInitialValue:!V,className:"w-100 dn db-m mr1","aria-label":"Percent of votes received",percentInFormatted:D}),o(C.default,{enabled:U,isPercent:!0,className:"percent pr1 justify-end",value:Y||0,backgroundColor:r,topEnd:"calc(-100% - 5px)"},o(t,{isAnimated:U,backgroundColor:r,role:null,toFixed:1,value:Y||0,isPercent:!0})))):o("div",{className:"jsx-1163061356 "+n().dynamic([["2965516424",[r,r]]])+" percent pv2 pr1"},o("div",{className:"jsx-1163061356 "+n().dynamic([["2965516424",[r,r]]])+" df justify-between mb1"},o(t,{animationDelayMs:T?250:0,animateInitialValue:!0,backgroundColor:r,className:"fw3 mr1",isAnimated:U,type:u.COLUMN_HEADER_TYPE.VOTES,value:X}),o(C.default,{enabled:U,isPercent:!0,value:Y||0,backgroundColor:r,topEnd:"calc(-100% - 5px)"},o(t,{backgroundColor:r,isAnimated:U,value:Y,toFixed:1,type:u.COLUMN_HEADER_TYPE.PERCENTAGE,isPercent:!0}))),o(j.default,{animationDelayMs:T?250:0,animateInitialValue:!V,isAnimated:U,percentInFormatted:D,"aria-label":"Percent of votes received"}))))}_.propTypes={"aria-rowindex":s().number.isRequired,colorHex:s().string.isRequired,callStatus:s().string.isRequired,displayName:s().node,formattedPercentVote:s().string.isRequired,headshotUrl:s().string.isRequired,isAnimated:s().bool,isIncumbent:s().bool,isOverflowCandidate:s().bool,isWinner:s().bool,layout:s().oneOf(Object.values(b.LAYOUT)),longestName:s().node,name:s().string.isRequired,percentVote:s().number.isRequired,useInlineHeadshotStyles:s().bool,votes:s().number.isRequired},_.defaultProps={displayName:void 0,isAnimated:!0,isIncumbent:!1,isOverflowCandidate:!1,isWinner:!1,layout:b.LAYOUT.DEFAULT,longestName:void 0,useInlineHeadshotStyles:void 0}},"./components/modules/ResultsSummary/Cells/ColumnHeader.js":(B,m,e)=>{e.r(m),e.d(m,{default:()=>d});var f=e("./node_modules/next/dist/compiled/react/index.js"),n=e("./node_modules/classnames/index.js"),l=e.n(n),p=e("./components/providers/RaceContext.js"),s=e("./components/modules/ResultsSummary/utils.js"),A=f.createElement;function d({className:h,children:C,type:j}){const{id:v}=(0,f.useContext)(p.default);return A("div",{className:l()("header fw3",h),role:"columnheader",id:(0,s.getColumnHeaderId)({id:v,type:j}),"aria-sort":"none"},C)}d.displayName="ColumnHeader"},"./components/modules/ResultsSummary/constants.js":(B,m,e)=>{e.r(m),e.d(m,{ANIMATION_TIMEOUT_MS:()=>f,LAYOUT:()=>n,POLLS_TEXT:()=>p,RACE_CALL_HEADSHOT_DIMENSIONS:()=>l});const f=300,n={PRESIDENTIAL:"presidential",DEFAULT:"default"},l={backgroundHeight:45,height:53,width:45},p={ENTRANCE_POLLS:"Entrance Polls",EXIT_POLLS:"Exit Polls"}},"./components/providers/PageContext.js":(B,m,e)=>{e.r(m),e.d(m,{default:()=>l});var f=e("./node_modules/next/dist/compiled/react/index.js");const l=(0,f.createContext)({url:"",datePublished:"",electionSeason:"",electionType:"",hidePollsClose:!1})},"./components/providers/RaceContext.js":(B,m,e)=>{e.r(m),e.d(m,{RaceContextProvider:()=>A,default:()=>s});var f=e("./node_modules/next/dist/compiled/react/index.js"),n=e("./node_modules/lodash-es/kebabCase.js"),l=f.createElement;const p=(0,f.createContext)({id:"",officeCode:"",electionTypeCode:"",allowMultiWinners:!1,stateAbbr:"",raceName:"",geography:"counties"}),s=p;function A({id:d,officeCode:h,electionTypeCode:C,allowMultiWinners:j,geography:v,raceName:E,stateAbbr:u,children:P}){const c=(0,f.useMemo)(()=>({id:d||(0,n.default)(E),officeCode:h,electionTypeCode:C,allowMultiWinners:j,geography:v,raceName:E,stateAbbr:u}),[j,C,v,h,E,u]);return l(p.Provider,{value:c},P)}A.displayName="RaceContextProvider"}}]);
