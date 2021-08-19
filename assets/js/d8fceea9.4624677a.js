(self.webpackChunk=self.webpackChunk||[]).push([[41520],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return u},kt:function(){return m}});var a=t(67294);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,l=function(e,n){if(null==e)return{};var t,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var p=a.createContext({}),s=function(e){var n=a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=s(e.components);return a.createElement(p.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},c=a.forwardRef((function(e,n){var t=e.components,l=e.mdxType,r=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),c=s(t),m=l,h=c["".concat(p,".").concat(m)]||c[m]||d[m]||r;return t?a.createElement(h,i(i({ref:n},u),{},{components:t})):a.createElement(h,i({ref:n},u))}));function m(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var r=t.length,i=new Array(r);i[0]=c;var o={};for(var p in n)hasOwnProperty.call(n,p)&&(o[p]=n[p]);o.originalType=e,o.mdxType="string"==typeof e?e:l,i[1]=o;for(var s=2;s<r;s++)i[s]=t[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}c.displayName="MDXCreateElement"},67159:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return i},metadata:function(){return o},toc:function(){return p},default:function(){return u}});var a=t(22122),l=t(19756),r=(t(67294),t(3905)),i={title:"fault-injection"},o={unversionedId:"plugins/fault-injection",id:"version-2.5/plugins/fault-injection",isDocsHomePage:!1,title:"fault-injection",description:"\x3c!--",source:"@site/docs-apisix_versioned_docs/version-2.5/plugins/fault-injection.md",sourceDirName:"plugins",slug:"/plugins/fault-injection",permalink:"/docs/apisix/2.5/plugins/fault-injection",editUrl:"https://github.com/apache/apisix/edit/master/docs/en/latest/plugins/fault-injection.md",version:"2.5",frontMatter:{title:"fault-injection"},sidebar:"version-2.5/docs",previous:{title:"grpc-transcode",permalink:"/docs/apisix/2.5/plugins/grpc-transcode"},next:{title:"key-auth",permalink:"/docs/apisix/2.5/plugins/key-auth"}},p=[{value:"Name",id:"name",children:[]},{value:"Attributes",id:"attributes",children:[]},{value:"How To Enable",id:"how-to-enable",children:[{value:"Enable the plugin",id:"enable-the-plugin",children:[]}]},{value:"Disable Plugin",id:"disable-plugin",children:[]}],s={toc:p};function u(e){var n=e.components,t=(0,l.Z)(e,["components"]);return(0,r.kt)("wrapper",(0,a.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"name"},"Name"),(0,r.kt)("p",null,"Fault injection plugin, this plugin can be used with other plugins and will be executed before other plugins.  The ",(0,r.kt)("inlineCode",{parentName:"p"},"abort")," attribute will directly return the user-specified http code to the client and terminate the subsequent plugins. The ",(0,r.kt)("inlineCode",{parentName:"p"},"delay")," attribute will delay a request and execute subsequent plugins."),(0,r.kt)("h2",{id:"attributes"},"Attributes"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Requirement"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"),(0,r.kt)("th",{parentName:"tr",align:null},"Valid"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"abort.http_status"),(0,r.kt)("td",{parentName:"tr",align:null},"integer"),(0,r.kt)("td",{parentName:"tr",align:null},"required"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"[200, ...]"),(0,r.kt)("td",{parentName:"tr",align:null},"user-specified http code returned to the client.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"abort.body"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"optional"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"response data returned to the client. Nginx variable can be used inside, like ",(0,r.kt)("inlineCode",{parentName:"td"},"client addr: $remote_addr\\n"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"abort.percentage"),(0,r.kt)("td",{parentName:"tr",align:null},"integer"),(0,r.kt)("td",{parentName:"tr",align:null},"optional"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"[0, 100]"),(0,r.kt)("td",{parentName:"tr",align:null},"percentage of requests to be aborted.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"abort.vars"),(0,r.kt)("td",{parentName:"tr",align:null},"array[]"),(0,r.kt)("td",{parentName:"tr",align:null},"optional"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"The rules for executing fault injection will only be executed when the rules are matched. ",(0,r.kt)("inlineCode",{parentName:"td"},"vars")," is a list of expressions, which is from the ",(0,r.kt)("a",{parentName:"td",href:"https://github.com/api7/lua-resty-expr"},"lua-resty-expr"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"delay.duration"),(0,r.kt)("td",{parentName:"tr",align:null},"number"),(0,r.kt)("td",{parentName:"tr",align:null},"required"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"delay time (can be decimal).")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"delay.percentage"),(0,r.kt)("td",{parentName:"tr",align:null},"integer"),(0,r.kt)("td",{parentName:"tr",align:null},"optional"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"[0, 100]"),(0,r.kt)("td",{parentName:"tr",align:null},"percentage of requests to be delayed.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"delay.vars"),(0,r.kt)("td",{parentName:"tr",align:null},"array[]"),(0,r.kt)("td",{parentName:"tr",align:null},"optional"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Execute the request delay rule, and the request will be delayed only after the rule matches. ",(0,r.kt)("inlineCode",{parentName:"td"},"vars")," is a list of expressions, which is from the ",(0,r.kt)("a",{parentName:"td",href:"https://github.com/api7/lua-resty-expr"},"lua-resty-expr"),".")))),(0,r.kt)("p",null,"Note: One of ",(0,r.kt)("inlineCode",{parentName:"p"},"abort")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"delay")," must be specified."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"vars")," is a list of expression which is from the ",(0,r.kt)("inlineCode",{parentName:"p"},"lua-resty-expr"),", which can flexibly implement the ",(0,r.kt)("inlineCode",{parentName:"p"},"and/or")," relationship between rules. Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'[\n    [\n        [ "arg_name","==","jack" ],\n        [ "arg_age","==",18 ]\n    ],\n    [\n        [ "arg_name2","==","allen" ]\n    ]\n]\n')),(0,r.kt)("p",null,"This means that the relationship between the first two expressions is ",(0,r.kt)("inlineCode",{parentName:"p"},"and"),", and the relationship between the first two expressions and the third expression is ",(0,r.kt)("inlineCode",{parentName:"p"},"or"),"."),(0,r.kt)("h2",{id:"how-to-enable"},"How To Enable"),(0,r.kt)("h3",{id:"enable-the-plugin"},"Enable the plugin"),(0,r.kt)("p",null,"1: enable the fault-injection plugin for a specific route and specify the abort attribute\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9080/apisix/admin/routes/1 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "plugins": {\n       "fault-injection": {\n           "abort": {\n              "http_status": 200,\n              "body": "Fault Injection!"\n           }\n       }\n    },\n    "upstream": {\n       "nodes": {\n           "127.0.0.1:1980": 1\n       },\n       "type": "roundrobin"\n    },\n    "uri": "/hello"\n}\'\n')),(0,r.kt)("p",null,"Test plugin\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"$ curl http://127.0.0.1:9080/hello -i\nHTTP/1.1 200 OK\nDate: Mon, 13 Jan 2020 13:50:04 GMT\nContent-Type: text/plain\nTransfer-Encoding: chunked\nConnection: keep-alive\nServer: APISIX web server\n\nFault Injection!\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},'http status is 200 and the response body is "Fault Injection! " indicate that the plugin is enabled.')),(0,r.kt)("p",null,"2: Enable the ",(0,r.kt)("inlineCode",{parentName:"p"},"fault-injection")," plugin for a specific route and specify the ",(0,r.kt)("inlineCode",{parentName:"p"},"delay")," attribute:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9080/apisix/admin/routes/1 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "plugins": {\n       "fault-injection": {\n           "delay": {\n              "duration": 3\n           }\n       }\n    },\n    "upstream": {\n       "nodes": {\n           "127.0.0.1:1980": 1\n       },\n       "type": "roundrobin"\n    },\n    "uri": "/hello"\n}\'\n')),(0,r.kt)("p",null,"Test plugin\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"$ time curl http://127.0.0.1:9080/hello -i\nHTTP/1.1 200 OK\nContent-Type: application/octet-stream\nContent-Length: 6\nConnection: keep-alive\nServer: APISIX web server\nDate: Tue, 14 Jan 2020 14:30:54 GMT\nLast-Modified: Sat, 11 Jan 2020 12:46:21 GMT\n\nhello\n\nreal    0m3.034s\nuser    0m0.007s\nsys     0m0.010s\n")),(0,r.kt)("p",null,"Example 3: Enable the ",(0,r.kt)("inlineCode",{parentName:"p"},"fault-injection")," plugin for a specific route and specify the vars rule of the abort parameter."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9080/apisix/admin/routes/1  -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "plugins": {\n        "fault-injection": {\n            "abort": {\n                    "http_status": 403,\n                    "body": "Fault Injection!\\n",\n                    "vars": [\n                        [\n                            [ "arg_name","==","jack" ]\n                        ]\n                    ]\n            }\n        }\n    },\n    "upstream": {\n        "nodes": {\n            "127.0.0.1:1980": 1\n        },\n        "type": "roundrobin"\n    },\n    "uri": "/hello"\n}\'\n')),(0,r.kt)("p",null,"Test plugin\uff1a"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"The vars rule fails to match, and the request returns upstream response data:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'$ curl "http://127.0.0.1:9080/hello?name=allen" -i\nHTTP/1.1 200 OK\nContent-Type: application/octet-stream\nTransfer-Encoding: chunked\nConnection: keep-alive\nDate: Wed, 20 Jan 2021 07:21:57 GMT\nServer: APISIX/2.2\n\nhello\n')),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"The vars rule is successfully matched and fault injection is performed:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'$ curl "http://127.0.0.1:9080/hello?name=jack" -i\nHTTP/1.1 403 Forbidden\nDate: Wed, 20 Jan 2021 07:23:37 GMT\nContent-Type: text/plain; charset=utf-8\nTransfer-Encoding: chunked\nConnection: keep-alive\nServer: APISIX/2.2\n\nFault Injection!\n')),(0,r.kt)("p",null,"Example 4: Enable the ",(0,r.kt)("inlineCode",{parentName:"p"},"fault-injection")," plugin for a specific route and specify the vars rule for the delay parameter."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9080/apisix/admin/routes/1  -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "plugins": {\n        "fault-injection": {\n            "delay": {\n                "duration": 2,\n                "vars": [\n                    [\n                        [ "arg_name","==","jack" ]\n                    ]\n                ]\n            }\n        }\n    },\n    "upstream": {\n        "nodes": {\n            "127.0.0.1:1980": 1\n        },\n        "type": "roundrobin"\n    },\n    "uri": "/hello"\n}\'\n')),(0,r.kt)("p",null,"Test plugin\uff1a"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"The vars rule fails to match and the request is not delayed:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'$ time curl "http://127.0.0.1:9080/hello?name=allen" -i\nHTTP/1.1 200 OK\nContent-Type: application/octet-stream\nTransfer-Encoding: chunked\nConnection: keep-alive\nDate: Wed, 20 Jan 2021 07:26:17 GMT\nServer: APISIX/2.2\n\nhello\n\nreal    0m0.007s\nuser    0m0.003s\nsys     0m0.003s\n')),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"The vars rule is successfully matched, and the request is delayed for two seconds:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'$ time curl "http://127.0.0.1:9080/hello?name=jack" -i\nHTTP/1.1 200 OK\nContent-Type: application/octet-stream\nTransfer-Encoding: chunked\nConnection: keep-alive\nDate: Wed, 20 Jan 2021 07:57:50 GMT\nServer: APISIX/2.2\n\nhello\n\nreal    0m2.009s\nuser    0m0.004s\nsys     0m0.004s\n')),(0,r.kt)("p",null,"Example 5: Enable the ",(0,r.kt)("inlineCode",{parentName:"p"},"fault-injection")," plugin for a specific route, and specify the vars rules for the abort and delay parameters."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9080/apisix/admin/routes/1  -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "plugins": {\n        "fault-injection": {\n            "abort": {\n                "http_status": 403,\n                "body": "Fault Injection!\\n",\n                "vars": [\n                    [\n                        [ "arg_name","==","jack" ]\n                    ]\n                ]\n            },\n            "delay": {\n                "duration": 2,\n                "vars": [\n                    [\n                        [ "http_age","==","18" ]\n                    ]\n                ]\n            }\n        }\n    },\n    "upstream": {\n        "nodes": {\n            "127.0.0.1:1980": 1\n        },\n        "type": "roundrobin"\n    },\n    "uri": "/hello"\n}\'\n')),(0,r.kt)("p",null,"Test plugin\uff1a"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"The vars rules of abort and delay fail to match:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"$ time curl \"http://127.0.0.1:9080/hello?name=allen\" -H 'age: 20' -i\nHTTP/1.1 200 OK\nContent-Type: application/octet-stream\nTransfer-Encoding: chunked\nConnection: keep-alive\nDate: Wed, 20 Jan 2021 08:01:43 GMT\nServer: APISIX/2.2\n\nhello\n\nreal    0m0.007s\nuser    0m0.003s\nsys     0m0.003s\n")),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"The abort vars rule fails to match, no fault injection is performed, but the request is delayed:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"$ time curl \"http://127.0.0.1:9080/hello?name=allen\" -H 'age: 18' -i\nHTTP/1.1 200 OK\nContent-Type: application/octet-stream\nTransfer-Encoding: chunked\nConnection: keep-alive\nDate: Wed, 20 Jan 2021 08:19:03 GMT\nServer: APISIX/2.2\n\nhello\n\nreal    0m2.009s\nuser    0m0.001s\nsys     0m0.006s\n")),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"The vars rule of delay fails to match, the request is not delayed, but fault injection is performed:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"$ time curl \"http://127.0.0.1:9080/hello?name=jack\" -H 'age: 20' -i\nHTTP/1.1 403 Forbidden\nDate: Wed, 20 Jan 2021 08:20:18 GMT\nContent-Type: text/plain; charset=utf-8\nTransfer-Encoding: chunked\nConnection: keep-alive\nServer: APISIX/2.2\n\nFault Injection!\n\nreal    0m0.007s\nuser    0m0.002s\nsys     0m0.004s\n")),(0,r.kt)("ol",{start:4},(0,r.kt)("li",{parentName:"ol"},"The vars rules of abort and delay parameters match successfully, perform fault injection, and delay the request:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"$ time curl \"http://127.0.0.1:9080/hello?name=jack\" -H 'age: 18' -i\nHTTP/1.1 403 Forbidden\nDate: Wed, 20 Jan 2021 08:21:17 GMT\nContent-Type: text/plain; charset=utf-8\nTransfer-Encoding: chunked\nConnection: keep-alive\nServer: APISIX/2.2\n\nFault Injection!\n\nreal    0m2.006s\nuser    0m0.001s\nsys     0m0.005s\n")),(0,r.kt)("p",null,"Example 6: Enable the ",(0,r.kt)("inlineCode",{parentName:"p"},"fault-injection")," plugin for a specific route, and specify the vars rule of the abort parameter (the relationship of ",(0,r.kt)("inlineCode",{parentName:"p"},"or"),")."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9080/apisix/admin/routes/1  -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "plugins": {\n        "fault-injection": {\n            "abort": {\n                "http_status": 403,\n                "body": "Fault Injection!\\n",\n                "vars": [\n                    [\n                        ["arg_name","==","jack"],\n                        ["arg_age","!","<",18]\n                    ],\n                    [\n                        ["http_apikey","==","apisix-key"]\n                    ]\n                ]\n            }\n        }\n    },\n    "upstream": {\n        "nodes": {\n            "127.0.0.1:1980": 1\n        },\n        "type": "roundrobin"\n    },\n    "uri": "/hello"\n}\'\n')),(0,r.kt)("p",null,"Indicates that when the request parameters name and age satisfy both ",(0,r.kt)("inlineCode",{parentName:"p"},'name == "jack"')," and ",(0,r.kt)("inlineCode",{parentName:"p"},"age >= 18"),", fault injection is performed. Or when the request header apikey satisfies ",(0,r.kt)("inlineCode",{parentName:"p"},'apikey == "apisix-key"'),", fault injection is performed."),(0,r.kt)("p",null,"Test plugin\uff1a"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"The request parameter name and age match successfully, and the request header ",(0,r.kt)("inlineCode",{parentName:"li"},"apikey")," is missing, and fault injection is performed:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'$ curl "http://127.0.0.1:9080/hello?name=jack&age=19" -i\nHTTP/1.1 403 Forbidden\nDate: Fri, 22 Jan 2021 11:05:46 GMT\nContent-Type: text/plain; charset=utf-8\nTransfer-Encoding: chunked\nConnection: keep-alive\nServer: APISIX/2.2\n\nFault Injection!\n')),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"The request header ",(0,r.kt)("inlineCode",{parentName:"li"},"apikey")," is successfully matched, and the request parameters are missing, and fault injection is performed:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'$ curl http://127.0.0.1:9080/hello -H "apikey: apisix-key" -i\nHTTP/1.1 403 Forbidden\nDate: Fri, 22 Jan 2021 11:08:34 GMT\nContent-Type: text/plain; charset=utf-8\nTransfer-Encoding: chunked\nConnection: keep-alive\nServer: APISIX/2.2\n\nFault Injection!\n')),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"Both request parameters and request headers fail to match, and fault injection is not performed:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"$ curl http://127.0.0.1:9080/hello -i\nHTTP/1.1 200 OK\nContent-Type: application/octet-stream\nTransfer-Encoding: chunked\nConnection: keep-alive\nDate: Fri, 22 Jan 2021 11:11:17 GMT\nServer: APISIX/2.2\n\nhello\n")),(0,r.kt)("h2",{id:"disable-plugin"},"Disable Plugin"),(0,r.kt)("p",null,"Remove the corresponding JSON in the plugin configuration to disable the plugin immediately without restarting the service:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9080/apisix/admin/routes/1 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "uri": "/hello",\n    "plugins": {},\n    "upstream": {\n        "type": "roundrobin",\n        "nodes": {\n            "127.0.0.1:1980": 1\n        }\n    }\n}\'\n')),(0,r.kt)("p",null,"The plugin has been disabled now."))}u.isMDXComponent=!0}}]);