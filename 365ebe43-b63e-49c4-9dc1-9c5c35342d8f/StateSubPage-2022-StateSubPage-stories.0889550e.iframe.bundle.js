"use strict";(globalThis.webpackChunkfirecracker=globalThis.webpackChunkfirecracker||[]).push([[793],{"./components/StateSubPage/2022/StateSubPage.stories.js":(J,y,e)=>{e.r(y),e.d(y,{General:()=>T,Primary:()=>P,__namedExportsOrder:()=>$,default:()=>C});var r=e("./node_modules/next/dist/compiled/react/index.js"),b=e("./helpers/constants.js"),I=e("./node_modules/styled-jsx/style.js"),g=e.n(I),A=e("./node_modules/prop-types/index.js"),t=e.n(A),R=e("./node_modules/classnames/index.js"),o=e.n(R),j=e("./node_modules/lodash.kebabcase/index.js"),G=e.n(j),O=e("./node_modules/next/amp.js"),l=e("./lib/getIcidString.js"),d=e("./components/Link.js"),S=e("./server/v2/config/cityRaces.js"),a=r.createElement;const f=({electionSeason:x,electionType:w,hideLinks:K,isChromeless:v,links:m,stateName:E,isEmbedded:F,whiteList:Y})=>{const z=(0,O.useAmp)();if(K||!m?.length)return null;const n={desktop:v?"40px":"100px",mobile:v?"40px":"100px"};let c=G()(E);const p=S.supportedCitySlugsToStateName[c]||E;S.supportedCitySlugsToStateNameSlug[c]&&(c=S.supportedCitySlugsToStateNameSlug[c]);const k=`/politics/${x}-elections/${c}-results`;m=m.filter(i=>i.href!==k);const H=w===b.ELECTION_TYPE.GENERAL&&p&&x&&Y.includes(k);return a(r.Fragment,null,a(g(),{id:"3569232623",dynamic:[n.mobile,n.desktop]},[`.stateSubPageLinks-container{top:${n.mobile};z-index:300;}`,".stateSubPageLinks{padding:12px 20px 0;margin:0 auto;max-width:1240px;-webkit-scrollbar-width:none;-moz-scrollbar-width:none;-ms-scrollbar-width:none;scrollbar-width:none;}",".stateSubPageLinks::-webkit-scrollbar{display:none;}",".stateSubPageLinks:after{content:'';position:absolute;right:0;top:0;bottom:0;width:50px;height:100%;background:linear-gradient( 270deg, #ffffff 13.33%, rgba(255,255,255,0) 100% );pointer-events:none;}",".stateSubPageLink{margin-right:20px;margin-bottom:8px;padding-bottom:2px;position:relative;}","a.stateSubPageLink:hover{border-bottom:1px solid rgba(16,32,57,0.7);}",".stateSubPageLink:last-child{margin-right:0;}",".stateSubPageLink.stateSubPageLink--active{border-bottom:1px solid #102039;padding-bottom:2px;margin-bottom:5px;}","@media screen and (min-width:758px){.stateSubPageLinks{padding:12px 30px 0;}}",`@media screen and (min-width:1000px){.stateSubPageLinks-container{top:${n.desktop};}.stateSubPageLinks{padding:12px 40px 0;}}`]),a("div",{className:g().dynamic([["3569232623",[n.mobile,n.desktop]]])+" "+(o()("stateSubPageLinks-container bg-white",{sticky:!z&&!F})||"")},a("div",{"data-testid":"stateSubPageLinks",className:g().dynamic([["3569232623",[n.mobile,n.desktop]]])+" stateSubPageLinks ws-nowrap overflow-x-scroll"},H?a(d.default,{className:o()("founders-cond f5 fw6 lh-none f3 link stateSubPageLink gray-80 dib lh-copy"),linkText:`${p} races`,href:k,"data-icid":l.STRING_INTRA_STATE_LINKS}):p&&a("div",{className:g().dynamic([["3569232623",[n.mobile,n.desktop]]])+" "+(o()("founders-cond f5 fw6 lh-none f3 stateSubPageLink gray-80 dib lh-copy")||"")},`${p} races`),m.map(({href:i,text:s,isCurrentPage:u})=>s.includes("runoff")?a(r.Fragment,{key:`link-${i}`},a(d.default,{className:o()("publico-txt lh-none ttc f3 link stateSubPageLink midnight-blue dib dn-m lh-copy",{"stateSubPageLink--active":u}),linkText:s.replace(" runoff",""),href:i,"data-icid":l.STRING_INTRA_STATE_LINKS,key:`${s}-mobile`}),a(d.default,{className:o()("publico-txt lh-none ttc f3 link stateSubPageLink midnight-blue dn dib-m lh-copy",{"stateSubPageLink--active":u}),linkText:s,href:i,"data-icid":l.STRING_INTRA_STATE_LINKS,key:s})):s==="senate special"?a(r.Fragment,{key:`link-${i}`},a(d.default,{className:o()("publico-txt lh-none ttc f3 link stateSubPageLink midnight-blue dib dn-m lh-copy",{"stateSubPageLink--active":u}),linkText:"senate*",href:i,"data-icid":l.STRING_INTRA_STATE_LINKS,key:`${s}-mobile`}),a(d.default,{className:o()("publico-txt lh-none ttc f3 link stateSubPageLink midnight-blue dn dib-m lh-copy",{"stateSubPageLink--active":u}),linkText:s,href:i,"data-icid":l.STRING_INTRA_STATE_LINKS,key:s})):a(d.default,{className:o()("publico-txt lh-none ttc f3 link stateSubPageLink midnight-blue dib lh-copy",{"stateSubPageLink--active":u}),linkText:s,href:i,"data-icid":l.STRING_INTRA_STATE_LINKS,key:s})))))};f.propTypes={links:t().arrayOf(t().shape({href:t().string,text:t().string})),electionSeason:t().oneOfType([t().string,t().number]),electionType:t().string,hideLinks:t().bool,isChromeless:t().bool,isEmbedded:t().bool,stateName:t().string,whiteList:t().arrayOf(t().string)},f.defaultProps={links:[],electionSeason:null,electionType:null,hideLinks:!0,isChromeless:!1,isEmbedded:!1,stateName:null,whiteList:[]};const h=f,L=JSON.parse('[{"href":"/politics/2020-elections/georgia-results","text":"GA","isCurrentPage":true},{"href":"/politics/2020-elections/georgia-president-results","text":"president","isCurrentPage":false},{"href":"/politics/2020-elections/georgia-senate-runoff-results","text":"senate 1 runoff","isCurrentPage":false},{"href":"/politics/2020-special-elections/georgia-senate-results","text":"senate special","isCurrentPage":false},{"href":"/politics/2020-elections/georgia-house-results","text":"house","isCurrentPage":false}]');var N=r.createElement;const C={component:h,title:"Features/Nav/State Sub Page Nav/2022/State Sub Page Nav",parameters:{status:{type:"deprecated"}}},T=()=>N(h,{links:L,hideLinks:!1,stateName:"Georgia",electionSeason:"2022",electionType:b.ELECTION_TYPE.GENERAL});T.displayName="General";const P=()=>N(h,{links:L,hideLinks:!1,stateName:"Georgia",electionSeason:"2022",electionType:b.ELECTION_TYPE.PRIMARY});P.displayName="Primary";const $=["General","Primary"]}}]);
