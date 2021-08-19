(self.webpackChunk=self.webpackChunk||[]).push([[87962],{3905:function(e,t,a){"use strict";a.d(t,{Zo:function(){return s},kt:function(){return u}});var n=a(67294);function p(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){p(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,p=function(e,t){if(null==e)return{};var a,n,p={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(p[a]=e[a]);return p}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(p[a]=e[a])}return p}var o=n.createContext({}),c=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},s=function(e){var t=c(e.components);return n.createElement(o.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,p=e.mdxType,i=e.originalType,o=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=c(a),u=p,k=d["".concat(o,".").concat(u)]||d[u]||m[u]||i;return a?n.createElement(k,r(r({ref:t},s),{},{components:a})):n.createElement(k,r({ref:t},s))}));function u(e,t){var a=arguments,p=t&&t.mdxType;if("string"==typeof e||p){var i=a.length,r=new Array(i);r[0]=d;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:p,r[1]=l;for(var c=2;c<i;c++)r[c]=a[c];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},93920:function(e,t,a){"use strict";a.r(t),a.d(t,{frontMatter:function(){return r},metadata:function(){return l},toc:function(){return o},default:function(){return s}});var n=a(22122),p=a(19756),i=(a(67294),a(3905)),r={title:"\u5982\u4f55\u6784\u5efa Apache APISIX"},l={unversionedId:"how-to-build",id:"how-to-build",isDocsHomePage:!1,title:"\u5982\u4f55\u6784\u5efa Apache APISIX",description:"\x3c!--",source:"@site/i18n/zh/docusaurus-plugin-content-docs-docs-apisix/current/how-to-build.md",sourceDirName:".",slug:"/how-to-build",permalink:"/zh/docs/apisix/next/how-to-build",editUrl:"https://github.com/apache/apisix/edit/master/docs/zh/latest/how-to-build.md",version:"current",frontMatter:{title:"\u5982\u4f55\u6784\u5efa Apache APISIX"},sidebar:"docs",previous:{title:"\u5feb\u901f\u5165\u95e8\u6307\u5357",permalink:"/zh/docs/apisix/next/getting-started"},next:{title:"batch-requests",permalink:"/zh/docs/apisix/next/plugins/batch-requests"}},o=[{value:"\u6b65\u9aa41\uff1a\u5b89\u88c5\u4f9d\u8d56",id:"\u6b65\u9aa41\uff1a\u5b89\u88c5\u4f9d\u8d56",children:[]},{value:"\u6b65\u9aa42\uff1a\u5b89\u88c5 Apache APISIX",id:"\u6b65\u9aa42\uff1a\u5b89\u88c5-apache-apisix",children:[{value:"\u901a\u8fc7 RPM \u5305\u5b89\u88c5\uff08CentOS 7\uff09",id:"\u901a\u8fc7-rpm-\u5305\u5b89\u88c5\uff08centos-7\uff09",children:[]},{value:"\u901a\u8fc7 Docker \u5b89\u88c5",id:"\u901a\u8fc7-docker-\u5b89\u88c5",children:[]},{value:"\u901a\u8fc7 Helm Chart \u5b89\u88c5",id:"\u901a\u8fc7-helm-chart-\u5b89\u88c5",children:[]},{value:"\u901a\u8fc7\u6e90\u7801\u5305\u5b89\u88c5",id:"\u901a\u8fc7\u6e90\u7801\u5305\u5b89\u88c5",children:[]}]},{value:"\u6b65\u9aa43\uff1a\u7ba1\u7406 Apache APISIX \u670d\u52a1",id:"\u6b65\u9aa43\uff1a\u7ba1\u7406-apache-apisix-\u670d\u52a1",children:[{value:"\u521d\u59cb\u5316\u4f9d\u8d56",id:"\u521d\u59cb\u5316\u4f9d\u8d56",children:[]},{value:"\u542f\u52a8 Apache APISIX",id:"\u542f\u52a8-apache-apisix",children:[]},{value:"\u505c\u6b62\u8fd0\u884c Apache APISIX",id:"\u505c\u6b62\u8fd0\u884c-apache-apisix",children:[]},{value:"\u67e5\u770b\u5176\u4ed6\u64cd\u4f5c",id:"\u67e5\u770b\u5176\u4ed6\u64cd\u4f5c",children:[]}]},{value:"\u6b65\u9aa44\uff1a\u8fd0\u884c\u6d4b\u8bd5\u6848\u4f8b",id:"\u6b65\u9aa44\uff1a\u8fd0\u884c\u6d4b\u8bd5\u6848\u4f8b",children:[{value:"\u95ee\u9898\u6392\u67e5",id:"\u95ee\u9898\u6392\u67e5",children:[]}]},{value:"\u6b65\u9aa45\uff1a\u4fee\u6539 Admin API key",id:"\u6b65\u9aa45\uff1a\u4fee\u6539-admin-api-key",children:[]},{value:"\u6b65\u9aa46\uff1a\u4e3a Apache APISIX \u6784\u5efa OpenResty",id:"\u6b65\u9aa46\uff1a\u4e3a-apache-apisix-\u6784\u5efa-openresty",children:[]},{value:"\u6b65\u9aa47\uff1a\u4e3a Apache APISIX \u6dfb\u52a0 systemd \u914d\u7f6e\u6587\u4ef6",id:"\u6b65\u9aa47\uff1a\u4e3a-apache-apisix-\u6dfb\u52a0-systemd-\u914d\u7f6e\u6587\u4ef6",children:[]}],c={toc:o};function s(e){var t=e.components,a=(0,p.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"\u6b65\u9aa41\uff1a\u5b89\u88c5\u4f9d\u8d56"},"\u6b65\u9aa41\uff1a\u5b89\u88c5\u4f9d\u8d56"),(0,i.kt)("p",null,"Apache APISIX \u7684\u8fd0\u884c\u73af\u5883\u9700\u8981\u4f9d\u8d56 NGINX \u548c etcd\uff0c\u6240\u4ee5\u5728\u5b89\u88c5 Apache APISIX \u524d\uff0c\u8bf7\u6839\u636e\u60a8\u4f7f\u7528\u7684\u64cd\u4f5c\u7cfb\u7edf\u5b89\u88c5\u5bf9\u5e94\u7684\u4f9d\u8d56\u3002\u6211\u4eec\u63d0\u4f9b\u4e86 ",(0,i.kt)("strong",{parentName:"p"},"CentOS7")," \u3001",(0,i.kt)("strong",{parentName:"p"},"Fedora 31 & 32")," \u3001",(0,i.kt)("strong",{parentName:"p"},"Ubuntu 16.04 & 18.04")," \u3001 ",(0,i.kt)("strong",{parentName:"p"},"Debian 9 & 10")," \u548c ",(0,i.kt)("strong",{parentName:"p"},"MacOS")," \u4e0a\u7684\u4f9d\u8d56\u5b89\u88c5\u64cd\u4f5c\u6b65\u9aa4\uff0c\u8be6\u60c5\u8bf7\u53c2\u8003",(0,i.kt)("a",{parentName:"p",href:"/zh/docs/apisix/next/install-dependencies"},"\u5b89\u88c5\u4f9d\u8d56"),"\u3002"),(0,i.kt)("p",null,"\u901a\u8fc7 Docker \u6216 Helm Chart \u5b89\u88c5 Apache APISIX \u65f6\uff0c\u5df2\u7ecf\u5305\u542b\u4e86\u6240\u9700\u7684 NGINX \u548c etcd\uff0c\u8bf7\u53c2\u7167\u5404\u81ea\u5bf9\u5e94\u7684\u6587\u6863\u3002"),(0,i.kt)("h2",{id:"\u6b65\u9aa42\uff1a\u5b89\u88c5-apache-apisix"},"\u6b65\u9aa42\uff1a\u5b89\u88c5 Apache APISIX"),(0,i.kt)("p",null,"\u4f60\u53ef\u4ee5\u901a\u8fc7 RPM \u5305\u3001Docker\u3001Helm Chart\u3001\u6e90\u7801\u5305\u7b49\u591a\u79cd\u65b9\u5f0f\u6765\u5b89\u88c5 Apache APISIX\u3002\u8bf7\u5728\u4ee5\u4e0b\u9009\u9879\u4e2d\u9009\u62e9\u5176\u4e2d\u4e00\u79cd\u6267\u884c\u3002"),(0,i.kt)("h3",{id:"\u901a\u8fc7-rpm-\u5305\u5b89\u88c5\uff08centos-7\uff09"},"\u901a\u8fc7 RPM \u5305\u5b89\u88c5\uff08CentOS 7\uff09"),(0,i.kt)("p",null,"\u8fd9\u79cd\u5b89\u88c5\u65b9\u5f0f\u9002\u7528\u4e8e CentOS 7 \u64cd\u4f5c\u7cfb\u7edf\uff0c\u8bf7\u8fd0\u884c\u4ee5\u4e0b\u547d\u4ee4\u5b89\u88c5 Apache APISIX\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"sudo yum install -y https://github.com/apache/apisix/releases/download/2.8/apisix-2.8-0.x86_64.rpm\n")),(0,i.kt)("h3",{id:"\u901a\u8fc7-docker-\u5b89\u88c5"},"\u901a\u8fc7 Docker \u5b89\u88c5"),(0,i.kt)("p",null,"\u8be6\u60c5\u8bf7\u53c2\u8003\uff1a",(0,i.kt)("a",{parentName:"p",href:"https://hub.docker.com/r/apache/apisix"},"\u4f7f\u7528 Docker \u5b89\u88c5 Apache APISIX"),"\u3002"),(0,i.kt)("h3",{id:"\u901a\u8fc7-helm-chart-\u5b89\u88c5"},"\u901a\u8fc7 Helm Chart \u5b89\u88c5"),(0,i.kt)("p",null,"\u8be6\u60c5\u8bf7\u53c2\u8003\uff1a",(0,i.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix-helm-chart"},"\u4f7f\u7528 Helm Chart \u5b89\u88c5 Apache APISIX"),"\u3002"),(0,i.kt)("h3",{id:"\u901a\u8fc7\u6e90\u7801\u5305\u5b89\u88c5"},"\u901a\u8fc7\u6e90\u7801\u5305\u5b89\u88c5"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"\u521b\u5efa\u4e00\u4e2a\u540d\u4e3a ",(0,i.kt)("inlineCode",{parentName:"p"},"apisix-2.8")," \u7684\u76ee\u5f55\u3002"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"mkdir apisix-2.8\n"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"\u4e0b\u8f7d Apache APISIX Release \u6e90\u7801\u5305\uff1a"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"wget https://downloads.apache.org/apisix/2.8/apache-apisix-2.8-src.tgz\n")),(0,i.kt)("p",{parentName:"li"},"\u60a8\u4e5f\u53ef\u4ee5\u901a\u8fc7 Apache APISIX \u5b98\u7f51\u4e0b\u8f7d Apache APISIX Release \u6e90\u7801\u5305\u3002 Apache APISIX \u5b98\u7f51\u4e5f\u63d0\u4f9b\u4e86 Apache APISIX\u3001APISIX Dashboard \u548c APISIX Ingress Controller \u7684\u6e90\u7801\u5305\uff0c\u8be6\u60c5\u8bf7\u53c2\u8003",(0,i.kt)("a",{parentName:"p",href:"https://apisix.apache.org/zh/downloads"},"Apache APISIX \u5b98\u7f51-\u4e0b\u8f7d\u9875"),"\u3002")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"\u89e3\u538b Apache APISIX Release \u6e90\u7801\u5305\uff1a"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"tar zxvf apache-apisix-2.8-src.tgz -C apisix-2.8\n"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"\u5b89\u88c5\u8fd0\u884c\u65f6\u4f9d\u8d56\u7684 Lua \u5e93\uff1a"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"# \u5207\u6362\u5230 apisix-2.8 \u76ee\u5f55\ncd apisix-2.8\n# \u521b\u5efa\u4f9d\u8d56\nmake deps\n")))),(0,i.kt)("h2",{id:"\u6b65\u9aa43\uff1a\u7ba1\u7406-apache-apisix-\u670d\u52a1"},"\u6b65\u9aa43\uff1a\u7ba1\u7406 Apache APISIX \u670d\u52a1"),(0,i.kt)("p",null,"\u6211\u4eec\u53ef\u4ee5\u5728 Apache APISIX \u7684\u76ee\u5f55\u4e0b\u4f7f\u7528\u547d\u4ee4\u521d\u59cb\u5316\u4f9d\u8d56\u3001\u542f\u52a8\u670d\u52a1\u548c\u505c\u6b62\u670d\u52a1\uff0c\u4e5f\u53ef\u4ee5\u901a\u8fc7 ",(0,i.kt)("inlineCode",{parentName:"p"},"make help")," \u547d\u4ee4\u67e5\u770b\u6240\u6709\u547d\u4ee4\u548c\u5bf9\u5e94\u7684\u529f\u80fd\u3002"),(0,i.kt)("h3",{id:"\u521d\u59cb\u5316\u4f9d\u8d56"},"\u521d\u59cb\u5316\u4f9d\u8d56"),(0,i.kt)("p",null,"\u8fd0\u884c\u4ee5\u4e0b\u547d\u4ee4\u521d\u59cb\u5316 NGINX \u914d\u7f6e\u6587\u4ef6\u548c etcd\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"# initialize NGINX config file and etcd\nmake init\n")),(0,i.kt)("h3",{id:"\u542f\u52a8-apache-apisix"},"\u542f\u52a8 Apache APISIX"),(0,i.kt)("p",null,"\u8fd0\u884c\u4ee5\u4e0b\u547d\u4ee4\u542f\u52a8 Apache APISIX\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"# start Apache APISIX server\nmake run\n")),(0,i.kt)("h3",{id:"\u505c\u6b62\u8fd0\u884c-apache-apisix"},"\u505c\u6b62\u8fd0\u884c Apache APISIX"),(0,i.kt)("p",null,"\u4f18\u96c5\u505c\u673a ",(0,i.kt)("inlineCode",{parentName:"p"},"make quit")," \u548c\u5f3a\u5236\u505c\u673a ",(0,i.kt)("inlineCode",{parentName:"p"},"make stop"),"\u90fd\u53ef\u4ee5\u505c\u6b62\u8fd0\u884c Apache APISIX\u3002\u5efa\u8bae\u60a8\u4f18\u5148\u9009\u62e9\u4f18\u96c5\u505c\u673a\u7684\u65b9\u5f0f\u505c\u6b62 Apache APISIX\uff0c\u56e0\u4e3a\u8fd9\u79cd\u505c\u6b62\u65b9\u5f0f\u80fd\u591f\u4fdd\u8bc1 Apache APISIX \u5b8c\u6210\u4e86\u5df2\u7ecf\u63a5\u53d7\u5230\u7684\u8bf7\u6c42\u4e4b\u540e\u518d\u505c\u6b62\uff1b\u800c\u5f3a\u5236\u505c\u673a\u5219\u662f\u7acb\u5373\u505c\u6b62 Apache APISIX\uff0c\u5728\u8fd9\u79cd\u60c5\u51b5\u4e0b\uff0cApache APISIX \u63a5\u6536\u5230\u4f46\u672a\u5b8c\u6210\u7684\u8bf7\u6c42\u4f1a\u968f\u7740\u5f3a\u5236\u505c\u673a\u4e00\u5e76\u505c\u6b62\u3002"),(0,i.kt)("p",null,"\u6267\u884c\u4f18\u96c5\u505c\u673a\u7684\u547d\u4ee4\u5982\u4e0b\u6240\u793a\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"# stop Apache APISIX server gracefully\nmake quit\n")),(0,i.kt)("p",null,"\u6267\u884c\u5f3a\u5236\u505c\u673a\u7684\u547d\u4ee4\u5982\u4e0b\u6240\u793a\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"# stop Apache APISIX server immediately\nmake stop\n")),(0,i.kt)("h3",{id:"\u67e5\u770b\u5176\u4ed6\u64cd\u4f5c"},"\u67e5\u770b\u5176\u4ed6\u64cd\u4f5c"),(0,i.kt)("p",null,"\u8fd0\u884c ",(0,i.kt)("inlineCode",{parentName:"p"},"make help")," \u547d\u4ee4\uff0c\u67e5\u770b\u8fd4\u56de\u7ed3\u679c\uff0c\u83b7\u53d6\u5176\u4ed6\u64cd\u4f5c\u7684\u547d\u4ee4\u548c\u63cf\u8ff0\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"# more actions find by `help`\nmake help\n")),(0,i.kt)("h2",{id:"\u6b65\u9aa44\uff1a\u8fd0\u884c\u6d4b\u8bd5\u6848\u4f8b"},"\u6b65\u9aa44\uff1a\u8fd0\u884c\u6d4b\u8bd5\u6848\u4f8b"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"\u5b89\u88c5 ",(0,i.kt)("inlineCode",{parentName:"p"},"perl")," \u7684\u5305\u7ba1\u7406\u5668 ",(0,i.kt)("inlineCode",{parentName:"p"},"cpanminus"),"\u3002")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"\u7136\u540e\u901a\u8fc7 ",(0,i.kt)("inlineCode",{parentName:"p"},"cpanm")," \u6765\u5b89\u88c5 test-nginx \u7684\u4f9d\u8d56\uff1a"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"sudo cpanm --notest Test::Nginx IPC::Run > build.log 2>&1 || (cat build.log && exit 1)\n"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"\u8fd0\u884c ",(0,i.kt)("inlineCode",{parentName:"p"},"git clone")," \u547d\u4ee4\uff0c\u5c06\u6700\u65b0\u7684\u6e90\u7801\u514b\u9686\u5230\u672c\u5730\uff0c\u8bf7\u4f7f\u7528\u6211\u4eec fork \u51fa\u6765\u7684\u7248\u672c\uff1a"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"git clone https://github.com/iresty/test-nginx.git\n"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"\u901a\u8fc7 ",(0,i.kt)("inlineCode",{parentName:"p"},"perl")," \u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"prove")," \u547d\u4ee4\u6765\u52a0\u8f7d test-nginx \u7684\u5e93\uff0c\u5e76\u8fd0\u884c ",(0,i.kt)("inlineCode",{parentName:"p"},"/t")," \u76ee\u5f55\u4e0b\u7684\u6d4b\u8bd5\u6848\u4f8b\u96c6\uff1a"))),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u8ffd\u52a0\u5f53\u524d\u76ee\u5f55\u5230perl\u6a21\u5757\u76ee\u5f55\uff1a ",(0,i.kt)("inlineCode",{parentName:"p"},"export PERL5LIB=.:$PERL5LIB"),"\uff0c\u7136\u540e\u8fd0\u884c ",(0,i.kt)("inlineCode",{parentName:"p"},"make test")," \u547d\u4ee4\u3002")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u6216\u6307\u5b9a NGINX \u4e8c\u8fdb\u5236\u8def\u5f84\uff1a",(0,i.kt)("inlineCode",{parentName:"p"},"TEST_NGINX_BINARY=/usr/local/bin/openresty prove -Itest-nginx/lib -r t"),"\u3002"),(0,i.kt)("div",{parentName:"li",className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"\u8bf4\u660e")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"\u90e8\u5206\u6d4b\u8bd5\u9700\u8981\u4f9d\u8d56\u5916\u90e8\u670d\u52a1\u548c\u4fee\u6539\u7cfb\u7edf\u914d\u7f6e\u3002\u5982\u679c\u60f3\u8981\u5b8c\u6574\u5730\u6784\u5efa\u6d4b\u8bd5\u73af\u5883\uff0c\u53ef\u4ee5\u53c2\u8003 ",(0,i.kt)("inlineCode",{parentName:"p"},"ci/linux_openresty_common_runner.sh"),"\u3002"))))),(0,i.kt)("h3",{id:"\u95ee\u9898\u6392\u67e5"},"\u95ee\u9898\u6392\u67e5"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\u914d\u7f6e NGINX \u8def\u5f84")),(0,i.kt)("p",null,"\u51fa\u73b0",(0,i.kt)("inlineCode",{parentName:"p"},'Error unknown directive "lua_package_path" in /API_ASPIX/apisix/t/servroot/conf/nginx.conf')," \u62a5\u9519\u7684\u89e3\u51b3\u65b9\u6cd5\u5982\u4e0b\uff1a"),(0,i.kt)("p",null,"\u786e\u4fdd\u5c06 Openresty \u8bbe\u7f6e\u4e3a\u9ed8\u8ba4\u7684 NGINX\uff0c\u5e76\u6309\u5982\u4e0b\u6240\u793a\u5bfc\u51fa\u8def\u5f84\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"export PATH=/usr/local/openresty/nginx/sbin:$PATH"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Linux \u9ed8\u8ba4\u5b89\u88c5\u8def\u5f84\uff1a",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"export PATH=/usr/local/openresty/nginx/sbin:$PATH")))),(0,i.kt)("li",{parentName:"ul"},"MacOS \u901a\u8fc7 homebrew \u9ed8\u8ba4\u5b89\u88c5\u8def\u5f84\uff1a",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"export PATH=/usr/local/opt/openresty/nginx/sbin:$PATH"))))))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\u8fd0\u884c\u5355\u4e2a\u6d4b\u8bd5\u7528\u4f8b")),(0,i.kt)("p",null,"\u4f7f\u7528\u4ee5\u4e0b\u547d\u4ee4\u8fd0\u884c\u6307\u5b9a\u7684\u6d4b\u8bd5\u7528\u4f8b\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"prove -Itest-nginx/lib -r t/plugin/openid-connect.t\n")),(0,i.kt)("h2",{id:"\u6b65\u9aa45\uff1a\u4fee\u6539-admin-api-key"},"\u6b65\u9aa45\uff1a\u4fee\u6539 Admin API key"),(0,i.kt)("p",null,"\u60a8\u9700\u8981\u4fee\u6539 Admin API \u7684 key\uff0c\u4ee5\u4fdd\u62a4 Apache APISIX\u3002"),(0,i.kt)("p",null,"\u8bf7\u4fee\u6539 ",(0,i.kt)("inlineCode",{parentName:"p"},"conf/config.yaml")," \u4e2d\u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"apisix.admin_key")," \u5e76\u91cd\u542f\u670d\u52a1\uff0c\u5982\u4e0b\u6240\u793a\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'apisix:\n  # ... ...\n  admin_key\n    -\n      name: "admin"\n      key: abcdefghabcdefgh # \u5c06\u539f\u6709\u7684 key \u4fee\u6539\u4e3aabcdefghabcdefgh\n      role: admin\n')),(0,i.kt)("p",null,"\u5f53\u6211\u4eec\u9700\u8981\u8bbf\u95ee Admin API \u65f6\uff0c\u5c31\u53ef\u4ee5\u4f7f\u7528\u4e0a\u9762\u8bb0\u5f55\u7684 key \u4e86\uff0c\u5982\u4e0b\u6240\u793a\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"curl http://127.0.0.1:9080/apisix/admin/routes?api_key=abcdefghabcdefgh -i\n")),(0,i.kt)("p",null,"\u8fd4\u56de\u7ed3\u679c\u4e2d\u7684\u72b6\u6001\u7801 200 \u8bf4\u660e\u8bbf\u95ee\u6210\u529f\uff0c\u5982\u4e0b\u6240\u793a\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'HTTP/1.1 200 OK\nDate: Fri, 28 Feb 2020 07:48:04 GMT\nContent-Type: text/plain\n... ...\n{"node":{...},"action":"get"}\n')),(0,i.kt)("p",null,"\u5728\u8fd9\u4e2a\u65f6\u5019\uff0c\u5982\u679c\u60a8\u8f93\u5165\u7684 key \u4e0e ",(0,i.kt)("inlineCode",{parentName:"p"},"conf/config.yaml")," \u4e2d ",(0,i.kt)("inlineCode",{parentName:"p"},"apisix.admin_key")," \u7684\u503c\u4e0d\u5339\u914d\uff0c\u4f8b\u5982\uff0c\u6211\u4eec\u5df2\u77e5\u6b63\u786e\u7684 key \u662f ",(0,i.kt)("inlineCode",{parentName:"p"},"abcdefghabcdefgh"),"\uff0c\u4f46\u662f\u6211\u4eec\u9009\u62e9\u8f93\u5165\u4e00\u4e2a\u9519\u8bef\u7684 key\uff0c\u4f8b\u5982 ",(0,i.kt)("inlineCode",{parentName:"p"},"wrong-key"),"\uff0c\u5982\u4e0b\u6240\u793a\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"curl http://127.0.0.1:9080/apisix/admin/routes?api_key=wrong-key -i\n")),(0,i.kt)("p",null,"\u8fd4\u56de\u7ed3\u679c\u4e2d\u7684\u72b6\u6001\u7801 ",(0,i.kt)("inlineCode",{parentName:"p"},"401")," \u8bf4\u660e\u8bbf\u95ee\u5931\u8d25\uff0c\u539f\u56e0\u662f\u8f93\u5165\u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"key")," \u6709\u8bef\uff0c\u672a\u901a\u8fc7\u8ba4\u8bc1\uff0c\u89e6\u53d1 ",(0,i.kt)("inlineCode",{parentName:"p"},"Unauthorized")," \u9519\u8bef\uff0c\u5982\u4e0b\u6240\u793a\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'HTTP/1.1 401 Unauthorized\nDate: Fri, 28 Feb 2020 08:17:58 GMT\nContent-Type: text/html\n... ...\n{"node":{...},"action":"get"}\n')),(0,i.kt)("h2",{id:"\u6b65\u9aa46\uff1a\u4e3a-apache-apisix-\u6784\u5efa-openresty"},"\u6b65\u9aa46\uff1a\u4e3a Apache APISIX \u6784\u5efa OpenResty"),(0,i.kt)("p",null,"\u6709\u4e9b\u529f\u80fd\u9700\u8981\u5f15\u5165\u989d\u5916\u7684 NGINX \u6a21\u5757\u5230 OpenResty \u5f53\u4e2d\u3002\u5982\u679c\u60a8\u9700\u8981\u8fd9\u4e9b\u529f\u80fd\uff0c\u4f60\u53ef\u4ee5\u7528",(0,i.kt)("a",{parentName:"p",href:"https://raw.githubusercontent.com/api7/apisix-build-tools/master/build-apisix-openresty.sh"},"\u8fd9\u4e2a\u811a\u672c"),"\u6784\u5efa OpenResty\u3002"),(0,i.kt)("h2",{id:"\u6b65\u9aa47\uff1a\u4e3a-apache-apisix-\u6dfb\u52a0-systemd-\u914d\u7f6e\u6587\u4ef6"},"\u6b65\u9aa47\uff1a\u4e3a Apache APISIX \u6dfb\u52a0 systemd \u914d\u7f6e\u6587\u4ef6"),(0,i.kt)("p",null,"\u5982\u679c\u60a8\u4f7f\u7528\u7684\u64cd\u4f5c\u7cfb\u7edf\u662f CentOS 7\uff0c\u4e14\u5728\u6b65\u9aa4 2 \u4e2d\u901a\u8fc7 RPM \u5305\u5b89\u88c5 Apache APISIX\uff0c\u914d\u7f6e\u6587\u4ef6\u5df2\u7ecf\u81ea\u52a8\u5b89\u88c5\u5230\u4f4d\uff0c\u4f60\u53ef\u4ee5\u76f4\u63a5\u8fd0\u884c\u4ee5\u4e0b\u547d\u4ee4\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"systemctl start apisix\nsystemctl stop apisix\n")),(0,i.kt)("p",null,"\u5982\u679c\u901a\u8fc7\u5176\u4ed6\u65b9\u6cd5\u5b89\u88c5\uff0c\u53ef\u4ee5\u53c2\u8003",(0,i.kt)("a",{parentName:"p",href:"https://github.com/api7/apisix-build-tools/blob/master/usr/lib/systemd/system/apisix.service"},"\u914d\u7f6e\u6587\u4ef6\u6a21\u677f"),"\u8fdb\u884c\u4fee\u6539\uff0c\u5e76\u5c06\u5176\u653e\u7f6e\u5728 ",(0,i.kt)("inlineCode",{parentName:"p"},"/usr/lib/systemd/system/apisix.service")," \u8def\u5f84\u4e0b\u3002"))}s.isMDXComponent=!0}}]);