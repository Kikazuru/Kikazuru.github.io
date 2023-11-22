import{p as u,m as f,j as d,B as O,v as R,a as B,aX as i,at as g,n as k,aG as v}from"./index-765dcdae.js";import{m as y}from"./tag-e542dea2.js";const _=u({fluid:{type:Boolean,default:!1},...f(),...y()},"VContainer"),Y=d()({name:"VContainer",props:_(),setup(e,a){let{slots:t}=a;const{rtlClasses:s}=O();return R(()=>B(e.tag,{class:["v-container",{"v-container--fluid":e.fluid},s.value,e.class],style:e.style},t)),{}}}),N=(()=>i.reduce((e,a)=>(e[a]={type:[Boolean,String,Number],default:!1},e),{}))(),j=(()=>i.reduce((e,a)=>{const t="offset"+g(a);return e[t]={type:[String,Number],default:null},e},{}))(),L=(()=>i.reduce((e,a)=>{const t="order"+g(a);return e[t]={type:[String,Number],default:null},e},{}))(),b={col:Object.keys(N),offset:Object.keys(j),order:Object.keys(L)};function I(e,a,t){let s=e;if(!(t==null||t===!1)){if(a){const n=a.replace(e,"");s+=`-${n}`}return e==="col"&&(s="v-"+s),e==="col"&&(t===""||t===!0)||(s+=`-${t}`),s.toLowerCase()}}const T=["auto","start","end","center","baseline","stretch"],U=u({cols:{type:[Boolean,String,Number],default:!1},...N,offset:{type:[String,Number],default:null},...j,order:{type:[String,Number],default:null},...L,alignSelf:{type:String,default:null,validator:e=>T.includes(e)},...f(),...y()},"VCol"),q=d()({name:"VCol",props:U(),setup(e,a){let{slots:t}=a;const s=k(()=>{const n=[];let l;for(l in b)b[l].forEach(o=>{const c=e[o],S=I(l,o,c);S&&n.push(S)});const r=n.some(o=>o.startsWith("v-col-"));return n.push({"v-col":!r||!e.cols,[`v-col-${e.cols}`]:e.cols,[`offset-${e.offset}`]:e.offset,[`order-${e.order}`]:e.order,[`align-self-${e.alignSelf}`]:e.alignSelf}),n});return()=>{var n;return v(e.tag,{class:[s.value,e.class],style:e.style},(n=t.default)==null?void 0:n.call(t))}}}),m=["start","end","center"],P=["space-between","space-around","space-evenly"];function C(e,a){return i.reduce((t,s)=>{const n=e+g(s);return t[n]=a(),t},{})}const M=[...m,"baseline","stretch"],$=e=>M.includes(e),h=C("align",()=>({type:String,default:null,validator:$})),F=[...m,...P],w=e=>F.includes(e),E=C("justify",()=>({type:String,default:null,validator:w})),K=[...m,...P,"stretch"],A=e=>K.includes(e),G=C("alignContent",()=>({type:String,default:null,validator:A})),V={align:Object.keys(h),justify:Object.keys(E),alignContent:Object.keys(G)},x={align:"align",justify:"justify",alignContent:"align-content"};function z(e,a,t){let s=x[e];if(t!=null){if(a){const n=a.replace(e,"");s+=`-${n}`}return s+=`-${t}`,s.toLowerCase()}}const J=u({dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:$},...h,justify:{type:String,default:null,validator:w},...E,alignContent:{type:String,default:null,validator:A},...G,...f(),...y()},"VRow"),D=d()({name:"VRow",props:J(),setup(e,a){let{slots:t}=a;const s=k(()=>{const n=[];let l;for(l in V)V[l].forEach(r=>{const o=e[r],c=z(l,r,o);c&&n.push(c)});return n.push({"v-row--no-gutters":e.noGutters,"v-row--dense":e.dense,[`align-${e.align}`]:e.align,[`justify-${e.justify}`]:e.justify,[`align-content-${e.alignContent}`]:e.alignContent}),n});return()=>{var n;return v(e.tag,{class:["v-row",s.value,e.class],style:e.style},(n=t.default)==null?void 0:n.call(t))}}});export{Y as V,D as a,q as b};
