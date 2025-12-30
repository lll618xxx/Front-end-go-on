import{_ as n,c as e,a,o as i}from"./app-igwFT5Gy.js";const l={};function t(d,s){return i(),e("div",null,[...s[0]||(s[0]=[a(`<h2 id="_1、查看-git-配置信息" tabindex="-1"><a class="header-anchor" href="#_1、查看-git-配置信息"><span>1、查看 git 配置信息</span></a></h2><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">git config --list # 查看个人配置</span>
<span class="line">git config --global --list # 查看全局配置</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2、查看-git-用户名和邮箱配置" tabindex="-1"><a class="header-anchor" href="#_2、查看-git-用户名和邮箱配置"><span>2、查看 git 用户名和邮箱配置</span></a></h2><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">git config user.name</span>
<span class="line">git config user.email</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3、全局配置用户名和邮箱" tabindex="-1"><a class="header-anchor" href="#_3、全局配置用户名和邮箱"><span>3、全局配置用户名和邮箱</span></a></h2><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">git config --global user.name &quot;nameVal&quot;</span>
<span class="line">git config --global user.email &quot;eamil@qq.com&quot;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4、分支-branch" tabindex="-1"><a class="header-anchor" href="#_4、分支-branch"><span>4、分支(branch)</span></a></h2><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">git branch 列出本地的分支(*代表本地分支)</span>
<span class="line">git branch -r 列出所有远程分支</span>
<span class="line">git branch -a 列出所有本地分支和远程分支</span>
<span class="line"></span>
<span class="line">git branch &lt;branch name&gt; 新建分支，停留在当前分支</span>
<span class="line">git checkout &lt;branch name&gt; 切换分支 文件的内容也会对应改变</span>
<span class="line">git checkout -b &lt;branch name&gt; 新建并切换分支</span>
<span class="line">git checkout .  #本地所有修改的。没有提交（git add）的，都返回到原来的状态</span>
<span class="line"></span>
<span class="line">git branch -d &lt;branch-name&gt; 删除本地分支</span>
<span class="line">git push origin --delete &lt;branch-name&gt; 删除远程分支</span>
<span class="line"></span>
<span class="line">本地分支与远程分支建立联系</span>
<span class="line">git branch -vv 查看关系</span>
<span class="line">git branch --set-upstream-to=origin/远程分支的名字 本地分支的名字   建立关系</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_5、推送远程-push" tabindex="-1"><a class="header-anchor" href="#_5、推送远程-push"><span>5、推送远程(push)</span></a></h2><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">git push &lt;远程主机名&gt; &lt;本地分支名&gt;:&lt;远程分支名&gt;</span>
<span class="line">git remote 可以查看远程主机名 一般为origin</span>
<span class="line">当远程分支只有一个时，可以直接使用 git push</span>
<span class="line">git push -f  强制推送，慎用</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_6、fetch、pull" tabindex="-1"><a class="header-anchor" href="#_6、fetch、pull"><span>6、fetch、pull</span></a></h2><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">git fetch：相当于是从远程获取最新版本到本地，不会自动merge</span>
<span class="line">git pull：相当于是从远程获取最新版本并merge到本地</span>
<span class="line"></span>
<span class="line">git fetch origin master:tmp</span>
<span class="line">git diff tmp  按q退出</span>
<span class="line">git merge tmp</span>
<span class="line"></span>
<span class="line">git fetch/pull origin &lt;远程分支名&gt;:&lt;本地分支名&gt;  将远程指定分支 拉取到 本地指定分支上</span>
<span class="line">git fetch/pull origin &lt;远程分支名&gt;  将远程指定分支 拉取到 本地当前分支上：</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_7、合并-master-分支" tabindex="-1"><a class="header-anchor" href="#_7、合并-master-分支"><span>7、合并 master 分支</span></a></h2><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">git checkout master</span>
<span class="line">git pull origin master</span>
<span class="line">git merge dev</span>
<span class="line">git push origin master</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_8、退回历史版本" tabindex="-1"><a class="header-anchor" href="#_8、退回历史版本"><span>8、退回历史版本</span></a></h2><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">git reset --hard HEAD^:  版本回退到上个版本;</span>
<span class="line">git reset --hard HEAD^^:  版本回退到上上个版本;</span>
<span class="line">git reset --hard HEAD~100:  版本回退到100个版本;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="附录" tabindex="-1"><a class="header-anchor" href="#附录"><span>附录：</span></a></h2><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">git pull冲突</span>
<span class="line">    error: Your local changes to the following files would be overwritten by merge:</span>
<span class="line">    	xxx/xxx/xxx.java</span>
<span class="line">    Please, commit your changes or stash them before you can merge.</span>
<span class="line">    Aborting</span>
<span class="line"></span>
<span class="line">通常遇到这个问题，你可以直接commit你的修改；但我这次不想这样。</span>
<span class="line">1、看看git stash是如何做的。</span>
<span class="line">    git stash</span>
<span class="line">    git pull</span>
<span class="line">    git stash pop</span>
<span class="line"></span>
<span class="line">2.放弃本地修改，直接覆盖之</span>
<span class="line">    git reset --hard</span>
<span class="line">    git pull</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,18)])])}const c=n(l,[["render",t]]),p=JSON.parse('{"path":"/pages/frontend/util/Config/Git.html","title":"","lang":"zh-CN","frontmatter":{},"git":{"updatedTime":1642952097000,"contributors":[{"name":"nxiang","username":"","email":"837435186@qq.com","commits":1}],"changelog":[{"hash":"e4285b62e9dd4daa30dbc9da49705c46c91bac70","time":1642952097000,"email":"837435186@qq.com","author":"nxiang","message":"init"}]},"filePathRelative":"pages/frontend/util/Config/Git.md"}');export{c as comp,p as data};
