(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{314:function(s,n,a){s.exports=a.p+"assets/img/whistle1.42f78f5c.png"},315:function(s,n,a){s.exports=a.p+"assets/img/whistle2.ade9a9f4.png"},316:function(s,n,a){s.exports=a.p+"assets/img/whistle3.f2482572.png"},317:function(s,n,a){s.exports=a.p+"assets/img/whistle4.d19e974a.png"},378:function(s,n,a){"use strict";a.r(n);var t=a(13),e=Object(t.a)({},(function(){var s=this,n=s._self._c;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h2",{attrs:{id:"_1-whistle基本配置"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-whistle基本配置"}},[s._v("#")]),s._v(" 1.whistle基本配置")]),s._v(" "),n("ul",[n("li",[n("p",[n("a",{attrs:{href:"http://wproxy.org/whistle/install.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("参考："),n("OutboundLink")],1)])]),s._v(" "),n("li",[n("p",[n("a",{attrs:{href:"https://www.wenjiangs.com/doc/s2strrrt44",target:"_blank",rel:"noopener noreferrer"}},[s._v("使用手册："),n("OutboundLink")],1)])]),s._v(" "),n("li",[n("p",[n("a",{attrs:{href:"https://zhuanlan.zhihu.com/p/483975945",target:"_blank",rel:"noopener noreferrer"}},[s._v("使用大白话说明："),n("OutboundLink")],1)])]),s._v(" "),n("li",[n("p",[s._v("chrome代理配置")])])]),s._v(" "),n("img",{attrs:{src:a(314)}}),s._v(" "),n("img",{attrs:{src:a(315)}}),s._v(" "),n("ul",[n("li",[s._v("firefox代理配置")])]),s._v(" "),n("p",[s._v("Firefox: 地址栏输入访问 about:preferences，找到 Proxy，选择 手动代理配置(Manual proxy configuration)，输入代理服务器地址、端口，保存")]),s._v(" "),n("img",{attrs:{src:a(316)}}),s._v(" "),n("h4",{attrs:{id:"生产页面加入vconsole调试"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#生产页面加入vconsole调试"}},[s._v("#")]),s._v(" 生产页面加入Vconsole调试")]),s._v(" "),n("div",{staticClass:"language-js line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[s._v("npm i "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("g whistle"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("inspect\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("h4",{attrs:{id:"在whistle的rules里面添加"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#在whistle的rules里面添加"}},[s._v("#")]),s._v(" 在whistle的rules里面添加")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("https://api.dia.cn:9099 whistle.inspect://\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("img",{attrs:{src:a(317)}}),s._v(" "),n("h2",{attrs:{id:"_2-whistle-rules配置"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-whistle-rules配置"}},[s._v("#")]),s._v(" 2.whistle rules配置")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("# 通过配置host,绕过dns解析,直接访问指定的ip地址\n# 127.0.0.1 https://pplapi.dian-su.cn\n\n# 页面重定向\n# https://miyah5-2.taomitao.com redirect://https://www.baidu.com \n\n# 延迟N后返回结果\n# /https://pplapi.dian-su.cn:9099/vueAdmin/miya/ resDelay://5000\n\n# 修改状态码\n# https://pplapi.dian-su.cn:9099/vueAdmin/miya statusCode://500\n\n\n# 插入js脚本 脚本文件在values里面写\nhttps://miyah5-2.taomitao.com jsPrepend://{reload.js}\n\n# 页面加入vConsole 前提是先安装指定依赖 npm i -g whistle.inspect\nhttps://miyah5-2.taomitao.com whistle.inspect://\n\n# 本地替换指定文件调试\n# apixxxx.js file:///Users/seven/apixxxx.js\n\n# 修改接口的返回体\n# https://pplapi.dian-su.cn:9099/vueAdmin/miya file://{test.json}\n\n# 修改删除响应头、请求头\n# https://pplapi.dian-su.cn:9099 reqHeaders://{reqHeaders.json}\n\n# 修改ua\nhttps://pplapi.dian-su.cn:9099/vueAdmin/miya/ ua://Mozilla/5.0\n\n# 控制网速\n# api.io.mi.com reqSpeed://1\n# api.io.mi.com resSpeed://1\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br"),n("span",{staticClass:"line-number"},[s._v("30")]),n("br"),n("span",{staticClass:"line-number"},[s._v("31")]),n("br"),n("span",{staticClass:"line-number"},[s._v("32")]),n("br"),n("span",{staticClass:"line-number"},[s._v("33")]),n("br"),n("span",{staticClass:"line-number"},[s._v("34")]),n("br")])])])}),[],!1,null,null,null);n.default=e.exports}}]);