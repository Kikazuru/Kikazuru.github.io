import{r as k,l as I}from"./topup-4a902c81.js";import{V as L,_ as F}from"./ViewRequestedLicense.vue_vue_type_script_setup_true_lang-5803e678.js";import{l as R}from"./issuer-745d4891.js";import{V as d,a as B}from"./VDataTableServer-b0c4b5cf.js";import{b as c,a as p,V as T}from"./VRow-a32ba34a.js";import{V as w,a as N,b as U,c as $,d as D,e as E,f as S}from"./VTextField-bf30aba6.js";import{V as z}from"./VAutocomplete-be82bb74.js";import{V as C}from"./VBtn-18a3f883.js";import{d as x,r as s,o as b,h as y,g as t,f as e,j as f,m as A,a as M}from"./index-d82b7293.js";import"./api-a2ad3bbc.js";import"./index-babec776.js";import"./tag-19c9ac46.js";import"./mdi-e82a7810.js";import"./VOverlay-d18fd668.js";const Q=x({__name:"CreateLicense",emits:["created"],setup(g,{emit:V}){const m=s(),o=s([]),_=s(!0);R().then(n=>{o.value=n.data.result.issuers}).finally(()=>{_.value=!1});const u=s(),r=s(),v=s([]),q=V;async function h(n){if(u.value!=null&&r.value!=null){const a=parseInt(u.value.toString()),i=r.value;k(a,i).then(()=>{q("created"),n.value=!1})}}return(n,a)=>(b(),y(B,{activator:"parent"},{default:t(({isActive:i})=>[e(p,null,{default:t(()=>[e(d),e(c,{cols:"12",xxl:"4",xl:"4",lg:"4",md:"4",sm:"7"},{default:t(()=>[e(w,null,{default:t(()=>[e(N,null,{default:t(()=>[e(U,null,{default:t(()=>[f(" Request License ")]),_:1})]),_:1}),e($,null,{default:t(()=>[e(D,{ref_key:"myForm",ref:m},{default:t(()=>[e(E,{class:"mb-3",label:"Quantity",min:"1",type:"number",modelValue:u.value,"onUpdate:modelValue":a[0]||(a[0]=l=>u.value=l)},null,8,["modelValue"]),e(z,{loading:_.value,items:o.value,"item-title":"name","item-value":"id",class:"mb-3",modelValue:r.value,"onUpdate:modelValue":a[1]||(a[1]=l=>r.value=l),label:"Issuer"},null,8,["loading","items","modelValue"]),e(L,{modelValue:v.value,"onUpdate:modelValue":a[2]||(a[2]=l=>v.value=l),label:"Purchase Order Document","show-size":"","persistent-hint":"",hint:"Max file size 2 MB"},null,8,["modelValue"])]),_:1},512),e(S,null,{default:t(()=>[e(d),e(C,{onClick:l=>{i.value=!1,m.value.reset()},variant:"text",color:"primary"},{default:t(()=>[f("CANCEL")]),_:2},1032,["onClick"]),e(C,{onClick:l=>h(i),class:"bg-primary"},{default:t(()=>[f("REQUEST")]),_:2},1032,["onClick"])]),_:2},1024)]),_:2},1024)]),_:2},1024)]),_:2},1024),e(d)]),_:2},1024)]),_:1}))}}),j=M("div",{class:"text-h5 font-weight-bold"},"Request License",-1),se=x({__name:"RequestedLicense",setup(g){return(V,m)=>(b(),y(T,{fluid:""},{default:t(()=>[e(p,null,{default:t(()=>[e(c,null,{default:t(()=>[j]),_:1})]),_:1}),e(p,null,{default:t(()=>[e(c,null,{default:t(()=>[e(F,{"list-requested-license":A(I)},{create:t(({loadRequestedLicense:o})=>[e(Q,{onCreated:o},null,8,["onCreated"])]),_:1},8,["list-requested-license"])]),_:1})]),_:1})]),_:1}))}});export{se as default};
