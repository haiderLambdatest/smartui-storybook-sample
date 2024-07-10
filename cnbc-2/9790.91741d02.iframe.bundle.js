(globalThis.webpackChunkfirecracker=globalThis.webpackChunkfirecracker||[]).push([[9790],{"./node_modules/@babel/runtime/helpers/esm/extends.js":(g,h,s)=>{"use strict";s.r(h),s.d(h,{default:()=>P});function P(){return P=Object.assign?Object.assign.bind():function(j){for(var i=1;i<arguments.length;i++){var E=arguments[i];for(var u in E)Object.prototype.hasOwnProperty.call(E,u)&&(j[u]=E[u])}return j},P.apply(this,arguments)}},"./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js":(g,h,s)=>{"use strict";s.r(h),s.d(h,{default:()=>j});function P(i,E){if(i==null)return{};var u={},d=Object.keys(i),l,y;for(y=0;y<d.length;y++)l=d[y],!(E.indexOf(l)>=0)&&(u[l]=i[l]);return u}function j(i,E){if(i==null)return{};var u=P(i,E),d,l;if(Object.getOwnPropertySymbols){var y=Object.getOwnPropertySymbols(i);for(l=0;l<y.length;l++)d=y[l],!(E.indexOf(d)>=0)&&Object.prototype.propertyIsEnumerable.call(i,d)&&(u[d]=i[d])}return u}},"./components/CirclePackingChart/CirclePackingChart.js":(g,h,s)=>{"use strict";s.r(h),s.d(h,{default:()=>_});var P=s("./node_modules/@babel/runtime/helpers/esm/extends.js"),j=s("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),i=s("./node_modules/next/dist/compiled/react/index.js"),E=s("./node_modules/prop-types/index.js"),u=s.n(E),d=s("./node_modules/classnames/index.js"),l=s.n(d),y=s("./components/CirclePackingChart/CirclePackingChart.propsShape.js");const D=["chart","className","padding","rotation","strokeColor","strokeWidth"];var f=i.createElement;function _(n){let{chart:e,className:t,padding:r,rotation:a,strokeColor:m,strokeWidth:o}=n,c=(0,j.default)(n,D);const{parent:p,circles:v}=e,O=p.r,x=p.r*2,M={width:x,height:x,transform:`rotate(${a}deg)`,flex:`0 0 ${x}px`};return f("div",(0,P.default)({className:l()("br-100 container bg-gray-20 relative",t),style:M},c),f("svg",{className:"absolute aspect-ratio--object",viewBox:`0 0 ${x} ${x}`,width:x,height:x},v.map(C=>C.r-r/2<=0?null:f("circle",{key:C.id,transform:`translate(${C.x+O}, ${C.y+O})`,fill:C.fill,stroke:m,strokeWidth:o,r:C.r-r/2}))))}_.displayName="CirclePackingChart",_.defaultProps={className:null,padding:0,rotation:45,strokeColor:"#eff",strokeWidth:1},_.propTypes={className:u().string,chart:y.PackedCircles.isRequired,padding:u().number,strokeColor:u().string,strokeWidth:u().number,rotation:u().number}},"./components/VoteModeBubbles/VoteModeBubbles.js":(g,h,s)=>{"use strict";s.r(h),s.d(h,{default:()=>t});var P=s("./node_modules/styled-jsx/style.js"),j=s.n(P),i=s("./node_modules/next/dist/compiled/react/index.js"),E=s("./node_modules/prop-types/index.js"),u=s.n(E),d=s("./node_modules/classnames/index.js"),l=s.n(d),y=s("./node_modules/next/amp.js"),D=s.n(y),f=s("./components/CirclePackingChart/CirclePackingChart.js"),_=s("./components/CirclePackingChart/Circle.js"),n=s("./components/VoteModeBubbles/VoteModeBubbles.propsShape.js"),e=i.createElement;function t({bubbleWidth:r,bubbles:a,className:m,selected:o}){const c=(0,y.useAmp)();let p=r;if(p||(p=a.parent.r*2,o&&(p=a[o].parent.r*2)),!p)return e("div",{className:l()("circle-container relative"),style:{height:60}});const v={width:p};return c?e(i.Fragment,null,e(j(),{id:"3678399457"},[".mode--active{display:none;}",".mode--breakdown{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}",".circle-container{height:60px;}","@media screen and (min-width:758px){.mode--breakdown{display:none;}.mode--active{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}}"]),e("div",{style:v,className:"jsx-3678399457 "+(l()("circle-container relative",m)||"")},e("div",{className:"jsx-3678399457 df aspect-ratio--object items-center justify-around"},e("div",{"data-amp-bind-class":"activeVoteMode == 'candidates' ? 'mode--active' : 'dn'",className:"jsx-3678399457 dn"},e(f.default,{chart:a.candidates})),e("div",{"data-amp-bind-class":"activeVoteMode == 'counties' ? 'mode--active' : 'dn'",className:"jsx-3678399457 dn"},e(f.default,{chart:a.counties})),e("div",{"data-amp-bind-class":"activeVoteMode == null ? 'mode--active mode--breakdown' : 'dn mode--breakdown'",className:"jsx-3678399457 mode--active mode--breakdown"},e(_.default,{circle:a.parent}))))):e(i.Fragment,null,e(j(),{id:"2782439545"},[".circle-container.jsx-2782439545{height:60px;}",".mode.jsx-2782439545{display:none;}",".mode--total.jsx-2782439545{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}","@-webkit-keyframes zoomIn-jsx-2782439545{from{-webkit-transform:scale(0);-ms-transform:scale(0);transform:scale(0);}to{-webkit-transform:scale(1);-ms-transform:scale(1);transform:scale(1);}}","@keyframes zoomIn-jsx-2782439545{from{-webkit-transform:scale(0);-ms-transform:scale(0);transform:scale(0);}to{-webkit-transform:scale(1);-ms-transform:scale(1);transform:scale(1);}}","@media screen and (min-width:758px){.mode.jsx-2782439545{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;opacity:0;-webkit-transition:opacity 250ms;transition:opacity 250ms;}.mode.show.jsx-2782439545{opacity:1;}.mode--breakdown.show.jsx-2782439545{-webkit-animation:zoomIn-jsx-2782439545 300ms;animation:zoomIn-jsx-2782439545 300ms;}}"]),e("div",{style:v,className:"jsx-2782439545 "+(l()("circle-container relative",m)||"")},e("div",{"aria-hidden":o!=="candidates",className:"jsx-2782439545 "+(l()("mode aspect-ratio--object items-center justify-around mode--breakdown",{show:o==="candidates"})||"")},e(f.default,{className:"vote-mode-bubbles__chart",chart:a.candidates})),e("div",{"aria-hidden":o!=="counties",className:"jsx-2782439545 "+(l()("mode aspect-ratio--object items-center justify-around mode--breakdown",{show:o==="counties"})||"")},e(f.default,{className:"vote-mode-bubbles__chart",chart:a.counties})),e("div",{"aria-hidden":!!o,className:"jsx-2782439545 "+(l()("mode aspect-ratio--object items-center justify-around mode--total relative",{show:!o})||"")},e(_.default,{circle:a.parent}))))}t.defaultProps={className:null,selected:null,bubbleWidth:0},t.propTypes={bubbleWidth:u().number,bubbles:n.default.isRequired,className:u().string,selected:u().oneOf(["candidates","counties"])}},"./components/VoteModeBubbles/VoteModeBubbles.propsShape.js":(g,h,s)=>{"use strict";s.r(h),s.d(h,{default:()=>u});var P=s("./node_modules/prop-types/index.js"),j=s.n(P),i=s("./components/CirclePackingChart/CirclePackingChart.propsShape.js");const u=j().shape({candidates:i.PackedCircles.isRequired,counties:i.PackedCircles.isRequired,parent:i.PackedCirclesContainer.isRequired})},"./helpers/circlePacking.js":(g,h,s)=>{"use strict";s.r(h),s.d(h,{getMaxWidth:()=>n,getPackedCircles:()=>_,getProportionalCircles:()=>f});var P=s("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),j=s("./node_modules/d3-hierarchy/src/pack/siblings.js"),i=s("./node_modules/d3-hierarchy/src/pack/enclose.js"),E=s("./node_modules/lodash.orderby/index.js"),u=s.n(E),d=s("./node_modules/lodash.get/index.js"),l=s.n(d);function y(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(m){return Object.getOwnPropertyDescriptor(e,m).enumerable})),r.push.apply(r,a)}return r}function D(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?y(Object(r),!0).forEach(function(a){(0,P.default)(e,a,r[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):y(Object(r)).forEach(function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(r,a))})}return e}function f({data:e,id:t=o=>o.id,value:r=o=>o.value,fill:a="#eeb900",maxWidth:m=60}){const o=Math.max(...e.map(c=>r(c)));return e.map(c=>{const p=r(c)/o,v=m/2*p;return{id:t(c),fill:a,r:Number.isFinite(v)?v:0}})}function _({data:e,fill:t=(c,p)=>p?"#ebebeb":"#efefef",id:r=c=>c.id,value:a=c=>c.value,children:m=c=>c.children,maxWidth:o=60}){const p=e.map(x=>{const M=m(x,!0)||[];return{id:r(x,!0),fill:t(x,!0),children:M.map(C=>({id:r(C,!1),r:a(C),fill:t(C,!1)}))}}).map(x=>{const M=u()(x.children,["r"],["desc"]);(0,j.default)(M);const C=(0,i.default)(M);return{circles:M,parent:D(D({},C),{},{id:x.id})}}),v=Math.max(...p.map(x=>x.parent.r)),O=o/2/v;return Number.isFinite(O)?p.map(x=>(x.parent.r*=O,x.circles.forEach(M=>{M.r*=O,M.x*=O,M.y*=O}),x)):p}function n(e){return Math.max(l()(e,"parent.r",0),l()(e,"candidates.parent.r",0),l()(e,"counties.parent.r",0))*2}},"./node_modules/classnames/index.js":(g,h)=>{var s,P;/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(){"use strict";var j={}.hasOwnProperty;function i(){for(var d="",l=0;l<arguments.length;l++){var y=arguments[l];y&&(d=u(d,E(y)))}return d}function E(d){if(typeof d=="string"||typeof d=="number")return d;if(typeof d!="object")return"";if(Array.isArray(d))return i.apply(null,d);if(d.toString!==Object.prototype.toString&&!d.toString.toString().includes("[native code]"))return d.toString();var l="";for(var y in d)j.call(d,y)&&d[y]&&(l=u(l,y));return l}function u(d,l){return l?d?d+" "+l:d+l:d}g.exports?(i.default=i,g.exports=i):(s=[],P=function(){return i}.apply(h,s),P!==void 0&&(g.exports=P))})()},"./node_modules/d3-hierarchy/src/array.js":(g,h,s)=>{"use strict";s.r(h),s.d(h,{default:()=>P,shuffle:()=>j});function P(i){return typeof i=="object"&&"length"in i?i:Array.from(i)}function j(i,E){let u=i.length,d,l;for(;u;)l=E()*u--|0,d=i[u],i[u]=i[l],i[l]=d;return i}},"./node_modules/d3-hierarchy/src/lcg.js":(g,h,s)=>{"use strict";s.r(h),s.d(h,{default:()=>E});const P=1664525,j=1013904223,i=4294967296;function E(){let u=1;return()=>(u=(P*u+j)%i)/i}},"./node_modules/d3-hierarchy/src/pack/enclose.js":(g,h,s)=>{"use strict";s.r(h),s.d(h,{default:()=>i,packEncloseRandom:()=>E});var P=s("./node_modules/d3-hierarchy/src/array.js"),j=s("./node_modules/d3-hierarchy/src/lcg.js");function i(e){return E(e,(0,j.default)())}function E(e,t){for(var r=0,a=(e=(0,P.shuffle)(Array.from(e),t)).length,m=[],o,c;r<a;)o=e[r],c&&l(c,o)?++r:(c=D(m=u(m,o)),r=0);return c}function u(e,t){var r,a;if(y(t,e))return[t];for(r=0;r<e.length;++r)if(d(t,e[r])&&y(_(e[r],t),e))return[e[r],t];for(r=0;r<e.length-1;++r)for(a=r+1;a<e.length;++a)if(d(_(e[r],e[a]),t)&&d(_(e[r],t),e[a])&&d(_(e[a],t),e[r])&&y(n(e[r],e[a],t),e))return[e[r],e[a],t];throw new Error}function d(e,t){var r=e.r-t.r,a=t.x-e.x,m=t.y-e.y;return r<0||r*r<a*a+m*m}function l(e,t){var r=e.r-t.r+Math.max(e.r,t.r,1)*1e-9,a=t.x-e.x,m=t.y-e.y;return r>0&&r*r>a*a+m*m}function y(e,t){for(var r=0;r<t.length;++r)if(!l(e,t[r]))return!1;return!0}function D(e){switch(e.length){case 1:return f(e[0]);case 2:return _(e[0],e[1]);case 3:return n(e[0],e[1],e[2])}}function f(e){return{x:e.x,y:e.y,r:e.r}}function _(e,t){var r=e.x,a=e.y,m=e.r,o=t.x,c=t.y,p=t.r,v=o-r,O=c-a,x=p-m,M=Math.sqrt(v*v+O*O);return{x:(r+o+v/M*x)/2,y:(a+c+O/M*x)/2,r:(M+m+p)/2}}function n(e,t,r){var a=e.x,m=e.y,o=e.r,c=t.x,p=t.y,v=t.r,O=r.x,x=r.y,M=r.r,C=a-c,b=a-O,I=m-p,L=m-x,N=v-o,S=M-o,w=a*a+m*m-o*o,V=w-c*c-p*p+v*v,F=w-O*O-x*x+M*M,A=b*I-C*L,W=(I*F-L*V)/(A*2)-a,R=(L*N-I*S)/A,T=(b*V-C*F)/(A*2)-m,k=(C*S-b*N)/A,U=R*R+k*k-1,K=2*(o+W*R+T*k),$=W*W+T*T-o*o,B=-(Math.abs(U)>1e-6?(K+Math.sqrt(K*K-4*U*$))/(2*U):$/K);return{x:a+W+R*B,y:m+T+k*B,r:B}}},"./node_modules/d3-hierarchy/src/pack/siblings.js":(g,h,s)=>{"use strict";s.r(h),s.d(h,{default:()=>D,packSiblingsRandom:()=>y});var P=s("./node_modules/d3-hierarchy/src/array.js"),j=s("./node_modules/d3-hierarchy/src/lcg.js"),i=s("./node_modules/d3-hierarchy/src/pack/enclose.js");function E(f,_,n){var e=f.x-_.x,t,r,a=f.y-_.y,m,o,c=e*e+a*a;c?(r=_.r+n.r,r*=r,o=f.r+n.r,o*=o,r>o?(t=(c+o-r)/(2*c),m=Math.sqrt(Math.max(0,o/c-t*t)),n.x=f.x-t*e-m*a,n.y=f.y-t*a+m*e):(t=(c+r-o)/(2*c),m=Math.sqrt(Math.max(0,r/c-t*t)),n.x=_.x+t*e-m*a,n.y=_.y+t*a+m*e)):(n.x=_.x+n.r,n.y=_.y)}function u(f,_){var n=f.r+_.r-1e-6,e=_.x-f.x,t=_.y-f.y;return n>0&&n*n>e*e+t*t}function d(f){var _=f._,n=f.next._,e=_.r+n.r,t=(_.x*n.r+n.x*_.r)/e,r=(_.y*n.r+n.y*_.r)/e;return t*t+r*r}function l(f){this._=f,this.next=null,this.previous=null}function y(f,_){if(!(r=(f=(0,P.default)(f)).length))return 0;var n,e,t,r,a,m,o,c,p,v,O;if(n=f[0],n.x=0,n.y=0,!(r>1))return n.r;if(e=f[1],n.x=-e.r,e.x=n.r,e.y=0,!(r>2))return n.r+e.r;E(e,n,t=f[2]),n=new l(n),e=new l(e),t=new l(t),n.next=t.previous=e,e.next=n.previous=t,t.next=e.previous=n;e:for(o=3;o<r;++o){E(n._,e._,t=f[o]),t=new l(t),c=e.next,p=n.previous,v=e._.r,O=n._.r;do if(v<=O){if(u(c._,t._)){e=c,n.next=e,e.previous=n,--o;continue e}v+=c._.r,c=c.next}else{if(u(p._,t._)){n=p,n.next=e,e.previous=n,--o;continue e}O+=p._.r,p=p.previous}while(c!==p.next);for(t.previous=n,t.next=e,n.next=e.previous=e=t,a=d(n);(t=t.next)!==e;)(m=d(t))<a&&(n=t,a=m);e=n.next}for(n=[e._],t=e;(t=t.next)!==e;)n.push(t._);for(t=(0,i.packEncloseRandom)(n,_),o=0;o<r;++o)n=f[o],n.x-=t.x,n.y-=t.y;return t.r}function D(f){return y(f,(0,j.default)()),f}}}]);
