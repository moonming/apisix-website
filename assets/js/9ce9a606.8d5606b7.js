(self.webpackChunk=self.webpackChunk||[]).push([[14897],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return s},kt:function(){return d}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=r.createContext({}),p=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,u=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),m=p(n),d=i,h=m["".concat(u,".").concat(d)]||m[d]||c[d]||a;return n?r.createElement(h,l(l({ref:t},s),{},{components:n})):r.createElement(h,l({ref:t},s))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,l=new Array(a);l[0]=m;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var p=2;p<a;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},76018:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return l},metadata:function(){return o},toc:function(){return u},default:function(){return s}});var r=n(22122),i=n(19756),a=(n(67294),n(3905)),l={title:"Development"},o={unversionedId:"development",id:"version-0.1/development",isDocsHomePage:!1,title:"Development",description:"\x3c!--",source:"@site/docs-apisix-java-plugin-runner_versioned_docs/version-0.1/development.md",sourceDirName:".",slug:"/development",permalink:"/docs/java-plugin-runner/development",editUrl:"https://github.com/apache/apisix-java-plugin-runner/edit/main/docs/en/latest/development.md",version:"0.1",frontMatter:{title:"Development"},sidebar:"version-0.1/docs",next:{title:"How it works",permalink:"/docs/java-plugin-runner/how-it-works"}},u=[{value:"Overview",id:"overview",children:[]},{value:"Prerequisites",id:"prerequisites",children:[]},{value:"Install",id:"install",children:[]},{value:"Write Filter",id:"write-filter",children:[]},{value:"Test",id:"test",children:[{value:"Run Unit Test Suites",id:"run-unit-test-suites",children:[]},{value:"Mimic practical environment",id:"mimic-practical-environment",children:[]}]}],p={toc:u};function s(e){var t=e.components,n=(0,i.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"overview"},"Overview"),(0,a.kt)("p",null,"This document explains how to get started to develop the apisix-java-plugin-runner."),(0,a.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"JDK 8"),(0,a.kt)("li",{parentName:"ul"},"APISIX 2.7.0"),(0,a.kt)("li",{parentName:"ul"},"Clone the ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-java-plugin-runner"},"apisix-java-plugin-runner")," project."),(0,a.kt)("li",{parentName:"ul"},"Refer to ",(0,a.kt)("a",{parentName:"li",href:"/docs/java-plugin-runner/how-it-works#debug"},"Debug"),"  to build the debug environment.")),(0,a.kt)("h2",{id:"install"},"Install"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"cd /path/to/apisix-java-plugin-runner\n./mvnw install\n")),(0,a.kt)("h2",{id:"write-filter"},"Write Filter"),(0,a.kt)("p",null,"Refer to the code in the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix-java-plugin-runner/tree/main/sample"},"sample"),"\nto learn how to extend ",(0,a.kt)("inlineCode",{parentName:"p"},"PluginFilter"),", define the order, rewrite requests and stop requests."),(0,a.kt)("h4",{id:"code-location"},"Code Location"),(0,a.kt)("p",null,"You need to put the code in ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix-java-plugin-runner/tree/main/runner-plugin/src/main/java/org/apache/apisix/plugin/runner/filter"},"runner-plugin"),"\nso that the ",(0,a.kt)("inlineCode",{parentName:"p"},"apisix-java-plugin-runner.jar")," will contain the filter implementation class you wrote when you package it."),(0,a.kt)("h4",{id:"the-order-of-filter-execution"},"The order of filter execution"),(0,a.kt)("p",null,"The order of execution of the filter in the runner is determined by the index of the ",(0,a.kt)("inlineCode",{parentName:"p"},"conf")," array in the ",(0,a.kt)("inlineCode",{parentName:"p"},"ext-plugin-pre-req")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"ext-plugin-post-req")," configuration."),(0,a.kt)("h4",{id:"the-name-of-filter-execution"},"The name of filter execution"),(0,a.kt)("p",null,"The requests go through filters that are dynamically configured on APISIX.\nFor example, if the following configuration is done on APISIX"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9080/apisix/admin/routes/1 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "uri":"/hello",\n    "plugins":{\n        "ext-plugin-pre-req":{\n            "conf":[\n                {\n                    "name":"FooFilter",\n                    "value":"bar"\n                }\n            ]\n        }\n    },\n    "upstream":{\n        "nodes":{\n            "127.0.0.1:1980":1\n        },\n        "type":"roundrobin"\n    }\n}\'\n')),(0,a.kt)("p",null,"apisix-java-plugin-runner will look for implementation classes named ",(0,a.kt)("inlineCode",{parentName:"p"},"FooFilter"),",\nand the name of each filter's implementation class is the return value of its overridden function ",(0,a.kt)("inlineCode",{parentName:"p"},"public String name()"),"."),(0,a.kt)("h4",{id:"rewrite-request"},"Rewrite Request"),(0,a.kt)("p",null,"If you perform the following function call in the filter chain of the implementation class"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"request.setPath()"),(0,a.kt)("li",{parentName:"ul"},"request.setHeader()"),(0,a.kt)("li",{parentName:"ul"},"request.setArg()")),(0,a.kt)("p",null,"this means to rewrit the current request, the upstream server will receive\nthe relevant parameters rewritten here."),(0,a.kt)("h4",{id:"stop-request"},"Stop Request"),(0,a.kt)("p",null,"If you perform the following function call in the filter chain of the implementation class"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"response.setStatusCode()"),(0,a.kt)("li",{parentName:"ul"},"response.setHeader()"),(0,a.kt)("li",{parentName:"ul"},"response.setBody()")),(0,a.kt)("p",null,"this means to stop the current request, the client will receive\nthe relevant parameters generated here."),(0,a.kt)("h2",{id:"test"},"Test"),(0,a.kt)("h3",{id:"run-unit-test-suites"},"Run Unit Test Suites"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"cd /path/to/apisix-java-plugin-runner\n ./mvnw test\n")),(0,a.kt)("h3",{id:"mimic-practical-environment"},"Mimic practical environment"),(0,a.kt)("p",null,"If you want to mimic the practical environment, you need to configure the route on APISIX\nby having the request go through the filter you want to test, for example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'"plugins":{\n    "ext-plugin-pre-req":{\n        "conf":[\n            {\n                "name":"FooFilter",\n                "value":"bar"\n            }\n        ]\n    }\n}\n')),(0,a.kt)("p",null,"and then make a request to APISIX to trigger the route."))}s.isMDXComponent=!0}}]);