(self.webpackChunk=self.webpackChunk||[]).push([[60949],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return u},kt:function(){return f}});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=r.createContext({}),l=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=l(e.components);return r.createElement(c.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=l(t),f=o,m=d["".concat(c,".").concat(f)]||d[f]||p[f]||a;return t?r.createElement(m,i(i({ref:n},u),{},{components:t})):r.createElement(m,i({ref:n},u))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=d;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=t[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},41201:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return i},metadata:function(){return s},toc:function(){return c},default:function(){return u}});var r=t(22122),o=t(19756),a=(t(67294),t(3905)),i={title:"nacos"},s={unversionedId:"discovery/nacos",id:"version-2.6/discovery/nacos",isDocsHomePage:!1,title:"nacos",description:"\x3c!--",source:"@site/docs-apisix_versioned_docs/version-2.6/discovery/nacos.md",sourceDirName:"discovery",slug:"/discovery/nacos",permalink:"/zh/docs/apisix/2.6/discovery/nacos",editUrl:"https://github.com/apache/apisix/edit/master/docs/zh/latest/discovery/nacos.md",version:"2.6",frontMatter:{title:"nacos"},sidebar:"version-2.6/docs",previous:{title:"consul_kv",permalink:"/zh/docs/apisix/2.6/discovery/consul_kv"},next:{title:"eureka",permalink:"/zh/docs/apisix/2.6/discovery/eureka"}},c=[{value:"Service discovery via Nacos",id:"service-discovery-via-nacos",children:[{value:"Configuration for Nacos",id:"configuration-for-nacos",children:[]},{value:"Upstream setting",id:"upstream-setting",children:[]}]}],l={toc:c};function u(e){var n=e.components,t=(0,o.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,r.Z)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"service-discovery-via-nacos"},"Service discovery via Nacos"),(0,a.kt)("p",null,"This is experimental discovery module for Nacos."),(0,a.kt)("p",null,"The performance of this module needs to be improved:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"avoid synchroning configuration in each workers. You can refer the implementation in ",(0,a.kt)("inlineCode",{parentName:"li"},"consul_kv.lua"),"."),(0,a.kt)("li",{parentName:"ol"},"send the request parallelly.")),(0,a.kt)("h3",{id:"configuration-for-nacos"},"Configuration for Nacos"),(0,a.kt)("p",null,"Add following configuration in ",(0,a.kt)("inlineCode",{parentName:"p"},"conf/config.yaml")," :"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'discovery:\n  nacos:\n    host:\n      - "http://${username}:${password}@${host1}:${port1}"\n    prefix: "/nacos/v1/"\n    fetch_interval: 30    # default 30 sec\n    weight: 100           # default 100\n    timeout:\n      connect: 2000       # default 2000 ms\n      send: 2000          # default 2000 ms\n      read: 5000          # default 5000 ms\n')),(0,a.kt)("p",null,"And you can config it in short by default value:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'discovery:\n  nacos:\n    host:\n      - "http://192.168.33.1:8848"\n')),(0,a.kt)("h3",{id:"upstream-setting"},"Upstream setting"),(0,a.kt)("p",null,'Here is an example of routing a request with a URL of "/nacos/*" to a service which named "',(0,a.kt)("a",{parentName:"p",href:"http://192.168.33.1:8848/nacos/v1/ns/instance/list?serviceName=APISIX-NACOS%22"},'http://192.168.33.1:8848/nacos/v1/ns/instance/list?serviceName=APISIX-NACOS"')," and use nacos discovery client in the registry :"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'$ curl http://127.0.0.1:9080/apisix/admin/routes/1 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -i -d \'\n{\n    "uri": "/nacos/*",\n    "upstream": {\n        "service_name": "APISIX-NACOS",\n        "type": "roundrobin",\n        "discovery_type": "nacos"\n    }\n}\'\n')),(0,a.kt)("p",null,"The format response as below:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "node": {\n    "key": "\\/apisix\\/routes\\/1",\n    "value": {\n      "id": "1",\n      "create_time": 1615796097,\n      "status": 1,\n      "update_time": 1615799165,\n      "upstream": {\n        "hash_on": "vars",\n        "pass_host": "pass",\n        "scheme": "http",\n        "service_name": "APISIX-NACOS",\n        "type": "roundrobin",\n        "discovery_type": "nacos"\n      },\n      "priority": 0,\n      "uri": "\\/nacos\\/*"\n    }\n  },\n  "action": "set"\n}\n')))}u.isMDXComponent=!0}}]);