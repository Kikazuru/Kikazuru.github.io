import{_ as T}from"./ViewGroup.vue_vue_type_script_setup_true_lang-9b79d255.js";import{s as b}from"./lazy-bd4f37e9.js";import{d as D,r as N}from"./group-2577dbdb.js";import{u as w}from"./snackbar-93bdc399.js";import{p as $,V as p}from"./VBtn-4acdbe86.js";import{a as x,b as G,j as y,V as E}from"./index-8e303578.js";import{a as m,b as S}from"./VDataTableServer-0715b14a.js";import{d as _,o as h,h as v,g as t,f as e,a as C,j as r,S as I,m as g}from"./index-3573355a.js";import{l as R}from"./group-4b81b9a3.js";import{b as k,a as V,V as j}from"./VRow-3e89ef20.js";import"./FilterHeaderCheckbox.vue_vue_type_script_setup_true_lang-1228bb4a.js";import"./VList-c72b8c8a.js";import"./tag-49144cbd.js";import"./filter-5d2ebabd.js";import"./VTextField-e0e32189.js";import"./VChip-5b2c32d2.js";import"./permission-4358f34e.js";import"./api-61c700d5.js";const B={class:"d-flex justify-end mb-2"},A=_({__name:"DeleteGroup",props:{groupId:{}},emits:["update:modelValue","update:show","deleted"],setup(c,{emit:d}){const i=c,s=d,a=w();function f(l){D(i.groupId).then(u=>{if(!u.data.success)throw Error;s("deleted"),a.showSnackbar("Group user data has been deleted!","success"),setTimeout(()=>{l.value=!1},1e3)}).catch(()=>{a.showSnackbar("Failed to delete group user!","error")})}return(l,u)=>(h(),v(S,{width:"auto",activator:"parent"},{default:t(({isActive:o})=>[e(E,{class:"text-center pa-4",rounded:"lg"},{default:t(()=>[C("div",B,[e($,{onClick:n=>o.value=!1,size:"small"},{default:t(()=>[r(I(g(b)),1)]),_:2},1032,["onClick"])]),e(x,null,{default:t(()=>[e(G,null,{default:t(()=>[r(" Are you sure want to delete the user group? ")]),_:1})]),_:1}),e(y,null,{default:t(()=>[e(m),e(p,{onClick:n=>o.value=!1,variant:"flat",color:"primary"},{default:t(()=>[r(" CANCEL ")]),_:2},1032,["onClick"]),e(p,{onClick:n=>f(o),color:"primary"},{default:t(()=>[r(" DELETE ")]),_:2},1032,["onClick"]),e(m)]),_:2},1024)]),_:2},1024)]),_:1}))}}),L={class:"d-flex justify-end mb-2"},z=_({__name:"ReactivateGroup",props:{groupId:{}},emits:["update:modelValue","update:show","reactivated"],setup(c,{emit:d}){const i=c,s=d,a=w();function f(l){N(i.groupId).then(u=>{if(!u.data.success)throw Error;a.showSnackbar("Group user data has been reactivated!","success"),s("reactivated"),setTimeout(()=>{l.value=!1},1e3)}).catch(()=>{a.showSnackbar("Failed to reactivate group user!","error")})}return(l,u)=>(h(),v(S,{width:"auto",activator:"parent"},{default:t(({isActive:o})=>[e(E,{class:"text-center pa-4",rounded:"lg"},{default:t(()=>[C("div",L,[e($,{onClick:n=>o.value=!1,size:"small"},{default:t(()=>[r(I(g(b)),1)]),_:2},1032,["onClick"])]),e(x,null,{default:t(()=>[e(G,null,{default:t(()=>[r(" Are you sure want to reactivate the user group? ")]),_:1})]),_:1}),e(y,null,{default:t(()=>[e(m),e(p,{onClick:n=>f(o),variant:"flat",color:"primary"},{default:t(()=>[r(" REACTIVATE ")]),_:2},1032,["onClick"]),e(p,{onClick:n=>o.value=!1,color:"primary"},{default:t(()=>[r(" CANCEL ")]),_:2},1032,["onClick"]),e(m)]),_:2},1024)]),_:2},1024)]),_:1}))}}),F=C("div",{class:"text-h5 font-weight-bold"},"User Groups",-1),se=_({__name:"GroupManagement",setup(c){return(d,i)=>(h(),v(j,{fluid:""},{default:t(()=>[e(V,null,{default:t(()=>[e(k,null,{default:t(()=>[F]),_:1})]),_:1}),e(V,null,{default:t(()=>[e(k,null,{default:t(()=>[e(T,{"list-group":g(R)},{delete:t(({loadGroups:s,group:a})=>[e(A,{"group-id":a.id,onDeleted:s},null,8,["group-id","onDeleted"])]),reactivate:t(({loadGroups:s,group:a})=>[e(z,{"group-id":a.id,onReactivated:s},null,8,["group-id","onReactivated"])]),_:1},8,["list-group"])]),_:1})]),_:1})]),_:1}))}});export{se as default};
