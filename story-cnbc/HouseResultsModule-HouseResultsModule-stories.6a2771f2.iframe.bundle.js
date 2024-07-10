(globalThis.webpackChunkfirecracker=globalThis.webpackChunkfirecracker||[]).push([[6725],{"./components/HouseResultsModule/HouseResultsModule.stories.js":(v,l,e)=>{"use strict";e.r(l),e.d(l,{House2022:()=>w,__namedExportsOrder:()=>k,default:()=>F});var i=e("./node_modules/@babel/runtime/helpers/esm/extends.js"),r=e("./node_modules/next/dist/compiled/react/index.js"),d=e("./node_modules/styled-jsx/style.js"),a=e.n(d),o=e("./node_modules/next/amp.js"),t=e("./helpers/pluralize.js"),u=e("./components/Module.js"),s=r.createElement;const f=({partyAbbreviation:c,numberOfWins:x,partyColor:m})=>{const W=x>0;return s(r.Fragment,null,s(a(),{id:"75230855",dynamic:[m]},[".call.__jsx-style-dynamic-selector{-webkit-flex:1 1 0px;-ms-flex:1 1 0px;flex:1 1 0px;padding:4px 0;position:relative;}",`.party.__jsx-style-dynamic-selector{background:${m};}`,".check.__jsx-style-dynamic-selector{position:absolute;top:0;left:0;background:#ffd60c;height:13px;padding:0 4px;}","@media screen and (min-width:758px){.check.__jsx-style-dynamic-selector{position:relative;padding:0 9px;height:29px;}.call.__jsx-style-dynamic-selector{height:29px;}}"]),W?s("div",{className:a().dynamic([["75230855",[m]]])+" call party df items-center mh1"},s("div",{className:a().dynamic([["75230855",[m]]])+" df dn-m items-center check"},s("svg",{width:"11",height:"7",viewBox:"0 0 16 13",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:a().dynamic([["75230855",[m]]])},s("path",{d:"M0.999908 5.62666L6.03162 10.6482L14.771 1.92651",stroke:"#2A2A2A",strokeWidth:"2.81227",className:a().dynamic([["75230855",[m]]])}))),s("div",{className:a().dynamic([["75230855",[m]]])+" dn df-m items-center check"},s("svg",{width:"16",height:"13",viewBox:"0 0 16 13",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:a().dynamic([["75230855",[m]]])},s("path",{d:"M0.999908 5.62666L6.03162 10.6482L14.771 1.92651",stroke:"#2A2A2A",strokeWidth:"2.81227",className:a().dynamic([["75230855",[m]]])}))),s("div",{className:a().dynamic([["75230855",[m]]])+" flex-grow-1 tc ttu white ph3 lh-none"},x," ",c," ",(0,t.default)("seat",x))):s("div",{className:a().dynamic([["75230855",[m]]])+" call mh1"}))};var g=e("./node_modules/classnames/index.js"),U=e.n(g),R=r.createElement;const D=({numberOfUncalled:c,numberOfRunoffs:x})=>{const m=c>0||x>0,W=c+x,L=c?`${W} uncalled ${(0,t.default)("seat",W)}`:`${x} runoff ${(0,t.default)("seat",x)}`;return R(r.Fragment,null,R(a(),{id:"3726796631"},[".call.jsx-3726796631{-webkit-flex:1 1 0px;-ms-flex:1 1 0px;flex:1 1 0px;padding:4px 0;}",".uncalled.jsx-3726796631{background:#555;color:#fff;}",".runoff.jsx-3726796631{background-color:#ffd60c;color:black;}","@media screen and (min-width:758px){.call.jsx-3726796631{height:29px;}}"]),m?R("div",{className:"jsx-3726796631 "+(U()("call party df items-center mh1",{uncalled:c,runoff:!c&&x})||"")},R("div",{className:"jsx-3726796631 flex-grow-1 tc ttu"},L)):R("div",{className:"jsx-3726796631 call mh1"}))};var P=e("./node_modules/lodash.kebabcase/index.js"),_=e.n(P),y=r.createElement;const C=()=>y("span",{className:"dib mh1"},y("svg",{width:"5",height:"9",viewBox:"0 0 5 9",fill:"none",xmlns:"http://www.w3.org/2000/svg"},y("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M1.04137 -4.55199e-08L5 4.53127L1.09601 9L0.0546332 7.83009L2.93657 4.53127L1.46828 2.85059L-3.42264e-07 1.16991L1.04137 -4.55199e-08Z",fill:"#2A2A2A"})));C.displayName="Arrow";const T=C;var h=r.createElement;const K=({name:c,abbreviation:x})=>{const W=`/politics/2020-elections/${_()(c)}-house-results`;return h(r.Fragment,null,h(a(),{id:"4115365844"},[".label.jsx-4115365844{min-width:45px;}","@media screen and (min-width:758px){.label.jsx-4115365844{min-width:145px;}}"]),h("div",{className:"jsx-4115365844 label founders-cond truncate pr2 f5 "},h("div",{className:"jsx-4115365844 dn db-m"},h("a",{href:W,rel:"noopener",className:"jsx-4115365844 link gray-100"},c,h(T,null))),h("div",{className:"jsx-4115365844 db dn-m "},h("a",{href:W,rel:"noopener",className:"jsx-4115365844 link gray-100 db"},x,h(T,null)))))};var Q=e("./components/ToggleButton.js"),O=r.createElement;const N=({buttonText:c,hideModule:x,results:m=[],titleText:W,totalCollapsedItems:L})=>{const z=(0,o.useAmp)(),{0:I,1:q}=(0,r.useState)(!1);if(x)return null;const Z=I||z,ee=Z?m.length:L,ne=m.slice(0,ee),se=L<=0&&!Z,ae=L>=m.length;return O(r.Fragment,null,O(a(),{id:"3309496609"},[".results.jsx-3309496609{border-top:1px solid #cccccc;}",".row.jsx-3309496609{border-bottom:1px solid #ebebeb;}",".label.jsx-3309496609{width:155px;}",".full.jsx-3309496609{-webkit-flex:1 1 0;-ms-flex:1 1 0;flex:1 1 0;}"]),O(u.default,{testId:"senate-results__module"},!se&&O(r.Fragment,null,O("div",{className:"jsx-3309496609 founders-mono f3 mv2"},W),O("div",{className:"jsx-3309496609 results"},ne.map(re=>{const{abbreviation:te,name:$,numberOfDemWins:ue,numberOfRepWins:oe,numberOfUncalled:S,numberOfRunoffs:le}=re,V=[{partyAbbreviation:"dem",numberOfWins:ue,partyColor:"#0471e6"},{partyAbbreviation:"gop",numberOfWins:oe,partyColor:"#de3535"}].sort((E,G)=>G.numberOfWins-E.numberOfWins),Y=V.some(E=>E.numberOfWins>0);return O("div",{"data-testid":"house-results__row",key:`house-results__row__${$}`,className:"jsx-3309496609 row df pv1"},O(K,{name:$,abbreviation:te}),O("div",{className:"jsx-3309496609 df flex-grow-1 justify-between white founders-cond"},Y&&O(r.Fragment,null,V.map(E=>O(f,{numberOfWins:E.numberOfWins,partyAbbreviation:E.partyAbbreviation,partyColor:E.partyColor,key:`house-results__row__call__${E.partyAbbreviation}`})),O(D,{numberOfUncalled:S,numberOfRunoffs:le})),!Y&&O("div",{className:"jsx-3309496609 full tc ttu pv3 pv1-m mh1 bg-gray-20 black"},S," uncalled"," ",(0,t.default)("seat",S))))}))),!z&&!ae&&O(Q.default,{onClick:()=>q(!I),toggled:I,displayMoreText:`Show ${c}`,displayLessText:`Hide ${c}`})))},H=JSON.parse('{"general2020":{"buttonText":"Test button text","hideModule":false,"results":[{"abbreviation":"AK","name":"Alaska","numberOfDemWins":0,"numberOfRepWins":1,"numberOfUncalled":0,"numberOfRunoffs":0},{"abbreviation":"AL","name":"Alabama","numberOfDemWins":1,"numberOfRepWins":6,"numberOfUncalled":0,"numberOfRunoffs":0},{"abbreviation":"AR","name":"Arkansas","numberOfDemWins":0,"numberOfRepWins":4,"numberOfUncalled":0,"numberOfRunoffs":0},{"abbreviation":"AZ","name":"Arizona","numberOfDemWins":5,"numberOfRepWins":4,"numberOfUncalled":0,"numberOfRunoffs":0},{"abbreviation":"CA","name":"California","numberOfDemWins":42,"numberOfRepWins":9,"numberOfUncalled":2,"numberOfRunoffs":0},{"abbreviation":"CO","name":"Colorado","numberOfDemWins":4,"numberOfRepWins":3,"numberOfUncalled":0,"numberOfRunoffs":0},{"abbreviation":"CT","name":"Connecticut","numberOfDemWins":5,"numberOfRepWins":0,"numberOfUncalled":0,"numberOfRunoffs":0},{"abbreviation":"DE","name":"Delaware","numberOfDemWins":1,"numberOfRepWins":0,"numberOfUncalled":0,"numberOfRunoffs":0},{"abbreviation":"FL","name":"Florida","numberOfDemWins":11,"numberOfRepWins":16,"numberOfUncalled":0,"numberOfRunoffs":0},{"abbreviation":"GA","name":"Georgia","numberOfDemWins":6,"numberOfRepWins":8,"numberOfUncalled":0,"numberOfRunoffs":0},{"abbreviation":"HI","name":"Hawaii","numberOfDemWins":2,"numberOfRepWins":0,"numberOfUncalled":0,"numberOfRunoffs":0},{"abbreviation":"IA","name":"Iowa","numberOfDemWins":1,"numberOfRepWins":2,"numberOfUncalled":1,"numberOfRunoffs":0},{"abbreviation":"ID","name":"Idaho","numberOfDemWins":0,"numberOfRepWins":2,"numberOfUncalled":0,"numberOfRunoffs":0},{"abbreviation":"IL","name":"Illinois","numberOfDemWins":13,"numberOfRepWins":5,"numberOfUncalled":0,"numberOfRunoffs":0},{"abbreviation":"IN","name":"Indiana","numberOfDemWins":2,"numberOfRepWins":7,"numberOfUncalled":0,"numberOfRunoffs":0},{"abbreviation":"KS","name":"Kansas","numberOfDemWins":1,"numberOfRepWins":3,"numberOfUncalled":0,"numberOfRunoffs":0},{"abbreviation":"KY","name":"Kentucky","numberOfDemWins":1,"numberOfRepWins":5,"numberOfUncalled":0,"numberOfRunoffs":0},{"abbreviation":"LA","name":"Louisiana","numberOfDemWins":1,"numberOfRepWins":4,"numberOfUncalled":0,"numberOfRunoffs":1},{"abbreviation":"MA","name":"Massachusetts","numberOfDemWins":9,"numberOfRepWins":0,"numberOfUncalled":0,"numberOfRunoffs":0},{"abbreviation":"MD","name":"Maryland","numberOfDemWins":7,"numberOfRepWins":1,"numberOfUncalled":0,"numberOfRunoffs":0},{"abbreviation":"ME","name":"Maine","numberOfDemWins":2,"numberOfRepWins":0,"numberOfUncalled":0,"numberOfRunoffs":0},{"abbreviation":"MI","name":"Michigan","numberOfDemWins":7,"numberOfRepWins":7,"numberOfUncalled":0,"numberOfRunoffs":0},{"abbreviation":"MN","name":"Minnesota","numberOfDemWins":4,"numberOfRepWins":4,"numberOfUncalled":0,"numberOfRunoffs":0},{"abbreviation":"MO","name":"Missouri","numberOfDemWins":2,"numberOfRepWins":6,"numberOfUncalled":0,"numberOfRunoffs":0},{"abbreviation":"MS","name":"Mississippi","numberOfDemWins":1,"numberOfRepWins":3,"numberOfUncalled":0,"numberOfRunoffs":0},{"abbreviation":"MT","name":"Montana","numberOfDemWins":0,"numberOfRepWins":1,"numberOfUncalled":0,"numberOfRunoffs":0},{"abbreviation":"NC","name":"North Carolina","numberOfDemWins":5,"numberOfRepWins":8,"numberOfUncalled":0,"numberOfRunoffs":0},{"abbreviation":"ND","name":"North Dakota","numberOfDemWins":0,"numberOfRepWins":1,"numberOfUncalled":0,"numberOfRunoffs":0},{"abbreviation":"NE","name":"Nebraska","numberOfDemWins":0,"numberOfRepWins":3,"numberOfUncalled":0,"numberOfRunoffs":0},{"abbreviation":"NH","name":"New Hampshire","numberOfDemWins":2,"numberOfRepWins":0,"numberOfUncalled":0,"numberOfRunoffs":0},{"abbreviation":"NJ","name":"New Jersey","numberOfDemWins":10,"numberOfRepWins":2,"numberOfUncalled":0,"numberOfRunoffs":0},{"abbreviation":"NM","name":"New Mexico","numberOfDemWins":2,"numberOfRepWins":1,"numberOfUncalled":0,"numberOfRunoffs":0},{"abbreviation":"NV","name":"Nevada","numberOfDemWins":3,"numberOfRepWins":1,"numberOfUncalled":0,"numberOfRunoffs":0},{"abbreviation":"NY","name":"New York","numberOfDemWins":19,"numberOfRepWins":4,"numberOfUncalled":4,"numberOfRunoffs":0},{"abbreviation":"OH","name":"Ohio","numberOfDemWins":4,"numberOfRepWins":12,"numberOfUncalled":0,"numberOfRunoffs":0},{"abbreviation":"OK","name":"Oklahoma","numberOfDemWins":0,"numberOfRepWins":5,"numberOfUncalled":0,"numberOfRunoffs":0},{"abbreviation":"OR","name":"Oregon","numberOfDemWins":4,"numberOfRepWins":1,"numberOfUncalled":0,"numberOfRunoffs":0},{"abbreviation":"PA","name":"Pennsylvania","numberOfDemWins":9,"numberOfRepWins":9,"numberOfUncalled":0,"numberOfRunoffs":0},{"abbreviation":"RI","name":"Rhode Island","numberOfDemWins":2,"numberOfRepWins":0,"numberOfUncalled":0,"numberOfRunoffs":0},{"abbreviation":"SC","name":"South Carolina","numberOfDemWins":1,"numberOfRepWins":6,"numberOfUncalled":0,"numberOfRunoffs":0},{"abbreviation":"SD","name":"South Dakota","numberOfDemWins":0,"numberOfRepWins":1,"numberOfUncalled":0,"numberOfRunoffs":0},{"abbreviation":"TN","name":"Tennessee","numberOfDemWins":2,"numberOfRepWins":7,"numberOfUncalled":0,"numberOfRunoffs":0},{"abbreviation":"TX","name":"Texas","numberOfDemWins":13,"numberOfRepWins":23,"numberOfUncalled":0,"numberOfRunoffs":0},{"abbreviation":"UT","name":"Utah","numberOfDemWins":0,"numberOfRepWins":4,"numberOfUncalled":0,"numberOfRunoffs":0},{"abbreviation":"VA","name":"Virginia","numberOfDemWins":7,"numberOfRepWins":4,"numberOfUncalled":0,"numberOfRunoffs":0},{"abbreviation":"VT","name":"Vermont","numberOfDemWins":1,"numberOfRepWins":0,"numberOfUncalled":0,"numberOfRunoffs":0},{"abbreviation":"WA","name":"Washington","numberOfDemWins":7,"numberOfRepWins":3,"numberOfUncalled":0,"numberOfRunoffs":0},{"abbreviation":"WI","name":"Wisconsin","numberOfDemWins":3,"numberOfRepWins":5,"numberOfUncalled":0,"numberOfRunoffs":0},{"abbreviation":"WV","name":"West Virginia","numberOfDemWins":0,"numberOfRepWins":3,"numberOfUncalled":0,"numberOfRunoffs":0},{"abbreviation":"WY","name":"Wyoming","numberOfDemWins":0,"numberOfRepWins":1,"numberOfUncalled":0,"numberOfRunoffs":0}],"titleText":"Test title","totalCollapsedItems":0}}');var A=r.createElement;const{general2020:B}=H,F={component:N,title:"Features/Results Tables/National/House (2020)",argTypes:{buttonText:{control:{type:"text"}},titleText:{control:{type:"text"}},totalCollapsedItems:{control:{type:"range",min:0,max:50,step:1}}},args:{buttonText:B.buttonText,titleText:B.titleText,totalCollapsedItems:10},parameters:{controls:{exclude:["results"]}}},w=c=>A(N,(0,i.default)({},B,c));w.displayName="House2022",w.storyName="House (2020)";const k=["House2022"]},"./components/LinklessButton.js":(v,l,e)=>{"use strict";e.r(l),e.d(l,{default:()=>f});var i=e("./node_modules/styled-jsx/style.js"),r=e.n(i),d=e("./node_modules/next/dist/compiled/react/index.js"),a=e("./node_modules/prop-types/index.js"),o=e.n(a),t=e("./node_modules/classnames/index.js"),u=e.n(t),s=d.createElement;const b=({children:g,classes:U,onClick:R,isBlock:j})=>{const{0:D,1:P}=(0,d.useState)(!1),_=u()({db:j,dib:!j},"button-press founders-cond lh-none f4 fw6 ttu",{"clear-blue bg-white":!D,"white bg-clear-blue":D},U);return s(d.Fragment,null,s(r(),{id:"1765211304"},[".button-press.jsx-1765211304{border:1px solid #3061ff;-webkit-transition:background-position ease 0.2s;transition:background-position ease 0.2s;background-position:-600px 0;background-repeat:no-repeat;background-image:linear-gradient(35deg,#3061ff 50%,transparent 0);cursor:pointer;}",".button-press.jsx-1765211304:hover{background-size:325% 100%;background-position:0 0;color:#fff;}"]),s("button",{type:"button","data-testid":"button-press",onClick:y=>{P(!D),R(y)},className:"jsx-1765211304 "+(_||"")},g))};b.propTypes={isBlock:o().bool,onClick:o().func.isRequired},b.defaultProps={isBlock:!1};const f=b},"./components/Module.js":(v,l,e)=>{"use strict";e.r(l),e.d(l,{default:()=>u});var i=e("./node_modules/next/dist/compiled/react/index.js"),r=e("./node_modules/classnames/index.js"),d=e.n(r),a=e("./components/withErrorBoundary.js"),o=i.createElement;const t=({children:s,className:b,id:f=null,testId:g=null})=>o("div",{className:d()("module mb9",b),id:f,"data-testid":g},s);t.displayName="Module";const u=(0,a.default)(t)},"./components/ToggleButton.js":(v,l,e)=>{"use strict";e.r(l),e.d(l,{default:()=>f});var i=e("./node_modules/styled-jsx/style.js"),r=e.n(i),d=e("./node_modules/next/dist/compiled/react/index.js"),a=e("./node_modules/classnames/index.js"),o=e.n(a),t=e("./components/icons/Chevron.js"),u=e("./components/LinklessButton.js"),s=d.createElement;const f=({classes:g,onClick:U,toggled:R,displayMoreText:j,displayLessText:D})=>s(d.Fragment,null,s(r(),{id:"3204447588"},[".toggle-button.jsx-3204447588{margin:20px auto 0;max-width:var(--toggle-button-max-width,430px);}",".toggle-button.is-open .chevron{-webkit-transform:rotate(180deg);-ms-transform:rotate(180deg);transform:rotate(180deg);}"]),s("div",{className:"jsx-3204447588 "+(o()("toggle-button",g,{"is-open":R})||"")},s(u.default,{onClick:U,classes:"w-100 pv2"},s("div",{"data-testid":"toggle-button",className:"jsx-3204447588 df flex-row founders-cond justify-center lh-none f4 fw6 ttu"},s("span",{className:"jsx-3204447588 pr1"},R?D:j),s("span",{className:"jsx-3204447588"},s(t.default,{color:"#3061FF"}))))))},"./components/icons/Chevron.js":(v,l,e)=>{"use strict";e.r(l),e.d(l,{default:()=>s});var i=e("./node_modules/styled-jsx/style.js"),r=e.n(i),d=e("./node_modules/next/dist/compiled/react/index.js"),a=e("./node_modules/prop-types/index.js"),o=e.n(a),t=d.createElement;const u=({width:b,height:f})=>t(d.Fragment,null,t(r(),{id:"3286215947"},[".chevron.jsx-3286215947{-webkit-transition:-webkit-transform 100ms linear;-webkit-transition:transform 100ms linear;transition:transform 100ms linear;}",".chevron.jsx-3286215947 path.jsx-3286215947{fill:currentColor;}"]),t("svg",{width:b,height:f,viewBox:"0 0 12 8",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"jsx-3286215947 chevron"},t("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M12 2.06206L5.95831 8L0 2.14401L1.55988 0.58195L5.95831 4.90485L8.19922 2.70243L10.4401 0.5L12 2.06206Z",className:"jsx-3286215947"})));u.propTypes={width:o().string,height:o().string},u.defaultProps={width:"11",height:"7"};const s=u},"./components/withErrorBoundary.js":(v,l,e)=>{"use strict";e.r(l),e.d(l,{default:()=>s});var i=e("./node_modules/next/dist/compiled/react/index.js"),r=e("./node_modules/console-browserify/index.js"),d=i.createElement;class a extends i.Component{constructor(f){super(f),this.state={hasError:!1}}static getDerivedStateFromError(){return{hasError:!0}}componentDidCatch(f,g){r.error(f,g)}render(){return this.state.hasError?d("div",{className:"pv4 f2 founders-mono"},"Something went wrong. Please try again later."):this.props.children}}a.displayName="ErrorBoundary";const o=a;var t=i.createElement;const s=b=>f=>t(o,null,t(b,f))},"./helpers/pluralize.js":(v,l,e)=>{"use strict";e.r(l),e.d(l,{default:()=>o});var i=e("./node_modules/lodash.get/index.js"),r=e.n(i);const d=[{singular:"seat",plural:"seats"},{singular:"race",plural:"races"},{singular:"is",plural:"are"},{singular:"wins",plural:"win"},{singular:"advances",plural:"advance"},{singular:"day",plural:"days"},{singular:"delegate",plural:"delegates"},{singular:"primary",plural:"primaries"},{singular:"race",plural:"races"},{singular:"candidate",plural:"candidates"},{singular:"republican",plural:"republicans"},{singular:"democrat",plural:"democrats"},{singular:"advances",plural:"advance"},{singular:"municipality",plural:"municipalities"},{singular:"legislative district",plural:"legislative districts"},{singular:"congressional district",plural:"congressional districts"},{singular:"township",plural:"townships"},{singular:"district",plural:"districts"},{singular:"ward",plural:"wards"},{singular:"county",plural:"counties"},{singular:"superdelegate",plural:"superdelegates"}],o=(t,u)=>{if(u===1)return t;const s=d.find(({singular:b})=>b===t);return r()(s,"plural",t)}},"./node_modules/classnames/index.js":(v,l)=>{var e,i;/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(){"use strict";var r={}.hasOwnProperty,d="[native code]";function a(){for(var o=[],t=0;t<arguments.length;t++){var u=arguments[t];if(u){var s=typeof u;if(s==="string"||s==="number")o.push(u);else if(Array.isArray(u)){if(u.length){var b=a.apply(null,u);b&&o.push(b)}}else if(s==="object"){if(u.toString!==Object.prototype.toString&&!u.toString.toString().includes("[native code]")){o.push(u.toString());continue}for(var f in u)r.call(u,f)&&u[f]&&o.push(f)}}}return o.join(" ")}v.exports?(a.default=a,v.exports=a):(e=[],i=function(){return a}.apply(l,e),i!==void 0&&(v.exports=i))})()},"./node_modules/lodash.kebabcase/index.js":(v,l,e)=>{var i=1/0,r="[object Symbol]",d=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,a=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,o="\\ud800-\\udfff",t="\\u0300-\\u036f\\ufe20-\\ufe23",u="\\u20d0-\\u20f0",s="\\u2700-\\u27bf",b="a-z\\xdf-\\xf6\\xf8-\\xff",f="\\xac\\xb1\\xd7\\xf7",g="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",U="\\u2000-\\u206f",R=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",j="A-Z\\xc0-\\xd6\\xd8-\\xde",D="\\ufe0e\\ufe0f",P=f+g+U+R,_="['\u2019]",y="["+P+"]",C="["+t+u+"]",T="\\d+",h="["+s+"]",X="["+b+"]",K="[^"+o+P+T+s+b+j+"]",Q="\\ud83c[\\udffb-\\udfff]",O="(?:"+C+"|"+Q+")",ie="[^"+o+"]",N="(?:\\ud83c[\\udde6-\\uddff]){2}",H="[\\ud800-\\udbff][\\udc00-\\udfff]",A="["+j+"]",B="\\u200d",F="(?:"+X+"|"+K+")",w="(?:"+A+"|"+K+")",k="(?:"+_+"(?:d|ll|m|re|s|t|ve))?",c="(?:"+_+"(?:D|LL|M|RE|S|T|VE))?",x=O+"?",m="["+D+"]?",W="(?:"+B+"(?:"+[ie,N,H].join("|")+")"+m+x+")*",L=m+x+W,z="(?:"+[h,N,H].join("|")+")"+L,I=RegExp(_,"g"),q=RegExp(C,"g"),Z=RegExp([A+"?"+X+"+"+k+"(?="+[y,A,"$"].join("|")+")",w+"+"+c+"(?="+[y,A+F,"$"].join("|")+")",A+"?"+F+"+"+k,A+"+"+c,T,z].join("|"),"g"),ee=/[a-z][A-Z]|[A-Z]{2,}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,ne={\u00C0:"A",\u00C1:"A",\u00C2:"A",\u00C3:"A",\u00C4:"A",\u00C5:"A",\u00E0:"a",\u00E1:"a",\u00E2:"a",\u00E3:"a",\u00E4:"a",\u00E5:"a",\u00C7:"C",\u00E7:"c",\u00D0:"D",\u00F0:"d",\u00C8:"E",\u00C9:"E",\u00CA:"E",\u00CB:"E",\u00E8:"e",\u00E9:"e",\u00EA:"e",\u00EB:"e",\u00CC:"I",\u00CD:"I",\u00CE:"I",\u00CF:"I",\u00EC:"i",\u00ED:"i",\u00EE:"i",\u00EF:"i",\u00D1:"N",\u00F1:"n",\u00D2:"O",\u00D3:"O",\u00D4:"O",\u00D5:"O",\u00D6:"O",\u00D8:"O",\u00F2:"o",\u00F3:"o",\u00F4:"o",\u00F5:"o",\u00F6:"o",\u00F8:"o",\u00D9:"U",\u00DA:"U",\u00DB:"U",\u00DC:"U",\u00F9:"u",\u00FA:"u",\u00FB:"u",\u00FC:"u",\u00DD:"Y",\u00FD:"y",\u00FF:"y",\u00C6:"Ae",\u00E6:"ae",\u00DE:"Th",\u00FE:"th",\u00DF:"ss",\u0100:"A",\u0102:"A",\u0104:"A",\u0101:"a",\u0103:"a",\u0105:"a",\u0106:"C",\u0108:"C",\u010A:"C",\u010C:"C",\u0107:"c",\u0109:"c",\u010B:"c",\u010D:"c",\u010E:"D",\u0110:"D",\u010F:"d",\u0111:"d",\u0112:"E",\u0114:"E",\u0116:"E",\u0118:"E",\u011A:"E",\u0113:"e",\u0115:"e",\u0117:"e",\u0119:"e",\u011B:"e",\u011C:"G",\u011E:"G",\u0120:"G",\u0122:"G",\u011D:"g",\u011F:"g",\u0121:"g",\u0123:"g",\u0124:"H",\u0126:"H",\u0125:"h",\u0127:"h",\u0128:"I",\u012A:"I",\u012C:"I",\u012E:"I",\u0130:"I",\u0129:"i",\u012B:"i",\u012D:"i",\u012F:"i",\u0131:"i",\u0134:"J",\u0135:"j",\u0136:"K",\u0137:"k",\u0138:"k",\u0139:"L",\u013B:"L",\u013D:"L",\u013F:"L",\u0141:"L",\u013A:"l",\u013C:"l",\u013E:"l",\u0140:"l",\u0142:"l",\u0143:"N",\u0145:"N",\u0147:"N",\u014A:"N",\u0144:"n",\u0146:"n",\u0148:"n",\u014B:"n",\u014C:"O",\u014E:"O",\u0150:"O",\u014D:"o",\u014F:"o",\u0151:"o",\u0154:"R",\u0156:"R",\u0158:"R",\u0155:"r",\u0157:"r",\u0159:"r",\u015A:"S",\u015C:"S",\u015E:"S",\u0160:"S",\u015B:"s",\u015D:"s",\u015F:"s",\u0161:"s",\u0162:"T",\u0164:"T",\u0166:"T",\u0163:"t",\u0165:"t",\u0167:"t",\u0168:"U",\u016A:"U",\u016C:"U",\u016E:"U",\u0170:"U",\u0172:"U",\u0169:"u",\u016B:"u",\u016D:"u",\u016F:"u",\u0171:"u",\u0173:"u",\u0174:"W",\u0175:"w",\u0176:"Y",\u0177:"y",\u0178:"Y",\u0179:"Z",\u017B:"Z",\u017D:"Z",\u017A:"z",\u017C:"z",\u017E:"z",\u0132:"IJ",\u0133:"ij",\u0152:"Oe",\u0153:"oe",\u0149:"'n",\u017F:"ss"},se=typeof e.g=="object"&&e.g&&e.g.Object===Object&&e.g,ae=typeof self=="object"&&self&&self.Object===Object&&self,re=se||ae||Function("return this")();function te(n,p,M,ge){var J=-1,de=n?n.length:0;for(ge&&de&&(M=n[++J]);++J<de;)M=p(M,n[J],J,n);return M}function $(n){return n.match(d)||[]}function ue(n){return function(p){return n?.[p]}}var oe=ue(ne);function S(n){return ee.test(n)}function le(n){return n.match(Z)||[]}var V=Object.prototype,Y=V.toString,E=re.Symbol,G=E?E.prototype:void 0,fe=G?G.toString:void 0;function be(n){if(typeof n=="string")return n;if(xe(n))return fe?fe.call(n):"";var p=n+"";return p=="0"&&1/n==-i?"-0":p}function ce(n){return function(p){return te(Re(pe(p).replace(I,"")),n,"")}}function Oe(n){return!!n&&typeof n=="object"}function xe(n){return typeof n=="symbol"||Oe(n)&&Y.call(n)==r}function me(n){return n==null?"":be(n)}function pe(n){return n=me(n),n&&n.replace(a,oe).replace(q,"")}var ve=ce(function(n,p,M){return n+(M?"-":"")+p.toLowerCase()});function Re(n,p,M){return n=me(n),p=M?void 0:p,p===void 0?S(n)?le(n):$(n):n.match(p)||[]}v.exports=ve}}]);
