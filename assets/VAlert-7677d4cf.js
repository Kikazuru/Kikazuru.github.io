import{e as D}from"./index-6405a72a.js";import{m as $,a as z,b as L,c as p,d as F,e as R,f as j,u as q,g as w,h as E,i as O,j as M,k as N,l as G,n as H,o as J,p as K,q as d,V as Q}from"./VBtn-421a5577.js";import{q as U,I as W,s as X,t as Y,x as Z,y as ee,z as o,A as te,B as ae,C as le,f as a,D as ne}from"./index-69d1502a.js";import{m as se}from"./tag-446592ee.js";const oe=D("v-alert-title"),re=["success","info","warning","error"],ie=U({border:{type:[Boolean,String],validator:e=>typeof e=="boolean"||["top","end","bottom","start"].includes(e)},borderColor:String,closable:Boolean,closeIcon:{type:W,default:"$close"},closeLabel:{type:String,default:"$vuetify.close"},icon:{type:[Boolean,String,Function,Object],default:null},modelValue:{type:Boolean,default:!0},prominent:Boolean,title:String,text:String,type:{type:String,validator:e=>re.includes(e)},...X(),...$(),...z(),...L(),...p(),...F(),...R(),...se(),...Y(),...j({variant:"flat"})},"VAlert"),me=Z()({name:"VAlert",props:ie(),emits:{"click:close":e=>!0,"update:modelValue":e=>!0},setup(e,v){let{emit:m,slots:t}=v;const r=ee(e,"modelValue"),n=o(()=>{if(e.icon!==!1)return e.type?e.icon??`$${e.type}`:e.icon}),y=o(()=>({color:e.color??e.type,variant:e.variant})),{themeClasses:f}=te(e),{colorClasses:k,colorStyles:b,variantClasses:V}=q(y),{densityClasses:P}=w(e),{dimensionStyles:C}=E(e),{elevationClasses:g}=O(e),{locationStyles:x}=M(e),{positionClasses:S}=N(e),{roundedClasses:_}=G(e),{textColorClasses:A,textColorStyles:B}=H(ae(e,"borderColor")),{t:h}=le(),i=o(()=>({"aria-label":h(e.closeLabel),onClick(s){r.value=!1,m("click:close",s)}}));return()=>{const s=!!(t.prepend||n.value),I=!!(t.title||e.title),T=!!(t.close||e.closable);return r.value&&a(e.tag,{class:["v-alert",e.border&&{"v-alert--border":!!e.border,[`v-alert--border-${e.border===!0?"start":e.border}`]:!0},{"v-alert--prominent":e.prominent},f.value,k.value,P.value,g.value,S.value,_.value,V.value,e.class],style:[b.value,C.value,x.value,e.style],role:"alert"},{default:()=>{var c,u;return[J(!1,"v-alert"),e.border&&a("div",{key:"border",class:["v-alert__border",A.value],style:B.value},null),s&&a("div",{key:"prepend",class:"v-alert__prepend"},[t.prepend?a(d,{key:"prepend-defaults",disabled:!n.value,defaults:{VIcon:{density:e.density,icon:n.value,size:e.prominent?44:28}}},t.prepend):a(K,{key:"prepend-icon",density:e.density,icon:n.value,size:e.prominent?44:28},null)]),a("div",{class:"v-alert__content"},[I&&a(oe,{key:"title"},{default:()=>{var l;return[((l=t.title)==null?void 0:l.call(t))??e.title]}}),((c=t.text)==null?void 0:c.call(t))??e.text,(u=t.default)==null?void 0:u.call(t)]),t.append&&a("div",{key:"append",class:"v-alert__append"},[t.append()]),T&&a("div",{key:"close",class:"v-alert__close"},[t.close?a(d,{key:"close-defaults",defaults:{VBtn:{icon:e.closeIcon,size:"x-small",variant:"text"}}},{default:()=>{var l;return[(l=t.close)==null?void 0:l.call(t,{props:i.value})]}}):a(Q,ne({key:"close-btn",icon:e.closeIcon,size:"x-small",variant:"text"},i.value),null)])]}})}}});export{me as V};
