(self.webpackChunk=self.webpackChunk||[]).push([[67113],{3905:function(e,t,a){"use strict";a.d(t,{Zo:function(){return c},kt:function(){return m}});var r=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function p(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,i=function(e,t){if(null==e)return{};var a,r,i={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var u=r.createContext({}),o=function(e){var t=r.useContext(u),a=t;return e&&(a="function"==typeof e?e(t):p(p({},t),e)),a},c=function(e){var t=o(e.components);return r.createElement(u.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var a=e.components,i=e.mdxType,n=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),s=o(a),m=i,f=s["".concat(u,".").concat(m)]||s[m]||h[m]||n;return a?r.createElement(f,p(p({ref:t},c),{},{components:a})):r.createElement(f,p({ref:t},c))}));function m(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var n=a.length,p=new Array(n);p[0]=s;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:i,p[1]=l;for(var o=2;o<n;o++)p[o]=a[o];return r.createElement.apply(null,p)}return r.createElement.apply(null,a)}s.displayName="MDXCreateElement"},43298:function(e,t,a){"use strict";a.r(t),a.d(t,{frontMatter:function(){return p},metadata:function(){return l},toc:function(){return u},default:function(){return c}});var r=a(22122),i=a(19756),n=(a(67294),a(3905)),p={title:"Release Apache APISIX 2.6"},l={permalink:"/zh/events/2021/05/24/release-apache-apisix-2.6",source:"@site/events/2021-05-24-release-apache-apisix-2.6.md",title:"Release Apache APISIX 2.6",description:"Change",date:"2021-05-24T00:00:00.000Z",formattedDate:"2021\u5e745\u670824\u65e5",tags:[],readingTime:1.07,truncated:!0,prevItem:{title:"Release Apache APISIX Dashboard 2.6.1",permalink:"/zh/events/2021/05/27/release-apache-apisix-dashboard-2.6.1"},nextItem:{title:"Release Apache APISIX Dashboard 2.6",permalink:"/zh/events/2021/04/22/release-apache-apisix-dashboard-2.6"}},u=[{value:"Change",id:"change",children:[]},{value:"Core",id:"core",children:[]},{value:"Plugin",id:"plugin",children:[]},{value:"Bugfix",id:"bugfix",children:[]}],o={toc:u};function c(e){var t=e.components,a=(0,i.Z)(e,["components"]);return(0,n.kt)("wrapper",(0,r.Z)({},o,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h3",{id:"change"},"Change"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"change(prometheus): redesign the latency metrics & update grafana ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix/pull/3993"},"#3993")),(0,n.kt)("li",{parentName:"ul"},"change(prometheus): don't expose metrics to internet ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix/pull/3994"},"#3994")),(0,n.kt)("li",{parentName:"ul"},"change(limit-count): ensure redis cluster name is set correctly ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix/pull/3910"},"#3910")),(0,n.kt)("li",{parentName:"ul"},"change: drop support of OpenResty 1.15 ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix/pull/3960"},"#3960"))),(0,n.kt)("h3",{id:"core"},"Core"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\ud83c\udf05 feat: support passing different host headers in multiple nodes ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix/pull/4208"},"#4208")),(0,n.kt)("li",{parentName:"ul"},"\ud83c\udf05 feat: add 50x html for error page ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix/pull/4164"},"#4164")),(0,n.kt)("li",{parentName:"ul"},"\ud83c\udf05 feat: support to use upstream_id in stream_route ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix/pull/4121"},"#4121")),(0,n.kt)("li",{parentName:"ul"},"\ud83c\udf05 feat: support client certificate verification ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix/pull/4034"},"#4034")),(0,n.kt)("li",{parentName:"ul"},"\ud83c\udf05 feat: add nacos support ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix/pull/3820"},"#3820")),(0,n.kt)("li",{parentName:"ul"},"\ud83c\udf05 feat: patch tcp.sock.connect to use our DNS resolver ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix/pull/4114"},"#4114"))),(0,n.kt)("h3",{id:"plugin"},"Plugin"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\ud83c\udf05 feat(redirect): support uri encoding ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix/pull/4244"},"#4244")),(0,n.kt)("li",{parentName:"ul"},"\ud83c\udf05 feat(key-auth): allow customizing header ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix/pull/4013"},"#4013")),(0,n.kt)("li",{parentName:"ul"},"\ud83c\udf05 feat(response-rewrite): allow using variable in the header ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix/pull/4194"},"#4194")),(0,n.kt)("li",{parentName:"ul"},"\ud83c\udf05 feat(ext-plugin): APISIX can support Java, Go and other languages to implement custom plugin ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix/pull/4183"},"#4183"))),(0,n.kt)("h3",{id:"bugfix"},"Bugfix"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"fix(DNS): support IPv6 resolver ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix/pull/4242"},"#4242")),(0,n.kt)("li",{parentName:"ul"},"fix(healthcheck): only one_loop is needed in the passive health check report ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix/pull/4116"},"#4116")),(0,n.kt)("li",{parentName:"ul"},'fix(traffic-split): configure multiple "rules", the request will be confused between upstream ',(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix/pull/4092"},"#4092")),(0,n.kt)("li",{parentName:"ul"},"fix: ensure upstream with domain is cached ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix/pull/4061"},"#4061")),(0,n.kt)("li",{parentName:"ul"},"fix: be compatible with the router created before 2.5 ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix/pull/4056"},"#4056")),(0,n.kt)("li",{parentName:"ul"},"fix(standalone): the conf should be available during start ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix/pull/4027"},"#4027")),(0,n.kt)("li",{parentName:"ul"},"fix: ensure atomic operation in limit-count plugin ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix/pull/3991"},"#3991"))))}c.isMDXComponent=!0}}]);