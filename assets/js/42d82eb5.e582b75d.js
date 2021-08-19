(self.webpackChunk=self.webpackChunk||[]).push([[52369],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return s},kt:function(){return f}});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var c=n.createContext({}),u=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},s=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=u(r),f=i,g=d["".concat(c,".").concat(f)]||d[f]||p[f]||a;return r?n.createElement(g,o(o({ref:t},s),{},{components:r})):n.createElement(g,o({ref:t},s))}));function f(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var u=2;u<a;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},15342:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return o},metadata:function(){return l},toc:function(){return c},default:function(){return s}});var n=r(22122),i=r(19756),a=(r(67294),r(3905)),o={title:"Global rule"},l={unversionedId:"architecture-design/global-rule",id:"version-2.5/architecture-design/global-rule",isDocsHomePage:!1,title:"Global rule",description:"\x3c!--",source:"@site/docs-apisix_versioned_docs/version-2.5/architecture-design/global-rule.md",sourceDirName:"architecture-design",slug:"/architecture-design/global-rule",permalink:"/docs/apisix/2.5/architecture-design/global-rule",editUrl:"https://github.com/apache/apisix/edit/master/docs/en/latest/architecture-design/global-rule.md",version:"2.5",frontMatter:{title:"Global rule"},sidebar:"version-2.5/docs",previous:{title:"Upstream",permalink:"/docs/apisix/2.5/architecture-design/upstream"},next:{title:"Plugin Config",permalink:"/docs/apisix/2.5/architecture-design/plugin-config"}},c=[],u={toc:c};function s(e){var t=e.components,r=(0,i.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/apisix/2.5/architecture-design/plugin"},"Plugin")," just can be binded to ",(0,a.kt)("a",{parentName:"p",href:"/docs/apisix/2.5/architecture-design/service"},"Service")," or ",(0,a.kt)("a",{parentName:"p",href:"/docs/apisix/2.5/architecture-design/route"},"Route"),", if we want a ",(0,a.kt)("a",{parentName:"p",href:"/docs/apisix/2.5/architecture-design/plugin"},"Plugin")," work on all requests, how to do it?\nWe can register a global ",(0,a.kt)("a",{parentName:"p",href:"/docs/apisix/2.5/architecture-design/plugin"},"Plugin")," with ",(0,a.kt)("inlineCode",{parentName:"p"},"GlobalRule"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'curl -X PUT \\\n  https://{apisix_listen_address}/apisix/admin/global_rules/1 \\\n  -H \'Content-Type: application/json\' \\\n  -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' \\\n  -d \'{\n        "plugins": {\n            "limit-count": {\n                "time_window": 60,\n                "policy": "local",\n                "count": 2,\n                "key": "remote_addr",\n                "rejected_code": 503\n            }\n        }\n    }\'\n')),(0,a.kt)("p",null,"Now, the ",(0,a.kt)("inlineCode",{parentName:"p"},"limit-count")," plugin will work on all requests"),(0,a.kt)("p",null,"we can list all ",(0,a.kt)("inlineCode",{parentName:"p"},"GlobalRule")," via admin api as below:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"curl https://{apisix_listen_address}/apisix/admin/global_rules\n")))}s.isMDXComponent=!0}}]);