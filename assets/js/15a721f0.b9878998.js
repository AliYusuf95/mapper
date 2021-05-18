(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{116:function(e,n,t){"use strict";t.d(n,"a",(function(){return c})),t.d(n,"b",(function(){return u}));var a=t(0),o=t.n(a);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var b=o.a.createContext({}),s=function(e){var n=o.a.useContext(b),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},c=function(e){var n=s(e.components);return o.a.createElement(b.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},d=o.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,i=e.parentName,b=p(e,["components","mdxType","originalType","parentName"]),c=s(t),d=a,u=c["".concat(i,".").concat(d)]||c[d]||m[d]||r;return t?o.a.createElement(u,l(l({ref:n},b),{},{components:t})):o.a.createElement(u,l({ref:n},b))}));function u(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,i=new Array(r);i[0]=d;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var b=2;b<r;b++)i[b]=t[b];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},64:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return l})),t.d(n,"toc",(function(){return p})),t.d(n,"default",(function(){return s}));var a=t(3),o=t(7),r=(t(0),t(116)),i={id:"introduce-to-automapper",title:"Introduce to AutoMapper",sidebar_label:"Introduce to AutoMapper"},l={unversionedId:"getting-started/introduce-to-automapper",id:"getting-started/introduce-to-automapper",isDocsHomePage:!1,title:"Introduce to AutoMapper",description:"Welcome to AutoMapper TypeScript! This basic tutorial will try to show you the problems that AutoMapper tries to solve with some basic functions that are included with @automapper/*",source:"@site/docs/getting-started/introduce-to-automapper.md",slug:"/getting-started/introduce-to-automapper",permalink:"/docs/getting-started/introduce-to-automapper",editUrl:"https://github.com/nartc/mapper/tree/main/docs-site/docs/getting-started/introduce-to-automapper.md",version:"current",sidebar_label:"Introduce to AutoMapper",sidebar:"docs",previous:{title:"Installation",permalink:"/docs/getting-started/installation"},next:{title:"Introduce to Profile",permalink:"/docs/getting-started/introduce-to-profile"}},p=[{value:"Before AutoMapper",id:"before-automapper",children:[]},{value:"Installing AutoMapper",id:"installing-automapper",children:[]},{value:"Create a <code>Mapper</code>",id:"create-a-mapper",children:[]},{value:"Decorating properties with <code>@AutoMap()</code> (for <code>classes</code> plugin only)",id:"decorating-properties-with-automap-for-classes-plugin-only",children:[]},{value:"Create a <code>Mapping&lt;User, UserDto&gt;</code>",id:"create-a-mappinguser-userdto",children:[]},{value:"Use the <code>Mapper</code>",id:"use-the-mapper",children:[]},{value:"Explanation of what happened",id:"explanation-of-what-happened",children:[{value:"<code>fullName</code> is missing",id:"fullname-is-missing",children:[]},{value:"<code>birthday</code> is missing",id:"birthday-is-missing",children:[]},{value:"<code>jobTitle</code> and <code>jobSalary</code> are <code>undefined</code>",id:"jobtitle-and-jobsalary-are-undefined",children:[]}]},{value:"How to fix",id:"how-to-fix",children:[{value:"Fixing <code>fullName</code>",id:"fixing-fullname",children:[]},{value:"Fixing <code>birthday</code>",id:"fixing-birthday",children:[]},{value:"Fixing <code>jobTitle</code> and <code>jobSalary</code>",id:"fixing-jobtitle-and-jobsalary",children:[]}]},{value:"Summary",id:"summary",children:[]}],b={toc:p};function s(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},b,t,{components:n,mdxType:"MDXLayout"}),Object(r.b)("p",null,"Welcome to AutoMapper TypeScript! This basic tutorial will try to show you the problems that AutoMapper tries to solve with some basic functions that are included with ",Object(r.b)("inlineCode",{parentName:"p"},"@automapper/*")),Object(r.b)("h2",{id:"before-automapper"},"Before AutoMapper"),Object(r.b)("p",null,"Let's assume we have an application with a particular method to return some ",Object(r.b)("inlineCode",{parentName:"p"},"User")," information. Our application has the following models:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"User"),": the data of a user from the database"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"UserDto"),": the shape of the user data that is exposed as the return type of this method")),Object(r.b)("p",null,"Each ",Object(r.b)("inlineCode",{parentName:"p"},"User")," will have a nested ",Object(r.b)("inlineCode",{parentName:"p"},"Bio")," which also contains a nested ",Object(r.b)("inlineCode",{parentName:"p"},"Job"),"."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-ts"},"export class User {\n  firstName: string;\n  lastName: string;\n  username: string;\n  password: string;\n  bio: Bio;\n}\n\nexport class Bio {\n  job: Job;\n  birthday: Date;\n  avatarUrl: string;\n}\n\nexport class Job {\n  title: string;\n  salary: number;\n}\n")),Object(r.b)("p",null,"The DTOs contain almost identical shapes as the Entities. Let's also assume we have some mapping logic on the DTOs"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-ts"},"export class UserDto {\n  firstName: string;\n  lastName: string;\n  fullName: string;\n  username: string;\n  bio: BioDto;\n\n  static fromUser(user: User) {\n    const dto = new UserDto();\n    dto.firstName = user.firstName;\n    dto.lastName = user.lastName;\n    dto.fullName = user.firstName + ' ' + user.lastName;\n    dto.username = user.username;\n    dto.bio = BioDto.fromBio(user.bio);\n\n    return dto;\n  }\n}\n\nexport class BioDto {\n  jobTitle: string;\n  jobSalary: number;\n  birthday: string;\n  avatarUrl: string;\n\n  static fromBio(bio: Bio) {\n    const dto = new BioDto();\n    dto.jobTitle = bio.job.title;\n    dto.jobSalary = bio.job.salary;\n    dto.birthday = bio.birthday.toDateString();\n    dto.avatarUrl = bio.avatarUrl;\n\n    return dto;\n  }\n}\n")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-ts"},"function getUserDto(username: string): UserDto {\n  const user = fetchUserByUsernameFromDb(username);\n  return UserDto.fromUser(user);\n}\n")),Object(r.b)("p",null,"Pretty straightforward, right? We fetch the user from the database then we call the static method on the ",Object(r.b)("inlineCode",{parentName:"p"},"UserDto")," to ",Object(r.b)("em",{parentName:"p"},"transform")," a ",Object(r.b)("inlineCode",{parentName:"p"},"User")," to ",Object(r.b)("inlineCode",{parentName:"p"},"UserDto")," then return it. Short and sweet, the code looks clean too."),Object(r.b)("p",null,"However, there are a couple of problems with the above approach:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"It is not ",Object(r.b)("strong",{parentName:"li"},"scalable"),". For each of the transformations from some models (let's call these ",Object(r.b)("strong",{parentName:"li"},"Source"),") to ",Object(r.b)("inlineCode",{parentName:"li"},"UserDto"),", we're going to have to write a static method ",Object(r.b)("inlineCode",{parentName:"li"},"static from*()"),". The properties with the same name as the ",Object(r.b)("strong",{parentName:"li"},"Source")," will have to be repeated over and over in each ",Object(r.b)("inlineCode",{parentName:"li"},"static from*()")," method. Granted, we can create some reusable function but what if we add more properties to the models?"),Object(r.b)("li",{parentName:"ul"},"It is not ",Object(r.b)("strong",{parentName:"li"},"maintainable"),". We introduce some tight-coupling. Now ",Object(r.b)("inlineCode",{parentName:"li"},"UserDto")," needs to know about ",Object(r.b)("inlineCode",{parentName:"li"},"User"),". Same thing applies to ",Object(r.b)("inlineCode",{parentName:"li"},"BioDto")," and ",Object(r.b)("inlineCode",{parentName:"li"},"Bio"),". What if we have our models ",Object(r.b)("inlineCode",{parentName:"li"},"extends")," some other models? The complexity will increase.")),Object(r.b)("p",null,"Let's see how AutoMapper can help"),Object(r.b)("h2",{id:"installing-automapper"},"Installing AutoMapper"),Object(r.b)("p",null,"Start by installing the dependencies"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash"},"npm i @automapper/{core,classes}\nnpm i -D @automapper/types\n\n# or with yarn\nyarn add @automapper/{core,classes}\nyarn add -D @automapper/types\n")),Object(r.b)("h2",{id:"create-a-mapper"},"Create a ",Object(r.b)("inlineCode",{parentName:"h2"},"Mapper")),Object(r.b)("p",null,"In some separate file called ",Object(r.b)("inlineCode",{parentName:"p"},"mapper.ts"),", we will start initializing our ",Object(r.b)("inlineCode",{parentName:"p"},"Mapper")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-ts"},"import { createMapper } from '@automapper/core';\nimport { classes } from '@automapper/classes';\n\nexport const mapper = createMapper({\n  name: 'someName',\n  pluginInitializer: classes,\n});\n")),Object(r.b)("h2",{id:"decorating-properties-with-automap-for-classes-plugin-only"},"Decorating properties with ",Object(r.b)("inlineCode",{parentName:"h2"},"@AutoMap()")," (for ",Object(r.b)("inlineCode",{parentName:"h2"},"classes")," plugin only)"),Object(r.b)("p",null,"Let's bring our models here once again"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-ts"},"import { AutoMap } from '@automapper/classes';\n\nexport class User {\n  @AutoMap()\n  firstName: string;\n\n  @AutoMap()\n  lastName: string;\n\n  @AutoMap()\n  username: string;\n\n  password: string;\n\n  @AutoMap({ typeFn: () => Bio })\n  bio: Bio;\n}\n\nexport class Bio {\n  @AutoMap({ typeFn: () => Job })\n  job: Job;\n\n  birthday: Date;\n\n  @AutoMap()\n  avatarUrl: string;\n}\n\nexport class Job {\n  @AutoMap()\n  title: string;\n\n  @AutoMap()\n  salary: number;\n}\n")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-ts"},"import { AutoMap } from '@automapper/classes';\n\nexport class UserDto {\n  @AutoMap()\n  firstName: string;\n\n  @AutoMap()\n  lastName: string;\n\n  fullName: string; // <- we purposely left this one out\n\n  @AutoMap()\n  username: string;\n\n  @AutoMap({ typeFn: () => BioDto })\n  bio: BioDto;\n}\n\nexport class BioDto {\n  @AutoMap()\n  jobTitle: string;\n\n  @AutoMap()\n  jobSalary: number;\n\n  birthday: string; // <- we purposely left this one out\n\n  @AutoMap()\n  avatarUrl: string;\n}\n")),Object(r.b)("p",null,"We did the following:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Removed the mapping logic in the DTOs"),Object(r.b)("li",{parentName:"ul"},"Decorated all the properties with the same name with ",Object(r.b)("inlineCode",{parentName:"li"},"@AutoMap()"),". For nested model like ",Object(r.b)("inlineCode",{parentName:"li"},"BioDto"),", we provide a ",Object(r.b)("inlineCode",{parentName:"li"},"typeFn")," to ",Object(r.b)("inlineCode",{parentName:"li"},"@AutoMap()"))),Object(r.b)("h2",{id:"create-a-mappinguser-userdto"},"Create a ",Object(r.b)("inlineCode",{parentName:"h2"},"Mapping<User, UserDto>")),Object(r.b)("p",null,"We've prepped our models with ",Object(r.b)("inlineCode",{parentName:"p"},"@AutoMap()"),", it is time to create the mappings. The mappings are created once and can be separated from the rest of other business logic code."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-ts"},"mapper.createMap(Bio, BioDto);\nmapper.createMap(User, UserDto);\n")),Object(r.b)("h2",{id:"use-the-mapper"},"Use the ",Object(r.b)("inlineCode",{parentName:"h2"},"Mapper")),Object(r.b)("p",null,"Now our ",Object(r.b)("inlineCode",{parentName:"p"},"getUserDto()")," method will look like the following"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-ts"},"function getUserDto(username: string): UserDto {\n  const user = fetchUserByUsernameFromDb(username);\n  return mapper.map(user, UserDto, User);\n}\n")),Object(r.b)("p",null,"Unfortunately, our ",Object(r.b)("inlineCode",{parentName:"p"},"UserDto")," is missing some information"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-js"},"const dto = {\n  firstName: 'Chau',\n  lastName: 'Tran',\n  username: 'ctran',\n  bio: {\n    jobTitle: undefined,\n    jobSalary: undefined,\n    avatarUrl: 'url.com',\n  },\n};\n")),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"fullName")," and ",Object(r.b)("inlineCode",{parentName:"p"},"bio.birthday")," are nowhere to be found. ",Object(r.b)("inlineCode",{parentName:"p"},"jobTitle")," and ",Object(r.b)("inlineCode",{parentName:"p"},"jobSalary")," are ",Object(r.b)("inlineCode",{parentName:"p"},"undefined"),". There is also a ",Object(r.b)("inlineCode",{parentName:"p"},"console.error")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-text"},"Unmapped properties:\n-------------------\njobTitle,\njobSalary\n")),Object(r.b)("p",null,'On the bright side, we can see that the properties, that are matching, are "auto-mapped" correctly. The nested model ',Object(r.b)("inlineCode",{parentName:"p"},"bio")," is also mapped which is a good sign."),Object(r.b)("h2",{id:"explanation-of-what-happened"},"Explanation of what happened"),Object(r.b)("h3",{id:"fullname-is-missing"},Object(r.b)("inlineCode",{parentName:"h3"},"fullName")," is missing"),Object(r.b)("p",null,"On our ",Object(r.b)("inlineCode",{parentName:"p"},"UserDto"),", we have a property called ",Object(r.b)("inlineCode",{parentName:"p"},"fullName")," and we did not decorate it with ",Object(r.b)("inlineCode",{parentName:"p"},"@AutoMap()"),". Without ",Object(r.b)("inlineCode",{parentName:"p"},"@AutoMap()"),", AutoMapper does not have any information about this ",Object(r.b)("inlineCode",{parentName:"p"},"fullName")," property on the ",Object(r.b)("inlineCode",{parentName:"p"},"UserDto"),". If we were to put ",Object(r.b)("inlineCode",{parentName:"p"},"@AutoMap()")," on ",Object(r.b)("inlineCode",{parentName:"p"},"fullName")," and re-execute our ",Object(r.b)("inlineCode",{parentName:"p"},"getUserDto()")," method, we would then get ",Object(r.b)("inlineCode",{parentName:"p"},"fullName: undefined"),"."),Object(r.b)("p",null,"The reason is our ",Object(r.b)("inlineCode",{parentName:"p"},"User")," does not have a ",Object(r.b)("inlineCode",{parentName:"p"},"fullName")," property. In other words, we can think of ",Object(r.b)("inlineCode",{parentName:"p"},"UserDto.fullName")," as a computed property. AutoMap cannot ",Object(r.b)("em",{parentName:"p"},"auto")," configure computed properties."),Object(r.b)("h3",{id:"birthday-is-missing"},Object(r.b)("inlineCode",{parentName:"h3"},"birthday")," is missing"),Object(r.b)("p",null,"Same reason as ",Object(r.b)("inlineCode",{parentName:"p"},"fullName"),". We did not decorate ",Object(r.b)("inlineCode",{parentName:"p"},"birthday")," with ",Object(r.b)("inlineCode",{parentName:"p"},"@AutoMap()"),". The difference here is that on ",Object(r.b)("inlineCode",{parentName:"p"},"Bio"),", we also have ",Object(r.b)("inlineCode",{parentName:"p"},"birthday")," field. The problem is ",Object(r.b)("inlineCode",{parentName:"p"},"Bio.birthday")," and ",Object(r.b)("inlineCode",{parentName:"p"},"BioDto.birthday")," have different data types (",Object(r.b)("inlineCode",{parentName:"p"},"Date")," vs ",Object(r.b)("inlineCode",{parentName:"p"},"string"),")."),Object(r.b)("p",null,"AutoMapper isn't smart enough to read the consumers' mind on how they want to map from a ",Object(r.b)("inlineCode",{parentName:"p"},"Date")," to a ",Object(r.b)("inlineCode",{parentName:"p"},"string")," (even though AutoMapper does have information about each field's data type in most cases)."),Object(r.b)("h3",{id:"jobtitle-and-jobsalary-are-undefined"},Object(r.b)("inlineCode",{parentName:"h3"},"jobTitle")," and ",Object(r.b)("inlineCode",{parentName:"h3"},"jobSalary")," are ",Object(r.b)("inlineCode",{parentName:"h3"},"undefined")),Object(r.b)("p",null,"Same reason as above, we decorated ",Object(r.b)("inlineCode",{parentName:"p"},"jobTitle")," and ",Object(r.b)("inlineCode",{parentName:"p"},"jobSalary")," so they will be added to the metadata list of ",Object(r.b)("inlineCode",{parentName:"p"},"BioDto")," but on the ",Object(r.b)("inlineCode",{parentName:"p"},"Bio"),", we do not have ",Object(r.b)("inlineCode",{parentName:"p"},"jobTitle")," and ",Object(r.b)("inlineCode",{parentName:"p"},"jobSalary"),"."),Object(r.b)("p",null,"The difference between ",Object(r.b)("inlineCode",{parentName:"p"},"fullName")," and ",Object(r.b)("inlineCode",{parentName:"p"},"jobTitle")," (or ",Object(r.b)("inlineCode",{parentName:"p"},"jobSalary"),") is that ",Object(r.b)("inlineCode",{parentName:"p"},"jobTitle")," and ",Object(r.b)("inlineCode",{parentName:"p"},"jobSalary")," are flatten properties of ",Object(r.b)("inlineCode",{parentName:"p"},"job: Job")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"jobTitle")," vs ",Object(r.b)("inlineCode",{parentName:"li"},"job.title")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"jobSalary")," vs ",Object(r.b)("inlineCode",{parentName:"li"},"job.salary"))),Object(r.b)("h2",{id:"how-to-fix"},"How to fix"),Object(r.b)("p",null,"To fix ",Object(r.b)("inlineCode",{parentName:"p"},"fullName")," and ",Object(r.b)("inlineCode",{parentName:"p"},"birthday"),", we are going to tap into the Mapping Configuration portion of AutoMapper, which is quite powerful. For ",Object(r.b)("inlineCode",{parentName:"p"},"jobTitle")," and ",Object(r.b)("inlineCode",{parentName:"p"},"jobSalary"),", we will utilize ",Object(r.b)("strong",{parentName:"p"},"Flattening")," capability with ",Object(r.b)("a",{parentName:"p",href:"/docs/fundamentals#namingconvention"},"NamingConvention")),Object(r.b)("p",null,"Let's remind every one of our Mapping creation"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-ts"},"mapper.createMap(Bio, BioDto);\nmapper.createMap(User, UserDto);\n")),Object(r.b)("h3",{id:"fixing-fullname"},"Fixing ",Object(r.b)("inlineCode",{parentName:"h3"},"fullName")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-ts"},"mapper.createMap(User, UserDto).forMember(\n  (destination) => destination.fullName,\n  mapFrom((source) => source.firstName + ' ' + source.lastName)\n);\n")),Object(r.b)("p",null,"We call ",Object(r.b)("inlineCode",{parentName:"p"},"forMember()")," after ",Object(r.b)("inlineCode",{parentName:"p"},"createMap()"),"."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"forMember()")," knows what two models it is being called upon. In this case, those are ",Object(r.b)("inlineCode",{parentName:"li"},"User")," and ",Object(r.b)("inlineCode",{parentName:"li"},"UserDto")),Object(r.b)("li",{parentName:"ul"},"We pass in a Property Selector for ",Object(r.b)("inlineCode",{parentName:"li"},"forMember()")," first argument. Because ",Object(r.b)("inlineCode",{parentName:"li"},"forMember()")," knows about the models, it will have intellisense of what ",Object(r.b)("inlineCode",{parentName:"li"},"destination")," is"),Object(r.b)("li",{parentName:"ul"},"We pass in a ",Object(r.b)("inlineCode",{parentName:"li"},"MemberMapFunction")," for ",Object(r.b)("inlineCode",{parentName:"li"},"forMember()")," second argument. Here, we provide an instruction of how we want to map ",Object(r.b)("inlineCode",{parentName:"li"},"destination.fullName"),'. We said: "For ',Object(r.b)("inlineCode",{parentName:"li"},"destination.fullName"),", please ",Object(r.b)("inlineCode",{parentName:"li"},"mapFrom")," ",Object(r.b)("inlineCode",{parentName:"li"},"source.firstName")," and ",Object(r.b)("inlineCode",{parentName:"li"},"source.lastName"),'"')),Object(r.b)("h3",{id:"fixing-birthday"},"Fixing ",Object(r.b)("inlineCode",{parentName:"h3"},"birthday")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-ts"},"mapper.createMap(Bio, BioDto).forMember(\n  (destination) => destination.birthday,\n  mapFrom((source) => source.birthday.toDateString())\n);\n")),Object(r.b)("p",null,'Same concept as above. We said: "For ',Object(r.b)("inlineCode",{parentName:"p"},"destination.birthday"),", please ",Object(r.b)("inlineCode",{parentName:"p"},"mapFrom")," ",Object(r.b)("inlineCode",{parentName:"p"},"source.birthday.toDateString()"),'"'),Object(r.b)("h3",{id:"fixing-jobtitle-and-jobsalary"},"Fixing ",Object(r.b)("inlineCode",{parentName:"h3"},"jobTitle")," and ",Object(r.b)("inlineCode",{parentName:"h3"},"jobSalary")),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"jobTitle")," and ",Object(r.b)("inlineCode",{parentName:"p"},"jobSalary")," are on ",Object(r.b)("inlineCode",{parentName:"p"},"BioDto")," so we're going to reuse the mapping configuration from the above"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-ts"},"import { CamelCaseNamingConvention } from '@automapper/core';\n\nmapper\n  .createMap(Bio, BioDto, {\n    namingConventions: {\n      source: new CamelCaseNamingConvention(),\n      destination: new CamelCaseNamingConvention(),\n    },\n  })\n  .forMember(\n    (destination) => destination.birthday,\n    mapFrom((source) => source.birthday.toDateString())\n  );\n")),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"mapper.createMap")," accepts an optional third argument ",Object(r.b)("inlineCode",{parentName:"p"},"CreateMapOptions")," where we can provide a ",Object(r.b)("inlineCode",{parentName:"p"},"namingConventions")," object with ",Object(r.b)("inlineCode",{parentName:"p"},"source")," convention and ",Object(r.b)("inlineCode",{parentName:"p"},"destination")," convention. Here, we provide ",Object(r.b)("inlineCode",{parentName:"p"},"CamelCaseNamingConvention")," for both. With ",Object(r.b)("a",{parentName:"p",href:"/docs/fundamentals#namingconvention"},"NamingConvention"),", AutoMapper has enough information to apply basic ",Object(r.b)("strong",{parentName:"p"},"Flattening")," to the mapping."),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},Object(r.b)("inlineCode",{parentName:"p"},"namingConventions")," can also take in a single ",Object(r.b)("inlineCode",{parentName:"p"},"NamingConvention")," if both models use the same ",Object(r.b)("inlineCode",{parentName:"p"},"NamingConvention"),"."),Object(r.b)("pre",{parentName:"blockquote"},Object(r.b)("code",{parentName:"pre",className:"language-ts"},"mapper.createMap(Bio, BioDto, {\n  namingConventions: new CamelCaseNamingConvention(),\n});\n"))),Object(r.b)("p",null,"Let's re-execute ",Object(r.b)("inlineCode",{parentName:"p"},"getUserDto()")," and we will now see a complete ",Object(r.b)("inlineCode",{parentName:"p"},"UserDto")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-json"},'{\n  "firstName": "Chau",\n  "lastName": "Tran",\n  "username": "ctran",\n  "bio": {\n    "jobTitle": "Developer",\n    "jobSalary": 123456,\n    "avatarUrl": "url.com",\n    "birthday": "Sat Jan 02 2021"\n  },\n  "fullName": "Chau Tran"\n}\n')),Object(r.b)("h2",{id:"summary"},"Summary"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Without AutoMapper, our mapping logic is not maintainable and scalable. We have tight coupling between DTOs and Entities."),Object(r.b)("li",{parentName:"ul"},"AutoMapper brings ",Object(r.b)("strong",{parentName:"li"},"Separation of Concern")," and ",Object(r.b)("strong",{parentName:"li"},"Conventions over Configuration")," to our mapping logic.",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"firstName"),", ",Object(r.b)("inlineCode",{parentName:"li"},"lastName"),", ",Object(r.b)("inlineCode",{parentName:"li"},"username"),", and ",Object(r.b)("inlineCode",{parentName:"li"},"bio")," are ",Object(r.b)("em",{parentName:"li"},"auto-mapped")," correctly"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"jobTitle")," and ",Object(r.b)("inlineCode",{parentName:"li"},"jobSalary")," are ",Object(r.b)("em",{parentName:"li"},"flatten")," and ",Object(r.b)("em",{parentName:"li"},"auto-mapped")," correctly with ",Object(r.b)("a",{parentName:"li",href:"/docs/fundamentals#namingconvention"},"NamingConvention")))),Object(r.b)("li",{parentName:"ul"},"Mapping Configuration is powerful and highly customizable. ",Object(r.b)("inlineCode",{parentName:"li"},"fullName")," and ",Object(r.b)("inlineCode",{parentName:"li"},"birthday")," are some of the simplest examples of what Mapping Configuration can provide."),Object(r.b)("li",{parentName:"ul"},"There are some gotchas:",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"Order of Mapping matters. Because ",Object(r.b)("inlineCode",{parentName:"li"},"Bio")," and ",Object(r.b)("inlineCode",{parentName:"li"},"BioDto")," are nested models of ",Object(r.b)("inlineCode",{parentName:"li"},"User")," and ",Object(r.b)("inlineCode",{parentName:"li"},"UserDto"),", we create their Mapping first."),Object(r.b)("li",{parentName:"ul"},"Verbosity with ",Object(r.b)("inlineCode",{parentName:"li"},"@AutoMap()")," decorator. This is required although for properties that are manually configured with Mapping Configuration, ",Object(r.b)("inlineCode",{parentName:"li"},"@AutoMap()")," isn't required."))),Object(r.b)("li",{parentName:"ul"},"Here's the full code:")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-ts"},"import { AutoMap } from '@automapper/classes';\n\nexport class User {\n  @AutoMap()\n  firstName: string;\n\n  @AutoMap()\n  lastName: string;\n\n  @AutoMap()\n  username: string;\n\n  password: string;\n\n  @AutoMap({ typeFn: () => Bio })\n  bio: Bio;\n}\n\nexport class Bio {\n  @AutoMap({ typeFn: () => Job })\n  job: Job;\n\n  birthday: Date;\n\n  @AutoMap()\n  avatarUrl: string;\n}\n\nexport class Job {\n  @AutoMap()\n  title: string;\n\n  @AutoMap()\n  salary: number;\n}\n\nexport class UserDto {\n  @AutoMap()\n  firstName: string;\n\n  @AutoMap()\n  lastName: string;\n\n  fullName: string;\n\n  @AutoMap()\n  username: string;\n\n  @AutoMap({ typeFn: () => BioDto })\n  bio: BioDto;\n}\n\nexport class BioDto {\n  @AutoMap()\n  jobTitle: string;\n\n  @AutoMap()\n  jobSalary: number;\n\n  birthday: string;\n\n  @AutoMap()\n  avatarUrl: string;\n}\n\nmapper\n  .createMap(Bio, BioDto, {\n    namingConventions: {\n      source: new CamelCaseNamingConvention(),\n      destination: new CamelCaseNamingConvention(),\n    },\n  })\n  .forMember(\n    (destination) => destination.birthday,\n    mapFrom((source) => source.birthday.toDateString())\n  );\n\nmapper.createMap(User, UserDto).forMember(\n  (destination) => destination.fullName,\n  mapFrom((source) => source.firstName + ' ' + source.lastName)\n);\n\nfunction getUserDto(username: string): UserDto {\n  const user = fetchUserByUsernameFromDb(username);\n  return mapper.map(user, UserDto, User);\n}\n")))}s.isMDXComponent=!0}}]);