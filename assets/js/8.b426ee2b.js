(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{249:function(s,t,a){s.exports=a.p+"assets/img/W3C-box-model.992239bf.png"},270:function(s,t,a){"use strict";a.r(t);var n=a(28),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,n=s._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h2",{attrs:{id:"_1-css-盒子模型"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-css-盒子模型"}},[s._v("#")]),s._v(" 1. CSS 盒子模型")]),s._v(" "),n("ul",[n("li",[n("p",[s._v("IE 盒子模型 (border-box)")])]),s._v(" "),n("li",[n("p",[s._v("标准 W3C 盒子模型 (content-box)")])])]),s._v(" "),n("p",[s._v("其中 IE 的 content 部分包含了 border 和 padding")]),s._v(" "),n("p",[n("img",{attrs:{src:a(249),alt:"W3C-盒子模型"}})]),s._v(" "),n("div",{staticClass:"custom-block tip"},[n("p",{staticClass:"custom-block-title"},[s._v("TIP")]),s._v(" "),n("p",[s._v("如何通过 css 切换盒子模型(通过 css3 的 box-sizing 属性)"),n("br"),s._v("\nbox-sizing：border-box (IE 盒子模型)"),n("br"),s._v("\nbox-sizing：content-box (W3C 盒子模型)")])]),s._v(" "),n("h2",{attrs:{id:"_2-css-中-link-和-import-的区别"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-css-中-link-和-import-的区别"}},[s._v("#")]),s._v(" 2. CSS 中 link 和@import 的区别")]),s._v(" "),n("ul",[n("li",[n("p",[s._v("link 属于 HTML 标签，而@import 是 CSS 提供的")])]),s._v(" "),n("li",[n("p",[s._v("页面被加载的时，link 会同时被加载，而@import 引用的 CSS 会等到页面被加载完再加载")])]),s._v(" "),n("li",[n("p",[s._v("import 只在 IE5 以上才能识别，而 link 是 HTML 标签，无兼容问题")])]),s._v(" "),n("li",[n("p",[s._v("link 方式的样式的权重 高于@import 的权重")])])]),s._v(" "),n("h2",{attrs:{id:"_3-css-选择符、属性继承、优先级算法"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_3-css-选择符、属性继承、优先级算法"}},[s._v("#")]),s._v(" 3. CSS 选择符、属性继承、优先级算法")]),s._v(" "),n("ul",[n("li",[s._v("id 选择器（ # myid）")]),s._v(" "),n("li",[s._v("类选择器（.myclassname）")]),s._v(" "),n("li",[s._v("标签选择器（div, h1, p）")]),s._v(" "),n("li",[s._v("相邻选择器（h1 + p）")]),s._v(" "),n("li",[s._v("子选择器（ul > li）")]),s._v(" "),n("li",[s._v("后代选择器（li a）")]),s._v(" "),n("li",[s._v("通配符选择器（ * ）")]),s._v(" "),n("li",[s._v('属性选择器（a[rel = "external"]）')]),s._v(" "),n("li",[s._v("伪类选择器（a: hover, li:nth-child）")])]),s._v(" "),n("p",[s._v("可继承的样式： font-size font-family color, text-indent 等"),n("br"),s._v("\n不可继承的样式：border padding margin width height 等")]),s._v(" "),n("p",[n("strong",[s._v("优先级为: !important > 内联 > id > class > tag > 通配符 > 继承")])]),s._v(" "),n("p",[s._v("4 个等级的定义如下：")]),s._v(" "),n("ul",[n("li",[s._v('第一等级：代表内联样式，如 style=""，权值为 1000')]),s._v(" "),n("li",[s._v("第二等级：代表 id 选择器，如#content，权值为 100")]),s._v(" "),n("li",[s._v("第三等级：代表类，伪类和属性选择器，如.content，权值为 10")]),s._v(" "),n("li",[s._v("第四等级：代表标签选择器和伪元素选择器，如 div p，权值为 1")]),s._v(" "),n("li",[s._v("注意：通用选择器（*），子选择器（>），和相邻同胞选择器（+）并不在这个等级中，所以他们的权值为 0")])]),s._v(" "),n("h2",{attrs:{id:"_4-css-伪类和伪元素"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_4-css-伪类和伪元素"}},[s._v("#")]),s._v(" 4. CSS 伪类和伪元素")]),s._v(" "),n("h4",{attrs:{id:"css-伪元素：-用于向某些选择器设置特殊效果"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#css-伪元素：-用于向某些选择器设置特殊效果"}},[s._v("#")]),s._v("   CSS 伪元素：(用于向某些选择器设置特殊效果)")]),s._v(" "),n("ul",[n("li",[s._v(":first-letter 向文本的第一个字母添加特殊样式")]),s._v(" "),n("li",[s._v(":after 在元素之后添加内容")])]),s._v(" "),n("h4",{attrs:{id:"css-伪类：-用于向某些选择器添加特殊的效果"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#css-伪类：-用于向某些选择器添加特殊的效果"}},[s._v("#")]),s._v("   CSS 伪类：(用于向某些选择器添加特殊的效果)")]),s._v(" "),n("ul",[n("li",[s._v(":focus 向拥有键盘输入焦点的元素添加样式")]),s._v(" "),n("li",[s._v(":hover 当鼠标悬浮在元素上方时，向元素添加样式")])]),s._v(" "),n("h2",{attrs:{id:"_5-position-的值"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_5-position-的值"}},[s._v("#")]),s._v(" 5. Position 的值")]),s._v(" "),n("ul",[n("li",[s._v("static 默认值。\n没有定位，元素出现在正常的流中（忽略 top, bottom, left, right z-index 声明）。")]),s._v(" "),n("li",[s._v("relative\n生成相对定位的元素，相对于其在普通流中的位置进行定位。")]),s._v(" "),n("li",[s._v("absolute\n生成绝对定位的元素，相对于 非 static 定位的第一个祖先元素进行定位。"),n("br"),s._v("\n如果没有非 static 定位的祖先元素则相对于 body 进行定位")]),s._v(" "),n("li",[s._v("fixed （老 IE 不支持）\n生成绝对定位的元素，相对于浏览器窗口进行定位。")]),s._v(" "),n("li",[s._v("inherit\n规定从父元素继承 position 属性的值。")]),s._v(" "),n("li",[s._v("sticky（CSS3、浏览器兼容差）\n粘性定位可以被认为是相对定位和固定定位的混合。\n元素在跨越特定阈值前为相对定位，之后为固定定位")])]),s._v(" "),n("div",{staticClass:"custom-block tip"},[n("p",{staticClass:"custom-block-title"},[s._v("TIP")]),s._v(" "),n("p",[s._v("在 position 设置为 fixed 或者 absolute 的时候，元素会脱离文档流，此时对于行内元素(inline)来说可以设置宽高")])]),s._v(" "),n("h2",{attrs:{id:"_6-css-浮动及其危害和解决方法"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_6-css-浮动及其危害和解决方法"}},[s._v("#")]),s._v(" 6. CSS 浮动及其危害和解决方法")]),s._v(" "),n("h4",{attrs:{id:"float-属性定义元素在哪个方向浮动"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#float-属性定义元素在哪个方向浮动"}},[s._v("#")]),s._v(" float 属性定义元素在哪个方向浮动")]),s._v(" "),n("p",[s._v("危害：浮动主要造成了父元素高度塌陷，以至于父元素很多像背景颜色，边框等都不能正确的显示出来以及影响了同级元素的位置")]),s._v(" "),n("p",[s._v("解决方法：")]),s._v(" "),n("ul",[n("li",[s._v("给父元素定义高度")]),s._v(" "),n("li",[s._v("给父元素加上 overflow：hidden")]),s._v(" "),n("li",[s._v("给父元素加上 overflow：auto")]),s._v(" "),n("li",[s._v("给父元素加上 display: table")]),s._v(" "),n("li",[s._v("在最后一个子元素上加一个 div，使用 clear：both")]),s._v(" "),n("li",[s._v("父元素定义伪类：after")]),s._v(" "),n("li",[s._v("形成一个 BFC")])]),s._v(" "),n("h2",{attrs:{id:"_7-block、-inline-和-inline-block-的区别"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_7-block、-inline-和-inline-block-的区别"}},[s._v("#")]),s._v(" 7. block、 inline 和 inline-block 的区别")]),s._v(" "),n("h4",{attrs:{id:"块状元素：-如-div-display：block"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#块状元素：-如-div-display：block"}},[s._v("#")]),s._v(" 块状元素： 如 div - display：block")]),s._v(" "),n("h4",{attrs:{id:"行内元素：-如-span-display：inline"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#行内元素：-如-span-display：inline"}},[s._v("#")]),s._v(" 行内元素： 如 span - display：inline")]),s._v(" "),n("h4",{attrs:{id:"行内块块元素：如-input-display：inline-block"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#行内块块元素：如-input-display：inline-block"}},[s._v("#")]),s._v(" 行内块块元素：如 input - display：inline-block")]),s._v(" "),n("h5",{attrs:{id:"块状元素特征："}},[n("a",{staticClass:"header-anchor",attrs:{href:"#块状元素特征："}},[s._v("#")]),s._v(" 块状元素特征：")]),s._v(" "),n("ul",[n("li",[s._v("能够识别宽高")]),s._v(" "),n("li",[s._v("margin 和 padding 的上下左右均对其有效")]),s._v(" "),n("li",[s._v("可以自动换行")]),s._v(" "),n("li",[s._v("多个块状元素标签写在一起，默认排列方式为从上至下")])]),s._v(" "),n("h5",{attrs:{id:"行内元素特征："}},[n("a",{staticClass:"header-anchor",attrs:{href:"#行内元素特征："}},[s._v("#")]),s._v(" 行内元素特征：")]),s._v(" "),n("ul",[n("li",[s._v("设置宽高无效")]),s._v(" "),n("li",[s._v("对 margin 仅设置左右方向有效，上下无效；padding 设置上下左右都有效，即会撑大空间。在 IE7 的时候，padding-top 和 padding-bottom 无效")]),s._v(" "),n("li",[s._v("不自动换行")])]),s._v(" "),n("div",{staticClass:"custom-block tip"},[n("p",{staticClass:"custom-block-title"},[s._v("TIP")]),s._v(" "),n("p",[s._v("对于行内元素(display：inline)，在 position 设置为 fixed、absolute 或者 float 的时候，元素会脱离文档流，此时对于行内元素来说可以设置宽高")])]),s._v(" "),n("h5",{attrs:{id:"行内块状元素特征："}},[n("a",{staticClass:"header-anchor",attrs:{href:"#行内块状元素特征："}},[s._v("#")]),s._v(" 行内块状元素特征：")]),s._v(" "),n("ul",[n("li",[s._v("不自动换行")]),s._v(" "),n("li",[s._v("能够识别宽高")]),s._v(" "),n("li",[s._v("默认排列方式为从左到右")])]),s._v(" "),n("div",{staticClass:"custom-block tip"},[n("p",{staticClass:"custom-block-title"},[s._v("TIP")]),s._v(" "),n("p",[s._v("对于行内块状元素(inline-block)，在设置了 display:inline-block 属性后，垂直 margin 不会重叠，甚至和他们的子元素之间也是一样。")])]),s._v(" "),n("h2",{attrs:{id:"_8-css-单位"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_8-css-单位"}},[s._v("#")]),s._v(" 8. CSS 单位")]),s._v(" "),n("ul",[n("li",[s._v("px：绝对单位，页面按精确像素展示")]),s._v(" "),n("li",[s._v("em：相对单位，基准点为父节点字体的大小，如果自身定义了 font-size 按自身来计算（浏览器默认字体是 16px），整个页面内 1em 不是一个固定的值")]),s._v(" "),n("li",[s._v("rem：相对单位，可理解为”root em”, 相对根节点 html 的字体大小来计算，CSS3 新加属性，chrome/firefox/IE9+支持")]),s._v(" "),n("li",[s._v("vw：viewpoint width，视窗宽度，1vw 等于视窗宽度的 1%")]),s._v(" "),n("li",[s._v("vh：viewpoint height，视窗高度，1vh 等于视窗高度的 1%")]),s._v(" "),n("li",[s._v("%:百分比")]),s._v(" "),n("li",[s._v("cm:厘米")]),s._v(" "),n("li",[s._v("mm:毫米")])]),s._v(" "),n("h2",{attrs:{id:"_9-display-none-和-visibility-hidden-区别"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_9-display-none-和-visibility-hidden-区别"}},[s._v("#")]),s._v(" 9. display none 和 visibility hidden 区别")]),s._v(" "),n("ul",[n("li",[s._v("display:none 在文档流中不占据位置; 会导致 repaint 与 reflow")]),s._v(" "),n("li",[s._v("visibility:hidden 在文档流中依然会占据位置，仅仅导致 repaint(没有结构性变化，仅仅看不见而已)")])]),s._v(" "),n("h2",{attrs:{id:"_10-inline-inline-block-元素间隙"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_10-inline-inline-block-元素间隙"}},[s._v("#")]),s._v(" 10.inline/inline-block 元素间隙")]),s._v(" "),n("p",[s._v("在一行中，如果存在两个 inline 或者 inline-block 元素，这两个元素之间会存在一定的间隙"),n("br"),s._v("\n这个间隙是由换行或者回车导致的"),n("br"),s._v("\n去除间隙的方法：")]),s._v(" "),n("h4",{attrs:{id:"方法一、元素间的间隙出现的原因，是元素标签之间的空格，把空格去掉间隙就会消失"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#方法一、元素间的间隙出现的原因，是元素标签之间的空格，把空格去掉间隙就会消失"}},[s._v("#")]),s._v(" 方法一、元素间的间隙出现的原因，是元素标签之间的空格，把空格去掉间隙就会消失")]),s._v(" "),n("div",{staticClass:"language-html line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-html"}},[n("code",[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("span")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("1"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("span")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("span")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("2"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("span")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("h4",{attrs:{id:"方法二：-利用-html-注释标签"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#方法二：-利用-html-注释标签"}},[s._v("#")]),s._v(" 方法二： 利用 HTML 注释标签")]),s._v(" "),n("div",{staticClass:"language-html line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-html"}},[n("code",[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("span")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("1"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("span")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("\x3c!-- \n--\x3e")]),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("span")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("2"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("span")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br")])]),n("h4",{attrs:{id:"方法三：-取消标签闭合（不推荐，会有问题）"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#方法三：-取消标签闭合（不推荐，会有问题）"}},[s._v("#")]),s._v(" 方法三： 取消标签闭合（不推荐，会有问题）")]),s._v(" "),n("div",{staticClass:"language-html line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-html"}},[n("code",[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("div")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v("class")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v('"')]),s._v("demo"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v('"')])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("span")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("1\n    "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("span")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("2\n"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("div")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br")])]),n("h4",{attrs:{id:"方法四：-在父容器上使用-font-size-0-可以消除间隙"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#方法四：-在父容器上使用-font-size-0-可以消除间隙"}},[s._v("#")]),s._v(" 方法四： 在父容器上使用 font-size:0;可以消除间隙")]),s._v(" "),n("div",{staticClass:"language-html line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-html"}},[n("code",[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("div")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v("class")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v('"')]),s._v("demo"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v('"')])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("span")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("1"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("span")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("span")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("2"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("span")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("div")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br")])]),n("div",{staticClass:"language-css line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-css"}},[n("code",[n("span",{pre:!0,attrs:{class:"token selector"}},[s._v(".demo")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token property"}},[s._v("font-size")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 0"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token selector"}},[s._v(".demo span")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token property"}},[s._v("font-size")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 18px"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br")])]),n("h2",{attrs:{id:"_11-css-元素居中方法归纳"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_11-css-元素居中方法归纳"}},[s._v("#")]),s._v(" 11. css 元素居中方法归纳")]),s._v(" "),n("blockquote",[n("p",[s._v("水平和垂直方向都可居中")])]),s._v(" "),n("p",[s._v("统一 HTML 代码：")]),s._v(" "),n("div",{staticClass:"language-html line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-html"}},[n("code",[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("div")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v("class")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v('"')]),s._v("outer"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v('"')])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("div")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v("class")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v('"')]),s._v("inner"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v('"')])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("div")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("div")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br")])]),n("p",[s._v("相同的 css 代码抽取：")]),s._v(" "),n("div",{staticClass:"language-css line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-css"}},[n("code",[n("span",{pre:!0,attrs:{class:"token selector"}},[s._v(".inner")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token property"}},[s._v("width")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 50px"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token property"}},[s._v("height")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 50px"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token property"}},[s._v("background-color")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" aqua"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token selector"}},[s._v(".outer")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token property"}},[s._v("border")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 1px solid black"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br")])]),n("h4",{attrs:{id:"①、margin-auto-绝对定位"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#①、margin-auto-绝对定位"}},[s._v("#")]),s._v(" ①、margin:auto && 绝对定位")]),s._v(" "),n("div",{staticClass:"language-css line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-css"}},[n("code",[n("span",{pre:!0,attrs:{class:"token selector"}},[s._v(".inner")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token property"}},[s._v("position")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" absolute"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token property"}},[s._v("left")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 0"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token property"}},[s._v("right")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 0"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token property"}},[s._v("top")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 0"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token property"}},[s._v("bottom")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 0"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token property"}},[s._v("margin")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" auto"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token selector"}},[s._v(".outer")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token property"}},[s._v("position")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" relative"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token property"}},[s._v("width")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 100px"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token property"}},[s._v("height")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 100px"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br")])]),n("blockquote",[n("p",[s._v("注意点：\n①、absolute 生成绝对定位的元素，相对于 static 定位以外的第一个父元素进行定位。\ninner 设置了 absolute 定位，所以要在 outer 设置 relative，这样才能相对于 outer 进行相对定位，否则相对于 body 定位，因为默认是 static 定位。\nleft、right 等不一定要设置为 0，只要 left 和 right 的值相等，即可实现水平居中。\n同理，top 和 bottom 的值相等，即可实现垂直居中。")])]),s._v(" "),n("h4",{attrs:{id:"②、margin-负值-相对定位"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#②、margin-负值-相对定位"}},[s._v("#")]),s._v(" ②、margin 负值 && 相对定位")]),s._v(" "),n("div",{staticClass:"language-css line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-css"}},[n("code",[n("span",{pre:!0,attrs:{class:"token selector"}},[s._v(".inner")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token property"}},[s._v("position")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" relative"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token property"}},[s._v("top")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 50%"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token property"}},[s._v("left")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 50%"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token property"}},[s._v("margin")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" -25px 0 0 -25px"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/* 外边距为自身宽高的一半 */")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br")])]),n("blockquote",[n("p",[s._v("注意点："),n("br"),s._v("\n①、inner 元素要设为 relative"),n("br"),s._v("\n②、margin 外边距为自身宽高的一半（负数）")])]),s._v(" "),n("h4",{attrs:{id:"③、css3-transform-属性"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#③、css3-transform-属性"}},[s._v("#")]),s._v(" ③、CSS3 transform 属性")]),s._v(" "),n("div",{staticClass:"language-css line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-css"}},[n("code",[n("span",{pre:!0,attrs:{class:"token selector"}},[s._v(".inner")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token property"}},[s._v("position")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" relative"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token property"}},[s._v("top")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 50%"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token property"}},[s._v("left")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 50%"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token property"}},[s._v("transform")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("translate")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("-50%"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" -50%"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br")])]),n("blockquote",[n("p",[s._v("注意点："),n("br"),s._v("\n①、inner 元素要设为 relative"),n("br"),s._v("\n②、transform 属性向元素应用 2D 或 3D 转换，translate(x,y) 定义 2D 转换")])]),s._v(" "),n("h4",{attrs:{id:"④、css3-flex-布局"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#④、css3-flex-布局"}},[s._v("#")]),s._v(" ④、css3 flex 布局")]),s._v(" "),n("div",{staticClass:"language-css line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-css"}},[n("code",[n("span",{pre:!0,attrs:{class:"token selector"}},[s._v(".outer")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token property"}},[s._v("display")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" flex"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token property"}},[s._v("align-items")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" center"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/* 垂直居中 */")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token property"}},[s._v("justify-content")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" center"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/* 水平居中 */")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br")])])])}),[],!1,null,null,null);t.default=e.exports}}]);