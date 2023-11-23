import{l as S,av as ee,aG as W,m as P,aH as w,p as _,z,a as u,x as V,C as F,U as B,aI as H,al as te,s as x,g as ne,G as C,T as ae,V as ie,J as se,ae as j,af as re,F as oe,A as k,ai as le,I as ue,k as U,n as q,t as ce,aJ as de}from"./index-48c2a9fe.js";import{K as ve,L as ge,i as fe,b as me,C as ye,r as he,w as Se,j as _e,e as be,D as xe,k as Ve,x as Pe,h as Te}from"./VBtn-9536b166.js";import{m as we}from"./tag-42ccadfe.js";function Ne(e){let s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"div",i=arguments.length>2?arguments[2]:void 0;return S()({name:i??ee(W(e.replace(/__/g,"-"))),props:{tag:{type:String,default:s},...P()},setup(a,o){let{slots:l}=o;return()=>{var t;return w(a.tag,{class:[e,a.class],style:a.style},(t=l.default)==null?void 0:t.call(l))}}})}function ze(e){return{aspectStyles:V(()=>{const s=Number(e.aspectRatio);return s?{paddingBottom:String(1/s*100)+"%"}:void 0})}}const G=_({aspectRatio:[String,Number],contentClass:String,inline:Boolean,...P(),...ve()},"VResponsive"),N=S()({name:"VResponsive",props:G(),setup(e,s){let{slots:i}=s;const{aspectStyles:a}=ze(e),{dimensionStyles:o}=ge(e);return z(()=>{var l;return u("div",{class:["v-responsive",{"v-responsive--inline":e.inline},e.class],style:[o.value,e.style]},[u("div",{class:"v-responsive__sizer",style:a.value},null),(l=i.additional)==null?void 0:l.call(i),i.default&&u("div",{class:["v-responsive__content",e.contentClass]},[i.default()])])}),{}}}),Ie=_({transition:{type:[Boolean,String,Object],default:"fade-transition",validator:e=>e!==!0}},"transition"),T=(e,s)=>{let{slots:i}=s;const{transition:a,disabled:o,...l}=e,{component:t=B,...n}=typeof a=="object"?a:{};return w(t,F(typeof a=="string"?{name:o?"":a}:n,l,{disabled:o}),i)};function Ce(e,s){if(!H)return;const i=s.modifiers||{},a=s.value,{handler:o,options:l}=typeof a=="object"?a:{handler:a,options:{}},t=new IntersectionObserver(function(){var g;let n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],d=arguments.length>1?arguments[1]:void 0;const v=(g=e._observe)==null?void 0:g[s.instance.$.uid];if(!v)return;const c=n.some(h=>h.isIntersecting);o&&(!i.quiet||v.init)&&(!i.once||c||v.init)&&o(c,n,d),c&&i.once?M(e,s):v.init=!0},l);e._observe=Object(e._observe),e._observe[s.instance.$.uid]={init:!1,observer:t},t.observe(e)}function M(e,s){var a;const i=(a=e._observe)==null?void 0:a[s.instance.$.uid];i&&(i.observer.unobserve(e),delete e._observe[s.instance.$.uid])}const ke={mounted:Ce,unmounted:M},Be=ke,Re=_({alt:String,cover:Boolean,draggable:{type:[Boolean,String],default:void 0},eager:Boolean,gradient:String,lazySrc:String,options:{type:Object,default:()=>({root:void 0,rootMargin:void 0,threshold:void 0})},sizes:String,src:{type:[String,Object],default:""},crossorigin:String,referrerpolicy:String,srcset:String,position:String,...G(),...P(),...Ie()},"VImg"),$e=S()({name:"VImg",directives:{intersect:Be},props:Re(),emits:{loadstart:e=>!0,load:e=>!0,error:e=>!0},setup(e,s){let{emit:i,slots:a}=s;const o=te("VImg"),l=x(""),t=ne(),n=x(e.eager?"loading":"idle"),d=x(),v=x(),c=V(()=>e.src&&typeof e.src=="object"?{src:e.src.src,srcset:e.srcset||e.src.srcset,lazySrc:e.lazySrc||e.src.lazySrc,aspect:Number(e.aspectRatio||e.src.aspect||0)}:{src:e.src,srcset:e.srcset,lazySrc:e.lazySrc,aspect:Number(e.aspectRatio||0)}),g=V(()=>c.value.aspect||d.value/v.value||0);C(()=>e.src,()=>{h(n.value!=="idle")}),C(g,(r,f)=>{!r&&f&&t.value&&b(t.value)}),ae(()=>h());function h(r){if(!(e.eager&&r)&&!(H&&!r&&!e.eager)){if(n.value="loading",c.value.lazySrc){const f=new Image;f.src=c.value.lazySrc,b(f,null)}c.value.src&&ie(()=>{var f;i("loadstart",((f=t.value)==null?void 0:f.currentSrc)||c.value.src),setTimeout(()=>{var y;if(!o.isUnmounted)if((y=t.value)!=null&&y.complete){if(t.value.naturalWidth||$(),n.value==="error")return;g.value||b(t.value,null),n.value==="loading"&&R()}else g.value||b(t.value),A()})})}}function R(){var r;o.isUnmounted||(A(),b(t.value),n.value="loaded",i("load",((r=t.value)==null?void 0:r.currentSrc)||c.value.src))}function $(){var r;o.isUnmounted||(n.value="error",i("error",((r=t.value)==null?void 0:r.currentSrc)||c.value.src))}function A(){const r=t.value;r&&(l.value=r.currentSrc||r.src)}let I=-1;se(()=>{clearTimeout(I)});function b(r){let f=arguments.length>1&&arguments[1]!==void 0?arguments[1]:100;const y=()=>{if(clearTimeout(I),o.isUnmounted)return;const{naturalHeight:E,naturalWidth:O}=r;E||O?(d.value=O,v.value=E):!r.complete&&n.value==="loading"&&f!=null?I=window.setTimeout(y,f):(r.currentSrc.endsWith(".svg")||r.currentSrc.startsWith("data:image/svg+xml"))&&(d.value=1,v.value=1)};y()}const L=V(()=>({"v-img__img--cover":e.cover,"v-img__img--contain":!e.cover})),X=()=>{var y;if(!c.value.src||n.value==="idle")return null;const r=u("img",{class:["v-img__img",L.value],style:{objectPosition:e.position},src:c.value.src,srcset:c.value.srcset,alt:e.alt,crossorigin:e.crossorigin,referrerpolicy:e.referrerpolicy,draggable:e.draggable,sizes:e.sizes,ref:t,onLoad:R,onError:$},null),f=(y=a.sources)==null?void 0:y.call(a);return u(T,{transition:e.transition,appear:!0},{default:()=>[j(f?u("picture",{class:"v-img__picture"},[f,r]):r,[[le,n.value==="loaded"]])]})},Y=()=>u(T,{transition:e.transition},{default:()=>[c.value.lazySrc&&n.value!=="loaded"&&u("img",{class:["v-img__img","v-img__img--preload",L.value],style:{objectPosition:e.position},src:c.value.lazySrc,alt:e.alt,crossorigin:e.crossorigin,referrerpolicy:e.referrerpolicy,draggable:e.draggable},null)]}),Q=()=>a.placeholder?u(T,{transition:e.transition,appear:!0},{default:()=>[(n.value==="loading"||n.value==="error"&&!a.error)&&u("div",{class:"v-img__placeholder"},[a.placeholder()])]}):null,Z=()=>a.error?u(T,{transition:e.transition,appear:!0},{default:()=>[n.value==="error"&&u("div",{class:"v-img__error"},[a.error()])]}):null,p=()=>e.gradient?u("div",{class:"v-img__gradient",style:{backgroundImage:`linear-gradient(${e.gradient})`}},null):null,D=x(!1);{const r=C(g,f=>{f&&(requestAnimationFrame(()=>{requestAnimationFrame(()=>{D.value=!0})}),r())})}return z(()=>{const r=N.filterProps(e);return j(u(N,F({class:["v-img",{"v-img--booting":!D.value},e.class],style:[{width:k(e.width==="auto"?d.value:e.width)},e.style]},r,{aspectRatio:g.value,"aria-label":e.alt,role:e.alt?"img":void 0}),{additional:()=>u(oe,null,[u(X,null,null),u(Y,null,null),u(p,null,null),u(Q,null,null),u(Z,null,null)]),default:a.default}),[[re("intersect"),{handler:h,options:e.options},null,{once:!0}]])}),{currentSrc:l,image:t,state:n,naturalWidth:d,naturalHeight:v}}}),Ae=_({start:Boolean,end:Boolean,icon:ue,image:String,text:String,...P(),...fe(),...me(),...ye(),...we(),...U(),...he({variant:"flat"})},"VAvatar"),We=S()({name:"VAvatar",props:Ae(),setup(e,s){let{slots:i}=s;const{themeClasses:a}=q(e),{colorClasses:o,colorStyles:l,variantClasses:t}=Se(e),{densityClasses:n}=_e(e),{roundedClasses:d}=be(e),{sizeClasses:v,sizeStyles:c}=xe(e);return z(()=>u(e.tag,{class:["v-avatar",{"v-avatar--start":e.start,"v-avatar--end":e.end},a.value,o.value,n.value,d.value,v.value,t.value,e.class],style:[l.value,c.value,e.style]},{default:()=>{var g;return[e.image?u($e,{key:"image",src:e.image,alt:"",cover:!0},null):e.icon?u(Ve,{key:"icon",icon:e.icon},null):((g=i.default)==null?void 0:g.call(i))??e.text,Pe(!1,"v-avatar")]}})),{}}});const Le=_({color:String,inset:Boolean,length:[Number,String],thickness:[Number,String],vertical:Boolean,...P(),...U()},"VDivider"),Fe=S()({name:"VDivider",props:Le(),setup(e,s){let{attrs:i}=s;const{themeClasses:a}=q(e),{textColorClasses:o,textColorStyles:l}=Te(ce(e,"color")),t=V(()=>{const n={};return e.length&&(n[e.vertical?"maxHeight":"maxWidth"]=k(e.length)),e.thickness&&(n[e.vertical?"borderRightWidth":"borderTopWidth"]=k(e.thickness)),n});return z(()=>u("hr",{class:[{"v-divider":!0,"v-divider--inset":e.inset,"v-divider--vertical":e.vertical},a.value,o.value,e.class],style:[t.value,l.value,e.style],"aria-orientation":!i.role||i.role==="separator"?e.vertical?"vertical":"horizontal":void 0,role:`${i.role||"separator"}`},null)),{}}}),De=_({disabled:Boolean,group:Boolean,hideOnLeave:Boolean,leaveAbsolute:Boolean,mode:String,origin:String},"transition");function m(e,s,i){return S()({name:e,props:De({mode:i,origin:s}),setup(a,o){let{slots:l}=o;const t={onBeforeEnter(n){a.origin&&(n.style.transformOrigin=a.origin)},onLeave(n){if(a.leaveAbsolute){const{offsetTop:d,offsetLeft:v,offsetWidth:c,offsetHeight:g}=n;n._transitionInitialStyles={position:n.style.position,top:n.style.top,left:n.style.left,width:n.style.width,height:n.style.height},n.style.position="absolute",n.style.top=`${d}px`,n.style.left=`${v}px`,n.style.width=`${c}px`,n.style.height=`${g}px`}a.hideOnLeave&&n.style.setProperty("display","none","important")},onAfterLeave(n){if(a.leaveAbsolute&&(n!=null&&n._transitionInitialStyles)){const{position:d,top:v,left:c,width:g,height:h}=n._transitionInitialStyles;delete n._transitionInitialStyles,n.style.position=d||"",n.style.top=v||"",n.style.left=c||"",n.style.width=g||"",n.style.height=h||""}}};return()=>{const n=a.group?de:B;return w(n,{name:a.disabled?"":e,css:!a.disabled,...a.group?void 0:{mode:a.mode},...a.disabled?{}:t},l.default)}}})}function J(e,s){let i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:"in-out";return S()({name:e,props:{mode:{type:String,default:i},disabled:Boolean},setup(a,o){let{slots:l}=o;return()=>w(B,{name:a.disabled?"":e,css:!a.disabled,...a.disabled?{}:s},l.default)}})}function K(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"";const i=(arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1)?"width":"height",a=W(`offset-${i}`);return{onBeforeEnter(t){t._parent=t.parentNode,t._initialStyle={transition:t.style.transition,overflow:t.style.overflow,[i]:t.style[i]}},onEnter(t){const n=t._initialStyle;t.style.setProperty("transition","none","important"),t.style.overflow="hidden";const d=`${t[a]}px`;t.style[i]="0",t.offsetHeight,t.style.transition=n.transition,e&&t._parent&&t._parent.classList.add(e),requestAnimationFrame(()=>{t.style[i]=d})},onAfterEnter:l,onEnterCancelled:l,onLeave(t){t._initialStyle={transition:"",overflow:t.style.overflow,[i]:t.style[i]},t.style.overflow="hidden",t.style[i]=`${t[a]}px`,t.offsetHeight,requestAnimationFrame(()=>t.style[i]="0")},onAfterLeave:o,onLeaveCancelled:o};function o(t){e&&t._parent&&t._parent.classList.remove(e),l(t)}function l(t){const n=t._initialStyle[i];t.style.overflow=t._initialStyle.overflow,n!=null&&(t.style[i]=n),delete t._initialStyle}}m("fab-transition","center center","out-in");m("dialog-bottom-transition");m("dialog-top-transition");m("fade-transition");m("scale-transition");m("scroll-x-transition");m("scroll-x-reverse-transition");m("scroll-y-transition");m("scroll-y-reverse-transition");m("slide-x-transition");m("slide-x-reverse-transition");const He=m("slide-y-transition");m("slide-y-reverse-transition");const Ue=J("expand-transition",K()),qe=J("expand-x-transition",K("",!0));export{Be as I,T as M,Fe as V,$e as a,Ue as b,Ne as c,qe as d,We as e,He as f,Ie as m};
