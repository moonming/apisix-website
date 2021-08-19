(self.webpackChunk=self.webpackChunk||[]).push([[42831],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return u},kt:function(){return m}});var r=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var c=r.createContext({}),s=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},u=function(e){var n=s(e.components);return r.createElement(c.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),f=s(t),m=i,d=f["".concat(c,".").concat(m)]||f[m]||p[m]||o;return t?r.createElement(d,a(a({ref:n},u),{},{components:t})):r.createElement(d,a({ref:n},u))}));function m(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,a=new Array(o);a[0]=f;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var s=2;s<o;s++)a[s]=t[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},81969:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return a},metadata:function(){return l},toc:function(){return c},default:function(){return u}});var r=t(22122),i=t(19756),o=(t(67294),t(3905)),a={title:"Configuration file switching based on environment variables"},l={unversionedId:"profile",id:"profile",isDocsHomePage:!1,title:"Configuration file switching based on environment variables",description:"\x3c!--",source:"@site/docs/apisix/profile.md",sourceDirName:".",slug:"/profile",permalink:"/docs/apisix/next/profile",editUrl:"https://github.com/apache/apisix/edit/master/docs/en/latest/profile.md",version:"current",frontMatter:{title:"Configuration file switching based on environment variables"},sidebar:"docs",previous:{title:"Introducing APISIX's testing framework",permalink:"/docs/apisix/next/internal/testing-framework"}},c=[],s={toc:c};function u(e){var n=e.components,t=(0,i.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,r.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The reason the configuration is extracted from the code is to better adapt to changes. Usually our applications have different\noperating environments such as development environment and production environment. Certain configurations of these applications\nwill definitely be different, such as the address of the configuration center."),(0,o.kt)("p",null,"If the configuration of all environments is placed in the same file, it is very difficult to manage. After receiving new\nrequirements, we need to change the parameters in the configuration file to the development environment when developing the\ndevelopment environment. You have to change it back. It's very easy to make mistakes."),(0,o.kt)("p",null,"The solution to the above problem is to distinguish the current running environment through environment variables, and switch\nbetween different configuration files through environment variables. The corresponding environment variable in APISIX is: ",(0,o.kt)("inlineCode",{parentName:"p"},"APISIX_PROFILE")),(0,o.kt)("p",null,"When ",(0,o.kt)("inlineCode",{parentName:"p"},"APISIX_PROFILE")," is not set, the following three configuration files are used by default:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"conf/config.yaml"),(0,o.kt)("li",{parentName:"ul"},"conf/apisix.yaml"),(0,o.kt)("li",{parentName:"ul"},"conf/debug.yaml")),(0,o.kt)("p",null,"If the value of ",(0,o.kt)("inlineCode",{parentName:"p"},"APISIX_PROFILE")," is set to ",(0,o.kt)("inlineCode",{parentName:"p"},"prod"),", the following three configuration files are used:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"conf/config-prod.yaml"),(0,o.kt)("li",{parentName:"ul"},"conf/apisix-prod.yaml"),(0,o.kt)("li",{parentName:"ul"},"conf/debug-prod.yaml")),(0,o.kt)("p",null,"Although this way will increase the number of configuration files, it can be managed independently, and then version management\ntools such as git can be configured, and version management can be better achieved."))}u.isMDXComponent=!0}}]);