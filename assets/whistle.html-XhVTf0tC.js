import{_ as n,c as e,a,o as i}from"./app-BKtqNPcQ.js";const l="/Front-end-go-on/assets/whistle1-BKKbHH6C.png",p="/Front-end-go-on/assets/whistle2-DOSy5fRi.png",r="/Front-end-go-on/assets/whistle3-CFegmA-Z.png",t="/Front-end-go-on/assets/whistle4-BbcvwnEy.png",c={};function d(o,s){return i(),e("div",null,[...s[0]||(s[0]=[a('<h2 id="_1-whistle基本配置" tabindex="-1"><a class="header-anchor" href="#_1-whistle基本配置"><span>1.whistle基本配置</span></a></h2><ul><li><p><a href="http://wproxy.org/whistle/install.html" target="_blank" rel="noopener noreferrer">参考：</a></p></li><li><p><a href="https://www.wenjiangs.com/doc/s2strrrt44" target="_blank" rel="noopener noreferrer">使用手册：</a></p></li><li><p><a href="https://zhuanlan.zhihu.com/p/483975945" target="_blank" rel="noopener noreferrer">使用大白话说明：</a></p></li><li><p>chrome代理配置</p></li></ul><img src="'+l+'"><img src="'+p+'"><ul><li>firefox代理配置</li></ul><p>Firefox: 地址栏输入访问 about:preferences，找到 Proxy，选择 手动代理配置(Manual proxy configuration)，输入代理服务器地址、端口，保存</p><img src="'+r+`"><h4 id="生产页面加入vconsole调试" tabindex="-1"><a class="header-anchor" href="#生产页面加入vconsole调试"><span>生产页面加入Vconsole调试</span></a></h4><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line">npm i <span class="token operator">-</span>g whistle<span class="token punctuation">.</span>inspect</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h4 id="在whistle的rules里面添加" tabindex="-1"><a class="header-anchor" href="#在whistle的rules里面添加"><span>在whistle的rules里面添加</span></a></h4><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">https://api.dia.cn:9099 whistle.inspect://</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><img src="`+t+`"><h2 id="_2-whistle-rules配置" tabindex="-1"><a class="header-anchor" href="#_2-whistle-rules配置"><span>2.whistle rules配置</span></a></h2><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line"># 通过配置host,绕过dns解析,直接访问指定的ip地址</span>
<span class="line"># 127.0.0.1 https://pplapi.dian-su.cn</span>
<span class="line"></span>
<span class="line"># 页面重定向</span>
<span class="line"># https://miyah5-2.taomitao.com redirect://https://www.baidu.com </span>
<span class="line"></span>
<span class="line"># 延迟N后返回结果</span>
<span class="line"># /https://pplapi.dian-su.cn:9099/vueAdmin/miya/ resDelay://5000</span>
<span class="line"></span>
<span class="line"># 修改状态码</span>
<span class="line"># https://pplapi.dian-su.cn:9099/vueAdmin/miya statusCode://500</span>
<span class="line"></span>
<span class="line"></span>
<span class="line"># 插入js脚本 脚本文件在values里面写</span>
<span class="line">https://miyah5-2.taomitao.com jsPrepend://{reload.js}</span>
<span class="line"></span>
<span class="line"># 页面加入vConsole 前提是先安装指定依赖 npm i -g whistle.inspect</span>
<span class="line">https://miyah5-2.taomitao.com whistle.inspect://</span>
<span class="line"></span>
<span class="line"># 本地替换指定文件调试</span>
<span class="line"># apixxxx.js file:///Users/seven/apixxxx.js</span>
<span class="line"></span>
<span class="line"># 修改接口的返回体</span>
<span class="line"># https://pplapi.dian-su.cn:9099/vueAdmin/miya file://{test.json}</span>
<span class="line"></span>
<span class="line"># 修改删除响应头、请求头</span>
<span class="line"># https://pplapi.dian-su.cn:9099 reqHeaders://{reqHeaders.json}</span>
<span class="line"></span>
<span class="line"># 修改ua</span>
<span class="line">https://pplapi.dian-su.cn:9099/vueAdmin/miya/ ua://Mozilla/5.0</span>
<span class="line"></span>
<span class="line"># 控制网速</span>
<span class="line"># api.io.mi.com reqSpeed://1</span>
<span class="line"># api.io.mi.com resSpeed://1</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,14)])])}const u=n(c,[["render",d]]),v=JSON.parse('{"path":"/pages/otherLang/wireshark/whistle.html","title":"","lang":"zh-CN","frontmatter":{},"git":{"updatedTime":1668650857000,"contributors":[{"name":"nxiang","username":"","email":"837435186@qq.com","commits":2}],"changelog":[{"hash":"05146083fdbd7ba995c7b46804b7dc93bff1bbd3","time":1668650857000,"email":"837435186@qq.com","author":"nxiang","message":"1"},{"hash":"eb402325ef5eb4d86d652ed19aa99bd6d505bba0","time":1667631445000,"email":"837435186@qq.com","author":"nxiang","message":"ud"}]},"filePathRelative":"pages/otherLang/wireshark/whistle.md"}');export{u as comp,v as data};
