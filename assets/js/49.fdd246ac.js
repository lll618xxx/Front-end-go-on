(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{370:function(s,a,e){"use strict";e.r(a);var t=e(13),n=Object(t.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"_1、linux安装node"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1、linux安装node"}},[s._v("#")]),s._v(" 1、linux安装node")]),s._v(" "),a("h3",{attrs:{id:"_1-1、使用wget命令-下载文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-1、使用wget命令-下载文件"}},[s._v("#")]),s._v(" 1-1、使用wget命令，下载文件")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("wget https://nodejs.org/dist/v14.16.1/node-v14.16.1-linux-x64.tar.xz\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h3",{attrs:{id:"_1-2、解压"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-2、解压"}},[s._v("#")]),s._v(" 1-2、解压")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("tar -xf node-v14.16.1-linux-x64.tar.xz\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h3",{attrs:{id:"_1-3、配置环境变量"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-3、配置环境变量"}},[s._v("#")]),s._v(" 1-3、配置环境变量")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("vim /etc/profile  如果没有权限，先加权限(sudo vim /etc/profile)\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("ul",[a("li",[s._v("添加如下语句")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("exexport NODE_HOME=/usr/local/nodejs // 这里是解压之后的node路径\nexport PATH=$NODE_HOME/bin:$PATH\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("ul",[a("li",[s._v("刷新权限")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("source /etc/profile\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h2",{attrs:{id:"_2、linux安装nginx"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2、linux安装nginx"}},[s._v("#")]),s._v(" 2、linux安装nginx")]),s._v(" "),a("p",[a("a",{attrs:{href:"https://www.jianshu.com/p/9f2c162ac77c",target:"_blank",rel:"noopener noreferrer"}},[s._v("参考"),a("OutboundLink")],1)]),s._v(" "),a("h3",{attrs:{id:"_2-1、nginx操作命令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-1、nginx操作命令"}},[s._v("#")]),s._v(" 2-1、nginx操作命令")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("/usr/local/nginx/sbin\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("命令在进入上面的目录之后执行")]),s._v(" "),a("ul",[a("li",[s._v("启动")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("./nginx\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("ul",[a("li",[s._v("修改配置后重启")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("./nginx -s reload\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("ul",[a("li",[s._v("关闭")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("ps -aux | grep 'nginx'\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])])])}),[],!1,null,null,null);a.default=n.exports}}]);