import{q as p,s as v,x as b,r as F,J as V,f as h}from"./index-033028ba.js";import{i as y,j as R}from"./VTextField-d6d2aeeb.js";import{h as P}from"./index-fc6a3455.js";const k=p({...v(),...y()},"VForm"),S=b()({name:"VForm",props:k(),emits:{"update:modelValue":r=>!0,submit:r=>!0},setup(r,i){let{slots:n,emit:f}=i;const a=R(r),s=F();function l(t){t.preventDefault(),a.reset()}function u(t){const o=t,e=a.validate();o.then=e.then.bind(e),o.catch=e.catch.bind(e),o.finally=e.finally.bind(e),f("submit",o),o.defaultPrevented||e.then(c=>{var m;let{valid:d}=c;d&&((m=s.value)==null||m.submit())}),o.preventDefault()}return V(()=>{var t;return h("form",{ref:s,class:["v-form",r.class],style:r.style,novalidate:!0,onReset:l,onSubmit:u},[(t=n.default)==null?void 0:t.call(n,a)])}),P(a,s)}});export{S as V};
