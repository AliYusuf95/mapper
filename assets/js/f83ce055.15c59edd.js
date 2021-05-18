(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{112:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return p})),n.d(t,"default",(function(){return s}));var r=n(3),o=n(7),a=(n(0),n(116)),i={id:"map-from",title:"MapFrom",sidebar_label:"MapFrom"},c={unversionedId:"mapping-configuration/map-from",id:"mapping-configuration/map-from",isDocsHomePage:!1,title:"MapFrom",description:"We've already seen mapFrom() throughout some early sections of the documentations.",source:"@site/docs/mapping-configuration/map-from.md",slug:"/mapping-configuration/map-from",permalink:"/docs/mapping-configuration/map-from",editUrl:"https://github.com/nartc/mapper/tree/main/docs-site/docs/mapping-configuration/map-from.md",version:"current",sidebar_label:"MapFrom",sidebar:"docs",previous:{title:"Introduce to Custom Configuration",permalink:"/docs/mapping-configuration/introduce-to-custom-configuration"},next:{title:"Condition",permalink:"/docs/mapping-configuration/condition"}},p=[{value:"Custom value from <strong>Source</strong>",id:"custom-value-from-source",children:[]},{value:"Value Resolver",id:"value-resolver",children:[]}],m={toc:p};function s(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},m,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"We've already seen ",Object(a.b)("inlineCode",{parentName:"p"},"mapFrom()")," throughout some early sections of the documentations."),Object(a.b)("h2",{id:"custom-value-from-source"},"Custom value from ",Object(a.b)("strong",{parentName:"h2"},"Source")),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"mapFrom()")," accepts a ",Object(a.b)("strong",{parentName:"p"},"Selector")," that we will select a member from ",Object(a.b)("strong",{parentName:"p"},"Source")," to map to the member we're configuring on ",Object(a.b)("strong",{parentName:"p"},"Destination")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-ts"},"import { mapFrom } from '@automapper/core';\n\nmapper\n  .createMap(User, UserDto)\n  .forMember(\n    (destination) => destination.fullName,\n    mapFrom((source) => source.firstName + ' ' + source.lastName)\n  )\n  .forMember(\n    (destination) => destination.isAdult,\n    mapFrom((source) => source.age >= 18)\n  );\n")),Object(a.b)("h2",{id:"value-resolver"},"Value Resolver"),Object(a.b)("p",null,"A less-common use-case of ",Object(a.b)("inlineCode",{parentName:"p"},"mapFrom()")," is to utilize Value Resolver which is an object with the shape of ",Object(a.b)("inlineCode",{parentName:"p"},"Resolver")," interface."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-ts"},"export interface Resolver<\n  TSource extends Dictionary<TSource> = unknown,\n  TDestination extends Dictionary<TDestination> = unknown,\n  TResolvedType = SelectorReturn<TDestination>\n> {\n  resolve(source: TSource, destination?: TDestination): TResolvedType;\n}\n")),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"resolve()")," method accepts the whole ",Object(a.b)("strong",{parentName:"p"},"Source")," object being mapped, an optional ",Object(a.b)("strong",{parentName:"p"},"Destination")," object being mapped, and returns a value that ultimately will be mapped to the member on ",Object(a.b)("strong",{parentName:"p"},"Destination")," that we are configuring."),Object(a.b)("p",null,"Value Resolver is to help with complex logic where you need to determine what to return for the member on ",Object(a.b)("strong",{parentName:"p"},"Destination")," without having to pollute your ",Object(a.b)("inlineCode",{parentName:"p"},"Profile"),". You can have ",Object(a.b)("inlineCode",{parentName:"p"},"Resolver")," in separate files."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-ts"},"import { mapFrom } from '@automapper/core';\nimport type { Resolver } from '@automapper/types';\n\nexport const taxResolver: Resolver<Item, ItemDto, number> = {\n  resolve(source) {\n    return source.type === 'A' ? source.price * 0.5 : source.price * 0.9;\n  },\n};\n\nmapper\n  .createMap(Item, ItemDto)\n  .forMember((destination) => destination.tax, mapFrom(taxResolver));\n")),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"mapFrom()")," will set the ",Object(a.b)("inlineCode",{parentName:"p"},"TransformationType")," to ",Object(a.b)("inlineCode",{parentName:"p"},"TransformationType.MapFrom")))}s.isMDXComponent=!0},116:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return f}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var m=o.a.createContext({}),s=function(e){var t=o.a.useContext(m),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},l=function(e){var t=s(e.components);return o.a.createElement(m.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),l=s(n),b=r,f=l["".concat(i,".").concat(b)]||l[b]||u[b]||a;return n?o.a.createElement(f,c(c({ref:t},m),{},{components:n})):o.a.createElement(f,c({ref:t},m))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=b;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var m=2;m<a;m++)i[m]=n[m];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);