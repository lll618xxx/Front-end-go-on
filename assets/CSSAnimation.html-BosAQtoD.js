import{_ as s,c as a,a as p,o as t}from"./app-BKtqNPcQ.js";const e="/Front-end-go-on/assets/avtiveBtn-D9I-6FVV.gif",l="/Front-end-go-on/assets/1-Db2Qnzu4.gif",c="/Front-end-go-on/assets/2-BKQNEegR.gif",i="/Front-end-go-on/assets/3-DJS2sPy1.gif",o="/Front-end-go-on/assets/4-Bsh-MdN3.gif",u={};function r(d,n){return t(),a("div",null,[...n[0]||(n[0]=[p(`<h2 id="_1、点击按钮缩放动画" tabindex="-1"><a class="header-anchor" href="#_1、点击按钮缩放动画"><span>1、点击按钮缩放动画</span></a></h2><div class="language-scss line-numbers-mode" data-highlighter="prismjs" data-ext="scss"><pre><code class="language-scss"><span class="line"><span class="token selector">.activeBtn </span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token selector"><span class="token parent important">&amp;</span>:active </span><span class="token punctuation">{</span></span>
<span class="line">        <span class="token property">animation</span><span class="token punctuation">:</span> animateBtn 0.4s<span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token atrule"><span class="token rule">@keyframes</span> animateBtn</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token selector">0% </span><span class="token punctuation">{</span></span>
<span class="line">        <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">scale</span><span class="token punctuation">(</span>1<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    <span class="token selector">50% </span><span class="token punctuation">{</span></span>
<span class="line">        <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">scale</span><span class="token punctuation">(</span>0.86<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    <span class="token selector">100% </span><span class="token punctuation">{</span></span>
<span class="line">        <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">scale</span><span class="token punctuation">(</span>1<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><img src="`+e+`"><h2 id="_2、上下浮动动画" tabindex="-1"><a class="header-anchor" href="#_2、上下浮动动画"><span>2、上下浮动动画</span></a></h2><div class="language-scss line-numbers-mode" data-highlighter="prismjs" data-ext="scss"><pre><code class="language-scss"><span class="line"><span class="token property">animation</span><span class="token punctuation">:</span> upDown 2s infinite<span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token atrule"><span class="token rule">@keyframes</span> upDown</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token selector">0% </span><span class="token punctuation">{</span></span>
<span class="line">        <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translate</span><span class="token punctuation">(</span>0px<span class="token punctuation">,</span> 0px<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    <span class="token selector">50% </span><span class="token punctuation">{</span></span>
<span class="line">        <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translate</span><span class="token punctuation">(</span>0px<span class="token punctuation">,</span> -30px<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    <span class="token selector">100% </span><span class="token punctuation">{</span></span>
<span class="line">        <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translate</span><span class="token punctuation">(</span>0px<span class="token punctuation">,</span> 0px<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><img src="`+l+`"><h2 id="_3、左右晃动小动画" tabindex="-1"><a class="header-anchor" href="#_3、左右晃动小动画"><span>3、左右晃动小动画</span></a></h2><div class="language-scss line-numbers-mode" data-highlighter="prismjs" data-ext="scss"><pre><code class="language-scss"><span class="line"><span class="token selector">&lt;span class=&quot;red-packets&quot;&gt;&lt;/span&gt;</span>
<span class="line"></span>
<span class="line">.red-packets </span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">display</span><span class="token punctuation">:</span> inline-block<span class="token punctuation">;</span></span>
<span class="line">    <span class="token property">width</span><span class="token punctuation">:</span> 35px<span class="token punctuation">;</span></span>
<span class="line">    <span class="token property">height</span><span class="token punctuation">:</span> 40px<span class="token punctuation">;</span></span>
<span class="line">    <span class="token property">background</span><span class="token punctuation">:</span> <span class="token url">url</span><span class="token punctuation">(</span><span class="token string">&#39;https://iknowpc.bdimg.com/static/question-new/widget/ask/replyer/img/wld-exp-btn-hb.f91c70d.png&#39;</span><span class="token punctuation">)</span></span>
<span class="line">        no-repeat<span class="token punctuation">;</span></span>
<span class="line">    <span class="token property">background-size</span><span class="token punctuation">:</span> 100% 100%<span class="token punctuation">;</span></span>
<span class="line">    <span class="token property">animation-name</span><span class="token punctuation">:</span> upAnimation<span class="token punctuation">;</span></span>
<span class="line">    <span class="token property">transform-origin</span><span class="token punctuation">:</span> center bottom<span class="token punctuation">;</span></span>
<span class="line">    <span class="token property">animation-duration</span><span class="token punctuation">:</span> 2s<span class="token punctuation">;</span></span>
<span class="line">    <span class="token property">animation-fill-mode</span><span class="token punctuation">:</span> both<span class="token punctuation">;</span></span>
<span class="line">    <span class="token property">animation-iteration-count</span><span class="token punctuation">:</span> infinite<span class="token punctuation">;</span></span>
<span class="line">    <span class="token property">animation-delay</span><span class="token punctuation">:</span> 0.5s<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token atrule"><span class="token rule">@keyframes</span> upAnimation</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token selector">0% </span><span class="token punctuation">{</span></span>
<span class="line">        <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">rotate</span><span class="token punctuation">(</span>0deg<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token property">transition-timing-function</span><span class="token punctuation">:</span> <span class="token function">cubic-bezier</span><span class="token punctuation">(</span></span>
<span class="line">            0.215<span class="token punctuation">,</span></span>
<span class="line">            0.61<span class="token punctuation">,</span></span>
<span class="line">            0.355<span class="token punctuation">,</span></span>
<span class="line">            1</span>
<span class="line">        <span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    <span class="token selector">10% </span><span class="token punctuation">{</span></span>
<span class="line">        <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">rotate</span><span class="token punctuation">(</span>-12deg<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token property">transition-timing-function</span><span class="token punctuation">:</span> <span class="token function">cubic-bezier</span><span class="token punctuation">(</span></span>
<span class="line">            0.215<span class="token punctuation">,</span></span>
<span class="line">            0.61<span class="token punctuation">,</span></span>
<span class="line">            0.355<span class="token punctuation">,</span></span>
<span class="line">            1</span>
<span class="line">        <span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    <span class="token selector">20% </span><span class="token punctuation">{</span></span>
<span class="line">        <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">rotate</span><span class="token punctuation">(</span>12deg<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token property">transition-timing-function</span><span class="token punctuation">:</span> <span class="token function">cubic-bezier</span><span class="token punctuation">(</span></span>
<span class="line">            0.215<span class="token punctuation">,</span></span>
<span class="line">            0.61<span class="token punctuation">,</span></span>
<span class="line">            0.355<span class="token punctuation">,</span></span>
<span class="line">            1</span>
<span class="line">        <span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    <span class="token selector">28% </span><span class="token punctuation">{</span></span>
<span class="line">        <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">rotate</span><span class="token punctuation">(</span>-10deg<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token property">transition-timing-function</span><span class="token punctuation">:</span> <span class="token function">cubic-bezier</span><span class="token punctuation">(</span></span>
<span class="line">            0.215<span class="token punctuation">,</span></span>
<span class="line">            0.61<span class="token punctuation">,</span></span>
<span class="line">            0.355<span class="token punctuation">,</span></span>
<span class="line">            1</span>
<span class="line">        <span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    <span class="token selector">36% </span><span class="token punctuation">{</span></span>
<span class="line">        <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">rotate</span><span class="token punctuation">(</span>10deg<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token property">transition-timing-function</span><span class="token punctuation">:</span> <span class="token function">cubic-bezier</span><span class="token punctuation">(</span></span>
<span class="line">            0.755<span class="token punctuation">,</span></span>
<span class="line">            0.5<span class="token punctuation">,</span></span>
<span class="line">            0.855<span class="token punctuation">,</span></span>
<span class="line">            0.06</span>
<span class="line">        <span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    <span class="token selector">42% </span><span class="token punctuation">{</span></span>
<span class="line">        <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">rotate</span><span class="token punctuation">(</span>-8deg<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token property">transition-timing-function</span><span class="token punctuation">:</span> <span class="token function">cubic-bezier</span><span class="token punctuation">(</span></span>
<span class="line">            0.755<span class="token punctuation">,</span></span>
<span class="line">            0.5<span class="token punctuation">,</span></span>
<span class="line">            0.855<span class="token punctuation">,</span></span>
<span class="line">            0.06</span>
<span class="line">        <span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    <span class="token selector">48% </span><span class="token punctuation">{</span></span>
<span class="line">        <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">rotate</span><span class="token punctuation">(</span>8deg<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token property">transition-timing-function</span><span class="token punctuation">:</span> <span class="token function">cubic-bezier</span><span class="token punctuation">(</span></span>
<span class="line">            0.755<span class="token punctuation">,</span></span>
<span class="line">            0.5<span class="token punctuation">,</span></span>
<span class="line">            0.855<span class="token punctuation">,</span></span>
<span class="line">            0.06</span>
<span class="line">        <span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    <span class="token selector">52% </span><span class="token punctuation">{</span></span>
<span class="line">        <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">rotate</span><span class="token punctuation">(</span>-4deg<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token property">transition-timing-function</span><span class="token punctuation">:</span> <span class="token function">cubic-bezier</span><span class="token punctuation">(</span></span>
<span class="line">            0.755<span class="token punctuation">,</span></span>
<span class="line">            0.5<span class="token punctuation">,</span></span>
<span class="line">            0.855<span class="token punctuation">,</span></span>
<span class="line">            0.06</span>
<span class="line">        <span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    <span class="token selector">56% </span><span class="token punctuation">{</span></span>
<span class="line">        <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">rotate</span><span class="token punctuation">(</span>4deg<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token property">transition-timing-function</span><span class="token punctuation">:</span> <span class="token function">cubic-bezier</span><span class="token punctuation">(</span></span>
<span class="line">            0.755<span class="token punctuation">,</span></span>
<span class="line">            0.5<span class="token punctuation">,</span></span>
<span class="line">            0.855<span class="token punctuation">,</span></span>
<span class="line">            0.06</span>
<span class="line">        <span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    <span class="token selector">60% </span><span class="token punctuation">{</span></span>
<span class="line">        <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">rotate</span><span class="token punctuation">(</span>0deg<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token property">transition-timing-function</span><span class="token punctuation">:</span> <span class="token function">cubic-bezier</span><span class="token punctuation">(</span></span>
<span class="line">            0.755<span class="token punctuation">,</span></span>
<span class="line">            0.5<span class="token punctuation">,</span></span>
<span class="line">            0.855<span class="token punctuation">,</span></span>
<span class="line">            0.06</span>
<span class="line">        <span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    <span class="token selector">100% </span><span class="token punctuation">{</span></span>
<span class="line">        <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">rotate</span><span class="token punctuation">(</span>0deg<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token property">transition-timing-function</span><span class="token punctuation">:</span> <span class="token function">cubic-bezier</span><span class="token punctuation">(</span></span>
<span class="line">            0.215<span class="token punctuation">,</span></span>
<span class="line">            0.61<span class="token punctuation">,</span></span>
<span class="line">            0.355<span class="token punctuation">,</span></span>
<span class="line">            1</span>
<span class="line">        <span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><img src="`+c+`"><h2 id="_4、水波纹动画" tabindex="-1"><a class="header-anchor" href="#_4、水波纹动画"><span>4、水波纹动画</span></a></h2><div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html"><pre><code class="language-html"><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>circle-breath<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><div class="language-css line-numbers-mode" data-highlighter="prismjs" data-ext="css"><pre><code class="language-css"><span class="line"><span class="token selector">.circle-breath</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">background</span><span class="token punctuation">:</span> pink<span class="token punctuation">;</span></span>
<span class="line">    <span class="token property">height</span><span class="token punctuation">:</span> 36px<span class="token punctuation">;</span></span>
<span class="line">    <span class="token property">width</span><span class="token punctuation">:</span> 36px<span class="token punctuation">;</span></span>
<span class="line">    <span class="token property">border-radius</span><span class="token punctuation">:</span> 50%<span class="token punctuation">;</span></span>
<span class="line">    <span class="token property">animation</span><span class="token punctuation">:</span> donghua 2.4s infinite<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token atrule"><span class="token rule">@keyframes</span> donghua</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token selector">0%</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">scale</span><span class="token punctuation">(</span>0.60<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token comment">/* 注意rgba中的a的设置 */</span></span>
<span class="line">        <span class="token property">box-shadow</span><span class="token punctuation">:</span> 0 0 0 0 <span class="token function">rgba</span><span class="token punctuation">(</span>204<span class="token punctuation">,</span> 73<span class="token punctuation">,</span> 152<span class="token punctuation">,</span> 60%<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">    <span class="token selector">60%</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">scale</span><span class="token punctuation">(</span>1<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token property">box-shadow</span><span class="token punctuation">:</span> 0 0 0 36px <span class="token function">rgba</span><span class="token punctuation">(</span>204<span class="token punctuation">,</span> 73<span class="token punctuation">,</span> 152<span class="token punctuation">,</span> 0%<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">    <span class="token selector">100%</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">scale</span><span class="token punctuation">(</span>0.60<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token property">box-shadow</span><span class="token punctuation">:</span> 0 0 0 0 <span class="token function">rgba</span><span class="token punctuation">(</span>204<span class="token punctuation">,</span> 73<span class="token punctuation">,</span> 152<span class="token punctuation">,</span> 0%<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><img src="`+i+`"><h2 id="_5、语音声纹动画" tabindex="-1"><a class="header-anchor" href="#_5、语音声纹动画"><span>5、语音声纹动画</span></a></h2><div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html"><pre><code class="language-html"><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>microphone-btn<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>microphone-icon recording<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span></span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>wave<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span></span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>wave<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span></span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>wave<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-css line-numbers-mode" data-highlighter="prismjs" data-ext="css"><pre><code class="language-css"><span class="line"><span class="token selector">.microphone-btn</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">border</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span></span>
<span class="line">    <span class="token property">background-color</span><span class="token punctuation">:</span> transparent<span class="token punctuation">;</span></span>
<span class="line">    <span class="token property">cursor</span><span class="token punctuation">:</span> pointer<span class="token punctuation">;</span></span>
<span class="line">    <span class="token property">position</span><span class="token punctuation">:</span> relative<span class="token punctuation">;</span></span>
<span class="line">    <span class="token property">outline</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token selector">.microphone-icon</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">width</span><span class="token punctuation">:</span> 50px<span class="token punctuation">;</span></span>
<span class="line">    <span class="token property">height</span><span class="token punctuation">:</span> 50px<span class="token punctuation">;</span></span>
<span class="line">    <span class="token property">background-color</span><span class="token punctuation">:</span> #333<span class="token punctuation">;</span></span>
<span class="line">    <span class="token property">border-radius</span><span class="token punctuation">:</span> 50%<span class="token punctuation">;</span></span>
<span class="line">    <span class="token property">position</span><span class="token punctuation">:</span> relative<span class="token punctuation">;</span></span>
<span class="line">    <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span></span>
<span class="line">    <span class="token property">justify-content</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span></span>
<span class="line">    <span class="token property">align-items</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span></span>
<span class="line">    <span class="token property">transition</span><span class="token punctuation">:</span> background-color 0.3s<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token selector">.microphone-icon::before</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">content</span><span class="token punctuation">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token property">width</span><span class="token punctuation">:</span> 20px<span class="token punctuation">;</span></span>
<span class="line">    <span class="token property">height</span><span class="token punctuation">:</span> 30px<span class="token punctuation">;</span></span>
<span class="line">    <span class="token property">background-color</span><span class="token punctuation">:</span> #fff<span class="token punctuation">;</span></span>
<span class="line">    <span class="token property">border-radius</span><span class="token punctuation">:</span> 10px 10px 0 0<span class="token punctuation">;</span></span>
<span class="line">    <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span></span>
<span class="line">    <span class="token property">top</span><span class="token punctuation">:</span> 5px<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token selector">.microphone-icon::after</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">content</span><span class="token punctuation">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token property">width</span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span></span>
<span class="line">    <span class="token property">height</span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span></span>
<span class="line">    <span class="token property">background-color</span><span class="token punctuation">:</span> #fff<span class="token punctuation">;</span></span>
<span class="line">    <span class="token property">border-radius</span><span class="token punctuation">:</span> 50%<span class="token punctuation">;</span></span>
<span class="line">    <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span></span>
<span class="line">    <span class="token property">bottom</span><span class="token punctuation">:</span> 5px<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token selector">.wave</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span></span>
<span class="line">    <span class="token property">border</span><span class="token punctuation">:</span> 4px solid #f00<span class="token punctuation">;</span> <span class="token comment">/* 设置线的粗细 */</span></span>
<span class="line">    <span class="token property">border-radius</span><span class="token punctuation">:</span> 50%<span class="token punctuation">;</span></span>
<span class="line">    <span class="token property">opacity</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span></span>
<span class="line">    <span class="token property">animation</span><span class="token punctuation">:</span> wave-animation 1.5s infinite<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token selector">.microphone-icon.recording .wave:nth-child(1)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">animation-delay</span><span class="token punctuation">:</span> 0s<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token selector">.microphone-icon.recording .wave:nth-child(2)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">animation-delay</span><span class="token punctuation">:</span> 0.5s<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token selector">.microphone-icon.recording .wave:nth-child(3)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">animation-delay</span><span class="token punctuation">:</span> 1s<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token atrule"><span class="token rule">@keyframes</span> wave-animation</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token selector">0%</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token property">width</span><span class="token punctuation">:</span> 50px<span class="token punctuation">;</span></span>
<span class="line">        <span class="token property">height</span><span class="token punctuation">:</span> 50px<span class="token punctuation">;</span></span>
<span class="line">        <span class="token property">opacity</span><span class="token punctuation">:</span> 1<span class="token punctuation">;</span></span>
<span class="line">        <span class="token property">border-color</span><span class="token punctuation">:</span> <span class="token function">rgba</span><span class="token punctuation">(</span>255<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 1<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    <span class="token selector">100%</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token property">width</span><span class="token punctuation">:</span> 150px<span class="token punctuation">;</span></span>
<span class="line">        <span class="token property">height</span><span class="token punctuation">:</span> 150px<span class="token punctuation">;</span></span>
<span class="line">        <span class="token property">opacity</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span></span>
<span class="line">        <span class="token property">border-color</span><span class="token punctuation">:</span> <span class="token function">rgba</span><span class="token punctuation">(</span>255<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><img src="`+o+'">',17)])])}const v=s(u,[["render",r]]),m=JSON.parse('{"path":"/pages/frontend/skill/CSSAnimation.html","title":"","lang":"zh-CN","frontmatter":{},"git":{"updatedTime":1732341724000,"contributors":[{"name":"李旭翔","username":"","email":"837435186@qq.com","commits":1},{"name":"nxiang","username":"","email":"837435186@qq.com","commits":1}],"changelog":[{"hash":"a85d8df1b5945a10c54c0b5672aaada66bcb0a4a","time":1732341724000,"email":"837435186@qq.com","author":"nxiang","message":"888"},{"hash":"435e8b6d2cb82ab6c2fb01fba6e24723da745e57","time":1660299920000,"email":"837435186@qq.com","author":"李旭翔","message":"✨ uo"}]},"filePathRelative":"pages/frontend/skill/CSSAnimation.md"}');export{v as comp,m as data};
