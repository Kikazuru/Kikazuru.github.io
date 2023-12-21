import{b as K}from"./VList-c72b8c8a.js";import{V as W}from"./VAutocomplete-761bbdb7.js";import{d as X,z as d,r as k,o as ee,h as te,g as M,f as u,j as le,q as ne,a9 as ae,x as oe,C as ue,y as ie,w as se,J as re,ab as ce,D as w,Y as P,ac as $,Z as de,ad as fe}from"./index-3573355a.js";import{m as me,a as pe,u as ve,b as D,f as ye,c as he,d as Ve}from"./VTextField-e0e32189.js";import{h as ge}from"./index-8e303578.js";import{V as Ce}from"./VChip-5b2c32d2.js";const Ae=X({__name:"QuantityInput",props:{modelValue:{}},emits:["update:modelValue"],setup(e,{emit:m}){const I=e,C=m,l=d({get(){return I.modelValue},set(i){C("update:modelValue",i)}}),p=k([]);function n(i){const s=[];for(let o=0;o<5;o++){const r=i*Math.pow(10,o)*1e5;s.push({title:r.toLocaleString("id"),value:r})}return s}p.value=n(1);function v(i){if(i){const s=i.split(".").join(""),o=parseInt(s);if(!isNaN(o)&&o!=l.value){let r=o,y=5;for(;r%10==0&&y>0;)r/=10,y--;p.value=n(r)}}}return(i,s)=>(ee(),te(W,{items:p.value,"item-title":"title","item-value":"value","onUpdate:search":v,"filter-keys":["value","title"],modelValue:l.value,"onUpdate:modelValue":s[0]||(s[0]=o=>l.value=o),hint:"The quantity that can be selected is a multiple of one hundred thousand","persistent-hint":"",label:"Quantity"},{"append-item":M(()=>[u(K,null,{default:M(()=>[le(" Input the number and select it ")]),_:1})]),_:1},8,["items","modelValue"]))}});const be=ne({chips:Boolean,counter:Boolean,counterSizeString:{type:String,default:"$vuetify.fileInput.counterSize"},counterString:{type:String,default:"$vuetify.fileInput.counter"},multiple:Boolean,showSize:{type:[Boolean,Number],default:!1,validator:e=>typeof e=="boolean"||[1e3,1024].includes(e)},...me({prependIcon:"$file"}),modelValue:{type:Array,default:()=>[],validator:e=>ae(e).every(m=>m!=null&&typeof m=="object")},...pe({clearable:!0})},"VFileInput"),Be=oe()({name:"VFileInput",inheritAttrs:!1,props:be(),emits:{"click:control":e=>!0,"mousedown:control":e=>!0,"update:focused":e=>!0,"update:modelValue":e=>!0},setup(e,m){let{attrs:I,emit:C,slots:l}=m;const{t:p}=ue(),n=ie(e,"modelValue"),{isFocused:v,focus:i,blur:s}=ve(e),o=d(()=>typeof e.showSize!="boolean"?e.showSize:void 0),r=d(()=>(n.value??[]).reduce((t,a)=>{let{size:h=0}=a;return t+h},0)),y=d(()=>$(r.value,o.value)),S=d(()=>(n.value??[]).map(t=>{const{name:a="",size:h=0}=t;return e.showSize?`${a} (${$(h,o.value)})`:a})),j=d(()=>{var a;const t=((a=n.value)==null?void 0:a.length)??0;return e.showSize?p(e.counterSizeString,t,y.value):p(e.counterString,t)}),z=k(),A=k(),f=k(),q=d(()=>v.value||e.active),B=d(()=>["plain","underlined"].includes(e.variant));function F(){var t;f.value!==document.activeElement&&((t=f.value)==null||t.focus()),v.value||i()}function Q(t){R(t)}function T(t){C("mousedown:control",t)}function R(t){var a;(a=f.value)==null||a.click(),C("click:control",t)}function U(t){t.stopPropagation(),F(),de(()=>{n.value=[],fe(e["onClick:clear"],t)})}return se(n,t=>{(!Array.isArray(t)||!t.length)&&f.value&&(f.value.value="")}),re(()=>{const t=!!(l.counter||e.counter),a=!!(t||l.details),[h,L]=ce(I),{modelValue:ke,...E}=D.filterProps(e),J=ye(e);return u(D,w({ref:z,modelValue:n.value,"onUpdate:modelValue":V=>n.value=V,class:["v-file-input",{"v-file-input--chips":!!e.chips,"v-input--plain-underlined":B.value},e.class],style:e.style,"onClick:prepend":Q},h,E,{centerAffix:!B.value,focused:v.value}),{...l,default:V=>{let{id:b,isDisabled:g,isDirty:N,isReadonly:_,isValid:O}=V;return u(he,w({ref:A,"prepend-icon":e.prependIcon,onMousedown:T,onClick:R,"onClick:clear":U,"onClick:prependInner":e["onClick:prependInner"],"onClick:appendInner":e["onClick:appendInner"]},J,{id:b.value,active:q.value||N.value,dirty:N.value,disabled:g.value,focused:v.value,error:O.value===!1}),{...l,default:Y=>{var x;let{props:{class:Z,...G}}=Y;return u(P,null,[u("input",w({ref:f,type:"file",readonly:_.value,disabled:g.value,multiple:e.multiple,name:e.name,onClick:c=>{c.stopPropagation(),_.value&&c.preventDefault(),F()},onChange:c=>{if(!c.target)return;const H=c.target;n.value=[...H.files??[]]},onFocus:F,onBlur:s},G,L),null),u("div",{class:Z},[!!((x=n.value)!=null&&x.length)&&(l.selection?l.selection({fileNames:S.value,totalBytes:r.value,totalBytesReadable:y.value}):e.chips?S.value.map(c=>u(Ce,{key:c,size:"small",color:e.color},{default:()=>[c]})):S.value.join(", "))])])}})},details:a?V=>{var b,g;return u(P,null,[(b=l.details)==null?void 0:b.call(l,V),t&&u(P,null,[u("span",null,null),u(Ve,{active:!!((g=n.value)!=null&&g.length),value:j.value},l.counter)])])}:void 0})}),ge({},z,A,f)}});export{Be as V,Ae as _};
