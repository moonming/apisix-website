(self.webpackChunk=self.webpackChunk||[]).push([[54650],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),c=u(n),m=a,g=c["".concat(s,".").concat(m)]||c[m]||d[m]||l;return n?r.createElement(g,i(i({ref:t},p),{},{components:n})):r.createElement(g,i({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=c;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var u=2;u<l;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},32404:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return i},metadata:function(){return o},toc:function(){return s},default:function(){return p}});var r=n(22122),a=n(19756),l=(n(67294),n(3905)),i={title:"ua-restriction"},o={unversionedId:"plugins/ua-restriction",id:"version-2.8/plugins/ua-restriction",isDocsHomePage:!1,title:"ua-restriction",description:"\x3c!--",source:"@site/docs-apisix_versioned_docs/version-2.8/plugins/ua-restriction.md",sourceDirName:"plugins",slug:"/plugins/ua-restriction",permalink:"/docs/apisix/plugins/ua-restriction",editUrl:"https://github.com/apache/apisix/edit/master/docs/en/latest/plugins/ua-restriction.md",version:"2.8",frontMatter:{title:"ua-restriction"},sidebar:"version-2.8/docs",previous:{title:"ip-restriction",permalink:"/docs/apisix/plugins/ip-restriction"},next:{title:"referer-restriction",permalink:"/docs/apisix/plugins/referer-restriction"}},s=[{value:"Summary",id:"summary",children:[]},{value:"Name",id:"name",children:[]},{value:"Attributes",id:"attributes",children:[]},{value:"How To Enable",id:"how-to-enable",children:[]},{value:"Test Plugin",id:"test-plugin",children:[]},{value:"Disable Plugin",id:"disable-plugin",children:[]}],u={toc:s};function p(e){var t=e.components,n=(0,a.Z)(e,["components"]);return(0,l.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"summary"},"Summary"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#name"},(0,l.kt)("strong",{parentName:"a"},"Name"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#attributes"},(0,l.kt)("strong",{parentName:"a"},"Attributes"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#how-to-enable"},(0,l.kt)("strong",{parentName:"a"},"How To Enable"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#test-plugin"},(0,l.kt)("strong",{parentName:"a"},"Test Plugin"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#disable-plugin"},(0,l.kt)("strong",{parentName:"a"},"Disable Plugin")))),(0,l.kt)("h2",{id:"name"},"Name"),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"ua-restriction")," can restrict access to a Service or a Route by ",(0,l.kt)("inlineCode",{parentName:"p"},"allowlist")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"denylist")," ",(0,l.kt)("inlineCode",{parentName:"p"},"User-Agent")," header."),(0,l.kt)("h2",{id:"attributes"},"Attributes"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Requirement"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"),(0,l.kt)("th",{parentName:"tr",align:null},"Valid"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"bypass_missing"),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"optional"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Whether to bypass the check when the User-Agent header is missing")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"allowlist"),(0,l.kt)("td",{parentName:"tr",align:null},"array","[string]"),(0,l.kt)("td",{parentName:"tr",align:null},"optional"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"A list of allowed User-Agent headers.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"denylist"),(0,l.kt)("td",{parentName:"tr",align:null},"array","[string]"),(0,l.kt)("td",{parentName:"tr",align:null},"optional"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"A list of denied User-Agent headers.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"message"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"optional"),(0,l.kt)("td",{parentName:"tr",align:null},"Not allowed."),(0,l.kt)("td",{parentName:"tr",align:null},"length range: ","[1, 1024]"),(0,l.kt)("td",{parentName:"tr",align:null},"Message of deny reason.")))),(0,l.kt)("p",null,"Any of ",(0,l.kt)("inlineCode",{parentName:"p"},"allowlist")," or ",(0,l.kt)("inlineCode",{parentName:"p"},"denylist")," can be optional, and can work together in this order: allowlist->denylist"),(0,l.kt)("p",null,"The message can be user-defined."),(0,l.kt)("h2",{id:"how-to-enable"},"How To Enable"),(0,l.kt)("p",null,"Creates a route or service object, and enable plugin ",(0,l.kt)("inlineCode",{parentName:"p"},"ua-restriction"),"."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9080/apisix/admin/routes/1 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "uri": "/index.html",\n    "upstream": {\n        "type": "roundrobin",\n        "nodes": {\n            "127.0.0.1:1980": 1\n        }\n    },\n    "plugins": {\n        "ua-restriction": {\n             "bypass_missing": true,\n             "allowlist": [\n                 "my-bot1",\n                 "(Baiduspider)/(\\\\d+)\\\\.(\\\\d+)"\n             ],\n             "denylist": [\n                 "my-bot2",\n                 "(Twitterspider)/(\\\\d+)\\\\.(\\\\d+)"\n             ]\n        }\n    }\n}\'\n')),(0,l.kt)("p",null,"Default returns ",(0,l.kt)("inlineCode",{parentName:"p"},'{"message":"Not allowed"}')," when rejected. If you want to use a custom message, you can configure it in the plugin section."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'"plugins": {\n    "ua-restriction": {\n        "denylist": [\n            "my-bot2",\n            "(Twitterspider)/(\\\\d+)\\\\.(\\\\d+)"\n        ],\n        "message": "Do you want to do something bad?"\n    }\n}\n')),(0,l.kt)("h2",{id:"test-plugin"},"Test Plugin"),(0,l.kt)("p",null,"Requests from normal User-Agent:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"$ curl http://127.0.0.1:9080/index.html -i\nHTTP/1.1 200 OK\n...\n")),(0,l.kt)("p",null,"Requests with the bot User-Agent:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"$ curl http://127.0.0.1:9080/index.html --header 'User-Agent: Twitterspider/2.0'\nHTTP/1.1 403 Forbidden\n")),(0,l.kt)("h2",{id:"disable-plugin"},"Disable Plugin"),(0,l.kt)("p",null,"When you want to disable the ",(0,l.kt)("inlineCode",{parentName:"p"},"ua-restriction")," plugin, it is very simple,\nyou can delete the corresponding json configuration in the plugin configuration,\nno need to restart the service, it will take effect immediately:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'$ curl http://127.0.0.1:2379/v2/keys/apisix/routes/1 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d value=\'\n{\n    "uri": "/index.html",\n    "plugins": {},\n    "upstream": {\n        "type": "roundrobin",\n        "nodes": {\n            "39.97.63.215:80": 1\n        }\n    }\n}\'\n')),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"ua-restriction")," plugin has been disabled now. It works for other plugins."))}p.isMDXComponent=!0}}]);