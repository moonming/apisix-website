(self.webpackChunk=self.webpackChunk||[]).push([[4103],{3905:function(e,a,t){"use strict";t.d(a,{Zo:function(){return o},kt:function(){return d}});var r=t(67294);function p(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function i(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,r)}return t}function n(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?i(Object(t),!0).forEach((function(a){p(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function l(e,a){if(null==e)return{};var t,r,p=function(e,a){if(null==e)return{};var t,r,p={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],a.indexOf(t)>=0||(p[t]=e[t]);return p}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(p[t]=e[t])}return p}var s=r.createContext({}),h=function(e){var a=r.useContext(s),t=a;return e&&(t="function"==typeof e?e(a):n(n({},a),e)),t},o=function(e){var a=h(e.components);return r.createElement(s.Provider,{value:a},e.children)},c={inlineCode:"code",wrapper:function(e){var a=e.children;return r.createElement(r.Fragment,{},a)}},u=r.forwardRef((function(e,a){var t=e.components,p=e.mdxType,i=e.originalType,s=e.parentName,o=l(e,["components","mdxType","originalType","parentName"]),u=h(t),d=p,m=u["".concat(s,".").concat(d)]||u[d]||c[d]||i;return t?r.createElement(m,n(n({ref:a},o),{},{components:t})):r.createElement(m,n({ref:a},o))}));function d(e,a){var t=arguments,p=a&&a.mdxType;if("string"==typeof e||p){var i=t.length,n=new Array(i);n[0]=u;var l={};for(var s in a)hasOwnProperty.call(a,s)&&(l[s]=a[s]);l.originalType=e,l.mdxType="string"==typeof e?e:p,n[1]=l;for(var h=2;h<i;h++)n[h]=t[h];return r.createElement.apply(null,n)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},45676:function(e,a,t){"use strict";t.r(a),t.d(a,{frontMatter:function(){return n},metadata:function(){return l},toc:function(){return s},default:function(){return o}});var r=t(22122),p=t(19756),i=(t(67294),t(3905)),n={title:"Release Apache APISIX Dashboard 2.5",tags:["APISIX Dashboard"]},l={permalink:"/zh/releases/2021/03/29/release-apache-apisix-dashboard-2.5",source:"@site/releases/2021-3-29-release-apache-apisix-dashboard-2.5.md",title:"Release Apache APISIX Dashboard 2.5",description:"This release mainly improves basic features, bugfix and adds test cases.",date:"2021-03-29T00:00:00.000Z",formattedDate:"2021\u5e743\u670829\u65e5",tags:[{label:"APISIX Dashboard",permalink:"/zh/releases/tags/apisix-dashboard"}],readingTime:1,truncated:!1,prevItem:{title:"Release Apache APISIX 2.5",permalink:"/zh/releases/2021/04/05/release-apache-apisix-2.5"},nextItem:{title:"Release Apache APISIX Ingress Controller 0.4.0",permalink:"/zh/releases/2021/03/12/release-apache-apisix-ingress-controller-0.4.0"}},s=[{value:"Core",id:"core",children:[]},{value:"Bugfix",id:"bugfix",children:[]},{value:"Test Case",id:"test-case",children:[]},{value:"Doc",id:"doc",children:[]}],h={toc:s};function o(e){var a=e.components,t=(0,p.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,r.Z)({},h,t,{components:a,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This release mainly improves basic features, bugfix and adds test cases."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Manager API")," 2.5 should be used with ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix/releases/tag/2.4"},"Apache APISIX 2.4"),". It is not recommended to use with other Apache APISIX versions."),(0,i.kt)("h3",{id:"core"},"Core"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Feat: add rawDataEditor for route, consumer, upstream and service ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-dashboard/pull/1505"},"#1505")),(0,i.kt)("li",{parentName:"ul"},"Feat: online debugging supports file transfer ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-dashboard/pull/1465"},"#1465")),(0,i.kt)("li",{parentName:"ul"},"Feat: support etcd prefix as apisix does ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-dashboard/pull/1477"},"#1477")),(0,i.kt)("li",{parentName:"ul"},"Feat: support changing number of executing cpu cores for manager api ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-dashboard/pull/1569"},"#1569")),(0,i.kt)("li",{parentName:"ul"},"Feat: support plugin template config feature ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-dashboard/pull/1540"},"#1540")),(0,i.kt)("li",{parentName:"ul"},"Feat: improve UI and UE (",(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-dashboard/pull/1491"},"#1491"),", ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-dashboard/pull/1481"},"#1481"),", ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-dashboard/pull/1479"},"#1479"),", ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-dashboard/pull/1472"},"#1472"),", ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-dashboard/pull/1604"},"#1604"),", ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-dashboard/pull/1603"},"#1603"),", ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-dashboard/pull/1589"},"#1589"),", ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-dashboard/pull/1538"},"#1538"),", ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-dashboard/pull/1580"},"#1580"),", ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-dashboard/pull/1651"},"#1651"),", ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-dashboard/pull/1634"},"#1634"),", ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-dashboard/pull/1641"},"#1641"),")"),(0,i.kt)("li",{parentName:"ul"},"Feat: support yaml to config plugin in plugin config page ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-dashboard/pull/1490"},"#1490"))),(0,i.kt)("h3",{id:"bugfix"},"Bugfix"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Fix: check name exists when creating or updating a resource ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-dashboard/pull/1606"},"#1606")),(0,i.kt)("li",{parentName:"ul"},"Fix: cannot unmarshal array into go value of type ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-dashboard/pull/1527"},"#1527")),(0,i.kt)("li",{parentName:"ul"},"Fix: change the appended Content-type data to overlay to ensure that the Content-type is unique ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-dashboard/pull/1619"},"#1619"))),(0,i.kt)("h3",{id:"test-case"},"Test Case"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Test: add the create and delete plugin in drawer ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-dashboard/pull/1597"},"#1597")),(0,i.kt)("li",{parentName:"ul"},"Test: write backend e2e with ginkgo (",(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-dashboard/pull/1501"},"#1501"),", ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-dashboard/pull/1502"},"#1502"),", ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-dashboard/pull/1504"},"#1504"),", ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-dashboard/pull/1518"},"#1518"),", ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-dashboard/pull/1526"},"#1526"),", ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-dashboard/pull/1545"},"#1545"),", ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-dashboard/pull/1550"},"#1550"),", ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-dashboard/pull/1556"},"#1556"),", ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-dashboard/pull/1560"},"#1560"),", ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-dashboard/pull/1561"},"#1561"),", ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-dashboard/pull/1570"},"#1570"),", ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-dashboard/pull/1582"},"#1582"),", ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-dashboard/pull/1593"},"#1593"),", ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-dashboard/pull/1613"},"#1613"),")")),(0,i.kt)("h3",{id:"doc"},"Doc"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Docs: Updating docs for backend tests ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-dashboard/pull/1625"},"#1625"))))}o.isMDXComponent=!0}}]);