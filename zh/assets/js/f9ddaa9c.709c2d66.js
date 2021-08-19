(self.webpackChunk=self.webpackChunk||[]).push([[24917],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return d},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),u=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=u(e.components);return r.createElement(o.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,o=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),s=u(n),m=a,k=s["".concat(o,".").concat(m)]||s[m]||c[m]||l;return n?r.createElement(k,i(i({ref:t},d),{},{components:n})):r.createElement(k,i({ref:t},d))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=s;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var u=2;u<l;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},9288:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return i},metadata:function(){return p},toc:function(){return o},default:function(){return d}});var r=n(22122),a=n(19756),l=(n(67294),n(3905)),i={title:"redirect"},p={unversionedId:"plugins/redirect",id:"version-2.4/plugins/redirect",isDocsHomePage:!1,title:"redirect",description:"\x3c!--",source:"@site/i18n/zh/docusaurus-plugin-content-docs-docs-apisix/version-2.4/plugins/redirect.md",sourceDirName:"plugins",slug:"/plugins/redirect",permalink:"/zh/docs/apisix/2.4/plugins/redirect",editUrl:"https://github.com/apache/apisix/edit/master/docs/zh/latest/plugins/redirect.md",version:"2.4",frontMatter:{title:"redirect"},sidebar:"version-2.4/docs",previous:{title:"serverless",permalink:"/zh/docs/apisix/2.4/plugins/serverless"},next:{title:"response-rewrite",permalink:"/zh/docs/apisix/2.4/plugins/response-rewrite"}},o=[{value:"\u53c2\u6570",id:"\u53c2\u6570",children:[]},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",children:[]}],u={toc:o};function d(e){var t=e.components,n=(0,a.Z)(e,["components"]);return(0,l.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"URI \u91cd\u5b9a\u5411\u63d2\u4ef6\u3002"),(0,l.kt)("h3",{id:"\u53c2\u6570"},"\u53c2\u6570"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Requirement"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"),(0,l.kt)("th",{parentName:"tr",align:null},"Valid"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"http_to_https"),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"\u53ef\u9009"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"\u5f53\u8bbe\u7f6e\u4e3a ",(0,l.kt)("inlineCode",{parentName:"td"},"true")," \u5e76\u4e14\u8bf7\u6c42\u662f http \u65f6\uff0c\u4f1a\u81ea\u52a8 301 \u91cd\u5b9a\u5411\u4e3a https\uff0curi \u4fdd\u6301\u4e0d\u53d8")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"uri"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"\u53ef\u9009"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"\u53ef\u4ee5\u5305\u542b Nginx \u53d8\u91cf\u7684 URI\uff0c\u4f8b\u5982\uff1a",(0,l.kt)("inlineCode",{parentName:"td"},"/test/index.html"),", ",(0,l.kt)("inlineCode",{parentName:"td"},"$uri/index.html"),"\u3002\u4f60\u53ef\u4ee5\u901a\u8fc7\u7c7b\u4f3c\u4e8e ",(0,l.kt)("inlineCode",{parentName:"td"},"$ {xxx}")," \u7684\u65b9\u5f0f\u5f15\u7528\u53d8\u91cf\uff0c\u4ee5\u907f\u514d\u4ea7\u751f\u6b67\u4e49\uff0c\u4f8b\u5982\uff1a",(0,l.kt)("inlineCode",{parentName:"td"},"${uri}foo/index.html"),"\u3002\u82e5\u4f60\u9700\u8981\u4fdd\u7559 ",(0,l.kt)("inlineCode",{parentName:"td"},"$")," \u5b57\u7b26\uff0c\u90a3\u4e48\u4f7f\u7528\u5982\u4e0b\u683c\u5f0f\uff1a",(0,l.kt)("inlineCode",{parentName:"td"},"/\\$foo/index.html"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ret_code"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"\u53ef\u9009"),(0,l.kt)("td",{parentName:"tr",align:null},"302"),(0,l.kt)("td",{parentName:"tr",align:null},"[200, ...]"),(0,l.kt)("td",{parentName:"tr",align:null},"\u8bf7\u6c42\u54cd\u5e94\u7801")))),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"http_to_https")," \u548c ",(0,l.kt)("inlineCode",{parentName:"p"},"uri")," \u4e24\u4e2a\u4e2d\u53ea\u80fd\u914d\u7f6e\u4e00\u4e2a\u3002"),(0,l.kt)("h3",{id:"\u793a\u4f8b"},"\u793a\u4f8b"),(0,l.kt)("h4",{id:"\u542f\u7528\u63d2\u4ef6"},"\u542f\u7528\u63d2\u4ef6"),(0,l.kt)("p",null,"\u4e0b\u9762\u662f\u4e00\u4e2a\u57fa\u672c\u5b9e\u4f8b\uff0c\u4e3a\u7279\u5b9a\u8def\u7531\u542f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"redirect")," \u63d2\u4ef6\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9080/apisix/admin/routes/1  -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "uri": "/test/index.html",\n    "plugins": {\n        "redirect": {\n            "uri": "/test/default.html",\n            "ret_code": 301\n        }\n    },\n    "upstream": {\n        "type": "roundrobin",\n        "nodes": {\n            "127.0.0.1:80": 1\n        }\n    }\n}\'\n')),(0,l.kt)("p",null,"\u6211\u4eec\u53ef\u4ee5\u5728\u65b0\u7684 URI \u4e2d\u4f7f\u7528 Nginx \u5185\u7f6e\u7684\u4efb\u610f\u53d8\u91cf\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9080/apisix/admin/routes/1  -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "uri": "/test",\n    "plugins": {\n        "redirect": {\n            "uri": "$uri/index.html",\n            "ret_code": 301\n        }\n    },\n    "upstream": {\n        "type": "roundrobin",\n        "nodes": {\n            "127.0.0.1:80": 1\n        }\n    }\n}\'\n')),(0,l.kt)("h4",{id:"\u6d4b\u8bd5"},"\u6d4b\u8bd5"),(0,l.kt)("p",null,"\u6d4b\u8bd5\u793a\u4f8b\u57fa\u4e8e\u4e0a\u8ff0\u4f8b\u5b50\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"$ curl http://127.0.0.1:9080/test/index.html -i\nHTTP/1.1 301 Moved Permanently\nDate: Wed, 23 Oct 2019 13:48:23 GMT\nContent-Type: text/html\nContent-Length: 166\nConnection: keep-alive\nLocation: /test/default.html\n\n...\n")),(0,l.kt)("p",null,"\u6211\u4eec\u53ef\u4ee5\u68c0\u67e5\u54cd\u5e94\u7801\u548c\u54cd\u5e94\u5934\u4e2d\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"Location")," \u53c2\u6570\uff0c\u5b83\u8868\u793a\u8be5\u63d2\u4ef6\u5df2\u542f\u7528\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'\n\u4e0b\u9762\u662f\u4e00\u4e2a\u5b9e\u73b0 http \u5230 https \u8df3\u8f6c\u7684\u793a\u4f8b\uff1a\n```shell\ncurl http://127.0.0.1:9080/apisix/admin/routes/1  -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "uri": "/hello",\n    "plugins": {\n        "redirect": {\n            "http_to_https": true\n        }\n    }\n}\'\n')),(0,l.kt)("h4",{id:"\u7981\u7528\u63d2\u4ef6"},"\u7981\u7528\u63d2\u4ef6"),(0,l.kt)("p",null,"\u79fb\u9664\u63d2\u4ef6\u914d\u7f6e\u4e2d\u76f8\u5e94\u7684 JSON \u914d\u7f6e\u53ef\u7acb\u5373\u7981\u7528\u8be5\u63d2\u4ef6\uff0c\u65e0\u9700\u91cd\u542f\u670d\u52a1\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9080/apisix/admin/routes/1  -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "uri": "/test/index.html",\n    "plugins": {},\n    "upstream": {\n        "type": "roundrobin",\n        "nodes": {\n            "127.0.0.1:80": 1\n        }\n    }\n}\'\n')),(0,l.kt)("p",null,"\u8fd9\u65f6\u8be5\u63d2\u4ef6\u5df2\u88ab\u7981\u7528\u3002"))}d.isMDXComponent=!0}}]);