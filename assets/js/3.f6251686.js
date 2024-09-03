(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{271:function(s,t,a){s.exports=a.p+"assets/img/dns1.5081c495.png"},272:function(s,t,a){s.exports=a.p+"assets/img/dns2.65e086e3.png"},273:function(s,t,a){s.exports=a.p+"assets/img/cache.ccf8dc23.jpg"},274:function(s,t,a){s.exports=a.p+"assets/img/scache1.fe804ad6.jpg"},275:function(s,t,a){s.exports=a.p+"assets/img/scache2.c290457d.jpg"},276:function(s,t,a){s.exports=a.p+"assets/img/scache3.b57a4145.jpg"},277:function(s,t,a){s.exports=a.p+"assets/img/ncache1.f27dfbc7.jpg"},278:function(s,t,a){s.exports=a.p+"assets/img/ncache2.22d3c659.jpg"},279:function(s,t,a){s.exports=a.p+"assets/img/local.acc5af9a.png"},328:function(s,t,a){"use strict";a.r(t);var e=a(13),r=Object(e.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("p",[t("a",{attrs:{href:"https://juejin.cn/post/6993358764481085453#heading-0",target:"_blank",rel:"noopener noreferrer"}},[s._v("参考"),t("OutboundLink")],1)]),s._v(" "),t("p",[s._v("网络方面的缓存分为三块："),t("strong",[s._v("DNS缓存")]),s._v("、"),t("strong",[s._v("HTTP缓存")]),s._v("、"),t("strong",[s._v("CDN缓存")]),s._v("，也有人把这里的 HTTP 缓存称为浏览器缓存。")]),s._v(" "),t("p",[s._v("还有本地的就是：浏览器的"),t("strong",[s._v("本地存储")]),s._v("和"),t("strong",[s._v("离线存储")]),s._v("，更快提高首屏加载速度，让页面飞起")]),s._v(" "),t("h2",{attrs:{id:"_1、dns缓存"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1、dns缓存"}},[s._v("#")]),s._v(" 1、DNS缓存")]),s._v(" "),t("p",[s._v("进入页面的时候会进行DNS查询，找到域名对应的服务器的IP地址，再发送请求")]),s._v(" "),t("p",[t("img",{attrs:{src:a(271)}})]),s._v(" "),t("p",[t("img",{attrs:{src:a(272)}})]),s._v(" "),t("h2",{attrs:{id:"_2、http缓存"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2、http缓存"}},[s._v("#")]),s._v(" 2、HTTP缓存")]),s._v(" "),t("p",[s._v("就是将http请求获取的页面资源存储在本地，之后再加载直接从缓存中获取而不用请求服务器，从而响应更快。先看图：")]),s._v(" "),t("p",[t("img",{attrs:{src:a(273)}})]),s._v(" "),t("h3",{attrs:{id:"_2-1、强缓存"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-1、强缓存"}},[s._v("#")]),s._v(" 2-1、强缓存")]),s._v(" "),t("ul",[t("li",[s._v("强制缓存就是向浏览器缓存查找该请求结果，并根据该结果的缓存规则来决定是否使用该缓存结果的过程，强制缓存的情况主要有三种")])]),s._v(" "),t("p",[s._v("1.不存在该缓存结果和缓存标识，强制缓存失效，则直接向服务器发起请求（跟第一次发起请求一致），如下图：")]),s._v(" "),t("p",[t("img",{attrs:{src:a(274)}})]),s._v(" "),t("p",[s._v("2.存在该缓存结果和缓存标识，但该结果已失效，强制缓存失效，则使用协商缓存(暂不分析)，如下图")]),s._v(" "),t("p",[t("img",{attrs:{src:a(275)}})]),s._v(" "),t("p",[s._v("3.存在该缓存结果和缓存标识，且该结果尚未失效，强制缓存生效，直接返回该结果，如下图")]),s._v(" "),t("p",[t("img",{attrs:{src:a(276)}})]),s._v(" "),t("p",[t("strong",[s._v("控制强制缓存的字段分别是Expires和Cache-Control，其中Cache-Control优先级比Expires高。")])]),s._v(" "),t("h4",{attrs:{id:"expires-用来指定资源到期绝对时间-服务器响应时-添加在响应头中。"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#expires-用来指定资源到期绝对时间-服务器响应时-添加在响应头中。"}},[s._v("#")]),s._v(" Expires：用来指定资源到期绝对时间，服务器响应时，添加在响应头中。")]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("expires")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" Wed"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("22")]),s._v(" Nov "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2021")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("08")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("41")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("00")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("GMT")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("注意：如果服务器和浏览器端时间不一致的话可能导致失败。比如现在时间是8月1，expires过期时间是8月2，客户端把电脑时间改成了8月3，那就用不了这个缓存")]),s._v(" "),t("h4",{attrs:{id:"cache-control-指定资源过期时间秒-如下-表示在这个请求正确返回后的300秒内-资源可以使用-否则过期。添加在响应头中。"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#cache-control-指定资源过期时间秒-如下-表示在这个请求正确返回后的300秒内-资源可以使用-否则过期。添加在响应头中。"}},[s._v("#")]),s._v(" Cache-Control：指定资源过期时间秒，如下，表示在这个请求正确返回后的300秒内，资源可以使用，否则过期。添加在响应头中。")]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[s._v("cache"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("control"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v("max"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("age"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("300")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[t("strong",[s._v("Expires 和 Cache-Control 的区别")])]),s._v(" "),t("p",[s._v("1、Expires 是HTTP/1.0中的，Cache-Control 是HTTP/1.1中的;"),t("br"),s._v("\n2、两者同时存在的话 Cache-Control 优先级高于 Expires;")]),s._v(" "),t("p",[t("strong",[s._v("强缓存的缺点：")])]),s._v(" "),t("p",[s._v("就是缓存过期之后，不管资源有没有变化，都会重新发起请求，重新获取资源"),t("br"),s._v("\n而实际情况是在资源文件没有更新的情况下，即使过期了也不重新获取资源，继续使用旧资源，"),t("br"),s._v("\n所以协商缓存它来了，在强缓存过期的情况下，再走协商缓存的流程，判断文件有没有更新。")]),s._v(" "),t("h3",{attrs:{id:"_2-2、协商缓存"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-2、协商缓存"}},[s._v("#")]),s._v(" 2-2、协商缓存")]),s._v(" "),t("p",[s._v("协商缓存就是强制缓存失效后，浏览器携带缓存标识向服务器发起请求，由服务器根据缓存标识决定是否使用缓存的过程，主要有以下两种情况：")]),s._v(" "),t("p",[s._v("1.协商缓存生效，返回304，如下")]),s._v(" "),t("p",[t("img",{attrs:{src:a(277)}})]),s._v(" "),t("p",[s._v("2.协商缓存失效，返回200和请求结果结果，如下")]),s._v(" "),t("p",[t("img",{attrs:{src:a(278)}})]),s._v(" "),t("p",[t("strong",[s._v("控制协商缓存的字段分别有：Last-Modified / If-Modified-Since和Etag / If-None-Match，其中Etag / If-None-Match的优先级比Last-Modified / If-Modified-Since高。")])]),s._v(" "),t("h4",{attrs:{id:"_2-2-1、last-modified-if-modified-since"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-1、last-modified-if-modified-since"}},[s._v("#")]),s._v(" 2-2-1、Last-Modified/If-Modified-Since")]),s._v(" "),t("p",[s._v("第一次请求资源时，服务器除了会返回给浏览器上面说的过期时间，还会在"),t("strong",[s._v("响应头添加 Last-Modified 字段")]),s._v("，告诉浏览器"),t("strong",[s._v("该资源的最后修改时间")])]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[s._v("last"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("modified"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" Fri"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("27")]),s._v(" Oct "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2021")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("08")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("35")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("57")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("GMT")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("然后浏览器再次请求的时候就把这个时间再通过另一个字段 "),t("strong",[s._v("If-Modified-Since 添加到请求头")]),s._v("，发送给服务器")]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("modified"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("since"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" Fri"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("27")]),s._v(" Oct "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2021")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("08")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("35")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("57")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("GMT")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("服务器再把这两个字段的时间对比，如果是一样的，就说明文件没有被更新过，就返回状态码304和空响应体给浏览器，浏览器直接拿过期了的资源继续使用即可；如果对比不一样说明资源有更新，就返回状态码200和新的资源。")]),s._v(" "),t("p",[t("strong",[s._v("所以说 Last-Modified/If-Modified-Since 是成对的，是为了对比文件修改时间")])]),s._v(" "),t("p",[t("strong",[s._v("Last-Modified/If-Modified-Since的缺点：")])]),s._v(" "),t("p",[s._v("1、如果本地打开了缓存文件，即使没有对文件进行修改，但还是会造成Last-Modified被修改，服务器端不能命中缓存导致发送相同资源"),t("br"),s._v("\n2、因为Last-Modified只能以秒计时，如果在不可感知的时间内修改了文件，服务器端会认为还是命中了，无法返回正确的资源"),t("br"),s._v("\n3、如果资源有周期性变化，如资源修改后，在一个周期内又改回了原来的样子，我们认为这个周期前的缓存是可以使用的，但是Last-Modified不这样认为")]),s._v(" "),t("h4",{attrs:{id:"_2-2-2、etag-if-none-match"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-2、etag-if-none-match"}},[s._v("#")]),s._v(" 2-2-2、ETag/If-None-Match")]),s._v(" "),t("p",[s._v("第一次请求资源时，服务器除了会在响应头上返回Expires、Cache-Control、Last-Modified，"),t("strong",[s._v("还在返回Etag字段，表示当前资源文件的一个唯一标识。")])]),s._v(" "),t("p",[s._v("这个标识符由服务器基于文件内容编码生成，能精准感知文件的变化，只要文件内容不同，ETag就会重新生成")]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("etag")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("W")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"132489-1627839023000"')]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("然后浏览器再次请求的时候就把这个文件标识 再通过另一个字段 If-None-Match，发送给服务器")]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("none"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("match"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("W")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"132489-1627839023000"')]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("服务器再把这两个字段对比，如果发现是一样的，就说明文件没有被更新过，就返回状态码304和空响应体给浏览器，浏览器直接拿过期了的资源继续使用；"),t("br"),s._v("\n如果对比不一样说明资源有更新，就返回状态码200和新的资源。")]),s._v(" "),t("p",[t("strong",[s._v("Last-Modified 和 ETag 的区别：")])]),s._v(" "),t("p",[s._v("1、Etag 感知文件精准度要高于 Last-Modified"),t("br"),s._v("\n2、同时使用时，服务器校验优先级 Etag/If-None-Match"),t("br"),s._v("\n3、Last-Modified 性能上要优于 Etag，因为 Etag 生成过程中需要服务器付出额外开销，会影响服务器端的性能，所以它并不能完全替代 Last-Modified，只能作为补充和强化")]),s._v(" "),t("h4",{attrs:{id:"强缓存与协商缓存的区别"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#强缓存与协商缓存的区别"}},[s._v("#")]),s._v(" 强缓存与协商缓存的区别：")]),s._v(" "),t("ul",[t("li",[s._v("优先查找强缓存，没有命中再查找协商缓存")]),s._v(" "),t("li",[s._v("强缓存不发请求到服务器，所以有时候资源更新了浏览器还不知道，但是协商缓存会发请求到服务器，资源是否有更新，服务器肯定知道")]),s._v(" "),t("li",[s._v("目前项目大多数使用缓存的方案"),t("br"),s._v("\n1、协商缓存一般存储：HTML"),t("br"),s._v("\n2、强缓存一般存储：css, image, js，文件名带上 hash")])]),s._v(" "),t("h2",{attrs:{id:"_3、本地缓存"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3、本地缓存"}},[s._v("#")]),s._v(" 3、本地缓存")]),s._v(" "),t("p",[t("img",{attrs:{src:a(279)}})])])}),[],!1,null,null,null);t.default=r.exports}}]);