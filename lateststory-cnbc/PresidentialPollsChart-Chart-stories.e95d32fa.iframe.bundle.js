(globalThis.webpackChunkfirecracker=globalThis.webpackChunkfirecracker||[]).push([[3500],{"./node_modules/@babel/runtime/helpers/esm/extends.js":(Z,_,d)=>{"use strict";d.r(_),d.d(_,{default:()=>c});function c(){return c=Object.assign?Object.assign.bind():function(j){for(var a=1;a<arguments.length;a++){var C=arguments[a];for(var y in C)Object.prototype.hasOwnProperty.call(C,y)&&(j[y]=C[y])}return j},c.apply(this,arguments)}},"./components/PresidentialPollsChart/Chart.stories.js":(Z,_,d)=>{"use strict";d.r(_),d.d(_,{PollsChart:()=>M,__namedExportsOrder:()=>R,default:()=>L});var c=d("./node_modules/@babel/runtime/helpers/esm/extends.js"),j=d("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),a=d("./node_modules/next/dist/compiled/react/index.js"),C=d("./components/PresidentialPollsChart/Chart.js"),y=d("./components/PresidentialPollsChart/mock.json"),p=d("./components/PresidentialPollsChart/lineMock.json");const b=["yDomainMin","yDomainMax"];var m=a.createElement;const A={range:!0,min:1,max:100,step:1},L={component:C.default,title:"Features/Polling/Chart",argTypes:{yDomainMin:{options:A,control:{type:"number"}},yDomainMax:{options:A,control:{type:"number"}},helpText:{control:{type:"text"}}},parameters:{controls:{include:["yDomainMin","yDomainMax","helpText"]}},args:{yDomainMin:y.yDomain.min,yDomainMax:y.yDomain.max,helpText:y.helpText}},M=H=>{let{yDomainMin:I,yDomainMax:w}=H,U=(0,j.default)(H,b);return m(C.default,(0,c.default)({},y,U,{yDomain:{min:I,max:w},dailyData:p}))};M.displayName="PollsChart",M.storyName="Chart";const R=["PollsChart"]},"./components/Arrow.js":(Z,_,d)=>{"use strict";d.r(_),d.d(_,{default:()=>x});var c=d("./node_modules/next/dist/compiled/react/index.js"),j=d("./node_modules/prop-types/index.js"),a=d.n(j),C=c.createElement;const y=()=>C("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M15 7.5C15 11.6421 11.6421 15 7.5 15C3.35786 15 0 11.6421 0 7.5C0 3.35786 3.35786 0 7.5 0C11.6421 0 15 3.35786 15 7.5ZM5.40581 11.1314C5.16173 10.8873 5.16173 10.4915 5.40581 10.2475L7.93053 7.72275L5.40581 5.19803C5.16173 4.95395 5.16173 4.55822 5.40581 4.31414C5.64988 4.07007 6.04561 4.07007 6.28969 4.31414L9.69829 7.72275L6.28969 11.1314C6.04561 11.3754 5.64988 11.3754 5.40581 11.1314Z",fill:"white"});y.displayName="OneColorNegative";const p=y;var b=c.createElement;const m=()=>b("path",{id:"arrow-link",fillRule:"evenodd",clipRule:"evenodd",d:"M15 7.5C15 11.6421 11.6421 15 7.5 15C3.35786 15 0 11.6421 0 7.5C0 3.35786 3.35786 0 7.5 0C11.6421 0 15 3.35786 15 7.5ZM5.40581 11.1314C5.16173 10.8873 5.16173 10.4915 5.40581 10.2475L7.93053 7.72275L5.40581 5.19803C5.16173 4.95395 5.16173 4.55822 5.40581 4.31414C5.64988 4.07007 6.04561 4.07007 6.28969 4.31414L9.69829 7.72275L6.28969 11.1314C6.04561 11.3754 5.64988 11.3754 5.40581 11.1314Z",fill:"#102039"});m.displayName="OneColorPositive";const A=m;var L=c.createElement;const M=()=>L("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M1.56206 3.74642e-06L7.5 6.05952L1.64401 12.0354L0.0819497 10.4709L4.40485 6.05951L2.20243 3.812L-4.57699e-07 1.56448L1.56206 3.74642e-06Z",fill:"#3061FF"});M.displayName="NoColorBlue";const R=M;var H=c.createElement;const I=()=>H("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M1.56206 3.74642e-06L7.5 6.05952L1.64401 12.0354L0.0819497 10.4709L4.40485 6.05951L2.20243 3.812L-4.57699e-07 1.56448L1.56206 3.74642e-06Z",fill:"#555555"});I.displayName="NoColor";const w=I;var U=c.createElement;const P=()=>U("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M1.56206 3.74642e-06L7.5 6.05952L1.64401 12.0354L0.0819497 10.4709L4.40485 6.05951L2.20243 3.812L-4.57699e-07 1.56448L1.56206 3.74642e-06Z",fill:"currentColor"});P.displayName="inheritColor";const D=P;var f=c.createElement;const T=()=>f("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M5.93794 12L4.4984e-07 5.95831L5.85599 1.24119e-07L7.41805 1.55988L3.09515 5.95831L7.5 10.4401L5.93794 12Z",fill:"#3061FF"});T.displayName="LeftPointingNoColorBlue";const $=T;var O=c.createElement;const u={noColor:w(),inheritColor:D(),oneColorNegative:p(),oneColorPositive:A(),noColorBlue:R(),leftPointingNoColorBlue:$()},o=({className:F,style:s,type:t,width:e="15",height:r="15",viewBox:n="0 0 15 15"})=>O("div",{className:F,style:s},O("svg",{width:e,height:r,viewBox:n,fill:"none",xmlns:"http://www.w3.org/2000/svg"},(()=>u[t])()));o.displayName="Arrow",o.propTypes={className:a().string,style:a().object,type:a().oneOf(Object.keys(u)).isRequired,width:a().string,height:a().string,viewBox:a().string};const x=o},"./components/Headshot/2020/index.js":(Z,_,d)=>{"use strict";d.r(_),d.d(_,{default:()=>U});var c=d("./node_modules/next/dist/compiled/react/index.js"),j=d("./node_modules/prop-types/index.js"),a=d.n(j),C=d("./node_modules/next/amp.js"),y=d("./node_modules/styled-jsx/style.js"),p=d.n(y),b=d("./helpers/getHeadshotUrl.js"),m=c.createElement;const A=({headshotUrl:P,altText:D,height:f,width:T,classes:$="gray-square",fileExtension:O="jpg",useFallback:u})=>{const o=`${b.headshotBaseUrl}/2020/candidate_fallback.${O}`;return m(c.Fragment,null,m(p(),{id:"884119781"},[".headshot--amp{position:relative;}",".headshot--amp amp-img img{object-fit:cover;}",".headshot.gray-square{background-color:#f1f1f1;}",".headshot.rounded-bottom amp-img{border-radius:0 0 50% 50%;}",".border-radius-50 amp-img img{border-radius:50%;}"]),m(p(),{id:"3624786546",dynamic:[f,T]},[`.headshot--amp.__jsx-style-dynamic-selector{height:${f}px;width:${T}px;}`,".border-radius-50.__jsx-style-dynamic-selector{border-radius:50%;}"]),m("div",{className:"jsx-884119781 "+p().dynamic([["3624786546",[f,T]]])+` headshot headshot--amp ${$}`},u?m("amp-img",{alt:D,layout:"fill",height:f,src:P||o,class:"jsx-884119781 "+p().dynamic([["3624786546",[f,T]]])},m("amp-img",{alt:D,layout:"fill",height:f,src:o,class:"jsx-884119781 "+p().dynamic([["3624786546",[f,T]]])})):m("amp-img",{alt:D,layout:"fill",height:f,src:P,class:"jsx-884119781 "+p().dynamic([["3624786546",[f,T]]])})))};A.propTypes={headshotUrl:a().string.isRequired,altText:a().string,height:a().oneOfType([a().string,a().number]),width:a().oneOfType([a().string,a().number]),useFallback:a().bool},A.defaultProps={altText:"",height:"50",width:"50",useFallback:!0};const L=A;var M=c.createElement;const R=({headshotUrl:P="",height:D,width:f,classes:T="gray-square",fileExtension:$="jpg",useFallback:O})=>{const u=`${b.headshotBaseUrl}/2020/candidate_fallback.${$}`,o=O?`url('${P}'), url('${u}')`:`url('${P}')`;return M(c.Fragment,null,M(p(),{id:"2818745285",dynamic:[o,D,f]},[`.headshot.__jsx-style-dynamic-selector{background-image:${o};height:${D}px;width:${f}px;}`,".headshot.gray-square.__jsx-style-dynamic-selector{background-color:#f1f1f1;}",".headshot.rounded-bottom.__jsx-style-dynamic-selector{border-radius:0 0 50% 50%;}",".border-radius-50.__jsx-style-dynamic-selector{border-radius:50%;}"]),M("div",{"data-test":"headshot",className:p().dynamic([["2818745285",[o,D,f]]])+` headshot ${T}`}))};R.propTypes={headshotUrl:a().string.isRequired,height:a().oneOfType([a().string,a().number]),width:a().oneOfType([a().string,a().number]),useFallback:a().bool},R.defaultProps={height:"50",width:"50",useFallback:!0};const H=R;var I=c.createElement;const w=P=>(0,C.useAmp)()?I(L,P):I(H,P);w.displayName="Headshot",w.propTypes={headshotUrl:a().string.isRequired,altText:a().string,height:a().oneOfType([a().string,a().number]),width:a().oneOfType([a().string,a().number])},w.defaultProps={altText:"",height:"50",width:"50"};const U=w},"./helpers/getHeadshotUrl.js":(Z,_,d)=>{"use strict";d.r(_),d.d(_,{default:()=>T,getCorrectStateAbbr:()=>P,headshotBaseUrl:()=>j});var c=d("./helpers/constants.js");const j="https://media-cldnry.s-nbcnews.com/image/upload/firecracker/headshots",{ATTORNEY_GENERAL:a,GOVERNOR:C,LT_GOVERNOR:y,PRESIDENT:p,PRES_PRE_VIABILITY:b,PRESIDENT_SPECIAL:m,SENATE:A,SENATE_SPECIAL:L,SECRETARY_OF_STATE:M,STATE_SENATE:R,MAYOR:H,SUPREME_COURT:I}=c.OFFICE_CODES,w={[a]:"A00",[C]:"G00",[y]:"L00",[p]:"P00",[m]:"P00",[b]:"P00",[A]:"S00",[L]:"S00",[M]:"SS0",[R]:"Z20",[H]:"M00",[I]:"B00"},U=["dem","rep"],P=({electionSeason:$,electionType:O,stateCode:u,officeCode:o})=>$==="2022"&&O===c.ELECTION_TYPE.PRIMARY&&u==="A0"&&o===c.OFFICE_CODES.STATE_SENATE?"AZ":$==="2022"&&u==="LC"&&o===c.OFFICE_CODES.MAYOR?"CA":$==="2023"&&u==="HU"&&o===c.OFFICE_CODES.MAYOR?"TX":$==="2023"&&u==="PL"&&o===c.OFFICE_CODES.MAYOR?"PA":u,D=($,O,u,o,x,F,s,t)=>{if(u==="H"){const r=`${(s||"00").padStart(2,"0")}`;return`${j}/${$}/${O}_${u}${r}_${o}_${x}_${F}.${t}`}return`${j}/${$}/${O}_${w[u]}_${o}_${x}_${F}.${t}`},T=$=>{if(Object.keys($).filter(B=>typeof $[B]!="string").length>0)return null;const{party:O,firstName:u,lastName:o,officeCode:x,electionDate:F,stateCode:s,jcodeString:t,electionType:e}=$,r=P({electionSeason:F,electionType:e,stateCode:s,officeCode:x});if(F==="2022"&&e===c.ELECTION_TYPE.PRIMARY&&s==="AK"&&x===c.OFFICE_CODES.SENATE&&u==="Dave"&&o==="Darden")return null;const n=F.slice(0,4),i=U.includes(O.slice(0,3).toLowerCase())?O.slice(0,1).toUpperCase():"I",l=u.slice(0,1).toUpperCase(),h=o.replace(/[-']/g," ").split(" ").join("").toUpperCase(),v=["P","PV","P2"].includes(x)?"US":r,E=$.fileFormat||(n==="2019"?"png":"jpg");return D(n,v,x,i,l,h,t,E)}},"./node_modules/dayjs/dayjs.min.js":function(Z){(function(_,d){Z.exports=d()})(this,function(){"use strict";var _=1e3,d=6e4,c=36e5,j="millisecond",a="second",C="minute",y="hour",p="day",b="week",m="month",A="quarter",L="year",M="date",R="Invalid Date",H=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,I=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,w={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(s){var t=["th","st","nd","rd"],e=s%100;return"["+s+(t[(e-20)%10]||t[e]||t[0])+"]"}},U=function(s,t,e){var r=String(s);return!r||r.length>=t?s:""+Array(t+1-r.length).join(e)+s},P={s:U,z:function(s){var t=-s.utcOffset(),e=Math.abs(t),r=Math.floor(e/60),n=e%60;return(t<=0?"+":"-")+U(r,2,"0")+":"+U(n,2,"0")},m:function s(t,e){if(t.date()<e.date())return-s(e,t);var r=12*(e.year()-t.year())+(e.month()-t.month()),n=t.clone().add(r,m),i=e-n<0,l=t.clone().add(r+(i?-1:1),m);return+(-(r+(e-n)/(i?n-l:l-n))||0)},a:function(s){return s<0?Math.ceil(s)||0:Math.floor(s)},p:function(s){return{M:m,y:L,w:b,d:p,D:M,h:y,m:C,s:a,ms:j,Q:A}[s]||String(s||"").toLowerCase().replace(/s$/,"")},u:function(s){return s===void 0}},D="en",f={};f[D]=w;var T="$isDayjsObject",$=function(s){return s instanceof x||!(!s||!s[T])},O=function s(t,e,r){var n;if(!t)return D;if(typeof t=="string"){var i=t.toLowerCase();f[i]&&(n=i),e&&(f[i]=e,n=i);var l=t.split("-");if(!n&&l.length>1)return s(l[0])}else{var h=t.name;f[h]=t,n=h}return!r&&n&&(D=n),n||!r&&D},u=function(s,t){if($(s))return s.clone();var e=typeof t=="object"?t:{};return e.date=s,e.args=arguments,new x(e)},o=P;o.l=O,o.i=$,o.w=function(s,t){return u(s,{locale:t.$L,utc:t.$u,x:t.$x,$offset:t.$offset})};var x=function(){function s(e){this.$L=O(e.locale,null,!0),this.parse(e),this.$x=this.$x||e.x||{},this[T]=!0}var t=s.prototype;return t.parse=function(e){this.$d=function(r){var n=r.date,i=r.utc;if(n===null)return new Date(NaN);if(o.u(n))return new Date;if(n instanceof Date)return new Date(n);if(typeof n=="string"&&!/Z$/i.test(n)){var l=n.match(H);if(l){var h=l[2]-1||0,g=(l[7]||"0").substring(0,3);return i?new Date(Date.UTC(l[1],h,l[3]||1,l[4]||0,l[5]||0,l[6]||0,g)):new Date(l[1],h,l[3]||1,l[4]||0,l[5]||0,l[6]||0,g)}}return new Date(n)}(e),this.init()},t.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},t.$utils=function(){return o},t.isValid=function(){return this.$d.toString()!==R},t.isSame=function(e,r){var n=u(e);return this.startOf(r)<=n&&n<=this.endOf(r)},t.isAfter=function(e,r){return u(e)<this.startOf(r)},t.isBefore=function(e,r){return this.endOf(r)<u(e)},t.$g=function(e,r,n){return o.u(e)?this[r]:this.set(n,e)},t.unix=function(){return Math.floor(this.valueOf()/1e3)},t.valueOf=function(){return this.$d.getTime()},t.startOf=function(e,r){var n=this,i=!!o.u(r)||r,l=o.p(e),h=function(W,S){var Y=o.w(n.$u?Date.UTC(n.$y,S,W):new Date(n.$y,S,W),n);return i?Y:Y.endOf(p)},g=function(W,S){return o.w(n.toDate()[W].apply(n.toDate("s"),(i?[0,0,0,0]:[23,59,59,999]).slice(S)),n)},v=this.$W,E=this.$M,N=this.$D,B="set"+(this.$u?"UTC":"");switch(l){case L:return i?h(1,0):h(31,11);case m:return i?h(1,E):h(0,E+1);case b:var k=this.$locale().weekStart||0,K=(v<k?v+7:v)-k;return h(i?N-K:N+(6-K),E);case p:case M:return g(B+"Hours",0);case y:return g(B+"Minutes",1);case C:return g(B+"Seconds",2);case a:return g(B+"Milliseconds",3);default:return this.clone()}},t.endOf=function(e){return this.startOf(e,!1)},t.$set=function(e,r){var n,i=o.p(e),l="set"+(this.$u?"UTC":""),h=(n={},n[p]=l+"Date",n[M]=l+"Date",n[m]=l+"Month",n[L]=l+"FullYear",n[y]=l+"Hours",n[C]=l+"Minutes",n[a]=l+"Seconds",n[j]=l+"Milliseconds",n)[i],g=i===p?this.$D+(r-this.$W):r;if(i===m||i===L){var v=this.clone().set(M,1);v.$d[h](g),v.init(),this.$d=v.set(M,Math.min(this.$D,v.daysInMonth())).$d}else h&&this.$d[h](g);return this.init(),this},t.set=function(e,r){return this.clone().$set(e,r)},t.get=function(e){return this[o.p(e)]()},t.add=function(e,r){var n,i=this;e=Number(e);var l=o.p(r),h=function(E){var N=u(i);return o.w(N.date(N.date()+Math.round(E*e)),i)};if(l===m)return this.set(m,this.$M+e);if(l===L)return this.set(L,this.$y+e);if(l===p)return h(1);if(l===b)return h(7);var g=(n={},n[C]=d,n[y]=c,n[a]=_,n)[l]||1,v=this.$d.getTime()+e*g;return o.w(v,this)},t.subtract=function(e,r){return this.add(-1*e,r)},t.format=function(e){var r=this,n=this.$locale();if(!this.isValid())return n.invalidDate||R;var i=e||"YYYY-MM-DDTHH:mm:ssZ",l=o.z(this),h=this.$H,g=this.$m,v=this.$M,E=n.weekdays,N=n.months,B=n.meridiem,k=function(S,Y,V,G){return S&&(S[Y]||S(r,i))||V[Y].slice(0,G)},K=function(S){return o.s(h%12||12,S,"0")},W=B||function(S,Y,V){var G=S<12?"AM":"PM";return V?G.toLowerCase():G};return i.replace(I,function(S,Y){return Y||function(V){switch(V){case"YY":return String(r.$y).slice(-2);case"YYYY":return o.s(r.$y,4,"0");case"M":return v+1;case"MM":return o.s(v+1,2,"0");case"MMM":return k(n.monthsShort,v,N,3);case"MMMM":return k(N,v);case"D":return r.$D;case"DD":return o.s(r.$D,2,"0");case"d":return String(r.$W);case"dd":return k(n.weekdaysMin,r.$W,E,2);case"ddd":return k(n.weekdaysShort,r.$W,E,3);case"dddd":return E[r.$W];case"H":return String(h);case"HH":return o.s(h,2,"0");case"h":return K(1);case"hh":return K(2);case"a":return W(h,g,!0);case"A":return W(h,g,!1);case"m":return String(g);case"mm":return o.s(g,2,"0");case"s":return String(r.$s);case"ss":return o.s(r.$s,2,"0");case"SSS":return o.s(r.$ms,3,"0");case"Z":return l}return null}(S)||l.replace(":","")})},t.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},t.diff=function(e,r,n){var i,l=this,h=o.p(r),g=u(e),v=(g.utcOffset()-this.utcOffset())*d,E=this-g,N=function(){return o.m(l,g)};switch(h){case L:i=N()/12;break;case m:i=N();break;case A:i=N()/3;break;case b:i=(E-v)/6048e5;break;case p:i=(E-v)/864e5;break;case y:i=E/c;break;case C:i=E/d;break;case a:i=E/_;break;default:i=E}return n?i:o.a(i)},t.daysInMonth=function(){return this.endOf(m).$D},t.$locale=function(){return f[this.$L]},t.locale=function(e,r){if(!e)return this.$L;var n=this.clone(),i=O(e,r,!0);return i&&(n.$L=i),n},t.clone=function(){return o.w(this.$d,this)},t.toDate=function(){return new Date(this.valueOf())},t.toJSON=function(){return this.isValid()?this.toISOString():null},t.toISOString=function(){return this.$d.toISOString()},t.toString=function(){return this.$d.toUTCString()},s}(),F=x.prototype;return u.prototype=F,[["$ms",j],["$s",a],["$m",C],["$H",y],["$W",p],["$M",m],["$y",L],["$D",M]].forEach(function(s){F[s[1]]=function(t){return this.$g(t,s[0],s[1])}}),u.extend=function(s,t){return s.$i||(s(t,x,u),s.$i=!0),u},u.locale=O,u.isDayjs=$,u.unix=function(s){return u(1e3*s)},u.en=f[D],u.Ls=f,u.p={},u})}}]);
