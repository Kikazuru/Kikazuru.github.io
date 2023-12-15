import{a8 as b,d as v,r as u,o as x,h,g as t,f as e,j as i,m as y,a as w}from"./index-69d1502a.js";import{u as g}from"./snackbar-867af268.js";import{a as c,b as L}from"./VDataTableServer-921b4e3b.js";import{b as m,a as d,V as R}from"./VRow-1f387fa0.js";import{V as F,a as S,b as T,d as B,j as N}from"./index-6405a72a.js";import{V as U}from"./VForm-acfbacb3.js";import{V as $}from"./VTextField-f7af6f26.js";import{V as E,_ as I}from"./ViewRequestedLicense.vue_vue_type_script_setup_true_lang-1efa8e7d.js";import{V as C}from"./VBtn-421a5577.js";import"./VList-0497e142.js";import"./lazy-eda09f13.js";import"./tag-446592ee.js";import"./filter-bfc06a5f.js";import"./VChip-b541bb3f.js";import"./MessageDialog.vue_vue_type_script_setup_true_lang-db1065c2.js";import"./FilterHeaderCheckbox.vue_vue_type_script_setup_true_lang-e8950ebf.js";async function j(l){return await b.post("/topup_requests",{quota:l})}async function z({limit:l=10,page:o=1,states:r}){return await b.get("/topup_requests",{params:{limit:l,page:o,states:r}})}const D=v({__name:"CreateLicense",emits:["created"],setup(l,{emit:o}){const r=u(),a=u(),f=u([]),k=o,p=g();async function q(_){if(a.value!=null){const s=parseInt(a.value.toString());j(s).then(()=>{k("created"),_.value=!1,p.showSnackbar("Request license success","success")}).catch(()=>{p.showSnackbar("Request license failed","error")})}}return(_,s)=>(x(),h(L,{activator:"parent"},{default:t(({isActive:V})=>[e(d,null,{default:t(()=>[e(c),e(m,{cols:"12",xxl:"4",xl:"4",lg:"4",md:"4",sm:"7"},{default:t(()=>[e(F,null,{default:t(()=>[e(S,null,{default:t(()=>[e(T,null,{default:t(()=>[i(" Request License ")]),_:1})]),_:1}),e(B,null,{default:t(()=>[e(U,{ref_key:"myForm",ref:r},{default:t(()=>[e($,{class:"mb-3",label:"Quantity",min:"1",type:"number",modelValue:a.value,"onUpdate:modelValue":s[0]||(s[0]=n=>a.value=n)},null,8,["modelValue"]),e(E,{modelValue:f.value,"onUpdate:modelValue":s[1]||(s[1]=n=>f.value=n),label:"Purchase Order Document","show-size":"","persistent-hint":"",hint:"Max file size 2 MB"},null,8,["modelValue"])]),_:1},512),e(N,null,{default:t(()=>[e(c),e(C,{onClick:n=>(V.value=!1,r.value.reset()),variant:"text",color:"primary"},{default:t(()=>[i("CANCEL")]),_:2},1032,["onClick"]),e(C,{onClick:n=>q(V),class:"bg-primary"},{default:t(()=>[i("REQUEST")]),_:2},1032,["onClick"])]),_:2},1024)]),_:2},1024)]),_:2},1024)]),_:2},1024),e(c)]),_:2},1024)]),_:1}))}}),M=w("div",{class:"text-h5 font-weight-bold"},"TopUp License",-1),le=v({__name:"RequestedLicense",setup(l){return(o,r)=>(x(),h(R,{fluid:""},{default:t(()=>[e(d,null,{default:t(()=>[e(m,null,{default:t(()=>[M]),_:1})]),_:1}),e(d,null,{default:t(()=>[e(m,null,{default:t(()=>[e(I,{"list-requested-license":y(z)},{create:t(({loadRequestedLicense:a})=>[e(D,{onCreated:a},null,8,["onCreated"])]),_:1},8,["list-requested-license"])]),_:1})]),_:1})]),_:1}))}});export{le as default};
