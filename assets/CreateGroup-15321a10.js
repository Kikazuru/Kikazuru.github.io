import{r as y}from"./rules-3c02e6d9.js";import{V as N}from"./VTextField-e0e32189.js";import{V as P}from"./VTextarea-4f85dd16.js";import{V as j}from"./VForm-9b4298fa.js";import{d as C,z as I,r as i,R as B,o as S,h as w,g as t,f as e,m as k,u as D,a as c,j as v,S as G}from"./index-3573355a.js";import{g as F}from"./user-862e573d.js";import{_ as R,a as T}from"./SelectPermission.vue_vue_type_script_setup_true_lang-81b8d30a.js";import{c as E}from"./group-2577dbdb.js";import{u as L}from"./snackbar-93bdc399.js";import{w as W}from"./lazy-bd4f37e9.js";import{b,a as g,V as q}from"./VRow-3e89ef20.js";import{V as f,p as z}from"./VBtn-4acdbe86.js";import{V as H,a as O,b as U,c as A,d as x}from"./VStepper-a21c6d4f.js";import{c as $}from"./index-8e303578.js";import"./permission-4358f34e.js";import"./VChip-5b2c32d2.js";import"./tag-49144cbd.js";const J=C({__name:"GroupInformation",props:{valid:{type:[Boolean,null]},modelValue:{}},emits:["update:valid","update:modelValue"],setup(_,{emit:V}){const o=_,m=V,n=I({get(){return o.valid},set(p){m("update:valid",p)}}),u=i(""),r=i("");return B(()=>{m("update:modelValue",{name:u.value,description:r.value})}),(p,d)=>(S(),w(j,{"validate-on":"input",modelValue:n.value,"onUpdate:modelValue":d[2]||(d[2]=s=>n.value=s)},{default:t(()=>[e(N,{class:"mb-3",rules:k(y),modelValue:u.value,"onUpdate:modelValue":d[0]||(d[0]=s=>u.value=s),label:"Name"},null,8,["rules","modelValue"]),e(P,{class:"mb-3",rules:k(y),modelValue:r.value,"onUpdate:modelValue":d[1]||(d[1]=s=>r.value=s),label:"Description"},null,8,["rules","modelValue"])]),_:1},8,["modelValue"]))}}),K=C({__name:"SelectUser",props:{modelValue:{}},emits:["update:modelValue"],setup(_,{emit:V}){const o=_,m=V,n=i(10),u=i(1),r=i([]),p=I({get(){return o.modelValue},set(s){m("update:modelValue",s)}});async function d({done:s}){F({limit:n.value,page:u.value}).then(a=>{const l=a.data.result;l.users?(r.value.push(...l.users||[]),s("ok"),u.value++):s("empty")}).catch(()=>{})}return(s,a)=>(S(),w(R,{modelValue:p.value,"onUpdate:modelValue":a[0]||(a[0]=l=>p.value=l),onLoadUsers:d,users:r.value},null,8,["modelValue","users"]))}}),M={class:"d-flex align-center"},Q=c("div",{class:"text-h5 font-weight-bold"},"Create Groups",-1),X={class:"d-flex justify-start"},Y={class:"d-flex justify-start mt-4"},Z={class:"d-flex justify-start mt-4"},_e=C({__name:"CreateGroup",setup(_){const V=D(),o=i(1),m=i(!1),n=i({name:"",description:"",issuer:null}),u=i([]),r=i({}),p=L();function d(){var a;const s={name:n.value.name,description:n.value.description,issuerId:(a=n.value.issuer)==null?void 0:a.id,userIds:u.value.map(l=>l.id),permissions:r.value};E(s).then(l=>{if(!l.data.success)throw Error;p.showSnackbar("User group created","success"),V.push({name:"group.see"})}).catch(()=>{p.showSnackbar("Create user group failed","error")})}return(s,a)=>(S(),w(q,{fluid:""},{default:t(()=>[e(g,null,{default:t(()=>[e(b,null,{default:t(()=>[c("div",M,[e(f,{icon:"",variant:"text",to:{name:"group.see"},exact:""},{default:t(()=>[e(z,null,{default:t(()=>[v(G(k(W)),1)]),_:1})]),_:1},8,["to"]),Q])]),_:1})]),_:1}),e(g,null,{default:t(()=>[e(b,null,{default:t(()=>[e(H,{elevation:"0",modelValue:o.value,"onUpdate:modelValue":a[0]||(a[0]=l=>o.value=l)},{default:t(()=>[e(O,null,{default:t(()=>[e(U,{title:"Information",value:1}),e($),e(U,{title:"Select User",value:2}),e($),e(U,{title:"Select Permission",value:3})]),_:1})]),_:1},8,["modelValue"])]),_:1})]),_:1}),e(g,{class:"align-start"},{default:t(()=>[e(b,null,{default:t(()=>[e(A,{modelValue:o.value,"onUpdate:modelValue":a[9]||(a[9]=l=>o.value=l)},{default:t(()=>[e(x,{value:1},{default:t(()=>[e(J,{class:"ma-2",modelValue:n.value,"onUpdate:modelValue":a[1]||(a[1]=l=>n.value=l),valid:m.value,"onUpdate:valid":a[2]||(a[2]=l=>m.value=l)},null,8,["modelValue","valid"]),c("div",X,[e(f,{disabled:!m.value,variant:"tonal",onClick:a[3]||(a[3]=l=>o.value++)},{default:t(()=>[v(" Next ")]),_:1},8,["disabled"])])]),_:1}),e(x,{value:2},{default:t(()=>[e(K,{class:"ma-2",modelValue:u.value,"onUpdate:modelValue":a[4]||(a[4]=l=>u.value=l)},null,8,["modelValue"]),c("div",Y,[e(f,{class:"me-2",variant:"tonal",onClick:a[5]||(a[5]=l=>o.value--)},{default:t(()=>[v(" Previous ")]),_:1}),e(f,{disabled:u.value.length<=0,variant:"tonal",onClick:a[6]||(a[6]=l=>o.value++)},{default:t(()=>[v(" Next ")]),_:1},8,["disabled"])])]),_:1}),e(x,{value:3},{default:t(()=>[e(T,{modelValue:r.value,"onUpdate:modelValue":a[7]||(a[7]=l=>r.value=l)},null,8,["modelValue"]),c("div",Z,[e(f,{class:"me-2",variant:"tonal",onClick:a[8]||(a[8]=l=>o.value--)},{default:t(()=>[v(" Previous ")]),_:1}),e(f,{disabled:Object.keys(r.value).length<=0,onClick:d,color:"primary"},{default:t(()=>[v(" Submit ")]),_:1},8,["disabled"])])]),_:1})]),_:1},8,["modelValue"])]),_:1})]),_:1})]),_:1}))}});export{_e as default};
