(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{378:function(t,_,v){"use strict";v.r(_);var e=v(13),r=Object(e.a)({},(function(){var t=this,_=t._self._c;return _("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[_("h2",{attrs:{id:"_1、gatt基础"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_1、gatt基础"}},[t._v("#")]),t._v(" 1、gatt基础")]),t._v(" "),_("ul",[_("li",[_("p",[t._v("1、GATT 概述"),_("br"),t._v("\nGATT 是建立在 ATT（Attribute Protocol）之上的高层协议，用于在BLE设备之间传输数据。"),_("br"),t._v("\nGATT 定义了数据的组织方式（如服务、特征值等）以及设备之间的通信规则。"),_("br"),t._v("\nGATT 采用客户端-服务器模型："),_("br"),t._v("\n    GATT 服务器：存储数据并提供数据访问（如传感器设备）。"),_("br"),t._v("\n    GATT 客户端：向服务器请求数据或发送数据（如手机或中央设备）。")])]),t._v(" "),_("li",[_("p",[t._v("2、GATT 数据结构")])])]),t._v(" "),_("p",[t._v("GATT 数据以层次化的方式组织，主要包括以下元素：")]),t._v(" "),_("p",[t._v("  服务（Service）："),_("br"),t._v("\n    一个服务是相关功能的集合，包含一个或多个特征值。"),_("br"),t._v("\n    每个服务由一个唯一的 UUID（通用唯一标识符）标识。"),_("br"),t._v("\n    例如，心率服务（Heart Rate Service）的 UUID 是 0x180D。")]),t._v(" "),_("p",[t._v("  特征值（Characteristic）："),_("br"),t._v("\n    特征值是服务中的具体数据项，包含一个值和描述其属性的元数据。"),_("br"),t._v("\n    每个特征值也有一个唯一的 UUID。"),_("br"),t._v("\n    例如，心率测量特征值（Heart Rate Measurement Characteristic）的 UUID 是 0x2A37。")]),t._v(" "),_("p",[t._v("  描述符（Descriptor）："),_("br"),t._v("\n    描述符用于描述特征值的附加信息，例如通知使能（Client Characteristic Configuration Descriptor, CCCD）。")]),t._v(" "),_("p",[t._v("  属性（Attribute）："),_("br"),t._v("\n    GATT 数据的最小单位，包含一个句柄（Handle）、UUID、值和权限。")]),t._v(" "),_("ul",[_("li",[t._v("3、GATT 操作（GATT 客户端可以通过以下操作与服务器交互）")])]),t._v(" "),_("p",[t._v("读取（Read）：客户端从服务器读取特征值或描述符的值。"),_("br"),t._v("\n写入（Write）：客户端向服务器写入特征值或描述符的值。"),_("br"),t._v("\n通知（Notify）：服务器主动向客户端发送数据，客户端无需确认。"),_("br"),t._v("\n指示（Indicate）：服务器主动向客户端发送数据，客户端需要确认。"),_("br"),t._v("\n发现（Discover）：客户端发现服务器上的服务、特征值和描述符。")]),t._v(" "),_("ul",[_("li",[t._v("4、GATT 连接过程（通常包括以下步骤）")])]),t._v(" "),_("p",[t._v("设备发现：客户端通过扫描发现附近的BLE设备。"),_("br"),t._v("\n建立连接：客户端与目标设备建立连接。"),_("br"),t._v("\n服务发现：客户端发现服务器上的服务。"),_("br"),t._v("\n特征值发现：客户端发现服务中的特征值。"),_("br"),t._v("\n数据交互：客户端通过读取、写入、通知或指示与服务器交互数据。")]),t._v(" "),_("h2",{attrs:{id:"_2、mqtt基础"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_2、mqtt基础"}},[t._v("#")]),t._v(" 2、mqtt基础")]),t._v(" "),_("ul",[_("li",[t._v("1、 MQTT 概述")])]),t._v(" "),_("p",[t._v("MQTT 是一种基于客户端-服务器架构的协议，采用发布/订阅模式。"),_("br"),t._v("\n设计目标：轻量、高效、低带宽占用，适合资源受限的设备。"),_("br"),t._v("\n主要应用场景：物联网、传感器网络、移动应用、智能家居等。")]),t._v(" "),_("ul",[_("li",[t._v("2、MQTT 核心概念")])]),t._v(" "),_("p",[t._v("  客户端（Client）："),_("br"),t._v("\n    发布或订阅消息的设备或应用程序。"),_("br"),t._v("\n    可以是传感器、手机、服务器等。")]),t._v(" "),_("p",[t._v("  服务器（Broker）："),_("br"),t._v("\n    负责接收客户端发布的消息，并将其转发给订阅了相关主题的客户端。")]),t._v(" "),_("p",[t._v("  主题（Topic）："),_("br"),t._v("\n    消息的分类标签，采用分层结构（如 home/livingroom/temperature）。"),_("br"),t._v("\n    客户端通过订阅主题来接收相关消息。")]),t._v(" "),_("p",[t._v("  消息（Message）："),_("br"),t._v("\n    客户端发布的数据，包含主题和有效载荷（Payload）。")]),t._v(" "),_("p",[t._v("  QoS（Quality of Service）："),_("br"),t._v("\n    定义消息传递的服务质量等级，分为 0、1、2 三个级别。")]),t._v(" "),_("p",[t._v("  保留消息（Retained Message）："),_("br"),t._v("\n    服务器会保存最后一条发布到某个主题的消息，新订阅者会立即收到该消息。")]),t._v(" "),_("p",[t._v("  遗嘱消息（Last Will and Testament, LWT）："),_("br"),t._v("\n    客户端意外断开时，服务器会发布预先设置的遗嘱消息。")]),t._v(" "),_("ul",[_("li",[t._v("3.、MQTT 连接过程")])]),t._v(" "),_("p",[t._v("1.建立 TCP 连接：客户端与服务器建立 TCP 连接（默认端口 1883，加密端口 8883）。"),_("br"),t._v("\n2.发送 CONNECT 报文：客户端发送 CONNECT 报文，包含客户端 ID、用户名、密码等信息。"),_("br"),t._v("\n3.服务器响应 CONNACK：服务器验证客户端信息后，返回 CONNACK 报文，确认连接成功。"),_("br"),t._v("\n4.发布/订阅消息：客户端可以发布消息或订阅主题。"),_("br"),t._v("\n5.保持连接：客户端通过定期发送 PINGREQ 报文保持连接。"),_("br"),t._v("\n6.断开连接：客户端发送 DISCONNECT 报文，断开连接。")]),t._v(" "),_("ul",[_("li",[t._v("4、MQTT 报文类型")])]),t._v(" "),_("p",[t._v("CONNECT：客户端请求连接到服务器。"),_("br"),t._v("\nCONNACK：服务器确认连接。"),_("br"),t._v("\nPUBLISH：发布消息。"),_("br"),t._v("\nPUBACK：确认收到 QoS 1 的消息。"),_("br"),t._v("\nPUBREC：确认收到 QoS 2 的消息（第一步）。"),_("br"),t._v("\nPUBREL：确认收到 QoS 2 的消息（第二步）。"),_("br"),t._v("\nPUBCOMP：完成 QoS 2 的消息传递。"),_("br"),t._v("\nSUBSCRIBE：订阅主题。"),_("br"),t._v("\nSUBACK：确认订阅。"),_("br"),t._v("\nUNSUBSCRIBE：取消订阅。"),_("br"),t._v("\nUNSUBACK：确认取消订阅。"),_("br"),t._v("\nPINGREQ：客户端发送心跳请求。"),_("br"),t._v("\nPINGRESP：服务器响应心跳请求。"),_("br"),t._v("\nDISCONNECT：客户端断开连接。")]),t._v(" "),_("ul",[_("li",[t._v("5、QoS 服务质量")])]),t._v(" "),_("p",[t._v("QoS 0：最多一次（At most once），消息可能丢失。"),_("br"),t._v("\nQoS 1：至少一次（At least once），消息可能重复。"),_("br"),t._v("\nQoS 2：恰好一次（Exactly once），消息不丢失且不重复。")]),t._v(" "),_("h2",{attrs:{id:"_3、mqtt和gatt-的异同点"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_3、mqtt和gatt-的异同点"}},[t._v("#")]),t._v(" 3、mqtt和gatt 的异同点")]),t._v(" "),_("h4",{attrs:{id:"相同点"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#相同点"}},[t._v("#")]),t._v(" 相同点")]),t._v(" "),_("ul",[_("li",[_("p",[t._v("1、物联网应用："),_("br"),t._v("\n均广泛用于物联网（IoT）场景，支持设备间的数据传输。")])]),t._v(" "),_("li",[_("p",[t._v("2、低功耗设计："),_("br"),t._v("\n针对资源受限的设备（如传感器、可穿戴设备）优化，强调低功耗。")])]),t._v(" "),_("li",[_("p",[t._v("3、异步通信："),_("br"),t._v("\n支持非实时或事件驱动的数据传输模式。")])])]),t._v(" "),_("h4",{attrs:{id:"核心差异"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#核心差异"}},[t._v("#")]),t._v(" 核心差异")]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",{staticStyle:{"text-align":"center"}},[t._v("特性")]),t._v(" "),_("th",{staticStyle:{"text-align":"center"}},[t._v("MQTT")]),t._v(" "),_("th",{staticStyle:{"text-align":"center"}},[t._v("GATT")])])]),t._v(" "),_("tbody",[_("tr",[_("td",{staticStyle:{"text-align":"center"}},[t._v("协议层级")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("应用层协议（基于 TCP/IP）")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("蓝牙低功耗（BLE）协议栈的一部分")])]),t._v(" "),_("tr",[_("td",{staticStyle:{"text-align":"center"}},[t._v("通信模型")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("发布/订阅（Pub-Sub）模型")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("客户端-服务器（Client-Server）模型")])]),t._v(" "),_("tr",[_("td",{staticStyle:{"text-align":"center"}},[t._v("连接方式")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("依赖 MQTT Broker（代理服务器）")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("直接通过蓝牙连接（点对点）")])]),t._v(" "),_("tr",[_("td",{staticStyle:{"text-align":"center"}},[t._v("传输距离")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("支持远程通信（通过互联网）")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("短距离（蓝牙范围，通常 <100 米）")])]),t._v(" "),_("tr",[_("td",{staticStyle:{"text-align":"center"}},[t._v("数据格式")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("灵活（支持任意二进制或文本数据）")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("结构化数据（基于 BLE 的 Attribute）")])]),t._v(" "),_("tr",[_("td",{staticStyle:{"text-align":"center"}},[t._v("典型应用场景")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("远程监控、云端设备管理")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("近场设备交互（如手机与智能手表）")])]),t._v(" "),_("tr",[_("td",{staticStyle:{"text-align":"center"}},[t._v("协议依赖")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("需要 IP 网络（Wi-Fi/蜂窝网络等）")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("依赖蓝牙协议栈（无需 IP 网络）")])]),t._v(" "),_("tr",[_("td",{staticStyle:{"text-align":"center"}},[t._v("安全性")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("支持 TLS/SSL 加密")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("依赖蓝牙的配对和加密机制")])]),t._v(" "),_("tr",[_("td",{staticStyle:{"text-align":"center"}},[t._v("标准化组织")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("OASIS")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("Bluetooth SIG")])])])]),t._v(" "),_("h4",{attrs:{id:"适用场景选择"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#适用场景选择"}},[t._v("#")]),t._v(" 适用场景选择")]),t._v(" "),_("ul",[_("li",[_("p",[t._v("1、选择 MQTT 的情况："),_("br"),t._v("\n需要跨地域、跨网络的设备通信（如远程传感器上报数据）。"),_("br"),t._v("\n多对多通信（多个设备订阅同一主题）。"),_("br"),t._v("\n需要与云端服务（如 AWS IoT、Azure IoT）集成。")])]),t._v(" "),_("li",[_("p",[t._v("2、选择 GATT 的情况："),_("br"),t._v("\n短距离点对点通信（如手机控制蓝牙耳机）。"),_("br"),t._v("\n低功耗设备（如电池供电的传感器）。"),_("br"),t._v("\n无需互联网连接的本地交互场景。")])])]),t._v(" "),_("h4",{attrs:{id:"技术细节对比"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#技术细节对比"}},[t._v("#")]),t._v(" 技术细节对比")]),t._v(" "),_("ul",[_("li",[_("p",[t._v("1、MQTT 核心概念："),_("br"),t._v("\n主题（Topic）：设备通过订阅主题接收消息。"),_("br"),t._v("\nQoS（服务质量）：0/1/2 三种消息可靠性级别。"),_("br"),t._v("\nBroker：中心化的消息代理（如 Mosquitto、EMQX）。")])]),t._v(" "),_("li",[_("p",[t._v("2、GATT 核心概念："),_("br"),t._v("\nService（服务）：定义设备功能（如心率监测服务）。"),_("br"),t._v("\nCharacteristic（特征）：具体的数据属性（如心率值）。"),_("br"),t._v("\nUUID：唯一标识服务和特征。")])])]),t._v(" "),_("h4",{attrs:{id:"总结"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[t._v("#")]),t._v(" 总结")]),t._v(" "),_("p",[t._v("MQTT 是互联网场景下的轻量级消息协议，适合需要远程、多设备协作的物联网系统。"),_("br"),t._v("\nGATT 是蓝牙近场通信的核心协议，适合低功耗、短距离的本地设备交互。"),_("br"),t._v("\n根据项目需求（距离、网络环境、设备类型）选择合适的协议，也可结合两者（例如：BLE 设备通过网关使用 MQTT 上传数据到云端）。")]),t._v(" "),_("h2",{attrs:{id:"_4、oem-和-odm-的区别"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_4、oem-和-odm-的区别"}},[t._v("#")]),t._v(" 4、OEM 和 ODM 的区别")]),t._v(" "),_("ul",[_("li",[_("p",[t._v("1、OEM（Original Equipment Manufacturer）："),_("br"),t._v("\nOEM 是指原始设备制造商，指的是一家公司设计并制造产品，然后将其品牌和设计授权给另一家公司使用。")])]),t._v(" "),_("li",[_("p",[t._v("2、ODM（Original Design Manufacturer）："),_("br"),t._v("\nODM 是指原始设计制造商，指的是一家公司设计产品，然后将其设计方案和制造流程授权给另一家公司使用。")])])]),t._v(" "),_("p",[t._v("说直白点就是：OEM——我设计好产品后，找代加工厂按照我的（设计图纸、技术要求）进行加工生产，生产出来的产品贴上我的品牌商标；ODM——我把我的要求告诉代加工厂后，代加工厂根据我的要求自行设计出图纸，进而进行加工生产，生产出来的产品贴上我的品牌商标。")]),t._v(" "),_("p",[t._v("区别还是很明显的：OEM是委托方提供设计图纸，由代工方生产；ODM是委托方不提供设计图纸，只提要求，由代工方完成从设计到生产的过程。")]),t._v(" "),_("p",[t._v("举个具体案例：某新锐美妆品牌要推出洁面仪，如果选择OEM模式，需要自己组建团队设计外观结构、选定马达型号、确定震动频率等技术参数，再找工厂开模生产。而选择ODM模式，可以直接从工厂现有设计方案里挑选成熟产品，最快两周就能完成包装设计上市销售。")]),t._v(" "),_("p",[t._v("两种模式的核心区别在于知识产权归属。OEM模式下设计专利归品牌方，工厂未经允许不得将设计用于其他客户。ODM模式下设计方案归工厂所有，可能出现“一鱼多吃”现象——同一款洁面仪可能同时出现在A品牌的直播间和B品牌的线下专柜，只是换了颜色和logo。")])])}),[],!1,null,null,null);_.default=r.exports}}]);