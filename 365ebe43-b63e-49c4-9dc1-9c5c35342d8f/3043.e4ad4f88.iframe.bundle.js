(globalThis.webpackChunkfirecracker=globalThis.webpackChunkfirecracker||[]).push([[3043],{"./components/Ad.js":(k,n,e)=>{"use strict";e.r(n),e.d(n,{default:()=>P});var g=e("./node_modules/next/dist/compiled/react/index.js"),o=e("./node_modules/prop-types/index.js"),r=e.n(o),f=e("./node_modules/next/head.js"),a=e.n(f),c=e("./node_modules/next/amp.js");const t=JSON.parse('{"boxinline":[[[1000,1],[]],[[758,1],[[300,250],[700,50],[5,5],[728,90],[360,360]]],[[0,0],[[300,250],[700,50],[5,5],[360,360]]]],"boxflex":[[[1000,1],[[300,250],[300,600],[360,360],[360,720]]],[[758,1],[]],[[0,0],[]]],"boxrail":[[[1000,1],[[300,250],[360,360]]],[[758,1],[]],[[0,0],[]]],"topbanner":[[[1000,1],[[728,90],[970,66],[970,90],[970,250],[1900,400]]],[[758,1],[[728,90],[970,66],[970,90],[970,250],[1900,400]]],[[0,0],[[1900,400]]]],"sponsorlogo":[[[1000,1],[88,31]],[[758,1],[]],[[0,0],[]]],"galleryslide":[[[1000,1],[[300,250],[360,360]]],[[758,1],[[728,90],[360,360]]],[[0,0],[[360,360]]]],"native":[[[1000,1],[2,2]],[[758,1],[2,2]],[[0,0],[2,2]]],"interstitial":[[[0,0],[[4,4]]]],"midresponsive":[[[1000,1],[[700,1],[5,5]]],[[758,1],[]],[[0,0],[]]],"nativethreeup":[[[1000,1],[2,2]],[[758,1],[2,2]],[[0,0],[2,2]]],"nativeultradense":[[[1000,1],[2,2]],[[758,1],[2,2]],[[0,0],[2,2]]]}');var d=g.createElement;const i=({slot:s,renderOnView:p,offset:S,refreshInterval:b,packageId:E,targeting:I,adsDisabled:A,activeTab:H,offsetViewport:u})=>{const l=(0,c.useAmp)();if(A)return null;const h=u&&s==="boxinline"?u:null,m=t[s]||[];return l?d(g.Fragment,null,d(a(),null,d("script",{async:!0,"custom-element":"amp-ad",src:"https://cdn.ampproject.org/v0/amp-ad-0.1.js"})),d("amp-ad",{width:"300",height:"250","data-multi-size":"300x250,300x50","data-multi-size-validation":"false","data-loading-strategy":"prefer-viewability-over-views",type:"doubleclick","data-slot":"/2620/nbcnews/politics/2020presidentialelection",json:JSON.stringify({targeting:{amp:!0,pos:"boxinline_bentoarticle_amp",targeting:"nbcnews|politics|2020presidentialelection"}}),"rtc-config":`{
            "urls": [
              "https://mps.nbcuni.com/request/page/json/device?path=/news/amp/ncna1000856&site=nbcnews-bento&type=amparticle&cat=amp|news&field[slotname]=amparticle&field[context]=amp&field[platform]=mobile&field[canurl]=CANONICAL_URL"
            ],
            "vendors": {
              "aps": {"PUB_ID":"3219","PARAMS":{"amp":"1"}},
              "indexexchange": {"SITE_ID":"326091"}
            }
          }`})):d("div",{"data-packageid":E,"data-test":"ad-container"},d("div",{"data-mps":"true","data-slot":s,"data-sizes":JSON.stringify(m),"data-offset":S,"data-refresh-interval":b,"data-render-on-view":p,"data-targeting":JSON.stringify(I),"data-active-tab":H,"data-offset-viewport":h}))};i.propTypes={slot:r().string.isRequired,targeting:r().object,renderOnView:r().bool,offset:r().number,packageId:r().string,refreshInterval:r().number,adsDisabled:r().bool,activeTab:r().bool,offsetViewport:(s,p,S)=>{const{slot:b}=s,E=s[p];return b==="boxinline"&&(!E||Number.isNaN(E))?new Error(`Invalid prop ${p} supplied to ${S}`):null}},i.defaultProps={targeting:{},renderOnView:!0,offset:void 0,packageId:null,refreshInterval:void 0,adsDisabled:!1,activeTab:!0,offsetViewport:50};const P=i},"./components/MarkdownToHtml.js":(k,n,e)=>{"use strict";e.r(n),e.d(n,{default:()=>N});var g=e("./node_modules/styled-jsx/style.js"),o=e.n(g),r=e("./node_modules/next/dist/compiled/react/index.js"),f=e("./node_modules/prop-types/index.js"),a=e.n(f),c=e("./node_modules/showdown/dist/showdown.js"),t=e.n(c),d=e("./node_modules/sanitize-html/index.js"),i=e.n(d),P=e("./node_modules/classnames/index.js"),s=e.n(P),p=e("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),S=e("./helpers/isExternalUrl.js");function b(O,v){var y=Object.keys(O);if(Object.getOwnPropertySymbols){var x=Object.getOwnPropertySymbols(O);v&&(x=x.filter(function(U){return Object.getOwnPropertyDescriptor(O,U).enumerable})),y.push.apply(y,x)}return y}function E(O){for(var v=1;v<arguments.length;v++){var y=arguments[v]!=null?arguments[v]:{};v%2?b(Object(y),!0).forEach(function(x){(0,p.default)(O,x,y[x])}):Object.getOwnPropertyDescriptors?Object.defineProperties(O,Object.getOwnPropertyDescriptors(y)):b(Object(y)).forEach(function(x){Object.defineProperty(O,x,Object.getOwnPropertyDescriptor(y,x))})}return O}const I={allowedTags:["h1","h2","h3","p","a","ul","ol","li","b","i","strong","em","strike","hr","br","img"],disallowedTagsMode:"discard",allowedAttributes:{a:["style","href","name","target","rel","data-icid"],"*":["data-testid"],h1:["id"],h2:["id"],h3:["id"],b:["style"],strong:["style"],img:["src","alt","title"]},selfClosing:["img","br","hr","area","base","basefont","input","link","meta"],allowedSchemes:["http","https","ftp","mailto"],allowedSchemesByTag:{},allowedSchemesAppliedToAttributes:["href","src","cite"],allowProtocolRelative:!0,enforceHtmlBoundary:!1,transformTags:{a:(O,v)=>{const{href:y=""}=v;return(0,S.default)(y)&&Object.assign(v,{rel:"nofollow"}),{tagName:O,attribs:E({},v)}}}},A=I,{allowedTags:H,disallowedTagsMode:u,allowedAttributes:l,selfClosing:h,allowedSchemes:m,allowedSchemesByTag:w,allowedSchemesAppliedToAttributes:C,allowProtocolRelative:T,enforceHtmlBoundary:M,transformTags:D}=I;var j=r.createElement;t().extension("targetparent",()=>[{type:"html",regex:/target="_blank"/g,replace:()=>'target="_parent"'}]);const z=({className:O,textColor:v,markdown:y,linkTarget:x})=>{const U=(0,r.useMemo)(()=>{const R=!!x,_=[];x==="_parent"&&_.push("targetparent");const B=new(t()).Converter({extensions:_});return B.setOption("openLinksInNewWindow",R),B},[x]);if(!y)return null;function L(){const R=U.makeHtml(y);return{__html:i()(R,A)}}return j("div",{"data-testid":"converted-markdown",className:"jsx-4112606121 "+(s()("cms-markdown",O)||"")},j(o(),{id:"4112606121"},[".cms-markdown{--founders:FoundersGroteskCond,Arial Narrow,Arial,sans-serif;--publico:PublicoText,Georgia,TimesNewRoman,Times New Roman,Times, Baskerville,serif;}",".cms-markdown h1,.cms-markdown h2,.cms-markdown h3{font-family:var(--founders);line-height:1;font-weight:600;color:#2a2a2a;margin-bottom:24px;margin-top:0;}",".cms-markdown h1{font-size:var(--md-h1-font-size,32px);}","@media screen and (min-width:758px){.cms-markdown h1{font-size:var(--md-h1-font-size,48px);}}","@media screen and (min-width:1240px){.cms-markdown h1{font-size:var(--md-h1-font-size,60px);}}",".cms-markdown h2{font-size:var(--md-h2-font-size,40px);}",".cms-markdown h3{font-size:var(--md-h3-font-size,24px);}",".cms-markdown p,.cms-markdown a,.cms-markdown ol,.cms-markdown ul{font-family:var(--publico);line-height:1.5;font-size:var(--md-text-font-size,1rem);}",".cms-markdown p,.cms-markdown ol,.cms-markdown ul{color:var(--text-color);margin-bottom:24px;margin-top:0;}",".cms-markdown ul{list-style:none;padding-left:15px;}",".cms-markdown ul li{margin-bottom:16px;}",".cms-markdown ul li::before{content:'\u2022';color:#3061ff;font-weight:bold;display:inline-block;width:1em;margin-left:-1em;}",".cms-markdown ol{list-style:none;padding-left:20px;counter-reset:customOl;}",".cms-markdown ol li{counter-increment:customOl;margin-bottom:14px;}",".cms-markdown ol li:before{content:counter(customOl);color:#3061ff;font-size:var(--md-ol-font-size,20px);font-weight:600;font-family:var(--founders);width:1em;margin-left:-1em;display:inline-block;}",".cms-markdown a{-webkit-text-decoration:none;text-decoration:none;color:#3061ff;-webkit-transition:opacity 150ms linear;transition:opacity 150ms linear;}",".cms-markdown a:hover{opacity:0.7;}",".cms-markdown strong{font-weight:700;}",".cms-markdown img{max-width:100%;display:block;}"]),j("div",{dangerouslySetInnerHTML:L(),style:{"--text-color":v},className:"jsx-4112606121"}))};z.displayName="MarkdownToHtml",z.propTypes={className:a().string,markdown:a().string,textColor:a().string,linkTarget:a().string},z.defaultProps={linkTarget:null,className:null,textColor:"#2a2a2a",markdown:""};const N=z},"./node_modules/next/dist/compiled/react/cjs/react-jsx-runtime.production.min.js":(k,n,e)=>{"use strict";var g=e("./node_modules/next/dist/compiled/react/index.js"),o=Symbol.for("react.element"),r=Symbol.for("react.fragment"),f=Object.prototype.hasOwnProperty,a=g.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function t(d,i,P){var s,p={},S=null,b=null;P!==void 0&&(S=""+P),i.key!==void 0&&(S=""+i.key),i.ref!==void 0&&(b=i.ref);for(s in i)f.call(i,s)&&!c.hasOwnProperty(s)&&(p[s]=i[s]);if(d&&d.defaultProps)for(s in i=d.defaultProps,i)p[s]===void 0&&(p[s]=i[s]);return{$$typeof:o,type:d,key:S,ref:b,props:p,_owner:a.current}}n.Fragment=r,n.jsx=t,n.jsxs=t},"./node_modules/next/dist/compiled/react/jsx-runtime.js":(k,n,e)=>{"use strict";k.exports=e("./node_modules/next/dist/compiled/react/cjs/react-jsx-runtime.production.min.js")},"./node_modules/next/dist/shared/lib/head.js":(k,n,e)=>{var g=e("./node_modules/process/browser.js");Object.defineProperty(n,"__esModule",{value:!0});function o(u,l){for(var h in l)Object.defineProperty(u,h,{enumerable:!0,get:l[h]})}o(n,{defaultHead:function(){return p},default:function(){return H}});const r=e("./node_modules/@swc/helpers/cjs/_interop_require_default.cjs"),f=e("./node_modules/@swc/helpers/cjs/_interop_require_wildcard.cjs"),a=e("./node_modules/next/dist/compiled/react/jsx-runtime.js"),c=f._(e("./node_modules/next/dist/compiled/react/index.js")),t=r._(e("./node_modules/next/dist/shared/lib/side-effect.js")),d=e("./node_modules/next/dist/shared/lib/amp-context.shared-runtime.js"),i=e("./node_modules/next/dist/shared/lib/head-manager-context.shared-runtime.js"),P=e("./node_modules/next/dist/shared/lib/amp-mode.js"),s=e("./node_modules/next/dist/shared/lib/utils/warn-once.js");function p(u){u===void 0&&(u=!1);const l=[(0,a.jsx)("meta",{charSet:"utf-8"})];return u||l.push((0,a.jsx)("meta",{name:"viewport",content:"width=device-width"})),l}function S(u,l){return typeof l=="string"||typeof l=="number"?u:l.type===c.default.Fragment?u.concat(c.default.Children.toArray(l.props.children).reduce((h,m)=>typeof m=="string"||typeof m=="number"?h:h.concat(m),[])):u.concat(l)}const b=["name","httpEquiv","charSet","itemProp"];function E(){const u=new Set,l=new Set,h=new Set,m={};return w=>{let C=!0,T=!1;if(w.key&&typeof w.key!="number"&&w.key.indexOf("$")>0){T=!0;const M=w.key.slice(w.key.indexOf("$")+1);u.has(M)?C=!1:u.add(M)}switch(w.type){case"title":case"base":l.has(w.type)?C=!1:l.add(w.type);break;case"meta":for(let M=0,D=b.length;M<D;M++){const j=b[M];if(w.props.hasOwnProperty(j))if(j==="charSet")h.has(j)?C=!1:h.add(j);else{const z=w.props[j],N=m[j]||new Set;(j!=="name"||!T)&&N.has(z)?C=!1:(N.add(z),m[j]=N)}}break}return C}}function I(u,l){const{inAmpMode:h}=l;return u.reduce(S,[]).reverse().concat(p(h).reverse()).filter(E()).reverse().map((m,w)=>{const C=m.key||w;if(g.env.__NEXT_OPTIMIZE_FONTS&&!h&&m.type==="link"&&m.props.href&&["https://fonts.googleapis.com/css","https://use.typekit.net/"].some(T=>m.props.href.startsWith(T))){const T={...m.props||{}};return T["data-href"]=T.href,T.href=void 0,T["data-optimized-fonts"]=!0,c.default.cloneElement(m,T)}return c.default.cloneElement(m,{key:C})})}function A(u){let{children:l}=u;const h=(0,c.useContext)(d.AmpStateContext),m=(0,c.useContext)(i.HeadManagerContext);return(0,a.jsx)(t.default,{reduceComponentsToState:I,headManager:m,inAmpMode:(0,P.isInAmpMode)(h),children:l})}const H=A;(typeof n.default=="function"||typeof n.default=="object"&&n.default!==null)&&typeof n.default.__esModule>"u"&&(Object.defineProperty(n.default,"__esModule",{value:!0}),Object.assign(n.default,n),k.exports=n.default)},"./node_modules/next/dist/shared/lib/side-effect.js":(k,n,e)=>{"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"default",{enumerable:!0,get:function(){return a}});const g=e("./node_modules/next/dist/compiled/react/index.js"),o=typeof window>"u",r=o?()=>{}:g.useLayoutEffect,f=o?()=>{}:g.useEffect;function a(c){const{headManager:t,reduceComponentsToState:d}=c;function i(){if(t&&t.mountedInstances){const s=g.Children.toArray(Array.from(t.mountedInstances).filter(Boolean));t.updateHead(d(s,c))}}if(o){var P;t==null||(P=t.mountedInstances)==null||P.add(c.children),i()}return r(()=>{var s;return t==null||(s=t.mountedInstances)==null||s.add(c.children),()=>{var p;t==null||(p=t.mountedInstances)==null||p.delete(c.children)}}),r(()=>(t&&(t._pendingUpdate=i),()=>{t&&(t._pendingUpdate=i)})),f(()=>(t&&t._pendingUpdate&&(t._pendingUpdate(),t._pendingUpdate=null),()=>{t&&t._pendingUpdate&&(t._pendingUpdate(),t._pendingUpdate=null)})),null}},"./node_modules/next/dist/shared/lib/utils/warn-once.js":(k,n)=>{"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"warnOnce",{enumerable:!0,get:function(){return e}});let e=g=>{}},"./node_modules/next/head.js":(k,n,e)=>{k.exports=e("./node_modules/next/dist/shared/lib/head.js")},"?5580":()=>{},"?03fb":()=>{},"?6197":()=>{},"?b8cb":()=>{},"?c717":()=>{},"./node_modules/@swc/helpers/cjs/_interop_require_wildcard.cjs":(k,n)=>{"use strict";function e(o){if(typeof WeakMap!="function")return null;var r=new WeakMap,f=new WeakMap;return(e=function(a){return a?f:r})(o)}n._=n._interop_require_wildcard=g;function g(o,r){if(!r&&o&&o.__esModule)return o;if(o===null||typeof o!="object"&&typeof o!="function")return{default:o};var f=e(r);if(f&&f.has(o))return f.get(o);var a={},c=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var t in o)if(t!=="default"&&Object.prototype.hasOwnProperty.call(o,t)){var d=c?Object.getOwnPropertyDescriptor(o,t):null;d&&(d.get||d.set)?Object.defineProperty(a,t,d):a[t]=o[t]}return a.default=o,f&&f.set(o,a),a}}}]);
