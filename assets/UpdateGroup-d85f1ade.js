import{_ as S,a as I,b as $}from"./SelectPermission.vue_vue_type_script_setup_true_lang-34948baf.js";import{u as y}from"./snackbar-867af268.js";import{d as j,u as N,e as B,r as u,o as G,h as P,g as t,f as a,a as p,j as n,S as D,m as R}from"./index-69d1502a.js";import{g as W}from"./user-4dbb0d25.js";import{w as E}from"./lazy-eda09f13.js";import{a as H,u as L}from"./group-e736e658.js";import{b as f,a as c,V as O}from"./VRow-1f387fa0.js";import{V as r,p as T}from"./VBtn-421a5577.js";import{V as h,a as q,b as V,c as z,d as _}from"./VStepper-8c1ebb00.js";import{c as x}from"./index-6405a72a.js";import"./rules-3c02e6d9.js";import"./VTextField-f7af6f26.js";import"./VTextarea-30e8b5da.js";import"./VForm-acfbacb3.js";import"./permission-2c18b797.js";import"./VChip-b541bb3f.js";import"./tag-446592ee.js";import"./api-77cd4ed9.js";const A={class:"d-flex align-center"},F=p("div",{class:"text-h5 font-weight-bold"},"Update Groups",-1),J={class:"d-flex justify-end"},K={class:"d-flex justify-space-between"},M={class:"d-flex justify-space-between"},Ve=j({__name:"UpdateGroup",setup(Q){const k=N(),b=B().params.groupId,s=u(1),v=u(!0),i=u({name:"",description:""}),g=u(void 0),d=u([]),m=u({});H(b).then(o=>{const e=o.data.result,l={name:e.name,description:e.description};i.value=l,g.value=e.issuer,d.value=e.members,m.value=e.permissions});const U=y();function w(){const o={name:i.value.name,description:i.value.description,userIds:d.value.map(e=>e.id),permissions:m.value};L(b,o).then(e=>{if(!e.data.success)throw Error;U.showSnackbar("User group updated","success"),k.push({name:"group.see"})}).catch(()=>{U.showSnackbar("Update user group failed","error")})}async function C(o){var e;return await W({limit:10,page:o,issuerId:(e=g.value)==null?void 0:e.id})}return(o,e)=>(G(),P(O,{fluid:""},{default:t(()=>[a(c,null,{default:t(()=>[a(f,null,{default:t(()=>[p("div",A,[a(r,{icon:"",variant:"text",to:{name:"group.see"},exact:""},{default:t(()=>[a(T,null,{default:t(()=>[n(D(R(E)),1)]),_:1})]),_:1},8,["to"]),F])]),_:1})]),_:1}),a(c,null,{default:t(()=>[a(f,null,{default:t(()=>[a(h,{elevation:"0",modelValue:s.value,"onUpdate:modelValue":e[0]||(e[0]=l=>s.value=l)},{default:t(()=>[a(q,null,{default:t(()=>[a(V,{title:"Information",value:1}),a(x),a(V,{title:"Select User",value:2}),a(x),a(V,{title:"Select Permission",value:3})]),_:1})]),_:1},8,["modelValue"])]),_:1})]),_:1}),a(c,{class:"align-start"},{default:t(()=>[a(f,null,{default:t(()=>[a(z,{modelValue:s.value,"onUpdate:modelValue":e[9]||(e[9]=l=>s.value=l)},{default:t(()=>[a(_,{value:1},{default:t(()=>[a(S,{class:"ma-2",modelValue:i.value,"onUpdate:modelValue":e[1]||(e[1]=l=>i.value=l),valid:v.value,"onUpdate:valid":e[2]||(e[2]=l=>v.value=l)},null,8,["modelValue","valid"]),p("div",J,[a(r,{disabled:!v.value,variant:"tonal",onClick:e[3]||(e[3]=l=>s.value++)},{default:t(()=>[n(" Next ")]),_:1},8,["disabled"])])]),_:1}),a(_,{value:2},{default:t(()=>[a(I,{class:"ma-2","get-users":C,modelValue:d.value,"onUpdate:modelValue":e[4]||(e[4]=l=>d.value=l)},null,8,["modelValue"]),p("div",K,[a(r,{variant:"tonal",onClick:e[5]||(e[5]=l=>s.value--)},{default:t(()=>[n(" Previous ")]),_:1}),a(r,{disabled:d.value.length<=0,variant:"tonal",onClick:e[6]||(e[6]=l=>s.value++)},{default:t(()=>[n(" Next ")]),_:1},8,["disabled"])])]),_:1}),a(_,{value:3},{default:t(()=>[a($,{modelValue:m.value,"onUpdate:modelValue":e[7]||(e[7]=l=>m.value=l)},null,8,["modelValue"]),p("div",M,[a(r,{variant:"tonal",onClick:e[8]||(e[8]=l=>s.value--)},{default:t(()=>[n(" Previous ")]),_:1}),a(r,{disabled:Object.keys(m.value).length<=0,onClick:w,variant:"tonal"},{default:t(()=>[n(" Update ")]),_:1},8,["disabled"])])]),_:1})]),_:1},8,["modelValue"])]),_:1})]),_:1})]),_:1}))}});export{Ve as default};
