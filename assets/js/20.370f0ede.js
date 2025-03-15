(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{306:function(s,t,e){s.exports=e.p+"assets/img/v8.04f331fd.png"},307:function(s,t,e){s.exports=e.p+"assets/img/npmi.02ccd852.png"},375:function(s,t,e){"use strict";e.r(t);var a=e(13),r=Object(a.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h2",{attrs:{id:"_1、export-和-module-export-的区别"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1、export-和-module-export-的区别"}},[s._v("#")]),s._v(" 1、export 和 module.export 的区别")]),s._v(" "),t("p",[s._v("如果要对外暴露属性或方法，可用 exports"),t("br"),s._v("\n要暴露对象(类似 class，包含了很多属性和方法)，就用 module.exports")]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[s._v("exports "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" module"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("exports "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("exports 是 module.exports 的一个引用"),t("br"),s._v("\nmodule.exports 初始值为一个空对象 {}，所以 exports 初始值也是 { require 引用模块后，返回的是 module.exports 而不是 exports"),t("br"),s._v("\nexports.xxx 相当于在导出对象上挂属性，该属性对调用模块直接可见"),t("br"),s._v("\nexports = 相当于给 exports 对象重新赋值，调用模块不能访问 exports 对象及其属性"),t("br"),s._v("\n如果此模块是一个类，就应该直接赋值 module.exports，这样调用者就是一个类构造器，可以直接 new 实例")]),s._v(" "),t("h2",{attrs:{id:"_2、v8引擎定义"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2、v8引擎定义"}},[s._v("#")]),s._v(" 2、V8引擎定义")]),s._v(" "),t("p",[s._v("1、V8是用C ++编写的Google开源高性能JavaScript和WebAssembly引擎，它用于Chrome和Node.js等。"),t("br"),s._v("\n2、它实现ECMAScript和WebAssembly，并在Windows 7或更高版本，macOS 10.12+和使用x64，IA-32， ARM或MIPS处理器的Linux系统上运行。"),t("br"),s._v("\n3、V8可以独立运行，也可以嵌入到任何C ++应用程序中")]),s._v(" "),t("ul",[t("li",[s._v("V8引擎原理图：")])]),s._v(" "),t("p",[t("img",{attrs:{src:e(306)}})]),s._v(" "),t("h2",{attrs:{id:"_3、npm-install流程"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3、npm-install流程"}},[s._v("#")]),s._v(" 3、npm install流程")]),s._v(" "),t("p",[t("img",{attrs:{src:e(307)}})]),s._v(" "),t("h2",{attrs:{id:"_4、npm-常用命令和技巧"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4、npm-常用命令和技巧"}},[s._v("#")]),s._v(" 4、npm 常用命令和技巧")]),s._v(" "),t("h3",{attrs:{id:"_4-1、查看全局安装的模块"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-1、查看全局安装的模块"}},[s._v("#")]),s._v(" 4-1、查看全局安装的模块")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("npm ls -g --depth 0\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h3",{attrs:{id:"_4-2、自定义设置-process-env-node-env"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-2、自定义设置-process-env-node-env"}},[s._v("#")]),s._v(" 4-2、自定义设置 process.env.NODE_ENV")]),s._v(" "),t("h4",{attrs:{id:"_4-2-1、安装cross-env"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-2-1、安装cross-env"}},[s._v("#")]),s._v(" 4-2-1、安装cross-env")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("npm i cross-env -D\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h4",{attrs:{id:"_4-2-2、写进package-json"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-2-2、写进package-json"}},[s._v("#")]),s._v(" 4-2-2、写进package.json")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("cross-env NODE_ENV=beta vue-cli-service build\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h3",{attrs:{id:"_4-3、npm和cnpm"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-3、npm和cnpm"}},[s._v("#")]),s._v(" 4-3、npm和cnpm")]),s._v(" "),t("h4",{attrs:{id:"_4-3-1、直接安装cnpm"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-3-1、直接安装cnpm"}},[s._v("#")]),s._v(" 4-3-1、直接安装cnpm")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("npm i cnpm -g\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p"),s._v(" "),t("h4",{attrs:{id:"_4-3-2、改变镜像源"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-3-2、改变镜像源"}},[s._v("#")]),s._v(" 4-3-2、改变镜像源")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("npm config set registry https://registry.npm.taobao.org\nnpm config set registry https://registry.npmjs.org\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("ul",[t("li",[s._v("查看镜像")])]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("npm config get registry \n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])])])}),[],!1,null,null,null);t.default=r.exports}}]);