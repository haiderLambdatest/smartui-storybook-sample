(globalThis.webpackChunkfirecracker=globalThis.webpackChunkfirecracker||[]).push([[9057],{"./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js":(d,n,e)=>{"use strict";e.r(n),e.d(n,{default:()=>i});function a(r,t){if(r==null)return{};var o={},l=Object.keys(r),s,c;for(c=0;c<l.length;c++)s=l[c],!(t.indexOf(s)>=0)&&(o[s]=r[s]);return o}function i(r,t){if(r==null)return{};var o=a(r,t),l,s;if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(r);for(s=0;s<c.length;s++)l=c[s],!(t.indexOf(l)>=0)&&Object.prototype.propertyIsEnumerable.call(r,l)&&(o[l]=r[l])}return o}},"./components/stories/Link.stories.js":(d,n,e)=>{"use strict";e.r(n),e.d(n,{Link:()=>c,__namedExportsOrder:()=>p,default:()=>s});var a=e("./node_modules/@babel/runtime/helpers/esm/extends.js"),i=e("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),r=e("./node_modules/next/dist/compiled/react/index.js"),t=e("./components/Link.js");const o=["linkText"];var l=r.createElement;const s={component:t.default,title:"Global Components/Link",argTypes:{href:{control:{type:"text"}},accessibleOnly:{control:"boolean"},linkText:{control:{type:"text"}}},args:{href:"https://www.nbcnews.com",accessibleOnly:!1,linkText:"example"}},c=u=>{let{linkText:j}=u,m=(0,i.default)(u,o);return l(t.default,(0,a.default)({className:"link"},m),`${j}`)};c.displayName="Link";const p=["Link"]},"./components/Link.js":(d,n,e)=>{"use strict";e.r(n),e.d(n,{default:()=>b});var a=e("./node_modules/@babel/runtime/helpers/esm/extends.js"),i=e("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),r=e("./node_modules/next/dist/compiled/react/index.js"),t=e("./node_modules/prop-types/index.js"),o=e.n(t),l=e("./node_modules/classnames/index.js"),s=e.n(l),c=e("./helpers/isExternalUrl.js"),p=e("./components/providers/EmbedContext.js"),u=e("./components/providers/BrandContext.js");const m=f=>f?!/^https?:\/\/|^\/\/|^mailto:/i.test(f):!1;var E=e("./helpers/isTelemundo.js");const x=["linkText","children","accessibleOnly","href","className","data-icid"];var P=r.createElement;const y=f=>{let{linkText:_,children:C,accessibleOnly:g,href:T,className:L,"data-icid":R}=f,h=(0,i.default)(f,x);const{isEmbed:A,isPartner:O,isInSpanish:v,useLinkTarget:D}=(0,r.useContext)(p.default),W=(0,r.useContext)(u.default),U=s()({"show-on-tab":g},L),S=A||O&&v,k=O&&!v;(0,c.default)(T)&&Object.assign(h,{rel:"nofollow"}),D&&h?.target||(S&&Object.assign(h,{target:"_parent"}),k&&Object.assign(h,{target:"_blank"}));const B=(0,E.default)(W)&&m(T)?`https://www.nbcnews.com${T}`:T,I={[O?"data-cid":"data-icid"]:R};return P("a",(0,a.default)({},h,{href:B,className:U},I),_||C)};y.displayName="Link",y.propTypes={href:o().string,linkText:o().string,className:o().string,accessibleOnly:o().bool},y.defaultProps={href:null,linkText:null,className:null,accessibleOnly:!1};const b=y},"./components/providers/BrandContext.js":(d,n,e)=>{"use strict";e.r(n),e.d(n,{default:()=>i});var a=e("./node_modules/next/dist/compiled/react/index.js");const i=a.createContext("news")},"./components/providers/EmbedContext.js":(d,n,e)=>{"use strict";e.r(n),e.d(n,{default:()=>i});var a=e("./node_modules/next/dist/compiled/react/index.js");const i=a.createContext({isEmbed:!1,isPartner:!1,isInSpanish:!1,useLinkTarget:!1})},"./helpers/isExternalUrl.js":(d,n,e)=>{"use strict";e.r(n),e.d(n,{default:()=>i});const i=r=>r?!/(^[#/])|((nbcnews|today|msnbc)\.com)/.test(r):!1},"./helpers/isTelemundo.js":(d,n,e)=>{"use strict";e.r(n),e.d(n,{default:()=>r});var a=e("./helpers/constants.js");const r=t=>t===a.BRANDS.TELEMUNDO},"./node_modules/classnames/index.js":(d,n)=>{var e,a;/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(){"use strict";var i={}.hasOwnProperty,r="[native code]";function t(){for(var o=[],l=0;l<arguments.length;l++){var s=arguments[l];if(s){var c=typeof s;if(c==="string"||c==="number")o.push(s);else if(Array.isArray(s)){if(s.length){var p=t.apply(null,s);p&&o.push(p)}}else if(c==="object"){if(s.toString!==Object.prototype.toString&&!s.toString.toString().includes("[native code]")){o.push(s.toString());continue}for(var u in s)i.call(s,u)&&s[u]&&o.push(u)}}}return o.join(" ")}d.exports?(t.default=t,d.exports=t):(e=[],a=function(){return t}.apply(n,e),a!==void 0&&(d.exports=a))})()},"./node_modules/prop-types/factoryWithThrowingShims.js":(d,n,e)=>{"use strict";var a=e("./node_modules/prop-types/lib/ReactPropTypesSecret.js");function i(){}function r(){}r.resetWarningCache=i,d.exports=function(){function t(s,c,p,u,j,m){if(m!==a){var E=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw E.name="Invariant Violation",E}}t.isRequired=t;function o(){return t}var l={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:o,element:t,elementType:t,instanceOf:o,node:t,objectOf:o,oneOf:o,oneOfType:o,shape:o,exact:o,checkPropTypes:r,resetWarningCache:i};return l.PropTypes=l,l}},"./node_modules/prop-types/index.js":(d,n,e)=>{if(!1)var a,i;else d.exports=e("./node_modules/prop-types/factoryWithThrowingShims.js")()},"./node_modules/prop-types/lib/ReactPropTypesSecret.js":d=>{"use strict";var n="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";d.exports=n}}]);
