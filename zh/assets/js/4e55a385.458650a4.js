(self.webpackChunk=self.webpackChunk||[]).push([[14503],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=c(n),d=a,h=m["".concat(l,".").concat(d)]||m[d]||u[d]||s;return n?r.createElement(h,i(i({ref:t},p),{},{components:n})):r.createElement(h,i({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,i=new Array(s);i[0]=m;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var c=2;c<s;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9279:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return i},metadata:function(){return o},toc:function(){return l},default:function(){return p}});var r=n(22122),a=n(19756),s=(n(67294),n(3905)),i={title:"Install Ingress APISIX on Amazon EKS"},o={unversionedId:"deployments/aws",id:"deployments/aws",isDocsHomePage:!1,title:"Install Ingress APISIX on Amazon EKS",description:"\x3c!--",source:"@site/docs/apisix-ingress-controller/deployments/aws.md",sourceDirName:"deployments",slug:"/deployments/aws",permalink:"/zh/docs/ingress-controller/deployments/aws",editUrl:"https://github.com/apache/apisix-ingress-controller/edit/master/docs/en/latest/deployments/aws.md",version:"current",frontMatter:{title:"Install Ingress APISIX on Amazon EKS"},sidebar:"docs",previous:{title:"Install Ingress APISIX on ACK",permalink:"/zh/docs/ingress-controller/deployments/ack"},next:{title:"Install Ingress APISIX on Azure AKS",permalink:"/zh/docs/ingress-controller/deployments/azure"}},l=[{value:"Prerequisites",id:"prerequisites",children:[]},{value:"Install APISIX and apisix-ingress-controller",id:"install-apisix-and-apisix-ingress-controller",children:[]}],c={toc:l};function p(e){var t=e.components,n=(0,a.Z)(e,["components"]);return(0,s.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"This document explains how to install Ingress APISIX on ",(0,s.kt)("a",{parentName:"p",href:"https://amazonaws-china.com/eks/?whats-new-cards.sort-by=item.additionalFields.postDateTime&whats-new-cards.sort-order=desc&eks-blogs.sort-by=item.additionalFields.createdDate&eks-blogs.sort-order=desc"},"Amazon EKS"),"."),(0,s.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Create an EKS Service on AWS."),(0,s.kt)("li",{parentName:"ul"},"Download the kube config for your EKS from ",(0,s.kt)("a",{parentName:"li",href:"https://amazonaws-china.com/cli/"},"aws cli interface"),"."),(0,s.kt)("li",{parentName:"ul"},"Install ",(0,s.kt)("a",{parentName:"li",href:"https://helm.sh/"},"Helm"),"."),(0,s.kt)("li",{parentName:"ul"},"Clone ",(0,s.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-helm-chart"},"Apache APISIX Charts"),"."),(0,s.kt)("li",{parentName:"ul"},"Make sure your target namespace exists, kubectl operations thorough this document will be executed in namespace ",(0,s.kt)("inlineCode",{parentName:"li"},"ingress-apisix"),".")),(0,s.kt)("h2",{id:"install-apisix-and-apisix-ingress-controller"},"Install APISIX and apisix-ingress-controller"),(0,s.kt)("p",null,"As the data plane of apisix-ingress-controller, ",(0,s.kt)("a",{parentName:"p",href:"http://apisix.apache.org/"},"Apache APISIX")," can be deployed at the same time using Helm chart."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},"cd /path/to/apisix-helm-chart\nhelm repo add bitnami https://charts.bitnami.com/bitnami\nhelm repo update\nkubectl create ns ingress-apisix\nhelm install apisix charts/apisix \\\n  --set gateway.type=LoadBalancer \\\n  --set ingress-controller.enabled=true \\\n  --namespace ingress-apisix\nkubectl get service --namespace ingress-apisix\n")),(0,s.kt)("p",null,"Five Service resources were created."),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"apisix-gateway"),", which processes the real traffic;"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"apisix-admin"),", which acts as the control plane to process all the configuration changes."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"apisix-ingress-controller"),", which exposes apisix-ingress-controller's metrics."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"apisix-etcd")," and ",(0,s.kt)("inlineCode",{parentName:"li"},"apisix-etcd-headless")," for etcd service and internal communication.")),(0,s.kt)("p",null,"The gateway service type is set to ",(0,s.kt)("inlineCode",{parentName:"p"},"LoadBalancer")," (See ",(0,s.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/elasticloadbalancing/latest/network/network-load-balancers.html"},"AWS Network Balancer")," for more details), so that clients can access Apache APISIX through a load balancer. You can find the load balancer hostname by running:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl get service apisix-gateway --namespace ingress-apisix -o jsonpath='{.status.loadBalancer.ingress[].hostname}'\n")),(0,s.kt)("p",null,"Now open your ",(0,s.kt)("a",{parentName:"p",href:"https://console.aws.amazon.com/eks/home"},"EKS console"),", choosing your cluster and clicking the Workloads tag, you'll see all pods of Apache APISIX, etcd and apisix-ingress-controller are ready."),(0,s.kt)("p",null,"Try to create some ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix-ingress-controller/tree/master/docs/en/latest/concepts"},"resources")," to verify the running status. As a minimalist example, see ",(0,s.kt)("a",{parentName:"p",href:"/zh/docs/ingress-controller/practices/proxy-the-httpbin-service"},"proxy-the-httpbin-service")," to learn how to apply resources to drive the apisix-ingress-controller."))}p.isMDXComponent=!0}}]);