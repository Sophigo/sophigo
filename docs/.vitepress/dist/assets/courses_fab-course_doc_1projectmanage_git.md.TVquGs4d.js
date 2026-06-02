import{_ as e,o as s,c as n,a1 as t}from"./chunks/framework.BX4nIuL2.js";const h=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"courses/fab-course/doc/1projectmanage/git.md","filePath":"courses/fab-course/doc/1projectmanage/git.md"}'),i={name:"courses/fab-course/doc/1projectmanage/git.md"};function o(p,a,l,r,c,d){return s(),n("div",null,[...a[0]||(a[0]=[t(`<h2 id="basic-introduce" tabindex="-1">Basic introduce <a class="header-anchor" href="#basic-introduce" aria-label="Permalink to &quot;Basic introduce&quot;">​</a></h2><p>Git is a free and open source distributed version control system designed to handle everything from small to very large projects with speed and efficiency.</p><p>Git is easy to learn and has a tiny footprint with lightning fast performance. It outclasses SCM tools like Subversion, CVS, Perforce, and ClearCase with features like cheap local branching, convenient staging areas, and multiple workflows.</p><p>We can learn the general knowledge on<a href="https://git-scm.com/" target="_blank" rel="noreferrer">GIT</a> We can get the detail information about git on the <a href="https://git-scm.com/book/en/v2" target="_blank" rel="noreferrer">GIT pro</a></p><p><img src="https://nexmaker-profabx.oss-cn-hangzhou.aliyuncs.com/img/gitrepository.png" alt=""></p><p><img src="https://nexmaker-profabx.oss-cn-hangzhou.aliyuncs.com/img/gitversion.png" alt=""><img src="https://nexmaker-profabx.oss-cn-hangzhou.aliyuncs.com/img/gittime1.png" alt=""></p><p><img src="https://nexmaker-profabx.oss-cn-hangzhou.aliyuncs.com/img/gittime2.png" alt=""><img src="https://nexmaker-profabx.oss-cn-hangzhou.aliyuncs.com/img/gitconfict.png" alt=""></p><h2 id="basic-practice" tabindex="-1">Basic practice <a class="header-anchor" href="#basic-practice" aria-label="Permalink to &quot;Basic practice&quot;">​</a></h2><p>1.Installation</p><ul><li>Linux</li></ul><p><code>$ sudo apt-get install git-all</code></p><ul><li>Mac</li></ul><p>terminal click ：<br><code>git clone https://github.com/git/git</code></p><p><code>$ git</code> If you don&#39;t have it, OSX will ask you to install <a href="./developer.apple.com/download/">XCode Developer tools:command line tools</a>.</p><p>If you want a new version download it from the main Git site and install like any other mac app.</p><ul><li>Windows</li></ul><p>The best way to get started on Windows is to <a href="https://git-scm.com/downloads#/" target="_blank" rel="noreferrer">download Git for Windows</a></p><p>2.Configure,setting up local identity</p><p>Configure user&#39;s name, user&#39;s email ,in our case, it connect with gitlab</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>$ git config user.name &quot;XXX&quot;  </span></span>
<span class="line"><span>$ git config user.email &quot;XXX@xx.com&quot;:</span></span></code></pre></div><p>&quot;mkdir&quot; used to build a new folder; &quot;touch&quot;used to build a new file; &quot;cd&quot; used to open local file</p><p><code>$ cd /Users/douboy/Documents/gitlab </code><br> Initialized empty Git repository <code>$ git init </code><br><code>Initialized empty Git repository in /Users/douboy/Documents/gitlab</code></p><p>3.Clone ,pull</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>$ douboydeMacBook-Pro:gitlab douboy$ git clone git@gitlab.fabcloud.org:academany/fabacademy/2018/labs/fablaboshanghai/students/bob-wu.git</span></span>
<span class="line"><span>Cloning into &#39;bob-wu&#39;...</span></span>
<span class="line"><span>remote: Counting objects: 670, done.</span></span>
<span class="line"><span>remote: Compressing objects: 100% (48/48), done.</span></span>
<span class="line"><span>remote: Total 670 (delta 64), reused 91 (delta 55)</span></span>
<span class="line"><span>Receiving objects: 100% (670/670), 6.55 MiB | 1.11 MiB/s, done.</span></span>
<span class="line"><span>Resolving deltas: 100% (378/378), done.</span></span>
<span class="line"><span>$ douboydeMacBook-Pro:bob-wu douboy$ git pull origin master</span></span>
<span class="line"><span>From gitlab.fabcloud.org:academany/fabacademy/2018/labs/fablaboshanghai/students/bob-wu</span></span>
<span class="line"><span>* branch            master     -&gt; FETCH_HEAD</span></span>
<span class="line"><span>Already up-to-date.</span></span></code></pre></div><p>git pull :<br><code>$ git pull origin master</code></p><p>4.Stageing files: git add,git commit</p><p>git add --all (git add -A) git commit -m &quot;write commit&quot; ,you can write what you want in the part of &quot;write commit&quot;</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>$ git add --all</span></span>
<span class="line"><span>$ git commit -m &quot;code&quot;</span></span>
<span class="line"><span>[master 0611cd9] code</span></span>
<span class="line"><span>1 file changed, 16 insertions(+), 16 deletions(-)</span></span>
<span class="line"><span>douboydeMacBook-Pro:bob-wu douboy$ git push</span></span>
<span class="line"><span>Counting objects: 5, done.</span></span>
<span class="line"><span>Delta compression using up to 4 threads.</span></span>
<span class="line"><span>Compressing objects: 100% (5/5), done.</span></span>
<span class="line"><span>Writing objects: 100% (5/5), 642 bytes | 642.00 KiB/s, done.</span></span>
<span class="line"><span>Total 5 (delta 4), reused 0 (delta 0)</span></span>
<span class="line"><span>To gitlab.fabcloud.org:academany/fabacademy/2018/labs/fablaboshanghai/students/bob-wu.git</span></span>
<span class="line"><span>  d1567a2..0611cd9  master -&gt; master</span></span></code></pre></div><p>5.git diff:Edit one or more files, then check what you changed since the last commit</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>$ git diff test2.txt </span></span>
<span class="line"><span>diff --git a/test2.txt b/test2.txt</span></span>
<span class="line"><span>index b0b9fc8..835f9c0 100644</span></span>
<span class="line"><span>--- a/test2.txt</span></span>
<span class="line"><span>+++ b/test2.txt</span></span>
<span class="line"><span>@@ -1 +1,4 @@</span></span>
<span class="line"><span>Another file</span></span>
<span class="line"><span>+</span></span>
<span class="line"><span>+</span></span>
<span class="line"><span>+This is the new content of the file</span></span></code></pre></div><p>6.git rm:removing files</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>$ git rm test.txt</span></span>
<span class="line"><span>rm &#39;test.txt&#39;</span></span>
<span class="line"><span>$ git status</span></span>
<span class="line"><span>On branch master</span></span>
<span class="line"><span>Changes to be committed:</span></span>
<span class="line"><span>  (use &quot;git reset HEAD &lt;file&gt;...&quot; to unstage)</span></span>
<span class="line"><span>    deleted:    test.txt</span></span></code></pre></div><p>7.git log</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>git log: Looking at the commit history</span></span></code></pre></div><p>8.git push: Push the local data to gitlab</p><p>The following is the structure of local operation</p><p><img src="https://ws4.sinaimg.cn/large/006tKfTcgy1fo87qzfvpzj30jg081mx3.jpg" alt=""><img src="https://ws3.sinaimg.cn/large/006tKfTcgy1fo87rio118j30m80c90sy.jpg" alt=""></p><h2 id="faq" tabindex="-1">FAQ <a class="header-anchor" href="#faq" aria-label="Permalink to &quot;FAQ&quot;">​</a></h2><ol><li>git push Please make sure you have the correct access rights</li></ol><pre><code>
  sh-3.2$ git config user.name &quot;user name&quot;
  sh-3.2$ git config user.email &quot;user email&quot;
  sh-3.2$ git add --all
  sh-3.2$ git commit -m &quot;update &quot;
  [master b0739b3] update summary.md
  1 file changed, 1 insertion(+)
  sh-3.2$ git push origin master
  remote: 
  remote: ========================================================================
  remote: 
  remote: You are not allowed to push code to this project.
  remote: 
  remote: ========================================================================
  remote: 
  fatal: Could not read from remote repository.
  Please make sure you have the correct access rights
  and the repository exists.
  </code></pre><p>There is no ssh key in gitlab . we need build ssh in local and then update in gitlab</p><pre><code>
  sh-3.2$ ssh-keygen -t rsa -C &quot;user email&quot;
  Generating public/private rsa key pair.
  Enter file in which to save the key (/Users/douboy/.ssh/id_rsa): 
  /Users/douboy/.ssh/id_rsa already exists.
  Overwrite (y/n)? y
  Enter passphrase (empty for no passphrase): 
  Enter same passphrase again: 
  Your identification has been saved in /Users/douboy/.ssh/id_rsa.
  Your public key has been saved in /Users/douboy/.ssh/id_rsa.pub.
  The key fingerprint is:
  SHA256:wG7SjdUw8QvremcZeYlHmXDQ/NqdWCNnao/mKn1WdSc bobwu0214@126.com
  The key&#39;s randomart image is:
  +---[RSA 3072]----+
  |        +..+     |
  |     .   =. +    |
  |      o o oo +   |
  |     o = o .+.E=+|
  |    . = S .+ +Bo*|
  |     o .  + =+.o.|
  |        . .=. +  |
  |       ...+. = . |
  |      .. o..*.   |
  +----[SHA256]-----+

  sh-3.2$ cat ~/.ssh/id_rsa.pub
  ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABgQDDk8GjUmfY3OIWeHg3l4PloAjUDP1n4SX317LB3ezLhNnowxkOeH89wUrzkCAa4ZDiiWTPVCov+uvBb4jj8FHhW1q29HP+8Dh9vr1Cofccc3A2TTahhR9Cn3Qxboi7/jPaJ4kzh6iXFC4yqE2wQgxvkkFp1dtBAOTjDEJyjhIVO5lBryUoSLyuGwkzBv0mQgW5Hj131w/fk2EsHUDj1KCPfFryR9kQMarbuZgqpLmAQNgtOL7P+FAPUvdxf9FHXtMD+fooB+PIVCBrne3OejpVQWkMHCm2735SSrmm6+PVWLveWmQsXhJ2AlqnVgxKFj9hI0i3k0WtzJY/AYUb4QzAY4PR/umFtkA4ZYreNAqgf4TejDx1u/C2iGB20OIgeg08kImXCvgqSFEKhURCCzp4+PIP1ZkOv7BPGqrpdQbJQRO7ix+t6+lmYfmwS7YXVmDwcCRaLW7b+BCtfBTNiH+xvlCWFj/dXiaBCKVVT7PAoYt43wlKJeEFDhnSGJmALtE= bobwu0214@126.com
  </code></pre><p>copy ssh to gitlab ssh key <br><img src="https://gitlab.com/picbed/bed/uploads/a3cc86b0757d9029cf2f54f86f2f5fc0/WX20210923-210237.png" alt=""><br> Then run git push again</p><pre><code>
  sh-3.2$ git push origin master
  Enter passphrase for key &#39;/Users/douboy/.ssh/id_rsa&#39;: 
  Enumerating objects: 5, done.
  Counting objects: 100% (5/5), done.
  Delta compression using up to 4 threads
  Compressing objects: 100% (3/3), done.
  Writing objects: 100% (3/3), 287 bytes | 287.00 KiB/s, done.
  Total 3 (delta 2), reused 0 (delta 0), pack-reused 0
  To gitlab.com:king0214/gitbooktestaaa.git
    65050a4..b0739b3  master -&gt; master
 </code></pre><p>2.git pull and covery local coding,<br> some time local coding update to new version and online coding new version, so the version conflicts. the following would use online version to covery local</p><pre><code>
    git fetch --all   //git all data from online
    git reset --hard origin/master   //(master would change according to real condition of branch)
    git pull   //pull again
  </code></pre><h3 id="reference" tabindex="-1">Reference <a class="header-anchor" href="#reference" aria-label="Permalink to &quot;Reference&quot;">​</a></h3><ul><li><a href="http://fabacademy.org/2018/recitations/version-control.html#60" target="_blank" rel="noreferrer">guide from fab academy </a></li><li><a href="https://docs.gitlab.com/ce/ssh/README.html" target="_blank" rel="noreferrer">SSH key</a></li><li><a href="https://github.com/sindresorhus/awesome" target="_blank" rel="noreferrer">Git Cheat Sheet 中文版</a></li><li><a href="https://en.wikipedia.org/wiki/Git#/" target="_blank" rel="noreferrer">Wiki</a></li><li><a href="https://www.atlassian.com/git/tutorials/what-is-version-control#/" target="_blank" rel="noreferrer">What is version control?</a></li><li><a href="https://zhuanlan.zhihu.com/p/584182115#/" target="_blank" rel="noreferrer">git in zhihu</a></li></ul>`,48)])])}const u=e(i,[["render",o]]);export{h as __pageData,u as default};
