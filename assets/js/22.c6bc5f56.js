(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{272:function(t,s,a){t.exports=a.p+"assets/img/W3C-box-model.992239bf.png"},340:function(t,s,a){"use strict";a.r(s);var n=a(13),r=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"_1-css-盒子模型"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-css-盒子模型"}},[t._v("#")]),t._v(" 1. CSS 盒子模型")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("IE 盒子模型 (border-box)")])]),t._v(" "),s("li",[s("p",[t._v("标准 W3C 盒子模型 (content-box)")])])]),t._v(" "),s("p",[t._v("其中 IE 的 width 部分包含了 "),s("code",[t._v("border")]),t._v(" 和 "),s("code",[t._v("padding")])]),t._v(" "),s("p",[s("img",{attrs:{src:a(272),alt:"W3C-盒子模型"}})]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),s("p",[t._v("如何通过 css 切换盒子模型(通过 css3 的 box-sizing 属性)"),s("br"),t._v("\nbox-sizing：border-box (IE 盒子模型)"),s("br"),t._v("\nbox-sizing：content-box (W3C 盒子模型)")])]),t._v(" "),s("h2",{attrs:{id:"_2-css-中-link-和-import-的区别"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-css-中-link-和-import-的区别"}},[t._v("#")]),t._v(" 2. CSS 中 link 和@import 的区别")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("link 属于 HTML 标签，而@import 是 CSS 提供的")])]),t._v(" "),s("li",[s("p",[t._v("页面被加载的时，link 会同时被加载，"),s("strong",[t._v("而@import 引用的 CSS 会等到页面被加载完再加载")])])]),t._v(" "),s("li",[s("p",[t._v("import 只在 IE5 以上才能识别，而 link 是 HTML 标签，无兼容问题")])]),t._v(" "),s("li",[s("p",[t._v("link 方式的样式的权重 高于@import 的权重")])])]),t._v(" "),s("h2",{attrs:{id:"_3-css-选择符、属性继承、优先级算法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-css-选择符、属性继承、优先级算法"}},[t._v("#")]),t._v(" 3. CSS 选择符、属性继承、优先级算法")]),t._v(" "),s("ul",[s("li",[t._v("id 选择器（ # myid）")]),t._v(" "),s("li",[t._v("类选择器（.myclassname）")]),t._v(" "),s("li",[t._v("标签选择器（div, h1, p）")]),t._v(" "),s("li",[t._v("相邻选择器（h1 + p）")]),t._v(" "),s("li",[t._v("子选择器（ul > li）")]),t._v(" "),s("li",[t._v("后代选择器（li a）")]),t._v(" "),s("li",[t._v("通配符选择器（ * ）")]),t._v(" "),s("li",[t._v('属性选择器（a[rel = "external"]）')]),t._v(" "),s("li",[t._v("伪类选择器（a: hover, li:nth-child）")])]),t._v(" "),s("p",[t._v("可继承的样式： font-size font-family color, text-indent 等"),s("br"),t._v("\n不可继承的样式：border padding margin width height 等")]),t._v(" "),s("p",[s("strong",[t._v("优先级为: !important > 内联 > id > class > tag > 通配符 > 继承")])]),t._v(" "),s("p",[t._v("4 个等级的定义如下：")]),t._v(" "),s("ul",[s("li",[t._v('第一等级：代表内联样式，如 style=""，权值为 1000')]),t._v(" "),s("li",[t._v("第二等级：代表 id 选择器，如#content，权值为 100")]),t._v(" "),s("li",[t._v("第三等级：代表类，伪类和属性选择器，如.content，权值为 10")]),t._v(" "),s("li",[t._v("第四等级：代表标签选择器和伪元素选择器，如 div p，权值为 1")]),t._v(" "),s("li",[t._v("注意：通用选择器（*），子选择器（>），和相邻同胞选择器（+）并不在这个等级中，所以他们的权值为 0")])]),t._v(" "),s("h2",{attrs:{id:"_4-css-伪类和伪元素"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-css-伪类和伪元素"}},[t._v("#")]),t._v(" 4. CSS 伪类和伪元素")]),t._v(" "),s("h4",{attrs:{id:"css-伪元素-用于向某些选择器设置特殊效果"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#css-伪元素-用于向某些选择器设置特殊效果"}},[t._v("#")]),t._v("   CSS 伪元素：(用于向某些选择器设置特殊效果)")]),t._v(" "),s("ul",[s("li",[t._v(":first-letter 向文本的第一个字母添加特殊样式")]),t._v(" "),s("li",[t._v(":after 在元素之后添加内容")])]),t._v(" "),s("h4",{attrs:{id:"css-伪类-用于向某些选择器添加特殊的效果"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#css-伪类-用于向某些选择器添加特殊的效果"}},[t._v("#")]),t._v("   CSS 伪类：(用于向某些选择器添加特殊的效果)")]),t._v(" "),s("ul",[s("li",[t._v(":focus 向拥有键盘输入焦点的元素添加样式")]),t._v(" "),s("li",[t._v(":hover 当鼠标悬浮在元素上方时，向元素添加样式")])]),t._v(" "),s("h2",{attrs:{id:"_5-position-的值"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_5-position-的值"}},[t._v("#")]),t._v(" 5. Position 的值")]),t._v(" "),s("ul",[s("li",[t._v("static 默认值。\n没有定位，元素出现在正常的流中（忽略 top, bottom, left, right z-index 声明）。")]),t._v(" "),s("li",[t._v("relative\n生成相对定位的元素，相对于其在普通流中的位置进行定位。")]),t._v(" "),s("li",[t._v("absolute\n生成绝对定位的元素，相对于 非 static 定位的第一个祖先元素进行定位。"),s("br"),t._v("\n如果没有非 static 定位的祖先元素则相对于 body 进行定位")]),t._v(" "),s("li",[t._v("fixed （老 IE 不支持）\n生成绝对定位的元素，相对于浏览器窗口进行定位。")]),t._v(" "),s("li",[t._v("inherit\n规定从父元素继承 position 属性的值。")]),t._v(" "),s("li",[t._v("sticky（CSS3、浏览器兼容差）\n粘性定位可以被认为是相对定位和固定定位的混合。\n元素在跨越特定阈值前为相对定位，之后为固定定位")])]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),s("p",[t._v("在 position 设置为 fixed 或者 absolute 的时候，元素会脱离文档流，此时对于行内元素(inline)来说可以设置宽高")])]),t._v(" "),s("h2",{attrs:{id:"_6-css-浮动及其危害和解决方法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_6-css-浮动及其危害和解决方法"}},[t._v("#")]),t._v(" 6. CSS 浮动及其危害和解决方法")]),t._v(" "),s("h4",{attrs:{id:"float-属性定义元素在哪个方向浮动"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#float-属性定义元素在哪个方向浮动"}},[t._v("#")]),t._v(" float 属性定义元素在哪个方向浮动")]),t._v(" "),s("p",[s("strong",[t._v("危害")]),t._v("：浮动主要造成了父元素高度塌陷，以至于父元素很多像背景颜色，边框等都不能正确的显示出来以及影响了同级元素的位置")]),t._v(" "),s("p",[t._v("解决方法：")]),t._v(" "),s("ul",[s("li",[t._v("给父元素定义高度")]),t._v(" "),s("li",[t._v("给父元素加上 overflow：hidden")]),t._v(" "),s("li",[t._v("给父元素加上 overflow：auto")]),t._v(" "),s("li",[t._v("给父元素加上 display: table")]),t._v(" "),s("li",[t._v("在最后一个子元素上加一个 div，使用 clear：both")]),t._v(" "),s("li",[t._v("父元素定义伪类：after")]),t._v(" "),s("li",[t._v("形成一个 BFC")])]),t._v(" "),s("h2",{attrs:{id:"_7-block、-inline-和-inline-block-的区别"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_7-block、-inline-和-inline-block-的区别"}},[t._v("#")]),t._v(" 7. block、 inline 和 inline-block 的区别")]),t._v(" "),s("p",[t._v("块状元素： 如 "),s("code",[t._v("div - display：block")]),s("br"),t._v("\n行内元素： 如 "),s("code",[t._v("span - display：inline")]),s("br"),t._v("\n内块块元素：如 "),s("code",[t._v("input - display：inline-block")])]),t._v(" "),s("h5",{attrs:{id:"块状元素特征"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#块状元素特征"}},[t._v("#")]),t._v(" 块状元素特征：")]),t._v(" "),s("ul",[s("li",[t._v("能够识别宽高")]),t._v(" "),s("li",[t._v("margin 和 padding 的上下左右均对其有效")]),t._v(" "),s("li",[t._v("可以自动换行")]),t._v(" "),s("li",[t._v("多个块状元素标签写在一起，默认排列方式为从上至下")])]),t._v(" "),s("h5",{attrs:{id:"行内元素特征"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#行内元素特征"}},[t._v("#")]),t._v(" 行内元素特征：")]),t._v(" "),s("ul",[s("li",[t._v("设置宽高无效")]),t._v(" "),s("li",[t._v("对 margin 仅设置左右方向有效，上下无效；padding 设置上下左右都有效，即会撑大空间。在 IE7 的时候，padding-top 和 padding-bottom 无效")]),t._v(" "),s("li",[t._v("不自动换行")])]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),s("p",[t._v("对于行内元素(display：inline)，在 position 设置为 fixed、absolute 或者 float 的时候，元素会脱离文档流，此时对于行内元素来说可以设置宽高")])]),t._v(" "),s("h5",{attrs:{id:"行内块状元素特征"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#行内块状元素特征"}},[t._v("#")]),t._v(" 行内块状元素特征：")]),t._v(" "),s("ul",[s("li",[t._v("不自动换行")]),t._v(" "),s("li",[t._v("能够识别宽高")]),t._v(" "),s("li",[t._v("默认排列方式为从左到右")])]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),s("p",[t._v("对于行内块状元素(inline-block)，在设置了 display:inline-block 属性后，垂直 margin 不会重叠，甚至和他们的子元素之间也是一样。")])]),t._v(" "),s("h2",{attrs:{id:"_8-css-单位"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_8-css-单位"}},[t._v("#")]),t._v(" 8. CSS 单位")]),t._v(" "),s("ul",[s("li",[t._v("px：绝对单位，页面按精确像素展示")]),t._v(" "),s("li",[t._v("em：相对单位，基准点为父节点字体的大小，如果自身定义了 font-size 按自身来计算（浏览器默认字体是 16px），整个页面内 1em 不是一个固定的值")]),t._v(" "),s("li",[t._v("rem：相对单位，可理解为”root em”, 相对根节点 html 的字体大小来计算，CSS3 新加属性，chrome/firefox/IE9+支持")]),t._v(" "),s("li",[t._v("vw：viewpoint width，视窗宽度，1vw 等于视窗宽度的 1%")]),t._v(" "),s("li",[t._v("vh：viewpoint height，视窗高度，1vh 等于视窗高度的 1%")]),t._v(" "),s("li",[t._v("%:百分比")]),t._v(" "),s("li",[t._v("cm:厘米")]),t._v(" "),s("li",[t._v("mm:毫米")])]),t._v(" "),s("h2",{attrs:{id:"_9-display-none-和-visibility-hidden-区别"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_9-display-none-和-visibility-hidden-区别"}},[t._v("#")]),t._v(" 9. display none 和 visibility hidden 区别")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("display:none")]),t._v(" 在文档流中不占据位置; 会导致 repaint 与 reflow")]),t._v(" "),s("li",[s("code",[t._v("visibility:hidden")]),t._v(" 在文档流中依然会占据位置，仅仅导致 repaint(没有结构性变化，仅仅看不见而已)")])]),t._v(" "),s("h2",{attrs:{id:"_10-inline-inline-block-元素间隙"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_10-inline-inline-block-元素间隙"}},[t._v("#")]),t._v(" 10.inline/inline-block 元素间隙")]),t._v(" "),s("p",[t._v("在一行中，如果存在两个 inline 或者 inline-block 元素，这两个元素之间会存在一定的间隙"),s("br"),t._v("\n这个间隙是由换行或者回车导致的"),s("br"),t._v("\n去除间隙的方法：")]),t._v(" "),s("h4",{attrs:{id:"方法一、元素间的间隙出现的原因-是元素标签之间的空格-把空格去掉间隙就会消失"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#方法一、元素间的间隙出现的原因-是元素标签之间的空格-把空格去掉间隙就会消失"}},[t._v("#")]),t._v(" 方法一、元素间的间隙出现的原因，是元素标签之间的空格，把空格去掉间隙就会消失")]),t._v(" "),s("div",{staticClass:"language-html line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("span")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("1"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("span")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("span")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("2"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("span")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("h4",{attrs:{id:"方法二-利用-html-注释标签"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#方法二-利用-html-注释标签"}},[t._v("#")]),t._v(" 方法二： 利用 HTML 注释标签")]),t._v(" "),s("div",{staticClass:"language-html line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("span")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("1"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("span")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- \n--\x3e")]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("span")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("2"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("span")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br")])]),s("h4",{attrs:{id:"方法三-取消标签闭合-不推荐-会有问题"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#方法三-取消标签闭合-不推荐-会有问题"}},[t._v("#")]),t._v(" 方法三： 取消标签闭合（不推荐，会有问题）")]),t._v(" "),s("div",{staticClass:"language-html line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("demo"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("span")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("1\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("span")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("2\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br")])]),s("h4",{attrs:{id:"方法四-在父容器上使用-font-size-0-可以消除间隙"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#方法四-在父容器上使用-font-size-0-可以消除间隙"}},[t._v("#")]),t._v(" 方法四： 在父容器上使用 font-size:0;可以消除间隙")]),t._v(" "),s("div",{staticClass:"language-html line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("demo"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("span")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("1"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("span")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("span")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("2"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("span")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br")])]),s("div",{staticClass:"language-css line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-css"}},[s("code",[s("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".demo")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("font-size")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 0"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".demo span")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("font-size")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 18px"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br")])]),s("h2",{attrs:{id:"_11-css-元素居中方法归纳"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_11-css-元素居中方法归纳"}},[t._v("#")]),t._v(" 11. CSS 元素居中方法归纳")]),t._v(" "),s("blockquote",[s("p",[t._v("水平和垂直方向都可居中")])]),t._v(" "),s("p",[t._v("统一 HTML 代码：")]),t._v(" "),s("div",{staticClass:"language-html line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("outer"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("inner"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br")])]),s("p",[t._v("相同的 css 代码抽取：")]),t._v(" "),s("div",{staticClass:"language-css line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-css"}},[s("code",[s("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".inner")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("width")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 50px"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("height")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 50px"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("background-color")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" aqua"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".outer")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("border")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 1px solid black"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br")])]),s("h4",{attrs:{id:"_1、margin-auto-绝对定位"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1、margin-auto-绝对定位"}},[t._v("#")]),t._v(" ①、margin:auto && 绝对定位")]),t._v(" "),s("div",{staticClass:"language-css line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-css"}},[s("code",[s("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".inner")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("position")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" absolute"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("left")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 0"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("right")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 0"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("top")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 0"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("bottom")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 0"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("margin")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" auto"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".outer")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("position")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" relative"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("width")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 100px"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("height")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 100px"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br"),s("span",{staticClass:"line-number"},[t._v("12")]),s("br"),s("span",{staticClass:"line-number"},[t._v("13")]),s("br")])]),s("blockquote",[s("p",[t._v("注意点：\n①、absolute 生成绝对定位的元素，相对于 static 定位以外的第一个父元素进行定位。\ninner 设置了 absolute 定位，所以要在 outer 设置 relative，这样才能相对于 outer 进行相对定位，否则相对于 body 定位，因为默认是 static 定位。\nleft、right 等不一定要设置为 0，只要 left 和 right 的值相等，即可实现水平居中。\n同理，top 和 bottom 的值相等，即可实现垂直居中。")])]),t._v(" "),s("h4",{attrs:{id:"_2、margin-负值-相对定位"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2、margin-负值-相对定位"}},[t._v("#")]),t._v(" ②、margin 负值 && 相对定位")]),t._v(" "),s("div",{staticClass:"language-css line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-css"}},[s("code",[s("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".inner")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("position")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" relative"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("top")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 50%"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("left")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 50%"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("margin")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" -25px 0 0 -25px"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* 外边距为自身宽高的一半 */")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br")])]),s("blockquote",[s("p",[t._v("注意点："),s("br"),t._v("\n①、inner 元素要设为 relative"),s("br"),t._v("\n②、margin 外边距为自身宽高的一半（负数）")])]),t._v(" "),s("h4",{attrs:{id:"_3、css3-transform-属性"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3、css3-transform-属性"}},[t._v("#")]),t._v(" ③、CSS3 transform 属性")]),t._v(" "),s("div",{staticClass:"language-css line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-css"}},[s("code",[s("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".inner")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("position")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" relative"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("top")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 50%"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("left")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 50%"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("transform")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("translate")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("-50%"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" -50%"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br")])]),s("blockquote",[s("p",[t._v("注意点："),s("br"),t._v("\n①、inner 元素要设为 relative"),s("br"),t._v("\n②、transform 属性向元素应用 2D 或 3D 转换，translate(x,y) 定义 2D 转换")])]),t._v(" "),s("h4",{attrs:{id:"_4、css3-flex-布局"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4、css3-flex-布局"}},[t._v("#")]),t._v(" ④、css3 flex 布局")]),t._v(" "),s("div",{staticClass:"language-css line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-css"}},[s("code",[s("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".outer")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("display")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" flex"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("align-items")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" center"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* 垂直居中 */")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("justify-content")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" center"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* 水平居中 */")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br")])]),s("h2",{attrs:{id:"_12-bfc-block-formatting-context"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_12-bfc-block-formatting-context"}},[t._v("#")]),t._v(" 12. BFC (Block formatting context)")]),t._v(" "),s("h3",{attrs:{id:"块级格式化上下文"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#块级格式化上下文"}},[t._v("#")]),t._v(" 块级格式化上下文")]),t._v(" "),s("h4",{attrs:{id:"bfc-作用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#bfc-作用"}},[t._v("#")]),t._v(" BFC 作用：")]),t._v(" "),s("p",[s("strong",[t._v("1.阻止外边距重叠")]),s("br"),t._v("\n  常规流布局时，盒子都是垂直排列，两者之间的间距由各自的外边距所决定，但不是二者外边距之和"),s("br"),t._v("\n  若两个相邻元素在不同的 BFC 中，就能避免外边距折叠"),s("br"),t._v("\n  同时也可以利用 display：inline-block 来阻止外边距重叠")]),t._v(" "),s("p",[s("strong",[t._v("2.解决浮动问题")]),s("br"),t._v("\n  浮动元素是会脱离文档流的，浮动主要造成了父元素高度塌陷，以至于父元素很多像背景颜色，边框等都不能正确的显示出来"),s("br"),t._v("\n  我们解决浮动的问题由很多，比如给父元素添加高度，或者添加一个子元素使用 clear:both 属性"),s("br"),t._v("\n  大部分都是使用伪类 after 属性来解决"),s("br"),t._v("\n  由于计算 BFC 的高度时，浮动元素也参与计算"),s("br"),t._v("\n  对容器创建 BFC，这样也可以解决浮动问题")]),t._v(" "),s("p",[s("strong",[t._v("3.自适应两栏布局")]),s("br"),t._v("\n  由于 BFC 的区域不会与 float box 重叠"),s("br"),t._v("\n  所以对另外不浮动元素创建 BFC 即可")]),t._v(" "),s("h4",{attrs:{id:"bfc-布局规则"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#bfc-布局规则"}},[t._v("#")]),t._v(" BFC 布局规则：")]),t._v(" "),s("p",[t._v("1.内部的 Box 会在垂直方向，一个接一个地放置"),s("br"),t._v("\n2.Box 垂直方向的距离由 margin 决定。属于同一个 BFC 的两个相邻 Box 的 margin 会发生重叠"),s("br"),t._v("\n3.每个元素的 margin box 的左边， 与包含块 border box 的左边相接触(对于从左往右的格式化，否则相反)。即使存在浮动也是如此"),s("br"),t._v("\n4.BFC 的区域不会与 float box 重叠"),s("br"),t._v("\n5.BFC 就是页面上的一个隔离的独立容器，容器里面的子元素不会影响到外面的元素。反之也如此"),s("br"),t._v("\n6.计算 BFC 的高度时，浮动元素也参与计算")]),t._v(" "),s("h4",{attrs:{id:"形成-bfc-的条件只需要满足以下任一条件即可"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#形成-bfc-的条件只需要满足以下任一条件即可"}},[t._v("#")]),t._v(" 形成 BFC 的条件只需要满足以下任一条件即可")]),t._v(" "),s("p",[t._v("1、根元素"),s("br"),t._v("\n2、float 的值不是 none。"),s("br"),t._v("\n3、position 的值不是 static 或者 relative。"),s("br"),t._v("\n4、display 的值是 inline-block、table-cell、flex、table-caption 或者 inline-flex"),s("br"),t._v("\n5、overflow 的值不是 visible")]),t._v(" "),s("h2",{attrs:{id:"_13-css3新增的特性"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_13-css3新增的特性"}},[t._v("#")]),t._v(" 13. CSS3新增的特性")]),t._v(" "),s("p",[t._v("border-radius：创建圆角边框"),s("br"),t._v("\nbox-shadow：为元素添加阴影"),s("br"),t._v("\nborder-image：使用图片来绘制边框"),s("br"),t._v("\nbox-shadow 设置元素阴影"),s("br"),t._v("\ntransition 过渡"),s("br"),t._v("\nanimation 动画")]),t._v(" "),s("h2",{attrs:{id:"_14-css隐藏元素的6种方法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_14-css隐藏元素的6种方法"}},[t._v("#")]),t._v(" 14. CSS隐藏元素的6种方法")]),t._v(" "),s("p",[t._v("1、display:none;（导致浏览器的重排和重绘，不能点击）"),s("br"),t._v("\n2、visibility:hidden;（只会导致浏览器重绘而不会重排，不能点击）"),s("br"),t._v("\n3、opacity:0;（和visibility:hidden一样，元素依然存在页面中，但可以点击）"),s("br"),t._v("\n4、position；（将元素移出可视区域）\n5、设置height、width为0（将元素的margin，border，padding，height和width等影响元素盒模型的属性设置成0）"),s("br"),t._v("\n6、clip-path（元素不可见，占据页面空间，无法响应点击事件）")]),t._v(" "),s("h2",{attrs:{id:"_15-如何让-chrome-浏览器显示小于-12px-的文字"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_15-如何让-chrome-浏览器显示小于-12px-的文字"}},[t._v("#")]),t._v(" 15. 如何让 Chrome 浏览器显示小于 12px 的文字")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("针对老式chrome：可通过加入 CSS 属性 "),s("code",[t._v("-webkit-text-size-adjust: none;")])])]),t._v(" "),s("li",[s("p",[t._v("对于新版本chrome：")])])]),t._v(" "),s("div",{staticClass:"language-css line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-css"}},[s("code",[s("span",{pre:!0,attrs:{class:"token property"}},[t._v("font-size")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 12px"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("-webkit-transform-origin-x")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 0"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("-webkit-transform")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("scale")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("0.8"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("0.8"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("display")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("inline-block"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br")])]),s("h2",{attrs:{id:"_16-rem适配原理"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_16-rem适配原理"}},[t._v("#")]),t._v(" 16. rem适配原理")]),t._v(" "),s("ul",[s("li",[t._v("rem是相对长度单位，相对于html元素(根元素)font-size计算值的倍数的css单位。")])]),t._v(" "),s("p",[s("strong",[t._v("适配原理：html标签的font-size = 移动设备宽度/设计稿宽度 * 100 + “px”")])]),t._v(" "),s("div",{staticClass:"language-js line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("docEl"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("style"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("fontSize "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("clientWidth "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v(" designimgWidth"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'px'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])])])}),[],!1,null,null,null);s.default=r.exports}}]);