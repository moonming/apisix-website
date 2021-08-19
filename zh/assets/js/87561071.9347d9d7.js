(self.webpackChunk=self.webpackChunk||[]).push([[20414],{3905:function(e,t,a){"use strict";a.d(t,{Zo:function(){return u},kt:function(){return m}});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var o=r.createContext({}),c=function(e){var t=r.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u=function(e){var t=c(e.components);return r.createElement(o.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),h=c(a),m=n,f=h["".concat(o,".").concat(m)]||h[m]||s[m]||i;return a?r.createElement(f,l(l({ref:t},u),{},{components:a})):r.createElement(f,l({ref:t},u))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,l=new Array(i);l[0]=h;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p.mdxType="string"==typeof e?e:n,l[1]=p;for(var c=2;c<i;c++)l[c]=a[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}h.displayName="MDXCreateElement"},29106:function(e,t,a){"use strict";a.r(t),a.d(t,{frontMatter:function(){return l},metadata:function(){return p},toc:function(){return o},default:function(){return u}});var r=a(22122),n=a(19756),i=(a(67294),a(3905)),l={title:"Release Apache APISIX 2.0",tags:["APISIX"]},p={permalink:"/zh/releases/2020/10/28/release-apache-apisix-2.0",source:"@site/releases/2020-10-28-release-apache-apisix-2.0.md",title:"Release Apache APISIX 2.0",description:"This is release candidate.",date:"2020-10-28T00:00:00.000Z",formattedDate:"2020\u5e7410\u670828\u65e5",tags:[{label:"APISIX",permalink:"/zh/releases/tags/apisix"}],readingTime:1.1,truncated:!1,prevItem:{title:"Release Apache APISIX 2.1",permalink:"/zh/releases/2020/12/01/release-apache-apisix-2.1"},nextItem:{title:"Release Apache APISIX Dashboard 1.5",permalink:"/zh/releases/2020/08/12/release-apache-apisix-dashboard-1.5"}},o=[{value:"Core",id:"core",children:[]},{value:"Plugin",id:"plugin",children:[]},{value:"Bugfix",id:"bugfix",children:[]},{value:"CVE",id:"cve",children:[]}],c={toc:o};function u(e){var t=e.components,a=(0,n.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This is release candidate."),(0,i.kt)("h3",{id:"core"},"Core"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\ud83c\udf05 ",(0,i.kt)("strong",{parentName:"li"},"Migrate from etcd v2 to v3 protocol, which is not backward compatible. Apache APISIX only supports etcd 3.4 and above versions.")," ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix/pull/2036"},"#2036")),(0,i.kt)("li",{parentName:"ul"},"add labels for upstream object.",(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix/pull/2279"},"#2279")),(0,i.kt)("li",{parentName:"ul"},"add managed fields in json schema for resources, such as create_time and update_time.",(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix/pull/2444"},"#2444")),(0,i.kt)("li",{parentName:"ul"},"use interceptors to protect plugin's route",(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix/pull/2416"},"#2416")),(0,i.kt)("li",{parentName:"ul"},"support multiple ports for http and https listen.",(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix/pull/2409"},"#2409")),(0,i.kt)("li",{parentName:"ul"},"implement ",(0,i.kt)("inlineCode",{parentName:"li"},"core.sleep"),".",(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix/pull/2397"},"#2397"))),(0,i.kt)("h3",{id:"plugin"},"Plugin"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\ud83c\udf05 ",(0,i.kt)("strong",{parentName:"li"},"add AK/SK(HMAC) auth plugin."),(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix/pull/2192"},"#2192")),(0,i.kt)("li",{parentName:"ul"},"\ud83c\udf05 add referer-restriction plugin.",(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix/pull/2352"},"#2352")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"limit-count")," support to use ",(0,i.kt)("inlineCode",{parentName:"li"},"redis")," cluster.",(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix/pull/2406"},"#2406")),(0,i.kt)("li",{parentName:"ul"},"feat(proxy-cache): store the temporary file under cache directory. ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix/pull/2317"},"#2317")),(0,i.kt)("li",{parentName:"ul"},"feat(http-logger): support for specified the log formats via admin API ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix/pull/2309"},"#2309"))),(0,i.kt)("h3",{id:"bugfix"},"Bugfix"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\ud83d\udc1b ",(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"high priority"))," When the data plane receives an instruction to delete a resource(router or upstream etc.), it does not properly clean up the cache, resulting in the existing resources cannot be found. This problem only occurs in the case of long and frequent deletion operations.",(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix/pull/2168"},"#2168")),(0,i.kt)("li",{parentName:"ul"},"fix routing priority does not take effect.",(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix/pull/2447"},"#2447")),(0,i.kt)("li",{parentName:"ul"},"set random seed for each worker process at ",(0,i.kt)("inlineCode",{parentName:"li"},"init_worker")," phase, only ",(0,i.kt)("inlineCode",{parentName:"li"},"init")," phase is not enough.",(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix/pull/2357"},"#2357")),(0,i.kt)("li",{parentName:"ul"},"remove unsupported algorithm in jwt plugin.",(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix/pull/2356"},"#2356")),(0,i.kt)("li",{parentName:"ul"},"return correct response code when ",(0,i.kt)("inlineCode",{parentName:"li"},"http_to_https")," enabled in redirect plugin.",(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix/pull/2311"},"#2311"))),(0,i.kt)("p",null,"For more changes, please refer to ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix/milestone/7"},"Milestone")),(0,i.kt)("h3",{id:"cve"},"CVE"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Fixed Admin API default access token vulnerability")))}u.isMDXComponent=!0}}]);