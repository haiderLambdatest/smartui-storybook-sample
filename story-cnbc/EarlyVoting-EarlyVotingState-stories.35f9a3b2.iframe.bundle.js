"use strict";(globalThis.webpackChunkfirecracker=globalThis.webpackChunkfirecracker||[]).push([[2617],{"./components/EarlyVoting/EarlyVotingState.stories.js":(y,t,e)=>{e.r(t),e.d(t,{State:()=>n,__namedExportsOrder:()=>p,default:()=>v});var o=e("./node_modules/@babel/runtime/helpers/esm/extends.js"),l=e("./node_modules/next/dist/compiled/react/index.js"),a=e("./components/EarlyVoting/index.js");const s=JSON.parse('{"ballotSentData":[{"name":"Age","values":[{"description":"18-29","value":8},{"description":"30-39","value":6},{"description":"40-49","value":6},{"description":"50-64","value":17},{"description":"65 or over","value":63},{"description":"Other","value":0}]},{"name":"Gender","values":[{"description":"Women","value":59},{"description":"Men","value":41},{"description":"Unknown","value":0}]},{"name":"Party registration","values":[{"description":"Dem","value":61},{"description":"Rep","value":30},{"description":"Other","value":9}]}],"ballotReturnedData":[{"name":"Age","values":[{"description":"18-29","value":4},{"description":"30-39","value":5},{"description":"40-49","value":9},{"description":"50-64","value":31},{"description":"65 or over","value":51},{"description":"Other","value":0}]},{"name":"Gender","values":[{"description":"Women","value":53},{"description":"Men","value":47},{"description":"Unknown","value":0}]},{"name":"Party registration","values":[{"description":"Dem","value":55},{"description":"Rep","value":39},{"description":"Other","value":6}]},{"name":"Vote type","values":[{"description":"Mail-in","value":8},{"description":"In-person","value":92}]}],"comparison":{"2022":{"absentee":23653,"ballotRequests":224576,"early":265377,"earlyAbsentee":289030,"ballotRequestsPercentChange":0,"earlyAbsenteePercentChange":0}},"lastUpdated":"2022-10-20"}');var r=e("./server/v2/format/formatEarlyVoteData.js"),i=l.createElement;const{ballotSentData:d,ballotReturnedData:c,comparison:u}=(0,r.default)({earlyVoteData:s,useAllowlist:!1,electionSeason:"2022",stateAbbr:"GA"}),v={component:a.default,title:"Features/Early Voting/State",argTypes:{headline:{control:{type:"text"}},dek:{control:{type:"text"}}},args:{headline:"Early voting in New York",dek:"Requesting ballots can indicate a voter intends to vote by mail or early in-person if available. In the 2016 election, 48% of votes were cast early, 46% by mail. 2020 is likely to bring a higher percentage of mail-in voting across a number of states and nationally.",hideEarlyVotingModule:!1}},n=m=>i(a.default,(0,o.default)({},m,{ballotsSentData:d,ballotsReturnedData:c,comparisonData:u,electionSeason:"2022",lastUpdated:"2020-10-01"}));n.displayName="State";const p=["State"]}}]);
