(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{395:function(t,e,s){"use strict";s.r(e);var r=s(42),o=Object(r.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"_1、export-和-module-export-的区别"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1、export-和-module-export-的区别"}},[t._v("#")]),t._v(" 1、export 和 module.export 的区别")]),t._v(" "),s("p",[t._v("如果要对外暴露属性或方法，可用 exports"),s("br"),t._v("\n要暴露对象(类似 class，包含了很多属性和方法)，就用 module.exports")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("exports "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" module"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("exports 是 module.exports 的一个引用"),s("br"),t._v("\nmodule.exports 初始值为一个空对象 {}，所以 exports 初始值也是 { require 引用模块后，返回的是 module.exports 而不是 exports"),s("br"),t._v("\nexports.xxx 相当于在导出对象上挂属性，该属性对调用模块直接可见"),s("br"),t._v("\nexports = 相当于给 exports 对象重新赋值，调用模块不能访问 exports 对象及其属性"),s("br"),t._v("\n如果此模块是一个类，就应该直接赋值 module.exports，这样调用者就是一个类构造器，可以直接 new 实例")])])}),[],!1,null,null,null);e.default=o.exports}}]);