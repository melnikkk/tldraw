"use strict";(()=>{var e={};e.id=304,e.ids=[304],e.modules={3418:e=>{e.exports=require("@octokit/plugin-retry")},8622:e=>{e.exports=require("lodash.throttle")},5494:e=>{e.exports=require("lodash.uniq")},145:e=>{e.exports=require("next/dist/compiled/next-server/pages-api.runtime.prod.js")},4287:e=>{e.exports=require("octokit")},1122:e=>{e.exports=import("fractional-indexing-jittered")},6206:e=>{e.exports=require("console")},5313:(e,t,r)=>{r.a(e,async(e,i)=>{try{r.r(t),r.d(t,{config:()=>l,default:()=>d,routeModule:()=>p});var a=r(9150),o=r(1631),n=r(6835),s=r(9702),u=e([s]);s=(u.then?(await u)():u)[0];let d=(0,n.l)(s,"default"),l=(0,n.l)(s,"config"),p=new a.PagesAPIRouteModule({definition:{kind:o.x.PAGES_API,page:"/api/dev/getDelivery",pathname:"/api/dev/getDelivery",bundlePath:"",filename:""},userland:s});i()}catch(e){i(e)}})},9702:(e,t,r)=>{r.a(e,async(e,i)=>{try{r.r(t),r.d(t,{default:()=>s});var a=r(7181),o=r(5250),n=e([a,o]);async function s(e,t){(0,a.hu)(!1),(0,a.hu)("GET"===e.method);let r=e.query.id;(0,a.hu)("string"==typeof r);let i=(0,o.xA)(),{data:n}=await i.octokit.rest.apps.getWebhookDelivery({delivery_id:Number(r)});return t.json(n)}[a,o]=n.then?(await n)():n,i()}catch(e){i(e)}})}};var t=require("../../../webpack-api-runtime.js");t.C(e);var r=e=>t(t.s=e),i=t.X(0,[516],()=>r(5313));module.exports=i})();