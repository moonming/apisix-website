(self.webpackChunk=self.webpackChunk||[]).push([[18996],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return f}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),i=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=i(e.components);return r.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,u=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),m=i(n),f=a,I=m["".concat(u,".").concat(f)]||m[f]||s[f]||l;return n?r.createElement(I,o(o({ref:t},c),{},{components:n})):r.createElement(I,o({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=m;var p={};for(var u in t)hasOwnProperty.call(t,u)&&(p[u]=t[u]);p.originalType=e,p.mdxType="string"==typeof e?e:a,o[1]=p;for(var i=2;i<l;i++)o[i]=n[i];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},52615:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return o},metadata:function(){return p},toc:function(){return u},default:function(){return c}});var r=n(22122),a=n(19756),l=(n(67294),n(3905)),o={title:"Apache APISIX 2.6.0-Release \u6b63\u5f0f\u53d1\u5e03",author:"spacewander",authorURL:"https://github.com/spacewander",authorImageURL:"https://avatars.githubusercontent.com/u/4161644?v=4"},p={permalink:"/zh/blog/2021/05/25/Apache APISIX 2.6.0-Release \u6b63\u5f0f\u53d1\u5e03",source:"@site/blog/2021-05-25-Apache APISIX 2.6.0-Release \u6b63\u5f0f\u53d1\u5e03.md",title:"Apache APISIX 2.6.0-Release \u6b63\u5f0f\u53d1\u5e03",description:"@spacewander, Core developer of Apache APISIX from Shenzhen Zhiliu Technology Co.",date:"2021-05-25T00:00:00.000Z",formattedDate:"2021\u5e745\u670825\u65e5",tags:[],readingTime:1.12,truncated:!0,prevItem:{title:"\u57fa\u4e8e Apache APISIX \u5b9e\u73b0\u7684\u670d\u52a1\u7f51\u683c\u9879\u76ee\u6b63\u5f0f\u5f00\u6e90",permalink:"/zh/blog/2021/05/31/\u57fa\u4e8e Apache APISIX \u5b9e\u73b0\u7684\u670d\u52a1\u7f51\u683c\u9879\u76ee\u6b63\u5f0f\u5f00\u6e90"},nextItem:{title:"Traffic Split in Apache APISIX Ingress Controller",permalink:"/zh/blog/2021/03/27/traffic-split-in-apache-apisix-ingress-controller"}},u=[{value:"Release Notes",id:"release-notes",children:[]},{value:"\u4e0b\u8f7d",id:"\u4e0b\u8f7d",children:[]},{value:"\u6587\u6863\u66f4\u65b0",id:"\u6587\u6863\u66f4\u65b0",children:[]}],i={toc:u};function c(e){var t=e.components,o=(0,a.Z)(e,["components"]);return(0,l.kt)("wrapper",(0,r.Z)({},i,o,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("a",{parentName:"p",href:"https://github.com/spacewander"},"@spacewander"),", Core developer of Apache APISIX from ",(0,l.kt)("a",{parentName:"p",href:"https://www.apiseven.com/"},"Shenzhen Zhiliu Technology Co."))),(0,l.kt)("p",null,"Apache APISIX 2.6.0-Release \u6b63\u5f0f\u53d1\u5e03\uff01\u6b22\u8fce\u5927\u5bb6\u4e0b\u8f7d\u4f7f\u7528\u3002"),(0,l.kt)("h2",{id:"release-notes"},"Release Notes"),(0,l.kt)("p",null,"\u258c",(0,l.kt)("strong",{parentName:"p"},"\u65b0\u529f\u80fd\uff1aAPISIX \u73b0\u5728\u652f\u6301\u4f7f\u7528\u5176\u4ed6\u8bed\u8a00\u7f16\u5199\u81ea\u5b9a\u4e49\u63d2\u4ef6")),(0,l.kt)("p",null,"APISIX \u73b0\u5728\u652f\u6301\u901a\u8fc7 Lua \u8bed\u8a00\u7f16\u5199\u63d2\u4ef6\uff0c\u5728\u4ee3\u7406\u8bf7\u6c42\u7684\u8fc7\u7a0b\u4e2d\u6267\u884c\u81ea\u5b9a\u4e49\u7684\u903b\u8f91\uff0c\u8bf8\u5982\u8c03\u7528 webhook \u901a\u77e5\u5916\u90e8\u7cfb\u7edf\u3001\u6267\u884c\u7279\u6b8a\u7684\u9274\u6743\u903b\u8f91\u7b49\u7b49\u3002\u4f46\u662f\u6709\u4e9b\u60c5\u51b5\u4e0b\u5f00\u53d1\u8005\u53ef\u80fd\u4f1a\u60f3\u8981\u91c7\u7528 Lua \u4ee5\u5916\u7684\u8bed\u8a00\u6765\u7f16\u5199\u63d2\u4ef6\u3002"),(0,l.kt)("p",null,"\u6bd4\u5982\u5f00\u53d1\u8005\u4e0d\u719f\u6089 Lua\uff0c\u60f3\u8981\u7528\u81ea\u5df1\u719f\u6089\u7684\u8bed\u8a00\u6765\u7f16\u5199\u63d2\u4ef6\uff1b\u6216\u8005\u7b2c\u4e09\u65b9\u56e2\u961f\u53ea\u63d0\u4f9b\u4e86 Java SDK\uff0c\u6ca1\u6709\u529e\u6cd5\u5728 Lua \u63d2\u4ef6\u91cc\u9762\u4f7f\u7528\u3002"),(0,l.kt)("p",null,"\u4ece 2.6 \u7248\u672c\u5f00\u59cb\uff0c\u501f\u52a9 plugin runner\uff0cAPISIX \u652f\u6301\u8fd0\u884c\u975e Lua \u8bed\u8a00\u7f16\u5199\u7684\u63d2\u4ef6\u3002\u67b6\u6784\u56fe\u5982\u4e0b\uff1a"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"2021-05-25-1",src:n(58120).Z})),(0,l.kt)("p",null,"APISIX \u4f1a\u4ee5 sidecar \u7684\u5f62\u5f0f\u8fd0\u884c plugin runner\u3002"),(0,l.kt)("p",null,"\u5b83\u4eec\u4e24\u8005\u4e4b\u95f4\u91c7\u7528 RPC \u8fdb\u884c\u901a\u8baf\uff0cAPISIX \u8d1f\u8d23\u53d1\u9001\u8bf7\u6c42\u6570\u636e\u548c\u914d\u7f6e\uff0cplugin runner \u8d1f\u8d23\u52a0\u8f7d\u7528\u6237\u7684\u81ea\u5b9a\u4e49\u63d2\u4ef6\uff0c\u5904\u7406\u8fd9\u4e9b\u6570\u636e\u5e76\u544a\u8bc9 APISIX \u600e\u4e48\u5904\u7406\u8fd9\u4e9b\u8bf7\u6c42\u3002\u76ee\u524d\u652f\u6301\u5728\u4ee3\u7406\u8bf7\u6c42\u5230\u4e0a\u6e38\u4e4b\u524d\uff0c\u6267\u884c\u975e Lua \u8bed\u8a00\u7f16\u5199\u7684\u903b\u8f91\u3002\u540e\u7eed\u5c06\u4f1a\u652f\u6301\u7528\u975e Lua \u8bed\u8a00\u6539\u5199\u54cd\u5e94\u3002"),(0,l.kt)("p",null,"APISIX \u73b0\u5728\u653e\u7f6e\u4e86\u4e24\u4e2a\u5165\u53e3\u7ed9 plugin runner \u53d1\u9001 RPC\u3002\u4e00\u4e2a\u662f ext-plugin-pre-req\uff0c\u53e6\u4e00\u4e2a\u662f ext-plugin-post-req\u3002\u524d\u8005\u4f1a\u5728\u6267\u884c Lua \u63d2\u4ef6\u903b\u8f91\u524d\u8fd0\u884c\uff0c\u540e\u8005\u4f1a\u5728\u6267\u884c\u5b8c Lua \u63d2\u4ef6\u4e14\u5728\u4ee3\u7406\u8bf7\u6c42\u5230\u4e0a\u6e38\u4e4b\u524d\u8fd0\u884c\u3002\u8fd9\u4e24\u4e2a\u5165\u53e3\u90fd\u662f\u53ef\u4ee5\u5728\u8def\u7531\u7ea7\u522b\u4e0a\u52a8\u6001\u5f00\u5173\u7684\u3002"),(0,l.kt)("p",null,"\u5047\u8bbe\u6211\u4eec\u5bf9\u4e8e\u67d0\u4e9b\u8bf7\u6c42\u5f00\u542f\u4e86 ext-plugin-pre-req\uff0c\u4e14 plugin runner \u91cc\u9762\u52a0\u8f7d\u4e86 validator \u548c rewrite \u4e24\u4e2a\u63d2\u4ef6\uff0c\u90a3\u4e48\u6bcf\u4e2a\u5339\u914d\u7684\u8bf7\u6c42\uff0c\u5b83\u90fd\u4f1a\u89e6\u53d1\u5bf9 plugin runner \u7684 RPC \u8c03\u7528\uff0c\u5148\u6267\u884c plugin runner \u91cc\u9762\u7684 validator \u548c rewrite\uff0c\u7136\u540e\u628a\u6267\u884c\u7684\u7ed3\u679c\u8fd4\u56de\u7ed9 APISIX\u3002APISIX \u53ef\u4ee5\u6839\u636e\u7ed3\u679c\u6765\u5224\u65ad\u662f\u5426\u8981\u7ee7\u7eed\u6267\u884c\u8bf7\u6c42\uff0c\u8fd8\u662f\u62d2\u7edd\u6389\u8bf7\u6c42\u3002\u5982\u679c\u7ee7\u7eed\u6267\u884c\uff0c\u4f1a\u8fd0\u884c APISIX \u5185\u7f6e\u7684 Lua \u63d2\u4ef6\uff0c\u6bd4\u5982\u9650\u6d41\u9650\u901f\u7b49\u7b49\u3002\u5982\u679c\u5f00\u542f\u7684\u662f ext-plugin-post-req\uff0c\u5219\u6b63\u597d\u76f8\u53cd\u3002"),(0,l.kt)("p",null,"Java \u548c Go \u7684 plugin runner \u5df2\u5728\u5f00\u53d1\u4e2d\u3002\u9884\u8ba1\u672c\u5468\u5185 Java \u7248\u7684 plugin runner \u5c06\u4f1a\u53ef\u7528\uff0cGo \u7248\u7684 plugin runner \u5c06\u4e8e\u516d\u6708\u4efd\u5b8c\u6210\u3002"),(0,l.kt)("p",null,"\u258c",(0,l.kt)("strong",{parentName:"p"},"\u5b89\u5168\u63d0\u5347\uff1a\u4fee\u6539 Prometheus \u9ed8\u8ba4\u7aef\u53e3\uff0c\u4e0d\u518d\u66b4\u9732\u5230\u6570\u636e\u9762\u7684\u7aef\u53e3\u4e0a")),(0,l.kt)("p",null,"\u4e4b\u524d\u9ed8\u8ba4\u60c5\u51b5\u4e0b Prometheus \u7684\u6570\u636e\u4f1a\u66b4\u9732\u5728\u6570\u636e\u9762\u7684\u7aef\u53e3\u4e0a\uff0c\u867d\u7136\u53ef\u4ee5\u901a\u8fc7\u914d\u7f6e plugin interceptor \u6765\u9650\u5236 IP \u8bbf\u95ee\uff0c\u4f46\u662f\u8fd8\u662f\u5b58\u5728\u9ed8\u8ba4\u4e0d\u5b89\u5168\u7684\u95ee\u9898\u3002\u6240\u4ee5\u4ece 2.6 \u5f00\u59cb\uff0c\u4e13\u95e8\u91c7\u7528\u4e00\u4e2a\u65b0\u7aef\u53e3\u6765\u66b4\u9732\u6307\u6807\uff0c\u800c\u4e14\u9ed8\u8ba4\u53ea\u76d1\u542c 127.0.0.1 ."),(0,l.kt)("p",null,"\u5728 2.6 \u4e4b\u524d\uff0cPrometheus \u91c7\u96c6 APISIX \u7684\u6307\u6807\u65f6\u8bbf\u95ee\u7684\u662f\u6570\u636e\u9762\u7684\u7aef\u53e3\uff08\u9ed8\u8ba4 9080 \u7aef\u53e3\uff09\u3002"),(0,l.kt)("p",null,"\u65b0\u7aef\u53e3\u662f 9091 \u7aef\u53e3\uff0c\u4e14\u53ea\u76d1\u542c 127.0.0.1\uff0c\u4f60\u9700\u8981\u4fee\u6539\u76d1\u542c\u5730\u5740\u4e3a\u4f60\u7684\u670d\u52a1\u5668\u7684\u5185\u7f51\u5730\u5740\uff0c\u5e76\u52a0\u4e0a\u9632\u706b\u5899\u89c4\u5219\u786e\u4fdd\u53ea\u6709 Prometheus \u624d\u80fd\u8bbf\u95ee\u3002"),(0,l.kt)("p",null,"\u258c",(0,l.kt)("strong",{parentName:"p"},"\u652f\u6301:\u751f\u6001\u5b8c\u6574\u652f\u6301 Nacos \u670d\u52a1\u53d1\u73b0")),(0,l.kt)("p",null,"APISIX \u6dfb\u52a0\u4e86\u5bf9 Nacos \u670d\u52a1\u53d1\u73b0\u529f\u80fd\u7684\u652f\u6301\u3002"),(0,l.kt)("p",null,"\u7528\u6237\u53ea\u9700\u5f00\u542f Nacos \u670d\u52a1\u53d1\u73b0\u529f\u80fd\uff0c\u5e76\u5728\u4e0a\u6e38\u914d\u7f6e\u4e2d\u8bbe\u7f6e\u670d\u52a1\u540d\u79f0\uff0cAPISIX \u5c31\u4f1a\u5728\u540e\u53f0\u5b9a\u671f\u6839\u636e\u670d\u52a1\u540d\u79f0\u83b7\u53d6 Nacos \u4e2d\u5bf9\u5e94\u670d\u52a1\u7684\u5b9e\u4f8b\u5730\u5740\u3002\u8fd9\u6837\u4e00\u6765\uff0c\u65e0\u9700\u5728 APISIX \u91cc\u9762\u914d\u7f6e\u5177\u4f53\u7684\u4e0a\u6e38\u8282\u70b9\u5730\u5740\uff0c\u53ea\u9700\u8981\u5728 Nacos \u91cc\u9762\u914d\u7f6e\u5373\u53ef\u3002\n\u76ee\u524d APISIX \u5185\u7f6e\u7684\u670d\u52a1\u53d1\u73b0\u529f\u80fd\u5df2\u652f\u6301\u4e0b\u5217\u5916\u90e8\u670d\u52a1\uff1a"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"DNS"),(0,l.kt)("li",{parentName:"ol"},"Consul KV mode"),(0,l.kt)("li",{parentName:"ol"},"Eureka"),(0,l.kt)("li",{parentName:"ol"},"Nacos")),(0,l.kt)("p",null,"\u258c",(0,l.kt)("strong",{parentName:"p"},"\u652f\u6301:\u914d\u7f6e IPv6 \u7684 DNS resolver")),(0,l.kt)("p",null,"\u4e4b\u524d\u914d\u7f6e APISIX \u7684 DNS resolver \u65f6\uff0c\u53ea\u80fd\u914d\u7f6e IPv4 \u670d\u52a1\u5668\u3002\u4ece 2.6 \u7248\u672c\u4e4b\u540e\uff0c\u6211\u4eec\u52a0\u4e0a\u4e86\u5bf9 IPv6 DNS \u670d\u52a1\u5668\u7684\u652f\u6301\u3002"),(0,l.kt)("p",null,"\u73b0\u5728\u914d\u7f6e DNS resolver \u7684\u65f6\u5019\uff0c\u53ef\u4ee5\u5199\u4e0a IPv6 \u7684\u670d\u52a1\u5668\u5730\u5740\u4e86\u3002"),(0,l.kt)("h2",{id:"\u4e0b\u8f7d"},"\u4e0b\u8f7d"),(0,l.kt)("p",null,"\u4e0b\u8f7d Apache APISIX 2.6.0-Release \u6e90\u4ee3\u7801\u53ca\u4e8c\u8fdb\u5236\u5b89\u88c5\u5305\uff0c\u8bf7\u8bbf\u95ee\u4e0b\u8f7d\u9875\u9762: ",(0,l.kt)("inlineCode",{parentName:"p"},"https://apisix.apache.org/downloads/"),"\u3002"),(0,l.kt)("h2",{id:"\u6587\u6863\u66f4\u65b0"},"\u6587\u6863\u66f4\u65b0"),(0,l.kt)("p",null,"\u5728\u672c\u6b21\u53d1\u5e03\u8fc7\u7a0b\u4e2d\uff0c\u6211\u4eec\u4e5f\u5728\u6301\u7eed\u66f4\u65b0\u548c\u53d1\u5e03\u65b0\u7684\u4f7f\u7528\u6587\u6863\uff0c\u6b22\u8fce\u5927\u5bb6\u63d0\u51fa\u5b9d\u8d35\u7684\u610f\u89c1\u3002"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"https://apisix.apache.org/docs/apisix/getting-started/")),(0,l.kt)("p",null,"\u66f4\u8be6\u7ec6\u7684\u5185\u5bb9\u53ef\u4ee5\u53c2\u8003 2.6 \u7248\u672c\u7684 Changelog \u548c GitHub \u4e0a Apache APISIX  \u7684\u63d0\u4ea4\u8bb0\u5f55\u3002"))}c.isMDXComponent=!0},58120:function(e,t,n){"use strict";t.Z=n.p+"assets/images/2021-05-25-1-e5fd919396575483d03c1ed9835aeaad.png"}}]);