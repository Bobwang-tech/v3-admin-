import{q as o,M as s,av as e,p as a,aJ as r,K as t,y as i,b as n}from"./index-89c7128d.js";class l extends Error{constructor(o){super(o),this.name="ElementPlusError"}}function d(o,s){throw new l(`[${o}] ${s}`)}function u(o,s){}const v="update:modelValue",m="change",c="input",p=Symbol("formContextKey"),f=Symbol("formItemContextKey"),b=e=>{const a=s();return o((()=>{var o,s;return null!=(s=null==(o=a.proxy)?void 0:o.$props[e])?s:void 0}))},y=e({type:String,values:n,required:!1}),x=(s,e={})=>{const n=a(void 0),l=e.prop?n:b("size"),d=e.global?n:r("size"),u=e.form?{size:void 0}:t(p,void 0),v=e.formItem?{size:void 0}:t(f,void 0);return o((()=>l.value||i(s)||(null==v?void 0:v.size)||(null==u?void 0:u.size)||d.value||""))},z=s=>{const e=b("disabled"),a=t(p,void 0);return o((()=>e.value||i(s)||(null==a?void 0:a.disabled)||!1))},I=()=>({form:t(p,void 0),formItem:t(f,void 0)});export{m as C,c as I,v as U,z as a,x as b,y as c,u as d,f as e,p as f,d as t,I as u};
