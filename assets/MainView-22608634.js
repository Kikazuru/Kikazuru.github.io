import{p as M,m as A,h as ae,i as le,j as P,k as ne,t as T,s as B,l as Ye,n as g,q as oe,v as D,a as n,x as O,_ as ze,o as U,f as Z,w as _,y as te,I as Fe,z as re,F as se,A as $,B as Ie,e as W,C as Oe,D as R,E as ue,G as ie,H as ce,J as q,K as We,d as de,L as Ue,M as H,g as G,N as K,O as Xe,P as qe,Q as je,R as Ze,T as Ge,S as Ke,u as Je,b as Qe,r as Me,U as et,V as tt,W as at,c as lt}from"./index-0630ad55.js";import{m as ve,c as me,d as Q,u as X,e as ge,f as fe,g as ee,h as nt,i as ot,j as rt,k as st,l as ut,n as J,o as j,V as Ee,p as it,q as ct,b as dt,r as vt,t as mt,a as gt}from"./index-7918bc3c.js";import{m as Y}from"./tag-0b41015d.js";import{u as he,m as Pe,a as ft,b as ht,c as bt,V as z,d as xe,e as yt,f as Vt,g as St,h as wt,i as kt,j as _t,k as pt,l as xt}from"./scopeId-32ad41e8.js";const Bt=M({app:Boolean,color:String,height:{type:[Number,String],default:"auto"},...ve(),...A(),...me(),...ae(),...Q(),...Y({tag:"footer"}),...le()},"VFooter"),Ct=P()({name:"VFooter",props:Bt(),setup(e,r){let{slots:t}=r;const{themeClasses:o}=ne(e),{backgroundColorClasses:l,backgroundColorStyles:a}=X(T(e,"color")),{borderClasses:u}=ge(e),{elevationClasses:f}=fe(e),{roundedClasses:v}=ee(e),i=B(32),{resizeRef:s}=Ye(c=>{c.length&&(i.value=c[0].target.clientHeight)}),d=g(()=>e.height==="auto"?i.value:parseInt(e.height,10)),{layoutItemStyles:m}=oe({id:e.name,order:g(()=>parseInt(e.order,10)),position:g(()=>"bottom"),layoutSize:d,elementSize:g(()=>e.height==="auto"?void 0:d.value),active:g(()=>e.app),absolute:T(e,"absolute")});return D(()=>n(e.tag,{ref:s,class:["v-footer",o.value,l.value,u.value,f.value,v.value,e.class],style:[a.value,e.app?m.value:{height:O(e.height)},e.style]},t)),{}}}),Tt={},It=te("div",{class:"text-caption text-grey"}," © 2023 PT Softorb Technology Indonesia. Syarat dan Ketentuan Berlaku. ",-1);function Mt(e,r){return U(),Z(Ct,{app:"",absolute:""},{default:_(()=>[It]),_:1})}const Et=ze(Tt,[["render",Mt]]);const Pt=M({divider:[Number,String],...A()},"VBreadcrumbsDivider"),Nt=P()({name:"VBreadcrumbsDivider",props:Pt(),setup(e,r){let{slots:t}=r;return D(()=>{var o;return n("li",{class:["v-breadcrumbs-divider",e.class],style:e.style},[((o=t==null?void 0:t.default)==null?void 0:o.call(t))??e.divider])}),{}}}),Ht=M({active:Boolean,activeClass:String,activeColor:String,color:String,disabled:Boolean,title:String,...A(),...nt(),...Y({tag:"li"})},"VBreadcrumbsItem"),Ne=P()({name:"VBreadcrumbsItem",props:Ht(),setup(e,r){let{slots:t,attrs:o}=r;const l=ot(e,o),a=g(()=>{var i;return e.active||((i=l.isActive)==null?void 0:i.value)}),u=g(()=>a.value?e.activeColor:e.color),{textColorClasses:f,textColorStyles:v}=rt(u);return D(()=>n(e.tag,{class:["v-breadcrumbs-item",{"v-breadcrumbs-item--active":a.value,"v-breadcrumbs-item--disabled":e.disabled,[`${e.activeClass}`]:a.value&&e.activeClass},f.value,e.class],style:[v.value,e.style],"aria-current":a.value?"page":void 0},{default:()=>{var i,s;return[l.isLink.value?n("a",{class:"v-breadcrumbs-item--link",href:l.href.value,"aria-current":a.value?"page":void 0,onClick:l.navigate},[((s=t.default)==null?void 0:s.call(t))??e.title]):((i=t.default)==null?void 0:i.call(t))??e.title]}})),{}}}),Dt=M({activeClass:String,activeColor:String,bgColor:String,color:String,disabled:Boolean,divider:{type:String,default:"/"},icon:Fe,items:{type:Array,default:()=>[]},...A(),...st(),...Q(),...Y({tag:"ul"})},"VBreadcrumbs"),Rt=P()({name:"VBreadcrumbs",props:Dt(),setup(e,r){let{slots:t}=r;const{backgroundColorClasses:o,backgroundColorStyles:l}=X(T(e,"bgColor")),{densityClasses:a}=ut(e),{roundedClasses:u}=ee(e);re({VBreadcrumbsDivider:{divider:T(e,"divider")},VBreadcrumbsItem:{activeClass:T(e,"activeClass"),activeColor:T(e,"activeColor"),color:T(e,"color"),disabled:T(e,"disabled")}});const f=g(()=>e.items.map(v=>typeof v=="string"?{item:{title:v},raw:v}:{item:v,raw:v}));return D(()=>{const v=!!(t.prepend||e.icon);return n(e.tag,{class:["v-breadcrumbs",o.value,a.value,u.value,e.class],style:[l.value,e.style]},{default:()=>{var i;return[v&&n("li",{key:"prepend",class:"v-breadcrumbs__prepend"},[t.prepend?n(j,{key:"prepend-defaults",disabled:!e.icon,defaults:{VIcon:{icon:e.icon,start:!0}}},t.prepend):n(J,{key:"prepend-icon",start:!0,icon:e.icon},null)]),f.value.map((s,d,m)=>{var V;let{item:c,raw:w}=s;return n(se,null,[((V=t.item)==null?void 0:V.call(t,{item:c,index:d}))??n(Ne,$({key:d,disabled:d>=m.length-1},typeof c=="string"?{title:c}:c),{default:t.title?()=>{var p;return(p=t.title)==null?void 0:p.call(t,{item:c,index:d})}:void 0}),d<m.length-1&&n(Nt,null,{default:t.divider?()=>{var p;return(p=t.divider)==null?void 0:p.call(t,{item:w,index:d})}:void 0})])}),(i=t.default)==null?void 0:i.call(t)]}})}),{}}});const Lt=M({text:String,...A(),...Y()},"VToolbarTitle"),At=P()({name:"VToolbarTitle",props:Lt(),setup(e,r){let{slots:t}=r;return D(()=>{const o=!!(t.default||t.text||e.text);return n(e.tag,{class:["v-toolbar-title",e.class],style:e.style},{default:()=>{var l;return[o&&n("div",{class:"v-toolbar-title__placeholder"},[t.text?t.text():e.text,(l=t.default)==null?void 0:l.call(t)])]}})}),{}}}),$t=[null,"prominent","default","comfortable","compact"],He=M({absolute:Boolean,collapse:Boolean,color:String,density:{type:String,default:"default",validator:e=>$t.includes(e)},extended:Boolean,extensionHeight:{type:[Number,String],default:48},flat:Boolean,floating:Boolean,height:{type:[Number,String],default:64},image:String,title:String,...ve(),...A(),...me(),...Q(),...Y({tag:"header"}),...le()},"VToolbar"),Be=P()({name:"VToolbar",props:He(),setup(e,r){var c;let{slots:t}=r;const{backgroundColorClasses:o,backgroundColorStyles:l}=X(T(e,"color")),{borderClasses:a}=ge(e),{elevationClasses:u}=fe(e),{roundedClasses:f}=ee(e),{themeClasses:v}=ne(e),{rtlClasses:i}=Ie(),s=B(!!(e.extended||(c=t.extension)!=null&&c.call(t))),d=g(()=>parseInt(Number(e.height)+(e.density==="prominent"?Number(e.height):0)-(e.density==="comfortable"?8:0)-(e.density==="compact"?16:0),10)),m=g(()=>s.value?parseInt(Number(e.extensionHeight)+(e.density==="prominent"?Number(e.extensionHeight):0)-(e.density==="comfortable"?4:0)-(e.density==="compact"?8:0),10):0);return re({VBtn:{variant:"text"}}),D(()=>{var y;const w=!!(e.title||t.title),V=!!(t.image||e.image),p=(y=t.extension)==null?void 0:y.call(t);return s.value=!!(e.extended||p),n(e.tag,{class:["v-toolbar",{"v-toolbar--absolute":e.absolute,"v-toolbar--collapse":e.collapse,"v-toolbar--flat":e.flat,"v-toolbar--floating":e.floating,[`v-toolbar--density-${e.density}`]:!0},o.value,a.value,u.value,f.value,v.value,i.value,e.class],style:[l.value,e.style]},{default:()=>[V&&n("div",{key:"image",class:"v-toolbar__image"},[t.image?n(j,{key:"image-defaults",disabled:!e.image,defaults:{VImg:{cover:!0,src:e.image}}},t.image):n(Ee,{key:"image-img",cover:!0,src:e.image},null)]),n(j,{defaults:{VTabs:{height:O(d.value)}}},{default:()=>{var C,x,E;return[n("div",{class:"v-toolbar__content",style:{height:O(d.value)}},[t.prepend&&n("div",{class:"v-toolbar__prepend"},[(C=t.prepend)==null?void 0:C.call(t)]),w&&n(At,{key:"title",text:e.title},{text:t.title}),(x=t.default)==null?void 0:x.call(t),t.append&&n("div",{class:"v-toolbar__append"},[(E=t.append)==null?void 0:E.call(t)])])]}}),n(j,{defaults:{VTabs:{height:O(m.value)}}},{default:()=>[n(it,null,{default:()=>[s.value&&n("div",{class:"v-toolbar__extension",style:{height:O(m.value)}},[p])]})]})]})}),{contentHeight:d,extensionHeight:m}}}),Yt=M({scrollTarget:{type:String},scrollThreshold:{type:[String,Number],default:300}},"scroll");function zt(e){let r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{canScroll:t}=r;let o=0;const l=W(null),a=B(0),u=B(0),f=B(0),v=B(!1),i=B(!1),s=g(()=>Number(e.scrollThreshold)),d=g(()=>Oe((s.value-a.value)/s.value||0)),m=()=>{const c=l.value;!c||t&&!t.value||(o=a.value,a.value="window"in c?c.pageYOffset:c.scrollTop,i.value=a.value<o,f.value=Math.abs(a.value-s.value))};return R(i,()=>{u.value=u.value||a.value}),R(v,()=>{u.value=0}),ue(()=>{R(()=>e.scrollTarget,c=>{var V;const w=c?document.querySelector(c):window;w&&w!==l.value&&((V=l.value)==null||V.removeEventListener("scroll",m),l.value=w,l.value.addEventListener("scroll",m,{passive:!0}))},{immediate:!0})}),ie(()=>{var c;(c=l.value)==null||c.removeEventListener("scroll",m)}),t&&R(t,m,{immediate:!0}),{scrollThreshold:s,currentScroll:a,currentThreshold:f,isScrollActive:v,scrollRatio:d,isScrollingUp:i,savedScroll:u}}const Ft=M({scrollBehavior:String,modelValue:{type:Boolean,default:!0},location:{type:String,default:"top",validator:e=>["top","bottom"].includes(e)},...He(),...ae(),...Yt(),height:{type:[Number,String],default:64}},"VAppBar"),Ot=P()({name:"VAppBar",props:Ft(),emits:{"update:modelValue":e=>!0},setup(e,r){let{slots:t}=r;const o=W(),l=ce(e,"modelValue"),a=g(()=>{var C;const y=new Set(((C=e.scrollBehavior)==null?void 0:C.split(" "))??[]);return{hide:y.has("hide"),inverted:y.has("inverted"),collapse:y.has("collapse"),elevate:y.has("elevate"),fadeImage:y.has("fade-image")}}),u=g(()=>{const y=a.value;return y.hide||y.inverted||y.collapse||y.elevate||y.fadeImage||!l.value}),{currentScroll:f,scrollThreshold:v,isScrollingUp:i,scrollRatio:s}=zt(e,{canScroll:u}),d=g(()=>e.collapse||a.value.collapse&&(a.value.inverted?s.value>0:s.value===0)),m=g(()=>e.flat||a.value.elevate&&(a.value.inverted?f.value>0:f.value===0)),c=g(()=>a.value.fadeImage?a.value.inverted?1-s.value:s.value:void 0),w=g(()=>{var x,E;if(a.value.hide&&a.value.inverted)return 0;const y=((x=o.value)==null?void 0:x.contentHeight)??0,C=((E=o.value)==null?void 0:E.extensionHeight)??0;return y+C});q(g(()=>!!e.scrollBehavior),()=>{We(()=>{a.value.hide?a.value.inverted?l.value=f.value>v.value:l.value=i.value||f.value<v.value:l.value=!0})});const{ssrBootStyles:V}=he(),{layoutItemStyles:p}=oe({id:e.name,order:g(()=>parseInt(e.order,10)),position:T(e,"location"),layoutSize:w,elementSize:B(void 0),active:l,absolute:T(e,"absolute")});return D(()=>{const y=Be.filterProps(e);return n(Be,$({ref:o,class:["v-app-bar",{"v-app-bar--bottom":e.location==="bottom"},e.class],style:[{...p.value,"--v-toolbar-image-opacity":c.value,height:void 0,...V.value},e.style]},y,{collapse:d.value,flat:m.value}),t)}),{}}}),Wt=M({...ct({icon:"$menu",variant:"text"})},"VAppBarNavIcon"),Ut=P()({name:"VAppBarNavIcon",props:Wt(),setup(e,r){let{slots:t}=r;return D(()=>n(dt,$(e,{class:["v-app-bar-nav-icon"]}),t)),{}}}),Xt=de({__name:"BreadcrumbApp",props:{modelValue:{type:Boolean}},emits:["update:modelValue"],setup(e,{emit:r}){const t=Ue(),o=g(()=>t.breadcrumb),l=e,a=r,u=g({get(){return l.modelValue},set(f){a("update:modelValue",f)}});return(f,v)=>(U(),Z(Ot,{density:"compact",elevation:"0",order:"1"},{default:_(()=>[n(Ut,{class:"d-flex d-lg-none",onClick:v[0]||(v[0]=i=>u.value=!u.value)}),n(Rt,{style:{position:"sticky",top:0},class:"flex-wrap text-body-2",items:o.value},{item:_(({item:i,index:s})=>[n(H(Ne),{disabled:s==o.value.length-1||i.disabled,to:{name:i.to}},{default:_(()=>[G(K(i.title),1)]),_:2},1032,["disabled","to"])]),divider:_(()=>[n(J,null,{default:_(()=>[G(K(H(Pe)),1)]),_:1})]),_:1},8,["items"])]),_:1}))}}),qt="/assets/logo-75b7d69f.png",jt=M({disabled:Boolean,modelValue:{type:Boolean,default:void 0},...ft()},"VHover"),Zt=P()({name:"VHover",props:jt(),emits:{"update:modelValue":e=>!0},setup(e,r){let{slots:t}=r;const o=ce(e,"modelValue"),{runOpenDelay:l,runCloseDelay:a}=ht(e,u=>!e.disabled&&(o.value=u));return()=>{var u;return(u=t.default)==null?void 0:u.call(t,{isHovering:o.value,props:{onMouseenter:l,onMouseleave:a}})}}});function Gt(e){let{rootEl:r,isSticky:t,layoutItemStyles:o}=e;const l=B(!1),a=B(0),u=g(()=>{const i=typeof l.value=="boolean"?"top":l.value;return[t.value?{top:"auto",bottom:"auto",height:void 0}:void 0,l.value?{[i]:O(a.value)}:{top:o.value.top}]});ue(()=>{R(t,i=>{i?window.addEventListener("scroll",v,{passive:!0}):window.removeEventListener("scroll",v)},{immediate:!0})}),ie(()=>{window.removeEventListener("scroll",v)});let f=0;function v(){const i=f>window.scrollY?"up":"down",s=r.value.getBoundingClientRect(),d=parseFloat(o.value.top??0),m=window.scrollY-Math.max(0,a.value-d),c=s.height+Math.max(a.value,d)-window.scrollY-window.innerHeight,w=parseFloat(getComputedStyle(r.value).getPropertyValue("--v-body-scroll-y"))||0;s.height<window.innerHeight-d?(l.value="top",a.value=d):i==="up"&&l.value==="bottom"||i==="down"&&l.value==="top"?(a.value=window.scrollY+s.top-w,l.value=!0):i==="down"&&c<=0?(a.value=0,l.value="bottom"):i==="up"&&m<=0&&(w?l.value!=="top"&&(a.value=-m+w+d,l.value="top"):(a.value=s.top+m,l.value="top")),f=window.scrollY}return{isStuck:l,stickyStyles:u}}const Kt=100,Jt=20;function Ce(e){const r=1.41421356237;return(e<0?-1:1)*Math.sqrt(Math.abs(e))*r}function Te(e){if(e.length<2)return 0;if(e.length===2)return e[1].t===e[0].t?0:(e[1].d-e[0].d)/(e[1].t-e[0].t);let r=0;for(let t=e.length-1;t>0;t--){if(e[t].t===e[t-1].t)continue;const o=Ce(r),l=(e[t].d-e[t-1].d)/(e[t].t-e[t-1].t);r+=(l-o)*Math.abs(l),t===e.length-1&&(r*=.5)}return Ce(r)*1e3}function Qt(){const e={};function r(l){Array.from(l.changedTouches).forEach(a=>{(e[a.identifier]??(e[a.identifier]=new Xe(Jt))).push([l.timeStamp,a])})}function t(l){Array.from(l.changedTouches).forEach(a=>{delete e[a.identifier]})}function o(l){var i;const a=(i=e[l])==null?void 0:i.values().reverse();if(!a)throw new Error(`No samples for touch id ${l}`);const u=a[0],f=[],v=[];for(const s of a){if(u[0]-s[0]>Kt)break;f.push({t:s[0],d:s[1].clientX}),v.push({t:s[0],d:s[1].clientY})}return{x:Te(f),y:Te(v),get direction(){const{x:s,y:d}=this,[m,c]=[Math.abs(s),Math.abs(d)];return m>c&&s>=0?"right":m>c&&s<=0?"left":c>m&&d>=0?"down":c>m&&d<=0?"up":ea()}}}return{addMovement:r,endTouch:t,getVelocity:o}}function ea(){throw new Error}function ta(e){let{isActive:r,isTemporary:t,width:o,touchless:l,position:a}=e;ue(()=>{window.addEventListener("touchstart",y,{passive:!0}),window.addEventListener("touchmove",C,{passive:!1}),window.addEventListener("touchend",x,{passive:!0})}),ie(()=>{window.removeEventListener("touchstart",y),window.removeEventListener("touchmove",C),window.removeEventListener("touchend",x)});const u=g(()=>["left","right"].includes(a.value)),{addMovement:f,endTouch:v,getVelocity:i}=Qt();let s=!1;const d=B(!1),m=B(0),c=B(0);let w;function V(b,h){return(a.value==="left"?b:a.value==="right"?document.documentElement.clientWidth-b:a.value==="top"?b:a.value==="bottom"?document.documentElement.clientHeight-b:F())-(h?o.value:0)}function p(b){let h=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;const S=a.value==="left"?(b-c.value)/o.value:a.value==="right"?(document.documentElement.clientWidth-b-c.value)/o.value:a.value==="top"?(b-c.value)/o.value:a.value==="bottom"?(document.documentElement.clientHeight-b-c.value)/o.value:F();return h?Math.max(0,Math.min(1,S)):S}function y(b){if(l.value)return;const h=b.changedTouches[0].clientX,S=b.changedTouches[0].clientY,k=25,N=a.value==="left"?h<k:a.value==="right"?h>document.documentElement.clientWidth-k:a.value==="top"?S<k:a.value==="bottom"?S>document.documentElement.clientHeight-k:F(),L=r.value&&(a.value==="left"?h<o.value:a.value==="right"?h>document.documentElement.clientWidth-o.value:a.value==="top"?S<o.value:a.value==="bottom"?S>document.documentElement.clientHeight-o.value:F());(N||L||r.value&&t.value)&&(s=!0,w=[h,S],c.value=V(u.value?h:S,r.value),m.value=p(u.value?h:S),v(b),f(b))}function C(b){const h=b.changedTouches[0].clientX,S=b.changedTouches[0].clientY;if(s){if(!b.cancelable){s=!1;return}const N=Math.abs(h-w[0]),L=Math.abs(S-w[1]);(u.value?N>L&&N>3:L>N&&L>3)?(d.value=!0,s=!1):(u.value?L:N)>3&&(s=!1)}if(!d.value)return;b.preventDefault(),f(b);const k=p(u.value?h:S,!1);m.value=Math.max(0,Math.min(1,k)),k>1?c.value=V(u.value?h:S,!0):k<0&&(c.value=V(u.value?h:S,!1))}function x(b){if(s=!1,!d.value)return;f(b),d.value=!1;const h=i(b.changedTouches[0].identifier),S=Math.abs(h.x),k=Math.abs(h.y);(u.value?S>k&&S>400:k>S&&k>3)?r.value=h.direction===({left:"right",right:"left",top:"down",bottom:"up"}[a.value]||F()):r.value=m.value>.5}const E=g(()=>d.value?{transform:a.value==="left"?`translateX(calc(-100% + ${m.value*o.value}px))`:a.value==="right"?`translateX(calc(100% - ${m.value*o.value}px))`:a.value==="top"?`translateY(calc(-100% + ${m.value*o.value}px))`:a.value==="bottom"?`translateY(calc(100% - ${m.value*o.value}px))`:F(),transition:"none"}:void 0);return{isDragging:d,dragProgress:m,dragStyles:E}}function F(){throw new Error}const aa=["start","end","left","right","top","bottom"],la=M({color:String,disableResizeWatcher:Boolean,disableRouteWatcher:Boolean,expandOnHover:Boolean,floating:Boolean,modelValue:{type:Boolean,default:null},permanent:Boolean,rail:{type:Boolean,default:null},railWidth:{type:[Number,String],default:56},scrim:{type:[Boolean,String],default:!0},image:String,temporary:Boolean,touchless:Boolean,width:{type:[Number,String],default:256},location:{type:String,default:"start",validator:e=>aa.includes(e)},sticky:Boolean,...ve(),...A(),...qe(),...me(),...ae(),...Q(),...Y({tag:"nav"}),...le()},"VNavigationDrawer"),na=P()({name:"VNavigationDrawer",props:la(),emits:{"update:modelValue":e=>!0,"update:rail":e=>!0},setup(e,r){let{attrs:t,emit:o,slots:l}=r;const{isRtl:a}=Ie(),{themeClasses:u}=ne(e),{borderClasses:f}=ge(e),{backgroundColorClasses:v,backgroundColorStyles:i}=X(T(e,"color")),{elevationClasses:s}=fe(e),{displayClasses:d,mobile:m}=je(e),{roundedClasses:c}=ee(e),w=vt(),V=ce(e,"modelValue",null,I=>!!I),{ssrBootStyles:p}=he(),{scopeId:y}=bt(),C=W(),x=B(!1),E=g(()=>e.rail&&e.expandOnHover&&x.value?Number(e.width):Number(e.rail?e.railWidth:e.width)),b=g(()=>mt(e.location,a.value)),h=g(()=>!e.permanent&&(m.value||e.temporary)),S=g(()=>e.sticky&&!h.value&&b.value!=="bottom");q(()=>e.expandOnHover&&e.rail!=null,()=>{R(x,I=>o("update:rail",!I))}),q(()=>!e.disableResizeWatcher,()=>{R(h,I=>!e.permanent&&Ke(()=>V.value=!I))}),q(()=>!e.disableRouteWatcher&&!!w,()=>{R(w.currentRoute,()=>h.value&&(V.value=!1))}),R(()=>e.permanent,I=>{I&&(V.value=!0)}),Ze(()=>{e.modelValue!=null||h.value||(V.value=e.permanent||!m.value)});const{isDragging:k,dragProgress:N,dragStyles:L}=ta({isActive:V,isTemporary:h,width:E,touchless:T(e,"touchless"),position:b}),be=g(()=>{const I=h.value?0:e.rail&&e.expandOnHover?Number(e.railWidth):E.value;return k.value?I*N.value:I}),{layoutItemStyles:ye,layoutItemScrimStyles:De}=oe({id:e.name,order:g(()=>parseInt(e.order,10)),position:b,layoutSize:be,elementSize:E,active:g(()=>V.value||k.value),disableTransitions:g(()=>k.value),absolute:g(()=>e.absolute||S.value&&typeof Ve.value!="string")}),{isStuck:Ve,stickyStyles:Re}=Gt({rootEl:C,isSticky:S,layoutItemStyles:ye}),Se=X(g(()=>typeof e.scrim=="string"?e.scrim:null)),Le=g(()=>({...k.value?{opacity:N.value*.2,transition:"none"}:void 0,...De.value}));re({VList:{bgColor:"transparent"}});function Ae(){x.value=!0}function $e(){x.value=!1}return D(()=>{const I=l.image||e.image;return n(se,null,[n(e.tag,$({ref:C,onMouseenter:Ae,onMouseleave:$e,class:["v-navigation-drawer",`v-navigation-drawer--${b.value}`,{"v-navigation-drawer--expand-on-hover":e.expandOnHover,"v-navigation-drawer--floating":e.floating,"v-navigation-drawer--is-hovering":x.value,"v-navigation-drawer--rail":e.rail,"v-navigation-drawer--temporary":h.value,"v-navigation-drawer--active":V.value,"v-navigation-drawer--sticky":S.value},u.value,v.value,f.value,d.value,s.value,c.value,e.class],style:[i.value,ye.value,L.value,p.value,Re.value,e.style]},y,t),{default:()=>{var we,ke,_e,pe;return[I&&n("div",{key:"image",class:"v-navigation-drawer__img"},[l.image?(we=l.image)==null?void 0:we.call(l,{image:e.image}):n("img",{src:e.image,alt:""},null)]),l.prepend&&n("div",{class:"v-navigation-drawer__prepend"},[(ke=l.prepend)==null?void 0:ke.call(l)]),n("div",{class:"v-navigation-drawer__content"},[(_e=l.default)==null?void 0:_e.call(l)]),l.append&&n("div",{class:"v-navigation-drawer__append"},[(pe=l.append)==null?void 0:pe.call(l)])]}}),n(Ge,{name:"fade-transition"},{default:()=>[h.value&&(k.value||V.value)&&!!e.scrim&&n("div",$({class:["v-navigation-drawer__scrim",Se.backgroundColorClasses.value],style:[Le.value,Se.backgroundColorStyles.value],onClick:()=>V.value=!1},y),null)]})])}),{isStuck:Ve}}}),oa={class:"d-flex align-center"},ra={class:"pa-4 d-flex flex-column"},sa=de({__name:"NavigationApp",setup(e){const r=Je(),t=W(!0),o=W(!1);function l(f){o.value=!f}const a=Qe();function u(){a.logout(),r.push({name:"login"})}return(f,v)=>{const i=Me("router-link");return U(),Z(na,{"rail-width":65,border:0,class:"bg-navigation-surface","onUpdate:rail":l,rail:t.value,"expand-on-hover":"",app:""},{append:_(()=>[te("div",ra,[n(Zt,null,{default:_(({isHovering:s,props:d})=>[n(J,$({onClick:u},d,{color:s?"black":"grey"}),{default:_(()=>[G(K(H(Vt)),1)]),_:2},1040,["color"])]),_:1})])]),default:_(()=>[n(xe,{class:"px-0 mt-4",density:"compact",nav:""},{default:_(()=>[n(z,{class:"pa-0"},{default:_(()=>[te("div",oa,[n(i,{class:"flex-grow-1",to:{name:"main"}},{default:_(()=>[n(Ee,{src:qt})]),_:1}),o.value||!t.value?(U(),Z(J,{key:0,class:"me-2",onClick:v[0]||(v[0]=s=>t.value=!t.value)},{default:_(()=>[G(K(t.value?H(Pe):H(St)),1)]),_:1})):et("",!0)])]),_:1})]),_:1}),n(gt,{class:"my-2 mx-3"}),n(xe,{"open-strategy":"list","active-class":"bg-primary",density:"compact",nav:""},{default:_(()=>[n(z,{class:"rounded-e-xl","prepend-icon":H(wt),title:"User Management",to:{name:"user-management"}},null,8,["prepend-icon"]),n(z,{class:"rounded-e-xl","prepend-icon":H(kt),title:"Card Issuer",to:{name:"master-issuer"}},null,8,["prepend-icon"]),n(z,{class:"rounded-e-xl","prepend-icon":H(_t),title:"License",to:{name:"perso-quota"}},null,8,["prepend-icon"]),n(yt,{class:"rounded-e-xl",value:"report"},{activator:_(({props:s})=>[n(z,$({class:"rounded-e-xl"},s,{"prepend-icon":H(pt),title:"Report"}),null,16,["prepend-icon"])]),default:_(()=>[n(z,{class:"rounded-e-xl",style:tt({paddingInlineStart:!o.value&&t.value?"8px !important":""}),title:"Activation Report","prepend-icon":H(xt),to:{name:"activation-report"}},null,8,["style","prepend-icon"])]),_:1})]),_:1})]),_:1},8,["rail"])}}});const ua=M({scrollable:Boolean,...A(),...Y({tag:"main"})},"VMain"),ia=P()({name:"VMain",props:ua(),setup(e,r){let{slots:t}=r;const{mainStyles:o}=at(),{ssrBootStyles:l}=he();return D(()=>n(e.tag,{class:["v-main",{"v-main--scrollable":e.scrollable},e.class],style:[o.value,l.value,e.style]},{default:()=>{var a,u;return[e.scrollable?n("div",{class:"v-main__scroller"},[(a=t.default)==null?void 0:a.call(t)]):(u=t.default)==null?void 0:u.call(t)]}})),{}}}),ga=de({__name:"MainView",setup(e){const r=W(!0);return(t,o)=>{const l=Me("router-view");return U(),lt(se,null,[n(Xt,{modelValue:r.value,"onUpdate:modelValue":o[0]||(o[0]=a=>r.value=a)},null,8,["modelValue"]),n(sa,{modelValue:r.value,"onUpdate:modelValue":o[1]||(o[1]=a=>r.value=a)},null,8,["modelValue"]),n(ia,null,{default:_(()=>[n(l)]),_:1}),n(Et)],64)}}});export{ga as default};
