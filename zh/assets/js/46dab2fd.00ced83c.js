(self.webpackChunk=self.webpackChunk||[]).push([[74814],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return u},kt:function(){return d}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),l=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),f=l(r),d=a,h=f["".concat(p,".").concat(d)]||f[d]||s[d]||i;return r?n.createElement(h,o(o({ref:t},u),{},{components:r})):n.createElement(h,o({ref:t},u))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=f;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var l=2;l<i;l++)o[l]=r[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},42746:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return o},metadata:function(){return c},toc:function(){return p},default:function(){return u}});var n=r(22122),a=r(19756),i=(r(67294),r(3905)),o={title:"Release Apache APISIX Dashboard 2.6.1"},c={permalink:"/zh/events/2021/05/27/release-apache-apisix-dashboard-2.6.1",source:"@site/events/2021-05-27-release-apache-apisix-dashboard-2.6.1.md",title:"Release Apache APISIX Dashboard 2.6.1",description:"This release mainly contains bugfixes.",date:"2021-05-27T00:00:00.000Z",formattedDate:"2021\u5e745\u670827\u65e5",tags:[],readingTime:.23,truncated:!0,prevItem:{title:"Release Apache APISIX Dashboard 2.7",permalink:"/zh/events/2021/06/15/release-apache-apisix-dashboard-2.7"},nextItem:{title:"Release Apache APISIX 2.6",permalink:"/zh/events/2021/05/24/release-apache-apisix-2.6"}},p=[{value:"Bugfix",id:"bugfix",children:[]}],l={toc:p};function u(e){var t=e.components,r=(0,a.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This release mainly contains bugfixes."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Manager API")," 2.6.1 should be used with ",(0,i.kt)("a",{parentName:"p",href:"https://apisix.apache.org/downloads/"},"Apache APISIX 2.5"),". It is not recommended to use with other Apache APISIX versions."),(0,i.kt)("h3",{id:"bugfix"},"Bugfix"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Fix: use remote address instead of client ip ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-dashboard/pull/1831"},"#1831")),(0,i.kt)("li",{parentName:"ul"},"Fix: turn off online debug ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-dashboard/pull/1903"},"#1903"))))}u.isMDXComponent=!0}}]);