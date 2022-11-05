(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{282:function(t,r,_){t.exports=_.p+"assets/img/attachment.f93aeed6.jpg"},283:function(t,r,_){t.exports=_.p+"assets/img/daili_1.ba5f1ea4.png"},284:function(t,r,_){t.exports=_.p+"assets/img/daili_2.d002928b.png"},331:function(t,r,_){"use strict";_.r(r);var v=_(13),a=Object(v.a)({},(function(){var t=this,r=t._self._c;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h2",{attrs:{id:"_1-http-协议介绍"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_1-http-协议介绍"}},[t._v("#")]),t._v(" 1. HTTP 协议介绍")]),t._v(" "),r("p",[t._v("HTTP 协议是超文本传输协议，属于应用层协议，基于 TCP/IP 通信协议来传递数据，是无状态的协议。"),r("br"),t._v("\nHTTP 报文由起始行，首部以及数据主体三个部分")]),t._v(" "),r("h4",{attrs:{id:"http-请求方法"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#http-请求方法"}},[t._v("#")]),t._v(" HTTP 请求方法")]),t._v(" "),r("p",[t._v("GET： 请求指定的页面信息，并返回实体主体"),r("br"),t._v("\nHEAD:： 类似于 get 请求，返回的内容不包含实体部分，用于获取报头"),r("br"),t._v("\nPOST： 向指定资源提交数据进行处理请求（例如提交表单或者上传文件）"),r("br"),t._v("\nPUT： 从客户端向服务器传送的数据取代指定的文档的内容"),r("br"),t._v("\nDELETE： 请求服务器删除指定的页面"),r("br"),t._v("\nOPTIONS：允许客户端查看服务器的性能。询问支持请求的方法"),r("br"),t._v("\nTRACE： 将服务器收到的请求回送到客户端，主要用于测试或诊断。")]),t._v(" "),r("h2",{attrs:{id:"_2-tcp-ip-协议"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_2-tcp-ip-协议"}},[t._v("#")]),t._v(" 2. TCP/IP 协议")]),t._v(" "),r("ul",[r("li",[t._v("TCP/IP 协议族是由一个四层协议组成的系统，这四层分别为：应用层、传输层、网络层和数据链路层")])]),t._v(" "),r("p",[t._v("应用层： 一般是我们编写的应用程序，其决定了向用户提供的应用服务。（如 FTP、HTTP、DNS)等"),r("br"),t._v("\n传输层： 通过系统调用向应用层提供处于网络连接中的两台计算机之间的数据传输功能。（如 TCP、UDP）")]),t._v(" "),r("div",{staticClass:"custom-block tip"},[r("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),r("p",[r("strong",[t._v("udp 和 tcp 的区别")]),r("br"),t._v("\n1、TCP 是面向连接;UDP 是无连接的"),r("br"),t._v("\n2、TCP 提供可靠的服务(三次握手)，而 UDP 尽最大努力交付,TCP 不会出现丢包并且能够保证数据的顺序"),r("br"),t._v("\n3、TCP 传输的速度比 UDP 慢"),r("br"),t._v("\n4、TCP 适用于传输大量数据，而 UDP 适用于传输少量数据")])]),t._v(" "),r("h2",{attrs:{id:"_3-http-状态码"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_3-http-状态码"}},[t._v("#")]),t._v(" 3.http 状态码")]),t._v(" "),r("p",[t._v("200 OK 服务器成功处理了请求（这个是我们见到最多的）"),r("br"),t._v("\n301/302 Moved Permanently（重定向）请求的 URL 已移走。Response 中应该包含一个 Location URL, 说明资源现在所处的位置"),r("br"),t._v("\n404 Not Found(页面丢失)未找到资源"),r("br"),t._v("\n501 Internal Server Error 服务器遇到一个错误，使其无法对请求提供服务")]),t._v(" "),r("ul",[r("li",[r("p",[t._v("1 开头：（被接受，需要继续处理。）"),r("br"),t._v("\n 100：客户端继续请求"),r("br"),t._v("\n 101：客户端切换协议")])]),t._v(" "),r("li",[r("p",[t._v("2 开头：（请求成功）"),r("br"),t._v("\n 200：请求成功"),r("br"),t._v("\n 202：服务器已接受请求，但尚未处理"),r("br"),t._v("\n 204：服务器成功处理了请求，但未返回内容")])]),t._v(" "),r("li",[r("p",[t._v("3 开头：（请求被重定向）"),r("br"),t._v("\n 301：(永久重定向)"),r("br"),t._v("\n 302： (临时重定向)"),r("br"),t._v("\n 303：http1.1 协议，禁止被缓存"),r("br"),t._v("\n 304：(协商缓存成功（资源未修改）的返回值)")])]),t._v(" "),r("li",[r("p",[t._v("4 开头：（客户端请求错误）"),r("br"),t._v("\n 400：客户端请求的语法错误，服务器无法理解"),r("br"),t._v("\n 403：服务器理解请求客户端的请求，但是拒绝执行此请求(一般客户端没有权限)"),r("br"),t._v("\n 404：服务器无法根据客户端的请求找到资源（网页）")])]),t._v(" "),r("li",[r("p",[t._v("5 开头：（服务器错误）")])])]),t._v(" "),r("h2",{attrs:{id:"_4-http-和-https-的区别"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_4-http-和-https-的区别"}},[t._v("#")]),t._v(" 4.http 和 https 的区别")]),t._v(" "),r("p",[t._v("http 的默认端口：80"),r("br"),t._v("\nhttps 的默认端口：443"),r("br"),t._v("\nhttps 是在应用层(HTTP)和传输层(TCP)之间添加一个 SSL 的安全层")]),t._v(" "),r("h4",{attrs:{id:"https-的缺点"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#https-的缺点"}},[t._v("#")]),t._v(" HTTPS 的缺点：")]),t._v(" "),r("p",[t._v(" （1）HTTPS 协议握手阶段比较费时，会使页面的加载时间延长近 50%，增加 10%到 20%的耗电"),r("br"),t._v("\n （2）HTTPS 连接缓存不如 HTTP 高效，会增加数据开销和功耗，甚至已有的安全措施也会因此而受到影响"),r("br"),t._v("\n （3）SSL 证书需要钱，功能越强大的证书费用越高，个人网站、小网站没有必要一般不会用。"),r("br"),t._v("\n （4）SSL 证书通常需要绑定 IP，不能在同一 IP 上绑定多个域名，IPv4 资源不可能支撑这个消耗")]),t._v(" "),r("h2",{attrs:{id:"_5-浏览器输入-url-发生了什么"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_5-浏览器输入-url-发生了什么"}},[t._v("#")]),t._v(" 5. 浏览器输入 url 发生了什么")]),t._v(" "),r("p",[r("a",{attrs:{href:"https://segmentfault.com/a/1190000006879700",target:"_blank",rel:"noopener noreferrer"}},[t._v("参考"),r("OutboundLink")],1)]),t._v(" "),r("h3",{attrs:{id:"总体来说分为以下几个过程"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#总体来说分为以下几个过程"}},[t._v("#")]),t._v(" 总体来说分为以下几个过程:")]),t._v(" "),r("ul",[r("li",[t._v("DNS 解析")]),t._v(" "),r("li",[t._v("TCP 连接")]),t._v(" "),r("li",[t._v("发送 HTTP 请求")]),t._v(" "),r("li",[t._v("服务器处理请求并返回 HTTP 报文")]),t._v(" "),r("li",[t._v("浏览器解析渲染页面（浏览器渲染原理）")])]),t._v(" "),r("p",[t._v("HTML parser --\x3e DOM Tree"),r("br"),t._v("\n 标记化算法，进行元素状态的标记"),r("br"),t._v("\n dom 树构建"),r("br"),t._v("\nCSS parser --\x3e Style Tree"),r("br"),t._v("\n 解析 css 代码，生成样式树"),r("br"),t._v("\nattachment --\x3e Render Tree"),r("br"),t._v("\n 结合 dom 树 与 style 树，生成渲染树"),r("br"),t._v("\n layout: 布局"),r("br"),t._v("\n GPU painting: 像素绘制页面"),r("br"),t._v("\n 连接结束")]),t._v(" "),r("img",{attrs:{src:_(282)}}),t._v(" "),r("h4",{attrs:{id:"dns-解析-将域名解析成对应的-ip-地址"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#dns-解析-将域名解析成对应的-ip-地址"}},[t._v("#")]),t._v(" DNS 解析：将域名解析成对应的 IP 地址")]),t._v(" "),r("p",[t._v("①、查找浏览器自身缓存"),r("br"),t._v("\n②、查找操作系统(hosts 文件)"),r("br"),t._v("\n③、本地域名服务器"),r("br"),t._v("\n④、根域名服务器..")]),t._v(" "),r("h2",{attrs:{id:"_6-正向代理和反向代理"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_6-正向代理和反向代理"}},[t._v("#")]),t._v(" 6. 正向代理和反向代理")]),t._v(" "),r("p",[r("a",{attrs:{href:"https://www.cnblogs.com/taostaryu/p/10547132.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("参考"),r("OutboundLink")],1)]),t._v(" "),r("h4",{attrs:{id:"正向代理"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#正向代理"}},[t._v("#")]),t._v(" 正向代理：")]),t._v(" "),r("p",[t._v(" 正向代理类似一个跳板机，代理访问外部资源"),r("br"),t._v("\n 比如我们国内访问谷歌，直接访问访问不到，我们可以通过一个正向代理服务器，请求发到代理服，代理服务器能够访问谷歌，这样由代理去谷歌取到返回数据，再返回给我们，这样我们就能访问谷歌了")]),t._v(" "),r("p",[r("img",{attrs:{src:_(283)}})]),t._v(" "),r("p",[r("strong",[t._v("正向代理的用途：")]),r("br"),t._v("\n 1、访问原来无法访问的资源，如google"),r("br"),t._v("\n 2、可以做缓存，加速访问资源"),r("br"),t._v("\n 3、对客户端访问授权，上网进行认证"),r("br"),t._v("\n 4、代理可以记录用户访问记录（上网行为管理），对外隐藏用户信息")]),t._v(" "),r("h4",{attrs:{id:"反向代理"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#反向代理"}},[t._v("#")]),t._v(" 反向代理：")]),t._v(" "),r("p",[t._v(" 反向代理（Reverse Proxy）实际运行方式是指以代理服务器来接受internet上的连接请求，"),r("br"),t._v("\n 然后将请求转发给内部网络上的服务器，并将从服务器上得到的结果返回给internet上请求连接的客户端，此时代理服务器对外就表现为一个服务器")]),t._v(" "),r("p",[r("img",{attrs:{src:_(284)}})]),t._v(" "),r("p",[r("strong",[t._v("反向代理的作用：")]),t._v("\n 1、保证内网的安全，阻止web攻击，大型网站，通常将反向代理作为公网访问地址，Web服务器是内网"),r("br"),t._v("\n 2、负载均衡，通过反向代理服务器来优化网站的负载")]),t._v(" "),r("p",[r("strong",[t._v("总结：")]),r("br"),t._v("\n 正向代理即是客户端代理, 代理客户端, 服务端不知道实际发起请求的客户端."),r("br"),t._v("\n 反向代理即是服务端代理, 代理服务端, 客户端不知道实际提供服务的服务端")]),t._v(" "),r("p",[t._v(" 正向代理: 买票的黄牛"),r("br"),t._v("\n 反向代理: 租房的代理")])])}),[],!1,null,null,null);r.default=a.exports}}]);