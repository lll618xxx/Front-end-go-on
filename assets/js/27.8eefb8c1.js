(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{215:function(t,s,a){"use strict";a.r(s);var n=a(0),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"_1-vue-介绍"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-vue-介绍"}},[t._v("#")]),t._v(" 1. Vue 介绍")]),t._v(" "),a("p",[t._v("Vue.js 是一个构建数据驱动（所谓数据驱动，是指视图是由数据驱动生成的，我们对视图的修改，不会直接操作 DOM，而是通过修改数据。）的 web 界面的 MVVM 渐进式框架。Vue.js 的目标是通过尽可能简单的 API 实现响应的数据绑定和组合的视图组件。核心是一个响应的数据绑定系统。")]),t._v(" "),a("p",[t._v("在 JQuery 时期，如果需要刷新 UI 时，需要先取到对应的 DOM 再更新 UI，这样数据和业务的逻辑就和页面有强耦合。")]),t._v(" "),a("p",[t._v("在 MVVM 中，UI 是通过数据驱动的，数据一旦改变就会相应的刷新对应的 UI，UI 如果改变，也会改变对应的数据。这种方式就可以在业务处理中只关心数据的流转，而无需直接和页面打交道。")]),t._v(" "),a("h4",{attrs:{id:"vue-和-react-的区别："}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vue-和-react-的区别："}},[t._v("#")]),t._v(" Vue 和 React 的区别：")]),t._v(" "),a("p",[a("strong",[t._v("相同点")]),t._v("："),a("br"),t._v("\n 使用 Virtual DOM"),a("br"),t._v("\n 中心思想相同：一切都是组件，组件实例之间可以嵌套；都提供合理的钩子函数")]),t._v(" "),a("p",[a("strong",[t._v("不同点")]),t._v("："),a("br"),t._v("\n 在 React 应用中，当某个组件的状态发生变化时，它会以该组件为根，重新渲染整个组件子树"),a("br"),t._v("\n 在 Vue 应用中，组件的依赖是在渲染过程中自动追踪的，所以系统能精确知晓哪个组件确实需要被重渲染"),a("br"),t._v("\n React 采用特殊的 JSX 语法，Vue.js 在组件开发中推崇编写.vue 特殊文件格式")]),t._v(" "),a("h4",{attrs:{id:"vue-和-angular-的区别："}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vue-和-angular-的区别："}},[t._v("#")]),t._v(" Vue 和 Angular 的区别：")]),t._v(" "),a("p",[a("strong",[t._v("相同点")]),t._v("："),a("br"),t._v("\n 都支持指令：内置指令和自定义指令，vue 在设计之初参考了很多 angular 的思想(例如 v-if vs ng-if)"),a("br"),t._v("\n 都支持过滤器：内置过滤器和自定义过滤器\n 都支持双向数据绑定；都不支持低端浏览器")]),t._v(" "),a("p",[a("strong",[t._v("不同点")]),t._v("："),a("br"),t._v("\n 在性能上，AngularJS 依赖对数据做脏检查，所以 Watcher 越多越慢；Vue 采用数据劫持实现双向绑定，但是代价是对于 ie9 以下的浏览器无法支持")]),t._v(" "),a("h4",{attrs:{id:"mvvm-与-mvc-区别"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mvvm-与-mvc-区别"}},[t._v("#")]),t._v(" MVVM 与 MVC 区别:")]),t._v(" "),a("p",[t._v(" MVVM 与 MVC 两者之间最大的区别就是：MVVM 实现了对 View 和 Model 的自动同步，也就是当 Model 的属性改变时，我们不用再自己手动操作 Dom 元素来改变 View 的变化，而是改变其属性后，该属性对应的 View 层数据会自动改变。")]),t._v(" "),a("h2",{attrs:{id:"_2-vue-指令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-vue-指令"}},[t._v("#")]),t._v(" 2. Vue 指令")]),t._v(" "),a("h4",{attrs:{id:"①、v-if-和-v-show-的区别"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#①、v-if-和-v-show-的区别"}},[t._v("#")]),t._v(" ①、v-if 和 v-show 的区别")]),t._v(" "),a("p",[a("strong",[t._v("相同点：")]),a("br"),t._v("\n v-if 与 v-show 都可以动态控制 dom 元素显示隐藏"),a("br"),t._v(" "),a("strong",[t._v("不同点：")]),a("br"),t._v("\n v-if 显示隐藏是将 dom 元素整个添加或删除，而 v-show 隐藏则是为该元素添加 css--display:none，dom 元素还在"),a("br"),t._v("\n 如果需要非常频繁地切换，则使用 v-show 较好；如果在运行时条件很少改变，则使用 v-if 较好\nVue 不能挂载在 body、html 这样的根节点上")]),t._v(" "),a("h4",{attrs:{id:"②、v-text"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#②、v-text"}},[t._v("#")]),t._v(" ②、v-text")]),t._v(" "),a("div",{staticClass:"language-html line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("span")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("v-text")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("msg"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("span")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[t._v("v-text 主要用来更新 textContent，可以等同于 JS 的 text 属性")]),t._v(" "),a("h4",{attrs:{id:"③、v-html"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#③、v-html"}},[t._v("#")]),t._v(" ③、v-html")]),t._v(" "),a("p",[t._v("双大括号的方式会将数据解释为纯文本，而非 HTML\n为了输出真正的 HTML，可以用 v-html 指令\n它等同于 JS 的 innerHtml 属性")]),t._v(" "),a("div",{staticClass:"language-html line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("v-html")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("rawHtml"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[t._v("这个 div 的内容将会替换成属性值 rawHtml，直接作为 HTML 进行渲染")]),t._v(" "),a("h4",{attrs:{id:"④、v-for"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#④、v-for"}},[t._v("#")]),t._v(" ④、v-for")]),t._v(" "),a("p",[t._v("用 v-for 指令根据遍历数组来进行渲染\n有下面两种遍历形式")]),t._v(" "),a("div",{staticClass:"language-html line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[t._v("使用in，index是一个可选参数，表示当前项的索引\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("v-for")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("(item,index) in items"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br")])]),a("div",{staticClass:"language-html line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[t._v("使用of\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("v-for")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("item of items"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br")])]),a("h4",{attrs:{id:"⑤、v-bind"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#⑤、v-bind"}},[t._v("#")]),t._v(" ⑤、v-bind")]),t._v(" "),a("p",[t._v("v-bind 用来动态的绑定一个或者多个特性。没有参数时，可以绑定到一个包含键值对的对象"),a("br"),t._v("\n常用于动态绑定 class 和 style。以及 href 等"),a("br"),t._v("\n简写为一个冒号【 ：】")]),t._v(" "),a("p",[a("strong",[t._v("<1>对象语法：")])]),t._v(" "),a("div",{staticClass:"language-html line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v(":class")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("{'is-active':isActive, 'text-danger':hasError}"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\ndata: { isActive: true, hasError: false }\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br")])]),a("p",[a("strong",[t._v("<2>数组语法：")])]),t._v(" "),a("div",{staticClass:"language-html line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("p")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v(":class")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("[{'is-active':activeClass},errorClass]"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("12345"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("p")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\ndata: { activeClass: false, errorClass: 'text-danger' }\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br")])]),a("div",{staticClass:"language-html line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[t._v("// 三目运算符绑定\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v(":class")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("[loginActive ? 'activeTab' : '','tabpane']"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br")])]),a("p",[a("strong",[t._v("<3>直接绑定数据对象：")])]),t._v(" "),a("div",{staticClass:"language-html line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v(":class")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("classObject"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("12345"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\ndata: { classObject:{ 'is-active': false, 'text-danger':true } }\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br")])]),a("p",[a("strong",[t._v("<4>样式三元运算：")])]),t._v(" "),a("div",{staticClass:"language-css line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("style="),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v('"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'color'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" countdown.status ? "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'blue'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'#FCB11C'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v('" '),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("h4",{attrs:{id:"⑥、v-model"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#⑥、v-model"}},[t._v("#")]),t._v(" ⑥、v-model")]),t._v(" "),a("p",[t._v("这个指令用于在表单上创建双向数据绑定"),a("br"),t._v("\nv-model 会忽略所有表单元素的 value、checked、selected 特性的初始值"),a("br"),t._v("\n因为它选择 Vue 实例数据做为具体的值。")]),t._v(" "),a("h4",{attrs:{id:"⑥、v-on"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#⑥、v-on"}},[t._v("#")]),t._v(" ⑥、v-on")]),t._v(" "),a("p",[t._v("v-on 主要用来监听 dom 事件，以便执行一些代码块。表达式可以是一个方法名"),a("br"),t._v("\n简写为：【 @ 】")]),t._v(" "),a("h4",{attrs:{id:"自定义指令："}},[a("a",{staticClass:"header-anchor",attrs:{href:"#自定义指令："}},[t._v("#")]),t._v(" 自定义指令：")]),t._v(" "),a("p",[t._v("有的情况下，需要对普通 DOM 元素进行底层操作，这时候就会用到自定义指令")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("directives"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 局部注册指令")]),t._v("\n  focus"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 指令的定义")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("inserted")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("el")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      el"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("focus")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("input v"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("focus"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 在元素上使用指令")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br")])]),a("p",[a("strong",[t._v("指令注意事项：")])]),t._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),a("ul",[a("li",[t._v("1、当 v-for 和 v-if 处于同一节点，v-for 的优先级比 v-if 更高，永远不要把 v-if 和 v-for 同时用在同一个元素上")]),t._v(" "),a("li",[t._v("2、如果一组 v-if + v-else 的元素类型相同，最好使用 key")])])]),t._v(" "),a("h2",{attrs:{id:"_3、组件间通信"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3、组件间通信"}},[t._v("#")]),t._v(" 3、组件间通信")]),t._v(" "),a("h4",{attrs:{id:"①-父组件-传数据-子组件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#①-父组件-传数据-子组件"}},[t._v("#")]),t._v(" ① 父组件 传数据 子组件")]),t._v(" "),a("p",[t._v("parent.vue:")]),t._v(" "),a("div",{staticClass:"language-html line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("children")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[a("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("v-bind:")]),t._v("toChildData")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("parentSourceData"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("children")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[t._v("children.vue:")]),t._v(" "),a("div",{staticClass:"language-html line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[t._v("props:['toChildData']\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("h4",{attrs:{id:"②-父组件-调用-子组件-方法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#②-父组件-调用-子组件-方法"}},[t._v("#")]),t._v(" ② 父组件 调用 子组件 方法")]),t._v(" "),a("p",[t._v("parent.vue:")]),t._v(" "),a("div",{staticClass:"language-html line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("children")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("ref")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("refChildrenName"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("children")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[t._v("method:")]),t._v(" "),a("div",{staticClass:"language-html line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[t._v("this.$refs.refChildrenName.子组件的方法名()\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("h4",{attrs:{id:"③-子组件-传数据-父组件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#③-子组件-传数据-父组件"}},[t._v("#")]),t._v(" ③ 子组件 传数据 父组件")]),t._v(" "),a("p",[t._v("parent.vue:")]),t._v(" "),a("div",{staticClass:"language-html line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("children")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[a("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("v-on:")]),t._v("fromChild")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("parentMethod"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("children")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[t._v("children.vue:")]),t._v(" "),a("div",{staticClass:"language-html line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[t._v("this.$emit('fromChild',args)\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("h4",{attrs:{id:"④-子组件-调用-父组件方法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#④-子组件-调用-父组件方法"}},[t._v("#")]),t._v(" ④ 子组件 调用 父组件方法")]),t._v(" "),a("p",[t._v("parent.vue:")]),t._v(" "),a("div",{staticClass:"language-html line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("children")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("children")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[t._v("children.vue:")]),t._v(" "),a("div",{staticClass:"language-html line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[t._v("this.$parent.parentMethod(args)\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[t._v("或者在子组件里用$emit 向父组件触发一个事件，父组件监听这个事件就行了")]),t._v(" "),a("div",{staticClass:"language-html line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("child")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("@fatherMethod")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("fatherMethod"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("child")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\nchildMethod() { this.$emit('fatherMethod'); }\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br")])]),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[a("strong",[t._v("非父子组件通信")]),a("br"),t._v("\n①、对于简单的应用，可以实例化一个空 Vue 作为事件中心管理，在组件中，可以使用 $emit, $on, $off 分别来分发、监听、取消监听事件"),a("br"),t._v("\n②、对于大多数复杂应用的话还是使用 vuex\nvue 组件单向数据流")])]),t._v(" "),a("h2",{attrs:{id:"_4、组件上总是必须用-key"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4、组件上总是必须用-key"}},[t._v("#")]),t._v(" 4、组件上总是必须用 key")]),t._v(" "),a("p",[t._v("key 的作用是为了在 diff 算法执行时更快的找到对应的节点，提高 diff 速度。"),a("br"),t._v(" "),a("strong",[t._v("key 一般用每个元素对应固定不变的值，如 id")]),t._v("，对于数组索引 index 由于在插入数据时会变化，不推荐使用"),a("br"),t._v(" "),a("strong",[t._v("注意：有相同父元素的子元素必须有独特的 key。重复的 key 会造成渲染错误，常见于 v-for 循环渲染。")])]),t._v(" "),a("h2",{attrs:{id:"_5、proxy-与-object-defineproperty-对比"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5、proxy-与-object-defineproperty-对比"}},[t._v("#")]),t._v(" 5、Proxy 与 Object.defineProperty 对比")]),t._v(" "),a("p",[t._v("Object.defineProperty 虽然已经能够实现双向绑定了，但是他还是有缺陷的")]),t._v(" "),a("p",[t._v("1、只能对属性进行数据劫持，所以需要深度遍历整个对象"),a("br"),t._v("\n2、对于数组不能监听到数据的变化"),a("br"),t._v("\n3、Proxy 的第二个参数可以有 13 种拦截方法，比 Object.defineProperty() 要更加丰富"),a("br"),t._v("\n4、Proxy 的兼容性不如 Object.defineProperty() 不能使用 polyfill 来处理兼容性\nProxy 能够原生支持监听数组变化，并且可以直接对整个对象进行拦截")]),t._v(" "),a("p",[t._v("所以在 Vue3.0 中使用 Proxy 代替 Object.defineProperty")]),t._v(" "),a("h4",{attrs:{id:"备注：vue2-对数组的监听："}},[a("a",{staticClass:"header-anchor",attrs:{href:"#备注：vue2-对数组的监听："}},[t._v("#")]),t._v(" 备注：vue2 对数组的监听：")]),t._v(" "),a("p",[t._v("Vue 包含一组观察数组的变异方法（改变原数组），所以它们也将会触发视图更新。这些方法如 push()等 7 种："),a("br"),t._v("\n对于非变异方法如 slice()，可以用新数组替换旧数组 arr = arr.slice(1)"),a("br"),t._v("\n由于 JavaScript 的限制，"),a("strong",[t._v("Vue 不能检测以下变动的数组")]),a("br"),t._v("\n1、直接设置一个项时，例如：vm.items[indexOfItem] = newValue"),a("br"),t._v("\n2、修改数组的长度时，例如：vm.items.length = newLength 或者 vm.items.length++"),a("br"),t._v("\n解决方法："),a("br"),t._v("\n对于第一种：Vue.set(vm.items, indexOfItem, newValue) 或者 vm.$set(vm.items, indexOfItem, newValue)"),a("br"),t._v("\n对于第二种：vm.items.splice(newLength)")]),t._v(" "),a("h2",{attrs:{id:"_6、组件的-data-必须是一个函数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_6、组件的-data-必须是一个函数"}},[t._v("#")]),t._v(" 6、组件的 data 必须是一个函数")]),t._v(" "),a("p",[t._v("因为组件是要共享的，但他们的 data 是私有的。\n如果 data 是一个普通的对象，则所有的实例将共享引用同一个数据对象。\n因此组件的 data 必须是一个函数，这样每个实例可以维护一份被返回对象的独立的拷贝")]),t._v(" "),a("h4",{attrs:{id:"注：-在一-vue-的根实例上-data-直接使用对象是可以的"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#注：-在一-vue-的根实例上-data-直接使用对象是可以的"}},[t._v("#")]),t._v(" 注： 在一 Vue 的根实例上 data 直接使用对象是可以的")]),t._v(" "),a("p",[t._v("因为只存在一个这样的实例")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Vue")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    foo"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"bar"')]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br")])]),a("h2",{attrs:{id:"_7、keep-alive"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_7、keep-alive"}},[t._v("#")]),t._v(" 7、keep-alive")]),t._v(" "),a("p",[t._v("vue2.0 提供了一个 keep-alive 组件，\n用来缓存组件,主要用于保留组件状态或避免重新渲染。"),a("br"),t._v(" "),a("strong",[t._v("activated：")]),t._v(" keep-alive 组件激活时调用"),a("br"),t._v(" "),a("strong",[t._v("deactivated：")]),t._v(" keep-alive 组件停用时调用")]),t._v(" "),a("h2",{attrs:{id:"_8、方法-methods-、计算属性-computed-、侦听属性-watch"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_8、方法-methods-、计算属性-computed-、侦听属性-watch"}},[t._v("#")]),t._v(" 8、方法(methods)、计算属性(computed)、侦听属性(watch)")]),t._v(" "),a("p",[t._v("计算属性是基于它们的依赖进行缓存，只有在相关依赖发生改变时它们才会重新求值"),a("br"),t._v("\n缓存的作用：对于性能开销较大的计算不需重复执行"),a("br"),t._v("\n缺点：像 Date.now()的计算属性就不再更新,因为 Date.now() 不是响应式依赖，如果你不希望有缓存，用方法来替代。"),a("br"),t._v("\n计算属性默认只有 getter ，也可以提供一个 setter ：")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("computed"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    comItem"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("get")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("set")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("newval")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 触发顺序：页面首次加载触发get，数据变动时先触发set，然后在触发get")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br")])]),a("h4",{attrs:{id:"methods-vs-computed"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#methods-vs-computed"}},[t._v("#")]),t._v(" methods VS computed")]),t._v(" "),a("p",[t._v("重新计算开销很大的话,选 computed; 不希望有缓存的选 methods")]),t._v(" "),a("h4",{attrs:{id:"computed-vs-watch"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#computed-vs-watch"}},[t._v("#")]),t._v(" computed VS watch")]),t._v(" "),a("p",[t._v("watch 有新旧值两个参数, 计算属性没有,但是计算属性可以从 setter 获得新值，computed 对于多数据变动，watch 适用于一个数据变动，watch 的对象必须事先声明，而 computed 则不用。")]),t._v(" "),a("p",[t._v("computed 主要用于对同步数据的处理，watch 则主要用于观测某个值的变化去完成一段开销较大的复杂业务逻辑，能用 computed 的时候优先用 computed，避免了多个数据影响其中某个数据时多次调用 watch 的尴尬情况。")]),t._v(" "),a("h2",{attrs:{id:"_9、过滤器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_9、过滤器"}},[t._v("#")]),t._v(" 9、过滤器")]),t._v(" "),a("p",[t._v("过滤器可以用在两个地方：双花括号插值和 v-bind 表达式 (后者从 2.1.0+ 开始支持)。过滤器应该被添加在 JavaScript 表达式的尾部，由“管道”符号指示：")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),t._v(" 在双花括号中 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" message "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" capitalize "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),t._v(" 在 "),a("span",{pre:!0,attrs:{class:"token template-string"}},[a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("v-bind")]),a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),t._v(" 中 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("div v"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("bind"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("id"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"rawId | formatId"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("div"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n\nfilters"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("capitalize")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("value")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("value"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("''")]),t._v("\n    value "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" value"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("toString")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" value"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("charAt")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("toUpperCase")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" value"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("slice")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br")])])])}),[],!1,null,null,null);s.default=e.exports}}]);