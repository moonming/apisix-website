(self.webpackChunk=self.webpackChunk||[]).push([[23897],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return m}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),h=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=h(e.components);return a.createElement(o.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=h(n),m=r,d=u["".concat(o,".").concat(m)]||u[m]||c[m]||i;return n?a.createElement(d,l(l({ref:t},p),{},{components:n})):a.createElement(d,l({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=u;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:r,l[1]=s;for(var h=2;h<i;h++)l[h]=n[h];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},6270:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return l},metadata:function(){return s},toc:function(){return o},default:function(){return p}});var a=n(22122),r=n(19756),i=(n(67294),n(3905)),l={title:"Health Check"},s={unversionedId:"health-check",id:"health-check",isDocsHomePage:!1,title:"Health Check",description:"\x3c!--",source:"@site/docs/apisix/health-check.md",sourceDirName:".",slug:"/health-check",permalink:"/docs/apisix/next/health-check",editUrl:"https://github.com/apache/apisix/edit/master/docs/en/latest/health-check.md",version:"current",frontMatter:{title:"Health Check"},sidebar:"docs",previous:{title:"eureka",permalink:"/docs/apisix/next/discovery/eureka"},next:{title:"Router radixtree",permalink:"/docs/apisix/next/router-radixtree"}},o=[{value:"Health Checks for Upstream",id:"health-checks-for-upstream",children:[]}],h={toc:o};function p(e){var t=e.components,n=(0,r.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,a.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"health-checks-for-upstream"},"Health Checks for Upstream"),(0,i.kt)("p",null,"Health Check of APISIX is based on ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/Kong/lua-resty-healthcheck"},"lua-resty-healthcheck"),",\nyou can use it for upstream."),(0,i.kt)("p",null,"Note:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"We only start the health check when the upstream is hit by a request.\nThere won't be any health check if an upstream is configured but isn't in used."),(0,i.kt)("li",{parentName:"ul"},"If there is no healthy node can be chosen, we will continue to access the upstream."),(0,i.kt)("li",{parentName:"ul"},"We won't start the health check when the upstream only has one node, as we will access\nit whether this unique node is healthy or not."),(0,i.kt)("li",{parentName:"ul"},"Active health check is required so that the unhealthy node can recover.")),(0,i.kt)("p",null,"The following is an example of health check:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9080/apisix/admin/routes/1 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "uri": "/index.html",\n    "plugins": {\n        "limit-count": {\n            "count": 2,\n            "time_window": 60,\n            "rejected_code": 503,\n            "key": "remote_addr"\n        }\n    },\n    "upstream": {\n         "nodes": {\n            "127.0.0.1:1980": 1,\n            "127.0.0.1:1970": 1\n        },\n        "type": "roundrobin",\n        "retries": 2,\n        "checks": {\n            "active": {\n                "timeout": 5,\n                "http_path": "/status",\n                "host": "foo.com",\n                "healthy": {\n                    "interval": 2,\n                    "successes": 1\n                },\n                "unhealthy": {\n                    "interval": 1,\n                    "http_failures": 2\n                },\n                "req_headers": ["User-Agent: curl/7.29.0"]\n            },\n            "passive": {\n                "healthy": {\n                    "http_statuses": [200, 201],\n                    "successes": 3\n                },\n                "unhealthy": {\n                    "http_statuses": [500],\n                    "http_failures": 3,\n                    "tcp_failures": 3\n                }\n            }\n        }\n    }\n}\'\n')),(0,i.kt)("p",null,"The configures in ",(0,i.kt)("inlineCode",{parentName:"p"},"checks")," are belong to health check, the type of ",(0,i.kt)("inlineCode",{parentName:"p"},"checks"),"\ncontains: ",(0,i.kt)("inlineCode",{parentName:"p"},"active")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"passive"),"."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"active"),": To enable active health checks, you need to specify the configuration items under ",(0,i.kt)("inlineCode",{parentName:"p"},"checks.active")," in the Upstream object configuration."),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"active.timeout"),": Socket timeout for active checks (in seconds), support decimals. For example ",(0,i.kt)("inlineCode",{parentName:"p"},"1.01")," means ",(0,i.kt)("inlineCode",{parentName:"p"},"1010")," milliseconds, ",(0,i.kt)("inlineCode",{parentName:"p"},"2")," means ",(0,i.kt)("inlineCode",{parentName:"p"},"2000")," milliseconds.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"active.http_path"),": The HTTP GET request path used to detect if the upstream is healthy.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"active.host"),": The HTTP request host used to detect if the upstream is healthy.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"active.port"),": The customize health check host port (optional), this will override the port in the ",(0,i.kt)("inlineCode",{parentName:"p"},"upstream")," node."))),(0,i.kt)("p",{parentName:"li"},"The threshold fields of ",(0,i.kt)("inlineCode",{parentName:"p"},"healthy")," are:"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"active.healthy.interval"),": Interval between health checks for healthy targets (in seconds), the minimum is 1."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"active.healthy.successes"),": The number of success times to determine the target is healthy, the minimum is 1.")),(0,i.kt)("p",{parentName:"li"},"The threshold fields of  ",(0,i.kt)("inlineCode",{parentName:"p"},"unhealthy")," are:"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"active.unhealthy.interval"),": Interval between health checks for unhealthy targets (in seconds), the minimum is 1."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"active.unhealthy.http_failures"),": The number of http failures times to determine the target is unhealthy, the minimum is 1."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"active.req_headers"),": Additional request headers. Array format, so you can fill in multiple headers."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"passive"),": To enable passive health checks, you need to specify the configuration items under ",(0,i.kt)("inlineCode",{parentName:"p"},"checks.passive")," in the Upstream object configuration."),(0,i.kt)("p",{parentName:"li"},"The threshold fields of ",(0,i.kt)("inlineCode",{parentName:"p"},"healthy")," are:"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"passive.healthy.http_statuses"),": If the current response code is equal to any of these, set the upstream node to the ",(0,i.kt)("inlineCode",{parentName:"li"},"healthy")," state. Otherwise ignore this request."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"passive.healthy.successes"),": Number of successes in proxied traffic (as defined by ",(0,i.kt)("inlineCode",{parentName:"li"},"passive.healthy.http_statuses"),") to consider a target healthy, as observed by passive health checks.")),(0,i.kt)("p",{parentName:"li"},"The threshold fields of ",(0,i.kt)("inlineCode",{parentName:"p"},"unhealthy")," are:"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"passive.unhealthy.http_statuses"),": If the current response code is equal to any of these, set the upstream node to the ",(0,i.kt)("inlineCode",{parentName:"li"},"unhealthy")," state. Otherwise ignore this request."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"passive.unhealthy.tcp_failures"),": Number of TCP failures in proxied traffic to consider a target unhealthy, as observed by passive health checks."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"passive.unhealthy.timeouts"),": Number of timeouts in proxied traffic to consider a target unhealthy, as observed by passive health checks."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"passive.unhealthy.http_failures"),": Number of HTTP failures in proxied traffic (as defined by ",(0,i.kt)("inlineCode",{parentName:"li"},"passive.unhealthy.http_statuses"),") to consider a target unhealthy, as observed by passive health checks.")))),(0,i.kt)("p",null,"The health check status can be fetched via ",(0,i.kt)("inlineCode",{parentName:"p"},"GET /v1/healthcheck")," in ",(0,i.kt)("a",{parentName:"p",href:"/docs/apisix/next/control-api"},"control API"),"."))}p.isMDXComponent=!0}}]);