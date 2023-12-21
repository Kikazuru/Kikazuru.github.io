import{r as N,l as A}from"./topup-0bd70fc4.js";import{d as w,l as P,r,R as B,o as c,h as v,g as e,f as t,a as k,m as C,j as s,aa as F,i as $,S as _,c as j}from"./index-033028ba.js";import{r as z}from"./lazy-62b0a598.js";import{_ as M}from"./MessageDialog.vue_vue_type_script_setup_true_lang-0ac75953.js";import{_ as Q}from"./FilterHeaderCheckbox.vue_vue_type_script_setup_true_lang-479fae9c.js";import{V as S,p as O}from"./VBtn-4c1884a2.js";import{a as D,d as E,V as I,b as G,j as H}from"./index-fc6a3455.js";import{V as J,a as x,b as K}from"./VDataTableServer-209fc9bb.js";import{V as L}from"./VChip-87521e80.js";import{u as W}from"./snackbar-82b4b4e3.js";import{_ as X,V as Y}from"./VFileInput-47e34efd.js";import{_ as Z}from"./IssuerInput.vue_vue_type_script_setup_true_lang-f322e8e1.js";import{r as ee}from"./rules-3c02e6d9.js";import{b as U,a as T,V as te}from"./VRow-cccfd752.js";import{V as ae}from"./VForm-3ddb7e8c.js";import"./api-f2d6da92.js";import"./VList-12c50827.js";import"./tag-13d67880.js";import"./filter-6f6c7ae3.js";import"./VTextField-d6d2aeeb.js";import"./VAutocomplete-dda41355.js";import"./issuer-6495046d.js";const se={class:"d-flex justify-end"},le={key:1},oe={class:"d-flex justify-center align-center"},re=w({__name:"ViewRequestedLicense",props:{listRequestedLicense:{type:Function}},setup(h){const m=P().permissions,u=h,i=r(1),p=r(10),q=r(100),d=r(!0),y=r([]),V=[{label:"Approved",value:"approved"},{label:"Declined",value:"declined"},{label:"Pending",value:"pending"}],l=r(V.map(g=>g.value)),f=[{title:"REQUESTER",key:"requester"},{title:"ISSUER",key:"issuer"},{title:"QUOTA",key:"quota"},{title:"ADMIN",key:"actor"},{title:"STATUS",key:"state",sortable:!1,align:"center"}];function o(){d.value=!0,u.listRequestedLicense({page:i.value,limit:p.value,states:l.value}).then(async g=>{const n=g.data.result;y.value=n.topupRequests||[],q.value=n.recordsCount}).finally(()=>{setTimeout(()=>{d.value=!1},2e3)})}return B(()=>{o()}),(g,n)=>(c(),v(I,null,{default:e(()=>[t(D,null,{default:e(()=>[k("div",se,[C(m)["topup_request.create"]?(c(),v(S,{key:0,color:"primary"},{default:e(()=>[s(" TopUp License "),F(g.$slots,"create",{loadRequestedLicense:o})]),_:3})):$("",!0)])]),_:3}),t(E,null,{default:e(()=>[t(J,{"return-object":"","show-select":"",color:"secondary",page:i.value,"onUpdate:page":n[1]||(n[1]=a=>i.value=a),"items-per-page":p.value,"onUpdate:itemsPerPage":n[2]||(n[2]=a=>p.value=a),headers:f,"items-length":q.value,items:y.value,loading:d.value,"item-value":"name"},{loading:e(()=>[s(" Loading top-up license... ")]),"item.quota":e(({item:a})=>[s(_(a.quota.toLocaleString("id")),1)]),"item.state":e(({item:a})=>[a.state=="approved"?(c(),v(L,{key:0,label:"",color:"success"},{default:e(()=>[s(" Accepted ")]),_:1})):a.state=="declined"?(c(),j("div",le,[t(L,{label:"",color:"error"},{default:e(()=>[s(" Declined ")]),_:1}),t(S,{ripple:!1,icon:"",size:"small",variant:"text"},{default:e(()=>[t(O,null,{default:e(()=>[s(_(C(z)),1)]),_:1}),t(M,{title:"Decline Notes",message:a.declinedReason},null,8,["message"])]),_:2},1024)])):a.state=="pending"?(c(),v(L,{key:2,label:"",color:"warning"},{default:e(()=>[s(" Pending ")]),_:1})):$("",!0)]),"item.issuer":e(({item:a})=>[s(_(a.issuer.name),1)]),"item.actor":e(({item:a})=>{var b;return[s(_(((b=a.actor)==null?void 0:b.name)||"-"),1)]}),"item.requester":e(({item:a})=>[s(_(a.requester.name),1)]),"header.state":e(({column:a})=>[k("span",oe,[k("div",null,_(a.title),1),t(Q,{disabled:d.value,items:V,modelValue:l.value,"onUpdate:modelValue":n[0]||(n[0]=b=>l.value=b)},null,8,["disabled","modelValue"])])]),_:2},1032,["page","items-per-page","items-length","items","loading"])]),_:1})]),_:3}))}}),ne=w({__name:"CreateLicense",emits:["created"],setup(h,{emit:R}){const m=r(),u=r(),i=r(),p=r([]),q=R,d=W();async function y(V){if(u.value!=null&&i.value!=null){const l=parseInt(u.value.toString()),f=i.value.id;N(l,f).then(()=>{q("created"),V.value=!1,d.showSnackbar("Request license success","success"),m.value.reset()}).catch(()=>{d.showSnackbar("Request license failed","error")})}}return(V,l)=>(c(),v(K,{activator:"parent"},{default:e(({isActive:f})=>[t(T,null,{default:e(()=>[t(x),t(U,{cols:"12",xxl:"4",xl:"4",lg:"4",md:"4",sm:"7"},{default:e(()=>[t(I,null,{default:e(()=>[t(D,null,{default:e(()=>[t(G,null,{default:e(()=>[s(" Request License ")]),_:1})]),_:1}),t(E,null,{default:e(()=>[t(ae,{ref_key:"myForm",ref:m},{default:e(()=>[t(X,{class:"mb-3",modelValue:u.value,"onUpdate:modelValue":l[0]||(l[0]=o=>u.value=o)},null,8,["modelValue"]),t(Z,{rules:C(ee),modelValue:i.value,"onUpdate:modelValue":l[1]||(l[1]=o=>i.value=o)},null,8,["rules","modelValue"]),t(Y,{modelValue:p.value,"onUpdate:modelValue":l[2]||(l[2]=o=>p.value=o),label:"Purchase Order Document","show-size":"","persistent-hint":"",hint:"Max file size 2 MB"},null,8,["modelValue"])]),_:1},512),t(H,null,{default:e(()=>[t(x),t(S,{onClick:o=>(f.value=!1,m.value.reset()),variant:"text",color:"primary"},{default:e(()=>[s("CANCEL")]),_:2},1032,["onClick"]),t(S,{onClick:o=>y(f),class:"bg-primary"},{default:e(()=>[s("REQUEST")]),_:2},1032,["onClick"])]),_:2},1024)]),_:2},1024)]),_:2},1024)]),_:2},1024),t(x)]),_:2},1024)]),_:1}))}}),ue=k("div",{class:"text-h5 font-weight-bold"},"TopUp License",-1),we=w({__name:"RequestedLicense",setup(h){return(R,m)=>(c(),v(te,{fluid:""},{default:e(()=>[t(T,null,{default:e(()=>[t(U,null,{default:e(()=>[ue]),_:1})]),_:1}),t(T,null,{default:e(()=>[t(U,null,{default:e(()=>[t(re,{"list-requested-license":C(A)},{create:e(({loadRequestedLicense:u})=>[t(ne,{onCreated:u},null,8,["onCreated"])]),_:1},8,["list-requested-license"])]),_:1})]),_:1})]),_:1}))}});export{we as default};
