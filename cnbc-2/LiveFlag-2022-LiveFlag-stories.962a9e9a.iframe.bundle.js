(globalThis.webpackChunkfirecracker=globalThis.webpackChunkfirecracker||[]).push([[5607],{"./components/LiveFlag/2022/LiveFlag.stories.js":(E,o,t)=>{"use strict";t.r(o),t.d(o,{LiveFlag:()=>a,__namedExportsOrder:()=>s,default:()=>d});var i=t("./node_modules/next/dist/compiled/react/index.js"),_=t("./components/LiveFlag/2022/LiveFlag.js"),n=i.createElement;const d={component:_.default,title:"Global Components/Flags/Live Flag/2022",args:{showBlinkingDot:!1},parameters:{status:{type:"deprecated"}}},a=e=>n(_.default,e);a.displayName="LiveFlag";const s=["LiveFlag"]},"./components/LiveFlag/2022/LiveFlag.js":(E,o,t)=>{"use strict";t.r(o),t.d(o,{default:()=>f});var i=t("./node_modules/styled-jsx/style.js"),_=t.n(i),n=t("./node_modules/next/dist/compiled/react/index.js"),d=t("./node_modules/prop-types/index.js"),a=t.n(d),s=t("./node_modules/classnames/index.js"),e=t.n(s),l=t("./node_modules/react-i18next/dist/es/index.js"),m=t("./components/navigation/BlinkingDot.js"),r=n.createElement;const p=({t:u,className:x,showBlinkingDot:v})=>r(n.Fragment,null,r(_(),{id:"302977642"},[".live-flag.jsx-302977642{padding:3px 8px;gap:3px;}",".live-text.jsx-302977642{margin-top:-1.5px;}",".live-flag.jsx-302977642 .dot{margin-top:1px;}"]),r("div",{className:"jsx-302977642 "+(e()("live-flag dif items-center white bg-red",x)||"")},v&&r(m.default,{classes:"bg-white mr1",shouldShow:v}),r("span",{className:"jsx-302977642 live-text founders-cond f4 fw6 lh-none ttu"},`${u("Live")}`)));p.propTypes={className:a().string,showBlinkingDot:a().bool},p.defaultProps={className:null,showBlinkingDot:!1};const f=(0,l.withTranslation)()(p)},"./components/navigation/BlinkingDot.js":(E,o,t)=>{"use strict";t.r(o),t.d(o,{default:()=>r});var i=t("./node_modules/styled-jsx/style.js"),_=t.n(i),n=t("./node_modules/next/dist/compiled/react/index.js"),d=t("./node_modules/prop-types/index.js"),a=t.n(d),s=t("./node_modules/next/amp.js"),e=t.n(s),l=n.createElement;const m=({classes:p="",shouldShow:f=!1,stateName:u=""})=>{const x=(0,s.useAmp)(),v=u?`${u} has live results`:"Is Live";return l(n.Fragment,null,l(_(),{id:"446321060"},["@-webkit-keyframes blink-jsx-446321060{0%,15%{opacity:0;}70%{opacity:1;}}","@keyframes blink-jsx-446321060{0%,15%{opacity:0;}70%{opacity:1;}}",".dot.jsx-446321060{border-radius:50%;display:inline-block;height:6px;margin-bottom:2px;width:6px;-webkit-animation:blink-jsx-446321060 1.5s linear infinite alternate;animation:blink-jsx-446321060 1.5s linear infinite alternate;}"]),f&&l("span",{"data-test":"blinking-dot","data-testid":"stateList__live-state",alt:x?null:v,className:`jsx-446321060 dot ${p}`}))};m.propTypes={classes:a().string,shouldShow:a().bool,stateName:a().string};const r=m},"./node_modules/classnames/index.js":(E,o)=>{var t,i;/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(){"use strict";var _={}.hasOwnProperty;function n(){for(var s="",e=0;e<arguments.length;e++){var l=arguments[e];l&&(s=a(s,d(l)))}return s}function d(s){if(typeof s=="string"||typeof s=="number")return s;if(typeof s!="object")return"";if(Array.isArray(s))return n.apply(null,s);if(s.toString!==Object.prototype.toString&&!s.toString.toString().includes("[native code]"))return s.toString();var e="";for(var l in s)_.call(s,l)&&s[l]&&(e=a(e,l));return e}function a(s,e){return e?s?s+" "+e:s+e:s}E.exports?(n.default=n,E.exports=n):(t=[],i=function(){return n}.apply(o,t),i!==void 0&&(E.exports=i))})()}}]);
