import{a as U,d as q,l as P}from"./topup-bcbed27b.js";import{u as E}from"./snackbar-867af268.js";import{a as T,b as x,d as y,j as L,V as A}from"./index-6405a72a.js";import{a as R,b as I,V as $}from"./VDataTableServer-921b4e3b.js";import{V as b}from"./VBtn-421a5577.js";import{d as D,o as _,h as V,g as e,f as a,j as l,r as c,R as j,i as B,S as k,m as Y,a as C,a7 as F}from"./index-69d1502a.js";import{V as M}from"./VForm-acfbacb3.js";import{V as O}from"./VTextarea-30e8b5da.js";import{_ as Q}from"./FilterHeaderCheckbox.vue_vue_type_script_setup_true_lang-e8950ebf.js";import{b as S,a as w,V as H}from"./VRow-1f387fa0.js";import{V as h}from"./VChip-b541bb3f.js";import"./api-77cd4ed9.js";import"./tag-446592ee.js";import"./VList-0497e142.js";import"./lazy-eda09f13.js";import"./filter-bfc06a5f.js";import"./VTextField-f7af6f26.js";const z=D({__name:"ApproveLicense",props:{licenseId:{}},emits:["approved"],setup(g,{emit:p}){const r=g,i=p,o=E();function f(u){U(r.licenseId).then(()=>{i("approved"),u.value=!1,o.showSnackbar("Approve license success","success")}).catch(()=>{o.showSnackbar("Approve license failed","error")})}return(u,v)=>(_(),V(I,{width:"auto",activator:"parent"},{default:e(({isActive:m})=>[a(A,null,{default:e(()=>[a(T,null,{default:e(()=>[a(x,null,{default:e(()=>[l(" Approve ")]),_:1})]),_:1}),a(y,null,{default:e(()=>[l(" Are you sure to approve this license? ")]),_:1}),a(L,null,{default:e(()=>[a(R),a(b,{onClick:n=>f(m),class:"bg-primary"},{default:e(()=>[l(" APPROVE ")]),_:2},1032,["onClick"]),a(b,{onClick:n=>m.value=!1,color:"primary"},{default:e(()=>[l(" CANCEL ")]),_:2},1032,["onClick"])]),_:2},1024)]),_:2},1024)]),_:1}))}}),G=D({__name:"DeclineLicense",props:{licenseId:{}},emits:["declined"],setup(g,{emit:p}){const r=c(),i=c(""),o=g,f=p,u=E();async function v(m){const{valid:n}=await r.value.validate();n&&q(o.licenseId,i.value).then(()=>{f("declined"),m.value=!1,u.showSnackbar("Decline license success","success")}).catch(()=>{u.showSnackbar("Decline license success","error")})}return(m,n)=>(_(),V(I,{width:"auto",activator:"parent"},{default:e(({isActive:d})=>[a(A,null,{default:e(()=>[a(T,null,{default:e(()=>[a(x,null,{default:e(()=>[l(" Decline ")]),_:1})]),_:1}),a(y,null,{default:e(()=>[l(" Are you sure to approve this license? ")]),_:1}),a(y,null,{default:e(()=>[a(M,{ref_key:"myForm",ref:r},{default:e(()=>[a(O,{modelValue:i.value,"onUpdate:modelValue":n[0]||(n[0]=s=>i.value=s),rules:[s=>!!s],label:"Notes"},null,8,["modelValue","rules"])]),_:1},512)]),_:1}),a(L,null,{default:e(()=>[a(R),a(b,{onClick:s=>v(d),class:"bg-primary"},{default:e(()=>[l(" DECLINE ")]),_:2},1032,["onClick"]),a(b,{onClick:s=>d.value=!1,color:"primary"},{default:e(()=>[l(" CANCEL ")]),_:2},1032,["onClick"])]),_:2},1024)]),_:2},1024)]),_:1}))}}),J=C("div",{class:"text-h5 font-weight-bold"},"Approval License",-1),K={class:"d-flex justify-center"},W={class:"d-flex justify-center align-center"},ve=D({__name:"ApprovalLicense",setup(g){const p=c(1),r=c(10),i=c(100),o=c(!0),f=c([]),u=[{label:"Approved",value:"approved"},{label:"Declined",value:"declined"},{label:"Pending",value:"pending"}],v=c(u.map(d=>d.value)),m=[{title:"REQUESTER",key:"requester"},{title:"ISSUER",key:"issuer"},{title:"QUOTA",key:"quota"},{title:"REQUEST DATE",key:"createdAt"},{title:"STATUS",key:"state",sortable:!1,align:"center"},{title:"ACTION",key:"action",sortable:!1,align:"center"}];function n(){o.value=!0,P({limit:r.value,page:p.value,states:v.value}).then(async d=>{const s=d.data.result.topupRequests;s!=null&&(f.value=s),i.value=d.data.result.recordsCount}).finally(()=>{setTimeout(()=>{o.value=!1},2e3)})}return j(()=>{n()}),(d,s)=>(_(),V(H,{fluid:""},{default:e(()=>[a(w,null,{default:e(()=>[a(S,null,{default:e(()=>[J]),_:1})]),_:1}),a(w,null,{default:e(()=>[a(S,null,{default:e(()=>[a(A,null,{default:e(()=>[a(y,null,{default:e(()=>[a($,{"return-object":"","show-select":"",color:"secondary",page:p.value,"onUpdate:page":s[1]||(s[1]=t=>p.value=t),"items-per-page":r.value,"onUpdate:itemsPerPage":s[2]||(s[2]=t=>r.value=t),headers:m,"items-length":i.value,items:f.value,loading:o.value,"item-value":"name"},{loading:e(()=>[l(" Loading approval licenses... ")]),"item.state":e(({item:t})=>[t.state=="approved"?(_(),V(h,{key:0,label:"",color:"success"},{default:e(()=>[l(" Approved ")]),_:1})):t.state=="pending"?(_(),V(h,{key:1,label:"",color:"warning"},{default:e(()=>[l(" Pending ")]),_:1})):t.state=="declined"?(_(),V(h,{key:2,label:"",color:"error"},{default:e(()=>[l(" Declined ")]),_:1})):B("",!0)]),"item.createdAt":e(({item:t})=>[l(k(Y(F)(t.createdAt,"DD MMM YYYY HH:mm")),1)]),"item.action":e(({item:t})=>[C("div",K,[a(b,{disabled:t.state!="pending",color:"success",class:"me-2"},{default:e(()=>[l(" Approve "),a(z,{onApproved:n,"license-id":t.id},null,8,["license-id"])]),_:2},1032,["disabled"]),a(b,{disabled:t.state!="pending",color:"error"},{default:e(()=>[l(" Decline "),a(G,{onDeclined:n,"license-id":t.id},null,8,["license-id"])]),_:2},1032,["disabled"])])]),"item.issuer":e(({item:t})=>[l(k(t.issuer.name),1)]),"item.requester":e(({item:t})=>[l(k(t.requester.name),1)]),"header.state":e(({column:t})=>[C("span",W,[C("div",null,k(t.title),1),a(Q,{disabled:o.value,items:u,modelValue:v.value,"onUpdate:modelValue":s[0]||(s[0]=N=>v.value=N)},null,8,["disabled","modelValue"])])]),_:2},1032,["page","items-per-page","items-length","items","loading"])]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}))}});export{ve as default};
