(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{349:function(t,a,s){"use strict";s.r(a);var n=s(13),e=Object(n.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"_1、nuxt-js-概念"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1、nuxt-js-概念"}},[t._v("#")]),t._v(" 1、Nuxt.js 概念")]),t._v(" "),a("h3",{attrs:{id:"_1-1、nuxt-js-是什么"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-1、nuxt-js-是什么"}},[t._v("#")]),t._v(" 1-1、Nuxt.js 是什么？")]),t._v(" "),a("p",[t._v("基于 Vue.js 的全栈框架，提供开箱即用的服务端渲染（SSR）、静态站点生成（SSG）、API 路由等功能。")]),t._v(" "),a("p",[t._v("核心目标：简化 Vue 应用的开发流程，提升 SEO 和首屏加载性能。")]),t._v(" "),a("h3",{attrs:{id:"_1-2、核心特性"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-2、核心特性"}},[t._v("#")]),t._v(" 1-2、核心特性")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("服务端渲染（SSR）：服务器生成 HTML 发送到客户端。")])]),t._v(" "),a("li",[a("p",[t._v("静态站点生成（SSG）：预渲染页面为静态 HTML。")])]),t._v(" "),a("li",[a("p",[t._v("自动路由：基于 pages/ 目录结构生成路由。")])]),t._v(" "),a("li",[a("p",[t._v("模块化：通过模块扩展功能（如 Axios、Auth、Tailwind 等）。")])]),t._v(" "),a("li",[a("p",[t._v("开发友好：热更新、TypeScript 支持、Vite 集成（Nuxt 3+）。")])])]),t._v(" "),a("h2",{attrs:{id:"_2、asyncdata-和-fetch-的区别"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2、asyncdata-和-fetch-的区别"}},[t._v("#")]),t._v(" 2、asyncData 和 fetch 的区别")]),t._v(" "),a("p",[t._v("asyncData：仅用于页面组件，在服务端渲染阶段运行，返回的数据会合并到组件 data 中。")]),t._v(" "),a("p",[t._v("fetch：可用于页面或组件，支持客户端和服务端执行，通常用于填充 Vuex 状态（Nuxt 2）")]),t._v(" "),a("p",[t._v("Nuxt 3：推荐使用 useFetch 或 useAsyncData（基于 Composition API）")]),t._v(" "),a("h2",{attrs:{id:"_3、在-nuxt-中实现全局状态管理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3、在-nuxt-中实现全局状态管理"}},[t._v("#")]),t._v(" 3、在 Nuxt 中实现全局状态管理")]),t._v(" "),a("p",[t._v("Nuxt 2：默认集成 Vuex，通过 store/ 目录自动注册模块。")]),t._v(" "),a("p",[t._v("Nuxt 3：推荐使用 Pinia（需手动安装），或轻量级方案 useState（基于 Composition API）。")]),t._v(" "),a("h2",{attrs:{id:"_4、如何优化-nuxt-应用的-seo"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4、如何优化-nuxt-应用的-seo"}},[t._v("#")]),t._v(" 4、如何优化 Nuxt 应用的 SEO？")]),t._v(" "),a("p",[t._v("使用 useHead（Nuxt 3）或 head() 方法配置页面标题、描述、结构化数据。")]),t._v(" "),a("p",[t._v("服务端渲染（SSR）或静态生成（SSG）确保爬虫可抓取完整内容。")]),t._v(" "),a("p",[t._v("合理使用 meta 标签和 Open Graph 协议。")]),t._v(" "),a("h2",{attrs:{id:"_5、nuxt-模块的作用是什么"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5、nuxt-模块的作用是什么"}},[t._v("#")]),t._v(" 5、Nuxt 模块的作用是什么")]),t._v(" "),a("p",[t._v("Nuxt 模块用于扩展框架功能，例如：")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("@nuxtjs/axios：封装 HTTP 请求，支持服务端和客户端调用。")])]),t._v(" "),a("li",[a("p",[t._v("@nuxt/image：自动优化图片（压缩、懒加载、适配多分辨率）。")])]),t._v(" "),a("li",[a("p",[t._v("配置方式：在 nuxt.config.js 的 modules 数组中引入。")])])]),t._v(" "),a("h2",{attrs:{id:"_6、如何实现-nuxt-应用的性能优化"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_6、如何实现-nuxt-应用的性能优化"}},[t._v("#")]),t._v(" 6、如何实现 Nuxt 应用的性能优化")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("代码拆分：利用 Nuxt 自动按页面拆分代码的特性。")])]),t._v(" "),a("li",[a("p",[t._v("静态缓存：对不常变动的页面使用 nuxt generate 生成静态 HTML。")])]),t._v(" "),a("li",[a("p",[t._v("图片优化：通过 @nuxt/image 实现懒加载和格式转换。")])]),t._v(" "),a("li",[a("p",[t._v("CDN 加速：配置 publicPath 指向 CDN 地址。")])])]),t._v(" "),a("h2",{attrs:{id:"_7、如何在-nuxt-中处理服务端和客户端环境差异"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_7、如何在-nuxt-中处理服务端和客户端环境差异"}},[t._v("#")]),t._v(" 7、如何在 Nuxt 中处理服务端和客户端环境差异")]),t._v(" "),a("ul",[a("li",[t._v("使用 process.client 或 process.server 判断当前环境。")])]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("process"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("client"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("window"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("innerWidth"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br")])]),a("ul",[a("li",[t._v("避免在 asyncData 中使用浏览器 API（如 window），可在 mounted 生命周期或客户端钩子中调用。")])])])}),[],!1,null,null,null);a.default=e.exports}}]);