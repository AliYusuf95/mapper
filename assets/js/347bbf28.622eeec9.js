(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{116:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return m}));var a=t(0),i=t.n(a);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function p(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=i.a.createContext({}),l=function(e){var n=i.a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):p(p({},n),e)),t},u=function(e){var n=l(e.components);return i.a.createElement(s.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return i.a.createElement(i.a.Fragment,{},n)}},b=i.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,o=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=l(t),b=a,m=u["".concat(o,".").concat(b)]||u[b]||d[b]||r;return t?i.a.createElement(m,p(p({ref:n},s),{},{components:t})):i.a.createElement(m,p({ref:n},s))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,o=new Array(r);o[0]=b;var p={};for(var c in n)hasOwnProperty.call(n,c)&&(p[c]=n[c]);p.originalType=e,p.mdxType="string"==typeof e?e:a,o[1]=p;for(var s=2;s<r;s++)o[s]=t[s];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"},78:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"metadata",(function(){return p})),t.d(n,"toc",(function(){return c})),t.d(n,"default",(function(){return l}));var a=t(3),i=t(7),r=(t(0),t(116)),o={id:"create-mapper",title:"createMapper",sidebar_label:"createMapper"},p={unversionedId:"api/create-mapper",id:"api/create-mapper",isDocsHomePage:!1,title:"createMapper",description:"createMapper() is used to create a Mapper object with a CreateMapperOptions.",source:"@site/docs/api/create-mapper.md",slug:"/api/create-mapper",permalink:"/docs/api/create-mapper",editUrl:"https://github.com/nartc/mapper/tree/main/docs-site/docs/api/create-mapper.md",version:"current",sidebar_label:"createMapper",sidebar:"api"},c=[{value:"<code>Mapper</code>",id:"mapper",children:[]},{value:"<code>CreateMapperOptions</code>",id:"createmapperoptions",children:[{value:"Required fields",id:"required-fields",children:[]},{value:"Optional fields",id:"optional-fields",children:[]}]},{value:"<code>MapPluginInitializer</code>",id:"mapplugininitializer",children:[]},{value:"<code>MapPlugin</code>",id:"mapplugin",children:[]}],s={toc:c};function l(e){var n=e.components,t=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},s,t,{components:n,mdxType:"MDXLayout"}),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"createMapper()")," is used to create a ",Object(r.b)("inlineCode",{parentName:"p"},"Mapper")," object with a ",Object(r.b)("inlineCode",{parentName:"p"},"CreateMapperOptions"),"."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-ts"},"createMapper(options: CreateMapperOptions): Mapper;\n")),Object(r.b)("h2",{id:"mapper"},Object(r.b)("inlineCode",{parentName:"h2"},"Mapper")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-ts"},"export interface Mapper<TKey = unknown> {\n  name: string;\n\n  // +2 overloads\n  createMap<\n    TSource extends Dictionary<TSource>,\n    TDestination extends Dictionary<TDestination>\n  >(\n    source: TKey,\n    destination: TKey,\n    options?: CreateMapOptions\n  ): CreateMapFluentFunction<TSource, TDestination>;\n\n  // +2 overloads\n  getMapping<TKey = unknown>(source: TKey, destination: TKey): Mapping;\n\n  addProfile(profile): Mapper;\n\n  // +1 overload\n  map<\n    TSource extends Dictionary<TSource> = unknown,\n    TDestination extends Dictionary<TDestination> = unknown\n  >(\n    sourceObj: TSource,\n    destination: new (...args: unknown[]) => TDestination,\n    source: new (...args: unknown[]) => TSource,\n    options?: MapOptions<TSource, TDestination>\n  ): TDestination;\n\n  // +1 overload\n  mapAsync<\n    TSource extends Dictionary<TSource> = unknown,\n    TDestination extends Dictionary<TDestination> = unknown\n  >(\n    sourceObj: TSource,\n    destination: new (...args: unknown[]) => TDestination,\n    source: new (...args: unknown[]) => TSource,\n    options?: MapOptions<TSource, TDestination>\n  ): Promise<TDestination>;\n\n  // +1 overload\n  mapArray<\n    TSource extends Dictionary<TSource> = unknown,\n    TDestination extends Dictionary<TDestination> = unknown\n  >(\n    sourceArray: TSource[],\n    destination: new (...args: unknown[]) => TDestination,\n    source: new (...args: unknown[]) => TSource,\n    options?: MapOptions<TSource[], TDestination[]>\n  ): TDestination[];\n\n  // +1 overload\n  mapArrayAsync<\n    TSource extends Dictionary<TSource> = unknown,\n    TDestination extends Dictionary<TDestination> = unknown\n  >(\n    sourceArray: TSource[],\n    destination: new (...args: unknown[]) => TDestination,\n    source: new (...args: unknown[]) => TSource,\n    options?: MapOptions<TSource[], TDestination[]>\n  ): Promise<TDestination[]>;\n\n  dispose(): void;\n}\n")),Object(r.b)("h2",{id:"createmapperoptions"},Object(r.b)("inlineCode",{parentName:"h2"},"CreateMapperOptions")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-ts"},"export interface CreateMapperOptions<TKey = unknown> {\n  name: string;\n  pluginInitializer: MapPluginInitializer<TKey>;\n  namingConventions?:\n    | NamingConvention\n    | {\n        source: NamingConvention;\n        destination: NamingConvention;\n      };\n  errorHandler?: ErrorHandler;\n}\n")),Object(r.b)("h3",{id:"required-fields"},"Required fields"),Object(r.b)("h4",{id:"name"},Object(r.b)("inlineCode",{parentName:"h4"},"name")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Type: ",Object(r.b)("inlineCode",{parentName:"li"},"string"))),Object(r.b)("p",null,"Name of the ",Object(r.b)("inlineCode",{parentName:"p"},"Mapper")),Object(r.b)("h4",{id:"plugininitializer"},Object(r.b)("inlineCode",{parentName:"h4"},"pluginInitializer")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Type: ",Object(r.b)("inlineCode",{parentName:"li"},"MapPluginInitializer")," (See ",Object(r.b)("a",{parentName:"li",href:"#mapplugininitializer"},Object(r.b)("inlineCode",{parentName:"a"},"MapPluginInitializer")),")")),Object(r.b)("p",null,"Plugin that the ",Object(r.b)("inlineCode",{parentName:"p"},"Mapper")," will be using"),Object(r.b)("h3",{id:"optional-fields"},"Optional fields"),Object(r.b)("h4",{id:"namingconventions"},Object(r.b)("inlineCode",{parentName:"h4"},"namingConventions")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Type: ",Object(r.b)("inlineCode",{parentName:"li"},"NamingConvention | { source: NamingConvention, destination: NamingConvention }"))),Object(r.b)("p",null,"Global naming conventions for all the ",Object(r.b)("inlineCode",{parentName:"p"},"Mapping")," in this ",Object(r.b)("inlineCode",{parentName:"p"},"Mapper")),Object(r.b)("h4",{id:"errorhandler"},Object(r.b)("inlineCode",{parentName:"h4"},"errorHandler")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Type: ",Object(r.b)("inlineCode",{parentName:"li"},"ErrorHandler")," (See ",Object(r.b)("a",{parentName:"li",href:"/docs/misc/error-handler"},"ErrorHandler"),")")),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"ErrorHandler")," that this ",Object(r.b)("inlineCode",{parentName:"p"},"Mapper")," uses"),Object(r.b)("h2",{id:"mapplugininitializer"},Object(r.b)("inlineCode",{parentName:"h2"},"MapPluginInitializer")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-ts"},"export interface MapPluginInitializer<TKey = unknown> {\n  (errorHandler: ErrorHandler): MapPlugin<TKey>;\n}\n")),Object(r.b)("p",null,"See ",Object(r.b)("a",{parentName:"p",href:"#mapplugin"},Object(r.b)("inlineCode",{parentName:"a"},"MapPlugin"))),Object(r.b)("h2",{id:"mapplugin"},Object(r.b)("inlineCode",{parentName:"h2"},"MapPlugin")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-ts"},"/**\n * How a plugin should provide\n */\nexport interface MapPlugin<TKey = unknown> {\n  /**\n   * Instruction on how a plugin should initialize a mapping for a pair of Source <> Destination\n   * This method will make use of the plugin's internal storages to store information for this pair.\n   *\n   * @param source - a key to be used to identify the information about a particular Source\n   * @param destination - a key to be used to identify the information about a particular Destination\n   * @param options {CreateMapOptions} - options for when initialize a mapping (which is globally applied to this pair of Source <> Destination)\n   */\n  initializeMapping(\n    source: TKey,\n    destination: TKey,\n    options?: CreateMapOptions\n  ): Mapping;\n\n  /**\n   * Get the Mapping for a pair of Source <> Destination\n   *\n   * @param source - a key to be used to identify the information about a particular Source\n   * @param destination - a key to be used to identify the information about a particular Destination\n   */\n  getMapping(source: TKey, destination: TKey): Mapping;\n\n  /**\n   * An optional pre-map function to prepare the source and destination before map\n   *\n   * @param source - a key to be used to identify the information about a particular Source\n   * @param destination - a key to be used to identify the information about a particular Destination\n   * @param sourceObj - a plain object that takes the shape of the source\n   * @param destinationObj - a plain object that takes the shape of the destination\n   */\n  preMap?<\n    TSource extends Dictionary<TSource> = unknown,\n    TDestination extends Dictionary<TDestination> = unknown\n  >(\n    source: TKey,\n    destination: TKey,\n    sourceObj?: TSource,\n    destinationObj?: TDestination\n  ): [sourceInstance: TSource, destinationInstance: TDestination];\n\n  /**\n   * Optional method to clean up the plugin's storages\n   */\n  dispose?(): void;\n}\n")))}l.isMDXComponent=!0}}]);