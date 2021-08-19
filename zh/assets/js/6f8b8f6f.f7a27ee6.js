(self.webpackChunk=self.webpackChunk||[]).push([[27612],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=r.createContext({}),l=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,c=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=l(n),m=i,f=d["".concat(p,".").concat(m)]||d[m]||s[m]||c;return n?r.createElement(f,a(a({ref:t},u),{},{components:n})):r.createElement(f,a({ref:t},u))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var c=n.length,a=new Array(c);a[0]=d;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:i,a[1]=o;for(var l=2;l<c;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},67795:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return a},metadata:function(){return o},toc:function(){return p},default:function(){return u}});var r=n(22122),i=n(19756),c=(n(67294),n(3905)),a={title:"Script"},o={unversionedId:"architecture-design/script",id:"architecture-design/script",isDocsHomePage:!1,title:"Script",description:"\x3c!--",source:"@site/i18n/zh/docusaurus-plugin-content-docs-docs-apisix/current/architecture-design/script.md",sourceDirName:"architecture-design",slug:"/architecture-design/script",permalink:"/zh/docs/apisix/next/architecture-design/script",editUrl:"https://github.com/apache/apisix/edit/master/docs/zh/latest/architecture-design/script.md",version:"current",frontMatter:{title:"Script"},sidebar:"docs",previous:{title:"Plugin",permalink:"/zh/docs/apisix/next/architecture-design/plugin"},next:{title:"Service",permalink:"/zh/docs/apisix/next/architecture-design/service"}},p=[],l={toc:p};function u(e){var t=e.components,n=(0,i.Z)(e,["components"]);return(0,c.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("p",null,(0,c.kt)("inlineCode",{parentName:"p"},"Script")," \u8868\u793a\u5c06\u5728 ",(0,c.kt)("inlineCode",{parentName:"p"},"HTTP")," \u8bf7\u6c42/\u54cd\u5e94\u751f\u547d\u5468\u671f\u671f\u95f4\u6267\u884c\u7684\u811a\u672c\u3002"),(0,c.kt)("p",null,(0,c.kt)("inlineCode",{parentName:"p"},"Script")," \u914d\u7f6e\u53ef\u76f4\u63a5\u7ed1\u5b9a\u5728 ",(0,c.kt)("inlineCode",{parentName:"p"},"Route")," \u4e0a\u3002"),(0,c.kt)("p",null,(0,c.kt)("inlineCode",{parentName:"p"},"Script")," \u4e0e ",(0,c.kt)("inlineCode",{parentName:"p"},"Plugin")," \u4e92\u65a5\uff0c\u4e14\u4f18\u5148\u6267\u884c ",(0,c.kt)("inlineCode",{parentName:"p"},"Script")," \uff0c\u8fd9\u610f\u5473\u7740\u914d\u7f6e ",(0,c.kt)("inlineCode",{parentName:"p"},"Script")," \u540e\uff0c",(0,c.kt)("inlineCode",{parentName:"p"},"Route")," \u4e0a\u914d\u7f6e\u7684 ",(0,c.kt)("inlineCode",{parentName:"p"},"Plugin")," \u5c06\u4e0d\u88ab\u6267\u884c\u3002"),(0,c.kt)("p",null,"\u7406\u8bba\u4e0a\uff0c\u5728 ",(0,c.kt)("inlineCode",{parentName:"p"},"Script")," \u4e2d\u53ef\u4ee5\u5199\u4efb\u610f lua \u4ee3\u7801\uff0c\u4e5f\u53ef\u4ee5\u76f4\u63a5\u8c03\u7528\u5df2\u6709\u63d2\u4ef6\u4ee5\u91cd\u7528\u5df2\u6709\u7684\u4ee3\u7801\u3002"),(0,c.kt)("p",null,(0,c.kt)("inlineCode",{parentName:"p"},"Script")," \u4e5f\u6709\u6267\u884c\u9636\u6bb5\u6982\u5ff5\uff0c\u652f\u6301 ",(0,c.kt)("inlineCode",{parentName:"p"},"access"),"\u3001",(0,c.kt)("inlineCode",{parentName:"p"},"header_filter"),"\u3001",(0,c.kt)("inlineCode",{parentName:"p"},"body_filter")," \u548c ",(0,c.kt)("inlineCode",{parentName:"p"},"log")," \u9636\u6bb5\u3002\u7cfb\u7edf\u4f1a\u5728\u76f8\u5e94\u9636\u6bb5\u4e2d\u81ea\u52a8\u6267\u884c ",(0,c.kt)("inlineCode",{parentName:"p"},"Script")," \u811a\u672c\u4e2d\u5bf9\u5e94\u9636\u6bb5\u7684\u4ee3\u7801\u3002"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-json"},'{\n    ...\n    "script": "local _M = {} \\n function _M.access(api_ctx) \\n ngx.log(ngx.INFO,\\"hit access phase\\") \\n end \\nreturn _M"\n}\n')))}u.isMDXComponent=!0}}]);