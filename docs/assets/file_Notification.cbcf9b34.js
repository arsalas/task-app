import{_ as s}from"./file__plugin-vue_export-helper.e718e6fb.js";import{o,e as i,f as n,E as c,t as _,n as r}from"./file_index.285f0698.js";const l={__name:"Notification",props:{type:String,message:String},emits:["close"],setup(e,{emit:t}){return setTimeout(()=>{t("close")},10*1e3),(m,a)=>(o(),i("div",{class:r(["notification animate__animated animate__backInRight animate__faster",[e.type]])},[n("button",{onClick:a[0]||(a[0]=p=>t("close")),class:"delete"}),c(" "+_(e.message),1)],2))}},u=s(l,[["__scopeId","data-v-49ab83e7"]]);export{u as default};