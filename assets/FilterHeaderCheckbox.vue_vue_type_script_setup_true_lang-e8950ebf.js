import{q as $,a4 as z,x as S,y as N,aw as R,z as j,J as w,aa as E,f as a,D as C,d as M,r as h,ae as x,o as b,h as y,g as t,j as k,S as Y,m as q,ax as H,ay as J,c as T,ag as G,Y as K}from"./index-69d1502a.js";import{B as O}from"./lazy-eda09f13.js";import{p as Q,V as g}from"./VBtn-421a5577.js";import{c as W,b as P,V as X}from"./VList-0497e142.js";import{e as Z,d as _}from"./filter-bfc06a5f.js";import{m as ee,u as ae,b as B}from"./VTextField-f7af6f26.js";import{c as le,j as te,V as oe}from"./index-6405a72a.js";import{a as se}from"./VDataTableServer-921b4e3b.js";const ne=$({...ee(),...z(Z(),["inline"])},"VCheckbox"),A=S()({name:"VCheckbox",inheritAttrs:!1,props:ne(),emits:{"update:modelValue":l=>!0,"update:focused":l=>!0},setup(l,c){let{attrs:o,slots:r}=c;const e=N(l,"modelValue"),{isFocused:i,focus:m,blur:p}=ae(l),u=R(),s=j(()=>l.id||`checkbox-${u}`);return w(()=>{const[d,n]=E(o),V=B.filterProps(l),f=_.filterProps(l);return a(B,C({class:["v-checkbox",l.class]},d,V,{modelValue:e.value,"onUpdate:modelValue":v=>e.value=v,id:s.value,focused:i.value,style:l.style}),{...r,default:v=>{let{id:F,messagesId:I,isDisabled:U,isReadonly:D}=v;return a(_,C(f,{id:F.value,"aria-describedby":I.value,disabled:U.value,readonly:D.value},n,{modelValue:e.value,"onUpdate:modelValue":L=>e.value=L,onFocus:m,onBlur:p}),r)}})}),{}}}),fe=M({__name:"FilterHeaderCheckbox",props:{modelValue:{},items:{},disabled:{type:Boolean}},emits:["update:modelValue"],setup(l,{emit:c}){const o=l,r=c,e=h(x(o.modelValue)),i=h(x(o.modelValue));function m(u){i.value=e.value,r("update:modelValue",e.value),u.value=!1}function p(u){u?e.value=o.items.map(s=>s.value):e.value=[]}return(u,s)=>(b(),y(X,{disabled:o.disabled,"close-on-content-click":!1,location:"bottom center",offset:"5",transition:"scale-transition"},{activator:t(({props:d})=>[a(Q,H(J(d)),{default:t(()=>[k(Y(q(O)),1)]),_:2},1040)]),default:t(({isActive:d})=>[a(oe,{onVnodeUnmounted:s[1]||(s[1]=n=>e.value=i.value)},{default:t(()=>[a(W,null,{default:t(()=>[a(P,null,{default:t(()=>[a(A,{"hide-details":"","onUpdate:modelValue":p,"model-value":e.value.length==o.items.length,indeterminate:e.value.length!=o.items.length&&e.value.length!=0,density:"compact",label:"Select All"},null,8,["model-value","indeterminate"])]),_:1}),a(le),(b(!0),T(K,null,G(o.items,(n,V)=>(b(),y(P,{key:V},{default:t(()=>[a(A,{modelValue:e.value,"onUpdate:modelValue":s[0]||(s[0]=f=>e.value=f),value:n.value,"hide-details":"",density:"compact",label:n.label},null,8,["modelValue","value","label"])]),_:2},1024))),128))]),_:1}),a(te,null,{default:t(()=>[a(se),a(g,{class:"bg-primary",onClick:n=>m(d),size:"small"},{default:t(()=>[k("APPLY")]),_:2},1032,["onClick"]),a(g,{onClick:n=>d.value=!1,size:"small"},{default:t(()=>[k("CANCEL")]),_:2},1032,["onClick"])]),_:2},1024)]),_:2},1536)]),_:1},8,["disabled"]))}});export{fe as _};
