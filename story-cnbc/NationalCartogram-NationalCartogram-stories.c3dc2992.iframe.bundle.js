(globalThis.webpackChunkfirecracker=globalThis.webpackChunkfirecracker||[]).push([[7276],{"./components/NationalCartogram/NationalCartogram.stories.js":(l,b,u)=>{"use strict";u.r(b),u.d(b,{AgeBreakdown:()=>i,GenderBreakdown:()=>E,USCartogram:()=>s,VoteTypeBreakdown:()=>m,__namedExportsOrder:()=>y,default:()=>r});var x=u("./node_modules/next/dist/compiled/react/index.js"),d=u("./components/NationalCartogram/NationalCartogram.js"),g=u("./components/NationalCartogram/data/mockUS.json"),f=u("./server/v2/format/formatEarlyVoteData.js"),a=u("./server/v2/config/earlyVotingOrder.js"),n=x.createElement;const r={component:d.default,title:"Features/Early Voting/Cartogram",parameters:{controls:{include:["Enable DC","type"]}}},{states:o}=(0,f.default)({earlyVoteData:{data:g},stateAbbr:"US",electionSeason:"2022",useAllowlist:!1}),s=({showDC:v,type:A})=>n(d.default,{activeFilter:a.default.indexOf(A),enableDC:v,nationalData:o});s.displayName="USCartogram",s.argTypes={showDC:{name:"Enable DC",control:"boolean"},type:{options:["vote type","age","party registration","gender"],control:{type:"select"}}},s.args={showDC:!0,type:"party registration"};const i=()=>n(d.default,{activeFilter:a.default.indexOf("age"),nationalData:o});i.displayName="AgeBreakdown";const m=()=>n(d.default,{activeFilter:a.default.indexOf("vote type"),nationalData:o});m.displayName="VoteTypeBreakdown";const E=()=>n(d.default,{activeFilter:a.default.indexOf("gender"),nationalData:o});E.displayName="GenderBreakdown";const y=["USCartogram","AgeBreakdown","VoteTypeBreakdown","GenderBreakdown"]},"./node_modules/classnames/index.js":(l,b)=>{var u,x;/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(){"use strict";var d={}.hasOwnProperty,g="[native code]";function f(){for(var a=[],n=0;n<arguments.length;n++){var r=arguments[n];if(r){var o=typeof r;if(o==="string"||o==="number")a.push(r);else if(Array.isArray(r)){if(r.length){var s=f.apply(null,r);s&&a.push(s)}}else if(o==="object"){if(r.toString!==Object.prototype.toString&&!r.toString.toString().includes("[native code]")){a.push(r.toString());continue}for(var i in r)d.call(r,i)&&r[i]&&a.push(i)}}}return a.join(" ")}l.exports?(f.default=f,l.exports=f):(u=[],x=function(){return f}.apply(b,u),x!==void 0&&(l.exports=x))})()},"./node_modules/lodash.kebabcase/index.js":(l,b,u)=>{var x=1/0,d="[object Symbol]",g=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,f=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,a="\\ud800-\\udfff",n="\\u0300-\\u036f\\ufe20-\\ufe23",r="\\u20d0-\\u20f0",o="\\u2700-\\u27bf",s="a-z\\xdf-\\xf6\\xf8-\\xff",i="\\xac\\xb1\\xd7\\xf7",m="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",E="\\u2000-\\u206f",y=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",v="A-Z\\xc0-\\xd6\\xd8-\\xde",A="\\ufe0e\\ufe0f",_=i+m+E+y,C="['\u2019]",j="["+_+"]",S="["+n+r+"]",D="\\d+",F="["+o+"]",U="["+s+"]",h="[^"+a+_+D+o+s+v+"]",z="\\ud83c[\\udffb-\\udfff]",Z="(?:"+S+"|"+z+")",G="[^"+a+"]",R="(?:\\ud83c[\\udde6-\\uddff]){2}",L="[\\ud800-\\udbff][\\udc00-\\udfff]",p="["+v+"]",K="\\u200d",T="(?:"+U+"|"+h+")",Y="(?:"+p+"|"+h+")",B="(?:"+C+"(?:d|ll|m|re|s|t|ve))?",N="(?:"+C+"(?:D|LL|M|RE|S|T|VE))?",M=Z+"?",I="["+A+"]?",J="(?:"+K+"(?:"+[G,R,L].join("|")+")"+I+M+")*",H=I+M+J,$="(?:"+[F,R,L].join("|")+")"+H,X=RegExp(C,"g"),Q=RegExp(S,"g"),q=RegExp([p+"?"+U+"+"+B+"(?="+[j,p,"$"].join("|")+")",Y+"+"+N+"(?="+[j,p+T,"$"].join("|")+")",p+"?"+T+"+"+B,p+"+"+N,D,$].join("|"),"g"),ee=/[a-z][A-Z]|[A-Z]{2,}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,re={\u00C0:"A",\u00C1:"A",\u00C2:"A",\u00C3:"A",\u00C4:"A",\u00C5:"A",\u00E0:"a",\u00E1:"a",\u00E2:"a",\u00E3:"a",\u00E4:"a",\u00E5:"a",\u00C7:"C",\u00E7:"c",\u00D0:"D",\u00F0:"d",\u00C8:"E",\u00C9:"E",\u00CA:"E",\u00CB:"E",\u00E8:"e",\u00E9:"e",\u00EA:"e",\u00EB:"e",\u00CC:"I",\u00CD:"I",\u00CE:"I",\u00CF:"I",\u00EC:"i",\u00ED:"i",\u00EE:"i",\u00EF:"i",\u00D1:"N",\u00F1:"n",\u00D2:"O",\u00D3:"O",\u00D4:"O",\u00D5:"O",\u00D6:"O",\u00D8:"O",\u00F2:"o",\u00F3:"o",\u00F4:"o",\u00F5:"o",\u00F6:"o",\u00F8:"o",\u00D9:"U",\u00DA:"U",\u00DB:"U",\u00DC:"U",\u00F9:"u",\u00FA:"u",\u00FB:"u",\u00FC:"u",\u00DD:"Y",\u00FD:"y",\u00FF:"y",\u00C6:"Ae",\u00E6:"ae",\u00DE:"Th",\u00FE:"th",\u00DF:"ss",\u0100:"A",\u0102:"A",\u0104:"A",\u0101:"a",\u0103:"a",\u0105:"a",\u0106:"C",\u0108:"C",\u010A:"C",\u010C:"C",\u0107:"c",\u0109:"c",\u010B:"c",\u010D:"c",\u010E:"D",\u0110:"D",\u010F:"d",\u0111:"d",\u0112:"E",\u0114:"E",\u0116:"E",\u0118:"E",\u011A:"E",\u0113:"e",\u0115:"e",\u0117:"e",\u0119:"e",\u011B:"e",\u011C:"G",\u011E:"G",\u0120:"G",\u0122:"G",\u011D:"g",\u011F:"g",\u0121:"g",\u0123:"g",\u0124:"H",\u0126:"H",\u0125:"h",\u0127:"h",\u0128:"I",\u012A:"I",\u012C:"I",\u012E:"I",\u0130:"I",\u0129:"i",\u012B:"i",\u012D:"i",\u012F:"i",\u0131:"i",\u0134:"J",\u0135:"j",\u0136:"K",\u0137:"k",\u0138:"k",\u0139:"L",\u013B:"L",\u013D:"L",\u013F:"L",\u0141:"L",\u013A:"l",\u013C:"l",\u013E:"l",\u0140:"l",\u0142:"l",\u0143:"N",\u0145:"N",\u0147:"N",\u014A:"N",\u0144:"n",\u0146:"n",\u0148:"n",\u014B:"n",\u014C:"O",\u014E:"O",\u0150:"O",\u014D:"o",\u014F:"o",\u0151:"o",\u0154:"R",\u0156:"R",\u0158:"R",\u0155:"r",\u0157:"r",\u0159:"r",\u015A:"S",\u015C:"S",\u015E:"S",\u0160:"S",\u015B:"s",\u015D:"s",\u015F:"s",\u0161:"s",\u0162:"T",\u0164:"T",\u0166:"T",\u0163:"t",\u0165:"t",\u0167:"t",\u0168:"U",\u016A:"U",\u016C:"U",\u016E:"U",\u0170:"U",\u0172:"U",\u0169:"u",\u016B:"u",\u016D:"u",\u016F:"u",\u0171:"u",\u0173:"u",\u0174:"W",\u0175:"w",\u0176:"Y",\u0177:"y",\u0178:"Y",\u0179:"Z",\u017B:"Z",\u017D:"Z",\u017A:"z",\u017C:"z",\u017E:"z",\u0132:"IJ",\u0133:"ij",\u0152:"Oe",\u0153:"oe",\u0149:"'n",\u017F:"ss"},ue=typeof u.g=="object"&&u.g&&u.g.Object===Object&&u.g,te=typeof self=="object"&&self&&self.Object===Object&&self,ae=ue||te||Function("return this")();function oe(e,t,c,Oe){var O=-1,V=e?e.length:0;for(Oe&&V&&(c=e[++O]);++O<V;)c=t(c,e[O],O,e);return c}function ne(e){return e.match(g)||[]}function se(e){return function(t){return e?.[t]}}var de=se(re);function fe(e){return ee.test(e)}function ie(e){return e.match(q)||[]}var ce=Object.prototype,xe=ce.toString,P=ae.Symbol,k=P?P.prototype:void 0,w=k?k.toString:void 0;function le(e){if(typeof e=="string")return e;if(ge(e))return w?w.call(e):"";var t=e+"";return t=="0"&&1/e==-x?"-0":t}function pe(e){return function(t){return oe(ve(me(t).replace(X,"")),e,"")}}function be(e){return!!e&&typeof e=="object"}function ge(e){return typeof e=="symbol"||be(e)&&xe.call(e)==d}function W(e){return e==null?"":le(e)}function me(e){return e=W(e),e&&e.replace(f,de).replace(Q,"")}var Ee=pe(function(e,t,c){return e+(c?"-":"")+t.toLowerCase()});function ve(e,t,c){return e=W(e),t=c?void 0:t,t===void 0?fe(e)?ie(e):ne(e):e.match(t)||[]}l.exports=Ee}}]);
