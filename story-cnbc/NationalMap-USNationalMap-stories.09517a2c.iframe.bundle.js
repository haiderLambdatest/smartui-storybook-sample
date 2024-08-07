(globalThis.webpackChunkfirecracker=globalThis.webpackChunkfirecracker||[]).push([[3262],{"./components/NationalMap/USNationalMap.stories.js":(R,j,o)=>{"use strict";o.r(j),o.d(j,{NationalMap:()=>U,NationalMapByElectionSeason:()=>M,NationalMapPreColored:()=>I,__namedExportsOrder:()=>d,default:()=>A});var b=o("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),C=o("./node_modules/styled-jsx/style.js"),f=o.n(C),y=o("./node_modules/next/dist/compiled/react/index.js"),i=o("./components/NationalMap/USNationalMap.js"),x=o("./server/v2/helpers/choroplethUtilities.js"),S=o("./components/NationalMap/mock.json"),g=o("./helpers/constants.js"),h=o("./server/v2/helpers/__tests__/data/national-composition.json"),p=o("./server/v2/format/__tests__/data/calendarRecircMock.json"),c=y.createElement;function n(_,L){var r=Object.keys(_);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(_);L&&(t=t.filter(function(e){return Object.getOwnPropertyDescriptor(_,e).enumerable})),r.push.apply(r,t)}return r}function m(_){for(var L=1;L<arguments.length;L++){var r=arguments[L]!=null?arguments[L]:{};L%2?n(Object(r),!0).forEach(function(t){(0,b.default)(_,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(_,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach(function(t){Object.defineProperty(_,t,Object.getOwnPropertyDescriptor(r,t))})}return _}const{id:E,electionYear:$,electionType:v,fills:T,topojson:O}=S,A={component:i.default,title:"Global Components/Choropleth/US Map (States)"},W={gray:{backgroundColorHex:"#ebebeb",textColorHex:"#000"},red:{backgroundColorHex:"#DE3535",textColorHex:"#fff"},blue:{backgroundColorHex:"#0471E6",textColorHex:"#fff"}},U=_=>{const L=Object.keys(T).reduce((r,t)=>{const{[`${t} Fills`]:e}=_;return r[t]=m(m({},T[t]),W[e]),r},{});return c(i.default,{id:E,electionYear:$,electionType:v,fills:L,topojson:O})};U.displayName="NationalMap",U.argTypes=Object.keys(T).reduce((_,L)=>(_[`${L} Fills`]={control:{type:"select"},options:["gray","red","blue"]},_),{}),U.args=Object.keys(T).reduce((_,L)=>(_[`${L} Fills`]="gray",_),{});const I=()=>c(i.default,{id:E,electionYear:$,electionType:v,fills:T,topojson:O});I.displayName="NationalMapPreColored";const M=({width:_,officeCode:L})=>{const r=(0,x.getCountyBasedRaceMapFills)({composition:h[L],months:p.months,officeCode:L,electionType:g.ELECTION_TYPE.PRIMARY,electionSeason:"2022"});return c(y.Fragment,null,c(f(),{id:"3655848199",dynamic:[_<=500?"24px":"inherit",_<=500?"translateY(4px)":"none"]},[".map-key{-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end;}",`.additional-feature__text,.state-abbreviation text{font-size:${_<=500?"24px":"inherit"};-webkit-transform:${_<=500?"translateY(4px)":"none"};-ms-transform:${_<=500?"translateY(4px)":"none"};transform:${_<=500?"translateY(4px)":"none"};}`]),c("div",{style:{width:_},className:f().dynamic([["3655848199",[_<=500?"24px":"inherit",_<=500?"translateY(4px)":"none"]]])},c(i.default,{className:"us-national-map-2022",id:E,electionYear:"2022",fills:r,topojson:O,showMapKey:!0,height:500,width:825,showUXText:!1,officeCode:L})))};M.argTypes={width:{control:{type:"range",min:300,max:1e3}},officeCode:{options:[g.OFFICE_CODES.GOVERNOR,g.OFFICE_CODES.SENATE],control:{type:"select"}}},M.args={width:410,officeCode:g.OFFICE_CODES.GOVERNOR};const d=["NationalMap","NationalMapPreColored","NationalMapByElectionSeason"]},"./lib/dayjsCustom.js":(R,j,o)=>{"use strict";o.r(j),o.d(j,{dayJsCustom:()=>g});var b=o("./node_modules/dayjs/dayjs.min.js"),C=o.n(b),f=o("./node_modules/dayjs/plugin/updateLocale.js"),y=o.n(f),i=o("./node_modules/dayjs/locale/es.js"),x=o.n(i);C().extend(y());const S={en:{monthsShort:["Jan.","Feb.","March","April","May","June","July","Aug.","Sept.","Oct.","Nov.","Dec."]},es:{monthsShort:["En.","Feb.","Mar.","Abr.","May.","Jun.","Jul.","Ag.","Sept.","Oct.","Nov.","Dic."],relativeTime:{future:"en %s",past:"hace %s",s:"pocos segundos",m:"un minuto",mm:"%d minutos",h:"una hora",hh:"%d horas",d:"un d\xEDa",dd:"%d dias",M:"un mes",MM:"%d meses",y:"un a\xF1o",yy:"%d a\xF1os"}}};Object.keys(S).forEach(h=>{C().updateLocale(h,S[h])});const g=C()},"./server/v2/helpers/getPollsCloseFormatted.js":(R,j,o)=>{"use strict";o.r(j),o.d(j,{default:()=>g});var b=o("./node_modules/dayjs/plugin/utc.js"),C=o.n(b),f=o("./node_modules/dayjs/plugin/timezone.js"),y=o.n(f),i=o("./node_modules/dayjs/plugin/isSameOrAfter.js"),x=o.n(i),S=o("./lib/dayjsCustom.js");S.dayJsCustom.extend(C()),S.dayJsCustom.extend(y()),S.dayJsCustom.extend(x());function g({races:h,electionDate:p,currentTime:c}){const n=Array.from(new Set(h.map(O=>O.polls_close_utc).filter(Boolean))).sort();if(!n.length)return null;const m=n[0],E=S.dayJsCustom.utc(c).tz("America/New_York"),$=S.dayJsCustom.utc(p).hour(12).tz("America/New_York"),v=S.dayJsCustom.utc(m).tz("America/New_York");if(E.isSameOrAfter(v))return null;if(E.isBefore($,"day"))return`Election on ${$.format("MMM D")}`;const T=`${v.format("h:mm A")} ET`;return n.length>1?`Polls begin to close today at ${T}`:`Polls close at ${T}`}},"./node_modules/dayjs/dayjs.min.js":function(R){(function(j,o){R.exports=o()})(this,function(){"use strict";var j=1e3,o=6e4,b=36e5,C="millisecond",f="second",y="minute",i="hour",x="day",S="week",g="month",h="quarter",p="year",c="date",n="Invalid Date",m=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,E=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,$={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(r){var t=["th","st","nd","rd"],e=r%100;return"["+r+(t[(e-20)%10]||t[e]||t[0])+"]"}},v=function(r,t,e){var a=String(r);return!a||a.length>=t?r:""+Array(t+1-a.length).join(e)+r},T={s:v,z:function(r){var t=-r.utcOffset(),e=Math.abs(t),a=Math.floor(e/60),s=e%60;return(t<=0?"+":"-")+v(a,2,"0")+":"+v(s,2,"0")},m:function r(t,e){if(t.date()<e.date())return-r(e,t);var a=12*(e.year()-t.year())+(e.month()-t.month()),s=t.clone().add(a,g),u=e-s<0,l=t.clone().add(a+(u?-1:1),g);return+(-(a+(e-s)/(u?s-l:l-s))||0)},a:function(r){return r<0?Math.ceil(r)||0:Math.floor(r)},p:function(r){return{M:g,y:p,w:S,d:x,D:c,h:i,m:y,s:f,ms:C,Q:h}[r]||String(r||"").toLowerCase().replace(/s$/,"")},u:function(r){return r===void 0}},O="en",A={};A[O]=$;var W="$isDayjsObject",U=function(r){return r instanceof _||!(!r||!r[W])},I=function r(t,e,a){var s;if(!t)return O;if(typeof t=="string"){var u=t.toLowerCase();A[u]&&(s=u),e&&(A[u]=e,s=u);var l=t.split("-");if(!s&&l.length>1)return r(l[0])}else{var D=t.name;A[D]=t,s=D}return!a&&s&&(O=s),s||!a&&O},M=function(r,t){if(U(r))return r.clone();var e=typeof t=="object"?t:{};return e.date=r,e.args=arguments,new _(e)},d=T;d.l=I,d.i=U,d.w=function(r,t){return M(r,{locale:t.$L,utc:t.$u,x:t.$x,$offset:t.$offset})};var _=function(){function r(e){this.$L=I(e.locale,null,!0),this.parse(e),this.$x=this.$x||e.x||{},this[W]=!0}var t=r.prototype;return t.parse=function(e){this.$d=function(a){var s=a.date,u=a.utc;if(s===null)return new Date(NaN);if(d.u(s))return new Date;if(s instanceof Date)return new Date(s);if(typeof s=="string"&&!/Z$/i.test(s)){var l=s.match(m);if(l){var D=l[2]-1||0,P=(l[7]||"0").substring(0,3);return u?new Date(Date.UTC(l[1],D,l[3]||1,l[4]||0,l[5]||0,l[6]||0,P)):new Date(l[1],D,l[3]||1,l[4]||0,l[5]||0,l[6]||0,P)}}return new Date(s)}(e),this.init()},t.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},t.$utils=function(){return d},t.isValid=function(){return this.$d.toString()!==n},t.isSame=function(e,a){var s=M(e);return this.startOf(a)<=s&&s<=this.endOf(a)},t.isAfter=function(e,a){return M(e)<this.startOf(a)},t.isBefore=function(e,a){return this.endOf(a)<M(e)},t.$g=function(e,a,s){return d.u(e)?this[a]:this.set(s,e)},t.unix=function(){return Math.floor(this.valueOf()/1e3)},t.valueOf=function(){return this.$d.getTime()},t.startOf=function(e,a){var s=this,u=!!d.u(a)||a,l=d.p(e),D=function(K,B){var z=d.w(s.$u?Date.UTC(s.$y,B,K):new Date(s.$y,B,K),s);return u?z:z.endOf(x)},P=function(K,B){return d.w(s.toDate()[K].apply(s.toDate("s"),(u?[0,0,0,0]:[23,59,59,999]).slice(B)),s)},Y=this.$W,N=this.$M,H=this.$D,k="set"+(this.$u?"UTC":"");switch(l){case p:return u?D(1,0):D(31,11);case g:return u?D(1,N):D(0,N+1);case S:var w=this.$locale().weekStart||0,F=(Y<w?Y+7:Y)-w;return D(u?H-F:H+(6-F),N);case x:case c:return P(k+"Hours",0);case i:return P(k+"Minutes",1);case y:return P(k+"Seconds",2);case f:return P(k+"Milliseconds",3);default:return this.clone()}},t.endOf=function(e){return this.startOf(e,!1)},t.$set=function(e,a){var s,u=d.p(e),l="set"+(this.$u?"UTC":""),D=(s={},s[x]=l+"Date",s[c]=l+"Date",s[g]=l+"Month",s[p]=l+"FullYear",s[i]=l+"Hours",s[y]=l+"Minutes",s[f]=l+"Seconds",s[C]=l+"Milliseconds",s)[u],P=u===x?this.$D+(a-this.$W):a;if(u===g||u===p){var Y=this.clone().set(c,1);Y.$d[D](P),Y.init(),this.$d=Y.set(c,Math.min(this.$D,Y.daysInMonth())).$d}else D&&this.$d[D](P);return this.init(),this},t.set=function(e,a){return this.clone().$set(e,a)},t.get=function(e){return this[d.p(e)]()},t.add=function(e,a){var s,u=this;e=Number(e);var l=d.p(a),D=function(N){var H=M(u);return d.w(H.date(H.date()+Math.round(N*e)),u)};if(l===g)return this.set(g,this.$M+e);if(l===p)return this.set(p,this.$y+e);if(l===x)return D(1);if(l===S)return D(7);var P=(s={},s[y]=o,s[i]=b,s[f]=j,s)[l]||1,Y=this.$d.getTime()+e*P;return d.w(Y,this)},t.subtract=function(e,a){return this.add(-1*e,a)},t.format=function(e){var a=this,s=this.$locale();if(!this.isValid())return s.invalidDate||n;var u=e||"YYYY-MM-DDTHH:mm:ssZ",l=d.z(this),D=this.$H,P=this.$m,Y=this.$M,N=s.weekdays,H=s.months,k=s.meridiem,w=function(B,z,J,Z){return B&&(B[z]||B(a,u))||J[z].slice(0,Z)},F=function(B){return d.s(D%12||12,B,"0")},K=k||function(B,z,J){var Z=B<12?"AM":"PM";return J?Z.toLowerCase():Z};return u.replace(E,function(B,z){return z||function(J){switch(J){case"YY":return String(a.$y).slice(-2);case"YYYY":return d.s(a.$y,4,"0");case"M":return Y+1;case"MM":return d.s(Y+1,2,"0");case"MMM":return w(s.monthsShort,Y,H,3);case"MMMM":return w(H,Y);case"D":return a.$D;case"DD":return d.s(a.$D,2,"0");case"d":return String(a.$W);case"dd":return w(s.weekdaysMin,a.$W,N,2);case"ddd":return w(s.weekdaysShort,a.$W,N,3);case"dddd":return N[a.$W];case"H":return String(D);case"HH":return d.s(D,2,"0");case"h":return F(1);case"hh":return F(2);case"a":return K(D,P,!0);case"A":return K(D,P,!1);case"m":return String(P);case"mm":return d.s(P,2,"0");case"s":return String(a.$s);case"ss":return d.s(a.$s,2,"0");case"SSS":return d.s(a.$ms,3,"0");case"Z":return l}return null}(B)||l.replace(":","")})},t.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},t.diff=function(e,a,s){var u,l=this,D=d.p(a),P=M(e),Y=(P.utcOffset()-this.utcOffset())*o,N=this-P,H=function(){return d.m(l,P)};switch(D){case p:u=H()/12;break;case g:u=H();break;case h:u=H()/3;break;case S:u=(N-Y)/6048e5;break;case x:u=(N-Y)/864e5;break;case i:u=N/b;break;case y:u=N/o;break;case f:u=N/j;break;default:u=N}return s?u:d.a(u)},t.daysInMonth=function(){return this.endOf(g).$D},t.$locale=function(){return A[this.$L]},t.locale=function(e,a){if(!e)return this.$L;var s=this.clone(),u=I(e,a,!0);return u&&(s.$L=u),s},t.clone=function(){return d.w(this.$d,this)},t.toDate=function(){return new Date(this.valueOf())},t.toJSON=function(){return this.isValid()?this.toISOString():null},t.toISOString=function(){return this.$d.toISOString()},t.toString=function(){return this.$d.toUTCString()},r}(),L=_.prototype;return M.prototype=L,[["$ms",C],["$s",f],["$m",y],["$H",i],["$W",x],["$M",g],["$y",p],["$D",c]].forEach(function(r){L[r[1]]=function(t){return this.$g(t,r[0],r[1])}}),M.extend=function(r,t){return r.$i||(r(t,_,M),r.$i=!0),M},M.locale=I,M.isDayjs=U,M.unix=function(r){return M(1e3*r)},M.en=A[O],M.Ls=A,M.p={},M})},"./node_modules/dayjs/locale/es.js":function(R,j,o){(function(b,C){R.exports=C(o("./node_modules/dayjs/dayjs.min.js"))})(this,function(b){"use strict";function C(i){return i&&typeof i=="object"&&"default"in i?i:{default:i}}var f=C(b),y={name:"es",monthsShort:"ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic".split("_"),weekdays:"domingo_lunes_martes_mi\xE9rcoles_jueves_viernes_s\xE1bado".split("_"),weekdaysShort:"dom._lun._mar._mi\xE9._jue._vie._s\xE1b.".split("_"),weekdaysMin:"do_lu_ma_mi_ju_vi_s\xE1".split("_"),months:"enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre".split("_"),weekStart:1,formats:{LT:"H:mm",LTS:"H:mm:ss",L:"DD/MM/YYYY",LL:"D [de] MMMM [de] YYYY",LLL:"D [de] MMMM [de] YYYY H:mm",LLLL:"dddd, D [de] MMMM [de] YYYY H:mm"},relativeTime:{future:"en %s",past:"hace %s",s:"unos segundos",m:"un minuto",mm:"%d minutos",h:"una hora",hh:"%d horas",d:"un d\xEDa",dd:"%d d\xEDas",M:"un mes",MM:"%d meses",y:"un a\xF1o",yy:"%d a\xF1os"},ordinal:function(i){return i+"\xBA"}};return f.default.locale(y,null,!0),y})},"./node_modules/dayjs/plugin/isSameOrAfter.js":function(R){(function(j,o){R.exports=o()})(this,function(){"use strict";return function(j,o){o.prototype.isSameOrAfter=function(b,C){return this.isSame(b,C)||this.isAfter(b,C)}}})},"./node_modules/dayjs/plugin/timezone.js":function(R){(function(j,o){R.exports=o()})(this,function(){"use strict";var j={year:0,month:1,day:2,hour:3,minute:4,second:5},o={};return function(b,C,f){var y,i=function(h,p,c){c===void 0&&(c={});var n=new Date(h),m=function(E,$){$===void 0&&($={});var v=$.timeZoneName||"short",T=E+"|"+v,O=o[T];return O||(O=new Intl.DateTimeFormat("en-US",{hour12:!1,timeZone:E,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",timeZoneName:v}),o[T]=O),O}(p,c);return m.formatToParts(n)},x=function(h,p){for(var c=i(h,p),n=[],m=0;m<c.length;m+=1){var E=c[m],$=E.type,v=E.value,T=j[$];T>=0&&(n[T]=parseInt(v,10))}var O=n[3],A=O===24?0:O,W=n[0]+"-"+n[1]+"-"+n[2]+" "+A+":"+n[4]+":"+n[5]+":000",U=+h;return(f.utc(W).valueOf()-(U-=U%1e3))/6e4},S=C.prototype;S.tz=function(h,p){h===void 0&&(h=y);var c=this.utcOffset(),n=this.toDate(),m=n.toLocaleString("en-US",{timeZone:h}),E=Math.round((n-new Date(m))/1e3/60),$=f(m,{locale:this.$L}).$set("millisecond",this.$ms).utcOffset(15*-Math.round(n.getTimezoneOffset()/15)-E,!0);if(p){var v=$.utcOffset();$=$.add(c-v,"minute")}return $.$x.$timezone=h,$},S.offsetName=function(h){var p=this.$x.$timezone||f.tz.guess(),c=i(this.valueOf(),p,{timeZoneName:h}).find(function(n){return n.type.toLowerCase()==="timezonename"});return c&&c.value};var g=S.startOf;S.startOf=function(h,p){if(!this.$x||!this.$x.$timezone)return g.call(this,h,p);var c=f(this.format("YYYY-MM-DD HH:mm:ss:SSS"),{locale:this.$L});return g.call(c,h,p).tz(this.$x.$timezone,!0)},f.tz=function(h,p,c){var n=c&&p,m=c||p||y,E=x(+f(),m);if(typeof h!="string")return f(h).tz(m);var $=function(A,W,U){var I=A-60*W*1e3,M=x(I,U);if(W===M)return[I,W];var d=x(I-=60*(M-W)*1e3,U);return M===d?[I,M]:[A-60*Math.min(M,d)*1e3,Math.max(M,d)]}(f.utc(h,n).valueOf(),E,m),v=$[0],T=$[1],O=f(v).utcOffset(T);return O.$x.$timezone=m,O},f.tz.guess=function(){return Intl.DateTimeFormat().resolvedOptions().timeZone},f.tz.setDefault=function(h){y=h}}})},"./node_modules/dayjs/plugin/updateLocale.js":function(R){(function(j,o){R.exports=o()})(this,function(){"use strict";return function(j,o,b){b.updateLocale=function(C,f){var y=b.Ls[C];if(y)return(f?Object.keys(f):[]).forEach(function(i){y[i]=f[i]}),y}}})},"./node_modules/dayjs/plugin/utc.js":function(R){(function(j,o){R.exports=o()})(this,function(){"use strict";var j="minute",o=/[+-]\d\d(?::?\d\d)?/g,b=/([+-]|\d\d)/g;return function(C,f,y){var i=f.prototype;y.utc=function(n){var m={date:n,utc:!0,args:arguments};return new f(m)},i.utc=function(n){var m=y(this.toDate(),{locale:this.$L,utc:!0});return n?m.add(this.utcOffset(),j):m},i.local=function(){return y(this.toDate(),{locale:this.$L,utc:!1})};var x=i.parse;i.parse=function(n){n.utc&&(this.$u=!0),this.$utils().u(n.$offset)||(this.$offset=n.$offset),x.call(this,n)};var S=i.init;i.init=function(){if(this.$u){var n=this.$d;this.$y=n.getUTCFullYear(),this.$M=n.getUTCMonth(),this.$D=n.getUTCDate(),this.$W=n.getUTCDay(),this.$H=n.getUTCHours(),this.$m=n.getUTCMinutes(),this.$s=n.getUTCSeconds(),this.$ms=n.getUTCMilliseconds()}else S.call(this)};var g=i.utcOffset;i.utcOffset=function(n,m){var E=this.$utils().u;if(E(n))return this.$u?0:E(this.$offset)?g.call(this):this.$offset;if(typeof n=="string"&&(n=function(O){O===void 0&&(O="");var A=O.match(o);if(!A)return null;var W=(""+A[0]).match(b)||["-",0,0],U=W[0],I=60*+W[1]+ +W[2];return I===0?0:U==="+"?I:-I}(n),n===null))return this;var $=Math.abs(n)<=16?60*n:n,v=this;if(m)return v.$offset=$,v.$u=n===0,v;if(n!==0){var T=this.$u?this.toDate().getTimezoneOffset():-1*this.utcOffset();(v=this.local().add($+T,j)).$offset=$,v.$x.$localOffset=T}else v=this.utc();return v};var h=i.format;i.format=function(n){var m=n||(this.$u?"YYYY-MM-DDTHH:mm:ss[Z]":"");return h.call(this,m)},i.valueOf=function(){var n=this.$utils().u(this.$offset)?0:this.$offset+(this.$x.$localOffset||this.$d.getTimezoneOffset());return this.$d.valueOf()-6e4*n},i.isUTC=function(){return!!this.$u},i.toISOString=function(){return this.toDate().toISOString()},i.toString=function(){return this.toDate().toUTCString()};var p=i.toDate;i.toDate=function(n){return n==="s"&&this.$offset?y(this.format("YYYY-MM-DD HH:mm:ss:SSS")).toDate():p.call(this)};var c=i.diff;i.diff=function(n,m,E){if(n&&this.$u===n.$u)return c.call(this,n,m,E);var $=this.local(),v=y(n).local();return c.call($,v,m,E)}}})}}]);
