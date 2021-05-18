(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{116:function(e,n,t){"use strict";t.d(n,"a",(function(){return m})),t.d(n,"b",(function(){return b}));var r=t(0),a=t.n(r);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var u=a.a.createContext({}),l=function(e){var n=a.a.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},m=function(e){var n=l(e.components);return a.a.createElement(u.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},f=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),m=l(t),f=r,b=m["".concat(i,".").concat(f)]||m[f]||s[f]||o;return t?a.a.createElement(b,c(c({ref:n},u),{},{components:t})):a.a.createElement(b,c({ref:n},u))}));function b(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=f;var c={};for(var p in n)hasOwnProperty.call(n,p)&&(c[p]=n[p]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var u=2;u<o;u++)i[u]=t[u];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,t)}f.displayName="MDXCreateElement"},81:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return c})),t.d(n,"toc",(function(){return p})),t.d(n,"default",(function(){return l}));var r=t(3),a=t(7),o=(t(0),t(116)),i={id:"from-value",title:"FromValue",sidebar_label:"FromValue"},c={unversionedId:"mapping-configuration/from-value",id:"mapping-configuration/from-value",isDocsHomePage:!1,title:"FromValue",description:"fromValue() accepts a raw value to map to the member on Destination. If you pass in an object, this object will be mapped as-is without any consideration for a nested Mapping.",source:"@site/docs/mapping-configuration/from-value.md",slug:"/mapping-configuration/from-value",permalink:"/docs/mapping-configuration/from-value",editUrl:"https://github.com/nartc/mapper/tree/main/docs-site/docs/mapping-configuration/from-value.md",version:"current",sidebar_label:"FromValue",sidebar:"docs",previous:{title:"Condition",permalink:"/docs/mapping-configuration/condition"},next:{title:"MapWith",permalink:"/docs/mapping-configuration/map-with"}},p=[],u={toc:p};function l(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},u,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"fromValue()")," accepts a raw value to map to the member on ",Object(o.b)("strong",{parentName:"p"},"Destination"),". If you pass in an object, this object will be mapped as-is without any consideration for a nested ",Object(o.b)("inlineCode",{parentName:"p"},"Mapping"),"."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-ts"},"import { fromValue } from '@automapper/core';\n\nmapper\n  .createMap(User, UserDto)\n  .forMember(\n    (destination) => destination.fullName,\n    fromValue('some raw value')\n  );\n")),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"fromValue()")," will set the ",Object(o.b)("inlineCode",{parentName:"p"},"TransformationType")," to ",Object(o.b)("inlineCode",{parentName:"p"},"TransformationType.FromValue")))}l.isMDXComponent=!0}}]);