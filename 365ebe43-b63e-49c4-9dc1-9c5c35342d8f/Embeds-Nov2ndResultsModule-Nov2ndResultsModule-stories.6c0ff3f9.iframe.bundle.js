(globalThis.webpackChunkfirecracker=globalThis.webpackChunkfirecracker||[]).push([[4626,3437,7527,6281,3919,2713,1587,1073,3986,1925,2384],{"./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js":(O,a,e)=>{"use strict";e.r(a),e.d(a,{default:()=>_});function f(d,m){if(d==null)return{};var l={},p=Object.keys(d),r,h;for(h=0;h<p.length;h++)r=p[h],!(m.indexOf(r)>=0)&&(l[r]=d[r]);return l}function _(d,m){if(d==null)return{};var l=f(d,m),p,r;if(Object.getOwnPropertySymbols){var h=Object.getOwnPropertySymbols(d);for(r=0;r<h.length;r++)p=h[r],!(m.indexOf(p)>=0)&&Object.prototype.propertyIsEnumerable.call(d,p)&&(l[p]=d[p])}return l}},"./components/Embeds/Nov2ndResultsModule/Nov2ndResultsModule.stories.js":(O,a,e)=>{"use strict";e.r(a),e.d(a,{Nov2ndResults:()=>M,__namedExportsOrder:()=>T,default:()=>b});var f=e("./node_modules/next/dist/compiled/react/index.js"),_=e("./node_modules/styled-jsx/style.js"),d=e.n(_),m=e("./node_modules/prop-types/index.js"),l=e.n(m),p=e("./components/Headline.js"),r=e("./components/Link.js"),h=e("./components/LastUpdatedTimestamp.js"),E=e("./components/CandidateTile.js"),j=e("./components/Checkmark.js"),y=f.createElement;const R=({candidates:D})=>!D||!D.length?null:y(f.Fragment,null,y(d(),{id:"4229688023"},["@media screen and (min-width:1000px){.ws-nowrap-l{white-space:nowrap;}}"]),D.map(({name:W,isWinner:C,party:N,color:L,percentInFormatted:B})=>y("div",{key:`ballot__${W}`,className:"jsx-4229688023 candidate df items-center justify-between mv2"},y("div",{className:"jsx-4229688023 df items-center"},y(E.default,{party:N,bgColor:L,className:"flex-shrink-0"}),y("span",{className:"jsx-4229688023 gray-100 publico-txt f2 lh-none dib ml1 ws-nowrap-l"},W),y(j.default,{nonpartisanWinner:!0,shouldDisplay:C,height:"15px",width:"20px",verticalAlign:"baseline"})),y("div",{className:"jsx-4229688023 gray-100 f3 lh-none founders-mono ml5-l"},B))));R.propTypes={candidates:l().arrayOf(l().any)},R.defaultProps={candidates:[]};const S=R;var v=f.createElement;const x=({neatLastUpdatedTimestampFormatted:D,races:W})=>{const C={OH:"https://www.nbcnews.com/politics/2021-special-elections/ohio-house-results",VA:"https://www.nbcnews.com/politics/2021-elections/virginia-governor-results",NJ:"https://www.nbcnews.com/politics/2021-elections/new-jersey-governor-results"};return v(f.Fragment,null,v(d(),{id:"2811820170"},[".hide-on-mobile{display:none;}",".checkmark{margin-top:3px;}",".block{width:100%;}",".last-updated-timestamp{font-size:12px;}",".block:not(:first-child){border-top:dashed 1px #ccc;}","@media screen and (min-width:758px){.hide-on-mobile{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}.block{width:25%;}.block:not(:first-child){border-top:0;}.block:first-child{padding-right:20px;}.block:not(:last-child):not(:first-child){padding-left:20px;padding-right:20px;}.block:last-child{padding-left:20px;}.block:not(:last-child){border-right:dashed 1px #ccc;}}"]),v("div",{className:"jsx-2811820170 db df-m justify-between items-center"},v(p.default,{size:4,margin:"mt0 mb2"},"Nov. 2 Elections: Live Results"),D&&v(h.default,{className:"hide-on-mobile df-m"},D)),v("div",{className:"jsx-2811820170 df flex-column flex-row-m mt3 mb3 mt2-m mb3-m"},W.map(N=>{const{raceName:L,stateAbbr:B,percentInFormatted:i,candidates:n}=N,o=C[B];return v("div",{key:L,className:"jsx-2811820170 block"},v(r.default,{href:o,className:"db link mv2"},v("div",{className:"jsx-2811820170 df justify-between items-end mb2"},v("span",{className:"jsx-2811820170 founders-cond f4 lh-none fw6 ttu gray-100 mr1"},L),v("span",{className:"jsx-2811820170 founders-mono f1 lh-none fw4 gray-80 tr"},i," in")),v(S,{candidates:n})))})),D&&v(h.default,{className:"dn-m"},D))};x.propTypes={neatLastUpdatedTimestampFormatted:l().string,races:l().arrayOf(l().any)},x.defaultProps={neatLastUpdatedTimestampFormatted:null,races:[]};const g=x,A=JSON.parse('{"races":[{"raceName":"Virginia Governor","stateAbbr":"VA","percentInFormatted":"46.1%","candidates":[{"name":"David A. Bramante","isWinner":true,"isGain":true,"party":"rep","color":"DE3535","percentInFormatted":"49.1%"},{"name":"Holly L Baade","isWinner":false,"party":"dem","color":"0471E6","percentInFormatted":"46.1%"}]},{"raceName":"New Jersey Governor","stateAbbr":"NJ","percentInFormatted":"46.1%","candidates":[{"name":"David A. Bramante","isWinner":true,"isGain":true,"party":"rep","color":"DE3535","percentInFormatted":"49.1%"},{"name":"Holly L Baade","isWinner":false,"party":"dem","color":"0471E6","percentInFormatted":"46.1%"}]},{"raceName":"Ohio Special House 11","stateAbbr":"OH","percentInFormatted":"46.1%","candidates":[{"name":"David A. Bramante","isWinner":true,"isGain":true,"party":"rep","color":"DE3535","percentInFormatted":"49.1%"},{"name":"Holly L Baade","isWinner":false,"party":"dem","color":"0471E6","percentInFormatted":"46.1%"}]},{"raceName":"Ohio Special House 15","stateAbbr":"OH","percentInFormatted":"46.1%","candidates":[{"name":"David A. Bramante","isWinner":true,"isGain":true,"party":"rep","color":"DE3535","percentInFormatted":"49.1%"},{"name":"Holly L Baade","isWinner":false,"party":"dem","color":"0471E6","percentInFormatted":"46.1%"}]}],"neatLastUpdatedTimestampFormatted":"5:57 PM ET"}');var I=f.createElement;const b={component:g,title:"Embeds/Nov 2nd Results"},M=()=>I(g,A);M.displayName="Nov2ndResults";const T=["Nov2ndResults"]},"./components/CandidateTile.js":(O,a,e)=>{"use strict";e.r(a),e.d(a,{default:()=>j});var f=e("./node_modules/styled-jsx/style.js"),_=e.n(f),d=e("./node_modules/next/dist/compiled/react/index.js"),m=e("./node_modules/prop-types/index.js"),l=e.n(m),p=e("./node_modules/classnames/index.js"),r=e.n(p),h=d.createElement;const E=({party:y,bgColor:R,fontStyle:S,className:v,lineHeight:x})=>{const g=y&&y.charAt(0);return h(d.Fragment,null,h(_(),{id:"3553201318"},[".candidate-outline.jsx-3553201318{bottom:20px;left:42px;outline:1.5px solid #ffffff;}",".candidate-circle.jsx-3553201318{border-radius:50%;}"]),h("span",{style:{lineHeight:x},className:"jsx-3553201318 "+(r()(`tile f1 lh-none white ttu tc dib w1 h1 bg-${R}`,S,v)||"")},g))};E.propTypes={party:l().string,bgColor:l().string,fontStyle:l().string,className:l().string,lineHeight:l().string},E.defaultProps={party:"",bgColor:"595959",fontStyle:"founders-mono",className:null,lineHeight:"16px"};const j=E},"./components/Checkmark.js":(O,a,e)=>{"use strict";e.r(a),e.d(a,{default:()=>y});var f=e("./node_modules/styled-jsx/style.js"),_=e.n(f),d=e("./node_modules/classnames/index.js"),m=e.n(d),l=e("./node_modules/next/dist/compiled/react/index.js"),p=e("./node_modules/prop-types/index.js"),r=e.n(p),h=e("./node_modules/react-i18next/dist/es/index.js"),E=l.createElement;const j=({t:R,color:S,height:v,hasTransparentBackground:x,width:g,nonpartisanWinner:A,addMargin:I,shouldDisplay:b,hideOnMobile:M=!1,verticalAlign:T,className:D})=>{const C=x?"transparent":A?"#FFD60C":"#fff",N=m()({ml1:I,dib:b&&!M,"dib-m":b&&M});return E("span",{"data-test":"checkmark-wrapper",className:_().dynamic([["1491606757",[C,v||g,g,T,S]]])+" "+(D||"")},E(_(),{id:"1491606757",dynamic:[C,v||g,g,T,S]},[`.checkmark.__jsx-style-dynamic-selector{background-color:${C};height:${v||g};width:${g};vertical-align:${T};stroke:${S};}`]),E("svg",{"data-test":"checkmark","data-testid":"checkmark",viewBox:"0 0 14 14",strokeWidth:"2",role:"img","aria-label":R("Winner"),className:_().dynamic([["1491606757",[C,v||g,g,T,S]]])+` checkmark dn ${N}`},E("path",{fill:"none",d:"M12,3.5l-6.81,7L2,7.8",className:_().dynamic([["1491606757",[C,v||g,g,T,S]]])})))};j.displayName="Checkmark",j.propTypes={color:r().string,height:r().string,addMargin:r().bool,nonpartisanWinner:r().bool,width:r().string,shouldDisplay:r().bool,hideOnMobile:r().bool,verticalAlign:r().oneOf(["bottom","top","middle","unset","baseline"]),hasTransparentBackground:r().bool,className:r().string},j.defaultProps={color:"#2A2A2A",height:null,addMargin:!0,nonpartisanWinner:!1,width:"20px",shouldDisplay:!1,hideOnMobile:!1,verticalAlign:"bottom",hasTransparentBackground:!1,className:""};const y=(0,h.withTranslation)()(j)},"./components/Headline.js":(O,a,e)=>{"use strict";e.r(a),e.d(a,{default:()=>y});var f=e("./node_modules/@babel/runtime/helpers/esm/extends.js"),_=e("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),d=e("./node_modules/styled-jsx/style.js"),m=e.n(d),l=e("./node_modules/next/dist/compiled/react/index.js"),p=e("./node_modules/prop-types/index.js"),r=e.n(p);const h=["font","size","tag","margin","children","className"];var E=l.createElement;const j=R=>{let{font:S,size:v,tag:x,margin:g,children:A,className:I}=R,b=(0,_.default)(R,h);const M=x||`h${v}`,T=g;return A?E(l.Fragment,null,E(m(),{id:"747869921"},[".headline.jsx-747869921{color:#2a2a2a;}",".headline__h1.jsx-747869921{font-size:48px;}",".headline__h2.jsx-747869921{font-size:40px;}",".headline__h3.jsx-747869921{font-size:32px;}",".headline__h4.jsx-747869921{font-size:24px;}",".headline__h5.jsx-747869921{font-size:20px;}",".headline__h6.jsx-747869921{font-size:18px;}"]),E(M,(0,f.default)({"data-testid":"headline"},b,{className:"jsx-747869921 "+(b&&b.className!=null&&b.className||`${S} fw6 lh-none headline headline__h${v} ${T} ${I}`)}),A)):null};j.propTypes={size:r().number,margin:r().string,className:r().string,children:r().oneOfType([r().arrayOf(r().node),r().node]).isRequired,tag:r().string,font:r().string},j.defaultProps={size:1,tag:null,margin:"mv4",className:"",font:"founders-cond"};const y=j},"./components/LastUpdatedTimestamp.js":(O,a,e)=>{"use strict";e.r(a),e.d(a,{default:()=>h});var f=e("./node_modules/next/dist/compiled/react/index.js"),_=e("./node_modules/prop-types/index.js"),d=e.n(_),m=e("./node_modules/react-i18next/dist/es/index.js"),l=e("./components/RefreshIcon.js"),p=f.createElement;const r=({fontSize:E,children:j,className:y,t:R,withIcon:S})=>{const{0:v,1:x}=(0,f.useState)(!1);return(0,f.useEffect)(()=>{if(!j)return;x(!0);let g;const A=window.requestAnimationFrame(()=>{g=setTimeout(()=>x(!1),5e3)});return()=>{cancelAnimationFrame(A),clearTimeout(g)}},[j]),j?p("div",{className:`last-updated-timestamp founders-mono gray-80 lh-none df items-center ${E} ${y}`},S&&p(l.default,{isUpdating:v}),p("span",{className:"pl1"},R("Last update")," ",p("span",{className:"timestamp"},j))):null};r.displayName="LastUpdatedTimestamp",r.propTypes={children:d().node,className:d().string,withIcon:d().bool,fontSize:d().string},r.defaultProps={children:null,className:"",withIcon:!0,fontSize:"f3"};const h=(0,m.withTranslation)()(r)},"./components/Link.js":(O,a,e)=>{"use strict";e.r(a),e.d(a,{default:()=>g});var f=e("./node_modules/@babel/runtime/helpers/esm/extends.js"),_=e("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),d=e("./node_modules/next/dist/compiled/react/index.js"),m=e("./node_modules/prop-types/index.js"),l=e.n(m),p=e("./node_modules/classnames/index.js"),r=e.n(p),h=e("./helpers/isExternalUrl.js"),E=e("./components/providers/EmbedContext.js"),j=e("./components/providers/BrandContext.js"),y=e("./helpers/isRelativeUrl.js"),R=e("./helpers/isTelemundo.js");const S=["linkText","children","accessibleOnly","href","className","data-icid"];var v=d.createElement;const x=A=>{let{linkText:I,children:b,accessibleOnly:M,href:T,className:D,"data-icid":W}=A,C=(0,_.default)(A,S);const{isEmbed:N,isPartner:L,isInSpanish:B,useLinkTarget:i}=(0,d.useContext)(E.default),n=(0,d.useContext)(j.default),o=r()({"show-on-tab":M},D),t=N||L&&B,s=L&&!B;(0,h.default)(T)&&Object.assign(C,{rel:"nofollow"}),i&&C?.target||(t&&Object.assign(C,{target:"_parent"}),s&&Object.assign(C,{target:"_blank"}));const c=(0,R.default)(n)&&(0,y.default)(T)?`https://www.nbcnews.com${T}`:T,u={[L?"data-cid":"data-icid"]:W};return v("a",(0,f.default)({},C,{href:c,className:o},u),I||b)};x.displayName="Link",x.propTypes={href:l().string,linkText:l().string,className:l().string,accessibleOnly:l().bool},x.defaultProps={href:null,linkText:null,className:null,accessibleOnly:!1};const g=x},"./components/RefreshIcon.js":(O,a,e)=>{"use strict";e.r(a),e.d(a,{default:()=>h});var f=e("./node_modules/styled-jsx/style.js"),_=e.n(f),d=e("./node_modules/next/dist/compiled/react/index.js"),m=e("./node_modules/classnames/index.js"),l=e.n(m),p=d.createElement;const r=({isUpdating:E,color:j,size:y,classes:R})=>p(d.Fragment,null,p(_(),{id:"404944366"},["@-webkit-keyframes spin-jsx-404944366{100%{-webkit-transform:rotate(360deg);-ms-transform:rotate(360deg);transform:rotate(360deg);}}","@keyframes spin-jsx-404944366{100%{-webkit-transform:rotate(360deg);-ms-transform:rotate(360deg);transform:rotate(360deg);}}","[data-update-toggle].jsx-404944366{-webkit-animation-name:spin-jsx-404944366;animation-name:spin-jsx-404944366;-webkit-animation-fill-mode:both;animation-fill-mode:both;-webkit-animation-duration:2s;animation-duration:2s;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite;-webkit-animation-timing-function:linear;animation-timing-function:linear;-webkit-animation-play-state:paused;animation-play-state:paused;}",".updating-animation.jsx-404944366{-webkit-animation-play-state:running;animation-play-state:running;}"]),p("svg",{width:y,height:y,viewBox:"0 0 10 10",fill:"none",xmlns:"http://www.w3.org/2000/svg","data-update-toggle":!0,className:"jsx-404944366 "+(l()(R,"refresh-icon",{"updating-animation":E})||"")},p("path",{d:"M9.63359 0.816406L8.61797 1.83203C7.73906 0.953125 6.52812 0.40625 5.2 0.40625C2.60234 0.40625 0.473437 2.45703 0.35625 5.01562C0.336719 5.15234 0.453906 5.25 0.590625 5.25H1.1375C1.25469 5.25 1.35234 5.17188 1.37187 5.03516C1.48906 3.02344 3.14922 1.42188 5.2 1.42188C6.25469 1.42188 7.21172 1.85156 7.89531 2.55469L6.84062 3.60938C6.68437 3.76562 6.80156 4 6.99687 4H9.80937C9.92656 4 10.0437 3.90234 10.0437 3.76562V0.972656C10.0437 0.777344 9.78984 0.660156 9.63359 0.816406ZM9.78984 5.25H9.24297C9.12578 5.25 9.02812 5.34766 9.00859 5.48438C8.89141 7.49609 7.23125 9.07812 5.2 9.07812C4.12578 9.07812 3.16875 8.66797 2.48516 7.96484L3.53984 6.91016C3.69609 6.75391 3.57891 6.5 3.38359 6.5H0.590625C0.453906 6.5 0.35625 6.61719 0.35625 6.73438V9.54688C0.35625 9.74219 0.590625 9.85938 0.746875 9.70312L1.7625 8.6875C2.64141 9.56641 3.85234 10.0938 5.2 10.0938C7.77812 10.0938 9.90703 8.0625 10.0242 5.50391C10.0437 5.36719 9.92656 5.25 9.78984 5.25Z",fill:j,className:"jsx-404944366"})));r.defaultProps={color:"#555555",size:"10",classes:""};const h=r},"./components/providers/BrandContext.js":(O,a,e)=>{"use strict";e.r(a),e.d(a,{default:()=>_});var f=e("./node_modules/next/dist/compiled/react/index.js");const _=f.createContext("news")},"./components/providers/EmbedContext.js":(O,a,e)=>{"use strict";e.r(a),e.d(a,{default:()=>_});var f=e("./node_modules/next/dist/compiled/react/index.js");const _=f.createContext({isEmbed:!1,isPartner:!1,isInSpanish:!1,useLinkTarget:!1})},"./helpers/isExternalUrl.js":(O,a,e)=>{"use strict";e.r(a),e.d(a,{default:()=>_});const _=d=>d?!/(^[#/])|((nbcnews|today|msnbc)\.com)/.test(d):!1},"./helpers/isRelativeUrl.js":(O,a,e)=>{"use strict";e.r(a),e.d(a,{default:()=>_});const _=d=>d?!/^https?:\/\/|^\/\/|^mailto:|^#/i.test(d):!1},"./helpers/isTelemundo.js":(O,a,e)=>{"use strict";e.r(a),e.d(a,{default:()=>d});var f=e("./helpers/constants.js");const d=m=>m===f.BRANDS.TELEMUNDO},"./node_modules/classnames/index.js":(O,a)=>{var e,f;/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(){"use strict";var _={}.hasOwnProperty,d="[native code]";function m(){for(var l=[],p=0;p<arguments.length;p++){var r=arguments[p];if(r){var h=typeof r;if(h==="string"||h==="number")l.push(r);else if(Array.isArray(r)){if(r.length){var E=m.apply(null,r);E&&l.push(E)}}else if(h==="object"){if(r.toString!==Object.prototype.toString&&!r.toString.toString().includes("[native code]")){l.push(r.toString());continue}for(var j in r)_.call(r,j)&&r[j]&&l.push(j)}}}return l.join(" ")}O.exports?(m.default=m,O.exports=m):(e=[],f=function(){return m}.apply(a,e),f!==void 0&&(O.exports=f))})()},"./node_modules/client-only/index.js":()=>{},"./node_modules/prop-types/factoryWithThrowingShims.js":(O,a,e)=>{"use strict";var f=e("./node_modules/prop-types/lib/ReactPropTypesSecret.js");function _(){}function d(){}d.resetWarningCache=_,O.exports=function(){function m(r,h,E,j,y,R){if(R!==f){var S=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw S.name="Invariant Violation",S}}m.isRequired=m;function l(){return m}var p={array:m,bigint:m,bool:m,func:m,number:m,object:m,string:m,symbol:m,any:m,arrayOf:l,element:m,elementType:m,instanceOf:l,node:m,objectOf:l,oneOf:l,oneOfType:l,shape:l,exact:l,checkPropTypes:d,resetWarningCache:_};return p.PropTypes=p,p}},"./node_modules/prop-types/index.js":(O,a,e)=>{if(!1)var f,_;else O.exports=e("./node_modules/prop-types/factoryWithThrowingShims.js")()},"./node_modules/prop-types/lib/ReactPropTypesSecret.js":O=>{"use strict";var a="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";O.exports=a},"./node_modules/styled-jsx/dist/index/index.js":(O,a,e)=>{var f=e("./node_modules/process/browser.js"),_=e("./node_modules/console-browserify/index.js");e("./node_modules/client-only/index.js");var d=e("./node_modules/next/dist/compiled/react/index.js");function m(i){return i&&typeof i=="object"&&"default"in i?i:{default:i}}var l=m(d);function p(i,n){for(var o=0;o<n.length;o++){var t=n[o];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(i,t.key,t)}}function r(i,n,o){return n&&p(i.prototype,n),o&&p(i,o),i}var h=typeof f<"u"&&f.env&&!0,E=function(i){return Object.prototype.toString.call(i)==="[object String]"},j=function(){function i(o){var t=o===void 0?{}:o,s=t.name,c=s===void 0?"stylesheet":s,u=t.optimizeForSpeed,P=u===void 0?h:u;y(E(c),"`name` must be a string"),this._name=c,this._deletedRulePlaceholder="#"+c+"-deleted-rule____{}",y(typeof P=="boolean","`optimizeForSpeed` must be a boolean"),this._optimizeForSpeed=P,this._serverSheet=void 0,this._tags=[],this._injected=!1,this._rulesCount=0;var F=typeof window<"u"&&document.querySelector('meta[property="csp-nonce"]');this._nonce=F?F.getAttribute("content"):null}var n=i.prototype;return n.setOptimizeForSpeed=function(t){y(typeof t=="boolean","`setOptimizeForSpeed` accepts a boolean"),y(this._rulesCount===0,"optimizeForSpeed cannot be when rules have already been inserted"),this.flush(),this._optimizeForSpeed=t,this.inject()},n.isOptimizeForSpeed=function(){return this._optimizeForSpeed},n.inject=function(){var t=this;if(y(!this._injected,"sheet already injected"),this._injected=!0,typeof window<"u"&&this._optimizeForSpeed){this._tags[0]=this.makeStyleTag(this._name),this._optimizeForSpeed="insertRule"in this.getSheet(),this._optimizeForSpeed||(h||_.warn("StyleSheet: optimizeForSpeed mode not supported falling back to standard mode."),this.flush(),this._injected=!0);return}this._serverSheet={cssRules:[],insertRule:function(s,c){return typeof c=="number"?t._serverSheet.cssRules[c]={cssText:s}:t._serverSheet.cssRules.push({cssText:s}),c},deleteRule:function(s){t._serverSheet.cssRules[s]=null}}},n.getSheetForTag=function(t){if(t.sheet)return t.sheet;for(var s=0;s<document.styleSheets.length;s++)if(document.styleSheets[s].ownerNode===t)return document.styleSheets[s]},n.getSheet=function(){return this.getSheetForTag(this._tags[this._tags.length-1])},n.insertRule=function(t,s){if(y(E(t),"`insertRule` accepts only strings"),typeof window>"u")return typeof s!="number"&&(s=this._serverSheet.cssRules.length),this._serverSheet.insertRule(t,s),this._rulesCount++;if(this._optimizeForSpeed){var c=this.getSheet();typeof s!="number"&&(s=c.cssRules.length);try{c.insertRule(t,s)}catch{return h||_.warn(`StyleSheet: illegal rule: 

`+t+`

See https://stackoverflow.com/q/20007992 for more info`),-1}}else{var u=this._tags[s];this._tags.push(this.makeStyleTag(this._name,t,u))}return this._rulesCount++},n.replaceRule=function(t,s){if(this._optimizeForSpeed||typeof window>"u"){var c=typeof window<"u"?this.getSheet():this._serverSheet;if(s.trim()||(s=this._deletedRulePlaceholder),!c.cssRules[t])return t;c.deleteRule(t);try{c.insertRule(s,t)}catch{h||_.warn(`StyleSheet: illegal rule: 

`+s+`

See https://stackoverflow.com/q/20007992 for more info`),c.insertRule(this._deletedRulePlaceholder,t)}}else{var u=this._tags[t];y(u,"old rule at index `"+t+"` not found"),u.textContent=s}return t},n.deleteRule=function(t){if(typeof window>"u"){this._serverSheet.deleteRule(t);return}if(this._optimizeForSpeed)this.replaceRule(t,"");else{var s=this._tags[t];y(s,"rule at index `"+t+"` not found"),s.parentNode.removeChild(s),this._tags[t]=null}},n.flush=function(){this._injected=!1,this._rulesCount=0,typeof window<"u"?(this._tags.forEach(function(t){return t&&t.parentNode.removeChild(t)}),this._tags=[]):this._serverSheet.cssRules=[]},n.cssRules=function(){var t=this;return typeof window>"u"?this._serverSheet.cssRules:this._tags.reduce(function(s,c){return c?s=s.concat(Array.prototype.map.call(t.getSheetForTag(c).cssRules,function(u){return u.cssText===t._deletedRulePlaceholder?null:u})):s.push(null),s},[])},n.makeStyleTag=function(t,s,c){s&&y(E(s),"makeStyleTag accepts only strings as second parameter");var u=document.createElement("style");this._nonce&&u.setAttribute("nonce",this._nonce),u.type="text/css",u.setAttribute("data-"+t,""),s&&u.appendChild(document.createTextNode(s));var P=document.head||document.getElementsByTagName("head")[0];return c?P.insertBefore(u,c):P.appendChild(u),u},r(i,[{key:"length",get:function(){return this._rulesCount}}]),i}();function y(i,n){if(!i)throw new Error("StyleSheet: "+n+".")}function R(i){for(var n=5381,o=i.length;o;)n=n*33^i.charCodeAt(--o);return n>>>0}var S=R,v=function(i){return i.replace(/\/style/gi,"\\/style")},x={};function g(i,n){if(!n)return"jsx-"+i;var o=String(n),t=i+o;return x[t]||(x[t]="jsx-"+S(i+"-"+o)),x[t]}function A(i,n){var o=/__jsx-style-dynamic-selector/g;typeof window>"u"&&(n=v(n));var t=i+n;return x[t]||(x[t]=n.replace(o,i)),x[t]}function I(i,n){return n===void 0&&(n={}),i.map(function(o){var t=o[0],s=o[1];return l.default.createElement("style",{id:"__"+t,key:"__"+t,nonce:n.nonce?n.nonce:void 0,dangerouslySetInnerHTML:{__html:s}})})}var b=function(){function i(o){var t=o===void 0?{}:o,s=t.styleSheet,c=s===void 0?null:s,u=t.optimizeForSpeed,P=u===void 0?!1:u;this._sheet=c||new j({name:"styled-jsx",optimizeForSpeed:P}),this._sheet.inject(),c&&typeof P=="boolean"&&(this._sheet.setOptimizeForSpeed(P),this._optimizeForSpeed=this._sheet.isOptimizeForSpeed()),this._fromServer=void 0,this._indices={},this._instancesCounts={}}var n=i.prototype;return n.add=function(t){var s=this;this._optimizeForSpeed===void 0&&(this._optimizeForSpeed=Array.isArray(t.children),this._sheet.setOptimizeForSpeed(this._optimizeForSpeed),this._optimizeForSpeed=this._sheet.isOptimizeForSpeed()),typeof window<"u"&&!this._fromServer&&(this._fromServer=this.selectFromServer(),this._instancesCounts=Object.keys(this._fromServer).reduce(function(U,K){return U[K]=0,U},{}));var c=this.getIdAndRules(t),u=c.styleId,P=c.rules;if(u in this._instancesCounts){this._instancesCounts[u]+=1;return}var F=P.map(function(U){return s._sheet.insertRule(U)}).filter(function(U){return U!==-1});this._indices[u]=F,this._instancesCounts[u]=1},n.remove=function(t){var s=this,c=this.getIdAndRules(t).styleId;if(M(c in this._instancesCounts,"styleId: `"+c+"` not found"),this._instancesCounts[c]-=1,this._instancesCounts[c]<1){var u=this._fromServer&&this._fromServer[c];u?(u.parentNode.removeChild(u),delete this._fromServer[c]):(this._indices[c].forEach(function(P){return s._sheet.deleteRule(P)}),delete this._indices[c]),delete this._instancesCounts[c]}},n.update=function(t,s){this.add(s),this.remove(t)},n.flush=function(){this._sheet.flush(),this._sheet.inject(),this._fromServer=void 0,this._indices={},this._instancesCounts={}},n.cssRules=function(){var t=this,s=this._fromServer?Object.keys(this._fromServer).map(function(u){return[u,t._fromServer[u]]}):[],c=this._sheet.cssRules();return s.concat(Object.keys(this._indices).map(function(u){return[u,t._indices[u].map(function(P){return c[P].cssText}).join(t._optimizeForSpeed?"":`
`)]}).filter(function(u){return!!u[1]}))},n.styles=function(t){return I(this.cssRules(),t)},n.getIdAndRules=function(t){var s=t.children,c=t.dynamic,u=t.id;if(c){var P=g(u,c);return{styleId:P,rules:Array.isArray(s)?s.map(function(F){return A(P,F)}):[A(P,s)]}}return{styleId:g(u),rules:Array.isArray(s)?s:[s]}},n.selectFromServer=function(){var t=Array.prototype.slice.call(document.querySelectorAll('[id^="__jsx-"]'));return t.reduce(function(s,c){var u=c.id.slice(2);return s[u]=c,s},{})},i}();function M(i,n){if(!i)throw new Error("StyleSheetRegistry: "+n+".")}var T=d.createContext(null);T.displayName="StyleSheetContext";function D(){return new b}function W(i){var n=i.registry,o=i.children,t=d.useContext(T),s=d.useState(function(){return t||n||D()}),c=s[0];return l.default.createElement(T.Provider,{value:c},o)}function C(){return d.useContext(T)}var N=l.default.useInsertionEffect||l.default.useLayoutEffect,L=typeof window<"u"?D():void 0;function B(i){var n=L||C();return n?typeof window>"u"?(n.add(i),null):(N(function(){return n.add(i),function(){n.remove(i)}},[i.id,String(i.dynamic)]),null):null}B.dynamic=function(i){return i.map(function(n){var o=n[0],t=n[1];return g(o,t)}).join(" ")},a.StyleRegistry=W,a.createStyleRegistry=D,a.style=B,a.useStyleRegistry=C},"./node_modules/styled-jsx/style.js":(O,a,e)=>{O.exports=e("./node_modules/styled-jsx/dist/index/index.js").style}}]);
