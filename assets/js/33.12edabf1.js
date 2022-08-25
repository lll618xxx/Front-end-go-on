(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{402:function(s,a,t){"use strict";t.r(a);var n=t(42),e=Object(n.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h2",{attrs:{id:"_1、查看-git-配置信息"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1、查看-git-配置信息"}},[s._v("#")]),s._v(" 1、查看 git 配置信息")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("git config --list # 查看个人配置\ngit config --global --list # 查看全局配置\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("h2",{attrs:{id:"_2、查看-git-用户名和邮箱配置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2、查看-git-用户名和邮箱配置"}},[s._v("#")]),s._v(" 2、查看 git 用户名和邮箱配置")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("git config user.name\ngit config user.email\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("h2",{attrs:{id:"_3、全局配置用户名和邮箱"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3、全局配置用户名和邮箱"}},[s._v("#")]),s._v(" 3、全局配置用户名和邮箱")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v('git config --global user.name "nameVal"\ngit config --global user.email "eamil@qq.com"\n')])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("h2",{attrs:{id:"_4、分支-branch"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4、分支-branch"}},[s._v("#")]),s._v(" 4、分支(branch)")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("git branch 列出本地的分支(*代表本地分支)\ngit branch -r 列出所有远程分支\ngit branch -a 列出所有本地分支和远程分支\n\ngit branch <branch name> 新建分支，停留在当前分支\ngit checkout <branch name> 切换分支 文件的内容也会对应改变\ngit checkout -b <branch name> 新建并切换分支\ngit checkout .  #本地所有修改的。没有提交（git add）的，都返回到原来的状态\n\ngit branch -d <branch-name> 删除本地分支\ngit push origin --delete <branch-name> 删除远程分支\n\n本地分支与远程分支建立联系\ngit branch -vv 查看关系\ngit branch --set-upstream-to=origin/远程分支的名字 本地分支的名字   建立关系\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br")])]),t("h2",{attrs:{id:"_5、推送远程-push"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_5、推送远程-push"}},[s._v("#")]),s._v(" 5、推送远程(push)")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("git push <远程主机名> <本地分支名>:<远程分支名>\ngit remote 可以查看远程主机名 一般为origin\n当远程分支只有一个时，可以直接使用 git push\ngit push -f  强制推送，慎用\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("h2",{attrs:{id:"_6、fetch、pull"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_6、fetch、pull"}},[s._v("#")]),s._v(" 6、fetch、pull")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("git fetch：相当于是从远程获取最新版本到本地，不会自动merge\ngit pull：相当于是从远程获取最新版本并merge到本地\n\ngit fetch origin master:tmp\ngit diff tmp  按q退出\ngit merge tmp\n\ngit fetch/pull origin <远程分支名>:<本地分支名>  将远程指定分支 拉取到 本地指定分支上\ngit fetch/pull origin <远程分支名>  将远程指定分支 拉取到 本地当前分支上：\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br")])]),t("h2",{attrs:{id:"_7、合并-master-分支"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_7、合并-master-分支"}},[s._v("#")]),s._v(" 7、合并 master 分支")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("git checkout master\ngit pull origin master\ngit merge dev\ngit push origin master\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("h2",{attrs:{id:"_8、退回历史版本"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_8、退回历史版本"}},[s._v("#")]),s._v(" 8、退回历史版本")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("git reset --hard HEAD^:  版本回退到上个版本;\ngit reset --hard HEAD^^:  版本回退到上上个版本;\ngit reset --hard HEAD~100:  版本回退到100个版本;\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("h2",{attrs:{id:"附录"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#附录"}},[s._v("#")]),s._v(" 附录：")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("git pull冲突\n    error: Your local changes to the following files would be overwritten by merge:\n    \txxx/xxx/xxx.java\n    Please, commit your changes or stash them before you can merge.\n    Aborting\n\n通常遇到这个问题，你可以直接commit你的修改；但我这次不想这样。\n1、看看git stash是如何做的。\n    git stash\n    git pull\n    git stash pop\n\n2.放弃本地修改，直接覆盖之\n    git reset --hard\n    git pull\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br")])])])}),[],!1,null,null,null);a.default=e.exports}}]);