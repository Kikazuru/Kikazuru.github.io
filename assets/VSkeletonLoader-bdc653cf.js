import{a as f,b as h,s as p,h as k,i as x}from"./VBtn-4acdbe86.js";import{q as y,t as S,x as C,B as w,A as B,C as L,z as V,J as T,f as s,a9 as A}from"./index-3573355a.js";const P={actions:"button@2",article:"heading, paragraph",avatar:"avatar",button:"button",card:"image, heading","card-avatar":"image, list-item-avatar",chip:"chip","date-picker":"list-item, heading, divider, date-picker-options, date-picker-days, actions","date-picker-options":"text, avatar@2","date-picker-days":"avatar@28",divider:"divider",heading:"heading",image:"image","list-item":"text","list-item-avatar":"avatar, text","list-item-two-line":"sentences","list-item-avatar-two-line":"avatar, sentences","list-item-three-line":"paragraph","list-item-avatar-three-line":"avatar, paragraph",ossein:"ossein",paragraph:"text@3",sentences:"text@2",subtitle:"text",table:"table-heading, table-thead, table-tbody, table-tfoot","table-heading":"chip, text","table-thead":"heading@6","table-tbody":"table-row-divider@6","table-row-divider":"table-row, divider","table-row":"text@6","table-tfoot":"text@2, avatar@2",text:"text"};function _(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[];return s("div",{class:["v-skeleton-loader__bone",`v-skeleton-loader__${e}`]},[t])}function r(e){const[t,a]=e.split("@");return Array.from({length:a}).map(()=>i(t))}function i(e){let t=[];if(!e)return t;const a=P[e];if(e!==a){if(e.includes(","))return l(e);if(e.includes("@"))return r(e);a.includes(",")?t=l(a):a.includes("@")?t=r(a):a&&t.push(i(a))}return[_(e,t)]}function l(e){return e.replace(/\s/g,"").split(",").map(i)}const $=y({boilerplate:Boolean,color:String,loading:Boolean,loadingText:{type:String,default:"$vuetify.loading"},type:{type:[String,Array],default:"ossein"},...f(),...h(),...S()},"VSkeletonLoader"),R=C()({name:"VSkeletonLoader",props:$(),setup(e,t){let{slots:a}=t;const{backgroundColorClasses:d,backgroundColorStyles:u}=p(w(e,"color")),{dimensionStyles:c}=k(e),{elevationClasses:g}=x(e),{themeClasses:m}=B(e),{t:v}=L(),b=V(()=>i(A(e.type).join(",")));return T(()=>{var o;const n=!a.default||e.loading;return s("div",{class:["v-skeleton-loader",{"v-skeleton-loader--boilerplate":e.boilerplate},m.value,d.value,g.value],style:[u.value,n?c.value:{}],"aria-busy":e.boilerplate?void 0:n,"aria-live":e.boilerplate?void 0:"polite","aria-label":e.boilerplate?void 0:v(e.loadingText),role:e.boilerplate?void 0:"alert"},[n?b.value:(o=a.default)==null?void 0:o.call(a)])}),{}}});export{R as V};
