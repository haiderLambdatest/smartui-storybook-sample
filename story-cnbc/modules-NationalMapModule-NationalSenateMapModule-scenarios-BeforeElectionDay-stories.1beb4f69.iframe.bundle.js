(globalThis.webpackChunkfirecracker=globalThis.webpackChunkfirecracker||[]).push([[1863],{"./components/modules/NationalMapModule/NationalSenateMapModule/scenarios/BeforeElectionDay.stories.js":(m,x,o)=>{"use strict";o.r(x),o.d(x,{BeforeElectionDay:()=>t,__namedExportsOrder:()=>d,default:()=>p});var c=o("./node_modules/@babel/runtime/helpers/esm/extends.js"),i=o("./node_modules/next/dist/compiled/react/index.js"),a=o("./components/modules/NationalMapModule/NationalSenateMapModule/NationalSenateMapModule.js"),l=o("./data/topojson/states-10m.json"),s=o("./components/modules/NationalMapModule/NationalSenateMapModule/scenarios/mock.json"),b=i.createElement;const p={title:"Features/National Map/Senate/Before Election Day",component:a.default},t=()=>b(a.default,(0,c.default)({},s.beforeElectionDay.historical,{topojson:l}));t.displayName="BeforeElectionDay";const d=["BeforeElectionDay"]},"./node_modules/lodash.snakecase/index.js":(m,x,o)=>{var c=1/0,i="[object Symbol]",a=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,l=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,s="\\ud800-\\udfff",b="\\u0300-\\u036f\\ufe20-\\ufe23",p="\\u20d0-\\u20f0",t="\\u2700-\\u27bf",d="a-z\\xdf-\\xf6\\xf8-\\xff",B="\\xac\\xb1\\xd7\\xf7",W="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",k="\\u2000-\\u206f",z=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",g="A-Z\\xc0-\\xd6\\xd8-\\xde",Z="\\ufe0e\\ufe0f",M=B+W+k+z,E="['\u2019]",O="["+M+"]",j="["+b+p+"]",_="\\d+",K="["+t+"]",A="["+d+"]",R="[^"+s+M+_+t+d+g+"]",F="\\ud83c[\\udffb-\\udfff]",G="(?:"+j+"|"+F+")",J="[^"+s+"]",S="(?:\\ud83c[\\udde6-\\uddff]){2}",y="[\\ud800-\\udbff][\\udc00-\\udfff]",n="["+g+"]",Y="\\u200d",D="(?:"+A+"|"+R+")",w="(?:"+n+"|"+R+")",h="(?:"+E+"(?:d|ll|m|re|s|t|ve))?",C="(?:"+E+"(?:D|LL|M|RE|S|T|VE))?",U=G+"?",L="["+Z+"]?",H="(?:"+Y+"(?:"+[J,S,y].join("|")+")"+L+U+")*",V=L+U+H,$="(?:"+[K,S,y].join("|")+")"+V,X=RegExp(E,"g"),Q=RegExp(j,"g"),q=RegExp([n+"?"+A+"+"+h+"(?="+[O,n,"$"].join("|")+")",w+"+"+C+"(?="+[O,n+D,"$"].join("|")+")",n+"?"+D+"+"+h,n+"+"+C,_,$].join("|"),"g"),ee=/[a-z][A-Z]|[A-Z]{2,}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,ue={\u00C0:"A",\u00C1:"A",\u00C2:"A",\u00C3:"A",\u00C4:"A",\u00C5:"A",\u00E0:"a",\u00E1:"a",\u00E2:"a",\u00E3:"a",\u00E4:"a",\u00E5:"a",\u00C7:"C",\u00E7:"c",\u00D0:"D",\u00F0:"d",\u00C8:"E",\u00C9:"E",\u00CA:"E",\u00CB:"E",\u00E8:"e",\u00E9:"e",\u00EA:"e",\u00EB:"e",\u00CC:"I",\u00CD:"I",\u00CE:"I",\u00CF:"I",\u00EC:"i",\u00ED:"i",\u00EE:"i",\u00EF:"i",\u00D1:"N",\u00F1:"n",\u00D2:"O",\u00D3:"O",\u00D4:"O",\u00D5:"O",\u00D6:"O",\u00D8:"O",\u00F2:"o",\u00F3:"o",\u00F4:"o",\u00F5:"o",\u00F6:"o",\u00F8:"o",\u00D9:"U",\u00DA:"U",\u00DB:"U",\u00DC:"U",\u00F9:"u",\u00FA:"u",\u00FB:"u",\u00FC:"u",\u00DD:"Y",\u00FD:"y",\u00FF:"y",\u00C6:"Ae",\u00E6:"ae",\u00DE:"Th",\u00FE:"th",\u00DF:"ss",\u0100:"A",\u0102:"A",\u0104:"A",\u0101:"a",\u0103:"a",\u0105:"a",\u0106:"C",\u0108:"C",\u010A:"C",\u010C:"C",\u0107:"c",\u0109:"c",\u010B:"c",\u010D:"c",\u010E:"D",\u0110:"D",\u010F:"d",\u0111:"d",\u0112:"E",\u0114:"E",\u0116:"E",\u0118:"E",\u011A:"E",\u0113:"e",\u0115:"e",\u0117:"e",\u0119:"e",\u011B:"e",\u011C:"G",\u011E:"G",\u0120:"G",\u0122:"G",\u011D:"g",\u011F:"g",\u0121:"g",\u0123:"g",\u0124:"H",\u0126:"H",\u0125:"h",\u0127:"h",\u0128:"I",\u012A:"I",\u012C:"I",\u012E:"I",\u0130:"I",\u0129:"i",\u012B:"i",\u012D:"i",\u012F:"i",\u0131:"i",\u0134:"J",\u0135:"j",\u0136:"K",\u0137:"k",\u0138:"k",\u0139:"L",\u013B:"L",\u013D:"L",\u013F:"L",\u0141:"L",\u013A:"l",\u013C:"l",\u013E:"l",\u0140:"l",\u0142:"l",\u0143:"N",\u0145:"N",\u0147:"N",\u014A:"N",\u0144:"n",\u0146:"n",\u0148:"n",\u014B:"n",\u014C:"O",\u014E:"O",\u0150:"O",\u014D:"o",\u014F:"o",\u0151:"o",\u0154:"R",\u0156:"R",\u0158:"R",\u0155:"r",\u0157:"r",\u0159:"r",\u015A:"S",\u015C:"S",\u015E:"S",\u0160:"S",\u015B:"s",\u015D:"s",\u015F:"s",\u0161:"s",\u0162:"T",\u0164:"T",\u0166:"T",\u0163:"t",\u0165:"t",\u0167:"t",\u0168:"U",\u016A:"U",\u016C:"U",\u016E:"U",\u0170:"U",\u0172:"U",\u0169:"u",\u016B:"u",\u016D:"u",\u016F:"u",\u0171:"u",\u0173:"u",\u0174:"W",\u0175:"w",\u0176:"Y",\u0177:"y",\u0178:"Y",\u0179:"Z",\u017B:"Z",\u017D:"Z",\u017A:"z",\u017C:"z",\u017E:"z",\u0132:"IJ",\u0133:"ij",\u0152:"Oe",\u0153:"oe",\u0149:"'n",\u017F:"ss"},oe=typeof o.g=="object"&&o.g&&o.g.Object===Object&&o.g,re=typeof self=="object"&&self&&self.Object===Object&&self,ne=oe||re||Function("return this")();function te(e,u,r,Oe){var f=-1,P=e?e.length:0;for(Oe&&P&&(r=e[++f]);++f<P;)r=u(r,e[f],f,e);return r}function ae(e){return e.match(a)||[]}function se(e){return function(u){return e?.[u]}}var de=se(ue);function fe(e){return ee.test(e)}function xe(e){return e.match(q)||[]}var ce=Object.prototype,ie=ce.toString,v=ne.Symbol,N=v?v.prototype:void 0,T=N?N.toString:void 0;function le(e){if(typeof e=="string")return e;if(Ee(e))return T?T.call(e):"";var u=e+"";return u=="0"&&1/e==-c?"-0":u}function be(e){return function(u){return te(Me(me(u).replace(X,"")),e,"")}}function pe(e){return!!e&&typeof e=="object"}function Ee(e){return typeof e=="symbol"||pe(e)&&ie.call(e)==i}function I(e){return e==null?"":le(e)}function me(e){return e=I(e),e&&e.replace(l,de).replace(Q,"")}var ge=be(function(e,u,r){return e+(r?"_":"")+u.toLowerCase()});function Me(e,u,r){return e=I(e),u=r?void 0:u,u===void 0?fe(e)?xe(e):ae(e):e.match(u)||[]}m.exports=ge}}]);
