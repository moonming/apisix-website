(self.webpackChunk=self.webpackChunk||[]).push([[54525],{3905:function(e,t,a){"use strict";a.d(t,{Zo:function(){return p},kt:function(){return d}});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),c=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=c(a),d=n,h=u["".concat(s,".").concat(d)]||u[d]||m[d]||i;return a?r.createElement(h,l(l({ref:t},p),{},{components:a})):r.createElement(h,l({ref:t},p))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,l=new Array(i);l[0]=u;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:n,l[1]=o;for(var c=2;c<i;c++)l[c]=a[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},62537:function(e,t,a){"use strict";a.r(t),a.d(t,{frontMatter:function(){return l},metadata:function(){return o},toc:function(){return s},default:function(){return p}});var r=a(22122),n=a(19756),i=(a(67294),a(3905)),l={title:"Release Apache APISIX Ingress Controller 1.2.0",tags:["APISIX Ingress Controller"]},o={permalink:"/releases/2021/08/17/release-apache-apisix-ingress-controller-1.2.0",source:"@site/releases/2021-8-17-release-apache-apisix-ingress-controller-1.2.0.md",title:"Release Apache APISIX Ingress Controller 1.2.0",description:"Welcome to the 1.2.0 release of apisix-ingress-controller!",date:"2021-08-17T00:00:00.000Z",formattedDate:"August 17, 2021",tags:[{label:"APISIX Ingress Controller",permalink:"/releases/tags/apisix-ingress-controller"}],readingTime:1.325,truncated:!1,nextItem:{title:"Release Apache APISIX Dashboard 2.7.1",permalink:"/releases/2021/08/10/release-apache-apisix-dashboard-2.7.1"}},s=[{value:"Highlights",id:"highlights",children:[{value:"New Features",id:"new-features",children:[]},{value:"Contributors",id:"contributors",children:[]},{value:"Changes",id:"changes",children:[]},{value:"Dependency Changes",id:"dependency-changes",children:[]}]}],c={toc:s};function p(e){var t=e.components,a=(0,n.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Welcome to the 1.2.0 release of apisix-ingress-controller!"),(0,i.kt)("p",null,"This is a ",(0,i.kt)("strong",{parentName:"p"},"GA")," release."),(0,i.kt)("h2",{id:"highlights"},"Highlights"),(0,i.kt)("h3",{id:"new-features"},"New Features"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Support ingress v1beta1 HTTPS")," ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-ingress-controller/pull/596"},"#596")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Implement schema API")," ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-ingress-controller/pull/601"},"#601"))),(0,i.kt)("p",null,"Please try out the release binaries and report any issues at\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix-ingress-controller/issues"},"https://github.com/apache/apisix-ingress-controller/issues"),"."),(0,i.kt)("h3",{id:"contributors"},"Contributors"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"kv"),(0,i.kt)("li",{parentName:"ul"},"Jintao Zhang"),(0,i.kt)("li",{parentName:"ul"},"Baoyuan"),(0,i.kt)("li",{parentName:"ul"},"Hoshea\xa0Jiang"),(0,i.kt)("li",{parentName:"ul"},"chen zhuo"),(0,i.kt)("li",{parentName:"ul"},"okaybase"),(0,i.kt)("li",{parentName:"ul"},"yuanfeng0905"),(0,i.kt)("li",{parentName:"ul"},"\u5929\u4f7f\u83ab\u5fc6")),(0,i.kt)("h3",{id:"changes"},"Changes"),(0,i.kt)("p",null,"20 commits"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-ingress-controller/commit/3ab162bfcaf82ecb50e67029990b97c98d0e18eb"},(0,i.kt)("inlineCode",{parentName:"a"},"3ab162b"))," chore: bump version v1.2.0"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-ingress-controller/commit/3ad1a1cca0bf23da803b703eeed36b7c4931d387"},(0,i.kt)("inlineCode",{parentName:"a"},"3ad1a1c"))," docs: fix install docs (#579)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-ingress-controller/commit/499962be2306e341c30a84738c8a530562e00b9f"},(0,i.kt)("inlineCode",{parentName:"a"},"499962b"))," docs: ApisixRoute v2alpha1 is deprecated (#623)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-ingress-controller/commit/c1de18fa2e59bdf02398290e15199422cf75ba81"},(0,i.kt)("inlineCode",{parentName:"a"},"c1de18f"))," docs: update mTLS support in ApisixTls reference (#624)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-ingress-controller/commit/3cd689294d236495ffc5ca0071edcd856603a878"},(0,i.kt)("inlineCode",{parentName:"a"},"3cd6892"))," fix: ApisixRoute printcolumns (#626)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-ingress-controller/commit/91d985edca67493acc22536c66d4947fe597052f"},(0,i.kt)("inlineCode",{parentName:"a"},"91d985e"))," fix field tag omiteempty (#622)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-ingress-controller/commit/f78248a6aca0ac4754fd4d5d410c28f1cdd3d9c7"},(0,i.kt)("inlineCode",{parentName:"a"},"f78248a"))," fix: sync apisix failed when use v2beta1 ApisixRoute (#620)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-ingress-controller/commit/00ff01768429001e05b87c1a704c12c43c76f012"},(0,i.kt)("inlineCode",{parentName:"a"},"00ff017"))," ci: add ingress log when e2e failed (#616)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-ingress-controller/commit/e5441a3d0877017f17e96ac44d2a804a509676e7"},(0,i.kt)("inlineCode",{parentName:"a"},"e5441a3"))," feat: implement schema API (#601)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-ingress-controller/commit/5635652865ef965db58794b08e2fe37ddc9c08e3"},(0,i.kt)("inlineCode",{parentName:"a"},"5635652"))," fix: timer leak memory (#591)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-ingress-controller/commit/812e4bd3ca197c7ea227ff7de8b5ee1b6ac9424d"},(0,i.kt)("inlineCode",{parentName:"a"},"812e4bd"))," docs: add declarations for the version of APISIX (#595)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-ingress-controller/commit/915a5d1d99d68f9c08b4d59e9b2e9cb8fa0dde31"},(0,i.kt)("inlineCode",{parentName:"a"},"915a5d1"))," test: add assert for test cases (#613)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-ingress-controller/commit/d12a900976e9118fe1b5fd0df137426a294f7a97"},(0,i.kt)("inlineCode",{parentName:"a"},"d12a900"))," fix: add v2beta1 logic (#615)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-ingress-controller/commit/ac25764d46448b4df5772bde236be8334f47a7f7"},(0,i.kt)("inlineCode",{parentName:"a"},"ac25764"))," feat: support ingress v1beta1 https (#596)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-ingress-controller/commit/866d0bfe38b1e7bfb3340c1f1a317f8d604673f5"},(0,i.kt)("inlineCode",{parentName:"a"},"866d0bf"))," docs: modify the format of FAQ.md (#605)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-ingress-controller/commit/2d12c3fdd1369e9e263342d0def6473de5c0664f"},(0,i.kt)("inlineCode",{parentName:"a"},"2d12c3f"))," docs: add v2beta1 description (#602)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-ingress-controller/commit/7291212964a7f3505fb1bb624fb79df0c9eb0678"},(0,i.kt)("inlineCode",{parentName:"a"},"7291212"))," fix: do not need to record status when ApisixUpstream removed (#589)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-ingress-controller/commit/c78c8237b9c114e0e5564bd74a6729bdee04259c"},(0,i.kt)("inlineCode",{parentName:"a"},"c78c823"))," chore: merge from v1.1 (#583)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-ingress-controller/commit/e649c503ca6ba4103a27fef729f8835b90078a93"},(0,i.kt)("inlineCode",{parentName:"a"},"e649c50"))," chore: add udp usage & upgrade the verion of ApisixRoute (#585)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-ingress-controller/commit/57ec6dafa7b96b8c2fe5c386eedfce74cb581441"},(0,i.kt)("inlineCode",{parentName:"a"},"57ec6da"))," fix: misspell in FAQ (#577)")),(0,i.kt)("h3",{id:"dependency-changes"},"Dependency Changes"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"github.com/google/uuid"),"  v1.2.0 ",(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("em",{parentName:"strong"},"new"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"github.com/onsi/ginkgo"),"  v1.16.4 ",(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("em",{parentName:"strong"},"new"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"golang.org/x/net"),"        3d97a244fca7 -> 4163338589ed"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"golang.org/x/sys"),"        0f9fa26af87c ",(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("em",{parentName:"strong"},"new"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"golang.org/x/tools"),"      v0.1.5 ",(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("em",{parentName:"strong"},"new")))),(0,i.kt)("p",null,"Previous release can be found at ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix-ingress-controller/releases/tag/1.1.0"},"1.1.0")))}p.isMDXComponent=!0}}]);