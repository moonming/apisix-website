(self.webpackChunk=self.webpackChunk||[]).push([[32456],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return u},kt:function(){return m}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=s(r),m=a,f=d["".concat(c,".").concat(m)]||d[m]||p[m]||i;return r?n.createElement(f,l(l({ref:t},u),{},{components:r})):n.createElement(f,l({ref:t},u))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,l=new Array(i);l[0]=d;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var s=2;s<i;s++)l[s]=r[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},28334:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return l},metadata:function(){return o},toc:function(){return c},default:function(){return u}});var n=r(22122),a=r(19756),i=(r(67294),r(3905)),l={title:"Mutual TLS authentication for Admin API"},o={unversionedId:"mtls",id:"version-2.6/mtls",isDocsHomePage:!1,title:"Mutual TLS authentication for Admin API",description:"\x3c!--",source:"@site/docs-apisix_versioned_docs/version-2.6/mtls.md",sourceDirName:".",slug:"/mtls",permalink:"/docs/apisix/2.6/mtls",editUrl:"https://github.com/apache/apisix/edit/master/docs/en/latest/mtls.md",version:"2.6",frontMatter:{title:"Mutual TLS authentication for Admin API"}},c=[{value:"Why use it",id:"why-use-it",children:[]},{value:"How to enable",id:"how-to-enable",children:[]},{value:"How client calls",id:"how-client-calls",children:[]}],s={toc:c};function u(e){var t=e.components,r=(0,a.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h3",{id:"why-use-it"},"Why use it"),(0,i.kt)("p",null,"Mutual TLS authentication provides a better way to prevent unauthorized access to APISIX."),(0,i.kt)("p",null,"The clients will provide their certificates to the server and the server will check whether the cert is signed by the supplied CA and decide whether to serve the request."),(0,i.kt)("h3",{id:"how-to-enable"},"How to enable"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Generate self-signed key pairs, including ca, server, client key pairs.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Modify configuration items in ",(0,i.kt)("inlineCode",{parentName:"p"},"conf/config.yaml"),":"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'  port_admin: 9180\n  https_admin: true\n\n  admin_api_mtls:\n    admin_ssl_ca_cert: "/data/certs/mtls_ca.crt"              # Path of your self-signed ca cert.\n    admin_ssl_cert: "/data/certs/mtls_server.crt"             # Path of your self-signed server side cert.\n    admin_ssl_cert_key: "/data/certs/mtls_server.key"         # Path of your self-signed server side key.\n')),(0,i.kt)("ol",{start:3},(0,i.kt)("li",{parentName:"ol"},"Run command:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"apisix init\napisix reload\n")),(0,i.kt)("h3",{id:"how-client-calls"},"How client calls"),(0,i.kt)("p",null,"Please replace the following certificate paths and domain name with your real ones."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Note: The same CA certificate as the server needs to be used *")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"curl --cacert /data/certs/mtls_ca.crt --key /data/certs/mtls_client.key --cert /data/certs/mtls_client.crt  https://admin.apisix.dev:9180/apisix/admin/routes -H 'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1'\n")))}u.isMDXComponent=!0}}]);