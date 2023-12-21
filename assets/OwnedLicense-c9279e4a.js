import{q as I,r as M}from"./lazy-bd4f37e9.js";import{_ as R}from"./MessageDialog.vue_vue_type_script_setup_true_lang-ad63b288.js";import{d as D,r as i,o as n,h as d,g as e,f as t,j as l,a as A,m as p,c as P,S as m,a7 as N,a8 as w}from"./index-3573355a.js";import{b as v,a as k,d as g,V as L,i as C}from"./index-8e303578.js";import{V as b,p as Y}from"./VBtn-4acdbe86.js";import{V as B}from"./VDataTableServer-0715b14a.js";import{V as x}from"./VChip-5b2c32d2.js";import{b as _,a as S,V as $}from"./VRow-3e89ef20.js";import{V}from"./VSkeletonLoader-bdc653cf.js";import"./tag-49144cbd.js";import"./VList-c72b8c8a.js";import"./filter-5d2ebabd.js";import"./VTextField-e0e32189.js";const F={class:"d-flex"},H={key:1},O=D({__name:"LockedLicenseTable",props:{getLockedLogs:{type:Function}},setup(c){const a=i(1),u=i(10),f=i(100),r=i(!0),T=[{title:"IDENTIFIER",key:"lockIdentifier"},{title:"STATUS",key:"success"},{title:"CREATED AT",key:"createdAt"}],E=c,y=i([]);function U(){r.value=!0,E.getLockedLogs({limit:u.value,page:a.value}).then(h=>{const o=h.data.result;y.value=o.logs||[],f.value=o.recordsCount}).finally(()=>{setTimeout(()=>{r.value=!1},2e3)})}return(h,o)=>(n(),d(L,null,{default:e(()=>[t(k,null,{default:e(()=>[t(v,null,{default:e(()=>[l("Locked License Log ")]),_:1})]),_:1}),t(g,{class:"mt-2"},{default:e(()=>[A("div",F,[t(b,{variant:"outlined","prepend-icon":p(I)},{default:e(()=>[l(" EXPORT ")]),_:1},8,["prepend-icon"])])]),_:1}),t(g,null,{default:e(()=>[t(B,{"return-object":"",color:"secondary",page:a.value,"onUpdate:page":o[0]||(o[0]=s=>a.value=s),"items-per-page":u.value,"onUpdate:itemsPerPage":o[1]||(o[1]=s=>u.value=s),headers:T,"items-length":f.value,items:y.value,loading:r.value,"item-value":"name","onUpdate:options":U},{loading:e(()=>[l(" Loading locked license log... ")]),"item.success":e(({item:s})=>[s.success==!0?(n(),d(x,{key:0,label:"",color:"success"},{default:e(()=>[l(" Success ")]),_:1})):(n(),P("div",H,[t(x,{class:"me-2",label:"",color:"error"},{default:e(()=>[l(" Error ")]),_:1}),t(b,{icon:"",size:"small",variant:"text"},{default:e(()=>[t(Y,null,{default:e(()=>[l(m(p(M)),1)]),_:1}),t(R,{title:"Error Message",message:s.errorMessage},null,8,["message"])]),_:2},1024)]))]),"item.createdAt":e(({item:s})=>[l(m(p(N)(s.createdAt,"DD MMM YYYY HH:mm")),1)]),_:2},1032,["page","items-per-page","items-length","items","loading"])]),_:1})]),_:1}))}}),j={class:"d-flex"},q={key:1},z=D({__name:"UsedLicenseTable",props:{getUsedLogs:{type:Function}},setup(c){const a=i(1),u=i(10),f=i(100),r=i(!0),T=[{title:"IDENTIFIER",key:"lockIdentifier"},{title:"STATUS",key:"success"},{title:"CREATED AT",key:"createdAt"},{title:"CARD NUMBER",key:"cardNumber"}],E=c,y=i([]);function U(){r.value=!0,E.getUsedLogs({limit:u.value,page:a.value}).then(h=>{const o=h.data.result;y.value=o.logs||[],f.value=o.recordsCount}).finally(()=>{setTimeout(()=>{r.value=!1},2e3)})}return(h,o)=>(n(),d(L,null,{default:e(()=>[t(k,null,{default:e(()=>[t(v,null,{default:e(()=>[l("Used License Log ")]),_:1})]),_:1}),t(g,{class:"mt-2"},{default:e(()=>[A("div",j,[t(b,{variant:"outlined","prepend-icon":p(I)},{default:e(()=>[l(" EXPORT ")]),_:1},8,["prepend-icon"])])]),_:1}),t(g,null,{default:e(()=>[t(B,{"return-object":"",color:"secondary",page:a.value,"onUpdate:page":o[0]||(o[0]=s=>a.value=s),"items-per-page":u.value,"onUpdate:itemsPerPage":o[1]||(o[1]=s=>u.value=s),headers:T,"items-length":f.value,items:y.value,loading:r.value,"item-value":"name","onUpdate:options":U},{loading:e(()=>[l(" Loading used license log... ")]),"item.success":e(({item:s})=>[s.success==!0?(n(),d(x,{key:0,label:"",color:"success"},{default:e(()=>[l(" Success ")]),_:1})):(n(),P("div",q,[t(x,{class:"me-2",label:"",color:"error"},{default:e(()=>[l(" Error ")]),_:1}),t(b,{icon:"",size:"small",variant:"text"},{default:e(()=>[t(Y,null,{default:e(()=>[l(m(p(M)),1)]),_:1}),t(R,{title:"Error Message",message:s.errorMessage},null,8,["message"])]),_:2},1024)]))]),"item.createdAt":e(({item:s})=>[l(m(p(N)(s.createdAt,"DD MMM YYYY HH:mm")),1)]),_:2},1032,["page","items-per-page","items-length","items","loading"])]),_:1})]),_:1}))}});async function X({limit:c=10,page:a=1}){return await w.get("/licenses/lock",{params:{limit:c,page:a}})}async function G({limit:c=10,page:a=1}){return await w.get("/licenses/consume",{params:{limit:c,page:a}})}async function J(){return await w.get("/licenses")}const K=A("div",{class:"text-h5 font-weight-bold"},"Owned License",-1),re=D({__name:"OwnedLicense",setup(c){const a=i({reservedCount:0,availableCount:0,lockedCount:0,consumedCount:0}),u=i(!0);return J().then(f=>{const r=f.data.result;a.value=r}).finally(()=>{setTimeout(()=>{u.value=!1},2e3)}),(f,r)=>(n(),d($,{fluid:""},{default:e(()=>[t(S,null,{default:e(()=>[t(_,null,{default:e(()=>[K]),_:1})]),_:1}),t(S,null,{default:e(()=>[t(_,null,{default:e(()=>[t(L,null,{default:e(()=>[t(k,null,{default:e(()=>[t(v,null,{default:e(()=>[l(" Reserved License ")]),_:1}),t(C,null,{default:e(()=>[l("description")]),_:1})]),_:1}),u.value?(n(),d(V,{key:0,class:"mt-0",type:"heading"})):(n(),d(g,{key:1,class:"text-h4 font-weight-bold"},{default:e(()=>[l(m(a.value.reservedCount.toLocaleString("id")),1)]),_:1}))]),_:1})]),_:1}),t(_,null,{default:e(()=>[t(L,null,{default:e(()=>[t(k,null,{default:e(()=>[t(v,null,{default:e(()=>[l(" Remaining License ")]),_:1}),t(C,null,{default:e(()=>[l("description")]),_:1})]),_:1}),u.value?(n(),d(V,{key:0,class:"mt-0",type:"heading"})):(n(),d(g,{key:1,class:"text-h4 font-weight-bold"},{default:e(()=>[l(m(a.value.availableCount.toLocaleString("id")),1)]),_:1}))]),_:1})]),_:1}),t(_,null,{default:e(()=>[t(L,null,{default:e(()=>[t(k,null,{default:e(()=>[t(v,null,{default:e(()=>[l(" Locked License ")]),_:1}),t(C,null,{default:e(()=>[l("description")]),_:1})]),_:1}),u.value?(n(),d(V,{key:0,class:"mt-0",type:"heading"})):(n(),d(g,{key:1,class:"text-h4 font-weight-bold"},{default:e(()=>[l(m(a.value.lockedCount.toLocaleString("id")),1)]),_:1}))]),_:1})]),_:1}),t(_,null,{default:e(()=>[t(L,null,{default:e(()=>[t(k,null,{default:e(()=>[t(v,null,{default:e(()=>[l(" Used License ")]),_:1}),t(C,null,{default:e(()=>[l("description")]),_:1})]),_:1}),u.value?(n(),d(V,{key:0,class:"mt-0",type:"heading"})):(n(),d(g,{key:1,class:"text-h4 font-weight-bold"},{default:e(()=>[l(m(a.value.consumedCount.toLocaleString("id")),1)]),_:1}))]),_:1})]),_:1})]),_:1}),t(S,null,{default:e(()=>[t(_,{cols:"12",xxl:"6"},{default:e(()=>[t(O,{"get-locked-logs":p(X)},null,8,["get-locked-logs"])]),_:1}),t(_,{cols:"12",xxl:"6"},{default:e(()=>[t(z,{"get-used-logs":p(G)},null,8,["get-used-logs"])]),_:1})]),_:1})]),_:1}))}});export{re as default};
