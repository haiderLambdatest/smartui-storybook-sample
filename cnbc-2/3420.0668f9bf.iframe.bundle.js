"use strict";(globalThis.webpackChunkfirecracker=globalThis.webpackChunkfirecracker||[]).push([[3420],{"./components/DebugInfo/index.js":(we,C,o)=>{o.r(C),o.d(C,{PrimariesDebugger:()=>K,default:()=>ce});var $=o("./node_modules/styled-jsx/style.js"),v=o.n($),A=o("./node_modules/prop-types/index.js"),r=o.n(A),m=o("./node_modules/next/dist/compiled/react/index.js"),L=o("./node_modules/dayjs/dayjs.min.js"),N=o.n(L),M=o("./node_modules/dayjs/plugin/utc.js"),P=o.n(M),R=o("./node_modules/dayjs/plugin/timezone.js"),O=o.n(R);const z=s=>typeof s!="string"?"":decodeURI(s).split("|").join(" ");var p=o("./components/Link.js"),J=o("./node_modules/console-browserify/index.js"),t=m.createElement;N().extend(P()),N().extend(O());const Y=()=>{var s=".js-hour-glass",d=".js-time-input",n=document.querySelector(s),l=document.querySelector(d);const c=()=>{var a=document.querySelector('input[type="date"]').value,u=document.querySelector('input[type="time"]').value,b="testServerTime=",j="%7C";if(!a){J.log("\u231B enter a date, please \u231B");return}u||(u="00:00:00");var w=b+a+j+u,g=window&&new URLSearchParams(window.location.search);g.delete("testServerTime");var y=window&&window.location.href.includes("?")?"?"+g.toString()+"&"+w:"?"+w;window.location.href=window.location.pathname+y};n.addEventListener("click",c),l.addEventListener("keyup",function(a){a.keyCode===13&&c()})},B=17500,V=17888,Q=1,G=3,H=({dataUrl:s,updated:d})=>s.replace(/\.json$/,`/${d}.json`),Z=({path:s,dataUrl:d,updated:n})=>{const l=`Error with ${s}`,c=`
    *Path:* ${s}
    *Updated:* ${n}
    *Data URL:* ${d}

    *Description:*
    *Please describe what you are seeing and what you expect to see instead. Screenshots are appreciated :)*


    *Steps to reproduce the problem:*

  `;return`https://nbcnewsdigital.atlassian.net/secure/CreateIssueDetails!init.jspa?pid=${B}&issuetype=${Q}&summary=${l}&priority=${G}&components=${V}&description=${encodeURI(c)}`},S=({dataUrl:s,path:d,startClosed:n,testServerTime:l,updated:c})=>{const a=H({dataUrl:s,updated:c});return t(m.Fragment,null,t(v(),{id:"804508167"},[".debug-info.jsx-804508167{background-color:#f2f2f2;border-bottom:none;border-right:none;right:0;bottom:0;z-index:100;}","[type='checkbox'].jsx-804508167{left:-9999px;}","a.jsx-804508167,a.jsx-804508167:active,a.jsx-804508167:visited{color:#102039;}","label.jsx-804508167~div.jsx-804508167{background-color:#f2f2f2;border:1px solid #102039;border-right:none;right:0;position:fixed;top:33%;width:300px;visibility:hidden;}",".jsx-804508167:checked~div.jsx-804508167{visibility:visible;}","label.jsx-804508167{cursor:pointer;display:inline-block;height:3.3rem;max-width:3rem;padding:0.1rem;text-align:center;width:3rem;}",".jsx-804508167:checked~label.jsx-804508167{background-color:#102039;}","label.jsx-804508167::before{content:'\u{1F6E0}';font-size:2rem;line-height:3.5rem;}","span[role='img'].jsx-804508167{cursor:pointer;-webkit-filter:gray;filter:gray;-webkit-filter:grayscale(1);-webkit-filter:grayscale(1);filter:grayscale(1);}","span[role='img'].jsx-804508167:hover{-webkit-filter:none;-webkit-filter:none;filter:none;}","dt.jsx-804508167{background-color:#102039;color:white;margin-right:1.5rem;padding-left:1rem;padding-top:0.2rem;padding-bottom:0.2rem;}","dd.jsx-804508167{margin-bottom:0.5rem;margin-left:2rem;margin-top:0.25rem;padding-left:1rem;padding-right:1rem;}"]),t("div",{className:"jsx-804508167 debug-info b-solid bw-1px b-midnight-blue fixed"},t("span",{role:"img","aria-label":"Adjust the 'server' time",className:"jsx-804508167 f8 mh4 js-hour-glass"},"\u231B"),t(p.default,{className:"no-underline",href:Z({dataUrl:a,path:d,updated:c}),target:"_blank",rel:"noopener noreferrer",title:"File a bug report for this page"},t("span",{role:"img","aria-label":"File a bug report for this page",className:"jsx-804508167 f8 mh4"},"\u{1F41E}")),t("input",{type:"checkbox",id:"close-debug",defaultChecked:n,className:"jsx-804508167 absolute"}),t("label",{htmlFor:"close-debug",className:"jsx-804508167"}),t("div",{className:"jsx-804508167"},t("dl",{className:"jsx-804508167"},t("dt",{className:"jsx-804508167"},"Data source:"),t("dd",{className:"jsx-804508167"},t(p.default,{href:s},s)),t("dt",{className:"jsx-804508167"},"Value of ",t("code",{className:"jsx-804508167 founders-mono f4"},"updated"),":")," ",t("dd",{className:"jsx-804508167"},c),t("dt",{className:"jsx-804508167"},"Copy of this exact data:"),t("dd",{className:"jsx-804508167"},t(p.default,{href:a},a))),t("dl",{className:"jsx-804508167 dn"},t("dt",{className:"jsx-804508167"},"Server time applied:"),t("dd",{className:"jsx-804508167"},l&&N()(z(l).tz("America/New_York").format("MM-DD-YY h:mm:ss A"))||N().utc().tz("America/New_York").format("MM-DD-YY h:mm:ss A"))),t("dl",{className:"jsx-804508167 dn"},t("dt",{className:"jsx-804508167"},"Apply server time:"),t("dd",{className:"jsx-804508167"},t("input",{type:"date",className:"jsx-804508167 mv2"}),t("input",{type:"time",step:"1",className:"jsx-804508167 mv2 js-time-input"}))))),t("script",{dangerouslySetInnerHTML:{__html:`
          (${Y.toString()})()`},className:"jsx-804508167"}))};S.propTypes={dataUrl:r().string.isRequired,path:r().string,startClosed:r().bool,testServerTime:r().string,updated:r().number.isRequired},S.defaultProps={path:"",startClosed:!0,testServerTime:""};const K=S;var W=o("./node_modules/classnames/index.js"),X=o.n(W),q=o("./node_modules/next/amp.js"),_=o("./node_modules/console-browserify/index.js");function ee(s,d){const{0:n,1:l}=(0,m.useState)(()=>{try{const a=window.localStorage.getItem(s);return a?JSON.parse(a):d}catch{return d}});return[n,a=>{try{const u=a instanceof Function?a(n):a;l(u),window.localStorage.setItem(s,JSON.stringify(u))}catch(u){_.error(u)}}]}const se=ee;var x=m.createElement;const k=({startClosed:s,children:d,title:n})=>{const{0:l,1:c}=(0,m.useState)(s),a=()=>{c(!l)};return x(m.Fragment,null,x(v(),{id:"1598769356"},[".menu-section.jsx-1598769356{background-color:#212529;border-bottom:solid 1px #2a2e32;}"]),x("div",{className:"jsx-1598769356 menu-section"},x(p.default,{className:"db no-underline pointer ph3 pv2 founders-cond lh-none fw4 white",onClick:a,href:"#"},n,"\xA0",l&&"\u25B4",!l&&"\u25BE")),!l&&x(m.Fragment,null,d))};k.propTypes={title:r().string,startClosed:r().bool,children:r().node},k.defaultProps={title:"",startClosed:!0,children:null};const h=k,te=18327,ae=18179,re=1,oe=3,ne="customfield_14149",D=({path:s,dataFiles:d})=>{const n=`Error with ${s}`,l=`
    *Path:* ${s}
    *Related data files:* 
      ||URL||updated||
      ${d.map(({updatedUrl:a,updated:u})=>`|${a}|${u}|`).join(`
    `)}

    *Description:*
    *Please describe what you are seeing and what you expect to see instead. Screenshots are appreciated :)*


    *Steps to reproduce the problem:*

  `;return`https://nbcnewsdigital.atlassian.net/secure/CreateIssueDetails!init.jspa?${[`pid=${te}`,`issuetype=${re}`,`summary=${n}`,`priority=${oe}`,`components=${ae}`,`${ne}=elections`,`description=${encodeURI(l)}`].join("&")}`},le=JSON.parse('[{"displayName":"Status","url":"/status","icon":"\u2139\uFE0F","target":"_blank"},{"displayName":"Sitemap","url":"/politics/election-results/sitemap.xml","icon":"\u{1F4C8}","target":"_blank"},{"displayName":"Storybook","url":"/storybook","icon":"\u{1F4DA}","target":"_blank"}]');var e=m.createElement;const ie=75e3,T=s=>s.split("/").slice(-2).join("/"),de=async()=>{const s=window.location.pathname,n=await(await fetch(`${s}?amp=1`)).text(),c=new window.DOMParser().parseFromString(n,"text/html");return new TextEncoder().encode([...c.querySelectorAll("[amp-custom]")].map(b=>b.innerText).join(" ")).length},E=({updateInterval:s,updatingData:d,updatingFiles:n,staticDataReq:l,duplicateRequests:c,cmsUrl:a,useDebugInfo:u})=>{const b=(0,q.useAmp)(),{path:j,dataUrl:w,updated:g}=d,[y,me]=se("firecracker-debugger-is-open",!1),{0:U,1:ue}=(0,m.useState)(0),{0:F,1:pe}=(0,m.useState)(g),{0:ge,1:I}=(0,m.useState)(!1);if((0,m.useEffect)(()=>{if(!u)return;let i,f;return g!==F&&(pe(g),f=window.requestAnimationFrame(()=>{I(!0),i=setTimeout(()=>I(!1),5e3)})),de().then(ue),()=>{cancelAnimationFrame(f),clearTimeout(i)}},[g,F,u]),!u)return null;const fe=s&&s>6e4?`${s/6e4} Minutes`:`${s/1e3} Seconds`,xe=!!l.length,he=g!==null&&w,be=!!c.length,je=()=>{me(!y)},ye=()=>new TextEncoder().encode(window.document.querySelector("html").innerHTML).length;return b?e(m.Fragment,null,e(v(),{id:"2917403930"},[".debug-info.jsx-2917403930{background-color:rgba(53,57,60,0.95);border:solid 1px rgb(53,57,60);right:0;bottom:0;z-index:1000;box-shadow:0 -2px 5px rgba(0,0,0,0.5);}",".grayscale.jsx-2917403930{cursor:pointer;-webkit-filter:grayscale(1);-webkit-filter:grayscale(1);filter:grayscale(1);}",".grayscale.jsx-2917403930:hover{-webkit-filter:none;-webkit-filter:none;filter:none;}"]),e("div",{className:"jsx-2917403930 debug-info fixed"},e(p.default,{className:"no-underline",target:"_blank",href:a,rel:"noopener noreferrer",title:"Edit CMS file for this page"},e("span",{role:"img","aria-label":"Edit CMS file for this page",className:"jsx-2917403930 f8 mh4 grayscale"},"\u270D\uFE0F")),e(p.default,{className:"no-underline",href:D({dataFiles:n,path:j}),target:"_blank",rel:"noopener noreferrer",title:"File a bug report for this page"},e("span",{role:"img","aria-label":"File a bug report for this page",className:"jsx-2917403930 f8 mh4 grayscale"},"\u{1F41E}")),e(p.default,{className:"no-underline",href:D({dataFiles:n,path:j}),target:"_blank",rel:"noopener noreferrer",title:"File a bug report for this page"},e("span",{role:"img","aria-label":"File a bug report for this page",className:"jsx-2917403930 f8 mh4 grayscale"},"\u{1F41E}")))):e(m.Fragment,null,e(v(),{id:"3669494031"},["@-webkit-keyframes flashText-jsx-3669494031{0%,100%{color:black;}30%,60%{color:white;}}","@keyframes flashText-jsx-3669494031{0%,100%{color:black;}30%,60%{color:white;}}",".flash.jsx-3669494031{-webkit-animation:flashText-jsx-3669494031 300ms linear;animation:flashText-jsx-3669494031 300ms linear;}",".debug-info.jsx-3669494031{background-color:rgba(53,57,60,0.95);border:solid 1px rgb(53,57,60);right:0;bottom:0;z-index:1000;box-shadow:0 -2px 5px rgba(0,0,0,0.5);}","[type='checkbox'].jsx-3669494031{left:-9999px;}","a.jsx-3669494031,a.jsx-3669494031:active,a.jsx-3669494031:visited{color:#102039;}",".debugger-info-pane.jsx-3669494031{background-color:rgba(42,46,50,0.95);right:0;position:fixed;top:33%;width:300px;box-shadow:0 2px 5px rgba(0,0,0,0.5);max-height:calc(100vh - 33%);overflow:auto;}","label.jsx-3669494031{cursor:pointer;display:inline-block;height:3.3rem;max-width:3rem;padding:0.1rem;text-align:center;width:3rem;}",".jsx-3669494031:checked~label.jsx-3669494031{background-color:#212529;}","label.jsx-3669494031::before{content:'\u{1F6E0}';font-size:2rem;line-height:3.5rem;}",".grayscale.jsx-3669494031{cursor:pointer;-webkit-filter:grayscale(1);-webkit-filter:grayscale(1);filter:grayscale(1);}",".grayscale.jsx-3669494031:hover{-webkit-filter:none;-webkit-filter:none;filter:none;}",".updated.jsx-3669494031{color:#000;background-color:#ffd60c;}",".scrollable.jsx-3669494031{max-height:195px;overflow:scroll;margin-bottom:0;}",".scrollable--x.jsx-3669494031{white-space:nowrap;overflow:scroll;}",".scrollable.jsx-3669494031>li.jsx-3669494031:last-child{margin-bottom:8px;}",".bordered-list.jsx-3669494031{border-bottom:dashed 1px #696a6b;}",".bordered-list.jsx-3669494031:last-child{border-bottom:0;}"]),e("div",{className:"jsx-3669494031 debug-info fixed"},e(p.default,{className:"no-underline",target:"_blank",href:a,rel:"noopener noreferrer",title:"Edit CMS file for this page"},e("span",{role:"img","aria-label":"Edit CMS file for this page",className:"jsx-3669494031 f8 mh4 grayscale"},"\u270D\uFE0F")),e(p.default,{className:"no-underline",href:D({dataFiles:n,path:j}),target:"_blank",rel:"noopener noreferrer",title:"File a bug report for this page"},e("span",{role:"img","aria-label":"File a bug report for this page",className:"jsx-3669494031 f8 mh4 grayscale"},"\u{1F41E}")),e("input",{type:"checkbox",id:"close-debug",defaultChecked:y,className:"jsx-3669494031 absolute"}),e("label",{htmlFor:"close-debug",onClick:je,className:"jsx-3669494031"}),y&&e("div",{className:"jsx-3669494031 debugger-info-pane"},e(h,{title:"Updating Data",startClosed:!1},s&&e("li",{className:"jsx-3669494031 lst-none mv2 mh3 pl0"},e("div",{className:"jsx-3669494031 founders-cond white mb1"},"Updating Interval:"),e("div",{className:"jsx-3669494031 founders-mono white f3"},fe)),e(m.Fragment,null,he?n.map(i=>e("ul",{className:"jsx-3669494031 lst-none mv2 mh3 pl0 bordered-list"},e("li",{className:"jsx-3669494031"},e("span",{className:"jsx-3669494031 updated dib ph1"},e("span",{className:"jsx-3669494031 "+(X()("founders-mono f3",{flash:ge})||"")},i.updated)),e("span",{className:"jsx-3669494031 founders-cond white mb1 f5 pl1"},T(i.dataUrl))),e("li",{className:"jsx-3669494031 pv1"},e("div",{className:"jsx-3669494031 founders-cond white mb1"},"Data source:"),e("div",{className:"jsx-3669494031"},e(p.default,{className:"founders-mono white f3 link",href:i.dataUrl},T(i.dataUrl)))),e("li",{className:"jsx-3669494031 pv1"},e("div",{className:"jsx-3669494031 founders-cond white mv1"},"Copy of this exact data:"),e("div",{className:"jsx-3669494031"},e(p.default,{className:"founders-mono white f3 link",href:i.updatedUrl},T(i.updatedUrl)))))):e("div",{className:"jsx-3669494031 pv2 ph3 db publico-txt f3 updated"},e("span",{role:"img","aria-label":"Under construction",className:"jsx-3669494031 mr2 dib"},"\u{1F6A7}"),"Not hooked up to updating data"))),xe&&e(h,{title:"Static Data"},e("ul",{className:"jsx-3669494031 lst-none mv2 mh3 pl0 scrollable"},l.map(({url:i,displayName:f})=>e("li",{key:i,className:"jsx-3669494031 pv2 bordered-list"},e(p.default,{href:i,className:"db founders-mono f3 white link",target:"_blank"},f))))),be&&e(h,{title:"Duplicate Requests"},e("ul",{className:"jsx-3669494031 lst-none mv2 mh3 pl0 scrollable"},c.map(i=>e("li",{key:i,className:"jsx-3669494031 pv2 bordered-list"},e(p.default,{href:i,className:"db founders-mono f3 white link",target:"_blank"},i))))),e(h,{title:"Quick Link Menu"},e("ul",{className:"jsx-3669494031 lst-none mv2 mh3 pl0"},le.map(({displayName:i,url:f,icon:ve,target:Ne})=>e("li",{key:i,className:"jsx-3669494031 bordered-list pv1"},e(p.default,{href:f,target:Ne,className:"db founders-cond white link"},e("span",{role:"img","aria-label":"Status",className:"jsx-3669494031 mr2 dib"},ve),e("span",{className:"jsx-3669494031"},i)))))),e(h,{title:"Performance"},e("ul",{className:"jsx-3669494031 lst-none mv2 mh3 pl0"},e("li",{className:"jsx-3669494031 bordered-list pv1"},e("div",{className:"jsx-3669494031 founders-cond white mb1"},"Total page size"),e("div",{className:"jsx-3669494031 founders-mono white f3"},ye()," bytes")),e("li",{className:"jsx-3669494031 bordered-list pv1"},e("div",{className:"jsx-3669494031 founders-cond white mb1"},"AMP CSS size"),e("div",{className:"jsx-3669494031 founders-mono white f3"}," ",U," bytes"," ",U>ie&&e("span",{className:"jsx-3669494031 f2"},"\u26A0\uFE0F"))))))))};E.propTypes={cmsUrl:r().string,duplicateRequests:r().arrayOf(r().string),staticDataReq:r().arrayOf(r().any),updatingData:r().shape({updated:r().number,path:r().string,dataUrl:r().string}),updatingFiles:r().arrayOf(r().any),useDebugInfo:r().bool},E.defaultProps={cmsUrl:"",duplicateRequests:[],staticDataReq:[],updatingData:{},updatingFiles:[],useDebugInfo:!1};const ce=E}}]);
