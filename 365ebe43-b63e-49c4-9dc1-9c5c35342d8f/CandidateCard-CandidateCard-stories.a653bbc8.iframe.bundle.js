(globalThis.webpackChunkfirecracker=globalThis.webpackChunkfirecracker||[]).push([[1215],{"./components/CandidateCard/CandidateCard.stories.js":(j,p,i)=>{"use strict";i.r(p),i.d(p,{CandidateCard:()=>x,CandidateCardWithHeadshot:()=>T,CandidateCardWithNoHeadshot:()=>b,__namedExportsOrder:()=>L,default:()=>h});var s=i("./node_modules/@babel/runtime/helpers/esm/extends.js"),A=i("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),C=i("./node_modules/styled-jsx/style.js"),f=i.n(C),o=i("./node_modules/next/dist/compiled/react/index.js"),t=i("./components/CandidateCard/CandidateCard.js"),a=i("./helpers/constants.js");const S=JSON.parse('{"candidateWithHeadshot":{"candidateYear":"2020","electionSeason":"2022","firstName":"Joe","headshotUrl":"https://nodeassets.nbcnews.com/elections/headshots/2020/US_P00_D_J_BIDEN.png","lastName":"Biden","party":"dem"},"candidateWithNoHeadshot":{"candidateYear":"2022","electionSeason":"2022","firstName":"Arnold","headshotUrl":"","lastName":"Border","party":"dem","percentIn":"21%","percentVote":"13.6%","vote":"202,942"},"twoCandidatesForSpecial":[{"candidateYear":"2022","electionSeason":"2022","firstName":"Arnold","isIncumbent":true,"lastName":"Border","party":"dem","percentIn":"21%","percentVote":"13.6%","vote":"202,942"},{"candidateYear":"2022","electionSeason":"2022","firstName":"George","lastName":"Tarleton","party":"dem","percentIn":"21%","percentVote":"13.6%","vote":"202,942"}],"fourCandidatesForSpecial":[{"candidateYear":"2022","electionSeason":"2022","firstName":"John","lastName":"Murray","party":"dem","percentIn":"21%","percentVote":"13.6%","vote":"202,942"},{"candidateYear":"2022","electionSeason":"2022","firstName":"Donut","lastName":"Wondermill","party":"dem","percentIn":"21%","percentVote":"13.6%","vote":"202,942"},{"candidateYear":"2022","electionSeason":"2022","firstName":"George","lastName":"Tarleton","party":"dem","percentIn":"21%","percentVote":"13.6%","vote":"202,942"},{"candidateYear":"2022","electionSeason":"2022","firstName":"Green","isIncumbent":true,"lastName":"Yoshi","party":"dem","percentIn":"21%","percentVote":"13.6%","vote":"202,942"}]}');var e=o.createElement;function v(l,N){var u=Object.keys(l);if(Object.getOwnPropertySymbols){var m=Object.getOwnPropertySymbols(l);N&&(m=m.filter(function(y){return Object.getOwnPropertyDescriptor(l,y).enumerable})),u.push.apply(u,m)}return u}function E(l){for(var N=1;N<arguments.length;N++){var u=arguments[N]!=null?arguments[N]:{};N%2?v(Object(u),!0).forEach(function(m){(0,A.default)(l,m,u[m])}):Object.getOwnPropertyDescriptors?Object.defineProperties(l,Object.getOwnPropertyDescriptors(u)):v(Object(u)).forEach(function(m){Object.defineProperty(l,m,Object.getOwnPropertyDescriptor(u,m))})}return l}const{candidateWithHeadshot:d,candidateWithNoHeadshot:c}=S,h={component:t.default,title:"Global Components/Candidates/Candidate Card",argTypes:{callStatus:{options:E(E({},a.CALL_STATUSES),{},{"NO FLAG":""}),control:{type:"select"}}},args:{callStatus:""}},x=l=>e(t.default,l);x.displayName="CandidateCard",x.args={firstName:"Joe",lastName:"Biden",electionSeason:"2022",headshotUrl:"https://nodeassets.nbcnews.com/elections/headshots/2020/US_P00_D_J_BIDEN.png",hideCallStatus:!1,hidePerecntIn:!1,isGain:!1,isIncumbent:!0,party:"dem",percentIn:"21%",percentVote:"63.4%",vote:"1,202,942",showIncumbentAsterisk:!1,showCallBelowName:!1,hideFirstInitial:!1};const r=l=>e("div",{className:"founders-cond f6 fw6 black lh-none ttu"},l);r.displayName="title";const n=l=>e("div",{className:"founders-cond f6 fw3 black lh-none mv2"},l);n.displayName="subTitle";const T=()=>e(o.Fragment,null,e(f(),{id:"2334105459"},[".divider.jsx-2334105459{border:1px solid #999;}"]),e("div",{className:"jsx-2334105459 divider"}),e("div",{className:"jsx-2334105459 mv2"},r("Simple headshot"),e("div",{className:"jsx-2334105459 df flex-row justify-between"},e("div",{className:"jsx-2334105459"},n("No winner"),e(t.default,d)),e("div",{className:"jsx-2334105459"},n("Winner"),e(t.default,(0,s.default)({},d,{callStatus:a.CALL_STATUSES.WINNER}))),e("div",{className:"jsx-2334105459"},n("Runoff"),e(t.default,(0,s.default)({},d,{callStatus:a.CALL_STATUSES.RUNOFF}))),e("div",{className:"jsx-2334105459"},n("Non-Partisan Primary Advance"),e(t.default,(0,s.default)({},d,{callStatus:a.CALL_STATUSES.ADVANCE}))))),e("div",{className:"jsx-2334105459 divider"}),e("div",{className:"jsx-2334105459 mv2"},r("Simple headshot + incumbent"),e("div",{className:"jsx-2334105459 df flex-row justify-between"},e("div",{className:"jsx-2334105459"},n("No winner"),e(t.default,(0,s.default)({},d,{isIncumbent:!0}))),e("div",{className:"jsx-2334105459"},n("Winner"),e(t.default,(0,s.default)({},d,{callStatus:a.CALL_STATUSES.WINNER,isIncumbent:!0}))),e("div",{className:"jsx-2334105459"},n("Runoff"),e(t.default,(0,s.default)({},d,{callStatus:a.CALL_STATUSES.RUNOFF,isIncumbent:!0}))),e("div",{className:"jsx-2334105459"},n("Non-Partisan Primary Advance"),e(t.default,(0,s.default)({},d,{callStatus:a.CALL_STATUSES.ADVANCE,isIncumbent:!0}))))),e("div",{className:"jsx-2334105459 divider"}),e("div",{className:"jsx-2334105459 mv2"},r("Headshots + percent"),e("div",{className:"jsx-2334105459 df flex-row justify-between"},e("div",{className:"jsx-2334105459"},n("No winner"),e(t.default,(0,s.default)({},d,{percentVote:"63.4%"}))),e("div",{className:"jsx-2334105459"},n("Winner"),e(t.default,(0,s.default)({},d,{callStatus:a.CALL_STATUSES.WINNER,percentVote:"63.4%"}))),e("div",{className:"jsx-2334105459"},n("Runoff"),e(t.default,(0,s.default)({},d,{callStatus:a.CALL_STATUSES.RUNOFF,percentVote:"63.4%"}))),e("div",{className:"jsx-2334105459"},n("Non-Partisan Primary Advance"),e(t.default,(0,s.default)({},d,{callStatus:a.CALL_STATUSES.ADVANCE,percentVote:"63.4%"}))))),e("div",{className:"jsx-2334105459 divider"}),e("div",{className:"jsx-2334105459 mv2"},r("Headshot  + percent + incumbent"),e("div",{className:"jsx-2334105459 df flex-row justify-between"},e("div",{className:"jsx-2334105459"},n("No winner"),e(t.default,(0,s.default)({},d,{isIncumbent:!0,percentVote:"63.4%"}))),e("div",{className:"jsx-2334105459"},n("Winner"),e(t.default,(0,s.default)({},d,{callStatus:a.CALL_STATUSES.WINNER,isIncumbent:!0,percentVote:"63.4%"}))),e("div",{className:"jsx-2334105459"},n("Runoff"),e(t.default,(0,s.default)({},d,{callStatus:a.CALL_STATUSES.RUNOFF,isIncumbent:!0,percentVote:"63.4%"}))),e("div",{className:"jsx-2334105459"},n("Non-Partisan Primary Advance"),e(t.default,(0,s.default)({},d,{callStatus:a.CALL_STATUSES.ADVANCE,isIncumbent:!0,percentVote:"63.4%"}))))),e("div",{className:"jsx-2334105459 divider"}),e("div",{className:"jsx-2334105459 mv2"},r("Headshot + percent + votes"),e("div",{className:"jsx-2334105459 df flex-row justify-between"},e("div",{className:"jsx-2334105459"},n("No winner"),e(t.default,(0,s.default)({},d,{percentVote:"63.4%",vote:"1,202,942"}))),e("div",{className:"jsx-2334105459"},n("Winner"),e(t.default,(0,s.default)({},d,{callStatus:a.CALL_STATUSES.WINNER,percentVote:"63.4%",vote:"1,202,942"}))),e("div",{className:"jsx-2334105459"},n("Runoff"),e(t.default,(0,s.default)({},d,{callStatus:a.CALL_STATUSES.RUNOFF,percentVote:"63.4%",vote:"1,202,942"}))),e("div",{className:"jsx-2334105459"},n("Non-Partisan Primary Advance"),e(t.default,(0,s.default)({},d,{callStatus:a.CALL_STATUSES.ADVANCE,percentVote:"63.4%",vote:"1,202,942"}))))),e("div",{className:"jsx-2334105459 divider"}),e("div",{className:"jsx-2334105459 mv2"},r("Headshot + percent + votes + incumbent"),e("div",{className:"jsx-2334105459 df flex-row justify-between"},e("div",{className:"jsx-2334105459"},n("No Winner"),e(t.default,(0,s.default)({},d,{isIncumbent:!0,percentVote:"63.4%",vote:"1,202,942"}))),e("div",{className:"jsx-2334105459"},n("Winner"),e(t.default,(0,s.default)({},d,{callStatus:a.CALL_STATUSES.WINNER,isIncumbent:!0,percentVote:"63.4%",vote:"1,202,942"}))),e("div",{className:"jsx-2334105459"},n("Runoff"),e(t.default,(0,s.default)({},d,{callStatus:a.CALL_STATUSES.RUNOFF,isIncumbent:!0,percentVote:"63.4%",vote:"1,202,942"}))),e("div",{className:"jsx-2334105459"},n("Non-Partisan Primary Advance"),e(t.default,(0,s.default)({},d,{callStatus:a.CALL_STATUSES.ADVANCE,isIncumbent:!0,percentVote:"63.4%",vote:"1,202,942"}))))),e("div",{className:"jsx-2334105459 divider"}),e("div",{className:"jsx-2334105459 mv2"},r("Results header"),e("div",{className:"jsx-2334105459 df flex-row justify-between"},e("div",{className:"jsx-2334105459"},n("Winner"),e(t.default,(0,s.default)({},d,{callStatus:a.CALL_STATUSES.PROJECTED_WINNER,percentVote:"63.4%",vote:"1,202,942"}))),e("div",{className:"jsx-2334105459"},n("Winner + incumbent"),e(t.default,(0,s.default)({},d,{callStatus:a.CALL_STATUSES.PROJECTED_WINNER,isIncumbent:!0,percentVote:"63.4%",vote:"1,202,942"}))),e("div",{className:"jsx-2334105459"},n("Winner + gain"),e(t.default,(0,s.default)({},d,{callStatus:a.CALL_STATUSES.PROJECTED_WINNER,isGain:!0,percentVote:"63.4%",vote:"1,202,942"}))))),e("div",{className:"jsx-2334105459 divider"})),b=()=>e(o.Fragment,null,e(f(),{id:"2334105459"},[".divider.jsx-2334105459{border:1px solid #999;}"]),e("div",{className:"jsx-2334105459 divider"}),e("div",{className:"jsx-2334105459 mv2"},r("No Headshot"),e("div",{className:"jsx-2334105459 df flex-row justify-between"},e("div",{className:"jsx-2334105459"},n("No Winner"),e(t.default,c)),e("div",{className:"jsx-2334105459"},n("Winner"),e(t.default,(0,s.default)({},c,{callStatus:a.CALL_STATUSES.WINNER}))),e("div",{className:"jsx-2334105459"},n("Runoff - 1 candidate"),e(t.default,(0,s.default)({},c,{callStatus:a.CALL_STATUSES.RUNOFF}))),e("div",{className:"jsx-2334105459"},n("Non-Partisan Primary Advance"),e(t.default,(0,s.default)({},c,{callStatus:a.CALL_STATUSES.ADVANCE}))))),e("div",{className:"jsx-2334105459 divider"}),e("div",{className:"jsx-2334105459 mv2"},r("No Headshot + Incumbent"),e("div",{className:"jsx-2334105459 df flex-row justify-between"},e("div",{className:"jsx-2334105459"},n("No Winner"),e(t.default,(0,s.default)({},c,{isIncumbent:!0}))),e("div",{className:"jsx-2334105459"},n("Winner"),e(t.default,(0,s.default)({},c,{callStatus:a.CALL_STATUSES.WINNER,isIncumbent:!0}))),e("div",{className:"jsx-2334105459"},n("Runoff - 1 candidate"),e(t.default,(0,s.default)({},c,{callStatus:a.CALL_STATUSES.RUNOFF,isIncumbent:!0}))),e("div",{className:"jsx-2334105459"},n("Non-Partisan Primary Advance"),e(t.default,(0,s.default)({},c,{callStatus:a.CALL_STATUSES.ADVANCE,isIncumbent:!0}))))),e("div",{className:"jsx-2334105459 divider"}),e("div",{className:"jsx-2334105459 mv2"},r("Results Header"),e("div",{style:{width:"40%"},className:"jsx-2334105459 df flex-row justify-between"},e("div",{className:"jsx-2334105459"},n("Winner"),e(t.default,(0,s.default)({},c,{callStatus:a.CALL_STATUSES.PROJECTED_WINNER}))),e("div",{className:"jsx-2334105459"},n("Winner + Incumbent"),e(t.default,(0,s.default)({},c,{callStatus:a.CALL_STATUSES.PROJECTED_WINNER,isIncumbent:!0}))))),e("div",{className:"jsx-2334105459 divider"})),L=["CandidateCard","CandidateCardWithHeadshot","CandidateCardWithNoHeadshot"]},"./node_modules/classnames/index.js":(j,p)=>{var i,s;/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(){"use strict";var A={}.hasOwnProperty,C="[native code]";function f(){for(var o=[],t=0;t<arguments.length;t++){var a=arguments[t];if(a){var S=typeof a;if(S==="string"||S==="number")o.push(a);else if(Array.isArray(a)){if(a.length){var e=f.apply(null,a);e&&o.push(e)}}else if(S==="object"){if(a.toString!==Object.prototype.toString&&!a.toString.toString().includes("[native code]")){o.push(a.toString());continue}for(var v in a)A.call(a,v)&&a[v]&&o.push(v)}}}return o.join(" ")}j.exports?(f.default=f,j.exports=f):(i=[],s=function(){return f}.apply(p,i),s!==void 0&&(j.exports=s))})()}}]);
