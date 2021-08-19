(self.webpackChunk=self.webpackChunk||[]).push([[29518],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(n),m=i,h=d["".concat(l,".").concat(m)]||d[m]||p[m]||a;return n?r.createElement(h,o(o({ref:t},u),{},{components:n})):r.createElement(h,o({ref:t},u))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var c=2;c<a;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},49554:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return o},metadata:function(){return s},toc:function(){return l},default:function(){return u}});var r=n(22122),i=n(19756),a=(n(67294),n(3905)),o={title:"Integration service discovery registry"},s={unversionedId:"discovery",id:"version-2.8/discovery",isDocsHomePage:!1,title:"Integration service discovery registry",description:"\x3c!--",source:"@site/docs-apisix_versioned_docs/version-2.8/discovery.md",sourceDirName:".",slug:"/discovery",permalink:"/docs/apisix/discovery",editUrl:"https://github.com/apache/apisix/edit/master/docs/en/latest/discovery.md",version:"2.8",frontMatter:{title:"Integration service discovery registry"},sidebar:"version-2.8/docs",previous:{title:"FAQ",permalink:"/docs/apisix/FAQ"},next:{title:"DNS",permalink:"/docs/apisix/discovery/dns"}},l=[{value:"Summary",id:"summary",children:[]},{value:"Supported discovery registries",id:"supported-discovery-registries",children:[]},{value:"How to extend the discovery client?",id:"how-to-extend-the-discovery-client",children:[{value:"Basic steps",id:"basic-steps",children:[]},{value:"the example of Eureka",id:"the-example-of-eureka",children:[]}]},{value:"Configuration for discovery client",id:"configuration-for-discovery-client",children:[{value:"Initial service discovery",id:"initial-service-discovery",children:[]},{value:"Configuration for Eureka",id:"configuration-for-eureka",children:[]}]},{value:"Upstream setting",id:"upstream-setting",children:[]},{value:"Embedded control api for debugging",id:"embedded-control-api-for-debugging",children:[]}],c={toc:l};function u(e){var t=e.components,n=(0,i.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"summary"},"Summary"),(0,a.kt)("p",null,"When system traffic changes, the number of servers of the upstream service also increases or decreases, or the server needs to be replaced due to its hardware failure. If the gateway maintains upstream service information through configuration, the maintenance costs in the microservices architecture pattern are unpredictable. Furthermore, due to the untimely update of these information, will also bring a certain impact for the business, and the impact of human error operation can not be ignored. So it is very necessary for the gateway to automatically get the latest list of service instances through the service registry\u3002As shown in the figure below\uff1a"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/apache/apisix/master/docs/assets/images/discovery.png",alt:null})),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"When the service starts, it will report some of its information, such as the service name, IP, port and other information to the registry. The services communicate with the registry using a mechanism such as a heartbeat, and if the registry and the service are unable to communicate for a long time, the instance will be cancel.When the service goes offline, the registry will delete the instance information."),(0,a.kt)("li",{parentName:"ol"},"The gateway gets service instance information from the registry in near-real time."),(0,a.kt)("li",{parentName:"ol"},"When the user requests the service through the gateway, the gateway selects one instance from the registry for proxy.")),(0,a.kt)("p",null,"Common registries: Eureka, Etcd, Consul, Zookeeper, Nacos etc."),(0,a.kt)("h2",{id:"supported-discovery-registries"},"Supported discovery registries"),(0,a.kt)("p",null,"Currently we support Eureka/Consul/Nacos and service discovery via DNS."),(0,a.kt)("p",null,"For service discovery via DNS, see ",(0,a.kt)("a",{parentName:"p",href:"/docs/apisix/discovery/dns"},"service discovery via DNS"),"."),(0,a.kt)("p",null,"For Consul, see ",(0,a.kt)("a",{parentName:"p",href:"/docs/apisix/discovery/consul_kv"},"service discovery via Consul")),(0,a.kt)("p",null,"For Nacos, see ",(0,a.kt)("a",{parentName:"p",href:"/docs/apisix/discovery/nacos"},"service discovery via Nacos")),(0,a.kt)("p",null,"For Eureka, see below."),(0,a.kt)("h2",{id:"how-to-extend-the-discovery-client"},"How to extend the discovery client?"),(0,a.kt)("h3",{id:"basic-steps"},"Basic steps"),(0,a.kt)("p",null,"It is very easy for APISIX to extend the discovery client, the basic steps are as follows"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Add the implementation of registry client in the 'apisix/discovery/' directory;")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Implement the ",(0,a.kt)("inlineCode",{parentName:"p"},"_M.init_worker()")," function for initialization and the ",(0,a.kt)("inlineCode",{parentName:"p"},"_M.nodes(service_name)")," function for obtaining the list of service instance nodes;")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"If you need the discovery module to export the debugging information online, implement the ",(0,a.kt)("inlineCode",{parentName:"p"},"_M.dump_data()")," function;")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Convert the registry data into data in APISIX;"))),(0,a.kt)("h3",{id:"the-example-of-eureka"},"the example of Eureka"),(0,a.kt)("h4",{id:"implementation-of-eurekalua"},"Implementation of eureka.lua"),(0,a.kt)("p",null,"First, add ",(0,a.kt)("a",{parentName:"p",href:"../../../apisix/discovery/eureka.lua"},(0,a.kt)("inlineCode",{parentName:"a"},"eureka.lua"))," in the ",(0,a.kt)("inlineCode",{parentName:"p"},"apisix/discovery/")," directory;"),(0,a.kt)("p",null,"Then implement the ",(0,a.kt)("inlineCode",{parentName:"p"},"_M.init_worker()")," function for initialization and the ",(0,a.kt)("inlineCode",{parentName:"p"},"_M.nodes(service_name)")," function for obtaining the list of service instance nodes in ",(0,a.kt)("inlineCode",{parentName:"p"},"eureka.lua"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},"local _M = {\n    version = 1.0,\n}\n\n\nfunction _M.nodes(service_name)\n    ... ...\nend\n\n\nfunction _M.init_worker()\n    ... ...\nend\n\n\nfunction _M.dump_data()\n    return {config = your_config, services = your_services, other = ... }\nend\n\n\nreturn _M\n")),(0,a.kt)("h4",{id:"how-convert-eurekas-instance-data-to-apisixs-node"},"How convert Eureka's instance data to APISIX's node?"),(0,a.kt)("p",null,"Here's an example of Eureka's data\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "applications": {\n      "application": [\n          {\n              "name": "USER-SERVICE",                 # service name\n              "instance": [\n                  {\n                      "instanceId": "192.168.1.100:8761",\n                      "hostName": "192.168.1.100",\n                      "app": "USER-SERVICE",          # service name\n                      "ipAddr": "192.168.1.100",      # IP address\n                      "status": "UP",\n                      "overriddenStatus": "UNKNOWN",\n                      "port": {\n                          "$": 8761,\n                          "@enabled": "true"\n                      },\n                      "securePort": {\n                          "$": 443,\n                          "@enabled": "false"\n                      },\n                      "metadata": {\n                          "management.port": "8761",\n                          "weight": 100               # Setting by \'eureka.instance.metadata-map.weight\' of the spring boot application\n                      },\n                      "homePageUrl": "http://192.168.1.100:8761/",\n                      "statusPageUrl": "http://192.168.1.100:8761/actuator/info",\n                      "healthCheckUrl": "http://192.168.1.100:8761/actuator/health",\n                      ... ...\n                  }\n              ]\n          }\n      ]\n  }\n}\n')),(0,a.kt)("p",null,"Deal with the Eureka's instance data need the following steps :"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"select the UP instance. When the value of ",(0,a.kt)("inlineCode",{parentName:"li"},"overriddenStatus"),' is "UP" or the value of ',(0,a.kt)("inlineCode",{parentName:"li"},"overriddenStatus"),' is "UNKNOWN" and the value of ',(0,a.kt)("inlineCode",{parentName:"li"},"status"),' is "UP".'),(0,a.kt)("li",{parentName:"ol"},"Host. The ",(0,a.kt)("inlineCode",{parentName:"li"},"ipAddr")," is the IP address of instance; and must be IPv4 or IPv6."),(0,a.kt)("li",{parentName:"ol"},"Port. If the value of ",(0,a.kt)("inlineCode",{parentName:"li"},'port["@enabled"]'),' is equal to "true", using the value of ',(0,a.kt)("inlineCode",{parentName:"li"},'port["\\$"]'),", If the value of ",(0,a.kt)("inlineCode",{parentName:"li"},'securePort["@enabled"]'),' is equal to "true", using the value of ',(0,a.kt)("inlineCode",{parentName:"li"},'securePort["\\$"]'),"."),(0,a.kt)("li",{parentName:"ol"},"Weight. ",(0,a.kt)("inlineCode",{parentName:"li"},"local weight = metadata.weight or local_conf.eureka.weight or 100"))),(0,a.kt)("p",null,"The result of this example is as follows:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'[\n  {\n    "host" : "192.168.1.100",\n    "port" : 8761,\n    "weight" : 100,\n    "metadata" : {\n      "management.port": "8761",\n    }\n  }\n]\n')),(0,a.kt)("h2",{id:"configuration-for-discovery-client"},"Configuration for discovery client"),(0,a.kt)("h3",{id:"initial-service-discovery"},"Initial service discovery"),(0,a.kt)("p",null,"Add the following configuration to ",(0,a.kt)("inlineCode",{parentName:"p"},"conf/config.yaml")," to add different service discovery clients for dynamic selection during use:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"discovery:\n  eureka:\n      ...\n")),(0,a.kt)("p",null,"This name should be consistent with the file name of the implementation registry in the ",(0,a.kt)("inlineCode",{parentName:"p"},"apisix/discovery/")," directory."),(0,a.kt)("p",null,"The supported discovery client: Eureka."),(0,a.kt)("h3",{id:"configuration-for-eureka"},"Configuration for Eureka"),(0,a.kt)("p",null,"Add following configuration in ",(0,a.kt)("inlineCode",{parentName:"p"},"conf/config.yaml")," \uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'discovery:\n  eureka:\n    host:                            # it\'s possible to define multiple eureka hosts addresses of the same eureka cluster.\n      - "http://${username}:${password}@${eureka_host1}:${eureka_port1}"\n      - "http://${username}:${password}@${eureka_host2}:${eureka_port2}"\n    prefix: "/eureka/"\n    fetch_interval: 30               # 30s\n    weight: 100                      # default weight for node\n    timeout:\n      connect: 2000                  # 2000ms\n      send: 2000                     # 2000ms\n      read: 5000                     # 5000ms\n')),(0,a.kt)("h2",{id:"upstream-setting"},"Upstream setting"),(0,a.kt)("p",null,'Here is an example of routing a request with a URL of "/user/*" to a service which named "user-service" and use eureka discovery client in the registry :'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'$ curl http://127.0.0.1:9080/apisix/admin/routes/1 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -i -d \'\n{\n    "uri": "/user/*",\n    "upstream": {\n        "service_name": "USER-SERVICE",\n        "type": "roundrobin",\n        "discovery_type": "eureka"\n    }\n}\'\n\nHTTP/1.1 201 Created\nDate: Sat, 31 Aug 2019 01:17:15 GMT\nContent-Type: text/plain\nTransfer-Encoding: chunked\nConnection: keep-alive\nServer: APISIX web server\n\n{"node":{"value":{"uri":"\\/user\\/*","upstream": {"service_name": "USER-SERVICE", "type": "roundrobin", "discovery_type": "eureka"}},"createdIndex":61925,"key":"\\/apisix\\/routes\\/1","modifiedIndex":61925},"action":"create"}\n')),(0,a.kt)("p",null,"Because the upstream interface URL may have conflict, usually in the gateway by prefix to distinguish:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'$ curl http://127.0.0.1:9080/apisix/admin/routes/1 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -i -d \'\n{\n    "uri": "/a/*",\n    "plugins": {\n        "proxy-rewrite" : {\n            "regex_uri": ["^/a/(.*)", "/${1}"]\n        }\n    },\n    "upstream": {\n        "service_name": "A-SERVICE",\n        "type": "roundrobin",\n        "discovery_type": "eureka"\n    }\n}\'\n\n$ curl http://127.0.0.1:9080/apisix/admin/routes/2 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -i -d \'\n{\n    "uri": "/b/*",\n    "plugins": {\n        "proxy-rewrite" : {\n            "regex_uri": ["^/b/(.*)", "/${1}"]\n        }\n    },\n    "upstream": {\n        "service_name": "B-SERVICE",\n        "type": "roundrobin",\n        "discovery_type": "eureka"\n    }\n}\'\n')),(0,a.kt)("p",null,"Suppose both A-SERVICE and B-SERVICE provide a ",(0,a.kt)("inlineCode",{parentName:"p"},"/test")," API. The above configuration allows access to A-SERVICE's ",(0,a.kt)("inlineCode",{parentName:"p"},"/test")," API through ",(0,a.kt)("inlineCode",{parentName:"p"},"/a/test")," and B-SERVICE's ",(0,a.kt)("inlineCode",{parentName:"p"},"/test")," API through ",(0,a.kt)("inlineCode",{parentName:"p"},"/b/test"),"."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Notice"),"\uff1aWhen configuring ",(0,a.kt)("inlineCode",{parentName:"p"},"upstream.service_name"),",  ",(0,a.kt)("inlineCode",{parentName:"p"},"upstream.nodes")," will no longer take effect, but will be replaced by 'nodes' obtained from the registry."),(0,a.kt)("h2",{id:"embedded-control-api-for-debugging"},"Embedded control api for debugging"),(0,a.kt)("p",null,"Sometimes we need the discovery client to export online data snapshot in memory when running for debugging, and if you implement the ",(0,a.kt)("inlineCode",{parentName:"p"},"_M. dump_data()")," function:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},"function _M.dump_data()\n    return {config = local_conf.discovery.eureka, services = applications}\nend\n")),(0,a.kt)("p",null,"Then you can call its control api as below:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"GET /v1/discovery/{discovery_type}/dump\n")),(0,a.kt)("p",null,"eg:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"curl http://127.0.0.1:9090/v1/discovery/eureka/dump\n")))}u.isMDXComponent=!0}}]);