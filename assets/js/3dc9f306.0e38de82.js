(self.webpackChunk=self.webpackChunk||[]).push([[38393],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return s},kt:function(){return f}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),l=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=l(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=l(n),f=o,m=d["".concat(u,".").concat(f)]||d[f]||p[f]||a;return n?r.createElement(m,i(i({ref:t},s),{},{components:n})):r.createElement(m,i({ref:t},s))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},59259:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return i},metadata:function(){return c},toc:function(){return u},default:function(){return s}});var r=n(22122),o=n(19756),a=(n(67294),n(3905)),i={id:"2fa",title:"2FA"},c={unversionedId:"2fa",id:"2fa",isDocsHomePage:!1,title:"2FA",description:"Two-factor authentication(2FA)",source:"@site/docs/general/2fa.md",sourceDirName:".",slug:"/2fa",permalink:"/docs/general/2fa",editUrl:"https://github.com/apache/apisix-website/edit/master/website/docs/general/2fa.md",version:"current",lastUpdatedBy:"bzp2010",lastUpdatedAt:1629335104,formattedLastUpdatedAt:"8/19/2021",frontMatter:{id:"2fa",title:"2FA"},sidebar:"docs",previous:{title:"Committer Guide",permalink:"/docs/general/committer-guide"},next:{title:"Release Guide",permalink:"/docs/general/release-guide"}},u=[{value:"Two-factor authentication(2FA)",id:"two-factor-authentication2fa",children:[]},{value:"Enable 2FA on GitHub",id:"enable-2fa-on-github",children:[]},{value:"How to Submit Codes",id:"how-to-submit-codes",children:[]}],l={toc:u};function s(e){var t=e.components,n=(0,o.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"two-factor-authentication2fa"},"Two-factor authentication(2FA)"),(0,a.kt)("p",null,"Two factor authentication (2FA) refers to the authentication method that combines both passport and an object (credit card, SMS phone, token or biomarkers as fingerprint) to identify a user. To ensure the security of the committer\u2019s account, we need you to enable 2FA to sign in and contribute codes on GitHub. More details, please refer to 2FA."),(0,a.kt)("p",null,"Note:If you do not enable 2FA, you will be removed from the project and unable to access our repositories and the fork from our private repository."),(0,a.kt)("h2",{id:"enable-2fa-on-github"},"Enable 2FA on GitHub"),(0,a.kt)("p",null,"For detailed operations, please refer to Enable Two Factor Authentication with TOTP."),(0,a.kt)("p",null,"After enabling 2FA, you need to sign in GitHub with the way of username/password + mobile phone authentication code."),(0,a.kt)("p",null,"Tips: If you cannot download the APP through the page link, you can search and download the Google Authenticator in APP Store."),(0,a.kt)("h2",{id:"how-to-submit-codes"},"How to Submit Codes"),(0,a.kt)("p",null,"After enabling 2FA, you need to generate a private access Token to perform operations such as git submit and so on. At this time, you will use username + private access Token in replace of username + password to submit codes."),(0,a.kt)("p",null,"For detailed operations, please refer to Create a Private Token."))}s.isMDXComponent=!0}}]);