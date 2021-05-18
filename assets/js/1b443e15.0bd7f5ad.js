(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{116:function(e,t,n){"use strict";n.d(t,"a",(function(){return c})),n.d(t,"b",(function(){return b}));var i=n(0),a=n.n(i);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),u=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=u(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,o=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=u(n),m=i,b=c["".concat(o,".").concat(m)]||c[m]||d[m]||r;return n?a.a.createElement(b,l(l({ref:t},p),{},{components:n})):a.a.createElement(b,l({ref:t},p))}));function b(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var p=2;p<r;p++)o[p]=n[p];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},69:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return u}));var i=n(3),a=n(7),r=(n(0),n(116)),o={id:"introduce-to-sequelize",title:"Introduction",sidebar_label:"Introduction"},l={unversionedId:"plugins-system/introduce-to-sequelize",id:"plugins-system/introduce-to-sequelize",isDocsHomePage:!1,title:"Introduction",description:"@automapper/sequelize is one of the official plugins of @automapper/* monorepo. This plugin works with Sequelize by extending @automapper/classes and modifying instantiation process to accommodate Sequelize#Model type.",source:"@site/docs/plugins-system/introduce-to-sequelize.md",slug:"/plugins-system/introduce-to-sequelize",permalink:"/docs/plugins-system/introduce-to-sequelize",editUrl:"https://github.com/nartc/mapper/tree/main/docs-site/docs/plugins-system/introduce-to-sequelize.md",version:"current",sidebar_label:"Introduction",sidebar:"docs",previous:{title:"Metadata",permalink:"/docs/plugins-system/pojos-metadata"},next:{title:"Create plugin",permalink:"/docs/plugins-system/create-plugin"}},s=[{value:"Installation",id:"installation",children:[]},{value:"Usage",id:"usage",children:[]}],p={toc:s};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(r.b)("wrapper",Object(i.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"@automapper/sequelize")," is one of the official plugins of ",Object(r.b)("inlineCode",{parentName:"p"},"@automapper/*")," monorepo. This plugin works with ",Object(r.b)("a",{parentName:"p",href:"https://github.com/sequelize/sequelize"},Object(r.b)("inlineCode",{parentName:"a"},"Sequelize"))," by extending ",Object(r.b)("inlineCode",{parentName:"p"},"@automapper/classes")," and modifying instantiation process to accommodate ",Object(r.b)("inlineCode",{parentName:"p"},"Sequelize#Model")," type."),Object(r.b)("h2",{id:"installation"},"Installation"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash"},"npm i @automapper/sequelize\n# or with yarn\nyarn add @automapper/sequelize\n")),Object(r.b)("h2",{id:"usage"},"Usage"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"@automapper/sequelize")," provides ",Object(r.b)("inlineCode",{parentName:"li"},"sequelize")," as a ",Object(r.b)("inlineCode",{parentName:"li"},"(options: SequelizeInitializerOptions) => MapPluginInitializer"),". Pass ",Object(r.b)("inlineCode",{parentName:"li"},"sequelize()")," to ",Object(r.b)("inlineCode",{parentName:"li"},"createMapper")," to create\na ",Object(r.b)("inlineCode",{parentName:"li"},"Mapper")," that uses ",Object(r.b)("inlineCode",{parentName:"li"},"sequelize")," plugin.")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-ts"},"export interface SequelizeInitializerOptions {\n  valueGetter?: <\n    TGetterResult extends Record<string, unknown> = any,\n    TModel extends Model<TGetterResult> = Model<TGetterResult>\n  >(\n    model: TModel\n  ) => TGetterResult;\n  init?: <\n    TDestination extends Dictionary<TDestination> = any,\n    TModel extends Model<TDestination> = Model<TDestination>\n  >(\n    destination: TModel,\n    destinationObj: TDestination\n  ) => TDestination;\n}\n")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"valueGetter")," is an optional getter that, if passed in, will be used to extract the value of the model after instantiation. By default, it will use ",Object(r.b)("inlineCode",{parentName:"li"},"sequelize#Model.get()")," if it's available."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"init")," is an optional init function that, if passed in, will be used to instantiate a ",Object(r.b)("inlineCode",{parentName:"li"},"Sequelize#Model")," after map. By default, it will use ",Object(r.b)("inlineCode",{parentName:"li"},"new Model(mapResult)"))),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-ts"},"import { sequelize } from '@automapper/sequelize';\nimport { Model } from 'sequelize-typescript';\n\nconst mapper = createMapper({\n  ...,\n  pluginInitializer: sequelize()\n  /**\n   * or\n   * sequelize({\n   *   valueGetter: model => model.get(getterOptions),\n   *   init: (model, mapResult) => model.init(mapResult, initOptions)\n   * })\n   */\n})\n\nclass User extends Model {}\n\nmapper.createMap(UserVm, User);\nmapper.map(userVm, User, UserVm);\n")))}u.isMDXComponent=!0}}]);