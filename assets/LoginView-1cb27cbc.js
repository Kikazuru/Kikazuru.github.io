import{d as p,u as x,b as v,e as o,o as w,f as b,w as l,a,g as d}from"./index-765dcdae.js";import{V as C,a as h,b as r}from"./VRow-39c5cd10.js";import{V as k,a as L,b as T}from"./index-24e03265.js";import{V as i,a as m,b as F,c as B,d as y,e as f}from"./VTextField-3e77d59e.js";import"./tag-e542dea2.js";const I="https://kikazuru.github.io/assets/undraw_dashboard_re_3b76-972fddce.svg",P=p({__name:"LoginView",setup(N){const V=x(),c=v(),_=o(null),t=o(!1),s=o(""),u=o("");function g(){t.value=!0,c.login(s.value,u.value),setTimeout(()=>{t.value=!1,V.push({name:"main"})},2e3)}return(R,e)=>(w(),b(i,{class:"ma-2",width:"100%","max-width":"70%"},{default:l(()=>[a(m,null,{default:l(()=>[a(C,null,{default:l(()=>[a(h,null,{default:l(()=>[a(r,{cols:"12",xxl:"8",xl:"8",lg:"8",md:"7"},{default:l(()=>[a(k,{src:I})]),_:1}),a(r,{cols:"12",xxl:"4",xl:"4",lg:"4",md:"5",class:"d-flex align-center"},{default:l(()=>[a(i,{variant:"flat",width:"100%"},{default:l(()=>[a(m,null,{default:l(()=>[a(F,null,{default:l(()=>[d(" Login ")]),_:1})]),_:1}),a(L),a(B,null,{default:l(()=>[a(y,{ref_key:"formLogin",ref:_,class:"flex-grow-1"},{default:l(()=>[a(f,{modelValue:s.value,"onUpdate:modelValue":e[0]||(e[0]=n=>s.value=n),label:"Email"},null,8,["modelValue"]),a(f,{modelValue:u.value,"onUpdate:modelValue":e[1]||(e[1]=n=>u.value=n),label:"Password",type:"password"},null,8,["modelValue"]),a(T,{variant:"tonal",loading:t.value,onClick:g,color:"#6C63FF",block:""},{default:l(()=>[d("Login")]),_:1},8,["loading"])]),_:1},512)]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}))}});export{P as default};
