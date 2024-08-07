(globalThis.webpackChunkfirecracker=globalThis.webpackChunkfirecracker||[]).push([[4345],{"./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js":(P,h,e)=>{"use strict";e.r(h),e.d(h,{default:()=>E});function r(i,d){if(i==null)return{};var t={},l=Object.keys(i),s,c;for(c=0;c<l.length;c++)s=l[c],!(d.indexOf(s)>=0)&&(t[s]=i[s]);return t}function E(i,d){if(i==null)return{};var t=r(i,d),l,s;if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(i);for(s=0;s<c.length;s++)l=c[s],!(d.indexOf(l)>=0)&&Object.prototype.propertyIsEnumerable.call(i,l)&&(t[l]=i[l])}return t}},"./components/Headshot/Headshot.stories.js":(P,h,e)=>{"use strict";e.r(h),e.d(h,{Headshot:()=>t,__namedExportsOrder:()=>l,default:()=>d});var r=e("./node_modules/next/dist/compiled/react/index.js"),E=e("./components/Headshot/Headshot.js"),i=r.createElement;const d={title:"Global Components/Headshot",component:E.default,args:{headshotUrl:"https://media-cldnry.s-nbcnews.com/image/upload/firecracker/headshots/2022/TX_G00_D_B_OROURKE.png",width:90,height:100,backgroundHeight:90,backgroundWidth:90,candidateColor:"#1F69AB"}},t=s=>i(E.default,s);t.displayName="Headshot";const l=["Headshot"]},"./components/Headshot/Headshot.js":(P,h,e)=>{"use strict";e.r(h),e.d(h,{default:()=>y});var r=e("./node_modules/styled-jsx/style.js"),E=e.n(r),i=e("./node_modules/next/dist/compiled/react/index.js"),d=e("./node_modules/prop-types/index.js"),t=e.n(d),l=e("./node_modules/classnames/index.js"),s=e.n(l),c=e("./node_modules/next/amp.js"),j=e.n(c),x=e("./components/ResponsiveImage.js"),C=e("./helpers/getHeadshotUrl.js"),g=i.createElement;const T=`${C.headshotBaseUrl}/candidate_fallback_light.png`;function y({candidateColor:S,className:U,headshotUrl:_,backgroundHeight:v,backgroundWidth:a,height:o,width:n,alt:f,useInlineStyles:m}){const p=(0,c.useAmp)();return g(i.Fragment,null,g(E(),{id:"3375707309"},[".headshot-container{border-radius:calc(var(--width) / 2);}",".headshot-container::before{content:'';position:absolute;bottom:0;left:0;z-index:-1;height:var(--background-height);width:var(--background-width);background-color:var(--background-color);border-radius:50%;}",".headshot-container img{overflow:hidden;border-radius:calc(var(--width) / 2);width:var(--width);height:var(--height);object-fit:cover;}",".headshot-container.amp{width:var(--width);height:var(--height);}"]),g(E(),{id:"3279140582",dynamic:[n,o,a||n,v||o,S]},[`.headshot-container.__jsx-style-dynamic-selector{--width:${n}px;--height:${o}px;--background-width:${a||n}px;--background-height:${v||o}px;--background-color:${S};}`]),g("div",{style:m?{"--width":`${n}px`,"--height":`${o}px`,"--background-width":`${a||n}px`,"--background-height":`${v||o}px`,"--background-color":`${S}`}:null,"data-nosnippet":!0,className:"jsx-3375707309 "+E().dynamic([["3279140582",[n,o,a||n,v||o,S]]])+" "+(s()("headshot-container relative z-0",U,{amp:p})||"")},g(x.default,{"aria-hidden":!0,alt:f,className:"headshot db",src:_,defaultImageSize:"2x",fallbackSrc:T,width:n,height:o,transformations:`f_auto,q_auto,w_${n*3},h_${o*3},c_fit`,useAmpImage:!0})))}y.propTypes={backgroundHeight:t().number,backgroundWidth:t().number,candidateColor:t().string,className:t().string,headshotUrl:t().string.isRequired,height:t().number.isRequired,width:t().number.isRequired,alt:t().string,useInlineStyles:t().bool},y.defaultProps={backgroundHeight:void 0,backgroundWidth:void 0,candidateColor:"#ebebeb",className:void 0,alt:"Candidate headshot",useInlineStyles:!1}},"./components/ResponsiveImage.js":(P,h,e)=>{"use strict";e.r(h),e.d(h,{default:()=>v});var r=e("./node_modules/@babel/runtime/helpers/esm/extends.js"),E=e("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),i=e("./node_modules/styled-jsx/style.js"),d=e.n(i),t=e("./node_modules/next/dist/compiled/react/index.js"),l=e("./node_modules/prop-types/index.js"),s=e.n(l),c=e("./node_modules/next/amp.js"),j=e("./node_modules/classnames/index.js"),x=e.n(j);function C(a){return a?.includes("media-cldnry")||a?.includes("cloudinary.com")}function g(a,o){return C(a)&&o?a.replace("/image/upload/",`/image/upload/${o}/`):a}const T=new RegExp("/(t_[^/]+)/"),y=(a,o,n="best")=>{const f=`/t_${o},f_auto,q_auto:${n}/`;return T.test(a)?a.replace(T,f):a.replace("/image/upload/",`/image/upload${f}`)},S=(a,o)=>C(a)?y(a,o):a,U=["className","src","defaultImageSize","transformations","fallbackSrc","useAmpImage"];var _=t.createElement;function v(a){let{className:o,src:n,defaultImageSize:f,transformations:m,fallbackSrc:p,useAmpImage:A}=a,u=(0,E.default)(a,U);const D=(0,c.useAmp)(),{0:I,1:b}=(0,t.useState)(n),$=(0,t.useRef)(n),R=(0,t.useRef)(null);(0,t.useEffect)(()=>{$.current!==n&&($.current=n,b(n))},[n]);const M=g(I,m),O=(0,t.useMemo)(()=>({"1x":M,"2x":g(M,"dpr_2.0"),"3x":g(M,"dpr_3.0")}),[M]);if((0,t.useEffect)(()=>{R.current&&(R.current.src=O[f],R.current.srcset=`${O["2x"]} 2x, ${O["3x"]} 3x`)},[]),!I)return null;const L=()=>{p&&b(p)};if(D&&A){const N=g(p,m);return _(t.Fragment,null,_(d(),{id:"789105330",dynamic:[u.width,u.height]},[`amp-img.__jsx-style-dynamic-selector{width:${u.width}px;height:${u.height}px;}`]),_("amp-img",(0,r.default)({},u,{"data-testid":"image",layout:"responsive",src:O[f],srcSet:`${O["2x"]} 2x, ${O["3x"]} 3x`,noloading:"",class:d().dynamic([["789105330",[u.width,u.height]]])+" "+(x()("db",o)||"")}),_("amp-img",(0,r.default)({},u,{fallback:"",layout:"responsive","data-testid":"image",src:N,noloading:"",class:d().dynamic([["789105330",[u.width,u.height]]])+" "+(o||"")}))))}return _(t.Fragment,null,_(d(),{id:"1021350832"},["img.jsx-1021350832{font-size:0;}"]),_("img",(0,r.default)({},u,{ref:R,"data-testid":"image",onError:L,src:O[f],srcSet:`${O["2x"]} 2x, ${O["3x"]} 3x`,className:"jsx-1021350832 "+(o||"")})))}v.propTypes={fallbackSrc:s().string,src:s().string,defaultImageSize:s().oneOf(["1x","2x","3x"]),transformations:s().string,useAmpImage:s().bool},v.defaultProps={fallbackSrc:null,src:null,defaultImageSize:"1x",transformations:null,useAmpImage:!1}},"./helpers/getHeadshotUrl.js":(P,h,e)=>{"use strict";e.r(h),e.d(h,{default:()=>o,getCorrectStateAbbr:()=>_,headshotBaseUrl:()=>E});var r=e("./helpers/constants.js");const E="https://media-cldnry.s-nbcnews.com/image/upload/firecracker/headshots",{ATTORNEY_GENERAL:i,GOVERNOR:d,LT_GOVERNOR:t,PRESIDENT:l,PRES_PRE_VIABILITY:s,PRESIDENT_SPECIAL:c,SENATE:j,SENATE_SPECIAL:x,SECRETARY_OF_STATE:C,STATE_SENATE:g,MAYOR:T,SUPREME_COURT:y}=r.OFFICE_CODES,S={[i]:"A00",[d]:"G00",[t]:"L00",[l]:"P00",[c]:"P00",[s]:"P00",[j]:"S00",[x]:"S00",[C]:"SS0",[g]:"Z20",[T]:"M00",[y]:"B00"},U=["dem","rep"],_=({electionSeason:n,electionType:f,stateCode:m,officeCode:p})=>n==="2022"&&f===r.ELECTION_TYPE.PRIMARY&&m==="A0"&&p===r.OFFICE_CODES.STATE_SENATE?"AZ":n==="2022"&&m==="LC"&&p===r.OFFICE_CODES.MAYOR?"CA":n==="2023"&&m==="HU"&&p===r.OFFICE_CODES.MAYOR?"TX":n==="2023"&&m==="PL"&&p===r.OFFICE_CODES.MAYOR?"PA":m,v=(n,f,m,p,A,u,D,I)=>{if(m==="H"){const $=`${(D||"00").padStart(2,"0")}`;return`${E}/${n}/${f}_${m}${$}_${p}_${A}_${u}.${I}`}return`${E}/${n}/${f}_${S[m]}_${p}_${A}_${u}.${I}`},o=n=>{if(Object.keys(n).filter(W=>typeof n[W]!="string").length>0)return null;const{party:f,firstName:m,lastName:p,officeCode:A,electionDate:u,stateCode:D,jcodeString:I,electionType:b}=n,$=_({electionSeason:u,electionType:b,stateCode:D,officeCode:A});if(u==="2022"&&b===r.ELECTION_TYPE.PRIMARY&&D==="AK"&&A===r.OFFICE_CODES.SENATE&&m==="Dave"&&p==="Darden")return null;const R=u.slice(0,4),M=U.includes(f.slice(0,3).toLowerCase())?f.slice(0,1).toUpperCase():"I",O=m.slice(0,1).toUpperCase(),L=p.replace(/[-']/g," ").split(" ").join("").toUpperCase(),B=["P","PV","P2"].includes(A)?"US":$,F=n.fileFormat||(R==="2019"?"png":"jpg");return v(R,B,A,M,O,L,I,F)}},"./node_modules/classnames/index.js":(P,h)=>{var e,r;/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(){"use strict";var E={}.hasOwnProperty,i="[native code]";function d(){for(var t=[],l=0;l<arguments.length;l++){var s=arguments[l];if(s){var c=typeof s;if(c==="string"||c==="number")t.push(s);else if(Array.isArray(s)){if(s.length){var j=d.apply(null,s);j&&t.push(j)}}else if(c==="object"){if(s.toString!==Object.prototype.toString&&!s.toString.toString().includes("[native code]")){t.push(s.toString());continue}for(var x in s)E.call(s,x)&&s[x]&&t.push(x)}}}return t.join(" ")}P.exports?(d.default=d,P.exports=d):(e=[],r=function(){return d}.apply(h,e),r!==void 0&&(P.exports=r))})()}}]);
