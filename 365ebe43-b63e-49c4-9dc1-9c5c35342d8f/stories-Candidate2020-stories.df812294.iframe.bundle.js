(globalThis.webpackChunkfirecracker=globalThis.webpackChunkfirecracker||[]).push([[8285],{"./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js":(T,m,t)=>{"use strict";t.r(m),t.d(m,{default:()=>f});function n(e,i){if(e==null)return{};var c={},o=Object.keys(e),s,a;for(a=0;a<o.length;a++)s=o[a],!(i.indexOf(s)>=0)&&(c[s]=e[s]);return c}function f(e,i){if(e==null)return{};var c=n(e,i),o,s;if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(s=0;s<a.length;s++)o=a[s],!(i.indexOf(o)>=0)&&Object.prototype.propertyIsEnumerable.call(e,o)&&(c[o]=e[o])}return c}},"./components/stories/Candidate2020.stories.js":(T,m,t)=>{"use strict";t.r(m),t.d(m,{Default:()=>u,GreyedOutCandidate:()=>C,VerticalKnockoutText:()=>y,VerticalNoKnockout:()=>P,__namedExportsOrder:()=>A,default:()=>g});var n=t("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),f=t("./node_modules/next/dist/compiled/react/index.js"),e=t("./components/Candidate/2020/Candidate.js");const i=["text","headshotUrl"],c=["text","headshotUrl"],o=["text","headshotUrl"],s=["text","headshotUrl"];var a=f.createElement;const g={component:e.default,title:"Global Components/Candidates/2020/Candidate",argTypes:{knockoutBgColor:{name:"Knockout Toolkit Background Class",control:{type:"text"}}},parameters:{controls:{exclude:["options"]},status:{type:"deprecated"}}},u=l=>{let{text:x,headshotUrl:r}=l,d=(0,n.default)(l,i);return a(e.default,{text:x,headshotUrl:r,options:d})};u.displayName="Default",u.args={text:"Biden",headshotUrl:"https://nodeassets.nbcnews.com/elections/headshots/2020/US_P00_D_J_BIDEN.jpg",isVertical:!1,isGrayscale:!1,knockoutBgColor:null};const y=l=>{let{text:x,headshotUrl:r}=l,d=(0,n.default)(l,c);return a("div",{style:{width:"50px"}},a(e.default,{text:x,headshotUrl:r,options:d}))};y.displayName="VerticalKnockoutText",y.args={text:"Biden",headshotUrl:"https://nodeassets.nbcnews.com/elections/headshots/2020/US_P00_D_J_BIDEN.jpg",isVertical:!0,isGrayscale:!1,knockoutBgColor:"bg-amber"};const P=l=>{let{text:x,headshotUrl:r}=l,d=(0,n.default)(l,o);return a("div",{style:{width:"50px"}},a(e.default,{text:x,headshotUrl:r,options:d}))};P.displayName="VerticalNoKnockout",P.args={text:"Biden",headshotUrl:"https://nodeassets.nbcnews.com/elections/headshots/2020/US_P00_D_J_BIDEN.jpg",isVertical:!0,isGrayscale:!1,knockoutBgColor:void 0};const C=l=>{let{text:x,headshotUrl:r}=l,d=(0,n.default)(l,s);return a(e.default,{text:x,headshotUrl:r,options:d})};C.displayName="GreyedOutCandidate",C.args={text:"Biden",headshotUrl:"https://nodeassets.nbcnews.com/elections/headshots/2020/US_P00_D_J_BIDEN.jpg",isVertical:!1,isGrayscale:!0,knockoutBgColor:void 0};const A=["Default","VerticalKnockoutText","VerticalNoKnockout","GreyedOutCandidate"]},"./components/Candidate/2020/Candidate.js":(T,m,t)=>{"use strict";t.r(m),t.d(m,{default:()=>P});var n=t("./node_modules/@babel/runtime/helpers/esm/extends.js"),f=t("./node_modules/styled-jsx/style.js"),e=t.n(f),i=t("./node_modules/next/dist/compiled/react/index.js"),c=t("./node_modules/prop-types/index.js"),o=t.n(c),s=t("./node_modules/classnames/index.js"),a=t.n(s),g=t("./components/Headshot/2020/index.js"),u=i.createElement;const y=({text:C,screenReaderText:A,headshotUrl:l,options:x})=>{const{isVertical:r,knockoutBgColor:d,isGrayscale:_}=x,j=a()({"flex-column flex-column-reverse items-center tc f2":r,"items-center pr3 tr f3":!r,grayscale:_}),h=r?{width:"50",height:"50"}:{width:"32",height:"32"},O=a()({[d]:d,"white ph2 pv1":d,"gray-100":!d,"w-100":r,"mw-70px pr2":!r});return u(i.Fragment,null,u(e(),{id:"2341337156"},[".mw-70px.jsx-2341337156{min-width:70px;}",".mw-48px.jsx-2341337156{min-width:48px;}",".grayscale.jsx-2341337156{-webkit-filter:grayscale(1);filter:grayscale(1);}"]),u("div",{"data-test":"candidate",className:`jsx-2341337156 df ${j}`},u("span",{"data-test":"candidate__color","aria-hidden":"true",className:`jsx-2341337156 founders-cond lh-none fw6 ttu ${O}`},C),u(g.default,(0,n.default)({},h,{headshotUrl:l})),u("div",{className:"jsx-2341337156 screen-reader-only"},A||C)))};y.propTypes={text:o().string,headshotUrl:o().string,options:o().objectOf(o().any)},y.defaultProps={text:"",headshotUrl:"",options:{}};const P=y},"./components/Headshot/2020/index.js":(T,m,t)=>{"use strict";t.r(m),t.d(m,{default:()=>x});var n=t("./node_modules/next/dist/compiled/react/index.js"),f=t("./node_modules/prop-types/index.js"),e=t.n(f),i=t("./node_modules/next/amp.js"),c=t("./node_modules/styled-jsx/style.js"),o=t.n(c),s=t("./helpers/getHeadshotUrl.js"),a=n.createElement;const g=({headshotUrl:r,altText:d,height:_,width:j,classes:h="gray-square",fileExtension:O="jpg",useFallback:E})=>{const p=`${s.headshotBaseUrl}/2020/candidate_fallback.${O}`;return a(n.Fragment,null,a(o(),{id:"884119781"},[".headshot--amp{position:relative;}",".headshot--amp amp-img img{object-fit:cover;}",".headshot.gray-square{background-color:#f1f1f1;}",".headshot.rounded-bottom amp-img{border-radius:0 0 50% 50%;}",".border-radius-50 amp-img img{border-radius:50%;}"]),a(o(),{id:"3624786546",dynamic:[_,j]},[`.headshot--amp.__jsx-style-dynamic-selector{height:${_}px;width:${j}px;}`,".border-radius-50.__jsx-style-dynamic-selector{border-radius:50%;}"]),a("div",{className:"jsx-884119781 "+o().dynamic([["3624786546",[_,j]]])+` headshot headshot--amp ${h}`},E?a("amp-img",{alt:d,layout:"fill",height:_,src:r||p,class:"jsx-884119781 "+o().dynamic([["3624786546",[_,j]]])},a("amp-img",{alt:d,layout:"fill",height:_,src:p,class:"jsx-884119781 "+o().dynamic([["3624786546",[_,j]]])})):a("amp-img",{alt:d,layout:"fill",height:_,src:r,class:"jsx-884119781 "+o().dynamic([["3624786546",[_,j]]])})))};g.propTypes={headshotUrl:e().string.isRequired,altText:e().string,height:e().oneOfType([e().string,e().number]),width:e().oneOfType([e().string,e().number]),useFallback:e().bool},g.defaultProps={altText:"",height:"50",width:"50",useFallback:!0};const u=g;var y=n.createElement;const P=({headshotUrl:r="",height:d,width:_,classes:j="gray-square",fileExtension:h="jpg",useFallback:O})=>{const E=`${s.headshotBaseUrl}/2020/candidate_fallback.${h}`,p=O?`url('${r}'), url('${E}')`:`url('${r}')`;return y(n.Fragment,null,y(o(),{id:"2818745285",dynamic:[p,d,_]},[`.headshot.__jsx-style-dynamic-selector{background-image:${p};height:${d}px;width:${_}px;}`,".headshot.gray-square.__jsx-style-dynamic-selector{background-color:#f1f1f1;}",".headshot.rounded-bottom.__jsx-style-dynamic-selector{border-radius:0 0 50% 50%;}",".border-radius-50.__jsx-style-dynamic-selector{border-radius:50%;}"]),y("div",{"data-test":"headshot",className:o().dynamic([["2818745285",[p,d,_]]])+` headshot ${j}`}))};P.propTypes={headshotUrl:e().string.isRequired,height:e().oneOfType([e().string,e().number]),width:e().oneOfType([e().string,e().number]),useFallback:e().bool},P.defaultProps={height:"50",width:"50",useFallback:!0};const C=P;var A=n.createElement;const l=r=>(0,i.useAmp)()?A(u,r):A(C,r);l.displayName="Headshot",l.propTypes={headshotUrl:e().string.isRequired,altText:e().string,height:e().oneOfType([e().string,e().number]),width:e().oneOfType([e().string,e().number])},l.defaultProps={altText:"",height:"50",width:"50"};const x=l},"./helpers/getHeadshotUrl.js":(T,m,t)=>{"use strict";t.r(m),t.d(m,{default:()=>j,getCorrectStateAbbr:()=>r,headshotBaseUrl:()=>f});var n=t("./helpers/constants.js");const f="https://media-cldnry.s-nbcnews.com/image/upload/firecracker/headshots",{ATTORNEY_GENERAL:e,GOVERNOR:i,LT_GOVERNOR:c,PRESIDENT:o,PRES_PRE_VIABILITY:s,PRESIDENT_SPECIAL:a,SENATE:g,SENATE_SPECIAL:u,SECRETARY_OF_STATE:y,STATE_SENATE:P,MAYOR:C,SUPREME_COURT:A}=n.OFFICE_CODES,l={[e]:"A00",[i]:"G00",[c]:"L00",[o]:"P00",[a]:"P00",[s]:"P00",[g]:"S00",[u]:"S00",[y]:"SS0",[P]:"Z20",[C]:"M00",[A]:"B00"},x=["dem","rep"],r=({electionSeason:h,electionType:O,stateCode:E,officeCode:p})=>h==="2022"&&O===n.ELECTION_TYPE.PRIMARY&&E==="A0"&&p===n.OFFICE_CODES.STATE_SENATE?"AZ":h==="2022"&&E==="LC"&&p===n.OFFICE_CODES.MAYOR?"CA":h==="2023"&&E==="HU"&&p===n.OFFICE_CODES.MAYOR?"TX":h==="2023"&&E==="PL"&&p===n.OFFICE_CODES.MAYOR?"PA":E,d=(h,O,E,p,U,D,v,b)=>{if(E==="H"){const S=`${(v||"00").padStart(2,"0")}`;return`${f}/${h}/${O}_${E}${S}_${p}_${U}_${D}.${b}`}return`${f}/${h}/${O}_${l[E]}_${p}_${U}_${D}.${b}`},j=h=>{if(Object.keys(h).filter(K=>typeof h[K]!="string").length>0)return null;const{party:O,firstName:E,lastName:p,officeCode:U,electionDate:D,stateCode:v,jcodeString:b,electionType:R}=h,S=r({electionSeason:D,electionType:R,stateCode:v,officeCode:U});if(D==="2022"&&R===n.ELECTION_TYPE.PRIMARY&&v==="AK"&&U===n.OFFICE_CODES.SENATE&&E==="Dave"&&p==="Darden")return null;const N=D.slice(0,4),B=x.includes(O.slice(0,3).toLowerCase())?O.slice(0,1).toUpperCase():"I",I=E.slice(0,1).toUpperCase(),M=p.replace(/[-']/g," ").split(" ").join("").toUpperCase(),$=["P","PV","P2"].includes(U)?"US":S,L=h.fileFormat||(N==="2019"?"png":"jpg");return d(N,$,U,B,I,M,b,L)}},"./node_modules/classnames/index.js":(T,m)=>{var t,n;/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(){"use strict";var f={}.hasOwnProperty,e="[native code]";function i(){for(var c=[],o=0;o<arguments.length;o++){var s=arguments[o];if(s){var a=typeof s;if(a==="string"||a==="number")c.push(s);else if(Array.isArray(s)){if(s.length){var g=i.apply(null,s);g&&c.push(g)}}else if(a==="object"){if(s.toString!==Object.prototype.toString&&!s.toString.toString().includes("[native code]")){c.push(s.toString());continue}for(var u in s)f.call(s,u)&&s[u]&&c.push(u)}}}return c.join(" ")}T.exports?(i.default=i,T.exports=i):(t=[],n=function(){return i}.apply(m,t),n!==void 0&&(T.exports=n))})()}}]);
