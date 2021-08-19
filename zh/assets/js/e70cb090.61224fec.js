(self.webpackChunk=self.webpackChunk||[]).push([[53723],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return u},kt:function(){return m}});var r=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var p=r.createContext({}),c=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=c(e.components);return r.createElement(p.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(t),m=i,f=d["".concat(p,".").concat(m)]||d[m]||s[m]||a;return t?r.createElement(f,o(o({ref:n},u),{},{components:t})):r.createElement(f,o({ref:n},u))}));function m(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,o=new Array(a);o[0]=d;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var c=2;c<a;c++)o[c]=t[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},61688:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return o},metadata:function(){return l},toc:function(){return p},default:function(){return u}});var r=t(22122),i=t(19756),a=(t(67294),t(3905)),o={title:"Plugin"},l={unversionedId:"architecture-design/plugin",id:"version-2.7/architecture-design/plugin",isDocsHomePage:!1,title:"Plugin",description:"\x3c!--",source:"@site/i18n/zh/docusaurus-plugin-content-docs-docs-apisix/version-2.7/architecture-design/plugin.md",sourceDirName:"architecture-design",slug:"/architecture-design/plugin",permalink:"/zh/docs/apisix/2.7/architecture-design/plugin",editUrl:"https://github.com/apache/apisix/edit/master/docs/zh/latest/architecture-design/plugin.md",version:"2.7",frontMatter:{title:"Plugin"},sidebar:"version-2.7/docs",previous:{title:"Route",permalink:"/zh/docs/apisix/2.7/architecture-design/route"},next:{title:"Script",permalink:"/zh/docs/apisix/2.7/architecture-design/script"}},p=[{value:"\u70ed\u52a0\u8f7d",id:"\u70ed\u52a0\u8f7d",children:[]},{value:"stand-alone \u6a21\u5f0f\u4e0b\u7684\u70ed\u52a0\u8f7d",id:"stand-alone-\u6a21\u5f0f\u4e0b\u7684\u70ed\u52a0\u8f7d",children:[]}],c={toc:p};function u(e){var n=e.components,t=(0,i.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Plugin")," \u8868\u793a\u5c06\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"HTTP")," \u8bf7\u6c42/\u54cd\u5e94\u751f\u547d\u5468\u671f\u671f\u95f4\u6267\u884c\u7684\u63d2\u4ef6\u914d\u7f6e\u3002"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Plugin")," \u914d\u7f6e\u53ef\u76f4\u63a5\u7ed1\u5b9a\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"Route")," \u4e0a\uff0c\u4e5f\u53ef\u4ee5\u88ab\u7ed1\u5b9a\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"Service")," \u6216 ",(0,a.kt)("inlineCode",{parentName:"p"},"Consumer"),"\u4e0a\u3002\u800c\u5bf9\u4e8e\u540c\u4e00\n\u4e2a\u63d2\u4ef6\u7684\u914d\u7f6e\uff0c\u53ea\u80fd\u6709\u4e00\u4efd\u662f\u6709\u6548\u7684\uff0c\u914d\u7f6e\u9009\u62e9\u4f18\u5148\u7ea7\u603b\u662f ",(0,a.kt)("inlineCode",{parentName:"p"},"Consumer")," > ",(0,a.kt)("inlineCode",{parentName:"p"},"Route")," > ",(0,a.kt)("inlineCode",{parentName:"p"},"Service"),"\u3002"),(0,a.kt)("p",null,"\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"conf/config.yaml")," \u4e2d\uff0c\u53ef\u4ee5\u58f0\u660e\u672c\u5730 APISIX \u8282\u70b9\u90fd\u652f\u6301\u54ea\u4e9b\u63d2\u4ef6\u3002\u8fd9\u662f\u4e2a\u767d\u540d\u5355\u673a\u5236\uff0c\u4e0d\u5728\u8be5\n\u767d\u540d\u5355\u7684\u63d2\u4ef6\u914d\u7f6e\uff0c\u90fd\u5c06\u4f1a\u88ab\u81ea\u52a8\u5ffd\u7565\u3002\u8fd9\u4e2a\u7279\u6027\u53ef\u7528\u4e8e\u4e34\u65f6\u5173\u95ed\u6216\u6253\u5f00\u7279\u5b9a\u63d2\u4ef6\uff0c\u5e94\u5bf9\u7a81\u53d1\u60c5\u51b5\u975e\u5e38\u6709\u6548\u3002\n\u5982\u679c\u4f60\u60f3\u5728\u73b0\u6709\u63d2\u4ef6\u7684\u57fa\u7840\u4e0a\u65b0\u589e\u63d2\u4ef6\uff0c\u6ce8\u610f\u9700\u8981\u62f7\u8d1d ",(0,a.kt)("inlineCode",{parentName:"p"},"conf/config-default.yaml")," \u7684\u63d2\u4ef6\u8282\u70b9\u5185\u5bb9\u5230 ",(0,a.kt)("inlineCode",{parentName:"p"},"conf/config.yaml")," \u7684\u63d2\u4ef6\u8282\u70b9\u4e2d\u3002"),(0,a.kt)("p",null,"\u63d2\u4ef6\u7684\u914d\u7f6e\u53ef\u4ee5\u88ab\u76f4\u63a5\u7ed1\u5b9a\u5728\u6307\u5b9a Route \u4e2d\uff0c\u4e5f\u53ef\u4ee5\u88ab\u7ed1\u5b9a\u5728 Service \u4e2d\uff0c\u4e0d\u8fc7 Route \u4e2d\u7684\u63d2\u4ef6\u914d\u7f6e\n\u4f18\u5148\u7ea7\u66f4\u9ad8\u3002"),(0,a.kt)("p",null,"\u4e00\u4e2a\u63d2\u4ef6\u5728\u4e00\u6b21\u8bf7\u6c42\u4e2d\u53ea\u4f1a\u6267\u884c\u4e00\u6b21\uff0c\u5373\u4f7f\u88ab\u540c\u65f6\u7ed1\u5b9a\u5230\u591a\u4e2a\u4e0d\u540c\u5bf9\u8c61\u4e2d\uff08\u6bd4\u5982 Route \u6216 Service\uff09\u3002\n\u63d2\u4ef6\u8fd0\u884c\u5148\u540e\u987a\u5e8f\u662f\u6839\u636e\u63d2\u4ef6\u81ea\u8eab\u7684\u4f18\u5148\u7ea7\u6765\u51b3\u5b9a\u7684\uff0c\u4f8b\u5982\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},"local _M = {\n    version = 0.1,\n    priority = 0, -- \u8fd9\u4e2a\u63d2\u4ef6\u7684\u4f18\u5148\u7ea7\u4e3a 0\n    name = plugin_name,\n    schema = schema,\n    metadata_schema = metadata_schema,\n}\n")),(0,a.kt)("p",null,"\u63d2\u4ef6\u914d\u7f6e\u4f5c\u4e3a Route \u6216 Service \u7684\u4e00\u90e8\u5206\u63d0\u4ea4\u7684\uff0c\u653e\u5230 ",(0,a.kt)("inlineCode",{parentName:"p"},"plugins")," \u4e0b\u3002\u5b83\u5185\u90e8\u662f\u4f7f\u7528\u63d2\u4ef6\n\u540d\u5b57\u4f5c\u4e3a\u54c8\u5e0c\u7684 key \u6765\u4fdd\u5b58\u4e0d\u540c\u63d2\u4ef6\u7684\u914d\u7f6e\u9879\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n    ...\n    "plugins": {\n        "limit-count": {\n            "count": 2,\n            "time_window": 60,\n            "rejected_code": 503,\n            "key": "remote_addr"\n        },\n        "prometheus": {}\n    }\n}\n')),(0,a.kt)("p",null,"\u5e76\u4e0d\u662f\u6240\u6709\u63d2\u4ef6\u90fd\u6709\u5177\u4f53\u914d\u7f6e\u9879\uff0c\u6bd4\u5982 ",(0,a.kt)("inlineCode",{parentName:"p"},"prometheus")," \u4e0b\u662f\u6ca1\u6709\u4efb\u4f55\u5177\u4f53\u914d\u7f6e\u9879\uff0c\u8fd9\u65f6\u5019\u7528\u4e00\u4e2a\u7a7a\u7684\u5bf9\u8c61\n\u6807\u8bc6\u5373\u53ef\u3002"),(0,a.kt)("p",null,"\u5982\u679c\u4e00\u4e2a\u8bf7\u6c42\u56e0\u4e3a\u67d0\u4e2a\u63d2\u4ef6\u800c\u88ab\u62d2\u7edd\uff0c\u4f1a\u6709\u7c7b\u4f3c\u8fd9\u6837\u7684 warn \u65e5\u5fd7\uff1a",(0,a.kt)("inlineCode",{parentName:"p"},"ip-restriction exits with http status code 403"),"\u3002"),(0,a.kt)("h2",{id:"\u70ed\u52a0\u8f7d"},"\u70ed\u52a0\u8f7d"),(0,a.kt)("p",null,"APISIX \u7684\u63d2\u4ef6\u662f\u70ed\u52a0\u8f7d\u7684\uff0c\u4e0d\u7ba1\u4f60\u662f\u65b0\u589e\u3001\u5220\u9664\u8fd8\u662f\u4fee\u6539\u63d2\u4ef6\uff0c\u90fd\u4e0d\u9700\u8981\u91cd\u542f\u670d\u52a1\u3002"),(0,a.kt)("p",null,"\u53ea\u9700\u8981\u901a\u8fc7 admin API \u53d1\u9001\u4e00\u4e2a HTTP \u8bf7\u6c42\u5373\u53ef\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"curl http://127.0.0.1:9080/apisix/admin/plugins/reload -H 'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1' -X PUT\n")),(0,a.kt)("p",null,"\u6ce8\u610f\uff1a\u5982\u679c\u4f60\u5df2\u7ecf\u5728\u8def\u7531\u89c4\u5219\u91cc\u914d\u7f6e\u4e86\u67d0\u4e2a\u63d2\u4ef6\uff08\u6bd4\u5982\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"route")," \u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"plugins")," \u5b57\u6bb5\u91cc\u9762\u6dfb\u52a0\u4e86\u5b83\uff09\uff0c\u7136\u540e\n\u7981\u7528\u4e86\u8be5\u63d2\u4ef6\uff0c\u5728\u6267\u884c\u8def\u7531\u89c4\u5219\u7684\u65f6\u5019\u4f1a\u8df3\u8fc7\u8fd9\u4e2a\u63d2\u4ef6\u3002"),(0,a.kt)("h2",{id:"stand-alone-\u6a21\u5f0f\u4e0b\u7684\u70ed\u52a0\u8f7d"},"stand-alone \u6a21\u5f0f\u4e0b\u7684\u70ed\u52a0\u8f7d"),(0,a.kt)("p",null,"\u53c2\u8003 ",(0,a.kt)("a",{parentName:"p",href:"/zh/docs/apisix/2.7/stand-alone"},"stand alone \u6a21\u5f0f")," \u6587\u6863\u91cc\u5173\u4e8e\u914d\u7f6e\u63d2\u4ef6\u7684\u5185\u5bb9\u3002"))}u.isMDXComponent=!0}}]);