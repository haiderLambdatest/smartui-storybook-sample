"use strict";(globalThis.webpackChunkfirecracker=globalThis.webpackChunkfirecracker||[]).push([[8316],{"./components/BOPBar/BOPBar.stories.js":(g,n,e)=>{e.r(n),e.d(n,{BOPBars:()=>a,Legend:()=>o,Marker:()=>r,__namedExportsOrder:()=>m,default:()=>v});var i=e("./node_modules/next/dist/compiled/react/index.js"),s=e("./components/BOPBar/index.js"),p=e("./components/BOPBar/LegendItem.js"),d=e("./components/BOPBar/BarMarker.js");const u=JSON.parse('{"G":{"overview":{"demTotalSeats":22,"repTotalSeats":28,"uncalledRaces":36,"demGovernorSeatsAvailable":16,"demGovernorSeatsUnavailable":6,"repGovernorSeatsAvailable":20,"repGovernorSeatsUnavailable":8},"balance":{"maxValue":50,"divider":{"label":"25","value":25,"percent":"50%","hasWhiteBackground":true},"values":[{"color":"#D3E6F1","position":"left","value":6,"percent":"12%"},{"color":"#009AF4","position":"left","value":16,"percent":"32%"},{"color":"#D42F37","position":"right","value":20,"percent":"40%"},{"color":"#F5D1D2","position":"right","value":8,"percent":"16%"}]}},"S":{"overview":{"demTotalSeats":50,"repTotalSeats":50,"uncalledRaces":34,"demSenateSeatsAvailable":14,"demSenateSeatsUnavailable":36,"repSenateSeatsAvailable":20,"repSenateSeatsUnavailable":30},"balance":{"maxValue":100,"divider":{"label":"51 needed for control","value":50,"percent":"50%","hasWhiteBackground":true},"values":[{"color":"#D3E6F1","position":"left","value":36,"percent":"36%"},{"color":"#009AF4","position":"left","value":14,"percent":"14%"},{"color":"#D42F37","position":"right","value":20,"percent":"20%"},{"color":"#F5D1D2","position":"right","value":30,"percent":"30%"}]}},"H":{"overview":{"demTotalSeats":221,"repTotalSeats":209,"undecidedSeats":5},"balance":{"maxValue":435,"divider":{"label":"218 needed for control","value":50,"percent":"50%","hasWhiteBackground":true},"values":[{"color":"#009AF4","position":"left","value":221,"percent":"50.8%"},{"color":"#D42F37","position":"right","value":209,"percent":"48%"}]}}}');var l=i.createElement;const v={component:s.default,title:"Features/Hub/BOP bars"},a=({officeCode:t})=>{const{balance:B}=u[t];return l(s.default,{officeCode:t,balance:B})};a.displayName="BOPBars",a.argTypes={officeCode:{options:{governor:"G",senate:"S",house:"H"},control:{type:"select"}}},a.args={officeCode:"G"};const o=t=>l(p.default,t);o.displayName="Legend",o.argTypes={position:{options:["left","right"],control:{type:"select"}}},o.args={numberOfSeats:10,position:"left",text:"seats not up for election",textM:"seats not up"};const r=t=>l(d.default,t);r.displayName="Marker";const c={demBlue:"#009AF4",gopRed:"#D42F37"};r.argTypes={color:{options:c,control:{type:"select"}},party:{options:["dem","gop"],control:{type:"select"}},position:{options:["left","right"],control:{type:"select"}}},r.args={color:c.demBlue,numberOfSeats:10,party:"dem",position:"left",text:"seats up",textM:"seats up for election"};const m=["BOPBars","Legend","Marker"]}}]);
