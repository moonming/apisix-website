(self.webpackChunk=self.webpackChunk||[]).push([[87447],{3905:function(e,t,a){"use strict";a.d(t,{Zo:function(){return u},kt:function(){return m}});var r=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,r,i=function(e,t){if(null==e)return{};var a,r,i={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var o=r.createContext({}),c=function(e){var t=r.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u=function(e){var t=c(e.components);return r.createElement(o.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var a=e.components,i=e.mdxType,n=e.originalType,o=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),h=c(a),m=i,d=h["".concat(o,".").concat(m)]||h[m]||s[m]||n;return a?r.createElement(d,l(l({ref:t},u),{},{components:a})):r.createElement(d,l({ref:t},u))}));function m(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var n=a.length,l=new Array(n);l[0]=h;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p.mdxType="string"==typeof e?e:i,l[1]=p;for(var c=2;c<n;c++)l[c]=a[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}h.displayName="MDXCreateElement"},38991:function(e,t,a){"use strict";a.r(t),a.d(t,{frontMatter:function(){return l},metadata:function(){return p},toc:function(){return o},default:function(){return u}});var r=a(22122),i=a(19756),n=(a(67294),a(3905)),l={title:"Release Apache APISIX 1.1",tags:["APISIX"]},p={permalink:"/zh/releases/2020/02/24/release-apache-apisix-1.1",source:"@site/releases/2020-2-24-release-apache-apisix-1.1.md",title:"Release Apache APISIX 1.1",description:"This release is mainly to strengthen the stability of the code and add more documentation.",date:"2020-02-24T00:00:00.000Z",formattedDate:"2020\u5e742\u670824\u65e5",tags:[{label:"APISIX",permalink:"/zh/releases/tags/apisix"}],readingTime:1.1,truncated:!1,prevItem:{title:"Release Apache APISIX 1.2",permalink:"/zh/releases/2020/04/20/release-apache-apisix-1.2"},nextItem:{title:"Release Apache APISIX Dashboard 1.0",permalink:"/zh/releases/2020/02/24/release-apache-apisix-dashboard-1.0"}},o=[{value:"Core",id:"core",children:[]},{value:"Doc",id:"doc",children:[]},{value:"CI",id:"ci",children:[]},{value:"Plugins",id:"plugins",children:[]}],c={toc:o};function u(e){var t=e.components,a=(0,i.Z)(e,["components"]);return(0,n.kt)("wrapper",(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"This release is mainly to strengthen the stability of the code and add more documentation."),(0,n.kt)("h3",{id:"core"},"Core"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"always specify perl include path when running test cases. ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-apisix/pull/1097"},"#1097")),(0,n.kt)("li",{parentName:"ul"},"Feature: Add support for PROXY Protocol. ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-apisix/pull/1113"},"#1113")),(0,n.kt)("li",{parentName:"ul"},"enhancement: add verify command to verify apisix configuration(nginx.conf). ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-apisix/pull/1112"},"#1112")),(0,n.kt)("li",{parentName:"ul"},"feature: increase the default size of the core file. ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-apisix/pull/1105"},"#1105")),(0,n.kt)("li",{parentName:"ul"},"feature: make the number of file is as configurable as the connections. ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-apisix/pull/1098"},"#1098")),(0,n.kt)("li",{parentName:"ul"},"core: improve the core.log module. ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-apisix/pull/1093"},"#1093")),(0,n.kt)("li",{parentName:"ul"},"Modify bin/apisix to support the SO_REUSEPORT. ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-apisix/pull/1085"},"#1085"))),(0,n.kt)("h3",{id:"doc"},"Doc"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"doc: add link to download grafana meta data. ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-apisix/pull/1119"},"#1119")),(0,n.kt)("li",{parentName:"ul"},"doc: Update README.md. ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-apisix/pull/1118"},"#1118")),(0,n.kt)("li",{parentName:"ul"},"doc: doc: add wolf-rbac plugin. ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-apisix/pull/1116"},"#1116")),(0,n.kt)("li",{parentName:"ul"},"doc: update the download link of rpm. ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-apisix/pull/1108"},"#1108")),(0,n.kt)("li",{parentName:"ul"},"doc: add more english article. ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-apisix/pull/1092"},"#1092")),(0,n.kt)("li",{parentName:"ul"},"Adding contribution guidelines for the documentation. ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-apisix/pull/1086"},"#1086")),(0,n.kt)("li",{parentName:"ul"},"doc: getting-started.md check. ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-apisix/pull/1084"},"#1084")),(0,n.kt)("li",{parentName:"ul"},"Added additional information and refactoring sentences. ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-apisix/pull/1078"},"#1078")),(0,n.kt)("li",{parentName:"ul"},"Update admin-api-cn.md. ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-apisix/pull/1067"},"#1067")),(0,n.kt)("li",{parentName:"ul"},"Update architecture-design-cn.md. ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-apisix/pull/1065"},"#1065"))),(0,n.kt)("h3",{id:"ci"},"CI"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"ci: remove patch which is no longer necessary and removed in the upst. ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-apisix/pull/1090"},"#1090")),(0,n.kt)("li",{parentName:"ul"},"fix path error when install with luarocks. ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-apisix/pull/1068"},"#1068")),(0,n.kt)("li",{parentName:"ul"},"travis: run a apisix instance which intalled by luarocks. ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-apisix/pull/1063"},"#1063"))),(0,n.kt)("h3",{id:"plugins"},"Plugins"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"feature: Add wolf rbac plugin. ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-apisix/pull/1095"},"#1095")),(0,n.kt)("li",{parentName:"ul"},"Adding UDP logger plugin. ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-apisix/pull/1070"},"#1070")),(0,n.kt)("li",{parentName:"ul"},"enhancement: using internal request instead of external request in node-status plugin. ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-apisix/pull/1109"},"#1109"))))}u.isMDXComponent=!0}}]);