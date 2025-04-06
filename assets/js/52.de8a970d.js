(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{377:function(t,s,a){"use strict";a.r(s);var r=a(13),n=Object(r.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"_1-米家业务相关在线地址"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-米家业务相关在线地址"}},[t._v("#")]),t._v(" 1.米家业务相关在线地址")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://home.miot-spec.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("小米/米家产品库 - Xiaomi Miot Spec"),s("OutboundLink")],1)]),t._v(" "),s("p",[s("a",{attrs:{href:"https://vd.iot.mi.com/home",target:"_blank",rel:"noopener noreferrer"}},[t._v("AIoT平台高仿真系统 - 设备租借"),s("OutboundLink")],1)]),t._v(" "),s("p",[s("a",{attrs:{href:"https://autotest.iot.mi.com/acsLanding/",target:"_blank",rel:"noopener noreferrer"}},[t._v("AIoT认证测试平台 - 自动测试"),s("OutboundLink")],1)]),t._v(" "),s("h2",{attrs:{id:"_2-米家wifi设备的架构和通信流程"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-米家wifi设备的架构和通信流程"}},[t._v("#")]),t._v(" 2.米家WiFi设备的架构和通信流程")]),t._v(" "),s("h4",{attrs:{id:"_2-1、整体架构"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-1、整体架构"}},[t._v("#")]),t._v(" 2-1、整体架构")]),t._v(" "),s("p",[t._v("米家生态的通信流程通常分为三层：")]),t._v(" "),s("p",[t._v("1、"),s("strong",[t._v("设备端")]),t._v("：WiFi模组（如ESP32/乐鑫方案）运行定制固件，支持与云端/App交互。")]),t._v(" "),s("p",[t._v("2、"),s("strong",[t._v("云端服务器")]),t._v("：小米的IoT平台（Miot Cloud）负责设备管理、指令转发和数据存储。")]),t._v(" "),s("p",[t._v("3、"),s("strong",[t._v("客户端（插件/App）")]),t._v("：通过SDK或API与云端交互，间接控制设备。")]),t._v(" "),s("h4",{attrs:{id:"_2-2、关键通信流程"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-2、关键通信流程"}},[t._v("#")]),t._v(" 2-2、关键通信流程")]),t._v(" "),s("p",[s("strong",[t._v("1、设备配网（Provisioning）")])]),t._v(" "),s("p",[t._v("设备初次联网需通过「Smart Config」或「AP配网模式」：")]),t._v(" "),s("ul",[s("li",[s("p",[s("strong",[t._v("Smart Config")]),t._v("：手机App发送WiFi SSID/Password的加密广播包（UDP），设备监听并解析。")])]),t._v(" "),s("li",[s("p",[s("strong",[t._v("AP模式")]),t._v("：设备开启热点，用户连接后通过HTTP页面提交WiFi信息。")])]),t._v(" "),s("li",[s("p",[s("strong",[t._v("配网后")]),t._v("：设备通过MQTT/TLS与小米云建立长连接，并上报设备信息（DID、Token等）。")])])]),t._v(" "),s("p",[s("strong",[t._v("2、认证与绑定")])]),t._v(" "),s("ul",[s("li",[s("p",[s("strong",[t._v("设备唯一标识")]),t._v("：每个设备拥有唯一的DID（Device ID）和Token（加密密钥）。")])]),t._v(" "),s("li",[s("p",[s("strong",[t._v("绑定流程")]),t._v("：用户通过App扫码或手动添加设备，云端验证Token后绑定设备到账户。")])])]),t._v(" "),s("p",[s("strong",[t._v("3. 通信协议")])]),t._v(" "),s("p",[t._v("米家采用分层协议设计，核心协议包括：")]),t._v(" "),s("ul",[s("li",[s("p",[s("strong",[t._v("传输层")]),t._v("：基于TLS加密的MQTT协议（长连接）+ HTTP（配置/OTA升级）。")])]),t._v(" "),s("li",[s("p",[s("strong",[t._v("应用层")]),t._v("：自定义二进制协议（部分设备开放HTTP API），数据格式通常为JSON或Protobuf。")])])]),t._v(" "),s("p",[s("strong",[t._v("MQTT 主题结构")])]),t._v(" "),s("p",[t._v("设备与云端通过MQTT的Topic订阅/发布消息：")]),t._v(" "),s("ul",[s("li",[s("p",[s("strong",[t._v("指令下发")]),t._v("：miio/command/{DID}")])]),t._v(" "),s("li",[s("p",[s("strong",[t._v("状态上报")]),t._v("：miio/report/{DID}")])]),t._v(" "),s("li",[s("p",[s("strong",[t._v("设备心跳")]),t._v("：miio/heartbeat/{DID}")])])]),t._v(" "),s("p",[s("strong",[t._v("4. 指令交互流程")])]),t._v(" "),s("p",[t._v("以开关灯为例：")]),t._v(" "),s("p",[t._v("App/插件端：调用小米云API（如miot-spec.com）发送指令（JSON格式）。")]),t._v(" "),s("p",[t._v("云端：验证权限后，通过MQTT将指令转发到目标设备。")]),t._v(" "),s("p",[t._v('设备端：执行指令并返回状态码（如{"code":0}表示成功）。')]),t._v(" "),s("p",[t._v("云端：将状态同步到App/插件端。")]),t._v(" "),s("p",[s("strong",[t._v("5. 本地通信（可选）")])]),t._v(" "),s("p",[t._v("部分设备支持局域网控制（绕过云端）：")]),t._v(" "),s("ul",[s("li",[s("p",[s("strong",[t._v("协议")]),t._v("：UDP广播 + 自定义二进制协议（如Xiaomi MIoT Spec Local）。")])]),t._v(" "),s("li",[s("p",[s("strong",[t._v("发现设备")]),t._v("：发送广播包到端口54321，设备响应IP和Token。")])]),t._v(" "),s("li",[s("p",[s("strong",[t._v("指令加密")]),t._v("：使用AES-CBC加密，密钥由Token派生。")])])]),t._v(" "),s("h4",{attrs:{id:"_2-3、插件端开发关键点"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-3、插件端开发关键点"}},[t._v("#")]),t._v(" 2-3、插件端开发关键点")]),t._v(" "),s("h4",{attrs:{id:"_2-3-1、接入方式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-1、接入方式"}},[t._v("#")]),t._v(" 2-3-1、接入方式：")]),t._v(" "),s("ul",[s("li",[s("p",[s("strong",[t._v("云端API")]),t._v("：通过小米开放平台（Open Cloud）申请API权限，使用OAuth 2.0授权。")])]),t._v(" "),s("li",[s("p",[s("strong",[t._v("本地控制")]),t._v("：需获取设备的Token和IP，直接发送加密指令（需逆向协议）。")])])]),t._v(" "),s("h4",{attrs:{id:"_2-3-2、sdk支持"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-2、sdk支持"}},[t._v("#")]),t._v(" 2-3-2、SDK支持：")]),t._v(" "),s("p",[t._v("官方提供MiHome SDK或MIoT Spec，封装了协议细节。")]),t._v(" "),s("p",[t._v("第三方库（如python-miio）支持部分设备的本地控制。")]),t._v(" "),s("h4",{attrs:{id:"_2-3-3、数据格式示例-伪代码"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-3、数据格式示例-伪代码"}},[t._v("#")]),t._v(" 2-3-3、数据格式示例（伪代码）：")]),t._v(" "),s("div",{staticClass:"language-json line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 云端API指令")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"method"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"set_properties"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"params"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"did"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"123456"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"siid"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 服务ID")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"piid"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 属性ID")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"value"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br")])]),s("h4",{attrs:{id:"_2-4-安全机制"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-4-安全机制"}},[t._v("#")]),t._v(" 2-4.安全机制")]),t._v(" "),s("p",[s("strong",[t._v("设备认证")]),t._v("：Token绑定设备与账户，防止未授权访问。")]),t._v(" "),s("p",[s("strong",[t._v("通信加密")]),t._v("：TLS 1.2（云端） + AES（本地）。")]),t._v(" "),s("p",[s("strong",[t._v("动态刷新")]),t._v("：部分设备支持Token周期性更新。")])])}),[],!1,null,null,null);s.default=n.exports}}]);