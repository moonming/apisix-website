(self.webpackChunk=self.webpackChunk||[]).push([[25979],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),l=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=l(n),m=a,f=u["".concat(i,".").concat(m)]||u[m]||d[m]||o;return n?r.createElement(f,p(p({ref:t},c),{},{components:n})):r.createElement(f,p({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,p=new Array(o);p[0]=u;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:a,p[1]=s;for(var l=2;l<o;l++)p[l]=n[l];return r.createElement.apply(null,p)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},32199:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return p},metadata:function(){return s},toc:function(){return i},default:function(){return c}});var r=n(22122),a=n(19756),o=(n(67294),n(3905)),p={title:"Stream Proxy"},s={unversionedId:"stream-proxy",id:"version-2.8/stream-proxy",isDocsHomePage:!1,title:"Stream Proxy",description:"\x3c!--",source:"@site/docs-apisix_versioned_docs/version-2.8/stream-proxy.md",sourceDirName:".",slug:"/stream-proxy",permalink:"/docs/apisix/stream-proxy",editUrl:"https://github.com/apache/apisix/edit/master/docs/en/latest/stream-proxy.md",version:"2.8",frontMatter:{title:"Stream Proxy"},sidebar:"version-2.8/docs",previous:{title:"Stand-alone mode",permalink:"/docs/apisix/stand-alone"},next:{title:"gRPC Proxy",permalink:"/docs/apisix/grpc-proxy"}},i=[{value:"How to enable stream proxy?",id:"how-to-enable-stream-proxy",children:[]},{value:"How to set route?",id:"how-to-set-route",children:[]},{value:"More route match options",id:"more-route-match-options",children:[]},{value:"Accept TLS over TCP",id:"accept-tls-over-tcp",children:[]}],l={toc:i};function c(e){var t=e.components,n=(0,a.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"TCP is the protocol for many popular applications and services, such as LDAP, MySQL, and RTMP. UDP (User Datagram Protocol) is the protocol for many popular non-transactional applications, such as DNS, syslog, and RADIUS."),(0,o.kt)("p",null,"APISIX can dynamically load balancing TCP/UDP proxy. In Nginx world, we call TCP/UDP proxy to stream proxy, we followed this statement."),(0,o.kt)("h2",{id:"how-to-enable-stream-proxy"},"How to enable stream proxy?"),(0,o.kt)("p",null,"Setting the ",(0,o.kt)("inlineCode",{parentName:"p"},"stream_proxy")," option in ",(0,o.kt)("inlineCode",{parentName:"p"},"conf/config.yaml"),", specify a list of addresses that require dynamic proxy.\nBy default, no stream proxy is enabled."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'apisix:\n  stream_proxy: # TCP/UDP proxy\n    tcp: # TCP proxy address list\n      - 9100\n      - "127.0.0.1:9101"\n    udp: # UDP proxy address list\n      - 9200\n      - "127.0.0.1:9211"\n')),(0,o.kt)("p",null,"If you need to enable both HTTP and stream proxy, set the ",(0,o.kt)("inlineCode",{parentName:"p"},"only")," to false:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"apisix:\n  stream_proxy: # TCP/UDP proxy\n    only: false\n    tcp: # TCP proxy address list\n      - 9100\n")),(0,o.kt)("h2",{id:"how-to-set-route"},"How to set route?"),(0,o.kt)("p",null,"Here is a mini example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9080/apisix/admin/stream_routes/1 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "remote_addr": "127.0.0.1",\n    "upstream": {\n        "nodes": {\n            "127.0.0.1:1995": 1\n        },\n        "type": "roundrobin"\n    }\n}\'\n')),(0,o.kt)("p",null,"It means APISIX will proxy the request to ",(0,o.kt)("inlineCode",{parentName:"p"},"127.0.0.1:1995")," which the client remote address is ",(0,o.kt)("inlineCode",{parentName:"p"},"127.0.0.1"),"."),(0,o.kt)("p",null,"For more use cases, please take a look at ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix/blob/master/t/stream-node/sanity.t"},"test case"),"."),(0,o.kt)("h2",{id:"more-route-match-options"},"More route match options"),(0,o.kt)("p",null,"And we can add more options to match a route."),(0,o.kt)("p",null,"Here is an example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9080/apisix/admin/stream_routes/1 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "server_addr": "127.0.0.1",\n    "server_port": 2000,\n    "upstream": {\n        "nodes": {\n            "127.0.0.1:1995": 1\n        },\n        "type": "roundrobin"\n    }\n}\'\n')),(0,o.kt)("p",null,"It means APISIX will proxy the request to ",(0,o.kt)("inlineCode",{parentName:"p"},"127.0.0.1:1995")," which the server address is ",(0,o.kt)("inlineCode",{parentName:"p"},"127.0.0.1")," and the server port is equal to ",(0,o.kt)("inlineCode",{parentName:"p"},"2000"),"."),(0,o.kt)("p",null,"Read ",(0,o.kt)("a",{parentName:"p",href:"/docs/apisix/admin-api#stream-route"},"Admin API's Stream Route section")," for the complete options list."),(0,o.kt)("h2",{id:"accept-tls-over-tcp"},"Accept TLS over TCP"),(0,o.kt)("p",null,"APISIX can accept TLS over TCP."),(0,o.kt)("p",null,"First of all, we need to enable TLS for the TCP address:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"apisix:\n  stream_proxy: # TCP/UDP proxy\n    tcp: # TCP proxy address list\n      - addr: 9100\n        tls: true\n")),(0,o.kt)("p",null,"Second, we need to configure certificate for the given SNI.\nSee ",(0,o.kt)("a",{parentName:"p",href:"/docs/apisix/admin-api#ssl"},"Admin API's SSL section")," for how to do."),(0,o.kt)("p",null,"Third, we need to configure a stream route to match and proxy it to the upstream:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9080/apisix/admin/stream_routes/1 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "remote_addr": "127.0.0.1",\n    "upstream": {\n        "nodes": {\n            "127.0.0.1:1995": 1\n        },\n        "type": "roundrobin"\n    }\n}\'\n')),(0,o.kt)("p",null,"When the connection is TLS over TCP, we can use the SNI to match a route, like:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9080/apisix/admin/stream_routes/1 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "sni": "a.test.com",\n    "upstream": {\n        "nodes": {\n            "127.0.0.1:5991": 1\n        },\n        "type": "roundrobin"\n    }\n}\'\n')),(0,o.kt)("p",null,"In this case, a connection handshaked with SNI ",(0,o.kt)("inlineCode",{parentName:"p"},"a.test.com")," will be proxied to ",(0,o.kt)("inlineCode",{parentName:"p"},"127.0.0.1:5991"),"."))}c.isMDXComponent=!0}}]);