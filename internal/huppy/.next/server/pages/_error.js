"use strict";(()=>{var e={};e.id=820,e.ids=[820,888,660],e.modules={6021:(e,t)=>{Object.defineProperty(t,"l",{enumerable:!0,get:function(){return function e(t,r){return r in t?t[r]:"then"in t&&"function"==typeof t.then?t.then(t=>e(t,r)):"function"==typeof t&&"default"===r?t:void 0}}})},7450:(e,t,r)=>{r.r(t),r.d(t,{config:()=>h,default:()=>u,getServerSideProps:()=>f,getStaticPaths:()=>p,getStaticProps:()=>c,reportWebVitals:()=>g,routeModule:()=>x,unstable_getServerProps:()=>_,unstable_getServerSideProps:()=>P,unstable_getStaticParams:()=>b,unstable_getStaticPaths:()=>y,unstable_getStaticProps:()=>m});var n=r(8877),o=r(4591),a=r(6021),l=r(9902),i=r.n(l),s=r(8627),d=r(1445);let u=(0,a.l)(d,"default"),c=(0,a.l)(d,"getStaticProps"),p=(0,a.l)(d,"getStaticPaths"),f=(0,a.l)(d,"getServerSideProps"),h=(0,a.l)(d,"config"),g=(0,a.l)(d,"reportWebVitals"),m=(0,a.l)(d,"unstable_getStaticProps"),y=(0,a.l)(d,"unstable_getStaticPaths"),b=(0,a.l)(d,"unstable_getStaticParams"),_=(0,a.l)(d,"unstable_getServerProps"),P=(0,a.l)(d,"unstable_getServerSideProps"),x=new n.PagesRouteModule({definition:{kind:o.x.PAGES,page:"/_error",pathname:"/_error",bundlePath:"",filename:""},components:{App:s.default,Document:i()},userland:d})},8627:(e,t,r)=>{r.r(t),r.d(t,{default:()=>l});var n=r(997);let o=require("next/head");var a=r.n(o);function l({Component:e,pageProps:t}){return(0,n.jsxs)(n.Fragment,{children:[n.jsx(a(),{children:n.jsx("script",{async:!0,src:"https://cdn.tailwindcss.com"})}),n.jsx(e,{...t})]})}},1445:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return u}});let n=r(9152),o=r(997),a=n._(r(6689)),l=n._(r(44)),i={400:"Bad Request",404:"This page could not be found",405:"Method Not Allowed",500:"Internal Server Error"};function s(e){let{res:t,err:r}=e;return{statusCode:t&&t.statusCode?t.statusCode:r?r.statusCode:404}}let d={error:{fontFamily:'system-ui,"Segoe UI",Roboto,Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji"',height:"100vh",textAlign:"center",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"},desc:{lineHeight:"48px"},h1:{display:"inline-block",margin:"0 20px 0 0",paddingRight:23,fontSize:24,fontWeight:500,verticalAlign:"top"},h2:{fontSize:14,fontWeight:400,lineHeight:"28px"},wrap:{display:"inline-block"}};class u extends a.default.Component{render(){let{statusCode:e,withDarkMode:t=!0}=this.props,r=this.props.title||i[e]||"An unexpected error has occurred";return(0,o.jsxs)("div",{style:d.error,children:[(0,o.jsx)(l.default,{children:(0,o.jsx)("title",{children:e?e+": "+r:"Application error: a client-side exception has occurred"})}),(0,o.jsxs)("div",{style:d.desc,children:[(0,o.jsx)("style",{dangerouslySetInnerHTML:{__html:"body{color:#000;background:#fff;margin:0}.next-error-h1{border-right:1px solid rgba(0,0,0,.3)}"+(t?"@media (prefers-color-scheme:dark){body{color:#fff;background:#000}.next-error-h1{border-right:1px solid rgba(255,255,255,.3)}}":"")}}),e?(0,o.jsx)("h1",{className:"next-error-h1",style:d.h1,children:e}):null,(0,o.jsx)("div",{style:d.wrap,children:(0,o.jsxs)("h2",{style:d.h2,children:[this.props.title||e?r:(0,o.jsx)(o.Fragment,{children:"Application error: a client-side exception has occurred (see the browser console for more information)"}),"."]})})]})]})}}u.displayName="ErrorPage",u.getInitialProps=s,u.origGetInitialProps=s,("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},8811:(e,t)=>{function r(e){let{ampFirst:t=!1,hybrid:r=!1,hasQuery:n=!1}=void 0===e?{}:e;return t||r&&n}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"isInAmpMode",{enumerable:!0,get:function(){return r}})},44:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{default:function(){return g},defaultHead:function(){return c}});let n=r(9152),o=r(2079),a=r(997),l=o._(r(6689)),i=n._(r(3558)),s=r(3826),d=r(6566),u=r(8811);function c(e){void 0===e&&(e=!1);let t=[(0,a.jsx)("meta",{charSet:"utf-8"})];return e||t.push((0,a.jsx)("meta",{name:"viewport",content:"width=device-width"})),t}function p(e,t){return"string"==typeof t||"number"==typeof t?e:t.type===l.default.Fragment?e.concat(l.default.Children.toArray(t.props.children).reduce((e,t)=>"string"==typeof t||"number"==typeof t?e:e.concat(t),[])):e.concat(t)}r(8485);let f=["name","httpEquiv","charSet","itemProp"];function h(e,t){let{inAmpMode:r}=t;return e.reduce(p,[]).reverse().concat(c(r).reverse()).filter(function(){let e=new Set,t=new Set,r=new Set,n={};return o=>{let a=!0,l=!1;if(o.key&&"number"!=typeof o.key&&o.key.indexOf("$")>0){l=!0;let t=o.key.slice(o.key.indexOf("$")+1);e.has(t)?a=!1:e.add(t)}switch(o.type){case"title":case"base":t.has(o.type)?a=!1:t.add(o.type);break;case"meta":for(let e=0,t=f.length;e<t;e++){let t=f[e];if(o.props.hasOwnProperty(t)){if("charSet"===t)r.has(t)?a=!1:r.add(t);else{let e=o.props[t],r=n[t]||new Set;("name"!==t||!l)&&r.has(e)?a=!1:(r.add(e),n[t]=r)}}}}return a}}()).reverse().map((e,t)=>{let n=e.key||t;if(!r&&"link"===e.type&&e.props.href&&["https://fonts.googleapis.com/css","https://use.typekit.net/"].some(t=>e.props.href.startsWith(t))){let t={...e.props||{}};return t["data-href"]=t.href,t.href=void 0,t["data-optimized-fonts"]=!0,l.default.cloneElement(e,t)}return l.default.cloneElement(e,{key:n})})}let g=function(e){let{children:t}=e,r=(0,l.useContext)(s.AmpStateContext),n=(0,l.useContext)(d.HeadManagerContext);return(0,a.jsx)(i.default,{reduceComponentsToState:h,headManager:n,inAmpMode:(0,u.isInAmpMode)(r),children:t})};("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},3558:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return l}});let n=r(6689),o=()=>{},a=()=>{};function l(e){var t;let{headManager:r,reduceComponentsToState:l}=e;function i(){if(r&&r.mountedInstances){let t=n.Children.toArray(Array.from(r.mountedInstances).filter(Boolean));r.updateHead(l(t,e))}}return null==r||null==(t=r.mountedInstances)||t.add(e.children),i(),o(()=>{var t;return null==r||null==(t=r.mountedInstances)||t.add(e.children),()=>{var t;null==r||null==(t=r.mountedInstances)||t.delete(e.children)}}),o(()=>(r&&(r._pendingUpdate=i),()=>{r&&(r._pendingUpdate=i)})),a(()=>(r&&r._pendingUpdate&&(r._pendingUpdate(),r._pendingUpdate=null),()=>{r&&r._pendingUpdate&&(r._pendingUpdate(),r._pendingUpdate=null)})),null}},8485:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"warnOnce",{enumerable:!0,get:function(){return r}});let r=e=>{}},4591:(e,t)=>{var r;Object.defineProperty(t,"x",{enumerable:!0,get:function(){return r}}),function(e){e.PAGES="PAGES",e.PAGES_API="PAGES_API",e.APP_PAGE="APP_PAGE",e.APP_ROUTE="APP_ROUTE"}(r||(r={}))},3826:(e,t,r)=>{e.exports=r(8877).vendored.contexts.AmpContext},6566:(e,t,r)=>{e.exports=r(8877).vendored.contexts.HeadManagerContext},2785:e=>{e.exports=require("next/dist/compiled/next-server/pages.runtime.prod.js")},6689:e=>{e.exports=require("react")},997:e=>{e.exports=require("react/jsx-runtime")},1017:e=>{e.exports=require("path")},2079:(e,t)=>{function r(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(r=function(e){return e?n:t})(e)}t._=t._interop_require_wildcard=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var n=r(t);if(n&&n.has(e))return n.get(e);var o={__proto__:null},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var l in e)if("default"!==l&&Object.prototype.hasOwnProperty.call(e,l)){var i=a?Object.getOwnPropertyDescriptor(e,l):null;i&&(i.get||i.set)?Object.defineProperty(o,l,i):o[l]=e[l]}return o.default=e,n&&n.set(e,o),o}}};var t=require("../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),n=t.X(0,[902],()=>r(7450));module.exports=n})();