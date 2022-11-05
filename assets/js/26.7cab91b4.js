(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{327:function(a,t,s){"use strict";s.r(t);var e=s(13),r=Object(e.a)({},(function(){var a=this,t=a._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h2",{attrs:{id:"_1-doctype-作用-标准模式与兼容模式各有什么区别"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-doctype-作用-标准模式与兼容模式各有什么区别"}},[a._v("#")]),a._v(" 1. Doctype 作用 标准模式与兼容模式各有什么区别")]),a._v(" "),t("ul",[t("li",[a._v("\n<!DOCTYPE>声明位于HTML文档中的第一行，处于html标签之前。告知浏览器的解析器用什么文档标准解析这个文档。DOCTYPE不存在或格式不正确会导致文档以兼容模式呈现\n")]),a._v(" "),t("li",[t("p",[a._v("标准模式的排版 和 JS 运作模式都是以该浏览器支持的最高标准运行。在兼容模式中，页面以宽松的向后兼容的方式显示,模拟老式浏览器的行为以防止站点无法工作")])])]),a._v(" "),t("h2",{attrs:{id:"_2-html5-为什么只需要写"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-html5-为什么只需要写"}},[a._v("#")]),a._v(" 2. HTML5 为什么只需要写 <!DOCTYPE HTML>")]),a._v(" "),t("ul",[t("li",[t("p",[a._v("HTML5 不基于 SGML，因此不需要对 DTD 进行引用，但是需要 doctype 来规范浏览器的行为（让浏览器按照它们应该的方式来运行）")])]),a._v(" "),t("li",[t("p",[a._v("而 HTML4.01 基于 SGML,所以需要对 DTD 进行引用，才能告知浏览器文档所使用的文档类型")])])]),a._v(" "),t("p",[t("strong",[a._v("HTML4写法")])]),a._v(" "),t("div",{staticClass:"language-html line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-html"}},[t("code",[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("html")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("xmlns")]),t("span",{pre:!0,attrs:{class:"token attr-value"}},[t("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')]),a._v("http://www.w3.org/1999/xhtml"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')])]),a._v(" "),t("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("lang")]),t("span",{pre:!0,attrs:{class:"token attr-value"}},[t("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')]),a._v("zh-CN"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')])]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v(" \n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("p",[t("strong",[a._v("HTML5写法")])]),a._v(" "),t("div",{staticClass:"language-html line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-html"}},[t("code",[t("span",{pre:!0,attrs:{class:"token doctype"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<!")]),t("span",{pre:!0,attrs:{class:"token doctype-tag"}},[a._v("DOCTYPE")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token name"}},[a._v("html")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("h2",{attrs:{id:"_3-html5-新增了哪些内容或-api"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-html5-新增了哪些内容或-api"}},[a._v("#")]),a._v(" 3.HTML5 新增了哪些内容或 API")]),a._v(" "),t("p",[a._v("(1)绘画 canvas"),t("br"),a._v("\n(2)用于媒介回放的 video 和 audio 元素"),t("br"),a._v("\n(3)本地离线存储 localStorage 长期存储数据，浏览器关闭后数据不丢失"),t("br"),a._v("\n(4)sessionStorage 的数据在浏览器关闭后自动删除"),t("br"),a._v("\n(5)语意化更好的内容元素，比如 article、footer、header、nav、section"),t("br"),a._v("\n(6)表单控件，calendar、date、time、email、url、search"),t("br"),a._v("\n(7)新增 Geolocation API，可以通过浏览器获取用户的地理位置")]),a._v(" "),t("h2",{attrs:{id:"_4-对浏览器内核的理解"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-对浏览器内核的理解"}},[a._v("#")]),a._v(" 4.对浏览器内核的理解")]),a._v(" "),t("p",[a._v("主要分成两部分：渲染引擎(layout engineer 或 Rendering Engine)和 JS 引擎。")]),a._v(" "),t("p",[a._v("渲染引擎：负责取得网页的内容（HTML、XML、图像等等）、整理讯息（例如加入 CSS 等），以及计算网页的显示方式，然后会输出至显示器或打印机。浏览器的内核的不同对于网页的语法解释会有不同，所以渲染的效果也不相同。所有网页浏览器、电子邮件客户端以及其它需要编辑、显示网络内容的应用程序都需要内核。")]),a._v(" "),t("p",[a._v("JS 引擎：解析和执行 javascript 来实现网页的动态效果。")]),a._v(" "),t("p",[a._v("最开始渲染引擎和 JS 引擎并没有区分的很明确，后来 JS 引擎越来越独立，内核就倾向于只指渲染引擎。")]),a._v(" "),t("h2",{attrs:{id:"_5-对-html-语义化的理解"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_5-对-html-语义化的理解"}},[a._v("#")]),a._v(" 5.对 HTML 语义化的理解")]),a._v(" "),t("p",[a._v("用正确的标签做正确的事情"),t("br"),a._v("\nhtml 语义化让页面的内容结构化，结构更清晰，便于对浏览器、搜索引擎解析"),t("br"),a._v("\n即使在没有样式 CSS 情况下也以一种文档格式显示，并且是容易阅读的"),t("br"),a._v("\n搜索引擎的爬虫也依赖于 HTML 标记来确定上下文和各个关键字的权重，利于 SEO"),t("br"),a._v("\n使阅读源代码的人对网站更容易将网站分块，便于阅读维护理解")]),a._v(" "),t("h2",{attrs:{id:"_6-cookies-sessionstorage-和-localstorage-的区别"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_6-cookies-sessionstorage-和-localstorage-的区别"}},[a._v("#")]),a._v(" 6.cookies，sessionStorage 和 localStorage 的区别")]),a._v(" "),t("p",[t("strong",[a._v("共同点：都是保存在浏览器端，且同源的")])]),a._v(" "),t("p",[a._v(" cookie 数据始终在同源的 http 请求中携带（即使不需要），即 cookie 在浏览器和服务器间来回传递"),t("br"),a._v("\n 而 sessionStorage 和 localStorage 不会自动把数据发给服务器，仅在本地保存"),t("br"),a._v("\n cookie 数据还有路径（path）的概念，可以限制 cookie 只属于某个路径下")]),a._v(" "),t("h4",{attrs:{id:"存储大小限制不同"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#存储大小限制不同"}},[a._v("#")]),a._v(" 存储大小限制不同:")]),a._v(" "),t("p",[a._v(" 存储大小限制也不同，cookie 数据不能超过 4k，同时因为每次 http 请求都会携带 cookie，所以 cookie 只适合保存很小的数据，如会话标识\n sessionStorage 和 localStorage 虽然也有存储大小的限制，但比 cookie 大得多，可以达到 5M 或更大")]),a._v(" "),t("h4",{attrs:{id:"数据有效期不同"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#数据有效期不同"}},[a._v("#")]),a._v(" 数据有效期不同:")]),a._v(" "),t("p",[a._v(" sessionStorage：仅在当前浏览器窗口关闭前有效，自然也就不可能持久保持  localStorage：始终有效，窗口或浏览器关闭也一直保存，因此用作持久数据"),t("br"),a._v("\n cookie 只在设置的 cookie 过期时间之前一直有效，即使窗口或浏览器关闭")]),a._v(" "),t("h4",{attrs:{id:"作用域不同"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#作用域不同"}},[a._v("#")]),a._v(" 作用域不同:")]),a._v(" "),t("p",[a._v(" sessionStorage 不在不同的浏览器窗口中共享，即使是同一个页面"),t("br"),a._v("\n localStorage 在所有同源窗口中都是共享的"),t("br"),a._v("\n cookie 也是在所有同源窗口中都是共享的"),t("br"),a._v("\n Web Storage 支持事件通知机制，可以将数据更新的通知发送给监听者"),t("br"),a._v("\n Web Storage 的 api 接口使用更方便")]),a._v(" "),t("h2",{attrs:{id:"_7-重绘与回流"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_7-重绘与回流"}},[a._v("#")]),a._v(" 7.重绘与回流")]),a._v(" "),t("ul",[t("li",[a._v("渲染树的结点发生了结构性变化, 例如宽度、高度或者位置上的变化时，那么会触发 Reflow(回流)")]),a._v(" "),t("li",[a._v("渲染树结点发生了非结构性变化，例如背景色等的变化时，那么会触发 Repaint(重绘)")])]),a._v(" "),t("p",[t("code",[a._v("display:none")]),a._v("隐藏一个结点会导致 repaint 与 reflow"),t("br"),a._v(" "),t("code",[a._v("visibility:hidden")]),a._v("进行 dom 隐藏仅仅导致 repaint(没有结构性变化，仅仅看不见而已)"),t("br"),a._v("\n Reflow 的成本比 Repaint 的成本高得多的多")]),a._v(" "),t("p",[t("strong",[a._v("回流必定会发生重绘，重绘不一定会引发回流。")])]),a._v(" "),t("h3",{attrs:{id:"减少重绘和回流的方式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#减少重绘和回流的方式"}},[a._v("#")]),a._v(" 减少重绘和回流的方式")]),a._v(" "),t("p",[a._v("1、避免使用 table 布局；"),t("br"),a._v("\n2、将动画效果应用到 position 属性为 absolute 或 fixed 的元素上，避免影 响其他元素的布局"),t("br"),a._v("\n3、避免频繁操作样式，修改 class 最好"),t("br"),a._v("\n4、避免频繁操作 DOM，合并多次修改为一次")]),a._v(" "),t("h2",{attrs:{id:"_8-canvas-和-svg-的区别是什么"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_8-canvas-和-svg-的区别是什么"}},[a._v("#")]),a._v(" 8.Canvas 和 SVG 的区别是什么")]),a._v(" "),t("ul",[t("li",[t("p",[a._v("canvas是H5中新增的标签，是一块画布")])]),a._v(" "),t("li",[t("p",[a._v("svg即可缩放矢量图形，放大或者缩小不会失真的图形")])])]),a._v(" "),t("p",[t("strong",[a._v("相同点")])]),a._v(" "),t("p",[a._v("都是主要用来画 2D 图形的。")]),a._v(" "),t("p",[t("strong",[a._v("不同点")])]),a._v(" "),t("p",[a._v("1、Canvas 画的是位图，SVG 画的是矢量图"),t("br"),a._v("\n2、SVG绘图时，每个图形都是以DOM节点的形式插入到页面中的；1、Canvas只有Canvas元素")])])}),[],!1,null,null,null);t.default=r.exports}}]);