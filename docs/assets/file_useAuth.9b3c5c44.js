import{a as t,b as r,r as u,x as n,y as i}from"./file_index.285f0698.js";const f=()=>{const a=t(),e=r(),s=u({email:"",password:"",showPass:!1,haveErrors:!1});return{formValues:s,togglePass:()=>{s.value.showPass=!s.value.showPass},submitLogin:async()=>{s.value.haveErrors=!1;const o=await n(s.value.email,s.value.password);if(!o){s.value.haveErrors=!0;return}e.login(o),a.push({name:"tasks"})},submitSingin:async()=>{await i(s.value.email,s.value.password)&&a.push({name:"confirm"})},redirect:()=>{e.isAuth&&a.push({name:"tasks"})},guardRoute:()=>{e.isAuth||a.push({name:"login"})}}};export{f as u};
