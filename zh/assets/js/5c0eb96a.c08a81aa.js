(self.webpackChunk=self.webpackChunk||[]).push([[71117],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return l},kt:function(){return g}});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var a=n.createContext({}),s=function(e){var t=n.useContext(a),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},l=function(e){var t=s(e.components);return n.createElement(a.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,a=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),f=s(r),g=i,m=f["".concat(a,".").concat(g)]||f[g]||c[g]||o;return r?n.createElement(m,p(p({ref:t},l),{},{components:r})):n.createElement(m,p({ref:t},l))}));function g(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,p=new Array(o);p[0]=f;var u={};for(var a in t)hasOwnProperty.call(t,a)&&(u[a]=t[a]);u.originalType=e,u.mdxType="string"==typeof e?e:i,p[1]=u;for(var s=2;s<o;s++)p[s]=r[s];return n.createElement.apply(null,p)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},18342:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return p},metadata:function(){return u},toc:function(){return a},default:function(){return l}});var n=r(22122),i=r(19756),o=(r(67294),r(3905)),p={title:"ext-plugin-post-req"},u={unversionedId:"plugins/ext-plugin-post-req",id:"version-2.7/plugins/ext-plugin-post-req",isDocsHomePage:!1,title:"ext-plugin-post-req",description:"\x3c!--",source:"@site/docs-apisix_versioned_docs/version-2.7/plugins/ext-plugin-post-req.md",sourceDirName:"plugins",slug:"/plugins/ext-plugin-post-req",permalink:"/zh/docs/apisix/2.7/plugins/ext-plugin-post-req",editUrl:"https://github.com/apache/apisix/edit/master/docs/zh/latest/plugins/ext-plugin-post-req.md",version:"2.7",frontMatter:{title:"ext-plugin-post-req"},sidebar:"version-2.7/docs",previous:{title:"ext-plugin-pre-req",permalink:"/zh/docs/apisix/2.7/plugins/ext-plugin-pre-req"},next:{title:"response-rewrite",permalink:"/zh/docs/apisix/2.7/plugins/response-rewrite"}},a=[],s={toc:a};function l(e){var t=e.components,r=(0,i.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"ext-plugin-post-req")," is almost the same as ",(0,o.kt)("inlineCode",{parentName:"p"},"ext-plugin-pre-req"),"."),(0,o.kt)("p",null,"The only difference is that it runs after executing builtin Lua plugins and\nbefore proxying to the upstream."),(0,o.kt)("p",null,"See the documentation of ",(0,o.kt)("a",{parentName:"p",href:"/zh/docs/apisix/2.7/plugins/ext-plugin-pre-req"},"ext-plugin-pre-req")," for how to configure it."))}l.isMDXComponent=!0}}]);